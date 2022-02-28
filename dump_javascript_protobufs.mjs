import path from "path";
import fs from "fs";
import { parse, latestEcmaVersion } from "espree";
import { traverse, Syntax } from "estraverse";

//const files = await GetListOfFilesToParse("./.support/original_js/");
//const files = ["steamcommunity.com\\public\\javascript\\applications\\community\\broadcasts.js"];
const files = ["steamcommunity.com\\public\\javascript\\webui\\steammessages.js"];

for (const file of files) {
	try {
		const code = fs.readFileSync(file);
		const ast = parse(code, { ecmaVersion: latestEcmaVersion, loc: true });
		const crossModuleExportedMessages = new Map();
		const services = [];
		const messages = [];

		traverse(ast, {
			enter: function (node) {
				if (node.type === Syntax.Property) {
					this.skip();

					if (node.value.type !== Syntax.FunctionExpression || node.value.params.length !== 3) {
						// (module, module.exports, __webpack_require__)
						return;
					}

					const result = TraverseModule(node.value);
					let currentModule;

					if (node.key.type === Syntax.Identifier) {
						currentModule = node.key.name;
					} else if (node.key.type === Syntax.Literal) {
						currentModule = node.key.value;
					} else {
						throw new Error("Failed to find key name");
					}

					crossModuleExportedMessages.set(currentModule, result.exportedIds);

					// Look up field types from other messages in same module
					FixTypesSameModule(result.messages);

					services.push(...result.services);
					messages.push(...result.messages);
				}
			},
		});

		FixTypesCrossModule(messages, crossModuleExportedMessages);
		OutputMessages(messages);
		OutputServices(services);
	} catch (e) {
		console.error(`Unable to parse "${path.basename(file)}":`, e);
		continue;
	}
}

function FixTypesCrossModule(messages, crossModuleExportedMessages) {
	for (const message of messages) {
		for (const field of message.fields) {
			if (field.typeToLookup === null) {
				continue;
			}

			if (field.typeToLookup.module !== null) {
				const moduleExported = crossModuleExportedMessages.get(field.typeToLookup.module);

				if (!moduleExported) {
					// TODO: Cross-file modules
					//throw new Error("Failed to find module");
					continue;
				}

				const className = moduleExported.get(field.typeToLookup.name);

				if (!className) {
					throw new Error("Failed to exported name");
				}

				field.type = `.${className}`;
				field.typeToLookup = null;
			}

			if (field.typeToLookup !== null) {
				throw new Error("Failed to find type");
			}
		}
	}
}

function FixTypesSameModule(messages) {
	for (const message of messages) {
		for (const field of message.fields) {
			if (field.typeToLookup !== null && field.typeToLookup.module === null) {
				for (const otherMessage of messages) {
					if (otherMessage.id === field.typeToLookup.name) {
						field.type = `.${otherMessage.className}`;
						field.typeToLookup = null;
						break;
					}
				}

				if (field.typeToLookup !== null) {
					throw new Error("Failed to find type in current module");
				}
			}
		}
	}
}

function OutputMessages(messages, stream = process.stdout) {
	for (const message of messages) {
		stream.write(`message ${message.className} {\n`);

		for (const field of message.fields) {
			stream.write(`\t${field.flag} ${field.type} ${field.name} = ${field.id}`);

			const options = [];

			if (Object.hasOwn(field, "default")) {
				options.push(`default = ${field.default}`);
			}

			if (Object.hasOwn(field, "description")) {
				options.push(`(description) = "${field.description}"`);
			}

			if (options.length > 0) {
				stream.write(" [");
				stream.write(options.join(", "));
				stream.write("]");
			}

			stream.write(";\n");
		}

		stream.write("}\n\n");
	}
}

function OutputServices(services, stream = process.stdout) {
	for (const service of services) {
		stream.write(`\trpc ${service.name}\n`);
		/*
		stream.write(`service ${service.service} {\n`);

		for (const method of service.methods) {
			stream.write(`\trpc ${method.name} (.${method.request}) returns (.${method.response});\n`);
		}

		stream.write("}\n\n");
		*/
	}
}

function TraverseModule(ast) {
	const services = [];
	const messages = [];
	const importedIds = new Map();
	const exportedIds = new Map();
	const exportedIdsFlipped = new Map();
	const webpackRequireName = ast.params[2].name;
	let messageIdentifier = null;

	traverse(ast, {
		enter: function (node, parent) {
			/*
				r.d(t, "a", function () {
					return m;
				}),
			*/
			if (
				node.type === Syntax.CallExpression &&
				node.callee.type === Syntax.MemberExpression &&
				node.callee.object.name === webpackRequireName &&
				node.callee.property.name === "d"
			) {
				if (
					node.arguments[2].type !== Syntax.FunctionExpression ||
					node.arguments[2].body.type !== Syntax.BlockStatement ||
					node.arguments[2].body.body[0].type !== Syntax.ReturnStatement
				) {
					throw new Error("Unexpected webpack function");
				}

				const exportedId = node.arguments[1].value;
				const localId = node.arguments[2].body.body[0].argument.name;

				exportedIds.set(exportedId, localId);
				exportedIdsFlipped.set(localId, exportedId);

				this.skip();
				return;
			}

			if (node.type === Syntax.FunctionDeclaration) {
				this.skip();
				return;
			}

			/*
				var a = r("q1tI")
			*/
			if (
				node.type === Syntax.VariableDeclarator &&
				node.init?.type === Syntax.CallExpression &&
				node.init.callee.name === webpackRequireName
			) {
				if (node.init.arguments.length !== 1) {
					throw new Error("Unexpected webpack require");
				}

				const localId = node.id.name;
				const importedId = node.init.arguments[0].value;

				importedIds.set(localId, importedId);

				return;
			}

			/*
				var a = (r("poSC"), r("fzER"));
			*/
			if (node.type === Syntax.VariableDeclarator && node.init?.type === Syntax.SequenceExpression) {
				const call = node.init.expressions[node.init.expressions.length - 1];

				if (call.type === Syntax.CallExpression && call.callee.name === webpackRequireName) {
					if (call.arguments.length !== 1) {
						throw new Error("Unexpected webpack require");
					}

					const localId = node.id.name;
					const importedId = call.arguments[0].value;

					importedIds.set(localId, importedId);

					return;
				}
			}

			/*
				const s = a.Message;
			*/
			if (
				node.type === Syntax.VariableDeclarator &&
				node.id.type === Syntax.Identifier &&
				node.init?.type === Syntax.MemberExpression &&
				node.init.property.type === Syntax.Identifier &&
				node.init.property.name === "Message"
			) {
				messageIdentifier = node.id.name;
				return;
			}

			// TODO: Support legacy non-class functions
			/*
				class o extends s {
			*/
			if (
				messageIdentifier !== null &&
				node.type === Syntax.ClassDeclaration &&
				node.superClass?.type === Syntax.Identifier &&
				node.superClass.name === messageIdentifier
			) {
				const message = TraverseClass(node.body, importedIds);
				message.id = node.id.name;
				messages.push(message);

				const exportedId = exportedIdsFlipped.get(node.id.name);

				if (exportedId) {
					exportedIds.set(exportedId, message.className);
				}

				this.skip();
				return;
			}

			/*
				e.NotifyUnlockedH264Handler = {
					name: "VideoClient.NotifyUnlockedH264#1",
					request: o,
				};
			*/
			if (
				node.type === Syntax.ExpressionStatement &&
				node.expression.type === Syntax.AssignmentExpression &&
				node.expression.right.type === Syntax.ObjectExpression &&
				node.expression.right.properties.length === 2 &&
				node.expression.right.properties[0].key.name === "name" &&
				node.expression.right.properties[1].key.name === "request"
			) {
				services.push({
					name: node.expression.right.properties[0].value.value,
				});
				this.skip();
				return;
			}

			/*
				return e.SendMsg("Video.ClientGetVideoURL#1", t, s, {
					ePrivilege: 1,
				});
			*/
			if (node.type === Syntax.MemberExpression && node.property.type === Syntax.Identifier) {
				if (node.property.name === "SendMsg" || node.property.name === "SendNotificaton") {
					services.push(TraverseSendMsg(parent, node.property.name === "SendNotificaton"));
					this.skip();
				}
			}
		},
	});

	return { services, messages, exportedIds };
}

function TraverseClass(ast, importedIds) {
	const message = {
		className: null,
		fields: [],
	};

	traverse(ast, {
		enter: function (node) {
			if (node.type === Syntax.MethodDefinition && node.key.type === Syntax.Identifier && node.key.name === "M") {
				message.fields = TraverseFields(node.value, importedIds);
				this.skip();
				return;
			}

			if (
				node.type === Syntax.MethodDefinition &&
				node.key.type === Syntax.Identifier &&
				node.key.name === "getClassName"
			) {
				message.className = GetClassNameLiteral(node.value);
				this.skip();
			}
		},
	});

	if (message.className === null) {
		throw new Error("Failed to find classname");
	}

	return message;
}

function TraverseFields(ast, importedIds) {
	const fields = [];

	traverse(ast, {
		enter: function (node) {
			if (node.type === Syntax.Property && node.key.type === Syntax.Identifier && node.key.name === "fields") {
				for (const prop of node.value.properties) {
					if (prop.type !== Syntax.Property || prop.value.type !== Syntax.ObjectExpression) {
						throw new Error("Unexpected property");
					}

					const field = {
						id: null,
						name: prop.key.name,
						type: null,
						typeToLookup: null,
						flag: "optional",
					};

					for (const fieldProp of prop.value.properties) {
						if (fieldProp.key.name === "n") {
							if (fieldProp.value.type === Syntax.Literal) {
								field.id = fieldProp.value.value;
							} else {
								throw new Error("Unexpected field.n");
							}
						} else if (fieldProp.key.name === "r") {
							if (EvaluateConstant(fieldProp)) {
								field.flag = "repeated";
							}
						} else if (fieldProp.key.name === "d") {
							field.default = EvaluateConstant(fieldProp);
						} else if (fieldProp.key.name === "c") {
							if (fieldProp.value.type === Syntax.Identifier) {
								field.typeToLookup = {
									module: null,
									name: fieldProp.value.name,
								};
							} else if (fieldProp.value.type === Syntax.MemberExpression) {
								const importedModule = importedIds.get(fieldProp.value.object.name);

								if (!importedModule) {
									throw new Error("Failed to find imported module");
								}

								field.typeToLookup = {
									module: importedModule,
									name: fieldProp.value.property.name,
								};
							} else {
								throw new Error("Unexpected field.c");
							}
						} else if (fieldProp.key.name === "q") {
							// What is "q"?
						} else if (fieldProp.key.name === "br") {
							if (
								fieldProp.value.type === Syntax.MemberExpression &&
								fieldProp.value.property.type === Syntax.Identifier
							) {
								field.type = fieldProp.value.property.name;

								if (!field.type.startsWith("read")) {
									throw new Error("Unexpected field.br");
								}

								field.type = field.type.substring(4).toLowerCase();

								if (field.type.endsWith("64string")) {
									field.type = field.type.substring(0, field.type.length - 6);
								}

								if (field.type === "enum") {
									// TODO: RE enums
									field.type = "int32";
									field.description = "enum";
								}
							} else {
								throw new Error("Unexpected field.br");
							}
						} else if (fieldProp.key.name === "bw") {
							//
						} else {
							throw new Error("Unexpected field");
						}
					}

					fields.push(field);
				}

				this.skip();
			}
		},
	});

	return fields;
}

function GetClassNameLiteral(ast) {
	let value = null;

	traverse(ast, {
		enter: function (node, parent) {
			if (node.type === Syntax.Literal && parent.type === Syntax.ReturnStatement) {
				value = node.value;
			}
		},
	});

	return value;
}

function TraverseSendMsg(node, isNotification) {
	if (
		node.type !== Syntax.CallExpression ||
		node.arguments.length !== 4 ||
		node.arguments[3].type !== Syntax.ObjectExpression
	) {
		throw new Error("Unexpected send msg");
	}

	const name = node.arguments[0].value;

	return {
		name: name,
		isNotification: isNotification,
	};
}

function EvaluateConstant(node) {
	if (node.value.type === Syntax.UnaryExpression && node.value.operator === "!") {
		return node.value.argument.value === 0 ? true : false;
	} else if (node.value.type === Syntax.Literal) {
		return node.value.value;
	}

	throw new Error("Unexpected constant");
}

function GetListOfFilesToParse(dirName) {
	return fs.promises
		.readdir(dirName)
		.then((files) =>
			files.filter((fileName) => fileName.endsWith("js")).map((fileName) => path.join(dirName, fileName))
		);
}
