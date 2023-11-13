"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2426], {
        53650: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return c
                }
            });
            var r = n(67294),
                a = n(30116),
                i = n(9880),
                l = ["children", "variant"];

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = r.forwardRef(function(e, t) {
                var n = e.children,
                    c = e.variant,
                    u = void 0 === c ? i.V.ACTIONS : c,
                    s = function(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, l);
                return r.Children.toArray(n).length > 0 ? r.createElement(a.x, o({
                    __variants: i.r,
                    variant: u
                }, s, {
                    ref: t
                }), n) : null
            })
        },
        9880: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return f
                },
                r: function() {
                    return m
                }
            });
            var r, a = n(22674);

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var l = {
                    display: "grid",
                    alignItems: "center",
                    gridAutoFlow: "column",
                    gridAutoColumns: "max-content"
                },
                o = i({}, l, {
                    gridColumnGap: a.W.space.s8
                }),
                c = i({}, l, {
                    gridColumnGap: a.W.space.s16
                }),
                u = i({}, l, {
                    paddingY: a.W.space.s8,
                    gridColumnGap: a.W.space.s8
                }),
                s = i({}, l, {
                    gridColumnGap: a.W.space.s24
                }),
                d = i({}, l, {
                    gridColumnGap: a.W.space.s32,
                    gridAutoColumns: "minmax(auto, max-content)"
                }),
                p = i({}, l, {
                    gridColumnGap: a.W.space.s4
                }),
                f = {
                    ACTIONS: "actions",
                    CODE: "code",
                    ATTACHMENTS: "attachments",
                    ICONS: "icons",
                    INFO: "info",
                    SUGGESTIONS: "suggestions",
                    TAGS: "tags"
                },
                m = ((r = {})[f.ACTIONS] = o, r[f.CODE] = o, r[f.ATTACHMENTS] = c, r[f.SUGGESTIONS] = u, r[f.ICONS] = s, r[f.INFO] = d, r[f.TAGS] = p, r)
        },
        48377: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return e1
                }
            });
            var r, a, i, l = n(67294),
                o = n(25394),
                c = n(36017),
                u = n(22674),
                s = n(45919),
                d = n(30116),
                p = n(38628),
                f = n(31346),
                m = n(14141),
                E = n(16678),
                T = n(79500),
                v = n(45151),
                O = n(14571),
                h = n(53650),
                g = n(9880),
                I = n(86e3),
                C = n(26370),
                A = n(939),
                S = ["aria-label", "title"],
                b = ["aria-label", "title"],
                _ = ["children"];

            function N(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }

            function y() {
                return (y = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var M = (0, O.h)(44),
                L = {
                    NAV_BUTTON: "nav-button",
                    TITLE: "title",
                    ACTIONS: "actions"
                },
                w = (0, m.ZP)(d.x).withConfig({
                    displayName: "NavBar__NavBarWrapper",
                    componentId: "rui__sc-1qirrji-0"
                })(E.cq, E.zI, E.K$, E.RG, {
                    display: "grid",
                    alignItems: "center"
                });
            w.defaultProps = {
                height: M,
                textStyle: T.p.PRIMARY
            };
            var B = (0, m.ZP)(d.x).withConfig({
                displayName: "NavBar__NavBarItem",
                componentId: "rui__sc-1qirrji-1"
            })(E.fD, E.zo);
            B.defaultProps = {
                display: "flex"
            };
            var R = l.forwardRef(function(e, t) {
                    return l.createElement(B, {
                        gridArea: L.NAV_BUTTON,
                        justifySelf: "start",
                        pr: u.W.space.s8
                    }, l.createElement(C.h, y({
                        ref: t
                    }, e)))
                }),
                W = l.forwardRef(function(e, t) {
                    var n = e["aria-label"],
                        r = e.title,
                        a = N(e, S),
                        i = (0, v.U)();
                    return l.createElement(R, y({
                        "aria-label": null != n ? n : null != r ? void 0 : i("action.close"),
                        title: r
                    }, a, {
                        useIcon: "Cross",
                        ref: t
                    }))
                }),
                x = l.forwardRef(function(e, t) {
                    var n = e["aria-label"],
                        r = e.title,
                        a = N(e, b),
                        i = (0, v.U)();
                    return l.createElement(R, y({
                        "aria-label": null != n ? n : null != r ? void 0 : i("action.back"),
                        title: r,
                        useIcon: "BackButtonArrow"
                    }, a, {
                        ref: t
                    }))
                }),
                P = function(e) {
                    return l.createElement(w, y({
                        gridTemplateAreas: '"' + L.NAV_BUTTON + " " + L.TITLE + " " + L.ACTIONS + '"',
                        gridTemplateColumns: "1fr minmax(0, auto) 1fr"
                    }, e))
                };
            P.CloseButton = W, P.BackButton = x, P.Title = function(e) {
                var t = e.children,
                    n = N(e, _);
                return l.createElement(B, {
                    maxWidth: "100%",
                    gridArea: L.TITLE,
                    justifySelf: "center"
                }, l.createElement(A.xv, y({
                    use: "div",
                    variant: T.p.PRIMARY
                }, n), l.createElement(I.m, null, t)))
            }, P.Actions = function(e) {
                var t = e.children;
                return l.createElement(B, {
                    gridArea: L.ACTIONS,
                    justifySelf: "end",
                    pl: u.W.space.s8
                }, l.createElement(h.$, {
                    variant: g.V.ICONS
                }, null != t ? t : l.createElement(d.x, {
                    use: "span",
                    role: "presentation",
                    size: 24
                })))
            };
            var j = n(79580),
                U = "avatar",
                k = "action-bar",
                D = (0, m.ZP)(B).withConfig({
                    displayName: "HeaderBaseBar__HeaderBaseBarBase",
                    componentId: "rui__sc-xqc5s2-0"
                })(["padding-top:", ";&:empty{padding-top:unset;}"], u.W.space.s16),
                H = {
                    TITLE: "header-title",
                    SUBTITLE: "header-subtitle",
                    DESCRIPTION: "header-description"
                },
                G = ["color"];

            function z() {
                return (z = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var V = "description",
                Y = function(e) {
                    switch (e) {
                        case j.d.BOTTOM_SHEET:
                            return u.W.space.s16;
                        case j.d.MODAL:
                            return u.W.space.none;
                        default:
                            return u.W.space.s4
                    }
                },
                F = function(e) {
                    switch (e) {
                        case j.d.MAIN:
                        case j.d.ITEM:
                            return u.W.space.s8;
                        default:
                            return
                    }
                };

            function X() {
                return (X = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Z = "subtitle",
                K = function(e) {
                    switch (e) {
                        case j.d.ITEM:
                        case j.d.MAIN:
                            return u.W.space.s8;
                        default:
                            return u.W.space.none
                    }
                },
                q = function(e) {
                    switch (e) {
                        case j.d.ITEM:
                        case j.d.MAIN:
                        case j.d.COMPACT:
                            return T.p.PRIMARY;
                        default:
                            return T.p.CAPTION
                    }
                },
                J = function(e) {
                    switch (e) {
                        case j.d.ITEM:
                        case j.d.MAIN:
                        case j.d.COMPACT:
                            return u.W.color.foreground;
                        default:
                            return u.W.color.greyTone50
                    }
                },
                $ = n(51482),
                Q = ["__accessibleId", "children", "variant"],
                ee = ["hide"];

            function et() {
                return (et = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function en(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }

            function er(e) {
                var t = e.__accessibleId,
                    n = e.children,
                    r = e.variant,
                    a = en(e, Q);
                switch (r) {
                    case j.d.BOTTOM_SHEET:
                        return l.createElement(A.xv, et({
                            use: "div",
                            variant: T.p.H5
                        }, a), l.createElement($.x, {
                            id: t,
                            max: 2
                        }, n));
                    case j.d.MODAL:
                        return l.createElement(A.xv, et({
                            use: "div",
                            variant: T.p.PRIMARY,
                            textAlign: "center"
                        }, a), l.createElement($.x, {
                            id: t,
                            max: 2
                        }, n));
                    case j.d.MAIN:
                    case j.d.ITEM:
                        return l.createElement(A.xv, et({
                            use: "div",
                            variant: T.p.H1,
                            textOverflow: "ellipsis"
                        }, a), l.createElement($.x, {
                            id: t,
                            max: 3
                        }, n));
                    case j.d.COMPACT:
                        return l.createElement(A.xv, et({
                            id: t,
                            use: "div",
                            variant: T.p.H5,
                            textOverflow: "ellipsis"
                        }, a), n)
                }
            }
            var ea = (0, l.forwardRef)(function(e, t) {
                var n = e.hide,
                    r = en(e, ee),
                    a = (0, p.i)();
                return l.createElement(B, {
                    ref: t,
                    gridArea: L.TITLE,
                    justifySelf: a === j.d.MODAL ? "center" : "start",
                    maxWidth: "100%",
                    minWidth: 0,
                    hide: n,
                    "data-rui-part": H.TITLE
                }, l.createElement(er, et({
                    variant: a
                }, r)))
            });

            function ei() {
                return (ei = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var el = '\n  "' + L.TITLE + " " + L.ACTIONS + '"\n  "' + Z + " " + Z + '"\n  "' + V + " " + V + '"\n',
                eo = '\n  "' + L.NAV_BUTTON + " " + L.ACTIONS + '"\n  "' + L.TITLE + " " + U + '"\n  "' + Z + " " + U + '"\n  "' + V + " " + U + '"\n  "' + k + " " + k + '"\n',
                ec = '\n  "' + L.TITLE + " " + L.ACTIONS + '"\n  "' + Z + " " + U + '"\n  "' + V + " " + U + '"\n',
                eu = '\n  "' + L.NAV_BUTTON + " " + L.TITLE + " " + L.ACTIONS + '"\n  "' + Z + " " + Z + " " + U + '"\n  "' + V + " " + V + " " + U + '"\n',
                es = function(e) {
                    var t = e.children;
                    switch ((0, p.i)()) {
                        case j.d.BOTTOM_SHEET:
                            return l.createElement(w, {
                                gridTemplateAreas: el,
                                gridTemplateColumns: "minmax(0, auto) 1fr",
                                gridTemplateRows: "repeat(2, auto)",
                                height: "unset"
                            }, t);
                        case j.d.ITEM:
                            return l.createElement(w, {
                                gridTemplateAreas: eo,
                                gridTemplateRows: "repeat(5, auto)",
                                gridTemplateColumns: "1fr minmax(0, auto)",
                                height: "unset"
                            }, t);
                        case j.d.MAIN:
                            return l.createElement(w, {
                                gridTemplateAreas: ec,
                                gridTemplateRows: "minmax(" + M + ", auto) auto",
                                height: "unset"
                            }, t);
                        case j.d.COMPACT:
                            return l.createElement(w, {
                                gridTemplateAreas: eu,
                                gridTemplateColumns: "minmax(0, auto) 1fr auto",
                                gridTemplateRows: "minmax(2rem, auto) auto",
                                height: "unset"
                            }, t);
                        case j.d.MODAL:
                            return l.createElement(P, null, t)
                    }
                },
                ed = function(e) {
                    var t = e.children,
                        n = (0, p.i)();
                    return n === j.d.BOTTOM_SHEET || n === j.d.MAIN ? null : n === j.d.ITEM ? l.createElement(f.k, {
                        height: M,
                        alignItems: "center"
                    }, t) : l.createElement(l.Fragment, null, t)
                },
                ep = (0, l.forwardRef)(function(e, t) {
                    return l.createElement(ed, null, l.createElement(P.CloseButton, ei({
                        ref: t
                    }, e)))
                }),
                ef = (0, l.forwardRef)(function(e, t) {
                    return l.createElement(ed, null, l.createElement(P.BackButton, ei({
                        ref: t
                    }, e)))
                }),
                em = function(e) {
                    switch (e) {
                        case j.d.MODAL:
                            return u.W.space.s6;
                        case j.d.BOTTOM_SHEET:
                        case j.d.MAIN:
                        case j.d.COMPACT:
                            return u.W.space.s16;
                        default:
                            return u.W.space.s24
                    }
                },
                eE = function(e) {
                    switch (e) {
                        case j.d.MODAL:
                            return u.W.space.s6;
                        case j.d.BOTTOM_SHEET:
                        case j.d.MAIN:
                        case j.d.COMPACT:
                            return u.W.space.s16;
                        default:
                            return u.W.space.none
                    }
                },
                eT = Object.assign((0, l.forwardRef)(function(e, t) {
                    var n = e.children,
                        r = e.variant;
                    return l.createElement(p.f.Provider, {
                        value: r
                    }, l.createElement(d.x, {
                        ref: t,
                        pb: em(r),
                        pt: eE(r)
                    }, l.createElement(es, null, n)))
                }), {
                    CloseButton: ep,
                    BackButton: ef,
                    Actions: function(e) {
                        return (0, p.i)() === j.d.ITEM ? l.createElement(f.k, {
                            height: M,
                            justifyContent: "flex-end"
                        }, l.createElement(P.Actions, e)) : l.createElement(P.Actions, e)
                    },
                    Title: ea,
                    Subtitle: function(e) {
                        var t = (0, p.i)();
                        return t === j.d.MODAL ? null : l.createElement(B, {
                            gridArea: Z,
                            "data-rui-part": H.SUBTITLE
                        }, l.createElement(A.xv, X({
                            mt: K(t),
                            variant: q(t),
                            color: J(t)
                        }, e)))
                    },
                    Description: function(e) {
                        var t, n = e.color,
                            r = void 0 === n ? u.W.color.greyTone50 : n,
                            a = function(e, t) {
                                if (null == e) return {};
                                var n, r, a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a
                            }(e, G),
                            i = (0, p.i)();
                        return l.createElement(B, {
                            gridArea: V,
                            color: r,
                            minWidth: 0,
                            "data-rui-part": H.DESCRIPTION
                        }, l.createElement(A.xv, z({
                            mt: Y(i),
                            variant: T.p.CAPTION,
                            maxWidth: "100%",
                            __css: ((t = {})['[data-rui-part="' + H.TITLE + '"] + [data-rui-part="' + H.DESCRIPTION + '"] &&'] = {
                                mt: F(i)
                            }, t)
                        }, a)))
                    },
                    Avatar: function(e) {
                        var t = e.children,
                            n = e.hide,
                            r = (0, p.i)();
                        return r !== j.d.ITEM && r !== j.d.MAIN && r !== j.d.COMPACT ? null : l.createElement(B, {
                            gridArea: r === j.d.ITEM ? U : L.TITLE,
                            ml: r === j.d.ITEM ? u.W.space.s4 : void 0,
                            maxWidth: "100%",
                            justifySelf: r === j.d.ITEM ? "end" : "start",
                            alignSelf: r === j.d.ITEM ? "start" : "center",
                            hide: n
                        }, t)
                    },
                    Bar: function(e) {
                        var t = e.children;
                        return (0, p.i)() !== j.d.ITEM ? null : l.createElement(D, {
                            gridArea: k,
                            maxWidth: "100%",
                            minWidth: 0
                        }, t)
                    }
                }),
                ev = n(96944),
                eO = n(56607);
            (r = a || (a = {}))[r.TITLE = 0] = "TITLE", r[r.INLINE_TITLE = 1] = "INLINE_TITLE", r[r.NAVIGATION_BUTTON = 2] = "NAVIGATION_BUTTON", r[r.ACTIONS = 3] = "ACTIONS", r[r.DESCRIPTION = 4] = "DESCRIPTION", r[r.STATIC = 5] = "STATIC", r[r.STICKY = 6] = "STICKY", r[r.SUBTITLE = 7] = "SUBTITLE";
            var eh = {
                    AUTO: "auto",
                    MANUAL: "manual"
                },
                eg = {
                    AUTO: "auto",
                    INLINE: "inline",
                    LARGE: "large"
                };

            function eI() {
                var e = (0, l.createContext)(eC());
                return {
                    Provider: function(t) {
                        var n = (0, l.useState)(eC)[0];
                        return (0, l.createElement)(e.Provider, {
                            value: n
                        }, t.children)
                    },
                    Slot: function(t) {
                        var n = (0, l.useContext)(e),
                            r = (0, l.useState)(),
                            a = r[0],
                            i = r[1];
                        eA(function() {
                            return i(n.get(t.name)), n.on(t.name, i)
                        }, [n, t.name]);
                        var o = void 0 !== a;
                        return eA(function() {
                            t.onChange && t.onChange(o)
                        }, [o, t.onChange]), (0, l.createElement)(l.Fragment, null, o ? a : t.children)
                    },
                    Fill: function(t) {
                        var n = (0, l.useContext)(e);
                        return eA(function() {
                            return n.emit(t.name, t.children)
                        }, [n, t.name, t.children]), null
                    }
                }
            }

            function eC() {
                var e = {},
                    t = {};

                function n(n, r) {
                    var a = t[n];
                    a && a.forEach(function(e) {
                        return e(r)
                    }), e[n] = r
                }
                return {
                    emit: function(e, t) {
                        return n(e, t),
                            function() {
                                return n(e)
                            }
                    },
                    get: function(t) {
                        return e[t]
                    },
                    on: function(e, n) {
                        var r = t[e] = t[e] || [];
                        return r.push(n),
                            function() {
                                var e = r.indexOf(n);
                                e > -1 && r.splice(e, 1)
                            }
                    }
                }
            }

            function eA(e, t) {
                "undefined" != typeof window && (0, l.useLayoutEffect)(e, t)
            }(i = eI()).Provider, i.Slot, i.Fill;
            var eS = eI(),
                eb = n(29341),
                e_ = n(80571);

            function eN() {
                return (eN = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ey = (0, m.ZP)(function(e) {
                    var t = (0, eb.qk)();
                    return l.createElement(eS.Fill, {
                        name: a.DESCRIPTION
                    }, l.createElement(eT.Description, eN({
                        id: (0, e_.k)(t)
                    }, e)))
                }).withConfig({
                    displayName: "HeaderDescription",
                    componentId: "rui__sc-jtlzwp-0"
                })([""]),
                eM = (0, l.createContext)({
                    titleRef: null,
                    isCollapsed: !1
                }),
                eL = function() {
                    return (0, l.useContext)(eM)
                },
                ew = function(e) {
                    var t = e.titleRef,
                        n = e.isCollapsed,
                        r = e.children;
                    return l.createElement(eM.Provider, {
                        value: (0, l.useMemo)(function() {
                            return {
                                titleRef: t,
                                isCollapsed: n
                            }
                        }, [t, n])
                    }, r)
                },
                eB = ["behaviour"],
                eR = {
                    REPLACE: "replace",
                    PLACEHOLDER: "placeholder"
                },
                eW = m.ZP.span.withConfig({
                    displayName: "HeaderInlineTitle__HeaderInlineTitlePlaceholder",
                    componentId: "rui__sc-wq2kvz-0"
                })({
                    '[data-collapsed="false"]& + *, [data-collapsed="true"]&': {
                        display: "none"
                    }
                }),
                ex = m.ZP.span.withConfig({
                    displayName: "HeaderInlineTitle__HeaderInlineTitleReplace",
                    componentId: "rui__sc-wq2kvz-1"
                })({
                    "& + *": {
                        display: "none"
                    }
                }),
                eP = n(86900),
                ej = ["onClick"],
                eU = ["onClick"];

            function ek() {
                return (ek = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function eD(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }

            function eH(e) {
                var t = (0, eP.p)();
                return function(n) {
                    e ? e(n) : null == t || t(!1)
                }
            }
            var eG = l.forwardRef(function(e, t) {
                    var n = e.onClick,
                        r = eD(e, ej),
                        i = eH(n);
                    return l.createElement(eS.Fill, {
                        name: a.NAVIGATION_BUTTON
                    }, l.createElement(eT.CloseButton, ek({
                        ref: t,
                        onClick: i
                    }, r)))
                }),
                ez = l.forwardRef(function(e, t) {
                    var n = e.onClick,
                        r = eD(e, eU),
                        i = eH(n);
                    return l.createElement(eS.Fill, {
                        name: a.NAVIGATION_BUTTON
                    }, l.createElement(eT.BackButton, ek({
                        ref: t,
                        onClick: i
                    }, r)))
                });

            function eV() {
                return (eV = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function eY() {
                return (eY = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eF = (0, l.forwardRef)(function(e, t) {
                    return l.createElement(eS.Fill, {
                        name: a.STICKY
                    }, l.createElement(d.x, eY({
                        ref: t,
                        pb: u.W.space.s16
                    }, e)))
                }),
                eX = n(31234),
                eZ = (0, m.ZP)(function(e) {
                    return l.createElement(eS.Fill, {
                        name: a.SUBTITLE
                    }, l.createElement(eT.Subtitle, e))
                }).withConfig({
                    displayName: "HeaderSubtitle",
                    componentId: "rui__sc-1g5twdg-0"
                })([""]);

            function eK() {
                return (eK = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eq = n(43411),
                eJ = function(e, t, n) {
                    var r = (0, l.useState)(!1),
                        a = r[0],
                        i = r[1];
                    return (0, l.useEffect)(function() {
                        var r = t.current;
                        if (r && e) {
                            var a = (0, s.sK)((0, s.zr)(r, r.ownerDocument)),
                                l = function() {
                                    n.current && (0, s.IM)(n.current) ? i(n.current.getBoundingClientRect().bottom < r.getBoundingClientRect().bottom) : i(!1)
                                };
                            return l(), a.addEventListener("scroll", l, {
                                    passive: !0
                                }),
                                function() {
                                    a.removeEventListener("scroll", l), i(!1)
                                }
                        }
                    }, [e, t, n]), a
                },
                e$ = ["children", "scrollMode", "displayMode", "displayCollapsedDescription", "variant", "onHeightChange"];

            function eQ() {
                return (eQ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var e0 = function() {
                    return l.createElement(B, {
                        gridArea: L.NAV_BUTTON,
                        justifySelf: "start",
                        pr: u.W.space.s8
                    }, l.createElement(d.x, {
                        use: "span",
                        role: "presentation",
                        size: 24
                    }))
                },
                e1 = Object.assign((0, l.forwardRef)(function(e, t) {
                    var n, r = e.children,
                        i = e.scrollMode,
                        d = void 0 === i ? eh.AUTO : i,
                        f = e.displayMode,
                        m = void 0 === f ? eg.AUTO : f,
                        E = e.displayCollapsedDescription,
                        T = void 0 !== E && E,
                        v = e.variant,
                        O = e.onHeightChange,
                        h = function(e, t) {
                            if (null == e) return {};
                            var n, r, a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a
                        }(e, e$),
                        g = (0, l.useContext)(p.f),
                        I = null != (n = null != v ? v : g) ? n : j.d.ITEM,
                        C = function(e, t) {
                            var n = (0, s.z3)(o.G.HEADER_BACKGROUND_COLOR, "inherit");
                            switch (e) {
                                case eh.MANUAL:
                                    return eQ({
                                        bg: n
                                    }, t);
                                case eh.AUTO:
                                default:
                                    return eQ({
                                        top: 0,
                                        zIndex: 1,
                                        mx: u.W.space.n16,
                                        px: u.W.space.s16,
                                        bg: n
                                    }, t)
                            }
                        }(d, h),
                        A = (0, l.useRef)(null),
                        S = (0, l.useRef)(null),
                        b = (0, l.useRef)(null),
                        _ = (0, l.useRef)(null),
                        N = eJ(d === eh.AUTO, A, b),
                        y = (0, l.useState)(0),
                        M = y[0],
                        L = y[1],
                        w = (0, l.useState)(0),
                        B = w[0],
                        R = w[1];
                    if ((0, l.useEffect)(function() {
                            var e = A.current,
                                t = S.current;
                            if (e && t) {
                                var n = (0, s.Xe)(e);
                                if (n.ResizeObserver) {
                                    var r = new n.ResizeObserver(function(t) {
                                        var r = 0;
                                        t.forEach(function(t) {
                                            if (t.target instanceof n.HTMLElement) {
                                                var a = t.target.getBoundingClientRect();
                                                r += a.height, t.target === e && L(a.height)
                                            }
                                        }), R(r)
                                    });
                                    return r.observe(e), r.observe(t),
                                        function() {
                                            r.disconnect(), R(0)
                                        }
                                }
                            }
                        }, [O, A, S]), (0, l.useEffect)(function() {
                            O && O(B)
                        }, [O, B]), I === j.d.BOTTOM_SHEET || I === j.d.MODAL || I === j.d.MAIN || I === j.d.COMPACT) return l.createElement(eS.Provider, null, l.createElement(eq.M, eQ({
                        ref: (0, s.ZM)(A, t)
                    }, C), l.createElement(eT, {
                        variant: I
                    }, l.createElement(eS.Slot, {
                        name: a.NAVIGATION_BUTTON
                    }), l.createElement(eS.Slot, {
                        name: a.ACTIONS
                    }), l.createElement(eS.Slot, {
                        name: a.TITLE
                    }), l.createElement(eS.Slot, {
                        name: a.SUBTITLE
                    }), l.createElement(eS.Slot, {
                        name: a.DESCRIPTION
                    }), r)), l.createElement(eS.Slot, {
                        name: a.STATIC
                    }), l.createElement(eX.J, {
                        ref: S,
                        style: {
                            top: M
                        },
                        "data-nocollapse": !0
                    }, l.createElement(eS.Slot, {
                        name: a.STICKY
                    })));
                    switch (m) {
                        case eg.LARGE:
                            return l.createElement(eS.Provider, null, l.createElement(eq.M, eQ({
                                ref: (0, s.ZM)(A, t)
                            }, C), l.createElement(eT, {
                                variant: j.d.MODAL
                            }, l.createElement(eS.Slot, {
                                name: a.NAVIGATION_BUTTON
                            }), l.createElement(eS.Slot, {
                                name: a.ACTIONS
                            }))), l.createElement(eT, {
                                variant: I
                            }, l.createElement(eS.Slot, {
                                name: a.TITLE
                            }), l.createElement(eS.Slot, {
                                name: a.SUBTITLE
                            }), l.createElement(eS.Slot, {
                                name: a.DESCRIPTION
                            }), r), l.createElement(eS.Slot, {
                                name: a.STATIC
                            }), l.createElement(eX.J, {
                                ref: S
                            }, l.createElement(eS.Slot, {
                                name: a.STICKY
                            })));
                        case eg.INLINE:
                            return l.createElement(eS.Provider, null, l.createElement(eq.M, eQ({
                                ref: (0, s.ZM)(A, t),
                                style: {
                                    paddingTop: 0
                                },
                                mb: u.W.space.s8
                            }, C), l.createElement(eT, {
                                variant: j.d.MODAL
                            }, l.createElement(eS.Slot, {
                                name: a.NAVIGATION_BUTTON
                            }, l.createElement(e0, null)), l.createElement(eS.Slot, {
                                name: a.ACTIONS
                            }, l.createElement(eT.Actions, null)), T ? l.createElement(eO.g, {
                                align: "center"
                            }, l.createElement(eS.Slot, {
                                name: a.TITLE
                            }), l.createElement(eS.Slot, {
                                name: a.SUBTITLE
                            }), l.createElement(eS.Slot, {
                                name: a.DESCRIPTION
                            })) : l.createElement(eS.Slot, {
                                name: a.TITLE
                            }), r), l.createElement(eS.Slot, {
                                name: a.STATIC
                            }), l.createElement(eX.J, {
                                ref: S
                            }, l.createElement(eS.Slot, {
                                name: a.STICKY
                            }))));
                        case eg.AUTO:
                            return l.createElement(eS.Provider, null, l.createElement(ew, {
                                titleRef: b,
                                isCollapsed: N
                            }, l.createElement(eq.M, eQ({
                                ref: (0, s.ZM)(A, t),
                                style: {
                                    paddingTop: 0
                                }
                            }, C), l.createElement(eT, {
                                variant: j.d.MODAL
                            }, l.createElement(eS.Slot, {
                                name: a.NAVIGATION_BUTTON
                            }, l.createElement(e0, null)), l.createElement(eS.Slot, {
                                name: a.ACTIONS
                            }, l.createElement(eT.Actions, null)), l.createElement(eS.Slot, {
                                name: a.INLINE_TITLE
                            }), l.createElement(ev.n, {
                                nodeRef: _,
                                in: N,
                                duration: c.nL.XS,
                                offsetY: -12
                            }, T ? l.createElement(eO.g, {
                                ref: _,
                                align: "center",
                                "aria-hidden": !0
                            }, l.createElement(eS.Slot, {
                                name: a.TITLE
                            }), l.createElement(eS.Slot, {
                                name: a.SUBTITLE
                            }), l.createElement(eS.Slot, {
                                name: a.DESCRIPTION
                            })) : l.createElement("span", {
                                ref: _,
                                "aria-hidden": !0
                            }, l.createElement(eS.Slot, {
                                name: a.TITLE
                            }))))), l.createElement(eT, {
                                variant: I
                            }, l.createElement(eS.Slot, {
                                name: a.TITLE
                            }), l.createElement(eS.Slot, {
                                name: a.SUBTITLE
                            }), l.createElement(eS.Slot, {
                                name: a.DESCRIPTION
                            }), r), l.createElement(eS.Slot, {
                                name: a.STATIC
                            }), l.createElement(eX.J, {
                                ref: S
                            }, l.createElement(eS.Slot, {
                                name: a.STICKY
                            }))));
                        default:
                            return null
                    }
                }), {
                    Title: function(e) {
                        var t = (0, eb.qk)(),
                            n = eL().titleRef;
                        return l.createElement(eS.Fill, {
                            name: a.TITLE
                        }, l.createElement(eT.Title, eK({
                            ref: function(e) {
                                e && n && (n.current && (0, s.IM)(n.current) || (n.current = e))
                            },
                            __accessibleId: (0, e_.u)(t)
                        }, e)))
                    },
                    InlineTitle: function(e) {
                        var t = e.behaviour,
                            n = void 0 === t ? eR.REPLACE : t,
                            r = function(e, t) {
                                if (null == e) return {};
                                var n, r, a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a
                            }(e, eB),
                            i = eL().isCollapsed,
                            o = (0, l.useRef)(null),
                            u = "placeholder" === n;
                        return l.createElement(eS.Fill, {
                            name: a.INLINE_TITLE
                        }, l.createElement(ev.n, {
                            nodeRef: o,
                            appear: !1,
                            in: u ? !i : i,
                            duration: c.nL.XS,
                            offsetY: u ? 12 : -12
                        }, l.createElement(u ? eW : ex, {
                            ref: o,
                            "data-collapsed": i
                        }, l.createElement(eT.Title, r))))
                    },
                    CloseButton: eG,
                    BackButton: ez,
                    Actions: function(e) {
                        return l.createElement(eS.Fill, {
                            name: a.ACTIONS
                        }, l.createElement(eT.Actions, e))
                    },
                    Subtitle: eZ,
                    Description: ey,
                    Avatar: eT.Avatar,
                    Bar: eT.Bar,
                    Sticky: eF,
                    Static: function(e) {
                        return l.createElement(eS.Fill, {
                            name: a.STATIC
                        }, l.createElement(d.x, eV({
                            pb: u.W.space.s16
                        }, e)))
                    }
                })
        },
        80571: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return a
                },
                u: function() {
                    return r
                }
            });
            var r = function(e) {
                    return e ? "header-label-" + e : void 0
                },
                a = function(e) {
                    return e ? "header-desc-" + e : void 0
                }
        },
        38628: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return a
                },
                i: function() {
                    return i
                }
            });
            var r = n(67294),
                a = (0, r.createContext)(null);

            function i() {
                var e = (0, r.useContext)(a);
                if (null === e) throw Error("You can access `HeaderBaseContext` only in components inside `HeaderBase` component");
                return e
            }
        },
        79580: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return r
                }
            });
            var r = {
                ITEM: "item",
                MAIN: "main",
                MODAL: "modal",
                COMPACT: "compact",
                BOTTOM_SHEET: "bottom-sheet"
            }
        },
        51482: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return T
                }
            });
            var r = n(67294),
                a = n(14141),
                i = n(554),
                l = n(1377),
                o = n(11859),
                c = n(53889),
                u = n(10903),
                s = ["children", "tooltip"],
                d = ["children", "tooltip"];

            function p() {
                return (p = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }
            var m = a.ZP.span.withConfig({
                displayName: "LineClamp__LineClampBase",
                componentId: "rui__sc-1asyw6f-0"
            })((0, c.d)("max"));

            function E(e) {
                var t = e.children,
                    n = e.tooltip,
                    a = f(e, s),
                    c = (0, r.useRef)(null),
                    d = (0, l.l)(),
                    E = (0, r.useState)(!1),
                    T = E[0],
                    v = E[1],
                    O = (0, r.useState)(0),
                    h = O[0],
                    g = O[1];
                return (0, o.d)(c, n === i.l.AUTO, function(e, t) {
                    v(e.height < t.height), g(e.width)
                }), r.createElement(r.Fragment, null, r.createElement(m, d.getAnchorProps(p({
                    ref: c
                }, a)), t), r.createElement(u.u, d.getTargetProps({
                    open: n === i.l.ALWAYS || T,
                    placement: "bottom-start",
                    maxWidth: Math.max(h, 320)
                }), t))
            }

            function T(e) {
                var t = e.children,
                    n = e.tooltip,
                    a = void 0 === n ? i.l.NEVER : n,
                    l = f(e, d);
                return a === i.l.ALWAYS || a === i.l.AUTO ? r.createElement(E, p({
                    tooltip: a
                }, l), t) : r.createElement(m, l, t)
            }
        },
        51303: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return h
                }
            });
            var r = n(67294),
                a = n(45919),
                i = n(29341),
                l = n(80571),
                o = n(49133),
                c = n(21759),
                u = n(33154),
                s = n(94166),
                d = n(96944),
                p = n(67035),
                f = n(22674),
                m = ["children"];

            function E() {
                return (E = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var T = (0, r.createContext)(null),
                v = n(24397),
                O = function(e) {
                    return e ? "popup-overlay-button-" + e : void 0
                };

            function h(e) {
                var t = e.children,
                    n = e.defaultOpen,
                    p = void 0 !== n && n,
                    f = e.open,
                    m = e.labelButtonClose,
                    E = e.shouldKeepMaxHeight,
                    h = void 0 !== E && E,
                    g = e.variant,
                    I = void 0 === g ? v.wT.MODAL_VIEW : g,
                    C = e.size,
                    A = e.scrollRef,
                    S = e.onClose,
                    b = void 0 === S ? a.ZT : S,
                    _ = e.onExited,
                    N = e.onScroll,
                    y = e.preventUserClose,
                    M = void 0 !== y && y,
                    L = e.focusTrap,
                    w = void 0 === L || L,
                    B = e.scrollLock,
                    R = void 0 === B || B,
                    W = e.closeOnEsc,
                    x = void 0 === W || W,
                    P = e.closeOnOverlayClick,
                    j = void 0 === P || P,
                    U = e["aria-label"],
                    k = (0, r.useRef)(null),
                    D = (0, r.useState)(!1),
                    H = D[0],
                    G = D[1],
                    z = (0, r.useCallback)(function(e) {
                        e || b()
                    }, [b]);
                return r.createElement(T.Provider, {
                    value: I
                }, r.createElement(i.z8, null, function(e) {
                    var n = e.id;
                    return r.createElement(s.Z, {
                        defaultState: p,
                        state: f,
                        onChange: z
                    }, function(e) {
                        var i = e.state,
                            s = e.toggle;
                        return r.createElement(u.f, {
                            elevated: !0,
                            attributes: "child"
                        }, r.createElement(o.u, {
                            open: i,
                            onClose: function() {
                                return s(!1)
                            },
                            __variants: v.ol,
                            variant: I,
                            onExited: _,
                            focusTrap: w && H,
                            scrollLock: R,
                            closeOnEsc: !M && x && H,
                            closeOnOverlayClick: !M && j,
                            __layerFilter: !0
                        }, r.createElement(d.n, {
                            nodeRef: k,
                            in: i,
                            offsetY: -100,
                            onEntered: function() {
                                return G(!0)
                            },
                            onExited: function() {
                                return G(!1)
                            }
                        }, r.createElement(c.X, {
                            ref: k,
                            role: "dialog",
                            "aria-modal": !0,
                            "aria-labelledby": (0, l.u)(n),
                            "aria-describedby": (0, l.k)(n),
                            "aria-label": U,
                            "aria-owns": O(n),
                            height: h ? "100%" : I === v.wT.BOTTOM_SHEET || I === v.wT.RESULT ? "auto" : {
                                all: "100%",
                                __popup: "auto"
                            },
                            "data-size": C
                        }, r.createElement(c.X.Content, {
                            ref: A,
                            onScroll: N
                        }, (0, a.mf)(t) ? t({
                            isEntered: H,
                            open: i,
                            toggle: s
                        }) : t))), !M && j && r.createElement(o.u.CloseButton, {
                            id: O(n),
                            "aria-label": m,
                            onClick: function() {
                                return s(!1)
                            },
                            hide: "*-md"
                        })))
                    })
                }))
            }
            h.Actions = function(e) {
                var t = e.children,
                    n = function(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, m);
                return r.createElement(c.X.Actions, E({
                    px: {
                        all: f.W.space.s16,
                        __popup: f.W.space.s24
                    },
                    mx: {
                        all: f.W.space.n16,
                        __popup: f.W.space.n24
                    },
                    gradient: p.G.Full
                }, n), t)
            }
        },
        24397: function(e, t, n) {
            n.d(t, {
                ol: function() {
                    return R
                },
                wT: function() {
                    return A
                }
            });
            var r, a, i, l, o, c, u, s, d, p, f, m = n(25394),
                E = n(67035),
                T = n(22674),
                v = n(45919),
                O = n(14571),
                h = n(49133),
                g = n(21759),
                I = n(11317);

            function C() {
                return (C = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var A = {
                    MODAL_VIEW: "modal-view",
                    BOTTOM_SHEET: "bottom-sheet",
                    RESULT: "result"
                },
                S = {
                    backgroundColor: T.W.color.groupedBackground,
                    color: T.W.color.foreground,
                    borderRadius: (0, v.bp)({
                        all: (0, v.z3)(m.G.RADIUS_POPUP_TOP),
                        __popup: T.W.radius.popup
                    }),
                    paddingX: (0, v.bp)({
                        all: T.W.space.s16,
                        __popup: T.W.space.s24
                    }),
                    paddingY: (0, v.bp)({
                        all: T.W.space.s16,
                        __popup: T.W.space.s24
                    }),
                    overflowX: "hidden"
                },
                b = ((r = {
                    marginX: "auto",
                    marginTop: "auto",
                    marginBottom: (0, v.bp)({
                        all: T.W.space.none,
                        __popup: "auto"
                    }),
                    width: "100%",
                    maxWidth: (0, v.bp)({
                        __popup: (0, O.h)(400)
                    }),
                    maxHeight: (0, v.bp)({
                        __popup: (0, O.h)(640)
                    })
                })[m.G.HEADER_BACKGROUND_COLOR] = T.W.color.groupedBackground, r[g.X.Content] = S, r),
                _ = C({}, b, ((i = {
                    minHeight: (0, v.bp)({
                        __popup: "min(37.5rem, 100%)"
                    })
                })[g.X.Content] = C({}, S, {
                    borderRadius: (0, v.bp)({
                        all: (0, v.z3)(m.G.RADIUS_POPUP_FULL_SCREEN),
                        __popup: T.W.radius.popup
                    })
                }), i["@media " + T.b.media.popup] = {
                    "&[data-size]": ((a = {
                        maxWidth: "calc(100vw - " + T.W.space.s64 + ")",
                        minHeight: "unset",
                        maxHeight: "calc(" + (0, O.vh)(100) + " - " + T.W.space.s64 + ")"
                    })[I._] = {
                        paddingX: "calc((100% - " + (0, O.h)(400) + ") / 2 + " + T.W.space.s48 + ")",
                        backgroundImage: (0, E.i)(E.G.High)
                    }, a),
                    '&[data-size="sm"]': {
                        width: (0, O.h)(400)
                    },
                    '&[data-size="md"]': {
                        width: (0, O.h)(768)
                    },
                    '&[data-size="lg"]': {
                        width: (0, O.h)(1152)
                    }
                }, i)),
                N = C({}, b, {
                    overflowY: "hidden"
                }),
                y = C({}, N, ((o = {})[g.X.Content] = C({}, S, ((l = {
                    paddingTop: (0, v.bp)({
                        all: T.W.space.s32,
                        __popup: T.W.space.s32
                    }),
                    paddingLeft: T.W.space.s24,
                    paddingRight: T.W.space.s24,
                    paddingBottom: T.W.space.s24,
                    borderRadius: (0, v.z3)(m.G.RADIUS_STATUS_POPUP),
                    backgroundColor: T.W.color.widgetBackground
                })[m.G.GRADIENT_CHANNEL] = T.W.colorChannel.widgetBackground, l)), o)),
                M = C(((c = {
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: (0, v.bp)({
                        all: T.W.space.s8,
                        __popup: T.W.space.s32
                    }),
                    paddingBottom: (0, v.bp)({
                        all: T.W.space.none,
                        __popup: T.W.space.s32
                    })
                })[g.X] = _, c[h.u.CloseButton + ":not(:focus)"] = {
                    opacity: 0,
                    transition: "opacity 0.3s"
                }, c), ((u = {})["&:hover " + g.X + ":not(:hover) ~ " + h.u.CloseButton] = {
                    opacity: 1
                }, u), ((s = {})["@media " + T.b.media.lowHeight] = {
                    paddingY: (0, v.bp)({
                        __popup: T.W.space.s16
                    })
                }, s["&[data-is-tail-layer='true'] > " + g.X + " > " + g.X.Content] = {
                    borderRadius: T.W.radius.popup
                }, s)),
                L = C({}, M),
                w = C({}, M, ((d = {
                    paddingTop: (0, v.bp)({
                        all: "min(" + (0, O.vh)(40) + ", 3rem)",
                        __popup: T.W.space.s32
                    })
                })[g.X] = N, d)),
                B = C({}, M, ((p = {
                    paddingBottom: T.W.space.s24,
                    paddingX: T.W.space.s16
                })[g.X] = y, p)),
                R = ((f = {})[A.MODAL_VIEW] = L, f[A.BOTTOM_SHEET] = w, f[A.RESULT] = B, f)
        }
    }
]);