"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4226], {
        79581: function(t, e, n) {
            n.d(e, {
                m: function() {
                    return s
                }
            });
            var r = n(67294),
                i = n(29758);

            function l() {
                return (l = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var a = r.forwardRef(function(t, e) {
                return r.createElement(i.A, l({
                    ref: e,
                    viewBox: "0 0 24 24",
                    size: 24
                }, t), r.createElement("g", {
                    fill: "currentColor"
                }, r.createElement("path", {
                    fill: "currentColor",
                    d: "M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                })))
            });

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            a.displayName = "IconArrowThinRight";
            var c = {
                    default: a,
                    24: a
                },
                u = function(t) {
                    var e = t.size,
                        n = t.variant,
                        r = void 0 === n ? "auto" : n;
                    return "auto" === r ? c[e] || c.default : c[r] || c.default
                },
                s = r.forwardRef(function(t, e) {
                    var n = u(t);
                    return r.createElement(n, o({
                        ref: e
                    }, t))
                });
            s.displayName = "IconArrowThinRight", s.variants = c
        },
        84353: function(t, e, n) {
            n.d(e, {
                o: function() {
                    return p
                }
            });
            var r = n(67294),
                i = n(14141),
                l = n(16678),
                a = n(25394),
                o = n(45919),
                c = n(30116),
                u = ["ratio", "children"];

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var d = i.ZP.div.withConfig({
                    displayName: "AspectRatio__Spacer",
                    componentId: "rui__sc-3p9atg-0"
                })(["", " width:100%;height:0;padding-bottom:calc(1 / ", " * 100%);"], (0, l.By)({
                    ratio: {
                        property: a.G.RATIO,
                        transform: function(t) {
                            return "" + t
                        }
                    }
                }), (0, o.z3)(a.G.RATIO)),
                f = i.ZP.div.withConfig({
                    displayName: "AspectRatio__Content",
                    componentId: "rui__sc-3p9atg-1"
                })(["position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:hidden;& > :first-child{width:100%;height:100%;}& > img,& > video{object-fit:cover;}"]),
                h = (0, i.ZP)(c.x).withConfig({
                    displayName: "AspectRatio__Base",
                    componentId: "rui__sc-3p9atg-2"
                })(["position:relative;padding:unset;& > ", "{", "}"], f, l.o3),
                p = (0, r.forwardRef)(function(t, e) {
                    var n = t.ratio,
                        i = t.children,
                        l = function(t, e) {
                            if (null == t) return {};
                            var n, r, i = {},
                                l = Object.keys(t);
                            for (r = 0; r < l.length; r++) n = l[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                            return i
                        }(t, u);
                    return r.createElement(h, s({
                        ref: e,
                        overflow: "hidden"
                    }, l), r.createElement(f, null, i), r.createElement(d, {
                        role: "none",
                        ratio: void 0 === n ? 1 : n
                    }))
                })
        },
        51482: function(t, e, n) {
            n.d(e, {
                x: function() {
                    return m
                }
            });
            var r = n(67294),
                i = n(14141),
                l = n(554),
                a = n(1377),
                o = n(11859),
                c = n(53889),
                u = n(10903),
                s = ["children", "tooltip"],
                d = ["children", "tooltip"];

            function f() {
                return (f = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function h(t, e) {
                if (null == t) return {};
                var n, r, i = {},
                    l = Object.keys(t);
                for (r = 0; r < l.length; r++) n = l[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i
            }
            var p = i.ZP.span.withConfig({
                displayName: "LineClamp__LineClampBase",
                componentId: "rui__sc-1asyw6f-0"
            })((0, c.d)("max"));

            function g(t) {
                var e = t.children,
                    n = t.tooltip,
                    i = h(t, s),
                    c = (0, r.useRef)(null),
                    d = (0, a.l)(),
                    g = (0, r.useState)(!1),
                    m = g[0],
                    v = g[1],
                    x = (0, r.useState)(0),
                    b = x[0],
                    w = x[1];
                return (0, o.d)(c, n === l.l.AUTO, function(t, e) {
                    v(t.height < e.height), w(t.width)
                }), r.createElement(r.Fragment, null, r.createElement(p, d.getAnchorProps(f({
                    ref: c
                }, i)), e), r.createElement(u.u, d.getTargetProps({
                    open: n === l.l.ALWAYS || m,
                    placement: "bottom-start",
                    maxWidth: Math.max(b, 320)
                }), e))
            }

            function m(t) {
                var e = t.children,
                    n = t.tooltip,
                    i = void 0 === n ? l.l.NEVER : n,
                    a = h(t, d);
                return i === l.l.ALWAYS || i === l.l.AUTO ? r.createElement(g, f({
                    tooltip: i
                }, a), e) : r.createElement(p, a, e)
            }
        },
        87747: function(t, e, n) {
            n.d(e, {
                o: function() {
                    return c
                }
            });
            var r = n(85893),
                i = n(30116),
                l = n(14141),
                a = n(37947);
            let o = (0, l.ZP)(i.x).withConfig({
                    componentId: "sc-d85bbb3d-0"
                })(t => {
                    let {
                        theme: e
                    } = t;
                    return (0, a.iv)({
                        maxWidth: e.layout.maxWidth
                    })
                }),
                c = t => (0, r.jsx)(o, {
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
                    ...t
                })
        },
        79253: function(t, e, n) {
            n.d(e, {
                r: function() {
                    return f
                }
            });
            var r = n(85893),
                i = n(67294),
                l = n(939),
                a = n(14141),
                o = n(29867),
                c = n(35402),
                u = n(34254),
                s = n(6206);
            let d = (0, a.ZP)(l.xv).withConfig({
                    componentId: "sc-85172584-0"
                })({
                    wordBreak: "break-word"
                }),
                f = (0, i.forwardRef)((t, e) => {
                    let {
                        value: n,
                        gaEvent: i,
                        onClick: l,
                        ...a
                    } = t, f = (0, o.U)(), {
                        trackLink: h
                    } = (0, c.z$)(), p = t => {
                        if (f) {
                            t.preventDefault(), t.stopPropagation();
                            return
                        }(0, u.mf)(l) && l(t), h(t, i, n)
                    };
                    return n ? (0, r.jsx)(s._, {
                        value: n,
                        children: (0, r.jsx)(d, {
                            ref: e,
                            use: "a",
                            onClick: p,
                            ...a
                        })
                    }) : (0, r.jsx)(d, {
                        ref: e,
                        use: "a",
                        onClick: p,
                        ...a
                    })
                });
            f.displayName = "Link"
        },
        4226: function(t, e, n) {
            n.r(e), n.d(e, {
                TileBlockAlign: function() {
                    return a
                },
                TileBlockVariant: function() {
                    return l
                },
                default: function() {
                    return z
                }
            });
            var r, i, l, a, o = n(85893),
                c = n(31346),
                u = n(84353),
                s = n(14141),
                d = n(37947),
                f = n(16678),
                h = n(79253),
                p = n(87747);
            (r = l || (l = {})).Default = "default", r.Small = "small", (i = a || (a = {})).Bottom = "bottom", i.Center = "center", i.Left = "left", i.Right = "right", i.Top = "top";
            var g = n(86e3),
                m = n(79581),
                v = n(34254),
                x = n(16970),
                b = n(67294);
            let w = (0, b.createContext)(null);

            function y() {
                let t = (0, b.useContext)(w);
                if (null === t) throw Error("`TileBlockContext` is accessible in `TileBlock` component only");
                return t
            }
            let j = (0, s.ZP)(c.k).withConfig({
                    componentId: "sc-7e848c7d-0"
                })((0, d.iv)({
                    display: "grid",
                    gridTemplateColumns: "1fr 28px",
                    alignItems: "center",
                    borderRadius: 20,
                    paddingLeft: "s-16",
                    paddingRight: "s-8",
                    paddingY: "s-4",
                    transition: "all 0.3s",
                    marginRight: "auto",
                    "&::after": {
                        bottom: 0,
                        content: '""',
                        display: "block",
                        left: 0,
                        position: "absolute",
                        width: "100%",
                        top: 0
                    },
                    "&:hover": {
                        color: "white",
                        backgroundColor: "accent"
                    }
                }), t => {
                    let {
                        align: e
                    } = t;
                    return f.bU({
                        variants: {
                            [l.Default]: {
                                marginLeft: e === a.Left || e === a.Right ? "-s-16" : "auto",
                                marginTop: e === a.Left || e === a.Right ? ["s-16", null, "auto"] : ["s-16", null, "s-40", null, null, "s-48"],
                                "&::after": {
                                    left: e === a.Right ? "-100%" : "-10%",
                                    width: e === a.Left || e === a.Right ? "200%" : "120%"
                                }
                            },
                            [l.Small]: {
                                marginTop: ["s-16", null, e === a.Bottom ? "s-16" : "auto"],
                                marginLeft: "-s-16"
                            }
                        }
                    })
                }),
                C = (0, s.ZP)(m.m).withConfig({
                    componentId: "sc-7e848c7d-1"
                })((0, d.iv)({
                    size: [16, null, null, 24],
                    marginLeft: "s-8"
                })),
                k = t => {
                    let {
                        children: e,
                        color: n = "accent"
                    } = t, {
                        align: r,
                        variant: i
                    } = y();
                    return (0, o.jsxs)(j, {
                        align: r,
                        variant: i,
                        color: n,
                        children: [(0, o.jsx)(x.x, {
                            variant: "subtitle2",
                            children: (0, o.jsx)(g.m, {
                                children: e
                            })
                        }), (0, o.jsx)(C, {
                            "aria-label": (0, v.HD)(e) ? e : void 0
                        })]
                    })
                };
            var O = n(939),
                R = n(45919);
            let P = (0, s.ZP)(O.xv).withConfig({
                    componentId: "sc-e5e942d-0"
                })((0, R.Ou)("primary"), (0, d.iv)({
                    whiteSpace: "pre-wrap",
                    width: "100%",
                    wordBreak: "break-word",
                    marginTop: ["s-8", null, "s-16"]
                })),
                I = t => {
                    let {
                        children: e
                    } = t;
                    return (0, o.jsx)(P, {
                        use: "p",
                        children: e
                    })
                };
            var _ = n(25675),
                A = n.n(_),
                L = n(7670),
                T = n(66639);
            let E = (0, s.ZP)(A()).withConfig({
                    componentId: "sc-b17ee1af-0"
                })(t => {
                    let {
                        alignment: e,
                        variant: n
                    } = t;
                    return (0, d.iv)({
                        objectPosition: () => n === l.Default && e === a.Left ? ["bottom right", null, null, "center bottom"] : n === l.Default ? ["center center", null, null, "center bottom"] : "center center"
                    })
                }),
                B = t => {
                    let {
                        align: e,
                        variant: n,
                        image: r,
                        imageSmall: i
                    } = t, l = (0, L.e)(), a = (0, T.b)("md");
                    return (0, o.jsx)(E, {
                        alignment: e,
                        alt: "",
                        loader: l,
                        src: a ? r : null != i ? i : r,
                        variant: n,
                        fill: !0,
                        sizes: "100vw",
                        style: {
                            objectFit: "cover"
                        }
                    })
                };
            var Z = n(51482);
            let S = (0, s.ZP)(O.xv).withConfig({
                    componentId: "sc-2eed654d-0"
                })((0, R.Ou)("h5"), (0, d.iv)({
                    color: "inherit",
                    whiteSpace: "pre-wrap",
                    width: "100%",
                    wordBreak: "break-word"
                }), t => {
                    let {
                        align: e
                    } = t;
                    return f.bU({
                        variants: {
                            [l.Default]: {
                                marginTop: [null, null, "auto"]
                            },
                            [l.Small]: {
                                marginTop: e === a.Bottom ? "auto" : 0
                            }
                        }
                    })
                }),
                D = t => {
                    let {
                        children: e
                    } = t, {
                        align: n,
                        variant: r
                    } = y();
                    return (0, o.jsx)(S, {
                        use: "h3",
                        align: n,
                        variant: r,
                        children: (0, o.jsx)(Z.x, {
                            max: 5,
                            children: e
                        })
                    })
                },
                N = (0, s.ZP)(p.o).withConfig({
                    componentId: "sc-f691958d-0"
                })((0, d.iv)({
                    marginY: "s-20"
                }), t => {
                    let {
                        theme: e,
                        isEven: n
                    } = t;
                    return f.bU({
                        variants: {
                            [l.Small]: {
                                display: ["block", null, null, "inline-block"],
                                width: ["100%", null, null, "calc(".concat(e.layout.maxWidth[0], "px / 2 - 20px)"), null, "calc(".concat(e.layout.maxWidth[5], "px / 2 - 20px)")],
                                marginLeft: n ? [0, null, null, "40px"] : [0, null, null, "calc(50% - ".concat(e.layout.maxWidth[0], "px / 2)"), null, "calc(50% - ".concat(e.layout.maxWidth[5], "px / 2)")]
                            }
                        }
                    })
                }),
                W = (0, s.ZP)(h.r).withConfig({
                    componentId: "sc-f691958d-1"
                })(t => {
                    let {
                        theme: e
                    } = t;
                    return (0, d.iv)({
                        backfaceVisibility: "hidden",
                        borderRadius: 20,
                        boxShadow: e.shadows.level5,
                        display: "block",
                        marginX: "auto",
                        overflow: "hidden",
                        position: "relative",
                        transform: "translate3d(0, 0, 0)",
                        width: "100%",
                        img: {
                            transformOrigin: ["bottom right", null, null, "center center"],
                            transition: "transform 0.6s"
                        },
                        "&:hover img": {
                            transform: "scale(1.05)"
                        }
                    })
                }),
                U = (0, s.ZP)(c.k).withConfig({
                    componentId: "sc-f691958d-2"
                })((0, d.iv)({
                    flexDirection: "column",
                    height: "100%",
                    padding: ["s-32", null, null, "s-40"],
                    position: "relative",
                    transition: "transform 0.6s",
                    width: "100%"
                }), t => {
                    let {
                        align: e
                    } = t;
                    return f.bU({
                        variants: {
                            [l.Default]: function(t) {
                                switch (t) {
                                    case a.Left:
                                        return {
                                            justifyContent: ["flex-start", null, "center"],
                                            width: ["100%", null, "51.6%"],
                                            textAlign: "left"
                                        };
                                    case a.Right:
                                        return {
                                            justifyContent: ["flex-start", null, "center"],
                                            width: ["100%", null, "51.6%"],
                                            textAlign: "left",
                                            alignItems: "right",
                                            marginLeft: "auto",
                                            marginRight: 0
                                        };
                                    case a.Bottom:
                                    case a.Top:
                                    default:
                                        return {
                                            alignItems: "center",
                                            width: ["100%", null, "90%"],
                                            justifyContent: ["flex-start", null, "flex-end"],
                                            marginX: "auto",
                                            textAlign: "center"
                                        }
                                }
                            }(e),
                            [l.Small]: {
                                alignItems: "left",
                                textAlign: "left"
                            }
                        }
                    })
                }),
                z = t => {
                    let {
                        id: e,
                        content: {
                            button: n,
                            description: r,
                            image: i,
                            imageSmall: c,
                            style: {
                                align: s,
                                variant: d,
                                color: f,
                                buttonColor: h
                            } = {},
                            title: p,
                            index: g
                        }
                    } = t, m = null != d ? d : l.Default, v = null != s ? s : a.Left, x = null == n ? void 0 : n.link;
                    return (0, o.jsx)(w.Provider, {
                        value: {
                            align: v,
                            variant: m
                        },
                        children: (0, o.jsx)(N, {
                            "data-blockid": e,
                            "data-type": "tile-".concat(m),
                            variant: m,
                            isEven: void 0 !== g && (g + 1) % 2 == 0,
                            children: (0, o.jsx)(W, {
                                bg: "white" === f ? "grey-50" : "background",
                                value: x,
                                color: f,
                                children: (0, o.jsxs)(u.o, {
                                    ratio: m === l.Default ? {
                                        all: 335 / 508,
                                        md: 1e3 / 560,
                                        lg: 1856 / 960
                                    } : {
                                        all: 335 / 440,
                                        md: 484 / 572
                                    },
                                    children: [i && (0, o.jsx)(B, {
                                        align: v,
                                        image: i,
                                        imageSmall: c,
                                        variant: m
                                    }), (0, o.jsxs)(U, {
                                        use: "span",
                                        align: v,
                                        variant: m,
                                        children: [p && (0, o.jsx)(D, {
                                            children: p
                                        }), r && (0, o.jsx)(I, {
                                            children: r
                                        }), (null == n ? void 0 : n.label) && (0, o.jsx)(k, {
                                            color: null != h ? h : f,
                                            children: n.label
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                }
        }
    }
]);