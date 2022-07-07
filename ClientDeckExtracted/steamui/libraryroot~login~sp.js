/* Third-party software licenses can be found at licenses.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "8DqZ": function (t, e, r) {
      "use strict";
      r.d(e, "d", function () {
        return o;
      }),
        r.d(e, "c", function () {
          return h;
        }),
        r.d(e, "b", function () {
          return c;
        }),
        r.d(e, "e", function () {
          return m;
        }),
        r.d(e, "f", function () {
          return B;
        }),
        r.d(e, "a", function () {
          return M;
        });
      var i = r("hRO2"),
        n = r("3dpo");
      const s = i.Message;
      class o extends s {
        constructor(t = null) {
          super(),
            o.prototype.account_name || n.a(o.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  account_name: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.e(o.M())), o.sm_mbf;
        }
        toObject(t = !1) {
          return o.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(o.M(), t, e);
        }
        static fromObject(t) {
          return n.c(o.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new o();
          return o.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(o.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(o.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Request";
        }
      }
      class a extends s {
        constructor(t = null) {
          super(),
            a.prototype.publickey_mod || n.a(a.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  publickey_mod: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  publickey_exp: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  timestamp: {
                    n: 3,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = n.e(a.M())), a.sm_mbf;
        }
        toObject(t = !1) {
          return a.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(a.M(), t, e);
        }
        static fromObject(t) {
          return n.c(a.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new a();
          return a.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(a.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(a.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Response";
        }
      }
      class u extends s {
        constructor(t = null) {
          super(),
            u.prototype.confirmation_type || n.a(u.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  confirmation_type: {
                    n: 1,
                    br: n.d.readEnum,
                    bw: n.h.writeEnum,
                  },
                  associated_message: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.e(u.M())), u.sm_mbf;
        }
        toObject(t = !1) {
          return u.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(u.M(), t, e);
        }
        static fromObject(t) {
          return n.c(u.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new u();
          return u.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(u.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(u.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AllowedConfirmation";
        }
      }
      class h extends s {
        constructor(t = null) {
          super(),
            h.prototype.device_friendly_name || n.a(h.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  platform_type: { n: 2, br: n.d.readEnum, bw: n.h.writeEnum },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.e(h.M())), h.sm_mbf;
        }
        toObject(t = !1) {
          return h.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(h.M(), t, e);
        }
        static fromObject(t) {
          return n.c(h.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new h();
          return h.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(h.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(h.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Request";
        }
      }
      class l extends s {
        constructor(t = null) {
          super(),
            l.prototype.client_id || n.a(l.M()),
            s.initialize(this, t, 0, -1, [5], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  challenge_url: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  request_id: { n: 3, br: n.d.readBytes, bw: n.h.writeBytes },
                  interval: { n: 4, br: n.d.readFloat, bw: n.h.writeFloat },
                  allowed_confirmations: { n: 5, c: u, r: !0, q: !0 },
                  version: { n: 6, br: n.d.readInt32, bw: n.h.writeInt32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.e(l.M())), l.sm_mbf;
        }
        toObject(t = !1) {
          return l.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(l.M(), t, e);
        }
        static fromObject(t) {
          return n.c(l.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new l();
          return l.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(l.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(l.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Response";
        }
      }
      class c extends s {
        constructor(t = null) {
          super(),
            c.prototype.device_friendly_name || n.a(c.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  account_name: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  encrypted_password: {
                    n: 3,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  encryption_timestamp: {
                    n: 4,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  remember_login: { n: 5, br: n.d.readBool, bw: n.h.writeBool },
                  platform_type: { n: 6, br: n.d.readEnum, bw: n.h.writeEnum },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.e(c.M())), c.sm_mbf;
        }
        toObject(t = !1) {
          return c.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(c.M(), t, e);
        }
        static fromObject(t) {
          return n.c(c.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new c();
          return c.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(c.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(c.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Request";
        }
      }
      class d extends s {
        constructor(t = null) {
          super(),
            d.prototype.client_id || n.a(d.M()),
            s.initialize(this, t, 0, -1, [4], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  request_id: { n: 2, br: n.d.readBytes, bw: n.h.writeBytes },
                  interval: { n: 3, br: n.d.readFloat, bw: n.h.writeFloat },
                  allowed_confirmations: { n: 4, c: u, r: !0, q: !0 },
                  steamid: {
                    n: 5,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  weak_token: { n: 6, br: n.d.readString, bw: n.h.writeString },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.e(d.M())), d.sm_mbf;
        }
        toObject(t = !1) {
          return d.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(d.M(), t, e);
        }
        static fromObject(t) {
          return n.c(d.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new d();
          return d.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(d.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(d.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Response";
        }
      }
      class m extends s {
        constructor(t = null) {
          super(),
            m.prototype.client_id || n.a(m.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  request_id: { n: 2, br: n.d.readBytes, bw: n.h.writeBytes },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.e(m.M())), m.sm_mbf;
        }
        toObject(t = !1) {
          return m.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(m.M(), t, e);
        }
        static fromObject(t) {
          return n.c(m.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new m();
          return m.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(m.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(m.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Request";
        }
      }
      class f extends s {
        constructor(t = null) {
          super(),
            f.prototype.new_client_id || n.a(f.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  new_client_id: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  new_challenge_url: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  refresh_token: {
                    n: 3,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  access_token: {
                    n: 4,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.e(f.M())), f.sm_mbf;
        }
        toObject(t = !1) {
          return f.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(f.M(), t, e);
        }
        static fromObject(t) {
          return n.c(f.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new f();
          return f.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(f.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(f.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Response";
        }
      }
      class p extends s {
        constructor(t = null) {
          super(),
            p.prototype.ip || n.a(p.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  ip: { n: 1, br: n.d.readString, bw: n.h.writeString },
                  geoloc: { n: 2, br: n.d.readString, bw: n.h.writeString },
                  city: { n: 3, br: n.d.readString, bw: n.h.writeString },
                  state: { n: 4, br: n.d.readString, bw: n.h.writeString },
                  country: { n: 5, br: n.d.readString, bw: n.h.writeString },
                  platform_type: { n: 6, br: n.d.readEnum, bw: n.h.writeEnum },
                  device_friendly_name: {
                    n: 7,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  version: { n: 8, br: n.d.readInt32, bw: n.h.writeInt32 },
                  login_history: { n: 9, br: n.d.readEnum, bw: n.h.writeEnum },
                  requestor_location_mismatch: {
                    n: 10,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  high_usage_login: {
                    n: 11,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.e(p.M())), p.sm_mbf;
        }
        toObject(t = !1) {
          return p.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(p.M(), t, e);
        }
        static fromObject(t) {
          return n.c(p.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new p();
          return p.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(p.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(p.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionInfo_Response";
        }
      }
      class b extends s {
        constructor(t = null) {
          super(),
            b.prototype.client_ids || n.a(b.M()),
            s.initialize(this, t, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  client_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.d.readUint64String,
                    bw: n.h.writeRepeatedUint64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.e(b.M())), b.sm_mbf;
        }
        toObject(t = !1) {
          return b.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(b.M(), t, e);
        }
        static fromObject(t) {
          return n.c(b.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new b();
          return b.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(b.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(b.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionsForAccount_Response";
        }
      }
      class y extends s {
        constructor(t = null) {
          super(), s.initialize(this, t, 0, -1, void 0, null);
        }
        toObject(t = !1) {
          return y.toObject(t, this);
        }
        static toObject(t, e) {
          return t ? { $jspbMessageInstance: e } : {};
        }
        static fromObject(t) {
          return new y();
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new y();
          return y.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return t;
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {}
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
        }
      }
      class B extends s {
        constructor(t = null) {
          super(),
            B.prototype.client_id || n.a(B.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  code: { n: 3, br: n.d.readString, bw: n.h.writeString },
                  code_type: { n: 4, br: n.d.readEnum, bw: n.h.writeEnum },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.e(B.M())), B.sm_mbf;
        }
        toObject(t = !1) {
          return B.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(B.M(), t, e);
        }
        static fromObject(t) {
          return n.c(B.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new B();
          return B.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(B.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(B.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
        }
      }
      class g extends s {
        constructor(t = null) {
          super(), s.initialize(this, t, 0, -1, void 0, null);
        }
        toObject(t = !1) {
          return g.toObject(t, this);
        }
        static toObject(t, e) {
          return t ? { $jspbMessageInstance: e } : {};
        }
        static fromObject(t) {
          return new g();
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new g();
          return g.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return t;
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {}
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
        }
      }
      class _ extends s {
        constructor(t = null) {
          super(),
            _.prototype.access_token || n.a(_.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  access_token: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.e(_.M())), _.sm_mbf;
        }
        toObject(t = !1) {
          return _.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(_.M(), t, e);
        }
        static fromObject(t) {
          return n.c(_.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new _();
          return _.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(_.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(_.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AccessToken_GenerateForApp_Response";
        }
      }
      class S extends s {
        constructor(t = null) {
          super(),
            S.prototype.refresh_token || n.a(S.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  refresh_token: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  access_token: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.e(S.M())), S.sm_mbf;
        }
        toObject(t = !1) {
          return S.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(S.M(), t, e);
        }
        static fromObject(t) {
          return n.c(S.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new S();
          return S.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(S.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(S.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_MigrateMobileSession_Response";
        }
      }
      class w extends s {
        constructor(t = null) {
          super(),
            w.prototype.nonce || n.a(w.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  nonce: { n: 1, br: n.d.readString, bw: n.h.writeString },
                  expiry: { n: 2, br: n.d.readUint32, bw: n.h.writeUint32 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.e(w.M())), w.sm_mbf;
        }
        toObject(t = !1) {
          return w.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(w.M(), t, e);
        }
        static fromObject(t) {
          return n.c(w.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new w();
          return w.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(w.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(w.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_CreateNonce_Response";
        }
      }
      class v extends s {
        constructor(t = null) {
          super(),
            v.prototype.appid || n.a(v.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  minutes_remaining: {
                    n: 2,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.e(v.M())), v.sm_mbf;
        }
        toObject(t = !1) {
          return v.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(v.M(), t, e);
        }
        static fromObject(t) {
          return n.c(v.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new v();
          return v.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(v.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(v.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_TimeRemaining";
        }
      }
      class T extends s {
        constructor(t = null) {
          super(),
            T.prototype.entries || n.a(T.M()),
            s.initialize(this, t, 0, -1, [2], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { entries: { n: 2, c: v, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.e(T.M())), T.sm_mbf;
        }
        toObject(t = !1) {
          return T.toObject(t, this);
        }
        static toObject(t, e) {
          return n.g(T.M(), t, e);
        }
        static fromObject(t) {
          return n.c(T.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new T();
          return T.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.b(T.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.f(T.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_GetTimeRemaining_Response";
        }
      }
      var M, R;
      !(function (t) {
        (t.GetPasswordRSAPublicKey = function (t, e) {
          return t.SendMsg("Authentication.GetPasswordRSAPublicKey#1", e, a, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (t.BeginAuthSessionViaQR = function (t, e) {
            return t.SendMsg("Authentication.BeginAuthSessionViaQR#1", e, l, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (t.BeginAuthSessionViaCredentials = function (t, e) {
            return t.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              e,
              d,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (t.PollAuthSessionStatus = function (t, e) {
            return t.SendMsg("Authentication.PollAuthSessionStatus#1", e, f, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (t.GetAuthSessionInfo = function (t, e) {
            return t.SendMsg("Authentication.GetAuthSessionInfo#1", e, p, {
              ePrivilege: 1,
            });
          }),
          (t.UpdateAuthSessionWithMobileConfirmation = function (t, e) {
            return t.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              e,
              y,
              { ePrivilege: 1 }
            );
          }),
          (t.UpdateAuthSessionWithSteamGuardCode = function (t, e) {
            return t.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              e,
              g,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (t.GenerateAccessTokenForApp = function (t, e) {
            return t.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              e,
              _,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (t.GetAuthSessionsForAccount = function (t, e) {
            return t.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              e,
              b,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (t.MigrateMobileSession = function (t, e) {
            return t.SendMsg("Authentication.MigrateMobileSession#1", e, S, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(M || (M = {})),
        (function (t) {
          (t.CreateNonce = function (t, e) {
            return t.SendMsg("CloudGaming.CreateNonce#1", e, w, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
            (t.GetTimeRemaining = function (t, e) {
              return t.SendMsg("CloudGaming.GetTimeRemaining#1", e, T, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            });
        })(R || (R = {}));
    },
    MI3I: function (t, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return i;
      }),
        r.d(e, "a", function () {
          return d;
        }),
        r.d(e, "c", function () {
          return m;
        });
      var i,
        n = r("mrSG"),
        s = r("2vnA"),
        o = r("vDqi"),
        a = r.n(o),
        u = r("9XWO"),
        h = r("vYsE"),
        l = (r("msu0"), r("/Q1a")),
        c = r("8DqZ");
      !(function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.Generic = 1)] = "Generic"),
          (t[(t.Expired = 2)] = "Expired");
      })(i || (i = {}));
      class d {
        constructor(t, e, r) {
          (this.m_eFailureState = i.None),
            (this.m_transport = t),
            (this.m_onCompleteCallback = e),
            (this.m_ePlatformType = r);
        }
        StartPolling(t = !0) {
          t
            ? this.PollForUpdate()
            : (this.m_activeTimerID = window.setTimeout(
                this.PollForUpdate,
                this.m_msPollInterval
              ));
        }
        StopPolling() {
          window.clearTimeout(this.m_activeTimerID),
            (this.m_activeTimerID = void 0);
        }
        PollForUpdate() {
          return Object(n.a)(this, void 0, void 0, function* () {
            try {
              const t = u.b.Init(c.e);
              t.Body().set_client_id(this.m_strClientID),
                t.Body().set_request_id(this.m_rgRequestID);
              const e = yield c.a.PollAuthSessionStatus(this.m_transport, t),
                r = e.GetEResult();
              if (1 !== r) {
                if (2 === r) {
                  const t = e.Hdr().transport_error();
                  if (
                    (console.error(
                      `Failed to poll auth session. Result ${r}. Transport Error: ${t}`
                    ),
                    2 === t || 3 === t)
                  )
                    return (
                      window.setTimeout(
                        this.PollForUpdate,
                        this.m_msPollInterval
                      ),
                      1
                    );
                }
                return (
                  9 === r || 27 === r
                    ? (this.m_eFailureState = i.Expired)
                    : (console.error(
                        `Failed to poll auth session. Result: ${r}`
                      ),
                      (this.m_eFailureState = i.Generic)),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  r
                );
              }
              const {
                new_challenge_url: n,
                new_client_id: s,
                refresh_token: o,
                access_token: a,
              } = e.Body().toObject();
              return o
                ? (this.m_onCompleteCallback({
                    bSuccess: !0,
                    strRefreshToken: o,
                    strAccessToken: a,
                  }),
                  r)
                : (n && (this.m_strChallengeURL = n),
                  s && (this.m_strClientID = s),
                  (this.m_activeTimerID = window.setTimeout(
                    this.PollForUpdate,
                    this.m_msPollInterval
                  )),
                  r);
            } catch (t) {
              return (
                console.error(`Failed to poll auth session. ${t}`),
                (this.m_eFailureState = i.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        GetFailureState() {
          return this.m_eFailureState;
        }
      }
      function m(t) {
        const e = new FormData();
        e.append("nonce", t),
          e.append("sessionid", l.c.SESSIONID),
          e.append("redir", document.location.href);
        const r = `${l.c.LOGIN_BASE_URL}jwt/finalizelogin`;
        return a.a.post(r, e, { withCredentials: !0 }).then(
          (t) => {
            const { data: e } = t;
            if (
              !(
                e &&
                e.transfer_info &&
                e.steamID &&
                Array.isArray(e.transfer_info)
              )
            )
              return (
                console.error(
                  "Result of finalizelogin does not match expecations!"
                ),
                !1
              );
            const { transfer_info: r, steamID: i } = e;
            return Promise.all(
              r.map(({ url: t, params: e }) =>
                (function (t, e) {
                  return Object(n.a)(this, void 0, void 0, function* () {
                    try {
                      const r = new FormData();
                      Object.keys(e).forEach((t) => r.append(t, e[t]));
                      const i = yield a.a.post(t, r, {
                        withCredentials: !0,
                        timeout: 1e4,
                      });
                      if (200 !== i.status)
                        return (
                          console.error(
                            `Transfer login failed with status code: ${i.status}`
                          ),
                          !1
                        );
                      if (1 !== i.data.result)
                        return (
                          console.error(
                            `Transfer login failed with result: ${i.data.result}`
                          ),
                          !1
                        );
                    } catch (t) {
                      return console.error(`Transfer login failed: "${t}"`), !1;
                    }
                    return !0;
                  });
                })(t, Object.assign(Object.assign({}, e), { steamID: i }))
              )
            ).then((t) => t.every((t) => t));
          },
          () => (
            console.error("Failed to finalize login. Initial call failed."), !1
          )
        );
      }
      Object(n.b)([s.C], d.prototype, "m_strChallengeURL", void 0),
        Object(n.b)([s.C], d.prototype, "m_eFailureState", void 0),
        Object(n.b)([h.a], d.prototype, "PollForUpdate", null);
    },
    SEa3: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return c;
      });
      var i = r("mrSG"),
        n = r("q1tI"),
        s = r("2vnA"),
        o = r("9XWO"),
        a = (r("msu0"), r("8DqZ")),
        u = r("aoTL"),
        h = r("MI3I");
      class l extends h.a {
        constructor(t) {
          super(
            t.transport,
            (e) => {
              (this.m_eStatus = e.bSuccess ? 3 : 4), t.onComplete(e);
            },
            t.ePlatformType
          ),
            (this.m_eStatus = 0);
        }
        Start() {
          return Object(i.a)(this, void 0, void 0, function* () {
            if (0 !== this.m_eStatus)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance."
                ),
                2
              );
            this.m_eStatus = 1;
            try {
              const t = o.b.Init(a.c);
              t.Body().set_platform_type(this.m_ePlatformType),
                t.Body().set_device_friendly_name(window.navigator.userAgent);
              const e = yield a.a.BeginAuthSessionViaQR(this.m_transport, t),
                r = e.GetEResult();
              if (1 !== r)
                return (
                  console.error(`Failed to start auth session. Result: ${r}`),
                  (this.m_eFailureState = h.b.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  r
                );
              const {
                client_id: i,
                challenge_url: n,
                interval: s,
                request_id: u,
              } = e.Body().toObject();
              return (
                (this.m_strClientID = i),
                (this.m_strChallengeURL = n),
                (this.m_msPollInterval = 1e3 * s),
                (this.m_rgRequestID = u),
                (this.m_eStatus = 2),
                this.StartPolling(!1),
                r
              );
            } catch (t) {
              return (
                console.error(`Failed to start auth session. ${t}`),
                (this.m_eFailureState = h.b.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        Stop() {
          this.StopPolling(), (this.m_eStatus = 5);
        }
        GetChallengeURL() {
          return this.m_strChallengeURL;
        }
        GetStatus() {
          return this.m_eStatus;
        }
      }
      function c(t) {
        const [e, r] = Object(n.useState)(new l(t));
        return (
          Object(n.useEffect)(
            () => (
              e.Start(),
              () => {
                e.Stop();
              }
            ),
            [e]
          ),
          Object(u.d)(() => ({
            strChallengeURL: e.GetChallengeURL(),
            eFailureStatue: e.GetFailureState(),
            eStatus: e.GetStatus(),
            reset: () => r(new l(t)),
          }))
        );
      }
      Object(i.b)([s.C], l.prototype, "m_eStatus", void 0);
    },
    "Wv/x": function (t, e, r) {
      "use strict";
      var i;
      r.r(e);
      function n(t, e, r) {
        null != t &&
          ("number" == typeof t
            ? this.fromNumber(t, e, r)
            : null == e && "string" != typeof t
            ? this.fromString(t, 256)
            : this.fromString(t, e));
      }
      function s() {
        return new n(null);
      }
      "Microsoft Internet Explorer" == navigator.appName
        ? ((n.prototype.am = function (t, e, r, i, n, s) {
            for (var o = 32767 & e, a = e >> 15; --s >= 0; ) {
              var u = 32767 & this[t],
                h = this[t++] >> 15,
                l = a * u + h * o;
              (n =
                ((u = o * u + ((32767 & l) << 15) + r[i] + (1073741823 & n)) >>>
                  30) +
                (l >>> 15) +
                a * h +
                (n >>> 30)),
                (r[i++] = 1073741823 & u);
            }
            return n;
          }),
          (i = 30))
        : "Netscape" != navigator.appName
        ? ((n.prototype.am = function (t, e, r, i, n, s) {
            for (; --s >= 0; ) {
              var o = e * this[t++] + r[i] + n;
              (n = Math.floor(o / 67108864)), (r[i++] = 67108863 & o);
            }
            return n;
          }),
          (i = 26))
        : ((n.prototype.am = function (t, e, r, i, n, s) {
            for (var o = 16383 & e, a = e >> 14; --s >= 0; ) {
              var u = 16383 & this[t],
                h = this[t++] >> 14,
                l = a * u + h * o;
              (n =
                ((u = o * u + ((16383 & l) << 14) + r[i] + n) >> 28) +
                (l >> 14) +
                a * h),
                (r[i++] = 268435455 & u);
            }
            return n;
          }),
          (i = 28)),
        (n.prototype.DB = i),
        (n.prototype.DM = (1 << i) - 1),
        (n.prototype.DV = 1 << i);
      (n.prototype.FV = Math.pow(2, 52)),
        (n.prototype.F1 = 52 - i),
        (n.prototype.F2 = 2 * i - 52);
      var o,
        a,
        u = new Array();
      for (o = "0".charCodeAt(0), a = 0; a <= 9; ++a) u[o++] = a;
      for (o = "a".charCodeAt(0), a = 10; a < 36; ++a) u[o++] = a;
      for (o = "A".charCodeAt(0), a = 10; a < 36; ++a) u[o++] = a;
      function h(t) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
      }
      function l(t, e) {
        var r = u[t.charCodeAt(e)];
        return null == r ? -1 : r;
      }
      function c(t) {
        var e = s();
        return e.fromInt(t), e;
      }
      function d(t) {
        var e,
          r = 1;
        return (
          0 != (e = t >>> 16) && ((t = e), (r += 16)),
          0 != (e = t >> 8) && ((t = e), (r += 8)),
          0 != (e = t >> 4) && ((t = e), (r += 4)),
          0 != (e = t >> 2) && ((t = e), (r += 2)),
          0 != (e = t >> 1) && ((t = e), (r += 1)),
          r
        );
      }
      function m(t) {
        this.m = t;
      }
      function f(t) {
        (this.m = t),
          (this.mp = t.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (t.DB - 15)) - 1),
          (this.mt2 = 2 * t.t);
      }
      function p(t, e) {
        return t & e;
      }
      function b(t, e) {
        return t | e;
      }
      function y(t, e) {
        return t ^ e;
      }
      function B(t, e) {
        return t & ~e;
      }
      function g(t) {
        if (0 == t) return -1;
        var e = 0;
        return (
          0 == (65535 & t) && ((t >>= 16), (e += 16)),
          0 == (255 & t) && ((t >>= 8), (e += 8)),
          0 == (15 & t) && ((t >>= 4), (e += 4)),
          0 == (3 & t) && ((t >>= 2), (e += 2)),
          0 == (1 & t) && ++e,
          e
        );
      }
      function _(t) {
        for (var e = 0; 0 != t; ) (t &= t - 1), ++e;
        return e;
      }
      function S() {}
      function w(t) {
        return t;
      }
      function v(t) {
        (this.r2 = s()),
          (this.q3 = s()),
          n.ONE.dlShiftTo(2 * t.t, this.r2),
          (this.mu = this.r2.divide(t)),
          (this.m = t);
      }
      (m.prototype.convert = function (t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
      }),
        (m.prototype.revert = function (t) {
          return t;
        }),
        (m.prototype.reduce = function (t) {
          t.divRemTo(this.m, null, t);
        }),
        (m.prototype.mulTo = function (t, e, r) {
          t.multiplyTo(e, r), this.reduce(r);
        }),
        (m.prototype.sqrTo = function (t, e) {
          t.squareTo(e), this.reduce(e);
        }),
        (f.prototype.convert = function (t) {
          var e = s();
          return (
            t.abs().dlShiftTo(this.m.t, e),
            e.divRemTo(this.m, null, e),
            t.s < 0 && e.compareTo(n.ZERO) > 0 && this.m.subTo(e, e),
            e
          );
        }),
        (f.prototype.revert = function (t) {
          var e = s();
          return t.copyTo(e), this.reduce(e), e;
        }),
        (f.prototype.reduce = function (t) {
          for (; t.t <= this.mt2; ) t[t.t++] = 0;
          for (var e = 0; e < this.m.t; ++e) {
            var r = 32767 & t[e],
              i =
                (r * this.mpl +
                  (((r * this.mph + (t[e] >> 15) * this.mpl) & this.um) <<
                    15)) &
                t.DM;
            for (
              t[(r = e + this.m.t)] += this.m.am(0, i, t, e, 0, this.m.t);
              t[r] >= t.DV;

            )
              (t[r] -= t.DV), t[++r]++;
          }
          t.clamp(),
            t.drShiftTo(this.m.t, t),
            t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
        }),
        (f.prototype.mulTo = function (t, e, r) {
          t.multiplyTo(e, r), this.reduce(r);
        }),
        (f.prototype.sqrTo = function (t, e) {
          t.squareTo(e), this.reduce(e);
        }),
        (n.prototype.copyTo = function (t) {
          for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
          (t.t = this.t), (t.s = this.s);
        }),
        (n.prototype.fromInt = function (t) {
          (this.t = 1),
            (this.s = t < 0 ? -1 : 0),
            t > 0 ? (this[0] = t) : t < -1 ? (this[0] = t + DV) : (this.t = 0);
        }),
        (n.prototype.fromString = function (t, e) {
          var r;
          if (16 == e) r = 4;
          else if (8 == e) r = 3;
          else if (256 == e) r = 8;
          else if (2 == e) r = 1;
          else if (32 == e) r = 5;
          else {
            if (4 != e) return void this.fromRadix(t, e);
            r = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var i = t.length, s = !1, o = 0; --i >= 0; ) {
            var a = 8 == r ? 255 & t[i] : l(t, i);
            a < 0
              ? "-" == t.charAt(i) && (s = !0)
              : ((s = !1),
                0 == o
                  ? (this[this.t++] = a)
                  : o + r > this.DB
                  ? ((this[this.t - 1] |=
                      (a & ((1 << (this.DB - o)) - 1)) << o),
                    (this[this.t++] = a >> (this.DB - o)))
                  : (this[this.t - 1] |= a << o),
                (o += r) >= this.DB && (o -= this.DB));
          }
          8 == r &&
            0 != (128 & t[0]) &&
            ((this.s = -1),
            o > 0 && (this[this.t - 1] |= ((1 << (this.DB - o)) - 1) << o)),
            this.clamp(),
            s && n.ZERO.subTo(this, this);
        }),
        (n.prototype.clamp = function () {
          for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
            --this.t;
        }),
        (n.prototype.dlShiftTo = function (t, e) {
          var r;
          for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
          for (r = t - 1; r >= 0; --r) e[r] = 0;
          (e.t = this.t + t), (e.s = this.s);
        }),
        (n.prototype.drShiftTo = function (t, e) {
          for (var r = t; r < this.t; ++r) e[r - t] = this[r];
          (e.t = Math.max(this.t - t, 0)), (e.s = this.s);
        }),
        (n.prototype.lShiftTo = function (t, e) {
          var r,
            i = t % this.DB,
            n = this.DB - i,
            s = (1 << n) - 1,
            o = Math.floor(t / this.DB),
            a = (this.s << i) & this.DM;
          for (r = this.t - 1; r >= 0; --r)
            (e[r + o + 1] = (this[r] >> n) | a), (a = (this[r] & s) << i);
          for (r = o - 1; r >= 0; --r) e[r] = 0;
          (e[o] = a), (e.t = this.t + o + 1), (e.s = this.s), e.clamp();
        }),
        (n.prototype.rShiftTo = function (t, e) {
          e.s = this.s;
          var r = Math.floor(t / this.DB);
          if (r >= this.t) e.t = 0;
          else {
            var i = t % this.DB,
              n = this.DB - i,
              s = (1 << i) - 1;
            e[0] = this[r] >> i;
            for (var o = r + 1; o < this.t; ++o)
              (e[o - r - 1] |= (this[o] & s) << n), (e[o - r] = this[o] >> i);
            i > 0 && (e[this.t - r - 1] |= (this.s & s) << n),
              (e.t = this.t - r),
              e.clamp();
          }
        }),
        (n.prototype.subTo = function (t, e) {
          for (var r = 0, i = 0, n = Math.min(t.t, this.t); r < n; )
            (i += this[r] - t[r]), (e[r++] = i & this.DM), (i >>= this.DB);
          if (t.t < this.t) {
            for (i -= t.s; r < this.t; )
              (i += this[r]), (e[r++] = i & this.DM), (i >>= this.DB);
            i += this.s;
          } else {
            for (i += this.s; r < t.t; )
              (i -= t[r]), (e[r++] = i & this.DM), (i >>= this.DB);
            i -= t.s;
          }
          (e.s = i < 0 ? -1 : 0),
            i < -1 ? (e[r++] = this.DV + i) : i > 0 && (e[r++] = i),
            (e.t = r),
            e.clamp();
        }),
        (n.prototype.multiplyTo = function (t, e) {
          var r = this.abs(),
            i = t.abs(),
            s = r.t;
          for (e.t = s + i.t; --s >= 0; ) e[s] = 0;
          for (s = 0; s < i.t; ++s) e[s + r.t] = r.am(0, i[s], e, s, 0, r.t);
          (e.s = 0), e.clamp(), this.s != t.s && n.ZERO.subTo(e, e);
        }),
        (n.prototype.squareTo = function (t) {
          for (var e = this.abs(), r = (t.t = 2 * e.t); --r >= 0; ) t[r] = 0;
          for (r = 0; r < e.t - 1; ++r) {
            var i = e.am(r, e[r], t, 2 * r, 0, 1);
            (t[r + e.t] += e.am(
              r + 1,
              2 * e[r],
              t,
              2 * r + 1,
              i,
              e.t - r - 1
            )) >= e.DV && ((t[r + e.t] -= e.DV), (t[r + e.t + 1] = 1));
          }
          t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
            (t.s = 0),
            t.clamp();
        }),
        (n.prototype.divRemTo = function (t, e, r) {
          var i = t.abs();
          if (!(i.t <= 0)) {
            var o = this.abs();
            if (o.t < i.t)
              return (
                null != e && e.fromInt(0), void (null != r && this.copyTo(r))
              );
            null == r && (r = s());
            var a = s(),
              u = this.s,
              h = t.s,
              l = this.DB - d(i[i.t - 1]);
            l > 0
              ? (i.lShiftTo(l, a), o.lShiftTo(l, r))
              : (i.copyTo(a), o.copyTo(r));
            var c = a.t,
              m = a[c - 1];
            if (0 != m) {
              var f = m * (1 << this.F1) + (c > 1 ? a[c - 2] >> this.F2 : 0),
                p = this.FV / f,
                b = (1 << this.F1) / f,
                y = 1 << this.F2,
                B = r.t,
                g = B - c,
                _ = null == e ? s() : e;
              for (
                a.dlShiftTo(g, _),
                  r.compareTo(_) >= 0 && ((r[r.t++] = 1), r.subTo(_, r)),
                  n.ONE.dlShiftTo(c, _),
                  _.subTo(a, a);
                a.t < c;

              )
                a[a.t++] = 0;
              for (; --g >= 0; ) {
                var S =
                  r[--B] == m
                    ? this.DM
                    : Math.floor(r[B] * p + (r[B - 1] + y) * b);
                if ((r[B] += a.am(0, S, r, g, 0, c)) < S)
                  for (a.dlShiftTo(g, _), r.subTo(_, r); r[B] < --S; )
                    r.subTo(_, r);
              }
              null != e && (r.drShiftTo(c, e), u != h && n.ZERO.subTo(e, e)),
                (r.t = c),
                r.clamp(),
                l > 0 && r.rShiftTo(l, r),
                u < 0 && n.ZERO.subTo(r, r);
            }
          }
        }),
        (n.prototype.invDigit = function () {
          if (this.t < 1) return 0;
          var t = this[0];
          if (0 == (1 & t)) return 0;
          var e = 3 & t;
          return (e =
            ((e =
              ((e =
                ((e = (e * (2 - (15 & t) * e)) & 15) * (2 - (255 & t) * e)) &
                255) *
                (2 - (((65535 & t) * e) & 65535))) &
              65535) *
              (2 - ((t * e) % this.DV))) %
            this.DV) > 0
            ? this.DV - e
            : -e;
        }),
        (n.prototype.isEven = function () {
          return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }),
        (n.prototype.exp = function (t, e) {
          if (t > 4294967295 || t < 1) return n.ONE;
          var r = s(),
            i = s(),
            o = e.convert(this),
            a = d(t) - 1;
          for (o.copyTo(r); --a >= 0; )
            if ((e.sqrTo(r, i), (t & (1 << a)) > 0)) e.mulTo(i, o, r);
            else {
              var u = r;
              (r = i), (i = u);
            }
          return e.revert(r);
        }),
        (n.prototype.toString = function (t) {
          if (this.s < 0) return "-" + this.negate().toString(t);
          var e;
          if (16 == t) e = 4;
          else if (8 == t) e = 3;
          else if (2 == t) e = 1;
          else if (32 == t) e = 5;
          else {
            if (4 != t) return this.toRadix(t);
            e = 2;
          }
          var r,
            i = (1 << e) - 1,
            n = !1,
            s = "",
            o = this.t,
            a = this.DB - ((o * this.DB) % e);
          if (o-- > 0)
            for (
              a < this.DB && (r = this[o] >> a) > 0 && ((n = !0), (s = h(r)));
              o >= 0;

            )
              a < e
                ? ((r = (this[o] & ((1 << a) - 1)) << (e - a)),
                  (r |= this[--o] >> (a += this.DB - e)))
                : ((r = (this[o] >> (a -= e)) & i),
                  a <= 0 && ((a += this.DB), --o)),
                r > 0 && (n = !0),
                n && (s += h(r));
          return n ? s : "0";
        }),
        (n.prototype.negate = function () {
          var t = s();
          return n.ZERO.subTo(this, t), t;
        }),
        (n.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }),
        (n.prototype.compareTo = function (t) {
          var e = this.s - t.s;
          if (0 != e) return e;
          var r = this.t;
          if (0 != (e = r - t.t)) return e;
          for (; --r >= 0; ) if (0 != (e = this[r] - t[r])) return e;
          return 0;
        }),
        (n.prototype.bitLength = function () {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + d(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (n.prototype.mod = function (t) {
          var e = s();
          return (
            this.abs().divRemTo(t, null, e),
            this.s < 0 && e.compareTo(n.ZERO) > 0 && t.subTo(e, e),
            e
          );
        }),
        (n.prototype.modPowInt = function (t, e) {
          var r;
          return (
            (r = t < 256 || e.isEven() ? new m(e) : new f(e)), this.exp(t, r)
          );
        }),
        (n.ZERO = c(0)),
        (n.ONE = c(1)),
        (S.prototype.convert = w),
        (S.prototype.revert = w),
        (S.prototype.mulTo = function (t, e, r) {
          t.multiplyTo(e, r);
        }),
        (S.prototype.sqrTo = function (t, e) {
          t.squareTo(e);
        }),
        (v.prototype.convert = function (t) {
          if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
          if (t.compareTo(this.m) < 0) return t;
          var e = s();
          return t.copyTo(e), this.reduce(e), e;
        }),
        (v.prototype.revert = function (t) {
          return t;
        }),
        (v.prototype.reduce = function (t) {
          for (
            t.drShiftTo(this.m.t - 1, this.r2),
              t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            t.compareTo(this.r2) < 0;

          )
            t.dAddOffset(1, this.m.t + 1);
          for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
            t.subTo(this.m, t);
        }),
        (v.prototype.mulTo = function (t, e, r) {
          t.multiplyTo(e, r), this.reduce(r);
        }),
        (v.prototype.sqrTo = function (t, e) {
          t.squareTo(e), this.reduce(e);
        });
      var T = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
          139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
          223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
          293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
          383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
          463, 467, 479, 487, 491, 499, 503, 509,
        ],
        M = (1 << 26) / T[T.length - 1];
      (n.prototype.chunkSize = function (t) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(t));
      }),
        (n.prototype.toRadix = function (t) {
          if ((null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36))
            return "0";
          var e = this.chunkSize(t),
            r = Math.pow(t, e),
            i = c(r),
            n = s(),
            o = s(),
            a = "";
          for (this.divRemTo(i, n, o); n.signum() > 0; )
            (a = (r + o.intValue()).toString(t).substr(1) + a),
              n.divRemTo(i, n, o);
          return o.intValue().toString(t) + a;
        }),
        (n.prototype.fromRadix = function (t, e) {
          this.fromInt(0), null == e && (e = 10);
          for (
            var r = this.chunkSize(e),
              i = Math.pow(e, r),
              s = !1,
              o = 0,
              a = 0,
              u = 0;
            u < t.length;
            ++u
          ) {
            var h = l(t, u);
            h < 0
              ? "-" == t.charAt(u) && 0 == this.signum() && (s = !0)
              : ((a = e * a + h),
                ++o >= r &&
                  (this.dMultiply(i), this.dAddOffset(a, 0), (o = 0), (a = 0)));
          }
          o > 0 && (this.dMultiply(Math.pow(e, o)), this.dAddOffset(a, 0)),
            s && n.ZERO.subTo(this, this);
        }),
        (n.prototype.fromNumber = function (t, e, r) {
          if ("number" == typeof e)
            if (t < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(t, r),
                  this.testBit(t - 1) ||
                    this.bitwiseTo(n.ONE.shiftLeft(t - 1), b, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(e);

              )
                this.dAddOffset(2, 0),
                  this.bitLength() > t &&
                    this.subTo(n.ONE.shiftLeft(t - 1), this);
          else {
            var i = new Array(),
              s = 7 & t;
            (i.length = 1 + (t >> 3)),
              e.nextBytes(i),
              s > 0 ? (i[0] &= (1 << s) - 1) : (i[0] = 0),
              this.fromString(i, 256);
          }
        }),
        (n.prototype.bitwiseTo = function (t, e, r) {
          var i,
            n,
            s = Math.min(t.t, this.t);
          for (i = 0; i < s; ++i) r[i] = e(this[i], t[i]);
          if (t.t < this.t) {
            for (n = t.s & this.DM, i = s; i < this.t; ++i)
              r[i] = e(this[i], n);
            r.t = this.t;
          } else {
            for (n = this.s & this.DM, i = s; i < t.t; ++i) r[i] = e(n, t[i]);
            r.t = t.t;
          }
          (r.s = e(this.s, t.s)), r.clamp();
        }),
        (n.prototype.changeBit = function (t, e) {
          var r = n.ONE.shiftLeft(t);
          return this.bitwiseTo(r, e, r), r;
        }),
        (n.prototype.addTo = function (t, e) {
          for (var r = 0, i = 0, n = Math.min(t.t, this.t); r < n; )
            (i += this[r] + t[r]), (e[r++] = i & this.DM), (i >>= this.DB);
          if (t.t < this.t) {
            for (i += t.s; r < this.t; )
              (i += this[r]), (e[r++] = i & this.DM), (i >>= this.DB);
            i += this.s;
          } else {
            for (i += this.s; r < t.t; )
              (i += t[r]), (e[r++] = i & this.DM), (i >>= this.DB);
            i += t.s;
          }
          (e.s = i < 0 ? -1 : 0),
            i > 0 ? (e[r++] = i) : i < -1 && (e[r++] = this.DV + i),
            (e.t = r),
            e.clamp();
        }),
        (n.prototype.dMultiply = function (t) {
          (this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }),
        (n.prototype.dAddOffset = function (t, e) {
          for (; this.t <= e; ) this[this.t++] = 0;
          for (this[e] += t; this[e] >= this.DV; )
            (this[e] -= this.DV),
              ++e >= this.t && (this[this.t++] = 0),
              ++this[e];
        }),
        (n.prototype.multiplyLowerTo = function (t, e, r) {
          var i,
            n = Math.min(this.t + t.t, e);
          for (r.s = 0, r.t = n; n > 0; ) r[--n] = 0;
          for (i = r.t - this.t; n < i; ++n)
            r[n + this.t] = this.am(0, t[n], r, n, 0, this.t);
          for (i = Math.min(t.t, e); n < i; ++n)
            this.am(0, t[n], r, n, 0, e - n);
          r.clamp();
        }),
        (n.prototype.multiplyUpperTo = function (t, e, r) {
          --e;
          var i = (r.t = this.t + t.t - e);
          for (r.s = 0; --i >= 0; ) r[i] = 0;
          for (i = Math.max(e - this.t, 0); i < t.t; ++i)
            r[this.t + i - e] = this.am(e - i, t[i], r, 0, 0, this.t + i - e);
          r.clamp(), r.drShiftTo(1, r);
        }),
        (n.prototype.modInt = function (t) {
          if (t <= 0) return 0;
          var e = this.DV % t,
            r = this.s < 0 ? t - 1 : 0;
          if (this.t > 0)
            if (0 == e) r = this[0] % t;
            else
              for (var i = this.t - 1; i >= 0; --i) r = (e * r + this[i]) % t;
          return r;
        }),
        (n.prototype.millerRabin = function (t) {
          var e = this.subtract(n.ONE),
            r = e.getLowestSetBit();
          if (r <= 0) return !1;
          var i = e.shiftRight(r);
          (t = (t + 1) >> 1) > T.length && (t = T.length);
          for (var o = s(), a = 0; a < t; ++a) {
            o.fromInt(T[a]);
            var u = o.modPow(i, this);
            if (0 != u.compareTo(n.ONE) && 0 != u.compareTo(e)) {
              for (var h = 1; h++ < r && 0 != u.compareTo(e); )
                if (0 == (u = u.modPowInt(2, this)).compareTo(n.ONE)) return !1;
              if (0 != u.compareTo(e)) return !1;
            }
          }
          return !0;
        }),
        (n.prototype.clone = function () {
          var t = s();
          return this.copyTo(t), t;
        }),
        (n.prototype.intValue = function () {
          if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
          } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }),
        (n.prototype.byteValue = function () {
          return 0 == this.t ? this.s : (this[0] << 24) >> 24;
        }),
        (n.prototype.shortValue = function () {
          return 0 == this.t ? this.s : (this[0] << 16) >> 16;
        }),
        (n.prototype.signum = function () {
          return this.s < 0
            ? -1
            : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
        }),
        (n.prototype.toByteArray = function () {
          var t = this.t,
            e = new Array();
          e[0] = this.s;
          var r,
            i = this.DB - ((t * this.DB) % 8),
            n = 0;
          if (t-- > 0)
            for (
              i < this.DB &&
              (r = this[t] >> i) != (this.s & this.DM) >> i &&
              (e[n++] = r | (this.s << (this.DB - i)));
              t >= 0;

            )
              i < 8
                ? ((r = (this[t] & ((1 << i) - 1)) << (8 - i)),
                  (r |= this[--t] >> (i += this.DB - 8)))
                : ((r = (this[t] >> (i -= 8)) & 255),
                  i <= 0 && ((i += this.DB), --t)),
                0 != (128 & r) && (r |= -256),
                0 == n && (128 & this.s) != (128 & r) && ++n,
                (n > 0 || r != this.s) && (e[n++] = r);
          return e;
        }),
        (n.prototype.equals = function (t) {
          return 0 == this.compareTo(t);
        }),
        (n.prototype.min = function (t) {
          return this.compareTo(t) < 0 ? this : t;
        }),
        (n.prototype.max = function (t) {
          return this.compareTo(t) > 0 ? this : t;
        }),
        (n.prototype.and = function (t) {
          var e = s();
          return this.bitwiseTo(t, p, e), e;
        }),
        (n.prototype.or = function (t) {
          var e = s();
          return this.bitwiseTo(t, b, e), e;
        }),
        (n.prototype.xor = function (t) {
          var e = s();
          return this.bitwiseTo(t, y, e), e;
        }),
        (n.prototype.andNot = function (t) {
          var e = s();
          return this.bitwiseTo(t, B, e), e;
        }),
        (n.prototype.not = function () {
          for (var t = s(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
          return (t.t = this.t), (t.s = ~this.s), t;
        }),
        (n.prototype.shiftLeft = function (t) {
          var e = s();
          return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
        }),
        (n.prototype.shiftRight = function (t) {
          var e = s();
          return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
        }),
        (n.prototype.getLowestSetBit = function () {
          for (var t = 0; t < this.t; ++t)
            if (0 != this[t]) return t * this.DB + g(this[t]);
          return this.s < 0 ? this.t * this.DB : -1;
        }),
        (n.prototype.bitCount = function () {
          for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r)
            t += _(this[r] ^ e);
          return t;
        }),
        (n.prototype.testBit = function (t) {
          var e = Math.floor(t / this.DB);
          return e >= this.t
            ? 0 != this.s
            : 0 != (this[e] & (1 << t % this.DB));
        }),
        (n.prototype.setBit = function (t) {
          return this.changeBit(t, b);
        }),
        (n.prototype.clearBit = function (t) {
          return this.changeBit(t, B);
        }),
        (n.prototype.flipBit = function (t) {
          return this.changeBit(t, y);
        }),
        (n.prototype.add = function (t) {
          var e = s();
          return this.addTo(t, e), e;
        }),
        (n.prototype.subtract = function (t) {
          var e = s();
          return this.subTo(t, e), e;
        }),
        (n.prototype.multiply = function (t) {
          var e = s();
          return this.multiplyTo(t, e), e;
        }),
        (n.prototype.divide = function (t) {
          var e = s();
          return this.divRemTo(t, e, null), e;
        }),
        (n.prototype.remainder = function (t) {
          var e = s();
          return this.divRemTo(t, null, e), e;
        }),
        (n.prototype.divideAndRemainder = function (t) {
          var e = s(),
            r = s();
          return this.divRemTo(t, e, r), new Array(e, r);
        }),
        (n.prototype.modPow = function (t, e) {
          var r,
            i,
            n = t.bitLength(),
            o = c(1);
          if (n <= 0) return o;
          (r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
            (i = n < 8 ? new m(e) : e.isEven() ? new v(e) : new f(e));
          var a = new Array(),
            u = 3,
            h = r - 1,
            l = (1 << r) - 1;
          if (((a[1] = i.convert(this)), r > 1)) {
            var p = s();
            for (i.sqrTo(a[1], p); u <= l; )
              (a[u] = s()), i.mulTo(p, a[u - 2], a[u]), (u += 2);
          }
          var b,
            y,
            B = t.t - 1,
            g = !0,
            _ = s();
          for (n = d(t[B]) - 1; B >= 0; ) {
            for (
              n >= h
                ? (b = (t[B] >> (n - h)) & l)
                : ((b = (t[B] & ((1 << (n + 1)) - 1)) << (h - n)),
                  B > 0 && (b |= t[B - 1] >> (this.DB + n - h))),
                u = r;
              0 == (1 & b);

            )
              (b >>= 1), --u;
            if (((n -= u) < 0 && ((n += this.DB), --B), g))
              a[b].copyTo(o), (g = !1);
            else {
              for (; u > 1; ) i.sqrTo(o, _), i.sqrTo(_, o), (u -= 2);
              u > 0 ? i.sqrTo(o, _) : ((y = o), (o = _), (_ = y)),
                i.mulTo(_, a[b], o);
            }
            for (; B >= 0 && 0 == (t[B] & (1 << n)); )
              i.sqrTo(o, _),
                (y = o),
                (o = _),
                (_ = y),
                --n < 0 && ((n = this.DB - 1), --B);
          }
          return i.revert(o);
        }),
        (n.prototype.modInverse = function (t) {
          var e = t.isEven();
          if ((this.isEven() && e) || 0 == t.signum()) return n.ZERO;
          for (
            var r = t.clone(),
              i = this.clone(),
              s = c(1),
              o = c(0),
              a = c(0),
              u = c(1);
            0 != r.signum();

          ) {
            for (; r.isEven(); )
              r.rShiftTo(1, r),
                e
                  ? ((s.isEven() && o.isEven()) ||
                      (s.addTo(this, s), o.subTo(t, o)),
                    s.rShiftTo(1, s))
                  : o.isEven() || o.subTo(t, o),
                o.rShiftTo(1, o);
            for (; i.isEven(); )
              i.rShiftTo(1, i),
                e
                  ? ((a.isEven() && u.isEven()) ||
                      (a.addTo(this, a), u.subTo(t, u)),
                    a.rShiftTo(1, a))
                  : u.isEven() || u.subTo(t, u),
                u.rShiftTo(1, u);
            r.compareTo(i) >= 0
              ? (r.subTo(i, r), e && s.subTo(a, s), o.subTo(u, o))
              : (i.subTo(r, i), e && a.subTo(s, a), u.subTo(o, u));
          }
          return 0 != i.compareTo(n.ONE)
            ? n.ZERO
            : u.compareTo(t) >= 0
            ? u.subtract(t)
            : u.signum() < 0
            ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u)
            : u;
        }),
        (n.prototype.pow = function (t) {
          return this.exp(t, new S());
        }),
        (n.prototype.gcd = function (t) {
          var e = this.s < 0 ? this.negate() : this.clone(),
            r = t.s < 0 ? t.negate() : t.clone();
          if (e.compareTo(r) < 0) {
            var i = e;
            (e = r), (r = i);
          }
          var n = e.getLowestSetBit(),
            s = r.getLowestSetBit();
          if (s < 0) return e;
          for (
            n < s && (s = n), s > 0 && (e.rShiftTo(s, e), r.rShiftTo(s, r));
            e.signum() > 0;

          )
            (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
              (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r),
              e.compareTo(r) >= 0
                ? (e.subTo(r, e), e.rShiftTo(1, e))
                : (r.subTo(e, r), r.rShiftTo(1, r));
          return s > 0 && r.lShiftTo(s, r), r;
        }),
        (n.prototype.isProbablePrime = function (t) {
          var e,
            r = this.abs();
          if (1 == r.t && r[0] <= T[T.length - 1]) {
            for (e = 0; e < T.length; ++e) if (r[0] == T[e]) return !0;
            return !1;
          }
          if (r.isEven()) return !1;
          for (e = 1; e < T.length; ) {
            for (var i = T[e], n = e + 1; n < T.length && i < M; ) i *= T[n++];
            for (i = r.modInt(i); e < n; ) if (i % T[e++] == 0) return !1;
          }
          return r.millerRabin(t);
        });
      var R = n,
        z = function (t, e) {
          (this.modulus = new R(t, 16)),
            (this.encryptionExponent = new R(e, 16));
        },
        A = {
          base64:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode: function (t) {
            if (!t) return !1;
            var e,
              r,
              i,
              n,
              s,
              o,
              a,
              u = "",
              h = 0;
            do {
              (n = (e = t.charCodeAt(h++)) >> 2),
                (s = ((3 & e) << 4) | ((r = t.charCodeAt(h++)) >> 4)),
                (o = ((15 & r) << 2) | ((i = t.charCodeAt(h++)) >> 6)),
                (a = 63 & i),
                isNaN(r) ? (o = a = 64) : isNaN(i) && (a = 64),
                (u +=
                  this.base64.charAt(n) +
                  this.base64.charAt(s) +
                  this.base64.charAt(o) +
                  this.base64.charAt(a));
            } while (h < t.length);
            return u;
          },
          decode: function (t) {
            if (!t) return !1;
            t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            var e,
              r,
              i,
              n,
              s = "",
              o = 0;
            do {
              (e = this.base64.indexOf(t.charAt(o++))),
                (r = this.base64.indexOf(t.charAt(o++))),
                (i = this.base64.indexOf(t.charAt(o++))),
                (n = this.base64.indexOf(t.charAt(o++))),
                (s += String.fromCharCode((e << 2) | (r >> 4))),
                64 != i &&
                  (s += String.fromCharCode(((15 & r) << 4) | (i >> 2))),
                64 != n && (s += String.fromCharCode(((3 & i) << 6) | n));
            } while (o < t.length);
            return s;
          },
        },
        O = {
          hex: "0123456789abcdef",
          encode: function (t) {
            if (!t) return !1;
            var e,
              r = "",
              i = 0;
            do {
              (e = t.charCodeAt(i++)),
                (r += this.hex.charAt((e >> 4) & 15) + this.hex.charAt(15 & e));
            } while (i < t.length);
            return r;
          },
          decode: function (t) {
            if (!t) return !1;
            t = t.replace(/[^0-9abcdef]/g, "");
            var e = "",
              r = 0;
            do {
              e += String.fromCharCode(
                ((this.hex.indexOf(t.charAt(r++)) << 4) & 240) |
                  (15 & this.hex.indexOf(t.charAt(r++)))
              );
            } while (r < t.length);
            return e;
          },
        },
        F = {
          getPublicKey: function (t, e) {
            return new z(t, e);
          },
          encrypt: function (t, e) {
            return (
              !!e &&
              !!(t = this.pkcs1pad2(t, (e.modulus.bitLength() + 7) >> 3)) &&
              !!(t = t.modPowInt(e.encryptionExponent, e.modulus)) &&
              (1 == (1 & (t = t.toString(16)).length) && (t = "0" + t),
              A.encode(O.decode(t)))
            );
          },
          pkcs1pad2: function (t, e) {
            if (e < t.length + 11) return null;
            for (var r = [], i = t.length - 1; i >= 0 && e > 0; )
              r[--e] = t.charCodeAt(i--);
            for (r[--e] = 0; e > 2; )
              r[--e] = Math.floor(254 * Math.random()) + 1;
            return (r[--e] = 2), (r[--e] = 0), new R(r);
          },
        };
      e.default = F;
    },
    cHF8: function (t, e, r) {
      "use strict";
      r.d(e, "d", function () {
        return h;
      }),
        r.d(e, "b", function () {
          return l;
        }),
        r.d(e, "c", function () {
          return c;
        }),
        r.d(e, "a", function () {
          return d;
        });
      var i = r("mrSG"),
        n = r("vDqi"),
        s = r.n(n);
      const o = r("Wv/x").default;
      function a(t, e) {
        return t.endsWith("/") || (t += "/"), `${t}login/${e}/`;
      }
      function u() {
        let t = new FormData();
        return t.append("donotcache", new Date().getTime().toString()), t;
      }
      function h(t) {
        return Object(i.a)(this, void 0, void 0, function* () {
          let e = u(),
            r = a(t, "refreshcaptcha"),
            i = "";
          try {
            let t = yield s.a.post(r, e);
            if (200 != t.status) return !1;
            i = t.data.gid;
          } catch (t) {
            return !1;
          }
          return i;
        });
      }
      function l(t, e) {
        return a(t, "rendercaptcha") + `?gid=${e}`;
      }
      function c(t, e) {
        let r = o.getPublicKey(e.publickey_mod, e.publickey_exp),
          i = o.encrypt(t, r);
        return !1 === i ? null : i;
      }
      function d(t, e, r) {
        return Object(i.a)(this, void 0, void 0, function* () {
          if (
            ((r = Object.assign({}, r)).strUserName &&
              (r.strUserName = r.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !r.strPassword || r.strPassword.match(/[^\x00-\x7F]/))
          )
            return null;
          if (!r.strUserName) return null;
          let n = yield (function (t, e) {
            return Object(i.a)(this, void 0, void 0, function* () {
              let r = u();
              r.append("username", e);
              let i,
                n = a(t, "getrsakey");
              try {
                let t = yield s.a.post(n, r);
                if (200 != t.status) return null;
                let e = t.data;
                if (
                  !(
                    e &&
                    e.success &&
                    e.publickey_mod &&
                    e.publickey_exp &&
                    e.timestamp
                  )
                )
                  return null;
                i = e;
              } catch (t) {
                return null;
              }
              return i;
            });
          })(t, r.strUserName);
          return n
            ? yield (function (t, e, r, n) {
                return Object(i.a)(this, void 0, void 0, function* () {
                  const i = c(r.strPassword, n);
                  if (!i) return null;
                  let o = u();
                  o.append("password", i),
                    o.append("username", r.strUserName),
                    o.append("twofactorcode", r.strTwoFactorCode || ""),
                    o.append("emailauth", r.strEmailAuthCode || ""),
                    o.append("loginfriendlyname", ""),
                    o.append("captchagid", r.gidCaptcha || ""),
                    o.append("captcha_text", r.strCaptchaText || ""),
                    o.append("emailsteamid", r.emailSteamID || ""),
                    o.append("rsatimestamp", n.timestamp),
                    o.append(
                      "remember_login",
                      r.bRememberLogin ? "true" : "false"
                    );
                  let h = {};
                  e &&
                    (o.append("oauth_client_id", e),
                    o.append("mobile_chat_client", "true"));
                  let l,
                    d = a(t, "dologin");
                  try {
                    let t = yield s.a.post(d, o, h);
                    if (200 != t.status) return null;
                    let e = t.data;
                    if (!e) return null;
                    e.oauth && (e.oauth = JSON.parse(e.oauth)), (l = e);
                  } catch (t) {
                    return null;
                  }
                  return l;
                });
              })(t, e, r, n)
            : (console.log("Failed to get RSA key"), null);
        });
      }
    },
    rmVU: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return d;
      });
      var i = r("mrSG"),
        n = r("H7XF"),
        s = r("hRO2"),
        o = r("9XWO"),
        a = r("vYsE"),
        u = r("vDqi"),
        h = r.n(u),
        l = (r("msu0"), r("rMum")),
        c = (r("6cEw"), r("oleE"));
      r("XThB"), r("3dpo");
      s.Message;
      class d {
        constructor(t, e, r = !1) {
          (this.m_webApiAccessToken = ""),
            (this.m_bJsonMode = !1),
            (this.m_strWebAPIBaseURL = t),
            (this.m_webApiAccessToken = e),
            (this.m_bJsonMode = r),
            this.ConstructServiceTransport();
        }
        WaitUntilLoggedOn() {
          return Promise.resolve();
        }
        GetServerRTime32() {
          return Number(new Date());
        }
        get steamid() {
          return new c.a();
        }
        RTime32ToDate(t) {
          return new Date(1e3 * t);
        }
        GetServiceTransport() {
          return this.m_ServiceTransport;
        }
        GetWebAPIAccessToken() {
          return this.m_webApiAccessToken;
        }
        GetAnonymousServiceTransport() {
          return this.m_AnonymousServiceTransport;
        }
        ConstructServiceTransport() {
          (this.m_ServiceTransport = {
            SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
            SendNotification: this.SendNotification.bind(this, {
              bSendAuth: !0,
            }),
          }),
            (this.m_AnonymousServiceTransport = {
              SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
                bSendAuth: !1,
              }),
              SendNotification: this.SendNotification.bind(this, {
                bSendAuth: !1,
              }),
            });
        }
        SendMsgAndAwaitResponse(t, e, r, n, a) {
          var u;
          return Object(i.a)(this, void 0, void 0, function* () {
            let i = null;
            try {
              let u = yield this.Send(t, e, r, a);
              if (200 != u.status || !u.data) throw new Error("Request Error");
              if (
                ((i = o.b.Init(n, 147)),
                u.headers &&
                  (u.headers["x-eresult"] &&
                    i.Hdr().set_eresult(parseInt(u.headers["x-eresult"])),
                  u.headers["x-error_message"] &&
                    i.Hdr().set_error_message(u.headers["x-error_message"])),
                this.m_bJsonMode)
              )
                i.SetBodyJSON(u.data.response);
              else {
                let t = new l.b(u.data),
                  e = new s.BinaryReader(
                    t.GetPacket(),
                    t.TellGet(),
                    t.GetCountBytesRemaining()
                  );
                n.deserializeBinaryFromReader(i.Body(), e);
              }
              0;
            } catch (t) {
              const e =
                401 ===
                (null === (u = null == t ? void 0 : t.response) || void 0 === u
                  ? void 0
                  : u.status)
                  ? "Unauthorized"
                  : null;
              i = this.CreateFailedMsgProtobuf(n, 3, e);
            }
            return i;
          });
        }
        SendNotification(t, e, r, i) {
          return this.Send(t, e, r, i), !0;
        }
        Send(t, e, r, i) {
          let s = this.CreateWebAPIURL(e),
            o = r.SerializeBody(),
            a = n.fromByteArray(o);
          const u = i.eWebAPIKeyRequirement;
          let l = 0 == i.ePrivilege && 1 == u,
            c = {
              responseType: this.m_bJsonMode ? "json" : "arraybuffer",
              params: {},
            };
          if (
            (t.bSendAuth ||
              1 == u ||
              console.error(
                `Attempting to invoke service ${e} without auth, but auth is required.`
              ),
            this.m_webApiAccessToken &&
              t.bSendAuth &&
              !l &&
              (c.params.access_token = this.m_webApiAccessToken),
            !i.bConstMethod)
          ) {
            const t = new FormData();
            return (
              this.m_bJsonMode
                ? t.append("input_json", JSON.stringify(r.Body().toObject()))
                : t.append("input_protobuf_encoded", a),
              h.a.post(s, t, c)
            );
          }
          return (
            this.m_bJsonMode
              ? (c.params = Object.assign(Object.assign({}, c.params), {
                  input_json: JSON.stringify(r.Body().toObject()),
                }))
              : (c.params = Object.assign(Object.assign({}, c.params), {
                  input_protobuf_encoded: a,
                })),
            h.a.get(s, c)
          );
        }
        CreateWebAPIURL(t) {
          let e = t.match(/([^\.]+)\.(.+)#(\d+)/);
          return e && 4 == e.length
            ? `${this.m_strWebAPIBaseURL}I${e[1]}Service/${e[2]}/v${e[3]}`
            : null;
        }
        CreateFailedMsgProtobuf(t, e, r) {
          let i = o.b.Init(t);
          return (
            i.Hdr().set_eresult(2),
            i.Hdr().set_transport_error(e),
            r && i.Hdr().set_error_message(r),
            i
          );
        }
      }
      Object(i.b)([a.a], d.prototype, "SendMsgAndAwaitResponse", null),
        Object(i.b)([a.a], d.prototype, "SendNotification", null),
        Object(i.b)([a.a], d.prototype, "Send", null);
    },
  },
]);
//# sourceMappingURL=libraryroot~login~sp.js.map
