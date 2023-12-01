/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [341],
  {
    6864: (e) => {
      e.exports = {
        SteamAwardContainer: "nominationandvote_SteamAwardContainer_jBtX5",
        InLibraryView: "nominationandvote_InLibraryView_1G81P",
        SVGIcon_DialogCheck: "nominationandvote_SVGIcon_DialogCheck_1IRgd",
        SteamAwardHeader: "nominationandvote_SteamAwardHeader_2TvWH",
        SteamAwardHeaderImage: "nominationandvote_SteamAwardHeaderImage_3dsTJ",
        SteamAwardMainCtn: "nominationandvote_SteamAwardMainCtn_3CUAM",
        SteamAwardMainTitle: "nominationandvote_SteamAwardMainTitle_6gN_u",
        SteamAwardSubTitle: "nominationandvote_SteamAwardSubTitle_3SuAg",
        SteamAwardLearnMore: "nominationandvote_SteamAwardLearnMore_TqZmn",
        BottomRight: "nominationandvote_BottomRight_3VSBr",
        SteamAwardHeaderText: "nominationandvote_SteamAwardHeaderText_30-fH",
        LinkText: "nominationandvote_LinkText_1dQJW",
        SteamAwardVoteWidget: "nominationandvote_SteamAwardVoteWidget_2-t3v",
        SteamAwardVotePrompt: "nominationandvote_SteamAwardVotePrompt_38kTM",
        SteamAwardCategoryTitle:
          "nominationandvote_SteamAwardCategoryTitle_3hZED",
        VotingTitle: "nominationandvote_VotingTitle_at4wS",
        SteamAwardCategoryDesc:
          "nominationandvote_SteamAwardCategoryDesc_3bu8i",
        SteamAwardVoteButtonArea:
          "nominationandvote_SteamAwardVoteButtonArea_2gvv6",
        SteamAwardVoteButton: "nominationandvote_SteamAwardVoteButton_kTsuK",
        SteamAwardVoteButtonText:
          "nominationandvote_SteamAwardVoteButtonText_Zzla_",
        SteamAwardVoteButtonSubmitted:
          "nominationandvote_SteamAwardVoteButtonSubmitted_39ziF",
        NominateCtn: "nominationandvote_NominateCtn_hS9w-",
        SteamAwardNominateButton:
          "nominationandvote_SteamAwardNominateButton_VcFKW",
        Nominated: "nominationandvote_Nominated_2pePR",
        SteamAwardLinkToNominationPage:
          "nominationandvote_SteamAwardLinkToNominationPage_3XWCw",
        SteamAwardVoteCheckBox:
          "nominationandvote_SteamAwardVoteCheckBox_LFbd4",
        SteamAwardModalGameTitle:
          "nominationandvote_SteamAwardModalGameTitle_3hBdP",
        ExpiredEventHeader: "nominationandvote_ExpiredEventHeader_3e-YK",
        AwardCategoriesCtn: "nominationandvote_AwardCategoriesCtn_GCwk0",
        SteamAwardConflictModal:
          "nominationandvote_SteamAwardConflictModal_1Ujn_",
        NominationSwitchCtn: "nominationandvote_NominationSwitchCtn_3IrPA",
      };
    },
    42977: (e, t, a) => {
      "use strict";
      a.d(t, {
        $: () => w,
        A7: () => h,
        Cn: () => G,
        Df: () => p,
        NL: () => E,
        TW: () => f,
        WR: () => y,
        hp: () => T,
        rO: () => S,
        tM: () => N,
        w6: () => C,
      });
      var n = a(33940),
        o = a(2232),
        i = a(68333),
        r = a(97940),
        s = a(43961),
        d = a(5615),
        l = a(27070),
        m = a(44973),
        c = a(59954),
        u = a(54671),
        g = a(52868),
        v = a.n(g);
      const p = 2640290,
        S = 2215130;
      let _;
      function A() {
        return (
          _ || (_ = (0, c.ip)("steam_awards_config", "application_config")), _
        );
      }
      function w(e) {
        const t = (0, l.bY)();
        return (0, d.useQuery)(
          `SteamAwardDefs_${e}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              const a = i.gA.Init(s.R_);
              a.Body().set_sale_appid(e), a.Body().set_language(m.De.LANGUAGE);
              return (yield s.Zq.GetVoteDefinitions(t, a)).Body().toObject();
            }),
          {
            initialData: () => {
              var e;
              return null === (e = A()) || void 0 === e
                ? void 0
                : e.definitions;
            },
            enabled: e > 0,
          },
        );
      }
      function h() {
        const e = (0, l.bY)();
        return (0, d.useQuery)(
          `SteamAwardNominations_${m.L7.accountid}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              var t;
              const a = i.gA.Init(s.Aw);
              return null ===
                (t = (yield s.tQ.GetUserNominations(e, a)).Body().toObject()) ||
                void 0 === t
                ? void 0
                : t.nominations;
            }),
          {
            initialData: () => {
              var e, t;
              return null ===
                (t =
                  null === (e = A()) || void 0 === e
                    ? void 0
                    : e.user_nominations) || void 0 === t
                ? void 0
                : t.nominations;
            },
            enabled: m.L7.logged_in,
          },
        );
      }
      function E(e) {
        var t;
        const a = h();
        return a.isLoading
          ? { bLoadingNominationForCategory: !0 }
          : {
              currentNomination:
                null === (t = a.data) || void 0 === t
                  ? void 0
                  : t.find((t) => t.category_id == e),
              bLoadingNominationForCategory: !1,
            };
      }
      function C(e) {
        const t = (0, l.bY)();
        return (0, d.useQuery)(
          `SteamAwardBadgeProgress_${e}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              const a = i.gA.Init(r.d4);
              a.Body().set_badgeid(e), a.Body().set_steamid(m.L7.steamid);
              return (yield r.lk.GetCommunityBadgeProgress(t, a))
                .Body()
                .toObject();
            }),
          {
            initialData: () => {
              var e;
              return null === (e = A()) || void 0 === e
                ? void 0
                : e.badge_progress;
            },
            enabled: m.L7.logged_in,
          },
        );
      }
      function y(e) {
        const t = (0, l.bY)();
        return (0, d.useQuery)(
          `SteamAwardSuggestions_${e}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              const a = i.gA.Init(s.L8);
              a.Body().set_category_id(e);
              return (yield s.tQ.GetNominationRecommendations(t, a))
                .Body()
                .toObject();
            }),
          { staleTime: 1 / 0 },
        );
      }
      function f(e, t, a, o) {
        const r = (0, l.bY)(),
          c = (0, d.useQueryClient)();
        return (0, d.useMutation)(
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              return yield (function (e, t, a, o) {
                return (0, n.mG)(this, void 0, void 0, function* () {
                  const n = i.gA.Init(s.Fz);
                  n.Body().set_category_id(a),
                    n.Body().set_source(o),
                    n.Body().set_nominated_id(t);
                  const r = yield s.tQ.Nominate(e, n);
                  return (
                    r.BSuccess() ||
                      console.warn(`Failed to nominate app: ${r.GetEResult()}`),
                    [r.GetEResult(), r.Body().toObject()]
                  );
                });
              })(r, e, t, a);
            }),
          {
            onSuccess([e, t]) {
              1 == e
                ? (function (e, t) {
                    e.setQueryData(
                      `SteamAwardNominations_${m.L7.accountid}`,
                      t,
                    );
                  })(c, t.nominations)
                : o && o(e);
            },
            onError() {
              o && o();
            },
          },
        );
      }
      function N(e, t) {
        return (0, d.useQuery)(
          [e, t.voteid],
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              return yield (function (e, t) {
                var a;
                return (0, n.mG)(this, void 0, void 0, function* () {
                  let n = {
                    cc: m.De.COUNTRY,
                    l: m.De.LANGUAGE,
                    realm: o.IN.k_ESteamRealmGlobal,
                    origin: self.origin,
                    f: "jsonfull",
                    term: e.replace(" ", "+"),
                    require_type: "game",
                    is_released_somewhere: 1,
                    excluded_tags: u.jg.Get().GetExcludedTagsSortedByID(),
                    excluded_content_descriptors:
                      u.jg.Get().ExcludedContentDescriptor,
                    excluded_apps: [230410, 271590, 730, 105600, 1091500],
                  };
                  t.release_date_max &&
                    (n.release_date_max = new Date(
                      1e3 * t.release_date_max,
                    ).toISOString()),
                    t.release_date_min &&
                      (n.release_date_min = new Date(
                        1e3 * t.release_date_min,
                      ).toISOString()),
                    1 == t.flag && (n.vrsupport = 1),
                    2 == t.flag && (n.steam_deck_compat_categories = [0, 2, 3]);
                  const i = `${m.De.STORE_BASE_URL}search/suggest`,
                    r = yield v().get(i, { params: n, withCredentials: !0 });
                  return null !== (a = r.data) && void 0 !== a ? a : [];
                });
              })(e, t);
            }),
          { staleTime: 1 / 0 },
        );
      }
      function D(e, t) {
        return (0, n.mG)(this, void 0, void 0, function* () {
          const a = i.gA.Init(s.m3);
          a.Body().set_generate_new(t);
          const n = yield s.tQ.GetNominationShareLink(e, a);
          return (
            n.BSuccess() ||
              console.warn(
                `Failed to GetNominationShareLink: ${n.GetEResult()}`,
              ),
            [n.GetEResult(), n.Body().toObject()]
          );
        });
      }
      function T() {
        const e = (0, l.bY)();
        return (0, d.useQuery)(
          `GetNominationShareLink_${m.L7.accountid}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              return D(e, !1);
            }),
          {
            initialData: () => {
              var e;
              return [
                1,
                null === (e = A()) || void 0 === e ? void 0 : e.share_link,
              ];
            },
            staleTime: 1 / 0,
            enabled: m.L7.logged_in,
          },
        );
      }
      function G() {
        const e = (0, l.bY)(),
          t = (0, d.useQueryClient)();
        return (0, d.useMutation)(
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              return yield D(e, !0);
            }),
          {
            onSuccess([e, a]) {
              1 == e &&
                t.setQueryData(`GetNominationShareLink_${m.L7.accountid}`, [
                  e,
                  a,
                ]);
            },
          },
        );
      }
    },
    4795: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          ConfirmOverwriteVoteOrNominationDialog: () => M,
          EventDisplaySteamAwardNomination: () => b,
          EventDisplaySteamAwardVote: () => O,
          UserEligibleToNominateOrVote: () => V,
          WinterSaleSteamAwardVoteWrapper: () => F,
          default: () => R,
        });
      var n = a(33940),
        o = a(52868),
        i = a.n(o),
        r = a(59621),
        s = a(83315),
        d = a(88464),
        l = a(89526),
        m = a(85651),
        c = a(42977),
        u = a(92616),
        g = a(25871),
        v = a(57605),
        p = a(17318),
        S = a.n(p),
        _ = a(58218),
        A = a(23217),
        w = a(19304),
        h = a(14826),
        E = a(4306),
        C = a(207),
        y = a(32765),
        f = a(99307),
        N = a(57742),
        D = a(69338),
        T = a(5557),
        G = a(6864),
        L = a.n(G),
        k = a(32905);
      function V(e) {
        return y.L7.logged_in
          ? !y.L7.is_limited ||
              ((0, N.AM)(
                l.createElement(T.r, {
                  strTokenOverride: e
                    ? "#SteamAward_Vote_LimitedAccount"
                    : "#SteamAward_Nominate_LimitedAccount",
                }),
                window,
              ),
              !1)
          : ((0, N.AM)(
              l.createElement(f.uH, {
                strTitle: (0, h.Xx)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, h.Xx)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, h.Xx)("#MobileLogin_SignIn"),
                onOK: k.X,
              }),
              window,
            ),
            !1);
      }
      function I(e, t) {
        var a, o;
        return (0, n.mG)(this, void 0, void 0, function* () {
          const n =
              y.De.STORE_BASE_URL + "steamawards/ajaxgetsteamawardeventdetails",
            r = {
              rgCategories: e,
              t:
                ((s = m.JW.GetTimeNowWithOverride()),
                new Date(1e3 * s).toISOString().slice(0, 19).replace("T", " ")),
            };
          var s;
          try {
            const e = yield i().get(n, {
              params: r,
              withCredentials: !1,
              cancelToken: t.token,
            });
            if (t.token.reason) return null;
            if (
              1 ==
                (null === (a = null == e ? void 0 : e.data) || void 0 === a
                  ? void 0
                  : a.success) &&
              (null === (o = null == e ? void 0 : e.data) || void 0 === o
                ? void 0
                : o.event_details)
            )
              return e.data.event_details;
          } catch (e) {
            const t = (0, A.l)(e);
            console.error(
              "Could not fetch award event details:" + t.strErrorMsg,
              t,
            );
          }
          return null;
        });
      }
      const B = { include_assets: !0 };
      function b(e) {
        var t, a;
        const { event: n, lang: o, previewMode: i } = e,
          [r] = (0, s.SZ)(() => [n.GetSteamAwardCategory()]),
          d = (0, _.T)("EventDisplaySteamAwardNomination"),
          [u, g] = (0, l.useState)(null),
          { currentNomination: v, bLoadingNominationForCategory: p } = (0,
          c.NL)(r);
        if (
          ((0, l.useEffect)(() => {
            I([r], d).then((e) => {
              g(e);
            });
          }, [d, r]),
          !u ||
            !(null === (t = u.rgAwardCategoryDetails) || void 0 === t
              ? void 0
              : t.length) ||
            p)
        )
          return l.createElement(D.V, {
            size: "small",
            position: "center",
            string: (0, h.Xx)("#Loading"),
          });
        const A = m.JW.GetTimeNowWithOverride();
        if (!i && !u.bIsAutumnSaleActive)
          return l.createElement(
            "div",
            { className: L().ExpiredEventHeader },
            " ",
            (0, h.Xx)("#SteamAwards_ExpiredEvent"),
            " ",
          );
        let E = {};
        u.strBackgroundCSS.length && (E.backgroundColor = u.strBackgroundCSS),
          u.strBackgroundImage.length &&
            (E.backgroundImage = `url( ${u.strBackgroundImage} )`);
        const f =
            1 ==
            (null === (a = u.rgAwardCategoryDetails) || void 0 === a
              ? void 0
              : a.length),
          N =
            n.BIsEventActionEnabled() || A < n.GetStartTimeAndDateUnixSeconds(),
          T = new Date().getFullYear();
        return l.createElement(
          "div",
          {
            style: E,
            className: (0, w.Z)(L().SteamAwardContainer, S().PartnerEventFont),
          },
          l.createElement(
            "div",
            { className: L().SteamAwardHeader },
            l.createElement("img", {
              className: L().SteamAwardHeaderImage,
              src: `${u.strTrophyImg}`,
            }),
            l.createElement(
              "div",
              { className: L().SteamAwardMainCtn },
              l.createElement(
                "div",
                { className: L().SteamAwardMainTitle },
                (0, h.Xx)("#SteamAwards_EventMainTitle"),
              ),
              l.createElement(
                "div",
                { className: L().SteamAwardSubTitle },
                N
                  ? (0, h.Xx)("#SteamAwards_EventCallToAction")
                  : (0, h.Xx)("#SteamAwards_EventVotingDateTeaser", T),
                N &&
                  l.createElement(
                    "a",
                    {
                      href: (0, C.bk)(
                        y.De.STORE_BASE_URL + "steamawards/nominations/",
                      ),
                      className: L().SteamAwardLearnMore,
                    },
                    "(",
                    (0, h.Xx)("#EventDisplay_CallToAction_LearnMore"),
                    ")",
                  ),
              ),
              l.createElement(
                "div",
                { className: L().SteamAwardHeaderText },
                N
                  ? f
                    ? (0, h.Xx)(
                        "#SteamAwards_EventNominateGamePrompt_Long",
                        n.GetGameTitle(o),
                      )
                    : l.createElement(
                        "a",
                        {
                          className: L().LinkText,
                          href: (0, C.bk)(
                            y.De.STORE_BASE_URL + "steamawards/nominations/",
                          ),
                        },
                        (0, h.Xx)(
                          "#SteamAwards_EventNominateGamePrompt_NoCategory",
                          n.GetGameTitle(o),
                        ),
                      )
                  : (0, h.Xx)("#SteamAwards_Event_NominationsClosed"),
              ),
            ),
          ),
          l.createElement(x, {
            event: n,
            nominationEventDetails: u,
            currentNomination: v,
          }),
        );
      }
      function x(e) {
        var t;
        const { event: a, nominationEventDetails: o, currentNomination: i } = e,
          [r, d] = (0, s.SZ)(() => [a.GetSteamAwardCategory(), a.appid]),
          u = null == i ? void 0 : i.appid,
          g = (0, c.TW)(d, r, 0),
          p = Boolean(
            (null == i ? void 0 : i.appid) == d &&
              (null == i ? void 0 : i.category_id) == r,
          ),
          S = (0, l.useCallback)(
            (e) =>
              (0, n.mG)(this, void 0, void 0, function* () {
                if (!e)
                  return void console.log(
                    "EventDisplaySteamAwardNomination: ignore turning off the checkbox",
                  );
                if (!V(!1))
                  return void console.log(
                    "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                  );
                u && u != d
                  ? (0, N.AM)(
                      l.createElement(M, {
                        strLocTokenInfix: "Nomination",
                        newAppID: d,
                        curNominatedAppID: u,
                        fnOnConfirm: g.mutate,
                      }),
                      window,
                    )
                  : g.mutate();
              }),
            [u, d, g],
          ),
          _ = m.JW.GetTimeNowWithOverride(),
          A =
            1 ==
            (null === (t = o.rgAwardCategoryDetails) || void 0 === t
              ? void 0
              : t.length),
          E =
            a.BIsEventActionEnabled() || _ < a.GetStartTimeAndDateUnixSeconds();
        return A && (E || p)
          ? l.createElement(
              "div",
              { className: L().SteamAwardVoteWidget },
              l.createElement(
                "div",
                { className: L().NominateCtn },
                l.createElement(
                  "div",
                  {
                    style: {
                      background:
                        null == o ? void 0 : o.strNominateButtonBGColor,
                    },
                    className: (0, w.Z)(
                      L().SteamAwardNominateButton,
                      p && L().Nominated,
                    ),
                  },
                  l.createElement(v.ji, {
                    controlled: !0,
                    className: (0, w.Z)(
                      L().SteamAwardVoteCheckBox,
                      p && L().Nominated,
                    ),
                    checked: p,
                    onChange: S,
                    disabled: p,
                    color: "#FFFFFF",
                    highlightColor: "white",
                    label: l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(
                        "div",
                        { className: L().SteamAwardCategoryTitle },
                        p
                          ? (0, h.kQ)(
                              "#SteamAwards_NominateWidget_CTA_PastTense",
                              o.rgAwardCategoryDetails[0]
                                .strSuggestedCategoryTitle,
                            )
                          : (0, h.kQ)(
                              "#SteamAwards_NominateWidget_CTA",
                              o.rgAwardCategoryDetails[0]
                                .strSuggestedCategoryTitle,
                            ),
                      ),
                    ),
                  }),
                ),
                l.createElement(
                  "span",
                  { className: L().SteamAwardCategoryDesc },
                  o.rgAwardCategoryDetails[0].strSuggestedCategoryDesc,
                ),
              ),
              Boolean(E && r != o.eLaborOfLove) &&
                l.createElement(
                  "div",
                  { className: L().SteamAwardLinkToNominationPage },
                  l.createElement(
                    "a",
                    {
                      href: (0, C.bk)(
                        y.De.STORE_BASE_URL + "steamawards/nominations/",
                      ),
                    },
                    (0, h.Xx)(
                      "#SteamAwards_EventNominationAlternativeLinkText",
                    ),
                  ),
                ),
            )
          : null;
      }
      function M(e) {
        const {
            curNominatedAppID: t,
            newAppID: a,
            strLocTokenInfix: n,
            fnOnConfirm: o,
            fnOnCancel: i,
            closeModal: r,
          } = e,
          [s] = (0, g.vs)(t, B),
          [d] = (0, g.vs)(a, B);
        return l.createElement(
          f.uH,
          {
            modalClassName: L().SteamAwardConflictModal,
            strTitle: (0, h.Xx)(`#SteamAward_${n}ConflictWarning_Title`),
            strDescription: (0, h.kQ)(
              `#SteamAward_${e.strLocTokenInfix}ConflictWarning_Explanation`,
              l.createElement(
                "span",
                { className: L().SteamAwardModalGameTitle },
                null == s ? void 0 : s.GetName(),
              ),
              l.createElement(
                "span",
                { className: L().SteamAwardModalGameTitle },
                null == d ? void 0 : d.GetName(),
              ),
            ),
            closeModal: r,
            onOK: o,
            onCancel: i,
          },
          Boolean(!s || !d)
            ? l.createElement(D.V, {
                size: "small",
                position: "center",
                string: (0, h.Xx)("#Loading"),
              })
            : l.createElement(
                "div",
                { className: L().NominationSwitchCtn },
                l.createElement("img", {
                  src: s.GetAssets().GetSmallCapsuleURL(),
                }),
                "→",
                l.createElement("img", {
                  src: d.GetAssets().GetSmallCapsuleURL(),
                }),
              ),
        );
      }
      let O = class extends l.Component {
        constructor(e) {
          super(e),
            (this.state = { eCategoryLoaded: null, votedForAppID: null }),
            (this.m_strPreviousVotedForAppTitle = null),
            (this.m_cancelSignal = i().CancelToken.source()),
            (0, r.rC)(this);
        }
        componentDidMount() {
          this.FetchVoteState();
        }
        componentDidUpdate() {
          this.props.eVoteCategory != this.state.eCategoryLoaded &&
            this.FetchVoteState();
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "EventDisplaySteamAwardVote is being unmounted",
          );
        }
        FetchVoteState() {
          var e;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = y.De.STORE_BASE_URL + "steamawards/ajaxgetuservotes";
            if (y.L7.logged_in)
              try {
                const a = yield i().get(t, {
                  withCredentials: !0,
                  cancelToken: this.m_cancelSignal.token,
                });
                if (this.m_cancelSignal.token.reason) return;
                1 ==
                  (null === (e = null == a ? void 0 : a.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                  a.data.votes &&
                  this.UpdateVoteState(a.data.votes);
              } catch (e) {
                const t = (0, A.l)(e);
                console.error(
                  "Could not fetch previous votes:" + t.strErrorMsg,
                  t,
                );
              }
            else this.UpdateVoteState([]);
          });
        }
        UpdateVoteState(e) {
          var t;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a = this.props.eVoteCategory,
              n = e[a];
            if (
              (this.setState({ eCategoryLoaded: a, votedForAppID: n }),
              n && n != this.props.appID)
            ) {
              if (
                (yield u.Z.Get().QueueAppRequest(n, {}),
                this.m_cancelSignal.token.reason)
              )
                return;
              this.props.eVoteCategory == a &&
                (this.m_strPreviousVotedForAppTitle =
                  null === (t = u.Z.Get().GetApp(n)) || void 0 === t
                    ? void 0
                    : t.GetName());
            }
          });
        }
        OnVoteClick() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const e = this.props.eVoteCategory;
            if (e != this.state.eCategoryLoaded) return;
            if (!V(!0)) return;
            const t = this.props.appID;
            this.state.votedForAppID && this.state.votedForAppID != t
              ? this.HandleConflict(() => this.SaveVote(e, t))
              : this.SaveVote(e, t);
          });
        }
        HandleConflict(e) {
          const t = u.Z.Get().GetApp(this.props.appID);
          (0, N.AM)(
            l.createElement(M, {
              strLocTokenInfix: "Vote",
              newAppID: null == t ? void 0 : t.GetAppID(),
              curNominatedAppID: this.state.votedForAppID,
              fnOnConfirm: e,
              fnOnCancel: () => {},
            }),
            window,
          );
        }
        SaveVote(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              (this.setState({ eCategoryLoaded: e, votedForAppID: t }),
              this.props.previewMode && 1 == y.De.EUNIVERSE)
            )
              return;
            const a = y.De.STORE_BASE_URL + "steamawards/ajaxvoteforgame",
              n = new URLSearchParams();
            n.append("sessionid", y.De.SESSIONID),
              n.append("categoryid", e.toString()),
              n.append("appid", t.toString());
            try {
              const e = yield i().post(a, n, {
                withCredentials: !0,
                cancelToken: this.m_cancelSignal.token,
              });
              if (this.m_cancelSignal.token.reason) return;
              (e && 200 == e.status && 1 == e.data.success) ||
                console.error("Vote request failed.", e && (0, A.l)(e));
            } catch (e) {
              const t = (0, A.l)(e);
              console.error("SaveVote failed: " + t.strErrorMsg, t);
            }
          });
        }
        render() {
          const e = this.props.eVoteCategory,
            t =
              this.state.eCategoryLoaded == e &&
              this.state.votedForAppID == this.props.appID;
          return this.props.bIsEventActionEnabled || this.props.previewMode || t
            ? l.createElement(
                "div",
                { className: (0, w.Z)(L().SteamAwardVoteWidget) },
                l.createElement("div", { className: L().SteamAwardVotePrompt }),
                l.createElement(
                  "div",
                  { className: L().SteamAwardVoteButtonArea },
                  l.createElement(
                    "div",
                    {
                      className: (0, w.Z)(
                        L().SteamAwardCategoryTitle,
                        L().VotingTitle,
                      ),
                    },
                    this.props.strCategoryTitle,
                  ),
                  !this.props.bRenderFromStorePage &&
                    l.createElement(
                      "span",
                      { className: L().SteamAwardCategoryDesc },
                      this.props.strCategoryDesc,
                    ),
                  t
                    ? l.createElement(
                        "div",
                        { className: L().SteamAwardVoteButtonSubmitted },
                        l.createElement(
                          "span",
                          { className: L().SteamAwardVoteButtonText },
                          (0, h.Xx)("#SteamAward_VoteButton_VotedText"),
                        ),
                      )
                    : l.createElement(
                        "button",
                        {
                          className: L().SteamAwardVoteButton,
                          onClick: this.OnVoteClick,
                        },
                        l.createElement(
                          "span",
                          { className: L().SteamAwardVoteButtonText },
                          (0, h.Xx)("#SteamAward_VoteButton_PromptText"),
                        ),
                      ),
                ),
              )
            : null;
        }
      };
      (0, n.gn)([r.LO], O.prototype, "m_strPreviousVotedForAppTitle", void 0),
        (0, n.gn)([E.ak], O.prototype, "OnVoteClick", null),
        (0, n.gn)([E.ak], O.prototype, "SaveVote", null),
        (O = (0, n.gn)([d.Pi], O));
      class R extends l.Component {
        constructor(e) {
          super(e);
          let t = (0, y.kQ)("steamwawards", "application_config");
          this.m_voteCategories = null == t ? void 0 : t.votecategories;
        }
        render() {
          return this.m_voteCategories
            ? l.createElement(F, {
                appID: this.props.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: this.m_voteCategories,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${this.props.appID}`,
              ),
              null);
        }
      }
      let F = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_cancelSignal = i().CancelToken.source()),
            (this.m_awardEventDetails = null),
            (0, r.rC)(this),
            (this.state = { bAppInfoLoaded: !1 });
        }
        componentDidMount() {
          u.Z.Get()
            .QueueAppRequest(this.props.appID, {})
            .then(() => {
              u.Z.Get().BHasApp(this.props.appID) &&
                this.setState({ bAppInfoLoaded: !0 });
            }),
            I(this.props.voteCategories, this.m_cancelSignal).then((e) => {
              this.m_awardEventDetails = e;
            });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "WinterSaleSteamAwardVoteWrapper is being unmounted",
          );
        }
        GetNominatedAwardCategories() {
          var e;
          let t = [];
          return (
            null === (e = this.m_awardEventDetails.rgAwardCategoryDetails) ||
              void 0 === e ||
              e.forEach((e) => {
                t.push(
                  l.createElement(
                    O,
                    Object.assign(
                      {
                        key: e.eSteamAwardCategoryID,
                        eVoteCategory: e.eSteamAwardCategoryID,
                        strCategoryDesc: e.strSuggestedCategoryDesc,
                        strCategoryTitle: e.strSuggestedCategoryTitle,
                      },
                      this.props,
                    ),
                  ),
                );
              }),
            t
          );
        }
        render() {
          var e;
          if (!this.state.bAppInfoLoaded || !this.props.voteCategories)
            return null;
          if (!this.m_awardEventDetails) return null;
          let t = {};
          return (
            this.m_awardEventDetails.strBackgroundCSS.length &&
              (t.backgroundColor = this.m_awardEventDetails.strBackgroundCSS),
            this.m_awardEventDetails.strBackgroundImage.length &&
              (t.backgroundImage = `url( ${this.m_awardEventDetails.strBackgroundImage} )`),
            l.createElement(
              "div",
              {
                style: t,
                className: (0, w.Z)(
                  L().SteamAwardContainer,
                  S().PartnerEventFont,
                ),
              },
              l.createElement(
                "div",
                { className: L().SteamAwardHeader },
                l.createElement("img", {
                  className: L().SteamAwardHeaderImage,
                  src: this.m_awardEventDetails.strTrophyImg,
                }),
                l.createElement(
                  "div",
                  { className: L().SteamAwardMainCtn },
                  l.createElement(
                    "div",
                    { className: L().SteamAwardMainTitle },
                    " ",
                    (0, h.Xx)("#SteamAwards_EventMainTitleCombined"),
                    " ",
                  ),
                  l.createElement(
                    "div",
                    { className: L().SteamAwardHeaderText },
                    this.props.bIsEventActionEnabled
                      ? l.createElement(
                          l.Fragment,
                          null,
                          (0, h.Xx)(
                            "#SteamAwards_EventVoteForGamePrompt",
                            null === (e = u.Z.Get().GetApp(this.props.appID)) ||
                              void 0 === e
                              ? void 0
                              : e.GetName(),
                          ),
                          l.createElement(
                            "a",
                            {
                              href: (0, C.bk)(
                                y.De.STORE_BASE_URL + "steamawards/",
                              ),
                              className: (0, w.Z)(
                                L().SteamAwardLearnMore,
                                L().BottomRight,
                              ),
                            },
                            (0, h.Xx)("#EventDisplay_CallToAction_LearnMore"),
                          ),
                        )
                      : l.createElement(
                          "a",
                          {
                            href: (0, C.bk)(
                              y.De.STORE_BASE_URL + "steamawards/",
                            ),
                            className: L().LinkText,
                          },
                          (0, h.Xx)("#SteamAwards_Event_VotesClosed"),
                        ),
                  ),
                  l.createElement(
                    "div",
                    { className: L().AwardCategoriesCtn },
                    this.GetNominatedAwardCategories(),
                  ),
                ),
              ),
            )
          );
        }
      };
      (0, n.gn)([r.LO], F.prototype, "m_awardEventDetails", void 0),
        (F = (0, n.gn)([d.Pi], F));
    },
  },
]);
