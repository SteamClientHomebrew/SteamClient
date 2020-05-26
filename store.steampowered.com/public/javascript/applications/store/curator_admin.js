/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "3rT3": function(e, t, n) {
      "use strict";
      n.r(t);
      var d = n("mrSG"),
        r = n("q1tI"),
        c = n.n(r),
        s = n("Ty5D"),
        a = n("r64O"),
        i = n("vDqi"),
        l = n.n(i),
        o = n("2vnA"),
        u = n("lkRc"),
        p = n("WBba"),
        g = n("bxBv"),
        _ = n("hRO2");
      var v,
        m,
        h = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, [5], null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.gid = function() {
              return _.Message.getField(this, 1);
            }),
            (r.prototype.set_gid = function(e) {
              _.Message.setField(this, 1, e);
            }),
            (r.prototype.name = function() {
              return _.Message.getField(this, 2);
            }),
            (r.prototype.set_name = function(e) {
              _.Message.setField(this, 2, e);
            }),
            (r.prototype.type = function() {
              return _.Message.getFieldWithDefault(this, 3, 0);
            }),
            (r.prototype.set_type = function(e) {
              _.Message.setField(this, 3, e);
            }),
            (r.prototype.url = function() {
              return _.Message.getField(this, 4);
            }),
            (r.prototype.set_url = function(e) {
              _.Message.setField(this, 4, e);
            }),
            (r.prototype.associated_apps = function() {
              return _.Message.getField(this, 5);
            }),
            (r.prototype.set_associated_apps = function(e) {
              _.Message.setField(this, 5, e);
            }),
            (r.prototype.add_associated_apps = function(e, t) {
              _.Message.addToRepeatedField(this, 5, e, t);
            }),
            (r.prototype.poll_interval = function() {
              return _.Message.getFieldWithDefault(this, 6, 300);
            }),
            (r.prototype.set_poll_interval = function(e) {
              _.Message.setField(this, 6, e);
            }),
            (r.prototype.kv_description = function() {
              return _.Message.getField(this, 7);
            }),
            (r.prototype.set_kv_description = function(e) {
              _.Message.setField(this, 7, e);
            }),
            (r.prototype.kv_filter = function() {
              return _.Message.getField(this, 8);
            }),
            (r.prototype.set_kv_filter = function(e) {
              _.Message.setField(this, 8, e);
            }),
            (r.prototype.publish_to_clan_account_id = function() {
              return _.Message.getField(this, 9);
            }),
            (r.prototype.set_publish_to_clan_account_id = function(e) {
              _.Message.setField(this, 9, e);
            }),
            (r.prototype.language = function() {
              return _.Message.getField(this, 10);
            }),
            (r.prototype.set_language = function(e) {
              _.Message.setField(this, 10, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                gid: _.Message.getField(t, 1),
                name: _.Message.getField(t, 2),
                type: _.Message.getFieldWithDefault(t, 3, 0),
                url: _.Message.getField(t, 4),
                associated_apps: _.Message.getField(t, 5),
                poll_interval: _.Message.getFieldWithDefault(t, 6, 300),
                kv_description: _.Message.getField(t, 7),
                kv_filter: _.Message.getField(t, 8),
                publish_to_clan_account_id: _.Message.getField(t, 9),
                language: _.Message.getField(t, 10)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_gid(e.gid),
                t.set_name(e.name),
                t.set_type(e.type),
                t.set_url(e.url),
                t.set_associated_apps(e.associated_apps),
                t.set_poll_interval(e.poll_interval),
                t.set_kv_description(e.kv_description),
                t.set_kv_filter(e.kv_filter),
                t.set_publish_to_clan_account_id(e.publish_to_clan_account_id),
                t.set_language(e.language),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_gid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_name(t.readString());
                    break;
                  case 3:
                    e.set_type(t.readUint32());
                    break;
                  case 4:
                    e.set_url(t.readString());
                    break;
                  case 5:
                    e.add_associated_apps(t.readUint32());
                    break;
                  case 6:
                    e.set_poll_interval(t.readUint32());
                    break;
                  case 7:
                    e.set_kv_description(t.readString());
                    break;
                  case 8:
                    e.set_kv_filter(t.readString());
                    break;
                  case 9:
                    e.set_publish_to_clan_account_id(t.readUint32());
                    break;
                  case 10:
                    e.set_language(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = _.Message.getField(e, 1)) &&
                t.writeFixed64String(1, n),
                void 0 !== (n = _.Message.getField(e, 2)) &&
                  t.writeString(2, n),
                void 0 !== (n = _.Message.getField(e, 3)) &&
                  t.writeUint32(3, n),
                void 0 !== (n = _.Message.getField(e, 4)) &&
                  t.writeString(4, n),
                void 0 !== (n = _.Message.getField(e, 5)) &&
                  t.writeRepeatedUint32(5, n),
                void 0 !== (n = _.Message.getField(e, 6)) &&
                  t.writeUint32(6, n),
                void 0 !== (n = _.Message.getField(e, 7)) &&
                  t.writeString(7, n),
                void 0 !== (n = _.Message.getField(e, 8)) &&
                  t.writeString(8, n),
                void 0 !== (n = _.Message.getField(e, 9)) &&
                  t.writeUint32(9, n),
                void 0 !== (n = _.Message.getField(e, 10)) &&
                  t.writeUint32(10, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNewsFeedDef";
            }),
            r
          );
        })(_.Message),
        f = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, [11], null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.gid = function() {
              return _.Message.getField(this, 1);
            }),
            (r.prototype.set_gid = function(e) {
              _.Message.setField(this, 1, e);
            }),
            (r.prototype.news_feed_gid = function() {
              return _.Message.getField(this, 2);
            }),
            (r.prototype.set_news_feed_gid = function(e) {
              _.Message.setField(this, 2, e);
            }),
            (r.prototype.title = function() {
              return _.Message.getField(this, 3);
            }),
            (r.prototype.set_title = function(e) {
              _.Message.setField(this, 3, e);
            }),
            (r.prototype.url = function() {
              return _.Message.getField(this, 4);
            }),
            (r.prototype.set_url = function(e) {
              _.Message.setField(this, 4, e);
            }),
            (r.prototype.author = function() {
              return _.Message.getField(this, 5);
            }),
            (r.prototype.set_author = function(e) {
              _.Message.setField(this, 5, e);
            }),
            (r.prototype.rtime_date = function() {
              return _.Message.getField(this, 6);
            }),
            (r.prototype.set_rtime_date = function(e) {
              _.Message.setField(this, 6, e);
            }),
            (r.prototype.contents = function() {
              return _.Message.getField(this, 7);
            }),
            (r.prototype.set_contents = function(e) {
              _.Message.setField(this, 7, e);
            }),
            (r.prototype.commited = function() {
              return _.Message.getField(this, 8);
            }),
            (r.prototype.set_commited = function(e) {
              _.Message.setField(this, 8, e);
            }),
            (r.prototype.deleted = function() {
              return _.Message.getField(this, 9);
            }),
            (r.prototype.set_deleted = function(e) {
              _.Message.setField(this, 9, e);
            }),
            (r.prototype.tags = function() {
              return _.Message.getField(this, 10);
            }),
            (r.prototype.set_tags = function(e) {
              _.Message.setField(this, 10, e);
            }),
            (r.prototype.appids = function() {
              return _.Message.getField(this, 11);
            }),
            (r.prototype.set_appids = function(e) {
              _.Message.setField(this, 11, e);
            }),
            (r.prototype.add_appids = function(e, t) {
              _.Message.addToRepeatedField(this, 11, e, t);
            }),
            (r.prototype.recommendation_state = function() {
              return _.Message.getField(this, 12);
            }),
            (r.prototype.set_recommendation_state = function(e) {
              _.Message.setField(this, 12, e);
            }),
            (r.prototype.received_compensation = function() {
              return _.Message.getField(this, 13);
            }),
            (r.prototype.set_received_compensation = function(e) {
              _.Message.setField(this, 13, e);
            }),
            (r.prototype.received_for_free = function() {
              return _.Message.getField(this, 14);
            }),
            (r.prototype.set_received_for_free = function(e) {
              _.Message.setField(this, 14, e);
            }),
            (r.prototype.blurb = function() {
              return _.Message.getField(this, 15);
            }),
            (r.prototype.set_blurb = function(e) {
              _.Message.setField(this, 15, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                gid: _.Message.getField(t, 1),
                news_feed_gid: _.Message.getField(t, 2),
                title: _.Message.getField(t, 3),
                url: _.Message.getField(t, 4),
                author: _.Message.getField(t, 5),
                rtime_date: _.Message.getField(t, 6),
                contents: _.Message.getField(t, 7),
                commited: _.Message.getField(t, 8),
                deleted: _.Message.getField(t, 9),
                tags: _.Message.getField(t, 10),
                appids: _.Message.getField(t, 11),
                recommendation_state: _.Message.getField(t, 12),
                received_compensation: _.Message.getField(t, 13),
                received_for_free: _.Message.getField(t, 14),
                blurb: _.Message.getField(t, 15)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_gid(e.gid),
                t.set_news_feed_gid(e.news_feed_gid),
                t.set_title(e.title),
                t.set_url(e.url),
                t.set_author(e.author),
                t.set_rtime_date(e.rtime_date),
                t.set_contents(e.contents),
                t.set_commited(e.commited),
                t.set_deleted(e.deleted),
                t.set_tags(e.tags),
                t.set_appids(e.appids),
                t.set_recommendation_state(e.recommendation_state),
                t.set_received_compensation(e.received_compensation),
                t.set_received_for_free(e.received_for_free),
                t.set_blurb(e.blurb),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_gid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_news_feed_gid(t.readFixed64String());
                    break;
                  case 3:
                    e.set_title(t.readString());
                    break;
                  case 4:
                    e.set_url(t.readString());
                    break;
                  case 5:
                    e.set_author(t.readString());
                    break;
                  case 6:
                    e.set_rtime_date(t.readUint32());
                    break;
                  case 7:
                    e.set_contents(t.readString());
                    break;
                  case 8:
                    e.set_commited(t.readBool());
                    break;
                  case 9:
                    e.set_deleted(t.readBool());
                    break;
                  case 10:
                    e.set_tags(t.readString());
                    break;
                  case 11:
                    e.add_appids(t.readUint32());
                    break;
                  case 12:
                    e.set_recommendation_state(t.readEnum());
                    break;
                  case 13:
                    e.set_received_compensation(t.readBool());
                    break;
                  case 14:
                    e.set_received_for_free(t.readBool());
                    break;
                  case 15:
                    e.set_blurb(t.readString());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = _.Message.getField(e, 1)) &&
                t.writeFixed64String(1, n),
                void 0 !== (n = _.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n),
                void 0 !== (n = _.Message.getField(e, 3)) &&
                  t.writeString(3, n),
                void 0 !== (n = _.Message.getField(e, 4)) &&
                  t.writeString(4, n),
                void 0 !== (n = _.Message.getField(e, 5)) &&
                  t.writeString(5, n),
                void 0 !== (n = _.Message.getField(e, 6)) &&
                  t.writeUint32(6, n),
                void 0 !== (n = _.Message.getField(e, 7)) &&
                  t.writeString(7, n),
                void 0 !== (n = _.Message.getField(e, 8)) && t.writeBool(8, n),
                void 0 !== (n = _.Message.getField(e, 9)) && t.writeBool(9, n),
                void 0 !== (n = _.Message.getField(e, 10)) &&
                  t.writeString(10, n),
                void 0 !== (n = _.Message.getField(e, 11)) &&
                  t.writeRepeatedUint32(11, n),
                void 0 !== (n = _.Message.getField(e, 12)) &&
                  t.writeEnum(12, n),
                void 0 !== (n = _.Message.getField(e, 13)) &&
                  t.writeBool(13, n),
                void 0 !== (n = _.Message.getField(e, 14)) &&
                  t.writeBool(14, n),
                void 0 !== (n = _.Message.getField(e, 15)) &&
                  t.writeString(15, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNewsFeedPostDef";
            }),
            r
          );
        })(_.Message),
        b = (_.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.converted_content = function() {
              return _.Message.getField(this, 1);
            }),
            (r.prototype.set_converted_content = function(e) {
              _.Message.setField(this, 1, e);
            }),
            (r.prototype.found_html = function() {
              return _.Message.getField(this, 2);
            }),
            (r.prototype.set_found_html = function(e) {
              _.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                converted_content: _.Message.getField(t, 1),
                found_html: _.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_converted_content(e.converted_content),
                t.set_found_html(e.found_html),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_converted_content(t.readString());
                    break;
                  case 2:
                    e.set_found_html(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = _.Message.getField(e, 1)) && t.writeString(1, n),
                void 0 !== (n = _.Message.getField(e, 2)) && t.writeBool(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_ConvertHTMLToBBCode_Response";
            }),
            r
          );
        })(_.Message)),
        S = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.rss_message = function() {
              return _.Message.getField(this, 1);
            }),
            (r.prototype.set_rss_message = function(e) {
              _.Message.setField(this, 1, e);
            }),
            (r.prototype.unique_id = function() {
              return _.Message.getField(this, 2);
            }),
            (r.prototype.set_unique_id = function(e) {
              _.Message.setField(this, 2, e);
            }),
            (r.prototype.title = function() {
              return _.Message.getField(this, 3);
            }),
            (r.prototype.set_title = function(e) {
              _.Message.setField(this, 3, e);
            }),
            (r.prototype.desc = function() {
              return _.Message.getField(this, 4);
            }),
            (r.prototype.set_desc = function(e) {
              _.Message.setField(this, 4, e);
            }),
            (r.prototype.jsondata = function() {
              return _.Message.getField(this, 5);
            }),
            (r.prototype.set_jsondata = function(e) {
              _.Message.setField(this, 5, e);
            }),
            (r.prototype.post = function(e) {
              return (
                void 0 === e && (e = !0),
                _.Message.getWrapperField(this, f, 6, e ? 1 : 0)
              );
            }),
            (r.prototype.set_post = function(e) {
              _.Message.setWrapperField(this, 6, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n,
                r = {
                  rss_message: _.Message.getField(t, 1),
                  unique_id: _.Message.getField(t, 2),
                  title: _.Message.getField(t, 3),
                  desc: _.Message.getField(t, 4),
                  jsondata: _.Message.getField(t, 5),
                  post: (n = t.post(!1)) && f.toObject(e, n)
                };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_rss_message(e.rss_message),
                t.set_unique_id(e.unique_id),
                t.set_title(e.title),
                t.set_desc(e.desc),
                t.set_jsondata(e.jsondata),
                t.set_post(f.fromObject(e.post)),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_rss_message(t.readString());
                    break;
                  case 2:
                    e.set_unique_id(t.readString());
                    break;
                  case 3:
                    e.set_title(t.readString());
                    break;
                  case 4:
                    e.set_desc(t.readString());
                    break;
                  case 5:
                    e.set_jsondata(t.readString());
                    break;
                  case 6:
                    var n = new f();
                    t.readMessage(n, f.deserializeBinaryFromReader),
                      e.set_post(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = _.Message.getField(e, 1)) && t.writeString(1, n),
                void 0 !== (n = _.Message.getField(e, 2)) &&
                  t.writeString(2, n),
                void 0 !== (n = _.Message.getField(e, 3)) &&
                  t.writeString(3, n),
                void 0 !== (n = _.Message.getField(e, 4)) &&
                  t.writeString(4, n),
                void 0 !== (n = _.Message.getField(e, 5)) &&
                  t.writeString(5, n),
                null != (n = e.post(!1)) &&
                  t.writeMessage(6, n, f.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CNewsPartnerEventPreview";
            }),
            r
          );
        })(_.Message),
        y = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.rss_url = function() {
              return _.Message.getField(this, 1);
            }),
            (r.prototype.set_rss_url = function(e) {
              _.Message.setField(this, 1, e);
            }),
            (r.prototype.lang = function() {
              return _.Message.getField(this, 2);
            }),
            (r.prototype.set_lang = function(e) {
              _.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                rss_url: _.Message.getField(t, 1),
                lang: _.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return t.set_rss_url(e.rss_url), t.set_lang(e.lang), t;
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_rss_url(t.readString());
                    break;
                  case 2:
                    e.set_lang(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = _.Message.getField(e, 1)) && t.writeString(1, n),
                void 0 !== (n = _.Message.getField(e, 2)) &&
                  t.writeUint32(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PreviewPartnerEvents_Request";
            }),
            r
          );
        })(_.Message),
        F = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, [2], null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.rss_url = function() {
              return _.Message.getField(this, 1);
            }),
            (r.prototype.set_rss_url = function(e) {
              _.Message.setField(this, 1, e);
            }),
            (r.prototype.results = function() {
              return _.Message.getRepeatedWrapperField(this, S, 2);
            }),
            (r.prototype.set_results = function(e) {
              _.Message.setRepeatedWrapperField(this, 2, e);
            }),
            (r.prototype.add_results = function(e, t) {
              return _.Message.addToRepeatedWrapperField(this, 2, e, S, t);
            }),
            (r.prototype.error_msg = function() {
              return _.Message.getField(this, 3);
            }),
            (r.prototype.set_error_msg = function(e) {
              _.Message.setField(this, 3, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                rss_url: _.Message.getField(t, 1),
                results: _.Message.toObjectList(t.results(), S.toObject, e),
                error_msg: _.Message.getField(t, 3)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_rss_url(e.rss_url),
                t.set_results(
                  (Array.isArray(e.results) ? e.results : []).map(function(e) {
                    return S.fromObject(e);
                  })
                ),
                t.set_error_msg(e.error_msg),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_rss_url(t.readString());
                    break;
                  case 2:
                    var n = new S();
                    t.readMessage(n, S.deserializeBinaryFromReader),
                      e.add_results(n);
                    break;
                  case 3:
                    e.set_error_msg(t.readString());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = _.Message.getField(e, 1)) && t.writeString(1, n),
                0 < (n = e.results()).length &&
                  t.writeRepeatedMessage(2, n, S.serializeBinaryToWriter),
                void 0 !== (n = _.Message.getField(e, 3)) &&
                  t.writeString(3, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PreviewPartnerEvents_Response";
            }),
            r
          );
        })(_.Message),
        w = (_.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.feeds = function() {
              return _.Message.getRepeatedWrapperField(this, h, 1);
            }),
            (r.prototype.set_feeds = function(e) {
              _.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (r.prototype.add_feeds = function(e, t) {
              return _.Message.addToRepeatedWrapperField(this, 1, e, h, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                feeds: _.Message.toObjectList(t.feeds(), h.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_feeds(
                  (Array.isArray(e.feeds) ? e.feeds : []).map(function(e) {
                    return h.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new h();
                    t.readMessage(n, h.deserializeBinaryFromReader),
                      e.add_feeds(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              0 < (n = e.feeds()).length &&
                t.writeRepeatedMessage(1, n, h.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_GetNewsFeedByRepublishClan_Response";
            }),
            r
          );
        })(_.Message)),
        M = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.post = function(e) {
              return (
                void 0 === e && (e = !0),
                _.Message.getWrapperField(this, f, 1, e ? 1 : 0)
              );
            }),
            (r.prototype.set_post = function(e) {
              _.Message.setWrapperField(this, 1, e);
            }),
            (r.prototype.draft = function() {
              return _.Message.getField(this, 2);
            }),
            (r.prototype.set_draft = function(e) {
              _.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n,
                r = {
                  post: (n = t.post(!1)) && f.toObject(e, n),
                  draft: _.Message.getField(t, 2)
                };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return t.set_post(f.fromObject(e.post)), t.set_draft(e.draft), t;
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new f();
                    t.readMessage(n, f.deserializeBinaryFromReader),
                      e.set_post(n);
                    break;
                  case 2:
                    e.set_draft(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              null != (n = e.post(!1)) &&
                t.writeMessage(1, n, f.serializeBinaryToWriter),
                void 0 !== (n = _.Message.getField(e, 2)) && t.writeBool(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PublishPartnerEvent_Request";
            }),
            r
          );
        })(_.Message),
        R = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.clan_event_gid = function() {
              return _.Message.getField(this, 1);
            }),
            (r.prototype.set_clan_event_gid = function(e) {
              _.Message.setField(this, 1, e);
            }),
            (r.prototype.news_post_gid = function() {
              return _.Message.getField(this, 2);
            }),
            (r.prototype.set_news_post_gid = function(e) {
              _.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                clan_event_gid: _.Message.getField(t, 1),
                news_post_gid: _.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_clan_event_gid(e.clan_event_gid),
                t.set_news_post_gid(e.news_post_gid),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_clan_event_gid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_news_post_gid(t.readFixed64String());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = _.Message.getField(e, 1)) &&
                t.writeFixed64String(1, n),
                void 0 !== (n = _.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PublishPartnerEvent_Response";
            }),
            r
          );
        })(_.Message),
        O = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.news_feed_gid = function() {
              return _.Message.getField(this, 1);
            }),
            (r.prototype.set_news_feed_gid = function(e) {
              _.Message.setField(this, 1, e);
            }),
            (r.prototype.start_index = function() {
              return _.Message.getFieldWithDefault(this, 2, 0);
            }),
            (r.prototype.set_start_index = function(e) {
              _.Message.setField(this, 2, e);
            }),
            (r.prototype.amount = function() {
              return _.Message.getFieldWithDefault(this, 3, 100);
            }),
            (r.prototype.set_amount = function(e) {
              _.Message.setField(this, 3, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                news_feed_gid: _.Message.getField(t, 1),
                start_index: _.Message.getFieldWithDefault(t, 2, 0),
                amount: _.Message.getFieldWithDefault(t, 3, 100)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_news_feed_gid(e.news_feed_gid),
                t.set_start_index(e.start_index),
                t.set_amount(e.amount),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_news_feed_gid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_start_index(t.readUint32());
                    break;
                  case 3:
                    e.set_amount(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = _.Message.getField(e, 1)) &&
                t.writeFixed64String(1, n),
                void 0 !== (n = _.Message.getField(e, 2)) &&
                  t.writeUint32(2, n),
                void 0 !== (n = _.Message.getField(e, 3)) &&
                  t.writeUint32(3, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_GetBatchPublishedPartnerEvent_Request";
            }),
            r
          );
        })(_.Message),
        E = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return _.Message.initialize(t, e, 0, -1, [3, 4, 5], null), t;
          }
          return (
            Object(d.d)(r, n),
            (r.prototype.clan_account_id = function() {
              return _.Message.getField(this, 1);
            }),
            (r.prototype.set_clan_account_id = function(e) {
              _.Message.setField(this, 1, e);
            }),
            (r.prototype.news_feed_gid = function() {
              return _.Message.getField(this, 2);
            }),
            (r.prototype.set_news_feed_gid = function(e) {
              _.Message.setField(this, 2, e);
            }),
            (r.prototype.clan_event_gid = function() {
              return _.Message.getField(this, 3);
            }),
            (r.prototype.set_clan_event_gid = function(e) {
              _.Message.setField(this, 3, e);
            }),
            (r.prototype.add_clan_event_gid = function(e, t) {
              _.Message.addToRepeatedField(this, 3, e, t);
            }),
            (r.prototype.news_post_gid = function() {
              return _.Message.getField(this, 4);
            }),
            (r.prototype.set_news_post_gid = function(e) {
              _.Message.setField(this, 4, e);
            }),
            (r.prototype.add_news_post_gid = function(e, t) {
              _.Message.addToRepeatedField(this, 4, e, t);
            }),
            (r.prototype.news_url = function() {
              return _.Message.getField(this, 5);
            }),
            (r.prototype.set_news_url = function(e) {
              _.Message.setField(this, 5, e);
            }),
            (r.prototype.add_news_url = function(e, t) {
              _.Message.addToRepeatedField(this, 5, e, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                clan_account_id: _.Message.getField(t, 1),
                news_feed_gid: _.Message.getField(t, 2),
                clan_event_gid: _.Message.getField(t, 3),
                news_post_gid: _.Message.getField(t, 4),
                news_url: _.Message.getField(t, 5)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_clan_account_id(e.clan_account_id),
                t.set_news_feed_gid(e.news_feed_gid),
                t.set_clan_event_gid(e.clan_event_gid),
                t.set_news_post_gid(e.news_post_gid),
                t.set_news_url(e.news_url),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_clan_account_id(t.readUint32());
                    break;
                  case 2:
                    e.set_news_feed_gid(t.readFixed64String());
                    break;
                  case 3:
                    e.add_clan_event_gid(t.readFixed64String());
                    break;
                  case 4:
                    e.add_news_post_gid(t.readFixed64String());
                    break;
                  case 5:
                    e.add_news_url(t.readString());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = _.Message.getField(e, 1)) && t.writeUint32(1, n),
                void 0 !== (n = _.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n),
                void 0 !== (n = _.Message.getField(e, 3)) &&
                  t.writeRepeatedFixed64String(3, n),
                void 0 !== (n = _.Message.getField(e, 4)) &&
                  t.writeRepeatedFixed64String(4, n),
                void 0 !== (n = _.Message.getField(e, 5)) &&
                  t.writeRepeatedString(5, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_GetBatchPublishedPartnerEvent_Response";
            }),
            r
          );
        })(_.Message);
      ((m = v || (v = {})).ConvertHTMLToBBCode = function(e, t) {
        return e.SendMsg("News.ConvertHTMLToBBCode#1", t, b, {
          bConstMethod: !0
        });
      }),
        (m.PreviewPartnerEvents = function(e, t) {
          return e.SendMsg("News.PreviewPartnerEvents#1", t, F, {
            bConstMethod: !0
          });
        }),
        (m.GetNewsFeedByRepublishClan = function(e, t) {
          return e.SendMsg("News.GetNewsFeedByRepublishClan#1", t, w, {
            bConstMethod: !0
          });
        }),
        (m.PublishPartnerEvent = function(e, t) {
          return e.SendMsg("News.PublishPartnerEvent#1", t, R, {});
        }),
        (m.GetBatchPublishedPartnerEvent = function(e, t) {
          return e.SendMsg("News.GetBatchPublishedPartnerEvent#1", t, E, {
            bConstMethod: !0
          });
        });
      var j = n("kLLr"),
        B = n("6oCP"),
        C = n("NtSG"),
        P = (function() {
          function e() {
            this.m_mapURLToPosted = new Map();
          }
          return (
            (e.Get = function() {
              return (
                e.s_CuratorAdminStore ||
                  ((e.s_CuratorAdminStore = new e()).Init(),
                  (window.g_CuratorAdminStore = e.s_CuratorAdminStore)),
                e.s_CuratorAdminStore
              );
            }),
            (e.prototype.Init = function() {
              var e = this,
                t = Object(u.f)("curatoradmin", "application_config");
              this.ValidateStoreDefault(t)
                ? ((this.m_transport = new p.a(
                    u.c.WEBAPI_BASE_URL,
                    t.webapi_token
                  ).GetServiceTransport()),
                  (this.m_clanAccountID = t.clanid),
                  (this.m_clanSteamID = j.a.InitFromClanID(
                    this.m_clanAccountID
                  )),
                  Object(o.runInAction)(function() {
                    (e.m_strRSSFeedURL = t.rss_feed_url),
                      (e.m_strRSSGID = t.rss_feed_gid),
                      (e.m_eRSSFeedLanguage = t.rss_feed_language),
                      (e.m_rtimeRSSLastChecked = t.rss_feed_last_checked),
                      (e.m_nPollIntervalSeconds = t.poll_interval),
                      (e.m_eCuratorLanguage = t.curation_language);
                  }))
                : console.error("Failed to CCuratorAdminStore", t);
            }),
            (e.prototype.GetCuratorLangaugeHandleUnset = function() {
              return -1 == this.m_eRSSFeedLanguage
                ? -1 == this.m_eCuratorLanguage
                  ? 0
                  : this.m_eCuratorLanguage
                : this.m_eRSSFeedLanguage;
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                "object" == typeof t &&
                "number" == typeof t.clanid &&
                "string" == typeof t.webapi_token
              );
            }),
            (e.prototype.BHasSavedRSSURL = function() {
              return Boolean(this.m_strRSSFeedURL);
            }),
            (e.prototype.GetRSSUrl = function() {
              return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : "";
            }),
            (e.prototype.GetRSSLastRtimeChecked = function() {
              return this.m_rtimeRSSLastChecked;
            }),
            (e.prototype.GetClanSteamID = function() {
              return this.m_clanSteamID;
            }),
            (e.prototype.GetClanAccountID = function() {
              return this.m_clanAccountID;
            }),
            (e.prototype.BHasSetupFeed = function(e) {
              return Boolean(this.m_strRSSGID) && this.m_strRSSFeedURL === e;
            }),
            (e.prototype.BIsAutomationEnabled = function() {
              return Boolean(0 < this.m_nPollIntervalSeconds);
            }),
            (e.prototype.BHasFeedGID = function() {
              return Boolean(this.m_strRSSGID);
            }),
            (e.prototype.PreviewPartnerEventsFromRSSFeed = function(r) {
              return Object(d.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(d.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = g.a.Init(y)).Body().set_rss_url(r),
                          t
                            .Body()
                            .set_lang(this.GetCuratorLangaugeHandleUnset()),
                          [4, v.PreviewPartnerEvents(this.m_transport, t)])
                        : (console.error(
                            "PreviewPartnerEventsFromRSSFeed: User not logged in"
                          ),
                          [2, null]);
                    case 1:
                      return (
                        1 != (n = e.sent()).GetEResult() &&
                          console.error(
                            "PreviewPartnerEventsFromRSSFeed error: " +
                              n.GetEMsg() +
                              " " +
                              n.GetEResult()
                          ),
                        [2, n]
                      );
                  }
                });
              });
            }),
            (e.prototype.FetchPublishedEvents = function(s) {
              return (
                void 0 === s && (s = 100),
                Object(d.b)(this, void 0, void 0, function() {
                  var t,
                    n,
                    r = this;
                  return Object(d.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return this.BIsLoggedIn()
                          ? this.m_strRSSGID
                            ? ((t = g.a.Init(O))
                                .Body()
                                .set_news_feed_gid(this.m_strRSSGID),
                              t.Body().set_amount(s),
                              [
                                4,
                                v.GetBatchPublishedPartnerEvent(
                                  this.m_transport,
                                  t
                                )
                              ])
                            : (console.error(
                                "FetchPublishedEvents: Need to create a news feed first"
                              ),
                              [2, null])
                          : (console.error(
                              "FetchPublishedEvents: User not logged in"
                            ),
                            [2, null]);
                      case 1:
                        return (
                          1 != (n = e.sent()).GetEResult()
                            ? console.error(
                                "FetchPublishedEvents error: EMsg:" +
                                  Object(C.a)(n.GetEMsg()) +
                                  " EResult:" +
                                  n.GetEResult() +
                                  " msg:" +
                                  n.Hdr().error_message()
                              )
                            : Object(o.runInAction)(function() {
                                for (
                                  var e = 0;
                                  e < n.Body().clan_event_gid().length;
                                  ++e
                                ) {
                                  var t = {
                                    url: n.Body().news_url()[e],
                                    clan_event_gid: n.Body().clan_event_gid()[
                                      e
                                    ],
                                    news_post_gid: n.Body().news_post_gid()[e]
                                  };
                                  r.m_mapURLToPosted.set(t.url, t);
                                }
                              }),
                          [2, n]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.MapArticleURLToClanEventGID = function(e) {
              var t = this.m_mapURLToPosted.get(e);
              if (t) return t.clan_event_gid;
            }),
            (e.prototype.BIsLoggedIn = function() {
              return u.i.logged_in;
            }),
            (e.prototype.CreateOrUpdateRSSNewFeed = function(a, i) {
              return (
                void 0 === i && (i = 0),
                Object(d.b)(this, void 0, void 0, function() {
                  var t,
                    n,
                    r,
                    s = this;
                  return Object(d.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = new FormData()).append(
                            "sessionid",
                            u.c.SESSIONID
                          ),
                          t.append("gid", this.m_strRSSGID),
                          t.append(
                            "lang",
                            "" + this.GetCuratorLangaugeHandleUnset()
                          ),
                          t.append("rss_url", a),
                          t.append("polling_interval", "" + i),
                          (n =
                            u.c.STORE_BASE_URL +
                            "curator/" +
                            this.m_clanAccountID +
                            "/admin/ajaxmanagerssfeed"),
                          [4, l.a.post(n, t, { withCredentials: !0 })]
                        );
                      case 1:
                        return (
                          1 == (r = e.sent()).data.success &&
                            Object(o.runInAction)(function() {
                              (s.m_strRSSGID = r.data.gid),
                                (s.m_strRSSFeedURL = a),
                                (s.m_nPollIntervalSeconds = i);
                            }),
                          [2, r.data]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.UpdateAutomation = function(t) {
              return Object(d.b)(this, void 0, void 0, function() {
                return Object(d.e)(this, function(e) {
                  return [
                    2,
                    this.CreateOrUpdateRSSNewFeed(
                      this.m_strRSSFeedURL,
                      t ? 300 : 0
                    )
                  ];
                });
              });
            }),
            (e.prototype.CheckForNewUpdate = function() {
              return Object(d.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(d.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_strRSSGID
                        ? ((t = new FormData()).append(
                            "sessionid",
                            u.c.SESSIONID
                          ),
                          t.append("gid", this.m_strRSSGID),
                          (n =
                            u.c.STORE_BASE_URL +
                            "curator/" +
                            this.m_clanAccountID +
                            "/admin/ajaxcheckfornews"),
                          [4, l.a.post(n, t, { withCredentials: !0 })])
                        : [3, 2];
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.CreatePost = function(a, i) {
              return Object(d.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  r,
                  s = this;
                return Object(d.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? this.m_strRSSGID
                          ? ((t = new f()).set_gid(a.post.gid),
                            t.set_news_feed_gid(this.m_strRSSGID),
                            t.set_title(a.post.title),
                            t.set_url(a.post.url),
                            t.set_author(a.post.author),
                            t.set_rtime_date(a.post.rtime_date),
                            t.set_contents(a.post.contents),
                            t.set_commited(a.post.commited),
                            t.set_deleted(a.post.deleted),
                            t.set_tags(a.post.tags),
                            t.set_appids(a.post.appids),
                            t.set_recommendation_state(
                              a.post.recommendation_state
                            ),
                            t.set_received_for_free(a.post.received_for_free),
                            t.set_received_compensation(
                              a.post.received_compensation
                            ),
                            t.set_blurb(a.post.blurb),
                            (n = g.a.Init(M)).Body().set_post(t),
                            n.Body().set_draft(i),
                            [4, v.PublishPartnerEvent(this.m_transport, n)])
                          : (console.error(
                              "CreatePartnerFromPreviewPost: Need to create a news feed first"
                            ),
                            [2, null])
                        : (console.error(
                            "CreatePartnerFromPreviewPost: User not logged in"
                          ),
                          [2, null]);
                    case 1:
                      return (
                        1 != (r = e.sent()).GetEResult()
                          ? console.error(
                              "CreatePost error: " +
                                r.GetEMsg() +
                                " " +
                                r.GetEResult()
                            )
                          : (Object(o.runInAction)(function() {
                              var e = {
                                url: a.post.url,
                                clan_event_gid: r.Body().clan_event_gid(),
                                news_post_gid: r.Body().news_post_gid()
                              };
                              s.m_mapURLToPosted.set(a.post.url, e);
                            }),
                            B.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              this.m_clanSteamID,
                              r.Body().clan_event_gid(),
                              0
                            )),
                        [2, r]
                      );
                  }
                });
              });
            }),
            Object(d.c)([o.observable], e.prototype, "m_strRSSFeedURL", void 0),
            Object(d.c)([o.observable], e.prototype, "m_strRSSGID", void 0),
            Object(d.c)(
              [o.observable],
              e.prototype,
              "m_rtimeRSSLastChecked",
              void 0
            ),
            Object(d.c)(
              [o.observable],
              e.prototype,
              "m_nPollIntervalSeconds",
              void 0
            ),
            Object(d.c)(
              [o.observable],
              e.prototype,
              "m_eRSSFeedLanguage",
              void 0
            ),
            Object(d.c)(
              [o.observable],
              e.prototype,
              "m_eCuratorLanguage",
              void 0
            ),
            Object(d.c)(
              [o.observable],
              e.prototype,
              "m_mapURLToPosted",
              void 0
            ),
            e
          );
        })(),
        D = (function() {
          function e() {
            this.m_mapClanToRecommendation = new Map();
          }
          return (
            (e.Get = function() {
              return (
                e.s_CuratorStore ||
                  ((e.s_CuratorStore = new e()).Init(),
                  (window.g_CuratorRecommendationStore = e.s_CuratorStore)),
                e.s_CuratorStore
              );
            }),
            (e.prototype.Init = function() {}),
            (e.prototype.GetReviewForApp = function(e, t) {
              if (this.m_mapClanToRecommendation.has(e.GetAccountID()))
                return this.m_mapClanToRecommendation
                  .get(e.GetAccountID())
                  .get(t);
            }),
            (e.prototype.BHasReviewForApp = function(e, t) {
              return Boolean(this.GetReviewForApp(e, t));
            }),
            (e.prototype.BHasReviewForAppByClanAccount = function(e, t) {
              var n = j.a.InitFromClanID(e);
              return Boolean(this.GetReviewForApp(n, t));
            }),
            (e.prototype.LoadAppRecommendation = function(i, o) {
              return Object(d.b)(this, void 0, void 0, function() {
                var t, n, r, s, a;
                return Object(d.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.m_mapClanToRecommendation.has(i.GetAccountID()) ||
                          this.m_mapClanToRecommendation.set(
                            i.GetAccountID(),
                            new Map()
                          ),
                        (t = this.m_mapClanToRecommendation.get(
                          i.GetAccountID()
                        )),
                        (n = []),
                        o.forEach(function(e) {
                          t.has(e) || n.push(e);
                        }),
                        0 < n.length
                          ? ((r =
                              u.c.STORE_BASE_URL +
                              "curator/" +
                              i.GetAccountID() +
                              "/admin/ajaxgetrecbyapps"),
                            [
                              4,
                              l.a.get(r, {
                                params: {
                                  appids: n,
                                  cc: u.c.COUNTRY || "US",
                                  l: u.c.LANGUAGE
                                }
                              })
                            ])
                          : [3, 2]
                      );
                    case 1:
                      (s = e.sent()),
                        (a = s && s.data) &&
                          a.rec_app &&
                          a.rec_app.forEach(function(e) {
                            t.set(Number(e.appid), e);
                          }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        A = n("TyAF"),
        G = n("mgoM"),
        U = n("3+zv"),
        L = n("Mgs7"),
        I = n("T27q"),
        k = n("fpVW"),
        T = n.n(k),
        N = n("r+ba"),
        z = n("Jqb/"),
        W = n("ka0M"),
        x = n("0OaU"),
        H = n("+d9t"),
        V = n("exH9"),
        q = n("X3Ds"),
        $ = n("TLQK"),
        Y = n("bDQf"),
        Q = n("bxiW"),
        J = n("A2AY"),
        K = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { strRssURL: P.Get().GetRSSUrl() }),
              (e.m_Admin = P.Get()),
              e
            );
          }
          return (
            Object(d.d)(e, t),
            (e.prototype.OnChangeActualRSSURL = function(e) {
              this.setState({ strRssURL: e.target.value });
            }),
            (e.prototype.OnCreateOrSaveFeed = function(e) {
              e.preventDefault(),
                Object(W.d)(
                  c.a.createElement(te, { strRSSUrl: this.state.strRssURL }),
                  Object(q.m)(e)
                );
            }),
            (e.prototype.OnRevert = function(e) {
              e.preventDefault(),
                this.setState({ strRssURL: this.m_Admin.GetRSSUrl() });
            }),
            (e.prototype.render = function() {
              var e = Boolean(
                this.state.strRssURL === this.m_Admin.GetRSSUrl()
              );
              return void 0 !== window.Prototype
                ? (window.location.reload(), null)
                : c.a.createElement(
                    "div",
                    { className: Object(V.a)(J.Ctn) },
                    c.a.createElement(
                      "div",
                      { className: "titleframe" },
                      c.a.createElement(
                        "h4",
                        null,
                        Object($.d)("#CuratorAdmin_RSSFeed_title")
                      ),
                      c.a.createElement(
                        "p",
                        { className: "subtitle" },
                        Object($.d)("#CuratorAdmin_RSSFeed_desc")
                      ),
                      c.a.createElement(
                        "p",
                        null,
                        Object($.d)(
                          "#CuratorAdmin_RSSFeed_lang",
                          Object(G.b)(
                            this.m_Admin.GetCuratorLangaugeHandleUnset()
                          )
                        ),
                        c.a.createElement(
                          "a",
                          {
                            href:
                              u.c.COMMUNITY_BASE_URL +
                              "gid/" +
                              this.m_Admin
                                .GetClanSteamID()
                                .ConvertTo64BitString() +
                              "/edit ",
                            target: "_blank"
                          },
                          Object($.d)(
                            "#CuratorAdmin_RSSFeed_edit_group_profile"
                          )
                        )
                      ),
                      c.a.createElement(
                        "p",
                        null,
                        Object($.k)(
                          "#CuratorAdmin_RSSFeed_doc_link",
                          c.a.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/store/news/rss",
                              target: "_blank"
                            },
                            Object($.d)("#CuratorAdmin_RSSFeed_doc_link_text")
                          )
                        )
                      ),
                      c.a.createElement(
                        "p",
                        { className: J.DashboardBtn },
                        c.a.createElement(
                          H.a,
                          {
                            href:
                              u.c.COMMUNITY_BASE_URL +
                              "gid/" +
                              this.m_Admin
                                .GetClanSteamID()
                                .ConvertTo64BitString() +
                              "/partnerevents/",
                            className: Object(V.a)(T.a.Button, T.a.Primary)
                          },
                          Object($.d)("#RSSManager_EventDashBoard")
                        )
                      )
                    ),
                    c.a.createElement(
                      "div",
                      { className: "darkframe" },
                      c.a.createElement(
                        "div",
                        {
                          className: Object(V.a)(
                            T.a.FlexRowContainer,
                            J.UrlSettingCtn
                          )
                        },
                        c.a.createElement(L.j, {
                          className: J.RssInpu,
                          type: "text",
                          name: "link_url",
                          id: "link_url",
                          value: this.state.strRssURL,
                          label: Object($.d)("#CuratorAdmin_RSSFeed_english"),
                          placeholder: Object($.d)(
                            "#CuratorAdmin_RSSFeed_placeholder"
                          ),
                          onChange: this.OnChangeActualRSSURL,
                          mustBeURL: !0
                        }),
                        c.a.createElement(
                          "a",
                          {
                            className: "btn_green_white_innerfade btn_medium",
                            onClick: this.OnCreateOrSaveFeed
                          },
                          c.a.createElement(
                            "span",
                            null,
                            Object($.d)(e ? "#Button_Saved" : "#Button_Save")
                          )
                        ),
                        !e &&
                          c.a.createElement(
                            "a",
                            {
                              onClick: this.OnRevert,
                              className: "btn_grey_white_innerfade btn_medium"
                            },
                            Object($.d)("#Button_Revert")
                          )
                      ),
                      c.a.createElement(Z, null),
                      c.a.createElement("br", null),
                      c.a.createElement(X, { strRssURL: this.state.strRssURL })
                    )
                  );
            }),
            Object(d.c)([Q.a], e.prototype, "OnChangeActualRSSURL", null),
            Object(d.c)([Q.a], e.prototype, "OnCreateOrSaveFeed", null),
            Object(d.c)([Q.a], e.prototype, "OnRevert", null),
            (e = Object(d.c)([A.observer], e))
          );
        })(c.a.Component),
        X = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                strParseRssURL: e.props.strRssURL,
                bLoadingPreview: !1
              }),
              (e.m_cancelSignal = l.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(d.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e = P.Get();
              e.BHasFeedGID() &&
                e.BHasSavedRSSURL() &&
                e.GetRSSUrl() == this.props.strRssURL &&
                this.OnLoadPreview();
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "PreviewRSSViewAndControl component unmounted"
              );
            }),
            (e.prototype.RenderPreviews = function() {
              var t = this,
                i = P.Get(),
                n = new Array();
              if (this.state.previews) {
                var e = this.state.previews;
                (e = e.sort(function(e, t) {
                  var n = i.MapArticleURLToClanEventGID(e.post.url),
                    r = i.MapArticleURLToClanEventGID(t.post.url),
                    s = n ? B.c.GetClanEventModel(n) : null,
                    a = r ? B.c.GetClanEventModel(r) : null;
                  return s && a
                    ? a.postTime - s.postTime
                    : s
                    ? -1
                    : a
                    ? 1
                    : t.post.rtime_date - e.post.rtime_date;
                })).forEach(function(e) {
                  n.push(
                    c.a.createElement(ee, {
                      newsData: e,
                      key: "id: " + e.unique_id,
                      clanSteamID: i.GetClanSteamID(),
                      fnGetRSSUrl: t.GetRSSPreviewURL
                    })
                  );
                });
              }
              return n;
            }),
            (e.prototype.GetRSSPreviewURL = function() {
              return this.state.strParseRssURL;
            }),
            (e.prototype.OnLoadPreview = function() {
              this.setState(
                {
                  bLoadingPreview: !0,
                  previews: void 0,
                  strPreviewURL: this.props.strRssURL,
                  strPreviewErrorMsg: void 0
                },
                this.DoLoadPreview
              );
            }),
            (e.prototype.DoLoadPreview = function() {
              return Object(d.b)(this, void 0, void 0, function() {
                var s,
                  t,
                  a,
                  n = this;
                return Object(d.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        (s = P.Get()).PreviewPartnerEventsFromRSSFeed(
                          this.props.strRssURL
                        )
                      ];
                    case 1:
                      return (
                        (t = e.sent()) && 1 == t.GetEResult()
                          ? ((a = t.Body().toObject()),
                            this.setState(
                              {
                                strParseRssURL: a.rss_url,
                                bLoadingPreview: !0
                              },
                              function() {
                                return Object(d.b)(
                                  n,
                                  void 0,
                                  void 0,
                                  function() {
                                    var n, r, t;
                                    return Object(d.e)(this, function(e) {
                                      switch (e.label) {
                                        case 0:
                                          return [
                                            4,
                                            s.FetchPublishedEvents(
                                              Math.max(100, a.results.length)
                                            )
                                          ];
                                        case 1:
                                          return (
                                            e.sent(),
                                            (n = new Array()),
                                            (r = new Array()),
                                            a.results.forEach(function(e) {
                                              var t = s.MapArticleURLToClanEventGID(
                                                e.post.url
                                              );
                                              t && n.push(t),
                                                e.post.appids &&
                                                  1 === e.post.appids.length &&
                                                  0 !==
                                                    e.post
                                                      .recommendation_state &&
                                                  r.push(e.post.appids[0]);
                                            }),
                                            0 < n.length
                                              ? [
                                                  4,
                                                  B.c.LoadBatchPartnerEventsByAnnouncementGID(
                                                    n,
                                                    null,
                                                    this.m_cancelSignal
                                                  )
                                                ]
                                              : [3, 3]
                                          );
                                        case 2:
                                          e.sent(), (e.label = 3);
                                        case 3:
                                          return 0 < r.length
                                            ? ((t = s.GetClanSteamID()),
                                              [
                                                4,
                                                D.Get().LoadAppRecommendation(
                                                  t,
                                                  r
                                                )
                                              ])
                                            : [3, 5];
                                        case 4:
                                          e.sent(), (e.label = 5);
                                        case 5:
                                          return (
                                            this.setState({
                                              previews: a.results,
                                              bLoadingPreview: void 0
                                            }),
                                            [2]
                                          );
                                      }
                                    });
                                  }
                                );
                              }
                            ))
                          : this.setState({
                              bLoadingPreview: void 0,
                              strPreviewErrorMsg: Object($.d)(
                                "#Error_Description",
                                t.GetEResult(),
                                t.Hdr().error_message()
                              )
                            }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = this.RenderPreviews();
              return c.a.createElement(
                "div",
                null,
                Boolean(
                  !this.state.bLoadingPreview &&
                    this.state.strPreviewURL !== this.props.strRssURL
                ) &&
                  c.a.createElement(
                    "div",
                    { className: J.PreviewListBtn },
                    c.a.createElement(
                      L.c,
                      {
                        disabled: !L.j.validateUrl(this.props.strRssURL),
                        onClick: this.OnLoadPreview
                      },
                      Object($.d)("#CuratorAdmin_RSSFeed_preview")
                    )
                  ),
                this.state.bLoadingPreview &&
                  c.a.createElement(x.a, {
                    string: Object($.d)("#Loading"),
                    size: "medium",
                    position: "center"
                  }),
                this.state.strPreviewErrorMsg &&
                  c.a.createElement(
                    "div",
                    { className: T.a.ErrorMsg },
                    this.state.strPreviewErrorMsg
                  ),
                Boolean(0 < e.length) &&
                  c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(
                      "p",
                      null,
                      Object($.d)(
                        "#RSSManager_PreviewInfo",
                        this.state.strPreviewURL
                      )
                    ),
                    c.a.createElement(
                      "div",
                      { className: J.PreviewListCtn },
                      e
                    ),
                    c.a.createElement(
                      "p",
                      { className: J.DashboardBtn },
                      c.a.createElement(
                        H.a,
                        {
                          href:
                            u.c.COMMUNITY_BASE_URL +
                            "gid/" +
                            P.Get()
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/partnerevents/",
                          className: Object(V.a)(T.a.Button, T.a.Primary)
                        },
                        Object($.d)("#RSSManager_EventDashBoard")
                      )
                    )
                  )
              );
            }),
            Object(d.c)([Q.a], e.prototype, "GetRSSPreviewURL", null),
            Object(d.c)([Q.a], e.prototype, "OnLoadPreview", null),
            (e = Object(d.c)([A.observer], e))
          );
        })(c.a.Component),
        Z = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), (e.m_Admin = P.Get()), e;
          }
          return (
            Object(d.d)(e, t),
            (e.prototype.OnToggleChannelAutomation = function(e) {
              e
                ? (this.setState({ strErrorMessage: void 0 }),
                  Object(W.d)(
                    c.a.createElement(te, {
                      strRSSUrl: this.m_Admin.GetRSSUrl(),
                      bActivatePooling: !0
                    }),
                    window
                  ))
                : this.setState(
                    {
                      strErrorMessage: void 0,
                      strReasonWaiting: Object($.d)("#Saving")
                    },
                    this.BDisableAutomation
                  );
            }),
            (e.prototype.BDisableAutomation = function() {
              return Object(d.b)(this, void 0, void 0, function() {
                var t = this;
                return Object(d.e)(this, function(e) {
                  return (
                    this.m_Admin
                      .UpdateAutomation(!1)
                      .catch(function() {
                        return t.setState({
                          strErrorMessage: Object($.d)(
                            "#RSSManager_Status_Automation_DisableFailed"
                          )
                        });
                      })
                      .finally(function() {
                        return t.setState({ strReasonWaiting: void 0 });
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.OnQueueScan = function(n) {
              return Object(d.b)(this, void 0, void 0, function() {
                var t = this;
                return Object(d.e)(this, function(e) {
                  return (
                    this.setState({
                      strReasonWaiting: Object($.d)(
                        "#CuratorAdmin_RSSFeed_scannow"
                      )
                    }),
                    this.m_Admin
                      .CheckForNewUpdate()
                      .then(function() {
                        return Object(
                          W.d
                        )(c.a.createElement(z.b, { strTitle: Object($.d)("#CuratorAdmin_RSSFeed_scannow"), strDescription: Object($.d)("#CuratorAdmin_RSSFeed_queued") }), Object(q.m)(n));
                      })
                      .catch(function(e) {
                        return Object(
                          W.d
                        )(c.a.createElement(z.d, { strTitle: Object($.d)("#CuratorAdmin_RSSFeed_scannow"), strDescription: Object(Y.a)(e) }), Object(q.m)(n));
                      })
                      .finally(function() {
                        return t.setState({ strReasonWaiting: void 0 });
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.render = function() {
              return this.m_Admin.BHasSavedRSSURL()
                ? c.a.createElement(
                    "div",
                    null,
                    Boolean(this.state.strReasonWaiting) &&
                      c.a.createElement(x.a, {
                        size: "medium",
                        string: this.state.strReasonWaiting
                      }),
                    Boolean(this.state.strErrorMessage) &&
                      c.a.createElement(
                        "div",
                        { className: J.Error },
                        this.state.strErrorMessage
                      ),
                    c.a.createElement(L.n, {
                      onChange: this.OnToggleChannelAutomation,
                      label: Object($.d)("#RSSManager_Status_Automation_Desc"),
                      checked: this.m_Admin.BIsAutomationEnabled(),
                      description: ""
                    }),
                    this.m_Admin.BIsAutomationEnabled() &&
                      c.a.createElement(
                        "p",
                        null,
                        Object($.d)("#CuratorAdmin_RSSFeed_lastscanned"),
                        " ",
                        Object($.i)(this.m_Admin.GetRSSLastRtimeChecked(), !1),
                        "  @ ",
                        Object($.j)(this.m_Admin.GetRSSLastRtimeChecked()),
                        " ",
                        c.a.createElement(
                          "a",
                          { onClick: this.OnQueueScan },
                          c.a.createElement(
                            "span",
                            null,
                            Object($.d)("#CuratorAdmin_RSSFeed_scannow")
                          )
                        )
                      )
                  )
                : null;
            }),
            Object(d.c)([Q.a], e.prototype, "OnToggleChannelAutomation", null),
            Object(d.c)([Q.a], e.prototype, "OnQueueScan", null),
            (e = Object(d.c)([A.observer], e))
          );
        })(c.a.Component),
        ee = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                clan_event_gid: P.Get().MapArticleURLToClanEventGID(
                  e.props.newsData.post.url
                ),
                bLoadingPartnerEvent: Boolean(
                  P.Get().MapArticleURLToClanEventGID(e.props.newsData.post.url)
                )
              }),
              (e.m_refParent = c.a.createRef()),
              e
            );
          }
          return (
            Object(d.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.DoPartnerEventLoad();
            }),
            (e.prototype.DoPartnerEventLoad = function() {
              return Object(d.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(d.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.clan_event_gid
                        ? ((t = P.Get().GetClanSteamID()),
                          [
                            4,
                            B.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              t,
                              this.state.clan_event_gid,
                              0
                            )
                          ])
                        : [3, 2];
                    case 1:
                      (n = e.sent()),
                        this.setState({
                          bLoadingPartnerEvent: !1,
                          existingEventModel: n
                        }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnOpenPreviewAsPartnerEvent = function(e) {
              var t = this.props,
                n = t.newsData,
                r = t.clanSteamID,
                s = new U.n();
              (s.GID = "PreviewPartnerEventRow_0"),
                (s.clanSteamID = r),
                (s.postTime = Date.now() / 1e3),
                (s.startTime = Date.now() / 1e3),
                (s.type = 28),
                s.vecTags.push("auto_rssfeed"),
                s.vecTags.push("curator"),
                s.vecTags.push("curator_public"),
                s.name.set(0, n.title),
                s.description.set(0, n.desc),
                this.ValidateJSONDefault(n.jsondata) &&
                  (s.jsondata = n.jsondata),
                s.jsondata.read_more_link ||
                  (s.jsondata.read_more_link = n.unique_id),
                this.ShowModalEvent(s);
            }),
            (e.prototype.OnViewEvent = function() {
              this.ShowModalEvent(
                B.c.GetClanEventModel(this.state.clan_event_gid)
              );
            }),
            (e.prototype.ShowModalEvent = function(e) {
              var t = document.getElementById("curator_header_area_ctn_id");
              t &&
                (e
                  ? t.classList.add("curator_header_area_ctn_hideme")
                  : t.classList.remove("curator_header_area_ctn_hideme")),
                this.setState({ eventModelForPreviewNow: e });
            }),
            (e.prototype.ValidateJSONDefault = function(e) {
              var t = e;
              return !(!t || Array.isArray(t) || "object" != typeof t);
            }),
            (e.prototype.OnPostNewsEvent = function(e) {
              var t = this.props,
                n = t.newsData,
                r = t.fnGetRSSUrl;
              Object(W.d)(
                c.a.createElement(te, {
                  newsData: n,
                  strRSSUrl: r(),
                  fnClanEventGID: this.OnClanEventCreateSuccess
                }),
                Object(q.m)(e)
              );
            }),
            (e.prototype.OnUpdateNewsEvent = function(e) {
              var t = this.props,
                n = t.newsData,
                r = t.fnGetRSSUrl;
              Object(W.d)(
                c.a.createElement(te, {
                  newsData: n,
                  strRSSUrl: r(),
                  fnClanEventGID: this.OnClanEventCreateSuccess,
                  bUpdatePost: !0
                }),
                Object(q.m)(e)
              );
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
            }),
            (e.prototype.OnClanEventCreateSuccess = function(e) {
              this.setState(
                { clan_event_gid: e, bLoadingPartnerEvent: !0 },
                this.DoPartnerEventLoad
              );
            }),
            (e.prototype.OnShowRawRSS = function(e) {
              Object(W.d)(
                c.a.createElement(
                  z.b,
                  {
                    bAlertDialog: !0,
                    strTitle: Object($.d)("#RSSManager_PostEvent_ViewRaw")
                  },
                  c.a.createElement("textarea", {
                    className: J.RawRSS,
                    value: this.props.newsData.rss_message,
                    disabled: !0
                  })
                ),
                Object(q.m)(e)
              );
            }),
            (e.prototype.render = function() {
              var e = this.props.newsData,
                t = this.state,
                n = t.clan_event_gid,
                r = t.existingEventModel,
                s = t.bLoadingPartnerEvent,
                a = P.Get(),
                i = a.GetClanSteamID(),
                o = r && r.BIsStagedEvent(),
                d =
                  e.post.appids &&
                  1 == e.post.appids.length &&
                  e.post.appids[0],
                l =
                  0 !== e.post.recommendation_state &&
                  d &&
                  D.Get().BHasReviewForApp(i, d);
              return c.a.createElement(
                "div",
                {
                  className: Object(V.a)(
                    J.PostCtn,
                    Boolean(n) ? J.ActivePost : ""
                  )
                },
                c.a.createElement("span", { className: J.PostTitle }, e.title),
                c.a.createElement("br", null),
                Boolean(r) &&
                  c.a.createElement(
                    c.a.Fragment,
                    null,
                    Boolean(r.BIsVisibleEvent()) &&
                      c.a.createElement(
                        "span",
                        { className: J.PostDate },
                        Object($.k)(
                          "#RSSManager_PostEvent_PostedDate",
                          Object($.l)(r.GetPostTimeAndDateUnixSeconds()) +
                            " @ " +
                            Object($.j)(r.GetPostTimeAndDateUnixSeconds())
                        )
                      ),
                    Boolean(!r.BIsVisibleEvent()) &&
                      c.a.createElement(
                        "span",
                        {
                          className: Object(V.a)(
                            J.PostDraft,
                            o ? J.PostStaged : ""
                          )
                        },
                        Object($.d)(
                          o
                            ? "#RSSManager_PostEvent_Staged"
                            : "#RSSManager_PostEvent_Draft",
                          o
                            ? Object($.l)(
                                r.GetVisibilityStartTimeAndDateUnixSeconds()
                              ) +
                                " @ " +
                                Object($.j)(
                                  r.GetVisibilityStartTimeAndDateUnixSeconds()
                                )
                            : ""
                        )
                      )
                  ),
                c.a.createElement(
                  "div",
                  { className: J.ButtonCtn },
                  Boolean(n)
                    ? c.a.createElement(
                        c.a.Fragment,
                        null,
                        Boolean(s)
                          ? c.a.createElement(x.a, {
                              string: Object($.d)("#Loading"),
                              size: "small",
                              position: "center"
                            })
                          : c.a.createElement(
                              "div",
                              {
                                onClick: this.OnViewEvent,
                                className: Object(V.a)(T.a.Button, J.PreviewBtn)
                              },
                              Object($.d)("#RSSManager_PostEvent_ViewEvent")
                            ),
                        c.a.createElement(
                          "a",
                          {
                            className: Object(V.a)(T.a.Button, J.PreviewBtn),
                            href:
                              u.c.COMMUNITY_BASE_URL +
                              "gid/" +
                              a.GetClanSteamID().ConvertTo64BitString() +
                              "/partnerevents/edit/" +
                              this.state.clan_event_gid
                          },
                          Object($.d)("#RSSManager_PostEvent_EditEvent")
                        ),
                        c.a.createElement(
                          "div",
                          {
                            onClick: this.OnUpdateNewsEvent,
                            className: Object(V.a)(T.a.Button, J.PreviewBtn)
                          },
                          Object($.d)("#RSSManager_PostEvent_UpdateEvent")
                        ),
                        l &&
                          c.a.createElement(
                            "a",
                            {
                              className: Object(V.a)(T.a.Button, J.PreviewBtn),
                              href:
                                u.c.STORE_BASE_URL +
                                "app/" +
                                e.post.appids[0] +
                                "/?curator_clanid=" +
                                i.GetAccountID()
                            },
                            Object($.d)("#RSSManager_SeeReview")
                          )
                      )
                    : c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                          "div",
                          {
                            onClick: this.OnOpenPreviewAsPartnerEvent,
                            className: Object(V.a)(T.a.Button, J.PreviewBtn)
                          },
                          Object($.d)("#CuratorAdmin_RSSFeed_col_preview_event")
                        ),
                        c.a.createElement(
                          "div",
                          {
                            onClick: this.OnPostNewsEvent,
                            className: Object(V.a)(T.a.Button, J.PreviewBtn)
                          },
                          Object($.d)("#CuratorAdmin_RSSFeed_col_create_event")
                        )
                      ),
                  Boolean(e.rss_message && 0 < e.rss_message.length) &&
                    c.a.createElement(
                      "div",
                      { onClick: this.OnShowRawRSS, className: J.ViewRaw },
                      Object($.d)("#RSSManager_PostEvent_ViewRaw")
                    ),
                  Boolean(this.state.eventModelForPreviewNow) &&
                    c.a.createElement(
                      z.g,
                      { className: N.StoreHeaderAdjust },
                      c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(I.a, {
                          event: this.state.eventModelForPreviewNow,
                          fnClose: this.HideModalEvent
                        })
                      )
                    )
                )
              );
            }),
            Object(d.c)([Q.a], e.prototype, "DoPartnerEventLoad", null),
            Object(d.c)(
              [Q.a],
              e.prototype,
              "OnOpenPreviewAsPartnerEvent",
              null
            ),
            Object(d.c)([Q.a], e.prototype, "OnViewEvent", null),
            Object(d.c)([Q.a], e.prototype, "OnPostNewsEvent", null),
            Object(d.c)([Q.a], e.prototype, "OnUpdateNewsEvent", null),
            Object(d.c)([Q.a], e.prototype, "HideModalEvent", null),
            Object(d.c)([Q.a], e.prototype, "OnClanEventCreateSuccess", null),
            Object(d.c)([Q.a], e.prototype, "OnShowRawRSS", null),
            (e = Object(d.c)([A.observer], e))
          );
        })(c.a.Component),
        te = (function(t) {
          function n() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                initialState: n.DetermineStartState(e.props),
                step: n.DetermineStartState(e.props),
                bDraftMode: !0
              }),
              (e.m_Admin = P.Get()),
              e
            );
          }
          return (
            Object(d.d)(n, t),
            (n.DetermineStartState = function(e) {
              var t = P.Get().BHasSetupFeed(e.strRSSUrl);
              return e.newsData && t
                ? e.bUpdatePost
                  ? "update_post"
                  : "create_post"
                : e.bActivatePooling
                ? "activate_feed"
                : P.Get().BHasSavedRSSURL()
                ? "update_feed"
                : "feed_missing";
            }),
            (n.prototype.OnCreateNewsFeed = function() {
              this.setState({ step: "creating_feed" }, this.DoCreateNewsFeed);
            }),
            (n.prototype.DoCreateNewsFeed = function() {
              return Object(d.b)(this, void 0, void 0, function() {
                var t;
                return Object(d.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.m_Admin.CreateOrUpdateRSSNewFeed(
                          this.props.strRSSUrl,
                          this.props.bActivatePooling ? 300 : 0
                        )
                      ];
                    case 1:
                      return (
                        1 != (t = e.sent()).success
                          ? this.setState({
                              step: "failure",
                              eResult: t.success,
                              strErrorMessage: Object($.d)(
                                "#RSSManager_PostEvent_Failure"
                              )
                            })
                          : this.setState({
                              step: this.props.newsData
                                ? "create_post"
                                : "success"
                            }),
                        [2]
                      );
                  }
                });
              });
            }),
            (n.prototype.OnCreatePost = function() {
              this.setState({ step: "waiting_post" }, this.DoCreatePost);
            }),
            (n.prototype.DoCreatePost = function() {
              return Object(d.b)(this, void 0, void 0, function() {
                var t;
                return Object(d.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.m_Admin.CreatePost(
                          this.props.newsData,
                          Boolean(this.state.bDraftMode)
                        )
                      ];
                    case 1:
                      return (
                        1 != (t = e.sent()).GetEResult()
                          ? this.setState({
                              step: "failure",
                              eResult: t.GetEResult(),
                              strErrorMessage: Object($.d)(
                                "#RSSManager_PostEvent_Failure"
                              )
                            })
                          : (this.props.fnClanEventGID &&
                              this.props.fnClanEventGID(
                                t.Body().clan_event_gid()
                              ),
                            this.setState({
                              step: "success",
                              eventGID: t.Body().clan_event_gid()
                            })),
                        [2]
                      );
                  }
                });
              });
            }),
            (n.prototype.OnChangeDraftMode = function(e) {
              this.setState({ bDraftMode: e });
            }),
            (n.prototype.OnChangePermissionsCreateFeed = function(e) {
              this.setState({ bPermissions: e });
            }),
            (n.prototype.OnChangeConductCreateFeed = function(e) {
              this.setState({ bConduct: e });
            }),
            (n.prototype.GetStrTitle = function() {
              if (this.props.newsData)
                return Object($.d)(
                  this.props.bUpdatePost
                    ? "#RSSManager_PostEvent_UpdateEvent"
                    : "#RSSManager_PostEvent_Tilte"
                );
              switch (this.state.initialState) {
                case "feed_missing":
                  return Object($.d)("#RSSManager_PostEvent_CreateFeedTitle");
                default:
                case "update_feed":
                  return Object($.d)("#RSSManager_PostEvent_UpdateFeedTitle");
                case "activate_feed":
                  return Object($.d)("#RSSManager_Status_Automation_Activate");
              }
            }),
            (n.prototype.render = function() {
              var e = this.props.strRSSUrl;
              switch (this.state.step) {
                case "feed_missing":
                case "activate_feed":
                case "update_feed":
                default:
                  return c.a.createElement(
                    z.c,
                    null,
                    c.a.createElement(L.i, null, " ", this.GetStrTitle(), " "),
                    c.a.createElement(
                      L.a,
                      null,
                      c.a.createElement(
                        L.b,
                        null,
                        this.props.newsData &&
                          c.a.createElement(
                            "div",
                            null,
                            Object($.d)(
                              "#RSSManager_PostEvent_CreateFeed_DuringPost"
                            )
                          ),
                        Boolean("activate_feed" !== this.state.step) &&
                          c.a.createElement(
                            "div",
                            null,
                            Object($.d)(
                              "#RSSManager_PostEvent_CreateFeed_Desc",
                              e
                            )
                          ),
                        c.a.createElement(
                          "div",
                          null,
                          Object($.d)("#RSSManager_CreateFeed_Review")
                        ),
                        c.a.createElement(
                          "div",
                          null,
                          c.a.createElement(L.d, {
                            label: Object($.d)(
                              "#RSSManager_CreateFeed_Permissions_v1"
                            ),
                            onChange: this.OnChangePermissionsCreateFeed,
                            checked: Boolean(this.state.bPermissions)
                          })
                        ),
                        c.a.createElement(
                          "div",
                          null,
                          c.a.createElement(L.d, {
                            label: Object($.d)(
                              "#RSSManager_CreateFeed_Conduct_v1"
                            ),
                            onChange: this.OnChangeConductCreateFeed,
                            checked: Boolean(this.state.bConduct)
                          }),
                          c.a.createElement(
                            H.a,
                            { href: u.c.STORE_BASE_URL + "online_conduct/" },
                            Object($.d)("#RSSManager_CreateFeed_Conduct_Link")
                          )
                        )
                      ),
                      c.a.createElement(
                        L.h,
                        null,
                        c.a.createElement(L.l, {
                          bOKDisabled: !Boolean(
                            this.state.bPermissions && this.state.bConduct
                          ),
                          onOK: this.OnCreateNewsFeed,
                          onCancel: this.props.closeModal
                        })
                      )
                    )
                  );
                case "failure":
                  return c.a.createElement(
                    z.d,
                    {
                      strDescription: Object($.d)(
                        "#RSSManager_PostEvent_Failure"
                      ),
                      closeModal: this.props.closeModal
                    },
                    c.a.createElement(
                      "div",
                      null,
                      Object($.d)(
                        "#Error_Description",
                        this.state.eResult,
                        this.state.strErrorMessage
                      )
                    )
                  );
                case "creating_feed":
                case "waiting_post":
                  return c.a.createElement(
                    z.b,
                    {
                      strTitle: this.GetStrTitle(),
                      strDescription: Object($.d)(
                        "#RSSManager_PostEvent_InFlight"
                      ),
                      closeModal: this.props.closeModal
                    },
                    c.a.createElement(x.a, { position: "center" })
                  );
                case "create_post":
                  return c.a.createElement(
                    z.c,
                    null,
                    c.a.createElement(L.i, null, " ", this.GetStrTitle(), " "),
                    c.a.createElement(
                      L.a,
                      null,
                      c.a.createElement(
                        L.b,
                        null,
                        c.a.createElement(
                          "div",
                          null,
                          c.a.createElement(
                            "div",
                            null,
                            Object($.d)("#RSSManager_PostEvent_CreatePost")
                          ),
                          c.a.createElement(
                            "div",
                            { className: J.DialogPostTitle },
                            this.props.newsData.title
                          ),
                          c.a.createElement("br", null),
                          c.a.createElement(
                            "div",
                            null,
                            c.a.createElement(L.d, {
                              label: Object($.d)(
                                "#RSSManager_PostEvent_CreatePost_Draft"
                              ),
                              onChange: this.OnChangeDraftMode,
                              checked: Boolean(this.state.bDraftMode)
                            })
                          )
                        )
                      ),
                      c.a.createElement(
                        L.h,
                        null,
                        c.a.createElement(L.l, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal
                        })
                      )
                    )
                  );
                case "update_post":
                  return c.a.createElement(
                    z.c,
                    null,
                    c.a.createElement(L.i, null, " ", this.GetStrTitle(), " "),
                    c.a.createElement(
                      L.a,
                      null,
                      c.a.createElement(
                        L.b,
                        null,
                        c.a.createElement(
                          "div",
                          null,
                          c.a.createElement(
                            "div",
                            null,
                            Object($.d)("#RSSManager_PostEvent_UpdatePost")
                          ),
                          c.a.createElement("br", null),
                          c.a.createElement(
                            "div",
                            { className: J.DialogPostTitle },
                            this.props.newsData.title
                          ),
                          c.a.createElement("br", null)
                        )
                      ),
                      c.a.createElement(
                        L.h,
                        null,
                        c.a.createElement(L.l, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal
                        })
                      )
                    )
                  );
                case "success":
                  return c.a.createElement(
                    z.b,
                    {
                      strTitle: this.GetStrTitle(),
                      strDescription: Object($.d)(
                        this.props.newsData
                          ? "#RSSManager_PostEvent_Success"
                          : "#RSSManager_PostEvent_Success_feed"
                      ),
                      closeModal: this.props.closeModal,
                      bAlertDialog: !0
                    },
                    Boolean(this.state.eventGID) &&
                      c.a.createElement(
                        "a",
                        {
                          href:
                            u.c.COMMUNITY_BASE_URL +
                            "gid/" +
                            this.m_Admin
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/partnerevents/edit/" +
                            this.state.eventGID
                        },
                        Object($.d)("#RSSManager_PostEvent_EventLink")
                      )
                  );
              }
            }),
            Object(d.c)([Q.a], n.prototype, "OnCreateNewsFeed", null),
            Object(d.c)([Q.a], n.prototype, "DoCreateNewsFeed", null),
            Object(d.c)([Q.a], n.prototype, "OnCreatePost", null),
            Object(d.c)([Q.a], n.prototype, "DoCreatePost", null),
            Object(d.c)([Q.a], n.prototype, "OnChangeDraftMode", null),
            Object(d.c)(
              [Q.a],
              n.prototype,
              "OnChangePermissionsCreateFeed",
              null
            ),
            Object(d.c)([Q.a], n.prototype, "OnChangeConductCreateFeed", null),
            Object(d.c)([Q.a], n.prototype, "GetStrTitle", null),
            n
          );
        })(c.a.Component),
        ne = n("IjL/"),
        re = n("9w6b"),
        se = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bIsLoading: !0 }), e;
          }
          return (
            Object(d.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(d.b)(this, void 0, void 0, function() {
                return Object(d.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return P.Get(), [4, re.a.InitGlobal()];
                    case 1:
                      return e.sent(), this.setState({ bIsLoading: !1 }), [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              return (
                Object(a.a)(
                  null == window.Prototype,
                  "Should not include prototypejs."
                ),
                this.state.bIsLoading
                  ? null
                  : c.a.createElement(
                      ne.a,
                      null,
                      c.a.createElement(
                        s.d,
                        null,
                        c.a.createElement(s.b, {
                          exact: !0,
                          path:
                            "/(curator|pub|publisher|dev|developer|franchise)/:curator_vanity/admin/manage_rss",
                          component: K
                        }),
                        c.a.createElement(s.b, null, !1)
                      )
                    )
              );
            }),
            e
          );
        })(c.a.Component);
      t.default = se;
    },
    A2AY: function(e, t, n) {
      e.exports = {
        Ctn: "managerss_Ctn_1cSpO",
        RssInput: "managerss_RssInput_8NQ9L",
        PreviewListCtn: "managerss_PreviewListCtn_HRcOM",
        PostCtn: "managerss_PostCtn_3MI2h",
        PostTitle: "managerss_PostTitle_1Zsns",
        ActivePost: "managerss_ActivePost_h-qBF",
        PostDate: "managerss_PostDate_2vXmu",
        PostDraft: "managerss_PostDraft_10_gL",
        PostStaged: "managerss_PostStaged_nNzd6",
        PreviewListBtn: "managerss_PreviewListBtn_3NT8s",
        PreviewButtons: "managerss_PreviewButtons_3lbyc",
        UrlSettingCtn: "managerss_UrlSettingCtn_iN4At",
        Error: "managerss_Error_1ZZ51",
        DialogPostTitle: "managerss_DialogPostTitle_1XamD",
        DashboardBtn: "managerss_DashboardBtn_2Hlrm",
        RawRSS: "managerss_RawRSS_2mOAh",
        ButtonCtn: "managerss_ButtonCtn_13jSB",
        PreviewBtn: "managerss_PreviewBtn_3HssD",
        ViewRaw: "managerss_ViewRaw_2jvHr"
      };
    }
  }
]);
