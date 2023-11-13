"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [121], {
        79253: function(e, t, l) {
            l.d(t, {
                r: function() {
                    return f
                }
            });
            var n = l(85893),
                o = l(67294),
                u = l(939),
                r = l(14141),
                i = l(29867),
                a = l(35402),
                s = l(34254),
                c = l(6206);
            let d = (0, r.ZP)(u.xv).withConfig({
                    componentId: "sc-85172584-0"
                })({
                    wordBreak: "break-word"
                }),
                f = (0, o.forwardRef)((e, t) => {
                    let {
                        value: l,
                        gaEvent: o,
                        onClick: u,
                        ...r
                    } = e, f = (0, i.U)(), {
                        trackLink: h
                    } = (0, a.z$)(), v = e => {
                        if (f) {
                            e.preventDefault(), e.stopPropagation();
                            return
                        }(0, s.mf)(u) && u(e), h(e, o, l)
                    };
                    return l ? (0, n.jsx)(c._, {
                        value: l,
                        children: (0, n.jsx)(d, {
                            ref: t,
                            use: "a",
                            onClick: v,
                            ...r
                        })
                    }) : (0, n.jsx)(d, {
                        ref: t,
                        use: "a",
                        onClick: v,
                        ...r
                    })
                });
            f.displayName = "Link"
        },
        99939: function(e, t, l) {
            l.d(t, {
                H: function() {
                    return M
                }
            });
            var n = l(50361),
                o = l.n(n),
                u = l(67294),
                r = l(42378),
                i = l(35402),
                a = l(84533),
                s = l(74183),
                c = l(68078),
                d = l(29867),
                f = l(66639),
                h = l(23493),
                v = l.n(h),
                m = l(18754),
                g = l(40126),
                p = l(28001),
                w = l(44017),
                x = l(79980),
                k = l(34254),
                b = l(79248);

            function C() {
                document.body.style.overflow = "", document.documentElement.style.scrollbarGutter = "auto"
            }
            var Y = l(58944);

            function M() {
                var e;
                let {
                    trackEvent: t
                } = (0, i.z$)(), {
                    isBusiness: l
                } = (0, a.C)(), {
                    indexLocationId: n,
                    getSitemapIndexLocations: h,
                    getSitemapLocationsByParentId: M
                } = (0, s.j)(), {
                    getLocationProps: S,
                    getLocationLink: z,
                    getLocationTitle: O
                } = (0, c.Yt)(), j = (0, u.useRef)(null), R = (0, u.useRef)(null), y = (0, u.useRef)(null), [D, E] = (0, u.useState)(), L = (0, d.U)(), [_, I] = (0, u.useState)(L), T = (0, u.useRef)(0), W = (0, f.b)("lg"), {
                    maxScrollableHeight: B
                } = function(e) {
                    let {
                        isDesktopView: t,
                        isLockedScroll: l,
                        navigationMenuRef: n,
                        navigationSignUpButtonsRef: o
                    } = e, [r, i] = (0, u.useState)("");
                    return (0, u.useEffect)(() => {
                        let e = null == n ? void 0 : n.current,
                            u = null == o ? void 0 : o.current;
                        if (!e) {
                            t || i(""), C();
                            return
                        }
                        if (l) {
                            var r;
                            let {
                                top: l
                            } = e.getBoundingClientRect(), n = window.innerHeight, o = null !== (r = null == u ? void 0 : u.clientHeight) && void 0 !== r ? r : 0;
                            t ? i("".concat(Math.round((n - l) * .9), "px")) : e.style.height = "".concat(n - l - o, "px"), document.body.style.overflow = "hidden", document.documentElement.style.scrollbarGutter = "stable"
                        } else e.style.height = "", i(""), C()
                    }, [t, l, n, o]), {
                        maxScrollableHeight: r
                    }
                }({
                    isDesktopView: W,
                    isLockedScroll: _,
                    navigationMenuRef: R,
                    navigationSignUpButtonsRef: y
                }), H = (0, u.useMemo)(() => h().filter(e => e.scope.includes(x.d.Menu)), [h]), N = null == H ? void 0 : null === (e = H[0]) || void 0 === e ? void 0 : e.locationId, V = (0, u.useMemo)(() => n ? z(n) : void 0, [z, n]), F = (0, u.useMemo)(() => n && O(n), [O, n]), K = (0, u.useMemo)(() => H.map(e => {
                    let {
                        locationId: t
                    } = e;
                    return t
                }), [H]);
                (0, u.useEffect)(() => {
                    E(N)
                }, [N]);
                let P = (0, u.useMemo)(() => M(D).filter(e => {
                        let {
                            locationId: t,
                            scope: l
                        } = e;
                        return l.includes(x.d.Menu) && !(null == K ? void 0 : K.includes(t))
                    }), [D, M, K]),
                    G = (0, u.useMemo)(() => {
                        if (2 === P.length) {
                            let e = o()(P);
                            return e[1].items = [e[1].locationId], e
                        }
                        return P
                    }, [P]);
                (0, u.useEffect)(() => {
                    let e = G.find(e => {
                        var t;
                        return null === (t = e.items) || void 0 === t ? void 0 : t.length
                    });
                    W && $(null == e ? void 0 : e.locationId)
                }, [W, G]);
                let U = (0, u.useCallback)(e => {
                        W && !_ && I(!0), E(e)
                    }, [W, _]),
                    [Z, $] = (0, u.useState)(),
                    J = (0, u.useCallback)((e, t) => {
                        var l, n, o, u;
                        let {
                            unlocalisedValue: r
                        } = null !== (l = S(e)) && void 0 !== l ? l : {}, {
                            unlocalisedValue: i
                        } = null !== (n = S(null != t ? t : "")) && void 0 !== n ? n : {}, {
                            unlocalisedValue: a
                        } = null !== (o = S(null != Z ? Z : "")) && void 0 !== o ? o : {}, {
                            unlocalisedValue: s
                        } = null !== (u = S(null != D ? D : "")) && void 0 !== u ? u : {};
                        return {
                            item: r,
                            path: [s, a, i].filter(k.fQ)
                        }
                    }, [S, D, Z]),
                    Q = (0, u.useCallback)((e, n) => {
                        let {
                            item: o,
                            path: u
                        } = J(e, n);
                        t({
                            action: "MenuLink_Click",
                            component_name: "navigation",
                            vertical: l ? "Business" : "Retail",
                            payload: {
                                item: o,
                                path: JSON.stringify(u)
                            }
                        })
                    }, [J, l, t]),
                    q = (0, u.useCallback)(() => {
                        t({
                            action: "MenuSection_Open",
                            component_name: "navigation",
                            vertical: l ? "Business" : "Retail",
                            payload: {
                                count: T.current
                            }
                        }), T.current = 0
                    }, [l, t]);
                (0, u.useEffect)(() => {
                    !_ && T.current > 0 && q()
                }, [_, q]);
                let A = () => {
                        T.current += 1
                    },
                    X = (0, u.useMemo)(() => P.some(e => {
                        let {
                            items: t
                        } = e;
                        return null == t ? void 0 : t.length
                    }), [P]),
                    {
                        scrolled: ee,
                        scrollDirection: et
                    } = function() {
                        let [e, t] = (0, u.useState)(!1), [l, n] = (0, u.useState)("initial"), [o, r] = (0, u.useState)(0), i = (0, u.useContext)(g.im), a = (0, p.n)(), s = (0, u.useMemo)(() => Object.values(null != i ? i : {}).some(e => e.component_name === m._C.HeroCarousel), [i]), c = s ? 10 : 100;
                        return (0, u.useEffect)(() => {
                            let e = v()(() => {
                                t(window.scrollY > a), Math.abs(window.scrollY - o) > 100 && (r(window.scrollY), n(window.scrollY < o ? "up" : "down"))
                            }, null != c ? c : 100);
                            return window.addEventListener("scroll", e), () => {
                                window.removeEventListener("scroll", e)
                            }
                        }, [a, o, c]), (0, u.useMemo)(() => ({
                            scrolled: e,
                            scrollDirection: l
                        }), [l, e])
                    }(),
                    [el, en] = (0, u.useState)(!1),
                    {
                        menuStyle: eo
                    } = (0, w.K)(),
                    eu = ee || _ || el,
                    er = eu ? m.YO.Default : null != eo ? eo : m.YO.TransparentDefault,
                    ei = function(e) {
                        let {
                            menuStyle: t
                        } = (0, w.K)();
                        return e || t === m.YO.Default || t === m.YO.TransparentDefault ? void 0 : t === m.YO.TransparentDark || t === m.YO.SolidDark ? Y.I.Dark : t === m.YO.TransparentLight || t === m.YO.SolidLight ? Y.I.Light : void 0
                    }(eu),
                    ea = er === m.YO.SolidLight || er === m.YO.TransparentLight,
                    es = er === m.YO.SolidDark || er === m.YO.TransparentDark,
                    ec = (0, r.F)(),
                    ed = (0, b.j)(ec.mode),
                    [ef, eh] = (0, u.useState)(void 0);
                return {
                    maxScrollableHeight: B,
                    overLocationId: ef,
                    setOverLocationId: eh,
                    hasThemeMismatch: es && !ed || ea && ed,
                    scrolled: ee,
                    scrollDirection: et,
                    changeSelectedLocationId: U,
                    indexLink: V,
                    indexLocations: H,
                    indexTitle: F,
                    isMenuDesktopStyle: W,
                    isMenuMultiLevel: X,
                    isMenuOpen: _,
                    menuItems: G,
                    navigationButtonMenuRef: j,
                    navigationMenuRef: R,
                    navigationSignUpButtonsRef: y,
                    selectedLocationId: D,
                    setIsMenuOpen: I,
                    incrementMenuSectionOpenCount: A,
                    trackMenuLinkClick: Q,
                    navigationThemeMode: ei,
                    isMenuHighlighted: el,
                    setMenuHighlighted: en,
                    hasToResetStyle: eu,
                    currentMenuStyle: er
                }
            }
        },
        98637: function(e, t, l) {
            l.d(t, {
                a: function() {
                    return s
                }
            });
            var n = l(85893),
                o = l(67294),
                u = l(22674),
                r = l(31346),
                i = l(14141);
            let a = i.ZP.svg.withConfig({
                    componentId: "sc-81786132-0"
                })(e => {
                    let {
                        variant: t
                    } = e;
                    return {
                        marginTop: "-2px",
                        height: "small" === t ? u.W.size.s16 : u.W.size.s24,
                        ["@media ".concat(u.W.media.xxl)]: {
                            height: "small" === t ? u.W.size.s24 : u.W.size.s32
                        }
                    }
                }),
                s = (0, o.forwardRef)((e, t) => {
                    let {
                        color: l = u.W.color.foreground,
                        variant: o = "default",
                        title: i
                    } = e;
                    return (0, n.jsx)(r.k, {
                        alignItems: "center",
                        flex: "1 1",
                        height: "small" === o ? {
                            all: "s-24",
                            xxl: "s-32"
                        } : {
                            all: "s-32",
                            xxl: "s-40"
                        },
                        ref: t,
                        use: "span",
                        title: "Revolut",
                        children: (0, n.jsxs)(a, {
                            fill: l,
                            variant: o,
                            viewBox: "0 0 145 32",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [i && (0, n.jsx)("title", {
                                children: i
                            }), (0, n.jsx)("path", {
                                clipRule: "evenodd",
                                d: "m98.8039 0h5.6871v31.7312h-5.6871zm46.0571 13.3685v-4.92408h-5.881v-6.41996h-5.687v23.40534c0 2.1506.541 3.7895 1.608 4.8714 1.066 1.0828 2.728 1.6317 4.939 1.6317h5.021v-4.924h-3.674c-.799 0-1.372-.1757-1.704-.5226-.305-.3175-.503-1.1195-.503-2.043v-11.0748zm-84.6893 12.1865 5.8804-17.11125h5.9749l-8.4889 23.28775h-6.7327l-8.489-23.28775h5.9749zm63.8513-5.4451c0 1.4743-.224 2.7569-.664 3.8121-.437 1.0495-1.063 1.8541-1.861 2.3908s-1.779.8089-2.916.8089c-1.626 0-2.853-.5344-3.646-1.5878-.802-1.0646-1.209-2.6781-1.209-4.7954v-12.29412h-5.687v12.92272c0 2.0122.251 3.7189.748 5.0721.497 1.3573 1.18 2.4614 2.029 3.281.849.8187 1.84 1.41 2.946 1.7581 1.1.3463 2.284.5217 3.518.5217 1.778 0 3.25-.3225 4.373-.9586 1.024-.5819 1.883-1.2622 2.555-2.0251l.509 2.7148h4.992v-23.28672h-5.687zm-33.913-10.43745c-1.7923-.99372-3.9206-1.49716-6.3249-1.49716-2.3749 0-4.4953.50344-6.3024 1.49684-1.8092.99597-3.2308 2.40247-4.2254 4.18037-.9931 1.7763-1.4966 3.8817-1.4966 6.2574 0 2.3466.5035 4.4373 1.4966 6.2136.994 1.7773 2.4159 3.1835 4.2254 4.1793 1.8071.9935 3.9276 1.4969 6.3024 1.4969 2.4042 0 4.5325-.5034 6.3249-1.4972 1.7942-.9953 3.2082-2.4014 4.2026-4.179.9934-1.7773 1.4971-3.868 1.4971-6.2136 0-2.3748-.5037-4.4802-1.4971-6.2575-.995-1.7781-2.4087-3.1847-4.2026-4.17995zm-3.0047 16.63905c-.9162.5966-2.0332.8993-3.3199.8993-1.2572 0-2.367-.3026-3.2986-.8995-.9332-.5976-1.665-1.441-2.1757-2.5072-.5128-1.0672-.7732-2.3099-.7732-3.6942 0-1.4128.2601-2.6627.7732-3.7154.5104-1.0518 1.2428-1.8955 2.1769-2.5081.9313-.612 2.0408-.9222 3.2973-.9222 1.2861 0 2.4025.3102 3.319.9215.9191.613 1.6443 1.457 2.1559 2.5091.5125 1.0552.7725 2.3052.7725 3.7152 0 1.3811-.26 2.6242-.7725 3.6941-.5115 1.0664-1.2364 1.9099-2.1549 2.5074zm-81.19475-18.48035h-5.91055v23.90035h5.91055zm18.53525 1.36671c0-5.07148-4.1298-9.19751668-9.2063-9.19751668h-15.2395v5.10407668h14.5149c2.2974 0 4.2004 1.80488 4.2425 4.02316.021 1.11072-.3959 2.15902-1.1738 2.95172-.7782.7929-1.818 1.2299-2.9278 1.2299h-5.65434c-.20074 0-.36413.1631-.36413.3639v4.5363c0 .0772.02383.1509.06866.213l9.59341 13.3092h7.0225l-9.6157-13.3456c4.8425-.2431 8.7396-4.3118 8.7396-9.18814zm18.1745.33907c-1.7026-.90368-3.7242-1.36164-6.0087-1.36164-2.2874 0-4.3325.50376-6.0787 1.4978-1.7491.99501-3.1251 2.40181-4.0897 4.18061-.9636 1.7748-1.452 3.8949-1.452 6.3017 0 2.3457.4959 4.4357 1.4746 6.2123.9808 1.7807 2.3955 3.1797 4.2041 4.158 1.8052.9784 3.9706 1.4743 6.4354 1.4743 1.9554 0 3.7114-.3663 5.2192-1.0894 1.5081-.7249 2.7393-1.712 3.6596-2.9341.8742-1.1615 1.464-2.4752 1.7525-3.9042l.0311-.1525h-5.6559l-.0267.0916c-.3114 1.0659-.9156 1.9081-1.7964 2.5038-.9454.6405-2.1066.9654-3.4519.9654-1.1402 0-2.17-.2443-3.0605-.7261-.8862-.479-1.5791-1.164-2.059-2.0367-.4818-.8757-.756-1.9294-.8146-3.1254v-.187h17.0842l.0191-.1044c.0596-.3278.0979-.6656.1145-1.0053.0141-.331.0223-.6616.0223-.9953-.0305-2.2563-.5348-4.2409-1.4987-5.8993-.9677-1.6603-2.3215-2.9605-4.0238-3.86417zm-2.0724 4.38547c.9717.8178 1.5762 1.9799 1.7979 3.4564h-11.2467c.1285-.958.4466-1.7877.9463-2.4683.5242-.7139 1.1957-1.2748 1.9962-1.6672.8014-.3936 1.6813-.5934 2.6148-.5934 1.5781-.0001 2.8874.4281 3.8915 1.2725z",
                                fillRule: "evenodd"
                            })]
                        })
                    })
                });
            s.displayName = "RevolutLogo"
        },
        87955: function(e, t, l) {
            l.d(t, {
                O: function() {
                    return s
                }
            });
            var n = l(85893),
                o = l(30116),
                u = l(42378),
                r = l(33154),
                i = l(79248);
            let a = e => {
                    let {
                        backgroundColor: t,
                        ...l
                    } = e;
                    return (0, n.jsx)(o.x, {
                        backgroundColor: t,
                        color: "foreground",
                        width: "100%",
                        ...l
                    })
                },
                s = e => {
                    let {
                        mode: t,
                        children: l,
                        backgroundColor: o
                    } = e, s = (0, u.F)();
                    return t && t !== s.mode ? (0, n.jsx)(r.f, {
                        theme: s,
                        mode: (0, i.M)(t),
                        children: (0, n.jsx)(a, {
                            backgroundColor: o,
                            children: l
                        })
                    }) : (0, n.jsx)(n.Fragment, {
                        children: l
                    })
                }
        },
        66639: function(e, t, l) {
            l.d(t, {
                b: function() {
                    return o
                }
            });
            var n = l(33715);
            let o = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    l = (0, n.s)(e);
                return null === l ? t : l
            }
        },
        28001: function(e, t, l) {
            l.d(t, {
                n: function() {
                    return r
                }
            });
            var n = l(93141),
                o = l(22674),
                u = l(62188);

            function r() {
                let e = (0, n.a)(o.W.media.xxl),
                    t = (0, n.a)(o.W.media.lg);
                return e ? u.RY : t ? u.cB : u.K7
            }
        }
    }
]);