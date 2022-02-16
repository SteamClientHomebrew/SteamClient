/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    A8Lc: function (e, t, n) {
      e.exports = { ErrorMsg: "eventdetailview_ErrorMsg_1ZEL9" };
    },
    E9gz: function (e, t, n) {
      e.exports = {
        AnalysisCtn: "eventmoderation_AnalysisCtn_1YGfW",
        AnalysisMissing: "eventmoderation_AnalysisMissing_rH1Dt",
        ModerationContainer: "eventmoderation_ModerationContainer_4HRKp",
        FilterContainer: "eventmoderation_FilterContainer_qY07T",
        Tile: "eventmoderation_Tile_3oU1y",
        DetailsMiddle: "eventmoderation_DetailsMiddle_VcJpZ",
        EventModerateMarkReview:
          "eventmoderation_EventModerateMarkReview_1RqKA",
        EventModerateMarkReReview:
          "eventmoderation_EventModerateMarkReReview_qd-K7",
        TileEventOtherType: "eventmoderation_TileEventOtherType_3LUrW",
        TileCapsule: "eventmoderation_TileCapsule_36tP8",
        NoCapsuleFallback: "eventmoderation_NoCapsuleFallback_16oQL",
        NoCapsule: "eventmoderation_NoCapsule_1onVF",
        TileDetails: "eventmoderation_TileDetails_2mRup",
        DetailsLeft: "eventmoderation_DetailsLeft_1O0y5",
        EventTitle: "eventmoderation_EventTitle_3ahHd",
        DetailsRight: "eventmoderation_DetailsRight_2BaxW",
        ArtHeader: "eventmoderation_ArtHeader_38IkF",
        ArtSpotlight: "eventmoderation_ArtSpotlight_2oUPY",
        ModeratedFlagCtn: "eventmoderation_ModeratedFlagCtn_2JGGc",
        TitleLink: "eventmoderation_TitleLink_1OG__",
        TileAppInfo: "eventmoderation_TileAppInfo_2IJ__",
        TileAppInfoTitle: "eventmoderation_TileAppInfoTitle_2X75q",
        TileAppInfoImage: "eventmoderation_TileAppInfoImage_1rVmL",
        TileSplit: "eventmoderation_TileSplit_aaFuC",
        TileTitle: "eventmoderation_TileTitle_yJw1i",
        TimeWidth: "eventmoderation_TimeWidth_xSOgV",
        CategoryChangeDialog: "eventmoderation_CategoryChangeDialog_1VSAj",
        Button: "eventmoderation_Button_wu9Kr",
        RightSideTitles: "eventmoderation_RightSideTitles_XDAwD",
        DateAndTime: "eventmoderation_DateAndTime_2cW9N",
        StoreHeaderAdjust: "eventmoderation_StoreHeaderAdjust_3U7ja",
        LastUpdateTime: "eventmoderation_LastUpdateTime_2x7zH",
        EventTimingBlock: "eventmoderation_EventTimingBlock_31d_R",
        TileEventType: "eventmoderation_TileEventType_1z1xt",
        ChannelInfo: "eventmoderation_ChannelInfo_H__RK",
        HasAdultContent: "eventmoderation_HasAdultContent_2PcmC",
      };
    },
    WGPV: function (e, t, n) {
      e.exports = {
        SectionContainer: "rss_moderation_SectionContainer_3P-ff",
        ModSectionTitle: "rss_moderation_ModSectionTitle_2lc8m",
        ResizeButton: "rss_moderation_ResizeButton_29RNN",
        TileContainer: "rss_moderation_TileContainer_2D4XH",
        CreatorCtn: "rss_moderation_CreatorCtn_GKust",
        TileSpread: "rss_moderation_TileSpread_1s_El",
      };
    },
    Wym2: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "EventModerationLanding", function () {
          return Dt;
        }),
        n.d(t, "EventBackfillLanding", function () {
          return Mt;
        }),
        n.d(t, "EventSaleDisplay", function () {
          return jt;
        }),
        n.d(t, "EventCalendar", function () {
          return Rt;
        }),
        n.d(t, "EventDetailView", function () {
          return wt;
        }),
        n.d(t, "Events", function () {
          return Gt;
        }),
        n.d(t, "EventSteamGameFestivalDebug", function () {
          return Lt;
        }),
        n.d(t, "RssEnabledAccountDashboard", function () {
          return kt;
        }),
        n.d(t, "StoreSaleDisplay", function () {
          return Bt;
        });
      var a,
        r = n("q1tI"),
        o = n.n(r),
        i = n("daJ/"),
        l = n("mrSG"),
        s = n("vDqi"),
        c = n.n(s),
        d = n("2vnA"),
        u = n("TyAF"),
        p = (n("wd/R"), n("s4NR")),
        m = n.n(p),
        v = n("y2g3"),
        E = n.n(v),
        h = n("EC67"),
        _ = n("Cs6D"),
        b = n("kyHq"),
        f = n("3+zv"),
        g = n("kLLr"),
        S = n("U+Q5"),
        y = n("TQGK"),
        A = n("N0Ye"),
        O = n("f0Wu"),
        C = ["mod_reviewed", "auto_migrated"],
        T = (function () {
          function e() {
            (this.selectedTags = void 0),
              (this.excludedTags = void 0),
              (this.filterDate = void 0),
              (this.eventsToLoadPerPaging = 20),
              (this.filterEventTypes = void 0),
              (this.bOrderByVisibilityStartTime = !1),
              (this.bUseCustomQuery = !1);
          }
          return (
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.Init = function (e) {
              var t = this,
                n = m.a.parse(e.substring(1)),
                a = void 0;
              "string" == typeof n.selectedTags
                ? n.selectedTags.length > 0 &&
                  (a = [{ label: n.selectedTags, value: n.selectedTags }])
                : n.selectedTags &&
                  ((a = []),
                  n.selectedTags.forEach(function (e) {
                    return a.push({ label: e, value: e });
                  }));
              var r = !1,
                o = C.map(function (e) {
                  return { label: e, value: e };
                });
              "string" == typeof n.excludedTags
                ? n.excludedTags.length > 0 &&
                  ((r = !0),
                  (o = [{ label: n.excludedTags, value: n.excludedTags }]))
                : n.excludedTags &&
                  ((o = []),
                  n.excludedTags.forEach(function (e) {
                    return o.push({ label: e, value: e });
                  }),
                  (r = o && o.length > 0));
              var i = void 0;
              if ("string" == typeof n.eventtype) {
                if (n.eventtype.length > 0) {
                  var l = Number.parseInt(n.eventtype);
                  i = [{ label: Object(A.b)(l), value: l }];
                }
              } else
                n.eventtype &&
                  ((i = []),
                  n.eventtype.forEach(function (e) {
                    var t = Number.parseInt(e);
                    i.push({ label: Object(A.b)(t), value: t });
                  }));
              var s = void 0;
              "string" == typeof n.filterDate &&
                n.filterDate.length > 0 &&
                (s = O.unix(Number(n.filterDate)));
              var c = !1;
              "string" == typeof n.orderByVisibility &&
                n.orderByVisibility.length > 0 &&
                (c = Boolean(n.orderByVisibility)),
                Object(d.G)(function () {
                  (t.selectedTags = a),
                    (t.excludedTags = o),
                    (t.filterEventTypes = i),
                    (t.filterDate = s),
                    (t.bOrderByVisibilityStartTime = c),
                    (t.bUseCustomQuery =
                      (a && a.length > 0) || r || (i && i.length > 0));
                });
            }),
            Object(l.c)([d.C], e.prototype, "selectedTags", void 0),
            Object(l.c)([d.C], e.prototype, "excludedTags", void 0),
            Object(l.c)([d.C], e.prototype, "filterDate", void 0),
            Object(l.c)([d.C], e.prototype, "filterDateAsString", void 0),
            Object(l.c)([d.C], e.prototype, "eventsToLoadPerPaging", void 0),
            Object(l.c)([d.C], e.prototype, "filterEventTypes", void 0),
            Object(l.c)(
              [d.C],
              e.prototype,
              "bOrderByVisibilityStartTime",
              void 0
            ),
            Object(l.c)([d.C], e.prototype, "bUseCustomQuery", void 0),
            e
          );
        })(),
        I = n("mgoM"),
        D = (n("AiWL"), n("OS6B")),
        M = n("lkRc"),
        j = (function () {
          function e() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          return (
            (e.prototype.BHasSolrEvent = function (e) {
              return this.m_mapEventGIDToSolrData.has(e);
            }),
            (e.prototype.GetAllSolrEvents = function () {
              return this.m_listEvents;
            }),
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.ClearAllSolrEvents = function () {
              (this.m_mapEventGIDToSolrData = new Map()),
                (this.m_listEvents = new Array());
            }),
            (e.prototype.LoadPartnerEventForQueryIncremental = function (
              e,
              t,
              n,
              a,
              r,
              o,
              i,
              s,
              c
            ) {
              return (
                void 0 === t && (t = 0),
                void 0 === n && (n = 10),
                Object(l.b)(this, void 0, void 0, function () {
                  var u,
                    p,
                    m = this;
                  return Object(l.e)(this, function (l) {
                    switch (l.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(
                            e,
                            t,
                            n,
                            a,
                            r,
                            o,
                            i,
                            s,
                            c
                          ),
                        ];
                      case 1:
                        return (
                          (u = l.sent()),
                          (p = new Array()),
                          Object(d.G)(function () {
                            u.forEach(function (e) {
                              m.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                (p.push(e),
                                m.m_mapEventGIDToSolrData.set(e.unique_id, e),
                                m.m_listEvents.push(e));
                            });
                          }),
                          [2, p]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.GetLatestPartnerEvents = function (
              e,
              t,
              n,
              a,
              r,
              o,
              i,
              s,
              d,
              u,
              p,
              m
            ) {
              return (
                void 0 === t && (t = 0),
                void 0 === n && (n = 10),
                Object(l.b)(this, void 0, void 0, function () {
                  var v, E, h;
                  return Object(l.e)(this, function (l) {
                    switch (l.label) {
                      case 0:
                        return (
                          (v =
                            M.d.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (E = {
                            page: t,
                            count: n,
                            date: i,
                            appids: void 0 === a ? void 0 : a.join(","),
                            required_tags: void 0 === r ? void 0 : r.join(","),
                            exclude_tags: void 0 === o ? void 0 : o.join(","),
                            eventtypefilter:
                              void 0 === s ? void 0 : s.join(","),
                            orderByVisibility: d || void 0,
                            creator_home_clan_id:
                              void 0 === u ? void 0 : u.join(","),
                            showUnpublished: void 0 === m ? void 0 : m,
                            term: void 0 === p ? void 0 : p,
                          }),
                          [
                            4,
                            c.a.get(v, {
                              params: E,
                              withCredentials: !0,
                              cancelToken: e ? e.token : void 0,
                            }),
                          ]
                        );
                      case 1:
                        return [2, (h = l.sent()).data ? h.data.docs : []];
                    }
                  });
                })
              );
            }),
            Object(l.c)([d.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(l.c)([d.C], e.prototype, "m_listEvents", void 0),
            Object(l.c)([d.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })();
      !(function (e) {
        (e[(e.k_ModReviewed = 0)] = "k_ModReviewed"),
          (e[(e.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
          (e[(e.k_ChangeEventType = 2)] = "k_ChangeEventType"),
          (e[(e.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
          (e[(e.k_ModReReviewed = 4)] = "k_ModReReviewed"),
          (e[(e.k_ModRemovedFromSteamChina = 5)] =
            "k_ModRemovedFromSteamChina"),
          (e[(e.k_ModFlagAdultOnlyContent = 6)] = "k_ModFlagAdultOnlyContent"),
          (e[(e.k_ModRemoveAdultOnlyContent = 7)] =
            "k_ModRemoveAdultOnlyContent");
      })(a || (a = {}));
      var R = "ModAct",
        w = (function () {
          function e() {}
          return (
            (e.prototype.ToModString = function () {
              var e =
                "ModAct_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case a.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case a.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function (e) {
              var t = e.split("_");
              if (!t || t[0] !== R) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case a.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case a.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function (e) {
              return (
                (this.m_moderator = M.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = a.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function (e) {
              return (
                (this.m_moderator = M.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? a.k_ModReviewed : a.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetAdultOnlyContentAction = function (e) {
              return (
                (this.m_moderator = M.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e
                  ? a.k_ModFlagAdultOnlyContent
                  : a.k_ModRemoveAdultOnlyContent),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function (e) {
              return (
                (this.m_moderator = M.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? a.k_ModReReviewed : a.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function (e) {
              return e.startsWith(R);
            }),
            (e.prototype.SetUpdateSeasonalTags = function (e) {
              return (
                (this.m_moderator = M.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = a.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        G = (function () {
          function e() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          return (
            (e.prototype.BHasSolrEvent = function (e) {
              return this.m_mapEventGIDToSolrData.has(e);
            }),
            (e.prototype.GetAllSolrEvents = function () {
              return this.m_listEvents;
            }),
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.ClearAllSolrEvents = function () {
              (this.m_mapEventGIDToSolrData = new Map()),
                (this.m_listEvents = new Array());
            }),
            (e.prototype.LoadPartnerEventForModerationIncremental = function (
              e,
              t
            ) {
              var n;
              return (
                void 0 === t && (t = 30),
                Object(l.b)(this, void 0, void 0, function () {
                  var a,
                    r,
                    o,
                    i,
                    s,
                    u,
                    p,
                    m = this;
                  return Object(l.e)(this, function (l) {
                    switch (l.label) {
                      case 0:
                        (a =
                          M.d.STORE_BASE_URL +
                          "events_admin/ajaxgetmoderationspecificpartnerevents"),
                          (r = 0),
                          (null === (n = this.m_listEvents) || void 0 === n
                            ? void 0
                            : n.length) &&
                            (this.m_listEvents.forEach(function (e) {
                              return (r = Math.max(
                                r,
                                Math.floor(
                                  Date.parse(e.last_modified_date) / 1e3
                                )
                              ));
                            }),
                            this.m_listEvents.filter(function (e) {
                              return (
                                Math.floor(
                                  Date.parse(e.last_modified_date) / 1e3
                                ) == r
                              );
                            }).length >= t && r++),
                          (o = { start_time: r, count: t }),
                          (l.label = 1);
                      case 1:
                        return (
                          l.trys.push([1, 3, , 4]),
                          [
                            4,
                            c.a.get(a, {
                              params: o,
                              withCredentials: !0,
                              cancelToken: e ? e.token : void 0,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (i = l.sent()),
                          e && e.token.reason
                            ? [2, []]
                            : i && i.data
                            ? ((s = new Array()),
                              Object(d.G)(function () {
                                i.data.docs.forEach(function (e) {
                                  m.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                    (s.push(e),
                                    m.m_mapEventGIDToSolrData.set(
                                      e.unique_id,
                                      e
                                    ),
                                    m.m_listEvents.push(e));
                                });
                              }),
                              [2, s])
                            : [3, 4]
                        );
                      case 3:
                        return (
                          (u = l.sent()),
                          (p = Object(D.a)(u)),
                          console.error(
                            "LoadPartnerEventForModerationIncremental failed:" +
                              p.strErrorMsg,
                            p
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2, []];
                    }
                  });
                })
              );
            }),
            (e.prototype.UpdateTagsOnPartnerEvent = function (
              e,
              t,
              n,
              a,
              r,
              o
            ) {
              return Object(l.b)(this, void 0, void 0, function () {
                var i, s, d;
                return Object(l.e)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (
                        (i =
                          M.d.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (s = a.join(",")),
                        o &&
                          (a.length > 0 && (s += ","), (s += o.ToModString())),
                        (d = new FormData()).append("sessionid", M.d.SESSIONID),
                        d.append("clan_accountid", "" + t.GetAccountID()),
                        d.append("gid_announcement", n),
                        d.append("add_tags", s),
                        d.append("remove_tags", r.join(",")),
                        [
                          4,
                          c.a.post(i, d, {
                            withCredentials: !0,
                            cancelToken: e.token,
                          }),
                        ]
                      );
                    case 1:
                      return [2, l.sent().data.tags];
                  }
                });
              });
            }),
            (e.prototype.UpdatePartnerEventType = function (e, t, n, a) {
              return Object(l.b)(this, void 0, void 0, function () {
                var r, o;
                return Object(l.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (r =
                          M.d.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (o = new FormData()).append("sessionid", M.d.SESSIONID),
                        o.append("clan_accountid", "" + t.GetAccountID()),
                        o.append("gid_event", n),
                        o.append("new_event_type", "" + a),
                        [
                          4,
                          c.a.post(r, o, {
                            withCredentials: !0,
                            cancelToken: e.token,
                          }),
                        ]
                      );
                    case 1:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            Object(l.c)([d.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(l.c)([d.C], e.prototype, "m_listEvents", void 0),
            Object(l.c)([d.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        L = n("6oCP"),
        k = n("C4Nl"),
        B = n("Mgs7"),
        P = n("IjL/"),
        N = n("T27q"),
        F = n("Qcoi"),
        U = n("TLQK"),
        H = n("Z1oF"),
        x = n("zrk3");
      function z(e) {
        var t = e.accountID,
          n = e.locToken,
          a = r.useMemo(
            function () {
              return g.a.InitFromAccountID(t);
            },
            [t]
          ),
          o = Object(F.b)(a),
          i = o[0],
          l = o[1],
          s =
            "https://steamsupport.valvesoftware.com/account/overview/" +
            a.ConvertTo64BitString();
        return r.createElement(
          "div",
          null,
          Object(U.m)(
            n,
            r.createElement(
              "a",
              { href: s, target: M.d.IN_CLIENT ? void 0 : "_blank" },
              Boolean(!i && l)
                ? r.createElement(r.Fragment, null, l.persona_name)
                : r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("span", null, t)
                  )
            )
          )
        );
      }
      function W(e) {
        var t = e.modAction,
          n =
            Object(U.k)(t.m_rtWhen) +
            " @ " +
            Object(H.f)(t.m_rtWhen, { bForce24HourClock: !1 }),
          o = r.createElement(z, {
            locToken: "#EventModTile_Moderator",
            accountID: t.m_moderator,
          });
        switch (t.m_action) {
          case a.k_ModReviewed:
            return r.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_Reviewed",
                r.createElement("span", null, n),
                o
              )
            );
          case a.k_ModUnreviewed:
            return r.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_UnReviewed",
                r.createElement("span", null, n),
                o
              )
            );
          case a.k_ChangeEventType:
            return r.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_NewEventType",
                r.createElement("span", null, n),
                o,
                Object(A.b)(t.m_newEventType)
              )
            );
          case a.k_UpdateSeasonTags:
            return r.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_SeasonTagUpdate",
                r.createElement("span", null, n),
                o,
                t.m_newTagAdded
              )
            );
          case a.k_ModReReviewed:
            return r.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_ReReviewed",
                r.createElement("span", null, n),
                o
              )
            );
          case a.k_ModRemovedFromSteamChina:
            return r.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_RemoveFromSC",
                r.createElement("span", null, n),
                o
              )
            );
          case a.k_ModFlagAdultOnlyContent:
            return r.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_FlagAdultContent",
                r.createElement("span", null, n),
                o
              )
            );
          case a.k_ModRemoveAdultOnlyContent:
            return r.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_RemoveAdultContent",
                r.createElement("span", null, n),
                o
              )
            );
          default:
            return r.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              t.ToModString
            );
        }
      }
      function V(e) {
        var t = r.useState(!0),
          n = t[0],
          a = t[1],
          o = e.eventModel
            .GetAllTags()
            .filter(function (e) {
              return w.IsAuditAction(e);
            })
            .reverse(),
          i = o.length,
          l = o.length > 3 && n;
        return 0 == o.length
          ? null
          : (l && (o = o.splice(0, 3)),
            r.createElement(
              "div",
              null,
              r.createElement(
                "h4",
                null,
                Object(U.f)("#EventModTile_Action_Title")
              ),
              (function (t) {
                var n = e.eventModel;
                return t.map(function (e) {
                  var t = new w();
                  return (
                    t.FromString(e),
                    r.createElement(W, { key: n.GID + e, modAction: t })
                  );
                });
              })(o),
              l &&
                r.createElement(
                  "a",
                  {
                    onClick: function () {
                      return a(!1);
                    },
                    className: x.ExpandModActions,
                  },
                  Object(U.f)("#EventModTile_Action_More", i - 3)
                ),
              Boolean(!l && i > 3) &&
                r.createElement(
                  "a",
                  {
                    onClick: function () {
                      return a(!0);
                    },
                    className: x.ExpandModActions,
                  },
                  Object(U.f)("#EventModTile_Action_Hide")
                )
            ));
      }
      var K = n("BpzF"),
        q = n("fpVW"),
        Q = n.n(q),
        Y = n("RQmk"),
        X = n("Jqb/"),
        J = n("UxvL"),
        Z = n("ka0M"),
        $ = n("0OaU"),
        ee = n("5E+2"),
        te = n("+d9t"),
        ne = n("exH9"),
        ae = n("X3Ds"),
        re = n("opsS"),
        oe = n("IzPI"),
        ie = n("E9gz"),
        le = n("f0Wu"),
        se = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0,
        },
        ce = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_cancelSignal = c.a.CancelToken.source()),
              (t.m_refScroll = o.a.createRef()),
              (t.m_IntervalTimer = void 0),
              (t.state = {
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !1,
                nLastFetchCompletedMS: 0,
              }),
              (t.m_nPage = 0),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0),
                T.Get().Init(this.props.history.location.search);
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "EventModerationLanding component unmounted"
              ),
                window.removeEventListener("scroll", this.OnScroll),
                this.ClearTimer();
            }),
            (t.prototype.HandleUpdateQueryParameter = function () {
              var e = T.Get();
              if (e.bUseCustomQuery && this.props.history) {
                var t = e.selectedTags,
                  n = e.excludedTags,
                  a = e.filterEventTypes,
                  r = e.filterDate,
                  o = e.bOrderByVisibilityStartTime;
                t || n || a || r || o
                  ? this.props.history.push(
                      "?" +
                        m.a.stringify({
                          selectedTags:
                            t && t.length > 0
                              ? t.map(function (e) {
                                  return e.value;
                                })
                              : null,
                          excludedTags:
                            n && n.length > 0
                              ? n.map(function (e) {
                                  return e.value;
                                })
                              : null,
                          eventtype:
                            a && a.length > 0
                              ? a.map(function (e) {
                                  return "" + e.value;
                                })
                              : null,
                          filterDate: r && r.unix() > 0 ? "" + r.unix() : null,
                          orderByVisibility: o ? "1" : null,
                        })
                    )
                  : this.props.history.push("?");
              }
            }),
            (t.prototype.ClearTimer = function () {
              this.m_IntervalTimer &&
                (window.clearInterval(this.m_IntervalTimer),
                (this.m_IntervalTimer = void 0));
            }),
            (t.prototype.HandleError = function (e) {
              var t = Object(D.a)(e);
              console.error(
                "EventModerationLanding error: " + t.strErrorMsg,
                t
              ),
                this.setState({
                  bInfiniteScrollLoading: !1,
                  bExhaustedEventList: !0,
                  nLastFetchCompletedMS: Date.now(),
                });
            }),
            (t.prototype.LoadMorePublicEventWithDelay = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                return Object(l.e)(this, function (e) {
                  return (
                    (this.m_IntervalTimer = window.setInterval(
                      this.LoadMoreModerationEvents,
                      500
                    )),
                    [2]
                  );
                });
              });
            }),
            (t.prototype.LoadMoreModerationEvents = function () {
              var e = this;
              if ((this.ClearTimer(), this.state.bInfiniteScrollLoading)) {
                var t = void 0,
                  n = T.Get();
                if (n.bUseCustomQuery) {
                  var a = n.filterEventTypes
                      ? n.filterEventTypes.map(function (e) {
                          return e.value;
                        })
                      : void 0,
                    r = n.selectedTags
                      ? n.selectedTags.map(function (e) {
                          return e.value;
                        })
                      : void 0,
                    o = n.excludedTags
                      ? n.excludedTags.map(function (e) {
                          return e.value;
                        })
                      : void 0;
                  t = j
                    .Get()
                    .LoadPartnerEventForQueryIncremental(
                      this.m_cancelSignal,
                      this.m_nPage,
                      n.eventsToLoadPerPaging,
                      [this.props.appid],
                      r,
                      o,
                      n.filterDate,
                      a,
                      n.bOrderByVisibilityStartTime
                    );
                } else
                  t = G.Get().LoadPartnerEventForModerationIncremental(
                    this.m_cancelSignal,
                    n.eventsToLoadPerPaging
                  );
                t.then(function (t) {
                  (e.m_nPage += n.eventsToLoadPerPaging),
                    e.setState({
                      bInfiniteScrollLoading: !1,
                      bExhaustedEventList: 0 == t.length,
                      nLastFetchCompletedMS: Date.now(),
                    });
                }).catch(function (t) {
                  return e.HandleError(t);
                });
              }
            }),
            (t.prototype.UpdateQueryParametersAndLoadMoreEvents = function () {
              this.HandleUpdateQueryParameter(),
                this.LoadMoreModerationEvents();
            }),
            (t.prototype.RenderTiles = function () {
              var e = new Array();
              return (
                (T.Get().bUseCustomQuery
                  ? j.Get().GetAllSolrEvents()
                  : G.Get().GetAllSolrEvents()
                ).forEach(function (t) {
                  e.push(
                    o.a.createElement(Ee, { solrData: t, key: t.unique_id })
                  );
                }),
                e
              );
            }),
            (t.prototype.OnScroll = function () {
              if (this.m_refScroll && this.m_refScroll.current) {
                var e = this.m_refScroll.current;
                e &&
                  (this.state.bExhaustedEventList ||
                    this.state.bInfiniteScrollLoading ||
                    (e.getBoundingClientRect().bottom <=
                      window.innerHeight + 50 &&
                      (this.state.nLastFetchCompletedMS + 500 < Date.now()
                        ? this.setState(
                            { bInfiniteScrollLoading: !0 },
                            this.LoadMorePublicEventWithDelay
                          )
                        : this.setState(
                            { bInfiniteScrollLoading: !0 },
                            this.LoadMoreModerationEvents
                          ))));
              }
            }),
            (t.prototype.RefetchAllEventTiles = function () {
              (this.m_nPage = 0),
                G.Get().ClearAllSolrEvents(),
                j.Get().ClearAllSolrEvents(),
                this.setState(
                  Object(l.a)({}, se),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (t.prototype.render = function () {
              var e = this.RenderTiles(),
                t = T.Get();
              return o.a.createElement(
                "div",
                { className: ie.ModerationContainer, ref: this.m_refScroll },
                o.a.createElement(
                  "div",
                  null,
                  o.a.createElement(
                    "h2",
                    null,
                    Object(U.f)("#EventModeration_Title")
                  ),
                  o.a.createElement(
                    P.a,
                    null,
                    o.a.createElement(
                      "div",
                      { className: Object(ne.a)(Q.a.FlexRowContainer) },
                      o.a.createElement(ue, {
                        fnRequireRefetchEvents: this.RefetchAllEventTiles,
                      }),
                      Boolean(t.bUseCustomQuery) &&
                        o.a.createElement(pe, {
                          fnRequireRefetchEvents: this.RefetchAllEventTiles,
                        })
                    )
                  )
                ),
                o.a.createElement(P.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  o.a.createElement($.a, {
                    position: "center",
                    size: "medium",
                    string: Object(U.f)("#Loading"),
                  })
              );
            }),
            Object(l.c)([re.a], t.prototype, "HandleError", null),
            Object(l.c)(
              [re.a],
              t.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(l.c)([re.a], t.prototype, "LoadMoreModerationEvents", null),
            Object(l.c)(
              [re.a],
              t.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(l.c)([re.a], t.prototype, "OnScroll", null),
            Object(l.c)([re.a], t.prototype, "RefetchAllEventTiles", null),
            (t = Object(l.c)([u.a], t))
          );
        })(o.a.Component),
        de = Object(h.j)(ce),
        ue = Object(u.a)(function (e) {
          var t = T.Get(),
            n = e.fnRequireRefetchEvents;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                ee.a,
                {
                  toolTipContent: Object(U.f)(
                    "#EventModeration_ShowCustomFilter_ttip"
                  ),
                },
                o.a.createElement(B.e, {
                  label: Object(U.f)("#EventModeration_ShowCustomFilter"),
                  checked: t.bUseCustomQuery,
                  onChange: function (e) {
                    (t.bUseCustomQuery = e), n();
                  },
                })
              )
            ),
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                "label",
                { htmlFor: "EventPerLoad" },
                Object(U.f)("#EventModeration_PerPageLoad")
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("input", {
                  type: "number",
                  id: "EventPerLoad",
                  min: "10",
                  max: "200",
                  value: t.eventsToLoadPerPaging,
                  onChange: function (e) {
                    var n = Number.parseInt(e.currentTarget.value);
                    n &&
                      n > 0 &&
                      n != t.eventsToLoadPerPaging &&
                      (t.eventsToLoadPerPaging = n);
                  },
                })
              )
            )
          );
        }),
        pe = Object(u.a)(function (e) {
          var t = T.Get(),
            n = e.fnRequireRefetchEvents,
            a = b.d
              .map(function (e) {
                return { value: e, label: Object(A.b)(e) };
              })
              .sort(function (e, t) {
                return e.label.localeCompare(t.label);
              }),
            r = f.a
              .map(function (e) {
                return { value: e, label: e };
              })
              .sort(function (e, t) {
                return e.label.localeCompare(t.label);
              }),
            i = {
              option: function (e) {
                return Object(l.a)(Object(l.a)({}, e), { color: "#444444" });
              },
            };
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterByTag")
              ),
              o.a.createElement(_.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function (e) {
                  (t.selectedTags = e), n();
                },
                value: t.selectedTags,
                options: r,
                styles: i,
              })
            ),
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterExcludeByTag")
              ),
              o.a.createElement(_.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function (e) {
                  (t.excludedTags = e), n();
                },
                value: t.excludedTags,
                options: r,
                styles: i,
              })
            ),
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterToType")
              ),
              o.a.createElement(_.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function (e) {
                  (t.filterEventTypes = e), n();
                },
                value: t.filterEventTypes,
                options: a,
                styles: i,
              })
            ),
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterToDate")
              ),
              o.a.createElement(E.a, {
                timeFormat: !1,
                onChange: function (e) {
                  if ("string" == typeof e) {
                    var a = le(e, "M/D/YYYY", !0);
                    if (!a.isValid()) return void (t.filterDateAsString = e);
                    e = a;
                  }
                  t.filterDate != e &&
                    ((t.filterDateAsString = void 0), (t.filterDate = e), n());
                },
                value: t.filterDate,
                isValidDate: function (e) {
                  var t = new Date();
                  return (
                    e.unix() <
                    le
                      .unix(t.getTime() / 1e3 + 86400)
                      .hour(0)
                      .seconds(0)
                      .minute(0)
                      .unix()
                  );
                },
                inputProps: {
                  placeholder: Object(U.f)("#EventModeration_PickDatee"),
                  className: ie.TimeWidth,
                },
              })
            ),
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement("input", {
                type: "checkbox",
                id: "VisibilityStart",
                checked: t.bOrderByVisibilityStartTime,
                onChange: function (e) {
                  (t.bOrderByVisibilityStartTime = e.currentTarget.checked),
                    n();
                },
              }),
              o.a.createElement(
                "label",
                { htmlFor: "VisibilityStart" },
                Object(U.f)("#EventModeration_OrderByFirstVisible")
              )
            )
          );
        }),
        me = Object(u.a)(function (e) {
          var t = e.onClick,
            n = e.event,
            a = e.bSaving,
            r = Object(U.f)("#EventModTile_Moderate_ClearReviewed"),
            i = ie.EventModerateClearReview,
            l = !1;
          return (
            Object(f.g)(n) ||
              ((r = Object(U.f)("#EventModTile_Moderate_MarkReviewed")),
              (i = ie.EventModerateMarkReview),
              (l = !0)),
            a &&
              ((r = Object(U.f)("#EventModTile_Moderate_Saving")),
              (i = ie.EventModerateSaving)),
            o.a.createElement(
              "button",
              {
                className: Object(ne.a)(Q.a.Button, ie.Button, i),
                onClick: function () {
                  return t(l);
                },
                disabled: a,
              },
              a && o.a.createElement($.a, { size: "small" }),
              r
            )
          );
        }),
        ve = Object(u.a)(function (e) {
          var t = e.onClick,
            n = e.event,
            a = e.bSaving,
            r = n.BHasTag("adult_only_content"),
            i = Object(U.f)(
              r
                ? "#EventModTile_Moderate_RemoveAdultContent"
                : "#EventModTile_Moderate_FlagAdultContent"
            );
          return (
            a && (i = Object(U.f)("#EventModTile_Moderate_Saving")),
            o.a.createElement(
              "button",
              {
                className: Object(ne.a)(Q.a.Button, ie.Button),
                onClick: function () {
                  return t(!r);
                },
                disabled: a,
              },
              a && o.a.createElement($.a, { size: "small" }),
              i
            )
          );
        }),
        Ee = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bLoadingEvent: !L.c.BHasClanEventModel(
                  t.props.solrData.unique_id
                ),
                bShowAsModal: !1,
                bSavingModeration: !1,
              }),
              (t.m_cancelSignal = c.a.CancelToken.source()),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.props.solrData,
                n = t.unique_id;
              L.c.BHasClanEventModel(n) ||
                L.c
                  .LoadHiddenPartnerEvent(new g.a(t.clan_steamid), n)
                  .then(function () {
                    return e.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function (t) {
                    var n = Object(D.a)(t);
                    console.error(
                      "EventModerationTile: Event Load: " + n.strErrorMsg,
                      n
                    ),
                      e.setState({ bLoadingEvent: !1 });
                  });
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "EventModerationTile component unmounted"
              );
            }),
            (t.prototype.ShowModalEvent = function (e) {
              var t = this.props.solrData.unique_id;
              !this.state.bLoadingEvent &&
                L.c.BHasClanEventModel(t) &&
                this.setState({ bShowAsModal: !0 }),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (t.prototype.HideModalEvent = function () {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (t.prototype.SetAdultContentState = function (e) {
              if (!this.state.bSavingModeration) {
                var t = this.props.solrData.unique_id,
                  n = L.c.GetClanEventModel(t);
                if (n)
                  if (e !== n.BHasTag("adult_only_content")) {
                    var a = new Array(),
                      r = new Array(),
                      o = new w().SetAdultOnlyContentAction(e);
                    e
                      ? a.push("adult_only_content")
                      : r.push("adult_only_content"),
                      this.UpdateTagsOnEvent(t, a, r, o);
                  }
              }
            }),
            (t.prototype.SetModeratedState = function (e) {
              if (!this.state.bSavingModeration) {
                var t = this.props.solrData.unique_id,
                  n = L.c.GetClanEventModel(t);
                if (n)
                  if (e !== Object(f.g)(n)) {
                    var a = new Array(),
                      r = new Array(),
                      o = new w().SetReviewAction(e);
                    e
                      ? (a.push("mod_reviewed"),
                        r.push("mod_require_rereview"),
                        n.BHasTag("mod_require_rereview") &&
                          o.SetReReviewAction(e))
                      : a.push("mod_require_rereview"),
                      this.UpdateTagsOnEvent(t, a, r, o);
                  }
              }
            }),
            (t.prototype.UpdateTagsOnEvent = function (e, t, n, a) {
              var r = this;
              this.state.bSavingModeration ||
                this.setState({ bSavingModeration: !0 }, function () {
                  return Object(l.b)(r, void 0, void 0, function () {
                    var r, o, i, s;
                    return Object(l.e)(this, function (l) {
                      switch (l.label) {
                        case 0:
                          (r = L.c.GetClanEventModel(e)), (l.label = 1);
                        case 1:
                          return (
                            l.trys.push([1, 3, , 4]),
                            [
                              4,
                              G.Get().UpdateTagsOnPartnerEvent(
                                this.m_cancelSignal,
                                r.clanSteamID,
                                r.AnnouncementGID,
                                t,
                                n,
                                a
                              ),
                            ]
                          );
                        case 2:
                          return (o = l.sent()), (r.vecTags = o), [3, 4];
                        case 3:
                          return (
                            (i = l.sent()),
                            (s = Object(D.a)(i)),
                            console.error(
                              "UpdateTagsOnPartnerEvent " + s.strErrorMsg,
                              s
                            ),
                            [3, 4]
                          );
                        case 4:
                          return this.setState({ bSavingModeration: !1 }), [2];
                      }
                    });
                  });
                });
            }),
            (t.prototype.OnChangeCategory = function (e) {
              var t = this.props.solrData,
                n = L.c.GetClanEventModel(t.unique_id);
              Object(Z.d)(
                o.a.createElement(be, { eventModel: n }),
                Object(ae.o)(e)
              );
            }),
            (t.prototype.OnUpdateSeasonalTag = function (e) {
              var t = this.props.solrData,
                n = L.c.GetClanEventModel(t.unique_id);
              Object(Z.d)(
                o.a.createElement(fe, { eventModel: n }),
                Object(ae.o)(e)
              );
            }),
            (t.prototype.render = function () {
              var e,
                t = this.props.solrData,
                n = t.unique_id,
                a = Number(t.appid),
                r = Object(b.k)(M.d.LANGUAGE),
                i = L.c.GetClanEventModel(n),
                l = null;
              if (i) {
                this.state.bShowAsModal &&
                  (l = o.a.createElement(
                    X.j,
                    { className: ie.StoreHeaderAdjust },
                    o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(N.b, {
                        event: i,
                        fnClose: this.HideModalEvent,
                      })
                    )
                  ));
                var s = i.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    r,
                    S.c.capsule_main
                  ),
                  c = i.BImageNeedScreenshotFallback("capsule", r);
                e =
                  s.length > 0
                    ? o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(J.a, { rgSources: s }),
                        c &&
                          o.a.createElement(
                            "div",
                            { className: ie.NoCapsuleFallback },
                            Object(U.f)("#EventModTile_FallbackImageText")
                          )
                      )
                    : o.a.createElement(
                        "div",
                        { className: ie.NoCapsule },
                        Object(U.f)("#EventModTile_NoCapsule")
                      );
              } else e = Object(U.f)("#Loading");
              var d = t.last_modified_date
                  ? Date.parse(t.last_modified_date) / 1e3
                  : 0,
                u = i ? i.type : Number(t.event_type),
                p = new g.a(t.clan_steamid),
                m = a ? "app/" + a : "group/" + p.GetAccountID(),
                v =
                  M.d.STORE_BASE_URL +
                  "news/" +
                  m +
                  "/view/" +
                  t.announcement_gid,
                E = Boolean(i && i.BHasTag("adult_only_content"));
              return o.a.createElement(
                P.a,
                null,
                l,
                o.a.createElement(
                  "div",
                  { className: ie.Tile },
                  o.a.createElement(
                    "a",
                    {
                      href: v,
                      className: ie.TileCapsule,
                      onClick: this.ShowModalEvent,
                    },
                    e
                  ),
                  o.a.createElement(
                    "div",
                    { className: ie.TileDetails },
                    o.a.createElement(
                      "div",
                      { className: ie.DetailsLeft },
                      o.a.createElement(
                        "a",
                        {
                          className: ie.EventTitle,
                          href: v,
                          onClick: this.ShowModalEvent,
                        },
                        t.event_name
                      ),
                      o.a.createElement(
                        "div",
                        {
                          className: Object(ne.a)(
                            ie.TileEventType,
                            1 == u ? ie.TileEventOtherType : ""
                          ),
                        },
                        i ? i.GetCategoryAsString() : t.event_type
                      ),
                      E &&
                        o.a.createElement(
                          "div",
                          { className: ie.HasAdultContent },
                          Object(U.f)("#EventModTile_HasAdultContent")
                        ),
                      this.state.bLoadingEvent &&
                        o.a.createElement($.a, {
                          size: "small",
                          string: Object(U.f)("#Loading"),
                        }),
                      o.a.createElement(
                        "div",
                        { className: ie.ChannelInfo },
                        o.a.createElement(he, {
                          appid: a,
                          clanSteamID: new g.a(t.clan_steamid),
                        })
                      )
                    ),
                    o.a.createElement(
                      "div",
                      { className: ie.DetailsMiddle },
                      i &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(me, {
                            onClick: this.SetModeratedState,
                            bSaving: this.state.bSavingModeration,
                            event: i,
                          }),
                          o.a.createElement(
                            "button",
                            {
                              className: Object(ne.a)(Q.a.Button, ie.Button),
                              onClick: this.OnChangeCategory,
                            },
                            Object(U.f)("#EventModTile_ChangeEventType")
                          ),
                          o.a.createElement(ve, {
                            onClick: this.SetAdultContentState,
                            bSaving: this.state.bSavingModeration,
                            event: i,
                          }),
                          Boolean(i.BHasTag("halloween2019candidate")) &&
                            o.a.createElement(
                              "button",
                              {
                                className: Object(ne.a)(Q.a.Button),
                                onClick: this.OnUpdateSeasonalTag,
                              },
                              Object(U.f)("#EventModTile_SeasonalTag")
                            ),
                          o.a.createElement(V, { eventModel: i })
                        )
                    ),
                    o.a.createElement(
                      "div",
                      { className: ie.DetailsRight },
                      o.a.createElement(
                        "div",
                        { className: ie.EventTimingBlock },
                        Boolean(d) &&
                          o.a.createElement(
                            "div",
                            { className: ie.LastUpdateTime },
                            Object(U.f)(
                              "#EventModTile_LastModified",
                              Object(U.k)(d) +
                                "@" +
                                Object(H.f)(d, { bForce24HourClock: !1 })
                            )
                          ),
                        i &&
                          o.a.createElement(K.b, {
                            event: i,
                            stylesmodule: ie,
                            nOverrideEndTime: i.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: i.GetStartTimeAndDateUnixSeconds(),
                          })
                      ),
                      i &&
                        o.a.createElement(_e, {
                          event: i,
                          hidden: t.hidden,
                          published: t.published,
                        })
                    )
                  )
                )
              );
            }),
            Object(l.c)([re.a], t.prototype, "ShowModalEvent", null),
            Object(l.c)([re.a], t.prototype, "HideModalEvent", null),
            Object(l.c)([re.a], t.prototype, "SetAdultContentState", null),
            Object(l.c)([re.a], t.prototype, "SetModeratedState", null),
            Object(l.c)([re.a], t.prototype, "OnChangeCategory", null),
            Object(l.c)([re.a], t.prototype, "OnUpdateSeasonalTag", null),
            (t = Object(l.c)([u.a], t))
          );
        })(o.a.Component),
        he =
          (o.a.Component,
          Object(u.a)(function (e) {
            var t = Object(r.useState)(!k.a.Get().BHasApp(e.appid)),
              n = t[0],
              a = t[1],
              i = o.a.useRef(c.a.CancelToken.source());
            if (
              (Object(r.useEffect)(function () {
                return function () {
                  return i.current.cancel(
                    "EventModerationChannelInfo component unmounted"
                  );
                };
              }, []),
              Object(r.useEffect)(
                function () {
                  var t = e.appid,
                    n = e.clanSteamID;
                  if (
                    (t && !k.a.Get().BHasApp(t)) ||
                    (n && !y.a.BHasClanInfoLoaded(n))
                  ) {
                    Object(l.b)(void 0, void 0, void 0, function () {
                      var e, r;
                      return Object(l.e)(this, function (o) {
                        switch (o.label) {
                          case 0:
                            return (
                              o.trys.push([0, 2, 3, 4]),
                              [
                                4,
                                Promise.all([
                                  k.a
                                    .Get()
                                    .QueueAppRequest(t, {
                                      include_assets: !0,
                                      include_release: !0,
                                    }),
                                  n
                                    ? y.a.LoadClanInfoForClanSteamID(n)
                                    : void 0,
                                ]),
                              ]
                            );
                          case 1:
                            return o.sent(), [3, 4];
                          case 2:
                            return (
                              (e = o.sent()),
                              (r = Object(D.a)(e)),
                              console.error(
                                "EventModerationChannelInfo: App Load: " +
                                  r.strErrorMsg,
                                r
                              ),
                              [3, 4]
                            );
                          case 3:
                            return i.current.token.reason || a(!1), [7];
                          case 4:
                            return [2];
                        }
                      });
                    });
                  }
                },
                [e]
              ),
              n)
            )
              return o.a.createElement($.a, {
                size: "small",
                string: Object(U.f)("#EventModTile_AppInfoLoading"),
              });
            var s = e.appid,
              d = e.clanSteamID;
            if (s) {
              var u = k.a.Get().GetApp(s);
              return u
                ? o.a.createElement(
                    "div",
                    { className: ie.TileAppInfo },
                    o.a.createElement(
                      "div",
                      { className: ie.TileAppInfoTitle },
                      o.a.createElement(
                        Y.b,
                        { type: "app", id: u.GetAppID() },
                        o.a.createElement(
                          te.a,
                          { href: Object(oe.h)(u.GetStorePageURL()) },
                          o.a.createElement("img", {
                            className: ie.TileAppInfoImage,
                            src: u.assets.GetMainCapsuleURL(),
                          })
                        )
                      ),
                      o.a.createElement(
                        Y.b,
                        { type: "app", id: u.GetAppID() },
                        o.a.createElement(
                          te.a,
                          { href: Object(oe.h)(u.GetStorePageURL()) },
                          o.a.createElement("div", null, u.GetName())
                        )
                      )
                    )
                  )
                : null;
            }
            if (d) {
              var p = d.GetAccountID(),
                m = y.a.GetClanInfoByClanAccountID(p);
              if (m && m.is_curator)
                return o.a.createElement(
                  "div",
                  { className: ie.TileAppInfo },
                  o.a.createElement(
                    "div",
                    { className: ie.TileAppInfoTitle },
                    o.a.createElement(
                      te.a,
                      {
                        href: Object(oe.h)(
                          M.d.STORE_BASE_URL + "/curator/" + p + "/"
                        ),
                      },
                      o.a.createElement("img", {
                        className: ie.TileAppInfoImage,
                        src: m.avatar_full_url,
                      }),
                      o.a.createElement(
                        "div",
                        null,
                        Object(U.f)("#EventModTile_CuratorName", m.group_name)
                      )
                    )
                  )
                );
            }
            return null;
          })),
        _e = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.event,
                n = e.hidden,
                a = e.published,
                r = n
                  ? a
                    ? Object(U.f)("#EVentModTile_State_Staged")
                    : Object(U.f)("#EVentModTile_State_Draft")
                  : Object(U.f)("#EVentModTile_State_Published"),
                i = Object(f.c)(t),
                l = Object(f.b)(t),
                s = Object(f.d)(t),
                c =
                  s && !t.BHasTag("hide_store") && !t.BHasTag("mod_hide_store"),
                d =
                  i &&
                  !t.BHasTag("hide_library_overview") &&
                  !t.BHasTag("mod_hide_library_overview"),
                u =
                  l &&
                  !t.BHasTag("hide_library_detail") &&
                  !t.BHasTag("mod_hide_library_detail");
              return o.a.createElement(
                "div",
                { className: ie.VisibiltyCtn },
                o.a.createElement("div", { className: ie.TileTitle }, r),
                o.a.createElement(
                  "div",
                  null,
                  Object(U.f)(
                    "#EventModTile_Store_Visibility",
                    c
                      ? Object(U.f)("#WriteReview_Dialog_Yes")
                      : Object(U.f)("#WriteReview_Dialog_No"),
                    c
                      ? ""
                      : s
                      ? Object(U.f)(
                          "#EventModTime_Hidden_EventType",
                          t.GetEventTypeAsString()
                        )
                      : t.BHasTag("hide_store")
                      ? Object(U.f)("#EventModTime_Hidden_OptOut")
                      : Object(U.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                o.a.createElement(
                  "div",
                  null,
                  Object(U.f)(
                    "#EventModTile_LibraryHome_Visibility",
                    d
                      ? Object(U.f)("#WriteReview_Dialog_Yes")
                      : Object(U.f)("#WriteReview_Dialog_No"),
                    d
                      ? ""
                      : s
                      ? Object(U.f)(
                          "#EventModTime_Hidden_EventType",
                          t.GetEventTypeAsString()
                        )
                      : t.BHasTag("hide_library_overview")
                      ? Object(U.f)("#EventModTime_Hidden_OptOut")
                      : Object(U.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                o.a.createElement(
                  "div",
                  null,
                  Object(U.f)(
                    "#EventModTile_LibraryDetail_Visibility",
                    u
                      ? Object(U.f)("#WriteReview_Dialog_Yes")
                      : Object(U.f)("#WriteReview_Dialog_No"),
                    u
                      ? ""
                      : s
                      ? Object(U.f)(
                          "#EventModTime_Hidden_EventType",
                          t.GetEventTypeAsString()
                        )
                      : t.BHasTag("hide_library_detail")
                      ? Object(U.f)("#EventModTime_Hidden_OptOut")
                      : Object(U.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                t.BHasTag("enable_steam_china") &&
                  o.a.createElement(
                    "div",
                    null,
                    Object(U.f)("#EventModTile_SteamChina_Visibility")
                  ),
                t.BHasTag("disable_steam_global") &&
                  o.a.createElement(
                    "div",
                    null,
                    Object(U.f)("#EventModTile_SteamGlobal_Hidden")
                  )
              );
            }),
            (t = Object(l.c)([u.a], t))
          );
        })(o.a.Component),
        be = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(A.b)(34),
                  value: { eventType: 34 },
                },
              }),
              (t.m_cancelSignal = c.a.CancelToken.source()),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (t.prototype.ChangeCategoryForEvent = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e, t, n, a, r, o, i, s, c, u;
                return Object(l.e)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      (e = this.props),
                        (t = e.eventModel),
                        (n = e.closeModal),
                        (l.label = 1);
                    case 1:
                      return (
                        l.trys.push([1, 4, , 5]),
                        (a = this.state.newCategoryOption),
                        (r = a.value.eventType),
                        [
                          4,
                          G.Get().UpdatePartnerEventType(
                            this.m_cancelSignal,
                            t.clanSteamID,
                            t.GID,
                            r
                          ),
                        ]
                      );
                    case 2:
                      return (
                        l.sent(),
                        (o = f.p),
                        (i = []),
                        a.value.tags &&
                          a.value.tags.forEach(function (e) {
                            i.push(e);
                            var t = new w()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            i.push(t);
                          }),
                        [
                          4,
                          G.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            t.clanSteamID,
                            t.GetAnnouncementGID(),
                            i,
                            o,
                            new w().SetActionChangeEvent(r)
                          ),
                        ]
                      );
                    case 3:
                      return (
                        (s = l.sent()),
                        Object(d.G)(function () {
                          (t.type = r), (t.vecTags = s);
                        }),
                        this.setState({ bUpdating: !1 }, n),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (c = l.sent()),
                        (u = Object(D.a)(c)),
                        console.error(
                          "ChangeEventTypeDialog error " + u.strErrorMsg,
                          u
                        ),
                        this.setState({
                          bUpdating: !1,
                          strErrorMsg: u.strErrorMsg,
                        }),
                        [3, 5]
                      );
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.OnChangeSelection = function (e) {
              this.setState({ newCategoryOption: e });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.eventModel,
                a = t.closeModal,
                r = b.d
                  .filter(function (e) {
                    return 1 == e || 4 == e || e >= 9;
                  })
                  .map(function (e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(A.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(U.f)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"],
                  },
                }),
                r.push({
                  label: Object(U.f)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] },
                }),
                r.push({
                  label: Object(U.f)("#PartnerEvent_SteamAwardNominations"),
                  value: {
                    eventType: 28,
                    tags: [
                      "steam_award_nomination_request",
                      "mod_hide_library_overview",
                    ],
                  },
                }),
                r.push({
                  label: Object(U.f)("#PartnerEvent_SteamAwardVoteRequest"),
                  value: {
                    eventType: 28,
                    tags: [
                      "steam_award_vote_request",
                      "mod_hide_library_overview",
                    ],
                  },
                }),
                r.unshift({
                  value: { eventType: 15, tags: ["halloween"] },
                  label: Object(U.f)("#PartnerEvent_15"),
                }),
                r.unshift({
                  value: { eventType: 22, tags: ["halloween"] },
                  label: Object(U.f)("#PartnerEvent_22"),
                }),
                r.unshift({
                  value: { eventType: 23, tags: ["halloween"] },
                  label: Object(U.f)("#PartnerEvent_23"),
                }),
                r.unshift({
                  value: { eventType: 24, tags: ["halloween"] },
                  label: Object(U.f)("#PartnerEvent_24"),
                }),
                r.unshift({
                  value: { eventType: 35, tags: ["halloween"] },
                  label: Object(U.f)("#PartnerEvent_35"),
                }),
                o.a.createElement(
                  X.d,
                  {
                    strTitle: Object(U.f)("#EventModTile_ChangeEventType"),
                    strDescription: Object(U.f)(
                      "#EventModTile_ChangeEventType_Desc",
                      n.GetEventTypeAsString()
                    ),
                    onCancel: a,
                    onOK: function () {
                      return e.setState(
                        { bUpdating: !0 },
                        e.ChangeCategoryForEvent
                      );
                    },
                  },
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      "div",
                      { className: ie.CategoryChangeDialog },
                      o.a.createElement("br", null),
                      this.state.bUpdating &&
                        o.a.createElement($.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        o.a.createElement(
                          "div",
                          null,
                          Object(U.f)("#Chat_Settings_Error_ServerError"),
                          o.a.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      o.a.createElement(_.a, {
                        isSearchable: !0,
                        onChange: this.OnChangeSelection,
                        value: this.state.newCategoryOption,
                        options: r,
                      })
                    )
                  )
                )
              );
            }),
            Object(l.c)([re.a], t.prototype, "ChangeCategoryForEvent", null),
            Object(l.c)([re.a], t.prototype, "OnChangeSelection", null),
            (t = Object(l.c)([u.a], t))
          );
        })(o.a.Component),
        fe = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bUpdating: !1,
                bAccept: t.props.eventModel.BHasTag("halloween2019"),
                bHorror: t.props.eventModel.BHasTag("horror"),
                bCute: t.props.eventModel.BHasTag("cute"),
              }),
              (t.m_cancelSignal = c.a.CancelToken.source()),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "UpdateSeasonalTagDialog component unmounted"
              );
            }),
            (t.prototype.ChangeAcceptance = function () {
              this.setState({ bAccept: !this.state.bAccept });
            }),
            (t.prototype.ChangeHorror = function () {
              this.setState({ bHorror: !this.state.bHorror });
            }),
            (t.prototype.ChangeCute = function () {
              this.setState({ bCute: !this.state.bCute });
            }),
            (t.prototype.ApplyAction = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e, t, n, a, r, o;
                return Object(l.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (e = new Array()),
                        (t = new Array()),
                        this.state.bAccept
                          ? (e.push("halloween2019"),
                            t.push("halloween2019reviewed"))
                          : (t.push("halloween2019"),
                            e.push("halloween2019reviewed")),
                        this.state.bCute ? e.push("cute") : t.push("cute"),
                        this.state.bHorror
                          ? e.push("horror")
                          : t.push("horror"),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        (n = this.props.eventModel),
                        [
                          4,
                          G.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            e,
                            t,
                            new w().SetUpdateSeasonalTags(
                              this.state.bAccept
                                ? "halloween2019"
                                : "halloween2019reviewed"
                            )
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = i.sent()),
                        (n.vecTags = a),
                        this.props.closeModal(),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (r = i.sent()),
                        (o = Object(D.a)(r)),
                        console.error(
                          "EventModerationTile " + o.strErrorMsg,
                          o
                        ),
                        this.setState({ strErrorMsg: o.strErrorMsg }),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = (t.eventModel, t.closeModal);
              return o.a.createElement(
                X.d,
                {
                  strTitle: Object(U.f)("#EventModTile_SeasonalTag"),
                  onCancel: n,
                  onOK: function () {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  },
                },
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    "div",
                    { className: ie.CategoryChangeDialog },
                    o.a.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance,
                    }),
                    o.a.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(U.f)("#EventModTile_SeasonalTag_Desc")
                    ),
                    o.a.createElement(
                      "div",
                      null,
                      Object(U.f)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    o.a.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror,
                    }),
                    o.a.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    o.a.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute,
                    }),
                    o.a.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      o.a.createElement($.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      o.a.createElement(
                        "div",
                        null,
                        Object(U.f)("#Chat_Settings_Error_ServerError"),
                        o.a.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(l.c)([re.a], t.prototype, "ChangeAcceptance", null),
            Object(l.c)([re.a], t.prototype, "ChangeHorror", null),
            Object(l.c)([re.a], t.prototype, "ChangeCute", null),
            Object(l.c)([re.a], t.prototype, "ApplyAction", null),
            t
          );
        })(o.a.Component),
        ge = (n("Xhj9"), n("5eAM")),
        Se = n("ir+G"),
        ye = n("gOcu"),
        Ae = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { bLoadingEvent: !0 }),
              (t.m_cancelSignal = c.a.CancelToken.source()),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "SteamGameFestivalStoreDebug to unload "
              );
            }),
            (t.prototype.componentDidMount = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e, t, n, a, r, o, i, s, c;
                return Object(l.e)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (
                        (e = this.props),
                        (t = e.clanEventGID),
                        (n = e.clanAccountID),
                        console.log(t, n, typeof t, typeof n),
                        !t || L.c.BHasClanEventModel(t)
                          ? [3, 8]
                          : ((a = g.a.InitFromClanID(Number.parseInt(n))),
                            [
                              4,
                              L.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                                a,
                                t,
                                0
                              ),
                            ])
                      );
                    case 1:
                      return (
                        (r = l.sent()),
                        (o = new Array()),
                        (i = new Array()),
                        r.BHasSaleEnabled()
                          ? (this.setState({
                              event: r,
                              bLoadingEvent: !1,
                              bLoadingApps: !0,
                              bLoadingDemos: !0,
                              bLoadingAssociatedDemoInfo: !0,
                            }),
                            (s = new Map()),
                            r.jsondata.sale_sections.forEach(function (e) {
                              "tabs" == e.section_type &&
                                e.tabs.forEach(function (e) {
                                  e.capsules.forEach(function (e) {
                                    "game" == e.type ||
                                    "application" == e.type ||
                                    "software" == e.type
                                      ? s.has(e.id) ||
                                        (s.set(e.id, !0), o.push(e.id))
                                      : s.has(e.id) ||
                                        (s.set(e.id, !0), i.push(e.id));
                                  });
                                });
                            }),
                            [4, ge.a.LoadAppLinkInfo(o)])
                          : [3, 6]
                      );
                    case 2:
                      return (
                        l.sent(),
                        this.setState({
                          rgAppIDs: o,
                          rgUnknownTypeAppIDs: i,
                          bLoadingApps: !1,
                        }),
                        [4, Se.a.BatchLoadAppCapsules(o)]
                      );
                    case 3:
                      return (
                        l.sent(),
                        this.setState({ bLoadingAssociatedDemoInfo: !1 }),
                        [4, ye.a.Get().LoadAppIDsBatch(o, this.m_cancelSignal)]
                      );
                    case 4:
                      return (
                        l.sent(),
                        (c = new Array()),
                        ye.a
                          .Get()
                          .GetAllDemoInfo()
                          .forEach(function (e) {
                            return c.push(e.demo_appid);
                          }),
                        [4, ge.a.LoadAppLinkInfo(c)]
                      );
                    case 5:
                      return (
                        l.sent(),
                        this.setState({ bLoadingDemos: !1, rgDemoIDs: c }),
                        [3, 7]
                      );
                    case 6:
                      this.setState({ bLoadingEvent: !1, rgAppIDs: o }),
                        (l.label = 7);
                    case 7:
                      return [3, 9];
                    case 8:
                      this.setState({ bLoadingEvent: !1 }), (l.label = 9);
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.render = function () {
              if (
                this.state.bLoadingEvent ||
                this.state.bLoadingDemos ||
                this.state.bLoadingApps ||
                this.state.bLoadingAssociatedDemoInfo
              )
                return r.createElement($.a, {
                  string:
                    Object(U.f)("#Loading") +
                    (this.state.bLoadingEvent
                      ? " Events"
                      : this.state.bLoadingApps
                      ? " Apps"
                      : this.state.bLoadingAssociatedDemoInfo
                      ? " Associated Demo Info"
                      : this.state.bLoadingDemos
                      ? " Demos"
                      : "done"),
                  position: "center",
                });
              if (!this.state.event)
                return r.createElement("div", null, " Failed to load event");
              var e = this.state.event;
              if (!e.jsondata.bSaleEnabled)
                return r.createElement("div", null, "Not a sale evnet");
              var t = new Map();
              this.state.rgDemoIDs.forEach(function (e) {
                return t.set(e, !0);
              });
              var n = new Array(),
                a = new Array();
              ge.a.GetMissingAppIDs().forEach(function (e, t) {
                n.push(
                  r.createElement(
                    "div",
                    { key: "missing: " + t },
                    r.createElement(
                      "a",
                      {
                        href: M.d.STORE_BASE_URL + "app/" + t + "/?beta=1",
                        target: "_blank",
                      },
                      t
                    )
                  )
                ),
                  a.push(t);
              });
              var o = new Array();
              ge.a.GetAllLoadedAppLinks().forEach(function (e, n) {
                if (!t.has(n) && !ye.a.Get().BHasDemoAppID(n)) {
                  var a = ge.a.GetAppLinkInfo(n);
                  o.push(
                    r.createElement(
                      "div",
                      { key: "missingdemo_" + n },
                      "demo" == a.type &&
                        r.createElement(
                          "b",
                          null,
                          "--Error: Sale Page has Demo AppID, based game -- "
                        ),
                      a.name,
                      " (",
                      n,
                      ")",
                      r.createElement(
                        "a",
                        {
                          href: Object(oe.h)(
                            M.d.STORE_BASE_URL + "app/" + n + "/?beta=0"
                          ),
                          target: "_blank",
                        },
                        "Store Page"
                      ),
                      " ",
                      r.createElement(
                        "a",
                        {
                          href: M.d.PARTNER_BASE_URL + "apps/landing/" + n,
                          target: "_blank",
                        },
                        "App Landing Page"
                      )
                    )
                  );
                }
              });
              var i = 0,
                l = 0,
                s = new Array(),
                c = 0,
                d = 0,
                u = 0,
                p = 0;
              Se.a.GetAllAppInfos().forEach(function (e, t) {
                var n = !1;
                if (e.BIsLoaded() && ye.a.Get().BHasDemoAppID(t)) {
                  var r = ye.a.Get().GetDemoEventInfo(t);
                  ge.a.GetAppLinkInfo(r.demo_appid).coming_soon
                    ? ((c += 1), (n = !0))
                    : (d += 1);
                }
                e.BIsLoaded() && e.GetAppStoreData().BHasDemoAppID()
                  ? ((i += 1), n && (u += 1))
                  : e.BIsLoaded() && ye.a.Get().BHasDemoAppID(t)
                  ? ((l += 1), n || (p += 1))
                  : -1 ==
                      a.findIndex(function (e) {
                        return e == t;
                      }) && s.push(e.GetAppStoreData());
              });
              var m = new Array();
              s.forEach(function (e) {
                m.push(
                  r.createElement(
                    "div",
                    { key: "missing_capps" + e.appid },
                    r.createElement(
                      "a",
                      {
                        href:
                          M.d.STORE_BASE_URL + "app/" + e.appid + "/?beta=1",
                        target: "_blank",
                      },
                      e.name,
                      " (",
                      e.appid,
                      ")"
                    )
                  )
                );
              });
              var v = 0;
              return (
                ge.a.GetAllLoadedAppLinks().forEach(function (e) {
                  "demo" != e.type && (v += 1);
                }),
                r.createElement(
                  P.a,
                  null,
                  r.createElement(
                    "h1",
                    null,
                    e.GetNameWithFallback(Object(b.k)(M.d.LANGUAGE))
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Unique AppIDs:"),
                    " ",
                    this.state.rgAppIDs.length,
                    " "
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "Visible Apps in ",
                      M.d.COUNTRY,
                      ":"
                    ),
                    " ",
                    v
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Unknown AppID types:"),
                    " ",
                    this.state.rgUnknownTypeAppIDs.length
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Missing AppIDs:"),
                    " ",
                    ge.a.GetNumMissingAppLinks(),
                    " "
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Demo via DemoStore:"),
                    " ",
                    ye.a.Get().GetNumDemos()
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "Visible apps missing demo store:"
                    ),
                    " ",
                    o.length
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "CApplications Loaded:"),
                    " ",
                    Se.a.GetNumAppLinkLoaded(),
                    " "
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "CApplication with Associated Demos:"
                    ),
                    " ",
                    i
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "  Associated with store page but not released: "
                    ),
                    " ",
                    u
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "CApplication with demo without association:"
                    ),
                    " ",
                    l
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "  Released but not associated with store page: "
                    ),
                    " ",
                    p
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "CApplication missing:"),
                    " ",
                    Se.a.GetMissingAppIDs().size
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "CApplication without demo store and demo associations:"
                    ),
                    " ",
                    s.length
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Released Demo: "),
                    d
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Unreleased Demo: "),
                    c
                  ),
                  r.createElement("hr", null),
                  r.createElement("h2", null, "Missing Appids:"),
                  n,
                  r.createElement(
                    "h2",
                    null,
                    "Missing BOTH demo list and associated demo on product page:"
                  ),
                  m,
                  r.createElement(
                    "h2",
                    null,
                    "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
                  ),
                  o
                )
              );
            }),
            (t = Object(l.c)([u.a], t))
          );
        })(r.Component),
        Oe = new ((function () {
          function e() {
            (this.m_backfill = void 0),
              (this.m_mapEventGIDProcessed = new Map()),
              (this.m_vecEventGID = new Array()),
              (this.m_bBackfillInProgress = !1),
              (this.m_nProcessed = 0),
              (this.m_nSuccesses = 0),
              (this.m_nFailures = 0),
              (this.m_nWarning = 0),
              (this.m_nSkipped = 0);
          }
          return (
            (e.prototype.GetBackfill = function () {
              return this.m_backfill;
            }),
            (e.prototype.SetBackfill = function (e) {
              this.m_backfill = e;
            }),
            (e.prototype.StartBackfill = function (e) {
              (this.m_backfill = e), (this.m_bBackfillInProgress = !0);
            }),
            (e.prototype.CompleteBackfill = function (e) {
              (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
            }),
            (e.prototype.BIsBackkFillInProgress = function () {
              return this.m_bBackfillInProgress;
            }),
            (e.prototype.GetEventBackfillProgress = function () {
              return this.m_mapEventGIDProcessed;
            }),
            (e.prototype.CreateOrGetBackfillProgess = function (e) {
              return (
                this.m_mapEventGIDProcessed.has(e) ||
                  (this.m_mapEventGIDProcessed.set(e, { bProcessing: !1 }),
                  this.m_vecEventGID.push(e)),
                this.m_mapEventGIDProcessed.get(e)
              );
            }),
            (e.prototype.BHasProgress = function (e) {
              return this.m_mapEventGIDProcessed.has(e);
            }),
            (e.prototype.GetBackfillGIDs = function () {
              return this.m_vecEventGID;
            }),
            (e.prototype.CloseProgress = function (e, t) {
              (this.m_nProcessed += 1),
                t.bAlreadyProcessed || t.bSkipped
                  ? (this.m_nSkipped += 1)
                  : t.bSucceeded
                  ? (this.m_nSuccesses += 1)
                  : t.bFailed && (this.m_nFailures += 1),
                t.bWarning && (this.m_nWarning += 1),
                this.m_mapEventGIDProcessed.set(e, t);
            }),
            Object(l.c)([d.C], e.prototype, "m_backfill", void 0),
            Object(l.c)([d.C], e.prototype, "m_mapEventGIDProcessed", void 0),
            Object(l.c)([d.C], e.prototype, "m_bBackfillInProgress", void 0),
            Object(l.c)([d.C], e.prototype, "m_nProcessed", void 0),
            Object(l.c)([d.C], e.prototype, "m_nSuccesses", void 0),
            Object(l.c)([d.C], e.prototype, "m_nFailures", void 0),
            Object(l.c)([d.C], e.prototype, "m_nWarning", void 0),
            Object(l.c)([d.C], e.prototype, "m_nSkipped", void 0),
            Object(l.c)([d.k], e.prototype, "StartBackfill", null),
            Object(l.c)([d.k], e.prototype, "CompleteBackfill", null),
            Object(l.c)([d.k], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        Ce = n("vNkc"),
        Te = n("Nsq5"),
        Ie = n("mB/g"),
        De = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_cancelSignal = c.a.CancelToken.source()),
              (t.m_nImageID = 0),
              (t.m_mapArtworkResizeSuccess = new Map()),
              (t.state = { eBackfillState: void 0 }),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "EventBackfillLanding component unmounted"
              );
            }),
            (t.prototype.OnArtworkResizeBackfill = function () {
              null == this.state.eBackfillState &&
                this.setState(
                  { eBackfillState: "started" },
                  this.BeginArtworkResize
                );
            }),
            (t.prototype.BeginArtworkResize = function () {
              var e = this;
              this.m_mapArtworkResizeSuccess.set("capsule", 0),
                this.m_mapArtworkResizeSuccess.set("spotlight", 0),
                this.m_mapArtworkResizeSuccess.set("background", 0),
                this.RunArtworkResizeBackfill()
                  .then(function () {
                    return e.setState({ eBackfillState: "success" });
                  })
                  .catch(function (t) {
                    var n = Object(D.a)(t);
                    console.error(
                      "EventBackfillLanding: error " + n.strErrorMsg,
                      n
                    ),
                      e.setState({ eBackfillState: "error" });
                  });
            }),
            (t.prototype.GetImageInfo = function (e, t, n) {
              return (
                void 0 === n && (n = ""),
                Object(l.b)(this, void 0, void 0, function () {
                  var a, r;
                  return Object(l.e)(this, function (o) {
                    return (
                      (a = S.a.GetExtensionTypeFromURL(t)),
                      (r = S.a.GetHashFromHashAndExt(t) + n),
                      [
                        2,
                        S.e.AsyncGetImageResolution(
                          e,
                          r,
                          a,
                          this.m_cancelSignal,
                          !0
                        ),
                      ]
                    );
                  });
                })
              );
            }),
            (t.prototype.HandleErrorFatal = function (e, t, n, a) {
              var r = Object(D.a)(t),
                o =
                  "EventBackfillLanding: " +
                  n +
                  " on GID " +
                  e +
                  " : " +
                  r.strErrorMsg;
              console.error(o, r),
                a
                  ? ((a.bFailed = !0),
                    (a.strMessage = o),
                    Oe.CloseProgress(e, a))
                  : Oe.CompleteBackfill("resize_image");
            }),
            (t.prototype.HandleResizeForImageType = function (e, t, n, a, r) {
              return Object(l.b)(this, void 0, void 0, function () {
                var o,
                  i,
                  s,
                  c = this;
                return Object(l.e)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      (o = function (o) {
                        var s, d, u, p, m, v, E;
                        return Object(l.e)(this, function (l) {
                          switch (l.label) {
                            case 0:
                              return e[o] && e[o].length > 0
                                ? ((s = e[o]),
                                  (d = S.a.GetExtensionTypeFromURL(s)),
                                  (u = new g.a(t.clan_steamid)),
                                  d
                                    ? [
                                        4,
                                        i
                                          .GetImageInfo(u, s)
                                          .catch(function (e) {
                                            return (
                                              c.HandleErrorFatal(
                                                null,
                                                e,
                                                "GetImageInfo Original",
                                                n
                                              ),
                                              {
                                                height: 0,
                                                width: 0,
                                                success: 2,
                                              }
                                            );
                                          }),
                                      ]
                                    : [3, 8])
                                : [3, 9];
                            case 1:
                              return 1 == (p = l.sent()).success &&
                                Object(Te.d)(p.width, p.height, a)
                                ? [
                                    4,
                                    i.GetImageInfo(u, s, r).catch(function (e) {
                                      return (
                                        c.HandleErrorFatal(
                                          null,
                                          e,
                                          "GetImageInfo Resize",
                                          n
                                        ),
                                        { height: 0, width: 0, success: 2 }
                                      );
                                    }),
                                  ]
                                : [3, 6];
                            case 2:
                              return 1 != l.sent().success
                                ? [3, 3]
                                : ((n.bAlreadyProcessed = !0), [3, 5]);
                            case 3:
                              return (
                                (n.bProcessing = !0),
                                (m = S.a.GetHashFromHashAndExt(s)),
                                (v = S.a.GetExtensionStringFromHashAndExt(s)),
                                (E = S.d.GetResizeDimension(a)),
                                [
                                  4,
                                  S.b
                                    .SendResizeRequest(
                                      i.m_cancelSignal,
                                      u,
                                      m,
                                      v,
                                      E
                                    )
                                    .then(function (e) {
                                      console.log(
                                        "success on the resize request"
                                      ),
                                        e == E.length
                                          ? ((n.bSucceeded = !0),
                                            c.m_mapArtworkResizeSuccess.set(
                                              a,
                                              c.m_mapArtworkResizeSuccess.get(
                                                a
                                              ) + 1
                                            ))
                                          : ((n.bFailed = !0),
                                            (n.strMessage =
                                              "Did not resize all: " +
                                              a +
                                              " " +
                                              e +
                                              " / " +
                                              E.length));
                                    })
                                    .catch(function (e) {
                                      n.bFailed = !0;
                                      var t = Object(D.a)(e);
                                      (n.strMessage = t.strErrorMsg),
                                        console.error(
                                          "Resize: " + t.strErrorMsg,
                                          t
                                        );
                                    }),
                                ]
                              );
                            case 4:
                              l.sent(), (l.label = 5);
                            case 5:
                              return [3, 7];
                            case 6:
                              (n.bSkipped = !0), (l.label = 7);
                            case 7:
                              return [3, 9];
                            case 8:
                              (n.bSkipped = !0), (l.label = 9);
                            case 9:
                              return [2];
                          }
                        });
                      }),
                        (i = this),
                        (s = 0),
                        (d.label = 1);
                    case 1:
                      return s < e.length && s < 30 ? [5, o(s)] : [3, 4];
                    case 2:
                      d.sent(), (d.label = 3);
                    case 3:
                      return ++s, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.RunArtworkResizeBackfill = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  n,
                  a,
                  r,
                  o = this;
                return Object(l.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      Oe.StartBackfill("resize_image"), (e = 0), (i.label = 1);
                    case 1:
                      return Oe.BIsBackkFillInProgress()
                        ? [
                            4,
                            j
                              .Get()
                              .LoadPartnerEventForQueryIncremental(
                                this.m_cancelSignal,
                                e,
                                25
                              )
                              .catch(function (e) {
                                return o.HandleErrorFatal(
                                  null,
                                  e,
                                  "LoadPartnerEventForQueryIncremental"
                                );
                              }),
                          ]
                        : [3, 7];
                    case 2:
                      if (!(t = i.sent()) || 0 == t.length)
                        return (
                          Oe.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (e += t.length),
                        (n = function (e) {
                          var n, r, i, s;
                          return Object(l.e)(this, function (l) {
                            switch (l.label) {
                              case 0:
                                return (
                                  (n = t[e]),
                                  (r = Oe.CreateOrGetBackfillProgess(
                                    n.unique_id
                                  )),
                                  n.announcement_gid &&
                                  0 != n.announcement_gid.length
                                    ? [
                                        4,
                                        L.c
                                          .LoadPartnerEventFromAnnoucementGID(
                                            Number(n.appid),
                                            n.announcement_gid,
                                            100
                                          )
                                          .catch(function (e) {
                                            o.HandleErrorFatal(
                                              n.announcement_gid,
                                              e,
                                              "LoadPartnerEventFromAnnoucementGID",
                                              r
                                            );
                                          }),
                                      ]
                                    : ((r.bSkipped = !0),
                                      (r.bWarning = !0),
                                      Oe.CloseProgress(n.unique_id, r),
                                      [2, "continue"])
                                );
                              case 1:
                                return (
                                  l.sent(),
                                  r.bFailed
                                    ? [2, "continue"]
                                    : (i = L.c.GetClanEventFromAnnouncementGID(
                                        n.announcement_gid
                                      ))
                                    ? r.bSucceeded ||
                                      r.bFailed ||
                                      r.bAlreadyProcessed
                                      ? ((r.bAlreadyProcessed = !0),
                                        Oe.CloseProgress(n.unique_id, r),
                                        [2, "continue"])
                                      : ((r.bAnalysing = !0),
                                        a.setState({
                                          strInfo:
                                            "Processing " +
                                            Oe.GetBackfillGIDs().length +
                                            " Appid: " +
                                            i.appid +
                                            " Event " +
                                            i.GID +
                                            " Title: " +
                                            i.GetNameWithFallback(0),
                                        }),
                                        i.jsondata &&
                                        i.jsondata.localized_capsule_image
                                          ? ((s =
                                              i.jsondata
                                                .localized_capsule_image),
                                            [
                                              4,
                                              a
                                                .HandleResizeForImageType(
                                                  s,
                                                  n,
                                                  r,
                                                  "capsule",
                                                  S.c.capsule_main
                                                )
                                                .catch(function (e) {
                                                  return o.HandleErrorFatal(
                                                    null,
                                                    e,
                                                    "HandleResizeForImageType capsule",
                                                    r
                                                  );
                                                }),
                                            ])
                                          : [3, 3])
                                    : ((r.bFailed = !0),
                                      (r.strMessage =
                                        "Failed to load the event: " +
                                        n.unique_id),
                                      Oe.CloseProgress(n.unique_id, r),
                                      [2, "continue"])
                                );
                              case 2:
                                l.sent(), (l.label = 3);
                              case 3:
                                return i.jsondata &&
                                  i.jsondata.localized_title_image
                                  ? ((s = i.jsondata.localized_title_image),
                                    [
                                      4,
                                      a
                                        .HandleResizeForImageType(
                                          s,
                                          n,
                                          r,
                                          "background",
                                          S.c.background_mini
                                        )
                                        .catch(function (e) {
                                          return o.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType background",
                                            r
                                          );
                                        }),
                                    ])
                                  : [3, 5];
                              case 4:
                                l.sent(), (l.label = 5);
                              case 5:
                                return i.jsondata &&
                                  i.jsondata.localized_spotlight_image
                                  ? ((s = i.jsondata.localized_spotlight_image),
                                    [
                                      4,
                                      a
                                        .HandleResizeForImageType(
                                          s,
                                          n,
                                          r,
                                          "spotlight",
                                          S.c.spotlight_main
                                        )
                                        .catch(function (e) {
                                          return o.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType spotlight",
                                            r
                                          );
                                        }),
                                    ])
                                  : [3, 7];
                              case 6:
                                l.sent(), (l.label = 7);
                              case 7:
                                return (
                                  Oe.CloseProgress(n.unique_id, r),
                                  Oe.BIsBackkFillInProgress()
                                    ? [2]
                                    : [2, "break"]
                                );
                            }
                          });
                        }),
                        (a = this),
                        (r = 0),
                        (i.label = 3);
                    case 3:
                      return r < t.length ? [5, n(r)] : [3, 6];
                    case 4:
                      if ("break" === i.sent()) return [3, 6];
                      i.label = 5;
                    case 5:
                      return ++r, [3, 3];
                    case 6:
                      return Oe.m_nFailures > 5e3
                        ? (console.log(
                            "Hit too many errors, stoppinng the backfill"
                          ),
                          [3, 7])
                        : [3, 1];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.RenderFailure = function () {
              var e = new Array();
              return (
                Oe.m_nFailures > 0 &&
                  Oe.GetBackfillGIDs().forEach(function (t) {
                    var n = Oe.GetEventBackfillProgress().get(t);
                    if (n && n.bFailed) {
                      var a = L.c.GetClanEventModel(t);
                      a &&
                        e.push(
                          r.createElement(
                            "div",
                            { key: t },
                            r.createElement(
                              Ie.c,
                              { eventModel: a, route: Ie.a.k_eView },
                              a.GetNameWithFallback(0)
                            ),
                            r.createElement(
                              "div",
                              { className: Ce.Error },
                              n.strMessage
                            )
                          )
                        );
                    }
                  }),
                e
              );
            }),
            (t.prototype.RenderResizeProgress = function () {
              var e = new Array();
              return (
                e.push(
                  r.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  r.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  r.createElement(
                    "div",
                    { key: "res_spotlightr" },
                    "Spotlight Resized: ",
                    this.m_mapArtworkResizeSuccess.get("spotlight"),
                    " "
                  )
                ),
                e
              );
            }),
            (t.prototype.render = function () {
              var e = this.RenderFailure(),
                t = this.m_mapArtworkResizeSuccess.has("capsule")
                  ? this.RenderResizeProgress()
                  : void 0;
              return r.createElement(
                "div",
                null,
                r.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "button",
                    {
                      onClick: function () {
                        return Oe.CompleteBackfill("resize_image");
                      },
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  r.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                r.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  Oe.m_nProcessed
                ),
                r.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  Oe.m_nSuccesses
                ),
                r.createElement("div", null, "Events Warning: ", Oe.m_nWarning),
                r.createElement("div", null, "Events Failed: ", Oe.m_nFailures),
                r.createElement("div", null, "Events Skipped: ", Oe.m_nSkipped),
                e.length > 0 &&
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  r.createElement(
                    "div",
                    null,
                    r.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  r.createElement($.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress",
                  })
              );
            }),
            Object(l.c)([re.a], t.prototype, "OnArtworkResizeBackfill", null),
            Object(l.c)([re.a], t.prototype, "BeginArtworkResize", null),
            (t = Object(l.c)([u.a], t))
          );
        })(r.Component),
        Me = n("6AJf"),
        je = n("9w6b"),
        Re = (n("MUT6"), n("BVKn")),
        we = n("YWVM"),
        Ge = n("r3N9"),
        Le = n("SdTr"),
        ke = n("YNty"),
        Be = n("6eA3"),
        Pe = n.n(Be),
        Ne = n("A8Lc"),
        Fe = n.n(Ne),
        Ue = (function () {
          function e() {
            (this.m_objApprovalPriviledge = null),
              (this.m_LoadingPriviledgePromise = null);
            var e = Object(M.h)("sc_app_privildge", "application_config");
            this.ValidateStoreDefault(e)
              ? ("dev" === M.d.WEB_UNIVERSE &&
                  console.log(
                    "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                      e.bHasAccess
                  ),
                (this.m_objApprovalPriviledge = e),
                (this.m_LoadingPriviledgePromise = null))
              : (M.k.logged_in && M.d.EREALM === b.g.k_ESteamRealmChina) ||
                (this.m_objApprovalPriviledge = { bHasAccess: !1 });
          }
          return (
            (e.prototype.BHasSteamChinaAppApprovalPriviledge = function () {
              var e;
              return null === (e = this.m_objApprovalPriviledge) || void 0 === e
                ? void 0
                : e.bHasAccess;
            }),
            (e.prototype.HintLoadAppApprovalPriviledge = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                return Object(l.e)(this, function (e) {
                  return this.m_objApprovalPriviledge
                    ? [2, this.m_objApprovalPriviledge]
                    : (this.m_LoadingPriviledgePromise ||
                        (this.m_LoadingPriviledgePromise = this.InternalLoadAppApprovalPriviledge()),
                      [2, this.m_LoadingPriviledgePromise]);
                });
              });
            }),
            (e.prototype.InternalLoadAppApprovalPriviledge = function () {
              var e;
              return Object(l.b)(this, void 0, void 0, function () {
                var t, n, a, r;
                return Object(l.e)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      (t =
                        M.d.STORE_BASE_URL +
                        "events_admin/ajaxgetscapprovalpriviledge"),
                        (o.label = 1);
                    case 1:
                      return (
                        o.trys.push([1, 3, , 4]),
                        [4, c.a.get(t, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        (n = o.sent()),
                        1 ==
                        (null === (e = null == n ? void 0 : n.data) ||
                        void 0 === e
                          ? void 0
                          : e.success)
                          ? ((this.m_objApprovalPriviledge = {
                              bHasAccess: n.data.bHasAccess,
                            }),
                            [2, this.m_objApprovalPriviledge])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (a = o.sent()),
                        (r = Object(D.a)(a)),
                        console.error(
                          "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                            r.strErrorMsg,
                          r
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, { bHasAccess: !1 }];
                  }
                });
              });
            }),
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              return (
                e && "object" == typeof e && "boolean" == typeof e.bHasAccess
              );
            }),
            Object(l.c)([d.C], e.prototype, "m_objApprovalPriviledge", void 0),
            e
          );
        })(),
        He = Object(u.a)(function (e) {
          var t = r.useState(null),
            n = t[0],
            a = t[1],
            o = e.eventModel,
            i = o.clanSteamID.GetAccountID();
          r.useEffect(
            function () {
              var e = c.a.CancelToken.source();
              return (
                Object(l.b)(void 0, void 0, void 0, function () {
                  var t, n, r;
                  return Object(l.e)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (t = g.a.InitFromClanID(i)),
                          [4, je.a.Get().LoadSingleAppEventPermissions(t)]
                        );
                      case 1:
                        return (
                          (n = o.sent()),
                          [4, Ue.Get().HintLoadAppApprovalPriviledge()]
                        );
                      case 2:
                        return (
                          (r = o.sent()),
                          e.token.reason ||
                            a(M.k.is_support || n.can_edit || r.bHasAccess),
                          [2]
                        );
                    }
                  });
                }),
                function () {
                  return e.cancel("SteamChinaAdminPanel is unmounting");
                }
              );
            },
            [i]
          );
          var s = g.a.InitFromClanID(i);
          return M.k.is_support ||
            je.a.Get().GetPartnerEventPermissions(s).can_edit
            ? r.createElement(we.a, {
                eventModel: o,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: n
                  ? [
                      r.createElement(xe, {
                        key: "removesteamchina",
                        eventModel: o,
                      }),
                    ]
                  : void 0,
              })
            : Ue.Get().BHasSteamChinaAppApprovalPriviledge()
            ? r.createElement(
                "div",
                { className: Be.DisplayAdminPanel },
                r.createElement(
                  "span",
                  { className: Be.DisplayAdminPanel_Title },
                  Object(U.f)("#EventDisplay_Admin_Title")
                ),
                r.createElement(xe, { key: "removesteamchina", eventModel: o })
              )
            : null;
        }),
        xe = function (e) {
          var t = e.eventModel;
          return r.createElement(
            "div",
            {
              className: Object(ne.a)(
                q.Button,
                Be.AdminButton,
                q.ValveOnlyBackground
              ),
              onClick: function (n) {
                var a = !1;
                Object(Z.d)(
                  r.createElement(
                    X.d,
                    {
                      strTitle: Object(U.f)(
                        "#EventAdmin_Moderation_HideEventInSC"
                      ),
                      strDescription: Object(U.f)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc"
                      ),
                      bDestructiveWarning: !0,
                      closeModal: e.closeModal,
                      onOK: function () {
                        (a = !0),
                          Object(l.b)(void 0, void 0, void 0, function () {
                            var n, a, o, i, s, d, u, p, m, v, E;
                            return Object(l.e)(this, function (l) {
                              switch (l.label) {
                                case 0:
                                  (n = new URLSearchParams()).append(
                                    "sessionid",
                                    M.d.SESSIONID
                                  ),
                                    n.append(
                                      "clan_accountid",
                                      "" + t.clanSteamID.GetAccountID()
                                    ),
                                    n.append("gid_clan_event", "" + t.GID),
                                    (a = !1),
                                    (o = 0),
                                    (l.label = 1);
                                case 1:
                                  return (
                                    l.trys.push([1, 3, , 4]),
                                    (i =
                                      M.d.STORE_BASE_URL +
                                      "/events_admin/ajaxhidefromsteamchina"),
                                    [4, c.a.post(i, n, { withCredentials: !0 })]
                                  );
                                case 2:
                                  return (
                                    (s = l.sent()),
                                    (a =
                                      1 ==
                                        (null ===
                                          (p = null == s ? void 0 : s.data) ||
                                        void 0 === p
                                          ? void 0
                                          : p.success) ||
                                      29 ==
                                        (null ===
                                          (m = null == s ? void 0 : s.data) ||
                                        void 0 === m
                                          ? void 0
                                          : m.success)),
                                    29 ==
                                      (null ===
                                        (v = null == s ? void 0 : s.data) ||
                                      void 0 === v
                                        ? void 0
                                        : v.success) &&
                                      console.warn(
                                        "RemoveEventFromSteamChinaButton: we receive duplicate request " +
                                          t.clanSteamID.GetAccountID() +
                                          " : " +
                                          t.GID +
                                          "; event is still removed from SC"
                                      ),
                                    (o =
                                      null ===
                                        (E = null == s ? void 0 : s.data) ||
                                      void 0 === E
                                        ? void 0
                                        : E.success),
                                    [3, 4]
                                  );
                                case 3:
                                  return (
                                    (d = l.sent()),
                                    (u = Object(D.a)(d)),
                                    (o = u.errorCode),
                                    console.error(
                                      "RemoveEventFromSteamChinaButton: error " +
                                        u.strErrorMsg,
                                      u
                                    ),
                                    [3, 4]
                                  );
                                case 4:
                                  return (
                                    e.closeModal && e.closeModal(),
                                    Object(Z.d)(
                                      a
                                        ? r.createElement(
                                            X.d,
                                            { bAlertDialog: !0 },
                                            Object(U.f)(
                                              "#EventDisplay_Share_Success"
                                            )
                                          )
                                        : r.createElement(
                                            X.f,
                                            null,
                                            Object(U.f)(
                                              "#EventDisplay_Share_Failure"
                                            ) +
                                              " " +
                                              o
                                          ),
                                      window
                                    ),
                                    [2]
                                  );
                              }
                            });
                          });
                      },
                    },
                    a &&
                      r.createElement($.a, {
                        size: "medium",
                        position: "center",
                      })
                  ),
                  Object(ae.o)(n)
                );
              },
            },
            Object(U.f)("#EventAdmin_Moderation_HideEventInSC")
          );
        },
        ze = Re.a.Get();
      function We() {
        document.body.classList.contains("events_hub") &&
          document.body.classList.remove("events_hub");
      }
      var Ve = Object(u.a)(function (e) {
          var t = e.bInfiniteScroll,
            n = e.event_gid,
            a = e.announcement_gid,
            i = e.clansteamid,
            l = e.appid,
            s = Object(r.useState)(n ? ze.GetClanEventModel(n) : void 0),
            d = s[0],
            u = s[1],
            p = Object(r.useState)(!1),
            m = p[0],
            v = p[1],
            E = function (e, t) {
              t.token.reason ||
                (u(e),
                (function (e) {
                  var t;
                  if (e && e.appid) {
                    var n = Se.a.GetStoreCapsuleInfo(e.appid).GetAppStoreData();
                    t = n && n.title;
                  } else if (e && e.clanSteamID) {
                    var a = y.a.GetClanInfoByClanAccountID(
                      e.clanSteamID.GetAccountID()
                    );
                    t = a && a.group_name;
                  }
                  var r = e && e.GetNameWithFallback(Object(I.g)(M.d.LANGUAGE));
                  if (e && t && r) {
                    var o = Object(U.f)(
                      "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                      t,
                      r
                    );
                    document.title != o && (document.title = o);
                  }
                })(e));
            },
            h = function (e) {
              var t = Object(D.a)(e);
              console.error("StoreEventDetailView failed " + t.strErrorMsg, t),
                v(!0);
            };
          if (
            (Object(r.useEffect)(We, []),
            Object(r.useEffect)(
              function () {
                var e = c.a.CancelToken.source();
                return (
                  d ||
                    (n && !ze.GetClanEventModel(n)
                      ? ze
                          .LoadPartnerEventGeneric(i, l, n, void 0, 0)
                          .then(function (t) {
                            return E(t, e);
                          })
                          .catch(function () {
                            e.token.reason ||
                              ze
                                .LoadPartnerEventGeneric(i, l, void 0, n, 0)
                                .then(function (t) {
                                  return E(t, e);
                                })
                                .catch(h);
                          })
                      : a &&
                        !ze.GetClanEventGIDFromAnnouncementGID(a) &&
                        ze
                          .LoadPartnerEventGeneric(i, l, void 0, a, 0)
                          .then(function (t) {
                            return E(t, e);
                          })
                          .catch(h)),
                  function () {
                    e.cancel("StoreEventDetailView: unmounting");
                  }
                );
              },
              [n, i, l, a, d]
            ),
            m || !d)
          ) {
            var _ = "lang_" + Object(I.e)(Object(I.g)(M.d.LANGUAGE));
            return o.a.createElement(
              "div",
              {
                className: Object(ne.a)(
                  Pe.a.EventDetailsPageContainer,
                  _,
                  Q.a.PartnerEventFont,
                  Pe.a.NoTitleArtwork
                ),
              },
              o.a.createElement("div", { style: { height: "100px" } }),
              o.a.createElement(ke.a, { strImageURL: "" }),
              o.a.createElement(ke.b, {
                strImageURL: "",
                body: m
                  ? o.a.createElement(
                      "div",
                      { className: Fe.a.ErrorMsg },
                      Object(U.m)(
                        "#Events_FailedToFind",
                        o.a.createElement(
                          "a",
                          { href: M.d.STORE_BASE_URL + "news/" },
                          Object(U.f)("#EventDisplay_NewsHubSubtitle")
                        )
                      )
                    )
                  : o.a.createElement($.a, {
                      string: Object(U.f)("#Loading"),
                      size: "medium",
                      position: "center",
                    }),
                postbody: Boolean(m && i)
                  ? o.a.createElement(Le.a, {
                      clanAccountID: i.GetAccountID(),
                      partnerEventStore: ze,
                    })
                  : void 0,
              })
            );
          }
          return t
            ? o.a.createElement(
                P.a,
                null,
                o.a.createElement(Ge.a, {
                  appid: d.appid,
                  trackingLocation: 7,
                  announcementGID: d.GetAnnouncementGID(),
                  partnerEventStore: ze,
                  eventModel: d,
                  showAppHeader: !0,
                  closeModal: function () {
                    return e.history.push(
                      Object(Ie.e)(d, Ie.a.k_eStoreNewsHub, "allowRelative")
                    );
                  },
                })
              )
            : o.a.createElement(
                P.a,
                null,
                o.a.createElement(ke.c, {
                  lang: Object(I.g)(M.d.LANGUAGE),
                  partnerEventStore: ze,
                  event: d,
                  adminPanel:
                    M.d.EREALM === b.g.k_ESteamRealmChina
                      ? o.a.createElement(He, { eventModel: d })
                      : o.a.createElement(we.a, {
                          eventModel: d,
                          partnerEventStore: ze,
                        }),
                  otherEventRow: o.a.createElement(Le.a, {
                    clanAccountID: d.clanSteamID.GetAccountID(),
                    gidAnnouncement: d.AnnouncementGID,
                    partnerEventStore: ze,
                  }),
                })
              );
        }),
        Ke = Object(h.j)(Ve),
        qe = n("WBba"),
        Qe = n("qD+2"),
        Ye = (n("RD/U"), n("5izx")),
        Xe = n("ykc/"),
        Je = n("av+R"),
        Ze = n("qDk6"),
        $e = n("j+5p"),
        et = (n("kKgT"), n("hwrv")),
        tt = n("apHd"),
        nt = n("xnZ7"),
        at = n.n(nt),
        rt = n("6Y59"),
        ot = n("r+ba"),
        it = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            n.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: [],
              last_update_event: null,
            };
            var a = Object(tt.a)("EventWebRowEmbed");
            return (
              n.ValidateStoreDefault(a) &&
                ((n.state.bPreLoaded = a.bPreLoaded),
                (n.state.announcementGIDList = a.announcementGIDList),
                (n.state.last_update_event = a.last_update_event),
                (n.state.events = []),
                n.state.announcementGIDList.forEach(function (e) {
                  var t = L.c.GetClanEventFromAnnouncementGID(e);
                  t && n.state.events.push(t);
                })),
              n
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentDidMount = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  n,
                  a,
                  r,
                  o,
                  i,
                  s = this;
                return Object(l.e)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (
                        (e = this.props),
                        (t = e.appid),
                        (n = e.event_customization),
                        (a = e.partnerEventStore),
                        (r = e.trackingLocation),
                        this.state.bPreLoaded
                          ? [3, 2]
                          : [
                              4,
                              a.LoadAdjacentPartnerEvents(
                                null,
                                null,
                                t,
                                0,
                                2,
                                n
                              ),
                            ]
                      );
                    case 1:
                      (o = l.sent()),
                        this.setState({ events: o }),
                        r &&
                          o &&
                          o.length > 0 &&
                          ((i = je.a.Get().GetTracker()),
                          this.state.events
                            .filter(function (e) {
                              return e.BIsPartnerEvent();
                            })
                            .forEach(function (e) {
                              return i.MarkEventShown(
                                e.GID,
                                e.clanSteamID.GetAccountID(),
                                r
                              );
                            }),
                          i.Flush()),
                        (l.label = 2);
                    case 2:
                      return (
                        (window.fnPartnerEvent_ShowInfiniteScroll = function (
                          e,
                          t
                        ) {
                          s.setState({
                            bShowModal: !0,
                            announcementGID: t,
                            modalInitialEvent: void 0,
                          });
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.ValidateStoreDefault = function (e) {
              var t = e;
              return (
                !(!t || "object" != typeof t) &&
                void 0 !== t.bPreLoaded &&
                "boolean" == typeof t.bPreLoaded &&
                Array.isArray(t.announcementGIDList)
              );
            }),
            (t.prototype.ShowModal = function (e) {
              var t = this.props.trackingLocation;
              this.setState({
                bShowModal: !0,
                modalInitialEvent: e,
                announcementGID: void 0,
              });
              var n = je.a.Get().GetTracker();
              e &&
                e.BIsPartnerEvent() &&
                n.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
                n.Flush();
            }),
            (t.prototype.ShowLatestUpdateModal = function () {
              var e = this.state.last_update_event,
                t = e.event_gid,
                n = e.announcement_gid,
                a = e.clan_account_id,
                r = this.props.trackingLocation;
              this.setState({
                bShowModal: !0,
                modalInitialEvent: void 0,
                announcementGID: n,
              });
              var o = je.a.Get().GetTracker();
              t && o.MarkEventRead(t, a, r) && o.Flush();
            }),
            (t.prototype.CloseModal = function () {
              this.setState({ bShowModal: !1, modalInitialEvent: null });
            }),
            (t.prototype.BHasLastUpdateEvent = function () {
              var e;
              return Boolean(
                null === (e = this.state.last_update_event) || void 0 === e
                  ? void 0
                  : e.rtime
              );
            }),
            (t.prototype.BShouldShowLastUpdateEvent = function () {
              var e = this.state,
                t = e.last_update_event,
                n = e.events;
              return (
                !(
                  !this.BHasLastUpdateEvent() ||
                  !(null == t ? void 0 : t.announcement_gid)
                ) && !(null == n ? void 0 : n.length)
              );
            }),
            (t.prototype.render = function () {
              var e,
                t = this,
                n = this.state.events;
              if (!n)
                return o.a.createElement(
                  "div",
                  { className: at.a.FlexCenter },
                  o.a.createElement($.a, { size: "medium", position: "center" })
                );
              var a = window.screen.width <= 500 ? 1 : 2,
                r = Boolean(null == n ? void 0 : n.length),
                i = this.BHasLastUpdateEvent(),
                s = this.BShouldShowLastUpdateEvent()
                  ? this.state.last_update_event.announcement_gid
                  : void 0,
                c = this.props.strClassName;
              return o.a.createElement(
                Je.e,
                { className: c },
                this.state.bShowModal &&
                  o.a.createElement(
                    lt,
                    Object(l.a)({}, this.props, {
                      announcementGID:
                        this.state.announcementGID ||
                        (null === (e = this.state.modalInitialEvent) ||
                        void 0 === e
                          ? void 0
                          : e.AnnouncementGID),
                      eventModel: this.state.modalInitialEvent,
                      closeModal: this.CloseModal,
                    })
                  ),
                r &&
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "h2",
                      null,
                      Object(U.f)("#EventBrowse_RecentEvents")
                    ),
                    !M.d.IN_GAMEPADUI &&
                      o.a.createElement(
                        "div",
                        { className: ot.SectionButtonCtn },
                        this.props.bViewAllShowInfiniteScroll
                          ? o.a.createElement(
                              Je.e,
                              {
                                className: ot.SectionButton,
                                onClick: function () {
                                  return t.ShowModal(n[0]);
                                },
                              },
                              Object(U.f)("#EventBrowse_MoreEventsBtn")
                            )
                          : o.a.createElement(
                              Ie.c,
                              {
                                eventModel: n[0],
                                route: Ie.a.k_eViewWebSiteHub,
                                className: ot.SectionButton,
                              },
                              Object(U.f)("#EventBrowse_MoreEventsBtn")
                            )
                      ),
                    o.a.createElement(
                      "div",
                      { className: ot.EventsSummariesCtn },
                      n.slice(0, a).map(function (e) {
                        var a =
                          1 === n.length && window.screen.width > 500
                            ? Le.c
                            : Le.b;
                        return o.a.createElement(a, {
                          key: e.GID,
                          event: e,
                          onClick: function (n) {
                            t.ShowModal(e),
                              n.stopPropagation(),
                              n.preventDefault();
                          },
                        });
                      })
                    )
                  ),
                Boolean(i && s) &&
                  o.a.createElement(ct, {
                    nUpdateTime: this.state.last_update_event.rtime,
                    announcementGID: s,
                    onClick: this.ShowLatestUpdateModal,
                  }),
                Boolean(i && !s && !M.d.IN_GAMEPADUI) &&
                  o.a.createElement(st, {
                    nUpdateTime: this.state.last_update_event.rtime,
                    onClick: this.ShowLatestUpdateModal,
                  })
              );
            }),
            Object(l.c)([re.a], t.prototype, "ShowModal", null),
            Object(l.c)([re.a], t.prototype, "ShowLatestUpdateModal", null),
            Object(l.c)([re.a], t.prototype, "CloseModal", null),
            t
          );
        })(o.a.Component);
      function lt(e) {
        var t = e.appid,
          n = e.partnerEventStore,
          a = e.trackingLocation,
          r = e.announcementGID,
          i = e.eventModel,
          l = e.closeModal,
          s = Object(et.a)(),
          c = o.a.useRef();
        return (
          Object(Je.g)(c, !0),
          o.a.createElement(
            Je.b,
            {
              navID: "WebRowEventInfiniteScroll",
              NavigationManager: s,
              navTreeRef: c,
              onCancelButton: l,
            },
            o.a.createElement(Ge.a, {
              classname: M.d.IN_GAMEPADUI ? void 0 : ot.StoreHeaderAdjust,
              eventClassName: M.d.IN_GAMEPADUI
                ? ot.GamePadUIWidthAdjust
                : void 0,
              appid: t,
              trackingLocation: a,
              announcementGID: r,
              partnerEventStore: n,
              eventModel: i,
              closeModal: l,
            })
          )
        );
      }
      function st(e) {
        return o.a.createElement(
          "div",
          { className: ot.LatestUpdateButtonCtn },
          o.a.createElement(
            "div",
            { className: ot.LatestUpdateIcon },
            o.a.createElement(rt.sb, null)
          ),
          o.a.createElement(
            Je.e,
            { className: ot.LatestUpdateButton, onClick: e.onClick },
            Object(U.f)(
              "#EventBrowse_LatestUpdateTime_Button",
              Object(U.o)(e.nUpdateTime)
            )
          )
        );
      }
      function ct(e) {
        var t = e.nUpdateTime,
          n = e.announcementGID,
          a = e.onClick,
          r = n ? L.c.GetClanEventFromAnnouncementGID(n) : null,
          i = function (e) {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          };
        return o.a.createElement(
          "div",
          null,
          o.a.createElement(
            "h2",
            null,
            Object(U.f)("#EventBrowse_LastUpdateDate", Object(U.o)(t))
          ),
          o.a.createElement(
            "div",
            { className: ot.SectionButtonCtn },
            o.a.createElement(
              "div",
              { className: ot.SectionButton, onClick: i },
              Object(U.f)("#EventBrowse_ViewLatestUpdate")
            )
          ),
          Boolean(r) &&
            o.a.createElement(
              Ze.a,
              {
                className: ot.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: $e.c.PREFERRED_CHILD,
              },
              o.a.createElement(Le.c, { event: r, onClick: i })
            )
        );
      }
      var dt = n("2l+k"),
        ut = (function () {
          function e() {
            this.m_rgRSSEnabledClans = [];
          }
          return (
            (e.prototype.GetAllRSSEnabledClans = function () {
              return this.m_rgRSSEnabledClans;
            }),
            (e.prototype.GetTrustedEnabledClans = function (e) {
              return this.m_rgRSSEnabledClans
                .filter(function (t) {
                  return t.is_trusted_press == e;
                })
                .map(function (e) {
                  return e.clan_accoundid;
                });
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()), e.s_Singleton.Init()),
                e.s_Singleton
              );
            }),
            (e.prototype.Init = function () {
              var e = Object(M.h)("rssaccountinfo", "application_config");
              this.ValidateRSSAccountConfig(e) &&
                (this.m_rgRSSEnabledClans = e);
            }),
            (e.prototype.ValidateRSSAccountConfig = function (e) {
              var t = e;
              return (
                t &&
                Array.isArray(t) &&
                t.length > 0 &&
                "object" == typeof t[0] &&
                "number" == typeof t[0].clan_accoundid
              );
            }),
            (e.prototype.LoadKnownAllRSSInfo = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(l.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = new Array()),
                        (t = dt.a.Get()),
                        this.m_rgRSSEnabledClans.forEach(function (n) {
                          t.BHasClanIDLoaded(n.clan_accoundid) ||
                            e.push(
                              t.QueueCuratorAdminInfoLoad(n.clan_accoundid)
                            );
                        }),
                        [4, Promise.all(e)]
                      );
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.ExtractWithoutRSSAutomation = function () {
              var e = [],
                t = dt.a.Get();
              return (
                this.m_rgRSSEnabledClans.forEach(function (n) {
                  var a = t.GetRSSAdminForClanAccountID(n.clan_accoundid);
                  a && !a.BIsAutomationEnabled() && e.push(n.clan_accoundid);
                }),
                e
              );
            }),
            (e.prototype.HintLoadAccounts = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                return Object(l.e)(this, function (e) {
                  return [2];
                });
              });
            }),
            (e.prototype.ReindexClanEventsAndReloadAccount = function (e) {
              var t;
              return Object(l.b)(this, void 0, void 0, function () {
                var n, a, r, o, i;
                return Object(l.e)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      (n =
                        M.d.STORE_BASE_URL +
                        "events_admin/ajaxflushandreindexrss"),
                        (a = new FormData()).set("sessionid", M.d.SESSIONID),
                        a.append("clanids", "" + e),
                        (l.label = 1);
                    case 1:
                      return (
                        l.trys.push([1, 3, , 4]),
                        [4, c.a.post(n, a, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        (r = l.sent()),
                        1 ==
                        (null === (t = null == r ? void 0 : r.data) ||
                        void 0 === t
                          ? void 0
                          : t.success)
                          ? [2, !0]
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (o = l.sent()),
                        (i = Object(D.a)(o)),
                        console.error(
                          "Failed to ReindexClanEventsAndReloadAccount: " +
                            i.strErrorMsg,
                          i
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, !1];
                  }
                });
              });
            }),
            e
          );
        })(),
        pt = n("wjMc"),
        mt = n("BRUS"),
        vt = n("uuth"),
        Et = n("WGPV"),
        ht = n.n(Et),
        _t =
          (n("uobO"),
          Object(h.j)(function (e) {
            var t = Object(r.useState)(!0),
              n = t[0],
              a = t[1];
            if (
              (Object(r.useEffect)(function () {
                Object(l.b)(void 0, void 0, void 0, function () {
                  return Object(l.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return y.a.Init(), [4, ut.Get().HintLoadAccounts()];
                      case 1:
                        return e.sent(), a(!1), [2];
                    }
                  });
                });
              }, []),
              n)
            )
              return o.a.createElement($.a, {
                string: Object(U.f)("#Loading"),
                size: "medium",
              });
            var i = ut.Get().GetTrustedEnabledClans(!0),
              s = ut.Get().GetTrustedEnabledClans(!1);
            return o.a.createElement(
              "div",
              null,
              o.a.createElement(
                P.a,
                null,
                o.a.createElement(
                  "h1",
                  null,
                  Object(U.f)("#RSSModeration_Title")
                ),
                o.a.createElement(bt, null),
                o.a.createElement(At, {
                  rgClanIDs: ut
                    .Get()
                    .GetAllRSSEnabledClans()
                    .map(function (e) {
                      return e.clan_accoundid;
                    }),
                }),
                o.a.createElement(ft, {
                  rgClanIDs: i,
                  strTitle: Object(U.f)("#RSSModeration_TrustTitle"),
                }),
                o.a.createElement(ft, {
                  rgClanIDs: s,
                  strTitle: Object(U.f)("#RSSModeration_RestTitle"),
                })
              )
            );
          })),
        bt = Object(u.a)(function (e) {
          var t = Object(r.useState)(!1),
            n = t[0],
            a = t[1],
            i = Object(r.useState)(void 0),
            s = i[0],
            c = i[1];
          return n
            ? o.a.createElement($.a, {
                string: Object(U.f)("#Loading"),
                size: "medium",
              })
            : void 0 !== s
            ? Boolean(s.length > 0)
              ? o.a.createElement(ft, {
                  rgClanIDs: s,
                  strTitle: Object(U.f)("#RSSModeration_InactiveAutomation"),
                })
              : o.a.createElement(
                  "div",
                  null,
                  Object(U.f)("#RSSModreation_AllAutomationEnabled")
                )
            : o.a.createElement(
                B.d,
                {
                  onClick: function () {
                    return Object(l.b)(void 0, void 0, void 0, function () {
                      return Object(l.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return a(!0), [4, ut.Get().LoadKnownAllRSSInfo()];
                          case 1:
                            return (
                              e.sent(),
                              c(ut.Get().ExtractWithoutRSSAutomation()),
                              a(!1),
                              [2]
                            );
                        }
                      });
                    });
                  },
                },
                Object(U.f)("#RSSModeration_FindInActive"),
                " "
              );
        }),
        ft = function (e) {
          var t = e.rgClanIDs,
            n = e.strTitle,
            a = Object(r.useState)(!1),
            i = a[0],
            l = a[1],
            s = null;
          return (
            i ||
              (s = t.map(function (e) {
                return o.a.createElement(gt, { key: e, clanAccountID: e });
              })),
            o.a.createElement(
              "div",
              { className: Object(ne.a)(ht.a.SectionContainer) },
              o.a.createElement(
                "h2",
                {
                  className: Object(ne.a)(ht.a.ModSectionTitle),
                  onDoubleClick: function () {
                    return l(!i);
                  },
                },
                n,
                o.a.createElement("span", null, " "),
                o.a.createElement(
                  B.d,
                  {
                    className: ht.a.ResizeButton,
                    onClick: function () {
                      return l(!i);
                    },
                  },
                  i
                    ? o.a.createElement(rt.Q, null)
                    : o.a.createElement(rt.T, null)
                )
              ),
              i &&
                o.a.createElement(
                  B.d,
                  {
                    onClick: function () {
                      return l(!1);
                    },
                  },
                  Object(U.f)("#Sale_ShowContents")
                ),
              s
            )
          );
        },
        gt = Object(u.a)(function (e) {
          var t = e.clanAccountID;
          return y.a.BHasClanInfoLoadedByAccountID(t) &&
            dt.a.Get().BHasClanIDLoaded(t)
            ? o.a.createElement(yt, {
                clanInfo: y.a.GetClanInfoByClanAccountID(t),
                rssAdminInfo: dt.a.Get().GetRSSAdminForClanAccountID(t),
              })
            : o.a.createElement(St, { clanAccountID: t });
        }),
        St = function (e) {
          var t = e.clanAccountID,
            n = "-500px";
          return o.a.createElement(
            vt.a,
            {
              onEnter: function () {
                return Object(l.b)(void 0, void 0, void 0, function () {
                  var e;
                  return Object(l.e)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (e = g.a.InitFromClanID(t)),
                          [
                            4,
                            Promise.all([
                              y.a.LoadClanInfoForClanSteamID(e),
                              dt.a.Get().QueueCuratorAdminInfoLoad(t),
                            ]),
                          ]
                        );
                      case 1:
                        return n.sent(), [2];
                    }
                  });
                });
              },
              topOffset: n,
              bottomOffset: n,
            },
            o.a.createElement(
              "div",
              { className: ht.a.TileContainer },
              o.a.createElement("div", null, Object(U.f)("#Loading"), " - ", t)
            )
          );
        },
        yt = function (e) {
          var t = e.clanInfo,
            n = e.rssAdminInfo,
            a = Object(r.useState)(!1),
            i = a[0],
            l = a[1],
            s = M.d.STORE_BASE_URL + "newshub/group/" + t.clanAccountID,
            c =
              M.d.STORE_BASE_URL +
              "curator/" +
              t.clanAccountID +
              "/admin/manage_rss",
            d = M.d.COMMUNITY_BASE_URL + "group/" + t.clanAccountID,
            u =
              "https://steamsupport.valvesoftware.com/clan/overview/" +
              g.a.InitFromClanID(t.clanAccountID).ConvertTo64BitString(),
            p = dt.a.Get().GetRSSAdminStats(t.clanAccountID);
          return o.a.createElement(
            "div",
            { className: Object(ne.a)(ht.a.TileContainer) },
            o.a.createElement(
              "div",
              { className: Object(ne.a)(ht.a.TileSpread) },
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "div",
                  null,
                  t.group_name,
                  " - ",
                  t.clanAccountID
                ),
                o.a.createElement(
                  "div",
                  null,
                  o.a.createElement(
                    "div",
                    null,
                    Object(U.f)("#CuratorAdmin_RSSFeed"),
                    ":"
                  ),
                  o.a.createElement("a", { href: n.GetRSSUrl() }, n.GetRSSUrl())
                ),
                Boolean(p) &&
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "div",
                      null,
                      Object(U.f)(
                        "#RSSModeration_TotalEvents",
                        p.total_event_count.toLocaleString()
                      )
                    ),
                    o.a.createElement(
                      "div",
                      null,
                      Object(U.f)(
                        "#RSSModeration_RSSEvents",
                        p.rss_event_count.toLocaleString()
                      )
                    )
                  ),
                o.a.createElement(
                  B.d,
                  {
                    onClick: function () {
                      return l(!i);
                    },
                  },
                  Object(U.f)(
                    i
                      ? "#Bbcode_Expand_Details_Expanded"
                      : "#Bbcode_Expand_Details_Collapsed"
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: s },
                      Object(U.f)("#EventDisplay_NewsHubSubtitle")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: c },
                      Object(U.f)("#CuratorAdmin_RSSFeed_title")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: d },
                      Object(U.f)("#RSSModeration_GroupPage")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: u },
                      Object(U.f)("#RSSModeration_SupportPage")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(At, { rgClanIDs: [t.clanAccountID] })
                  )
                )
              ),
              o.a.createElement(
                "div",
                { className: ht.a.CreatorCtn },
                o.a.createElement(mt.a, {
                  bHideCreatorType: !0,
                  creatorID: {
                    name: null,
                    clan_account_id: t.clanAccountID,
                    type: "developer",
                  },
                  bSmallFormat: !0,
                })
              )
            ),
            Boolean(i) &&
              o.a.createElement(
                o.a.Fragment,
                null,
                Boolean(n.BHasSavedRSSURL())
                  ? o.a.createElement(pt.a, {
                      strRssURL: n.GetRSSUrl(),
                      admin: n,
                    })
                  : o.a.createElement(
                      "div",
                      null,
                      Object(U.f)("#RSSModeration_NoRSSFeed")
                    )
              )
          );
        },
        At = function (e) {
          return o.a.createElement(
            ee.a,
            {
              toolTipContent: Object(U.f)(
                "#RSSModeration_ReindexAndReload_ttip"
              ),
            },
            o.a.createElement(
              B.d,
              {
                onClick: function (t) {
                  Object(Z.d)(
                    o.a.createElement(Ot, Object(l.a)({}, e)),
                    Object(ae.o)(t)
                  );
                },
              },
              Object(U.f)("#RSSModeration_ReindexAndReload")
            )
          );
        },
        Ot = function (e) {
          var t = Object(r.useState)(void 0),
            n = t[0],
            a = t[1],
            i = Object(r.useState)(!1),
            s = i[0],
            c = i[1],
            d = Object(r.useState)(void 0),
            u = d[0],
            p = d[1],
            m = function () {
              return e.closeModal && e.closeModal();
            };
          return o.a.createElement(
            X.h,
            { onEscKeypress: m },
            o.a.createElement(
              B.f,
              null,
              o.a.createElement(
                B.k,
                null,
                " ",
                Object(U.f)("#RSSModeration_ReindexAndReload"),
                " "
              ),
              o.a.createElement(
                B.b,
                null,
                o.a.createElement(
                  B.c,
                  null,
                  void 0 === n
                    ? o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                          "span",
                          null,
                          Object(U.f)(
                            "#RSSModeration_Reindex_Verify",
                            e.rgClanIDs.length
                          )
                        ),
                        o.a.createElement(
                          B.q,
                          {
                            onClick: function () {
                              return Object(l.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var t, n, r;
                                  return Object(l.e)(this, function (o) {
                                    switch (o.label) {
                                      case 0:
                                        a((t = 0)), (n = 0), (o.label = 1);
                                      case 1:
                                        return n < e.rgClanIDs.length
                                          ? ((r = e.rgClanIDs[n]),
                                            [
                                              4,
                                              ut
                                                .Get()
                                                .ReindexClanEventsAndReloadAccount(
                                                  r
                                                ),
                                            ])
                                          : [3, 4];
                                      case 2:
                                        if (!o.sent())
                                          return (
                                            p(
                                              Object(U.f)(
                                                "#Error_Generic_Label"
                                              )
                                            ),
                                            [3, 4]
                                          );
                                        a((t += 1)), (o.label = 3);
                                      case 3:
                                        return ++n, [3, 1];
                                      case 4:
                                        return c(!0), [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(U.f)("#Button_Continue")
                        )
                      )
                    : o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                          "span",
                          null,
                          Object(U.f)(
                            "#RSSModeration_Reindex_Action",
                            n,
                            e.rgClanIDs.length
                          )
                        ),
                        s
                          ? o.a.createElement(
                              "span",
                              null,
                              Object(U.f)(
                                "#EventEditor_ImportFromHTML_ConvertFinished"
                              )
                            )
                          : o.a.createElement($.a, {
                              size: "small",
                              string: Object(U.f)("#Updating"),
                            })
                      ),
                  Boolean(u) && o.a.createElement("span", null, u, " ")
                ),
                o.a.createElement(
                  B.j,
                  null,
                  o.a.createElement(
                    B.d,
                    { onClick: m },
                    Object(U.f)(s ? "#Button_OK" : "#Button_Cancel")
                  )
                )
              )
            )
          );
        },
        Ct = n("4spj");
      Qe.a.Init(new qe.a(M.d.WEBAPI_BASE_URL)), L.c.Init();
      var Tt = function (e) {
        var t = e.children,
          n = Object(r.useState)(je.a.IsInitialized()),
          a = n[0],
          i = n[1];
        return a
          ? o.a.createElement(o.a.Fragment, null, t)
          : (je.a.InitGlobal().then(function () {
              return i(!0);
            }),
            null);
      };
      function It(e) {
        return function (t) {
          return o.a.createElement(Tt, null, o.a.createElement(e, t));
        };
      }
      var Dt = It(de),
        Mt = It(De),
        jt = It(Me.b),
        Rt = It(i.c),
        wt = It(Ke),
        Gt = It(function (e) {
          var t = Object(Ye.b)(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3),
            r = e.appid;
          return o.a.createElement(it, {
            appid: r,
            partnerEventStore: Re.a.Get(),
            event_customization: {
              rtime_oldestevent: a,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [34],
            },
            strClassName: "early_access_announcements",
            trackingLocation: 3,
          });
        }),
        Lt = It(Ae),
        kt = It(_t),
        Bt = It(function (e) {
          var t = e.promotionName,
            n = e.language,
            a = o.a.useState(
              L.c.GetClanEventFromAnnouncementGID(M.e.ANNOUNCEMENT_GID)
            ),
            r = a[0],
            i = a[1],
            l = Object(et.a)();
          if (
            (o.a.useEffect(
              function () {
                if (
                  (null == r ? void 0 : r.AnnouncementGID) !=
                  M.e.ANNOUNCEMENT_GID
                ) {
                  var e = new g.a(M.c.CLANSTEAMID);
                  L.c
                    .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                      e,
                      M.e.ANNOUNCEMENT_GID,
                      null
                    )
                    .then(i);
                }
              },
              [r]
            ),
            !r)
          )
            return o.a.createElement(
              "div",
              { className: at.a.FlexCenter, style: { height: "500px" } },
              o.a.createElement($.a, {
                size: "medium",
                string: Object(U.f)("#Loading"),
              })
            );
          var s = r.visibility_state !== f.j.k_EEventStateVisible;
          return o.a.createElement(
            Xe.a,
            { navID: "StoreSalePageRoot", NavigationManager: l },
            o.a.createElement(Ct.h, {
              promotionName: t,
              language: n,
              eventModel: r,
              bIsPreview: s,
            })
          );
        });
    },
    hwrv: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a,
        r = n("mrSG"),
        o = n("rHSA"),
        i = n("XxJJ"),
        l = [
          { index: 0, type: o.a.OK, category: "action" },
          { index: 1, type: o.a.CANCEL, category: "action" },
          { index: 2, type: o.a.SECONDARY, category: "action" },
          { index: 3, type: o.a.OPTIONS, category: "action" },
          { index: 4, type: o.a.BUMPER_LEFT, category: "action" },
          { index: 5, type: o.a.BUMPER_RIGHT, category: "action" },
          { index: 6, type: o.a.TRIGGER_LEFT, category: "action" },
          { index: 7, type: o.a.TRIGGER_RIGHT, category: "action" },
          { index: 8, type: o.a.SELECT, category: "action" },
          { index: 9, type: o.a.START, category: "action" },
          { index: 10, type: o.a.LSTICK_CLICK, category: "action" },
          { index: 11, type: o.a.RSTICK_CLICK, category: "action" },
          { index: 12, type: o.a.DIR_UP, category: "navigation" },
          { index: 13, type: o.a.DIR_DOWN, category: "navigation" },
          { index: 14, type: o.a.DIR_LEFT, category: "navigation" },
          { index: 15, type: o.a.DIR_RIGHT, category: "navigation" },
          { index: 16, type: o.a.STEAM_GUIDE, category: "action" },
          { index: 17, type: o.a.SELECT, category: "action" },
        ],
        s = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgGamepadStatus = []),
              t.SetSourceType(o.b.GAMEPAD),
              window.addEventListener("gamepadconnected", function (e) {
                t.m_bGamepadDetected ||
                  (t.OnGamepadDetected(), t.PollGamepads());
              }),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.PollGamepads = function () {
              for (
                var e = navigator.getGamepads(), t = !1, n = 0;
                n < e.length;
                n++
              ) {
                var a = e[n];
                if (a) {
                  this.m_rgGamepadStatus[n] ||
                    (this.m_rgGamepadStatus[n] = { buttons: [] });
                  for (
                    var r = this.m_rgGamepadStatus[n], o = 0;
                    o < l.length;
                    o++
                  ) {
                    var i = l[o],
                      s = i.index;
                    a.buttons[s] &&
                      (a.buttons[s].pressed
                        ? ((t = !0),
                          r.buttons[s] ||
                            ((r.buttons[s] = !0), this.OnButtonDown(i.type)))
                        : r.buttons[s] &&
                          (this.OnButtonUp(i.type), (r.buttons[s] = !1)));
                  }
                }
              }
              document.hasFocus() || t
                ? requestAnimationFrame(this.PollGamepads)
                : (console.log("Lost focus - suspending gamepad polling"),
                  window.addEventListener(
                    "focusin",
                    this.OnWindowRegainedFocus
                  ));
            }),
            (t.prototype.OnWindowRegainedFocus = function () {
              window.removeEventListener("focusin", this.OnWindowRegainedFocus),
                this.PollGamepads();
            }),
            Object(r.c)([i.a], t.prototype, "PollGamepads", null),
            Object(r.c)([i.a], t.prototype, "OnWindowRegainedFocus", null),
            t
          );
        })(o.c),
        c = n("kyHq"),
        d = {
          A: o.a.OK,
          B: o.a.CANCEL,
          X: o.a.SECONDARY,
          Y: o.a.OPTIONS,
          SELECT: o.a.SELECT,
          START: o.a.START,
          LSHOULDER: o.a.BUMPER_LEFT,
          RSHOULDER: o.a.BUMPER_RIGHT,
          LTRIGGER: o.a.TRIGGER_LEFT,
          RTRIGGER: o.a.TRIGGER_RIGHT,
          LEFTSTICK_UP: o.a.DIR_UP,
          LEFTSTICK_RIGHT: o.a.DIR_RIGHT,
          LEFTSTICK_DOWN: o.a.DIR_DOWN,
          LEFTSTICK_LEFT: o.a.DIR_LEFT,
          LEFTSTICK_CLICK: o.a.LSTICK_CLICK,
          RIGHTSTICK_CLICK: o.a.RSTICK_CLICK,
          LeftStick: o.a.LSTICK_TOUCH,
          RightStick: o.a.RSTICK_TOUCH,
          LeftTrackpad: o.a.LPAD_TOUCH,
          LeftTrackpadClick: o.a.LPAD_CLICK,
          RightTrackpad: o.a.RPAD_TOUCH,
          RightTrackpadClick: o.a.RPAD_CLICK,
          RearLeftUpper: o.a.REAR_LEFT_UPPER,
          RearLeftLower: o.a.REAR_LEFT_LOWER,
          RearRightUpper: o.a.REAR_RIGHT_UPPER,
          RearRightLower: o.a.REAR_RIGHT_LOWER,
        },
        u =
          (((a = {})[c.h.SystemKey0] = o.a.STEAM_GUIDE),
          (a[c.h.SystemKey1] = o.a.STEAM_QUICK_MENU),
          a),
        p = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgControllers = new Map()),
              "undefined" != typeof SteamClient &&
                ((t.m_hUnregisterControllerInput = SteamClient.Input.RegisterForControllerInputMessages(
                  t.HandleControllerInputMessages
                )),
                SteamClient.System.UI.RegisterForSystemKeyEvents(
                  t.HandleSystemKeyEvents
                )),
              t.SetSourceType(o.b.GAMEPAD),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.HandleSystemKeyEvents = function (e) {
              var t = u[e.eKey];
              t && this.OnSystemButtonPress(t, e.nControllerIndex);
            }),
            (t.prototype.OnSystemButtonPress = function (e, t) {
              this.OnButtonDown(e, t), this.OnButtonUp(e, t);
            }),
            (t.prototype.GetController = function (e) {
              var t = this.m_rgControllers.get(e);
              return (
                t ||
                  ((t = { activeButtons: {} }), this.m_rgControllers.set(e, t)),
                t
              );
            }),
            (t.prototype.HandleControllerInputMessages = function (e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var a = n[t],
                  r = d[a.strActionName];
                if (null != r) {
                  var o = this.GetController(a.nController);
                  a.bState && !o.activeButtons[r]
                    ? ((o.activeButtons[r] = !0),
                      this.OnButtonDown(r, a.nController))
                    : !a.bState &&
                      o.activeButtons[r] &&
                      ((o.activeButtons[r] = !1),
                      this.OnButtonUp(r, a.nController));
                }
              }
            }),
            Object(r.c)([i.a], t.prototype, "HandleSystemKeyEvents", null),
            Object(r.c)(
              [i.a],
              t.prototype,
              "HandleControllerInputMessages",
              null
            ),
            t
          );
        })(o.c),
        m = n("X3Ds"),
        v = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_lastButtonDown = o.a.INVALID),
              n.SetSourceType(o.b.KEYBOARD),
              t.addEventListener("keydown", n.OnKeyDown),
              t.addEventListener("keyup", n.OnKeyUp),
              t.addEventListener("blur", n.Reset),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnKeyDown = function (e) {
              var t = this.TranslateKey(e);
              t != o.a.INVALID &&
                t != this.m_lastButtonDown &&
                (this.Reset(),
                this.OnButtonDown(t),
                (this.m_lastButtonDown = t),
                e.preventDefault());
            }),
            (t.prototype.OnKeyUp = function (e) {
              var t = this.TranslateKey(e);
              t != o.a.INVALID &&
                (this.OnButtonUp(t),
                (this.m_lastButtonDown = o.a.INVALID),
                e.preventDefault());
            }),
            (t.prototype.Reset = function () {
              this.m_lastButtonDown != o.a.INVALID &&
                (this.OnButtonUp(this.m_lastButtonDown),
                (this.m_lastButtonDown = o.a.INVALID));
            }),
            (t.prototype.TranslateKey = function (e) {
              var t = e.code,
                n = e.ctrlKey,
                a =
                  m.q(e.target) &&
                  ("INPUT" === e.target.nodeName ||
                    "TEXTAREA" === e.target.nodeName);
              if (n)
                switch (t) {
                  case "Digit1":
                    return o.a.STEAM_GUIDE;
                  case "Digit2":
                    return o.a.STEAM_QUICK_MENU;
                  case "Digit3":
                    return o.a.SELECT;
                  case "Digit4":
                    return o.a.BUMPER_LEFT;
                  case "Digit5":
                    return o.a.BUMPER_RIGHT;
                  case "Digit6":
                    return o.a.LSTICK_CLICK;
                  case "Digit7":
                    return o.a.RSTICK_CLICK;
                  case "Digit8":
                    return o.a.OPTIONS;
                  case "Digit9":
                    return o.a.SELECT;
                  case "Digit0":
                    return o.a.START;
                }
              switch (t) {
                case "Escape":
                  return o.a.CANCEL;
                case "Enter":
                  return a ? o.a.INVALID : o.a.OK;
                case "Backspace":
                  return a ? o.a.INVALID : o.a.SECONDARY;
                case "ArrowUp":
                  return o.a.DIR_UP;
                case "ArrowDown":
                  return o.a.DIR_DOWN;
                case "ArrowLeft":
                  return o.a.DIR_LEFT;
                case "ArrowRight":
                  return o.a.DIR_RIGHT;
              }
              return o.a.INVALID;
            }),
            Object(r.c)([i.a], t.prototype, "OnKeyDown", null),
            Object(r.c)([i.a], t.prototype, "OnKeyUp", null),
            Object(r.c)([i.a], t.prototype, "Reset", null),
            t
          );
        })(o.c),
        E = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_nAccumulatedMouseMovement = 0),
              (n.m_bFirstMouseUpdate = !0),
              n.SetSourceType(o.b.MOUSE),
              t.addEventListener("mousedown", n.OnMouseDown),
              t.addEventListener("mousemove", n.OnMouseMove),
              t.addEventListener("blur", n.Reset),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnMouseDown = function (e) {
              e.defaultPrevented || this.OnNavigationTypeChanged(o.b.MOUSE);
            }),
            (t.prototype.OnMouseMove = function (e) {
              if (!e.defaultPrevented) {
                if (this.m_bFirstMouseUpdate)
                  return (
                    (this.m_nLastScreenX = e.screenX),
                    (this.m_nLastScreenY = e.screenY),
                    void (this.m_bFirstMouseUpdate = !1)
                  );
                (this.m_nAccumulatedMouseMovement +=
                  Math.abs(e.screenX - this.m_nLastScreenX) +
                  Math.abs(e.screenY - this.m_nLastScreenY)),
                  this.m_nAccumulatedMouseMovement > 500 &&
                    (this.Reset(), this.OnNavigationTypeChanged(o.b.MOUSE));
              }
            }),
            (t.prototype.Reset = function () {
              (this.m_nAccumulatedMouseMovement = 0),
                (this.m_bFirstMouseUpdate = !0);
            }),
            Object(r.c)([i.a], t.prototype, "OnMouseDown", null),
            Object(r.c)([i.a], t.prototype, "OnMouseMove", null),
            Object(r.c)([i.a], t.prototype, "Reset", null),
            t
          );
        })(o.c),
        h = n("NxAk"),
        _ = n("lkRc"),
        b = (function () {
          function e() {
            (this.m_GamepadNavigationController = new h.c()),
              _.d.IN_GAMEPADUI &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new p()
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new s()
                )),
              "dev" == _.d.WEB_UNIVERSE &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new v(window)
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new E(window)
                ));
          }
          return (
            (e.prototype.GetNavigationController = function () {
              return this.m_GamepadNavigationController;
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()),
                  "dev" == _.d.WEB_UNIVERSE &&
                    (window.g_StoreWebNavStore = e.s_Singleton)),
                e.s_Singleton
              );
            }),
            e
          );
        })();
      function f() {
        var e = window.legacyWebFocusNavController;
        return e || b.Get().GetNavigationController();
      }
    },
    vNkc: function (e, t, n) {
      e.exports = { Error: "eventbackfill_Error_1eWgI" };
    },
    "ykc/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var a = n("mrSG"),
        r = n("q1tI"),
        o = n.n(r),
        i = n("av+R"),
        l = n("yLGM"),
        s = n("opsS"),
        c = n("lkRc");
      function d(e) {
        var t = e.children,
          n = e.navTreeRef,
          r = Object(a.f)(e, ["children", "navTreeRef"]),
          d = o.a.useRef(),
          u = Object(s.f)(d, n);
        if (c.d.IN_GAMEPADUI) {
          var p = window.__nav_tree_root;
          return o.a.createElement(
            i.b,
            Object(a.a)({}, r, {
              navTreeRef: u,
              secondary: !0,
              parentEmbeddedNavTree: p,
            }),
            o.a.createElement(l.a, null, t)
          );
        }
        return o.a.createElement(o.a.Fragment, null, t);
      }
    },
    zrk3: function (e, t, n) {
      e.exports = {
        ModeratorAuditActionCtn:
          "eventmoderationaudit_ModeratorAuditActionCtn_f6z__",
        ExpandModActions: "eventmoderationaudit_ExpandModActions_3nNMe",
      };
    },
  },
]);
