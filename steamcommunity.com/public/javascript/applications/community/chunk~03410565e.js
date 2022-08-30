/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1649],
  {
    58514: (e) => {
      e.exports = {
        QAFullPageView: "questions_QAFullPageView_3tZpF",
        QAName: "questions_QAName_2mOBp",
        QAColumns: "questions_QAColumns_pBgAb",
        QAMainCtn: "questions_QAMainCtn_hHqRc",
        QAModeratorColumn: "questions_QAModeratorColumn_nfftC",
        QASplitColumns: "questions_QASplitColumns_1CRIg",
        ModeratorInstructions: "questions_ModeratorInstructions_RqtnW",
        AnsweredSectionHeader: "questions_AnsweredSectionHeader_3cWpk",
        InputButton: "questions_InputButton_1z1rt",
        Reload: "questions_Reload_3LIo4",
        Reloading: "questions_Reloading_1hooL",
        SignInButton: "questions_SignInButton_GRHnX",
        QAHeader: "questions_QAHeader_3skHm",
        QuestionACK: "questions_QuestionACK_16zhk",
        Visible: "questions_Visible_2jHMe",
        QATitleRow: "questions_QATitleRow_2qdcm",
        QATitle: "questions_QATitle_1c7nC",
        Description: "questions_Description_3eGNN",
        InputCtn: "questions_InputCtn_oF1kT",
        LogInPrompt: "questions_LogInPrompt_3Gbue",
        ButtonCtn: "questions_ButtonCtn_3kFHr",
        SaveSpinner: "questions_SaveSpinner_20svv",
        QuestionsCtn: "questions_QuestionsCtn_1W6uJ",
        InsetShadowTopCtn: "questions_InsetShadowTopCtn_ak9JV",
        InsetShadowTop: "questions_InsetShadowTop_1C2e4",
        QuestionsHeader: "questions_QuestionsHeader_jUQG9",
        QuestionsTitle: "questions_QuestionsTitle_2CYLB",
        QuestionList: "questions_QuestionList_28dwO",
        NoQuestions: "questions_NoQuestions_1R9HB",
        Question: "questions_Question_3BIOo",
        Hidden: "questions_Hidden_3XPCk",
        QuestionCtn: "questions_QuestionCtn_31sLy",
        UserAvatar: "questions_UserAvatar_2ojKe",
        PersonaName: "questions_PersonaName_3CaA5",
        QuestionText: "questions_QuestionText_2NuCE",
        QuestionAndVotes: "questions_QuestionAndVotes_ChywO",
        QuestionTitle: "questions_QuestionTitle_2AXcH",
        QuestionStats: "questions_QuestionStats_1DzgV",
        PostTime: "questions_PostTime_2hfBu",
        Votes: "questions_Votes_2IyuQ",
        Vote_Ready: "questions_Vote_Ready_3_8_a",
        Vote_Positive: "questions_Vote_Positive_eWDCy",
        RateIcon: "questions_RateIcon_2j0Gw",
        Vote_CannotVote: "questions_Vote_CannotVote_2Pq4z",
        DateAndTime: "questions_DateAndTime_4VjnZ",
        Answer: "questions_Answer_wNABP",
        AnswerTitle: "questions_AnswerTitle_1c4mo",
        AnswerCheck: "questions_AnswerCheck_u8uV8",
        AnswerText: "questions_AnswerText_3ar8c",
        ModerationHeader: "questions_ModerationHeader_37OKc",
        ModeratorSection: "questions_ModeratorSection_3tP54",
        ToolRow: "questions_ToolRow_2c2vo",
        ToolLabel: "questions_ToolLabel_3prTN",
        QADashboardCtn: "questions_QADashboardCtn_32zJG",
        DashboardHeader: "questions_DashboardHeader_1R1Em",
        DashboardHeaderTitle: "questions_DashboardHeaderTitle_1cRHa",
        DashboardHeaderButtonCtn: "questions_DashboardHeaderButtonCtn_uoLDQ",
        DashboardRow: "questions_DashboardRow_gpraR",
        GIDSession: "questions_GIDSession_3d_6f",
        QuestionCount: "questions_QuestionCount_3kZ9S",
        QAndADeleteColumn: "questions_QAndADeleteColumn_363My",
        QAndAName: "questions_QAndAName_2-5V8",
        Prompt: "questions_Prompt_2ZFvN",
        Editing: "questions_Editing_1wUKv",
        NameInput: "questions_NameInput_3avr0",
        DeleteButton: "questions_DeleteButton_o8aBa",
        DashboardColumnHeaders: "questions_DashboardColumnHeaders_2WOM0",
        CreateQAndADialog: "questions_CreateQAndADialog_1wBzu",
        DeleteQAndADialog: "questions_DeleteQAndADialog_3valP",
        DeleteInfo: "questions_DeleteInfo_3EhGH",
      };
    },
    69382: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => P, EI: () => K, kF: () => J });
      var s = n(70655),
        o = n(67294),
        i = (n(92398), n(3389)),
        a = n(5525),
        r = n(81130),
        l = n(99533),
        u = n(22975),
        d = n(90666);
      const c = [
        "mousemove",
        "keypress",
        "scroll",
        "wheel",
        "focusin",
        "touchstart",
        "touchmove",
      ];
      class m {
        constructor() {
          (this.m_callbackList = new l.pB()),
            (this.m_timer = null),
            (this.m_bAreEventListenersRegistered = !1),
            "dev" == d.De.WEB_UNIVERSE && (window.g_FidgetStore = this);
        }
        static Get() {
          return m.s_Singleton || (m.s_Singleton = new m()), m.s_Singleton;
        }
        ResetFidgetTimer(e) {
          this.m_timer && window.clearTimeout(this.m_timer);
          this.m_timer = window.setTimeout(() => {
            (this.m_timer = null), this.m_callbackList.Dispatch();
          }, 2e3);
        }
        BIsUserFidgeting() {
          return !!this.m_timer;
        }
        GetCallbackList() {
          return this.m_callbackList;
        }
        BRegisterEventListeners() {
          if (this.m_bAreEventListenersRegistered) return !1;
          const e = window;
          for (const t of c) e.addEventListener(t, this.ResetFidgetTimer);
          return (this.m_bAreEventListenersRegistered = !0), !0;
        }
        BUnregisterEventListeners() {
          if (!this.m_bAreEventListenersRegistered) return !1;
          const e = window;
          for (const t of c) e.removeEventListener(t, this.ResetFidgetTimer);
          return (this.m_bAreEventListenersRegistered = !1), !1;
        }
      }
      function A() {
        o.useEffect(() => {
          const e = m.Get().BRegisterEventListeners();
          return () => {
            e && m.Get().BUnregisterEventListeners();
          };
        }, []);
      }
      (0, s.gn)([r.a], m.prototype, "ResetFidgetTimer", null);
      var _ = n(2388),
        v = n(9669),
        Q = n.n(v),
        p = (n(26149), n(74163)),
        g = (n(82946), n(93976));
      class C {
        constructor() {
          (this.m_mapQAndASessions = new Map()),
            (this.m_mapQAndAChangeCallbackList = new Map()),
            (this.m_dashboardCallbackList = new l.pB()),
            (this.m_mapQuestions = new Map()),
            (this.m_mapQuestionCallbackList = new Map()),
            (this.m_rgPendingQuestionGIDs = []),
            "dev" == d.De.WEB_UNIVERSE && (window.g_QAndAStore = this);
        }
        static Get() {
          return C.s_Singleton || (C.s_Singleton = new C()), C.s_Singleton;
        }
        GetQAndACallbackList(e) {
          return (
            this.m_mapQAndAChangeCallbackList.has(e) ||
              this.m_mapQAndAChangeCallbackList.set(e, new l.pB()),
            this.m_mapQAndAChangeCallbackList.get(e)
          );
        }
        GetQuestionCallbackList(e) {
          return (
            this.m_mapQuestionCallbackList.has(e) ||
              this.m_mapQuestionCallbackList.set(e, new l.pB()),
            this.m_mapQuestionCallbackList.get(e)
          );
        }
        GetDashboardCallbackList() {
          return this.m_dashboardCallbackList;
        }
        GetSession(e) {
          return this.m_mapQAndASessions.get(e);
        }
        GetAllSessions() {
          return Array.from(this.m_mapQAndASessions.values());
        }
        GetQuestion(e) {
          return this.m_mapQuestions.get(e);
        }
        PreloadPosterProfiles(e, t) {
          const n = new Set();
          for (const t of e)
            n.add(
              i.K.InitFromAccountID(t.posterAccountID).ConvertTo64BitString()
            );
          const s = Array.from(n);
          for (; s.length > 0; ) {
            const e = s.splice(0, 500);
            _.y$.LoadProfiles(e, t);
          }
        }
        LoadAllSessions(e) {
          var t, n, o, i;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!d.L7.logged_in || !d.De.SESSIONID) return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxgetqandasforgroup",
              a = {};
            let r = null;
            try {
              const n = yield Q().get(s, {
                params: a,
                cancelToken: null == e ? void 0 : e.token,
              });
              if (
                (console.log(n),
                200 == (null == n ? void 0 : n.status) &&
                  1 ==
                    (null === (t = n.data) || void 0 === t
                      ? void 0
                      : t.success) &&
                  n.data.qandas)
              ) {
                for (const e of n.data.qandas)
                  this.m_mapQAndASessions.set(e.gidSession, e);
                return (
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              }
              r = { response: n };
            } catch (e) {
              r = e;
            }
            const l = (0, g.l)(r);
            return (
              console.error(
                "Could not load question and answer sessions for group",
                l.strErrorMsg,
                l
              ),
              null !==
                (i =
                  null ===
                    (o =
                      null === (n = null == r ? void 0 : r.response) ||
                      void 0 === n
                        ? void 0
                        : n.data) || void 0 === o
                    ? void 0
                    : o.success) && void 0 !== i
                ? i
                : 2
            );
          });
        }
        CreateNewSession(e, t) {
          var n, o, i, a;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!d.L7.logged_in || !d.De.SESSIONID) return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxcreateqanda",
              r = new FormData();
            r.append("sessionid", d.De.SESSIONID), r.append("name", e);
            let l = null;
            try {
              const e = yield Q().post(s, r, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                1 ==
                  (null === (n = e.data) || void 0 === n
                    ? void 0
                    : n.success) &&
                e.data.qanda
              )
                return (
                  this.m_mapQAndASessions.set(
                    e.data.qanda.gidSession,
                    e.data.qanda
                  ),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              l = { response: e };
            } catch (e) {
              l = e;
            }
            const u = (0, g.l)(l);
            return (
              console.error("Could not create Q&A", e, u.strErrorMsg, u),
              null !==
                (a =
                  null ===
                    (i =
                      null === (o = null == l ? void 0 : l.response) ||
                      void 0 === o
                        ? void 0
                        : o.data) || void 0 === i
                    ? void 0
                    : i.success) && void 0 !== a
                ? a
                : 2
            );
          });
        }
        RenameSession(e, t, n) {
          var o, i, a, r;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!d.L7.logged_in || !d.De.SESSIONID) return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxrenameqanda/" +
                e,
              l = new FormData();
            l.append("sessionid", d.De.SESSIONID), l.append("name", t);
            let u = null;
            try {
              const i = yield Q().post(s, l, {
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == i ? void 0 : i.status) &&
                1 ==
                  (null === (o = i.data) || void 0 === o ? void 0 : o.success)
              )
                return (
                  (this.m_mapQAndASessions.get(e).strName = t),
                  this.GetQAndACallbackList(e).Dispatch(
                    this.m_mapQAndASessions.get(e)
                  ),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              u = { response: i };
            } catch (e) {
              u = e;
            }
            const c = (0, g.l)(u);
            return (
              console.error("Could not rename Q&A", e, t, c.strErrorMsg, c),
              null !==
                (r =
                  null ===
                    (a =
                      null === (i = null == u ? void 0 : u.response) ||
                      void 0 === i
                        ? void 0
                        : i.data) || void 0 === a
                    ? void 0
                    : a.success) && void 0 !== r
                ? r
                : 2
            );
          });
        }
        DeleteSession(e, t) {
          var n, o, i, a;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!d.L7.logged_in || !d.De.SESSIONID) return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxdeleteqanda/" +
                e,
              r = new FormData();
            r.append("sessionid", d.De.SESSIONID);
            let l = null;
            try {
              const o = yield Q().post(s, r, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == o ? void 0 : o.status) &&
                1 ==
                  (null === (n = o.data) || void 0 === n ? void 0 : n.success)
              )
                return (
                  this.m_mapQAndASessions.delete(e),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              l = { response: o };
            } catch (e) {
              l = e;
            }
            const u = (0, g.l)(l);
            return (
              console.error("Could not delete Q&A", e, u.strErrorMsg, u),
              null !==
                (a =
                  null ===
                    (i =
                      null === (o = null == l ? void 0 : l.response) ||
                      void 0 === o
                        ? void 0
                        : o.data) || void 0 === i
                    ? void 0
                    : i.success) && void 0 !== a
                ? a
                : 2
            );
          });
        }
        LoadSession(e, t, n) {
          var o, i, a, r, l, u, c, m, A, _;
          return (0, s.mG)(this, void 0, void 0, function* () {
            const s =
                d.L7.logged_in &&
                (!this.m_mapQAndASessions.has(e) ||
                  this.m_mapQAndASessions.get(e).bUserCanModerate ||
                  this.m_rgPendingQuestionGIDs.length > 0 ||
                  t)
                  ? "/ajaxgetqandasessionforuser/"
                  : "/ajaxgetqandasession/",
              v =
                d.De.COMMUNITY_BASE_URL + "questions/" + d.JA.VANITY_ID + s + e,
              p = {};
            let C = null;
            try {
              const t = yield Q().get(v, {
                params: p,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (o = t.data) || void 0 === o
                    ? void 0
                    : o.success) &&
                t.data.qanda &&
                t.data.questions
              ) {
                this.PreloadPosterProfiles(t.data.questions, n);
                for (const e of t.data.questions) {
                  const t = e.gidQuestion,
                    n =
                      null !==
                        (a =
                          null === (i = this.m_mapQuestions.get(t)) ||
                          void 0 === i
                            ? void 0
                            : i.bUserUpVoted) && void 0 !== a
                        ? a
                        : e.bUserUpVoted,
                    s = Object.assign(Object.assign({}, e), {
                      bUserUpVoted: n,
                    });
                  this.m_mapQuestions.set(t, s),
                    this.GetQuestionCallbackList(t).Dispatch(s);
                }
                const s =
                    null !==
                      (l =
                        null === (r = this.m_mapQAndASessions.get(e)) ||
                        void 0 === r
                          ? void 0
                          : r.bUserCanModerate) && void 0 !== l
                      ? l
                      : t.data.qanda.bUserCanModerate,
                  o =
                    null !==
                      (c =
                        null === (u = this.m_mapQAndASessions.get(e)) ||
                        void 0 === u
                          ? void 0
                          : u.bUserCanAskQuestions) && void 0 !== c
                      ? c
                      : t.data.qanda.bUserCanAskQuestions,
                  d = Object.assign(Object.assign({}, t.data.qanda), {
                    bUserCanModerate: s,
                    bUserCanAskQuestions: o,
                  });
                return (
                  this.m_mapQAndASessions.set(e, d),
                  this.GetQAndACallbackList(e).Dispatch(d),
                  this.UpdatePendingQuestionList(t.data.qanda.rgQuestionGIDs),
                  1
                );
              }
              C = { response: t };
            } catch (e) {
              C = e;
            }
            const h = (0, g.l)(C);
            return (
              console.error("Could not load Q&A", e, h.strErrorMsg, h),
              null !==
                (_ =
                  null ===
                    (A =
                      null === (m = null == C ? void 0 : C.response) ||
                      void 0 === m
                        ? void 0
                        : m.data) || void 0 === A
                    ? void 0
                    : A.success) && void 0 !== _
                ? _
                : 2
            );
          });
        }
        UpdatePendingQuestionList(e) {
          var t;
          const n = new Set();
          for (const t of e) {
            const e = this.m_mapQuestions.get(t);
            e.posterAccountID == d.L7.accountid &&
              1 == e.eState &&
              n.add(e.gidQuestion);
          }
          if (this.m_rgPendingQuestionGIDs.length > 0) {
            const s = new Set(e);
            for (const e of this.m_rgPendingQuestionGIDs)
              s.has(e) &&
                1 ==
                  (null === (t = this.m_mapQuestions.get(e)) || void 0 === t
                    ? void 0
                    : t.eState) &&
                n.add(e);
          }
          this.m_rgPendingQuestionGIDs = Array.from(n);
        }
        AskNewQuestion(e, t, n) {
          var o, i, a, r, l;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (
              !d.L7.logged_in ||
              !d.De.SESSIONID ||
              !(null === (o = this.m_mapQAndASessions.get(e)) || void 0 === o
                ? void 0
                : o.bUserCanAskQuestions)
            )
              return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxaskquestion/" +
                e,
              u = new FormData();
            u.append("sessionid", d.De.SESSIONID), u.append("question", t);
            let c = null;
            try {
              const t = yield Q().post(s, u, {
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (i = t.data) || void 0 === i ? void 0 : i.success)
              ) {
                this.m_rgPendingQuestionGIDs.push(t.data.gidQuestion);
                const s = !0;
                return this.LoadSession(e, s, n), 1;
              }
              c = { response: t };
            } catch (e) {
              c = e;
            }
            const m = (0, g.l)(c);
            return (
              console.error(
                "Could not upload question",
                e,
                t,
                m.strErrorMsg,
                m
              ),
              null !==
                (l =
                  null ===
                    (r =
                      null === (a = null == c ? void 0 : c.response) ||
                      void 0 === a
                        ? void 0
                        : a.data) || void 0 === r
                    ? void 0
                    : r.success) && void 0 !== l
                ? l
                : 2
            );
          });
        }
        ModerateQuestion(e, t, n, o) {
          var i, a, r, l, u;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (
              !d.L7.logged_in ||
              !d.De.SESSIONID ||
              !(null === (i = this.m_mapQAndASessions.get(e)) || void 0 === i
                ? void 0
                : i.bUserCanModerate)
            )
              return 15;
            if (1 != n && 3 != n) return 8;
            if (this.m_mapQuestions.get(t).eState == n) return 1;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxmoderatequestion/" +
                e,
              c = new FormData();
            c.append("sessionid", d.De.SESSIONID),
              c.append("gidquestion", t),
              c.append("action", 1 == n ? "show" : "hide");
            let m = null;
            try {
              const t = yield Q().post(s, c, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (a = t.data) || void 0 === a ? void 0 : a.success)
              ) {
                const t = !0;
                return this.LoadSession(e, t, o), 1;
              }
              m = { response: t };
            } catch (e) {
              m = e;
            }
            const A = (0, g.l)(m);
            return (
              console.error(
                "Could not moderate question",
                e,
                t,
                n,
                A.strErrorMsg,
                A
              ),
              null !==
                (u =
                  null ===
                    (l =
                      null === (r = null == m ? void 0 : m.response) ||
                      void 0 === r
                        ? void 0
                        : r.data) || void 0 === l
                    ? void 0
                    : l.success) && void 0 !== u
                ? u
                : 2
            );
          });
        }
        AnswerQuestion(e, t, n, o) {
          var i, a, r, l, u;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (
              !d.L7.logged_in ||
              !d.De.SESSIONID ||
              !(null === (i = this.m_mapQAndASessions.get(e)) || void 0 === i
                ? void 0
                : i.bUserCanAskQuestions)
            )
              return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxanswerquestion/" +
                e,
              c = new FormData();
            c.append("sessionid", d.De.SESSIONID),
              c.append("gidquestion", t),
              c.append("answer", n);
            let m = null;
            try {
              const t = yield Q().post(s, c, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (a = t.data) || void 0 === a ? void 0 : a.success)
              ) {
                const t = !0;
                return this.LoadSession(e, t, o), 1;
              }
              m = { response: t };
            } catch (e) {
              m = e;
            }
            const A = (0, g.l)(m);
            return (
              console.error(
                "Could not upload answer",
                e,
                t,
                n,
                A.strErrorMsg,
                A
              ),
              null !==
                (u =
                  null ===
                    (l =
                      null === (r = null == m ? void 0 : m.response) ||
                      void 0 === r
                        ? void 0
                        : r.data) || void 0 === l
                    ? void 0
                    : l.success) && void 0 !== u
                ? u
                : 2
            );
          });
        }
        VoteOnQuestion(e, t, n, o) {
          var i, a, r, l, u;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (
              !d.L7.logged_in ||
              !d.De.SESSIONID ||
              !(null === (i = this.m_mapQAndASessions.get(e)) || void 0 === i
                ? void 0
                : i.bUserCanAskQuestions)
            )
              return 15;
            if (n === this.m_mapQuestions.get(t).bUserUpVoted) return 1;
            let s = this.m_mapQuestions.get(t);
            const c = s.nVoteCount,
              m = c + (n ? 1 : -1);
            (s = Object.assign(Object.assign({}, s), {
              nVoteCount: m,
              bUserUpVoted: n,
            })),
              this.m_mapQuestions.set(t, s),
              this.GetQuestionCallbackList(t).Dispatch(s);
            const A =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxvoteforquestion/" +
                e,
              _ = new FormData();
            _.append("sessionid", d.De.SESSIONID),
              _.append("gidquestion", t),
              _.append("up", n ? "1" : "0");
            let v = null;
            try {
              const e = yield Q().post(A, _, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                1 ==
                  (null === (a = e.data) || void 0 === a ? void 0 : a.success)
              )
                return 1;
              v = { response: e };
            } catch (e) {
              v = e;
            }
            (s = Object.assign(Object.assign({}, s), {
              nVoteCount: c,
              bUserUpVoted: !n,
            })),
              this.m_mapQuestions.set(t, s),
              this.GetQuestionCallbackList(t).Dispatch(s);
            const p = (0, g.l)(v);
            return (
              console.error("Could not upload vote", e, t, n, p.strErrorMsg, p),
              null !==
                (u =
                  null ===
                    (l =
                      null === (r = null == v ? void 0 : v.response) ||
                      void 0 === r
                        ? void 0
                        : r.data) || void 0 === l
                    ? void 0
                    : l.success) && void 0 !== u
                ? u
                : 2
            );
          });
        }
      }
      function h(e) {
        const t = (0, p.T)("useQAndASession"),
          n = o.useCallback(
            (n) =>
              (0, s.mG)(this, void 0, void 0, function* () {
                var s;
                return (
                  (null === (s = C.Get().GetSession(e)) || void 0 === s
                    ? void 0
                    : s.bUserCanAskQuestions) &&
                  (yield C.Get().AskNewQuestion(e, n, t))
                );
              }),
            [e, t]
          ),
          i = o.useCallback(
            (n, s) => {
              var o;
              return (
                (null === (o = C.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanAskQuestions) &&
                C.Get().VoteOnQuestion(e, n, s, t)
              );
            },
            [e, t]
          ),
          a = o.useCallback(
            (e) => {
              var t;
              const s = !!e,
                o = null == e ? void 0 : e.strName,
                a = null == e ? void 0 : e.bUserCanModerate,
                r = null == e ? void 0 : e.bUserCanAskQuestions,
                l = [],
                u = [],
                d = [],
                c = [];
              for (const n of null !==
                (t = null == e ? void 0 : e.rgQuestionGIDs) && void 0 !== t
                ? t
                : []) {
                const e = C.Get().GetQuestion(n);
                switch (null == e ? void 0 : e.eState) {
                  case 1:
                    l.push(n);
                    break;
                  case 2:
                    u.push(n);
                    break;
                  case 0:
                    d.push(n);
                    break;
                  case 3:
                    c.push(n);
                }
              }
              return (
                l.sort(
                  (e, t) =>
                    C.Get().GetQuestion(t).nVoteCount -
                    C.Get().GetQuestion(e).nVoteCount
                ),
                u.sort(
                  (e, t) =>
                    C.Get().GetQuestion(t).rtAnswerTime -
                    C.Get().GetQuestion(e).rtAnswerTime
                ),
                d.sort(
                  (e, t) =>
                    C.Get().GetQuestion(t).rtPostTime -
                    C.Get().GetQuestion(e).rtPostTime
                ),
                c.sort(
                  (e, t) =>
                    C.Get().GetQuestion(t).rtPostTime -
                    C.Get().GetQuestion(e).rtPostTime
                ),
                {
                  bIsLoaded: s,
                  strName: o,
                  bUserCanModerate: a,
                  bUserCanAskQuestions: r,
                  fnAskQuestion: n,
                  fnVoteOnQuestion: i,
                  rgModeratedQuestionGIDs: l,
                  rgAnsweredQuestionGIDs: u,
                  rgNewQuestionGIDs: d,
                  rgHiddenQuestionGIDs: c,
                }
              );
            },
            [n, i]
          ),
          [r, l] = o.useState(() => a(C.Get().GetSession(e))),
          d = o.useCallback((e) => l(a(e)), [a]);
        return (
          (0, u.Qg)(C.Get().GetQAndACallbackList(e), d),
          o.useEffect(() => {
            r.bIsLoaded || C.Get().LoadSession(e);
          }, [r.bIsLoaded, e]),
          r
        );
      }
      let S = null;
      function E(e) {
        const t = (0, p.T)("useReloadFunction"),
          [n, s] = o.useState(!1),
          i = o.useCallback(() => {
            s(!0);
            const n = C.Get().LoadSession(e, !1, t);
            return n.then(() => s(!1)), n;
          }, [e, t]),
          a = (function (e) {
            const t = o.useRef(null),
              n = o.useCallback(() => {
                t.current && (t.current(), (t.current = null));
              }, []);
            return (
              (0, u.Qg)(m.Get().GetCallbackList(), n),
              o.useEffect(() => () => {
                t.current = null;
              }),
              o.useCallback(
                (...n) => {
                  m.Get().BIsUserFidgeting()
                    ? (t.current = () => e(...n))
                    : ((t.current = null), e(...n));
                },
                [e]
              )
            );
          })(i);
        return (
          o.useEffect(() => {
            if (S) return () => {};
            return (
              (S = window.setInterval(a, 1e4)), () => window.clearInterval(S)
            );
          }, [a]),
          o.useMemo(() => ({ fnReload: i, bIsReloading: n }), [i, n])
        );
      }
      function N(e) {
        const t = (0, p.T)("useQuestionModeratorActions"),
          n = o.useCallback(
            (n, s) => {
              var o;
              return (
                (null === (o = C.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanModerate) && C.Get().AnswerQuestion(e, n, s, t)
              );
            },
            [e, t]
          ),
          s = o.useCallback(
            (n, s) => {
              var o;
              return (
                (null === (o = C.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanModerate) && C.Get().ModerateQuestion(e, n, s, t)
              );
            },
            [e, t]
          );
        return o.useMemo(
          () => ({ fnAnswerQuestion: n, fnModerateQuestion: s }),
          [n, s]
        );
      }
      var D = n(48341),
        b = n(9410),
        I = n(96602),
        f = n(8850),
        w = n(59650),
        T = n(95598),
        k = n(13596),
        q = n(28268),
        G = n(98300),
        L = n(7573),
        M = n(41311),
        U = n(73604),
        x = n(30600),
        V = n(58514),
        B = n.n(V);
      function P(e) {
        const t = (function () {
          const [e, t] = o.useState(C.Get().GetAllSessions());
          return (
            (0, u.Qg)(C.Get().GetDashboardCallbackList(), t),
            o.useEffect(() => {
              0 == e.length && C.Get().LoadAllSessions();
            }, [e.length]),
            e
          );
        })();
        return o.createElement(
          "div",
          { className: B().QADashboardCtn },
          o.createElement(R, null),
          o.createElement(
            "div",
            {
              className: (0, L.Z)(B().DashboardRow, B().DashboardColumnHeaders),
            },
            o.createElement(
              "div",
              { className: B().QAndAName },
              (0, M.Xx)("#QAndA_Column_Name")
            ),
            o.createElement(
              "div",
              { className: B().GIDSession },
              (0, M.Xx)("#QAndA_Column_GID")
            ),
            o.createElement(
              "div",
              { className: B().QuestionCount },
              (0, M.Xx)("#QAndA_Column_QuestionCount")
            ),
            o.createElement(
              "div",
              { className: B().QAndADeleteColumn },
              (0, M.Xx)("#QAndA_Column_DeleteButtons")
            )
          ),
          t.map((e) => o.createElement(O, { key: e.gidSession, qanda: e }))
        );
      }
      function R(e) {
        const t = o.useCallback(
          () =>
            (0, w.x1)(o.createElement(H, null), window, {
              strTitle: (0, M.Xx)("#QAndA_CreateQAndA_Title"),
            }),
          []
        );
        return o.createElement(
          "div",
          { className: B().DashboardHeader },
          o.createElement(
            "div",
            { className: B().DashboardHeaderTitle },
            (0, M.Xx)("#QAndA_Dashboard")
          ),
          o.createElement(
            "div",
            { className: B().DashboardHeaderButtonCtn },
            o.createElement(
              D.zx,
              { onClick: t },
              (0, M.Xx)("#QAndA_CreateQAndA_Button")
            )
          )
        );
      }
      function H(e) {
        const t = (function () {
            const e = (0, p.T)("useCreateQAndAFn");
            return o.useCallback((t) => C.Get().CreateNewSession(t, e), [e]);
          })(),
          [n, s] = o.useState("");
        return o.createElement(
          f.uH,
          {
            strTitle: (0, M.Xx)("#QAndA_CreateQAndA_Title"),
            strDescription: (0, M.Xx)("#QAndA_CreateQAndA_Instructions"),
            strOKButtonText: (0, M.Xx)("#Button_Create"),
            onOK: () => t(n),
            bOKDisabled: 0 == n.length,
            closeModal: e.closeModal,
            className: B().CreateQAndADialog,
          },
          o.createElement(D.II, {
            type: "text",
            className: B().NameInput,
            value: n,
            placeholder: (0, M.Xx)("#QAndA_EnterNamePrompt"),
            onFocus: (e) => e.target.select(),
            onChange: (e) => s(e.currentTarget.value),
            maxLength: 120,
          })
        );
      }
      function O(e) {
        const { qanda: t } = e,
          n =
            d.De.COMMUNITY_BASE_URL +
            "questions/" +
            d.JA.VANITY_ID +
            "/view/" +
            t.gidSession,
          s = o.useCallback(
            (e) => {
              e.stopPropagation(),
                e.preventDefault(),
                (0, w.x1)(o.createElement(X, { qanda: t }), window, {
                  strTitle: (0, M.Xx)("#QAndA_CreateQAndA_Title"),
                });
            },
            [t]
          );
        return o.createElement(
          "a",
          { className: B().DashboardRow, href: n },
          o.createElement(y, { qanda: t }),
          o.createElement("div", { className: B().GIDSession }, t.gidSession),
          o.createElement(
            "div",
            { className: B().QuestionCount },
            t.rgQuestionGIDs.length
          ),
          o.createElement(
            "div",
            { className: B().QAndADeleteColumn },
            o.createElement(
              "div",
              { className: B().DeleteButton, onClick: s },
              o.createElement(T.rFk, null)
            )
          )
        );
      }
      function y(e) {
        const { qanda: t } = e,
          [n, s] = o.useState(!1),
          [i, a] = o.useState(t.strName),
          r = (function () {
            const e = (0, p.T)("useRenameQAndAFn");
            return o.useCallback((t, n) => C.Get().RenameSession(t, n, e), [e]);
          })(),
          l =
            t.strName.length > 0
              ? t.strName
              : o.createElement(
                  "span",
                  { className: B().Prompt },
                  (0, M.Xx)("#QAndA_EnterNamePrompt")
                ),
          u = o.createElement(
            "div",
            { className: B().NameInput },
            o.createElement(D.II, {
              type: "text",
              className: B().NameInput,
              value: i,
              placeholder: (0, M.Xx)("#QAndA_EnterNamePrompt"),
              onFocus: (e) => e.target.select(),
              onChange: (e) => a(e.currentTarget.value),
              maxLength: 120,
            }),
            o.createElement(
              D.KM,
              {
                onClick: (e) => {
                  e.stopPropagation(),
                    e.preventDefault(),
                    0 != (0, U.eT)(i, t.strName)
                      ? r(t.gidSession, i).then(() => s(!1))
                      : s(!1);
                },
                className: B().InputButton,
              },
              (0, M.Xx)("#Button_Save")
            )
          );
        return o.createElement(
          "div",
          {
            className: (0, L.Z)(B().QAndAName, n && B().Editing),
            onClick: (e) => {
              e.stopPropagation(), e.preventDefault(), n || s(!0);
            },
          },
          n ? u : l
        );
      }
      function X(e) {
        const { qanda: t } = e,
          n = (function () {
            const e = (0, p.T)("useDeleteQAndAFn");
            return o.useCallback((t) => C.Get().DeleteSession(t, e), [e]);
          })();
        return o.createElement(
          f.uH,
          {
            strTitle: (0, M.Xx)("#QAndA_Column_DeleteButtons"),
            strDescription: (0, M.Xx)("#QAndA_DeleteQAndA_Instructions"),
            onOK: () => n(t.gidSession),
            closeModal: e.closeModal,
            className: B().DeleteQAndADialog,
          },
          o.createElement(
            "div",
            { className: B().DeleteInfo },
            (0, M.Xx)("#QAndA_Column_Name") + ": " + t.strName
          ),
          o.createElement(
            "div",
            { className: B().DeleteInfo },
            (0, M.Xx)("#QAndA_Column_QuestionCount") +
              ": " +
              t.rgQuestionGIDs.length
          )
        );
      }
      function F(e) {
        const {
            gidSession: t,
            gidQuestion: n,
            bUserCanModerate: s,
            bUserCanVote: i,
            fnVoteOnQuestion: a,
            rtNow: r,
          } = e,
          [l, d] = (function (e) {
            const [t, n] = o.useState(C.Get().GetQuestion(e));
            (0, u.Qg)(C.Get().GetQuestionCallbackList(e), n);
            const [s, i] = o.useState(!!t);
            return [t, !!t || s];
          })(n);
        if (!l) return null;
        const c = r - l.rtPostTime,
          m = c < x._H.PerDay ? (0, M.yW)(c) : (0, M.m9)(l.rtPostTime),
          A = i ? () => a(n, !l.bUserUpVoted) : null,
          _ = i
            ? l.bUserUpVoted
              ? B().Vote_Positive
              : B().Vote_Ready
            : B().Vote_CannotVote,
          v = (0, L.Z)(
            B().Question,
            3 == l.eState && B().Hidden,
            1 == l.eState && B().Moderated,
            0 == l.eState && B().Unmoderated,
            2 == l.eState && B().Answered
          );
        return o.createElement(
          "div",
          { className: v },
          o.createElement(
            "div",
            { className: B().QuestionCtn },
            o.createElement(Y, { accountID: l.posterAccountID }),
            o.createElement(
              "div",
              { className: B().QuestionText },
              o.createElement(
                "div",
                { className: B().QuestionAndVotes },
                o.createElement(
                  "div",
                  { className: B().QuestionTitle },
                  l.strQuestionText
                ),
                o.createElement(
                  q.HP,
                  {
                    toolTipContent:
                      i &&
                      (l.bUserUpVoted
                        ? (0, M.Xx)("#QAndA_VoteRemoveTooltip")
                        : (0, M.Xx)("#QAndA_VoteTooltip")),
                  },
                  o.createElement(
                    "div",
                    { className: (0, L.Z)(_, B().Votes), onClick: A },
                    o.createElement(T.KJh, { className: B().RateIcon }),
                    o.createElement(
                      "div",
                      { className: B().VoteCount },
                      Number(l.nVoteCount).toLocaleString()
                    )
                  )
                )
              ),
              o.createElement(
                "div",
                { className: B().QuestionStats },
                o.createElement(
                  "div",
                  { className: B().PostTime },
                  o.createElement(
                    I.Zg,
                    {
                      rtFullDate: l.rtPostTime,
                      className: B().PostTime,
                      stylesmodule: B(),
                    },
                    m
                  )
                )
              )
            )
          ),
          l.rtAnswerTime && o.createElement(j, { question: l, rtNow: r }),
          s &&
            o.createElement(z, {
              gidSession: t,
              gidQuestion: n,
              eState: null == l ? void 0 : l.eState,
            })
        );
      }
      function j(e) {
        const { question: t, rtNow: n } = e,
          s = t.rtAnswerTime && n - t.rtAnswerTime,
          i =
            t.rtAnswerTime &&
            (s < x._H.PerDay ? (0, M.yW)(s) : (0, M.m9)(t.rtAnswerTime));
        return t.strAnswerText
          ? o.createElement(
              "div",
              { className: B().Answer },
              o.createElement(
                "div",
                { className: B().AnswerTitle },
                o.createElement(
                  "div",
                  { className: B().AnswerCheck },
                  o.createElement(T.mKE, { color: "#67c1f5" })
                ),
                (0, M.Xx)("#QAndA_ModeratorAnswerTitle")
              ),
              o.createElement(
                "div",
                { className: B().AnswerText },
                " ",
                t.strAnswerText,
                " "
              ),
              o.createElement(
                "div",
                { className: B().QuestionStats },
                o.createElement(
                  I.Zg,
                  {
                    rtFullDate: t.rtAnswerTime,
                    className: B().PostTime,
                    stylesmodule: B(),
                  },
                  i
                )
              )
            )
          : o.createElement(
              "div",
              { className: B().AnswerTitle },
              o.createElement(
                "div",
                { className: B().AnswerCheck },
                o.createElement(T.mKE, { color: "#67c1f5" })
              ),
              (0, M.Xx)("#QAndA_AlreadyAnsweredTitle")
            );
      }
      function Y(e) {
        var t;
        const n = i.K.InitFromAccountID(e.accountID),
          s = n.ConvertTo64BitString(),
          [a, r] = (0, _.Gr)(n);
        return a
          ? null
          : o.createElement(
              "a",
              {
                href: d.De.COMMUNITY_BASE_URL + "profiles/" + s,
                className: B().PersonaName,
                "data-miniprofile": "s" + s,
              },
              null !== (t = null == r ? void 0 : r.persona_name) && void 0 !== t
                ? t
                : s
            );
      }
      function z(e) {
        const { gidSession: t, gidQuestion: n, eState: s } = e,
          { fnAnswerQuestion: i, fnModerateQuestion: a } = N(t),
          r = 0 == s || 3 == s,
          l = 3 != s,
          u = 1 == s;
        return o.createElement(
          "div",
          { className: B().ModeratorSection },
          (0, M.Xx)("#QAndA_ModeratorLabel"),
          o.createElement(
            "div",
            { className: B().ToolRow },
            o.createElement($, {
              strPrompt: (0, M.Xx)("#QAndA_AnswerPrompt"),
              fnSubmit: (e) => i(n, e),
            })
          ),
          o.createElement(
            "div",
            { className: B().ToolRow },
            (0, M.Xx)("#QAndA_ModeratorOtherOptionsLabel"),
            o.createElement(
              q.HP,
              {
                toolTipContent: (0, M.Xx)("#QAndA_ModerateApproveButton_ttip"),
              },
              o.createElement(
                D.zx,
                {
                  onClick: () => a(n, 1),
                  className: B().InputButton,
                  disabled: !r,
                },
                (0, M.Xx)("#QAndA_ModerateApproveButton")
              )
            ),
            o.createElement(
              q.HP,
              { toolTipContent: (0, M.Xx)("#QAndA_ModerateHideButton_ttip") },
              o.createElement(
                D.zx,
                {
                  onClick: () => a(n, 3),
                  className: B().InputButton,
                  disabled: !l,
                },
                (0, M.Xx)("#QAndA_ModerateHideButton")
              )
            ),
            o.createElement(
              q.HP,
              { toolTipContent: (0, M.Xx)("#QAndA_QuickAnswerButton_ttip") },
              o.createElement(
                D.zx,
                {
                  onClick: () => i(n, ""),
                  className: B().InputButton,
                  disabled: !u,
                },
                (0, M.Xx)("#QAndA_QuickAnswerButton")
              )
            )
          )
        );
      }
      function K(e) {
        const { gidSession: t } = e;
        A();
        const { strName: n, bUserCanModerate: s } = h(t);
        return o.createElement(
          "div",
          { className: B().QAFullPageView },
          o.createElement(
            "div",
            { className: B().QAName },
            (0, M.Xx)("#QAndA_Header") +
              ((null == n ? void 0 : n.length) > 0 ? ": " + n : "")
          ),
          o.createElement(
            "div",
            { className: B().QAColumns },
            o.createElement(J, { gidSession: t, bHalfOfFullPage: s }),
            s && o.createElement(Z, { gidSession: t })
          )
        );
      }
      function Z(e) {
        const { gidSession: t } = e,
          {
            bUserCanModerate: n,
            rgNewQuestionGIDs: s,
            rgHiddenQuestionGIDs: i,
          } = h(t),
          r = (0, a.F_)(10);
        return n
          ? o.createElement(
              "div",
              {
                className: (0, L.Z)(B().QAModeratorColumn, B().QASplitColumns),
              },
              o.createElement(
                G.ug,
                {
                  title: (0, M.Xx)("#QAndA_ModeratorViewHeader"),
                  className: B().ModeratorInstructions,
                },
                o.createElement(
                  "div",
                  { className: B().QuestionList },
                  s.map((e) =>
                    o.createElement(F, {
                      key: e,
                      gidSession: t,
                      gidQuestion: e,
                      bUserCanModerate: n,
                      bUserCanVote: !1,
                      rtNow: r,
                    })
                  )
                )
              ),
              o.createElement(
                G.ug,
                {
                  title: (0, M.Xx)("#QAndA_HiddenQuestionsHeader"),
                  className: B().AnsweredSectionHeader,
                  bStartMinimized: !0,
                },
                o.createElement(
                  "div",
                  { className: B().QuestionList },
                  i.map((e) =>
                    o.createElement(F, {
                      key: e,
                      gidSession: t,
                      gidQuestion: e,
                      bUserCanModerate: n,
                      bUserCanVote: !1,
                      rtNow: r,
                    })
                  )
                )
              )
            )
          : null;
      }
      function J(e) {
        const { gidSession: t, bHalfOfFullPage: n } = e;
        A();
        const {
            bIsLoaded: i,
            bUserCanAskQuestions: r,
            bUserCanModerate: l,
            fnAskQuestion: u,
            fnVoteOnQuestion: d,
            rgModeratedQuestionGIDs: c,
            rgAnsweredQuestionGIDs: m,
            rgNewQuestionGIDs: _,
          } = h(t),
          { fnReload: v, bIsReloading: Q } = E(t),
          p = (0, a.F_)(10),
          g = l && n,
          { fnModerateQuestion: C } = N(t);
        return o.createElement(
          "div",
          { className: (0, L.Z)(B().QAMainCtn, n && B().QASplitColumns) },
          o.createElement(
            "div",
            { className: (0, L.Z)(B().QAHeader, g && B().ModerationHeader) },
            o.createElement(
              D.zx,
              {
                onClick: v,
                disabled: !i,
                className: (0, L.Z)(
                  B().InputButton,
                  B().Reload,
                  Q && B().Reloading
                ),
              },
              o.createElement(
                "div",
                { className: B().ReloadIcon },
                o.createElement(T.Lao, null)
              )
            ),
            g
              ? o.createElement(
                  o.Fragment,
                  null,
                  (0, M.Xx)("#QAndA_ModeratorLabelHeader"),
                  o.createElement(
                    q.HP,
                    {
                      toolTipContent: (0, M.Xx)(
                        "#QAndA_ModerateHideAllButton_ttip"
                      ),
                    },
                    o.createElement(
                      D.zx,
                      {
                        onClick: () =>
                          (0, s.mG)(this, void 0, void 0, function* () {
                            for (const e of [_, c, m])
                              for (const t of e) yield C(t, 3);
                          }),
                        className: B().InputButton,
                      },
                      (0, M.Xx)("#QAndA_ModerateHideAllButton")
                    )
                  )
                )
              : r
              ? o.createElement(W, { fnAskQuestion: u })
              : i && o.createElement(ee, null)
          ),
          c.length + m.length == 0
            ? o.createElement(
                "div",
                { className: B().NoQuestions },
                (0, M.Xx)("#QAndA_NoQuestionsYet")
              )
            : o.createElement(
                "div",
                { className: B().QuestionsCtn },
                o.createElement(
                  "div",
                  { className: B().InsetShadowTopCtn },
                  o.createElement("div", { className: B().InsetShadowTop })
                ),
                o.createElement(
                  "div",
                  { className: B().QuestionList },
                  i
                    ? c.map((e) =>
                        o.createElement(F, {
                          key: e,
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: g,
                          bUserCanVote: r,
                          fnVoteOnQuestion: d,
                          rtNow: p,
                        })
                      )
                    : o.createElement(k.V, { position: "center" })
                ),
                m.length > 0 &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      "div",
                      { className: B().AnsweredSectionHeader },
                      (0, M.Xx)("#QAndA_AnsweredQuestionsHeader")
                    ),
                    o.createElement(
                      "div",
                      { className: B().QuestionList },
                      m.map((e) =>
                        o.createElement(F, {
                          key: e,
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: g,
                          bUserCanVote: r,
                          fnVoteOnQuestion: d,
                          rtNow: p,
                        })
                      )
                    )
                  )
              )
        );
      }
      function W(e) {
        const [t, n] = o.useState(!1),
          i = (0, p.T)("QuestionBox");
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: B().Description },
            (0, M.Xx)("#QAndA_HeaderDescription")
          ),
          o.createElement($, {
            strPrompt: (0, M.Xx)("#QAndA_QuestionPrompt"),
            fnSubmit: (t) =>
              (0, s.mG)(this, void 0, void 0, function* () {
                const s = yield e.fnAskQuestion(t);
                return (
                  1 != s ||
                    i.token.reason ||
                    (n(!0),
                    window.setTimeout(() => {
                      i.token.reason || n(!1);
                    }, 1e3)),
                  s
                );
              }),
          }),
          o.createElement(
            "div",
            { className: (0, L.Z)(B().QuestionACK, t && B().Visible) },
            (0, M.Xx)("#QAndA_QuestionWasPosted")
          )
        );
      }
      function $(e) {
        const { strPrompt: t, fnSubmit: n } = e,
          [i, a] = o.useState(""),
          [r, l] = o.useState(!1);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: B().InputCtn },
            o.createElement(D.II, {
              type: "text",
              placeholder: t,
              maxLength: 512,
              value: i,
              onChange: (e) => a(e.target.value),
            }),
            o.createElement(
              "div",
              { className: B().ButtonCtn },
              r &&
                o.createElement(
                  "div",
                  { className: B().SaveSpinner },
                  o.createElement(k.V, { size: "small", position: "center" })
                ),
              o.createElement(
                D.zx,
                {
                  onClick: () =>
                    (0, s.mG)(this, void 0, void 0, function* () {
                      l(!0);
                      1 == (yield n(i)) && a(""), l(!1);
                    }),
                  disabled: r || !i,
                  className: B().InputButton,
                },
                (0, M.Xx)("#QAndA_SubmitCommentButton")
              )
            )
          )
        );
      }
      function ee(e) {
        return o.createElement(
          "div",
          { className: B().Description },
          o.createElement(
            "div",
            { className: B().LogInPrompt },
            (0, M.Xx)("#QAndA_LogInPrompt")
          ),
          !d.L7.logged_in &&
            o.createElement(
              D.zx,
              {
                onClick: b.Xt,
                className: (0, L.Z)(B().SignInButton, B().InputButton),
              },
              (0, M.Xx)("#Login_SignIn")
            )
        );
      }
    },
  },
]);