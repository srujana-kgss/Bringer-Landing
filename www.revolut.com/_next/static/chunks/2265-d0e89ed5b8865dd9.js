"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2265], {
        71233: function(e, n, r) {
            r.d(n, {
                Kk: function() {
                    return R
                },
                QD: function() {
                    return I
                }
            });
            var t, a, i, o, l, s, d, c, p, u, g, h, E, _ = r(14141),
                m = r(16678),
                f = r(64268),
                v = r(79500),
                b = r(25394),
                W = r(30012),
                T = r(7856),
                A = r(47574),
                y = r(22674),
                L = r(76335),
                w = r(45919),
                O = r(11261),
                C = r(86e3),
                S = r(19550),
                I = {
                    PRIMARY: "primary",
                    ACCENT: "accent",
                    NEGATIVE: "negative",
                    BLACK: "black",
                    WHITE: "white",
                    PRIMARY_ON_BLUE: "primary-on-blue",
                    ACCENT_ON_BLUE: "accent-on-blue"
                },
                R = (0, _.ZP)(O._).attrs(function(e) {
                    return {
                        contentWrapper: e.iconOnly ? S.T : C.m
                    }
                }).withConfig({
                    displayName: "ActionButton",
                    componentId: "rui__sc-a0usr2-0"
                })(["", " ", " ", " ", " ", " ", " ", " ", ""], (0, T.b)({
                    prop: "size",
                    scale: f.$.BUTTON_SIZE
                }), (0, T.b)({
                    scale: f.$.BUTTON
                }), (0, w.Ou)(v.p.BUTTON), m.Dh, m.bf, m.kk, (0, A.N)({
                    right: -2,
                    top: -2
                }), m.bU({
                    variants: ((E = {})[I.PRIMARY] = {
                        variant: "buttonStyles.secondary"
                    }, E[I.ACCENT] = {
                        variant: "buttonStyles.primary"
                    }, E[I.NEGATIVE] = {
                        variant: "buttonStyles.negative"
                    }, E[I.BLACK] = {
                        variant: "buttonStyles.black",
                        color: y.W.color.widgetBackground,
                        backgroundColor: y.W.color.foreground,
                        "&:hover": ((t = {})[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.widgetBackground, .05), t),
                        "&:active": ((a = {})[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.widgetBackground, .08), a),
                        "&:disabled, &[aria-disabled=true]": ((i = {})[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.widgetBackground, .8), i.backgroundColor = y.W.color.foreground, i.color = y.W.color.widgetBackground, i)
                    }, E[I.WHITE] = {
                        variant: "buttonStyles.white",
                        color: y.W.color.foreground,
                        backgroundColor: y.W.color.widgetBackground,
                        "&:hover": ((o = {})[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.foreground, .02), o),
                        "&:active": ((l = {})[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.foreground, .03), l),
                        "&:disabled, &[aria-disabled=true]": {
                            color: (0, L.O)(y.W.colorChannel.foreground, .5)
                        }
                    }, E[I.PRIMARY_ON_BLUE] = ((p = {
                        variant: "buttonStyles.primary"
                    })[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.black, .2), p.color = y.W.color.white, p.backgroundColor = y.W.color.blue, p["&:hover"] = ((s = {})[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.black, .28), s), p["&:active"] = ((d = {})[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.black, .35), d), p["&:disabled, &[aria-disabled=true]"] = ((c = {
                        color: y.W.color.white_30
                    })[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.black, .2), c), p), E[I.ACCENT_ON_BLUE] = {
                        variant: "buttonStyles.primary",
                        color: y.W.color.blue,
                        backgroundColor: y.W.color.actionBlue,
                        "&:hover": ((u = {})[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.black, .03), u),
                        "&:active": ((g = {})[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)(y.W.colorChannel.black, .06), g),
                        "&:disabled, &[aria-disabled=true]": ((h = {
                            color: y.W.color.blue_30
                        })[b.G.ELEMENT_STATE_OVERLAY] = (0, L.O)((0, w.z3)(b.G.CHANNEL_GREY_2), .4), h)
                    }, E)
                }));
            R.defaultProps = {
                variant: I.PRIMARY,
                size: W.N.SM,
                disabled: !1
            }
        },
        20010: function(e, n, r) {
            r.d(n, {
                z: function() {
                    return v
                }
            });
            var t = r(14141),
                a = r(16678),
                i = r(64268),
                o = r(84489),
                l = r(30012),
                s = r(79500),
                d = r(7856),
                c = r(25394),
                p = r(45919),
                u = [o.W.DEFAULT, o.W.PRIMARY, o.W.BLACK, o.W.WHITE],
                g = r(27634),
                h = r(82566),
                E = r(47574),
                _ = r(63537),
                m = r(11261),
                f = r(86e3),
                v = (0, t.ZP)(m._).attrs(function(e) {
                    return null != e.children || null != e.width ? {} : void 0 === e.use || e.use === _.p ? {
                        width: "auto"
                    } : {
                        width: "max-content",
                        maxWidth: "100%"
                    }
                }).withConfig({
                    displayName: "Button",
                    componentId: "rui__sc-1gvtpv4-0"
                })(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], (0, d.b)({
                    prop: "size",
                    scale: i.$.BUTTON_SIZE
                }), (0, d.b)({
                    scale: i.$.BUTTON
                }), function(e) {
                    var n = e.disabled,
                        r = e.elevated,
                        a = e.variant,
                        i = void 0 === a ? o.W.DEFAULT : a;
                    return !n && r && u.includes(i) ? (0, t.iv)(["box-shadow:", " 0 0.1875rem 0.5rem 0;&:active,&[aria-disabled='true']{box-shadow:none;}"], (0, p.z3)(c.G.BUTTON_SHADOW_COLOR)) : null
                }, g.C, a.yd, h.q, a.$_, a.Dh, a.Cb, a.bf, a.kk, (0, E.N)({
                    right: -2,
                    top: -2
                }));
            v.defaultProps = {
                contentWrapper: f.m,
                variant: o.W.DEFAULT,
                size: l.N.MD,
                textStyle: s.p.BUTTON,
                textAlign: "center",
                disabled: !1
            }
        },
        11261: function(e, n, r) {
            r.d(n, {
                _: function() {
                    return O
                }
            });
            var t, a = r(67294),
                i = r(14141),
                o = r(41530),
                l = r(25394),
                s = r(84489),
                d = r(45151),
                c = r(63779),
                p = r(5367),
                u = r(16678),
                g = r(22674),
                h = r(45919),
                E = r(30116),
                _ = r(63537),
                m = r(86e3),
                f = r(6763),
                v = r(48986),
                b = r(19550),
                W = ["size", "pending", "labelPending", "children", "useIcon", "useEndIcon", "variant", "contentWrapper"];

            function T() {
                return (T = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var A = i.ZP.span.withConfig({
                    displayName: "ButtonLayout__IconWrapper",
                    componentId: "rui__sc-15pyc45-0"
                })(["", " display:inline-flex;align-items:center;::before{content:'​';}"], u.Dh),
                y = (0, i.ZP)(v.$).withConfig({
                    displayName: "ButtonLayout__StyledSpinner",
                    componentId: "rui__sc-15pyc45-1"
                })(["position:absolute;"]),
                L = ((t = {})[o.q.XS] = 16, t[o.q.SM] = 16, t[o.q.MD] = 24, t),
                w = function(e) {
                    switch (e) {
                        case o.q.XS:
                            return (0, h.z3)(l.G.SIZE_BUTTON_XS);
                        case o.q.SM:
                            return (0, h.z3)(l.G.SIZE_BUTTON_SM);
                        default:
                            return (0, h.z3)(l.G.SIZE_BUTTON_MD)
                    }
                },
                O = (0, a.forwardRef)(function(e, n) {
                    var r, t = e.size,
                        l = void 0 === t ? o.q.MD : t,
                        u = e.pending,
                        h = void 0 !== u && u,
                        _ = e.labelPending,
                        v = e.children,
                        O = e.useIcon,
                        S = e.useEndIcon,
                        I = e.variant,
                        R = e.contentWrapper,
                        N = void 0 === R ? m.m : R,
                        x = function(e, n) {
                            if (null == e) return {};
                            var r, t, a = {},
                                i = Object.keys(e);
                            for (t = 0; t < i.length; t++) r = i[t], n.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a
                        }(e, W),
                        k = (0, d.U)(),
                        G = (0, c.h)().revolut9,
                        M = I === s.W.BAR ? g.W.space.s4 : g.W.space.s8,
                        P = I === s.W.BAR ? 16 : L[l],
                        B = N !== b.T && (Boolean(v) || "number" == typeof v),
                        D = I === s.W.BAR && B && !h,
                        U = G && void 0 !== I && !B && (l === o.q.SM || l === o.q.XS),
                        Z = (0, f.i)(O, P),
                        V = (0, f.i)(S, P),
                        Y = (0, p.h)(N, a.Fragment);
                    return a.createElement(C, T({
                        ref: n,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "aria-label": h ? null != _ ? _ : k("label.pending-state") : void 0
                    }, x, {
                        $_css: (0, i.iv)(((r = {
                            position: "relative",
                            "&&": {
                                width: U ? w(l) : void 0
                            }
                        })["& > *:not(" + y + ")"] = h ? {
                            opacity: 0
                        } : void 0, r))
                    }), D && !Z && a.createElement(E.x, {
                        use: "span",
                        ml: g.W.space.s4
                    }), Z && a.createElement(A, {
                        mr: B ? M : g.W.space.none
                    }, Z), h && a.createElement(y, {
                        size: P,
                        minWidth: P
                    }), a.createElement(Y, null, v), D && !V && a.createElement(E.x, {
                        use: "span",
                        mr: g.W.space.s4
                    }), V && a.createElement(A, {
                        ml: B ? M : g.W.space.none
                    }, V))
                }),
                C = (0, i.ZP)(_.X).withConfig({
                    displayName: "ButtonLayout___StyledButtonBase",
                    componentId: "rui__sc-15pyc45-2"
                })(["", ""], function(e) {
                    return e.$_css
                })
        },
        32265: function(e, n, r) {
            r.d(n, {
                d$: function() {
                    return ea
                },
                kr: function() {
                    return es
                },
                _P: function() {
                    return eo
                },
                _E: function() {
                    return el
                },
                Ox: function() {
                    return ei
                }
            });
            var t, a, i, o, l, s, d, c, p, u, g, h, E, _, m, f, v, b, W, T, A = r(14141),
                y = r(22674),
                L = r(14571),
                w = r(30116),
                O = r(31346),
                C = r(72256),
                S = r(7572),
                I = r(37947),
                R = r(16678),
                N = r(79500),
                x = r(25394),
                k = r(64268),
                G = r(56672),
                M = r(71233),
                P = r(20010),
                B = r(63537),
                D = r(28193),
                U = r(60260),
                Z = r(45919),
                V = {
                    LARGE: "large",
                    SMALL: "small",
                    EXTRA_SMALL: "extra-small",
                    WIDGET: "widget",
                    VOUCHER: "voucher",
                    VOUCHER_SMALL: "voucher-small"
                };
            (t = i || (i = {}))[t.FOOTER = 0] = "FOOTER", t[t.ACTION = 1] = "ACTION";
            var Y = {
                    AVATAR: "avatar",
                    ACTION: "action"
                },
                j = ((a = {})[V.LARGE] = {
                    aspectRatio: 343 / 284,
                    minWidth: (0, Z.bp)({
                        all: (0, L.h)(288),
                        sm: (0, L.h)(312)
                    }),
                    height: (0, L.h)(284)
                }, a[V.SMALL] = {
                    aspectRatio: 168 / 180,
                    minWidth: "auto",
                    height: (0, L.h)(180)
                }, a[V.EXTRA_SMALL] = {
                    aspectRatio: 109 / 110,
                    minWidth: "auto",
                    height: (0, L.h)(110)
                }, a[V.WIDGET] = {
                    aspectRatio: 168 / 180,
                    minWidth: "auto",
                    height: (0, L.h)(180)
                }, a[V.VOUCHER] = {
                    aspectRatio: 343 / 164,
                    minWidth: (0, Z.bp)({
                        all: (0, L.h)(288),
                        md: (0, L.h)(312)
                    }),
                    height: (0, L.h)(164)
                }, a[V.VOUCHER_SMALL] = {
                    aspectRatio: 168 / 108,
                    minWidth: "auto",
                    height: (0, L.h)(108)
                }, a);
            r(67294);
            var F = (0, A.ZP)(w.x).withConfig({
                    displayName: "TileAction__TileActionBase",
                    componentId: "rui__sc-116lpxp-0"
                })(["", " z-index:1;padding:", ";"], R.Oh, y.W.space.s24),
                z = r(53889),
                H = r(939),
                X = (0, A.ZP)(H.xv).withConfig({
                    displayName: "TileDescription__TileDescriptionBase",
                    componentId: "rui__sc-199x26w-0"
                })((0, Z.Ou)(N.p.SMALL), (0, z.d)("lineClamp"), {
                    alignSelf: "end",
                    gridColumn: "1 / end",
                    order: 4
                }),
                q = (0, A.ZP)(w.x).withConfig({
                    displayName: "TileFooter__TileFooterBase",
                    componentId: "rui__sc-1xylqu1-0"
                })(["", " display:grid;gap:", ";padding:", " ", ";word-break:break-word;"], (0, Z.Ou)(N.p.SMALL), y.W.space.s16, y.W.space.s16, y.W.space.s24),
                K = r(58768),
                $ = (0, A.ZP)(K.q).withConfig({
                    displayName: "TileStatus",
                    componentId: "rui__sc-w5p3aq-0"
                })(["align-self:end;grid-column:1 / end;order:2;color:inherit;opacity:0.8;"]),
                Q = (0, A.ZP)(H.xv).withConfig({
                    displayName: "TileTitle__TileTitleBase",
                    componentId: "rui__sc-1rizk70-0"
                })((0, z.d)("lineClamp"), {
                    alignSelf: "end",
                    gridColumn: "1 / end",
                    order: 3
                });
            Q.defaultProps = {
                variant: N.p.H1
            }, (0, A.ZP)(U.G).withConfig({
                displayName: "styles__TileStack",
                componentId: "rui__sc-1efpx3r-0"
            })((0, R.bU)({
                variants: ((c = {})[V.SMALL] = ((o = {})[F] = {
                    padding: y.W.space.s16
                }, o), c[V.EXTRA_SMALL] = ((l = {})[F] = {
                    padding: y.W.space.s8
                }, l), c[V.WIDGET] = ((s = {})[F] = {
                    padding: y.W.space.s16
                }, s), c[V.VOUCHER] = ((d = {})[F] = {
                    padding: y.W.space.s16
                }, d), c)
            })).defaultProps = {
                color: y.W.color.white
            };
            var J = {
                    NORMAL: "normal",
                    LOCKED: "locked",
                    COMPLETED: "completed"
                },
                ee = (0, A.ZP)(D.e2).withConfig({
                    displayName: "styles__TileLayout",
                    componentId: "rui__sc-1efpx3r-1"
                })(["top:0;right:0;bottom:0;left:0;display:grid;height:100%;grid-template-columns:", " minmax(0,min-content) ", " minmax( 0,min-content );grid-template-rows:minmax(min-content,1fr);padding:", ";row-gap:", ";transition:", ";background:", ";", ""], "[" + Y.AVATAR + "]", "[" + Y.ACTION + "]", y.W.space.s24, y.W.space.s8, y.W.transition.shadow, function(e) {
                    var n;
                    return e.hasMediaContent ? (n = e.variant, e.state === J.LOCKED ? "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%,  rgba(0, 0, 0, 0.5) 100%)" : n === V.LARGE || n === V.SMALL || n === V.EXTRA_SMALL ? "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%,  rgba(0, 0, 0, 0.5) 100%)" : void 0) : void 0
                }, (0, R.bU)({
                    variants: ((h = {})[V.SMALL] = ((p = {
                        padding: y.W.space.s16,
                        rowGap: y.W.space.s4
                    })[$] = {
                        order: 3
                    }, p[Q] = {
                        variant: "textStyles." + N.p.TILE,
                        order: 2
                    }, p[X] = {
                        order: 4
                    }, p), h[V.EXTRA_SMALL] = ((u = {
                        padding: y.W.space.s8,
                        rowGap: y.W.space.s8
                    })[Q] = {
                        variant: "textStyles." + N.p.SMALL_TILE
                    }, u), h[V.WIDGET] = ((g = {
                        padding: y.W.space.s16,
                        rowGap: y.W.space.s4
                    })[$] = {
                        order: 3,
                        color: y.W.color.greyTone50
                    }, g[Q] = {
                        variant: "textStyles." + N.p.TILE,
                        order: 2
                    }, g[X] = {
                        order: 4,
                        color: y.W.color.greyTone50
                    }, g), h[V.VOUCHER_SMALL] = {
                        padding: y.W.space.s16
                    }, h)
                })),
                en = (0, A.ZP)(D.Ig).attrs(G.g.getProps).withConfig({
                    displayName: "styles__TileBody",
                    componentId: "rui__sc-1efpx3r-2"
                })({
                    display: "grid",
                    gridAutoFlow: "row",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }, G.g),
                er = (0, A.ZP)(B.X).withConfig({
                    displayName: "styles__TileButton",
                    componentId: "rui__sc-1efpx3r-3"
                })(["", " border-radius:", ";overflow:hidden;width:100%;display:block;", " ", " ", " ", ""], R.$_, y.W.radius.widget, function(e) {
                    var n, r, t, a, i, o, l, s, d;
                    return e.state === J.LOCKED ? {} : e.variant === V.WIDGET ? ((o = {})[x.G.WIDGET_TILE_OFFSET] = y.W.space.s4, o[x.G.WIDGET_TILE_BACKGROUND] = y.W.color.widgetBackground, o[C.Z + " &&"] = ((t = {})[x.G.WIDGET_TILE_OFFSET] = 0, t[x.G.WIDGET_TILE_BACKGROUND] = y.W.color.greyTone2, t), o["&:enabled:hover, &:any-link:hover"] = ((a = {})[ee] = {
                        boxShadow: "inset 0 0 0 var(" + x.G.WIDGET_TILE_OFFSET + ") var(" + x.G.WIDGET_TILE_BACKGROUND + "), inset 0 0 0 9999px rgba(0, 0, 0, 0.02)"
                    }, a), o['&:enabled:active, &[aria-pressed="true"]'] = ((i = {})[ee] = {
                        boxShadow: "inset 0 0 0 var(" + x.G.WIDGET_TILE_OFFSET + ") var(" + x.G.WIDGET_TILE_BACKGROUND + "), inset 0 0 0 9999px rgba(0, 0, 0, 0.03)"
                    }, i), o) : e.variant === V.LARGE ? ((d = {})[ee] = {
                        boxShadow: e.state === J.COMPLETED ? "inset 0 0 0 9999px rgba(0, 0, 0, 0.3)" : void 0
                    }, d["&:enabled:hover, &:any-link:hover"] = ((l = {})[ee] = {
                        boxShadow: "inset 0 0 0 9999px rgba(0, 0, 0, 0.05)"
                    }, l), d['&:enabled:active, &[aria-pressed="true"]'] = ((s = {})[ee] = {
                        boxShadow: "inset 0 0 0 9999px rgba(0, 0, 0, " + (e.state === J.COMPLETED ? .4 : .1) + ")"
                    }, s), d) : {
                        "&:enabled:hover, &:any-link:hover": ((n = {})[ee] = {
                            boxShadow: "inset 0 0 0 9999px rgba(0, 0, 0, 0.1)"
                        }, n),
                        '&:enabled:active, &[aria-pressed="true"]': ((r = {})[ee] = {
                            boxShadow: "inset 0 0 0 9999px rgba(0, 0, 0, 0.5)"
                        }, r)
                    }
                }, function(e) {
                    var n;
                    return (n = {})[q] = {
                        opacity: e.disabled ? .5 : void 0
                    }, n[en] = {
                        opacity: e.disabled ? .5 : void 0
                    }, n
                }, function(e) {
                    var n = e.variant;
                    return (0, I.ZP)({
                        minWidth: n ? j[n].minWidth : void 0
                    })
                }, (0, R.bU)({
                    variants: ((T = {})[V.LARGE] = ((_ = {})[q] = ((E = {
                        gridAutoFlow: "column",
                        justifyContent: "space-between",
                        alignItems: "center"
                    })[P.z + ", " + M.Kk] = {
                        backgroundColor: y.W.color.actionBlue
                    }, E), _), T[V.SMALL] = ((m = {})[q] = {
                        display: "none"
                    }, m), T[V.WIDGET] = ((v = {
                        color: y.W.color.foreground
                    })[q] = {
                        display: "none"
                    }, v[ee] = {
                        borderRadius: y.W.radius.widget
                    }, v[C.Z + " &&"] = ((f = {
                        borderRadius: "var(" + x.G.RADIUS_INNER + ")",
                        backgroundColor: y.W.color.greyTone2
                    })[ee] = {
                        borderRadius: "var(" + x.G.RADIUS_INNER + ")"
                    }, f), v), T[V.VOUCHER] = ((b = {})[q] = {
                        padding: y.W.space.none
                    }, b), T[V.VOUCHER_SMALL] = ((W = {})[q] = {
                        variant: k.$.TEXT + "." + N.p.PRIMARY,
                        gridAutoFlow: "row",
                        gap: y.W.space.none,
                        paddingX: y.W.space.s16,
                        color: y.W.color.foreground
                    }, W), T)
                }));
            er.defaultProps = {
                bg: y.W.color.widgetBackground
            };
            var et = r(20551),
                ea = (0, A.ZP)(w.x).withConfig({
                    displayName: "styles__CarouselItem",
                    componentId: "rui__sc-1eb9j43-0"
                })(["flex:0 0 auto;padding:", ";@media ", "{padding-left:", ";padding-right:", ";}"], y.W.space.s4, y.W.media.md, y.W.space.s8, y.W.space.s8);
            ea.defaultProps = {
                role: "group",
                minWidth: 0
            };
            var ei = (0, A.ZP)(w.x).withConfig({
                    displayName: "styles__CarouselSpace",
                    componentId: "rui__sc-1eb9j43-1"
                })(["margin:", " ", ";@media ", "{margin-left:", ";margin-right:", ";}"], y.W.space.n4, y.W.space.n20, y.W.media.md, y.W.space.n8, y.W.space.n8),
                eo = (0, A.ZP)(w.x).withConfig({
                    displayName: "styles__CarouselRadiusClip",
                    componentId: "rui__sc-1eb9j43-2"
                })(["border-radius:", ";@supports not selector(:has(:focus-visible)){:focus-within{overflow:visible;}}:has(:focus-visible){overflow:visible;}@media ", "{overflow:hidden;}", " > ", ":last-child &{border-radius:", ";padding-left:", ";padding-right:", ";", "{margin-left:", ";margin-right:", ";@media ", "{margin-left:", ";margin-right:", ";}}", "{padding-left:", ";padding-right:", ";", "{border-radius:", ";}}}}"], function(e) {
                    return e.radius
                }, y.W.media.md, C.Z, S.im, (0, L.h)(8), y.W.space.s4, y.W.space.s4, ei, (0, L.h)(-18), (0, L.h)(-18), y.W.media.md, y.W.space.n2, y.W.space.n2, ea, y.W.space.s2, y.W.space.s2, er, (0, L.h)(8)),
                el = (0, A.ZP)(O.k).withConfig({
                    displayName: "styles__CarouselScroll",
                    componentId: "rui__sc-1eb9j43-3"
                })(["overflow-x:scroll;scroll-snap-type:x mandatory;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}", " ", "{scroll-snap-align:", ";}"], function(e) {
                    var n = e.alignWidth;
                    return n ? (0, A.iv)(["scroll-padding-left:0;padding-left:calc((100% - ", ") / 4 + 12px);padding-right:calc((100% - ", ") / 4 + 12px);"], n, n) : (0, A.iv)(["scroll-padding-left:", ";padding-left:", ";padding-right:", ";@media ", "{scroll-padding-left:", ";padding-left:", ";padding-right:", ";}"], y.W.space.s16, y.W.space.s16, y.W.space.s16, y.W.media.md, y.W.space.none, y.W.space.none, y.W.space.none)
                }, ea, function(e) {
                    return e.align === et.a.SIDE ? "start" : "center"
                }),
                es = (0, A.ZP)(ea).withConfig({
                    displayName: "styles__CarouselItemPlaceholder",
                    componentId: "rui__sc-1eb9j43-4"
                })(["scroll-snap-align:start;"]);
            es.defaultProps = {
                hide: "md-*",
                height: 1,
                minWidth: {
                    all: y.W.space.s16,
                    md: y.W.space.s24
                }
            }
        },
        20551: function(e, n, r) {
            r.d(n, {
                a: function() {
                    return t
                }
            });
            var t = r(40068).b
        },
        86e3: function(e, n, r) {
            r.d(n, {
                m: function() {
                    return _
                }
            });
            var t = r(67294),
                a = r(14141),
                i = r(16678),
                o = r(554),
                l = r(1377),
                s = r(11859),
                d = r(10903),
                c = ["children", "tooltip"],
                p = ["children", "tooltip"];

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function g(e, n) {
                if (null == e) return {};
                var r, t, a = {},
                    i = Object.keys(e);
                for (t = 0; t < i.length; t++) r = i[t], n.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
            }
            var h = a.ZP.span.withConfig({
                displayName: "Ellipsis__EllipsisBase",
                componentId: "rui__sc-1uis3y5-0"
            })(["display:block;max-width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;", ""], i.kk);

            function E(e) {
                var n = e.children,
                    r = e.tooltip,
                    a = g(e, c),
                    i = (0, t.useRef)(null),
                    p = (0, l.l)(),
                    E = (0, t.useState)(!1),
                    _ = E[0],
                    m = E[1],
                    f = (0, t.useState)(0),
                    v = f[0],
                    b = f[1];
                return (0, s.d)(i, r === o.l.AUTO, function(e, n) {
                    m(e.width < n.width), b(e.width)
                }), t.createElement(t.Fragment, null, t.createElement(h, p.getAnchorProps(u({
                    ref: i
                }, a)), n), t.createElement(d.u, p.getTargetProps({
                    open: r === o.l.ALWAYS || _,
                    placement: "bottom-start",
                    maxWidth: Math.max(v, 320)
                }), n))
            }

            function _(e) {
                var n = e.children,
                    r = e.tooltip,
                    a = void 0 === r ? o.l.NEVER : r,
                    i = g(e, p);
                return a === o.l.ALWAYS || a === o.l.AUTO ? t.createElement(E, u({
                    tooltip: a
                }, i), n) : t.createElement(h, i, n)
            }
        },
        58768: function(e, n, r) {
            r.d(n, {
                q: function() {
                    return u
                }
            });
            var t = r(67294),
                a = r(79500),
                i = r(22674),
                o = r(31346),
                l = r(6763),
                s = r(939),
                d = ["children", "color", "iconColor", "useIcon", "variant", "iconSize"];

            function c() {
                return (c = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = t.createElement("span", {
                    "aria-hidden": !0,
                    style: {
                        width: 0,
                        visibility: "hidden"
                    }
                }, "X"),
                u = function(e) {
                    var n = e.children,
                        r = e.color,
                        u = void 0 === r ? i.W.color.greyTone50 : r,
                        g = e.iconColor,
                        h = e.useIcon,
                        E = e.variant,
                        _ = void 0 === E ? a.p.PRIMARY : E,
                        m = e.iconSize,
                        f = void 0 === m ? function(e) {
                            switch (e) {
                                case a.p.H5:
                                    return 24;
                                case a.p.SMALL:
                                    return 10;
                                default:
                                    return 16
                            }
                        }(_) : m,
                        v = function(e, n) {
                            if (null == e) return {};
                            var r, t, a = {},
                                i = Object.keys(e);
                            for (t = 0; t < i.length; t++) r = i[t], n.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a
                        }(e, d),
                        b = (0, l.i)(h, f, null != g ? g : "inherit");
                    return t.createElement(s.xv, c({
                        use: "span",
                        display: "flex",
                        color: u,
                        variant: _
                    }, v), b && t.createElement(o.k, {
                        use: "span",
                        alignItems: "center",
                        mr: f <= 10 ? i.W.space.s4 : i.W.space.s8,
                        mb: "auto"
                    }, p, b), t.createElement(s.xv, null, n))
                }
        },
        5367: function(e, n, r) {
            r.d(n, {
                h: function() {
                    return i
                }
            });
            var t = r(67294),
                a = r(59864);

            function i(e, n) {
                return (0, t.useMemo)(function() {
                    return (0, a.isValidElementType)(e) ? e : (0, a.isElement)(e) ? function() {
                        return e
                    } : null != n ? n : null
                }, [e, n])
            }
        },
        53889: function(e, n, r) {
            r.d(n, {
                d: function() {
                    return a
                }
            });
            var t = r(45919),
                a = function(e) {
                    return function(n) {
                        var r = n[e];
                        return (0, t.hj)(r) ? {
                            display: "-webkit-box",
                            "-webkit-line-clamp": "" + r,
                            "-webkit-box-orient": "vertical",
                            overflow: "hidden",
                            overflowWrap: "break-word"
                        } : null
                    }
                }
        }
    }
]);