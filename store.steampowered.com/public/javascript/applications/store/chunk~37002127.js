/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "Zj3+": function (e, r, t) {
      "use strict";
      t.d(r, "c", function () {
        return s;
      }),
        t.d(r, "b", function () {
          return f;
        }),
        t.d(r, "d", function () {
          return R;
        }),
        t.d(r, "a", function () {
          return S;
        });
      var i = t("hRO2"),
        n = t("3dpo");
      const a = i.Message;
      class s extends a {
        constructor(e = null) {
          super(),
            s.prototype.country_code || n.a(s.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  country_code: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = n.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(s.M(), e, r);
        }
        static fromObject(e) {
          return n.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new s();
          return s.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(s.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(s.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.promotions || n.a(o.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: { promotions: { n: 1, c: c, r: !0, q: !0 } },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(o.M(), e, r);
        }
        static fromObject(e) {
          return n.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.promotionid || n.a(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  promotionid: {
                    n: 1,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  promotion_description: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  minimum_cart_amount: {
                    n: 3,
                    br: n.d.readInt64String,
                    bw: n.h.writeInt64String,
                  },
                  minimum_cart_amount_for_display: {
                    n: 4,
                    br: n.d.readInt64String,
                    bw: n.h.writeInt64String,
                  },
                  discount_amount: {
                    n: 5,
                    br: n.d.readInt64String,
                    bw: n.h.writeInt64String,
                  },
                  currency_code: {
                    n: 6,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  available_use_count: {
                    n: 7,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  promotional_discount_type: {
                    n: 8,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  loyalty_reward_id: {
                    n: 9,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  localized_name_token: {
                    n: 10,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  max_use_count: {
                    n: 11,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(c.M(), e, r);
        }
        static fromObject(e) {
          return n.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.has_wallet || n.a(u.M()),
            a.initialize(this, e, 0, -1, [13], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  has_wallet: { n: 1, br: n.d.readBool, bw: n.h.writeBool },
                  user_country_code: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  wallet_country_code: {
                    n: 3,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  wallet_state: {
                    n: 4,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  balance: {
                    n: 5,
                    br: n.d.readInt64String,
                    bw: n.h.writeInt64String,
                  },
                  delayed_balance: {
                    n: 6,
                    br: n.d.readInt64String,
                    bw: n.h.writeInt64String,
                  },
                  currency_code: {
                    n: 7,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  time_most_recent_txn: {
                    n: 8,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  most_recent_txnid: {
                    n: 9,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  balance_in_usd: {
                    n: 10,
                    br: n.d.readInt64String,
                    bw: n.h.writeInt64String,
                  },
                  delayed_balance_in_usd: {
                    n: 11,
                    br: n.d.readInt64String,
                    bw: n.h.writeInt64String,
                  },
                  has_wallet_in_other_regions: {
                    n: 12,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  other_regions: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: n.d.readInt32,
                    bw: n.h.writeRepeatedInt32,
                  },
                  formatted_balance: {
                    n: 14,
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
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(u.M(), e, r);
        }
        static fromObject(e) {
          return n.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetWalletDetails_Response";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.pwid || n.a(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  pwid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  identity_verification: {
                    n: 2,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  performed_age_verification: {
                    n: 3,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(l.M(), e, r);
        }
        static fromObject(e) {
          return n.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAccountLinkStatus_Response";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CancelLicenseForApp_Response";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(),
            m.prototype.country || n.a(m.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  country: { n: 1, br: n.d.readString, bw: n.h.writeString },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(m.M(), e, r);
        }
        static fromObject(e) {
          return n.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetUserCountry_Response";
        }
      }
      class B extends a {
        constructor(e = null) {
          super(),
            B.prototype.invite_token || n.a(B.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  invite_token: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  invite_limit: {
                    n: 2,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  invite_duration: {
                    n: 3,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  time_created: {
                    n: 4,
                    br: n.d.readFixed32,
                    bw: n.h.writeFixed32,
                  },
                  valid: { n: 5, br: n.d.readBool, bw: n.h.writeBool },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(B.M(), e, r);
        }
        static fromObject(e) {
          return n.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CreateFriendInviteToken_Response";
        }
      }
      class b extends a {
        constructor(e = null) {
          super(),
            b.prototype.tokens || n.a(b.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { tokens: { n: 1, c: B, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(b.M(), e, r);
        }
        static fromObject(e) {
          return n.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetFriendInviteTokens_Response";
        }
      }
      class _ extends a {
        constructor(e = null) {
          super(),
            _.prototype.valid || n.a(_.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  valid: { n: 1, br: n.d.readBool, bw: n.h.writeBool },
                  steamid: {
                    n: 2,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  invite_duration: {
                    n: 3,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(_.M(), e, r);
        }
        static fromObject(e) {
          return n.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_ViewFriendInviteToken_Response";
        }
      }
      class g extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RedeemFriendInviteToken_Response";
        }
      }
      class y extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RevokeFriendInviteToken_Response";
        }
      }
      class w extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RegisterCompatTool_Response";
        }
      }
      class f extends a {
        constructor(e = null) {
          super(),
            f.prototype.account_type || n.a(f.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  account_type: { n: 1, br: n.d.readEnum, bw: n.h.writeEnum },
                  account_id: {
                    n: 2,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  filter: { n: 3, br: n.d.readEnum, bw: n.h.writeEnum },
                  return_access_token: {
                    n: 4,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(f.M(), e, r);
        }
        static fromObject(e) {
          return n.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Request";
        }
      }
      class M extends a {
        constructor(e = null) {
          super(),
            M.prototype.external_accounts || n.a(M.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { external_accounts: { n: 1, c: z, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(M.M(), e, r);
        }
        static fromObject(e) {
          return n.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Response";
        }
      }
      class z extends a {
        constructor(e = null) {
          super(),
            z.prototype.external_type || n.a(z.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  external_type: { n: 1, br: n.d.readEnum, bw: n.h.writeEnum },
                  external_id: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  external_user_name: {
                    n: 3,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  external_url: {
                    n: 4,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  access_token: {
                    n: 5,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  access_token_secret: {
                    n: 6,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  is_valid: { n: 7, br: n.d.readBool, bw: n.h.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(z.M(), e, r);
        }
        static fromObject(e) {
          return n.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response";
        }
      }
      class h extends a {
        constructor(e = null) {
          super(),
            h.prototype.steamid || n.a(h.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  client_token: { n: 2, br: n.d.readBytes, bw: n.h.writeBytes },
                  expiry: { n: 3, br: n.d.readUint32, bw: n.h.writeUint32 },
                  deviceid: { n: 4, br: n.d.readUint32, bw: n.h.writeUint32 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(h.M(), e, r);
        }
        static fromObject(e) {
          return n.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_Token";
        }
      }
      class p extends a {
        constructor(e = null) {
          super(),
            p.prototype.result || n.a(p.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  result: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  token: { n: 2, c: h },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(p.M(), e, r);
        }
        static fromObject(e) {
          return n.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_AuthorizeDevice_Response";
        }
      }
      var R, S, v;
      !(function (e) {
        (e.GetAvailableValveDiscountPromotions = function (e, r) {
          return e.SendMsg(
            "UserAccount.GetAvailableValveDiscountPromotions#1",
            r,
            o,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
          );
        }),
          (e.GetClientWalletDetails = function (e, r) {
            return e.SendMsg("UserAccount.GetClientWalletDetails#1", r, u, {
              ePrivilege: 1,
            });
          }),
          (e.GetAccountLinkStatus = function (e, r) {
            return e.SendMsg("UserAccount.GetAccountLinkStatus#1", r, l, {
              ePrivilege: 1,
            });
          }),
          (e.CancelLicenseForApp = function (e, r) {
            return e.SendMsg("UserAccount.CancelLicenseForApp#1", r, d, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserCountry = function (e, r) {
            return e.SendMsg("UserAccount.GetUserCountry#1", r, m, {
              ePrivilege: 1,
            });
          }),
          (e.CreateFriendInviteToken = function (e, r) {
            return e.SendMsg("UserAccount.CreateFriendInviteToken#1", r, B, {
              ePrivilege: 3,
            });
          }),
          (e.GetFriendInviteTokens = function (e, r) {
            return e.SendMsg("UserAccount.GetFriendInviteTokens#1", r, b, {
              ePrivilege: 1,
            });
          }),
          (e.ViewFriendInviteToken = function (e, r) {
            return e.SendMsg("UserAccount.ViewFriendInviteToken#1", r, _, {
              ePrivilege: 1,
            });
          }),
          (e.RedeemFriendInviteToken = function (e, r) {
            return e.SendMsg("UserAccount.RedeemFriendInviteToken#1", r, g, {
              ePrivilege: 1,
            });
          }),
          (e.RevokeFriendInviteToken = function (e, r) {
            return e.SendMsg("UserAccount.RevokeFriendInviteToken#1", r, y, {
              ePrivilege: 1,
            });
          }),
          (e.RegisterCompatTool = function (e, r) {
            return e.SendMsg("UserAccount.RegisterCompatTool#1", r, w, {
              ePrivilege: 1,
            });
          });
      })(R || (R = {})),
        (function (e) {
          e.GetLinkedAccountInfo = function (e, r) {
            return e.SendMsg("AccountLinking.GetLinkedAccountInfo#1", r, M, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          };
        })(S || (S = {})),
        (function (e) {
          e.AuthorizeCurrentDevice = function (e, r) {
            return e.SendMsg("EmbeddedClient.AuthorizeCurrentDevice#1", r, p, {
              ePrivilege: 1,
            });
          };
        })(v || (v = {}));
    },
    pSt8: function (e, r, t) {
      "use strict";
      t.d(r, "f", function () {
        return n;
      }),
        t.d(r, "g", function () {
          return a;
        }),
        t.d(r, "b", function () {
          return o;
        }),
        t.d(r, "i", function () {
          return c;
        }),
        t.d(r, "a", function () {
          return u;
        }),
        t.d(r, "e", function () {
          return d;
        }),
        t.d(r, "d", function () {
          return m;
        }),
        t.d(r, "h", function () {
          return B;
        }),
        t.d(r, "c", function () {
          return b;
        });
      var i = t("/Q1a");
      t("Zdsb");
      function n(e) {
        let r = new RegExp(
            "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
            "im"
          ),
          t = e.match(r);
        return t && t.length > 5 ? t[6].toString() : e;
      }
      function a(e) {
        let r = n(e);
        return r.startsWith("www.") && (r = r.slice(4)), r;
      }
      const s = /^(steam|ftp|https?):\/\//;
      function o(e) {
        return s.test(e) ? e : "https://" + e;
      }
      function c(e) {
        return 1 != i.d.EUNIVERSE
          ? e
          : ("http:" == e.substring(0, 5) && (e = "https:" + e.substring(5)),
            (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
              (e = (e = e.replace(
                /https:\/\/media.steampowered.com\//g,
                i.d.MEDIA_CDN_URL
              )).replace(
                /https:\/\/cdn.akamai.steamstatic.com\//g,
                i.d.MEDIA_CDN_URL
              )).replace(
                /https:\/\/cdn.cloudflare.steamstatic.com\//g,
                i.d.MEDIA_CDN_URL
              )).replace(
              /https:\/\/cdn.edgecast.steamstatic.com\//g,
              i.d.MEDIA_CDN_URL
            )).replace(
              /https:\/\/cdn.dota2.com\//g,
              i.d.MEDIA_CDN_URL
            )).replace(
              /https:\/\/storefront.steampowered.com\/v\/gfx\//g,
              i.d.MEDIA_CDN_URL + "steam/"
            )).replace(
              /https:\/\/cdn.steamcommunity.com\//g,
              i.d.COMMUNITY_CDN_URL
            )).replace(
              /https:\/\/community.akamai.steamstatic.com\//g,
              i.d.COMMUNITY_CDN_URL
            )).replace(
              /https:\/\/community.cloudflare.steamstatic.com\//g,
              i.d.COMMUNITY_CDN_URL
            )).replace(
              /https:\/\/community.edgecast.steamstatic.com\//g,
              i.d.COMMUNITY_CDN_URL
            )).replace(/^{IMG_URL}/g, i.d.IMG_URL)).replace(
              /^{MEDIA_CDN_URL}/g,
              i.d.MEDIA_CDN_URL
            )).replace(
              /^{MEDIA_CDN_COMMUNITY_URL}/g,
              i.d.MEDIA_CDN_COMMUNITY_URL
            )).replace(/^{COMMUNITY_CDN_URL}/g, i.d.COMMUNITY_CDN_URL)).replace(
              /^{STEAM_CLAN_IMAGE}/g,
              i.d.MEDIA_CDN_COMMUNITY_URL + "images/clans/"
            )));
      }
      function u(e) {
        if (!e) return !0;
        const r = n(e).toLocaleLowerCase();
        return (
          [
            n(i.d.COMMUNITY_CDN_URL).toLocaleLowerCase(),
            n(i.d.MEDIA_CDN_URL).toLocaleLowerCase(),
            n(i.d.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
            n(i.d.STORE_CDN_URL).toLocaleLowerCase(),
            "support.steampowered.com",
            "steamcdn-a.akamaihd.net",
            "cdn.cloudflare.steamstatic.com",
            "cdn.akamai.steamstatic.com",
          ].indexOf(r) >= 0
        );
      }
      function l(e, r) {
        return `${i.d.MEDIA_CDN_URL}steam/apps/${e}/${r}`;
      }
      function d(e) {
        return l(e, "page_bg_generated.jpg");
      }
      function m(e) {
        return l(e, "page_bg_generated_v6b.jpg");
      }
      function B(e) {
        return i.d.SNR &&
          i.d.SNR.length > 0 &&
          e &&
          -1 == e.toLocaleLowerCase().indexOf("snr=")
          ? e + (e.indexOf("?") >= 0 ? "&" : "?") + "snr=" + i.d.SNR
          : e;
      }
      function b(e, r) {
        try {
          const t = new URL(r),
            i = new URL(e);
          return t.origin + i.pathname + i.search + i.hash;
        } catch (e) {
          return "";
        }
      }
    },
  },
]);
