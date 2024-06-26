/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1501],
  {
    47643: (e) => {
      e.exports = {
        smallentrywidth: "600px",
        optionswrapwidth: "777px",
        App: "_1DD-MN6M7fw9v4AEfy9VBS",
        Login: "_1hgW6B71pwJWHd34-SX7hq",
        Text: "_22sY8U8gQnI5A51kM3WFa9",
        LeftColumn: "_1I3G6fPqwwJ-oidGEVLoH2",
        ResultContainer: "_14xwk8-XHnHe6u_VgydVPK",
        MixerControls: "b9a7bAiOQdFEDFZ6mxkus",
        MixedItemList: "_3YeB68JcA4gQ-LDn4XBBny",
        Buttons: "_12dKZPgTxdY6HL7qTDFxEk",
        AddContainer: "zXPoPAhJfwmjV_nOL7SV_",
        InputLabel: "_2DGMshGWHwcXDbedaNIwA3",
        AddButtons: "ymONm5807X-v0sovL8HEj",
        MixerResults: "_1ZBMj31m_Y-GRPsCNPChA7",
        MixedResultApp: "x9B1cXIAi6vYDog2fs0e6",
        Logo: "aDp4xH1r3sii_t4UQehdT",
        RightSide: "_1lwaOX2enleYKfev0vfeua",
        AppName: "_3efVXI0E-Vd_yFdJS2F1hU",
        Distance: "_1kAkW_FkMQ4A6_bnjzCCHM",
        MixedItemControl: "zYBuUWMEj30dPwlkjPvja",
        Remove: "_2COEoqCO8NeThLNPNJCuAQ",
        MixerSlider: "_3Hw6l9Am6kQRPTDVY700Hb",
        PopularitySlider: "_5Z1ekC71ZkBjb8t6fB8Pg",
        AppSelector: "_3QPViwZln3xT160uthGacu",
        AppSelectorResults: "_1Mbwa8U5EIl-BVfj95I14m",
        Result: "ovwUTP2fvFxOe1Fg7gjH9",
        Selected: "_3Xj5n6rpZvxSYAZ0OZFylh",
      };
    },
    80212: (e, t, n) => {
      "use strict";
      n.d(t, { Xt: () => d, _I: () => I, hx: () => p });
      var a = n(47427),
        r = n(90069),
        s = n(31846),
        i = n(37563),
        c = n(99327),
        l = n(22791),
        o = n(35791),
        m = n(27438);
      function u(e) {
        return a.createElement(
          r.e1,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          a.createElement(x, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function p(e) {
        const { redirectURL: t = window.location.href } = e;
        return a.createElement(
          m.Yy,
          { active: !0 },
          a.createElement(u, { redirectURL: t }),
        );
      }
      function d() {
        (0, r.AM)(
          a.createElement(u, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, s.Xx)("#Login_SignInTitle") },
        );
      }
      function I(e, t) {
        (0, r.AM)(
          a.createElement(u, {
            ownerWin: window,
            redirectURL: e,
            guestOption: t,
          }),
          window,
          { strTitle: (0, s.Xx)("#Login_SignInTitle") },
        );
      }
      function x(e) {
        const { redirectURL: t, guestOption: n } = e,
          [r] = (0, a.useState)(
            new l.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [s, m] = (0, a.useState)(!1);
        return a.createElement(
          "div",
          null,
          s
            ? a.createElement(c.pT, null)
            : a.createElement(
                c.wK,
                {
                  autoFocus: !0,
                  transport: r,
                  platform: 2,
                  onComplete: (e) => {
                    e == o.TG.k_PrimaryDomainFail
                      ? m(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                n && a.createElement(c.bU, { redirectURL: t }),
              ),
        );
      }
    },
    19044: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => P });
      var a = n(80751),
        r = n.n(a),
        s = n(37563),
        i = n(42718);
      async function c(e) {
        let t = { accountid: e, sessionid: s.De.SESSIONID };
        const n = (
          await r().get(`${s.De.STORE_BASE_URL}gamemixer/uservalues`, {
            params: t,
            withCredentials: !0,
            timeout: 1e4,
          })
        ).data;
        if (n) return n.map(Number);
        throw "Failed FetchUserValues";
      }
      async function l(e) {
        let t = { appid: e, sessionid: s.De.SESSIONID };
        const n = (
          await r().get(`${s.De.STORE_BASE_URL}gamemixer/appvalues`, {
            params: t,
            withCredentials: !0,
            timeout: 1e4,
          })
        ).data;
        if (n) return n.map(Number);
        throw "Failed FetchAppValues";
      }
      function o(e) {
        return (0, i.useQuery)(
          ["GameMixerAppInfo", e],
          () =>
            (async function (e) {
              let t = { appid: e, sessionid: s.De.SESSIONID };
              const n = (
                await r().get(`${s.De.STORE_BASE_URL}gamemixer/details`, {
                  params: t,
                  withCredentials: !0,
                  timeout: 1e4,
                })
              ).data;
              if (n) return n;
              throw "Failed FetchAppInfo";
            })(e),
          { staleTime: 1 / 0 },
        );
      }
      var m = n(47427),
        u = n(1485),
        p = n(80212),
        d = n(25006),
        I = n(13129),
        x = n(31846),
        f = n(47643),
        D = n(40057),
        E = n(79545),
        y = n(44922),
        S = n(80998);
      const h = (e) => {
          const t = (function (e) {
              const t = (0, D.bY)(),
                n = ["GameMixerSearchSuggestions", e];
              return (0, i.useQuery)(n, {
                queryFn: async () => {
                  if (e.length < 2) return [];
                  const a = E.gA.Init(y.yk);
                  a.Body().set_query_name(JSON.stringify(n)),
                    a.Body().set_search_term(e),
                    (0, S.pA)(a),
                    (0, S.De)(a, {
                      include_basic_info: !0,
                      include_assets: !0,
                    }),
                    (0, S.Gk)(a, {
                      type_filters: { include_games: !0 },
                      price_filters: { only_free_items: !1 },
                    }),
                    a.Body().set_max_results(10),
                    a.Body().set_use_spellcheck(!0);
                  let r = await y.Ax.SearchSuggestions(t, a);
                  return r.BSuccess()
                    ? r
                        .Body()
                        .store_items()
                        .map((e) => {
                          const t = e.name().replace(/^The |^A |^An /i, "");
                          return {
                            appid: e.appid(),
                            name: e.name(),
                            sort_as: t,
                            capsule_filename: e.assets().library_capsule(),
                            img_icon_hash: e.assets().community_icon(),
                            searchSuggestion: !0,
                          };
                        })
                    : [];
                },
                keepPreviousData: !0,
              });
            })(e.strSearch),
            n = e.fnSetResultApps;
          return (
            m.useEffect(() => {
              n(t.data?.map((e) => e.appid));
            }, [n, t.data]),
            m.createElement(
              "div",
              { className: f.AppSelectorResults },
              t.data?.map((t, n) =>
                m.createElement(
                  "div",
                  {
                    key: t.appid,
                    className: (0, I.Z)(
                      f.Result,
                      n == e.nSelectedResult && f.Selected,
                    ),
                    onClick: () => e.fnClickApp(t.appid),
                  },
                  m.createElement("div", {
                    className: f.Logo,
                    style: {
                      backgroundImage: `url( ${s.De.STORE_ICON_BASE_URL}${t.appid}/capsule_231x87.jpg )`,
                    },
                  }),
                  m.createElement("div", { className: f.RightSide }, t.name),
                ),
              ),
            )
          );
        },
        g = (e) => {
          const [t, n] = m.useState(""),
            [a, r] = m.useState(0),
            [s, i] = m.useState(!1),
            [c, l] = m.useState(0),
            [o, u] = m.useState([]),
            p = m.useRef(a);
          m.useEffect(() => {
            p.current = a;
          }, [a]);
          const d = () => {
              Date.now() - p.current < 300 || (l(0), u([]), i(!0));
            },
            x = (t) => {
              e.fnSelectAppID(t), n(""), l(0), u([]), r(Date.now()), i(!1);
            };
          return m.createElement(
            "div",
            { className: f.AppSelector },
            m.createElement("input", {
              type: "text",
              className: (0, I.Z)(f.ValueInput),
              value: t,
              onChange: (e) => {
                var a;
                (a = e.target.value) != t &&
                  (n(a), r(Date.now()), i(!1), setTimeout(d, 300));
              },
              onKeyDown: (e) =>
                ((e) => {
                  switch (e) {
                    case "ArrowDown":
                      l(Math.min(o.length - 1, c + 1));
                      break;
                    case "ArrowUp":
                      l(Math.max(0, c - 1));
                      break;
                    case "Enter":
                      x(o[c]);
                  }
                })(e.key),
            }),
            s &&
              m.createElement(h, {
                strSearch: t,
                nSelectedResult: c,
                fnSetResultApps: u,
                fnClickApp: x,
              }),
          );
        };
      var A;
      !(function (e) {
        (e[(e.AppID = 0)] = "AppID"), (e[(e.AccountID = 1)] = "AccountID");
      })(A || (A = {}));
      const _ = (e) => {
          const [t, n] = m.useState(e.mixItem.nPercent);
          m.useEffect(() => {
            n(e.mixItem.nPercent);
          }, [e.mixItem.nPercent]);
          const a = o(e.mixItem.nID),
            r = a.data ? a.data.name : "";
          return m.createElement(
            "div",
            { className: f.MixedItemControl },
            m.createElement(u.DS, {
              className: f.MixerSlider,
              label: r,
              min: 1,
              max: 99,
              value: t,
              onChange: (t) => {
                e.bLocked || n(t);
              },
              onChangeComplete: (t) => {
                e.bLocked ||
                  e.setMixItem({
                    eType: e.mixItem.eType,
                    nID: e.mixItem.nID,
                    nPercent: t,
                  });
              },
            }),
            m.createElement(
              "div",
              {
                className: f.Remove,
                onClick: () => {
                  e.removeMixItem({
                    eType: e.mixItem.eType,
                    nID: e.mixItem.nID,
                    nPercent: 0,
                  });
                },
              },
              "Remove",
            ),
          );
        },
        w = (e) => {
          const [t, n] = m.useState(e.mixItem.nPercent);
          m.useEffect(() => {
            n(e.mixItem.nPercent);
          }, [e.mixItem.nPercent]);
          return m.createElement(
            "div",
            { className: f.MixedItemControl },
            m.createElement(u.DS, {
              className: f.MixerSlider,
              label: `Account ${e.mixItem.nID}`,
              min: 1,
              max: 99,
              value: t,
              onChange: (t) => {
                e.bLocked || n(t);
              },
              onChangeComplete: (t) => {
                e.bLocked ||
                  e.setMixItem({
                    eType: e.mixItem.eType,
                    nID: e.mixItem.nID,
                    nPercent: t,
                  });
              },
            }),
          );
        },
        M = (e) => {
          const [t, n] = m.useState(""),
            a = (t) => {
              let n = [],
                a = 0,
                r = 0;
              for (const n of e.arrMixItems)
                if (n.eType == t.eType && n.nID == t.nID) {
                  (a = n.nPercent), (r = t.nPercent - n.nPercent);
                  break;
                }
              let s = (100 - a - r) / (100 - a);
              for (const a of e.arrMixItems)
                (a.eType == t.eType && a.nID == t.nID) ||
                  n.push({
                    eType: a.eType,
                    nID: a.nID,
                    nPercent: a.nPercent * s,
                  });
              e.setMixItems(n);
            },
            r = (t) => {
              let n = [],
                a = 0,
                r = 0;
              for (const n of e.arrMixItems)
                if (n.eType == t.eType && n.nID == t.nID) {
                  (a = n.nPercent), (r = t.nPercent - n.nPercent);
                  break;
                }
              let s = (100 - a - r) / (100 - a);
              for (const a of e.arrMixItems)
                a.eType == t.eType && a.nID == t.nID
                  ? n.push(t)
                  : n.push({
                      eType: a.eType,
                      nID: a.nID,
                      nPercent: a.nPercent * s,
                    });
              e.setMixItems(n);
            };
          return m.createElement(
            "div",
            { className: f.MixerControls },
            e.arrMixItems.length > 0 &&
              m.createElement(
                "div",
                { className: f.MixedItemList },
                e.arrMixItems.map((t) => {
                  switch (t.eType) {
                    case A.AccountID:
                      return m.createElement(w, {
                        key: `${t.eType}_${t.nID}`,
                        mixItem: t,
                        setMixItem: r,
                        removeMixItem: a,
                        bLocked: 1 == e.arrMixItems.length,
                      });
                    case A.AppID:
                      return m.createElement(_, {
                        key: `${t.eType}_${t.nID}`,
                        mixItem: t,
                        setMixItem: r,
                        removeMixItem: a,
                        bLocked: 1 == e.arrMixItems.length,
                      });
                  }
                }),
              ),
            m.createElement(
              "div",
              { className: f.Buttons },
              m.createElement(
                "div",
                { className: f.AddContainer },
                m.createElement("div", { className: f.InputLabel }, "Add App"),
                m.createElement(g, {
                  fnSelectAppID: (t) =>
                    ((t) => {
                      if (0 == t) return;
                      const n = 100 / (e.arrMixItems.length + 1);
                      let a = { eType: A.AppID, nID: t, nPercent: n },
                        r = [];
                      for (const t of e.arrMixItems)
                        r.push({
                          eType: t.eType,
                          nID: t.nID,
                          nPercent: (t.nPercent * (100 - n)) / 100,
                        });
                      r.push(a), e.setMixItems(r);
                    })(t),
                }),
              ),
              m.createElement(
                "div",
                { className: f.AddContainer },
                m.createElement(
                  "div",
                  { className: f.InputLabel },
                  "Add AccountID",
                ),
                m.createElement("input", {
                  type: "text",
                  className: (0, I.Z)(f.ValueInput),
                  value: t,
                  onChange: (e) => n(e.target.value),
                  onKeyDown: (a) =>
                    ((a) => {
                      if ("Enter" != a || isNaN(Number(t))) return;
                      const r = 100 / (e.arrMixItems.length + 1);
                      let s = {
                          eType: A.AccountID,
                          nID: parseInt(t),
                          nPercent: r,
                        },
                        i = [];
                      for (const t of e.arrMixItems)
                        i.push({
                          eType: t.eType,
                          nID: t.nID,
                          nPercent: (t.nPercent * (100 - r)) / 100,
                        });
                      i.push(s), e.setMixItems(i), n("");
                    })(a.key),
                }),
              ),
              m.createElement(T, {
                nValue: e.nPopularity,
                setValue: e.setPopularity,
                strName: "Popularity",
              }),
              m.createElement(T, {
                nValue: e.nFocus,
                setValue: e.setFocus,
                strName: "Focus",
              }),
            ),
          );
        },
        v = (e) => {
          const t = o(e.nAppID);
          if (!t.data || "Uninitialized" == t.data.name) return null;
          return m.createElement(
            "a",
            {
              className: f.MixedResultApp,
              href: `${s.De.STORE_BASE_URL}app/${e.nAppID}`,
              onMouseEnter: () => {},
              onMouseLeave: () => {},
            },
            m.createElement("div", {
              className: f.Logo,
              style: {
                backgroundImage: `url( ${s.De.STORE_ICON_BASE_URL}${e.nAppID}/header.jpg )`,
              },
            }),
            m.createElement(
              "div",
              { className: f.RightSide },
              m.createElement("div", { className: f.AppName }, t.data.name),
              m.createElement(
                "div",
                { className: f.Distance },
                Number(e.fDistance).toFixed(2),
              ),
            ),
          );
        },
        N = (e) => {
          const [t, n] = m.useState([]),
            [a, i] = m.useState([]);
          return (
            m.useEffect(() => {
              (async () => {
                let t = [];
                for (const n of e.arrMixItems)
                  switch (n.eType) {
                    case A.AppID:
                      t.push(l(n.nID));
                      break;
                    case A.AccountID:
                      t.push(c(n.nID));
                  }
                n(await Promise.all(t));
              })();
            }, [e.arrMixItems]),
            m.useEffect(() => {
              (async () => {
                if (0 == t.length) return;
                let n = new Array(t[0].length).fill(0);
                for (let a = 0; a < t.length; a++)
                  for (let r = 0; r < t[a].length; r++)
                    a < e.arrMixItems.length &&
                      (n[r] += (t[a][r] * e.arrMixItems[a].nPercent) / 100);
                i(
                  await (async function (e, t, n) {
                    let a = {
                      values: e.join(","),
                      popularity: t,
                      focus: n,
                      sessionid: s.De.SESSIONID,
                    };
                    const i = (
                      await r().get(`${s.De.STORE_BASE_URL}gamemixer/nearest`, {
                        params: a,
                        withCredentials: !0,
                        timeout: 1e4,
                      })
                    ).data;
                    if (i)
                      return i.map((e) => ({
                        nAppID: e.value,
                        fDistance: e.distance,
                      }));
                    throw "Failed FetchNearestToValues";
                  })(n, e.nPopularity, e.nFocus),
                );
              })();
            }, [t, e.nPopularity, e.arrMixItems, e.nFocus]),
            m.createElement(
              "div",
              { className: f.MixerResults },
              a?.length > 0 &&
                a.map((e) =>
                  m.createElement(v, {
                    key: e.nAppID,
                    nAppID: e.nAppID,
                    fDistance: e.fDistance,
                  }),
                ),
            )
          );
        },
        T = (e) => {
          const [t, n] = m.useState(e.nValue);
          return (
            m.useEffect(() => {
              n(e.nValue);
            }, [e.nValue]),
            m.createElement(u.DS, {
              className: (0, I.Z)(f.MixerSlider, f.PopularitySlider),
              label: e.strName,
              min: 1,
              max: 100,
              value: t,
              onChange: (e) => n(e),
              onChangeComplete: (t) => e.setValue(t),
            })
          );
        },
        P = () => {
          const [e, t] = m.useState([]),
            [n, a] = m.useState(1),
            [r, i] = m.useState(1);
          return s.L7.logged_in
            ? m.createElement(
                d.ZP,
                {
                  controller: "gamemixer",
                  method: "default",
                  feature: "capsule",
                },
                m.createElement(
                  "div",
                  { className: f.App },
                  m.createElement(M, {
                    arrMixItems: e,
                    setMixItems: t,
                    nPopularity: n,
                    setPopularity: a,
                    nFocus: r,
                    setFocus: i,
                  }),
                  m.createElement(N, {
                    arrMixItems: e,
                    nPopularity: n,
                    nFocus: r,
                  }),
                ),
              )
            : m.createElement(
                "div",
                { className: f.App },
                m.createElement(
                  "div",
                  { className: f.Login },
                  m.createElement(
                    "div",
                    { className: f.Text },
                    (0, x.Xx)("#LoginText"),
                  ),
                  m.createElement(
                    "div",
                    {
                      className: (0, I.Z)(
                        "btn_green_white_innerfade",
                        " btn_medium",
                      ),
                      onClick: p.Xt,
                    },
                    m.createElement("span", null, (0, x.Xx)("#LoginButton")),
                  ),
                ),
              );
        };
    },
  },
]);
