"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9223, 3969], {
        84353: function(e, n, r) {
            r.d(n, {
                o: function() {
                    return g
                }
            });
            var o = r(67294),
                t = r(14141),
                i = r(16678),
                a = r(25394),
                c = r(45919),
                s = r(30116),
                l = ["ratio", "children"];

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var d = t.ZP.div.withConfig({
                    displayName: "AspectRatio__Spacer",
                    componentId: "rui__sc-3p9atg-0"
                })(["", " width:100%;height:0;padding-bottom:calc(1 / ", " * 100%);"], (0, i.By)({
                    ratio: {
                        property: a.G.RATIO,
                        transform: function(e) {
                            return "" + e
                        }
                    }
                }), (0, c.z3)(a.G.RATIO)),
                f = t.ZP.div.withConfig({
                    displayName: "AspectRatio__Content",
                    componentId: "rui__sc-3p9atg-1"
                })(["position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:hidden;& > :first-child{width:100%;height:100%;}& > img,& > video{object-fit:cover;}"]),
                p = (0, t.ZP)(s.x).withConfig({
                    displayName: "AspectRatio__Base",
                    componentId: "rui__sc-3p9atg-2"
                })(["position:relative;padding:unset;& > ", "{", "}"], f, i.o3),
                g = (0, o.forwardRef)(function(e, n) {
                    var r = e.ratio,
                        t = e.children,
                        i = function(e, n) {
                            if (null == e) return {};
                            var r, o, t = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) r = i[o], n.indexOf(r) >= 0 || (t[r] = e[r]);
                            return t
                        }(e, l);
                    return o.createElement(p, u({
                        ref: n,
                        overflow: "hidden"
                    }, i), o.createElement(f, null, t), o.createElement(d, {
                        role: "none",
                        ratio: void 0 === r ? 1 : r
                    }))
                })
        },
        89880: function(e, n, r) {
            r.d(n, {
                C: function() {
                    return b
                },
                O: function() {
                    return p
                }
            });
            var o, t = r(67294),
                i = r(14141),
                a = r(79500),
                c = r(22674),
                s = r(2660),
                l = r(6763),
                u = r(49339),
                d = ["size", "useIcon", "variant", "children"];

            function f() {
                return (f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = {
                    SIZE_5: 5,
                    SIZE_16: 16,
                    SIZE_20: 20,
                    SIZE_24: 24
                },
                g = ((o = {})[u.P.DEFAULT] = p.SIZE_20, o[u.P.OUTLINE] = p.SIZE_16, o[u.P.OUTLINED] = p.SIZE_16, o[u.P.DOT] = p.SIZE_5, o),
                h = (0, i.ZP)(s.C).withConfig({
                    displayName: "Badge__CircleButton",
                    componentId: "rui__sc-igjrv7-0"
                })(["appearance:none;transition:", ";@supports selector(:focus-visible){outline:none;}:focus-visible{box-shadow:", ";}:enabled:not([aria-disabled='true']){cursor:pointer;}&:disabled{pointer-events:none;}"], c.W.transition.shadow, c.W.shadow.focus),
                b = (0, t.forwardRef)(function(e, n) {
                    var r = e.size,
                        o = e.useIcon,
                        i = e.variant,
                        c = void 0 === i ? u.P.DEFAULT : i,
                        s = e.children,
                        b = function(e, n) {
                            if (null == e) return {};
                            var r, o, t = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) r = i[o], n.indexOf(r) >= 0 || (t[r] = e[r]);
                            return t
                        }(e, d),
                        v = r === p.SIZE_5 ? u.P.DOT : c,
                        m = null != r ? r : g[c],
                        x = v === u.P.DOT;
                    return t.createElement(h, f({
                        ref: n,
                        display: "inline-flex",
                        px: x || null == s ? void 0 : "0.4em",
                        height: m,
                        minWidth: m,
                        __variants: u.E,
                        variant: v,
                        textStyle: function(e) {
                            switch (e) {
                                case p.SIZE_16:
                                case p.SIZE_20:
                                    return a.p.TINY;
                                case p.SIZE_24:
                                default:
                                    return a.p.SMALL
                            }
                        }(r)
                    }, b), x ? null : t.createElement(t.Fragment, null, (0, l.i)(o, function(e) {
                        switch (e) {
                            case p.SIZE_16:
                            case p.SIZE_20:
                                return 12;
                            case p.SIZE_24:
                            default:
                                return 16
                        }
                    }(m)), s))
                })
        },
        49339: function(e, n, r) {
            r.d(n, {
                E: function() {
                    return u
                },
                P: function() {
                    return a
                }
            });
            var o, t = r(22674);

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = {
                    DEFAULT: "default",
                    DOT: "dot",
                    OUTLINE: "outline",
                    OUTLINED: "outlined"
                },
                c = {
                    color: t.W.color.background,
                    backgroundColor: t.W.color.red,
                    borderWidth: 0,
                    ":hover:enabled": {
                        cursor: "pointer"
                    }
                },
                s = i({}, c, {
                    margin: t.W.space.s4
                }),
                l = i({}, c, {
                    backgroundColor: t.W.color.blue,
                    boxSizing: "content-box",
                    borderStyle: "solid",
                    borderColor: t.W.color.background,
                    borderWidth: t.W.space.s2
                }),
                u = ((o = {})[a.DEFAULT] = c, o[a.DOT] = s, o[a.OUTLINE] = l, o[a.OUTLINED] = l, o)
        },
        2660: function(e, n, r) {
            r.d(n, {
                C: function() {
                    return p
                }
            });
            var o, t = r(14141),
                i = r(56672),
                a = r(31346),
                c = r(22674),
                s = {
                    DEFAULT: "default",
                    FILLED: "filled",
                    OUTLINED: "outlined"
                },
                l = {
                    color: c.W.color.white,
                    bg: c.W.color.primary
                },
                u = {
                    color: c.W.color.greyTone20,
                    border: "2px solid"
                },
                d = ((o = {})[s.DEFAULT] = {}, o[s.FILLED] = l, o[s.OUTLINED] = u, o);

            function f() {
                return (f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = (0, t.ZP)(a.k).attrs(i.g.getProps).withConfig({
                displayName: "Circle",
                componentId: "rui__sc-1bqbzna-0"
            })(["align-items:center;justify-content:center;border-radius:9999px;flex:none;", ""], function(e) {
                return (e.image || e.imageSet) && (0, t.iv)(["background-size:cover;background-position:center;background-repeat:no-repeat;", ""], i.g)
            });
            p.displayName = "Circle", p.defaultProps = f({}, a.k.defaultProps, {
                variant: s.DEFAULT,
                __variants: d
            })
        },
        26370: function(e, n, r) {
            r.d(n, {
                h: function() {
                    return k
                }
            });
            var o = r(67294),
                t = r(14141),
                i = r(16678),
                a = r(47574),
                c = r(22674),
                s = r(14571),
                l = r(45919),
                u = r(63537),
                d = r(6763),
                f = r(19550),
                p = r(60260),
                g = r(49339),
                h = r(89880),
                b = (0, t.ZP)(h.C).attrs(function(e) {
                    return e.margin ? null : e.variant === g.P.DOT ? {
                        margin: c.W.space.n2
                    } : {
                        margin: c.W.space.n8
                    }
                }).withConfig({
                    displayName: "IconButtonBadge",
                    componentId: "rui__sc-f4gzaw-0"
                })(["z-index:1;place-self:start end;"]);
            b.defaultProps = {
                size: h.O.SIZE_16
            };
            var v = ["useIcon", "useHoverIcon", "size", "tapArea", "children"];

            function m() {
                return (m = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var x = (0, t.ZP)(u.X).withConfig({
                    displayName: "IconButton__IconButtonBase",
                    componentId: "rui__sc-1xan14r-0"
                })([":focus-visible{background-color:", ";color:", ";}", " ", " ", " ", " ", ""], c.W.color.background, c.W.color.foreground, i.$_, i.e6, (0, a.N)({
                    top: -2,
                    right: -5
                }), function(e) {
                    var n = e.size;
                    return {
                        display: "block",
                        width: (0, s.h)(n),
                        height: (0, s.h)(n)
                    }
                }, function(e) {
                    var n = e.size,
                        r = e.tapArea;
                    if (!(n >= r)) {
                        var o = (0, s.h)(-(r - n) / 2);
                        return {
                            position: "relative",
                            zIndex: 0,
                            "&::before": {
                                content: "''",
                                position: "absolute",
                                top: o,
                                bottom: o,
                                left: o,
                                right: o
                            }
                        }
                    }
                }),
                k = Object.assign((0, o.forwardRef)(function(e, n) {
                    var r = e.useIcon,
                        t = e.useHoverIcon,
                        i = e.size,
                        a = void 0 === i ? 24 : i,
                        c = e.tapArea,
                        s = void 0 === c ? 44 : c,
                        u = e.children,
                        g = function(e, n) {
                            if (null == e) return {};
                            var r, o, t = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) r = i[o], n.indexOf(r) >= 0 || (t[r] = e[r]);
                            return t
                        }(e, v),
                        h = (0, o.useState)(!1),
                        k = h[0],
                        C = h[1];
                    return o.createElement(x, m({
                        ref: n,
                        size: a,
                        tapArea: !1 === s ? 0 : s
                    }, g, {
                        onMouseEnter: (0, l.$e)(function() {
                            return C(!0)
                        }, g.onMouseEnter),
                        onMouseLeave: (0, l.$e)(function() {
                            return C(!1)
                        }, g.onMouseLeave)
                    }), o.createElement(p.G, null, (0, d.i)(k && t ? t : r, a), o.isValidElement(u) && u.type === b ? u : o.createElement(f.T, null, u)))
                }), {
                    Badge: b
                })
        },
        94166: function(e, n, r) {
            r.d(n, {
                Z: function() {
                    return c
                }
            });
            var o = r(67294),
                t = r(20943),
                i = r(99105),
                a = r(45919);

            function c(e) {
                var n = e.children,
                    r = void 0 === n ? a.Pf : n,
                    c = e.disabled,
                    s = e.defaultState,
                    l = e.onChange,
                    u = void 0 === l ? a.ZT : l,
                    d = e.state,
                    f = (0, i.O)({
                        disabled: void 0 !== c && c,
                        defaultState: void 0 !== s && s,
                        state: d,
                        onChange: u
                    }),
                    p = f[0],
                    g = f[1],
                    h = (0, o.useMemo)(function() {
                        return Object.assign(g, {
                            state: p,
                            toggle: g
                        })
                    }, [p, g]);
                return o.createElement(t.t.Provider, {
                    value: h
                }, (0, a.mf)(r) ? r(h) : r)
            }
        },
        20943: function(e, n, r) {
            r.d(n, {
                t: function() {
                    return o
                }
            });
            var o = (0, r(67294).createContext)(null)
        },
        94910: function(e, n, r) {
            r.d(n, {
                z: function() {
                    return h
                }
            });
            var o = r(85893),
                t = r(67294),
                i = r(22674),
                a = r(20010),
                c = r(45919),
                s = r(14141),
                l = r(37947),
                u = r(16678),
                d = r(35402),
                f = r(34254),
                p = r(6206);
            let g = (0, s.ZP)(a.z).withConfig({
                    componentId: "sc-b1d8265f-0"
                })((0, c.Ou)("subtitle2"), e => {
                    let {
                        height: n = "auto",
                        maxWidth: r
                    } = e;
                    return (0, l.iv)({
                        height: n,
                        maxWidth: r || ["240px", null, "440px", "720px", null, "1024px"],
                        paddingX: ["s-24", null, null, null, null, "s-32"],
                        paddingY: ["10px", null, null, null, null, "14px"],
                        "&:focus-visible": {
                            boxShadow: "0 0 0 0.125rem rgb(".concat(i.W.colorChannel.blue, " / 0.5) inset, 0 0 0 0.225rem ").concat(i.W.color.background, " inset")
                        }
                    })
                }, (0, u.bU)({
                    variants: {
                        default: {
                            bg: "background",
                            color: "foreground",
                            "&:hover": {
                                bg: "background",
                                opacity: .85
                            },
                            "&:active": {
                                bg: "background",
                                opacity: .75
                            },
                            "&:disabled": {
                                bg: "background",
                                color: "grey-50"
                            }
                        },
                        text: {
                            "&:hover": {
                                bg: "grey-tone-2",
                                opacity: .85
                            },
                            "&:active": {
                                bg: "grey-tone-2",
                                opacity: .75
                            },
                            "&:disabled": {
                                color: "grey-50"
                            }
                        },
                        primary: {
                            bg: "foreground",
                            color: "background",
                            "&:hover": {
                                bg: "foreground",
                                opacity: .85
                            },
                            "&:active": {
                                bg: "foreground",
                                opacity: .75
                            },
                            "&:disabled": {
                                bg: "foreground",
                                color: "grey-50"
                            }
                        },
                        secondary: {
                            bg: "transparent",
                            color: "foreground",
                            borderColor: "foreground",
                            borderStyle: "solid",
                            borderWidth: 2,
                            "&:hover": {
                                bg: "transparent",
                                opacity: .85
                            },
                            "&:active": {
                                bg: "transparent",
                                opacity: .75
                            },
                            "&:disabled": {
                                bg: "transparent",
                                borderColor: "grey-50",
                                color: "grey-50"
                            }
                        }
                    }
                })),
                h = (0, t.forwardRef)((e, n) => {
                    let {
                        gaEvent: r,
                        link: t,
                        query: i,
                        onClick: a,
                        children: c,
                        ...s
                    } = e, {
                        trackLink: l
                    } = (0, d.z$)(), u = e => {
                        (0, f.mf)(a) && a(e), l(e, r, t)
                    };
                    return t ? (0, o.jsx)(p._, {
                        value: t,
                        query: i,
                        children: (0, o.jsx)(g, {
                            use: "a",
                            size: "sm",
                            ref: n,
                            onClick: u,
                            ...s,
                            children: c
                        })
                    }) : (0, o.jsx)(g, {
                        size: "sm",
                        ref: n,
                        onClick: u,
                        ...s,
                        children: c
                    })
                });
            h.displayName = "Button"
        },
        4320: function(e, n, r) {
            r.r(n), r.d(n, {
                CookieConsentModal: function() {
                    return I
                }
            });
            var o, t, i = r(85893),
                a = r(11163),
                c = r(67294),
                s = r(30116),
                l = r(49133),
                u = r(96944),
                d = r(14141),
                f = r(37947),
                p = r(35402),
                g = r(52805),
                h = r(84533),
                b = r(87559),
                v = r(31346),
                m = r(94910),
                x = r(16970);
            let k = (0, d.ZP)(m.z).withConfig({
                    componentId: "sc-efe71150-0"
                })((0, f.ZP)({
                    flex: 1,
                    maxWidth: ["unset", null, "440px", "720px"]
                })),
                C = e => {
                    let {
                        onClickAllow: n,
                        onClickReject: r,
                        onClickManage: o
                    } = e, t = (0, b.T)();
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(x.x, {
                            use: "h5",
                            variant: "subtitle2",
                            mb: "s-16",
                            color: "foreground",
                            children: t("shared.cookieConsent.title")
                        }), (0, i.jsx)(x.x, {
                            use: "p",
                            variant: "secondary",
                            color: "foreground",
                            mb: "s-16",
                            children: t("shared.cookieConsent.description")
                        }), (0, i.jsxs)(v.k, {
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            ml: "-s-8",
                            mr: "-s-8",
                            children: [(0, i.jsx)(k, {
                                variant: "primary",
                                size: "sm",
                                mt: "s-16",
                                mx: "s-4",
                                onClick: n,
                                children: t("shared.cookieConsent.button.allow")
                            }), (0, i.jsx)(k, {
                                variant: "primary",
                                size: "sm",
                                mt: "s-16",
                                mx: "s-4",
                                onClick: r,
                                children: t("shared.cookieConsent.button.reject")
                            })]
                        }), (0, i.jsx)(v.k, {
                            ml: "-s-8",
                            mr: "-s-8",
                            children: (0, i.jsx)(k, {
                                variant: "secondary",
                                size: "sm",
                                mt: "s-16",
                                mx: "s-4",
                                onClick: o,
                                children: t("shared.cookieConsent.button.manage")
                            })
                        })]
                    })
                };
            var y = r(54151);
            (o = t || (t = {})).Initial = "initial", o.Preferences = "preferences";
            let j = (0, d.ZP)(s.x).withConfig({
                    componentId: "sc-9e0cfa2d-0"
                })((0, f.iv)({
                    backgroundColor: "grey-tone-5",
                    borderRadius: ["15px 15px 0 0", null, 15],
                    bottom: [0, null, 40],
                    maxHeight: ["90%", null, 500],
                    minWidth: "320px",
                    overflow: "auto",
                    padding: "s-24",
                    position: "fixed",
                    right: [null, null, 40],
                    width: ["100%", null, 400, null, null, 500]
                })),
                I = e => {
                    let {
                        step: n = t.Initial
                    } = e, {
                        trackEvent: r
                    } = (0, p.z$)(), {
                        isBusiness: o
                    } = (0, h.C)(), s = (0, b.T)(), d = (0, a.useRouter)(), {
                        isAnalyticsEnabled: f,
                        isBannerDisplayed: v,
                        setIsAnalyticsEnabled: m,
                        setIsBannerDisplayed: x
                    } = (0, g.uz)(), [k, I] = (0, c.useState)(n), _ = (0, c.useCallback)(e => {
                        x(!0), m(e), r({
                            action: e ? "CookieConsent_Granted" : "CookieConsent_Denied",
                            component_name: "cookie-consent",
                            vertical: o ? "Business" : "Retail",
                            callback: () => {
                                d.reload()
                            }
                        })
                    }, [x, m, r, o, d]), E = (0, c.useMemo)(() => {
                        switch (k) {
                            case t.Preferences:
                                return (0, i.jsx)(y.CookieConsentPreferences, {
                                    isAnalyticsEnabled: f,
                                    onClickBack: () => I(t.Initial),
                                    onClickSave: _
                                });
                            case t.Initial:
                            default:
                                return (0, i.jsx)(C, {
                                    onClickAllow: () => _(!0),
                                    onClickReject: () => _(!1),
                                    onClickManage: () => I(t.Preferences)
                                })
                        }
                    }, [k, f, _]);
                    return (0, i.jsx)(l.u, {
                        closeOnOverlayClick: !1,
                        open: !v,
                        role: "dialog",
                        "aria-label": s("shared.cookieConsent.preferences.title"),
                        scrollLock: !1,
                        className: "CookieConsent cookie-consent-widget",
                        children: (0, i.jsx)(u.n, { in: !0,
                            offsetY: -24,
                            children: (0, i.jsx)(j, {
                                children: E
                            })
                        })
                    })
                }
        },
        54151: function(e, n, r) {
            r.r(n), r.d(n, {
                CookieConsentPreferences: function() {
                    return m
                }
            });
            var o = r(85893),
                t = r(26370),
                i = r(94166),
                a = r(31346),
                c = r(30116),
                s = r(68439),
                l = r(99925),
                u = r(14141),
                d = r(4842),
                f = r(87559),
                p = r(16970),
                g = r(79253),
                h = r(94910);
            let b = (0, u.ZP)(t.h).withConfig({
                    componentId: "sc-25f72df-0"
                })({
                    flex: 1
                }),
                v = {
                    legalDocumentId: "43b90a5f-dc2b-4a39-b6c3-1932b49cc8a3",
                    type: d._i.Legal
                },
                m = e => {
                    let {
                        onClickBack: n,
                        onClickSave: r,
                        isAnalyticsEnabled: t = !0
                    } = e, u = (0, f.T)();
                    return (0, o.jsx)(i.Z, {
                        defaultState: t,
                        children: e => {
                            let {
                                state: t,
                                toggle: i
                            } = e;
                            return (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsxs)(a.k, {
                                    mb: "s-24",
                                    children: [n && (0, o.jsx)(b, {
                                        "aria-label": u("shared.button.back"),
                                        onClick: n,
                                        useIcon: l.N
                                    }), (0, o.jsx)(p.x, {
                                        use: "h5",
                                        variant: "h6",
                                        mx: "auto",
                                        textAlign: "center",
                                        color: "foreground",
                                        children: u("shared.cookieConsent.preferences.title")
                                    }), n && (0, o.jsx)(c.x, {
                                        flex: 1
                                    })]
                                }), (0, o.jsx)(p.x, {
                                    use: "p",
                                    variant: "secondary",
                                    color: "foreground",
                                    mb: "s-40",
                                    children: u("shared.cookieConsent.preferences.description")
                                }), (0, o.jsxs)(c.x, {
                                    mb: "s-32",
                                    children: [(0, o.jsx)(p.x, {
                                        use: "h6",
                                        variant: "subtitle2",
                                        mb: "s-12",
                                        color: "foreground",
                                        children: u("shared.cookieConsent.preferences.section1.title")
                                    }), (0, o.jsx)(p.x, {
                                        variant: "secondary",
                                        color: "foreground",
                                        children: u("shared.cookieConsent.preferences.section1.description")
                                    })]
                                }), (0, o.jsxs)(c.x, {
                                    mb: "s-32",
                                    children: [(0, o.jsxs)(a.k, {
                                        use: "label",
                                        mb: "s-12",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        children: [(0, o.jsx)(p.x, {
                                            use: "h6",
                                            variant: "subtitle2",
                                            mr: "s-12",
                                            color: "foreground",
                                            children: u("shared.cookieConsent.preferences.section2.title")
                                        }), (0, o.jsx)(s.r, {
                                            checked: t,
                                            onClick: () => i()
                                        })]
                                    }), (0, o.jsx)(p.x, {
                                        variant: "secondary",
                                        color: "foreground",
                                        children: u("shared.cookieConsent.preferences.section2.description")
                                    })]
                                }), (0, o.jsx)(g.r, {
                                    display: "inline-block",
                                    mb: "s-32",
                                    value: v,
                                    variant: "default",
                                    target: "_blank",
                                    color: "foreground",
                                    __css: {
                                        textDecoration: "underline"
                                    },
                                    children: u("shared.cookieConsent.preferences.policyLink")
                                }), (0, o.jsx)(h.z, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: () => r(t),
                                    children: u("shared.cookieConsent.preferences.button")
                                })]
                            })
                        }
                    })
                }
        },
        79253: function(e, n, r) {
            r.d(n, {
                r: function() {
                    return f
                }
            });
            var o = r(85893),
                t = r(67294),
                i = r(939),
                a = r(14141),
                c = r(29867),
                s = r(35402),
                l = r(34254),
                u = r(6206);
            let d = (0, a.ZP)(i.xv).withConfig({
                    componentId: "sc-85172584-0"
                })({
                    wordBreak: "break-word"
                }),
                f = (0, t.forwardRef)((e, n) => {
                    let {
                        value: r,
                        gaEvent: t,
                        onClick: i,
                        ...a
                    } = e, f = (0, c.U)(), {
                        trackLink: p
                    } = (0, s.z$)(), g = e => {
                        if (f) {
                            e.preventDefault(), e.stopPropagation();
                            return
                        }(0, l.mf)(i) && i(e), p(e, t, r)
                    };
                    return r ? (0, o.jsx)(u._, {
                        value: r,
                        children: (0, o.jsx)(d, {
                            ref: n,
                            use: "a",
                            onClick: g,
                            ...a
                        })
                    }) : (0, o.jsx)(d, {
                        ref: n,
                        use: "a",
                        onClick: g,
                        ...a
                    })
                });
            f.displayName = "Link"
        }
    }
]);