/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9004798";
(() => {
  var e,
    t,
    n,
    s,
    i,
    r = {
      3119: (e, t, n) => {
        var s = {
          "./friendsui_arabic.json": [58480, 6992],
          "./friendsui_brazilian.json": [33109, 2862],
          "./friendsui_bulgarian.json": [5242, 8518],
          "./friendsui_czech.json": [98399, 4448],
          "./friendsui_danish.json": [34581, 9775],
          "./friendsui_dutch.json": [27904, 7575],
          "./friendsui_english.json": [67927, 8247],
          "./friendsui_finnish.json": [63907, 4596],
          "./friendsui_french.json": [49877, 3500],
          "./friendsui_german.json": [90262, 4989],
          "./friendsui_greek.json": [84583, 1471],
          "./friendsui_hungarian.json": [85581, 5802],
          "./friendsui_indonesian.json": [37371, 6646],
          "./friendsui_italian.json": [31577, 8815],
          "./friendsui_japanese.json": [86521, 6727],
          "./friendsui_koreana.json": [73827, 6986],
          "./friendsui_latam.json": [13236, 7651],
          "./friendsui_norwegian.json": [19181, 4716],
          "./friendsui_polish.json": [3751, 699],
          "./friendsui_portuguese.json": [21520, 4264],
          "./friendsui_romanian.json": [98235, 3182],
          "./friendsui_russian.json": [99942, 2913],
          "./friendsui_sc_schinese.json": [64522, 3140],
          "./friendsui_schinese.json": [19456, 7706],
          "./friendsui_spanish.json": [12011, 3471],
          "./friendsui_swedish.json": [66100, 9818],
          "./friendsui_tchinese.json": [74628, 7340],
          "./friendsui_thai.json": [88902, 9263],
          "./friendsui_turkish.json": [95797, 5632],
          "./friendsui_ukrainian.json": [83292, 2822],
          "./friendsui_vietnamese.json": [39248, 1635],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 3119), (e.exports = i);
      },
      9014: (e, t, n) => {
        var s = {
          "./friendsui_arabic.json": [58480, 6992],
          "./friendsui_brazilian.json": [33109, 2862],
          "./friendsui_bulgarian.json": [5242, 8518],
          "./friendsui_czech.json": [98399, 4448],
          "./friendsui_danish.json": [34581, 9775],
          "./friendsui_dutch.json": [27904, 7575],
          "./friendsui_english.json": [67927, 8247],
          "./friendsui_finnish.json": [63907, 4596],
          "./friendsui_french.json": [49877, 3500],
          "./friendsui_german.json": [90262, 4989],
          "./friendsui_greek.json": [84583, 1471],
          "./friendsui_hungarian.json": [85581, 5802],
          "./friendsui_indonesian.json": [37371, 6646],
          "./friendsui_italian.json": [31577, 8815],
          "./friendsui_japanese.json": [86521, 6727],
          "./friendsui_koreana.json": [73827, 6986],
          "./friendsui_latam.json": [13236, 7651],
          "./friendsui_norwegian.json": [19181, 4716],
          "./friendsui_polish.json": [3751, 699],
          "./friendsui_portuguese.json": [21520, 4264],
          "./friendsui_romanian.json": [98235, 3182],
          "./friendsui_russian.json": [99942, 2913],
          "./friendsui_sc_schinese.json": [64522, 3140],
          "./friendsui_schinese.json": [19456, 7706],
          "./friendsui_spanish.json": [12011, 3471],
          "./friendsui_swedish.json": [66100, 9818],
          "./friendsui_tchinese.json": [74628, 7340],
          "./friendsui_thai.json": [88902, 9263],
          "./friendsui_turkish.json": [95797, 5632],
          "./friendsui_ukrainian.json": [83292, 2822],
          "./friendsui_vietnamese.json": [39248, 1635],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 9014), (e.exports = i);
      },
      38368: (e, t, n) => {
        "use strict";
        n(92143);
        var s = n(27378),
          i = n(37634);
        function r(e) {
          if (!a() || !window.document.cookie) return null;
          const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        }
        function a() {
          return !!window.document;
        }
        const o = "webui_config";
        let c;
        function l() {
          const e = (function () {
            let e = "";
            for (let s = 0; s < 24; s++)
              e += ((t = 0),
              (n = 35),
              (t = Math.ceil(t)),
              (n = Math.floor(n)),
              Math.floor(Math.random() * (n - t + 1)) + t).toString(36);
            var t, n;
            return e;
          })();
          return (
            (function (e, t, n, s) {
              if (!a()) return;
              s || (s = "/");
              let i = "";
              if (void 0 !== n && n) {
                const e = new Date();
                e.setTime(e.getTime() + 864e5 * n),
                  (i = "; expires=" + e.toUTCString());
              }
              document.cookie =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(t) +
                i +
                ";path=" +
                s;
            })("sessionid", e, 0),
            e
          );
        }
        function _(e = o) {
          const t = {},
            n = u("config", e);
          n && (delete n.SESSIONID, Object.assign(h, n), (t.config = !0));
          const s = u("userinfo", e);
          s &&
            (Object.assign(p, s),
            (t.userConfig = !0),
            p.is_support &&
              (function () {
                let e = null;
                a() && (e = r(m));
                return Boolean(e && 1 === Number.parseInt(e));
              })() &&
              (p.is_support = !1));
          const i = u("broadcast", e);
          i && (Object.assign(f, i), (t.broadcastConfig = !0));
          const c = u("community", e);
          c && (Object.assign(g, c), (t.communityConfig = !0));
          const l = u("event", e);
          return l && (Object.assign(E, l), (t.eventConfig = !0)), t;
        }
        function u(e, t = o) {
          return d(e, t, !0);
        }
        function d(e, t = o, n) {
          let s;
          if (
            ((s =
              "string" == typeof t
                ? {
                    NODE_ENV: "production",
                    STEAM_BUILD: "buildbot",
                    VALVE_BUILD: "false",
                  }.MOBILE_BUILD
                  ? null
                  : document.getElementById(t)
                : t),
            s)
          )
            try {
              if (s.hasAttribute("data-" + e)) {
                return JSON.parse(s.getAttribute("data-" + e));
              }
              return null;
            } catch (e) {
              console.error(
                "Failed to parse config for " +
                  p.steamid +
                  " (" +
                  window.location.href +
                  ")",
                e,
              );
            }
          else n && console.error("Missing config element #", t);
        }
        const m = "presentation_mode";
        const h = {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
          SUPPORTED_LANGUAGES: [],
          COUNTRY: "",
          AVATAR_BASE_URL: "",
          MEDIA_CDN_COMMUNITY_URL: "",
          MEDIA_CDN_URL: "",
          CLAN_CDN_ASSET_URL: "",
          COMMUNITY_CDN_URL: "",
          COMMUNITY_CDN_ASSET_URL: "",
          BASE_URL_SHARED_CDN: "",
          STORE_CDN_URL: "",
          PUBLIC_SHARED_URL: "",
          COMMUNITY_BASE_URL: "",
          CHAT_BASE_URL: "",
          STORE_BASE_URL: "",
          STORE_CHECKOUT_BASE_URL: "",
          LOGIN_BASE_URL: "",
          SUPPORT_BASE_URL: "",
          STORE_ICON_BASE_URL: "",
          IMG_URL: "",
          STEAMTV_BASE_URL: "",
          HELP_BASE_URL: "",
          PARTNER_BASE_URL: "",
          STATS_BASE_URL: "",
          INTERNAL_STATS_BASE_URL: "",
          BASE_URL_STORE_CDN_ASSETS: "",
          IN_CLIENT: !1,
          USE_POPUPS: !1,
          IN_MOBILE: !1,
          IN_MOBILE_WEBVIEW: !1,
          IN_TENFOOT: !1,
          PLATFORM: "",
          SNR: "",
          LAUNCHER_TYPE: 0,
          EREALM: 0,
          IN_CHROMEOS: !1,
          TESLA: !1,
          LOCAL_HOSTNAME: "",
          WEBAPI_BASE_URL: "",
          TOKEN_URL: "",
          BUILD_TIMESTAMP: 0,
          PAGE_TIMESTAMP: 0,
          FROM_WEB: !1,
          WEBSITE_ID: "Unknown",
          get SESSIONID() {
            return (function () {
              if (!a()) return c || (c = l()), c;
              let e = r("sessionid");
              return e || (e = l()), e;
            })();
          },
          FRIENDSUI_BETA: !1,
          STEAM_TV: !1,
          DEV_MODE: !1,
          IN_STEAMUI: !1,
          IN_GAMEPADUI: !1,
          IN_STEAMUI_SHARED_CONTEXT: !1,
          DECK_DISPLAY_MODE: !1,
          ON_DECK: !1,
          ON_STEAMOS: !1,
          IN_GAMESCOPE: !1,
          IN_LOGIN: !1,
          IN_LOGIN_REFRESH: !1,
          USE_LONGEST_LOC_STRING: !1,
          SILENT_STARTUP: !1,
          CLIENT_SESSION: 0,
        };
        const p = {
            logged_in: !1,
            steamid: "",
            accountid: 0,
            account_name: "",
            token: void 0,
            token_use_id: void 0,
            webapi_token: "",
            authwgtoken: "",
            is_support: !1,
            is_limited: !1,
            is_partner_member: !1,
            short_url: "",
            country_code: "",
          },
          f = { steamid: "", clanid: 0, listid: 0 },
          g = {
            CLANSTEAMID: "",
            CLANACCOUNTID: 0,
            APPID: 0,
            VANITY_ID: "",
            IS_CREATOR_HOME: !1,
            IS_CURATOR: !1,
            IS_OGG: !1,
            CAN_UPLOAD_IMAGES: !1,
            IS_VALVE_GROUP: !1,
            IS_ALLOWED_SC: !1,
          },
          E = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
        s.createContext({});
        let S = { success: !0, result: 1 };
        class I {
          m_connection = new k();
          m_bAllowAccountMismatch = !1;
          FailureResult(e = 2) {
            let t = { success: !1, result: e };
            return (
              this.m_connection &&
                !this.m_connection.browser_supported &&
                (t.browser_unsupported = !0),
              this.m_connection &&
                !this.m_connection.connected_to_client &&
                (t.connect_failed = !0),
              7 == e && (t.call_unsupported = !0),
              t
            );
          }
          SetAllowAccountMismatch(e) {
            this.m_bAllowAccountMismatch = e;
          }
          BClientConnected() {
            return this.m_connection.Connect().then(
              () => S,
              () => this.FailureResult(),
            );
          }
          BClientSupportsMessage(e) {
            return (
              !(
                !this.m_connection.connected_to_client ||
                !this.m_connection.ready
              ) &&
              -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
            );
          }
          OpenFriendChatDialog(e) {
            let t = { message: "ShowFriendChatDialog", steamid: e };
            return this.GenericEResultCall(t);
          }
          OpenChatRoomGroupDialog(e, t) {
            let n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
            return t && (n.chat_room_id = t), this.GenericEResultCall(n);
          }
          ShowChatRoomGroupInvite(e) {
            let t = { message: "ShowChatRoomGroupInvite", invite_code: e };
            return this.GenericEResultCall(t);
          }
          m_mapCacheSubscribedApp = new Map();
          BIsSubscribedApp(e) {
            if (this.m_mapCacheSubscribedApp.has(e))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
            let t = { message: "IsSubscribedApp", appid: e };
            return this.GenericEResultCall(t).then((t) => {
              if (t.connect_failed) return;
              let n = 1 == t.result;
              return this.m_mapCacheSubscribedApp.set(e, n), n;
            });
          }
          OpenFriendsDialog() {
            return this.GenericEResultCall({ message: "OpenFriendsDialog" });
          }
          OpenSteamURL(e) {
            let t = { message: "OpenSteamURL", url: e };
            return this.GenericEResultCall(t);
          }
          BClientAccountMatches() {
            return (
              !p.logged_in ||
              p.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }
          GenericEResultCall(e) {
            return this.m_connection
              .Connect()
              .then(() =>
                this.m_bAllowAccountMismatch || this.BClientAccountMatches()
                  ? this.m_connection
                      .SendMsgAndAwaitResponse(e)
                      .then((e) =>
                        1 === e.success ? S : this.FailureResult(e.success),
                      )
                  : { success: !1, result: 19, account_mismatch: !0 },
              )
              .catch(() => this.FailureResult());
          }
        }
        class k {
          m_mapWaitingCallbacks = new Map();
          m_socket;
          m_iCallSeq = 1;
          m_bReady = !1;
          m_bClientConnectionFailed = !1;
          m_bSecurityException = !1;
          m_promiseConnect;
          m_ClientInfo = {
            ulVersion: "",
            bFriendsUIEnabled: !1,
            unAccountID: 0,
            rgSupportedMessages: [],
          };
          constructor() {}
          get ClientInfo() {
            return this.m_ClientInfo;
          }
          get ready() {
            return this.m_bReady;
          }
          get browser_supported() {
            return !this.m_bSecurityException;
          }
          get connected_to_client() {
            return this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
          }
          SendMsgAndAwaitResponse(e) {
            return new Promise((t, n) => {
              let s = this.m_iCallSeq++;
              this.BSendMsg(e, s)
                ? this.m_mapWaitingCallbacks.set(s, {
                    iSeq: s,
                    fnCallback: t,
                    fnError: n,
                  })
                : n();
            });
          }
          BSendMsg(e, t) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            let n = Object.assign({}, e, {
              universe: h.EUNIVERSE,
              accountid: p.accountid,
            });
            void 0 !== t && (n.sequenceid = t);
            try {
              return this.m_socket.send(JSON.stringify(n)), !0;
            } catch (e) {
              return !1;
            }
          }
          OnSocketMessage(e) {
            try {
              let t = JSON.parse(e.data);
              if (t.sequenceid) {
                let e = this.m_mapWaitingCallbacks.get(t.sequenceid);
                if (e)
                  return (
                    this.m_mapWaitingCallbacks.delete(t.sequenceid),
                    void e.fnCallback(t)
                  );
              }
            } catch (e) {
              console.error("exception parsing response", e);
            }
          }
          Connect() {
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            let e = new Promise((e, t) => {
              try {
                this.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/",
                );
              } catch (e) {
                return (this.m_bSecurityException = !0), void t(e);
              }
              (this.m_socket.onerror = (e) => {
                t();
              }),
                (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
                (this.m_socket.onopen = () => {
                  this.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then((n) => {
                      1 == n.success
                        ? ((this.m_ClientInfo.ulVersion = n.clientversion),
                          (this.m_ClientInfo.bFriendsUIEnabled = !!n.friendsui),
                          (this.m_ClientInfo.unAccountID = n.accountid),
                          n.supported_messages &&
                            (this.m_ClientInfo.rgSupportedMessages =
                              n.supported_messages),
                          e())
                        : t();
                    })
                    .catch(t);
                });
            });
            return (
              (this.m_promiseConnect = e),
              this.m_promiseConnect
                .then(() => {
                  (this.m_bReady = !0), (this.m_promiseConnect = void 0);
                })
                .catch(() => {
                  (this.m_bClientConnectionFailed = !0),
                    (this.m_promiseConnect = void 0);
                }),
              this.m_promiseConnect
            );
          }
        }
        let C = new I();
        window.ClientConnectionAPI = C;
        n(14206), n(19744);
        new Map();
        const b = 2147483647;
        function v(e, t = 0) {
          switch (e) {
            case "english":
              return 0;
            case "german":
              return 1;
            case "french":
              return 2;
            case "italian":
              return 3;
            case "korean":
            case "koreana":
              return 4;
            case "spanish":
              return 5;
            case "schinese":
              return 6;
            case "tchinese":
              return 7;
            case "russian":
              return 8;
            case "thai":
              return 9;
            case "japanese":
              return 10;
            case "portuguese":
              return 11;
            case "polish":
              return 12;
            case "danish":
              return 13;
            case "dutch":
              return 14;
            case "finnish":
              return 15;
            case "norwegian":
              return 16;
            case "swedish":
              return 17;
            case "hungarian":
              return 18;
            case "czech":
              return 19;
            case "romanian":
              return 20;
            case "turkish":
              return 21;
            case "arabic":
              return 25;
            case "brazilian":
              return 22;
            case "bulgarian":
              return 23;
            case "greek":
              return 24;
            case "ukrainian":
              return 26;
            case "latam":
              return 27;
            case "vietnamese":
              return 28;
            case "sc_schinese":
              return 29;
            case "indonesian":
              return 30;
            default:
              return t;
          }
        }
        var T, y, A, j, L, R, M, P, N, w, O, G, U, D, F, B, W;
        !(function (e) {
          (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
            "k_EConnectivityTestResult_Unknown"),
            (e[(e.k_EConnectivityTestResult_Connected = 1)] =
              "k_EConnectivityTestResult_Connected"),
            (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
              "k_EConnectivityTestResult_CaptivePortal"),
            (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
              "k_EConnectivityTestResult_TimedOut"),
            (e[(e.k_EConnectivityTestResult_Failed = 4)] =
              "k_EConnectivityTestResult_Failed"),
            (e[(e.k_EConnectivityTestResult_WifiDisabled = 5)] =
              "k_EConnectivityTestResult_WifiDisabled"),
            (e[(e.k_EConnectivityTestResult_NoLAN = 6)] =
              "k_EConnectivityTestResult_NoLAN");
        })(T || (T = {})),
          (function (e) {
            (e[(e.k_ENetFakeLocalSystemState_Normal = 0)] =
              "k_ENetFakeLocalSystemState_Normal"),
              (e[(e.k_ENetFakeLocalSystemState_NoLAN = 1)] =
                "k_ENetFakeLocalSystemState_NoLAN"),
              (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
                "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
              (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
                "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
              (e[(e.k_ENetFakeLocalSystemState_NoInternet = 4)] =
                "k_ENetFakeLocalSystemState_NoInternet"),
              (e[(e.k_ENetFakeLocalSystemState_NoSteam = 5)] =
                "k_ENetFakeLocalSystemState_NoSteam");
          })(y || (y = {})),
          (function (e) {
            (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
              "k_ESuspendResumeProgressState_Invalid"),
              (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
                "k_ESuspendResumeProgressState_Complete"),
              (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
                "k_ESuspendResumeProgressState_CloudSync"),
              (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
                "k_ESuspendResumeProgressState_LoggingIn"),
              (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
                "k_ESuspendResumeProgressState_WaitingForApp"),
              (e[(e.k_ESuspendResumeProgressState_Working = 5)] =
                "k_ESuspendResumeProgressState_Working");
          })(A || (A = {})),
          (function (e) {
            (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
              "k_EFloatingGamepadTextInputModeModeSingleLine"),
              (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
                "k_EFloatingGamepadTextInputModeModeMultipleLines"),
              (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
                "k_EFloatingGamepadTextInputModeModeEmail"),
              (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
                "k_EFloatingGamepadTextInputModeModeNumeric");
          })(j || (j = {})),
          (function (e) {
            (e[(e.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
              (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
                "k_EAppUpdateContentType_Workshop"),
              (e[(e.k_EAppUpdateContentType_Shader = 2)] =
                "k_EAppUpdateContentType_Shader"),
              (e[(e.k_EAppUpdateContentType_Max = 3)] =
                "k_EAppUpdateContentType_Max");
          })(L || (L = {})),
          (function (e) {
            (e[(e.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
              (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
                "k_EOverlayToStoreFlag_AddToCart"),
              (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
                "k_EOverlayToStoreFlag_AddToCartAndShow");
          })(R || (R = {})),
          (function (e) {
            (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
              (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
                "k_EActivateGameOverlayToWebPageMode_Modal");
          })(M || (M = {})),
          (function (e) {
            (e[(e.k_EGamingDeviceType_Unknown = 0)] =
              "k_EGamingDeviceType_Unknown"),
              (e[(e.k_EGamingDeviceType_StandardPC = 1)] =
                "k_EGamingDeviceType_StandardPC"),
              (e[(e.k_EGamingDeviceType_Console = 256)] =
                "k_EGamingDeviceType_Console"),
              (e[(e.k_EGamingDeviceType_PS3 = 272)] =
                "k_EGamingDeviceType_PS3"),
              (e[(e.k_EGamingDeviceType_Steambox = 288)] =
                "k_EGamingDeviceType_Steambox"),
              (e[(e.k_EGamingDeviceType_Handheld = 512)] =
                "k_EGamingDeviceType_Handheld"),
              (e[(e.k_EGamingDeviceType_Phone = 528)] =
                "k_EGamingDeviceType_Phone"),
              (e[(e.k_EGamingDeviceType_SteamDeck = 544)] =
                "k_EGamingDeviceType_SteamDeck");
          })(P || (P = {})),
          (function (e) {
            (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
              (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
                "k_ELoginUIStyleNewWithoutQRCode"),
              (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
          })(N || (N = {})),
          (function (e) {
            (e[(e.k_ECommunityProfileItemProperty_ImageSmall = 0)] =
              "k_ECommunityProfileItemProperty_ImageSmall"),
              (e[(e.k_ECommunityProfileItemProperty_ImageLarge = 1)] =
                "k_ECommunityProfileItemProperty_ImageLarge"),
              (e[(e.k_ECommunityProfileItemProperty_InternalName = 2)] =
                "k_ECommunityProfileItemProperty_InternalName"),
              (e[(e.k_ECommunityProfileItemProperty_Title = 3)] =
                "k_ECommunityProfileItemProperty_Title"),
              (e[(e.k_ECommunityProfileItemProperty_Description = 4)] =
                "k_ECommunityProfileItemProperty_Description"),
              (e[(e.k_ECommunityProfileItemProperty_AppID = 5)] =
                "k_ECommunityProfileItemProperty_AppID"),
              (e[(e.k_ECommunityProfileItemProperty_TypeID = 6)] =
                "k_ECommunityProfileItemProperty_TypeID"),
              (e[(e.k_ECommunityProfileItemProperty_Class = 7)] =
                "k_ECommunityProfileItemProperty_Class"),
              (e[(e.k_ECommunityProfileItemProperty_MovieWebM = 8)] =
                "k_ECommunityProfileItemProperty_MovieWebM"),
              (e[(e.k_ECommunityProfileItemProperty_MovieMP4 = 9)] =
                "k_ECommunityProfileItemProperty_MovieMP4"),
              (e[(e.k_ECommunityProfileItemProperty_MovieWebMSmall = 10)] =
                "k_ECommunityProfileItemProperty_MovieWebMSmall"),
              (e[(e.k_ECommunityProfileItemProperty_MovieMP4Small = 11)] =
                "k_ECommunityProfileItemProperty_MovieMP4Small");
          })(w || (w = {})),
          (function (e) {
            (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
              "k_ERaiseGameWindowResult_NotRunning"),
              (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
                "k_ERaiseGameWindowResult_Success"),
              (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
                "k_ERaiseGameWindowResult_Failure");
          })(O || (O = {})),
          (function (e) {
            (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
              (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
              (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
              (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
              (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
          })(G || (G = {})),
          (function (e) {
            (e[(e.k_EAppReleaseState_Unknown = 0)] =
              "k_EAppReleaseState_Unknown"),
              (e[(e.k_EAppReleaseState_Unavailable = 1)] =
                "k_EAppReleaseState_Unavailable"),
              (e[(e.k_EAppReleaseState_Prerelease = 2)] =
                "k_EAppReleaseState_Prerelease"),
              (e[(e.k_EAppReleaseState_PreloadOnly = 3)] =
                "k_EAppReleaseState_PreloadOnly"),
              (e[(e.k_EAppReleaseState_Released = 4)] =
                "k_EAppReleaseState_Released"),
              (e[(e.k_EAppReleaseState_Disabled = 5)] =
                "k_EAppReleaseState_Disabled");
          })(U || (U = {})),
          (function (e) {
            (e[(e.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
              (e[(e.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
              (e[(e.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut"),
              (e[(e.k_EGameIDTypeP2P = 3)] = "k_EGameIDTypeP2P");
          })(D || (D = {})),
          (function (e) {
            (e[(e.k_EInstallMgrStateNone = 0)] = "k_EInstallMgrStateNone"),
              (e[(e.k_EInstallMgrStateSetup = 1)] = "k_EInstallMgrStateSetup"),
              (e[(e.k_EInstallMgrStateWaitLicense = 2)] =
                "k_EInstallMgrStateWaitLicense"),
              (e[(e.k_EInstallMgrStateFreeLicense = 3)] =
                "k_EInstallMgrStateFreeLicense"),
              (e[(e.k_EInstallMgrStateShowCDKey = 4)] =
                "k_EInstallMgrStateShowCDKey"),
              (e[(e.k_EInstallMgrStateWaitAppInfo = 5)] =
                "k_EInstallMgrStateWaitAppInfo"),
              (e[(e.k_EInstallMgrStateShowPassword = 6)] =
                "k_EInstallMgrStateShowPassword"),
              (e[(e.k_EInstallMgrStateShowConfig = 7)] =
                "k_EInstallMgrStateShowConfig"),
              (e[(e.k_EInstallMgrStateShowEULAs = 8)] =
                "k_EInstallMgrStateShowEULAs"),
              (e[(e.k_EInstallMgrStateCreateApps = 9)] =
                "k_EInstallMgrStateCreateApps"),
              (e[(e.k_EInstallMgrStateReadFromMedia = 10)] =
                "k_EInstallMgrStateReadFromMedia"),
              (e[(e.k_EInstallMgrStateShowChangeMedia = 11)] =
                "k_EInstallMgrStateShowChangeMedia"),
              (e[(e.k_EInstallMgrStateWaitLegacyCDKeys = 12)] =
                "k_EInstallMgrStateWaitLegacyCDKeys"),
              (e[(e.k_EInstallMgrStateShowSignup = 13)] =
                "k_EInstallMgrStateShowSignup"),
              (e[(e.k_EInstallMgrStateComplete = 14)] =
                "k_EInstallMgrStateComplete"),
              (e[(e.k_EInstallMgrStateFailed = 15)] =
                "k_EInstallMgrStateFailed"),
              (e[(e.k_EInstallMgrStateCanceled = 16)] =
                "k_EInstallMgrStateCanceled");
          })(F || (F = {})),
          (function (e) {
            (e[(e.k_EWindowBringToFrontInvalid = 0)] =
              "k_EWindowBringToFrontInvalid"),
              (e[(e.k_EWindowBringToFrontAndForceOS = 1)] =
                "k_EWindowBringToFrontAndForceOS"),
              (e[(e.k_EWindowBringToFrontWithoutForcingOS = 2)] =
                "k_EWindowBringToFrontWithoutForcingOS");
          })(B || (B = {})),
          (function (e) {
            (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
              (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
              (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
          })(W || (W = {}));
        function x(e, t, n, s) {
          var i,
            r = arguments.length,
            a =
              r < 3
                ? t
                : null === s
                  ? (s = Object.getOwnPropertyDescriptor(t, n))
                  : s;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, s);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (i = e[o]) &&
                (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
          return r > 3 && a && Object.defineProperty(t, n, a), a;
        }
        Object.create;
        Object.create;
        "function" == typeof SuppressedError && SuppressedError;
        function V(e, t) {
          return (function (e, t) {
            const n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        function H(e, t, n) {
          return {
            get() {
              let e = n.value.bind(this);
              return (
                this.hasOwnProperty(t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        class z {
          m_vecCallbacks = [];
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                V(this.m_vecCallbacks, e);
              },
            };
          }
          Dispatch(...e) {
            for (const t of Array.from(this.m_vecCallbacks)) t(...e);
          }
          ClearAllCallbacks() {
            this.m_vecCallbacks = [];
          }
          CountRegistered() {
            return this.m_vecCallbacks.length;
          }
        }
        x(
          [H],
          class {
            m_schTimer;
            m_fnCallback;
            Schedule(e, t) {
              this.IsScheduled() && this.Cancel(),
                (this.m_fnCallback = t),
                (this.m_schTimer = window.setTimeout(
                  this.ScheduledInternal,
                  e,
                ));
            }
            IsScheduled() {
              return void 0 !== this.m_schTimer;
            }
            Cancel() {
              this.m_schTimer &&
                (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
            }
            ScheduledInternal() {
              this.m_schTimer = void 0;
              const e = this.m_fnCallback;
              (this.m_fnCallback = void 0), e?.();
            }
          }.prototype,
          "ScheduledInternal",
          null,
        );
        x(
          [H],
          class {
            m_vecCallbacks = [];
            Push(e) {
              this.m_vecCallbacks.push(e);
            }
            PushArrayRemove(e, t) {
              this.m_vecCallbacks.push(() => V(e, t));
            }
            Unregister() {
              for (const e of this.m_vecCallbacks) e();
              this.m_vecCallbacks = [];
            }
            GetUnregisterFunc() {
              return this.Unregister;
            }
          }.prototype,
          "Unregister",
          null,
        );
        var $;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Ago = 1)] = "Ago"),
            (e[(e.Remaining = 2)] = "Remaining");
        })($ || ($ = {}));
        new Map();
        new Map(), new Map();
        new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
        class K {
          m_mapTokens = new Map();
          m_mapFallbackTokens = new Map();
          m_cbkTokensChanged = new z();
          m_rgLocalesToUse;
          static sm_ErrorReportingStore;
          static InstallErrorReportingStore(e) {
            this.sm_ErrorReportingStore = e;
          }
          static GetLanguageFallback(e) {
            return "sc_schinese" === e ? "schinese" : "english";
          }
          static GetELanguageFallback(e) {
            return 29 === e ? 6 : 0;
          }
          static IsELanguageValidInRealm(e, t) {
            return (
              t === (29 === e ? W.k_ESteamRealmChina : W.k_ESteamRealmGlobal)
            );
          }
          static GetLanguageListForRealms(e) {
            const t = new Array();
            for (let n = 0; n < 31; n++)
              for (const s of e)
                if (this.IsELanguageValidInRealm(n, s)) {
                  t.push(n);
                  break;
                }
            return t;
          }
          InitFromObjects(e, t, n, s, i) {
            i || this.m_mapTokens.clear();
            const r = { ...(n || {}), ...e },
              a = { ...(s || {}), ...(t || {}) };
            this.AddTokens(r, a), this.m_cbkTokensChanged.Dispatch();
          }
          InitDirect(e, t) {
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t),
              this.m_cbkTokensChanged.Dispatch();
          }
          AddTokens(e, t) {
            Object.keys(e).forEach((t) => {
              this.m_mapTokens.set(t, e[t]);
            }),
              t &&
                Object.keys(t).forEach((e) => {
                  this.m_mapTokens.has(e) || this.m_mapTokens.set(e, t[e]),
                    this.m_mapFallbackTokens.set(e, t[e]);
                });
          }
          GetTokensChangedCallbackList() {
            return this.m_cbkTokensChanged;
          }
          GetPreferredLocales() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
                ? navigator.languages
                : ["en-US"];
          }
          GetELanguageFallbackOrder(e = null) {
            let t = new Array();
            if (
              (t.push(v(h.LANGUAGE)),
              (h.SUPPORTED_LANGUAGES || []).forEach((e) => {
                e.value != h.LANGUAGE && t.push(v(e.value));
              }),
              e)
            ) {
              K.GetLanguageListForRealms(e).forEach((e) => {
                -1 == t.indexOf(e) && t.push(e);
              });
            }
            return t;
          }
          SetPreferredLocales(e) {
            this.m_rgLocalesToUse = e;
          }
          BLooksLikeToken(e) {
            return !!e && e.length > 0 && "#" == e.charAt(0);
          }
          LocalizeIfToken(e, t) {
            return this.BLooksLikeToken(e) ? this.LocalizeString(e, t) : e;
          }
          LocalizeString(e, t) {
            if (!this.BLooksLikeToken(e)) return;
            let n = this.m_mapTokens.get(e.substring(1));
            if (void 0 !== n) return n;
            !t &&
              K.sm_ErrorReportingStore &&
              K.sm_ErrorReportingStore.ReportError(
                new Error(
                  `Unable to find localization token '${e}' for language '${h.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`,
                ),
                { bIncludeMessageInIdentifier: !0 },
              );
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return;
            let t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 !== t ? t : void 0;
          }
        }
        function Y(e, ...t) {
          let n = Z.LocalizeString(e);
          return void 0 === n ? e : J(n, ...t);
        }
        function q(e, ...t) {
          let n = Z.LocalizeString(e);
          if (void 0 === n) return e;
          let i,
            r = [],
            a = /(.*?)%(\d+)\$s/g,
            o = 0;
          for (; (i = a.exec(n)); ) {
            (o += i[0].length), r.push(i[1]);
            let e = parseInt(i[2]);
            e >= 1 && e <= t.length && r.push(t[e - 1]);
          }
          return r.push(n.substr(o)), s.createElement(s.Fragment, null, ...r);
        }
        function J(e, ...t) {
          return 0 == t.length
            ? e
            : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
                if (n <= t.length && n >= 1) {
                  let e = t[n - 1];
                  return String(null == e ? "" : e);
                }
                return e;
              }));
        }
        const Z = new K();
        function Q(e, t, ...n) {
          try {
            console.assert
              ? 0 == n.length
                ? console.assert(!!e, t)
                : console.assert(!!e, t, ...n)
              : e || console.warn(t, ...n);
          } catch (e) {}
        }
        window.LocalizationManager = Z;
        var X = n(79588),
          ee = n(50649);
        class te {
          m_strInviteCode;
          m_bReady = !1;
          m_bValid = !1;
          m_ulChatRoomGroupID;
          m_ulChatID;
          m_unAccountIDInviter;
          m_rtTimeExpires;
          m_bIsBanned;
          m_rtKickExpires;
          constructor(e) {
            (0, X.rC)(this), (this.m_strInviteCode = e);
          }
          BIsReady() {
            return this.m_bReady;
          }
          BIsValid() {
            return this.m_bValid;
          }
          BIsInviteLink() {
            return !!this.m_strInviteCode;
          }
          GetInviteCode() {
            return this.m_strInviteCode;
          }
          BNeverExpires() {
            return this.m_rtTimeExpires == b;
          }
          GetChatRoomGroupID() {
            return this.m_ulChatRoomGroupID;
          }
          BIsVoiceChatInvite() {
            return !!this.m_ulChatID;
          }
          GetChatID() {
            return this.m_ulChatID;
          }
          GetURL() {
            return this.m_strInviteCode
              ? ((e = this.m_strInviteCode),
                "public" == h.WEB_UNIVERSE
                  ? `https://s.team/chat/${e}`
                  : `${h.COMMUNITY_BASE_URL}chat/invite/${e}`)
              : null;
            var e;
          }
          BIsUserBanned() {
            return this.m_bIsBanned;
          }
          GetTimeKickExpires() {
            return this.m_rtKickExpires;
          }
          get time_expires() {
            return this.m_rtTimeExpires;
          }
          InitInvalid() {
            (this.m_bValid = !1), (this.m_bReady = !0);
          }
          InitDirectInvite(e, t, n = !1, s = void 0) {
            (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = s),
              (this.m_rtTimeExpires = b),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        x([X.LO], te.prototype, "m_bReady", void 0),
          x([X.aD], te.prototype, "InitInvalid", null),
          x([X.aD], te.prototype, "InitDirectInvite", null);
        var ne = n(37939);
        class se {
          m_ulSteamID;
          constructor(e = 0, t, n, s) {
            e instanceof se
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
                ? (this.m_ulSteamID = ne.Z.fromString(e, !0))
                : t && n && void 0 !== s
                  ? this.SetFromComponents(e ?? 0, s, n, t)
                  : (this.m_ulSteamID = e
                      ? ne.Z.fromNumber(e, !0)
                      : ne.Z.UZERO);
          }
          static InitFromAccountID(e) {
            return new se(Number(e), h.EUNIVERSE, 1, 1);
          }
          static InitFromClanID(e) {
            return new se(Number(e), h.EUNIVERSE, 7, 0);
          }
          GetAccountID() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }
          GetInstance() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }
          GetAccountType() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }
          GetUniverse() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }
          ConvertTo64BitString() {
            return this.m_ulSteamID.toString();
          }
          Render() {
            switch (this.GetAccountType()) {
              case 0:
                return (
                  "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 7:
                return (
                  "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 4:
                return (
                  "[A:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 3:
                return (
                  "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 2:
                return (
                  "[M:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 5:
                return (
                  "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 6:
                return (
                  "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              default:
                return (
                  "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
            }
          }
          static InitFromString(e) {
            let t = new se();
            try {
              let [n, s, i, r, a] =
                  e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
                o = Number(i),
                c = Number(r),
                l = a ? Number(a) : 1;
              switch (s) {
                case "I":
                  t.SetFromComponents(c, l, 0, o);
                case "g":
                  t.SetFromComponents(c, 0, 7, o);
                case "A":
                  t.SetFromComponents(c, l, 4, o);
                case "G":
                  t.SetFromComponents(c, l, 3, o);
                case "M":
                  t.SetFromComponents(c, l, 2, o);
                case "P":
                  t.SetFromComponents(c, l, 5, o);
                case "C":
                  t.SetFromComponents(c, l, 6, o);
                case "U":
                  t.SetFromComponents(c, l, 1, o);
              }
            } catch (e) {}
            return t;
          }
          BIsValid() {
            let e = this.GetAccountType();
            if (e <= 0 || e >= 11) return !1;
            let t = this.GetUniverse();
            if (t <= 0 || t >= 5) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > 4) return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }
          BIsIndividualAccount() {
            return 1 == this.GetAccountType();
          }
          BIsClanAccount() {
            return 7 == this.GetAccountType();
          }
          SetAccountID(e) {
            this.m_ulSteamID = new ne.Z(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0,
            );
          }
          SetInstance(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse(),
            );
          }
          SetAccountType(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse(),
            );
          }
          SetUniverse(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e,
            );
          }
          SetFromComponents(e, t, n, s) {
            let i = ((255 & s) << 24) + ((15 & n) << 20) + (1048575 & t),
              r = 4294967295 & e;
            this.m_ulSteamID = new ne.Z(r, i, !0);
          }
        }
        var ie = n(82989);
        class re extends te {
          constructor(e) {
            super(e), (0, X.rC)(this);
          }
          BIsExpired() {
            return ae.sm_rtTimeCur >= this.m_rtTimeExpires;
          }
          InitFromPHPInviteLinkInfo(e) {
            this.m_ulChatID = e.chat_id;
            let t = new se(e.steamid_sender);
            t.BIsIndividualAccount() &&
              (this.m_unAccountIDInviter = t.GetAccountID()),
              (this.m_rtTimeExpires = e.time_expires),
              (this.m_bIsBanned = e.banned),
              (this.m_rtKickExpires = e.time_kick_expire),
              e.group_summary &&
                (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        x([X.aD], re.prototype, "InitFromPHPInviteLinkInfo", null);
        class ae {
          m_bConnectingToClient = !1;
          m_connectResult = void 0;
          m_invite;
          m_htmlPreRendered;
          static sm_rtTimeCur;
          constructor(e) {
            (0, X.rC)(this),
              (this.m_invite = new re(e.strInviteCode)),
              e.Invite
                ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
                : this.m_invite.InitInvalid(),
              (this.m_htmlPreRendered = e.render),
              this.SendInviteToClient();
          }
          BIsInviteValid() {
            return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
          }
          GetInvite() {
            return this.m_invite;
          }
          BIsConnectingToClient() {
            return this.m_bConnectingToClient;
          }
          GetConnectResults() {
            return this.m_connectResult;
          }
          GetPreRenderedHTML() {
            return this.m_htmlPreRendered;
          }
          LaunchWebChat() {
            !(function (e) {
              let t = window.open("", "SteamWebChat", "");
              if (!t) return;
              let n = !1,
                s = !1;
              try {
                n = "about:blank" == t.location.href;
              } catch (e) {
                s = !0;
              }
              if (n) {
                if (e) {
                  let n = function (s) {
                    let i = h.COMMUNITY_BASE_URL.replace(
                      /(https?:\/\/[^/]*).*$/,
                      "$1",
                    );
                    s.source == t &&
                      "FriendsUIReady" == s.data &&
                      s.origin == i &&
                      (t.postMessage(e, h.COMMUNITY_BASE_URL),
                      window.removeEventListener("message", n));
                  };
                  window.addEventListener("message", n);
                }
                t.location.href = h.COMMUNITY_BASE_URL + "chat/";
              } else e && t.postMessage(e, h.COMMUNITY_BASE_URL);
              t.focus();
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode(),
            });
          }
          LaunchSteamIgnoreAccount() {
            C.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }
          ForceLaunchSteamClient() {
            window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
          }
          SendInviteToClient() {
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              C.ShowChatRoomGroupInvite(this.m_invite.GetInviteCode()).then(
                (e) => {
                  (0, X.z)(() => {
                    (this.m_bConnectingToClient = !1),
                      (this.m_connectResult = e),
                      console.log(e);
                  });
                },
              ));
          }
        }
        x([X.LO], ae.prototype, "m_bConnectingToClient", void 0),
          x([X.LO], ae.prototype, "m_connectResult", void 0);
        let oe = class extends s.Component {
          render() {
            return s.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? s.createElement(ce, { controller: this.props.controller })
                : s.createElement(le, { controller: this.props.controller }),
            );
          }
        };
        oe = x([ee.Pi], oe);
        let ce = class extends s.Component {
          constructor(e) {
            super(e), (0, X.rC)(this);
          }
          m_bTriedToLaunchSteam = !1;
          LaunchWebChat() {
            this.props.controller.LaunchWebChat();
          }
          OpenInSteamIgnoreAccount() {
            this.props.controller.LaunchSteamIgnoreAccount();
          }
          LaunchSteamClient() {
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(() => {
                this.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }
          IsMobileDevice() {
            switch (new ie.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }
          render() {
            if (this.props.controller.BIsConnectingToClient())
              return s.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                s.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  Y("#bbcode_invite_requesting_info"),
                ),
              );
            let e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (h.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              i = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (i += " inviteButtonJoinVoice"),
              e.success
                ? s.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    s.createElement(
                      "div",
                      { className: "groupName" },
                      Y("#InviteLanding_SentToSteam"),
                    ),
                    s.createElement(
                      "div",
                      { className: "inviteLabel" },
                      q(
                        "#InviteLanding_SentToSteam_Desc",
                        s.createElement(
                          "a",
                          { href: "#", onClick: this.LaunchWebChat },
                          Y("#InviteLanding_SentToSteam_Desc_LaunchWebChat"),
                        ),
                      ),
                    ),
                  )
                : e.account_mismatch
                  ? s.createElement(
                      _e,
                      { render: this.props.controller.GetPreRenderedHTML() },
                      s.createElement(
                        "div",
                        { className: "inviteLabel" },
                        Y("#InviteLanding_AccountMismatch"),
                      ),
                      s.createElement(
                        "div",
                        { className: "inviteLabel" },
                        s.createElement(
                          "button",
                          {
                            className: i,
                            type: "button",
                            onClick: this.OpenInSteamIgnoreAccount,
                          },
                          Y("#InviteLanding_OpenInSteam"),
                        ),
                        s.createElement(
                          "button",
                          {
                            className: i,
                            type: "button",
                            onClick: this.LaunchWebChat,
                          },
                          Y("#InviteLanding_OpenInWebChat"),
                        ),
                      ),
                    )
                  : e.call_unsupported
                    ? s.createElement(
                        "div",
                        { className: "ChatMessageInvite" },
                        s.createElement(
                          "div",
                          { className: "groupName" },
                          Y("#InviteLanding_SentToSteam"),
                        ),
                        s.createElement(
                          "div",
                          { className: "inviteLabel" },
                          q(
                            "#InviteLanding_SentToSteam_Desc",
                            s.createElement(
                              "a",
                              { href: "#", onClick: this.LaunchWebChat },
                              Y(
                                "#InviteLanding_SentToSteam_Desc_LaunchWebChat",
                              ),
                            ),
                          ),
                        ),
                      )
                    : s.createElement(
                        _e,
                        { render: this.props.controller.GetPreRenderedHTML() },
                        s.createElement(
                          "div",
                          { className: "inviteLabel inviteLabelButtons" },
                          !n &&
                            s.createElement(
                              "button",
                              {
                                className: i,
                                type: "button",
                                onClick: this.LaunchSteamClient,
                              },
                              Y("#InviteLanding_OpenInSteam"),
                            ),
                          s.createElement(
                            "button",
                            {
                              className: i,
                              type: "button",
                              onClick: this.LaunchWebChat,
                            },
                            Y("#InviteLanding_OpenInWebChat"),
                          ),
                        ),
                        this.m_bTriedToLaunchSteam &&
                          s.createElement(
                            "div",
                            {
                              className: "inviteLabel inviteLabelLaunchPrompt",
                            },
                            Y("#InviteLanding_OpenInSteam_Help"),
                          ),
                      )
            );
          }
        };
        x([X.LO], ce.prototype, "m_bTriedToLaunchSteam", void 0),
          x([H], ce.prototype, "LaunchWebChat", null),
          x([H], ce.prototype, "OpenInSteamIgnoreAccount", null),
          x([H], ce.prototype, "LaunchSteamClient", null),
          (ce = x([ee.Pi], ce));
        class le extends s.Component {
          render() {
            return s.createElement(
              "div",
              { className: "ChatMessageInvite" },
              s.createElement(
                "div",
                { className: "postedExpiredInvite" },
                Y("#InviteLanding_ExpiredOrInvalid"),
              ),
            );
          }
        }
        function _e(e) {
          return s.createElement(
            "div",
            { className: "ChatMessageInvite" },
            s.createElement("div", {
              className: "leftInviteContainer",
              dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
            }),
            s.createElement(
              "div",
              { className: "rightInviteContainer" },
              s.createElement(
                "div",
                { className: "inviteLabel" },
                q(
                  "#bbcode_invite_description",
                  s.createElement("span", {
                    dangerouslySetInnerHTML: {
                      __html: e.render.strInviterNameLinkHTML,
                    },
                  }),
                ),
              ),
              s.createElement(
                "div",
                { className: "groupName" },
                e.render.strChatRoomGroupName,
              ),
              e.children,
            ),
          );
        }
        window.AssertMsg = Q;
        let ue = new I();
        function de(e) {
          let t;
          try {
            t = JSON.parse(e.getAttribute("data-inviteinfo"));
          } catch (e) {}
          ae.sm_rtTimeCur = t.rtTimeCur;
          let n = new ae(t);
          i.s(e).render(s.createElement(oe, { controller: n }));
        }
        (window.ClientConnectionAPI = ue),
          document.addEventListener("DOMContentLoaded", async function () {
            _(),
              await (async function (e) {
                const t = K.GetLanguageFallback(e),
                  s = e === t,
                  [i, r, a, o] = await Promise.all([
                    n(41171)(`./shared_${e}.json`),
                    n(3119)(`./friendsui_${e}.json`),
                    s ? {} : n(91090)(`./shared_${t}.json`),
                    s ? {} : n(9014)(`./friendsui_${t}.json`),
                  ]);
                Z.AddTokens({ ...i, ...r }, { ...a, ...o });
              })(h.LANGUAGE),
              (function () {
                let e = document.querySelectorAll(".ChatReactRoot");
                for (let t = 0; t < e.length; t++) {
                  let n = e[t],
                    s = n.getAttribute("data-component");
                  "ChatInvite" === s
                    ? de(n)
                    : Q(!1, `unknown component: "${s}"`);
                }
              })();
          });
      },
      92143: (e, t, n) => {
        "use strict";
        "VALVE_PUBLIC_PATH" in window
          ? (n.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet",
            ),
          123 !== Array.from(new Set([123]))[0] &&
            console.error("Should not include prototypejs.");
      },
      41171: (e, t, n) => {
        var s = {
          "./shared_arabic.json": [78501, 2431],
          "./shared_brazilian.json": [55106, 8385],
          "./shared_bulgarian.json": [34469, 1313],
          "./shared_czech.json": [93182, 4189],
          "./shared_danish.json": [87113, 9753],
          "./shared_dutch.json": [80737, 5925],
          "./shared_english.json": [48751, 7975],
          "./shared_finnish.json": [7817, 3557],
          "./shared_french.json": [50731, 3112],
          "./shared_german.json": [54811, 6007],
          "./shared_greek.json": [90175, 4297],
          "./shared_hungarian.json": [49628, 5948],
          "./shared_indonesian.json": [46741, 8754],
          "./shared_italian.json": [90116, 5933],
          "./shared_japanese.json": [15055, 2844],
          "./shared_koreana.json": [82062, 6542],
          "./shared_latam.json": [97679, 2443],
          "./shared_norwegian.json": [33469, 4108],
          "./shared_polish.json": [13255, 3252],
          "./shared_portuguese.json": [77294, 5849],
          "./shared_romanian.json": [3850, 4823],
          "./shared_russian.json": [76440, 9062],
          "./shared_sc_schinese.json": [16386, 2029],
          "./shared_schinese.json": [65933, 2537],
          "./shared_spanish.json": [2712, 6492],
          "./shared_swedish.json": [85835, 5625],
          "./shared_tchinese.json": [85918, 7602],
          "./shared_thai.json": [63269, 1162],
          "./shared_turkish.json": [27810, 5438],
          "./shared_ukrainian.json": [32110, 7781],
          "./shared_vietnamese.json": [59201, 4964],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 41171), (e.exports = i);
      },
      91090: (e, t, n) => {
        var s = {
          "./shared_arabic.json": [78501, 2431],
          "./shared_brazilian.json": [55106, 8385],
          "./shared_bulgarian.json": [34469, 1313],
          "./shared_czech.json": [93182, 4189],
          "./shared_danish.json": [87113, 9753],
          "./shared_dutch.json": [80737, 5925],
          "./shared_english.json": [48751, 7975],
          "./shared_finnish.json": [7817, 3557],
          "./shared_french.json": [50731, 3112],
          "./shared_german.json": [54811, 6007],
          "./shared_greek.json": [90175, 4297],
          "./shared_hungarian.json": [49628, 5948],
          "./shared_indonesian.json": [46741, 8754],
          "./shared_italian.json": [90116, 5933],
          "./shared_japanese.json": [15055, 2844],
          "./shared_koreana.json": [82062, 6542],
          "./shared_latam.json": [97679, 2443],
          "./shared_norwegian.json": [33469, 4108],
          "./shared_polish.json": [13255, 3252],
          "./shared_portuguese.json": [77294, 5849],
          "./shared_romanian.json": [3850, 4823],
          "./shared_russian.json": [76440, 9062],
          "./shared_sc_schinese.json": [16386, 2029],
          "./shared_schinese.json": [65933, 2537],
          "./shared_spanish.json": [2712, 6492],
          "./shared_swedish.json": [85835, 5625],
          "./shared_tchinese.json": [85918, 7602],
          "./shared_thai.json": [63269, 1162],
          "./shared_turkish.json": [27810, 5438],
          "./shared_ukrainian.json": [32110, 7781],
          "./shared_vietnamese.json": [59201, 4964],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 91090), (e.exports = i);
      },
    },
    a = {};
  function o(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var n = (a[e] = { id: e, loaded: !1, exports: {} });
    return r[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = r),
    (o.amdO = {}),
    (e = []),
    (o.O = (t, n, s, i) => {
      if (!n) {
        var r = 1 / 0;
        for (_ = 0; _ < e.length; _++) {
          for (var [n, s, i] = e[_], a = !0, c = 0; c < n.length; c++)
            (!1 & i || r >= i) && Object.keys(o.O).every((e) => o.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((a = !1), i < r && (r = i));
          if (a) {
            e.splice(_--, 1);
            var l = s();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      i = i || 0;
      for (var _ = e.length; _ > 0 && e[_ - 1][2] > i; _--) e[_] = e[_ - 1];
      e[_] = [n, s, i];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      o.r(i);
      var r = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var a = 2 & s && e; "object" == typeof a && !~t.indexOf(a); a = n(a))
        Object.getOwnPropertyNames(a).forEach((t) => (r[t] = () => e[t]));
      return (r.default = () => e), o.d(i, r), i;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((t, n) => (o.f[n](e, t), t), []))),
    (o.u = (e) =>
      "javascript/webui/" +
      {
        699: "friendsui_polish-json",
        1162: "shared_thai-json",
        1313: "shared_bulgarian-json",
        1471: "friendsui_greek-json",
        1635: "friendsui_vietnamese-json",
        2029: "shared_sc_schinese-json",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2537: "shared_schinese-json",
        2822: "friendsui_ukrainian-json",
        2844: "shared_japanese-json",
        2862: "friendsui_brazilian-json",
        2913: "friendsui_russian-json",
        3112: "shared_french-json",
        3140: "friendsui_sc_schinese-json",
        3182: "friendsui_romanian-json",
        3252: "shared_polish-json",
        3471: "friendsui_spanish-json",
        3500: "friendsui_french-json",
        3557: "shared_finnish-json",
        4108: "shared_norwegian-json",
        4189: "shared_czech-json",
        4264: "friendsui_portuguese-json",
        4297: "shared_greek-json",
        4448: "friendsui_czech-json",
        4596: "friendsui_finnish-json",
        4716: "friendsui_norwegian-json",
        4823: "shared_romanian-json",
        4964: "shared_vietnamese-json",
        4989: "friendsui_german-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5632: "friendsui_turkish-json",
        5802: "friendsui_hungarian-json",
        5849: "shared_portuguese-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6646: "friendsui_indonesian-json",
        6727: "friendsui_japanese-json",
        6986: "friendsui_koreana-json",
        6992: "friendsui_arabic-json",
        7340: "friendsui_tchinese-json",
        7575: "friendsui_dutch-json",
        7602: "shared_tchinese-json",
        7651: "friendsui_latam-json",
        7706: "friendsui_schinese-json",
        7781: "shared_ukrainian-json",
        7975: "shared_english-json",
        8247: "friendsui_english-json",
        8385: "shared_brazilian-json",
        8518: "friendsui_bulgarian-json",
        8754: "shared_indonesian-json",
        8815: "friendsui_italian-json",
        9062: "shared_russian-json",
        9263: "friendsui_thai-json",
        9753: "shared_danish-json",
        9775: "friendsui_danish-json",
        9818: "friendsui_swedish-json",
      }[e] +
      ".js?contenthash=" +
      {
        699: "8e9ceb2113e948cb959f",
        1162: "dbc00ee6dd346a101917",
        1313: "7f41591a6a1f94ffe00d",
        1471: "8ac1a0ed538f8399ef47",
        1635: "5b160e7449652b470d3b",
        2029: "cfd12dc5ad70fd2b953d",
        2431: "453484513ab5e66f8413",
        2443: "2f5354426a1effcb9e0f",
        2537: "83dc7e244a6c4c1a7207",
        2822: "4be313065258cea7dcfe",
        2844: "f9c86cc16b5a5bcd22a3",
        2862: "2705458b5717d6985bb9",
        2913: "9cf78e95b217a4e4494d",
        3112: "72bf298c62f7c6adde09",
        3140: "5c45b26b856f964d3c01",
        3182: "e9e86d98e6631220b2a1",
        3252: "3057382fbdf0fbb53acf",
        3471: "42cc7cf6544f86425d1a",
        3500: "f238176cda7148db5e2c",
        3557: "e5ec46d1893571a9a222",
        4108: "ac9494d5212809c3537c",
        4189: "bc1c33164b93a0ea5bf5",
        4264: "1832606acbdc62736a93",
        4297: "b516d935c7d5363f5da5",
        4448: "4aff1d6e7c0d3448a5ff",
        4596: "3b126ab823cd2edf9c32",
        4716: "ebb28410edb072f7f1b9",
        4823: "9516320ee9f1c93990ed",
        4964: "942b0977d721ed42cae7",
        4989: "4c458551efceaa0f205a",
        5438: "36e021e0bd837c931a74",
        5625: "e39704212cfe1ee94909",
        5632: "45943e5cc0fb2a3a2f0c",
        5802: "9b807a832b8d069770aa",
        5849: "9c0fff75974f278387c0",
        5925: "dd3b26c8f408277491f8",
        5933: "92d5bc948749593ebd5d",
        5948: "7bec72dcf102eb6d7944",
        6007: "79220fc90a66d07cdb9a",
        6492: "662f49dae2c2c9639e4e",
        6542: "2e14031fca0793ce50d5",
        6646: "e3fbfb988b1be70b7043",
        6727: "e32de86fa467effca5ff",
        6986: "cbb8f15bd5bf6cfeed4b",
        6992: "5aca62e8d2baaf5ced56",
        7340: "afbe060849148c41a1c1",
        7575: "1f27a35f5021cbf32401",
        7602: "08872c2894f17a815c72",
        7651: "8c7615c21a500e5e6965",
        7706: "b23658f1f6495bc3b7bd",
        7781: "14b069c9da96e3ca48a3",
        7975: "84e7c775bb94a50bfa50",
        8247: "3575713174f238da5c8b",
        8385: "6cd3f29d51de3da048a5",
        8518: "c3d01bd8e61c3f8e499c",
        8754: "b39011f9221a4739b522",
        8815: "6c46a4de038eda4c6c6f",
        9062: "ea1b8598a8014d57be4e",
        9263: "d429f2b224f40a927fa4",
        9753: "2b5af024d86f9dbc78a2",
        9775: "48af292024ac8f719378",
        9818: "db6dadc3090966211194",
      }[e]),
    (o.miniCssF = (e) => {}),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (s = {}),
    (i = "@steam/friendsui:"),
    (o.l = (e, t, n, r) => {
      if (s[e]) s[e].push(t);
      else {
        var a, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), _ = 0;
            _ < l.length;
            _++
          ) {
            var u = l[_];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == i + n
            ) {
              a = u;
              break;
            }
          }
        a ||
          ((c = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          a.setAttribute("data-webpack", i + n),
          (a.src = e)),
          (s[e] = [t]);
        var d = (t, n) => {
            (a.onerror = a.onload = null), clearTimeout(m);
            var i = s[e];
            if (
              (delete s[e],
              a.parentNode && a.parentNode.removeChild(a),
              i && i.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          m = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: a }),
            12e4,
          );
        (a.onerror = d.bind(null, a.onerror)),
          (a.onload = d.bind(null, a.onload)),
          c && document.head.appendChild(a);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (o.j = 1856),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length) for (var s = n.length - 1; s > -1 && !e; ) e = n[s--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e + "../../");
    })(),
    (() => {
      var e = { 1856: 0 };
      (o.f.j = (t, n) => {
        var s = o.o(e, t) ? e[t] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else {
            var i = new Promise((n, i) => (s = e[t] = [n, i]));
            n.push((s[2] = i));
            var r = o.p + o.u(t),
              a = new Error();
            o.l(
              r,
              (n) => {
                if (o.o(e, t) && (0 !== (s = e[t]) && (e[t] = void 0), s)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = i),
                    (a.request = r),
                    s[1](a);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      }),
        (o.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
          var s,
            i,
            [r, a, c] = n,
            l = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (s in a) o.o(a, s) && (o.m[s] = a[s]);
            if (c) var _ = c(o);
          }
          for (t && t(n); l < r.length; l++)
            (i = r[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(_);
        },
        n = (self.webpackChunk_steam_friendsui =
          self.webpackChunk_steam_friendsui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var c = o.O(void 0, [5968], () => o(38368));
  c = o.O(c);
})();
