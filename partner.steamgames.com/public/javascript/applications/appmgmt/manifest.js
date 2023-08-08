/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8250261";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    s,
    t,
    c,
    i = {},
    d = {};
  function o(e) {
    var a = d[e];
    if (void 0 !== a) return a.exports;
    var n = (d[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = i),
    (e = []),
    (o.O = (a, n, r, s) => {
      if (!n) {
        var t = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, r, s] = e[f], c = !0, i = 0; i < n.length; i++)
            (!1 & s || t >= s) && Object.keys(o.O).every((e) => o.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((c = !1), s < t && (t = s));
          if (c) {
            e.splice(f--, 1);
            var d = r();
            void 0 !== d && (a = d);
          }
        }
        return a;
      }
      s = s || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > s; f--) e[f] = e[f - 1];
      e[f] = [n, r, s];
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
      var s = Object.create(null);
      o.r(s);
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var c = 2 & r && e; "object" == typeof c && !~a.indexOf(c); c = n(c))
        Object.getOwnPropertyNames(c).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), o.d(s, t), s;
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
        131: "chunk~00d94646f",
        145: "chunk~bbe83f635",
        493: "libraries~29ab6dbf5",
        494: "libraries~b79647cb4",
        614: "libraries~bee9b953c",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1254: "chunk~0deb13453",
        1313: "shared_bulgarian-json",
        2029: "shared_sc_schinese-json",
        2120: "libraries~65c77a859",
        2136: "events",
        2360: "chunk~3d030e3ba",
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
        2856: "libraries~0aa1e73e0",
        2942: "main_tchinese-json",
        3069: "libraries~b3fafa6d2",
        3112: "shared_french-json",
        3143: "libraries~92e10db3b",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3504: "chunk~bee9b953c",
        3557: "shared_finnish-json",
        3768: "main_finnish-json",
        4023: "libraries~1286b67cd",
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
        4935: "sdrconnections",
        4964: "shared_vietnamese-json",
        5117: "libraries~511d96142",
        5257: "marketing_portuguese-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5676: "steamlearn",
        5849: "shared_portuguese-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6019: "marketing_swedish-json",
        6035: "marketing_ukrainian-json",
        6087: "main_latam-json",
        6169: "marketing_norwegian-json",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6699: "steamdeck",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        7072: "main_indonesian-json",
        7082: "marketing_japanese-json",
        7236: "main_portuguese-json",
        7334: "chunk~29ab6dbf5",
        7602: "shared_tchinese-json",
        7762: "steamml",
        7781: "shared_ukrainian-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8051: "main_hungarian-json",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8399: "marketing_indonesian-json",
        8754: "shared_indonesian-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8994: "marketing_hungarian-json",
        9035: "contenthub",
        9062: "shared_russian-json",
        9160: "chunk~92e10db3b",
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
        131: "791ccdd7ef02d6430a87",
        145: "c9eeace7c44e7f18b602",
        493: "1337c2145dbf06161fac",
        494: "05fe723268d8d8f38ede",
        614: "cf5a894ed77d3a7fdc02",
        647: "ce505d8245470b995a7c",
        698: "dd9d3537b99928d86b93",
        727: "86f32d36ab90a0330605",
        799: "2f795d165010ab6b6457",
        819: "64442d28113da1544b4b",
        874: "1ecc1e71cb506e37cb43",
        903: "d828074ed1017d6406fb",
        1117: "4e6a7c01d3c19c5d17ab",
        1162: "6dec1dd6da3dbb0b9406",
        1254: "2d01e63a63dd4ebb1ab5",
        1313: "7385edb8aa2d4f952a78",
        2029: "d7d3c94be8d2d0052bbd",
        2120: "c7a981c2505166ba75ce",
        2136: "c33dccc5eb4e4cd07d08",
        2360: "b0c4df33ede556777999",
        2431: "db7452b1af041ac5e119",
        2443: "9d9cb82bc1f83351ed23",
        2448: "2d1e2eba4934c9b222dd",
        2522: "1877d96554f42c54a8c7",
        2529: "5a5f2cec0e204fd53f5c",
        2537: "fe604508fbd46c12a7cd",
        2581: "3d19b17020be2290d52d",
        2601: "b8f81c6d93f98f40fca4",
        2767: "6a722bb0e51d63289cf2",
        2824: "cc7d77cc1144c2e6f1cd",
        2844: "ca9ecc517f325e23d2af",
        2848: "c3b5017d2cef1bf1afea",
        2856: "fde4e41146f852b0ea33",
        2942: "aeb3eae5208f9c7ee681",
        3069: "be4f942bec2764f56eff",
        3112: "087ebb9009ca81b32343",
        3143: "a67158b5e5faca3a398b",
        3185: "7a7c9d47e98efd5a2e05",
        3252: "9eadac295f9f13c82ba7",
        3277: "ee4d9edf3ac35819e4fe",
        3323: "51ee8478cb98f787c89a",
        3359: "7b6de0c3f84c4b994947",
        3453: "ab0ec6d27abdd645bc50",
        3504: "7c2650739de500241d12",
        3557: "584dc0fcfa9f37b9f936",
        3768: "3ba4e6a0d5c42e3142bf",
        4023: "456281db293989426504",
        4033: "0858d12254b46732b591",
        4108: "e890b76b3b1d3ba8935b",
        4171: "a572d381cc372f7a7fa0",
        4189: "3b2bff0d8fd16968580e",
        4199: "b9e37ad3c5d029382fd6",
        4238: "a1fc9c12db9b4912040d",
        4297: "6895bb00fa459b05e9dc",
        4458: "2d86facaacb144bd1ccc",
        4535: "7276ce24f62757f2c285",
        4601: "791ddb2edf975af00f9e",
        4722: "76b59127687f56ef3677",
        4823: "6721b846139387576b54",
        4860: "9fe53a7d722ec733f133",
        4929: "27728b43649b4fad559a",
        4935: "fcff8e476bb058e9afc0",
        4964: "c54845359d2888c88fc9",
        5117: "fe02739faca7c40c162b",
        5257: "b18dde22a3260715b381",
        5438: "23217a1e2474dffe247f",
        5625: "e5d051eb8e52fca22a96",
        5676: "8267d01d281cdddcebd5",
        5849: "c7573c50e00fd2d722e5",
        5925: "8c1593e947c528c01bc7",
        5933: "4a979bf85cb6adae2cf2",
        5948: "b5ca031ad5709838a6df",
        6007: "0e37adec688fd3f2965f",
        6019: "a9dc675a8b76bd7c1a7d",
        6035: "0e8a44307646aff12e25",
        6087: "733c1ecd6f3d198b25a8",
        6169: "96f4e53482d648425321",
        6492: "1ff48ec9ec1c391f6de1",
        6542: "5791a4c2f4ef155a75d1",
        6699: "b45a3fccce84ff5072fa",
        6815: "6c4d5b1e5730a7959a9e",
        6817: "7f250496e2744bd45c1b",
        6846: "8c318beea2f43fadace6",
        7072: "1d6a4f9bdb321c9c080a",
        7082: "7ce4c77ef1dd348e77b3",
        7236: "4e5d1a38189135c9fd37",
        7334: "111bc8dd5fb89cdb7ce9",
        7602: "32999069cdca35142aae",
        7762: "da8a7602e5ced16fd5c8",
        7781: "92185a33e134a8a590dc",
        7871: "10e9cab3cbf0ab48d312",
        7890: "840c9f6e27ad69c4f72a",
        7942: "3eb6a79a11bbe18cb066",
        7951: "9fcd714b18de9b084c32",
        7975: "ca1005d903d574da4f64",
        8001: "82225344359cecc36047",
        8051: "ead89b98a5a0c07a89e2",
        8155: "b82347c8328b528faac0",
        8168: "7d9ad96f2ce57a138397",
        8385: "843d7bcdc78a594a8511",
        8399: "3109958cb894b86cc2e1",
        8754: "3e9cc04821d27d6f9605",
        8774: "5ea3d0f26f8c19305e2f",
        8960: "4321965fc6a442c1b209",
        8974: "979810c62e44be2262e4",
        8994: "4005de0a1e8d79d2ed91",
        9035: "9b49528f8f6672d4c141",
        9062: "3e0ecf0b08be2036671a",
        9160: "17370740ab881b65bfd6",
        9431: "de7cf5e983166b4b26f9",
        9568: "24259264d4203e7d2fcd",
        9603: "7c716d6cbded5df22270",
        9663: "dab1d216ad84c19c73ad",
        9753: "c1d685da6b677738981d",
        9899: "dbe7957f7bd64ecf5300",
        9903: "8af6d55d14ed1d7d23ec",
        9919: "b695729c2721f3f80138",
        9980: "8b4d047f0ef09e4234f7",
      }[e]),
    (o.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        3504: "chunk~bee9b953c",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        7762: "steamml",
        8974: "storeadmin",
        9160: "chunk~92e10db3b",
      }[e] +
      ".css?contenthash=" +
      {
        493: "f38ba98b44af4fc0288a",
        2136: "919f9e07a9196b38b46e",
        2522: "568a668c02defe940a0c",
        2529: "deda2f99b411c732ee09",
        3504: "f782015a58aa64fe8874",
        4601: "9b9120b674ef378127fd",
        4935: "59890b790fbf2cc93831",
        5676: "d0287df8605cf5ca6ca3",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "f095e8a4476b0c5b677f",
        9160: "d2be9b248c5297e4d2f5",
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
    (s = "appmgmt-storeadmin:"),
    (o.l = (e, a, n, t) => {
      if (r[e]) r[e].push(a);
      else {
        var c, i;
        if (void 0 !== n)
          for (
            var d = document.getElementsByTagName("script"), f = 0;
            f < d.length;
            f++
          ) {
            var b = d[f];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == s + n
            ) {
              c = b;
              break;
            }
          }
        c ||
          ((i = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          c.setAttribute("data-webpack", s + n),
          (c.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (c.onerror = c.onload = null), clearTimeout(m);
            var s = r[e];
            if (
              (delete r[e],
              c.parentNode && c.parentNode.removeChild(c),
              s && s.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: c }),
            12e4,
          );
        (c.onerror = h.bind(null, c.onerror)),
          (c.onload = h.bind(null, c.onload)),
          i && document.head.appendChild(c);
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
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e + "../../../");
    })(),
    (t = (e) =>
      new Promise((a, n) => {
        var r = o.miniCssF(e),
          s = o.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var s =
                (c = n[r]).getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (s === e || s === a)) return c;
            }
            var t = document.getElementsByTagName("style");
            for (r = 0; r < t.length; r++) {
              var c;
              if ((s = (c = t[r]).getAttribute("data-href")) === e || s === a)
                return c;
            }
          })(r, s)
        )
          return a();
        ((e, a, n, r) => {
          var s = document.createElement("link");
          (s.rel = "stylesheet"),
            (s.type = "text/css"),
            (s.onerror = s.onload =
              (t) => {
                if (((s.onerror = s.onload = null), "load" === t.type)) n();
                else {
                  var c = t && ("load" === t.type ? "missing" : t.type),
                    i = (t && t.target && t.target.href) || a,
                    d = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                    );
                  (d.code = "CSS_CHUNK_LOAD_FAILED"),
                    (d.type = c),
                    (d.request = i),
                    s.parentNode.removeChild(s),
                    r(d);
                }
              }),
            (s.href = a),
            document.head.appendChild(s);
        })(e, s, a, n);
      })),
    (c = { 6700: 0 }),
    (o.f.miniCss = (e, a) => {
      c[e]
        ? a.push(c[e])
        : 0 !== c[e] &&
          {
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            3504: 1,
            4601: 1,
            4935: 1,
            5676: 1,
            6699: 1,
            7762: 1,
            8974: 1,
            9160: 1,
          }[e] &&
          a.push(
            (c[e] = t(e).then(
              () => {
                c[e] = 0;
              },
              (a) => {
                throw (delete c[e], a);
              },
            )),
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (o.f.j = (a, n) => {
        var r = o.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var s = new Promise((n, s) => (r = e[a] = [n, s]));
            n.push((r[2] = s));
            var t = o.p + o.u(a),
              c = new Error();
            o.l(
              t,
              (n) => {
                if (o.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var s = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + a + " failed.\n(" + s + ": " + t + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = s),
                    (c.request = t),
                    r[1](c);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (o.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            s,
            [t, c, i] = n,
            d = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (r in c) o.o(c, r) && (o.m[r] = c[r]);
            if (i) var f = i(o);
          }
          for (a && a(n); d < t.length; d++)
            (s = t[d]), o.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return o.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
