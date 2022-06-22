/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    "2KLf": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var i = a("mrSG"),
        s = a("FmLm"),
        n = a("/Q1a"),
        o = a("EuLa"),
        r = a("6MVd");
      class c {
        constructor() {
          (this.m_mapAppToSNRs = new Map()), (this.m_rgImpressionsToAdd = []);
        }
        AddImpression(e, t) {
          let a = !1;
          s.a.Get().BAppImpressionsAllowed()
            ? (this.m_mapAppToSNRs.has(e)
                ? -1 == this.m_mapAppToSNRs.get(e).indexOf(t) &&
                  (this.m_mapAppToSNRs.get(e).push(t), (a = !0))
                : (this.m_mapAppToSNRs.set(e, [t]), (a = !0)),
              a &&
                (this.m_rgImpressionsToAdd.push(`${e}@${t}`),
                this.UpdateCookie()))
            : "dev" === n.d.WEB_UNIVERSE &&
              console.log("Cookie Prefs: Not allowing App Impressions");
        }
        UpdateCookie() {
          const e = [
            Object(o.b)("app_impressions") || "",
            ...this.m_rgImpressionsToAdd,
          ].join("|");
          this.m_rgImpressionsToAdd = [];
          encodeURIComponent(e).length <= 3200 &&
            Object(o.c)("app_impressions", e);
        }
      }
      Object(i.b)([Object(r.a)(1e3)], c.prototype, "UpdateCookie", null);
      const l = new c();
      window.g_ImpressionTracker = l;
    },
    "3WEt": function (e, t, a) {
      "use strict";
      a.r(t);
      var i,
        s = a("mrSG"),
        n = a("/Q1a"),
        o = a("TyAF"),
        r = a("2vnA"),
        c = a("q1tI"),
        l = a.n(c),
        d = a("i5oW"),
        m = a("e356"),
        p = a("GbHM"),
        _ = a("GXif"),
        u = a("hCpY"),
        h = a("Asqs"),
        g = a("1h/R"),
        E = a.n(g),
        b = a("vDqi"),
        v = a.n(b);
      !(function (e) {
        (e[(e.Unrequested = 0)] = "Unrequested"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Valid = 2)] = "Valid"),
          (e[(e.Failed = 3)] = "Failed"),
          (e[(e.Rerequest = 4)] = "Rerequest");
      })(i || (i = {}));
      class S {
        constructor() {
          (this.eState = i.Unrequested), (this.nExpirationTime = 0);
        }
        getData(e, t, a) {
          const s = this.eState == i.Pending || this.eState == i.Rerequest;
          return (
            this.isExpired() &&
              !s &&
              ((this.eState = i.Pending),
              t()
                .then((s) => {
                  if (this.eState == i.Rerequest)
                    return this.expireData(), void this.getData(e, t, a);
                  (this.data = a ? a(s) : s),
                    s
                      ? (this.delayNewData(e), (this.eState = i.Valid))
                      : (this.eState = i.Failed);
                })
                .catch((e) => {
                  (this.data = a(void 0)), (this.eState = i.Failed);
                })),
            this.data
          );
        }
        clearData() {
          (this.eState = i.Unrequested),
            (this.data = null),
            (this.nExpirationTime = 0);
        }
        setDataPending() {
          this.eState = i.Pending;
        }
        isDataPending() {
          return this.eState == i.Pending;
        }
        setData(e, t) {
          (this.data = t), this.delayNewData(e), (this.eState = i.Valid);
        }
        expireData() {
          this.nExpirationTime = 0;
        }
        isExpired() {
          const e = Date.now() / 1e3;
          return this.nExpirationTime < e;
        }
        delayNewData(e) {
          if (e <= 0) this.nExpirationTime = Number.MAX_SAFE_INTEGER;
          else {
            const t = Date.now() / 1e3;
            this.nExpirationTime = t + e;
          }
        }
        rerequestDataIfPending() {
          this.eState == i.Pending && (this.eState = i.Rerequest);
        }
        getCachedData() {
          return this.data;
        }
      }
      Object(s.b)([r.C], S.prototype, "data", void 0),
        Object(s.b)([r.C], S.prototype, "nExpirationTime", void 0);
      Object(s.b)(
        [r.C],
        class {
          constructor() {
            this.m_mapKeyToDataWrapper = new Map();
          }
          getAsyncDataWrapper(e) {
            let t;
            return (
              this.m_mapKeyToDataWrapper.has(e)
                ? (t = this.m_mapKeyToDataWrapper.get(e))
                : ((t = new S()), this.m_mapKeyToDataWrapper.set(e, t)),
              t
            );
          }
          clearKey(e) {
            this.m_mapKeyToDataWrapper.has(e) &&
              this.m_mapKeyToDataWrapper.get(e).clearData(),
              this.m_mapKeyToDataWrapper.delete(e);
          }
          getAllElements() {
            return Array.from(this.m_mapKeyToDataWrapper.values()).map((e) =>
              e.getCachedData()
            );
          }
          getAllElementsAndKeys() {
            let e = [],
              t = this.m_mapKeyToDataWrapper.entries(),
              a = t.next();
            for (; !a.done; )
              e.push({ key: a.value[0], data: a.value[1].getCachedData() }),
                (a = t.next());
            return e;
          }
        }.prototype,
        "m_mapKeyToDataWrapper",
        void 0
      );
      let T = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        BASE_URL: "",
        COMMUNITY_BASE_URL: "",
        STORE_BASE_URL: "",
        RELATIVE_URL: "",
        IMG_URL: "",
        IMG_URL_BASE: "",
        CDN_URL: "",
        RENDER_TIMESTAMP: 0,
        EXPLORE_URL: "",
        ACCOUNT_ID: 0,
        STEAM_ID: "",
        SESSION_ID: "",
        LOGIN_REDIRECT: "",
        AVATAR_URL: "",
        PERSONA_NAME: "",
        LINK_PARAM: "",
        NUM_POPULARITY_STEPS: 0,
        NUM_RECENCY_STEPS: 0,
        MAX_PLAYED_GAMES: 0,
        RESET_OPTIONS: !1,
        INCLUDE_PLAYED: !1,
        ALGORITHM: 0,
        REINFERENCE: !1,
        MODEL_VERSION: 0,
        PERSISTENT_IGNORE: !1,
        DEFAULT_RECENCY_SLIDER: 0,
        DEFAULT_POPULARITY_SLIDER: 0,
        DEFAULT_INCLUDED_TAGS: [],
        DEFAULT_EXCLUDED_TAGS: [],
        DEFAULT_IGNORED_PLAYED_APPS: [],
        EXCLUDE_WISHLIST: !1,
        USE_MICROTRAILERS: !1,
      };
      var y;
      !(function (e) {
        (e[(e.ClickThrough = 1)] = "ClickThrough"),
          (e[(e.AddToWishlist = 2)] = "AddToWishlist"),
          (e[(e.AddToCart = 3)] = "AddToCart");
      })(y || (y = {}));
      class R {
        constructor() {
          (this.m_rgFilterTags = []),
            (this.m_rgExcludeTags = []),
            (this.m_rgSavedFilterTags = []),
            (this.m_rgSavedExcludeTags = []),
            (this.m_mapAppDetailsCache = new Map()),
            (this.m_ResultDataCache = new S()),
            (this.m_InputAppsCache = new S()),
            (this.m_TagsCache = new S()),
            (this.m_TagNameMap = new Map()),
            (this.m_fPopularityValue = window.history.state
              ? window.history.state.popularity
              : 0.25),
            (this.m_fRecencyValue = window.history.state
              ? window.history.state.recency
              : 0),
            (this.m_bExcludeWishlisted =
              !!window.history.state && window.history.state.excludewishlisted),
            (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
            (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
            (this.m_bStateUpdated = !1),
            (this.m_bShouldMute = !0),
            (this.m_bIgnoredEdited = !1),
            (this.m_bUseMicrotrailers = !1),
            setInterval(() => {
              this.m_bStateUpdated &&
                (window.history.replaceState(
                  {
                    popularity: this.m_fPopularityValue,
                    recency: this.m_fRecencyValue,
                    excludewishlisted: this.m_bExcludeWishlisted,
                  },
                  ""
                ),
                (this.m_bStateUpdated = !1));
            }, 1e3),
            setInterval(() => {
              (this.m_fPopularityValue == this.m_fQueuedPopularityValue &&
                this.m_fQueuedRecencyValue == this.m_fRecencyValue) ||
                ((this.m_fPopularityValue = this.m_fQueuedPopularityValue),
                (this.m_fRecencyValue = this.m_fQueuedRecencyValue),
                (this.m_bStateUpdated = !0));
            }, 400);
        }
        Init() {
          (this.m_fPopularityValue = T.DEFAULT_POPULARITY_SLIDER),
            (this.m_fRecencyValue = T.DEFAULT_RECENCY_SLIDER),
            (this.m_rgSavedExcludeTags = [...T.DEFAULT_EXCLUDED_TAGS]),
            (this.m_rgSavedFilterTags = [...T.DEFAULT_INCLUDED_TAGS]),
            (this.m_rgExcludeTags = [...this.m_rgSavedExcludeTags]),
            (this.m_rgFilterTags = [...this.m_rgSavedFilterTags]),
            (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
            (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
            (this.m_bExcludeWishlisted = !1),
            (this.m_bStateUpdated = !0),
            (this.m_bExcludeWishlisted = T.EXCLUDE_WISHLIST),
            (this.m_bUseMicrotrailers = T.USE_MICROTRAILERS);
        }
        getDetails(e) {
          return (
            this.m_mapAppDetailsCache.has(e) ||
              this.m_mapAppDetailsCache.set(e, new S()),
            this.m_mapAppDetailsCache.get(e).getData(
              60,
              () =>
                Object(s.a)(this, void 0, void 0, function* () {
                  return yield v.a.get(
                    `${T.BASE_URL}recommender/${T.STEAM_ID}/details?appid=${e}&sessionid=${T.SESSION_ID}`
                  );
                }),
              (e) => e.data
            )
          );
        }
        getResults(e, t, a, i) {
          const n = e ? "1" : "0",
            o = t ? `${t}` : "0",
            r = a ? "1" : "0",
            c = i ? `${i}` : "0";
          let l = "";
          const d = this.getInputApps();
          if (!d) return;
          let m = [];
          return (
            Object.keys(d).map((e) => {
              (d[e].i || d[e].ip) && m.push(d[e].a);
            }),
            m.length > 0 && (l = "&ignored=" + m.join()),
            this.m_ResultDataCache.getData(
              9999999,
              () =>
                Object(s.a)(this, void 0, void 0, function* () {
                  return yield v.a.get(
                    `${T.BASE_URL}recommender/${T.STEAM_ID}/results?sessionid=${T.SESSION_ID}&steamid=${T.STEAM_ID}&include_played=${n}&algorithm=${o}&reinference=${r}&model_version=${c}${l}`
                  );
                }),
              (e) => e.data
            )
          );
        }
        areResultsExpired() {
          return this.m_ResultDataCache.isExpired();
        }
        getRecommendations() {
          const e = O.getResults(
            T.INCLUDE_PLAYED,
            T.ALGORITHM,
            T.REINFERENCE,
            T.MODEL_VERSION
          );
          return e ? e.recommendations : void 0;
        }
        getInputApps() {
          return this.m_InputAppsCache.getData(
            9999999,
            () =>
              Object(s.a)(this, void 0, void 0, function* () {
                return yield v.a.get(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/inputs?sessionid=${T.SESSION_ID}&steamid=${T.STEAM_ID}`
                );
              }),
            (e) => e.data
          );
        }
        getAppInfo() {
          const e = O.getResults(
            T.INCLUDE_PLAYED,
            T.ALGORITHM,
            T.REINFERENCE,
            T.MODEL_VERSION
          );
          return e ? e.app_info : void 0;
        }
        getTags() {
          return this.m_TagsCache.getData(
            9999999,
            () =>
              Object(s.a)(this, void 0, void 0, function* () {
                return yield v.a.get(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/tags?sessionid=${T.SESSION_ID}`
                );
              }),
            (e) => {
              this.m_TagNameMap.clear();
              for (const t of e.data) this.m_TagNameMap.set(t.tagid, t.name);
              return e.data;
            }
          );
        }
        getTagName(e) {
          return this.getTags(), this.m_TagNameMap.get(e);
        }
        getTagHeight() {
          return Math.max(
            this.m_rgFilterTags.length,
            this.m_rgExcludeTags.length
          );
        }
        onPopularityChanged(e) {
          this.m_fQueuedPopularityValue = Number(e.target.value);
        }
        onRecencyChanged(e) {
          this.m_fQueuedRecencyValue = Number(e.target.value);
        }
        onTagFilterAdd(e) {
          this.m_rgFilterTags.push(e), (this.m_bStateUpdated = !0);
        }
        onTagFilterRemove(e) {
          for (let t = 0; t < this.m_rgFilterTags.length; t++)
            if (this.m_rgFilterTags[t] == e) {
              this.m_rgFilterTags.splice(t, 1);
              break;
            }
          this.m_bStateUpdated = !0;
        }
        onTagExcludeAdd(e) {
          this.m_rgExcludeTags.push(e), (this.m_bStateUpdated = !0);
        }
        onTagExcludeRemove(e) {
          for (let t = 0; t < this.m_rgExcludeTags.length; t++)
            if (this.m_rgExcludeTags[t] == e) {
              this.m_rgExcludeTags.splice(t, 1);
              break;
            }
          this.m_bStateUpdated = !0;
        }
        doTagsPassFilter(e) {
          for (const t of this.m_rgFilterTags)
            if (-1 == e.indexOf(t)) return !1;
          return !0;
        }
        doTagsFailExclusion(e) {
          for (const t of this.m_rgExcludeTags)
            if (-1 != e.indexOf(t)) return !0;
          return !1;
        }
        onExcludeWishlistedToggled(e) {
          (this.m_bExcludeWishlisted = !this.m_bExcludeWishlisted),
            (this.m_bStateUpdated = !0);
        }
        onSaveUserSettings(e) {
          return Object(s.a)(this, void 0, void 0, function* () {
            let e = [];
            const t = this.getInputApps();
            for (let a of t) (a.i || a.ip) && e.push(a.a);
            if (
              this.m_fRecencyValue == T.DEFAULT_RECENCY_SLIDER &&
              this.m_fPopularityValue == T.DEFAULT_POPULARITY_SLIDER &&
              this.m_rgFilterTags.slice().sort().join(",") ===
                this.m_rgSavedFilterTags.sort().join(",") &&
              this.m_rgExcludeTags.slice().sort().join(",") ===
                this.m_rgSavedExcludeTags.sort().join(",") &&
              e.slice().sort().join(",") ===
                T.DEFAULT_IGNORED_PLAYED_APPS.sort().join(",") &&
              this.m_bExcludeWishlisted == T.EXCLUDE_WISHLIST
            );
            else {
              let t = {
                session_id: T.SESSION_ID,
                recency_position: this.m_fRecencyValue,
                popularity_position: this.m_fPopularityValue,
                included_tags: this.m_rgFilterTags,
                excluded_tags: this.m_rgExcludeTags,
                ignored_played_apps: e,
                exclude_wishlist: this.m_bExcludeWishlisted,
              };
              (T.DEFAULT_RECENCY_SLIDER = this.m_fRecencyValue),
                (T.DEFAULT_POPULARITY_SLIDER = this.m_fPopularityValue),
                (T.DEFAULT_INCLUDED_TAGS = [...this.m_rgFilterTags]),
                (T.DEFAULT_EXCLUDED_TAGS = [...this.m_rgExcludeTags]),
                (this.m_rgSavedFilterTags = [...this.m_rgFilterTags]),
                (this.m_rgSavedExcludeTags = [...this.m_rgExcludeTags]),
                (T.DEFAULT_IGNORED_PLAYED_APPS = [...e]),
                (T.EXCLUDE_WISHLIST = this.m_bExcludeWishlisted),
                yield v.a.post(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/savesettings`,
                  t
                );
            }
          });
        }
        onToggleIgnore(e) {
          return Object(s.a)(this, void 0, void 0, function* () {
            const t = this.getInputApps();
            for (let a of t)
              if (a.a == e) {
                a.i || a.ip ? ((a.i = !1), (a.ip = !1)) : (a.ip = !0);
                break;
              }
            this.m_ResultDataCache.expireData(), (this.m_bIgnoredEdited = !0);
          });
        }
        onUpdateWithIgnored() {
          this.m_ResultDataCache.expireData(), (this.m_bIgnoredEdited = !1);
        }
        onAppClicked(e, t) {
          return Object(s.a)(this, void 0, void 0, function* () {
            let a = {
              account_id: T.ACCOUNT_ID,
              session_id: T.SESSION_ID,
              app_id: e,
              app_rank: t,
              action: y.ClickThrough,
              algorithm: 1,
              setting_1: 100 * this.m_fPopularityValue,
              setting_2: 100 * this.m_fRecencyValue,
            };
            yield v.a.post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, a);
          });
        }
        onAddToWishlist(e, t) {
          return Object(s.a)(this, void 0, void 0, function* () {
            O.getAppInfo()[e].w = !0;
            let a = { sessionid: T.SESSION_ID, appid: e };
            const i = yield v.a.post(
              `${T.BASE_URL}recommender/${T.STEAM_ID}/wishlist?snr=${T.LINK_PARAM}`,
              a
            );
            let s = {
              account_id: T.ACCOUNT_ID,
              session_id: T.SESSION_ID,
              app_id: e,
              app_rank: t,
              action: y.AddToWishlist,
              algorithm: 1,
              setting_1: 100 * this.m_fPopularityValue,
              setting_2: 100 * this.m_fRecencyValue,
            };
            return (
              yield v.a.post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, s),
              i
            );
          });
        }
        onGoToWishlist() {
          window.location.href = `${T.COMMUNITY_BASE_URL}profiles/${T.STEAM_ID}/wishlist`;
        }
        onAddToCart(e, t) {
          return Object(s.a)(this, void 0, void 0, function* () {
            let a = { sessionid: T.SESSION_ID, appid: e };
            yield v.a.post(
              `${T.BASE_URL}recommender/${T.STEAM_ID}/cart?snr=${T.LINK_PARAM}`,
              a
            );
            let i = {
              account_id: T.ACCOUNT_ID,
              session_id: T.SESSION_ID,
              app_id: e,
              app_rank: t,
              action: y.AddToCart,
              algorithm: 1,
              setting_1: 100 * this.m_fPopularityValue,
              setting_2: 100 * this.m_fRecencyValue,
            };
            yield v.a.post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, i),
              (window.location.href = `${n.d.STORE_BASE_URL}cart`);
          });
        }
        onMuteClicked() {
          this.m_bShouldMute = !0;
        }
        onUnMuteClicked() {
          this.m_bShouldMute = !1;
        }
        shouldMute() {
          return this.m_bShouldMute;
        }
        shouldUseMicrotrailers() {
          return this.m_bUseMicrotrailers;
        }
      }
      Object(s.b)([r.C], R.prototype, "m_fPopularityValue", void 0),
        Object(s.b)([r.C], R.prototype, "m_fRecencyValue", void 0),
        Object(s.b)([r.C], R.prototype, "m_rgFilterTags", void 0),
        Object(s.b)([r.C], R.prototype, "m_rgExcludeTags", void 0),
        Object(s.b)([r.C], R.prototype, "m_fQueuedPopularityValue", void 0),
        Object(s.b)([r.C], R.prototype, "m_fQueuedRecencyValue", void 0),
        Object(s.b)([r.C], R.prototype, "m_bExcludeWishlisted", void 0),
        Object(s.b)([r.C], R.prototype, "m_bShouldMute", void 0),
        Object(s.b)([r.C], R.prototype, "m_bUseMicrotrailers", void 0),
        Object(s.b)([r.C], R.prototype, "m_bIgnoredEdited", void 0),
        Object(s.b)([u.b], R.prototype, "getTagHeight", null),
        Object(s.b)([u.b], R.prototype, "onPopularityChanged", null),
        Object(s.b)([u.b], R.prototype, "onRecencyChanged", null),
        Object(s.b)([u.b], R.prototype, "onTagFilterAdd", null),
        Object(s.b)([u.b], R.prototype, "onTagFilterRemove", null),
        Object(s.b)([u.b], R.prototype, "onTagExcludeAdd", null),
        Object(s.b)([u.b], R.prototype, "onTagExcludeRemove", null),
        Object(s.b)([u.b], R.prototype, "doTagsPassFilter", null),
        Object(s.b)([u.b], R.prototype, "doTagsFailExclusion", null),
        Object(s.b)([u.b], R.prototype, "onExcludeWishlistedToggled", null),
        Object(s.b)([u.b], R.prototype, "onSaveUserSettings", null),
        Object(s.b)([u.b], R.prototype, "onToggleIgnore", null),
        Object(s.b)([u.b], R.prototype, "onUpdateWithIgnored", null),
        Object(s.b)([u.b], R.prototype, "onAppClicked", null),
        Object(s.b)([u.b], R.prototype, "onAddToWishlist", null),
        Object(s.b)([u.b], R.prototype, "onGoToWishlist", null),
        Object(s.b)([u.b], R.prototype, "onAddToCart", null),
        Object(s.b)([u.b], R.prototype, "onMuteClicked", null),
        Object(s.b)([u.b], R.prototype, "onUnMuteClicked", null),
        Object(s.b)([u.b], R.prototype, "shouldMute", null),
        Object(s.b)([u.b], R.prototype, "shouldUseMicrotrailers", null);
      const O = new R();
      window.g_InteractiveRecommender = O;
      var f = a("tXj3");
      !(function () {
        let e = Object(n.h)("ir_config", "application_config");
        e && (Object.assign(T, e), O.Init());
      })();
      const A = ({ accountID: e }) => {
          const t = O.getInputApps(),
            a = Object.keys(t).length;
          let i = 0;
          return (
            Object.keys(t).map((e) => {
              i += t[e].p;
            }),
            l.a.createElement(
              "div",
              { className: h.IdentityBlock },
              l.a.createElement("img", {
                className: h.Avatar,
                src: T.AVATAR_URL,
              }),
              l.a.createElement(
                "div",
                { className: h.PersonalInfo },
                l.a.createElement(
                  "div",
                  { className: h.Persona },
                  T.PERSONA_NAME
                ),
                l.a.createElement(
                  "div",
                  { className: h.GameCount },
                  Object(_.g)("#PlaytimeList_RecentGames", a)
                ),
                l.a.createElement(
                  "div",
                  { className: h.TotalTime },
                  Object(_.g)("#PlaytimeList_HoursTotal", i)
                )
              )
            )
          );
        },
        I = ({ appID: e, name: t, hours: a, lastPlayed: i, ignored: s }) => {
          const n = `${T.CDN_URL}apps/${e}/header.jpg`,
            o = Date.now() / 1e3 - i;
          let r = "",
            c = "";
          return (
            i <= 86400
              ? (c = Object(_.g)("#PlaytimeList_LastPlayedMax"))
              : o > 31449600
              ? ((r = Object(_.q)(i)),
                (c = Object(_.g)("#PlaytimeList_LastPlayed", r)))
              : ((r = Object(_.s)(o)),
                (c = Object(_.g)("#PlaytimeList_LastPlayed", r))),
            l.a.createElement(
              "div",
              { className: Object(p.a)(h.PlayedGame, s && h.Ignored) },
              l.a.createElement(
                "a",
                { href: `${T.BASE_URL}app/${e}?snr=${T.LINK_PARAM}` },
                l.a.createElement("img", { className: h.Logo, src: n })
              ),
              l.a.createElement(
                "div",
                { className: h.PlaytimeInfo },
                l.a.createElement(
                  "div",
                  { className: h.HoursPlayed },
                  Object(_.g)("#PlaytimeList_Hours", a)
                ),
                l.a.createElement("div", { className: h.Title }, t),
                l.a.createElement("div", { className: h.LastPlayed }, c),
                l.a.createElement(
                  "div",
                  {
                    className: h.IgnoreToggle,
                    onClick: () => O.onToggleIgnore(e),
                  },
                  Object(_.g)(
                    s ? "#PlaytimeList_UnIgnore" : "#PlaytimeList_Ignore"
                  )
                )
              )
            )
          );
        };
      let N = class extends l.a.Component {
        constructor(e) {
          super(e), (this.state = {});
        }
        render() {
          const e = O.getInputApps();
          let t = [];
          if (!e)
            return l.a.createElement(
              "div",
              { className: h.PlaytimeList },
              l.a.createElement(
                "div",
                { className: h.Header },
                Object(_.g)("#PlaytimeList_Header")
              ),
              l.a.createElement("div", { className: h.Loading })
            );
          O.getAppInfo();
          const a = e.slice().sort((e, t) => t.l - e.l);
          return (
            Object.keys(a).map((e) => {
              const i = a[e];
              t.push(
                l.a.createElement(I, {
                  key: "PlayedGame_" + i.a,
                  appID: i.a,
                  name: i.t,
                  hours: i.p,
                  lastPlayed: i.l,
                  ignored: i.i || i.ip,
                })
              );
            }),
            l.a.createElement(
              "div",
              { className: h.PlaytimeList },
              l.a.createElement(
                "div",
                { className: h.Header },
                Object(_.g)("#PlaytimeList_Header")
              ),
              l.a.createElement(A, { accountID: this.props.accountID }),
              l.a.createElement("div", { className: h.List }, t)
            )
          );
        }
      };
      N = Object(s.b)([o.a], N);
      const C = ({
          titleLabel: e,
          minLabel: t,
          maxLabel: a,
          minValue: i,
          maxValue: s,
          value: n,
          onChange: o,
          sliderLabels: r,
        }) => {
          const c = r
              ? Math.round((r.length - 1) * ((n - i) / (s - i)))
              : void 0,
            d = r ? r[c] : "";
          return l.a.createElement(
            "div",
            { className: h.OptionSlider },
            l.a.createElement("div", { className: h.Title }, e),
            l.a.createElement(
              "div",
              { className: h.Labels },
              l.a.createElement("div", { className: h.Min }, t),
              l.a.createElement("div", { className: h.Max }, a)
            ),
            l.a.createElement("input", {
              type: "range",
              min: i,
              max: s,
              step: (s - i) / 100,
              value: n,
              onChange: o,
            }),
            l.a.createElement("div", { className: h.OptionalLabel }, d)
          );
        },
        L = ({ className: e, titleLabel: t, checked: a, onChange: i }) =>
          l.a.createElement(
            "label",
            { className: Object(p.a)(h.OptionCheckbox, e && e) },
            l.a.createElement("input", {
              type: "checkbox",
              className: h.Checkbox,
              checked: a,
              onChange: i,
            }),
            t
          );
      let D = class extends l.a.Component {
        constructor(e) {
          super(e),
            (this.selectedtags = []),
            (this.rgTags = []),
            (this.selectedtags = [...e.selectedtags]),
            (this.state = { value: "", suggestions: [] });
        }
        componentDidMount() {
          const e = O.getTags();
          if (e)
            for (const t of e)
              this.rgTags.push({ id: parseInt(t.tagid), name: t.name });
        }
        onFetchRequested(e) {
          const t = e.value.trim().toLowerCase(),
            a = t.length,
            i =
              0 === a
                ? this.props.tagoptions.slice(0, 10)
                : this.props.tagoptions.filter(
                    (e) => e.name.toLowerCase().slice(0, a) === t
                  );
          this.setState({ suggestions: i });
        }
        onClearRequested() {}
        onChange(e, t) {
          this.setState({ value: t.newValue });
        }
        onKeyDown(e) {
          if (13 == e.keyCode)
            for (const t of this.props.tagoptions)
              if (t.name.toLowerCase() == this.state.value.toLowerCase()) {
                const a = {
                  suggestion: { id: t.id, name: t.name },
                  suggestionValue: t.name,
                  suggestionIndex: 0,
                  sectionIndex: 0,
                  method: "enter",
                };
                this.onSuggestionSelected(e, a);
                break;
              }
        }
        shouldRenderSuggestions(e) {
          return !0;
        }
        onSuggestionSelected(e, t) {
          for (const e of this.selectedtags) if (e == t.suggestion.id) return;
          this.selectedtags.push(t.suggestion.id),
            this.props.onAddTag(t.suggestion.id);
        }
        onRemoveSelectedTag(e) {
          for (let t = 0; t < this.selectedtags.length; t++)
            if (this.selectedtags[t] == e) {
              this.props.onRemoveTag(this.selectedtags[t]),
                this.selectedtags.splice(t, 1);
              break;
            }
        }
        render() {
          const e = {
            placeholder: Object(_.g)("#TagSelect"),
            value: this.state.value,
            onChange: this.onChange,
            onKeyDown: this.onKeyDown,
          };
          let t = [];
          for (const e of this.selectedtags) {
            let a = O.m_TagNameMap.get(e);
            t.push(
              l.a.createElement(
                "div",
                {
                  key: e,
                  className: h.SelectedTag,
                  onClick: (t) => this.onRemoveSelectedTag(e),
                },
                l.a.createElement("div", null, a),
                l.a.createElement("div", { className: h.Close }, "X")
              )
            );
          }
          return l.a.createElement(
            "div",
            { className: h.OptionTagList },
            l.a.createElement("div", { className: h.Label }, this.props.title),
            l.a.createElement(E.a, {
              suggestions: this.state.suggestions,
              onSuggestionsFetchRequested: this.onFetchRequested,
              onSuggestionsClearRequested: this.onClearRequested,
              onSuggestionSelected: this.onSuggestionSelected,
              shouldRenderSuggestions: this.shouldRenderSuggestions,
              getSuggestionValue: (e) => e.name,
              renderSuggestion: (e) => l.a.createElement("div", null, e.name),
              inputProps: e,
              theme: {
                input: h.SuggestionInput,
                suggestion: h.OptionSuggestion,
                suggestionsList: h.SuggestionsList,
                suggestionsContainerOpen: h.SuggestionContainerOpen,
              },
            }),
            t
          );
        }
      };
      Object(s.b)([r.C], D.prototype, "selectedtags", void 0),
        Object(s.b)([u.b], D.prototype, "onFetchRequested", null),
        Object(s.b)([u.b], D.prototype, "onClearRequested", null),
        Object(s.b)([u.b], D.prototype, "onChange", null),
        Object(s.b)([u.b], D.prototype, "onKeyDown", null),
        Object(s.b)([u.b], D.prototype, "shouldRenderSuggestions", null),
        Object(s.b)([u.b], D.prototype, "onSuggestionSelected", null),
        Object(s.b)([u.b], D.prototype, "onRemoveSelectedTag", null),
        (D = Object(s.b)([o.a], D));
      const j = Object(o.a)(() => {
        const e = O.getTags();
        let t = [];
        if (e)
          for (const a of e) t.push({ id: parseInt(a.tagid), name: a.name });
        const a = [
          Object(_.g)("#FilterAge_120"),
          Object(_.g)("#FilterAge_60"),
          Object(_.g)("#FilterAge_36"),
          Object(_.g)("#FilterAge_24"),
          Object(_.g)("#FilterAge_12"),
          Object(_.g)("#FilterAge_6"),
        ];
        let i = O.m_rgSavedExcludeTags,
          s = O.m_rgSavedFilterTags;
        return l.a.createElement(
          "div",
          { className: h.RecommendationOptions },
          l.a.createElement(
            "div",
            { className: Object(p.a)(h.Row, h.FirstRow) },
            l.a.createElement(C, {
              minLabel: Object(_.g)("#Popularity_Popular"),
              titleLabel: Object(_.g)("#Popularity_Title"),
              maxLabel: Object(_.g)("#Popularity_Niche"),
              minValue: 0,
              maxValue: 1,
              value: O.m_fQueuedPopularityValue,
              onChange: O.onPopularityChanged,
            }),
            l.a.createElement(C, {
              minLabel: Object(_.g)("#Recency_Older"),
              titleLabel: Object(_.g)("#Recency_Title"),
              maxLabel: Object(_.g)("#Recency_Newer"),
              minValue: 0,
              maxValue: 1,
              value: O.m_fQueuedRecencyValue,
              onChange: O.onRecencyChanged,
              sliderLabels: a,
            })
          ),
          l.a.createElement(
            "div",
            { className: Object(p.a)(h.Row, h.SecondRow) },
            l.a.createElement(D, {
              title: Object(_.g)("#TagFilterMultiple_Title"),
              tagoptions: t,
              selectedtags: s,
              key: "Filter" + s.toString(),
              onAddTag: O.onTagFilterAdd,
              onRemoveTag: O.onTagFilterRemove,
            }),
            l.a.createElement(D, {
              title: Object(_.g)("#TagExcludeMultiple_Title"),
              tagoptions: t,
              selectedtags: i,
              key: "Exclude" + i.toString(),
              onAddTag: O.onTagExcludeAdd,
              onRemoveTag: O.onTagExcludeRemove,
            }),
            l.a.createElement(L, {
              className: h.WishlistCheckbox,
              titleLabel: Object(_.g)("#ExcludeWishlisted"),
              checked: O.m_bExcludeWishlisted,
              onChange: O.onExcludeWishlistedToggled,
            }),
            l.a.createElement(
              "button",
              {
                className: h.SaveUserSettingsButton,
                onClick: O.onSaveUserSettings,
                title: Object(_.g)("#SaveUserSettingsTooltip"),
              },
              Object(_.g)("#SaveUserSettings")
            )
          )
        );
      });
      let P = class extends l.a.Component {
        constructor(e) {
          super(e),
            (this.m_videoRef = l.a.createRef()),
            (this.state = {
              hovered: !1,
              wishlisted: O.getAppInfo()[e.appID].w,
            });
        }
        componentDidMount() {
          this.m_videoRef.current.defaultMuted = !0;
        }
        componentDidUpdate() {
          if (
            this.state.hovered &&
            this.m_videoRef &&
            this.m_videoRef.current &&
            0 == this.m_videoRef.current.currentTime
          ) {
            const e = this.m_videoRef.current.play();
            e &&
              e.then(
                () => {},
                () => {}
              );
          }
        }
        OnHover() {
          this.setState({ hovered: !0 });
        }
        OnUnHover() {
          this.setState({ hovered: !1 }),
            this.m_videoRef &&
              this.m_videoRef.current &&
              ((this.m_videoRef.current.currentTime = 0),
              this.m_videoRef.current.pause());
        }
        onMuteToggle(e) {
          O.shouldMute()
            ? (O.onUnMuteClicked(),
              this.m_videoRef &&
                this.m_videoRef.current &&
                (this.m_videoRef.current.muted = !1))
            : (O.onMuteClicked(),
              this.m_videoRef &&
                this.m_videoRef.current &&
                (this.m_videoRef.current.muted = !0)),
            e.preventDefault(),
            e.stopPropagation();
        }
        onAddToWishlist(e) {
          O.onAddToWishlist(this.props.appID, this.props.rank),
            this.setState({ wishlisted: !0 }),
            e.preventDefault(),
            e.stopPropagation();
        }
        onGoToWishlist(e) {
          O.onGoToWishlist(), e.preventDefault(), e.stopPropagation();
        }
        onAddToCart(e) {
          O.onAddToCart(this.props.appID, this.props.rank),
            e.preventDefault(),
            e.stopPropagation();
        }
        render() {
          const { appID: e, score: t, rank: a, width: i } = this.props,
            s =
              "https://steamcdn-a.akamaihd.net/steam/apps/" + e + "/header.jpg",
            n = O.getAppInfo()[e];
          if (!n) return l.a.createElement("div", null);
          const o = n.n,
            r =
              n.r > 0
                ? Object(_.g)("#Recommendation_ReleasedOn", Object(_.q)(n.r))
                : "";
          let c = [];
          if (n.t) {
            let t = 0;
            for (const a of n.t)
              if (
                (c.push(
                  l.a.createElement(
                    "div",
                    { key: `${e}_${a}`, className: h.Tag },
                    O.getTagName(a)
                  )
                ),
                t++,
                5 == t)
              )
                break;
          }
          const u = parseInt(h.smallentrywidth),
            g = parseInt(h.optionswrapwidth);
          let E = 112,
            b = !0;
          i < u ? ((E = 66), (b = !1)) : i < g && ((E = 87), (b = !1));
          const v = b && this.state.hovered,
            S = Math.min(Number(t) / 10, 1e3);
          Math.max(1, t);
          let y = !1,
            R = !1,
            f = !0,
            A = "",
            I = "",
            N = "",
            C = "";
          let L = "",
            D = !1,
            j = !0;
          if (v) {
            const e = O.getDetails(this.props.appID);
            e &&
              ((y = !0),
              (R = e.discount_pct > 0),
              (f = "0" == e.discount_price),
              "probably" ==
              document
                .createElement("video")
                .canPlayType('video/webm; codecs="vp8, vorbis"')
                ? O.shouldUseMicrotrailers() && e.microtrailer_webm
                  ? ((L = e.microtrailer_webm), (D = !0), (j = !1))
                  : (L = e.video_webm)
                : O.shouldUseMicrotrailers() && e.microtrailer_mp4
                ? ((L = e.microtrailer_mp4), (D = !0), (j = !1))
                : (L = e.video_mp4),
              (A = `-${e.discount_pct}%`),
              (I = e.base_price),
              (N = f ? Object(_.g)("#FreeToPlay") : e.discount_price),
              (C = e.description));
          }
          const P = L && L.length > 0;
          return l.a.createElement(
            d.a,
            { appID: e, snr: T.LINK_PARAM },
            l.a.createElement(
              "a",
              {
                href: `${T.BASE_URL}app/${e}?snr=${T.LINK_PARAM}`,
                onClick: () => O.onAppClicked(e, a),
                className: Object(p.a)(
                  h.RecommendationEntry,
                  "ds_flagged",
                  "ds_wishlist",
                  a > 30 && h.Hidden,
                  v && h.Hovered
                ),
                style: { top: Math.min(31, a) * E },
                onMouseEnter: this.OnHover,
                onMouseLeave: this.OnUnHover,
              },
              l.a.createElement(
                "div",
                { className: h.TopEntrySection },
                l.a.createElement(
                  "div",
                  { className: h.LeftSection },
                  l.a.createElement("img", {
                    className: Object(p.a)(h.Logo, (!P || !v) && h.Revealed),
                    src: s,
                  }),
                  l.a.createElement("video", {
                    ref: this.m_videoRef,
                    className: Object(p.a)(
                      "highlight_player_item",
                      "highlight_movie",
                      h.Video,
                      P && v && h.Revealed
                    ),
                    playsInline: !0,
                    autoPlay: !0,
                    muted: j && O.shouldMute(),
                    src: L,
                    loop: D,
                  }),
                  j &&
                    l.a.createElement(
                      "div",
                      {
                        className: Object(p.a)(h.UnMute, P && h.Revealed),
                        onClick: (e) => this.onMuteToggle(e),
                      },
                      l.a.createElement(m.Cb, { muted: O.shouldMute() })
                    ),
                  this.state.wishlisted &&
                    l.a.createElement(
                      "div",
                      {
                        className: Object(p.a)(
                          "ds_flag",
                          "ds_wishlist_flag",
                          h.WishlistFlag
                        ),
                      },
                      Object(_.g)("#Recommendation_OnWishlist") + "  "
                    )
                ),
                l.a.createElement(
                  "div",
                  { className: h.RightSection },
                  l.a.createElement("div", { className: h.Name }, o),
                  l.a.createElement(
                    "div",
                    { className: h.CenterSection },
                    l.a.createElement(
                      "div",
                      {
                        className: Object(p.a)(
                          h.CenterOption,
                          h.CenterDefault,
                          v && h.Hidden
                        ),
                      },
                      l.a.createElement("div", { className: h.Released }, r),
                      l.a.createElement(
                        "div",
                        { className: h.BarContainer },
                        l.a.createElement("div", {
                          className: h.Bar,
                          style: { width: `${S}%` },
                        })
                      ),
                      l.a.createElement("div", { className: h.Tags }, c)
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: Object(p.a)(
                          h.CenterOption,
                          h.CenterHovered,
                          !v && h.Hidden
                        ),
                      },
                      C
                    )
                  ),
                  y &&
                    l.a.createElement(
                      "div",
                      { className: h.BottomEntrySection },
                      l.a.createElement(
                        "div",
                        {
                          className: Object(p.a)(
                            "game_purchase_action",
                            h.PurchaseSection
                          ),
                        },
                        l.a.createElement(
                          "div",
                          {
                            className: Object(p.a)(
                              "game_purchase_action_bg",
                              h.PurchaseBG
                            ),
                          },
                          R &&
                            l.a.createElement(
                              "div",
                              {
                                className:
                                  "discount_block game_purchase_discount",
                              },
                              l.a.createElement(
                                "div",
                                { className: "discount_pct" },
                                A
                              ),
                              l.a.createElement(
                                "div",
                                { className: "discount_prices" },
                                l.a.createElement(
                                  "div",
                                  { className: "discount_original_price" },
                                  I
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "discount_final_price" },
                                  N
                                )
                              )
                            ),
                          !R &&
                            l.a.createElement(
                              "div",
                              {
                                className: Object(p.a)(
                                  "game_purchase_price",
                                  "price",
                                  h.Price
                                ),
                              },
                              N
                            ),
                          !f &&
                            l.a.createElement(
                              "div",
                              {
                                className: "btn_addtocart",
                                onClick: (e) => this.onAddToCart(e),
                              },
                              l.a.createElement(
                                "span",
                                {
                                  className:
                                    "btnv6_green_white_innerfade btn_medium",
                                },
                                l.a.createElement(
                                  "span",
                                  null,
                                  Object(_.g)("#btn_add_to_cart")
                                )
                              )
                            )
                        )
                      ),
                      !this.state.wishlisted &&
                        !f &&
                        l.a.createElement(
                          "div",
                          {
                            id: "add_to_wishlist_area",
                            className: h.WishlistSection,
                            onClick: (e) => this.onAddToWishlist(e),
                          },
                          l.a.createElement(
                            "div",
                            { className: "btnv6_blue_hoverfade btn_medium" },
                            l.a.createElement(
                              "span",
                              null,
                              Object(_.g)("#wishlist_add_to_wishlist")
                            )
                          )
                        ),
                      this.state.wishlisted &&
                        !f &&
                        l.a.createElement(
                          "div",
                          {
                            className: Object(p.a)(
                              "btnv6_blue_hoverfade btn_medium",
                              "queue_btn_active",
                              h.Wishlisted,
                              h.WishlistSection
                            ),
                            "data-tooltip-text": Object(_.g)(
                              "#OnWishlistTooltip"
                            ),
                            onClick: (e) => this.onGoToWishlist(e),
                          },
                          l.a.createElement(
                            "span",
                            null,
                            l.a.createElement("img", {
                              src: `${T.IMG_URL_BASE}/v6/ico/ico_selected.png`,
                            }),
                            "  " + Object(_.g)("#OnWishlist")
                          )
                        )
                    )
                )
              )
            )
          );
        }
      };
      Object(s.b)([u.b], P.prototype, "OnHover", null),
        Object(s.b)([u.b], P.prototype, "OnUnHover", null),
        Object(s.b)([u.b], P.prototype, "onMuteToggle", null),
        Object(s.b)([u.b], P.prototype, "onAddToWishlist", null),
        Object(s.b)([u.b], P.prototype, "onGoToWishlist", null),
        Object(s.b)([u.b], P.prototype, "onAddToCart", null),
        (P = Object(s.b)([o.a], P));
      let U = class extends l.a.Component {
        constructor(e) {
          super(e), (this.state = { sortedRecommendedApps: [] });
        }
        render() {
          const e = O.m_fRecencyValue * (T.NUM_RECENCY_STEPS - 1 - 0.001),
            t = Math.floor(e),
            a = t + 1,
            i = 1 - (e - t),
            s = 1 - i,
            n = O.m_fPopularityValue * (T.NUM_POPULARITY_STEPS - 1 - 0.001),
            o = Math.floor(n),
            r = o + 1,
            c = 1 - (n - o),
            d = 1 - c;
          let m = [];
          m.push({ index: o * T.NUM_RECENCY_STEPS + t, weight: c * i }),
            m.push({ index: r * T.NUM_RECENCY_STEPS + t, weight: d * i }),
            m.push({ index: o * T.NUM_RECENCY_STEPS + a, weight: c * s }),
            m.push({ index: r * T.NUM_RECENCY_STEPS + a, weight: d * s });
          let u = new Map(),
            g = 0;
          const E = O.getRecommendations(),
            b = O.getAppInfo();
          let v = [];
          if (E) {
            for (const e of m) {
              const t = E[e.index];
              if (((g = Math.max(g, t.score_scale)), t))
                for (let a = 0; a < t.app_ids.length; a++) {
                  const i = t.app_ids[a];
                  if (
                    !b[i] ||
                    b[i].o ||
                    b[i].i ||
                    b[i].ti ||
                    (b[i].w && O.m_bExcludeWishlisted)
                  )
                    continue;
                  const s =
                    (u.get(i) || 0) + t.scores[a] * e.weight * t.score_scale;
                  u.set(i, s);
                }
            }
            u.forEach((e, t) => u.set(t, e / g));
            let e = [];
            u.forEach((t, a) => e.push({ appid: a, score: t })),
              (e = e.filter(
                (e) => b[e.appid].t && O.doTagsPassFilter(b[e.appid].t)
              )),
              (e = e.filter(
                (e) => b[e.appid].t && !O.doTagsFailExclusion(b[e.appid].t)
              )),
              (e = e.filter((e) => e.score > 0));
            let t = e.sort((e, t) => t.score - e.score);
            if (t.length > 0) {
              t = t.slice(0, 30);
              let e = 0;
              for (let a of t) (a.rank = e), e++;
              for (const e of t)
                v.push(
                  l.a.createElement(P, {
                    key: e.appid,
                    appID: e.appid,
                    score: e.score,
                    rank: e.rank,
                    width: this.props.width,
                  })
                );
            } else
              v.push(
                l.a.createElement(
                  "div",
                  {
                    key: "no_recommedations_due_to_filter",
                    className: h.NoRecommendationsMessage,
                  },
                  Object(_.g)("#NoRecommendationsDueToFilter")
                )
              );
          } else
            v.push(
              l.a.createElement("div", {
                key: "recommendations_loading",
                className: h.RecommendationsLoading,
              })
            );
          return l.a.createElement(
            "div",
            { className: h.RecommendationList },
            l.a.createElement(
              "div",
              { className: h.Header },
              Object(_.g)("#Recommendations_Header")
            ),
            l.a.createElement(j, null),
            l.a.createElement(
              "div",
              {
                className: Object(p.a)(
                  h.List,
                  O.areResultsExpired() && h.Updating
                ),
              },
              v
            )
          );
        }
      };
      U = Object(s.b)([o.a], U);
      let w = class extends l.a.Component {
        constructor() {
          super(...arguments), (this.state = { width: window.innerWidth });
        }
        updateDimensions() {
          this.setState({ width: window.innerWidth });
        }
        componentDidMount() {
          window.addEventListener("resize", this.updateDimensions);
        }
        ShowLoginDialog() {
          Object(f.a)();
        }
        render() {
          return n.l.logged_in
            ? l.a.createElement(
                "div",
                {
                  className: h.App,
                  style: { height: 3840 + 26 * O.getTagHeight() },
                },
                l.a.createElement(
                  "div",
                  { className: h.Container },
                  l.a.createElement(
                    "div",
                    { className: h.TopSection },
                    l.a.createElement(
                      "div",
                      { className: h.Header },
                      Object(_.g)("#HeaderTitle")
                    ),
                    l.a.createElement(
                      "div",
                      { className: h.Body },
                      Object(_.g)("#HeaderBody1")
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: h.BottomSection },
                    l.a.createElement(N, { accountID: n.l.accountid }),
                    l.a.createElement("div", { className: h.VerticalBar }),
                    l.a.createElement(U, { width: this.state.width })
                  )
                )
              )
            : l.a.createElement(
                "div",
                { className: h.App },
                l.a.createElement(
                  "div",
                  { className: h.Login },
                  l.a.createElement(
                    "div",
                    { className: h.Text },
                    Object(_.g)("#LoginText")
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className: Object(p.a)(
                        "btn_green_white_innerfade",
                        " btn_medium"
                      ),
                      onClick: this.ShowLoginDialog,
                    },
                    l.a.createElement("span", null, Object(_.g)("#LoginButton"))
                  )
                )
              );
        }
      };
      Object(s.b)([u.b], w.prototype, "updateDimensions", null),
        Object(s.b)([u.b], w.prototype, "ShowLoginDialog", null),
        (w = Object(s.b)([o.a], w));
      t.default = w;
    },
    Asqs: function (e, t, a) {
      e.exports = {
        smallentrywidth: "600px",
        optionswrapwidth: "777px",
        App: "interactiverecommender_App_u3SD8",
        Login: "interactiverecommender_Login_3wfCR",
        Text: "interactiverecommender_Text_1PXPv",
        Container: "interactiverecommender_Container_2g8SX",
        TopSection: "interactiverecommender_TopSection_fR3i6",
        Header: "interactiverecommender_Header_2CDNs",
        Body: "interactiverecommender_Body_174-d",
        Spacer: "interactiverecommender_Spacer_1f2cz",
        BottomSection: "interactiverecommender_BottomSection_3A60h",
        VerticalBar: "interactiverecommender_VerticalBar_2qL2p",
        PlaytimeList: "interactiverecommender_PlaytimeList_3qtYu",
        Loading: "interactiverecommender_Loading_3pjYy",
        IdentityBlock: "interactiverecommender_IdentityBlock_qLWcn",
        Avatar: "interactiverecommender_Avatar_VmdbP",
        PersonalInfo: "interactiverecommender_PersonalInfo_2oJXF",
        Persona: "interactiverecommender_Persona_2vp7F",
        GameCount: "interactiverecommender_GameCount_1AIEP",
        TotalTime: "interactiverecommender_TotalTime_1tOWe",
        PlayedGame: "interactiverecommender_PlayedGame_sNb81",
        Ignored: "interactiverecommender_Ignored_30mws",
        PlaytimeInfo: "interactiverecommender_PlaytimeInfo_1UkGo",
        IgnoreToggle: "interactiverecommender_IgnoreToggle_3hXvg",
        Logo: "interactiverecommender_Logo_26qua",
        HoursPlayed: "interactiverecommender_HoursPlayed_3Ye_W",
        Title: "interactiverecommender_Title_Eucai",
        LastPlayed: "interactiverecommender_LastPlayed_1DwCl",
        UpdateSaveBlock: "interactiverecommender_UpdateSaveBlock_iaGmJ",
        UpdateButton: "interactiverecommender_UpdateButton_wcFtI",
        Enabled: "interactiverecommender_Enabled_3QyVu",
        RecommendationList: "interactiverecommender_RecommendationList_1krh3",
        List: "interactiverecommender_List_C6mYR",
        Updating: "interactiverecommender_Updating_1m954",
        NoRecommendationsMessage:
          "interactiverecommender_NoRecommendationsMessage_1Ps6j",
        RecommendationOptions:
          "interactiverecommender_RecommendationOptions_2F61j",
        Row: "interactiverecommender_Row_1sYIz",
        SecondRow: "interactiverecommender_SecondRow_K-rzA",
        OptionCheckbox: "interactiverecommender_OptionCheckbox_2Cb6n",
        Checkbox: "interactiverecommender_Checkbox_29uP5",
        WishlistCheckbox: "interactiverecommender_WishlistCheckbox_1cnxU",
        SaveUserSettingsButton:
          "interactiverecommender_SaveUserSettingsButton_1VRgd",
        OptionSlider: "interactiverecommender_OptionSlider_26ek6",
        Labels: "interactiverecommender_Labels_22UxF",
        Min: "interactiverecommender_Min_1uiM2",
        Max: "interactiverecommender_Max_17wCM",
        OptionalLabel: "interactiverecommender_OptionalLabel_1JIe5",
        OptionDropdown: "interactiverecommender_OptionDropdown_1dKx5",
        Label: "interactiverecommender_Label_XPFnC",
        OptionTagList: "interactiverecommender_OptionTagList_uNxeG",
        SelectedTag: "interactiverecommender_SelectedTag_2uInW",
        Close: "interactiverecommender_Close_2bZrr",
        RecommendationEntry: "interactiverecommender_RecommendationEntry_3opuX",
        BottomEntrySection: "interactiverecommender_BottomEntrySection_2U08C",
        WishlistSection: "interactiverecommender_WishlistSection_dS7Rz",
        Hidden: "interactiverecommender_Hidden_2teee",
        TopEntrySection: "interactiverecommender_TopEntrySection_1IvHp",
        LeftSection: "interactiverecommender_LeftSection_1shxg",
        Video: "interactiverecommender_Video_3oNv9",
        Revealed: "interactiverecommender_Revealed_3aiFy",
        UnMute: "interactiverecommender_UnMute_21t3_",
        RightSection: "interactiverecommender_RightSection_27p3s",
        CenterSection: "interactiverecommender_CenterSection_M9CWJ",
        CenterOption: "interactiverecommender_CenterOption_3mXMY",
        Name: "interactiverecommender_Name_2FQXD",
        Released: "interactiverecommender_Released_3EvdK",
        BarContainer: "interactiverecommender_BarContainer_3qWin",
        Bar: "interactiverecommender_Bar_16q7Q",
        Score: "interactiverecommender_Score_17yr_",
        Tags: "interactiverecommender_Tags_3KlI0",
        Tag: "interactiverecommender_Tag_1rNtz",
        Hovered: "interactiverecommender_Hovered_3b9wG",
        Wishlisted: "interactiverecommender_Wishlisted_2uh0O",
        PurchaseSection: "interactiverecommender_PurchaseSection_mjTZM",
        PurchaseBG: "interactiverecommender_PurchaseBG_2UHKw",
        Price: "interactiverecommender_Price_18mm0",
        WishlistFlag: "interactiverecommender_WishlistFlag_2TuuQ",
        SelectionBox: "interactiverecommender_SelectionBox_2W7pR",
        SuggestionInput: "interactiverecommender_SuggestionInput_3OdNp",
        SuggestionContainerOpen:
          "interactiverecommender_SuggestionContainerOpen_2NTkL",
        SuggestionsList: "interactiverecommender_SuggestionsList_2zgal",
        OptionSuggestion: "interactiverecommender_OptionSuggestion_3VKY5",
      };
    },
    i5oW: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var i = a("mrSG"),
        s = a("q1tI"),
        n = a.n(s),
        o = a("2KLf"),
        r = a("uuth"),
        c = a("hCpY");
      class l extends n.a.Component {
        OnEnter() {
          o.a.AddImpression(this.props.appID, this.props.snr);
        }
        render() {
          return n.a.createElement(
            r.a,
            { onEnter: this.OnEnter },
            this.props.children
          );
        }
      }
      Object(i.b)([c.b], l.prototype, "OnEnter", null);
    },
  },
]);
