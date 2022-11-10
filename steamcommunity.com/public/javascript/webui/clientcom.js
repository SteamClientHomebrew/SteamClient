/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7653224";
(() => {
  "use strict";
  var e = {};
  function t(e) {
    if (!n() || !window.document.cookie) return null;
    let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
    return t && t[2] ? decodeURIComponent(t[2]) : null;
  }
  function n() {
    return !!window.document;
  }
  (e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var o in n)
        e.o(n, o) &&
          !e.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
    }),
    (e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
  var o, i, _, s, a, r, c, l, m, u, E;
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
  })(o || (o = {})),
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
    })(i || (i = {})),
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
    })(_ || (_ = {})),
    (function (e) {
      (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
        "k_EFloatingGamepadTextInputModeModeSingleLine"),
        (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
          "k_EFloatingGamepadTextInputModeModeMultipleLines"),
        (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
          "k_EFloatingGamepadTextInputModeModeEmail"),
        (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
          "k_EFloatingGamepadTextInputModeModeNumeric");
    })(s || (s = {})),
    (function (e) {
      (e[(e.k_EAppUpdateContentType_Content = 0)] =
        "k_EAppUpdateContentType_Content"),
        (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
          "k_EAppUpdateContentType_Workshop"),
        (e[(e.k_EAppUpdateContentType_Shader = 2)] =
          "k_EAppUpdateContentType_Shader"),
        (e[(e.k_EAppUpdateContentType_Max = 3)] =
          "k_EAppUpdateContentType_Max");
    })(a || (a = {})),
    (function (e) {
      (e[(e.k_EOverlayToStoreFlag_None = 0)] = "k_EOverlayToStoreFlag_None"),
        (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
          "k_EOverlayToStoreFlag_AddToCart"),
        (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
          "k_EOverlayToStoreFlag_AddToCartAndShow");
    })(r || (r = {})),
    (function (e) {
      (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
        "k_EActivateGameOverlayToWebPageMode_Default"),
        (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
          "k_EActivateGameOverlayToWebPageMode_Modal");
    })(c || (c = {})),
    (function (e) {
      (e[(e.k_EGamingDeviceType_Unknown = 0)] = "k_EGamingDeviceType_Unknown"),
        (e[(e.k_EGamingDeviceType_StandardPC = 1)] =
          "k_EGamingDeviceType_StandardPC"),
        (e[(e.k_EGamingDeviceType_Console = 256)] =
          "k_EGamingDeviceType_Console"),
        (e[(e.k_EGamingDeviceType_PS3 = 272)] = "k_EGamingDeviceType_PS3"),
        (e[(e.k_EGamingDeviceType_Steambox = 288)] =
          "k_EGamingDeviceType_Steambox"),
        (e[(e.k_EGamingDeviceType_Handheld = 512)] =
          "k_EGamingDeviceType_Handheld"),
        (e[(e.k_EGamingDeviceType_Phone = 528)] = "k_EGamingDeviceType_Phone"),
        (e[(e.k_EGamingDeviceType_SteamDeck = 544)] =
          "k_EGamingDeviceType_SteamDeck");
    })(l || (l = {})),
    (function (e) {
      (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
        (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
          "k_ELoginUIStyleNewWithoutQRCode"),
        (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
    })(m || (m = {})),
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
    })(u || (u = {})),
    (function (e) {
      (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
        "k_ERaiseGameWindowResult_NotRunning"),
        (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
          "k_ERaiseGameWindowResult_Success"),
        (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
          "k_ERaiseGameWindowResult_Failure");
    })(E || (E = {}));
  const d = React;
  e.n(d)().createContext({});
  const p = {
      EUNIVERSE: 0,
      WEB_UNIVERSE: "",
      LANGUAGE: "english",
      SUPPORTED_LANGUAGES: [],
      COUNTRY: "",
      AVATAR_BASE_URL: "",
      MEDIA_CDN_COMMUNITY_URL: "",
      MEDIA_CDN_URL: "",
      COMMUNITY_CDN_URL: "",
      COMMUNITY_CDN_ASSET_URL: "",
      STORE_CDN_URL: "",
      PUBLIC_SHARED_URL: "",
      COMMUNITY_BASE_URL: "",
      CHAT_BASE_URL: "",
      STORE_BASE_URL: "",
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
      LOCAL_HOSTNAME: "",
      WEBAPI_BASE_URL: "",
      TOKEN_URL: "",
      BUILD_TIMESTAMP: 0,
      PAGE_TIMESTAMP: 0,
      FROM_WEB: !1,
      WEBSITE_ID: "Unknown",
      get SESSIONID() {
        return (function () {
          if (!n()) return g || (g = y()), g;
          let e = t("sessionid");
          e || (e = y());
          return e;
        })();
      },
      FRIENDSUI_BETA: !1,
      STEAM_TV: !1,
      DEV_MODE: !1,
      IN_STEAMUI: !1,
      IN_GAMEPADUI: !1,
      IN_STEAMUI_SHARED_CONTEXT: !1,
      ONE_STEAMUI_SHARED_CONTEXT: !1,
      GAMEPADUI_WINDOWED: !1,
      DECK_DISPLAY_MODE: !1,
      ON_DECK: !1,
      IN_GAMESCOPE: !1,
      IN_LOGIN: !1,
      IN_LOGIN_REFRESH: !1,
    },
    S = {
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
    C = { steamid: "", clanid: 0, listid: 0 },
    k = {
      CLANSTEAMID: "",
      CLANACCOUNTID: 0,
      APPID: 0,
      VANITY_ID: "",
      IS_CREATOR_HOME: !1,
      IS_CURATOR: !1,
      IS_OGG: !1,
      CAN_UPLOAD_IMAGES: !1,
      APP_NAME: "",
      HEADER_IMAGE: "",
      HAS_ADULT_CONTENT: !1,
      HAS_ADULT_CONTENT_SEX: !1,
      HAS_ADULT_CONTENT_VIOLENCE: !1,
      IS_VALVE_GROUP: !1,
      IS_ALLOWED_SC: !1,
    },
    I = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
  let g;
  function y() {
    let e = (function () {
      let e = "";
      for (let o = 0; o < 24; o++)
        e += ((t = 0),
        (n = 35),
        (t = Math.ceil(t)),
        (n = Math.floor(n)),
        Math.floor(Math.random() * (n - t + 1)) + t).toString(36);
      var t, n;
      return e;
    })();
    return (
      (function (e, t, o, i) {
        if (!n()) return;
        i || (i = "/");
        let _ = "";
        if (void 0 !== o && o) {
          let e = new Date();
          e.setTime(e.getTime() + 864e5 * o),
            (_ = "; expires=" + e.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(t) +
          _ +
          ";path=" +
          i;
      })("sessionid", e, 0),
      e
    );
  }
  function A(e = "webui_config") {
    const o = {},
      i = T("config", e);
    i && (delete i.SESSIONID, Object.assign(p, i), (o.config = !0));
    const _ = T("userinfo", e);
    _ &&
      (Object.assign(S, _),
      (o.userConfig = !0),
      S.is_support &&
        (function () {
          let e = null;
          return (
            n() && (e = t("presentation_mode")),
            Boolean(e && 1 === Number.parseInt(e))
          );
        })() &&
        (S.is_support = !1));
    const s = T("broadcast", e);
    s && (Object.assign(C, s), (o.broadcastConfig = !0));
    const a = T("community", e);
    a && (Object.assign(k, a), (o.communityConfig = !0));
    const r = T("event", e);
    return r && (Object.assign(I, r), (o.eventConfig = !0)), o;
  }
  function h(e, t = "webui_config", n) {
    let o;
    if (
      ((o =
        "string" == typeof t
          ? !{
              NODE_ENV: "production",
              STEAM_BUILD: "buildbot",
              VALVE_BUILD: "false",
            }.MOBILE_BUILD && document.getElementById(t)
          : t),
      o)
    )
      try {
        if (o.hasAttribute("data-" + e)) {
          return JSON.parse(o.getAttribute("data-" + e));
        }
        return null;
      } catch (e) {
        console.error("Failed to parse config", e);
      }
    else n && console.error("Missing config element #", t);
  }
  function T(e, t = "webui_config") {
    return h(e, t, !0);
  }
  let R = { success: !0, result: 1 };
  class P {
    constructor() {
      (this.m_mapWaitingCallbacks = new Map()),
        (this.m_iCallSeq = 1),
        (this.m_bReady = !1),
        (this.m_bClientConnectionFailed = !1),
        (this.m_bSecurityException = !1),
        (this.m_ClientInfo = {
          ulVersion: "",
          bFriendsUIEnabled: !1,
          unAccountID: 0,
          rgSupportedMessages: [],
        });
    }
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
        let o = this.m_iCallSeq++;
        this.BSendMsg(e, o)
          ? this.m_mapWaitingCallbacks.set(o, {
              iSeq: o,
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
        universe: p.EUNIVERSE,
        accountid: S.accountid,
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
          this.m_socket = new WebSocket("ws://127.0.0.1:27060/clientsocket/");
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
  let N = new (class {
    constructor() {
      (this.m_connection = new P()),
        (this.m_bAllowAccountMismatch = !1),
        (this.m_mapCacheSubscribedApp = new Map());
    }
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
        () => R,
        () => this.FailureResult()
      );
    }
    BClientSupportsMessage(e) {
      return (
        !(!this.m_connection.connected_to_client || !this.m_connection.ready) &&
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
    OpenJoinGameDialog(e) {
      let t = { message: "ShowJoinGameDialog", friend_id: e };
      return this.GenericEResultCall(t);
    }
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
    ViewGameInfoForSteamID(e) {
      let t = { message: "ViewGameInfoForSteamID", steamid: e };
      return this.GenericEResultCall(t);
    }
    OpenFriendsDialog() {
      return this.GenericEResultCall({ message: "OpenFriendsDialog" });
    }
    BClientAccountMatches() {
      return (
        !S.logged_in || S.accountid == this.m_connection.ClientInfo.unAccountID
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
                  1 === e.success ? R : this.FailureResult(e.success)
                )
            : { success: !1, result: 19, account_mismatch: !0 }
        )
        .catch(() => this.FailureResult());
    }
  })();
  (window.ClientConnectionAPI = N),
    document.addEventListener("DOMContentLoaded", function () {
      A(), (window.ClientConnectionAPI = N);
    });
})();
