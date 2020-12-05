const path = require('path');
const fs = require('fs');

const CONFIG = {
	ProtoFilterEnabled: false,
	KnownProtoPath: 'Protobufs',
	InputPath: './.support/original_js/',
	OutputPath: './../ValveProtobufs/webui/',
	CommonProtoFileName: 'common.proto',
	ServiceProtoFileNameTemplate: 'service_%svcname%.proto'
};

for (let i = 2; i < process.argv.length; ++i) {
	if (process.argv[i] === '--filter-known-protos') {
		CONFIG.ProtoFilterEnabled = true;
	} else if (process.argv[i].startsWith('--known-protos-dir=')) {
		CONFIG.KnownProtoPath = process.argv[i].substring(19);
	} else if (process.argv[i].startsWith('--input-dir=')) {
		CONFIG.InputPath = process.argv[i].substring(12);
	} else if (process.argv[i].startsWith('--output-dir=')) {
		CONFIG.OutputPath = process.argv[i].substring(13);
	} else {
		console.log('Unknown argument:', process.argv[i]);
	}
}

CONFIG.OutputPath = path.resolve(CONFIG.OutputPath);
if (!fs.existsSync(CONFIG.OutputPath)) {
	fs.mkdirSync(CONFIG.OutputPath, { recursive: true, mode: 0o755 });
}
if (!fs.statSync(CONFIG.OutputPath).isDirectory()) {
	throw `"${CONFIG.OutputPath}" is not a directory`;
}

Promise.all([
	getKnownProtobufMessages(path.resolve(CONFIG.KnownProtoPath)),
	getListOfJSFilesToParse(path.resolve(CONFIG.InputPath))
])
.then(([{knownMessages, knownServices}, files]) => Start(knownMessages, knownServices, files))
.then(() => console.log('OK'))
.catch(console.error);


function Start(knownMessages, knownServices, files) {
	global.window = {};

	files.forEach((file) => {
		try {
			require(file);
		} catch(e) {
			console.error(`Unable to execute "${path.basename(file)}", skipping.`);
		}
	});

	const filteredServices = [];
	let bHasUnknownRequest = false;

	let allProtos;
	window.webpackJsonp.forEach((file) => {
		let fileProtos;
		try {
			fileProtos = handleFile(file[1]);
		} catch(e) {
			console.error(e);
			return;
		}

		if (!allProtos) {
			allProtos = fileProtos;
		} else {
			mergeProtos(allProtos, fileProtos);
		}
	});

	const filteredProtos = allProtos.messages.filter((proto) => !knownMessages.has(proto.name));

	filteredProtos.forEach((proto) => {
		proto.fields.forEach((field) => {
			if (field.type[0] === ".") {
				if (!proto.dependencies)
					proto.dependencies = new Set();
				proto.dependencies.add(field.type.substr(1)); // message name
			}
		});
	});

	allProtos.services.forEach((methods, service) => {
		if (CONFIG.ProtoFilterEnabled && knownServices.has(service)) {
			methods = methods.filter((method) => {
				return !knownServices.get(service).includes(method.name);
			});
		}

		if (methods.length > 0) {
			filteredServices.push({
				service,
				methods
			});

			methods.forEach((method) => {
				// message not found
				if (!method.request) {
					method.request = 'NotImplemented';
					bHasUnknownRequest = true;
				}
				if (!method.response) {
					method.response = 'NotImplemented';
					bHasUnknownRequest = true;
				}
			});
		}
	});

	if (bHasUnknownRequest) {
		filteredProtos.push({ "name": "NotImplemented", "fields": [] });
		knownMessages.set('NotImplemented', CONFIG.CommonProtoFileName);
	}

	Dump(CONFIG.OutputPath, filteredProtos, filteredServices, knownMessages);
}

function mergeProtos(toProtos, fromProtos) {
	fromProtos.messages.forEach((_message) => {
		// do we care about fields? some js files may be based on old proto
		let proto = toProtos.messages.find((message) => message.name === _message.name);
		if (proto) {
			// fix cross-file type dependencies
			proto.fields.forEach((field) => {
				if (field.fixme) {
					let _field = _message.fields.find((_field) => _field.name === field.name);
					if (_field && !_field.fixme) {
						field.type = _field.type;
						field.fixme = false;
					}
				}
			});
		} else {
			toProtos.messages.push(_message);
		}
	});

	// merge services
	fromProtos.services.forEach((_methods, serviceName) => {
		if (toProtos.services.has(serviceName)) {
			let methods = toProtos.services.get(serviceName);
			_methods.forEach((_method) => {
				let method = methods.find((method) => method.name === _method.name);
				if (method && !method.request && _method.request) {
					// update request name
					method.request = _method.request;
				} else if (!method) {
					// this method doesn't exist in other file, protos are out of sync(?)
					methods.push(_method);
				}
			});
		} else {
			toProtos.services.set(serviceName, _methods);
		}
	});
}

function extractDependencies(allProtos, protoName, knownMessages) {
	let protos = [];
	let imports = new Set();
	const file = knownMessages.get(protoName);
	if (file) {
		imports.add(file);
	} else {
		let index = allProtos.findIndex((proto) => proto.name === protoName);
		if (index === -1) {
			// FixMe!!
			//console.error('Could not find dependency:', protoName);
		} else {
			let proto = allProtos.splice(index, 1)[0];
			protos.push(proto);
			if (proto.dependencies) {
				proto.dependencies.forEach((depName) => {
					let deps = extractDependencies(allProtos, depName, knownMessages);
					protos.push(...deps.protos);
					deps.imports.forEach((file) => imports.add(file));
				});
			}
		}
	}
	return {protos, imports};
}

function getListOfJSFilesToParse(dirName) {
	return fs.promises.readdir(dirName).then((files) =>
		files.filter((fileName) => fileName.endsWith('js'))
			.map((fileName) => path.join(dirName, fileName))
	);
}

function getKnownProtobufMessages(dirName) {
	const msgRegex = /([ \t]*)message (\w+) \{/g;
	const svcRegex = /service (\w+) \{|rpc (\w+) \(/g;
	const knownMessages = new Map();
	const knownServices = new Map();
	let MsgAndLevel = [];

	if (!CONFIG.ProtoFilterEnabled) {
		return Promise.resolve({knownMessages, knownServices});
	}

	return fs.promises.readdir(dirName).then((files) => {
		files.filter((file) => file.endsWith(".proto")).forEach((fileName) => {
			let file = fs.readFileSync(path.join(dirName, fileName)).toString();

			let matches;
			while (matches = msgRegex.exec(file)) {
				let currLevel = matches[1].length;
				let msgName = matches[2];

				if (MsgAndLevel[0] && MsgAndLevel[0].level >= currLevel) {
					let prevMsg;
					do {
						prevMsg = MsgAndLevel.shift();
					} while (prevMsg && prevMsg.level > currLevel);
				}
				if (MsgAndLevel[0]) {
					msgName = MsgAndLevel[0].name + '_' + msgName;
				}

				MsgAndLevel.unshift({ "name": msgName, "level": currLevel });
				knownMessages.set(msgName, fileName);
			}

			let methods;
			while (matches = svcRegex.exec(file)) {
				if (matches[1]) {
					// service name
					knownServices.set(matches[1], methods = []);
				} else {
					// method name
					methods.push(matches[2]);
				}
			}
		});

		return {knownMessages, knownServices};
	});
}

function handleFile(file) {
	const moduleProtosMap = new Map();
	let protoShortNamesToLongNames = {};
	let protoShortNamesAliases = {};
	let messages = [];

	let svcRex = /(?:SendNotification\()?"(\w+)\.(\w+)#1",(?:request:([_a-zA-Z\$]{1,2})|\w[\),]([_a-zA-Z\$]{1,2})?)/g;
	const services = new Map();

	let modules = new Map();
	for (let moduleName in file) {
		modules.set(moduleName, file[moduleName].toString());
	}

	// 1-st pass
	modules.forEach((module, currentModuleName) => {
		let protoConstructorMatch = module.match(/([_a-zA-Z\$]{1,2})(?==\(?(?:[_a-zA-Z\$]\("[\w\+\/]{4}"\),)*(?:[_a-zA-Z\$]{1,2}\.Message,?)+\)?)/g);
		if (!protoConstructorMatch)
			return;

		let currentModuleProtos = [];
		protoShortNamesToLongNames[currentModuleName] = {};
		protoShortNamesAliases[currentModuleName] = {};

		(module.match(/[a-z]\.[a-z]\([a-z],"([a-zA-Z]+)",\(?function\(\){return ([_a-zA-Z]+)}\)/g) || []).forEach((alias) => {
			let [/*skip*/, aliasName, protoShortName] = alias.match(/[a-z]\.[a-z]\([a-z],"([a-zA-Z]+)",\(?function\(\){return ([_a-zA-Z]+)}\)/);
			protoShortNamesAliases[currentModuleName][aliasName] = protoShortName;
		});

		protoConstructorMatch = protoConstructorMatch.map(x => '\\(' + x + '\\)').join('|');

		// Each message is immediately followed by (x) or (xx) so split on that
		module.split(new RegExp('(' + protoConstructorMatch + ')[,;\\}]')).forEach((part) => {
			let match = part.match(/([_a-zA-Z\$]{1,2})=function\([a-zA-Z\$]{1,2}\){function [a-zA-Z\$]\([a-zA-Z\$]\){.{1,120}\.initialize.*}$/);
			if (!match) {
				return;
			}

			// Extract the minified variable name
			let minVarName = match[1];

			let func = match[0]
				.replace(/^[_a-zA-Z\$]{1,2}=/, '') // var name
				.replace(/(Object\()?[_a-zA-Z\$]{1,2}\.[a-zA-Z\$]\)?\([a-zA-Z\$],[a-zA-Z\$]\),/g, '') // junk
				.replace(/(?<=c:)([_a-zA-Z\$]{1,2}(\.[_a-zA-Z\$]{1,2})?)(?=,)?/g, '"$1"') // constructor
				.replace(/(?<=br:|bw:)[^,\}]+?(?:read|write)(\w+)(?=,)?/g, '"$1"'); // reader/writer

			eval('func=(' + func + ')');
			let proto = decodeProtobuf(func(), minVarName);
			currentModuleProtos.push(proto);
			messages.push(proto);
			protoShortNamesToLongNames[currentModuleName][minVarName] = proto.name;
		});

		moduleProtosMap.set(currentModuleName, currentModuleProtos);

		let matches;

		while (matches = svcRex.exec(module)) {
			let svcName = matches[1],
				methodName = matches[2],
				msgRequestName = null, msgResponseName = null;
			if (matches[3]) { // S->C notification
				msgRequestName = protoShortNamesToLongNames[currentModuleName][matches[3]];
			} else if (matches[4]) { // response
				msgResponseName = protoShortNamesToLongNames[currentModuleName][matches[4]];
			} else { // C->S notification
				// try to fix it below
			}

			if (!msgRequestName) {
				let proto = currentModuleProtos.find((proto) =>
					(proto.name === "C" + svcName + "_" + methodName + (matches[4] ? "_Request" : "_Notification"))
						|| !matches[4] && (proto.name === "C" + svcName + "_" + methodName.replace(/^Notify/, "") + "_Notification")
				);
				if (!proto && msgResponseName) {
					proto = currentModuleProtos.find((proto) => proto.name === msgResponseName.replace(/_Response$/, "_Request"));
				}
				if (proto) {
					msgRequestName = proto.name;
				}
			}

			if (!msgResponseName && !matches[4]) {
				msgResponseName = "NoResponse";
			}

			if (!services.has(svcName)) {
				services.set(svcName, []);
			}

			services.get(svcName).push({
				"name": methodName,
				"request": msgRequestName,
				"response": msgResponseName
			});
		}
	});

	// 2-nd pass
	modules.forEach((module, currentModuleName) => {
		if (!moduleProtosMap.has(currentModuleName))
			return;

		moduleProtosMap.get(currentModuleName).forEach((proto) => {
			proto.fields.forEach((field) => {
				if (protoShortNamesToLongNames[currentModuleName][field.type]) {
					field.type = '.' + protoShortNamesToLongNames[currentModuleName][field.type];
				} else if (field.type.includes('.')) {
					let [moduleVarName, typeShortNameAlias] = field.type.split('.');
					let match = module.match(new RegExp(moduleVarName + '=[a-z]\\("([\\w\\+\\/]{4})"\\)'));
					if (match && protoShortNamesToLongNames[match[1]] && protoShortNamesAliases[match[1]]) {
						field.type = '.' + protoShortNamesToLongNames[match[1]][
							protoShortNamesAliases[match[1]][typeShortNameAlias]
						];
					} else {
						// external dependency? will be resolved on merge time
						field.type = 'UNKNOWN';
						field.fixme = true;
					}
				}
			});
		});
	});

	return {messages, services};
}

function decodeProtobuf(proto, minVarName) {
	let name = proto.prototype.getClassName();
	let fields = [];

	let protoFields = proto.M ? proto.M().fields : {};

	for (let fieldName in protoFields) {
		let field = protoFields[fieldName];
		let fieldDesc = {
			id: field.n,
			flag: field.r ? 'repeated' : 'optional',
			name: fieldName,
			type: '?'
		};

		if (field.c) {
			// It's a nested message of some sort
			if (field.c === proto.name) { // constructor name, special case for recursive messages
				fieldDesc.type = minVarName;
			} else {
				fieldDesc.type = field.c;
			}
		} else {
			fieldDesc.type = field.br.toLowerCase().replace('64string', '64');
			if (fieldDesc.type === 'enum') {
				// ToDo: RE enums
				fieldDesc.type = 'int32';
				fieldDesc.description = 'enum';
			}
		}

		// default?
		if (field.hasOwnProperty('d')) {
			if (fieldDesc.type === 'string') {
				fieldDesc.default = JSON.stringify(field.d);
			} else {
				fieldDesc.default = field.d;
			}
		}

		fields.push(fieldDesc);
	}

	return {name, fields};
}

function Dump(outputFullPath, filteredProtos, filteredServices, knownMessages) {
	// dump services
	while (filteredServices.length) {
		let servicesToDump = [];
		let index = -1;
		let nonClientName;
		let service = filteredServices.shift();
		servicesToDump.push(service);

		// dump "Svcname" + "SvcnameClient" + "SvcnameNotifications" together
		if (service.service.endsWith('Client')) {
			nonClientName = service.service.substr(0, service.service.length - 6);
			index = filteredServices.findIndex((otherService) => otherService.service === nonClientName);
			if (index !== -1) {
				servicesToDump.push(filteredServices.splice(index, 1)[0]);
			}
		}
		// ToDo: repeat?
		index = filteredServices.findIndex((otherService) => otherService.service === service.service + 'Client' || otherService.service === service.service + 'Notifications' || (!!nonClientName && otherService.service === nonClientName + 'Notifications'));
		if (index !== -1) {
			servicesToDump.push(filteredServices.splice(index, 1)[0]);
		}

		let protosToDump = [];
		let importsToDump = new Set(['steammessages_unified_base.steamclient.proto']); // always include "unified_base" to service proto

		for (service of servicesToDump) {
			for (const method of service.methods) {
				let deps = extractDependencies(filteredProtos, method.request, knownMessages);
				protosToDump.push(...deps.protos);
				deps.imports.forEach((file) => importsToDump.add(file));
				if (method.response !== 'NoResponse') {
					deps = extractDependencies(filteredProtos, method.response, knownMessages);
					protosToDump.push(...deps.protos);
					deps.imports.forEach((file) => importsToDump.add(file));
				}
			}
		}

		let svcName = nonClientName || servicesToDump[0].service;
		
		if (CONFIG.ProtoFilterEnabled) {
			// if/when filtering is enabled, find orphaned messages "CSvcname_*" and add them to dump
			index = filteredProtos.findIndex((proto) => proto.name.startsWith('C' + svcName + '_'));
			if (index !== -1) {
				let proto = filteredProtos.splice(index, 1)[0];
				protosToDump.push(proto);
				if (proto.dependencies) {
					proto.dependencies.forEach((depName) => {
						let deps = extractDependencies(filteredProtos, depName, knownMessages);
						protosToDump.push(...deps.protos);
						deps.imports.forEach((file) => importsToDump.add(file));
					});
				}
			}
		}

		let fileName = CONFIG.ServiceProtoFileNameTemplate.replace('%svcname%', svcName.toLowerCase());
		fileName = path.join(outputFullPath, fileName);
		outputToFile(fileName, importsToDump, protosToDump, servicesToDump);
	}

	// dump remaining common protos
	const imports = new Set();

	if (CONFIG.ProtoFilterEnabled) {
		filteredProtos.forEach((proto) => {
			if (proto.dependencies) {
				proto.dependencies.forEach((depName) => {
					const file = knownMessages.get(depName);
					if (file) {
						imports.add(file);
					}
				});
			}
		});
	}

	// sort messages by name to prevent shuffling
	filteredProtos.sort((a, b) => a.name.localeCompare(b.name, 'en-US'));

	let fileName = path.join(outputFullPath, CONFIG.CommonProtoFileName);
	outputToFile(fileName, imports, filteredProtos, filteredServices);
}

function outputImports(imports, stream = process.stdout) {
	for (const importName of imports) {
		stream.write(`import "${importName}";\n`);
	}

	stream.write("\n");
}

function outputServices(services, stream = process.stdout) {
	for (const service of services) {
		stream.write(`service ${service.service} {\n`);

		for (const method of service.methods) {
			stream.write(`\trpc ${method.name} (.${method.request}) returns (.${method.response});\n`);
		}

		stream.write("}\n\n");
	}
}

function outputProtos(protos, stream = process.stdout) {
	protos.forEach((proto) => {
		stream.write(`message ${proto.name} {\n`);
		proto.fields.forEach((field) => {
			stream.write(`\t${field.flag} ${field.type} ${field.name} = ${field.id}`);

			let options = [];
			if (field.hasOwnProperty("default")) {
				options.push(`default = ${field.default}`);
			}
			if (field.hasOwnProperty("description")) {
				options.push(`(description) = "${field.description}"`);
			}
			if (options.length) {
				stream.write(` [${options.join(', ')}]`);
			}
			stream.write(';\n');
		});
		stream.write("}\n\n");
	});
}

function outputToFile(fileName, imports, protos, services) {
	let stream = fs.createWriteStream(fileName, { flags: 'w', encoding: 'utf8' });

	outputImports(imports, stream);
	outputProtos(protos, stream);
	outputServices(services, stream);

	stream.end();
}
