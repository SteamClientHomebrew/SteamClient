/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5117],
  {
    13485: (e, t, r) => {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      const n = r(50060),
        i = r(4215),
        a =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (t.lW = l), (t.h2 = 50);
      const s = 2147483647;
      function o(e) {
        if (e > s)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
        const t = new Uint8Array(e);
        return Object.setPrototypeOf(t, l.prototype), t;
      }
      function l(e, t, r) {
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return d(e);
        }
        return c(e, t, r);
      }
      function c(e, t, r) {
        if ("string" == typeof e)
          return (function (e, t) {
            ("string" == typeof t && "" !== t) || (t = "utf8");
            if (!l.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            const r = 0 | h(e, t);
            let n = o(r);
            const i = n.write(e, t);
            i !== r && (n = n.slice(0, i));
            return n;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (H(e, Uint8Array)) {
              const t = new Uint8Array(e);
              return f(t.buffer, t.byteOffset, t.byteLength);
            }
            return m(e);
          })(e);
        if (null == e)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e,
          );
        if (H(e, ArrayBuffer) || (e && H(e.buffer, ArrayBuffer)))
          return f(e, t, r);
        if (
          "undefined" != typeof SharedArrayBuffer &&
          (H(e, SharedArrayBuffer) || (e && H(e.buffer, SharedArrayBuffer)))
        )
          return f(e, t, r);
        if ("number" == typeof e)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        const n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return l.from(n, t, r);
        const i = (function (e) {
          if (l.isBuffer(e)) {
            const t = 0 | p(e.length),
              r = o(t);
            return 0 === r.length || e.copy(r, 0, 0, t), r;
          }
          if (void 0 !== e.length)
            return "number" != typeof e.length || G(e.length) ? o(0) : m(e);
          if ("Buffer" === e.type && Array.isArray(e.data)) return m(e.data);
        })(e);
        if (i) return i;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof e[Symbol.toPrimitive]
        )
          return l.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e,
        );
      }
      function u(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
      }
      function d(e) {
        return u(e), o(e < 0 ? 0 : 0 | p(e));
      }
      function m(e) {
        const t = e.length < 0 ? 0 : 0 | p(e.length),
          r = o(t);
        for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
        return r;
      }
      function f(e, t, r) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return (
          (n =
            void 0 === t && void 0 === r
              ? new Uint8Array(e)
              : void 0 === r
                ? new Uint8Array(e, t)
                : new Uint8Array(e, t, r)),
          Object.setPrototypeOf(n, l.prototype),
          n
        );
      }
      function p(e) {
        if (e >= s)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              s.toString(16) +
              " bytes",
          );
        return 0 | e;
      }
      function h(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || H(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e,
          );
        const r = e.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return $(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return V(e).length;
            default:
              if (i) return n ? -1 : $(e).length;
              (t = ("" + t).toLowerCase()), (i = !0);
          }
      }
      function y(e, t, r) {
        let n = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return j(this, t, r);
            case "utf8":
            case "utf-8":
              return F(this, t, r);
            case "ascii":
              return O(this, t, r);
            case "latin1":
            case "binary":
              return R(this, t, r);
            case "base64":
              return S(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return x(this, t, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (n = !0);
          }
      }
      function b(e, t, r) {
        const n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function g(e, t, r, n, i) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
          G((r = +r)) && (r = i ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = l.from(t, n)), l.isBuffer(t)))
          return 0 === t.length ? -1 : _(e, t, r, n, i);
        if ("number" == typeof t)
          return (
            (t &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, r)
                : Uint8Array.prototype.lastIndexOf.call(e, t, r)
              : _(e, [t], r, n, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function _(e, t, r, n, i) {
        let a,
          s = 1,
          o = e.length,
          l = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (o /= 2), (l /= 2), (r /= 2);
        }
        function c(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (i) {
          let n = -1;
          for (a = r; a < o; a++)
            if (c(e, a) === c(t, -1 === n ? 0 : a - n)) {
              if ((-1 === n && (n = a), a - n + 1 === l)) return n * s;
            } else -1 !== n && (a -= a - n), (n = -1);
        } else
          for (r + l > o && (r = o - l), a = r; a >= 0; a--) {
            let r = !0;
            for (let n = 0; n < l; n++)
              if (c(e, a + n) !== c(t, n)) {
                r = !1;
                break;
              }
            if (r) return a;
          }
        return -1;
      }
      function B(e, t, r, n) {
        r = Number(r) || 0;
        const i = e.length - r;
        n ? (n = Number(n)) > i && (n = i) : (n = i);
        const a = t.length;
        let s;
        for (n > a / 2 && (n = a / 2), s = 0; s < n; ++s) {
          const n = parseInt(t.substr(2 * s, 2), 16);
          if (G(n)) return s;
          e[r + s] = n;
        }
        return s;
      }
      function w(e, t, r, n) {
        return Y($(t, e.length - r), e, r, n);
      }
      function v(e, t, r, n) {
        return Y(
          (function (e) {
            const t = [];
            for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
            return t;
          })(t),
          e,
          r,
          n,
        );
      }
      function M(e, t, r, n) {
        return Y(V(t), e, r, n);
      }
      function z(e, t, r, n) {
        return Y(
          (function (e, t) {
            let r, n, i;
            const a = [];
            for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
              (r = e.charCodeAt(s)),
                (n = r >> 8),
                (i = r % 256),
                a.push(i),
                a.push(n);
            return a;
          })(t, e.length - r),
          e,
          r,
          n,
        );
      }
      function S(e, t, r) {
        return 0 === t && r === e.length
          ? n.fromByteArray(e)
          : n.fromByteArray(e.slice(t, r));
      }
      function F(e, t, r) {
        r = Math.min(e.length, r);
        const n = [];
        let i = t;
        for (; i < r; ) {
          const t = e[i];
          let a = null,
            s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (i + s <= r) {
            let r, n, o, l;
            switch (s) {
              case 1:
                t < 128 && (a = t);
                break;
              case 2:
                (r = e[i + 1]),
                  128 == (192 & r) &&
                    ((l = ((31 & t) << 6) | (63 & r)), l > 127 && (a = l));
                break;
              case 3:
                (r = e[i + 1]),
                  (n = e[i + 2]),
                  128 == (192 & r) &&
                    128 == (192 & n) &&
                    ((l = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)),
                    l > 2047 && (l < 55296 || l > 57343) && (a = l));
                break;
              case 4:
                (r = e[i + 1]),
                  (n = e[i + 2]),
                  (o = e[i + 3]),
                  128 == (192 & r) &&
                    128 == (192 & n) &&
                    128 == (192 & o) &&
                    ((l =
                      ((15 & t) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & o)),
                    l > 65535 && l < 1114112 && (a = l));
            }
          }
          null === a
            ? ((a = 65533), (s = 1))
            : a > 65535 &&
              ((a -= 65536),
              n.push(((a >>> 10) & 1023) | 55296),
              (a = 56320 | (1023 & a))),
            n.push(a),
            (i += s);
        }
        return (function (e) {
          const t = e.length;
          if (t <= E) return String.fromCharCode.apply(String, e);
          let r = "",
            n = 0;
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += E)));
          return r;
        })(n);
      }
      (l.TYPED_ARRAY_SUPPORT = (function () {
        try {
          const e = new Uint8Array(1),
            t = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(e, t),
            42 === e.foo()
          );
        } catch (e) {
          return !1;
        }
      })()),
        l.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
          ),
        Object.defineProperty(l.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(l.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.byteOffset;
          },
        }),
        (l.poolSize = 8192),
        (l.from = function (e, t, r) {
          return c(e, t, r);
        }),
        Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(l, Uint8Array),
        (l.alloc = function (e, t, r) {
          return (function (e, t, r) {
            return (
              u(e),
              e <= 0
                ? o(e)
                : void 0 !== t
                  ? "string" == typeof r
                    ? o(e).fill(t, r)
                    : o(e).fill(t)
                  : o(e)
            );
          })(e, t, r);
        }),
        (l.allocUnsafe = function (e) {
          return d(e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return d(e);
        }),
        (l.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== l.prototype;
        }),
        (l.compare = function (e, t) {
          if (
            (H(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            H(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
            !l.isBuffer(e) || !l.isBuffer(t))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (e === t) return 0;
          let r = e.length,
            n = t.length;
          for (let i = 0, a = Math.min(r, n); i < a; ++i)
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (e, t) {
          if (!Array.isArray(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          let r;
          if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          const n = l.allocUnsafe(t);
          let i = 0;
          for (r = 0; r < e.length; ++r) {
            let t = e[r];
            if (H(t, Uint8Array))
              i + t.length > n.length
                ? (l.isBuffer(t) || (t = l.from(t)), t.copy(n, i))
                : Uint8Array.prototype.set.call(n, t, i);
            else {
              if (!l.isBuffer(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              t.copy(n, i);
            }
            i += t.length;
          }
          return n;
        }),
        (l.byteLength = h),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          const e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let t = 0; t < e; t += 2) b(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          const e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let t = 0; t < e; t += 4)
            b(this, t, t + 3), b(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          const e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let t = 0; t < e; t += 8)
            b(this, t, t + 7),
              b(this, t + 1, t + 6),
              b(this, t + 2, t + 5),
              b(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          const e = this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
              ? F(this, 0, e)
              : y.apply(this, arguments);
        }),
        (l.prototype.toLocaleString = l.prototype.toString),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          let e = "";
          const r = t.h2;
          return (
            (e = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (e += " ... "),
            "<Buffer " + e + ">"
          );
        }),
        a && (l.prototype[a] = l.prototype.inspect),
        (l.prototype.compare = function (e, t, r, n, i) {
          if (
            (H(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            !l.isBuffer(e))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e,
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= i && t >= r) return 0;
          if (n >= i) return -1;
          if (t >= r) return 1;
          if (this === e) return 0;
          let a = (i >>>= 0) - (n >>>= 0),
            s = (r >>>= 0) - (t >>>= 0);
          const o = Math.min(a, s),
            c = this.slice(n, i),
            u = e.slice(t, r);
          for (let e = 0; e < o; ++e)
            if (c[e] !== u[e]) {
              (a = c[e]), (s = u[e]);
              break;
            }
          return a < s ? -1 : s < a ? 1 : 0;
        }),
        (l.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (l.prototype.indexOf = function (e, t, r) {
          return g(this, e, t, r, !0);
        }),
        (l.prototype.lastIndexOf = function (e, t, r) {
          return g(this, e, t, r, !1);
        }),
        (l.prototype.write = function (e, t, r, n) {
          if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (n = t), (r = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported",
              );
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          const i = this.length - t;
          if (
            ((void 0 === r || r > i) && (r = i),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          let a = !1;
          for (;;)
            switch (n) {
              case "hex":
                return B(this, e, t, r);
              case "utf8":
              case "utf-8":
                return w(this, e, t, r);
              case "ascii":
              case "latin1":
              case "binary":
                return v(this, e, t, r);
              case "base64":
                return M(this, e, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return z(this, e, t, r);
              default:
                if (a) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (a = !0);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      const E = 4096;
      function O(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
        return n;
      }
      function R(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
        return n;
      }
      function j(e, t, r) {
        const n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let i = "";
        for (let n = t; n < r; ++n) i += K[e[n]];
        return i;
      }
      function x(e, t, r) {
        const n = e.slice(t, r);
        let i = "";
        for (let e = 0; e < n.length - 1; e += 2)
          i += String.fromCharCode(n[e] + 256 * n[e + 1]);
        return i;
      }
      function T(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function C(e, t, r, n, i, a) {
        if (!l.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < a)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
      }
      function W(e, t, r, n, i) {
        X(t, n, i, e, r, 7);
        let a = Number(t & BigInt(4294967295));
        (e[r++] = a),
          (a >>= 8),
          (e[r++] = a),
          (a >>= 8),
          (e[r++] = a),
          (a >>= 8),
          (e[r++] = a);
        let s = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          r
        );
      }
      function I(e, t, r, n, i) {
        X(t, n, i, e, r, 7);
        let a = Number(t & BigInt(4294967295));
        (e[r + 7] = a),
          (a >>= 8),
          (e[r + 6] = a),
          (a >>= 8),
          (e[r + 5] = a),
          (a >>= 8),
          (e[r + 4] = a);
        let s = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[r + 3] = s),
          (s >>= 8),
          (e[r + 2] = s),
          (s >>= 8),
          (e[r + 1] = s),
          (s >>= 8),
          (e[r] = s),
          r + 8
        );
      }
      function P(e, t, r, n, i, a) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function N(e, t, r, n, a) {
        return (
          (t = +t),
          (r >>>= 0),
          a || P(e, 0, r, 4),
          i.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function U(e, t, r, n, a) {
        return (
          (t = +t),
          (r >>>= 0),
          a || P(e, 0, r, 8),
          i.write(e, t, r, n, 52, 8),
          r + 8
        );
      }
      (l.prototype.slice = function (e, t) {
        const r = this.length;
        (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : t > r && (t = r),
          t < e && (t = e);
        const n = this.subarray(e, t);
        return Object.setPrototypeOf(n, l.prototype), n;
      }),
        (l.prototype.readUintLE = l.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || T(e, t, this.length);
            let n = this[e],
              i = 1,
              a = 0;
            for (; ++a < t && (i *= 256); ) n += this[e + a] * i;
            return n;
          }),
        (l.prototype.readUintBE = l.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || T(e, t, this.length);
            let n = this[e + --t],
              i = 1;
            for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
            return n;
          }),
        (l.prototype.readUint8 = l.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || T(e, 1, this.length), this[e];
          }),
        (l.prototype.readUint16LE = l.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || T(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (l.prototype.readUint16BE = l.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || T(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (l.prototype.readUint32LE = l.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || T(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
        (l.prototype.readUint32BE = l.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || T(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (l.prototype.readBigUInt64LE = Q(function (e) {
          L((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || q(e, this.length - 8);
          const n =
              t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            i = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (l.prototype.readBigUInt64BE = Q(function (e) {
          L((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || q(e, this.length - 8);
          const n =
              t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
            i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (l.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || T(e, t, this.length);
          let n = this[e],
            i = 1,
            a = 0;
          for (; ++a < t && (i *= 256); ) n += this[e + a] * i;
          return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
        }),
        (l.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || T(e, t, this.length);
          let n = t,
            i = 1,
            a = this[e + --n];
          for (; n > 0 && (i *= 256); ) a += this[e + --n] * i;
          return (i *= 128), a >= i && (a -= Math.pow(2, 8 * t)), a;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return (
            (e >>>= 0),
            t || T(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (l.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || T(e, 2, this.length);
          const r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || T(e, 2, this.length);
          const r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || T(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || T(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readBigInt64LE = Q(function (e) {
          L((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || q(e, this.length - 8);
          const n =
            this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
          return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
              t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            )
          );
        })),
        (l.prototype.readBigInt64BE = Q(function (e) {
          L((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || q(e, this.length - 8);
          const n = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
          return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
              this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r,
            )
          );
        })),
        (l.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || T(e, 4, this.length), i.read(this, e, !0, 23, 4)
          );
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || T(e, 4, this.length), i.read(this, e, !1, 23, 4)
          );
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || T(e, 8, this.length), i.read(this, e, !0, 52, 8)
          );
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || T(e, 8, this.length), i.read(this, e, !1, 52, 8)
          );
        }),
        (l.prototype.writeUintLE = l.prototype.writeUIntLE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            }
            let i = 1,
              a = 0;
            for (this[t] = 255 & e; ++a < r && (i *= 256); )
              this[t + a] = (e / i) & 255;
            return t + r;
          }),
        (l.prototype.writeUintBE = l.prototype.writeUIntBE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            }
            let i = r - 1,
              a = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
              this[t + i] = (e / a) & 255;
            return t + r;
          }),
        (l.prototype.writeUint8 = l.prototype.writeUInt8 =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || C(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (l.prototype.writeUint16LE = l.prototype.writeUInt16LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || C(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (l.prototype.writeUint16BE = l.prototype.writeUInt16BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || C(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (l.prototype.writeUint32LE = l.prototype.writeUInt32LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || C(this, e, t, 4, 4294967295, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (l.prototype.writeUint32BE = l.prototype.writeUInt32BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || C(this, e, t, 4, 4294967295, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (l.prototype.writeBigUInt64LE = Q(function (e, t = 0) {
          return W(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (l.prototype.writeBigUInt64BE = Q(function (e, t = 0) {
          return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (l.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1);
            C(this, e, t, r, n - 1, -n);
          }
          let i = 0,
            a = 1,
            s = 0;
          for (this[t] = 255 & e; ++i < r && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1),
              (this[t + i] = (((e / a) >> 0) - s) & 255);
          return t + r;
        }),
        (l.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1);
            C(this, e, t, r, n - 1, -n);
          }
          let i = r - 1,
            a = 1,
            s = 0;
          for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1),
              (this[t + i] = (((e / a) >> 0) - s) & 255);
          return t + r;
        }),
        (l.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || C(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || C(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || C(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || C(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || C(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (l.prototype.writeBigInt64LE = Q(function (e, t = 0) {
          return W(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        })),
        (l.prototype.writeBigInt64BE = Q(function (e, t = 0) {
          return I(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        })),
        (l.prototype.writeFloatLE = function (e, t, r) {
          return N(this, e, t, !0, r);
        }),
        (l.prototype.writeFloatBE = function (e, t, r) {
          return N(this, e, t, !1, r);
        }),
        (l.prototype.writeDoubleLE = function (e, t, r) {
          return U(this, e, t, !0, r);
        }),
        (l.prototype.writeDoubleBE = function (e, t, r) {
          return U(this, e, t, !1, r);
        }),
        (l.prototype.copy = function (e, t, r, n) {
          if (!l.isBuffer(e))
            throw new TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          const i = n - r;
          return (
            this === e && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, n)
              : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
            i
          );
        }),
        (l.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !l.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
            if (1 === e.length) {
              const t = e.charCodeAt(0);
              (("utf8" === n && t < 128) || "latin1" === n) && (e = t);
            }
          } else
            "number" == typeof e
              ? (e &= 255)
              : "boolean" == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= t) return this;
          let i;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (i = t; i < r; ++i) this[i] = e;
          else {
            const a = l.isBuffer(e) ? e : l.from(e, n),
              s = a.length;
            if (0 === s)
              throw new TypeError(
                'The value "' + e + '" is invalid for argument "value"',
              );
            for (i = 0; i < r - t; ++i) this[i + t] = a[i % s];
          }
          return this;
        });
      const D = {};
      function A(e, t, r) {
        D[e] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function k(e) {
        let t = "",
          r = e.length;
        const n = "-" === e[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      function X(e, t, r, n, i, a) {
        if (e > r || e < t) {
          const n = "bigint" == typeof t ? "n" : "";
          let i;
          throw (
            ((i =
              a > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${n} and < 2${n} ** ${8 * (a + 1)}${n}`
                  : `>= -(2${n} ** ${8 * (a + 1) - 1}${n}) and < 2 ** ${8 * (a + 1) - 1}${n}`
                : `>= ${t}${n} and <= ${r}${n}`),
            new D.ERR_OUT_OF_RANGE("value", i, e))
          );
        }
        !(function (e, t, r) {
          L(t, "offset"),
            (void 0 !== e[t] && void 0 !== e[t + r]) ||
              q(t, e.length - (r + 1));
        })(n, i, a);
      }
      function L(e, t) {
        if ("number" != typeof e)
          throw new D.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      function q(e, t, r) {
        if (Math.floor(e) !== e)
          throw (
            (L(e, r), new D.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
          );
        if (t < 0) throw new D.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new D.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${t}`,
          e,
        );
      }
      A(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError,
      ),
        A(
          "ERR_INVALID_ARG_TYPE",
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError,
        ),
        A(
          "ERR_OUT_OF_RANGE",
          function (e, t, r) {
            let n = `The value of "${e}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 2 ** 32
                ? (i = k(String(r)))
                : "bigint" == typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = k(i)),
                  (i += "n")),
              (n += ` It must be ${t}. Received ${i}`),
              n
            );
          },
          RangeError,
        );
      const Z = /[^+/0-9A-Za-z-_]/g;
      function $(e, t) {
        let r;
        t = t || 1 / 0;
        const n = e.length;
        let i = null;
        const a = [];
        for (let s = 0; s < n; ++s) {
          if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }
              if (s + 1 === n) {
                (t -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && a.push(239, 191, 189), (i = r);
              continue;
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320));
          } else i && (t -= 3) > -1 && a.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((t -= 1) < 0) break;
            a.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            a.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            a.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            a.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128,
            );
          }
        }
        return a;
      }
      function V(e) {
        return n.toByteArray(
          (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(Z, "")).length < 2)
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e),
        );
      }
      function Y(e, t, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
      function H(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      function G(e) {
        return e != e;
      }
      const K = (function () {
        const e = "0123456789abcdef",
          t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          const n = 16 * r;
          for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
        }
        return t;
      })();
      function Q(e) {
        return "undefined" == typeof BigInt ? J : e;
      }
      function J() {
        throw new Error("BigInt not supported");
      }
    },
    4215: (e, t) => {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      (t.read = function (e, t, r, n, i) {
        var a,
          s,
          o = 8 * i - n - 1,
          l = (1 << o) - 1,
          c = l >> 1,
          u = -7,
          d = r ? i - 1 : 0,
          m = r ? -1 : 1,
          f = e[t + d];
        for (
          d += m, a = f & ((1 << -u) - 1), f >>= -u, u += o;
          u > 0;
          a = 256 * a + e[t + d], d += m, u -= 8
        );
        for (
          s = a & ((1 << -u) - 1), a >>= -u, u += n;
          u > 0;
          s = 256 * s + e[t + d], d += m, u -= 8
        );
        if (0 === a) a = 1 - c;
        else {
          if (a === l) return s ? NaN : (1 / 0) * (f ? -1 : 1);
          (s += Math.pow(2, n)), (a -= c);
        }
        return (f ? -1 : 1) * s * Math.pow(2, a - n);
      }),
        (t.write = function (e, t, r, n, i, a) {
          var s,
            o,
            l,
            c = 8 * a - i - 1,
            u = (1 << c) - 1,
            d = u >> 1,
            m = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            f = n ? 0 : a - 1,
            p = n ? 1 : -1,
            h = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((o = isNaN(t) ? 1 : 0), (s = u))
                : ((s = Math.floor(Math.log(t) / Math.LN2)),
                  t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                  (t += s + d >= 1 ? m / l : m * Math.pow(2, 1 - d)) * l >= 2 &&
                    (s++, (l /= 2)),
                  s + d >= u
                    ? ((o = 0), (s = u))
                    : s + d >= 1
                      ? ((o = (t * l - 1) * Math.pow(2, i)), (s += d))
                      : ((o = t * Math.pow(2, d - 1) * Math.pow(2, i)),
                        (s = 0)));
            i >= 8;
            e[r + f] = 255 & o, f += p, o /= 256, i -= 8
          );
          for (
            s = (s << i) | o, c += i;
            c > 0;
            e[r + f] = 255 & s, f += p, s /= 256, c -= 8
          );
          e[r + f - p] |= 128 * h;
        });
    },
    76711: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => Fn, A: () => qn });
      const n = (e, t, r = !1) => {
          if (!Array.isArray(e) || !Array.isArray(t))
            throw new Error("Both arguments should be arrays.");
          const n = e.length,
            i = t.length,
            a = new Array(n + i);
          if (r) {
            for (let e = 0; e < i; e++) a[e] = t[i - e - 1];
            for (let t = 0; t < n; t++) a[t + i] = e[t];
            return a;
          }
          for (let t = 0; t < n; t++) a[t] = e[t];
          for (let e = 0; e < i; e++) a[e + n] = t[e];
          return a;
        },
        i = (e, t = new Map()) => {
          if ("object" != typeof e || null === e) return !1;
          if (t.has(e)) return !0;
          if ((t.set(e, !0), Array.isArray(e))) {
            for (let r = 0; r < e.length; r++) if (i(e[r], t)) return !0;
            return !1;
          }
          for (const r in e) if (i(e[r], t)) return !0;
          return !1;
        },
        a = (e, t, r, n = 1 / 0) => {
          if (!e || "object" != typeof e) return JSON.stringify(e, t, r);
          const i =
            n < 1
              ? '"..."'
              : Array.isArray(e)
                ? `[${e.map((e) => a(e, t, r, n - 1)).join(",")}]`
                : `{${Object.keys(e)
                    .map((i) => `"${i}": ${a(e[i], t, r, n - 1)}`)
                    .join(", ")}}`;
          return JSON.stringify(JSON.parse(i), t, r);
        },
        s = (e, t = 1 / 0, r = !1) =>
          Number.isNaN(e) || null === e
            ? "null"
            : Array.isArray(e) || "object" == typeof e
              ? a(e, void 0, r ? 1 : void 0, t)
              : a(e),
        o = (e) =>
          "boolean" == typeof e
            ? 0
            : "number" == typeof e
              ? 1
              : "string" == typeof e
                ? 2
                : null === e
                  ? 3
                  : Array.isArray(e)
                    ? 4
                    : "object" == typeof e
                      ? 5
                      : -1,
        l = (e, t, r) => {
          const n = o(e),
            i = o(t);
          if (n !== i) return n - i;
          if (
            (null === e && null === t) ||
            (Array.isArray(e) && Array.isArray(t)) ||
            (5 === n && 5 === i)
          )
            return 0;
          switch (typeof e) {
            case "number":
              return e - t;
            case "string":
              return (
                (null == r ? void 0 : r.ignoreCase) &&
                  ((e = e.toLowerCase()), (t = t.toLowerCase())),
                e < t ? -1 : e > t ? 1 : 0
              );
            case "boolean":
              return +e - +t;
          }
          return 0;
        },
        c = (e) =>
          Array.isArray(e) ? "array" : null === e ? "null" : typeof e,
        u = (e, t, r, n, i, a, o, c) => {
          const u = { ignoreCase: c.ignoreCase },
            d = s(i, c.maxDepth, !0).split("\n"),
            m = s(a, c.maxDepth, !0).split("\n");
          if (0 !== l(i, a, u))
            if (c.showModifications) {
              const i = Math.max(d.length, m.length);
              for (let e = d.length; e < i; e++) d.push("");
              for (let e = m.length; e < i; e++) m.push("");
              e.push({
                level: o,
                type: "modify",
                text: r ? `"${r}": ${d[0]}` : d[0],
              });
              for (let t = 1; t < d.length; t++) {
                var f, p;
                e.push({
                  level:
                    o +
                    ((null == (f = d[t].match(/^\s+/)) || null == (p = f[0])
                      ? void 0
                      : p.length) || 0),
                  type: "modify",
                  text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let t = d.length; t < i; t++)
                e.push({ level: o, type: "equal", text: "" });
              t.push({
                level: o,
                type: "modify",
                text: n ? `"${n}": ${m[0]}` : m[0],
              });
              for (let e = 1; e < m.length; e++) {
                var h, y;
                t.push({
                  level:
                    o +
                    ((null == (h = m[e].match(/^\s+/)) || null == (y = h[0])
                      ? void 0
                      : y.length) || 0),
                  type: "modify",
                  text: m[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let e = m.length; e < i; e++)
                t.push({ level: o, type: "equal", text: "" });
            } else {
              e.push({
                level: o,
                type: "remove",
                text: r ? `"${r}": ${d[0]}` : d[0],
              });
              for (let t = 1; t < d.length; t++) {
                var b, g;
                e.push({
                  level:
                    o +
                    ((null == (b = d[t].match(/^\s+/)) || null == (g = b[0])
                      ? void 0
                      : g.length) || 0),
                  type: "remove",
                  text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let t = 0; t < m.length; t++)
                e.push({ level: o, type: "equal", text: "" });
              for (let e = 0; e < d.length; e++)
                t.push({ level: o, type: "equal", text: "" });
              t.push({
                level: o,
                type: "add",
                text: n ? `"${n}": ${m[0]}` : m[0],
              });
              for (let e = 1; e < m.length; e++) {
                var _, B;
                t.push({
                  level:
                    o +
                    ((null == (_ = m[e].match(/^\s+/)) || null == (B = _[0])
                      ? void 0
                      : B.length) || 0),
                  type: "add",
                  text: m[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
            }
          else {
            const i = Math.max(d.length, m.length);
            for (let e = d.length; e < i; e++) d.push("");
            for (let e = m.length; e < i; e++) m.push("");
            e.push({
              level: o,
              type: "equal",
              text: r ? `"${r}": ${d[0]}` : d[0],
            });
            for (let t = 1; t < d.length; t++) {
              var w, v;
              e.push({
                level:
                  o +
                  ((null == (w = d[t].match(/^\s+/)) || null == (v = w[0])
                    ? void 0
                    : v.length) || 0),
                type: "equal",
                text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
              });
            }
            t.push({
              level: o,
              type: "equal",
              text: n ? `"${n}": ${m[0]}` : m[0],
            });
            for (let e = 1; e < m.length; e++) {
              var M, z;
              t.push({
                level:
                  o +
                  ((null == (M = m[e].match(/^\s+/)) || null == (z = M[0])
                    ? void 0
                    : z.length) || 0),
                type: "equal",
                text: m[e].replace(/^\s+/, "").replace(/,$/g, ""),
              });
            }
          }
        },
        d = (e, t) =>
          e.sort((e, r) => l(e, r, { ignoreCase: t.ignoreCaseForKey })),
        m = (e, t, r = 1, i, s) => {
          if (r > (i.maxDepth || 1 / 0))
            return [
              [{ level: r, type: "equal", text: "..." }],
              [{ level: r, type: "equal", text: "..." }],
            ];
          let o = [],
            f = [];
          if ((null === e && null === t) || (void 0 === e && void 0 === t))
            return [o, f];
          if (null == e) {
            const e = a(t, void 0, 1).split("\n");
            for (let t = 0; t < e.length; t++) {
              var p, h;
              o.push({ level: r, type: "equal", text: "" }),
                f.push({
                  level:
                    r +
                    ((null == (p = e[t].match(/^\s+/)) || null == (h = p[0])
                      ? void 0
                      : h.length) || 0),
                  type: "add",
                  text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
            }
            return [o, f];
          }
          if (null == t) {
            const t = a(e, void 0, 1).split("\n");
            for (let e = 0; e < t.length; e++) {
              var y, b;
              o.push({
                level:
                  r +
                  ((null == (y = t[e].match(/^\s+/)) || null == (b = y[0])
                    ? void 0
                    : b.length) || 0),
                type: "remove",
                text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
              }),
                f.push({ level: r, type: "equal", text: "" });
            }
            return [o, f];
          }
          const g = Object.keys(e),
            _ = Object.keys(t);
          d(g, i), d(_, i);
          const B = { ignoreCase: i.ignoreCaseForKey };
          for (i.ignoreCase; g.length || _.length; ) {
            const d = g[0],
              p = _[0],
              h = l(d, p, B);
            if (0 === h)
              if (c(e[d]) !== c(t[p])) u(o, f, d, p, e[d], t[p], r, i);
              else if (Array.isArray(e[d])) {
                const a = [...e[d]],
                  l = [...t[p]],
                  [c, u] = s(a, l, d, p, r, i, [], []);
                (o = n(o, c)), (f = n(f, u));
              } else if (null === e[d])
                o.push({ level: r, type: "equal", text: `"${d}": null` }),
                  f.push({ level: r, type: "equal", text: `"${p}": null` });
              else if ("object" == typeof e[d]) {
                const a = m(e[d], t[p], r + 1, i, s);
                o.push({ level: r, type: "equal", text: `"${d}": {` }),
                  (o = n(o, a[0])),
                  o.push({ level: r, type: "equal", text: "}" }),
                  f.push({ level: r, type: "equal", text: `"${p}": {` }),
                  (f = n(f, a[1])),
                  f.push({ level: r, type: "equal", text: "}" });
              } else u(o, f, d, p, e[d], t[p], r, i);
            else if (g.length && _.length)
              if (d < p) {
                const t = a(e[d], void 0, 1).split("\n");
                for (let e = 0; e < t.length; e++) {
                  var w, v;
                  const n = t[e].replace(/^\s+/, "").replace(/,$/g, "");
                  o.push({
                    level:
                      r +
                      ((null == (w = t[e].match(/^\s+/)) || null == (v = w[0])
                        ? void 0
                        : v.length) || 0),
                    type: "remove",
                    text: e ? n : `"${d}": ${n}`,
                  }),
                    f.push({ level: r, type: "equal", text: "" });
                }
              } else {
                const e = a(t[p], void 0, 1).split("\n");
                for (let t = 0; t < e.length; t++) {
                  var M, z;
                  const n = e[t].replace(/^\s+/, "").replace(/,$/g, "");
                  o.push({ level: r, type: "equal", text: "" }),
                    f.push({
                      level:
                        r +
                        ((null == (M = e[t].match(/^\s+/)) || null == (z = M[0])
                          ? void 0
                          : z.length) || 0),
                      type: "add",
                      text: t ? n : `"${p}": ${n}`,
                    });
                }
              }
            else if (g.length) {
              const t = a(e[d], void 0, 1).split("\n");
              for (let e = 0; e < t.length; e++) {
                var S, F;
                const n = t[e].replace(/^\s+/, "").replace(/,$/g, "");
                o.push({
                  level:
                    r +
                    ((null == (S = t[e].match(/^\s+/)) || null == (F = S[0])
                      ? void 0
                      : F.length) || 0),
                  type: "remove",
                  text: e ? n : `"${d}": ${n}`,
                }),
                  f.push({ level: r, type: "equal", text: "" });
              }
            } else if (_.length) {
              const e = a(t[p], void 0, 1).split("\n");
              for (let t = 0; t < e.length; t++) {
                var E, O;
                const n = e[t].replace(/^\s+/, "").replace(/,$/g, "");
                o.push({ level: r, type: "equal", text: "" }),
                  f.push({
                    level:
                      r +
                      ((null == (E = e[t].match(/^\s+/)) || null == (O = E[0])
                        ? void 0
                        : O.length) || 0),
                    type: "add",
                    text: t ? n : `"${p}": ${n}`,
                  });
              }
            }
            d
              ? p
                ? 0 === h
                  ? (g.shift(), _.shift())
                  : h < 0
                    ? g.shift()
                    : _.shift()
                : g.shift()
              : _.shift();
          }
          if (o.length !== f.length)
            throw new Error(
              "Diff error: length not match for left & right, please report a bug with your data.",
            );
          return [o, f];
        };
      var f = function () {
        (this.__data__ = []), (this.size = 0);
      };
      var p = function (e, t) {
          return e === t || (e != e && t != t);
        },
        h = p;
      var y = function (e, t) {
          for (var r = e.length; r--; ) if (h(e[r][0], t)) return r;
          return -1;
        },
        b = y,
        g = Array.prototype.splice;
      var _ = y;
      var B = y;
      var w = y;
      var v = f,
        M = function (e) {
          var t = this.__data__,
            r = b(t, e);
          return (
            !(r < 0) &&
            (r == t.length - 1 ? t.pop() : g.call(t, r, 1), --this.size, !0)
          );
        },
        z = function (e) {
          var t = this.__data__,
            r = _(t, e);
          return r < 0 ? void 0 : t[r][1];
        },
        S = function (e) {
          return B(this.__data__, e) > -1;
        },
        F = function (e, t) {
          var r = this.__data__,
            n = w(r, e);
          return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
        };
      function E(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (E.prototype.clear = v),
        (E.prototype.delete = M),
        (E.prototype.get = z),
        (E.prototype.has = S),
        (E.prototype.set = F);
      var O = E,
        R = O;
      var j = function () {
        (this.__data__ = new R()), (this.size = 0);
      };
      var x = function (e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      };
      var T = function (e) {
        return this.__data__.get(e);
      };
      var C = function (e) {
          return this.__data__.has(e);
        },
        W =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
              ? window
              : void 0 !== r.g
                ? r.g
                : "undefined" != typeof self
                  ? self
                  : {},
        I = "object" == typeof W && W && W.Object === Object && W,
        P = I,
        N = "object" == typeof self && self && self.Object === Object && self,
        U = P || N || Function("return this")(),
        D = U.Symbol,
        A = D,
        k = Object.prototype,
        X = k.hasOwnProperty,
        L = k.toString,
        q = A ? A.toStringTag : void 0;
      var Z = function (e) {
          var t = X.call(e, q),
            r = e[q];
          try {
            e[q] = void 0;
            var n = !0;
          } catch (e) {}
          var i = L.call(e);
          return n && (t ? (e[q] = r) : delete e[q]), i;
        },
        $ = Object.prototype.toString;
      var V = Z,
        Y = function (e) {
          return $.call(e);
        },
        H = D ? D.toStringTag : void 0;
      var G = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : H && H in Object(e)
            ? V(e)
            : Y(e);
      };
      var K = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        },
        Q = G,
        J = K;
      var ee,
        te = function (e) {
          if (!J(e)) return !1;
          var t = Q(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        },
        re = U["__core-js_shared__"],
        ne = (ee = /[^.]+$/.exec((re && re.keys && re.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + ee
          : "";
      var ie = function (e) {
          return !!ne && ne in e;
        },
        ae = Function.prototype.toString;
      var se = function (e) {
          if (null != e) {
            try {
              return ae.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        },
        oe = te,
        le = ie,
        ce = K,
        ue = se,
        de = /^\[object .+?Constructor\]$/,
        me = Function.prototype,
        fe = Object.prototype,
        pe = me.toString,
        he = fe.hasOwnProperty,
        ye = RegExp(
          "^" +
            pe
              .call(he)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      var be = function (e) {
          return !(!ce(e) || le(e)) && (oe(e) ? ye : de).test(ue(e));
        },
        ge = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      var _e = function (e, t) {
          var r = ge(e, t);
          return be(r) ? r : void 0;
        },
        Be = _e(U, "Map"),
        we = _e(Object, "create"),
        ve = we;
      var Me = function () {
        (this.__data__ = ve ? ve(null) : {}), (this.size = 0);
      };
      var ze = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        },
        Se = we,
        Fe = Object.prototype.hasOwnProperty;
      var Ee = function (e) {
          var t = this.__data__;
          if (Se) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r;
          }
          return Fe.call(t, e) ? t[e] : void 0;
        },
        Oe = we,
        Re = Object.prototype.hasOwnProperty;
      var je = we;
      var xe = Me,
        Te = ze,
        Ce = Ee,
        We = function (e) {
          var t = this.__data__;
          return Oe ? void 0 !== t[e] : Re.call(t, e);
        },
        Ie = function (e, t) {
          var r = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = je && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      function Pe(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (Pe.prototype.clear = xe),
        (Pe.prototype.delete = Te),
        (Pe.prototype.get = Ce),
        (Pe.prototype.has = We),
        (Pe.prototype.set = Ie);
      var Ne = Pe,
        Ue = O,
        De = Be;
      var Ae = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      var ke = function (e, t) {
          var r = e.__data__;
          return Ae(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
        },
        Xe = ke;
      var Le = ke;
      var qe = ke;
      var Ze = ke;
      var $e = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new Ne(),
              map: new (De || Ue)(),
              string: new Ne(),
            });
        },
        Ve = function (e) {
          var t = Xe(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        },
        Ye = function (e) {
          return Le(this, e).get(e);
        },
        He = function (e) {
          return qe(this, e).has(e);
        },
        Ge = function (e, t) {
          var r = Ze(this, e),
            n = r.size;
          return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
        };
      function Ke(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (Ke.prototype.clear = $e),
        (Ke.prototype.delete = Ve),
        (Ke.prototype.get = Ye),
        (Ke.prototype.has = He),
        (Ke.prototype.set = Ge);
      var Qe = Ke,
        Je = O,
        et = Be,
        tt = Qe;
      var rt = O,
        nt = j,
        it = x,
        at = T,
        st = C,
        ot = function (e, t) {
          var r = this.__data__;
          if (r instanceof Je) {
            var n = r.__data__;
            if (!et || n.length < 199)
              return n.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new tt(n);
          }
          return r.set(e, t), (this.size = r.size), this;
        };
      function lt(e) {
        var t = (this.__data__ = new rt(e));
        this.size = t.size;
      }
      (lt.prototype.clear = nt),
        (lt.prototype.delete = it),
        (lt.prototype.get = at),
        (lt.prototype.has = st),
        (lt.prototype.set = ot);
      var ct = lt;
      var ut = Qe,
        dt = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        },
        mt = function (e) {
          return this.__data__.has(e);
        };
      function ft(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new ut(); ++t < r; ) this.add(e[t]);
      }
      (ft.prototype.add = ft.prototype.push = dt), (ft.prototype.has = mt);
      var pt = ft,
        ht = function (e, t) {
          for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
            if (t(e[r], r, e)) return !0;
          return !1;
        },
        yt = function (e, t) {
          return e.has(t);
        };
      var bt = function (e, t, r, n, i, a) {
        var s = 1 & r,
          o = e.length,
          l = t.length;
        if (o != l && !(s && l > o)) return !1;
        var c = a.get(e),
          u = a.get(t);
        if (c && u) return c == t && u == e;
        var d = -1,
          m = !0,
          f = 2 & r ? new pt() : void 0;
        for (a.set(e, t), a.set(t, e); ++d < o; ) {
          var p = e[d],
            h = t[d];
          if (n) var y = s ? n(h, p, d, t, e, a) : n(p, h, d, e, t, a);
          if (void 0 !== y) {
            if (y) continue;
            m = !1;
            break;
          }
          if (f) {
            if (
              !ht(t, function (e, t) {
                if (!yt(f, t) && (p === e || i(p, e, r, n, a)))
                  return f.push(t);
              })
            ) {
              m = !1;
              break;
            }
          } else if (p !== h && !i(p, h, r, n, a)) {
            m = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), m;
      };
      var gt = U.Uint8Array,
        _t = p,
        Bt = bt,
        wt = function (e) {
          var t = -1,
            r = Array(e.size);
          return (
            e.forEach(function (e, n) {
              r[++t] = [n, e];
            }),
            r
          );
        },
        vt = function (e) {
          var t = -1,
            r = Array(e.size);
          return (
            e.forEach(function (e) {
              r[++t] = e;
            }),
            r
          );
        },
        Mt = D ? D.prototype : void 0,
        zt = Mt ? Mt.valueOf : void 0;
      var St = function (e, t, r, n, i, a, s) {
        switch (r) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !a(new gt(e), new gt(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return _t(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var o = wt;
          case "[object Set]":
            var l = 1 & n;
            if ((o || (o = vt), e.size != t.size && !l)) return !1;
            var c = s.get(e);
            if (c) return c == t;
            (n |= 2), s.set(e, t);
            var u = Bt(o(e), o(t), n, i, a, s);
            return s.delete(e), u;
          case "[object Symbol]":
            if (zt) return zt.call(e) == zt.call(t);
        }
        return !1;
      };
      var Ft = function (e, t) {
          for (var r = -1, n = t.length, i = e.length; ++r < n; )
            e[i + r] = t[r];
          return e;
        },
        Et = Array.isArray,
        Ot = Ft,
        Rt = Et;
      var jt = function (e, t, r) {
        var n = t(e);
        return Rt(e) ? n : Ot(n, r(e));
      };
      var xt = function (e, t) {
          for (
            var r = -1, n = null == e ? 0 : e.length, i = 0, a = [];
            ++r < n;

          ) {
            var s = e[r];
            t(s, r, e) && (a[i++] = s);
          }
          return a;
        },
        Tt = function () {
          return [];
        },
        Ct = Object.prototype.propertyIsEnumerable,
        Wt = Object.getOwnPropertySymbols,
        It = Wt
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  xt(Wt(e), function (t) {
                    return Ct.call(e, t);
                  }));
            }
          : Tt;
      var Pt = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      };
      var Nt = function (e) {
          return null != e && "object" == typeof e;
        },
        Ut = G,
        Dt = Nt;
      var At = function (e) {
          return Dt(e) && "[object Arguments]" == Ut(e);
        },
        kt = Nt,
        Xt = Object.prototype,
        Lt = Xt.hasOwnProperty,
        qt = Xt.propertyIsEnumerable,
        Zt = At(
          (function () {
            return arguments;
          })(),
        )
          ? At
          : function (e) {
              return kt(e) && Lt.call(e, "callee") && !qt.call(e, "callee");
            },
        $t = { exports: {} };
      var Vt = function () {
        return !1;
      };
      !(function (e, t) {
        var r = U,
          n = Vt,
          i = t && !t.nodeType && t,
          a = i && e && !e.nodeType && e,
          s = a && a.exports === i ? r.Buffer : void 0,
          o = (s ? s.isBuffer : void 0) || n;
        e.exports = o;
      })($t, $t.exports);
      var Yt = /^(?:0|[1-9]\d*)$/;
      var Ht = function (e, t) {
        var r = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == r || ("symbol" != r && Yt.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
      var Gt = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        },
        Kt = G,
        Qt = Gt,
        Jt = Nt,
        er = {};
      (er["[object Float32Array]"] =
        er["[object Float64Array]"] =
        er["[object Int8Array]"] =
        er["[object Int16Array]"] =
        er["[object Int32Array]"] =
        er["[object Uint8Array]"] =
        er["[object Uint8ClampedArray]"] =
        er["[object Uint16Array]"] =
        er["[object Uint32Array]"] =
          !0),
        (er["[object Arguments]"] =
          er["[object Array]"] =
          er["[object ArrayBuffer]"] =
          er["[object Boolean]"] =
          er["[object DataView]"] =
          er["[object Date]"] =
          er["[object Error]"] =
          er["[object Function]"] =
          er["[object Map]"] =
          er["[object Number]"] =
          er["[object Object]"] =
          er["[object RegExp]"] =
          er["[object Set]"] =
          er["[object String]"] =
          er["[object WeakMap]"] =
            !1);
      var tr = function (e) {
        return Jt(e) && Qt(e.length) && !!er[Kt(e)];
      };
      var rr = function (e) {
          return function (t) {
            return e(t);
          };
        },
        nr = { exports: {} };
      !(function (e, t) {
        var r = I,
          n = t && !t.nodeType && t,
          i = n && e && !e.nodeType && e,
          a = i && i.exports === n && r.process,
          s = (function () {
            try {
              var e = i && i.require && i.require("util").types;
              return e || (a && a.binding && a.binding("util"));
            } catch (e) {}
          })();
        e.exports = s;
      })(nr, nr.exports);
      var ir = tr,
        ar = rr,
        sr = nr.exports,
        or = sr && sr.isTypedArray,
        lr = or ? ar(or) : ir,
        cr = Pt,
        ur = Zt,
        dr = Et,
        mr = $t.exports,
        fr = Ht,
        pr = lr,
        hr = Object.prototype.hasOwnProperty;
      var yr = function (e, t) {
          var r = dr(e),
            n = !r && ur(e),
            i = !r && !n && mr(e),
            a = !r && !n && !i && pr(e),
            s = r || n || i || a,
            o = s ? cr(e.length, String) : [],
            l = o.length;
          for (var c in e)
            (!t && !hr.call(e, c)) ||
              (s &&
                ("length" == c ||
                  (i && ("offset" == c || "parent" == c)) ||
                  (a &&
                    ("buffer" == c ||
                      "byteLength" == c ||
                      "byteOffset" == c)) ||
                  fr(c, l))) ||
              o.push(c);
          return o;
        },
        br = Object.prototype;
      var gr = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || br);
      };
      var _r = (function (e, t) {
          return function (r) {
            return e(t(r));
          };
        })(Object.keys, Object),
        Br = gr,
        wr = _r,
        vr = Object.prototype.hasOwnProperty;
      var Mr = te,
        zr = Gt;
      var Sr = yr,
        Fr = function (e) {
          if (!Br(e)) return wr(e);
          var t = [];
          for (var r in Object(e))
            vr.call(e, r) && "constructor" != r && t.push(r);
          return t;
        },
        Er = function (e) {
          return null != e && zr(e.length) && !Mr(e);
        };
      var Or = jt,
        Rr = It,
        jr = function (e) {
          return Er(e) ? Sr(e) : Fr(e);
        };
      var xr = function (e) {
          return Or(e, jr, Rr);
        },
        Tr = Object.prototype.hasOwnProperty;
      var Cr = function (e, t, r, n, i, a) {
          var s = 1 & r,
            o = xr(e),
            l = o.length;
          if (l != xr(t).length && !s) return !1;
          for (var c = l; c--; ) {
            var u = o[c];
            if (!(s ? u in t : Tr.call(t, u))) return !1;
          }
          var d = a.get(e),
            m = a.get(t);
          if (d && m) return d == t && m == e;
          var f = !0;
          a.set(e, t), a.set(t, e);
          for (var p = s; ++c < l; ) {
            var h = e[(u = o[c])],
              y = t[u];
            if (n) var b = s ? n(y, h, u, t, e, a) : n(h, y, u, e, t, a);
            if (!(void 0 === b ? h === y || i(h, y, r, n, a) : b)) {
              f = !1;
              break;
            }
            p || (p = "constructor" == u);
          }
          if (f && !p) {
            var g = e.constructor,
              _ = t.constructor;
            g == _ ||
              !("constructor" in e) ||
              !("constructor" in t) ||
              ("function" == typeof g &&
                g instanceof g &&
                "function" == typeof _ &&
                _ instanceof _) ||
              (f = !1);
          }
          return a.delete(e), a.delete(t), f;
        },
        Wr = _e(U, "DataView"),
        Ir = Be,
        Pr = _e(U, "Promise"),
        Nr = _e(U, "Set"),
        Ur = _e(U, "WeakMap"),
        Dr = G,
        Ar = se,
        kr = "[object Map]",
        Xr = "[object Promise]",
        Lr = "[object Set]",
        qr = "[object WeakMap]",
        Zr = "[object DataView]",
        $r = Ar(Wr),
        Vr = Ar(Ir),
        Yr = Ar(Pr),
        Hr = Ar(Nr),
        Gr = Ar(Ur),
        Kr = Dr;
      ((Wr && Kr(new Wr(new ArrayBuffer(1))) != Zr) ||
        (Ir && Kr(new Ir()) != kr) ||
        (Pr && Kr(Pr.resolve()) != Xr) ||
        (Nr && Kr(new Nr()) != Lr) ||
        (Ur && Kr(new Ur()) != qr)) &&
        (Kr = function (e) {
          var t = Dr(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? Ar(r) : "";
          if (n)
            switch (n) {
              case $r:
                return Zr;
              case Vr:
                return kr;
              case Yr:
                return Xr;
              case Hr:
                return Lr;
              case Gr:
                return qr;
            }
          return t;
        });
      var Qr = ct,
        Jr = bt,
        en = St,
        tn = Cr,
        rn = Kr,
        nn = Et,
        an = $t.exports,
        sn = lr,
        on = "[object Arguments]",
        ln = "[object Array]",
        cn = "[object Object]",
        un = Object.prototype.hasOwnProperty;
      var dn = function (e, t, r, n, i, a) {
          var s = nn(e),
            o = nn(t),
            l = s ? ln : rn(e),
            c = o ? ln : rn(t),
            u = (l = l == on ? cn : l) == cn,
            d = (c = c == on ? cn : c) == cn,
            m = l == c;
          if (m && an(e)) {
            if (!an(t)) return !1;
            (s = !0), (u = !1);
          }
          if (m && !u)
            return (
              a || (a = new Qr()),
              s || sn(e) ? Jr(e, t, r, n, i, a) : en(e, t, l, r, n, i, a)
            );
          if (!(1 & r)) {
            var f = u && un.call(e, "__wrapped__"),
              p = d && un.call(t, "__wrapped__");
            if (f || p) {
              var h = f ? e.value() : e,
                y = p ? t.value() : t;
              return a || (a = new Qr()), i(h, y, r, n, a);
            }
          }
          return !!m && (a || (a = new Qr()), tn(e, t, r, n, i, a));
        },
        mn = Nt;
      var fn = function e(t, r, n, i, a) {
          return (
            t === r ||
            (null == t || null == r || (!mn(t) && !mn(r))
              ? t != t && r != r
              : dn(t, r, n, i, e, a))
          );
        },
        pn = fn;
      var hn = function (e, t, r) {
        var n = (r = "function" == typeof r ? r : void 0) ? r(e, t) : void 0;
        return void 0 === n ? pn(e, t, void 0, r) : !!n;
      };
      const yn = (e, t, r) =>
          r.ignoreCase
            ? "string" == typeof e &&
              "string" == typeof t &&
              e.toLowerCase() === t.toLowerCase()
            : r.recursiveEqual
              ? hn(e, t, (e, t) =>
                  r.ignoreCase && "string" == typeof e && "string" == typeof t
                    ? e.toLowerCase() === t.toLowerCase()
                    : void 0,
                )
              : e === t,
        bn = (e, t) => {
          if (e === t) return 1;
          if (null === e || null === t) return 0;
          if ("object" != typeof e || "object" != typeof t) return 0;
          const r = Object.keys(e),
            n = Object.keys(t),
            i = r.length,
            a = n.length;
          if (0 === i || 0 === a) return 0;
          const s = new Set(r),
            o = new Set(n),
            l = new Set([...s].filter((e) => o.has(e)));
          return 0 === l.size
            ? 0
            : 1 !== l.size || (1 !== i && 1 !== a) || e[r[0]] === t[n[0]]
              ? Math.max(l.size / i, l.size / a)
              : 0;
        },
        gn = (e, t, r, i, o, l, d = [], f = []) => {
          if (
            (r && i
              ? (d.push({ level: o, type: "equal", text: `"${r}": [` }),
                f.push({ level: o, type: "equal", text: `"${i}": [` }))
              : (d.push({ level: o, type: "equal", text: "[" }),
                f.push({ level: o, type: "equal", text: "[" })),
            o >= (l.maxDepth || 1 / 0))
          )
            d.push({ level: o + 1, type: "equal", text: "..." }),
              f.push({ level: o + 1, type: "equal", text: "..." });
          else {
            const [p, h] = ((e, t, r, i, o, l) => {
              const d = Array(e.length + 1)
                  .fill(0)
                  .map(() => Array(t.length + 1).fill(0)),
                f = Array(e.length + 1)
                  .fill(0)
                  .map(() => Array(t.length + 1).fill(0));
              for (let t = 1; t <= e.length; t++) f[t][0] = "up";
              for (let e = 1; e <= t.length; e++) f[0][e] = "left";
              for (let r = 1; r <= e.length; r++)
                for (let n = 1; n <= t.length; n++) {
                  const i = c(e[r - 1]);
                  i !== c(t[n - 1]) || ("array" !== i && "object" !== i)
                    ? yn(e[r - 1], t[n - 1], l)
                      ? ((d[r][n] = d[r - 1][n - 1] + 1), (f[r][n] = "diag"))
                      : d[r - 1][n] >= d[r][n - 1]
                        ? ((d[r][n] = d[r - 1][n]), (f[r][n] = "up"))
                        : ((d[r][n] = d[r][n - 1]), (f[r][n] = "left"))
                    : l.recursiveEqual
                      ? yn(e[r - 1], t[n - 1], l) ||
                        bn(e[r - 1], t[n - 1]) > 0.5
                        ? ((d[r][n] = d[r - 1][n - 1] + 1), (f[r][n] = "diag"))
                        : d[r - 1][n] >= d[r][n - 1]
                          ? ((d[r][n] = d[r - 1][n]), (f[r][n] = "up"))
                          : ((d[r][n] = d[r][n - 1]), (f[r][n] = "left"))
                      : ((d[r][n] = d[r - 1][n - 1] + 1), (f[r][n] = "diag"));
                }
              let p = e.length,
                h = t.length,
                y = [],
                b = [];
              for (; p > 0 || h > 0; )
                if ("diag" === f[p][h]) {
                  const a = c(e[p - 1]);
                  if (
                    l.recursiveEqual &&
                    ("array" === a || "object" === a) &&
                    yn(e[p - 1], t[h - 1], l)
                  ) {
                    const r = [],
                      i = [];
                    u(r, i, "", "", e[p - 1], t[h - 1], o + 1, l),
                      (y = n(y, r.reverse(), !0)),
                      (b = n(b, i.reverse(), !0));
                  } else if ("array" === a) {
                    const [a, s] = gn(e[p - 1], t[h - 1], r, i, o + 1, l);
                    (y = n(y, a.reverse(), !0)), (b = n(b, s.reverse(), !0));
                  } else if ("object" === a) {
                    const [r, i] = m(e[p - 1], t[h - 1], o + 2, l, gn);
                    y.unshift({ level: o + 1, type: "equal", text: "}" }),
                      b.unshift({ level: o + 1, type: "equal", text: "}" }),
                      (y = n(y, r.reverse(), !0)),
                      (b = n(b, i.reverse(), !0)),
                      y.unshift({ level: o + 1, type: "equal", text: "{" }),
                      b.unshift({ level: o + 1, type: "equal", text: "{" });
                  } else {
                    const r = [],
                      i = [];
                    u(r, i, "", "", e[p - 1], t[h - 1], o + 1, l),
                      (y = n(y, r.reverse(), !0)),
                      (b = n(b, i.reverse(), !0));
                  }
                  p--, h--;
                } else if ("up" === f[p][h])
                  if (l.showModifications && p > 1 && "left" === f[p - 1][h]) {
                    const a = c(e[p - 1]);
                    if (a === c(t[h - 1]))
                      if ("array" === a) {
                        const [a, s] = gn(e[p - 1], t[h - 1], r, i, o + 1, l);
                        (y = n(y, a.reverse(), !0)),
                          (b = n(b, s.reverse(), !0));
                      } else if ("object" === a) {
                        const [r, i] = m(e[p - 1], t[h - 1], o + 2, l, gn);
                        y.unshift({ level: o + 1, type: "equal", text: "}" }),
                          b.unshift({ level: o + 1, type: "equal", text: "}" }),
                          (y = n(y, r.reverse(), !0)),
                          (b = n(b, i.reverse(), !0)),
                          y.unshift({ level: o + 1, type: "equal", text: "{" }),
                          b.unshift({ level: o + 1, type: "equal", text: "{" });
                      } else
                        y.unshift({
                          level: o + 1,
                          type: "modify",
                          text: s(e[p - 1]),
                        }),
                          b.unshift({
                            level: o + 1,
                            type: "modify",
                            text: s(t[h - 1]),
                          });
                    else {
                      const r = [],
                        i = [];
                      u(r, i, "", "", e[p - 1], t[h - 1], o + 1, l),
                        (y = n(y, r.reverse(), !0)),
                        (b = n(b, i.reverse(), !0));
                    }
                    p--, h--;
                  } else {
                    const t = a(e[p - 1], void 0, 1).split("\n");
                    for (let e = t.length - 1; e >= 0; e--) {
                      var g, _;
                      y.unshift({
                        level:
                          o +
                          1 +
                          ((null == (g = t[e].match(/^\s+/)) ||
                          null == (_ = g[0])
                            ? void 0
                            : _.length) || 0),
                        type: "remove",
                        text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
                      }),
                        b.unshift({ level: o + 1, type: "equal", text: "" });
                    }
                    p--;
                  }
                else {
                  const e = a(t[h - 1], void 0, 1).split("\n");
                  for (let t = e.length - 1; t >= 0; t--) {
                    var B, w;
                    y.unshift({ level: o + 1, type: "equal", text: "" }),
                      b.unshift({
                        level:
                          o +
                          1 +
                          ((null == (B = e[t].match(/^\s+/)) ||
                          null == (w = B[0])
                            ? void 0
                            : w.length) || 0),
                        type: "add",
                        text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                      });
                  }
                  h--;
                }
              return [y, b];
            })(e, t, r, i, o, l);
            (d = n(d, p)), (f = n(f, h));
          }
          return (
            d.push({ level: o, type: "equal", text: "]" }),
            f.push({ level: o, type: "equal", text: "]" }),
            [d, f]
          );
        },
        _n = (e, t, r, i, a, o, l = [], d = []) => {
          if (
            ((e = [...e]),
            (t = [...t]),
            r && i
              ? (l.push({ level: a, type: "equal", text: `"${r}": [` }),
                d.push({ level: a, type: "equal", text: `"${i}": [` }))
              : (l.push({ level: a, type: "equal", text: "[" }),
                d.push({ level: a, type: "equal", text: "[" })),
            a >= (o.maxDepth || 1 / 0))
          )
            l.push({ level: a + 1, type: "equal", text: "..." }),
              d.push({ level: a + 1, type: "equal", text: "..." });
          else
            for (; e.length || t.length; ) {
              const r = e[0],
                i = t[0],
                b = c(r),
                g = c(i);
              if (e.length && t.length) {
                if (b !== g) u(l, d, "", "", r, i, a + 1, o);
                else if (
                  o.recursiveEqual &&
                  ["object", "array"].includes(b) &&
                  yn(r, i, o)
                )
                  u(l, d, "", "", r, i, a + 1, o);
                else if ("object" === b) {
                  l.push({ level: a + 1, type: "equal", text: "{" }),
                    d.push({ level: a + 1, type: "equal", text: "{" });
                  const [e, t] = m(r, i, a + 2, o, _n);
                  (l = n(l, e)),
                    (d = n(d, t)),
                    l.push({ level: a + 1, type: "equal", text: "}" }),
                    d.push({ level: a + 1, type: "equal", text: "}" });
                } else if ("array" === b) {
                  const [e, t] = _n(r, i, "", "", a + 1, o, [], []);
                  (l = n(l, e)), (d = n(d, t));
                } else
                  r === i
                    ? (l.push({ level: a + 1, type: "equal", text: s(r) }),
                      d.push({ level: a + 1, type: "equal", text: s(i) }))
                    : o.showModifications
                      ? (l.push({ level: a + 1, type: "modify", text: s(r) }),
                        d.push({ level: a + 1, type: "modify", text: s(i) }))
                      : (l.push({ level: a + 1, type: "remove", text: s(r) }),
                        l.push({ level: a + 1, type: "equal", text: "" }),
                        d.push({ level: a + 1, type: "equal", text: "" }),
                        d.push({ level: a + 1, type: "add", text: s(i) }));
                e.shift(), t.shift();
              } else if (e.length) {
                const t = s(r, void 0, !0).split("\n");
                for (let e = 0; e < t.length; e++) {
                  var f, p;
                  l.push({
                    level:
                      a +
                      1 +
                      ((null == (f = t[e].match(/^\s+/)) || null == (p = f[0])
                        ? void 0
                        : p.length) || 0),
                    type: "remove",
                    text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
                  }),
                    d.push({ level: a + 1, type: "equal", text: "" });
                }
                e.shift();
              } else if (t.length) {
                const e = s(i, void 0, !0).split("\n");
                for (let t = 0; t < e.length; t++) {
                  var h, y;
                  l.push({ level: a + 1, type: "equal", text: "" }),
                    d.push({
                      level:
                        a +
                        1 +
                        ((null == (h = e[t].match(/^\s+/)) || null == (y = h[0])
                          ? void 0
                          : y.length) || 0),
                      type: "add",
                      text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                    });
                }
                t.shift();
              }
            }
          return (
            l.push({ level: a, type: "equal", text: "]" }),
            d.push({ level: a, type: "equal", text: "]" }),
            [l, d]
          );
        };
      function Bn() {
        return (
          (Bn =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          Bn.apply(this, arguments)
        );
      }
      const wn = (e, t) => {
        if (!e || "object" != typeof e) return e;
        if (Array.isArray(e)) {
          const r = [...e];
          return (
            r.sort((e, r) =>
              l(e, r, { ignoreCase: null == t ? void 0 : t.ignoreCase }),
            ),
            r.map((e) => wn(e, t))
          );
        }
        const r = Bn({}, e);
        for (const e in r) r[e] = wn(r[e], t);
        return r;
      };
      function vn() {
        return (
          (vn =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          vn.apply(this, arguments)
        );
      }
      const Mn = { level: 0, type: "equal", text: "" },
        zn = { level: 0, type: "equal", text: "{" },
        Sn = { level: 0, type: "equal", text: "}" };
      let Fn = class {
        detectCircular(e) {
          if (this.options.detectCircular && i(e))
            throw new Error(
              `Circular reference detected in object (with keys ${Object.keys(e)
                .map((e) => `"${e}"`)
                .join(", ")})`,
            );
        }
        sortResultLines(e, t) {
          for (let r = 0; r < e.length; r++) {
            let r = !1;
            for (let n = 1; n < e.length; n++)
              if (
                "remove" === e[n].type &&
                "equal" === e[n - 1].type &&
                "equal" === t[n].type &&
                "add" === t[n - 1].type
              ) {
                const i = e[n - 1];
                (e[n - 1] = e[n]), (e[n] = i);
                const a = t[n - 1];
                (t[n - 1] = t[n]), (t[n] = a), (r = !0);
              }
            if (!r) break;
          }
        }
        calculateLineNumbers(e) {
          let t = 0;
          for (const r of e) r.text && (r.lineNumber = ++t);
        }
        calculateCommas(e) {
          const t = Array(e.length).fill(0);
          for (let r = e.length - 1; r > 0; r--)
            e[r].text ? (t[r - 1] = r) : (t[r - 1] = t[r]);
          for (let r = 0; r < e.length; r++)
            !e[r].text.endsWith("{") &&
              !e[r].text.endsWith("[") &&
              e[r].text &&
              t[r] &&
              e[r].level <= e[t[r]].level &&
              (e[r].comma = !0);
        }
        diff(e, t) {
          this.detectCircular(e),
            this.detectCircular(t),
            ("unorder-normal" !== this.options.arrayDiffMethod &&
              "unorder-lcs" !== this.options.arrayDiffMethod) ||
              ((e = wn(e, this.options)), (t = wn(t, this.options)));
          let r = [],
            i = [];
          const s = c(e);
          if (s !== c(t)) {
            (r = a(e, void 0, 1, this.options.maxDepth)
              .split("\n")
              .map((e) => {
                var t, r;
                return {
                  level:
                    (null == (t = e.match(/^\s+/)) || null == (r = t[0])
                      ? void 0
                      : r.length) || 0,
                  type: "remove",
                  text: e.replace(/^\s+/, "").replace(/,$/g, ""),
                  comma: e.endsWith(","),
                };
              })),
              (i = a(t, void 0, 1, this.options.maxDepth)
                .split("\n")
                .map((e) => {
                  var t, r;
                  return {
                    level:
                      (null == (t = e.match(/^\s+/)) || null == (r = t[0])
                        ? void 0
                        : r.length) || 0,
                    type: "add",
                    text: e.replace(/^\s+/, "").replace(/,$/g, ""),
                    comma: e.endsWith(","),
                  };
                }));
            const s = r.length,
              o = i.length;
            (r = n(
              r,
              Array(o)
                .fill(0)
                .map(() => vn({}, Mn)),
            )),
              (i = n(
                i,
                Array(s)
                  .fill(0)
                  .map(() => vn({}, Mn)),
                !0,
              ));
          } else
            "object" === s
              ? (([r, i] = m(e, t, 1, this.options, this.arrayDiffFunc)),
                r.unshift(vn({}, zn)),
                r.push(vn({}, Sn)),
                i.unshift(vn({}, zn)),
                i.push(vn({}, Sn)))
              : "array" === s
                ? ([r, i] = this.arrayDiffFunc(e, t, "", "", 0, this.options))
                : e !== t
                  ? this.options.ignoreCase
                    ? "string" == typeof e &&
                      "string" == typeof t &&
                      e.toLowerCase() === t.toLowerCase() &&
                      ((r = [{ level: 0, type: "equal", text: e }]),
                      (i = [{ level: 0, type: "equal", text: t }]))
                    : this.options.showModifications
                      ? ((r = [
                          {
                            level: 0,
                            type: "modify",
                            text: a(e, void 0, void 0, this.options.maxDepth),
                          },
                        ]),
                        (i = [
                          {
                            level: 0,
                            type: "modify",
                            text: a(t, void 0, void 0, this.options.maxDepth),
                          },
                        ]))
                      : ((r = [
                          {
                            level: 0,
                            type: "remove",
                            text: a(e, void 0, void 0, this.options.maxDepth),
                          },
                          vn({}, Mn),
                        ]),
                        (i = [
                          vn({}, Mn),
                          {
                            level: 0,
                            type: "add",
                            text: a(t, void 0, void 0, this.options.maxDepth),
                          },
                        ]))
                  : ((r = [
                      {
                        level: 0,
                        type: "equal",
                        text: a(e, void 0, void 0, this.options.maxDepth),
                      },
                    ]),
                    (i = [
                      {
                        level: 0,
                        type: "equal",
                        text: a(t, void 0, void 0, this.options.maxDepth),
                      },
                    ]));
          return (
            this.sortResultLines(r, i),
            this.calculateLineNumbers(r),
            this.calculateLineNumbers(i),
            this.calculateCommas(r),
            this.calculateCommas(i),
            [r, i]
          );
        }
        constructor({
          detectCircular: e = !0,
          maxDepth: t = 1 / 0,
          showModifications: r = !0,
          arrayDiffMethod: n = "normal",
          ignoreCase: i = !1,
          ignoreCaseForKey: a = !1,
          recursiveEqual: s = !1,
        } = {}) {
          (this.options = {
            detectCircular: e,
            maxDepth: t,
            showModifications: r,
            arrayDiffMethod: n,
            ignoreCase: i,
            ignoreCaseForKey: a,
            recursiveEqual: s,
          }),
            (this.arrayDiffFunc = "lcs" === n || "unorder-lcs" === n ? gn : _n);
        }
      };
      var En = r(47427);
      function On() {
        return (
          (On =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          On.apply(this, arguments)
        );
      }
      const Rn = (e) => "hasLinesBefore" in e || "hasLinesAfter" in e,
        jn = (e, t, r) => (Rn(e) ? r : t * (e.end - e.start + 1)),
        xn = (e, t) => {
          const r = [];
          let n, i;
          if (e.length && t.length)
            for (
              e = [...e],
                t = [...t],
                n = On({}, e.shift()),
                i = On({}, t.shift());
              ;

            ) {
              if (n.start === i.start) {
                const e = Math.min(n.end, i.end);
                r.push(On({}, n, i, { end: e })), (n.start = i.start = e);
              } else if (n.start < i.start) {
                const e = Math.min(n.end, i.start);
                r.push(On({}, i, n, { end: e })), (n.start = e);
              } else {
                const e = Math.min(n.start, i.end);
                r.push(On({}, n, i, { end: e })), (i.start = e);
              }
              if (!e.length || !t.length) break;
              n.start === n.end && (n = On({}, e.shift())),
                i.start === i.end && (i = On({}, t.shift()));
            }
          return (
            e.length ||
              r.push(...t.map((e) => On({}, e, { token: n.token || "plain" }))),
            t.length || r.push(...e),
            r
          );
        };
      var Tn = {};
      Object.defineProperty(Tn, "__esModule", { value: !0 }),
        (Tn.applyPatch =
          Tn.calcPatch =
          Nn =
          Tn.lcs =
          Tn.diff =
          Tn.diff_core =
            void 0);
      let Cn = class {
        [Symbol.iterator]() {
          return this;
        }
        next() {
          const { state: e, result: t } = this;
          if (this.c > 1) return (t.done = !0), (t.value = void 0), t;
          const r = (function (e, t) {
            const { b: r, eq: n, stack_base: i } = e;
            let { i: a, N: s, j: o, M: l, Z: c, stack_top: u } = e;
            for (;;)
              switch (t) {
                case 0:
                  e: for (; s > 0 && l > 0; ) {
                    r.fill(0, 0, 2 * c);
                    const e = s - l,
                      t = s + l,
                      d = 1 & t,
                      m = a + s - 1,
                      f = o + l - 1,
                      p = (t + d) / 2;
                    let h;
                    t: for (let t = 0; t <= p; t++) {
                      const p = 2 * Math.max(0, t - l) - t,
                        y = t - 2 * Math.max(0, t - s);
                      for (let m = p; m <= y; m += 2) {
                        const f = r[m - 1 - c * Math.floor((m - 1) / c)],
                          p = r[m + 1 - c * Math.floor((m + 1) / c)],
                          y = m === -t || (m !== t && f < p) ? p : f + 1,
                          b = y - m;
                        let g = y,
                          _ = b;
                        for (; g < s && _ < l && n(a + g, o + _); ) g++, _++;
                        if (
                          ((r[m - c * Math.floor(m / c)] = g),
                          1 === d &&
                            (h = e - m) >= 1 - t &&
                            h < t &&
                            g + r[c + h - c * Math.floor(h / c)] >= s)
                        ) {
                          if (t > 1 || g !== y) {
                            (i[u++] = a + g),
                              (i[u++] = s - g),
                              (i[u++] = o + _),
                              (i[u++] = l - _),
                              (s = y),
                              (l = b),
                              (c = 2 * (Math.min(s, l) + 1));
                            continue e;
                          }
                          break t;
                        }
                      }
                      for (let b = p; b <= y; b += 2) {
                        const p = r[c + b - 1 - c * Math.floor((b - 1) / c)],
                          y = r[c + b + 1 - c * Math.floor((b + 1) / c)],
                          g = b === -t || (b !== t && p < y) ? y : p + 1,
                          _ = g - b;
                        let B = g,
                          w = _;
                        for (; B < s && w < l && n(m - B, f - w); ) B++, w++;
                        if (
                          ((r[c + b - c * Math.floor(b / c)] = B),
                          0 === d &&
                            (h = e - b) >= -t &&
                            h <= t &&
                            B + r[h - c * Math.floor(h / c)] >= s)
                        ) {
                          if (t > 0 || B !== g) {
                            (i[u++] = a + s - g),
                              (i[u++] = g),
                              (i[u++] = o + l - _),
                              (i[u++] = _),
                              (s -= B),
                              (l -= w),
                              (c = 2 * (Math.min(s, l) + 1));
                            continue e;
                          }
                          break t;
                        }
                      }
                    }
                    if (s !== l) {
                      l > s
                        ? ((a += s), (o += s), (l -= s), (s = 0))
                        : ((a += l), (o += l), (s -= l), (l = 0));
                      break;
                    }
                  }
                  if (s + l !== 0)
                    if (e.pxe === a || e.pye === o)
                      (e.pxe = a + s), (e.pye = o + l);
                    else {
                      const t = e.pxs;
                      if (
                        ((e.oxs = e.pxs),
                        (e.oxe = e.pxe),
                        (e.oys = e.pys),
                        (e.oye = e.pye),
                        (e.pxs = a),
                        (e.pxe = a + s),
                        (e.pys = o),
                        (e.pye = o + l),
                        t >= 0)
                      )
                        return (
                          (e.i = a),
                          (e.N = s),
                          (e.j = o),
                          (e.M = l),
                          (e.Z = c),
                          (e.stack_top = u),
                          1
                        );
                    }
                case 1:
                  if (0 === u) return 2;
                  (l = i[--u]),
                    (o = i[--u]),
                    (s = i[--u]),
                    (a = i[--u]),
                    (c = 2 * (Math.min(s, l) + 1)),
                    (t = 0);
              }
          })(e, this.c);
          return (
            (this.c = r),
            1 === r
              ? ((t.value = [e.oxs, e.oxe, e.oys, e.oye]), t)
              : e.pxs >= 0
                ? ((t.value = [e.pxs, e.pxe, e.pys, e.pye]), t)
                : ((t.done = !0), (t.value = void 0), t)
          );
        }
        constructor(e) {
          (this.state = e),
            (this.c = 0),
            (this.result = { value: null, done: !1 });
        }
      };
      function Wn(e, t, r, n, i) {
        const a = 2 * (Math.min(t, n) + 1),
          s = t + n,
          o = new (
            s < 256 ? Uint8Array : s < 65536 ? Uint16Array : Uint32Array
          )(2 * a);
        return new Cn({
          i: e,
          N: t,
          j: r,
          M: n,
          Z: a,
          b: o,
          eq: i,
          pxs: -1,
          pxe: -1,
          pys: -1,
          pye: -1,
          oxs: -1,
          oxe: -1,
          oys: -1,
          oye: -1,
          stack_top: 0,
          stack_base: [],
        });
      }
      function In(e, t) {
        let [r, n, i] = [0, e.length, t.length];
        for (; r < n && r < i && e[r] === t[r]; ) r++;
        if (r === n && r === i) return [][Symbol.iterator]();
        for (; e[--n] === t[--i] && n > r && i > r; );
        return Wn(r, n + 1 - r, r, i + 1 - r, (r, n) => e[r] === t[n]);
      }
      (Tn.diff_core = Wn), (Tn.diff = In);
      let Pn = class {
        [Symbol.iterator]() {
          return this;
        }
        next() {
          const e = this.diff.next();
          if (e.done) {
            const { i: t, j: r, N: n } = this;
            return (
              t < n && ((e.done = !1), (e.value = [t, r, n - t]), (this.i = n)),
              e
            );
          }
          const t = e.value,
            r = t[0],
            n = t[1],
            i = t[3],
            { i: a, j: s } = this;
          return (
            a !== r && (t.length--, (t[0] = a), (t[1] = s), (t[2] = r - a)),
            (this.i = n),
            (this.j = i),
            e
          );
        }
        constructor(e, t) {
          (this.diff = e), (this.N = t), (this.i = 0), (this.j = 0);
        }
      };
      var Nn = (Tn.lcs = function (e, t) {
        return new Pn(In(e, t), e.length);
      });
      (Tn.calcPatch = function* (e, t) {
        const r = ArrayBuffer.isView(e)
          ? Uint8Array.prototype.subarray
          : e.slice;
        for (const n of In(e, t)) (n[2] = r.call(t, n[2], n[3])), yield n;
      }),
        (Tn.applyPatch = function* (e, t) {
          let r = 0;
          const n = ArrayBuffer.isView(e)
            ? Uint8Array.prototype.subarray
            : e.slice;
          for (const [i, a, s] of t)
            r < i && (yield n.call(e, r, i)),
              s.length > 0 && (yield s),
              (r = a);
          r < e.length && (yield n.call(e, r));
        });
      const Un = (e, t) => {
          const r = [];
          let n = 0;
          for (const i of e) r.push(n), (n += i.length + t);
          return r.push(n - t), r;
        },
        Dn = (e) => e.filter((e) => e.end > e.start),
        An = (e, t, r) => {
          if (!e) return [{ token: "plain", start: r, end: t.length + r }];
          if (!Number.isNaN(Number(t)))
            return [{ token: "number", start: r, end: t.length + r }];
          if ("true" === t || "false" === t)
            return [{ token: "boolean", start: r, end: t.length + r }];
          if ("null" === t)
            return [{ token: "null", start: r, end: t.length + r }];
          if (t.startsWith('"')) {
            if (t.endsWith(": [") || t.endsWith(": {"))
              return [
                { token: "key", start: r, end: t.length - 3 + r },
                {
                  token: "punctuation",
                  start: t.length - 3,
                  end: t.length - 2 + r,
                },
                { token: "plain", start: t.length - 2, end: t.length - 1 + r },
                {
                  token: "punctuation",
                  start: t.length - 1,
                  end: t.length + r,
                },
              ];
            let n = 1;
            for (; n < t.length && '"' !== t[n]; ) "\\" === t[n] && ++n, ++n;
            return n === t.length - 1
              ? [{ token: "string", start: r, end: t.length + r }]
              : [
                  { token: "key", start: r, end: n + 1 + r },
                  { token: "punctuation", start: n + 1, end: n + 2 + r },
                  { token: "plain", start: n + 2, end: n + 3 + r },
                  ...An(e, t.substring(n + 3), r + n + 3),
                ];
          }
          return "{" === t || "}" === t || "[" === t || "]" === t
            ? [{ token: "punctuation", start: r, end: t.length + r }]
            : [{ token: "plain", start: r, end: t.length + r }];
        },
        kn = { threshold: 8, margin: 3 },
        Xn = (e, t, r) => {
          if (!r) return [{ start: 0, end: e.length, isEqual: !1 }];
          const n = [];
          for (let r = 0; r < e.length; r++)
            "equal" === e[r].type && "equal" === t[r].type
              ? n.length && n[n.length - 1].isEqual
                ? n[n.length - 1].end++
                : n.push({ start: r, end: r + 1, isEqual: !0 })
              : n.length && !n[n.length - 1].isEqual
                ? n[n.length - 1].end++
                : n.push({ start: r, end: r + 1, isEqual: !1 });
          const i = !0 === r ? kn : r,
            { threshold: a, margin: s } = i;
          a < 2 * s + 1 &&
            console.warn(
              `Threshold (${a}) is no more than 2 margins + 1 "expand" line (${s} * 2 + 1), it's not necessary to hide unchanged areas which have less than ${2 * s + 1} lines.`,
            );
          const o = [];
          for (let t = 0; t < n.length; t++) {
            const r = n[t];
            !r.isEqual || r.end - r.start < a || r.end - r.start <= 2 * s + 1
              ? o.push(r)
              : t
                ? t === n.length - 1
                  ? (o.push({ start: r.start, end: r.start + s, isEqual: !0 }),
                    o.push({
                      hasLinesBefore: !1,
                      hasLinesAfter: !0,
                      start: r.start + s,
                      end: e.length,
                      isEqual: !0,
                    }))
                  : (o.push({ start: r.start, end: r.start + s, isEqual: !0 }),
                    o.push({
                      hasLinesBefore: !0,
                      hasLinesAfter: !0,
                      start: r.start + s,
                      end: r.end - s,
                      isEqual: !0,
                    }),
                    o.push({ start: r.end - s, end: r.end, isEqual: !0 }))
                : (o.push({
                    hasLinesBefore: !0,
                    hasLinesAfter: !1,
                    start: 0,
                    end: r.end - s,
                    isEqual: !0,
                  }),
                  o.push({ start: r.end - s, end: r.end, isEqual: !0 }));
          }
          return o;
        };
      function Ln() {
        return (
          (Ln =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          Ln.apply(this, arguments)
        );
      }
      const qn = (e) => {
        var t, r;
        const [n, i] = e.diff,
          a = e.lineNumbers ? `calc(${String(n.length).length}ch + 16px)` : 0;
        var s;
        const o = null != (s = e.indent) ? s : 2,
          l = "tab" === o ? "\t" : " ",
          c = "tab" === o ? 1 : o,
          u = {
            mode:
              (null == (t = e.inlineDiffOptions) ? void 0 : t.mode) || "char",
            wordSeparator:
              (null == (r = e.inlineDiffOptions) ? void 0 : r.wordSeparator) ||
              "",
          };
        var d;
        const m = null != (d = e.hideUnchangedLines) && d,
          {
            scrollContainer: f = "body",
            itemHeight: p = 18,
            expandLineHeight: h = 26,
          } = e.virtual && !0 !== e.virtual ? e.virtual : {},
          y = "body" === f ? document.body : document.querySelector(f),
          b = En.useRef(n),
          g = En.useRef(i),
          _ = En.useRef(Xn(n, i, m)),
          B = En.useRef([]),
          w = En.useRef(0),
          v = En.useRef(null),
          [, M] = En.useState({}),
          z = () => {
            if (((B.current = []), e.virtual)) {
              let e = 0;
              for (const t of _.current)
                Rn(t)
                  ? (B.current.push(e), (e += h))
                  : (B.current.push(e), (e += p * (t.end - t.start)));
              w.current = _.current.reduce(
                (e, t) => (Rn(t) ? e + h : e + (t.end - t.start) * p),
                0,
              );
            }
            M({});
          };
        En.useEffect(() => {
          (b.current = n), (g.current = i), (_.current = Xn(n, i, m)), z();
        }, [m, n, i]),
          En.useEffect(() => {
            if (!e.virtual || !y) return;
            const t = () => M({});
            return (
              y.addEventListener("scroll", t),
              () => {
                y.removeEventListener("scroll", t);
              }
            );
          }, [e.virtual, y]);
        const S = (e) => (t) => {
            const r = [..._.current],
              n = r[e];
            (r[e] = Ln({}, n, { end: Math.max(n.end - t, n.start) })),
              e + 1 < _.current.length - 1 &&
                (r[e + 1] = Ln({}, r[e + 1], {
                  start: Math.max(n.end - t, n.start),
                })),
              (_.current = r),
              z();
          },
          F = (e) => (t) => {
            const r = [..._.current],
              n = r[e];
            (r[e] = Ln({}, n, { start: Math.min(n.start + t, n.end) })),
              e > 1 &&
                (r[e - 1] = Ln({}, r[e - 1], {
                  end: Math.min(n.start + t, n.end),
                })),
              (_.current = r),
              z();
          },
          E = (e) => () => {
            const t = [..._.current],
              r = t[e];
            (t[e] = Ln({}, r, { start: r.start, end: r.start })),
              e + 1 < _.current.length - 1
                ? (t[e + 1] = Ln({}, t[e + 1], { start: r.start }))
                : (t[e - 1] = Ln({}, t[e - 1], { end: r.end })),
              (_.current = t),
              z();
          },
          O = (e, t = [], r = !1, n = !1) =>
            En.createElement(
              En.Fragment,
              null,
              t.map((t, r) => {
                const n = e.slice(t.start, t.end);
                if (!t.type && !t.token) return n;
                const i = [
                  t.type ? `inline-diff-${t.type}` : "",
                  t.token ? `token ${t.token}` : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return En.createElement(
                  "span",
                  { key: `${r}-${t.type}-${n}`, className: i },
                  n,
                );
              }),
              r &&
                (n
                  ? En.createElement(
                      "span",
                      { className: "token punctuation" },
                      ",",
                    )
                  : ","),
            ),
          R = (t, r) => {
            var n, i;
            const a = b.current[t],
              s = g.current[t],
              [o, d] =
                e.highlightInlineDiff &&
                "modify" === a.type &&
                "modify" === s.type
                  ? ((e, t, r) => {
                      let n = [],
                        i = [],
                        a = 0,
                        s = 0;
                      if ("word" === r.mode) {
                        const o = r.wordSeparator || " ",
                          l = e.split(o),
                          c = t.split(o),
                          u = [...Nn(l, c)],
                          d = o.length,
                          m = Un(l, d),
                          f = Un(c, d);
                        for (const [e, t, r] of u)
                          e > a &&
                            n.push({ type: "remove", start: m[a], end: m[e] }),
                            t > s &&
                              i.push({ type: "add", start: f[s], end: f[t] }),
                            (a = e + r),
                            (s = t + r),
                            n.push({ start: m[e], end: m[a] }),
                            i.push({ start: f[t], end: f[s] });
                        return (
                          e.length > a &&
                            n.push({
                              type: "remove",
                              start: m[a],
                              end: e.length,
                            }),
                          t.length > s &&
                            i.push({ type: "add", start: f[s], end: t.length }),
                          (n = Dn(n)),
                          (i = Dn(i)),
                          [n, i]
                        );
                      }
                      const o = Nn(e, t);
                      for (const [e, t, r] of o)
                        e > a && n.push({ type: "remove", start: a, end: e }),
                          t > s && i.push({ type: "add", start: s, end: t }),
                          (a = e + r),
                          (s = t + r),
                          n.push({ start: e, end: a }),
                          i.push({ start: t, end: s });
                      return (
                        e.length > a &&
                          n.push({ type: "remove", start: a, end: e.length }),
                        t.length > s &&
                          i.push({ type: "add", start: s, end: t.length }),
                        (n = Dn(n)),
                        (i = Dn(i)),
                        [n, i]
                      );
                    })(a.text, s.text, u)
                  : [[], []],
              m = An(r, a.text, 0),
              f = An(r, s.text, 0),
              p = xn(m, o),
              h = xn(f, d);
            var y;
            const _ =
              "equal" !== a.type &&
              null != (y = null == (n = e.bgColour) ? void 0 : n[a.type])
                ? y
                : "";
            var B;
            const w =
              "equal" !== s.type &&
              null != (B = null == (i = e.bgColour) ? void 0 : i[s.type])
                ? B
                : "";
            return En.createElement(
              "tr",
              { key: t },
              e.lineNumbers &&
                En.createElement(
                  "td",
                  {
                    className: `line-${a.type} line-number`,
                    style: { backgroundColor: _ },
                  },
                  a.lineNumber,
                ),
              En.createElement(
                "td",
                { className: `line-${a.type}`, style: { backgroundColor: _ } },
                En.createElement(
                  "pre",
                  null,
                  a.text && l.repeat(a.level * c),
                  O(a.text, p, a.comma, r),
                ),
              ),
              e.lineNumbers &&
                En.createElement(
                  "td",
                  {
                    className: `line-${s.type} line-number`,
                    style: { backgroundColor: w },
                  },
                  s.lineNumber,
                ),
              En.createElement(
                "td",
                { className: `line-${s.type}`, style: { backgroundColor: w } },
                En.createElement(
                  "pre",
                  null,
                  s.text && l.repeat(s.level * c),
                  O(s.text, h, s.comma, r),
                ),
              ),
            );
          },
          j = (e, t, r, n) =>
            En.createElement(
              En.Fragment,
              null,
              e &&
                En.createElement(
                  "button",
                  { onClick: () => S(n)(r) },
                  "⬆️ Show ",
                  r,
                  " lines before",
                ),
              En.createElement(
                "button",
                { onClick: () => E(n)() },
                "↕️ Show all unchanged lines",
              ),
              t &&
                En.createElement(
                  "button",
                  { onClick: () => F(n)(r) },
                  "⬇️ Show ",
                  r,
                  " lines after",
                ),
            ),
          x = (e, t, r, n, i) => {
            let { start: a, end: s } = e;
            if (((a = Math.max(a, r)), (s = Math.min(s, n)), a === s))
              return null;
            if (!Rn(e))
              return Array(s - a)
                .fill(0)
                .map((e, t) => R(a + t, i));
            const { hasLinesBefore: o, hasLinesAfter: l } = e,
              c = "boolean" == typeof m ? 20 : m.expandMoreLinesLimit || 20;
            return [
              En.createElement(
                "tr",
                { key: `expand-line-${t}`, className: "expand-line" },
                En.createElement(
                  "td",
                  {
                    colSpan: 4,
                    className: `${o ? "has-lines-before" : ""} ${l ? "has-lines-after" : ""}`,
                  },
                  "boolean" != typeof m && m.expandLineRenderer
                    ? m.expandLineRenderer({
                        hasLinesBefore: o,
                        hasLinesAfter: l,
                        onExpandBefore: S(t),
                        onExpandAfter: F(t),
                        onExpandAll: E(t),
                      })
                    : j(o, l, c, t),
                ),
              ),
            ];
          },
          T = [
            "json-diff-viewer",
            e.virtual && "json-diff-viewer-virtual",
            e.syntaxHighlight &&
              `json-diff-viewer-theme-${e.syntaxHighlight.theme || "monokai"}`,
            e.className,
          ]
            .filter(Boolean)
            .join(" "),
          C = !!e.syntaxHighlight;
        return En.createElement(
          "table",
          { className: T, style: e.style },
          En.createElement(
            "colgroup",
            { className: "measure-line" },
            e.lineNumbers && En.createElement("col", { style: { width: a } }),
            En.createElement("col", null),
            e.lineNumbers && En.createElement("col", { style: { width: a } }),
            En.createElement("col", null),
          ),
          En.createElement(
            "tbody",
            { ref: v },
            ((t) => {
              if (!e.virtual)
                return _.current.map((e, r) => x(e, r, 0, b.current.length, t));
              var r;
              const n =
                null != (r = null == y ? void 0 : y.clientHeight) ? r : 0;
              var i;
              const a = null != (i = null == y ? void 0 : y.scrollTop) ? i : 0,
                s = a + n;
              let o = v.current;
              var l;
              let c = null != (l = null == o ? void 0 : o.offsetTop) ? l : 0;
              for (
                ;
                (null == o ? void 0 : o.offsetParent) &&
                (null == o ? void 0 : o.offsetParent) !== y;

              )
                (o = o.offsetParent), (c += o.offsetTop);
              if (c > s || c + w.current < a)
                return En.createElement(
                  "tr",
                  null,
                  En.createElement("td", {
                    colSpan: 4,
                    style: { height: `${w.current}px` },
                  }),
                );
              const u = a - c,
                d = s - c,
                [m, f, g, M] = ((e, t, r, n, i, a) => {
                  if (!t.length) return [0, 0, 0, 0];
                  let s = 0,
                    o = 0,
                    l = 0,
                    c = 0,
                    u = 0,
                    d = e.length - 1;
                  for (;;) {
                    let n = Math.floor((u + d) / 2);
                    if (
                      (t[n] + jn(e[n], i, a) <= r ? (u = n + 1) : (d = n),
                      u === d)
                    ) {
                      s = u;
                      break;
                    }
                  }
                  const m = e[s];
                  for (
                    l = Rn(m) ? m.start : m.start + Math.floor((r - t[s]) / i),
                      u = 0,
                      d = e.length - 1;
                    ;

                  ) {
                    let e = Math.floor((u + d + 1) / 2);
                    if ((t[e] >= n ? (d = e - 1) : (u = e), u === d)) {
                      o = u;
                      break;
                    }
                  }
                  const f = e[o];
                  return (
                    (c = Rn(f) ? f.end : f.start + Math.ceil((n - t[o]) / i)),
                    [s, l, o, c]
                  );
                })(_.current, B.current, u, d, p, h),
                [z, S] = ((e, t, r, n, i, a, s, o, l) => {
                  if (!t.length) return [0, 0];
                  let c = 0,
                    u = 0;
                  const d = e[r];
                  c = Rn(d) ? t[r] : t[r] + (n - d.start) * s;
                  const m = e[i];
                  return (
                    (u = Rn(m) ? l - t[i] - o : l - t[i] - (a - m.start) * s),
                    [c, u]
                  );
                })(_.current, B.current, m, f, g, M, p, h, w.current),
                F = _.current.slice(m, g + 1);
              return F.length
                ? En.createElement(
                    En.Fragment,
                    null,
                    En.createElement(
                      "tr",
                      null,
                      En.createElement("td", {
                        colSpan: 4,
                        style: { height: z, padding: 0 },
                      }),
                    ),
                    F.map((e, r) => x(e, r, f, M, t)),
                    En.createElement(
                      "tr",
                      null,
                      En.createElement("td", {
                        colSpan: 4,
                        style: { height: S, padding: 0 },
                      }),
                    ),
                  )
                : En.createElement(
                    "tr",
                    null,
                    En.createElement("td", {
                      colSpan: 4,
                      style: { height: `${w.current}px` },
                    }),
                  );
            })(C),
          ),
        );
      };
      qn.displayName = "Viewer";
    },
    39234: (e, t, r) => {
      "use strict";
      r.d(t, {
        C: () => o,
        G: () => H,
        J: () => h,
        K: () => y,
        L: () => G,
        M: () => d,
        N: () => te,
        P: () => m,
        _: () => b,
        a: () => p,
        b: () => de,
        c: () => q,
        d: () => L,
        e: () => Y,
        f: () => g,
        g: () => w,
        h: () => c,
        i: () => F,
        j: () => _,
        k: () => V,
        l: () => W,
        m: () => B,
        n: () => D,
        o: () => $,
        p: () => Z,
        q: () => u,
        r: () => M,
        s: () => S,
        t: () => U,
        u: () => me,
        v: () => ue,
        w: () => fe,
        x: () => ae,
        y: () => x,
        z: () => T,
      });
      var n = r(47427);
      function i(e) {
        let t;
        const r = new Set(),
          n = (e, n) => {
            const i = "function" == typeof e ? e(t) : e;
            if (i !== t) {
              const e = t;
              (t = n ? i : Object.assign({}, t, i)), r.forEach((r) => r(t, e));
            }
          },
          i = () => t,
          a = {
            setState: n,
            getState: i,
            subscribe: (e, n, a) =>
              n || a
                ? ((e, n = i, a = Object.is) => {
                    console.warn(
                      "[DEPRECATED] Please use `subscribeWithSelector` middleware",
                    );
                    let s = n(t);
                    function o() {
                      const r = n(t);
                      if (!a(s, r)) {
                        const t = s;
                        e((s = r), t);
                      }
                    }
                    return r.add(o), () => r.delete(o);
                  })(e, n, a)
                : (r.add(e), () => r.delete(e)),
            destroy: () => r.clear(),
          };
        return (t = e(n, i, a)), a;
      }
      const a =
        "undefined" == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? n.useEffect
          : n.useLayoutEffect;
      function s(e) {
        const t = "function" == typeof e ? i(e) : e,
          r = (e = t.getState, r = Object.is) => {
            const [, i] = (0, n.useReducer)((e) => e + 1, 0),
              s = t.getState(),
              o = (0, n.useRef)(s),
              l = (0, n.useRef)(e),
              c = (0, n.useRef)(r),
              u = (0, n.useRef)(!1),
              d = (0, n.useRef)();
            let m;
            void 0 === d.current && (d.current = e(s));
            let f = !1;
            (o.current !== s ||
              l.current !== e ||
              c.current !== r ||
              u.current) &&
              ((m = e(s)), (f = !r(d.current, m))),
              a(() => {
                f && (d.current = m),
                  (o.current = s),
                  (l.current = e),
                  (c.current = r),
                  (u.current = !1);
              });
            const p = (0, n.useRef)(s);
            a(() => {
              const e = () => {
                  try {
                    const e = t.getState(),
                      r = l.current(e);
                    c.current(d.current, r) ||
                      ((o.current = e), (d.current = r), i());
                  } catch (e) {
                    (u.current = !0), i();
                  }
                },
                r = t.subscribe(e);
              return t.getState() !== p.current && e(), r;
            }, []);
            const h = f ? m : d.current;
            return (0, n.useDebugValue)(h), h;
          };
        return (
          Object.assign(r, t),
          (r[Symbol.iterator] = function () {
            console.warn(
              "[useStore, api] = create() is deprecated and will be removed in v4",
            );
            const e = [r, t];
            return {
              next() {
                const t = e.length <= 0;
                return { value: e.shift(), done: t };
              },
            };
          }),
          r
        );
      }
      var o,
        l,
        c,
        u,
        d,
        m,
        f = r(96295);
      function p(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function y(e, t) {
        if (e) {
          if ("string" == typeof e) return h(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? h(e, t)
                : void 0
          );
        }
      }
      function b(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                i,
                a = [],
                s = !0,
                o = !1;
              try {
                for (
                  r = r.call(e);
                  !(s = (n = r.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  s = !0
                );
              } catch (e) {
                (o = !0), (i = e);
              } finally {
                try {
                  s || null == r.return || r.return();
                } finally {
                  if (o) throw i;
                }
              }
              return a;
            }
          })(e, t) ||
          y(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      !(function (e) {
        (e.Strict = "strict"), (e.Loose = "loose");
      })(o || (o = {})),
        (function (e) {
          (e.Lines = "lines"), (e.Dots = "dots");
        })(l || (l = {})),
        (function (e) {
          (e.Free = "free"),
            (e.Vertical = "vertical"),
            (e.Horizontal = "horizontal");
        })(c || (c = {})),
        (function (e) {
          (e.Bezier = "default"),
            (e.Straight = "straight"),
            (e.Step = "step"),
            (e.SmoothStep = "smoothstep"),
            (e.SimpleBezier = "simplebezier");
        })(u || (u = {})),
        (function (e) {
          (e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed");
        })(d || (d = {})),
        (function (e) {
          (e.Left = "left"),
            (e.Top = "top"),
            (e.Right = "right"),
            (e.Bottom = "bottom");
        })(m || (m = {}));
      var g = function (e) {
          return { width: e.offsetWidth, height: e.offsetHeight };
        },
        _ = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return Math.min(Math.max(e, t), r);
        },
        B = function (e, t) {
          return { x: _(e.x, t[0][0], t[1][0]), y: _(e.y, t[0][1], t[1][1]) };
        },
        w = function (e) {
          var t, r;
          return (
            (null === (t = e.getRootNode) || void 0 === t
              ? void 0
              : t.call(e)) ||
            (null === (r = window) || void 0 === r ? void 0 : r.document)
          );
        },
        v = function (e, t) {
          return {
            x: Math.min(e.x, t.x),
            y: Math.min(e.y, t.y),
            x2: Math.max(e.x2, t.x2),
            y2: Math.max(e.y2, t.y2),
          };
        },
        M = function (e) {
          var t = e.x,
            r = e.y;
          return { x: t, y: r, x2: t + e.width, y2: r + e.height };
        },
        z = function (e) {
          var t = e.x,
            r = e.y;
          return { x: t, y: r, width: e.x2 - t, height: e.y2 - r };
        },
        S = function (e) {
          return !isNaN(e) && isFinite(e);
        },
        F = Symbol("internals");
      function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                p(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : E(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function R(e, t) {
        var r = e.find(function (e) {
          return e.id === t.parentNode;
        });
        if (r) {
          var n = t.position.x + t.width - r.width,
            i = t.position.y + t.height - r.height;
          if (n > 0 || i > 0 || t.position.x < 0 || t.position.y < 0) {
            var a, s;
            if (
              ((r.style = O({}, r.style) || {}),
              (r.style.width =
                null !== (a = r.style.width) && void 0 !== a ? a : r.width),
              (r.style.height =
                null !== (s = r.style.height) && void 0 !== s ? s : r.height),
              n > 0 && (r.style.width += n),
              i > 0 && (r.style.height += i),
              t.position.x < 0)
            ) {
              var o = Math.abs(t.position.x);
              (r.position.x = r.position.x - o),
                (r.style.width += o),
                (t.position.x = 0);
            }
            if (t.position.y < 0) {
              var l = Math.abs(t.position.y);
              (r.position.y = r.position.y - l),
                (r.style.height += l),
                (t.position.y = 0);
            }
            (r.width = r.style.width), (r.height = r.style.height);
          }
        }
      }
      function j(e, t) {
        if (
          e.some(function (e) {
            return "reset" === e.type;
          })
        )
          return e
            .filter(function (e) {
              return "reset" === e.type;
            })
            .map(function (e) {
              return e.item;
            });
        var r = e
          .filter(function (e) {
            return "add" === e.type;
          })
          .map(function (e) {
            return e.item;
          });
        return t.reduce(function (t, r) {
          var n = e.find(function (e) {
            return e.id === r.id;
          });
          if (n)
            switch (n.type) {
              case "select":
                return t.push(O(O({}, r), {}, { selected: n.selected })), t;
              case "position":
                var i = O({}, r);
                return (
                  void 0 !== n.position && (i.position = n.position),
                  void 0 !== n.positionAbsolute &&
                    (i.positionAbsolute = n.positionAbsolute),
                  void 0 !== n.dragging && (i.dragging = n.dragging),
                  i.expandParent && R(t, i),
                  t.push(i),
                  t
                );
              case "dimensions":
                var a = O({}, r);
                return (
                  void 0 !== n.dimensions &&
                    ((a.width = n.dimensions.width),
                    (a.height = n.dimensions.height)),
                  a.expandParent && R(t, a),
                  t.push(a),
                  t
                );
              case "remove":
                return t;
            }
          return t.push(r), t;
        }, r);
      }
      function x(e, t) {
        return j(e, t);
      }
      function T(e, t) {
        return j(e, t);
      }
      var C = function (e, t) {
        return { id: e, type: "select", selected: t };
      };
      function W(e, t) {
        return e.reduce(function (e, r) {
          var n = t.includes(r.id);
          return (
            !r.selected && n
              ? ((r.selected = !0), e.push(C(r.id, !0)))
              : r.selected && !n && ((r.selected = !1), e.push(C(r.id, !1))),
            e
          );
        }, []);
      }
      function I(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                p(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : I(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var N = function (e, t, r) {
        var n = t.querySelectorAll(e);
        if (!n || !n.length) return null;
        var i = Array.from(n),
          a = t.getBoundingClientRect();
        return i.map(function (e) {
          var t = e.getBoundingClientRect();
          return P(
            {
              id: e.getAttribute("data-handleid"),
              position: e.getAttribute("data-handlepos"),
              x: (t.left - a.left) / r,
              y: (t.top - a.top) / r,
            },
            g(e),
          );
        });
      };
      function U(e, t, r) {
        return void 0 === r
          ? r
          : function (n) {
              var i = t().nodeInternals.get(e);
              r(n, P({}, i));
            };
      }
      function D(e) {
        var t = e.id,
          r = e.store,
          n = r.getState(),
          i = n.addSelectedNodes,
          a = n.unselectNodesAndEdges,
          s = n.multiSelectionActive,
          o = n.nodeInternals.get(t);
        r.setState({ nodesSelectionActive: !1 }),
          o.selected ? o.selected && s && a({ nodes: [o] }) : i([t]);
      }
      function A(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(r), !0).forEach(function (t) {
                p(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : A(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var X = function (e) {
          var t = e.source,
            r = e.sourceHandle,
            n = e.target,
            i = e.targetHandle;
          return "reactflow__edge-"
            .concat(t)
            .concat(r || "", "-")
            .concat(n)
            .concat(i || "");
        },
        L = function (e, t) {
          if (void 0 === e) return "";
          if ("string" == typeof e) return e;
          var r = t ? "".concat(t, "__") : "";
          return "".concat(r).concat(
            Object.keys(e)
              .sort()
              .map(function (t) {
                return "".concat(t, "=").concat(e[t]);
              })
              .join("&"),
          );
        },
        q = function (e, t) {
          return e.source && e.target
            ? (function (e, t) {
                return t.some(function (t) {
                  return !(
                    t.source !== e.source ||
                    t.target !== e.target ||
                    (t.sourceHandle !== e.sourceHandle &&
                      (t.sourceHandle || e.sourceHandle)) ||
                    (t.targetHandle !== e.targetHandle &&
                      (t.targetHandle || e.targetHandle))
                  );
                });
              })(
                (r =
                  "id" in (n = e) && "source" in n && "target" in n
                    ? k({}, e)
                    : k(k({}, e), {}, { id: X(e) })),
                t,
              )
              ? t
              : t.concat(r)
            : t;
          var r, n;
        },
        Z = function (e, t, r, n) {
          var i = e.x,
            a = e.y,
            s = b(t, 3),
            o = s[0],
            l = s[1],
            c = s[2],
            u = b(n, 2),
            d = u[0],
            m = u[1],
            f = { x: (i - o) / c, y: (a - l) / c };
          return r
            ? { x: d * Math.round(f.x / d), y: m * Math.round(f.y / m) }
            : f;
        },
        $ = function (e) {
          if (0 === e.length) return { x: 0, y: 0, width: 0, height: 0 };
          var t = e.reduce(
            function (e, t) {
              var r = t.positionAbsolute,
                n = t.position,
                i = t.width,
                a = t.height;
              return v(
                e,
                M({
                  x: r ? r.x : n.x,
                  y: r ? r.y : n.y,
                  width: i || 0,
                  height: a || 0,
                }),
              );
            },
            { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
          );
          return z(t);
        },
        V = function (e, t) {
          var r = b(
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [0, 0, 1],
              3,
            ),
            n = r[0],
            i = r[1],
            a = r[2],
            s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            l = M({
              x: (t.x - n) / a,
              y: (t.y - i) / a,
              width: t.width / a,
              height: t.height / a,
            }),
            c = [];
          return (
            e.forEach(function (e) {
              var t = e.positionAbsolute,
                r = e.width,
                n = e.height,
                i = e.selectable;
              if (o && !(void 0 === i || i)) return !1;
              var a = M(k(k({}, t), {}, { width: r || 0, height: n || 0 })),
                u = Math.max(0, Math.min(l.x2, a.x2) - Math.max(l.x, a.x)),
                d = Math.max(0, Math.min(l.y2, a.y2) - Math.max(l.y, a.y)),
                m = Math.ceil(u * d);
              (void 0 === r ||
                void 0 === n ||
                null === r ||
                null === n ||
                (s && m > 0) ||
                m >= (r || 0) * (n || 0)) &&
                c.push(e);
            }),
            c
          );
        },
        Y = function (e, t) {
          var r = e.map(function (e) {
            return e.id;
          });
          return t.filter(function (e) {
            return r.includes(e.source) || r.includes(e.target);
          });
        },
        H = function (e, t, r, n, i) {
          var a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 0.1,
            s = t / (e.width * (1 + a)),
            o = r / (e.height * (1 + a)),
            l = Math.min(s, o),
            c = _(l, n, i);
          return [
            t / 2 - (e.x + e.width / 2) * c,
            r / 2 - (e.y + e.height / 2) * c,
            c,
          ];
        },
        G = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return e.transition().duration(t);
        };
      function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                p(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : K(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function J(e, t, r, n) {
        var i, a, s, o, l, c, u, d, m, f, p, h;
        if (!e.parentNode) return n;
        var y = t.get(e.parentNode);
        return J(y, t, r, {
          x:
            (null !== (i = n.x) && void 0 !== i ? i : 0) +
            (null !==
              (a = null === (s = y.position) || void 0 === s ? void 0 : s.x) &&
            void 0 !== a
              ? a
              : 0),
          y:
            (null !== (o = n.y) && void 0 !== o ? o : 0) +
            (null !==
              (l = null === (c = y.position) || void 0 === c ? void 0 : c.y) &&
            void 0 !== l
              ? l
              : 0),
          z:
            (null !==
              (u = null === (d = y[F]) || void 0 === d ? void 0 : d.z) &&
            void 0 !== u
              ? u
              : 0) > (null !== (m = n.z) && void 0 !== m ? m : 0)
              ? null !==
                  (f = null === (p = y[F]) || void 0 === p ? void 0 : p.z) &&
                void 0 !== f
                ? f
                : 0
              : null !== (h = n.z) && void 0 !== h
                ? h
                : 0,
        });
      }
      function ee(e, t) {
        var r = new Map(),
          n = {};
        return (
          e.forEach(function (e) {
            var i,
              a = S(e.zIndex) ? e.zIndex : e.selected ? 1e3 : 0,
              s = t.get(e.id),
              o = Q(
                Q(
                  {
                    width: null == s ? void 0 : s.width,
                    height: null == s ? void 0 : s.height,
                  },
                  e,
                ),
                {},
                { positionAbsolute: { x: e.position.x, y: e.position.y } },
              );
            e.parentNode &&
              ((o.parentNode = e.parentNode), (n[e.parentNode] = !0)),
              Object.defineProperty(o, F, {
                enumerable: !1,
                value: {
                  handleBounds:
                    null == s || null === (i = s[F]) || void 0 === i
                      ? void 0
                      : i.handleBounds,
                  z: a,
                },
              }),
              r.set(e.id, o);
          }),
          r.forEach(function (e) {
            if (e.parentNode && !r.has(e.parentNode))
              throw new Error(
                "Parent node ".concat(e.parentNode, " not found"),
              );
            if (e.parentNode || n[e.id]) {
              var t,
                i,
                a = J(
                  e,
                  r,
                  n,
                  Q(
                    Q({}, e.position),
                    {},
                    {
                      z:
                        null !==
                          (t =
                            null === (i = e[F]) || void 0 === i
                              ? void 0
                              : i.z) && void 0 !== t
                          ? t
                          : 0,
                    },
                  ),
                ),
                s = a.x,
                o = a.y,
                l = a.z;
              (e.positionAbsolute = { x: s, y: o }),
                (e[F].z = l),
                n[e.id] && (e[F].isParent = !0);
            }
          }),
          r
        );
      }
      function te(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = e(),
          n = r.nodeInternals,
          i = r.width,
          a = r.height,
          s = r.minZoom,
          o = r.maxZoom,
          l = r.d3Zoom,
          c = r.d3Selection,
          u = r.fitViewOnInitDone,
          d = r.fitViewOnInit;
        if (((t.initial && !u && d) || !t.initial) && l && c) {
          var m = Array.from(n.values()).filter(function (e) {
              return t.includeHiddenNodes ? e.width && e.height : !e.hidden;
            }),
            p = m.every(function (e) {
              return e.width && e.height;
            });
          if (m.length > 0 && p) {
            var h,
              y,
              g,
              _ = $(m),
              B = b(
                H(
                  _,
                  i,
                  a,
                  null !== (h = t.minZoom) && void 0 !== h ? h : s,
                  null !== (y = t.maxZoom) && void 0 !== y ? y : o,
                  null !== (g = t.padding) && void 0 !== g ? g : 0.1,
                ),
                3,
              ),
              w = B[0],
              v = B[1],
              M = B[2],
              z = f.CR.translate(w, v).scale(M);
            return (
              "number" == typeof t.duration && t.duration > 0
                ? l.transform(G(c, t.duration), z)
                : l.transform(c, z),
              !0
            );
          }
        }
        return !1;
      }
      function re(e, t) {
        return (
          e.forEach(function (e) {
            var r,
              n = t.get(e.id);
            n &&
              t.set(
                n.id,
                Q(
                  Q({}, n),
                  {},
                  (p((r = {}), F, n[F]), p(r, "selected", e.selected), r),
                ),
              );
          }),
          new Map(t)
        );
      }
      function ne(e, t) {
        return t.map(function (t) {
          var r = e.find(function (e) {
            return e.id === t.id;
          });
          return r && (t.selected = r.selected), t;
        });
      }
      function ie(e) {
        var t = e.changedNodes,
          r = e.changedEdges,
          n = e.get,
          i = e.set,
          a = n(),
          s = a.nodeInternals,
          o = a.edges,
          l = a.onNodesChange,
          c = a.onEdgesChange,
          u = a.hasDefaultNodes,
          d = a.hasDefaultEdges;
        null != t &&
          t.length &&
          (u && i({ nodeInternals: re(t, s) }), null == l || l(t)),
          null != r &&
            r.length &&
            (d && i({ edges: ne(r, o) }), null == c || c(r));
      }
      var ae = [
          [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
          [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
        ],
        se = {
          width: 0,
          height: 0,
          transform: [0, 0, 1],
          nodeInternals: new Map(),
          edges: [],
          onNodesChange: null,
          onEdgesChange: null,
          hasDefaultNodes: !1,
          hasDefaultEdges: !1,
          d3Zoom: null,
          d3Selection: null,
          d3ZoomHandler: void 0,
          minZoom: 0.5,
          maxZoom: 2,
          translateExtent: ae,
          nodeExtent: ae,
          nodesSelectionActive: !1,
          userSelectionActive: !1,
          connectionNodeId: null,
          connectionHandleId: null,
          connectionHandleType: "source",
          connectionPosition: { x: 0, y: 0 },
          connectionMode: o.Strict,
          domNode: null,
          snapGrid: [15, 15],
          snapToGrid: !1,
          nodesDraggable: !0,
          nodesConnectable: !0,
          elementsSelectable: !0,
          fitViewOnInit: !1,
          fitViewOnInitDone: !1,
          fitViewOnInitOptions: void 0,
          multiSelectionActive: !1,
          reactFlowVersion: "10.3.17",
          connectionStartHandle: null,
          connectOnClick: !0,
        };
      function oe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? oe(Object(r), !0).forEach(function (t) {
                p(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : oe(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var ce = (function () {
          const e = (0, n.createContext)(void 0);
          return {
            Provider: ({ initialStore: t, createStore: r, children: i }) => {
              const a = (0, n.useRef)();
              return (
                a.current ||
                  (t &&
                    (console.warn(
                      "Provider initialStore is deprecated and will be removed in the next version.",
                    ),
                    r || (r = () => t)),
                  (a.current = r())),
                (0, n.createElement)(e.Provider, { value: a.current }, i)
              );
            },
            useStore: (t, r = Object.is) => {
              const i = (0, n.useContext)(e);
              if (!i)
                throw new Error(
                  "Seems like you have not used zustand provider as an ancestor.",
                );
              return i(t, r);
            },
            useStoreApi: () => {
              const t = (0, n.useContext)(e);
              if (!t)
                throw new Error(
                  "Seems like you have not used zustand provider as an ancestor.",
                );
              return (0, n.useMemo)(
                () => ({
                  getState: t.getState,
                  setState: t.setState,
                  subscribe: t.subscribe,
                  destroy: t.destroy,
                }),
                [t],
              );
            },
          };
        })(),
        ue = ce.Provider,
        de = ce.useStore,
        me = ce.useStoreApi,
        fe = function () {
          return s(function (e, t) {
            return le(
              le({}, se),
              {},
              {
                setNodes: function (r) {
                  e({ nodeInternals: ee(r, t().nodeInternals) });
                },
                setEdges: function (r) {
                  var n = t().defaultEdgeOptions,
                    i = void 0 === n ? {} : n;
                  e({
                    edges: r.map(function (e) {
                      return le(le({}, i), e);
                    }),
                  });
                },
                setDefaultNodesAndEdges: function (t, r) {
                  var n = void 0 !== t,
                    i = void 0 !== r,
                    a = n ? ee(t, new Map()) : new Map();
                  e({
                    nodeInternals: a,
                    edges: i ? r : [],
                    hasDefaultNodes: n,
                    hasDefaultEdges: i,
                  });
                },
                updateNodeDimensions: function (r) {
                  var n = t(),
                    i = n.onNodesChange,
                    a = n.nodeInternals,
                    s = n.fitViewOnInit,
                    o = n.fitViewOnInitDone,
                    l = n.fitViewOnInitOptions,
                    c = n.domNode,
                    u =
                      null == c
                        ? void 0
                        : c.querySelector(".react-flow__viewport");
                  if (u) {
                    var d = window.getComputedStyle(u),
                      m = new window.DOMMatrixReadOnly(d.transform).m22,
                      f = r.reduce(function (e, t) {
                        var r = a.get(t.id);
                        if (r) {
                          var n = g(t.nodeElement);
                          !(
                            !n.width ||
                            !n.height ||
                            (r.width === n.width &&
                              r.height === n.height &&
                              !t.forceUpdate)
                          ) &&
                            (a.set(
                              r.id,
                              le(
                                le({}, r),
                                {},
                                p(
                                  {},
                                  F,
                                  le(
                                    le({}, r[F]),
                                    {},
                                    {
                                      handleBounds: {
                                        source: N(".source", t.nodeElement, m),
                                        target: N(".target", t.nodeElement, m),
                                      },
                                    },
                                  ),
                                ),
                                n,
                              ),
                            ),
                            e.push({
                              id: r.id,
                              type: "dimensions",
                              dimensions: n,
                            }));
                        }
                        return e;
                      }, []),
                      h = o || (s && !o && te(t, le({ initial: !0 }, l)));
                    e({ nodeInternals: new Map(a), fitViewOnInitDone: h }),
                      (null == f ? void 0 : f.length) > 0 &&
                        (null == i || i(f));
                  }
                },
                updateNodePositions: function (r) {
                  var n =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    a = t(),
                    s = a.onNodesChange,
                    o = a.nodeInternals,
                    l = a.hasDefaultNodes;
                  if (l || s) {
                    var c = r.map(function (e) {
                      var t = { id: e.id, type: "position", dragging: i };
                      return (
                        n &&
                          ((t.positionAbsolute = e.positionAbsolute),
                          (t.position = e.position)),
                        t
                      );
                    });
                    if (null != c && c.length) {
                      if (l) {
                        var u = ee(x(c, Array.from(o.values())), o);
                        e({ nodeInternals: u });
                      }
                      null == s || s(c);
                    }
                  }
                },
                addSelectedNodes: function (r) {
                  var n,
                    i = t(),
                    a = i.multiSelectionActive,
                    s = i.nodeInternals,
                    o = i.edges,
                    l = null;
                  a
                    ? (n = r.map(function (e) {
                        return C(e, !0);
                      }))
                    : ((n = W(Array.from(s.values()), r)), (l = W(o, []))),
                    ie({ changedNodes: n, changedEdges: l, get: t, set: e });
                },
                addSelectedEdges: function (r) {
                  var n,
                    i = t(),
                    a = i.multiSelectionActive,
                    s = i.edges,
                    o = i.nodeInternals,
                    l = null;
                  a
                    ? (n = r.map(function (e) {
                        return C(e, !0);
                      }))
                    : ((n = W(s, r)), (l = W(Array.from(o.values()), []))),
                    ie({ changedNodes: l, changedEdges: n, get: t, set: e });
                },
                unselectNodesAndEdges: function () {
                  var r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = r.nodes,
                    i = r.edges,
                    a = t(),
                    s = a.nodeInternals,
                    o = a.edges,
                    l = i || o;
                  ie({
                    changedNodes: (n || Array.from(s.values())).map(
                      function (e) {
                        return (e.selected = !1), C(e.id, !1);
                      },
                    ),
                    changedEdges: l.map(function (e) {
                      return C(e.id, !1);
                    }),
                    get: t,
                    set: e,
                  });
                },
                setMinZoom: function (r) {
                  var n = t(),
                    i = n.d3Zoom,
                    a = n.maxZoom;
                  null == i || i.scaleExtent([r, a]), e({ minZoom: r });
                },
                setMaxZoom: function (r) {
                  var n = t(),
                    i = n.d3Zoom,
                    a = n.minZoom;
                  null == i || i.scaleExtent([a, r]), e({ maxZoom: r });
                },
                setTranslateExtent: function (r) {
                  var n = t().d3Zoom;
                  null == n || n.translateExtent(r), e({ translateExtent: r });
                },
                resetSelectedElements: function () {
                  var r = t(),
                    n = r.nodeInternals,
                    i = r.edges;
                  ie({
                    changedNodes: Array.from(n.values())
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return C(e.id, !1);
                      }),
                    changedEdges: i
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return C(e.id, !1);
                      }),
                    get: t,
                    set: e,
                  });
                },
                setNodeExtent: function (r) {
                  var n = t().nodeInternals;
                  n.forEach(function (e) {
                    e.positionAbsolute = B(e.position, r);
                  }),
                    e({ nodeExtent: r, nodeInternals: new Map(n) });
                },
                reset: function () {
                  return e(le({}, se));
                },
              },
            );
          });
        };
    },
    95791: (e, t, r) => {
      "use strict";
      r.d(t, {
        HH: () => Fe,
        tV: () => gr,
        ZP: () => br,
        ll: () => wr,
        Rr: () => Br,
      });
      var n = r(39234),
        i = r(47427);
      function a(e) {
        if ("string" == typeof e || "number" == typeof e) return "" + e;
        let t = "";
        if (Array.isArray(e))
          for (let r, n = 0; n < e.length; n++)
            "" !== (r = a(e[n])) && (t += (t && " ") + r);
        else for (let r in e) e[r] && (t += (t && " ") + r);
        return t;
      }
      var s = r(96295);
      function o(e, t) {
        if (Object.is(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        const r = Object.keys(e);
        if (r.length !== Object.keys(t).length) return !1;
        for (let n = 0; n < r.length; n++)
          if (
            !Object.prototype.hasOwnProperty.call(t, r[n]) ||
            !Object.is(e[r[n]], t[r[n]])
          )
            return !1;
        return !0;
      }
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, n.J)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, n.K)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var c = {
          zoomIn: function () {},
          zoomOut: function () {},
          zoomTo: function (e) {},
          getZoom: function () {
            return 1;
          },
          setViewport: function (e) {},
          getViewport: function () {
            return { x: 0, y: 0, zoom: 1 };
          },
          fitView: function () {},
          setCenter: function (e, t) {},
          fitBounds: function (e) {},
          project: function (e) {
            return e;
          },
          viewportInitialized: !1,
        },
        u = function (e) {
          return { d3Zoom: e.d3Zoom, d3Selection: e.d3Selection };
        },
        d = function () {
          var e = (0, n.u)(),
            t = (0, n.b)(u, o),
            r = t.d3Zoom,
            a = t.d3Selection;
          return (0, i.useMemo)(
            function () {
              return a && r
                ? {
                    zoomIn: function (e) {
                      return r.scaleBy(
                        (0, n.L)(a, null == e ? void 0 : e.duration),
                        1.2,
                      );
                    },
                    zoomOut: function (e) {
                      return r.scaleBy(
                        (0, n.L)(a, null == e ? void 0 : e.duration),
                        1 / 1.2,
                      );
                    },
                    zoomTo: function (e, t) {
                      return r.scaleTo(
                        (0, n.L)(a, null == t ? void 0 : t.duration),
                        e,
                      );
                    },
                    getZoom: function () {
                      return e.getState().transform[2];
                    },
                    setViewport: function (t, i) {
                      var o,
                        l,
                        c,
                        u = (0, n._)(e.getState().transform, 3),
                        d = u[0],
                        m = u[1],
                        f = u[2],
                        p = s.CR.translate(
                          null !== (o = t.x) && void 0 !== o ? o : d,
                          null !== (l = t.y) && void 0 !== l ? l : m,
                        ).scale(null !== (c = t.zoom) && void 0 !== c ? c : f);
                      r.transform(
                        (0, n.L)(a, null == i ? void 0 : i.duration),
                        p,
                      );
                    },
                    getViewport: function () {
                      var t = (0, n._)(e.getState().transform, 3);
                      return { x: t[0], y: t[1], zoom: t[2] };
                    },
                    fitView: function (t) {
                      return (0, n.N)(e.getState, t);
                    },
                    setCenter: function (t, i, o) {
                      var l = e.getState(),
                        c = l.width,
                        u = l.height,
                        d = l.maxZoom,
                        m =
                          void 0 !== (null == o ? void 0 : o.zoom) ? o.zoom : d,
                        f = c / 2 - t * m,
                        p = u / 2 - i * m,
                        h = s.CR.translate(f, p).scale(m);
                      r.transform(
                        (0, n.L)(a, null == o ? void 0 : o.duration),
                        h,
                      );
                    },
                    fitBounds: function (t, i) {
                      var o,
                        l = e.getState(),
                        c = l.width,
                        u = l.height,
                        d = l.minZoom,
                        m = l.maxZoom,
                        f = (0, n.G)(
                          t,
                          c,
                          u,
                          d,
                          m,
                          null !== (o = null == i ? void 0 : i.padding) &&
                            void 0 !== o
                            ? o
                            : 0.1,
                        ),
                        p = (0, n._)(f, 3),
                        h = p[0],
                        y = p[1],
                        b = p[2],
                        g = s.CR.translate(h, y).scale(b);
                      r.transform(
                        (0, n.L)(a, null == i ? void 0 : i.duration),
                        g,
                      );
                    },
                    project: function (t) {
                      var r = e.getState(),
                        i = r.transform,
                        a = r.snapToGrid,
                        s = r.snapGrid;
                      return (0, n.p)(t, i, a, s);
                    },
                    viewportInitialized: !0,
                  }
                : c;
            },
            [r, a],
          );
        };
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function p() {
        var e = d(),
          t = (0, n.u)(),
          r = (0, i.useCallback)(function () {
            var e = t.getState().nodeInternals;
            return Array.from(e.values()).map(function (e) {
              return f({}, e);
            });
          }, []),
          a = (0, i.useCallback)(function (e) {
            return t.getState().nodeInternals.get(e);
          }, []),
          s = (0, i.useCallback)(function () {
            var e = t.getState().edges;
            return (void 0 === e ? [] : e).map(function (e) {
              return f({}, e);
            });
          }, []),
          o = (0, i.useCallback)(function (e) {
            var r = t.getState().edges;
            return (void 0 === r ? [] : r).find(function (t) {
              return t.id === e;
            });
          }, []),
          c = (0, i.useCallback)(function (e) {
            var r = t.getState(),
              n = r.nodeInternals,
              i = r.setNodes,
              a = r.hasDefaultNodes,
              s = r.onNodesChange,
              o = Array.from(n.values()),
              l = "function" == typeof e ? e(o) : e;
            if (a) i(l);
            else if (s) {
              s(
                0 === l.length
                  ? o.map(function (e) {
                      return { type: "remove", id: e.id };
                    })
                  : l.map(function (e) {
                      return { item: e, type: "reset" };
                    }),
              );
            }
          }, []),
          u = (0, i.useCallback)(function (e) {
            var r = t.getState(),
              n = r.edges,
              i = void 0 === n ? [] : n,
              a = r.setEdges,
              s = r.hasDefaultEdges,
              o = r.onEdgesChange,
              l = "function" == typeof e ? e(i) : e;
            if (s) a(l);
            else if (o) {
              o(
                0 === l.length
                  ? i.map(function (e) {
                      return { type: "remove", id: e.id };
                    })
                  : l.map(function (e) {
                      return { item: e, type: "reset" };
                    }),
              );
            }
          }, []),
          m = (0, i.useCallback)(function (e) {
            var r = Array.isArray(e) ? e : [e],
              n = t.getState(),
              i = n.nodeInternals,
              a = n.setNodes,
              s = n.hasDefaultNodes,
              o = n.onNodesChange;
            if (s) {
              var c = Array.from(i.values());
              a([].concat(c, l(r)));
            } else if (o) {
              o(
                r.map(function (e) {
                  return { item: e, type: "add" };
                }),
              );
            }
          }, []),
          p = (0, i.useCallback)(function (e) {
            var r = Array.isArray(e) ? e : [e],
              n = t.getState(),
              i = n.edges,
              a = void 0 === i ? [] : i,
              s = n.setEdges,
              o = n.hasDefaultEdges,
              c = n.onEdgesChange;
            if (o) s([].concat(l(a), l(r)));
            else if (c) {
              c(
                r.map(function (e) {
                  return { item: e, type: "add" };
                }),
              );
            }
          }, []),
          h = (0, i.useCallback)(function () {
            var e = t.getState(),
              r = e.nodeInternals,
              i = e.edges,
              a = void 0 === i ? [] : i,
              s = e.transform,
              o = Array.from(r.values()),
              l = (0, n._)(s, 3),
              c = l[0],
              u = l[1],
              d = l[2];
            return {
              nodes: o.map(function (e) {
                return f({}, e);
              }),
              edges: a.map(function (e) {
                return f({}, e);
              }),
              viewport: { x: c, y: u, zoom: d },
            };
          }, []);
        return (0, i.useMemo)(
          function () {
            return f(
              f({}, e),
              {},
              {
                getNodes: r,
                getNode: a,
                getEdges: s,
                getEdge: o,
                setNodes: c,
                setEdges: u,
                addNodes: m,
                addEdges: p,
                toObject: h,
              },
            );
          },
          [e, r, a, s, o, c, u, m, p, h],
        );
      }
      function h(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      function y() {
        return i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
          i.createElement("path", {
            d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
          }),
        );
      }
      function b() {
        return i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5" },
          i.createElement("path", { d: "M0 0h32v4.2H0z" }),
        );
      }
      function g() {
        return i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30" },
          i.createElement("path", {
            d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
          }),
        );
      }
      function _() {
        return i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
          i.createElement("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
          }),
        );
      }
      function B() {
        return i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
          i.createElement("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
          }),
        );
      }
      var w = ["children", "className"];
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var M = function (e) {
          var t = e.children,
            r = e.className,
            s = h(e, w);
          return i.createElement(
            "button",
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? v(Object(r), !0).forEach(function (t) {
                      (0, n.a)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : v(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t),
                        );
                      });
              }
              return e;
            })(
              {
                type: "button",
                className: a(["react-flow__controls-button", r]),
              },
              s,
            ),
            t,
          );
        },
        z = function (e) {
          return e.nodesDraggable && e.nodesConnectable && e.elementsSelectable;
        },
        S = function (e) {
          var t = e.style,
            r = e.showZoom,
            s = void 0 === r || r,
            o = e.showFitView,
            l = void 0 === o || o,
            c = e.showInteractive,
            u = void 0 === c || c,
            d = e.fitViewOptions,
            m = e.onZoomIn,
            f = e.onZoomOut,
            h = e.onFitView,
            w = e.onInteractiveChange,
            v = e.className,
            S = e.children,
            F = (0, n.u)(),
            E = (0, i.useState)(!1),
            O = (0, n._)(E, 2),
            R = O[0],
            j = O[1],
            x = (0, n.b)(z),
            T = p(),
            C = T.zoomIn,
            W = T.zoomOut,
            I = T.fitView;
          if (
            ((0, i.useEffect)(function () {
              j(!0);
            }, []),
            !R)
          )
            return null;
          return i.createElement(
            "div",
            { className: a(["react-flow__controls", v]), style: t },
            s &&
              i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  M,
                  {
                    onClick: function () {
                      null == C || C(), null == m || m();
                    },
                    className: "react-flow__controls-zoomin",
                    title: "zoom in",
                    "aria-label": "zoom in",
                  },
                  i.createElement(y, null),
                ),
                i.createElement(
                  M,
                  {
                    onClick: function () {
                      null == W || W(), null == f || f();
                    },
                    className: "react-flow__controls-zoomout",
                    title: "zoom out",
                    "aria-label": "zoom out",
                  },
                  i.createElement(b, null),
                ),
              ),
            l &&
              i.createElement(
                M,
                {
                  className: "react-flow__controls-fitview",
                  onClick: function () {
                    null == I || I(d), null == h || h();
                  },
                  title: "fit view",
                  "aria-label": "fit view",
                },
                i.createElement(g, null),
              ),
            u &&
              i.createElement(
                M,
                {
                  className: "react-flow__controls-interactive",
                  onClick: function () {
                    F.setState({
                      nodesDraggable: !x,
                      nodesConnectable: !x,
                      elementsSelectable: !x,
                    }),
                      null == w || w(!x);
                  },
                  title: "toggle interactivity",
                  "aria-label": "toggle interactivity",
                },
                x ? i.createElement(B, null) : i.createElement(_, null),
              ),
            S,
          );
        };
      S.displayName = "Controls";
      var F = r(37788),
        E = r(65683),
        O = r(7785),
        R = r(12466),
        j = r(70393);
      const x = (e) => () => e;
      function T(
        e,
        {
          sourceEvent: t,
          subject: r,
          target: n,
          identifier: i,
          active: a,
          x: s,
          y: o,
          dx: l,
          dy: c,
          dispatch: u,
        },
      ) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          subject: { value: r, enumerable: !0, configurable: !0 },
          target: { value: n, enumerable: !0, configurable: !0 },
          identifier: { value: i, enumerable: !0, configurable: !0 },
          active: { value: a, enumerable: !0, configurable: !0 },
          x: { value: s, enumerable: !0, configurable: !0 },
          y: { value: o, enumerable: !0, configurable: !0 },
          dx: { value: l, enumerable: !0, configurable: !0 },
          dy: { value: c, enumerable: !0, configurable: !0 },
          _: { value: u },
        });
      }
      function C(e) {
        return !e.ctrlKey && !e.button;
      }
      function W() {
        return this.parentNode;
      }
      function I(e, t) {
        return null == t ? { x: e.x, y: e.y } : t;
      }
      function P() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      T.prototype.on = function () {
        var e = this._.on.apply(this._, arguments);
        return e === this._ ? this : e;
      };
      var N = ["paid-pro", "paid-sponsor", "paid-enterprise", "paid-custom"];
      function U(e) {
        var t = e.proOptions,
          r = e.position,
          n = void 0 === r ? "bottom-right" : r;
        if (
          null != t &&
          t.account &&
          N.includes(null == t ? void 0 : t.account) &&
          null != t &&
          t.hideAttribution
        )
          return null;
        var s = "".concat(n).split("-");
        return i.createElement(
          "div",
          {
            className: a(["react-flow__attribution"].concat(l(s))),
            "data-message":
              "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev/pricing",
          },
          i.createElement(
            "a",
            {
              href: "https://reactflow.dev",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            "React Flow",
          ),
        );
      }
      var D = [
        "x",
        "y",
        "label",
        "labelStyle",
        "labelShowBg",
        "labelBgStyle",
        "labelBgPadding",
        "labelBgBorderRadius",
        "children",
        "className",
      ];
      function A(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var k = function (e) {
          var t = e.x,
            r = e.y,
            s = e.label,
            o = e.labelStyle,
            l = void 0 === o ? {} : o,
            c = e.labelShowBg,
            u = void 0 === c || c,
            d = e.labelBgStyle,
            m = void 0 === d ? {} : d,
            f = e.labelBgPadding,
            p = void 0 === f ? [2, 4] : f,
            y = e.labelBgBorderRadius,
            b = void 0 === y ? 2 : y,
            g = e.children,
            _ = e.className,
            B = h(e, D),
            w = (0, i.useRef)(null),
            v = (0, i.useState)({ x: 0, y: 0, width: 0, height: 0 }),
            M = (0, n._)(v, 2),
            z = M[0],
            S = M[1],
            F = a(["react-flow__edge-textwrapper", _]);
          return (
            (0, i.useEffect)(
              function () {
                if (w.current) {
                  var e = w.current.getBBox();
                  S({ x: e.x, y: e.y, width: e.width, height: e.height });
                }
              },
              [s],
            ),
            void 0 !== s && s
              ? i.createElement(
                  "g",
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? A(Object(r), !0).forEach(function (t) {
                            (0, n.a)(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                            )
                          : A(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(r, t),
                              );
                            });
                    }
                    return e;
                  })(
                    {
                      transform: "translate("
                        .concat(t - z.width / 2, " ")
                        .concat(r - z.height / 2, ")"),
                      className: F,
                    },
                    B,
                  ),
                  u &&
                    i.createElement("rect", {
                      width: z.width + 2 * p[0],
                      x: -p[0],
                      y: -p[1],
                      height: z.height + 2 * p[1],
                      className: "react-flow__edge-textbg",
                      style: m,
                      rx: b,
                      ry: b,
                    }),
                  i.createElement(
                    "text",
                    {
                      className: "react-flow__edge-text",
                      y: z.height / 2,
                      dy: "0.3em",
                      ref: w,
                      style: l,
                    },
                    s,
                  ),
                  g,
                )
              : null
          );
        },
        X = (0, i.memo)(k),
        L = function (e) {
          var t = e.path,
            r = e.centerX,
            n = e.centerY,
            a = e.label,
            s = e.labelStyle,
            o = e.labelShowBg,
            l = e.labelBgStyle,
            c = e.labelBgPadding,
            u = e.labelBgBorderRadius,
            d = e.style,
            m = e.markerEnd,
            f = e.markerStart,
            p = a
              ? i.createElement(X, {
                  x: r,
                  y: n,
                  label: a,
                  labelStyle: s,
                  labelShowBg: o,
                  labelBgStyle: l,
                  labelBgPadding: c,
                  labelBgBorderRadius: u,
                })
              : null;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              style: d,
              d: t,
              className: "react-flow__edge-path",
              markerEnd: m,
              markerStart: f,
            }),
            p,
          );
        };
      function q(e) {
        var t,
          r,
          i = e.pos,
          a = e.x1,
          s = e.y1,
          o = e.x2,
          l = e.y2;
        switch (i) {
          case n.P.Left:
          case n.P.Right:
            (t = 0.5 * (a + o)), (r = s);
            break;
          case n.P.Top:
          case n.P.Bottom:
            (t = a), (r = 0.5 * (s + l));
        }
        return [t, r];
      }
      function Z(e) {
        var t = e.sourceX,
          r = e.sourceY,
          i = e.sourcePosition,
          a = void 0 === i ? n.P.Bottom : i,
          s = e.targetX,
          o = e.targetY,
          l = e.targetPosition,
          c = void 0 === l ? n.P.Top : l,
          u = q({ pos: a, x1: t, y1: r, x2: s, y2: o }),
          d = (0, n._)(u, 2),
          m = d[0],
          f = d[1],
          p = q({ pos: c, x1: s, y1: o, x2: t, y2: r }),
          h = (0, n._)(p, 2),
          y = h[0],
          b = h[1];
        return "M"
          .concat(t, ",")
          .concat(r, " C")
          .concat(m, ",")
          .concat(f, " ")
          .concat(y, ",")
          .concat(b, " ")
          .concat(s, ",")
          .concat(o);
      }
      var $ = (0, i.memo)(function (e) {
        var t = e.sourceX,
          r = e.sourceY,
          a = e.targetX,
          s = e.targetY,
          o = e.sourcePosition,
          l = void 0 === o ? n.P.Bottom : o,
          c = e.targetPosition,
          u = void 0 === c ? n.P.Top : c,
          d = e.label,
          m = e.labelStyle,
          f = e.labelShowBg,
          p = e.labelBgStyle,
          h = e.labelBgPadding,
          y = e.labelBgBorderRadius,
          b = e.style,
          g = e.markerEnd,
          _ = e.markerStart,
          B = {
            sourceX: t,
            sourceY: r,
            sourcePosition: l,
            targetX: a,
            targetY: s,
            targetPosition: u,
          },
          w = Z(B),
          v = (function (e) {
            var t = e.sourceX,
              r = e.sourceY,
              i = e.sourcePosition,
              a = void 0 === i ? n.P.Bottom : i,
              s = e.targetX,
              o = e.targetY,
              l = e.targetPosition,
              c = void 0 === l ? n.P.Top : l,
              u = q({ pos: a, x1: t, y1: r, x2: s, y2: o }),
              d = (0, n._)(u, 2),
              m = d[0],
              f = d[1],
              p = q({ pos: c, x1: s, y1: o, x2: t, y2: r }),
              h = (0, n._)(p, 2),
              y = 0.125 * t + 0.375 * m + 0.375 * h[0] + 0.125 * s,
              b = 0.125 * r + 0.375 * f + 0.375 * h[1] + 0.125 * o;
            return [y, b, Math.abs(y - t), Math.abs(b - r)];
          })(B),
          M = (0, n._)(v, 2),
          z = M[0],
          S = M[1];
        return i.createElement(L, {
          path: w,
          centerX: z,
          centerY: S,
          label: d,
          labelStyle: m,
          labelShowBg: f,
          labelBgStyle: p,
          labelBgPadding: h,
          labelBgBorderRadius: y,
          style: b,
          markerEnd: g,
          markerStart: _,
        });
      });
      function V(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var Y = [n.P.Left, n.P.Right],
        H = function (e) {
          var t = e.sourceX,
            r = e.sourceY,
            i = e.targetX,
            a = e.targetY,
            s = e.sourcePosition,
            o = void 0 === s ? n.P.Bottom : s,
            l = e.targetPosition,
            c = void 0 === l ? n.P.Top : l,
            u = Y.includes(o),
            d = Y.includes(c);
          if ((u && !d) || (d && !u)) {
            var m = u ? Math.abs(i - t) : 0,
              f = t > i ? t - m : t + m,
              p = u ? 0 : Math.abs(a - r);
            return [f, r < a ? r + p : r - p, m, p];
          }
          var h = Math.abs(i - t) / 2,
            y = i < t ? i + h : i - h,
            b = Math.abs(a - r) / 2;
          return [y, a < r ? a + b : a - b, h, b];
        };
      function G(e, t, r) {
        return void 0 === r
          ? r
          : function (i) {
              var a = t().edges.find(function (t) {
                return t.id === e;
              });
              r(
                i,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? V(Object(r), !0).forEach(function (t) {
                          (0, n.a)(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r),
                          )
                        : V(Object(r)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                            );
                          });
                  }
                  return e;
                })({}, a),
              );
            };
      }
      var K = function (e, t, r) {
          return "L "
            .concat(e, ",")
            .concat(t - r, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e + r, ",")
            .concat(t);
        },
        Q = function (e, t, r) {
          return "L "
            .concat(e + r, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t - r);
        },
        J = function (e, t, r) {
          return "L "
            .concat(e, ",")
            .concat(t - r, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e - r, ",")
            .concat(t);
        },
        ee = function (e, t, r) {
          return "L "
            .concat(e - r, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t - r);
        },
        te = function (e, t, r) {
          return "L "
            .concat(e + r, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t + r);
        },
        re = function (e, t, r) {
          return "L "
            .concat(e, ",")
            .concat(t + r, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e + r, ",")
            .concat(t);
        },
        ne = function (e, t, r) {
          return "L "
            .concat(e, ",")
            .concat(t + r, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e - r, ",")
            .concat(t);
        },
        ie = function (e, t, r) {
          return "L "
            .concat(e - r, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t + r);
        };
      function ae(e) {
        var t = e.sourceX,
          r = e.sourceY,
          i = e.sourcePosition,
          a = void 0 === i ? n.P.Bottom : i,
          s = e.targetX,
          o = e.targetY,
          l = e.targetPosition,
          c = void 0 === l ? n.P.Top : l,
          u = e.borderRadius,
          d = void 0 === u ? 5 : u,
          m = e.centerX,
          f = e.centerY,
          p = H({ sourceX: t, sourceY: r, targetX: s, targetY: o }),
          h = (0, n._)(p, 4),
          y = h[0],
          b = h[1],
          g = h[2],
          _ = h[3],
          B = Math.min(d, Math.abs(s - t)),
          w = Math.min(d, Math.abs(o - r)),
          v = Math.min(B, w, g, _),
          M = [n.P.Left, n.P.Right],
          z = void 0 !== m ? m : y,
          S = void 0 !== f ? f : b,
          F = null,
          E = null;
        return (
          t <= s
            ? ((F = r <= o ? K(t, S, v) : re(t, S, v)),
              (E = r <= o ? ie(s, S, v) : ee(s, S, v)))
            : ((F = r < o ? J(t, S, v) : ne(t, S, v)),
              (E = r < o ? te(s, S, v) : Q(s, S, v))),
          M.includes(a) && M.includes(c)
            ? t <= s
              ? ((F = r <= o ? ie(z, r, v) : ee(z, r, v)),
                (E = r <= o ? K(z, o, v) : re(z, o, v)))
              : ((a === n.P.Right && c === n.P.Left) ||
                  (a === n.P.Left && c === n.P.Right) ||
                  (a === n.P.Left && c === n.P.Left)) &&
                ((F = r <= o ? te(z, r, v) : Q(z, r, v)),
                (E = r <= o ? J(z, o, v) : ne(z, o, v)))
            : M.includes(a) && !M.includes(c)
              ? ((F =
                  t <= s
                    ? r <= o
                      ? ie(s, r, v)
                      : ee(s, r, v)
                    : r <= o
                      ? te(s, r, v)
                      : Q(s, r, v)),
                (E = ""))
              : !M.includes(a) &&
                M.includes(c) &&
                ((F =
                  t <= s
                    ? r <= o
                      ? K(t, o, v)
                      : re(t, o, v)
                    : r <= o
                      ? J(t, o, v)
                      : ne(t, o, v)),
                (E = "")),
          "M "
            .concat(t, ",")
            .concat(r)
            .concat(F)
            .concat(E, "L ")
            .concat(s, ",")
            .concat(o)
        );
      }
      var se = (0, i.memo)(function (e) {
        var t = e.sourceX,
          r = e.sourceY,
          a = e.targetX,
          s = e.targetY,
          o = e.label,
          l = e.labelStyle,
          c = e.labelShowBg,
          u = e.labelBgStyle,
          d = e.labelBgPadding,
          m = e.labelBgBorderRadius,
          f = e.style,
          p = e.sourcePosition,
          h = void 0 === p ? n.P.Bottom : p,
          y = e.targetPosition,
          b = void 0 === y ? n.P.Top : y,
          g = e.markerEnd,
          _ = e.markerStart,
          B = e.borderRadius,
          w = void 0 === B ? 5 : B,
          v = H({
            sourceX: t,
            sourceY: r,
            targetX: a,
            targetY: s,
            sourcePosition: h,
            targetPosition: b,
          }),
          M = (0, n._)(v, 2),
          z = M[0],
          S = M[1],
          F = ae({
            sourceX: t,
            sourceY: r,
            sourcePosition: h,
            targetX: a,
            targetY: s,
            targetPosition: b,
            borderRadius: w,
          });
        return i.createElement(L, {
          path: F,
          centerX: z,
          centerY: S,
          label: o,
          labelStyle: l,
          labelShowBg: c,
          labelBgStyle: u,
          labelBgPadding: d,
          labelBgBorderRadius: m,
          style: f,
          markerEnd: g,
          markerStart: _,
        });
      });
      function oe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? oe(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : oe(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var ce = (0, i.memo)(function (e) {
          return i.createElement(se, le(le({}, e), {}, { borderRadius: 0 }));
        }),
        ue = (0, i.memo)(function (e) {
          var t = e.sourceX,
            r = e.sourceY,
            n = e.targetX,
            a = e.targetY,
            s = e.label,
            o = e.labelStyle,
            l = e.labelShowBg,
            c = e.labelBgStyle,
            u = e.labelBgPadding,
            d = e.labelBgBorderRadius,
            m = e.style,
            f = e.markerEnd,
            p = e.markerStart,
            h = Math.abs(a - r) / 2,
            y = a < r ? a + h : a - h,
            b = Math.abs(n - t) / 2,
            g = n < t ? n + b : n - b,
            _ = "M ".concat(t, ",").concat(r, "L ").concat(n, ",").concat(a);
          return i.createElement(L, {
            path: _,
            centerX: g,
            centerY: y,
            label: s,
            labelStyle: o,
            labelShowBg: l,
            labelBgStyle: c,
            labelBgPadding: u,
            labelBgBorderRadius: d,
            style: m,
            markerEnd: f,
            markerStart: p,
          });
        });
      function de(e, t) {
        return e >= 0 ? 0.5 * e : 25 * t * Math.sqrt(-e);
      }
      function me(e) {
        var t,
          r,
          i = e.pos,
          a = e.x1,
          s = e.y1,
          o = e.x2,
          l = e.y2,
          c = e.c;
        switch (i) {
          case n.P.Left:
            (t = a - de(a - o, c)), (r = s);
            break;
          case n.P.Right:
            (t = a + de(o - a, c)), (r = s);
            break;
          case n.P.Top:
            (t = a), (r = s - de(s - l, c));
            break;
          case n.P.Bottom:
            (t = a), (r = s + de(l - s, c));
        }
        return [t, r];
      }
      function fe(e) {
        var t = e.sourceX,
          r = e.sourceY,
          i = e.sourcePosition,
          a = void 0 === i ? n.P.Bottom : i,
          s = e.targetX,
          o = e.targetY,
          l = e.targetPosition,
          c = void 0 === l ? n.P.Top : l,
          u = e.curvature,
          d = void 0 === u ? 0.25 : u,
          m = me({ pos: a, x1: t, y1: r, x2: s, y2: o, c: d }),
          f = (0, n._)(m, 2),
          p = f[0],
          h = f[1],
          y = me({ pos: c, x1: s, y1: o, x2: t, y2: r, c: d }),
          b = (0, n._)(y, 2),
          g = b[0],
          _ = b[1];
        return "M"
          .concat(t, ",")
          .concat(r, " C")
          .concat(p, ",")
          .concat(h, " ")
          .concat(g, ",")
          .concat(_, " ")
          .concat(s, ",")
          .concat(o);
      }
      var pe = (0, i.memo)(function (e) {
          var t = e.sourceX,
            r = e.sourceY,
            a = e.targetX,
            s = e.targetY,
            o = e.sourcePosition,
            l = void 0 === o ? n.P.Bottom : o,
            c = e.targetPosition,
            u = void 0 === c ? n.P.Top : c,
            d = e.label,
            m = e.labelStyle,
            f = e.labelShowBg,
            p = e.labelBgStyle,
            h = e.labelBgPadding,
            y = e.labelBgBorderRadius,
            b = e.style,
            g = e.markerEnd,
            _ = e.markerStart,
            B = {
              sourceX: t,
              sourceY: r,
              sourcePosition: l,
              targetX: a,
              targetY: s,
              targetPosition: u,
              curvature: e.curvature,
            },
            w = fe(B),
            v = (function (e) {
              var t = e.sourceX,
                r = e.sourceY,
                i = e.sourcePosition,
                a = void 0 === i ? n.P.Bottom : i,
                s = e.targetX,
                o = e.targetY,
                l = e.targetPosition,
                c = void 0 === l ? n.P.Top : l,
                u = e.curvature,
                d = void 0 === u ? 0.25 : u,
                m = me({ pos: a, x1: t, y1: r, x2: s, y2: o, c: d }),
                f = (0, n._)(m, 2),
                p = f[0],
                h = f[1],
                y = me({ pos: c, x1: s, y1: o, x2: t, y2: r, c: d }),
                b = (0, n._)(y, 2),
                g = 0.125 * t + 0.375 * p + 0.375 * b[0] + 0.125 * s,
                _ = 0.125 * r + 0.375 * h + 0.375 * b[1] + 0.125 * o;
              return [g, _, Math.abs(g - t), Math.abs(_ - r)];
            })(B),
            M = (0, n._)(v, 2),
            z = M[0],
            S = M[1];
          return i.createElement(L, {
            path: w,
            centerX: z,
            centerY: S,
            label: d,
            labelStyle: m,
            labelShowBg: f,
            labelBgStyle: p,
            labelBgPadding: h,
            labelBgBorderRadius: y,
            style: b,
            markerEnd: g,
            markerStart: _,
          });
        }),
        he = (0, i.createContext)(null),
        ye = he.Provider;
      function be(e, t, r, i, a, s, o) {
        var l = o.elementFromPoint(e.clientX, e.clientY),
          c = (null == l ? void 0 : l.classList.contains("target")) || !1,
          u = (null == l ? void 0 : l.classList.contains("source")) || !1,
          d = {
            elementBelow: l,
            isValid: !1,
            connection: {
              source: null,
              target: null,
              sourceHandle: null,
              targetHandle: null,
            },
            isHoveringHandle: !1,
          };
        if (l && (c || u)) {
          d.isHoveringHandle = !0;
          var m = l.getAttribute("data-nodeid"),
            f = l.getAttribute("data-handleid"),
            p = r
              ? { source: m, sourceHandle: f, target: i, targetHandle: a }
              : { source: i, sourceHandle: a, target: m, targetHandle: f };
          (d.connection = p),
            (t !== n.C.Strict || (r && u) || (!r && c)) && (d.isValid = s(p));
        }
        return d;
      }
      function ge(e) {
        null == e || e.classList.remove("react-flow__handle-valid"),
          null == e || e.classList.remove("react-flow__handle-connecting");
      }
      function _e(e) {
        var t = e.event,
          r = e.handleId,
          i = e.nodeId,
          a = e.onConnect,
          s = e.isTarget,
          o = e.getState,
          l = e.setState,
          c = e.isValidConnection,
          u = e.elementEdgeUpdaterType,
          d = e.onEdgeUpdateEnd,
          m = t.target.closest(".react-flow"),
          f = (0, n.g)(t.target);
        if (f) {
          var p = f.elementFromPoint(t.clientX, t.clientY),
            h = null == p ? void 0 : p.classList.contains("target"),
            y = null == p ? void 0 : p.classList.contains("source");
          if (m && (h || y || u)) {
            var b,
              g = o(),
              _ = g.onConnectStart,
              B = g.connectionMode,
              w = u || (h ? "target" : "source"),
              v = m.getBoundingClientRect();
            l({
              connectionPosition: {
                x: t.clientX - v.left,
                y: t.clientY - v.top,
              },
              connectionNodeId: i,
              connectionHandleId: r,
              connectionHandleType: w,
            }),
              null == _ || _(t, { nodeId: i, handleId: r, handleType: w }),
              f.addEventListener("mousemove", M),
              f.addEventListener("mouseup", function e(t) {
                var n = o(),
                  m = n.onConnectStop,
                  p = n.onConnectEnd,
                  h = be(t, B, s, i, r, c, f),
                  y = h.connection,
                  g = h.isValid;
                null == m || m(t),
                  g && (null == a || a(y)),
                  null == p || p(t),
                  u && d && d(t),
                  ge(b),
                  l({
                    connectionNodeId: null,
                    connectionHandleId: null,
                    connectionHandleType: null,
                  }),
                  f.removeEventListener("mousemove", M),
                  f.removeEventListener("mouseup", e);
              });
          }
        }
        function M(e) {
          l({
            connectionPosition: { x: e.clientX - v.left, y: e.clientY - v.top },
          });
          var t = be(e, B, s, i, r, c, f),
            n = t.connection,
            a = t.elementBelow,
            o = t.isValid;
          if (!t.isHoveringHandle) return ge(b);
          n.source !== n.target &&
            a &&
            (ge(b),
            (b = a),
            a.classList.add("react-flow__handle-connecting"),
            a.classList.toggle("react-flow__handle-valid", o));
        }
      }
      he.Consumer;
      var Be = [
        "type",
        "position",
        "isValidConnection",
        "isConnectable",
        "id",
        "onConnect",
        "children",
        "className",
        "onMouseDown",
      ];
      function we(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? we(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : we(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var Me = function () {
          return !0;
        },
        ze = function (e) {
          return {
            connectionStartHandle: e.connectionStartHandle,
            connectOnClick: e.connectOnClick,
          };
        },
        Se = (0, i.forwardRef)(function (e, t) {
          var r = e.type,
            s = void 0 === r ? "source" : r,
            l = e.position,
            c = void 0 === l ? n.P.Top : l,
            u = e.isValidConnection,
            d = void 0 === u ? Me : u,
            m = e.isConnectable,
            f = void 0 === m || m,
            p = e.id,
            y = e.onConnect,
            b = e.children,
            g = e.className,
            _ = e.onMouseDown,
            B = h(e, Be),
            w = (0, n.u)(),
            v = (0, i.useContext)(he),
            M = (0, n.b)(ze, o),
            z = M.connectionStartHandle,
            S = M.connectOnClick,
            F = p || null,
            E = "target" === s,
            O = function (e) {
              var t = w.getState(),
                r = t.defaultEdgeOptions,
                i = t.onConnect,
                a = t.hasDefaultEdges,
                s = ve(ve({}, r), e);
              if (a) {
                var o = w.getState().edges;
                w.setState({ edges: (0, n.c)(s, o) });
              }
              null == i || i(s), null == y || y(s);
            };
          return i.createElement(
            "div",
            ve(
              {
                "data-handleid": F,
                "data-nodeid": v,
                "data-handlepos": c,
                className: a([
                  "react-flow__handle",
                  "react-flow__handle-".concat(c),
                  "nodrag",
                  g,
                  {
                    source: !E,
                    target: E,
                    connectable: f,
                    connecting:
                      (null == z ? void 0 : z.nodeId) === v &&
                      (null == z ? void 0 : z.handleId) === F &&
                      (null == z ? void 0 : z.type) === s,
                  },
                ]),
                onMouseDown: function (e) {
                  0 === e.button &&
                    _e({
                      event: e,
                      handleId: F,
                      nodeId: v,
                      onConnect: O,
                      isTarget: E,
                      getState: w.getState,
                      setState: w.setState,
                      isValidConnection: d,
                    }),
                    null == _ || _(e);
                },
                onClick: S
                  ? function (e) {
                      var t = w.getState(),
                        r = t.onClickConnectStart,
                        i = t.onClickConnectStop,
                        a = t.onClickConnectEnd,
                        o = t.connectionMode;
                      if (!z)
                        return (
                          null == r ||
                            r(e, { nodeId: v, handleId: F, handleType: s }),
                          void w.setState({
                            connectionStartHandle: {
                              nodeId: v,
                              type: s,
                              handleId: F,
                            },
                          })
                        );
                      var l = (0, n.g)(e.target),
                        c = be(
                          e,
                          o,
                          "target" === z.type,
                          z.nodeId,
                          z.handleId || null,
                          d,
                          l,
                        ),
                        u = c.connection,
                        m = c.isValid;
                      null == i || i(e),
                        m && O(u),
                        null == a || a(e),
                        w.setState({ connectionStartHandle: null });
                    }
                  : void 0,
                ref: t,
              },
              B,
            ),
            b,
          );
        });
      Se.displayName = "Handle";
      var Fe = (0, i.memo)(Se),
        Ee = function (e) {
          var t = e.data,
            r = e.isConnectable,
            a = e.targetPosition,
            s = void 0 === a ? n.P.Top : a,
            o = e.sourcePosition,
            l = void 0 === o ? n.P.Bottom : o;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(Fe, {
              type: "target",
              position: s,
              isConnectable: r,
            }),
            null == t ? void 0 : t.label,
            i.createElement(Fe, {
              type: "source",
              position: l,
              isConnectable: r,
            }),
          );
        };
      Ee.displayName = "DefaultNode";
      var Oe = (0, i.memo)(Ee),
        Re = function (e) {
          var t = e.data,
            r = e.isConnectable,
            a = e.sourcePosition,
            s = void 0 === a ? n.P.Bottom : a;
          return i.createElement(
            i.Fragment,
            null,
            null == t ? void 0 : t.label,
            i.createElement(Fe, {
              type: "source",
              position: s,
              isConnectable: r,
            }),
          );
        };
      Re.displayName = "InputNode";
      var je = (0, i.memo)(Re),
        xe = function (e) {
          var t = e.data,
            r = e.isConnectable,
            a = e.targetPosition,
            s = void 0 === a ? n.P.Top : a;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(Fe, {
              type: "target",
              position: s,
              isConnectable: r,
            }),
            null == t ? void 0 : t.label,
          );
        };
      xe.displayName = "OutputNode";
      var Te = (0, i.memo)(xe),
        Ce = function (e) {
          return {
            selectedNodes: Array.from(e.nodeInternals.values()).filter(
              function (e) {
                return e.selected;
              },
            ),
            selectedEdges: e.edges.filter(function (e) {
              return e.selected;
            }),
          };
        },
        We = function (e, t) {
          var r = e.selectedNodes.map(function (e) {
              return e.id;
            }),
            n = t.selectedNodes.map(function (e) {
              return e.id;
            }),
            i = e.selectedEdges.map(function (e) {
              return e.id;
            }),
            a = t.selectedEdges.map(function (e) {
              return e.id;
            });
          return o(r, n) && o(i, a);
        };
      function Ie(e) {
        var t = e.onSelectionChange,
          r = (0, n.b)(Ce, We),
          a = r.selectedNodes,
          s = r.selectedEdges;
        return (
          (0, i.useEffect)(
            function () {
              t({ nodes: a, edges: s });
            },
            [a, s],
          ),
          null
        );
      }
      var Pe = (0, i.memo)(Ie),
        Ne = function (e) {
          return {
            setNodes: e.setNodes,
            setEdges: e.setEdges,
            setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
            setMinZoom: e.setMinZoom,
            setMaxZoom: e.setMaxZoom,
            setTranslateExtent: e.setTranslateExtent,
            setNodeExtent: e.setNodeExtent,
            reset: e.reset,
          };
        };
      function Ue(e, t) {
        (0, i.useEffect)(
          function () {
            void 0 !== e && t(e);
          },
          [e],
        );
      }
      function De(e, t, r) {
        (0, i.useEffect)(
          function () {
            void 0 !== t && r((0, n.a)({}, e, t));
          },
          [t],
        );
      }
      var Ae = function (e) {
          var t = e.nodes,
            r = e.edges,
            a = e.defaultNodes,
            s = e.defaultEdges,
            l = e.onConnect,
            c = e.onConnectStart,
            u = e.onConnectStop,
            d = e.onConnectEnd,
            m = e.onClickConnectStart,
            f = e.onClickConnectStop,
            p = e.onClickConnectEnd,
            h = e.nodesDraggable,
            y = e.nodesConnectable,
            b = e.minZoom,
            g = e.maxZoom,
            _ = e.nodeExtent,
            B = e.onNodesChange,
            w = e.onEdgesChange,
            v = e.elementsSelectable,
            M = e.connectionMode,
            z = e.snapGrid,
            S = e.snapToGrid,
            F = e.translateExtent,
            E = e.connectOnClick,
            O = e.defaultEdgeOptions,
            R = e.fitView,
            j = e.fitViewOptions,
            x = e.onNodesDelete,
            T = e.onEdgesDelete,
            C = e.onNodeDrag,
            W = e.onNodeDragStart,
            I = e.onNodeDragStop,
            P = e.onSelectionDrag,
            N = e.onSelectionDragStart,
            U = e.onSelectionDragStop,
            D = (0, n.b)(Ne, o),
            A = D.setNodes,
            k = D.setEdges,
            X = D.setDefaultNodesAndEdges,
            L = D.setMinZoom,
            q = D.setMaxZoom,
            Z = D.setTranslateExtent,
            $ = D.setNodeExtent,
            V = D.reset,
            Y = (0, n.u)();
          return (
            (0, i.useEffect)(function () {
              return (
                X(a, s),
                function () {
                  V();
                }
              );
            }, []),
            De("defaultEdgeOptions", O, Y.setState),
            De("connectionMode", M, Y.setState),
            De("onConnect", l, Y.setState),
            De("onConnectStart", c, Y.setState),
            De("onConnectStop", u, Y.setState),
            De("onConnectEnd", d, Y.setState),
            De("onClickConnectStart", m, Y.setState),
            De("onClickConnectStop", f, Y.setState),
            De("onClickConnectEnd", p, Y.setState),
            De("nodesDraggable", h, Y.setState),
            De("nodesConnectable", y, Y.setState),
            De("elementsSelectable", v, Y.setState),
            De("snapToGrid", S, Y.setState),
            De("snapGrid", z, Y.setState),
            De("onNodesChange", B, Y.setState),
            De("onEdgesChange", w, Y.setState),
            De("connectOnClick", E, Y.setState),
            De("fitViewOnInit", R, Y.setState),
            De("fitViewOnInitOptions", j, Y.setState),
            De("onNodesDelete", x, Y.setState),
            De("onEdgesDelete", T, Y.setState),
            De("onNodeDrag", C, Y.setState),
            De("onNodeDragStart", W, Y.setState),
            De("onNodeDragStop", I, Y.setState),
            De("onSelectionDrag", P, Y.setState),
            De("onSelectionDragStart", N, Y.setState),
            De("onSelectionDragStop", U, Y.setState),
            Ue(t, A),
            Ue(r, k),
            Ue(a, A),
            Ue(s, k),
            Ue(b, L),
            Ue(g, q),
            Ue(F, Z),
            Ue(_, $),
            null
          );
        },
        ke = function (e, t, r) {
          return r === n.P.Left ? e - t : r === n.P.Right ? e + t : e;
        },
        Xe = function (e, t, r) {
          return r === n.P.Top ? e - t : r === n.P.Bottom ? e + t : e;
        },
        Le = function (e) {
          var t = e.className,
            r = e.position,
            n = e.centerX,
            s = e.centerY,
            o = e.radius,
            l = void 0 === o ? 10 : o;
          return i.createElement("circle", {
            className: a(["react-flow__edgeupdater", t]),
            cx: ke(n, l, r),
            cy: Xe(s, l, r),
            r: l,
            stroke: "transparent",
            fill: "transparent",
          });
        },
        qe = function (e) {
          var t = function (t) {
            var r = t.id,
              s = t.className,
              o = t.type,
              l = t.data,
              c = t.onClick,
              u = t.onEdgeDoubleClick,
              d = t.selected,
              m = t.animated,
              f = t.label,
              p = t.labelStyle,
              h = t.labelShowBg,
              y = t.labelBgStyle,
              b = t.labelBgPadding,
              g = t.labelBgBorderRadius,
              _ = t.style,
              B = t.source,
              w = t.target,
              v = t.sourceX,
              M = t.sourceY,
              z = t.targetX,
              S = t.targetY,
              F = t.sourcePosition,
              E = t.targetPosition,
              O = t.elementsSelectable,
              R = t.hidden,
              j = t.sourceHandleId,
              x = t.targetHandleId,
              T = t.onContextMenu,
              C = t.onMouseEnter,
              W = t.onMouseMove,
              I = t.onMouseLeave,
              P = t.edgeUpdaterRadius,
              N = t.onEdgeUpdate,
              U = t.onEdgeUpdateStart,
              D = t.onEdgeUpdateEnd,
              A = t.markerEnd,
              k = t.markerStart,
              X = t.rfId,
              L = (0, i.useState)(!1),
              q = (0, n._)(L, 2),
              Z = q[0],
              $ = q[1],
              V = (0, n.u)(),
              Y = G(r, V.getState, u),
              H = G(r, V.getState, T),
              K = G(r, V.getState, C),
              Q = G(r, V.getState, W),
              J = G(r, V.getState, I),
              ee = function (e, t) {
                var n = t ? w : B,
                  i = (t ? x : j) || null,
                  a = t ? "target" : "source",
                  s = t,
                  o = V.getState().edges.find(function (e) {
                    return e.id === r;
                  });
                null == U || U(e, o, a);
                var l = D
                  ? function (e) {
                      return D(e, o, a);
                    }
                  : void 0;
                _e({
                  event: e,
                  handleId: i,
                  nodeId: n,
                  onConnect: function (e) {
                    return null == N ? void 0 : N(o, e);
                  },
                  isTarget: s,
                  getState: V.getState,
                  setState: V.setState,
                  isValidConnection: function () {
                    return !0;
                  },
                  elementEdgeUpdaterType: a,
                  onEdgeUpdateEnd: l,
                });
              },
              te = function () {
                return $(!0);
              },
              re = function () {
                return $(!1);
              },
              ne = (0, i.useMemo)(
                function () {
                  return "url(#".concat((0, n.d)(k, X), ")");
                },
                [k, X],
              ),
              ie = (0, i.useMemo)(
                function () {
                  return "url(#".concat((0, n.d)(A, X), ")");
                },
                [A, X],
              );
            if (R) return null;
            var ae = !O && !c,
              se = void 0 !== N,
              oe = a([
                "react-flow__edge",
                "react-flow__edge-".concat(o),
                s,
                { selected: d, animated: m, inactive: ae, updating: Z },
              ]);
            return i.createElement(
              "g",
              {
                className: oe,
                onClick: function (e) {
                  var t = V.getState(),
                    n = t.edges,
                    i = t.addSelectedEdges,
                    a = n.find(function (e) {
                      return e.id === r;
                    });
                  O && (V.setState({ nodesSelectionActive: !1 }), i([r])),
                    null == c || c(e, a);
                },
                onDoubleClick: Y,
                onContextMenu: H,
                onMouseEnter: K,
                onMouseMove: Q,
                onMouseLeave: J,
              },
              i.createElement(e, {
                id: r,
                source: B,
                target: w,
                selected: d,
                animated: m,
                label: f,
                labelStyle: p,
                labelShowBg: h,
                labelBgStyle: y,
                labelBgPadding: b,
                labelBgBorderRadius: g,
                data: l,
                style: _,
                sourceX: v,
                sourceY: M,
                targetX: z,
                targetY: S,
                sourcePosition: F,
                targetPosition: E,
                sourceHandleId: j,
                targetHandleId: x,
                markerStart: ne,
                markerEnd: ie,
                "data-testid": "rf__edge-".concat(r),
              }),
              se &&
                i.createElement(
                  "g",
                  {
                    onMouseDown: function (e) {
                      return ee(e, !0);
                    },
                    onMouseEnter: te,
                    onMouseOut: re,
                  },
                  i.createElement(Le, {
                    position: F,
                    centerX: v,
                    centerY: M,
                    radius: P,
                  }),
                ),
              se &&
                i.createElement(
                  "g",
                  {
                    onMouseDown: function (e) {
                      return ee(e, !1);
                    },
                    onMouseEnter: te,
                    onMouseOut: re,
                  },
                  i.createElement(Le, {
                    position: E,
                    centerX: z,
                    centerY: S,
                    radius: P,
                  }),
                ),
            );
          };
          return (t.displayName = "EdgeWrapper"), (0, i.memo)(t);
        };
      function Ze(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function $e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ze(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ze(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function Ve(e) {
        var t = {
            default: qe(e.default || pe),
            straight: qe(e.bezier || ue),
            step: qe(e.step || ce),
            smoothstep: qe(e.step || se),
            simplebezier: qe(e.simplebezier || $),
          },
          r = Object.keys(e)
            .filter(function (e) {
              return !["default", "bezier"].includes(e);
            })
            .reduce(function (t, r) {
              return (t[r] = qe(e[r] || pe)), t;
            }, {});
        return $e($e({}, t), r);
      }
      function Ye(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          i = ((null == r ? void 0 : r.x) || 0) + t.x,
          a = ((null == r ? void 0 : r.y) || 0) + t.y,
          s = (null == r ? void 0 : r.width) || t.width,
          o = (null == r ? void 0 : r.height) || t.height;
        switch (e) {
          case n.P.Top:
            return { x: i + s / 2, y: a };
          case n.P.Right:
            return { x: i + s, y: a + o / 2 };
          case n.P.Bottom:
            return { x: i + s / 2, y: a + o };
          case n.P.Left:
            return { x: i, y: a + o / 2 };
        }
      }
      function He(e, t) {
        if (!e) return null;
        var r = null;
        return (
          1 !== e.length && t
            ? t &&
              (r = e.find(function (e) {
                return e.id === t;
              }))
            : (r = e[0]),
          void 0 === r ? null : r
        );
      }
      function Ge(e, t) {
        var r,
          i,
          a,
          s,
          o,
          l = e.get(t),
          c =
            (null == l || null === (r = l[n.i]) || void 0 === r
              ? void 0
              : r.handleBounds) || null,
          u = !(
            l &&
            c &&
            l.width &&
            l.height &&
            void 0 !==
              (null === (i = l.positionAbsolute) || void 0 === i
                ? void 0
                : i.x) &&
            void 0 !==
              (null === (a = l.positionAbsolute) || void 0 === a ? void 0 : a.y)
          );
        return [
          {
            x:
              (null == l || null === (s = l.positionAbsolute) || void 0 === s
                ? void 0
                : s.x) || 0,
            y:
              (null == l || null === (o = l.positionAbsolute) || void 0 === o
                ? void 0
                : o.y) || 0,
            width: (null == l ? void 0 : l.width) || 0,
            height: (null == l ? void 0 : l.height) || 0,
          },
          c,
          !u,
        ];
      }
      var Ke = "undefined" != typeof document ? document : null,
        Qe = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { target: Ke },
            r = (0, i.useState)(!1),
            a = (0, n._)(r, 2),
            s = a[0],
            o = a[1],
            c = (0, i.useRef)(new Set([])),
            u = (0, i.useMemo)(
              function () {
                if (null !== e) {
                  var t = (Array.isArray(e) ? e : [e])
                      .filter(function (e) {
                        return "string" == typeof e;
                      })
                      .map(function (e) {
                        return e.split("+");
                      }),
                    r = t.reduce(function (e, t) {
                      return e.concat.apply(e, l(t));
                    }, []);
                  return [t, r];
                }
                return [[], []];
              },
              [e],
            ),
            d = (0, n._)(u, 2),
            m = d[0],
            f = d[1];
          return (
            (0, i.useEffect)(
              function () {
                if (null !== e) {
                  var r,
                    n,
                    i = function (e) {
                      if (tt(e)) return !1;
                      var t = et(e.code, f);
                      c.current.add(e[t]),
                        Je(m, c.current, !1) && (e.preventDefault(), o(!0));
                    },
                    a = function (e) {
                      if (tt(e)) return !1;
                      var t = et(e.code, f);
                      Je(m, c.current, !0)
                        ? (o(!1), c.current.clear())
                        : c.current.delete(e[t]);
                    },
                    s = function () {
                      c.current.clear(), o(!1);
                    };
                  return (
                    null == t ||
                      null === (r = t.target) ||
                      void 0 === r ||
                      r.addEventListener("keydown", i),
                    null == t ||
                      null === (n = t.target) ||
                      void 0 === n ||
                      n.addEventListener("keyup", a),
                    window.addEventListener("blur", s),
                    function () {
                      var e, r;
                      null == t ||
                        null === (e = t.target) ||
                        void 0 === e ||
                        e.removeEventListener("keydown", i),
                        null == t ||
                          null === (r = t.target) ||
                          void 0 === r ||
                          r.removeEventListener("keyup", a),
                        window.removeEventListener("blur", s);
                    }
                  );
                }
              },
              [e, o],
            ),
            s
          );
        };
      function Je(e, t, r) {
        return e
          .filter(function (e) {
            return r || e.length === t.size;
          })
          .some(function (e) {
            return e.every(function (e) {
              return t.has(e);
            });
          });
      }
      function et(e, t) {
        return t.includes(e) ? "code" : "key";
      }
      function tt(e) {
        var t,
          r =
            (null === (t = e.composedPath) || void 0 === t
              ? void 0
              : t.call(e)[0]) || e.target;
        return (
          ["INPUT", "SELECT", "TEXTAREA"].includes(
            null == r ? void 0 : r.nodeName,
          ) || (null == r ? void 0 : r.hasAttribute("contenteditable"))
        );
      }
      var rt = function (e) {
        return {
          onNodesChange: e.onNodesChange,
          onEdgesChange: e.onEdgesChange,
        };
      };
      var nt = function (e) {
          return { x: e.x, y: e.y, zoom: e.k };
        },
        it = function (e, t) {
          return e.target.closest(".".concat(t));
        },
        at = function (e) {
          return {
            d3Zoom: e.d3Zoom,
            d3Selection: e.d3Selection,
            d3ZoomHandler: e.d3ZoomHandler,
          };
        },
        st = function (e) {
          var t = e.onMove,
            r = e.onMoveStart,
            a = e.onMoveEnd,
            l = e.zoomOnScroll,
            c = void 0 === l || l,
            u = e.zoomOnPinch,
            d = void 0 === u || u,
            m = e.panOnScroll,
            f = void 0 !== m && m,
            p = e.panOnScrollSpeed,
            h = void 0 === p ? 0.5 : p,
            y = e.panOnScrollMode,
            b = void 0 === y ? n.h.Free : y,
            g = e.zoomOnDoubleClick,
            _ = void 0 === g || g,
            B = e.selectionKeyPressed,
            w = e.elementsSelectable,
            v = e.panOnDrag,
            M = void 0 === v || v,
            z = e.translateExtent,
            S = e.minZoom,
            O = e.maxZoom,
            R = e.defaultZoom,
            j = void 0 === R ? 1 : R,
            x = e.defaultPosition,
            T = void 0 === x ? [0, 0] : x,
            C = e.zoomActivationKeyCode,
            W = e.preventScrolling,
            I = void 0 === W || W,
            P = e.children,
            N = e.noWheelClassName,
            U = e.noPanClassName,
            D = (0, n.u)(),
            A = (0, i.useRef)(!1),
            k = (0, i.useRef)(null),
            X = (0, i.useRef)({ x: 0, y: 0, zoom: 0 }),
            L = (0, n.b)(at, o),
            q = L.d3Zoom,
            Z = L.d3Selection,
            $ = L.d3ZoomHandler,
            V = Qe(C);
          return (
            (function (e) {
              var t = (0, n.u)();
              (0, i.useEffect)(function () {
                var r,
                  i = function () {
                    if (e.current) {
                      var r = (0, n.f)(e.current);
                      t.setState({
                        width: r.width || 500,
                        height: r.height || 500,
                      });
                    }
                  };
                return (
                  i(),
                  (window.onresize = i),
                  e.current &&
                    (r = new ResizeObserver(function () {
                      return i();
                    })).observe(e.current),
                  function () {
                    (window.onresize = null),
                      r && e.current && r.unobserve(e.current);
                  }
                );
              }, []);
            })(k),
            (0, i.useEffect)(function () {
              if (k.current) {
                var e,
                  t = (0, s.sP)().scaleExtent([S, O]).translateExtent(z),
                  r = (0, F.Z)(k.current).call(t),
                  i = (0, n.j)(T[0], z[0][0], z[1][0]),
                  a = (0, n.j)(T[1], z[0][1], z[1][1]),
                  o = (0, n.j)(j, S, O),
                  l = s.CR.translate(i, a).scale(o);
                t.transform(r, l),
                  D.setState({
                    d3Zoom: t,
                    d3Selection: r,
                    d3ZoomHandler: r.on("wheel.zoom"),
                    transform: [i, a, o],
                    domNode:
                      null === (e = r.node()) || void 0 === e
                        ? void 0
                        : e.closest(".react-flow"),
                  });
              }
            }, []),
            (0, i.useEffect)(
              function () {
                Z &&
                  q &&
                  (f && !V
                    ? Z.on("wheel", function (e) {
                        if (it(e, N)) return !1;
                        e.preventDefault(), e.stopImmediatePropagation();
                        var t = Z.property("__zoom").k || 1;
                        if (e.ctrlKey && d) {
                          var r = (0, E.Z)(e),
                            i =
                              -e.deltaY *
                              (1 === e.deltaMode
                                ? 0.05
                                : e.deltaMode
                                  ? 1
                                  : 0.002) *
                              10,
                            a = t * Math.pow(2, i);
                          q.scaleTo(Z, a, r);
                        } else {
                          var s = 1 === e.deltaMode ? 20 : 1,
                            o = b === n.h.Vertical ? 0 : e.deltaX * s,
                            l = b === n.h.Horizontal ? 0 : e.deltaY * s;
                          q.translateBy(Z, (-o / t) * h, (-l / t) * h);
                        }
                      }).on("wheel.zoom", null)
                    : void 0 !== $ &&
                      Z.on("wheel", function (e) {
                        if (!I || it(e, N)) return null;
                        e.preventDefault();
                      }).on("wheel.zoom", $));
              },
              [f, b, Z, q, $, V, d, I, N],
            ),
            (0, i.useEffect)(
              function () {
                q &&
                  (B && !A.current
                    ? q.on("zoom", null)
                    : B ||
                      q.on("zoom", function (e) {
                        if (
                          (D.setState({
                            transform: [
                              e.transform.x,
                              e.transform.y,
                              e.transform.k,
                            ],
                          }),
                          t)
                        ) {
                          var r = nt(e.transform);
                          t(e.sourceEvent, r);
                        }
                      }));
              },
              [B, q, t],
            ),
            (0, i.useEffect)(
              function () {
                q &&
                  q.on("start", function (e) {
                    if (((A.current = !0), r)) {
                      var t = nt(e.transform);
                      (X.current = t), r(e.sourceEvent, t);
                    }
                  });
              },
              [q, r],
            ),
            (0, i.useEffect)(
              function () {
                q &&
                  q.on("end", function (e) {
                    if (
                      ((A.current = !1),
                      a &&
                        ((r = X.current),
                        (n = e.transform),
                        r.x !== n.x || r.y !== n.y || r.zoom !== n.k))
                    ) {
                      var t = nt(e.transform);
                      (X.current = t), a(e.sourceEvent, t);
                    }
                    var r, n;
                  });
              },
              [q, a],
            ),
            (0, i.useEffect)(
              function () {
                q &&
                  q.filter(function (e) {
                    var t = V || c,
                      r = d && e.ctrlKey;
                    return (
                      !!(M || t || f || _ || d) &&
                      !B &&
                      !(!_ && "dblclick" === e.type) &&
                      (!it(e, N) || "wheel" !== e.type) &&
                      (!it(e, U) || "wheel" === e.type) &&
                      !(!d && e.ctrlKey && "wheel" === e.type) &&
                      !!(t || f || r || "wheel" !== e.type) &&
                      !!(
                        M ||
                        ("mousedown" !== e.type && "touchstart" !== e.type)
                      ) &&
                      !((e.ctrlKey && "wheel" !== e.type) || e.button)
                    );
                  });
              },
              [q, c, d, f, _, M, B, w, V],
            ),
            i.createElement(
              "div",
              {
                className: "react-flow__renderer react-flow__container",
                ref: k,
              },
              P,
            )
          );
        };
      function ot(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ot(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ot(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function ct(e, t) {
        return { x: e.clientX - t.left, y: e.clientY - t.top };
      }
      var ut = function (e) {
          return {
            userSelectionActive: e.userSelectionActive,
            elementsSelectable: e.elementsSelectable,
          };
        },
        dt = {
          startX: 0,
          startY: 0,
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          draw: !1,
        },
        mt = (0, i.memo)(function (e) {
          var t = e.selectionKeyPressed,
            r = (0, n.u)(),
            a = (0, i.useRef)(0),
            s = (0, i.useRef)(0),
            l = (0, i.useRef)(),
            c = (0, i.useState)(dt),
            u = (0, n._)(c, 2),
            d = u[0],
            m = u[1],
            f = (0, n.b)(ut, o),
            p = f.userSelectionActive;
          if (!f.elementsSelectable || !(p || t)) return null;
          var h = function () {
            m(dt),
              r.setState({ userSelectionActive: !1 }),
              (a.current = 0),
              (s.current = 0);
          };
          return i.createElement(
            "div",
            {
              className: "react-flow__selectionpane react-flow__container",
              onMouseDown: function (e) {
                var t = e.target.closest(".react-flow");
                l.current = t.getBoundingClientRect();
                var n = ct(e, l.current);
                m({
                  width: 0,
                  height: 0,
                  startX: n.x,
                  startY: n.y,
                  x: n.x,
                  y: n.y,
                  draw: !0,
                }),
                  r.setState({
                    userSelectionActive: !0,
                    nodesSelectionActive: !1,
                  });
              },
              onMouseMove: function (e) {
                var i, o;
                if (t && d.draw && l.current) {
                  var c = ct(e, l.current),
                    u = null !== (i = d.startX) && void 0 !== i ? i : 0,
                    f = null !== (o = d.startY) && void 0 !== o ? o : 0,
                    p = lt(
                      lt({}, d),
                      {},
                      {
                        x: c.x < u ? c.x : u,
                        y: c.y < f ? c.y : f,
                        width: Math.abs(c.x - u),
                        height: Math.abs(c.y - f),
                      },
                    ),
                    h = r.getState(),
                    y = h.nodeInternals,
                    b = h.edges,
                    g = h.transform,
                    _ = h.onNodesChange,
                    B = h.onEdgesChange,
                    w = Array.from(y.values()),
                    v = (0, n.k)(y, p, g, !1, !0),
                    M = (0, n.e)(v, b).map(function (e) {
                      return e.id;
                    }),
                    z = v.map(function (e) {
                      return e.id;
                    });
                  if (a.current !== z.length) {
                    a.current = z.length;
                    var S = (0, n.l)(w, z);
                    S.length && (null == _ || _(S));
                  }
                  if (s.current !== M.length) {
                    s.current = M.length;
                    var F = (0, n.l)(b, M);
                    F.length && (null == B || B(F));
                  }
                  m(p);
                }
              },
              onMouseUp: function () {
                r.setState({ nodesSelectionActive: a.current > 0 }), h();
              },
              onMouseLeave: function () {
                r.setState({ nodesSelectionActive: !1 }), h();
              },
            },
            d.draw &&
              i.createElement("div", {
                className: "react-flow__selection react-flow__container",
                style: {
                  width: d.width,
                  height: d.height,
                  transform: "translate("
                    .concat(d.x, "px, ")
                    .concat(d.y, "px)"),
                },
              }),
          );
        });
      function ft(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ft(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ft(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function ht(e, t) {
        if (!e.parentNode) return !1;
        var r = t.get(e.parentNode);
        return !!r && (!!r.selected || ht(r, t));
      }
      function yt(e, t, r) {
        var n = e;
        do {
          var i;
          if (null !== (i = n) && void 0 !== i && i.matches(t)) return !0;
          if (n === r.current) return !1;
          n = n.parentElement;
        } while (n);
        return !1;
      }
      function bt(e, t, r) {
        return Array.from(e.values())
          .filter(function (t) {
            return (t.selected || t.id === r) && (!t.parentNode || !ht(t, e));
          })
          .map(function (e) {
            var r, n, i, a;
            return {
              id: e.id,
              position: e.position || { x: 0, y: 0 },
              positionAbsolute: e.positionAbsolute || { x: 0, y: 0 },
              distance: {
                x:
                  t.x -
                  (null !==
                    (r =
                      null === (n = e.positionAbsolute) || void 0 === n
                        ? void 0
                        : n.x) && void 0 !== r
                    ? r
                    : 0),
                y:
                  t.y -
                  (null !==
                    (i =
                      null === (a = e.positionAbsolute) || void 0 === a
                        ? void 0
                        : a.y) && void 0 !== i
                    ? i
                    : 0),
              },
              delta: { x: 0, y: 0 },
              extent: e.extent,
              parentNode: e.parentNode,
              width: e.width,
              height: e.height,
            };
          });
      }
      function gt(e) {
        var t = e.nodeId,
          r = e.dragItems,
          n = e.nodeInternals,
          i = r.map(function (e) {
            return pt(
              pt({}, n.get(e.id)),
              {},
              { position: e.position, positionAbsolute: e.positionAbsolute },
            );
          });
        return [
          t
            ? i.find(function (e) {
                return e.id === t;
              })
            : i[0],
          i,
        ];
      }
      function _t(e) {
        return function (t, r, n) {
          return null == e ? void 0 : e(t, n);
        };
      }
      function Bt(e) {
        var t = e.nodeRef,
          r = e.disabled,
          a = void 0 !== r && r,
          s = e.noDragClassName,
          o = e.handleSelector,
          l = e.nodeId,
          c = e.isSelectable,
          u = e.selectNodesOnDrag,
          d = (0, i.useState)(!1),
          m = (0, n._)(d, 2),
          f = m[0],
          p = m[1],
          h = (0, n.u)(),
          y = (0, i.useRef)(),
          b = (0, i.useRef)({ x: null, y: null }),
          g = (0, i.useCallback)(function (e) {
            var t = e.sourceEvent,
              r = h.getState(),
              i = r.transform,
              a = r.snapGrid,
              s = r.snapToGrid,
              o = t.touches ? t.touches[0].clientX : t.clientX,
              l = t.touches ? t.touches[0].clientY : t.clientY;
            return (0, n.p)({ x: o, y: l }, i, s, a);
          }, []);
        return (
          (0, i.useEffect)(
            function () {
              if (null != t && t.current) {
                var e = (0, F.Z)(t.current);
                if (!a) {
                  var r = (function () {
                    var e,
                      t,
                      r,
                      n,
                      i = C,
                      a = W,
                      s = I,
                      o = P,
                      l = {},
                      c = (0, O.Z)("start", "drag", "end"),
                      u = 0,
                      d = 0;
                    function m(e) {
                      e.on("mousedown.drag", f)
                        .filter(o)
                        .on("touchstart.drag", y)
                        .on("touchmove.drag", b, j.Q7)
                        .on("touchend.drag touchcancel.drag", g)
                        .style("touch-action", "none")
                        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
                    }
                    function f(s, o) {
                      if (!n && i.call(this, s, o)) {
                        var l = _(this, a.call(this, s, o), s, o, "mouse");
                        l &&
                          ((0, F.Z)(s.view)
                            .on("mousemove.drag", p, j.Dd)
                            .on("mouseup.drag", h, j.Dd),
                          (0, R.Z)(s.view),
                          (0, j.rG)(s),
                          (r = !1),
                          (e = s.clientX),
                          (t = s.clientY),
                          l("start", s));
                      }
                    }
                    function p(n) {
                      if (((0, j.ZP)(n), !r)) {
                        var i = n.clientX - e,
                          a = n.clientY - t;
                        r = i * i + a * a > d;
                      }
                      l.mouse("drag", n);
                    }
                    function h(e) {
                      (0, F.Z)(e.view).on("mousemove.drag mouseup.drag", null),
                        (0, R.D)(e.view, r),
                        (0, j.ZP)(e),
                        l.mouse("end", e);
                    }
                    function y(e, t) {
                      if (i.call(this, e, t)) {
                        var r,
                          n,
                          s = e.changedTouches,
                          o = a.call(this, e, t),
                          l = s.length;
                        for (r = 0; r < l; ++r)
                          (n = _(this, o, e, t, s[r].identifier, s[r])) &&
                            ((0, j.rG)(e), n("start", e, s[r]));
                      }
                    }
                    function b(e) {
                      var t,
                        r,
                        n = e.changedTouches,
                        i = n.length;
                      for (t = 0; t < i; ++t)
                        (r = l[n[t].identifier]) &&
                          ((0, j.ZP)(e), r("drag", e, n[t]));
                    }
                    function g(e) {
                      var t,
                        r,
                        i = e.changedTouches,
                        a = i.length;
                      for (
                        n && clearTimeout(n),
                          n = setTimeout(function () {
                            n = null;
                          }, 500),
                          t = 0;
                        t < a;
                        ++t
                      )
                        (r = l[i[t].identifier]) &&
                          ((0, j.rG)(e), r("end", e, i[t]));
                    }
                    function _(e, t, r, n, i, a) {
                      var o,
                        d,
                        f,
                        p = c.copy(),
                        h = (0, E.Z)(a || r, t);
                      if (
                        null !=
                        (f = s.call(
                          e,
                          new T("beforestart", {
                            sourceEvent: r,
                            target: m,
                            identifier: i,
                            active: u,
                            x: h[0],
                            y: h[1],
                            dx: 0,
                            dy: 0,
                            dispatch: p,
                          }),
                          n,
                        ))
                      )
                        return (
                          (o = f.x - h[0] || 0),
                          (d = f.y - h[1] || 0),
                          function r(a, s, c) {
                            var y,
                              b = h;
                            switch (a) {
                              case "start":
                                (l[i] = r), (y = u++);
                                break;
                              case "end":
                                delete l[i], --u;
                              case "drag":
                                (h = (0, E.Z)(c || s, t)), (y = u);
                            }
                            p.call(
                              a,
                              e,
                              new T(a, {
                                sourceEvent: s,
                                subject: f,
                                target: m,
                                identifier: i,
                                active: y,
                                x: h[0] + o,
                                y: h[1] + d,
                                dx: h[0] - b[0],
                                dy: h[1] - b[1],
                                dispatch: p,
                              }),
                              n,
                            );
                          }
                        );
                    }
                    return (
                      (m.filter = function (e) {
                        return arguments.length
                          ? ((i = "function" == typeof e ? e : x(!!e)), m)
                          : i;
                      }),
                      (m.container = function (e) {
                        return arguments.length
                          ? ((a = "function" == typeof e ? e : x(e)), m)
                          : a;
                      }),
                      (m.subject = function (e) {
                        return arguments.length
                          ? ((s = "function" == typeof e ? e : x(e)), m)
                          : s;
                      }),
                      (m.touchable = function (e) {
                        return arguments.length
                          ? ((o = "function" == typeof e ? e : x(!!e)), m)
                          : o;
                      }),
                      (m.on = function () {
                        var e = c.on.apply(c, arguments);
                        return e === c ? m : e;
                      }),
                      (m.clickDistance = function (e) {
                        return arguments.length
                          ? ((d = (e = +e) * e), m)
                          : Math.sqrt(d);
                      }),
                      m
                    );
                  })()
                    .on("start", function (e) {
                      var t,
                        r = h.getState(),
                        i = r.nodeInternals,
                        a = r.multiSelectionActive,
                        s = r.unselectNodesAndEdges,
                        o = r.onNodeDragStart,
                        d = r.onSelectionDragStart,
                        m = l ? o : _t(d);
                      u ||
                        a ||
                        !l ||
                        (null !== (t = i.get(l)) &&
                          void 0 !== t &&
                          t.selected) ||
                        s();
                      l && c && u && (0, n.n)({ id: l, store: h });
                      var f = g(e);
                      if (
                        ((b.current = f),
                        (y.current = bt(i, f, l)),
                        m && y.current)
                      ) {
                        var p = gt({
                            nodeId: l,
                            dragItems: y.current,
                            nodeInternals: i,
                          }),
                          _ = (0, n._)(p, 2),
                          B = _[0],
                          w = _[1];
                        m(e.sourceEvent, B, w);
                      }
                    })
                    .on("drag", function (e) {
                      var t = h.getState(),
                        r = t.updateNodePositions,
                        i = t.snapToGrid,
                        a = t.snapGrid,
                        s = t.nodeInternals,
                        o = t.nodeExtent,
                        c = t.onNodeDrag,
                        u = t.onSelectionDrag,
                        d = g(e);
                      if (
                        (b.current.x !== d.x || b.current.y !== d.y) &&
                        y.current
                      ) {
                        (b.current = d),
                          (y.current = y.current.map(function (e) {
                            return (function (e, t, r, i, a, s) {
                              var o = (0, n._)(i, 2),
                                l = o[0],
                                c = o[1],
                                u = e.extent || s,
                                d = {
                                  x: t.x - e.distance.x,
                                  y: t.y - e.distance.y,
                                };
                              if (
                                (r &&
                                  ((d.x = l * Math.round(d.x / l)),
                                  (d.y = c * Math.round(d.y / c))),
                                "parent" === e.extent)
                              )
                                if (e.parentNode && e.width && e.height) {
                                  var m = a.get(e.parentNode);
                                  u =
                                    null != m &&
                                    m.positionAbsolute &&
                                    null != m &&
                                    m.width &&
                                    null != m &&
                                    m.height
                                      ? [
                                          [
                                            m.positionAbsolute.x,
                                            m.positionAbsolute.y,
                                          ],
                                          [
                                            m.positionAbsolute.x +
                                              m.width -
                                              e.width,
                                            m.positionAbsolute.y +
                                              m.height -
                                              e.height,
                                          ],
                                        ]
                                      : u;
                                } else u = s;
                              else if (e.extent && e.parentNode) {
                                var f,
                                  p,
                                  h,
                                  y,
                                  b = a.get(e.parentNode),
                                  g =
                                    null !==
                                      (f =
                                        null == b ||
                                        null === (p = b.positionAbsolute) ||
                                        void 0 === p
                                          ? void 0
                                          : p.x) && void 0 !== f
                                      ? f
                                      : 0,
                                  _ =
                                    null !==
                                      (h =
                                        null == b ||
                                        null === (y = b.positionAbsolute) ||
                                        void 0 === y
                                          ? void 0
                                          : y.y) && void 0 !== h
                                      ? h
                                      : 0;
                                u = [
                                  [e.extent[0][0] + g, e.extent[0][1] + _],
                                  [e.extent[1][0] + g, e.extent[1][1] + _],
                                ];
                              }
                              var B = { x: 0, y: 0 };
                              if (e.parentNode) {
                                var w,
                                  v,
                                  M,
                                  z,
                                  S = a.get(e.parentNode);
                                B = {
                                  x:
                                    null !==
                                      (w =
                                        null == S ||
                                        null === (v = S.positionAbsolute) ||
                                        void 0 === v
                                          ? void 0
                                          : v.x) && void 0 !== w
                                      ? w
                                      : 0,
                                  y:
                                    null !==
                                      (M =
                                        null == S ||
                                        null === (z = S.positionAbsolute) ||
                                        void 0 === z
                                          ? void 0
                                          : z.y) && void 0 !== M
                                      ? M
                                      : 0,
                                };
                              }
                              return (
                                (e.positionAbsolute = u ? (0, n.m)(d, u) : d),
                                (e.position = {
                                  x: e.positionAbsolute.x - B.x,
                                  y: e.positionAbsolute.y - B.y,
                                }),
                                e
                              );
                            })(e, d, i, a, s, o);
                          }));
                        var m = l ? c : _t(u);
                        if ((r(y.current, !0, !0), p(!0), m)) {
                          var f = gt({
                              nodeId: l,
                              dragItems: y.current,
                              nodeInternals: s,
                            }),
                            _ = (0, n._)(f, 2),
                            B = _[0],
                            w = _[1];
                          m(e.sourceEvent, B, w);
                        }
                      }
                      e.on("end", function (e) {
                        if ((p(!1), y.current)) {
                          var t = h.getState(),
                            r = t.updateNodePositions,
                            i = t.nodeInternals,
                            a = t.onNodeDragStop,
                            s = t.onSelectionDragStop,
                            o = l ? a : _t(s);
                          if ((r(y.current, !1, !1), o)) {
                            var c = gt({
                                nodeId: l,
                                dragItems: y.current,
                                nodeInternals: i,
                              }),
                              u = (0, n._)(c, 2),
                              d = u[0],
                              m = u[1];
                            o(e.sourceEvent, d, m);
                          }
                        }
                      });
                    })
                    .filter(function (e) {
                      var r = e.target;
                      return (
                        !e.button &&
                        (!s || !yt(r, ".".concat(s), t)) &&
                        (!o || yt(r, o, t))
                      );
                    });
                  return (
                    e.call(r),
                    function () {
                      e.on(".drag", null);
                    }
                  );
                }
                e.on(".drag", null);
              }
            },
            [t, a, s, o, c, h, l, u, g],
          ),
          f
        );
      }
      function wt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var vt = function (e) {
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? wt(Object(r), !0).forEach(function (t) {
                    (0, n.a)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r),
                    )
                  : wt(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t),
                      );
                    });
            }
            return e;
          })(
            {
              transformString: "translate("
                .concat(e.transform[0], "px,")
                .concat(e.transform[1], "px) scale(")
                .concat(e.transform[2], ")"),
              userSelectionActive: e.userSelectionActive,
            },
            (0, n.o)(
              Array.from(e.nodeInternals.values()).filter(function (e) {
                return e.selected;
              }),
            ),
          );
        },
        Mt = function (e) {
          var t = Array.from(e.nodeInternals.values()).filter(function (e) {
            return e.selected;
          });
          return (0, n.o)(t);
        };
      function zt(e) {
        var t = e.onSelectionContextMenu,
          r = e.noPanClassName,
          s = (0, n.u)(),
          l = (0, n.b)(vt, o),
          c = l.transformString,
          u = l.userSelectionActive,
          d = (0, n.b)(Mt, o),
          m = d.width,
          f = d.height,
          p = d.x,
          h = d.y,
          y = (0, i.useRef)(null);
        if ((Bt({ nodeRef: y }), u || !m || !f)) return null;
        var b = t
          ? function (e) {
              var r = Array.from(s.getState().nodeInternals.values()).filter(
                function (e) {
                  return e.selected;
                },
              );
              t(e, r);
            }
          : void 0;
        return i.createElement(
          "div",
          {
            className: a([
              "react-flow__nodesselection",
              "react-flow__container",
              r,
            ]),
            style: { transform: c },
          },
          i.createElement("div", {
            ref: y,
            className: "react-flow__nodesselection-rect",
            onContextMenu: b,
            style: { width: m, height: f, top: h, left: p },
          }),
        );
      }
      var St = (0, i.memo)(zt),
        Ft = function (e) {
          return e.nodesSelectionActive;
        },
        Et = function (e) {
          var t = e.children,
            r = e.onPaneClick,
            a = e.onPaneContextMenu,
            s = e.onPaneScroll,
            c = e.deleteKeyCode,
            u = e.onMove,
            d = e.onMoveStart,
            m = e.onMoveEnd,
            f = e.selectionKeyCode,
            p = e.multiSelectionKeyCode,
            h = e.zoomActivationKeyCode,
            y = e.elementsSelectable,
            b = e.zoomOnScroll,
            g = e.zoomOnPinch,
            _ = e.panOnScroll,
            B = e.panOnScrollSpeed,
            w = e.panOnScrollMode,
            v = e.zoomOnDoubleClick,
            M = e.panOnDrag,
            z = e.translateExtent,
            S = e.minZoom,
            F = e.maxZoom,
            E = e.defaultZoom,
            O = e.defaultPosition,
            R = e.preventScrolling,
            j = e.onSelectionContextMenu,
            x = e.noWheelClassName,
            T = e.noPanClassName,
            C = (0, n.u)(),
            W = (0, n.b)(Ft),
            I = Qe(f);
          !(function (e) {
            var t = e.deleteKeyCode,
              r = e.multiSelectionKeyCode,
              a = (0, n.u)(),
              s = (0, n.b)(rt, o),
              c = s.onNodesChange,
              u = s.onEdgesChange,
              d = Qe(t),
              m = Qe(r);
            (0, i.useEffect)(
              function () {
                var e = a.getState(),
                  t = e.nodeInternals,
                  r = e.edges,
                  i = e.hasDefaultNodes,
                  s = e.hasDefaultEdges,
                  o = e.onNodesDelete,
                  m = e.onEdgesDelete,
                  f = Array.from(t.values()).reduce(function (e, t) {
                    return (
                      ((!t.selected &&
                        t.parentNode &&
                        e.find(function (e) {
                          return e.id === t.parentNode;
                        })) ||
                        t.selected) &&
                        e.push(t),
                      e
                    );
                  }, []),
                  p = r.filter(function (e) {
                    return e.selected;
                  });
                if (d && (f || p)) {
                  var h = (0, n.e)(f, r),
                    y = [].concat(l(p), l(h)),
                    b = y.reduce(function (e, t) {
                      return e.includes(t.id) || e.push(t.id), e;
                    }, []);
                  if (
                    ((s || i) &&
                      (s &&
                        a.setState({
                          edges: r.filter(function (e) {
                            return !b.includes(e.id);
                          }),
                        }),
                      i &&
                        (f.forEach(function (e) {
                          t.delete(e.id);
                        }),
                        a.setState({ nodeInternals: new Map(t) }))),
                    b.length > 0 && (null == m || m(y), u))
                  ) {
                    var g = b.map(function (e) {
                      return { id: e, type: "remove" };
                    });
                    u(g);
                  }
                  if (f.length > 0 && (null == o || o(f), c)) {
                    var _ = f.map(function (e) {
                      return { id: e.id, type: "remove" };
                    });
                    c(_);
                  }
                  a.setState({ nodesSelectionActive: !1 });
                }
              },
              [d, c, u],
            ),
              (0, i.useEffect)(
                function () {
                  a.setState({ multiSelectionActive: m });
                },
                [m],
              );
          })({ deleteKeyCode: c, multiSelectionKeyCode: p });
          var P = a
              ? function (e) {
                  return a(e);
                }
              : void 0,
            N = s
              ? function (e) {
                  return s(e);
                }
              : void 0;
          return i.createElement(
            st,
            {
              onMove: u,
              onMoveStart: d,
              onMoveEnd: m,
              selectionKeyPressed: I,
              elementsSelectable: y,
              zoomOnScroll: b,
              zoomOnPinch: g,
              panOnScroll: _,
              panOnScrollSpeed: B,
              panOnScrollMode: w,
              zoomOnDoubleClick: v,
              panOnDrag: M,
              translateExtent: z,
              minZoom: S,
              maxZoom: F,
              defaultZoom: E,
              defaultPosition: O,
              zoomActivationKeyCode: h,
              preventScrolling: R,
              noWheelClassName: x,
              noPanClassName: T,
            },
            t,
            i.createElement(mt, { selectionKeyPressed: I }),
            W &&
              i.createElement(St, {
                onSelectionContextMenu: j,
                noPanClassName: T,
              }),
            i.createElement("div", {
              className: "react-flow__pane react-flow__container",
              onClick: function (e) {
                null == r || r(e),
                  C.getState().resetSelectedElements(),
                  C.setState({ nodesSelectionActive: !1 });
              },
              onContextMenu: P,
              onWheel: N,
            }),
          );
        };
      Et.displayName = "FlowRenderer";
      var Ot = (0, i.memo)(Et);
      var Rt = function (e) {
          return {
            nodesDraggable: e.nodesDraggable,
            nodesConnectable: e.nodesConnectable,
            elementsSelectable: e.elementsSelectable,
            updateNodeDimensions: e.updateNodeDimensions,
          };
        },
        jt = function (e) {
          var t,
            r = (0, n.b)(Rt, o),
            a = r.nodesDraggable,
            s = r.nodesConnectable,
            l = r.elementsSelectable,
            c = r.updateNodeDimensions,
            u =
              ((t = e.onlyRenderVisibleElements),
              (0, n.b)(
                (0, i.useCallback)(
                  function (e) {
                    return t
                      ? (0, n.k)(
                          e.nodeInternals,
                          { x: 0, y: 0, width: e.width, height: e.height },
                          e.transform,
                          !0,
                        )
                      : Array.from(e.nodeInternals.values());
                  },
                  [t],
                ),
              )),
            d = (0, i.useRef)(),
            m = (0, i.useMemo)(function () {
              if ("undefined" == typeof ResizeObserver) return null;
              var e = new ResizeObserver(function (e) {
                var t = e.map(function (e) {
                  return {
                    id: e.target.getAttribute("data-id"),
                    nodeElement: e.target,
                    forceUpdate: !0,
                  };
                });
                c(t);
              });
              return (d.current = e), e;
            }, []);
          return (
            (0, i.useEffect)(function () {
              return function () {
                var e;
                null == d ||
                  null === (e = d.current) ||
                  void 0 === e ||
                  e.disconnect();
              };
            }, []),
            i.createElement(
              "div",
              { className: "react-flow__nodes react-flow__container" },
              u.map(function (t) {
                var r,
                  o,
                  c,
                  u,
                  d,
                  f,
                  p,
                  h = t.type || "default";
                e.nodeTypes[h] || (h = "default");
                var y = e.nodeTypes[h] || e.nodeTypes.default,
                  b = !!(t.draggable || (a && void 0 === t.draggable)),
                  g = !!(t.selectable || (l && void 0 === t.selectable)),
                  _ = !!(t.connectable || (s && void 0 === t.connectable));
                return i.createElement(y, {
                  key: t.id,
                  id: t.id,
                  className: t.className,
                  style: t.style,
                  type: h,
                  data: t.data,
                  sourcePosition: t.sourcePosition || n.P.Bottom,
                  targetPosition: t.targetPosition || n.P.Top,
                  hidden: t.hidden,
                  xPos:
                    null !==
                      (r =
                        null === (o = t.positionAbsolute) || void 0 === o
                          ? void 0
                          : o.x) && void 0 !== r
                      ? r
                      : 0,
                  yPos:
                    null !==
                      (c =
                        null === (u = t.positionAbsolute) || void 0 === u
                          ? void 0
                          : u.y) && void 0 !== c
                      ? c
                      : 0,
                  selectNodesOnDrag: e.selectNodesOnDrag,
                  onClick: e.onNodeClick,
                  onMouseEnter: e.onNodeMouseEnter,
                  onMouseMove: e.onNodeMouseMove,
                  onMouseLeave: e.onNodeMouseLeave,
                  onContextMenu: e.onNodeContextMenu,
                  onDoubleClick: e.onNodeDoubleClick,
                  selected: !!t.selected,
                  isDraggable: b,
                  isSelectable: g,
                  isConnectable: _,
                  resizeObserver: m,
                  dragHandle: t.dragHandle,
                  zIndex:
                    null !==
                      (d =
                        null === (f = t[n.i]) || void 0 === f ? void 0 : f.z) &&
                    void 0 !== d
                      ? d
                      : 0,
                  isParent: !(
                    null === (p = t[n.i]) ||
                    void 0 === p ||
                    !p.isParent
                  ),
                  noDragClassName: e.noDragClassName,
                  noPanClassName: e.noPanClassName,
                  initialized: !!t.width && !!t.height,
                });
              }),
            )
          );
        };
      jt.displayName = "NodeRenderer";
      var xt,
        Tt = (0, i.memo)(jt);
      function Ct(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Wt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ct(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ct(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var It,
        Pt =
          ((xt = {}),
          (0, n.a)(xt, n.P.Left, n.P.Right),
          (0, n.a)(xt, n.P.Right, n.P.Left),
          (0, n.a)(xt, n.P.Top, n.P.Bottom),
          (0, n.a)(xt, n.P.Bottom, n.P.Top),
          xt),
        Nt = function (e) {
          var t,
            r,
            a,
            s,
            l,
            c = e.connectionNodeId,
            u = e.connectionHandleType,
            d = e.connectionLineStyle,
            m = e.connectionLineType,
            f = void 0 === m ? n.q.Bezier : m,
            p = e.isConnectable,
            h = e.CustomConnectionLineComponent,
            y = (0, n.b)(
              (0, i.useCallback)(
                function (e) {
                  return {
                    fromNode: e.nodeInternals.get(c),
                    handleId: e.connectionHandleId,
                    toX:
                      (e.connectionPosition.x - e.transform[0]) /
                      e.transform[2],
                    toY:
                      (e.connectionPosition.y - e.transform[1]) /
                      e.transform[2],
                  };
                },
                [c],
              ),
              o,
            ),
            b = y.fromNode,
            g = y.handleId,
            _ = y.toX,
            B = y.toY,
            w =
              null == b || null === (t = b[n.i]) || void 0 === t
                ? void 0
                : t.handleBounds;
          if (!b || !p || null == w || !w[u]) return null;
          var v = w[u],
            M = g
              ? v.find(function (e) {
                  return e.id === g;
                })
              : v[0],
            z = M
              ? M.x + M.width / 2
              : (null !== (r = null == b ? void 0 : b.width) && void 0 !== r
                  ? r
                  : 0) / 2,
            S = M
              ? M.y + M.height / 2
              : null !== (a = null == b ? void 0 : b.height) && void 0 !== a
                ? a
                : 0,
            F =
              ((null == b || null === (s = b.positionAbsolute) || void 0 === s
                ? void 0
                : s.x) || 0) + z,
            E =
              ((null == b || null === (l = b.positionAbsolute) || void 0 === l
                ? void 0
                : l.y) || 0) + S,
            O = null == M ? void 0 : M.position;
          if (!O) return null;
          var R,
            j,
            x,
            T,
            C,
            W,
            I = Pt[O];
          switch (u) {
            case "source":
              (R = F), (j = E), (x = O), (T = _), (C = B), (W = I);
              break;
            case "target":
              (R = _), (j = B), (x = I), (T = F), (C = E), (W = O);
          }
          if (h)
            return i.createElement(
              "g",
              { className: "react-flow__connection" },
              i.createElement(h, {
                connectionLineType: f,
                connectionLineStyle: d,
                fromNode: b,
                fromHandle: M,
                fromX: F,
                fromY: E,
                toX: _,
                toY: B,
                fromPosition: O,
                toPosition: I,
                sourcePosition: x,
                targetPosition: W,
                sourceNode: b,
                sourceHandle: M,
                targetX: T,
                targetY: C,
                sourceX: R,
                sourceY: j,
              }),
            );
          var P = "",
            N = {
              sourceX: R,
              sourceY: j,
              sourcePosition: x,
              targetX: T,
              targetY: C,
              targetPosition: W,
            };
          return (
            (P =
              f === n.q.Bezier
                ? fe(N)
                : f === n.q.Step
                  ? ae(Wt(Wt({}, N), {}, { borderRadius: 0 }))
                  : f === n.q.SmoothStep
                    ? ae(N)
                    : f === n.q.SimpleBezier
                      ? Z(N)
                      : "M"
                          .concat(R, ",")
                          .concat(j, " ")
                          .concat(T, ",")
                          .concat(C)),
            i.createElement(
              "g",
              { className: "react-flow__connection" },
              i.createElement("path", {
                d: P,
                className: "react-flow__connection-path",
                style: d,
              }),
            )
          );
        };
      function Ut(e) {
        return (
          (Ut =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ut(e)
        );
      }
      var Dt =
        ((It = {}),
        (0, n.a)(It, n.M.Arrow, function (e) {
          var t = e.color,
            r = void 0 === t ? "none" : t,
            n = e.strokeWidth,
            a = void 0 === n ? 1 : n;
          return i.createElement("polyline", {
            stroke: r,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: a,
            fill: "none",
            points: "-5,-4 0,0 -5,4",
          });
        }),
        (0, n.a)(It, n.M.ArrowClosed, function (e) {
          var t = e.color,
            r = void 0 === t ? "none" : t,
            n = e.strokeWidth,
            a = void 0 === n ? 1 : n;
          return i.createElement("polyline", {
            stroke: r,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: a,
            fill: r,
            points: "-5,-4 0,0 -5,4 -5,-4",
          });
        }),
        It);
      function At(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var kt = function (e) {
          var t = e.id,
            r = e.type,
            n = e.color,
            a = e.width,
            s = void 0 === a ? 12.5 : a,
            o = e.height,
            l = void 0 === o ? 12.5 : o,
            c = e.markerUnits,
            u = void 0 === c ? "strokeWidth" : c,
            d = e.strokeWidth,
            m = e.orient,
            f = void 0 === m ? "auto" : m,
            p = (function (e) {
              return (0, i.useMemo)(
                function () {
                  return Dt.hasOwnProperty(e)
                    ? Dt[e]
                    : function () {
                        return null;
                      };
                },
                [e],
              );
            })(r);
          return i.createElement(
            "marker",
            {
              className: "react-flow__arrowhead",
              id: t,
              markerWidth: "".concat(s),
              markerHeight: "".concat(l),
              viewBox: "-10 -10 20 20",
              markerUnits: u,
              orient: f,
              refX: "0",
              refY: "0",
            },
            i.createElement(p, { color: n, strokeWidth: d }),
          );
        },
        Xt = function (e) {
          var t = e.defaultColor,
            r = e.rfId;
          return function (e) {
            var i = [];
            return e.edges
              .reduce(function (e, a) {
                return (
                  [a.markerStart, a.markerEnd].forEach(function (a) {
                    if (a && "object" === Ut(a)) {
                      var s = (0, n.d)(a, r);
                      i.includes(s) ||
                        (e.push(
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? At(Object(r), !0).forEach(function (t) {
                                    (0, n.a)(e, t, r[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(
                                      e,
                                      Object.getOwnPropertyDescriptors(r),
                                    )
                                  : At(Object(r)).forEach(function (t) {
                                      Object.defineProperty(
                                        e,
                                        t,
                                        Object.getOwnPropertyDescriptor(r, t),
                                      );
                                    });
                            }
                            return e;
                          })({ id: s, color: a.color || t }, a),
                        ),
                        i.push(s));
                    }
                  }),
                  e
                );
              }, [])
              .sort(function (e, t) {
                return e.id.localeCompare(t.id);
              });
          };
        },
        Lt = function (e) {
          var t = e.defaultColor,
            r = e.rfId,
            a = (0, n.b)(
              (0, i.useCallback)(Xt({ defaultColor: t, rfId: r }), [t, r]),
              function (e, t) {
                return !(
                  e.length !== t.length ||
                  e.some(function (e, r) {
                    return e.id !== t[r].id;
                  })
                );
              },
            );
          return i.createElement(
            "defs",
            null,
            a.map(function (e) {
              return i.createElement(kt, {
                id: e.id,
                key: e.id,
                type: e.type,
                color: e.color,
                width: e.width,
                height: e.height,
                markerUnits: e.markerUnits,
                strokeWidth: e.strokeWidth,
                orient: e.orient,
              });
            }),
          );
        };
      Lt.displayName = "MarkerDefinitions";
      var qt = (0, i.memo)(Lt),
        Zt = [{ level: 0, isMaxLevel: !0, edges: [] }];
      function $t(e, t, r) {
        return (function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = -1,
            a = e.reduce(function (e, a) {
              var s,
                o,
                l,
                c,
                u = (0, n.s)(a.zIndex),
                d = u ? a.zIndex : 0;
              return (
                r &&
                  (d = u
                    ? a.zIndex
                    : Math.max(
                        (null === (s = t.get(a.source)) ||
                        void 0 === s ||
                        null === (o = s[n.i]) ||
                        void 0 === o
                          ? void 0
                          : o.z) || 0,
                        (null === (l = t.get(a.target)) ||
                        void 0 === l ||
                        null === (c = l[n.i]) ||
                        void 0 === c
                          ? void 0
                          : c.z) || 0,
                      )),
                e[d] ? e[d].push(a) : (e[d] = [a]),
                (i = d > i ? d : i),
                e
              );
            }, {}),
            s = Object.entries(a).map(function (e) {
              var t = (0, n._)(e, 2),
                r = +t[0];
              return { edges: t[1], level: r, isMaxLevel: r === i };
            });
          return 0 === s.length ? Zt : s;
        })(
          (0, n.b)(
            (0, i.useCallback)(
              function (r) {
                return e
                  ? r.edges.filter(function (e) {
                      var i = t.get(e.source),
                        a = t.get(e.target);
                      return (
                        (null == i ? void 0 : i.width) &&
                        (null == i ? void 0 : i.height) &&
                        (null == a ? void 0 : a.width) &&
                        (null == a ? void 0 : a.height) &&
                        (function (e) {
                          var t = e.sourcePos,
                            r = e.targetPos,
                            i = e.sourceWidth,
                            a = e.sourceHeight,
                            s = e.targetWidth,
                            o = e.targetHeight,
                            l = e.width,
                            c = e.height,
                            u = e.transform,
                            d = {
                              x: Math.min(t.x, r.x),
                              y: Math.min(t.y, r.y),
                              x2: Math.max(t.x + i, r.x + s),
                              y2: Math.max(t.y + a, r.y + o),
                            };
                          d.x === d.x2 && (d.x2 += 1),
                            d.y === d.y2 && (d.y2 += 1);
                          var m = (0, n.r)({
                              x: (0 - u[0]) / u[2],
                              y: (0 - u[1]) / u[2],
                              width: l / u[2],
                              height: c / u[2],
                            }),
                            f = Math.max(
                              0,
                              Math.min(m.x2, d.x2) - Math.max(m.x, d.x),
                            ),
                            p = Math.max(
                              0,
                              Math.min(m.y2, d.y2) - Math.max(m.y, d.y),
                            );
                          return Math.ceil(f * p) > 0;
                        })({
                          sourcePos: i.positionAbsolute || { x: 0, y: 0 },
                          targetPos: a.positionAbsolute || { x: 0, y: 0 },
                          sourceWidth: i.width,
                          sourceHeight: i.height,
                          targetWidth: a.width,
                          targetHeight: a.height,
                          width: r.width,
                          height: r.height,
                          transform: r.transform,
                        })
                      );
                    })
                  : r.edges;
              },
              [e, t],
            ),
          ),
          t,
          r,
        );
      }
      var Vt = function (e) {
          return {
            connectionNodeId: e.connectionNodeId,
            connectionHandleType: e.connectionHandleType,
            nodesConnectable: e.nodesConnectable,
            elementsSelectable: e.elementsSelectable,
            width: e.width,
            height: e.height,
            connectionMode: e.connectionMode,
            nodeInternals: e.nodeInternals,
          };
        },
        Yt = function (e) {
          var t = (0, n.b)(Vt, o),
            r = t.connectionNodeId,
            s = t.connectionHandleType,
            l = t.nodesConnectable,
            c = t.elementsSelectable,
            u = t.width,
            d = t.height,
            m = t.connectionMode,
            f = t.nodeInternals,
            p = $t(e.onlyRenderVisibleElements, f, e.elevateEdgesOnSelect);
          if (!u) return null;
          var h = e.connectionLineType,
            y = e.defaultMarkerColor,
            b = e.connectionLineStyle,
            g = e.connectionLineComponent,
            _ = e.connectionLineContainerStyle,
            B = r && s;
          return i.createElement(
            i.Fragment,
            null,
            p.map(function (t) {
              var r = t.level,
                s = t.edges,
                o = t.isMaxLevel;
              return i.createElement(
                "svg",
                {
                  key: r,
                  style: { zIndex: r },
                  width: u,
                  height: d,
                  className: "react-flow__edges react-flow__container",
                },
                o && i.createElement(qt, { defaultColor: y, rfId: e.rfId }),
                i.createElement(
                  "g",
                  null,
                  s.map(function (t) {
                    var r = Ge(f, t.source),
                      s = (0, n._)(r, 3),
                      o = s[0],
                      l = s[1],
                      u = s[2],
                      d = Ge(f, t.target),
                      p = (0, n._)(d, 3),
                      h = p[0],
                      y = p[1],
                      b = p[2];
                    if (!u || !b) return null;
                    var g = t.type || "default";
                    e.edgeTypes[g] ||
                      (console.warn(
                        '[React Flow]: Edge type "'.concat(
                          g,
                          '" not found. Using fallback type "default". Help: https://reactflow.dev/error#300',
                        ),
                      ),
                      (g = "default"));
                    var _ = e.edgeTypes[g] || e.edgeTypes.default,
                      B = m === n.C.Strict ? y.target : y.target || y.source,
                      w = He(l.source, t.sourceHandle || null),
                      v = He(B, t.targetHandle || null),
                      M = (null == w ? void 0 : w.position) || n.P.Bottom,
                      z = (null == v ? void 0 : v.position) || n.P.Top;
                    if (!w) return null;
                    if (!v) return null;
                    var S = (function (e, t, r, n, i, a) {
                        var s = Ye(r, e, t),
                          o = Ye(a, n, i);
                        return {
                          sourceX: s.x,
                          sourceY: s.y,
                          targetX: o.x,
                          targetY: o.y,
                        };
                      })(o, w, M, h, v, z),
                      F = S.sourceX,
                      E = S.sourceY,
                      O = S.targetX,
                      R = S.targetY;
                    return i.createElement(_, {
                      key: t.id,
                      id: t.id,
                      className: a([t.className, e.noPanClassName]),
                      type: g,
                      data: t.data,
                      selected: !!t.selected,
                      animated: !!t.animated,
                      hidden: !!t.hidden,
                      label: t.label,
                      labelStyle: t.labelStyle,
                      labelShowBg: t.labelShowBg,
                      labelBgStyle: t.labelBgStyle,
                      labelBgPadding: t.labelBgPadding,
                      labelBgBorderRadius: t.labelBgBorderRadius,
                      style: t.style,
                      source: t.source,
                      target: t.target,
                      sourceHandleId: t.sourceHandle,
                      targetHandleId: t.targetHandle,
                      markerEnd: t.markerEnd,
                      markerStart: t.markerStart,
                      sourceX: F,
                      sourceY: E,
                      targetX: O,
                      targetY: R,
                      sourcePosition: M,
                      targetPosition: z,
                      elementsSelectable: c,
                      onEdgeUpdate: e.onEdgeUpdate,
                      onContextMenu: e.onEdgeContextMenu,
                      onMouseEnter: e.onEdgeMouseEnter,
                      onMouseMove: e.onEdgeMouseMove,
                      onMouseLeave: e.onEdgeMouseLeave,
                      onClick: e.onEdgeClick,
                      edgeUpdaterRadius: e.edgeUpdaterRadius,
                      onEdgeDoubleClick: e.onEdgeDoubleClick,
                      onEdgeUpdateStart: e.onEdgeUpdateStart,
                      onEdgeUpdateEnd: e.onEdgeUpdateEnd,
                      rfId: e.rfId,
                    });
                  }),
                ),
              );
            }),
            B &&
              i.createElement(
                "svg",
                {
                  style: _,
                  width: u,
                  height: d,
                  className:
                    "react-flow__edges react-flow__connectionline react-flow__container",
                },
                i.createElement(Nt, {
                  connectionNodeId: r,
                  connectionHandleType: s,
                  connectionLineStyle: b,
                  connectionLineType: h,
                  isConnectable: l,
                  CustomConnectionLineComponent: g,
                }),
              ),
          );
        };
      Yt.displayName = "EdgeRenderer";
      var Ht = (0, i.memo)(Yt),
        Gt = function (e) {
          return "translate("
            .concat(e.transform[0], "px,")
            .concat(e.transform[1], "px) scale(")
            .concat(e.transform[2], ")");
        };
      function Kt(e) {
        var t = e.children,
          r = (0, n.b)(Gt);
        return i.createElement(
          "div",
          {
            className: "react-flow__viewport react-flow__container",
            style: { transform: r },
          },
          t,
        );
      }
      var Qt = function (e) {
        var t = e.nodeTypes,
          r = e.edgeTypes,
          n = e.onMove,
          a = e.onMoveStart,
          s = e.onMoveEnd,
          o = e.onInit,
          l = e.onNodeClick,
          c = e.onEdgeClick,
          u = e.onNodeDoubleClick,
          d = e.onEdgeDoubleClick,
          m = e.onNodeMouseEnter,
          f = e.onNodeMouseMove,
          h = e.onNodeMouseLeave,
          y = e.onNodeContextMenu,
          b = e.onSelectionContextMenu,
          g = e.connectionLineType,
          _ = e.connectionLineStyle,
          B = e.connectionLineComponent,
          w = e.connectionLineContainerStyle,
          v = e.selectionKeyCode,
          M = e.multiSelectionKeyCode,
          z = e.zoomActivationKeyCode,
          S = e.deleteKeyCode,
          F = e.onlyRenderVisibleElements,
          E = e.elementsSelectable,
          O = e.selectNodesOnDrag,
          R = e.translateExtent,
          j = e.minZoom,
          x = e.maxZoom,
          T = e.defaultZoom,
          C = e.defaultPosition,
          W = e.preventScrolling,
          I = e.defaultMarkerColor,
          P = e.zoomOnScroll,
          N = e.zoomOnPinch,
          U = e.panOnScroll,
          D = e.panOnScrollSpeed,
          A = e.panOnScrollMode,
          k = e.zoomOnDoubleClick,
          X = e.panOnDrag,
          L = e.onPaneClick,
          q = e.onPaneScroll,
          Z = e.onPaneContextMenu,
          $ = e.onEdgeUpdate,
          V = e.onEdgeContextMenu,
          Y = e.onEdgeMouseEnter,
          H = e.onEdgeMouseMove,
          G = e.onEdgeMouseLeave,
          K = e.edgeUpdaterRadius,
          Q = e.onEdgeUpdateStart,
          J = e.onEdgeUpdateEnd,
          ee = e.noDragClassName,
          te = e.noWheelClassName,
          re = e.noPanClassName,
          ne = e.elevateEdgesOnSelect,
          ie = e.id;
        return (
          (function (e) {
            var t = p(),
              r = (0, i.useRef)(!1);
            (0, i.useEffect)(
              function () {
                !r.current &&
                  t.viewportInitialized &&
                  e &&
                  (setTimeout(function () {
                    return e(t);
                  }, 1),
                  (r.current = !0));
              },
              [e, t.viewportInitialized],
            );
          })(o),
          i.createElement(
            Ot,
            {
              onPaneClick: L,
              onPaneContextMenu: Z,
              onPaneScroll: q,
              deleteKeyCode: S,
              selectionKeyCode: v,
              multiSelectionKeyCode: M,
              zoomActivationKeyCode: z,
              elementsSelectable: E,
              onMove: n,
              onMoveStart: a,
              onMoveEnd: s,
              zoomOnScroll: P,
              zoomOnPinch: N,
              zoomOnDoubleClick: k,
              panOnScroll: U,
              panOnScrollSpeed: D,
              panOnScrollMode: A,
              panOnDrag: X,
              translateExtent: R,
              minZoom: j,
              maxZoom: x,
              defaultZoom: T,
              defaultPosition: C,
              onSelectionContextMenu: b,
              preventScrolling: W,
              noDragClassName: ee,
              noWheelClassName: te,
              noPanClassName: re,
            },
            i.createElement(
              Kt,
              null,
              i.createElement(Ht, {
                edgeTypes: r,
                onEdgeClick: c,
                onEdgeDoubleClick: d,
                connectionLineType: g,
                connectionLineStyle: _,
                connectionLineComponent: B,
                connectionLineContainerStyle: w,
                onEdgeUpdate: $,
                onlyRenderVisibleElements: F,
                onEdgeContextMenu: V,
                onEdgeMouseEnter: Y,
                onEdgeMouseMove: H,
                onEdgeMouseLeave: G,
                onEdgeUpdateStart: Q,
                onEdgeUpdateEnd: J,
                edgeUpdaterRadius: K,
                defaultMarkerColor: I,
                noPanClassName: re,
                elevateEdgesOnSelect: !!ne,
                rfId: ie,
              }),
              i.createElement(Tt, {
                nodeTypes: t,
                onNodeClick: l,
                onNodeDoubleClick: u,
                onNodeMouseEnter: m,
                onNodeMouseMove: f,
                onNodeMouseLeave: h,
                onNodeContextMenu: y,
                selectNodesOnDrag: O,
                onlyRenderVisibleElements: F,
                noPanClassName: re,
                noDragClassName: ee,
              }),
            ),
          )
        );
      };
      Qt.displayName = "GraphView";
      var Jt = (0, i.memo)(Qt),
        er = function () {
          return null;
        };
      function tr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function rr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tr(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tr(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      er.displayName = "GroupNode";
      var nr = function (e) {
        var t = function (t) {
          var r = t.id,
            s = t.type,
            o = t.data,
            l = t.xPos,
            c = t.yPos,
            u = t.selected,
            d = t.onClick,
            m = t.onMouseEnter,
            f = t.onMouseMove,
            p = t.onMouseLeave,
            h = t.onContextMenu,
            y = t.onDoubleClick,
            b = t.style,
            g = t.className,
            _ = t.isDraggable,
            B = t.isSelectable,
            w = t.isConnectable,
            v = t.selectNodesOnDrag,
            M = t.sourcePosition,
            z = t.targetPosition,
            S = t.hidden,
            F = t.resizeObserver,
            E = t.dragHandle,
            O = t.zIndex,
            R = t.isParent,
            j = t.noPanClassName,
            x = t.noDragClassName,
            T = t.initialized,
            C = (0, n.u)(),
            W = (0, i.useRef)(null),
            I = (0, i.useRef)(M),
            P = (0, i.useRef)(z),
            N = (0, i.useRef)(s),
            U = B || _ || d || m || f || p,
            D = (0, n.t)(r, C.getState, m),
            A = (0, n.t)(r, C.getState, f),
            k = (0, n.t)(r, C.getState, p),
            X = (0, n.t)(r, C.getState, h),
            L = (0, n.t)(r, C.getState, y);
          (0, i.useEffect)(
            function () {
              if (W.current && !S) {
                var e = W.current;
                return (
                  null == F || F.observe(e),
                  function () {
                    return null == F ? void 0 : F.unobserve(e);
                  }
                );
              }
            },
            [S],
          ),
            (0, i.useEffect)(
              function () {
                var e = N.current !== s,
                  t = I.current !== M,
                  n = P.current !== z;
                W.current &&
                  (e || t || n) &&
                  (e && (N.current = s),
                  t && (I.current = M),
                  n && (P.current = z),
                  C.getState().updateNodeDimensions([
                    { id: r, nodeElement: W.current, forceUpdate: !0 },
                  ]));
              },
              [r, s, M, z],
            );
          var q = Bt({
            nodeRef: W,
            disabled: S || !_,
            noDragClassName: x,
            handleSelector: E,
            nodeId: r,
            isSelectable: B,
            selectNodesOnDrag: v,
          });
          return S
            ? null
            : i.createElement(
                "div",
                {
                  className: a([
                    "react-flow__node",
                    "react-flow__node-".concat(s),
                    j,
                    g,
                    { selected: u, selectable: B, parent: R },
                  ]),
                  ref: W,
                  style: rr(
                    {
                      zIndex: O,
                      transform: "translate(".concat(l, "px,").concat(c, "px)"),
                      pointerEvents: U ? "all" : "none",
                      visibility: T ? "visible" : "hidden",
                    },
                    b,
                  ),
                  onMouseEnter: D,
                  onMouseMove: A,
                  onMouseLeave: k,
                  onContextMenu: X,
                  onClick: function (e) {
                    if ((!B || (v && _) || (0, n.n)({ id: r, store: C }), d)) {
                      var t = C.getState().nodeInternals.get(r);
                      d(e, rr({}, t));
                    }
                  },
                  onDoubleClick: L,
                  "data-testid": "rf__node-".concat(r),
                  "data-id": r,
                },
                i.createElement(
                  ye,
                  { value: r },
                  i.createElement(e, {
                    id: r,
                    data: o,
                    type: s,
                    xPos: l,
                    yPos: c,
                    selected: u,
                    isConnectable: w,
                    sourcePosition: M,
                    targetPosition: z,
                    dragging: q,
                    dragHandle: E,
                    zIndex: O,
                  }),
                ),
              );
        };
        return (t.displayName = "NodeWrapper"), (0, i.memo)(t);
      };
      function ir(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ar(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ir(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ir(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function sr(e) {
        var t = {
            input: nr(e.input || je),
            default: nr(e.default || Oe),
            output: nr(e.output || Te),
            group: nr(e.group || er),
          },
          r = Object.keys(e)
            .filter(function (e) {
              return !["input", "default", "output", "group"].includes(e);
            })
            .reduce(function (t, r) {
              return (t[r] = nr(e[r] || Oe)), t;
            }, {});
        return ar(ar({}, t), r);
      }
      function or(e, t) {
        (0, i.useRef)(null);
        return (0, i.useMemo)(
          function () {
            return t(e);
          },
          [e],
        );
      }
      function lr(e) {
        if (e && "undefined" != typeof document) {
          var t = document.head || document.getElementsByTagName("head")[0],
            r = document.createElement("style");
          t.appendChild(r), r.appendChild(document.createTextNode(e));
        }
      }
      var cr = function (e) {
        var t = e.children,
          r = !0;
        try {
          (0, n.u)();
        } catch (e) {
          r = !1;
        }
        return r
          ? i.createElement(i.Fragment, null, t)
          : i.createElement(n.v, { createStore: n.w }, t);
      };
      cr.displayName = "ReactFlowWrapper";
      var ur = [
        "nodes",
        "edges",
        "defaultNodes",
        "defaultEdges",
        "className",
        "nodeTypes",
        "edgeTypes",
        "onNodeClick",
        "onEdgeClick",
        "onInit",
        "onMove",
        "onMoveStart",
        "onMoveEnd",
        "onConnect",
        "onConnectStart",
        "onConnectStop",
        "onConnectEnd",
        "onClickConnectStart",
        "onClickConnectStop",
        "onClickConnectEnd",
        "onNodeMouseEnter",
        "onNodeMouseMove",
        "onNodeMouseLeave",
        "onNodeContextMenu",
        "onNodeDoubleClick",
        "onNodeDragStart",
        "onNodeDrag",
        "onNodeDragStop",
        "onNodesDelete",
        "onEdgesDelete",
        "onSelectionChange",
        "onSelectionDragStart",
        "onSelectionDrag",
        "onSelectionDragStop",
        "onSelectionContextMenu",
        "connectionMode",
        "connectionLineType",
        "connectionLineStyle",
        "connectionLineComponent",
        "connectionLineContainerStyle",
        "deleteKeyCode",
        "selectionKeyCode",
        "multiSelectionKeyCode",
        "zoomActivationKeyCode",
        "snapToGrid",
        "snapGrid",
        "onlyRenderVisibleElements",
        "selectNodesOnDrag",
        "nodesDraggable",
        "nodesConnectable",
        "elementsSelectable",
        "minZoom",
        "maxZoom",
        "defaultZoom",
        "defaultPosition",
        "translateExtent",
        "preventScrolling",
        "nodeExtent",
        "defaultMarkerColor",
        "zoomOnScroll",
        "zoomOnPinch",
        "panOnScroll",
        "panOnScrollSpeed",
        "panOnScrollMode",
        "zoomOnDoubleClick",
        "panOnDrag",
        "onPaneClick",
        "onPaneScroll",
        "onPaneContextMenu",
        "children",
        "onEdgeUpdate",
        "onEdgeContextMenu",
        "onEdgeDoubleClick",
        "onEdgeMouseEnter",
        "onEdgeMouseMove",
        "onEdgeMouseLeave",
        "onEdgeUpdateStart",
        "onEdgeUpdateEnd",
        "edgeUpdaterRadius",
        "onNodesChange",
        "onEdgesChange",
        "noDragClassName",
        "noWheelClassName",
        "noPanClassName",
        "fitView",
        "fitViewOptions",
        "connectOnClick",
        "attributionPosition",
        "proOptions",
        "defaultEdgeOptions",
        "elevateEdgesOnSelect",
      ];
      function dr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function mr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? dr(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : dr(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      lr(
        ".react-flow{height:100%;overflow:hidden;position:relative;width:100%}.react-flow__container{height:100%;left:0;position:absolute;top:0;width:100%}.react-flow__pane{z-index:1}.react-flow__viewport{pointer-events:none;transform-origin:0 0;z-index:2}.react-flow__renderer{z-index:4}.react-flow__selectionpane{z-index:5}.react-flow .react-flow__edges{overflow:visible;pointer-events:none}.react-flow .react-flow__connectionline{z-index:1001}.react-flow__edge{pointer-events:visibleStroke}.react-flow__edge.inactive{pointer-events:none}@-webkit-keyframes dashdraw{0%{stroke-dashoffset:10}}@keyframes dashdraw{0%{stroke-dashoffset:10}}.react-flow__edge-path{fill:none}.react-flow__edge-textwrapper{pointer-events:all}.react-flow__edge-text{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-flow__connection{pointer-events:none}.react-flow__connection .animated{stroke-dasharray:5;-webkit-animation:dashdraw .5s linear infinite;animation:dashdraw .5s linear infinite}.react-flow__connection-path{fill:none}.react-flow__nodes{pointer-events:none;transform-origin:0 0}.react-flow__node{box-sizing:border-box;pointer-events:all;position:absolute;transform-origin:0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-flow__nodesselection{pointer-events:none;transform-origin:left top;z-index:3}.react-flow__nodesselection-rect{cursor:-webkit-grab;cursor:grab;pointer-events:all;position:absolute}.react-flow__handle{pointer-events:none;position:absolute}.react-flow__handle.connectable{pointer-events:all}.react-flow__handle-bottom{bottom:-4px;left:50%;top:auto;transform:translate(-50%)}.react-flow__handle-top{left:50%;top:-4px;transform:translate(-50%)}.react-flow__handle-left{left:-4px;top:50%;transform:translateY(-50%)}.react-flow__handle-right{right:-4px;top:50%;transform:translateY(-50%)}.react-flow__edgeupdater{cursor:move;pointer-events:all}.react-flow__controls{bottom:20px;left:15px;position:absolute;z-index:5}.react-flow__controls-button{border:none;height:24px;width:24px}.react-flow__controls-button svg{width:100%}.react-flow__minimap{bottom:20px;position:absolute;right:15px;z-index:5}.react-flow__attribution{background:hsla(0,0%,100%,.5);color:#999;font-size:10px;padding:2px 3px;position:absolute;z-index:1000}.react-flow__attribution a{color:#555;text-decoration:none}.react-flow__attribution.top{top:0}.react-flow__attribution.bottom{bottom:0}.react-flow__attribution.left{left:0}.react-flow__attribution.right{right:0}.react-flow__attribution.center{left:50%;transform:translateX(-50%)}",
      ),
        lr(
          ".react-flow__edge.selected .react-flow__edge-path{stroke:#555}.react-flow__edge.animated path{stroke-dasharray:5;-webkit-animation:dashdraw .5s linear infinite;animation:dashdraw .5s linear infinite}.react-flow__edge.updating .react-flow__edge-path{stroke:#777}.react-flow__edge-path{stroke:#b1b1b7;stroke-width:1}.react-flow__edge-text{font-size:10px}.react-flow__edge-textbg{fill:#fff}.react-flow__connection-path{stroke:#b1b1b7;stroke-width:1}.react-flow__node{cursor:-webkit-grab;cursor:grab}.react-flow__node-default,.react-flow__node-group,.react-flow__node-input,.react-flow__node-output{background:#fff;border:1px solid #1a192b;border-radius:3px;color:#222;font-size:12px;padding:10px;text-align:center;width:150px}.react-flow__node-default.selected,.react-flow__node-group.selected,.react-flow__node-input.selected,.react-flow__node-output.selected{box-shadow:0 0 0 .5px #1a192b}.react-flow__node-default .react-flow__handle,.react-flow__node-group .react-flow__handle,.react-flow__node-input .react-flow__handle,.react-flow__node-output .react-flow__handle{background:#1a192b}.react-flow__node-default.selectable:hover,.react-flow__node-group.selectable:hover,.react-flow__node-input.selectable:hover,.react-flow__node-output.selectable:hover{box-shadow:0 1px 4px 1px rgba(0,0,0,.08)}.react-flow__node-default.selectable.selected,.react-flow__node-group.selectable.selected,.react-flow__node-input.selectable.selected,.react-flow__node-output.selectable.selected{box-shadow:0 0 0 .5px #1a192b}.react-flow__node-group{background:hsla(0,0%,94%,.25);border-color:#1a192b}.react-flow__nodesselection-rect,.react-flow__selection{background:rgba(0,89,220,.08);border:1px dotted rgba(0,89,220,.8)}.react-flow__handle{background:#555;border:1px solid #fff;border-radius:100%;height:6px;width:6px}.react-flow__handle.connectable{cursor:crosshair}.react-flow__minimap{background-color:#fff}.react-flow__controls{box-shadow:0 0 2px 1px rgba(0,0,0,.08)}.react-flow__controls-button{align-items:center;background:#fefefe;border-bottom:1px solid #eee;box-sizing:content-box;cursor:pointer;display:flex;height:16px;justify-content:center;padding:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:16px}.react-flow__controls-button svg{max-height:12px;max-width:12px}.react-flow__controls-button:hover{background:#f4f4f4}",
        );
      var fr = { input: je, default: Oe, output: Te },
        pr = {
          default: pe,
          straight: ue,
          step: ce,
          smoothstep: se,
          simplebezier: $,
        },
        hr = [15, 15],
        yr = [0, 0],
        br = (0, i.forwardRef)(function (e, t) {
          var r = e.nodes,
            s = e.edges,
            o = e.defaultNodes,
            l = e.defaultEdges,
            c = e.className,
            u = e.nodeTypes,
            d = void 0 === u ? fr : u,
            m = e.edgeTypes,
            f = void 0 === m ? pr : m,
            p = e.onNodeClick,
            y = e.onEdgeClick,
            b = e.onInit,
            g = e.onMove,
            _ = e.onMoveStart,
            B = e.onMoveEnd,
            w = e.onConnect,
            v = e.onConnectStart,
            M = e.onConnectStop,
            z = e.onConnectEnd,
            S = e.onClickConnectStart,
            F = e.onClickConnectStop,
            E = e.onClickConnectEnd,
            O = e.onNodeMouseEnter,
            R = e.onNodeMouseMove,
            j = e.onNodeMouseLeave,
            x = e.onNodeContextMenu,
            T = e.onNodeDoubleClick,
            C = e.onNodeDragStart,
            W = e.onNodeDrag,
            I = e.onNodeDragStop,
            P = e.onNodesDelete,
            N = e.onEdgesDelete,
            D = e.onSelectionChange,
            A = e.onSelectionDragStart,
            k = e.onSelectionDrag,
            X = e.onSelectionDragStop,
            L = e.onSelectionContextMenu,
            q = e.connectionMode,
            Z = void 0 === q ? n.C.Strict : q,
            $ = e.connectionLineType,
            V = void 0 === $ ? n.q.Bezier : $,
            Y = e.connectionLineStyle,
            H = e.connectionLineComponent,
            G = e.connectionLineContainerStyle,
            K = e.deleteKeyCode,
            Q = void 0 === K ? "Backspace" : K,
            J = e.selectionKeyCode,
            ee = void 0 === J ? "Shift" : J,
            te = e.multiSelectionKeyCode,
            re = void 0 === te ? "Meta" : te,
            ne = e.zoomActivationKeyCode,
            ie = void 0 === ne ? "Meta" : ne,
            ae = e.snapToGrid,
            se = void 0 !== ae && ae,
            oe = e.snapGrid,
            le = void 0 === oe ? hr : oe,
            ce = e.onlyRenderVisibleElements,
            ue = void 0 !== ce && ce,
            de = e.selectNodesOnDrag,
            me = void 0 === de || de,
            fe = e.nodesDraggable,
            pe = e.nodesConnectable,
            he = e.elementsSelectable,
            ye = e.minZoom,
            be = void 0 === ye ? 0.5 : ye,
            ge = e.maxZoom,
            _e = void 0 === ge ? 2 : ge,
            Be = e.defaultZoom,
            we = void 0 === Be ? 1 : Be,
            ve = e.defaultPosition,
            Me = void 0 === ve ? yr : ve,
            ze = e.translateExtent,
            Se = void 0 === ze ? n.x : ze,
            Fe = e.preventScrolling,
            Ee = void 0 === Fe || Fe,
            Oe = e.nodeExtent,
            Re = e.defaultMarkerColor,
            je = void 0 === Re ? "#b1b1b7" : Re,
            xe = e.zoomOnScroll,
            Te = void 0 === xe || xe,
            Ce = e.zoomOnPinch,
            We = void 0 === Ce || Ce,
            Ie = e.panOnScroll,
            Ne = void 0 !== Ie && Ie,
            Ue = e.panOnScrollSpeed,
            De = void 0 === Ue ? 0.5 : Ue,
            ke = e.panOnScrollMode,
            Xe = void 0 === ke ? n.h.Free : ke,
            Le = e.zoomOnDoubleClick,
            qe = void 0 === Le || Le,
            Ze = e.panOnDrag,
            $e = void 0 === Ze || Ze,
            Ye = e.onPaneClick,
            He = e.onPaneScroll,
            Ge = e.onPaneContextMenu,
            Ke = e.children,
            Qe = e.onEdgeUpdate,
            Je = e.onEdgeContextMenu,
            et = e.onEdgeDoubleClick,
            tt = e.onEdgeMouseEnter,
            rt = e.onEdgeMouseMove,
            nt = e.onEdgeMouseLeave,
            it = e.onEdgeUpdateStart,
            at = e.onEdgeUpdateEnd,
            st = e.edgeUpdaterRadius,
            ot = void 0 === st ? 10 : st,
            lt = e.onNodesChange,
            ct = e.onEdgesChange,
            ut = e.noDragClassName,
            dt = void 0 === ut ? "nodrag" : ut,
            mt = e.noWheelClassName,
            ft = void 0 === mt ? "nowheel" : mt,
            pt = e.noPanClassName,
            ht = void 0 === pt ? "nopan" : pt,
            yt = e.fitView,
            bt = void 0 !== yt && yt,
            gt = e.fitViewOptions,
            _t = e.connectOnClick,
            Bt = void 0 === _t || _t,
            wt = e.attributionPosition,
            vt = e.proOptions,
            Mt = e.defaultEdgeOptions,
            zt = e.elevateEdgesOnSelect,
            St = void 0 !== zt && zt,
            Ft = h(e, ur),
            Et = or(d, sr),
            Ot = or(f, Ve);
          return i.createElement(
            "div",
            mr(mr({}, Ft), {}, { ref: t, className: a(["react-flow", c]) }),
            i.createElement(
              cr,
              null,
              i.createElement(Jt, {
                onInit: b,
                onMove: g,
                onMoveStart: _,
                onMoveEnd: B,
                onNodeClick: p,
                onEdgeClick: y,
                onNodeMouseEnter: O,
                onNodeMouseMove: R,
                onNodeMouseLeave: j,
                onNodeContextMenu: x,
                onNodeDoubleClick: T,
                nodeTypes: Et,
                edgeTypes: Ot,
                connectionLineType: V,
                connectionLineStyle: Y,
                connectionLineComponent: H,
                connectionLineContainerStyle: G,
                selectionKeyCode: ee,
                deleteKeyCode: Q,
                multiSelectionKeyCode: re,
                zoomActivationKeyCode: ie,
                onlyRenderVisibleElements: ue,
                selectNodesOnDrag: me,
                translateExtent: Se,
                minZoom: be,
                maxZoom: _e,
                defaultZoom: we,
                defaultPosition: Me,
                preventScrolling: Ee,
                zoomOnScroll: Te,
                zoomOnPinch: We,
                zoomOnDoubleClick: qe,
                panOnScroll: Ne,
                panOnScrollSpeed: De,
                panOnScrollMode: Xe,
                panOnDrag: $e,
                onPaneClick: Ye,
                onPaneScroll: He,
                onPaneContextMenu: Ge,
                onSelectionContextMenu: L,
                onEdgeUpdate: Qe,
                onEdgeContextMenu: Je,
                onEdgeDoubleClick: et,
                onEdgeMouseEnter: tt,
                onEdgeMouseMove: rt,
                onEdgeMouseLeave: nt,
                onEdgeUpdateStart: it,
                onEdgeUpdateEnd: at,
                edgeUpdaterRadius: ot,
                defaultMarkerColor: je,
                noDragClassName: dt,
                noWheelClassName: ft,
                noPanClassName: ht,
                elevateEdgesOnSelect: St,
                id: null == Ft ? void 0 : Ft.id,
              }),
              i.createElement(Ae, {
                nodes: r,
                edges: s,
                defaultNodes: o,
                defaultEdges: l,
                onConnect: w,
                onConnectStart: v,
                onConnectStop: M,
                onConnectEnd: z,
                onClickConnectStart: S,
                onClickConnectStop: F,
                onClickConnectEnd: E,
                nodesDraggable: fe,
                nodesConnectable: pe,
                elementsSelectable: he,
                minZoom: be,
                maxZoom: _e,
                nodeExtent: Oe,
                onNodesChange: lt,
                onEdgesChange: ct,
                snapToGrid: se,
                snapGrid: le,
                connectionMode: Z,
                translateExtent: Se,
                connectOnClick: Bt,
                defaultEdgeOptions: Mt,
                fitView: bt,
                fitViewOptions: gt,
                onNodesDelete: P,
                onEdgesDelete: N,
                onNodeDragStart: C,
                onNodeDrag: W,
                onNodeDragStop: I,
                onSelectionDrag: k,
                onSelectionDragStart: A,
                onSelectionDragStop: X,
              }),
              D && i.createElement(Pe, { onSelectionChange: D }),
              Ke,
              i.createElement(U, { proOptions: vt, position: wt }),
            ),
          );
        });
      br.displayName = "ReactFlow";
      var gr = function (e) {
        var t = e.children;
        return i.createElement(n.v, { createStore: n.w }, t);
      };
      function _r(e) {
        return function (t) {
          var r = (0, i.useState)(t),
            a = (0, n._)(r, 2),
            s = a[0],
            o = a[1],
            l = (0, i.useCallback)(function (t) {
              return o(function (r) {
                return e(t, r);
              });
            }, []);
          return [s, o, l];
        };
      }
      gr.displayName = "ReactFlowProvider";
      var Br = _r(n.y),
        wr = _r(n.z);
    },
    77826: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      var n = r(47427),
        i = r(39234),
        a =
          (r(96295),
          function (e) {
            return e.updateNodeDimensions;
          });
      function s() {
        var e = (0, i.u)(),
          t = (0, i.b)(a);
        return (0, n.useCallback)(function (r) {
          var n,
            i =
              null === (n = e.getState().domNode) || void 0 === n
                ? void 0
                : n.querySelector(
                    '.react-flow__node[data-id="'.concat(r, '"]'),
                  );
          i &&
            requestAnimationFrame(function () {
              return t([{ id: r, nodeElement: i, forceUpdate: !0 }]);
            });
        }, []);
      }
    },
    53664: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => l });
      var n = r(6256),
        i = r(52942),
        a = r(90291),
        s = r(56886),
        o = r(52871),
        l = (0, n.z)({
          chartName: "LineChart",
          GraphicalChild: i.x,
          axisComponents: [
            { axisType: "xAxis", AxisComp: a.K },
            { axisType: "yAxis", AxisComp: s.B },
          ],
          formatAxisMap: o.t9,
        });
    },
    45681: (e, t, r) => {
      "use strict";
      r.d(t, {
        $GS: () => Qe,
        CjN: () => st,
        DYT: () => Pe,
        DkI: () => Ge,
        FBh: () => qe,
        NG: () => At,
        OzA: () => Ae,
        S$J: () => Xe,
        SjT: () => bt,
        UYo: () => j,
        VO_: () => Bt,
        Vyd: () => Ue,
        W3l: () => We,
        Y0T: () => p,
        _ur: () => R,
        cJ3: () => Tt,
        dqE: () => _t,
        kKo: () => lt,
        mY8: () => ht,
        mgi: () => h,
        uKj: () => dt,
        wN3: () => rt,
        yuy: () => it,
        zuF: () => Te,
      });
      var n = r(10059),
        i = r(39087),
        a = r(79545);
      const s = n.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.elements || i.aR(o.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: { elements: { n: 1, c: l, r: !0, q: !0 } },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataSourceDescObject";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.name || i.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  name: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  data_type: { n: 2, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  object: { n: 3, c: o },
                  count: { n: 4, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataSourceDescElement";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.id || i.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  name: { n: 2, br: i.FE.readString, bw: i.Xc.writeString },
                  version: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  source_description: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  structure: { n: 5, c: o },
                  structure_crc: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  cache_duration_seconds: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataSource";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.elements || i.aR(u.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { elements: { n: 1, c: d, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataObject";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.name || i.aR(d.M()),
            s.initialize(this, e, 0, -1, [20, 21, 22, 23, 24], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  name: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  data_int32s: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: i.FE.readInt32,
                    pbr: i.FE.readPackedInt32,
                    bw: i.Xc.writeRepeatedInt32,
                  },
                  data_floats: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  data_bools: {
                    n: 22,
                    r: !0,
                    q: !0,
                    br: i.FE.readBool,
                    pbr: i.FE.readPackedBool,
                    bw: i.Xc.writeRepeatedBool,
                  },
                  data_strings: {
                    n: 23,
                    r: !0,
                    q: !0,
                    br: i.FE.readString,
                    bw: i.Xc.writeRepeatedString,
                  },
                  data_objects: { n: 24, c: u, r: !0, q: !0 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataElement";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.data_source_id || i.aR(m.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  data_source_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  keys: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint64String,
                    pbr: i.FE.readPackedUint64String,
                    bw: i.Xc.writeRepeatedUint64String,
                  },
                  data_object: { n: 3, c: u },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnData";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.data || i.aR(f.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { data: { n: 1, c: m, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataList";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.data_source_id || i.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  data_source_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  data_element_path: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  is_string: { n: 3, br: i.FE.readBool, bw: i.Xc.writeBool },
                  input: { n: 4, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  sql_column: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  preprocessing_type: {
                    n: 6,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  min_range: { n: 7, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  max_range: { n: 8, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  std_dev: { n: 9, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  compact_table: {
                    n: 10,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  compact_table_count: {
                    n: 11,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  sequence_table: {
                    n: 12,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  sequence_table_count: {
                    n: 13,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataSourceElementUsage";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.project_id || i.aR(h.M()),
            s.initialize(this, e, 0, -1, [7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  project_name: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  project_description: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  creator_account_id: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  create_time: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  unpublished_config: { n: 6, c: g },
                  published_configs: { n: 7, c: g, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProject";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.fetch_id || i.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  fetch_id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = i.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnFetchInfo";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.fetch_id || i.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  fetch_id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  scheduled_train: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  auto_snapshot_pending: {
                    n: 4,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnTrainInfo";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.project_id || i.aR(g.M()),
            s.initialize(this, e, 0, -1, [4, 5, 6, 17, 18, 12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  publish_time: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  data_source_ids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                  data_source_element_usages: { n: 5, c: p, r: !0, q: !0 },
                  project_nodes: { n: 6, c: R, r: !0, q: !0 },
                  snapshot_filter: { n: 11, c: w },
                  snapshot_config: { n: 7, c: v },
                  train_config: { n: 8, c: F },
                  scheduled_train_config: { n: 16, c: E },
                  data_retention_config: { n: 14, c: O },
                  fetch_infos: { n: 17, c: y, r: !0, q: !0 },
                  train_infos: { n: 18, c: b, r: !0, q: !0 },
                  map_data_element_sql_column: { n: 12, c: _, r: !0, q: !0 },
                  total_sql_columns: {
                    n: 13,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectConfig";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.key || i.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  key: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  value: { n: 2, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = i.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectConfig_MapDataElementSqlColumnEntry";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.data_element_path || i.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  data_element_path: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  min_value: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  max_value: { n: 3, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  num_buckets: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = i.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotFilterHistogram";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.sample_reduce_percent || i.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  sample_reduce_percent: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  histogram: { n: 2, c: B },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = i.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotFilter";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.snapshot_type || i.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  snapshot_type: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  snapshot_schedule_type: {
                    n: 5,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  snapshot_schedule_day_of_week: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  snapshot_schedule_day_of_month: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  compress: { n: 8, br: i.FE.readBool, bw: i.Xc.writeBool },
                  config_account_ids: { n: 2, c: M },
                  config_app_ids: { n: 3, c: z },
                  config_other_project: { n: 4, c: S },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotConfig";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.percent || i.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  percent: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  activity_recency_days: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = i.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotConfigAccountIDs";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.percent || i.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  percent: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  release_recency_days: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = i.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotConfigAppIDs";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.project_id || i.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = i.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotConfigOtherProject";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.fetch_workers || i.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  fetch_workers: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_chunk_size: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_batch_size: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_epoch_count: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_loss_improvement_threshold: {
                    n: 5,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  train_no_loss_improvement_epoch_limit: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_optimizer: {
                    n: 7,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  train_learning_rate: {
                    n: 8,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = i.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnTrainConfig";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.scheduled_type || i.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  scheduled_type: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  scheduled_minute: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  scheduled_hour: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  scheduled_day_of_week: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  scheduled_day_of_month: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  auto_activate_accuracy_threshold: {
                    n: 6,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = i.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnScheduledTrainConfig";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.snapshot_keep_duration_days || i.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  snapshot_keep_duration_days: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_keep_count: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = i.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataRetentionConfig";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.node_id || i.aR(R.M()),
            s.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  node_id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  location_x: { n: 2, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                  location_y: { n: 3, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                  comment: { n: 4, br: i.FE.readString, bw: i.Xc.writeString },
                  type: { n: 5, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  connectors: { n: 6, c: j, r: !0, q: !0 },
                  input: { n: 10, c: x },
                  dense: { n: 11, c: T },
                  dense_stack: { n: 12, c: C },
                  dropout: { n: 13, c: W },
                  embedding: { n: 14, c: I },
                  train: { n: 15, c: P },
                  conditional_extract: { n: 16, c: N },
                  concatenate: { n: 17, c: A },
                  shuffle: { n: 18, c: $ },
                  synced_shuffle: { n: 19, c: V },
                  onehot: { n: 20, c: Y },
                  explode: { n: 21, c: H },
                  conditional_swap: { n: 22, c: G },
                  kmeans: { n: 23, c: K },
                  combine: { n: 24, c: k },
                  text_vectorization: { n: 25, c: X },
                  batch_normalization: { n: 26, c: L },
                  normalize: { n: 27, c: q },
                  named_inference: { n: 28, c: Z },
                  dot: { n: 29, c: Q },
                  extract: { n: 30, c: J },
                  conv_1d: { n: 31, c: ee },
                  max_pooling_1d: { n: 32, c: te },
                  flatten: { n: 33, c: re },
                  global_max_pooling: { n: 34, c: ne },
                  transformer: { n: 35, c: ie },
                  external_embedding: { n: 36, c: ae },
                  time_distributed_dense: { n: 37, c: se },
                  sequence_split: { n: 38, c: oe },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = i.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectNode";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.connector_id || i.aR(j.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  connector_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  linked_connector_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                  is_input_connector: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = i.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectNodeConnector";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.input_num || i.aR(x.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  input_num: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = i.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeInput";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.activation || i.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  activation: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  width: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = i.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeDense";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.activation || i.aR(C.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  activation: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  width: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                  dropout_pct: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = i.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeDenseStack";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.dropout_pct || i.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  dropout_pct: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = i.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeDropout";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.max_value || i.aR(I.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  max_value: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  compact_table: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  embedding_width: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  flatten: { n: 4, br: i.FE.readBool, bw: i.Xc.writeBool },
                  export_name: {
                    n: 5,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  embed_name: {
                    n: 6,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = i.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeEmbedding";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.input_count || i.aR(P.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  input_count: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  activation: { n: 2, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  width: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  compact_table: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  loss: { n: 6, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  learning_rate: {
                    n: 7,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = i.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeTrain";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.extract_filter_type || i.aR(N.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  extract_filter_type: {
                    n: 10,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  extract_weight_type: {
                    n: 11,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  filter_info: { n: 12, c: U },
                  weight_info: { n: 13, c: D },
                  compact_table: {
                    n: 14,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  extracted_compact_table: {
                    n: 15,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = i.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConditionalExtract";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.appid_release_recency_months || i.aR(U.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  appid_release_recency_months: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  appid_publisher_id: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  appid_featured_tag_id: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  appid_theme_tag_id: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = i.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConditionalExtract_FilterInfo";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appid_release_recency_bias || i.aR(D.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid_release_recency_bias: {
                    n: 1,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  input_number: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  input_strength: {
                    n: 3,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = i.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConditionalExtract_WeightInfo";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.axis || i.aR(A.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  axis: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = i.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConcatenate";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeCombine";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.vocabulary_size || i.aR(X.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  vocabulary_size: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  standardize: { n: 2, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  output: { n: 3, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  sequence_length: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  split: { n: 5, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  ngrams: { n: 6, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = i.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeTextVectorization";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeBatchNormalization";
        }
      }
      class q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeNormalize";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.name || i.aR(Z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  name: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  only_inference: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = i.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeNamedInference";
        }
      }
      class $ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.exclude_zeroes || i.aR($.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  exclude_zeroes: {
                    n: 1,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = i.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA($.M(), e, t);
        }
        static fromObject(e) {
          return i.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeShuffle";
        }
      }
      class V extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.exclude_zeroes || i.aR(V.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  exclude_zeroes: {
                    n: 1,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = i.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeSyncedShuffle";
        }
      }
      class Y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.width || i.aR(Y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  width: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  compact_table: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  multi_hot: { n: 3, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = i.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeOnehot";
        }
      }
      class H extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeExplode";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConditionalSwap";
        }
      }
      class K extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.num_clusters || i.aR(K.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  num_clusters: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  name: { n: 2, br: i.FE.readString, bw: i.Xc.writeString },
                  generate_clusters: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = i.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeKMeansCluster";
        }
      }
      class Q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.normalize || i.aR(Q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  normalize: { n: 1, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = i.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeDot";
        }
      }
      class J extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.input_type || i.aR(J.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  input_type: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  mode: { n: 2, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  exclusion: { n: 3, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  selection: { n: 4, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  bias_start: { n: 5, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  bias_end: { n: 6, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  recency_months: {
                    n: 12,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  input_bias_input_number: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  input_bias_strength: {
                    n: 8,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  positive_sample_percent: {
                    n: 9,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  compact_table: {
                    n: 10,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  extracted_compact_table: {
                    n: 11,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = i.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeExtract";
        }
      }
      class ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.filters || i.aR(ee.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  filters: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  kernel_size: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  strides: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  activation: { n: 4, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = i.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConv1D";
        }
      }
      class te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.pool_size || i.aR(te.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  pool_size: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  strides: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = i.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeMaxPooling1D";
        }
      }
      class re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new re();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeFlatten";
        }
      }
      class ne extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ne();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeGlobalMaxPooling1D";
        }
      }
      class ie extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.num_heads || i.aR(ie.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  num_heads: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  feedforward_size: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  dropout_pct: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  num_internal_blocks: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = i.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ie.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeTransformer";
        }
      }
      class ae extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.project_id || i.aR(ae.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  embedding_name: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  compact_table: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = i.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ae.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeExternalEmbedding";
        }
      }
      class se extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.activation || i.aR(se.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  activation: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  width: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = i.Bh(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(se.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeTimeDistributedDense";
        }
      }
      class oe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.head_split_chance || i.aR(oe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  head_split_chance: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  mid_split_chance: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  tail_split_chance: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  sequence_table_name: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  compact_table_name: {
                    n: 5,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = i.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(oe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeSequenceSplit";
        }
      }
      class le extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.access_token || i.aR(le.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  data_source: { n: 3, c },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = i.Bh(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(le.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_RegisterDataSource_Request";
        }
      }
      class ce extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.result || i.aR(ce.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  data_source: { n: 2, c },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = i.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ce.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_RegisterDataSource_Response";
        }
      }
      class ue extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.access_token || i.aR(ue.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  data: { n: 3, c: m },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = i.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ue.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_CacheData_Request";
        }
      }
      class de extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.cache_data_result || i.aR(de.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  cache_data_result: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = i.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(de.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_CacheData_Response";
        }
      }
      class me extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.access_token || i.aR(me.M()),
            s.initialize(this, e, 0, -1, [4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  project_id: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  keys: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint64String,
                    pbr: i.FE.readPackedUint64String,
                    bw: i.Xc.writeRepeatedUint64String,
                  },
                  data: { n: 5, c: m, r: !0, q: !0 },
                  pending_data_limit_seconds: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = i.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(me.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_SnapshotProject_Request";
        }
      }
      class fe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.snapshot_result || i.aR(fe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  snapshot_result: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = i.Bh(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(fe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_SnapshotProject_Response";
        }
      }
      class pe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.access_token || i.aR(pe.M()),
            s.initialize(this, e, 0, -1, [7, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  project_id: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  override_train_id: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  data: { n: 6, c: f },
                  additional_data: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  keys: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint64String,
                    pbr: i.FE.readPackedUint64String,
                    bw: i.Xc.writeRepeatedUint64String,
                  },
                  named_inference: {
                    n: 9,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = i.Bh(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(pe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Inference_Request";
        }
      }
      class he extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.inference_result || i.aR(he.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  inference_result: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  backend_response: { n: 2, c: wt },
                  keys: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint64String,
                    pbr: i.FE.readPackedUint64String,
                    bw: i.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = i.Bh(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(he.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Inference_Response";
        }
      }
      class ye extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.access_token || i.aR(ye.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  project_id: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  override_train_id: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = i.Bh(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ye.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Request";
        }
      }
      class be extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.inference_metadata_result || i.aR(be.M()),
            s.initialize(this, e, 0, -1, [3, 4, 5, 6, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  inference_metadata_result: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  row_range: { n: 2, c: ge },
                  ranges: { n: 3, c: _e, r: !0, q: !0 },
                  std_devs: { n: 4, c: Be, r: !0, q: !0 },
                  compact_tables: { n: 5, c: we, r: !0, q: !0 },
                  kmeans: { n: 6, c: Se, r: !0, q: !0 },
                  app_info: { n: 8, c: Re, r: !0, q: !0 },
                  snapshot_histogram: { n: 7, c: Ee },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = i.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(be.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response";
        }
      }
      class ge extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.min_row || i.aR(ge.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  min_row: {
                    n: 1,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                  max_row: {
                    n: 2,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = i.Bh(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ge.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_RowRange";
        }
      }
      class _e extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.data_element_path || i.aR(_e.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  data_element_path: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  min_value: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  max_value: { n: 3, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = i.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(_e.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_Range";
        }
      }
      class Be extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.data_element_path || i.aR(Be.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  data_element_path: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  mean: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  std_dev: { n: 3, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = i.Bh(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Be.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_StdDev";
        }
      }
      class we extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.name || i.aR(we.M()),
            s.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  name: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  map_values: { n: 2, c: Me, r: !0, q: !0 },
                  map_mappings: { n: 3, c: ze, r: !0, q: !0 },
                  total_count: {
                    n: 4,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = i.Bh(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(we.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_CompactTable";
        }
      }
      class ve extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.value || i.aR(ve.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  value: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  mapping: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  count: {
                    n: 3,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = i.Bh(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ve.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_CompactTable_Entry";
        }
      }
      class Me extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.key || i.aR(Me.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  key: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  value: { n: 2, c: ve },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = i.Bh(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Me.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapValuesEntry";
        }
      }
      class ze extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.key || i.aR(ze.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  key: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  value: { n: 2, c: ve },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = i.Bh(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ze.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapMappingsEntry";
        }
      }
      class Se extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.name || i.aR(Se.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  name: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  clusters: { n: 2, c: Fe, r: !0, q: !0 },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = i.Bh(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Se.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_KMeans";
        }
      }
      class Fe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.x || i.aR(Fe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  x: { n: 1, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  y: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  radius: { n: 3, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  radius_75pct: {
                    n: 4,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  radius_50pct: {
                    n: 5,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  radius_25pct: {
                    n: 6,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = i.Bh(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Fe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_KMeans_Cluster";
        }
      }
      class Ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.min_value || i.aR(Ee.M()),
            s.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  min_value: { n: 1, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  max_value: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  num_buckets: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  bucket_counts: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = i.Bh(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ee.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_SnapshotHistogram";
        }
      }
      class Oe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.country_allow || i.aR(Oe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  country_allow: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  country_deny: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  platform_win: { n: 3, br: i.FE.readBool, bw: i.Xc.writeBool },
                  platform_mac: { n: 4, br: i.FE.readBool, bw: i.Xc.writeBool },
                  platform_linux: {
                    n: 5,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  adult_violence: {
                    n: 6,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  adult_sex: { n: 7, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = i.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Oe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_AppInfo";
        }
      }
      class Re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.key || i.aR(Re.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  key: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  value: { n: 2, c: Oe },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = i.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Re.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_AppInfoEntry";
        }
      }
      class je extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.cache_data_requests || i.aR(je.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  cache_data_requests: { n: 1, c: ue, r: !0, q: !0 },
                  snapshot_requests: { n: 2, c: me, r: !0, q: !0 },
                  inference_requests: { n: 3, c: pe, r: !0, q: !0 },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = i.Bh(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(je.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_BatchOperation_Request";
        }
      }
      class xe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.cache_data_responses || i.aR(xe.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  cache_data_responses: { n: 1, c: de, r: !0, q: !0 },
                  snapshot_responses: { n: 2, c: fe, r: !0, q: !0 },
                  inference_responses: { n: 3, c: he, r: !0, q: !0 },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = i.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(xe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_BatchOperation_Response";
        }
      }
      class Te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.project_name || i.aR(Te.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  project_name: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  project_description: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = i.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Te.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_CreateProject_Request";
        }
      }
      class Ce extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.result || i.aR(Ce.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  project: { n: 2, c: h },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = i.Bh(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ce.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_CreateProject_Response";
        }
      }
      class We extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.appid || i.aR(We.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  appid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = i.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(We.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_ListProjects_Request";
        }
      }
      class Ie extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.projects || i.aR(Ie.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: { projects: { n: 1, c: h, r: !0, q: !0 } },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = i.Bh(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ie.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_ListProjects_Response";
        }
      }
      class Pe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.project_id || i.aR(Pe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = i.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Pe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetProject_Request";
        }
      }
      class Ne extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.project || i.aR(Ne.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = { proto: Ne, fields: { project: { n: 1, c: h } } }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = i.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ne.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetProject_Response";
        }
      }
      class Ue extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ue();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_ListDataSources_Request";
        }
      }
      class De extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.data_sources || i.aR(De.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: { data_sources: { n: 1, c, r: !0, q: !0 } },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = i.Bh(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(De.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_ListDataSources_Response";
        }
      }
      class Ae extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.data_source_id || i.aR(Ae.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  data_source_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = i.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ae.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetDataSource_Request";
        }
      }
      class ke extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.data_source || i.aR(ke.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = { proto: ke, fields: { data_source: { n: 1, c } } }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = i.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ke.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetDataSource_Response";
        }
      }
      class Xe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.project || i.aR(Xe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  project: { n: 1, c: h },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = i.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Xe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_EditProject_Request";
        }
      }
      class Le extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.result || i.aR(Le.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = i.Bh(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Le.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_EditProject_Response";
        }
      }
      class qe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.project_id || i.aR(qe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = i.Bh(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(qe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_PublishProject_Request";
        }
      }
      class Ze extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.result || i.aR(Ze.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = i.Bh(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ze.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_PublishProject_Response";
        }
      }
      class $e extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.register_data_source_access_token || i.aR($e.M()),
            s.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  register_data_source_access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  cache_data_access_tokens: { n: 2, c: Ve, r: !0, q: !0 },
                  snapshot_project_access_tokens: { n: 3, c: Ye, r: !0, q: !0 },
                  inference_access_tokens: { n: 4, c: He, r: !0, q: !0 },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = i.Bh($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA($e.M(), e, t);
        }
        static fromObject(e) {
          return i.aD($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnAccessTokens";
        }
      }
      class Ve extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.data_source_id || i.aR(Ve.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  data_source_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  access_token: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = i.Bh(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ve.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnAccessTokens_CacheDataAccessToken";
        }
      }
      class Ye extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.project_id || i.aR(Ye.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  access_token: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = i.Bh(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ye.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken";
        }
      }
      class He extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.project_id || i.aR(He.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  access_token: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = i.Bh(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(He.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnAccessTokens_InferenceAccessToken";
        }
      }
      class Ge extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.appid || i.aR(Ge.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  appid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = i.Bh(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ge.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetAccessTokens_Request";
        }
      }
      class Ke extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.result || i.aR(Ke.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  access_tokens: { n: 2, c: $e },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = i.Bh(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ke.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetAccessTokens_Response";
        }
      }
      class Qe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.project_config || i.aR(Qe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  project_config: { n: 1, c: g },
                  fetch: { n: 2, c: Je },
                  train: { n: 3, c: et },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = i.Bh(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Qe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Train_Request";
        }
      }
      class Je extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.fetch_id || i.aR(Je.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: {
                  fetch_id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  request_cancel: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = i.Bh(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Je.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Je.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Train_Request_Fetch";
        }
      }
      class et extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            et.prototype.train_id || i.aR(et.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: {
                  train_id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  request_cancel: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  scheduled_train: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = i.Bh(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(et.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Train_Request_Train";
        }
      }
      class tt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tt.prototype.result || i.aR(tt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = i.Bh(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(tt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Train_Response";
        }
      }
      class rt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.project_id || i.aR(rt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = i.Bh(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(rt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetFetchStatusVersions_Request";
        }
      }
      class nt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nt.prototype.versions || i.aR(nt.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  versions: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = i.Bh(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(nt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new nt();
          return nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetFetchStatusVersions_Response";
        }
      }
      class it extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            it.prototype.project_id || i.aR(it.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = i.Bh(it.M())), it.sm_mbf;
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(it.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(it.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(it.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(it.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatusVersions_Request";
        }
      }
      class at extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            at.prototype.versions || i.aR(at.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  versions: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = i.Bh(at.M())), at.sm_mbf;
        }
        toObject(e = !1) {
          return at.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(at.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(at.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new at();
          return at.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(at.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(at.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatusVersions_Response";
        }
      }
      class st extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.fetch_requests || i.aR(st.M()),
            s.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: {
                  fetch_requests: { n: 1, c: lt, r: !0, q: !0 },
                  train_requests: { n: 2, c: dt, r: !0, q: !0 },
                },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = i.Bh(st.M())), st.sm_mbf;
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(st.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(st.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new st();
          return st.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(st.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(st.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetBatchedStatus_Request";
        }
      }
      class ot extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ot.prototype.result || i.aR(ot.M()),
            s.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  fetch_responses: { n: 2, c: ct, r: !0, q: !0 },
                  train_responses: { n: 3, c: mt, r: !0, q: !0 },
                },
              }),
            ot.sm_m
          );
        }
        static MBF() {
          return ot.sm_mbf || (ot.sm_mbf = i.Bh(ot.M())), ot.sm_mbf;
        }
        toObject(e = !1) {
          return ot.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ot.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ot();
          return ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetBatchedStatus_Response";
        }
      }
      class lt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lt.prototype.project_id || i.aR(lt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = i.Bh(lt.M())), lt.sm_mbf;
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(lt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new lt();
          return lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetFetchStatus_Request";
        }
      }
      class ct extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ct.prototype.result || i.aR(ct.M()),
            s.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ct.sm_m ||
              (ct.sm_m = {
                proto: ct,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  project_id: {
                    n: 11,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  status: { n: 3, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  workers: { n: 4, c: ut, r: !0, q: !0 },
                  total_rows_written: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  total_rows_processed: {
                    n: 9,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  total_rows: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  start_time: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_time: { n: 8, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  error_string: {
                    n: 10,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  cancel_pending: {
                    n: 15,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  metadata_phase: {
                    n: 12,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  metadata_phase_name: {
                    n: 13,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  metadata_phase_value: {
                    n: 14,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            ct.sm_m
          );
        }
        static MBF() {
          return ct.sm_mbf || (ct.sm_mbf = i.Bh(ct.M())), ct.sm_mbf;
        }
        toObject(e = !1) {
          return ct.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ct.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ct();
          return ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetFetchStatus_Response";
        }
      }
      class ut extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ut.prototype.rows_written || i.aR(ut.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = {
                proto: ut,
                fields: {
                  rows_written: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rows_processed: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  complete: { n: 2, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            ut.sm_m
          );
        }
        static MBF() {
          return ut.sm_mbf || (ut.sm_mbf = i.Bh(ut.M())), ut.sm_mbf;
        }
        toObject(e = !1) {
          return ut.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ut.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ut();
          return ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetFetchStatus_Response_Worker";
        }
      }
      class dt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dt.prototype.project_id || i.aR(dt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dt.sm_m ||
              (dt.sm_m = {
                proto: dt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            dt.sm_m
          );
        }
        static MBF() {
          return dt.sm_mbf || (dt.sm_mbf = i.Bh(dt.M())), dt.sm_mbf;
        }
        toObject(e = !1) {
          return dt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(dt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new dt();
          return dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatus_Request";
        }
      }
      class mt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mt.prototype.result || i.aR(mt.M()),
            s.initialize(this, e, 0, -1, [5, 10, 12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mt.sm_m ||
              (mt.sm_m = {
                proto: mt,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  project_id: {
                    n: 18,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  fetch_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  status: { n: 4, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  epochs: { n: 5, c: pt, r: !0, q: !0 },
                  total_epochs: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_batch_count: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  validate_batch_count: {
                    n: 8,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  test_batch_count: {
                    n: 9,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  test_batches: { n: 10, c: ft, r: !0, q: !0 },
                  test_loss: { n: 11, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  test_accuracy: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  start_time: {
                    n: 13,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_time: {
                    n: 14,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  scheduled_train: {
                    n: 15,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  live: { n: 16, br: i.FE.readBool, bw: i.Xc.writeBool },
                  active: { n: 17, br: i.FE.readBool, bw: i.Xc.writeBool },
                  cancel_pending: {
                    n: 19,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            mt.sm_m
          );
        }
        static MBF() {
          return mt.sm_mbf || (mt.sm_mbf = i.Bh(mt.M())), mt.sm_mbf;
        }
        toObject(e = !1) {
          return mt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(mt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new mt();
          return mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatus_Response";
        }
      }
      class ft extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ft.prototype.loss || i.aR(ft.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: {
                  loss: { n: 1, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  accuracy: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  batch_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            ft.sm_m
          );
        }
        static MBF() {
          return ft.sm_mbf || (ft.sm_mbf = i.Bh(ft.M())), ft.sm_mbf;
        }
        toObject(e = !1) {
          return ft.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ft.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ft();
          return ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatus_Response_Batch";
        }
      }
      class pt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pt.prototype.epoch_number || i.aR(pt.M()),
            s.initialize(this, e, 0, -1, [3, 5, 6, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  epoch_number: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  epoch_train_loss: {
                    n: 2,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  epoch_train_accuracy: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  epoch_validate_loss: {
                    n: 4,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  epoch_validate_accuracy: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  train_batches: { n: 6, c: ft, r: !0, q: !0 },
                  validate_batches: { n: 7, c: ft, r: !0, q: !0 },
                  start_time: {
                    n: 8,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_time: { n: 9, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = i.Bh(pt.M())), pt.sm_mbf;
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(pt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatus_Response_Epoch";
        }
      }
      class ht extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ht.prototype.project_id || i.aR(ht.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ht.sm_m ||
              (ht.sm_m = {
                proto: ht,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            ht.sm_m
          );
        }
        static MBF() {
          return ht.sm_mbf || (ht.sm_mbf = i.Bh(ht.M())), ht.sm_mbf;
        }
        toObject(e = !1) {
          return ht.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ht.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ht();
          return ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainLogs_Request";
        }
      }
      class yt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.result || i.aR(yt.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  main_log: { n: 2, br: i.FE.readString, bw: i.Xc.writeString },
                  fetch_worker_logs: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.FE.readString,
                    bw: i.Xc.writeRepeatedString,
                  },
                  gpu_log: { n: 4, br: i.FE.readString, bw: i.Xc.writeString },
                },
              }),
            yt.sm_m
          );
        }
        static MBF() {
          return yt.sm_mbf || (yt.sm_mbf = i.Bh(yt.M())), yt.sm_mbf;
        }
        toObject(e = !1) {
          return yt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(yt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new yt();
          return yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainLogs_Response";
        }
      }
      class bt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            bt.prototype.project_id || i.aR(bt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            bt.sm_m ||
              (bt.sm_m = {
                proto: bt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  from_scheduled: {
                    n: 4,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  deactivate: { n: 5, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            bt.sm_m
          );
        }
        static MBF() {
          return bt.sm_mbf || (bt.sm_mbf = i.Bh(bt.M())), bt.sm_mbf;
        }
        toObject(e = !1) {
          return bt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(bt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(bt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new bt();
          return bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(bt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(bt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_SetTrainLive_Request";
        }
      }
      class gt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gt.prototype.result || i.aR(gt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gt.sm_m ||
              (gt.sm_m = {
                proto: gt,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                },
              }),
            gt.sm_m
          );
        }
        static MBF() {
          return gt.sm_mbf || (gt.sm_mbf = i.Bh(gt.M())), gt.sm_mbf;
        }
        toObject(e = !1) {
          return gt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(gt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new gt();
          return gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_SetTrainLive_Response";
        }
      }
      class _t extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _t.prototype.float_value || i.aR(_t.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _t.sm_m ||
              (_t.sm_m = {
                proto: _t,
                fields: {
                  float_value: {
                    n: 1,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  string_value: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            _t.sm_m
          );
        }
        static MBF() {
          return _t.sm_mbf || (_t.sm_mbf = i.Bh(_t.M())), _t.sm_mbf;
        }
        toObject(e = !1) {
          return _t.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(_t.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(_t.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _t();
          return _t.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(_t.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _t.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(_t.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _t.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnRawDataElement";
        }
      }
      class Bt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Bt.prototype.project_id || i.aR(Bt.M()),
            s.initialize(this, e, 0, -1, [4, 7, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Bt.sm_m ||
              (Bt.sm_m = {
                proto: Bt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  data: { n: 4, c: _t, r: !0, q: !0 },
                  additional_data: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  keys: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint64String,
                    pbr: i.FE.readPackedUint64String,
                    bw: i.Xc.writeRepeatedUint64String,
                  },
                  named_inference: {
                    n: 8,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            Bt.sm_m
          );
        }
        static MBF() {
          return Bt.sm_mbf || (Bt.sm_mbf = i.Bh(Bt.M())), Bt.sm_mbf;
        }
        toObject(e = !1) {
          return Bt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Bt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Bt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Bt();
          return Bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Bt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Bt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Request";
        }
      }
      class wt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wt.prototype.outputs || i.aR(wt.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wt.sm_m ||
              (wt.sm_m = {
                proto: wt,
                fields: { outputs: { n: 1, c: Ft, r: !0, q: !0 } },
              }),
            wt.sm_m
          );
        }
        static MBF() {
          return wt.sm_mbf || (wt.sm_mbf = i.Bh(wt.M())), wt.sm_mbf;
        }
        toObject(e = !1) {
          return wt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(wt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new wt();
          return wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response";
        }
      }
      class vt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vt.prototype.value || i.aR(vt.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vt.sm_m ||
              (vt.sm_m = {
                proto: vt,
                fields: {
                  value: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                },
              }),
            vt.sm_m
          );
        }
        static MBF() {
          return vt.sm_mbf || (vt.sm_mbf = i.Bh(vt.M())), vt.sm_mbf;
        }
        toObject(e = !1) {
          return vt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(vt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new vt();
          return vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response_RegressionOutput";
        }
      }
      class Mt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mt.prototype.value || i.aR(Mt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mt.sm_m ||
              (Mt.sm_m = {
                proto: Mt,
                fields: {
                  value: { n: 1, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                },
              }),
            Mt.sm_m
          );
        }
        static MBF() {
          return Mt.sm_mbf || (Mt.sm_mbf = i.Bh(Mt.M())), Mt.sm_mbf;
        }
        toObject(e = !1) {
          return Mt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Mt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Mt();
          return Mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response_BinaryCrossEntropyOutput";
        }
      }
      class zt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zt.prototype.weight || i.aR(zt.M()),
            s.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            zt.sm_m ||
              (zt.sm_m = {
                proto: zt,
                fields: {
                  weight: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  value: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                },
              }),
            zt.sm_m
          );
        }
        static MBF() {
          return zt.sm_mbf || (zt.sm_mbf = i.Bh(zt.M())), zt.sm_mbf;
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(zt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response_MutliBinaryCrossEntropyOutput";
        }
      }
      class St extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.weight || i.aR(St.M()),
            s.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: {
                  weight: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  value: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                },
              }),
            St.sm_m
          );
        }
        static MBF() {
          return St.sm_mbf || (St.sm_mbf = i.Bh(St.M())), St.sm_mbf;
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(St.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(St.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response_CategoricalCrossEntropyOutput";
        }
      }
      class Ft extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ft.prototype.binary_crossentropy || i.aR(Ft.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ft.sm_m ||
              (Ft.sm_m = {
                proto: Ft,
                fields: {
                  binary_crossentropy: { n: 1, c: Mt },
                  categorical_crossentropy: { n: 2, c: St },
                  multi_binary_crossentropy: { n: 3, c: zt },
                  regression: { n: 4, c: vt },
                },
              }),
            Ft.sm_m
          );
        }
        static MBF() {
          return Ft.sm_mbf || (Ft.sm_mbf = i.Bh(Ft.M())), Ft.sm_mbf;
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ft.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response_Output";
        }
      }
      class Et extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Et.prototype.project_id || i.aR(Et.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Et.sm_m ||
              (Et.sm_m = {
                proto: Et,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            Et.sm_m
          );
        }
        static MBF() {
          return Et.sm_mbf || (Et.sm_mbf = i.Bh(Et.M())), Et.sm_mbf;
        }
        toObject(e = !1) {
          return Et.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Et.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Et();
          return Et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Et.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_LogEvent_TrainStarted";
        }
      }
      class Ot extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.project_id || i.aR(Ot.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  loss: { n: 4, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  accuracy: { n: 5, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                },
              }),
            Ot.sm_m
          );
        }
        static MBF() {
          return Ot.sm_mbf || (Ot.sm_mbf = i.Bh(Ot.M())), Ot.sm_mbf;
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ot.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_LogEvent_TrainEnded";
        }
      }
      class Rt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.project_id || i.aR(Rt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rt.sm_m ||
              (Rt.sm_m = {
                proto: Rt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  manual_set_live: {
                    n: 4,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  accuracy_difference: {
                    n: 5,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  accuracy_threshold: {
                    n: 6,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            Rt.sm_m
          );
        }
        static MBF() {
          return Rt.sm_mbf || (Rt.sm_mbf = i.Bh(Rt.M())), Rt.sm_mbf;
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Rt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_LogEvent_TrainSetLive";
        }
      }
      class jt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jt.prototype.project_id || i.aR(jt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            jt.sm_m ||
              (jt.sm_m = {
                proto: jt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            jt.sm_m
          );
        }
        static MBF() {
          return jt.sm_mbf || (jt.sm_mbf = i.Bh(jt.M())), jt.sm_mbf;
        }
        toObject(e = !1) {
          return jt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(jt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(jt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new jt();
          return jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(jt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(jt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_LogEvent_ScheduledTrain";
        }
      }
      class xt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xt.prototype.event_type || i.aR(xt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xt.sm_m ||
              (xt.sm_m = {
                proto: xt,
                fields: {
                  event_type: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  timestamp: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_started: { n: 3, c: Et },
                  train_ended: { n: 4, c: Ot },
                  train_set_live: { n: 5, c: Rt },
                  scheduled_train: { n: 6, c: jt },
                },
              }),
            xt.sm_m
          );
        }
        static MBF() {
          return xt.sm_mbf || (xt.sm_mbf = i.Bh(xt.M())), xt.sm_mbf;
        }
        toObject(e = !1) {
          return xt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(xt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new xt();
          return xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_LogEvent";
        }
      }
      class Tt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.start_timestamp || i.aR(Tt.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  start_timestamp: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_timestamp: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = i.Bh(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Tt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetLogEvents_Request";
        }
      }
      class Ct extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.result || i.aR(Ct.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  event_list: { n: 2, c: xt, r: !0, q: !0 },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = i.Bh(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ct.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetLogEvents_Response";
        }
      }
      class Wt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wt.prototype.project_id || i.aR(Wt.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wt.sm_m ||
              (Wt.sm_m = {
                proto: Wt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  export_name: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  numerical_values: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                  fetch_id: { n: 6, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            Wt.sm_m
          );
        }
        static MBF() {
          return Wt.sm_mbf || (Wt.sm_mbf = i.Bh(Wt.M())), Wt.sm_mbf;
        }
        toObject(e = !1) {
          return Wt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Wt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Wt();
          return Wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetEmbeddingValues_Request";
        }
      }
      class It extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            It.prototype.result || i.aR(It.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            It.sm_m ||
              (It.sm_m = {
                proto: It,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  embedding_data: { n: 2, c: Pt, r: !0, q: !0 },
                },
              }),
            It.sm_m
          );
        }
        static MBF() {
          return It.sm_mbf || (It.sm_mbf = i.Bh(It.M())), It.sm_mbf;
        }
        toObject(e = !1) {
          return It.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(It.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(It.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new It();
          return It.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(It.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(It.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return It.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetEmbeddingValues_Response";
        }
      }
      class Pt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pt.prototype.numerical_value || i.aR(Pt.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pt.sm_m ||
              (Pt.sm_m = {
                proto: Pt,
                fields: {
                  numerical_value: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  embedding_values: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                },
              }),
            Pt.sm_m
          );
        }
        static MBF() {
          return Pt.sm_mbf || (Pt.sm_mbf = i.Bh(Pt.M())), Pt.sm_mbf;
        }
        toObject(e = !1) {
          return Pt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Pt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Pt();
          return Pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetEmbeddingValues_Response_EmbeddingData";
        }
      }
      class Nt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.project_id || i.aR(Nt.M()),
            s.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  export_name: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  result_count: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  values: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  fetch_id: { n: 7, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  popularity_weight: {
                    n: 8,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  focus_weight: {
                    n: 9,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            Nt.sm_m
          );
        }
        static MBF() {
          return Nt.sm_mbf || (Nt.sm_mbf = i.Bh(Nt.M())), Nt.sm_mbf;
        }
        toObject(e = !1) {
          return Nt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Nt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Nt();
          return Nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetNearestEmbedding_Request";
        }
      }
      class Ut extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ut.prototype.result || i.aR(Ut.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ut.sm_m ||
              (Ut.sm_m = {
                proto: Ut,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  near_embeddings: { n: 2, c: Dt, r: !0, q: !0 },
                },
              }),
            Ut.sm_m
          );
        }
        static MBF() {
          return Ut.sm_mbf || (Ut.sm_mbf = i.Bh(Ut.M())), Ut.sm_mbf;
        }
        toObject(e = !1) {
          return Ut.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ut.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetNearestEmbedding_Response";
        }
      }
      class Dt extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dt.prototype.value || i.aR(Dt.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Dt.sm_m ||
              (Dt.sm_m = {
                proto: Dt,
                fields: {
                  value: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  distance: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  embedding_values: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                },
              }),
            Dt.sm_m
          );
        }
        static MBF() {
          return Dt.sm_mbf || (Dt.sm_mbf = i.Bh(Dt.M())), Dt.sm_mbf;
        }
        toObject(e = !1) {
          return Dt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Dt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Dt();
          return Dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetNearestEmbedding_Response_NearEmbedding";
        }
      }
      var At;
      !(function (e) {
        (e.CreateProject = function (e, t) {
          return e.SendMsg("SteamLearn.CreateProject#1", (0, a.MD)(Te, t), Ce, {
            ePrivilege: 1,
          });
        }),
          (e.EditProject = function (e, t) {
            return e.SendMsg("SteamLearn.EditProject#1", (0, a.MD)(Xe, t), Le, {
              ePrivilege: 1,
            });
          }),
          (e.ListProjects = function (e, t) {
            return e.SendMsg(
              "SteamLearn.ListProjects#1",
              (0, a.MD)(We, t),
              Ie,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProject = function (e, t) {
            return e.SendMsg("SteamLearn.GetProject#1", (0, a.MD)(Pe, t), Ne, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.PublishProject = function (e, t) {
            return e.SendMsg(
              "SteamLearn.PublishProject#1",
              (0, a.MD)(qe, t),
              Ze,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterDataSource = function (e, t) {
            return e.SendMsg(
              "SteamLearn.RegisterDataSource#1",
              (0, a.MD)(le, t),
              ce,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.ListDataSources = function (e, t) {
            return e.SendMsg(
              "SteamLearn.ListDataSources#1",
              (0, a.MD)(Ue, t),
              De,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDataSource = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetDataSource#1",
              (0, a.MD)(Ae, t),
              ke,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.CacheData = function (e, t) {
            return e.SendMsg("SteamLearn.CacheData#1", (0, a.MD)(ue, t), de, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SnapshotProject = function (e, t) {
            return e.SendMsg(
              "SteamLearn.SnapshotProject#1",
              (0, a.MD)(me, t),
              fe,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.Inference = function (e, t) {
            return e.SendMsg("SteamLearn.Inference#1", (0, a.MD)(pe, t), he, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.InferenceMetadata = function (e, t) {
            return e.SendMsg(
              "SteamLearn.InferenceMetadata#1",
              (0, a.MD)(ye, t),
              be,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.InferenceBackend = function (e, t) {
            return e.SendMsg(
              "SteamLearn.InferenceBackend#1",
              (0, a.MD)(Bt, t),
              wt,
              { ePrivilege: 1 },
            );
          }),
          (e.BatchOperation = function (e, t) {
            return e.SendMsg(
              "SteamLearn.BatchOperation#1",
              (0, a.MD)(je, t),
              xe,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetAccessTokensWeb = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetAccessTokensWeb#1",
              (0, a.MD)(Ge, t),
              Ke,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.Train = function (e, t) {
            return e.SendMsg("SteamLearn.Train#1", (0, a.MD)(Qe, t), tt, {
              ePrivilege: 1,
            });
          }),
          (e.GetFetchStatusVersions = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetFetchStatusVersions#1",
              (0, a.MD)(rt, t),
              nt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetTrainStatusVersions = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetTrainStatusVersions#1",
              (0, a.MD)(it, t),
              at,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetBatchedStatus = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetBatchedStatus#1",
              (0, a.MD)(st, t),
              ot,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFetchStatus = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetFetchStatus#1",
              (0, a.MD)(lt, t),
              ct,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetTrainStatus = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetTrainStatus#1",
              (0, a.MD)(dt, t),
              mt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetTrainLogs = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetTrainLogs#1",
              (0, a.MD)(ht, t),
              yt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetTrainLive = function (e, t) {
            return e.SendMsg(
              "SteamLearn.SetTrainLive#1",
              (0, a.MD)(bt, t),
              gt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetLogEvents = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetLogEvents#1",
              (0, a.MD)(Tt, t),
              Ct,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetEmbeddingValues = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetEmbeddingValues#1",
              (0, a.MD)(Wt, t),
              It,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetNearestEmbedding = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetNearestEmbedding#1",
              (0, a.MD)(Nt, t),
              Ut,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(At || (At = {}));
    },
    7785: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => l });
      var n = { value: () => {} };
      function i() {
        for (var e, t = 0, r = arguments.length, n = {}; t < r; ++t) {
          if (!(e = arguments[t] + "") || e in n || /[\s.]/.test(e))
            throw new Error("illegal type: " + e);
          n[e] = [];
        }
        return new a(n);
      }
      function a(e) {
        this._ = e;
      }
      function s(e, t) {
        for (var r, n = 0, i = e.length; n < i; ++n)
          if ((r = e[n]).name === t) return r.value;
      }
      function o(e, t, r) {
        for (var i = 0, a = e.length; i < a; ++i)
          if (e[i].name === t) {
            (e[i] = n), (e = e.slice(0, i).concat(e.slice(i + 1)));
            break;
          }
        return null != r && e.push({ name: t, value: r }), e;
      }
      a.prototype = i.prototype = {
        constructor: a,
        on: function (e, t) {
          var r,
            n,
            i = this._,
            a =
              ((n = i),
              (e + "")
                .trim()
                .split(/^|\s+/)
                .map(function (e) {
                  var t = "",
                    r = e.indexOf(".");
                  if (
                    (r >= 0 && ((t = e.slice(r + 1)), (e = e.slice(0, r))),
                    e && !n.hasOwnProperty(e))
                  )
                    throw new Error("unknown type: " + e);
                  return { type: e, name: t };
                })),
            l = -1,
            c = a.length;
          if (!(arguments.length < 2)) {
            if (null != t && "function" != typeof t)
              throw new Error("invalid callback: " + t);
            for (; ++l < c; )
              if ((r = (e = a[l]).type)) i[r] = o(i[r], e.name, t);
              else if (null == t) for (r in i) i[r] = o(i[r], e.name, null);
            return this;
          }
          for (; ++l < c; )
            if ((r = (e = a[l]).type) && (r = s(i[r], e.name))) return r;
        },
        copy: function () {
          var e = {},
            t = this._;
          for (var r in t) e[r] = t[r].slice();
          return new a(e);
        },
        call: function (e, t) {
          if ((r = arguments.length - 2) > 0)
            for (var r, n, i = new Array(r), a = 0; a < r; ++a)
              i[a] = arguments[a + 2];
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (a = 0, r = (n = this._[e]).length; a < r; ++a)
            n[a].value.apply(t, i);
        },
        apply: function (e, t, r) {
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (var n = this._[e], i = 0, a = n.length; i < a; ++i)
            n[i].value.apply(t, r);
        },
      };
      const l = i;
    },
    12466: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => s, Z: () => a });
      var n = r(37788),
        i = r(70393);
      function a(e) {
        var t = e.document.documentElement,
          r = (0, n.Z)(e).on("dragstart.drag", i.ZP, i.Dd);
        "onselectstart" in t
          ? r.on("selectstart.drag", i.ZP, i.Dd)
          : ((t.__noselect = t.style.MozUserSelect),
            (t.style.MozUserSelect = "none"));
      }
      function s(e, t) {
        var r = e.document.documentElement,
          a = (0, n.Z)(e).on("dragstart.drag", null);
        t &&
          (a.on("click.drag", i.ZP, i.Dd),
          setTimeout(function () {
            a.on("click.drag", null);
          }, 0)),
          "onselectstart" in r
            ? a.on("selectstart.drag", null)
            : ((r.style.MozUserSelect = r.__noselect), delete r.__noselect);
      }
    },
    70393: (e, t, r) => {
      "use strict";
      r.d(t, { Dd: () => i, Q7: () => n, ZP: () => s, rG: () => a });
      const n = { passive: !1 },
        i = { capture: !0, passive: !1 };
      function a(e) {
        e.stopImmediatePropagation();
      }
      function s(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
    },
    36749: (e, t, r) => {
      "use strict";
      function n(e) {
        return function () {
          return this.matches(e);
        };
      }
      function i(e) {
        return function (t) {
          return t.matches(e);
        };
      }
      r.d(t, { P: () => i, Z: () => n });
    },
    71758: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      var n = r(6070);
      function i(e) {
        var t = (e += ""),
          r = t.indexOf(":");
        return (
          r >= 0 && "xmlns" !== (t = e.slice(0, r)) && (e = e.slice(r + 1)),
          n.Z.hasOwnProperty(t) ? { space: n.Z[t], local: e } : e
        );
      }
    },
    6070: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => n, Z: () => i });
      var n = "http://www.w3.org/1999/xhtml";
      const i = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: n,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
    },
    65683: (e, t, r) => {
      "use strict";
      function n(e, t) {
        if (
          ((e = (function (e) {
            let t;
            for (; (t = e.sourceEvent); ) e = t;
            return e;
          })(e)),
          void 0 === t && (t = e.currentTarget),
          t)
        ) {
          var r = t.ownerSVGElement || t;
          if (r.createSVGPoint) {
            var n = r.createSVGPoint();
            return (
              (n.x = e.clientX),
              (n.y = e.clientY),
              [(n = n.matrixTransform(t.getScreenCTM().inverse())).x, n.y]
            );
          }
          if (t.getBoundingClientRect) {
            var i = t.getBoundingClientRect();
            return [
              e.clientX - i.left - t.clientLeft,
              e.clientY - i.top - t.clientTop,
            ];
          }
        }
        return [e.pageX, e.pageY];
      }
      r.d(t, { Z: () => n });
    },
    37788: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      var n = r(46926);
      function i(e) {
        return "string" == typeof e
          ? new n.Y1([[document.querySelector(e)]], [document.documentElement])
          : new n.Y1([[e]], n.Jz);
      }
    },
    46926: (e, t, r) => {
      "use strict";
      r.d(t, { Y1: () => se, ZP: () => le, Jz: () => ae });
      var n = r(81944);
      var i = r(85163);
      function a(e) {
        return function () {
          return null == (t = e.apply(this, arguments))
            ? []
            : Array.isArray(t)
              ? t
              : Array.from(t);
          var t;
        };
      }
      var s = r(36749),
        o = Array.prototype.find;
      function l() {
        return this.firstElementChild;
      }
      var c = Array.prototype.filter;
      function u() {
        return Array.from(this.children);
      }
      function d(e) {
        return new Array(e.length);
      }
      function m(e, t) {
        (this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t);
      }
      function f(e, t, r, n, i, a) {
        for (var s, o = 0, l = t.length, c = a.length; o < c; ++o)
          (s = t[o])
            ? ((s.__data__ = a[o]), (n[o] = s))
            : (r[o] = new m(e, a[o]));
        for (; o < l; ++o) (s = t[o]) && (i[o] = s);
      }
      function p(e, t, r, n, i, a, s) {
        var o,
          l,
          c,
          u = new Map(),
          d = t.length,
          f = a.length,
          p = new Array(d);
        for (o = 0; o < d; ++o)
          (l = t[o]) &&
            ((p[o] = c = s.call(l, l.__data__, o, t) + ""),
            u.has(c) ? (i[o] = l) : u.set(c, l));
        for (o = 0; o < f; ++o)
          (c = s.call(e, a[o], o, a) + ""),
            (l = u.get(c))
              ? ((n[o] = l), (l.__data__ = a[o]), u.delete(c))
              : (r[o] = new m(e, a[o]));
        for (o = 0; o < d; ++o) (l = t[o]) && u.get(p[o]) === l && (i[o] = l);
      }
      function h(e) {
        return e.__data__;
      }
      function y(e) {
        return "object" == typeof e && "length" in e ? e : Array.from(e);
      }
      function b(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      m.prototype = {
        constructor: m,
        appendChild: function (e) {
          return this._parent.insertBefore(e, this._next);
        },
        insertBefore: function (e, t) {
          return this._parent.insertBefore(e, t);
        },
        querySelector: function (e) {
          return this._parent.querySelector(e);
        },
        querySelectorAll: function (e) {
          return this._parent.querySelectorAll(e);
        },
      };
      var g = r(71758);
      function _(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function B(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function w(e, t) {
        return function () {
          this.setAttribute(e, t);
        };
      }
      function v(e, t) {
        return function () {
          this.setAttributeNS(e.space, e.local, t);
        };
      }
      function M(e, t) {
        return function () {
          var r = t.apply(this, arguments);
          null == r ? this.removeAttribute(e) : this.setAttribute(e, r);
        };
      }
      function z(e, t) {
        return function () {
          var r = t.apply(this, arguments);
          null == r
            ? this.removeAttributeNS(e.space, e.local)
            : this.setAttributeNS(e.space, e.local, r);
        };
      }
      var S = r(7843);
      function F(e) {
        return function () {
          delete this[e];
        };
      }
      function E(e, t) {
        return function () {
          this[e] = t;
        };
      }
      function O(e, t) {
        return function () {
          var r = t.apply(this, arguments);
          null == r ? delete this[e] : (this[e] = r);
        };
      }
      function R(e) {
        return e.trim().split(/^|\s+/);
      }
      function j(e) {
        return e.classList || new x(e);
      }
      function x(e) {
        (this._node = e), (this._names = R(e.getAttribute("class") || ""));
      }
      function T(e, t) {
        for (var r = j(e), n = -1, i = t.length; ++n < i; ) r.add(t[n]);
      }
      function C(e, t) {
        for (var r = j(e), n = -1, i = t.length; ++n < i; ) r.remove(t[n]);
      }
      function W(e) {
        return function () {
          T(this, e);
        };
      }
      function I(e) {
        return function () {
          C(this, e);
        };
      }
      function P(e, t) {
        return function () {
          (t.apply(this, arguments) ? T : C)(this, e);
        };
      }
      function N() {
        this.textContent = "";
      }
      function U(e) {
        return function () {
          this.textContent = e;
        };
      }
      function D(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.textContent = null == t ? "" : t;
        };
      }
      function A() {
        this.innerHTML = "";
      }
      function k(e) {
        return function () {
          this.innerHTML = e;
        };
      }
      function X(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.innerHTML = null == t ? "" : t;
        };
      }
      function L() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function q() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      x.prototype = {
        add: function (e) {
          this._names.indexOf(e) < 0 &&
            (this._names.push(e),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (e) {
          var t = this._names.indexOf(e);
          t >= 0 &&
            (this._names.splice(t, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (e) {
          return this._names.indexOf(e) >= 0;
        },
      };
      var Z = r(6070);
      function $(e) {
        return function () {
          var t = this.ownerDocument,
            r = this.namespaceURI;
          return r === Z.P && t.documentElement.namespaceURI === Z.P
            ? t.createElement(e)
            : t.createElementNS(r, e);
        };
      }
      function V(e) {
        return function () {
          return this.ownerDocument.createElementNS(e.space, e.local);
        };
      }
      function Y(e) {
        var t = (0, g.Z)(e);
        return (t.local ? V : $)(t);
      }
      function H() {
        return null;
      }
      function G() {
        var e = this.parentNode;
        e && e.removeChild(this);
      }
      function K() {
        var e = this.cloneNode(!1),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function Q() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function J(e) {
        return function () {
          var t = this.__on;
          if (t) {
            for (var r, n = 0, i = -1, a = t.length; n < a; ++n)
              (r = t[n]),
                (e.type && r.type !== e.type) || r.name !== e.name
                  ? (t[++i] = r)
                  : this.removeEventListener(r.type, r.listener, r.options);
            ++i ? (t.length = i) : delete this.__on;
          }
        };
      }
      function ee(e, t, r) {
        return function () {
          var n,
            i = this.__on,
            a = (function (e) {
              return function (t) {
                e.call(this, t, this.__data__);
              };
            })(t);
          if (i)
            for (var s = 0, o = i.length; s < o; ++s)
              if ((n = i[s]).type === e.type && n.name === e.name)
                return (
                  this.removeEventListener(n.type, n.listener, n.options),
                  this.addEventListener(
                    n.type,
                    (n.listener = a),
                    (n.options = r),
                  ),
                  void (n.value = t)
                );
          this.addEventListener(e.type, a, r),
            (n = {
              type: e.type,
              name: e.name,
              value: t,
              listener: a,
              options: r,
            }),
            i ? i.push(n) : (this.__on = [n]);
        };
      }
      var te = r(90523);
      function re(e, t, r) {
        var n = (0, te.Z)(e),
          i = n.CustomEvent;
        "function" == typeof i
          ? (i = new i(t, r))
          : ((i = n.document.createEvent("Event")),
            r
              ? (i.initEvent(t, r.bubbles, r.cancelable), (i.detail = r.detail))
              : i.initEvent(t, !1, !1)),
          e.dispatchEvent(i);
      }
      function ne(e, t) {
        return function () {
          return re(this, e, t);
        };
      }
      function ie(e, t) {
        return function () {
          return re(this, e, t.apply(this, arguments));
        };
      }
      var ae = [null];
      function se(e, t) {
        (this._groups = e), (this._parents = t);
      }
      function oe() {
        return new se([[document.documentElement]], ae);
      }
      se.prototype = oe.prototype = {
        constructor: se,
        select: function (e) {
          "function" != typeof e && (e = (0, n.Z)(e));
          for (
            var t = this._groups, r = t.length, i = new Array(r), a = 0;
            a < r;
            ++a
          )
            for (
              var s,
                o,
                l = t[a],
                c = l.length,
                u = (i[a] = new Array(c)),
                d = 0;
              d < c;
              ++d
            )
              (s = l[d]) &&
                (o = e.call(s, s.__data__, d, l)) &&
                ("__data__" in s && (o.__data__ = s.__data__), (u[d] = o));
          return new se(i, this._parents);
        },
        selectAll: function (e) {
          e = "function" == typeof e ? a(e) : (0, i.Z)(e);
          for (
            var t = this._groups, r = t.length, n = [], s = [], o = 0;
            o < r;
            ++o
          )
            for (var l, c = t[o], u = c.length, d = 0; d < u; ++d)
              (l = c[d]) && (n.push(e.call(l, l.__data__, d, c)), s.push(l));
          return new se(n, s);
        },
        selectChild: function (e) {
          return this.select(
            null == e
              ? l
              : (function (e) {
                  return function () {
                    return o.call(this.children, e);
                  };
                })("function" == typeof e ? e : (0, s.P)(e)),
          );
        },
        selectChildren: function (e) {
          return this.selectAll(
            null == e
              ? u
              : (function (e) {
                  return function () {
                    return c.call(this.children, e);
                  };
                })("function" == typeof e ? e : (0, s.P)(e)),
          );
        },
        filter: function (e) {
          "function" != typeof e && (e = (0, s.Z)(e));
          for (
            var t = this._groups, r = t.length, n = new Array(r), i = 0;
            i < r;
            ++i
          )
            for (
              var a, o = t[i], l = o.length, c = (n[i] = []), u = 0;
              u < l;
              ++u
            )
              (a = o[u]) && e.call(a, a.__data__, u, o) && c.push(a);
          return new se(n, this._parents);
        },
        data: function (e, t) {
          if (!arguments.length) return Array.from(this, h);
          var r,
            n = t ? p : f,
            i = this._parents,
            a = this._groups;
          "function" != typeof e &&
            ((r = e),
            (e = function () {
              return r;
            }));
          for (
            var s = a.length,
              o = new Array(s),
              l = new Array(s),
              c = new Array(s),
              u = 0;
            u < s;
            ++u
          ) {
            var d = i[u],
              m = a[u],
              b = m.length,
              g = y(e.call(d, d && d.__data__, u, i)),
              _ = g.length,
              B = (l[u] = new Array(_)),
              w = (o[u] = new Array(_));
            n(d, m, B, w, (c[u] = new Array(b)), g, t);
            for (var v, M, z = 0, S = 0; z < _; ++z)
              if ((v = B[z])) {
                for (z >= S && (S = z + 1); !(M = w[S]) && ++S < _; );
                v._next = M || null;
              }
          }
          return ((o = new se(o, i))._enter = l), (o._exit = c), o;
        },
        enter: function () {
          return new se(this._enter || this._groups.map(d), this._parents);
        },
        exit: function () {
          return new se(this._exit || this._groups.map(d), this._parents);
        },
        join: function (e, t, r) {
          var n = this.enter(),
            i = this,
            a = this.exit();
          return (
            "function" == typeof e
              ? (n = e(n)) && (n = n.selection())
              : (n = n.append(e + "")),
            null != t && (i = t(i)) && (i = i.selection()),
            null == r ? a.remove() : r(a),
            n && i ? n.merge(i).order() : i
          );
        },
        merge: function (e) {
          for (
            var t = e.selection ? e.selection() : e,
              r = this._groups,
              n = t._groups,
              i = r.length,
              a = n.length,
              s = Math.min(i, a),
              o = new Array(i),
              l = 0;
            l < s;
            ++l
          )
            for (
              var c,
                u = r[l],
                d = n[l],
                m = u.length,
                f = (o[l] = new Array(m)),
                p = 0;
              p < m;
              ++p
            )
              (c = u[p] || d[p]) && (f[p] = c);
          for (; l < i; ++l) o[l] = r[l];
          return new se(o, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var e = this._groups, t = -1, r = e.length; ++t < r; )
            for (var n, i = e[t], a = i.length - 1, s = i[a]; --a >= 0; )
              (n = i[a]) &&
                (s &&
                  4 ^ n.compareDocumentPosition(s) &&
                  s.parentNode.insertBefore(n, s),
                (s = n));
          return this;
        },
        sort: function (e) {
          function t(t, r) {
            return t && r ? e(t.__data__, r.__data__) : !t - !r;
          }
          e || (e = b);
          for (
            var r = this._groups, n = r.length, i = new Array(n), a = 0;
            a < n;
            ++a
          ) {
            for (
              var s, o = r[a], l = o.length, c = (i[a] = new Array(l)), u = 0;
              u < l;
              ++u
            )
              (s = o[u]) && (c[u] = s);
            c.sort(t);
          }
          return new se(i, this._parents).order();
        },
        call: function () {
          var e = arguments[0];
          return (arguments[0] = this), e.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
            for (var n = e[t], i = 0, a = n.length; i < a; ++i) {
              var s = n[i];
              if (s) return s;
            }
          return null;
        },
        size: function () {
          let e = 0;
          for (const t of this) ++e;
          return e;
        },
        empty: function () {
          return !this.node();
        },
        each: function (e) {
          for (var t = this._groups, r = 0, n = t.length; r < n; ++r)
            for (var i, a = t[r], s = 0, o = a.length; s < o; ++s)
              (i = a[s]) && e.call(i, i.__data__, s, a);
          return this;
        },
        attr: function (e, t) {
          var r = (0, g.Z)(e);
          if (arguments.length < 2) {
            var n = this.node();
            return r.local
              ? n.getAttributeNS(r.space, r.local)
              : n.getAttribute(r);
          }
          return this.each(
            (null == t
              ? r.local
                ? B
                : _
              : "function" == typeof t
                ? r.local
                  ? z
                  : M
                : r.local
                  ? v
                  : w)(r, t),
          );
        },
        style: S.Z,
        property: function (e, t) {
          return arguments.length > 1
            ? this.each((null == t ? F : "function" == typeof t ? O : E)(e, t))
            : this.node()[e];
        },
        classed: function (e, t) {
          var r = R(e + "");
          if (arguments.length < 2) {
            for (var n = j(this.node()), i = -1, a = r.length; ++i < a; )
              if (!n.contains(r[i])) return !1;
            return !0;
          }
          return this.each(("function" == typeof t ? P : t ? W : I)(r, t));
        },
        text: function (e) {
          return arguments.length
            ? this.each(null == e ? N : ("function" == typeof e ? D : U)(e))
            : this.node().textContent;
        },
        html: function (e) {
          return arguments.length
            ? this.each(null == e ? A : ("function" == typeof e ? X : k)(e))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(L);
        },
        lower: function () {
          return this.each(q);
        },
        append: function (e) {
          var t = "function" == typeof e ? e : Y(e);
          return this.select(function () {
            return this.appendChild(t.apply(this, arguments));
          });
        },
        insert: function (e, t) {
          var r = "function" == typeof e ? e : Y(e),
            i = null == t ? H : "function" == typeof t ? t : (0, n.Z)(t);
          return this.select(function () {
            return this.insertBefore(
              r.apply(this, arguments),
              i.apply(this, arguments) || null,
            );
          });
        },
        remove: function () {
          return this.each(G);
        },
        clone: function (e) {
          return this.select(e ? Q : K);
        },
        datum: function (e) {
          return arguments.length
            ? this.property("__data__", e)
            : this.node().__data__;
        },
        on: function (e, t, r) {
          var n,
            i,
            a = (function (e) {
              return e
                .trim()
                .split(/^|\s+/)
                .map(function (e) {
                  var t = "",
                    r = e.indexOf(".");
                  return (
                    r >= 0 && ((t = e.slice(r + 1)), (e = e.slice(0, r))),
                    { type: e, name: t }
                  );
                });
            })(e + ""),
            s = a.length;
          if (!(arguments.length < 2)) {
            for (o = t ? ee : J, n = 0; n < s; ++n) this.each(o(a[n], t, r));
            return this;
          }
          var o = this.node().__on;
          if (o)
            for (var l, c = 0, u = o.length; c < u; ++c)
              for (n = 0, l = o[c]; n < s; ++n)
                if ((i = a[n]).type === l.type && i.name === l.name)
                  return l.value;
        },
        dispatch: function (e, t) {
          return this.each(("function" == typeof t ? ie : ne)(e, t));
        },
        [Symbol.iterator]: function* () {
          for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
            for (var n, i = e[t], a = 0, s = i.length; a < s; ++a)
              (n = i[a]) && (yield n);
        },
      };
      const le = oe;
    },
    7843: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => l, Z: () => o });
      var n = r(90523);
      function i(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      function a(e, t, r) {
        return function () {
          this.style.setProperty(e, t, r);
        };
      }
      function s(e, t, r) {
        return function () {
          var n = t.apply(this, arguments);
          null == n
            ? this.style.removeProperty(e)
            : this.style.setProperty(e, n, r);
        };
      }
      function o(e, t, r) {
        return arguments.length > 1
          ? this.each(
              (null == t ? i : "function" == typeof t ? s : a)(
                e,
                t,
                null == r ? "" : r,
              ),
            )
          : l(this.node(), e);
      }
      function l(e, t) {
        return (
          e.style.getPropertyValue(t) ||
          (0, n.Z)(e).getComputedStyle(e, null).getPropertyValue(t)
        );
      }
    },
    81944: (e, t, r) => {
      "use strict";
      function n() {}
      function i(e) {
        return null == e
          ? n
          : function () {
              return this.querySelector(e);
            };
      }
      r.d(t, { Z: () => i });
    },
    85163: (e, t, r) => {
      "use strict";
      function n() {
        return [];
      }
      function i(e) {
        return null == e
          ? n
          : function () {
              return this.querySelectorAll(e);
            };
      }
      r.d(t, { Z: () => i });
    },
    90523: (e, t, r) => {
      "use strict";
      function n(e) {
        return (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          (e.document && e) ||
          e.defaultView
        );
      }
      r.d(t, { Z: () => n });
    },
    96295: (e, t, r) => {
      "use strict";
      r.d(t, { sP: () => ke, CR: () => Te });
      var n = r(7785),
        i = r(12466);
      function a(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2;
      }
      const s = (function e(t, r, n) {
        function i(e, i) {
          var s,
            o,
            l = e[0],
            c = e[1],
            u = e[2],
            d = i[0],
            m = i[1],
            f = i[2],
            p = d - l,
            h = m - c,
            y = p * p + h * h;
          if (y < 1e-12)
            (o = Math.log(f / u) / t),
              (s = function (e) {
                return [l + e * p, c + e * h, u * Math.exp(t * e * o)];
              });
          else {
            var b = Math.sqrt(y),
              g = (f * f - u * u + n * y) / (2 * u * r * b),
              _ = (f * f - u * u - n * y) / (2 * f * r * b),
              B = Math.log(Math.sqrt(g * g + 1) - g),
              w = Math.log(Math.sqrt(_ * _ + 1) - _);
            (o = (w - B) / t),
              (s = function (e) {
                var n,
                  i = e * o,
                  s = a(B),
                  d =
                    (u / (r * b)) *
                    (s *
                      ((n = t * i + B), ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                      (function (e) {
                        return ((e = Math.exp(e)) - 1 / e) / 2;
                      })(B));
                return [l + d * p, c + d * h, (u * s) / a(t * i + B)];
              });
          }
          return (s.duration = (1e3 * o * t) / Math.SQRT2), s;
        }
        return (
          (i.rho = function (t) {
            var r = Math.max(0.001, +t),
              n = r * r;
            return e(r, n, n * n);
          }),
          i
        );
      })(Math.SQRT2, 2, 4);
      var o,
        l,
        c = r(37788),
        u = r(65683),
        d = r(46926),
        m = 0,
        f = 0,
        p = 0,
        h = 1e3,
        y = 0,
        b = 0,
        g = 0,
        _ =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        B =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (e) {
                setTimeout(e, 17);
              };
      function w() {
        return b || (B(v), (b = _.now() + g));
      }
      function v() {
        b = 0;
      }
      function M() {
        this._call = this._time = this._next = null;
      }
      function z(e, t, r) {
        var n = new M();
        return n.restart(e, t, r), n;
      }
      function S() {
        (b = (y = _.now()) + g), (m = f = 0);
        try {
          !(function () {
            w(), ++m;
            for (var e, t = o; t; )
              (e = b - t._time) >= 0 && t._call.call(void 0, e), (t = t._next);
            --m;
          })();
        } finally {
          (m = 0),
            (function () {
              var e,
                t,
                r = o,
                n = 1 / 0;
              for (; r; )
                r._call
                  ? (n > r._time && (n = r._time), (e = r), (r = r._next))
                  : ((t = r._next),
                    (r._next = null),
                    (r = e ? (e._next = t) : (o = t)));
              (l = e), E(n);
            })(),
            (b = 0);
        }
      }
      function F() {
        var e = _.now(),
          t = e - y;
        t > h && ((g -= t), (y = e));
      }
      function E(e) {
        m ||
          (f && (f = clearTimeout(f)),
          e - b > 24
            ? (e < 1 / 0 && (f = setTimeout(S, e - _.now() - g)),
              p && (p = clearInterval(p)))
            : (p || ((y = _.now()), (p = setInterval(F, h))), (m = 1), B(S)));
      }
      function O(e, t, r) {
        var n = new M();
        return (
          (t = null == t ? 0 : +t),
          n.restart(
            (r) => {
              n.stop(), e(r + t);
            },
            t,
            r,
          ),
          n
        );
      }
      M.prototype = z.prototype = {
        constructor: M,
        restart: function (e, t, r) {
          if ("function" != typeof e)
            throw new TypeError("callback is not a function");
          (r = (null == r ? w() : +r) + (null == t ? 0 : +t)),
            this._next ||
              l === this ||
              (l ? (l._next = this) : (o = this), (l = this)),
            (this._call = e),
            (this._time = r),
            E();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), E());
        },
      };
      var R = (0, n.Z)("start", "end", "cancel", "interrupt"),
        j = [],
        x = 0,
        T = 1,
        C = 2,
        W = 3,
        I = 4,
        P = 5,
        N = 6;
      function U(e, t, r, n, i, a) {
        var s = e.__transition;
        if (s) {
          if (r in s) return;
        } else e.__transition = {};
        !(function (e, t, r) {
          var n,
            i = e.__transition;
          function a(e) {
            (r.state = T),
              r.timer.restart(s, r.delay, r.time),
              r.delay <= e && s(e - r.delay);
          }
          function s(a) {
            var c, u, d, m;
            if (r.state !== T) return l();
            for (c in i)
              if ((m = i[c]).name === r.name) {
                if (m.state === W) return O(s);
                m.state === I
                  ? ((m.state = N),
                    m.timer.stop(),
                    m.on.call("interrupt", e, e.__data__, m.index, m.group),
                    delete i[c])
                  : +c < t &&
                    ((m.state = N),
                    m.timer.stop(),
                    m.on.call("cancel", e, e.__data__, m.index, m.group),
                    delete i[c]);
              }
            if (
              (O(function () {
                r.state === W &&
                  ((r.state = I), r.timer.restart(o, r.delay, r.time), o(a));
              }),
              (r.state = C),
              r.on.call("start", e, e.__data__, r.index, r.group),
              r.state === C)
            ) {
              for (
                r.state = W, n = new Array((d = r.tween.length)), c = 0, u = -1;
                c < d;
                ++c
              )
                (m = r.tween[c].value.call(e, e.__data__, r.index, r.group)) &&
                  (n[++u] = m);
              n.length = u + 1;
            }
          }
          function o(t) {
            for (
              var i =
                  t < r.duration
                    ? r.ease.call(null, t / r.duration)
                    : (r.timer.restart(l), (r.state = P), 1),
                a = -1,
                s = n.length;
              ++a < s;

            )
              n[a].call(e, i);
            r.state === P &&
              (r.on.call("end", e, e.__data__, r.index, r.group), l());
          }
          function l() {
            for (var n in ((r.state = N), r.timer.stop(), delete i[t], i))
              return;
            delete e.__transition;
          }
          (i[t] = r), (r.timer = z(a, 0, r.time));
        })(e, r, {
          name: t,
          index: n,
          group: i,
          on: R,
          tween: j,
          time: a.time,
          delay: a.delay,
          duration: a.duration,
          ease: a.ease,
          timer: null,
          state: x,
        });
      }
      function D(e, t) {
        var r = k(e, t);
        if (r.state > x) throw new Error("too late; already scheduled");
        return r;
      }
      function A(e, t) {
        var r = k(e, t);
        if (r.state > W) throw new Error("too late; already running");
        return r;
      }
      function k(e, t) {
        var r = e.__transition;
        if (!r || !(r = r[t])) throw new Error("transition not found");
        return r;
      }
      function X(e, t) {
        var r,
          n,
          i,
          a = e.__transition,
          s = !0;
        if (a) {
          for (i in ((t = null == t ? null : t + ""), a))
            (r = a[i]).name === t
              ? ((n = r.state > C && r.state < P),
                (r.state = N),
                r.timer.stop(),
                r.on.call(
                  n ? "interrupt" : "cancel",
                  e,
                  e.__data__,
                  r.index,
                  r.group,
                ),
                delete a[i])
              : (s = !1);
          s && delete e.__transition;
        }
      }
      var L,
        q = r(21669),
        Z = 180 / Math.PI,
        $ = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function V(e, t, r, n, i, a) {
        var s, o, l;
        return (
          (s = Math.sqrt(e * e + t * t)) && ((e /= s), (t /= s)),
          (l = e * r + t * n) && ((r -= e * l), (n -= t * l)),
          (o = Math.sqrt(r * r + n * n)) && ((r /= o), (n /= o), (l /= o)),
          e * n < t * r && ((e = -e), (t = -t), (l = -l), (s = -s)),
          {
            translateX: i,
            translateY: a,
            rotate: Math.atan2(t, e) * Z,
            skewX: Math.atan(l) * Z,
            scaleX: s,
            scaleY: o,
          }
        );
      }
      function Y(e, t, r, n) {
        function i(e) {
          return e.length ? e.pop() + " " : "";
        }
        return function (a, s) {
          var o = [],
            l = [];
          return (
            (a = e(a)),
            (s = e(s)),
            (function (e, n, i, a, s, o) {
              if (e !== i || n !== a) {
                var l = s.push("translate(", null, t, null, r);
                o.push(
                  { i: l - 4, x: (0, q.Z)(e, i) },
                  { i: l - 2, x: (0, q.Z)(n, a) },
                );
              } else (i || a) && s.push("translate(" + i + t + a + r);
            })(a.translateX, a.translateY, s.translateX, s.translateY, o, l),
            (function (e, t, r, a) {
              e !== t
                ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                  a.push({
                    i: r.push(i(r) + "rotate(", null, n) - 2,
                    x: (0, q.Z)(e, t),
                  }))
                : t && r.push(i(r) + "rotate(" + t + n);
            })(a.rotate, s.rotate, o, l),
            (function (e, t, r, a) {
              e !== t
                ? a.push({
                    i: r.push(i(r) + "skewX(", null, n) - 2,
                    x: (0, q.Z)(e, t),
                  })
                : t && r.push(i(r) + "skewX(" + t + n);
            })(a.skewX, s.skewX, o, l),
            (function (e, t, r, n, a, s) {
              if (e !== r || t !== n) {
                var o = a.push(i(a) + "scale(", null, ",", null, ")");
                s.push(
                  { i: o - 4, x: (0, q.Z)(e, r) },
                  { i: o - 2, x: (0, q.Z)(t, n) },
                );
              } else
                (1 === r && 1 === n) ||
                  a.push(i(a) + "scale(" + r + "," + n + ")");
            })(a.scaleX, a.scaleY, s.scaleX, s.scaleY, o, l),
            (a = s = null),
            function (e) {
              for (var t, r = -1, n = l.length; ++r < n; )
                o[(t = l[r]).i] = t.x(e);
              return o.join("");
            }
          );
        };
      }
      var H = Y(
          function (e) {
            const t = new (
              "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(e + "");
            return t.isIdentity ? $ : V(t.a, t.b, t.c, t.d, t.e, t.f);
          },
          "px, ",
          "px)",
          "deg)",
        ),
        G = Y(
          function (e) {
            return null == e
              ? $
              : (L ||
                  (L = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g",
                  )),
                L.setAttribute("transform", e),
                (e = L.transform.baseVal.consolidate())
                  ? V((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f)
                  : $);
          },
          ", ",
          ")",
          ")",
        ),
        K = r(71758);
      function Q(e, t) {
        var r, n;
        return function () {
          var i = A(this, e),
            a = i.tween;
          if (a !== r)
            for (var s = 0, o = (n = r = a).length; s < o; ++s)
              if (n[s].name === t) {
                (n = n.slice()).splice(s, 1);
                break;
              }
          i.tween = n;
        };
      }
      function J(e, t, r) {
        var n, i;
        if ("function" != typeof r) throw new Error();
        return function () {
          var a = A(this, e),
            s = a.tween;
          if (s !== n) {
            i = (n = s).slice();
            for (var o = { name: t, value: r }, l = 0, c = i.length; l < c; ++l)
              if (i[l].name === t) {
                i[l] = o;
                break;
              }
            l === c && i.push(o);
          }
          a.tween = i;
        };
      }
      function ee(e, t, r) {
        var n = e._id;
        return (
          e.each(function () {
            var e = A(this, n);
            (e.value || (e.value = {}))[t] = r.apply(this, arguments);
          }),
          function (e) {
            return k(e, n).value[t];
          }
        );
      }
      var te = r(30598),
        re = r(48623),
        ne = r(34242);
      function ie(e, t) {
        var r;
        return (
          "number" == typeof t
            ? q.Z
            : t instanceof te.ZP
              ? re.ZP
              : (r = (0, te.ZP)(t))
                ? ((t = r), re.ZP)
                : ne.Z
        )(e, t);
      }
      function ae(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function se(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function oe(e, t, r) {
        var n,
          i,
          a = r + "";
        return function () {
          var s = this.getAttribute(e);
          return s === a ? null : s === n ? i : (i = t((n = s), r));
        };
      }
      function le(e, t, r) {
        var n,
          i,
          a = r + "";
        return function () {
          var s = this.getAttributeNS(e.space, e.local);
          return s === a ? null : s === n ? i : (i = t((n = s), r));
        };
      }
      function ce(e, t, r) {
        var n, i, a;
        return function () {
          var s,
            o,
            l = r(this);
          if (null != l)
            return (s = this.getAttribute(e)) === (o = l + "")
              ? null
              : s === n && o === i
                ? a
                : ((i = o), (a = t((n = s), l)));
          this.removeAttribute(e);
        };
      }
      function ue(e, t, r) {
        var n, i, a;
        return function () {
          var s,
            o,
            l = r(this);
          if (null != l)
            return (s = this.getAttributeNS(e.space, e.local)) === (o = l + "")
              ? null
              : s === n && o === i
                ? a
                : ((i = o), (a = t((n = s), l)));
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function de(e, t) {
        var r, n;
        function i() {
          var i = t.apply(this, arguments);
          return (
            i !== n &&
              (r =
                (n = i) &&
                (function (e, t) {
                  return function (r) {
                    this.setAttributeNS(e.space, e.local, t.call(this, r));
                  };
                })(e, i)),
            r
          );
        }
        return (i._value = t), i;
      }
      function me(e, t) {
        var r, n;
        function i() {
          var i = t.apply(this, arguments);
          return (
            i !== n &&
              (r =
                (n = i) &&
                (function (e, t) {
                  return function (r) {
                    this.setAttribute(e, t.call(this, r));
                  };
                })(e, i)),
            r
          );
        }
        return (i._value = t), i;
      }
      function fe(e, t) {
        return function () {
          D(this, e).delay = +t.apply(this, arguments);
        };
      }
      function pe(e, t) {
        return (
          (t = +t),
          function () {
            D(this, e).delay = t;
          }
        );
      }
      function he(e, t) {
        return function () {
          A(this, e).duration = +t.apply(this, arguments);
        };
      }
      function ye(e, t) {
        return (
          (t = +t),
          function () {
            A(this, e).duration = t;
          }
        );
      }
      var be = r(36749);
      var ge = r(81944);
      var _e = r(85163);
      var Be = d.ZP.prototype.constructor;
      var we = r(7843);
      function ve(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      var Me = 0;
      function ze(e, t, r, n) {
        (this._groups = e),
          (this._parents = t),
          (this._name = r),
          (this._id = n);
      }
      function Se() {
        return ++Me;
      }
      var Fe = d.ZP.prototype;
      ze.prototype = function (e) {
        return (0, d.ZP)().transition(e);
      }.prototype = {
        constructor: ze,
        select: function (e) {
          var t = this._name,
            r = this._id;
          "function" != typeof e && (e = (0, ge.Z)(e));
          for (
            var n = this._groups, i = n.length, a = new Array(i), s = 0;
            s < i;
            ++s
          )
            for (
              var o,
                l,
                c = n[s],
                u = c.length,
                d = (a[s] = new Array(u)),
                m = 0;
              m < u;
              ++m
            )
              (o = c[m]) &&
                (l = e.call(o, o.__data__, m, c)) &&
                ("__data__" in o && (l.__data__ = o.__data__),
                (d[m] = l),
                U(d[m], t, r, m, d, k(o, r)));
          return new ze(a, this._parents, t, r);
        },
        selectAll: function (e) {
          var t = this._name,
            r = this._id;
          "function" != typeof e && (e = (0, _e.Z)(e));
          for (
            var n = this._groups, i = n.length, a = [], s = [], o = 0;
            o < i;
            ++o
          )
            for (var l, c = n[o], u = c.length, d = 0; d < u; ++d)
              if ((l = c[d])) {
                for (
                  var m,
                    f = e.call(l, l.__data__, d, c),
                    p = k(l, r),
                    h = 0,
                    y = f.length;
                  h < y;
                  ++h
                )
                  (m = f[h]) && U(m, t, r, h, f, p);
                a.push(f), s.push(l);
              }
          return new ze(a, s, t, r);
        },
        selectChild: Fe.selectChild,
        selectChildren: Fe.selectChildren,
        filter: function (e) {
          "function" != typeof e && (e = (0, be.Z)(e));
          for (
            var t = this._groups, r = t.length, n = new Array(r), i = 0;
            i < r;
            ++i
          )
            for (
              var a, s = t[i], o = s.length, l = (n[i] = []), c = 0;
              c < o;
              ++c
            )
              (a = s[c]) && e.call(a, a.__data__, c, s) && l.push(a);
          return new ze(n, this._parents, this._name, this._id);
        },
        merge: function (e) {
          if (e._id !== this._id) throw new Error();
          for (
            var t = this._groups,
              r = e._groups,
              n = t.length,
              i = r.length,
              a = Math.min(n, i),
              s = new Array(n),
              o = 0;
            o < a;
            ++o
          )
            for (
              var l,
                c = t[o],
                u = r[o],
                d = c.length,
                m = (s[o] = new Array(d)),
                f = 0;
              f < d;
              ++f
            )
              (l = c[f] || u[f]) && (m[f] = l);
          for (; o < n; ++o) s[o] = t[o];
          return new ze(s, this._parents, this._name, this._id);
        },
        selection: function () {
          return new Be(this._groups, this._parents);
        },
        transition: function () {
          for (
            var e = this._name,
              t = this._id,
              r = Se(),
              n = this._groups,
              i = n.length,
              a = 0;
            a < i;
            ++a
          )
            for (var s, o = n[a], l = o.length, c = 0; c < l; ++c)
              if ((s = o[c])) {
                var u = k(s, t);
                U(s, e, r, c, o, {
                  time: u.time + u.delay + u.duration,
                  delay: 0,
                  duration: u.duration,
                  ease: u.ease,
                });
              }
          return new ze(n, this._parents, e, r);
        },
        call: Fe.call,
        nodes: Fe.nodes,
        node: Fe.node,
        size: Fe.size,
        empty: Fe.empty,
        each: Fe.each,
        on: function (e, t) {
          var r = this._id;
          return arguments.length < 2
            ? k(this.node(), r).on.on(e)
            : this.each(
                (function (e, t, r) {
                  var n,
                    i,
                    a = (function (e) {
                      return (e + "")
                        .trim()
                        .split(/^|\s+/)
                        .every(function (e) {
                          var t = e.indexOf(".");
                          return (
                            t >= 0 && (e = e.slice(0, t)), !e || "start" === e
                          );
                        });
                    })(t)
                      ? D
                      : A;
                  return function () {
                    var s = a(this, e),
                      o = s.on;
                    o !== n && (i = (n = o).copy()).on(t, r), (s.on = i);
                  };
                })(r, e, t),
              );
        },
        attr: function (e, t) {
          var r = (0, K.Z)(e),
            n = "transform" === r ? G : ie;
          return this.attrTween(
            e,
            "function" == typeof t
              ? (r.local ? ue : ce)(r, n, ee(this, "attr." + e, t))
              : null == t
                ? (r.local ? se : ae)(r)
                : (r.local ? le : oe)(r, n, t),
          );
        },
        attrTween: function (e, t) {
          var r = "attr." + e;
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == t) return this.tween(r, null);
          if ("function" != typeof t) throw new Error();
          var n = (0, K.Z)(e);
          return this.tween(r, (n.local ? de : me)(n, t));
        },
        style: function (e, t, r) {
          var n = "transform" == (e += "") ? H : ie;
          return null == t
            ? this.styleTween(
                e,
                (function (e, t) {
                  var r, n, i;
                  return function () {
                    var a = (0, we.S)(this, e),
                      s = (this.style.removeProperty(e), (0, we.S)(this, e));
                    return a === s
                      ? null
                      : a === r && s === n
                        ? i
                        : (i = t((r = a), (n = s)));
                  };
                })(e, n),
              ).on("end.style." + e, ve(e))
            : "function" == typeof t
              ? this.styleTween(
                  e,
                  (function (e, t, r) {
                    var n, i, a;
                    return function () {
                      var s = (0, we.S)(this, e),
                        o = r(this),
                        l = o + "";
                      return (
                        null == o &&
                          (this.style.removeProperty(e),
                          (l = o = (0, we.S)(this, e))),
                        s === l
                          ? null
                          : s === n && l === i
                            ? a
                            : ((i = l), (a = t((n = s), o)))
                      );
                    };
                  })(e, n, ee(this, "style." + e, t)),
                ).each(
                  (function (e, t) {
                    var r,
                      n,
                      i,
                      a,
                      s = "style." + t,
                      o = "end." + s;
                    return function () {
                      var l = A(this, e),
                        c = l.on,
                        u = null == l.value[s] ? a || (a = ve(t)) : void 0;
                      (c === r && i === u) ||
                        (n = (r = c).copy()).on(o, (i = u)),
                        (l.on = n);
                    };
                  })(this._id, e),
                )
              : this.styleTween(
                  e,
                  (function (e, t, r) {
                    var n,
                      i,
                      a = r + "";
                    return function () {
                      var s = (0, we.S)(this, e);
                      return s === a ? null : s === n ? i : (i = t((n = s), r));
                    };
                  })(e, n, t),
                  r,
                ).on("end.style." + e, null);
        },
        styleTween: function (e, t, r) {
          var n = "style." + (e += "");
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw new Error();
          return this.tween(
            n,
            (function (e, t, r) {
              var n, i;
              function a() {
                var a = t.apply(this, arguments);
                return (
                  a !== i &&
                    (n =
                      (i = a) &&
                      (function (e, t, r) {
                        return function (n) {
                          this.style.setProperty(e, t.call(this, n), r);
                        };
                      })(e, a, r)),
                  n
                );
              }
              return (a._value = t), a;
            })(e, t, null == r ? "" : r),
          );
        },
        text: function (e) {
          return this.tween(
            "text",
            "function" == typeof e
              ? (function (e) {
                  return function () {
                    var t = e(this);
                    this.textContent = null == t ? "" : t;
                  };
                })(ee(this, "text", e))
              : (function (e) {
                  return function () {
                    this.textContent = e;
                  };
                })(null == e ? "" : e + ""),
          );
        },
        textTween: function (e) {
          var t = "text";
          if (arguments.length < 1) return (t = this.tween(t)) && t._value;
          if (null == e) return this.tween(t, null);
          if ("function" != typeof e) throw new Error();
          return this.tween(
            t,
            (function (e) {
              var t, r;
              function n() {
                var n = e.apply(this, arguments);
                return (
                  n !== r &&
                    (t =
                      (r = n) &&
                      (function (e) {
                        return function (t) {
                          this.textContent = e.call(this, t);
                        };
                      })(n)),
                  t
                );
              }
              return (n._value = e), n;
            })(e),
          );
        },
        remove: function () {
          return this.on(
            "end.remove",
            (function (e) {
              return function () {
                var t = this.parentNode;
                for (var r in this.__transition) if (+r !== e) return;
                t && t.removeChild(this);
              };
            })(this._id),
          );
        },
        tween: function (e, t) {
          var r = this._id;
          if (((e += ""), arguments.length < 2)) {
            for (
              var n, i = k(this.node(), r).tween, a = 0, s = i.length;
              a < s;
              ++a
            )
              if ((n = i[a]).name === e) return n.value;
            return null;
          }
          return this.each((null == t ? Q : J)(r, e, t));
        },
        delay: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(("function" == typeof e ? fe : pe)(t, e))
            : k(this.node(), t).delay;
        },
        duration: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(("function" == typeof e ? he : ye)(t, e))
            : k(this.node(), t).duration;
        },
        ease: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(
                (function (e, t) {
                  if ("function" != typeof t) throw new Error();
                  return function () {
                    A(this, e).ease = t;
                  };
                })(t, e),
              )
            : k(this.node(), t).ease;
        },
        easeVarying: function (e) {
          if ("function" != typeof e) throw new Error();
          return this.each(
            (function (e, t) {
              return function () {
                var r = t.apply(this, arguments);
                if ("function" != typeof r) throw new Error();
                A(this, e).ease = r;
              };
            })(this._id, e),
          );
        },
        end: function () {
          var e,
            t,
            r = this,
            n = r._id,
            i = r.size();
          return new Promise(function (a, s) {
            var o = { value: s },
              l = {
                value: function () {
                  0 == --i && a();
                },
              };
            r.each(function () {
              var r = A(this, n),
                i = r.on;
              i !== e &&
                ((t = (e = i).copy())._.cancel.push(o),
                t._.interrupt.push(o),
                t._.end.push(l)),
                (r.on = t);
            }),
              0 === i && a();
          });
        },
        [Symbol.iterator]: Fe[Symbol.iterator],
      };
      var Ee = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        },
      };
      function Oe(e, t) {
        for (var r; !(r = e.__transition) || !(r = r[t]); )
          if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
        return r;
      }
      (d.ZP.prototype.interrupt = function (e) {
        return this.each(function () {
          X(this, e);
        });
      }),
        (d.ZP.prototype.transition = function (e) {
          var t, r;
          e instanceof ze
            ? ((t = e._id), (e = e._name))
            : ((t = Se()),
              ((r = Ee).time = w()),
              (e = null == e ? null : e + ""));
          for (var n = this._groups, i = n.length, a = 0; a < i; ++a)
            for (var s, o = n[a], l = o.length, c = 0; c < l; ++c)
              (s = o[c]) && U(s, e, t, c, o, r || Oe(s, t));
          return new ze(n, this._parents, e, t);
        });
      const Re = (e) => () => e;
      function je(e, { sourceEvent: t, target: r, transform: n, dispatch: i }) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          target: { value: r, enumerable: !0, configurable: !0 },
          transform: { value: n, enumerable: !0, configurable: !0 },
          _: { value: i },
        });
      }
      function xe(e, t, r) {
        (this.k = e), (this.x = t), (this.y = r);
      }
      xe.prototype = {
        constructor: xe,
        scale: function (e) {
          return 1 === e ? this : new xe(this.k * e, this.x, this.y);
        },
        translate: function (e, t) {
          return (0 === e) & (0 === t)
            ? this
            : new xe(this.k, this.x + this.k * e, this.y + this.k * t);
        },
        apply: function (e) {
          return [e[0] * this.k + this.x, e[1] * this.k + this.y];
        },
        applyX: function (e) {
          return e * this.k + this.x;
        },
        applyY: function (e) {
          return e * this.k + this.y;
        },
        invert: function (e) {
          return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
        },
        invertX: function (e) {
          return (e - this.x) / this.k;
        },
        invertY: function (e) {
          return (e - this.y) / this.k;
        },
        rescaleX: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertX, this).map(e.invert, e));
        },
        rescaleY: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertY, this).map(e.invert, e));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      var Te = new xe(1, 0, 0);
      function Ce(e) {
        e.stopImmediatePropagation();
      }
      function We(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function Ie(e) {
        return !((e.ctrlKey && "wheel" !== e.type) || e.button);
      }
      function Pe() {
        var e = this;
        return e instanceof SVGElement
          ? (e = e.ownerSVGElement || e).hasAttribute("viewBox")
            ? [
                [(e = e.viewBox.baseVal).x, e.y],
                [e.x + e.width, e.y + e.height],
              ]
            : [
                [0, 0],
                [e.width.baseVal.value, e.height.baseVal.value],
              ]
          : [
              [0, 0],
              [e.clientWidth, e.clientHeight],
            ];
      }
      function Ne() {
        return this.__zoom || Te;
      }
      function Ue(e) {
        return (
          -e.deltaY *
          (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) *
          (e.ctrlKey ? 10 : 1)
        );
      }
      function De() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function Ae(e, t, r) {
        var n = e.invertX(t[0][0]) - r[0][0],
          i = e.invertX(t[1][0]) - r[1][0],
          a = e.invertY(t[0][1]) - r[0][1],
          s = e.invertY(t[1][1]) - r[1][1];
        return e.translate(
          i > n ? (n + i) / 2 : Math.min(0, n) || Math.max(0, i),
          s > a ? (a + s) / 2 : Math.min(0, a) || Math.max(0, s),
        );
      }
      function ke() {
        var e,
          t,
          r,
          a = Ie,
          o = Pe,
          l = Ae,
          d = Ue,
          m = De,
          f = [0, 1 / 0],
          p = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          h = 250,
          y = s,
          b = (0, n.Z)("start", "zoom", "end"),
          g = 500,
          _ = 150,
          B = 0,
          w = 10;
        function v(e) {
          e.property("__zoom", Ne)
            .on("wheel.zoom", R, { passive: !1 })
            .on("mousedown.zoom", j)
            .on("dblclick.zoom", x)
            .filter(m)
            .on("touchstart.zoom", T)
            .on("touchmove.zoom", C)
            .on("touchend.zoom touchcancel.zoom", W)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function M(e, t) {
          return (t = Math.max(f[0], Math.min(f[1], t))) === e.k
            ? e
            : new xe(t, e.x, e.y);
        }
        function z(e, t, r) {
          var n = t[0] - r[0] * e.k,
            i = t[1] - r[1] * e.k;
          return n === e.x && i === e.y ? e : new xe(e.k, n, i);
        }
        function S(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
        }
        function F(e, t, r, n) {
          e.on("start.zoom", function () {
            E(this, arguments).event(n).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              E(this, arguments).event(n).end();
            })
            .tween("zoom", function () {
              var e = this,
                i = arguments,
                a = E(e, i).event(n),
                s = o.apply(e, i),
                l =
                  null == r ? S(s) : "function" == typeof r ? r.apply(e, i) : r,
                c = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]),
                u = e.__zoom,
                d = "function" == typeof t ? t.apply(e, i) : t,
                m = y(u.invert(l).concat(c / u.k), d.invert(l).concat(c / d.k));
              return function (e) {
                if (1 === e) e = d;
                else {
                  var t = m(e),
                    r = c / t[2];
                  e = new xe(r, l[0] - t[0] * r, l[1] - t[1] * r);
                }
                a.zoom(null, e);
              };
            });
        }
        function E(e, t, r) {
          return (!r && e.__zooming) || new O(e, t);
        }
        function O(e, t) {
          (this.that = e),
            (this.args = t),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = o.apply(e, t)),
            (this.taps = 0);
        }
        function R(e, ...t) {
          if (a.apply(this, arguments)) {
            var r = E(this, t).event(e),
              n = this.__zoom,
              i = Math.max(
                f[0],
                Math.min(f[1], n.k * Math.pow(2, d.apply(this, arguments))),
              ),
              s = (0, u.Z)(e);
            if (r.wheel)
              (r.mouse[0][0] === s[0] && r.mouse[0][1] === s[1]) ||
                (r.mouse[1] = n.invert((r.mouse[0] = s))),
                clearTimeout(r.wheel);
            else {
              if (n.k === i) return;
              (r.mouse = [s, n.invert(s)]), X(this), r.start();
            }
            We(e),
              (r.wheel = setTimeout(function () {
                (r.wheel = null), r.end();
              }, _)),
              r.zoom(
                "mouse",
                l(z(M(n, i), r.mouse[0], r.mouse[1]), r.extent, p),
              );
          }
        }
        function j(e, ...t) {
          if (!r && a.apply(this, arguments)) {
            var n = e.currentTarget,
              s = E(this, t, !0).event(e),
              o = (0, c.Z)(e.view)
                .on(
                  "mousemove.zoom",
                  function (e) {
                    if ((We(e), !s.moved)) {
                      var t = e.clientX - m,
                        r = e.clientY - f;
                      s.moved = t * t + r * r > B;
                    }
                    s.event(e).zoom(
                      "mouse",
                      l(
                        z(
                          s.that.__zoom,
                          (s.mouse[0] = (0, u.Z)(e, n)),
                          s.mouse[1],
                        ),
                        s.extent,
                        p,
                      ),
                    );
                  },
                  !0,
                )
                .on(
                  "mouseup.zoom",
                  function (e) {
                    o.on("mousemove.zoom mouseup.zoom", null),
                      (0, i.D)(e.view, s.moved),
                      We(e),
                      s.event(e).end();
                  },
                  !0,
                ),
              d = (0, u.Z)(e, n),
              m = e.clientX,
              f = e.clientY;
            (0, i.Z)(e.view),
              Ce(e),
              (s.mouse = [d, this.__zoom.invert(d)]),
              X(this),
              s.start();
          }
        }
        function x(e, ...t) {
          if (a.apply(this, arguments)) {
            var r = this.__zoom,
              n = (0, u.Z)(e.changedTouches ? e.changedTouches[0] : e, this),
              i = r.invert(n),
              s = r.k * (e.shiftKey ? 0.5 : 2),
              d = l(z(M(r, s), n, i), o.apply(this, t), p);
            We(e),
              h > 0
                ? (0, c.Z)(this).transition().duration(h).call(F, d, n, e)
                : (0, c.Z)(this).call(v.transform, d, n, e);
          }
        }
        function T(r, ...n) {
          if (a.apply(this, arguments)) {
            var i,
              s,
              o,
              l,
              c = r.touches,
              d = c.length,
              m = E(this, n, r.changedTouches.length === d).event(r);
            for (Ce(r), s = 0; s < d; ++s)
              (o = c[s]),
                (l = [
                  (l = (0, u.Z)(o, this)),
                  this.__zoom.invert(l),
                  o.identifier,
                ]),
                m.touch0
                  ? m.touch1 ||
                    m.touch0[2] === l[2] ||
                    ((m.touch1 = l), (m.taps = 0))
                  : ((m.touch0 = l), (i = !0), (m.taps = 1 + !!e));
            e && (e = clearTimeout(e)),
              i &&
                (m.taps < 2 &&
                  ((t = l[0]),
                  (e = setTimeout(function () {
                    e = null;
                  }, g))),
                X(this),
                m.start());
          }
        }
        function C(e, ...t) {
          if (this.__zooming) {
            var r,
              n,
              i,
              a,
              s = E(this, t).event(e),
              o = e.changedTouches,
              c = o.length;
            for (We(e), r = 0; r < c; ++r)
              (n = o[r]),
                (i = (0, u.Z)(n, this)),
                s.touch0 && s.touch0[2] === n.identifier
                  ? (s.touch0[0] = i)
                  : s.touch1 &&
                    s.touch1[2] === n.identifier &&
                    (s.touch1[0] = i);
            if (((n = s.that.__zoom), s.touch1)) {
              var d = s.touch0[0],
                m = s.touch0[1],
                f = s.touch1[0],
                h = s.touch1[1],
                y = (y = f[0] - d[0]) * y + (y = f[1] - d[1]) * y,
                b = (b = h[0] - m[0]) * b + (b = h[1] - m[1]) * b;
              (n = M(n, Math.sqrt(y / b))),
                (i = [(d[0] + f[0]) / 2, (d[1] + f[1]) / 2]),
                (a = [(m[0] + h[0]) / 2, (m[1] + h[1]) / 2]);
            } else {
              if (!s.touch0) return;
              (i = s.touch0[0]), (a = s.touch0[1]);
            }
            s.zoom("touch", l(z(n, i, a), s.extent, p));
          }
        }
        function W(e, ...n) {
          if (this.__zooming) {
            var i,
              a,
              s = E(this, n).event(e),
              o = e.changedTouches,
              l = o.length;
            for (
              Ce(e),
                r && clearTimeout(r),
                r = setTimeout(function () {
                  r = null;
                }, g),
                i = 0;
              i < l;
              ++i
            )
              (a = o[i]),
                s.touch0 && s.touch0[2] === a.identifier
                  ? delete s.touch0
                  : s.touch1 && s.touch1[2] === a.identifier && delete s.touch1;
            if (
              (s.touch1 &&
                !s.touch0 &&
                ((s.touch0 = s.touch1), delete s.touch1),
              s.touch0)
            )
              s.touch0[1] = this.__zoom.invert(s.touch0[0]);
            else if (
              (s.end(),
              2 === s.taps &&
                ((a = (0, u.Z)(a, this)),
                Math.hypot(t[0] - a[0], t[1] - a[1]) < w))
            ) {
              var d = (0, c.Z)(this).on("dblclick.zoom");
              d && d.apply(this, arguments);
            }
          }
        }
        return (
          (v.transform = function (e, t, r, n) {
            var i = e.selection ? e.selection() : e;
            i.property("__zoom", Ne),
              e !== i
                ? F(e, t, r, n)
                : i.interrupt().each(function () {
                    E(this, arguments)
                      .event(n)
                      .start()
                      .zoom(
                        null,
                        "function" == typeof t ? t.apply(this, arguments) : t,
                      )
                      .end();
                  });
          }),
          (v.scaleBy = function (e, t, r, n) {
            v.scaleTo(
              e,
              function () {
                return (
                  this.__zoom.k *
                  ("function" == typeof t ? t.apply(this, arguments) : t)
                );
              },
              r,
              n,
            );
          }),
          (v.scaleTo = function (e, t, r, n) {
            v.transform(
              e,
              function () {
                var e = o.apply(this, arguments),
                  n = this.__zoom,
                  i =
                    null == r
                      ? S(e)
                      : "function" == typeof r
                        ? r.apply(this, arguments)
                        : r,
                  a = n.invert(i),
                  s = "function" == typeof t ? t.apply(this, arguments) : t;
                return l(z(M(n, s), i, a), e, p);
              },
              r,
              n,
            );
          }),
          (v.translateBy = function (e, t, r, n) {
            v.transform(
              e,
              function () {
                return l(
                  this.__zoom.translate(
                    "function" == typeof t ? t.apply(this, arguments) : t,
                    "function" == typeof r ? r.apply(this, arguments) : r,
                  ),
                  o.apply(this, arguments),
                  p,
                );
              },
              null,
              n,
            );
          }),
          (v.translateTo = function (e, t, r, n, i) {
            v.transform(
              e,
              function () {
                var e = o.apply(this, arguments),
                  i = this.__zoom,
                  a =
                    null == n
                      ? S(e)
                      : "function" == typeof n
                        ? n.apply(this, arguments)
                        : n;
                return l(
                  Te.translate(a[0], a[1])
                    .scale(i.k)
                    .translate(
                      "function" == typeof t ? -t.apply(this, arguments) : -t,
                      "function" == typeof r ? -r.apply(this, arguments) : -r,
                    ),
                  e,
                  p,
                );
              },
              n,
              i,
            );
          }),
          (O.prototype = {
            event: function (e) {
              return e && (this.sourceEvent = e), this;
            },
            start: function () {
              return (
                1 == ++this.active &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (e, t) {
              return (
                this.mouse &&
                  "mouse" !== e &&
                  (this.mouse[1] = t.invert(this.mouse[0])),
                this.touch0 &&
                  "touch" !== e &&
                  (this.touch0[1] = t.invert(this.touch0[0])),
                this.touch1 &&
                  "touch" !== e &&
                  (this.touch1[1] = t.invert(this.touch1[0])),
                (this.that.__zoom = t),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                0 == --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (e) {
              var t = (0, c.Z)(this.that).datum();
              b.call(
                e,
                this.that,
                new je(e, {
                  sourceEvent: this.sourceEvent,
                  target: v,
                  type: e,
                  transform: this.that.__zoom,
                  dispatch: b,
                }),
                t,
              );
            },
          }),
          (v.wheelDelta = function (e) {
            return arguments.length
              ? ((d = "function" == typeof e ? e : Re(+e)), v)
              : d;
          }),
          (v.filter = function (e) {
            return arguments.length
              ? ((a = "function" == typeof e ? e : Re(!!e)), v)
              : a;
          }),
          (v.touchable = function (e) {
            return arguments.length
              ? ((m = "function" == typeof e ? e : Re(!!e)), v)
              : m;
          }),
          (v.extent = function (e) {
            return arguments.length
              ? ((o =
                  "function" == typeof e
                    ? e
                    : Re([
                        [+e[0][0], +e[0][1]],
                        [+e[1][0], +e[1][1]],
                      ])),
                v)
              : o;
          }),
          (v.scaleExtent = function (e) {
            return arguments.length
              ? ((f[0] = +e[0]), (f[1] = +e[1]), v)
              : [f[0], f[1]];
          }),
          (v.translateExtent = function (e) {
            return arguments.length
              ? ((p[0][0] = +e[0][0]),
                (p[1][0] = +e[1][0]),
                (p[0][1] = +e[0][1]),
                (p[1][1] = +e[1][1]),
                v)
              : [
                  [p[0][0], p[0][1]],
                  [p[1][0], p[1][1]],
                ];
          }),
          (v.constrain = function (e) {
            return arguments.length ? ((l = e), v) : l;
          }),
          (v.duration = function (e) {
            return arguments.length ? ((h = +e), v) : h;
          }),
          (v.interpolate = function (e) {
            return arguments.length ? ((y = e), v) : y;
          }),
          (v.on = function () {
            var e = b.on.apply(b, arguments);
            return e === b ? v : e;
          }),
          (v.clickDistance = function (e) {
            return arguments.length ? ((B = (e = +e) * e), v) : Math.sqrt(B);
          }),
          (v.tapDistance = function (e) {
            return arguments.length ? ((w = +e), v) : w;
          }),
          v
        );
      }
      xe.prototype;
    },
  },
]);
