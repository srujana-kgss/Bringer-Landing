"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4304], {
        51824: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return v
                }
            });
            var r = n(85893),
                o = n(67294),
                l = n(31346),
                i = n(30116),
                s = n(94016),
                a = n(36876),
                c = n.n(a);
            let u = e => {
                let {
                    value: t,
                    padding: n = 1,
                    ...l
                } = e, {
                    children: i,
                    size: s
                } = (0, o.useMemo)(() => {
                    let {
                        modules: e,
                        moduleCount: n
                    } = c()(t), o = [];
                    return e.forEach((e, t) => e.forEach((e, n) => {
                        if (!e) return;
                        let l = {
                            x: t,
                            y: n,
                            key: "".concat(t, ":").concat(n)
                        };
                        o.push((0, r.jsx)("rect", { ...l,
                            width: "1",
                            height: "1",
                            shapeRendering: "crispEdges",
                            strokeWidth: "0",
                            fill: "currentColor",
                            stroke: "currentColor"
                        }))
                    })), {
                        children: o,
                        size: n
                    }
                }, [t]), a = (0, o.useMemo)(() => {
                    let [e, t] = [-1 * n, s + 2 * n];
                    return [e, e, t, t].join(" ")
                }, [s, n]);
                return (0, r.jsx)("svg", {
                    viewBox: a,
                    ...l,
                    children: i
                })
            };
            var p = n(16970),
                d = n(87559),
                h = n(84533),
                f = n(52682),
                x = n(35402),
                m = n(68328),
                b = n(66005),
                g = n(23931);
            let v = e => {
                var t;
                let {
                    phoneFormControl: n,
                    promoCode: a
                } = e, c = (0, d.T)(), {
                    isRevolutUnder18: v
                } = (0, h.C)(), k = (0, f.W)(), [{
                    urlQuery: C
                }] = (0, b.g)(), j = (0, o.useMemo)(() => (0, g.o)({
                    promoCode: a,
                    hasMobileStore: k,
                    urlQuery: C
                }), [a, k, C]), {
                    link: P
                } = (0, x.PF)(null !== (t = null == n ? void 0 : n.link) && void 0 !== t ? t : m.li.RetailOpenApp, {
                    type: "SMS",
                    data: {
                        qr_code: !0
                    }
                }), w = v ? m.li.RevolutUnder18GetTheApp : P, y = "".concat(m.li.QRCodeLink, "?link=").concat(encodeURIComponent(w));
                return (0, r.jsxs)(l.k, {
                    role: "group",
                    p: "s-40",
                    alignItems: {
                        all: "stretch",
                        md: "center"
                    },
                    flexDirection: "column",
                    children: [(0, r.jsx)(p.x, {
                        use: "h2",
                        variant: "h3",
                        textAlign: "center",
                        children: c("widget.getTheAppPopup.title")
                    }), (0, r.jsx)(p.x, {
                        variant: "subtitle1",
                        use: "p",
                        textAlign: "center",
                        mt: "s-16",
                        children: c("widget.getTheAppPopup.QRCodeDescription")
                    }), (0, r.jsx)(l.k, {
                        alignItems: "center",
                        flexDirection: "column",
                        mt: "s-24",
                        children: (0, r.jsx)(u, {
                            value: y,
                            style: {
                                width: "100%",
                                maxWidth: "160px"
                            }
                        })
                    }), !v && n && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(p.x, {
                            variant: "subtitle1",
                            use: "p",
                            textAlign: "center",
                            mt: "s-24",
                            children: c("widget.getTheAppPopup.phoneDescription")
                        }), (0, r.jsx)(i.x, {
                            maxWidth: {
                                all: "",
                                md: "370px"
                            },
                            mt: "s-24",
                            children: (0, r.jsx)(s.bV.Controlled, { ...n,
                                layout: a ? "text-button" : "default",
                                requestFunc: j
                            })
                        })]
                    })]
                })
            }
        },
        23931: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return l
                }
            });
            var r = n(64487);
            let o = e => {
                    let {
                        captchaToken: t,
                        getAppUrl: n,
                        phone: r,
                        promoCode: o,
                        urlQuery: l
                    } = e;
                    return fetch("/api/partnerships", {
                        method: "POST",
                        headers: {
                            "X-Captcha-Token": t,
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify({
                            phone: r,
                            urlQuery: l,
                            promoCode: o,
                            ...n && {
                                getAppUrl: n
                            }
                        })
                    })
                },
                l = e => {
                    let {
                        hasMobileStore: t,
                        promoCode: n,
                        urlQuery: l = ""
                    } = e;
                    return async e => {
                        let {
                            captchaToken: i,
                            getAppUrl: s,
                            phone: a
                        } = e;
                        try {
                            let e;
                            let c = await o({
                                captchaToken: i,
                                phone: a,
                                getAppUrl: t && n ? void 0 : s,
                                promoCode: null != n ? n : "WEBSITE19",
                                urlQuery: l
                            });
                            if (c.ok) return "success";
                            let u = await c.text();
                            try {
                                e = JSON.parse(u)
                            } catch (e) {
                                return {
                                    status: "error",
                                    event: "json-parse-error"
                                }
                            }
                            if ((null == e ? void 0 : e.code) === 1105) return {
                                status: "error",
                                event: "country-not-supported"
                            };
                            return r.Tb(Error("Unhandled server response for ".concat(c.url)), {
                                tags: {
                                    component: "get-the-app"
                                },
                                extra: { ...e
                                }
                            }), "error"
                        } catch (e) {
                            return r.Tb(e, {
                                tags: {
                                    component: "get-the-app"
                                }
                            }), "error"
                        }
                    }
                }
        },
        94304: function(e, t, n) {
            n.r(t), n.d(t, {
                GetTheAppPopup: function() {
                    return u
                }
            });
            var r = n(85893),
                o = n(67294),
                l = n(39154),
                i = n(94016),
                s = n(51824),
                a = n(67577),
                c = n(32571);
            let u = () => {
                let [e, t] = (0, c.Ly)(), n = (0, c.XB)(), u = (0, l.O)({
                    blockId: n.blockId,
                    link: n.link
                }), p = u.formState.status;
                return (0, o.useEffect)(() => {
                    ("error" === p || "success" === p) && t(!1)
                }, [p, t]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.G, {
                        open: e,
                        onClose: () => t(!1),
                        children: (0, r.jsx)(s.K, {
                            phoneFormControl: u
                        }, n.key)
                    }), (0, r.jsx)(i.bV.Popup, { ...u
                    })]
                })
            }
        },
        94016: function(e, t, n) {
            n.d(t, {
                bV: function() {
                    return s
                }
            });
            var r = n(5152),
                o = n.n(r);
            let l = o()(() => Promise.all([n.e(8237), n.e(5898), n.e(4257), n.e(2265), n.e(9133), n.e(2055), n.e(6563), n.e(2032), n.e(387), n.e(2675), n.e(2613), n.e(7164), n.e(1557), n.e(1486), n.e(2065)]).then(n.bind(n, 1910)).then(e => e.PhoneFormControlled), {
                    loadableGenerated: {
                        webpack: () => [1910]
                    }
                }),
                i = o()(() => Promise.all([n.e(8237), n.e(5898), n.e(4257), n.e(2265), n.e(9133), n.e(2675), n.e(4694)]).then(n.bind(n, 87616)).then(e => e.PhoneFormPopup), {
                    loadableGenerated: {
                        webpack: () => [87616]
                    },
                    ssr: !1
                }),
                s = Object.assign(o()(() => Promise.all([n.e(8237), n.e(5898), n.e(4257), n.e(2265), n.e(9133), n.e(2055), n.e(6563), n.e(2032), n.e(387), n.e(2675), n.e(2613), n.e(7164), n.e(1557), n.e(1486), n.e(2065)]).then(n.bind(n, 1910)).then(e => e.PhoneForm), {
                    loadableGenerated: {
                        webpack: () => [1910]
                    },
                    ssr: !0
                }), {
                    Controlled: l,
                    Popup: i
                })
        },
        39154: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return u
                }
            });
            var r = n(67294),
                o = n(35402),
                l = n(52682),
                i = n(95630),
                s = n(40126),
                a = n(68328),
                c = n(11163);
            let u = function() {
                let {
                    blockId: e,
                    link: t = a.li.RetailOpenApp
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [n, u] = (0, r.useState)({
                    status: "idle"
                }), {
                    phone: p,
                    phoneCode: d,
                    setPhone: h,
                    setPhoneCode: f
                } = (0, i.z)(), {
                    getResourceBlockContext: x
                } = (0, s.EL)(), m = x(e);
                ! function(e) {
                    let {
                        status: t,
                        redirectUrl: n
                    } = e, {
                        link: i
                    } = (0, o.PF)(n), s = (0, r.useRef)(), a = (0, l.W)();
                    (0, r.useEffect)(() => {
                        a && "idle" === t && "success" === s.current && (s.current = t, window.location.href = i), s.current !== t && (s.current = t)
                    }, [t, n, a, i])
                }({
                    status: n.status,
                    redirectUrl: t
                }),
                function(e) {
                    let {
                        formState: t,
                        countryCode: n,
                        context: l,
                        component_name: i,
                        position: a
                    } = e, {
                        locale: u
                    } = (0, c.useRouter)(), {
                        trackEvent: p
                    } = (0, o.z$)(), d = (0, r.useRef)("idle"), h = t.status, f = "error" === t.status && t.event || "error";
                    (0, r.useEffect)(() => {
                        let e = {
                            phoneCountryCode: n,
                            locale: u,
                            context: l,
                            position: a
                        };
                        if (i !== s.T4.component_name) {
                            if ("idle" === h && "idle" === d.current) {
                                p({
                                    action: "Signup_Start",
                                    component_name: i,
                                    vertical: "Retail",
                                    payload: e
                                });
                                return
                            }
                            if (d.current !== h) {
                                if (d.current = h, "loading" === h) {
                                    p({
                                        action: "Phone_Enter",
                                        component_name: i,
                                        vertical: "Retail",
                                        payload: e
                                    });
                                    return
                                }
                                if ("success" === h) {
                                    p({
                                        action: "Phone_Submit",
                                        component_name: i,
                                        vertical: "Retail",
                                        payload: e
                                    });
                                    return
                                }
                                if ("error" === h) {
                                    p({
                                        action: "Phone_Fail",
                                        component_name: i,
                                        vertical: "Retail",
                                        payload: { ...e,
                                            error: f
                                        }
                                    });
                                    return
                                }
                            }
                        }
                    }, [i, l, n, f, u, a, h, p])
                }({
                    formState: n,
                    countryCode: d,
                    ...m
                });
                let b = (0, r.useCallback)(() => {
                    u({
                        status: "idle"
                    }), h("")
                }, [u, h]);
                return {
                    countryCode: d,
                    formState: n,
                    link: t,
                    phoneNumber: p,
                    handlePopupExit: b,
                    setCountryCode: f,
                    setFormState: u,
                    setPhoneNumber: h
                }
            }
        },
        67577: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return u
                }
            });
            var r = n(85893),
                o = n(49133),
                l = n(96944),
                i = n(75667),
                s = n(51303),
                a = n(87559),
                c = n(66639);
            let u = e => {
                let {
                    open: t,
                    onClose: n,
                    children: u,
                    ...p
                } = e, d = (0, a.T)(), h = (0, c.b)("md");
                return h ? (0, r.jsxs)(o.u, {
                    open: Boolean(t),
                    display: "flex",
                    onClose: n,
                    ...p,
                    role: "dialog",
                    "aria-label": d("shared.cookieConsent.preferences.title"),
                    children: [(0, r.jsx)(l.n, { in: Boolean(t),
                        offsetX: 0,
                        offsetY: -24,
                        children: (0, r.jsx)(i.$, {
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
                            children: u
                        })
                    }), (0, r.jsx)(o.u.CloseButton, {
                        "aria-label": d("shared.button.close"),
                        onClick: n
                    })]
                }) : (0, r.jsx)(s.G, {
                    open: t,
                    onClose: n,
                    "aria-label": "Modal",
                    ...p,
                    variant: "bottom-sheet",
                    children: u
                })
            }
        }
    }
]);