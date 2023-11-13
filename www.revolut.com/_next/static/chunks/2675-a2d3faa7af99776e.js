"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2675], {
        56669: function(e, r, t) {
            t.d(r, {
                _: function() {
                    return m
                }
            });
            var n = t(67294),
                o = t(14141),
                i = t(79500),
                a = t(45919),
                l = t(42378),
                s = function(e, r) {
                    return (0, a.D5)(e) ? (0, a.EN)(e)({
                        theme: r
                    }) : e
                },
                c = t(22674),
                u = t(2660),
                f = ["bg", "color", "size", "value", "strokeWidth", "children"];

            function d() {
                return (d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = {
                    SIZE_50: 50,
                    SIZE_86: 86,
                    SIZE_94: 94,
                    SIZE_234: 234
                },
                g = o.ZP.text.withConfig({
                    displayName: "ProgressCircle__ProgressCircleText",
                    componentId: "rui__sc-ytgnh9-0"
                })(["", " fill:currentColor;"], (0, a.Ou)(i.p.H5));
            g.defaultProps = {
                x: "50%",
                y: "50%",
                dominantBaseline: "central",
                textAnchor: "middle"
            };
            var v = {
                    transformBox: "fill-box",
                    transformOrigin: "center",
                    transform: "rotate(-90deg)",
                    transition: "stroke-dashoffset 0.5s"
                },
                m = function(e) {
                    var r, t, o = e.bg,
                        i = e.color,
                        g = void 0 === i ? c.W.color.blue : i,
                        m = e.size,
                        h = void 0 === m ? p.SIZE_50 : m,
                        S = e.value,
                        E = void 0 === S ? 0 : S,
                        O = e.strokeWidth,
                        C = void 0 === O ? 2 : O,
                        N = e.children,
                        _ = function(e, r) {
                            if (null == e) return {};
                            var t, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                            return o
                        }(e, f),
                        I = (t = (0, l.F)(), (0, n.useMemo)(function() {
                            return null == r ? function(e) {
                                return s(e, t)
                            } : s(r, t)
                        }, [r, t])),
                        y = h / 2,
                        b = y - C / 2,
                        T = 2 * Math.PI * b,
                        W = T * (1 - (0, a.uZ)(0, 1, E));
                    return n.createElement(u.C, d({}, _, {
                        "aria-valuemax": 1,
                        "aria-valuemin": 0,
                        "aria-valuenow": E,
                        "aria-valuetext": 100 * E + "%",
                        color: g,
                        role: "progressbar",
                        size: h,
                        use: "svg",
                        viewBox: "0 0 " + h + " " + h
                    }), o && n.createElement("circle", {
                        cx: y,
                        cy: y,
                        fill: "none",
                        r: b,
                        stroke: I(o),
                        strokeWidth: C
                    }), n.createElement("circle", {
                        style: v,
                        cx: y,
                        cy: y,
                        fill: "none",
                        r: b,
                        stroke: "currentColor",
                        strokeDasharray: T,
                        strokeDashoffset: W,
                        strokeLinecap: "round",
                        strokeWidth: C
                    }), N)
                };
            m.Text = g
        },
        2297: function(e, r, t) {
            t.d(r, {
                L: function() {
                    return s
                }
            });
            var n = t(44547),
                o = t(14141),
                i = t(16678),
                a = t(25348),
                l = (0, n.By)({
                    size: {
                        properties: ["width", "height"],
                        scale: a.C.SPACE
                    },
                    minSize: {
                        property: "flexBasis",
                        scale: a.C.SPACE
                    }
                }),
                s = o.ZP.div.withConfig({
                    displayName: "Spacer",
                    componentId: "rui__sc-e2cz3-0"
                })(["&&{flex:", ";margin:0 !important;", " ", " ", "}"], function(e) {
                    var r, t;
                    return (null != (r = null != (t = e.size) ? t : e.height) ? r : e.width) != null ? "0 1 auto" : "1 1 0%"
                }, l, i.Cb, i.bf)
        },
        92675: function(e, r, t) {
            t.d(r, {
                u: function() {
                    return D
                }
            });
            var n, o, i, a = t(67294),
                l = t(14141),
                s = t(25394),
                c = t(79500),
                u = t(67035),
                f = t(22674),
                d = t(45919),
                p = t(29341),
                g = t(80571),
                v = t(51303),
                m = t(24397),
                h = t(2297),
                S = t(939),
                E = t(68298),
                O = t(33252),
                C = t(30116),
                N = ["timeout", "onClose", "activeBg", "paused"];

            function _() {
                return (_ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var I = (0, l.F4)(["from{transform:translateX(-100%);}to{transform:translateX(0%);}"]),
                y = (0, l.ZP)(C.x).withConfig({
                    displayName: "TimerProgressBar__ProgressBar",
                    componentId: "rui__sc-13z4uko-0"
                })(["height:inherit;width:inherit;border-radius:inherit;animation:", " ", " linear forwards;animation-play-state:", ";"], I, (0, E.v)("duration", 0, "ms"), function(e) {
                    return e.paused ? "paused" : void 0
                }),
                b = function(e) {
                    var r = e.timeout,
                        t = e.onClose,
                        n = e.activeBg,
                        o = e.paused,
                        i = void 0 === o ? !(0, O.q)("animations") : o,
                        l = function(e, r) {
                            if (null == e) return {};
                            var t, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                            return o
                        }(e, N);
                    return a.createElement(C.x, _({
                        bg: f.W.color.greyTone5,
                        overflow: "hidden"
                    }, l), void 0 !== r && a.createElement(y, {
                        role: "timer",
                        bg: null != n ? n : f.W.color.greyTone20,
                        duration: r,
                        onAnimationEnd: t,
                        paused: i
                    }))
                },
                T = t(15059),
                W = t(56669),
                P = t(48986),
                R = ["color"];

            function A() {
                return (A = Object.assign ? Object.assign.bind() : function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var k = function(e) {
                    var r = e.color,
                        t = void 0 === r ? f.W.color.blue : r,
                        n = function(e, r) {
                            if (null == e) return {};
                            var t, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                            return o
                        }(e, R);
                    return a.createElement(P.$, A({
                        color: t,
                        size: 36,
                        strokeWidth: 3
                    }, n))
                },
                x = {
                    SUCCESS: "success",
                    SUCCESS_OPTIONAL: "success-optional",
                    SUCCESS_RESULT: "success-result",
                    PENDING: "pending",
                    WAITING: "waiting",
                    LOADING: "loading",
                    WARNING: "warning",
                    ERROR: "error",
                    OFFLINE: "offline",
                    SOFT_FAIL: "soft-fail",
                    IN_PROGRESS: "in-progress"
                },
                G = ((n = {})[x.SUCCESS] = "Check", n[x.SUCCESS_OPTIONAL] = "Check", n[x.SUCCESS_RESULT] = "Check", n[x.PENDING] = "TimeOutline", n[x.WAITING] = "TimeOutline", n[x.WARNING] = "ExclamationTriangle", n[x.ERROR] = "Cross", n[x.OFFLINE] = "Communication", n[x.SOFT_FAIL] = "Cross", n),
                L = ((o = {})[x.SUCCESS] = f.W.color.blue, o[x.SUCCESS_OPTIONAL] = f.W.color.blue, o[x.SUCCESS_RESULT] = f.W.color.blue, o[x.PENDING] = f.W.color.greyTone50, o[x.WAITING] = f.W.color.greyTone50, o[x.LOADING] = f.W.color.blue, o[x.WARNING] = f.W.color.orange, o[x.ERROR] = f.W.color.red, o[x.OFFLINE] = f.W.color.greyTone50, o[x.SOFT_FAIL] = f.W.color.greyTone50, o[x.IN_PROGRESS] = f.W.color.blue, o);

            function w(e) {
                var r = e.variant,
                    t = e.progress,
                    n = L[r];
                switch (r) {
                    case x.LOADING:
                        return a.createElement(k, {
                            color: n
                        });
                    case x.IN_PROGRESS:
                        if (void 0 === t) return a.createElement(k, {
                            role: "presentation"
                        });
                        return a.createElement(W._, {
                            strokeWidth: 3,
                            size: 36,
                            value: t,
                            bg: f.W.color.greyTone5
                        });
                    default:
                        return a.createElement(T.J, {
                            name: G[r],
                            color: n,
                            size: 36,
                            role: "presentation"
                        })
                }
            }
            var F = ["variant", "children", "onClose", "progress"];

            function U() {
                return (U = Object.assign ? Object.assign.bind() : function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var j = {
                    SHORT: 1200,
                    LONG: 5e3
                },
                z = ((i = {})[x.SUCCESS] = j.SHORT, i[x.SUCCESS_OPTIONAL] = j.LONG, i[x.SUCCESS_RESULT] = void 0, i[x.PENDING] = j.LONG, i[x.WAITING] = void 0, i[x.LOADING] = void 0, i[x.WARNING] = void 0, i[x.ERROR] = void 0, i[x.OFFLINE] = j.LONG, i[x.SOFT_FAIL] = void 0, i[x.IN_PROGRESS] = void 0, i),
                D = function(e) {
                    var r = e.variant,
                        t = e.children,
                        n = e.onClose,
                        o = void 0 === n ? d.ZT : n,
                        i = e.progress,
                        l = function(e, r) {
                            if (null == e) return {};
                            var t, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                            return o
                        }(e, F);
                    return a.createElement(v.G, U({
                        scrollRef: function(e) {
                            null != e && e.scrollHeight && e.lastElementChild && (e.style.height = e.scrollHeight - e.lastElementChild.scrollHeight + "px")
                        },
                        variant: m.wT.RESULT,
                        onClose: function() {
                            o()
                        }
                    }, l), function(e) {
                        var n = e.isEntered,
                            o = e.toggle;
                        return a.createElement(a.Fragment, null, n ? a.createElement(Z, {
                            timeout: z[r],
                            onClose: function() {
                                return o(!1)
                            }
                        }) : a.createElement(Z, null), a.createElement(B, {
                            display: "flex",
                            pt: f.W.space.s20,
                            mx: "auto"
                        }, a.createElement(w, {
                            variant: r,
                            autoPlay: n,
                            progress: i
                        })), t, a.createElement(h.L, null))
                    })
                },
                Z = function(e) {
                    return a.createElement(b, U({
                        width: f.W.size.s40,
                        height: f.W.size.s4,
                        radius: (0, d.z3)(s.G.RADIUS_BUTTON_SM),
                        bg: f.W.color.greyTone5,
                        mx: "auto",
                        mt: f.W.size.n24
                    }, e))
                },
                B = (0, l.ZP)(S.xv).withConfig({
                    displayName: "StatusPopup__StatusPopupText",
                    componentId: "rui__sc-1w2lksq-0"
                })(["&:nth-last-child(2){margin-bottom:", ";}"], f.W.space.s32);
            D.Title = function(e) {
                var r = (0, p.qk)();
                return a.createElement(B, U({
                    id: (0, g.u)(r),
                    variant: c.p.H5,
                    textAlign: "center",
                    mt: f.W.space.s24,
                    color: f.W.color.foreground
                }, e))
            }, D.Description = function(e) {
                var r = (0, p.qk)();
                return a.createElement(B, U({
                    id: (0, g.k)(r),
                    variant: c.p.CAPTION,
                    textAlign: "center",
                    mt: f.W.space.s20,
                    color: f.W.color.greyTone50
                }, e))
            }, D.Actions = function(e) {
                var r = e.children;
                return a.createElement(H, {
                    gradient: u.G.Full,
                    $_css: f.W.space.s32
                }, r)
            };
            var H = (0, l.ZP)(v.G.Actions).withConfig({
                displayName: "StatusPopup___StyledPopupActions",
                componentId: "rui__sc-1w2lksq-1"
            })(["padding-top:", ";"], function(e) {
                return e.$_css
            })
        }
    }
]);