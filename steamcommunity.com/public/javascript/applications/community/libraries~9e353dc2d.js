/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7948],
  {
    47812: (M, b, z) => {
      (M.exports = z(32828)).tz.load(z(91128));
    },
    32828: function (M, b, z) {
      var p, O, o; //! moment-timezone.js
      //! version : 0.5.40
      //! Copyright (c) JS Foundation and other contributors
      //! license : MIT
      //! github.com/moment/moment-timezone
      !(function (c, A) {
        "use strict";
        M.exports
          ? (M.exports = A(z(36105)))
          : ((O = [z(36105)]),
            void 0 === (o = "function" == typeof (p = A) ? p.apply(b, O) : p) ||
              (M.exports = o));
      })(0, function (M) {
        "use strict";
        void 0 === M.version && M.default && (M = M.default);
        var b,
          z = {},
          p = {},
          O = {},
          o = {},
          c = {};
        (M && "string" == typeof M.version) ||
          T(
            "Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/",
          );
        var A = M.version.split("."),
          e = +A[0],
          a = +A[1];
        function q(M) {
          return M > 96 ? M - 87 : M > 64 ? M - 29 : M - 48;
        }
        function d(M) {
          var b = 0,
            z = M.split("."),
            p = z[0],
            O = z[1] || "",
            o = 1,
            c = 0,
            A = 1;
          for (45 === M.charCodeAt(0) && ((b = 1), (A = -1)); b < p.length; b++)
            c = 60 * c + q(p.charCodeAt(b));
          for (b = 0; b < O.length; b++)
            (o /= 60), (c += q(O.charCodeAt(b)) * o);
          return c * A;
        }
        function n(M) {
          for (var b = 0; b < M.length; b++) M[b] = d(M[b]);
        }
        function t(M, b) {
          var z,
            p = [];
          for (z = 0; z < b.length; z++) p[z] = M[b[z]];
          return p;
        }
        function i(M) {
          var b = M.split("|"),
            z = b[2].split(" "),
            p = b[3].split(""),
            O = b[4].split(" ");
          return (
            n(z),
            n(p),
            n(O),
            (function (M, b) {
              for (var z = 0; z < b; z++)
                M[z] = Math.round((M[z - 1] || 0) + 6e4 * M[z]);
              M[b - 1] = 1 / 0;
            })(O, p.length),
            {
              name: b[0],
              abbrs: t(b[1].split(" "), p),
              offsets: t(z, p),
              untils: O,
              population: 0 | b[5],
            }
          );
        }
        function W(M) {
          M && this._set(i(M));
        }
        function r(M, b) {
          (this.name = M), (this.zones = b);
        }
        function s(M) {
          var b = M.toTimeString(),
            z = b.match(/\([a-z ]+\)/i);
          "GMT" ===
            (z =
              z && z[0]
                ? (z = z[0].match(/[A-Z]/g))
                  ? z.join("")
                  : void 0
                : (z = b.match(/[A-Z]{3,5}/g))
                ? z[0]
                : void 0) && (z = void 0),
            (this.at = +M),
            (this.abbr = z),
            (this.offset = M.getTimezoneOffset());
        }
        function u(M) {
          (this.zone = M), (this.offsetScore = 0), (this.abbrScore = 0);
        }
        function _(M, b) {
          for (var z, p; (p = 6e4 * (((b.at - M.at) / 12e4) | 0)); )
            (z = new s(new Date(M.at + p))).offset === M.offset
              ? (M = z)
              : (b = z);
          return M;
        }
        function L(M, b) {
          return M.offsetScore !== b.offsetScore
            ? M.offsetScore - b.offsetScore
            : M.abbrScore !== b.abbrScore
            ? M.abbrScore - b.abbrScore
            : M.zone.population !== b.zone.population
            ? b.zone.population - M.zone.population
            : b.zone.name.localeCompare(M.zone.name);
        }
        function m(M, b) {
          var z, p;
          for (n(b), z = 0; z < b.length; z++)
            (p = b[z]), (c[p] = c[p] || {}), (c[p][M] = !0);
        }
        function l(M) {
          var b,
            z,
            p,
            O = M.length,
            A = {},
            e = [];
          for (b = 0; b < O; b++)
            for (z in (p = c[M[b].offset] || {}))
              p.hasOwnProperty(z) && (A[z] = !0);
          for (b in A) A.hasOwnProperty(b) && e.push(o[b]);
          return e;
        }
        function f() {
          try {
            var M = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (M && M.length > 3) {
              var b = o[R(M)];
              if (b) return b;
              T(
                "Moment Timezone found " +
                  M +
                  " from the Intl api, but did not have that data loaded.",
              );
            }
          } catch (M) {}
          var z,
            p,
            O,
            c = (function () {
              var M,
                b,
                z,
                p = new Date().getFullYear() - 2,
                O = new s(new Date(p, 0, 1)),
                o = [O];
              for (z = 1; z < 48; z++)
                (b = new s(new Date(p, z, 1))).offset !== O.offset &&
                  ((M = _(O, b)),
                  o.push(M),
                  o.push(new s(new Date(M.at + 6e4)))),
                  (O = b);
              for (z = 0; z < 4; z++)
                o.push(new s(new Date(p + z, 0, 1))),
                  o.push(new s(new Date(p + z, 6, 1)));
              return o;
            })(),
            A = c.length,
            e = l(c),
            a = [];
          for (p = 0; p < e.length; p++) {
            for (z = new u(B(e[p]), A), O = 0; O < A; O++)
              z.scoreOffsetAt(c[O]);
            a.push(z);
          }
          return a.sort(L), a.length > 0 ? a[0].zone.name : void 0;
        }
        function R(M) {
          return (M || "").toLowerCase().replace(/\//g, "_");
        }
        function h(M) {
          var b, p, O, c;
          for ("string" == typeof M && (M = [M]), b = 0; b < M.length; b++)
            (c = R((p = (O = M[b].split("|"))[0]))),
              (z[c] = M[b]),
              (o[c] = p),
              m(c, O[2].split(" "));
        }
        function B(M, b) {
          M = R(M);
          var O,
            c = z[M];
          return c instanceof W
            ? c
            : "string" == typeof c
            ? ((c = new W(c)), (z[M] = c), c)
            : p[M] && b !== B && (O = B(p[M], B))
            ? ((c = z[M] = new W())._set(O), (c.name = o[M]), c)
            : null;
        }
        function N(M) {
          var b, z, O, c;
          for ("string" == typeof M && (M = [M]), b = 0; b < M.length; b++)
            (O = R((z = M[b].split("|"))[0])),
              (c = R(z[1])),
              (p[O] = c),
              (o[O] = z[0]),
              (p[c] = O),
              (o[c] = z[1]);
        }
        function X(M) {
          var b = "X" === M._f || "x" === M._f;
          return !(!M._a || void 0 !== M._tzm || b);
        }
        function T(M) {
          "undefined" != typeof console &&
            "function" == typeof console.error &&
            console.error(M);
        }
        function y(b) {
          var z = Array.prototype.slice.call(arguments, 0, -1),
            p = arguments[arguments.length - 1],
            O = B(p),
            o = M.utc.apply(null, z);
          return (
            O && !M.isMoment(b) && X(o) && o.add(O.parse(o), "minutes"),
            o.tz(p),
            o
          );
        }
        (e < 2 || (2 === e && a < 6)) &&
          T(
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
              var b,
                z = +M,
                p = this.untils;
              for (b = 0; b < p.length; b++) if (z < p[b]) return b;
            },
            countries: function () {
              var M = this.name;
              return Object.keys(O).filter(function (b) {
                return -1 !== O[b].zones.indexOf(M);
              });
            },
            parse: function (M) {
              var b,
                z,
                p,
                O,
                o = +M,
                c = this.offsets,
                A = this.untils,
                e = A.length - 1;
              for (O = 0; O < e; O++)
                if (
                  ((b = c[O]),
                  (z = c[O + 1]),
                  (p = c[O ? O - 1 : O]),
                  b < z && y.moveAmbiguousForward
                    ? (b = z)
                    : b > p && y.moveInvalidForward && (b = p),
                  o < A[O] - 6e4 * b)
                )
                  return c[O];
              return c[e];
            },
            abbr: function (M) {
              return this.abbrs[this._index(M)];
            },
            offset: function (M) {
              return (
                T("zone.offset has been deprecated in favor of zone.utcOffset"),
                this.offsets[this._index(M)]
              );
            },
            utcOffset: function (M) {
              return this.offsets[this._index(M)];
            },
          }),
          (u.prototype.scoreOffsetAt = function (M) {
            (this.offsetScore += Math.abs(
              this.zone.utcOffset(M.at) - M.offset,
            )),
              this.zone.abbr(M.at).replace(/[^A-Z]/g, "") !== M.abbr &&
                this.abbrScore++;
          }),
          (y.version = "0.5.40"),
          (y.dataVersion = ""),
          (y._zones = z),
          (y._links = p),
          (y._names = o),
          (y._countries = O),
          (y.add = h),
          (y.link = N),
          (y.load = function (M) {
            h(M.zones),
              N(M.links),
              (function (M) {
                var b, z, p, o;
                if (M && M.length)
                  for (b = 0; b < M.length; b++)
                    (z = (o = M[b].split("|"))[0].toUpperCase()),
                      (p = o[1].split(" ")),
                      (O[z] = new r(z, p));
              })(M.countries),
              (y.dataVersion = M.version);
          }),
          (y.zone = B),
          (y.zoneExists = function M(b) {
            return (
              M.didShowError ||
                ((M.didShowError = !0),
                T(
                  "moment.tz.zoneExists('" +
                    b +
                    "') has been deprecated in favor of !moment.tz.zone('" +
                    b +
                    "')",
                )),
              !!B(b)
            );
          }),
          (y.guess = function (M) {
            return (b && !M) || (b = f()), b;
          }),
          (y.names = function () {
            var M,
              b = [];
            for (M in o)
              o.hasOwnProperty(M) && (z[M] || z[p[M]]) && o[M] && b.push(o[M]);
            return b.sort();
          }),
          (y.Zone = W),
          (y.unpack = i),
          (y.unpackBase60 = d),
          (y.needsOffset = X),
          (y.moveInvalidForward = !0),
          (y.moveAmbiguousForward = !1),
          (y.countries = function () {
            return Object.keys(O);
          }),
          (y.zonesForCountry = function (M, b) {
            var z;
            if (((z = (z = M).toUpperCase()), !(M = O[z] || null))) return null;
            var p = M.zones.sort();
            return b
              ? p.map(function (M) {
                  return { name: M, offset: B(M).utcOffset(new Date()) };
                })
              : p;
          });
        var Y,
          D = M.fn;
        function k(M) {
          return function () {
            return this._z ? this._z.abbr(this) : M.call(this);
          };
        }
        function g(M) {
          return function () {
            return (this._z = null), M.apply(this, arguments);
          };
        }
        (M.tz = y),
          (M.defaultZone = null),
          (M.updateOffset = function (b, z) {
            var p,
              O = M.defaultZone;
            if (
              (void 0 === b._z &&
                (O &&
                  X(b) &&
                  !b._isUTC &&
                  ((b._d = M.utc(b._a)._d), b.utc().add(O.parse(b), "minutes")),
                (b._z = O)),
              b._z)
            )
              if (
                ((p = b._z.utcOffset(b)),
                Math.abs(p) < 16 && (p /= 60),
                void 0 !== b.utcOffset)
              ) {
                var o = b._z;
                b.utcOffset(-p, z), (b._z = o);
              } else b.zone(p, z);
          }),
          (D.tz = function (b, z) {
            if (b) {
              if ("string" != typeof b)
                throw new Error(
                  "Time zone name must be a string, got " +
                    b +
                    " [" +
                    typeof b +
                    "]",
                );
              return (
                (this._z = B(b)),
                this._z
                  ? M.updateOffset(this, z)
                  : T(
                      "Moment Timezone has no data for " +
                        b +
                        ". See http://momentjs.com/timezone/docs/#/data-loading/.",
                    ),
                this
              );
            }
            if (this._z) return this._z.name;
          }),
          (D.zoneName = k(D.zoneName)),
          (D.zoneAbbr = k(D.zoneAbbr)),
          (D.utc = g(D.utc)),
          (D.local = g(D.local)),
          (D.utcOffset =
            ((Y = D.utcOffset),
            function () {
              return (
                arguments.length > 0 && (this._z = null),
                Y.apply(this, arguments)
              );
            })),
          (M.tz.setDefault = function (b) {
            return (
              (e < 2 || (2 === e && a < 9)) &&
                T(
                  "Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " +
                    M.version +
                    ".",
                ),
              (M.defaultZone = b ? B(b) : null),
              M
            );
          });
        var w = M.momentProperties;
        return (
          "[object Array]" === Object.prototype.toString.call(w)
            ? (w.push("_z"), w.push("_a"))
            : w && (w._z = null),
          M
        );
      });
    },
    94506: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("af", {
          months:
            "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split(
            "_",
          ),
          weekdays:
            "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
              "_",
            ),
          weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
          weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
          meridiemParse: /vm|nm/i,
          isPM: function (M) {
            return /^nm$/i.test(M);
          },
          meridiem: function (M, b, z) {
            return M < 12 ? (z ? "vm" : "VM") : z ? "nm" : "NM";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[Môre om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            ss: "%d sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (M) {
            return M + (1 === M || 8 === M || M >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    62887: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = function (M) {
            return 0 === M
              ? 0
              : 1 === M
              ? 1
              : 2 === M
              ? 2
              : M % 100 >= 3 && M % 100 <= 10
              ? 3
              : M % 100 >= 11
              ? 4
              : 5;
          },
          z = {
            s: [
              "أقل من ثانية",
              "ثانية واحدة",
              ["ثانيتان", "ثانيتين"],
              "%d ثوان",
              "%d ثانية",
              "%d ثانية",
            ],
            m: [
              "أقل من دقيقة",
              "دقيقة واحدة",
              ["دقيقتان", "دقيقتين"],
              "%d دقائق",
              "%d دقيقة",
              "%d دقيقة",
            ],
            h: [
              "أقل من ساعة",
              "ساعة واحدة",
              ["ساعتان", "ساعتين"],
              "%d ساعات",
              "%d ساعة",
              "%d ساعة",
            ],
            d: [
              "أقل من يوم",
              "يوم واحد",
              ["يومان", "يومين"],
              "%d أيام",
              "%d يومًا",
              "%d يوم",
            ],
            M: [
              "أقل من شهر",
              "شهر واحد",
              ["شهران", "شهرين"],
              "%d أشهر",
              "%d شهرا",
              "%d شهر",
            ],
            y: [
              "أقل من عام",
              "عام واحد",
              ["عامان", "عامين"],
              "%d أعوام",
              "%d عامًا",
              "%d عام",
            ],
          },
          p = function (M) {
            return function (p, O, o, c) {
              var A = b(p),
                e = z[M][b(p)];
              return 2 === A && (e = e[O ? 0 : 1]), e.replace(/%d/i, p);
            };
          },
          O = [
            "جانفي",
            "فيفري",
            "مارس",
            "أفريل",
            "ماي",
            "جوان",
            "جويلية",
            "أوت",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ];
        M.defineLocale("ar-dz", {
          months: O,
          monthsShort: O,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (M) {
            return "م" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: p("s"),
            ss: p("s"),
            m: p("m"),
            mm: p("m"),
            h: p("h"),
            hh: p("h"),
            d: p("d"),
            dd: p("d"),
            M: p("M"),
            MM: p("M"),
            y: p("y"),
            yy: p("y"),
          },
          postformat: function (M) {
            return M.replace(/,/g, "،");
          },
          week: { dow: 0, doy: 4 },
        });
      })(z(36105));
    },
    66307: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ar-kw", {
          months:
            "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
              "_",
            ),
          monthsShort:
            "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
              "_",
            ),
          weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات",
          },
          week: { dow: 0, doy: 12 },
        });
      })(z(36105));
    },
    51664: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0",
          },
          z = function (M) {
            return 0 === M
              ? 0
              : 1 === M
              ? 1
              : 2 === M
              ? 2
              : M % 100 >= 3 && M % 100 <= 10
              ? 3
              : M % 100 >= 11
              ? 4
              : 5;
          },
          p = {
            s: [
              "أقل من ثانية",
              "ثانية واحدة",
              ["ثانيتان", "ثانيتين"],
              "%d ثوان",
              "%d ثانية",
              "%d ثانية",
            ],
            m: [
              "أقل من دقيقة",
              "دقيقة واحدة",
              ["دقيقتان", "دقيقتين"],
              "%d دقائق",
              "%d دقيقة",
              "%d دقيقة",
            ],
            h: [
              "أقل من ساعة",
              "ساعة واحدة",
              ["ساعتان", "ساعتين"],
              "%d ساعات",
              "%d ساعة",
              "%d ساعة",
            ],
            d: [
              "أقل من يوم",
              "يوم واحد",
              ["يومان", "يومين"],
              "%d أيام",
              "%d يومًا",
              "%d يوم",
            ],
            M: [
              "أقل من شهر",
              "شهر واحد",
              ["شهران", "شهرين"],
              "%d أشهر",
              "%d شهرا",
              "%d شهر",
            ],
            y: [
              "أقل من عام",
              "عام واحد",
              ["عامان", "عامين"],
              "%d أعوام",
              "%d عامًا",
              "%d عام",
            ],
          },
          O = function (M) {
            return function (b, O, o, c) {
              var A = z(b),
                e = p[M][z(b)];
              return 2 === A && (e = e[O ? 0 : 1]), e.replace(/%d/i, b);
            };
          },
          o = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ];
        M.defineLocale("ar-ly", {
          months: o,
          monthsShort: o,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (M) {
            return "م" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: O("s"),
            ss: O("s"),
            m: O("m"),
            mm: O("m"),
            h: O("h"),
            hh: O("h"),
            d: O("d"),
            dd: O("d"),
            M: O("M"),
            MM: O("M"),
            y: O("y"),
            yy: O("y"),
          },
          preparse: function (M) {
            return M.replace(/،/g, ",");
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            }).replace(/,/g, "،");
          },
          week: { dow: 6, doy: 12 },
        });
      })(z(36105));
    },
    89926: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ar-ma", {
          months:
            "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
              "_",
            ),
          monthsShort:
            "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
              "_",
            ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات",
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    85207: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠",
          },
          z = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0",
          };
        M.defineLocale("ar-sa", {
          months:
            "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_",
            ),
          monthsShort:
            "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_",
            ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (M) {
            return "م" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات",
          },
          preparse: function (M) {
            return M.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (M) {
              return z[M];
            }).replace(/،/g, ",");
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            }).replace(/,/g, "،");
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    52912: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ar-tn", {
          months:
            "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_",
            ),
          monthsShort:
            "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_",
            ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات",
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    59687: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠",
          },
          z = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0",
          },
          p = function (M) {
            return 0 === M
              ? 0
              : 1 === M
              ? 1
              : 2 === M
              ? 2
              : M % 100 >= 3 && M % 100 <= 10
              ? 3
              : M % 100 >= 11
              ? 4
              : 5;
          },
          O = {
            s: [
              "أقل من ثانية",
              "ثانية واحدة",
              ["ثانيتان", "ثانيتين"],
              "%d ثوان",
              "%d ثانية",
              "%d ثانية",
            ],
            m: [
              "أقل من دقيقة",
              "دقيقة واحدة",
              ["دقيقتان", "دقيقتين"],
              "%d دقائق",
              "%d دقيقة",
              "%d دقيقة",
            ],
            h: [
              "أقل من ساعة",
              "ساعة واحدة",
              ["ساعتان", "ساعتين"],
              "%d ساعات",
              "%d ساعة",
              "%d ساعة",
            ],
            d: [
              "أقل من يوم",
              "يوم واحد",
              ["يومان", "يومين"],
              "%d أيام",
              "%d يومًا",
              "%d يوم",
            ],
            M: [
              "أقل من شهر",
              "شهر واحد",
              ["شهران", "شهرين"],
              "%d أشهر",
              "%d شهرا",
              "%d شهر",
            ],
            y: [
              "أقل من عام",
              "عام واحد",
              ["عامان", "عامين"],
              "%d أعوام",
              "%d عامًا",
              "%d عام",
            ],
          },
          o = function (M) {
            return function (b, z, o, c) {
              var A = p(b),
                e = O[M][p(b)];
              return 2 === A && (e = e[z ? 0 : 1]), e.replace(/%d/i, b);
            };
          },
          c = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ];
        M.defineLocale("ar", {
          months: c,
          monthsShort: c,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (M) {
            return "م" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: o("s"),
            ss: o("s"),
            m: o("m"),
            mm: o("m"),
            h: o("h"),
            hh: o("h"),
            d: o("d"),
            dd: o("d"),
            M: o("M"),
            MM: o("M"),
            y: o("y"),
            yy: o("y"),
          },
          preparse: function (M) {
            return M.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (M) {
              return z[M];
            }).replace(/،/g, ",");
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            }).replace(/,/g, "،");
          },
          week: { dow: 6, doy: 12 },
        });
      })(z(36105));
    },
    5011: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          1: "-inci",
          5: "-inci",
          8: "-inci",
          70: "-inci",
          80: "-inci",
          2: "-nci",
          7: "-nci",
          20: "-nci",
          50: "-nci",
          3: "-üncü",
          4: "-üncü",
          100: "-üncü",
          6: "-ncı",
          9: "-uncu",
          10: "-uncu",
          30: "-uncu",
          60: "-ıncı",
          90: "-ıncı",
        };
        M.defineLocale("az", {
          months:
            "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
              "_",
            ),
          monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split(
            "_",
          ),
          weekdays:
            "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split(
              "_",
            ),
          weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
          weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[gələn həftə] dddd [saat] LT",
            lastDay: "[dünən] LT",
            lastWeek: "[keçən həftə] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s əvvəl",
            s: "bir neçə saniyə",
            ss: "%d saniyə",
            m: "bir dəqiqə",
            mm: "%d dəqiqə",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il",
          },
          meridiemParse: /gecə|səhər|gündüz|axşam/,
          isPM: function (M) {
            return /^(gündüz|axşam)$/.test(M);
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "gecə"
              : M < 12
              ? "səhər"
              : M < 17
              ? "gündüz"
              : "axşam";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
          ordinal: function (M) {
            if (0 === M) return M + "-ıncı";
            var z = M % 10,
              p = (M % 100) - z,
              O = M >= 100 ? 100 : null;
            return M + (b[z] || b[p] || b[O]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    25997: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b) {
          var z = M.split("_");
          return b % 10 == 1 && b % 100 != 11
            ? z[0]
            : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20)
            ? z[1]
            : z[2];
        }
        function z(M, z, p) {
          return "m" === p
            ? z
              ? "хвіліна"
              : "хвіліну"
            : "h" === p
            ? z
              ? "гадзіна"
              : "гадзіну"
            : M +
              " " +
              b(
                {
                  ss: z ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                  mm: z ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                  hh: z ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                  dd: "дзень_дні_дзён",
                  MM: "месяц_месяцы_месяцаў",
                  yy: "год_гады_гадоў",
                }[p],
                +M,
              );
        }
        M.defineLocale("be", {
          months: {
            format:
              "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
                "_",
              ),
            standalone:
              "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split(
                "_",
              ),
          },
          monthsShort:
            "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split(
              "_",
            ),
          weekdays: {
            format:
              "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split(
                "_",
              ),
            standalone:
              "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split(
                "_",
              ),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
          },
          weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
          weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm",
          },
          calendar: {
            sameDay: "[Сёння ў] LT",
            nextDay: "[Заўтра ў] LT",
            lastDay: "[Учора ў] LT",
            nextWeek: function () {
              return "[У] dddd [ў] LT";
            },
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return "[У мінулую] dddd [ў] LT";
                case 1:
                case 2:
                case 4:
                  return "[У мінулы] dddd [ў] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "праз %s",
            past: "%s таму",
            s: "некалькі секунд",
            m: z,
            mm: z,
            h: z,
            hh: z,
            d: "дзень",
            dd: z,
            M: "месяц",
            MM: z,
            y: "год",
            yy: z,
          },
          meridiemParse: /ночы|раніцы|дня|вечара/,
          isPM: function (M) {
            return /^(дня|вечара)$/.test(M);
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "ночы"
              : M < 12
              ? "раніцы"
              : M < 17
              ? "дня"
              : "вечара";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
          ordinal: function (M, b) {
            switch (b) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return (M % 10 != 2 && M % 10 != 3) ||
                  M % 100 == 12 ||
                  M % 100 == 13
                  ? M + "-ы"
                  : M + "-і";
              case "D":
                return M + "-га";
              default:
                return M;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    4427: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("bg", {
          months:
            "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split(
              "_",
            ),
          monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split(
            "_",
          ),
          weekdays:
            "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
          weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[Миналата] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[Миналия] dddd [в] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "след %s",
            past: "преди %s",
            s: "няколко секунди",
            ss: "%d секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дена",
            w: "седмица",
            ww: "%d седмици",
            M: "месец",
            MM: "%d месеца",
            y: "година",
            yy: "%d години",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function (M) {
            var b = M % 10,
              z = M % 100;
            return 0 === M
              ? M + "-ев"
              : 0 === z
              ? M + "-ен"
              : z > 10 && z < 20
              ? M + "-ти"
              : 1 === b
              ? M + "-ви"
              : 2 === b
              ? M + "-ри"
              : 7 === b || 8 === b
              ? M + "-ми"
              : M + "-ти";
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    85385: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("bm", {
          months:
            "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split(
              "_",
            ),
          monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split(
            "_",
          ),
          weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
          weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
          weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "MMMM [tile] D [san] YYYY",
            LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
            LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
          },
          calendar: {
            sameDay: "[Bi lɛrɛ] LT",
            nextDay: "[Sini lɛrɛ] LT",
            nextWeek: "dddd [don lɛrɛ] LT",
            lastDay: "[Kunu lɛrɛ] LT",
            lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s kɔnɔ",
            past: "a bɛ %s bɔ",
            s: "sanga dama dama",
            ss: "sekondi %d",
            m: "miniti kelen",
            mm: "miniti %d",
            h: "lɛrɛ kelen",
            hh: "lɛrɛ %d",
            d: "tile kelen",
            dd: "tile %d",
            M: "kalo kelen",
            MM: "kalo %d",
            y: "san kelen",
            yy: "san %d",
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    57002: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০",
          },
          z = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0",
          };
        M.defineLocale("bn-bd", {
          months:
            "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
              "_",
            ),
          monthsShort:
            "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
              "_",
            ),
          weekdays:
            "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
              "_",
            ),
          weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
          weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
          longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
          },
          calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            ss: "%d সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর",
          },
          preparse: function (M) {
            return M.replace(/[১২৩৪৫৬৭৮৯০]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "রাত" === b
                ? M < 4
                  ? M
                  : M + 12
                : "ভোর" === b || "সকাল" === b
                ? M
                : "দুপুর" === b
                ? M >= 3
                  ? M
                  : M + 12
                : "বিকাল" === b || "সন্ধ্যা" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "রাত"
              : M < 6
              ? "ভোর"
              : M < 12
              ? "সকাল"
              : M < 15
              ? "দুপুর"
              : M < 18
              ? "বিকাল"
              : M < 20
              ? "সন্ধ্যা"
              : "রাত";
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    67703: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০",
          },
          z = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0",
          };
        M.defineLocale("bn", {
          months:
            "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
              "_",
            ),
          monthsShort:
            "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
              "_",
            ),
          weekdays:
            "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
              "_",
            ),
          weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
          weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
          longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
          },
          calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            ss: "%d সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর",
          },
          preparse: function (M) {
            return M.replace(/[১২৩৪৫৬৭৮৯০]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              ("রাত" === b && M >= 4) ||
              ("দুপুর" === b && M < 5) ||
              "বিকাল" === b
                ? M + 12
                : M
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "রাত"
              : M < 10
              ? "সকাল"
              : M < 17
              ? "দুপুর"
              : M < 20
              ? "বিকাল"
              : "রাত";
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    39841: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "༡",
            2: "༢",
            3: "༣",
            4: "༤",
            5: "༥",
            6: "༦",
            7: "༧",
            8: "༨",
            9: "༩",
            0: "༠",
          },
          z = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0",
          };
        M.defineLocale("bo", {
          months:
            "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
              "_",
            ),
          monthsShort:
            "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split(
              "_",
            ),
          monthsShortRegex: /^(ཟླ་\d{1,2})/,
          monthsParseExact: !0,
          weekdays:
            "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split(
              "_",
            ),
          weekdaysShort:
            "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
          weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
          },
          calendar: {
            sameDay: "[དི་རིང] LT",
            nextDay: "[སང་ཉིན] LT",
            nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
            lastDay: "[ཁ་སང] LT",
            lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ལ་",
            past: "%s སྔན་ལ",
            s: "ལམ་སང",
            ss: "%d སྐར་ཆ།",
            m: "སྐར་མ་གཅིག",
            mm: "%d སྐར་མ",
            h: "ཆུ་ཚོད་གཅིག",
            hh: "%d ཆུ་ཚོད",
            d: "ཉིན་གཅིག",
            dd: "%d ཉིན་",
            M: "ཟླ་བ་གཅིག",
            MM: "%d ཟླ་བ",
            y: "ལོ་གཅིག",
            yy: "%d ལོ",
          },
          preparse: function (M) {
            return M.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              ("མཚན་མོ" === b && M >= 4) ||
              ("ཉིན་གུང" === b && M < 5) ||
              "དགོང་དག" === b
                ? M + 12
                : M
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "མཚན་མོ"
              : M < 10
              ? "ཞོགས་ཀས"
              : M < 17
              ? "ཉིན་གུང"
              : M < 20
              ? "དགོང་དག"
              : "མཚན་མོ";
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    45642: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z) {
          return M + " " + O({ mm: "munutenn", MM: "miz", dd: "devezh" }[z], M);
        }
        function z(M) {
          switch (p(M)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return M + " bloaz";
            default:
              return M + " vloaz";
          }
        }
        function p(M) {
          return M > 9 ? p(M % 10) : M;
        }
        function O(M, b) {
          return 2 === b ? o(M) : M;
        }
        function o(M) {
          var b = { m: "v", b: "v", d: "z" };
          return void 0 === b[M.charAt(0)]
            ? M
            : b[M.charAt(0)] + M.substring(1);
        }
        var c = [
            /^gen/i,
            /^c[ʼ\']hwe/i,
            /^meu/i,
            /^ebr/i,
            /^mae/i,
            /^(mez|eve)/i,
            /^gou/i,
            /^eos/i,
            /^gwe/i,
            /^her/i,
            /^du/i,
            /^ker/i,
          ],
          A =
            /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          e =
            /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
          a = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          q = [
            /^sul/i,
            /^lun/i,
            /^meurzh/i,
            /^merc[ʼ\']her/i,
            /^yaou/i,
            /^gwener/i,
            /^sadorn/i,
          ],
          d = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
          n = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
        M.defineLocale("br", {
          months:
            "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
              "_",
            ),
          monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split(
            "_",
          ),
          weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
          weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
          weekdaysParse: n,
          fullWeekdaysParse: q,
          shortWeekdaysParse: d,
          minWeekdaysParse: n,
          monthsRegex: A,
          monthsShortRegex: A,
          monthsStrictRegex: e,
          monthsShortStrictRegex: a,
          monthsParse: c,
          longMonthsParse: c,
          shortMonthsParse: c,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY HH:mm",
            LLLL: "dddd, D [a viz] MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warcʼhoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Decʼh da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "a-benn %s",
            past: "%s ʼzo",
            s: "un nebeud segondennoù",
            ss: "%d eilenn",
            m: "ur vunutenn",
            mm: b,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: b,
            M: "ur miz",
            MM: b,
            y: "ur bloaz",
            yy: z,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
          ordinal: function (M) {
            return M + (1 === M ? "añ" : "vet");
          },
          week: { dow: 1, doy: 4 },
          meridiemParse: /a.m.|g.m./,
          isPM: function (M) {
            return "g.m." === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "a.m." : "g.m.";
          },
        });
      })(z(36105));
    },
    69038: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z) {
          var p = M + " ";
          switch (z) {
            case "ss":
              return (p +=
                1 === M
                  ? "sekunda"
                  : 2 === M || 3 === M || 4 === M
                  ? "sekunde"
                  : "sekundi");
            case "m":
              return b ? "jedna minuta" : "jedne minute";
            case "mm":
              return (p +=
                1 === M
                  ? "minuta"
                  : 2 === M || 3 === M || 4 === M
                  ? "minute"
                  : "minuta");
            case "h":
              return b ? "jedan sat" : "jednog sata";
            case "hh":
              return (p +=
                1 === M
                  ? "sat"
                  : 2 === M || 3 === M || 4 === M
                  ? "sata"
                  : "sati");
            case "dd":
              return (p += 1 === M ? "dan" : "dana");
            case "MM":
              return (p +=
                1 === M
                  ? "mjesec"
                  : 2 === M || 3 === M || 4 === M
                  ? "mjeseca"
                  : "mjeseci");
            case "yy":
              return (p +=
                1 === M
                  ? "godina"
                  : 2 === M || 3 === M || 4 === M
                  ? "godine"
                  : "godina");
          }
        }
        M.defineLocale("bs", {
          months:
            "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
              "_",
            ),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                  return "[prošlu] dddd [u] LT";
                case 6:
                  return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prošli] dddd [u] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: b,
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: "dan",
            dd: b,
            M: "mjesec",
            MM: b,
            y: "godinu",
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    53512: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ca", {
          months: {
            standalone:
              "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
                "_",
              ),
            format:
              "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
                "_",
              ),
            isFormat: /D[oD]?(\s)+MMMM/,
          },
          monthsShort:
            "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
              "_",
            ),
          weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
          weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a les] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
            llll: "ddd D MMM YYYY, H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextDay: function () {
              return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastDay: function () {
              return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [passat a " +
                (1 !== this.hours() ? "les" : "la") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "d'aquí %s",
            past: "fa %s",
            s: "uns segons",
            ss: "%d segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function (M, b) {
            var z =
              1 === M
                ? "r"
                : 2 === M
                ? "n"
                : 3 === M
                ? "r"
                : 4 === M
                ? "t"
                : "è";
            return ("w" !== b && "W" !== b) || (z = "a"), M + z;
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    39497: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            format:
              "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split(
                "_",
              ),
            standalone:
              "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split(
                "_",
              ),
          },
          z = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
          p = [
            /^led/i,
            /^úno/i,
            /^bře/i,
            /^dub/i,
            /^kvě/i,
            /^(čvn|červen$|června)/i,
            /^(čvc|červenec|července)/i,
            /^srp/i,
            /^zář/i,
            /^říj/i,
            /^lis/i,
            /^pro/i,
          ],
          O =
            /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
        function o(M) {
          return M > 1 && M < 5 && 1 != ~~(M / 10);
        }
        function c(M, b, z, p) {
          var O = M + " ";
          switch (z) {
            case "s":
              return b || p ? "pár sekund" : "pár sekundami";
            case "ss":
              return b || p
                ? O + (o(M) ? "sekundy" : "sekund")
                : O + "sekundami";
            case "m":
              return b ? "minuta" : p ? "minutu" : "minutou";
            case "mm":
              return b || p ? O + (o(M) ? "minuty" : "minut") : O + "minutami";
            case "h":
              return b ? "hodina" : p ? "hodinu" : "hodinou";
            case "hh":
              return b || p ? O + (o(M) ? "hodiny" : "hodin") : O + "hodinami";
            case "d":
              return b || p ? "den" : "dnem";
            case "dd":
              return b || p ? O + (o(M) ? "dny" : "dní") : O + "dny";
            case "M":
              return b || p ? "měsíc" : "měsícem";
            case "MM":
              return b || p ? O + (o(M) ? "měsíce" : "měsíců") : O + "měsíci";
            case "y":
              return b || p ? "rok" : "rokem";
            case "yy":
              return b || p ? O + (o(M) ? "roky" : "let") : O + "lety";
          }
        }
        M.defineLocale("cs", {
          months: b,
          monthsShort: z,
          monthsRegex: O,
          monthsShortRegex: O,
          monthsStrictRegex:
            /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
          monthsShortStrictRegex:
            /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
          monthsParse: p,
          longMonthsParse: p,
          shortMonthsParse: p,
          weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split(
            "_",
          ),
          weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
          weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY",
          },
          calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v neděli v] LT";
                case 1:
                case 2:
                  return "[v] dddd [v] LT";
                case 3:
                  return "[ve středu v] LT";
                case 4:
                  return "[ve čtvrtek v] LT";
                case 5:
                  return "[v pátek v] LT";
                case 6:
                  return "[v sobotu v] LT";
              }
            },
            lastDay: "[včera v] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[minulou neděli v] LT";
                case 1:
                case 2:
                  return "[minulé] dddd [v] LT";
                case 3:
                  return "[minulou středu v] LT";
                case 4:
                case 5:
                  return "[minulý] dddd [v] LT";
                case 6:
                  return "[minulou sobotu v] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "před %s",
            s: c,
            ss: c,
            m: c,
            mm: c,
            h: c,
            hh: c,
            d: c,
            dd: c,
            M: c,
            MM: c,
            y: c,
            yy: c,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    6479: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("cv", {
          months:
            "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split(
              "_",
            ),
          monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split(
            "_",
          ),
          weekdays:
            "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split(
              "_",
            ),
          weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
          weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
            LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
          },
          calendar: {
            sameDay: "[Паян] LT [сехетре]",
            nextDay: "[Ыран] LT [сехетре]",
            lastDay: "[Ӗнер] LT [сехетре]",
            nextWeek: "[Ҫитес] dddd LT [сехетре]",
            lastWeek: "[Иртнӗ] dddd LT [сехетре]",
            sameElse: "L",
          },
          relativeTime: {
            future: function (M) {
              return (
                M +
                (/сехет$/i.exec(M) ? "рен" : /ҫул$/i.exec(M) ? "тан" : "ран")
              );
            },
            past: "%s каялла",
            s: "пӗр-ик ҫеккунт",
            ss: "%d ҫеккунт",
            m: "пӗр минут",
            mm: "%d минут",
            h: "пӗр сехет",
            hh: "%d сехет",
            d: "пӗр кун",
            dd: "%d кун",
            M: "пӗр уйӑх",
            MM: "%d уйӑх",
            y: "пӗр ҫул",
            yy: "%d ҫул",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
          ordinal: "%d-мӗш",
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    89318: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("cy", {
          months:
            "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
              "_",
            ),
          monthsShort:
            "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
          weekdays:
            "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
              "_",
            ),
          weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "mewn %s",
            past: "%s yn ôl",
            s: "ychydig eiliadau",
            ss: "%d eiliad",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
          ordinal: function (M) {
            var b = "";
            return (
              M > 20
                ? (b =
                    40 === M || 50 === M || 60 === M || 80 === M || 100 === M
                      ? "fed"
                      : "ain")
                : M > 0 &&
                  (b = [
                    "",
                    "af",
                    "il",
                    "ydd",
                    "ydd",
                    "ed",
                    "ed",
                    "ed",
                    "fed",
                    "fed",
                    "fed",
                    "eg",
                    "fed",
                    "eg",
                    "eg",
                    "fed",
                    "eg",
                    "eg",
                    "fed",
                    "eg",
                    "fed",
                  ][M]),
              M + b
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    97229: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("da", {
          months:
            "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
              "_",
            ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
            "_",
          ),
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
            "_",
          ),
          weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "på dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[i] dddd[s kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "få sekunder",
            ss: "%d sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en måned",
            MM: "%d måneder",
            y: "et år",
            yy: "%d år",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    51044: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z, p) {
          var O = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [M + " Tage", M + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [M + " Monate", M + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [M + " Jahre", M + " Jahren"],
          };
          return b ? O[z][0] : O[z][1];
        }
        M.defineLocale("de-at", {
          months:
            "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_",
            ),
          monthsShort:
            "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_",
            ),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: b,
            mm: "%d Minuten",
            h: b,
            hh: "%d Stunden",
            d: b,
            dd: b,
            w: b,
            ww: "%d Wochen",
            M: b,
            MM: b,
            y: b,
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    26445: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z, p) {
          var O = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [M + " Tage", M + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [M + " Monate", M + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [M + " Jahre", M + " Jahren"],
          };
          return b ? O[z][0] : O[z][1];
        }
        M.defineLocale("de-ch", {
          months:
            "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_",
            ),
          monthsShort:
            "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_",
            ),
          weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: b,
            mm: "%d Minuten",
            h: b,
            hh: "%d Stunden",
            d: b,
            dd: b,
            w: b,
            ww: "%d Wochen",
            M: b,
            MM: b,
            y: b,
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    63460: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z, p) {
          var O = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [M + " Tage", M + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [M + " Monate", M + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [M + " Jahre", M + " Jahren"],
          };
          return b ? O[z][0] : O[z][1];
        }
        M.defineLocale("de", {
          months:
            "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_",
            ),
          monthsShort:
            "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_",
            ),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: b,
            mm: "%d Minuten",
            h: b,
            hh: "%d Stunden",
            d: b,
            dd: b,
            w: b,
            ww: "%d Wochen",
            M: b,
            MM: b,
            y: b,
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    32096: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = [
            "ޖެނުއަރީ",
            "ފެބްރުއަރީ",
            "މާރިޗު",
            "އޭޕްރީލު",
            "މޭ",
            "ޖޫން",
            "ޖުލައި",
            "އޯގަސްޓު",
            "ސެޕްޓެމްބަރު",
            "އޮކްޓޯބަރު",
            "ނޮވެމްބަރު",
            "ޑިސެމްބަރު",
          ],
          z = [
            "އާދިއްތަ",
            "ހޯމަ",
            "އަންގާރަ",
            "ބުދަ",
            "ބުރާސްފަތި",
            "ހުކުރު",
            "ހޮނިހިރު",
          ];
        M.defineLocale("dv", {
          months: b,
          monthsShort: b,
          weekdays: z,
          weekdaysShort: z,
          weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /މކ|މފ/,
          isPM: function (M) {
            return "މފ" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "މކ" : "މފ";
          },
          calendar: {
            sameDay: "[މިއަދު] LT",
            nextDay: "[މާދަމާ] LT",
            nextWeek: "dddd LT",
            lastDay: "[އިއްޔެ] LT",
            lastWeek: "[ފާއިތުވި] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ތެރޭގައި %s",
            past: "ކުރިން %s",
            s: "ސިކުންތުކޮޅެއް",
            ss: "d% ސިކުންތު",
            m: "މިނިޓެއް",
            mm: "މިނިޓު %d",
            h: "ގަޑިއިރެއް",
            hh: "ގަޑިއިރު %d",
            d: "ދުވަހެއް",
            dd: "ދުވަސް %d",
            M: "މަހެއް",
            MM: "މަސް %d",
            y: "އަހަރެއް",
            yy: "އަހަރު %d",
          },
          preparse: function (M) {
            return M.replace(/،/g, ",");
          },
          postformat: function (M) {
            return M.replace(/,/g, "،");
          },
          week: { dow: 7, doy: 12 },
        });
      })(z(36105));
    },
    16048: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M) {
          return (
            ("undefined" != typeof Function && M instanceof Function) ||
            "[object Function]" === Object.prototype.toString.call(M)
          );
        }
        M.defineLocale("el", {
          monthsNominativeEl:
            "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
              "_",
            ),
          monthsGenitiveEl:
            "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split(
              "_",
            ),
          months: function (M, b) {
            return M
              ? "string" == typeof b &&
                /D/.test(b.substring(0, b.indexOf("MMMM")))
                ? this._monthsGenitiveEl[M.month()]
                : this._monthsNominativeEl[M.month()]
              : this._monthsNominativeEl;
          },
          monthsShort:
            "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
          weekdays:
            "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
          weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
          weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
          meridiem: function (M, b, z) {
            return M > 11 ? (z ? "μμ" : "ΜΜ") : z ? "πμ" : "ΠΜ";
          },
          isPM: function (M) {
            return "μ" === (M + "").toLowerCase()[0];
          },
          meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendarEl: {
            sameDay: "[Σήμερα {}] LT",
            nextDay: "[Αύριο {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[Χθες {}] LT",
            lastWeek: function () {
              return 6 === this.day()
                ? "[το προηγούμενο] dddd [{}] LT"
                : "[την προηγούμενη] dddd [{}] LT";
            },
            sameElse: "L",
          },
          calendar: function (M, z) {
            var p = this._calendarEl[M],
              O = z && z.hours();
            return (
              b(p) && (p = p.apply(z)),
              p.replace("{}", O % 12 == 1 ? "στη" : "στις")
            );
          },
          relativeTime: {
            future: "σε %s",
            past: "%s πριν",
            s: "λίγα δευτερόλεπτα",
            ss: "%d δευτερόλεπτα",
            m: "ένα λεπτό",
            mm: "%d λεπτά",
            h: "μία ώρα",
            hh: "%d ώρες",
            d: "μία μέρα",
            dd: "%d μέρες",
            M: "ένας μήνας",
            MM: "%d μήνες",
            y: "ένας χρόνος",
            yy: "%d χρόνια",
          },
          dayOfMonthOrdinalParse: /\d{1,2}η/,
          ordinal: "%dη",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    74301: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("en-au", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th")
            );
          },
          week: { dow: 0, doy: 4 },
        });
      })(z(36105));
    },
    66855: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("en-ca", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th")
            );
          },
        });
      })(z(36105));
    },
    761: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("en-gb", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    46127: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("en-ie", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    49157: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("en-il", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th")
            );
          },
        });
      })(z(36105));
    },
    37199: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("en-in", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th")
            );
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    31511: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("en-nz", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    47309: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("en-sg", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    92160: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("eo", {
          months:
            "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split(
              "_",
            ),
          monthsShort:
            "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
          weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split(
            "_",
          ),
          weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
          weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "[la] D[-an de] MMMM, YYYY",
            LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
            LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
            llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm",
          },
          meridiemParse: /[ap]\.t\.m/i,
          isPM: function (M) {
            return "p" === M.charAt(0).toLowerCase();
          },
          meridiem: function (M, b, z) {
            return M > 11 ? (z ? "p.t.m." : "P.T.M.") : z ? "a.t.m." : "A.T.M.";
          },
          calendar: {
            sameDay: "[Hodiaŭ je] LT",
            nextDay: "[Morgaŭ je] LT",
            nextWeek: "dddd[n je] LT",
            lastDay: "[Hieraŭ je] LT",
            lastWeek: "[pasintan] dddd[n je] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "post %s",
            past: "antaŭ %s",
            s: "kelkaj sekundoj",
            ss: "%d sekundoj",
            m: "unu minuto",
            mm: "%d minutoj",
            h: "unu horo",
            hh: "%d horoj",
            d: "unu tago",
            dd: "%d tagoj",
            M: "unu monato",
            MM: "%d monatoj",
            y: "unu jaro",
            yy: "%d jaroj",
          },
          dayOfMonthOrdinalParse: /\d{1,2}a/,
          ordinal: "%da",
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    71885: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_",
            ),
          z = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          p = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          O =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        M.defineLocale("es-do", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_",
            ),
          monthsShort: function (M, p) {
            return M ? (/-MMM-/.test(p) ? z[M.month()] : b[M.month()]) : b;
          },
          monthsRegex: O,
          monthsShortRegex: O,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: p,
          longMonthsParse: p,
          shortMonthsParse: p,
          weekdays:
            "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    68131: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_",
            ),
          z = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          p = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          O =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        M.defineLocale("es-mx", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_",
            ),
          monthsShort: function (M, p) {
            return M ? (/-MMM-/.test(p) ? z[M.month()] : b[M.month()]) : b;
          },
          monthsRegex: O,
          monthsShortRegex: O,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: p,
          longMonthsParse: p,
          shortMonthsParse: p,
          weekdays:
            "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 0, doy: 4 },
          invalidDate: "Fecha inválida",
        });
      })(z(36105));
    },
    16962: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_",
            ),
          z = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          p = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          O =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        M.defineLocale("es-us", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_",
            ),
          monthsShort: function (M, p) {
            return M ? (/-MMM-/.test(p) ? z[M.month()] : b[M.month()]) : b;
          },
          monthsRegex: O,
          monthsShortRegex: O,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: p,
          longMonthsParse: p,
          shortMonthsParse: p,
          weekdays:
            "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    68582: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_",
            ),
          z = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          p = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          O =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        M.defineLocale("es", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_",
            ),
          monthsShort: function (M, p) {
            return M ? (/-MMM-/.test(p) ? z[M.month()] : b[M.month()]) : b;
          },
          monthsRegex: O,
          monthsShortRegex: O,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: p,
          longMonthsParse: p,
          shortMonthsParse: p,
          weekdays:
            "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
          invalidDate: "Fecha inválida",
        });
      })(z(36105));
    },
    98890: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z, p) {
          var O = {
            s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
            ss: [M + "sekundi", M + "sekundit"],
            m: ["ühe minuti", "üks minut"],
            mm: [M + " minuti", M + " minutit"],
            h: ["ühe tunni", "tund aega", "üks tund"],
            hh: [M + " tunni", M + " tundi"],
            d: ["ühe päeva", "üks päev"],
            M: ["kuu aja", "kuu aega", "üks kuu"],
            MM: [M + " kuu", M + " kuud"],
            y: ["ühe aasta", "aasta", "üks aasta"],
            yy: [M + " aasta", M + " aastat"],
          };
          return b ? (O[z][2] ? O[z][2] : O[z][1]) : p ? O[z][0] : O[z][1];
        }
        M.defineLocale("et", {
          months:
            "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
              "_",
            ),
          monthsShort:
            "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
              "_",
            ),
          weekdays:
            "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
              "_",
            ),
          weekdaysShort: "P_E_T_K_N_R_L".split("_"),
          weekdaysMin: "P_E_T_K_N_R_L".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[Täna,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[Järgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: b,
            ss: b,
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: b,
            dd: "%d päeva",
            M: b,
            MM: b,
            y: b,
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    37704: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("eu", {
          months:
            "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
              "_",
            ),
          monthsShort:
            "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
              "_",
            ),
          weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
          weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
          },
          calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            ss: "%d segundo",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    22562: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
            0: "۰",
          },
          z = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0",
          };
        M.defineLocale("fa", {
          months:
            "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
              "_",
            ),
          monthsShort:
            "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
              "_",
            ),
          weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
            "_",
          ),
          weekdaysShort:
            "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
          weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          meridiemParse: /قبل از ظهر|بعد از ظهر/,
          isPM: function (M) {
            return /بعد از ظهر/.test(M);
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "قبل از ظهر" : "بعد از ظهر";
          },
          calendar: {
            sameDay: "[امروز ساعت] LT",
            nextDay: "[فردا ساعت] LT",
            nextWeek: "dddd [ساعت] LT",
            lastDay: "[دیروز ساعت] LT",
            lastWeek: "dddd [پیش] [ساعت] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "در %s",
            past: "%s پیش",
            s: "چند ثانیه",
            ss: "%d ثانیه",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال",
          },
          preparse: function (M) {
            return M.replace(/[۰-۹]/g, function (M) {
              return z[M];
            }).replace(/،/g, ",");
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            }).replace(/,/g, "،");
          },
          dayOfMonthOrdinalParse: /\d{1,2}م/,
          ordinal: "%dم",
          week: { dow: 6, doy: 12 },
        });
      })(z(36105));
    },
    70877: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(
              " ",
            ),
          z = [
            "nolla",
            "yhden",
            "kahden",
            "kolmen",
            "neljän",
            "viiden",
            "kuuden",
            b[7],
            b[8],
            b[9],
          ];
        function p(M, b, z, p) {
          var o = "";
          switch (z) {
            case "s":
              return p ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
              o = p ? "sekunnin" : "sekuntia";
              break;
            case "m":
              return p ? "minuutin" : "minuutti";
            case "mm":
              o = p ? "minuutin" : "minuuttia";
              break;
            case "h":
              return p ? "tunnin" : "tunti";
            case "hh":
              o = p ? "tunnin" : "tuntia";
              break;
            case "d":
              return p ? "päivän" : "päivä";
            case "dd":
              o = p ? "päivän" : "päivää";
              break;
            case "M":
              return p ? "kuukauden" : "kuukausi";
            case "MM":
              o = p ? "kuukauden" : "kuukautta";
              break;
            case "y":
              return p ? "vuoden" : "vuosi";
            case "yy":
              o = p ? "vuoden" : "vuotta";
          }
          return (o = O(M, p) + " " + o);
        }
        function O(M, p) {
          return M < 10 ? (p ? z[M] : b[M]) : M;
        }
        M.defineLocale("fi", {
          months:
            "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
              "_",
            ),
          monthsShort:
            "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
              "_",
            ),
          weekdays:
            "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
              "_",
            ),
          weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
          weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm",
          },
          calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: p,
            ss: p,
            m: p,
            mm: p,
            h: p,
            hh: p,
            d: p,
            dd: p,
            M: p,
            MM: p,
            y: p,
            yy: p,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    34246: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("fil", {
          months:
            "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
              "_",
            ),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
            "_",
          ),
          weekdays:
            "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm",
          },
          calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L",
          },
          relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon",
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (M) {
            return M;
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    78341: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("fo", {
          months:
            "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
              "_",
            ),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
            "_",
          ),
          weekdays:
            "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
              "_",
            ),
          weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
          weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Í dag kl.] LT",
            nextDay: "[Í morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[Í gjár kl.] LT",
            lastWeek: "[síðstu] dddd [kl] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "um %s",
            past: "%s síðani",
            s: "fá sekund",
            ss: "%d sekundir",
            m: "ein minuttur",
            mm: "%d minuttir",
            h: "ein tími",
            hh: "%d tímar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein mánaður",
            MM: "%d mánaðir",
            y: "eitt ár",
            yy: "%d ár",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    82347: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("fr-ca", {
          months:
            "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
              "_",
            ),
          monthsShort:
            "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_",
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function (M, b) {
            switch (b) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return M + (1 === M ? "er" : "e");
              case "w":
              case "W":
                return M + (1 === M ? "re" : "e");
            }
          },
        });
      })(z(36105));
    },
    17683: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("fr-ch", {
          months:
            "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
              "_",
            ),
          monthsShort:
            "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_",
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function (M, b) {
            switch (b) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return M + (1 === M ? "er" : "e");
              case "w":
              case "W":
                return M + (1 === M ? "re" : "e");
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    19867: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
          z =
            /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
          p =
            /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
          O = [
            /^janv/i,
            /^févr/i,
            /^mars/i,
            /^avr/i,
            /^mai/i,
            /^juin/i,
            /^juil/i,
            /^août/i,
            /^sept/i,
            /^oct/i,
            /^nov/i,
            /^déc/i,
          ];
        M.defineLocale("fr", {
          months:
            "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
              "_",
            ),
          monthsShort:
            "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
              "_",
            ),
          monthsRegex: p,
          monthsShortRegex: p,
          monthsStrictRegex: b,
          monthsShortStrictRegex: z,
          monthsParse: O,
          longMonthsParse: O,
          shortMonthsParse: O,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_",
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            w: "une semaine",
            ww: "%d semaines",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
          ordinal: function (M, b) {
            switch (b) {
              case "D":
                return M + (1 === M ? "er" : "");
              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
                return M + (1 === M ? "er" : "e");
              case "w":
              case "W":
                return M + (1 === M ? "re" : "e");
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    21982: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
              "_",
            ),
          z = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        M.defineLocale("fy", {
          months:
            "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
              "_",
            ),
          monthsShort: function (M, p) {
            return M ? (/-MMM-/.test(p) ? z[M.month()] : b[M.month()]) : b;
          },
          monthsParseExact: !0,
          weekdays:
            "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
          weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
          weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[ôfrûne] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            ss: "%d sekonden",
            m: "ien minút",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (M) {
            return M + (1 === M || 8 === M || M >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    13905: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = [
            "Eanáir",
            "Feabhra",
            "Márta",
            "Aibreán",
            "Bealtaine",
            "Meitheamh",
            "Iúil",
            "Lúnasa",
            "Meán Fómhair",
            "Deireadh Fómhair",
            "Samhain",
            "Nollaig",
          ],
          z = [
            "Ean",
            "Feabh",
            "Márt",
            "Aib",
            "Beal",
            "Meith",
            "Iúil",
            "Lún",
            "M.F.",
            "D.F.",
            "Samh",
            "Noll",
          ],
          p = [
            "Dé Domhnaigh",
            "Dé Luain",
            "Dé Máirt",
            "Dé Céadaoin",
            "Déardaoin",
            "Dé hAoine",
            "Dé Sathairn",
          ],
          O = ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
          o = ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"];
        M.defineLocale("ga", {
          months: b,
          monthsShort: z,
          monthsParseExact: !0,
          weekdays: p,
          weekdaysShort: O,
          weekdaysMin: o,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Inniu ag] LT",
            nextDay: "[Amárach ag] LT",
            nextWeek: "dddd [ag] LT",
            lastDay: "[Inné ag] LT",
            lastWeek: "dddd [seo caite] [ag] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "i %s",
            past: "%s ó shin",
            s: "cúpla soicind",
            ss: "%d soicind",
            m: "nóiméad",
            mm: "%d nóiméad",
            h: "uair an chloig",
            hh: "%d uair an chloig",
            d: "lá",
            dd: "%d lá",
            M: "mí",
            MM: "%d míonna",
            y: "bliain",
            yy: "%d bliain",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function (M) {
            return M + (1 === M ? "d" : M % 10 == 2 ? "na" : "mh");
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    13443: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = [
            "Am Faoilleach",
            "An Gearran",
            "Am Màrt",
            "An Giblean",
            "An Cèitean",
            "An t-Ògmhios",
            "An t-Iuchar",
            "An Lùnastal",
            "An t-Sultain",
            "An Dàmhair",
            "An t-Samhain",
            "An Dùbhlachd",
          ],
          z = [
            "Faoi",
            "Gear",
            "Màrt",
            "Gibl",
            "Cèit",
            "Ògmh",
            "Iuch",
            "Lùn",
            "Sult",
            "Dàmh",
            "Samh",
            "Dùbh",
          ],
          p = [
            "Didòmhnaich",
            "Diluain",
            "Dimàirt",
            "Diciadain",
            "Diardaoin",
            "Dihaoine",
            "Disathairne",
          ],
          O = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
          o = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
        M.defineLocale("gd", {
          months: b,
          monthsShort: z,
          monthsParseExact: !0,
          weekdays: p,
          weekdaysShort: O,
          weekdaysMin: o,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-màireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-dè aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            ss: "%d diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "mìos",
            MM: "%d mìosan",
            y: "bliadhna",
            yy: "%d bliadhna",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function (M) {
            return M + (1 === M ? "d" : M % 10 == 2 ? "na" : "mh");
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    66905: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("gl", {
          months:
            "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split(
              "_",
            ),
          monthsShort:
            "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split(
            "_",
          ),
          weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
            },
            nextDay: function () {
              return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
            },
            nextWeek: function () {
              return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
            },
            lastDay: function () {
              return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
            },
            lastWeek: function () {
              return (
                "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: function (M) {
              return 0 === M.indexOf("un") ? "n" + M : "en " + M;
            },
            past: "hai %s",
            s: "uns segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    91324: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z, p) {
          var O = {
            s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
            ss: [M + " सॅकंडांनी", M + " सॅकंड"],
            m: ["एका मिणटान", "एक मिनूट"],
            mm: [M + " मिणटांनी", M + " मिणटां"],
            h: ["एका वरान", "एक वर"],
            hh: [M + " वरांनी", M + " वरां"],
            d: ["एका दिसान", "एक दीस"],
            dd: [M + " दिसांनी", M + " दीस"],
            M: ["एका म्हयन्यान", "एक म्हयनो"],
            MM: [M + " म्हयन्यानी", M + " म्हयने"],
            y: ["एका वर्सान", "एक वर्स"],
            yy: [M + " वर्सांनी", M + " वर्सां"],
          };
          return p ? O[z][0] : O[z][1];
        }
        M.defineLocale("gom-deva", {
          months: {
            standalone:
              "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
                "_",
              ),
            format:
              "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split(
                "_",
              ),
            isFormat: /MMMM(\s)+D[oD]?/,
          },
          monthsShort:
            "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split(
            "_",
          ),
          weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
          weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "A h:mm [वाजतां]",
            LTS: "A h:mm:ss [वाजतां]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [वाजतां]",
            LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
            llll: "ddd, D MMM YYYY, A h:mm [वाजतां]",
          },
          calendar: {
            sameDay: "[आयज] LT",
            nextDay: "[फाल्यां] LT",
            nextWeek: "[फुडलो] dddd[,] LT",
            lastDay: "[काल] LT",
            lastWeek: "[फाटलो] dddd[,] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s",
            past: "%s आदीं",
            s: b,
            ss: b,
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: b,
            dd: b,
            M: b,
            MM: b,
            y: b,
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
          ordinal: function (M, b) {
            return "D" === b ? M + "वेर" : M;
          },
          week: { dow: 0, doy: 3 },
          meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "राती" === b
                ? M < 4
                  ? M
                  : M + 12
                : "सकाळीं" === b
                ? M
                : "दनपारां" === b
                ? M > 12
                  ? M
                  : M + 12
                : "सांजे" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "राती"
              : M < 12
              ? "सकाळीं"
              : M < 16
              ? "दनपारां"
              : M < 20
              ? "सांजे"
              : "राती";
          },
        });
      })(z(36105));
    },
    41890: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z, p) {
          var O = {
            s: ["thoddea sekondamni", "thodde sekond"],
            ss: [M + " sekondamni", M + " sekond"],
            m: ["eka mintan", "ek minut"],
            mm: [M + " mintamni", M + " mintam"],
            h: ["eka voran", "ek vor"],
            hh: [M + " voramni", M + " voram"],
            d: ["eka disan", "ek dis"],
            dd: [M + " disamni", M + " dis"],
            M: ["eka mhoinean", "ek mhoino"],
            MM: [M + " mhoineamni", M + " mhoine"],
            y: ["eka vorsan", "ek voros"],
            yy: [M + " vorsamni", M + " vorsam"],
          };
          return p ? O[z][0] : O[z][1];
        }
        M.defineLocale("gom-latn", {
          months: {
            standalone:
              "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
                "_",
              ),
            format:
              "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split(
                "_",
              ),
            isFormat: /MMMM(\s)+D[oD]?/,
          },
          monthsShort:
            "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
          weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
          weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "A h:mm [vazta]",
            LTS: "A h:mm:ss [vazta]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [vazta]",
            LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
            llll: "ddd, D MMM YYYY, A h:mm [vazta]",
          },
          calendar: {
            sameDay: "[Aiz] LT",
            nextDay: "[Faleam] LT",
            nextWeek: "[Fuddlo] dddd[,] LT",
            lastDay: "[Kal] LT",
            lastWeek: "[Fattlo] dddd[,] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s",
            past: "%s adim",
            s: b,
            ss: b,
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: b,
            dd: b,
            M: b,
            MM: b,
            y: b,
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er)/,
          ordinal: function (M, b) {
            return "D" === b ? M + "er" : M;
          },
          week: { dow: 0, doy: 3 },
          meridiemParse: /rati|sokallim|donparam|sanje/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "rati" === b
                ? M < 4
                  ? M
                  : M + 12
                : "sokallim" === b
                ? M
                : "donparam" === b
                ? M > 12
                  ? M
                  : M + 12
                : "sanje" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "rati"
              : M < 12
              ? "sokallim"
              : M < 16
              ? "donparam"
              : M < 20
              ? "sanje"
              : "rati";
          },
        });
      })(z(36105));
    },
    37134: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "૧",
            2: "૨",
            3: "૩",
            4: "૪",
            5: "૫",
            6: "૬",
            7: "૭",
            8: "૮",
            9: "૯",
            0: "૦",
          },
          z = {
            "૧": "1",
            "૨": "2",
            "૩": "3",
            "૪": "4",
            "૫": "5",
            "૬": "6",
            "૭": "7",
            "૮": "8",
            "૯": "9",
            "૦": "0",
          };
        M.defineLocale("gu", {
          months:
            "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split(
              "_",
            ),
          monthsShort:
            "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
          weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
          weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
          longDateFormat: {
            LT: "A h:mm વાગ્યે",
            LTS: "A h:mm:ss વાગ્યે",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm વાગ્યે",
            LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે",
          },
          calendar: {
            sameDay: "[આજ] LT",
            nextDay: "[કાલે] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ગઇકાલે] LT",
            lastWeek: "[પાછલા] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s મા",
            past: "%s પહેલા",
            s: "અમુક પળો",
            ss: "%d સેકંડ",
            m: "એક મિનિટ",
            mm: "%d મિનિટ",
            h: "એક કલાક",
            hh: "%d કલાક",
            d: "એક દિવસ",
            dd: "%d દિવસ",
            M: "એક મહિનો",
            MM: "%d મહિનો",
            y: "એક વર્ષ",
            yy: "%d વર્ષ",
          },
          preparse: function (M) {
            return M.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "રાત" === b
                ? M < 4
                  ? M
                  : M + 12
                : "સવાર" === b
                ? M
                : "બપોર" === b
                ? M >= 10
                  ? M
                  : M + 12
                : "સાંજ" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "રાત"
              : M < 10
              ? "સવાર"
              : M < 17
              ? "બપોર"
              : M < 20
              ? "સાંજ"
              : "રાત";
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    96835: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("he", {
          months:
            "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
              "_",
            ),
          monthsShort:
            "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split(
              "_",
            ),
          weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
          weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
          weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            ss: "%d שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: function (M) {
              return 2 === M ? "שעתיים" : M + " שעות";
            },
            d: "יום",
            dd: function (M) {
              return 2 === M ? "יומיים" : M + " ימים";
            },
            M: "חודש",
            MM: function (M) {
              return 2 === M ? "חודשיים" : M + " חודשים";
            },
            y: "שנה",
            yy: function (M) {
              return 2 === M
                ? "שנתיים"
                : M % 10 == 0 && 10 !== M
                ? M + " שנה"
                : M + " שנים";
            },
          },
          meridiemParse:
            /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
          isPM: function (M) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(M);
          },
          meridiem: function (M, b, z) {
            return M < 5
              ? "לפנות בוקר"
              : M < 10
              ? "בבוקר"
              : M < 12
              ? z
                ? 'לפנה"צ'
                : "לפני הצהריים"
              : M < 18
              ? z
                ? 'אחה"צ'
                : "אחרי הצהריים"
              : "בערב";
          },
        });
      })(z(36105));
    },
    81394: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०",
          },
          z = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0",
          },
          p = [
            /^जन/i,
            /^फ़र|फर/i,
            /^मार्च/i,
            /^अप्रै/i,
            /^मई/i,
            /^जून/i,
            /^जुल/i,
            /^अग/i,
            /^सितं|सित/i,
            /^अक्टू/i,
            /^नव|नवं/i,
            /^दिसं|दिस/i,
          ],
          O = [
            /^जन/i,
            /^फ़र/i,
            /^मार्च/i,
            /^अप्रै/i,
            /^मई/i,
            /^जून/i,
            /^जुल/i,
            /^अग/i,
            /^सित/i,
            /^अक्टू/i,
            /^नव/i,
            /^दिस/i,
          ];
        M.defineLocale("hi", {
          months: {
            format:
              "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
                "_",
              ),
            standalone:
              "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split(
                "_",
              ),
          },
          monthsShort:
            "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
              "_",
            ),
          weekdays:
            "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm बजे",
            LTS: "A h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, A h:mm बजे",
          },
          monthsParse: p,
          longMonthsParse: p,
          shortMonthsParse: O,
          monthsRegex:
            /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
          monthsShortRegex:
            /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
          monthsStrictRegex:
            /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
          monthsShortStrictRegex:
            /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            ss: "%d सेकंड",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष",
          },
          preparse: function (M) {
            return M.replace(/[१२३४५६७८९०]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          meridiemParse: /रात|सुबह|दोपहर|शाम/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "रात" === b
                ? M < 4
                  ? M
                  : M + 12
                : "सुबह" === b
                ? M
                : "दोपहर" === b
                ? M >= 10
                  ? M
                  : M + 12
                : "शाम" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "रात"
              : M < 10
              ? "सुबह"
              : M < 17
              ? "दोपहर"
              : M < 20
              ? "शाम"
              : "रात";
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    13564: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z) {
          var p = M + " ";
          switch (z) {
            case "ss":
              return (p +=
                1 === M
                  ? "sekunda"
                  : 2 === M || 3 === M || 4 === M
                  ? "sekunde"
                  : "sekundi");
            case "m":
              return b ? "jedna minuta" : "jedne minute";
            case "mm":
              return (p +=
                1 === M
                  ? "minuta"
                  : 2 === M || 3 === M || 4 === M
                  ? "minute"
                  : "minuta");
            case "h":
              return b ? "jedan sat" : "jednog sata";
            case "hh":
              return (p +=
                1 === M
                  ? "sat"
                  : 2 === M || 3 === M || 4 === M
                  ? "sata"
                  : "sati");
            case "dd":
              return (p += 1 === M ? "dan" : "dana");
            case "MM":
              return (p +=
                1 === M
                  ? "mjesec"
                  : 2 === M || 3 === M || 4 === M
                  ? "mjeseca"
                  : "mjeseci");
            case "yy":
              return (p +=
                1 === M
                  ? "godina"
                  : 2 === M || 3 === M || 4 === M
                  ? "godine"
                  : "godina");
          }
        }
        M.defineLocale("hr", {
          months: {
            format:
              "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
                "_",
              ),
            standalone:
              "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
                "_",
              ),
          },
          monthsShort:
            "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
              "_",
            ),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM YYYY",
            LLL: "Do MMMM YYYY H:mm",
            LLLL: "dddd, Do MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[prošlu] [nedjelju] [u] LT";
                case 3:
                  return "[prošlu] [srijedu] [u] LT";
                case 6:
                  return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prošli] dddd [u] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: b,
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: "dan",
            dd: b,
            M: "mjesec",
            MM: b,
            y: "godinu",
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    46269: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
          "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(
            " ",
          );
        function z(M, b, z, p) {
          var O = M;
          switch (z) {
            case "s":
              return p || b ? "néhány másodperc" : "néhány másodperce";
            case "ss":
              return O + (p || b) ? " másodperc" : " másodperce";
            case "m":
              return "egy" + (p || b ? " perc" : " perce");
            case "mm":
              return O + (p || b ? " perc" : " perce");
            case "h":
              return "egy" + (p || b ? " óra" : " órája");
            case "hh":
              return O + (p || b ? " óra" : " órája");
            case "d":
              return "egy" + (p || b ? " nap" : " napja");
            case "dd":
              return O + (p || b ? " nap" : " napja");
            case "M":
              return "egy" + (p || b ? " hónap" : " hónapja");
            case "MM":
              return O + (p || b ? " hónap" : " hónapja");
            case "y":
              return "egy" + (p || b ? " év" : " éve");
            case "yy":
              return O + (p || b ? " év" : " éve");
          }
          return "";
        }
        function p(M) {
          return (M ? "" : "[múlt] ") + "[" + b[this.day()] + "] LT[-kor]";
        }
        M.defineLocale("hu", {
          months:
            "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
              "_",
            ),
          monthsShort:
            "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split(
            "_",
          ),
          weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
          weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm",
          },
          meridiemParse: /de|du/i,
          isPM: function (M) {
            return "u" === M.charAt(1).toLowerCase();
          },
          meridiem: function (M, b, z) {
            return M < 12 ? (!0 === z ? "de" : "DE") : !0 === z ? "du" : "DU";
          },
          calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function () {
              return p.call(this, !0);
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function () {
              return p.call(this, !1);
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: z,
            ss: z,
            m: z,
            mm: z,
            h: z,
            hh: z,
            d: z,
            dd: z,
            M: z,
            MM: z,
            y: z,
            yy: z,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    57269: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("hy-am", {
          months: {
            format:
              "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
                "_",
              ),
            standalone:
              "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split(
                "_",
              ),
          },
          monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split(
            "_",
          ),
          weekdays:
            "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
              "_",
            ),
          weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
          weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY թ.",
            LLL: "D MMMM YYYY թ., HH:mm",
            LLLL: "dddd, D MMMM YYYY թ., HH:mm",
          },
          calendar: {
            sameDay: "[այսօր] LT",
            nextDay: "[վաղը] LT",
            lastDay: "[երեկ] LT",
            nextWeek: function () {
              return "dddd [օրը ժամը] LT";
            },
            lastWeek: function () {
              return "[անցած] dddd [օրը ժամը] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "%s հետո",
            past: "%s առաջ",
            s: "մի քանի վայրկյան",
            ss: "%d վայրկյան",
            m: "րոպե",
            mm: "%d րոպե",
            h: "ժամ",
            hh: "%d ժամ",
            d: "օր",
            dd: "%d օր",
            M: "ամիս",
            MM: "%d ամիս",
            y: "տարի",
            yy: "%d տարի",
          },
          meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
          isPM: function (M) {
            return /^(ցերեկվա|երեկոյան)$/.test(M);
          },
          meridiem: function (M) {
            return M < 4
              ? "գիշերվա"
              : M < 12
              ? "առավոտվա"
              : M < 17
              ? "ցերեկվա"
              : "երեկոյան";
          },
          dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
          ordinal: function (M, b) {
            switch (b) {
              case "DDD":
              case "w":
              case "W":
              case "DDDo":
                return 1 === M ? M + "-ին" : M + "-րդ";
              default:
                return M;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    44254: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("id", {
          months:
            "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split(
            "_",
          ),
          weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /pagi|siang|sore|malam/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "pagi" === b
                ? M
                : "siang" === b
                ? M >= 11
                  ? M
                  : M + 12
                : "sore" === b || "malam" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 11
              ? "pagi"
              : M < 15
              ? "siang"
              : M < 19
              ? "sore"
              : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            ss: "%d detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun",
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    8699: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M) {
          return M % 100 == 11 || M % 10 != 1;
        }
        function z(M, z, p, O) {
          var o = M + " ";
          switch (p) {
            case "s":
              return z || O ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "ss":
              return b(M)
                ? o + (z || O ? "sekúndur" : "sekúndum")
                : o + "sekúnda";
            case "m":
              return z ? "mínúta" : "mínútu";
            case "mm":
              return b(M)
                ? o + (z || O ? "mínútur" : "mínútum")
                : z
                ? o + "mínúta"
                : o + "mínútu";
            case "hh":
              return b(M)
                ? o + (z || O ? "klukkustundir" : "klukkustundum")
                : o + "klukkustund";
            case "d":
              return z ? "dagur" : O ? "dag" : "degi";
            case "dd":
              return b(M)
                ? z
                  ? o + "dagar"
                  : o + (O ? "daga" : "dögum")
                : z
                ? o + "dagur"
                : o + (O ? "dag" : "degi");
            case "M":
              return z ? "mánuður" : O ? "mánuð" : "mánuði";
            case "MM":
              return b(M)
                ? z
                  ? o + "mánuðir"
                  : o + (O ? "mánuði" : "mánuðum")
                : z
                ? o + "mánuður"
                : o + (O ? "mánuð" : "mánuði");
            case "y":
              return z || O ? "ár" : "ári";
            case "yy":
              return b(M)
                ? o + (z || O ? "ár" : "árum")
                : o + (z || O ? "ár" : "ári");
          }
        }
        M.defineLocale("is", {
          months:
            "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
              "_",
            ),
          monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split(
            "_",
          ),
          weekdays:
            "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
              "_",
            ),
          weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
          weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
          },
          calendar: {
            sameDay: "[í dag kl.] LT",
            nextDay: "[á morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[í gær kl.] LT",
            lastWeek: "[síðasta] dddd [kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "eftir %s",
            past: "fyrir %s síðan",
            s: z,
            ss: z,
            m: z,
            mm: z,
            h: "klukkustund",
            hh: z,
            d: z,
            dd: z,
            M: z,
            MM: z,
            y: z,
            yy: z,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    92887: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("it-ch", {
          months:
            "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
              "_",
            ),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
            "_",
          ),
          weekdays:
            "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
              "_",
            ),
          weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
          weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function () {
              return 0 === this.day()
                ? "[la scorsa] dddd [alle] LT"
                : "[lo scorso] dddd [alle] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: function (M) {
              return (/^[0-9].+$/.test(M) ? "tra" : "in") + " " + M;
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    28301: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("it", {
          months:
            "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
              "_",
            ),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
            "_",
          ),
          weekdays:
            "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
              "_",
            ),
          weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
          weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: function () {
              return (
                "[Oggi a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            nextDay: function () {
              return (
                "[Domani a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            nextWeek: function () {
              return (
                "dddd [a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            lastDay: function () {
              return (
                "[Ieri a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            lastWeek: function () {
              return 0 === this.day()
                ? "[La scorsa] dddd [a" +
                    (this.hours() > 1
                      ? "lle "
                      : 0 === this.hours()
                      ? " "
                      : "ll'") +
                    "]LT"
                : "[Lo scorso] dddd [a" +
                    (this.hours() > 1
                      ? "lle "
                      : 0 === this.hours()
                      ? " "
                      : "ll'") +
                    "]LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "tra %s",
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            w: "una settimana",
            ww: "%d settimane",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    64642: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ja", {
          eras: [
            {
              since: "2019-05-01",
              offset: 1,
              name: "令和",
              narrow: "㋿",
              abbr: "R",
            },
            {
              since: "1989-01-08",
              until: "2019-04-30",
              offset: 1,
              name: "平成",
              narrow: "㍻",
              abbr: "H",
            },
            {
              since: "1926-12-25",
              until: "1989-01-07",
              offset: 1,
              name: "昭和",
              narrow: "㍼",
              abbr: "S",
            },
            {
              since: "1912-07-30",
              until: "1926-12-24",
              offset: 1,
              name: "大正",
              narrow: "㍽",
              abbr: "T",
            },
            {
              since: "1873-01-01",
              until: "1912-07-29",
              offset: 6,
              name: "明治",
              narrow: "㍾",
              abbr: "M",
            },
            {
              since: "0001-01-01",
              until: "1873-12-31",
              offset: 1,
              name: "西暦",
              narrow: "AD",
              abbr: "AD",
            },
            {
              since: "0000-12-31",
              until: -1 / 0,
              offset: 1,
              name: "紀元前",
              narrow: "BC",
              abbr: "BC",
            },
          ],
          eraYearOrdinalRegex: /(元|\d+)年/,
          eraYearOrdinalParse: function (M, b) {
            return "元" === b[1] ? 1 : parseInt(b[1] || M, 10);
          },
          months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
            "_",
          ),
          monthsShort:
            "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split(
            "_",
          ),
          weekdaysShort: "日_月_火_水_木_金_土".split("_"),
          weekdaysMin: "日_月_火_水_木_金_土".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日 dddd HH:mm",
            l: "YYYY/MM/DD",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日(ddd) HH:mm",
          },
          meridiemParse: /午前|午後/i,
          isPM: function (M) {
            return "午後" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "午前" : "午後";
          },
          calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: function (M) {
              return M.week() !== this.week() ? "[来週]dddd LT" : "dddd LT";
            },
            lastDay: "[昨日] LT",
            lastWeek: function (M) {
              return this.week() !== M.week() ? "[先週]dddd LT" : "dddd LT";
            },
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}日/,
          ordinal: function (M, b) {
            switch (b) {
              case "y":
                return 1 === M ? "元年" : M + "年";
              case "d":
              case "D":
              case "DDD":
                return M + "日";
              default:
                return M;
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            ss: "%d秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年",
          },
        });
      })(z(36105));
    },
    62168: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("jv", {
          months:
            "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split(
            "_",
          ),
          weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /enjing|siyang|sonten|ndalu/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "enjing" === b
                ? M
                : "siyang" === b
                ? M >= 11
                  ? M
                  : M + 12
                : "sonten" === b || "ndalu" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 11
              ? "enjing"
              : M < 15
              ? "siyang"
              : M < 19
              ? "sonten"
              : "ndalu";
          },
          calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            ss: "%d detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun",
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    94501: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ka", {
          months:
            "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
              "_",
            ),
          monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split(
            "_",
          ),
          weekdays: {
            standalone:
              "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
                "_",
              ),
            format:
              "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split(
                "_",
              ),
            isFormat: /(წინა|შემდეგ)/,
          },
          weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
          weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[დღეს] LT[-ზე]",
            nextDay: "[ხვალ] LT[-ზე]",
            lastDay: "[გუშინ] LT[-ზე]",
            nextWeek: "[შემდეგ] dddd LT[-ზე]",
            lastWeek: "[წინა] dddd LT-ზე",
            sameElse: "L",
          },
          relativeTime: {
            future: function (M) {
              return M.replace(
                /(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/,
                function (M, b, z) {
                  return "ი" === z ? b + "ში" : b + z + "ში";
                },
              );
            },
            past: function (M) {
              return /(წამი|წუთი|საათი|დღე|თვე)/.test(M)
                ? M.replace(/(ი|ე)$/, "ის წინ")
                : /წელი/.test(M)
                ? M.replace(/წელი$/, "წლის წინ")
                : M;
            },
            s: "რამდენიმე წამი",
            ss: "%d წამი",
            m: "წუთი",
            mm: "%d წუთი",
            h: "საათი",
            hh: "%d საათი",
            d: "დღე",
            dd: "%d დღე",
            M: "თვე",
            MM: "%d თვე",
            y: "წელი",
            yy: "%d წელი",
          },
          dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
          ordinal: function (M) {
            return 0 === M
              ? M
              : 1 === M
              ? M + "-ლი"
              : M < 20 || (M <= 100 && M % 20 == 0) || M % 100 == 0
              ? "მე-" + M
              : M + "-ე";
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    49537: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          0: "-ші",
          1: "-ші",
          2: "-ші",
          3: "-ші",
          4: "-ші",
          5: "-ші",
          6: "-шы",
          7: "-ші",
          8: "-ші",
          9: "-шы",
          10: "-шы",
          20: "-шы",
          30: "-шы",
          40: "-шы",
          50: "-ші",
          60: "-шы",
          70: "-ші",
          80: "-ші",
          90: "-шы",
          100: "-ші",
        };
        M.defineLocale("kk", {
          months:
            "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
              "_",
            ),
          monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split(
            "_",
          ),
          weekdays:
            "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split(
              "_",
            ),
          weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
          weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Бүгін сағат] LT",
            nextDay: "[Ертең сағат] LT",
            nextWeek: "dddd [сағат] LT",
            lastDay: "[Кеше сағат] LT",
            lastWeek: "[Өткен аптаның] dddd [сағат] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ішінде",
            past: "%s бұрын",
            s: "бірнеше секунд",
            ss: "%d секунд",
            m: "бір минут",
            mm: "%d минут",
            h: "бір сағат",
            hh: "%d сағат",
            d: "бір күн",
            dd: "%d күн",
            M: "бір ай",
            MM: "%d ай",
            y: "бір жыл",
            yy: "%d жыл",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
          ordinal: function (M) {
            var z = M % 10,
              p = M >= 100 ? 100 : null;
            return M + (b[M] || b[z] || b[p]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    45808: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "១",
            2: "២",
            3: "៣",
            4: "៤",
            5: "៥",
            6: "៦",
            7: "៧",
            8: "៨",
            9: "៩",
            0: "០",
          },
          z = {
            "១": "1",
            "២": "2",
            "៣": "3",
            "៤": "4",
            "៥": "5",
            "៦": "6",
            "៧": "7",
            "៨": "8",
            "៩": "9",
            "០": "0",
          };
        M.defineLocale("km", {
          months:
            "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
              "_",
            ),
          monthsShort:
            "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
              "_",
            ),
          weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
          weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
          weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          meridiemParse: /ព្រឹក|ល្ងាច/,
          isPM: function (M) {
            return "ល្ងាច" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "ព្រឹក" : "ល្ងាច";
          },
          calendar: {
            sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
            nextDay: "[ស្អែក ម៉ោង] LT",
            nextWeek: "dddd [ម៉ោង] LT",
            lastDay: "[ម្សិលមិញ ម៉ោង] LT",
            lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%sទៀត",
            past: "%sមុន",
            s: "ប៉ុន្មានវិនាទី",
            ss: "%d វិនាទី",
            m: "មួយនាទី",
            mm: "%d នាទី",
            h: "មួយម៉ោង",
            hh: "%d ម៉ោង",
            d: "មួយថ្ងៃ",
            dd: "%d ថ្ងៃ",
            M: "មួយខែ",
            MM: "%d ខែ",
            y: "មួយឆ្នាំ",
            yy: "%d ឆ្នាំ",
          },
          dayOfMonthOrdinalParse: /ទី\d{1,2}/,
          ordinal: "ទី%d",
          preparse: function (M) {
            return M.replace(/[១២៣៤៥៦៧៨៩០]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    34881: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "೧",
            2: "೨",
            3: "೩",
            4: "೪",
            5: "೫",
            6: "೬",
            7: "೭",
            8: "೮",
            9: "೯",
            0: "೦",
          },
          z = {
            "೧": "1",
            "೨": "2",
            "೩": "3",
            "೪": "4",
            "೫": "5",
            "೬": "6",
            "೭": "7",
            "೮": "8",
            "೯": "9",
            "೦": "0",
          };
        M.defineLocale("kn", {
          months:
            "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split(
              "_",
            ),
          monthsShort:
            "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split(
              "_",
            ),
          weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
          weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
          },
          calendar: {
            sameDay: "[ಇಂದು] LT",
            nextDay: "[ನಾಳೆ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ನಿನ್ನೆ] LT",
            lastWeek: "[ಕೊನೆಯ] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ನಂತರ",
            past: "%s ಹಿಂದೆ",
            s: "ಕೆಲವು ಕ್ಷಣಗಳು",
            ss: "%d ಸೆಕೆಂಡುಗಳು",
            m: "ಒಂದು ನಿಮಿಷ",
            mm: "%d ನಿಮಿಷ",
            h: "ಒಂದು ಗಂಟೆ",
            hh: "%d ಗಂಟೆ",
            d: "ಒಂದು ದಿನ",
            dd: "%d ದಿನ",
            M: "ಒಂದು ತಿಂಗಳು",
            MM: "%d ತಿಂಗಳು",
            y: "ಒಂದು ವರ್ಷ",
            yy: "%d ವರ್ಷ",
          },
          preparse: function (M) {
            return M.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "ರಾತ್ರಿ" === b
                ? M < 4
                  ? M
                  : M + 12
                : "ಬೆಳಿಗ್ಗೆ" === b
                ? M
                : "ಮಧ್ಯಾಹ್ನ" === b
                ? M >= 10
                  ? M
                  : M + 12
                : "ಸಂಜೆ" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "ರಾತ್ರಿ"
              : M < 10
              ? "ಬೆಳಿಗ್ಗೆ"
              : M < 17
              ? "ಮಧ್ಯಾಹ್ನ"
              : M < 20
              ? "ಸಂಜೆ"
              : "ರಾತ್ರಿ";
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
          ordinal: function (M) {
            return M + "ನೇ";
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    62951: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ko", {
          months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
            "_",
          ),
          monthsShort:
            "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
          weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split(
            "_",
          ),
          weekdaysShort: "일_월_화_수_목_금_토".split("_"),
          weekdaysMin: "일_월_화_수_목_금_토".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h:mm",
            LLLL: "YYYY년 MMMM D일 dddd A h:mm",
            l: "YYYY.MM.DD.",
            ll: "YYYY년 MMMM D일",
            lll: "YYYY년 MMMM D일 A h:mm",
            llll: "YYYY년 MMMM D일 dddd A h:mm",
          },
          calendar: {
            sameDay: "오늘 LT",
            nextDay: "내일 LT",
            nextWeek: "dddd LT",
            lastDay: "어제 LT",
            lastWeek: "지난주 dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇 초",
            ss: "%d초",
            m: "1분",
            mm: "%d분",
            h: "한 시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한 달",
            MM: "%d달",
            y: "일 년",
            yy: "%d년",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
          ordinal: function (M, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return M + "일";
              case "M":
                return M + "월";
              case "w":
              case "W":
                return M + "주";
              default:
                return M;
            }
          },
          meridiemParse: /오전|오후/,
          isPM: function (M) {
            return "오후" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "오전" : "오후";
          },
        });
      })(z(36105));
    },
    92452: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠",
          },
          z = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0",
          },
          p = [
            "کانونی دووەم",
            "شوبات",
            "ئازار",
            "نیسان",
            "ئایار",
            "حوزەیران",
            "تەمموز",
            "ئاب",
            "ئەیلوول",
            "تشرینی یەكەم",
            "تشرینی دووەم",
            "كانونی یەکەم",
          ];
        M.defineLocale("ku", {
          months: p,
          monthsShort: p,
          weekdays:
            "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split(
              "_",
            ),
          weekdaysShort:
            "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split(
              "_",
            ),
          weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          meridiemParse: /ئێواره‌|به‌یانی/,
          isPM: function (M) {
            return /ئێواره‌/.test(M);
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "به‌یانی" : "ئێواره‌";
          },
          calendar: {
            sameDay: "[ئه‌مرۆ كاتژمێر] LT",
            nextDay: "[به‌یانی كاتژمێر] LT",
            nextWeek: "dddd [كاتژمێر] LT",
            lastDay: "[دوێنێ كاتژمێر] LT",
            lastWeek: "dddd [كاتژمێر] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "له‌ %s",
            past: "%s",
            s: "چه‌ند چركه‌یه‌ك",
            ss: "چركه‌ %d",
            m: "یه‌ك خوله‌ك",
            mm: "%d خوله‌ك",
            h: "یه‌ك كاتژمێر",
            hh: "%d كاتژمێر",
            d: "یه‌ك ڕۆژ",
            dd: "%d ڕۆژ",
            M: "یه‌ك مانگ",
            MM: "%d مانگ",
            y: "یه‌ك ساڵ",
            yy: "%d ساڵ",
          },
          preparse: function (M) {
            return M.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (M) {
              return z[M];
            }).replace(/،/g, ",");
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            }).replace(/,/g, "،");
          },
          week: { dow: 6, doy: 12 },
        });
      })(z(36105));
    },
    1853: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          0: "-чү",
          1: "-чи",
          2: "-чи",
          3: "-чү",
          4: "-чү",
          5: "-чи",
          6: "-чы",
          7: "-чи",
          8: "-чи",
          9: "-чу",
          10: "-чу",
          20: "-чы",
          30: "-чу",
          40: "-чы",
          50: "-чү",
          60: "-чы",
          70: "-чи",
          80: "-чи",
          90: "-чу",
          100: "-чү",
        };
        M.defineLocale("ky", {
          months:
            "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
              "_",
            ),
          monthsShort:
            "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
          weekdays:
            "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split(
              "_",
            ),
          weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
          weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Бүгүн саат] LT",
            nextDay: "[Эртең саат] LT",
            nextWeek: "dddd [саат] LT",
            lastDay: "[Кечээ саат] LT",
            lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ичинде",
            past: "%s мурун",
            s: "бирнече секунд",
            ss: "%d секунд",
            m: "бир мүнөт",
            mm: "%d мүнөт",
            h: "бир саат",
            hh: "%d саат",
            d: "бир күн",
            dd: "%d күн",
            M: "бир ай",
            MM: "%d ай",
            y: "бир жыл",
            yy: "%d жыл",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
          ordinal: function (M) {
            var z = M % 10,
              p = M >= 100 ? 100 : null;
            return M + (b[M] || b[z] || b[p]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    77639: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z, p) {
          var O = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"],
          };
          return b ? O[z][0] : O[z][1];
        }
        function z(M) {
          return O(M.substr(0, M.indexOf(" "))) ? "a " + M : "an " + M;
        }
        function p(M) {
          return O(M.substr(0, M.indexOf(" "))) ? "viru " + M : "virun " + M;
        }
        function O(M) {
          if (((M = parseInt(M, 10)), isNaN(M))) return !1;
          if (M < 0) return !0;
          if (M < 10) return 4 <= M && M <= 7;
          if (M < 100) {
            var b = M % 10;
            return O(0 === b ? M / 10 : b);
          }
          if (M < 1e4) {
            for (; M >= 10; ) M /= 10;
            return O(M);
          }
          return O((M /= 1e3));
        }
        M.defineLocale("lb", {
          months:
            "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_",
            ),
          monthsShort:
            "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
              "_",
            ),
          weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
          },
          calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gëschter um] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 2:
                case 4:
                  return "[Leschten] dddd [um] LT";
                default:
                  return "[Leschte] dddd [um] LT";
              }
            },
          },
          relativeTime: {
            future: z,
            past: p,
            s: "e puer Sekonnen",
            ss: "%d Sekonnen",
            m: b,
            mm: "%d Minutten",
            h: b,
            hh: "%d Stonnen",
            d: b,
            dd: "%d Deeg",
            M: b,
            MM: "%d Méint",
            y: b,
            yy: "%d Joer",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    34502: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("lo", {
          months:
            "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
              "_",
            ),
          monthsShort:
            "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
              "_",
            ),
          weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
          weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
          weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "ວັນdddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
          isPM: function (M) {
            return "ຕອນແລງ" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
          },
          calendar: {
            sameDay: "[ມື້ນີ້ເວລາ] LT",
            nextDay: "[ມື້ອື່ນເວລາ] LT",
            nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
            lastDay: "[ມື້ວານນີ້ເວລາ] LT",
            lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ອີກ %s",
            past: "%sຜ່ານມາ",
            s: "ບໍ່ເທົ່າໃດວິນາທີ",
            ss: "%d ວິນາທີ",
            m: "1 ນາທີ",
            mm: "%d ນາທີ",
            h: "1 ຊົ່ວໂມງ",
            hh: "%d ຊົ່ວໂມງ",
            d: "1 ມື້",
            dd: "%d ມື້",
            M: "1 ເດືອນ",
            MM: "%d ເດືອນ",
            y: "1 ປີ",
            yy: "%d ປີ",
          },
          dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
          ordinal: function (M) {
            return "ທີ່" + M;
          },
        });
      })(z(36105));
    },
    60874: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          ss: "sekundė_sekundžių_sekundes",
          m: "minutė_minutės_minutę",
          mm: "minutės_minučių_minutes",
          h: "valanda_valandos_valandą",
          hh: "valandos_valandų_valandas",
          d: "diena_dienos_dieną",
          dd: "dienos_dienų_dienas",
          M: "mėnuo_mėnesio_mėnesį",
          MM: "mėnesiai_mėnesių_mėnesius",
          y: "metai_metų_metus",
          yy: "metai_metų_metus",
        };
        function z(M, b, z, p) {
          return b
            ? "kelios sekundės"
            : p
            ? "kelių sekundžių"
            : "kelias sekundes";
        }
        function p(M, b, z, p) {
          return b ? o(z)[0] : p ? o(z)[1] : o(z)[2];
        }
        function O(M) {
          return M % 10 == 0 || (M > 10 && M < 20);
        }
        function o(M) {
          return b[M].split("_");
        }
        function c(M, b, z, c) {
          var A = M + " ";
          return 1 === M
            ? A + p(M, b, z[0], c)
            : b
            ? A + (O(M) ? o(z)[1] : o(z)[0])
            : c
            ? A + o(z)[1]
            : A + (O(M) ? o(z)[1] : o(z)[2]);
        }
        M.defineLocale("lt", {
          months: {
            format:
              "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
                "_",
              ),
            standalone:
              "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
                "_",
              ),
            isFormat:
              /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
          },
          monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split(
            "_",
          ),
          weekdays: {
            format:
              "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
                "_",
              ),
            standalone:
              "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
                "_",
              ),
            isFormat: /dddd HH:mm/,
          },
          weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
          weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
          },
          calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: z,
            ss: c,
            m: p,
            mm: c,
            h: p,
            hh: c,
            d: p,
            dd: c,
            M: p,
            MM: c,
            y: p,
            yy: c,
          },
          dayOfMonthOrdinalParse: /\d{1,2}-oji/,
          ordinal: function (M) {
            return M + "-oji";
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    18237: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
          m: "minūtes_minūtēm_minūte_minūtes".split("_"),
          mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
          h: "stundas_stundām_stunda_stundas".split("_"),
          hh: "stundas_stundām_stunda_stundas".split("_"),
          d: "dienas_dienām_diena_dienas".split("_"),
          dd: "dienas_dienām_diena_dienas".split("_"),
          M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
          MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
          y: "gada_gadiem_gads_gadi".split("_"),
          yy: "gada_gadiem_gads_gadi".split("_"),
        };
        function z(M, b, z) {
          return z
            ? b % 10 == 1 && b % 100 != 11
              ? M[2]
              : M[3]
            : b % 10 == 1 && b % 100 != 11
            ? M[0]
            : M[1];
        }
        function p(M, p, O) {
          return M + " " + z(b[O], M, p);
        }
        function O(M, p, O) {
          return z(b[O], M, p);
        }
        function o(M, b) {
          return b ? "dažas sekundes" : "dažām sekundēm";
        }
        M.defineLocale("lv", {
          months:
            "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
              "_",
            ),
          monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split(
            "_",
          ),
          weekdays:
            "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
              "_",
            ),
          weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
          },
          calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "pēc %s",
            past: "pirms %s",
            s: o,
            ss: p,
            m: O,
            mm: p,
            h: O,
            hh: p,
            d: O,
            dd: p,
            M: O,
            MM: p,
            y: O,
            yy: p,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    87878: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          words: {
            ss: ["sekund", "sekunda", "sekundi"],
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"],
          },
          correctGrammaticalCase: function (M, b) {
            return 1 === M ? b[0] : M >= 2 && M <= 4 ? b[1] : b[2];
          },
          translate: function (M, z, p) {
            var O = b.words[p];
            return 1 === p.length
              ? z
                ? O[0]
                : O[1]
              : M + " " + b.correctGrammaticalCase(M, O);
          },
        };
        M.defineLocale("me", {
          months:
            "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
              "_",
            ),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[juče u] LT",
            lastWeek: function () {
              return [
                "[prošle] [nedjelje] [u] LT",
                "[prošlog] [ponedjeljka] [u] LT",
                "[prošlog] [utorka] [u] LT",
                "[prošle] [srijede] [u] LT",
                "[prošlog] [četvrtka] [u] LT",
                "[prošlog] [petka] [u] LT",
                "[prošle] [subote] [u] LT",
              ][this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            ss: b.translate,
            m: b.translate,
            mm: b.translate,
            h: b.translate,
            hh: b.translate,
            d: "dan",
            dd: b.translate,
            M: "mjesec",
            MM: b.translate,
            y: "godinu",
            yy: b.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    64234: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("mi", {
          months:
            "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split(
              "_",
            ),
          monthsShort:
            "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
              "_",
            ),
          monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
          weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split(
            "_",
          ),
          weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
          weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm",
          },
          calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te hēkona ruarua",
            ss: "%d hēkona",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    17535: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("mk", {
          months:
            "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
              "_",
            ),
          monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split(
            "_",
          ),
          weekdays:
            "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
          weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
          weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[Денес во] LT",
            nextDay: "[Утре во] LT",
            nextWeek: "[Во] dddd [во] LT",
            lastDay: "[Вчера во] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[Изминатата] dddd [во] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[Изминатиот] dddd [во] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "за %s",
            past: "пред %s",
            s: "неколку секунди",
            ss: "%d секунди",
            m: "една минута",
            mm: "%d минути",
            h: "еден час",
            hh: "%d часа",
            d: "еден ден",
            dd: "%d дена",
            M: "еден месец",
            MM: "%d месеци",
            y: "една година",
            yy: "%d години",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function (M) {
            var b = M % 10,
              z = M % 100;
            return 0 === M
              ? M + "-ев"
              : 0 === z
              ? M + "-ен"
              : z > 10 && z < 20
              ? M + "-ти"
              : 1 === b
              ? M + "-ви"
              : 2 === b
              ? M + "-ри"
              : 7 === b || 8 === b
              ? M + "-ми"
              : M + "-ти";
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    43896: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ml", {
          months:
            "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
              "_",
            ),
          monthsShort:
            "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
              "_",
            ),
          weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
          weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
          longDateFormat: {
            LT: "A h:mm -നു",
            LTS: "A h:mm:ss -നു",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -നു",
            LLLL: "dddd, D MMMM YYYY, A h:mm -നു",
          },
          calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ഇന്നലെ] LT",
            lastWeek: "[കഴിഞ്ഞ] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s കഴിഞ്ഞ്",
            past: "%s മുൻപ്",
            s: "അൽപ നിമിഷങ്ങൾ",
            ss: "%d സെക്കൻഡ്",
            m: "ഒരു മിനിറ്റ്",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂർ",
            d: "ഒരു ദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസം",
            y: "ഒരു വർഷം",
            yy: "%d വർഷം",
          },
          meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              ("രാത്രി" === b && M >= 4) ||
              "ഉച്ച കഴിഞ്ഞ്" === b ||
              "വൈകുന്നേരം" === b
                ? M + 12
                : M
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "രാത്രി"
              : M < 12
              ? "രാവിലെ"
              : M < 17
              ? "ഉച്ച കഴിഞ്ഞ്"
              : M < 20
              ? "വൈകുന്നേരം"
              : "രാത്രി";
          },
        });
      })(z(36105));
    },
    63046: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z, p) {
          switch (z) {
            case "s":
              return b ? "хэдхэн секунд" : "хэдхэн секундын";
            case "ss":
              return M + (b ? " секунд" : " секундын");
            case "m":
            case "mm":
              return M + (b ? " минут" : " минутын");
            case "h":
            case "hh":
              return M + (b ? " цаг" : " цагийн");
            case "d":
            case "dd":
              return M + (b ? " өдөр" : " өдрийн");
            case "M":
            case "MM":
              return M + (b ? " сар" : " сарын");
            case "y":
            case "yy":
              return M + (b ? " жил" : " жилийн");
            default:
              return M;
          }
        }
        M.defineLocale("mn", {
          months:
            "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
              "_",
            ),
          monthsShort:
            "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
          weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
          weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY оны MMMMын D",
            LLL: "YYYY оны MMMMын D HH:mm",
            LLLL: "dddd, YYYY оны MMMMын D HH:mm",
          },
          meridiemParse: /ҮӨ|ҮХ/i,
          isPM: function (M) {
            return "ҮХ" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "ҮӨ" : "ҮХ";
          },
          calendar: {
            sameDay: "[Өнөөдөр] LT",
            nextDay: "[Маргааш] LT",
            nextWeek: "[Ирэх] dddd LT",
            lastDay: "[Өчигдөр] LT",
            lastWeek: "[Өнгөрсөн] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s дараа",
            past: "%s өмнө",
            s: b,
            ss: b,
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: b,
            dd: b,
            M: b,
            MM: b,
            y: b,
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
          ordinal: function (M, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return M + " өдөр";
              default:
                return M;
            }
          },
        });
      })(z(36105));
    },
    80927: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०",
          },
          z = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0",
          };
        function p(M, b, z, p) {
          var O = "";
          if (b)
            switch (z) {
              case "s":
                O = "काही सेकंद";
                break;
              case "ss":
                O = "%d सेकंद";
                break;
              case "m":
                O = "एक मिनिट";
                break;
              case "mm":
                O = "%d मिनिटे";
                break;
              case "h":
                O = "एक तास";
                break;
              case "hh":
                O = "%d तास";
                break;
              case "d":
                O = "एक दिवस";
                break;
              case "dd":
                O = "%d दिवस";
                break;
              case "M":
                O = "एक महिना";
                break;
              case "MM":
                O = "%d महिने";
                break;
              case "y":
                O = "एक वर्ष";
                break;
              case "yy":
                O = "%d वर्षे";
            }
          else
            switch (z) {
              case "s":
                O = "काही सेकंदां";
                break;
              case "ss":
                O = "%d सेकंदां";
                break;
              case "m":
                O = "एका मिनिटा";
                break;
              case "mm":
                O = "%d मिनिटां";
                break;
              case "h":
                O = "एका तासा";
                break;
              case "hh":
                O = "%d तासां";
                break;
              case "d":
                O = "एका दिवसा";
                break;
              case "dd":
                O = "%d दिवसां";
                break;
              case "M":
                O = "एका महिन्या";
                break;
              case "MM":
                O = "%d महिन्यां";
                break;
              case "y":
                O = "एका वर्षा";
                break;
              case "yy":
                O = "%d वर्षां";
            }
          return O.replace(/%d/i, M);
        }
        M.defineLocale("mr", {
          months:
            "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
              "_",
            ),
          monthsShort:
            "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm वाजता",
            LTS: "A h:mm:ss वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm वाजता",
            LLLL: "dddd, D MMMM YYYY, A h:mm वाजता",
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%sमध्ये",
            past: "%sपूर्वी",
            s: p,
            ss: p,
            m: p,
            mm: p,
            h: p,
            hh: p,
            d: p,
            dd: p,
            M: p,
            MM: p,
            y: p,
            yy: p,
          },
          preparse: function (M) {
            return M.replace(/[१२३४५६७८९०]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "पहाटे" === b || "सकाळी" === b
                ? M
                : "दुपारी" === b || "सायंकाळी" === b || "रात्री" === b
                ? M >= 12
                  ? M
                  : M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M >= 0 && M < 6
              ? "पहाटे"
              : M < 12
              ? "सकाळी"
              : M < 17
              ? "दुपारी"
              : M < 20
              ? "सायंकाळी"
              : "रात्री";
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    66332: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ms-my", {
          months:
            "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
            "_",
          ),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "pagi" === b
                ? M
                : "tengahari" === b
                ? M >= 11
                  ? M
                  : M + 12
                : "petang" === b || "malam" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 11
              ? "pagi"
              : M < 15
              ? "tengahari"
              : M < 19
              ? "petang"
              : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun",
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    37224: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ms", {
          months:
            "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
            "_",
          ),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "pagi" === b
                ? M
                : "tengahari" === b
                ? M >= 11
                  ? M
                  : M + 12
                : "petang" === b || "malam" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 11
              ? "pagi"
              : M < 15
              ? "tengahari"
              : M < 19
              ? "petang"
              : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun",
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    24866: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("mt", {
          months:
            "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split(
              "_",
            ),
          monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split(
            "_",
          ),
          weekdays:
            "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split(
              "_",
            ),
          weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
          weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Illum fil-]LT",
            nextDay: "[Għada fil-]LT",
            nextWeek: "dddd [fil-]LT",
            lastDay: "[Il-bieraħ fil-]LT",
            lastWeek: "dddd [li għadda] [fil-]LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "f’ %s",
            past: "%s ilu",
            s: "ftit sekondi",
            ss: "%d sekondi",
            m: "minuta",
            mm: "%d minuti",
            h: "siegħa",
            hh: "%d siegħat",
            d: "ġurnata",
            dd: "%d ġranet",
            M: "xahar",
            MM: "%d xhur",
            y: "sena",
            yy: "%d sni",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    24206: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "၁",
            2: "၂",
            3: "၃",
            4: "၄",
            5: "၅",
            6: "၆",
            7: "၇",
            8: "၈",
            9: "၉",
            0: "၀",
          },
          z = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0",
          };
        M.defineLocale("my", {
          months:
            "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
              "_",
            ),
          monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split(
            "_",
          ),
          weekdays:
            "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
          weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
          weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[ယနေ.] LT [မှာ]",
            nextDay: "[မနက်ဖြန်] LT [မှာ]",
            nextWeek: "dddd LT [မှာ]",
            lastDay: "[မနေ.က] LT [မှာ]",
            lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
            sameElse: "L",
          },
          relativeTime: {
            future: "လာမည့် %s မှာ",
            past: "လွန်ခဲ့သော %s က",
            s: "စက္ကန်.အနည်းငယ်",
            ss: "%d စက္ကန့်",
            m: "တစ်မိနစ်",
            mm: "%d မိနစ်",
            h: "တစ်နာရီ",
            hh: "%d နာရီ",
            d: "တစ်ရက်",
            dd: "%d ရက်",
            M: "တစ်လ",
            MM: "%d လ",
            y: "တစ်နှစ်",
            yy: "%d နှစ်",
          },
          preparse: function (M) {
            return M.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    66723: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("nb", {
          months:
            "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
            "_",
          ),
          weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            ss: "%d sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            w: "en uke",
            ww: "%d uker",
            M: "en måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    45097: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०",
          },
          z = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0",
          };
        M.defineLocale("ne", {
          months:
            "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
              "_",
            ),
          monthsShort:
            "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
          weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
          weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "Aको h:mm बजे",
            LTS: "Aको h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, Aको h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे",
          },
          preparse: function (M) {
            return M.replace(/[१२३४५६७८९०]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "राति" === b
                ? M < 4
                  ? M
                  : M + 12
                : "बिहान" === b
                ? M
                : "दिउँसो" === b
                ? M >= 10
                  ? M
                  : M + 12
                : "साँझ" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 3
              ? "राति"
              : M < 12
              ? "बिहान"
              : M < 16
              ? "दिउँसो"
              : M < 20
              ? "साँझ"
              : "राति";
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[भोलि] LT",
            nextWeek: "[आउँदो] dddd[,] LT",
            lastDay: "[हिजो] LT",
            lastWeek: "[गएको] dddd[,] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%sमा",
            past: "%s अगाडि",
            s: "केही क्षण",
            ss: "%d सेकेण्ड",
            m: "एक मिनेट",
            mm: "%d मिनेट",
            h: "एक घण्टा",
            hh: "%d घण्टा",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महिना",
            MM: "%d महिना",
            y: "एक बर्ष",
            yy: "%d बर्ष",
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    1355: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
              "_",
            ),
          z = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          p = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
          ],
          O =
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        M.defineLocale("nl-be", {
          months:
            "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
              "_",
            ),
          monthsShort: function (M, p) {
            return M ? (/-MMM-/.test(p) ? z[M.month()] : b[M.month()]) : b;
          },
          monthsRegex: O,
          monthsShortRegex: O,
          monthsStrictRegex:
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex:
            /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: p,
          longMonthsParse: p,
          shortMonthsParse: p,
          weekdays:
            "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
              "_",
            ),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (M) {
            return M + (1 === M || 8 === M || M >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    37529: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
              "_",
            ),
          z = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          p = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
          ],
          O =
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        M.defineLocale("nl", {
          months:
            "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
              "_",
            ),
          monthsShort: function (M, p) {
            return M ? (/-MMM-/.test(p) ? z[M.month()] : b[M.month()]) : b;
          },
          monthsRegex: O,
          monthsShortRegex: O,
          monthsStrictRegex:
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex:
            /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: p,
          longMonthsParse: p,
          shortMonthsParse: p,
          weekdays:
            "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
              "_",
            ),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            w: "één week",
            ww: "%d weken",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (M) {
            return M + (1 === M || 8 === M || M >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    30296: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("nn", {
          months:
            "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split(
            "_",
          ),
          weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
          weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I går klokka] LT",
            lastWeek: "[Føregåande] dddd [klokka] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            ss: "%d sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            w: "ei veke",
            ww: "%d veker",
            M: "ein månad",
            MM: "%d månader",
            y: "eit år",
            yy: "%d år",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    4802: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("oc-lnc", {
          months: {
            standalone:
              "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split(
                "_",
              ),
            format:
              "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split(
                "_",
              ),
            isFormat: /D[oD]?(\s)+MMMM/,
          },
          monthsShort:
            "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split(
              "_",
            ),
          weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
          weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
            llll: "ddd D MMM YYYY, H:mm",
          },
          calendar: {
            sameDay: "[uèi a] LT",
            nextDay: "[deman a] LT",
            nextWeek: "dddd [a] LT",
            lastDay: "[ièr a] LT",
            lastWeek: "dddd [passat a] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "d'aquí %s",
            past: "fa %s",
            s: "unas segondas",
            ss: "%d segondas",
            m: "una minuta",
            mm: "%d minutas",
            h: "una ora",
            hh: "%d oras",
            d: "un jorn",
            dd: "%d jorns",
            M: "un mes",
            MM: "%d meses",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function (M, b) {
            var z =
              1 === M
                ? "r"
                : 2 === M
                ? "n"
                : 3 === M
                ? "r"
                : 4 === M
                ? "t"
                : "è";
            return ("w" !== b && "W" !== b) || (z = "a"), M + z;
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    77057: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "੧",
            2: "੨",
            3: "੩",
            4: "੪",
            5: "੫",
            6: "੬",
            7: "੭",
            8: "੮",
            9: "੯",
            0: "੦",
          },
          z = {
            "੧": "1",
            "੨": "2",
            "੩": "3",
            "੪": "4",
            "੫": "5",
            "੬": "6",
            "੭": "7",
            "੮": "8",
            "੯": "9",
            "੦": "0",
          };
        M.defineLocale("pa-in", {
          months:
            "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
              "_",
            ),
          monthsShort:
            "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
              "_",
            ),
          weekdays:
            "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
          weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
          weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
          longDateFormat: {
            LT: "A h:mm ਵਜੇ",
            LTS: "A h:mm:ss ਵਜੇ",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
            LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ",
          },
          calendar: {
            sameDay: "[ਅਜ] LT",
            nextDay: "[ਕਲ] LT",
            nextWeek: "[ਅਗਲਾ] dddd, LT",
            lastDay: "[ਕਲ] LT",
            lastWeek: "[ਪਿਛਲੇ] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ਵਿੱਚ",
            past: "%s ਪਿਛਲੇ",
            s: "ਕੁਝ ਸਕਿੰਟ",
            ss: "%d ਸਕਿੰਟ",
            m: "ਇਕ ਮਿੰਟ",
            mm: "%d ਮਿੰਟ",
            h: "ਇੱਕ ਘੰਟਾ",
            hh: "%d ਘੰਟੇ",
            d: "ਇੱਕ ਦਿਨ",
            dd: "%d ਦਿਨ",
            M: "ਇੱਕ ਮਹੀਨਾ",
            MM: "%d ਮਹੀਨੇ",
            y: "ਇੱਕ ਸਾਲ",
            yy: "%d ਸਾਲ",
          },
          preparse: function (M) {
            return M.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "ਰਾਤ" === b
                ? M < 4
                  ? M
                  : M + 12
                : "ਸਵੇਰ" === b
                ? M
                : "ਦੁਪਹਿਰ" === b
                ? M >= 10
                  ? M
                  : M + 12
                : "ਸ਼ਾਮ" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "ਰਾਤ"
              : M < 10
              ? "ਸਵੇਰ"
              : M < 17
              ? "ਦੁਪਹਿਰ"
              : M < 20
              ? "ਸ਼ਾਮ"
              : "ਰਾਤ";
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    69850: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
              "_",
            ),
          z =
            "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
              "_",
            ),
          p = [
            /^sty/i,
            /^lut/i,
            /^mar/i,
            /^kwi/i,
            /^maj/i,
            /^cze/i,
            /^lip/i,
            /^sie/i,
            /^wrz/i,
            /^paź/i,
            /^lis/i,
            /^gru/i,
          ];
        function O(M) {
          return M % 10 < 5 && M % 10 > 1 && ~~(M / 10) % 10 != 1;
        }
        function o(M, b, z) {
          var p = M + " ";
          switch (z) {
            case "ss":
              return p + (O(M) ? "sekundy" : "sekund");
            case "m":
              return b ? "minuta" : "minutę";
            case "mm":
              return p + (O(M) ? "minuty" : "minut");
            case "h":
              return b ? "godzina" : "godzinę";
            case "hh":
              return p + (O(M) ? "godziny" : "godzin");
            case "ww":
              return p + (O(M) ? "tygodnie" : "tygodni");
            case "MM":
              return p + (O(M) ? "miesiące" : "miesięcy");
            case "yy":
              return p + (O(M) ? "lata" : "lat");
          }
        }
        M.defineLocale("pl", {
          months: function (M, p) {
            return M ? (/D MMMM/.test(p) ? z[M.month()] : b[M.month()]) : b;
          },
          monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split(
            "_",
          ),
          monthsParse: p,
          longMonthsParse: p,
          shortMonthsParse: p,
          weekdays:
            "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
              "_",
            ),
          weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
          weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[W niedzielę o] LT";
                case 2:
                  return "[We wtorek o] LT";
                case 3:
                  return "[W środę o] LT";
                case 6:
                  return "[W sobotę o] LT";
                default:
                  return "[W] dddd [o] LT";
              }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[W zeszłą niedzielę o] LT";
                case 3:
                  return "[W zeszłą środę o] LT";
                case 6:
                  return "[W zeszłą sobotę o] LT";
                default:
                  return "[W zeszły] dddd [o] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            ss: o,
            m: o,
            mm: o,
            h: o,
            hh: o,
            d: "1 dzień",
            dd: "%d dni",
            w: "tydzień",
            ww: o,
            M: "miesiąc",
            MM: o,
            y: "rok",
            yy: o,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    83726: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("pt-br", {
          months:
            "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
              "_",
            ),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
            "_",
          ),
          weekdays:
            "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
              "_",
            ),
          weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
          weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
          },
          calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function () {
              return 0 === this.day() || 6 === this.day()
                ? "[Último] dddd [às] LT"
                : "[Última] dddd [às] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "poucos segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          invalidDate: "Data inválida",
        });
      })(z(36105));
    },
    15552: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("pt", {
          months:
            "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
              "_",
            ),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
            "_",
          ),
          weekdays:
            "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
              "_",
            ),
          weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
          weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function () {
              return 0 === this.day() || 6 === this.day()
                ? "[Último] dddd [às] LT"
                : "[Última] dddd [às] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            w: "uma semana",
            ww: "%d semanas",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    1717: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z) {
          var p = " ";
          return (
            (M % 100 >= 20 || (M >= 100 && M % 100 == 0)) && (p = " de "),
            M +
              p +
              {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                ww: "săptămâni",
                MM: "luni",
                yy: "ani",
              }[z]
          );
        }
        M.defineLocale("ro", {
          months:
            "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
              "_",
            ),
          monthsShort:
            "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split(
            "_",
          ),
          weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
          weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            ss: b,
            m: "un minut",
            mm: b,
            h: "o oră",
            hh: b,
            d: "o zi",
            dd: b,
            w: "o săptămână",
            ww: b,
            M: "o lună",
            MM: b,
            y: "un an",
            yy: b,
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    79117: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b) {
          var z = M.split("_");
          return b % 10 == 1 && b % 100 != 11
            ? z[0]
            : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20)
            ? z[1]
            : z[2];
        }
        function z(M, z, p) {
          return "m" === p
            ? z
              ? "минута"
              : "минуту"
            : M +
                " " +
                b(
                  {
                    ss: z ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: z ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    ww: "неделя_недели_недель",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет",
                  }[p],
                  +M,
                );
        }
        var p = [
          /^янв/i,
          /^фев/i,
          /^мар/i,
          /^апр/i,
          /^ма[йя]/i,
          /^июн/i,
          /^июл/i,
          /^авг/i,
          /^сен/i,
          /^окт/i,
          /^ноя/i,
          /^дек/i,
        ];
        M.defineLocale("ru", {
          months: {
            format:
              "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
                "_",
              ),
            standalone:
              "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
                "_",
              ),
          },
          monthsShort: {
            format:
              "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
                "_",
              ),
            standalone:
              "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
                "_",
              ),
          },
          weekdays: {
            standalone:
              "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
                "_",
              ),
            format:
              "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
                "_",
              ),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
          },
          weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          monthsParse: p,
          longMonthsParse: p,
          shortMonthsParse: p,
          monthsRegex:
            /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsShortRegex:
            /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsStrictRegex:
            /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
          monthsShortStrictRegex:
            /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., H:mm",
            LLLL: "dddd, D MMMM YYYY г., H:mm",
          },
          calendar: {
            sameDay: "[Сегодня, в] LT",
            nextDay: "[Завтра, в] LT",
            lastDay: "[Вчера, в] LT",
            nextWeek: function (M) {
              if (M.week() === this.week())
                return 2 === this.day()
                  ? "[Во] dddd, [в] LT"
                  : "[В] dddd, [в] LT";
              switch (this.day()) {
                case 0:
                  return "[В следующее] dddd, [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В следующий] dddd, [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В следующую] dddd, [в] LT";
              }
            },
            lastWeek: function (M) {
              if (M.week() === this.week())
                return 2 === this.day()
                  ? "[Во] dddd, [в] LT"
                  : "[В] dddd, [в] LT";
              switch (this.day()) {
                case 0:
                  return "[В прошлое] dddd, [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В прошлый] dddd, [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В прошлую] dddd, [в] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            ss: z,
            m: z,
            mm: z,
            h: "час",
            hh: z,
            d: "день",
            dd: z,
            w: "неделя",
            ww: z,
            M: "месяц",
            MM: z,
            y: "год",
            yy: z,
          },
          meridiemParse: /ночи|утра|дня|вечера/i,
          isPM: function (M) {
            return /^(дня|вечера)$/.test(M);
          },
          meridiem: function (M, b, z) {
            return M < 4 ? "ночи" : M < 12 ? "утра" : M < 17 ? "дня" : "вечера";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
          ordinal: function (M, b) {
            switch (b) {
              case "M":
              case "d":
              case "DDD":
                return M + "-й";
              case "D":
                return M + "-го";
              case "w":
              case "W":
                return M + "-я";
              default:
                return M;
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    61742: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = [
            "جنوري",
            "فيبروري",
            "مارچ",
            "اپريل",
            "مئي",
            "جون",
            "جولاءِ",
            "آگسٽ",
            "سيپٽمبر",
            "آڪٽوبر",
            "نومبر",
            "ڊسمبر",
          ],
          z = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        M.defineLocale("sd", {
          months: b,
          monthsShort: b,
          weekdays: z,
          weekdaysShort: z,
          weekdaysMin: z,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd، D MMMM YYYY HH:mm",
          },
          meridiemParse: /صبح|شام/,
          isPM: function (M) {
            return "شام" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "صبح" : "شام";
          },
          calendar: {
            sameDay: "[اڄ] LT",
            nextDay: "[سڀاڻي] LT",
            nextWeek: "dddd [اڳين هفتي تي] LT",
            lastDay: "[ڪالهه] LT",
            lastWeek: "[گزريل هفتي] dddd [تي] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s پوء",
            past: "%s اڳ",
            s: "چند سيڪنڊ",
            ss: "%d سيڪنڊ",
            m: "هڪ منٽ",
            mm: "%d منٽ",
            h: "هڪ ڪلاڪ",
            hh: "%d ڪلاڪ",
            d: "هڪ ڏينهن",
            dd: "%d ڏينهن",
            M: "هڪ مهينو",
            MM: "%d مهينا",
            y: "هڪ سال",
            yy: "%d سال",
          },
          preparse: function (M) {
            return M.replace(/،/g, ",");
          },
          postformat: function (M) {
            return M.replace(/,/g, "،");
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    92049: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("se", {
          months:
            "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
              "_",
            ),
          monthsShort:
            "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
              "_",
            ),
          weekdays:
            "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
              "_",
            ),
          weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
          weekdaysMin: "s_v_m_g_d_b_L".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
          },
          calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s geažes",
            past: "maŋit %s",
            s: "moadde sekunddat",
            ss: "%d sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta mánnu",
            MM: "%d mánut",
            y: "okta jahki",
            yy: "%d jagit",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    83329: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("si", {
          months:
            "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
              "_",
            ),
          monthsShort:
            "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
          weekdays:
            "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
              "_",
            ),
          weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
          weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss",
          },
          calendar: {
            sameDay: "[අද] LT[ට]",
            nextDay: "[හෙට] LT[ට]",
            nextWeek: "dddd LT[ට]",
            lastDay: "[ඊයේ] LT[ට]",
            lastWeek: "[පසුගිය] dddd LT[ට]",
            sameElse: "L",
          },
          relativeTime: {
            future: "%sකින්",
            past: "%sකට පෙර",
            s: "තත්පර කිහිපය",
            ss: "තත්පර %d",
            m: "මිනිත්තුව",
            mm: "මිනිත්තු %d",
            h: "පැය",
            hh: "පැය %d",
            d: "දිනය",
            dd: "දින %d",
            M: "මාසය",
            MM: "මාස %d",
            y: "වසර",
            yy: "වසර %d",
          },
          dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
          ordinal: function (M) {
            return M + " වැනි";
          },
          meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
          isPM: function (M) {
            return "ප.ව." === M || "පස් වරු" === M;
          },
          meridiem: function (M, b, z) {
            return M > 11 ? (z ? "ප.ව." : "පස් වරු") : z ? "පෙ.ව." : "පෙර වරු";
          },
        });
      })(z(36105));
    },
    27619: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b =
            "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
              "_",
            ),
          z = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        function p(M) {
          return M > 1 && M < 5;
        }
        function O(M, b, z, O) {
          var o = M + " ";
          switch (z) {
            case "s":
              return b || O ? "pár sekúnd" : "pár sekundami";
            case "ss":
              return b || O
                ? o + (p(M) ? "sekundy" : "sekúnd")
                : o + "sekundami";
            case "m":
              return b ? "minúta" : O ? "minútu" : "minútou";
            case "mm":
              return b || O ? o + (p(M) ? "minúty" : "minút") : o + "minútami";
            case "h":
              return b ? "hodina" : O ? "hodinu" : "hodinou";
            case "hh":
              return b || O ? o + (p(M) ? "hodiny" : "hodín") : o + "hodinami";
            case "d":
              return b || O ? "deň" : "dňom";
            case "dd":
              return b || O ? o + (p(M) ? "dni" : "dní") : o + "dňami";
            case "M":
              return b || O ? "mesiac" : "mesiacom";
            case "MM":
              return b || O
                ? o + (p(M) ? "mesiace" : "mesiacov")
                : o + "mesiacmi";
            case "y":
              return b || O ? "rok" : "rokom";
            case "yy":
              return b || O ? o + (p(M) ? "roky" : "rokov") : o + "rokmi";
          }
        }
        M.defineLocale("sk", {
          months: b,
          monthsShort: z,
          weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split(
            "_",
          ),
          weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
          weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v nedeľu o] LT";
                case 1:
                case 2:
                  return "[v] dddd [o] LT";
                case 3:
                  return "[v stredu o] LT";
                case 4:
                  return "[vo štvrtok o] LT";
                case 5:
                  return "[v piatok o] LT";
                case 6:
                  return "[v sobotu o] LT";
              }
            },
            lastDay: "[včera o] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[minulú nedeľu o] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[minulý] dddd [o] LT";
                case 3:
                  return "[minulú stredu o] LT";
                case 6:
                  return "[minulú sobotu o] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: O,
            ss: O,
            m: O,
            mm: O,
            h: O,
            hh: O,
            d: O,
            dd: O,
            M: O,
            MM: O,
            y: O,
            yy: O,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    76707: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z, p) {
          var O = M + " ";
          switch (z) {
            case "s":
              return b || p ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
              return (O +=
                1 === M
                  ? b
                    ? "sekundo"
                    : "sekundi"
                  : 2 === M
                  ? b || p
                    ? "sekundi"
                    : "sekundah"
                  : M < 5
                  ? b || p
                    ? "sekunde"
                    : "sekundah"
                  : "sekund");
            case "m":
              return b ? "ena minuta" : "eno minuto";
            case "mm":
              return (O +=
                1 === M
                  ? b
                    ? "minuta"
                    : "minuto"
                  : 2 === M
                  ? b || p
                    ? "minuti"
                    : "minutama"
                  : M < 5
                  ? b || p
                    ? "minute"
                    : "minutami"
                  : b || p
                  ? "minut"
                  : "minutami");
            case "h":
              return b ? "ena ura" : "eno uro";
            case "hh":
              return (O +=
                1 === M
                  ? b
                    ? "ura"
                    : "uro"
                  : 2 === M
                  ? b || p
                    ? "uri"
                    : "urama"
                  : M < 5
                  ? b || p
                    ? "ure"
                    : "urami"
                  : b || p
                  ? "ur"
                  : "urami");
            case "d":
              return b || p ? "en dan" : "enim dnem";
            case "dd":
              return (O +=
                1 === M
                  ? b || p
                    ? "dan"
                    : "dnem"
                  : 2 === M
                  ? b || p
                    ? "dni"
                    : "dnevoma"
                  : b || p
                  ? "dni"
                  : "dnevi");
            case "M":
              return b || p ? "en mesec" : "enim mesecem";
            case "MM":
              return (O +=
                1 === M
                  ? b || p
                    ? "mesec"
                    : "mesecem"
                  : 2 === M
                  ? b || p
                    ? "meseca"
                    : "mesecema"
                  : M < 5
                  ? b || p
                    ? "mesece"
                    : "meseci"
                  : b || p
                  ? "mesecev"
                  : "meseci");
            case "y":
              return b || p ? "eno leto" : "enim letom";
            case "yy":
              return (O +=
                1 === M
                  ? b || p
                    ? "leto"
                    : "letom"
                  : 2 === M
                  ? b || p
                    ? "leti"
                    : "letoma"
                  : M < 5
                  ? b || p
                    ? "leta"
                    : "leti"
                  : b || p
                  ? "let"
                  : "leti");
          }
        }
        M.defineLocale("sl", {
          months:
            "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split(
            "_",
          ),
          weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
          weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v] [nedeljo] [ob] LT";
                case 3:
                  return "[v] [sredo] [ob] LT";
                case 6:
                  return "[v] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[v] dddd [ob] LT";
              }
            },
            lastDay: "[včeraj ob] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[prejšnjo] [nedeljo] [ob] LT";
                case 3:
                  return "[prejšnjo] [sredo] [ob] LT";
                case 6:
                  return "[prejšnjo] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prejšnji] dddd [ob] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "čez %s",
            past: "pred %s",
            s: b,
            ss: b,
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: b,
            dd: b,
            M: b,
            MM: b,
            y: b,
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    84281: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("sq", {
          months:
            "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
              "_",
            ),
          monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split(
            "_",
          ),
          weekdays:
            "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
              "_",
            ),
          weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
          weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
          weekdaysParseExact: !0,
          meridiemParse: /PD|MD/,
          isPM: function (M) {
            return "M" === M.charAt(0);
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "PD" : "MD";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Sot në] LT",
            nextDay: "[Nesër në] LT",
            nextWeek: "dddd [në] LT",
            lastDay: "[Dje në] LT",
            lastWeek: "dddd [e kaluar në] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "në %s",
            past: "%s më parë",
            s: "disa sekonda",
            ss: "%d sekonda",
            m: "një minutë",
            mm: "%d minuta",
            h: "një orë",
            hh: "%d orë",
            d: "një ditë",
            dd: "%d ditë",
            M: "një muaj",
            MM: "%d muaj",
            y: "një vit",
            yy: "%d vite",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    13408: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          words: {
            ss: ["секунда", "секунде", "секунди"],
            m: ["један минут", "једног минута"],
            mm: ["минут", "минута", "минута"],
            h: ["један сат", "једног сата"],
            hh: ["сат", "сата", "сати"],
            d: ["један дан", "једног дана"],
            dd: ["дан", "дана", "дана"],
            M: ["један месец", "једног месеца"],
            MM: ["месец", "месеца", "месеци"],
            y: ["једну годину", "једне године"],
            yy: ["годину", "године", "година"],
          },
          correctGrammaticalCase: function (M, b) {
            return M % 10 >= 1 && M % 10 <= 4 && (M % 100 < 10 || M % 100 >= 20)
              ? M % 10 == 1
                ? b[0]
                : b[1]
              : b[2];
          },
          translate: function (M, z, p, O) {
            var o,
              c = b.words[p];
            return 1 === p.length
              ? "y" === p && z
                ? "једна година"
                : O || z
                ? c[0]
                : c[1]
              : ((o = b.correctGrammaticalCase(M, c)),
                "yy" === p && z && "годину" === o
                  ? M + " година"
                  : M + " " + o);
          },
        };
        M.defineLocale("sr-cyrl", {
          months:
            "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split(
              "_",
            ),
          monthsShort:
            "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split(
            "_",
          ),
          weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
          weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D. M. YYYY.",
            LL: "D. MMMM YYYY.",
            LLL: "D. MMMM YYYY. H:mm",
            LLLL: "dddd, D. MMMM YYYY. H:mm",
          },
          calendar: {
            sameDay: "[данас у] LT",
            nextDay: "[сутра у] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[у] [недељу] [у] LT";
                case 3:
                  return "[у] [среду] [у] LT";
                case 6:
                  return "[у] [суботу] [у] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[у] dddd [у] LT";
              }
            },
            lastDay: "[јуче у] LT",
            lastWeek: function () {
              return [
                "[прошле] [недеље] [у] LT",
                "[прошлог] [понедељка] [у] LT",
                "[прошлог] [уторка] [у] LT",
                "[прошле] [среде] [у] LT",
                "[прошлог] [четвртка] [у] LT",
                "[прошлог] [петка] [у] LT",
                "[прошле] [суботе] [у] LT",
              ][this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "за %s",
            past: "пре %s",
            s: "неколико секунди",
            ss: b.translate,
            m: b.translate,
            mm: b.translate,
            h: b.translate,
            hh: b.translate,
            d: b.translate,
            dd: b.translate,
            M: b.translate,
            MM: b.translate,
            y: b.translate,
            yy: b.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    60436: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          words: {
            ss: ["sekunda", "sekunde", "sekundi"],
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            d: ["jedan dan", "jednog dana"],
            dd: ["dan", "dana", "dana"],
            M: ["jedan mesec", "jednog meseca"],
            MM: ["mesec", "meseca", "meseci"],
            y: ["jednu godinu", "jedne godine"],
            yy: ["godinu", "godine", "godina"],
          },
          correctGrammaticalCase: function (M, b) {
            return M % 10 >= 1 && M % 10 <= 4 && (M % 100 < 10 || M % 100 >= 20)
              ? M % 10 == 1
                ? b[0]
                : b[1]
              : b[2];
          },
          translate: function (M, z, p, O) {
            var o,
              c = b.words[p];
            return 1 === p.length
              ? "y" === p && z
                ? "jedna godina"
                : O || z
                ? c[0]
                : c[1]
              : ((o = b.correctGrammaticalCase(M, c)),
                "yy" === p && z && "godinu" === o
                  ? M + " godina"
                  : M + " " + o);
          },
        };
        M.defineLocale("sr", {
          months:
            "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
          weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D. M. YYYY.",
            LL: "D. MMMM YYYY.",
            LLL: "D. MMMM YYYY. H:mm",
            LLLL: "dddd, D. MMMM YYYY. H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedelju] [u] LT";
                case 3:
                  return "[u] [sredu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[juče u] LT",
            lastWeek: function () {
              return [
                "[prošle] [nedelje] [u] LT",
                "[prošlog] [ponedeljka] [u] LT",
                "[prošlog] [utorka] [u] LT",
                "[prošle] [srede] [u] LT",
                "[prošlog] [četvrtka] [u] LT",
                "[prošlog] [petka] [u] LT",
                "[prošle] [subote] [u] LT",
              ][this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            ss: b.translate,
            m: b.translate,
            mm: b.translate,
            h: b.translate,
            hh: b.translate,
            d: b.translate,
            dd: b.translate,
            M: b.translate,
            MM: b.translate,
            y: b.translate,
            yy: b.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    27500: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ss", {
          months:
            "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
              "_",
            ),
          monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split(
            "_",
          ),
          weekdays:
            "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
              "_",
            ),
          weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
          weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            ss: "%d mzuzwana",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka",
          },
          meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
          meridiem: function (M, b, z) {
            return M < 11
              ? "ekuseni"
              : M < 15
              ? "emini"
              : M < 19
              ? "entsambama"
              : "ebusuku";
          },
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "ekuseni" === b
                ? M
                : "emini" === b
                ? M >= 11
                  ? M
                  : M + 12
                : "entsambama" === b || "ebusuku" === b
                ? 0 === M
                  ? 0
                  : M + 12
                : void 0
            );
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: "%d",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    6950: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("sv", {
          months:
            "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
              "_",
            ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
            "_",
          ),
          weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
            "_",
          ),
          weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
          weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "[På] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            ss: "%d sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? ":e"
                : 1 === b || 2 === b
                ? ":a"
                : ":e")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    54222: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("sw", {
          months:
            "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split(
            "_",
          ),
          weekdays:
            "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
              "_",
            ),
          weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
          weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "hh:mm A",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            ss: "sekunde %d",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "siku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d",
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    73746: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
            1: "௧",
            2: "௨",
            3: "௩",
            4: "௪",
            5: "௫",
            6: "௬",
            7: "௭",
            8: "௮",
            9: "௯",
            0: "௦",
          },
          z = {
            "௧": "1",
            "௨": "2",
            "௩": "3",
            "௪": "4",
            "௫": "5",
            "௬": "6",
            "௭": "7",
            "௮": "8",
            "௯": "9",
            "௦": "0",
          };
        M.defineLocale("ta", {
          months:
            "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
              "_",
            ),
          monthsShort:
            "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
              "_",
            ),
          weekdays:
            "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
              "_",
            ),
          weekdaysShort:
            "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
          weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm",
          },
          calendar: {
            sameDay: "[இன்று] LT",
            nextDay: "[நாளை] LT",
            nextWeek: "dddd, LT",
            lastDay: "[நேற்று] LT",
            lastWeek: "[கடந்த வாரம்] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s இல்",
            past: "%s முன்",
            s: "ஒரு சில விநாடிகள்",
            ss: "%d விநாடிகள்",
            m: "ஒரு நிமிடம்",
            mm: "%d நிமிடங்கள்",
            h: "ஒரு மணி நேரம்",
            hh: "%d மணி நேரம்",
            d: "ஒரு நாள்",
            dd: "%d நாட்கள்",
            M: "ஒரு மாதம்",
            MM: "%d மாதங்கள்",
            y: "ஒரு வருடம்",
            yy: "%d ஆண்டுகள்",
          },
          dayOfMonthOrdinalParse: /\d{1,2}வது/,
          ordinal: function (M) {
            return M + "வது";
          },
          preparse: function (M) {
            return M.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (M) {
              return z[M];
            });
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (M) {
              return b[M];
            });
          },
          meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
          meridiem: function (M, b, z) {
            return M < 2
              ? " யாமம்"
              : M < 6
              ? " வைகறை"
              : M < 10
              ? " காலை"
              : M < 14
              ? " நண்பகல்"
              : M < 18
              ? " எற்பாடு"
              : M < 22
              ? " மாலை"
              : " யாமம்";
          },
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "யாமம்" === b
                ? M < 2
                  ? M
                  : M + 12
                : "வைகறை" === b || "காலை" === b || ("நண்பகல்" === b && M >= 10)
                ? M
                : M + 12
            );
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    1130: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("te", {
          months:
            "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
              "_",
            ),
          monthsShort:
            "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
              "_",
            ),
          weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
          weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
          },
          calendar: {
            sameDay: "[నేడు] LT",
            nextDay: "[రేపు] LT",
            nextWeek: "dddd, LT",
            lastDay: "[నిన్న] LT",
            lastWeek: "[గత] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s లో",
            past: "%s క్రితం",
            s: "కొన్ని క్షణాలు",
            ss: "%d సెకన్లు",
            m: "ఒక నిమిషం",
            mm: "%d నిమిషాలు",
            h: "ఒక గంట",
            hh: "%d గంటలు",
            d: "ఒక రోజు",
            dd: "%d రోజులు",
            M: "ఒక నెల",
            MM: "%d నెలలు",
            y: "ఒక సంవత్సరం",
            yy: "%d సంవత్సరాలు",
          },
          dayOfMonthOrdinalParse: /\d{1,2}వ/,
          ordinal: "%dవ",
          meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "రాత్రి" === b
                ? M < 4
                  ? M
                  : M + 12
                : "ఉదయం" === b
                ? M
                : "మధ్యాహ్నం" === b
                ? M >= 10
                  ? M
                  : M + 12
                : "సాయంత్రం" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "రాత్రి"
              : M < 10
              ? "ఉదయం"
              : M < 17
              ? "మధ్యాహ్నం"
              : M < 20
              ? "సాయంత్రం"
              : "రాత్రి";
          },
          week: { dow: 0, doy: 6 },
        });
      })(z(36105));
    },
    34740: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("tet", {
          months:
            "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
              "_",
            ),
          monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
            "_",
          ),
          weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split(
            "_",
          ),
          weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
          weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Ohin iha] LT",
            nextDay: "[Aban iha] LT",
            nextWeek: "dddd [iha] LT",
            lastDay: "[Horiseik iha] LT",
            lastWeek: "dddd [semana kotuk] [iha] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "iha %s",
            past: "%s liuba",
            s: "segundu balun",
            ss: "segundu %d",
            m: "minutu ida",
            mm: "minutu %d",
            h: "oras ida",
            hh: "oras %d",
            d: "loron ida",
            dd: "loron %d",
            M: "fulan ida",
            MM: "fulan %d",
            y: "tinan ida",
            yy: "tinan %d",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    13378: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          0: "-ум",
          1: "-ум",
          2: "-юм",
          3: "-юм",
          4: "-ум",
          5: "-ум",
          6: "-ум",
          7: "-ум",
          8: "-ум",
          9: "-ум",
          10: "-ум",
          12: "-ум",
          13: "-ум",
          20: "-ум",
          30: "-юм",
          40: "-ум",
          50: "-ум",
          60: "-ум",
          70: "-ум",
          80: "-ум",
          90: "-ум",
          100: "-ум",
        };
        M.defineLocale("tg", {
          months: {
            format:
              "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split(
                "_",
              ),
            standalone:
              "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
                "_",
              ),
          },
          monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
            "_",
          ),
          weekdays:
            "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
          weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
          weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Имрӯз соати] LT",
            nextDay: "[Фардо соати] LT",
            lastDay: "[Дирӯз соати] LT",
            nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
            lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "баъди %s",
            past: "%s пеш",
            s: "якчанд сония",
            m: "як дақиқа",
            mm: "%d дақиқа",
            h: "як соат",
            hh: "%d соат",
            d: "як рӯз",
            dd: "%d рӯз",
            M: "як моҳ",
            MM: "%d моҳ",
            y: "як сол",
            yy: "%d сол",
          },
          meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "шаб" === b
                ? M < 4
                  ? M
                  : M + 12
                : "субҳ" === b
                ? M
                : "рӯз" === b
                ? M >= 11
                  ? M
                  : M + 12
                : "бегоҳ" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "шаб"
              : M < 11
              ? "субҳ"
              : M < 16
              ? "рӯз"
              : M < 19
              ? "бегоҳ"
              : "шаб";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
          ordinal: function (M) {
            var z = M % 10,
              p = M >= 100 ? 100 : null;
            return M + (b[M] || b[z] || b[p]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    20628: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("th", {
          months:
            "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
              "_",
            ),
          monthsShort:
            "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
          weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split(
            "_",
          ),
          weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY เวลา H:mm",
            LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm",
          },
          meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
          isPM: function (M) {
            return "หลังเที่ยง" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
          },
          calendar: {
            sameDay: "[วันนี้ เวลา] LT",
            nextDay: "[พรุ่งนี้ เวลา] LT",
            nextWeek: "dddd[หน้า เวลา] LT",
            lastDay: "[เมื่อวานนี้ เวลา] LT",
            lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "อีก %s",
            past: "%sที่แล้ว",
            s: "ไม่กี่วินาที",
            ss: "%d วินาที",
            m: "1 นาที",
            mm: "%d นาที",
            h: "1 ชั่วโมง",
            hh: "%d ชั่วโมง",
            d: "1 วัน",
            dd: "%d วัน",
            w: "1 สัปดาห์",
            ww: "%d สัปดาห์",
            M: "1 เดือน",
            MM: "%d เดือน",
            y: "1 ปี",
            yy: "%d ปี",
          },
        });
      })(z(36105));
    },
    92622: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          1: "'inji",
          5: "'inji",
          8: "'inji",
          70: "'inji",
          80: "'inji",
          2: "'nji",
          7: "'nji",
          20: "'nji",
          50: "'nji",
          3: "'ünji",
          4: "'ünji",
          100: "'ünji",
          6: "'njy",
          9: "'unjy",
          10: "'unjy",
          30: "'unjy",
          60: "'ynjy",
          90: "'ynjy",
        };
        M.defineLocale("tk", {
          months:
            "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split(
              "_",
            ),
          monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split(
            "_",
          ),
          weekdays:
            "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
          weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
          weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bugün sagat] LT",
            nextDay: "[ertir sagat] LT",
            nextWeek: "[indiki] dddd [sagat] LT",
            lastDay: "[düýn] LT",
            lastWeek: "[geçen] dddd [sagat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s soň",
            past: "%s öň",
            s: "birnäçe sekunt",
            m: "bir minut",
            mm: "%d minut",
            h: "bir sagat",
            hh: "%d sagat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir aý",
            MM: "%d aý",
            y: "bir ýyl",
            yy: "%d ýyl",
          },
          ordinal: function (M, z) {
            switch (z) {
              case "d":
              case "D":
              case "Do":
              case "DD":
                return M;
              default:
                if (0 === M) return M + "'unjy";
                var p = M % 10,
                  O = (M % 100) - p,
                  o = M >= 100 ? 100 : null;
                return M + (b[p] || b[O] || b[o]);
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    30100: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("tl-ph", {
          months:
            "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
              "_",
            ),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
            "_",
          ),
          weekdays:
            "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm",
          },
          calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L",
          },
          relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon",
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (M) {
            return M;
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    22871: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        function z(M) {
          var b = M;
          return (b =
            -1 !== M.indexOf("jaj")
              ? b.slice(0, -3) + "leS"
              : -1 !== M.indexOf("jar")
              ? b.slice(0, -3) + "waQ"
              : -1 !== M.indexOf("DIS")
              ? b.slice(0, -3) + "nem"
              : b + " pIq");
        }
        function p(M) {
          var b = M;
          return (b =
            -1 !== M.indexOf("jaj")
              ? b.slice(0, -3) + "Hu’"
              : -1 !== M.indexOf("jar")
              ? b.slice(0, -3) + "wen"
              : -1 !== M.indexOf("DIS")
              ? b.slice(0, -3) + "ben"
              : b + " ret");
        }
        function O(M, b, z, p) {
          var O = o(M);
          switch (z) {
            case "ss":
              return O + " lup";
            case "mm":
              return O + " tup";
            case "hh":
              return O + " rep";
            case "dd":
              return O + " jaj";
            case "MM":
              return O + " jar";
            case "yy":
              return O + " DIS";
          }
        }
        function o(M) {
          var z = Math.floor((M % 1e3) / 100),
            p = Math.floor((M % 100) / 10),
            O = M % 10,
            o = "";
          return (
            z > 0 && (o += b[z] + "vatlh"),
            p > 0 && (o += ("" !== o ? " " : "") + b[p] + "maH"),
            O > 0 && (o += ("" !== o ? " " : "") + b[O]),
            "" === o ? "pagh" : o
          );
        }
        M.defineLocale("tlh", {
          months:
            "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
              "_",
            ),
          monthsShort:
            "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_",
            ),
          weekdaysShort:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_",
            ),
          weekdaysMin:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_",
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa’leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa’Hu’] LT",
            lastWeek: "LLL",
            sameElse: "L",
          },
          relativeTime: {
            future: z,
            past: p,
            s: "puS lup",
            ss: O,
            m: "wa’ tup",
            mm: O,
            h: "wa’ rep",
            hh: O,
            d: "wa’ jaj",
            dd: O,
            M: "wa’ jar",
            MM: O,
            y: "wa’ DIS",
            yy: O,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    33600: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = {
          1: "'inci",
          5: "'inci",
          8: "'inci",
          70: "'inci",
          80: "'inci",
          2: "'nci",
          7: "'nci",
          20: "'nci",
          50: "'nci",
          3: "'üncü",
          4: "'üncü",
          100: "'üncü",
          6: "'ncı",
          9: "'uncu",
          10: "'uncu",
          30: "'uncu",
          60: "'ıncı",
          90: "'ıncı",
        };
        M.defineLocale("tr", {
          months:
            "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
              "_",
            ),
          monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split(
            "_",
          ),
          weekdays:
            "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
          weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),
          weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
          meridiem: function (M, b, z) {
            return M < 12 ? (z ? "öö" : "ÖÖ") : z ? "ös" : "ÖS";
          },
          meridiemParse: /öö|ÖÖ|ös|ÖS/,
          isPM: function (M) {
            return "ös" === M || "ÖS" === M;
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[yarın saat] LT",
            nextWeek: "[gelecek] dddd [saat] LT",
            lastDay: "[dün] LT",
            lastWeek: "[geçen] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s önce",
            s: "birkaç saniye",
            ss: "%d saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            w: "bir hafta",
            ww: "%d hafta",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl",
          },
          ordinal: function (M, z) {
            switch (z) {
              case "d":
              case "D":
              case "Do":
              case "DD":
                return M;
              default:
                if (0 === M) return M + "'ıncı";
                var p = M % 10,
                  O = (M % 100) - p,
                  o = M >= 100 ? 100 : null;
                return M + (b[p] || b[O] || b[o]);
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    18985: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b, z, p) {
          var O = {
            s: ["viensas secunds", "'iensas secunds"],
            ss: [M + " secunds", M + " secunds"],
            m: ["'n míut", "'iens míut"],
            mm: [M + " míuts", M + " míuts"],
            h: ["'n þora", "'iensa þora"],
            hh: [M + " þoras", M + " þoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [M + " ziuas", M + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [M + " mesen", M + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [M + " ars", M + " ars"],
          };
          return p || b ? O[z][0] : O[z][1];
        }
        M.defineLocale("tzl", {
          months:
            "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
              "_",
            ),
          monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split(
            "_",
          ),
          weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split(
            "_",
          ),
          weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
          weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
          },
          meridiemParse: /d\'o|d\'a/i,
          isPM: function (M) {
            return "d'o" === M.toLowerCase();
          },
          meridiem: function (M, b, z) {
            return M > 11 ? (z ? "d'o" : "D'O") : z ? "d'a" : "D'A";
          },
          calendar: {
            sameDay: "[oxhi à] LT",
            nextDay: "[demà à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[ieiri à] LT",
            lastWeek: "[sür el] dddd [lasteu à] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: b,
            ss: b,
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: b,
            dd: b,
            M: b,
            MM: b,
            y: b,
            yy: b,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    51145: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("tzm-latn", {
          months:
            "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
              "_",
            ),
          monthsShort:
            "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
              "_",
            ),
          weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
            "_",
          ),
          weekdaysShort:
            "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
            "_",
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            ss: "%d imik",
            m: "minuḍ",
            mm: "%d minuḍ",
            h: "saɛa",
            hh: "%d tassaɛin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn",
          },
          week: { dow: 6, doy: 12 },
        });
      })(z(36105));
    },
    3627: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("tzm", {
          months:
            "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
              "_",
            ),
          monthsShort:
            "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
              "_",
            ),
          weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
            "_",
          ),
          weekdaysShort:
            "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
            "_",
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
            nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
            nextWeek: "dddd [ⴴ] LT",
            lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
            lastWeek: "dddd [ⴴ] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
            past: "ⵢⴰⵏ %s",
            s: "ⵉⵎⵉⴽ",
            ss: "%d ⵉⵎⵉⴽ",
            m: "ⵎⵉⵏⵓⴺ",
            mm: "%d ⵎⵉⵏⵓⴺ",
            h: "ⵙⴰⵄⴰ",
            hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
            d: "ⴰⵙⵙ",
            dd: "%d oⵙⵙⴰⵏ",
            M: "ⴰⵢoⵓⵔ",
            MM: "%d ⵉⵢⵢⵉⵔⵏ",
            y: "ⴰⵙⴳⴰⵙ",
            yy: "%d ⵉⵙⴳⴰⵙⵏ",
          },
          week: { dow: 6, doy: 12 },
        });
      })(z(36105));
    },
    4790: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("ug-cn", {
          months:
            "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
              "_",
            ),
          monthsShort:
            "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
              "_",
            ),
          weekdays:
            "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
          weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
          weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
            LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
            LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
          },
          meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "يېرىم كېچە" === b || "سەھەر" === b || "چۈشتىن بۇرۇن" === b
                ? M
                : "چۈشتىن كېيىن" === b || "كەچ" === b
                ? M + 12
                : M >= 11
                ? M
                : M + 12
            );
          },
          meridiem: function (M, b, z) {
            var p = 100 * M + b;
            return p < 600
              ? "يېرىم كېچە"
              : p < 900
              ? "سەھەر"
              : p < 1130
              ? "چۈشتىن بۇرۇن"
              : p < 1230
              ? "چۈش"
              : p < 1800
              ? "چۈشتىن كېيىن"
              : "كەچ";
          },
          calendar: {
            sameDay: "[بۈگۈن سائەت] LT",
            nextDay: "[ئەتە سائەت] LT",
            nextWeek: "[كېلەركى] dddd [سائەت] LT",
            lastDay: "[تۆنۈگۈن] LT",
            lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s كېيىن",
            past: "%s بۇرۇن",
            s: "نەچچە سېكونت",
            ss: "%d سېكونت",
            m: "بىر مىنۇت",
            mm: "%d مىنۇت",
            h: "بىر سائەت",
            hh: "%d سائەت",
            d: "بىر كۈن",
            dd: "%d كۈن",
            M: "بىر ئاي",
            MM: "%d ئاي",
            y: "بىر يىل",
            yy: "%d يىل",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
          ordinal: function (M, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return M + "-كۈنى";
              case "w":
              case "W":
                return M + "-ھەپتە";
              default:
                return M;
            }
          },
          preparse: function (M) {
            return M.replace(/،/g, ",");
          },
          postformat: function (M) {
            return M.replace(/,/g, "،");
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    97712: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        function b(M, b) {
          var z = M.split("_");
          return b % 10 == 1 && b % 100 != 11
            ? z[0]
            : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20)
            ? z[1]
            : z[2];
        }
        function z(M, z, p) {
          return "m" === p
            ? z
              ? "хвилина"
              : "хвилину"
            : "h" === p
            ? z
              ? "година"
              : "годину"
            : M +
              " " +
              b(
                {
                  ss: z ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                  mm: z ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                  hh: z ? "година_години_годин" : "годину_години_годин",
                  dd: "день_дні_днів",
                  MM: "місяць_місяці_місяців",
                  yy: "рік_роки_років",
                }[p],
                +M,
              );
        }
        function p(M, b) {
          var z = {
            nominative:
              "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
                "_",
              ),
            accusative:
              "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split(
                "_",
              ),
            genitive:
              "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split(
                "_",
              ),
          };
          return !0 === M
            ? z.nominative.slice(1, 7).concat(z.nominative.slice(0, 1))
            : M
            ? z[
                /(\[[ВвУу]\]) ?dddd/.test(b)
                  ? "accusative"
                  : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b)
                  ? "genitive"
                  : "nominative"
              ][M.day()]
            : z.nominative;
        }
        function O(M) {
          return function () {
            return M + "о" + (11 === this.hours() ? "б" : "") + "] LT";
          };
        }
        M.defineLocale("uk", {
          months: {
            format:
              "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
                "_",
              ),
            standalone:
              "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
                "_",
              ),
          },
          monthsShort:
            "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
          weekdays: p,
          weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm",
          },
          calendar: {
            sameDay: O("[Сьогодні "),
            nextDay: O("[Завтра "),
            lastDay: O("[Вчора "),
            nextWeek: O("[У] dddd ["),
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return O("[Минулої] dddd [").call(this);
                case 1:
                case 2:
                case 4:
                  return O("[Минулого] dddd [").call(this);
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            ss: z,
            m: z,
            mm: z,
            h: "годину",
            hh: z,
            d: "день",
            dd: z,
            M: "місяць",
            MM: z,
            y: "рік",
            yy: z,
          },
          meridiemParse: /ночі|ранку|дня|вечора/,
          isPM: function (M) {
            return /^(дня|вечора)$/.test(M);
          },
          meridiem: function (M, b, z) {
            return M < 4
              ? "ночі"
              : M < 12
              ? "ранку"
              : M < 17
              ? "дня"
              : "вечора";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
          ordinal: function (M, b) {
            switch (b) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return M + "-й";
              case "D":
                return M + "-го";
              default:
                return M;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    99529: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        var b = [
            "جنوری",
            "فروری",
            "مارچ",
            "اپریل",
            "مئی",
            "جون",
            "جولائی",
            "اگست",
            "ستمبر",
            "اکتوبر",
            "نومبر",
            "دسمبر",
          ],
          z = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        M.defineLocale("ur", {
          months: b,
          monthsShort: b,
          weekdays: z,
          weekdaysShort: z,
          weekdaysMin: z,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd، D MMMM YYYY HH:mm",
          },
          meridiemParse: /صبح|شام/,
          isPM: function (M) {
            return "شام" === M;
          },
          meridiem: function (M, b, z) {
            return M < 12 ? "صبح" : "شام";
          },
          calendar: {
            sameDay: "[آج بوقت] LT",
            nextDay: "[کل بوقت] LT",
            nextWeek: "dddd [بوقت] LT",
            lastDay: "[گذشتہ روز بوقت] LT",
            lastWeek: "[گذشتہ] dddd [بوقت] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s بعد",
            past: "%s قبل",
            s: "چند سیکنڈ",
            ss: "%d سیکنڈ",
            m: "ایک منٹ",
            mm: "%d منٹ",
            h: "ایک گھنٹہ",
            hh: "%d گھنٹے",
            d: "ایک دن",
            dd: "%d دن",
            M: "ایک ماہ",
            MM: "%d ماہ",
            y: "ایک سال",
            yy: "%d سال",
          },
          preparse: function (M) {
            return M.replace(/،/g, ",");
          },
          postformat: function (M) {
            return M.replace(/,/g, "،");
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    61737: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("uz-latn", {
          months:
            "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
              "_",
            ),
          monthsShort:
            "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
          weekdays:
            "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
              "_",
            ),
          weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
          weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm",
          },
          calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L",
          },
          relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            ss: "%d soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil",
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    99141: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("uz", {
          months:
            "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
              "_",
            ),
          monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
            "_",
          ),
          weekdays:
            "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
          weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
          weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm",
          },
          calendar: {
            sameDay: "[Бугун соат] LT [да]",
            nextDay: "[Эртага] LT [да]",
            nextWeek: "dddd [куни соат] LT [да]",
            lastDay: "[Кеча соат] LT [да]",
            lastWeek: "[Утган] dddd [куни соат] LT [да]",
            sameElse: "L",
          },
          relativeTime: {
            future: "Якин %s ичида",
            past: "Бир неча %s олдин",
            s: "фурсат",
            ss: "%d фурсат",
            m: "бир дакика",
            mm: "%d дакика",
            h: "бир соат",
            hh: "%d соат",
            d: "бир кун",
            dd: "%d кун",
            M: "бир ой",
            MM: "%d ой",
            y: "бир йил",
            yy: "%d йил",
          },
          week: { dow: 1, doy: 7 },
        });
      })(z(36105));
    },
    98205: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("vi", {
          months:
            "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
              "_",
            ),
          monthsShort:
            "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
          weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysParseExact: !0,
          meridiemParse: /sa|ch/i,
          isPM: function (M) {
            return /^ch$/i.test(M);
          },
          meridiem: function (M, b, z) {
            return M < 12 ? (z ? "sa" : "SA") : z ? "ch" : "CH";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [năm] YYYY",
            LLL: "D MMMM [năm] YYYY HH:mm",
            LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Hôm nay lúc] LT",
            nextDay: "[Ngày mai lúc] LT",
            nextWeek: "dddd [tuần tới lúc] LT",
            lastDay: "[Hôm qua lúc] LT",
            lastWeek: "dddd [tuần trước lúc] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s tới",
            past: "%s trước",
            s: "vài giây",
            ss: "%d giây",
            m: "một phút",
            mm: "%d phút",
            h: "một giờ",
            hh: "%d giờ",
            d: "một ngày",
            dd: "%d ngày",
            w: "một tuần",
            ww: "%d tuần",
            M: "một tháng",
            MM: "%d tháng",
            y: "một năm",
            yy: "%d năm",
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (M) {
            return M;
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    20697: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("x-pseudo", {
          months:
            "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split(
              "_",
            ),
          monthsShort:
            "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split(
              "_",
            ),
          weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
          weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[T~ódá~ý át] LT",
            nextDay: "[T~ómó~rró~w át] LT",
            nextWeek: "dddd [át] LT",
            lastDay: "[Ý~ést~érdá~ý át] LT",
            lastWeek: "[L~ást] dddd [át] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "í~ñ %s",
            past: "%s á~gó",
            s: "á ~féw ~sécó~ñds",
            ss: "%d s~écóñ~ds",
            m: "á ~míñ~úté",
            mm: "%d m~íñú~tés",
            h: "á~ñ hó~úr",
            hh: "%d h~óúrs",
            d: "á ~dáý",
            dd: "%d d~áýs",
            M: "á ~móñ~th",
            MM: "%d m~óñt~hs",
            y: "á ~ýéár",
            yy: "%d ý~éárs",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (M) {
            var b = M % 10;
            return (
              M +
              (1 == ~~((M % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    37826: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("yo", {
          months:
            "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split(
              "_",
            ),
          monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split(
            "_",
          ),
          weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
          weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
          weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Ònì ni] LT",
            nextDay: "[Ọ̀la ni] LT",
            nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
            lastDay: "[Àna ni] LT",
            lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ní %s",
            past: "%s kọjá",
            s: "ìsẹjú aayá die",
            ss: "aayá %d",
            m: "ìsẹjú kan",
            mm: "ìsẹjú %d",
            h: "wákati kan",
            hh: "wákati %d",
            d: "ọjọ́ kan",
            dd: "ọjọ́ %d",
            M: "osù kan",
            MM: "osù %d",
            y: "ọdún kan",
            yy: "ọdún %d",
          },
          dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
          ordinal: "ọjọ́ %d",
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    83994: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("zh-cn", {
          months:
            "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
              "_",
            ),
          monthsShort:
            "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_",
          ),
          weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日Ah点mm分",
            LLLL: "YYYY年M月D日ddddAh点mm分",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm",
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "凌晨" === b || "早上" === b || "上午" === b
                ? M
                : "下午" === b || "晚上" === b
                ? M + 12
                : M >= 11
                ? M
                : M + 12
            );
          },
          meridiem: function (M, b, z) {
            var p = 100 * M + b;
            return p < 600
              ? "凌晨"
              : p < 900
              ? "早上"
              : p < 1130
              ? "上午"
              : p < 1230
              ? "中午"
              : p < 1800
              ? "下午"
              : "晚上";
          },
          calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: function (M) {
              return M.week() !== this.week() ? "[下]dddLT" : "[本]dddLT";
            },
            lastDay: "[昨天]LT",
            lastWeek: function (M) {
              return this.week() !== M.week() ? "[上]dddLT" : "[本]dddLT";
            },
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
          ordinal: function (M, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return M + "日";
              case "M":
                return M + "月";
              case "w":
              case "W":
                return M + "周";
              default:
                return M;
            }
          },
          relativeTime: {
            future: "%s后",
            past: "%s前",
            s: "几秒",
            ss: "%d 秒",
            m: "1 分钟",
            mm: "%d 分钟",
            h: "1 小时",
            hh: "%d 小时",
            d: "1 天",
            dd: "%d 天",
            w: "1 周",
            ww: "%d 周",
            M: "1 个月",
            MM: "%d 个月",
            y: "1 年",
            yy: "%d 年",
          },
          week: { dow: 1, doy: 4 },
        });
      })(z(36105));
    },
    36892: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("zh-hk", {
          months:
            "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
              "_",
            ),
          monthsShort:
            "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_",
          ),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm",
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "凌晨" === b || "早上" === b || "上午" === b
                ? M
                : "中午" === b
                ? M >= 11
                  ? M
                  : M + 12
                : "下午" === b || "晚上" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            var p = 100 * M + b;
            return p < 600
              ? "凌晨"
              : p < 900
              ? "早上"
              : p < 1200
              ? "上午"
              : 1200 === p
              ? "中午"
              : p < 1800
              ? "下午"
              : "晚上";
          },
          calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function (M, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return M + "日";
              case "M":
                return M + "月";
              case "w":
              case "W":
                return M + "週";
              default:
                return M;
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年",
          },
        });
      })(z(36105));
    },
    43884: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("zh-mo", {
          months:
            "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
              "_",
            ),
          monthsShort:
            "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_",
          ),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "D/M/YYYY",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm",
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "凌晨" === b || "早上" === b || "上午" === b
                ? M
                : "中午" === b
                ? M >= 11
                  ? M
                  : M + 12
                : "下午" === b || "晚上" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            var p = 100 * M + b;
            return p < 600
              ? "凌晨"
              : p < 900
              ? "早上"
              : p < 1130
              ? "上午"
              : p < 1230
              ? "中午"
              : p < 1800
              ? "下午"
              : "晚上";
          },
          calendar: {
            sameDay: "[今天] LT",
            nextDay: "[明天] LT",
            nextWeek: "[下]dddd LT",
            lastDay: "[昨天] LT",
            lastWeek: "[上]dddd LT",
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function (M, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return M + "日";
              case "M":
                return M + "月";
              case "w":
              case "W":
                return M + "週";
              default:
                return M;
            }
          },
          relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年",
          },
        });
      })(z(36105));
    },
    85136: function (M, b, z) {
      !(function (M) {
        "use strict";
        //! moment.js locale configuration
        M.defineLocale("zh-tw", {
          months:
            "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
              "_",
            ),
          monthsShort:
            "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_",
          ),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm",
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (M, b) {
            return (
              12 === M && (M = 0),
              "凌晨" === b || "早上" === b || "上午" === b
                ? M
                : "中午" === b
                ? M >= 11
                  ? M
                  : M + 12
                : "下午" === b || "晚上" === b
                ? M + 12
                : void 0
            );
          },
          meridiem: function (M, b, z) {
            var p = 100 * M + b;
            return p < 600
              ? "凌晨"
              : p < 900
              ? "早上"
              : p < 1130
              ? "上午"
              : p < 1230
              ? "中午"
              : p < 1800
              ? "下午"
              : "晚上";
          },
          calendar: {
            sameDay: "[今天] LT",
            nextDay: "[明天] LT",
            nextWeek: "[下]dddd LT",
            lastDay: "[昨天] LT",
            lastWeek: "[上]dddd LT",
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function (M, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return M + "日";
              case "M":
                return M + "月";
              case "w":
              case "W":
                return M + "週";
              default:
                return M;
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年",
          },
        });
      })(z(36105));
    },
    36105: function (M, b, z) {
      (M = z.nmd(M)).exports = (function () {
        "use strict";
        var b, p;
        function O() {
          return b.apply(null, arguments);
        }
        function o(M) {
          b = M;
        }
        function c(M) {
          return (
            M instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(M)
          );
        }
        function A(M) {
          return (
            null != M && "[object Object]" === Object.prototype.toString.call(M)
          );
        }
        function e(M, b) {
          return Object.prototype.hasOwnProperty.call(M, b);
        }
        function a(M) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(M).length;
          var b;
          for (b in M) if (e(M, b)) return !1;
          return !0;
        }
        function q(M) {
          return void 0 === M;
        }
        function d(M) {
          return (
            "number" == typeof M ||
            "[object Number]" === Object.prototype.toString.call(M)
          );
        }
        function n(M) {
          return (
            M instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(M)
          );
        }
        function t(M, b) {
          var z,
            p = [],
            O = M.length;
          for (z = 0; z < O; ++z) p.push(b(M[z], z));
          return p;
        }
        function i(M, b) {
          for (var z in b) e(b, z) && (M[z] = b[z]);
          return (
            e(b, "toString") && (M.toString = b.toString),
            e(b, "valueOf") && (M.valueOf = b.valueOf),
            M
          );
        }
        function W(M, b, z, p) {
          return Gz(M, b, z, p, !0).utc();
        }
        function r() {
          return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
          };
        }
        function s(M) {
          return null == M._pf && (M._pf = r()), M._pf;
        }
        function u(M) {
          if (null == M._isValid) {
            var b = s(M),
              z = p.call(b.parsedDateParts, function (M) {
                return null != M;
              }),
              O =
                !isNaN(M._d.getTime()) &&
                b.overflow < 0 &&
                !b.empty &&
                !b.invalidEra &&
                !b.invalidMonth &&
                !b.invalidWeekday &&
                !b.weekdayMismatch &&
                !b.nullInput &&
                !b.invalidFormat &&
                !b.userInvalidated &&
                (!b.meridiem || (b.meridiem && z));
            if (
              (M._strict &&
                (O =
                  O &&
                  0 === b.charsLeftOver &&
                  0 === b.unusedTokens.length &&
                  void 0 === b.bigHour),
              null != Object.isFrozen && Object.isFrozen(M))
            )
              return O;
            M._isValid = O;
          }
          return M._isValid;
        }
        function _(M) {
          var b = W(NaN);
          return null != M ? i(s(b), M) : (s(b).userInvalidated = !0), b;
        }
        p = Array.prototype.some
          ? Array.prototype.some
          : function (M) {
              var b,
                z = Object(this),
                p = z.length >>> 0;
              for (b = 0; b < p; b++)
                if (b in z && M.call(this, z[b], b, z)) return !0;
              return !1;
            };
        var L = (O.momentProperties = []),
          m = !1;
        function l(M, b) {
          var z,
            p,
            O,
            o = L.length;
          if (
            (q(b._isAMomentObject) || (M._isAMomentObject = b._isAMomentObject),
            q(b._i) || (M._i = b._i),
            q(b._f) || (M._f = b._f),
            q(b._l) || (M._l = b._l),
            q(b._strict) || (M._strict = b._strict),
            q(b._tzm) || (M._tzm = b._tzm),
            q(b._isUTC) || (M._isUTC = b._isUTC),
            q(b._offset) || (M._offset = b._offset),
            q(b._pf) || (M._pf = s(b)),
            q(b._locale) || (M._locale = b._locale),
            o > 0)
          )
            for (z = 0; z < o; z++) q((O = b[(p = L[z])])) || (M[p] = O);
          return M;
        }
        function f(M) {
          l(this, M),
            (this._d = new Date(null != M._d ? M._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === m && ((m = !0), O.updateOffset(this), (m = !1));
        }
        function R(M) {
          return M instanceof f || (null != M && null != M._isAMomentObject);
        }
        function h(M) {
          !1 === O.suppressDeprecationWarnings &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + M);
        }
        function B(M, b) {
          var z = !0;
          return i(function () {
            if (
              (null != O.deprecationHandler && O.deprecationHandler(null, M), z)
            ) {
              var p,
                o,
                c,
                A = [],
                a = arguments.length;
              for (o = 0; o < a; o++) {
                if (((p = ""), "object" == typeof arguments[o])) {
                  for (c in ((p += "\n[" + o + "] "), arguments[0]))
                    e(arguments[0], c) &&
                      (p += c + ": " + arguments[0][c] + ", ");
                  p = p.slice(0, -2);
                } else p = arguments[o];
                A.push(p);
              }
              h(
                M +
                  "\nArguments: " +
                  Array.prototype.slice.call(A).join("") +
                  "\n" +
                  new Error().stack,
              ),
                (z = !1);
            }
            return b.apply(this, arguments);
          }, b);
        }
        var N,
          X = {};
        function T(M, b) {
          null != O.deprecationHandler && O.deprecationHandler(M, b),
            X[M] || (h(b), (X[M] = !0));
        }
        function y(M) {
          return (
            ("undefined" != typeof Function && M instanceof Function) ||
            "[object Function]" === Object.prototype.toString.call(M)
          );
        }
        function Y(M) {
          var b, z;
          for (z in M)
            e(M, z) && (y((b = M[z])) ? (this[z] = b) : (this["_" + z] = b));
          (this._config = M),
            (this._dayOfMonthOrdinalParseLenient = new RegExp(
              (this._dayOfMonthOrdinalParse.source ||
                this._ordinalParse.source) +
                "|" +
                /\d{1,2}/.source,
            ));
        }
        function D(M, b) {
          var z,
            p = i({}, M);
          for (z in b)
            e(b, z) &&
              (A(M[z]) && A(b[z])
                ? ((p[z] = {}), i(p[z], M[z]), i(p[z], b[z]))
                : null != b[z]
                ? (p[z] = b[z])
                : delete p[z]);
          for (z in M) e(M, z) && !e(b, z) && A(M[z]) && (p[z] = i({}, p[z]));
          return p;
        }
        function k(M) {
          null != M && this.set(M);
        }
        (O.suppressDeprecationWarnings = !1),
          (O.deprecationHandler = null),
          (N = Object.keys
            ? Object.keys
            : function (M) {
                var b,
                  z = [];
                for (b in M) e(M, b) && z.push(b);
                return z;
              });
        var g = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        };
        function w(M, b, z) {
          var p = this._calendar[M] || this._calendar.sameElse;
          return y(p) ? p.call(b, z) : p;
        }
        function S(M, b, z) {
          var p = "" + Math.abs(M),
            O = b - p.length;
          return (
            (M >= 0 ? (z ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, O)).toString().substr(1) +
            p
          );
        }
        var v =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          E = {},
          P = {};
        function j(M, b, z, p) {
          var O = p;
          "string" == typeof p &&
            (O = function () {
              return this[p]();
            }),
            M && (P[M] = O),
            b &&
              (P[b[0]] = function () {
                return S(O.apply(this, arguments), b[1], b[2]);
              }),
            z &&
              (P[z] = function () {
                return this.localeData().ordinal(O.apply(this, arguments), M);
              });
        }
        function C(M) {
          return M.match(/\[[\s\S]/)
            ? M.replace(/^\[|\]$/g, "")
            : M.replace(/\\/g, "");
        }
        function x(M) {
          var b,
            z,
            p = M.match(v);
          for (b = 0, z = p.length; b < z; b++)
            P[p[b]] ? (p[b] = P[p[b]]) : (p[b] = C(p[b]));
          return function (b) {
            var O,
              o = "";
            for (O = 0; O < z; O++) o += y(p[O]) ? p[O].call(b, M) : p[O];
            return o;
          };
        }
        function F(M, b) {
          return M.isValid()
            ? ((b = I(b, M.localeData())), (E[b] = E[b] || x(b)), E[b](M))
            : M.localeData().invalidDate();
        }
        function I(M, b) {
          var z = 5;
          function p(M) {
            return b.longDateFormat(M) || M;
          }
          for (H.lastIndex = 0; z >= 0 && H.test(M); )
            (M = M.replace(H, p)), (H.lastIndex = 0), (z -= 1);
          return M;
        }
        var U = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        };
        function J(M) {
          var b = this._longDateFormat[M],
            z = this._longDateFormat[M.toUpperCase()];
          return b || !z
            ? b
            : ((this._longDateFormat[M] = z
                .match(v)
                .map(function (M) {
                  return "MMMM" === M ||
                    "MM" === M ||
                    "DD" === M ||
                    "dddd" === M
                    ? M.slice(1)
                    : M;
                })
                .join("")),
              this._longDateFormat[M]);
        }
        var G = "Invalid date";
        function K() {
          return this._invalidDate;
        }
        var V = "%d",
          Q = /\d{1,2}/;
        function Z(M) {
          return this._ordinal.replace("%d", M);
        }
        var $ = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        };
        function MM(M, b, z, p) {
          var O = this._relativeTime[z];
          return y(O) ? O(M, b, z, p) : O.replace(/%d/i, M);
        }
        function bM(M, b) {
          var z = this._relativeTime[M > 0 ? "future" : "past"];
          return y(z) ? z(b) : z.replace(/%s/i, b);
        }
        var zM = {};
        function pM(M, b) {
          var z = M.toLowerCase();
          zM[z] = zM[z + "s"] = zM[b] = M;
        }
        function OM(M) {
          return "string" == typeof M ? zM[M] || zM[M.toLowerCase()] : void 0;
        }
        function oM(M) {
          var b,
            z,
            p = {};
          for (z in M) e(M, z) && (b = OM(z)) && (p[b] = M[z]);
          return p;
        }
        var cM = {};
        function AM(M, b) {
          cM[M] = b;
        }
        function eM(M) {
          var b,
            z = [];
          for (b in M) e(M, b) && z.push({ unit: b, priority: cM[b] });
          return (
            z.sort(function (M, b) {
              return M.priority - b.priority;
            }),
            z
          );
        }
        function aM(M) {
          return (M % 4 == 0 && M % 100 != 0) || M % 400 == 0;
        }
        function qM(M) {
          return M < 0 ? Math.ceil(M) || 0 : Math.floor(M);
        }
        function dM(M) {
          var b = +M,
            z = 0;
          return 0 !== b && isFinite(b) && (z = qM(b)), z;
        }
        function nM(M, b) {
          return function (z) {
            return null != z
              ? (iM(this, M, z), O.updateOffset(this, b), this)
              : tM(this, M);
          };
        }
        function tM(M, b) {
          return M.isValid()
            ? M._d["get" + (M._isUTC ? "UTC" : "") + b]()
            : NaN;
        }
        function iM(M, b, z) {
          M.isValid() &&
            !isNaN(z) &&
            ("FullYear" === b &&
            aM(M.year()) &&
            1 === M.month() &&
            29 === M.date()
              ? ((z = dM(z)),
                M._d["set" + (M._isUTC ? "UTC" : "") + b](
                  z,
                  M.month(),
                  Mb(z, M.month()),
                ))
              : M._d["set" + (M._isUTC ? "UTC" : "") + b](z));
        }
        function WM(M) {
          return y(this[(M = OM(M))]) ? this[M]() : this;
        }
        function rM(M, b) {
          if ("object" == typeof M) {
            var z,
              p = eM((M = oM(M))),
              O = p.length;
            for (z = 0; z < O; z++) this[p[z].unit](M[p[z].unit]);
          } else if (y(this[(M = OM(M))])) return this[M](b);
          return this;
        }
        var sM,
          uM = /\d/,
          _M = /\d\d/,
          LM = /\d{3}/,
          mM = /\d{4}/,
          lM = /[+-]?\d{6}/,
          fM = /\d\d?/,
          RM = /\d\d\d\d?/,
          hM = /\d\d\d\d\d\d?/,
          BM = /\d{1,3}/,
          NM = /\d{1,4}/,
          XM = /[+-]?\d{1,6}/,
          TM = /\d+/,
          yM = /[+-]?\d+/,
          YM = /Z|[+-]\d\d:?\d\d/gi,
          DM = /Z|[+-]\d\d(?::?\d\d)?/gi,
          kM = /[+-]?\d+(\.\d{1,3})?/,
          gM =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
        function wM(M, b, z) {
          sM[M] = y(b)
            ? b
            : function (M, p) {
                return M && z ? z : b;
              };
        }
        function SM(M, b) {
          return e(sM, M) ? sM[M](b._strict, b._locale) : new RegExp(vM(M));
        }
        function vM(M) {
          return HM(
            M.replace("\\", "").replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function (M, b, z, p, O) {
                return b || z || p || O;
              },
            ),
          );
        }
        function HM(M) {
          return M.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        sM = {};
        var EM = {};
        function PM(M, b) {
          var z,
            p,
            O = b;
          for (
            "string" == typeof M && (M = [M]),
              d(b) &&
                (O = function (M, z) {
                  z[b] = dM(M);
                }),
              p = M.length,
              z = 0;
            z < p;
            z++
          )
            EM[M[z]] = O;
        }
        function jM(M, b) {
          PM(M, function (M, z, p, O) {
            (p._w = p._w || {}), b(M, p._w, p, O);
          });
        }
        function CM(M, b, z) {
          null != b && e(EM, M) && EM[M](b, z._a, z, M);
        }
        var xM,
          FM = 0,
          IM = 1,
          UM = 2,
          JM = 3,
          GM = 4,
          KM = 5,
          VM = 6,
          QM = 7,
          ZM = 8;
        function $M(M, b) {
          return ((M % b) + b) % b;
        }
        function Mb(M, b) {
          if (isNaN(M) || isNaN(b)) return NaN;
          var z = $M(b, 12);
          return (
            (M += (b - z) / 12),
            1 === z ? (aM(M) ? 29 : 28) : 31 - ((z % 7) % 2)
          );
        }
        (xM = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (M) {
              var b;
              for (b = 0; b < this.length; ++b) if (this[b] === M) return b;
              return -1;
            }),
          j("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
          j("MMM", 0, 0, function (M) {
            return this.localeData().monthsShort(this, M);
          }),
          j("MMMM", 0, 0, function (M) {
            return this.localeData().months(this, M);
          }),
          pM("month", "M"),
          AM("month", 8),
          wM("M", fM),
          wM("MM", fM, _M),
          wM("MMM", function (M, b) {
            return b.monthsShortRegex(M);
          }),
          wM("MMMM", function (M, b) {
            return b.monthsRegex(M);
          }),
          PM(["M", "MM"], function (M, b) {
            b[IM] = dM(M) - 1;
          }),
          PM(["MMM", "MMMM"], function (M, b, z, p) {
            var O = z._locale.monthsParse(M, p, z._strict);
            null != O ? (b[IM] = O) : (s(z).invalidMonth = M);
          });
        var bb =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          zb = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          pb = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          Ob = gM,
          ob = gM;
        function cb(M, b) {
          return M
            ? c(this._months)
              ? this._months[M.month()]
              : this._months[
                  (this._months.isFormat || pb).test(b)
                    ? "format"
                    : "standalone"
                ][M.month()]
            : c(this._months)
            ? this._months
            : this._months.standalone;
        }
        function Ab(M, b) {
          return M
            ? c(this._monthsShort)
              ? this._monthsShort[M.month()]
              : this._monthsShort[pb.test(b) ? "format" : "standalone"][
                  M.month()
                ]
            : c(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort.standalone;
        }
        function eb(M, b, z) {
          var p,
            O,
            o,
            c = M.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                p = 0;
              p < 12;
              ++p
            )
              (o = W([2e3, p])),
                (this._shortMonthsParse[p] = this.monthsShort(
                  o,
                  "",
                ).toLocaleLowerCase()),
                (this._longMonthsParse[p] = this.months(
                  o,
                  "",
                ).toLocaleLowerCase());
          return z
            ? "MMM" === b
              ? -1 !== (O = xM.call(this._shortMonthsParse, c))
                ? O
                : null
              : -1 !== (O = xM.call(this._longMonthsParse, c))
              ? O
              : null
            : "MMM" === b
            ? -1 !== (O = xM.call(this._shortMonthsParse, c)) ||
              -1 !== (O = xM.call(this._longMonthsParse, c))
              ? O
              : null
            : -1 !== (O = xM.call(this._longMonthsParse, c)) ||
              -1 !== (O = xM.call(this._shortMonthsParse, c))
            ? O
            : null;
        }
        function ab(M, b, z) {
          var p, O, o;
          if (this._monthsParseExact) return eb.call(this, M, b, z);
          for (
            this._monthsParse ||
              ((this._monthsParse = []),
              (this._longMonthsParse = []),
              (this._shortMonthsParse = [])),
              p = 0;
            p < 12;
            p++
          ) {
            if (
              ((O = W([2e3, p])),
              z &&
                !this._longMonthsParse[p] &&
                ((this._longMonthsParse[p] = new RegExp(
                  "^" + this.months(O, "").replace(".", "") + "$",
                  "i",
                )),
                (this._shortMonthsParse[p] = new RegExp(
                  "^" + this.monthsShort(O, "").replace(".", "") + "$",
                  "i",
                ))),
              z ||
                this._monthsParse[p] ||
                ((o =
                  "^" + this.months(O, "") + "|^" + this.monthsShort(O, "")),
                (this._monthsParse[p] = new RegExp(o.replace(".", ""), "i"))),
              z && "MMMM" === b && this._longMonthsParse[p].test(M))
            )
              return p;
            if (z && "MMM" === b && this._shortMonthsParse[p].test(M)) return p;
            if (!z && this._monthsParse[p].test(M)) return p;
          }
        }
        function qb(M, b) {
          var z;
          if (!M.isValid()) return M;
          if ("string" == typeof b)
            if (/^\d+$/.test(b)) b = dM(b);
            else if (!d((b = M.localeData().monthsParse(b)))) return M;
          return (
            (z = Math.min(M.date(), Mb(M.year(), b))),
            M._d["set" + (M._isUTC ? "UTC" : "") + "Month"](b, z),
            M
          );
        }
        function db(M) {
          return null != M
            ? (qb(this, M), O.updateOffset(this, !0), this)
            : tM(this, "Month");
        }
        function nb() {
          return Mb(this.year(), this.month());
        }
        function tb(M) {
          return this._monthsParseExact
            ? (e(this, "_monthsRegex") || Wb.call(this),
              M ? this._monthsShortStrictRegex : this._monthsShortRegex)
            : (e(this, "_monthsShortRegex") || (this._monthsShortRegex = Ob),
              this._monthsShortStrictRegex && M
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex);
        }
        function ib(M) {
          return this._monthsParseExact
            ? (e(this, "_monthsRegex") || Wb.call(this),
              M ? this._monthsStrictRegex : this._monthsRegex)
            : (e(this, "_monthsRegex") || (this._monthsRegex = ob),
              this._monthsStrictRegex && M
                ? this._monthsStrictRegex
                : this._monthsRegex);
        }
        function Wb() {
          function M(M, b) {
            return b.length - M.length;
          }
          var b,
            z,
            p = [],
            O = [],
            o = [];
          for (b = 0; b < 12; b++)
            (z = W([2e3, b])),
              p.push(this.monthsShort(z, "")),
              O.push(this.months(z, "")),
              o.push(this.months(z, "")),
              o.push(this.monthsShort(z, ""));
          for (p.sort(M), O.sort(M), o.sort(M), b = 0; b < 12; b++)
            (p[b] = HM(p[b])), (O[b] = HM(O[b]));
          for (b = 0; b < 24; b++) o[b] = HM(o[b]);
          (this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + O.join("|") + ")",
              "i",
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + p.join("|") + ")",
              "i",
            ));
        }
        function rb(M) {
          return aM(M) ? 366 : 365;
        }
        j("Y", 0, 0, function () {
          var M = this.year();
          return M <= 9999 ? S(M, 4) : "+" + M;
        }),
          j(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          j(0, ["YYYY", 4], 0, "year"),
          j(0, ["YYYYY", 5], 0, "year"),
          j(0, ["YYYYYY", 6, !0], 0, "year"),
          pM("year", "y"),
          AM("year", 1),
          wM("Y", yM),
          wM("YY", fM, _M),
          wM("YYYY", NM, mM),
          wM("YYYYY", XM, lM),
          wM("YYYYYY", XM, lM),
          PM(["YYYYY", "YYYYYY"], FM),
          PM("YYYY", function (M, b) {
            b[FM] = 2 === M.length ? O.parseTwoDigitYear(M) : dM(M);
          }),
          PM("YY", function (M, b) {
            b[FM] = O.parseTwoDigitYear(M);
          }),
          PM("Y", function (M, b) {
            b[FM] = parseInt(M, 10);
          }),
          (O.parseTwoDigitYear = function (M) {
            return dM(M) + (dM(M) > 68 ? 1900 : 2e3);
          });
        var sb = nM("FullYear", !0);
        function ub() {
          return aM(this.year());
        }
        function _b(M, b, z, p, O, o, c) {
          var A;
          return (
            M < 100 && M >= 0
              ? ((A = new Date(M + 400, b, z, p, O, o, c)),
                isFinite(A.getFullYear()) && A.setFullYear(M))
              : (A = new Date(M, b, z, p, O, o, c)),
            A
          );
        }
        function Lb(M) {
          var b, z;
          return (
            M < 100 && M >= 0
              ? (((z = Array.prototype.slice.call(arguments))[0] = M + 400),
                (b = new Date(Date.UTC.apply(null, z))),
                isFinite(b.getUTCFullYear()) && b.setUTCFullYear(M))
              : (b = new Date(Date.UTC.apply(null, arguments))),
            b
          );
        }
        function mb(M, b, z) {
          var p = 7 + b - z;
          return (-(7 + Lb(M, 0, p).getUTCDay() - b) % 7) + p - 1;
        }
        function lb(M, b, z, p, O) {
          var o,
            c,
            A = 1 + 7 * (b - 1) + ((7 + z - p) % 7) + mb(M, p, O);
          return (
            A <= 0
              ? (c = rb((o = M - 1)) + A)
              : A > rb(M)
              ? ((o = M + 1), (c = A - rb(M)))
              : ((o = M), (c = A)),
            { year: o, dayOfYear: c }
          );
        }
        function fb(M, b, z) {
          var p,
            O,
            o = mb(M.year(), b, z),
            c = Math.floor((M.dayOfYear() - o - 1) / 7) + 1;
          return (
            c < 1
              ? (p = c + Rb((O = M.year() - 1), b, z))
              : c > Rb(M.year(), b, z)
              ? ((p = c - Rb(M.year(), b, z)), (O = M.year() + 1))
              : ((O = M.year()), (p = c)),
            { week: p, year: O }
          );
        }
        function Rb(M, b, z) {
          var p = mb(M, b, z),
            O = mb(M + 1, b, z);
          return (rb(M) - p + O) / 7;
        }
        function hb(M) {
          return fb(M, this._week.dow, this._week.doy).week;
        }
        j("w", ["ww", 2], "wo", "week"),
          j("W", ["WW", 2], "Wo", "isoWeek"),
          pM("week", "w"),
          pM("isoWeek", "W"),
          AM("week", 5),
          AM("isoWeek", 5),
          wM("w", fM),
          wM("ww", fM, _M),
          wM("W", fM),
          wM("WW", fM, _M),
          jM(["w", "ww", "W", "WW"], function (M, b, z, p) {
            b[p.substr(0, 1)] = dM(M);
          });
        var Bb = { dow: 0, doy: 6 };
        function Nb() {
          return this._week.dow;
        }
        function Xb() {
          return this._week.doy;
        }
        function Tb(M) {
          var b = this.localeData().week(this);
          return null == M ? b : this.add(7 * (M - b), "d");
        }
        function yb(M) {
          var b = fb(this, 1, 4).week;
          return null == M ? b : this.add(7 * (M - b), "d");
        }
        function Yb(M, b) {
          return "string" != typeof M
            ? M
            : isNaN(M)
            ? "number" == typeof (M = b.weekdaysParse(M))
              ? M
              : null
            : parseInt(M, 10);
        }
        function Db(M, b) {
          return "string" == typeof M
            ? b.weekdaysParse(M) % 7 || 7
            : isNaN(M)
            ? null
            : M;
        }
        function kb(M, b) {
          return M.slice(b, 7).concat(M.slice(0, b));
        }
        j("d", 0, "do", "day"),
          j("dd", 0, 0, function (M) {
            return this.localeData().weekdaysMin(this, M);
          }),
          j("ddd", 0, 0, function (M) {
            return this.localeData().weekdaysShort(this, M);
          }),
          j("dddd", 0, 0, function (M) {
            return this.localeData().weekdays(this, M);
          }),
          j("e", 0, 0, "weekday"),
          j("E", 0, 0, "isoWeekday"),
          pM("day", "d"),
          pM("weekday", "e"),
          pM("isoWeekday", "E"),
          AM("day", 11),
          AM("weekday", 11),
          AM("isoWeekday", 11),
          wM("d", fM),
          wM("e", fM),
          wM("E", fM),
          wM("dd", function (M, b) {
            return b.weekdaysMinRegex(M);
          }),
          wM("ddd", function (M, b) {
            return b.weekdaysShortRegex(M);
          }),
          wM("dddd", function (M, b) {
            return b.weekdaysRegex(M);
          }),
          jM(["dd", "ddd", "dddd"], function (M, b, z, p) {
            var O = z._locale.weekdaysParse(M, p, z._strict);
            null != O ? (b.d = O) : (s(z).invalidWeekday = M);
          }),
          jM(["d", "e", "E"], function (M, b, z, p) {
            b[p] = dM(M);
          });
        var gb =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          wb = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Sb = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          vb = gM,
          Hb = gM,
          Eb = gM;
        function Pb(M, b) {
          var z = c(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                M && !0 !== M && this._weekdays.isFormat.test(b)
                  ? "format"
                  : "standalone"
              ];
          return !0 === M ? kb(z, this._week.dow) : M ? z[M.day()] : z;
        }
        function jb(M) {
          return !0 === M
            ? kb(this._weekdaysShort, this._week.dow)
            : M
            ? this._weekdaysShort[M.day()]
            : this._weekdaysShort;
        }
        function Cb(M) {
          return !0 === M
            ? kb(this._weekdaysMin, this._week.dow)
            : M
            ? this._weekdaysMin[M.day()]
            : this._weekdaysMin;
        }
        function xb(M, b, z) {
          var p,
            O,
            o,
            c = M.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                p = 0;
              p < 7;
              ++p
            )
              (o = W([2e3, 1]).day(p)),
                (this._minWeekdaysParse[p] = this.weekdaysMin(
                  o,
                  "",
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[p] = this.weekdaysShort(
                  o,
                  "",
                ).toLocaleLowerCase()),
                (this._weekdaysParse[p] = this.weekdays(
                  o,
                  "",
                ).toLocaleLowerCase());
          return z
            ? "dddd" === b
              ? -1 !== (O = xM.call(this._weekdaysParse, c))
                ? O
                : null
              : "ddd" === b
              ? -1 !== (O = xM.call(this._shortWeekdaysParse, c))
                ? O
                : null
              : -1 !== (O = xM.call(this._minWeekdaysParse, c))
              ? O
              : null
            : "dddd" === b
            ? -1 !== (O = xM.call(this._weekdaysParse, c)) ||
              -1 !== (O = xM.call(this._shortWeekdaysParse, c)) ||
              -1 !== (O = xM.call(this._minWeekdaysParse, c))
              ? O
              : null
            : "ddd" === b
            ? -1 !== (O = xM.call(this._shortWeekdaysParse, c)) ||
              -1 !== (O = xM.call(this._weekdaysParse, c)) ||
              -1 !== (O = xM.call(this._minWeekdaysParse, c))
              ? O
              : null
            : -1 !== (O = xM.call(this._minWeekdaysParse, c)) ||
              -1 !== (O = xM.call(this._weekdaysParse, c)) ||
              -1 !== (O = xM.call(this._shortWeekdaysParse, c))
            ? O
            : null;
        }
        function Fb(M, b, z) {
          var p, O, o;
          if (this._weekdaysParseExact) return xb.call(this, M, b, z);
          for (
            this._weekdaysParse ||
              ((this._weekdaysParse = []),
              (this._minWeekdaysParse = []),
              (this._shortWeekdaysParse = []),
              (this._fullWeekdaysParse = [])),
              p = 0;
            p < 7;
            p++
          ) {
            if (
              ((O = W([2e3, 1]).day(p)),
              z &&
                !this._fullWeekdaysParse[p] &&
                ((this._fullWeekdaysParse[p] = new RegExp(
                  "^" + this.weekdays(O, "").replace(".", "\\.?") + "$",
                  "i",
                )),
                (this._shortWeekdaysParse[p] = new RegExp(
                  "^" + this.weekdaysShort(O, "").replace(".", "\\.?") + "$",
                  "i",
                )),
                (this._minWeekdaysParse[p] = new RegExp(
                  "^" + this.weekdaysMin(O, "").replace(".", "\\.?") + "$",
                  "i",
                ))),
              this._weekdaysParse[p] ||
                ((o =
                  "^" +
                  this.weekdays(O, "") +
                  "|^" +
                  this.weekdaysShort(O, "") +
                  "|^" +
                  this.weekdaysMin(O, "")),
                (this._weekdaysParse[p] = new RegExp(o.replace(".", ""), "i"))),
              z && "dddd" === b && this._fullWeekdaysParse[p].test(M))
            )
              return p;
            if (z && "ddd" === b && this._shortWeekdaysParse[p].test(M))
              return p;
            if (z && "dd" === b && this._minWeekdaysParse[p].test(M)) return p;
            if (!z && this._weekdaysParse[p].test(M)) return p;
          }
        }
        function Ib(M) {
          if (!this.isValid()) return null != M ? this : NaN;
          var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != M
            ? ((M = Yb(M, this.localeData())), this.add(M - b, "d"))
            : b;
        }
        function Ub(M) {
          if (!this.isValid()) return null != M ? this : NaN;
          var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == M ? b : this.add(M - b, "d");
        }
        function Jb(M) {
          if (!this.isValid()) return null != M ? this : NaN;
          if (null != M) {
            var b = Db(M, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7);
          }
          return this.day() || 7;
        }
        function Gb(M) {
          return this._weekdaysParseExact
            ? (e(this, "_weekdaysRegex") || Qb.call(this),
              M ? this._weekdaysStrictRegex : this._weekdaysRegex)
            : (e(this, "_weekdaysRegex") || (this._weekdaysRegex = vb),
              this._weekdaysStrictRegex && M
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex);
        }
        function Kb(M) {
          return this._weekdaysParseExact
            ? (e(this, "_weekdaysRegex") || Qb.call(this),
              M ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            : (e(this, "_weekdaysShortRegex") ||
                (this._weekdaysShortRegex = Hb),
              this._weekdaysShortStrictRegex && M
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex);
        }
        function Vb(M) {
          return this._weekdaysParseExact
            ? (e(this, "_weekdaysRegex") || Qb.call(this),
              M ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            : (e(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Eb),
              this._weekdaysMinStrictRegex && M
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex);
        }
        function Qb() {
          function M(M, b) {
            return b.length - M.length;
          }
          var b,
            z,
            p,
            O,
            o,
            c = [],
            A = [],
            e = [],
            a = [];
          for (b = 0; b < 7; b++)
            (z = W([2e3, 1]).day(b)),
              (p = HM(this.weekdaysMin(z, ""))),
              (O = HM(this.weekdaysShort(z, ""))),
              (o = HM(this.weekdays(z, ""))),
              c.push(p),
              A.push(O),
              e.push(o),
              a.push(p),
              a.push(O),
              a.push(o);
          c.sort(M),
            A.sort(M),
            e.sort(M),
            a.sort(M),
            (this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              "^(" + e.join("|") + ")",
              "i",
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              "^(" + A.join("|") + ")",
              "i",
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              "^(" + c.join("|") + ")",
              "i",
            ));
        }
        function Zb() {
          return this.hours() % 12 || 12;
        }
        function $b() {
          return this.hours() || 24;
        }
        function Mz(M, b) {
          j(M, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), b);
          });
        }
        function bz(M, b) {
          return b._meridiemParse;
        }
        function zz(M) {
          return "p" === (M + "").toLowerCase().charAt(0);
        }
        j("H", ["HH", 2], 0, "hour"),
          j("h", ["hh", 2], 0, Zb),
          j("k", ["kk", 2], 0, $b),
          j("hmm", 0, 0, function () {
            return "" + Zb.apply(this) + S(this.minutes(), 2);
          }),
          j("hmmss", 0, 0, function () {
            return (
              "" + Zb.apply(this) + S(this.minutes(), 2) + S(this.seconds(), 2)
            );
          }),
          j("Hmm", 0, 0, function () {
            return "" + this.hours() + S(this.minutes(), 2);
          }),
          j("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + S(this.minutes(), 2) + S(this.seconds(), 2)
            );
          }),
          Mz("a", !0),
          Mz("A", !1),
          pM("hour", "h"),
          AM("hour", 13),
          wM("a", bz),
          wM("A", bz),
          wM("H", fM),
          wM("h", fM),
          wM("k", fM),
          wM("HH", fM, _M),
          wM("hh", fM, _M),
          wM("kk", fM, _M),
          wM("hmm", RM),
          wM("hmmss", hM),
          wM("Hmm", RM),
          wM("Hmmss", hM),
          PM(["H", "HH"], JM),
          PM(["k", "kk"], function (M, b, z) {
            var p = dM(M);
            b[JM] = 24 === p ? 0 : p;
          }),
          PM(["a", "A"], function (M, b, z) {
            (z._isPm = z._locale.isPM(M)), (z._meridiem = M);
          }),
          PM(["h", "hh"], function (M, b, z) {
            (b[JM] = dM(M)), (s(z).bigHour = !0);
          }),
          PM("hmm", function (M, b, z) {
            var p = M.length - 2;
            (b[JM] = dM(M.substr(0, p))),
              (b[GM] = dM(M.substr(p))),
              (s(z).bigHour = !0);
          }),
          PM("hmmss", function (M, b, z) {
            var p = M.length - 4,
              O = M.length - 2;
            (b[JM] = dM(M.substr(0, p))),
              (b[GM] = dM(M.substr(p, 2))),
              (b[KM] = dM(M.substr(O))),
              (s(z).bigHour = !0);
          }),
          PM("Hmm", function (M, b, z) {
            var p = M.length - 2;
            (b[JM] = dM(M.substr(0, p))), (b[GM] = dM(M.substr(p)));
          }),
          PM("Hmmss", function (M, b, z) {
            var p = M.length - 4,
              O = M.length - 2;
            (b[JM] = dM(M.substr(0, p))),
              (b[GM] = dM(M.substr(p, 2))),
              (b[KM] = dM(M.substr(O)));
          });
        var pz = /[ap]\.?m?\.?/i,
          Oz = nM("Hours", !0);
        function oz(M, b, z) {
          return M > 11 ? (z ? "pm" : "PM") : z ? "am" : "AM";
        }
        var cz,
          Az = {
            calendar: g,
            longDateFormat: U,
            invalidDate: G,
            ordinal: V,
            dayOfMonthOrdinalParse: Q,
            relativeTime: $,
            months: bb,
            monthsShort: zb,
            week: Bb,
            weekdays: gb,
            weekdaysMin: Sb,
            weekdaysShort: wb,
            meridiemParse: pz,
          },
          ez = {},
          az = {};
        function qz(M, b) {
          var z,
            p = Math.min(M.length, b.length);
          for (z = 0; z < p; z += 1) if (M[z] !== b[z]) return z;
          return p;
        }
        function dz(M) {
          return M ? M.toLowerCase().replace("_", "-") : M;
        }
        function nz(M) {
          for (var b, z, p, O, o = 0; o < M.length; ) {
            for (
              b = (O = dz(M[o]).split("-")).length,
                z = (z = dz(M[o + 1])) ? z.split("-") : null;
              b > 0;

            ) {
              if ((p = iz(O.slice(0, b).join("-")))) return p;
              if (z && z.length >= b && qz(O, z) >= b - 1) break;
              b--;
            }
            o++;
          }
          return cz;
        }
        function tz(M) {
          return null != M.match("^[^/\\\\]*$");
        }
        function iz(b) {
          var p = null;
          if (void 0 === ez[b] && M && M.exports && tz(b))
            try {
              (p = cz._abbr), z(46700)("./" + b), Wz(p);
            } catch (M) {
              ez[b] = null;
            }
          return ez[b];
        }
        function Wz(M, b) {
          var z;
          return (
            M &&
              ((z = q(b) ? uz(M) : rz(M, b))
                ? (cz = z)
                : "undefined" != typeof console &&
                  console.warn &&
                  console.warn(
                    "Locale " + M + " not found. Did you forget to load it?",
                  )),
            cz._abbr
          );
        }
        function rz(M, b) {
          if (null !== b) {
            var z,
              p = Az;
            if (((b.abbr = M), null != ez[M]))
              T(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.",
              ),
                (p = ez[M]._config);
            else if (null != b.parentLocale)
              if (null != ez[b.parentLocale]) p = ez[b.parentLocale]._config;
              else {
                if (null == (z = iz(b.parentLocale)))
                  return (
                    az[b.parentLocale] || (az[b.parentLocale] = []),
                    az[b.parentLocale].push({ name: M, config: b }),
                    null
                  );
                p = z._config;
              }
            return (
              (ez[M] = new k(D(p, b))),
              az[M] &&
                az[M].forEach(function (M) {
                  rz(M.name, M.config);
                }),
              Wz(M),
              ez[M]
            );
          }
          return delete ez[M], null;
        }
        function sz(M, b) {
          if (null != b) {
            var z,
              p,
              O = Az;
            null != ez[M] && null != ez[M].parentLocale
              ? ez[M].set(D(ez[M]._config, b))
              : (null != (p = iz(M)) && (O = p._config),
                (b = D(O, b)),
                null == p && (b.abbr = M),
                ((z = new k(b)).parentLocale = ez[M]),
                (ez[M] = z)),
              Wz(M);
          } else
            null != ez[M] &&
              (null != ez[M].parentLocale
                ? ((ez[M] = ez[M].parentLocale), M === Wz() && Wz(M))
                : null != ez[M] && delete ez[M]);
          return ez[M];
        }
        function uz(M) {
          var b;
          if ((M && M._locale && M._locale._abbr && (M = M._locale._abbr), !M))
            return cz;
          if (!c(M)) {
            if ((b = iz(M))) return b;
            M = [M];
          }
          return nz(M);
        }
        function _z() {
          return N(ez);
        }
        function Lz(M) {
          var b,
            z = M._a;
          return (
            z &&
              -2 === s(M).overflow &&
              ((b =
                z[IM] < 0 || z[IM] > 11
                  ? IM
                  : z[UM] < 1 || z[UM] > Mb(z[FM], z[IM])
                  ? UM
                  : z[JM] < 0 ||
                    z[JM] > 24 ||
                    (24 === z[JM] &&
                      (0 !== z[GM] || 0 !== z[KM] || 0 !== z[VM]))
                  ? JM
                  : z[GM] < 0 || z[GM] > 59
                  ? GM
                  : z[KM] < 0 || z[KM] > 59
                  ? KM
                  : z[VM] < 0 || z[VM] > 999
                  ? VM
                  : -1),
              s(M)._overflowDayOfYear && (b < FM || b > UM) && (b = UM),
              s(M)._overflowWeeks && -1 === b && (b = QM),
              s(M)._overflowWeekday && -1 === b && (b = ZM),
              (s(M).overflow = b)),
            M
          );
        }
        var mz =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          lz =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          fz = /Z|[+-]\d\d(?::?\d\d)?/,
          Rz = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1],
          ],
          hz = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          Bz = /^\/?Date\((-?\d+)/i,
          Nz =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          Xz = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
        function Tz(M) {
          var b,
            z,
            p,
            O,
            o,
            c,
            A = M._i,
            e = mz.exec(A) || lz.exec(A),
            a = Rz.length,
            q = hz.length;
          if (e) {
            for (s(M).iso = !0, b = 0, z = a; b < z; b++)
              if (Rz[b][1].exec(e[1])) {
                (O = Rz[b][0]), (p = !1 !== Rz[b][2]);
                break;
              }
            if (null == O) return void (M._isValid = !1);
            if (e[3]) {
              for (b = 0, z = q; b < z; b++)
                if (hz[b][1].exec(e[3])) {
                  o = (e[2] || " ") + hz[b][0];
                  break;
                }
              if (null == o) return void (M._isValid = !1);
            }
            if (!p && null != o) return void (M._isValid = !1);
            if (e[4]) {
              if (!fz.exec(e[4])) return void (M._isValid = !1);
              c = "Z";
            }
            (M._f = O + (o || "") + (c || "")), jz(M);
          } else M._isValid = !1;
        }
        function yz(M, b, z, p, O, o) {
          var c = [
            Yz(M),
            zb.indexOf(b),
            parseInt(z, 10),
            parseInt(p, 10),
            parseInt(O, 10),
          ];
          return o && c.push(parseInt(o, 10)), c;
        }
        function Yz(M) {
          var b = parseInt(M, 10);
          return b <= 49 ? 2e3 + b : b <= 999 ? 1900 + b : b;
        }
        function Dz(M) {
          return M.replace(/\([^()]*\)|[\n\t]/g, " ")
            .replace(/(\s\s+)/g, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        }
        function kz(M, b, z) {
          return (
            !M ||
            wb.indexOf(M) === new Date(b[0], b[1], b[2]).getDay() ||
            ((s(z).weekdayMismatch = !0), (z._isValid = !1), !1)
          );
        }
        function gz(M, b, z) {
          if (M) return Xz[M];
          if (b) return 0;
          var p = parseInt(z, 10),
            O = p % 100;
          return ((p - O) / 100) * 60 + O;
        }
        function wz(M) {
          var b,
            z = Nz.exec(Dz(M._i));
          if (z) {
            if (((b = yz(z[4], z[3], z[2], z[5], z[6], z[7])), !kz(z[1], b, M)))
              return;
            (M._a = b),
              (M._tzm = gz(z[8], z[9], z[10])),
              (M._d = Lb.apply(null, M._a)),
              M._d.setUTCMinutes(M._d.getUTCMinutes() - M._tzm),
              (s(M).rfc2822 = !0);
          } else M._isValid = !1;
        }
        function Sz(M) {
          var b = Bz.exec(M._i);
          null === b
            ? (Tz(M),
              !1 === M._isValid &&
                (delete M._isValid,
                wz(M),
                !1 === M._isValid &&
                  (delete M._isValid,
                  M._strict
                    ? (M._isValid = !1)
                    : O.createFromInputFallback(M))))
            : (M._d = new Date(+b[1]));
        }
        function vz(M, b, z) {
          return null != M ? M : null != b ? b : z;
        }
        function Hz(M) {
          var b = new Date(O.now());
          return M._useUTC
            ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()]
            : [b.getFullYear(), b.getMonth(), b.getDate()];
        }
        function Ez(M) {
          var b,
            z,
            p,
            O,
            o,
            c = [];
          if (!M._d) {
            for (
              p = Hz(M),
                M._w && null == M._a[UM] && null == M._a[IM] && Pz(M),
                null != M._dayOfYear &&
                  ((o = vz(M._a[FM], p[FM])),
                  (M._dayOfYear > rb(o) || 0 === M._dayOfYear) &&
                    (s(M)._overflowDayOfYear = !0),
                  (z = Lb(o, 0, M._dayOfYear)),
                  (M._a[IM] = z.getUTCMonth()),
                  (M._a[UM] = z.getUTCDate())),
                b = 0;
              b < 3 && null == M._a[b];
              ++b
            )
              M._a[b] = c[b] = p[b];
            for (; b < 7; b++)
              M._a[b] = c[b] = null == M._a[b] ? (2 === b ? 1 : 0) : M._a[b];
            24 === M._a[JM] &&
              0 === M._a[GM] &&
              0 === M._a[KM] &&
              0 === M._a[VM] &&
              ((M._nextDay = !0), (M._a[JM] = 0)),
              (M._d = (M._useUTC ? Lb : _b).apply(null, c)),
              (O = M._useUTC ? M._d.getUTCDay() : M._d.getDay()),
              null != M._tzm &&
                M._d.setUTCMinutes(M._d.getUTCMinutes() - M._tzm),
              M._nextDay && (M._a[JM] = 24),
              M._w &&
                void 0 !== M._w.d &&
                M._w.d !== O &&
                (s(M).weekdayMismatch = !0);
          }
        }
        function Pz(M) {
          var b, z, p, O, o, c, A, e, a;
          null != (b = M._w).GG || null != b.W || null != b.E
            ? ((o = 1),
              (c = 4),
              (z = vz(b.GG, M._a[FM], fb(Kz(), 1, 4).year)),
              (p = vz(b.W, 1)),
              ((O = vz(b.E, 1)) < 1 || O > 7) && (e = !0))
            : ((o = M._locale._week.dow),
              (c = M._locale._week.doy),
              (a = fb(Kz(), o, c)),
              (z = vz(b.gg, M._a[FM], a.year)),
              (p = vz(b.w, a.week)),
              null != b.d
                ? ((O = b.d) < 0 || O > 6) && (e = !0)
                : null != b.e
                ? ((O = b.e + o), (b.e < 0 || b.e > 6) && (e = !0))
                : (O = o)),
            p < 1 || p > Rb(z, o, c)
              ? (s(M)._overflowWeeks = !0)
              : null != e
              ? (s(M)._overflowWeekday = !0)
              : ((A = lb(z, p, O, o, c)),
                (M._a[FM] = A.year),
                (M._dayOfYear = A.dayOfYear));
        }
        function jz(M) {
          if (M._f !== O.ISO_8601)
            if (M._f !== O.RFC_2822) {
              (M._a = []), (s(M).empty = !0);
              var b,
                z,
                p,
                o,
                c,
                A,
                e,
                a = "" + M._i,
                q = a.length,
                d = 0;
              for (
                e = (p = I(M._f, M._locale).match(v) || []).length, b = 0;
                b < e;
                b++
              )
                (o = p[b]),
                  (z = (a.match(SM(o, M)) || [])[0]) &&
                    ((c = a.substr(0, a.indexOf(z))).length > 0 &&
                      s(M).unusedInput.push(c),
                    (a = a.slice(a.indexOf(z) + z.length)),
                    (d += z.length)),
                  P[o]
                    ? (z ? (s(M).empty = !1) : s(M).unusedTokens.push(o),
                      CM(o, z, M))
                    : M._strict && !z && s(M).unusedTokens.push(o);
              (s(M).charsLeftOver = q - d),
                a.length > 0 && s(M).unusedInput.push(a),
                M._a[JM] <= 12 &&
                  !0 === s(M).bigHour &&
                  M._a[JM] > 0 &&
                  (s(M).bigHour = void 0),
                (s(M).parsedDateParts = M._a.slice(0)),
                (s(M).meridiem = M._meridiem),
                (M._a[JM] = Cz(M._locale, M._a[JM], M._meridiem)),
                null !== (A = s(M).era) &&
                  (M._a[FM] = M._locale.erasConvertYear(A, M._a[FM])),
                Ez(M),
                Lz(M);
            } else wz(M);
          else Tz(M);
        }
        function Cz(M, b, z) {
          var p;
          return null == z
            ? b
            : null != M.meridiemHour
            ? M.meridiemHour(b, z)
            : null != M.isPM
            ? ((p = M.isPM(z)) && b < 12 && (b += 12),
              p || 12 !== b || (b = 0),
              b)
            : b;
        }
        function xz(M) {
          var b,
            z,
            p,
            O,
            o,
            c,
            A = !1,
            e = M._f.length;
          if (0 === e)
            return (s(M).invalidFormat = !0), void (M._d = new Date(NaN));
          for (O = 0; O < e; O++)
            (o = 0),
              (c = !1),
              (b = l({}, M)),
              null != M._useUTC && (b._useUTC = M._useUTC),
              (b._f = M._f[O]),
              jz(b),
              u(b) && (c = !0),
              (o += s(b).charsLeftOver),
              (o += 10 * s(b).unusedTokens.length),
              (s(b).score = o),
              A
                ? o < p && ((p = o), (z = b))
                : (null == p || o < p || c) &&
                  ((p = o), (z = b), c && (A = !0));
          i(M, z || b);
        }
        function Fz(M) {
          if (!M._d) {
            var b = oM(M._i),
              z = void 0 === b.day ? b.date : b.day;
            (M._a = t(
              [b.year, b.month, z, b.hour, b.minute, b.second, b.millisecond],
              function (M) {
                return M && parseInt(M, 10);
              },
            )),
              Ez(M);
          }
        }
        function Iz(M) {
          var b = new f(Lz(Uz(M)));
          return b._nextDay && (b.add(1, "d"), (b._nextDay = void 0)), b;
        }
        function Uz(M) {
          var b = M._i,
            z = M._f;
          return (
            (M._locale = M._locale || uz(M._l)),
            null === b || (void 0 === z && "" === b)
              ? _({ nullInput: !0 })
              : ("string" == typeof b && (M._i = b = M._locale.preparse(b)),
                R(b)
                  ? new f(Lz(b))
                  : (n(b) ? (M._d = b) : c(z) ? xz(M) : z ? jz(M) : Jz(M),
                    u(M) || (M._d = null),
                    M))
          );
        }
        function Jz(M) {
          var b = M._i;
          q(b)
            ? (M._d = new Date(O.now()))
            : n(b)
            ? (M._d = new Date(b.valueOf()))
            : "string" == typeof b
            ? Sz(M)
            : c(b)
            ? ((M._a = t(b.slice(0), function (M) {
                return parseInt(M, 10);
              })),
              Ez(M))
            : A(b)
            ? Fz(M)
            : d(b)
            ? (M._d = new Date(b))
            : O.createFromInputFallback(M);
        }
        function Gz(M, b, z, p, O) {
          var o = {};
          return (
            (!0 !== b && !1 !== b) || ((p = b), (b = void 0)),
            (!0 !== z && !1 !== z) || ((p = z), (z = void 0)),
            ((A(M) && a(M)) || (c(M) && 0 === M.length)) && (M = void 0),
            (o._isAMomentObject = !0),
            (o._useUTC = o._isUTC = O),
            (o._l = z),
            (o._i = M),
            (o._f = b),
            (o._strict = p),
            Iz(o)
          );
        }
        function Kz(M, b, z, p) {
          return Gz(M, b, z, p, !1);
        }
        (O.createFromInputFallback = B(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (M) {
            M._d = new Date(M._i + (M._useUTC ? " UTC" : ""));
          },
        )),
          (O.ISO_8601 = function () {}),
          (O.RFC_2822 = function () {});
        var Vz = B(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var M = Kz.apply(null, arguments);
              return this.isValid() && M.isValid()
                ? M < this
                  ? this
                  : M
                : _();
            },
          ),
          Qz = B(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var M = Kz.apply(null, arguments);
              return this.isValid() && M.isValid()
                ? M > this
                  ? this
                  : M
                : _();
            },
          );
        function Zz(M, b) {
          var z, p;
          if ((1 === b.length && c(b[0]) && (b = b[0]), !b.length)) return Kz();
          for (z = b[0], p = 1; p < b.length; ++p)
            (b[p].isValid() && !b[p][M](z)) || (z = b[p]);
          return z;
        }
        function $z() {
          return Zz("isBefore", [].slice.call(arguments, 0));
        }
        function Mp() {
          return Zz("isAfter", [].slice.call(arguments, 0));
        }
        var bp = function () {
            return Date.now ? Date.now() : +new Date();
          },
          zp = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
        function pp(M) {
          var b,
            z,
            p = !1,
            O = zp.length;
          for (b in M)
            if (
              e(M, b) &&
              (-1 === xM.call(zp, b) || (null != M[b] && isNaN(M[b])))
            )
              return !1;
          for (z = 0; z < O; ++z)
            if (M[zp[z]]) {
              if (p) return !1;
              parseFloat(M[zp[z]]) !== dM(M[zp[z]]) && (p = !0);
            }
          return !0;
        }
        function Op() {
          return this._isValid;
        }
        function op() {
          return Xp(NaN);
        }
        function cp(M) {
          var b = oM(M),
            z = b.year || 0,
            p = b.quarter || 0,
            O = b.month || 0,
            o = b.week || b.isoWeek || 0,
            c = b.day || 0,
            A = b.hour || 0,
            e = b.minute || 0,
            a = b.second || 0,
            q = b.millisecond || 0;
          (this._isValid = pp(b)),
            (this._milliseconds = +q + 1e3 * a + 6e4 * e + 1e3 * A * 60 * 60),
            (this._days = +c + 7 * o),
            (this._months = +O + 3 * p + 12 * z),
            (this._data = {}),
            (this._locale = uz()),
            this._bubble();
        }
        function Ap(M) {
          return M instanceof cp;
        }
        function ep(M) {
          return M < 0 ? -1 * Math.round(-1 * M) : Math.round(M);
        }
        function ap(M, b, z) {
          var p,
            O = Math.min(M.length, b.length),
            o = Math.abs(M.length - b.length),
            c = 0;
          for (p = 0; p < O; p++)
            ((z && M[p] !== b[p]) || (!z && dM(M[p]) !== dM(b[p]))) && c++;
          return c + o;
        }
        function qp(M, b) {
          j(M, 0, 0, function () {
            var M = this.utcOffset(),
              z = "+";
            return (
              M < 0 && ((M = -M), (z = "-")),
              z + S(~~(M / 60), 2) + b + S(~~M % 60, 2)
            );
          });
        }
        qp("Z", ":"),
          qp("ZZ", ""),
          wM("Z", DM),
          wM("ZZ", DM),
          PM(["Z", "ZZ"], function (M, b, z) {
            (z._useUTC = !0), (z._tzm = np(DM, M));
          });
        var dp = /([\+\-]|\d\d)/gi;
        function np(M, b) {
          var z,
            p,
            O = (b || "").match(M);
          return null === O
            ? null
            : 0 ===
              (p =
                60 *
                  (z = ((O[O.length - 1] || []) + "").match(dp) || [
                    "-",
                    0,
                    0,
                  ])[1] +
                dM(z[2]))
            ? 0
            : "+" === z[0]
            ? p
            : -p;
        }
        function tp(M, b) {
          var z, p;
          return b._isUTC
            ? ((z = b.clone()),
              (p =
                (R(M) || n(M) ? M.valueOf() : Kz(M).valueOf()) - z.valueOf()),
              z._d.setTime(z._d.valueOf() + p),
              O.updateOffset(z, !1),
              z)
            : Kz(M).local();
        }
        function ip(M) {
          return -Math.round(M._d.getTimezoneOffset());
        }
        function Wp(M, b, z) {
          var p,
            o = this._offset || 0;
          if (!this.isValid()) return null != M ? this : NaN;
          if (null != M) {
            if ("string" == typeof M) {
              if (null === (M = np(DM, M))) return this;
            } else Math.abs(M) < 16 && !z && (M *= 60);
            return (
              !this._isUTC && b && (p = ip(this)),
              (this._offset = M),
              (this._isUTC = !0),
              null != p && this.add(p, "m"),
              o !== M &&
                (!b || this._changeInProgress
                  ? kp(this, Xp(M - o, "m"), 1, !1)
                  : this._changeInProgress ||
                    ((this._changeInProgress = !0),
                    O.updateOffset(this, !0),
                    (this._changeInProgress = null))),
              this
            );
          }
          return this._isUTC ? o : ip(this);
        }
        function rp(M, b) {
          return null != M
            ? ("string" != typeof M && (M = -M), this.utcOffset(M, b), this)
            : -this.utcOffset();
        }
        function sp(M) {
          return this.utcOffset(0, M);
        }
        function up(M) {
          return (
            this._isUTC &&
              (this.utcOffset(0, M),
              (this._isUTC = !1),
              M && this.subtract(ip(this), "m")),
            this
          );
        }
        function _p() {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
          else if ("string" == typeof this._i) {
            var M = np(YM, this._i);
            null != M ? this.utcOffset(M) : this.utcOffset(0, !0);
          }
          return this;
        }
        function Lp(M) {
          return (
            !!this.isValid() &&
            ((M = M ? Kz(M).utcOffset() : 0), (this.utcOffset() - M) % 60 == 0)
          );
        }
        function mp() {
          return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
          );
        }
        function lp() {
          if (!q(this._isDSTShifted)) return this._isDSTShifted;
          var M,
            b = {};
          return (
            l(b, this),
            (b = Uz(b))._a
              ? ((M = b._isUTC ? W(b._a) : Kz(b._a)),
                (this._isDSTShifted =
                  this.isValid() && ap(b._a, M.toArray()) > 0))
              : (this._isDSTShifted = !1),
            this._isDSTShifted
          );
        }
        function fp() {
          return !!this.isValid() && !this._isUTC;
        }
        function Rp() {
          return !!this.isValid() && this._isUTC;
        }
        function hp() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        O.updateOffset = function () {};
        var Bp = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          Np =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function Xp(M, b) {
          var z,
            p,
            O,
            o = M,
            c = null;
          return (
            Ap(M)
              ? (o = { ms: M._milliseconds, d: M._days, M: M._months })
              : d(M) || !isNaN(+M)
              ? ((o = {}), b ? (o[b] = +M) : (o.milliseconds = +M))
              : (c = Bp.exec(M))
              ? ((z = "-" === c[1] ? -1 : 1),
                (o = {
                  y: 0,
                  d: dM(c[UM]) * z,
                  h: dM(c[JM]) * z,
                  m: dM(c[GM]) * z,
                  s: dM(c[KM]) * z,
                  ms: dM(ep(1e3 * c[VM])) * z,
                }))
              : (c = Np.exec(M))
              ? ((z = "-" === c[1] ? -1 : 1),
                (o = {
                  y: Tp(c[2], z),
                  M: Tp(c[3], z),
                  w: Tp(c[4], z),
                  d: Tp(c[5], z),
                  h: Tp(c[6], z),
                  m: Tp(c[7], z),
                  s: Tp(c[8], z),
                }))
              : null == o
              ? (o = {})
              : "object" == typeof o &&
                ("from" in o || "to" in o) &&
                ((O = Yp(Kz(o.from), Kz(o.to))),
                ((o = {}).ms = O.milliseconds),
                (o.M = O.months)),
            (p = new cp(o)),
            Ap(M) && e(M, "_locale") && (p._locale = M._locale),
            Ap(M) && e(M, "_isValid") && (p._isValid = M._isValid),
            p
          );
        }
        function Tp(M, b) {
          var z = M && parseFloat(M.replace(",", "."));
          return (isNaN(z) ? 0 : z) * b;
        }
        function yp(M, b) {
          var z = {};
          return (
            (z.months = b.month() - M.month() + 12 * (b.year() - M.year())),
            M.clone().add(z.months, "M").isAfter(b) && --z.months,
            (z.milliseconds = +b - +M.clone().add(z.months, "M")),
            z
          );
        }
        function Yp(M, b) {
          var z;
          return M.isValid() && b.isValid()
            ? ((b = tp(b, M)),
              M.isBefore(b)
                ? (z = yp(M, b))
                : (((z = yp(b, M)).milliseconds = -z.milliseconds),
                  (z.months = -z.months)),
              z)
            : { milliseconds: 0, months: 0 };
        }
        function Dp(M, b) {
          return function (z, p) {
            var O;
            return (
              null === p ||
                isNaN(+p) ||
                (T(
                  b,
                  "moment()." +
                    b +
                    "(period, number) is deprecated. Please use moment()." +
                    b +
                    "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.",
                ),
                (O = z),
                (z = p),
                (p = O)),
              kp(this, Xp(z, p), M),
              this
            );
          };
        }
        function kp(M, b, z, p) {
          var o = b._milliseconds,
            c = ep(b._days),
            A = ep(b._months);
          M.isValid() &&
            ((p = null == p || p),
            A && qb(M, tM(M, "Month") + A * z),
            c && iM(M, "Date", tM(M, "Date") + c * z),
            o && M._d.setTime(M._d.valueOf() + o * z),
            p && O.updateOffset(M, c || A));
        }
        (Xp.fn = cp.prototype), (Xp.invalid = op);
        var gp = Dp(1, "add"),
          wp = Dp(-1, "subtract");
        function Sp(M) {
          return "string" == typeof M || M instanceof String;
        }
        function vp(M) {
          return R(M) || n(M) || Sp(M) || d(M) || Ep(M) || Hp(M) || null == M;
        }
        function Hp(M) {
          var b,
            z,
            p = A(M) && !a(M),
            O = !1,
            o = [
              "years",
              "year",
              "y",
              "months",
              "month",
              "M",
              "days",
              "day",
              "d",
              "dates",
              "date",
              "D",
              "hours",
              "hour",
              "h",
              "minutes",
              "minute",
              "m",
              "seconds",
              "second",
              "s",
              "milliseconds",
              "millisecond",
              "ms",
            ],
            c = o.length;
          for (b = 0; b < c; b += 1) (z = o[b]), (O = O || e(M, z));
          return p && O;
        }
        function Ep(M) {
          var b = c(M),
            z = !1;
          return (
            b &&
              (z =
                0 ===
                M.filter(function (b) {
                  return !d(b) && Sp(M);
                }).length),
            b && z
          );
        }
        function Pp(M) {
          var b,
            z,
            p = A(M) && !a(M),
            O = !1,
            o = [
              "sameDay",
              "nextDay",
              "lastDay",
              "nextWeek",
              "lastWeek",
              "sameElse",
            ];
          for (b = 0; b < o.length; b += 1) (z = o[b]), (O = O || e(M, z));
          return p && O;
        }
        function jp(M, b) {
          var z = M.diff(b, "days", !0);
          return z < -6
            ? "sameElse"
            : z < -1
            ? "lastWeek"
            : z < 0
            ? "lastDay"
            : z < 1
            ? "sameDay"
            : z < 2
            ? "nextDay"
            : z < 7
            ? "nextWeek"
            : "sameElse";
        }
        function Cp(M, b) {
          1 === arguments.length &&
            (arguments[0]
              ? vp(arguments[0])
                ? ((M = arguments[0]), (b = void 0))
                : Pp(arguments[0]) && ((b = arguments[0]), (M = void 0))
              : ((M = void 0), (b = void 0)));
          var z = M || Kz(),
            p = tp(z, this).startOf("day"),
            o = O.calendarFormat(this, p) || "sameElse",
            c = b && (y(b[o]) ? b[o].call(this, z) : b[o]);
          return this.format(c || this.localeData().calendar(o, this, Kz(z)));
        }
        function xp() {
          return new f(this);
        }
        function Fp(M, b) {
          var z = R(M) ? M : Kz(M);
          return (
            !(!this.isValid() || !z.isValid()) &&
            ("millisecond" === (b = OM(b) || "millisecond")
              ? this.valueOf() > z.valueOf()
              : z.valueOf() < this.clone().startOf(b).valueOf())
          );
        }
        function Ip(M, b) {
          var z = R(M) ? M : Kz(M);
          return (
            !(!this.isValid() || !z.isValid()) &&
            ("millisecond" === (b = OM(b) || "millisecond")
              ? this.valueOf() < z.valueOf()
              : this.clone().endOf(b).valueOf() < z.valueOf())
          );
        }
        function Up(M, b, z, p) {
          var O = R(M) ? M : Kz(M),
            o = R(b) ? b : Kz(b);
          return (
            !!(this.isValid() && O.isValid() && o.isValid()) &&
            ("(" === (p = p || "()")[0]
              ? this.isAfter(O, z)
              : !this.isBefore(O, z)) &&
            (")" === p[1] ? this.isBefore(o, z) : !this.isAfter(o, z))
          );
        }
        function Jp(M, b) {
          var z,
            p = R(M) ? M : Kz(M);
          return (
            !(!this.isValid() || !p.isValid()) &&
            ("millisecond" === (b = OM(b) || "millisecond")
              ? this.valueOf() === p.valueOf()
              : ((z = p.valueOf()),
                this.clone().startOf(b).valueOf() <= z &&
                  z <= this.clone().endOf(b).valueOf()))
          );
        }
        function Gp(M, b) {
          return this.isSame(M, b) || this.isAfter(M, b);
        }
        function Kp(M, b) {
          return this.isSame(M, b) || this.isBefore(M, b);
        }
        function Vp(M, b, z) {
          var p, O, o;
          if (!this.isValid()) return NaN;
          if (!(p = tp(M, this)).isValid()) return NaN;
          switch (
            ((O = 6e4 * (p.utcOffset() - this.utcOffset())), (b = OM(b)))
          ) {
            case "year":
              o = Qp(this, p) / 12;
              break;
            case "month":
              o = Qp(this, p);
              break;
            case "quarter":
              o = Qp(this, p) / 3;
              break;
            case "second":
              o = (this - p) / 1e3;
              break;
            case "minute":
              o = (this - p) / 6e4;
              break;
            case "hour":
              o = (this - p) / 36e5;
              break;
            case "day":
              o = (this - p - O) / 864e5;
              break;
            case "week":
              o = (this - p - O) / 6048e5;
              break;
            default:
              o = this - p;
          }
          return z ? o : qM(o);
        }
        function Qp(M, b) {
          if (M.date() < b.date()) return -Qp(b, M);
          var z = 12 * (b.year() - M.year()) + (b.month() - M.month()),
            p = M.clone().add(z, "months");
          return (
            -(
              z +
              (b - p < 0
                ? (b - p) / (p - M.clone().add(z - 1, "months"))
                : (b - p) / (M.clone().add(z + 1, "months") - p))
            ) || 0
          );
        }
        function Zp() {
          return this.clone()
            .locale("en")
            .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function $p(M) {
          if (!this.isValid()) return null;
          var b = !0 !== M,
            z = b ? this.clone().utc() : this;
          return z.year() < 0 || z.year() > 9999
            ? F(
                z,
                b
                  ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                  : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ",
              )
            : y(Date.prototype.toISOString)
            ? b
              ? this.toDate().toISOString()
              : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                  .toISOString()
                  .replace("Z", F(z, "Z"))
            : F(
                z,
                b
                  ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                  : "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
              );
        }
        function MO() {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var M,
            b,
            z,
            p,
            O = "moment",
            o = "";
          return (
            this.isLocal() ||
              ((O = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
              (o = "Z")),
            (M = "[" + O + '("]'),
            (b = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
            (z = "-MM-DD[T]HH:mm:ss.SSS"),
            (p = o + '[")]'),
            this.format(M + b + z + p)
          );
        }
        function bO(M) {
          M || (M = this.isUtc() ? O.defaultFormatUtc : O.defaultFormat);
          var b = F(this, M);
          return this.localeData().postformat(b);
        }
        function zO(M, b) {
          return this.isValid() && ((R(M) && M.isValid()) || Kz(M).isValid())
            ? Xp({ to: this, from: M }).locale(this.locale()).humanize(!b)
            : this.localeData().invalidDate();
        }
        function pO(M) {
          return this.from(Kz(), M);
        }
        function OO(M, b) {
          return this.isValid() && ((R(M) && M.isValid()) || Kz(M).isValid())
            ? Xp({ from: this, to: M }).locale(this.locale()).humanize(!b)
            : this.localeData().invalidDate();
        }
        function oO(M) {
          return this.to(Kz(), M);
        }
        function cO(M) {
          var b;
          return void 0 === M
            ? this._locale._abbr
            : (null != (b = uz(M)) && (this._locale = b), this);
        }
        (O.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (O.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var AO = B(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function (M) {
            return void 0 === M ? this.localeData() : this.locale(M);
          },
        );
        function eO() {
          return this._locale;
        }
        var aO = 1e3,
          qO = 60 * aO,
          dO = 60 * qO,
          nO = 3506328 * dO;
        function tO(M, b) {
          return ((M % b) + b) % b;
        }
        function iO(M, b, z) {
          return M < 100 && M >= 0
            ? new Date(M + 400, b, z) - nO
            : new Date(M, b, z).valueOf();
        }
        function WO(M, b, z) {
          return M < 100 && M >= 0
            ? Date.UTC(M + 400, b, z) - nO
            : Date.UTC(M, b, z);
        }
        function rO(M) {
          var b, z;
          if (void 0 === (M = OM(M)) || "millisecond" === M || !this.isValid())
            return this;
          switch (((z = this._isUTC ? WO : iO), M)) {
            case "year":
              b = z(this.year(), 0, 1);
              break;
            case "quarter":
              b = z(this.year(), this.month() - (this.month() % 3), 1);
              break;
            case "month":
              b = z(this.year(), this.month(), 1);
              break;
            case "week":
              b = z(this.year(), this.month(), this.date() - this.weekday());
              break;
            case "isoWeek":
              b = z(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1),
              );
              break;
            case "day":
            case "date":
              b = z(this.year(), this.month(), this.date());
              break;
            case "hour":
              (b = this._d.valueOf()),
                (b -= tO(b + (this._isUTC ? 0 : this.utcOffset() * qO), dO));
              break;
            case "minute":
              (b = this._d.valueOf()), (b -= tO(b, qO));
              break;
            case "second":
              (b = this._d.valueOf()), (b -= tO(b, aO));
          }
          return this._d.setTime(b), O.updateOffset(this, !0), this;
        }
        function sO(M) {
          var b, z;
          if (void 0 === (M = OM(M)) || "millisecond" === M || !this.isValid())
            return this;
          switch (((z = this._isUTC ? WO : iO), M)) {
            case "year":
              b = z(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              b = z(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
              break;
            case "month":
              b = z(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              b =
                z(this.year(), this.month(), this.date() - this.weekday() + 7) -
                1;
              break;
            case "isoWeek":
              b =
                z(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1) + 7,
                ) - 1;
              break;
            case "day":
            case "date":
              b = z(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              (b = this._d.valueOf()),
                (b +=
                  dO -
                  tO(b + (this._isUTC ? 0 : this.utcOffset() * qO), dO) -
                  1);
              break;
            case "minute":
              (b = this._d.valueOf()), (b += qO - tO(b, qO) - 1);
              break;
            case "second":
              (b = this._d.valueOf()), (b += aO - tO(b, aO) - 1);
          }
          return this._d.setTime(b), O.updateOffset(this, !0), this;
        }
        function uO() {
          return this._d.valueOf() - 6e4 * (this._offset || 0);
        }
        function _O() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function LO() {
          return new Date(this.valueOf());
        }
        function mO() {
          var M = this;
          return [
            M.year(),
            M.month(),
            M.date(),
            M.hour(),
            M.minute(),
            M.second(),
            M.millisecond(),
          ];
        }
        function lO() {
          var M = this;
          return {
            years: M.year(),
            months: M.month(),
            date: M.date(),
            hours: M.hours(),
            minutes: M.minutes(),
            seconds: M.seconds(),
            milliseconds: M.milliseconds(),
          };
        }
        function fO() {
          return this.isValid() ? this.toISOString() : null;
        }
        function RO() {
          return u(this);
        }
        function hO() {
          return i({}, s(this));
        }
        function BO() {
          return s(this).overflow;
        }
        function NO() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
          };
        }
        function XO(M, b) {
          var z,
            p,
            o,
            c = this._eras || uz("en")._eras;
          for (z = 0, p = c.length; z < p; ++z)
            switch (
              ("string" == typeof c[z].since &&
                ((o = O(c[z].since).startOf("day")),
                (c[z].since = o.valueOf())),
              typeof c[z].until)
            ) {
              case "undefined":
                c[z].until = 1 / 0;
                break;
              case "string":
                (o = O(c[z].until).startOf("day").valueOf()),
                  (c[z].until = o.valueOf());
            }
          return c;
        }
        function TO(M, b, z) {
          var p,
            O,
            o,
            c,
            A,
            e = this.eras();
          for (M = M.toUpperCase(), p = 0, O = e.length; p < O; ++p)
            if (
              ((o = e[p].name.toUpperCase()),
              (c = e[p].abbr.toUpperCase()),
              (A = e[p].narrow.toUpperCase()),
              z)
            )
              switch (b) {
                case "N":
                case "NN":
                case "NNN":
                  if (c === M) return e[p];
                  break;
                case "NNNN":
                  if (o === M) return e[p];
                  break;
                case "NNNNN":
                  if (A === M) return e[p];
              }
            else if ([o, c, A].indexOf(M) >= 0) return e[p];
        }
        function yO(M, b) {
          var z = M.since <= M.until ? 1 : -1;
          return void 0 === b
            ? O(M.since).year()
            : O(M.since).year() + (b - M.offset) * z;
        }
        function YO() {
          var M,
            b,
            z,
            p = this.localeData().eras();
          for (M = 0, b = p.length; M < b; ++M) {
            if (
              ((z = this.clone().startOf("day").valueOf()),
              p[M].since <= z && z <= p[M].until)
            )
              return p[M].name;
            if (p[M].until <= z && z <= p[M].since) return p[M].name;
          }
          return "";
        }
        function DO() {
          var M,
            b,
            z,
            p = this.localeData().eras();
          for (M = 0, b = p.length; M < b; ++M) {
            if (
              ((z = this.clone().startOf("day").valueOf()),
              p[M].since <= z && z <= p[M].until)
            )
              return p[M].narrow;
            if (p[M].until <= z && z <= p[M].since) return p[M].narrow;
          }
          return "";
        }
        function kO() {
          var M,
            b,
            z,
            p = this.localeData().eras();
          for (M = 0, b = p.length; M < b; ++M) {
            if (
              ((z = this.clone().startOf("day").valueOf()),
              p[M].since <= z && z <= p[M].until)
            )
              return p[M].abbr;
            if (p[M].until <= z && z <= p[M].since) return p[M].abbr;
          }
          return "";
        }
        function gO() {
          var M,
            b,
            z,
            p,
            o = this.localeData().eras();
          for (M = 0, b = o.length; M < b; ++M)
            if (
              ((z = o[M].since <= o[M].until ? 1 : -1),
              (p = this.clone().startOf("day").valueOf()),
              (o[M].since <= p && p <= o[M].until) ||
                (o[M].until <= p && p <= o[M].since))
            )
              return (this.year() - O(o[M].since).year()) * z + o[M].offset;
          return this.year();
        }
        function wO(M) {
          return (
            e(this, "_erasNameRegex") || CO.call(this),
            M ? this._erasNameRegex : this._erasRegex
          );
        }
        function SO(M) {
          return (
            e(this, "_erasAbbrRegex") || CO.call(this),
            M ? this._erasAbbrRegex : this._erasRegex
          );
        }
        function vO(M) {
          return (
            e(this, "_erasNarrowRegex") || CO.call(this),
            M ? this._erasNarrowRegex : this._erasRegex
          );
        }
        function HO(M, b) {
          return b.erasAbbrRegex(M);
        }
        function EO(M, b) {
          return b.erasNameRegex(M);
        }
        function PO(M, b) {
          return b.erasNarrowRegex(M);
        }
        function jO(M, b) {
          return b._eraYearOrdinalRegex || TM;
        }
        function CO() {
          var M,
            b,
            z = [],
            p = [],
            O = [],
            o = [],
            c = this.eras();
          for (M = 0, b = c.length; M < b; ++M)
            p.push(HM(c[M].name)),
              z.push(HM(c[M].abbr)),
              O.push(HM(c[M].narrow)),
              o.push(HM(c[M].name)),
              o.push(HM(c[M].abbr)),
              o.push(HM(c[M].narrow));
          (this._erasRegex = new RegExp("^(" + o.join("|") + ")", "i")),
            (this._erasNameRegex = new RegExp("^(" + p.join("|") + ")", "i")),
            (this._erasAbbrRegex = new RegExp("^(" + z.join("|") + ")", "i")),
            (this._erasNarrowRegex = new RegExp("^(" + O.join("|") + ")", "i"));
        }
        function xO(M, b) {
          j(0, [M, M.length], 0, b);
        }
        function FO(M) {
          return VO.call(
            this,
            M,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy,
          );
        }
        function IO(M) {
          return VO.call(this, M, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function UO() {
          return Rb(this.year(), 1, 4);
        }
        function JO() {
          return Rb(this.isoWeekYear(), 1, 4);
        }
        function GO() {
          var M = this.localeData()._week;
          return Rb(this.year(), M.dow, M.doy);
        }
        function KO() {
          var M = this.localeData()._week;
          return Rb(this.weekYear(), M.dow, M.doy);
        }
        function VO(M, b, z, p, O) {
          var o;
          return null == M
            ? fb(this, p, O).year
            : (b > (o = Rb(M, p, O)) && (b = o), QO.call(this, M, b, z, p, O));
        }
        function QO(M, b, z, p, O) {
          var o = lb(M, b, z, p, O),
            c = Lb(o.year, 0, o.dayOfYear);
          return (
            this.year(c.getUTCFullYear()),
            this.month(c.getUTCMonth()),
            this.date(c.getUTCDate()),
            this
          );
        }
        function ZO(M) {
          return null == M
            ? Math.ceil((this.month() + 1) / 3)
            : this.month(3 * (M - 1) + (this.month() % 3));
        }
        j("N", 0, 0, "eraAbbr"),
          j("NN", 0, 0, "eraAbbr"),
          j("NNN", 0, 0, "eraAbbr"),
          j("NNNN", 0, 0, "eraName"),
          j("NNNNN", 0, 0, "eraNarrow"),
          j("y", ["y", 1], "yo", "eraYear"),
          j("y", ["yy", 2], 0, "eraYear"),
          j("y", ["yyy", 3], 0, "eraYear"),
          j("y", ["yyyy", 4], 0, "eraYear"),
          wM("N", HO),
          wM("NN", HO),
          wM("NNN", HO),
          wM("NNNN", EO),
          wM("NNNNN", PO),
          PM(["N", "NN", "NNN", "NNNN", "NNNNN"], function (M, b, z, p) {
            var O = z._locale.erasParse(M, p, z._strict);
            O ? (s(z).era = O) : (s(z).invalidEra = M);
          }),
          wM("y", TM),
          wM("yy", TM),
          wM("yyy", TM),
          wM("yyyy", TM),
          wM("yo", jO),
          PM(["y", "yy", "yyy", "yyyy"], FM),
          PM(["yo"], function (M, b, z, p) {
            var O;
            z._locale._eraYearOrdinalRegex &&
              (O = M.match(z._locale._eraYearOrdinalRegex)),
              z._locale.eraYearOrdinalParse
                ? (b[FM] = z._locale.eraYearOrdinalParse(M, O))
                : (b[FM] = parseInt(M, 10));
          }),
          j(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
          j(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          xO("gggg", "weekYear"),
          xO("ggggg", "weekYear"),
          xO("GGGG", "isoWeekYear"),
          xO("GGGGG", "isoWeekYear"),
          pM("weekYear", "gg"),
          pM("isoWeekYear", "GG"),
          AM("weekYear", 1),
          AM("isoWeekYear", 1),
          wM("G", yM),
          wM("g", yM),
          wM("GG", fM, _M),
          wM("gg", fM, _M),
          wM("GGGG", NM, mM),
          wM("gggg", NM, mM),
          wM("GGGGG", XM, lM),
          wM("ggggg", XM, lM),
          jM(["gggg", "ggggg", "GGGG", "GGGGG"], function (M, b, z, p) {
            b[p.substr(0, 2)] = dM(M);
          }),
          jM(["gg", "GG"], function (M, b, z, p) {
            b[p] = O.parseTwoDigitYear(M);
          }),
          j("Q", 0, "Qo", "quarter"),
          pM("quarter", "Q"),
          AM("quarter", 7),
          wM("Q", uM),
          PM("Q", function (M, b) {
            b[IM] = 3 * (dM(M) - 1);
          }),
          j("D", ["DD", 2], "Do", "date"),
          pM("date", "D"),
          AM("date", 9),
          wM("D", fM),
          wM("DD", fM, _M),
          wM("Do", function (M, b) {
            return M
              ? b._dayOfMonthOrdinalParse || b._ordinalParse
              : b._dayOfMonthOrdinalParseLenient;
          }),
          PM(["D", "DD"], UM),
          PM("Do", function (M, b) {
            b[UM] = dM(M.match(fM)[0]);
          });
        var $O = nM("Date", !0);
        function Mo(M) {
          var b =
            Math.round(
              (this.clone().startOf("day") - this.clone().startOf("year")) /
                864e5,
            ) + 1;
          return null == M ? b : this.add(M - b, "d");
        }
        j("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          pM("dayOfYear", "DDD"),
          AM("dayOfYear", 4),
          wM("DDD", BM),
          wM("DDDD", LM),
          PM(["DDD", "DDDD"], function (M, b, z) {
            z._dayOfYear = dM(M);
          }),
          j("m", ["mm", 2], 0, "minute"),
          pM("minute", "m"),
          AM("minute", 14),
          wM("m", fM),
          wM("mm", fM, _M),
          PM(["m", "mm"], GM);
        var bo = nM("Minutes", !1);
        j("s", ["ss", 2], 0, "second"),
          pM("second", "s"),
          AM("second", 15),
          wM("s", fM),
          wM("ss", fM, _M),
          PM(["s", "ss"], KM);
        var zo,
          po,
          Oo = nM("Seconds", !1);
        for (
          j("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
          }),
            j(0, ["SS", 2], 0, function () {
              return ~~(this.millisecond() / 10);
            }),
            j(0, ["SSS", 3], 0, "millisecond"),
            j(0, ["SSSS", 4], 0, function () {
              return 10 * this.millisecond();
            }),
            j(0, ["SSSSS", 5], 0, function () {
              return 100 * this.millisecond();
            }),
            j(0, ["SSSSSS", 6], 0, function () {
              return 1e3 * this.millisecond();
            }),
            j(0, ["SSSSSSS", 7], 0, function () {
              return 1e4 * this.millisecond();
            }),
            j(0, ["SSSSSSSS", 8], 0, function () {
              return 1e5 * this.millisecond();
            }),
            j(0, ["SSSSSSSSS", 9], 0, function () {
              return 1e6 * this.millisecond();
            }),
            pM("millisecond", "ms"),
            AM("millisecond", 16),
            wM("S", BM, uM),
            wM("SS", BM, _M),
            wM("SSS", BM, LM),
            zo = "SSSS";
          zo.length <= 9;
          zo += "S"
        )
          wM(zo, TM);
        function oo(M, b) {
          b[VM] = dM(1e3 * ("0." + M));
        }
        for (zo = "S"; zo.length <= 9; zo += "S") PM(zo, oo);
        function co() {
          return this._isUTC ? "UTC" : "";
        }
        function Ao() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        (po = nM("Milliseconds", !1)),
          j("z", 0, 0, "zoneAbbr"),
          j("zz", 0, 0, "zoneName");
        var eo = f.prototype;
        function ao(M) {
          return Kz(1e3 * M);
        }
        function qo() {
          return Kz.apply(null, arguments).parseZone();
        }
        function no(M) {
          return M;
        }
        (eo.add = gp),
          (eo.calendar = Cp),
          (eo.clone = xp),
          (eo.diff = Vp),
          (eo.endOf = sO),
          (eo.format = bO),
          (eo.from = zO),
          (eo.fromNow = pO),
          (eo.to = OO),
          (eo.toNow = oO),
          (eo.get = WM),
          (eo.invalidAt = BO),
          (eo.isAfter = Fp),
          (eo.isBefore = Ip),
          (eo.isBetween = Up),
          (eo.isSame = Jp),
          (eo.isSameOrAfter = Gp),
          (eo.isSameOrBefore = Kp),
          (eo.isValid = RO),
          (eo.lang = AO),
          (eo.locale = cO),
          (eo.localeData = eO),
          (eo.max = Qz),
          (eo.min = Vz),
          (eo.parsingFlags = hO),
          (eo.set = rM),
          (eo.startOf = rO),
          (eo.subtract = wp),
          (eo.toArray = mO),
          (eo.toObject = lO),
          (eo.toDate = LO),
          (eo.toISOString = $p),
          (eo.inspect = MO),
          "undefined" != typeof Symbol &&
            null != Symbol.for &&
            (eo[Symbol.for("nodejs.util.inspect.custom")] = function () {
              return "Moment<" + this.format() + ">";
            }),
          (eo.toJSON = fO),
          (eo.toString = Zp),
          (eo.unix = _O),
          (eo.valueOf = uO),
          (eo.creationData = NO),
          (eo.eraName = YO),
          (eo.eraNarrow = DO),
          (eo.eraAbbr = kO),
          (eo.eraYear = gO),
          (eo.year = sb),
          (eo.isLeapYear = ub),
          (eo.weekYear = FO),
          (eo.isoWeekYear = IO),
          (eo.quarter = eo.quarters = ZO),
          (eo.month = db),
          (eo.daysInMonth = nb),
          (eo.week = eo.weeks = Tb),
          (eo.isoWeek = eo.isoWeeks = yb),
          (eo.weeksInYear = GO),
          (eo.weeksInWeekYear = KO),
          (eo.isoWeeksInYear = UO),
          (eo.isoWeeksInISOWeekYear = JO),
          (eo.date = $O),
          (eo.day = eo.days = Ib),
          (eo.weekday = Ub),
          (eo.isoWeekday = Jb),
          (eo.dayOfYear = Mo),
          (eo.hour = eo.hours = Oz),
          (eo.minute = eo.minutes = bo),
          (eo.second = eo.seconds = Oo),
          (eo.millisecond = eo.milliseconds = po),
          (eo.utcOffset = Wp),
          (eo.utc = sp),
          (eo.local = up),
          (eo.parseZone = _p),
          (eo.hasAlignedHourOffset = Lp),
          (eo.isDST = mp),
          (eo.isLocal = fp),
          (eo.isUtcOffset = Rp),
          (eo.isUtc = hp),
          (eo.isUTC = hp),
          (eo.zoneAbbr = co),
          (eo.zoneName = Ao),
          (eo.dates = B("dates accessor is deprecated. Use date instead.", $O)),
          (eo.months = B(
            "months accessor is deprecated. Use month instead",
            db,
          )),
          (eo.years = B("years accessor is deprecated. Use year instead", sb)),
          (eo.zone = B(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            rp,
          )),
          (eo.isDSTShifted = B(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            lp,
          ));
        var to = k.prototype;
        function io(M, b, z, p) {
          var O = uz(),
            o = W().set(p, b);
          return O[z](o, M);
        }
        function Wo(M, b, z) {
          if ((d(M) && ((b = M), (M = void 0)), (M = M || ""), null != b))
            return io(M, b, z, "month");
          var p,
            O = [];
          for (p = 0; p < 12; p++) O[p] = io(M, p, z, "month");
          return O;
        }
        function ro(M, b, z, p) {
          "boolean" == typeof M
            ? (d(b) && ((z = b), (b = void 0)), (b = b || ""))
            : ((z = b = M),
              (M = !1),
              d(b) && ((z = b), (b = void 0)),
              (b = b || ""));
          var O,
            o = uz(),
            c = M ? o._week.dow : 0,
            A = [];
          if (null != z) return io(b, (z + c) % 7, p, "day");
          for (O = 0; O < 7; O++) A[O] = io(b, (O + c) % 7, p, "day");
          return A;
        }
        function so(M, b) {
          return Wo(M, b, "months");
        }
        function uo(M, b) {
          return Wo(M, b, "monthsShort");
        }
        function _o(M, b, z) {
          return ro(M, b, z, "weekdays");
        }
        function Lo(M, b, z) {
          return ro(M, b, z, "weekdaysShort");
        }
        function mo(M, b, z) {
          return ro(M, b, z, "weekdaysMin");
        }
        (to.calendar = w),
          (to.longDateFormat = J),
          (to.invalidDate = K),
          (to.ordinal = Z),
          (to.preparse = no),
          (to.postformat = no),
          (to.relativeTime = MM),
          (to.pastFuture = bM),
          (to.set = Y),
          (to.eras = XO),
          (to.erasParse = TO),
          (to.erasConvertYear = yO),
          (to.erasAbbrRegex = SO),
          (to.erasNameRegex = wO),
          (to.erasNarrowRegex = vO),
          (to.months = cb),
          (to.monthsShort = Ab),
          (to.monthsParse = ab),
          (to.monthsRegex = ib),
          (to.monthsShortRegex = tb),
          (to.week = hb),
          (to.firstDayOfYear = Xb),
          (to.firstDayOfWeek = Nb),
          (to.weekdays = Pb),
          (to.weekdaysMin = Cb),
          (to.weekdaysShort = jb),
          (to.weekdaysParse = Fb),
          (to.weekdaysRegex = Gb),
          (to.weekdaysShortRegex = Kb),
          (to.weekdaysMinRegex = Vb),
          (to.isPM = zz),
          (to.meridiem = oz),
          Wz("en", {
            eras: [
              {
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (M) {
              var b = M % 10;
              return (
                M +
                (1 === dM((M % 100) / 10)
                  ? "th"
                  : 1 === b
                  ? "st"
                  : 2 === b
                  ? "nd"
                  : 3 === b
                  ? "rd"
                  : "th")
              );
            },
          }),
          (O.lang = B(
            "moment.lang is deprecated. Use moment.locale instead.",
            Wz,
          )),
          (O.langData = B(
            "moment.langData is deprecated. Use moment.localeData instead.",
            uz,
          ));
        var lo = Math.abs;
        function fo() {
          var M = this._data;
          return (
            (this._milliseconds = lo(this._milliseconds)),
            (this._days = lo(this._days)),
            (this._months = lo(this._months)),
            (M.milliseconds = lo(M.milliseconds)),
            (M.seconds = lo(M.seconds)),
            (M.minutes = lo(M.minutes)),
            (M.hours = lo(M.hours)),
            (M.months = lo(M.months)),
            (M.years = lo(M.years)),
            this
          );
        }
        function Ro(M, b, z, p) {
          var O = Xp(b, z);
          return (
            (M._milliseconds += p * O._milliseconds),
            (M._days += p * O._days),
            (M._months += p * O._months),
            M._bubble()
          );
        }
        function ho(M, b) {
          return Ro(this, M, b, 1);
        }
        function Bo(M, b) {
          return Ro(this, M, b, -1);
        }
        function No(M) {
          return M < 0 ? Math.floor(M) : Math.ceil(M);
        }
        function Xo() {
          var M,
            b,
            z,
            p,
            O,
            o = this._milliseconds,
            c = this._days,
            A = this._months,
            e = this._data;
          return (
            (o >= 0 && c >= 0 && A >= 0) ||
              (o <= 0 && c <= 0 && A <= 0) ||
              ((o += 864e5 * No(yo(A) + c)), (c = 0), (A = 0)),
            (e.milliseconds = o % 1e3),
            (M = qM(o / 1e3)),
            (e.seconds = M % 60),
            (b = qM(M / 60)),
            (e.minutes = b % 60),
            (z = qM(b / 60)),
            (e.hours = z % 24),
            (c += qM(z / 24)),
            (A += O = qM(To(c))),
            (c -= No(yo(O))),
            (p = qM(A / 12)),
            (A %= 12),
            (e.days = c),
            (e.months = A),
            (e.years = p),
            this
          );
        }
        function To(M) {
          return (4800 * M) / 146097;
        }
        function yo(M) {
          return (146097 * M) / 4800;
        }
        function Yo(M) {
          if (!this.isValid()) return NaN;
          var b,
            z,
            p = this._milliseconds;
          if ("month" === (M = OM(M)) || "quarter" === M || "year" === M)
            switch (
              ((b = this._days + p / 864e5), (z = this._months + To(b)), M)
            ) {
              case "month":
                return z;
              case "quarter":
                return z / 3;
              case "year":
                return z / 12;
            }
          else
            switch (((b = this._days + Math.round(yo(this._months))), M)) {
              case "week":
                return b / 7 + p / 6048e5;
              case "day":
                return b + p / 864e5;
              case "hour":
                return 24 * b + p / 36e5;
              case "minute":
                return 1440 * b + p / 6e4;
              case "second":
                return 86400 * b + p / 1e3;
              case "millisecond":
                return Math.floor(864e5 * b) + p;
              default:
                throw new Error("Unknown unit " + M);
            }
        }
        function Do() {
          return this.isValid()
            ? this._milliseconds +
                864e5 * this._days +
                (this._months % 12) * 2592e6 +
                31536e6 * dM(this._months / 12)
            : NaN;
        }
        function ko(M) {
          return function () {
            return this.as(M);
          };
        }
        var go = ko("ms"),
          wo = ko("s"),
          So = ko("m"),
          vo = ko("h"),
          Ho = ko("d"),
          Eo = ko("w"),
          Po = ko("M"),
          jo = ko("Q"),
          Co = ko("y");
        function xo() {
          return Xp(this);
        }
        function Fo(M) {
          return (M = OM(M)), this.isValid() ? this[M + "s"]() : NaN;
        }
        function Io(M) {
          return function () {
            return this.isValid() ? this._data[M] : NaN;
          };
        }
        var Uo = Io("milliseconds"),
          Jo = Io("seconds"),
          Go = Io("minutes"),
          Ko = Io("hours"),
          Vo = Io("days"),
          Qo = Io("months"),
          Zo = Io("years");
        function $o() {
          return qM(this.days() / 7);
        }
        var Mc = Math.round,
          bc = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
        function zc(M, b, z, p, O) {
          return O.relativeTime(b || 1, !!z, M, p);
        }
        function pc(M, b, z, p) {
          var O = Xp(M).abs(),
            o = Mc(O.as("s")),
            c = Mc(O.as("m")),
            A = Mc(O.as("h")),
            e = Mc(O.as("d")),
            a = Mc(O.as("M")),
            q = Mc(O.as("w")),
            d = Mc(O.as("y")),
            n =
              (o <= z.ss && ["s", o]) ||
              (o < z.s && ["ss", o]) ||
              (c <= 1 && ["m"]) ||
              (c < z.m && ["mm", c]) ||
              (A <= 1 && ["h"]) ||
              (A < z.h && ["hh", A]) ||
              (e <= 1 && ["d"]) ||
              (e < z.d && ["dd", e]);
          return (
            null != z.w &&
              (n = n || (q <= 1 && ["w"]) || (q < z.w && ["ww", q])),
            ((n = n ||
              (a <= 1 && ["M"]) ||
              (a < z.M && ["MM", a]) ||
              (d <= 1 && ["y"]) || ["yy", d])[2] = b),
            (n[3] = +M > 0),
            (n[4] = p),
            zc.apply(null, n)
          );
        }
        function Oc(M) {
          return void 0 === M ? Mc : "function" == typeof M && ((Mc = M), !0);
        }
        function oc(M, b) {
          return (
            void 0 !== bc[M] &&
            (void 0 === b
              ? bc[M]
              : ((bc[M] = b), "s" === M && (bc.ss = b - 1), !0))
          );
        }
        function cc(M, b) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var z,
            p,
            O = !1,
            o = bc;
          return (
            "object" == typeof M && ((b = M), (M = !1)),
            "boolean" == typeof M && (O = M),
            "object" == typeof b &&
              ((o = Object.assign({}, bc, b)),
              null != b.s && null == b.ss && (o.ss = b.s - 1)),
            (p = pc(this, !O, o, (z = this.localeData()))),
            O && (p = z.pastFuture(+this, p)),
            z.postformat(p)
          );
        }
        var Ac = Math.abs;
        function ec(M) {
          return (M > 0) - (M < 0) || +M;
        }
        function ac() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var M,
            b,
            z,
            p,
            O,
            o,
            c,
            A,
            e = Ac(this._milliseconds) / 1e3,
            a = Ac(this._days),
            q = Ac(this._months),
            d = this.asSeconds();
          return d
            ? ((M = qM(e / 60)),
              (b = qM(M / 60)),
              (e %= 60),
              (M %= 60),
              (z = qM(q / 12)),
              (q %= 12),
              (p = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
              (O = d < 0 ? "-" : ""),
              (o = ec(this._months) !== ec(d) ? "-" : ""),
              (c = ec(this._days) !== ec(d) ? "-" : ""),
              (A = ec(this._milliseconds) !== ec(d) ? "-" : ""),
              O +
                "P" +
                (z ? o + z + "Y" : "") +
                (q ? o + q + "M" : "") +
                (a ? c + a + "D" : "") +
                (b || M || e ? "T" : "") +
                (b ? A + b + "H" : "") +
                (M ? A + M + "M" : "") +
                (e ? A + p + "S" : ""))
            : "P0D";
        }
        var qc = cp.prototype;
        return (
          (qc.isValid = Op),
          (qc.abs = fo),
          (qc.add = ho),
          (qc.subtract = Bo),
          (qc.as = Yo),
          (qc.asMilliseconds = go),
          (qc.asSeconds = wo),
          (qc.asMinutes = So),
          (qc.asHours = vo),
          (qc.asDays = Ho),
          (qc.asWeeks = Eo),
          (qc.asMonths = Po),
          (qc.asQuarters = jo),
          (qc.asYears = Co),
          (qc.valueOf = Do),
          (qc._bubble = Xo),
          (qc.clone = xo),
          (qc.get = Fo),
          (qc.milliseconds = Uo),
          (qc.seconds = Jo),
          (qc.minutes = Go),
          (qc.hours = Ko),
          (qc.days = Vo),
          (qc.weeks = $o),
          (qc.months = Qo),
          (qc.years = Zo),
          (qc.humanize = cc),
          (qc.toISOString = ac),
          (qc.toString = ac),
          (qc.toJSON = ac),
          (qc.locale = cO),
          (qc.localeData = eO),
          (qc.toIsoString = B(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            ac,
          )),
          (qc.lang = AO),
          j("X", 0, 0, "unix"),
          j("x", 0, 0, "valueOf"),
          wM("x", yM),
          wM("X", kM),
          PM("X", function (M, b, z) {
            z._d = new Date(1e3 * parseFloat(M));
          }),
          PM("x", function (M, b, z) {
            z._d = new Date(dM(M));
          }),
          //! moment.js
          (O.version = "2.29.4"),
          o(Kz),
          (O.fn = eo),
          (O.min = $z),
          (O.max = Mp),
          (O.now = bp),
          (O.utc = W),
          (O.unix = ao),
          (O.months = so),
          (O.isDate = n),
          (O.locale = Wz),
          (O.invalid = _),
          (O.duration = Xp),
          (O.isMoment = R),
          (O.weekdays = _o),
          (O.parseZone = qo),
          (O.localeData = uz),
          (O.isDuration = Ap),
          (O.monthsShort = uo),
          (O.weekdaysMin = mo),
          (O.defineLocale = rz),
          (O.updateLocale = sz),
          (O.locales = _z),
          (O.weekdaysShort = Lo),
          (O.normalizeUnits = OM),
          (O.relativeTimeRounding = Oc),
          (O.relativeTimeThreshold = oc),
          (O.calendarFormat = jp),
          (O.prototype = eo),
          (O.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
          }),
          O
        );
      })();
    },
    91128: (M) => {
      "use strict";
      M.exports = JSON.parse(
      );
    },
  },
]);