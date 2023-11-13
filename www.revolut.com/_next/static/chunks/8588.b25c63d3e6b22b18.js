"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8588], {
        79581: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return d
                }
            });
            var r = n(67294),
                i = n(29758);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = r.forwardRef(function(e, t) {
                return r.createElement(i.A, o({
                    ref: t,
                    viewBox: "0 0 24 24",
                    size: 24
                }, e), r.createElement("g", {
                    fill: "currentColor"
                }, r.createElement("path", {
                    fill: "currentColor",
                    d: "M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                })))
            });

            function l() {
                return (l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            a.displayName = "IconArrowThinRight";
            var c = {
                    default: a,
                    24: a
                },
                s = function(e) {
                    var t = e.size,
                        n = e.variant,
                        r = void 0 === n ? "auto" : n;
                    return "auto" === r ? c[t] || c.default : c[r] || c.default
                },
                d = r.forwardRef(function(e, t) {
                    var n = s(e);
                    return r.createElement(n, l({
                        ref: t
                    }, e))
                });
            d.displayName = "IconArrowThinRight", d.variants = c
        },
        84353: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return g
                }
            });
            var r = n(67294),
                i = n(14141),
                o = n(16678),
                a = n(25394),
                l = n(45919),
                c = n(30116),
                s = ["ratio", "children"];

            function d() {
                return (d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var u = i.ZP.div.withConfig({
                    displayName: "AspectRatio__Spacer",
                    componentId: "rui__sc-3p9atg-0"
                })(["", " width:100%;height:0;padding-bottom:calc(1 / ", " * 100%);"], (0, o.By)({
                    ratio: {
                        property: a.G.RATIO,
                        transform: function(e) {
                            return "" + e
                        }
                    }
                }), (0, l.z3)(a.G.RATIO)),
                f = i.ZP.div.withConfig({
                    displayName: "AspectRatio__Content",
                    componentId: "rui__sc-3p9atg-1"
                })(["position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:hidden;& > :first-child{width:100%;height:100%;}& > img,& > video{object-fit:cover;}"]),
                p = (0, i.ZP)(c.x).withConfig({
                    displayName: "AspectRatio__Base",
                    componentId: "rui__sc-3p9atg-2"
                })(["position:relative;padding:unset;& > ", "{", "}"], f, o.o3),
                g = (0, r.forwardRef)(function(e, t) {
                    var n = e.ratio,
                        i = e.children,
                        o = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, s);
                    return r.createElement(p, d({
                        ref: t,
                        overflow: "hidden"
                    }, o), r.createElement(f, null, i), r.createElement(u, {
                        role: "none",
                        ratio: void 0 === n ? 1 : n
                    }))
                })
        },
        47154: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return d
                }
            });
            var r = n(14141),
                i = n(39072),
                o = n(44547),
                a = n(45919);

            function l(e) {
                return (0, a.hj)(e) ? "repeat(" + e + ", 1fr)" : e
            }
            var c = (0, o.By)({
                    template: {
                        property: "gridTemplate"
                    },
                    columns: {
                        property: "gridTemplateColumns",
                        transform: l
                    },
                    rows: {
                        property: "gridTemplateRows",
                        transform: l
                    },
                    autoFlow: {
                        property: "gridAutoFlow"
                    },
                    autoRows: {
                        property: "gridAutoRows"
                    },
                    autoColumns: {
                        property: "gridAutoColumns"
                    },
                    placeItems: !0,
                    placeContent: !0
                }),
                s = n(30116),
                d = (0, r.ZP)(s.x).withConfig({
                    displayName: "Grid",
                    componentId: "rui__sc-11lbuez-0"
                })(["display:grid;", ";", ";"], i.S, c)
        },
        8954: function(e, t, n) {
            n.d(t, {
                Ee: function() {
                    return f
                },
                s1: function() {
                    return u
                }
            });
            var r = n(67294),
                i = n(25394),
                o = n(45919),
                a = n(69526),
                l = n(30116),
                c = ["role", "scale", "sizes", "src", "srcSet", "image", "alt", "style", "variant"];

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var d = {
                    ROUND: "round"
                },
                u = {
                    COVER: "cover",
                    CONTAIN: "contain"
                },
                f = (0, r.forwardRef)(function(e, t) {
                    var n, u = e.role,
                        f = e.scale,
                        p = e.sizes,
                        g = e.src,
                        h = e.srcSet,
                        m = e.image,
                        v = e.alt,
                        x = e.style,
                        b = e.variant,
                        w = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, c);
                    return r.createElement(l.x, s({
                        use: "img",
                        ref: t,
                        role: u,
                        display: "block",
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        radius: b === d.ROUND ? (0, o.z3)(i.G.RADIUS_IMAGE) : void 0,
                        sizes: p,
                        alt: v,
                        style: s({
                            objectFit: f
                        }, x)
                    }, "image" in (n = {
                        src: g,
                        srcSet: h,
                        image: m
                    }) && void 0 !== n.image ? (0, a.Nf)(n.image) : n, w))
                })
        },
        87747: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return c
                }
            });
            var r = n(85893),
                i = n(30116),
                o = n(14141),
                a = n(37947);
            let l = (0, o.ZP)(i.x).withConfig({
                    componentId: "sc-d85bbb3d-0"
                })(e => {
                    let {
                        theme: t
                    } = e;
                    return (0, a.iv)({
                        maxWidth: t.layout.maxWidth
                    })
                }),
                c = e => (0, r.jsx)(l, {
                    marginX: "auto",
                    marginY: {
                        all: "s-48",
                        lg: "80px",
                        xxl: "160px"
                    },
                    paddingX: {
                        all: "s-20",
                        lg: 0
                    },
                    use: "section",
                    width: "100%",
                    ...e
                })
        },
        79253: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return f
                }
            });
            var r = n(85893),
                i = n(67294),
                o = n(939),
                a = n(14141),
                l = n(29867),
                c = n(35402),
                s = n(34254),
                d = n(6206);
            let u = (0, a.ZP)(o.xv).withConfig({
                    componentId: "sc-85172584-0"
                })({
                    wordBreak: "break-word"
                }),
                f = (0, i.forwardRef)((e, t) => {
                    let {
                        value: n,
                        gaEvent: i,
                        onClick: o,
                        ...a
                    } = e, f = (0, l.U)(), {
                        trackLink: p
                    } = (0, c.z$)(), g = e => {
                        if (f) {
                            e.preventDefault(), e.stopPropagation();
                            return
                        }(0, s.mf)(o) && o(e), p(e, i, n)
                    };
                    return n ? (0, r.jsx)(d._, {
                        value: n,
                        children: (0, r.jsx)(u, {
                            ref: t,
                            use: "a",
                            onClick: g,
                            ...a
                        })
                    }) : (0, r.jsx)(u, {
                        ref: t,
                        use: "a",
                        onClick: g,
                        ...a
                    })
                });
            f.displayName = "Link"
        },
        46145: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return g
                }
            });
            var r = n(85893),
                i = n(79581),
                o = n(31346),
                a = n(14141),
                l = n(37947),
                c = n(87559),
                s = n(16970),
                d = n(79253);
            let u = (0, a.ZP)(o.k).withConfig({
                    componentId: "sc-636abdb8-0"
                })(e => {
                    let {
                        alignSelf: t = "end",
                        marginLeft: n,
                        arrowVariant: r
                    } = e;
                    return (0, l.iv)({
                        alignItems: "center",
                        alignSelf: t,
                        borderRadius: 9999,
                        color: "default" === r ? "foreground" : "accent",
                        flexShrink: 0,
                        height: 32,
                        justifyContent: "center",
                        justifySelf: "end",
                        marginLeft: n,
                        transition: "all 0.3s",
                        width: 32
                    })
                }),
                f = (0, a.ZP)(d.r).withConfig({
                    componentId: "sc-636abdb8-1"
                })(e => {
                    let {
                        flexDirection: t,
                        arrowVariant: n
                    } = e;
                    return (0, l.iv)({
                        display: "flex",
                        flexDirection: t,
                        ["&:hover ".concat(u)]: {
                            backgroundColor: "default" === n ? "foreground" : "accent",
                            color: "default" === n ? "background" : "white"
                        }
                    })
                }),
                p = (0, a.ZP)(i.m).withConfig({
                    componentId: "sc-636abdb8-2"
                })({
                    marginRight: "1px"
                }),
                g = e => {
                    let {
                        children: t,
                        useIcon: n,
                        variant: i = "vertical",
                        arrowVariant: a = "default",
                        title: l,
                        ...d
                    } = e, g = (0, c.T)(), h = null != l ? l : g("shared.button.learnMore");
                    return (0, r.jsxs)(f, {
                        flexDirection: "horizontal" === i ? "row" : "column",
                        arrowVariant: a,
                        title: h,
                        ...d,
                        children: [t, (0, r.jsxs)(o.k, {
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "s-8",
                            color: a,
                            children: [l && (0, r.jsx)(s.x, {
                                variant: "subtitle2",
                                children: h
                            }), (0, r.jsx)(u, {
                                use: "span",
                                alignSelf: "horizontal" === i ? "center" : "end",
                                ml: l ? "initial" : "auto",
                                arrowVariant: a,
                                children: n ? (0, r.jsx)(n, {}) : (0, r.jsx)(p, {})
                            })]
                        })]
                    })
                }
        },
        67612: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var r, i, o = n(85893),
                a = n(93141),
                l = n(22674),
                c = n(47154),
                s = n(87747),
                d = n(30116),
                u = n(56607),
                f = n(14141),
                p = n(16678),
                g = n(46145),
                h = n(10255),
                m = n(16970);
            (r = i || (i = {})).Default = "default", r.Images = "images";
            let v = (e, t, n) => {
                    let r = Math.ceil(n / Math.ceil(n / t)),
                        i = n % r,
                        o = e >= n - i,
                        a = o ? 12 / i : 12 / r,
                        l = o ? (e + i) % n : e % r;
                    return "".concat(l * a + 1, " / ").concat((l + 1) * a + 1)
                },
                x = (0, f.ZP)(d.x).withConfig({
                    componentId: "sc-4fe954d1-0"
                })(e => {
                    let {
                        hasLink: t,
                        index: n,
                        rowLength: r
                    } = e;
                    return {
                        listStyle: "none",
                        backgroundColor: l.W.color.groupedBackground,
                        borderRadius: 20,
                        color: l.W.color.foreground,
                        minWidth: 0,
                        padding: l.W.space.s24,
                        paddingBottom: t ? 0 : l.W.space.s24,
                        gridColumn: "1",
                        ["@media ".concat(l.W.media.md)]: {
                            gridColumn: v(n, 3, r)
                        },
                        ["@media ".concat(l.W.media.lg)]: {
                            gridColumn: v(n, 4, r)
                        },
                        ["@media ".concat(l.W.media.xxl)]: {
                            padding: l.W.space.s32,
                            paddingBottom: t ? 0 : l.W.space.s32
                        }
                    }
                }),
                b = (0, f.ZP)(g.A).withConfig({
                    componentId: "sc-4fe954d1-1"
                })({
                    display: "grid",
                    gridTemplateRows: "1fr auto",
                    height: "100%",
                    paddingBottom: l.W.space.s16,
                    ["@media ".concat(l.W.media.xxl)]: {
                        paddingBottom: l.W.space.s24
                    }
                }),
                w = (0, f.ZP)(u.g).withConfig({
                    componentId: "sc-4fe954d1-2"
                })(p.bU({
                    variants: {
                        [i.Default]: {
                            alignItems: "flex-start",
                            gap: "s-8",
                            marginBottom: ["s-4", null, null, "s-8"]
                        },
                        [i.Images]: {
                            alignItems: "center",
                            textAlign: "center",
                            gap: ["s-16", null, null, null, "s-24"],
                            marginBottom: ["s-8", null, null, "s-16"]
                        }
                    }
                })),
                y = (0, f.ZP)(m.x).withConfig({
                    componentId: "sc-4fe954d1-3"
                })({
                    hyphens: "auto",
                    wordBreak: "break-word"
                }),
                j = e => {
                    let {
                        button: t,
                        caption: n,
                        description: r,
                        image: a,
                        index: l,
                        rowLength: c,
                        prefix: s,
                        style: d,
                        title: f,
                        variant: p,
                        titleVariant: g
                    } = e, v = null == t ? void 0 : t.link, j = p === i.Images, C = (0, o.jsxs)(w, {
                        height: "100%",
                        variant: p,
                        children: [j && a && (0, o.jsx)(h.Y, {
                            src: a,
                            size: [56, null, null, 64, null, 88]
                        }), (0, o.jsxs)(u.g, {
                            gap: {
                                all: "s-4",
                                xl: "s-8"
                            },
                            children: [s && (0, o.jsx)(m.x, {
                                variant: "h6",
                                children: s
                            }), (0, o.jsx)(y, {
                                use: "h3",
                                variant: j ? g : "h6",
                                children: f
                            })]
                        }), n && (0, o.jsx)(m.x, {
                            use: "h4",
                            variant: j ? "h6" : "subtitle1",
                            marginTop: j ? {
                                all: "-s-12",
                                xl: "-s-16"
                            } : "0",
                            children: n
                        }), r && (0, o.jsx)(m.x, {
                            use: "p",
                            variant: "secondary",
                            color: "grey-50",
                            children: r
                        })]
                    });
                    return (0, o.jsx)(x, {
                        use: "li",
                        hasLink: Boolean(v),
                        index: l,
                        rowLength: c,
                        children: v ? (0, o.jsx)(b, {
                            value: v,
                            title: j ? null == t ? void 0 : t.label : void 0,
                            arrowVariant: j ? "accent" : "default",
                            color: null == d ? void 0 : d.color,
                            children: C
                        }) : C
                    })
                },
                C = e => {
                    let {
                        id: t,
                        content: {
                            items: n = [],
                            style: {
                                variant: r = i.Default
                            } = {}
                        }
                    } = e, d = (0, a.a)(l.W.media.md);
                    return n.length ? (0, o.jsx)(s.o, {
                        "data-blockid": t,
                        marginY: "s-20",
                        children: (0, o.jsx)(c.r, {
                            use: "ul",
                            columns: {
                                all: 1,
                                md: 12
                            },
                            gap: {
                                all: "s-16",
                                lg: "s-24"
                            },
                            children: n.map((e, t) => (0, o.jsx)(j, {
                                variant: r,
                                index: t,
                                rowLength: n.length,
                                titleVariant: d ? "h3" : "h1",
                                ...e
                            }, t))
                        })
                    }) : null
                }
        },
        10255: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return f
                }
            });
            var r = n(85893),
                i = n(67294),
                o = n(8954),
                a = n(17802),
                l = n(37947),
                c = n(14141),
                s = n(34254);
            let d = (0, c.ZP)(o.Ee).withConfig({
                    componentId: "sc-4439bf8f-0"
                })(e => {
                    let {
                        size: t
                    } = e;
                    return (0, l.iv)({
                        minWidth: t,
                        color: "transparent",
                        overflow: "hidden",
                        position: "relative",
                        "&::before": {
                            position: "absolute",
                            inset: 0,
                            content: '""',
                            backgroundColor: "action-background"
                        }
                    })
                }),
                u = e => null == e ? void 0 : e.endsWith(".webp"),
                f = (0, i.memo)(function(e) {
                    let {
                        src: t,
                        alt: n,
                        size: i = 24,
                        ...o
                    } = e;
                    return (0, r.jsx)(d, {
                        image: t ? {
                            default: t,
                            "1x": [t, u(t) ? t.replace(/.webp$/, ".png") : void 0].filter(s.fQ)
                        } : void 0,
                        display: "inline-block",
                        borderRadius: a.w.ROUND,
                        alt: null != n ? n : "",
                        size: i,
                        ...o
                    })
                })
        }
    }
]);