"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7403], {
        5607: function(t, e, n) {
            n.d(e, {
                N: function() {
                    return f
                },
                Q: function() {
                    return i
                }
            });
            var l, i, r = n(85893),
                a = n(22674),
                o = n(51482),
                s = n(79581),
                c = n(14141),
                d = n(37947),
                x = n(16678),
                u = n(34254),
                h = n(79253);
            (l = i || (i = {})).AccentText = "accent-text", l.Accent = "accent";
            let p = (0, c.ZP)(h.r).withConfig({
                    componentId: "sc-b705547f-0"
                })(t => {
                    let {
                        theme: e
                    } = t;
                    return (0, d.iv)({ ...e.textStyles.subtitle2,
                        alignItems: "center",
                        borderRadius: 20,
                        color: a.W.color.foreground,
                        cursor: "pointer",
                        display: "inline-flex",
                        height: a.W.size.s40,
                        marginLeft: a.W.size.n16,
                        paddingX: a.W.size.s16,
                        paddingY: a.W.space.s4,
                        transition: "".concat(a.W.transition.text, ", ").concat(a.W.transition.background),
                        "&:hover": {
                            color: a.W.color.background,
                            backgroundColor: a.W.color.foreground
                        }
                    })
                }, x.bU({
                    prop: "colorVariant",
                    variants: {
                        [i.Accent]: {
                            color: a.W.color.accent,
                            "&:hover": {
                                color: a.W.color.white,
                                backgroundColor: a.W.color.accent
                            }
                        },
                        [i.AccentText]: {
                            "&:hover": {
                                color: a.W.color.accent,
                                backgroundColor: "transparent"
                            }
                        }
                    }
                })),
                g = (0, c.ZP)(s.m).withConfig({
                    componentId: "sc-b705547f-1"
                })((0, d.iv)({
                    flexShrink: 0,
                    marginLeft: "s-8",
                    size: [16, null, null, 24]
                })),
                f = t => {
                    let {
                        children: e,
                        value: n,
                        gaEvent: l,
                        colorVariant: a = i.Accent,
                        ...s
                    } = t;
                    return (0, r.jsxs)(p, {
                        value: n,
                        gaEvent: l,
                        colorVariant: a,
                        ...s,
                        children: [(0, r.jsx)(o.x, {
                            max: 2,
                            children: e
                        }), (0, r.jsx)(g, {
                            "aria-label": (0, u.HD)(e) ? e : void 0
                        })]
                    })
                }
        },
        87747: function(t, e, n) {
            n.d(e, {
                o: function() {
                    return s
                }
            });
            var l = n(85893),
                i = n(30116),
                r = n(14141),
                a = n(37947);
            let o = (0, r.ZP)(i.x).withConfig({
                    componentId: "sc-d85bbb3d-0"
                })(t => {
                    let {
                        theme: e
                    } = t;
                    return (0, a.iv)({
                        maxWidth: e.layout.maxWidth
                    })
                }),
                s = t => (0, l.jsx)(o, {
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
        33630: function(t, e, n) {
            n.d(e, {
                S: function() {
                    return f
                }
            });
            var l = n(85893),
                i = n(25675),
                r = n.n(i),
                a = n(30116),
                o = n(22674),
                s = n(28193),
                c = n(939),
                d = n(14141),
                x = n(37947),
                u = n(7670),
                h = n(67577),
                p = n(10255);
            let g = (0, d.ZP)(a.x).withConfig({
                    componentId: "sc-58b2f837-0"
                })((0, x.iv)({
                    position: "relative",
                    zIndex: 1,
                    isolation: "isolate",
                    ["@media ".concat(o.W.media.sm)]: {
                        position: "absolute"
                    }
                })),
                f = t => {
                    let {
                        avatar: e,
                        caption: n,
                        description: i,
                        image: o,
                        title: d = "",
                        ...x
                    } = t, f = (0, u.e)();
                    return (0, l.jsx)(h.G, { ...x,
                        children: (0, l.jsxs)(a.x, {
                            px: {
                                all: 0,
                                md: "s-24"
                            },
                            pb: {
                                all: 0,
                                md: "s-24"
                            },
                            children: [e && (0, l.jsx)(g, {
                                children: (0, l.jsx)(p.Y, {
                                    image: e,
                                    size: {
                                        all: 40,
                                        xxl: 56
                                    }
                                })
                            }), o && (0, l.jsx)(s.Ig, {
                                top: "-s-24",
                                left: "-s-24",
                                width: "calc(100% + 48px)",
                                right: 0,
                                aspectRatio: 484 / 264,
                                children: (0, l.jsx)(r(), {
                                    alt: d,
                                    src: o,
                                    loader: f,
                                    fill: !0,
                                    sizes: "100vw",
                                    style: {
                                        objectFit: "cover",
                                        borderTopLeftRadius: "24px",
                                        borderTopRightRadius: "24px"
                                    }
                                })
                            }), d && (0, l.jsx)(c.xv, {
                                use: "h4",
                                variant: {
                                    all: "h4",
                                    xxl: "h5"
                                },
                                children: d
                            }), n && (0, l.jsx)(c.xv, {
                                use: "p",
                                variant: "primary",
                                color: "grey-50",
                                role: "doc-subtitle",
                                children: n
                            }), (0, l.jsx)(c.xv, {
                                use: "p",
                                my: "s-8",
                                children: i
                            })]
                        })
                    })
                }
        },
        79253: function(t, e, n) {
            n.d(e, {
                r: function() {
                    return u
                }
            });
            var l = n(85893),
                i = n(67294),
                r = n(939),
                a = n(14141),
                o = n(29867),
                s = n(35402),
                c = n(34254),
                d = n(6206);
            let x = (0, a.ZP)(r.xv).withConfig({
                    componentId: "sc-85172584-0"
                })({
                    wordBreak: "break-word"
                }),
                u = (0, i.forwardRef)((t, e) => {
                    let {
                        value: n,
                        gaEvent: i,
                        onClick: r,
                        ...a
                    } = t, u = (0, o.U)(), {
                        trackLink: h
                    } = (0, s.z$)(), p = t => {
                        if (u) {
                            t.preventDefault(), t.stopPropagation();
                            return
                        }(0, c.mf)(r) && r(t), h(t, i, n)
                    };
                    return n ? (0, l.jsx)(d._, {
                        value: n,
                        children: (0, l.jsx)(x, {
                            ref: e,
                            use: "a",
                            onClick: p,
                            ...a
                        })
                    }) : (0, l.jsx)(x, {
                        ref: e,
                        use: "a",
                        onClick: p,
                        ...a
                    })
                });
            u.displayName = "Link"
        },
        67577: function(t, e, n) {
            n.d(e, {
                G: function() {
                    return d
                }
            });
            var l = n(85893),
                i = n(49133),
                r = n(96944),
                a = n(75667),
                o = n(51303),
                s = n(87559),
                c = n(66639);
            let d = t => {
                let {
                    open: e,
                    onClose: n,
                    children: d,
                    ...x
                } = t, u = (0, s.T)(), h = (0, c.b)("md");
                return h ? (0, l.jsxs)(i.u, {
                    open: Boolean(e),
                    display: "flex",
                    onClose: n,
                    ...x,
                    role: "dialog",
                    "aria-label": u("shared.cookieConsent.preferences.title"),
                    children: [(0, l.jsx)(r.n, { in: Boolean(e),
                        offsetX: 0,
                        offsetY: -24,
                        children: (0, l.jsx)(a.$, {
                            radius: "popup",
                            elevation: 200,
                            maxWidth: {
                                all: "500px",
                                xxl: "700px"
                            },
                            width: {
                                all: "500px",
                                xxl: "700px"
                            },
                            m: "auto",
                            children: d
                        })
                    }), (0, l.jsx)(i.u.CloseButton, {
                        "aria-label": u("shared.button.close"),
                        onClick: n
                    })]
                }) : (0, l.jsx)(o.G, {
                    open: e,
                    onClose: n,
                    "aria-label": "Modal",
                    ...x,
                    variant: "bottom-sheet",
                    children: d
                })
            }
        },
        10255: function(t, e, n) {
            n.d(e, {
                Y: function() {
                    return u
                }
            });
            var l = n(85893),
                i = n(67294),
                r = n(8954),
                a = n(17802),
                o = n(37947),
                s = n(14141),
                c = n(34254);
            let d = (0, s.ZP)(r.Ee).withConfig({
                    componentId: "sc-4439bf8f-0"
                })(t => {
                    let {
                        size: e
                    } = t;
                    return (0, o.iv)({
                        minWidth: e,
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
                x = t => null == t ? void 0 : t.endsWith(".webp"),
                u = (0, i.memo)(function(t) {
                    let {
                        src: e,
                        alt: n,
                        size: i = 24,
                        ...r
                    } = t;
                    return (0, l.jsx)(d, {
                        image: e ? {
                            default: e,
                            "1x": [e, x(e) ? e.replace(/.webp$/, ".png") : void 0].filter(c.fQ)
                        } : void 0,
                        display: "inline-block",
                        borderRadius: a.w.ROUND,
                        alt: null != n ? n : "",
                        size: i,
                        ...r
                    })
                })
        },
        37403: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return q
                }
            });
            var l, i, r = n(85893),
                a = n(30116),
                o = n(31346),
                s = n(14141),
                c = n(87747),
                d = n(56607),
                x = n(16970),
                u = n(5607);
            let h = t => {
                let {
                    caption: e,
                    title: n,
                    button: l
                } = t;
                return (0, r.jsxs)(d.g, {
                    space: "s-16",
                    align: {
                        all: "start",
                        md: "center",
                        lg: "start"
                    },
                    children: [e && (0, r.jsx)(x.x, {
                        use: "p",
                        variant: "h6",
                        color: "grey-50",
                        textAlign: {
                            all: "start",
                            md: "center",
                            lg: "start"
                        },
                        children: e
                    }), n && (0, r.jsx)(x.x, {
                        mb: "s-4",
                        use: "h2",
                        variant: "h5",
                        maxWidth: "100%",
                        textAlign: {
                            all: "start",
                            md: "center",
                            lg: "start"
                        },
                        children: n
                    }), l && (0, r.jsx)(u.N, {
                        value: l.link,
                        children: l.label
                    })]
                })
            };
            var p = n(939),
                g = n(45919),
                f = n(37903),
                m = n(84353),
                v = n(11553),
                j = n(37947),
                b = n(25675),
                w = n.n(b),
                C = n(7670);
            let k = t => {
                    let {
                        src: e
                    } = t, n = (0, C.e)();
                    return (0, r.jsx)(w(), {
                        src: e,
                        alt: "",
                        loader: n,
                        fill: !0,
                        sizes: "100vw",
                        style: {
                            objectFit: "cover"
                        }
                    })
                },
                y = (0, s.ZP)(p.xv).withConfig({
                    componentId: "sc-d6539507-0"
                })((0, g.Ou)("subtitle2"), {
                    position: "relative",
                    width: "100%",
                    zIndex: 1
                }),
                I = (0, s.ZP)(f.U).withConfig({
                    componentId: "sc-d6539507-1"
                })((0, j.iv)({
                    marginTop: "s-8",
                    position: "relative",
                    width: "100%",
                    zIndex: 1
                })),
                W = (0, s.ZP)(m.o).withConfig({
                    componentId: "sc-d6539507-2"
                })(t => {
                    let {
                        hasDescription: e
                    } = t;
                    return (0, j.iv)({
                        backgroundColor: "grey-tone-10",
                        borderRadius: 24,
                        marginBottom: ["s-16", null, null, "s-32"],
                        overflow: "hidden",
                        position: "relative",
                        transition: "box-shadow 0.25s",
                        transform: "translate3d(0, 0, 0)",
                        backfaceVisibility: "hidden",
                        ...e && {
                            "&::after": {
                                background: "linear-gradient(180deg, rgba(25, 28, 31, 0) 0%, rgba(25, 28, 31, 0.4) 57.81%)",
                                bottom: 0,
                                content: '""',
                                left: 0,
                                opacity: 0,
                                position: "absolute",
                                right: 0,
                                top: 0,
                                transition: "opacity 0.4s"
                            }
                        },
                        ["".concat(y, ", ").concat(I)]: {
                            opacity: 0,
                            transform: "scale(0.9)",
                            transition: "all 0.4s",
                            visibility: "hidden"
                        },
                        img: {
                            transition: "transform 0.6s"
                        },
                        "&:hover": {
                            boxShadow: "0 10px 24px 0 rgba(25, 28, 31, 0.08), 0 6px 12px 0 rgba(25, 28, 31, 0.04)",
                            img: {
                                transform: "scale(1.1)"
                            },
                            ["".concat(y, ", ").concat(I)]: {
                                opacity: 1,
                                transform: "scale(1)",
                                visibility: "visible"
                            },
                            ...e && {
                                "&::after": {
                                    opacity: 1
                                }
                            }
                        }
                    })
                }),
                z = (0, s.ZP)(o.k).withConfig({
                    componentId: "sc-d6539507-3"
                })((0, j.iv)({
                    color: "white",
                    alignItems: "flex-end",
                    flexFlow: "column wrap",
                    justifyContent: "flex-end",
                    padding: "s-16"
                })),
                P = t => {
                    let {
                        image: e,
                        avatar: n,
                        caption: l,
                        description: i,
                        aspectRatio: a
                    } = t;
                    return (0, r.jsx)(W, {
                        use: "figure",
                        ratio: a,
                        hasDescription: Boolean(i),
                        children: (0, r.jsxs)(z, {
                            children: [e && (0, r.jsx)(k, {
                                src: e
                            }), (0, r.jsx)(y, {
                                use: "blockquote",
                                children: i
                            }), (0, r.jsx)(I, {
                                use: "figcaption",
                                children: (0, r.jsxs)(f.U, {
                                    space: "s-4",
                                    children: [n && (0, r.jsx)(v.qE, {
                                        image: n,
                                        size: 20
                                    }), (0, r.jsx)(p.xv, {
                                        variant: "caption",
                                        children: l
                                    })]
                                })
                            })]
                        })
                    })
                },
                R = (0, s.ZP)(a.x).withConfig({
                    componentId: "sc-d6539507-4"
                })((0, j.iv)({
                    flex: 1,
                    marginRight: ["s-16", null, null, "s-32"],
                    marginTop: ["s-16", null, "s-32", 0],
                    order: [2, null, null, 1],
                    maxWidth: [226, null, null, null, null, 440]
                })),
                Z = t => {
                    let {
                        items: [e, n, l, i]
                    } = t;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(R, {
                            children: [(0, r.jsx)(P, {
                                aspectRatio: {
                                    all: 160 / 240,
                                    lg: 226 / 280,
                                    xxl: 1.375
                                },
                                ...e
                            }), (0, r.jsx)(P, {
                                aspectRatio: {
                                    all: 160 / 280,
                                    lg: 226 / 240,
                                    xxl: 440 / 280
                                },
                                ...n
                            })]
                        }), (0, r.jsxs)(R, {
                            children: [(0, r.jsx)(P, {
                                aspectRatio: {
                                    all: 160 / 240,
                                    lg: 226 / 280,
                                    xxl: 1.375
                                },
                                ...l
                            }), (0, r.jsx)(P, {
                                aspectRatio: {
                                    all: .8,
                                    lg: 226 / 360,
                                    xxl: 1.1
                                },
                                descriptionMaxLines: 9,
                                ...i
                            })]
                        })]
                    })
                };
            var S = n(67294),
                T = n(51482),
                A = n(16678),
                N = n(66639),
                D = n(87559),
                U = n(33630);
            let _ = (0, s.ZP)(m.o).withConfig({
                    componentId: "sc-8369a8c5-0"
                })((0, j.iv)({
                    flexShrink: 0,
                    backgroundColor: "grey-tone-10",
                    borderRadius: 24,
                    overflow: "hidden",
                    position: "relative",
                    width: ["100%", null, null, 484, null, 700],
                    justifySelf: "center"
                }), A.bU({
                    variants: {
                        left: {
                            order: [2, null, null, 1]
                        },
                        right: {
                            order: 2
                        }
                    }
                })),
                B = (0, s.ZP)(a.x).withConfig({
                    componentId: "sc-8369a8c5-1"
                })((0, j.iv)({
                    display: "grid",
                    gap: ["s-24", null, null, "s-32"],
                    gridTemplateColumns: ["auto", null, null, "auto 1fr"],
                    width: "100%",
                    maxWidth: ["calc(100vw - 32px)", null, null, null]
                }), A.bU({
                    variants: {
                        left: {
                            gridTemplateColumns: ["auto", null, null, "auto 1fr"]
                        },
                        right: {
                            gridTemplateColumns: ["auto", null, null, "1fr auto"]
                        }
                    }
                })),
                E = t => {
                    let {
                        avatar: e,
                        image: n,
                        caption: l,
                        title: i,
                        description: a,
                        button: o,
                        variant: s
                    } = t, c = (0, D.T)(), [h, p] = (0, S.useState)(!1), g = (0, N.b)("xxl");
                    return (0, r.jsxs)(B, {
                        variant: s,
                        children: [n && (0, r.jsx)(_, {
                            ratio: {
                                all: 335 / 280,
                                lg: 484 / 420,
                                xxl: 1.425
                            },
                            variant: s,
                            children: (0, r.jsx)(k, {
                                src: n
                            })
                        }), (0, r.jsxs)(d.g, {
                            align: {
                                all: "start",
                                md: "center",
                                lg: "start"
                            },
                            alignSelf: "center",
                            order: "right" === s ? 1 : [1, null, null, 2],
                            space: "s-16",
                            use: "div",
                            children: [e && (0, r.jsx)(v.qE, {
                                image: e,
                                size: g ? 56 : 40
                            }), l && (0, r.jsx)(x.x, {
                                color: "grey-50",
                                textAlign: {
                                    all: "start",
                                    md: "center",
                                    lg: "start"
                                },
                                variant: "h6",
                                whiteSpace: "pre-wrap",
                                width: "100%",
                                children: (0, r.jsx)(T.x, {
                                    max: 2,
                                    children: l
                                })
                            }), i && (0, r.jsx)(x.x, {
                                textAlign: {
                                    all: "start",
                                    md: "center",
                                    lg: "start"
                                },
                                variant: "h5",
                                width: "100%",
                                children: (0, r.jsx)(T.x, {
                                    max: 7,
                                    children: i
                                })
                            }), o && (0, r.jsx)(u.N, {
                                value: o.link,
                                children: o.label
                            }), !o && n && a && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.N, {
                                    onClick: () => p(!0),
                                    children: c("shared.button.learnMore")
                                }), (0, r.jsx)(U.S, {
                                    avatar: e,
                                    caption: l,
                                    description: a,
                                    image: n,
                                    open: h,
                                    onClose: () => p(!1),
                                    title: i
                                })]
                            })]
                        })]
                    })
                },
                F = t => {
                    let {
                        items: [e, n, l]
                    } = t;
                    return (0, r.jsxs)(d.g, {
                        space: "s-32",
                        use: "div",
                        align: "center",
                        width: "100%",
                        flex: 1,
                        children: [(0, r.jsx)(E, {
                            variant: "left",
                            ...e
                        }), n && (0, r.jsx)(E, {
                            variant: "right",
                            ...n
                        }), l && (0, r.jsx)(E, {
                            variant: "left",
                            ...l
                        })]
                    })
                };
            (l = i || (i = {})).Default = "default", l.Carousel = "carousel";
            var L = n(19671);
            let Y = t => {
                    let {
                        caption: e,
                        title: n,
                        button: l,
                        items: i
                    } = t, [o, s] = (0, S.useState)(0);
                    return (0, r.jsxs)(a.x, {
                        children: [(e || n) && (0, r.jsx)(a.x, {
                            mb: "s-40",
                            width: "100%",
                            children: (0, r.jsx)(h, {
                                caption: e,
                                title: n
                            })
                        }), (0, r.jsxs)(p.xv, {
                            variant: "secondary",
                            use: "div",
                            textAlign: "right",
                            mb: "-s-16",
                            color: "grey-50",
                            __css: {
                                position: "relative",
                                top: "s-16",
                                right: "s-16",
                                zIndex: 2
                            },
                            children: [o + 1, " / ", i.length]
                        }), (0, r.jsx)(L.l, {
                            index: o,
                            onIndexChange: s,
                            maxWidth: "100vw",
                            children: i.map(t => (0, r.jsx)(L.l.Item, {
                                width: 1,
                                children: (0, r.jsx)(E, {
                                    variant: "left",
                                    ...t,
                                    button: l
                                })
                            }, "".concat(t.image, "-").concat(t.title, "-").concat(t.caption, "-").concat(t.description)))
                        })]
                    })
                },
                X = (0, s.ZP)(c.o).withConfig({
                    componentId: "sc-87f05ade-0"
                })({
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }),
                q = t => {
                    var e;
                    let {
                        id: n,
                        content: {
                            caption: l,
                            title: s,
                            button: d,
                            items: x = [],
                            style: {
                                variant: u
                            } = {
                                variant: i.Default
                            }
                        } = {}
                    } = t, p = null !== (e = null == x ? void 0 : x.length) && void 0 !== e ? e : 0, g = u === i.Default;
                    return 0 === p ? null : u === i.Carousel ? (0, r.jsx)(c.o, {
                        id: "id",
                        children: (0, r.jsx)(Y, {
                            caption: l,
                            title: s,
                            button: d,
                            items: x
                        })
                    }) : g && 4 === p ? (0, r.jsxs)(X, {
                        "data-blockid": n,
                        children: [(l || s) && (0, r.jsx)(a.x, {
                            flex: {
                                all: "auto",
                                lg: 1
                            },
                            order: {
                                all: 1,
                                lg: 2
                            },
                            width: {
                                all: "100%"
                            },
                            children: (0, r.jsx)(h, {
                                caption: l,
                                title: s,
                                button: d
                            })
                        }), (0, r.jsx)(o.k, {
                            flex: 1,
                            width: {
                                all: "auto",
                                sm: "100%"
                            },
                            order: {
                                all: 2,
                                lg: 1
                            },
                            justifyContent: "center",
                            alignItems: "center",
                            children: (0, r.jsx)(Z, {
                                items: x
                            })
                        })]
                    }) : g && p > 0 && p < 5 ? (0, r.jsxs)(X, {
                        "data-blockid": n,
                        children: [(l || s) && (0, r.jsx)(a.x, {
                            mb: "s-40",
                            width: "100%",
                            children: (0, r.jsx)(h, {
                                caption: l,
                                title: s,
                                button: d
                            })
                        }), (0, r.jsx)(F, {
                            items: x
                        })]
                    }) : null
                }
        }
    }
]);