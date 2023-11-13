"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1586], {
        94910: function(n, e, l) {
            l.d(e, {
                z: function() {
                    return x
                }
            });
            var o = l(85893),
                t = l(67294),
                r = l(22674),
                i = l(20010),
                a = l(45919),
                s = l(14141),
                u = l(37947),
                d = l(16678),
                c = l(35402),
                g = l(34254),
                p = l(6206);
            let h = (0, s.ZP)(i.z).withConfig({
                    componentId: "sc-b1d8265f-0"
                })((0, a.Ou)("subtitle2"), n => {
                    let {
                        height: e = "auto",
                        maxWidth: l
                    } = n;
                    return (0, u.iv)({
                        height: e,
                        maxWidth: l || ["240px", null, "440px", "720px", null, "1024px"],
                        paddingX: ["s-24", null, null, null, null, "s-32"],
                        paddingY: ["10px", null, null, null, null, "14px"],
                        "&:focus-visible": {
                            boxShadow: "0 0 0 0.125rem rgb(".concat(r.W.colorChannel.blue, " / 0.5) inset, 0 0 0 0.225rem ").concat(r.W.color.background, " inset")
                        }
                    })
                }, (0, d.bU)({
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
                x = (0, t.forwardRef)((n, e) => {
                    let {
                        gaEvent: l,
                        link: t,
                        query: r,
                        onClick: i,
                        children: a,
                        ...s
                    } = n, {
                        trackLink: u
                    } = (0, c.z$)(), d = n => {
                        (0, g.mf)(i) && i(n), u(n, l, t)
                    };
                    return t ? (0, o.jsx)(p._, {
                        value: t,
                        query: r,
                        children: (0, o.jsx)(h, {
                            use: "a",
                            size: "sm",
                            ref: e,
                            onClick: d,
                            ...s,
                            children: a
                        })
                    }) : (0, o.jsx)(h, {
                        size: "sm",
                        ref: e,
                        onClick: d,
                        ...s,
                        children: a
                    })
                });
            x.displayName = "Button"
        },
        81586: function(n, e, l) {
            l.d(e, {
                h: function() {
                    return nS
                },
                B: function() {
                    return nW
                }
            });
            var o = l(85893),
                t = l(67294),
                r = l(30116),
                i = l(92303),
                a = l(26370),
                s = l(13825),
                u = l(33018),
                d = l(37947),
                c = l(14141),
                g = l(41664),
                p = l.n(g),
                h = l(11163),
                x = l(74925),
                b = l(66639),
                f = l(29867),
                m = l(87559),
                v = l(44017),
                k = l(79248),
                j = l(86853),
                y = l(79253),
                C = l(98637),
                w = l(56435),
                I = l(18754),
                O = l(10753);
            let Y = (0, t.createContext)(null);

            function L() {
                let n = (0, t.useContext)(Y);
                if (null === n) throw Error("You can access `NavigationContext` only in components inside `Navigation` component");
                return n
            }
            var W = l(74183),
                S = l(79980),
                P = l(63537),
                T = l(94166),
                D = l(31346),
                M = l(58003),
                Z = l(65373),
                _ = l(68078),
                z = l(4842),
                E = l(16970),
                R = l(939),
                B = l(45919),
                A = l(94910);
            let F = (0, c.ZP)(A.z).withConfig({
                    componentId: "sc-21981587-0"
                })(n => {
                    let {
                        hasGroupWrapper: e = !0
                    } = n;
                    return (0, d.iv)({ ...(0, B.Ou)("small"),
                        breakInside: "avoid",
                        backgroundColor: e ? "background" : "transparent",
                        position: "relative",
                        paddingX: "s-16",
                        paddingY: ["s-12", null, "s-8", null, "10px"],
                        maxWidth: "100%",
                        textAlign: "left",
                        display: "block",
                        width: "100%",
                        whiteSpace: "normal",
                        borderRadius: [0, null, "round"],
                        '[data-rui="state-layer"]': {
                            backgroundColor: "unset"
                        },
                        "&[href]:hover": {
                            backgroundColor: "grey-tone-2"
                        }
                    })
                }),
                U = n => {
                    var e;
                    let {
                        groupLocationId: l,
                        locationId: r
                    } = n, {
                        getLocationProps: i,
                        getLocationLink: a
                    } = (0, _.Yt)(), {
                        setIsMenuOpen: s,
                        trackMenuLinkClick: u
                    } = L(), {
                        title: d
                    } = null !== (e = i(r)) && void 0 !== e ? e : {}, c = (0, t.useCallback)(() => {
                        u(r, l), s(!1)
                    }, [l, r, s, u]);
                    return d ? (0, o.jsx)(F, {
                        link: a(r),
                        onClick: c,
                        children: (0, o.jsx)(R.xv, {
                            variant: "secondary",
                            whiteSpace: "normal",
                            children: d
                        })
                    }, r) : null
                },
                X = (0, c.ZP)(P.X).withConfig({
                    componentId: "sc-809e4e7e-0"
                })({
                    width: "100%"
                }),
                N = (0, c.ZP)(r.x).withConfig({
                    componentId: "sc-809e4e7e-1"
                })((0, d.iv)({
                    breakInside: "avoid",
                    paddingBottom: "s-16",
                    color: "foreground",
                    overflow: "hidden"
                })),
                G = (0, c.ZP)(r.x).withConfig({
                    componentId: "sc-809e4e7e-2"
                })(() => (0, d.iv)({
                    maxWidth: "100%",
                    columnCount: [null, null, 3, 4, null, 5],
                    columnGap: [null, null, "s-16"]
                })),
                K = n => {
                    var e;
                    let {
                        sitemapLocation: {
                            locationId: l
                        }
                    } = n, {
                        getSitemapLocationsByParentId: i
                    } = (0, W.j)(), {
                        getLocationProps: a,
                        getLocationLink: s
                    } = (0, _.Yt)(), {
                        incrementMenuSectionOpenCount: u,
                        setIsMenuOpen: d,
                        trackMenuLinkClick: c
                    } = L(), g = (0, t.useMemo)(() => i(l).filter(n => {
                        let {
                            scope: e
                        } = n;
                        return e.includes(S.d.Menu)
                    }).map(n => {
                        let {
                            locationId: e
                        } = n;
                        return (0, o.jsx)(U, {
                            groupLocationId: l,
                            locationId: e
                        }, e)
                    }), [i, l]), {
                        type: p,
                        title: h
                    } = null !== (e = a(l)) && void 0 !== e ? e : {}, x = (0, t.useCallback)(() => {
                        c(l), d(!1)
                    }, [c, l, d]);
                    return h ? p === z._i.Section ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(r.x, {
                            hide: "md-*",
                            children: (0, o.jsx)(T.Z, {
                                children: n => {
                                    let {
                                        state: e,
                                        toggle: l
                                    } = n;
                                    return (0, o.jsxs)(o.Fragment, {
                                        children: [(0, o.jsx)(X, {
                                            onClick: () => {
                                                u(), l()
                                            },
                                            children: (0, o.jsxs)(D.k, {
                                                use: "span",
                                                alignItems: "center",
                                                children: [(0, o.jsx)(E.x, {
                                                    use: "h6",
                                                    mr: "auto",
                                                    padding: "s-8",
                                                    variant: "subtitle2",
                                                    py: "s-12",
                                                    children: h
                                                }), (0, o.jsx)(Z.W, {})]
                                            })
                                        }), (0, o.jsx)(M.K, { in: e,
                                            children: (0, o.jsx)(r.x, {
                                                ml: "s-8",
                                                backgroundColor: "background",
                                                borderRadius: "inner",
                                                overflow: "hidden",
                                                children: g
                                            })
                                        })]
                                    })
                                }
                            })
                        }), (0, o.jsxs)(N, {
                            hide: "*-md",
                            children: [(0, o.jsx)(E.x, {
                                use: "h6",
                                paddingX: "s-16",
                                paddingY: "s-8",
                                variant: "subtitle2",
                                children: h
                            }), g]
                        }, l)]
                    }) : (0, o.jsx)(F, {
                        hasGroupWrapper: !1,
                        link: s(l),
                        onClick: x,
                        children: (0, o.jsx)(E.x, {
                            variant: "secondary",
                            whiteSpace: "normal",
                            children: h
                        })
                    }, l) : null
                },
                q = (0, c.ZP)(r.x).withConfig({
                    componentId: "sc-368916b1-0"
                })(n => {
                    let {
                        hasExtraCategory: e,
                        prefersColumns: l
                    } = n;
                    return l ? (0, d.iv)({
                        columnCount: [null, null, e ? 2 : 3, e ? 3 : 4, null, e ? 5 : 6],
                        columnGap: [null, null, "s-16"]
                    }) : {}
                }),
                H = n => {
                    let {
                        prefersColumns: e,
                        sitemapLocation: {
                            items: l
                        },
                        hasExtraCategory: t
                    } = n, {
                        getSitemapLocation: r
                    } = (0, W.j)();
                    return (0, o.jsx)(q, {
                        prefersColumns: e,
                        hasExtraCategory: t,
                        children: null == l ? void 0 : l.map(n => {
                            let e = r(n);
                            return (null == e ? void 0 : e.scope.includes(S.d.Menu)) ? (0, o.jsx)(K, {
                                sitemapLocation: e
                            }, n) : null
                        })
                    })
                };
            var $ = l(79581);
            let J = (0, c.ZP)(y.r).withConfig({
                    componentId: "sc-9bc30c8a-0"
                })((0, B.Ou)("h6"), (0, d.iv)({
                    alignItems: "center",
                    columnGap: "s-8",
                    display: "grid",
                    gridAutoFlow: "column",
                    gridTemplateColumns: "auto 1fr",
                    padding: "s-8",
                    paddingLeft: ["s-8", null, "s-16"],
                    marginBottom: ["s-16", null, "s-12", 0, null, "s-16"],
                    "&:focus-visible": {
                        outlineOffset: "-1px"
                    }
                })),
                Q = n => {
                    var e;
                    let {
                        locationId: l,
                        spanToExtraCategory: i
                    } = n, {
                        getLocationProps: a,
                        getLocationLink: s
                    } = (0, _.Yt)(), {
                        title: u,
                        type: d
                    } = null !== (e = a(l)) && void 0 !== e ? e : {}, {
                        setIsMenuOpen: c,
                        trackMenuLinkClick: g
                    } = L(), p = (0, t.useCallback)(() => {
                        g(l), c(!1)
                    }, [l, c, g]);
                    return d !== z._i.Internal ? null : (0, o.jsx)(r.x, {
                        __css: {
                            gridColumn: "1 / ".concat(i ? 3 : 2)
                        },
                        children: (0, o.jsxs)(J, {
                            value: s(l),
                            onClick: p,
                            children: [u, (0, o.jsx)($.m, {})]
                        })
                    })
                },
                V = (0, c.ZP)(r.x).withConfig({
                    componentId: "sc-e44e4308-0"
                })(n => {
                    let {
                        theme: e
                    } = n;
                    return (0, d.iv)({
                        backgroundColor: ["grey-tone-2", null, "background"],
                        position: "absolute",
                        overflow: "auto",
                        padding: ["s-24", null, null, "s-16"],
                        paddingY: [null, null, null, 0],
                        borderBottom: "1px solid",
                        borderBottomColor: "grey-tone-8",
                        top: 0,
                        left: 0,
                        right: 0,
                        gap: [null, null, null, "s-16", "s-32"],
                        marginTop: [e.navigation.height.all - 1, null, null, e.navigation.height.lg - 1, null, e.navigation.height.xxl - 1],
                        "&::before": {
                            content: '""',
                            display: ["none", "none", "none", "block"],
                            position: "sticky",
                            zIndex: e.navigation.zIndex - 1,
                            background: (0, k.j)(e.mode) ? "linear-gradient(180deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)" : "linear-gradient(180deg, rgba(255,255,255, 1) 20%, rgba(255,255,255, 0) 100%)",
                            left: 0,
                            right: 0,
                            top: [null, null, null, 0],
                            height: [null, null, null, "s-16", null, "s-32"]
                        },
                        "&::after": {
                            content: '""',
                            display: ["none", "none", "none", "block"],
                            position: "sticky",
                            zIndex: e.navigation.zIndex - 1,
                            background: (0, k.j)(e.mode) ? "linear-gradient(0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)" : "linear-gradient(0deg, rgba(255,255,255, 1) 20%, rgba(255,255,255, 0) 100%)",
                            left: 0,
                            right: 0,
                            bottom: [null, null, null, 0],
                            height: [null, null, null, "s-24", null, "s-32"]
                        }
                    })
                }, {
                    "-webkit-overflow-scrolling": "touch"
                }),
                nn = (0, c.ZP)(r.x).withConfig({
                    componentId: "sc-e44e4308-1"
                })(n => {
                    let {
                        theme: e,
                        hasExtraCategory: l
                    } = n;
                    return (0, d.iv)({
                        maxWidth: e.layout.maxWidth,
                        overflow: ["initial", null, null, "hidden"],
                        mx: "auto",
                        display: [null, null, null, "grid"],
                        gridTemplateColumns: [null, null, null, l ? "3fr 1fr" : "1fr", l ? "4fr 1fr" : "1fr"],
                        gap: [null, null, null, l ? "s-16" : null]
                    })
                }),
                ne = (0, c.ZP)(r.x).withConfig({
                    componentId: "sc-e44e4308-2"
                })((0, d.iv)({
                    opacity: 0,
                    content: '""',
                    display: ["none", "none", "none", "block"],
                    pointerEvents: ["none", "none", "none", "all"],
                    position: "absolute",
                    height: ["20px", null, null, null, null, "26px"],
                    width: "100%",
                    right: 0,
                    left: 0,
                    bottom: [null, null, null, 0]
                })),
                nl = n => {
                    let {
                        children: e
                    } = n, {
                        menuItems: l,
                        isMenuOpen: t,
                        navigationMenuRef: i,
                        isMenuMultiLevel: a,
                        maxScrollableHeight: s
                    } = L();
                    if (!t) return null;
                    let u = l[0],
                        d = l.length > 1 && a;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(ne, {}), (0, o.jsx)(V, {
                            use: "nav",
                            role: "navigation",
                            ref: i,
                            maxHeight: s,
                            children: (0, o.jsxs)(nn, {
                                hasExtraCategory: d,
                                children: [e && (0, o.jsx)(r.x, {
                                    hide: "lg-*",
                                    mb: "s-16",
                                    ml: "-s-8",
                                    children: e
                                }), a && u && (0, o.jsx)(Q, {
                                    spanToExtraCategory: d,
                                    locationId: u.locationId
                                }), a ? l.map((n, e) => (0, o.jsx)(H, {
                                    hasExtraCategory: d,
                                    sitemapLocation: n,
                                    prefersColumns: 0 === e
                                }, n.locationId)) : (0, o.jsx)(G, {
                                    children: l.map(n => (0, o.jsx)(K, {
                                        sitemapLocation: n
                                    }, n.locationId))
                                })]
                            })
                        })]
                    })
                };
            var no = l(37903),
                nt = l(68328),
                nr = l(84533),
                ni = l(87955),
                na = l(22674);

            function ns() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.YO.TransparentDefault;
                switch (n) {
                    case I.YO.TransparentLight:
                    case I.YO.SolidLight:
                        return na.W.color.black;
                    case I.YO.TransparentDark:
                    case I.YO.SolidDark:
                        return na.W.color.white;
                    case I.YO.Default:
                    case I.YO.TransparentDefault:
                    default:
                        return na.W.color.foreground
                }
            }
            let nu = (0, c.ZP)(r.x).withConfig({
                    componentId: "sc-a7011277-0"
                })(n => {
                    let {
                        theme: e
                    } = n;
                    return (0, d.iv)({
                        backgroundColor: "grey-tone-2",
                        bottom: 0,
                        columnGap: "s-16",
                        display: ["grid", null, null, "none"],
                        gridAutoFlow: "column",
                        justifyContent: "center",
                        left: 0,
                        padding: "s-12",
                        position: "fixed",
                        width: "100%",
                        zIndex: e.navigation.zIndex,
                        boxShadow: "\n      0 -1px 0 rgba(25, 28, 31, 0.04),\n      0 8px 16px rgba(25, 28, 31, 0.04),\n      0 14px 28px rgba(25, 28, 31, 0.04)"
                    })
                }),
                nd = (0, t.forwardRef)((n, e) => {
                    let {
                        children: l,
                        isOpen: t
                    } = n;
                    return t && (0, o.jsx)(nu, {
                        ref: e,
                        children: l
                    })
                });
            nd.displayName = "NavigationSignUpButtonsContainer";
            let nc = () => {
                    let n = (0, m.T)(),
                        {
                            loginLink: e,
                            signupLink: l
                        } = function() {
                            let {
                                isBusiness: n,
                                isRevolutUnder18: e
                            } = (0, nr.C)();
                            return n ? {
                                loginLink: {
                                    uri: nt.li.BusinessWebAppLogin,
                                    type: z._i.External
                                },
                                signupLink: {
                                    uri: nt.li.BusinessWebAppSignUp,
                                    type: z._i.External
                                }
                            } : e ? {
                                loginLink: void 0,
                                signupLink: {
                                    uri: nt.li.RevolutUnder18GetTheApp,
                                    type: z._i.External
                                }
                            } : {
                                loginLink: {
                                    uri: nt.li.RetailWebAppLogin,
                                    type: z._i.External
                                },
                                signupLink: {
                                    uri: nt.li.RetailOpenApp,
                                    type: z._i.External
                                }
                            }
                        }(),
                        {
                            setIsMenuOpen: t,
                            hasToResetStyle: r,
                            navigationThemeMode: i
                        } = L(),
                        a = n("shared.button.login"),
                        s = n("shared.button.signUp"),
                        u = (0, b.b)("lg"),
                        {
                            menuStyle: d
                        } = (0, v.K)();
                    return (0, o.jsx)(ni.O, {
                        mode: i,
                        children: (0, o.jsxs)(no.U, {
                            space: "s-16",
                            children: [e && a && (0, o.jsx)(A.z, {
                                link: e,
                                variant: u ? "text" : "default",
                                color: r ? "foreground" : ns(d),
                                children: a
                            }), l && s && (0, o.jsx)(A.z, {
                                "data-blockid": "signup-button",
                                link: l,
                                variant: "primary",
                                onClick: () => t(!1),
                                children: n("shared.button.signUp")
                            })]
                        })
                    })
                },
                ng = (0, c.ZP)(D.k).withConfig({
                    componentId: "sc-8b142331-0"
                })((0, d.iv)({
                    alignItems: "center",
                    overflowX: ["auto", null, null, "visible"],
                    mx: ["-s-24", null, null, 0],
                    px: ["s-24", null, null, 0],
                    "::-webkit-scrollbar": {
                        display: "none"
                    }
                })),
                np = (0, c.ZP)(A.z).withConfig({
                    componentId: "sc-8b142331-1"
                })(n => {
                    let {
                        menuStyle: e,
                        withLink: l
                    } = n;
                    return (0, d.iv)({
                        alignItems: "center",
                        marginX: "s-4",
                        transition: "".concat(na.W.transition.text, ", ").concat(na.W.transition.background),
                        whiteSpace: "nowrap",
                        minWidth: "min-content",
                        display: "block",
                        paddingX: ["10px", null, null, null, "s-20", "s-24"],
                        paddingY: "s-8",
                        backgroundColor: "transparent",
                        color: ns(e),
                        "&:hover": {
                            cursor: l ? "pointer" : "default !important",
                            color: "foreground",
                            backgroundColor: "grey-tone-10"
                        },
                        "&[aria-current='page'], &[aria-selected='true'], &[aria-pressed='true']": {
                            color: "foreground",
                            backgroundColor: "grey-tone-10"
                        }
                    })
                }),
                nh = (0, c.ZP)(r.x).withConfig({
                    componentId: "sc-8b142331-2"
                })(n => {
                    let {
                        isRightAlign: e
                    } = n;
                    return (0, d.iv)({
                        marginLeft: [null, null, null, e ? "auto" : null]
                    })
                }),
                nx = n => {
                    let {
                        children: e,
                        isRightAlign: l
                    } = n;
                    return (0, o.jsx)(nh, {
                        isRightAlign: l,
                        children: e
                    })
                },
                nb = (0, t.forwardRef)((n, e) => {
                    let {
                        isDesktop: l,
                        children: r,
                        ...i
                    } = n, {
                        getLocationProps: a,
                        getLocationLink: s,
                        locationId: u
                    } = (0, _.Yt)(), {
                        getSitemapLocation: d
                    } = (0, W.j)(), c = (0, f.U)(), {
                        changeSelectedLocationId: g,
                        incrementMenuSectionOpenCount: p,
                        indexLocations: h,
                        isMenuDesktopStyle: x,
                        isMenuOpen: b,
                        selectedLocationId: m,
                        setIsMenuOpen: v,
                        currentMenuStyle: k,
                        overLocationId: j,
                        setOverLocationId: y
                    } = L(), {
                        getSitemapLocationsByParentId: C
                    } = (0, W.j)(), w = (0, t.useMemo)(() => h.reduce((n, e) => {
                        var l;
                        return (null === (l = e.style) || void 0 === l ? void 0 : l.align) === "right" ? n[1].push(e) : n[0].push(e), n
                    }, [
                        [],
                        []
                    ]), [h]), I = w[0].length, O = w.flat(), Y = u && d(u) || void 0, S = (0, t.useRef)(!1);
                    return (0, o.jsx)(ng, { ...i,
                        ref: e,
                        children: O.map((n, e) => {
                            var i, u, d;
                            let {
                                locationId: h
                            } = n, {
                                title: f,
                                type: w
                            } = null !== (u = a(h)) && void 0 !== u ? u : {}, O = C(h), L = m === h, W = e === I, P = O[0], {
                                type: T
                            } = null !== (d = a(null == P ? void 0 : P.locationId)) && void 0 !== d ? d : {}, D = (null == P ? void 0 : null === (i = P.items) || void 0 === i ? void 0 : i.length) && T !== z._i.Section ? P : void 0, M = null == D ? void 0 : D.resourceId, Z = M && M === (null == Y ? void 0 : Y.resourceId), _ = () => {
                                (c || x) && j !== h && (y(h), g(h), p())
                            }, E = () => {
                                y(void 0)
                            };
                            return w === z._i.Section && D && l ? (0, o.jsxs)(t.Fragment, {
                                children: [(0, o.jsx)(nx, {
                                    isRightAlign: W,
                                    children: (0, o.jsx)(np, {
                                        withLink: !0,
                                        menuStyle: k,
                                        "aria-current": b && L ? "page" : void 0,
                                        link: s(D.locationId),
                                        onTouchStart: () => S.current = !0,
                                        onClick: n => {
                                            S.current || Z ? (n.preventDefault(), n.stopPropagation()) : v(!1)
                                        },
                                        onFocus: () => g(h),
                                        onMouseEnter: _,
                                        onMouseLeave: E,
                                        children: f
                                    })
                                }), L && r]
                            }, h) : w === z._i.Section ? (0, o.jsxs)(t.Fragment, {
                                children: [(0, o.jsx)(nx, {
                                    isRightAlign: W,
                                    children: (0, o.jsx)(np, {
                                        withLink: !1,
                                        menuStyle: k,
                                        "aria-current": b && L ? "page" : void 0,
                                        onClick: () => {
                                            g(h), p()
                                        },
                                        onFocus: () => g(h),
                                        onMouseEnter: _,
                                        onMouseLeave: E,
                                        children: (0, o.jsx)(R.xv, {
                                            __css: {
                                                pointerEvents: "none"
                                            },
                                            children: f
                                        })
                                    })
                                }), L && r]
                            }, h) : (0, o.jsxs)(t.Fragment, {
                                children: [(0, o.jsx)(nh, {
                                    isRightAlign: W,
                                    children: (0, o.jsx)(np, {
                                        withLink: !0,
                                        menuStyle: k,
                                        link: s(h),
                                        onMouseEnter: () => x && v(!1),
                                        onFocus: () => x && v(!1),
                                        onClick: () => v(!1),
                                        children: f
                                    })
                                }), L && r]
                            }, h)
                        })
                    })
                });
            nb.displayName = "NavigationTopLevel";
            var nf = l(99939),
                nm = l(23556);
            let {
                publicRuntimeConfig: nv
            } = (0, x.i)(), nk = (0, c.ZP)(r.x).withConfig({
                componentId: "sc-fdd86e15-0"
            })(n => {
                let {
                    menuStyle: e,
                    withBorder: l,
                    opaque: o,
                    theme: t,
                    scrollDirection: r,
                    offset: i
                } = n, a = i && i - 1, s = function() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.YO.TransparentDefault;
                    switch (n) {
                        case I.YO.TransparentLight:
                        case I.YO.TransparentDark:
                        case I.YO.TransparentDefault:
                            return "transparent";
                        case I.YO.SolidDark:
                            return na.W.color.black;
                        case I.YO.SolidLight:
                            return na.W.color.white;
                        case I.YO.Default:
                        default:
                            return na.W.color.background
                    }
                }(e), u = function() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.YO.TransparentDefault,
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n) {
                        case I.YO.TransparentLight:
                        case I.YO.TransparentDark:
                        case I.YO.TransparentDefault:
                            return "transparent";
                        case I.YO.SolidDark:
                            return na.W.color.black_80;
                        case I.YO.SolidLight:
                            return na.W.color.white_80;
                        case I.YO.Default:
                        default:
                            return e ? na.W.color.black_80 : na.W.color.white_80
                    }
                }(e, (0, k.j)(t.mode));
                return (0, d.ZP)({
                    backgroundColor: [e === I.YO.Default ? "grey-tone-2" : s, null, s],
                    color: ns(e),
                    boxSizing: "content-box",
                    borderBottom: l ? "".concat(1, "px solid") : "none",
                    borderBottomColor: "grey-tone-8",
                    position: "sticky",
                    top: "down" === r ? [-t.navigation.height.all + a, null, null, -t.navigation.height.lg + a, null, -t.navigation.height.xxl + a] : i,
                    width: "100%",
                    height: [t.navigation.height.all, null, null, t.navigation.height.lg, null, t.navigation.height.xxl],
                    zIndex: t.navigation.zIndex,
                    transition: "background-color 200ms ease, top 200ms ease, opacity 300ms ease",
                    "&:hover": {
                        transition: "top 200ms ease"
                    },
                    "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) ": {
                        backdropFilter: e === I.YO.Default ? "blur(16px)" : "none",
                        backgroundColor: o ? u : null
                    }
                })
            }), nj = (0, c.ZP)(r.x).withConfig({
                componentId: "sc-fdd86e15-1"
            })(n => {
                let {
                    theme: e
                } = n;
                return (0, d.ZP)({
                    alignItems: "center",
                    display: "flex",
                    height: "100%",
                    justifyContent: "space-between",
                    marginX: "auto",
                    maxWidth: e.layout.maxWidth,
                    paddingY: ["s-12", null, null, "s-16"],
                    paddingX: ["s-20", null, null, 0],
                    width: "100%"
                })
            }), ny = (0, c.ZP)(r.x).withConfig({
                componentId: "sc-fdd86e15-2"
            })((0, d.ZP)({
                alignItems: "center",
                columnGap: "s-16",
                display: ["none", null, null, "grid"],
                gridTemplateColumns: "1fr auto",
                marginLeft: "s-32"
            })), nC = n => {
                let {
                    children: e
                } = n, {
                    setNavigationRef: l
                } = (0, nm.o)(), {
                    topBannerRef: r
                } = (0, O.n)(), a = (0, i.y)(r, Boolean(r.current)), {
                    isMenuOpen: s,
                    scrolled: u,
                    scrollDirection: d,
                    isMenuHighlighted: c,
                    setMenuHighlighted: g,
                    currentMenuStyle: p,
                    hasThemeMismatch: h
                } = L(), x = (0, b.b)("lg"), f = x && h && !1, m = (0, t.useCallback)(n => {
                    l(n)
                }, [l]);
                return (0, o.jsx)(nk, {
                    onMouseEnter: () => g(f),
                    onMouseLeave: () => g(!1),
                    "data-blockid": "navigation",
                    use: "header",
                    role: "banner",
                    opaque: !c && !s,
                    withBorder: u && !s,
                    menuStyle: p,
                    scrollDirection: d,
                    offset: a.height,
                    ref: m,
                    children: e
                })
            }, nw = n => {
                let {
                    children: e
                } = n, l = L(), t = (0, f.U)(), r = () => {
                    !t && l.isMenuOpen && l.setIsMenuOpen(!1)
                }, i = n => {
                    let e = n.currentTarget;
                    requestAnimationFrame(() => {
                        e.contains(document.activeElement) || r()
                    })
                };
                return (0, o.jsx)(nb, {
                    isDesktop: !0,
                    onMouseLeave: r,
                    onBlur: i,
                    children: e
                })
            }, nI = n => {
                let {
                    children: e
                } = n;
                return (0, o.jsxs)(ny, {
                    width: e ? "100%" : "auto",
                    children: [e, (0, o.jsx)(nc, {})]
                })
            }, nO = n => {
                let {
                    children: e
                } = n, l = (0, m.T)(), t = L();
                return (0, o.jsxs)(r.x, {
                    hide: "lg-*",
                    children: [(0, o.jsx)(a.h, {
                        onClick: () => t.setIsMenuOpen(n => !n),
                        ref: t.navigationButtonMenuRef,
                        "aria-label": l(t.isMenuOpen ? "shared.button.close" : "shared.button.openMenu"),
                        useIcon: t.isMenuOpen ? s.X : u.v
                    }), e]
                })
            }, nY = (0, c.ZP)(r.x).withConfig({
                componentId: "sc-fdd86e15-3"
            })(n => {
                let {
                    theme: e
                } = n;
                return (0, d.ZP)({
                    content: '""',
                    backgroundColor: "black-40",
                    display: ["none", "none", "none", "block"],
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: e.navigation.zIndex - 1
                })
            }), nL = n => {
                let {
                    children: e
                } = n, l = (0, nf.H)(), t = (0, f.U)(), {
                    menuStyle: r
                } = (0, v.K)();
                return (0, o.jsxs)(Y.Provider, {
                    value: l,
                    children: [l.isMenuOpen && (0, o.jsx)(nY, {}), (0, o.jsx)(nC, {
                        children: (0, o.jsxs)(nj, {
                            children: [(0, o.jsx)(y.r, {
                                value: l.indexLink,
                                children: (0, o.jsx)(C.a, {
                                    color: l.hasToResetStyle ? void 0 : ns(r)
                                })
                            }), e]
                        })
                    }), t || (0, o.jsx)(nd, {
                        isOpen: l.isMenuOpen,
                        ref: l.navigationSignUpButtonsRef,
                        children: (0, o.jsx)(nc, {})
                    })]
                })
            }, nW = () => {
                let n = (0, b.b)("lg");
                return (0, o.jsxs)(nL, {
                    children: [(0, o.jsx)(nI, {
                        children: (0, o.jsx)(nw, {
                            children: n && (0, o.jsx)(nl, {})
                        })
                    }), (0, o.jsx)(nO, {
                        children: !n && (0, o.jsx)(nl, {
                            children: (0, o.jsx)(nb, {
                                isDesktop: !1
                            })
                        })
                    })]
                })
            };
            nW.Layout = nL, nW.Menu = nw, nW.Desktop = nI, nW.Mobile = nO;
            let nS = () => {
                let n = (0, nf.H)(),
                    {
                        locale: e
                    } = (0, h.useRouter)(),
                    {
                        region: l
                    } = (0, j.i4)(e),
                    t = w.sv.has(l),
                    r = "https://www.".concat(nv.websiteDomain, "/"),
                    {
                        menuStyle: i
                    } = (0, v.K)();
                return (0, o.jsx)(Y.Provider, {
                    value: n,
                    children: (0, o.jsx)(nC, {
                        children: (0, o.jsx)(nj, {
                            children: t ? (0, o.jsx)(C.a, {
                                color: ns(i)
                            }) : (0, o.jsx)(p(), {
                                href: r,
                                title: "Revolut",
                                children: (0, o.jsx)(C.a, {
                                    color: ns(i)
                                })
                            })
                        })
                    })
                })
            }
        }
    }
]);