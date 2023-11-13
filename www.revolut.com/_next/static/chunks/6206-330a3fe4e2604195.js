"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6206], {
        98608: function(e, t, n) {
            n.d(t, {
                I9: function() {
                    return x
                },
                Uc: function() {
                    return p
                },
                Xb: function() {
                    return C
                },
                kH: function() {
                    return v
                },
                wZ: function() {
                    return h
                }
            });
            var r = n(85893),
                l = n(67294),
                o = n(74925),
                i = n(82403);
            let {
                publicRuntimeConfig: {
                    waitlistCountries: u
                }
            } = (0, o.i)(), c = {
                key: 0,
                blockId: ""
            }, s = (0, l.createContext)(c), a = (0, l.createContext)(() => c), d = (0, l.createContext)(!1), f = (0, l.createContext)(() => {}), h = () => (0, l.useContext)(s), C = () => {
                let e = (0, l.useContext)(a),
                    t = (0, l.useContext)(f);
                return (0, l.useEffect)(() => {
                    e(e => ({ ...e
                    }))
                }, [e]), (0, l.useCallback)(n => {
                    e(e => ({
                        key: e.key + 1,
                        blockId: null != n ? n : ""
                    })), setTimeout(() => t(!0))
                }, [e, t])
            }, x = () => {
                let e = (0, i.E)(),
                    t = u.includes(e),
                    n = (0, l.useContext)(d),
                    r = (0, l.useContext)(f);
                return (0, l.useMemo)(() => ({
                    isOpen: n,
                    setIsOpen: r,
                    isWaitlistCountry: t
                }), [n, r, t])
            }, v = e => {
                let {
                    children: t
                } = e, [n, o] = (0, l.useState)(c);
                return (0, r.jsx)(s.Provider, {
                    value: n,
                    children: (0, r.jsx)(a.Provider, {
                        value: o,
                        children: t
                    })
                })
            }, p = e => {
                let {
                    children: t
                } = e, [n, o] = (0, l.useState)(!1);
                return (0, r.jsx)(d.Provider, {
                    value: n,
                    children: (0, r.jsx)(f.Provider, {
                        value: o,
                        children: t
                    })
                })
            }
        },
        32571: function(e, t, n) {
            n.d(t, {
                De: function() {
                    return C
                },
                Ly: function() {
                    return f
                },
                PB: function() {
                    return h
                },
                S5: function() {
                    return d
                },
                XB: function() {
                    return a
                }
            });
            var r = n(85893),
                l = n(67294);
            let o = {
                    key: 0,
                    blockId: "",
                    link: ""
                },
                i = (0, l.createContext)(o),
                u = (0, l.createContext)(() => o),
                c = (0, l.createContext)(!1),
                s = (0, l.createContext)(() => {}),
                a = () => (0, l.useContext)(i),
                d = () => {
                    let e = (0, l.useContext)(u),
                        t = (0, l.useContext)(s);
                    return (0, l.useEffect)(() => {
                        e(e => ({ ...e
                        }))
                    }, [e]), (0, l.useCallback)(n => {
                        let {
                            blockId: r,
                            link: l
                        } = n;
                        e(e => ({
                            key: e.key + 1,
                            blockId: null != r ? r : "",
                            link: l
                        })), setTimeout(() => t(!0))
                    }, [e, t])
                },
                f = () => {
                    let e = (0, l.useContext)(c),
                        t = (0, l.useContext)(s);
                    return [e, t]
                },
                h = e => {
                    let {
                        children: t
                    } = e, [n, c] = (0, l.useState)(o);
                    return (0, r.jsx)(i.Provider, {
                        value: n,
                        children: (0, r.jsx)(u.Provider, {
                            value: c,
                            children: t
                        })
                    })
                },
                C = e => {
                    let {
                        children: t
                    } = e, [n, o] = (0, l.useState)(!1);
                    return (0, r.jsx)(c.Provider, {
                        value: n,
                        children: (0, r.jsx)(s.Provider, {
                            value: o,
                            children: t
                        })
                    })
                }
        },
        25434: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return l
                }
            });
            var r = n(17231);
            let l = (e, t) => {
                let n = t === r.W.Business ? "business/help" : "help";
                return "/".concat(n).concat(e)
            }
        },
        6206: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return S
                }
            });
            var r = n(85893),
                l = n(67294),
                o = n(41664),
                i = n.n(o),
                u = n(64487),
                c = n(52682),
                s = n(68078),
                a = n(4842),
                d = n(28998),
                f = n(68328),
                h = n(23813),
                C = n(32571),
                x = n(25434),
                v = n(84533),
                p = n(37150),
                g = n(35402),
                E = n(76804),
                m = n(98608);
            let j = e => {
                var t;
                let {
                    children: n,
                    vertical: r,
                    uri: o,
                    ...i
                } = e, {
                    link: u,
                    name: s
                } = (0, g.PF)(o), a = (0, C.S5)(), f = (0, m.Xb)(), {
                    isWaitlistCountry: h
                } = (0, m.I9)(), x = (0, c.W)(), v = (0, l.isValidElement)(n) && (null === (t = n.props) || void 0 === t ? void 0 : t.onClick), p = e => {
                    try {
                        null == v || v(e)
                    } catch (e) {
                        (0, E.D)(s, e, {
                            Error: "Failed to handle onClick",
                            URL: u
                        })
                    }
                }, j = e => {
                    if ("Retail" === r && h) {
                        p(e), e.preventDefault();
                        let t = (0, d.h5)(e.currentTarget);
                        f(t);
                        return
                    }
                    if ("Retail" !== r || e.metaKey || e.ctrlKey || x) p(e);
                    else {
                        e.preventDefault();
                        let t = (0, d.h5)(e.currentTarget);
                        a({
                            blockId: t,
                            link: o
                        })
                    }
                };
                return (0, l.cloneElement)(n, { ...i,
                    href: u,
                    onClick: j
                })
            };
            var k = n(79980);
            let A = e => {
                    let {
                        location: t,
                        locale: n,
                        href: r,
                        scope: l = []
                    } = e, o = (0, s.ZN)(n);
                    if (l.includes(k.d.CompatMode)) {
                        if (t.type === a._i.Internal) {
                            let {
                                directory: e,
                                slug: n
                            } = t.content;
                            return o(e, n)
                        }
                        if (t.type === a._i.Section) return o(r)
                    }
                    return t.type === a._i.Legal && r ? o(r) : null
                },
                y = e => {
                    let {
                        locationId: t,
                        children: n,
                        locale: o,
                        query: u,
                        ...c
                    } = e, {
                        getLocationProps: a,
                        getLocation: f,
                        getInternalHref: C
                    } = (0, s.Yt)(), x = a(t), {
                        prefetch: p,
                        locale: g,
                        scope: E
                    } = null != x ? x : {}, m = f(t), j = null != o ? o : g, {
                        isHelpCentre: k
                    } = (0, v.C)(), y = C(t), T = m && A({
                        location: m,
                        locale: j,
                        href: y,
                        scope: E
                    });
                    if (T) {
                        let e = { ...c,
                            href: k ? (0, h.H$)(T) : T
                        };
                        return (0, l.cloneElement)(n, e)
                    }
                    let b = u ? (0, d.bA)(null != y ? y : "/", u) : null != y ? y : "/";
                    if (k) {
                        let e = { ...c,
                            href: (0, h.H$)(b)
                        };
                        return (0, l.cloneElement)(n, e)
                    }
                    return (0, r.jsx)(i(), {
                        passHref: !0,
                        href: b,
                        prefetch: p,
                        locale: j,
                        legacyBehavior: !0,
                        ...c,
                        children: n
                    })
                },
                T = e => {
                    let {
                        locationId: t,
                        variantSlug: n,
                        children: o,
                        locale: u,
                        query: c,
                        ...a
                    } = e, {
                        getVariantHref: f
                    } = (0, s.Yt)(), {
                        isHelpCentre: C
                    } = (0, v.C)(), x = f(t, n), p = c ? (0, d.bA)(null != x ? x : "/", c) : null != x ? x : "/";
                    if (C) {
                        let e = { ...a,
                            href: (0, h.H$)(p)
                        };
                        return (0, l.cloneElement)(o, e)
                    }
                    return (0, r.jsx)(i(), {
                        passHref: !0,
                        href: p,
                        locale: u,
                        ...a,
                        legacyBehavior: !0,
                        children: o
                    })
                },
                b = e => {
                    let {
                        children: t,
                        value: n,
                        ...o
                    } = e, i = (0, p.sw)();
                    return n.type !== a._i.External ? (0, r.jsx)(r.Fragment, {
                        children: t
                    }) : (0, r.jsx)(r.Fragment, {
                        children: (0, l.cloneElement)(t, { ...o,
                            href: n.uri,
                            onClick: e => {
                                e.preventDefault(), i(n.uri)
                            }
                        })
                    })
                },
                L = e => {
                    var t;
                    let {
                        children: n,
                        value: r,
                        ...o
                    } = e, i = (0, C.S5)(), s = (0, c.W)(), f = (0, l.isValidElement)(n) && (null === (t = n.props) || void 0 === t ? void 0 : t.onClick), h = "";
                    r.type === a._i.External && (h = r.uri);
                    let x = e => {
                        if (e.metaKey || e.ctrlKey || s) try {
                            null == f || f(e)
                        } catch (e) {
                            u.Tb(e)
                        } else {
                            e.preventDefault();
                            let t = (0, d.h5)(e.currentTarget);
                            i({
                                blockId: t,
                                link: h
                            })
                        }
                    };
                    return (0, l.cloneElement)(n, { ...o,
                        href: h,
                        onClick: x
                    })
                },
                S = e => {
                    var t, n, o;
                    let {
                        value: u,
                        children: c,
                        ...d
                    } = e, {
                        getLegalDocumentHref: C,
                        getLegalSectionHref: p
                    } = (0, s.Yt)(), {
                        isHelpCentre: g
                    } = (0, v.C)();
                    if (u.type === a._i.External && (0, f.R0)(u.uri)) return (0, r.jsx)(b, {
                        value: u,
                        children: c
                    });
                    if (u.type === a._i.External && (null === (t = (0, f.qe)(u.uri)) || void 0 === t ? void 0 : t.vertical) === "Under18") return (0, r.jsx)(L, {
                        value: u,
                        ...d,
                        children: c
                    });
                    let E = u.type === a._i.External && (null === (n = (0, f.qe)(u.uri)) || void 0 === n ? void 0 : n.vertical);
                    if (E) return (0, r.jsx)(j, { ...d,
                        uri: g ? (0, h.H$)(u.uri) : u.uri,
                        vertical: E,
                        children: c
                    });
                    if (u.type === a._i.External) {
                        let e = null !== (o = u.uri) && void 0 !== o ? o : "/";
                        return (0, l.cloneElement)(c, {
                            href: g ? (0, h.H$)(e) : e,
                            ...d
                        })
                    }
                    if (u.type === a._i.HelpCentre) {
                        let e = (0, x.l)(u.categoryURL, u.section);
                        return (0, r.jsx)(i(), {
                            href: e,
                            prefetch: !1,
                            children: (0, l.cloneElement)(c, { ...d,
                                use: "span"
                            })
                        })
                    }
                    if (u.type === a._i.Legal) {
                        let e = C(u.legalDocumentId);
                        return (0, l.cloneElement)(c, { ...d,
                            href: g ? (0, h.H$)(e) : e
                        })
                    }
                    if (u.type === a._i.LegalSection) {
                        let e = p(u.section);
                        return (0, l.cloneElement)(c, { ...d,
                            href: g ? (0, h.H$)(e) : e
                        })
                    }
                    return u.type === a._i.Variant ? (0, r.jsx)(T, {
                        locationId: u.locationId,
                        locale: u.locale,
                        variantSlug: u.variantSlug,
                        ...d,
                        children: c
                    }) : (0, r.jsx)(y, {
                        locationId: u.locationId,
                        locale: u.locale,
                        ...d,
                        children: c
                    })
                }
        },
        73688: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return o
                },
                l: function() {
                    return l
                }
            });
            var r = n(67294);
            let l = (0, r.createContext)({
                    register: () => {},
                    unregister: () => {}
                }),
                o = () => (0, r.useContext)(l)
        },
        56833: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return o
                }
            });
            var r = n(67294),
                l = n(73688);
            let o = (e, t) => {
                let {
                    register: n,
                    unregister: o
                } = (0, l.d)();
                (0, r.useEffect)(() => (e ? n(t) : o(t), () => o(t)), [n, o, e, t])
            }
        },
        65684: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return w
                }
            });
            var r = n(85893),
                l = n(67294),
                o = n(40712),
                i = n.n(o),
                u = n(25675),
                c = n.n(u),
                s = n(49133),
                a = n(31346),
                d = n(28193),
                f = n(52805),
                h = n(83831),
                C = n(7670),
                x = n(56833),
                v = n(99446),
                p = n(7297),
                g = n(48986),
                E = n(14141);

            function m() {
                let e = (0, p.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n"]);
                return m = function() {
                    return e
                }, e
            }
            let j = (0, E.ZP)(g.$).attrs(e => ({ ...e,
                size: 120,
                color: "white",
                strokeWidth: 5
            })).withConfig({
                componentId: "sc-10656a93-0"
            })(m());
            var k = n(30116);

            function A() {
                let e = (0, p.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  aspect-ratio: ", ";\n  max-width: 100%;\n  max-height: 100%;\n"]);
                return A = function() {
                    return e
                }, e
            }
            let y = (0, E.ZP)(k.x).withConfig({
                componentId: "sc-df37755-0"
            })(A(), e => {
                let {
                    ratio: t
                } = e;
                return t
            });
            var T = n(23279),
                b = n.n(T);
            let L = (e, t) => {
                    let n = (0, l.useRef)(!1),
                        [r, o] = (0, l.useState)(!1),
                        i = (0, l.useCallback)(() => {
                            if (!n.current) return;
                            let t = window.innerWidth / window.innerHeight;
                            o(t < e)
                        }, [e, o]);
                    return (0, l.useEffect)(() => {
                        if (i(), !t) return;
                        let e = b()(i, 300);
                        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, [i, t]), (0, l.useEffect)(() => (n.current = !0, () => {
                        n.current = !1
                    }), []), r
                },
                S = () => {},
                w = e => {
                    let {
                        open: t = !1,
                        src: n,
                        cover: o,
                        aspectRatio: u = 16 / 9,
                        onPlay: p,
                        onClose: g = S,
                        muted: E = !1
                    } = e, m = (0, C.e)(), {
                        isAnalyticsEnabled: k
                    } = (0, f.uz)(), A = L(u, t), T = (0, l.useRef)(null), b = (0, l.useMemo)(() => (0, h.xO)(n), [n]), w = (0, l.useCallback)(() => {
                        var e;
                        return null === (e = T.current) || void 0 === e ? void 0 : e.seekTo(b, "seconds")
                    }, [T, b]);
                    return (0, x.K)(t, g), (0, r.jsxs)(s.u, {
                        open: Boolean(t && n),
                        onClose: g,
                        bg: "black",
                        closeOnEsc: !0,
                        focusTrap: !0,
                        children: [(0, r.jsx)(a.k, {
                            onClick: g,
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            flexDirection: "column",
                            justifyContent: "center",
                            children: (0, r.jsxs)(y, {
                                ratio: u,
                                width: A ? "100%" : "auto",
                                height: A ? "auto" : "100%",
                                children: [o && (0, r.jsx)(c(), {
                                    loader: m,
                                    src: o,
                                    alt: "",
                                    fill: !0
                                }), (0, r.jsx)(j, {}), (0, r.jsx)(d.e2, {
                                    width: "100%",
                                    height: "100%",
                                    children: (0, r.jsx)(i(), {
                                        url: n,
                                        controls: !0,
                                        ref: T,
                                        onPlay: p,
                                        onEnded: g,
                                        onReady: w,
                                        width: "100%",
                                        height: "100%",
                                        config: {
                                            playerOptions: {
                                                dnt: !k,
                                                autoplay: !0,
                                                loop: !1,
                                                muted: E,
                                                playsinline: !0,
                                                autopause: !0
                                            }
                                        }
                                    })
                                })]
                            })
                        }), (0, r.jsx)(d.e2, {
                            top: 6,
                            right: 6,
                            children: (0, r.jsx)(v.PZ, {
                                onClick: g
                            })
                        })]
                    })
                }
        },
        99446: function(e, t, n) {
            n.d(t, {
                JM: function() {
                    return m
                },
                PZ: function() {
                    return k
                },
                c9: function() {
                    return g
                },
                dY: function() {
                    return E
                },
                fx: function() {
                    return j
                }
            });
            var r = n(7297),
                l = n(85893),
                o = n(14141),
                i = n(37947),
                u = n(63537),
                c = n(28193),
                s = n(34961),
                a = n(22798),
                d = n(93957),
                f = n(54212),
                h = n(32040),
                C = n(13825);

            function x() {
                let e = (0, r.Z)(["\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n"]);
                return x = function() {
                    return e
                }, e
            }
            let v = (0, o.ZP)(u.X).withConfig({
                    componentId: "sc-583bdd32-0"
                })(e => {
                    let {
                        width: t = 36,
                        height: n = 36
                    } = e;
                    return (0, i.iv)({
                        alignItems: "center",
                        backgroundColor: "black-30",
                        borderRadius: "25%",
                        color: "white",
                        cursor: "pointer",
                        display: "flex",
                        height: n,
                        justifyContent: "center",
                        transition: "background 0.3s",
                        width: t,
                        "&:hover": {
                            backgroundColor: "black-70"
                        }
                    })
                }),
                p = (0, o.ZP)(c.e2).withConfig({
                    componentId: "sc-583bdd32-1"
                })(x()),
                g = e => {
                    let {
                        muted: t,
                        onClick: n
                    } = e;
                    return (0, l.jsx)(v, {
                        onClick: n,
                        children: t ? (0, l.jsx)(s.S, {
                            size: 20
                        }) : (0, l.jsx)(a.$, {
                            size: 20
                        })
                    })
                },
                E = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, l.jsx)(v, {
                        onClick: t,
                        children: (0, l.jsx)(d.$, {
                            size: 20
                        })
                    })
                },
                m = e => {
                    let { ...t
                    } = e;
                    return (0, l.jsx)(p, {
                        children: (0, l.jsx)(v, { ...t,
                            width: 78,
                            height: 78,
                            children: (0, l.jsx)(f.s, {
                                size: 42,
                                color: "white"
                            })
                        })
                    })
                },
                j = e => {
                    let { ...t
                    } = e;
                    return (0, l.jsx)(p, {
                        children: (0, l.jsx)(v, { ...t,
                            width: 78,
                            height: 78,
                            children: (0, l.jsx)(h.d, {
                                size: 42,
                                color: "white"
                            })
                        })
                    })
                },
                k = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, l.jsx)(v, {
                        onClick: t,
                        children: (0, l.jsx)(C.X, {
                            size: 20
                        })
                    })
                }
        },
        52682: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return c
                },
                v: function() {
                    return u
                }
            });
            var r = n(67294),
                l = n(68328),
                o = n(1112);
            let i = e => e.match(/ALP-|AMN-|ANA-|ANE-|ANG-|AQM-|ARS-|ART-|ATU-|BAC-|BLA-|BRQ-|CAG-|CAM-|CAN-|CAZ-|CDL-|CDY-|CLT-|CRO-|CUN-|DIG-|DRA-|DUA-|DUB-|DVC-|ELE-|ELS-|EML-|EVA-|EVR-|FIG-|FLA-|FRL-|GLK-|HMA-|HW-|HWI-|INE-|JAT-|JEF-|JER-|JKM-|JNY-|JSC-|LDN-|LIO-|LON-|LUA-|LYA-|LYO-|MAR-|MED-|MHA-|MLA-|MRD-|MYA-|NCE-|NEO-|NOH-|NOP-|OCE-|PAR-|PIC-|POT-|PPA-|PRA-|RNE-|SEA-|SLA-|SNE-|SPN-|STK-|TAH-|TAS-|TET-|TRT-|VCE-|VIE-|VKY-|VNS-|VOG-|VTR-|WAS-|WKG-|WLZ-|YAL-/i),
                u = () => {
                    let e = (0, o.F)(),
                        t = (0, r.useMemo)(() => {
                            if (e) return i(e.ua) ? l.KL.HuaweiStore : "iOS" === e.os.name ? l.KL.AppStore : "Android" === e.os.name && l.KL.GooglePlay
                        }, [e]);
                    return t
                },
                c = () => {
                    let e = u();
                    return void 0 !== e && !1 !== e || e
                }
        },
        1112: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return u
                }
            });
            var r, l = n(67294),
                o = n(42238);
            let i = {};

            function u() {
                let [e, t] = (0, l.useState)(() => i.result);
                return (0, l.useEffect)(() => {
                    var e;
                    null !== (e = (r = i).result) && void 0 !== e || (r.result = new o.UAParser().getResult()), t(i.result)
                }, []), e
            }
        },
        37150: function(e, t, n) {
            n.d(t, {
                AS: function() {
                    return s
                },
                sw: function() {
                    return u
                }
            });
            var r = n(85893),
                l = n(67294),
                o = n(65684);
            let i = (0, l.createContext)(void 0);

            function u() {
                let e = (0, l.useContext)(i);
                if (void 0 === e) throw Error("You can access `useVideoModalContext` only inside `VideoModalContext` component");
                return e
            }
            let c = {
                    isOpen: !1
                },
                s = e => {
                    let {
                        children: t
                    } = e, [{
                        isOpen: n,
                        url: u
                    }, s] = (0, l.useState)(c), a = (0, l.useCallback)(e => {
                        s({
                            isOpen: !0,
                            url: e
                        })
                    }, []);
                    return (0, r.jsxs)(i.Provider, {
                        value: a,
                        children: [t, u && (0, r.jsx)(o.l, {
                            open: n,
                            onClose: () => s(c),
                            src: u
                        })]
                    })
                }
        },
        17231: function(e, t, n) {
            var r, l;
            n.d(t, {
                W: function() {
                    return r
                }
            }), (l = r || (r = {})).Personal = "personal", l.Business = "business"
        },
        79980: function(e, t, n) {
            var r, l;
            n.d(t, {
                d: function() {
                    return r
                }
            }), (l = r || (r = {})).ComingSoon = "coming-soon", l.Footer = "footer", l.Legal = "legal", l.Menu = "menu", l.CompatMode = "compat", l.SectionLink = "section-link", l.LabelComingSoon = "label:coming-soon", l.LabelNew = "label:new", l.LabelFdicInsured = "label:fdic-insured"
        },
        83831: function(e, t, n) {
            n.d(t, {
                WD: function() {
                    return r
                },
                ne: function() {
                    return o
                },
                rh: function() {
                    return i
                },
                xO: function() {
                    return u
                }
            });
            let r = e => e.getUTCHours() + e.getUTCMinutes() + e.getUTCSeconds() > 0,
                l = e => t => {
                    let n = new Date,
                        {
                            year: r = 0,
                            month: l = 0,
                            date: o = 0,
                            hours: i = 0,
                            minutes: u = 0,
                            seconds: c = 0
                        } = e,
                        s = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds()),
                        a = Date.UTC(n.getUTCFullYear() + r, n.getUTCMonth() + l, n.getUTCDate() + o, n.getUTCHours() + i, n.getUTCMinutes() + u, n.getUTCSeconds() + c) + 6e4 * n.getTimezoneOffset();
                    return s <= a
                },
                o = l({
                    seconds: 60
                }),
                i = l({
                    minutes: 30
                }),
                u = e => {
                    if (!e) return 0;
                    let t = RegExp("#t=((?<hours>\\d+)h)*((?<minutes>\\d+)m)*((?<seconds>\\d+)s)*", "gi");
                    for (let n of e.matchAll(t)) {
                        let {
                            hours: e = "0",
                            minutes: t = "0",
                            seconds: r = "0"
                        } = n.groups;
                        return 3600 * parseInt(e) + 60 * parseInt(t) + parseInt(r)
                    }
                    return 0
                }
        }
    }
]);