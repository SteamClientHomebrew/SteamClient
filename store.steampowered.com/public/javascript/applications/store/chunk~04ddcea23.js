/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2823],
  {
    5194: (e, r, t) => {
      t.d(r, { AY: () => o, KQ: () => l, _v: () => n, q8: () => c });
      var i = t(33019),
        s = t(40110);
      const a = i.Message;
      class n extends a {
        constructor(e = null) {
          super(),
            n.prototype.sale_filter || s.aR(n.M()),
            a.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            n.sm_m ||
              (n.sm_m = {
                proto: n,
                fields: {
                  sale_filter: { n: 1, c: l },
                  content_hub_filter: { n: 2, c: o },
                  store_filters: { n: 3, c: u, r: !0, q: !0 },
                },
              }),
            n.sm_m
          );
        }
        static MBF() {
          return n.sm_mbf || (n.sm_mbf = s.Bh(n.M())), n.sm_mbf;
        }
        toObject(e = !1) {
          return n.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(n.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(n.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new n();
          return n.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(n.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(n.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.sale_tagid || s.aR(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  sale_tagid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_SalePageFilter";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.hub_type || s.aR(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  hub_type: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  hub_category: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  hub_tagid: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  discount_filter: {
                    n: 4,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  optin: { n: 5, c },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.name || s.aR(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  name: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  optin_tagid: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  prune_tagid: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter_OptInInfo";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.filter_json || s.aR(u.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  filter_json: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  cache_key: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_StoreFilter";
        }
      }
    },
    13328: (e, r, t) => {
      var i = t(33019);
      t(40110);
      i.Message;
    },
    39722: (e, r, t) => {
      t.d(r, { Bn: () => M, Pe: () => u, UD: () => b });
      var i = t(33019),
        s = t(40110),
        a = t(990);
      const n = i.Message;
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.gid || s.aR(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  visibility: { n: 4, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  priority: { n: 5, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  association_type: {
                    n: 6,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  start_date: {
                    n: 9,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  end_date: {
                    n: 10,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  country_allow: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  flags: { n: 22, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  creator_name: {
                    n: 23,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageProto";
        }
      }
      class o extends n {
        constructor(e = null) {
          super(),
            o.prototype.gid || s.aR(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  associated_item_id: { n: 4, c: a.oY },
                  associated_item: { n: 5, c: a.VL },
                  associated_name: {
                    n: 6,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_type: {
                    n: 10,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDisplayMarketingMessage";
        }
      }
      class c extends n {
        constructor(e = null) {
          super(),
            c.prototype.messages || s.aR(c.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  messages: { n: 1, c: l, r: !0, q: !0 },
                  time_next_message_age: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class u extends n {
        constructor(e = null) {
          super(),
            u.prototype.include_seen_messages || s.aR(u.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  include_seen_messages: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  country_code: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  elanguage: { n: 3, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  context: { n: 6, c: a.WJ },
                  data_request: { n: 7, c: a.Qn },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Request";
        }
      }
      class m extends n {
        constructor(e = null) {
          super(),
            m.prototype.messages || s.aR(m.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: { messages: { n: 1, c: d, r: !0, q: !0 } },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(),
            d.prototype.already_seen || s.aR(d.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  already_seen: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  message: { n: 2, c: o },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
        }
      }
      class _ extends n {
        constructor(e = null) {
          super(),
            _.prototype.has_pending_messages || s.aR(_.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  has_pending_messages: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  pending_message_count: {
                    n: 2,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
        }
      }
      class B extends n {
        constructor(e = null) {
          super(),
            B.prototype.message || s.aR(B.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = { proto: B, fields: { message: { n: 1, c: o } } }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Response";
        }
      }
      class b extends n {
        constructor(e = null) {
          super(),
            b.prototype.gid || s.aR(b.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_MarkMessageSeen_Notification";
        }
      }
      class g extends n {
        constructor(e = null) {
          super(),
            g.prototype.message || s.aR(g.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = { proto: g, fields: { message: { n: 1, c: l } } }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class h extends n {
        constructor(e = null) {
          super(),
            h.prototype.messages || s.aR(h.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { messages: { n: 1, c: l, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class y extends n {
        constructor(e = null) {
          super(),
            y.prototype.gid || s.aR(y.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class w extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class p extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      var M;
      !(function (e) {
        (e.GetActiveMarketingMessages = function (e, r) {
          return e.SendMsg(
            "MarketingMessages.GetActiveMarketingMessages#1",
            r,
            c,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
          );
        }),
          (e.GetMarketingMessagesForUser = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              r,
              m,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.DoesUserHavePendingMarketingMessages = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
              r,
              _,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.GetDisplayMarketingMessage = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              r,
              B,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.MarkMessageSeen = function (e, r) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              r,
              { ePrivilege: 1 }
            );
          }),
          (e.GetMarketingMessage = function (e, r) {
            return e.SendMsg("MarketingMessages.GetMarketingMessage#1", r, g, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.CreateMarketingMessage = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              r,
              y,
              { ePrivilege: 4 }
            );
          }),
          (e.UpdateMarketingMessage = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              r,
              w,
              { ePrivilege: 4 }
            );
          }),
          (e.DeleteMarketingMessage = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              r,
              p,
              { ePrivilege: 4 }
            );
          }),
          (e.FindMarketingMessages = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              r,
              h,
              { ePrivilege: 4 }
            );
          });
      })(M || (M = {}));
    },
    990: (e, r, t) => {
      t.d(r, {
        Qn: () => T,
        VJ: () => D,
        VL: () => l,
        WJ: () => W,
        cR: () => j,
        eK: () => O,
        oY: () => E,
      });
      var i = t(33019),
        s = t(40110);
      t(13328), t(21205);
      const a = i.Message;
      class n extends a {
        constructor(e = null) {
          super(),
            n.prototype.type || s.aR(n.M()),
            a.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            n.sm_m ||
              (n.sm_m = {
                proto: n,
                fields: {
                  type: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  rating: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  descriptors: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.FE.readString,
                    bw: s.Xc.writeRepeatedString,
                  },
                  interactive_elements: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  required_age: {
                    n: 10,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  use_age_gate: {
                    n: 11,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  image_url: {
                    n: 20,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  image_target: {
                    n: 21,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            n.sm_m
          );
        }
        static MBF() {
          return n.sm_mbf || (n.sm_mbf = s.Bh(n.M())), n.sm_mbf;
        }
        toObject(e = !1) {
          return n.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(n.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(n.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new n();
          return n.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(n.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(n.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreGameRating";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.item_type || s.aR(l.M()),
            a.initialize(
              this,
              e,
              0,
              -1,
              [11, 12, 20, 21, 25, 41, 42, 52],
              null
            );
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  item_type: { n: 1, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  id: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  success: { n: 3, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  visible: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                  unvailable_for_country_restriction: {
                    n: 5,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  name: { n: 6, br: s.FE.readString, bw: s.Xc.writeString },
                  store_url_path: {
                    n: 7,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  appid: { n: 9, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  type: { n: 10, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  included_types: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  included_appids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  is_free: { n: 13, br: s.FE.readBool, bw: s.Xc.writeBool },
                  is_early_access: {
                    n: 14,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  related_items: { n: 15, c: o },
                  content_descriptorids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  categories: { n: 22, c },
                  reviews: { n: 23, c: u },
                  basic_info: { n: 24, c: d },
                  tags: { n: 25, c: B, r: !0, q: !0 },
                  assets: { n: 30, c: b },
                  release: { n: 31, c: g },
                  platforms: { n: 32, c: h },
                  game_rating: { n: 33, c: n },
                  best_purchase_option: { n: 40, c: w },
                  purchase_options: { n: 41, c: w, r: !0, q: !0 },
                  accessories: { n: 42, c: w, r: !0, q: !0 },
                  screenshots: { n: 50, c: M },
                  trailers: { n: 51, c: R },
                  supported_languages: { n: 52, c: S, r: !0, q: !0 },
                  store_url_path_override: {
                    n: 53,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  free_weekend: { n: 54, c: v },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.parent_appid || s.aR(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_RelatedItems";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.supported_player_categoryids || s.aR(c.M()),
            a.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  supported_player_categoryids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  feature_categoryids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  controller_categoryids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Categories";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.summary_filtered || s.aR(u.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  summary_filtered: { n: 1, c: m },
                  summary_unfiltered: { n: 2, c: m },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(),
            m.prototype.review_count || s.aR(m.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  review_count: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  percent_positive: {
                    n: 2,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  review_score: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  review_score_label: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews_StoreReviewSummary";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.short_description || s.aR(d.M()),
            a.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  short_description: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  publishers: { n: 2, c: _, r: !0, q: !0 },
                  developers: { n: 3, c: _, r: !0, q: !0 },
                  franchises: { n: 4, c: _, r: !0, q: !0 },
                  capsule_headline: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo";
        }
      }
      class _ extends a {
        constructor(e = null) {
          super(),
            _.prototype.name || s.aR(_.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  name: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  creator_clan_account_id: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo_CreatorHomeLink";
        }
      }
      class B extends a {
        constructor(e = null) {
          super(),
            B.prototype.tagid || s.aR(B.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  tagid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  weight: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Tag";
        }
      }
      class b extends a {
        constructor(e = null) {
          super(),
            b.prototype.asset_url_format || s.aR(b.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  asset_url_format: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  main_capsule: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  small_capsule: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  header: { n: 4, br: s.FE.readString, bw: s.Xc.writeString },
                  package_header: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  page_background: {
                    n: 6,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  hero_capsule: {
                    n: 7,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  hero_capsule_2x: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_capsule: {
                    n: 9,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_capsule_2x: {
                    n: 10,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_hero: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_hero_2x: {
                    n: 12,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  community_icon: {
                    n: 13,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Assets";
        }
      }
      class g extends a {
        constructor(e = null) {
          super(),
            g.prototype.steam_release_date || s.aR(g.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steam_release_date: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  original_release_date: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  original_steam_release_date: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  is_coming_soon: {
                    n: 4,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  is_preload: { n: 5, br: s.FE.readBool, bw: s.Xc.writeBool },
                  custom_release_date_message: {
                    n: 6,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  is_abridged_release_date: {
                    n: 7,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  coming_soon_display: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  is_early_access: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  mac_release_date: {
                    n: 20,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  linux_release_date: {
                    n: 21,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_ReleaseInfo";
        }
      }
      class h extends a {
        constructor(e = null) {
          super(),
            h.prototype.windows || s.aR(h.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  windows: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  mac: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                  steamos_linux: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  vr_support: { n: 10, c: y },
                  steam_deck_compat_category: {
                    n: 11,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms";
        }
      }
      class y extends a {
        constructor(e = null) {
          super(),
            y.prototype.vrhmd || s.aR(y.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  vrhmd: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  vrhmd_only: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                  htc_vive: { n: 40, br: s.FE.readBool, bw: s.Xc.writeBool },
                  oculus_rift: { n: 41, br: s.FE.readBool, bw: s.Xc.writeBool },
                  windows_mr: { n: 42, br: s.FE.readBool, bw: s.Xc.writeBool },
                  valve_index: { n: 43, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms_VRSupport";
        }
      }
      class w extends a {
        constructor(e = null) {
          super(),
            w.prototype.packageid || s.aR(w.M()),
            a.initialize(this, e, 0, -1, [20, 21, 22], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  packageid: { n: 1, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  bundleid: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  purchase_option_name: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  final_price_in_cents: {
                    n: 5,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  original_price_in_cents: {
                    n: 6,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  user_final_price_in_cents: {
                    n: 7,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  formatted_final_price: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  formatted_original_price: {
                    n: 9,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  discount_pct: {
                    n: 10,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  user_discount_pct: {
                    n: 11,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  bundle_discount_pct: {
                    n: 12,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  active_discounts: { n: 20, c: p, r: !0, q: !0 },
                  user_active_discounts: { n: 21, c: p, r: !0, q: !0 },
                  inactive_discounts: { n: 22, c: p, r: !0, q: !0 },
                  user_can_purchase: {
                    n: 30,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  user_can_purchase_as_gift: {
                    n: 31,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  is_commercial_license: {
                    n: 40,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  should_suppress_discount_pct: {
                    n: 41,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption";
        }
      }
      class p extends a {
        constructor(e = null) {
          super(),
            p.prototype.discount_amount || s.aR(p.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  discount_amount: {
                    n: 1,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  discount_description: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  discount_end_date: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_Discount";
        }
      }
      class M extends a {
        constructor(e = null) {
          super(),
            M.prototype.all_ages_screenshots || s.aR(M.M()),
            a.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  all_ages_screenshots: { n: 2, c: f, r: !0, q: !0 },
                  mature_content_screenshots: { n: 3, c: f, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots";
        }
      }
      class f extends a {
        constructor(e = null) {
          super(),
            f.prototype.filename || s.aR(f.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  filename: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  ordinal: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots_Screenshot";
        }
      }
      class R extends a {
        constructor(e = null) {
          super(),
            R.prototype.highlights || s.aR(R.M()),
            a.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  highlights: { n: 1, c: z, r: !0, q: !0 },
                  other_trailers: { n: 2, c: z, r: !0, q: !0 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = s.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers";
        }
      }
      class F extends a {
        constructor(e = null) {
          super(),
            F.prototype.filename || s.aR(F.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  filename: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = s.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_VideoSource";
        }
      }
      class z extends a {
        constructor(e = null) {
          super(),
            z.prototype.trailer_name || s.aR(z.M()),
            a.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  trailer_name: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  trailer_url_format: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  trailer_480p: { n: 3, c: F, r: !0, q: !0 },
                  trailer_max: { n: 4, c: F, r: !0, q: !0 },
                  microtrailer: { n: 5, c: F, r: !0, q: !0 },
                  screenshot_medium: {
                    n: 10,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  screenshot_full: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  trailer_base_id: {
                    n: 12,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = s.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_Trailer";
        }
      }
      class S extends a {
        constructor(e = null) {
          super(),
            S.prototype.elanguage || s.aR(S.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  elanguage: { n: 1, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  supported: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                  full_audio: { n: 3, br: s.FE.readBool, bw: s.Xc.writeBool },
                  subtitles: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_SupportedLanguage";
        }
      }
      class v extends a {
        constructor(e = null) {
          super(),
            v.prototype.start_time || s.aR(v.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  start_time: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  end_time: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  text: { n: 3, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = s.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_FreeWeekend";
        }
      }
      class T extends a {
        constructor(e = null) {
          super(),
            T.prototype.include_assets || s.aR(T.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  include_assets: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_release: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_platforms: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_all_purchase_options: {
                    n: 4,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_screenshots: {
                    n: 5,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_trailers: {
                    n: 6,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_ratings: {
                    n: 7,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_tag_count: {
                    n: 8,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  include_reviews: {
                    n: 9,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_basic_info: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_supported_languages: {
                    n: 11,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = s.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseItemDataRequest";
        }
      }
      class W extends a {
        constructor(e = null) {
          super(),
            W.prototype.language || s.aR(W.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  language: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  elanguage: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  country_code: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  steam_realm: {
                    n: 4,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = s.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseContext";
        }
      }
      class E extends a {
        constructor(e = null) {
          super(),
            E.prototype.appid || s.aR(E.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  packageid: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  bundleid: { n: 3, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = s.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItemID";
        }
      }
      class O extends a {
        constructor(e = null) {
          super(),
            O.prototype.ids || s.aR(O.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  ids: { n: 1, c: E, r: !0, q: !0 },
                  context: { n: 2, c: W },
                  data_request: { n: 3, c: T },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = s.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Request";
        }
      }
      class j extends a {
        constructor(e = null) {
          super(),
            j.prototype.store_items || s.aR(j.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { store_items: { n: 1, c: l, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = s.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Response";
        }
      }
      class I extends a {
        constructor(e = null) {
          super(),
            I.prototype.categories || s.aR(I.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { categories: { n: 1, c: C, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = s.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(I.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response";
        }
      }
      class C extends a {
        constructor(e = null) {
          super(),
            C.prototype.categoryid || s.aR(C.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  categoryid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  type: { n: 2, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  internal_name: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  display_name: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  image_url: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  show_in_search: {
                    n: 6,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = s.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response_Category";
        }
      }
      var D;
      !(function (e) {
        (e.GetItems = function (e, r) {
          return e.SendMsg("StoreBrowse.GetItems#1", r, j, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetStoreCategories = function (e, r) {
            return e.SendMsg("StoreBrowse.GetStoreCategories#1", r, I, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(D || (D = {}));
    },
    87931: (e, r, t) => {
      t.d(r, { $2: () => m, Ax: () => h, e8: () => B });
      var i = t(33019),
        s = t(40110),
        a = (t(13328), t(5194)),
        n = t(990);
      const l = i.Message;
      class o extends l {
        constructor(e = null) {
          super(),
            o.prototype.released_only || s.aR(o.M()),
            l.initialize(this, e, 0, -1, [10, 11, 15, 16, 45], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  released_only: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  coming_soon_only: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  type_filters: { n: 3, c },
                  tagids_must_match: { n: 10, c: u, r: !0, q: !0 },
                  tagids_exclude: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.FE.readInt32,
                    pbr: s.FE.readPackedInt32,
                    bw: s.Xc.writeRepeatedInt32,
                  },
                  content_descriptors_must_match: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  content_descriptors_excluded: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  regional_top_n_sellers: {
                    n: 40,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  global_top_n_sellers: {
                    n: 41,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  regional_long_term_top_n_sellers: {
                    n: 42,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  global_long_term_top_n_sellers: {
                    n: 43,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  store_page_filter: { n: 44, c: a._v },
                  parent_appids: {
                    n: 45,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters";
        }
      }
      class c extends l {
        constructor(e = null) {
          super(),
            c.prototype.include_apps || s.aR(c.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  include_apps: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  include_packages: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_bundles: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_games: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_demos: {
                    n: 11,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_mods: {
                    n: 12,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_dlc: { n: 13, br: s.FE.readBool, bw: s.Xc.writeBool },
                  include_software: {
                    n: 14,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_video: {
                    n: 15,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_hardware: {
                    n: 16,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_series: {
                    n: 17,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_music: {
                    n: 18,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TypeFilters";
        }
      }
      class u extends l {
        constructor(e = null) {
          super(),
            u.prototype.tagids || s.aR(u.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  tagids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.FE.readInt32,
                    pbr: s.FE.readPackedInt32,
                    bw: s.Xc.writeRepeatedInt32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TagFilter";
        }
      }
      class m extends l {
        constructor(e = null) {
          super(),
            m.prototype.start || s.aR(m.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  start: {
                    n: 1,
                    d: 0,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  count: {
                    n: 2,
                    d: 10,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  sort: { n: 10, d: 0, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  filters: { n: 20, c: o },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryParams";
        }
      }
      class d extends l {
        constructor(e = null) {
          super(),
            d.prototype.id || s.aR(d.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  id: { n: 1, c: n.oY },
                  score: { n: 2, br: s.FE.readDouble, bw: s.Xc.writeDouble },
                  spellcheck_generated_result: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryPerResultMetadata";
        }
      }
      class _ extends l {
        constructor(e = null) {
          super(),
            _.prototype.total_matching_records || s.aR(_.M()),
            l.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  total_matching_records: {
                    n: 1,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  start: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  count: { n: 3, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  per_result_metadata: { n: 4, c: d, r: !0, q: !0 },
                  spellcheck_suggestions: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: s.FE.readString,
                    bw: s.Xc.writeRepeatedString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryResultMetadata";
        }
      }
      class B extends l {
        constructor(e = null) {
          super(),
            B.prototype.query_name || s.aR(B.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  query_name: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  query: { n: 2, c: m },
                  context: { n: 3, c: n.WJ },
                  data_request: { n: 4, c: n.Qn },
                  override_country_code: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Request";
        }
      }
      class b extends l {
        constructor(e = null) {
          super(),
            b.prototype.metadata || s.aR(b.M()),
            l.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  metadata: { n: 1, c: _ },
                  ids: { n: 2, c: n.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: n.VL, r: !0, q: !0 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Response";
        }
      }
      class g extends l {
        constructor(e = null) {
          super(),
            g.prototype.metadata || s.aR(g.M()),
            l.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  metadata: { n: 1, c: _ },
                  ids: { n: 2, c: n.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: n.VL, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Response";
        }
      }
      var h;
      !(function (e) {
        (e.Query = function (e, r) {
          return e.SendMsg("StoreQuery.Query#1", r, b, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.SearchSuggestions = function (e, r) {
            return e.SendMsg("StoreQuery.SearchSuggestions#1", r, g, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(h || (h = {}));
    },
    32367: (e, r, t) => {
      t.d(r, { De: () => o, Fq: () => l, pA: () => n });
      var i = t(990),
        s = t(90666),
        a = (t(33019), t(58114), t(54698));
      t(87931);
      function n(e, r) {
        e.Body().set_context(l(r));
      }
      function l(e) {
        let r = new i.WJ();
        return (
          e || r.set_country_code(s.De.COUNTRY),
          r.set_language(s.De.LANGUAGE),
          s.De.EREALM != a.IN.k_ESteamRealmUnknown &&
            r.set_steam_realm(s.De.EREALM),
          r
        );
      }
      function o(e, r) {
        e.Body().set_data_request(i.Qn.fromObject(r));
      }
    },
    14146: (e, r, t) => {
      t.d(r, { Z: () => u });
      var i = t(22188),
        s = (t(26149), t(54698), t(13328), t(990), t(48116)),
        a = t(77520),
        n = t(41311),
        l = t(74891),
        o = t(90666);
      function c(e) {
        return (function (e, r, t) {
          switch (e) {
            case "date_full":
              return (0, n.vX)(r);
            case "date_month":
              return (0, l.LO)(new Date(1e3 * r));
            case "date_quarter":
              return (0, l.Kb)(new Date(1e3 * r));
            case "date_year":
              return (0, l.Np)(new Date(1e3 * r));
            case "text_comingsoon":
              return t || (0, n.Xx)("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return t || (0, n.Xx)("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        })(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message
        );
      }
      class u {
        constructor(e, r) {
          var t, i, s;
          (this.m_bVisible = !1),
            (this.m_rgStoreTags = []),
            (this.m_rgStoreTagIDs = []),
            (this.m_DataRequested = { include_tag_count: 0 }),
            (this.k_regexSalePage =
              /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//),
            (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = e.is_free()),
            (this.m_bIsEarlyAccess = e.is_early_access()),
            (this.m_RelatedItems =
              null === (t = e.related_items()) || void 0 === t
                ? void 0
                : t.toObject()),
            (this.m_ContentDescriptorIDs = e.content_descriptorids()),
            (this.m_StoreCategories = e.categories().toObject()),
            (this.m_BestPurchaseOption =
              null === (i = e.best_purchase_option()) || void 0 === i
                ? void 0
                : i.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend =
              null === (s = e.free_weekend()) || void 0 === s
                ? void 0
                : s.toObject()),
            this.MergeData(e, r);
        }
        MergeData(e, r) {
          r.include_assets &&
            !this.m_Assets &&
            ((this.m_Assets = new d(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            r.include_release &&
              !this.m_ReleaseInfo &&
              ((this.m_ReleaseInfo = e.release().toObject()),
              (this.m_DataRequested.include_release = !0)),
            r.include_platforms &&
              !this.m_Platforms &&
              ((this.m_Platforms = e.platforms().toObject()),
              (this.m_DataRequested.include_platforms = !0)),
            r.include_all_purchase_options &&
              !this.m_rgPurchaseOptions &&
              ((this.m_rgPurchaseOptions = e
                .purchase_options()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_all_purchase_options = !0)),
            r.include_screenshots &&
              !this.m_Screenshots &&
              ((this.m_Screenshots = new b(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            r.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new _(e.trailers())),
              (this.m_DataRequested.include_trailers = !0)),
            r.include_tag_count > this.m_rgStoreTags.length &&
              this.m_DataRequested.include_tag_count < r.include_tag_count &&
              ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
              (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
              (this.m_DataRequested.include_tag_count = Math.max(
                r.include_tag_count,
                this.m_rgStoreTags.length || 0
              ))),
            r.include_reviews &&
              !this.m_ReviewInfo &&
              ((this.m_ReviewInfo = e.reviews().toObject()),
              (this.m_DataRequested.include_reviews = !0)),
            r.include_basic_info &&
              !this.m_BasicInfo &&
              ((this.m_BasicInfo = e.basic_info().toObject()),
              (this.m_DataRequested.include_basic_info = !0)),
            r.include_supported_languages &&
              !this.m_rgSupportedLanguages &&
              ((this.m_rgSupportedLanguages = e
                .supported_languages()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_supported_languages = !0));
        }
        static BDataRequestContainsOtherDataRequest(e, r) {
          return Boolean(
            (!r.include_assets || e.include_assets) &&
              (!r.include_release || e.include_release) &&
              (!r.include_platforms || e.include_platforms) &&
              (!r.include_all_purchase_options ||
                e.include_all_purchase_options) &&
              (!r.include_screenshots || e.include_screenshots) &&
              (!r.include_trailers || e.include_trailers) &&
              (!r.include_ratings || e.include_ratings) &&
              (!r.include_tag_count ||
                (e.include_tag_count || 0) >= r.include_tag_count) &&
              (!r.include_reviews || e.include_reviews) &&
              (!r.include_basic_info || e.include_basic_info) &&
              (!r.include_supported_languages || e.include_supported_languages)
          );
        }
        BContainDataRequest(e) {
          return u.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != o.De.WEB_UNIVERSE && "beta" != o.De.WEB_UNIVERSE) ||
            (0, a.X)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, s.qE)(this.m_eItemType)} @ ${
                this.m_unID
              }`,
              (0, i.ZN)(e),
              (0, i.ZN)(this.m_DataRequested)
            );
        }
        GetStoreItemType() {
          return this.m_eItemType;
        }
        GetID() {
          return this.m_unID;
        }
        GetUniqueID() {
          return this.m_eItemType + "_" + this.m_unID;
        }
        BIsVisible() {
          return this.m_bVisible;
        }
        GetName() {
          return this.m_strName;
        }
        GetStorePageURL() {
          return o.De.STORE_BASE_URL + this.m_strStoreURLPath;
        }
        GetStorePageURLWithOverride() {
          var e;
          return (null === (e = this.m_strStoreURLPathOverride) || void 0 === e
            ? void 0
            : e.length) > 0
            ? this.GetStorePageURLOverride()
            : this.GetStorePageURL();
        }
        GetStorePageURLOverride() {
          return this.m_strStoreURLPathOverride;
        }
        GetCommunityPageURL() {
          return this.GetAppID()
            ? o.De.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? o.De.COMMUNITY_BASE_URL +
                "app/" +
                this.GetAppID() +
                "/discussions/"
            : null;
        }
        GetAppID() {
          return this.m_unAppID;
        }
        GetAppIDToRun() {
          const e = this.GetParentAppID();
          return e && 11 != this.m_eAppType ? e : this.GetAppID();
        }
        GetAppType() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 6 == this.GetAppType() || 13 == this.GetAppType();
        }
        BIsSalePage() {
          return (
            0 === this.GetStoreItemType() &&
            this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
          );
        }
        GetSalePageVanityURL() {
          let e = this.GetStorePageURLWithOverride();
          return (
            0 === this.GetStoreItemType() &&
              ((e = this.GetStorePageURLWithOverride().replace(
                this.k_regexSalePage,
                ""
              )),
              e.endsWith("/") && (e = e.replace("/", ""))),
            e
          );
        }
        GetIncludedAppTypes() {
          return this.m_rgIncludedAppTypes;
        }
        GetIncludedAppIDs() {
          return this.m_rgIncludedAppIDs;
        }
        GetIncludedAppIDsOrSelf() {
          return 0 == this.GetStoreItemType()
            ? [this.GetID()]
            : this.GetIncludedAppIDs();
        }
        BIsFree() {
          return this.m_bIsFree;
        }
        BIsFreeWeekend() {
          const e = Date.now() / 1e3;
          return (
            Boolean(this.m_freeWeekend) &&
            this.m_freeWeekend.start_time <= e &&
            e <= this.m_freeWeekend.end_time
          );
        }
        GetFreeWeekendEnd() {
          var e;
          return null === (e = this.m_freeWeekend) || void 0 === e
            ? void 0
            : e.end_time;
        }
        GetFreeWeekendPlayTextOverride() {
          var e;
          return null === (e = this.m_freeWeekend) || void 0 === e
            ? void 0
            : e.text;
        }
        BIsEarlyAccess() {
          return this.m_bIsEarlyAccess;
        }
        GetParentAppID() {
          var e;
          return null === (e = this.m_RelatedItems) || void 0 === e
            ? void 0
            : e.parent_appid;
        }
        GetContentDescriptorIDs() {
          return this.m_ContentDescriptorIDs;
        }
        HasContentDescriptorID(e) {
          var r;
          return null === (r = this.m_ContentDescriptorIDs) || void 0 === r
            ? void 0
            : r.includes(e);
        }
        GetStoreCategories_SupportedPlayers() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.supported_player_categoryids) || []
          );
        }
        GetStoreCategories_Features() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.feature_categoryids) || []
          );
        }
        GetStoreCategories_Controller() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.controller_categoryids) || []
          );
        }
        BHasStoreCategory(e) {
          return Boolean(
            this.GetStoreCategories_SupportedPlayers().find((r) => e === r) ||
              this.GetStoreCategories_Features().find((r) => e === r) ||
              this.GetStoreCategories_Controller().find((r) => e === r)
          );
        }
        GetFilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo.summary_unfiltered ||
              this.m_ReviewInfo.summary_filtered
          );
        }
        GetShortDescription() {
          var e, r;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (r =
                null === (e = this.m_BasicInfo) || void 0 === e
                  ? void 0
                  : e.short_description) && void 0 !== r
              ? r
              : ""
          );
        }
        GetDeveloperNames() {
          var e, r, t, i;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (i =
                null ===
                  (t =
                    null ===
                      (r =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.developers) || void 0 === r
                      ? void 0
                      : r.map((e) => e.name.trim())) || void 0 === t
                  ? void 0
                  : t.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : []
          );
        }
        GetFranchiseNames() {
          var e, r, t, i;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (i =
                null ===
                  (t =
                    null ===
                      (r =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.franchises) || void 0 === r
                      ? void 0
                      : r.map((e) => e.name.trim())) || void 0 === t
                  ? void 0
                  : t.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : []
          );
        }
        GetPublisherNames() {
          var e, r, t, i;
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const s =
            null !==
              (i =
                null ===
                  (t =
                    null ===
                      (r =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.publishers) || void 0 === r
                      ? void 0
                      : r.map((e) => e.name.trim())) || void 0 === t
                  ? void 0
                  : t.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : [];
          return (null == s ? void 0 : s.length) > 0
            ? s
            : this.GetDeveloperNames();
        }
        GetAllCreatorClanIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo
              ? m([
                  ...this.m_BasicInfo.developers,
                  ...this.m_BasicInfo.publishers,
                  ...this.m_BasicInfo.franchises,
                ])
              : []
          );
        }
        GetAllPublisherCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? m(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? m(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? m(this.m_BasicInfo.franchises) : []
          );
        }
        GetCapsuleHeadline() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null === (e = this.m_BasicInfo) || void 0 === e
              ? void 0
              : e.capsule_headline
          );
        }
        GetTags() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTags
          );
        }
        GetTagIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs
          );
        }
        BHasTags() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            (null === (e = this.m_rgStoreTagIDs) || void 0 === e
              ? void 0
              : e.length) > 0
          );
        }
        GetAssets() {
          return (
            this.BCheckDataRequestIncluded({ include_assets: !0 }),
            this.m_Assets
          );
        }
        GetOriginalReleaseDateRTime() {
          var e;
          this.BCheckDataRequestIncluded({ include_release: !0 });
          let r =
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.original_steam_release_date;
          return r || (r = this.GetReleaseDateRTime()), r;
        }
        GetReleaseDateRTime() {
          var e, r, t;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          )
            return 0;
          let i =
            null === (r = this.m_ReleaseInfo) || void 0 === r
              ? void 0
              : r.steam_release_date;
          return (
            i ||
              (i =
                null === (t = this.m_ReleaseInfo) || void 0 === t
                  ? void 0
                  : t.original_release_date),
            i
          );
        }
        GetFormattedSteamReleaseDate() {
          var e, r, t, i, s;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          ) {
            if (
              null === (r = this.m_ReleaseInfo) || void 0 === r
                ? void 0
                : r.coming_soon_display
            )
              return c(this.m_ReleaseInfo);
            if (
              null === (t = this.m_ReleaseInfo) || void 0 === t
                ? void 0
                : t.custom_release_date_message
            )
              return this.m_ReleaseInfo.custom_release_date_message;
            const e =
              null === (i = this.m_ReleaseInfo) || void 0 === i
                ? void 0
                : i.steam_release_date;
            return e
              ? (
                  null === (s = this.m_ReleaseInfo) || void 0 === s
                    ? void 0
                    : s.is_abridged_release_date
                )
                ? (0, l.LO)(new Date(1e3 * e))
                : (0, n.vX)(e)
              : "";
          }
          const a = this.GetReleaseDateRTime();
          return a ? (0, n.vX)(a) : "";
        }
        BIsComingSoon() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon
          );
        }
        BIsCustomComingSoonDisplay() {
          var e;
          return (
            !!this.BIsComingSoon() &&
            ((
              null === (e = this.m_ReleaseInfo) || void 0 === e
                ? void 0
                : e.coming_soon_display
            )
              ? ["text_tba", "text_comingsoon"].includes(
                  this.m_ReleaseInfo.coming_soon_display
                )
              : !!this.m_ReleaseInfo.custom_release_date_message)
          );
        }
        BIsPrePurchase() {
          var e;
          return (
            this.BIsComingSoon() &&
            Boolean(
              null === (e = this.GetBestPurchaseOption()) || void 0 === e
                ? void 0
                : e.packageid
            )
          );
        }
        BIsReleased() {
          return !this.BIsComingSoon();
        }
        GetPlatforms() {
          return (
            this.BCheckDataRequestIncluded({ include_platforms: !0 }),
            this.m_Platforms
          );
        }
        GetBestPurchaseOption() {
          return this.m_BestPurchaseOption;
        }
        GetBestPurchasePriceInCents() {
          var e;
          if (
            null === (e = this.m_BestPurchaseOption) || void 0 === e
              ? void 0
              : e.final_price_in_cents
          )
            return Number.parseInt(
              this.m_BestPurchaseOption.final_price_in_cents
            );
        }
        GetBestPurchasePriceFormatted() {
          var e;
          return null === (e = this.m_BestPurchaseOption) || void 0 === e
            ? void 0
            : e.formatted_final_price;
        }
        GetBestPurchaseOriginalPriceInCents() {
          var e;
          return (
            null === (e = this.m_BestPurchaseOption) || void 0 === e
              ? void 0
              : e.original_price_in_cents
          )
            ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
            : this.GetBestPurchasePriceInCents();
        }
        GetBestPurchaseOriginalPriceFormatted() {
          var e, r, t;
          return null !==
            (r =
              null === (e = this.m_BestPurchaseOption) || void 0 === e
                ? void 0
                : e.formatted_original_price) && void 0 !== r
            ? r
            : null === (t = this.m_BestPurchaseOption) || void 0 === t
            ? void 0
            : t.formatted_final_price;
        }
        GetAllPurchaseOptions() {
          return (
            this.BCheckDataRequestIncluded({
              include_all_purchase_options: !0,
            }),
            this.m_rgPurchaseOptions
          );
        }
        BHasAgeSafeScreenshots() {
          return this.GetOnlyAllAgesSafeScreenshots().length > 0;
        }
        GetOnlyAllAgesSafeScreenshots() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            (null === (e = this.m_Screenshots) || void 0 === e
              ? void 0
              : e.GetOnlyAllAgesScreenshots()) || []
          );
        }
        GetBothAllAgesSafeAndMatureScreenshots() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            (null === (e = this.m_Screenshots) || void 0 === e
              ? void 0
              : e.GetAllAgesAndMatureScreenshots()) || []
          );
        }
        BHasTrailers() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            null === (e = this.m_Trailers) || void 0 === e
              ? void 0
              : e.BHasTrailers()
          );
        }
        BHasHighlightTrailers() {
          var e, r;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (null ===
              (r =
                null === (e = this.m_Trailers) || void 0 === e
                  ? void 0
                  : e.GetHighlightTrailers()) || void 0 === r
              ? void 0
              : r.length) > 0
          );
        }
        GetAllTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers
          );
        }
        BHasSomeLanguageSupport(e) {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages.some(
              (r) =>
                r.elanguage == e && (r.supported || r.subtitles || r.full_audio)
            )
          );
        }
        GetAllLanguagesWithSomeSupport() {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages
              .filter((e) => e.supported || e.subtitles || e.full_audio)
              .map((e) => e.elanguage)
          );
        }
        GetDataRequest() {
          return this.m_DataRequested;
        }
        GetMicroTrailer() {
          this.BCheckDataRequestIncluded({ include_trailers: !0 });
          let e = null;
          return (
            this.m_Trailers &&
              (this.m_Trailers.GetHighlightTrailers().forEach((r) => {
                !e && r.GetMicroTrailer() && (e = r.GetMicroTrailer());
              }),
              e ||
                this.m_Trailers.GetOtherTrailers().forEach((r) => {
                  !e && r.GetMicroTrailer() && (e = r.GetMicroTrailer());
                })),
            e
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
      }
      function m(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        const r = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(r));
      }
      class d {
        constructor(e, r) {
          const t = e.asset_url_format();
          t &&
            (e.main_capsule() &&
              (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                t,
                e.main_capsule()
              )),
            e.small_capsule() &&
              (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                t,
                e.small_capsule()
              )),
            e.header() &&
              (this.m_strHeaderURL = this.ConstructAssetURL(t, e.header())),
            e.package_header() &&
              (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                t,
                e.package_header()
              )),
            e.page_background() &&
              (this.m_strPageBackgroundURL = this.ConstructAssetURL(
                t,
                e.page_background()
              )),
            e.hero_capsule() &&
              (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                t,
                e.hero_capsule()
              )),
            e.hero_capsule_2x() &&
              (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                t,
                e.hero_capsule_2x()
              )),
            e.library_capsule() &&
              (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                t,
                e.library_capsule()
              )),
            e.library_capsule_2x() &&
              (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                t,
                e.library_capsule_2x()
              )),
            e.library_hero() &&
              (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                t,
                e.library_hero()
              )),
            e.library_hero_2x() &&
              (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                t,
                e.library_hero_2x()
              ))),
            e.community_icon() &&
              (this.m_strCommunityIcon = `${
                o.De.MEDIA_CDN_COMMUNITY_URL
              }images/apps/${r}/${e.community_icon()}.jpg`);
        }
        GetMainCapsuleURL() {
          return this.m_strMainCapsuleURL;
        }
        GetSmallCapsuleURL() {
          return this.m_strSmallCapsuleURL;
        }
        GetHeaderURL() {
          return this.m_strHeaderURL;
        }
        GetPackageHeaderURL() {
          return this.m_strPackageHeaderURL;
        }
        GetPageBackgroundURL() {
          return this.m_strPageBackgroundURL;
        }
        GetHeroCapsuleURL() {
          return this.m_strHeroCapsuleURL;
        }
        GetHeroCapsuleURL_2x() {
          return this.m_strHeroCapsuleURL_2x;
        }
        GetLibraryCapsuleURL() {
          return this.m_strLibraryCapsuleURL;
        }
        GetLibraryCapsuleURL_2x() {
          return this.m_strLibraryCapsuleURL_2x;
        }
        GetLibraryHeroURL() {
          return this.m_strLibraryHeroURL;
        }
        GetLibraryHeroURL_2x() {
          return this.m_strLibraryHeroURL_2x;
        }
        ConstructAssetURL(e, r) {
          return o.De.MEDIA_CDN_URL + e.replace("${FILENAME}", r);
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
      }
      class _ {
        constructor(e) {
          (this.m_mapTrailer = new Map()),
            (this.m_higherTrailers = new Array()),
            (this.m_otherTrailers = new Array()),
            e.highlights() &&
              e.highlights().forEach((e) => {
                let r = new B(e);
                this.m_mapTrailer.set(r.GetTrailerID(), r),
                  this.m_higherTrailers.push(r);
              }),
            e.other_trailers() &&
              e.other_trailers().forEach((e) => {
                let r = new B(e);
                this.m_mapTrailer.set(r.GetTrailerID(), r),
                  this.m_otherTrailers.push(r);
              });
        }
        BHasTrailers() {
          return (
            this.m_higherTrailers.length > 0 || this.m_otherTrailers.length > 0
          );
        }
        GetHighlightTrailers() {
          return this.m_higherTrailers;
        }
        GetOtherTrailers() {
          return this.m_otherTrailers;
        }
        GetTrailerByID(e) {
          return this.m_mapTrailer.get(e);
        }
      }
      class B {
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id());
          const r = e.trailer_url_format();
          r &&
            (e.trailer_480p() &&
              (this.m_Trailer480p = this.ExtractTrailerFormats(
                r,
                e.trailer_480p()
              )),
            e.trailer_max() &&
              (this.m_TrailerMax = this.ExtractTrailerFormats(
                r,
                e.trailer_max()
              )),
            e.microtrailer() &&
              (this.m_MicroTrailer = this.ExtractTrailerFormats(
                r,
                e.microtrailer()
              )),
            e.screenshot_medium() &&
              (this.m_strScreenshotMedium = this.ConstructAssetURL(
                r,
                e.screenshot_medium()
              )),
            e.screenshot_full() &&
              (this.m_strScreenshotFull = this.ConstructAssetURL(
                r,
                e.screenshot_full()
              )));
        }
        GetName() {
          return this.m_strTrailerName;
        }
        GetTrailerID() {
          return this.m_nBaseID;
        }
        GetTrailer480p() {
          return this.m_Trailer480p;
        }
        GetTrailerMax() {
          return this.m_TrailerMax;
        }
        GetMicroTrailer() {
          return this.m_MicroTrailer;
        }
        GetScreenshot() {
          return this.m_strScreenshotFull
            ? this.m_strScreenshotFull
            : this.m_strScreenshotMedium;
        }
        ExtractTrailerFormats(e, r) {
          let t = {};
          return (
            r.forEach((r) => {
              "video/mp4" == r.type()
                ? (t.strMP4URL = this.ConstructAssetURL(e, r.filename()))
                : "video/webm" == r.type() &&
                  (t.strWebMURL = this.ConstructAssetURL(e, r.filename()));
            }),
            t
          );
        }
        ConstructAssetURL(e, r) {
          return o.De.MEDIA_CDN_URL + e.replace("${FILENAME}", r);
        }
      }
      class b {
        constructor(e) {
          (this.m_rgAllScreenshots = new Array()),
            (this.m_rgOnlyAllAgesScreenshots = new Array());
          let r = 0,
            t = 0;
          const i = e.all_ages_screenshots() || [],
            s = e.mature_content_screenshots() || [];
          for (; r < i.length || t < s.length; ) {
            let e = r < i.length;
            if (r < i.length && t < s.length) {
              e = i[r].ordinal() < s[t].ordinal();
            }
            if (e) {
              const e = o.De.MEDIA_CDN_URL + i[r].filename();
              this.m_rgAllScreenshots.push(e),
                this.m_rgOnlyAllAgesScreenshots.push(e),
                (r += 1);
            } else {
              const e = o.De.MEDIA_CDN_URL + s[t].filename();
              this.m_rgAllScreenshots.push(e), (t += 1);
            }
          }
        }
        GetAllAgesAndMatureScreenshots() {
          return this.m_rgAllScreenshots;
        }
        GetOnlyAllAgesScreenshots() {
          return this.m_rgOnlyAllAgesScreenshots;
        }
      }
    },
    48116: (e, r, t) => {
      t.d(r, {
        $k: () => i,
        Ds: () => l,
        GV: () => s,
        Hy: () => o,
        TM: () => n,
        qE: () => a,
      });
      var i;
      t(54698), t(39722), t(990);
      function s(e) {
        return "app" == e ? 0 : "sub" == e ? 1 : 2;
      }
      function a(e) {
        switch (e) {
          case 0:
            return "app";
          case 2:
            return "bundle";
          case 1:
            return "package";
          case 3:
            return "mtx";
        }
        return "invalid";
      }
      function n(e) {
        switch (e) {
          case "sub":
            return 1;
          case "bundle":
            return 2;
          default:
            return 0;
        }
      }
      function l(e, r) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            switch (r) {
              case 0:
              default:
                return "game";
              case 12:
                return "beta";
              case 4:
                return "dlc";
              case 1:
                return "demo";
              case 6:
                return "software";
              case 7:
              case 3:
                return "video";
              case 10:
                return "hardware";
              case 11:
                return "music";
              case 13:
                return "tool";
              case 2:
                return "mod";
              case 9:
                return "episode";
              case 8:
                return "series";
            }
        }
      }
      function o(e) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            return "app";
        }
      }
      !(function (e) {
        (e[(e.k_NotRejected = -1)] = "k_NotRejected"),
          (e[(e.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
          (e[(e.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
          (e[(e.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
          (e[(e.k_RejectNoVR = 3)] = "k_RejectNoVR"),
          (e[(e.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
          (e[(e.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
          (e[(e.k_RejectSupportedLanguage = 6)] = "k_RejectSupportedLanguage"),
          (e[(e.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
          (e[(e.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
          (e[(e.k_RejectIgnoreContentDescriptors = 9)] =
            "k_RejectIgnoreContentDescriptors"),
          (e[(e.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
          (e[(e.k_RejectSoftware = 11)] = "k_RejectSoftware"),
          (e[(e.k_RejectDLC = 12)] = "k_RejectDLC"),
          (e[(e.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
          (e[(e.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
          (e[(e.k_RejectVideo = 15)] = "k_RejectVideo"),
          (e[(e.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
          (e[(e.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed");
      })(i || (i = {}));
    },
  },
]);
