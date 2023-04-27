/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1614],
  {
    37664: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        BannerContainer: "deckverified_BannerContainer_2b4eh",
        BannerHeader: "deckverified_BannerHeader_1IgJ0",
        BannerContentDesktop: "deckverified_BannerContentDesktop_2qr1f",
        BannerContent: "deckverified_BannerContent_1B2KF",
        LearnMore: "deckverified_LearnMore_1Vhpn",
        DeveloperBlockLinkDesktop:
          "deckverified_DeveloperBlockLinkDesktop_3OZo0",
        CategoryIcon: "deckverified_CategoryIcon_2yDLe",
        LearnMoreCtn: "deckverified_LearnMoreCtn_EEiwn",
        LearnMorePC: "deckverified_LearnMorePC_3OSxY",
        DialogHeader: "deckverified_DialogHeader_1L5Or",
        DialogTitle: "deckverified_DialogTitle_2FOcP",
        AppTitleCategory: "deckverified_AppTitleCategory_2VgfB",
        CompatibilityDetailsStillLearning:
          "deckverified_CompatibilityDetailsStillLearning_1Ugyr",
        CompatibilityDetailsContainerDesktop:
          "deckverified_CompatibilityDetailsContainerDesktop_24aj-",
        CompatibilityDetailsContainer:
          "deckverified_CompatibilityDetailsContainer_1eAfS",
        CompatibilityDetailsInterior_NoScroll:
          "deckverified_CompatibilityDetailsInterior_NoScroll_2MFHa",
        CompatibilityDetailsInterior_Scroll:
          "deckverified_CompatibilityDetailsInterior_Scroll_3E4i9",
        CompatibilityDetailsRow: "deckverified_CompatibilityDetailsRow_i-kKr",
        CompatibilityDetailRatingSummary:
          "deckverified_CompatibilityDetailRatingSummary_1dRcO",
        Verified: "deckverified_Verified_2NlWs",
        Playable: "deckverified_Playable_3b8fs",
        Unsupported: "deckverified_Unsupported_34NkC",
        CompatibilityDetailRatingDescription:
          "deckverified_CompatibilityDetailRatingDescription__2HWJ",
        CompatibilityDetailsSeparator:
          "deckverified_CompatibilityDetailsSeparator_1GQvT",
        CompatibilityDetailsResultIcon:
          "deckverified_CompatibilityDetailsResultIcon_256fL",
        CompatabilityDetailsNoteContainer:
          "deckverified_CompatabilityDetailsNoteContainer_c1yG_",
        CompatibilityNotes: "deckverified_CompatibilityNotes_336YA",
        CompatibilityDetailsNoteRow:
          "deckverified_CompatibilityDetailsNoteRow_2Bejw",
        DeveloperBlogYButton: "deckverified_DeveloperBlogYButton_1pC8t",
        Divider: "deckverified_Divider_3Ewxr",
        DeveloperComments_Anchor: "deckverified_DeveloperComments_Anchor_2xqA7",
        DeveloperComments_Icon: "deckverified_DeveloperComments_Icon_2JTRY",
        DeveloperComments_LinkNoIcon:
          "deckverified_DeveloperComments_LinkNoIcon_2aB9H",
        DeveloperComments_LinkIcon:
          "deckverified_DeveloperComments_LinkIcon_1cm6k",
      };
    },
    70424: (e) => {
      e.exports = {
        Dark: "footericons_Dark_2SV_e",
        Background: "footericons_Background_I3P4e",
        Foreground: "footericons_Foreground_39K5g",
        Light: "footericons_Light_2e0Fq",
        Knockout: "footericons_Knockout_2Q-49",
        SizeSmall: "footericons_SizeSmall_3sify",
        SizeMedium: "footericons_SizeMedium_3-w0R",
        SizeLarge: "footericons_SizeLarge_3jE5H",
        ChordSummary: "footericons_ChordSummary_2sFpI",
      };
    },
    88735: (e, t, r) => {
      "use strict";
      r.d(t, { ck: () => i, sC: () => s });
      var l = r(89526),
        n = (r(82633), r(13806)),
        o = r(86701),
        a = r(55310),
        c = (r(31587), r(70983));
      function i() {
        const e = (0, c.id)();
        return c.De.ON_DECK && e;
      }
      const s = (e) => {
          const t = ((r = e.category), C[r] || o.z5E);
          var r;
          return l.createElement(
            "div",
            { className: (0, n.Z)(a.SteamDeckCompatInfo, e.className) },
            l.createElement(o.j7C, null),
            l.createElement(t, { className: a.SteamDeckCompatIcon })
          );
        },
        C = { 1: o.vyu, 2: o.KKY, 3: o.YVI, 0: o.z5E };
    },
    81084: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => l });
      r(54997);
      function l() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
    },
    2202: (e, t, r) => {
      "use strict";
      r.d(t, { FX: () => l });
      var l,
        n = r(33940),
        o = (r(89526), r(14258), r(60587)),
        a = (r(36178), r(43407), r(19038), r(23213), r(87256)),
        c = r(31621);
      function i(e) {
        switch (e) {
          case o.eV.OK:
            return l.A;
          case o.eV.CANCEL:
            return l.B;
          case o.eV.SECONDARY:
            return l.X;
          case o.eV.OPTIONS:
            return l.Y;
          case o.eV.DIR_LEFT:
            return l.Left;
          case o.eV.DIR_RIGHT:
            return l.Right;
          case o.eV.DIR_UP:
            return l.Up;
          case o.eV.DIR_DOWN:
            return l.Down;
          case o.eV.STEAM_GUIDE:
            return l.HomeMenu;
          case o.eV.STEAM_QUICK_MENU:
            return l.QuickMenu;
          case o.eV.SELECT:
            return l.Select;
          case o.eV.START:
            return l.Start;
          case o.eV.BUMPER_LEFT:
            return l.LeftBumper;
          case o.eV.BUMPER_RIGHT:
            return l.RightBumper;
          case o.eV.TRIGGER_LEFT:
            return l.LeftTrigger;
          case o.eV.TRIGGER_RIGHT:
            return l.RightTrigger;
          default:
            return null;
        }
      }
      !(function (e) {
        (e[(e.A = 0)] = "A"),
          (e[(e.B = 1)] = "B"),
          (e[(e.X = 2)] = "X"),
          (e[(e.Y = 3)] = "Y"),
          (e[(e.Left = 4)] = "Left"),
          (e[(e.Right = 5)] = "Right"),
          (e[(e.Up = 6)] = "Up"),
          (e[(e.Down = 7)] = "Down"),
          (e[(e.HomeMenu = 8)] = "HomeMenu"),
          (e[(e.QuickMenu = 9)] = "QuickMenu"),
          (e[(e.Select = 10)] = "Select"),
          (e[(e.Start = 11)] = "Start"),
          (e[(e.LeftBumper = 12)] = "LeftBumper"),
          (e[(e.RightBumper = 13)] = "RightBumper"),
          (e[(e.LeftTrigger = 14)] = "LeftTrigger"),
          (e[(e.RightTrigger = 15)] = "RightTrigger"),
          (e[(e.LeftStick = 16)] = "LeftStick"),
          (e[(e.LeftStickClick = 17)] = "LeftStickClick"),
          (e[(e.RightStick = 18)] = "RightStick"),
          (e[(e.RightStickClick = 19)] = "RightStickClick"),
          (e[(e.LeftTrackpad = 20)] = "LeftTrackpad"),
          (e[(e.LeftTrackpadClick = 21)] = "LeftTrackpadClick"),
          (e[(e.RightTrackpad = 22)] = "RightTrackpad"),
          (e[(e.RightTrackpadClick = 23)] = "RightTrackpadClick"),
          (e[(e.RearLeftUpper = 24)] = "RearLeftUpper"),
          (e[(e.RearLeftLower = 25)] = "RearLeftLower"),
          (e[(e.RearRightUpper = 26)] = "RearRightUpper"),
          (e[(e.RearRightLower = 27)] = "RearRightLower");
      })(l || (l = {}));
      class s {
        constructor() {
          (this.m_boundActions = new Map()),
            (this.m_defaultActions = new Map()),
            (this.m_actionSubscriptions = new Map()),
            (this.m_actionDescriptionChangedCallbackRegistrations = []);
        }
        InitContext(e) {
          return e.FocusChangedCallbacks.Register(this.OnFocusNavigationChanged)
            .Unregister;
        }
        BFromActiveNavTree(e, t) {
          let r = null == t ? void 0 : t.Tree;
          return (
            r || (r = null == e ? void 0 : e.Tree),
            r && r.Controller.IsActiveFocusNavTree(r)
          );
        }
        OnFocusNavigationChanged(e, t, r) {
          if (this.BFromActiveNavTree(t, r))
            if (
              (this.m_actionDescriptionChangedCallbackRegistrations.forEach(
                (e) => e.Unregister()
              ),
              (this.m_actionDescriptionChangedCallbackRegistrations = []),
              r)
            ) {
              const e = () => {
                var e;
                return this.SetActionDescriptionsFromMap(
                  null !== (e = r.GetActiveActionDescriptions()) && void 0 !== e
                    ? e
                    : {}
                );
              };
              e();
              for (let t = r; null != t; t = t.Parent)
                this.m_actionDescriptionChangedCallbackRegistrations.push(
                  t.ActionDescriptionChangedCallbackList.Register(() => e())
                );
            } else this.SetActionDescriptionsFromMap({ [o.eV.OK]: null });
        }
        GetActionDescription(e) {
          let t;
          return (
            this.m_boundActions.has(e)
              ? (t = this.m_boundActions.get(e))
              : this.m_defaultActions.has(e) &&
                (t = this.m_defaultActions.get(e)),
            s.Log("GetActionDescription", t),
            t
          );
        }
        NotifyUpdate(e) {
          if (this.m_actionSubscriptions.has(e)) {
            const t = this.GetActionDescription(e);
            this.m_actionSubscriptions.get(e).forEach((e) => e(t));
          }
        }
        NotifyAll() {
          Array.from(this.m_actionSubscriptions.keys()).forEach((e) => {
            this.NotifyUpdate(e);
          });
        }
        IsDefaultAction(e) {
          return this.GetActionDescription(e) === this.m_defaultActions.get(e);
        }
        SetDefaultAction(e, t) {
          void 0 === t
            ? this.m_defaultActions.delete(e)
            : this.m_defaultActions.set(e, t),
            this.m_boundActions.has(e) || this.NotifyUpdate(e);
        }
        ClearActions() {
          s.Log("ClearActionDescriptions"),
            this.m_boundActions.clear(),
            this.NotifyAll();
        }
        SetActionsFromMap(e) {
          const t = Array.from(this.m_boundActions.keys());
          for (let r of t) e[r] || this.SetAction(r, void 0);
          for (let t in e) {
            const r = parseInt(t);
            this.SetAction(r, e[r]);
          }
        }
        SetActionDescriptionsFromMap(e) {
          const t = {};
          for (const r in e) {
            const l = parseInt(r);
            t[i(l)] = e[l];
          }
          this.SetActionsFromMap(t);
        }
        SetAction(e, t) {
          if ((s.Log("SetActionDescription", e, t), void 0 === t)) {
            if (!this.m_boundActions.has(e)) return;
            this.m_boundActions.delete(e);
          } else {
            if (this.m_boundActions.get(e) === t) return;
            this.m_boundActions.set(e, t);
          }
          this.NotifyUpdate(e);
        }
        SubscribeToActionFunction(e, t) {
          this.m_actionSubscriptions.has(e) ||
            this.m_actionSubscriptions.set(e, []),
            this.m_actionSubscriptions.get(e).push(t),
            this.m_boundActions.has(e)
              ? t(this.m_boundActions.get(e))
              : this.m_defaultActions.has(e) && t(this.m_defaultActions.get(e));
          return () => {
            const r = this.m_actionSubscriptions.get(e),
              l = r.indexOf(t);
            l >= 0
              ? r.splice(l, 1)
              : console.error(
                  "Unsubscribing an action that was already unsubscribed"
                );
          };
        }
      }
      (s.Log = new a.s("ActionDescription").Debug),
        (0, n.gn)([c.ak], s.prototype, "OnFocusNavigationChanged", null),
        (0, n.gn)([c.ak], s.prototype, "SetActionDescriptionsFromMap", null);
    },
    10260: (e, t, r) => {
      "use strict";
      r.d(t, { Rd: () => O, _R: () => j, $g: () => F, Ws: () => S });
      var l = r(89526),
        n = (r(49969), r(49194)),
        o = r(49920),
        a = r(23907),
        c = (r(14258), r(173)),
        i = (r(84042), r(88735)),
        s = r(81084),
        C = (r(82633), r(45878));
      r(19320);
      C.Message;
      r(82702), r(54997);
      var m = r(33940),
        u = r(52868),
        d = r.n(u),
        p = (r(6960), r(96158), r(47330)),
        g = r(23213),
        f = r(31621),
        H = r(70983);
      class v {
        constructor() {
          if (
            ((this.m_mapAppResults = new Map()),
            (this.m_mapAppCallbackList = new Map()),
            (this.m_mapAppResultsPromises = new Map()),
            document.getElementById("application_config"))
          ) {
            let e = (0, H.kQ)("deckcompatibility", "application_config");
            v.ValidateCompatabilityResult(e) &&
              (this.AddCompatabilityResult(e),
              "dev" == H.De.WEB_UNIVERSE &&
                console.log(
                  "CDeckCompatibilityDetailsStore compatability loaded: ",
                  e
                ));
          }
        }
        GetCompatabilityResultForApp(e) {
          return this.m_mapAppResults.get(e);
        }
        BHasCompatabilityResultForApp(e) {
          return this.m_mapAppResults.has(e);
        }
        GetCallbackForAppList(e) {
          return (
            this.m_mapAppCallbackList.has(e) ||
              this.m_mapAppCallbackList.set(e, new g.pB()),
            this.m_mapAppCallbackList.get(e)
          );
        }
        AddCompatabilityResult(e) {
          this.m_mapAppResults.set(e.appid, e),
            this.GetCallbackForAppList(e.appid).Dispatch(e);
        }
        LoadAppCompabitilityResult(e) {
          return (0, m.mG)(this, void 0, void 0, function* () {
            return (
              !!this.m_mapAppResults.has(e) ||
              (this.m_mapAppResultsPromises.has(e) ||
                this.m_mapAppResultsPromises.set(
                  e,
                  this.InternalLoadAppCompatability(e)
                ),
              this.m_mapAppResultsPromises.get(e))
            );
          });
        }
        InternalLoadAppCompatability(e) {
          var t, r;
          return (0, m.mG)(this, void 0, void 0, function* () {
            let l = null;
            try {
              const n = { nAppID: e, l: H.De.LANGUAGE, cc: H.De.COUNTRY };
              let o =
                H.De.STORE_BASE_URL +
                "saleaction/ajaxgetdeckappcompatibilityreport";
              const a = yield d().get(o, { params: n, withCredentials: !0 });
              if (
                200 == (null == a ? void 0 : a.status) &&
                1 ==
                  (null === (t = a.data) || void 0 === t
                    ? void 0
                    : t.success) &&
                (null === (r = a.data) || void 0 === r ? void 0 : r.results)
              )
                return this.AddCompatabilityResult(a.data.results), !0;
              l = (0, p.l)(a);
            } catch (e) {
              l = (0, p.l)(e);
            }
            return (
              console.error(
                "CDeckVerifiedDetailsStore.InternalLoadAppCompatability failed: " +
                  (null == l ? void 0 : l.strErrorMsg),
                l
              ),
              !1
            );
          });
        }
        static Get() {
          return (
            v.s_Singleton ||
              ((v.s_Singleton = new v()),
              ("dev" != H.De.WEB_UNIVERSE && "beta" != H.De.WEB_UNIVERSE) ||
                (window.g_DeckVerifiedDetailStores = v.s_Singleton)),
            v.s_Singleton
          );
        }
        static ValidateCompatabilityResult(e) {
          const t = e;
          return (
            t &&
            "number" == typeof t.appid &&
            "number" == typeof t.resolved_category &&
            "object" == typeof t.resolved_items
          );
        }
      }
      (0, m.gn)([f.ak], v.prototype, "LoadAppCompabitilityResult", null);
      r(55449);
      var w = r(57255),
        h = r(46085),
        L = r(86701),
        E = r(31587),
        V = r(37664),
        k = r.n(V),
        _ = r(76019),
        b = r(34357),
        M = r(2202);
      function N(e) {
        var t, r;
        const {
            results: n,
            appName: o,
            buttonProps: c,
            autoFocus: i,
            onOpenBlogPost: s,
          } = e,
          [C, m] = l.useState(!1),
          u = l.useCallback(() => C, [C]),
          d = l.useRef(),
          p = (0, H.id)();
        if (
          (l.useEffect(() => {
            var e, t;
            m(
              (null === (e = null == d ? void 0 : d.current) || void 0 === e
                ? void 0
                : e.scrollHeight) >
                (null === (t = null == d ? void 0 : d.current) || void 0 === t
                  ? void 0
                  : t.clientHeight)
            );
          }, []),
          !n)
        )
          return null;
        const g = () => {
          s ? s() : (window.location.href = n.steam_deck_blog_url);
        };
        let f = null != c ? c : {},
          v = null;
        n.steam_deck_blog_url &&
          ((f.onOptionsActionDescription = (0, E.Xx)(
            "#SteamDeckVerified_ViewDeveloperPost"
          )),
          (f.onOptionsButton = g),
          (v = l.createElement(y, { blogURL: n.steam_deck_blog_url })));
        const w =
          -1 !==
          (null === (t = n.resolved_items) || void 0 === t
            ? void 0
            : t.findIndex((e) => 1 == e.display_type));
        return (
          null === (r = n.resolved_items) || void 0 === r ? void 0 : r.length
        )
          ? l.createElement(
              a.s,
              Object.assign(
                {
                  className: p
                    ? k().CompatibilityDetailsContainer
                    : k().CompatibilityDetailsContainerDesktop,
                },
                f
              ),
              l.createElement(
                "div",
                null,
                l.createElement(
                  "div",
                  { className: k().DialogHeader },
                  l.createElement(
                    "div",
                    { className: k().DialogTitle },
                    (0, E.Xx)(
                      "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI"
                    )
                  ),
                  l.createElement(
                    "div",
                    { className: k().AppTitleCategory },
                    l.createElement(O, { category: n.resolved_category })
                  )
                ),
                l.createElement(j, {
                  category: n.resolved_category,
                  appName: o,
                })
              ),
              v,
              l.createElement("div", {
                className: k().CompatibilityDetailsSeparator,
              }),
              l.createElement(
                _.TN,
                {
                  ref: d,
                  className: u()
                    ? k().CompatibilityDetailsInterior_Scroll
                    : k().CompatibilityDetailsInterior_NoScroll,
                },
                l.createElement(
                  a.s,
                  {
                    autoFocus: i,
                    focusableIfNoChildren: i || u(),
                    noFocusRing: !0,
                  },
                  n.resolved_items
                    .filter((e) => 1 !== e.display_type)
                    .map((e) =>
                      l.createElement(
                        "div",
                        {
                          key: e.loc_token + e.display_type,
                          className: k().CompatibilityDetailsRow,
                        },
                        l.createElement(D, { displaytype: e.display_type }),
                        l.createElement("span", null, (0, E.Xx)(e.loc_token))
                      )
                    ),
                  w &&
                    l.createElement(
                      "div",
                      { className: k().CompatibilityNotes },
                      n.resolved_items
                        .filter((e) => 1 == e.display_type)
                        .map((e) =>
                          l.createElement(
                            "div",
                            {
                              key: e.loc_token + e.display_type,
                              className: k().CompatibilityDetailsNoteRow,
                            },
                            l.createElement(
                              "span",
                              null,
                              (0, E.Xx)(e.loc_token)
                            )
                          )
                        )
                    )
                )
              )
            )
          : l.createElement(
              a.s,
              Object.assign(
                {
                  autoFocus: i,
                  focusableIfNoChildren: i,
                  noFocusRing: !0,
                  className: k().CompatibilityDetailsContainer,
                },
                f
              ),
              l.createElement(
                "div",
                null,
                l.createElement(
                  "div",
                  { className: k().DialogHeader },
                  l.createElement(
                    "div",
                    { className: k().DialogTitle },
                    (0, E.Xx)(
                      "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI"
                    )
                  ),
                  l.createElement(
                    "div",
                    { className: k().AppTitleCategory },
                    l.createElement(O, { category: n.resolved_category })
                  )
                ),
                l.createElement(j, {
                  category: n.resolved_category,
                  appName: o,
                }),
                v
              )
            );
      }
      function y(e) {
        const { blogURL: t } = e,
          r = (0, H.id)();
        return t
          ? r
            ? l.createElement(
                "div",
                { className: k().CompatibilityDetailRatingSummary },
                (0, E.Xx)("#SteamDeckVerified_DescriptionHeader_DeveloperBlog"),
                l.createElement(
                  "div",
                  { className: k().DeveloperBlogYButton },
                  l.createElement(b.VC, { button: M.FX.Y, type: b.yV.Knockout })
                )
              )
            : l.createElement(
                "div",
                { className: k().CompatibilityDetailRatingSummary },
                (0, E.Xx)(
                  "#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop"
                ),
                l.createElement(
                  "a",
                  { href: t, className: k().DeveloperBlockLinkDesktop },
                  (0, E.Xx)("#SteamDeckVerified_ViewDeveloperPost")
                )
              )
          : null;
      }
      function D(e) {
        const { displaytype: t } = e;
        switch (t) {
          case 4:
            return l.createElement(L.YVI, {
              className: k().CompatibilityDetailsResultIcon,
            });
          case 3:
            return l.createElement(L.KKY, {
              className: k().CompatibilityDetailsResultIcon,
            });
          case 2:
            return l.createElement(L.vyu, {
              className: k().CompatibilityDetailsResultIcon,
            });
          case 0:
            return l.createElement(L.z5E, {
              className: k().CompatibilityDetailsResultIcon,
            });
          case 1:
            return (
              "dev" == H.De.WEB_UNIVERSE &&
                console.error(
                  "deck verified banner shouldn't try to display the information display type for appid"
                ),
              null
            );
        }
      }
      var R = r(8392),
        Z = r(13806),
        x = r(81052),
        I = r(32448),
        B = r(24868);
      function S(e) {
        var t;
        const { storeItem: r } = e;
        if (0 !== r.GetStoreItemType()) return null;
        const o =
          (null === (t = r.GetPlatforms()) || void 0 === t
            ? void 0
            : t.steam_deck_compat_category) || 0;
        return l.createElement(
          "div",
          { className: (0, Z.Z)(k().LearnMoreCtn, "LearnMoreCtn") },
          l.createElement(i.sC, { category: o }),
          l.createElement(
            n.IS,
            {
              onClick: (e) => {
                return (
                  (t = (0, x.RA)(e)),
                  (n = r.GetAppID()),
                  void (0, B.AM)(l.createElement(K, { nAppID: n }), t)
                );
                var t, n;
              },
            },
            l.createElement(
              "span",
              { className: k().LearnMorePC },
              (0, E.Xx)("#SteamDeckVerified_Store_CompatSectionHeader_Desktop")
            )
          )
        );
      }
      function F(e) {
        const { appID: t, results: r, appName: n } = e,
          o = H.id,
          a = o
            ? (0, E.Xx)(
                "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI"
              )
            : (0, E.Xx)("#SteamDeckVerified_Store_CompatSectionHeader_Desktop"),
          c = r.steam_deck_blog_url;
        return r
          ? l.createElement(
              "div",
              { className: k().BannerContainer },
              l.createElement("div", { className: k().BannerHeader }, a),
              l.createElement(
                "div",
                { className: o ? k().BannerContent : k().BannerContentDesktop },
                l.createElement(
                  "div",
                  null,
                  l.createElement(O, { category: r.resolved_category }),
                  l.createElement(X, { category: r.resolved_category })
                ),
                l.createElement(T, {
                  results: r,
                  learnMore: (0, E.Xx)(
                    "#SteamDeckVerified_Store_CompatSection_LearnMore"
                  ),
                  appName: n,
                }),
                c && l.createElement("div", { className: k().Divider }),
                c &&
                  l.createElement(A, {
                    url: r.steam_deck_blog_url,
                    containerClass: k().DeveloperComments_Anchor,
                    bIncludeIcon: !0,
                  })
              )
            )
          : ("dev" == H.De.WEB_UNIVERSE &&
              console.error(
                "deck verified banner received empty results for appid: " + t
              ),
            null);
      }
      function A(e) {
        const {
          url: t,
          containerClass: r,
          bIncludeIcon: o,
          onOpenBlogPost: a,
        } = e;
        return l.createElement(
          n.IS,
          {
            className: r,
            onClick: () => {
              a ? a() : (window.location.href = t);
            },
          },
          o &&
            l.createElement("div", { className: k().DeveloperComments_Icon }),
          l.createElement(
            "div",
            {
              className: o
                ? k().DeveloperComments_LinkIcon
                : k().DeveloperComments_LinkNoIcon,
            },
            (0, E.Xx)(
              "#SteamDeckVerified_Store_CompatSection_DeveloperComments"
            )
          )
        );
      }
      function K(e) {
        const { nAppID: t, closeModal: r } = e,
          n = (function (e) {
            const [t, r] = l.useState(v.Get().GetCompatabilityResultForApp(e));
            return (
              (0, f.Qg)(v.Get().GetCallbackForAppList(e), r),
              l.useEffect(() => {
                v.Get().BHasCompatabilityResultForApp(e) ||
                  v
                    .Get()
                    .LoadAppCompabitilityResult(e)
                    .then(() => r(v.Get().GetCompatabilityResultForApp(e)));
              }, [e]),
              t
            );
          })(t);
        return l.createElement(
          h.RG,
          {
            modalClassName: "DeckVerifiedModalDialog",
            closeModal: r,
            onCancel: r,
          },
          l.createElement(
            w.uT,
            null,
            l.createElement(
              a.s,
              { focusable: !1, "flow-children": "column" },
              Boolean(n)
                ? l.createElement(N, { results: n })
                : l.createElement(R.V, {
                    size: "medium",
                    position: "center",
                    string: (0, E.Xx)("#Loading"),
                  })
            )
          )
        );
      }
      function T(e) {
        const { results: t, learnMore: r, appName: i } = e,
          [C, m] = (0, l.useState)(null),
          [u, d] = (0, l.useState)(!1),
          p = l.useRef();
        l.useEffect(() => {
          if (!C) {
            let e = window.legacyWebFocusNavController;
            e || (e = new c.Z()), m(e);
          }
        }, [C]);
        let g = l.useCallback(
          (e) => {
            (0, s.X)() && (0, s.X)().AddEvent(1003), d(!0);
          },
          [d]
        );
        let f = {
          onOKButton: null,
          onOKActionDescription: null,
          onCancelActionDescription: (0, E.Xx)("#Button_Close"),
          onCancelButton: () => d(!1),
        };
        return l.createElement(
          "div",
          null,
          l.createElement(n.IS, { className: k().LearnMore, onClick: g }, r),
          l.createElement(
            h.On,
            {
              active: u,
              onDismiss: () => {
                d(!1);
              },
              modalClassName: "DeckVerifiedModalDialog",
            },
            l.createElement(
              n.Fe,
              {
                navID: "compat_details_dialog",
                NavigationManager: C,
                navTreeRef: p,
              },
              l.createElement(
                o.O,
                null,
                l.createElement(
                  a.s,
                  {
                    focusable: !1,
                    "flow-children": "column",
                    onGamepadDirection: (e) => !0,
                  },
                  l.createElement(N, {
                    results: t,
                    buttonProps: f,
                    appName: i,
                    autoFocus: !0,
                  })
                )
              )
            )
          )
        );
      }
      function O(e) {
        const { category: t } = e;
        switch (t) {
          case 3:
            return l.createElement(L.YVI, { className: k().CategoryIcon });
          case 2:
            return l.createElement(L.KKY, { className: k().CategoryIcon });
          case 1:
            return l.createElement(L.vyu, { className: k().CategoryIcon });
          case 0:
            return l.createElement(L.z5E, { className: k().CategoryIcon });
        }
      }
      function j(e) {
        const { category: t, appName: r, descriptionToken: n } = e;
        if (0 == t)
          return l.createElement(
            "div",
            { className: k().CompatibilityDetailRatingSummary },
            r
              ? (0, E.kQ)(
                  "#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName",
                  l.createElement("b", null, (0, I.HA)(r))
                )
              : (0, E.Xx)("#SteamDeckVerified_DescriptionHeader_Unknown")
          );
        let o = "",
          a = null;
        switch (t) {
          case 3:
            (o = "#SteamDeckVerified_DescriptionHeader_Verified"),
              (a = k().Verified);
            break;
          case 2:
            (o = "#SteamDeckVerified_DescriptionHeader_Playable"),
              (a = k().Playable);
            break;
          case 1:
            (o = "#SteamDeckVerified_DescriptionHeader_Unsupported"),
              (a = k().Unsupported);
        }
        const c = l.createElement("span", { className: a }, (0, E.Xx)(U(t))),
          i = l.createElement(
            "span",
            { className: k().CompatibilityDetailRatingSummary },
            (0, E.Xx)(n || o)
          ),
          s = r
            ? (0, E.kQ)(
                "#SteamDeckVerified_DescriptionHeader_WithAppName",
                l.createElement("b", null, (0, I.HA)(r)),
                c,
                i
              )
            : (0, E.kQ)("#SteamDeckVerified_DescriptionHeader", c, i);
        return l.createElement(
          "div",
          { className: k().CompatibilityDetailRatingSummary },
          s
        );
      }
      function X(e) {
        const { category: t } = e;
        return l.createElement(
          "span",
          { className: k().CompatibilityDetailRatingDescription },
          (0, E.Xx)(U(t))
        );
      }
      function U(e) {
        switch (e) {
          case 3:
            return "#SteamDeckVerified_Category_Verified";
          case 2:
            return "#SteamDeckVerified_Category_Playable";
          case 1:
            return "#SteamDeckVerified_Category_Unsupported";
          default:
            return "#SteamDeckVerified_Category_Unknown";
        }
      }
    },
    34357: (e, t, r) => {
      "use strict";
      r.d(t, { VC: () => d, iM: () => n, yV: () => l });
      var l,
        n,
        o = r(33940),
        a = r(89526),
        c = r(2202),
        i = r(70424),
        s = r.n(i),
        C = r(13806);
      function m(e) {
        switch (e) {
          case n.Small:
            return s().SizeSmall;
          case n.Medium:
            return s().SizeMedium;
          case n.Large:
            return s().SizeLarge;
          default:
            return s().SizeMedium;
        }
      }
      function u(e) {
        switch (e) {
          case l.Knockout:
            return s().Knockout;
          case l.Light:
            return s().Light;
          case l.Dark:
            return s().Dark;
          default:
            return s().Light;
        }
      }
      function d(e) {
        const t = (0, C.Z)(
            null != e.size ? m(e.size) : m(n.Medium),
            null != e.type ? u(e.type) : u(l.Light),
            e.additionalClassName
          ),
          r = e.type == l.Knockout;
        switch (e.button) {
          case c.FX.A:
            return a.createElement(p, { bIsKnockout: r, className: t });
          case c.FX.B:
            return a.createElement(g, { bIsKnockout: r, className: t });
          case c.FX.X:
            return a.createElement(f, { bIsKnockout: r, className: t });
          case c.FX.Y:
            return a.createElement(H, { bIsKnockout: r, className: t });
          case c.FX.Left:
            return a.createElement(h, { bIsKnockout: r, className: t });
          case c.FX.Right:
            return a.createElement(L, { bIsKnockout: r, className: t });
          case c.FX.Up:
            return a.createElement(v, { bIsKnockout: r, className: t });
          case c.FX.Down:
            return a.createElement(w, { bIsKnockout: r, className: t });
          case c.FX.HomeMenu:
            return a.createElement(E, { bIsKnockout: r, className: t });
          case c.FX.QuickMenu:
            return a.createElement(V, { bIsKnockout: r, className: t });
          case c.FX.Select:
            return a.createElement(k, { bIsKnockout: r, className: t });
          case c.FX.Start:
            return a.createElement(_, { bIsKnockout: r, className: t });
          case c.FX.LeftBumper:
            return a.createElement(b, { bIsKnockout: r, className: t });
          case c.FX.RightBumper:
            return a.createElement(M, { bIsKnockout: r, className: t });
          case c.FX.LeftTrigger:
            return a.createElement(N, { bIsKnockout: r, className: t });
          case c.FX.RightTrigger:
            return a.createElement(y, { bIsKnockout: r, className: t });
          case c.FX.LeftStick:
            return a.createElement(x, { bIsKnockout: r, className: t });
          case c.FX.RightStick:
            return a.createElement(Z, { bIsKnockout: r, className: t });
          case c.FX.LeftStickClick:
            return a.createElement(D, { bIsKnockout: r, className: t });
          case c.FX.RightStickClick:
            return a.createElement(R, { bIsKnockout: r, className: t });
          case c.FX.LeftTrackpad:
            return a.createElement(A, { bIsKnockout: r, className: t });
          case c.FX.RightTrackpad:
            return a.createElement(T, { bIsKnockout: r, className: t });
          case c.FX.LeftTrackpadClick:
            return a.createElement(K, { bIsKnockout: r, className: t });
          case c.FX.RightTrackpadClick:
            return a.createElement(O, { bIsKnockout: r, className: t });
          case c.FX.RearLeftUpper:
            return a.createElement(I, { bIsKnockout: r, className: t });
          case c.FX.RearRightUpper:
            return a.createElement(S, { bIsKnockout: r, className: t });
          case c.FX.RearLeftLower:
            return a.createElement(B, { bIsKnockout: r, className: t });
          case c.FX.RearRightLower:
            return a.createElement(F, { bIsKnockout: r, className: t });
          default:
            return a.createElement(j, { bIsKnockout: r, className: t });
        }
      }
      function p(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM21.2697 24H24.1317L19.2717 11.4H16.6077L11.8917 24H14.6457L15.4737 21.552H20.4057L21.2697 24ZM16.1937 19.446L17.9217 14.406L19.6857 19.446H16.1937Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("circle", {
                className: s().Background,
                cx: "18",
                cy: "18",
                r: "18",
                fill: "currentColor",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M24.1317 24H21.2697L20.4057 21.552H15.4737L14.6457 24H11.8917L16.6077 11.4H19.2717L24.1317 24ZM17.9217 14.406L16.1937 19.446H19.6857L17.9217 14.406Z",
              })
            );
      }
      function g(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.173 20.382C23.173 18.81 22.369 17.778 20.761 17.286C21.349 16.974 21.775 16.584 22.039 16.116C22.303 15.648 22.435 15.132 22.435 14.568C22.435 13.56 22.081 12.78 21.373 12.228C20.665 11.676 19.573 11.4 18.097 11.4H13.435V24H18.601C19.993 24 21.103 23.682 21.931 23.046C22.759 22.41 23.173 21.522 23.173 20.382ZM16.117 16.674V13.596H17.881C19.165 13.596 19.807 14.082 19.807 15.054C19.807 15.57 19.645 15.972 19.321 16.26C18.997 16.536 18.535 16.674 17.935 16.674H16.117ZM19.843 21.372C19.507 21.672 19.003 21.822 18.331 21.822H16.117V18.582H18.403C19.039 18.582 19.525 18.72 19.861 18.996C20.197 19.26 20.365 19.656 20.365 20.184C20.365 20.676 20.191 21.072 19.843 21.372Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("circle", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "18",
                r: "18",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M20.761 17.286C22.369 17.778 23.173 18.81 23.173 20.382C23.173 21.522 22.759 22.41 21.931 23.046C21.103 23.682 19.993 24 18.601 24H13.435V11.4H18.097C19.573 11.4 20.665 11.676 21.373 12.228C22.081 12.78 22.435 13.56 22.435 14.568C22.435 15.132 22.303 15.648 22.039 16.116C21.775 16.584 21.349 16.974 20.761 17.286ZM16.117 13.596V16.674H17.935C18.535 16.674 18.997 16.536 19.321 16.26C19.645 15.972 19.807 15.57 19.807 15.054C19.807 14.082 19.165 13.596 17.881 13.596H16.117ZM18.331 21.822C19.003 21.822 19.507 21.672 19.843 21.372C20.191 21.072 20.365 20.676 20.365 20.184C20.365 19.656 20.197 19.26 19.861 18.996C19.525 18.72 19.039 18.582 18.403 18.582H16.117V21.822H18.331Z",
              })
            );
      }
      function f(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "currentColor",
                d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.7101 11.4H20.3621L17.8601 15.45L15.3581 11.4H12.1001L16.4021 17.484L11.9201 24H15.0881L17.9141 19.41L20.8661 24H24.1061L19.2821 17.394L23.7101 11.4Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("circle", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "18",
                r: "18",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M20.3621 11.4H23.7101L19.2821 17.394L24.1061 24H20.8661L17.9141 19.41L15.0881 24H11.9201L16.4021 17.484L12.1001 11.4H15.3581L17.8601 15.45L20.3621 11.4Z",
              })
            );
      }
      function H(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "currentColor",
                d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.69 24H19.318V18.996L23.71 11.4H20.848L18.094 16.44L15.358 11.4H12.298L16.69 18.978V24Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("circle", {
                className: s().Background,
                cx: "18",
                cy: "18",
                r: "18",
                fill: "currentColor",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M19.318 24H16.69V18.978L12.298 11.4H15.358L18.094 16.44L20.848 11.4H23.71L19.318 18.996V24Z",
              })
            );
      }
      function v(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM25 20.1998L19.5555 14.7554V27.1998H16.4444V14.7554L11 20.1998L8.66663 17.8665L18 8.66661L27.3333 17.8665L25 20.1998Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("circle", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "18",
                r: "18",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M19.5555 14.7554L25 20.1998L27.3333 17.8665L18 8.66661L8.66663 17.8665L11 20.1998L16.4444 14.7554V27.1998H19.5555V14.7554Z",
              })
            );
      }
      function w(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM10.9999 15.6666L16.4444 21.1111L16.4444 8.66663H19.5555L19.5555 21.1111L24.9999 15.6666L27.3333 18L17.9999 27.1998L8.66659 18L10.9999 15.6666Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("circle", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "18",
                r: "18",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M16.4444 21.1111L10.9999 15.6666L8.66659 18L17.9999 27.1998L27.3333 18L24.9999 15.6666L19.5555 21.1111L19.5555 8.66663L16.4444 8.66663L16.4444 21.1111Z",
              })
            );
      }
      function h(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.2664 10.9332L14.8219 16.3777H27.2664V19.4888H14.8219L20.2664 24.9332L17.933 27.2665L8.73314 17.9332L17.933 8.59988L20.2664 10.9332Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("circle", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "18",
                r: "18",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M14.8219 16.3777L20.2664 10.9333L17.933 8.59994L8.73314 17.9332L17.933 27.2666L20.2664 24.9333L14.8219 19.4888L27.2664 19.4888L27.2664 16.3777L14.8219 16.3777Z",
              })
            );
      }
      function L(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM15.7332 24.9332L21.1776 19.4888H8.73315V16.3777H21.1776L15.7332 10.9332L18.0665 8.59991L27.2664 17.9333L18.0665 27.2666L15.7332 24.9332Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("circle", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "18",
                r: "18",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M21.1776 19.4887L15.7332 24.9332L18.0665 27.2665L27.2664 17.9332L18.0665 8.59985L15.7332 10.9332L21.1776 16.3776L8.73315 16.3776L8.73315 19.4887L21.1776 19.4887Z",
              })
            );
      }
      function E(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 100 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "currentColor",
                d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H82C91.9411 36 100 27.9411 100 18C100 8.05888 91.9411 0 82 0H18ZM21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5ZM35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388ZM50.8108 11.788H42.3148V24.388H50.8108V22.102H44.9608V19.15H50.0008V16.882H44.9608V14.038H50.8108V11.788ZM65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794ZM79.7729 11.788L75.8489 20.734L71.6009 11.788H69.0629V24.388H71.4749V16.468L74.9309 24.028H76.5329L79.9169 16.378V24.388H82.4549V11.788H79.7729Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 100 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M0 18C0 8.05888 8.05888 0 18 0H82C91.9411 0 100 8.05888 100 18C100 27.9411 91.9411 36 82 36H18C8.05888 36 0 27.9411 0 18Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M42.3148 11.788H50.8108V14.038H44.9608V16.882H50.0008V19.15H44.9608V22.102H50.8108V24.388H42.3148V11.788Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M75.8489 20.734L79.7729 11.788H82.4549V24.388H79.9169V16.378L76.5329 24.028H74.9309L71.4749 16.468V24.388H69.0629V11.788H71.6009L75.8489 20.734Z",
              })
            );
      }
      function V(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 81 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H61C70.9411 36 79 27.9411 79 18C79 8.05888 70.9411 0 61 0H18ZM21.5 22.5C23.9853 22.5 26 20.4853 26 18C26 15.5147 23.9853 13.5 21.5 13.5C19.0147 13.5 17 15.5147 17 18C17 20.4853 19.0147 22.5 21.5 22.5ZM44 18C44 20.4853 41.9853 22.5 39.5 22.5C37.0147 22.5 35 20.4853 35 18C35 15.5147 37.0147 13.5 39.5 13.5C41.9853 13.5 44 15.5147 44 18ZM57.5 22.5C59.9853 22.5 62 20.4853 62 18C62 15.5147 59.9853 13.5 57.5 13.5C55.0147 13.5 53 15.5147 53 18C53 20.4853 55.0147 22.5 57.5 22.5Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 81 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M0 18C0 8.05888 8.05888 0 18 0H61C70.9411 0 79 8.05888 79 18C79 27.9411 70.9411 36 61 36H18C8.05888 36 0 27.9411 0 18Z",
              }),
              a.createElement("circle", {
                className: s().Foreground,
                fill: "currentColor",
                cx: "21.5",
                cy: "18",
                r: "4.5",
              }),
              a.createElement("circle", {
                className: s().Foreground,
                fill: "currentColor",
                cx: "39.5",
                cy: "18",
                r: "4.5",
              }),
              a.createElement("circle", {
                className: s().Foreground,
                fill: "currentColor",
                cx: "57.5",
                cy: "18",
                r: "4.5",
              })
            );
      }
      function k(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 48 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V25H31V11Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 48 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("rect", {
                className: s().Background,
                fill: "currentColor",
                y: "6",
                width: "48",
                height: "24",
                rx: "12",
              }),
              a.createElement("rect", {
                className: s().Foreground,
                fill: "currentColor",
                x: "17",
                y: "11",
                width: "14",
                height: "14",
              })
            );
      }
      function _(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 48 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V13.8H31V11ZM17 22.2H31V25H17V22.2ZM31 16.6H17V19.4H31V16.6Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 48 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("rect", {
                className: s().Background,
                fill: "currentColor",
                y: "6",
                width: "48",
                height: "24",
                rx: "12",
              }),
              a.createElement("rect", {
                className: s().Foreground,
                fill: "currentColor",
                x: "17",
                y: "11",
                width: "14",
                height: "2.8",
              }),
              a.createElement("rect", {
                className: s().Foreground,
                fill: "currentColor",
                x: "17",
                y: "22.2",
                width: "14",
                height: "2.8",
              }),
              a.createElement("rect", {
                className: s().Foreground,
                fill: "currentColor",
                x: "17",
                y: "16.6",
                width: "14",
                height: "2.8",
              })
            );
      }
      function b(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 32",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.5 0C3.35786 0 0 4.47715 0 10V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895431 35.3284 0 34.5 0H7.5ZM9.36182 23H17.8218V20.624H12.0078V10.4H9.36182V23ZM25.7635 20.714V10.4H23.7296L19.5896 12.452L20.4356 14.432L23.0816 13.316V20.714H20.1115V23H28.1576V20.714H25.7635Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 32",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M0 10C0 4.47715 3.35786 0 7.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671574 32 0 31.1046 0 30V10Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M17.8218 23H9.36182V10.4H12.0078V20.624H17.8218V23Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M25.7635 10.4V20.714H28.1576V23H20.1116V20.714H23.0816V13.316L20.4356 14.432L19.5896 12.452L23.7296 10.4H25.7635Z",
              })
            );
      }
      function M(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 32",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.5 0C32.6421 0 36 4.47715 36 10V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671573 32 0 31.1046 0 30V2C0 0.895431 0.671573 0 1.5 0H28.5ZM15.8185 23H18.7525L15.7825 18.23C16.5505 17.894 17.1445 17.402 17.5645 16.754C17.9965 16.106 18.2125 15.296 18.2125 14.324C18.2125 13.088 17.8045 12.128 16.9885 11.444C16.1725 10.748 14.9005 10.4 13.1725 10.4H8.45654V23H11.1025V18.752H12.9745H13.2805L15.8185 23ZM11.1025 16.484V12.65H13.0105C13.8385 12.65 14.4385 12.806 14.8105 13.118C15.1945 13.418 15.3865 13.874 15.3865 14.486C15.3865 15.11 15.1885 15.602 14.7925 15.962C14.4085 16.31 13.8685 16.484 13.1725 16.484H11.1025ZM26.6688 20.714V10.4H24.6348L20.4948 12.452L21.3408 14.432L23.9868 13.316V20.714H21.0168V23H29.0628V20.714H26.6688Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 32",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M36 10C36 4.47715 32.6421 0 28.5 0H1.5C0.671574 0 0 0.895431 0 2V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V10Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M18.7525 23H15.8185L13.2805 18.752H12.9745H11.1025V23H8.45654V10.4H13.1725C14.9005 10.4 16.1725 10.748 16.9885 11.444C17.8045 12.128 18.2125 13.088 18.2125 14.324C18.2125 15.296 17.9965 16.106 17.5645 16.754C17.1445 17.402 16.5505 17.894 15.7825 18.23L18.7525 23ZM11.1025 12.65V16.484H13.1725C13.8685 16.484 14.4085 16.31 14.7925 15.962C15.1885 15.602 15.3865 15.11 15.3865 14.486C15.3865 13.874 15.1945 13.418 14.8105 13.118C14.4385 12.806 13.8385 12.65 13.0105 12.65H11.1025Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M26.6688 10.4V20.714H29.0628V23H21.0168V20.714H23.9868V13.316L21.3408 14.432L20.4948 12.452L24.6348 10.4H26.6688Z",
              })
            );
      }
      function N(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 32",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.5 32C3.35786 32 0 27.5228 0 22V2C0 0.895431 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H7.5ZM29.0743 20.714H23.0083L25.6183 18.554C26.6623 17.69 27.4363 16.91 27.9403 16.214C28.4443 15.506 28.6963 14.72 28.6963 13.856C28.6963 12.68 28.2583 11.774 27.3823 11.138C26.5063 10.502 25.3423 10.184 23.8903 10.184C23.0743 10.184 22.3063 10.298 21.5863 10.526C20.8783 10.754 20.2483 11.06 19.6963 11.444L20.5963 13.388C20.9683 13.136 21.4003 12.926 21.8923 12.758C22.3963 12.59 22.9123 12.506 23.4403 12.506C24.1483 12.506 24.7243 12.668 25.1683 12.992C25.6243 13.304 25.8523 13.772 25.8523 14.396C25.8523 14.78 25.7623 15.134 25.5823 15.458C25.4023 15.782 25.1623 16.088 24.8623 16.376C24.5743 16.664 24.1543 17.042 23.6023 17.51L23.2963 17.78L19.6603 20.804V23H29.0743V20.714ZM9.32458 23H17.7846V20.624H11.9706V10.4H9.32458V23Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 32",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M0 22C0 27.5228 3.35786 32 7.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895432 35.3284 0 34.5 0H1.5C0.671574 0 0 0.895432 0 2V22Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M17.7846 23H9.32458V10.4H11.9706V20.624H17.7846V23Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M23.0083 20.714H29.0743V23H19.6603V20.804L23.2963 17.78L23.6023 17.51C24.1543 17.042 24.5743 16.664 24.8623 16.376C25.1623 16.088 25.4023 15.782 25.5823 15.458C25.7623 15.134 25.8523 14.78 25.8523 14.396C25.8523 13.772 25.6243 13.304 25.1683 12.992C24.7243 12.668 24.1483 12.506 23.4403 12.506C22.9123 12.506 22.3963 12.59 21.8923 12.758C21.4003 12.926 20.9683 13.136 20.5963 13.388L19.6963 11.444C20.2483 11.06 20.8783 10.754 21.5863 10.526C22.3063 10.298 23.0743 10.184 23.8903 10.184C25.3423 10.184 26.5063 10.502 27.3823 11.138C28.2583 11.774 28.6963 12.68 28.6963 13.856C28.6963 14.72 28.4443 15.506 27.9403 16.214C27.4363 16.91 26.6623 17.69 25.6183 18.554L23.0083 20.714Z",
              })
            );
      }
      function y(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 32",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.5 32C32.6421 32 36 27.5228 36 22V2C36 0.895431 35.3284 0 34.5 0H1.5C0.671573 0 0 0.895431 0 2V30C0 31.1046 0.671573 32 1.5 32H28.5ZM28.9796 20.714H22.9136L25.5236 18.554C26.5676 17.69 27.3416 16.91 27.8456 16.214C28.3496 15.506 28.6016 14.72 28.6016 13.856C28.6016 12.68 28.1636 11.774 27.2876 11.138C26.4116 10.502 25.2476 10.184 23.7956 10.184C22.9796 10.184 22.2116 10.298 21.4916 10.526C20.7836 10.754 20.1536 11.06 19.6016 11.444L20.5016 13.388C20.8736 13.136 21.3056 12.926 21.7976 12.758C22.3016 12.59 22.8176 12.506 23.3456 12.506C24.0536 12.506 24.6296 12.668 25.0736 12.992C25.5296 13.304 25.7576 13.772 25.7576 14.396C25.7576 14.78 25.6676 15.134 25.4876 15.458C25.3076 15.782 25.0676 16.088 24.7676 16.376C24.4796 16.664 24.0596 17.042 23.5076 17.51L23.2016 17.78L19.5656 20.804V23H28.9796V20.714ZM14.7813 23H17.7153L14.7453 18.23C15.5133 17.894 16.1073 17.402 16.5273 16.754C16.9593 16.106 17.1753 15.296 17.1753 14.324C17.1753 13.088 16.7673 12.128 15.9513 11.444C15.1353 10.748 13.8633 10.4 12.1353 10.4H7.41931V23H10.0653V18.752H11.9373H12.2433L14.7813 23ZM10.0653 16.484V12.65H11.9733C12.8013 12.65 13.4013 12.806 13.7733 13.118C14.1573 13.418 14.3493 13.874 14.3493 14.486C14.3493 15.11 14.1513 15.602 13.7553 15.962C13.3713 16.31 12.8313 16.484 12.1353 16.484H10.0653Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 32",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M36 22C36 27.5228 32.6421 32 28.5 32H1.5C0.671574 32 0 31.1046 0 30V2C0 0.895432 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895432 36 2V22Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M17.7153 23H14.7813L12.2433 18.752H11.9373H10.0653V23H7.41931V10.4H12.1353C13.8633 10.4 15.1353 10.748 15.9513 11.444C16.7673 12.128 17.1753 13.088 17.1753 14.324C17.1753 15.296 16.9593 16.106 16.5273 16.754C16.1073 17.402 15.5133 17.894 14.7453 18.23L17.7153 23ZM10.0653 12.65V16.484H12.1353C12.8313 16.484 13.3713 16.31 13.7553 15.962C14.1513 15.602 14.3493 15.11 14.3493 14.486C14.3493 13.874 14.1573 13.418 13.7733 13.118C13.4013 12.806 12.8013 12.65 11.9733 12.65H10.0653Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M22.9136 20.714H28.9796V23H19.5656V20.804L23.2016 17.78L23.5076 17.51C24.0596 17.042 24.4796 16.664 24.7676 16.376C25.0676 16.088 25.3076 15.782 25.4876 15.458C25.6676 15.134 25.7576 14.78 25.7576 14.396C25.7576 13.772 25.5296 13.304 25.0736 12.992C24.6296 12.668 24.0536 12.506 23.3456 12.506C22.8176 12.506 22.3016 12.59 21.7976 12.758C21.3056 12.926 20.8736 13.136 20.5016 13.388L19.6016 11.444C20.1536 11.06 20.7836 10.754 21.4916 10.526C22.2116 10.298 22.9796 10.184 23.7956 10.184C25.2476 10.184 26.4116 10.502 27.2876 11.138C28.1636 11.774 28.6016 12.68 28.6016 13.856C28.6016 14.72 28.3496 15.506 27.8456 16.214C27.3416 16.91 26.5676 17.69 25.5236 18.554L22.9136 20.714Z",
              })
            );
      }
      function D(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
              }),
              a.createElement("path", {
                fill: "currentColor",
                d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
              }),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM25.4679 14.284C24.7852 13.7613 23.7879 13.5 22.4759 13.5C21.6972 13.5 20.9666 13.6173 20.2839 13.852C19.6119 14.0867 19.0092 14.4227 18.4759 14.86L19.4679 16.364C19.8199 16.0973 20.2146 15.8893 20.6519 15.74C21.0999 15.58 21.5639 15.5 22.0439 15.5C22.6732 15.5 23.1639 15.6227 23.5159 15.868C23.8786 16.1133 24.0599 16.4387 24.0599 16.844C24.0599 17.2813 23.8679 17.6227 23.4839 17.868C23.1106 18.1027 22.6146 18.22 21.9959 18.22H20.6999V19.996H22.1399C23.7079 19.996 24.4919 20.508 24.4919 21.532C24.4919 22.0547 24.2839 22.4653 23.8679 22.764C23.4626 23.0627 22.8972 23.212 22.1719 23.212C21.0306 23.212 20.0439 22.876 19.2119 22.204L18.2039 23.932C18.7052 24.3373 19.3186 24.652 20.0439 24.876C20.7799 25.1 21.5532 25.212 22.3639 25.212C23.2172 25.212 23.9959 25.068 24.6999 24.78C25.4039 24.4813 25.9586 24.0653 26.3639 23.532C26.7692 22.988 26.9719 22.364 26.9719 21.66C26.9719 20.892 26.7479 20.2787 26.2999 19.82C25.8626 19.3507 25.2866 19.0413 24.5719 18.892V18.844C25.1799 18.6093 25.6492 18.2733 25.9799 17.836C26.3212 17.388 26.4919 16.8813 26.4919 16.316C26.4919 15.484 26.1506 14.8067 25.4679 14.284ZM9.48901 24.956H17.009V22.844H11.841V13.756H9.48901V24.956Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("ellipse", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "19.5",
                rx: "18",
                ry: "11.25",
              }),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
              }),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M17.009 24.956H9.48901V13.756H11.841V22.844H17.009V24.956Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M22.4759 13.5C23.7879 13.5 24.7852 13.7613 25.4679 14.284C26.1506 14.8067 26.4919 15.484 26.4919 16.316C26.4919 16.8813 26.3212 17.388 25.9799 17.836C25.6492 18.2733 25.1799 18.6093 24.5719 18.844V18.892C25.2866 19.0413 25.8626 19.3507 26.2999 19.82C26.7479 20.2787 26.9719 20.892 26.9719 21.66C26.9719 22.364 26.7692 22.988 26.3639 23.532C25.9586 24.0653 25.4039 24.4813 24.6999 24.78C23.9959 25.068 23.2172 25.212 22.3639 25.212C21.5532 25.212 20.7799 25.1 20.0439 24.876C19.3186 24.652 18.7052 24.3373 18.2039 23.932L19.2119 22.204C20.0439 22.876 21.0306 23.212 22.1719 23.212C22.8972 23.212 23.4626 23.0627 23.8679 22.764C24.2839 22.4653 24.4919 22.0547 24.4919 21.532C24.4919 20.508 23.7079 19.996 22.1399 19.996H20.6999V18.22H21.9959C22.6146 18.22 23.1106 18.1027 23.4839 17.868C23.8679 17.6227 24.0599 17.2813 24.0599 16.844C24.0599 16.4387 23.8786 16.1133 23.5159 15.868C23.1639 15.6227 22.6732 15.5 22.0439 15.5C21.5639 15.5 21.0999 15.58 20.6519 15.74C20.2146 15.8893 19.8199 16.0973 19.4679 16.364L18.4759 14.86C19.0092 14.4227 19.6119 14.0867 20.2839 13.852C20.9666 13.6173 21.6972 13.5 22.4759 13.5Z",
              })
            );
      }
      function R(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
              }),
              a.createElement("path", {
                fill: "currentColor",
                d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
              }),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM26.5882 14.284C25.9056 13.7613 24.9082 13.5 23.5962 13.5C22.8176 13.5 22.0869 13.6173 21.4043 13.852C20.7323 14.0867 20.1296 14.4227 19.5963 14.86L20.5882 16.364C20.9403 16.0973 21.3349 15.8893 21.7723 15.74C22.2202 15.58 22.6842 15.5 23.1642 15.5C23.7936 15.5 24.2843 15.6227 24.6362 15.868C24.9989 16.1133 25.1803 16.4387 25.1803 16.844C25.1803 17.2813 24.9883 17.6227 24.6043 17.868C24.2309 18.1027 23.7349 18.22 23.1162 18.22H21.8203V19.996H23.2603C24.8283 19.996 25.6122 20.508 25.6122 21.532C25.6122 22.0547 25.4042 22.4653 24.9883 22.764C24.5829 23.0627 24.0176 23.212 23.2923 23.212C22.1509 23.212 21.1643 22.876 20.3323 22.204L19.3242 23.932C19.8256 24.3373 20.4389 24.652 21.1642 24.876C21.9002 25.1 22.6736 25.212 23.4842 25.212C24.3376 25.212 25.1162 25.068 25.8202 24.78C26.5243 24.4813 27.0789 24.0653 27.4842 23.532C27.8896 22.988 28.0923 22.364 28.0923 21.66C28.0923 20.892 27.8682 20.2787 27.4202 19.82C26.9829 19.3507 26.4069 19.0413 25.6922 18.892V18.844C26.3002 18.6093 26.7696 18.2733 27.1003 17.836C27.4416 17.388 27.6122 16.8813 27.6122 16.316C27.6122 15.484 27.2709 14.8067 26.5882 14.284ZM15.544 24.956H18.152L15.512 20.716C16.1947 20.4173 16.7227 19.98 17.096 19.404C17.48 18.828 17.672 18.108 17.672 17.244C17.672 16.1453 17.3093 15.292 16.584 14.684C15.8587 14.0653 14.728 13.756 13.192 13.756H9V24.956H11.352V21.18H13.016H13.288L15.544 24.956ZM11.352 19.164V15.756H13.048C13.784 15.756 14.3173 15.8947 14.648 16.172C14.9893 16.4387 15.16 16.844 15.16 17.388C15.16 17.9427 14.984 18.38 14.632 18.7C14.2907 19.0093 13.8107 19.164 13.192 19.164H11.352Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("ellipse", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "19.5",
                rx: "18",
                ry: "11.25",
              }),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
              }),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M18.152 24.956H15.544L13.288 21.18H13.016H11.352V24.956H9V13.756H13.192C14.728 13.756 15.8587 14.0653 16.584 14.684C17.3093 15.292 17.672 16.1453 17.672 17.244C17.672 18.108 17.48 18.828 17.096 19.404C16.7227 19.98 16.1947 20.4173 15.512 20.716L18.152 24.956ZM11.352 15.756V19.164H13.192C13.8107 19.164 14.2907 19.0093 14.632 18.7C14.984 18.38 15.16 17.9427 15.16 17.388C15.16 16.844 14.9893 16.4387 14.648 16.172C14.3173 15.8947 13.784 15.756 13.048 15.756H11.352Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M23.5962 13.5C24.9082 13.5 25.9056 13.7613 26.5882 14.284C27.2709 14.8067 27.6122 15.484 27.6122 16.316C27.6122 16.8813 27.4416 17.388 27.1003 17.836C26.7696 18.2733 26.3002 18.6093 25.6922 18.844V18.892C26.4069 19.0413 26.9829 19.3507 27.4202 19.82C27.8682 20.2787 28.0923 20.892 28.0923 21.66C28.0923 22.364 27.8896 22.988 27.4842 23.532C27.0789 24.0653 26.5243 24.4813 25.8202 24.78C25.1162 25.068 24.3376 25.212 23.4843 25.212C22.6736 25.212 21.9003 25.1 21.1643 24.876C20.4389 24.652 19.8256 24.3373 19.3243 23.932L20.3323 22.204C21.1643 22.876 22.1509 23.212 23.2923 23.212C24.0176 23.212 24.5829 23.0627 24.9882 22.764C25.4042 22.4653 25.6122 22.0547 25.6122 21.532C25.6122 20.508 24.8283 19.996 23.2603 19.996H21.8203V18.22H23.1163C23.7349 18.22 24.2309 18.1027 24.6043 17.868C24.9883 17.6227 25.1803 17.2813 25.1803 16.844C25.1803 16.4387 24.9989 16.1133 24.6363 15.868C24.2843 15.6227 23.7936 15.5 23.1643 15.5C22.6842 15.5 22.2203 15.58 21.7723 15.74C21.3349 15.8893 20.9403 16.0973 20.5883 16.364L19.5963 14.86C20.1296 14.4227 20.7323 14.0867 21.4043 13.852C22.0869 13.6173 22.8176 13.5 23.5962 13.5Z",
              })
            );
      }
      function Z(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM20.8833 18.9875H23.6775L20.849 14.4447C21.5804 14.1247 22.1461 13.6561 22.5461 13.039C22.9575 12.4218 23.1633 11.6504 23.1633 10.7247C23.1633 9.54755 22.7747 8.63326 21.9975 7.98183C21.2204 7.31898 20.009 6.98755 18.3633 6.98755H13.8718V18.9875H16.3918V14.9418H18.1747H18.4661L20.8833 18.9875ZM16.3918 12.7818V9.13041H18.209C18.9975 9.13041 19.569 9.27898 19.9233 9.57612C20.289 9.86183 20.4718 10.2961 20.4718 10.879C20.4718 11.4733 20.2833 11.9418 19.9061 12.2847C19.5404 12.6161 19.0261 12.7818 18.3633 12.7818H16.3918Z",
              }),
              a.createElement("path", {
                fill: "currentColor",
                d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("ellipse", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "13.5",
                rx: "18",
                ry: "11.25",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M23.6775 18.9875H20.8833L18.4661 14.9418H18.1747H16.3918V18.9875H13.8718V6.98755H18.3633C20.009 6.98755 21.2204 7.31898 21.9975 7.98184C22.7747 8.63326 23.1633 9.54755 23.1633 10.7247C23.1633 11.6504 22.9575 12.4218 22.5461 13.039C22.1461 13.6561 21.5804 14.1247 20.849 14.4447L23.6775 18.9875ZM16.3918 9.13041V12.7818H18.3633C19.0261 12.7818 19.5404 12.6161 19.9061 12.2847C20.2833 11.9418 20.4718 11.4733 20.4718 10.879C20.4718 10.2961 20.289 9.86183 19.9233 9.57612C19.569 9.27898 18.9975 9.13041 18.209 9.13041H16.3918Z",
              }),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
              })
            );
      }
      function x(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM14 19H23V16.7371H16.8149V7H14V19Z",
              }),
              a.createElement("path", {
                fill: "currentColor",
                d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("ellipse", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "13.5",
                rx: "18",
                ry: "11.25",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M23 19H14V7H16.8149V16.7371H23V19Z",
              }),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
              })
            );
      }
      function I(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.62341 24.75H17.0834V22.374H11.2694V12.15H8.62341V24.75ZM27.3111 19.854V12.15H24.8631L18.6891 20.16V21.888H24.6291V24.75H27.3111V21.888H29.1291V19.854H27.3111ZM21.2631 19.854L24.7371 15.3V19.854H21.2631Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M17.0834 24.75H8.62341V12.15H11.2694V22.374H17.0834V24.75Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M27.3111 12.15V19.854H29.1291V21.888H27.3111V24.75H24.6291V21.888H18.6891V20.16L24.8631 12.15H27.3111ZM24.7371 15.3L21.2631 19.854H24.7371V15.3Z",
              })
            );
      }
      function B(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.23669 24.75H16.6967V22.374H10.8827V12.15H8.23669V24.75ZM27.3744 14.4V12.15H19.3284V18.648L21.0024 19.566C21.3744 19.266 21.7524 19.044 22.1364 18.9C22.5204 18.744 22.9404 18.666 23.3964 18.666C24.0084 18.666 24.4884 18.828 24.8364 19.152C25.1964 19.476 25.3764 19.944 25.3764 20.556C25.3764 21.252 25.1424 21.786 24.6744 22.158C24.2064 22.53 23.5464 22.716 22.6944 22.716C21.5664 22.716 20.5404 22.404 19.6164 21.78L18.6804 23.796C19.1484 24.192 19.7364 24.498 20.4444 24.714C21.1524 24.93 21.9144 25.038 22.7304 25.038C23.8344 25.038 24.7884 24.852 25.5924 24.48C26.4084 24.096 27.0264 23.562 27.4464 22.878C27.8784 22.194 28.0944 21.396 28.0944 20.484C28.0944 19.26 27.7524 18.33 27.0684 17.694C26.3964 17.046 25.4964 16.722 24.3684 16.722C23.9244 16.722 23.4804 16.776 23.0364 16.884C22.6044 16.98 22.2144 17.136 21.8664 17.352V14.4H27.3744Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M16.6967 24.75H8.23669V12.15H10.8827V22.374H16.6967V24.75Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M27.3744 12.15V14.4H21.8664V17.352C22.2144 17.136 22.6044 16.98 23.0364 16.884C23.4804 16.776 23.9244 16.722 24.3684 16.722C25.4964 16.722 26.3964 17.046 27.0684 17.694C27.7524 18.33 28.0944 19.26 28.0944 20.484C28.0944 21.396 27.8784 22.194 27.4464 22.878C27.0264 23.562 26.4084 24.096 25.5924 24.48C24.7884 24.852 23.8344 25.038 22.7304 25.038C21.9144 25.038 21.1524 24.93 20.4444 24.714C19.7364 24.498 19.1484 24.192 18.6804 23.796L19.6164 21.78C20.5404 22.404 21.5664 22.716 22.6944 22.716C23.5464 22.716 24.2064 22.53 24.6744 22.158C25.1424 21.786 25.3764 21.252 25.3764 20.556C25.3764 19.944 25.1964 19.476 24.8364 19.152C24.4884 18.828 24.0084 18.666 23.3964 18.666C22.9404 18.666 22.5204 18.744 22.1364 18.9C21.7524 19.044 21.3744 19.266 21.0024 19.566L19.3284 18.648V12.15H27.3744Z",
              })
            );
      }
      function S(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.5176 24.75H17.4516L14.4816 19.98C15.2496 19.644 15.8436 19.152 16.2636 18.504C16.6956 17.856 16.9116 17.046 16.9116 16.074C16.9116 14.838 16.5036 13.878 15.6876 13.194C14.8716 12.498 13.5996 12.15 11.8716 12.15H7.15564V24.75H9.80164V20.502H11.6736H11.9796L14.5176 24.75ZM9.80164 18.234V14.4H11.7096C12.5376 14.4 13.1376 14.556 13.5096 14.868C13.8936 15.168 14.0856 15.624 14.0856 16.236C14.0856 16.86 13.8876 17.352 13.4916 17.712C13.1076 18.06 12.5676 18.234 11.8716 18.234H9.80164ZM27.6539 19.854V12.15H25.2059L19.0319 20.16V21.888H24.9719V24.75H27.6539V21.888H29.4719V19.854H27.6539ZM21.6059 19.854L25.0799 15.3V19.854H21.6059Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M17.4516 24.75H14.5176L11.9796 20.502H11.6736H9.80164V24.75H7.15564V12.15H11.8716C13.5996 12.15 14.8716 12.498 15.6876 13.194C16.5036 13.878 16.9116 14.838 16.9116 16.074C16.9116 17.046 16.6956 17.856 16.2636 18.504C15.8436 19.152 15.2496 19.644 14.4816 19.98L17.4516 24.75ZM9.80164 14.4V18.234H11.8716C12.5676 18.234 13.1076 18.06 13.4916 17.712C13.8876 17.352 14.0856 16.86 14.0856 16.236C14.0856 15.624 13.8936 15.168 13.5096 14.868C13.1376 14.556 12.5376 14.4 11.7096 14.4H9.80164Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M27.6539 12.15V19.854H29.4719V21.888H27.6539V24.75H24.9719V21.888H19.0319V20.16L25.2059 12.15H27.6539ZM25.0799 15.3L21.6059 19.854H25.0799V15.3Z",
              })
            );
      }
      function F(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.6934 24.75H17.6274L14.6574 19.98C15.4254 19.644 16.0194 19.152 16.4394 18.504C16.8714 17.856 17.0874 17.046 17.0874 16.074C17.0874 14.838 16.6794 13.878 15.8634 13.194C15.0474 12.498 13.7754 12.15 12.0474 12.15H7.33142V24.75H9.97742V20.502H11.8494H12.1554L14.6934 24.75ZM9.97742 18.234V14.4H11.8854C12.7134 14.4 13.3134 14.556 13.6854 14.868C14.0694 15.168 14.2614 15.624 14.2614 16.236C14.2614 16.86 14.0634 17.352 13.6674 17.712C13.2834 18.06 12.7434 18.234 12.0474 18.234H9.97742ZM28.2797 14.4V12.15H20.2337V18.648L21.9077 19.566C22.2797 19.266 22.6577 19.044 23.0417 18.9C23.4257 18.744 23.8457 18.666 24.3017 18.666C24.9137 18.666 25.3937 18.828 25.7417 19.152C26.1017 19.476 26.2817 19.944 26.2817 20.556C26.2817 21.252 26.0477 21.786 25.5797 22.158C25.1117 22.53 24.4517 22.716 23.5997 22.716C22.4717 22.716 21.4457 22.404 20.5217 21.78L19.5857 23.796C20.0537 24.192 20.6417 24.498 21.3497 24.714C22.0577 24.93 22.8197 25.038 23.6357 25.038C24.7397 25.038 25.6937 24.852 26.4977 24.48C27.3137 24.096 27.9317 23.562 28.3517 22.878C28.7837 22.194 28.9997 21.396 28.9997 20.484C28.9997 19.26 28.6577 18.33 27.9737 17.694C27.3017 17.046 26.4017 16.722 25.2737 16.722C24.8297 16.722 24.3857 16.776 23.9417 16.884C23.5097 16.98 23.1197 17.136 22.7717 17.352V14.4H28.2797Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M17.6274 24.75H14.6934L12.1554 20.502H11.8494H9.97742V24.75H7.33142V12.15H12.0474C13.7754 12.15 15.0474 12.498 15.8634 13.194C16.6794 13.878 17.0874 14.838 17.0874 16.074C17.0874 17.046 16.8714 17.856 16.4394 18.504C16.0194 19.152 15.4254 19.644 14.6574 19.98L17.6274 24.75ZM9.97742 14.4V18.234H12.0474C12.7434 18.234 13.2834 18.06 13.6674 17.712C14.0634 17.352 14.2614 16.86 14.2614 16.236C14.2614 15.624 14.0694 15.168 13.6854 14.868C13.3134 14.556 12.7134 14.4 11.8854 14.4H9.97742Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M28.2797 12.15V14.4H22.7717V17.352C23.1197 17.136 23.5097 16.98 23.9417 16.884C24.3857 16.776 24.8297 16.722 25.2737 16.722C26.4017 16.722 27.3017 17.046 27.9737 17.694C28.6577 18.33 28.9997 19.26 28.9997 20.484C28.9997 21.396 28.7837 22.194 28.3517 22.878C27.9317 23.562 27.3137 24.096 26.4977 24.48C25.6937 24.852 24.7397 25.038 23.6357 25.038C22.8197 25.038 22.0577 24.93 21.3497 24.714C20.6417 24.498 20.0537 24.192 19.5857 23.796L20.5217 21.78C21.4457 22.404 22.4717 22.716 23.5997 22.716C24.4517 22.716 25.1117 22.53 25.5797 22.158C26.0477 21.786 26.2817 21.252 26.2817 20.556C26.2817 19.944 26.1017 19.476 25.7417 19.152C25.3937 18.828 24.9137 18.666 24.3017 18.666C23.8457 18.666 23.4257 18.744 23.0417 18.9C22.6577 19.044 22.2797 19.266 21.9077 19.566L20.2337 18.648V12.15H28.2797Z",
              })
            );
      }
      function A(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.73583 3C3.6326 3 1.88863 4.6288 1.74515 6.72713L0.292161 27.9771C0.134133 30.2883 1.96629 32.25 4.28284 32.25H31.7172C34.0337 32.25 35.8659 30.2883 35.7078 27.9771L34.2548 6.72713C34.1114 4.6288 32.3674 3 30.2642 3H5.73583ZM14.8236 24.0625H23.2836V21.6865H17.4696V11.4625H14.8236V24.0625Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M23.2836 24.0625H14.8236V11.4625H17.4696V21.6865H23.2836V24.0625Z",
              })
            );
      }
      function K(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM14.8237 28.0625H23.2837V25.6865H17.4697V15.4625H14.8237V28.0625Z",
              }),
              a.createElement("path", {
                fill: "currentColor",
                d: "M24 0H12L18 6L24 0Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M23.2836 28.0625H14.8236V15.4625H17.4696V25.6865H23.2836V28.0625Z",
              }),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M24 0H12L18 6L24 0Z",
              })
            );
      }
      function T(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.7359 3C3.63266 3 1.88869 4.6288 1.74521 6.72713L0.292222 27.9771C0.134194 30.2883 1.96635 32.25 4.2829 32.25H31.7172C34.0338 32.25 35.8659 30.2883 35.7079 27.9771L34.2549 6.72713C34.1114 4.6288 32.3675 3 30.2642 3H5.7359ZM20.7179 24.0625H23.6519L20.6819 19.2925C21.4499 18.9565 22.0439 18.4645 22.4639 17.8165C22.8959 17.1685 23.1119 16.3585 23.1119 15.3865C23.1119 14.1505 22.7039 13.1905 21.8879 12.5065C21.0719 11.8105 19.7999 11.4625 18.0719 11.4625H13.3559V24.0625H16.0019V19.8145H17.8739H18.1799L20.7179 24.0625ZM16.0019 17.5465V13.7125H17.9099C18.7379 13.7125 19.3379 13.8685 19.7099 14.1805C20.0939 14.4805 20.2859 14.9365 20.2859 15.5485C20.2859 16.1725 20.0879 16.6645 19.6919 17.0245C19.3079 17.3725 18.7679 17.5465 18.0719 17.5465H16.0019Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M23.6518 24.0625H20.7178L18.1798 19.8145H17.8738H16.0018V24.0625H13.3558V11.4625H18.0718C19.7998 11.4625 21.0718 11.8105 21.8878 12.5065C22.7038 13.1905 23.1118 14.1505 23.1118 15.3865C23.1118 16.3585 22.8958 17.1685 22.4638 17.8165C22.0438 18.4645 21.4498 18.9565 20.6818 19.2925L23.6518 24.0625ZM16.0018 13.7125V17.5465H18.0718C18.7678 17.5465 19.3078 17.3725 19.6918 17.0245C20.0878 16.6645 20.2858 16.1725 20.2858 15.5485C20.2858 14.9365 20.0938 14.4805 19.7098 14.1805C19.3378 13.8685 18.7378 13.7125 17.9098 13.7125H16.0018Z",
              })
            );
      }
      function O(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM20.7179 28.0625H23.6519L20.6819 23.2925C21.4499 22.9565 22.0439 22.4645 22.4639 21.8165C22.8959 21.1685 23.1119 20.3585 23.1119 19.3865C23.1119 18.1505 22.7039 17.1905 21.8879 16.5065C21.0719 15.8105 19.7999 15.4625 18.0719 15.4625H13.3559V28.0625H16.0019V23.8145H17.8739H18.1799L20.7179 28.0625ZM16.0019 21.5465V17.7125H17.9099C18.7379 17.7125 19.3379 17.8685 19.7099 18.1805C20.0939 18.4805 20.2859 18.9365 20.2859 19.5485C20.2859 20.1725 20.0879 20.6645 19.6919 21.0245C19.3079 21.3725 18.7679 21.5465 18.0719 21.5465H16.0019Z",
              }),
              a.createElement("path", {
                fill: "currentColor",
                d: "M24 0H12L18 6L24 0Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M23.6518 28.0625H20.7178L18.1798 23.8145H17.8738H16.0018V28.0625H13.3558V15.4625H18.0718C19.7998 15.4625 21.0718 15.8105 21.8878 16.5065C22.7038 17.1905 23.1118 18.1505 23.1118 19.3865C23.1118 20.3585 22.8958 21.1685 22.4638 21.8165C22.0438 22.4645 21.4498 22.9565 20.6818 23.2925L23.6518 28.0625ZM16.0018 17.7125V21.5465H18.0718C18.7678 21.5465 19.3078 21.3725 19.6918 21.0245C20.0878 20.6645 20.2858 20.1725 20.2858 19.5485C20.2858 18.9365 20.0938 18.4805 19.7098 18.1805C19.3378 17.8685 18.7378 17.7125 17.9098 17.7125H16.0018Z",
              }),
              a.createElement("path", {
                className: s().Background,
                fill: "currentColor",
                d: "M24 0H12L18 6L24 0Z",
              })
            );
      }
      function j(e) {
        var { bIsKnockout: t } = e,
          r = (0, o._T)(e, ["bIsKnockout"]);
        return t
          ? a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "currentColor",
                d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.4999 10.8201C19.7519 10.4974 18.8719 10.3361 17.8599 10.3361C16.9799 10.3361 16.1219 10.4681 15.2859 10.7321C14.4499 10.9961 13.7166 11.3407 13.0859 11.7661L14.0759 13.9881C15.0586 13.2547 16.1073 12.8881 17.2219 12.8881C17.9699 12.8881 18.5493 13.0494 18.9599 13.3721C19.3853 13.6801 19.5979 14.1201 19.5979 14.6921C19.5979 15.1027 19.4953 15.4474 19.2899 15.7261C19.0846 16.0047 18.7693 16.3201 18.3439 16.6721C17.8893 17.0681 17.5153 17.4347 17.2219 17.7721C16.9286 18.1094 16.6793 18.5641 16.4739 19.1361C16.2686 19.7081 16.1659 20.4047 16.1659 21.2261H18.8499C18.8499 20.6541 18.9453 20.1554 19.1359 19.7301C19.3266 19.2901 19.5539 18.9234 19.8179 18.6301C20.0966 18.3221 20.4633 17.9701 20.9179 17.5741C21.3579 17.1781 21.7026 16.8407 21.9519 16.5621C22.2159 16.2834 22.4359 15.9461 22.6119 15.5501C22.7879 15.1541 22.8759 14.6994 22.8759 14.1861C22.8759 13.4234 22.6706 12.7561 22.2599 12.1841C21.8493 11.5974 21.2626 11.1427 20.4999 10.8201ZM18.7839 23.2721C18.4759 22.9494 18.0653 22.7881 17.5519 22.7881C17.0386 22.7881 16.6279 22.9494 16.3199 23.2721C16.0119 23.5801 15.8579 23.9907 15.8579 24.5041C15.8579 25.0467 16.0119 25.4794 16.3199 25.8021C16.6279 26.1101 17.0386 26.2641 17.5519 26.2641C18.0653 26.2641 18.4759 26.1101 18.7839 25.8021C19.0919 25.4794 19.2459 25.0467 19.2459 24.5041C19.2459 23.9907 19.0919 23.5801 18.7839 23.2721Z",
              })
            )
          : a.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                r
              ),
              a.createElement("circle", {
                className: s().Background,
                fill: "currentColor",
                cx: "18",
                cy: "18",
                r: "18",
              }),
              a.createElement("path", {
                className: s().Foreground,
                fill: "currentColor",
                d: "M17.8599 10.3361C18.8719 10.3361 19.7519 10.4974 20.4999 10.8201C21.2626 11.1427 21.8493 11.5974 22.2599 12.1841C22.6706 12.7561 22.8759 13.4234 22.8759 14.1861C22.8759 14.6994 22.7879 15.1541 22.6119 15.5501C22.4359 15.9461 22.2159 16.2834 21.9519 16.5621C21.7026 16.8407 21.3579 17.1781 20.9179 17.5741C20.4633 17.9701 20.0966 18.3221 19.8179 18.6301C19.5539 18.9234 19.3266 19.2901 19.1359 19.7301C18.9453 20.1554 18.8499 20.6541 18.8499 21.2261H16.1659C16.1659 20.4047 16.2686 19.7081 16.4739 19.1361C16.6793 18.5641 16.9286 18.1094 17.2219 17.7721C17.5153 17.4347 17.8893 17.0681 18.3439 16.6721C18.7693 16.3201 19.0846 16.0047 19.2899 15.7261C19.4953 15.4474 19.5979 15.1027 19.5979 14.6921C19.5979 14.1201 19.3853 13.6801 18.9599 13.3721C18.5493 13.0494 17.9699 12.8881 17.2219 12.8881C16.1073 12.8881 15.0586 13.2547 14.0759 13.9881L13.0859 11.7661C13.7166 11.3407 14.4499 10.9961 15.2859 10.7321C16.1219 10.4681 16.9799 10.3361 17.8599 10.3361ZM17.5519 22.7881C18.0653 22.7881 18.4759 22.9494 18.7839 23.2721C19.0919 23.5801 19.2459 23.9907 19.2459 24.5041C19.2459 25.0467 19.0919 25.4794 18.7839 25.8021C18.4759 26.1101 18.0653 26.2641 17.5519 26.2641C17.0386 26.2641 16.6279 26.1101 16.3199 25.8021C16.0119 25.4794 15.8579 25.0467 15.8579 24.5041C15.8579 23.9907 16.0119 23.5801 16.3199 23.2721C16.6279 22.9494 17.0386 22.7881 17.5519 22.7881Z",
              })
            );
      }
      !(function (e) {
        (e[(e.Knockout = 0)] = "Knockout"),
          (e[(e.Light = 1)] = "Light"),
          (e[(e.Dark = 2)] = "Dark");
      })(l || (l = {})),
        (function (e) {
          (e[(e.Small = 0)] = "Small"),
            (e[(e.Medium = 1)] = "Medium"),
            (e[(e.Large = 2)] = "Large");
        })(n || (n = {}));
    },
  },
]);
