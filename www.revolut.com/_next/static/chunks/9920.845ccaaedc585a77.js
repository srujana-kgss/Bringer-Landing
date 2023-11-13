"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9920], {
        49920: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return en
                }
            });
            var l = n(85893),
                i = n(31346),
                o = n(28193),
                r = n(30116),
                a = n(14141),
                s = n(37947),
                d = n(67294),
                c = n(56607),
                u = n(94910),
                g = n(87747),
                h = n(18754),
                p = n(48983);
            let f = e => {
                var t, n, l, i, o, r;
                return (null === (t = null == e ? void 0 : e.content.components) || void 0 === t ? void 0 : t.remittanceWidget) ? {
                    id: e.id,
                    type: h._C.Widget,
                    content: {
                        widget: p.l.RemittanceWidget,
                        params: e.content.components.remittanceWidget
                    }
                } : (null === (n = null == e ? void 0 : e.content.components) || void 0 === n ? void 0 : n.acquiringPlansWidget) ? {
                    id: e.id,
                    type: h._C.Widget,
                    content: {
                        widget: p.l.AcquiringPlansWidget,
                        params: void 0
                    }
                } : (null === (l = null == e ? void 0 : e.content.components) || void 0 === l ? void 0 : l.exchangeRatesWidget) ? {
                    id: e.id,
                    type: h._C.Widget,
                    content: {
                        widget: p.l.ExchangeRatesWidget,
                        params: e.content.components.exchangeRatesWidget
                    }
                } : (null === (i = null == e ? void 0 : e.content.components) || void 0 === i ? void 0 : i.businessRemittanceWidget) ? {
                    id: e.id,
                    type: h._C.Widget,
                    content: {
                        widget: p.l.BusinessRemittanceWidget,
                        params: e.content.components.businessRemittanceWidget
                    }
                } : (null === (o = null == e ? void 0 : e.content.components) || void 0 === o ? void 0 : o.businessContactSalesFormWidget) ? {
                    id: e.id,
                    type: h._C.Widget,
                    content: {
                        widget: p.l.BusinessContactSalesFormWidget,
                        params: e.content.components.businessContactSalesFormWidget
                    }
                } : (null === (r = null == e ? void 0 : e.content.components) || void 0 === r ? void 0 : r.cryptoConvertorWidget) ? {
                    id: e.id,
                    type: h._C.Widget,
                    content: {
                        widget: p.l.CryptoConvertorWidget,
                        params: e.content.components.cryptoConvertorWidget
                    }
                } : void 0
            };
            var v = n(40165),
                m = n(23115),
                x = n(66639),
                j = n(16970),
                w = n(46593),
                y = n(36761),
                b = n(37903);
            let W = e => {
                let t = new Date().getTime();
                if (t >= e) return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
                let n = (e - t) / 1e3,
                    l = Math.floor(n / 86400);
                n -= 86400 * l;
                let i = Math.floor(n / 3600) % 24;
                n -= 3600 * i;
                let o = Math.floor(n / 60) % 60;
                n -= 60 * o;
                let r = Math.floor(n % 60);
                return {
                    days: l,
                    hours: i,
                    minutes: o,
                    seconds: r
                }
            };
            var C = n(22674),
                k = n(68466),
                S = n(939);
            let I = {
                    width: ["42px", null, null, "64px"],
                    height: ["50px", null, null, "72px"],
                    fontSize: ["28px", null, null, "40px"]
                },
                B = (0, a.ZP)(i.k).withConfig({
                    componentId: "sc-54ed6e1-0"
                })((0, s.iv)({
                    backgroundColor: "grouped-background",
                    borderRadius: 4,
                    color: "foreground",
                    fontWeight: 600,
                    alignItems: "center",
                    justifyContent: "center",
                    ...I
                })),
                R = (0, a.ZP)(r.x).withConfig({
                    componentId: "sc-54ed6e1-1"
                })({
                    backgroundColor: C.W.color.groupedBackground,
                    width: "100%",
                    height: 2
                }),
                P = e => {
                    let {
                        isReady: t = !0,
                        value: n,
                        label: i
                    } = e, r = (0, d.useMemo)(() => void 0 === n ? "" : n.toString().length > 1 ? n : "0".concat(n), [n]);
                    return (0, l.jsxs)(c.g, {
                        align: "center",
                        space: "s-8",
                        children: [t ? (0, l.jsxs)(o.Ig, {
                            children: [(0, l.jsx)(B, {
                                children: r
                            }), (0, l.jsx)(o.e2, {
                                width: "100%",
                                top: "calc(50% - 1px)",
                                children: (0, l.jsx)(R, {})
                            })]
                        }) : (0, l.jsx)(k.O, {
                            height: I.height,
                            width: I.width,
                            borderRadius: 4
                        }), (0, l.jsx)(S.xv, {
                            use: "span",
                            variant: "caption",
                            color: "foreground",
                            children: i
                        })]
                    })
                },
                A = (0, a.ZP)(i.k).withConfig({
                    componentId: "sc-70c9043b-0"
                })((0, s.iv)({
                    fontWeight: 600,
                    fontSize: ["28px", null, null, "40px"],
                    marginY: "s-8"
                })),
                E = e => {
                    let {
                        targetDate: t
                    } = e, [{
                        days: n,
                        hours: i,
                        minutes: o,
                        seconds: r
                    }, a] = (0, d.useState)(W(t)), [s, c] = (0, d.useState)(!1), u = !n && !i && !o && !r;
                    return (0, d.useEffect)(() => c(!0), []), (0, d.useEffect)(() => {
                        let e;
                        return u ? s && window.location.reload() : e = setInterval(() => a(W(t)), 1e3), () => {
                            e && clearInterval(e)
                        }
                    }, [t, u]), (0, l.jsxs)(b.U, {
                        space: "s-8",
                        children: [(0, l.jsx)(P, {
                            label: "d",
                            value: n,
                            isReady: s
                        }), (0, l.jsx)(A, {
                            children: ":"
                        }), (0, l.jsx)(P, {
                            label: "h",
                            value: i,
                            isReady: s
                        }), (0, l.jsx)(A, {
                            children: ":"
                        }), (0, l.jsx)(P, {
                            label: "m",
                            value: o,
                            isReady: s
                        }), (0, l.jsx)(A, {
                            children: ":"
                        }), (0, l.jsx)(P, {
                            label: "s",
                            value: r,
                            isReady: s
                        })]
                    })
                };
            var T = n(96944),
                F = n(79248),
                M = n(6600);
            let _ = (0, a.ZP)(o.gb).withConfig({
                    componentId: "sc-232df0d9-0"
                })(e => {
                    let {
                        theme: t
                    } = e;
                    return (0, s.iv)({
                        backgroundColor: C.W.color.greyTone50,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        left: 0,
                        padding: "".concat(C.W.space.s12, " 0"),
                        right: 0,
                        zIndex: 1,
                        "@supports (backdrop-filter: none) ": {
                            backdropFilter: "blur(16px)",
                            backgroundColor: (0, F.j)(t.mode) ? C.W.color.black_80 : C.W.color.white_80
                        }
                    })
                }),
                q = e => {
                    let {
                        buttonRef: t,
                        isFloating: n
                    } = function() {
                        let {
                            layoutHeight: e
                        } = (0, M.X)(), t = (0, d.useRef)(null), [n, l] = (0, d.useState)(!1), i = (0, x.b)("lg");
                        return (0, d.useEffect)(() => {
                            let o = () => {
                                let o = t.current;
                                if (i || !o || !e) return;
                                let {
                                    scrollY: r,
                                    innerHeight: a
                                } = window, s = o.offsetTop + o.offsetHeight, d = r > s && r < e - a;
                                !n && d ? l(!0) : n && !d && l(!1)
                            };
                            return t.current && o(), i || window.addEventListener("scroll", o, {
                                passive: !0
                            }), () => window.removeEventListener("scroll", o)
                        }, [n, i, e]), {
                            buttonRef: t,
                            isFloating: n
                        }
                    }();
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.z, {
                            ref: t,
                            ...e,
                            variant: "primary"
                        }), (0, l.jsx)(T.n, { in: n,
                            offsetX: 0,
                            offsetY: -32,
                            children: (0, l.jsx)(_, {
                                hide: "lg-*",
                                children: (0, l.jsx)(u.z, { ...e,
                                    variant: "primary"
                                })
                            })
                        })]
                    })
                },
                z = [m.tJ.A, m.tJ.B, m.tJ.Br, m.tJ.Em, m.tJ.I, m.tJ.Small, m.tJ.Strong],
                L = (0, a.ZP)(g.o).withConfig({
                    componentId: "sc-1479b7ea-0"
                })((0, s.iv)({
                    position: "relative",
                    display: "flex",
                    flex: "1",
                    flexDirection: ["column", null, null, "row"],
                    justifyContent: [null, null, null, "space-between"],
                    paddingBottom: 0,
                    paddingTop: ["s-40", null, null, 0]
                })),
                Z = (0, a.ZP)(r.x).withConfig({
                    componentId: "sc-1479b7ea-1"
                })(e => {
                    let {
                        align: t,
                        isAlignLeftMd: n
                    } = e;
                    return (0, s.iv)({
                        width: "100%",
                        alignContent: "center",
                        display: "grid",
                        gap: ["s-16", null, null, "s-24", null, "s-32"],
                        height: "auto",
                        marginX: ["auto", null, null, "start" === t ? 0 : "auto"],
                        minHeight: [null, null, null, 200],
                        textAlign: ["start", null, n ? null : t, t],
                        justifyItems: ["start", null, n ? null : t, t],
                        maxWidth: [null, null, null, "start" === t ? "65%" : void 0]
                    })
                }),
                D = e => {
                    var t, n;
                    let {
                        id: o,
                        isAlignLeftMd: r,
                        content: {
                            description: a,
                            button: s,
                            buttonSecondary: g,
                            caption: h,
                            components: p = {},
                            style: {
                                align: b
                            } = {},
                            title: W
                        }
                    } = e, C = (0, m.Ty)({
                        allowedTags: z
                    }), k = C(a), S = (0, x.b)("lg"), I = f(e), B = (0, d.useMemo)(() => I && !S ? "center" : "left" === b ? "start" : null != b ? b : "center", [b, S, I]);
                    return (0, l.jsxs)(L, {
                        children: [(0, l.jsxs)(Z, {
                            align: B,
                            isAlignLeftMd: r,
                            children: [(0, l.jsxs)(c.g, {
                                align: {
                                    all: "start",
                                    md: B
                                },
                                space: {
                                    all: "s-8",
                                    lg: "s-24"
                                },
                                width: "100%",
                                children: [h && (0, l.jsx)(j.x, {
                                    color: "grey-tone-50",
                                    role: "doc-subtitle",
                                    use: "p",
                                    variant: "h6",
                                    whiteSpace: "pre-wrap",
                                    width: "100%",
                                    children: h
                                }), (0, l.jsx)(j.x, {
                                    use: "h1",
                                    variant: "h1",
                                    whiteSpace: "pre-wrap",
                                    width: "100%",
                                    children: W
                                }), (0, l.jsx)(j.x, {
                                    use: "p",
                                    variant: "subtitle1",
                                    whiteSpace: "pre-wrap",
                                    width: "center" === b ? {
                                        all: "100%",
                                        lg: "60%",
                                        xxl: "80%"
                                    } : void 0,
                                    children: k
                                })]
                            }), p.countdownWidget && (0, l.jsx)(E, { ...p.countdownWidget
                            }), !p.getTheAppWidget && !p.under18ApproveWidget && (s || g) && (0, l.jsxs)(i.k, {
                                flexWrap: "wrap",
                                justifyContent: B,
                                gap: "s-16",
                                children: [s && (0, l.jsx)(q, {
                                    link: s.link,
                                    children: s.label
                                }), g && (0, l.jsx)(u.z, {
                                    link: g.link,
                                    variant: "secondary",
                                    children: g.label
                                })]
                            }), p.getTheAppWidget && (0, l.jsx)(v.e, { ...p.getTheAppWidget,
                                blockId: o
                            }), p.under18ApproveWidget && (0, l.jsx)(w.n, { ...p.under18ApproveWidget,
                                blockId: o
                            })]
                        }), I && (0, l.jsx)(i.k, {
                            flex: {
                                all: "0 0 375px",
                                xxl: "0 0 450px"
                            },
                            alignSelf: "stretch",
                            alignItems: "center",
                            justifyContent: {
                                all: "center",
                                lg: "flex-start"
                            },
                            ml: {
                                all: 0,
                                lg: (null === (t = e.content) || void 0 === t ? void 0 : null === (n = t.style) || void 0 === n ? void 0 : n.align) === "left" ? "s-32" : 0
                            },
                            mt: {
                                all: "s-24",
                                lg: 0
                            },
                            children: (0, l.jsx)(y.o, { ...I
                            })
                        })]
                    })
                };
            var J = n(25675),
                H = n.n(J),
                N = n(84353),
                V = n(7670),
                X = n(96526),
                O = n(47255);
            let Y = e => {
                    let {
                        image: t,
                        imageSmall: n,
                        scrollAnimation: i = X.q.None
                    } = e, r = (0, V.e)(), a = (0, O.w)({
                        scrollAnimation: i,
                        transform: !0,
                        opacity: !0
                    }), s = (0, x.b)("lg");
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(o.e2, {
                            height: "100%",
                            hide: n ? "*-lg" : void 0,
                            left: 0,
                            maxHeight: "200vh",
                            overflow: "hidden",
                            top: 0,
                            width: "100%",
                            children: (0, l.jsx)(N.o, {
                                ratio: 1440 / 657,
                                ref: a,
                                children: s && (0, l.jsx)(H(), {
                                    alt: "",
                                    fill: !0,
                                    loader: r,
                                    priority: !0,
                                    quality: "90",
                                    sizes: "100vw",
                                    src: t,
                                    style: {
                                        objectFit: "cover"
                                    }
                                })
                            })
                        }), (0, l.jsx)(N.o, {
                            ratio: 375 / 220,
                            hide: "lg-*",
                            children: (0, l.jsx)(H(), {
                                alt: "",
                                fill: !0,
                                loader: r,
                                priority: !0,
                                quality: "90",
                                sizes: "100vw",
                                src: null != n ? n : t,
                                style: {
                                    objectFit: "cover"
                                }
                            })
                        })]
                    })
                },
                U = e => {
                    let {
                        image: t,
                        imageSmall: n,
                        scrollAnimation: i = X.q.Parallax
                    } = e, o = (0, V.e)(), r = (0, O.w)({
                        scrollAnimation: i,
                        transform: !0,
                        opacity: !0
                    }), a = (0, x.b)("lg"), [s, c] = (0, d.useState)(Boolean(n) ? "" : t);
                    return ((0, d.useEffect)(() => {
                        c(a || !n ? t : n)
                    }, [a, n, t]), s) ? (0, l.jsx)(N.o, {
                        ratio: {
                            md: 1440 / 657
                        },
                        height: "100%",
                        ref: r,
                        children: (0, l.jsx)(H(), {
                            alt: "",
                            loader: o,
                            priority: !0,
                            quality: "90",
                            src: s,
                            fill: !0,
                            sizes: "100vw",
                            style: {
                                objectFit: "cover",
                                objectPosition: a ? "50% 50%" : "50% 100%"
                            }
                        })
                    }) : null
                };
            var G = n(93141),
                K = n(38967),
                Q = n(5403);
            let $ = a.ZP.video.withConfig({
                    componentId: "sc-11cc009a-0"
                })({
                    objectFit: "cover",
                    objectPosition: "50% 100%",
                    backfaceVisibility: "hidden",
                    WebkitMaskImage: "-webkit-radial-gradient(#fff, #000)",
                    ["@media ".concat(C.W.media.lg)]: {
                        objectPosition: "50% 50%"
                    }
                }),
                ee = e => {
                    var t;
                    let {
                        video: n,
                        videoSmall: i,
                        image: o,
                        imageSmall: r
                    } = e, a = (0, V.e)(), s = (0, G.a)(C.W.media.lg), {
                        videoRef: c
                    } = (0, Q.A)(), u = (0, d.useMemo)(() => Boolean(i) && null !== s && !s ? i : n, [s, i, n]), g = (0, d.useMemo)(() => Boolean(r) && null !== s && !s ? r : o, [s, r, o]);
                    return (0, d.useLayoutEffect)(() => {
                        var e;
                        u && (null === (e = c.current) || void 0 === e || e.load())
                    }, [c, u]), (0, l.jsx)(N.o, {
                        ratio: {
                            md: 16 / 9
                        },
                        height: "100%",
                        children: (0, l.jsx)($, {
                            ref: c,
                            poster: g && a ? a({
                                src: g,
                                width: 2048
                            }) : g,
                            muted: !0,
                            width: "100%",
                            height: "100%",
                            playsInline: !0,
                            loop: null == u ? void 0 : null === (t = u.options) || void 0 === t ? void 0 : t.includes(K.D.Loop),
                            children: (0, l.jsx)("source", {
                                src: null == u ? void 0 : u.value,
                                type: "video/mp4"
                            })
                        })
                    })
                },
                et = (0, a.ZP)(i.k).withConfig({
                    componentId: "sc-33ff6060-0"
                })(e => {
                    let {
                        theme: t
                    } = e;
                    return (0, s.iv)({
                        position: "relative",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginTop: [-t.navigation.height.all, null, null, -t.navigation.height.lg, null, -t.navigation.height.xxl]
                    })
                }),
                en = e => {
                    let {
                        content: {
                            image: t,
                            imageSmall: n,
                            scrollAnimation: i,
                            imageSmallVariant: a,
                            video: s,
                            videoSmall: d,
                            components: c = {}
                        }
                    } = e, u = Boolean(s) || Boolean(t), g = Boolean(s) || a === X.D.Fullscreen, h = Boolean(Object.keys(c).length), p = u && g;
                    return (0, l.jsxs)(et, {
                        use: "section",
                        "data-blockid": e.id,
                        backgroundColor: Boolean(s) ? "background" : void 0,
                        minHeight: {
                            all: p ? "100vh" : "auto",
                            lg: "100vh"
                        },
                        children: [p && (0, l.jsxs)(o.e2, {
                            height: "100%",
                            left: 0,
                            maxHeight: "100vh",
                            width: "100%",
                            overflow: "hidden",
                            children: [s && (0, l.jsx)(ee, {
                                video: s,
                                videoSmall: d,
                                image: t,
                                imageSmall: n
                            }), !s && t && (0, l.jsx)(U, {
                                image: t,
                                imageSmall: n,
                                scrollAnimation: i
                            })]
                        }), u && !g && (0, l.jsx)(r.x, {
                            hide: h && "*-md",
                            width: "100%",
                            children: t && (0, l.jsx)(Y, {
                                image: t,
                                imageSmall: n,
                                scrollAnimation: i
                            })
                        }), (0, l.jsx)(D, {
                            isAlignLeftMd: p,
                            ...e
                        })]
                    })
                }
        },
        96526: function(e, t, n) {
            var l, i, o, r;
            n.d(t, {
                D: function() {
                    return i
                },
                q: function() {
                    return l
                }
            }), (o = l || (l = {})).None = "none", o.Parallax = "parallax", (r = i || (i = {})).Fullscreen = "fullscreen", r.Top = "top"
        },
        47255: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return r
                }
            });
            var l = n(67294),
                i = n(96526);

            function o(e, t, n) {
                let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    [i = 0, o = 0] = t,
                    [r = 0, a = 0] = n,
                    s = r + (e - i) / (o - i) * (a - r);
                if (l) {
                    let e = Math.min(r, a);
                    if (s < e) return e;
                    let t = Math.max(r, a);
                    if (s > t) return t
                }
                return s
            }

            function r(e) {
                let {
                    transform: t,
                    opacity: n,
                    scrollAnimation: r
                } = e, a = (0, l.useRef)();
                return (0, l.useEffect)(() => {
                    switch (r) {
                        case i.q.Parallax:
                            let e = () => {
                                let e = a.current,
                                    l = null == e ? void 0 : e.clientHeight,
                                    {
                                        scrollY: i
                                    } = window;
                                if (e && void 0 !== l && i < 2 * l) {
                                    let r = o(i, [0, l + 64], [1, 1.15]),
                                        a = o(i, [l / 2, l + 64], [1, 0]);
                                    t && (e.style.transform = "scale(".concat(r, ")")), n && (e.style.opacity = String(a))
                                }
                            };
                            a.current && (a.current.style.willChange = [t && "transform", n && "opacity"].filter(Boolean).join(", "), t && (a.current.style.transform = "scale(1)"), n && (a.current.style.opacity = "1"), e());
                            let l = window;
                            return l.addEventListener("scroll", e, {
                                passive: !0
                            }), () => l.removeEventListener("scroll", e);
                        case i.q.None:
                        default:
                            return
                    }
                }, [r, t, n]), a
            }
        },
        5403: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return r
                }
            });
            var l = n(67294),
                i = n(47887),
                o = n(64487);

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = (0, l.useRef)(null),
                    n = (0, l.useRef)(),
                    [r, a] = (0, l.useState)(!1),
                    [s, d] = (0, l.useState)(!1);
                return (0, i.t)(t, e => a(e), .1), (0, l.useEffect)(() => {
                    let l = t.current;
                    l && (r && e ? s || (clearTimeout(n.current), l.play().then(() => d(!0)).catch(e => {
                        o.Tb(e, {
                            tags: {
                                component: "useViewportVideoRef"
                            }
                        })
                    })) : s && (clearTimeout(n.current), n.current = setTimeout(() => {
                        l.pause(), l.currentTime = 0, d(!1)
                    }, 500)))
                }, [e, r, s]), {
                    videoRef: t,
                    inViewport: r
                }
            }
        },
        38967: function(e, t, n) {
            var l, i;
            n.d(t, {
                D: function() {
                    return l
                }
            }), (i = l || (l = {})).Loop = "loop", i.StartImmediately = "startImmediately", i.PlayButton = "playButton", i.SoundButton = "soundButton", i.FullscreenButton = "fullscreenButton"
        }
    }
]);