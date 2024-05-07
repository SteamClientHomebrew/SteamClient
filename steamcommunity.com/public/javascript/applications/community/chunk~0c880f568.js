/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6680],
  {
    45944: (e, t, n) => {
      n.d(t, { Q8: () => A, md: () => g });
      var i = n(85556),
        o = n(54842),
        s = n(77936),
        a = n(79545),
        p = n(22520),
        r = n(37563);
      class c {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = o.LO.map()),
            (this.m_fetching = null),
            (this.m_appid = e);
        }
        GetAppID() {
          return this.m_appid;
        }
        GetTokenList(e) {
          return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
        }
        Localize(e, t) {
          let n = r.De.LANGUAGE;
          return h(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let n = r.De.LANGUAGE;
          return l(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
      }
      function h(e, t, n, i, o) {
        if (!e.startsWith("#"))
          return (
            console.log(
              "Token doesn't start with #:",
              e,
              "appid",
              i,
              "tokens",
              t,
            ),
            ""
          );
        let s = e;
        e = e.toLowerCase();
        let a = "";
        if (
          (t && t.has(e) && (a = t.get(e)),
          !a && n && n.has(e) && (a = n.get(e)),
          a)
        )
          a = l(a, t, n, i, o);
        else if (
          ((t || n) &&
            console.log(
              "No loc found for appid",
              i,
              s,
              "Tokens:",
              t,
              "Fallback:",
              n,
            ),
          t && 1 != r.De.EUNIVERSE)
        )
          return e;
        return a;
      }
      function l(e, t, n, i, o) {
        let s = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (s)
          for (let a of s) {
            let s = h(m(a.slice(1, -1), o), t, n, i, o);
            if (!s) return "";
            e = e.replace(a, s);
          }
        return (e = m(e, o));
      }
      function m(e, t) {
        let n = e.match(/%[A-Za-z0-9_:]+%/g);
        if (n)
          for (let i of n) {
            let n = i.slice(1, -1).toLowerCase(),
              o = t.get(n);
            null == o
              ? console.log("No rich presence found for", n)
              : (e = e.replace(i, o));
          }
        return e;
      }
      var f = n(18015),
        u = n(62210),
        d = n(45492);
      class g {
        constructor() {
          (this.m_mapAppInfo = o.LO.map()),
            (this.m_mapRichPresenceLoc = o.LO.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new d.pB()),
            (0, o.rC)(this);
        }
        Init(e) {
          this.m_CMInterface = e;
        }
        BHavePendingAppInfoRequests() {
          return (
            this.m_setPendingAppInfo.size > 0 ||
            this.m_cAppInfoRequestsInFlight > 0
          );
        }
        get CMInterface() {
          return this.m_CMInterface;
        }
        RegisterCallbackOnLoad(e) {
          if (!this.BHavePendingAppInfoRequests())
            return (
              (0, u.X)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
              void e()
            );
          this.m_fnCallbackOnAppInfoLoaded.Register(e);
        }
        IsLoadingAppID(e) {
          return this.m_setPendingAppInfo.has(e);
        }
        GetAppInfo(e) {
          if (
            ((0, u.X)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init",
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new p.Am(e);
            this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
          }
          return this.m_mapAppInfo.get(e);
        }
        QueueAppInfoRequest(e) {
          return e
            ? (this.m_setPendingAppInfo.size ||
                ((this.m_PendingAppInfoPromise = new Promise(
                  (e) => (this.m_PendingAppInfoResolve = e),
                )),
                window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
              this.m_setPendingAppInfo.add(e),
              this.m_PendingAppInfoPromise)
            : Promise.resolve();
        }
        FlushPendingAppInfo() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const e = this.m_PendingAppInfoResolve,
              t = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              yield this.LoadAppInfoBatch(t),
              null == e || e();
          });
        }
        LoadAppInfoBatch(e) {
          var t;
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let n = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (n.length) {
              console.log("Loading batch of App Info from Steam: ", n),
                yield null === (t = this.m_CMInterface) || void 0 === t
                  ? void 0
                  : t.WaitUntilLoggedOn();
              let e = a.gA.Init(f.Fi);
              e.Body().set_language((0, s.jM)(r.De.LANGUAGE));
              const i = 50;
              for (; n.length > 0; ) {
                const t = Math.min(i, n.length),
                  o = n.slice(0, t);
                (n = n.slice(t)), e.Body().set_appids(o);
                const s = yield f.AE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e,
                );
                1 == s.GetEResult()
                  ? this.OnGetAppsResponse(s)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${s.GetEResult()}, AppIDs:`,
                      o,
                    );
              }
            }
            0 == --this.m_cAppInfoRequestsInFlight &&
              0 == this.m_setPendingAppInfo.size &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          });
        }
        OnGetAppsResponse(e) {
          let t = [];
          for (let n of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(n.appid());
            (0, u.X)(
              e,
              `Got AppInfo response for unrequested AppID: ${n.appid()}`,
            ),
              e &&
                ((e = new p.Am(n.appid())),
                e.DeserializeFromMessage(n),
                this.m_mapAppInfo.set(n.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new p.Am(t.appid());
            e.DeserializeFromAppOverview(t),
              e.is_initialized && this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let n = this.m_mapAppInfo.get(e);
                n
                  ? n.is_valid || (t = !0)
                  : ((n = new p.Am(e)),
                    this.m_mapAppInfo.set(e, n),
                    this.QueueAppInfoRequest(e),
                    (t = !0));
              }),
              t && void 0 !== this.m_PendingAppInfoPromise
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          });
        }
        SetCacheStorage(e) {
          this.m_CacheStorage = e;
        }
        GetCacheKeyForAppID(e) {
          return "APPINFO_" + e;
        }
        LoadAppInfoBatchFromLocalCache(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              n = (e) =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  var n;
                  const i = yield null === (n = this.m_CacheStorage) ||
                  void 0 === n
                    ? void 0
                    : n.GetObject(this.GetCacheKeyForAppID(e));
                  if (!i) return e;
                  let o = this.m_mapAppInfo.get(e);
                  return (
                    (0, u.X)(
                      o,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                    ),
                    o
                      ? ((o = new p.Am(e)),
                        o.DeserializeFromCacheObject(i),
                        o.is_initialized
                          ? (this.m_mapAppInfo.set(e, o),
                            o.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              i,
                            ),
                            e))
                      : e
                  );
                });
            let o = e.map((e) => n(e));
            return (yield Promise.all(o)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                e.map((e) => e.appid),
              );
              for (const t of e) {
                const e = t.SerializeToCacheObject();
                e &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(t.appid),
                    e,
                  );
              }
            }
          });
        }
        Localize(e, t, n) {
          const i = this.GetRichPresenceLoc(e);
          return i
            ? i.Localize(t, n)
            : 1 != r.De.EUNIVERSE
              ? (console.log(
                  `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
                ),
                t)
              : "";
        }
        GetRichPresenceLoc(e) {
          if (this.m_mapRichPresenceLoc.has(e.toString())) {
            let t = this.m_mapRichPresenceLoc.get(e.toString());
            return (
              t.m_nLastUpdated + 6e4 * p.x3 < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new c(e);
          return (
            this.m_mapRichPresenceLoc.set(e.toString(), t),
            this.QueueRichPresenceLocRequest(t),
            t
          );
        }
        GetRichPresenceLocAsync(e) {
          let t = this.GetRichPresenceLoc(e);
          return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
        }
        OnRichPresenceLocUpdate(e, t) {
          e.m_nLastUpdated = Date.now();
          for (let n of t) {
            let t = n.language(),
              i = e.m_mapLanguages.get(t);
            i
              ? i.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (i = e.m_mapLanguages.get(t)));
            for (let e of n.tokens())
              null == i || i.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = a.gA.Init(f.tj);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(r.De.LANGUAGE),
                    f.AE.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t,
                    )
                  );
                })
                .then(
                  (t) => (
                    (e.m_fetching = null),
                    1 != t.GetEResult()
                      ? Promise.reject()
                      : (this.OnRichPresenceLocUpdate(
                          e,
                          t.Body().token_lists(),
                        ),
                        Promise.resolve(e))
                  ),
                )),
              e.m_fetching.catch(() => {
                e.m_fetching = null;
              })),
            e.m_fetching
          );
        }
      }
      (0, i.gn)([o.aD], g.prototype, "OnGetAppsResponse", null),
        (0, i.gn)([o.aD], g.prototype, "OnRichPresenceLocUpdate", null);
      const A = new g();
    },
    29480: (e, t, n) => {
      n.d(t, { T: () => a });
      var i = n(80751),
        o = n.n(i),
        s = n(47427);
      function a(e) {
        const t = s.useRef(o().CancelToken.source());
        return (
          s.useEffect(() => {
            const n = t.current;
            return () => n.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
  },
]);
