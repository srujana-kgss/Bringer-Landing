"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9501], {
        94910: function(e, t, r) {
            r.d(t, {
                z: function() {
                    return v
                }
            });
            var n = r(85893),
                o = r(67294),
                a = r(22674),
                l = r(20010),
                i = r(45919),
                u = r(14141),
                s = r(37947),
                c = r(16678),
                d = r(35402),
                p = r(34254),
                h = r(6206);
            let f = (0, u.ZP)(l.z).withConfig({
                    componentId: "sc-b1d8265f-0"
                })((0, i.Ou)("subtitle2"), e => {
                    let {
                        height: t = "auto",
                        maxWidth: r
                    } = e;
                    return (0, s.iv)({
                        height: t,
                        maxWidth: r || ["240px", null, "440px", "720px", null, "1024px"],
                        paddingX: ["s-24", null, null, null, null, "s-32"],
                        paddingY: ["10px", null, null, null, null, "14px"],
                        "&:focus-visible": {
                            boxShadow: "0 0 0 0.125rem rgb(".concat(a.W.colorChannel.blue, " / 0.5) inset, 0 0 0 0.225rem ").concat(a.W.color.background, " inset")
                        }
                    })
                }, (0, c.bU)({
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
                v = (0, o.forwardRef)((e, t) => {
                    let {
                        gaEvent: r,
                        link: o,
                        query: a,
                        onClick: l,
                        children: i,
                        ...u
                    } = e, {
                        trackLink: s
                    } = (0, d.z$)(), c = e => {
                        (0, p.mf)(l) && l(e), s(e, r, o)
                    };
                    return o ? (0, n.jsx)(h._, {
                        value: o,
                        query: a,
                        children: (0, n.jsx)(f, {
                            use: "a",
                            size: "sm",
                            ref: t,
                            onClick: c,
                            ...u,
                            children: i
                        })
                    }) : (0, n.jsx)(f, {
                        size: "sm",
                        ref: t,
                        onClick: c,
                        ...u,
                        children: i
                    })
                });
            v.displayName = "Button"
        },
        34215: function(e, t, r) {
            r.d(t, {
                m: function() {
                    return d
                }
            });
            var n = r(85893),
                o = r(67294),
                a = r(30116),
                l = r(62074),
                i = r(64487),
                u = r(74925),
                s = r(28998);
            let {
                publicRuntimeConfig: {
                    hCaptchaKey: c
                }
            } = (0, u.i)(), d = (0, o.forwardRef)((e, t) => {
                var r, u, d, p, h, f;
                let v = (0, o.useRef)(null),
                    g = null !== (d = e.captchaKey) && void 0 !== d ? d : c;
                return (0, o.useImperativeHandle)(t, () => {
                    var e;
                    return {
                        isLoaded: Boolean(null !== (p = null === (e = v.current) || void 0 === e ? void 0 : e.state.isApiReady) && void 0 !== p ? p : !g),
                        async getToken() {
                            var e, t;
                            if (!(null === (e = v.current) || void 0 === e ? void 0 : e.state.isApiReady)) throw Error("hCaptcha SDK not loaded");
                            try {
                                let e = await (null === (t = v.current) || void 0 === t ? void 0 : t.execute({
                                    async: !0
                                }));
                                return e.response
                            } catch (e) {
                                throw "challenge-closed" !== e && i.Tb(e, {
                                    tags: {
                                        component: "HCaptcha"
                                    }
                                }), e
                            }
                        }
                    }
                }), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(a.x, {
                        use: "label",
                        display: "none",
                        htmlFor: "g-recaptcha-response-".concat(null !== (h = null === (r = v.current) || void 0 === r ? void 0 : r.state.captchaId) && void 0 !== h ? h : ""),
                        children: "Captcha"
                    }), (0, n.jsx)(a.x, {
                        use: "label",
                        display: "none",
                        htmlFor: "h-captcha-response-".concat(null !== (f = null === (u = v.current) || void 0 === u ? void 0 : u.state.captchaId) && void 0 !== f ? f : ""),
                        children: "Captcha"
                    }), (0, n.jsx)(l.Z, {
                        ref: v,
                        size: "invisible",
                        sitekey: g,
                        onVerify: s.ZT,
                        ...e
                    })]
                })
            });
            d.displayName = "HCaptcha"
        },
        87747: function(e, t, r) {
            r.d(t, {
                o: function() {
                    return u
                }
            });
            var n = r(85893),
                o = r(30116),
                a = r(14141),
                l = r(37947);
            let i = (0, a.ZP)(o.x).withConfig({
                    componentId: "sc-d85bbb3d-0"
                })(e => {
                    let {
                        theme: t
                    } = e;
                    return (0, l.iv)({
                        maxWidth: t.layout.maxWidth
                    })
                }),
                u = e => (0, n.jsx)(i, {
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
        3333: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return u
                }
            });
            var n = r(85893),
                o = r(67294),
                a = r(17802),
                l = r(10255),
                i = r(28998);
            let u = (0, o.memo)(function(e) {
                let {
                    countryCode: t,
                    ...r
                } = e, o = t ? (0, i.mv)(t) : void 0;
                return (0, n.jsx)(l.Y, {
                    display: "inline-block",
                    src: o,
                    size: 24,
                    borderRadius: a.w.ROUND,
                    alt: null != t ? t : "Country flag",
                    ...r
                })
            })
        },
        23931: function(e, t, r) {
            r.d(t, {
                o: function() {
                    return a
                }
            });
            var n = r(64487);
            let o = e => {
                    let {
                        captchaToken: t,
                        getAppUrl: r,
                        phone: n,
                        promoCode: o,
                        urlQuery: a
                    } = e;
                    return fetch("/api/partnerships", {
                        method: "POST",
                        headers: {
                            "X-Captcha-Token": t,
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify({
                            phone: n,
                            urlQuery: a,
                            promoCode: o,
                            ...r && {
                                getAppUrl: r
                            }
                        })
                    })
                },
                a = e => {
                    let {
                        hasMobileStore: t,
                        promoCode: r,
                        urlQuery: a = ""
                    } = e;
                    return async e => {
                        let {
                            captchaToken: l,
                            getAppUrl: i,
                            phone: u
                        } = e;
                        try {
                            let e;
                            let s = await o({
                                captchaToken: l,
                                phone: u,
                                getAppUrl: t && r ? void 0 : i,
                                promoCode: null != r ? r : "WEBSITE19",
                                urlQuery: a
                            });
                            if (s.ok) return "success";
                            let c = await s.text();
                            try {
                                e = JSON.parse(c)
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
                            return n.Tb(Error("Unhandled server response for ".concat(s.url)), {
                                tags: {
                                    component: "get-the-app"
                                },
                                extra: { ...e
                                }
                            }), "error"
                        } catch (e) {
                            return n.Tb(e, {
                                tags: {
                                    component: "get-the-app"
                                }
                            }), "error"
                        }
                    }
                }
        },
        40165: function(e, t, r) {
            r.d(t, {
                e: function() {
                    return I
                }
            });
            var n = r(85893),
                o = r(94016),
                a = r(98608),
                l = r(68328),
                i = r(67294),
                u = r(52682),
                s = r(66005),
                c = r(23931);
            let d = e => {
                let {
                    children: t,
                    promoCode: r
                } = e, o = (0, u.W)(), [{
                    urlQuery: a
                }] = (0, s.g)(), l = (0, i.useMemo)(() => (0, c.o)({
                    promoCode: r,
                    hasMobileStore: o,
                    urlQuery: a
                }), [r, o, a]);
                return (0, n.jsx)(n.Fragment, {
                    children: t({
                        layout: r ? "text-button" : "default",
                        requestFunc: l
                    })
                })
            };
            var p = r(11163),
                h = r(56607),
                f = r(939),
                v = r(44170),
                g = r(87559),
                b = r(38556),
                m = r(72917),
                y = r(31955);
            let x = e => {
                let {
                    referralCode: t,
                    invitationCode: r,
                    invitationId: n
                } = e;
                return async e => {
                    let {
                        captchaToken: o,
                        phone: a
                    } = e;
                    try {
                        if (!t || !r || !n) return "error";
                        return await (0, m.Gv)({
                            captchaToken: o,
                            phone: a,
                            referralCode: t,
                            invitationId: n
                        })
                    } finally {
                        r && y.Z.remove(r)
                    }
                }
            };
            var C = r(64487);
            let w = e => {
                let [t, r] = (0, i.useState)(!1), [n, o] = (0, i.useState)(!1), [a, l] = (0, i.useState)(), [u, s] = (0, i.useState)(), c = (0, i.useMemo)(() => "uuid_".concat(e.referralCode), [e.referralCode]), d = (0, i.useCallback)(async e => {
                    try {
                        let t = await (0, m.cv)(e);
                        if (null == t ? void 0 : t.isExpired) o(!0), y.Z.remove(c);
                        else {
                            let t = y.Z.get(c);
                            if (t && "null" !== t) l(t);
                            else {
                                let t = await (0, m.cV)(e);
                                y.Z.set(c, t, {
                                    expires: 1e4
                                }), l(t)
                            }
                        }
                        let r = await (0, m.gi)(e);
                        r && s(r)
                    } catch (e) {
                        console.error(e), C.Tb(e, {
                            tags: {
                                component: "useCampaignDetails"
                            }
                        })
                    }
                }, [c]);
                return (0, i.useEffect)(() => {
                    e.referralCode && d(e.referralCode).finally(() => r(!0))
                }, [d, e.referralCode]), {
                    isLoaded: t,
                    isExpired: n,
                    invitationId: a,
                    invitationCode: c,
                    invitationReward: u
                }
            };
            var j = r(34254);

            function k() {
                let {
                    query: e
                } = (0, p.useRouter)();
                return (0, j.HD)(e["referral-code"]) ? e["referral-code"] : ""
            }
            let S = e => {
                    let {
                        children: t
                    } = e, {
                        locale: r
                    } = (0, p.useRouter)(), o = (0, g.T)(), a = (0, b.J)(), l = k(), {
                        invitationCode: u,
                        invitationId: s,
                        invitationReward: c,
                        isExpired: d
                    } = w({
                        referralCode: l
                    }), y = (0, i.useMemo)(() => {
                        if ((null == c ? void 0 : c.rewardType) === m.Qp.Money) {
                            var e;
                            let t = o("widget.getTheApp.referral.disclaimer");
                            return new v.C(t, r).format({
                                country: a(null !== (e = null == c ? void 0 : c.referrerCountryCode) && void 0 !== e ? e : "GB")
                            })
                        }
                        return ""
                    }, [a, null == c ? void 0 : c.referrerCountryCode, null == c ? void 0 : c.rewardType, r, o]), C = (0, i.useMemo)(() => x({
                        referralCode: l,
                        invitationCode: u,
                        invitationId: s
                    }), [u, s, l]);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [t({
                            layout: "default",
                            requestFunc: C
                        }), (0, n.jsxs)(h.g, {
                            align: "center",
                            pt: "s-32",
                            space: "s-16",
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, n.jsx)(f.xv, {
                                color: "grey-50",
                                use: "p",
                                children: o("widget.getTheApp.referral.privacy")
                            }), d && (0, n.jsx)(f.xv, {
                                color: "grey-50",
                                use: "p",
                                pt: "s-16",
                                children: o("widget.getTheApp.referral.rewardExpired")
                            }), !d && y && (0, n.jsx)(f.xv, {
                                color: "grey-50",
                                use: "p",
                                pt: "s-16",
                                children: y
                            })]
                        })]
                    })
                },
                T = (e, t) => "referral" === e && t ? S : d,
                I = e => {
                    let {
                        blockId: t,
                        type: r
                    } = e, i = k(), u = (0, a.Xb)(), {
                        isWaitlistCountry: s
                    } = (0, a.I9)(), c = T(r, i);
                    return (0, n.jsx)(c, { ...e,
                        children: e => {
                            let {
                                layout: r,
                                requestFunc: a
                            } = e;
                            return (0, n.jsx)(o.bV, {
                                link: l.li.RetailOpenApp,
                                blockId: t,
                                layout: r,
                                requestFunc: function() {
                                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                                    return s ? (u(t), Promise.resolve("idle")) : a(...r)
                                }
                            })
                        }
                    })
                }
        },
        94016: function(e, t, r) {
            r.d(t, {
                bV: function() {
                    return i
                }
            });
            var n = r(5152),
                o = r.n(n);
            let a = o()(() => Promise.all([r.e(8237), r.e(5898), r.e(4257), r.e(2265), r.e(9133), r.e(2055), r.e(6563), r.e(2032), r.e(387), r.e(2675), r.e(2613), r.e(7164), r.e(1557), r.e(1486), r.e(2065)]).then(r.bind(r, 1910)).then(e => e.PhoneFormControlled), {
                    loadableGenerated: {
                        webpack: () => [1910]
                    }
                }),
                l = o()(() => Promise.all([r.e(8237), r.e(5898), r.e(4257), r.e(2265), r.e(9133), r.e(2675), r.e(4694)]).then(r.bind(r, 87616)).then(e => e.PhoneFormPopup), {
                    loadableGenerated: {
                        webpack: () => [87616]
                    },
                    ssr: !1
                }),
                i = Object.assign(o()(() => Promise.all([r.e(8237), r.e(5898), r.e(4257), r.e(2265), r.e(9133), r.e(2055), r.e(6563), r.e(2032), r.e(387), r.e(2675), r.e(2613), r.e(7164), r.e(1557), r.e(1486), r.e(2065)]).then(r.bind(r, 1910)).then(e => e.PhoneForm), {
                    loadableGenerated: {
                        webpack: () => [1910]
                    },
                    ssr: !0
                }), {
                    Controlled: a,
                    Popup: l
                })
        },
        39154: function(e, t, r) {
            r.d(t, {
                O: function() {
                    return c
                }
            });
            var n = r(67294),
                o = r(35402),
                a = r(52682),
                l = r(95630),
                i = r(40126),
                u = r(68328),
                s = r(11163);
            let c = function() {
                let {
                    blockId: e,
                    link: t = u.li.RetailOpenApp
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [r, c] = (0, n.useState)({
                    status: "idle"
                }), {
                    phone: d,
                    phoneCode: p,
                    setPhone: h,
                    setPhoneCode: f
                } = (0, l.z)(), {
                    getResourceBlockContext: v
                } = (0, i.EL)(), g = v(e);
                ! function(e) {
                    let {
                        status: t,
                        redirectUrl: r
                    } = e, {
                        link: l
                    } = (0, o.PF)(r), i = (0, n.useRef)(), u = (0, a.W)();
                    (0, n.useEffect)(() => {
                        u && "idle" === t && "success" === i.current && (i.current = t, window.location.href = l), i.current !== t && (i.current = t)
                    }, [t, r, u, l])
                }({
                    status: r.status,
                    redirectUrl: t
                }),
                function(e) {
                    let {
                        formState: t,
                        countryCode: r,
                        context: a,
                        component_name: l,
                        position: u
                    } = e, {
                        locale: c
                    } = (0, s.useRouter)(), {
                        trackEvent: d
                    } = (0, o.z$)(), p = (0, n.useRef)("idle"), h = t.status, f = "error" === t.status && t.event || "error";
                    (0, n.useEffect)(() => {
                        let e = {
                            phoneCountryCode: r,
                            locale: c,
                            context: a,
                            position: u
                        };
                        if (l !== i.T4.component_name) {
                            if ("idle" === h && "idle" === p.current) {
                                d({
                                    action: "Signup_Start",
                                    component_name: l,
                                    vertical: "Retail",
                                    payload: e
                                });
                                return
                            }
                            if (p.current !== h) {
                                if (p.current = h, "loading" === h) {
                                    d({
                                        action: "Phone_Enter",
                                        component_name: l,
                                        vertical: "Retail",
                                        payload: e
                                    });
                                    return
                                }
                                if ("success" === h) {
                                    d({
                                        action: "Phone_Submit",
                                        component_name: l,
                                        vertical: "Retail",
                                        payload: e
                                    });
                                    return
                                }
                                if ("error" === h) {
                                    d({
                                        action: "Phone_Fail",
                                        component_name: l,
                                        vertical: "Retail",
                                        payload: { ...e,
                                            error: f
                                        }
                                    });
                                    return
                                }
                            }
                        }
                    }, [l, a, r, f, c, u, h, d])
                }({
                    formState: r,
                    countryCode: p,
                    ...g
                });
                let b = (0, n.useCallback)(() => {
                    c({
                        status: "idle"
                    }), h("")
                }, [c, h]);
                return {
                    countryCode: p,
                    formState: r,
                    link: t,
                    phoneNumber: d,
                    handlePopupExit: b,
                    setCountryCode: f,
                    setFormState: c,
                    setPhoneNumber: h
                }
            }
        },
        31496: function(e, t, r) {
            r.r(t), r.d(t, {
                PhoneInput: function() {
                    return D
                },
                PhoneInputForwarded: function() {
                    return N
                },
                PhoneInputSkeleton: function() {
                    return A
                }
            });
            var n = r(85893),
                o = r(37903),
                a = r(67294),
                l = r(87688),
                i = r(92032),
                u = r(40387),
                s = r(939),
                c = r(26283),
                d = r(11163),
                p = r(86853),
                h = r(28998),
                f = r(34254),
                v = r(56435),
                g = r(38556),
                b = r(87559),
                m = r(82403);
            let y = new Set(["AF", "AO", "BF", "BI", "BO", "BY", "CD", "CF", "CG", "CI", "CU", "DZ", "EG", "ER", "GN", "GW", "GY", "HT", "IQ", "IR", "KH", "KP", "LA", "LB", "LY", "MM", "NG", "PA", "PK", "PS", "RU", "SD", "SL", "SO", "SS", "SY", "SZ", "TN", "TT", "UG", "VE", "VU", "YE", "ZW"]);
            var x = r(3333);
            let C = {
                    GB: ["GB", "IE", "ES", "FR"],
                    DE: ["DE", "AT", "CH"],
                    AT: ["AT", "DE", "CH"],
                    CH: ["CH", "AT", "DE"]
                },
                w = () => {
                    let {
                        locale: e
                    } = (0, d.useRouter)(), t = (0, g.J)();
                    return (0, a.useMemo)(() => {
                        var r;
                        let {
                            region: n
                        } = (0, p.i4)(e), o = (0, h.jj)([...null !== (r = C[n]) && void 0 !== r ? r : [], ...v.J$, ...(0, c.o)()]).filter(e => !y.has(e));
                        return o.map(e => {
                            let r = t(e),
                                n = "+".concat((0, l.G)(e));
                            return {
                                label: "".concat(n, " ").concat(r),
                                countryCallingCode: n,
                                countryName: r,
                                value: e
                            }
                        })
                    }, [t, e])
                },
                j = () => {
                    let e = (0, b.T)(),
                        t = (0, m.E)();
                    return (0, n.jsx)(i.I, {
                        type: "button",
                        "aria-label": e("shared.phoneCodes.labelInput"),
                        "aria-haspopup": "listbox",
                        renderPrefix: () => (0, n.jsx)(x.A, {
                            countryCode: t
                        }),
                        width: "7rem",
                        disabled: !0
                    })
                },
                k = e => {
                    var t;
                    let {
                        anchorRef: r,
                        value: l,
                        onChange: c,
                        ...d
                    } = e, p = w(), h = (0, b.T)(), [v, g] = (0, a.useState)(), [m, y] = (0, a.useState)(!1), C = (0, a.useMemo)(() => null !== (t = p.find(e => e.value === l)) && void 0 !== t ? t : p[0], [p, l]), j = (0, a.useMemo)(() => [p.find(e => e.value === l), ...p.filter(e => e.value !== l)].filter(f.fQ), [p, l]);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(i.I, {
                            type: "button",
                            "aria-label": h("shared.phoneCodes.labelInput"),
                            "aria-haspopup": "listbox",
                            renderPrefix: () => (0, n.jsx)(x.A, {
                                size: 20,
                                countryCode: C.value
                            }),
                            onClick: () => y(!0),
                            value: C.countryCallingCode,
                            width: "7rem",
                            ...d
                        }), (0, n.jsx)(u.Q, {
                            anchorRef: r,
                            maxHeight: "16rem",
                            open: m,
                            value: C,
                            onChange: e => e && g(e.value),
                            onBlur: () => !m && c(v),
                            onClose: () => y(!1),
                            style: {
                                fontSize: "1rem"
                            },
                            options: (0, a.useMemo)(() => j.map(e => ({
                                key: e.countryName,
                                label: e.label,
                                value: e
                            })), [j]),
                            indicatorStyle: "highlight",
                            labelList: h("shared.phoneCodes.labelList"),
                            labelSearch: h("shared.phoneCodes.labelSearch"),
                            labelNoResults: h("shared.filter.no.items.label"),
                            autoClose: !0,
                            fitInAnchor: !0,
                            searchable: !0,
                            children: e => (0, n.jsxs)(o.U, {
                                align: "center",
                                gap: "s-16",
                                children: [(0, n.jsx)(x.A, {
                                    countryCode: e.value.value
                                }), (0, n.jsx)(s.xv, {
                                    fontSize: "1rem",
                                    color: "grey-50",
                                    minWidth: "s-56",
                                    children: e.value.countryCallingCode
                                }), (0, n.jsx)(s.xv, {
                                    fontSize: "1rem",
                                    flex: "1",
                                    color: "foreground",
                                    children: e.value.countryName
                                })]
                            }, e.key)
                        })]
                    })
                };
            var S = r(15423),
                T = r(13955),
                I = r(48315);
            let E = (e, t) => {
                    let r = "+".concat((0, l.G)(e));
                    return (0, S.f)("".concat(r).concat(t)).replace((0, S.f)(r), "").trim()
                },
                P = () => {
                    let e = (0, b.T)();
                    return (0, n.jsx)(i.I, {
                        disabled: !0,
                        name: "phoneNumber",
                        placeholder: e("widget.getTheApp.mobilePhone")
                    })
                },
                R = (0, a.forwardRef)((e, t) => {
                    let {
                        countryCode: r,
                        value: o,
                        onChange: l,
                        placeholder: u,
                        ...s
                    } = e, [c, d] = (0, a.useState)("on"), p = (0, b.T)(), h = (0, I.u)({
                        value: o,
                        onChange: e => l((0, T.Z)(e)),
                        format: e => E(r, e)
                    }), f = () => {
                        d("tel-national")
                    };
                    return (0, n.jsx)(i.I, {
                        ref: t,
                        type: "tel",
                        onFocus: f,
                        autoComplete: c,
                        value: h.value,
                        onChange: h.onChange,
                        placeholder: null != u ? u : p("widget.getTheApp.mobilePhone"),
                        ...s
                    })
                });
            R.displayName = "PhoneNumberInput";
            let A = () => (0, n.jsxs)(o.U, {
                    space: "s-8",
                    flex: "1 0",
                    children: [(0, n.jsx)(j, {}), (0, n.jsx)(P, {})]
                }),
                N = (0, a.forwardRef)((e, t) => {
                    let {
                        onDataChange: r,
                        countryCode: i,
                        onCountryCodeChange: u,
                        phoneNumber: s,
                        onPhoneNumberChange: c,
                        disabled: d,
                        invalid: p,
                        placeholder: h
                    } = e, f = (0, a.useRef)(null);
                    return (0, a.useEffect)(() => {
                        null == r || r("+".concat((0, l.G)(i)).concat(s))
                    }, [i, s, r]), (0, n.jsxs)(o.U, {
                        ref: f,
                        space: "s-8",
                        flex: "1 0",
                        children: [(0, n.jsx)(k, {
                            disabled: d,
                            anchorRef: f,
                            value: i,
                            onChange: u
                        }), (0, n.jsx)(R, {
                            name: "phoneNumber",
                            "aria-invalid": p,
                            disabled: d,
                            ref: t,
                            countryCode: i,
                            value: s,
                            onChange: c,
                            placeholder: h
                        })]
                    })
                });
            N.displayName = "PhoneInputControlled";
            let D = e => {
                let {
                    forwardedRef: t,
                    ...r
                } = e;
                return (0, n.jsx)(N, {
                    ref: t,
                    ...r
                })
            }
        },
        39880: function(e, t, r) {
            r.d(t, {
                s: function() {
                    return s
                }
            });
            var n = r(85893),
                o = r(5152),
                a = r.n(o),
                l = r(67294),
                i = r(31496);
            let u = a()(() => Promise.resolve().then(r.bind(r, 31496)).then(e => e.PhoneInput), {
                    loadableGenerated: {
                        webpack: () => [31496]
                    },
                    ssr: !1,
                    loading: i.PhoneInputSkeleton
                }),
                s = (0, l.forwardRef)((e, t) => (0, n.jsx)(u, {
                    forwardedRef: t,
                    ...e
                }));
            s.displayName = "PhoneInput"
        },
        10255: function(e, t, r) {
            r.d(t, {
                Y: function() {
                    return p
                }
            });
            var n = r(85893),
                o = r(67294),
                a = r(8954),
                l = r(17802),
                i = r(37947),
                u = r(14141),
                s = r(34254);
            let c = (0, u.ZP)(a.Ee).withConfig({
                    componentId: "sc-4439bf8f-0"
                })(e => {
                    let {
                        size: t
                    } = e;
                    return (0, i.iv)({
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
                p = (0, o.memo)(function(e) {
                    let {
                        src: t,
                        alt: r,
                        size: o = 24,
                        ...a
                    } = e;
                    return (0, n.jsx)(c, {
                        image: t ? {
                            default: t,
                            "1x": [t, d(t) ? t.replace(/.webp$/, ".png") : void 0].filter(s.fQ)
                        } : void 0,
                        display: "inline-block",
                        borderRadius: l.w.ROUND,
                        alt: null != r ? r : "",
                        size: o,
                        ...a
                    })
                })
        },
        46593: function(e, t, r) {
            r.d(t, {
                n: function() {
                    return I
                }
            });
            var n = r(85893),
                o = r(31346),
                a = r(37903),
                l = r(20010),
                i = r(92675),
                u = r(9522),
                s = r(45004),
                c = r(67294),
                d = r(11163),
                p = r(23279),
                h = r.n(p),
                f = r(74925),
                v = r(39154),
                g = r(39880),
                b = r(87559),
                m = r(52682),
                y = r(35402),
                x = r(23115),
                C = r(34215),
                w = r(34254),
                j = r(68328);
            let k = e => {
                let {
                    captchaToken: t,
                    code: r,
                    countryCode: n,
                    phone: o
                } = e, a = {};
                return t && (a["X-Captcha-Token"] = t), fetch("/api/youth/guardians/ssu-invitations/accept", {
                    method: "post",
                    headers: a,
                    body: JSON.stringify({
                        code: r,
                        countryCode: n,
                        phone: o
                    })
                })
            };
            async function S(e) {
                let {
                    captchaToken: t,
                    code: r,
                    countryCode: n,
                    phone: o
                } = e;
                try {
                    let e = await k({
                            captchaToken: t,
                            code: r,
                            countryCode: n,
                            phone: o
                        }),
                        a = await e.json();
                    return a
                } catch (e) {
                    return {
                        success: !1
                    }
                }
            }
            let {
                publicRuntimeConfig: {
                    isHCaptchaEnabled: T
                }
            } = (0, f.i)(), I = e => {
                var t, r, p, f;
                let {
                    formState: k,
                    countryCode: I,
                    setCountryCode: E,
                    phoneNumber: P,
                    setPhoneNumber: R,
                    setFormState: A
                } = (0, v.O)({
                    blockId: e.blockId
                }), {
                    captchaKey: N
                } = e, D = (0, b.T)(), F = (0, c.useRef)(null), _ = (0, c.useRef)(null), [O, G] = (0, c.useState)(!0), [U, L] = (0, c.useState)(!1), [W, z] = (0, c.useState)(), B = function(e) {
                    let {
                        query: t
                    } = (0, d.useRouter)(), r = t[e];
                    return (0, w.HD)(r) ? r : ""
                }(e.under18CodeParameterName), H = (0, c.useRef)(null), [Z, M] = (0, c.useState)(!1), Y = (0, m.W)(), {
                    link: J
                } = (0, y.PF)(j.li.RetailOpenApp), V = (0, x.Ty)();
                (0, c.useEffect)(() => {
                    L(!0)
                }, []);
                let K = (0, c.useCallback)(e => {
                    e && E(e)
                }, [E]);
                (0, c.useEffect)(() => {
                    setTimeout(() => {
                        var e;
                        null === (e = _.current) || void 0 === e || e.focus()
                    })
                }, [I, _]);
                let X = (0, c.useCallback)(h()(e => G(e), 700), []);
                (0, c.useEffect)(() => {
                    X((0, s.y)("+".concat((0, u.G)(I)).concat(P)))
                }, [I, P, X]);
                let q = (0, c.useCallback)(async () => {
                        var e, t, r;
                        if (!O || T && !(null === (e = H.current) || void 0 === e ? void 0 : e.isLoaded) || "idle" !== k.status) return;
                        if ("" === P) return null === (t = _.current) || void 0 === t ? void 0 : t.focus();
                        A({
                            status: "loading"
                        });
                        let n = "";
                        if (T && H.current) try {
                            n = await (null === (r = H.current) || void 0 === r ? void 0 : r.getToken())
                        } catch (e) {
                            return A({
                                status: "error",
                                event: "captcha-error"
                            })
                        }
                        let o = await S({
                            captchaToken: n,
                            phone: "+".concat((0, u.G)(I)).concat(P),
                            countryCode: I,
                            code: B
                        });
                        return z(o), A({
                            status: o.success ? "success" : "error"
                        })
                    }, [B, I, k.status, O, P, A]),
                    Q = (0, c.useCallback)(e => {
                        e.preventDefault(), M(!0), q()
                    }, [q]),
                    $ = (0, c.useCallback)(() => {
                        "success" !== k.status || Y || (window.location.href = J), A({
                            status: "idle"
                        }), z(void 0)
                    }, [k.status, Y, J, A]),
                    ee = async () => {
                        Z && await q()
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(o.k, {
                        use: "form",
                        alignItems: "center",
                        justifyContent: "stretch",
                        flexWrap: "wrap",
                        onSubmit: Q,
                        children: [T && (0, n.jsx)(C.m, {
                            ref: H,
                            onLoad: ee,
                            captchaKey: N
                        }), (0, n.jsx)(a.U, {
                            ref: F,
                            space: "s-8",
                            flex: "1 0",
                            children: (0, n.jsx)(g.s, {
                                "aria-invalid": Boolean(P && !O),
                                disabled: "loading" === k.status,
                                ref: _,
                                countryCode: I,
                                phoneNumber: P,
                                onPhoneNumberChange: R,
                                onCountryCodeChange: K
                            })
                        }), (0, n.jsx)(l.z, {
                            disabled: !(U && ("" === P || O)),
                            pending: "loading" === k.status,
                            type: "submit",
                            height: "s-48",
                            width: "s-48",
                            mt: "s-24",
                            variant: "black",
                            style: {
                                flexBasis: "100%"
                            },
                            children: D("shared.button.getStarted")
                        })]
                    }), (0, n.jsxs)(i.u, {
                        variant: (null == W ? void 0 : W.success) ? "success" : "error",
                        open: void 0 !== W,
                        onClose: $,
                        children: [(0, n.jsx)(i.u.Title, {
                            children: null !== (p = null == W ? void 0 : null === (t = W.message) || void 0 === t ? void 0 : t.title) && void 0 !== p ? p : D("widget.under18approve.acceptErrorTitle")
                        }), (0, n.jsx)(i.u.Description, {
                            children: V(null !== (f = null == W ? void 0 : null === (r = W.message) || void 0 === r ? void 0 : r.description) && void 0 !== f ? f : D("widget.under18approve.acceptErrorDescription"))
                        })]
                    })]
                })
            }
        },
        38556: function(e, t, r) {
            r.d(t, {
                J: function() {
                    return u
                }
            });
            var n = r(67294),
                o = r(11163),
                a = r(86853),
                l = r(28998);
            let i = new Map;

            function u() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "region",
                    {
                        locale: t
                    } = (0, o.useRouter)(),
                    {
                        language: u
                    } = (0, a.i4)(t);
                return (0, n.useCallback)(function(t) {
                    var n, o, a, s;
                    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
                    if ("HK" === t) {
                        let n = (null === (o = r.g.Intl) || void 0 === o ? void 0 : o.DisplayNames) && new r.g.Intl.DisplayNames(c, {
                            type: e,
                            style: "short"
                        }).of(t);
                        return null != n ? n : t
                    }
                    let d = "".concat(e, ":").concat(c),
                        p = null !== (a = i.get(d)) && void 0 !== a ? a : (null === (n = r.g.Intl) || void 0 === n ? void 0 : n.DisplayNames) && i.set(d, new r.g.Intl.DisplayNames(c, {
                            type: e
                        })).get(d);
                    if ("currency" === e && (0, l.YX)(t)) return (0, l.A1)(t);
                    try {
                        return null !== (s = null == p ? void 0 : p.of(t)) && void 0 !== s ? s : t
                    } catch (e) {
                        return console.error(e), t
                    }
                }, [u, e])
            }
        },
        23115: function(e, t, r) {
            r.d(t, {
                CD: function() {
                    return y
                },
                Ty: function() {
                    return b
                },
                bh: function() {
                    return f
                },
                tJ: function() {
                    return o
                }
            });
            var n, o, a = r(85893),
                l = r(67294),
                i = r(59467),
                u = r(22674),
                s = r(25935),
                c = r(11163),
                d = r(14141),
                p = r(6206),
                h = r(4842);
            (n = o || (o = {})).A = "a", n.B = "b", n.Blockquote = "blockquote", n.Br = "br", n.Em = "em", n.H1 = "h1", n.H2 = "h2", n.H3 = "h3", n.H4 = "h4", n.H5 = "h5", n.H6 = "h6", n.I = "i", n.Li = "li", n.Ol = "ol", n.P = "p", n.S = "s", n.Small = "small", n.Strong = "strong", n.Table = "table", n.Tbody = "tbody", n.Td = "td", n.Th = "th", n.Thead = "thead", n.Tr = "tr", n.U = "u", n.Ul = "ul";
            let f = (e, t) => {
                    let {
                        attribs: r
                    } = e;
                    return r && (r[t] || r[t.toLowerCase()])
                },
                v = (0, d.ZP)(i.r).withConfig({
                    componentId: "sc-cbd6de61-0"
                })({
                    "&:hover": {
                        color: u.W.color.accent
                    }
                }),
                g = e => {
                    let {
                        locale: t,
                        defaultLocale: r,
                        customReplace: n,
                        allowedTags: i = Object.values(o)
                    } = e;
                    return function(e) {
                        let u = e.children && (0, s.du)(e.children, {
                            trim: !0,
                            replace: g({
                                locale: t,
                                defaultLocale: r,
                                customReplace: n,
                                allowedTags: i
                            })
                        });
                        if (n) {
                            let t = n(e, u);
                            if (t) return t
                        }
                        if ("text" !== e.type) {
                            if (!i.includes(e.name)) return (0, a.jsx)(a.Fragment, {
                                children: u
                            });
                            if (e.attribs && e.name === o.A) {
                                var c, d, b;
                                if ((null === (c = e.attribs.href) || void 0 === c ? void 0 : c.toLowerCase().startsWith("javascript:")) || (null === (d = e.attribs.href) || void 0 === d ? void 0 : d.toLowerCase().startsWith("data:"))) return (0, a.jsx)(a.Fragment, {
                                    children: u
                                });
                                if (null === (b = e.attribs.href) || void 0 === b ? void 0 : b.startsWith("mailto:")) return (0, a.jsx)(v, {
                                    color: "inherit",
                                    textDecoration: "underline",
                                    href: e.attribs.href,
                                    children: u
                                });
                                let n = f(e, "data-location-type"),
                                    o = f(e, "data-location-legalDocumentId"),
                                    l = f(e, "data-location-locationId"),
                                    i = f(e, "data-location-locale");
                                if (n === h._i.Legal && o) return (0, a.jsx)(p._, {
                                    value: {
                                        type: h._i.Legal,
                                        legalDocumentId: o
                                    },
                                    children: (0, a.jsx)(v, {
                                        color: "inherit",
                                        rel: "noopener",
                                        target: "_blank",
                                        textDecoration: "underline",
                                        children: u
                                    })
                                });
                                if (n === h._i.Internal && l) return (0, a.jsx)(p._, {
                                    value: {
                                        type: h._i.Internal,
                                        locationId: l,
                                        locale: t
                                    },
                                    children: (0, a.jsx)(v, {
                                        color: "inherit",
                                        textDecoration: "underline",
                                        children: u
                                    })
                                });
                                if (n === h._i.External) {
                                    let {
                                        href: n
                                    } = e.attribs, o = t && t === r ? "" : t, l = new URL(n), s = l.href.replace(l.origin, "".concat(l.origin).concat("true" === i && o ? "/".concat(o) : ""));
                                    return (0, a.jsx)(p._, {
                                        value: {
                                            type: h._i.External,
                                            uri: s
                                        },
                                        children: (0, a.jsx)(v, {
                                            color: "inherit",
                                            rel: "noopener",
                                            target: "_blank",
                                            textDecoration: "underline",
                                            children: u
                                        })
                                    })
                                }
                                return (0, a.jsx)(v, {
                                    color: "inherit",
                                    href: e.attribs.href,
                                    rel: "noopener",
                                    target: "_self",
                                    textDecoration: "underline",
                                    children: u
                                })
                            }
                            return Array.isArray(u) && 0 === u.length ? (0, l.createElement)(e.name) : (0, l.createElement)(e.name, null, u)
                        }
                    }
                },
                b = function() {
                    let {
                        allowedTags: e,
                        customReplace: t
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        defaultLocale: r,
                        locale: n
                    } = (0, c.useRouter)();
                    return (0, l.useCallback)(o => o ? (0, s.ZP)(o, {
                        trim: !0,
                        replace: g({
                            locale: n,
                            defaultLocale: r,
                            customReplace: t,
                            allowedTags: e
                        })
                    }) : null, [r, n, t, e])
                },
                m = /<a\s+href="/,
                y = e => {
                    let {
                        text: t = ""
                    } = e, {
                        defaultLocale: r,
                        locale: n
                    } = (0, c.useRouter)();
                    return (0, l.useMemo)(() => m.test(t) ? (0, s.ZP)(t, {
                        trim: !0,
                        replace: g({
                            locale: n,
                            defaultLocale: r
                        })
                    }) : t, [r, n, t])
                }
        },
        95630: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return c
                },
                z: function() {
                    return s
                }
            });
            var n = r(85893),
                o = r(67294),
                a = r(56435),
                l = r(82403);
            let i = (0, o.createContext)({
                    phone: "",
                    phoneCode: a.UF
                }),
                u = (0, o.createContext)({
                    setPhone: () => {},
                    setPhoneCode: () => {}
                }),
                s = () => {
                    let {
                        phone: e,
                        phoneCode: t
                    } = (0, o.useContext)(i), {
                        setPhone: r,
                        setPhoneCode: n
                    } = (0, o.useContext)(u);
                    return {
                        phone: e,
                        phoneCode: t,
                        setPhone: r,
                        setPhoneCode: n
                    }
                },
                c = e => {
                    let {
                        children: t
                    } = e, r = (0, l.E)(), [a, s] = (0, o.useState)(""), [c, d] = (0, o.useState)(r);
                    return (0, n.jsx)(i.Provider, {
                        value: {
                            phone: a,
                            phoneCode: c
                        },
                        children: (0, n.jsx)(u.Provider, {
                            value: {
                                setPhone: s,
                                setPhoneCode: d
                            },
                            children: t
                        })
                    })
                }
        },
        30201: function(e, t, r) {
            var n, o;
            r.d(t, {
                r: function() {
                    return n
                }
            }), (o = n || (n = {})).BrowserApplication = "x-browser-application", o.CaptchaToken = "X-Captcha-Token", o.ClientVersion = "x-client-version", o.DeviceId = "x-device-id", o.GeoLocation = "x-client-geo-location", o.UserAgent = "user-agent", o.Authorization = "Authorization"
        },
        72917: function(e, t, r) {
            r.d(t, {
                Gv: function() {
                    return p
                },
                Qp: function() {
                    return o
                },
                cV: function() {
                    return s
                },
                cv: function() {
                    return c
                },
                gi: function() {
                    return d
                }
            });
            var n, o, a = r(64487),
                l = r(30201),
                i = r(17359);
            let u = e => {
                    let {
                        captchaToken: t,
                        token: r,
                        phone: n,
                        referralCode: o,
                        inviteId: a
                    } = e;
                    return fetch("/api/v2/invitation/accept", {
                        method: "post",
                        headers: { ...r && {
                                [l.r.Authorization]: "Basic ".concat(r)
                            },
                            ...t && {
                                [l.r.CaptchaToken]: t
                            }
                        },
                        body: JSON.stringify({
                            phone: n,
                            referralCode: o,
                            inviteId: a
                        })
                    })
                },
                s = e => (0, i.In)("/api/invitation", {
                    method: "post",
                    body: JSON.stringify({
                        referralCode: e
                    })
                });
            (n = o || (o = {})).Money = "MONEY", n.Card = "FREE_CARD_DELIVERY", n.FeatureUnlock = "FEATURE_UNLOCK", n.Campaign = "CAMPAIGN", n.Vodaphone = "VODAFONE";
            let c = async e => {
                    let t = await fetch("/api/invitation/".concat(e, "/validateCampaign"));
                    return 422 === t.status ? {
                        isExpired: !0
                    } : {
                        isExpired: !1
                    }
                },
                d = e => (0, i.In)("/api/invitation/".concat(e, "/reward")),
                p = async e => {
                    let {
                        phone: t,
                        referralCode: r,
                        invitationId: n,
                        captchaToken: o,
                        token: l
                    } = e;
                    try {
                        let e;
                        if (!r || !n || !o && !l) return "error";
                        let i = await u({
                            captchaToken: o,
                            token: l,
                            phone: t,
                            referralCode: r,
                            inviteId: n
                        });
                        if (i.ok) return "success";
                        let s = await i.text();
                        try {
                            e = JSON.parse(s)
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
                        if ((null == e ? void 0 : e.code) === 20038) return {
                            status: "error",
                            event: "referral-code-not-valid"
                        };
                        return a.Tb(Error("Unhandled server response for ".concat(i.url)), {
                            tags: {
                                component: "referral"
                            },
                            extra: { ...e
                            }
                        }), "error"
                    } catch (e) {
                        return a.Tb(e, {
                            tags: {
                                component: "referral"
                            }
                        }), "error"
                    }
                }
        }
    }
]);