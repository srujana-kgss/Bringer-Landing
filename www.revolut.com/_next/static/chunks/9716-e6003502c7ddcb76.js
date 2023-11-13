"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9716], {
        15326: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return d
                }
            });
            var r = n(85893),
                i = n(35402),
                o = n(67294),
                a = n(5152),
                l = n.n(a),
                u = n(52805);
            let c = l()(() => Promise.all([n.e(8237), n.e(5898), n.e(4257), n.e(2265), n.e(9133), n.e(1722), n.e(3245), n.e(2238), n.e(1664), n.e(3594), n.e(6206), n.e(9223)]).then(n.bind(n, 4320)).then(e => e.CookieConsentModal), {
                    loadableGenerated: {
                        webpack: () => [4320]
                    },
                    ssr: !1
                }),
                s = e => {
                    let {
                        disableCookieConsent: t
                    } = e, {
                        isBannerDisplayed: n
                    } = (0, u.uz)(), [i, a] = (0, o.useState)(!1);
                    return ((0, o.useEffect)(() => {
                        a(!0)
                    }, []), n || !i || t) ? null : (0, r.jsx)(c, {})
                },
                d = e => {
                    let {
                        children: t,
                        isEnabled: n = !0,
                        disableCookieConsent: o = !1
                    } = e;
                    return (0, r.jsx)(u.i1, {
                        children: (0, r.jsxs)(i.ng, {
                            isAppsFlyerEnabled: n,
                            isGoogleEnabled: n,
                            children: [(0, r.jsx)(s, {
                                disableCookieConsent: o
                            }), t]
                        })
                    })
                }
        },
        6600: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return o
                },
                s: function() {
                    return i
                }
            });
            var r = n(67294);
            let i = (0, r.createContext)({}),
                o = () => (0, r.useContext)(i)
        },
        16970: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return w
                }
            });
            var r = n(85893),
                i = n(939),
                o = n(34254),
                a = n(67294),
                l = n(24097),
                u = n(26732),
                c = n(6485);
            let s = [l.U.XS, l.U.SM, l.U.MD, l.U.LG, l.U.XL, l.U.XXL],
                d = {
                    xs: {
                        minWidth: u.j[l.U.XS],
                        maxWidth: u.j[l.U.MD]
                    },
                    sm: null,
                    md: {
                        minWidth: u.j[l.U.MD],
                        maxWidth: u.j[l.U.XXL]
                    },
                    lg: null,
                    xl: null,
                    xxl: {
                        minWidth: u.j[l.U.XXL],
                        maxWidth: u.j[l.U.MAX]
                    }
                },
                f = {
                    xs: 0,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                    xxl: 5
                },
                p = (e, t) => {
                    let n = f[t];
                    for (let t = n; t >= 0; t--)
                        if (e[t]) return e[t];
                    return null
                },
                v = (e, t) => Array.isArray(e) ? p(e, t) : e,
                _ = (e, t, n, r) => {
                    let i = parseFloat(e),
                        o = parseFloat(t),
                        a = parseFloat(n) / 16,
                        l = parseFloat(r) / 16,
                        u = (i - o) / (a - l);
                    return "".concat(-l * u + o, "rem + ").concat(100 * u, "vw")
                },
                g = [l.U.XXL],
                m = (e, t, n) => (0, a.useMemo)(() => {
                    if (!e || !t && !n) return;
                    let r = c.s[null != n ? n : e].fontSize;
                    return s.map(n => {
                        var i;
                        let o = null !== (i = v(t, n)) && void 0 !== i ? i : e,
                            a = c.s[o].fontSize,
                            l = p(r, n);
                        if (g.includes(n)) return l;
                        let u = p(a, n);
                        if (u === l) return l;
                        let s = d[n];
                        if (null === l || null === u || null === s) return null;
                        let {
                            maxWidth: f,
                            minWidth: m
                        } = s, h = _(l, u, f, m);
                        return "clamp(".concat(u, ", ").concat(h, ", ").concat(l, ")")
                    })
                }, [e, t, n]),
                h = e => Math.max(...e.split(/\s/).map(e => {
                    let {
                        length: t
                    } = e;
                    return t
                })),
                w = e => {
                    let {
                        variant: t,
                        minTextStyle: n,
                        children: a,
                        align: l,
                        disableScalingOnMobiles: u,
                        ...c
                    } = e, s = function(e, t, n) {
                        if (!(0, o.HD)(e) || "h0" !== t && "h1" !== t && "h2" !== t) return t;
                        let r = e.length > ("left" === n ? 36 : 50),
                            i = h(e) > ("left" === n ? "h0" === t ? 14 : 8 : 16);
                        return "h0" === t && (r || i) ? "h1" : "h1" === t && (r || i) ? "h2" : "h2" === t && (r || i) ? "h3" : t
                    }(a, t, l), d = m(s, n || ("h0" === s ? ["h2", null, "h1"] : "h1" === s || "h2" === s ? "h3" : void 0));
                    return (0, r.jsx)(i.xv, {
                        fontSize: u ? [null, null, ...(null != d ? d : []).slice(f.md)] : d,
                        variant: u ? {
                            all: t,
                            md: s
                        } : s,
                        ...c,
                        children: a
                    })
                }
        },
        35402: function(e, t, n) {
            n.d(t, {
                ng: function() {
                    return X
                },
                z$: function() {
                    return z
                },
                PF: function() {
                    return Z
                }
            });
            var r, i, o = n(85893),
                a = n(67294),
                l = n(11163),
                u = n(28998),
                c = n(52805),
                s = n(42554);
            (r = i || (i = {})).CookieConsentGranted = "CookieConsent_Granted", r.CookieConsentDenied = "CookieConsent_Denied", r.MenuLinkClick = "MenuLink_Click", r.MenuSectionOpen = "MenuSection_Open", r.GetAppClick = "GetApp_Click", r.LoginClick = "Login_Click", r.SignupStart = "Signup_Start", r.PhoneEnter = "Phone_Enter", r.PhoneSubmit = "Phone_Submit", r.PhoneFail = "Phone_Fail", r.QrScan = "QR_Scan", r.ContactSalesClick = "ContactSales_Click", r.WebSignupClick = "WebSignup_Click", r.AmountChange = "Amount_Change", r.CountryChange = "Country_Change", r.RouteChange = "Route_Change", r.ViewportIn = "Viewport_In", r.ViewportOut = "Viewport_Out", r.CollectDataLinkClick = "CollectDataLink_Click", r.DisclaimerView = "Disclaimer_View", r.WaitListStart = "Waitlist_Start", r.WaitListEnter = "Waitlist_Enter", r.WaitListFail = "Waitlist_Fail", r.WaitListSubmit = "Waitlist_Submit", r.WaitListNewUserJoined = "Waitlist_NewUserJoined", r.ContactSalesFormSubmit = "ContactSalesForm_Submit";
            let d = new Set(Object.values(i));
            var f = n(4842),
                p = n(68328),
                v = n(34254),
                _ = n(49019),
                g = n(66005),
                m = n(40126);
            let h = {};
            var w = function(e, t) {
                let [n, r] = (0, a.useState)(() => {
                    var n;
                    return !e || (null == t ? void 0 : t.shouldPreventLoad) ? "idle" : null !== (n = h[e]) && void 0 !== n ? n : "loading"
                });
                return (0, a.useEffect)(() => {
                    if (!e || (null == t ? void 0 : t.shouldPreventLoad)) return;
                    let n = h[e];
                    if ("ready" === n || "error" === n) {
                        r(n);
                        return
                    }
                    let i = function(e) {
                            let t = document.querySelector('script[src="'.concat(e, '"]')),
                                n = null == t ? void 0 : t.getAttribute("data-status");
                            return {
                                node: t,
                                status: n
                            }
                        }(e),
                        o = i.node;
                    if (o) {
                        var a, l;
                        r(null !== (l = null !== (a = i.status) && void 0 !== a ? a : n) && void 0 !== l ? l : "loading")
                    } else {
                        (o = document.createElement("script")).src = e, o.async = !0, o.setAttribute("data-status", "loading"), document.body.appendChild(o);
                        let t = e => {
                            let t = "load" === e.type ? "ready" : "error";
                            null == o || o.setAttribute("data-status", t)
                        };
                        o.addEventListener("load", t, {
                            once: !0
                        }), o.addEventListener("error", t)
                    }
                    let u = t => {
                        let n = "load" === t.type ? "ready" : "error";
                        r(n), h[e] = n
                    };
                    return o.addEventListener("load", u, {
                        once: !0
                    }), o.addEventListener("error", u), () => {
                        o && (o.removeEventListener("load", u), o.removeEventListener("error", u)), o && (null == t ? void 0 : t.removeOnUnmount) && o.remove()
                    }
                }, [e, null == t ? void 0 : t.shouldPreventLoad, null == t ? void 0 : t.removeOnUnmount]), n
            };
            let y = _.eG ? "G-NC0XSL7JGN" : "G-DXGXYZCJN6",
                b = ["_ga", "_gid", "_ga_".concat(y), "_gat_".concat(y), "_gat_gtag_".concat(y)],
                C = e => {
                    let {
                        action: t,
                        callback: n,
                        payload: r,
                        component_name: i,
                        vertical: o
                    } = e;
                    (0, v.mf)(null == window ? void 0 : window.gtag) && d.has(t) ? window.gtag("event", t, {
                        component_name: i,
                        vertical: o,
                        event_callback: n,
                        ...r ? {
                            event_payload: JSON.stringify(r)
                        } : {}
                    }) : null == n || n()
                };
            var k = n(17563),
                S = n(78009),
                x = n(17359),
                E = n(73220),
                L = n(81482);
            let A = () => (0, L.Kk)(E.UQ.AnalyticsLinkCache, {}),
                U = e => (0, L.fe)(E.UQ.AnalyticsLinkCache, e),
                R = {
                    pid: ["pid", "utm_source"],
                    af_channel: ["af_channel", "utm_channel"],
                    c: ["c", "utm_campaign"],
                    af_c_id: ["af_c_id"],
                    af_sub1: ["af_sub1"],
                    af_sub2: ["clickid", "af_sub2"],
                    af_sub3: ["af_sub3"],
                    af_sub4: ["af_sub4"],
                    af_sub5: ["af_sub5"],
                    af_ad: ["af_ad"],
                    af_ad_id: ["af_ad_id"],
                    af_ad_type: ["af_ad_type"],
                    af_adset: ["af_adset"],
                    af_adset_id: ["af_adset_id"],
                    af_click_lookback: ["af_click_lookback"],
                    af_cost_currency: ["af_cost_currency"],
                    af_cost_model: ["af_cost_model"],
                    af_cost_value: ["af_cost_value"],
                    af_dp: ["af_dp"],
                    af_force_deeplink: ["af_force_deeplink"],
                    af_keywords: ["af_keywords"],
                    af_media_type: ["af_media_type"],
                    af_model: ["af_model"],
                    af_mp: ["af_mp"],
                    af_os: ["af_os"],
                    af_param_forwarding: ["af_param_forwarding"],
                    af_prt: ["af_prt"],
                    af_r: ["af_r"],
                    af_ref: ["af_ref"],
                    af_siteid: ["af_siteid"],
                    af_sub_siteid: ["af_sub_siteid"],
                    af_viewthrough_lookback: ["af_viewthrough_lookback"],
                    af_web_dp: ["af_web_dp"],
                    af_android_url: ["af_android_url"],
                    af_ios_url: ["af_ios_url"],
                    clickid: ["clickid"],
                    af_reengagement_window: ["af_reengagement_window"],
                    is_incentivized: ["is_incentivized"],
                    is_retargeting: ["is_retargeting"]
                },
                W = ["af_sub1", "af_adset"],
                B = e => Object.entries(R).reduce((t, n) => {
                    let [r, i] = n, o = i.find(t => void 0 !== e[t]);
                    if (o) {
                        let n = e[o];
                        return { ...t,
                            [r]: Array.isArray(n) ? n[0] : n
                        }
                    }
                    return t
                }, {}),
                j = e => {
                    let {
                        channel: t,
                        campaign: n,
                        data: r
                    } = e, {
                        $deeplink_path: i,
                        $android_url: o,
                        $ios_url: a,
                        $desktop_url: l
                    } = null != r ? r : {};
                    return { ...t && {
                            af_channel: t
                        },
                        ...n && {
                            c: n
                        },
                        ...i && {
                            af_dp: i
                        },
                        ...l && {
                            af_web_dp: l
                        },
                        ...o && {
                            af_android_url: o
                        },
                        ...a && {
                            af_ios_url: a
                        },
                        af_force_deeplink: "true"
                    }
                },
                O = (e, t, n) => {
                    if ("Web" === t) return {
                        af_web_dp: e,
                        af_android_url: e,
                        af_ios_url: e
                    };
                    let r = "Business" === n ? "revolut-business://app" : (0, p.gP)(e);
                    return {
                        af_dp: r
                    }
                },
                P = function(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = arguments.length > 4 ? arguments[4] : void 0;
                    return { ...(0, u.Q8)({
                            pid: S.BO,
                            ...I.current,
                            ...O(e, t, n),
                            ...j(r),
                            ..."Web" === t && k.parse(window.location.search),
                            af_sub1: JSON.stringify(i)
                        }, (e, t) => W.includes(e) ? encodeURIComponent(t) : t)
                    }
                },
                M = (e, t) => JSON.stringify({ ...e,
                    type: t
                }),
                D = (e, t, n) => {
                    if (!I.current) return e;
                    let r = k.stringify(n);
                    return "".concat(S.fo[t], "/").concat(S.Fv[t], "/?").concat(r)
                },
                F = async (e, t, n, r) => I.current ? "SMS" === t ? (0, x.In)("/api/appsflyer/create-link/", {
                    method: "post",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(r)
                }) : D(e, n, r) : e,
                G = (e, t) => {
                    if ("Retail" === t) {
                        var n;
                        switch (null === (n = I.current) || void 0 === n ? void 0 : n.af_channel) {
                            case "website_direct":
                                return S.SM.Direct;
                            case "website_organic":
                                return S.SM.Organic;
                            case "website_referral":
                                return S.SM.Referral
                        }
                    }
                    return e
                },
                I = {
                    current: void 0
                };
            var N = n(27304);
            let T = (0, a.createContext)(null),
                X = e => {
                    let {
                        children: t,
                        isAppsFlyerEnabled: n = !0,
                        isGoogleEnabled: r = !0
                    } = e, i = (0, l.useRouter)(), d = function() {
                        let {
                            isEnabled: e = !0,
                            isCacheEnabled: t = !0
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = (0, a.useRef)(!1), [r, i] = (0, a.useState)("unknown"), {
                            isAnalyticsEnabled: o
                        } = (0, c.uz)(), {
                            fetchLink: l
                        } = function() {
                            let {
                                isCacheEnabled: e = !0
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, a.useRef)(A()), n = (0, a.useCallback)((n, r, i) => {
                                if (!e) return r();
                                if (Boolean(t.current[n])) return t.current[n];
                                let o = r();
                                return t.current[n] = new Promise(async e => {
                                    try {
                                        let t = await o;
                                        e(t)
                                    } catch (t) {
                                        e(i())
                                    }
                                }), o.then(e => {
                                    U({ ...A(),
                                        [n]: e
                                    })
                                }).catch(() => {}), t.current[n]
                            }, [e]);
                            return {
                                fetchLink: n
                            }
                        }({
                            isCacheEnabled: t
                        }), [u, s] = (0, g.g)(), {
                            channel: d,
                            landingPageUrl: f,
                            pid: v,
                            ..._
                        } = u, m = () => {
                            throw Error("trackPage() not implemented for useAppsFlyer")
                        }, h = () => {
                            throw Error("trackLink() not implemented for useAppsFlyer")
                        }, w = () => {
                            throw Error("trackEvent() not implemented for useAppsFlyer")
                        };
                        (0, a.useEffect)(() => {
                            "unknown" !== d && !n.current && e && function() {
                                n.current = !0;
                                let e = B(_),
                                    t = k.parse(window.location.search),
                                    {
                                        pid: r = v,
                                        ...o
                                    } = B(t),
                                    a = r && r !== S.BO;
                                a ? I.current = {
                                    pid: r,
                                    ...o,
                                    ...e
                                } : I.current = {
                                    pid: v || S.BO,
                                    af_channel: d
                                }, s({ ...u,
                                    ...I.current
                                }), i("success")
                            }()
                        }, [o, e, d, _, f, v, s, u]);
                        let y = (0, a.useCallback)(e => {
                                var t;
                                return {
                                    conversion_page_url: (0, p.h1)(),
                                    cookie_consent: o ? ["ads", "analytics"] : [],
                                    landing_page_url: f,
                                    qr_code: Boolean(null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.qr_code)
                                }
                            }, [o, f]),
                            b = (0, a.useCallback)((e, t) => {
                                var n, r;
                                let {
                                    type: i = "App",
                                    vertical: o = "Retail"
                                } = null !== (n = (0, p.qe)(e)) && void 0 !== n ? n : {}, a = null !== (r = null == t ? void 0 : t.type) && void 0 !== r ? r : i, l = y(t), u = P(e, a, o, t, l), c = M(u, a);
                                return {
                                    type: a,
                                    vertical: o,
                                    data: u,
                                    requestKey: c
                                }
                            }, [y]),
                            C = (0, a.useCallback)(async (t, n) => {
                                if (!e || "success" !== r) return t;
                                let {
                                    type: i,
                                    vertical: o,
                                    data: a,
                                    requestKey: u
                                } = b(t, n);
                                return l(u, () => F(t, i, o, a), () => G(t, o))
                            }, [l, b, e, r]),
                            x = (0, a.useCallback)((t, n) => {
                                if (!e || "success" !== r) return t;
                                let {
                                    vertical: i,
                                    data: o
                                } = b(t, n);
                                return D(t, i, o)
                            }, [b, e, r]);
                        return (0, a.useMemo)(() => ({
                            name: "appsflyer",
                            status: r,
                            trackPage: m,
                            trackLink: h,
                            trackEvent: w,
                            createLink: C,
                            createLinkSync: x
                        }), [C, x, r])
                    }({
                        isEnabled: n
                    }), _ = function() {
                        let {
                            isEnabled: e = !0
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = w("https://www.googletagmanager.com/gtag/js?id=".concat(y), {
                            shouldPreventLoad: !e
                        }), n = (0, a.useRef)(!1), [r, i] = (0, a.useState)("unknown"), {
                            isAnalyticsEnabled: o
                        } = (0, c.uz)(), [{
                            referrer: l
                        }] = (0, g.g)(), {
                            getResourceBlockContext: d
                        } = (0, m.EL)();
                        (0, s.S)(b), (0, a.useEffect)(() => {
                            "error" === t && i("error"), "ready" === t && l && (0, v.mf)(null == window ? void 0 : window.gtag) && window.gtag("set", "referrer", l)
                        }, [l, t]), (0, a.useEffect)(() => {
                            if (!n.current) {
                                var e;
                                window.dataLayer = null !== (e = window.dataLayer) && void 0 !== e ? e : [], (0, v.mf)(window.gtag) || (window.gtag = function() {
                                    var e;
                                    null === (e = window.dataLayer) || void 0 === e || e.push(arguments)
                                }), window.gtag("js", new Date), window.gtag("consent", "default", {
                                    ad_storage: "denied",
                                    analytics_storage: "denied"
                                }), window.gtag("config", y, {
                                    debug_mode: !0,
                                    send_page_view: !1,
                                    custom_map: {
                                        dimension1: "vertical",
                                        dimension2: "component_name"
                                    }
                                });
                                let t = o ? "granted" : "denied";
                                window.gtag("consent", "update", {
                                    ad_storage: t,
                                    analytics_storage: t
                                }), i("success"), n.current = !0
                            }
                        }, [o]);
                        let _ = (e, t) => {
                                (0, v.mf)(null == window ? void 0 : window.gtag) && window.gtag("config", y, {
                                    page_title: t,
                                    page_location: e
                                })
                            },
                            h = (0, a.useCallback)((e, t, n) => {
                                if (t) {
                                    C(t);
                                    return
                                }
                                let r = null == e ? void 0 : e.currentTarget;
                                if ((null == n ? void 0 : n.type) === f._i.External && r) {
                                    let e = (0, u.h5)(r),
                                        {
                                            component_name: t
                                        } = d(e),
                                        i = function(e, t) {
                                            if (e.startsWith(p.li.BusinessContactSales)) return {
                                                action: "ContactSales_Click",
                                                component_name: t,
                                                vertical: "Business"
                                            };
                                            switch (e) {
                                                case p.li.RetailGetTheApp:
                                                case p.li.RetailOpenApp:
                                                    return {
                                                        action: "GetApp_Click",
                                                        component_name: t,
                                                        vertical: "Retail"
                                                    };
                                                case p.li.RetailWebAppLogin:
                                                    return {
                                                        action: "Login_Click",
                                                        component_name: t,
                                                        vertical: "Retail"
                                                    };
                                                case p.li.BusinessGetTheApp:
                                                    return {
                                                        action: "GetApp_Click",
                                                        component_name: t,
                                                        vertical: "Business"
                                                    };
                                                case p.li.BusinessWebAppLogin:
                                                    return {
                                                        action: "Login_Click",
                                                        component_name: t,
                                                        vertical: "Business"
                                                    };
                                                case p.li.BusinessWebAppSignUp:
                                                    return {
                                                        action: "WebSignup_Click",
                                                        component_name: t,
                                                        vertical: "Business"
                                                    };
                                                default:
                                                    return
                                            }
                                        }(n.uri, t);
                                    i && C(i)
                                }
                            }, [d]),
                            k = e => {
                                C(e)
                            },
                            S = async e => Promise.resolve(e),
                            x = e => e;
                        return (0, a.useMemo)(() => ({
                            name: "google",
                            status: r,
                            trackPage: _,
                            trackLink: h,
                            trackEvent: k,
                            createLink: S,
                            createLinkSync: x
                        }), [r, h])
                    }({
                        isEnabled: r
                    });
                    (0, N.M)();
                    let h = (0, a.useCallback)(e => {
                            _.trackEvent(e)
                        }, [_]),
                        x = (0, a.useCallback)((e, t, n) => {
                            _.trackLink(e, t, n)
                        }, [_]),
                        E = (0, a.useCallback)(() => {
                            _.trackPage(window.location.toString(), document.title)
                        }, [_]),
                        L = (0, a.useMemo)(() => d, [d]);
                    return (0, a.useEffect)(() => {
                        E()
                    }, []), (0, a.useEffect)(() => {
                        let e = () => {
                            E()
                        };
                        return i.events.on("routeChangeComplete", e), () => {
                            i.events.off("routeChangeComplete", e)
                        }
                    }, [i.events, E]), (0, o.jsx)(T.Provider, {
                        value: {
                            trackPage: E,
                            trackLink: x,
                            trackEvent: h,
                            linkContext: L
                        },
                        children: t
                    })
                };

            function z() {
                let e = (0, a.useContext)(T);
                if (null === e) throw Error("`useAnalytics` is accessible in `AnalyticsContextProvider` component only");
                let {
                    trackPage: t,
                    trackLink: n,
                    trackEvent: r,
                    linkContext: i
                } = e;
                return {
                    trackPage: t,
                    trackLink: n,
                    trackEvent: r,
                    linkContext: i
                }
            }

            function Z(e, t) {
                var n, r;
                let {
                    linkContext: i
                } = z(), [o, l] = (0, a.useState)(e);
                return (0, a.useEffect)(() => {
                    null == i || i.createLink(e, t).then(e => {
                        l(e)
                    }).catch(u.ZT)
                }, [t, i, e]), {
                    link: o,
                    name: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : "unknown",
                    status: null !== (r = null == i ? void 0 : i.status) && void 0 !== r ? r : "unknown"
                }
            }
        },
        42554: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return c
                }
            });
            var r = n(67294),
                i = n(31955),
                o = n(74925),
                a = n(52805);
            let {
                publicRuntimeConfig: l
            } = (0, o.i)(), u = {
                domain: ".".concat(l.websiteDomain)
            };

            function c(e) {
                let {
                    isAnalyticsEnabled: t
                } = (0, a.uz)();
                (0, r.useEffect)(() => {
                    t || null == e || e.forEach(e => i.Z.remove(e, u))
                }, [t, e])
            }
        },
        66005: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return f
                },
                g: function() {
                    return g
                }
            });
            var r = n(67294),
                i = n(17563),
                o = n(78009),
                a = n(73220),
                l = n(81482),
                u = n(28998),
                c = n(34254);
            let s = e => e.replace(/^(www\.)/, "").split(".")[0],
                d = {
                    channel: "unknown",
                    pid: o.BO
                },
                f = ["utm_id", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
                p = e => e && (0, u.sz)(e) ? "website_organic" : e && "www.revolut.com" !== e && "help.revolut.com" !== e ? "website_referral" : "website_direct",
                v = (e, t) => t && "website_organic" === e ? s(t) : "website_referral" === e ? t : void 0,
                _ = () => {
                    let e = !(0, c.yF)(),
                        t = e ? "".concat(window.location.origin).concat(window.location.pathname) : void 0,
                        n = e ? document.referrer : void 0,
                        r = e && document.referrer ? new URL(document.referrer).hostname : void 0,
                        o = e ? i.parse(window.location.search, {
                            arrayFormat: "index"
                        }) : {},
                        a = Object.keys(o).some(e => f.includes(e)),
                        l = p(r),
                        u = v(l, r);
                    return {
                        channel: l,
                        landingPageUrl: t,
                        ...n && "website_direct" !== l && {
                            referrer: n
                        },
                        ...u && {
                            source: u
                        },
                        urlQuery: i.stringify(a ? o : { ...o,
                            channel: l
                        })
                    }
                },
                g = () => {
                    let [e, t] = (0, l.Xs)(a.UQ.WebsiteSession, d);
                    return (0, r.useEffect)(() => {
                        (null == e ? void 0 : e.channel) === "unknown" && t(_())
                    }, [e, t]), [e, t]
                }
        },
        27304: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return d
                },
                w: function() {
                    return s
                }
            });
            var r = n(67294),
                i = n(17563),
                o = n(73220),
                a = n(42554),
                l = n(66005),
                u = n(85295),
                c = n(52805);

            function s(e) {
                if (e) try {
                    return JSON.parse(e)
                } catch (e) {
                    return
                }
            }

            function d() {
                (0, a.S)([o.cn.CareersAnalytics]);
                let {
                    isAnalyticsEnabled: e
                } = (0, c.uz)(), [{
                    urlQuery: t,
                    referrer: n
                }] = (0, l.g)(), [d, f] = (0, u.B)(o.cn.CareersAnalytics), p = (0, r.useMemo)(() => s(d), [d]), v = (0, r.useMemo)(() => new Date().toISOString(), []);
                (0, r.useEffect)(() => {
                    if (!e) return;
                    let r = i.parse(t || ""),
                        o = Object.fromEntries(Object.entries(r).filter(e => {
                            let [t] = e;
                            return l.Y.includes(t)
                        })),
                        a = 0 !== Object.keys(o).length;
                    if (!a && (!n || Boolean(null == p ? void 0 : p.utm))) return;
                    let u = {
                        referrer: n,
                        utm: a ? { ...o,
                            date: v
                        } : void 0
                    };
                    f(JSON.stringify(u))
                }, [e, t, n, f, null == p ? void 0 : p.utm, v])
            }
        },
        52805: function(e, t, n) {
            n.d(t, {
                i1: function() {
                    return p
                },
                uz: function() {
                    return f
                }
            });
            var r = n(85893),
                i = n(67294),
                o = n(74925),
                a = n(28998),
                l = n(34254),
                u = n(85295),
                c = n(73220);
            let {
                publicRuntimeConfig: s
            } = (0, o.i)(), d = (0, i.createContext)(null);

            function f() {
                let e = (0, i.useContext)(d);
                if (null === e) throw Error("`useCookieConsentContext` is accessible in `CookieConsentProvider` component only");
                return e
            }
            let p = e => {
                let {
                    children: t
                } = e, [n, o] = (0, u.B)(c.cn.CookieBannerClosed, a.uZ.FALSE), [f, p] = (0, u.B)(c.cn.CookieAnalyticsEnabled, a.uZ.FALSE), [v, _] = (0, i.useState)(() => !!s.isProdContent && f !== a.uZ.FALSE && f === a.uZ.TRUE), [g, m] = (0, i.useState)(() => n === a.uZ.TRUE);
                return (0, i.useEffect)(() => {
                    p(v ? a.uZ.TRUE : a.uZ.FALSE, {
                        expires: 180,
                        sameSite: l.DL || s.isProduction ? "Lax" : "None"
                    })
                }, [v, p]), (0, i.useEffect)(() => {
                    o(g ? a.uZ.TRUE : a.uZ.FALSE, {
                        expires: 180,
                        sameSite: l.DL || s.isProduction ? "Lax" : "None"
                    })
                }, [g, o]), (0, r.jsx)(d.Provider, {
                    value: {
                        isAnalyticsEnabled: v,
                        isBannerDisplayed: g,
                        setIsAnalyticsEnabled: _,
                        setIsBannerDisplayed: m
                    },
                    children: t
                })
            }
        },
        7670: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return l
                }
            });
            var r = n(74925),
                i = n(29867);
            let {
                publicRuntimeConfig: o
            } = (0, r.i)();

            function a(e) {
                let {
                    src: t,
                    width: n,
                    quality: r = 75
                } = e;
                return "/_next/image-asset/w:".concat(n, "/q:").concat(r > 80 ? 90 : 75, "/").concat(encodeURIComponent(t))
            }
            let l = () => {
                let e = (0, i.U)();
                return e ? e => {
                    let {
                        src: t,
                        width: n,
                        quality: r = 75
                    } = e;
                    return "https://".concat(o.websiteDomain, "/_next/image?url=").concat(encodeURIComponent(t), "&w=").concat(n, "&q=").concat(r)
                } : a
            }
        },
        68078: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return f
                },
                Yt: function() {
                    return p
                },
                ZN: function() {
                    return v
                }
            });
            var r = n(85893),
                i = n(67294),
                o = n(11163),
                a = n(4842),
                l = n(23813),
                u = n(86853),
                c = n(56435),
                s = n(74183);
            let d = (0, i.createContext)(void 0),
                f = e => {
                    let {
                        children: t,
                        ...n
                    } = e, c = function(e) {
                        let {
                            locationId: t,
                            locations: n,
                            legalLocations: r
                        } = e, {
                            sitemapLocationsMap: c
                        } = (0, s.j)(), {
                            locale: d
                        } = (0, o.useRouter)();
                        return (0, i.useMemo)(() => {
                            var e;
                            let {
                                language: i
                            } = (0, u.i4)(d), o = new Map(Object.entries(r || {})), s = Object.values(n || {}).reduce((e, t) => ({ ...e,
                                [t.id]: t
                            }), {}), f = new Map(Object.entries(s)), p = e => {
                                var t;
                                return v(d)("legal", null === (t = o.get(e)) || void 0 === t ? void 0 : t.url)
                            }, _ = e => v(d)("legal", e), g = e => {
                                var t;
                                let {
                                    href: n
                                } = null !== (t = h(e)) && void 0 !== t ? t : {};
                                return null != n ? n : "/"
                            }, m = (e, t) => {
                                let n = w(e),
                                    r = n && n.type === a._i.Variant ? (0, l.bg)(n).replace("{variant}", t).replace(/\/\//g, "/") : void 0;
                                return null != r ? r : "/"
                            }, h = function(e) {
                                var t, n, r, o, u;
                                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                                    v = f.get(e);
                                if ((null == v ? void 0 : v.type) === a._i.Variant) return;
                                let _ = null !== (r = null === (t = c.get(e)) || void 0 === t ? void 0 : t.scope) && void 0 !== r ? r : [],
                                    g = null !== (u = null !== (o = null === (n = null == v ? void 0 : v.content.title.localised) || void 0 === n ? void 0 : n[s]) && void 0 !== o ? o : null == v ? void 0 : v.content.title.value) && void 0 !== u ? u : "",
                                    m = null == v ? void 0 : v.content.title.value;
                                switch (null == v ? void 0 : v.type) {
                                    case a._i.Internal:
                                        {
                                            let {
                                                directory: e,
                                                slug: t
                                            } = v.content;
                                            return {
                                                type: v.type,
                                                scope: _,
                                                title: g,
                                                unlocalisedValue: m,
                                                href: (0, l.E8)(e, t),
                                                locale: d,
                                                prefetch: !1
                                            }
                                        }
                                    case a._i.External:
                                        return {
                                            type: v.type,
                                            scope: _,
                                            title: g,
                                            unlocalisedValue: m,
                                            href: v.content.uri,
                                            prefetch: !1
                                        };
                                    case a._i.Legal:
                                        return {
                                            type: v.type,
                                            scope: _,
                                            title: g,
                                            unlocalisedValue: m,
                                            locale: d,
                                            href: p(v.content.legalDocumentId),
                                            prefetch: !1
                                        };
                                    case a._i.Section:
                                        return {
                                            type: v.type,
                                            scope: _,
                                            title: g,
                                            unlocalisedValue: m,
                                            locale: d,
                                            href: (0, l.E8)(),
                                            prefetch: !1
                                        };
                                    default:
                                        return
                                }
                            }, w = e => f.get(e), y = e => {
                                var t, n, r;
                                if (!e) return;
                                let o = f.get(e);
                                if ((null == o ? void 0 : o.type) === a._i.Variant) return;
                                let l = null == o ? void 0 : null === (t = o.content) || void 0 === t ? void 0 : t.title;
                                return null !== (r = i && (null == l ? void 0 : null === (n = l.localised) || void 0 === n ? void 0 : n[i])) && void 0 !== r ? r : null == l ? void 0 : l.value
                            }, b = e => {
                                var t, n;
                                let r = f.get(e);
                                if (r) return r.type === a._i.External ? {
                                    type: r.type,
                                    uri: null === (t = r.content) || void 0 === t ? void 0 : t.uri
                                } : r.type === a._i.Legal ? {
                                    type: r.type,
                                    legalDocumentId: null === (n = r.content) || void 0 === n ? void 0 : n.legalDocumentId
                                } : {
                                    type: a._i.Internal,
                                    locationId: e
                                }
                            }, C = t => null !== (e = (0, l.dI)(t, Array.from(f.values()))) && void 0 !== e ? e : [];
                            return {
                                locationId: t,
                                getLocation: w,
                                getLocationsByPath: C,
                                getLocationProps: h,
                                getLocationTitle: y,
                                getLocationLink: b,
                                getLegalDocumentHref: p,
                                getLegalSectionHref: _,
                                getInternalHref: g,
                                getVariantHref: m
                            }
                        }, [t, n, r, c, d])
                    }(n);
                    return (0, r.jsx)(d.Provider, {
                        value: c,
                        children: t
                    })
                };

            function p() {
                let e = (0, i.useContext)(d);
                if (void 0 === e) throw Error("You can access `useLocationsContext` only inside `LocationsContext` component");
                return e
            }
            let v = e => {
                let t = e !== c.ZW && e;
                return function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return (0, l.E8)(t, ...n)
                }
            }
        },
        40126: function(e, t, n) {
            n.d(t, {
                EL: function() {
                    return u
                },
                T4: function() {
                    return l
                },
                cD: function() {
                    return d
                },
                im: function() {
                    return a
                }
            });
            var r = n(85893),
                i = n(67294),
                o = n(18754);
            let a = (0, i.createContext)(void 0),
                l = {
                    context: o.eK.Unknown,
                    component_name: "unknown",
                    position: 0
                };

            function u() {
                let e = (0, i.useContext)(a);
                if (null === e) throw Error("You can access `usePageBlockContext` only inside `PageBlockContext` component");
                return {
                    getResourceBlockContext: (0, i.useCallback)(t => t && (null == e ? void 0 : e[t]) || l, [e])
                }
            }
            let c = (e, t) => e.reduce((e, n, r) => (e[n.id] = {
                    component_name: n.type,
                    context: t,
                    position: r
                }, e), {}),
                s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return {
                        "get-the-app": {
                            component_name: "get-the-app",
                            context: o.eK.Body,
                            position: 0
                        },
                        "signup-button": {
                            component_name: "signup-button",
                            context: o.eK.Nav,
                            position: 0
                        },
                        ...c(e, o.eK.Body),
                        ...c(t, o.eK.Footer)
                    }
                },
                d = e => {
                    let {
                        children: t,
                        pageBlocks: n = [],
                        footerBlocks: i = []
                    } = e, o = s(n, i);
                    return (0, r.jsx)(a.Provider, {
                        value: o,
                        children: t
                    })
                }
        },
        44017: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return l
                },
                d: function() {
                    return a
                }
            });
            var r = n(85893),
                i = n(67294);
            let o = (0, i.createContext)(void 0),
                a = e => {
                    let {
                        children: t,
                        pageStyle: n
                    } = e;
                    return (0, r.jsx)(o.Provider, {
                        value: n,
                        children: t
                    })
                };

            function l() {
                let e = (0, i.useContext)(o);
                return (0, i.useMemo)(() => null != e ? e : {}, [e])
            }
        },
        81482: function(e, t, n) {
            n.d(t, {
                Kk: function() {
                    return a
                },
                Xs: function() {
                    return l
                },
                fe: function() {
                    return o
                }
            });
            var r = n(67294),
                i = n(34254);
            let o = (e, t) => {
                    try {
                        window.sessionStorage.setItem(e, (0, i.HD)(t) ? t : JSON.stringify(t))
                    } catch (e) {}
                    return t
                },
                a = (e, t) => {
                    try {
                        let n = window.sessionStorage.getItem(e);
                        return null !== n ? JSON.parse(n) : t
                    } catch (e) {
                        return t
                    }
                };

            function l(e, t) {
                let [n, i] = (0, r.useState)(() => a(e, t));
                return (0, r.useEffect)(() => {
                    n !== t && o(e, n)
                }, [t, e, n]), [n, i]
            }
        },
        74183: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return l
                },
                j: function() {
                    return u
                }
            });
            var r = n(85893),
                i = n(67294),
                o = n(34254);
            let a = (0, i.createContext)(void 0),
                l = e => {
                    let {
                        children: t,
                        sitemap: n
                    } = e, l = (0, i.useMemo)(() => {
                        let e = new Map(Object.entries((null == n ? void 0 : n.locations) || {})),
                            t = t => e.get(t),
                            r = t => Array.from(e.values()).filter(e => t.every(t => e.scope.includes(t))),
                            i = e => {
                                if (e) {
                                    var n;
                                    let r = (null === (n = t(e)) || void 0 === n ? void 0 : n.items) || [];
                                    return r.filter(e => {
                                        var n;
                                        return null === (n = t(e)) || void 0 === n ? void 0 : n.locationId
                                    }).map(e => t(e)).filter(o.fQ)
                                }
                                return []
                            },
                            a = () => i(null == n ? void 0 : n.index);
                        return {
                            sitemapLocationsMap: e,
                            indexLocationId: null == n ? void 0 : n.index,
                            getSitemapLocation: t,
                            getSitemapLocationsByScope: r,
                            getSitemapLocationsByParentId: i,
                            getSitemapIndexLocations: a
                        }
                    }, [n]);
                    return (0, r.jsx)(a.Provider, {
                        value: l,
                        children: t
                    })
                };

            function u() {
                let e = (0, i.useContext)(a);
                if (void 0 === e) throw Error("You can access `useSitemapContext` only inside `SitemapContext` component");
                return e
            }
        },
        87559: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return l
                },
                y: function() {
                    return a
                }
            });
            var r = n(67294),
                i = n(76804),
                o = n(29867);
            let a = (0, r.createContext)(void 0);

            function l() {
                let e = function() {
                        let e = (0, r.useContext)(a);
                        if (null === e) throw Error("You can access `useTranslationsContext` only inside `TranslationsContext` component");
                        return e
                    }(),
                    t = (0, o.U)();
                return (0, r.useCallback)(n => {
                    var r;
                    return !e || e[n] || t || (0, i.D)("translations", Error("no translation for key ".concat(n))), null !== (r = null == e ? void 0 : e[n]) && void 0 !== r ? r : ""
                }, [e, t])
            }
        },
        78009: function(e, t, n) {
            var r, i;
            n.d(t, {
                BO: function() {
                    return o
                },
                Fv: function() {
                    return l
                },
                SM: function() {
                    return r
                },
                fo: function() {
                    return a
                }
            });
            let o = "website",
                a = {
                    Business: "https://revolut-business.onelink.me",
                    Retail: "https://revolut.onelink.me",
                    Under18: "https://revolut.onelink.me"
                },
                l = {
                    Business: "v77G",
                    Retail: "E528",
                    Under18: "E528"
                };
            (i = r || (r = {})).Direct = "https://revolut.onelink.me/E528/linkd", i.Organic = "https://revolut.onelink.me/E528/linko", i.Referral = "https://revolut.onelink.me/E528/linkr"
        },
        68328: function(e, t, n) {
            n.d(t, {
                KL: function() {
                    return p
                },
                R0: function() {
                    return g
                },
                gP: function() {
                    return h
                },
                h1: function() {
                    return m
                },
                li: function() {
                    return f
                },
                qe: function() {
                    return _
                }
            });
            var r = n(74925);
            let {
                publicRuntimeConfig: {
                    websiteDomain: i,
                    retailAppStoreUrl: o,
                    retailGooglePlayUrl: a,
                    retailHuaweiStoreUrl: l,
                    businessAppStoreUrl: u,
                    businessGooglePlayUrl: c,
                    under18AppStoreUrl: s,
                    under18GooglePlayUrl: d
                }
            } = (0, r.i)(), f = {
                RetailOpenApp: "https://".concat(i, "/app"),
                RetailGetTheApp: "https://".concat(i, "/get"),
                RevolutUnder18GetTheApp: "https://".concat(i, "/get-revolut-under-18"),
                RetailWebAppLogin: "https://app.".concat(i, "/start"),
                RetailWebApp: "https://app.".concat(i),
                BusinessWebApp: "https://business.".concat(i),
                BusinessGetTheApp: "https://".concat(i, "/getbusinessapp"),
                BusinessWebAppLogin: "https://business.".concat(i, "/signin"),
                BusinessWebAppSignUp: "https://business.".concat(i, "/signup"),
                BusinessContactSales: "https://growth.revolut.com/",
                QRCodeLink: "https://".concat(i, "/qr-code-link")
            }, p = {
                AppStore: o,
                GooglePlay: a,
                HuaweiStore: l
            }, v = (e, t) => {
                try {
                    let n = new URL(e),
                        r = new URL(t);
                    return n.origin === r.origin && n.pathname === r.pathname && n.searchParams.get("id") === r.searchParams.get("id")
                } catch (e) {
                    return !1
                }
            }, _ = e => {
                if (!e) return null;
                try {
                    let {
                        hostname: t,
                        pathname: n
                    } = new URL(e), r = n.replace(/\/$/, ""), i = t.replace(/.?revolut.(com|codes)/, "");
                    switch (i) {
                        case "":
                        case "app":
                        case "www":
                            if ("app" === i && "/start" === r || /^\/app-form\/\.*/.test(r) || "/careers" === r) return null;
                            if ("/getbusinessapp" === r) return {
                                type: "Web",
                                vertical: "Business"
                            };
                            if ("/getjunior" === r || "/get-revolut-under-18" === r) return {
                                type: "Web",
                                vertical: "Under18"
                            };
                            return {
                                type: "App",
                                vertical: "Retail"
                            };
                        case "growth":
                        case "business":
                            return {
                                type: "Web",
                                vertical: "Business"
                            }
                    }
                } catch (e) {}
                return v(o, e) || v(a, e) || v(l, e) ? {
                    type: "Web",
                    vertical: "Retail"
                } : v(s, e) || v(d, e) ? {
                    type: "Web",
                    vertical: "Under18"
                } : v(u, e) || v(c, e) ? {
                    type: "Web",
                    vertical: "Business"
                } : null
            }, g = e => /^https?:\/\/player\.vimeo\.com\/video\/\d+/.test(String(e)), m = () => {
                let {
                    origin: e,
                    pathname: t
                } = window.location;
                return "".concat(e).concat(t.split("?")[0])
            }, h = e => {
                try {
                    let {
                        hostname: t,
                        pathname: n
                    } = new URL(e), r = n.replace(/\/$/, ""), i = t.replace(/.?revolut.(com|codes)/, ""), o = /^\/app($|\/.*$)/.test(r);
                    if (("" === i || "www" === i) && o) return "revolut:/".concat(r)
                } catch (e) {}
                return "revolut://app"
            }
        },
        23813: function(e, t, n) {
            n.d(t, {
                E8: function() {
                    return s
                },
                dI: function() {
                    return c
                },
                H$: function() {
                    return d
                },
                bg: function() {
                    return u
                },
                Ty: function() {
                    return f
                }
            });
            var r = n(17563),
                i = n(4842),
                o = n(49019);
            let a = {},
                l = e => t => [e.content.directory, t.toLowerCase()].filter(Boolean).join("/"),
                u = e => l(e)(e.content.slug),
                c = (e, t) => {
                    let n = [];
                    for (let l of t) {
                        var r, o;
                        if (l.type === i._i.Internal && u(l) === e) return [l];
                        if (l.type === i._i.Variant && (r = u(l), o = e, (a[r] || (a[r] = RegExp("^".concat(r.replace("{variant}", "([a-z/\\d-]+?)"), "$"), "i")), a[r]).test(o))) {
                            let e = !n.length || l.content.slug.length > n[0].content.slug.length,
                                t = n.length && l.content.slug === n[0].content.slug;
                            e ? n = [l] : t && n.push(l)
                        }
                    }
                    return n
                },
                s = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return "/".concat(t.filter(Boolean).filter(e => "/" !== e).concat("/").join("/")).replace(/\/\/+/g, "/")
                },
                d = e => {
                    if (e.indexOf("://") > 0 || e.startsWith("//")) return e;
                    let t = e.split("/").includes(i.WA.Help);
                    if (t) return e;
                    let n = new URL(e, "https://".concat(o.Em));
                    return n.toString()
                },
                f = (e, t, n) => {
                    let {
                        slug: i,
                        ...o
                    } = t || {}, a = r.stringify({ ...o,
                        ...n
                    }), {
                        url: l
                    } = r.parseUrl(e);
                    return "".concat(l).concat(a ? "?".concat(a) : "")
                }
        },
        76804: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return i
                }
            });
            var r = n(64487);

            function i(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                r.$e(i => {
                    i.clear(), i.setLevel("warning"), i.setTag("component", e), n && r.v(e, { ...n
                    }), r.Tb(t)
                })
            }
        }
    }
]);