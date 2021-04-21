/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    ARGL: function (e, t, r) {
      e.exports = {
        GrantAwardModal: "awardmodal_GrantAwardModal_2ilpH",
        Header: "awardmodal_Header_2_vbZ",
        Title: "awardmodal_Title_2yJ4j",
        Description: "awardmodal_Description_16dRE",
        ButtonContainer: "awardmodal_ButtonContainer_JYQgs",
        Button: "awardmodal_Button_3M92h",
        Selected: "awardmodal_Selected_Efo_8",
        Disabled: "awardmodal_Disabled_3k_Tn",
        IconCtn: "awardmodal_IconCtn_1fdGE",
        Label: "awardmodal_Label_2iEkq",
        Points: "awardmodal_Points_3k_jx",
        IconCheckMark: "awardmodal_IconCheckMark_38WUB",
        Footer: "awardmodal_Footer_164mm",
        Left: "awardmodal_Left_1v0jL",
        BalanceIcon: "awardmodal_BalanceIcon_3VvvB",
        BalanceDetails: "awardmodal_BalanceDetails_209Gy",
        BalanceLabel: "awardmodal_BalanceLabel_2u9RZ",
        BalanceAmount: "awardmodal_BalanceAmount_1O3FS",
        Right: "awardmodal_Right_1hgRC",
        Actions: "awardmodal_Actions_1-AT2",
        Action: "awardmodal_Action_1Beae",
        FooterLink: "awardmodal_FooterLink_KId8d",
        Divider: "awardmodal_Divider_105py",
        ConfirmContainer: "awardmodal_ConfirmContainer_3rAoe",
        ConfirmAwardImage: "awardmodal_ConfirmAwardImage_1ARgx",
        ConfirmText: "awardmodal_ConfirmText_1uA9Q",
        AwardName: "awardmodal_AwardName_25N0x",
        TimePeriod: "awardmodal_TimePeriod_6mEUO",
        Visible: "awardmodal_Visible_2QQTW",
        LoadingContainer: "awardmodal_LoadingContainer_1hKG3",
        SuccessContainer: "awardmodal_SuccessContainer_Uz_0u",
        SuccessText: "awardmodal_SuccessText_1kQzN",
        ErrorContainer: "awardmodal_ErrorContainer_1SebP",
        ErrorText: "awardmodal_ErrorText_ok8mo",
        PointsAmount: "awardmodal_PointsAmount_1WCEA",
        PointsAmountIcon: "awardmodal_PointsAmountIcon_3-jpV",
        NotEnoughPoints: "awardmodal_NotEnoughPoints_2VkAe",
      };
    },
    Dsqm: function (e, t, r) {
      e.exports = { UnstyledButton: "unstyledbutton_UnstyledButton_1hcJa" };
    },
    tPo2: function (e, t, r) {
      "use strict";
      var n = r("mrSG"),
        i = r("q1tI"),
        a = r.n(i),
        o = r("TyAF"),
        s = r("Jqb/"),
        c = r("ARGL"),
        l = r("TLQK"),
        u = r("bxiW"),
        d = r("lkRc"),
        m = r("WBba"),
        f = r("2lpH"),
        b = r.n(f),
        y = r("2vnA"),
        p = r("bxBv"),
        w = r("hRO2"),
        h = r("OS8t"),
        _ = w.Message;
      var g,
        v,
        B = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetSummary_Request";
            }),
            t
          );
        })(_),
        R = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.summary || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      summary: { n: 1, c: M },
                      timestamp_updated: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      auditid_highwater: {
                        n: 3,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetSummary_Response";
            }),
            t
          );
        })(_),
        M = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.points || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      points: {
                        n: 1,
                        br: h.d.readInt64String,
                        bw: h.h.writeInt64String,
                      },
                      points_earned: {
                        n: 2,
                        br: h.d.readInt64String,
                        bw: h.h.writeInt64String,
                      },
                      points_spent: {
                        n: 3,
                        br: h.d.readInt64String,
                        bw: h.h.writeInt64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetSummary_Response_Summary";
            }),
            t
          );
        })(_),
        C = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.points || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      points: {
                        n: 1,
                        br: h.d.readInt64String,
                        bw: h.h.writeInt64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetPointsForSpend_Response";
            }),
            t
          );
        })(_),
        O = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.communityitemid || h.a(t.M()),
              _.initialize(n, r, 0, -1, [2], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      communityitemid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      bundle_community_item_ids: {
                        n: 2,
                        r: !0,
                        q: !0,
                        br: h.d.readUint64String,
                        bw: h.h.writeRepeatedUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_RedeemPoints_Response";
            }),
            t
          );
        })(_),
        j = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.purchaseid || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      purchaseid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
            }),
            t
          );
        })(_),
        z = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return _.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
            }),
            t
          );
        })(_),
        E = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.target_type || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      target_type: {
                        n: 1,
                        br: h.d.readEnum,
                        bw: h.h.writeEnum,
                      },
                      targetid: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      reactionid: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_AddReaction_Request";
            }),
            t
          );
        })(_),
        S = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return _.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_AddReaction_Response";
            }),
            t
          );
        })(_),
        L = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.target_type || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      target_type: {
                        n: 1,
                        br: h.d.readEnum,
                        bw: h.h.writeEnum,
                      },
                      targetid: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetReactions_Request";
            }),
            t
          );
        })(_),
        F = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.reactionids || h.a(t.M()),
              _.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      reactionids: {
                        n: 1,
                        r: !0,
                        q: !0,
                        br: h.d.readUint32,
                        bw: h.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetReactions_Response";
            }),
            t
          );
        })(_),
        T = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.total || h.a(t.M()),
              _.initialize(n, r, 0, -1, [1, 2, 3, 4, 5, 6], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      total: { n: 1, c: A, r: !0, q: !0 },
                      user_reviews: { n: 2, c: A, r: !0, q: !0 },
                      ugc: { n: 3, c: A, r: !0, q: !0 },
                      profile: { n: 4, c: A, r: !0, q: !0 },
                      forum_topics: { n: 5, c: A, r: !0, q: !0 },
                      comments: { n: 6, c: A, r: !0, q: !0 },
                      total_given: {
                        n: 7,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      total_received: {
                        n: 8,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      total_points_given: {
                        n: 9,
                        br: h.d.readInt64String,
                        bw: h.h.writeInt64String,
                      },
                      total_points_received: {
                        n: 10,
                        br: h.d.readInt64String,
                        bw: h.h.writeInt64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
            }),
            t
          );
        })(_),
        A = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.reactionid || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      reactionid: { n: 1, br: h.d.readEnum, bw: h.h.writeEnum },
                      given: { n: 2, br: h.d.readUint32, bw: h.h.writeUint32 },
                      received: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      points_given: {
                        n: 4,
                        br: h.d.readInt64String,
                        bw: h.h.writeInt64String,
                      },
                      points_received: {
                        n: 5,
                        br: h.d.readInt64String,
                        bw: h.h.writeInt64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
            }),
            t
          );
        })(_),
        I = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return _.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetReactionConfig_Request";
            }),
            t
          );
        })(_),
        N = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.reactions || h.a(t.M()),
              _.initialize(n, r, 0, -1, [3], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { reactions: { n: 3, c: G, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetReactionConfig_Response";
            }),
            t
          );
        })(_),
        G = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.reactionid || h.a(t.M()),
              _.initialize(n, r, 0, -1, [4, 5], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      reactionid: { n: 1, br: h.d.readEnum, bw: h.h.writeEnum },
                      points_cost: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      points_transferred: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      valid_target_types: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: h.d.readEnum,
                        bw: h.h.writeRepeatedEnum,
                      },
                      valid_ugc_types: {
                        n: 5,
                        r: !0,
                        q: !0,
                        br: h.d.readUint32,
                        bw: h.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
            }),
            t
          );
        })(_),
        P = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.points_cost || h.a(t.M()),
              _.initialize(n, r, 0, -1, [3, 4], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      points_cost: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      upgrade_points_cost: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      purchasable_customization_types: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: h.d.readEnum,
                        bw: h.h.writeRepeatedEnum,
                      },
                      upgradable_customization_types: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: h.d.readEnum,
                        bw: h.h.writeRepeatedEnum,
                      },
                      max_slots_per_type: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      max_upgradable_level: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
            }),
            t
          );
        })(_),
        U = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.apps || h.a(t.M()),
              _.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { apps: { n: 1, c: W, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetEligibleApps_Response";
            }),
            t
          );
        })(_),
        W = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                      has_items_anyone_can_purchase: {
                        n: 2,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      event_app: { n: 3, br: h.d.readBool, bw: h.h.writeBool },
                      hero_carousel_image: {
                        n: 4,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
            }),
            t
          );
        })(_),
        x = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || h.a(t.M()),
              _.initialize(n, r, 0, -1, [15], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                      defid: { n: 2, br: h.d.readUint32, bw: h.h.writeUint32 },
                      type: { n: 3, br: h.d.readEnum, bw: h.h.writeEnum },
                      community_item_class: {
                        n: 4,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      community_item_type: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      point_cost: {
                        n: 6,
                        br: h.d.readInt64String,
                        bw: h.h.writeInt64String,
                      },
                      timestamp_created: {
                        n: 7,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      timestamp_updated: {
                        n: 8,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      timestamp_available: {
                        n: 9,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      timestamp_available_end: {
                        n: 14,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      quantity: {
                        n: 10,
                        br: h.d.readInt64String,
                        bw: h.h.writeInt64String,
                      },
                      internal_description: {
                        n: 11,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      active: { n: 12, br: h.d.readBool, bw: h.h.writeBool },
                      community_item_data: { n: 13, c: k },
                      bundle_defids: {
                        n: 15,
                        r: !0,
                        q: !0,
                        br: h.d.readUint32,
                        bw: h.h.writeRepeatedUint32,
                      },
                      usable_duration: {
                        n: 16,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      bundle_discount: {
                        n: 17,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "LoyaltyRewardDefinition";
            }),
            t
          );
        })(_),
        k = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.item_name || h.a(t.M()),
              _.initialize(n, r, 0, -1, [9], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      item_name: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      item_title: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      item_description: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      item_image_small: {
                        n: 4,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      item_image_large: {
                        n: 5,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      item_movie_webm: {
                        n: 6,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      item_movie_mp4: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      item_movie_webm_small: {
                        n: 10,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      item_movie_mp4_small: {
                        n: 11,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      animated: { n: 8, br: h.d.readBool, bw: h.h.writeBool },
                      badge_data: { n: 9, c: D, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "LoyaltyRewardDefinition_CommunityItemData";
            }),
            t
          );
        })(_),
        D = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.level || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      level: { n: 1, br: h.d.readInt32, bw: h.h.writeInt32 },
                      image: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "LoyaltyRewardDefinition_BadgeData";
            }),
            t
          );
        })(_),
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.bonusid || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      bonusid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      appid: { n: 2, br: h.d.readUint32, bw: h.h.writeUint32 },
                      active: { n: 3, br: h.d.readBool, bw: h.h.writeBool },
                      points: { n: 4, br: h.d.readInt32, bw: h.h.writeInt32 },
                      timestamp_start: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      timestamp_end: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      internal_description: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "LoyaltyRewardPurchaseBonus";
            }),
            t
          );
        })(_),
        Z = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.bonuses || h.a(t.M()),
              _.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { bonuses: { n: 1, c: q, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
            }),
            t
          );
        })(_),
        H = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.definitions || h.a(t.M()),
              _.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      definitions: { n: 1, c: x, r: !0, q: !0 },
                      total_count: {
                        n: 2,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      count: { n: 3, br: h.d.readInt32, bw: h.h.writeInt32 },
                      next_cursor: {
                        n: 4,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_QueryRewardItems_Response";
            }),
            t
          );
        })(_),
        Q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.responses || h.a(t.M()),
              _.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { responses: { n: 1, c: Y, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
            }),
            t
          );
        })(_),
        Y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.eresult || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      eresult: { n: 1, br: h.d.readInt32, bw: h.h.writeInt32 },
                      response: { n: 2, c: H },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
            }),
            t
          );
        })(_),
        K = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.communityitemid || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      communityitemid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      next_claim_time: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      reward_item: { n: 3, c: x },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CSaleItemRewards_ClaimItem_Response";
            }),
            t
          );
        })(_),
        V = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.can_claim || h.a(t.M()),
              _.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      can_claim: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                      next_claim_time: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      reward_item: { n: 3, c: x },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new w.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new w.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CSaleItemRewards_CanClaimItem_Response";
            }),
            t
          );
        })(_);
      !(function (e) {
        (e.GetPointsForSpend = function (e, t) {
          return e.SendMsg("LoyaltyRewards.GetPointsForSpend#1", t, C, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetSummary = function (e, t) {
            return e.SendMsg("LoyaltyRewards.GetSummary#1", t, R, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.RedeemPoints = function (e, t) {
            return e.SendMsg("LoyaltyRewards.RedeemPoints#1", t, O, {
              ePrivilege: 1,
            });
          }),
          (e.RedeemPointsForBadgeLevel = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              t,
              O,
              { ePrivilege: 1 }
            );
          }),
          (e.RedeemPointsToUpgradeItem = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              t,
              O,
              { ePrivilege: 1 }
            );
          }),
          (e.RedeemPointsForProfileCustomization = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              t,
              j,
              { ePrivilege: 1 }
            );
          }),
          (e.RedeemPointsForProfileCustomizationUpgrade = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              t,
              z,
              { ePrivilege: 1 }
            );
          }),
          (e.AddReaction = function (e, t) {
            return e.SendMsg("LoyaltyRewards.AddReaction#1", t, S, {
              ePrivilege: 1,
            });
          }),
          (e.GetReactions = function (e, t) {
            return e.SendMsg("LoyaltyRewards.GetReactions#1", t, F, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetReactionsSummaryForUser = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              t,
              T,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetReactionConfig = function (e, t) {
            return e.SendMsg("LoyaltyRewards.GetReactionConfig#1", t, N, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetProfileCustomizationsConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              t,
              P,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetEligibleApps = function (e, t) {
            return e.SendMsg("LoyaltyRewards.GetEligibleApps#1", t, U, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetActivePurchaseBonuses = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              t,
              Z,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.QueryRewardItems = function (e, t) {
            return e.SendMsg("LoyaltyRewards.QueryRewardItems#1", t, H, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.BatchedQueryRewardItems = function (e, t) {
            return e.SendMsg("LoyaltyRewards.BatchedQueryRewardItems#1", t, Q, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(g || (g = {})),
        (function (e) {
          (e.ClaimItem = function (e, t) {
            return e.SendMsg("SaleItemRewards.ClaimItem#1", t, K, {
              ePrivilege: 1,
            });
          }),
            (e.CanClaimItem = function (e, t) {
              return e.SendMsg("SaleItemRewards.CanClaimItem#1", t, V, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            });
        })(v || (v = {}));
      var J = (function () {
          function e(e) {
            (this.m_lPointsAvailable = null),
              (this.m_bPointsBalanceLoadedOrInFlight = !1),
              (this.m_mapReactionConfiguration = new Map()),
              (this.m_bReactionConfigurationLoadedOrInFlight = !1),
              (this.m_mapExistingReactions = new Map()),
              (this.m_transport = e);
          }
          return (
            (e.prototype.BIsLoggedIn = function () {
              return d.i.logged_in;
            }),
            (e.prototype.SetTarget = function (e, t) {
              (this.m_targetID = e),
                (this.m_eTargetType = t),
                this.LoadExistingReactions();
            }),
            (e.prototype.AddReaction = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = p.b.Init(E))
                            .Body()
                            .set_target_type(this.m_eTargetType),
                          t.Body().set_targetid(this.m_targetID),
                          t.Body().set_reactionid(e),
                          console.log(" ProtoBuf sending..."),
                          console.log(t),
                          console.log("Target ID is..." + t.Body().targetid()),
                          [4, g.AddReaction(this.m_transport, t)])
                        : [2, { eResult: 21, strMessage: "Not logged on" }];
                    case 1:
                      return (
                        1 != (r = n.sent()).GetEResult()
                          ? console.error(
                              "Error when calling LoyaltyRewardsService.AddReaction: EResult=" +
                                r.GetEResult()
                            )
                          : (this.m_bPointsBalanceLoadedOrInFlight = !1),
                        [2, { eResult: r.GetEResult(), strMessage: "" }]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetUserPointBalance = function () {
              return this.BIsLoggedIn()
                ? (this.m_bPointsBalanceLoadedOrInFlight ||
                    this.LoadUserPointBalance(),
                  this.m_lPointsAvailable)
                : null;
            }),
            (e.prototype.LoadUserPointBalance = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(n.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((this.m_bPointsBalanceLoadedOrInFlight = !0),
                          (e = p.b.Init(B)).SetBodyFields({
                            steamid: d.i.steamid,
                          }),
                          [4, g.GetSummary(this.m_transport, e)])
                        : [2, Promise.resolve(null)];
                    case 1:
                      return (
                        1 == (t = r.sent()).GetEResult()
                          ? (this.m_lPointsAvailable = b.a.fromString(
                              t.Body().summary().points()
                            ))
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetSummary: EResult=" +
                                t.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetAwardConfigurations = function () {
              return (
                this.m_bReactionConfigurationLoadedOrInFlight ||
                  this.LoadAwardsConfiguration(),
                this.m_mapReactionConfiguration
              );
            }),
            (e.prototype.LoadAwardsConfiguration = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i, a, o;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (this.m_bReactionConfigurationLoadedOrInFlight = !0),
                        (e = p.b.Init(I)),
                        [4, g.GetReactionConfig(this.m_transport, e)]
                      );
                    case 1:
                      if (1 == (t = n.sent()).GetEResult())
                        for (
                          r = t.Body().toObject().reactions, i = 0, a = r;
                          i < a.length;
                          i++
                        )
                          (o = a[i]),
                            this.m_mapReactionConfiguration.set(
                              o.reactionid,
                              o
                            );
                      else
                        console.error(
                          "Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=" +
                            t.GetEResult()
                        );
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.GetExistingReactions = function () {
              return this.m_mapExistingReactions;
            }),
            (e.prototype.LoadExistingReactions = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  r = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        this.m_mapExistingReactions.clear(),
                        (e = p.b.Init(L))
                          .Body()
                          .set_target_type(this.m_eTargetType),
                        e.Body().set_targetid(this.m_targetID),
                        [4, g.GetReactions(this.m_transport, e)]
                      );
                    case 1:
                      return (
                        1 == (t = n.sent()).GetEResult()
                          ? t
                              .Body()
                              .reactionids()
                              .map(function (e) {
                                return r.m_mapExistingReactions.set(e, !0);
                              })
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetReactions: EResult=" +
                                t.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            Object(n.c)([y.C.ref], e.prototype, "m_lPointsAvailable", void 0),
            Object(n.c)(
              [y.C.deep],
              e.prototype,
              "m_mapReactionConfiguration",
              void 0
            ),
            Object(n.c)(
              [y.C.deep],
              e.prototype,
              "m_mapExistingReactions",
              void 0
            ),
            e
          );
        })(),
        X = r("exH9"),
        $ = r("Dsqm"),
        ee = function (e) {
          var t = e.className,
            r = Object(n.f)(e, ["className"]);
          return a.a.createElement(
            "button",
            Object(n.a)({ className: Object(X.a)(t, $.UnstyledButton) }, r)
          );
        },
        te = r("0OaU"),
        re = r("6Y59");
      function ne(e) {
        return Object(l.f)("#RewardsReaction_" + e);
      }
      var ie,
        ae = r("ZO3Q"),
        oe = r("YyVH");
      function se(e) {
        switch (e) {
          case ie.Gold:
          case ie.LNY2020:
            return "hsl(" + (51 + -16 * Math.random()) + ", 93%, 54%)";
          default:
            return "hsl(" + 360 * Math.random() + ", 100%, 40%)";
        }
      }
      function ce(e) {
        return e == ie.LNY2020
          ? "hue-rotate(" + (360 + Object(oe.b)(-30, 10)) + "deg)"
          : "";
      }
      !(function (e) {
        (e[(e.Default = 0)] = "Default"),
          (e[(e.Gold = 1)] = "Gold"),
          (e[(e.LNY2020 = 2)] = "LNY2020");
      })(ie || (ie = {}));
      var le = function (e, t) {
          var r = Object(ae.useSpring)({
            anim: 1,
            from: { anim: 0 },
            config: { duration: 8e3 },
          }).anim;
          return Object(i.useMemo)(
            function () {
              var n = (function (e, t) {
                var r = [];
                if (!e) return r;
                for (var n = e.width, i = e.height, a = 0; a < 200; a++) {
                  var o = Math.random(),
                    s = Math.random() * o,
                    c = Math.random() * s,
                    l = 4 * (Math.random() - 0.5) * Math.PI * 20,
                    u = Math.random() + 0.5,
                    d = [
                      Math.random() * i - i - 20,
                      i + 20 + Math.random() * i * u,
                    ],
                    m = u * (n <= 1e3 ? 1 : n / 1e3) * (t == ie.Gold ? 2 : 1),
                    f = (Math.random() - 0.5) * n,
                    b = (Math.random() - 0.5) * n,
                    y = [b, f + b],
                    p = se(t),
                    w = ce(t);
                  r.push({
                    rotationCoefficient: l,
                    rotationRatioY: s,
                    rotationRatioX: o,
                    rotationRatioZ: c,
                    yRange: d,
                    xRange: y,
                    scale: m,
                    colorHue: p,
                    filter: w,
                  });
                }
                return r;
              })(e, t);
              return {
                rgParticleStyles: n.map(function (e) {
                  return (function (e, t, r) {
                    ie.Default;
                    var n = e.rotationCoefficient,
                      i = e.rotationRatioY,
                      a = e.rotationRatioX,
                      o = e.rotationRatioZ,
                      s = e.yRange,
                      c = e.xRange,
                      l = e.scale,
                      u = e.colorHue;
                    return {
                      backgroundColor: u,
                      fill: u,
                      filter: e.filter,
                      flRandom: 0,
                      transform: t.interpolate(function (e) {
                        var t = e * n * i,
                          r = e * n * a,
                          u = e * n * o,
                          d = e * (s[1] - s[0]) + s[0];
                        return (
                          "translate(" +
                          (e * (c[1] - c[0]) + c[0]) +
                          "px, " +
                          d +
                          "px) rotateY(" +
                          t +
                          "rad) rotateX(" +
                          r +
                          "rad) rotateZ(" +
                          u +
                          "rad) scale(" +
                          l +
                          ")"
                        );
                      }),
                    };
                  })(e, r);
                }),
                rgStreamerStyles: n
                  .map(function (e) {
                    return (function (e, t, r) {
                      if (Math.random() > 0.1) return null;
                      var n = e.rotationCoefficient,
                        i = e.rotationRatioZ,
                        a = e.yRange,
                        o = e.xRange,
                        s = e.scale;
                      return {
                        backgroundColor: void 0,
                        fill: e.colorHue,
                        filter: e.filter,
                        flRandom: Math.random(),
                        transform: t.interpolate(function (e) {
                          var t = ((e * n) / 4) * i,
                            r = e * (a[1] - a[0]) + a[0];
                          return (
                            "translate(" +
                            (e * (o[1] - o[0]) + o[0]) +
                            "px, " +
                            r +
                            "px) rotateZ(" +
                            t +
                            "rad) scale(" +
                            s +
                            ")"
                          );
                        }),
                      };
                    })(e, r);
                  })
                  .filter(function (e) {
                    return !!e;
                  }),
              };
            },
            [e, t, r]
          );
        },
        ue = { position: "absolute", left: "50%", top: 0 },
        de = Object(n.a)(Object(n.a)({}, ue), {
          width: 10,
          height: 5,
          borderWidth: 1,
          borderColor: "black",
        }),
        me = function (e) {
          var t,
            r = e.eType,
            n =
              (ie.Gold,
              ie.LNY2020,
              (function () {
                var e = Object(i.useState)(null),
                  t = e[0],
                  r = e[1],
                  n = Object(i.useCallback)(function (e) {
                    e &&
                      "function" == typeof e.getBoundingClientRect &&
                      r(e.getBoundingClientRect());
                  }, []);
                return [t, n];
              })()),
            o = n[0],
            s = n[1],
            c = le(o, r),
            l = c.rgParticleStyles,
            u = c.rgStreamerStyles;
          switch (r) {
            case ie.Gold:
              t = l.map(function (e, t) {
                return a.a.createElement(be, { key: t, style: e });
              });
              break;
            case ie.LNY2020:
              t = l.map(function (e, t) {
                return t % 2
                  ? a.a.createElement(fe, { key: t, style: e })
                  : a.a.createElement(ye, { key: t, style: e });
              });
              break;
            case ie.Default:
              t = l.map(function (e, t) {
                return a.a.createElement(fe, { key: t, style: e });
              });
          }
          return a.a.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              },
              ref: s,
            },
            t,
            u.map(function (e, t) {
              return e.flRandom > 0.5
                ? a.a.createElement(we, { key: t, style: e })
                : a.a.createElement(pe, { key: t, style: e });
            })
          );
        },
        fe = function (e) {
          var t = e.style;
          return a.a.createElement(ae.animated.div, {
            style: Object(n.a)(Object(n.a)({}, de), t),
          });
        },
        be = function (e) {
          var t = e.style,
            r = Object(i.useState)(Math.floor(Math.random() * he.length))[0],
            o = he[r];
          return a.a.createElement(o, {
            style: Object(n.a)(Object(n.a)(Object(n.a)({}, ue), t), {
              backgroundColor: void 0,
            }),
          });
        },
        ye = function (e) {
          var t = e.style,
            r = Object(i.useState)(Math.floor(Math.random() * _e.length))[0],
            o = _e[r];
          return a.a.createElement(o, {
            style: Object(n.a)(Object(n.a)(Object(n.a)({}, ue), t), {
              backgroundColor: void 0,
            }),
          });
        },
        pe = function (e) {
          var t = e.style;
          return a.a.createElement(
            ae.animated.svg,
            {
              viewBox: "0 0 80 620",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: Object(n.a)({ width: 10, height: 70 }, t),
            },
            a.a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z",
              fill: t.fill,
            })
          );
        },
        we = function (e) {
          var t = e.style;
          return a.a.createElement(
            ae.animated.svg,
            {
              viewBox: "0 0 203 295",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: Object(n.a)({ width: 10, height: 20 }, t),
            },
            a.a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z",
              fill: t.fill,
            })
          );
        },
        he = [
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                viewBox: "0 0 48 102",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object(n.a)({ width: 5, height: 10 }, t),
              },
              a.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z",
                fill: "#F7D51E",
              })
            );
          },
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                viewBox: "0 0 50 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object(n.a)({ width: 10, height: 7 }, t),
              },
              a.a.createElement("path", {
                d:
                  "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                fill: "#C4C4C4",
              }),
              a.a.createElement("path", {
                d:
                  "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                fill: t.fill,
              })
            );
          },
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                viewBox: "0 0 68 69",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object(n.a)({ width: 10, height: 10 }, t),
              },
              a.a.createElement("rect", {
                y: "34.6389",
                width: "48",
                height: "48",
                transform: "rotate(-45 0 34.6389)",
                fill: t.fill,
              })
            );
          },
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object(n.a)({ width: 10, height: 10 }, t),
              },
              a.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z",
                fill: t.fill,
              })
            );
          },
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object(n.a)({ width: 10, height: 8 }, t),
              },
              a.a.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: t.fill,
              })
            );
          },
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object(n.a)({ width: 10, height: 8 }, t),
              },
              a.a.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: t.fill,
              })
            );
          },
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object(n.a)({ width: 10, height: 8 }, t),
              },
              a.a.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: t.fill,
              })
            );
          },
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                viewBox: "0 0 48 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object(n.a)({ width: 10, height: 8 }, t),
              },
              a.a.createElement("path", {
                d:
                  "M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z",
                fill: t.fill,
              })
            );
          },
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                width: "48",
                height: "35",
                viewBox: "0 0 48 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object(n.a)({ width: 10, height: 7 }, t),
              },
              a.a.createElement("path", {
                d: "M48 0H0L24 35L48 0Z",
                fill: t.fill,
              })
            );
          },
        ],
        _e = [
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 54 47.18",
                style: Object(n.a)({ width: 28, height: 28 }, t),
              },
              a.a.createElement("polygon", {
                fill: "#60000e",
                points: "10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06",
              }),
              a.a.createElement("path", {
                fill: "#f93838",
                d:
                  "M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z",
              }),
              a.a.createElement("path", {
                fill: "#f93838",
                d:
                  "M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z",
              })
            );
          },
          function (e) {
            var t = e.style;
            return a.a.createElement(
              ae.animated.svg,
              {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 14.5 22",
                style: Object(n.a)({ width: 28, height: 28 }, t),
              },
              a.a.createElement("path", {
                fill: "#fc1010",
                d:
                  "M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z",
              }),
              a.a.createElement("path", {
                fill: "#fc1010",
                d:
                  "M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z",
              }),
              a.a.createElement("path", {
                fill: "#fc1010",
                d:
                  "M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z",
              }),
              a.a.createElement("path", {
                fill: "#fc1010",
                d:
                  "M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z",
              })
            );
          },
        ];
      var ge,
        ve = r("Mgs7");
      r("idvb");
      !(function (e) {
        (e[(e.SELECTING = 0)] = "SELECTING"),
          (e[(e.CONFIRM = 1)] = "CONFIRM"),
          (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
          (e[(e.DONE = 3)] = "DONE"),
          (e[(e.ERROR = 4)] = "ERROR");
      })(ge || (ge = {}));
      var Be = function (e) {
          return i.createElement(
            "svg",
            Object(n.a)(
              {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            i.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
            })
          );
        },
        Re = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (r.state = { bHovered: !1 }), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.handleMouseOver = function (e) {
              this.setState({ bHovered: !0 });
            }),
            (t.prototype.handleMouseOut = function () {
              this.setState({ bHovered: !1 });
            }),
            (t.prototype.render = function () {
              var e,
                t,
                r =
                  ((e = this.props.reactionType),
                  (t =
                    !this.props.bDisableAnimation &&
                    (this.state.bHovered || this.props.bForceAnimated)),
                  d.c.STORE_CDN_URL +
                    "public/images/loyalty/reactions/" +
                    (t ? "animated" : "still") +
                    "/" +
                    e +
                    ".png");
              return i.createElement("img", {
                className: this.props.className,
                src: r,
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
              });
            }),
            Object(n.c)([u.a], t.prototype, "handleMouseOver", null),
            Object(n.c)([u.a], t.prototype, "handleMouseOut", null),
            t
          );
        })(i.PureComponent);
      var Me = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              (r.state = { targetType: t.targetType }),
              r.Init(t.serviceTransport),
              (window.fnLoyalty_ShowAwardModal = function (e, t, n, i, a) {
                a || (a = 0),
                  r.setState({
                    bShowModal: !0,
                    fnSuccessFunc: n,
                    targetid: e,
                    ugcType: i,
                    initialSelectedReaction: a,
                    targetType: t,
                  });
              }),
              (r.state = {}),
              r
            );
          }
          var r;
          return (
            Object(n.d)(t, e),
            (r = t),
            (t.prototype.Init = function (e) {
              if (!r.s_LoyaltyAwardModalStore)
                if (e) r.s_LoyaltyAwardModalStore = new J(e);
                else {
                  var t = Object(d.g)("loyaltystore", "application_config"),
                    n = new m.a(d.c.WEBAPI_BASE_URL, t.webapi_token);
                  r.s_LoyaltyAwardModalStore = new J(n.GetServiceTransport());
                }
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state,
                n = t.bShowModal,
                a = t.targetType,
                o = t.fnSuccessFunc,
                s = t.targetid,
                c = t.ugcType,
                l = t.initialSelectedReaction,
                u = r.s_LoyaltyAwardModalStore;
              if (!n) return null;
              u.GetAwardConfigurations();
              return i.createElement(Ce, {
                key: s,
                targetid: s,
                active: n,
                targetType: a,
                ugcType: c,
                onDismiss: function () {
                  return e.setState({ bShowModal: !1 });
                },
                onSuccess: o,
                store: r.s_LoyaltyAwardModalStore,
                initialSelectedReaction: l,
              });
            }),
            (t.defaultProps = { targetType: 1 }),
            (t = r = Object(n.c)([o.a], t))
          );
        })(i.Component),
        Ce =
          ((t.a = Me),
          i.Component,
          (function (e) {
            function t(t) {
              var r = e.call(this, t) || this;
              return (
                t.store.SetTarget(t.targetid, t.targetType),
                (r.state = {
                  selectedReaction: t.initialSelectedReaction || 0,
                  ePhase: ge.SELECTING,
                }),
                r
              );
            }
            return (
              Object(n.d)(t, e),
              (t.prototype.render = function () {
                var e = this,
                  t = this.props,
                  r = t.active,
                  n = t.targetType,
                  a = t.ugcType,
                  o = t.store,
                  u = t.onDismiss,
                  m = this.state,
                  f = m.selectedReaction,
                  b = m.ePhase,
                  y = m.celebrate;
                if (!r) return null;
                var p,
                  w = o.GetExistingReactions(),
                  h = o.GetAwardConfigurations(),
                  _ = o.GetUserPointBalance(),
                  g = (function (e, t, r) {
                    var n = [];
                    return (
                      e.forEach(function (e) {
                        if (e.valid_target_types.includes(t))
                          switch (t) {
                            case 1:
                              n.push(e.reactionid);
                              break;
                            case 2:
                              e.valid_ugc_types.includes(r) &&
                                n.push(e.reactionid);
                              break;
                            case 3:
                            case 4:
                            case 5:
                              n.push(e.reactionid);
                          }
                      }),
                      n
                    );
                  })(h, n, a),
                  v = 0 === f ? null : h.get(f),
                  B = v ? v.points_cost : 0,
                  R = v ? v.points_transferred : 0,
                  M = "";
                switch (n) {
                  case 1:
                    M = Object(l.f)("#GrantAwardDescription_Review");
                    break;
                  case 2:
                    M = Object(l.f)("#GrantAwardDescription_UGC");
                    break;
                  case 3:
                    M = Object(l.f)("#GrantAwardDescription_Profile");
                    break;
                  case 4:
                    M = Object(l.f)("#GrantAwardDescription_ForumTopic");
                    break;
                  case 5:
                    M = Object(l.f)("#GrantAwardDescription_Comment");
                }
                switch (b) {
                  case ge.SELECTING:
                    var C = 0 === f || w.get(f),
                      O = !_ || _.greaterThanOrEqual(B),
                      j = i.createElement(
                        ve.r,
                        {
                          onClick: function () {
                            return e.setState({ ePhase: ge.CONFIRM });
                          },
                          disabled: C,
                          title: Object(l.f)(
                            C
                              ? "#GrantAward_PromptTooltip"
                              : "#GrantAward_SubmitTooltip"
                          ),
                        },
                        Object(l.f)(
                          C ? "#GrantAward_SelectAward" : "#GrantAward_Next"
                        )
                      );
                    p = i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(Oe, { description: M }),
                      i.createElement(ze, null),
                      i.createElement(
                        "div",
                        { className: c.ButtonContainer },
                        g.map(function (t) {
                          return i.createElement(Ee, {
                            key: t,
                            reaction: t,
                            selected: t === f && !w.get(t),
                            cost: h.get(t).points_cost,
                            alreadyAwarded: w.get(t),
                            onClick: function () {
                              w.get(t) ||
                                e.setState({
                                  selectedReaction: t === f ? 0 : t,
                                });
                            },
                          });
                        })
                      ),
                      i.createElement(ze, null),
                      i.createElement(
                        je,
                        { store: o },
                        C || O
                          ? j
                          : [
                              i.createElement(
                                "div",
                                { key: "msg", className: c.NotEnoughPoints },
                                Object(l.f)(
                                  "#GrantAward_CantAfford",
                                  _.negate().add(B).toNumber().toLocaleString()
                                )
                              ),
                              i.createElement(
                                "a",
                                {
                                  key: "button",
                                  href:
                                    d.c.STORE_BASE_URL + "points/howitworks",
                                },
                                i.createElement(
                                  ve.d,
                                  { key: "button" },
                                  Object(l.f)("#GrantAward_HowToGetPoints")
                                )
                              ),
                            ]
                      )
                    );
                    break;
                  case ge.CONFIRM:
                  case ge.SUBMITTING:
                  case ge.DONE:
                    p = i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(Oe, { description: M }),
                      i.createElement(ze, null),
                      i.createElement(
                        "div",
                        { style: { position: "relative" } },
                        i.createElement(
                          "div",
                          {
                            className: Object(X.a)(
                              c.ConfirmContainer,
                              b === ge.CONFIRM && c.Visible
                            ),
                          },
                          i.createElement(Re, {
                            className: c.ConfirmAwardImage,
                            reactionType: f,
                          }),
                          i.createElement(
                            "div",
                            { className: c.ConfirmText },
                            Object(l.n)(
                              "#GrantAward_Confirm",
                              i.createElement(Le, null, B.toLocaleString()),
                              i.createElement(
                                "span",
                                { className: c.AwardName },
                                ne(f)
                              )
                            )
                          ),
                          i.createElement(
                            "div",
                            { className: c.ConfirmText },
                            Object(l.n)(
                              "#GrantAward_Confirm_Details",
                              i.createElement(Le, null, R.toLocaleString()),
                              i.createElement(
                                "span",
                                { className: c.TimePeriod },
                                Object(l.f)(
                                  "#GrantAward_Confirm_DetailsTimePeriod"
                                )
                              )
                            )
                          )
                        ),
                        i.createElement(
                          "div",
                          {
                            className: Object(X.a)(
                              c.LoadingContainer,
                              b === ge.SUBMITTING && c.Visible
                            ),
                          },
                          i.createElement(Se, null)
                        ),
                        i.createElement(
                          "div",
                          {
                            className: Object(X.a)(
                              c.SuccessContainer,
                              b === ge.DONE && c.Visible
                            ),
                          },
                          i.createElement(Re, {
                            className: c.ConfirmAwardImage,
                            reactionType: f,
                          }),
                          i.createElement(
                            "div",
                            { className: c.SuccessText },
                            Object(l.f)("#GrantAward_Success")
                          )
                        )
                      ),
                      i.createElement(ze, null),
                      i.createElement(
                        je,
                        { store: o },
                        i.createElement(
                          ve.d,
                          {
                            onClick: function () {
                              return e.setState({ ePhase: ge.SELECTING });
                            },
                            disabled: b !== ge.CONFIRM,
                          },
                          Object(l.f)("#GrantAward_Back")
                        ),
                        i.createElement(
                          ve.r,
                          {
                            onClick: this.GrantAward,
                            title: Object(l.f)("#GrantAward_SubmitTooltip"),
                            disabled: b !== ge.CONFIRM,
                          },
                          Object(l.f)("#GrantAwardNowButton")
                        )
                      )
                    );
                    break;
                  case ge.ERROR:
                    var z = "";
                    switch (this.state.eResult) {
                      case 10:
                        z = Object(l.f)("#GrantAwardError_Busy");
                        break;
                      case 32:
                        z = Object(l.f)("#GrantAwardError_PersistFailed");
                        break;
                      case 8:
                        z = Object(l.f)("#GrantAwardError_InvalidParam");
                        break;
                      case 42:
                        z = Object(l.f)("#GrantAwardError_NoMatch");
                        break;
                      case 107:
                        z = Object(l.f)("#GrantAwardError_InsufficientFunds");
                        break;
                      case 15:
                        z = Object(l.f)("#GrantAwardError_AccessDenied");
                        break;
                      case 21:
                        z = Object(l.f)("#GrantAwardError_NotLoggedOn");
                        break;
                      default:
                        z = Object(l.f)("#GrantAwardError_Fail");
                    }
                    p = i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(Oe, { description: M }),
                      i.createElement(ze, null),
                      i.createElement(
                        "div",
                        { style: { position: "relative" } },
                        i.createElement(
                          "div",
                          { className: c.ErrorContainer },
                          i.createElement("div", { className: c.ErrorText }, z)
                        )
                      ),
                      i.createElement(ze, null),
                      i.createElement(
                        je,
                        { store: o },
                        i.createElement(
                          ve.d,
                          {
                            onClick: function () {
                              return e.setState({ ePhase: ge.SELECTING });
                            },
                          },
                          Object(l.f)("#GrantAward_Back")
                        )
                      )
                    );
                }
                return i.createElement(
                  s.b,
                  { className: c.GrantAwardModal, active: r, onDismiss: u },
                  y && i.createElement(me, { eType: ie.Default }),
                  p
                );
              }),
              (t.prototype.GrantAward = function () {
                var e = this,
                  t = this.props,
                  r = t.targetid,
                  n = t.store,
                  i = t.onSuccess,
                  a = this.state.selectedReaction;
                null !== a &&
                  0 != a &&
                  (this.setState({ ePhase: ge.SUBMITTING }),
                  n.AddReaction(a).then(function (t) {
                    var n = t.eResult;
                    t.strMessage;
                    1 == n
                      ? e.setState(
                          { ePhase: ge.DONE, celebrate: !0 },
                          function () {
                            return setTimeout(function () {
                              i && i(r, a);
                            }, 2e3);
                          }
                        )
                      : e.setState({ ePhase: ge.ERROR, eResult: n });
                  }));
              }),
              Object(n.c)([u.a], t.prototype, "GrantAward", null),
              (t = Object(n.c)([o.a], t))
            );
          })(i.Component)),
        Oe = function (e) {
          var t = e.description;
          return i.createElement(
            "div",
            { className: c.Header },
            i.createElement(
              "div",
              { className: c.Title },
              Object(l.f)("#GrantAwardTitle")
            ),
            i.createElement("div", { className: c.Description }, t)
          );
        },
        je = Object(o.a)(function (e) {
          var t = e.store,
            r = e.children,
            n = t.GetUserPointBalance(),
            a = n && n.toNumber().toLocaleString();
          return i.createElement(
            "div",
            { className: c.Footer },
            i.createElement(
              "div",
              { className: c.Left },
              i.createElement(re.E, { className: c.BalanceIcon }),
              i.createElement(
                "div",
                { className: c.BalanceDetails },
                i.createElement(
                  "div",
                  { className: c.BalanceLabel },
                  Object(l.f)("#YourBalance")
                ),
                i.createElement("div", { className: c.BalanceAmount }, a)
              )
            ),
            i.createElement(
              "div",
              { className: c.Right },
              i.createElement(
                "div",
                { className: c.Actions },
                i.Children.map(r, function (e) {
                  return i.createElement("div", { className: c.Action }, e);
                })
              ),
              i.createElement(
                "a",
                {
                  className: c.FooterLink,
                  href: d.c.STORE_BASE_URL + "points/howitworks",
                },
                Object(l.f)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        ze = function () {
          return i.createElement("div", { className: c.Divider });
        },
        Ee = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (r.state = { bHovered: !1 }), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.handleMouseOver = function (e) {
              this.setState({ bHovered: !0 });
            }),
            (t.prototype.handleMouseOut = function () {
              this.setState({ bHovered: !1 });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.reaction,
                r = e.selected,
                a = e.alreadyAwarded,
                o = e.cost,
                s = Object(n.f)(e, [
                  "reaction",
                  "selected",
                  "alreadyAwarded",
                  "cost",
                ]);
              return i.createElement(
                ee,
                Object(n.a)(
                  {
                    type: "button",
                    onMouseEnter: this.handleMouseOver,
                    onMouseLeave: this.handleMouseOut,
                    className: Object(X.a)(
                      c.Button,
                      r && c.Selected,
                      a && c.Disabled
                    ),
                  },
                  s
                ),
                i.createElement(
                  "div",
                  { className: c.IconCtn },
                  i.createElement(Re, {
                    reactionType: t,
                    bForceAnimated: this.state.bHovered,
                    bDisableAnimation: a,
                  })
                ),
                i.createElement("div", { className: c.Label }, ne(t)),
                i.createElement(
                  Le,
                  { className: c.Points },
                  o.toLocaleString()
                ),
                a && i.createElement(Be, { className: c.IconCheckMark })
              );
            }),
            Object(n.c)([u.a], t.prototype, "handleMouseOver", null),
            Object(n.c)([u.a], t.prototype, "handleMouseOut", null),
            t
          );
        })(i.PureComponent),
        Se = function () {
          return i.createElement(te.a, { size: "large", className: c.Loading });
        },
        Le = function (e) {
          var t = e.children,
            r = e.className,
            a = Object(n.f)(e, ["children", "className"]);
          return i.createElement(
            "span",
            Object(n.a)({}, a, { className: Object(X.a)(r, c.PointsAmount) }),
            i.createElement(re.E, { className: c.PointsAmountIcon }),
            t
          );
        };
    },
  },
]);
