/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7694593";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    c,
    s,
    t = {},
    i = {};
  function o(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (a, n, r, d) => {
      if (!n) {
        var c = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, r, d] = e[f], s = !0, t = 0; t < n.length; t++)
            (!1 & d || c >= d) && Object.keys(o.O).every((e) => o.O[e](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), d < c && (c = d));
          if (s) {
            e.splice(f--, 1);
            var i = r();
            void 0 !== i && (a = i);
          }
        }
        return a;
      }
      d = d || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > d; f--) e[f] = e[f - 1];
      e[f] = [n, r, d];
    }),
    (o.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return o.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      o.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var s = 2 & r && e; "object" == typeof s && !~a.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), o.d(d, c), d;
    }),
    (o.d = (e, a) => {
      for (var n in a)
        o.o(a, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((a, n) => (o.f[n](e, a), a), []))),
    (o.u = (e) =>
      "javascript/applications/appmgmt/" +
      {
        477: "libraries~ab4a73d6e",
        493: "libraries~29ab6dbf5",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        907: "chunk~441eeb0f7",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1313: "shared_bulgarian-json",
        2029: "shared_sc_schinese-json",
        2120: "libraries~65c77a859",
        2136: "events",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2522: "logoedtior",
        2529: "pricingtool",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2601: "marketing_spanish-json",
        2767: "main_polish-json",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2942: "main_tchinese-json",
        3069: "libraries~b3fafa6d2",
        3112: "shared_french-json",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3557: "shared_finnish-json",
        3768: "main_finnish-json",
        3784: "chunk~9824b1ba9",
        4033: "marketing_schinese-json",
        4108: "shared_norwegian-json",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4297: "shared_greek-json",
        4458: "marketing_brazilian-json",
        4535: "login",
        4601: "broadcast",
        4722: "main_koreana-json",
        4823: "shared_romanian-json",
        4860: "main_russian-json",
        4929: "marketing_english-json",
        4964: "shared_vietnamese-json",
        5117: "libraries~511d96142",
        5257: "marketing_portuguese-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5676: "steamlearn",
        5849: "shared_portuguese-json",
        5888: "chunk~ab4a73d6e",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6019: "marketing_swedish-json",
        6035: "marketing_ukrainian-json",
        6087: "main_latam-json",
        6117: "chunk~ed848006f",
        6169: "marketing_norwegian-json",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6699: "steamdeck",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        7082: "marketing_japanese-json",
        7236: "main_portuguese-json",
        7334: "chunk~29ab6dbf5",
        7602: "shared_tchinese-json",
        7762: "steamml",
        7781: "shared_ukrainian-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7940: "libraries~a4c1dc2af",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8051: "main_hungarian-json",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8994: "marketing_hungarian-json",
        9060: "chunk~b3fafa6d2",
        9062: "shared_russian-json",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9603: "libraries~82d50d904",
        9663: "main_turkish-json",
        9753: "shared_danish-json",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        477: "00a4e7eac55f4cdbfbda",
        493: "88ed61bc4d84c34f6097",
        647: "8799dcb312737efc16e8",
        698: "135afd53db7d5eaea00e",
        727: "9374d0d11d4a6e10d766",
        799: "a78db8b03dd00d69cc4f",
        819: "018fd8857afe16ce5459",
        874: "7a3baa9de36bb59e6a09",
        903: "e12ef77830267bf1f2cb",
        907: "374ea5852961d11d72e2",
        1117: "9852c91a45cada80b00d",
        1162: "42d0da5dae077c2c3ee0",
        1313: "917a7b74c947e53d8aa8",
        2029: "a59527d0540a72406547",
        2120: "b3bc05d2e211fe916c7c",
        2136: "17479ad866e11550ab5b",
        2431: "fe5ea733482a8a8976a5",
        2443: "0f0a491e18131b6bbda0",
        2448: "1e4ad5d9521cc2956d6d",
        2522: "29304e8eb01306577668",
        2529: "074cf8b0c936428150ce",
        2537: "5f5e8906ffe2e5725611",
        2581: "ad18b5d7564fc371d365",
        2601: "a0b9efc87ee0cf99415b",
        2767: "1db221da58c7b37aa60e",
        2824: "75d13215760f30471cb5",
        2844: "049d7041306519d46d0f",
        2848: "c029bf995ec1771ca2d9",
        2942: "51c1c6e3a0e1ed223230",
        3069: "4c1806619db7a528571a",
        3112: "ba325f202c79840e54f5",
        3185: "8a5a24b8736b3d5219ab",
        3252: "b710074c5352c0e73fc4",
        3277: "61719e39991a3e49882d",
        3323: "6ad1ac1bea5b1d553c24",
        3359: "154fabe8dd75bea520c9",
        3453: "d9c5617f839524264b61",
        3557: "ba59e32c757f777eb4db",
        3768: "bfdd60da869fceed8965",
        3784: "a3b62abc4bd33fef10f9",
        4033: "9e876dacdd3bcf5229a6",
        4108: "d03f5d3d3cacd3abb76f",
        4171: "412776f8ef12a49a8088",
        4189: "90e3392d1dfeef0f8892",
        4199: "762f6f0e7f710cafbff9",
        4238: "50f636644e2a23ae0690",
        4297: "f4e9d665626bbcc42d59",
        4458: "7e6efef54fe907479801",
        4535: "5124ecf800c586c9d3e1",
        4601: "1283990051d95ff2ff70",
        4722: "c218d1d86374b1220c49",
        4823: "f3dc2dfdb1973bad4bb4",
        4860: "0c89dd08b89b8735eaf6",
        4929: "7bf4daa2c38ef6ed334f",
        4964: "2a03f54e258328c2af60",
        5117: "ea8c23ba4890c7de63d1",
        5257: "9f8f296a4e69a8b619b2",
        5438: "611fb9e03513f9942e39",
        5625: "8bb6a4d267a7b4b7be9d",
        5676: "f8e5ab1e7092e06e95d3",
        5849: "2858fafee96cca106814",
        5888: "6923aa13e78a60256f9e",
        5925: "8528fb5bf92ff688c40a",
        5933: "b6b6dea1285704422a1b",
        5948: "c0904a9c0c8297cd50af",
        6007: "f8e43b319a46e839c940",
        6019: "5cc1065b711d0aa4e68e",
        6035: "5b9ffe10eb165c5850dc",
        6087: "87542a6178e94c0be3d6",
        6117: "b887c54f3bd03195314e",
        6169: "efc8524c15804e68405d",
        6492: "c35342aaa131fdde9cc2",
        6542: "0bf395e93b05034c3848",
        6699: "cc3c82167cd89c0dbecb",
        6815: "87261e9913a72b452c4e",
        6817: "1fc02ad5539ace1f50aa",
        6846: "512715f713f37c2f97ef",
        7082: "cbc58d457b94c6431769",
        7236: "0e2347dbeeb054d69b09",
        7334: "a64b2a845df3d838d587",
        7602: "b74940cb4213c5d68f35",
        7762: "9784117219bafc7407eb",
        7781: "3a7e6c7c61b6db0d32ba",
        7871: "0bef3cdfe81fd8ad597b",
        7890: "24a27e2e385700b549d1",
        7940: "7f6fd02a2c3ff2427172",
        7942: "7c22ac5b068287c588e3",
        7951: "7b808353d9457f81818f",
        7975: "c426aa5738c42dba9a27",
        8001: "f5ce83acf3bbc79c6460",
        8051: "c3c7085d6a009cad99bd",
        8155: "e86ebb5851381127da52",
        8168: "ff75301296b81f762e89",
        8385: "691c820d3791f1006f12",
        8774: "38c6fded431691e3a81a",
        8960: "606868ac4600d9fe7f02",
        8974: "895926d6a0aa474a3b97",
        8994: "47625278413751e57f79",
        9060: "b98617a0c2550cc35136",
        9062: "78e7b5cc2a8e0d5fbf02",
        9431: "7b2aa7bf12609c48440f",
        9568: "ac4825d74a93d4af1ebc",
        9603: "4fa351b1f2bf092cbd21",
        9663: "08bfb398c419ad2b9f65",
        9753: "205f7c703159ee921e1b",
        9899: "4ba468909483eea11d5e",
        9903: "4130b2308d677163ea6c",
        9919: "4671150433a4d9096c85",
        9980: "6cc60d503c3b495fbc6e",
      }[e]),
    (o.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        4535: "login",
        4601: "broadcast",
        5676: "steamlearn",
        5888: "chunk~ab4a73d6e",
        6699: "steamdeck",
        7334: "chunk~29ab6dbf5",
        7762: "steamml",
        8974: "storeadmin",
        9060: "chunk~b3fafa6d2",
      }[e] +
      ".css?contenthash=" +
      {
        493: "d885e31859d50e4d4824",
        2136: "ee2d3ce03f59e5dfebaf",
        2522: "7751c352d0c9c6aa48d6",
        2529: "1d875bac23ac1f93b8a5",
        4535: "1e8d4c2f448ef0f3b8ad",
        4601: "aa016ff83508d04130af",
        5676: "6cf23bd3788043ec94d6",
        5888: "728e603f672e151a99a7",
        6699: "b4500b22379c6357d707",
        7334: "5695736ccd096744dc7e",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "30bc272190fd7a2c443a",
        9060: "c5f1c9943145088953e2",
      }[e]),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (r = {}),
    (d = "appmgmt-storeadmin:"),
    (o.l = (e, a, n, c) => {
      if (r[e]) r[e].push(a);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), f = 0;
            f < i.length;
            f++
          ) {
            var b = i[f];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == d + n
            ) {
              s = b;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          o.nc && s.setAttribute("nonce", o.nc),
          s.setAttribute("data-webpack", d + n),
          (s.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (s.onerror = s.onload = null), clearTimeout(m);
            var d = r[e];
            if (
              (delete r[e],
              s.parentNode && s.parentNode.removeChild(s),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          t && document.head.appendChild(s);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var a = o.g.document;
      if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
        var n = a.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e + "../../../");
    })(),
    (c = (e) =>
      new Promise((a, n) => {
        var r = o.miniCssF(e),
          d = o.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var d =
                (s = n[r]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (d === e || d === a)) return s;
            }
            var c = document.getElementsByTagName("style");
            for (r = 0; r < c.length; r++) {
              var s;
              if ((d = (s = c[r]).getAttribute("data-href")) === e || d === a)
                return s;
            }
          })(r, d)
        )
          return a();
        ((e, a, n, r) => {
          var d = document.createElement("link");
          (d.rel = "stylesheet"),
            (d.type = "text/css"),
            (d.onerror = d.onload =
              (c) => {
                if (((d.onerror = d.onload = null), "load" === c.type)) n();
                else {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    t = (c && c.target && c.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + t + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = s),
                    (i.request = t),
                    d.parentNode.removeChild(d),
                    r(i);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
      })),
    (s = { 6700: 0 }),
    (o.f.miniCss = (e, a) => {
      s[e]
        ? a.push(s[e])
        : 0 !== s[e] &&
          {
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            4535: 1,
            4601: 1,
            5676: 1,
            5888: 1,
            6699: 1,
            7334: 1,
            7762: 1,
            8974: 1,
            9060: 1,
          }[e] &&
          a.push(
            (s[e] = c(e).then(
              () => {
                s[e] = 0;
              },
              (a) => {
                throw (delete s[e], a);
              }
            ))
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (o.f.j = (a, n) => {
        var r = o.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var c = o.p + o.u(a),
              s = new Error();
            o.l(
              c,
              (n) => {
                if (o.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = d),
                    (s.request = c),
                    r[1](s);
                }
              },
              "chunk-" + a,
              a
            );
          } else e[a] = 0;
      }),
        (o.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            d,
            [c, s, t] = n,
            i = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (r in s) o.o(s, r) && (o.m[r] = s[r]);
            if (t) var f = t(o);
          }
          for (a && a(n); i < c.length; i++)
            (d = c[i]), o.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return o.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
