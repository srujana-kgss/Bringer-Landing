"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8019], {
        84353: function(t, e, n) {
            n.d(e, {
                o: function() {
                    return p
                }
            });
            var r = n(67294),
                i = n(14141),
                o = n(16678),
                a = n(25394),
                l = n(45919),
                c = n(30116),
                d = ["ratio", "children"];

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var s = i.ZP.div.withConfig({
                    displayName: "AspectRatio__Spacer",
                    componentId: "rui__sc-3p9atg-0"
                })(["", " width:100%;height:0;padding-bottom:calc(1 / ", " * 100%);"], (0, o.By)({
                    ratio: {
                        property: a.G.RATIO,
                        transform: function(t) {
                            return "" + t
                        }
                    }
                }), (0, l.z3)(a.G.RATIO)),
                h = i.ZP.div.withConfig({
                    displayName: "AspectRatio__Content",
                    componentId: "rui__sc-3p9atg-1"
                })(["position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:hidden;& > :first-child{width:100%;height:100%;}& > img,& > video{object-fit:cover;}"]),
                f = (0, i.ZP)(c.x).withConfig({
                    displayName: "AspectRatio__Base",
                    componentId: "rui__sc-3p9atg-2"
                })(["position:relative;padding:unset;& > ", "{", "}"], h, o.o3),
                p = (0, r.forwardRef)(function(t, e) {
                    var n = t.ratio,
                        i = t.children,
                        o = function(t, e) {
                            if (null == t) return {};
                            var n, r, i = {},
                                o = Object.keys(t);
                            for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                            return i
                        }(t, d);
                    return r.createElement(f, u({
                        ref: e,
                        overflow: "hidden"
                    }, o), r.createElement(h, null, i), r.createElement(s, {
                        role: "none",
                        ratio: void 0 === n ? 1 : n
                    }))
                })
        },
        87747: function(t, e, n) {
            n.d(e, {
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
                })(t => {
                    let {
                        theme: e
                    } = t;
                    return (0, a.iv)({
                        maxWidth: e.layout.maxWidth
                    })
                }),
                c = t => (0, r.jsx)(l, {
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
        87881: function(t, e, n) {
            n.d(e, {
                L: function() {
                    return a
                }
            });
            var r = n(14141),
                i = n(37947),
                o = n(87747);
            let a = (0, r.ZP)(o.o).withConfig({
                componentId: "sc-b7b12257-0"
            })(t => {
                let {
                    theme: e
                } = t;
                return (0, i.iv)({
                    display: "flex",
                    flexDirection: "column",
                    marginY: 0,
                    paddingY: ["s-20", null, null, "s-40"],
                    width: "100%",
                    maxWidth: "initial",
                    paddingX: ["calc((100vw - ".concat(e.layout.maxWidth[0], "px) / 2)"), null, null, null, null, "calc((100vw - ".concat(e.layout.maxWidth[5], "px) / 2)")],
                    backgroundColor: "black"
                })
            })
        },
        87185: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var r = n(85893),
                i = n(22674),
                o = n(14141),
                a = n(87747),
                l = n(87881),
                c = n(16970),
                d = n(23115),
                u = n(34254);
            let s = (0, o.ZP)(a.o).withConfig({
                    componentId: "sc-12629982-0"
                })({
                    ["".concat(l.L, " &")]: {
                        order: 1e3,
                        color: i.W.color.greyTone50,
                        marginBottom: i.W.size.s40,
                        a: {
                            color: "inherit",
                            textDecoration: "underline",
                            transition: i.W.transition.text
                        },
                        "a:hover": {
                            color: i.W.color.white_80
                        }
                    }
                }),
                h = (0, o.ZP)(c.x).withConfig({
                    componentId: "sc-12629982-1"
                })({
                    whiteSpace: "pre-wrap",
                    p: {
                        margin: 0,
                        marginBottom: i.W.space.s40
                    },
                    li: {
                        margin: "".concat(i.W.space.s16, " 0")
                    },
                    "ul, ol": {
                        margin: "0 0 ".concat(i.W.space.s40, " ").concat(i.W.space.s24),
                        padding: 0
                    }
                }),
                f = t => {
                    let {
                        id: e,
                        content: {
                            description: n = "",
                            style: {
                                color: i = "foreground",
                                variant: o,
                                align: a
                            } = {}
                        }
                    } = t, l = (0, d.Ty)(), c = l(n);
                    return (0, r.jsx)(s, {
                        "data-blockid": e,
                        color: i,
                        marginY: 0,
                        children: (0, r.jsx)(h, {
                            textAlign: {
                                all: "start",
                                md: a
                            },
                            use: (0, u.HD)(c) ? "p" : "div",
                            variant: "h6" === o ? "subtitle2" : o,
                            children: c
                        })
                    })
                }
        },
        23115: function(t, e, n) {
            n.d(e, {
                CD: function() {
                    return v
                },
                Ty: function() {
                    return x
                },
                bh: function() {
                    return p
                },
                tJ: function() {
                    return i
                }
            });
            var r, i, o = n(85893),
                a = n(67294),
                l = n(59467),
                c = n(22674),
                d = n(25935),
                u = n(11163),
                s = n(14141),
                h = n(6206),
                f = n(4842);
            (r = i || (i = {})).A = "a", r.B = "b", r.Blockquote = "blockquote", r.Br = "br", r.Em = "em", r.H1 = "h1", r.H2 = "h2", r.H3 = "h3", r.H4 = "h4", r.H5 = "h5", r.H6 = "h6", r.I = "i", r.Li = "li", r.Ol = "ol", r.P = "p", r.S = "s", r.Small = "small", r.Strong = "strong", r.Table = "table", r.Tbody = "tbody", r.Td = "td", r.Th = "th", r.Thead = "thead", r.Tr = "tr", r.U = "u", r.Ul = "ul";
            let p = (t, e) => {
                    let {
                        attribs: n
                    } = t;
                    return n && (n[e] || n[e.toLowerCase()])
                },
                g = (0, s.ZP)(l.r).withConfig({
                    componentId: "sc-cbd6de61-0"
                })({
                    "&:hover": {
                        color: c.W.color.accent
                    }
                }),
                m = t => {
                    let {
                        locale: e,
                        defaultLocale: n,
                        customReplace: r,
                        allowedTags: l = Object.values(i)
                    } = t;
                    return function(t) {
                        let c = t.children && (0, d.du)(t.children, {
                            trim: !0,
                            replace: m({
                                locale: e,
                                defaultLocale: n,
                                customReplace: r,
                                allowedTags: l
                            })
                        });
                        if (r) {
                            let e = r(t, c);
                            if (e) return e
                        }
                        if ("text" !== t.type) {
                            if (!l.includes(t.name)) return (0, o.jsx)(o.Fragment, {
                                children: c
                            });
                            if (t.attribs && t.name === i.A) {
                                var u, s, x;
                                if ((null === (u = t.attribs.href) || void 0 === u ? void 0 : u.toLowerCase().startsWith("javascript:")) || (null === (s = t.attribs.href) || void 0 === s ? void 0 : s.toLowerCase().startsWith("data:"))) return (0, o.jsx)(o.Fragment, {
                                    children: c
                                });
                                if (null === (x = t.attribs.href) || void 0 === x ? void 0 : x.startsWith("mailto:")) return (0, o.jsx)(g, {
                                    color: "inherit",
                                    textDecoration: "underline",
                                    href: t.attribs.href,
                                    children: c
                                });
                                let r = p(t, "data-location-type"),
                                    i = p(t, "data-location-legalDocumentId"),
                                    a = p(t, "data-location-locationId"),
                                    l = p(t, "data-location-locale");
                                if (r === f._i.Legal && i) return (0, o.jsx)(h._, {
                                    value: {
                                        type: f._i.Legal,
                                        legalDocumentId: i
                                    },
                                    children: (0, o.jsx)(g, {
                                        color: "inherit",
                                        rel: "noopener",
                                        target: "_blank",
                                        textDecoration: "underline",
                                        children: c
                                    })
                                });
                                if (r === f._i.Internal && a) return (0, o.jsx)(h._, {
                                    value: {
                                        type: f._i.Internal,
                                        locationId: a,
                                        locale: e
                                    },
                                    children: (0, o.jsx)(g, {
                                        color: "inherit",
                                        textDecoration: "underline",
                                        children: c
                                    })
                                });
                                if (r === f._i.External) {
                                    let {
                                        href: r
                                    } = t.attribs, i = e && e === n ? "" : e, a = new URL(r), d = a.href.replace(a.origin, "".concat(a.origin).concat("true" === l && i ? "/".concat(i) : ""));
                                    return (0, o.jsx)(h._, {
                                        value: {
                                            type: f._i.External,
                                            uri: d
                                        },
                                        children: (0, o.jsx)(g, {
                                            color: "inherit",
                                            rel: "noopener",
                                            target: "_blank",
                                            textDecoration: "underline",
                                            children: c
                                        })
                                    })
                                }
                                return (0, o.jsx)(g, {
                                    color: "inherit",
                                    href: t.attribs.href,
                                    rel: "noopener",
                                    target: "_self",
                                    textDecoration: "underline",
                                    children: c
                                })
                            }
                            return Array.isArray(c) && 0 === c.length ? (0, a.createElement)(t.name) : (0, a.createElement)(t.name, null, c)
                        }
                    }
                },
                x = function() {
                    let {
                        allowedTags: t,
                        customReplace: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        defaultLocale: n,
                        locale: r
                    } = (0, u.useRouter)();
                    return (0, a.useCallback)(i => i ? (0, d.ZP)(i, {
                        trim: !0,
                        replace: m({
                            locale: r,
                            defaultLocale: n,
                            customReplace: e,
                            allowedTags: t
                        })
                    }) : null, [n, r, e, t])
                },
                b = /<a\s+href="/,
                v = t => {
                    let {
                        text: e = ""
                    } = t, {
                        defaultLocale: n,
                        locale: r
                    } = (0, u.useRouter)();
                    return (0, a.useMemo)(() => b.test(e) ? (0, d.ZP)(e, {
                        trim: !0,
                        replace: m({
                            locale: r,
                            defaultLocale: n
                        })
                    }) : e, [n, r, e])
                }
        }
    }
]);