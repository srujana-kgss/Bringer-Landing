"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4325], {
        87747: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return s
                }
            });
            var l = n(85893),
                o = n(30116),
                r = n(14141),
                i = n(37947);
            let a = (0, r.ZP)(o.x).withConfig({
                    componentId: "sc-d85bbb3d-0"
                })(e => {
                    let {
                        theme: t
                    } = e;
                    return (0, i.iv)({
                        maxWidth: t.layout.maxWidth
                    })
                }),
                s = e => (0, l.jsx)(a, {
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
        8327: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return s
                }
            });
            var l = n(85893),
                o = n(79271),
                r = n(87955),
                i = n(41691),
                a = n(6600);
            let s = e => {
                let {
                    blocks: t
                } = e, n = (0, i.R)(t), {
                    backgroundColor: s,
                    backgroundImage: c
                } = (0, a.X)(), u = Boolean(s) || Boolean(c);
                if (n.length < 2) {
                    var d, h;
                    return (0, l.jsx)(l.Fragment, {
                        children: null === (d = n[0]) || void 0 === d ? void 0 : null === (h = d.blocks) || void 0 === h ? void 0 : h.map(e => (0, l.jsx)(o.b, { ...e
                        }, e.id))
                    })
                }
                return (0, l.jsx)(l.Fragment, {
                    children: n.map((e, t) => {
                        var n;
                        return (0, l.jsx)(r.O, {
                            mode: e.themeMode,
                            backgroundColor: u ? void 0 : "background",
                            children: null === (n = e.blocks) || void 0 === n ? void 0 : n.map(e => (0, l.jsx)(o.b, { ...e
                            }, e.id))
                        }, t)
                    })
                })
            }
        },
        3333: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return s
                }
            });
            var l = n(85893),
                o = n(67294),
                r = n(17802),
                i = n(10255),
                a = n(28998);
            let s = (0, o.memo)(function(e) {
                let {
                    countryCode: t,
                    ...n
                } = e, o = t ? (0, a.mv)(t) : void 0;
                return (0, l.jsx)(i.Y, {
                    display: "inline-block",
                    src: o,
                    size: 24,
                    borderRadius: r.w.ROUND,
                    alt: null != t ? t : "Country flag",
                    ...n
                })
            })
        },
        73815: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return y
                }
            });
            var l = n(85893),
                o = n(51303),
                r = n(48377),
                i = n(69903),
                a = n(72256),
                s = n(96932),
                c = n(37903),
                u = n(939),
                d = n(56607),
                h = n(8954),
                m = n(67294),
                p = n(74925),
                x = n(3333),
                g = n(56435),
                v = n(32055),
                f = n(38556),
                j = n(87559);
            let {
                publicRuntimeConfig: {
                    assetsUrl: b
                }
            } = (0, p.i)(), w = Array.from(g.J$), y = e => {
                let {
                    isOpen: t,
                    onClose: n
                } = e, p = (0, f.J)(), [g, y] = (0, m.useState)(""), C = (0, m.useDeferredValue)(g), k = (0, j.T)(), W = (0, v.o)(), I = (0, m.useMemo)(() => w.filter(e => {
                    let t = p(e);
                    return t.toLowerCase().includes(C.toLowerCase())
                }).map(e => ({
                    countryCode: e,
                    countryName: p(e)
                })).sort((e, t) => e.countryName.localeCompare(t.countryName)), [p, C]), R = (0, m.useCallback)(() => {
                    n(), y("")
                }, [y, n]), D = (0, m.useCallback)(async e => {
                    R(), await W(e)
                }, [R, W]);
                return (0, l.jsxs)(o.G, {
                    open: t,
                    onClose: R,
                    "aria-label": k("shared.labelSearch"),
                    labelButtonClose: k("shared.button.close"),
                    variant: "bottom-sheet",
                    shouldKeepMaxHeight: !0,
                    children: [(0, l.jsx)(r.h, {
                        variant: "bottom-sheet",
                        children: (0, l.jsx)(r.h.Sticky, {
                            children: (0, l.jsx)(i.o, {
                                placeholder: k("shared.labelSearch"),
                                value: g,
                                onChange: y
                            })
                        })
                    }), I.length > 0 ? (0, l.jsx)(a.Z, {
                        children: I.map(e => {
                            let {
                                countryCode: t,
                                countryName: n
                            } = e;
                            return (0, l.jsx)(s.c, {
                                onClick: () => D(t),
                                use: "button",
                                children: (0, l.jsxs)(c.U, {
                                    use: "span",
                                    space: "s-12",
                                    align: "center",
                                    children: [(0, l.jsx)(x.A, {
                                        countryCode: t
                                    }), (0, l.jsx)(u.xv, {
                                        variant: "primary",
                                        children: n
                                    })]
                                })
                            }, t)
                        })
                    }) : (0, l.jsxs)(d.g, {
                        space: "s-12",
                        align: "center",
                        children: [(0, l.jsx)(h.Ee, {
                            size: 104,
                            alt: k("shared.search.noResult"),
                            src: "".concat(b, "/assets/3d-images-v2/3D086.png"),
                            srcSet: "".concat(b, "/assets/3d-images-v2/3D086@2x.png 2x, ").concat(b, "/assets-v2/3d-images/3D086@3x.png 3x")
                        }), (0, l.jsx)(u.xv, {
                            variant: "primary",
                            children: k("shared.search.noResult")
                        })]
                    })]
                })
            }
        },
        34325: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return ed
                }
            });
            var l = n(85893),
                o = n(67294),
                r = n(47154),
                i = n(11163),
                a = n(8327),
                s = n(56435),
                c = n(86853),
                u = n(18754),
                d = n(29867),
                h = n(38556),
                m = n(28998),
                p = n(10255),
                x = n(73815),
                g = n(9166),
                v = n(22674),
                f = n(37947),
                j = n(14141);
            let b = (0, j.ZP)(g.a).withConfig({
                    componentId: "sc-c1bdfc96-0"
                })(e => {
                    let {
                        theme: t
                    } = e;
                    return (0, f.ZP)({ ...t.textStyles.small,
                        height: 26,
                        display: "flex",
                        alignItems: "center",
                        color: v.W.color.grey20,
                        transition: v.W.transition.text,
                        wordBreak: "break-word",
                        "&:hover": {
                            color: v.W.color.white
                        },
                        "&:active": {
                            color: v.W.color.white_80
                        },
                        ["@media ".concat(v.W.media.xxl)]: {
                            height: 32
                        }
                    })
                }),
                w = () => {
                    let [e, t] = (0, o.useState)(!1), n = (0, h.J)(), {
                        locale: r
                    } = (0, i.useRouter)(), {
                        region: a
                    } = (0, c.i4)(r), s = n(a), u = (0, m.mv)(a);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(b, {
                            onClick: () => t(!0),
                            useIcon: (0, l.jsx)(p.Y, {
                                src: u,
                                size: 14,
                                alt: a
                            }),
                            children: s
                        }), (0, l.jsx)(x.j, {
                            isOpen: e,
                            onClose: () => t(!1)
                        })]
                    })
                };
            var y = n(15916),
                C = n(76563),
                k = n(67520),
                W = n(34254),
                I = n(85295),
                R = n(73220);
            let D = c.Mj.reduce((e, t) => {
                    let {
                        language: n,
                        title: l
                    } = t;
                    return { ...e,
                        [n]: {
                            label: l,
                            value: n
                        }
                    }
                }, {}),
                L = e => e in D,
                M = () => {
                    let e = (0, i.useRouter)(),
                        {
                            language: t,
                            region: n
                        } = (0, c.i4)(e.locale),
                        r = (0, y.x)(),
                        a = function() {
                            let {
                                asPath: e,
                                locale: t,
                                push: n,
                                query: {
                                    slug: l,
                                    ...r
                                } = {}
                            } = (0, i.useRouter)(), {
                                region: a
                            } = (0, c.i4)(t), [, s] = (0, I.B)(R.cn.NextLocale);
                            return (0, o.useCallback)(async (t, l) => {
                                var o;
                                let i = {
                                        pathname: null !== (o = e.split("?")[0]) && void 0 !== o ? o : "/",
                                        query: r
                                    },
                                    u = (0, c.$2)(t, null != l ? l : a);
                                i && u && (s(u), await n(i, i, {
                                    locale: u
                                }))
                            }, [e, r, a, s, n])
                        }(),
                        u = (0, o.useMemo)(() => n ? (0, s.uj)(n).map(e => D[e]).filter(W.fQ) : [], [n]),
                        d = (0, o.useCallback)(async e => {
                            r.toggle(!1), await a(e)
                        }, [r, a]);
                    if (!t || u.length <= 1 || e.pathname.startsWith("/careers") && "JP" !== n) return null;
                    let h = L(t) ? D[t].label : "Unknown";
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(b, {
                            useIcon: k.S,
                            "aria-label": h,
                            ...r.getAnchorProps(),
                            children: h
                        }), (0, l.jsx)(C.L, { ...r.getTargetProps(),
                            maxWidth: 240,
                            placement: "top-start",
                            flip: !1,
                            width: "100%",
                            children: u.map(e => {
                                let {
                                    value: t,
                                    label: n
                                } = e;
                                return (0, l.jsx)(C.L.Item, {
                                    use: "button",
                                    value: t,
                                    onClick: () => d(t),
                                    children: n
                                }, t)
                            })
                        })]
                    })
                };
            var P = n(87881),
                S = n(31346),
                N = n(30116),
                Z = n(79980),
                Y = n(4842),
                B = n(68078),
                _ = n(74183),
                F = n(79253);
            let A = (0, j.ZP)(F.r).withConfig({
                    componentId: "sc-f5724ed1-0"
                })({
                    transition: "color 0.15s",
                    "&:hover": {
                        color: "white"
                    },
                    "&:active": {
                        color: "white-80"
                    }
                }),
                J = e => {
                    let {
                        children: t = "",
                        value: n,
                        title: o,
                        ...r
                    } = e, i = o;
                    return !i && (0, W.HD)(t) && (i = t), (0, l.jsx)(A, {
                        color: "grey-tone-50",
                        display: "block",
                        py: "s-4",
                        title: i,
                        value: n,
                        variant: "small",
                        ...r,
                        children: t
                    })
                },
                X = (0, j.ZP)(S.k).withConfig({
                    componentId: "sc-29219cc7-0"
                })((0, f.iv)({
                    flexWrap: "wrap",
                    gridColumn: ["1 / span 3", null, null, 3],
                    gridRow: [2, null, null, 1],
                    listStyle: "none"
                })),
                T = () => {
                    var e, t;
                    let {
                        getLocation: n,
                        getLocationLink: o,
                        getLocationTitle: r
                    } = (0, B.Yt)(), {
                        getSitemapLocationsByScope: i
                    } = (0, _.j)(), a = null === (e = null === (t = i([Z.d.Legal])) || void 0 === t ? void 0 : t.find(e => {
                        var t;
                        let {
                            locationId: l
                        } = e;
                        return (null === (t = n(l)) || void 0 === t ? void 0 : t.type) === Y._i.Section
                    })) || void 0 === e ? void 0 : e.items;
                    return (0, l.jsx)(X, {
                        use: "ul",
                        children: null == a ? void 0 : a.map(e => {
                            let t = r(e),
                                n = o(e);
                            return t && n ? (0, l.jsx)(N.x, {
                                use: "li",
                                mr: "s-24",
                                children: (0, l.jsx)(J, {
                                    value: n,
                                    children: t
                                })
                            }, e) : null
                        })
                    })
                };
            var U = n(93141),
                $ = n(84533),
                Q = n(63537),
                z = n(94166),
                E = n(37903),
                H = n(939),
                O = n(58003),
                G = n(23024),
                K = n(65373);
            let q = (0, j.ZP)(Q.X).withConfig({
                    componentId: "sc-3da5a3f3-0"
                })({
                    width: "100%"
                }),
                V = (0, j.ZP)(J).withConfig({
                    componentId: "sc-3da5a3f3-1"
                })((0, f.iv)({
                    paddingY: "s-8"
                })),
                ee = e => {
                    let {
                        sitemapLocation: t
                    } = e, {
                        getLocationTitle: n,
                        getLocationLink: r,
                        getLocationProps: i
                    } = (0, B.Yt)(), a = n(t.locationId), s = (0, o.useMemo)(() => {
                        var e;
                        return null === (e = t.items) || void 0 === e ? void 0 : e.map(e => {
                            let t = i(e),
                                o = n(e),
                                a = r(e);
                            return (null == t ? void 0 : t.scope.includes(Z.d.Footer)) && a ? (0, l.jsx)(V, {
                                value: a,
                                children: o
                            }, e) : null
                        })
                    }, [t.items, i, n, r]);
                    return a ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(N.x, {
                            hide: "md-*",
                            mb: "s-8",
                            children: (0, l.jsx)(z.Z, {
                                children: e => {
                                    let {
                                        state: t,
                                        toggle: n
                                    } = e;
                                    return (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(q, {
                                            onClick: () => n(),
                                            children: (0, l.jsxs)(E.U, {
                                                use: "span",
                                                py: "s-8",
                                                children: [(0, l.jsx)(H.xv, {
                                                    use: "h4",
                                                    mr: "auto",
                                                    color: "white",
                                                    variant: "caption",
                                                    children: a
                                                }), t ? (0, l.jsx)(G.Q, {
                                                    color: "white",
                                                    "aria-label": a
                                                }) : (0, l.jsx)(K.W, {
                                                    color: "white",
                                                    "aria-label": a
                                                })]
                                            })
                                        }), (0, l.jsx)(O.K, { in: t,
                                            children: s
                                        })]
                                    })
                                }
                            })
                        }), (0, l.jsxs)(N.x, {
                            hide: "*-md",
                            overflow: "hidden",
                            flex: 1,
                            pb: "s-8",
                            pr: "s-16",
                            children: [(0, l.jsx)(H.xv, {
                                use: "h4",
                                py: "s-8",
                                color: "white",
                                variant: "caption",
                                children: a
                            }), s]
                        })]
                    }) : null
                };

            function et(e) {
                var t, n;
                return (null !== (n = null === (t = e.items) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) + 1
            }
            let en = (0, j.ZP)(S.k).withConfig({
                    componentId: "sc-b07ba53d-0"
                })({
                    paddingLeft: v.W.space.s20,
                    paddingRight: v.W.space.s20,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    ["@media ".concat(v.W.media.md)]: {
                        gap: v.W.space.s16,
                        flexDirection: "row"
                    },
                    ["@media ".concat(v.W.media.lg)]: {
                        paddingLeft: 0,
                        paddingRight: 0
                    }
                }),
                el = () => {
                    let {
                        getLocation: e
                    } = (0, B.Yt)(), {
                        isBusiness: t
                    } = (0, $.C)(), {
                        getSitemapLocation: n,
                        getSitemapIndexLocations: r,
                        getSitemapLocationsByParentId: i
                    } = (0, _.j)(), a = (0, o.useMemo)(() => {
                        var l, o;
                        let a = r(),
                            s = t ? null == a ? void 0 : null === (l = a[1]) || void 0 === l ? void 0 : l.locationId : null == a ? void 0 : null === (o = a[0]) || void 0 === o ? void 0 : o.locationId;
                        return s ? i(s).reduce((t, l) => {
                            let o = l.items || [];
                            if (!o.length) return t;
                            let r = o.some(t => {
                                var n;
                                return (null === (n = e(t)) || void 0 === n ? void 0 : n.type) === Y._i.Section
                            });
                            return r ? [...t, ...o.map(e => n(e)).filter(W.fQ)] : [...t, l]
                        }, []).filter(e => e.scope.includes(Z.d.Footer)) : []
                    }, [e, n, r, i, t]), s = (0, U.a)(v.W.media.lg), c = (0, U.a)(v.W.media.xxl), u = a.flatMap(e => e.locationId).length;
                    if (!u) return null;
                    let d = function(e, t) {
                        let n = Math.min(t.length, e),
                            l = Array.from({
                                length: n
                            }).map(() => []),
                            o = Array.from({
                                length: n
                            }).map(() => 0),
                            r = [...t].sort((e, t) => et(t) - et(e));
                        return r.forEach(e => {
                            let t = et(e),
                                r = n - 1,
                                i = 1 / 0;
                            for (let e = n - 1; e >= 0; e--) o[e] < i && (r = e, i = o[e]);
                            l[r].push(e), o[r] += t
                        }), l
                    }(c ? 8 : s ? 6 : 4, a);
                    return (0, l.jsx)(en, {
                        children: d.map((e, t) => (0, l.jsx)(N.x, {
                            width: "100%",
                            children: e.map(e => (0, l.jsx)(ee, {
                                sitemapLocation: e
                            }, e.locationId))
                        }, "".concat(t, "-").concat(d.length, "-column")))
                    })
                };
            var eo = n(15059),
                er = n(98637),
                ei = n(99939),
                ea = n(81055);
            let es = (0, j.ZP)(F.r).withConfig({
                    componentId: "sc-60d857bf-0"
                })({
                    display: "block",
                    padding: v.W.space.s8,
                    textAlign: "center",
                    ["".concat(eo.J)]: {
                        color: v.W.color.greyTone50,
                        transition: v.W.transition.text
                    },
                    ["&:hover ".concat(eo.J)]: {
                        color: v.W.color.white_90
                    }
                }),
                ec = (0, j.ZP)(N.x).withConfig({
                    componentId: "sc-60d857bf-1"
                })({
                    listStyle: "none"
                }),
                eu = () => {
                    let e = (0, ei.H)(),
                        t = (0, ea.o)();
                    return (0, l.jsxs)(E.U, {
                        use: "ul",
                        marginY: "s-40",
                        paddingBottom: "s-8",
                        borderBottom: "1px solid",
                        borderBottomColor: "white-10",
                        space: "s-8",
                        paddingX: {
                            all: "s-20",
                            lg: 0
                        },
                        children: [(0, l.jsx)(ec, {
                            use: "li",
                            width: "100%",
                            children: (0, l.jsx)(F.r, {
                                value: e.indexLink,
                                children: (0, l.jsx)(er.a, {
                                    color: v.W.color.white,
                                    variant: "small",
                                    title: "Logo footer"
                                })
                            })
                        }), t.filter(e => e.icon).map(e => {
                            let {
                                url: t,
                                icon: n,
                                name: o
                            } = e;
                            return (0, l.jsx)(ec, {
                                use: "li",
                                children: (0, l.jsx)(es, {
                                    target: "_blank",
                                    rel: "noopener",
                                    "aria-label": o,
                                    href: t,
                                    children: (0, l.jsx)(eo.J, {
                                        name: n,
                                        size: 16
                                    })
                                })
                            }, t)
                        })]
                    })
                },
                ed = e => {
                    let {
                        blocks: t = [],
                        isSitemapHidden: n = !1
                    } = e, h = (0, d.U)(), {
                        locale: m
                    } = (0, i.useRouter)(), {
                        region: p
                    } = (0, c.i4)(m), x = s.sv.has(p), g = null == m ? void 0 : m.toLowerCase(), v = Boolean(g && s.tN.has(g)), f = (0, o.useMemo)(() => v ? null == t ? void 0 : t.filter(e => {
                        let {
                            type: t
                        } = e;
                        return t === u._C.Text
                    }) : t, [v, t]);
                    return (0, l.jsxs)(P.L, {
                        use: "footer",
                        role: "contentinfo",
                        children: [(0, l.jsx)(a.Q, {
                            blocks: f
                        }), n || h || v || (0, l.jsx)(el, {}), (0, l.jsx)(eu, {}), h || x || (0, l.jsxs)(r.r, {
                            columnGap: "s-32",
                            columns: "auto auto 1fr",
                            marginBottom: "s-40",
                            paddingX: {
                                all: "s-20",
                                lg: 0
                            },
                            rowGap: "s-12",
                            children: [(0, l.jsx)(w, {}), (0, l.jsx)(M, {}), v || (0, l.jsx)(T, {})]
                        })]
                    })
                }
        },
        87881: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return i
                }
            });
            var l = n(14141),
                o = n(37947),
                r = n(87747);
            let i = (0, l.ZP)(r.o).withConfig({
                componentId: "sc-b7b12257-0"
            })(e => {
                let {
                    theme: t
                } = e;
                return (0, o.iv)({
                    display: "flex",
                    flexDirection: "column",
                    marginY: 0,
                    paddingY: ["s-20", null, null, "s-40"],
                    width: "100%",
                    maxWidth: "initial",
                    paddingX: ["calc((100vw - ".concat(t.layout.maxWidth[0], "px) / 2)"), null, null, null, null, "calc((100vw - ".concat(t.layout.maxWidth[5], "px) / 2)")],
                    backgroundColor: "black"
                })
            })
        },
        10255: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return h
                }
            });
            var l = n(85893),
                o = n(67294),
                r = n(8954),
                i = n(17802),
                a = n(37947),
                s = n(14141),
                c = n(34254);
            let u = (0, s.ZP)(r.Ee).withConfig({
                    componentId: "sc-4439bf8f-0"
                })(e => {
                    let {
                        size: t
                    } = e;
                    return (0, a.iv)({
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
                d = e => null == e ? void 0 : e.endsWith(".webp"),
                h = (0, o.memo)(function(e) {
                    let {
                        src: t,
                        alt: n,
                        size: o = 24,
                        ...r
                    } = e;
                    return (0, l.jsx)(u, {
                        image: t ? {
                            default: t,
                            "1x": [t, d(t) ? t.replace(/.webp$/, ".png") : void 0].filter(c.fQ)
                        } : void 0,
                        display: "inline-block",
                        borderRadius: i.w.ROUND,
                        alt: null != n ? n : "",
                        size: o,
                        ...r
                    })
                })
        },
        32055: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return d
                }
            });
            var l = n(67294),
                o = n(11163),
                r = n(56435),
                i = n(73220),
                a = n(60811),
                s = n(86853),
                c = n(23813),
                u = n(85295);

            function d() {
                let [, e, t] = (0, u.B)(i.cn.NextLocale), {
                    asPath: n,
                    query: d,
                    push: h
                } = (0, o.useRouter)(), m = (0, l.useCallback)((n, l) => l ? e(n) : t(), [e, t]);
                return (0, l.useCallback)(async (e, t) => {
                    let l = r.J$.has(e),
                        o = l ? (0, r.bS)(e) : r.k$,
                        i = t && (0, r.uj)(e).includes(t) ? t : o,
                        u = (0, s.$2)(i, e);
                    m(u, l);
                    let p = (0, c.Ty)(n, d, {
                        [a.AS.FallbackToIndex]: ""
                    });
                    await h(p, void 0, {
                        locale: u
                    })
                }, [n, h, d, m])
            }
        },
        38556: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return s
                }
            });
            var l = n(67294),
                o = n(11163),
                r = n(86853),
                i = n(28998);
            let a = new Map;

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "region",
                    {
                        locale: t
                    } = (0, o.useRouter)(),
                    {
                        language: s
                    } = (0, r.i4)(t);
                return (0, l.useCallback)(function(t) {
                    var l, o, r, c;
                    let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                    if ("HK" === t) {
                        let l = (null === (o = n.g.Intl) || void 0 === o ? void 0 : o.DisplayNames) && new n.g.Intl.DisplayNames(u, {
                            type: e,
                            style: "short"
                        }).of(t);
                        return null != l ? l : t
                    }
                    let d = "".concat(e, ":").concat(u),
                        h = null !== (r = a.get(d)) && void 0 !== r ? r : (null === (l = n.g.Intl) || void 0 === l ? void 0 : l.DisplayNames) && a.set(d, new n.g.Intl.DisplayNames(u, {
                            type: e
                        })).get(d);
                    if ("currency" === e && (0, i.YX)(t)) return (0, i.A1)(t);
                    try {
                        return null !== (c = null == h ? void 0 : h.of(t)) && void 0 !== c ? c : t
                    } catch (e) {
                        return console.error(e), t
                    }
                }, [s, e])
            }
        },
        41691: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return u
                }
            });
            var l = n(67294),
                o = n(42378),
                r = n(58944),
                i = n(79248),
                a = n(18754),
                s = n(48983);
            let c = e => e.type === a._C.Widget && e.content.widget === s.l.ThemeSwitcherWidget;

            function u(e) {
                let t = (0, o.F)(),
                    n = (0, l.useMemo)(() => {
                        if (!(null == e ? void 0 : e.length)) return [];
                        let n = [],
                            l = t.mode,
                            o = 0;
                        for (let t = 0; t < e.length; t++) {
                            let a = c(e[t]);
                            if (a) {
                                let a = e.slice(o, t);
                                a.length && n.push({
                                    themeMode: (0, i.M)(l),
                                    blocks: a
                                }), l = l === r.I.Dark ? r.I.Light : r.I.Dark, o = t + 1
                            }
                        }
                        let a = e.slice(o, e.length);
                        return a.length && n.push({
                            themeMode: (0, i.M)(l),
                            blocks: a
                        }), n
                    }, [t, e]);
                return n
            }
        }
    }
]);