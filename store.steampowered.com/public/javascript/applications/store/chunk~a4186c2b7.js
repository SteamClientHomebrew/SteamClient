/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8049],
  {
    18330: (e, r, t) => {
      t.d(r, {
        $_: () => ce,
        AP: () => he,
        DN: () => g,
        Dq: () => h,
        N$: () => M,
        No: () => ve,
        Oz: () => je,
        Q0: () => s,
        RR: () => v,
        Rl: () => ie,
        Sv: () => N,
        ZY: () => O,
        cy: () => E,
        lk: () => ke,
        n8: () => pe,
      });
      var i = t(33019),
        a = t(40110);
      t(21205), t(39799);
      const n = i.Message;
      class s extends n {
        constructor(e = null) {
          super(),
            s.prototype.min_last_played || a.aR(s.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  min_last_played: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = a.Bh(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(s.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(s.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new s();
          return s.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(s.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(s.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.games || a.aR(l.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: { games: { n: 1, c: o, r: !0, q: !0 } },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class o extends n {
        constructor(e = null) {
          super(),
            o.prototype.appid || a.aR(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  appid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  last_playtime: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  first_playtime: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  playtime_windows_forever: {
                    n: 6,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 7,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  first_windows_playtime: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  first_mac_playtime: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  first_linux_playtime: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_windows_playtime: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_mac_playtime: {
                    n: 13,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_linux_playtime: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class u extends n {
        constructor(e = null) {
          super(),
            u.prototype.steamid || a.aR(u.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  mutual_friend_account_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class c extends n {
        constructor(e = null) {
          super(),
            c.prototype.incoming_invite_mutual_friends_lists || a.aR(c.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: u,
                    r: !0,
                    q: !0,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class m extends n {
        constructor(e = null) {
          super(),
            m.prototype.game_count || a.aR(m.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  game_count: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  games: { n: 2, c: d, r: !0, q: !0 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(),
            d.prototype.appid || a.aR(d.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  playtime_2weeks: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  img_icon_url: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  has_community_visible_stats: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  playtime_windows_forever: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 9,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 10,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  rtime_last_played: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  capsule_filename: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  sort_as: { n: 13, br: a.FE.readString, bw: a.Xc.writeString },
                  has_workshop: {
                    n: 14,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  has_market: { n: 15, br: a.FE.readBool, bw: a.Xc.writeBool },
                  has_dlc: { n: 16, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class B extends n {
        constructor(e = null) {
          super(),
            B.prototype.last_update_time || a.aR(B.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  last_update_time: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class y extends n {
        constructor(e = null) {
          super(),
            y.prototype.player_level || a.aR(y.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  player_level: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  badges: { n: 2, c: b, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class b extends n {
        constructor(e = null) {
          super(),
            b.prototype.level || a.aR(b.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  level: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  series: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  border_color: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class _ extends n {
        constructor(e = null) {
          super(),
            _.prototype.communityitemid || a.aR(_.M()),
            n.initialize(this, e, 0, -1, [15], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  image_small: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  image_large: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  name: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  item_title: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_description: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  appid: { n: 7, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  item_type: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  item_class: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  movie_webm: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  movie_mp4: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  movie_webm_small: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  movie_mp4_small: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  equipped_flags: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  profile_colors: { n: 15, c: w, r: !0, q: !0 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem";
        }
      }
      class w extends n {
        constructor(e = null) {
          super(),
            w.prototype.style_name || a.aR(w.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  style_name: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  color: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem_ProfileColor";
        }
      }
      class z extends n {
        constructor(e = null) {
          super(),
            z.prototype.profile_background || a.aR(z.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { profile_background: { n: 1, c: _ } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class g extends n {
        constructor(e = null) {
          super(),
            g.prototype.communityitemid || a.aR(g.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class f extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class F extends n {
        constructor(e = null) {
          super(),
            F.prototype.profile_background || a.aR(F.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { profile_background: { n: 1, c: _ } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class M extends n {
        constructor(e = null) {
          super(),
            M.prototype.communityitemid || a.aR(M.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class R extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class p extends n {
        constructor(e = null) {
          super(),
            p.prototype.avatar_frame || a.aR(p.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = { proto: p, fields: { avatar_frame: { n: 1, c: _ } } }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class h extends n {
        constructor(e = null) {
          super(),
            h.prototype.communityitemid || a.aR(h.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class W extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class S extends n {
        constructor(e = null) {
          super(),
            S.prototype.avatar || a.aR(S.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = { proto: S, fields: { avatar: { n: 1, c: _ } } }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class v extends n {
        constructor(e = null) {
          super(),
            v.prototype.communityitemid || a.aR(v.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
        }
      }
      class j extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class T extends n {
        constructor(e = null) {
          super(),
            T.prototype.steam_deck_keyboard_skin || a.aR(T.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { steam_deck_keyboard_skin: { n: 1, c: _ } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
        }
      }
      class O extends n {
        constructor(e = null) {
          super(),
            O.prototype.communityitemid || a.aR(O.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class P extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class C extends n {
        constructor(e = null) {
          super(),
            C.prototype.profile_backgrounds || a.aR(C.M()),
            n.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  profile_backgrounds: { n: 1, c: _, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: _, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: _, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: _, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: _, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: _, r: !0, q: !0 },
                  steam_deck_startup_movies: { n: 7, c: _, r: !0, q: !0 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class E extends n {
        constructor(e = null) {
          super(),
            E.prototype.steamid || a.aR(E.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class X extends n {
        constructor(e = null) {
          super(),
            X.prototype.profile_background || a.aR(X.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  profile_background: { n: 1, c: _ },
                  mini_profile_background: { n: 2, c: _ },
                  avatar_frame: { n: 3, c: _ },
                  animated_avatar: { n: 4, c: _ },
                  profile_modifier: { n: 5, c: _ },
                  steam_deck_keyboard_skin: { n: 6, c: _ },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class U extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
        }
      }
      class A extends n {
        constructor(e = null) {
          super(),
            A.prototype.emoticons || a.aR(A.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { emoticons: { n: 1, c: x, r: !0, q: !0 } },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(A.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class x extends n {
        constructor(e = null) {
          super(),
            x.prototype.name || a.aR(x.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  name: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  count: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  time_last_used: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  use_count: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_received: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 6, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class N extends n {
        constructor(e = null) {
          super(),
            N.prototype.appid || a.aR(N.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  status_text: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = a.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(N.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class I extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class G extends n {
        constructor(e = null) {
          super(),
            G.prototype.accountid || a.aR(G.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  postid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  status_text: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  deleted: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  appid: { n: 5, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class D extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class q extends n {
        constructor(e = null) {
          super(),
            q.prototype.achievement_progress || a.aR(q.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { achievement_progress: { n: 1, c: k, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class k extends n {
        constructor(e = null) {
          super(),
            k.prototype.appid || a.aR(k.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  unlocked: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  total: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  percentage: { n: 4, br: a.FE.readFloat, bw: a.Xc.writeFloat },
                  all_unlocked: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  cache_time: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(k.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class L extends n {
        constructor(e = null) {
          super(),
            L.prototype.achievements || a.aR(L.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { achievements: { n: 1, c: K, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(L.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response";
        }
      }
      class K extends n {
        constructor(e = null) {
          super(),
            K.prototype.internal_name || a.aR(K.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  internal_name: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  localized_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  localized_desc: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  icon: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  icon_gray: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  hidden: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  player_percent_unlocked: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(K.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Achievement";
        }
      }
      class $ extends n {
        constructor(e = null) {
          super(),
            $.prototype.has_favorite_badge || a.aR($.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  has_favorite_badge: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  badgeid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_type: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  border_color: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 6, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  level: { n: 7, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class Q extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class H extends n {
        constructor(e = null) {
          super(),
            H.prototype.slot || a.aR(H.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  slot: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  publishedfileid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_assetid: {
                    n: 4,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_contextid: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  notes: { n: 6, br: a.FE.readString, bw: a.Xc.writeString },
                  title: { n: 7, br: a.FE.readString, bw: a.Xc.writeString },
                  accountid: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  badgeid: { n: 9, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  border_color: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  item_classid: {
                    n: 11,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_instanceid: {
                    n: 12,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  ban_check_result: {
                    n: 13,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(H.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomizationSlot";
        }
      }
      class V extends n {
        constructor(e = null) {
          super(),
            V.prototype.customization_type || a.aR(V.M()),
            n.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  large: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  slots: { n: 3, c: H, r: !0, q: !0 },
                  active: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  customization_style: {
                    n: 5,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  purchaseid: {
                    n: 6,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  level: { n: 7, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(V.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomization";
        }
      }
      class Z extends n {
        constructor(e = null) {
          super(),
            Z.prototype.theme_id || a.aR(Z.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  theme_id: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  title: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = a.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileTheme";
        }
      }
      class Y extends n {
        constructor(e = null) {
          super(),
            Y.prototype.hide_profile_awards || a.aR(Y.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfilePreferences";
        }
      }
      class J extends n {
        constructor(e = null) {
          super(),
            J.prototype.customizations || a.aR(J.M()),
            n.initialize(this, e, 0, -1, [1, 4], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  customizations: { n: 1, c: V, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  profile_theme: { n: 3, c: Z },
                  purchased_customizations: { n: 4, c: ee, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: Y },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(J.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class ee extends n {
        constructor(e = null) {
          super(),
            ee.prototype.purchaseid || a.aR(ee.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  level: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = a.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ee.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class re extends n {
        constructor(e = null) {
          super(),
            re.prototype.purchased_customizations || a.aR(re.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  purchased_customizations: { n: 1, c: te, r: !0, q: !0 },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class te extends n {
        constructor(e = null) {
          super(),
            te.prototype.purchaseid || a.aR(te.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class ie extends n {
        constructor(e = null) {
          super(),
            ie.prototype.steamid || a.aR(ie.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class ae extends n {
        constructor(e = null) {
          super(),
            ae.prototype.purchased_customizations || a.aR(ae.M()),
            n.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  purchased_customizations: { n: 1, c: ne, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: se, r: !0, q: !0 },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = a.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class ne extends n {
        constructor(e = null) {
          super(),
            ne.prototype.customization_type || a.aR(ne.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  count: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = a.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class se extends n {
        constructor(e = null) {
          super(),
            se.prototype.customization_type || a.aR(se.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  level: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = a.Bh(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(se.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(se.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class le extends n {
        constructor(e = null) {
          super(),
            le.prototype.profile_themes || a.aR(le.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: { profile_themes: { n: 1, c: Z, r: !0, q: !0 } },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = a.Bh(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(le.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class oe extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new oe();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class ue extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ue();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class ce extends n {
        constructor(e = null) {
          super(),
            ce.prototype.appid || a.aR(ce.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class me extends n {
        constructor(e = null) {
          super(),
            me.prototype.your_info || a.aR(me.M()),
            n.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  your_info: { n: 1, c: Be },
                  in_game: { n: 2, c: de, r: !0, q: !0 },
                  played_recently: { n: 3, c: de, r: !0, q: !0 },
                  played_ever: { n: 4, c: de, r: !0, q: !0 },
                  owns: { n: 5, c: de, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: de, r: !0, q: !0 },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class de extends n {
        constructor(e = null) {
          super(),
            de.prototype.steamid || a.aR(de.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = a.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(de.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class Be extends n {
        constructor(e = null) {
          super(),
            Be.prototype.steamid || a.aR(Be.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  in_wishlist: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  owned: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = a.Bh(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Be.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class ye extends n {
        constructor(e = null) {
          super(),
            ye.prototype.time_ssa_accepted || a.aR(ye.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  time_ssa_accepted: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_ssa_updated: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_chinassa_accepted: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = a.Bh(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ye.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class be extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new be();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class _e extends n {
        constructor(e = null) {
          super(),
            _e.prototype.nicknames || a.aR(_e.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: { nicknames: { n: 1, c: we, r: !0, q: !0 } },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = a.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_e.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class we extends n {
        constructor(e = null) {
          super(),
            we.prototype.accountid || a.aR(we.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = a.Bh(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(we.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(we.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class ze extends n {
        constructor(e = null) {
          super(),
            ze.prototype.accountid || a.aR(ze.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  notifications_showingame: {
                    n: 3,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  notifications_showonline: {
                    n: 4,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  notifications_showmessages: {
                    n: 5,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  sounds_showingame: {
                    n: 6,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  sounds_showonline: {
                    n: 7,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  sounds_showmessages: {
                    n: 8,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  notifications_sendmobile: {
                    n: 9,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = a.Bh(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ze.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PerFriendPreferences";
        }
      }
      class ge extends n {
        constructor(e = null) {
          super(),
            ge.prototype.preferences || a.aR(ge.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: { preferences: { n: 1, c: ze, r: !0, q: !0 } },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = a.Bh(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ge.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class fe extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new fe();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class Fe extends n {
        constructor(e = null) {
          super(),
            Fe.prototype.invite_sent || a.aR(Fe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  invite_sent: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  friend_relationship: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  result: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = a.Bh(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Fe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Response";
        }
      }
      class Me extends n {
        constructor(e = null) {
          super(),
            Me.prototype.friend_relationship || a.aR(Me.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = a.Bh(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class Re extends n {
        constructor(e = null) {
          super(),
            Re.prototype.friend_relationship || a.aR(Re.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = a.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class pe extends n {
        constructor(e = null) {
          super(),
            pe.prototype.hide_adult_content_violence || a.aR(pe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  hide_adult_content_violence: {
                    n: 1,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  hide_adult_content_sex: {
                    n: 2,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  parenthesize_nicknames: {
                    n: 4,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  text_filter_setting: {
                    n: 5,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  text_filter_ignore_friends: {
                    n: 6,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  text_filter_words_revision: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_updated: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = a.Bh(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(pe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class he extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new he();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
        }
      }
      class We extends n {
        constructor(e = null) {
          super(),
            We.prototype.preferences || a.aR(We.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: { preferences: { n: 1, c: pe } },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = a.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(We.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class Se extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Se();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class ve extends n {
        constructor(e = null) {
          super(),
            ve.prototype.text_filter_custom_banned_words || a.aR(ve.M()),
            n.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  text_filter_custom_banned_words: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  text_filter_custom_clean_words: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  text_filter_words_revision: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = a.Bh(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ve.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWords";
        }
      }
      class je extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new je();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class Te extends n {
        constructor(e = null) {
          super(),
            Te.prototype.words || a.aR(Te.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = { proto: Te, fields: { words: { n: 1, c: ve } } }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = a.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class Oe extends n {
        constructor(e = null) {
          super(),
            Oe.prototype.state || a.aR(Oe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  state: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  announcement_headline: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = a.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class Pe extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Pe();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class Ce extends n {
        constructor(e = null) {
          super(),
            Ce.prototype.privacy_state || a.aR(Ce.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_inventory: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_gifts: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_ownedgames: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_playtime: {
                    n: 5,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_friendslist: {
                    n: 6,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = a.Bh(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPrivacySettings";
        }
      }
      class Ee extends n {
        constructor(e = null) {
          super(),
            Ee.prototype.privacy_settings || a.aR(Ee.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: { privacy_settings: { n: 1, c: Ce } },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = a.Bh(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ee.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class Xe extends n {
        constructor(e = null) {
          super(),
            Xe.prototype.is_enabled || a.aR(Xe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  is_enabled: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  seconds: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  seconds_today: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  is_steamchina_account: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  is_age_verified: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  seconds_allowed_today: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  age_verification_pending: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  block_minors: { n: 8, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = a.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Xe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Xe();
          return Xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class Ue extends n {
        constructor(e = null) {
          super(),
            Ue.prototype.games || a.aR(Ue.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: { games: { n: 1, c: o, r: !0, q: !0 } },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = a.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class Ae extends n {
        constructor(e = null) {
          super(),
            Ae.prototype.accountid || a.aR(Ae.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  is_echo_to_self: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = a.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class xe extends n {
        constructor(e = null) {
          super(),
            xe.prototype.accountid || a.aR(xe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = a.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(xe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class Ne extends n {
        constructor(e = null) {
          super(),
            Ne.prototype.state || a.aR(Ne.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  state: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  announcement_headline: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = a.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class Ie extends n {
        constructor(e = null) {
          super(),
            Ie.prototype.preferences || a.aR(Ie.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: { preferences: { n: 1, c: pe } },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = a.Bh(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class Ge extends n {
        constructor(e = null) {
          super(),
            Ge.prototype.words || a.aR(Ge.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = { proto: Ge, fields: { words: { n: 1, c: ve } } }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = a.Bh(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ge.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class De extends n {
        constructor(e = null) {
          super(),
            De.prototype.accountid || a.aR(De.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  preferences: { n: 2, c: ze },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = a.Bh(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(De.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(De.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(De.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(De.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class qe extends n {
        constructor(e = null) {
          super(),
            qe.prototype.privacy_settings || a.aR(qe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: { privacy_settings: { n: 1, c: Ce } },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = a.Bh(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(qe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      var ke, Le;
      !(function (e) {
        (e.GetMutualFriendsForIncomingInvites = function (e, r) {
          return e.SendMsg(
            "Player.GetMutualFriendsForIncomingInvites#1",
            r,
            c,
            { bConstMethod: !0, ePrivilege: 1 }
          );
        }),
          (e.GetOwnedGames = function (e, r) {
            return e.SendMsg("Player.GetOwnedGames#1", r, m, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetPlayNext = function (e, r) {
            return e.SendMsg("Player.GetPlayNext#1", r, B, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFriendsGameplayInfo = function (e, r) {
            return e.SendMsg("Player.GetFriendsGameplayInfo#1", r, me, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetGameBadgeLevels = function (e, r) {
            return e.SendMsg("Player.GetGameBadgeLevels#1", r, y, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetProfileBackground = function (e, r) {
            return e.SendMsg("Player.GetProfileBackground#1", r, z, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetProfileBackground = function (e, r) {
            return e.SendMsg("Player.SetProfileBackground#1", r, f, {
              ePrivilege: 1,
            });
          }),
          (e.GetMiniProfileBackground = function (e, r) {
            return e.SendMsg("Player.GetMiniProfileBackground#1", r, F, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetMiniProfileBackground = function (e, r) {
            return e.SendMsg("Player.SetMiniProfileBackground#1", r, R, {
              ePrivilege: 1,
            });
          }),
          (e.GetAvatarFrame = function (e, r) {
            return e.SendMsg("Player.GetAvatarFrame#1", r, p, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAvatarFrame = function (e, r) {
            return e.SendMsg("Player.SetAvatarFrame#1", r, W, {
              ePrivilege: 1,
            });
          }),
          (e.GetAnimatedAvatar = function (e, r) {
            return e.SendMsg("Player.GetAnimatedAvatar#1", r, S, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAnimatedAvatar = function (e, r) {
            return e.SendMsg("Player.SetAnimatedAvatar#1", r, j, {
              ePrivilege: 1,
            });
          }),
          (e.GetSteamDeckKeyboardSkin = function (e, r) {
            return e.SendMsg("Player.GetSteamDeckKeyboardSkin#1", r, T, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetSteamDeckKeyboardSkin = function (e, r) {
            return e.SendMsg("Player.SetSteamDeckKeyboardSkin#1", r, P, {
              ePrivilege: 1,
            });
          }),
          (e.GetProfileItemsOwned = function (e, r) {
            return e.SendMsg("Player.GetProfileItemsOwned#1", r, C, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetProfileItemsEquipped = function (e, r) {
            return e.SendMsg("Player.GetProfileItemsEquipped#1", r, X, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetEquippedProfileItemFlags = function (e, r) {
            return e.SendMsg("Player.SetEquippedProfileItemFlags#1", r, U, {
              ePrivilege: 1,
            });
          }),
          (e.GetEmoticonList = function (e, r) {
            return e.SendMsg("Player.GetEmoticonList#1", r, A, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetAchievementsProgress = function (e, r) {
            return e.SendMsg("Player.GetAchievementsProgress#1", r, q, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetGameAchievements = function (e, r) {
            return e.SendMsg("Player.GetGameAchievements#1", r, L, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetFavoriteBadge = function (e, r) {
            return e.SendMsg("Player.GetFavoriteBadge#1", r, $, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetFavoriteBadge = function (e, r) {
            return e.SendMsg("Player.SetFavoriteBadge#1", r, Q, {
              ePrivilege: 1,
            });
          }),
          (e.GetProfileCustomization = function (e, r) {
            return e.SendMsg("Player.GetProfileCustomization#1", r, J, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetPurchasedProfileCustomizations = function (e, r) {
            return e.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              r,
              re,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetPurchasedAndUpgradedProfileCustomizations = function (e, r) {
            return e.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              r,
              ae,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetProfileThemesAvailable = function (e, r) {
            return e.SendMsg("Player.GetProfileThemesAvailable#1", r, le, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetProfileTheme = function (e, r) {
            return e.SendMsg("Player.SetProfileTheme#1", r, oe, {
              ePrivilege: 1,
            });
          }),
          (e.SetProfilePreferences = function (e, r) {
            return e.SendMsg("Player.SetProfilePreferences#1", r, ue, {
              ePrivilege: 1,
            });
          }),
          (e.PostStatusToFriends = function (e, r) {
            return e.SendMsg("Player.PostStatusToFriends#1", r, I, {
              ePrivilege: 3,
            });
          }),
          (e.GetPostedStatus = function (e, r) {
            return e.SendMsg("Player.GetPostedStatus#1", r, G, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.DeletePostedStatus = function (e, r) {
            return e.SendMsg("Player.DeletePostedStatus#1", r, D, {
              ePrivilege: 1,
            });
          }),
          (e.ClientGetLastPlayedTimes = function (e, r) {
            return e.SendMsg("Player.ClientGetLastPlayedTimes#1", r, l, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetTimeSSAAccepted = function (e, r) {
            return e.SendMsg("Player.GetTimeSSAAccepted#1", r, ye, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.AcceptSSA = function (e, r) {
            return e.SendMsg("Player.AcceptSSA#1", r, be, { ePrivilege: 1 });
          }),
          (e.GetNicknameList = function (e, r) {
            return e.SendMsg("Player.GetNicknameList#1", r, _e, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetPerFriendPreferences = function (e, r) {
            return e.SendMsg("Player.GetPerFriendPreferences#1", r, ge, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetPerFriendPreferences = function (e, r) {
            return e.SendMsg("Player.SetPerFriendPreferences#1", r, fe, {
              ePrivilege: 1,
            });
          }),
          (e.AddFriend = function (e, r) {
            return e.SendMsg("Player.AddFriend#1", r, Fe, { ePrivilege: 1 });
          }),
          (e.RemoveFriend = function (e, r) {
            return e.SendMsg("Player.RemoveFriend#1", r, Me, { ePrivilege: 1 });
          }),
          (e.IgnoreFriend = function (e, r) {
            return e.SendMsg("Player.IgnoreFriend#1", r, Re, { ePrivilege: 1 });
          }),
          (e.GetCommunityPreferences = function (e, r) {
            return e.SendMsg("Player.GetCommunityPreferences#1", r, We, {
              ePrivilege: 1,
            });
          }),
          (e.SetCommunityPreferences = function (e, r) {
            return e.SendMsg("Player.SetCommunityPreferences#1", r, Se, {
              ePrivilege: 1,
            });
          }),
          (e.GetTextFilterWords = function (e, r) {
            return e.SendMsg("Player.GetTextFilterWords#1", r, Te, {
              ePrivilege: 1,
            });
          }),
          (e.GetNewSteamAnnouncementState = function (e, r) {
            return e.SendMsg("Player.GetNewSteamAnnouncementState#1", r, Oe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.UpdateSteamAnnouncementLastRead = function (e, r) {
            return e.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              r,
              Pe,
              { ePrivilege: 1 }
            );
          }),
          (e.GetPrivacySettings = function (e, r) {
            return e.SendMsg("Player.GetPrivacySettings#1", r, Ee, {
              ePrivilege: 1,
            });
          }),
          (e.GetDurationControl = function (e, r) {
            return e.SendMsg("Player.GetDurationControl#1", r, Xe, {
              ePrivilege: 1,
            });
          });
      })(ke || (ke = {})),
        (function (e) {
          (e.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: Ue,
          }),
            (e.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: Ae,
            }),
            (e.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: xe,
            }),
            (e.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: Ne,
            }),
            (e.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: Ie,
            }),
            (e.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: Ge,
            }),
            (e.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: De,
            }),
            (e.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: qe,
            });
        })(Le || (Le = {}));
    },
    65497: (e, r, t) => {
      t.d(r, { GZ: () => y, Ts: () => g, o0: () => o, yg: () => d });
      var i = t(33019),
        a = t(40110);
      const n = i.Message;
      class s extends n {
        constructor(e = null) {
          super(),
            s.prototype.communityitemid || a.aR(s.M()),
            n.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_type: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  owner: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  attributes: { n: 5, c: l, r: !0, q: !0 },
                  used: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  owner_origin: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  amount: {
                    n: 8,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = a.Bh(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(s.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(s.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new s();
          return s.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(s.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(s.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_CommunityItem";
        }
      }
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.attributeid || a.aR(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  attributeid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  value: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_CommunityItem_Attribute";
        }
      }
      class o extends n {
        constructor(e = null) {
          super(),
            o.prototype.filter_appids || a.aR(o.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  filter_appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityInventory_Request";
        }
      }
      class u extends n {
        constructor(e = null) {
          super(),
            u.prototype.items || a.aR(u.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { items: { n: 1, c: s, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityInventory_Response";
        }
      }
      class c extends n {
        constructor(e = null) {
          super(),
            c.prototype.item_definitions || a.aR(c.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: { item_definitions: { n: 1, c: m, r: !0, q: !0 } },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Response";
        }
      }
      class m extends n {
        constructor(e = null) {
          super(),
            m.prototype.item_type || a.aR(m.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  item_type: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  item_name: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_title: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_description: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_image_small: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_image_large: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_key_values: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_series: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  item_class: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  editor_accountid: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  active: { n: 12, br: a.FE.readBool, bw: a.Xc.writeBool },
                  item_image_composed: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_image_composed_foil: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  deleted: { n: 15, br: a.FE.readBool, bw: a.Xc.writeBool },
                  item_last_changed: {
                    n: 16,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  broadcast_channel_id: {
                    n: 17,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_movie_webm: {
                    n: 18,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_mp4: {
                    n: 19,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_webm_small: {
                    n: 20,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 21,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(),
            d.prototype.appid || a.aR(d.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  activate: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Request";
        }
      }
      class B extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Response";
        }
      }
      class y extends n {
        constructor(e = null) {
          super(),
            y.prototype.timestamp_start || a.aR(y.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  timestamp_start: {
                    n: 1,
                    d: 0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_end: {
                    n: 2,
                    d: 4294967295,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetNumTradingCardsEarned_Request";
        }
      }
      class b extends n {
        constructor(e = null) {
          super(),
            b.prototype.num_trading_cards || a.aR(b.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  num_trading_cards: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetNumTradingCardsEarned_Response";
        }
      }
      class _ extends n {
        constructor(e = null) {
          super(),
            _.prototype.eventid || a.aR(_.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  eventid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  item_bucket: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  active: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  rarity: { n: 5, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  package_to_grant: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  game_item_id: {
                    n: 7,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  community_item_class: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  community_item_type: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  loyalty_point_type: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  amount: {
                    n: 11,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  rtime_time_active: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  loyalty_reward_defid: {
                    n: 13,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  user_badge_to_grant: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  user_badge_level: {
                    n: 15,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  virtual_item_def_id: {
                    n: 16,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVirtualItemRewardDefinition";
        }
      }
      class w extends n {
        constructor(e = null) {
          super(),
            w.prototype.rewards || a.aR(w.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { rewards: { n: 1, c: _, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_VirtualItemRewardDefinition_Response";
        }
      }
      class z extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new z();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_SetVirtualItemRewardDefinition_Response";
        }
      }
      var g;
      !(function (e) {
        (e.GetCommunityInventory = function (e, r) {
          return e.SendMsg("Quest.GetCommunityInventory#1", r, u, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetCommunityItemDefinitions = function (e, r) {
            return e.SendMsg("Quest.GetCommunityItemDefinitions#1", r, c, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 4,
            });
          }),
          (e.ActivateProfileModifierItem = function (e, r) {
            return e.SendMsg("Quest.ActivateProfileModifierItem#1", r, B, {
              ePrivilege: 1,
            });
          }),
          (e.GetNumTradingCardsEarned = function (e, r) {
            return e.SendMsg("Quest.GetNumTradingCardsEarned#1", r, b, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetVirtualItemRewardDefinition = function (e, r) {
            return e.SendMsg("Quest.GetVirtualItemRewardDefinition#1", r, w, {
              bConstMethod: !0,
              ePrivilege: 4,
            });
          }),
          (e.SetVirtualItemRewardDefinition = function (e, r) {
            return e.SendMsg("Quest.SetVirtualItemRewardDefinition#1", r, z, {
              ePrivilege: 4,
            });
          });
      })(g || (g = {}));
    },
  },
]);
