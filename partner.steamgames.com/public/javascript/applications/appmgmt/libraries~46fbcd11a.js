/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1478],
  {
    73799: (M) => {
      "use strict";
      var z,
        b = (function () {
          function M(M, z) {
            if ("function" != typeof M)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  M +
                  ".",
              );
            (this._batchLoadFn = M),
              (this._maxBatchSize = (function (M) {
                var z = !M || !1 !== M.batch;
                if (!z) return 1;
                var b = M && M.maxBatchSize;
                if (void 0 === b) return 1 / 0;
                if ("number" != typeof b || b < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + b,
                  );
                return b;
              })(z)),
              (this._batchScheduleFn = (function (M) {
                var z = M && M.batchScheduleFn;
                if (void 0 === z) return p;
                if ("function" != typeof z)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + z,
                  );
                return z;
              })(z)),
              (this._cacheKeyFn = (function (M) {
                var z = M && M.cacheKeyFn;
                if (void 0 === z)
                  return function (M) {
                    return M;
                  };
                if ("function" != typeof z)
                  throw new TypeError("cacheKeyFn must be a function: " + z);
                return z;
              })(z)),
              (this._cacheMap = (function (M) {
                var z = !M || !1 !== M.cache;
                if (!z) return null;
                var b = M && M.cacheMap;
                if (void 0 === b) return new Map();
                if (null !== b) {
                  var p = ["get", "set", "delete", "clear"].filter(
                    function (M) {
                      return b && "function" != typeof b[M];
                    },
                  );
                  if (0 !== p.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + p.join(", "),
                    );
                }
                return b;
              })(z)),
              (this._batch = null),
              (this.name = (function (M) {
                if (M && M.name) return M.name;
                return null;
              })(z));
          }
          var z = M.prototype;
          return (
            (z.load = function (M) {
              if (null == M)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(M) +
                    ".",
                );
              var z = (function (M) {
                  var z = M._batch;
                  if (
                    null !== z &&
                    !z.hasDispatched &&
                    z.keys.length < M._maxBatchSize
                  )
                    return z;
                  var b = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (M._batch = b),
                    M._batchScheduleFn(function () {
                      !(function (M, z) {
                        if (((z.hasDispatched = !0), 0 === z.keys.length))
                          return void c(z);
                        var b;
                        try {
                          b = M._batchLoadFn(z.keys);
                        } catch (b) {
                          return O(
                            M,
                            z,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(b) +
                                ".",
                            ),
                          );
                        }
                        if (!b || "function" != typeof b.then)
                          return O(
                            M,
                            z,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(b) +
                                ".",
                            ),
                          );
                        b.then(function (M) {
                          if (!A(M))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(M) +
                                ".",
                            );
                          if (M.length !== z.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(z.keys) +
                                "\n\nValues:\n" +
                                String(M),
                            );
                          c(z);
                          for (var b = 0; b < z.callbacks.length; b++) {
                            var p = M[b];
                            p instanceof Error
                              ? z.callbacks[b].reject(p)
                              : z.callbacks[b].resolve(p);
                          }
                        }).catch(function (b) {
                          O(M, z, b);
                        });
                      })(M, b);
                    }),
                    b
                  );
                })(this),
                b = this._cacheMap,
                p = this._cacheKeyFn(M);
              if (b) {
                var e = b.get(p);
                if (e) {
                  var o = z.cacheHits || (z.cacheHits = []);
                  return new Promise(function (M) {
                    o.push(function () {
                      M(e);
                    });
                  });
                }
              }
              z.keys.push(M);
              var r = new Promise(function (M, b) {
                z.callbacks.push({ resolve: M, reject: b });
              });
              return b && b.set(p, r), r;
            }),
            (z.loadMany = function (M) {
              if (!A(M))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    M +
                    ".",
                );
              for (var z = [], b = 0; b < M.length; b++)
                z.push(
                  this.load(M[b]).catch(function (M) {
                    return M;
                  }),
                );
              return Promise.all(z);
            }),
            (z.clear = function (M) {
              var z = this._cacheMap;
              if (z) {
                var b = this._cacheKeyFn(M);
                z.delete(b);
              }
              return this;
            }),
            (z.clearAll = function () {
              var M = this._cacheMap;
              return M && M.clear(), this;
            }),
            (z.prime = function (M, z) {
              var b = this._cacheMap;
              if (b) {
                var p,
                  O = this._cacheKeyFn(M);
                if (void 0 === b.get(O))
                  z instanceof Error
                    ? (p = Promise.reject(z)).catch(function () {})
                    : (p = Promise.resolve(z)),
                    b.set(O, p);
              }
              return this;
            }),
            M
          );
        })(),
        p =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (M) {
                z || (z = Promise.resolve()),
                  z.then(function () {
                    process.nextTick(M);
                  });
              }
            : "function" == typeof setImmediate
              ? function (M) {
                  setImmediate(M);
                }
              : function (M) {
                  setTimeout(M);
                };
      function O(M, z, b) {
        c(z);
        for (var p = 0; p < z.keys.length; p++)
          M.clear(z.keys[p]), z.callbacks[p].reject(b);
      }
      function c(M) {
        if (M.cacheHits)
          for (var z = 0; z < M.cacheHits.length; z++) M.cacheHits[z]();
      }
      function A(M) {
        return (
          "object" == typeof M &&
          null !== M &&
          "number" == typeof M.length &&
          (0 === M.length ||
            (M.length > 0 &&
              Object.prototype.hasOwnProperty.call(M, M.length - 1)))
        );
      }
      M.exports = b;
    },
    98973: (M, z, b) => {
      (M.exports = b(81417)).tz.load(b(11565));
    },
    81417: function (M, z, b) {
      var p, O, c; //! moment-timezone.js
      //! version : 0.5.44
      //! Copyright (c) JS Foundation and other contributors
      //! license : MIT
      //! github.com/moment/moment-timezone
      !(function (A, e) {
        "use strict";
        M.exports
          ? (M.exports = e(b(37485)))
          : ((O = [b(37485)]),
            void 0 === (c = "function" == typeof (p = e) ? p.apply(z, O) : p) ||
              (M.exports = c));
      })(0, function (M) {
        "use strict";
        void 0 === M.version && M.default && (M = M.default);
        var z,
          b = {},
          p = {},
          O = {},
          c = {},
          A = {};
        (M && "string" == typeof M.version) ||
          g(
            "Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/",
          );
        var e = M.version.split("."),
          o = +e[0],
          r = +e[1];
        function q(M) {
          return M > 96 ? M - 87 : M > 64 ? M - 29 : M - 48;
        }
        function t(M) {
          var z = 0,
            b = M.split("."),
            p = b[0],
            O = b[1] || "",
            c = 1,
            A = 0,
            e = 1;
          for (45 === M.charCodeAt(0) && ((z = 1), (e = -1)); z < p.length; z++)
            A = 60 * A + q(p.charCodeAt(z));
          for (z = 0; z < O.length; z++)
            (c /= 60), (A += q(O.charCodeAt(z)) * c);
          return A * e;
        }
        function i(M) {
          for (var z = 0; z < M.length; z++) M[z] = t(M[z]);
        }
        function a(M, z) {
          var b,
            p = [];
          for (b = 0; b < z.length; b++) p[b] = M[z[b]];
          return p;
        }
        function n(M) {
          var z = M.split("|"),
            b = z[2].split(" "),
            p = z[3].split(""),
            O = z[4].split(" ");
          return (
            i(b),
            i(p),
            i(O),
            (function (M, z) {
              for (var b = 0; b < z; b++)
                M[b] = Math.round((M[b - 1] || 0) + 6e4 * M[b]);
              M[z - 1] = 1 / 0;
            })(O, p.length),
            {
              name: z[0],
              abbrs: a(z[1].split(" "), p),
              offsets: a(b, p),
              untils: O,
              population: 0 | z[5],
            }
          );
        }
        function W(M) {
          M && this._set(n(M));
        }
        function d(M, z) {
          (this.name = M), (this.zones = z);
        }
        function s(M) {
          var z = M.toTimeString(),
            b = z.match(/\([a-z ]+\)/i);
          "GMT" ===
            (b =
              b && b[0]
                ? (b = b[0].match(/[A-Z]/g))
                  ? b.join("")
                  : void 0
                : (b = z.match(/[A-Z]{3,5}/g))
                  ? b[0]
                  : void 0) && (b = void 0),
            (this.at = +M),
            (this.abbr = b),
            (this.offset = M.getTimezoneOffset());
        }
        function R(M) {
          (this.zone = M), (this.offsetScore = 0), (this.abbrScore = 0);
        }
        function B(M, z) {
          for (var b, p; (p = 6e4 * (((z.at - M.at) / 12e4) | 0)); )
            (b = new s(new Date(M.at + p))).offset === M.offset
              ? (M = b)
              : (z = b);
          return M;
        }
        function u(M, z) {
          return M.offsetScore !== z.offsetScore
            ? M.offsetScore - z.offsetScore
            : M.abbrScore !== z.abbrScore
              ? M.abbrScore - z.abbrScore
              : M.zone.population !== z.zone.population
                ? z.zone.population - M.zone.population
                : z.zone.name.localeCompare(M.zone.name);
        }
        function l(M, z) {
          var b, p;
          for (i(z), b = 0; b < z.length; b++)
            (p = z[b]), (A[p] = A[p] || {}), (A[p][M] = !0);
        }
        function f(M) {
          var z,
            b,
            p,
            O,
            e = M.length,
            o = {},
            r = [],
            q = {};
          for (z = 0; z < e; z++)
            if (((p = M[z].offset), !q.hasOwnProperty(p))) {
              for (b in (O = A[p] || {})) O.hasOwnProperty(b) && (o[b] = !0);
              q[p] = !0;
            }
          for (z in o) o.hasOwnProperty(z) && r.push(c[z]);
          return r;
        }
        function L() {
          try {
            var M = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (M && M.length > 3) {
              var z = c[m(M)];
              if (z) return z;
              g(
                "Moment Timezone found " +
                  M +
                  " from the Intl api, but did not have that data loaded.",
              );
            }
          } catch (M) {}
          var b,
            p,
            O,
            A = (function () {
              var M,
                z,
                b,
                p,
                O = new Date().getFullYear() - 2,
                c = new s(new Date(O, 0, 1)),
                A = c.offset,
                e = [c];
              for (p = 1; p < 48; p++)
                (b = new Date(O, p, 1).getTimezoneOffset()) !== A &&
                  ((M = B(c, (z = new s(new Date(O, p, 1))))),
                  e.push(M),
                  e.push(new s(new Date(M.at + 6e4))),
                  (c = z),
                  (A = b));
              for (p = 0; p < 4; p++)
                e.push(new s(new Date(O + p, 0, 1))),
                  e.push(new s(new Date(O + p, 6, 1)));
              return e;
            })(),
            e = A.length,
            o = f(A),
            r = [];
          for (p = 0; p < o.length; p++) {
            for (b = new R(X(o[p]), e), O = 0; O < e; O++)
              b.scoreOffsetAt(A[O]);
            r.push(b);
          }
          return r.sort(u), r.length > 0 ? r[0].zone.name : void 0;
        }
        function m(M) {
          return (M || "").toLowerCase().replace(/\//g, "_");
        }
        function N(M) {
          var z, p, O, A;
          for ("string" == typeof M && (M = [M]), z = 0; z < M.length; z++)
            (A = m((p = (O = M[z].split("|"))[0]))),
              (b[A] = M[z]),
              (c[A] = p),
              l(A, O[2].split(" "));
        }
        function X(M, z) {
          M = m(M);
          var O,
            A = b[M];
          return A instanceof W
            ? A
            : "string" == typeof A
              ? ((A = new W(A)), (b[M] = A), A)
              : p[M] && z !== X && (O = X(p[M], X))
                ? ((A = b[M] = new W())._set(O), (A.name = c[M]), A)
                : null;
        }
        function y(M) {
          var z, b, O, A;
          for ("string" == typeof M && (M = [M]), z = 0; z < M.length; z++)
            (O = m((b = M[z].split("|"))[0])),
              (A = m(b[1])),
              (p[O] = A),
              (c[O] = b[0]),
              (p[A] = O),
              (c[A] = b[1]);
        }
        function T(M) {
          var z = "X" === M._f || "x" === M._f;
          return !(!M._a || void 0 !== M._tzm || z);
        }
        function g(M) {
          "undefined" != typeof console &&
            "function" == typeof console.error &&
            console.error(M);
        }
        function _(z) {
          var b,
            p = Array.prototype.slice.call(arguments, 0, -1),
            O = arguments[arguments.length - 1],
            c = M.utc.apply(null, p);
          return (
            !M.isMoment(z) &&
              T(c) &&
              (b = X(O)) &&
              c.add(b.parse(c), "minutes"),
            c.tz(O),
            c
          );
        }
        (o < 2 || (2 === o && r < 6)) &&
          g(
            "Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " +
              M.version +
              ". See momentjs.com",
          ),
          (W.prototype = {
            _set: function (M) {
              (this.name = M.name),
                (this.abbrs = M.abbrs),
                (this.untils = M.untils),
                (this.offsets = M.offsets),
                (this.population = M.population);
            },
            _index: function (M) {
              var z;
              if (
                (z = (function (M, z) {
                  var b,
                    p = z.length;
                  if (M < z[0]) return 0;
                  if (p > 1 && z[p - 1] === 1 / 0 && M >= z[p - 2])
                    return p - 1;
                  if (M >= z[p - 1]) return -1;
                  for (var O = 0, c = p - 1; c - O > 1; )
                    z[(b = Math.floor((O + c) / 2))] <= M ? (O = b) : (c = b);
                  return c;
                })(+M, this.untils)) >= 0
              )
                return z;
            },
            countries: function () {
              var M = this.name;
              return Object.keys(O).filter(function (z) {
                return -1 !== O[z].zones.indexOf(M);
              });
            },
            parse: function (M) {
              var z,
                b,
                p,
                O,
                c = +M,
                A = this.offsets,
                e = this.untils,
                o = e.length - 1;
              for (O = 0; O < o; O++)
                if (
                  ((z = A[O]),
                  (b = A[O + 1]),
                  (p = A[O ? O - 1 : O]),
                  z < b && _.moveAmbiguousForward
                    ? (z = b)
                    : z > p && _.moveInvalidForward && (z = p),
                  c < e[O] - 6e4 * z)
                )
                  return A[O];
              return A[o];
            },
            abbr: function (M) {
              return this.abbrs[this._index(M)];
            },
            offset: function (M) {
              return (
                g("zone.offset has been deprecated in favor of zone.utcOffset"),
                this.offsets[this._index(M)]
              );
            },
            utcOffset: function (M) {
              return this.offsets[this._index(M)];
            },
          }),
          (R.prototype.scoreOffsetAt = function (M) {
            (this.offsetScore += Math.abs(
              this.zone.utcOffset(M.at) - M.offset,
            )),
              this.zone.abbr(M.at).replace(/[^A-Z]/g, "") !== M.abbr &&
                this.abbrScore++;
          }),
          (_.version = "0.5.44"),
          (_.dataVersion = ""),
          (_._zones = b),
          (_._links = p),
          (_._names = c),
          (_._countries = O),
          (_.add = N),
          (_.link = y),
          (_.load = function (M) {
            N(M.zones),
              y(M.links),
              (function (M) {
                var z, b, p, c;
                if (M && M.length)
                  for (z = 0; z < M.length; z++)
                    (b = (c = M[z].split("|"))[0].toUpperCase()),
                      (p = c[1].split(" ")),
                      (O[b] = new d(b, p));
              })(M.countries),
              (_.dataVersion = M.version);
          }),
          (_.zone = X),
          (_.zoneExists = function M(z) {
            return (
              M.didShowError ||
                ((M.didShowError = !0),
                g(
                  "moment.tz.zoneExists('" +
                    z +
                    "') has been deprecated in favor of !moment.tz.zone('" +
                    z +
                    "')",
                )),
              !!X(z)
            );
          }),
          (_.guess = function (M) {
            return (z && !M) || (z = L()), z;
          }),
          (_.names = function () {
            var M,
              z = [];
            for (M in c)
              c.hasOwnProperty(M) && (b[M] || b[p[M]]) && c[M] && z.push(c[M]);
            return z.sort();
          }),
          (_.Zone = W),
          (_.unpack = n),
          (_.unpackBase60 = t),
          (_.needsOffset = T),
          (_.moveInvalidForward = !0),
          (_.moveAmbiguousForward = !1),
          (_.countries = function () {
            return Object.keys(O);
          }),
          (_.zonesForCountry = function (M, z) {
            var b;
            if (((b = (b = M).toUpperCase()), !(M = O[b] || null))) return null;
            var p = M.zones.sort();
            return z
              ? p.map(function (M) {
                  return { name: M, offset: X(M).utcOffset(new Date()) };
                })
              : p;
          });
        var w,
          S = M.fn;
        function h(M) {
          return function () {
            return this._z ? this._z.abbr(this) : M.call(this);
          };
        }
        function F(M) {
          return function () {
            return (this._z = null), M.apply(this, arguments);
          };
        }
        (M.tz = _),
          (M.defaultZone = null),
          (M.updateOffset = function (z, b) {
            var p,
              O = M.defaultZone;
            if (
              (void 0 === z._z &&
                (O &&
                  T(z) &&
                  !z._isUTC &&
                  z.isValid() &&
                  ((z._d = M.utc(z._a)._d), z.utc().add(O.parse(z), "minutes")),
                (z._z = O)),
              z._z)
            )
              if (
                ((p = z._z.utcOffset(z)),
                Math.abs(p) < 16 && (p /= 60),
                void 0 !== z.utcOffset)
              ) {
                var c = z._z;
                z.utcOffset(-p, b), (z._z = c);
              } else z.zone(p, b);
          }),
          (S.tz = function (z, b) {
            if (z) {
              if ("string" != typeof z)
                throw new Error(
                  "Time zone name must be a string, got " +
                    z +
                    " [" +
                    typeof z +
                    "]",
                );
              return (
                (this._z = X(z)),
                this._z
                  ? M.updateOffset(this, b)
                  : g(
                      "Moment Timezone has no data for " +
                        z +
                        ". See http://momentjs.com/timezone/docs/#/data-loading/.",
                    ),
                this
              );
            }
            if (this._z) return this._z.name;
          }),
          (S.zoneName = h(S.zoneName)),
          (S.zoneAbbr = h(S.zoneAbbr)),
          (S.utc = F(S.utc)),
          (S.local = F(S.local)),
          (S.utcOffset =
            ((w = S.utcOffset),
            function () {
              return (
                arguments.length > 0 && (this._z = null),
                w.apply(this, arguments)
              );
            })),
          (M.tz.setDefault = function (z) {
            return (
              (o < 2 || (2 === o && r < 9)) &&
                g(
                  "Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " +
                    M.version +
                    ".",
                ),
              (M.defaultZone = z ? X(z) : null),
              M
            );
          });
        var E = M.momentProperties;
        return (
          "[object Array]" === Object.prototype.toString.call(E)
            ? (E.push("_z"), E.push("_a"))
            : E && (E._z = null),
          M
        );
      });
    },
    82182: (M, z, b) => {
      "use strict";
      b.d(z, {
        AP: () => fz,
        No: () => Xz,
        Oz: () => yz,
        Sv: () => aM,
        bM: () => ez,
        lk: () => Hz,
        n8: () => lz,
        oh: () => n,
      });
      var p = b(10059),
        O = b(39087),
        c = b(79545),
        A = b(23722);
      const e = p.Message;
      class o extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            o.prototype.steamid || O.aR(o.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = O.Bh(o.M())), o.sm_mbf;
        }
        toObject(M = !1) {
          return o.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(o.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(o.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new o();
          return o.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(o.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return o.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(o.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return o.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Request";
        }
      }
      class r extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            r.prototype.sessions || O.aR(r.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            r.sm_m ||
              (r.sm_m = {
                proto: r,
                fields: { sessions: { n: 1, c: q, r: !0, q: !0 } },
              }),
            r.sm_m
          );
        }
        static MBF() {
          return r.sm_mbf || (r.sm_mbf = O.Bh(r.M())), r.sm_mbf;
        }
        toObject(M = !1) {
          return r.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(r.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(r.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new r();
          return r.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(r.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return r.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(r.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return r.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Response";
        }
      }
      class q extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            q.prototype.time_start || O.aR(q.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  time_start: {
                    n: 1,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  time_end: { n: 2, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  appid: { n: 3, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  device_type: {
                    n: 4,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  disconnected: { n: 5, br: O.FE.readBool, bw: O.Xc.writeBool },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = O.Bh(q.M())), q.sm_mbf;
        }
        toObject(M = !1) {
          return q.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(q.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(q.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new q();
          return q.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(q.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return q.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(q.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return q.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession";
        }
      }
      class t extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            t.prototype.min_last_played || O.aR(t.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            t.sm_m ||
              (t.sm_m = {
                proto: t,
                fields: {
                  min_last_played: {
                    n: 1,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            t.sm_m
          );
        }
        static MBF() {
          return t.sm_mbf || (t.sm_mbf = O.Bh(t.M())), t.sm_mbf;
        }
        toObject(M = !1) {
          return t.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(t.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(t.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new t();
          return t.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(t.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return t.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(t.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return t.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class i extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            i.prototype.games || O.aR(i.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            i.sm_m ||
              (i.sm_m = {
                proto: i,
                fields: { games: { n: 1, c: a, r: !0, q: !0 } },
              }),
            i.sm_m
          );
        }
        static MBF() {
          return i.sm_mbf || (i.sm_mbf = O.Bh(i.M())), i.sm_mbf;
        }
        toObject(M = !1) {
          return i.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(i.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(i.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new i();
          return i.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(i.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return i.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(i.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return i.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class a extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            a.prototype.appid || O.aR(a.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  appid: { n: 1, br: O.FE.readInt32, bw: O.Xc.writeInt32 },
                  last_playtime: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  first_playtime: {
                    n: 5,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  playtime_windows_forever: {
                    n: 6,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 7,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 8,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  playtime_deck_forever: {
                    n: 16,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  first_windows_playtime: {
                    n: 9,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  first_mac_playtime: {
                    n: 10,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  first_linux_playtime: {
                    n: 11,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  first_deck_playtime: {
                    n: 17,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  last_windows_playtime: {
                    n: 12,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  last_mac_playtime: {
                    n: 13,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  last_linux_playtime: {
                    n: 14,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  last_deck_playtime: {
                    n: 18,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  playtime_disconnected: {
                    n: 15,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = O.Bh(a.M())), a.sm_mbf;
        }
        toObject(M = !1) {
          return a.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(a.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(a.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new a();
          return a.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(a.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return a.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(a.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return a.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class n extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            n.prototype.steamids || O.aR(n.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            n.sm_m ||
              (n.sm_m = {
                proto: n,
                fields: {
                  steamids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: O.FE.readUint64String,
                    pbr: O.FE.readPackedUint64String,
                    bw: O.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            n.sm_m
          );
        }
        static MBF() {
          return n.sm_mbf || (n.sm_mbf = O.Bh(n.M())), n.sm_mbf;
        }
        toObject(M = !1) {
          return n.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(n.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(n.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new n();
          return n.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(n.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return n.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(n.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return n.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Request";
        }
      }
      class W extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            W.prototype.accounts || O.aR(W.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { accounts: { n: 1, c: d, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = O.Bh(W.M())), W.sm_mbf;
        }
        toObject(M = !1) {
          return W.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(W.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(W.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new W();
          return W.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(W.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return W.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(W.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return W.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response";
        }
      }
      class d extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            d.prototype.public_data || O.aR(d.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  public_data: { n: 1, c: s },
                  private_data: { n: 2, c: R },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = O.Bh(d.M())), d.sm_mbf;
        }
        toObject(M = !1) {
          return d.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(d.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(d.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new d();
          return d.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(d.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return d.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(d.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return d.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
        }
      }
      class s extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            s.prototype.steamid || O.aR(s.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  steamid: {
                    n: 1,
                    q: !0,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  visibility_state: {
                    n: 2,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  privacy_state: {
                    n: 3,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  profile_state: {
                    n: 4,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  ban_expires_time: {
                    n: 7,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  account_flags: {
                    n: 8,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  sha_digest_avatar: {
                    n: 9,
                    br: O.FE.readBytes,
                    bw: O.Xc.writeBytes,
                  },
                  persona_name: {
                    n: 10,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  profile_url: {
                    n: 11,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  content_country_restricted: {
                    n: 12,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = O.Bh(s.M())), s.sm_mbf;
        }
        toObject(M = !1) {
          return s.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(s.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(s.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new s();
          return s.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(s.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return s.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(s.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return s.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
        }
      }
      class R extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            R.prototype.persona_state || O.aR(R.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  persona_state: {
                    n: 1,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  persona_state_flags: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  time_created: {
                    n: 3,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  game_id: {
                    n: 4,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  game_server_steam_id: {
                    n: 5,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  game_server_ip_address: {
                    n: 6,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  game_server_port: {
                    n: 7,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  game_extra_info: {
                    n: 8,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  account_name: {
                    n: 9,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  lobby_steam_id: {
                    n: 10,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  rich_presence_kv: {
                    n: 11,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  broadcast_session_id: {
                    n: 12,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  watching_broadcast_accountid: {
                    n: 13,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  watching_broadcast_appid: {
                    n: 14,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  watching_broadcast_viewers: {
                    n: 15,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  watching_broadcast_title: {
                    n: 16,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  last_logoff_time: {
                    n: 17,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  last_seen_online: {
                    n: 18,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  game_os_type: {
                    n: 19,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  game_device_type: {
                    n: 20,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  game_device_name: {
                    n: 21,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  game_is_private: {
                    n: 22,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = O.Bh(R.M())), R.sm_mbf;
        }
        toObject(M = !1) {
          return R.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(R.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(R.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new R();
          return R.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(R.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return R.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(R.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return R.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
        }
      }
      class B extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return B.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new B();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new B();
          return B.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return B.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return B.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
        }
      }
      class u extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            u.prototype.steamid || O.aR(u.M()),
            e.initialize(this, M, 0, -1, [2], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  mutual_friend_account_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: O.FE.readUint32,
                    pbr: O.FE.readPackedUint32,
                    bw: O.Xc.writeRepeatedUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = O.Bh(u.M())), u.sm_mbf;
        }
        toObject(M = !1) {
          return u.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(u.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(u.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new u();
          return u.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(u.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return u.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(u.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return u.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class l extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            l.prototype.incoming_invite_mutual_friends_lists || O.aR(l.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: u,
                    r: !0,
                    q: !0,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = O.Bh(l.M())), l.sm_mbf;
        }
        toObject(M = !1) {
          return l.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(l.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(l.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new l();
          return l.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(l.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return l.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(l.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return l.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class f extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            f.prototype.steamid || O.aR(f.M()),
            e.initialize(this, M, 0, -1, [4], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  include_appinfo: {
                    n: 2,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  include_played_free_games: {
                    n: 3,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  appids_filter: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: O.FE.readUint32,
                    pbr: O.FE.readPackedUint32,
                    bw: O.Xc.writeRepeatedUint32,
                  },
                  include_free_sub: {
                    n: 5,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  skip_unvetted_apps: {
                    n: 6,
                    d: !0,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  language: { n: 7, br: O.FE.readString, bw: O.Xc.writeString },
                  include_extended_appinfo: {
                    n: 8,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = O.Bh(f.M())), f.sm_mbf;
        }
        toObject(M = !1) {
          return f.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(f.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(f.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new f();
          return f.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(f.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return f.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(f.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return f.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Request";
        }
      }
      class L extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            L.prototype.game_count || O.aR(L.M()),
            e.initialize(this, M, 0, -1, [2], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  game_count: {
                    n: 1,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  games: { n: 2, c: m, r: !0, q: !0 },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = O.Bh(L.M())), L.sm_mbf;
        }
        toObject(M = !1) {
          return L.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(L.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(L.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new L();
          return L.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(L.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return L.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(L.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return L.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class m extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            m.prototype.appid || O.aR(m.M()),
            e.initialize(this, M, 0, -1, [18], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appid: { n: 1, br: O.FE.readInt32, bw: O.Xc.writeInt32 },
                  name: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                  playtime_2weeks: {
                    n: 3,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  img_icon_url: {
                    n: 5,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  has_community_visible_stats: {
                    n: 7,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  playtime_windows_forever: {
                    n: 8,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 9,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 10,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  playtime_deck_forever: {
                    n: 20,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  rtime_last_played: {
                    n: 11,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  capsule_filename: {
                    n: 12,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  sort_as: { n: 13, br: O.FE.readString, bw: O.Xc.writeString },
                  has_workshop: {
                    n: 14,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  has_market: { n: 15, br: O.FE.readBool, bw: O.Xc.writeBool },
                  has_dlc: { n: 16, br: O.FE.readBool, bw: O.Xc.writeBool },
                  has_leaderboards: {
                    n: 17,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  content_descriptorids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: O.FE.readUint32,
                    pbr: O.FE.readPackedUint32,
                    bw: O.Xc.writeRepeatedUint32,
                  },
                  playtime_disconnected: {
                    n: 19,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = O.Bh(m.M())), m.sm_mbf;
        }
        toObject(M = !1) {
          return m.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(m.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(m.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new m();
          return m.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(m.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return m.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(m.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return m.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class N extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            N.prototype.max_age_seconds || O.aR(N.M()),
            e.initialize(this, M, 0, -1, [2], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  max_age_seconds: {
                    n: 1,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  ignore_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: O.FE.readUint32,
                    pbr: O.FE.readPackedUint32,
                    bw: O.Xc.writeRepeatedUint32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = O.Bh(N.M())), N.sm_mbf;
        }
        toObject(M = !1) {
          return N.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(N.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(N.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new N();
          return N.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(N.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return N.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(N.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return N.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Request";
        }
      }
      class X extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            X.prototype.last_update_time || O.aR(X.M()),
            e.initialize(this, M, 0, -1, [2], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  last_update_time: {
                    n: 1,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: O.FE.readUint32,
                    pbr: O.FE.readPackedUint32,
                    bw: O.Xc.writeRepeatedUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = O.Bh(X.M())), X.sm_mbf;
        }
        toObject(M = !1) {
          return X.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(X.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(X.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new X();
          return X.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(X.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return X.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(X.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return X.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class y extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            y.prototype.play_sessions || O.aR(y.M()),
            e.initialize(this, M, 0, -1, [3], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { play_sessions: { n: 3, c: T, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = O.Bh(y.M())), y.sm_mbf;
        }
        toObject(M = !1) {
          return y.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(y.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(y.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new y();
          return y.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(y.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return y.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(y.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return y.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request";
        }
      }
      class T extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            T.prototype.appid || O.aR(T.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  appid: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  session_time_start: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  seconds: { n: 3, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  offline: { n: 4, br: O.FE.readBool, bw: O.Xc.writeBool },
                  owner: { n: 5, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = O.Bh(T.M())), T.sm_mbf;
        }
        toObject(M = !1) {
          return T.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(T.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(T.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new T();
          return T.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(T.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return T.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(T.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return T.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
        }
      }
      class g extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return g.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new g();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new g();
          return g.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return g.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return g.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Response";
        }
      }
      class _ extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            _.prototype.appid || O.aR(_.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = O.Bh(_.M())), _.sm_mbf;
        }
        toObject(M = !1) {
          return _.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(_.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(_.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new _();
          return _.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(_.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return _.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(_.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return _.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Request";
        }
      }
      class w extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            w.prototype.player_level || O.aR(w.M()),
            e.initialize(this, M, 0, -1, [2], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  player_level: {
                    n: 1,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  badges: { n: 2, c: S, r: !0, q: !0 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = O.Bh(w.M())), w.sm_mbf;
        }
        toObject(M = !1) {
          return w.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(w.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(w.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new w();
          return w.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(w.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return w.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(w.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return w.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class S extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            S.prototype.level || O.aR(S.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  level: { n: 1, br: O.FE.readInt32, bw: O.Xc.writeInt32 },
                  series: { n: 2, br: O.FE.readInt32, bw: O.Xc.writeInt32 },
                  border_color: {
                    n: 3,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = O.Bh(S.M())), S.sm_mbf;
        }
        toObject(M = !1) {
          return S.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(S.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(S.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new S();
          return S.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(S.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return S.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(S.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return S.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class h extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            h.prototype.communityitemid || O.aR(h.M()),
            e.initialize(this, M, 0, -1, [15], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  image_small: {
                    n: 2,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  image_large: {
                    n: 3,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  name: { n: 4, br: O.FE.readString, bw: O.Xc.writeString },
                  item_title: {
                    n: 5,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  item_description: {
                    n: 6,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  appid: { n: 7, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  item_type: {
                    n: 8,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  item_class: {
                    n: 9,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  movie_webm: {
                    n: 10,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  movie_mp4: {
                    n: 11,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  movie_webm_small: {
                    n: 13,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  movie_mp4_small: {
                    n: 14,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  equipped_flags: {
                    n: 12,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  profile_colors: { n: 15, c: F, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = O.Bh(h.M())), h.sm_mbf;
        }
        toObject(M = !1) {
          return h.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(h.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(h.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new h();
          return h.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(h.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return h.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(h.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return h.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem";
        }
      }
      class F extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            F.prototype.style_name || O.aR(F.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  style_name: {
                    n: 1,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  color: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = O.Bh(F.M())), F.sm_mbf;
        }
        toObject(M = !1) {
          return F.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(F.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(F.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new F();
          return F.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(F.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return F.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(F.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return F.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem_ProfileColor";
        }
      }
      class E extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            E.prototype.steamid || O.aR(E.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = O.Bh(E.M())), E.sm_mbf;
        }
        toObject(M = !1) {
          return E.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(E.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(E.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new E();
          return E.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(E.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return E.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(E.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return E.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Request";
        }
      }
      class C extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            C.prototype.profile_background || O.aR(C.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { profile_background: { n: 1, c: h } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = O.Bh(C.M())), C.sm_mbf;
        }
        toObject(M = !1) {
          return C.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(C.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(C.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new C();
          return C.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(C.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return C.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(C.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return C.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class P extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            P.prototype.communityitemid || O.aR(P.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = O.Bh(P.M())), P.sm_mbf;
        }
        toObject(M = !1) {
          return P.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(P.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(P.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new P();
          return P.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(P.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return P.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(P.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return P.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class v extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return v.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new v();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new v();
          return v.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return v.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return v.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class j extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            j.prototype.steamid || O.aR(j.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = O.Bh(j.M())), j.sm_mbf;
        }
        toObject(M = !1) {
          return j.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(j.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(j.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new j();
          return j.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(j.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return j.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(j.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return j.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Request";
        }
      }
      class I extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            I.prototype.profile_background || O.aR(I.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { profile_background: { n: 1, c: h } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = O.Bh(I.M())), I.sm_mbf;
        }
        toObject(M = !1) {
          return I.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(I.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(I.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new I();
          return I.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(I.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return I.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(I.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return I.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class D extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            D.prototype.communityitemid || O.aR(D.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = O.Bh(D.M())), D.sm_mbf;
        }
        toObject(M = !1) {
          return D.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(D.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(D.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new D();
          return D.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(D.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return D.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(D.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return D.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class U extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return U.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new U();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new U();
          return U.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return U.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return U.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class k extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            k.prototype.steamid || O.aR(k.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = O.Bh(k.M())), k.sm_mbf;
        }
        toObject(M = !1) {
          return k.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(k.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(k.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new k();
          return k.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(k.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return k.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(k.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return k.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Request";
        }
      }
      class x extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            x.prototype.avatar_frame || O.aR(x.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = { proto: x, fields: { avatar_frame: { n: 1, c: h } } }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = O.Bh(x.M())), x.sm_mbf;
        }
        toObject(M = !1) {
          return x.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(x.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(x.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new x();
          return x.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(x.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return x.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(x.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return x.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class G extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            G.prototype.communityitemid || O.aR(G.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = O.Bh(G.M())), G.sm_mbf;
        }
        toObject(M = !1) {
          return G.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(G.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(G.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new G();
          return G.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(G.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return G.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(G.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return G.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class H extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return H.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new H();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new H();
          return H.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return H.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return H.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class K extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            K.prototype.steamid || O.aR(K.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = O.Bh(K.M())), K.sm_mbf;
        }
        toObject(M = !1) {
          return K.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(K.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(K.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new K();
          return K.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(K.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return K.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(K.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return K.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Request";
        }
      }
      class Q extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Q.prototype.avatar || O.aR(Q.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = { proto: Q, fields: { avatar: { n: 1, c: h } } }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = O.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(M = !1) {
          return Q.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Q.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Q.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Q();
          return Q.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Q.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Q.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Q.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Q.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class V extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            V.prototype.communityitemid || O.aR(V.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = O.Bh(V.M())), V.sm_mbf;
        }
        toObject(M = !1) {
          return V.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(V.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(V.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new V();
          return V.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(V.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return V.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(V.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return V.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
        }
      }
      class J extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return J.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new J();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new J();
          return J.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return J.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return J.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class Y extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Y.prototype.steamid || O.aR(Y.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = O.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(M = !1) {
          return Y.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Y.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Y.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Y();
          return Y.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Y.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Y.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Y.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Y.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Request";
        }
      }
      class Z extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Z.prototype.steam_deck_keyboard_skin || O.aR(Z.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { steam_deck_keyboard_skin: { n: 1, c: h } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = O.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(M = !1) {
          return Z.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Z.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Z.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Z();
          return Z.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Z.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Z.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Z.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Z.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
        }
      }
      class $ extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            $.prototype.communityitemid || O.aR($.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = O.Bh($.M())), $.sm_mbf;
        }
        toObject(M = !1) {
          return $.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA($.M(), M, z);
        }
        static fromObject(M) {
          return O.aD($.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new $();
          return $.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F($.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return $.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2($.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return $.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class MM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return MM.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new MM();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new MM();
          return MM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return MM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return MM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class zM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            zM.prototype.language || O.aR(zM.M()),
            e.initialize(this, M, 0, -1, [2], null);
        }
        static M() {
          return (
            zM.sm_m ||
              (zM.sm_m = {
                proto: zM,
                fields: {
                  language: { n: 1, br: O.FE.readString, bw: O.Xc.writeString },
                  filters: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: O.FE.readEnum,
                    pbr: O.FE.readPackedEnum,
                    bw: O.Xc.writeRepeatedEnum,
                  },
                },
              }),
            zM.sm_m
          );
        }
        static MBF() {
          return zM.sm_mbf || (zM.sm_mbf = O.Bh(zM.M())), zM.sm_mbf;
        }
        toObject(M = !1) {
          return zM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(zM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(zM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new zM();
          return zM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(zM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return zM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(zM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return zM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Request";
        }
      }
      class bM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            bM.prototype.profile_backgrounds || O.aR(bM.M()),
            e.initialize(this, M, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
        }
        static M() {
          return (
            bM.sm_m ||
              (bM.sm_m = {
                proto: bM,
                fields: {
                  profile_backgrounds: { n: 1, c: h, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: h, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: h, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: h, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: h, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: h, r: !0, q: !0 },
                  steam_deck_startup_movies: { n: 7, c: h, r: !0, q: !0 },
                },
              }),
            bM.sm_m
          );
        }
        static MBF() {
          return bM.sm_mbf || (bM.sm_mbf = O.Bh(bM.M())), bM.sm_mbf;
        }
        toObject(M = !1) {
          return bM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(bM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(bM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new bM();
          return bM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(bM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return bM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(bM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return bM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class pM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            pM.prototype.steamid || O.aR(pM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            pM.sm_m ||
              (pM.sm_m = {
                proto: pM,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            pM.sm_m
          );
        }
        static MBF() {
          return pM.sm_mbf || (pM.sm_mbf = O.Bh(pM.M())), pM.sm_mbf;
        }
        toObject(M = !1) {
          return pM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(pM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(pM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new pM();
          return pM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(pM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return pM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(pM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return pM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class OM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            OM.prototype.profile_background || O.aR(OM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            OM.sm_m ||
              (OM.sm_m = {
                proto: OM,
                fields: {
                  profile_background: { n: 1, c: h },
                  mini_profile_background: { n: 2, c: h },
                  avatar_frame: { n: 3, c: h },
                  animated_avatar: { n: 4, c: h },
                  profile_modifier: { n: 5, c: h },
                  steam_deck_keyboard_skin: { n: 6, c: h },
                },
              }),
            OM.sm_m
          );
        }
        static MBF() {
          return OM.sm_mbf || (OM.sm_mbf = O.Bh(OM.M())), OM.sm_mbf;
        }
        toObject(M = !1) {
          return OM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(OM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(OM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new OM();
          return OM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(OM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return OM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(OM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return OM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class cM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            cM.prototype.communityitemid || O.aR(cM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            cM.sm_m ||
              (cM.sm_m = {
                proto: cM,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  flags: { n: 2, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            cM.sm_m
          );
        }
        static MBF() {
          return cM.sm_mbf || (cM.sm_mbf = O.Bh(cM.M())), cM.sm_mbf;
        }
        toObject(M = !1) {
          return cM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(cM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(cM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new cM();
          return cM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(cM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return cM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(cM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return cM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Request";
        }
      }
      class AM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return AM.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new AM();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new AM();
          return AM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return AM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return AM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
        }
      }
      class eM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return eM.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new eM();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new eM();
          return eM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return eM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return eM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Request";
        }
      }
      class oM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            oM.prototype.emoticons || O.aR(oM.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            oM.sm_m ||
              (oM.sm_m = {
                proto: oM,
                fields: { emoticons: { n: 1, c: rM, r: !0, q: !0 } },
              }),
            oM.sm_m
          );
        }
        static MBF() {
          return oM.sm_mbf || (oM.sm_mbf = O.Bh(oM.M())), oM.sm_mbf;
        }
        toObject(M = !1) {
          return oM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(oM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(oM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new oM();
          return oM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(oM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return oM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(oM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return oM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class rM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            rM.prototype.name || O.aR(rM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            rM.sm_m ||
              (rM.sm_m = {
                proto: rM,
                fields: {
                  name: { n: 1, br: O.FE.readString, bw: O.Xc.writeString },
                  count: { n: 2, br: O.FE.readInt32, bw: O.Xc.writeInt32 },
                  time_last_used: {
                    n: 3,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  use_count: {
                    n: 4,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  time_received: {
                    n: 5,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  appid: { n: 6, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            rM.sm_m
          );
        }
        static MBF() {
          return rM.sm_mbf || (rM.sm_mbf = O.Bh(rM.M())), rM.sm_mbf;
        }
        toObject(M = !1) {
          return rM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(rM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(rM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new rM();
          return rM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(rM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return rM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(rM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return rM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class qM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            qM.prototype.steamid || O.aR(qM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            qM.sm_m ||
              (qM.sm_m = {
                proto: qM,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  badgeid: { n: 2, br: O.FE.readInt32, bw: O.Xc.writeInt32 },
                },
              }),
            qM.sm_m
          );
        }
        static MBF() {
          return qM.sm_mbf || (qM.sm_mbf = O.Bh(qM.M())), qM.sm_mbf;
        }
        toObject(M = !1) {
          return qM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(qM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(qM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new qM();
          return qM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(qM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return qM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(qM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return qM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Request";
        }
      }
      class tM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            tM.prototype.quests || O.aR(tM.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            tM.sm_m ||
              (tM.sm_m = {
                proto: tM,
                fields: { quests: { n: 1, c: iM, r: !0, q: !0 } },
              }),
            tM.sm_m
          );
        }
        static MBF() {
          return tM.sm_mbf || (tM.sm_mbf = O.Bh(tM.M())), tM.sm_mbf;
        }
        toObject(M = !1) {
          return tM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(tM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(tM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new tM();
          return tM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(tM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return tM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(tM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return tM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response";
        }
      }
      class iM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            iM.prototype.questid || O.aR(iM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            iM.sm_m ||
              (iM.sm_m = {
                proto: iM,
                fields: {
                  questid: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  completed: { n: 2, br: O.FE.readBool, bw: O.Xc.writeBool },
                },
              }),
            iM.sm_m
          );
        }
        static MBF() {
          return iM.sm_mbf || (iM.sm_mbf = O.Bh(iM.M())), iM.sm_mbf;
        }
        toObject(M = !1) {
          return iM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(iM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(iM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new iM();
          return iM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(iM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return iM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(iM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return iM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response_Quest";
        }
      }
      class aM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            aM.prototype.appid || O.aR(aM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            aM.sm_m ||
              (aM.sm_m = {
                proto: aM,
                fields: {
                  appid: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  status_text: {
                    n: 2,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                },
              }),
            aM.sm_m
          );
        }
        static MBF() {
          return aM.sm_mbf || (aM.sm_mbf = O.Bh(aM.M())), aM.sm_mbf;
        }
        toObject(M = !1) {
          return aM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(aM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(aM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new aM();
          return aM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(aM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return aM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(aM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return aM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class nM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return nM.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new nM();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new nM();
          return nM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return nM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return nM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class WM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            WM.prototype.steamid || O.aR(WM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            WM.sm_m ||
              (WM.sm_m = {
                proto: WM,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  postid: {
                    n: 2,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            WM.sm_m
          );
        }
        static MBF() {
          return WM.sm_mbf || (WM.sm_mbf = O.Bh(WM.M())), WM.sm_mbf;
        }
        toObject(M = !1) {
          return WM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(WM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(WM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new WM();
          return WM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(WM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return WM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(WM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return WM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Request";
        }
      }
      class dM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            dM.prototype.accountid || O.aR(dM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            dM.sm_m ||
              (dM.sm_m = {
                proto: dM,
                fields: {
                  accountid: {
                    n: 1,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  postid: {
                    n: 2,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  status_text: {
                    n: 3,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  deleted: { n: 4, br: O.FE.readBool, bw: O.Xc.writeBool },
                  appid: { n: 5, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            dM.sm_m
          );
        }
        static MBF() {
          return dM.sm_mbf || (dM.sm_mbf = O.Bh(dM.M())), dM.sm_mbf;
        }
        toObject(M = !1) {
          return dM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(dM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(dM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new dM();
          return dM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(dM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return dM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(dM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return dM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class sM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            sM.prototype.postid || O.aR(sM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            sM.sm_m ||
              (sM.sm_m = {
                proto: sM,
                fields: {
                  postid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            sM.sm_m
          );
        }
        static MBF() {
          return sM.sm_mbf || (sM.sm_mbf = O.Bh(sM.M())), sM.sm_mbf;
        }
        toObject(M = !1) {
          return sM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(sM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(sM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new sM();
          return sM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(sM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return sM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(sM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return sM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Request";
        }
      }
      class RM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return RM.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new RM();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new RM();
          return RM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return RM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return RM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class BM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            BM.prototype.steamid || O.aR(BM.M()),
            e.initialize(this, M, 0, -1, [4], null);
        }
        static M() {
          return (
            BM.sm_m ||
              (BM.sm_m = {
                proto: BM,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  language: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                  max_achievements: {
                    n: 3,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  appids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: O.FE.readUint32,
                    pbr: O.FE.readPackedUint32,
                    bw: O.Xc.writeRepeatedUint32,
                  },
                },
              }),
            BM.sm_m
          );
        }
        static MBF() {
          return BM.sm_mbf || (BM.sm_mbf = O.Bh(BM.M())), BM.sm_mbf;
        }
        toObject(M = !1) {
          return BM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(BM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(BM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new BM();
          return BM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(BM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return BM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(BM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return BM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Request";
        }
      }
      class uM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            uM.prototype.games || O.aR(uM.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            uM.sm_m ||
              (uM.sm_m = {
                proto: uM,
                fields: { games: { n: 1, c: fM, r: !0, q: !0 } },
              }),
            uM.sm_m
          );
        }
        static MBF() {
          return uM.sm_mbf || (uM.sm_mbf = O.Bh(uM.M())), uM.sm_mbf;
        }
        toObject(M = !1) {
          return uM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(uM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(uM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new uM();
          return uM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(uM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return uM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(uM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return uM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response";
        }
      }
      class lM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            lM.prototype.statid || O.aR(lM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            lM.sm_m ||
              (lM.sm_m = {
                proto: lM,
                fields: {
                  statid: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  bit: { n: 2, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  name: { n: 3, br: O.FE.readString, bw: O.Xc.writeString },
                  desc: { n: 4, br: O.FE.readString, bw: O.Xc.writeString },
                  icon: { n: 5, br: O.FE.readString, bw: O.Xc.writeString },
                  icon_gray: {
                    n: 6,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  hidden: { n: 7, br: O.FE.readBool, bw: O.Xc.writeBool },
                  player_percent_unlocked: {
                    n: 8,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                },
              }),
            lM.sm_m
          );
        }
        static MBF() {
          return lM.sm_mbf || (lM.sm_mbf = O.Bh(lM.M())), lM.sm_mbf;
        }
        toObject(M = !1) {
          return lM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(lM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(lM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new lM();
          return lM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(lM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return lM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(lM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return lM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
        }
      }
      class fM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            fM.prototype.appid || O.aR(fM.M()),
            e.initialize(this, M, 0, -1, [3], null);
        }
        static M() {
          return (
            fM.sm_m ||
              (fM.sm_m = {
                proto: fM,
                fields: {
                  appid: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  total_achievements: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  achievements: { n: 3, c: lM, r: !0, q: !0 },
                },
              }),
            fM.sm_m
          );
        }
        static MBF() {
          return fM.sm_mbf || (fM.sm_mbf = O.Bh(fM.M())), fM.sm_mbf;
        }
        toObject(M = !1) {
          return fM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(fM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(fM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new fM();
          return fM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(fM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return fM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(fM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return fM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Game";
        }
      }
      class LM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            LM.prototype.steamid || O.aR(LM.M()),
            e.initialize(this, M, 0, -1, [3], null);
        }
        static M() {
          return (
            LM.sm_m ||
              (LM.sm_m = {
                proto: LM,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  language: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: O.FE.readUint32,
                    pbr: O.FE.readPackedUint32,
                    bw: O.Xc.writeRepeatedUint32,
                  },
                },
              }),
            LM.sm_m
          );
        }
        static MBF() {
          return LM.sm_mbf || (LM.sm_mbf = O.Bh(LM.M())), LM.sm_mbf;
        }
        toObject(M = !1) {
          return LM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(LM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(LM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new LM();
          return LM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(LM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return LM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(LM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return LM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Request";
        }
      }
      class mM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            mM.prototype.achievement_progress || O.aR(mM.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            mM.sm_m ||
              (mM.sm_m = {
                proto: mM,
                fields: { achievement_progress: { n: 1, c: NM, r: !0, q: !0 } },
              }),
            mM.sm_m
          );
        }
        static MBF() {
          return mM.sm_mbf || (mM.sm_mbf = O.Bh(mM.M())), mM.sm_mbf;
        }
        toObject(M = !1) {
          return mM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(mM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(mM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new mM();
          return mM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(mM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return mM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(mM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return mM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class NM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            NM.prototype.appid || O.aR(NM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            NM.sm_m ||
              (NM.sm_m = {
                proto: NM,
                fields: {
                  appid: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  unlocked: { n: 2, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  total: { n: 3, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  percentage: { n: 4, br: O.FE.readFloat, bw: O.Xc.writeFloat },
                  all_unlocked: { n: 5, br: O.FE.readBool, bw: O.Xc.writeBool },
                  cache_time: {
                    n: 6,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            NM.sm_m
          );
        }
        static MBF() {
          return NM.sm_mbf || (NM.sm_mbf = O.Bh(NM.M())), NM.sm_mbf;
        }
        toObject(M = !1) {
          return NM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(NM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(NM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new NM();
          return NM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(NM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return NM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(NM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return NM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class XM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            XM.prototype.appid || O.aR(XM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            XM.sm_m ||
              (XM.sm_m = {
                proto: XM,
                fields: {
                  appid: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  language: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            XM.sm_m
          );
        }
        static MBF() {
          return XM.sm_mbf || (XM.sm_mbf = O.Bh(XM.M())), XM.sm_mbf;
        }
        toObject(M = !1) {
          return XM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(XM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(XM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new XM();
          return XM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(XM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return XM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(XM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return XM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Request";
        }
      }
      class yM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            yM.prototype.achievements || O.aR(yM.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            yM.sm_m ||
              (yM.sm_m = {
                proto: yM,
                fields: { achievements: { n: 1, c: TM, r: !0, q: !0 } },
              }),
            yM.sm_m
          );
        }
        static MBF() {
          return yM.sm_mbf || (yM.sm_mbf = O.Bh(yM.M())), yM.sm_mbf;
        }
        toObject(M = !1) {
          return yM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(yM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(yM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new yM();
          return yM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(yM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return yM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(yM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return yM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response";
        }
      }
      class TM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            TM.prototype.internal_name || O.aR(TM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            TM.sm_m ||
              (TM.sm_m = {
                proto: TM,
                fields: {
                  internal_name: {
                    n: 1,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  localized_name: {
                    n: 2,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  localized_desc: {
                    n: 3,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  icon: { n: 4, br: O.FE.readString, bw: O.Xc.writeString },
                  icon_gray: {
                    n: 5,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  hidden: { n: 6, br: O.FE.readBool, bw: O.Xc.writeBool },
                  player_percent_unlocked: {
                    n: 7,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                },
              }),
            TM.sm_m
          );
        }
        static MBF() {
          return TM.sm_mbf || (TM.sm_mbf = O.Bh(TM.M())), TM.sm_mbf;
        }
        toObject(M = !1) {
          return TM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(TM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(TM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new TM();
          return TM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(TM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return TM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(TM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return TM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Achievement";
        }
      }
      class gM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            gM.prototype.steamid || O.aR(gM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            gM.sm_m ||
              (gM.sm_m = {
                proto: gM,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            gM.sm_m
          );
        }
        static MBF() {
          return gM.sm_mbf || (gM.sm_mbf = O.Bh(gM.M())), gM.sm_mbf;
        }
        toObject(M = !1) {
          return gM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(gM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(gM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new gM();
          return gM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(gM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return gM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(gM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return gM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Request";
        }
      }
      class _M extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            _M.prototype.has_favorite_badge || O.aR(_M.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            _M.sm_m ||
              (_M.sm_m = {
                proto: _M,
                fields: {
                  has_favorite_badge: {
                    n: 1,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  badgeid: { n: 2, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  item_type: {
                    n: 4,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  border_color: {
                    n: 5,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  appid: { n: 6, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  level: { n: 7, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            _M.sm_m
          );
        }
        static MBF() {
          return _M.sm_mbf || (_M.sm_mbf = O.Bh(_M.M())), _M.sm_mbf;
        }
        toObject(M = !1) {
          return _M.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(_M.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(_M.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new _M();
          return _M.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(_M.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return _M.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(_M.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return _M.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class wM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            wM.prototype.communityitemid || O.aR(wM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            wM.sm_m ||
              (wM.sm_m = {
                proto: wM,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  badgeid: { n: 2, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            wM.sm_m
          );
        }
        static MBF() {
          return wM.sm_mbf || (wM.sm_mbf = O.Bh(wM.M())), wM.sm_mbf;
        }
        toObject(M = !1) {
          return wM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(wM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(wM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new wM();
          return wM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(wM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return wM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(wM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return wM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Request";
        }
      }
      class SM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return SM.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new SM();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new SM();
          return SM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return SM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return SM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class hM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            hM.prototype.slot || O.aR(hM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            hM.sm_m ||
              (hM.sm_m = {
                proto: hM,
                fields: {
                  slot: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  appid: { n: 2, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  publishedfileid: {
                    n: 3,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  item_assetid: {
                    n: 4,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  item_contextid: {
                    n: 5,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  notes: { n: 6, br: O.FE.readString, bw: O.Xc.writeString },
                  title: { n: 7, br: O.FE.readString, bw: O.Xc.writeString },
                  accountid: {
                    n: 8,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  badgeid: { n: 9, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                  border_color: {
                    n: 10,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  item_classid: {
                    n: 11,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  item_instanceid: {
                    n: 12,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  ban_check_result: {
                    n: 13,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  replay_year: {
                    n: 14,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            hM.sm_m
          );
        }
        static MBF() {
          return hM.sm_mbf || (hM.sm_mbf = O.Bh(hM.M())), hM.sm_mbf;
        }
        toObject(M = !1) {
          return hM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(hM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(hM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new hM();
          return hM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(hM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return hM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(hM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return hM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomizationSlot";
        }
      }
      class FM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            FM.prototype.customization_type || O.aR(FM.M()),
            e.initialize(this, M, 0, -1, [3], null);
        }
        static M() {
          return (
            FM.sm_m ||
              (FM.sm_m = {
                proto: FM,
                fields: {
                  customization_type: {
                    n: 1,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  large: { n: 2, br: O.FE.readBool, bw: O.Xc.writeBool },
                  slots: { n: 3, c: hM, r: !0, q: !0 },
                  active: { n: 4, br: O.FE.readBool, bw: O.Xc.writeBool },
                  customization_style: {
                    n: 5,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  purchaseid: {
                    n: 6,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  level: { n: 7, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            FM.sm_m
          );
        }
        static MBF() {
          return FM.sm_mbf || (FM.sm_mbf = O.Bh(FM.M())), FM.sm_mbf;
        }
        toObject(M = !1) {
          return FM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(FM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(FM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new FM();
          return FM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(FM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return FM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(FM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return FM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomization";
        }
      }
      class EM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            EM.prototype.theme_id || O.aR(EM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            EM.sm_m ||
              (EM.sm_m = {
                proto: EM,
                fields: {
                  theme_id: { n: 1, br: O.FE.readString, bw: O.Xc.writeString },
                  title: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            EM.sm_m
          );
        }
        static MBF() {
          return EM.sm_mbf || (EM.sm_mbf = O.Bh(EM.M())), EM.sm_mbf;
        }
        toObject(M = !1) {
          return EM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(EM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(EM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new EM();
          return EM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(EM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return EM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(EM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return EM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "ProfileTheme";
        }
      }
      class CM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            CM.prototype.hide_profile_awards || O.aR(CM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            CM.sm_m ||
              (CM.sm_m = {
                proto: CM,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                },
              }),
            CM.sm_m
          );
        }
        static MBF() {
          return CM.sm_mbf || (CM.sm_mbf = O.Bh(CM.M())), CM.sm_mbf;
        }
        toObject(M = !1) {
          return CM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(CM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(CM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new CM();
          return CM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(CM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return CM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(CM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return CM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "ProfilePreferences";
        }
      }
      class PM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            PM.prototype.steamid || O.aR(PM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            PM.sm_m ||
              (PM.sm_m = {
                proto: PM,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  include_inactive_customizations: {
                    n: 2,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  include_purchased_customizations: {
                    n: 3,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                },
              }),
            PM.sm_m
          );
        }
        static MBF() {
          return PM.sm_mbf || (PM.sm_mbf = O.Bh(PM.M())), PM.sm_mbf;
        }
        toObject(M = !1) {
          return PM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(PM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(PM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new PM();
          return PM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(PM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return PM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(PM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return PM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Request";
        }
      }
      class vM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            vM.prototype.customizations || O.aR(vM.M()),
            e.initialize(this, M, 0, -1, [1, 4], null);
        }
        static M() {
          return (
            vM.sm_m ||
              (vM.sm_m = {
                proto: vM,
                fields: {
                  customizations: { n: 1, c: FM, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  profile_theme: { n: 3, c: EM },
                  purchased_customizations: { n: 4, c: jM, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: CM },
                },
              }),
            vM.sm_m
          );
        }
        static MBF() {
          return vM.sm_mbf || (vM.sm_mbf = O.Bh(vM.M())), vM.sm_mbf;
        }
        toObject(M = !1) {
          return vM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(vM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(vM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new vM();
          return vM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(vM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return vM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(vM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return vM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class jM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            jM.prototype.purchaseid || O.aR(jM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            jM.sm_m ||
              (jM.sm_m = {
                proto: jM,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  level: { n: 3, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            jM.sm_m
          );
        }
        static MBF() {
          return jM.sm_mbf || (jM.sm_mbf = O.Bh(jM.M())), jM.sm_mbf;
        }
        toObject(M = !1) {
          return jM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(jM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(jM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new jM();
          return jM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(jM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return jM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(jM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return jM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class IM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            IM.prototype.steamid || O.aR(IM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            IM.sm_m ||
              (IM.sm_m = {
                proto: IM,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                },
              }),
            IM.sm_m
          );
        }
        static MBF() {
          return IM.sm_mbf || (IM.sm_mbf = O.Bh(IM.M())), IM.sm_mbf;
        }
        toObject(M = !1) {
          return IM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(IM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(IM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new IM();
          return IM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(IM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return IM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(IM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return IM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Request";
        }
      }
      class DM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            DM.prototype.purchased_customizations || O.aR(DM.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            DM.sm_m ||
              (DM.sm_m = {
                proto: DM,
                fields: {
                  purchased_customizations: { n: 1, c: UM, r: !0, q: !0 },
                },
              }),
            DM.sm_m
          );
        }
        static MBF() {
          return DM.sm_mbf || (DM.sm_mbf = O.Bh(DM.M())), DM.sm_mbf;
        }
        toObject(M = !1) {
          return DM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(DM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(DM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new DM();
          return DM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(DM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return DM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(DM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return DM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class UM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            UM.prototype.purchaseid || O.aR(UM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            UM.sm_m ||
              (UM.sm_m = {
                proto: UM,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                },
              }),
            UM.sm_m
          );
        }
        static MBF() {
          return UM.sm_mbf || (UM.sm_mbf = O.Bh(UM.M())), UM.sm_mbf;
        }
        toObject(M = !1) {
          return UM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(UM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(UM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new UM();
          return UM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(UM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return UM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(UM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return UM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class kM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            kM.prototype.steamid || O.aR(kM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            kM.sm_m ||
              (kM.sm_m = {
                proto: kM,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                },
              }),
            kM.sm_m
          );
        }
        static MBF() {
          return kM.sm_mbf || (kM.sm_mbf = O.Bh(kM.M())), kM.sm_mbf;
        }
        toObject(M = !1) {
          return kM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(kM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(kM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new kM();
          return kM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(kM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return kM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(kM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return kM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class xM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            xM.prototype.purchased_customizations || O.aR(xM.M()),
            e.initialize(this, M, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            xM.sm_m ||
              (xM.sm_m = {
                proto: xM,
                fields: {
                  purchased_customizations: { n: 1, c: GM, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: HM, r: !0, q: !0 },
                },
              }),
            xM.sm_m
          );
        }
        static MBF() {
          return xM.sm_mbf || (xM.sm_mbf = O.Bh(xM.M())), xM.sm_mbf;
        }
        toObject(M = !1) {
          return xM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(xM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(xM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new xM();
          return xM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(xM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return xM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(xM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return xM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class GM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            GM.prototype.customization_type || O.aR(GM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            GM.sm_m ||
              (GM.sm_m = {
                proto: GM,
                fields: {
                  customization_type: {
                    n: 1,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  count: { n: 2, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            GM.sm_m
          );
        }
        static MBF() {
          return GM.sm_mbf || (GM.sm_mbf = O.Bh(GM.M())), GM.sm_mbf;
        }
        toObject(M = !1) {
          return GM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(GM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(GM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new GM();
          return GM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(GM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return GM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(GM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return GM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class HM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            HM.prototype.customization_type || O.aR(HM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            HM.sm_m ||
              (HM.sm_m = {
                proto: HM,
                fields: {
                  customization_type: {
                    n: 1,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  level: { n: 2, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            HM.sm_m
          );
        }
        static MBF() {
          return HM.sm_mbf || (HM.sm_mbf = O.Bh(HM.M())), HM.sm_mbf;
        }
        toObject(M = !1) {
          return HM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(HM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(HM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new HM();
          return HM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(HM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return HM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(HM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return HM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class KM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return KM.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new KM();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new KM();
          return KM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return KM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return KM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Request";
        }
      }
      class QM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            QM.prototype.profile_themes || O.aR(QM.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            QM.sm_m ||
              (QM.sm_m = {
                proto: QM,
                fields: { profile_themes: { n: 1, c: EM, r: !0, q: !0 } },
              }),
            QM.sm_m
          );
        }
        static MBF() {
          return QM.sm_mbf || (QM.sm_mbf = O.Bh(QM.M())), QM.sm_mbf;
        }
        toObject(M = !1) {
          return QM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(QM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(QM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new QM();
          return QM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(QM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return QM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(QM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return QM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class VM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            VM.prototype.theme_id || O.aR(VM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            VM.sm_m ||
              (VM.sm_m = {
                proto: VM,
                fields: {
                  theme_id: { n: 1, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            VM.sm_m
          );
        }
        static MBF() {
          return VM.sm_mbf || (VM.sm_mbf = O.Bh(VM.M())), VM.sm_mbf;
        }
        toObject(M = !1) {
          return VM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(VM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(VM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new VM();
          return VM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(VM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return VM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(VM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return VM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Request";
        }
      }
      class JM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return JM.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new JM();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new JM();
          return JM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return JM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return JM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class YM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            YM.prototype.profile_preferences || O.aR(YM.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            YM.sm_m ||
              (YM.sm_m = {
                proto: YM,
                fields: { profile_preferences: { n: 1, c: CM } },
              }),
            YM.sm_m
          );
        }
        static MBF() {
          return YM.sm_mbf || (YM.sm_mbf = O.Bh(YM.M())), YM.sm_mbf;
        }
        toObject(M = !1) {
          return YM.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(YM.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(YM.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new YM();
          return YM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(YM.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return YM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(YM.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return YM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Request";
        }
      }
      class ZM extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return ZM.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new ZM();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new ZM();
          return ZM.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return ZM.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return ZM.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class $M extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            $M.prototype.appid || O.aR($M.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            $M.sm_m ||
              ($M.sm_m = {
                proto: $M,
                fields: {
                  appid: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            $M.sm_m
          );
        }
        static MBF() {
          return $M.sm_mbf || ($M.sm_mbf = O.Bh($M.M())), $M.sm_mbf;
        }
        toObject(M = !1) {
          return $M.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA($M.M(), M, z);
        }
        static fromObject(M) {
          return O.aD($M.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new $M();
          return $M.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F($M.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return $M.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2($M.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return $M.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class Mz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Mz.prototype.your_info || O.aR(Mz.M()),
            e.initialize(this, M, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            Mz.sm_m ||
              (Mz.sm_m = {
                proto: Mz,
                fields: {
                  your_info: { n: 1, c: bz },
                  in_game: { n: 2, c: zz, r: !0, q: !0 },
                  played_recently: { n: 3, c: zz, r: !0, q: !0 },
                  played_ever: { n: 4, c: zz, r: !0, q: !0 },
                  owns: { n: 5, c: zz, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: zz, r: !0, q: !0 },
                },
              }),
            Mz.sm_m
          );
        }
        static MBF() {
          return Mz.sm_mbf || (Mz.sm_mbf = O.Bh(Mz.M())), Mz.sm_mbf;
        }
        toObject(M = !1) {
          return Mz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Mz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Mz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Mz();
          return Mz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Mz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Mz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Mz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Mz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class zz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            zz.prototype.steamid || O.aR(zz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            zz.sm_m ||
              (zz.sm_m = {
                proto: zz,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            zz.sm_m
          );
        }
        static MBF() {
          return zz.sm_mbf || (zz.sm_mbf = O.Bh(zz.M())), zz.sm_mbf;
        }
        toObject(M = !1) {
          return zz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(zz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(zz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new zz();
          return zz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(zz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return zz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(zz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return zz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class bz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            bz.prototype.steamid || O.aR(bz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            bz.sm_m ||
              (bz.sm_m = {
                proto: bz,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  in_wishlist: { n: 4, br: O.FE.readBool, bw: O.Xc.writeBool },
                  owned: { n: 5, br: O.FE.readBool, bw: O.Xc.writeBool },
                },
              }),
            bz.sm_m
          );
        }
        static MBF() {
          return bz.sm_mbf || (bz.sm_mbf = O.Bh(bz.M())), bz.sm_mbf;
        }
        toObject(M = !1) {
          return bz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(bz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(bz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new bz();
          return bz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(bz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return bz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(bz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return bz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class pz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return pz.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new pz();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new pz();
          return pz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return pz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return pz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Request";
        }
      }
      class Oz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Oz.prototype.time_ssa_accepted || O.aR(Oz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oz.sm_m ||
              (Oz.sm_m = {
                proto: Oz,
                fields: {
                  time_ssa_accepted: {
                    n: 1,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  time_ssa_updated: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  time_chinassa_accepted: {
                    n: 3,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            Oz.sm_m
          );
        }
        static MBF() {
          return Oz.sm_mbf || (Oz.sm_mbf = O.Bh(Oz.M())), Oz.sm_mbf;
        }
        toObject(M = !1) {
          return Oz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Oz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Oz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Oz();
          return Oz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Oz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Oz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Oz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Oz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class cz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            cz.prototype.agreement_type || O.aR(cz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            cz.sm_m ||
              (cz.sm_m = {
                proto: cz,
                fields: {
                  agreement_type: {
                    n: 1,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  time_signed_utc: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            cz.sm_m
          );
        }
        static MBF() {
          return cz.sm_mbf || (cz.sm_mbf = O.Bh(cz.M())), cz.sm_mbf;
        }
        toObject(M = !1) {
          return cz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(cz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(cz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new cz();
          return cz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(cz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return cz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(cz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return cz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Request";
        }
      }
      class Az extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return Az.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new Az();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Az();
          return Az.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Az.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Az.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class ez extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return ez.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new ez();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new ez();
          return ez.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return ez.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return ez.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Request";
        }
      }
      class oz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            oz.prototype.nicknames || O.aR(oz.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            oz.sm_m ||
              (oz.sm_m = {
                proto: oz,
                fields: { nicknames: { n: 1, c: rz, r: !0, q: !0 } },
              }),
            oz.sm_m
          );
        }
        static MBF() {
          return oz.sm_mbf || (oz.sm_mbf = O.Bh(oz.M())), oz.sm_mbf;
        }
        toObject(M = !1) {
          return oz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(oz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(oz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new oz();
          return oz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(oz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return oz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(oz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return oz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class rz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            rz.prototype.accountid || O.aR(rz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            rz.sm_m ||
              (rz.sm_m = {
                proto: rz,
                fields: {
                  accountid: {
                    n: 1,
                    br: O.FE.readFixed32,
                    bw: O.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                },
              }),
            rz.sm_m
          );
        }
        static MBF() {
          return rz.sm_mbf || (rz.sm_mbf = O.Bh(rz.M())), rz.sm_mbf;
        }
        toObject(M = !1) {
          return rz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(rz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(rz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new rz();
          return rz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(rz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return rz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(rz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return rz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class qz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            qz.prototype.accountid || O.aR(qz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            qz.sm_m ||
              (qz.sm_m = {
                proto: qz,
                fields: {
                  accountid: {
                    n: 1,
                    br: O.FE.readFixed32,
                    bw: O.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                  notifications_showingame: {
                    n: 3,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  notifications_showonline: {
                    n: 4,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  notifications_showmessages: {
                    n: 5,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  sounds_showingame: {
                    n: 6,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  sounds_showonline: {
                    n: 7,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  sounds_showmessages: {
                    n: 8,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  notifications_sendmobile: {
                    n: 9,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                },
              }),
            qz.sm_m
          );
        }
        static MBF() {
          return qz.sm_mbf || (qz.sm_mbf = O.Bh(qz.M())), qz.sm_mbf;
        }
        toObject(M = !1) {
          return qz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(qz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(qz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new qz();
          return qz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(qz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return qz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(qz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return qz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "PerFriendPreferences";
        }
      }
      class tz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return tz.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new tz();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new tz();
          return tz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return tz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return tz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Request";
        }
      }
      class iz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            iz.prototype.preferences || O.aR(iz.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            iz.sm_m ||
              (iz.sm_m = {
                proto: iz,
                fields: { preferences: { n: 1, c: qz, r: !0, q: !0 } },
              }),
            iz.sm_m
          );
        }
        static MBF() {
          return iz.sm_mbf || (iz.sm_mbf = O.Bh(iz.M())), iz.sm_mbf;
        }
        toObject(M = !1) {
          return iz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(iz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(iz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new iz();
          return iz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(iz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return iz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(iz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return iz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class az extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            az.prototype.preferences || O.aR(az.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            az.sm_m ||
              (az.sm_m = {
                proto: az,
                fields: { preferences: { n: 1, c: qz } },
              }),
            az.sm_m
          );
        }
        static MBF() {
          return az.sm_mbf || (az.sm_mbf = O.Bh(az.M())), az.sm_mbf;
        }
        toObject(M = !1) {
          return az.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(az.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(az.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new az();
          return az.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(az.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return az.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(az.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return az.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Request";
        }
      }
      class nz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return nz.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new nz();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new nz();
          return nz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return nz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return nz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class Wz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Wz.prototype.steamid || O.aR(Wz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Wz.sm_m ||
              (Wz.sm_m = {
                proto: Wz,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                },
              }),
            Wz.sm_m
          );
        }
        static MBF() {
          return Wz.sm_mbf || (Wz.sm_mbf = O.Bh(Wz.M())), Wz.sm_mbf;
        }
        toObject(M = !1) {
          return Wz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Wz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Wz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Wz();
          return Wz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Wz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Wz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Wz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Wz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Request";
        }
      }
      class dz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            dz.prototype.invite_sent || O.aR(dz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            dz.sm_m ||
              (dz.sm_m = {
                proto: dz,
                fields: {
                  invite_sent: { n: 1, br: O.FE.readBool, bw: O.Xc.writeBool },
                  friend_relationship: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  result: { n: 3, br: O.FE.readInt32, bw: O.Xc.writeInt32 },
                },
              }),
            dz.sm_m
          );
        }
        static MBF() {
          return dz.sm_mbf || (dz.sm_mbf = O.Bh(dz.M())), dz.sm_mbf;
        }
        toObject(M = !1) {
          return dz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(dz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(dz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new dz();
          return dz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(dz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return dz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(dz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return dz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Response";
        }
      }
      class sz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            sz.prototype.steamid || O.aR(sz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            sz.sm_m ||
              (sz.sm_m = {
                proto: sz,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                },
              }),
            sz.sm_m
          );
        }
        static MBF() {
          return sz.sm_mbf || (sz.sm_mbf = O.Bh(sz.M())), sz.sm_mbf;
        }
        toObject(M = !1) {
          return sz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(sz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(sz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new sz();
          return sz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(sz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return sz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(sz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return sz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Request";
        }
      }
      class Rz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Rz.prototype.friend_relationship || O.aR(Rz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Rz.sm_m ||
              (Rz.sm_m = {
                proto: Rz,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            Rz.sm_m
          );
        }
        static MBF() {
          return Rz.sm_mbf || (Rz.sm_mbf = O.Bh(Rz.M())), Rz.sm_mbf;
        }
        toObject(M = !1) {
          return Rz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Rz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Rz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Rz();
          return Rz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Rz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Rz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Rz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Rz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class Bz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Bz.prototype.steamid || O.aR(Bz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Bz.sm_m ||
              (Bz.sm_m = {
                proto: Bz,
                fields: {
                  steamid: {
                    n: 1,
                    br: O.FE.readFixed64String,
                    bw: O.Xc.writeFixed64String,
                  },
                  unignore: { n: 2, br: O.FE.readBool, bw: O.Xc.writeBool },
                },
              }),
            Bz.sm_m
          );
        }
        static MBF() {
          return Bz.sm_mbf || (Bz.sm_mbf = O.Bh(Bz.M())), Bz.sm_mbf;
        }
        toObject(M = !1) {
          return Bz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Bz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Bz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Bz();
          return Bz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Bz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Bz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Bz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Bz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Request";
        }
      }
      class uz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            uz.prototype.friend_relationship || O.aR(uz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            uz.sm_m ||
              (uz.sm_m = {
                proto: uz,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            uz.sm_m
          );
        }
        static MBF() {
          return uz.sm_mbf || (uz.sm_mbf = O.Bh(uz.M())), uz.sm_mbf;
        }
        toObject(M = !1) {
          return uz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(uz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(uz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new uz();
          return uz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(uz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return uz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(uz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return uz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class lz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            lz.prototype.parenthesize_nicknames || O.aR(lz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            lz.sm_m ||
              (lz.sm_m = {
                proto: lz,
                fields: {
                  parenthesize_nicknames: {
                    n: 4,
                    d: !1,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  text_filter_setting: {
                    n: 5,
                    br: O.FE.readEnum,
                    bw: O.Xc.writeEnum,
                  },
                  text_filter_ignore_friends: {
                    n: 6,
                    d: !0,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  text_filter_words_revision: {
                    n: 7,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  timestamp_updated: {
                    n: 3,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            lz.sm_m
          );
        }
        static MBF() {
          return lz.sm_mbf || (lz.sm_mbf = O.Bh(lz.M())), lz.sm_mbf;
        }
        toObject(M = !1) {
          return lz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(lz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(lz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new lz();
          return lz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(lz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return lz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(lz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return lz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class fz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return fz.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new fz();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new fz();
          return fz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return fz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return fz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
        }
      }
      class Lz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Lz.prototype.preferences || O.aR(Lz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Lz.sm_m ||
              (Lz.sm_m = {
                proto: Lz,
                fields: {
                  preferences: { n: 1, c: lz },
                  content_descriptor_preferences: { n: 2, c: A.cF },
                },
              }),
            Lz.sm_m
          );
        }
        static MBF() {
          return Lz.sm_mbf || (Lz.sm_mbf = O.Bh(Lz.M())), Lz.sm_mbf;
        }
        toObject(M = !1) {
          return Lz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Lz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Lz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Lz();
          return Lz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Lz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Lz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Lz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Lz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class mz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            mz.prototype.preferences || O.aR(mz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            mz.sm_m ||
              (mz.sm_m = {
                proto: mz,
                fields: { preferences: { n: 1, c: lz } },
              }),
            mz.sm_m
          );
        }
        static MBF() {
          return mz.sm_mbf || (mz.sm_mbf = O.Bh(mz.M())), mz.sm_mbf;
        }
        toObject(M = !1) {
          return mz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(mz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(mz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new mz();
          return mz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(mz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return mz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(mz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return mz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Request";
        }
      }
      class Nz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return Nz.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new Nz();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Nz();
          return Nz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Nz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Nz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class Xz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Xz.prototype.text_filter_custom_banned_words || O.aR(Xz.M()),
            e.initialize(this, M, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Xz.sm_m ||
              (Xz.sm_m = {
                proto: Xz,
                fields: {
                  text_filter_custom_banned_words: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: O.FE.readString,
                    bw: O.Xc.writeRepeatedString,
                  },
                  text_filter_custom_clean_words: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: O.FE.readString,
                    bw: O.Xc.writeRepeatedString,
                  },
                  text_filter_words_revision: {
                    n: 3,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            Xz.sm_m
          );
        }
        static MBF() {
          return Xz.sm_mbf || (Xz.sm_mbf = O.Bh(Xz.M())), Xz.sm_mbf;
        }
        toObject(M = !1) {
          return Xz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Xz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Xz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Xz();
          return Xz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Xz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Xz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Xz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Xz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWords";
        }
      }
      class yz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return yz.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new yz();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new yz();
          return yz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return yz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return yz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class Tz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Tz.prototype.words || O.aR(Tz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Tz.sm_m ||
              (Tz.sm_m = { proto: Tz, fields: { words: { n: 1, c: Xz } } }),
            Tz.sm_m
          );
        }
        static MBF() {
          return Tz.sm_mbf || (Tz.sm_mbf = O.Bh(Tz.M())), Tz.sm_mbf;
        }
        toObject(M = !1) {
          return Tz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Tz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Tz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Tz();
          return Tz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Tz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Tz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Tz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Tz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class gz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            gz.prototype.language || O.aR(gz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            gz.sm_m ||
              (gz.sm_m = {
                proto: gz,
                fields: {
                  language: { n: 1, br: O.FE.readInt32, bw: O.Xc.writeInt32 },
                },
              }),
            gz.sm_m
          );
        }
        static MBF() {
          return gz.sm_mbf || (gz.sm_mbf = O.Bh(gz.M())), gz.sm_mbf;
        }
        toObject(M = !1) {
          return gz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(gz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(gz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new gz();
          return gz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(gz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return gz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(gz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return gz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Request";
        }
      }
      class _z extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            _z.prototype.state || O.aR(_z.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            _z.sm_m ||
              (_z.sm_m = {
                proto: _z,
                fields: {
                  state: { n: 1, br: O.FE.readEnum, bw: O.Xc.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            _z.sm_m
          );
        }
        static MBF() {
          return _z.sm_mbf || (_z.sm_mbf = O.Bh(_z.M())), _z.sm_mbf;
        }
        toObject(M = !1) {
          return _z.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(_z.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(_z.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new _z();
          return _z.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(_z.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return _z.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(_z.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return _z.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class wz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            wz.prototype.announcement_gid || O.aR(wz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            wz.sm_m ||
              (wz.sm_m = {
                proto: wz,
                fields: {
                  announcement_gid: {
                    n: 1,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                  time_posted: {
                    n: 2,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                },
              }),
            wz.sm_m
          );
        }
        static MBF() {
          return wz.sm_mbf || (wz.sm_mbf = O.Bh(wz.M())), wz.sm_mbf;
        }
        toObject(M = !1) {
          return wz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(wz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(wz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new wz();
          return wz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(wz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return wz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(wz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return wz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
        }
      }
      class Sz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return Sz.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new Sz();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Sz();
          return Sz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Sz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Sz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class hz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            hz.prototype.privacy_state || O.aR(hz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            hz.sm_m ||
              (hz.sm_m = {
                proto: hz,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  privacy_state_inventory: {
                    n: 2,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  privacy_state_gifts: {
                    n: 3,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  privacy_state_ownedgames: {
                    n: 4,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  privacy_state_playtime: {
                    n: 5,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  privacy_state_friendslist: {
                    n: 6,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                },
              }),
            hz.sm_m
          );
        }
        static MBF() {
          return hz.sm_mbf || (hz.sm_mbf = O.Bh(hz.M())), hz.sm_mbf;
        }
        toObject(M = !1) {
          return hz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(hz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(hz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new hz();
          return hz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(hz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return hz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(hz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return hz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPrivacySettings";
        }
      }
      class Fz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(), e.initialize(this, M, 0, -1, void 0, null);
        }
        toObject(M = !1) {
          return Fz.toObject(M, this);
        }
        static toObject(M, z) {
          return M ? { $jspbMessageInstance: z } : {};
        }
        static fromObject(M) {
          return new Fz();
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Fz();
          return Fz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return M;
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Fz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {}
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Fz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Request";
        }
      }
      class Ez extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Ez.prototype.privacy_settings || O.aR(Ez.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ez.sm_m ||
              (Ez.sm_m = {
                proto: Ez,
                fields: { privacy_settings: { n: 1, c: hz } },
              }),
            Ez.sm_m
          );
        }
        static MBF() {
          return Ez.sm_mbf || (Ez.sm_mbf = O.Bh(Ez.M())), Ez.sm_mbf;
        }
        toObject(M = !1) {
          return Ez.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Ez.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Ez.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Ez();
          return Ez.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Ez.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Ez.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Ez.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Ez.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class Cz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Cz.prototype.appid || O.aR(Cz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Cz.sm_m ||
              (Cz.sm_m = {
                proto: Cz,
                fields: {
                  appid: { n: 1, br: O.FE.readUint32, bw: O.Xc.writeUint32 },
                },
              }),
            Cz.sm_m
          );
        }
        static MBF() {
          return Cz.sm_mbf || (Cz.sm_mbf = O.Bh(Cz.M())), Cz.sm_mbf;
        }
        toObject(M = !1) {
          return Cz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Cz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Cz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Cz();
          return Cz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Cz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Cz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Cz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Cz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Request";
        }
      }
      class Pz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Pz.prototype.is_enabled || O.aR(Pz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pz.sm_m ||
              (Pz.sm_m = {
                proto: Pz,
                fields: {
                  is_enabled: { n: 1, br: O.FE.readBool, bw: O.Xc.writeBool },
                  seconds: { n: 2, br: O.FE.readInt32, bw: O.Xc.writeInt32 },
                  seconds_today: {
                    n: 3,
                    br: O.FE.readInt32,
                    bw: O.Xc.writeInt32,
                  },
                  is_steamchina_account: {
                    n: 4,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  is_age_verified: {
                    n: 5,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  seconds_allowed_today: {
                    n: 6,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  age_verification_pending: {
                    n: 7,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                  block_minors: { n: 8, br: O.FE.readBool, bw: O.Xc.writeBool },
                },
              }),
            Pz.sm_m
          );
        }
        static MBF() {
          return Pz.sm_mbf || (Pz.sm_mbf = O.Bh(Pz.M())), Pz.sm_mbf;
        }
        toObject(M = !1) {
          return Pz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Pz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Pz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Pz();
          return Pz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Pz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Pz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Pz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Pz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class vz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            vz.prototype.games || O.aR(vz.M()),
            e.initialize(this, M, 0, -1, [1], null);
        }
        static M() {
          return (
            vz.sm_m ||
              (vz.sm_m = {
                proto: vz,
                fields: { games: { n: 1, c: a, r: !0, q: !0 } },
              }),
            vz.sm_m
          );
        }
        static MBF() {
          return vz.sm_mbf || (vz.sm_mbf = O.Bh(vz.M())), vz.sm_mbf;
        }
        toObject(M = !1) {
          return vz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(vz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(vz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new vz();
          return vz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(vz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return vz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(vz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return vz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class jz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            jz.prototype.accountid || O.aR(jz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            jz.sm_m ||
              (jz.sm_m = {
                proto: jz,
                fields: {
                  accountid: {
                    n: 1,
                    br: O.FE.readFixed32,
                    bw: O.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: O.FE.readString, bw: O.Xc.writeString },
                  is_echo_to_self: {
                    n: 3,
                    br: O.FE.readBool,
                    bw: O.Xc.writeBool,
                  },
                },
              }),
            jz.sm_m
          );
        }
        static MBF() {
          return jz.sm_mbf || (jz.sm_mbf = O.Bh(jz.M())), jz.sm_mbf;
        }
        toObject(M = !1) {
          return jz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(jz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(jz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new jz();
          return jz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(jz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return jz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(jz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return jz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class Iz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Iz.prototype.accountid || O.aR(Iz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Iz.sm_m ||
              (Iz.sm_m = {
                proto: Iz,
                fields: {
                  accountid: {
                    n: 1,
                    br: O.FE.readFixed32,
                    bw: O.Xc.writeFixed32,
                  },
                },
              }),
            Iz.sm_m
          );
        }
        static MBF() {
          return Iz.sm_mbf || (Iz.sm_mbf = O.Bh(Iz.M())), Iz.sm_mbf;
        }
        toObject(M = !1) {
          return Iz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Iz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Iz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Iz();
          return Iz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Iz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Iz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Iz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Iz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class Dz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Dz.prototype.state || O.aR(Dz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Dz.sm_m ||
              (Dz.sm_m = {
                proto: Dz,
                fields: {
                  state: { n: 1, br: O.FE.readEnum, bw: O.Xc.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: O.FE.readString,
                    bw: O.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: O.FE.readUint32,
                    bw: O.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: O.FE.readUint64String,
                    bw: O.Xc.writeUint64String,
                  },
                },
              }),
            Dz.sm_m
          );
        }
        static MBF() {
          return Dz.sm_mbf || (Dz.sm_mbf = O.Bh(Dz.M())), Dz.sm_mbf;
        }
        toObject(M = !1) {
          return Dz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Dz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Dz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Dz();
          return Dz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Dz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Dz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Dz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Dz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class Uz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Uz.prototype.preferences || O.aR(Uz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Uz.sm_m ||
              (Uz.sm_m = {
                proto: Uz,
                fields: {
                  preferences: { n: 1, c: lz },
                  content_descriptor_preferences: { n: 2, c: A.cF },
                },
              }),
            Uz.sm_m
          );
        }
        static MBF() {
          return Uz.sm_mbf || (Uz.sm_mbf = O.Bh(Uz.M())), Uz.sm_mbf;
        }
        toObject(M = !1) {
          return Uz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Uz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Uz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Uz();
          return Uz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Uz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Uz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Uz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Uz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class kz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            kz.prototype.words || O.aR(kz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            kz.sm_m ||
              (kz.sm_m = { proto: kz, fields: { words: { n: 1, c: Xz } } }),
            kz.sm_m
          );
        }
        static MBF() {
          return kz.sm_mbf || (kz.sm_mbf = O.Bh(kz.M())), kz.sm_mbf;
        }
        toObject(M = !1) {
          return kz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(kz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(kz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new kz();
          return kz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(kz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return kz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(kz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return kz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class xz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            xz.prototype.accountid || O.aR(xz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            xz.sm_m ||
              (xz.sm_m = {
                proto: xz,
                fields: {
                  accountid: {
                    n: 1,
                    br: O.FE.readFixed32,
                    bw: O.Xc.writeFixed32,
                  },
                  preferences: { n: 2, c: qz },
                },
              }),
            xz.sm_m
          );
        }
        static MBF() {
          return xz.sm_mbf || (xz.sm_mbf = O.Bh(xz.M())), xz.sm_mbf;
        }
        toObject(M = !1) {
          return xz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(xz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(xz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new xz();
          return xz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(xz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return xz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(xz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return xz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class Gz extends e {
        static ImplementsStaticInterface() {}
        constructor(M = null) {
          super(),
            Gz.prototype.privacy_settings || O.aR(Gz.M()),
            e.initialize(this, M, 0, -1, void 0, null);
        }
        static M() {
          return (
            Gz.sm_m ||
              (Gz.sm_m = {
                proto: Gz,
                fields: { privacy_settings: { n: 1, c: hz } },
              }),
            Gz.sm_m
          );
        }
        static MBF() {
          return Gz.sm_mbf || (Gz.sm_mbf = O.Bh(Gz.M())), Gz.sm_mbf;
        }
        toObject(M = !1) {
          return Gz.toObject(M, this);
        }
        static toObject(M, z) {
          return O.TA(Gz.M(), M, z);
        }
        static fromObject(M) {
          return O.aD(Gz.M(), M);
        }
        static deserializeBinary(M) {
          let z = new p.BinaryReader(M),
            b = new Gz();
          return Gz.deserializeBinaryFromReader(b, z);
        }
        static deserializeBinaryFromReader(M, z) {
          return O.F(Gz.MBF(), M, z);
        }
        serializeBinary() {
          var M = new p.BinaryWriter();
          return Gz.serializeBinaryToWriter(this, M), M.getResultBuffer();
        }
        static serializeBinaryToWriter(M, z) {
          O.l2(Gz.M(), M, z);
        }
        serializeBase64String() {
          var M = new p.BinaryWriter();
          return Gz.serializeBinaryToWriter(this, M), M.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      var Hz, Kz;
      !(function (M) {
        (M.GetRecentPlaytimeSessionsForChild = function (M, z) {
          return M.SendMsg(
            "Player.GetRecentPlaytimeSessionsForChild#1",
            (0, c.MD)(o, z),
            r,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (M.GetPlayerLinkDetails = function (M, z) {
            return M.SendMsg(
              "Player.GetPlayerLinkDetails#1",
              (0, c.MD)(n, z),
              W,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (M.GetMutualFriendsForIncomingInvites = function (M, z) {
            return M.SendMsg(
              "Player.GetMutualFriendsForIncomingInvites#1",
              (0, c.MD)(B, z),
              l,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (M.GetOwnedGames = function (M, z) {
            return M.SendMsg("Player.GetOwnedGames#1", (0, c.MD)(f, z), L, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (M.GetPlayNext = function (M, z) {
            return M.SendMsg("Player.GetPlayNext#1", (0, c.MD)(N, z), X, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (M.GetFriendsGameplayInfo = function (M, z) {
            return M.SendMsg(
              "Player.GetFriendsGameplayInfo#1",
              (0, c.MD)($M, z),
              Mz,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (M.GetGameBadgeLevels = function (M, z) {
            return M.SendMsg(
              "Player.GetGameBadgeLevels#1",
              (0, c.MD)(_, z),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (M.GetProfileBackground = function (M, z) {
            return M.SendMsg(
              "Player.GetProfileBackground#1",
              (0, c.MD)(E, z),
              C,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (M.SetProfileBackground = function (M, z) {
            return M.SendMsg(
              "Player.SetProfileBackground#1",
              (0, c.MD)(P, z),
              v,
              { ePrivilege: 1 },
            );
          }),
          (M.GetMiniProfileBackground = function (M, z) {
            return M.SendMsg(
              "Player.GetMiniProfileBackground#1",
              (0, c.MD)(j, z),
              I,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (M.SetMiniProfileBackground = function (M, z) {
            return M.SendMsg(
              "Player.SetMiniProfileBackground#1",
              (0, c.MD)(D, z),
              U,
              { ePrivilege: 1 },
            );
          }),
          (M.GetAvatarFrame = function (M, z) {
            return M.SendMsg("Player.GetAvatarFrame#1", (0, c.MD)(k, z), x, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (M.SetAvatarFrame = function (M, z) {
            return M.SendMsg("Player.SetAvatarFrame#1", (0, c.MD)(G, z), H, {
              ePrivilege: 1,
            });
          }),
          (M.GetAnimatedAvatar = function (M, z) {
            return M.SendMsg("Player.GetAnimatedAvatar#1", (0, c.MD)(K, z), Q, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (M.SetAnimatedAvatar = function (M, z) {
            return M.SendMsg("Player.SetAnimatedAvatar#1", (0, c.MD)(V, z), J, {
              ePrivilege: 1,
            });
          }),
          (M.GetSteamDeckKeyboardSkin = function (M, z) {
            return M.SendMsg(
              "Player.GetSteamDeckKeyboardSkin#1",
              (0, c.MD)(Y, z),
              Z,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (M.SetSteamDeckKeyboardSkin = function (M, z) {
            return M.SendMsg(
              "Player.SetSteamDeckKeyboardSkin#1",
              (0, c.MD)($, z),
              MM,
              { ePrivilege: 1 },
            );
          }),
          (M.GetProfileItemsOwned = function (M, z) {
            return M.SendMsg(
              "Player.GetProfileItemsOwned#1",
              (0, c.MD)(zM, z),
              bM,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (M.GetProfileItemsEquipped = function (M, z) {
            return M.SendMsg(
              "Player.GetProfileItemsEquipped#1",
              (0, c.MD)(pM, z),
              OM,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (M.SetEquippedProfileItemFlags = function (M, z) {
            return M.SendMsg(
              "Player.SetEquippedProfileItemFlags#1",
              (0, c.MD)(cM, z),
              AM,
              { ePrivilege: 1 },
            );
          }),
          (M.GetEmoticonList = function (M, z) {
            return M.SendMsg("Player.GetEmoticonList#1", (0, c.MD)(eM, z), oM, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (M.GetCommunityBadgeProgress = function (M, z) {
            return M.SendMsg(
              "Player.GetCommunityBadgeProgress#1",
              (0, c.MD)(qM, z),
              tM,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (M.GetTopAchievementsForGames = function (M, z) {
            return M.SendMsg(
              "Player.GetTopAchievementsForGames#1",
              (0, c.MD)(BM, z),
              uM,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (M.GetAchievementsProgress = function (M, z) {
            return M.SendMsg(
              "Player.GetAchievementsProgress#1",
              (0, c.MD)(LM, z),
              mM,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (M.GetGameAchievements = function (M, z) {
            return M.SendMsg(
              "Player.GetGameAchievements#1",
              (0, c.MD)(XM, z),
              yM,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (M.GetFavoriteBadge = function (M, z) {
            return M.SendMsg(
              "Player.GetFavoriteBadge#1",
              (0, c.MD)(gM, z),
              _M,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (M.SetFavoriteBadge = function (M, z) {
            return M.SendMsg(
              "Player.SetFavoriteBadge#1",
              (0, c.MD)(wM, z),
              SM,
              { ePrivilege: 1 },
            );
          }),
          (M.GetProfileCustomization = function (M, z) {
            return M.SendMsg(
              "Player.GetProfileCustomization#1",
              (0, c.MD)(PM, z),
              vM,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (M.GetPurchasedProfileCustomizations = function (M, z) {
            return M.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              (0, c.MD)(IM, z),
              DM,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (M.GetPurchasedAndUpgradedProfileCustomizations = function (M, z) {
            return M.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              (0, c.MD)(kM, z),
              xM,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (M.GetProfileThemesAvailable = function (M, z) {
            return M.SendMsg(
              "Player.GetProfileThemesAvailable#1",
              (0, c.MD)(KM, z),
              QM,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (M.SetProfileTheme = function (M, z) {
            return M.SendMsg("Player.SetProfileTheme#1", (0, c.MD)(VM, z), JM, {
              ePrivilege: 1,
            });
          }),
          (M.SetProfilePreferences = function (M, z) {
            return M.SendMsg(
              "Player.SetProfilePreferences#1",
              (0, c.MD)(YM, z),
              ZM,
              { ePrivilege: 1 },
            );
          }),
          (M.PostStatusToFriends = function (M, z) {
            return M.SendMsg(
              "Player.PostStatusToFriends#1",
              (0, c.MD)(aM, z),
              nM,
              { ePrivilege: 3 },
            );
          }),
          (M.GetPostedStatus = function (M, z) {
            return M.SendMsg("Player.GetPostedStatus#1", (0, c.MD)(WM, z), dM, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (M.DeletePostedStatus = function (M, z) {
            return M.SendMsg(
              "Player.DeletePostedStatus#1",
              (0, c.MD)(sM, z),
              RM,
              { ePrivilege: 1 },
            );
          }),
          (M.ClientGetLastPlayedTimes = function (M, z) {
            return M.SendMsg(
              "Player.ClientGetLastPlayedTimes#1",
              (0, c.MD)(t, z),
              i,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (M.GetTimeSSAAccepted = function (M, z) {
            return M.SendMsg(
              "Player.GetTimeSSAAccepted#1",
              (0, c.MD)(pz, z),
              Oz,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (M.AcceptSSA = function (M, z) {
            return M.SendMsg("Player.AcceptSSA#1", (0, c.MD)(cz, z), Az, {
              ePrivilege: 1,
            });
          }),
          (M.GetNicknameList = function (M, z) {
            return M.SendMsg("Player.GetNicknameList#1", (0, c.MD)(ez, z), oz, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (M.GetPerFriendPreferences = function (M, z) {
            return M.SendMsg(
              "Player.GetPerFriendPreferences#1",
              (0, c.MD)(tz, z),
              iz,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (M.SetPerFriendPreferences = function (M, z) {
            return M.SendMsg(
              "Player.SetPerFriendPreferences#1",
              (0, c.MD)(az, z),
              nz,
              { ePrivilege: 1 },
            );
          }),
          (M.AddFriend = function (M, z) {
            return M.SendMsg("Player.AddFriend#1", (0, c.MD)(Wz, z), dz, {
              ePrivilege: 1,
            });
          }),
          (M.RemoveFriend = function (M, z) {
            return M.SendMsg("Player.RemoveFriend#1", (0, c.MD)(sz, z), Rz, {
              ePrivilege: 1,
            });
          }),
          (M.IgnoreFriend = function (M, z) {
            return M.SendMsg("Player.IgnoreFriend#1", (0, c.MD)(Bz, z), uz, {
              ePrivilege: 1,
            });
          }),
          (M.GetCommunityPreferences = function (M, z) {
            return M.SendMsg(
              "Player.GetCommunityPreferences#1",
              (0, c.MD)(fz, z),
              Lz,
              { ePrivilege: 1 },
            );
          }),
          (M.SetCommunityPreferences = function (M, z) {
            return M.SendMsg(
              "Player.SetCommunityPreferences#1",
              (0, c.MD)(mz, z),
              Nz,
              { ePrivilege: 1 },
            );
          }),
          (M.GetTextFilterWords = function (M, z) {
            return M.SendMsg(
              "Player.GetTextFilterWords#1",
              (0, c.MD)(yz, z),
              Tz,
              { ePrivilege: 1 },
            );
          }),
          (M.GetNewSteamAnnouncementState = function (M, z) {
            return M.SendMsg(
              "Player.GetNewSteamAnnouncementState#1",
              (0, c.MD)(gz, z),
              _z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (M.UpdateSteamAnnouncementLastRead = function (M, z) {
            return M.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              (0, c.MD)(wz, z),
              Sz,
              { ePrivilege: 1 },
            );
          }),
          (M.GetPrivacySettings = function (M, z) {
            return M.SendMsg(
              "Player.GetPrivacySettings#1",
              (0, c.MD)(Fz, z),
              Ez,
              { ePrivilege: 1 },
            );
          }),
          (M.GetDurationControl = function (M, z) {
            return M.SendMsg(
              "Player.GetDurationControl#1",
              (0, c.MD)(Cz, z),
              Pz,
              { ePrivilege: 1 },
            );
          }),
          (M.RecordDisconnectedPlaytime = function (M, z) {
            return M.SendMsg(
              "Player.RecordDisconnectedPlaytime#1",
              (0, c.MD)(y, z),
              g,
              { ePrivilege: 1 },
            );
          });
      })(Hz || (Hz = {})),
        (function (M) {
          (M.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: vz,
          }),
            (M.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: jz,
            }),
            (M.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: Iz,
            }),
            (M.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: Dz,
            }),
            (M.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: Uz,
            }),
            (M.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: kz,
            }),
            (M.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: xz,
            }),
            (M.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: Gz,
            });
        })(Kz || (Kz = {}));
    },
    11565: (M) => {
      "use strict";
      M.exports = JSON.parse(
      );
    },
  },
]);