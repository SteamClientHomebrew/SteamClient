/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9035],
  {
    69491: (e) => {
      e.exports = {
        v6: "shared_common_v6_3r3Le",
        SubText: "shared_common_SubText_3Ctn8",
        AvatarImageContainer: "shared_common_AvatarImageContainer_10L8e",
        GameImageContainer: "shared_common_GameImageContainer_2opUa",
        AvatarImage: "shared_common_AvatarImage_3GB71",
        STV_HomeGridPreviewDetails:
          "shared_common_STV_HomeGridPreviewDetails_h3usS",
        ChatAvatarImage: "shared_common_ChatAvatarImage_1GZJG",
        EditButton: "shared_common_EditButton_utVo_",
        Small: "shared_common_Small_2MbrV",
        FlexCenter: "shared_common_FlexCenter_24qeH",
        ThrobberCtn: "shared_common_ThrobberCtn_r-SBj",
        MarkdownLink: "shared_common_MarkdownLink_2KgeH",
        SummaryTextArea: "shared_common_SummaryTextArea_2xqdR",
        RemoveIcon: "shared_common_RemoveIcon_1iOrE",
      };
    },
    50732: (e) => {
      e.exports = {
        LoadingWrapper: "throbber_LoadingWrapper_3Z36h",
        Static: "throbber_Static_kwzRJ",
        none: "throbber_none_2iT5l",
        bottomCircle: "throbber_bottomCircle_3-sjx",
        noString: "throbber_noString_M4pF_",
        Throbber: "throbber_Throbber_7MdwT",
        throbber_small: "throbber_throbber_small_29-XT",
        throbber_medium: "throbber_throbber_medium_1yqSo",
        throbber_large: "throbber_throbber_large_1u2tL",
        throbber_center_wrapper: "throbber_throbber_center_wrapper_Yi4EM",
        ThrobberText: "throbber_ThrobberText_1Zlvf",
        blur: "throbber_blur_3ebLc",
        ThrobberRoundLoop: "throbber_ThrobberRoundLoop_3SEk8",
        roundOuterOutline: "throbber_roundOuterOutline_3M8Ar",
        roundOuter: "throbber_roundOuter_3H7At",
        roundFill: "throbber_roundFill_2FWWt",
        ThrobberFillLoop: "throbber_ThrobberFillLoop_1-rlb",
        topCircle: "throbber_topCircle_3znUF",
        circlePulse: "throbber_circlePulse_1oQUO",
        ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_3oqZE",
        ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_3veQr",
        roundThrobber15: "throbber_roundThrobber15_1gQte",
        roundThrobber14: "throbber_roundThrobber14_3DXeR",
        roundThrobber13: "throbber_roundThrobber13_5VEyI",
        roundThrobber12: "throbber_roundThrobber12_wOdFm",
        roundThrobber11: "throbber_roundThrobber11_3Jmyz",
        roundThrobber10: "throbber_roundThrobber10_3QwXn",
        roundThrobber09: "throbber_roundThrobber09_2Yhvq",
        roundThrobber08: "throbber_roundThrobber08_3HcIU",
        roundThrobber07: "throbber_roundThrobber07__2fn3",
        roundThrobber06: "throbber_roundThrobber06_2gCCI",
        roundThrobber05: "throbber_roundThrobber05_1SrtW",
        roundThrobber04: "throbber_roundThrobber04_2P5xs",
        roundThrobber03: "throbber_roundThrobber03_3zYDa",
        roundThrobber02: "throbber_roundThrobber02_2_KYJ",
        roundThrobber01: "throbber_roundThrobber01_3N41H",
        ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1wAwc",
        throbber_xlarge: "throbber_throbber_xlarge_2jzZM",
        throbber_xxlarge: "throbber_throbber_xxlarge_1DFOT",
        ThrobberDelayAppear: "throbber_ThrobberDelayAppear_34XSs",
        Visible: "throbber_Visible_1ziaT",
      };
    },
    3912: (e) => {
      e.exports = {
        TitleHR: "categories_TitleHR_1rdzN",
        ActionButtonCtn: "categories_ActionButtonCtn_7a7-w",
        CategoriesList: "categories_CategoriesList_YMtVa",
        CategoryCtn: "categories_CategoryCtn_1vjux",
        Category: "categories_Category_12BB3",
        CategoryEditor: "categories_CategoryEditor_hDZX9",
        TagOrCategoryList: "categories_TagOrCategoryList_33SvL",
        IDSelector: "categories_IDSelector_1COCu",
        CategorySummary: "categories_CategorySummary_1h-LQ",
        Clause: "categories_Clause_17Lm2",
        Item: "categories_Item_uZOnN",
        UnpublishedChangesNotice: "categories_UnpublishedChangesNotice_3IZil",
      };
    },
    13596: (e, r, t) => {
      "use strict";
      t.d(r, { V: () => n });
      var o = t(67294),
        a = t(7573),
        c = t(50732),
        s = t.n(c);
      const n = o.memo(function (e) {
        const {
          className: r,
          size: t,
          string: c,
          position: n,
          static: b,
          msDelayAppear: m,
        } = e;
        let d = [s().LoadingWrapper, "SteamLogoThrobber", l(t)];
        const [u, h] = o.useState(!m);
        return (
          (0, o.useEffect)(() => {
            if (u) return;
            const e = setTimeout(() => h(!0), m);
            return () => clearTimeout(e);
          }, [m, u]),
          void 0 === c && d.push(s().noString),
          r && d.push(r),
          b && d.push(s().Static),
          o.createElement(
            "div",
            {
              className: (0, a.Z)(
                "center" == n && s().throbber_center_wrapper,
                m && s().ThrobberDelayAppear,
                u && s().Visible
              ),
            },
            u &&
              o.createElement(
                "div",
                { className: d.join(" ") },
                o.createElement(
                  "div",
                  { className: s().Throbber },
                  o.createElement(i, { className: s().base }),
                  o.createElement(i, { className: s().blur })
                )
              ),
            Boolean(c) &&
              o.createElement("div", { className: s().ThrobberText }, c)
          )
        );
      });
      function l(e) {
        switch (e) {
          case "small":
            return s().throbber_small;
          case "medium":
            return s().throbber_medium;
          case "xlarge":
            return s().throbber_xlarge;
          case "xxlarge":
            return s().throbber_xxlarge;
          default:
            return s().throbber_large;
        }
      }
      function i(e) {
        let r = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (r += e.className),
          o.createElement(
            "svg",
            {
              version: "1.1",
              id: "base",
              xmlns: "http://www.w3.org/2000/svg",
              className: r,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 256 256",
            },
            o.createElement(
              "g",
              { className: s().partCircle },
              o.createElement("path", {
                className: s().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
              }),
              o.createElement("path", {
                className: s().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166",
              }),
              o.createElement("path", {
                className: s().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
              })
            ),
            o.createElement(
              "g",
              { className: s().mainOutline },
              o.createElement("path", {
                className: s().roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: s().roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              })
            ),
            o.createElement(
              "g",
              { className: s().bottomCircle },
              o.createElement("path", {
                fill: "#ffffff",
                d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
              })
            ),
            o.createElement(
              "g",
              { className: s().topCircle },
              o.createElement("circle", {
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                cx: "161.731",
                cy: "101.274",
                r: "23.019",
              })
            )
          )
        );
      }
    },
    82946: (e, r, t) => {
      "use strict";
      t(26149);
    },
    93976: (e, r, t) => {
      "use strict";
      t.d(r, { l: () => s });
      t(26149);
      var o = t(9669),
        a = t.n(o),
        c = t(58114);
      function s(e) {
        if (a().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.response.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof c.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    49279: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => _ });
      var o = t(62642),
        a = t(67294),
        c = t(79756),
        s = t(95018),
        n = t.n(s),
        l = t(22453),
        i = t(91340),
        b = t(41414),
        m = t(14809),
        d = t(95598),
        u = t(13596),
        h = t(64839),
        f = t(3912),
        g = t.n(f);
      function _() {
        const [e, r] = a.useState(),
          [t, c] = a.useState(!1),
          [s, i] = a.useState(!1),
          [m, h] = a.useState(!1);
        return (
          a.useEffect(() => {
            (0, o.X_)().then((e) => {
              r(e.rgCategories), h(e.bHasUnpublishedChanges), c(!0);
            });
          }, []),
          t
            ? a.createElement(
                "div",
                { className: n().AdminPageCtn },
                a.createElement(
                  "div",
                  { className: n().PageTitle },
                  "Content Hub Categories"
                ),
                a.createElement("hr", { className: g().TitleHR }),
                a.createElement(
                  "div",
                  { className: n().PageSubTitle },
                  "Categories"
                ),
                m &&
                  a.createElement(
                    "div",
                    { className: g().UnpublishedChangesNotice },
                    "You have unpublished changes. Click Publish below to publish and make them available to users."
                  ),
                a.createElement(p, { categories: e, onUpdate: () => i(!0) }),
                a.createElement(
                  "div",
                  { className: g().ActionButtonCtn },
                  a.createElement(
                    l.zx,
                    {
                      onClick: () =>
                        (0, b.AM)(
                          a.createElement(k, {
                            onImport: (e) => {
                              r(e), i(!0);
                            },
                          }),
                          window
                        ),
                    },
                    "Import From PHP"
                  ),
                  a.createElement(
                    l.KM,
                    {
                      onClick: () =>
                        (0, b.AM)(
                          a.createElement(T, {
                            categories: e,
                            onSave: () => {
                              i(!1), h(!0);
                            },
                          }),
                          window
                        ),
                    },
                    s
                      ? a.createElement(a.Fragment, null, "Save")
                      : a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(d.JrY, null),
                          "Saved"
                        )
                  ),
                  a.createElement(
                    l.zx,
                    {
                      onClick: () =>
                        (0, b.AM)(
                          a.createElement(M, { onPublish: () => h(!1) }),
                          window
                        ),
                    },
                    "Publish"
                  )
                )
              )
            : a.createElement(u.V, { size: "medium", position: "center" })
        );
      }
      function p(e) {
        const { categories: r, onUpdate: t } = e;
        if (!r) return a.createElement("div", null, "No categories defined.");
        return a.createElement(
          "div",
          { className: g().CategoriesList },
          a.createElement(m.R, {
            bDisabled: !0,
            items: r,
            onDelete: (e) => {
              r.splice(e, 1), t();
            },
            render: (e) =>
              a.createElement(
                "div",
                { className: g().CategoryCtn },
                a.createElement(
                  "div",
                  { className: g().Category },
                  a.createElement(
                    "a",
                    {
                      onClick: (r) =>
                        ((e, r) => {
                          e.preventDefault(),
                            e.stopPropagation(),
                            (0, b.AM)(
                              a.createElement(E, { category: r, onUpdate: t }),
                              window
                            );
                        })(r, e),
                    },
                    e.handle
                  )
                )
              ),
          }),
          a.createElement(
            l.zx,
            {
              onClick: () => {
                r.push({}), t();
              },
            },
            "Add Category"
          )
        );
      }
      function E(e) {
        const { category: r, onUpdate: t, closeModal: o } = e,
          c = (0, h.NW)();
        return a.createElement(
          i.RG,
          { bAllowFullSize: !0, onCancel: o, closeModal: o },
          a.createElement(l.h4, null, "Edit Category"),
          a.createElement(
            l.uT,
            null,
            a.createElement(
              "div",
              { className: g().CategoryEditor },
              a.createElement(l.II, {
                label: "Handle",
                value: r.handle,
                onChange: (e) => {
                  (r.handle = e.target.value), c();
                },
              }),
              a.createElement(l.II, {
                label: "Loc Token",
                value: r.loc_token,
                onChange: (e) => {
                  (r.loc_token = e.target.value), c();
                },
              }),
              a.createElement(l.ji, {
                label: "Heading",
                checked: r.heading,
                onChange: (e) => {
                  (r.heading = e), c();
                },
              }),
              a.createElement(l.ry, {
                label: "Type",
                rgOptions: [
                  { data: "tagids", label: "Tags" },
                  { data: "category", label: "Categories" },
                  { data: "contenthub", label: "Content Hub" },
                ],
                selectedOption: r.type,
                onChange: (e) => {
                  (r.type = e.data), c();
                },
              }),
              ("tagids" === r.type || "category" === r.type) &&
                a.createElement(
                  "div",
                  { className: g().Category },
                  a.createElement(C, {
                    category: r,
                    list: "must",
                    title: "Must have all of",
                  }),
                  a.createElement(C, {
                    category: r,
                    list: "any",
                    title: "Must have any of",
                  }),
                  a.createElement(C, {
                    category: r,
                    list: "mustnot",
                    title: "Must not have any of",
                  })
                )
            )
          ),
          a.createElement(
            l.$_,
            null,
            a.createElement(
              l.KM,
              {
                onClick: () => {
                  t && t(), o && o();
                },
              },
              "Close"
            )
          )
        );
      }
      function C(e) {
        const { category: r, list: t, title: s } = e,
          { rgTags: n, rgCategories: i } = (0, o.bA)(),
          b = (0, h.NW)(),
          d =
            (null == n
              ? void 0
              : n.map((e) => ({
                  value: e.tagid,
                  label: `${e.name} (${e.tagid})`,
                }))) || [],
          u =
            (null == i
              ? void 0
              : i.map((e) => ({
                  value: e.categoryid,
                  label: `${e.name} (${e.categoryid})`,
                }))) || [];
        return a.createElement(
          "div",
          { className: g().TagOrCategoryList },
          a.createElement(l.__, null, s),
          a.createElement(m.R, {
            bDisabled: !0,
            items: r[t] || [],
            onDelete: (e) => {
              r[t].splice(e, 1), b();
            },
            render: (e) =>
              "tagids" === r.type
                ? a.createElement(
                    "div",
                    { className: g().IDSelector },
                    a.createElement(l.II, {
                      value: e.id,
                      onChange: (r) => {
                        (e.id = Number(r.target.value)), b();
                      },
                    }),
                    a.createElement(c.ZP, {
                      isSearchable: !0,
                      options: d,
                      value: d.find((r) => r.value === e.id),
                      onChange: (r) => {
                        (e.id = r.value), b();
                      },
                    })
                  )
                : "category" === r.type
                ? a.createElement(
                    "div",
                    { className: g().IDSelector },
                    a.createElement(c.ZP, {
                      isSearchable: !0,
                      options: u,
                      value: u.find((r) => r.value === e.id),
                      onChange: (r) => {
                        (e.id = r.value), b();
                      },
                    })
                  )
                : null,
          }),
          a.createElement(
            l.zx,
            {
              onClick: () => {
                r[t] || (r[t] = []), r[t].push({ id: 0 }), b();
              },
            },
            "Add"
          )
        );
      }
      function k(e) {
        const { onImport: r, closeModal: t } = e;
        return (
          a.useEffect(() => {
            o.ee
              .Get()
              .HintLoad()
              .then(() => {
                r(Array.from(o.ee.Get().GetCategories().values())), t && t();
              });
          }, [t, r]),
          a.createElement(
            i.uH,
            {
              strTitle: "Importing",
              bAlertDialog: !0,
              bDisableBackgroundDismiss: !0,
              bHideCloseIcon: !0,
            },
            a.createElement(u.V, { size: "medium", position: "center" })
          )
        );
      }
      function T(e) {
        const { categories: r, onSave: t, closeModal: c } = e,
          [s, n] = a.useState();
        return (
          a.useEffect(() => {
            (0, o.HD)(r).then((e) => {
              e ? n(e.strErrorMsg) : (t(), c && c());
            });
          }, [r, c, t]),
          a.createElement(
            i.uH,
            {
              strTitle: "Saving",
              bAlertDialog: !0,
              bDisableBackgroundDismiss: !0,
              bHideCloseIcon: !0,
              closeModal: c,
            },
            Boolean(s)
              ? a.createElement("div", null, "Error: ", s)
              : a.createElement(u.V, { size: "medium", position: "center" })
          )
        );
      }
      function M(e) {
        const { onPublish: r, closeModal: t } = e,
          [c, s] = a.useState(!1),
          [n, l] = a.useState();
        return (
          a.useEffect(() => {
            c &&
              (0, o.C1)().then((e) => {
                e ? l(e.strErrorMsg) : (r(), s(!1), t && t());
              });
          }, [c, t, r]),
          a.createElement(
            i.uH,
            {
              strTitle: c ? "Publishing" : "Really Publish?",
              strDescription:
                !c &&
                "Publishing will make your changes immediately visible to users.",
              bAlertDialog: c,
              bDisableBackgroundDismiss: c,
              bHideCloseIcon: c,
              onOK: () => {
                c ? t && t() : s(!0);
              },
              onCancel: () => {
                t && t();
              },
            },
            c &&
              a.createElement(
                a.Fragment,
                null,
                Boolean(n)
                  ? a.createElement("div", null, "Error: ", n)
                  : a.createElement(u.V, { size: "medium", position: "center" })
              )
          )
        );
      }
    },
    33547: (e, r, t) => {
      "use strict";
      t.d(r, { Z: () => o });
      const o =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
