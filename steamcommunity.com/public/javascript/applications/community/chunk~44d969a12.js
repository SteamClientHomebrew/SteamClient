/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5503],
  {
    50711: (e) => {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_1YGAH",
        avatarStatus: "steamavatar_avatarStatus_1yIzy",
        avatar: "steamavatar_avatar_1p_Qr",
        avatarFrame: "steamavatar_avatarFrame_3atbN",
        avatarFrameImg: "steamavatar_avatarFrameImg_338kJ",
      };
    },
    11301: (e, t, a) => {
      "use strict";
      a.d(t, { Pv: () => h, U0: () => _.U, WV: () => _.W, sB: () => p });
      var i = a(33940),
        r = a(50265),
        s = a(39818),
        n = a(58961),
        o = a(14826),
        m = a(75457),
        A = a(21907),
        l = a(32765),
        _ = a(4556);
      function p(e) {
        let t = "offline";
        return (
          e &&
            (e.is_ingame
              ? (t = "ingame")
              : e.m_broadcastAccountId
              ? (t = "watchingbroadcast")
              : e.is_online && (t = "online"),
            e.is_awayOrSnooze && (t += " awayOrSnooze")),
          t
        );
      }
      class h {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = m.fi.k_EPersonaStateOffline),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = _.W),
            (this.m_strAccountName = ""),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_mapRichPresence = r.LO.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_steamid = e);
        }
        Reset() {
          (this.m_ePersonaState = m.fi.k_EPersonaStateOffline),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            this.m_mapRichPresence.clear(),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        get is_online() {
          return (
            this.m_ePersonaState != m.fi.k_EPersonaStateOffline &&
            this.m_ePersonaState != m.fi.k_EPersonaStateInvisible
          );
        }
        get is_ingame() {
          return (
            this.is_online &&
            (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
          );
        }
        get is_watchingbroadcast() {
          return !!this.m_broadcastAccountId;
        }
        get is_in_nonsteam_game() {
          return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
        }
        get is_in_joinable_game() {
          return (
            this.has_joinable_game_flag ||
            this.is_in_valid_lobby ||
            this.has_server_ip
          );
        }
        get has_joinable_game_flag() {
          return (
            0 !=
            (this.m_unPersonaStateFlags &
              A.Fp.k_EPersonaStateFlag_InJoinableGame)
          );
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return (
            this.m_ePersonaState == m.fi.k_EPersonaStateAway ||
            this.m_ePersonaState == m.fi.k_EPersonaStateSnooze
          );
        }
        HasStateFlag(e) {
          return 0 != (this.m_unPersonaStateFlags & e);
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          this.m_ePersonaState != m.fi.k_EPersonaStateOffline && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(A.Fp.k_EPersonaStateFlag_Golden);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
            ? n.Q8.GetAppInfo(this.m_unGamePlayedAppID).name
            : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? n.Q8.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? n.Q8.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? n.Q8.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            n.Q8.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
        }
        HasCurrentGameRichPresence() {
          return this.m_mapRichPresence.has("steam_display");
        }
        HasRichPresenceForViewGameInfo() {
          return !!(
            this.m_mapRichPresence.has("status") ||
            this.m_mapRichPresence.has("connect") ||
            this.m_mapRichPresence.has("connect_private")
          );
        }
        GetCurrentGameRichPresence() {
          if (this.HasCurrentGameRichPresence()) {
            let e = n.Q8.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (
            this.HasStateFlag(A.Fp.k_EPersonaStateFlag_RemotePlayTogether)
          )
            return (0, o.Xx)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const a = n.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.Xx)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!l.De.IN_MOBILE || e <= 60) && (0, s.zO)(e);
          let t = n.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.Xx)("#PersonaStateLastSeen_JustNow")
            : (0, o.Xx)("#PersonaStateLastSeen", (0, o.yW)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case m.fi.k_EPersonaStateOffline:
            case m.fi.k_EPersonaStateInvisible:
              return this.GetOfflineStatusTime();
            case m.fi.k_EPersonaStateOnline:
              return (0, o.Xx)("#PersonaStateOnline");
            case m.fi.k_EPersonaStateBusy:
              return (0, o.Xx)("#PersonaStateBusy");
            case m.fi.k_EPersonaStateAway:
              return (0, o.Xx)("#PersonaStateAway");
            case m.fi.k_EPersonaStateSnooze:
              return (0, o.Xx)("#PersonaStateSnooze");
            case m.fi.k_EPersonaStateLookingToTrade:
              return (0, o.Xx)("#PersonaStateLookingToTrade");
            case m.fi.k_EPersonaStateLookingToPlay:
              return (0, o.Xx)("#PersonaStateLookingToPlay");
            default:
              return "";
          }
        }
        get has_public_party_beacon() {
          return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
        }
        get player_group() {
          return this.m_mapRichPresence.has("steam_player_group")
            ? this.m_mapRichPresence.get("steam_player_group")
            : "";
        }
        get player_group_size() {
          return this.m_mapRichPresence.has("steam_player_group_size")
            ? Number.parseInt(
                this.m_mapRichPresence.get("steam_player_group_size"),
              )
            : 0;
        }
        get online_state() {
          return this.is_online
            ? this.is_ingame
              ? "in-game"
              : this.m_broadcastAccountId
              ? "watchingbroadcast"
              : "online"
            : "offline";
        }
        BHasAvatarSet() {
          return this.m_strAvatarHash != _.W;
        }
        get avatar_url() {
          return (0, _.U)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, _.U)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, _.U)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, a) {
          if (t.has_public_party_beacon) {
            if (!a.has_public_party_beacon) return -1;
          } else {
            if (a.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!a.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!a.is_awayOrSnooze) return 1;
              } else if (a.is_awayOrSnooze) return -1;
            } else if (a.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!a.is_online) return -1;
          } else if (a.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!a.is_awayOrSnooze) return 1;
            } else if (a.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return (
            l.De.COMMUNITY_BASE_URL +
            "profiles/" +
            this.m_steamid.ConvertTo64BitString()
          );
        }
      }
      (0, i.gn)([r.LO], h.prototype, "m_bInitialized", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_ePersonaState", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_unGamePlayedAppID", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_gameid", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_unPersonaStateFlags", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_strPlayerName", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_strAvatarHash", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_strAccountName", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_rtLastSeenOnline", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_strGameExtraInfo", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_unGameServerIP", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_unGameServerPort", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_game_lobby_id", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_bPlayerNamePending", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_bAvatarPending", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_broadcastId", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_broadcastAccountId", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_broadcastAppId", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_broadcastViewerCount", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_strBroadcastTitle", void 0),
        (0, i.gn)([r.LO], h.prototype, "m_bCommunityBanned", void 0);
    },
    68943: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => h, vV: () => c });
      var i = a(33940),
        r = a(89526),
        s = a(88464),
        n = a(11301),
        o = a(19304),
        m = a(32765),
        A = a(87178);
      const l =
        a.p +
        "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching";
      var _ = a(50711),
        p = a.n(_);
      class h extends r.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: t,
              size: a,
              className: s,
              statusStyle: n,
              statusPosition: m,
              children: _,
            } = e,
            h = (0, i._T)(e, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            c = [];
          return (
            t && c.push(t),
            c.push(
              (function (e) {
                switch (e) {
                  case "X-Small":
                  case "Small":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                  case "Medium":
                  case "MediumLarge":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
                  case "Large":
                  case "X-Large":
                  case "FillArea":
                    return l;
                }
              })(a),
            ),
            r.createElement(
              "div",
              Object.assign(
                {
                  className: (0, o.Z)(
                    p().avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    a || "Medium",
                    s,
                  ),
                },
                h,
              ),
              r.createElement("div", {
                className: (0, o.Z)(p().avatarStatus, "avatarStatus", m),
                style: n,
              }),
              r.createElement(A.j, {
                className: (0, o.Z)(p().avatar, "avatar"),
                rgSources: c,
                draggable: !1,
              }),
              _,
            )
          );
        }
      }
      let c = class extends r.Component {
        render() {
          const e = this.props,
            { persona: t, size: a, animatedAvatar: s, className: A } = e,
            l = (0, i._T)(e, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let _ = "";
          return (
            s && s.image_small && 0 != s.image_small.length
              ? (_ = m.De.MEDIA_CDN_COMMUNITY_URL + "images/" + s.image_small)
              : t &&
                ((_ = t.avatar_url_medium),
                "Small" == a || "X-Small" == a
                  ? (_ = t.avatar_url)
                  : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                    (_ = t.avatar_url_full)),
            r.createElement(
              h,
              Object.assign(
                {
                  strAvatarURL: _,
                  size: a,
                  className: (0, o.Z)((0, n.sB)(t), A),
                },
                l,
              ),
            )
          );
        }
      };
      c = (0, i.gn)([s.Pi], c);
      const u = (0, s.Pi)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: s } = e,
          n = (0, i._T)(e, ["profileItem", "className", "bDisableAnimation"]);
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let A = s ? t.image_large : t.image_small;
        return (
          A || (A = t.image_small),
          A.startsWith("https://") ||
            (A = m.De.MEDIA_CDN_COMMUNITY_URL + "images/" + A),
          r.createElement(
            "div",
            Object.assign(
              { className: (0, o.Z)(p().avatarFrame, a, "avatarFrame") },
              n,
            ),
            r.createElement("img", { className: p().avatarFrameImg, src: A }),
          )
        );
      });
      let g = class extends r.Component {
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.props.bParentHovered || this.SetupAnimationTimer();
        }
        SetupAnimationTimer() {
          let e = 0;
          switch (this.props.loopDuration) {
            case "Short":
              e = 2500;
              break;
            case "Medium":
              e = 5e3;
              break;
            case "Long":
              e = 1e4;
          }
          0 != e &&
            (this.setState({ bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e,
            )));
        }
        StopAnimationTimer() {
          this.m_timer &&
            (window.clearTimeout(this.m_timer), (this.m_timer = 0));
        }
        onHover() {
          this.SetupAnimationTimer();
        }
        componentWillUnmount() {
          this.StopAnimationTimer();
        }
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration
              ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
              : (this.setState({ bAnimate: !0 }), this.SetupAnimationTimer())),
            this.props.bParentHovered != e.bParentHovered &&
              (this.props.bParentHovered &&
              "None" != this.props.loopDuration &&
              "Infinite" != this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : this.state.bAnimate && this.SetupAnimationTimer());
        }
        render() {
          let e = this.props,
            {
              loopDuration: t,
              animatedAvatar: a,
              avatarFrame: s,
              children: n,
              style: o,
              bLimitProfileFrameAnimationTime: m,
              bParentHovered: A,
            } = e,
            l = (0, i._T)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
              "bLimitProfileFrameAnimationTime",
              "bParentHovered",
            ]);
          return (
            l.onClick &&
              (o = Object.assign(Object.assign({}, o), { cursor: "pointer" })),
            this.state.bAnimate || (a = null),
            r.createElement(
              "div",
              {
                onMouseEnter: () =>
                  this.setState({
                    bAnimate: "None" != this.props.loopDuration,
                  }),
                onMouseLeave: () => this.SetupAnimationTimer(),
              },
              r.createElement(
                c,
                Object.assign({ animatedAvatar: a }, l),
                n,
                r.createElement(u, {
                  profileItem: s,
                  bDisableAnimation: m && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      g = (0, i.gn)([s.Pi], g);
    },
  },
]);
