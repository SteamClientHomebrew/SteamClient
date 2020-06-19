/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "+ZmX": function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "Init", function() {
          return r;
        });
      var n = a("5y3B"),
        A = a.n(n);
      function r() {
        var r, o, i, s, e, l, c, d;
        (window.ZdogSpookyHouse = {
          wobbling: !0,
          sceneY: 12,
          hillScale: 0.75,
          color: {
            deep: "hsl(230, 60%, 40%)",
            dark: "hsl(230, 60%, 50%)",
            darker: "#2a3a81",
            medium: "hsl(230, 60%, 60%)",
            light: "hsl(230, 60%, 70%)",
            pale: "#6D77AD",
            highlight: "#FFB",
            fog: "hsla(230, 60%, 80%, 0.4)",
            paintjob: "#d59c55"
          }
        }),
          (ZdogSpookyHouse.addBones = function(e) {
            var t = A.a.TAU,
              a = ZdogSpookyHouse.color.light,
              n = new A.a.Shape({
                addTo: e.addTo,
                path: [{ x: -2 }, { x: 2 }],
                closed: !1,
                stroke: 1.3,
                color: a,
                translate: { y: 12, z: -30 },
                rotate: { y: t / 16, z: t / 16 }
              }),
              r = n.copy({
                translate: { x: -6, y: 15, z: -28 },
                rotate: { y: -t / 8, z: t / 8 }
              }),
              o = n.copy({
                addTo: r,
                path: [{ x: 1, y: -1 }, { x: 0, y: 0 }, { x: 1, y: 1 }],
                closed: !1,
                rotate: null,
                translate: { x: 2 }
              });
            r.copyGraph({
              translate: { x: 1, y: 6, z: -31 },
              rotate: { z: -t / 8, x: t / 8 },
              scale: 0.75
            }),
              n.copy({
                scale: 0.25,
                translate: { y: 18, z: -26 },
                rotate: { z: t / 8 }
              });
            var i = r.copyGraph({
              translate: { x: -9, y: 10, z: -30 },
              rotate: { z: -t / 16 }
            });
            o.copy({ addTo: i, scale: { x: -1 }, translate: { x: -2 } }),
              n.copy({
                scale: 0.4,
                translate: { x: -12, y: 14, z: -28 },
                rotate: { z: -t / 16 }
              });
          }),
          (ZdogSpookyHouse.addCarRoad = function(e) {
            for (
              var t = ZdogSpookyHouse.color,
                a = A.a.TAU,
                n = 120,
                r = (125 * a) / 40 / 2,
                o = [
                  { x: 1 - r, z: 5 },
                  { x: r - 1, z: 5 },
                  { x: r, z: -5 },
                  { x: -r, z: -5 }
                ],
                i = 0;
              i < 40;
              i++
            ) {
              var s = (i / 40) * a;
              new A.a.Shape({
                addTo: e.addTo,
                path: o,
                translate: { x: Math.cos(s) * n, z: Math.sin(s) * n },
                rotate: { y: s + a / 4 },
                fill: !0,
                stroke: 2,
                color: t.deep
              });
            }
            var l = -2.5,
              c = 2.5,
              d = {
                grill: new A.a.Vector({ x: -5, y: -1, z: c }),
                hood: new A.a.Vector({ x: -4, y: l, z: c }),
                wipers: new A.a.Vector({ x: -2, y: l, z: c }),
                windshield: new A.a.Vector({ x: -1, y: -4.5, z: 1.5 }),
                roof: new A.a.Vector({ x: 2, y: -4.5, z: 1.5 }),
                trunk: new A.a.Vector({ x: 4, y: l, z: c }),
                bumper: new A.a.Vector({ x: 5, y: -1, z: c })
              },
              p = {};
            for (var u in d) {
              var m = d[u];
              p[u] = m.copy().multiply({ z: -1 });
            }
            var h = new A.a.Anchor({ addTo: e.addTo }),
              v = new A.a.Group({
                addTo: h,
                translate: { z: n, y: -6 },
                scale: 1.2,
                updateSort: !0
              }),
              _ = new A.a.Shape({
                addTo: v,
                path: [
                  d.grill,
                  d.hood,
                  d.wipers,
                  d.windshield,
                  d.roof,
                  d.trunk,
                  d.bumper
                ],
                stroke: 2,
                fill: !0,
                color: t.paintjob
              });
            function b(e, t, a) {
              return _.copy({
                path: [d[e], d[t], p[t], p[e]],
                color: a || _.color
              });
            }
            _.copy({ scale: { z: -1 } }),
              b("grill", "hood"),
              b("hood", "wipers"),
              b("wipers", "windshield", t.medium),
              b("windshield", "roof"),
              b("roof", "trunk", t.medium),
              b("trunk", "bumper");
            var g = new A.a.Vector({ x: -3.5, z: c, y: -1 }),
              y = new A.a.Ellipse({
                addTo: v,
                diameter: 1.8,
                translate: g,
                stroke: 2,
                fill: !0,
                color: t.paintjob
              });
            return (
              y.copy({ translate: g.copy().multiply({ x: -1 }) }),
              y.copy({ translate: g.copy().multiply({ z: -1 }) }),
              y.copy({ translate: g.copy().multiply({ x: -1, z: -1 }) }),
              {
                animate: function(e) {
                  (h.rotate.y = A.a.easeInOut((e / 4) % 1) * a + (3 * a) / 8),
                    (v.rotate.x = 0.1 * Math.sin(e * a * 2)),
                    (v.translate.y = 2 * Math.sin(e * a * 1.5) - 6);
                }
              }
            );
          }),
          (ZdogSpookyHouse.addCats = function(e) {
            var t = A.a.TAU,
              a = ZdogSpookyHouse.color,
              n = 1.1,
              r = new A.a.Anchor({
                addTo: e.addTo,
                translate: { z: -22, x: -28, y: -2 },
                scale: n,
                rotate: { y: t / 8 }
              });
            new A.a.Cone({
              addTo: r,
              diameter: 1,
              length: 3,
              rotate: { x: t / 4 },
              stroke: 4.4,
              color: a.deep
            });
            var o = new A.a.Shape({
              addTo: r,
              translate: { y: -4 },
              stroke: 5.5,
              color: a.deep
            });
            new A.a.Shape({
              addTo: o,
              translate: { x: -1, z: 1 },
              stroke: 0.9 * n,
              color: a.highlight
            }).copy({ translate: { x: 1, z: 1 } });
            var i = { x: -1, y: -1 },
              s = { x: 1, y: 1, z: -1 },
              l = new A.a.Anchor({
                addTo: o,
                scale: new A.a.Vector({ x: 1, y: 1, z: 1.25 })
              });
            new A.a.Shape({
              addTo: l,
              path: [{ x: -1, y: 1 }, i, s],
              translate: { x: -0.96, y: -1.5, z: 0 },
              stroke: 0.66,
              fill: !0,
              color: a.deep
            }).copy({ path: [i, { x: 1, y: 1 }, s] }),
              l.copyGraph({ scale: l.scale.copy().multiply({ x: -1 }) }),
              new A.a.Shape({
                addTo: r,
                path: [
                  {},
                  {
                    bezier: [
                      { x: 4, y: 0, z: -4 },
                      { x: 0, y: -3, z: 0 },
                      { x: 3, y: -5, z: -1 }
                    ]
                  }
                ],
                closed: !1,
                translate: { z: -1 },
                stroke: 0,
                color: a.deep
              }),
              r.copyGraph({
                translate: { z: -6, x: -42, y: -15 },
                scale: n,
                rotate: { y: t / 4 }
              }),
              r.copyGraph({
                translate: { z: -30, x: -30, y: -2 },
                scale: n,
                rotate: { y: t / 4 }
              });
          }),
          (ZdogSpookyHouse.addFogMonster = function(e) {
            for (
              var t = A.a.TAU,
                a = ZdogSpookyHouse.color,
                r = new A.a.Anchor(e),
                o = (4 * t) / 8,
                i = [],
                n = 0;
              n < 74;
              n++
            ) {
              var s = n / 74,
                l = s * o,
                c = new A.a.Shape({
                  addTo: r,
                  path: [{}, { x: ((54 * t) / 74) * 0.8 }],
                  stroke: 22 + 8 * -Math.cos((t / 8) * (3 + 5 * s)),
                  translate: {
                    x: 54 * Math.sin(l),
                    z: 54 * Math.cos(l),
                    y: 6 * Math.sin(4 * l)
                  },
                  rotate: { y: s * -o },
                  color: a.fog
                });
              i.push(c);
            }
            return (
              new A.a.Shape({
                addTo: i[0],
                translate: { x: -10, z: 8 },
                color: a.deep,
                stroke: 3.5
              }).copy({ translate: { x: -10, z: -8 } }),
              new A.a.Ellipse({
                addTo: i[0],
                translate: { x: -10, y: 4 },
                quarters: 2,
                rotate: { z: t / 4, y: t / 4 },
                closed: !0,
                diameter: 8,
                stroke: !1,
                fill: !0,
                color: a.deep
              }),
              {
                animate: function(e) {
                  var n = (r.rotate.y = (e * t) / 6);
                  i.forEach(function(e, t) {
                    var a = (t / 74) * o;
                    e.translate.y = 6 * Math.sin(4 * (a - n));
                  });
                }
              }
            );
          }),
          (ZdogSpookyHouse.addHouse = function(e) {
            var i = A.a.TAU,
              s = ZdogSpookyHouse.color,
              l = [],
              c = [];
            function t(e) {
              l.push(e);
            }
            function a(e) {
              c.push(e);
            }
            var n = new A.a.Anchor({
                addTo: e.addTo,
                translate: { x: 0, y: -8, z: -6 }
              }),
              r = {
                addTo: n,
                width: 12,
                height: 12,
                stroke: e.stroke,
                fill: !0,
                backface: s.deep
              },
              o = Object.assign({ color: s.light }, r),
              d = new A.a.Group({ addTo: n, translate: { z: 24 } });
            a(new A.a.Rect(Object.assign({}, o, { addTo: d }))),
              new A.a.Rect({
                addTo: d,
                width: 6,
                height: 8,
                translate: { y: 2 },
                color: s.dark,
                fill: !0,
                stroke: !1
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({ translate: { y: -12, z: 24 } }, o),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({ translate: { y: -24, z: 24 } }, o),
                pane: s.highlight,
                wallRectCallback: a
              });
            var p = Object.assign(
                { color: s.medium, rotate: { y: -i / 4 } },
                r
              ),
              u = Object.assign({ color: s.medium, rotate: { y: i / 4 } }, r),
              m = new A.a.Rect(
                Object.assign({}, p, { translate: { x: 6, z: 18 } })
              );
            t(m),
              t(m.copy({ translate: { x: 6, y: -12, z: 18 } })),
              t(m.copy({ translate: { x: 6, y: -24, z: 18 } }));
            var h = m.copy({
              translate: { x: -6, z: 18 },
              rotate: { y: i / 4 }
            });
            t(h),
              t(h.copy({ translate: { x: -6, y: -12, z: 18 } })),
              t(h.copy({ translate: { x: -6, y: -24, z: 18 } }));
            var v = new A.a.Anchor({ addTo: n, translate: { y: -36, z: 18 } }),
              _ = new A.a.Shape({
                addTo: v,
                path: [
                  { x: -8, y: 6 },
                  { x: 8, y: 6 },
                  { x: 4, y: -6, z: -4 },
                  { x: -4, y: -6, z: -4 }
                ],
                translate: { z: 8 },
                stroke: e.stroke,
                fill: !0,
                color: s.dark
              });
            _.copy({ rotate: { y: i / 4 }, translate: { x: -8 } }),
              _.copy({
                rotate: { y: i / 2 },
                translate: { z: -8 },
                color: s.deep
              }),
              _.copy({
                rotate: { y: (3 * i) / 4 },
                translate: { x: 8 },
                color: s.deep
              }),
              new A.a.Rect({
                addTo: v,
                width: 8,
                height: 8,
                rotate: { x: -i / 4 },
                translate: { y: -6 },
                stroke: e.stroke,
                fill: !0,
                color: s.dark
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, { translate: { x: 12, z: 12 } }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, {
                  translate: { x: 12, y: -12, z: 12 }
                }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, { translate: { x: -12, z: 12 } }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, {
                  translate: { x: -12, y: -12, z: 12 }
                }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, { translate: { x: 18, z: 6 } }),
                pane: s.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, {
                  translate: { x: 18, y: -12, z: 6 }
                }),
                pane: s.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, { translate: { x: 18, z: -6 } }),
                pane: s.dark,
                wallRectCallback: t
              }),
              t(m.copy({ width: 6, translate: { x: 18, y: -12, z: -3 } }));
            var b = m.copy({
                width: 6,
                translate: { x: 15, z: -12 },
                rotate: { y: i / 2 },
                color: s.dark
              }),
              g = new A.a.Shape({
                addTo: n,
                path: [
                  { x: -4, y: 12 },
                  { x: -4, y: -6 },
                  { arc: [{ x: -4, y: -10 }, { x: 0, y: -10 }] },
                  { arc: [{ x: 4, y: -10 }, { x: 4, y: -6 }] },
                  { x: 4, y: 12 },
                  { x: 5, y: 12 },
                  { x: 5, y: -12 },
                  { x: -5, y: -12 },
                  { x: -5, y: 12 }
                ],
                translate: { x: 7, y: -6, z: -12 },
                stroke: e.stroke,
                color: s.dark,
                fill: !0
              });
            new A.a.Shape({
              addTo: g,
              path: [
                { move: { x: -4, y: -6 } },
                { line: { x: 4, y: -6 } },
                { move: { x: -4, y: 0 } },
                { line: { x: 4, y: 0 } },
                { move: { x: -4, y: 6 } },
                { line: { x: 4, y: 6 } },
                { move: { x: 0, y: -11 } },
                { line: { x: 0, y: 12 } }
              ],
              closed: !1,
              stroke: 0.2,
              color: s.dark
            }),
              g.copyGraph({ translate: { x: -3, y: -6, z: -12 } }),
              g.copyGraph({ translate: { x: -13, y: -6, z: -12 } }),
              b.copy({
                width: 36,
                height: 3,
                translate: { x: 0, y: 4.5, z: -12 },
                color: s.dark
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, { translate: { x: -18, z: -6 } }),
                pane: s.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, {
                  translate: { x: -18, y: -12, z: -6 }
                }),
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, { translate: { x: -18, z: 6 } }),
                pane: s.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, {
                  translate: { x: -24, y: -12, z: 6 }
                }),
                pane: s.highlight,
                wallRectCallback: t
              }),
              new A.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: -21, y: -6, z: 6 },
                stroke: e.stroke,
                fill: !0,
                color: s.deep,
                rotate: { x: i / 4, z: i / 4 }
              });
            var y = b.copy({
              width: 6,
              rotate: null,
              translate: { x: -21, y: -12, z: 12 },
              color: s.light
            });
            a(y),
              b.copy({ width: 6, translate: { x: -21, y: -12 } }),
              b.copy({
                width: 12,
                height: 18,
                translate: { x: -6, y: -27, z: -18 }
              }),
              new A.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: 0, y: -33, z: -12 },
                rotate: { y: i / 4 },
                stroke: e.stroke,
                fill: !0,
                color: s.medium
              }),
              new A.a.Shape({
                addTo: n,
                path: [
                  { z: 2, y: -3 },
                  { z: -6, y: -3 },
                  { z: -6, y: 9 },
                  { z: -2, y: 9 }
                ],
                translate: { y: -27, z: -12 },
                stroke: e.stroke,
                fill: !0,
                color: s.medium
              }),
              h.copy({ height: 18, translate: { x: -12, y: -27, z: -12 } }),
              y.copy({
                height: 6,
                width: 12,
                translate: { x: -6, y: -33, z: -6 }
              }),
              new A.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: -6, y: -18, z: -15 },
                rotate: { x: i / 4 },
                stroke: e.stroke,
                fill: !0,
                color: s.deep
              }),
              v.copyGraph({ translate: { x: -6, y: -42, z: -12 } });
            var E = new A.a.Anchor({
                addTo: n,
                translate: { x: 18, y: -18, z: -12 }
              }),
              S = new A.a.Group({ addTo: E });
            new A.a.Cylinder({
              addTo: S,
              diameter: 12,
              length: 24,
              color: s.medium,
              backface: s.deep,
              rotate: { x: i / 4 },
              stroke: !1
            }),
              new A.a.Cone({
                addTo: E,
                diameter: 16,
                length: 16,
                translate: { y: -12 },
                rotate: { x: i / 4 },
                color: s.deep,
                stroke: !1
              }),
              new A.a.Rect({
                addTo: S,
                width: 2,
                height: 6,
                translate: { x: 5, y: -6 },
                rotate: { y: -i / 4 },
                fill: !0,
                stroke: !1,
                color: s.dark,
                backface: !1
              }).copy({ translate: { y: 6, z: -5 }, rotate: { y: i / 2 } }),
              E.copyGraph({
                translate: { x: -18, y: -30, z: -6 },
                rotate: { y: -i / 4 },
                scale: { x: -1 }
              });
            var f = new A.a.Shape({
              addTo: n,
              path: [
                { x: -6, y: 6 },
                { x: 8, y: 6 },
                { x: 4, y: -6, z: -4 },
                { x: -6, y: -6, z: -4 }
              ],
              translate: { x: 12, y: -24, z: 14 },
              stroke: e.stroke,
              fill: !0,
              color: s.dark
            });
            f.copy({
              scale: { x: -1 },
              translate: { x: 20, y: -24, z: 6 },
              rotate: { y: -i / 4 },
              color: s.deep
            }),
              f.copy({
                scale: { x: -1 },
                translate: { x: -18, y: -24, z: 14 }
              }),
              f.copy({
                translate: { x: -26, y: -24, z: 6 },
                rotate: { y: i / 4 }
              });
            var O = new A.a.Shape({
              addTo: n,
              path: [
                { x: -3, y: 6 },
                { x: 3, y: 6 },
                { x: 3, y: -6, z: -4 },
                { x: -3, y: -6, z: -4 }
              ],
              translate: { x: -9, y: -24, z: 14 },
              stroke: e.stroke,
              fill: !0,
              color: s.dark
            });
            O.copy({
              rotate: { y: -i / 4 },
              translate: { x: 20, y: -24, z: -3 },
              color: s.deep
            }),
              O.copy({
                rotate: { y: -i / 2 },
                translate: { x: 9, y: -24, z: -14 },
                color: s.deep
              }),
              O.copy({
                rotate: { y: -i / 2 },
                translate: { x: 3, y: -24, z: -14 },
                color: s.deep
              });
            var C = new A.a.Anchor({ addTo: n, translate: { y: -30 } }),
              w = new A.a.Rect({
                addTo: C,
                width: 12,
                height: 10,
                rotate: { x: -i / 4 },
                translate: { z: 5 },
                stroke: e.stroke,
                fill: !0,
                color: s.dark
              });
            w.copy({ width: 10, translate: { x: 11, z: 5 } }),
              w.copy({ width: 10, translate: { x: 11, z: -5 } }),
              w.copy({ translate: { x: -12, z: 5 } }),
              w.copy({ width: 4, translate: { x: -20, z: 5 } }),
              w.copy({ width: 6, translate: { x: 3, z: -5 } }),
              w.copy({ height: 6, translate: { x: -6, z: -3 } });
            var T = new A.a.Anchor({ addTo: n, translate: { y: 2 } }),
              I = new A.a.Anchor({ addTo: T, translate: { x: 9, z: 30 } });
            new A.a.Shape({
              addTo: I,
              path: [
                { x: -3, y: 0 },
                { arc: [{ x: -3, y: -3 }, { x: 0, y: -3 }] },
                { arc: [{ x: 3, y: -3 }, { x: 3, y: 0 }] },
                { x: 3, y: -3 },
                { x: -3, y: -3 }
              ],
              translate: { y: -3 },
              fill: !0,
              stroke: 1,
              color: s.deep
            });
            var k = new A.a.Rect({
              addTo: I,
              width: 6,
              height: 10,
              translate: { y: -1 },
              stroke: 1,
              color: s.deep
            });
            k.copy({ height: 4, translate: { y: 2 } }),
              k.copy({ width: 2, height: 4, translate: { y: 2 } }),
              I.copyGraph({ translate: { x: 15, z: 30 } }),
              I.copyGraph({ translate: { x: 21, z: 30 } }),
              I.copyGraph({ translate: { x: -9, z: 30 } });
            var D = I.copyGraph({
              translate: { x: 24, z: 27 },
              rotate: { y: -i / 4 }
            });
            D.copyGraph({ translate: { x: 24, z: 21 } }),
              D.copyGraph({ translate: { x: 24, z: 15 } }),
              D.copyGraph({ translate: { x: 24, z: 9 } }),
              D.copyGraph({ translate: { x: 24, z: 3 } }),
              I.copyGraph({
                translate: { x: -12, z: 27 },
                rotate: { y: i / 4 }
              }).copyGraph({ translate: { x: -12, z: 21 } });
            var j = new A.a.Shape({
              addTo: n,
              path: [
                { x: -12, y: 2 },
                { x: 6, y: 2 },
                { x: 6, y: 0, z: -6 },
                { x: -6, y: 0, z: -6 }
              ],
              translate: { y: -6, z: 30 },
              fill: !0,
              stroke: e.stroke,
              color: s.dark
            });
            return (
              j.copy({
                path: [
                  { x: 24, y: 2 },
                  { x: 6, y: 2 },
                  { x: 6, y: 0, z: -6 },
                  { x: 18, y: 0, z: -6 }
                ]
              }),
              j.copy({
                path: [
                  { x: 18, y: 0, z: -6 },
                  { x: 24, y: 2 },
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 }
                ],
                color: s.deep
              }),
              j.copy({
                path: [
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 },
                  { x: 18, y: 0, z: -30 },
                  { x: 24, y: 2, z: -30 }
                ],
                color: s.deep
              }),
              j.copy({
                path: [
                  { x: -6, y: 0, z: -6 },
                  { x: -12, y: 2 },
                  { x: -12, y: 2, z: -12 },
                  { x: -6, y: 0, z: -12 }
                ]
              }),
              new A.a.Rect({
                addTo: n,
                width: 12,
                height: 12,
                translate: { x: 12, y: -6, z: 18 },
                rotate: { x: -i / 4 },
                fill: !0,
                stroke: e.stroke,
                color: s.dark
              }),
              {
                shape: n,
                animate: function(e, t) {
                  var a = Math.abs(Math.round((t.y / i) * 360) - 180),
                    n = a <= 50 || (60 <= a && a <= 65),
                    r = n ? s.highlight : s.deep,
                    o = n || s.deep;
                  l.forEach(function(e) {
                    e.backface = r;
                  }),
                    c.forEach(function(e) {
                      e.backface = o;
                    });
                }
              }
            );
          }),
          (ZdogSpookyHouse.addInteriorScene = function(e) {
            var t = ZdogSpookyHouse.color,
              a = A.a.TAU,
              n = [{ y: 0 }, { y: 1 }],
              r = new A.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                rotate: e.rotate
              }),
              o = t.medium,
              i = new A.a.Anchor({ addTo: r, rotate: { z: 0.1 } });
            new A.a.Rect({
              addTo: i,
              width: 9,
              height: 4,
              rotate: { x: a / 4 },
              fill: !0,
              color: o,
              stroke: 1.5
            });
            var s = new A.a.Shape({
              addTo: i,
              path: n,
              scale: 3,
              translate: { x: -4.5, z: -2 },
              color: o,
              stroke: 1.5
            });
            s.copy({ translate: { x: 4.5, z: -2 } }),
              s.copy({ translate: { x: 4.5, z: 2 } }),
              s.copy({ translate: { x: -4.5, z: 2 } });
            var l = new A.a.Anchor({ addTo: i, translate: { y: -8 } }),
              c = new A.a.Group({ addTo: l, rotate: { y: a / 2 } }),
              d = new A.a.Rect({
                addTo: c,
                width: 10,
                height: 5,
                color: t.deep,
                fill: !0,
                stroke: 1.5
              });
            new A.a.Rect({
              addTo: c,
              width: 9.5,
              height: 4.5,
              color: t.highlight,
              backface: !1,
              fill: !0,
              stroke: !1
            }),
              d.copy({
                addTo: l,
                width: 5,
                height: 2,
                rotate: { x: a / 4 },
                translate: { y: 5 }
              }),
              new A.a.Shape({
                addTo: l,
                path: n,
                scale: 2,
                translate: { y: 3.1 },
                stroke: 1.5,
                color: t.deep
              });
            var p = new A.a.Anchor({
              addTo: r,
              translate: { z: -15 },
              rotate: { z: -0.1 }
            });
            new A.a.Rect({
              addTo: p,
              width: 3,
              height: 3,
              rotate: { x: a / 4 },
              fill: !0,
              stroke: 1.5,
              color: o
            }),
              new A.a.Shape({
                addTo: p,
                path: n,
                scale: 3,
                stroke: 1.5,
                color: o
              });
            var u = new A.a.Shape({
              addTo: p,
              path: [{}, { z: -2.5, y: 0.5 }],
              translate: { y: 3 },
              stroke: 1,
              color: o
            });
            u.copy({ rotate: { y: (a / 5) * 1 } }),
              u.copy({ rotate: { y: (a / 5) * 2 } }),
              u.copy({ rotate: { y: (a / 5) * 3 } }),
              u.copy({ rotate: { y: (a / 5) * 4 } }),
              new A.a.Rect({
                addTo: p,
                width: 3,
                height: 4,
                translate: { z: -2.5, y: -2 },
                rotate: { x: 0.2 },
                stroke: 1.5,
                color: o,
                fill: !0
              });
            var m = t.deep,
              h = new A.a.Anchor({
                addTo: r,
                translate: { z: -13, y: -6 },
                scale: 0.6
              }),
              v = new A.a.Shape({
                addTo: h,
                path: [
                  { x: -1 },
                  { x: -1.5, y: -3 },
                  { x: 1.5, y: -3 },
                  { x: 1 }
                ],
                rotate: { x: 0.4 },
                stroke: 1.5,
                color: m,
                fill: !0
              });
            new A.a.Shape({
              addTo: v,
              path: n,
              scale: -1,
              translate: { y: -5.5 },
              stroke: 2.5,
              color: m
            });
            var _ = new A.a.Shape({
              addTo: v,
              path: [{}, { y: 3 }, { z: 2, y: 4 }],
              translate: { x: -1.5, y: -3 },
              rotate: { x: 1, z: 0.5 },
              scale: 1.25,
              closed: !1,
              stroke: 1.5,
              color: m
            });
            _.copy({ translate: { x: 1.5, y: -3 }, rotate: { z: -1 } });
            var b = new A.a.Shape({
              addTo: h,
              path: [{ x: -1 }, { x: 1 }],
              translate: { y: 2, z: 0.5 },
              stroke: 2,
              color: m
            });
            return (
              _.copy({
                addTo: b,
                scale: { x: 1.75, y: 1.75, z: -1.75 },
                translate: { x: -1.5 },
                rotate: { x: 1.8, z: 0.1 }
              }).copy({ translate: { x: 1.5 }, rotate: { x: 1, z: -0.2 } }),
              {
                animate: function(e) {
                  (i.translate.y = -1 * Math.sin(6 * e)),
                    (p.translate.y = 2 * Math.sin(7 * e)),
                    (h.translate.y = 2 * Math.sin(8 * e) - 6);
                }
              }
            );
          }),
          (ZdogSpookyHouse.getConeTree = function(e) {
            A.a.extend(e, {
              rotate: { x: A.a.TAU / 4 },
              stroke: !1,
              color: ZdogSpookyHouse.color.deep
            });
            var t = new A.a.Cone(e);
            return (
              t.copy({
                addTo: t,
                rotate: null,
                translate: { z: Math.round(e.length / 2) }
              }),
              t
            );
          }),
          (ZdogSpookyHouse.getGraveIsland = function(e) {
            var t = A.a.TAU,
              a = ZdogSpookyHouse.color,
              n = new A.a.Anchor({ addTo: e.addTo, translate: e.translate });
            ZdogSpookyHouse.getPyramid({
              addTo: n,
              scale: { x: 9, y: -9, z: 9 },
              color: a.deep,
              snub: e.snub
            }),
              new A.a.Rect({
                width: 18,
                height: 18,
                addTo: n,
                rotate: { x: t / 4 },
                color: a.dark,
                stroke: 4,
                fill: !0
              });
            var r = new A.a.Rect({
              addTo: n,
              width: 4,
              height: 4,
              translate: { x: -4, y: -6 },
              rotate: { y: t / 4 },
              stroke: 3,
              color: a.medium
            });
            return (
              new A.a.Ellipse({
                addTo: r,
                diameter: 4,
                translate: { y: -2 },
                stroke: 3,
                color: a.medium
              }),
              n
            );
          }),
          (r = A.a.TAU),
          (o = ZdogSpookyHouse.color),
          (i = [
            { move: { x: 0, y: 14 } },
            { line: { x: -12, y: 2 } },
            { move: { x: -4, y: 10 } },
            { line: { x: -10, y: 10 } },
            { move: { x: -8, y: 6 } },
            { line: { x: -8, y: 0 } },
            { line: { x: -12, y: -4 } },
            { move: { x: 0, y: 8 } },
            { line: { x: -4, y: 4 } },
            { move: { x: 0, y: 2 } },
            { line: { x: -10, y: -8 } },
            { move: { x: 0, y: -4 } },
            { line: { x: -4, y: -8 } },
            { line: { x: -4, y: -10 } },
            { move: { x: 0, y: 12 } },
            { line: { x: 6, y: 6 } },
            { line: { x: 10, y: 6 } },
            { move: { x: 2, y: 10 } },
            { line: { x: 8, y: 10 } },
            { move: { x: 0, y: 6 } },
            { line: { x: 12, y: -6 } },
            { move: { x: 8, y: -2 } },
            { line: { x: 8, y: -8 } },
            { move: { x: 4, y: 2 } },
            { line: { x: 12, y: 2 } },
            { move: { x: 0, y: 0 } },
            { line: { x: 4, y: -4 } },
            { move: { x: 0, y: -6 } },
            { line: { x: 4, y: -10 } }
          ]),
          (ZdogSpookyHouse.getLeafTree = function(e) {
            var t = -e.height;
            A.a.extend(e, {
              path: [{ y: 0 }, { y: t - 26 }],
              stroke: 0.5,
              color: o.deep
            });
            var a = new A.a.Shape(e),
              n = new A.a.Anchor({
                addTo: a,
                translate: { y: t - 14 },
                rotate: { y: -r / 8 }
              });
            return (
              new A.a.Shape({
                addTo: n,
                path: i,
                closed: !1,
                stroke: 0.6,
                color: o.deep
              }).copyGraph({ rotate: { y: r / 4 } }),
              a
            );
          }),
          (s = A.a.TAU),
          (e = Math.sqrt(2)),
          (l = [{ x: -1 }, { x: 1 }, { y: -e }]),
          (c = [
            { x: -1 },
            { x: 1 },
            { x: 0.5, y: -0.5 * e },
            { x: -0.5, y: -0.5 * e }
          ]),
          (ZdogSpookyHouse.getPyramid = function(e) {
            var t = new A.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                scale: e.scale,
                rotate: e.rotate
              }),
              a = e.stroke || 4,
              n = new A.a.Anchor({ addTo: t });
            return (
              new A.a.Shape({
                addTo: n,
                path: e.snub ? c : l,
                translate: { z: 1 },
                rotate: { x: s / 8 },
                stroke: a,
                fill: !0,
                color: e.color,
                backface: void 0 === e.backface || e.backface
              }),
              n.copyGraph({ rotate: { y: s / 4 } }),
              n.copyGraph({ rotate: { y: s / 2 } }),
              n.copyGraph({ rotate: { y: (3 * s) / 4 } }),
              e.snub &&
                new A.a.Rect({
                  addTo: t,
                  translate: { y: -0.5 },
                  rotate: { x: -s / 4 },
                  color: e.color,
                  stroke: 4,
                  fill: !0
                }),
              t
            );
          }),
          (d = ["color", "stroke", "fill", "width", "height", "backface"]),
          (ZdogSpookyHouse.getWallPanel = function(e) {
            var t;
            return (
              e.pane
                ? (t = (function(a) {
                    var e = new A.a.Group(a.wall),
                      t = d.reduce(function(e, t) {
                        return (e[t] = a.wall[t]), e;
                      }, {});
                    t.addTo = e;
                    var n = new A.a.Rect(t);
                    a.wallRectCallback && a.wallRectCallback(n);
                    return (
                      new A.a.Rect({
                        addTo: e,
                        width: 8,
                        height: 6,
                        translate: { y: -1 },
                        color: ZdogSpookyHouse.color.dark,
                        fill: !0,
                        stroke: !1,
                        backface: !1
                      }),
                      new A.a.Rect({
                        addTo: e,
                        width: 4,
                        height: 6,
                        translate: { y: -1 },
                        color: a.pane,
                        fill: !0,
                        stroke: !1
                      }),
                      e
                    );
                  })(e))
                : ((t = new A.a.Rect(e.wall)),
                  e.wallRectCallback && e.wallRectCallback(t)),
              t
            );
          }),
          (ZdogSpookyHouse.init = function(e) {
            var r = A.a.TAU,
              t = ZdogSpookyHouse.color,
              a = Math.floor(e.width / 135) / 2,
              o = new A.a.Illustration({
                element: e,
                zoom: a,
                rotate: { y: r / 8 },
                dragRotate: !0,
                onDragStart: function() {
                  ZdogSpookyHouse.wobbling = !1;
                }
              }),
              n = new A.a.Anchor({
                addTo: o,
                translate: { y: ZdogSpookyHouse.sceneY }
              }),
              i = new A.a.Anchor({ addTo: n });
            new A.a.Rect({
              addTo: i,
              width: 72,
              height: 72,
              rotate: { x: r / 4 },
              color: t.dark,
              stroke: 4,
              fill: !0,
              backface: !1
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: i,
                scale: { x: 36, y: -52, z: 36 },
                translate: { y: 2 },
                color: t.darker
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: i,
                scale: { x: 12, y: -28, z: 12 },
                translate: { x: -12, y: 18, z: 8 },
                color: t.darker,
                backface: !1
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: i,
                scale: { x: 8, y: -28, z: 8 },
                translate: { x: 8, y: 8, z: -22 },
                color: t.darker,
                backface: !1
              }),
              ZdogSpookyHouse.getLeafTree({
                addTo: i,
                height: 3,
                translate: { x: -35, z: 3 }
              });
            var s = new A.a.Anchor({
              addTo: i,
              translate: { x: 20, y: 54, z: -16 },
              scale: { x: 4, y: -8, z: 4 }
            });
            ZdogSpookyHouse.getPyramid({
              addTo: s,
              scale: { y: -1 },
              color: t.deep
            }),
              ZdogSpookyHouse.getPyramid({ addTo: s, color: t.deep });
            var l = new A.a.Group({
                addTo: n,
                translate: { x: 18, z: 80 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              }),
              c = new A.a.Anchor({ addTo: l, scale: { x: 24, y: 32, z: 24 } });
            ZdogSpookyHouse.getPyramid({ addTo: c, color: t.dark }),
              ZdogSpookyHouse.getPyramid({
                addTo: c,
                scale: { y: -1 },
                snub: !0,
                color: t.deep
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: l,
                scale: { x: 6, y: -14, z: 6 },
                translate: { x: -8, y: 12, z: 8 },
                color: t.deep
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: l,
                scale: { x: 12, y: 46, z: 12 },
                translate: { x: -12, z: -4 },
                color: t.dark
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: l,
                diameter: 8,
                length: 10,
                translate: { x: 2, y: -15, z: 18 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: l,
                diameter: 8,
                length: 10,
                translate: { x: 15, y: -8, z: 16 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: l,
                diameter: 8,
                length: 10,
                translate: { x: 22, y: -3, z: 5 }
              });
            var d = t.dark,
              p = t.deep,
              u = new A.a.Group({
                addTo: n,
                translate: { x: -52, z: -64 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              });
            ZdogSpookyHouse.getPyramid({
              addTo: u,
              scale: { x: 26, y: 60, z: 26 },
              color: d
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: u,
                scale: { x: 14, y: 52, z: 14 },
                translate: { x: 12, y: -2, z: -12 },
                color: d
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: u,
                scale: { x: 26, y: -26, z: 26 },
                color: p
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: u,
                scale: { x: 10, y: -20, z: 10 },
                translate: { x: 12, y: 2, z: -12 },
                color: p
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: u,
                diameter: 8,
                length: 10,
                translate: { x: 18, y: -26, z: 0 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: u,
                diameter: 8,
                length: 10,
                translate: { x: 32, y: -8, z: -4 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: u,
                diameter: 8,
                length: 10,
                translate: { x: 10, y: -16, z: 24 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: u,
                diameter: 8,
                length: 10,
                translate: { x: 0, y: -28, z: -22 }
              });
            var m = new A.a.Group({
              addTo: n,
              translate: { x: 76, z: 36 },
              scale: ZdogSpookyHouse.hillScale,
              updateSort: !0
            });
            ZdogSpookyHouse.getPyramid({
              addTo: m,
              scale: { x: 20, y: 36, z: 20 },
              color: t.dark
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: m,
                scale: { x: 20, y: -24, z: 20 },
                color: t.deep,
                snub: !0
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: m,
                diameter: 8,
                length: 10,
                translate: { x: 10, y: -10, z: 18 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: m,
                diameter: 8,
                length: 10,
                translate: { x: 16, y: -16 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: m,
                diameter: 8,
                length: 10,
                translate: { x: -14, y: -18, z: -10 }
              }),
              s.copyGraph({
                addTo: m,
                scale: { x: 4, y: -6, z: 4 },
                translate: { x: 0, y: 28, z: 2 }
              });
            var h = new A.a.Group({
                addTo: n,
                translate: { x: -78, z: -36 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              }),
              v = t.dark,
              _ = t.deep;
            ZdogSpookyHouse.getPyramid({
              addTo: h,
              scale: { x: 26, y: 42, z: 26 },
              color: v
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: h,
                scale: { x: 26, y: -40, z: 26 },
                color: _,
                snub: !0
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: h,
                scale: { x: 14, y: 29, z: 14 },
                translate: { x: 12, y: -2, z: -12 },
                color: v
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: h,
                scale: { x: 16, y: 54, z: 16 },
                translate: { x: -4, y: -2, z: -4 },
                color: v
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: h,
                diameter: 8,
                length: 10,
                translate: { x: -16, y: -24, z: 6 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: h,
                diameter: 8,
                length: 10,
                translate: { x: -22, y: -14, z: -16 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: h,
                diameter: 8,
                length: 8,
                translate: { x: -22, y: -10, z: 15 }
              });
            var b = new A.a.Anchor({
              addTo: h,
              scale: { x: 6, y: 9, z: 6 },
              translate: { x: 0, y: 40, z: 0 }
            });
            ZdogSpookyHouse.getPyramid({ addTo: b, color: _ }),
              ZdogSpookyHouse.getPyramid({
                addTo: b,
                scale: { y: -1.2 },
                color: _
              }),
              b.copyGraph({
                scale: { x: 2, y: 4, z: 4 },
                translate: { x: 24, y: 29, z: -8 }
              }),
              ZdogSpookyHouse.getGraveIsland({
                addTo: n,
                translate: { x: 62, z: -32 }
              }),
              ZdogSpookyHouse.getGraveIsland({
                addTo: n,
                translate: { x: 60, z: -60 }
              }),
              ZdogSpookyHouse.getGraveIsland({
                addTo: n,
                translate: { x: 32, z: -64 }
              });
            var g = t.darker,
              y = new A.a.Anchor({ addTo: n, translate: { y: -94 } }),
              E = new A.a.Shape({
                addTo: y,
                translate: { z: -64 },
                stroke: 32,
                scale: 2,
                color: g
              });
            new A.a.Shape({
              addTo: E,
              translate: { x: -9, y: 4, z: 4 },
              stroke: 16,
              color: g
            }).copy({ translate: { x: 9, y: 5, z: 6 }, stroke: 20 });
            var S = new A.a.RoundedRect({
              addTo: E,
              width: 26,
              height: 12,
              cornerRadius: 6,
              translate: { x: -6, y: 7, z: 4 },
              rotate: { x: r / 4 },
              stroke: 6,
              color: g,
              fill: !0
            });
            S.copy({ translate: { x: 6, y: 9, z: 8 } });
            var f = new A.a.Anchor({ addTo: n, translate: { y: -60 } }),
              O = new A.a.Anchor({ addTo: f, translate: { z: 88 } });
            new A.a.Hemisphere({
              addTo: O,
              diameter: 36,
              rotate: { x: r / 4 },
              color: g,
              stroke: 6
            }),
              E.copy({ addTo: O, translate: { x: 16, y: -14, z: -4 } }),
              S.copy({
                addTo: O,
                width: 28,
                height: 16,
                cornerRadius: 8,
                stroke: 10,
                scale: 2,
                translate: { x: 8, y: 2, z: 4 }
              });
            var C = ZdogSpookyHouse.addHouse({ addTo: i, stroke: 1 / o.zoom });
            ZdogSpookyHouse.addCats({ addTo: i }),
              ZdogSpookyHouse.addBones({ addTo: i });
            var w = ZdogSpookyHouse.addInteriorScene({
                addTo: C.shape,
                translate: { z: 6 }
              }),
              T = ZdogSpookyHouse.addFogMonster({
                addTo: n,
                translate: { y: 12 }
              }),
              I = ZdogSpookyHouse.addCarRoad({ addTo: n }),
              k = 0,
              D = 300;
            !(function e() {
              var t,
                a,
                n = k / D;
              ZdogSpookyHouse.wobbling & (n <= 2) &&
                ((t = A.a.easeInOut(n % 1) * r),
                (a = (-3 * r) / 64),
                (o.rotate.y = Math.sin(t) * a + r / 8),
                (o.rotate.x = (-0.5 * Math.cos(t) + 0.5) * a)),
                o.normalizeRotate(),
                T.animate(n),
                I.animate(n),
                C.animate(n, o.rotate),
                w.animate(n),
                (y.rotate.y = (n * r) / 12),
                (f.rotate.y = (n * r) / 16),
                (i.translate.y = 4 * Math.sin((n / 4) * r)),
                (m.translate.y = -4 * Math.sin((n / 1.5) * r)),
                (h.translate.y = -4 * Math.sin((n / 2.5) * r)),
                (u.translate.y = 4 * Math.sin((n / 3) * r)),
                (l.translate.y = 4 * Math.sin((n / 2) * r)),
                k++,
                o.updateRenderGraph(),
                requestAnimationFrame(e);
            })();
          });
        var t = document.querySelector(".zdog-canvas");
        ZdogSpookyHouse.init(t);
      }
    },
    "31dG": function(e, t, a) {
      e.exports = {
        MainBlock: "salesectionsubscription_MainBlock_2tDhP",
        SelectAPlan: "salesectionsubscription_SelectAPlan_3H7r9",
        SubscriptionListBlock:
          "salesectionsubscription_SubscriptionListBlock_1YbMr",
        SubscriptionBlock: "salesectionsubscription_SubscriptionBlock_C-J1C",
        LogoImg: "salesectionsubscription_LogoImg_26_9r",
        PriceBlock: "salesectionsubscription_PriceBlock_8VH3Y",
        PriceDisplay: "salesectionsubscription_PriceDisplay_3wwah",
        SavingsDisplay: "salesectionsubscription_SavingsDisplay_1VC82",
        BodyTextBlock: "salesectionsubscription_BodyTextBlock_2VWP1",
        PurchaseButton: "salesectionsubscription_PurchaseButton_kpf95",
        AlreadyOwnedPackage:
          "salesectionsubscription_AlreadyOwnedPackage_2ymWR",
        AlreadyOwnedApp: "salesectionsubscription_AlreadyOwnedApp_3dYX7",
        UnOwned: "salesectionsubscription_UnOwned_1-zl0"
      };
    },
    E9gz: function(e, t, a) {
      e.exports = {
        AnalysisCtn: "eventmoderation_AnalysisCtn_1YGfW",
        AnalysisMissing: "eventmoderation_AnalysisMissing_rH1Dt",
        ModerationContainer: "eventmoderation_ModerationContainer_4HRKp",
        FilterContainer: "eventmoderation_FilterContainer_qY07T",
        Tile: "eventmoderation_Tile_3oU1y",
        TileEventOtherType: "eventmoderation_TileEventOtherType_3LUrW",
        TileCapsule: "eventmoderation_TileCapsule_36tP8",
        NoCapsule: "eventmoderation_NoCapsule_1onVF",
        TileDetails: "eventmoderation_TileDetails_2mRup",
        DetailsLeft: "eventmoderation_DetailsLeft_1O0y5",
        EventTitle: "eventmoderation_EventTitle_3ahHd",
        DetailsRight: "eventmoderation_DetailsRight_2BaxW",
        ArtHeader: "eventmoderation_ArtHeader_38IkF",
        ArtSpotlight: "eventmoderation_ArtSpotlight_2oUPY",
        DetailsMiddle: "eventmoderation_DetailsMiddle_VcJpZ",
        ModeratedFlagCtn: "eventmoderation_ModeratedFlagCtn_2JGGc",
        TitleLink: "eventmoderation_TitleLink_1OG__",
        TileAppInfo: "eventmoderation_TileAppInfo_2IJ__",
        TileAppInfoTitle: "eventmoderation_TileAppInfoTitle_2X75q",
        TileAppInfoImage: "eventmoderation_TileAppInfoImage_1rVmL",
        TileSplit: "eventmoderation_TileSplit_aaFuC",
        TileTitle: "eventmoderation_TileTitle_yJw1i",
        TimeWidth: "eventmoderation_TimeWidth_xSOgV",
        CategoryChangeDialog: "eventmoderation_CategoryChangeDialog_1VSAj",
        ModeratorAuditActionCtn:
          "eventmoderation_ModeratorAuditActionCtn_lx3MC",
        Button: "eventmoderation_Button_wu9Kr",
        RightSideTitles: "eventmoderation_RightSideTitles_XDAwD",
        DateAndTime: "eventmoderation_DateAndTime_2cW9N"
      };
    },
    Ff1b: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgJJREFUeNrsmz9LxDAYxpNyIhzICeIkiLM46KAf4EY9HBzcnDwXJ0cnFxddHdQP4ScQcXJxUvDP7qAOLg5Ot8TnpDhIkja5mL5t3hcechDS9Pmlb3mba6VSSqQcmUg8GAADYAAMgAHoQkr5K8QppGouvU9THZAbF+hvo3mDOjVfbOmbApsNMD/SPaDf5HuANQXQN4+fT4ax79CAqK9ZzSWvTYFWwYF2LH2rgHRP0T0W7rNs2maWg4yj2Uq5DtiAplIG0BcJhA1Al0thBsAAGEDToxVzMtQWL38LFBRTk6HHkAWQG+lEGMMpwAAYAANgAAyAATAABsAAGAADIPUw1POYs/ef5xkVAB5jb2KMSToFlFITaMaSBADzw32DK6idHIDc/CW0klwKlDB/bhtsUlEsUjEP3VrO8wySJp+1BlDWvG2hawvAxXzjALiatwEYpRBad4BwgYLmS2NkGs2ax9y70LKh7wTaw3yqLE3fK8Al5nTmoYfA8xy5+swquoSHK38NLQQ87DFWfZ98KUzJfHQA1MxHBUDRfEwAJM3/PG5bvhkK+THRKzRTpXnjC6GRAISMA5g/9EhB5x2hJY+Tu/MY8whti3Kv3Q5g/jnoLlXR6/KOlJWH+S7m+ohwEya3HxDNPMUNERLmqwJAxnwVAEiZjw2AnPmiOiCJ4D9HUwfwLcAAxHgyaE4johYAAAAASUVORK5CYII=";
    },
    I2Hi: function(e, t, a) {
      e.exports = {
        SuggestContainer: "storesuggest_SuggestContainer_2gBFq",
        Results: "storesuggest_Results_3eXNg",
        ResultRow: "storesuggest_ResultRow_16oSf",
        AvatarImage: "storesuggest_AvatarImage_3dr2A",
        GameName: "storesuggest_GameName_3CWrp"
      };
    },
    IWyE: function(e, t, a) {
      e.exports = {
        strResponsiveWidth: "910px",
        strMaxMobileWidth: "700px",
        strMinMobileHeight: "360px",
        strDesktopControlBarWidth: "300px",
        strDesktopGlobalHeaderHeight: "104px",
        strMobileGlobalHeaderHeight: "62px",
        strDesktopLabsBannerHeight: "46px",
        strMobileLabsBannerHeight: "42px",
        strDesktopGroupHeaderHeight: "70px",
        strMobileGroupHeaderHeight: "37px",
        strDesktopTopSpacerHeight: "150px",
        strMobileTopSpacerHeight: "104px",
        strEndOfRowsHeight: "60px",
        SteamLabsBanner: "eventcalendar_SteamLabsBanner_8sQfl",
        SteamLabsBannerCtn: "eventcalendar_SteamLabsBannerCtn_3olyO",
        SteamLabsIdentifiers: "eventcalendar_SteamLabsIdentifiers_3SWqw",
        SteamLabsName: "eventcalendar_SteamLabsName_1wILk",
        SteamLabsNumber: "eventcalendar_SteamLabsNumber_2ByeP",
        SteamLabsButton: "eventcalendar_SteamLabsButton_3YoSz",
        SidebarContainer: "eventcalendar_SidebarContainer_15YLD",
        SidebarCollapsed: "eventcalendar_SidebarCollapsed_3x2Ig",
        CollapseButton: "eventcalendar_CollapseButton_1RCio",
        DesktopButton: "eventcalendar_DesktopButton_2vMIl",
        SidebarBackground: "eventcalendar_SidebarBackground_1ZO60",
        Sidebar: "eventcalendar_Sidebar_1nf0v",
        SidebarTitle: "eventcalendar_SidebarTitle_3uZE-",
        SidebarBackLink: "eventcalendar_SidebarBackLink_2NQEg",
        FilterSection: "eventcalendar_FilterSection_34HOA",
        FilterSubSection: "eventcalendar_FilterSubSection_1Ko6o",
        FilterSubSectionTitle: "eventcalendar_FilterSubSectionTitle_MeJhm",
        SidebarManageMutedApps: "eventcalendar_SidebarManageMutedApps_2IWYf",
        SidebarLink: "eventcalendar_SidebarLink_2VFTM",
        ForceDesktopLink: "eventcalendar_ForceDesktopLink_1Kydh",
        MutedSourcesGroup: "eventcalendar_MutedSourcesGroup_2B7QL",
        MutedSourcesCount: "eventcalendar_MutedSourcesCount_3nwCq",
        ForceResponsiveLink: "eventcalendar_ForceResponsiveLink_3dRqL",
        SidebarFooter: "eventcalendar_SidebarFooter_3sXsg",
        MobileButton: "eventcalendar_MobileButton_3cMvc",
        EventCalendarContainer: "eventcalendar_EventCalendarContainer_1e3Wb",
        RowContainer: "eventcalendar_RowContainer_3yqpP",
        WideLeftGutter: "eventcalendar_WideLeftGutter_ws9AN",
        Rows: "eventcalendar_Rows_r3Dia",
        DisappearingHeaderSpacer:
          "eventcalendar_DisappearingHeaderSpacer_1l_KP",
        FutureSection: "eventcalendar_FutureSection_290nk",
        PastSection: "eventcalendar_PastSection_3FpvG",
        DarkerBackground: "eventcalendar_DarkerBackground_1U2BW",
        EmptySectionText: "eventcalendar_EmptySectionText_3TwYr",
        CalendarRow: "eventcalendar_CalendarRow_398u2",
        GroupHeader: "eventcalendar_GroupHeader_3j2de",
        GroupHeaderTitle: "eventcalendar_GroupHeaderTitle_2aVLR",
        SeeAllLink: "eventcalendar_SeeAllLink_28rp7",
        SeeAllCount: "eventcalendar_SeeAllCount_IOckO",
        FutureHint: "eventcalendar_FutureHint_8a9Pv",
        HorizontalTileContainer: "eventcalendar_HorizontalTileContainer_muk0v",
        HorizontalTiles: "eventcalendar_HorizontalTiles_1YVOy",
        HeaderAtTop: "eventcalendar_HeaderAtTop_2VZun",
        EndOfRows: "eventcalendar_EndOfRows_1lK7p",
        ErrorText: "eventcalendar_ErrorText_2dLzG",
        LiveText: "eventcalendar_LiveText_14EbB",
        LoginPrompt: "eventcalendar_LoginPrompt_1EXXC",
        LoginButton: "eventcalendar_LoginButton_1wuxX",
        SpecialEventListGroup: "eventcalendar_SpecialEventListGroup_5UEq9",
        SpecialEventListTitle: "eventcalendar_SpecialEventListTitle_2fFKi",
        SpecialEventList: "eventcalendar_SpecialEventList_3AESv",
        SpecialEvent: "eventcalendar_SpecialEvent_2s-UQ",
        SpecialEventTitle: "eventcalendar_SpecialEventTitle_3xq6F",
        SpecialEventTime: "eventcalendar_SpecialEventTime_3cGYp"
      };
    },
    Lql7: function(e, t, a) {
      e.exports = {
        DevSummaryCtn: "creatorhomeembed_DevSummaryCtn_1k0S-",
        LargeFormat: "creatorhomeembed_LargeFormat_1090T",
        CreatorDescCtn: "creatorhomeembed_CreatorDescCtn_3nKoQ",
        SmallFormat: "creatorhomeembed_SmallFormat_18tLe",
        DevSummaryWidgetCtn: "creatorhomeembed_DevSummaryWidgetCtn_A2B2V",
        DevSummaryBackground: "creatorhomeembed_DevSummaryBackground_1TsqA",
        DevSummaryContent: "creatorhomeembed_DevSummaryContent_23xa4",
        Avatar: "creatorhomeembed_Avatar_3Jepb",
        CreatorTitleCtn: "creatorhomeembed_CreatorTitleCtn_2T8Ub",
        CreatorNameName: "creatorhomeembed_CreatorNameName_8196l",
        CreatorTagline: "creatorhomeembed_CreatorTagline_NX5We",
        Title: "creatorhomeembed_Title_37vyV",
        Followers: "creatorhomeembed_Followers_2ZpFi",
        FollowBtnCtn: "creatorhomeembed_FollowBtnCtn_2artm",
        FollowButton: "creatorhomeembed_FollowButton_1HwWX",
        FollowBtnText: "creatorhomeembed_FollowBtnText_1a5dj",
        SocialContainer: "creatorhomeembed_SocialContainer_1o1Ds",
        SocialImg: "creatorhomeembed_SocialImg_2v_K1",
        SocialLink: "creatorhomeembed_SocialLink_3eCVb"
      };
    },
    SS32: function(e, t, a) {
      e.exports = {
        carouselNavButton: "carousel_carouselNavButton_13rGo",
        left: "carousel_left_S8IHd",
        carouselBtnCtn: "carousel_carouselBtnCtn_3zfZ9",
        right: "carousel_right_Cq59o",
        carouselBody: "carousel_carouselBody_3a31O",
        sliderBody: "carousel_sliderBody_2M3Sn",
        breadcrumbContainer: "carousel_breadcrumbContainer_3HjnE",
        pipList: "carousel_pipList_LY1m2",
        pipScrollerContainer: "carousel_pipScrollerContainer_3SyN-",
        pipScrollButton: "carousel_pipScrollButton_qE43J",
        scrollNavDiv: "carousel_scrollNavDiv_95I5g",
        scrollNavButton: "carousel_scrollNavButton_1cpdo",
        pipScroller: "carousel_pipScroller_EMd4F",
        scrollBackground: "carousel_scrollBackground_WUHeT",
        scrollForeground: "carousel_scrollForeground_PQzkJ",
        pipContainer: "carousel_pipContainer_3TKX3",
        pip: "carousel_pip_3Byg6",
        pipNumber: "carousel_pipNumber_1u4YJ"
      };
    },
    U9Ih: function(e, t, a) {
      e.exports = {
        SaleItemBrowserContainer:
          "saleitembrowser_SaleItemBrowserContainer_18byE",
        SaleItemBrowserHeaderContainer:
          "saleitembrowser_SaleItemBrowserHeaderContainer_1edLK",
        SaleItemBrowserHeader: "saleitembrowser_SaleItemBrowserHeader_Eh-ow",
        FlavorLabel: "saleitembrowser_FlavorLabel_KDLAS",
        SelectedFlavor: "saleitembrowser_SelectedFlavor_qYruX",
        EmptyResults: "saleitembrowser_EmptyResults_3U-cq",
        ShowContentsContainer: "saleitembrowser_ShowContentsContainer_36qA-",
        Loading: "saleitembrowser_Loading_nXk7R",
        ShowContentsButton: "saleitembrowser_ShowContentsButton_2tkiJ"
      };
    },
    Wym2: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "EventModerationLanding", function() {
          return tr;
        }),
        a.d(t, "EventBackfillLanding", function() {
          return ar;
        }),
        a.d(t, "EventSaleDisplay", function() {
          return nr;
        }),
        a.d(t, "EventCalendar", function() {
          return rr;
        }),
        a.d(t, "EventDetailView", function() {
          return or;
        }),
        a.d(t, "Events", function() {
          return ir;
        }),
        a.d(t, "EventSteamGameFestivalDebug", function() {
          return sr;
        });
      var n,
        r,
        N = a("q1tI"),
        c = a.n(N),
        M = a("mrSG"),
        o = a("vDqi"),
        g = a.n(o),
        m = a("2vnA"),
        s = a("TyAF"),
        i = a("Gp1o"),
        l = a("Ty5D"),
        G = a("kLLr"),
        _ = a("ir+G"),
        y = a("TQGK"),
        A = a("WF3T"),
        E = a("KEpR"),
        L = a("5izx"),
        x = a("9w6b"),
        B = a("6oCP"),
        b = a("IjL/"),
        S = a("55Ip"),
        d = a("kyHq"),
        p = a("5bld"),
        f = a("Dhs6"),
        u = a("Mgs7"),
        D = a("6Y59"),
        h = a("5E+2"),
        O = a("+d9t"),
        R = a("exH9"),
        P = a("TLQK"),
        F = a("lkRc"),
        H = a("ee7K"),
        v = a("bxiW"),
        C = a("bS9Q"),
        w = a("I2Hi"),
        T = a.n(w),
        I = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { strSearchString: "", rgSuggestions: null }),
              (e.m_currentRequest = 0),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.UpdateAppSuggestions = function(a) {
              return Object(M.b)(this, void 0, void 0, function() {
                var s,
                  t = this;
                return Object(M.e)(this, function(e) {
                  return (
                    null != (s = a.target.value && a.target.value.trim()) &&
                    s.length
                      ? (window.clearTimeout(this.m_currentRequest),
                        (this.m_currentRequest = window.setTimeout(function() {
                          return Object(M.b)(t, void 0, void 0, function() {
                            var t,
                              a,
                              n,
                              r,
                              o,
                              i = this;
                            return Object(M.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  return (
                                    (t = {
                                      cc: F.c.COUNTRY,
                                      l: F.c.LANGUAGE,
                                      realm: d.d.k_ESteamRealmGlobal,
                                      f: "jsonfull",
                                      term: s.replace(" ", "+"),
                                      require_type: this.props
                                        .filterStoreItemType
                                        ? this.props.filterStoreItemType.join(
                                            ","
                                          )
                                        : void 0,
                                      excluded_tags: H.a.GetExcludedTagsSortedByID(),
                                      excluded_content_descriptors: H.a.GetExcludedContentDescriptor()
                                    }),
                                    (a = F.c.STORE_BASE_URL + "search/suggest"),
                                    [
                                      4,
                                      g.a.get(a, {
                                        params: t,
                                        withCredentials: !0
                                      })
                                    ]
                                  );
                                case 1:
                                  return (
                                    (n = e.sent()),
                                    (r =
                                      null !==
                                        (o = null == n ? void 0 : n.data) &&
                                      void 0 !== o &&
                                      o.length
                                        ? n.data.map(function(e) {
                                            var t = N.createElement(
                                              "div",
                                              {
                                                className: T.a.ResultRow,
                                                key: "suggestion-" + e.id,
                                                onClick: function() {
                                                  return i.props.fnOnSelected(
                                                    e
                                                  );
                                                }
                                              },
                                              N.createElement("img", {
                                                src: e.img,
                                                className: T.a.AvatarImage
                                              }),
                                              N.createElement(
                                                "div",
                                                { className: T.a.GameName },
                                                " ",
                                                Object(C.b)(e.name),
                                                " "
                                              )
                                            );
                                            return i.props.fnDecorateSuggestion
                                              ? i.props.fnDecorateSuggestion(
                                                  e,
                                                  t
                                                )
                                              : t;
                                          })
                                        : [
                                            N.createElement(
                                              "div",
                                              { key: "empty-results" },
                                              Object(P.d)(
                                                "#EventCalendar_GameSearch_NoneFound"
                                              )
                                            )
                                          ]),
                                    this.setState({
                                      strSearchString: s,
                                      rgSuggestions: r
                                    }),
                                    [2]
                                  );
                              }
                            });
                          });
                        }, 300)))
                      : this.setState({
                          strSearchString: "",
                          rgSuggestions: null
                        }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.ResetSuggestions = function() {
              this.setState({ rgSuggestions: null });
            }),
            (e.prototype.render = function() {
              var e = 0 < this.state.strSearchString.length;
              return N.createElement(
                "div",
                { className: T.a.SuggestContainer },
                N.createElement(u.j, {
                  type: "text",
                  label: this.props.strLabel,
                  onChange: this.UpdateAppSuggestions,
                  bAlwaysShowClearAction: e
                }),
                e &&
                  N.createElement(
                    "div",
                    {
                      className: Object(R.a)(
                        T.a.Results,
                        this.props.strResultsClass
                      )
                    },
                    this.state.rgSuggestions
                  )
              );
            }),
            Object(M.c)([v.a], e.prototype, "UpdateAppSuggestions", null),
            e
          );
        })(N.Component),
        k = a("IWyE"),
        z = a.n(k),
        j = a("wd/R"),
        U = a.n(j),
        W = (function() {
          function e() {
            this.m_dateLoadTime = L.a.GetTimeNowWithOverrideAsDate();
          }
          return (
            (e.prototype.IsCurrentlyVisible = function(e) {
              return (
                (!e.startVisible || e.startVisible <= this.m_dateLoadTime) &&
                (!e.endVisible || e.endVisible >= this.m_dateLoadTime)
              );
            }),
            (e.IsCurrentlyActive = function(e) {
              var t = L.a.GetTimeNowWithOverrideAsDate();
              return (
                (!e.startEvent || e.startEvent <= t) &&
                (!e.endEvent || e.endEvent >= t)
              );
            }),
            (e.LocalizeDateString = function(e) {
              if (!e.startEvent) return null;
              var t = e.startEvent.toLocaleDateString(
                P.c.GetPreferredLocales(),
                { month: "long", day: "numeric" }
              );
              if (!e.endEvent) return t;
              var a = {
                month:
                  e.startEvent.getMonth() != e.endEvent.getMonth()
                    ? "long"
                    : void 0,
                day: "numeric"
              };
              return (
                t +
                " - " +
                e.endEvent.toLocaleDateString(P.c.GetPreferredLocales(), a)
              );
            }),
            (e.prototype.GetVisibleSpecialEvents = function() {
              var t = this;
              return L.a.bEnableNewsHubMayUpdate
                ? [
                    {
                      sLocToken: "#NewsHubSpecialEvent_GameFestival",
                      endVisible: new Date(
                        1e3 * U()("2020-06-16T14:00:00-07:00").unix()
                      ),
                      startEvent: new Date(
                        1e3 * U()("2020-06-16T10:00:00-07:00").unix()
                      ),
                      endEvent: new Date(
                        1e3 * U()("2020-06-22T10:00:00-07:00").unix()
                      ),
                      newshubUrl:
                        "newshub/collection/GameFestival2020?upcoming=1"
                    },
                    {
                      sLocToken: "#NewsHubSpecialEvent_GameFestival",
                      startVisible: new Date(
                        1e3 * U()("2020-06-16T14:00:00-07:00").unix()
                      ),
                      endVisible: new Date(
                        1e3 * U()("2020-06-22T10:00:00-07:00").unix()
                      ),
                      startEvent: new Date(
                        1e3 * U()("2020-06-16T10:00:00-07:00").unix()
                      ),
                      endEvent: new Date(
                        1e3 * U()("2020-06-22T10:00:00-07:00").unix()
                      ),
                      newshubUrl: "newshub/collection/GameFestival2020"
                    }
                  ].filter(function(e) {
                    return t.IsCurrentlyVisible(e);
                  })
                : [];
            }),
            e
          );
        })(),
        V = new W(),
        Z = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.specialEvent,
                t = window.location.href === F.c.STORE_BASE_URL + e.newshubUrl,
                a = W.IsCurrentlyActive(e),
                n = W.LocalizeDateString(e);
              return N.createElement(
                S.b,
                { to: "/" + e.newshubUrl },
                N.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      z.a.SpecialEvent,
                      t && z.a.SpecialEventOnPage,
                      a && z.a.SpecialEventActive
                    )
                  },
                  N.createElement(
                    "div",
                    { className: z.a.SpecialEventTitle },
                    Object(P.d)(e.sLocToken)
                  ),
                  n &&
                    N.createElement(
                      "div",
                      { className: z.a.SpecialEventTime },
                      n
                    )
                )
              );
            }),
            t
          );
        })(N.Component),
        Y = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = V.GetVisibleSpecialEvents();
              return 0 === e.length
                ? null
                : N.createElement(
                    "div",
                    { className: z.a.SpecialEventListGroup },
                    N.createElement(
                      "div",
                      { className: z.a.SpecialEventListTitle },
                      Object(P.d)("#Events_SpecialEvents")
                    ),
                    N.createElement(
                      "div",
                      { className: z.a.SpecialEventList },
                      e.map(function(e) {
                        return N.createElement(Z, {
                          key: e.sLocToken,
                          specialEvent: e
                        });
                      })
                    )
                  );
            }),
            t
          );
        })(N.Component),
        q = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.componentDidMount = function() {}),
            (t.prototype.OnEventTypeChange = function(e, t) {
              E.c.SetEventTypeGroupAllowed(e, t), this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderEventTypeCheckbox = function(t) {
              var a = this,
                e = E.c.BIsEventTypeGroupAllowed(t);
              return N.createElement(
                h.a,
                {
                  toolTipContent: Object(P.d)(
                    "#EventCalendar_EventTypeGroup_ttip_" + t
                  ),
                  direction: "top"
                },
                N.createElement(u.d, {
                  key: "group-" + t,
                  label: Object(P.d)("#EventCalendar_EventTypeGroup_" + t),
                  checked: e,
                  onChange: function(e) {
                    return a.OnEventTypeChange(t, e);
                  }
                })
              );
            }),
            (t.prototype.OnGameSourceChange = function(e, t) {
              E.c.SetGameSourceAllowed(e, t), this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderGameSourceCheckbox = function(t, e) {
              var a = this,
                n = E.c.BIsGameSourceAllowed(t);
              return N.createElement(
                h.a,
                {
                  direction: "top",
                  toolTipContent: e
                    ? Object(P.d)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : Object(P.d)("#EventCalendar_GameSource_ttip_" + t)
                },
                N.createElement(u.d, {
                  key: "gs-" + t,
                  label: Object(P.d)("#EventCalendar_GameSource_" + t),
                  checked: n,
                  disabled: e,
                  onChange: function(e) {
                    return a.OnGameSourceChange(t, e);
                  }
                })
              );
            }),
            (t.prototype.GetCalendarTitle = function(e) {
              if (e.BIsSingleSourceCalendar()) {
                var t = e.BIsSingleAppCalendar()
                  ? p.d.GetEntityNameForID(e.GetSingleAppID(), void 0)
                  : p.d.GetEntityNameForID(
                      void 0,
                      Number(e.GetSingleGroupID())
                    );
                return Object(P.k)(
                  "#EventCalendar_SpecificCalendar",
                  t,
                  N.createElement("br", null)
                );
              }
              return Object(P.k)(
                "#EventCalendar_Title",
                N.createElement("br", null)
              );
            }),
            (t.prototype.DecorateSearchSuggestion = function(e, t) {
              return e && e.id && Object(d.a)(e.type)
                ? N.createElement(
                    S.b,
                    {
                      key: "suggestion-" + e.id,
                      to: "/newshub/app/" + e.id + "/"
                    },
                    t
                  )
                : t;
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                a = t.bUserIsLoggedIn,
                n = t.nDisappearingHeaderVisibleHeight,
                r = t.nGlobalHeaderTop,
                o = (t.nVisibleHeight, t.bIsCollapsed),
                i = t.bShouldIncludeLegalFooter,
                s = t.fnToggleCollapsed,
                l = Ye(),
                c = l
                  ? N.createElement(
                      "div",
                      {
                        className: z.a.MobileButton,
                        onClick: s,
                        style: { transform: "translateY(" + r + "px)" }
                      },
                      o
                        ? N.createElement(D.a, null)
                        : N.createElement(D.z, null)
                    )
                  : null,
                d = o ? n : 0,
                p = l
                  ? null
                  : N.createElement(
                      "div",
                      { onClick: s, className: z.a.CollapseButton },
                      N.createElement(
                        "div",
                        {
                          style: { marginTop: d + "px" },
                          className: z.a.DesktopButton
                        },
                        N.createElement(D.h, { angle: o ? 180 : 0 })
                      )
                    ),
                u = o ? null : { top: n + "px" },
                m = Object(A.a)(),
                h = !0;
              !m.BIsSingleGroupCalendar() ||
                ((e = y.a.GetClanInfoByClanAccountID(m.GetSingleGroupID())) &&
                  e.has_rss_feed &&
                  (h = !1));
              var v = f.a.GetMutedSourceCount(),
                _ =
                  "Responsive_RequestDesktopView" in window &&
                  window.Responsive_RequestDesktopView,
                b =
                  "Responsive_RequestMobileView" in window &&
                  window.Responsive_RequestMobileView;
              return N.createElement(
                N.Fragment,
                null,
                c,
                N.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      z.a.SidebarContainer,
                      o && z.a.SidebarCollapsed
                    ),
                    style: u
                  },
                  o
                    ? p
                    : N.createElement(
                        "div",
                        { className: z.a.Sidebar },
                        p,
                        N.createElement(
                          "div",
                          { className: z.a.SidebarBackground },
                          N.createElement(D.A, null)
                        ),
                        Boolean(!m.BIsGlobalCalendar()) &&
                          N.createElement(
                            "span",
                            { className: z.a.SidebarBackLink },
                            N.createElement(
                              S.b,
                              { to: "/newshub" },
                              N.createElement(D.h, {
                                angle: 0,
                                singlearrow: !0
                              }),
                              Object(P.d)(
                                "#EventCalendar_GlobalCalendar_Action"
                              )
                            )
                          ),
                        N.createElement(
                          "div",
                          { className: z.a.SidebarTitle },
                          this.GetCalendarTitle(m)
                        ),
                        N.createElement(
                          "div",
                          { className: z.a.FilterSection },
                          h &&
                            N.createElement(
                              "div",
                              { className: z.a.FilterSubSection },
                              N.createElement(
                                "div",
                                { className: z.a.FilterSubSectionTitle },
                                Object(P.d)(
                                  "#EventCalendar_FilterSubSection_EventTypeGroups"
                                )
                              ),
                              this.RenderEventTypeCheckbox(E.a.k_EEvents),
                              this.RenderEventTypeCheckbox(E.a.k_EStreaming),
                              this.RenderEventTypeCheckbox(E.a.k_EUpdates),
                              this.RenderEventTypeCheckbox(E.a.k_EReleases),
                              this.RenderEventTypeCheckbox(E.a.k_ESales),
                              this.RenderEventTypeCheckbox(E.a.k_ENews)
                            ),
                          Boolean(m.BIsGlobalCalendar()) &&
                            N.createElement(
                              "div",
                              { className: z.a.FilterSubSection },
                              N.createElement(
                                "div",
                                { className: z.a.FilterSubSectionTitle },
                                Object(P.d)(
                                  "#EventCalendar_FilterSubSection_GameSources"
                                )
                              ),
                              this.RenderGameSourceCheckbox(E.b.k_ERecent, !a),
                              this.RenderGameSourceCheckbox(E.b.k_ELibrary, !a),
                              this.RenderGameSourceCheckbox(E.b.k_EWishist, !a),
                              this.RenderGameSourceCheckbox(
                                E.b.k_EFollowing,
                                !a
                              ),
                              this.RenderGameSourceCheckbox(E.b.k_ERecommended),
                              this.RenderGameSourceCheckbox(E.b.k_ESteam),
                              L.a.bIncludeFeaturedAsGameSource &&
                                this.RenderGameSourceCheckbox(E.b.k_EFeatured)
                            ),
                          Boolean(m.BIsSingleSourceMuted()) &&
                            N.createElement(
                              "div",
                              null,
                              Object(P.d)("#EventCalendar_SingleAppIsMuted")
                            )
                        ),
                        N.createElement(I, {
                          strLabel: Object(P.d)("#EventCalendar_GameSearch"),
                          fnOnSelected: function() {},
                          fnDecorateSuggestion: this.DecorateSearchSuggestion,
                          filterStoreItemType: ["game", "software"]
                        }),
                        N.createElement(Y, null),
                        N.createElement(
                          "div",
                          { className: z.a.SidebarManageMutedApps },
                          _ &&
                            N.createElement(
                              "div",
                              {
                                className: Object(R.a)(
                                  z.a.SidebarLink,
                                  z.a.ForceDesktopLink
                                ),
                                onClick: _
                              },
                              Object(P.d)("#EventCalendar_ForceDesktopView")
                            ),
                          b &&
                            N.createElement(
                              "div",
                              {
                                className: Object(R.a)(
                                  z.a.SidebarLink,
                                  z.a.ForceResponsiveLink
                                ),
                                onClick: b
                              },
                              Object(P.d)("#EventCalendar_ShowResponsiveView")
                            ),
                          Boolean(m.BIsGlobalCalendar()) &&
                            0 < v &&
                            N.createElement(
                              O.a,
                              {
                                className: z.a.MutedSourcesGroup,
                                href:
                                  F.c.STORE_BASE_URL +
                                  "account/emailoptout/app",
                                bDisableContextMenu: !0
                              },
                              Object(P.d)("#EventCalendar_ManageMutedSources"),
                              N.createElement(
                                "div",
                                { className: z.a.MutedSourcesCount },
                                v
                              )
                            ),
                          N.createElement(
                            O.a,
                            {
                              href: F.c.STORE_BASE_URL + "account/preferences",
                              bDisableContextMenu: !0
                            },
                            Object(P.d)("#EventCalendar_ManageStorePref")
                          )
                        ),
                        i &&
                          N.createElement(
                            "div",
                            { className: z.a.SidebarFooter },
                            N.createElement("img", {
                              src:
                                F.c.STORE_CDN_URL +
                                "public/images/footerLogo_valve_new.png"
                            }),
                            N.createElement(
                              "div",
                              null,
                              Object(P.d)(
                                "#Legal_Footer_WithYear",
                                Object(P.h)(new Date())
                              )
                            )
                          )
                      )
                )
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        J = Object(l.g)(q),
        Q = a("0OaU"),
        K = a("r64O"),
        X = a("uuth"),
        $ = a("ylkE"),
        ee = a("cGQe"),
        te = a("XmAN"),
        ae = a("mgoM"),
        ne = a("U+Q5"),
        re = a("YLyR"),
        oe = a("Kw0F");
      ((r = n = n || {})[(r.NotLoaded = 0)] = "NotLoaded"),
        (r[(r.Loading = 1)] = "Loading"),
        (r[(r.Loaded = 2)] = "Loaded");
      var ie = n.NotLoaded,
        se = [];
      function le(t) {
        var e, a;
        ie != n.Loaded
          ? (ie == n.NotLoaded &&
              (((e = document.createElement("script")).src =
                "https://www.youtube.com/iframe_api"),
              (a = document.getElementsByTagName(
                "script"
              )[0]).parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = ce)),
            se.findIndex(function(e) {
              return t == e;
            }) < 0 && se.push(t))
          : t();
      }
      function ce() {
        ie = n.Loaded;
        for (var e = 0, t = se; e < t.length; e++) {
          (0, t[e])();
        }
        se = [];
      }
      var de = (function(a) {
          function n(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_strPlayerID = ""),
              (t.m_player = null),
              (t.m_playerContainer = null),
              (t.m_bPlayerReady = !1),
              (t.m_strPlayerID = "YoutubePlayer_" + n.s_nPlayerIndex++),
              (t.state = { bYoutubeLoaded: !1 }),
              t
            );
          }
          return (
            Object(M.d)(n, a),
            (n.prototype.componentWillUnmount = function() {
              var e;
              this.DestroyPlayer(),
                (e = this.OnYoutubeScriptsReady),
                oe.b(se, e);
            }),
            (n.prototype.shouldComponentUpdate = function(e, t) {
              if (!this.m_player) return !1;
              var a = this.props;
              return (
                a.autoplay != e.autoplay ||
                a.controls != e.controls ||
                a.showInfo != e.showInfo ||
                a.video != e.video
                  ? this.CreatePlayer(e)
                  : (a.width == e.width && a.height == e.height) ||
                    (this.m_bPlayerReady &&
                      e.width &&
                      e.height &&
                      this.m_player.setSize(e.width, e.height)),
                !1
              );
            }),
            (n.prototype.DestroyPlayer = function() {
              if (this.m_player)
                try {
                  this.m_player.stopVideo && this.m_player.stopVideo(),
                    this.m_player.destroy && this.m_player.destroy();
                } catch (e) {
                } finally {
                  this.m_player = null;
                }
            }),
            (n.prototype.BindPlayerContainer = function(e) {
              this.m_playerContainer != e &&
                ((this.m_playerContainer = e),
                this.DestroyPlayer(),
                this.m_playerContainer && le(this.OnYoutubeScriptsReady));
            }),
            (n.prototype.OnYoutubeScriptsReady = function() {
              this.CreatePlayer(this.props);
            }),
            (n.prototype.CreatePlayer = function(e) {
              var t, a, n, r, o, i, s;
              this.DestroyPlayer(),
                this.m_playerContainer &&
                  ((t = !1 === e.autoplay ? 0 : 1),
                  (a = !0 === e.showInfo ? 1 : 0),
                  (n = !0 === e.controls ? 1 : 0),
                  (r = !0 === e.showFullscreenBtn ? 1 : 0),
                  (o = !0 === e.playsInline ? 1 : 0),
                  (i = {
                    width: void 0 !== e.width ? String(e.width) : void 0,
                    height: void 0 !== e.height ? String(e.height) : void 0,
                    videoId: e.video,
                    playerVars: {
                      autoplay: t,
                      showinfo: a,
                      autohide: 1,
                      fs: r,
                      modestbranding: 1,
                      rel: 0,
                      playsinline: o,
                      iv_load_policy: 3,
                      controls: n,
                      start: e.startSeconds
                    },
                    events: {
                      onReady: this.OnPlayerReady,
                      onStateChange: this.OnPlayerStateChange,
                      onError: this.OnError
                    }
                  }),
                  (s = this.m_playerContainer.firstElementChild),
                  (this.m_bPlayerReady = !1),
                  (this.m_player = new YT.Player(s, i)));
            }),
            (n.prototype.OnPlayerReady = function(e) {
              var t, a;
              (this.m_bPlayerReady = !0),
                this.props.onVideoInfoChanged &&
                  ((a = { strAuthor: "", strTitle: "", strVideoID: "" }),
                  (t = this.m_player.getVideoData()).author &&
                    (a.strAuthor = t.author),
                  t.title && (a.strTitle = t.title),
                  t.video_id && (a.strVideoID = t.video_id),
                  this.props.onVideoInfoChanged(a)),
                this.props.width &&
                  this.props.height &&
                  this.m_player.setSize(this.props.width, this.props.height),
                this.props.autoplay && this.m_player.playVideo(),
                this.props.onPlayerReady && this.props.onPlayerReady();
            }),
            (n.prototype.OnPlayerStateChange = function(e) {
              switch (e.data) {
                case YT.PlayerState.UNSTARTED:
                case YT.PlayerState.PLAYING:
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.BUFFERING:
                  break;
                case YT.PlayerState.ENDED:
                  this.props.onMovieEnd && this.props.onMovieEnd();
              }
            }),
            (n.prototype.OnError = function(e) {
              console.log("Youtube: Playback failed", e),
                this.props.onError && this.props.onError(e);
            }),
            (n.prototype.OnPlayerLeftView = function() {
              this.props.autopause &&
                this.m_player &&
                this.m_bPlayerReady &&
                this.m_player.pauseVideo();
            }),
            (n.prototype.render = function() {
              var e = N.createElement(
                "div",
                {
                  key: this.m_strPlayerID,
                  ref: this.BindPlayerContainer,
                  className: Object(R.a)("YoutubePlayer", this.props.classnames)
                },
                N.createElement(Q.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? N.createElement(X.a, { onLeave: this.OnPlayerLeftView }, e)
                : e;
            }),
            (n.s_nPlayerIndex = 0),
            Object(M.c)([v.a], n.prototype, "BindPlayerContainer", null),
            Object(M.c)([v.a], n.prototype, "OnYoutubeScriptsReady", null),
            Object(M.c)([v.a], n.prototype, "CreatePlayer", null),
            Object(M.c)([v.a], n.prototype, "OnPlayerReady", null),
            Object(M.c)([v.a], n.prototype, "OnPlayerStateChange", null),
            Object(M.c)([v.a], n.prototype, "OnError", null),
            Object(M.c)([v.a], n.prototype, "OnPlayerLeftView", null),
            n
          );
        })(N.Component),
        pe = a("02Wr"),
        ue = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bDismissedPreviewImage: !1 }), t;
          }
          return (
            Object(M.d)(e, a),
            (e.prototype.render = function() {
              var t = this;
              if (
                (this.props.preloadYoutubeScripts && le(function() {}),
                this.state.bDismissedPreviewImage)
              )
                return N.createElement(de, Object(M.a)({}, this.props));
              var e =
                  this.props.altImgWithFallback &&
                  0 < this.props.altImgWithFallback.length,
                a = this.props.altImg
                  ? this.props.altImg
                  : "https://img.youtube.com/vi/" +
                    this.props.video +
                    "/maxresdefault.jpg";
              return N.createElement(
                "div",
                {
                  className: Object(R.a)(
                    "YoutubePreviewContainer",
                    this.props.imageClassnames
                  ),
                  onClick: function(e) {
                    t.props.onPlayerActivated && t.props.onPlayerActivated(),
                      t.setState({ bDismissedPreviewImage: !0 }),
                      e.stopPropagation(),
                      e.preventDefault();
                  }
                },
                e &&
                  N.createElement(pe.b, {
                    className: "YoutubePreviewImage",
                    srcs: this.props.altImgWithFallback
                  }),
                !e &&
                  N.createElement("img", {
                    src: a,
                    className: "YoutubePreviewImage"
                  }),
                N.createElement(
                  "div",
                  { className: "YoutubePreviewPlay" },
                  N.createElement(D.F, null)
                ),
                N.createElement(
                  "div",
                  { className: "VideoHintText" },
                  Object(P.d)("#EventCalendar_WatchYouTubeVideo")
                )
              );
            }),
            e
          );
        })(N.Component),
        me = a("N0Ye"),
        he = a("mB/g"),
        ve = a("i6tc"),
        _e = a.n(ve),
        be = a("RQmk"),
        ge = a("O0NR"),
        ye = a("ka0M"),
        Ee = a("Jqb/"),
        Se = a("X3Ds"),
        fe = a("TtDX"),
        Oe = a("y+6m"),
        Ce = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.OnMuteButton = function(e) {
              var t = this.props.calendarEvent,
                a = t.GetEntityName();
              Object(ye.d)(
                N.createElement(
                  Ee.b,
                  {
                    strTitle: Object(P.d)("#EventCalendar_MuteApp"),
                    strDescription: Object(P.d)(
                      "#EventCalendar_MuteApp_details",
                      a
                    ),
                    onOK: function() {
                      return Object(A.a)().UpdateEventBlockFromCalenderEvent(
                        t,
                        !1
                      );
                    }
                  },
                  N.createElement(
                    "a",
                    {
                      href:
                        (F.c.IN_CLIENT ? "steam://openurl/" : "") +
                        F.c.STORE_BASE_URL +
                        "account/emailoptout/app",
                      target: F.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(P.d)("#EventCalendar_ManageMutedApps")
                  )
                ),
                Object(Se.o)(e)
              );
            }),
            (t.prototype.OnUnMuteButton = function() {
              var e = this.props.calendarEvent;
              Object(A.a)().UpdateEventBlockFromCalenderEvent(e, !0);
            }),
            (t.prototype.IgnoreAppButton = function(e) {
              var t = this.props.calendarEvent;
              t.GetEntityName();
              Object(ye.d)(
                N.createElement(
                  Ee.b,
                  {
                    strTitle: Object(P.d)("#EventCalendar_Ignore"),
                    strDescription: Object(P.d)(
                      "#EventCalendar_IgnoreApp_ttip"
                    ),
                    onOK: function() {
                      return Object(A.a)().IgnoreAppAndFilterCalendar(t);
                    }
                  },
                  N.createElement("br", null),
                  N.createElement(
                    "p",
                    null,
                    Object(P.d)("#EventCalendar_IgnoreApp_newhub")
                  ),
                  N.createElement("br", null),
                  N.createElement(
                    "a",
                    {
                      href:
                        (F.c.IN_CLIENT ? "steam://openurl/" : "") +
                        F.c.STORE_BASE_URL +
                        "account/preferences",
                      target: F.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(P.d)("#EventCalendar_ManageStorePref")
                  )
                ),
                Object(Se.o)(e)
              );
            }),
            (t.prototype.UnignoreAppButton = function() {
              var e = this.props.calendarEvent;
              H.a.UpdateAppIgnore(e.appInfo.appid, !1);
            }),
            (t.prototype.HideAllEventsOfMyType = function() {
              var e = this.props.eventModel,
                t = E.c.MapClanEventTypeToGroup(e.GetEventType());
              E.c.SetEventTypeGroupAllowed(t, !1);
            }),
            (t.prototype.NoOp = function() {}),
            (t.prototype.AddContextMenuForSource = function(e, t, a, n) {
              void 0 === n && (n = !0),
                E.c.BIsGameSourceAllowed(t) &&
                  (n &&
                    e.push(
                      N.createElement(
                        Oe.d,
                        {
                          key: "item-source-" + a + "-" + t,
                          disabled: !0,
                          onSelected: function() {}
                        },
                        Object(P.d)("#EventCalender_Reason_" + t)
                      )
                    ),
                  e.push(
                    N.createElement(
                      Oe.d,
                      {
                        key: "item-hidesource-" + a + "-" + t,
                        onSelected: function() {
                          E.c.SetGameSourceAllowed(t, !1);
                        }
                      },
                      Object(P.d)("#EventCalender_Hide_Reason_" + t)
                    )
                  ));
            }),
            (t.prototype.RemoveFromWishlist = function() {
              H.a.UpdateGameWishlist(this.props.eventModel.appid, !1);
            }),
            (t.prototype.AddToWishlist = function() {
              H.a.UpdateGameWishlist(this.props.eventModel.appid, !0);
            }),
            (t.prototype.GotoAppID = function() {
              var e = this.props.eventModel;
              e.appid &&
                this.props.history.push("/newshub/app/" + e.appid + "/");
            }),
            (t.prototype.GotoGroupID = function() {
              var e = this.props.eventModel;
              e.clanSteamID &&
                this.props.history.push(
                  "/newshub/group/" + e.clanSteamID.GetAccountID() + "/"
                );
            }),
            (t.prototype.CreateContextMenu = function(e) {
              var t = this.props,
                a = t.eventModel,
                n = t.calendarEvent,
                r = [],
                o = n.GetSource(),
                i = n.unique_id,
                s = Object(A.a)();
              s.BIsGlobalCalendar() &&
                (o &&
                  o & p.a.k_eLibrary &&
                  (E.c.BIsGameSourceAllowed(E.b.k_ERecent) && n.appInfo
                    ? (r.push(
                        N.createElement(
                          Oe.d,
                          {
                            key: "item-source-" + i + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(P.d)(
                            "#EventCalender_LastPlayed",
                            Object(P.n)(
                              L.a.GetTimeNowWithOverride() -
                                n.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(r, E.b.k_ERecent, i, !1))
                    : this.AddContextMenuForSource(r, E.b.k_ELibrary, i)),
                o &&
                  o & p.a.k_eWishlist &&
                  this.AddContextMenuForSource(r, E.b.k_EWishist, i),
                o &&
                  o & p.a.k_eFollowing &&
                  this.AddContextMenuForSource(r, E.b.k_EFollowing, i),
                o &&
                  o & p.a.k_eRecommended &&
                  this.AddContextMenuForSource(r, E.b.k_ERecommended, i),
                o &&
                  o & p.a.k_eSteam &&
                  this.AddContextMenuForSource(r, E.b.k_ESteam, i),
                o &&
                  o & p.a.k_eFeatured &&
                  this.AddContextMenuForSource(r, E.b.k_EFeatured, i)),
                r.push(
                  N.createElement(
                    Oe.d,
                    {
                      key: a.GID + "hidetype",
                      onSelected: this.HideAllEventsOfMyType
                    },
                    Object(P.d)(
                      "#EVentCalendar_Hide_EventType",
                      Object(P.d)(
                        "#EventCalendar_EventTypeGroup_" +
                          E.c.MapClanEventTypeToGroup(a.GetEventType())
                      )
                    )
                  )
                ),
                F.i.logged_in &&
                  (f.a.BIsEventBlocked(n)
                    ? r.push(
                        N.createElement(
                          Oe.d,
                          {
                            key: a.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          N.createElement(
                            h.a,
                            {
                              toolTipContent: Object(P.d)(
                                "#EventCalendar_UnMuteApp_ttip"
                              )
                            },
                            Object(P.d)(
                              "#EventCalendar_UnMuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )
                    : r.push(
                        N.createElement(
                          Oe.d,
                          {
                            key: a.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          N.createElement(
                            h.a,
                            {
                              toolTipContent: Object(P.d)(
                                "#EventCalendar_MuteApp_ttip"
                              )
                            },
                            Object(P.d)(
                              "#EventCalendar_MuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      ),
                  n.appInfo &&
                    (H.a.BIsGameIgnored(n.appInfo.appid)
                      ? r.push(
                          N.createElement(
                            Oe.d,
                            {
                              key: a.GID + "unignoreapp",
                              onSelected: this.UnignoreAppButton
                            },
                            Object(P.d)(
                              "#EventCalendar_UnignoreApp",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      : r.push(
                          N.createElement(
                            Oe.d,
                            {
                              key: a.GID + "ignoreapp",
                              onSelected: this.IgnoreAppButton
                            },
                            N.createElement(
                              h.a,
                              {
                                toolTipContent: Object(P.d)(
                                  "#EventCalendar_IgnoreApp_ttip"
                                )
                              },
                              Object(P.d)(
                                "#EventCalendar_IgnoreApp",
                                this.props.calendarEvent.GetEntityName()
                              )
                            )
                          )
                        ))),
                s.BIsSingleSourceCalendar() ||
                  (a.appid
                    ? r.push(
                        N.createElement(
                          Oe.d,
                          { key: a.GID + "goto", onSelected: this.GotoAppID },
                          Object(P.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            n.GetEntityName()
                          )
                        )
                      )
                    : r.push(
                        N.createElement(
                          Oe.d,
                          { key: a.GID + "goto", onSelected: this.GotoGroupID },
                          Object(P.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            n.GetEntityName()
                          )
                        )
                      )),
                Object(fe.a)(N.createElement(Oe.c, null, r), e);
            }),
            (t.prototype.render = function() {
              return N.createElement(
                "div",
                {
                  className: Object(R.a)(_e.a.FooterStat, _e.a.Options),
                  onClick: this.CreateContextMenu
                },
                N.createElement(D.y, null)
              );
            }),
            Object(M.c)([v.a], t.prototype, "OnMuteButton", null),
            Object(M.c)([v.a], t.prototype, "OnUnMuteButton", null),
            Object(M.c)([v.a], t.prototype, "IgnoreAppButton", null),
            Object(M.c)([v.a], t.prototype, "UnignoreAppButton", null),
            Object(M.c)([v.a], t.prototype, "HideAllEventsOfMyType", null),
            Object(M.c)([v.a], t.prototype, "NoOp", null),
            Object(M.c)([v.a], t.prototype, "AddContextMenuForSource", null),
            Object(M.c)([v.a], t.prototype, "RemoveFromWishlist", null),
            Object(M.c)([v.a], t.prototype, "AddToWishlist", null),
            Object(M.c)([v.a], t.prototype, "GotoAppID", null),
            Object(M.c)([v.a], t.prototype, "GotoGroupID", null),
            Object(M.c)([v.a], t.prototype, "CreateContextMenu", null),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        we = Object(l.g)(Ce),
        Te = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bVideoPlayerReady: !1 }), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.OnFallbackClick = function(e) {
              ge.b.RecordAppInteractionEvent(
                this.props.calendarEvent.appid,
                ge.a.k_eClickThrough
              ),
                this.props.fnOnClicked(this.props.eventModel),
                e.stopPropagation(),
                e.preventDefault();
            }),
            (e.prototype.componentDidMount = function() {
              var e;
              this.props.calendarEvent.clanInfo &&
                ((e = G.a.InitFromClanID(
                  this.props.calendarEvent.clanInfo.clanid
                )),
                y.a.LoadOGGClanInfoForClanSteamID(e));
            }),
            (e.prototype.getVideoPreviewControl = function() {
              var e = this,
                t = this.props.eventModel,
                a = t.video_preview_type,
                n = t.video_preview_id;
              if (!n) return null;
              if (12 === this.props.eventModel.type) return null;
              if ("youtube" !== a) return null;
              var r = Object(ae.d)(F.c.LANGUAGE),
                o =
                  qe() && 14 == this.props.eventModel.GetEventType()
                    ? ne.c.full
                    : ne.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  r,
                  o,
                  !0
                );
              return N.createElement(ue, {
                video: n,
                altImgWithFallback: i,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                imageClassnames: _e.a.YoutubePreviewImage,
                onPlayerActivated: function() {
                  ge.b.RecordAppInteractionEvent(
                    e.props.calendarEvent.appid,
                    ge.a.k_ePlayedVideo
                  ),
                    e.setState({ bVideoPlayerReady: !0 });
                },
                preloadYoutubeScripts: !0,
                playsInline: !0
              });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.eventModel,
                a = e.calendarEvent,
                n = e.bSuppressHoverEffects,
                r = e.bMiniMode,
                o = x.a.Get(),
                i = a.GetEntityName(),
                s = a.GetGameCapsule(),
                l = Object(ae.d)(F.c.LANGUAGE),
                c = t.has_live_stream,
                d = t.has_live_stream,
                p =
                  qe() && 14 == t.GetEventType()
                    ? ne.c.full
                    : ne.c.capsule_main,
                u = "capsule",
                m = t.BImageNeedScreenshotFallback(u, l),
                h = Boolean(m && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(u, l, p),
                v = this.getVideoPreviewControl(),
                _ = !v && !r,
                b = t.GetCategoryAsString(),
                g = _e.a["EventType" + t.GetEventType()],
                y = t.GetAllTags().map(function(e) {
                  return _e.a["Tag-" + e];
                }),
                E = R.a.apply(
                  void 0,
                  Object(M.g)(
                    [
                      _e.a.TileContainer,
                      g,
                      c && _e.a.TileVideoIcon,
                      n ? _e.a.DisableHovers : _e.a.EnableHovers,
                      this.state.bVideoPlayerReady && _e.a.VideoPlayerReady,
                      v && _e.a.HasVideo,
                      o.HasEventBeenRead(t.GID) && _e.a.HasBeenRead,
                      r && _e.a.MiniMode
                    ],
                    y
                  )
                ),
                S = t.GetNameWithFallback(l),
                f = t.GetSubTitleWithLanguageFallback(l),
                O = t.GetSummaryWithFallback(l);
              f === O && (O = void 0), f === S && (f = void 0);
              var C =
                  28 !== t.type &&
                  12 !== t.type &&
                  L.a.GetTimeNowWithOverride() <
                    t.GetStartTimeAndDateUnixSeconds(),
                w = N.createElement(
                  "div",
                  { className: _e.a.CoverImageCtn },
                  v,
                  _ &&
                    N.createElement(
                      N.Fragment,
                      null,
                      12 === t.type &&
                        N.createElement(
                          "div",
                          { className: _e.a.GameCapsuleCtn },
                          N.createElement("div", {
                            className: _e.a.AppBannerLogo,
                            style: { backgroundImage: "url(" + s + ")" }
                          })
                        ),
                      12 !== t.type &&
                        N.createElement(
                          "div",
                          {
                            className: Object(R.a)(
                              _e.a.EventCapsuleCtn,
                              c && _e.a.LiveBroadcastPreview
                            )
                          },
                          N.createElement("div", {
                            className: Object(R.a)(
                              _e.a.TileImage,
                              m && _e.a.FallbackImage
                            ),
                            style: { backgroundImage: "url(" + h + ")" }
                          }),
                          c &&
                            N.createElement("div", {
                              className: _e.a.TileCoverImagePlayable
                            }),
                          d &&
                            N.createElement(
                              "div",
                              { className: _e.a.TileCoverLiveIcon },
                              Object(P.d)("#home_page_live_broadcast")
                            ),
                          c &&
                            N.createElement(
                              "div",
                              { className: "VideoHintText" },
                              Object(P.d)("#EventCalendar_WatchLiveBroadcast")
                            )
                        )
                    ),
                  N.createElement(
                    "div",
                    { className: _e.a.EventSummary },
                    N.createElement(
                      "div",
                      { className: Object(R.a)(_e.a.TileTextCategoryType, g) },
                      b
                    )
                  )
                ),
                T = n && 14 != t.GetEventType() && !v,
                I = T && w,
                k = !T && w;
              return N.createElement(
                "div",
                { className: E },
                N.createElement(te.a, { event: t, recordNewsHubStats: !0 }),
                N.createElement(
                  he.c,
                  { eventModel: t, route: he.a.k_eView },
                  N.createElement(
                    "div",
                    { className: _e.a.Tile, onClick: this.OnFallbackClick },
                    14 === t.type &&
                      N.createElement("div", {
                        className: Object(R.a)(
                          _e.a.TileBackgroundImage,
                          m && _e.a.FallbackImage
                        ),
                        style: { backgroundImage: "url(" + h + ")" }
                      }),
                    N.createElement(
                      "div",
                      { className: _e.a.MainContentContainer },
                      N.createElement(
                        "div",
                        { className: _e.a.TileTextContainer },
                        N.createElement(
                          "div",
                          { className: _e.a.PatchIconCtn },
                          N.createElement(D.s, null)
                        ),
                        N.createElement(
                          "div",
                          { className: _e.a.EventTitleCtn },
                          I,
                          N.createElement(Ie, Object(M.a)({}, this.props)),
                          N.createElement(
                            "div",
                            { className: _e.a.EventName },
                            S
                          ),
                          f &&
                            N.createElement(
                              "div",
                              { className: _e.a.EventSubTitle },
                              f
                            ),
                          12 !== t.type &&
                            O &&
                            N.createElement(
                              "div",
                              { className: _e.a.EventSummaryDefault },
                              O
                            ),
                          N.createElement(
                            "div",
                            { className: _e.a.EventTypeAndDateCtn },
                            12 === t.type &&
                              N.createElement(
                                "div",
                                { className: _e.a.SmallAppName },
                                i
                              ),
                            N.createElement(ke, { eventModel: t })
                          )
                        ),
                        C &&
                          N.createElement(
                            "div",
                            { className: _e.a.ReminderContainer },
                            N.createElement(ee.a, {
                              eventModel: t,
                              eventGID: t.GID,
                              lang: l,
                              bShowStartTime: !0
                            })
                          )
                      ),
                      k
                    )
                  )
                ),
                N.createElement(De, Object(M.a)({}, this.props))
              );
            }),
            Object(M.c)([v.a], e.prototype, "OnFallbackClick", null),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        Ie = function(e) {
          function t(e) {
            Object(he.g)(a, he.a.k_eStoreOwnerPage),
              e.stopPropagation(),
              e.preventDefault();
          }
          var a = e.eventModel,
            n = e.calendarEvent,
            r = e.bSuppressHoverEffects,
            o = n.GetEntityName(),
            i = n.GetGameIcon(),
            s = r
              ? N.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      _e.a.TileGameCapsule,
                      _e.a.DisableHovers
                    ),
                    onClick: t
                  },
                  N.createElement("img", { className: _e.a.AppIcon, src: i }),
                  N.createElement("div", { className: _e.a.TileTextAppName }, o)
                )
              : N.createElement(
                  "div",
                  { onClick: t },
                  N.createElement(
                    be.b,
                    {
                      hoverClassName: Object(R.a)(
                        _e.a.TileGameCapsule,
                        _e.a.EnableHovers
                      ),
                      type: "app",
                      id: n.appid
                    },
                    N.createElement("img", { className: _e.a.AppIcon, src: i }),
                    N.createElement(
                      "div",
                      { className: _e.a.TileTextAppName },
                      o
                    )
                  )
                );
          return N.createElement(
            "div",
            { className: _e.a.TileTextHeader },
            s,
            n.GetSource() === p.a.k_eRecommended &&
              N.createElement(
                "div",
                { className: _e.a.SourceRecommended },
                Object(P.d)("#EventCalendar_GameSource_recommended_Verbose")
              )
          );
        },
        ke = Object(s.a)(function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = L.a.GetTimeNowWithOverride(),
            r = t ? t.GetStartTimeAndDateUnixSeconds() : a.start_time,
            o = t ? t.GetPostTimeAndDateUnixSeconds() : a.start_time,
            i = t && Object(me.a)(t.type) && t.GetEndTimeAndDateUnixSeconds();
          if (i && r < n && n < i) {
            var s = i - n,
              l = Object(P.n)(s, !0);
            return N.createElement(
              "div",
              { className: _e.a.LiveText },
              N.createElement(
                re.e,
                { rtFullDate: r, stylesmodule: _e.a },
                N.createElement(
                  "div",
                  { className: _e.a.LiveNow },
                  Object(P.d)("#EventCalendar_LiveNow")
                )
              ),
              N.createElement(
                re.e,
                { rtFullDate: i, stylesmodule: _e.a },
                Object(P.d)("#EventCalendar_TimeLeft", l)
              )
            );
          }
          if (r < n) {
            var c = n - r,
              d = c < 86400 ? Object(P.n)(c) : Object(P.m)(r),
              p = 3600 < Math.abs(r - o);
            return N.createElement(
              re.e,
              { rtFullDate: r, stylesmodule: _e.a },
              N.createElement(
                "div",
                { className: _e.a.PastDateText },
                Object(P.d)(
                  p
                    ? "#EventCalendar_StartedAtTime"
                    : "#EventCalendar_PostedAtTime",
                  d
                )
              )
            );
          }
          var u = (s = r - n) < 86400;
          return N.createElement(
            re.e,
            { rtFullDate: r, stylesmodule: _e.a },
            N.createElement(
              "div",
              { className: _e.a.FutureDateText },
              u
                ? Object(P.d)(
                    "#EventCalendar_WillStartAfterDuration",
                    Object(P.n)(s, !0)
                  )
                : Object(P.d)("#EventCalendar_WillStartAtTime", Object(P.m)(r))
            )
          );
        });
      var De = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.OnPerformVoteUp = function() {
              var e = this.props.eventModel,
                t = x.a.Get();
              !0 !== t.GetPreviouslyLoadedVote(this.props.eventModel) &&
                Object($.a)(e, t) &&
                (t.Vote(e, !0, g.a.CancelToken.source()),
                ge.b.RecordAppInteractionEvent(e.appid, ge.a.k_eThumbsUp));
            }),
            (t.prototype.OnDiscussionClicked = function() {
              var e = this.props.eventModel;
              ge.b.RecordAppInteractionEvent(e.appid, ge.a.k_eDiscussions);
            }),
            (t.prototype.render = function() {
              var e,
                t = x.a.Get(),
                a = this.props.eventModel,
                n = Math.max(0, a.nVotesUp - a.nVotesDown),
                r = t.GetPreviouslyLoadedVote(this.props.eventModel),
                o = ((e = r),
                t.BIsUserLoggedIn()
                  ? F.i.is_limited
                    ? _e.a.Vote_LimitedUser
                    : !0 === e
                    ? _e.a.Vote_Positive
                    : !1 === e
                    ? _e.a.Vote_Negative
                    : _e.a.Vote_Ready
                  : _e.a.Vote_NotLoggedIn),
                i =
                  (F.c.IN_CLIENT ? "steam://openurl/" : "") +
                  a.GetForumTopicURL(),
                s =
                  0 < a.live_stream_viewer_count
                    ? a.live_stream_viewer_count
                    : void 0;
              return N.createElement(
                "div",
                { className: _e.a.Footer },
                N.createElement(
                  "div",
                  { className: _e.a.FooterRightSide },
                  Boolean(s) &&
                    N.createElement(
                      "div",
                      { className: _e.a.TileViewerCount },
                      s.toLocaleString(P.c.GetPreferredLocales())
                    ),
                  N.createElement(
                    "div",
                    {
                      className: Object(R.a)(_e.a.FooterStat, _e.a.Vote, o),
                      onClick: this.OnPerformVoteUp
                    },
                    N.createElement(D.D, { className: _e.a.RateIcon }),
                    N.createElement("span", null, Number(n).toLocaleString())
                  ),
                  N.createElement(
                    "div",
                    { className: _e.a.FooterStat },
                    N.createElement(
                      "a",
                      {
                        href: i,
                        className: _e.a.CommentIconCtn,
                        target: "_blank",
                        onClick: this.OnDiscussionClicked
                      },
                      N.createElement(D.e, { className: _e.a.CommentIcon }),
                      N.createElement(
                        "span",
                        null,
                        Number(a.nCommentCount).toLocaleString()
                      )
                    )
                  ),
                  N.createElement(we, Object(M.a)({}, this.props))
                )
              );
            }),
            Object(M.c)([v.a], t.prototype, "OnPerformVoteUp", null),
            Object(M.c)([v.a], t.prototype, "OnDiscussionClicked", null),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        je = Object(s.a)(function(t) {
          var e = t.calendarEvent,
            a = _e.a["EventType" + e.event_type],
            n = Object(R.a)(_e.a.TileContainer, a);
          return N.createElement(
            X.a,
            {
              onEnter: function() {
                var e;
                t.partnerEventStore.QueueLoadPartnerEvent(
                  t.calendarEvent.clanid,
                  t.calendarEvent.unique_id
                ),
                  t.calendarEvent.appid &&
                    _.a.GetStoreCapsuleInfo(t.calendarEvent.appid),
                  t.calendarEvent.clanInfo &&
                    ((e = G.a.InitFromClanID(t.calendarEvent.clanInfo.clanid)),
                    y.a.LoadOGGClanInfoForClanSteamID(e));
              },
              topOffset: "-500px",
              bottomOffset: "-500px"
            },
            N.createElement(
              "div",
              { className: n },
              N.createElement("div", { className: _e.a.Tile }),
              N.createElement("div", { className: _e.a.Footer })
            )
          );
        }),
        Ae = Object(s.a)(function(e) {
          var t = e.partnerEventStore,
            a = e.calendarEvent,
            n = Object(M.f)(e, ["partnerEventStore", "calendarEvent"]),
            r = t.GetClanEventModel(a.unique_id);
          return r
            ? N.createElement(
                Te,
                Object(M.a)({ eventModel: r, calendarEvent: a }, n)
              )
            : N.createElement(je, { calendarEvent: a, partnerEventStore: t });
        }),
        Le = a("qD+2"),
        Ge = a("UWWC"),
        Ne = a("yJqL"),
        Me = a("JJA/"),
        xe = a("xnZ7"),
        Be = a.n(xe),
        Re = a("bDQf"),
        Pe = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoading: !1, eventModel: e.props.eventModel }),
              (e.m_refParent = N.createRef()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.eventModel ||
                this.setState({ bLoading: !0 }, this.LoadEvent);
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.add(Me.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(Me.BodyNoScroll);
            }),
            (e.prototype.GetBodyElement = function() {
              return this.m_refParent.current
                ? this.m_refParent.current.closest("body")
                : null;
            }),
            (e.prototype.LoadEvent = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(M.e)(this, function(e) {
                  return (
                    (t = this.props),
                    (a = t.appid),
                    (n = t.announcementGID),
                    t.partnerEventStore
                      .LoadPartnerEventFromAnnoucementGID(a, n, 0)
                      .then(function(e) {
                        return r.setState(
                          { bLoading: !1, eventModel: e },
                          r.HandleReadEvent
                        );
                      })
                      .catch(function(e) {
                        var t = Object(Re.a)(e);
                        console.log(
                          "EventInfiniteScrollModal failed " + t.strErrorMsg,
                          t
                        ),
                          r.setState({ bLoading: !1 });
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.HandleReadEvent = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(M.e)(this, function(e) {
                  return (
                    (t = this.state.eventModel),
                    (a = this.props.trackingLocation),
                    t &&
                      t.BIsPartnerEvent() &&
                      x.a
                        .Get()
                        .GetTracker()
                        .MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          a
                        ) &&
                      x.a
                        .Get()
                        .GetTracker()
                        .Flush(),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return N.createElement(
                  Ee.g,
                  null,
                  N.createElement(
                    "div",
                    { className: Be.a.FlexCenter, style: { height: "400px" } },
                    N.createElement(Q.a, null)
                  )
                );
              var e = this.props,
                t = e.classname,
                a = e.partnerEventStore,
                n = e.bPrimaryPageFeature;
              if (this.state.eventModel) {
                var r = N.createElement(
                  "div",
                  null,
                  N.createElement(Ne.a, {
                    initialEvent: this.state.eventModel,
                    partnerEventStore: a,
                    emoticonStore: Ge.b,
                    appInfoStore: Le.a,
                    closeModal: !n && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return n ? r : N.createElement(Ee.g, { className: t }, r);
              }
              return null;
            }),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        Fe = a("s4NR"),
        He = a.n(Fe);
      function ze(e, t) {
        var a = "location" in e ? e.location : e,
          n = "search" in a ? a.search : a,
          r = He.a.parse(n.substring(1))[t];
        return r && Array.isArray(r) ? r[r.length - 1] : r;
      }
      function Ue(e, t, a) {
        var n = He.a.parse(e.location.search.substring(1));
        null == a ? delete n[t] : (n[t] = a), e.push("?" + He.a.stringify(n));
      }
      var We = a("BFsE"),
        Ve = "global_header";
      function Ze() {
        var e = document.getElementById(Ve);
        if (e && "none" != getComputedStyle(e).display) return e;
        var t = document.getElementsByClassName("responsive_header");
        return (
          Object(K.a)(t.length <= 1, "Must have at most one responsive_header"),
          1 != t.length ? null : t[0]
        );
      }
      function Ye() {
        var e = Ze();
        return e && e.id != Ve;
      }
      function qe() {
        return window.innerWidth < parseInt(z.a.strMaxMobileWidth);
      }
      function Je() {
        return (
          Ye() ||
          window.innerWidth <
            parseInt(z.a.strDesktopControlBarWidth) +
              parseInt(z.a.strMaxMobileWidth)
        );
      }
      function Qe() {
        var e = Ye(),
          t = qe(),
          a = 0;
        return (
          Ze() &&
            (a = parseInt(
              e
                ? z.a.strMobileGlobalHeaderHeight
                : z.a.strDesktopGlobalHeaderHeight
            )),
          {
            nGlobalHeaderHeight: a,
            nSteamLabsBannerHeight: parseInt(
              e ? z.a.strMobileLabsBannerHeight : z.a.strDesktopLabsBannerHeight
            ),
            nGroupHeaderHeight: parseInt(
              t
                ? z.a.strMobileGroupHeaderHeight
                : z.a.strDesktopGroupHeaderHeight
            )
          }
        );
      }
      var Ke,
        Xe,
        $e = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = Object(M.a)(
                {
                  bUserIsLoggedIn: F.i.logged_in,
                  nVisibleHeight: 0,
                  nScrollTop: null,
                  bControlBarIsCollapsed: Je(),
                  bControlBarWasOpenedByUser: !1,
                  nDisappearingHeaderTop: 0
                },
                Qe()
              )),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              (e.m_nForcedScrollPosition = null),
              (e.m_nInitialScrollPosition = null),
              (e.m_refDiv = N.createRef()),
              (e.k_nMaxScrollErrorInPixels = 2),
              e
            );
          }
          var i;
          return (
            Object(M.d)(e, t),
            ((i = e).prototype.componentDidMount = function() {
              this.InitEventCalendarStore(),
                this.UpdateDocumentUI(),
                window.addEventListener("resize", this.OnResize),
                window.addEventListener("scroll", this.OnScroll),
                this.setState({ nVisibleHeight: window.innerHeight });
            }),
            (e.prototype.componentDidUpdate = function(e, t) {
              (t.bUserIsLoggedIn == this.state.bUserIsLoggedIn &&
                JSON.stringify(e.filter_to_appids) ==
                  JSON.stringify(this.props.filter_to_appids) &&
                JSON.stringify(e.filter_to_clanids) ==
                  JSON.stringify(this.props.filter_to_clanids) &&
                e.filter_to_collection === this.props.filter_to_collection) ||
                this.InitEventCalendarStore(),
                this.UpdateDocumentUI(),
                this.LoadEventToShowAsModal();
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("component unmounted"),
                window.removeEventListener("resize", this.OnResize),
                window.removeEventListener("scroll", this.OnScroll);
            }),
            (e.prototype.LoadEventToShowAsModal = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = ze(this.props.location, "emclan")),
                      (a = ze(this.props.location, "emgid")),
                      t && a)
                        ? ((n = new G.a(t)),
                          this.state.modalEvent &&
                          this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
                            n.ConvertTo64BitString() &&
                          this.state.modalEvent.GID == a
                            ? [2]
                            : [
                                4,
                                B.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                                  n,
                                  a,
                                  0
                                )
                              ])
                        : [3, 2];
                    case 1:
                      return (
                        (r = e.sent()), this.setState({ modalEvent: r }), [3, 3]
                      );
                    case 2:
                      this.state.modalEvent &&
                        this.setState({ modalEvent: null }),
                        (e.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.BShowFutureView = function() {
              var e = ze(this.props.location, "upcoming");
              return e && "false" != e;
            }),
            (e.prototype.UpdateDocumentUI = function() {
              var e, t, a, n, r;
              this.props.filter_to_appids &&
              1 == this.props.filter_to_appids.length
                ? (a =
                    (t =
                      (e = this.props.filter_to_appids[0]) &&
                      _.a.GetStoreCapsuleInfo(e).GetAppStoreData()) && t.title)
                : this.props.filter_to_clanids &&
                  1 == this.props.filter_to_clanids.length &&
                  (a =
                    (r =
                      (n = this.props.filter_to_clanids[0]) &&
                      y.a.GetClanInfoByClanAccountID(n)) && r.group_name);
              var o = a
                ? Object(P.d)("#EventCalendar_TabTitle_GroupHub", a)
                : Object(P.d)("#EventCalendar_TabTitle_Global");
              document.title != o && (document.title = o),
                document.body.classList.contains("events_hub") ||
                  document.body.classList.add("events_hub");
            }),
            (e.prototype.OnResize = function() {
              this.setState(function(e) {
                var t = window.innerHeight,
                  a = !e.bControlBarWasOpenedByUser && Je(),
                  n = Qe();
                return Object(
                  M.a
                )({ nVisibleHeight: t, bControlBarIsCollapsed: a }, n);
              });
            }),
            (e.prototype.SetInitialScrollTop = function(e) {
              var t = null == this.m_nInitialScrollPosition;
              (this.m_nInitialScrollPosition = Math.round(e)),
                t && this.ScrollToInitialPosition();
            }),
            (e.prototype.ScrollToInitialPosition = function() {
              (this.m_nForcedScrollPosition = this.m_nInitialScrollPosition),
                window.scrollTo(0, this.m_nForcedScrollPosition);
            }),
            (e.prototype.OnScroll = function() {
              var o = this,
                i = Math.round(window.scrollY);
              null != this.m_nForcedScrollPosition &&
              Math.abs(this.m_nForcedScrollPosition - i) >
                this.k_nMaxScrollErrorInPixels &&
              this.m_refDiv.current.clientHeight >
                window.innerHeight + this.m_nForcedScrollPosition
                ? window.setTimeout(function() {
                    return window.scrollTo({ top: o.m_nForcedScrollPosition });
                  }, 0)
                : this.setState(function(e) {
                    if (null != o.m_nForcedScrollPosition)
                      return (
                        (o.m_nForcedScrollPosition = null),
                        {
                          nScrollTop: i,
                          nDisappearingHeaderTop: e.nDisappearingHeaderTop
                        }
                      );
                    if (Math.abs(i - e.nScrollTop) < 2)
                      return {
                        nScrollTop: i,
                        nDisappearingHeaderTop: e.nDisappearingHeaderTop
                      };
                    var t =
                        (i > e.nScrollTop && o.state.bControlBarIsCollapsed) ||
                        !!e.modalEvent,
                      a = e.nGlobalHeaderHeight + e.nSteamLabsBannerHeight,
                      n = t ? -1 * a : 0,
                      r = Ze();
                    return (
                      r && (r.style.transform = "translateY(" + n + "px)"),
                      { nScrollTop: i, nDisappearingHeaderTop: n }
                    );
                  });
            }),
            (e.prototype.InitEventCalendarStore = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = i.m_bInitialLoad),
                      !this.state.bUserIsLoggedIn &&
                        this.BRequireLoggedInUser())
                        ? [3, 5]
                        : ((a = {
                            appids: this.props.filter_to_appids,
                            clanaccountids: this.props.filter_to_clanids,
                            collectionid: this.props.filter_to_collection
                          }),
                          Object(A.b)(a),
                          (n = Object(A.a)()),
                          (r = !n.BIsCollectionCalendar()),
                          n.SetFilteredView(function(e) {
                            return E.c.BShouldDisplayEvent(e);
                          }, r),
                          (o =
                            i.m_bInitialLoad &&
                            Object(F.f)("initialEvents", "application_config"))
                            ? [4, n.RegisterCalendarEventsAndModels(o)]
                            : [3, 2]);
                    case 1:
                      return e.sent(), (i.m_bInitialLoad = !1), [3, 4];
                    case 2:
                      return [
                        4,
                        n.RegisterCalendarEventsAndModels({ success: 1 })
                      ];
                    case 3:
                      e.sent(), (e.label = 4);
                    case 4:
                      n.BIsSingleSourceCalendar() &&
                        (n.BIsSingleAppCalendar()
                          ? _.a
                              .GetStoreCapsuleInfo(n.GetSingleAppID())
                              .HintLoadBroadcastAppData()
                          : y.a.LoadOGGClanInfoForClanSteamID(
                              G.a.InitFromClanID(n.GetSingleGroupID())
                            )),
                        (e.label = 5);
                    case 5:
                      return (
                        t &&
                          E.c.InitializeCheckboxes(
                            this.state.bUserIsLoggedIn && F.i.accountid
                          ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.ToggleControlBarCollapsed = function() {
              this.setState(function(e) {
                var t = !e.bControlBarIsCollapsed,
                  a = e.bControlBarIsCollapsed,
                  n = t ? e.nDisappearingHeaderTop : 0,
                  r = Ze();
                return (
                  r && (r.style.transform = "translateY(" + n + "px)"),
                  {
                    bControlBarIsCollapsed: t,
                    bControlBarWasOpenedByUser: a,
                    nDisappearingHeaderTop: n
                  }
                );
              });
            }),
            (e.prototype.OnControlBarChange = function() {
              (this.m_nInitialScrollPosition = null), window.scrollTo(0, 0);
            }),
            (e.prototype.CloseEventModal = function() {
              var e = Ze();
              e &&
                (e.style.transform =
                  "translateY(" + this.state.nDisappearingHeaderTop + "px)"),
                this.props.history.goBack();
            }),
            (e.prototype.OnEventClicked = function(e) {
              x.a.Get().RecordEventRead(e, 8);
              var t,
                a =
                  this.state.nGlobalHeaderHeight +
                  this.state.nSteamLabsBannerHeight,
                n = Ze();
              n && (n.style.transform = "translateY(" + -1 * a + "px)"),
                L.a.bOpenEventLandingPage
                  ? ((t = "/newshub/app/" + e.appid + "/view/" + e.GID),
                    this.props.history.push(t))
                  : (function(e, t) {
                      var a,
                        n = He.a.parse(e.location.search.substring(1));
                      for (var r in t) {
                        t.hasOwnProperty(r) &&
                          (null == (a = t[r])
                            ? (console.log("clearing", r), delete n[r])
                            : (console.log("setting", r, "to", a), (n[r] = a)));
                      }
                      e.push("?" + He.a.stringify(n));
                    })(this.props.history, {
                      emclan: e.clanSteamID.ConvertTo64BitString(),
                      emgid: e.GID
                    });
            }),
            (e.prototype.ToggleFutureView = function() {
              Ue(
                this.props.history,
                "upcoming",
                this.BShowFutureView() ? "false" : "true"
              );
            }),
            (e.prototype.BRequireLoggedInUser = function() {
              return (
                !this.props.filter_to_appids &&
                !this.props.filter_to_clanids &&
                !this.props.filter_to_collection
              );
            }),
            (e.prototype.render = function() {
              var e =
                  this.state.nGlobalHeaderHeight +
                  this.state.nSteamLabsBannerHeight,
                t = this.state.nDisappearingHeaderTop,
                a = t + this.state.nGlobalHeaderHeight,
                n =
                  this.state.nVisibleHeight <= parseInt(z.a.strMinMobileHeight)
                    ? 0
                    : this.state.nDisappearingHeaderTop + e;
              return N.createElement(
                N.Fragment,
                null,
                N.createElement(
                  b.a,
                  null,
                  N.createElement(nt, { nTopOffset: a })
                ),
                N.createElement(
                  "div",
                  { ref: this.m_refDiv, className: z.a.EventCalendarContainer },
                  N.createElement(
                    b.a,
                    null,
                    this.state.modalEvent
                      ? N.createElement(Pe, {
                          classname: z.a.StoreHeaderAdjust,
                          appid: this.state.modalEvent.appid,
                          trackingLocation: 0,
                          announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: B.c,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal
                        })
                      : null
                  ),
                  N.createElement(
                    b.a,
                    null,
                    N.createElement(J, {
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: n,
                      nGlobalHeaderTop: t,
                      nVisibleHeight: this.state.nVisibleHeight,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShouldIncludeLegalFooter: !Ye(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange
                    })
                  ),
                  Boolean(
                    !this.BRequireLoggedInUser() || this.state.bUserIsLoggedIn
                  )
                    ? N.createElement(
                        b.a,
                        null,
                        N.createElement(rt, {
                          bShowFutureViewOnly: this.BShowFutureView(),
                          fnOnEventClick: this.OnEventClicked,
                          fnOnSeeFutureClick: this.ToggleFutureView,
                          fnSetInitialScrollPosition: this.SetInitialScrollTop,
                          nVisibleHeight: this.state.nVisibleHeight,
                          nScrollTop: this.state.nScrollTop,
                          nDisappearingHeaderHeight: e,
                          nDisappearingHeaderVisibleHeight: n,
                          nGroupHeaderHeight: this.state.nGroupHeaderHeight,
                          bSaveSpaceForControlBar: !this.state
                            .bControlBarIsCollapsed
                        })
                      )
                    : N.createElement(
                        b.a,
                        null,
                        N.createElement(
                          "div",
                          { className: z.a.LoginPrompt },
                          Object(P.d)("#EventCalendar_MainLoginPrompt"),
                          N.createElement(
                            "button",
                            { onClick: We.a, className: z.a.LoginButton },
                            Object(P.d)("#Login_SignIn")
                          )
                        )
                      )
                )
              );
            }),
            (e.m_bInitialLoad = !0),
            Object(M.c)([v.a], e.prototype, "OnResize", null),
            Object(M.c)([v.a], e.prototype, "SetInitialScrollTop", null),
            Object(M.c)([v.a], e.prototype, "ScrollToInitialPosition", null),
            Object(M.c)([v.a], e.prototype, "OnScroll", null),
            Object(M.c)([v.a], e.prototype, "ToggleControlBarCollapsed", null),
            Object(M.c)([v.a], e.prototype, "OnControlBarChange", null),
            Object(M.c)([v.a], e.prototype, "CloseEventModal", null),
            Object(M.c)([v.a], e.prototype, "OnEventClicked", null),
            Object(M.c)([v.a], e.prototype, "ToggleFutureView", null),
            (e = i = Object(M.c)([s.a], e))
          );
        })(N.Component),
        et = Object(l.g)($e),
        tt = F.c.STORE_BASE_URL + "labs",
        at = F.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
        nt = function(e) {
          return N.createElement(
            "div",
            {
              style: { transform: "translateY(" + e.nTopOffset + "px)" },
              className: z.a.SteamLabsBanner
            },
            N.createElement(
              "div",
              { className: z.a.SteamLabsBannerCtn },
              N.createElement(
                "div",
                { className: z.a.SteamLabsIdentifiers },
                N.createElement(
                  "a",
                  {
                    className: z.a.SteamLabsName,
                    href: (F.c.IN_CLIENT ? "steam://openurl/" : "") + tt,
                    target: F.c.IN_CLIENT ? void 0 : "_blank"
                  },
                  Object(P.d)("#SteamLabs")
                ),
                N.createElement(
                  "div",
                  { className: z.a.SteamLabsNumber },
                  Object(P.d)("#SteamLabs_ExperimentNumber", "009")
                )
              ),
              N.createElement(
                "a",
                {
                  className: z.a.SteamLabsButton,
                  href: (F.c.IN_CLIENT ? "steam://openurl/" : "") + at,
                  target: F.c.IN_CLIENT ? void 0 : "_blank"
                },
                Object(P.d)("#SteamLabs_DiscussionLink")
              )
            )
          );
        },
        rt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.GetCurrentSectionLayout = function() {
              var t =
                this.props.nDisappearingHeaderHeight +
                parseInt(z.a.strEndOfRowsHeight);
              return Object(A.a)()
                .GetCalendarSections(this.props.bShowFutureViewOnly)
                .map(function(e) {
                  return {
                    section: e,
                    nTopOfSection: t,
                    nBottomOfSection: (t += e.nRenderedHeight)
                  };
                });
            }),
            (t.prototype.RecordSectionRenderedHeight = function(e, t) {
              var a;
              e.bIsFutureSection &&
                !L.a.bEnableNewsHubMayUpdate &&
                ((a = Math.max(
                  0,
                  t +
                    parseInt(z.a.strEndOfRowsHeight) -
                    this.props.nGroupHeaderHeight +
                    this.props.nDisappearingHeaderHeight -
                    this.props.nDisappearingHeaderVisibleHeight
                )),
                this.props.fnSetInitialScrollPosition(a)),
                e.nRenderedHeight != t && (e.nRenderedHeight = t);
            }),
            (t.prototype.render = function() {
              var E = this,
                e = this.props,
                S = e.bShowFutureViewOnly,
                f = e.fnOnEventClick,
                O = e.fnOnSeeFutureClick,
                t = e.nVisibleHeight,
                C = e.nScrollTop,
                w = e.nDisappearingHeaderVisibleHeight,
                T = e.nGroupHeaderHeight,
                a = e.bSaveSpaceForControlBar;
              if (0 == Object(A.a)().GetCalendarSections(S).length) return null;
              var I = qe(),
                k = C + w,
                D = C + t,
                j = !0,
                n = this.GetCurrentSectionLayout().map(function(e, t) {
                  var a = e.section,
                    n = e.nTopOfSection,
                    r = e.nBottomOfSection,
                    o = a.strId,
                    i = a.strSectionLabel,
                    s = a.rtSectionStart,
                    l = a.rtSectionEnd,
                    c = a.bIsFutureSection,
                    d = a.nRenderedHeight,
                    p = Math.max(0, k - r),
                    u = Math.max(0, n - D),
                    m = E.props.nVisibleHeight > Math.max(p, u),
                    h = n < k,
                    v = r - C - T,
                    _ = h ? Math.min(w, v) : 0,
                    b = r - k < 75,
                    g = L.a.bEnableNewsHubMayUpdate
                      ? Object(R.a)(z.a.PastSection, j && z.a.DarkerBackground)
                      : Object(R.a)(
                          c ? z.a.FutureSection : z.a.PastSection,
                          j && z.a.DarkerBackground
                        );
                  0 < d && (j = !j);
                  var y = L.a.bEnableNewsHubMayUpdate && !S && c;
                  return N.createElement(
                    it,
                    {
                      key: o,
                      bShouldRenderContents: m,
                      bRenderStickyHeader: h,
                      nExtraHeaderOffset: _,
                      strSectionLabel: i,
                      rtSectionStart: s,
                      rtSectionEnd: l,
                      strSectionClassname: g,
                      bUseHorizontalLayout: y,
                      fnOnSeeFutureClick: O,
                      bIsFutureSection: c && !L.a.bEnableNewsHubMayUpdate,
                      bShowEarliestFirst: S || y,
                      bIsNearBottom: b,
                      nInitialHeight: d,
                      fnReportHeight: function(e) {
                        return E.RecordSectionRenderedHeight(a, e);
                      },
                      fnOnEventClick: f,
                      bSuppressHoverEffects: I
                    },
                    " "
                  );
                }),
                r = Object(A.a)().BHitEventHorizon(S ? "forward" : "backward"),
                o = N.createElement(
                  "div",
                  {
                    key: "no-more-events",
                    className: Object(R.a)(
                      z.a.EndOfRows,
                      z.a.CalendarRow,
                      r && z.a.Visible
                    )
                  },
                  N.createElement(
                    "div",
                    { className: z.a.NoMoreRows },
                    " ",
                    Object(P.d)(
                      S
                        ? "#EventCalendar_NoMoreFutureEvents"
                        : "#EventCalendar_NoMorePastEvents"
                    ),
                    " "
                  )
                );
              return N.createElement(
                "div",
                {
                  className: Object(R.a)(
                    z.a.RowContainer,
                    a && z.a.WideLeftGutter
                  )
                },
                N.createElement(
                  "div",
                  { className: z.a.Rows },
                  N.createElement("div", {
                    className: Object(R.a)(
                      z.a.DisappearingHeaderSpacer,
                      z.a.FutureSection
                    ),
                    key: "spacer"
                  }),
                  n,
                  o
                )
              );
            }),
            Object(M.c)(
              [v.a],
              t.prototype,
              "RecordSectionRenderedHeight",
              null
            ),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        ot = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                a = e.fnOnEventClick,
                n = e.bSuppressHoverEffects;
              return t && 0 != t.length
                ? N.createElement(
                    "div",
                    { className: z.a.CalendarRow },
                    N.createElement(
                      "div",
                      { className: z.a.HorizontalTileContainer },
                      N.createElement(
                        "div",
                        { className: z.a.HorizontalTiles },
                        t.map(function(e) {
                          return N.createElement(Ae, {
                            key: "ht-" + e.unique_id,
                            calendarEvent: e,
                            partnerEventStore: B.c,
                            fnOnClicked: a,
                            bSuppressHoverEffects: n,
                            bMiniMode: 1 < t.length
                          });
                        })
                      )
                    )
                  )
                : null;
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        it = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = N.createRef()), (e.bNeedToReportHeight = !1), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e = this.m_ref.current.getBoundingClientRect().height;
              this.props.fnReportHeight(e);
            }),
            (e.prototype.componentDidUpdate = function() {
              var e;
              this.m_ref.current &&
                ((e = this.m_ref.current.getBoundingClientRect().height),
                (!this.bNeedToReportHeight && e == this.props.nInitialHeight) ||
                  (this.props.fnReportHeight(e),
                  (this.bNeedToReportHeight = !1)));
            }),
            Object.defineProperty(e.prototype, "cachedCalendarItems", {
              get: function() {
                var e = this;
                return (
                  Object(i.a)(function() {
                    return e.props.bIsFutureSection;
                  }) && (this.bNeedToReportHeight = !0),
                  Object(A.a)().GetCalendarItemsInTimeRange(
                    Object(i.a)(function() {
                      return e.props.rtSectionStart;
                    }),
                    Object(i.a)(function() {
                      return e.props.rtSectionEnd;
                    })
                  )
                );
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.bShouldRenderContents,
                a = e.bRenderStickyHeader,
                n = e.nExtraHeaderOffset,
                r = e.strSectionLabel,
                o = e.strSectionClassname,
                i = e.bUseHorizontalLayout,
                s = e.fnOnSeeFutureClick,
                l = e.bIsFutureSection,
                c = e.bShowEarliestFirst,
                d = e.bIsNearBottom,
                p = e.nInitialHeight,
                u = e.fnOnEventClick,
                m = e.bSuppressHoverEffects;
              if (!t)
                return N.createElement(
                  "div",
                  {
                    ref: this.m_ref,
                    style: { minHeight: p + "px" },
                    className: o
                  },
                  " "
                );
              var h = this.cachedCalendarItems,
                v = h.rgCalendarItems,
                _ = h.bIsComplete;
              if (0 == v.length && _)
                return N.createElement("div", {
                  ref: this.m_ref,
                  className: o
                });
              v.length && c && (v = v.slice().reverse());
              var b = l && d,
                g = N.createElement(
                  "div",
                  {
                    style: { top: n },
                    className: Object(R.a)(
                      z.a.GroupHeader,
                      z.a.CalendarRow,
                      a && z.a.HeaderAtTop,
                      b && z.a.FutureHint
                    )
                  },
                  N.createElement(
                    "div",
                    { className: z.a.GroupHeaderTitle },
                    N.createElement(
                      "span",
                      null,
                      " ",
                      b ? Object(P.d)("#EventCalendar_FutureEventsHint") : r,
                      " "
                    ),
                    i &&
                      3 < v.length &&
                      N.createElement(
                        "div",
                        { className: z.a.SeeAllLink, onClick: s },
                        Object(P.d)("#EventCalendar_FutureEventsLink"),
                        N.createElement(
                          "span",
                          { className: z.a.SeeAllCount },
                          v.length + (_ ? "" : "+")
                        )
                      )
                  )
                ),
                y = i
                  ? N.createElement(ot, {
                      rgCalendarItems: v.slice(0, 3),
                      fnOnEventClick: u,
                      bSuppressHoverEffects: m
                    })
                  : v.map(function(e) {
                      return N.createElement(
                        "div",
                        { key: e.unique_id, className: z.a.CalendarRow },
                        N.createElement(Ae, {
                          calendarEvent: e,
                          partnerEventStore: B.c,
                          fnOnClicked: u,
                          bSuppressHoverEffects: m
                        })
                      );
                    });
              return N.createElement(
                "div",
                { ref: this.m_ref, className: o },
                !l || _
                  ? null
                  : N.createElement(Q.a, {
                      size: "xlarge",
                      position: "center"
                    }),
                g,
                y,
                l || _ || i
                  ? null
                  : N.createElement(Q.a, { size: "xlarge", position: "center" })
              );
            }),
            Object(M.c)([m.j], e.prototype, "cachedCalendarItems", null),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        st = a("AXHe"),
        lt = a("Cs6D"),
        ct = a("3+zv");
      ((Xe = Ke = Ke || {})[(Xe.k_ModReviewed = 0)] = "k_ModReviewed"),
        (Xe[(Xe.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (Xe[(Xe.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (Xe[(Xe.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (Xe[(Xe.k_ModReReviewed = 4)] = "k_ModReReviewed");
      var dt = "ModAct",
        pt = (function() {
          function e() {}
          return (
            (e.prototype.ToModString = function() {
              var e =
                dt +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case Ke.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case Ke.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function(e) {
              var t = e.split("_");
              if (!t || t[0] !== dt) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case Ke.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case Ke.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = F.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = Ke.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = F.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? Ke.k_ModReviewed : Ke.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = F.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? Ke.k_ModReReviewed : Ke.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(dt);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = F.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = Ke.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        ut = new ((function() {
          function e() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          return (
            (e.prototype.BHasSolrEvent = function(e) {
              return this.m_mapEventGIDToSolrData.has(e);
            }),
            (e.prototype.GetAllSolrEvents = function() {
              return this.m_listEvents;
            }),
            (e.prototype.ClearAllSolrEvents = function() {
              (this.m_mapEventGIDToSolrData = new Map()),
                (this.m_listEvents = new Array());
            }),
            (e.prototype.LoadPartnerEventForModerationIncremental = function(
              r,
              o,
              i,
              s,
              l,
              c,
              d,
              p,
              u
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(M.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n = this;
                  return Object(M.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(r, o, i, s, l, c, d, p, u)
                        ];
                      case 1:
                        return (
                          (t = e.sent()),
                          (a = new Array()),
                          Object(m.z)(function() {
                            t.forEach(function(e) {
                              n.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                (a.push(e),
                                n.m_mapEventGIDToSolrData.set(e.unique_id, e),
                                n.m_listEvents.push(e));
                            });
                          }),
                          [2, a]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.GetLatestPartnerEvents = function(
              r,
              o,
              i,
              s,
              l,
              c,
              d,
              p,
              u,
              m,
              h,
              v
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(M.b)(this, void 0, void 0, function() {
                  var t, a, n;
                  return Object(M.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            F.c.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (a = {
                            page: o,
                            count: i,
                            date: d,
                            appids: void 0 === s ? void 0 : s.join(","),
                            required_tags: void 0 === l ? void 0 : l.join(","),
                            exclude_tags: void 0 === c ? void 0 : c.join(","),
                            eventtypefilter:
                              void 0 === p ? void 0 : p.join(","),
                            orderByVisibility: u || void 0,
                            creator_home_clan_id:
                              void 0 === m ? void 0 : m.join(","),
                            showUnpublished: void 0 === v ? void 0 : v,
                            term: void 0 === h ? void 0 : h
                          }),
                          [
                            4,
                            g.a.get(t, {
                              params: a,
                              withCredentials: !0,
                              cancelToken: r ? r.token : void 0
                            })
                          ]
                        );
                      case 1:
                        return [2, (n = e.sent()).data ? n.data.docs : []];
                    }
                  });
                })
              );
            }),
            (e.prototype.UpdateTagsOnPartnerEvent = function(r, o, i, s, l, c) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          F.c.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (a = s.join(",")),
                        c &&
                          (0 < s.length && (a += ","), (a += c.ToModString())),
                        (n = new FormData()).append("sessionid", F.c.SESSIONID),
                        n.append("clan_accountid", "" + o.GetAccountID()),
                        n.append("gid_announcement", i),
                        n.append("add_tags", a),
                        n.append("remove_tags", l.join(",")),
                        [
                          4,
                          g.a.post(t, n, {
                            withCredentials: !0,
                            cancelToken: r.token
                          })
                        ]
                      );
                    case 1:
                      return [2, e.sent().data.tags];
                  }
                });
              });
            }),
            (e.prototype.UpdatePartnerEventType = function(n, r, o, i) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          F.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (a = new FormData()).append("sessionid", F.c.SESSIONID),
                        a.append("clan_accountid", "" + r.GetAccountID()),
                        a.append("gid_event", o),
                        a.append("new_event_type", "" + i),
                        [
                          4,
                          g.a.post(t, a, {
                            withCredentials: !0,
                            cancelToken: n.token
                          })
                        ]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            Object(M.c)([m.x], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(M.c)([m.x], e.prototype, "m_listEvents", void 0),
            Object(M.c)([m.h], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })())(),
        mt = a("Qcoi"),
        ht = a("T27q"),
        vt = a("BpzF"),
        _t = a("fpVW"),
        bt = a.n(_t),
        gt = a("UxvL"),
        yt = a("E9gz"),
        Et = a("dsx8"),
        St = a("f0Wu"),
        ft = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0
        },
        Ot = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = g.a.CancelToken.source()),
              (e.m_refScroll = N.createRef()),
              (e.m_IntervalTimer = void 0),
              (e.state = {
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !1,
                nLastFetchCompletedMS: 0,
                selectedTags: void 0,
                excludedTags: void 0,
                filterDate: void 0,
                eventsToLoadPerPaging: 20,
                filterEventTypes: void 0,
                bOrderByVisibilityStartTime: !1
              }),
              (e.m_nPage = 0),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0);
              var e = He.a.parse(
                  this.props.history.location.search.substring(1)
                ),
                t = void 0;
              "string" == typeof e.selectedTags
                ? 0 < e.selectedTags.length &&
                  (t = [{ label: e.selectedTags, value: e.selectedTags }])
                : e.selectedTags &&
                  ((t = []),
                  e.selectedTags.forEach(function(e) {
                    return t.push({ label: e, value: e });
                  }));
              var a = void 0;
              "string" == typeof e.excludedTags
                ? 0 < e.excludedTags.length &&
                  (a = [{ label: e.excludedTags, value: e.excludedTags }])
                : e.excludedTags &&
                  ((a = []),
                  e.excludedTags.forEach(function(e) {
                    return a.push({ label: e, value: e });
                  }));
              var n,
                r = void 0;
              "string" == typeof e.eventtype
                ? 0 < e.eventtype.length &&
                  ((n = Number.parseInt(e.eventtype)),
                  (r = [{ label: Object(me.b)(n), value: n }]))
                : e.excludedTags &&
                  ((r = []),
                  e.excludedTags.forEach(function(e) {
                    var t = Number.parseInt(e);
                    r.push({ label: Object(me.b)(t), value: t });
                  }));
              var o = void 0;
              "string" == typeof e.filterDate &&
                0 < e.filterDate.length &&
                (o = St.unix(Number(e.filterDate)));
              var i = !1;
              "string" == typeof e.orderByVisibility &&
                0 < e.orderByVisibility.length &&
                (i = Boolean(e.orderByVisibility)),
                this.setState({
                  selectedTags: t,
                  excludedTags: a,
                  filterEventTypes: r,
                  filterDate: o,
                  bOrderByVisibilityStartTime: i
                });
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "EventModerationLanding component unmounted"
              ),
                window.removeEventListener("scroll", this.OnScroll),
                this.ClearTimer();
            }),
            (e.prototype.HandleUpdateQueryParameter = function() {
              var e, t, a, n, r, o;
              this.props.history &&
                ((t = (e = this.state).selectedTags),
                (a = e.excludedTags),
                (n = e.filterEventTypes),
                (r = e.filterDate),
                (o = e.bOrderByVisibilityStartTime),
                t || a || n || r || o
                  ? this.props.history.push(
                      "?" +
                        He.a.stringify({
                          selectedTags:
                            t && 0 < t.length
                              ? t.map(function(e) {
                                  return e.value;
                                })
                              : null,
                          excludedTags:
                            a && 0 < a.length
                              ? a.map(function(e) {
                                  return e.value;
                                })
                              : null,
                          eventtype:
                            n && 0 < n.length
                              ? n.map(function(e) {
                                  return "" + e.value;
                                })
                              : null,
                          filterDate: r && 0 < r.unix() ? "" + r.unix() : null,
                          orderByVisibility: o ? "1" : null
                        })
                    )
                  : this.props.history.push("?"));
            }),
            (e.prototype.ClearTimer = function() {
              this.m_IntervalTimer &&
                (window.clearInterval(this.m_IntervalTimer),
                (this.m_IntervalTimer = void 0));
            }),
            (e.prototype.HandleError = function(e) {
              var t = Object(Re.a)(e);
              console.error(
                "EventModerationLanding error: " + t.strErrorMsg,
                t
              ),
                this.setState({
                  bInfiniteScrollLoading: !1,
                  bExhaustedEventList: !0,
                  nLastFetchCompletedMS: Date.now()
                });
            }),
            (e.prototype.LoadMorePublicEventWithDelay = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                return Object(M.e)(this, function(e) {
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
            (e.prototype.LoadMoreModerationEvents = function() {
              var e,
                t,
                a,
                n = this;
              this.ClearTimer(),
                this.state.bInfiniteScrollLoading &&
                  ((e = this.state.filterEventTypes
                    ? this.state.filterEventTypes.map(function(e) {
                        return e.value;
                      })
                    : void 0),
                  (t = this.state.selectedTags
                    ? this.state.selectedTags.map(function(e) {
                        return e.value;
                      })
                    : void 0),
                  (a = this.state.excludedTags
                    ? this.state.excludedTags.map(function(e) {
                        return e.value;
                      })
                    : void 0),
                  ut
                    .LoadPartnerEventForModerationIncremental(
                      this.m_cancelSignal,
                      this.m_nPage,
                      this.state.eventsToLoadPerPaging,
                      [this.props.appid],
                      t,
                      a,
                      this.state.filterDate,
                      e,
                      this.state.bOrderByVisibilityStartTime
                    )
                    .then(function(e) {
                      (n.m_nPage += n.state.eventsToLoadPerPaging),
                        n.setState({
                          bInfiniteScrollLoading: !1,
                          bExhaustedEventList: 0 == e.length,
                          nLastFetchCompletedMS: Date.now()
                        });
                    })
                    .catch(function(e) {
                      return n.HandleError(e);
                    }));
            }),
            (e.prototype.UpdateQueryParametersAndLoadMoreEvents = function() {
              this.HandleUpdateQueryParameter(),
                this.LoadMoreModerationEvents();
            }),
            (e.prototype.RenderTiles = function() {
              var t = new Array();
              return (
                ut.GetAllSolrEvents().forEach(function(e) {
                  t.push(
                    N.createElement(wt, { solrData: e, key: e.unique_id })
                  );
                }),
                t
              );
            }),
            (e.prototype.OnScroll = function() {
              var e;
              this.m_refScroll &&
                this.m_refScroll.current &&
                ((e = this.m_refScroll.current) &&
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
                          )))));
            }),
            (e.prototype.ClearPreviousData = function() {
              (this.m_nPage = 0), ut.ClearAllSolrEvents();
            }),
            (e.prototype.OnDateChange = function(e) {
              if ("string" == typeof e) {
                var t = St(e, "M/D/YYYY", !0);
                if (!t.isValid())
                  return void this.setState({ filterDateAsString: e });
                e = t;
              }
              this.state.filterDate != e &&
                (this.ClearPreviousData(),
                this.setState(
                  Object(M.a)(
                    { filterDateAsString: void 0, filterDate: e },
                    ft
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                ));
            }),
            (e.prototype.IsValidDate = function(e) {
              var t = new Date();
              return (
                e.unix() <
                St.unix(t.getTime() / 1e3 + 86400)
                  .hour(0)
                  .seconds(0)
                  .minute(0)
                  .unix()
              );
            }),
            (e.prototype.OnEventPerPageLoad = function(e) {
              var t = Number.parseInt(e.currentTarget.value);
              t &&
                0 < t &&
                t != this.state.eventsToLoadPerPaging &&
                this.setState({ eventsToLoadPerPaging: t });
            }),
            (e.prototype.OnChangeEventSelectedTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(M.a)({ selectedTags: e }, ft),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventExcludeTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(M.a)({ excludedTags: e }, ft),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventTypeFilter = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(M.a)({ filterEventTypes: e }, ft),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnVisibilityStartTimeChange = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(M.a)(
                    { bOrderByVisibilityStartTime: e.currentTarget.checked },
                    ft
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = d.c.map(function(e) {
                  return { value: e, label: Object(me.b)(e) };
                }),
                a = ct.a.map(function(e) {
                  return { value: e, label: e };
                }),
                n = {
                  option: function(e) {
                    return Object(M.a)(Object(M.a)({}, e), {
                      color: "#444444"
                    });
                  }
                };
              return N.createElement(
                "div",
                { className: yt.ModerationContainer, ref: this.m_refScroll },
                N.createElement(
                  "div",
                  null,
                  N.createElement(
                    "h2",
                    null,
                    Object(P.d)("#EventModeration_Title")
                  ),
                  N.createElement(
                    b.a,
                    null,
                    N.createElement(
                      "div",
                      { className: Object(R.a)(bt.a.FlexRowContainer) },
                      N.createElement(
                        "div",
                        { className: yt.FilterContainer },
                        N.createElement(
                          "span",
                          null,
                          Object(P.d)("#EventModeration_FilterByTag")
                        ),
                        N.createElement(lt.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventSelectedTags,
                          value: this.state.selectedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      N.createElement(
                        "div",
                        { className: yt.FilterContainer },
                        N.createElement(
                          "span",
                          null,
                          Object(P.d)("#EventModeration_FilterExcludeByTag")
                        ),
                        N.createElement(lt.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventExcludeTags,
                          value: this.state.excludedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      N.createElement(
                        "div",
                        { className: yt.FilterContainer },
                        N.createElement(
                          "span",
                          null,
                          Object(P.d)("#EventModeration_FilterToType")
                        ),
                        N.createElement(lt.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventTypeFilter,
                          value: this.state.filterEventTypes,
                          options: t,
                          styles: n
                        })
                      ),
                      N.createElement(
                        "div",
                        { className: yt.FilterContainer },
                        N.createElement(
                          "span",
                          null,
                          Object(P.d)("#EventModeration_FilterToDate")
                        ),
                        N.createElement(st, {
                          onChange: this.OnDateChange,
                          timeFormat: !1,
                          value: this.state.filterDate,
                          isValidDate: this.IsValidDate,
                          inputProps: {
                            placeholder: Object(P.d)(
                              "#EventModeration_PickDatee"
                            ),
                            className: yt.TimeWidth
                          }
                        })
                      ),
                      N.createElement(
                        "div",
                        { className: yt.FilterContainer },
                        N.createElement(
                          "label",
                          { htmlFor: "EventPerLoad" },
                          Object(P.d)("#EventModeration_PerPageLoad")
                        ),
                        N.createElement(
                          "div",
                          null,
                          N.createElement("input", {
                            type: "number",
                            id: "EventPerLoad",
                            min: "10",
                            max: "5000",
                            value: this.state.eventsToLoadPerPaging,
                            onChange: this.OnEventPerPageLoad
                          })
                        )
                      ),
                      N.createElement(
                        "div",
                        { className: yt.FilterContainer },
                        N.createElement("input", {
                          type: "checkbox",
                          id: "VisibilityStart",
                          checked: this.state.bOrderByVisibilityStartTime,
                          onChange: this.OnVisibilityStartTimeChange
                        }),
                        N.createElement(
                          "label",
                          { htmlFor: "VisibilityStart" },
                          Object(P.d)("#EventModeration_OrderByFirstVisible")
                        )
                      )
                    )
                  )
                ),
                N.createElement(b.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  N.createElement(Q.a, {
                    position: "center",
                    size: "medium",
                    string: Object(P.d)("#Loading")
                  })
              );
            }),
            Object(M.c)([v.a], e.prototype, "HandleError", null),
            Object(M.c)(
              [v.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(M.c)([v.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(M.c)(
              [v.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(M.c)([v.a], e.prototype, "OnScroll", null),
            Object(M.c)([v.a], e.prototype, "OnDateChange", null),
            Object(M.c)([v.a], e.prototype, "IsValidDate", null),
            Object(M.c)([v.a], e.prototype, "OnEventPerPageLoad", null),
            Object(M.c)([v.a], e.prototype, "OnChangeEventSelectedTags", null),
            Object(M.c)([v.a], e.prototype, "OnChangeEventExcludeTags", null),
            Object(M.c)([v.a], e.prototype, "OnChangeEventTypeFilter", null),
            Object(M.c)(
              [v.a],
              e.prototype,
              "OnVisibilityStartTimeChange",
              null
            ),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        Ct = Object(l.g)(Ot),
        wt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !B.c.BHasClanEventModel(
                  e.props.solrData.unique_id
                ),
                bShowAsModal: !1,
                bSavingModeration: !1
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e,
                a = this,
                t = this.props.solrData,
                n = t.unique_id;
              B.c.BHasClanEventModel(n) ||
                ((e = Date.now() / 1e3),
                B.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new G.a(t.clan_steamid),
                    n,
                    e
                  )
                  .then(function() {
                    return a.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(Re.a)(e);
                    console.error(
                      "EventModerationTile: Event Load: " + t.strErrorMsg,
                      t
                    ),
                      a.setState({ bLoadingEvent: !1 });
                  }));
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "EventModerationTile component unmounted"
              );
            }),
            (e.prototype.ShowModalEvent = function() {
              var e = this.props.solrData.unique_id;
              !this.state.bLoadingEvent &&
                B.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function(e) {
              var t, a, n, r;
              this.state.bSavingModeration ||
                ((t = this.props.solrData.unique_id),
                (a = B.c.GetClanEventModel(t)),
                (n = e.target.checked),
                (r =
                  !a.BHasTag("mod_reviewed") ||
                  a.BHasTag("mod_require_rereview")),
                a &&
                  n === r &&
                  this.setState(
                    { bSavingModeration: !0 },
                    this.ApplyModerationToggle
                  ));
            }),
            (e.prototype.ApplyModerationToggle = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, s, l, c, d;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (a = t.unique_id),
                        (n = B.c.GetClanEventModel(a)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (r = new Array()),
                        (o = new Array()),
                        (i =
                          n.BHasTag("mod_reviewed") &&
                          !n.BHasTag("mod_require_rereview")),
                        (s = new pt().SetReviewAction(!i)),
                        i
                          ? r.push("mod_require_rereview")
                          : (r.push("mod_reviewed"),
                            o.push("mod_require_rereview"),
                            n.BHasTag("mod_require_rereview") &&
                              s.SetReReviewAction(!i)),
                        [
                          4,
                          ut.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            r,
                            o,
                            s
                          )
                        ]
                      );
                    case 2:
                      return (l = e.sent()), (n.vecTags = l), [3, 4];
                    case 3:
                      return (
                        (c = e.sent()),
                        (d = Object(Re.a)(c)),
                        console.error(
                          "EventModerationTile " + d.strErrorMsg,
                          d
                        ),
                        [3, 4]
                      );
                    case 4:
                      return this.setState({ bSavingModeration: !1 }), [2];
                  }
                });
              });
            }),
            (e.prototype.OnChangeCategory = function(e) {
              var t = this.props.solrData,
                a = B.c.GetClanEventModel(t.unique_id);
              Object(ye.d)(
                N.createElement(At, { eventModel: a }),
                Object(Se.o)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                a = B.c.GetClanEventModel(t.unique_id);
              Object(ye.d)(
                N.createElement(Gt, { eventModel: a }),
                Object(Se.o)(e)
              );
            }),
            (e.prototype.render = function() {
              var e = this.props.solrData,
                t = e.unique_id,
                a = Number(e.appid),
                n = Object(d.e)(F.c.LANGUAGE),
                r = B.c.GetClanEventModel(t);
              if (r) {
                if (this.state.bShowAsModal)
                  return N.createElement(
                    Ee.g,
                    { className: Et.StoreHeaderAdjust },
                    N.createElement(
                      "div",
                      null,
                      N.createElement(ht.b, {
                        event: r,
                        fnClose: this.HideModalEvent
                      })
                    )
                  );
                var o = r.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    n,
                    ne.c.capsule_main
                  ),
                  i = r.BImageNeedScreenshotFallback("capsule", n),
                  s =
                    0 < o.length
                      ? N.createElement(
                          N.Fragment,
                          null,
                          N.createElement(gt.a, { rgSources: o }),
                          i &&
                            N.createElement(
                              "div",
                              { className: yt.NoCapsule },
                              Object(P.d)("#EventModTile_FallbackImageText")
                            )
                        )
                      : N.createElement(
                          "div",
                          { className: yt.NoCapsule },
                          Object(P.d)("#EventModTile_NoCapsule")
                        );
              } else s = Object(P.d)("#Loading");
              var l = e.hidden
                  ? e.published
                    ? Object(P.d)("#EVentModTile_State_Staged")
                    : Object(P.d)("#EVentModTile_State_Draft")
                  : Object(P.d)("#EVentModTile_State_Published"),
                c = r ? r.type : Number(e.event_type);
              return N.createElement(
                b.a,
                null,
                N.createElement(
                  "div",
                  { className: yt.Tile },
                  N.createElement(
                    "div",
                    { className: yt.TileCapsule, onClick: this.ShowModalEvent },
                    s
                  ),
                  N.createElement(
                    "div",
                    { className: yt.TileDetails },
                    N.createElement(
                      "div",
                      { className: yt.DetailsLeft },
                      N.createElement("div", null, l),
                      N.createElement(
                        "a",
                        {
                          href:
                            (F.c.IN_CLIENT ? "steam://openurl/" : "") +
                            F.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            a +
                            "/announcements/detail/" +
                            e.announcement_gid,
                          target: F.c.IN_CLIENT ? void 0 : "_blank",
                          className: yt.EventTitle
                        },
                        e.event_name
                      ),
                      N.createElement(
                        "div",
                        {
                          className: Object(R.a)(
                            1 == c ? yt.TileEventOtherType : ""
                          )
                        },
                        r ? r.GetCategoryAsString() : e.event_type
                      ),
                      this.state.bLoadingEvent &&
                        N.createElement(Q.a, {
                          size: "small",
                          string: Object(P.d)("#Loading")
                        }),
                      N.createElement(It, {
                        accountID: Number(e.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        e.updator_accountid &&
                          0 < Number(e.updator_accountid) &&
                          e.updator_accountid != e.creator_accountid
                      ) &&
                        N.createElement(It, {
                          accountID: Number(e.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      N.createElement(Dt, {
                        appid: a,
                        clanSteamID: new G.a(e.clan_steamid)
                      })
                    ),
                    r &&
                      N.createElement(
                        N.Fragment,
                        null,
                        N.createElement(
                          "div",
                          { className: yt.DetailsMiddle },
                          N.createElement(
                            "div",
                            { className: yt.ModeratedFlagCtn },
                            N.createElement("input", {
                              type: "checkbox",
                              id: r.GID + "_moderated",
                              checked: Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ),
                              onChange: this.OnModeratedChanged
                            }),
                            N.createElement(
                              "label",
                              { htmlFor: r.GID + "_moderated" },
                              this.state.bSavingModeration &&
                                N.createElement(Q.a, { size: "small" }),
                              Boolean(!r.BHasTag("mod_reviewed")) &&
                                Object(P.d)("#EventModTile_Moderated_Review"),
                              Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ) && Object(P.d)("#EventModTile_Moderated"),
                              Boolean(r.BHasTag("mod_require_rereview")) &&
                                Object(P.d)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          N.createElement(
                            "button",
                            {
                              className: Object(R.a)(bt.a.Button, yt.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(P.d)("#EventModTile_ChangeEventType")
                          ),
                          r.BHasTag("halloween2019candidate") &&
                            N.createElement(
                              "button",
                              {
                                className: Object(R.a)(bt.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(P.d)("#EventModTile_SeasonalTag")
                            ),
                          N.createElement(Lt, { eventModel: r })
                        ),
                        N.createElement(
                          "div",
                          { className: yt.DetailsRight },
                          N.createElement(vt.b, {
                            event: r,
                            stylesmodule: yt,
                            nOverrideEndTime: r.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: r.GetStartTimeAndDateUnixSeconds()
                          }),
                          N.createElement(kt, { event: r }),
                          N.createElement(jt, { event: r })
                        )
                      )
                  )
                )
              );
            }),
            Object(M.c)([v.a], e.prototype, "ShowModalEvent", null),
            Object(M.c)([v.a], e.prototype, "HideModalEvent", null),
            Object(M.c)([v.a], e.prototype, "OnModeratedChanged", null),
            Object(M.c)([v.a], e.prototype, "ApplyModerationToggle", null),
            Object(M.c)([v.a], e.prototype, "OnChangeCategory", null),
            Object(M.c)([v.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component);
      function Tt(e) {
        return G.a.InitFromAccountID(e).ConvertTo64BitString();
      }
      var It = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                userProfile: mt.a.GetProfile(Tt(e.props.accountID)),
                bLoadingProfile: !mt.a.BHasProfile(Tt(e.props.accountID))
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.bLoadingProfile && this.LoadProfile();
            }),
            (e.prototype.LoadProfile = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = Tt(this.props.accountID)), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, mt.a.LoadProfiles([t])]
                      );
                    case 2:
                      return e.sent(), [3, 4];
                    case 3:
                      return (
                        (a = e.sent()),
                        (n = Object(Re.a)(a)),
                        console.error(
                          "EventModerationTile profile load : " + n.strErrorMsg,
                          n
                        ),
                        [3, 4]
                      );
                    case 4:
                      return (
                        this.m_cancelSignal.token.reason ||
                          this.setState({
                            userProfile: mt.a.GetProfile(t),
                            bLoadingProfile: !1
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.accountID,
                a = e.locToken,
                n = this.state.userProfile,
                r =
                  (F.c.IN_CLIENT ? "steam://openurl/" : "") +
                  "https://steamsupport.valvesoftware.com/account/overview/" +
                  Tt(this.props.accountID);
              return N.createElement(
                "div",
                null,
                Object(P.k)(
                  a,
                  N.createElement(
                    "a",
                    { href: r, target: F.c.IN_CLIENT ? void 0 : "_blank" },
                    Boolean(n)
                      ? N.createElement(N.Fragment, null, n.persona_name)
                      : N.createElement(
                          N.Fragment,
                          null,
                          this.state.bLoadingProfile &&
                            N.createElement(Q.a, { size: "small" }),
                          N.createElement("span", null, t)
                        )
                  )
                )
              );
            }),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        kt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.CountLanguages = function(e) {
              var t = 0;
              if (e && 0 < e.length)
                for (var a = 0; a < e.length && a < 29; ++a)
                  e[a] && 0 < e[a].length && (t += 1);
              return t;
            }),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props.event;
              B.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function(e) {
                  a.m_cancelSignal.token.reason ||
                    a.setState({ nLocLanguages: e.length });
                })
                .catch(function(e) {
                  var t = Object(Re.a)(e);
                  console.log(
                    "EventInspection.LoadLoc : error " + t.strErrorMsg,
                    t
                  ),
                    a.m_cancelSignal.token.reason ||
                      a.setState({ nLocLanguages: -1 });
                });
            }),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = this.CountLanguages(e.jsondata.localized_title_image),
                a = this.CountLanguages(e.jsondata.localized_capsule_image),
                n = this.CountLanguages(e.jsondata.localized_spotlight_image),
                r = Math.max(
                  this.CountLanguages(
                    e.jsondata.localized_broadcast_left_image
                  ),
                  this.CountLanguages(
                    e.jsondata.localized_broadcast_right_image
                  )
                ),
                o = t + a + n + r,
                i = this.CountLanguages(e.jsondata.localized_summary),
                s = this.CountLanguages(e.jsondata.localized_subtitle);
              return N.createElement(
                "div",
                { className: yt.AnalysisCtn },
                N.createElement(
                  "div",
                  { className: yt.TileTitle },
                  Object(P.d)("#EventModTile_Analysis")
                ),
                N.createElement(
                  "div",
                  null,
                  Object(P.d)("#EventModTile_Stats_Comments", e.nCommentCount)
                ),
                N.createElement(
                  "div",
                  null,
                  Object(P.d)("#EventModTile_Stats_VoteUp", e.nVotesUp)
                ),
                N.createElement(
                  "div",
                  null,
                  Object(P.d)("#EventModTile_Stats_VoteDown", e.nVotesDown)
                ),
                Boolean(t) &&
                  N.createElement(
                    "div",
                    { className: yt.ArtHeader },
                    Object(P.d)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(a) &&
                  N.createElement(
                    "div",
                    null,
                    Object(P.d)("#EventModTile_ImageAnalysis_Capsule", a),
                    " "
                  ),
                Boolean(n) &&
                  N.createElement(
                    "div",
                    { className: yt.ArtSpotlight },
                    Object(P.d)("#EventModTile_ImageAnalysis_Spotlight", n),
                    " "
                  ),
                Boolean(r) &&
                  N.createElement(
                    "div",
                    null,
                    Object(P.d)("#EventModTile_ImageAnalysis_Broadcast", r),
                    " "
                  ),
                0 == o &&
                  N.createElement(
                    "div",
                    { className: yt.AnalysisMissing },
                    Object(P.d)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  N.createElement(Q.a, {
                    size: "small",
                    string: Object(P.d)("#EventModTile_LoadingLocs")
                  }),
                0 < this.state.nLocLanguages &&
                  N.createElement(
                    "div",
                    null,
                    Object(P.d)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages
                    )
                  ),
                Boolean(i) &&
                  N.createElement(
                    "div",
                    null,
                    Object(P.d)("#EventModTile_Languages_Summary", i),
                    " "
                  ),
                Boolean(s) &&
                  N.createElement(
                    "div",
                    null,
                    Object(P.d)("#EventModTile_Languages_Subtitle", s),
                    " "
                  )
              );
            }),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        Dt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingAppInfo: !_.a.BIsAppidLoaded(e.props.appid)
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props,
                t = e.appid,
                n = e.clanSteamID;
              _.a.BIsAppidLoaded(t) ||
                _.a
                  .EnsureStoreCapsuleInfoLoaded(t)
                  .then(function() {
                    a.m_cancelSignal.token.reason ||
                      a.setState({ bLoadingAppInfo: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(Re.a)(e);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + t.strErrorMsg,
                      t
                    ),
                      a.m_cancelSignal.token.reason ||
                        a.setState({ bLoadingAppInfo: !1 });
                  }),
                n && y.a.LoadOGGClanInfoForClanSteamID(n);
            }),
            (e.prototype.render = function() {
              if (this.state.bLoadingAppInfo)
                return N.createElement(Q.a, {
                  size: "small",
                  string: Object(P.d)("#EventModTile_AppInfoLoading")
                });
              var e = this.props,
                t = e.appid,
                a = e.clanSteamID;
              if (t) {
                var n = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                return N.createElement(
                  "div",
                  { className: yt.TileAppInfo },
                  N.createElement(
                    "div",
                    { className: yt.TileAppInfoTitle },
                    N.createElement(
                      O.a,
                      { href: n.capsule_link },
                      N.createElement("img", {
                        className: yt.TileAppInfoImage,
                        src: n.capsule
                      }),
                      N.createElement(
                        "div",
                        null,
                        Object(P.d)("#EventModTile_GameName", n.title)
                      )
                    )
                  ),
                  N.createElement(
                    "div",
                    null,
                    Object(P.d)("#EventModTile_ReleaseDate", n.release)
                  )
                );
              }
              if (a) {
                var r = a.GetAccountID(),
                  o = y.a.GetClanInfoByClanAccountID(r);
                if (o && o.is_curator)
                  return N.createElement(
                    "div",
                    { className: yt.TileAppInfo },
                    N.createElement(
                      "div",
                      { className: yt.TileAppInfoTitle },
                      N.createElement(
                        O.a,
                        { href: F.c.STORE_BASE_URL + "/curator/" + r + "/" },
                        N.createElement("img", {
                          className: yt.TileAppInfoImage,
                          src: o.avatar_full_url
                        }),
                        N.createElement(
                          "div",
                          null,
                          Object(P.d)("#EventModTile_CuratorName", o.group_name)
                        )
                      )
                    )
                  );
              }
              return null;
            }),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        jt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(ct.d)(e),
                a = Object(ct.c)(e),
                n = Object(ct.e)(e),
                r =
                  n && !e.BHasTag("hide_store") && !e.BHasTag("mod_hide_store"),
                o =
                  t &&
                  !e.BHasTag("hide_library_overview") &&
                  !e.BHasTag("mod_hide_library_overview"),
                i =
                  a &&
                  !e.BHasTag("hide_library_detail") &&
                  !e.BHasTag("mod_hide_library_detail");
              return N.createElement(
                "div",
                { className: yt.VisibiltyCtn },
                N.createElement(
                  "div",
                  { className: yt.TileTitle },
                  Object(P.d)("#EventModTile_Visibility")
                ),
                N.createElement(
                  "div",
                  null,
                  Object(P.d)(
                    "#EventModTile_Store_Visibility",
                    r
                      ? Object(P.d)("#WriteReview_Dialog_Yes")
                      : Object(P.d)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : n
                      ? Object(P.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_store")
                      ? Object(P.d)("#EventModTime_Hidden_OptOut")
                      : Object(P.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                N.createElement(
                  "div",
                  null,
                  Object(P.d)(
                    "#EventModTile_LibraryHome_Visibility",
                    o
                      ? Object(P.d)("#WriteReview_Dialog_Yes")
                      : Object(P.d)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : n
                      ? Object(P.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_overview")
                      ? Object(P.d)("#EventModTime_Hidden_OptOut")
                      : Object(P.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                N.createElement(
                  "div",
                  null,
                  Object(P.d)(
                    "#EventModTile_LibraryDetail_Visibility",
                    i
                      ? Object(P.d)("#WriteReview_Dialog_Yes")
                      : Object(P.d)("#WriteReview_Dialog_No"),
                    i
                      ? ""
                      : n
                      ? Object(P.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_detail")
                      ? Object(P.d)("#EventModTime_Hidden_OptOut")
                      : Object(P.d)("#EventModTime_Hidden_Moderator")
                  )
                )
              );
            }),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        At = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(me.b)(34),
                  value: { eventType: 34 }
                }
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.ChangeCategoryForEvent = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, s, l, c, d;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props),
                        (a = t.eventModel),
                        (n = t.closeModal),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 4, , 5]),
                        (r = this.state.newCategoryOption),
                        (o = r.value.eventType),
                        [
                          4,
                          ut.UpdatePartnerEventType(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GID,
                            o
                          )
                        ]
                      );
                    case 2:
                      return (
                        e.sent(),
                        (i = ct.n),
                        (s = []),
                        r.value.tags &&
                          r.value.tags.forEach(function(e) {
                            s.push(e);
                            var t = new pt()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            s.push(t);
                          }),
                        [
                          4,
                          ut.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GetAnnouncementGID(),
                            s,
                            i,
                            new pt().SetActionChangeEvent(o)
                          )
                        ]
                      );
                    case 3:
                      return (
                        (l = e.sent()),
                        Object(m.z)(function() {
                          (a.type = o), (a.vecTags = l);
                        }),
                        this.setState({ bUpdating: !1 }, n),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (c = e.sent()),
                        (d = Object(Re.a)(c)),
                        console.error(
                          "ChangeEventTypeDialog error " + d.strErrorMsg,
                          d
                        ),
                        this.setState({
                          bUpdating: !1,
                          strErrorMsg: d.strErrorMsg
                        }),
                        [3, 5]
                      );
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnChangeSelection = function(e) {
              this.setState({ newCategoryOption: e });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.eventModel,
                n = t.closeModal,
                r = d.c
                  .filter(function(e) {
                    return 1 == e || 4 == e || 9 <= e;
                  })
                  .map(function(e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(me.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(P.d)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"]
                  }
                }),
                r.push({
                  label: Object(P.d)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] }
                }),
                N.createElement(
                  Ee.b,
                  {
                    strTitle: Object(P.d)("#EventModTile_ChangeEventType"),
                    strDescription: Object(P.d)(
                      "#EventModTile_ChangeEventType_Desc",
                      a.GetEventTypeAsString()
                    ),
                    onCancel: n,
                    onOK: function() {
                      return e.setState(
                        { bUpdating: !0 },
                        e.ChangeCategoryForEvent
                      );
                    }
                  },
                  N.createElement(
                    N.Fragment,
                    null,
                    N.createElement(
                      "div",
                      { className: yt.CategoryChangeDialog },
                      N.createElement("br", null),
                      this.state.bUpdating &&
                        N.createElement(Q.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        N.createElement(
                          "div",
                          null,
                          Object(P.d)("#Chat_Settings_Error_ServerError"),
                          N.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      N.createElement(lt.a, {
                        isSearchable: !0,
                        onChange: this.OnChangeSelection,
                        value: this.state.newCategoryOption,
                        options: r
                      })
                    )
                  )
                )
              );
            }),
            Object(M.c)([v.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(M.c)([v.a], e.prototype, "OnChangeSelection", null),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        Lt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bCollapsed: !0 }), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.RenderModAction = function(e) {
              var t = Object(P.i)(e.m_rtWhen),
                a = N.createElement(It, {
                  locToken: "#EventModTile_Moderator",
                  accountID: e.m_moderator
                });
              switch (e.m_action) {
                case Ke.k_ModReviewed:
                  return N.createElement(
                    "div",
                    { className: yt.ModeratorAuditActionCtn },
                    Object(P.k)(
                      "#EventModTile_Action_Reviewed",
                      N.createElement("span", null, t),
                      a
                    )
                  );
                case Ke.k_ModUnreviewed:
                  return N.createElement(
                    "div",
                    { className: yt.ModeratorAuditActionCtn },
                    Object(P.k)(
                      "#EventModTile_Action_UnReviewed",
                      N.createElement("span", null, t),
                      a
                    )
                  );
                case Ke.k_ChangeEventType:
                  return N.createElement(
                    "div",
                    { className: yt.ModeratorAuditActionCtn },
                    Object(P.k)(
                      "#EventModTile_Action_NewEventType",
                      N.createElement("span", null, t),
                      a,
                      Object(me.b)(e.m_newEventType)
                    )
                  );
                case Ke.k_UpdateSeasonTags:
                  return N.createElement(
                    "div",
                    { className: yt.ModeratorAuditActionCtn },
                    Object(P.k)(
                      "#EventModTile_Action_SeasonTagUpdate",
                      N.createElement("span", null, t),
                      a,
                      e.m_newTagAdded
                    )
                  );
                default:
                  return N.createElement(
                    "div",
                    { className: yt.ModeratorAuditActionCtn },
                    e.ToModString
                  );
              }
            }),
            (e.prototype.RenderAudit = function(e) {
              var a = this,
                n = new Array(),
                r = this.props.eventModel;
              return (
                e.forEach(function(e) {
                  var t = new pt();
                  t.FromString(e),
                    n.push(
                      N.createElement(
                        "div",
                        { key: r.GID + e },
                        a.RenderModAction(t)
                      )
                    );
                }),
                n
              );
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props.eventModel.GetAllTags().filter(function(e) {
                  return pt.IsAuditAction(e);
                }),
                a = t.length,
                n = 3 < t.length && this.state.bCollapsed;
              if (0 == t.length) return null;
              n && (t = t.splice(0, 3));
              var r = this.RenderAudit(t);
              return N.createElement(
                "div",
                null,
                N.createElement(
                  "h4",
                  null,
                  Object(P.d)("#EventModTile_Action_Title")
                ),
                r,
                n &&
                  N.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !1 });
                      }
                    },
                    Object(P.d)("#EventModTile_Action_More", a - 3)
                  ),
                Boolean(!n && 3 < a) &&
                  N.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !0 });
                      }
                    },
                    Object(P.d)("#EventModTile_Action_Hide")
                  )
              );
            }),
            e
          );
        })(N.Component),
        Gt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                bAccept: e.props.eventModel.BHasTag("halloween2019"),
                bHorror: e.props.eventModel.BHasTag("horror"),
                bCute: e.props.eventModel.BHasTag("cute")
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "UpdateSeasonalTagDialog component unmounted"
              );
            }),
            (e.prototype.ChangeAcceptance = function() {
              this.setState({ bAccept: !this.state.bAccept });
            }),
            (e.prototype.ChangeHorror = function() {
              this.setState({ bHorror: !this.state.bHorror });
            }),
            (e.prototype.ChangeCute = function() {
              this.setState({ bCute: !this.state.bCute });
            }),
            (e.prototype.ApplyAction = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = new Array()),
                        (a = new Array()),
                        this.state.bAccept
                          ? (t.push("halloween2019"),
                            a.push("halloween2019reviewed"))
                          : (a.push("halloween2019"),
                            t.push("halloween2019reviewed")),
                        this.state.bCute ? t.push("cute") : a.push("cute"),
                        this.state.bHorror
                          ? t.push("horror")
                          : a.push("horror"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (n = this.props.eventModel),
                        [
                          4,
                          ut.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            t,
                            a,
                            new pt().SetUpdateSeasonalTags(
                              this.state.bAccept
                                ? "halloween2019"
                                : "halloween2019reviewed"
                            )
                          )
                        ]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        (n.vecTags = r),
                        this.props.closeModal(),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = e.sent()),
                        (i = Object(Re.a)(o)),
                        console.error(
                          "EventModerationTile " + i.strErrorMsg,
                          i
                        ),
                        this.setState({ strErrorMsg: i.strErrorMsg }),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props,
                a = (t.eventModel, t.closeModal);
              return N.createElement(
                Ee.b,
                {
                  strTitle: Object(P.d)("#EventModTile_SeasonalTag"),
                  onCancel: a,
                  onOK: function() {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  }
                },
                N.createElement(
                  N.Fragment,
                  null,
                  N.createElement(
                    "div",
                    { className: yt.CategoryChangeDialog },
                    N.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance
                    }),
                    N.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(P.d)("#EventModTile_SeasonalTag_Desc")
                    ),
                    N.createElement(
                      "div",
                      null,
                      Object(P.d)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    N.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror
                    }),
                    N.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    N.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute
                    }),
                    N.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      N.createElement(Q.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      N.createElement(
                        "div",
                        null,
                        Object(P.d)("#Chat_Settings_Error_ServerError"),
                        N.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(M.c)([v.a], e.prototype, "ChangeAcceptance", null),
            Object(M.c)([v.a], e.prototype, "ChangeHorror", null),
            Object(M.c)([v.a], e.prototype, "ChangeCute", null),
            Object(M.c)([v.a], e.prototype, "ApplyAction", null),
            e
          );
        })(N.Component),
        Nt = a("5eAM"),
        Mt = a("gOcu"),
        xt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoadingEvent: !0 }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SteamGameFestivalStoreDebug to unload "
              );
            }),
            (e.prototype.componentDidMount = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, s;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = this.props),
                      (a = t.clanEventGID),
                      (n = t.clanAccountID),
                      console.log(a, n, typeof a, typeof n),
                      !a || B.c.BHasClanEventModel(a))
                        ? [3, 6]
                        : ((r = G.a.InitFromClanID(Number.parseInt(n))),
                          [
                            4,
                            B.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              r,
                              a,
                              0
                            )
                          ]);
                    case 1:
                      return ((o = e.sent()),
                      (i = new Array()),
                      o.BHasSaleEnabled())
                        ? (this.setState({
                            event: o,
                            bLoadingEvent: !1,
                            bLoadingApps: !0,
                            bLoadingDemos: !0
                          }),
                          (s = new Map()),
                          o.jsondata.sale_sections.forEach(function(e) {
                            "tabs" == e.section_type &&
                              e.tabs.forEach(function(e) {
                                e.capsules.forEach(function(e) {
                                  ("game" != e.type &&
                                    "application" != e.type &&
                                    "software" != e.type) ||
                                    s.has(e.id) ||
                                    (s.set(e.id, !0), i.push(e.id));
                                });
                              });
                          }),
                          [4, Nt.a.LoadAppLinkInfo(i)])
                        : [3, 4];
                    case 2:
                      return (
                        e.sent(),
                        this.setState({ rgAppIDs: i, bLoadingApps: !1 }),
                        Mt.a
                          .Get()
                          .SetCollectionInfo(
                            "gamefestival2020",
                            "gamefestival2020info"
                          ),
                        [
                          4,
                          Mt.a.Get().LoadAppIDsBatch(i, !1, this.m_cancelSignal)
                        ]
                      );
                    case 3:
                      return (
                        e.sent(), this.setState({ bLoadingDemos: !1 }), [3, 5]
                      );
                    case 4:
                      this.setState({ bLoadingEvent: !1, rgAppIDs: i }),
                        (e.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      this.setState({ bLoadingEvent: !1 }), (e.label = 7);
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              if (
                this.state.bLoadingEvent ||
                this.state.bLoadingDemos ||
                this.state.bLoadingApps
              )
                return N.createElement(Q.a, {
                  string:
                    Object(P.d)("#Loading") +
                    (this.state.bLoadingEvent
                      ? " Events"
                      : this.state.bLoadingApps
                      ? " Apps"
                      : this.state.bLoadingDemos
                      ? " Demos"
                      : "done"),
                  position: "center"
                });
              if (!this.state.event)
                return N.createElement("div", null, " Failed to load event");
              var e = this.state.event;
              if (!e.jsondata.bSaleEnabled)
                return N.createElement("div", null, "Not a sale evnet");
              var a = new Array();
              Nt.a.GetMissingAppIDs().forEach(function(e, t) {
                return a.push(
                  N.createElement(
                    "div",
                    { key: "missing: " + t },
                    N.createElement(
                      "a",
                      {
                        href: F.c.STORE_BASE_URL + "app/" + t + "/?beta=1",
                        target: "_blank"
                      },
                      t
                    )
                  )
                );
              });
              var n = new Array();
              return (
                Nt.a.GetAllLoadedAppLinks().forEach(function(e, t) {
                  var a;
                  Mt.a.Get().BHasDemoAppID(t) ||
                    ((a = Nt.a.GetAppLinkInfo(t)),
                    n.push(
                      N.createElement(
                        "div",
                        { key: "missingdemo_" + t },
                        "demo" == a.type &&
                          N.createElement(
                            "b",
                            null,
                            "--Error: Sale Page has Demo AppID, based game -- "
                          ),
                        a.name,
                        " (",
                        t,
                        ")",
                        N.createElement(
                          "a",
                          {
                            href: F.c.STORE_BASE_URL + "app/" + t + "/?beta=0",
                            target: "_blank"
                          },
                          "Store Page"
                        ),
                        " ",
                        N.createElement(
                          "a",
                          {
                            href: F.c.PARTNER_BASE_URL + "apps/landing/" + t,
                            target: "_blank"
                          },
                          "App Landing Page"
                        )
                      )
                    ));
                }),
                N.createElement(
                  b.a,
                  null,
                  N.createElement(
                    "h1",
                    null,
                    e.GetNameWithFallback(Object(d.e)(F.c.LANGUAGE))
                  ),
                  N.createElement(
                    "div",
                    null,
                    N.createElement("b", null, "Unique AppIDs:"),
                    " ",
                    this.state.rgAppIDs.length,
                    " "
                  ),
                  N.createElement(
                    "div",
                    null,
                    N.createElement(
                      "b",
                      null,
                      "Visible Apps in ",
                      F.c.COUNTRY,
                      ":"
                    ),
                    " ",
                    Nt.a.GetNumAppLinks()
                  ),
                  N.createElement(
                    "div",
                    null,
                    N.createElement("b", null, "Missing AppIDs:"),
                    " ",
                    Nt.a.GetNumMissingAppLinks(),
                    " "
                  ),
                  N.createElement(
                    "div",
                    null,
                    N.createElement("b", null, "Demo via DemoStore:"),
                    " ",
                    Mt.a.Get().GetNumDemos()
                  ),
                  N.createElement(
                    "div",
                    null,
                    N.createElement(
                      "b",
                      null,
                      "Visible apps missing demo store:"
                    ),
                    " ",
                    n.length
                  ),
                  N.createElement("hr", null),
                  N.createElement("h2", null, "Missing Appids:"),
                  a,
                  N.createElement(
                    "h2",
                    null,
                    "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
                  ),
                  n
                )
              );
            }),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        Bt = new ((function() {
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
            (e.prototype.GetBackfill = function() {
              return this.m_backfill;
            }),
            (e.prototype.SetBackfill = function(e) {
              this.m_backfill = e;
            }),
            (e.prototype.StartBackfill = function(e) {
              (this.m_backfill = e), (this.m_bBackfillInProgress = !0);
            }),
            (e.prototype.CompleteBackfill = function(e) {
              (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
            }),
            (e.prototype.BIsBackkFillInProgress = function() {
              return this.m_bBackfillInProgress;
            }),
            (e.prototype.GetEventBackfillProgress = function() {
              return this.m_mapEventGIDProcessed;
            }),
            (e.prototype.CreateOrGetBackfillProgess = function(e) {
              return (
                this.m_mapEventGIDProcessed.has(e) ||
                  (this.m_mapEventGIDProcessed.set(e, { bProcessing: !1 }),
                  this.m_vecEventGID.push(e)),
                this.m_mapEventGIDProcessed.get(e)
              );
            }),
            (e.prototype.BHasProgress = function(e) {
              return this.m_mapEventGIDProcessed.has(e);
            }),
            (e.prototype.GetBackfillGIDs = function() {
              return this.m_vecEventGID;
            }),
            (e.prototype.CloseProgress = function(e, t) {
              (this.m_nProcessed += 1),
                t.bAlreadyProcessed || t.bSkipped
                  ? (this.m_nSkipped += 1)
                  : t.bSucceeded
                  ? (this.m_nSuccesses += 1)
                  : t.bFailed && (this.m_nFailures += 1),
                t.bWarning && (this.m_nWarning += 1),
                this.m_mapEventGIDProcessed.set(e, t);
            }),
            Object(M.c)([m.x], e.prototype, "m_backfill", void 0),
            Object(M.c)([m.x], e.prototype, "m_mapEventGIDProcessed", void 0),
            Object(M.c)([m.x], e.prototype, "m_bBackfillInProgress", void 0),
            Object(M.c)([m.x], e.prototype, "m_nProcessed", void 0),
            Object(M.c)([m.x], e.prototype, "m_nSuccesses", void 0),
            Object(M.c)([m.x], e.prototype, "m_nFailures", void 0),
            Object(M.c)([m.x], e.prototype, "m_nWarning", void 0),
            Object(M.c)([m.x], e.prototype, "m_nSkipped", void 0),
            Object(M.c)([m.h], e.prototype, "StartBackfill", null),
            Object(M.c)([m.h], e.prototype, "CompleteBackfill", null),
            Object(M.c)([m.h], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        Rt = a("vNkc"),
        Pt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = g.a.CancelToken.source()),
              (e.m_nImageID = 0),
              (e.m_mapArtworkResizeSuccess = new Map()),
              (e.state = { eBackfillState: void 0 }),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "EventBackfillLanding component unmounted"
              );
            }),
            (e.prototype.OnArtworkResizeBackfill = function() {
              null == this.state.eBackfillState &&
                this.setState(
                  { eBackfillState: "started" },
                  this.BeginArtworkResize
                );
            }),
            (e.prototype.BeginArtworkResize = function() {
              var a = this;
              this.m_mapArtworkResizeSuccess.set("capsule", 0),
                this.m_mapArtworkResizeSuccess.set("spotlight", 0),
                this.m_mapArtworkResizeSuccess.set("background", 0),
                this.RunArtworkResizeBackfill()
                  .then(function() {
                    return a.setState({ eBackfillState: "success" });
                  })
                  .catch(function(e) {
                    var t = Object(Re.a)(e);
                    console.error(
                      "EventBackfillLanding: error " + t.strErrorMsg,
                      t
                    ),
                      a.setState({ eBackfillState: "error" });
                  });
            }),
            (e.prototype.GetImageInfo = function(n, r, o) {
              return (
                void 0 === o && (o = ""),
                Object(M.b)(this, void 0, void 0, function() {
                  var t, a;
                  return Object(M.e)(this, function(e) {
                    return (
                      (t = ne.a.GetExtensionTypeFromURL(r)),
                      (a = ne.a.GetHashFromHashAndExt(r) + o),
                      [
                        2,
                        ne.e.AsyncGetImageResolution(
                          n,
                          a,
                          t,
                          this.m_cancelSignal,
                          !0
                        )
                      ]
                    );
                  });
                })
              );
            }),
            (e.prototype.HandleErrorFatal = function(e, t, a, n) {
              var r = Object(Re.a)(t),
                o =
                  "EventBackfillLanding: " +
                  a +
                  " on GID " +
                  e +
                  " : " +
                  r.strErrorMsg;
              console.error(o, r),
                n
                  ? ((n.bFailed = !0),
                    (n.strMessage = o),
                    Bt.CloseProgress(e, n))
                  : Bt.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function(p, u, m, h, v) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  c,
                  a,
                  d = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = function(t) {
                        var a, n, r, o, i, s, l;
                        return Object(M.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return p[t] && 0 < p[t].length
                                ? ((a = p[t]),
                                  (n = ne.a.GetExtensionTypeFromURL(a)),
                                  (r = new G.a(u.clan_steamid)),
                                  n
                                    ? [
                                        4,
                                        c.GetImageInfo(r, a).catch(function(e) {
                                          return (
                                            d.HandleErrorFatal(
                                              null,
                                              e,
                                              "GetImageInfo Original",
                                              m
                                            ),
                                            { height: 0, width: 0, success: 2 }
                                          );
                                        })
                                      ]
                                    : [3, 8])
                                : [3, 9];
                            case 1:
                              return 1 == (o = e.sent()).success &&
                                Object(ct.i)(o.width, o.height, h)
                                ? [
                                    4,
                                    c.GetImageInfo(r, a, v).catch(function(e) {
                                      return (
                                        d.HandleErrorFatal(
                                          null,
                                          e,
                                          "GetImageInfo Resize",
                                          m
                                        ),
                                        { height: 0, width: 0, success: 2 }
                                      );
                                    })
                                  ]
                                : [3, 6];
                            case 2:
                              return 1 != e.sent().success
                                ? [3, 3]
                                : ((m.bAlreadyProcessed = !0), [3, 5]);
                            case 3:
                              return (
                                (m.bProcessing = !0),
                                (i = ne.a.GetHashFromHashAndExt(a)),
                                (s = ne.a.GetExtensionStringFromHashAndExt(a)),
                                (l = ne.d.GetResizeDimension(h)),
                                [
                                  4,
                                  ne.b
                                    .SendResizeRequest(
                                      c.m_cancelSignal,
                                      r,
                                      i,
                                      s,
                                      l
                                    )
                                    .then(function(e) {
                                      console.log(
                                        "success on the resize request"
                                      ),
                                        e == l.length
                                          ? ((m.bSucceeded = !0),
                                            d.m_mapArtworkResizeSuccess.set(
                                              h,
                                              d.m_mapArtworkResizeSuccess.get(
                                                h
                                              ) + 1
                                            ))
                                          : ((m.bFailed = !0),
                                            (m.strMessage =
                                              "Did not resize all: " +
                                              h +
                                              " " +
                                              e +
                                              " / " +
                                              l.length));
                                    })
                                    .catch(function(e) {
                                      m.bFailed = !0;
                                      var t = Object(Re.a)(e);
                                      (m.strMessage = t.strErrorMsg),
                                        console.error(
                                          "Resize: " + t.strErrorMsg,
                                          t
                                        );
                                    })
                                ]
                              );
                            case 4:
                              e.sent(), (e.label = 5);
                            case 5:
                              return [3, 7];
                            case 6:
                              (m.bSkipped = !0), (e.label = 7);
                            case 7:
                              return [3, 9];
                            case 8:
                              (m.bSkipped = !0), (e.label = 9);
                            case 9:
                              return [2];
                          }
                        });
                      }),
                        (c = this),
                        (a = 0),
                        (e.label = 1);
                    case 1:
                      return a < p.length && a < 29 ? [5, t(a)] : [3, 4];
                    case 2:
                      e.sent(), (e.label = 3);
                    case 3:
                      return ++a, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RunArtworkResizeBackfill = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  i,
                  a,
                  s,
                  n,
                  l = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      Bt.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return Bt.BIsBackkFillInProgress()
                        ? [
                            4,
                            ut
                              .LoadPartnerEventForModerationIncremental(
                                this.m_cancelSignal,
                                t,
                                25
                              )
                              .catch(function(e) {
                                return l.HandleErrorFatal(
                                  null,
                                  e,
                                  "LoadPartnerEventForModerationIncremental"
                                );
                              })
                          ]
                        : [3, 7];
                    case 2:
                      if (!(i = e.sent()) || 0 == i.length)
                        return (
                          Bt.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (t += i.length),
                        (a = function(t) {
                          var a, n, r, o;
                          return Object(M.e)(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  (a = i[t]),
                                  (n = Bt.CreateOrGetBackfillProgess(
                                    a.unique_id
                                  )),
                                  a.announcement_gid &&
                                  0 != a.announcement_gid.length
                                    ? [
                                        4,
                                        B.c
                                          .LoadPartnerEventFromAnnoucementGID(
                                            Number(a.appid),
                                            a.announcement_gid,
                                            100
                                          )
                                          .catch(function(e) {
                                            l.HandleErrorFatal(
                                              a.announcement_gid,
                                              e,
                                              "LoadPartnerEventFromAnnoucementGID",
                                              n
                                            );
                                          })
                                      ]
                                    : ((n.bSkipped = !0),
                                      (n.bWarning = !0),
                                      Bt.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                );
                              case 1:
                                return (e.sent(), n.bFailed)
                                  ? [2, "continue"]
                                  : (r = B.c.GetClanEventFromAnnouncementGID(
                                      a.announcement_gid
                                    ))
                                  ? n.bSucceeded ||
                                    n.bFailed ||
                                    n.bAlreadyProcessed
                                    ? ((n.bAlreadyProcessed = !0),
                                      Bt.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                    : ((n.bAnalysing = !0),
                                      s.setState({
                                        strInfo:
                                          "Processing " +
                                          Bt.GetBackfillGIDs().length +
                                          " Appid: " +
                                          r.appid +
                                          " Event " +
                                          r.GID +
                                          " Title: " +
                                          r.GetNameWithFallback(0)
                                      }),
                                      r.jsondata &&
                                      r.jsondata.localized_capsule_image
                                        ? ((o =
                                            r.jsondata.localized_capsule_image),
                                          [
                                            4,
                                            s
                                              .HandleResizeForImageType(
                                                o,
                                                a,
                                                n,
                                                "capsule",
                                                ne.c.capsule_main
                                              )
                                              .catch(function(e) {
                                                return l.HandleErrorFatal(
                                                  null,
                                                  e,
                                                  "HandleResizeForImageType capsule",
                                                  n
                                                );
                                              })
                                          ])
                                        : [3, 3])
                                  : ((n.bFailed = !0),
                                    (n.strMessage =
                                      "Failed to load the event: " +
                                      a.unique_id),
                                    Bt.CloseProgress(a.unique_id, n),
                                    [2, "continue"]);
                              case 2:
                                e.sent(), (e.label = 3);
                              case 3:
                                return r.jsondata &&
                                  r.jsondata.localized_title_image
                                  ? ((o = r.jsondata.localized_title_image),
                                    [
                                      4,
                                      s
                                        .HandleResizeForImageType(
                                          o,
                                          a,
                                          n,
                                          "background",
                                          ne.c.background_mini
                                        )
                                        .catch(function(e) {
                                          return l.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType background",
                                            n
                                          );
                                        })
                                    ])
                                  : [3, 5];
                              case 4:
                                e.sent(), (e.label = 5);
                              case 5:
                                return r.jsondata &&
                                  r.jsondata.localized_spotlight_image
                                  ? ((o = r.jsondata.localized_spotlight_image),
                                    [
                                      4,
                                      s
                                        .HandleResizeForImageType(
                                          o,
                                          a,
                                          n,
                                          "spotlight",
                                          ne.c.spotlight_main
                                        )
                                        .catch(function(e) {
                                          return l.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType spotlight",
                                            n
                                          );
                                        })
                                    ])
                                  : [3, 7];
                              case 6:
                                e.sent(), (e.label = 7);
                              case 7:
                                return (
                                  Bt.CloseProgress(a.unique_id, n),
                                  Bt.BIsBackkFillInProgress()
                                    ? [2]
                                    : [2, "break"]
                                );
                            }
                          });
                        }),
                        (s = this),
                        (n = 0),
                        (e.label = 3);
                    case 3:
                      return n < i.length ? [5, a(n)] : [3, 6];
                    case 4:
                      if ("break" === e.sent()) return [3, 6];
                      e.label = 5;
                    case 5:
                      return ++n, [3, 3];
                    case 6:
                      return 5e3 < Bt.m_nFailures
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
            (e.prototype.RenderFailure = function() {
              var n = new Array();
              return (
                0 < Bt.m_nFailures &&
                  Bt.GetBackfillGIDs().forEach(function(e) {
                    var t,
                      a = Bt.GetEventBackfillProgress().get(e);
                    a &&
                      a.bFailed &&
                      ((t = B.c.GetClanEventModel(e)) &&
                        n.push(
                          N.createElement(
                            "div",
                            { key: e },
                            N.createElement(
                              he.c,
                              {
                                eventModel: t,
                                route: he.a.k_eView,
                                openNewWindow: !0
                              },
                              t.GetNameWithFallback(0)
                            ),
                            N.createElement(
                              "div",
                              { className: Rt.Error },
                              a.strMessage
                            )
                          )
                        ));
                  }),
                n
              );
            }),
            (e.prototype.RenderResizeProgress = function() {
              var e = new Array();
              return (
                e.push(
                  N.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  N.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  N.createElement(
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
            (e.prototype.render = function() {
              var e = this.RenderFailure(),
                t = this.m_mapArtworkResizeSuccess.has("capsule")
                  ? this.RenderResizeProgress()
                  : void 0;
              return N.createElement(
                "div",
                null,
                N.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  N.createElement(
                    "div",
                    null,
                    N.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                N.createElement(
                  "div",
                  null,
                  N.createElement(
                    "button",
                    {
                      onClick: function() {
                        return Bt.CompleteBackfill("resize_image");
                      }
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  N.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                N.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  Bt.m_nProcessed
                ),
                N.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  Bt.m_nSuccesses
                ),
                N.createElement("div", null, "Events Warning: ", Bt.m_nWarning),
                N.createElement("div", null, "Events Failed: ", Bt.m_nFailures),
                N.createElement("div", null, "Events Skipped: ", Bt.m_nSkipped),
                0 < e.length &&
                  N.createElement(
                    N.Fragment,
                    null,
                    N.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  N.createElement(
                    "div",
                    null,
                    N.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  N.createElement(Q.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress"
                  })
              );
            }),
            Object(M.c)([v.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(M.c)([v.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        Ft = a("nWbB"),
        Ht = new ((function() {
          function e() {
            (this.m_rgMyWishlistOnSale = null),
              (this.m_rgMyDLCForGamesInLibraryOnSale = null),
              (this.m_rgMySoundtracksForGamesInLibraryOnSale = null),
              (this.m_rgMyInteractiveRecOnSale = null),
              (this.m_rgMySaleTags = null),
              (this.m_rgMyTagRecommendation = null),
              (this.m_mapSaleGameListsByFlavor = new Map()),
              (this.m_rgTopN = null);
          }
          return (
            (e.prototype.GetDiscounts = function(o) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 3, , 4]),
                        (t = "discount"),
                        (t += o.tagid ? "_tag" + o.tagid : ""),
                        (t += o.categoryid ? "_categoryid" + o.categoryid : ""),
                        (t += o.top_n_sellers ? "_ntop" + o.top_n_sellers : ""),
                        (t += o.max_results ? "_max" + o.max_results : ""),
                        (t += o.random_across_set ? "_rand" : ""),
                        (a = Object(F.f)(t, "application_config"))
                          ? [3, 2]
                          : [
                              4,
                              g.a.get(
                                F.c.STORE_BASE_URL + "actions/ajaxgetdiscounts",
                                {
                                  params: Object(M.a)(Object(M.a)({}, o), {
                                    cc: F.c.COUNTRY
                                  })
                                }
                              )
                            ]
                      );
                    case 1:
                      (n = e.sent()), (a = n.data), (e.label = 2);
                    case 2:
                      return [2, a];
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(Re.a)(r)), [3, 4]
                      );
                    case 4:
                      return [2, []];
                  }
                });
              });
            }),
            (e.prototype.GetTopN = function(a, n) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgTopN
                        ? [3, 2]
                        : ((this.m_rgTopN = Object(F.f)(
                            "top_n",
                            "application_config"
                          )),
                          this.m_rgTopN
                            ? [3, 2]
                            : [
                                4,
                                Ht.GetDiscounts({
                                  top_n_sellers: 500,
                                  max_results: n,
                                  feature: a
                                })
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgTopN = t.map(function(e) {
                          return Number(e);
                        })),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgTopN];
                  }
                });
              });
            }),
            (e.prototype.GetWishlistOnSale = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyWishlistOnSale
                        ? [3, 2]
                        : ((this.m_rgMyWishlistOnSale = Object(F.f)(
                            "wishlist_onsale",
                            "application_config"
                          )),
                          this.m_rgMyWishlistOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  F.c.STORE_BASE_URL +
                                    "saleaction/ajaxgetwishlistonsale",
                                  { withCredentials: !0 }
                                )
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgMyWishlistOnSale = t.data.appids),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMyWishlistOnSale];
                  }
                });
              });
            }),
            (e.prototype.GetDLCForGamesInMyLibraryOnSale = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyDLCForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMyDLCForGamesInLibraryOnSale = Object(F.f)(
                            "dlc_onsale",
                            "application_config"
                          )),
                          this.m_rgMyDLCForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  F.c.STORE_BASE_URL +
                                    "saleaction/ajaxgetdlconsale",
                                  { withCredentials: !0 }
                                )
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgMyDLCForGamesInLibraryOnSale = t.data.appids),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMyDLCForGamesInLibraryOnSale];
                  }
                });
              });
            }),
            (e.prototype.GetSoundtracksForGamesInMyLibraryOnSale = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySoundtracksForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMySoundtracksForGamesInLibraryOnSale = Object(
                            F.f
                          )("dlc_music_onsale", "application_config")),
                          this.m_rgMySoundtracksForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  F.c.STORE_BASE_URL +
                                    "saleaction/ajaxgetsoundtracksonsale",
                                  { withCredentials: !0 }
                                )
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgMySoundtracksForGamesInLibraryOnSale =
                          t.data.appids),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMySoundtracksForGamesInLibraryOnSale];
                  }
                });
              });
            }),
            (e.prototype.GetInteractiveRecommendationsOnSale = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyInteractiveRecOnSale
                        ? [3, 2]
                        : ((this.m_rgMyInteractiveRecOnSale = Object(F.f)(
                            "ir_onsale",
                            "application_config"
                          )),
                          this.m_rgMyInteractiveRecOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  F.c.STORE_BASE_URL +
                                    "saleaction/ajaxgetironsale",
                                  { withCredentials: !0 }
                                )
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgMyInteractiveRecOnSale = t.data.appids),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMyInteractiveRecOnSale];
                  }
                });
              });
            }),
            (e.prototype.GetSaleTags = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySaleTags
                        ? [3, 2]
                        : ((this.m_rgMySaleTags = Object(F.f)(
                            "saletags",
                            "application_config"
                          )),
                          this.m_rgMySaleTags
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  F.c.STORE_BASE_URL +
                                    "saleaction/ajaxgetsaletags",
                                  { withCredentials: !1 }
                                )
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgMySaleTags = t.data),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMySaleTags];
                  }
                });
              });
            }),
            (e.prototype.GetTagRecommendorForThisSale = function(r, o) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyTagRecommendation
                        ? [3, 2]
                        : ((this.m_rgMyTagRecommendation = Object(F.f)(
                            "tag_recommender",
                            "application_config"
                          )),
                          this.m_rgMyTagRecommendation
                            ? [3, 2]
                            : ((t =
                                F.c.STORE_BASE_URL +
                                "saleaction/ajaxgetsaletagsrecommendation"),
                              (a = {
                                cc: F.c.COUNTRY,
                                l: F.c.LANGUAGE,
                                clanAccountID: r.clanSteamID.GetAccountID(),
                                clanAnnouncementGID: r.AnnouncementGID,
                                count: o
                              }),
                              [
                                4,
                                g.a.get(t, { params: a, withCredentials: !1 })
                              ]));
                    case 1:
                      200 == (n = e.sent()).status &&
                      n.data &&
                      n.data.tag_recommender
                        ? (this.m_rgMyTagRecommendation =
                            n.data.tag_recommender)
                        : (this.m_rgMyTagRecommendation = []),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMyTagRecommendation];
                  }
                });
              });
            }),
            (e.prototype.GetFlavorCacheKey = function(e, t) {
              return "key-" + e + "-" + (t || "*");
            }),
            (e.prototype.GetSaleGamesByFlavor = function(u, m, h, v, _, b) {
              return (
                void 0 === b && (b = 0),
                Object(M.b)(this, void 0, void 0, function() {
                  var t, a, n, r, o, i, s, l, c, d, p;
                  return Object(M.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (11 == m && (m = void 0),
                        (t = this.GetFlavorCacheKey(v, m)),
                        !(a = this.m_mapSaleGameListsByFlavor.get(t)) &&
                          ((n = "browser_" + v + (m ? "_" + m : "_*")),
                          0 <
                            (a = Object(F.f)(n, "application_config") || [])
                              .length))
                          ? (this.m_mapSaleGameListsByFlavor.set(t, a),
                            [2, a.slice(b, _)])
                          : ((r = a.length),
                            0 < (o = b + _ - r)
                              ? ((i =
                                  F.c.STORE_BASE_URL +
                                  (u
                                    ? "saleaction/ajaxpreviewsaledynamicappquery"
                                    : "saleaction/ajaxgetsaledynamicappquery")),
                                (s = {
                                  cc: F.c.COUNTRY,
                                  l: F.c.LANGUAGE,
                                  clanAccountID: h.clanSteamID.GetAccountID(),
                                  clanAnnouncementGID: h.AnnouncementGID,
                                  flavor: v,
                                  start: r,
                                  count: Math.max(o, 25),
                                  tabuniqueid: m,
                                  return_capsules: !0
                                }),
                                [
                                  4,
                                  g.a.get(i, { params: s, withCredentials: u })
                                ])
                              : [3, 2]);
                      case 1:
                        if (
                          200 != (l = e.sent()).status ||
                          !l.data ||
                          !l.data.appids
                        )
                          throw new Error("query failed, status=" + l.status);
                        for (c = 0, d = l.data.appids; c < d.length; c++)
                          (p = d[c]), a.push(p);
                        l.data.app_info && Nt.a.AddAppLinks(l.data.app_info),
                          (e.label = 2);
                      case 2:
                        return (
                          this.m_mapSaleGameListsByFlavor.set(t, a),
                          [2, a.slice(b, _)]
                        );
                    }
                  });
                })
              );
            }),
            e
          );
        })())(),
        zt = new ((function() {
          function e() {
            (this.m_mySummary = {
              points: 0,
              points_earned: 0,
              points_spent: 0
            }),
              (this.m_bLoaded = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var e,
                t = this;
              this.m_bLoaded ||
                ((e = Object(F.f)("points", "application_config")),
                this.ValidateStoreDefault(e) &&
                  Object(m.z)(function() {
                    (t.m_mySummary.points = e.points),
                      (t.m_mySummary.points_earned = e.points_earned),
                      (t.m_mySummary.points_spent = e.points_spent),
                      (t.m_bLoaded = !0);
                  }));
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              return (
                !(!e || "object" != typeof e) &&
                ("number" == typeof e.points &&
                  "number" == typeof e.points_earned &&
                  "number" == typeof e.points_spent)
              );
            }),
            (e.prototype.LoadSaleTokenPoints = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (this.LazyInit(), this.m_bLoaded || !F.i.logged_in)
                        ? [3, 2]
                        : ((t =
                            F.c.STORE_BASE_URL +
                            "lunarnewyearmarket/ajaxgettokensummary"),
                          [4, g.a.get(t, { withCredentials: !0 })]);
                    case 1:
                      (a = e.sent()),
                        Object(m.z)(function() {
                          (n.m_mySummary.points = a.data.summary.points),
                            (n.m_mySummary.points_earned =
                              a.data.summary.points_earned),
                            (n.m_mySummary.points_spent =
                              a.data.summary.points_spent),
                            (n.m_bLoaded = !0);
                        }),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_mySummary];
                  }
                });
              });
            }),
            (e.prototype.ForceReloadSaleTokenPoints = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                return Object(M.e)(this, function(e) {
                  return (this.m_bLoaded = !1), [2, this.LoadSaleTokenPoints()];
                });
              });
            }),
            (e.prototype.AddPoints = function(e) {
              (this.m_mySummary.points += e),
                (this.m_mySummary.points_earned += e);
            }),
            (e.prototype.GetSaleTokenPoints = function() {
              return this.m_mySummary;
            }),
            Object(M.c)([m.x], e.prototype, "m_mySummary", void 0),
            e
          );
        })())();
      window.g_SaleTokenPointStore = zt;
      var Ut = new ((function() {
        function e() {
          (this.m_salePageBackgroundOverride = null),
            (this.m_salePageBackgroundWEBM = null),
            (this.m_salePageBackgroundMP4 = null),
            (this.m_storyImages = null),
            (this.m_strLastDoorOpenKey = "video_noneset"),
            (this.m_bLoadedFromConfig = !1);
        }
        return (
          (e.prototype.LazyInit = function() {
            var e = this;
            this.m_bLoadedFromConfig ||
              (Object(m.z)(function() {
                (e.m_userData = Object(F.f)("doorinfo", "application_config")),
                  (e.m_salePageBackgroundOverride = Object(F.f)(
                    "doorinfobackground",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundWEBM = Object(F.f)(
                    "doorinfowebm",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundMP4 = Object(F.f)(
                    "doorinfomp4",
                    "application_config"
                  )),
                  (e.m_storyImages = Object(F.f)(
                    "storyimages",
                    "application_config"
                  )),
                  e.m_storyImages || (e.m_storyImages = new Array(4));
              }),
              (this.m_bLoadedFromConfig = !0));
          }),
          (e.prototype.LoadDoorData = function() {
            return Object(M.b)(this, void 0, void 0, function() {
              var t, a;
              return Object(M.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = F.c.STORE_BASE_URL + "saleaction/ajaxgetopendoor"),
                      [4, g.a.get(t, { withCredentials: !0 })]
                    );
                  case 1:
                    return (
                      (a = e.sent()),
                      (this.m_userData = a.data.doordata),
                      [2, this.m_userData]
                    );
                }
              });
            });
          }),
          (e.prototype.GetRawDoorData = function() {
            return this.m_userData;
          }),
          (e.prototype.BIsDoorOpened = function(e) {
            return (
              this.LazyInit(),
              !!this.m_userData &&
                (e < this.m_userData.length && this.m_userData[e].opened)
            );
          }),
          (e.prototype.BCanUserOpenDoor = function(e) {
            this.LazyInit();
            var t = L.a.GetTimeNowWithOverride();
            return (
              F.i.logged_in &&
              this.m_userData &&
              e < this.m_userData.length &&
              t >= this.m_userData[e].rtime_start &&
              t <= this.m_userData[e].rtime_end
            );
          }),
          (e.prototype.GetDoorCount = function() {
            return (
              this.LazyInit(), this.m_userData ? this.m_userData.length : 0
            );
          }),
          (e.prototype.OpenDoor = function(i, s) {
            return (
              void 0 === s && (s = !0),
              Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !F.i.logged_in ||
                        !this.m_userData ||
                        i > this.m_userData.length
                      )
                        return [2, null];
                      (t = F.c.STORE_BASE_URL + "saleaction/ajaxopendoor"),
                        (a = new FormData()).append("sessionid", F.c.SESSIONID),
                        a.append("authwgtoken", F.i.authwgtoken),
                        a.append("door_index", "" + i),
                        s || a.append("open_door", "0"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, g.a.post(t, a, { withCredentials: !0 })]
                      );
                    case 2:
                      return 1 == (n = e.sent()).data.success
                        ? (Object(m.z)(function() {
                            (o.m_userData[i].opened = s),
                              (o.m_salePageBackgroundOverride =
                                n.data.sale_pg_background_override),
                              (o.m_salePageBackgroundMP4 =
                                n.data.sale_pg_background_mp4),
                              (o.m_salePageBackgroundWEBM =
                                n.data.sale_pg_background_webm),
                              (o.m_storyImages[i] = n.data.story_image),
                              (o.m_strLastDoorOpenKey =
                                "door_" + (s ? i : i - 1)),
                              s && zt.AddPoints(100);
                          }),
                          [2, n.data.rewards])
                        : (console.error(Object(Re.a)(n)), [3, 4]);
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(Re.a)(r)), [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              })
            );
          }),
          (e.prototype.BHasSalePageBackgroundOverride = function() {
            return this.LazyInit(), Boolean(this.m_salePageBackgroundOverride);
          }),
          (e.prototype.GetSalePageBackgroundOverride = function() {
            return this.LazyInit(), this.m_salePageBackgroundOverride;
          }),
          (e.prototype.GetSalePageBackgroundMP4 = function() {
            return this.LazyInit(), this.m_salePageBackgroundMP4;
          }),
          (e.prototype.GetSalePageBackgroundWEBM = function() {
            return this.LazyInit(), this.m_salePageBackgroundWEBM;
          }),
          (e.prototype.GetStoryImage = function(e) {
            return this.LazyInit(), this.m_storyImages[e];
          }),
          (e.prototype.GetLastDoorOpen = function() {
            return this.LazyInit(), this.m_strLastDoorOpenKey;
          }),
          Object(M.c)([m.x], e.prototype, "m_userData", void 0),
          Object(M.c)(
            [m.x],
            e.prototype,
            "m_salePageBackgroundOverride",
            void 0
          ),
          Object(M.c)([m.x], e.prototype, "m_salePageBackgroundWEBM", void 0),
          Object(M.c)([m.x], e.prototype, "m_salePageBackgroundMP4", void 0),
          Object(M.c)([m.x], e.prototype, "m_storyImages", void 0),
          Object(M.c)([m.x], e.prototype, "m_strLastDoorOpenKey", void 0),
          e
        );
      })())();
      window.g_DoorStore = Ut;
      var Wt = new ((function() {
        function e() {
          this.m_rgRecentEvent = null;
        }
        return (
          (e.prototype.ValidateStoreDefault = function(e) {
            var t = e;
            return (
              !!(
                t &&
                Array.isArray(t) &&
                0 < t.length &&
                "object" == typeof t[0]
              ) &&
              ("string" == typeof t[0].clan_steamid &&
                "string" == typeof t[0].gid &&
                "number" == typeof t[0].appid)
            );
          }),
          (e.prototype.AddAllRecentEvents = function(e) {
            var t = this;
            null == this.m_rgRecentEvent &&
              (this.m_rgRecentEvent = new Array()),
              e.forEach(function(e) {
                return t.m_rgRecentEvent.push(e);
              });
          }),
          (e.prototype.GetRecentEventsForSalesPage = function(i) {
            return Object(M.b)(this, void 0, void 0, function() {
              var t, a, n, r, o;
              return Object(M.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return null != this.m_rgRecentEvent
                      ? [3, 5]
                      : ((t = Object(F.f)(
                          "recent_events",
                          "application_config"
                        )),
                        this.ValidateStoreDefault(t)
                          ? (this.AddAllRecentEvents(t), [3, 5])
                          : [3, 1]);
                  case 1:
                    (this.m_rgRecentEvent = new Array()),
                      (a = {
                        cc: F.c.COUNTRY || "US",
                        l: F.c.LANGUAGE,
                        clan_account_id: i.clanSteamID.GetAccountID(),
                        clan_event_gid: i.GID
                      }),
                      (n =
                        F.c.STORE_BASE_URL + "saleaction/ajaxrecentsaleevents"),
                      (e.label = 2);
                  case 2:
                    return (
                      e.trys.push([2, 4, , 5]),
                      [4, g.a.get(n, { params: a, withCredentials: !0 })]
                    );
                  case 3:
                    return (
                      1 == (r = e.sent()).data.success &&
                        (this.AddAllRecentEvents(r.data.recent_events),
                        B.c.RegisterClanEvents(r.data.partnerevents)),
                      [3, 5]
                    );
                  case 4:
                    return (
                      (o = e.sent()),
                      console.error(
                        "GetRecentEventsForSalesPage failed",
                        Object(Re.a)(o)
                      ),
                      [3, 5]
                    );
                  case 5:
                    return [2, this.m_rgRecentEvent];
                }
              });
            });
          }),
          Object(M.c)([m.x], e.prototype, "m_rgRecentEvent", void 0),
          Object(M.c)([m.h], e.prototype, "AddAllRecentEvents", null),
          e
        );
      })())();
      window.g_EventListSaleStore = Wt;
      var Vt = new ((function() {
          function e() {
            (this.m_saleExp = {}), (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var e;
              this.m_bLoadedFromConfig ||
                ((e = document.getElementById("application_config")) &&
                  (this.m_saleExp = Object(F.f)("xprmnt", e)),
                (this.m_bLoadedFromConfig = !0));
            }),
            (e.prototype.GetHideWishlist = function() {
              return (
                this.LazyInit(),
                Boolean(this.m_saleExp && this.m_saleExp.bHideWishlist)
              );
            }),
            (e.prototype.GetHideIRList = function() {
              return (
                this.LazyInit(),
                Boolean(this.m_saleExp && this.m_saleExp.bHideIRList)
              );
            }),
            (e.prototype.GetHideDLC = function() {
              return (
                this.LazyInit(),
                Boolean(this.m_saleExp && this.m_saleExp.bHideDLC)
              );
            }),
            e
          );
        })())(),
        Zt = (function() {
          function e() {
            this.m_mapMasterAppToBenefitApps = new Map();
          }
          return (
            (e.Get = function() {
              return (
                e.s_SubscriptStore ||
                  ((e.s_SubscriptStore = new e()).Init(),
                  (window.g_CuratorAdminStore = e.s_SubscriptStore)),
                e.s_SubscriptStore
              );
            }),
            (e.prototype.Init = function() {
              var a = this,
                e = Object(F.f)("subscriptionsapps", "application_config");
              this.ValidateStoreDefault(e) &&
                Object(m.z)(function() {
                  e.forEach(function(e) {
                    var t = new Set();
                    e.benefit_appid.forEach(function(e) {
                      return t.add(e);
                    }),
                      a.m_mapMasterAppToBenefitApps.set(e.master_appid, t);
                  });
                });
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                ("number" == typeof t[0].master_appid &&
                  Array.isArray(t[0].benefit_appid))
              );
            }),
            (e.prototype.BHasMasterSub = function(e) {
              return this.m_mapMasterAppToBenefitApps.has(e);
            }),
            (e.prototype.GetAllAppForMaster = function(e) {
              return this.m_mapMasterAppToBenefitApps.get(e);
            }),
            (e.prototype.BHasAppIDBenefit = function(e, t) {
              var a = this.m_mapMasterAppToBenefitApps.get(e);
              return a && a.has(t);
            }),
            (e.prototype.LoadSubscriptionInfo = function(r) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapMasterAppToBenefitApps.has(r)
                        ? [2, !0]
                        : [
                            4,
                            g.a.get(
                              F.c.STORE_BASE_URL +
                                "actions/ajaxresolvesubscriptions",
                              {
                                params: {
                                  master_app_id: r,
                                  cc: F.c.COUNTRY,
                                  origin: self.origin
                                }
                              }
                            )
                          ];
                    case 1:
                      return (
                        (t = e.sent()),
                        (a = t && t.data)
                          ? (Object(m.z)(function() {
                              var t = new Set();
                              a.benefit_appid.forEach(function(e) {
                                return t.add(e);
                              }),
                                n.m_mapMasterAppToBenefitApps.set(
                                  a.master_appid,
                                  t
                                );
                            }),
                            [2, !0])
                          : [2, !1]
                      );
                  }
                });
              });
            }),
            Object(M.c)(
              [m.x],
              e.prototype,
              "m_mapMasterAppToBenefitApps",
              void 0
            ),
            e
          );
        })(),
        Yt = a("mZMQ"),
        qt = (a("hmtA"), a("dgee")),
        Jt = a.n(qt),
        Qt = a("SS32"),
        Kt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.renderScroller = function() {
              var e = this.props.showArrows,
                t = this.props.visibleSlides,
                a = this.props.totalSlides,
                n = this.props.currentSlide;
              if (a <= t) return null;
              var r = (100 * n) / a,
                o = 100 * (1 - Math.min(n + t, a) / a),
                i = r + (50 * t) / a,
                s = 100 - i;
              return N.createElement(
                "div",
                { className: Qt.pipScrollerContainer },
                e &&
                  N.createElement(
                    Yt.a,
                    {
                      className: Object(R.a)(
                        Qt.pipScrollButton,
                        Qt.left,
                        Qt.carouselNavButton
                      )
                    },
                    N.createElement(D.f, null)
                  ),
                N.createElement(
                  "div",
                  { className: Qt.pipScroller },
                  N.createElement("div", { className: Qt.scrollBackground }),
                  N.createElement("div", {
                    className: Qt.scrollForeground,
                    style: { left: r + "%", right: o + "%" }
                  }),
                  N.createElement(
                    "div",
                    {
                      className: Qt.scrollNavDiv,
                      style: { left: "0%", width: i + "%" }
                    },
                    N.createElement(
                      Yt.a,
                      {
                        className: Object(R.a)(
                          Qt.carouselNavButton,
                          Qt.scrollNavButton
                        )
                      },
                      N.createElement("div", null)
                    )
                  ),
                  N.createElement(
                    "div",
                    {
                      className: Qt.scrollNavDiv,
                      style: { right: "0%", width: s + "%" }
                    },
                    N.createElement(
                      Yt.b,
                      {
                        className: Object(R.a)(
                          Qt.carouselNavButton,
                          Qt.scrollNavButton
                        )
                      },
                      N.createElement("div", null)
                    )
                  )
                ),
                e &&
                  N.createElement(
                    Yt.b,
                    {
                      className: Object(R.a)(
                        Qt.pipScrollButton,
                        Qt.right,
                        Qt.carouselNavButton
                      )
                    },
                    N.createElement(D.f, null)
                  )
              );
            }),
            (t.prototype.renderPips = function() {
              for (
                var e,
                  t = new Array(),
                  a = !1,
                  n = this.props.visibleSlides,
                  r = this.props.totalSlides,
                  o = this.props.currentSlide,
                  i = o - 3 * n,
                  s = o + 4 * n,
                  s = Math.max(s, 9 * n),
                  i = Math.min(i, r - 9 * n),
                  l = 1,
                  c = 0;
                c < r;
                c++
              ) {
                c % n == 0 &&
                  ((e = !(i <= c && c < s) && (!(r - n <= c) && 0 !== c))
                    ? a ||
                      t.push(
                        N.createElement(
                          "div",
                          { className: Qt.pipsSkipped },
                          "..."
                        )
                      )
                    : t.push(
                        N.createElement(
                          Yt.d,
                          { slide: c, className: Qt.pip },
                          N.createElement(
                            N.Fragment,
                            null,
                            N.createElement("img", { src: Jt.a }),
                            N.createElement(
                              "div",
                              { className: Qt.pipNumber },
                              l
                            )
                          )
                        )
                      ),
                  l++,
                  (a = e));
              }
              return N.createElement("div", { className: Qt.pipContainer }, t);
            }),
            (t.prototype.render = function() {
              return this.renderScroller();
            }),
            t
          );
        })(N.Component),
        Xt = Object(Yt.g)(Kt, function(e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides
          };
        }),
        $t = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.GetNumElements = function() {
              return N.Children.count(this.props.children);
            }),
            (t.prototype.GetPageSize = function() {
              return Math.min(
                this.GetNumElements(),
                this.props.visibleElements
              );
            }),
            (t.prototype.RenderChildren = function() {
              return N.Children.map(this.props.children, function(e, t) {
                return N.createElement(
                  Yt.e,
                  { key: "slide_" + t, index: t },
                  e
                );
              });
            }),
            (t.prototype.RenderBreadcrumbs = function(a) {
              return N.Children.map(this.props.children, function(e, t) {
                return t % a != 0
                  ? null
                  : N.createElement(
                      Yt.d,
                      { slide: t, className: Qt.pip },
                      N.createElement("img", { src: Jt.a })
                    );
              });
            }),
            (t.prototype.render = function() {
              var e = this.GetNumElements(),
                t = this.GetPageSize();
              if (!e || !t) return null;
              var a = t < e,
                n = this.props.hideArrows || !a,
                r = !a || this.props.hidePips,
                o = 4 / 3,
                i = !0;
              return (
                this.props.slideAspectRatio &&
                  ((o = this.props.slideAspectRatio), (i = !1)),
                N.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      Qt.carouselBody,
                      this.props.className
                    )
                  },
                  N.createElement(
                    Yt.c,
                    {
                      visibleSlides: this.props.visibleElements,
                      totalSlides: this.GetNumElements(),
                      naturalSlideWidth: 100 * o,
                      naturalSlideHeight: 100,
                      step: this.props.visibleElements,
                      infinite: !this.props.disableEdgeWrap,
                      isIntrinsicHeight: i
                    },
                    N.createElement(
                      "div",
                      { className: Qt.sliderBody },
                      !n &&
                        N.createElement(
                          Yt.a,
                          {
                            className: Object(R.a)(
                              Qt.carouselBtnCtn,
                              Qt.left,
                              Qt.carouselNavButton
                            )
                          },
                          N.createElement(D.f, null)
                        ),
                      N.createElement(Yt.f, null, this.RenderChildren()),
                      !n &&
                        N.createElement(
                          Yt.b,
                          {
                            className: Object(R.a)(
                              Qt.carouselBtnCtn,
                              Qt.right,
                              Qt.carouselNavButton
                            )
                          },
                          N.createElement(D.f, null)
                        )
                    ),
                    !r &&
                      (this.props.useTestScrollbar
                        ? N.createElement(Xt, { showArrows: n })
                        : N.createElement(
                            "div",
                            { className: Qt.breadcrumbContainer },
                            this.RenderBreadcrumbs(t)
                          ))
                  )
                )
              );
            }),
            t
          );
        })(N.Component),
        ea = a("qP7j"),
        ta = a.n(ea),
        aa = new ((function() {
          function e() {}
          return (
            (e.prototype.DeleteForumTopic = function(r, o, i, s, l) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          F.c.COMMUNITY_BASE_URL +
                          "forum/" +
                          r.GetAccountID() +
                          "/" +
                          o +
                          "/deletetopic/"),
                        null != i && "" != i && (t += i + "/"),
                        (a = new FormData()).append("sessionid", F.c.SESSIONID),
                        a.append("gidforumtopic", s),
                        [
                          4,
                          g.a.post(t, a, {
                            withCredentials: !0,
                            cancelToken: l.token
                          })
                        ]
                      );
                    case 1:
                      if (1 != (n = e.sent()).data.success) throw n.data;
                      return [2, n.data];
                  }
                });
              });
            }),
            e
          );
        })())(),
        na = (function(a) {
          function s(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_cancelSignal = g.a.CancelToken.source()),
              (t.state = {
                dialogState: t.props.bNoConfirmationNeeded
                  ? "waiting"
                  : "confirmation",
                bDeleteCommentThread: !1
              }),
              t
            );
          }
          return (
            Object(M.d)(s, a),
            (s.prototype.componentDidMount = function() {
              this.props.bNoConfirmationNeeded && this.OnDelete();
            }),
            (s.prototype.OnDeleteEventSuccessCallback = function() {
              this.props.partnerEventStore.ResetModel(),
                this.state.bDeleteCommentThread
                  ? aa
                      .DeleteForumTopic(
                        this.m_clanSteamID,
                        "Event",
                        void 0,
                        this.m_forumTopicGID,
                        this.m_cancelSignal
                      )
                      .then(this.OnDeleteForumTopicSuccessCallback)
                      .catch(this.OnDeleteForumTopicFailureCallback)
                  : this.setState({ dialogState: "success" });
            }),
            (s.prototype.OnDeleteForumTopicSuccessCallback = function() {
              this.setState({ dialogState: "success" });
            }),
            (s.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("component unmounted");
            }),
            (s.prototype.OnDeleteEventFailureCallback = function(e) {
              this.setState(
                Object(M.a)({ dialogState: "error" }, Object(Re.a)(e))
              );
            }),
            (s.prototype.OnDeleteForumTopicFailureCallback = function(e) {
              this.setState(
                Object(M.a)(
                  { dialogState: "failed_thread_delete" },
                  Object(Re.a)(e)
                )
              );
            }),
            (s.prototype.SetToWaiting = function() {
              "waiting" != this.state.dialogState &&
                this.setState({ dialogState: "waiting" });
            }),
            (s.prototype.OnDelete = function() {
              var e = this.props,
                t = e.eventModel,
                a = e.partnerEventStore,
                n = t.clanSteamID,
                r = t.GID,
                o = t.AnnouncementGID;
              (this.m_forumTopicGID = t.forumTopicGID),
                (this.m_clanSteamID = n),
                !this.props.eventModel.bOldAnnouncement &&
                r &&
                "0" != r &&
                r != ae.e
                  ? (this.SetToWaiting(),
                    a
                      .DeleteClanEvent(n, r)
                      .then(this.OnDeleteEventSuccessCallback)
                      .catch(this.OnDeleteEventFailureCallback))
                  : this.props.eventModel.bOldAnnouncement
                  ? (this.SetToWaiting(),
                    a
                      .DeleteOldAnnouncement(n, o)
                      .then(this.OnDeleteEventSuccessCallback)
                      .catch(this.OnDeleteEventFailureCallback))
                  : (a.ResetModel(), this.setState({ dialogState: "success" }));
            }),
            (s.prototype.OnChangeDeleteForum = function() {
              this.setState({
                bDeleteCommentThread: !this.state.bDeleteCommentThread
              });
            }),
            (s.prototype.render = function() {
              var e = this,
                t = this.props.eventModel,
                a = this.props.closeModal,
                n = "",
                r = new Array();
              switch (this.state.dialogState) {
                case "confirmation":
                  var o = t.GetNameWithFallback(Object(ae.d)(F.c.LANGUAGE)),
                    i = t.BIsVisibleEvent()
                      ? "#EventDisplay_AreYouSure_Visible"
                      : "#EventDisplay_AreYouSure",
                    n = Object(P.d)(i, o),
                    a = this.OnDelete;
                  t.BHasForumTopicGID() &&
                    r.push(
                      N.createElement(
                        "div",
                        {
                          key: "WantToDeleteCmtThread",
                          className: ta.a.Padding
                        },
                        N.createElement("input", {
                          type: "checkbox",
                          id: "del_cmt_post",
                          name: "del_cmt_post",
                          defaultChecked: this.state.bDeleteCommentThread,
                          onChange: this.OnChangeDeleteForum
                        }),
                        N.createElement(
                          "label",
                          { htmlFor: "del_cmt_post" },
                          Object(P.d)("#EventDisplay_DeleteEvent_Comment")
                        )
                      )
                    );
                  break;
                case "waiting":
                  (n = Object(P.d)("#EventDisplay_DeleteEvent_InProgress")),
                    r.push(N.createElement(Q.a, { key: "throbber" }));
                  break;
                case "error":
                  (n = Object(P.d)("#EventDisplay_DeleteEvent_Error")),
                    r.push(
                      N.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++s.m_uniqueError,
                          className: ta.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    );
                  break;
                case "failed_thread_delete":
                  (n = Object(P.d)(
                    "#EventDisplay_DeleteEvent_ForumTopicError"
                  )),
                    r.push(
                      N.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++s.m_uniqueError,
                          className: ta.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    ),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
                  break;
                case "success":
                  (n = Object(P.d)("#EventDisplay_DeleteEvent_Success")),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
              }
              return N.createElement(
                Ee.b,
                {
                  strTitle: Object(P.d)("#EventDisplay_DeleteEvent"),
                  strDescription: n,
                  onCancel: this.props.closeModal,
                  onOK: a,
                  bAlertDialog: "confirmation" != this.state.dialogState,
                  bOKDisabled: "waiting" == this.state.dialogState,
                  bDestructiveWarning: "error" == this.state.dialogState
                },
                r
              );
            }),
            (s.m_uniqueError = 0),
            Object(M.c)(
              [v.a],
              s.prototype,
              "OnDeleteEventSuccessCallback",
              null
            ),
            Object(M.c)(
              [v.a],
              s.prototype,
              "OnDeleteForumTopicSuccessCallback",
              null
            ),
            Object(M.c)(
              [v.a],
              s.prototype,
              "OnDeleteEventFailureCallback",
              null
            ),
            Object(M.c)(
              [v.a],
              s.prototype,
              "OnDeleteForumTopicFailureCallback",
              null
            ),
            Object(M.c)([v.a], s.prototype, "SetToWaiting", null),
            Object(M.c)([v.a], s.prototype, "OnDelete", null),
            Object(M.c)([v.a], s.prototype, "OnChangeDeleteForum", null),
            s
          );
        })(N.Component),
        ra = a("6eA3"),
        oa = a.n(ra),
        ia = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bRedirectToHome: !1,
                nMaxSaleDayIndex: (function(e) {
                  var t = void 0;
                  e &&
                    0 < e.GetSaleSectionCount() &&
                    e.BHasSaleEnabled() &&
                    e.GetSaleSections().forEach(function(e) {
                      "items" != e.section_type ||
                        e.smart_section ||
                        e.capsules.forEach(function(e) {
                          void 0 !== e.visibility_index &&
                            (void 0 === t || t < e.visibility_index) &&
                            (t = e.visibility_index);
                        });
                    });
                  return t;
                })(e.props.eventModel),
                nSaleDayIndex: e.props.eventModel
                  ? e.props.eventModel.GetDayIndexFromEventStart()
                  : 0
              }),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.OnDeleteVerifyRequest = function(e) {
              Object(ye.c)(
                N.createElement(na, {
                  eventModel: this.props.eventModel,
                  onDeleteSuccessAndCloseDialog: this
                    .OnDeleteSuccessAndComplete,
                  partnerEventStore: this.props.partnerEventStore
                }),
                Object(Se.o)(e)
              );
            }),
            (e.prototype.OnDeleteSuccessAndComplete = function() {
              this.setState({ bRedirectToHome: !0 });
            }),
            (e.prototype.OnChangeVisibilityDate = function(e) {
              this.setState({ nSaleDayIndex: e }),
                this.props.fnOnUpdateSaleDayIndex(e);
            }),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                a = e.addtionalAdminButtons,
                n = e.eventModel,
                r = e.partnerEventStore,
                o = e.useAnchors;
              if (this.state.bRedirectToHome)
                return Object(he.h)(n, he.a.k_eCommunityAdminPage);
              var i = x.a.Get().GetPartnerEventPermissions(n.clanSteamID),
                s = n.visibility_state == B.b.k_EEventStateVisible,
                l = n.visibility_state == B.b.k_EEventStateStaged;
              if (i.can_edit || i.support_user) {
                var c = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var d = 0; d <= this.state.nMaxSaleDayIndex; ++d)
                    c.push({
                      label: Object(P.d)("#SalePage_Admin_SaleEventDay", d + 1),
                      data: d
                    });
                return N.createElement(
                  b.a,
                  null,
                  N.createElement(
                    "div",
                    { className: ra.DisplayAdminPanel },
                    N.createElement(
                      "span",
                      { className: ra.DisplayAdminPanel_Title },
                      Object(P.d)("#EventDisplay_Admin_Title")
                    ),
                    N.createElement(
                      "div",
                      { className: ra.DisplayAdminPanel_ctn },
                      a,
                      a &&
                        N.createElement(
                          "span",
                          { className: ra.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      N.createElement(
                        he.c,
                        {
                          eventModel: n,
                          route: he.a.k_eCommunityEdit,
                          openNewWindow: o,
                          className: Object(R.a)(_t.Button, ra.AdminButton)
                        },
                        Object(P.d)("#EventEditor_Edit")
                      ),
                      r &&
                        N.createElement(
                          "span",
                          {
                            className: _t.Button + " " + ra.AdminButton,
                            onClick: this.OnDeleteVerifyRequest
                          },
                          Object(P.d)("#EventDisplay_DeleteEvent")
                        ),
                      !s &&
                        N.createElement(
                          N.Fragment,
                          null,
                          N.createElement(
                            he.c,
                            {
                              eventModel: n,
                              route: he.a.k_eCommunityPublish,
                              openNewWindow: o,
                              className: Object(R.a)(_t.Button, ra.AdminButton)
                            },
                            Object(P.d)(
                              l
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish"
                            )
                          )
                        ),
                      N.createElement(
                        he.c,
                        {
                          eventModel: n,
                          route: he.a.k_eCommunityAdminPage,
                          openNewWindow: o,
                          className: Object(R.a)(_t.Button, ra.AdminButton)
                        },
                        Object(P.d)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < c.length
                      ) &&
                        N.createElement(u.g, {
                          strDropDownClassName: _t.DropDownScroll,
                          rgOptions: c,
                          selectedOption: Math.min(
                            this.state.nMaxSaleDayIndex,
                            this.state.nSaleDayIndex
                          ),
                          onChange: function(e) {
                            return t.OnChangeVisibilityDate(e.data);
                          },
                          bDisableMouseOverlay: !0,
                          contextMenuPositionOptions: {
                            bDisableMouseOverlay: !0
                          }
                        }),
                      Boolean(
                        n.jsondata.bSaleEnabled && this.props.bPreviewMode
                      ) &&
                        N.createElement(
                          he.c,
                          {
                            eventModel: n,
                            route: he.a.k_eStoreSalePage,
                            openNewWindow: o,
                            className: Object(R.a)(_t.Button, ra.AdminButton)
                          },
                          Object(P.d)("#EventDisplay_SalesPage")
                        ),
                      Boolean(
                        n.jsondata.bSaleEnabled && F.i.is_support && n.GID
                      ) &&
                        N.createElement(
                          "a",
                          {
                            href:
                              (F.c.IN_CLIENT ? "steam://openurl/" : "") +
                              "https://steamstats.valve.org/sales/details/?gid=" +
                              n.GID +
                              "&clanid=" +
                              n.clanSteamID.GetAccountID(),
                            target: F.c.IN_CLIENT ? "" : "_blank",
                            className: Object(R.a)(
                              _t.Button,
                              ra.AdminButton,
                              _t.ValveOnlyBackground
                            )
                          },
                          Object(P.d)("#EventDisplay_StatsPage")
                        )
                    )
                  )
                );
              }
              return N.createElement("span", null);
            }),
            Object(M.c)([v.a], e.prototype, "OnDeleteVerifyRequest", null),
            Object(M.c)([v.a], e.prototype, "OnDeleteSuccessAndComplete", null),
            Object(M.c)([v.a], e.prototype, "OnChangeVisibilityDate", null),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component);
      var sa = a("bWts"),
        la = a.n(sa),
        ca = a("XsxU"),
        da = a.n(ca),
        pa = a("MnIK"),
        ua = a("Lql7"),
        ma = a("uIWk"),
        ha = a("7u3m"),
        va = a.n(ha),
        _a = a("D4G2"),
        ba = a.n(_a),
        ga = a("Ff1b"),
        ya = a.n(ga),
        Ea = a("go9d"),
        Sa = a.n(Ea),
        fa = a("/PpB"),
        Oa = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            t.m_cancelSignal = g.a.CancelToken.source();
            var a = G.a.InitFromClanID(e.creatorID.clan_account_id);
            return (
              (t.state = {
                bLoading: !ma.a.BHasCreatorHomeLoaded(a) || !H.a.BIsLoaded()
              }),
              t
            );
          }
          return (
            Object(M.d)(e, n),
            (e.prototype.componentDidMount = function() {
              var e,
                t = this;
              this.state.bLoading &&
                (H.a.HintLoad(),
                (e = G.a.InitFromClanID(this.props.creatorID.clan_account_id)),
                ma.a
                  .LoadCreatorHome(e, this.m_cancelSignal)
                  .then(function(e) {
                    H.a
                      .HintLoad()
                      .then(function(e) {
                        return t.setState({ bLoading: !1 });
                      })
                      .catch(function(e) {
                        return t.HandleLoadingError(e);
                      });
                  })
                  .catch(function(e) {
                    return t.HandleLoadingError(e);
                  }));
            }),
            (e.prototype.HandleLoadingError = function(e) {
              var t = Object(Re.a)(e);
              console.log("CreatorHomeEmbed hit error: " + t.strErrorMsg, t),
                this.setState({ bLoading: !1, strErrorMsg: t.strErrorMsg });
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "CreatorHomeEmbed component unmounted"
              );
            }),
            (e.prototype.GetSocialMediaElements = function(t) {
              var a = new Array();
              return (
                t.GetSocialList().forEach(function(e) {
                  return a.push(
                    N.createElement(wa, {
                      social: e,
                      key:
                        "creator_" +
                        t.GetClanAccountID() +
                        "_" +
                        e.external_type
                    })
                  );
                }),
                a
              );
            }),
            (e.prototype.OnFollowClick = function() {
              var e = this.props.eventModel,
                t = x.a.Get().GetPartnerEventPermissions(e.clanSteamID);
              x.a.Get().BIsUserLoggedIn()
                ? t.limited_user
                  ? Object(ye.d)(N.createElement(fa.a, null), window)
                  : this.setState(
                      { bApplyingFollowing: !0 },
                      this.TakeFollowAction
                    )
                : Object(ye.d)(
                    N.createElement(Ee.b, {
                      strTitle: Object(P.d)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: Object(P.d)(
                        "#EventDisplay_Share_NotLoggedIn_Description"
                      ),
                      strOKButtonText: Object(P.d)("#MobileLogin_SignIn"),
                      onOK: function() {
                        return Object(We.a)();
                      }
                    }),
                    window
                  );
            }),
            (e.prototype.TakeFollowAction = function() {
              var a = this,
                n = this.props.creatorID,
                e = G.a.InitFromClanID(n.clan_account_id),
                r = H.a.BIsFollowingCreator(e),
                o = H.a.BIsIgnoringCreator(e);
              H.a
                .UpdateFollowOrIgnoreCurator(e, !o, !(o || r))
                .then(function(e) {
                  var t = ma.a.GetCreatorHomeByID(n);
                  o || t.AdjustFollower(r ? -1 : 1),
                    a.setState({ bApplyingFollowing: !1 });
                })
                .catch(function(e) {
                  a.setState({ bApplyingFollowing: !1 }),
                    a.HandleLoadingError(e);
                });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return N.createElement(
                  "div",
                  { className: ua.DevSummaryWidgetCtn },
                  N.createElement(Q.a, null)
                );
              if (this.state.strErrorMsg) return N.createElement("div", null);
              var e = this.props,
                t = e.creatorID,
                a = e.bShowTagline,
                n = G.a.InitFromClanID(t.clan_account_id),
                r = ma.a.GetCreatorHomeByID(t),
                o = t.type,
                i =
                  "developer" == t.type
                    ? Object(P.d)("#CreatorHome_DevelopedBy")
                    : "publisher" == t.type
                    ? Object(P.d)("#CreatorHome_PublishedBy")
                    : Object(P.d)("#CreatorHome_InFranchise"),
                s = r.GetNumFollowers(),
                l = r.GetURL(o),
                c = this.GetSocialMediaElements(r),
                d = H.a.BIsFollowingCreator(n),
                p = H.a.BIsIgnoringCreator(n);
              return N.createElement(
                b.a,
                null,
                N.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      ua.DevSummaryCtn,
                      this.props.bSmallFormat ? ua.SmallFormat : ua.LargeFormat
                    )
                  },
                  !this.props.bHideCreatorType &&
                    N.createElement("span", { className: ua.Title }, i),
                  N.createElement(
                    "div",
                    { className: ua.DevSummaryWidgetCtn },
                    N.createElement("div", {
                      className: ua.DevSummaryBackground,
                      style: {
                        backgroundImage:
                          "url(" + r.GetAvatarURLFullSize() + " )"
                      }
                    }),
                    N.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          ua.DevSummaryContent,
                          _t.FlexColumnContainer,
                          _t.FlexContainSpaceBetween
                        )
                      },
                      N.createElement(
                        "div",
                        { className: _t.FlexRowContainer },
                        N.createElement(
                          "a",
                          { href: l },
                          N.createElement("img", {
                            className: ua.Avatar,
                            src: r.GetAvatarURLFullSize()
                          })
                        ),
                        N.createElement(
                          "div",
                          {
                            className: Object(R.a)(
                              _t.FlexColumnContainer,
                              ua.CreatorDescCtn
                            )
                          },
                          N.createElement(
                            "div",
                            {
                              className: Object(R.a)(
                                ua.CreatorTitleCtn,
                                _t.FlexColumnContainer
                              )
                            },
                            N.createElement(
                              "a",
                              { href: l, className: ua.CreatorNameName },
                              r.GetName()
                            ),
                            a &&
                              N.createElement(
                                "div",
                                {
                                  className: Object(R.a)(
                                    _t.FlexColumnContainer,
                                    ua.CreatorTagline
                                  )
                                },
                                r.GetTagLine()
                              )
                          ),
                          N.createElement(
                            "div",
                            {
                              className: this.props.bSmallFormat
                                ? _t.FlexColumnContainer
                                : _t.FlexRowContainer
                            },
                            N.createElement(
                              "div",
                              { className: ua.FollowBtnCtn },
                              N.createElement(
                                "div",
                                {
                                  className: Object(R.a)(
                                    _t.Button,
                                    ua.FollowButton
                                  ),
                                  onClick: this.OnFollowClick
                                },
                                this.state.bApplyingFollowing &&
                                  N.createElement(Q.a, { size: "small" }),
                                !this.state.bApplyingFollowing &&
                                  (d || p) &&
                                  N.createElement("img", {
                                    style: { height: "16px" },
                                    src:
                                      "https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_selected.png"
                                  }),
                                N.createElement(
                                  "div",
                                  { className: ua.FollowBtnText },
                                  !this.state.bApplyingFollowing &&
                                    (d
                                      ? Object(P.d)("#Button_Followed")
                                      : p
                                      ? Object(P.d)("#Button_Ignored")
                                      : Object(P.d)("#Button_Follow"))
                                )
                              ),
                              N.createElement(
                                "div",
                                { className: ua.Followers },
                                N.createElement(
                                  "span",
                                  null,
                                  s.toLocaleString(P.c.GetPreferredLocales())
                                ),
                                N.createElement("br", null),
                                Object(P.d)("#CreatorHome_JustFollowers")
                              )
                            ),
                            0 < c.length &&
                              N.createElement(
                                "div",
                                {
                                  className: Object(R.a)(
                                    ua.SocialContainer,
                                    _t.FlexColumnContainer
                                  )
                                },
                                c
                              )
                          )
                        )
                      )
                    )
                  )
                )
              );
            }),
            Object(M.c)([v.a], e.prototype, "OnFollowClick", null),
            Object(M.c)([v.a], e.prototype, "TakeFollowAction", null),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        Ca = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bLoading: !_.a.BIsAppidLoaded(e.appid) }), t;
          }
          return (
            Object(M.d)(e, a),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props.appid;
              this.state.bLoading &&
                _.a
                  .EnsureStoreCapsuleInfoLoaded(e)
                  .then(function() {
                    return a.setState({ bLoading: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(Re.a)(e);
                    console.log(
                      "CreatorHomeEmbedForApp - failed to load appinfo " +
                        t.strErrorMsg
                    ),
                      a.setState({ strErrorMsg: t.strErrorMsg, bLoading: !1 });
                  });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return N.createElement(
                  "div",
                  { className: ua.DevSummaryWidgetCtn },
                  N.createElement(Q.a, null)
                );
              var e = this.props,
                t = e.appid,
                a = e.eventModel,
                n = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
              if (
                !this.state.strErrorMsg &&
                n.creator_list &&
                0 < n.creator_list.length
              ) {
                var r = void 0,
                  o = void 0,
                  i = void 0;
                return (
                  n.creator_list.forEach(function(e) {
                    switch (e.type) {
                      case "developer":
                        void 0 === r && (r = e);
                        break;
                      case "publisher":
                        void 0 === o && (o = e);
                        break;
                      default:
                        void 0 === i && (i = e);
                    }
                  }),
                  N.createElement(
                    b.a,
                    null,
                    N.createElement(Oa, {
                      creatorID: r || (o || i),
                      eventModel: a,
                      bSmallFormat: !0
                    })
                  )
                );
              }
              return N.createElement("div", null);
            }),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        wa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.social,
                t = "";
              switch (e.external_type) {
                case 3:
                case 7:
                  t = va.a;
                  break;
                case 5:
                  t = ya.a;
                  break;
                case 4:
                  t = ba.a;
                  break;
                case 6:
                  t = Sa.a;
              }
              return N.createElement(
                "a",
                {
                  href:
                    (F.c.IN_CLIENT ? "steam://openurl_external/" : "") +
                    e.external_url,
                  target: F.c.IN_CLIENT ? void 0 : "_blank",
                  "data-tooltip-text": e.external_user_name
                    ? e.external_user_name
                    : e.external_url,
                  className: Object(R.a)(ua.SocialLink)
                },
                N.createElement("img", {
                  className: Object(R.a)(ua.SocialImg),
                  src: t
                }),
                N.createElement(
                  "div",
                  null,
                  e.external_follows.toLocaleString(P.c.GetPreferredLocales())
                )
              );
            }),
            t
          );
        })(N.Component),
        Ta = a("TOXn"),
        Ia = a("NKJh"),
        ka = a.n(Ia),
        Da = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                events: [],
                bLoading: !1,
                bShowInfiniteScrollOverlay: !1
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.PrepLoadEvents = function() {
              var e = this.props,
                t = e.partnerEventStore,
                a = e.eventModel;
              t &&
                a.BHasAnnouncementGID() &&
                this.setState({ bLoading: !0 }, this.ActualLoadEvent);
            }),
            (e.prototype.ActualLoadEvent = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(M.e)(this, function(e) {
                  return (
                    (t = this.props),
                    (a = t.partnerEventStore),
                    (n = t.eventModel),
                    a
                      .LoadAdjacentPartnerEventsByEvent(
                        n,
                        n.clanSteamID,
                        n.appid,
                        3,
                        3,
                        void 0,
                        this.m_cancelSignal
                      )
                      .then(function(e) {
                        !r.m_cancelSignal.token.reason && e && 0 < e.length
                          ? r.setState(
                              { bLoading: !1, events: e },
                              r.HandleTrackingWhenAdjacentLoadCompleted
                            )
                          : r.setState({ bLoading: !1 });
                      })
                      .catch(function(e) {
                        r.setState(
                          { bLoading: !1 },
                          r.HandleTrackingWhenAdjacentLoadCompleted
                        ),
                          console.log(
                            "EventDetails: " + Object(Re.a)(e).strErrorMsg
                          );
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.HandleTrackingWhenAdjacentLoadCompleted = function() {
              var t,
                e = this.props,
                a = e.eventModel,
                n = e.trackingLocation;
              n &&
                ((t = x.a.Get().GetTracker()),
                this.state.events &&
                  0 < this.state.events.length &&
                  this.state.events
                    .filter(function(e) {
                      return e.BIsPartnerEvent();
                    })
                    .forEach(function(e) {
                      return t.MarkEventShown(
                        e.GID,
                        e.clanSteamID.GetAccountID(),
                        n
                      );
                    }),
                a.BIsPartnerEvent() &&
                  a.BIsVisibleEvent() &&
                  t.MarkEventRead(a.GID, a.clanSteamID.GetAccountID(), n),
                t.Flush());
            }),
            (e.prototype.componentDidMount = function() {
              this.PrepLoadEvents();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              this.props.appid != e.appid &&
                this.setState({ events: [] }, this.PrepLoadEvents);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("PartnerEventRow unmounted");
            }),
            (e.prototype.ConstructEventRowCapsules = function() {
              var e = new Array();
              if (0 == this.state.events.length) return e;
              for (
                var t = 0,
                  a = this.props.eventModel,
                  n = new Array(),
                  r = 0,
                  o = this.state.events;
                r < o.length;
                r++
              ) {
                var i = o[r];
                i.BHasAnnouncementGID() && n.push(i.AnnouncementGID);
              }
              var s = this.props.partnerEventStore;
              oe.f(n);
              for (var l = 0, c = n; l < c.length; l++) {
                var d = c[l],
                  p = s.GetClanEventFromAnnouncementGID(d);
                if (
                  p &&
                  p.GID != a.GID &&
                  p.AnnouncementGID != a.AnnouncementGID &&
                  (p &&
                    p.visibility_state == B.b.k_EEventStateVisible &&
                    (e.push(
                      N.createElement(ja, {
                        key: p.GID + " " + p.AnnouncementGID,
                        event: p
                      })
                    ),
                    3 <= ++t))
                )
                  break;
              }
              return e;
            }),
            (e.prototype.OnViewAll = function() {
              this.setState({ bShowInfiniteScrollOverlay: !0 });
            }),
            (e.prototype.HideInfiniteScroller = function() {
              this.setState({ bShowInfiniteScrollOverlay: !1 });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.eventModel,
                a = e.partnerEventStore,
                n = e.appid;
              if (this.state.bShowInfiniteScrollOverlay)
                return N.createElement(Pe, {
                  appid: n,
                  eventModel: t,
                  announcementGID: t.GetAnnouncementGID(),
                  closeModal: this.HideInfiniteScroller,
                  partnerEventStore: a
                });
              if (this.state.bLoading)
                return N.createElement(Q.a, {
                  position: "center",
                  size: "medium"
                });
              if (0 == this.state.events.length)
                return N.createElement("div", null);
              var r = _.a.GetStoreCapsuleInfo(n).GetAppStoreData(),
                o = y.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
              if (!o)
                return (
                  Object(K.a)(
                    o,
                    "PartnerEventRow - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var i = this.ConstructEventRowCapsules();
              if (0 == i.length) return N.createElement("div", null);
              var s = t.BHasAnnouncementGID();
              return N.createElement(
                "div",
                { className: da.a.OtherEventsCtn },
                N.createElement(
                  "div",
                  { className: bt.a.EventSectionTitleCtn },
                  N.createElement(
                    "div",
                    { className: bt.a.EventSectionTitle },
                    Object(P.k)(
                      "#EventBrowse_MoreEventsTitle",
                      o.is_ogg ? r.title : o.group_name
                    ),
                    " "
                  ),
                  N.createElement(
                    "div",
                    { className: bt.a.EventSectionSpacer },
                    " "
                  ),
                  s &&
                    N.createElement(
                      "div",
                      {
                        className: bt.a.EventSectionMoreBtn,
                        onClick: this.OnViewAll
                      },
                      Object(P.d)("#EventBrowse_MoreEventsBtn")
                    ),
                  !s &&
                    N.createElement(
                      "a",
                      {
                        href:
                          F.c.COMMUNITY_BASE_URL +
                          "ogg/" +
                          n +
                          "/announcements",
                        className: bt.a.EventSectionMoreBtn
                      },
                      Object(P.d)("#EventBrowse_MoreEventsBtn")
                    )
                ),
                N.createElement("div", { className: da.a.OtherEvents }, i)
              );
            }),
            Object(M.c)([v.a], e.prototype, "PrepLoadEvents", null),
            Object(M.c)([v.a], e.prototype, "ActualLoadEvent", null),
            Object(M.c)(
              [v.a],
              e.prototype,
              "HandleTrackingWhenAdjacentLoadCompleted",
              null
            ),
            Object(M.c)([v.a], e.prototype, "OnViewAll", null),
            Object(M.c)([v.a], e.prototype, "HideInfiniteScroller", null),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        ja = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.appInfo,
                o = e.langOverride,
                i = e.onClick;
              if (!t)
                return N.createElement("div", {
                  className: da.a.OtherEvents_EventCtn
                });
              var s = o || Object(ae.d)(F.c.LANGUAGE),
                l =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        s,
                        ne.c.capsule_main
                      ),
                c = t.GetNameWithFallback(s),
                d = t.GetCategoryAsString(),
                p = t.GetSummaryWithFallback(s),
                u = t.GetSubTitleWithLanguageFallback(s);
              return (
                u && (30 < u.length || 30 < c.length) && (u = void 0),
                N.createElement(
                  N.Fragment,
                  null,
                  N.createElement(
                    he.c,
                    {
                      className: Object(R.a)(
                        da.a.OtherEvents_EventCtn,
                        da.a.HoversEnabled
                      ),
                      eventModel: t,
                      route: he.a.k_eView,
                      openNewWindow: n,
                      onClick: i
                    },
                    N.createElement(
                      "div",
                      { className: da.a.EventSummaryContainer },
                      N.createElement(
                        "div",
                        { className: da.a.EventSummaryType },
                        d
                      ),
                      N.createElement(
                        "div",
                        { className: da.a.EventSummaryText },
                        p
                      )
                    ),
                    N.createElement("div", {
                      className: da.a.OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    N.createElement(
                      "div",
                      { className: da.a.OtherEvents_ContentCtn },
                      N.createElement(
                        "div",
                        { className: da.a.OtherEvents_MainImageCtn },
                        N.createElement("img", {
                          src: l,
                          className: da.a.OtherEvents_MainImage
                        })
                      ),
                      N.createElement(
                        "div",
                        { className: da.a.OtherEvents_TextCtn },
                        N.createElement(
                          "div",
                          { className: da.a.OtherEvents_TextTitle },
                          c
                        ),
                        u &&
                          N.createElement(
                            "div",
                            { className: da.a.OtherEvents_SubTitle },
                            u
                          ),
                        N.createElement(re.a, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                        })
                      )
                    )
                  ),
                  r &&
                    N.createElement(
                      "span",
                      { className: da.a.AppCapsuleCtn },
                      N.createElement(
                        be.a,
                        {
                          strURL: F.c.STORE_BASE_URL + "app/" + r.appid,
                          type: "app",
                          id: r.appid,
                          hoverClassName: da.a.AppCapsuleImageHover
                        },
                        N.createElement("img", {
                          className: da.a.AppCapsuleImage,
                          src: this.props.appInfo.tiny_capsule
                        })
                      ),
                      N.createElement(
                        "span",
                        { className: da.a.AppCapsulePrice },
                        Boolean(this.props.appInfo.discount_percent) &&
                          N.createElement(
                            "span",
                            { className: ka.a.StoreSaleDiscountBox },
                            "-" + this.props.appInfo.discount_percent + "%"
                          ),
                        !this.props.appInfo.is_free &&
                          this.props.appInfo.price &&
                          N.createElement(
                            "span",
                            { className: ka.a.StoreSalePriceBox },
                            this.props.appInfo.price
                          )
                      )
                    )
                )
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        Aa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.onClick;
              if (!t)
                return N.createElement("div", {
                  className: da.a.OtherEvents_EventCtn
                });
              var o = Object(ae.d)(F.c.LANGUAGE),
                i =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        o,
                        ne.c.capsule_main
                      ),
                s = t.GetNameWithFallback(o),
                l = t.GetCategoryAsString();
              return N.createElement(
                he.c,
                {
                  className:
                    da.a.OtherEvents_EventCtn + " " + da.a.HorizontalEvent,
                  eventModel: t,
                  route: he.a.k_eView,
                  openNewWindow: n,
                  onClick: r
                },
                N.createElement(
                  "div",
                  { className: da.a.OtherEvents_ContentCtn },
                  N.createElement(
                    "div",
                    { className: da.a.OtherEvents_MainImageCtn },
                    N.createElement("img", {
                      src: i,
                      className: da.a.OtherEvents_MainImage
                    })
                  )
                ),
                N.createElement(
                  "div",
                  { className: da.a.OtherEvents_TextCtn },
                  N.createElement(
                    "div",
                    { className: da.a.HorizontalDescriptionCtn },
                    N.createElement(
                      "div",
                      { className: da.a.HorizontalDescription },
                      l
                    ),
                    N.createElement(re.a, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                    })
                  ),
                  N.createElement("div", { className: da.a.HorizontalTitle }, s)
                )
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        La = (function() {
          function e(e) {
            (this.m_stats = e || {
              event_gid: "0",
              library_overview_shown: 0,
              library_overview_read: 0,
              app_details_spotlight_shown: 0,
              app_details_spotlight_read: 0,
              app_details_activity_shown: 0,
              app_details_activity_read: 0,
              store_app_page_shown: 0,
              store_app_page_read: 0,
              store_front_page_shown: 0,
              store_front_page_read: 0,
              community_hub_shown: 0,
              community_hub_read: 0,
              news_hub_shown: 0,
              news_hub_read: 0,
              event_scroller_read: 0
            }),
              (this.m_stats.total_showm =
                this.m_stats.library_overview_shown +
                this.m_stats.app_details_activity_shown +
                this.m_stats.app_details_spotlight_shown +
                this.m_stats.store_app_page_shown +
                this.m_stats.store_front_page_shown +
                this.m_stats.community_hub_shown +
                this.m_stats.news_hub_shown),
              (this.m_stats.total_read =
                this.m_stats.library_overview_read +
                this.m_stats.app_details_activity_read +
                this.m_stats.app_details_spotlight_read +
                this.m_stats.store_app_page_read +
                this.m_stats.store_front_page_read +
                this.m_stats.community_hub_read +
                this.m_stats.news_hub_read +
                this.m_stats.event_scroller_read),
              (this.m_lastUpdateTime = e ? Date.now() / 1e3 : 0);
          }
          return (
            (e.prototype.reset = function(e) {
              (this.m_stats.library_overview_shown = e.library_overview_shown),
                (this.m_stats.library_overview_read = e.library_overview_read),
                (this.m_stats.app_details_spotlight_shown =
                  e.app_details_spotlight_shown),
                (this.m_stats.app_details_spotlight_read =
                  e.app_details_spotlight_read),
                (this.m_stats.app_details_activity_shown =
                  e.app_details_activity_shown),
                (this.m_stats.app_details_activity_read =
                  e.app_details_activity_read),
                (this.m_stats.store_app_page_shown = e.store_app_page_shown),
                (this.m_stats.store_app_page_read = e.store_app_page_read),
                (this.m_stats.store_front_page_shown =
                  e.store_front_page_shown),
                (this.m_stats.store_front_page_read = e.store_front_page_read),
                (this.m_stats.community_hub_shown = e.community_hub_shown),
                (this.m_stats.community_hub_read = e.community_hub_read),
                (this.m_stats.news_hub_shown = e.news_hub_shown),
                (this.m_stats.news_hub_read = e.news_hub_read),
                (this.m_stats.event_scroller_read = e.event_scroller_read),
                (this.m_stats.total_showm =
                  e.library_overview_shown +
                  e.app_details_activity_shown +
                  e.app_details_spotlight_shown +
                  e.store_app_page_shown +
                  e.store_front_page_shown +
                  e.community_hub_shown +
                  e.news_hub_shown),
                (this.m_stats.total_read =
                  e.library_overview_read +
                  e.app_details_activity_read +
                  e.app_details_spotlight_read +
                  e.store_app_page_read +
                  e.store_front_page_read +
                  e.community_hub_read +
                  e.news_hub_read +
                  e.event_scroller_read),
                (this.m_lastUpdateTime = Date.now() / 1e3);
            }),
            Object(M.c)([m.x], e.prototype, "m_stats", void 0),
            Object(M.c)([m.x], e.prototype, "m_lastUpdateTime", void 0),
            e
          );
        })(),
        Ga = new ((function() {
          function e() {
            (this.m_mapPerEventStats = new Map()),
              (this.m_mapSummaryStats = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var e,
                t,
                n = this;
              this.m_bLoadedFromConfig ||
                ((e = Object(F.f)("trackingdatasummary", "application_config")),
                this.ValidateStoreDefault(e) &&
                  this.m_mapSummaryStats.set(e.clan_account_id, new La(e)),
                (t = Object(F.f)("trackingdataevents", "application_config")),
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = G.a.InitFromClanID(e.clan_account_id),
                      a = n.GetKey(t, e.event_gid);
                    n.m_mapPerEventStats.set(a, new La(e));
                  }),
                (this.m_bLoadedFromConfig = !0));
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              return (
                !(!e || "object" != typeof e || !e.clan_account_id) &&
                ("number" == typeof e.clan_account_id && 0 < e.clan_account_id)
              );
            }),
            (e.prototype.ValidateStoreDefaultList = function(e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                ("number" == typeof t[0].clan_account_id &&
                  0 < t[0].clan_account_id)
              );
            }),
            (e.prototype.GetStatsFor = function(e, t) {
              this.LazyInit();
              var a = this.GetKey(e, t);
              return (
                this.m_mapPerEventStats.has(a) ||
                  this.m_mapPerEventStats.set(a, new La(null)),
                this.m_mapPerEventStats.get(a)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new La(null)),
                this.m_mapSummaryStats.get(e.GetAccountID())
              );
            }),
            (e.prototype.GetKey = function(e, t) {
              return e.GetAccountID() + "_" + t;
            }),
            (e.prototype.LoadStatsForEvents = function(c, d, p) {
              return Object(M.b)(this, void 0, void 0, function() {
                var n,
                  t,
                  a,
                  r,
                  o,
                  i,
                  s,
                  l = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        (this.LazyInit(),
                        (n = Date.now() / 1e3),
                        !(t = d.filter(function(e) {
                          var t = l.GetKey(c, e),
                            a = l.m_mapPerEventStats.get(t);
                          return (
                            !a ||
                            null == a.m_stats ||
                            a.m_lastUpdateTime < n - 3600
                          );
                        })) || 0 == t.length)
                      )
                        return [2];
                      (a =
                        Object(F.d)() + "actions/ajaxgetpartnereventsreport"),
                        (r = {
                          sessionid: F.c.SESSIONID,
                          clan_account_id: c.GetAccountID(),
                          gidlist: t.join(",")
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          g.a.get(a, {
                            params: r,
                            withCredentials: !0,
                            cancelToken: p.token
                          })
                        ]
                      );
                    case 2:
                      return (
                        (o = e.sent()),
                        Object(m.z)(function() {
                          l.m_mapSummaryStats.set(
                            c.GetAccountID(),
                            new La(o.data.summary)
                          ),
                            o.data.events_detail.forEach(function(e) {
                              var t = l.GetKey(c, e.event_gid);
                              l.m_mapPerEventStats.has(t)
                                ? l.m_mapPerEventStats.get(t).reset(e)
                                : l.m_mapPerEventStats.set(t, new La(e));
                            });
                        }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
                        (s = Object(Re.a)(i)),
                        console.error(
                          "CPartnerEventReportingStore " + s.strErrorMsg,
                          s
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            Object(M.c)([m.x], e.prototype, "m_mapPerEventStats", void 0),
            Object(M.c)([m.x], e.prototype, "m_mapSummaryStats", void 0),
            Object(M.c)([m.h], e.prototype, "LazyInit", null),
            e
          );
        })())(),
        Na = a("sGzE"),
        Ma = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.summary,
                a = e.bIncludeDescription;
              return 0 == t.total_read + t.total_showm
                ? null
                : N.createElement(
                    "div",
                    null,
                    N.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          Na.StatsCtnTitle,
                          a ? Na.NormalStatsMode : Na.SmallStatsMode
                        )
                      },
                      N.createElement(
                        "h1",
                        null,
                        Object(P.d)("#EventDashBoard_SummaryStats_Title")
                      ),
                      Boolean(a) &&
                        N.createElement(
                          "p",
                          null,
                          Object(P.d)("#EventDashBoard_SummaryStats_Desc"),
                          " ",
                          N.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                              target: "_blank"
                            },
                            Object(P.d)("#EventDashBoard_SummaryStats_Link")
                          )
                        )
                    ),
                    N.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          Na.StatsCtn,
                          a ? Na.NormalStatsMode : Na.SmallStatsMode
                        )
                      },
                      N.createElement(
                        "div",
                        { className: Na.StatsLeftSection },
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle_ctn },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)("#EventDashBoard_Location_LibraryHome")
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_LibraryHome_Shown"
                            )
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.library_overview_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_LibraryHome_Read"
                            )
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.library_overview_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        N.createElement("br", null),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle_ctn },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Location_LibraryDetail"
                            )
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                            )
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                            )
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        N.createElement("br", null),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Shown"
                            )
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.app_details_activity_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Read"
                            )
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.app_details_activity_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        )
                      ),
                      N.createElement(
                        "div",
                        { className: Na.StatsRightSection },
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle_ctn },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Shown"
                            )
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.store_app_page_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Read"
                            )
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.store_app_page_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        N.createElement("br", null),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle_ctn },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Location_CommunityDetail"
                            )
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_Community_Shown"
                            )
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.community_hub_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_Community_Read"
                            )
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.community_hub_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle_ctn },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Location_NewsHubDetail"
                            )
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)("#EventDashBoard_Summary_NewsHub_Shown")
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.news_hub_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        N.createElement(
                          "div",
                          { className: Na.StatsTitle },
                          N.createElement(
                            "span",
                            null,
                            Object(P.d)("#EventDashBoard_Summary_NewsHub_Read")
                          ),
                          N.createElement(
                            "span",
                            null,
                            t.news_hub_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        )
                      )
                    )
                  );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        xa = a("ZCZY"),
        Ba = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.GenerateBreadCrumbs = function() {
              var t = new Array();
              return (
                this.props.crumbs.forEach(function(e) {
                  e.url.startsWith("http")
                    ? t.push(
                        N.createElement(
                          "a",
                          { key: "anchor_" + e.name, href: e.url },
                          e.name
                        )
                      )
                    : t.push(
                        N.createElement(
                          S.b,
                          { key: "link_" + e.name, to: e.url },
                          e.name
                        )
                      ),
                    t.push(
                      N.createElement("span", { key: e.name + "span" }, " > ")
                    );
                }),
                t
              );
            }),
            (t.prototype.render = function() {
              var e = this.GenerateBreadCrumbs();
              return N.createElement(
                "div",
                { className: Object(R.a)(xa.BreadContainer) },
                N.createElement("div", { className: "blockbg" }, e),
                N.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(N.Component),
        Ra = a("4sqd"),
        Pa = a("5L1o"),
        Fa = N.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(4)]).then(
            a.bind(null, "NIbt")
          );
        }),
        Ha = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = g.a.CancelToken.source()),
              (e.state = {
                bLoadingAppInfo: !_.a.BIsAppidLoaded(e.props.event.appid),
                bLoadingClanInfo: !!y.a.GetClanInfoByClanAccountID(
                  e.props.event.clanSteamID.GetAccountID()
                )
              }),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this;
              window.scrollTo(0, 0);
              var e = this.props.event.appid;
              this.state.bLoadingAppInfo &&
                _.a.EnsureStoreCapsuleInfoLoaded(e).then(function() {
                  return t.setState({ bLoadingAppInfo: !1 });
                }),
                this.state.bLoadingClanInfo &&
                  y.a
                    .LoadOGGClanInfoForClanSteamID(this.props.event.clanSteamID)
                    .then(function(e) {
                      return t.setState({ bLoadingClanInfo: !1 });
                    });
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("EventDetails is being unmounted");
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.lang,
                n = e.partnerEventStore,
                r = e.emoticonStore,
                o = e.nOverrideStartTime,
                i = e.nOverrideEndTime,
                s = e.adminPanel,
                l = e.previewMode,
                c = e.otherEventRow,
                d = e.titleBar;
              if (
                !this.props.event.bLoaded ||
                this.state.bLoadingAppInfo ||
                this.state.bLoadingClanInfo
              )
                return N.createElement(
                  "div",
                  { className: Be.a.FlexCenter, style: { height: "400px" } },
                  N.createElement(Q.a, {
                    size: "medium",
                    string: Object(P.d)("#Loading")
                  })
                );
              var p = t.GetDescriptionWithFallback(a),
                u = _.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(F.d)() == F.c.STORE_BASE_URL,
                h = y.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                v = Object(he.d)(
                  t,
                  m ? he.a.k_eStoreNewsHub : he.a.k_eCommunityAllNews,
                  "allowRelative",
                  h && h.vanity_url
                );
              return N.createElement(za, {
                event: t,
                lang: a,
                titleBar: d,
                body: N.createElement(
                  b.a,
                  null,
                  N.createElement(
                    "div",
                    { className: oa.a.EventDetailTitleContainer },
                    N.createElement(Ba, {
                      crumbs: [
                        {
                          name: Object(P.d)("#BreadCrumbs_AllEvents"),
                          url: Object(he.d)(
                            t,
                            he.a.k_eStoreUsersNewsHub,
                            "allowRelative"
                          )
                        },
                        {
                          name: Object(P.d)("#BreadCrumbs_GameEvents", u.title),
                          url: v
                        }
                      ]
                    }),
                    N.createElement(
                      "div",
                      { className: oa.a.EventDetailTitle },
                      t.GetNameWithFallback(a)
                    ),
                    t.BHasSubTitle(a) &&
                      N.createElement(
                        "div",
                        { className: oa.a.EventDetailsSubTitle },
                        t.GetSubTitle(a)
                      )
                  ),
                  t.BHasBroadcastEnabled() &&
                    N.createElement(
                      "div",
                      { className: oa.a.EventBroadcastCtn },
                      N.createElement(
                        N.Suspense,
                        { fallback: N.createElement("div", null) },
                        N.createElement(Fa, {
                          event: this.props.event,
                          bIsPreview: this.props.previewMode,
                          accountIDs: this.props.previewMode
                            ? this.props.event.jsondata.broadcast_whitelist
                            : void 0
                        })
                      )
                    ),
                  N.createElement(
                    "div",
                    { className: oa.a.EventColumns },
                    N.createElement(
                      "div",
                      { className: oa.a.EventDetailsDescription },
                      N.createElement(
                        b.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          N.createElement(Ra.a, {
                            event: t,
                            lang: a,
                            previewMode: l
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          N.createElement(Ra.b, {
                            event: t,
                            lang: a,
                            previewMode: l
                          })
                      ),
                      N.createElement(
                        b.a,
                        null,
                        N.createElement(
                          "div",
                          {
                            className: Object(R.a)(
                              "EventDetailsBody",
                              oa.a.EventDetailsBody
                            )
                          },
                          N.createElement(Ta.a, {
                            text: p || "",
                            partnerEventStore: n,
                            showErrorInfo: l,
                            event: t,
                            languageOverride: a
                          })
                        )
                      ),
                      Boolean(t.jsondata.read_more_link) &&
                        N.createElement(
                          O.a,
                          {
                            className: Object(R.a)(bt.a.Button),
                            href: t.jsondata.read_more_link
                          },
                          Object(P.d)("#EventEmail_Button_ClickForMoreDetails")
                        ),
                      N.createElement("span", { className: bt.a.Clear }),
                      N.createElement(
                        b.a,
                        null,
                        N.createElement(vt.a, { appid: t.appid })
                      )
                    ),
                    N.createElement(
                      b.a,
                      null,
                      N.createElement(Ua, {
                        event: t,
                        lang: a,
                        nOverrideStartTime: o,
                        nOverrideEndTime: i
                      })
                    )
                  ),
                  N.createElement($.b, {
                    eventModel: t,
                    emoticonStore: r,
                    partnerEventStore: n
                  })
                ),
                postbody: N.createElement(b.a, null, s, c),
                footer: N.createElement(
                  b.a,
                  null,
                  N.createElement(
                    "div",
                    { className: oa.a.AppSummaryCtn },
                    N.createElement(
                      "div",
                      { className: oa.a.EventBodyPosition },
                      Boolean(
                        null != u.appid && null != u.appid && 0 != u.appid
                      ) &&
                        N.createElement(
                          "div",
                          { className: oa.a.AppSummaryWidgetTitleCtn },
                          N.createElement(
                            "span",
                            { className: oa.a.Title },
                            Object(P.d)("#CreatorHome_ThisGame")
                          ),
                          N.createElement(
                            "div",
                            { className: oa.a.AppSummaryWidgetCtn },
                            N.createElement(Pa.g, { id: t.appid })
                          )
                        ),
                      N.createElement(Ca, {
                        appid: t.appid,
                        eventModel: t,
                        bSmallFormat: !0
                      })
                    )
                  )
                )
              });
            }),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        za = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.lang,
                n = e.titleBar,
                r = e.body,
                o = e.postbody,
                i = e.footer,
                s = t.GetImageURLWithFallback("background", a),
                l = t.BIsImageSafeForAllAges("background", a),
                c = "lang_" + Object(ae.c)(a),
                d = t.BImageNeedScreenshotFallback("background", a);
              return N.createElement(
                "div",
                {
                  className: Object(R.a)(
                    oa.a.EventDetailsPageContainer,
                    c,
                    bt.a.PartnerEventFont,
                    l
                      ? oa.a.DetailArtworkAgeAppropriate
                      : oa.a.DetailArtworkAgeNotAppropriate,
                    d && oa.a.NoTitleArtwork
                  )
                },
                n,
                N.createElement(
                  "div",
                  { className: oa.a.EventCoverImageCtn },
                  N.createElement(
                    "div",
                    { className: oa.a.EventCoverImageBlr },
                    N.createElement("div", {
                      className: oa.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + s + ")"
                      }
                    }),
                    N.createElement("div", {
                      className: oa.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + s + ")"
                      }
                    })
                  ),
                  N.createElement("div", { className: oa.a.CoverImageGradient })
                ),
                N.createElement(
                  "div",
                  { className: oa.a.EventBodyCtn },
                  N.createElement("div", {
                    className: oa.a.EventBackgroundBlurCtn
                  }),
                  N.createElement(
                    "div",
                    { className: oa.a.EventBodyPosition },
                    N.createElement(
                      "div",
                      { className: oa.a.EventBody },
                      N.createElement("div", {
                        className: oa.a.EventBackgroundBlur,
                        style: { backgroundImage: "url(" + s + ")" }
                      }),
                      N.createElement(b.a, null, r)
                    ),
                    Boolean(o) && N.createElement(b.a, null, o)
                  )
                ),
                Boolean(i) && N.createElement(b.a, null, i)
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        Ua = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.componentDidMount = function() {
              _.a.EnsureStoreCapsuleInfoLoaded(this.props.event.appid);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.lang,
                n = e.nOverrideStartTime,
                r = e.nOverrideEndTime,
                o = t.GetCategoryAsString(),
                i = y.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
              if (!i)
                return (
                  Object(K.a)(
                    i,
                    "EventDetailsRightColumn - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var s = L.a.GetTimeNowWithOverride(),
                l = n || t.GetStartTimeAndDateUnixSeconds();
              return N.createElement(
                "div",
                { className: oa.a.EventDetailTitleDesc },
                N.createElement(
                  "div",
                  { className: oa.a.EventDetailsSticky },
                  i.is_ogg
                    ? N.createElement(Wa, { appid: i.appid })
                    : N.createElement(Va, { clanSteamID: t.clanSteamID }),
                  N.createElement(vt.b, {
                    event: t,
                    nOverrideEndTime: r,
                    nOverrideStartTime: n
                  }),
                  28 !== t.type &&
                    s < l &&
                    N.createElement(
                      "div",
                      { className: oa.a.EventDetailTimeInfo },
                      N.createElement(ee.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: a
                      })
                    ),
                  N.createElement(
                    "div",
                    { className: oa.a.EventDetailUserType },
                    N.createElement(
                      "div",
                      { className: oa.a.RightSideTitles },
                      Object(P.d)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    N.createElement(
                      "div",
                      { className: oa.a.EventDetailsType },
                      o,
                      " "
                    )
                  ),
                  N.createElement(qa, { event: t })
                )
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        Wa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var t = this.props.appid;
              Object(K.a)(t && 0 != t, "Expected Appid In Game Info Section");
              var e = _.a.GetStoreCapsuleInfo(t),
                a = e.GetAppStoreData();
              return N.createElement(
                "div",
                { className: oa.a.EventDetailGameCallToAction },
                N.createElement(
                  "div",
                  { className: oa.a.RightSideTitles },
                  ct.u.some(function(e) {
                    return t === e;
                  })
                    ? Object(P.d)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(P.d)("#EventDisplay_RightColumnTitle_Game")
                ),
                N.createElement(
                  "a",
                  { href: e ? a.capsule_link : "" },
                  N.createElement("div", {
                    className: oa.a.EventDetailsGame,
                    style: { backgroundImage: "url(" + a.capsule + ")" }
                  })
                ),
                N.createElement(Za, { appid: t })
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        Va = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.clanSteamID,
                t = y.a.GetClanInfoByClanAccountID(e.GetAccountID());
              return t
                ? N.createElement(
                    "div",
                    { className: oa.a.EventDetailGameCallToAction },
                    N.createElement(
                      "div",
                      { className: oa.a.RightSideTitles },
                      t.group_name
                    ),
                    N.createElement(
                      "a",
                      { href: y.a.GetCreatorStoreURL(e) },
                      N.createElement("div", {
                        className: oa.a.EventDetailsAvatar,
                        style: {
                          backgroundImage: "url(" + t.avatar_full_url + ")"
                        }
                      })
                    )
                  )
                : (Object(K.a)(
                    t,
                    "EventDetailsRightCreatorInfo - clan info (" +
                      e.GetAccountID() +
                      ") is missing"
                  ),
                  null);
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        Za = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.componentDidMount = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                return Object(M.e)(this, function(e) {
                  return (
                    _.a.EnsureStoreCapsuleInfoLoaded(this.props.appid),
                    H.a.HintLoad(),
                    [2]
                  );
                });
              });
            }),
            (t.prototype.render = function() {
              var e = this.props.appid,
                t = _.a.GetStoreCapsuleInfo(e),
                a = t.GetAppStoreData(),
                n = null;
              H.a.BOwnsApp(e)
                ? (n = Object(P.d)("#EventDisplay_CallToAction_InLibrary"))
                : t.GetAppStoreData().coming_soon && !t.GetAppStoreData().subid
                ? (n = Object(P.d)("#EventDisplay_CallToAction_ComingSoon"))
                : a.is_free
                ? (n = Object(P.d)("#EventDisplay_CallToAction_FreeToPlay"))
                : a.is_free || (n = a.price);
              var r =
                1 !== a.success ||
                ct.u.some(function(e) {
                  return a.appid === e;
                });
              return N.createElement(
                "div",
                { className: r ? oa.a.SteamBlog : void 0 },
                N.createElement(
                  "div",
                  { className: oa.a.GameActions },
                  N.createElement(
                    "div",
                    {
                      className: oa.a.Ownership,
                      style: { fontSize: n && n.length < 10 ? "12px" : "10px" }
                    },
                    n || null
                  ),
                  N.createElement(Pa.a, {
                    info: a,
                    className: oa.a.ActionButton
                  })
                ),
                N.createElement(
                  "div",
                  { className: Object(R.a)(oa.a.GameActions) },
                  N.createElement(Pa.i, {
                    info: a,
                    className: oa.a.ActionButton
                  })
                )
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        Ya = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        qa = (N.Component,
        (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_cancelSignal = g.a.CancelToken.source()), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this,
                a = this.props.event;
              a.BIsPartnerEvent() &&
                a.BIsVisibleEvent() &&
                x.a
                  .Get()
                  .LoadSingleAppEventPermissions(a.clanSteamID)
                  .then(function(e) {
                    e &&
                      e.can_edit &&
                      Ga.LoadStatsForEvents(
                        a.clanSteamID,
                        [a.GID],
                        t.m_cancelSignal
                      );
                  });
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("EventDisplayEditorInfo cancelled");
            }),
            (e.prototype.render = function() {
              var e = this.props.event;
              if (!x.a.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
                return null;
              var t =
                e.BIsPartnerEvent() &&
                e.BIsVisibleEvent() &&
                Ga.GetStatsFor(e.clanSteamID, e.GID);
              return N.createElement(
                b.a,
                null,
                N.createElement(
                  "div",
                  { className: oa.a.EditorStatsCtn },
                  N.createElement(
                    "div",
                    { className: oa.a.EditorStatsRow },
                    N.createElement(
                      "span",
                      null,
                      Object(P.d)("#EventEditor_Comments")
                    ),
                    N.createElement(
                      "span",
                      null,
                      e.nCommentCount.toLocaleString(P.c.GetPreferredLocales())
                    )
                  ),
                  N.createElement(
                    "div",
                    { className: oa.a.EditorStatsRow },
                    N.createElement(
                      "span",
                      null,
                      Object(P.d)("#EventEditor_UpVotes")
                    ),
                    N.createElement(
                      "span",
                      null,
                      e.nVotesUp
                        ? e.nVotesUp.toLocaleString(P.c.GetPreferredLocales())
                        : 0
                    )
                  ),
                  N.createElement(
                    "div",
                    { className: oa.a.EditorStatsRow },
                    N.createElement(
                      "span",
                      null,
                      Object(P.d)("#EventEditor_DownVotes")
                    ),
                    N.createElement(
                      "span",
                      null,
                      e.nVotesDown
                        ? e.nVotesDown.toLocaleString(P.c.GetPreferredLocales())
                        : 0
                    )
                  )
                ),
                Boolean(t) &&
                  N.createElement(
                    "div",
                    { className: oa.a.EditorStatsCtn },
                    Object(P.d)("#EventDashBoard_SummaryStats_Admin_Title"),
                    N.createElement(Ma, { summary: t.m_stats })
                  )
              );
            }),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component)),
        Ja = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.componentDidMount = function() {
              Ut.GetRawDoorData() || Ut.LoadDoorData(),
                zt.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = Ut.GetRawDoorData();
              if (!e) return null;
              for (
                var t = e.length - 1,
                  a = L.a.GetTimeNowWithOverride() > e[t].rtime_start,
                  n = [],
                  r = 0;
                r <= t;
                r++
              )
                n.push(
                  N.createElement(Ka, {
                    key: "envelope-" + r,
                    iDoorIndex: r,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var o = zt.GetSaleTokenPoints().points;
              return N.createElement(
                b.a,
                null,
                N.createElement(
                  "div",
                  { className: oa.a.LunarNewYearHeader },
                  N.createElement(
                    "div",
                    { className: oa.a.EnvelopeArea },
                    0 <= o &&
                      N.createElement(
                        "div",
                        { className: oa.a.TokenBalanceContainer },
                        Object(P.d)("#Lunar2020_YourBalancePrefix"),
                        N.createElement(
                          "a",
                          {
                            className: oa.a.TokenBalance,
                            href: F.c.STORE_BASE_URL + "lunarnewyearmarket"
                          },
                          " ",
                          Object(P.d)("#Lunar2020_BalanceNumberOfTokens", o),
                          " "
                        )
                      ),
                    n
                  ),
                  !a &&
                    N.createElement(
                      "div",
                      { className: oa.a.BottomMessage },
                      Object(P.d)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        Qa = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        Ka = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.OpenEnvelope = function(n) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Ut.BIsDoorOpened(this.props.iDoorIndex)),
                        (a = Object(Se.o)(n)),
                        t
                          ? (Object(ye.b)(
                              N.createElement(
                                en,
                                Object(M.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              a
                            ),
                            [2])
                          : [4, Ut.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(ye.b)(
                            N.createElement(
                              en,
                              Object(M.a)({ bIsFirstOpen: !0 }, this.props)
                            ),
                            a
                          ),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.ShowLimitedUserDialog = function(e) {
              var t = Object(Se.o)(e),
                a = N.createElement(
                  "a",
                  { href: F.c.HELP_BASE_URL },
                  Object(P.d)("#User_LimitedAccount_UrlInfo")
                );
              Object(ye.b)(
                N.createElement(Ee.b, {
                  strTitle: Object(P.d)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(P.k)("#User_LimitedAccount", a),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              F.i.is_support && Ut.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                a = e.strFontFamily;
              Object(K.a)(
                0 <= t && t < Qa.length && t < Ut.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var n = Object(P.d)(Qa[t]),
                  r = !F.i.logged_in,
                  o = Ut.BIsDoorOpened(t),
                  i = Ut.BCanUserOpenDoor(t),
                  s = !0,
                  l = 0;
                l < t;
                l++
              )
                s = s && Ut.BIsDoorOpened(l);
              var c = !o && i && s,
                d = new Date(1e3 * Ut.GetRawDoorData()[t].rtime_start),
                p = r
                  ? Object(P.d)("#Login_SignIn")
                  : o
                  ? Object(P.d)("#Lunar2020_RereadStory")
                  : c
                  ? Object(P.d)("#Lunar2020_GiftCanBeOpenedNow")
                  : i
                  ? Object(P.d)("#Lunar2020_GiftCanBeOpenedAfterThePreviousOne")
                  : Object(P.d)(
                      "#Lunar2020_GiftLockedUntilDate",
                      d.toLocaleDateString(P.c.GetPreferredLocales(), {
                        month: "numeric",
                        day: "numeric"
                      })
                    ),
                u = r
                  ? We.a
                  : F.i.is_limited
                  ? this.ShowLimitedUserDialog
                  : o || c
                  ? this.OpenEnvelope
                  : null,
                m = Object(R.a)(
                  oa.a.EnvelopeContainer,
                  r && oa.a.NeedLogin,
                  o && oa.a.Opened,
                  c && oa.a.Unlocked,
                  !o && !c && oa.a.Locked
                );
              return N.createElement(
                "div",
                { className: m },
                N.createElement("div", { className: oa.a.BackingRect }),
                N.createElement(
                  "div",
                  { className: oa.a.Envelope },
                  N.createElement(
                    "div",
                    { className: oa.a.GiftLabel, style: { fontFamily: a } },
                    n
                  )
                ),
                N.createElement(
                  "div",
                  { className: oa.a.OpenState, onClick: u },
                  p
                ),
                (F.i.is_support &&
                  o &&
                  ("beta" == F.c.WEB_UNIVERSE || "dev" == F.c.WEB_UNIVERSE) &&
                  N.createElement(
                    "div",
                    {
                      className: Object(R.a)(oa.a.OpenState, oa.a.VO),
                      onClick: this.VOOnClose
                    },
                    "(VO) Close Gift"
                  )) ||
                  null
              );
            }),
            Object(M.c)([v.a], t.prototype, "OpenEnvelope", null),
            Object(M.c)([v.a], t.prototype, "ShowLimitedUserDialog", null),
            Object(M.c)([v.a], t.prototype, "VOOnClose", null),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        Xa = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        $a = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        en = function(e) {
          var t = N.useState(!e.bIsFirstOpen),
            a = t[0],
            n = t[1];
          N.useEffect(function() {
            return n(!0);
          }, []);
          var r =
              F.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.mp4" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            o =
              F.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.webm" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            i = e.iDoorIndex == Ut.GetDoorCount() - 1;
          return N.createElement(
            Ee.c,
            {
              className: oa.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            N.createElement(
              "div",
              { className: oa.a.Container },
              N.createElement(
                "div",
                { className: oa.a.Column },
                N.createElement(
                  "div",
                  { className: oa.a.StoryHeader },
                  Object(P.d)("#Lunar2020_StoryTitle")
                ),
                N.createElement(
                  "div",
                  { className: oa.a.StorySubHeader },
                  Object(P.d)("#Lunar2020_StorySubTitle")
                ),
                N.createElement(
                  "div",
                  { className: oa.a.StorySubHeader },
                  Object(P.d)(Xa[e.iDoorIndex])
                ),
                N.createElement(
                  "div",
                  { className: oa.a.StoryText },
                  Object(P.d)($a[e.iDoorIndex])
                ),
                N.createElement(
                  "div",
                  { className: oa.a.VideoBox },
                  N.createElement(
                    "div",
                    {
                      className: Object(R.a)(oa.a.CoinText, a && oa.a.Visible)
                    },
                    Object(P.d)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  N.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: oa.a.LunarNewYearOpenEnvelopeVideo
                    },
                    N.createElement("source", { src: r, type: "video/mp4" }),
                    N.createElement("source", { src: o, type: "video/webm" }),
                    Object(P.d)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              N.createElement(
                "div",
                { className: oa.a.Column },
                N.createElement(
                  "div",
                  { className: oa.a.StoryPicture },
                  N.createElement("img", {
                    src: Ut.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  N.createElement(
                    "div",
                    { className: oa.a.CheckBackText },
                    Object(P.d)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            N.createElement(
              "div",
              { className: oa.a.Links },
              N.createElement(
                "div",
                { className: oa.a.MarketLink },
                N.createElement(
                  "a",
                  { href: F.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(P.d)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              N.createElement(
                "div",
                { className: oa.a.MarketLink, onClick: e.closeModal },
                Object(P.d)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        tn = a("ZlHF"),
        an = a.n(tn),
        nn = a("gyoR"),
        rn = (a("bUNj"), a("U9Ih")),
        on = a.n(rn),
        sn = a("R+8l"),
        ln = a("oVVc");
      function cn(e, t, a) {
        return {
          color: e,
          background:
            "linear-gradient(0deg, " +
            (a || "transparent") +
            " 0%, " +
            (t || "transparent") +
            " 100%)"
        };
      }
      function dn(e) {
        var t,
          a,
          n = e.tab,
          r = e.language,
          o = e.onTabSelected,
          i = e.classNames,
          s = e.section,
          l = e.selected,
          c = ((a = r),
          ((t = n).localized_label &&
            (t.localized_label[a] || t.localized_label[0])) ||
            ("#Sale_default_label" === t.default_label
              ? ""
              : Object(P.d)(t.default_label)));
        if (!c) return null;
        var d,
          p = ((d = s),
          l
            ? cn(
                d.tab_active_label_color,
                d.tab_active_background_gradient_top,
                d.tab_active_background_gradient_bottom
              )
            : cn(
                d.tab_inactive_label_color,
                d.tab_inactive_background_gradient_top,
                d.tab_inactive_background_gradient_bottom
              ));
        return N.createElement(
          "div",
          {
            className: Object(R.a)(an.a.SaleTab, i),
            onClick: function() {
              return o(n);
            },
            style: p
          },
          N.createElement(
            "div",
            { className: Object(R.a)(an.a.SaleTabLabel) },
            c
          )
        );
      }
      var pn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.GetTabReferences = function(t) {
              for (
                var a = this,
                  e = "",
                  n = 0,
                  r = this.props.event.GetSaleSections();
                n < r.length;
                n++
              ) {
                var o = r[n];
                "items" === o.section_type &&
                  o.capsules &&
                  ((o.show_on_tabs &&
                    0 < o.show_on_tabs.length &&
                    !o.show_on_tabs.some(function(e) {
                      return e === a.props.tab.unique_id;
                    })) ||
                    (o.capsules.find(function(e) {
                      return e.type === t.type && e.id === t.id;
                    }) &&
                      (e && (e += "; "),
                      (e += Pn(
                        o,
                        this.props.language,
                        this.props.event.clanSteamID.GetAccountID(),
                        !0
                      )))));
              }
              return e;
            }),
            (t.prototype.RenderTabCapsules = function() {
              var e = this.props.tab;
              if (!e || !e.capsules || !e.capsules.length)
                return N.createElement(
                  "div",
                  { className: an.a.TabContentsElement },
                  Object(P.d)("#SalePage_Tabs_AllContents")
                );
              for (
                var t = new Array(), a = new Set(), n = 0, r = e.capsules;
                n < r.length;
                n++
              ) {
                var o,
                  i,
                  s,
                  l,
                  c = r[n],
                  d = Object(P.d)("#AppType_" + c.type) + "_" + c.id;
                a.has(d) ||
                  (a.add(d),
                  (o = null),
                  (i =
                    (o =
                      "bundle" === c.type
                        ? sn.a.GetBundleInfo(c.id)
                        : "sub" === c.type
                        ? ln.b.GetPackageInfo(c.id)
                        : Le.a.GetAppInfo(c.id)) && o.name
                      ? o.name
                      : d),
                  (s = void 0 === c.visibility_index ? -1 : c.visibility_index),
                  (l = this.props.showReferences
                    ? c.id +
                      " " +
                      c.type +
                      ', "' +
                      i +
                      '", ' +
                      this.GetTabReferences(c)
                    : void 0 === c.visibility_index
                    ? i
                    : Object(P.d)("#Sale_TabDayIndex", c.visibility_index)),
                  t.push({ sName: i, sKey: d, sDisplay: l, nDaySortIndex: s }));
              }
              return (
                t.sort(function(e, t) {
                  return e.nDaySortIndex !== t.nDaySortIndex
                    ? e.nDaySortIndex - t.nDaySortIndex
                    : e.sName.localeCompare(t.sName);
                }),
                N.createElement(
                  N.Fragment,
                  null,
                  t.map(function(e) {
                    return N.createElement(
                      "div",
                      { key: e.sKey, className: an.a.TabContentsElement },
                      e.sDisplay
                    );
                  })
                )
              );
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.section,
                a = e.event;
              return N.createElement(
                "div",
                { className: Object(R.a)(an.a.SaleSection), style: Fn(t, a) },
                N.createElement(Dn, Object(M.a)({}, this.props)),
                N.createElement(
                  "div",
                  { className: an.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        un = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { nMaxTabsPerRow: a.GetMaxTabsPerRow() }),
              (e.m_refTabLocation = N.createRef()),
              e
            );
          }
          return (
            Object(M.d)(a, t),
            (a.IsWideScreen = function() {
              return 940 <= window.innerWidth;
            }),
            (a.GetMaxTabsPerRow = function() {
              return Math.max(Math.floor(window.innerWidth / 160), 2);
            }),
            (a.prototype.OnTabSelected = function(e, t) {
              var a;
              t != this.props.activeTab &&
                this.m_refTabLocation.current &&
                ((a =
                  this.m_refTabLocation.current.getBoundingClientRect().top +
                  window.scrollY),
                window.scrollY > a && window.scrollTo(0, a)),
                this.props.onTabSelected(e, t);
            }),
            (a.prototype.render = function() {
              var a = this,
                e = this.props,
                n = e.section,
                t = e.event,
                r = e.language,
                o = e.activeTab;
              if (n.tabs.length < 2) return null;
              var i = Object(R.a)(an.a.SaleSectionTabsTab),
                s = n.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return N.createElement(dn, {
                    key: t,
                    section: n,
                    selected: e === o,
                    tab: e,
                    language: r,
                    classNames: Object(R.a)(
                      i,
                      e === o && an.a.SaleSectionTabsSelected
                    ),
                    onTabSelected: function(e) {
                      return a.OnTabSelected(n, e);
                    }
                  });
                });
              return N.createElement(
                N.Fragment,
                null,
                N.createElement("div", { ref: this.m_refTabLocation }),
                N.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      an.a.SaleSection,
                      an.a.SaleSectionTabs
                    ),
                    style: Fn(n, t)
                  },
                  N.createElement(Dn, Object(M.a)({}, this.props)),
                  N.createElement(
                    mn,
                    { className: an.a.SaleSectionTabContainer },
                    N.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          bt.a.SaleSectionContainer,
                          an.a.SaleSectionTabsRow
                        )
                      },
                      s
                    )
                  )
                )
              );
            }),
            Object(M.c)([v.a], a.prototype, "OnTabSelected", null),
            a
          );
        })(N.Component),
        mn = (function(t) {
          function i() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bInScroll: !1, nStartXPos: 0, nStartScrollLeft: 0 }),
              (e.m_hSlider = N.createRef()),
              e
            );
          }
          return (
            Object(M.d)(i, t),
            (i.prototype.OnPointerDown = function(e) {
              var t = this.m_hSlider.current;
              t &&
                (t.scrollWidth <= t.clientWidth ||
                  (this.setState({
                    bInScroll: !1,
                    nStartXPos: e.pageX - t.offsetLeft,
                    nStartScrollLeft: t.scrollLeft
                  }),
                  t.addEventListener("pointerup", this.OnPointerUp),
                  t.addEventListener("pointerleave", this.OnPointerUp),
                  t.addEventListener("pointercapturelost", this.OnPointerUp),
                  t.addEventListener("pointermove", this.OnPointerMove)));
            }),
            (i.prototype.OnPointerUp = function(e) {
              var t = this.m_hSlider.current;
              t &&
                (this.state.bInScroll &&
                  (t.releasePointerCapture(e.pointerId),
                  document.body.classList.remove(
                    an.a.HorizontalScrollInDragForceCursor
                  ),
                  this.props.dragClassName &&
                    t.classList.remove(this.props.dragClassName)),
                t.removeEventListener("pointerup", this.OnPointerUp),
                t.removeEventListener("pointerleave", this.OnPointerUp),
                t.removeEventListener("pointercapturelost", this.OnPointerUp),
                t.removeEventListener("pointermove", this.OnPointerMove));
            }),
            (i.prototype.OnPointerMove = function(e) {
              var t,
                a,
                n,
                r,
                o = this.m_hSlider.current;
              o &&
                (e.preventDefault(),
                (t =
                  (e.pageX - o.offsetLeft - this.state.nStartXPos) *
                  (this.props.scrollMultiplier || i.knDefaultScrollMultiplier)),
                (a = this.state.nStartScrollLeft - t),
                (n = Math.abs(a - this.state.nStartScrollLeft)),
                (r = this.props.minDragPixels || i.knDefaultMinDragPixels),
                !this.state.bInScroll &&
                  r <= n &&
                  ((o.scrollLeft = a),
                  this.setState({ bInScroll: !0 }),
                  document.body.classList.add(
                    an.a.HorizontalScrollInDragForceCursor
                  ),
                  this.props.dragClassName &&
                    o.classList.add(this.props.dragClassName),
                  o.setPointerCapture(e.pointerId)),
                this.state.bInScroll && (o.scrollLeft = a));
            }),
            (i.prototype.render = function() {
              return N.createElement(
                "div",
                {
                  ref: this.m_hSlider,
                  className: this.props.className,
                  onPointerDown: this.OnPointerDown
                },
                this.props.children
              );
            }),
            (i.knDefaultScrollMultiplier = 1),
            (i.knDefaultMinDragPixels = 20),
            Object(M.c)([v.a], i.prototype, "OnPointerDown", null),
            Object(M.c)([v.a], i.prototype, "OnPointerUp", null),
            Object(M.c)([v.a], i.prototype, "OnPointerMove", null),
            i
          );
        })(N.Component),
        hn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                currentFlavor: "topwishlisted",
                bInitialLoadComplete: !1,
                rgCapsules: [],
                nVisibleRows: 12,
                nNumRequestedLastTime: 0,
                bIsMoreAvailable: !1,
                bAwaitingMoreRowsLoading: !1,
                nHiddenCapsules: 0
              }),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.LoadCapsules(12);
            }),
            (e.prototype.componentDidUpdate = function(e) {
              var t = this;
              (this.props.section == e.section &&
                this.props.event == e.event &&
                this.props.activeTab == e.activeTab) ||
                this.setState(
                  {
                    bInitialLoadComplete: !1,
                    nVisibleRows: 12,
                    nNumRequestedLastTime: 0
                  },
                  function() {
                    return t.LoadCapsules(12);
                  }
                );
            }),
            (e.prototype.ShowMoreRows = function() {
              var e = this;
              this.state.bAwaitingMoreRowsLoading ||
                this.setState({ bAwaitingMoreRowsLoading: !0 }, function() {
                  return Object(M.b)(e, void 0, void 0, function() {
                    var t;
                    return Object(M.e)(this, function(e) {
                      return (
                        (t = this.state.nVisibleRows + 8),
                        this.LoadCapsules(t),
                        [2]
                      );
                    });
                  });
                });
            }),
            (e.prototype.LoadCapsules = function(g) {
              var y;
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, s, l, c, d, p, u, m, h, v, _, b;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props),
                        (a = t.event),
                        (n = t.bIsPreview),
                        (r = t.activeTab),
                        (o = this.state),
                        (i = o.currentFlavor),
                        (s = o.rgCapsules),
                        (l = o.nNumRequestedLastTime),
                        (c = o.nHiddenCapsules),
                        [4, H.a.HintLoad()]
                      );
                    case 1:
                      e.sent(),
                        (d = !0),
                        (p = Math.max(l, g + 1)),
                        (e.label = 2);
                    case 2:
                      if (!(s.length <= g && d)) return [3, 9];
                      (u = !1),
                        n ||
                          a.visibility_state === ct.l.k_EEventStateVisible ||
                          ((m = x.a
                            .Get()
                            .GetPartnerEventPermissions(a.clanSteamID)),
                          (u = m.can_edit)),
                        (h = void 0),
                        (e.label = 3);
                    case 3:
                      return (
                        e.trys.push([3, 5, , 6]),
                        [
                          4,
                          Ht.GetSaleGamesByFlavor(
                            n || u,
                            null === (y = null == r ? void 0 : r.GetTab()) ||
                              void 0 === y
                              ? void 0
                              : y.unique_id,
                            a,
                            i,
                            p
                          )
                        ]
                      );
                    case 4:
                      return (h = e.sent()), (d = h.length >= p), [3, 6];
                    case 5:
                      return (
                        (v = e.sent()),
                        console.error(
                          "Failed to load games for browser;" + v.message
                        ),
                        this.setState({
                          bInitialLoadComplete: !0,
                          bAwaitingMoreRowsLoading: !1
                        }),
                        [2]
                      );
                    case 6:
                      return (
                        (s = (s = h.map(function(e) {
                          return { id: e, type: "game" };
                        })).filter(function(e) {
                          return r.ShouldShowCapsule(e);
                        })),
                        [4, Object(nn.e)(s)]
                      );
                    case 7:
                      return (
                        e.sent(), (_ = new Array()), [4, Object(nn.a)(s, !1, _)]
                      );
                    case 8:
                      return (
                        (s = e.sent()),
                        (c = _.length),
                        s.length <= g && (p += 8),
                        [3, 2]
                      );
                    case 9:
                      return (
                        (b = s.length > g || d),
                        this.setState({
                          bInitialLoadComplete: !0,
                          rgCapsules: s,
                          nVisibleRows: g,
                          nNumRequestedLastTime: p,
                          bIsMoreAvailable: b,
                          bAwaitingMoreRowsLoading: !1,
                          nHiddenCapsules: c
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.OnFlavorLabelClick = function(e) {
              var t = this;
              this.setState(
                {
                  currentFlavor: e,
                  bInitialLoadComplete: !1,
                  rgCapsules: [],
                  nVisibleRows: 12,
                  nNumRequestedLastTime: 0,
                  bIsMoreAvailable: !0,
                  bAwaitingMoreRowsLoading: !0,
                  nHiddenCapsules: 0
                },
                function() {
                  return t.LoadCapsules(12);
                }
              );
            }),
            (e.prototype.render = function() {
              var t = this,
                e = this.state,
                a = e.bInitialLoadComplete,
                n = e.currentFlavor,
                r = e.rgCapsules,
                o = e.nVisibleRows,
                i = e.bIsMoreAvailable,
                s = e.bAwaitingMoreRowsLoading,
                l = (e.nHiddenCapsules,
                [
                  {
                    label: Object(P.d)("#Sale_BrowserSortOption_TopWishlisted"),
                    flavor: "topwishlisted"
                  },
                  {
                    label: Object(P.d)("#Sale_BrowserSortOption_PlayedNowDemo"),
                    flavor: "playednowdemo"
                  },
                  {
                    label: Object(P.d)(
                      "#Sale_BrowserSortOption_PopularComingSoon"
                    ),
                    flavor: "popularcomingsoon"
                  }
                ]);
              return c.a.createElement(
                "div",
                { className: on.a.SaleItemBrowserContainer },
                c.a.createElement(
                  mn,
                  { className: on.a.SaleItemBrowserHeaderContainer },
                  c.a.createElement(
                    "div",
                    { className: on.a.SaleItemBrowserHeader },
                    l.map(function(e) {
                      return c.a.createElement(
                        "div",
                        {
                          key: e.flavor,
                          onClick: function() {
                            return t.OnFlavorLabelClick(e.flavor);
                          },
                          className: Object(R.a)(
                            on.a.FlavorLabel,
                            n == e.flavor && on.a.SelectedFlavor
                          )
                        },
                        e.label
                      );
                    })
                  )
                ),
                a &&
                  r.slice(0, o).map(function(e) {
                    return c.a.createElement(
                      "div",
                      { key: e.id, className: ka.a.SaleItemBrowserRow },
                      c.a.createElement(Pa.g, {
                        id: e.id,
                        type: e.type,
                        bUseDemoLayout: !0
                      })
                    );
                  }),
                a &&
                  0 == r.length &&
                  c.a.createElement(
                    "div",
                    { className: on.a.EmptyResults },
                    Object(P.d)("#Sale_EmptySearchResultsOrLoadFailure")
                  ),
                (!a || i) &&
                  c.a.createElement(
                    "div",
                    {
                      className: Object(R.a)(
                        on.a.ShowContentsContainer,
                        !a && on.a.Loading
                      )
                    },
                    !a || s
                      ? c.a.createElement(Q.a, { size: "medium" })
                      : c.a.createElement(
                          "button",
                          {
                            onClick: this.ShowMoreRows,
                            className: on.a.ShowContentsButton
                          },
                          Object(P.d)("#Sale_ShowMore")
                        )
                  )
              );
            }),
            Object(M.c)([v.a], e.prototype, "ShowMoreRows", null),
            (e = Object(M.c)([s.a], e))
          );
        })(c.a.Component),
        vn = a("onkS"),
        _n = a("l2mU"),
        bn = a("31dG"),
        gn = a.n(bn);
      function yn(e, t) {
        for (var a = [], n = 0, r = e.capsules; n < r.length; n++) {
          var o = r[n];
          if ("sub" === o.type) {
            var i = ln.b.GetPackageInfo(o.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else a.push(o.id);
          }
        }
        0 < a.length && ln.b.LoadPackageInfo(a);
      }
      var En = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.OnClickPurchase = function(e) {
              H.a.AddToCart(
                e,
                this.props.sub_package_id,
                F.c.STORE_BASE_URL + "cart/addtocart",
                F.c.STORE_BASE_URL + "cart"
              );
            }),
            (t.prototype.render = function() {
              var e = ln.b.GetPackageInfo(this.props.sub_package_id),
                t = ln.b.GetPackageInfo(this.props.compare_package_id);
              if (!e || (!t && this.props.compare_package_id))
                return (
                  ln.b.LoadPackageInfo([
                    this.props.sub_package_id,
                    this.props.compare_package_id
                  ]),
                  null
                );
              if (!e.formatted_final_price) return null;
              var a = e.formatted_final_price,
                n = Object(_n.a)(e, t),
                r = [a, n || ""],
                o = P.d.apply(
                  void 0,
                  Object(M.g)([this.props.price_loc_token], r)
                ),
                i = P.d.apply(
                  void 0,
                  Object(M.g)([this.props.body_loc_token], r)
                ),
                s = P.d.apply(
                  void 0,
                  Object(M.g)(["#Sale_Subscription_Save"], r)
                ),
                l = N.createElement("div", { className: gn.a.LogoImg }),
                c = (function(e) {
                  for (var t = 0, a = e.appids; t < a.length; t++) {
                    var n = a[t];
                    if (H.a.BOwnsApp(n)) return !0;
                  }
                  return !1;
                })(e),
                d = null,
                d = H.a.BOwnsPackage(this.props.sub_package_id)
                  ? N.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          gn.a.PurchaseButton,
                          gn.a.AlreadyOwnedPackage
                        )
                      },
                      Object(P.d)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : c
                  ? N.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          gn.a.PurchaseButton,
                          gn.a.AlreadyOwnedApp
                        )
                      },
                      Object(P.d)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : N.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          gn.a.PurchaseButton,
                          gn.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      this.props.button_text
                    );
              return N.createElement(
                "div",
                { className: gn.a.SubscriptionBlock },
                l,
                N.createElement(
                  "div",
                  { className: gn.a.PriceBlock },
                  N.createElement("span", { className: gn.a.PriceDisplay }, o),
                  Boolean(n) &&
                    N.createElement(
                      "span",
                      { className: gn.a.SavingsDisplay },
                      s
                    )
                ),
                N.createElement("div", { className: gn.a.BodyTextBlock }, i),
                d
              );
            }),
            Object(M.c)([v.a], t.prototype, "OnClickPurchase", null),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        Sn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = yn(this.props.section, 12),
                t = yn(this.props.section, 3),
                a = yn(this.props.section, 1);
              return N.createElement(
                "div",
                { className: gn.a.MainBlock },
                N.createElement(
                  "span",
                  { className: gn.a.SelectAPlan },
                  Object(P.d)("#Sale_Subscription_SelectPlan")
                ),
                N.createElement(
                  "div",
                  { className: gn.a.SubscriptionListBlock },
                  N.createElement(En, {
                    sub_package_id: e,
                    compare_package_id: a,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(P.d)("#Sale_Subscription_Annual_Button")
                  }),
                  N.createElement(En, {
                    sub_package_id: t,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(P.d)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  N.createElement(En, {
                    sub_package_id: a,
                    price_loc_token: "#Sale_Subscription_Monthly_Price",
                    body_loc_token: "#Sale_Subscription_Monthly_Body",
                    button_text: Object(P.d)(
                      "#Sale_Subscription_Monthly_Button"
                    )
                  })
                )
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        fn = N.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(4)]).then(
            a.bind(null, "NIbt")
          );
        });
      var On = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                nSaleDayIndex: t.props.eventModel
                  ? t.props.eventModel.GetDayIndexFromEventStart()
                  : void 0
              }),
              t.props.eventModel && t.OnSaleDataLoaded(),
              t
            );
          }
          return (
            Object(M.d)(e, a),
            (e.prototype.componentDidMount = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.props.eventModel
                        ? [3, 2]
                        : ((t = F.b.CLANSTEAMID),
                          (a = F.b.ANNOUNCEMENT_GID),
                          [
                            4,
                            B.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                              new G.a(t),
                              a,
                              null
                            )
                          ]);
                    case 1:
                      (n = e.sent()),
                        (r = n.GetDayIndexFromEventStart()),
                        this.state.nSaleDayIndex != r &&
                          this.setState({ nSaleDayIndex: r }),
                        this.OnSaleDataLoaded(),
                        (e.label = 2);
                    case 2:
                      return (
                        Mt.a
                          .Get()
                          .SetCollectionInfo(
                            "gamefestival2020",
                            "gamefestival2020info"
                          ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetEventModel = function() {
              return this.props.eventModel
                ? this.props.eventModel
                : B.c.GetClanEventFromAnnouncementGID(F.b.ANNOUNCEMENT_GID);
            }),
            (e.prototype.OnChangeDayIndex = function(e) {
              var t;
              e != this.state.nSaleDayIndex &&
                ((t = this.GetEventModel()) && (t.m_overrideCurrentDay = e),
                this.setState({ nSaleDayIndex: e }));
            }),
            (e.prototype.OnSaleDataLoaded = function() {
              for (
                var e = 0, t = this.GetEventModel().GetSaleSections();
                e < t.length;
                e++
              ) {
                var a = t[e];
                if (
                  "vo_internal" === a.section_type &&
                  a.internal_section_data &&
                  "event_schedule" === a.internal_section_data.internal_type
                ) {
                  Ft.c.DisableAutoPlay();
                  break;
                }
              }
            }),
            (e.prototype.render = function() {
              var e = this.GetEventModel();
              if (e && void 0 !== this.state.nSaleDayIndex) {
                var t = this.props.bIsPreview,
                  a = e.GetImageURLWithFallback(
                    "sale_header",
                    this.props.language
                  ),
                  n = null,
                  r = null;
                Ut.BHasSalePageBackgroundOverride() &&
                  ((a = Ut.GetSalePageBackgroundOverride()),
                  (n = Ut.GetSalePageBackgroundWEBM()),
                  (r = Ut.GetSalePageBackgroundMP4()));
                var o =
                    e.BHasBroadcastEnabled() &&
                    ("1688220857098505775" == e.GID ||
                      "1590261853006818581" == e.GID),
                  i = x.a.Get().GetPartnerEventPermissions(e.clanSteamID);
                return N.createElement(
                  b.a,
                  null,
                  N.createElement(
                    Cn,
                    {
                      className:
                        an.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                      backgroundImage: a,
                      backgroundColor: e.jsondata.sale_background_color
                    },
                    Boolean(r || n) &&
                      N.createElement(
                        "div",
                        { className: an.a.fullscreen_bg },
                        N.createElement(
                          "video",
                          {
                            key: Ut.GetLastDoorOpen(),
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            ref: function(e) {
                              e && (e.playbackRate = 0.9);
                            },
                            className: Object(R.a)(
                              an.a.SaleBackground,
                              an.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              an.a.fullscreen_bg__video
                            ),
                            style: {
                              display: "flex",
                              position: "relative",
                              flexDirection: "column",
                              backgroundColor: t
                                ? e.jsondata.sale_background_color
                                : void 0
                            }
                          },
                          N.createElement("source", {
                            src: n,
                            type: "video/webm"
                          }),
                          !F.c.IN_CLIENT &&
                            N.createElement("source", {
                              src: r,
                              type: "video/mp4"
                            })
                        )
                      ),
                    N.createElement(
                      "div",
                      { className: an.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        N.createElement(wn, null),
                      e.GetImageURL("sale_overlay", this.props.language) &&
                        N.createElement(
                          "div",
                          {
                            className: Object(R.a)(
                              an.a.SaleOverlayCtn,
                              "SaleOverlayCtn"
                            )
                          },
                          N.createElement("img", {
                            className: Object(R.a)(
                              an.a.SaleOverlay,
                              "SaleOverlay"
                            ),
                            src: e.GetImageURLWithFallback(
                              "sale_overlay",
                              this.props.language
                            )
                          })
                        ),
                      e.jsondata.sale_title_overlay &&
                        N.createElement(
                          "div",
                          null,
                          N.createElement(
                            "h1",
                            {
                              style: {
                                fontFamily: Hn(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight,
                                textAlign: e.GetSaleLabelAlign()
                              }
                            },
                            e.GetNameWithFallback(this.props.language)
                          ),
                          N.createElement("hr", null),
                          N.createElement(
                            "div",
                            {
                              style: {
                                textAlign: e.GetSaleLabelAlign(),
                                fontFamily: Hn(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            N.createElement(Ta.a, {
                              text: e.GetDescriptionWithFallback(
                                this.props.language
                              ),
                              partnerEventStore: B.c,
                              showErrorInfo: this.props.bIsPreview,
                              event: e
                            })
                          )
                        )
                    ),
                    N.createElement(
                      "div",
                      {
                        className:
                          an.a.SaleOuterContainer +
                          " " +
                          an.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
                          " SaleOuterContainer",
                        style: {
                          marginTop: e.jsondata.sale_header_offset + "px"
                        }
                      },
                      Boolean(
                        e.BHasBroadcastEnabled() &&
                          e.BSaleShowBroadcastAtTopOfPage()
                      ) &&
                        N.createElement(
                          b.a,
                          null,
                          N.createElement(
                            "div",
                            { className: an.a.SaleBroadcastCtn },
                            N.createElement(
                              N.Suspense,
                              { fallback: N.createElement("div", null) },
                              N.createElement(fn, {
                                promotionName: this.props.promotionName,
                                clanid: Number(F.b.CLANACCOUNTID),
                                event: e,
                                bIsPreview: this.props.bIsPreview,
                                language: this.props.language,
                                fnRenderBroadcastContext: o
                                  ? function() {
                                      return N.createElement(Un, null);
                                    }
                                  : null
                              })
                            )
                          )
                        ),
                      e.jsondata.sale_show_creator &&
                        N.createElement(
                          b.a,
                          null,
                          N.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "0 auto",
                                maxWidth: "940px"
                              }
                            },
                            N.createElement(Oa, {
                              creatorID: {
                                name: null,
                                clan_account_id: e.clanSteamID.GetAccountID(),
                                type: "developer"
                              },
                              eventModel: e,
                              bShowTagline: !0,
                              bHideCreatorType: !0
                            })
                          )
                        ),
                      N.createElement(kn, {
                        bIsPreview: t,
                        event: e,
                        language: this.props.language,
                        promotionName: this.props.promotionName,
                        nSaleDayIndex: this.state.nSaleDayIndex
                      }),
                      e.jsondata.sale_browse_more_button &&
                        N.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "14px"
                            }
                          },
                          N.createElement(Bn, {
                            text: Object(P.d)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      i.can_edit &&
                        N.createElement(ia, {
                          eventModel: e,
                          bPreviewMode: this.props.bIsPreview,
                          useAnchors: !this.props.bIsPreview,
                          fnOnUpdateSaleDayIndex: this.OnChangeDayIndex
                        })
                    )
                  )
                );
              }
              return N.createElement(
                "div",
                { className: Be.a.FlexCenter, style: { height: "500px" } },
                N.createElement(Q.a, {
                  size: "medium",
                  string: Object(P.d)("#Loading")
                })
              );
            }),
            Object(M.c)([v.a], e.prototype, "OnChangeDayIndex", null),
            (e = Object(M.c)([s.a], e))
          );
        })(N.Component),
        Cn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refBackgroundPanel = N.createRef()), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t,
                a = this;
              this.props.backgroundImage &&
                (((t = new Image()).onload = function() {
                  var e = (100 * t.width) / 950 + "%";
                  a.m_refBackgroundPanel.current &&
                    a.m_refBackgroundPanel.current.style.setProperty(
                      "--background-scale",
                      e
                    );
                }),
                (t.src = this.props.backgroundImage));
            }),
            (e.prototype.render = function() {
              var e = this.props.backgroundImage
                ? "url(" + this.props.backgroundImage + ")"
                : null;
              return N.createElement(
                "div",
                {
                  className: Object(R.a)(
                    this.props.className,
                    an.a.SaleBackground,
                    "SaleBackground"
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundImage: e,
                    backgroundColor: this.props.backgroundColor
                  },
                  ref: this.m_refBackgroundPanel
                },
                this.props.children
              );
            }),
            e
          );
        })(N.Component),
        wn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.componentDidMount = function() {
              a("+ZmX").Init();
            }),
            (t.prototype.render = function() {
              return N.createElement("canvas", {
                className: "zdog-canvas",
                style: {
                  display: "block",
                  cursor: "move",
                  maxWidth: "100vw",
                  maxHeight: "100vw"
                },
                width: "600",
                height: "600"
              });
            }),
            t
          );
        })(N.Component),
        Tn = (function() {
          function n(e, t) {
            var a = this;
            (this.m_activeTab = null),
              (this.m_capsuleFilter = null),
              e &&
                ((this.m_activeTab = e),
                (this.m_capsuleFilter = new Set()),
                xn(e.capsules, t).forEach(function(e) {
                  a.m_capsuleFilter.add(n.GetSetName(e.type, e.id));
                }));
          }
          return (
            (n.GetSetName = function(e, t) {
              return (e || "") + t;
            }),
            (n.prototype.ShouldShowSection = function(e) {
              var t = this;
              return (
                !this.m_activeTab ||
                (!e.show_on_tabs ||
                  0 === e.show_on_tabs.length ||
                  e.show_on_tabs.some(function(e) {
                    return e === t.m_activeTab.unique_id;
                  }))
              );
            }),
            (n.prototype.GetTab = function() {
              return this.m_activeTab;
            }),
            (n.prototype.ShouldShowOnTab = function(e, t) {
              return (
                !this.m_capsuleFilter ||
                this.m_capsuleFilter.has(n.GetSetName(e, t))
              );
            }),
            (n.prototype.ShouldShowCapsule = function(e) {
              return this.ShouldShowOnTab(e.type, e.id);
            }),
            (n.prototype.ShouldShowEvent = function(e) {
              return 0 === e.appid || this.ShouldShowOnTab("game", e.appid);
            }),
            n
          );
        })(),
        In = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.GetTabSelectionsFromURL = function() {
              var n = this,
                r = new Map();
              return (
                this.props.event.GetSaleSections().forEach(function(e) {
                  var t, a;
                  "tabs" === e.section_type &&
                    e.tabs &&
                    0 < e.tabs.length &&
                    ((a =
                      (a =
                        0 < (t = Number(ze(n.props.location, "tab")))
                          ? e.tabs.find(function(e) {
                              return e.unique_id === t;
                            })
                          : void 0) || e.tabs[0]),
                    r.set(e, new Tn(a, n.props.nSaleDayIndex)));
                }),
                r
              );
            }),
            (t.prototype.OnTabSelected = function(e, t) {
              Ue(this.props.history, "tab", String(t.unique_id));
            }),
            (t.prototype.render = function() {
              var i = this,
                e = this.props,
                s = e.event,
                l = e.language,
                c = e.promotionName,
                d = e.bIsPreview,
                p = (e.nSaleDayIndex, this.GetTabSelectionsFromURL()),
                u = !1,
                m = !1,
                h = [
                  {
                    elements: [],
                    activeTab: new Tn(null, this.props.nSaleDayIndex)
                  }
                ];
              s.GetSaleSections().forEach(function(e, t) {
                var a = h[h.length - 1].activeTab;
                if (a.ShouldShowSection(e)) {
                  var n,
                    r = null;
                  if (
                    "items" == (n = e).section_type &&
                    n.smart_section &&
                    ("wishlist" == n.smart_section_type ||
                      "interactive_recommender" == n.smart_section_type ||
                      "dlc_music_onsale" == n.smart_section_type ||
                      "ir_subscription" == n.smart_section_type ||
                      ("wishlist_onsale" == n.smart_section_type &&
                        !Vt.GetHideWishlist()) ||
                      ("dlc_onsale" == n.smart_section_type &&
                        !Vt.GetHideDLC()) ||
                      ("interactive_recommender_onsale" ==
                        n.smart_section_type &&
                        !Vt.GetHideIRList())) &&
                    !F.i.logged_in
                  )
                    u ||
                      ((r = N.createElement(jn, {
                        section: e,
                        event: s,
                        language: l
                      })),
                      (u = !0));
                  else
                    switch (e.section_type) {
                      case "items":
                      case "events":
                      case "links":
                        r = N.createElement(
                          Nn,
                          Object(M.a)({ section: e, activeTab: a }, i.props)
                        );
                        break;
                      case "broadcast":
                        s.BHasBroadcastEnabled() &&
                          !m &&
                          ((r = N.createElement(zn, {
                            promotionName: c,
                            eventModel: s,
                            bIsPreview: d,
                            language: l,
                            activeTab: a,
                            bShowDemoOptions: e.show_as_demos
                          })),
                          (m = !0));
                        break;
                      case "event_description":
                        r = N.createElement(
                          An,
                          Object(M.a)({ section: e }, i.props)
                        );
                        break;
                      case "doors":
                        r = N.createElement(Ja, {
                          strFontFamily: Hn(s.jsondata.sale_font, l)
                        });
                        break;
                      case "text_section":
                        r = N.createElement(
                          Ln,
                          Object(M.a)({ section: e }, i.props)
                        );
                        break;
                      case "tabs":
                        var o = p.get(e);
                        h.push({ activeTab: o, elements: [] }),
                          (r = N.createElement(
                            un,
                            Object(M.a)({ section: e }, i.props, {
                              activeTab: o.GetTab(),
                              onTabSelected: i.OnTabSelected
                            })
                          ));
                        break;
                      case "vo_internal":
                        if (e.internal_section_data)
                          switch (e.internal_section_data.internal_type) {
                            case "subscription_pricing":
                              r = N.createElement(
                                Sn,
                                Object(M.a)({ section: e }, i.props)
                              );
                              break;
                            case "event_schedule":
                              r = N.createElement(
                                vn.b,
                                Object(M.a)({ section: e }, i.props, {
                                  activeTab: a
                                })
                              );
                              break;
                            case "tab_contents":
                              r = N.createElement(
                                pn,
                                Object(M.a)({ section: e }, i.props, {
                                  tab: a.GetTab(),
                                  showReferences: !1
                                })
                              );
                              break;
                            case "tab_references":
                              r = N.createElement(
                                pn,
                                Object(M.a)({ section: e }, i.props, {
                                  tab: a.GetTab(),
                                  showReferences: !0
                                })
                              );
                          }
                        break;
                      case "sale_item_browser":
                        r = N.createElement(
                          Gn,
                          Object(M.a)({ section: e }, i.props, { activeTab: a })
                        );
                    }
                  h[h.length - 1].elements.push(
                    N.createElement(
                      b.a,
                      { key: "SaleSectionIndex_" + e.unique_id + "_" + t },
                      r
                    )
                  );
                }
              });
              var t = h.map(function(e, t) {
                return N.createElement(
                  "div",
                  {
                    key: "TabSection_" + t,
                    className: an.a.SaleSectionTabListContainer
                  },
                  e.elements
                );
              });
              return N.createElement(
                "div",
                { className: an.a.SaleSectionListContainer },
                t
              );
            }),
            Object(M.c)([v.a], t.prototype, "OnTabSelected", null),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        kn = Object(l.g)(In);
      var Dn = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language;
          if (!Pn(t, n, a.clanSteamID.GetAccountID())) return null;
          var r,
            o,
            i,
            s = N.createElement(
              "div",
              {
                className: bt.a.SaleSectionHeader,
                style: ((r = t),
                (i = n),
                {
                  fontFamily: Hn((o = a).jsondata.sale_font, i),
                  fontWeight: o.jsondata.sale_font_weight,
                  fontSize: o.jsondata.sale_section_font_size,
                  textTransform: o.jsondata.sale_section_disable_capitalize
                    ? "initial"
                    : null,
                  color: r.label_color,
                  textAlign: o.GetSaleLabelAlign()
                })
              },
              Pn(t, n, a.clanSteamID.GetAccountID())
            );
          return (
            t.label_link &&
              (s = N.createElement(
                "a",
                {
                  href:
                    (F.c.IN_CLIENT ? "steam://openurl/" : "") +
                    Rn(t.label_link),
                  target: F.c.IN_CLIENT ? void 0 : "_blank"
                },
                s
              )),
            s
          );
        },
        jn = function(e) {
          var t = e.section,
            a = e.event;
          e.language;
          return N.createElement(
            "div",
            { className: an.a.SaleSection, style: Fn(t, a) },
            N.createElement(Dn, Object(M.a)({}, e)),
            N.createElement(
              "div",
              { className: an.a.SaleSectionLoginPrompt },
              Object(P.d)("#SalePage_LoginPrompt"),
              N.createElement(
                "button",
                { onClick: We.a, className: an.a.LoginButton },
                Object(P.d)("#Login_SignIn")
              )
            )
          );
        },
        An = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview;
          return N.createElement(
            "div",
            {
              className: Object(R.a)(an.a.SaleSection, la.a.SaleSectionCtn),
              style: Fn(t, a)
            },
            N.createElement(Dn, Object(M.a)({}, e)),
            N.createElement(
              "div",
              { className: bt.a.SaleSectionContainer },
              N.createElement(Ta.a, {
                text: a.GetDescriptionWithFallback(n),
                partnerEventStore: B.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        Ln = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview,
            o = "";
          return (
            t.text_section_contents &&
              (o =
                t.text_section_contents[n] || t.text_section_contents[0] || ""),
            N.createElement(
              "div",
              {
                className: Object(R.a)(an.a.SaleSection, la.a.SaleSectionCtn),
                style: Fn(t, a)
              },
              N.createElement(Dn, Object(M.a)({}, e)),
              N.createElement(
                "div",
                { className: bt.a.SaleSectionContainer },
                N.createElement(Ta.a, {
                  text: o,
                  partnerEventStore: B.c,
                  showErrorInfo: r,
                  event: a
                })
              )
            )
          );
        },
        Gn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.section,
                a = e.event;
              return N.createElement(
                pa.a,
                {
                  placeholderHeight: "100vh",
                  rootMargin: "0px 0px 100% 0px",
                  mode: "LoadAndUnload",
                  className: Object(R.a)(an.a.SaleSection, la.a.SaleSectionCtn),
                  style: Fn(t, a)
                },
                N.createElement(Dn, Object(M.a)({}, this.props)),
                N.createElement(hn, Object(M.a)({}, this.props))
              );
            }),
            (t = Object(M.c)([s.a], t))
          );
        })(N.Component),
        Nn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bInitialLoadComplete: !1,
                nShowAdditionalRows: 0,
                bIsCapsuleArrayTruncated: !1,
                nHiddenCapsules: 0,
                capsules: [],
                bScreenIsWide: a.IsWideScreen(),
                nMaxCapsulesPerRow: a.GetMaxCapsulesPerRow()
              }),
              e
            );
          }
          var a;
          return (
            Object(M.d)(e, t),
            ((a = e).prototype.componentDidMount = function() {
              window.addEventListener("resize", this.OnResize),
                this.LoadCapsules();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              var t = this;
              (this.props.section == e.section &&
                this.props.event == e.event &&
                this.props.activeTab == e.activeTab &&
                this.props.nSaleDayIndex == e.nSaleDayIndex) ||
                this.setState(
                  { bInitialLoadComplete: !1, nShowAdditionalRows: 0 },
                  function() {
                    return t.LoadCapsules();
                  }
                );
            }),
            (e.prototype.componentWillUnmount = function() {
              window.removeEventListener("resize", this.OnResize);
            }),
            (e.IsWideScreen = function() {
              return 940 <= window.innerWidth;
            }),
            (e.GetMaxCapsulesPerRow = function() {
              return a.IsWideScreen()
                ? 4
                : Math.max(Math.floor(window.innerWidth / 300), 1);
            }),
            (e.prototype.ShowMoreContents = function() {
              this.state.bAwaitingShowContentLoading ||
                this.setState(
                  { bAwaitingShowContentLoading: !0 },
                  this.LoadMoreContent
                );
            }),
            (e.prototype.LoadMoreContent = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.state.nShowAdditionalRows + 4),
                        [4, this.LoadCapsules(t)]
                      );
                    case 1:
                      return (
                        e.sent(),
                        this.setState({
                          nShowAdditionalRows: t,
                          bAwaitingShowContentLoading: !1
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetSectionForSession = function() {
              var e = this.props,
                t = e.section,
                a = e.event;
              if (t.use_random_order && !t.smart_section) {
                var n =
                  "section_" +
                  Object(C.a)(
                    t.unique_id ? t.unique_id.toString() : JSON.stringify(t)
                  ).toString();
                if (
                  (this.props.bIsPreview &&
                    a.rtime32_last_local_modification &&
                    (n += "_" + a.rtime32_last_local_modification),
                  window.sessionStorage)
                ) {
                  var r = window.sessionStorage.getItem(n);
                  if (r) {
                    var o = JSON.parse(r);
                    if (o.rtime32_last_modified == a.rtime32_last_modified)
                      return o;
                  }
                  Object(oe.f)(t.capsules),
                    Object(oe.f)(t.links),
                    Object(oe.f)(t.events),
                    (t.rtime32_last_modified = a.rtime32_last_modified),
                    window.sessionStorage.setItem(n, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(L) {
              return (
                void 0 === L && (L = 0),
                Object(M.b)(this, void 0, void 0, function() {
                  var r,
                    o,
                    i,
                    s,
                    l,
                    c,
                    d,
                    p,
                    u,
                    m,
                    h,
                    v,
                    _,
                    b,
                    g,
                    y,
                    E,
                    S,
                    f,
                    O,
                    C,
                    w,
                    T,
                    I,
                    k,
                    D,
                    j,
                    A;
                  return Object(M.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (r = this.GetSectionForSession()),
                          (o = this.props),
                          (i = o.event),
                          (s = o.promotionName),
                          (l = o.bIsPreview),
                          (c = o.activeTab),
                          (d = o.nSaleDayIndex),
                          "items" !== r.section_type ||
                          "sale_tabhub" == r.smart_section_type
                            ? [3, 10]
                            : [4, H.a.HintLoad()]
                        );
                      case 1:
                        return (e.sent(), (p = void 0), r.smart_section)
                          ? ((a = i.GetSaleSections()),
                            (n = new Set()),
                            a
                              .filter(function(e) {
                                return "items" == e.section_type;
                              })
                              .forEach(function(e) {
                                return e.capsules.forEach(function(e) {
                                  "game" === e.type && n.add(e.id);
                                });
                              }),
                            (u = Array.from(n)),
                            [
                              4,
                              (function(u, m, h, v, _, b) {
                                return Object(M.b)(
                                  this,
                                  void 0,
                                  void 0,
                                  function() {
                                    var t, a, n, r, o, i, s, l, c, d, p;
                                    return Object(M.e)(this, function(e) {
                                      switch (e.label) {
                                        case 0:
                                          return (
                                            (t = v.smart_section_type),
                                            (a = v.smart_section_max_apps),
                                            (n = v.smart_section_tag),
                                            (r = v.smart_section_category),
                                            (o = v.random_from_entire_set),
                                            (i = a || 24),
                                            "tag" !== t
                                              ? [3, 2]
                                              : [
                                                  4,
                                                  Ht.GetDiscounts({
                                                    tagid: n,
                                                    max_results: i,
                                                    feature: _,
                                                    random_across_set: o
                                                  })
                                                ]
                                          );
                                        case 1:
                                          return [
                                            2,
                                            e.sent().map(function(e) {
                                              return {
                                                id: Number(e),
                                                type: "game"
                                              };
                                            })
                                          ];
                                        case 2:
                                          return "category" !== t
                                            ? [3, 4]
                                            : [
                                                4,
                                                Ht.GetDiscounts({
                                                  categoryid: r,
                                                  max_results: i,
                                                  feature: _,
                                                  random_across_set: o
                                                })
                                              ];
                                        case 3:
                                          return [
                                            2,
                                            e.sent().map(function(e) {
                                              return {
                                                id: Number(e),
                                                type: "game"
                                              };
                                            })
                                          ];
                                        case 4:
                                          return "top_n" !== t
                                            ? [3, 6]
                                            : [4, Ht.GetTopN(_, i)];
                                        case 5:
                                          return [
                                            2,
                                            (s = e.sent()).map(function(e) {
                                              return { id: e, type: "game" };
                                            })
                                          ];
                                        case 6:
                                          if (!Object(ct.g)(t)) return [3, 11];
                                          e.label = 7;
                                        case 7:
                                          return (
                                            e.trys.push([7, 9, , 10]),
                                            [
                                              4,
                                              Ht.GetSaleGamesByFlavor(
                                                u,
                                                m
                                                  ? m.GetTab().unique_id
                                                  : void 0,
                                                h,
                                                t,
                                                i
                                              )
                                            ]
                                          );
                                        case 8:
                                          return [
                                            2,
                                            (s = e.sent()).map(function(e) {
                                              return { id: e, type: "game" };
                                            })
                                          ];
                                        case 9:
                                          return e.sent(), [2, []];
                                        case 10:
                                          return [3, 30];
                                        case 11:
                                          return F.i.logged_in
                                            ? [3, 12]
                                            : [2, []];
                                        case 12:
                                          return !F.i.logged_in ||
                                            ("wishlist" !== t &&
                                              "interactive_recommender" !== t)
                                            ? [3, 13]
                                            : [
                                                2,
                                                (s = b.filter(function(e) {
                                                  return (
                                                    !H.a.BOwnsApp(e) &&
                                                    (("wishlist" === t &&
                                                      H.a.BIsGameWishlisted(
                                                        e
                                                      )) ||
                                                      ("interactive_recommender" ===
                                                        t &&
                                                        H.a.BIsGameRecommended(
                                                          e
                                                        )))
                                                  );
                                                })).map(function(e) {
                                                  return {
                                                    id: e,
                                                    type: "game"
                                                  };
                                                })
                                              ];
                                        case 13:
                                          if (
                                            !F.i.logged_in ||
                                            ("wishlist_onsale" !== t &&
                                              "dlc_onsale" !== t &&
                                              "dlc_music_onsale" !== t &&
                                              "interactive_recommender_onsale" !==
                                                t &&
                                              "ir_subscription" !== t &&
                                              "tag_recommender" !== t)
                                          )
                                            return [3, 30];
                                          switch (((s = []), t)) {
                                            case "wishlist_onsale":
                                              return [3, 14];
                                            case "dlc_onsale":
                                              return [3, 17];
                                            case "dlc_music_onsale":
                                              return [3, 20];
                                            case "interactive_recommender_onsale":
                                              return [3, 22];
                                            case "tag_recommender":
                                              return [3, 25];
                                            case "ir_subscription":
                                              return [3, 27];
                                          }
                                          return [3, 29];
                                        case 14:
                                          return Vt.GetHideWishlist()
                                            ? [3, 16]
                                            : [4, Ht.GetWishlistOnSale()];
                                        case 15:
                                          (s = e.sent()),
                                            (l = "game"),
                                            (e.label = 16);
                                        case 16:
                                          return [3, 29];
                                        case 17:
                                          return (
                                            (l = "dlc"),
                                            Vt.GetHideDLC()
                                              ? [3, 19]
                                              : [
                                                  4,
                                                  Ht.GetDLCForGamesInMyLibraryOnSale()
                                                ]
                                          );
                                        case 18:
                                          (s = e.sent()), (e.label = 19);
                                        case 19:
                                          return [3, 29];
                                        case 20:
                                          return (
                                            (l = "music"),
                                            [
                                              4,
                                              Ht.GetSoundtracksForGamesInMyLibraryOnSale()
                                            ]
                                          );
                                        case 21:
                                          return (s = e.sent()), [3, 29];
                                        case 22:
                                          return (
                                            (l = "game"),
                                            Vt.GetHideIRList()
                                              ? [3, 24]
                                              : [
                                                  4,
                                                  Ht.GetInteractiveRecommendationsOnSale()
                                                ]
                                          );
                                        case 23:
                                          (s = e.sent()), (e.label = 24);
                                        case 24:
                                          return [3, 29];
                                        case 25:
                                          return (
                                            (l = "game"),
                                            [
                                              4,
                                              Ht.GetTagRecommendorForThisSale(
                                                h,
                                                i
                                              )
                                            ]
                                          );
                                        case 26:
                                          return (s = e.sent()), [3, 29];
                                        case 27:
                                          return (
                                            (l = "game"),
                                            (c = 402931),
                                            [
                                              4,
                                              (d = Zt.Get()).LoadSubscriptionInfo(
                                                c
                                              )
                                            ]
                                          );
                                        case 28:
                                          return (
                                            e.sent(),
                                            (p = d.GetAllAppForMaster(c)),
                                            (s = Array.from(p).filter(function(
                                              e
                                            ) {
                                              return H.a.BIsGameRecommended(e);
                                            })),
                                            [3, 29]
                                          );
                                        case 29:
                                          return [
                                            2,
                                            s.map(function(e) {
                                              return { id: e, type: l };
                                            })
                                          ];
                                        case 30:
                                          return (
                                            console.warn(
                                              "unrecognized type",
                                              t
                                            ),
                                            [2, []]
                                          );
                                      }
                                    });
                                  }
                                );
                              })(
                                this.props.bIsPreview,
                                c,
                                i,
                                r,
                                ((t = s),
                                (F.c.IN_CLIENT
                                  ? "library-"
                                  : Object(F.e)() + "-") + t),
                                u
                              )
                            ])
                          : [3, 3];
                      case 2:
                        return (p = e.sent()), [3, 4];
                      case 3:
                        (p = r.capsules), (e.label = 4);
                      case 4:
                        return (
                          (p = xn(
                            (p = p.filter(function(e) {
                              return c.ShouldShowCapsule(e);
                            })),
                            d
                          )),
                          (m = !1),
                          (h = p.length),
                          0 < (v = this.GetRowsToShow(L)) &&
                            !l &&
                            "store" === Object(F.e)() &&
                            ((_ = r.adaptive_capsules_per_row
                              ? 3
                              : Object(ct.q)(r)),
                            4 + (b = _ * v + 4) < h && ((h = b), (m = !0))),
                          0 < (w = Object(ct.s)(r)) &&
                            ((g = Math.max(w + 5, Math.floor(1.1 * w))),
                            (h = Math.min(h, g))),
                          p.length > h && (p = p.slice(0, h)),
                          [4, Object(nn.e)(p)]
                        );
                      case 5:
                        return (
                          e.sent(), (y = Mn(r)) ? [4, Object(nn.d)(p)] : [3, 8]
                        );
                      case 6:
                        return (
                          (E = e.sent()),
                          0 <
                          (S = E.map(function(e) {
                            var t = Nt.a.GetAppLinkInfo(e);
                            return t && t.full_game_appid;
                          }).filter(function(e) {
                            return !!e;
                          })).length
                            ? [4, Nt.a.LoadAppLinkInfo(S)]
                            : [3, 8]
                        );
                      case 7:
                        e.sent(), (e.label = 8);
                      case 8:
                        return (f = new Array()), [4, Object(nn.a)(p, y, f)];
                      case 9:
                        return (
                          (O = e.sent()),
                          (C = f.length),
                          0 < (w = Object(ct.s)(r)) &&
                            w < O.length &&
                            (O = O.slice(0, w)),
                          this.setState({
                            nHiddenCapsules: C,
                            capsules: O,
                            bIsCapsuleArrayTruncated: m,
                            bInitialLoadComplete: !0
                          }),
                          [3, 19]
                        );
                      case 10:
                        return "events" !== r.section_type
                          ? [3, 16]
                          : ((T = void 0),
                            r.smart_section &&
                            "recent_events" === r.smart_section_type
                              ? [4, Wt.GetRecentEventsForSalesPage(i)]
                              : [3, 13]);
                      case 11:
                        return (
                          (I = e.sent()),
                          (k = I.map(function(e) {
                            var t = new G.a(e.clan_steamid);
                            return B.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              t,
                              e.gid,
                              e.nLastModifiedTime
                            );
                          })),
                          [4, Promise.all(k)]
                        );
                      case 12:
                        return (T = e.sent()), [3, 15];
                      case 13:
                        return [
                          4,
                          B.c.LoadBatchPartnerEventsByAnnouncementGID(
                            null,
                            r.events.map(function(e) {
                              return e.announcement_gid;
                            })
                          )
                        ];
                      case 14:
                        (T = e.sent()), (e.label = 15);
                      case 15:
                        return (
                          (D = T.filter(function(e) {
                            return !!e && c.ShouldShowEvent(e);
                          })),
                          Nt.a.LoadAppLinkInfo(
                            D.map(function(e) {
                              return e.appid;
                            })
                          ),
                          this.setState({
                            events: D,
                            bInitialLoadComplete: !0
                          }),
                          [3, 19]
                        );
                      case 16:
                        return "links" !== r.section_type &&
                          "sale_tabhub" !== r.smart_section_type
                          ? [3, 19]
                          : ((j = r.links),
                            "sale_tabhub" !== r.smart_section_type
                              ? [3, 18]
                              : [4, Ht.GetSaleTags()]);
                      case 17:
                        (A = e.sent()),
                          (j = A.map(function(e) {
                            return {
                              url: e.url,
                              localized_link_capsule: void 0,
                              materialized_link_capsule: e.square
                            };
                          })),
                          (e.label = 18);
                      case 18:
                        this.setState({ links: j, bInitialLoadComplete: !0 }),
                          (e.label = 19);
                      case 19:
                        return [2];
                    }
                    var t, a, n;
                  });
                })
              );
            }),
            (e.prototype.OnResize = function() {
              this.setState({
                bScreenIsWide: a.IsWideScreen(),
                nMaxCapsulesPerRow: a.GetMaxCapsulesPerRow()
              });
            }),
            (e.prototype.EstimateComponentHeight = function(e) {
              var t = e.show_as_carousel ? 1 : this.GetRowsToShow(0);
              return (
                0 == t && (t = this.state.capsules.length / Object(ct.q)(e)),
                250 * t
              );
            }),
            (e.prototype.GetRowsToShow = function(e) {
              var t = this.props.section;
              if (t.show_as_carousel) return 0;
              var a = Object(ct.p)(t);
              return a <= 0 ? 0 : a + e;
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.bIsPreview,
                n = e.language,
                r = this.state,
                o = r.bInitialLoadComplete,
                i = r.bIsCapsuleArrayTruncated,
                s = r.nHiddenCapsules,
                l = r.capsules,
                c = r.links,
                d = r.events,
                p = r.bScreenIsWide,
                u = r.nMaxCapsulesPerRow,
                m = r.bAwaitingShowContentLoading;
              if (!o) return null;
              var h = this.GetSectionForSession(),
                v = (function(e) {
                  var t = e.event,
                    r = e.section,
                    o = e.capsules,
                    a = e.links,
                    n = e.events,
                    i = e.language,
                    s = e.bShowParentApp,
                    l = t.clanSteamID.GetAccountID(),
                    c = t.BIsLockedToAppOwners();
                  {
                    if (Boolean("events" === r.section_type))
                      return n
                        ? n.map(function(t) {
                            return N.createElement(
                              "div",
                              {
                                key: r.unique_id + "_" + t.GID,
                                style: {},
                                className: da.a.OtherEvents
                              },
                              N.createElement(te.a, { event: t }),
                              N.createElement(ja, {
                                event: t,
                                openNewWindow: !0,
                                appInfo: Nt.a.GetAppLinkInfo(t.appid),
                                onClick: function(e) {
                                  x.a.Get().RecordEventShown(t, 8),
                                    Object(ht.a)(t, Se.o(e)),
                                    e.stopPropagation(),
                                    e.preventDefault();
                                }
                              })
                            );
                          })
                        : [];
                    if (
                      Boolean("links" === r.section_type) ||
                      Boolean("sale_tabhub" === r.smart_section_type)
                    )
                      return a
                        ? a.map(function(e, t) {
                            return N.createElement(Pa.c, {
                              key: r.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: l,
                              strClassName: an.a.LinkCapsule
                            });
                          })
                        : [];
                    if (Boolean("items" === r.section_type))
                      return o
                        ? o.map(function(e, t) {
                            var a =
                                r.adaptive_capsules_per_row ||
                                1 < Math.min(Object(ct.q)(r), o.length),
                              n =
                                r.unique_id +
                                "_" +
                                t +
                                "_" +
                                e.type +
                                "_" +
                                e.id;
                            return a
                              ? N.createElement(Pa.f, {
                                  key: n,
                                  capsule: e,
                                  bShowParentApp: s,
                                  bUseSubscriptionLayout: c,
                                  bUseDemoLayout: r.show_as_demos
                                })
                              : N.createElement(
                                  "div",
                                  {
                                    key: n,
                                    className: an.a.AppSummaryWidgetCtn
                                  },
                                  N.createElement(Pa.g, {
                                    id: e.id,
                                    type: e.type,
                                    bUseDemoLayout: r.show_as_demos
                                  })
                                );
                          })
                        : [];
                  }
                  return null;
                })({
                  event: t,
                  section: h,
                  capsules: l,
                  links: c,
                  events: d,
                  language: n,
                  bShowParentApp: Mn(h)
                }).filter(function(e) {
                  return !!e;
                }),
                _ = null;
              if (0 < v.length) {
                var b = Boolean(this.props.activeTab.GetTab()),
                  g = Math.min(Object(ct.q)(h), u, v.length),
                  y = Object(ct.r)(h),
                  E = h.show_as_carousel && y <= 1;
                if (E && v.length > g)
                  _ = N.createElement(
                    $t,
                    {
                      hideArrows: !p,
                      visibleElements: g,
                      className: Object(R.a)(
                        "SaleSectionCarousel",
                        "SaleSectionCarouselPadding"
                      ),
                      useTestScrollbar: b
                    },
                    v
                  );
                else {
                  var S = h.adaptive_capsules_per_row && !E,
                    f = this.GetRowsToShow(this.state.nShowAdditionalRows),
                    O = !0;
                  h.show_as_carousel && !E
                    ? ((f = y), (O = !1))
                    : !S &&
                      i &&
                      2 < f &&
                      f * g > v.length &&
                      (f = Math.max(2, Math.floor(v.length / g)));
                  for (
                    var C, w = new Array(), T = new Array(), I = 0, k = 0;
                    I < v.length;
                    k++
                  ) {
                    for (var D = 0; (0 == f || D < f) && I < v.length; D++) {
                      var j,
                        A = g;
                      S &&
                        ((j = [2, 3, 4, 3]),
                        (A = Math.min(j[D % j.length], u)));
                      var L = Math.min(A, v.length - I);
                      T.push(
                        N.createElement(
                          "div",
                          {
                            key: "Row_" + D,
                            className: Object(R.a)(
                              bt.a.SaleSectionContainer,
                              an.a.SaleSectionContainer
                            ),
                            style: {
                              gridTemplateColumns:
                                1 < A
                                  ? "repeat(" + A + ", minmax(0, 1fr))"
                                  : null
                            }
                          },
                          v.slice(I, I + L)
                        )
                      ),
                        (I += L);
                    }
                    if (O) break;
                    w.push(N.createElement("div", { key: "Page_" + k }, T)),
                      (T = []);
                  }
                  _ =
                    0 == w.length
                      ? ((C = i || v.length > I),
                        N.createElement(
                          N.Fragment,
                          null,
                          T,
                          C &&
                            N.createElement(
                              "div",
                              { className: an.a.ShowContentsContainer },
                              m
                                ? N.createElement(Q.a, { size: "small" })
                                : N.createElement(
                                    "button",
                                    {
                                      onClick: this.ShowMoreContents,
                                      className: an.a.ShowContentsButton
                                    },
                                    Object(P.d)("#Sale_ShowMore")
                                  )
                            )
                        ))
                      : N.createElement(
                          $t,
                          {
                            hideArrows: !p,
                            visibleElements: 1,
                            className: "SaleSectionCarousel",
                            useTestScrollbar: b
                          },
                          w
                        );
                }
              }
              if (!_) {
                if (!a) return null;
                _ = N.createElement(
                  "div",
                  { className: an.a.preview_placeholder_section },
                  Object(P.d)(
                    h.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var G = h.label_link
                ? (F.c.IN_CLIENT ? "steam://openurl/" : "") + Rn(h.label_link)
                : void 0;
              return N.createElement(
                pa.a,
                {
                  placeholderHeight: this.EstimateComponentHeight(h),
                  rootMargin: "0px 0px 100% 0px",
                  mode: "LoadAndUnload",
                  className: Object(R.a)(
                    an.a.SaleSection,
                    h.show_as_carousel && an.a.CarouselDisplay,
                    la.a.SaleSectionCtn
                  ),
                  style: Fn(h, t)
                },
                N.createElement(
                  "div",
                  { className: an.a.SaleSectionTitleCtn },
                  N.createElement(Dn, Object(M.a)({}, this.props)),
                  0 < s &&
                    N.createElement(
                      "div",
                      {
                        className: an.a.SaleSectionSubtext,
                        "data-tooltip-text": Object(P.d)(
                          "#Sale_HiddenItem_Tooltip"
                        )
                      },
                      N.createElement(
                        "a",
                        { href: F.c.STORE_BASE_URL + "account/preferences" },
                        Object(P.k)(
                          1 == s
                            ? "#Sale_HiddenItem_Single_Short"
                            : "#Sale_HiddenItems_Short",
                          s
                        )
                      )
                    )
                ),
                _,
                Boolean(G) &&
                  N.createElement(
                    "div",
                    { className: an.a.SaleViewAll },
                    N.createElement(
                      "a",
                      { href: G, target: F.c.IN_CLIENT ? void 0 : "_blank" },
                      Object(P.d)("#btn_live_streams_all")
                    )
                  )
              );
            }),
            Object(M.c)([v.a], e.prototype, "ShowMoreContents", null),
            Object(M.c)([v.a], e.prototype, "LoadCapsules", null),
            Object(M.c)([v.a], e.prototype, "OnResize", null),
            (e = a = Object(M.c)([s.a], e))
          );
        })(N.Component);
      function Mn(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function xn(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      var Bn = function(e) {
        var t = e.text,
          a = e.url,
          n = e.color,
          r = e.bgcolor;
        return N.createElement(
          "a",
          {
            className: bt.a.BrowseMoreButton,
            href: Rn(a),
            target: "_blank",
            style: { backgroundColor: r, color: n }
          },
          t || Object(P.d)("#Sale_BrowseMore_Text_Default")
        );
      };
      function Rn(t) {
        var e = "",
          a = "";
        if (t && (0 <= t.indexOf("/") || 0 <= t.indexOf("?")))
          try {
            var n = new URL(t),
              e = n.pathname.substring(1),
              a = n.search;
            F.c.SNR &&
              (a += 0 < a.length ? "&snr=" + F.c.SNR : "?snr=" + F.c.SNR);
          } catch (e) {
            console.warn(t, e);
          }
        return F.c.STORE_BASE_URL + e + a;
      }
      function Pn(e, t, a, n) {
        var r =
            e.localized_label[t] ||
            e.localized_label[0] ||
            ("#Sale_default_label" === e.default_label
              ? ""
              : Object(P.d)(e.default_label)),
          o =
            e.localized_label_image &&
            (e.localized_label_image[t] || e.localized_label_image[0]);
        if (n || !o) return r;
        var i = F.c.MEDIA_CDN_COMMUNITY_URL + "images/clans/" + a + "/" + o;
        return N.createElement("img", { loading: "lazy", src: i, alt: r });
      }
      function Fn(e, t) {
        if (e.disable_background) return { paddingLeft: 0, paddingRight: 0 };
        var a = "";
        return (
          e.background_image &&
            (a +=
              "url(" +
              ne.a.GenerateArtworkURLFromHashAndExtensions(
                t.clanSteamID,
                e.background_image
              ) +
              "),"),
          {
            background:
              a +
              ("linear-gradient(0deg, " +
                (e.background_gradient_bottom || "transparent") +
                " 0%, " +
                (e.background_gradient_top || "transparent")) +
              " 100%)"
          }
        );
      }
      function Hn(e, t) {
        return 12 === t
          ? e.replace("Jolly Lodger", "New Rocker")
          : 23 === t || 19 === t || 24 === t || 18 === t || 8 === t || 26 === t
          ? e.replace("Sigmar One", "Play")
          : 6 === t
          ? e.replace("Sigmar One", "Noto Serif SC")
          : 7 === t
          ? e.replace("Sigmar One", "Noto Serif TC")
          : 10 === t
          ? e.replace("Sigmar One", "M PLUS Rounded 1c")
          : 4 === t
          ? e.replace("Sigmar One", "Black Han Sans")
          : 9 === t
          ? e.replace("Sigmar One", "Prompt")
          : e;
      }
      var zn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.OnEnter = function() {
              this.state.bOnceVisible || this.setState({ bOnceVisible: !0 });
            }),
            (e.prototype.render = function() {
              var t = this;
              return N.createElement(
                b.a,
                null,
                N.createElement(
                  N.Suspense,
                  { fallback: N.createElement("div", null) },
                  N.createElement(
                    X.a,
                    { onEnter: this.OnEnter },
                    N.createElement(
                      "div",
                      { className: an.a.SaleBroadcastSection },
                      Boolean(this.state.bOnceVisible) &&
                        N.createElement(fn, {
                          promotionName: this.props.promotionName,
                          clanid: Number(F.b.CLANACCOUNTID),
                          bShowDemoOptions: this.props.bShowDemoOptions,
                          event: this.props.eventModel,
                          bIsPreview: this.props.bIsPreview,
                          language: this.props.language,
                          fnFilterStreams: function(e) {
                            return t.props.activeTab.ShouldShowOnTab(
                              "game",
                              e.appid
                            );
                          }
                        }),
                      Boolean(!this.state.bOnceVisible) &&
                        N.createElement("span", null, Object(P.d)("#Loading"))
                    )
                  )
                )
              );
            }),
            Object(M.c)([v.a], e.prototype, "OnEnter", null),
            e
          );
        })(N.Component),
        Un = Object(s.a)(function(e) {
          var t = Ft.c.GetPlayReadyStream(),
            a = t && t.appid;
          _.a.EnsureStoreCapsuleInfoLoaded(a);
          var n = _.a.GetStoreCapsuleInfo(a),
            r = n && n.GetAppStoreData(),
            o = r && r.title;
          if (!o) return null;
          function i() {
            return window.open(r.capsule_link, "_blank");
          }
          var s =
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/" +
            (r.cover_image_asset_url
              ? "images/apps/" + a + "/" + r.cover_image_asset_url + ".jpg"
              : "images/apps/1195650/246e7e2a24c0aa965e505ac510d4e8e952f9a88a.jpg");
          return N.createElement(
            "div",
            { className: an.a.SalePageBroadcastContextHover },
            N.createElement("img", {
              src: s,
              className: an.a.AlbumCoverImage,
              onClick: i
            }),
            N.createElement(
              "div",
              { className: an.a.AlbumTitle, onClick: i },
              " ",
              o,
              " "
            )
          );
        }),
        Wn = a("BVKn"),
        Vn = Wn.a.Get(),
        Zn = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : Vn.GetClanEventGIDFromAnnouncementGID(
                      t.props.announcement_gid
                    )
              }),
              t
            );
          }
          return (
            Object(M.d)(e, a),
            (e.prototype.LoadEvent = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !this.props.event_gid ||
                        Vn.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          Vn.LoadPartnerEventGeneric(
                            this.props.clansteamid,
                            this.props.appid,
                            this.props.event_gid,
                            void 0,
                            0
                          )
                        ]
                      );
                    case 2:
                      return (
                        (t = e.sent()),
                        this.setState({ lookupGID: t.GID }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        e.sent(),
                        Vn.LoadPartnerEventGeneric(
                          this.props.clansteamid,
                          this.props.appid,
                          void 0,
                          this.props.event_gid,
                          0
                        )
                          .then(function(e) {
                            return a.setState({ lookupGID: e.GID });
                          })
                          .catch(function(e) {
                            return console.log(
                              "StoreEventDetailView failed " +
                                Object(Re.a)(e).strErrorMsg
                            );
                          }),
                        [3, 4]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      this.props.announcement_gid &&
                        !Vn.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        Vn.LoadPartnerEventGeneric(
                          this.props.clansteamid,
                          this.props.appid,
                          void 0,
                          this.props.announcement_gid,
                          0
                        )
                          .then(function(e) {
                            return a.setState({ lookupGID: e.GID });
                          })
                          .catch(function(e) {
                            return console.log(
                              "StoreEventDetailView failed " +
                                Object(Re.a)(e).strErrorMsg
                            );
                          }),
                        (e.label = 6);
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.componentDidMount = function() {
              this.LoadEvent(), this.UpdateDocumentUI();
            }),
            (e.prototype.componentDidUpdate = function() {
              this.UpdateDocumentUI();
            }),
            (e.prototype.UpdateDocumentUI = function() {
              var e,
                t,
                a,
                n =
                  this.state.lookupGID &&
                  Vn.GetClanEventModel(this.state.lookupGID);
              n && n.appid
                ? (t =
                    (e = _.a.GetStoreCapsuleInfo(n.appid).GetAppStoreData()) &&
                    e.title)
                : n &&
                  n.clanSteamID &&
                  (t =
                    (a = y.a.GetClanInfoByClanAccountID(
                      n.clanSteamID.GetAccountID()
                    )) && a.group_name);
              var r,
                o = n && n.GetNameWithFallback(Object(ae.d)(F.c.LANGUAGE));
              n &&
                t &&
                o &&
                ((r = Object(P.d)(
                  "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                  t,
                  o
                )),
                document.title != r && (document.title = r)),
                document.body.classList.contains("events_hub") &&
                  document.body.classList.remove("events_hub");
            }),
            (e.prototype.InfiniteScrollCloseModal = function() {
              var e = Vn.GetClanEventModel(this.state.lookupGID);
              e &&
                (e.appid
                  ? this.props.history.push("/newshub/app/" + e.appid)
                  : this.props.history.push(
                      "/newshub/group/" + e.clanSteamID.GetAccountID()
                    ));
            }),
            (e.prototype.render = function() {
              var e = Vn.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? c.a.createElement(
                      b.a,
                      null,
                      c.a.createElement(Pe, {
                        classname: z.a.StoreHeaderAdjust,
                        appid: e.appid,
                        trackingLocation: 0,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: Vn,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : c.a.createElement(
                      b.a,
                      null,
                      c.a.createElement(Ha, {
                        lang: Object(ae.d)(F.c.LANGUAGE),
                        partnerEventStore: Vn,
                        event: e,
                        adminPanel: c.a.createElement(ia, {
                          eventModel: e,
                          partnerEventStore: Vn
                        }),
                        otherEventRow: c.a.createElement(Da, {
                          appid: e.appid,
                          eventModel: e,
                          partnerEventStore: Vn
                        })
                      })
                    )
                : c.a.createElement(Q.a, null);
            }),
            Object(M.c)([v.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(M.c)([s.a], e))
          );
        })(c.a.Component),
        Yn = Object(l.g)(Zn),
        qn = a("WBba"),
        Jn = a("r+ba"),
        Qn = a("apHd"),
        Kn = (function(n) {
          function e(e) {
            var a = n.call(this, e) || this;
            a.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(Qn.a)("EventWebRowEmbed");
            return (
              a.ValidateStoreDefault(t) &&
                ((a.state.bPreLoaded = t.bPreLoaded),
                (a.state.announcementGIDList = t.announcementGIDList),
                (a.state.events = []),
                a.state.announcementGIDList.forEach(function(e) {
                  var t = B.c.GetClanEventFromAnnouncementGID(e);
                  t && a.state.events.push(t);
                })),
              a
            );
          }
          return (
            Object(M.d)(e, n),
            (e.prototype.componentDidMount = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  s,
                  l = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props),
                        (a = t.appid),
                        (n = t.event_customization),
                        (r = t.partnerEventStore),
                        (o = t.trackingLocation),
                        this.state.bPreLoaded
                          ? [3, 2]
                          : [
                              4,
                              r.LoadAdjacentPartnerEvents(
                                null,
                                null,
                                a,
                                0,
                                2,
                                n
                              )
                            ]
                      );
                    case 1:
                      (i = e.sent()),
                        this.setState({ events: i }),
                        o &&
                          i &&
                          0 < i.length &&
                          ((s = x.a.Get().GetTracker()),
                          this.state.events
                            .filter(function(e) {
                              return e.BIsPartnerEvent();
                            })
                            .forEach(function(e) {
                              return s.MarkEventShown(
                                e.GID,
                                e.clanSteamID.GetAccountID(),
                                o
                              );
                            }),
                          s.Flush()),
                        (e.label = 2);
                    case 2:
                      return (
                        (window.fnPartnerEvent_ShowInfiniteScroll = function(
                          e,
                          t
                        ) {
                          console.log("appid: " + e + " gid: " + t),
                            l.setState({
                              bShowModal: !0,
                              announcementGID: t,
                              modalInitialEvent: void 0
                            });
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              return (
                !(!e || "object" != typeof e) &&
                (void 0 !== e.bPreLoaded &&
                  "boolean" == typeof e.bPreLoaded &&
                  Array.isArray(e.announcementGIDList))
              );
            }),
            (e.prototype.ShowModal = function(e) {
              var t = this.props.trackingLocation;
              this.setState({
                bShowModal: !0,
                modalInitialEvent: e,
                announcementGID: void 0
              });
              var a = x.a.Get().GetTracker();
              e.BIsPartnerEvent() &&
                a.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
                a.Flush();
            }),
            (e.prototype.CloseModal = function() {
              this.setState({ bShowModal: !1, modalInitialEvent: null });
            }),
            (e.prototype.render = function() {
              var a = this,
                n = this.state.events;
              if (!n)
                return c.a.createElement(
                  "div",
                  { className: Be.a.FlexCenter },
                  c.a.createElement(Q.a, { size: "medium", position: "center" })
                );
              if (n && 0 === n.length) return null;
              var e = window.screen.width <= 500 ? 1 : 2,
                t = this.props,
                r = t.partnerEventStore,
                o = t.strClassName,
                i = t.appid,
                s = t.trackingLocation;
              return c.a.createElement(
                "div",
                { className: o },
                this.state.bShowModal &&
                  c.a.createElement(Pe, {
                    classname: Jn.StoreHeaderAdjust,
                    appid: i,
                    trackingLocation: s,
                    announcementGID: this.state.announcementGID
                      ? this.state.announcementGID
                      : this.state.modalInitialEvent.AnnouncementGID,
                    partnerEventStore: r,
                    eventModel: this.state.modalInitialEvent,
                    closeModal: this.CloseModal
                  }),
                c.a.createElement(
                  "h2",
                  null,
                  Object(P.d)("#EventBrowse_RecentEvents")
                ),
                c.a.createElement(
                  "div",
                  { className: Jn.SectionButtonCtn },
                  c.a.createElement(
                    "div",
                    {
                      className: Jn.SectionButton,
                      onClick: function() {
                        return a.ShowModal(n[0]);
                      }
                    },
                    Object(P.d)("#EventBrowse_MoreEventsBtn")
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: Jn.EventsSummariesCtn },
                  n.slice(0, e).map(function(t) {
                    var e =
                      1 === n.length && 500 < window.screen.width ? Aa : ja;
                    return c.a.createElement(e, {
                      key: t.GID,
                      event: t,
                      onClick: function(e) {
                        a.ShowModal(t), e.stopPropagation(), e.preventDefault();
                      }
                    });
                  })
                )
              );
            }),
            Object(M.c)([v.a], e.prototype, "ShowModal", null),
            Object(M.c)([v.a], e.prototype, "CloseModal", null),
            e
          );
        })(c.a.Component),
        Xn = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var a = L.a.GetTimeNowWithOverrideAsDate(),
              n = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(n.getTime() / 1e3)), t;
          }
          return (
            Object(M.d)(e, r),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return c.a.createElement(Kn, {
                appid: e,
                partnerEventStore: Wn.a.Get(),
                event_customization: {
                  rtime_oldestevent: this.m_rtimeOldest,
                  exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
                  exclude_event_types: [34]
                },
                strClassName: "early_access_announcements",
                trackingLocation: 3
              });
            }),
            e
          );
        })(c.a.Component);
      Le.a.Init(new qn.a(F.c.WEBAPI_BASE_URL)), B.c.Init();
      function $n(e) {
        var t = e.children,
          a = Object(N.useState)(x.a.IsInitialized()),
          n = a[0],
          r = a[1];
        return n
          ? c.a.createElement(c.a.Fragment, null, t)
          : (x.a.InitGlobal().then(function() {
              return r(!0);
            }),
            null);
      }
      function er(t) {
        return function(e) {
          return c.a.createElement($n, null, c.a.createElement(t, e));
        };
      }
      var tr = er(Ct),
        ar = er(Pt),
        nr = er(On),
        rr = er(et),
        or = er(Yn),
        ir = er(Xn),
        sr = er(xt);
    },
    ZCZY: function(e, t, a) {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_3jswb" };
    },
    bUNj: function(e, t, a) {},
    dgee: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
    dsx8: function(e, t, a) {
      e.exports = {
        StoreHeaderAdjust: "events_StoreHeaderAdjust_1MJYc",
        SectionButtonCtn: "events_SectionButtonCtn_xzUHb",
        SectionButton: "events_SectionButton_3I3q-",
        EventsSummariesCtn: "events_EventsSummariesCtn_1MHN3"
      };
    },
    go9d: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtNJREFUeNrsmk1rE0EYgHe19ZBIY2kj4qUQVGjxAz2J4gcVvfmBP8FI8eZF8OJNL4oFPYrGX1CK4lEMiChe/aCClNBeRGxLTTE5GDU+Y2bDJG5rL5lZ950XnsxkE5h9n8zszkw2bDabgeTYEAgPL8AL8AK8AC/AC/AC5EafegnDcM0vMVvMUOyA7bBNswVymgHYDOp7m/SxUNczRlvZdZ5XDX7oeh2+q9OAqq6rY99gRR9TfIXPmk8wS171f+QVhH9eYgRw/BhFEQ7q5MP/7MdVwmbhNZTI8fm6BPBe/XoP4XzKevs0XCDX6qoCdPIvYE9Kh/xbOBpJULl3XwQfpDh5FXt1ju1o9wDKQ7x/KeTif5icX3X3gKKgu18xbh4wLkjAeMcQIPLwRdgcaCssRD1gTOAkcMwcAgWBAgqmgBGBAkZMAfkeN1ZPoIC8KWCox409hePwJkEChmwKCPRi5ABMJOSO0yFg2EaLSPgF96nuhFt6aesqhk0BgzZbRsIKXKU6Co8dCRg0BWRdnAESKnCO6gl4Z7n5rCmg3+VgREKZYj9cUrMzS832mwJyrq9ISPgJ9/T1YRIaPW4y170YSkSozQq4QnU3POl1e4ndFUbCRzhD9RS8FyfAVvQl9cRYpu+iuA2nRQnQG7PX4LKNu1MkoOr6TkDiGykuwnULi7Mo57aAhuPk1RbVncDujnTDvAjWHCVegEdUnwX2t+NrpoBly4kPwE2qH+Cso463bA6BRUuJK+FqS/pG0NqUdBmLpoAlC8mrP1vvwr6E3HCWbAo46bCrrykgugb0egWWSeBca8EUMC9wFjxvCqgIFFAxBcwIFDDTFsCyU42HOUHJz+mcO5bDZUECynH7ASVBAkp/CVBPTFBMCUh+Sufayts/JGWE/uBI0HqkLG0xbSYf2wNi5u7yHpRcZSGT7kdlJYd/XN4L8AK8AC/AC/ACvACx8VuAAQDxke5GRJ5P8AAAAABJRU5ErkJggg==";
    },
    hmtA: function(e, t, a) {},
    i6tc: function(e, t, a) {
      e.exports = {
        TileContainer: "eventcalendartile_TileContainer_1E3An",
        LiveText: "eventcalendartile_LiveText_RNDf0",
        LiveNow: "eventcalendartile_LiveNow_EVDkY",
        FutureDateText: "eventcalendartile_FutureDateText_2xdhM",
        PastDateText: "eventcalendartile_PastDateText_4-fqV",
        SourceRecommended: "eventcalendartile_SourceRecommended_1yaRL",
        DateAndSourceLine: "eventcalendartile_DateAndSourceLine_2xxMB",
        SourceList: "eventcalendartile_SourceList_3BIx7",
        Source: "eventcalendartile_Source_2lYFq",
        EventTypeAndDateCtn: "eventcalendartile_EventTypeAndDateCtn_sUBHF",
        SmallAppName: "eventcalendartile_SmallAppName_1-Jl_",
        TileTextCategoryType: "eventcalendartile_TileTextCategoryType_1LkWX",
        EventType28: "eventcalendartile_EventType28_1qGfE",
        EventType11: "eventcalendartile_EventType11_2Gv13",
        EventType35: "eventcalendartile_EventType35_2wHiB",
        EventType13: "eventcalendartile_EventType13_2D0ZN",
        EventType14: "eventcalendartile_EventType14_2mVdt",
        EventType15: "eventcalendartile_EventType15_2Xke6",
        Tile: "eventcalendartile_Tile_3xvUZ",
        MainContentContainer: "eventcalendartile_MainContentContainer_2pq2v",
        CoverImageCtn: "eventcalendartile_CoverImageCtn_3HF9t",
        EventCapsuleCtn: "eventcalendartile_EventCapsuleCtn_27kWH",
        YoutubePreviewImage: "eventcalendartile_YoutubePreviewImage_1UgZv",
        TileImage: "eventcalendartile_TileImage_d8bPi",
        TileTextContainer: "eventcalendartile_TileTextContainer_3IQK4",
        EventType12: "eventcalendartile_EventType12_2X_hM",
        EventName: "eventcalendartile_EventName_1M8-P",
        EventSummary: "eventcalendartile_EventSummary_1yvEg",
        EventSubTitle: "eventcalendartile_EventSubTitle_1JjUp",
        EventTitleCtn: "eventcalendartile_EventTitleCtn_1h5cJ",
        TileTextHeader: "eventcalendartile_TileTextHeader_3-0KO",
        GameCapsuleCtn: "eventcalendartile_GameCapsuleCtn_3HJFi",
        AppBannerLogo: "eventcalendartile_AppBannerLogo_u8z1m",
        PatchIconCtn: "eventcalendartile_PatchIconCtn_Fm9_5",
        "Tag-steam_award_vote_request":
          "eventcalendartile_Tag-steam_award_vote_request_tAmZA",
        FallbackImage: "eventcalendartile_FallbackImage_9rv9P",
        LiveBroadcastPreview: "eventcalendartile_LiveBroadcastPreview_4UYuS",
        TileBackgroundImage: "eventcalendartile_TileBackgroundImage_gGujG",
        TileGameCapsule: "eventcalendartile_TileGameCapsule_2AXYk",
        EnableHovers: "eventcalendartile_EnableHovers_2BniJ",
        AppIcon: "eventcalendartile_AppIcon_3gwk6",
        TileTextAppName: "eventcalendartile_TileTextAppName_71phF",
        TileCoverImagePlayable:
          "eventcalendartile_TileCoverImagePlayable_2eoFk",
        TileCoverLiveIcon: "eventcalendartile_TileCoverLiveIcon__dmbj",
        ReminderContainer: "eventcalendartile_ReminderContainer_1_taB",
        EventSummaryDefault: "eventcalendartile_EventSummaryDefault_2g3Jj",
        Vote_NotLoggedIn: "eventcalendartile_Vote_NotLoggedIn_17oqR",
        Vote_LimitedUser: "eventcalendartile_Vote_LimitedUser_2FlPo",
        Vote_Positive: "eventcalendartile_Vote_Positive_ysX-k",
        RateIcon: "eventcalendartile_RateIcon_2se4H",
        Vote_Negative: "eventcalendartile_Vote_Negative_3LqNu",
        Vote_Ready: "eventcalendartile_Vote_Ready_3issE",
        Footer: "eventcalendartile_Footer_1tdf1",
        FooterRightSide: "eventcalendartile_FooterRightSide_1Hhqg",
        Options: "eventcalendartile_Options_3nZg0",
        TileViewerCount: "eventcalendartile_TileViewerCount_pg-a3",
        FooterStat: "eventcalendartile_FooterStat_3_86J",
        CommentIcon: "eventcalendartile_CommentIcon_Wn7qA",
        CommentIconCtn: "eventcalendartile_CommentIconCtn_PR8xM",
        MiniMode: "eventcalendartile_MiniMode_3GAeK",
        TileVideoIcon: "eventcalendartile_TileVideoIcon_aK0jl",
        DateAndTime: "eventcalendartile_DateAndTime_1gEM9",
        HasVideo: "eventcalendartile_HasVideo_qbgBA",
        VideoPlayerReady: "eventcalendartile_VideoPlayerReady_1onQj"
      };
    },
    qP7j: function(e, t, a) {
      e.exports = {
        ErrorStyles: "partnereventdialog_ErrorStyles_2Sg7W",
        ErrorStylesWithIcon: "partnereventdialog_ErrorStylesWithIcon_Lc2PK",
        ErrorIconLayout: "partnereventdialog_ErrorIconLayout_42__6",
        ErrorStylesBackground: "partnereventdialog_ErrorStylesBackground_3fVv6",
        WarningStyles: "partnereventdialog_WarningStyles_3gxgE",
        WarningStylesWithIcon: "partnereventdialog_WarningStylesWithIcon_1S_uS",
        WarningIconLayout: "partnereventdialog_WarningIconLayout_2jM80",
        WarningStylesBackground:
          "partnereventdialog_WarningStylesBackground_UYrHs",
        Padding: "partnereventdialog_Padding_36hma",
        NotTooWideModal: "partnereventdialog_NotTooWideModal_UfQcb"
      };
    },
    "r+ba": function(e, t, a) {
      e.exports = {
        Container: "partnereventwebrowembed_Container_2Jd3M",
        StoreHeaderAdjust: "partnereventwebrowembed_StoreHeaderAdjust_3YyCp",
        SectionButtonCtn: "partnereventwebrowembed_SectionButtonCtn_1HP0y",
        SectionButton: "partnereventwebrowembed_SectionButton_3n8sw",
        EventsSummariesCtn: "partnereventwebrowembed_EventsSummariesCtn_1snIw"
      };
    },
    sGzE: function(e, t, a) {
      e.exports = {
        StatsTitle: "partnereventstats_StatsTitle_3YLaB",
        StatsCtnTitle: "partnereventstats_StatsCtnTitle_1LlRF",
        SmallStatsMode: "partnereventstats_SmallStatsMode_2A2-p",
        StatsCtn: "partnereventstats_StatsCtn_hWCs4",
        StatsLeftSection: "partnereventstats_StatsLeftSection_3L-uh",
        StatsRightSection: "partnereventstats_StatsRightSection_1yibD"
      };
    },
    vNkc: function(e, t, a) {
      e.exports = { Error: "eventbackfill_Error_1eWgI" };
    }
  }
]);
