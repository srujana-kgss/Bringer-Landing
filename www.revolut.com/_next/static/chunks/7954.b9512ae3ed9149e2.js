"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7954], {
        17954: function(t, e, i) {
            i.d(e, {
                D: function() {
                    return tC
                }
            });
            var a = i(85893),
                n = i(67294),
                r = i(52367),
                s = i(56607),
                o = i(21697),
                l = i(26370),
                c = i(22674),
                d = i(8954),
                u = i(37903),
                h = i(15059),
                g = i(2297),
                w = i(20010),
                p = i(14141),
                m = i(74925),
                f = i(87559),
                x = i(38556),
                v = i(81055),
                y = i(16970),
                C = i(35758),
                b = i(83755),
                k = i(11163),
                j = i(1112),
                S = i(34254);
            let {
                publicRuntimeConfig: A
            } = (0, m.i)(), O = (0, p.ZP)(C.C).withConfig({
                componentId: "sc-8a988c3f-0"
            })({
                width: "auto"
            }), T = t => {
                let {
                    referralCode: e
                } = t, n = (0, f.T)(), {
                    locale: r
                } = (0, k.useRouter)(), o = (0, j.F)(), l = [r, "waitlist"].filter(S.fQ).join("/"), c = "".concat(A.websiteDomain, "/").concat(l, "?r=").concat(e), d = "https://".concat(c), g = (null == o ? void 0 : o.os.name) === "iOS", w = (null == o ? void 0 : o.os.name) === "Android", p = (g || w) && (0, S.mf)(null === i.g || void 0 === i.g ? void 0 : i.g.navigator.share);
                return p ? (0, a.jsx)(b.A, {
                    color: "accent",
                    onClick: async () => {
                        (0, S.mf)(navigator.share) && await navigator.share({
                            url: d,
                            title: n("widget.waitlist.join.the.waitlist"),
                            text: n("widget.waitlist.join.the.waitlist")
                        })
                    },
                    children: (0, a.jsxs)(u.U, {
                        align: "center",
                        space: "s-8",
                        children: [(0, a.jsx)(h.J, {
                            name: g ? "ShareIOs" : "ShareAndroid"
                        }), (0, a.jsx)(y.x, {
                            children: n("widget.waitlist.referralCode.share")
                        })]
                    })
                }) : (0, a.jsxs)(s.g, {
                    align: {
                        all: "start",
                        md: "center"
                    },
                    gap: "s-8",
                    backgroundColor: "grey-tone-2",
                    borderRadius: 12,
                    paddingY: {
                        all: "s-16",
                        xxl: "s-24"
                    },
                    paddingX: {
                        all: "s-16",
                        xxl: "s-32"
                    },
                    width: "100%",
                    children: [(0, a.jsx)(y.x, {
                        variant: "subtitle2",
                        children: n("widget.waitlist.referralCode.copy")
                    }), (0, a.jsx)(O, {
                        value: d,
                        labelButtonCopy: c,
                        children: c
                    })]
                })
            };
            var N = i(17446),
                _ = i(50464);
            let {
                publicRuntimeConfig: {
                    assetsUrl: E
                }
            } = (0, m.i)(), I = (0, p.ZP)(l.h).withConfig({
                componentId: "sc-896575a4-0"
            })({
                color: c.W.color.grey50,
                transition: c.W.transition.text,
                ":hover": {
                    color: c.W.color.accent
                }
            }), D = t => {
                let {
                    onSubmit: e
                } = t, i = (0, f.T)(), {
                    countryCode: n,
                    referralCode: r,
                    step: s,
                    referralCodeSupport: l
                } = (0, N.tk)(), c = (0, x.J)(), p = new o.ZP(i(s === _.ZO.Done ? "widget.waitlist.congratulations.you.are.in.waitlist" : "widget.waitlist.already.in.waitlist")).format({
                    country: c(n)
                }), m = (0, v.o)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.Ee, {
                        alt: "",
                        maxWidth: "auto",
                        size: {
                            all: 160,
                            xxl: 208
                        },
                        src: "".concat(E, "/assets/3d-images-v2/3D194.png"),
                        srcSet: "".concat(E, "/assets/3d-images-v2/3D194@2x.png 2x, ").concat(E, "/assets/3d-images-v2/3D194@3x.png 3x")
                    }), (0, a.jsx)(y.x, {
                        use: "h2",
                        variant: "h5",
                        textAlign: {
                            all: "start",
                            md: "center"
                        },
                        width: "100%",
                        children: p
                    }), (0, a.jsx)(y.x, {
                        use: "p",
                        variant: "subtitle1",
                        textAlign: {
                            all: "start",
                            md: "center"
                        },
                        width: "100%",
                        children: i("widget.waitlist.we.will.contact.you")
                    }), r && l && (0, a.jsx)(T, {
                        referralCode: r
                    }), (0, a.jsx)(u.U, {
                        gap: "s-24",
                        children: m.map(t => {
                            let {
                                url: e,
                                icon: i,
                                name: n
                            } = t;
                            return (0, a.jsx)(I, {
                                "aria-label": n,
                                href: e,
                                rel: "noopener",
                                target: "_blank",
                                use: "a",
                                useIcon: (0, a.jsx)(h.J, {
                                    name: i,
                                    color: "inherit"
                                })
                            }, e)
                        })
                    }), (0, a.jsx)(g.L, {
                        height: "s-16"
                    }), (0, a.jsx)(w.z, {
                        variant: "black",
                        onClick: e,
                        children: i("widget.waitlist.got.it")
                    })]
                })
            };
            var P = i(3506),
                R = i(23346),
                Z = i(39880),
                W = i(34215),
                F = i(49019),
                J = i(79253),
                z = i(35402),
                G = i(95630),
                L = i(4842),
                U = i(68328),
                M = i(28998),
                V = i(30201),
                X = i(76804);
            let B = (t, e) => btoa("".concat(t, ":").concat(e)),
                Y = (t, e) => (0, X.D)("expansion-waitlist-api", t, {
                    request: e
                }),
                K = new class {
                    constructor() {
                        this.fetcher = async (t, e) => {
                            let {
                                deviceId: i,
                                token: a,
                                captchaToken: n,
                                ...r
                            } = e, s = await fetch("/api/expansion".concat(t), { ...r,
                                headers: {
                                    [V.r.DeviceId]: i,
                                    ...a && {
                                        [V.r.Authorization]: "Basic ".concat(a)
                                    },
                                    ...n && {
                                        [V.r.CaptchaToken]: n
                                    }
                                }
                            });
                            if (!s.ok) {
                                let t;
                                try {
                                    t = await s.json()
                                } catch (t) {
                                    throw Error(s.status.toString())
                                }
                                throw {
                                    statusCode: s.status,
                                    ...t
                                }
                            }
                            let o = await s.text();
                            try {
                                return JSON.parse(o)
                            } catch (t) {
                                return o
                            }
                        }, this.config = async t => this.fetcher("/config/common", {
                            deviceId: t
                        }), this.requestSmsCode = async (t, e, i) => {
                            try {
                                return await this.fetcher("/signup", {
                                    deviceId: t,
                                    captchaToken: i,
                                    method: "POST",
                                    body: JSON.stringify({
                                        phone: e
                                    })
                                }), {
                                    status: "success"
                                }
                            } catch (t) {
                                return Y(t, "/signup"), {
                                    status: "error",
                                    reason: (null == t ? void 0 : t.code) === 9105 ? "phone-is-blocked" : void 0
                                }
                            }
                        }, this.resendSmsCode = async (t, e, i) => {
                            await this.fetcher("/verification-codes/sms", {
                                deviceId: t,
                                captchaToken: i,
                                method: "POST",
                                body: JSON.stringify({
                                    scopes: ["SIGNIN"],
                                    phone: e
                                })
                            })
                        }, this.signin = async (t, e, i) => {
                            try {
                                let a = await this.fetcher("/signin", {
                                    deviceId: t,
                                    method: "POST",
                                    body: JSON.stringify({
                                        phone: e,
                                        code: i
                                    })
                                });
                                return {
                                    status: "success",
                                    data: a
                                }
                            } catch (t) {
                                return Y(t, "/signin"), {
                                    status: "error",
                                    reason: (null == t ? void 0 : t.code) === 9001 ? "code-is-invalid" : void 0
                                }
                            }
                        }, this.verificationCode = async (t, e) => {
                            if (!F.eG) try {
                                let i = await this.fetcher("/verification-codes/".concat(e), {
                                    deviceId: t
                                });
                                return i.code
                            } catch (t) {
                                return
                            }
                        }, this.waitlistStatus = async (t, e) => {
                            let {
                                userId: i,
                                token: a
                            } = e;
                            try {
                                return await this.fetcher("/waiting-list/current", {
                                    deviceId: t,
                                    token: B(i, a)
                                })
                            } catch (t) {
                                return Y(t, "/waiting-list/current"), {
                                    state: 404 === Number(t.statusCode) ? _.y_.NotFound : _.y_.Error
                                }
                            }
                        }, this.joinWaitlist = async (t, e) => {
                            let {
                                email: i,
                                country: a,
                                userId: n,
                                token: r
                            } = e;
                            try {
                                return await this.fetcher("/waiting-list/join", {
                                    method: "POST",
                                    deviceId: t,
                                    token: B(n, r),
                                    body: JSON.stringify({
                                        email: i,
                                        country: a
                                    })
                                }), {
                                    status: "success"
                                }
                            } catch (t) {
                                return Y(t, "/waiting-list/join"), {
                                    status: "error",
                                    reason: (null == t ? void 0 : t.code) === 1031 ? "email-is-used" : void 0
                                }
                            }
                        }, this.saveMarketingSettings = async (t, e) => {
                            let {
                                userId: i,
                                token: a
                            } = e;
                            try {
                                await this.fetcher("/user/current/settings", {
                                    method: "PUT",
                                    deviceId: t,
                                    token: B(i, a),
                                    body: JSON.stringify({
                                        notifications: [{
                                            id: "marketing",
                                            email: !0,
                                            push: !0
                                        }, {
                                            id: "offers",
                                            email: !0,
                                            push: !0
                                        }]
                                    })
                                })
                            } catch (t) {
                                Y(t, "/user/current/settings")
                            }
                        }
                    }
                };
            var q = i(92675);
            let Q = () => {
                    let t = (0, r.iN)();
                    return (0, n.useCallback)(e => t.show((0, a.jsx)(q.u, {
                        variant: "error",
                        children: (0, a.jsx)(q.u.Title, {
                            children: e
                        })
                    })), [t])
                },
                $ = () => {
                    let t = (0, f.T)(),
                        e = Q();
                    return (0, n.useCallback)(i => {
                        let a = t("widget.waitlist.something.went.wrong");
                        "code-is-invalid" === i && (a = t("widget.waitlist.user.information.is.incorrect")), "email-is-used" === i && (a = t("widget.waitlist.error.email.is.used")), "phone-is-blocked" === i && (a = t("widget.waitlist.error.phone.is.blocked")), e(a)
                    }, [t, e])
                };
            var H = i(92032),
                tt = i(23279),
                te = i.n(tt);
            let ti = t => {
                    let {
                        email: e
                    } = (0, N.tk)(), i = (0, N.A4)(), r = (0, f.T)(), [s, o] = (0, n.useState)(!0), l = (0, n.useCallback)(te()(t => o((0, M.vV)(t)), 1e3), []);
                    return (0, a.jsx)(H.I, {
                        label: r("widget.waitlist.email"),
                        value: e,
                        name: "email",
                        type: "email",
                        "aria-invalid": Boolean(e && !s),
                        onClear: () => i({
                            email: ""
                        }),
                        onChange: t => {
                            let e = t.currentTarget.value;
                            i({
                                email: e
                            }), l(e)
                        },
                        ...t
                    })
                },
                {
                    publicRuntimeConfig: {
                        waitlistCaptchaKey: ta,
                        isHCaptchaEnabled: tn
                    }
                } = (0, m.i)(),
                tr = {
                    legalDocumentId: "fbfd9742-4739-4c5c-b1ae-1a610458f2c6",
                    type: L._i.Legal
                },
                ts = (0, p.ZP)(J.r).withConfig({
                    componentId: "sc-40cb6a4d-0"
                })({
                    textDecoration: "underline",
                    transition: c.W.transition.text,
                    "&:hover": {
                        color: c.W.color.accent
                    }
                }),
                to = () => {
                    let t = (0, f.T)(),
                        [e, i] = (0, n.useState)({
                            status: "idle"
                        }),
                        {
                            countryCode: r,
                            deviceId: l,
                            email: c,
                            isMarketingCommsAccepted: d,
                            phoneCountryCode: h,
                            phoneNumber: p = "",
                            isPrivacyPolicyAccepted: m
                        } = (0, N.tk)(),
                        v = "loading" === e.status,
                        {
                            trackEvent: C
                        } = (0, z.z$)(),
                        {
                            setPhone: b,
                            setPhoneCode: k
                        } = (0, G.z)(),
                        j = (0, N.A4)(),
                        S = $(),
                        A = (0, x.J)(),
                        O = (0, n.useCallback)(async t => {
                            let {
                                phone: e,
                                captchaToken: i
                            } = t, a = await K.requestSmsCode(l, e, i);
                            if ("error" === a.status) {
                                var n;
                                return C({
                                    action: "Waitlist_Fail",
                                    component_name: "expansion-waitlist-widget",
                                    vertical: "Retail",
                                    payload: {
                                        error: null !== (n = a.reason) && void 0 !== n ? n : "error"
                                    }
                                }), S(a.reason), "idle"
                            }
                            if (b(p), k(h), j({
                                    captchaToken: i,
                                    step: _.ZO.Otp,
                                    otpCode: ""
                                }), C({
                                    action: "Waitlist_Enter",
                                    component_name: "expansion-waitlist-widget",
                                    vertical: "Retail"
                                }), !F.eG) {
                                let t = await K.verificationCode(l, e);
                                j({
                                    otpCode: t
                                })
                            }
                            return "idle"
                        }, [l, p, h, C, b, k, j, S]),
                        T = t => {
                            j({
                                phoneCountryCode: t
                            }), i({
                                status: "idle"
                            })
                        },
                        E = t => {
                            j({
                                phoneNumber: t
                            }), i({
                                status: "idle"
                            })
                        },
                        {
                            isPhoneValid: I,
                            buttonEnabled: D,
                            captchaRef: J,
                            handleCaptchaLoad: L,
                            handleCountryCodeChange: V,
                            handleSubmit: X
                        } = (0, R.e)({
                            countryCode: h,
                            setCountryCode: T,
                            link: U.li.RetailOpenApp,
                            phoneNumber: p,
                            setFormState: i,
                            formState: e,
                            requestFunc: O
                        }),
                        B = (0, n.useRef)(null),
                        Y = new o.ZP(t("widget.waitlist.revolut.privacy.policy.agreement")).format({
                            link: t => (0, a.jsx)(ts, {
                                target: "_blank",
                                value: tr,
                                children: t.join(" ")
                            }, "link")
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(y.x, {
                            use: "h2",
                            variant: "h3",
                            textAlign: {
                                all: "start",
                                md: "center"
                            },
                            width: "100%",
                            children: new o.ZP(t("widget.waitlist.join.the.waitlist")).format({
                                country: A(r)
                            })
                        }), (0, a.jsx)(y.x, {
                            use: "p",
                            variant: "subtitle1",
                            textAlign: {
                                all: "start",
                                md: "center"
                            },
                            width: "100%",
                            children: t("widget.waitlist.user.information")
                        }), (0, a.jsxs)(s.g, {
                            id: "expansion-waitlist-form",
                            onSubmit: X,
                            space: {
                                all: "s-16",
                                xxl: "s-24"
                            },
                            use: "form",
                            width: "100%",
                            children: [(0, a.jsx)(ti, {
                                disabled: v
                            }), tn && (0, a.jsx)(W.m, {
                                ref: J,
                                onLoad: L,
                                captchaKey: ta
                            }), (0, a.jsx)(Z.s, {
                                ref: B,
                                countryCode: h,
                                onCountryCodeChange: V,
                                phoneNumber: p,
                                onPhoneNumberChange: E,
                                disabled: "loading" === e.status,
                                invalid: Boolean(p && !I)
                            }), (0, a.jsxs)(u.U, {
                                use: "label",
                                gap: "s-16",
                                align: "center",
                                style: {
                                    cursor: "pointer"
                                },
                                children: [(0, a.jsx)(P.X, {
                                    disabled: v,
                                    "aria-label": t("widget.waitlist.revolut.privacy.policy.agreement"),
                                    checked: m,
                                    onChange: t => j({
                                        isPrivacyPolicyAccepted: t.target.checked
                                    })
                                }), (0, a.jsx)(P.X.Label, {
                                    children: Y
                                })]
                            }), (0, a.jsx)(P.X, {
                                disabled: v,
                                "aria-label": t("widget.waitlist.marketing.communicatins.agreement"),
                                checked: d,
                                onChange: t => j({
                                    isMarketingCommsAccepted: t.target.checked
                                }),
                                children: (0, a.jsx)(P.X.Label, {
                                    children: t("widget.waitlist.marketing.communicatins.agreement")
                                })
                            })]
                        }), (0, a.jsx)(g.L, {
                            height: "s-16"
                        }), (0, a.jsx)(w.z, {
                            form: "expansion-waitlist-form",
                            pending: v,
                            type: "submit",
                            variant: "black",
                            disabled: !I || !m || !(0, M.vV)(c) || v || !D,
                            onClick: X,
                            children: t("widget.waitlist.join.now")
                        })]
                    })
                };
            var tl = i(18972),
                tc = i(31072),
                td = i(87688),
                tu = i(72917),
                th = i(93512);
            let tg = t => {
                    let [e, i] = (0, n.useState)(t), a = (0, n.useCallback)(() => i(t), [t]);
                    return (0, th.Y)(() => i(e - 1), e < 0 ? null : 1e3), {
                        remainingTime: e,
                        resetRemainingTime: a
                    }
                },
                tw = t => {
                    let {
                        onClick: e
                    } = t, i = (0, f.T)(), {
                        remainingTime: r,
                        resetRemainingTime: s
                    } = tg(30), l = (0, n.useCallback)(() => {
                        e(), s()
                    }, [e, s]);
                    return r < 0 ? (0, a.jsx)(b.A, {
                        onClick: l,
                        children: i("widget.waitlist.resend.code")
                    }) : (0, a.jsx)(y.x, {
                        color: "grey-tone-50",
                        children: new o.ZP(i("widget.waitlist.resent.code.in.time")).format({
                            time: "00:".concat(r.toString().padStart(2, "0"))
                        })
                    })
                },
                tp = () => {
                    let {
                        query: t
                    } = (0, k.useRouter)();
                    return t.r
                },
                tm = (t, e) => {
                    var i;
                    let a = (0, tc.S)(t, e);
                    return null !== (i = null == a ? void 0 : a.formatInternational()) && void 0 !== i ? i : t
                },
                tf = t => {
                    let {
                        navigateToGetTheApp: e
                    } = t, i = (0, f.T)(), [r, s] = (0, n.useState)(!1), {
                        otpCode: l,
                        deviceId: c,
                        email: d,
                        countryCode: u,
                        isMarketingCommsAccepted: h,
                        captchaToken: p,
                        referralCodeSupport: m
                    } = (0, N.tk)(), x = tp(), {
                        phone: v,
                        phoneCode: C
                    } = (0, G.z)(), b = (0, N.A4)(), [k, j] = (0, n.useState)(""), {
                        trackEvent: S
                    } = (0, z.z$)(), A = "+".concat((0, td.G)(C)).concat(v), O = $(), T = (0, n.useCallback)(t => S({
                        action: "Waitlist_Submit",
                        component_name: "expansion-waitlist-widget",
                        vertical: "Retail",
                        payload: {
                            status: t
                        }
                    }), [S]), E = (0, n.useCallback)(t => {
                        S({
                            action: "Waitlist_Fail",
                            component_name: "expansion-waitlist-widget",
                            vertical: "Retail",
                            payload: {
                                error: t
                            }
                        }), O(t)
                    }, [S, O]), I = (0, n.useCallback)(async (t, e) => {
                        try {
                            if (x) {
                                let i = await (0, tu.cV)(x);
                                await (0, tu.Gv)({
                                    phone: A,
                                    referralCode: x,
                                    invitationId: i,
                                    token: B(t, e)
                                })
                            }
                        } catch (t) {
                            (0, X.D)("expansion-waitlist-referral", t)
                        }
                    }, [A, x]), D = (0, n.useCallback)(async (t, e) => {
                        try {
                            h && await K.saveMarketingSettings(c, {
                                userId: t,
                                token: e
                            });
                            let i = await K.joinWaitlist(c, {
                                email: d,
                                country: u,
                                userId: t,
                                token: e
                            });
                            if ("success" === i.status) {
                                S({
                                    action: "Waitlist_NewUserJoined",
                                    component_name: "expansion-waitlist-widget",
                                    vertical: "Retail"
                                }), T("new");
                                let i = await K.waitlistStatus(c, {
                                        userId: t,
                                        token: e
                                    }),
                                    a = null == i ? void 0 : i.referralCode;
                                m && await I(t, e), b({
                                    referralCode: a,
                                    step: _.ZO.Done
                                })
                            } else E(i.reason)
                        } catch (t) {
                            E("error")
                        }
                    }, [u, c, d, E, h, m, S, I, T, b]), P = (0, n.useCallback)(async (t, i) => {
                        let a = await K.waitlistStatus(c, {
                            userId: t,
                            token: i
                        });
                        a.state === _.y_.Active && (T("active"), e()), a.state === _.y_.Pending && (T("pending"), b({
                            step: _.ZO.Already,
                            referralCode: a.referralCode,
                            countryCode: a.country
                        })), a.state === _.y_.NotFound && await D(t, i), a.state === _.y_.Error && E("error")
                    }, [c, T, e, b, D, E]), R = (0, n.useCallback)(async t => {
                        clearTimeout(Z.current), s(!0);
                        try {
                            let i = await K.signin(c, A, t);
                            if ("error" === i.status) {
                                var e;
                                E(null !== (e = i.reason) && void 0 !== e ? e : "error");
                                return
                            }
                            let a = i.data.token.accessToken,
                                n = i.data.user.id,
                                r = i.data.user.state;
                            ("CONFIRMED" === r || "CREATED" === r) && await D(n, a), "WAITING" === r && await P(n, a)
                        } catch (t) {
                            E("error")
                        } finally {
                            s(!1)
                        }
                    }, [c, A, D, E, P]), Z = (0, n.useRef)(), W = (0, n.useCallback)(t => {
                        let e = t.trim();
                        j(e), 6 === e.length && (clearTimeout(Z.current), Z.current = setTimeout(() => R(e), 500))
                    }, [R]), J = (0, n.useCallback)(async () => {
                        if (j(""), await K.resendSmsCode(c, A, p), !F.eG) {
                            let t = await K.verificationCode(c, A);
                            b({
                                otpCode: t
                            })
                        }
                    }, [c, A, p, b]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(y.x, {
                            use: "h2",
                            variant: "h3",
                            textAlign: {
                                all: "start",
                                md: "center"
                            },
                            width: "100%",
                            children: i("widget.waitlist.verify.phone.number")
                        }), (0, a.jsx)(y.x, {
                            use: "p",
                            variant: "subtitle1",
                            textAlign: {
                                all: "start",
                                md: "center"
                            },
                            width: "100%",
                            children: new o.ZP(i("widget.waitlist.code.sent.to")).format({
                                phone: tm(A, C)
                            })
                        }), !F.eG && l && (0, a.jsx)(y.x, {
                            color: "accent",
                            onClick: () => j(l),
                            children: l
                        }), (0, a.jsx)(tl.E, {
                            "aria-label": "code-input",
                            autoFocus: !0,
                            mask: !0,
                            onChange: W,
                            otp: !0,
                            size: 6
                        }), (0, a.jsx)(tw, {
                            onClick: J
                        }), (0, a.jsx)(g.L, {
                            height: "s-16"
                        }), (0, a.jsx)(w.z, {
                            disabled: 6 !== k.length || r,
                            onClick: () => R(k),
                            pending: r,
                            variant: "black",
                            children: i("widget.waitlist.verify")
                        })]
                    })
                };
            var tx = i(59734),
                tv = i(6554);
            let ty = t => {
                    let e = (0, tv.M)(),
                        {
                            data: i
                        } = (0, tx.ZP)([e], () => K.config(e), {
                            keepPreviousData: !0
                        });
                    return (null == i ? void 0 : i["countries.supported"].includes(t)) && !(null == i ? void 0 : i["countries.waiting_list"].includes(t))
                },
                tC = t => {
                    let {
                        onClose: e,
                        navigateToGetTheApp: i
                    } = t, {
                        step: o,
                        countryCode: l
                    } = (0, N.tk)(), c = ty(l);
                    return (0, n.useEffect)(() => {
                        c && i()
                    }, [c, i]), (0, a.jsx)(r.M7, {
                        children: (0, a.jsxs)(s.g, {
                            align: {
                                all: "start",
                                md: "center"
                            },
                            marginX: {
                                all: 0,
                                md: "auto"
                            },
                            maxWidth: {
                                all: "420px",
                                xxl: "504px"
                            },
                            space: {
                                all: "s-16",
                                md: "s-24",
                                xxl: "s-32"
                            },
                            width: "100%",
                            children: [o === _.ZO.Initial && (0, a.jsx)(to, {}), o === _.ZO.Otp && (0, a.jsx)(tf, {
                                navigateToGetTheApp: i
                            }), (o === _.ZO.Done || o === _.ZO.Already) && (0, a.jsx)(D, {
                                onSubmit: e
                            })]
                        })
                    })
                }
        },
        93512: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return n
                }
            });
            var a = i(67294);
            let n = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    i = (0, a.useRef)(t);
                (0, a.useEffect)(() => {
                    i.current = t
                }, [t]), (0, a.useEffect)(() => {
                    if (null !== e) {
                        let t = () => i.current(),
                            a = setInterval(t, e);
                        return () => clearInterval(a)
                    }
                }, [e])
            }
        },
        30201: function(t, e, i) {
            var a, n;
            i.d(e, {
                r: function() {
                    return a
                }
            }), (n = a || (a = {})).BrowserApplication = "x-browser-application", n.CaptchaToken = "X-Captcha-Token", n.ClientVersion = "x-client-version", n.DeviceId = "x-device-id", n.GeoLocation = "x-client-geo-location", n.UserAgent = "user-agent", n.Authorization = "Authorization"
        },
        72917: function(t, e, i) {
            i.d(e, {
                Gv: function() {
                    return h
                },
                Qp: function() {
                    return n
                },
                cV: function() {
                    return c
                },
                cv: function() {
                    return d
                },
                gi: function() {
                    return u
                }
            });
            var a, n, r = i(64487),
                s = i(30201),
                o = i(17359);
            let l = t => {
                    let {
                        captchaToken: e,
                        token: i,
                        phone: a,
                        referralCode: n,
                        inviteId: r
                    } = t;
                    return fetch("/api/v2/invitation/accept", {
                        method: "post",
                        headers: { ...i && {
                                [s.r.Authorization]: "Basic ".concat(i)
                            },
                            ...e && {
                                [s.r.CaptchaToken]: e
                            }
                        },
                        body: JSON.stringify({
                            phone: a,
                            referralCode: n,
                            inviteId: r
                        })
                    })
                },
                c = t => (0, o.In)("/api/invitation", {
                    method: "post",
                    body: JSON.stringify({
                        referralCode: t
                    })
                });
            (a = n || (n = {})).Money = "MONEY", a.Card = "FREE_CARD_DELIVERY", a.FeatureUnlock = "FEATURE_UNLOCK", a.Campaign = "CAMPAIGN", a.Vodaphone = "VODAFONE";
            let d = async t => {
                    let e = await fetch("/api/invitation/".concat(t, "/validateCampaign"));
                    return 422 === e.status ? {
                        isExpired: !0
                    } : {
                        isExpired: !1
                    }
                },
                u = t => (0, o.In)("/api/invitation/".concat(t, "/reward")),
                h = async t => {
                    let {
                        phone: e,
                        referralCode: i,
                        invitationId: a,
                        captchaToken: n,
                        token: s
                    } = t;
                    try {
                        let t;
                        if (!i || !a || !n && !s) return "error";
                        let o = await l({
                            captchaToken: n,
                            token: s,
                            phone: e,
                            referralCode: i,
                            inviteId: a
                        });
                        if (o.ok) return "success";
                        let c = await o.text();
                        try {
                            t = JSON.parse(c)
                        } catch (t) {
                            return {
                                status: "error",
                                event: "json-parse-error"
                            }
                        }
                        if ((null == t ? void 0 : t.code) === 1105) return {
                            status: "error",
                            event: "country-not-supported"
                        };
                        if ((null == t ? void 0 : t.code) === 20038) return {
                            status: "error",
                            event: "referral-code-not-valid"
                        };
                        return r.Tb(Error("Unhandled server response for ".concat(o.url)), {
                            tags: {
                                component: "referral"
                            },
                            extra: { ...t
                            }
                        }), "error"
                    } catch (t) {
                        return r.Tb(t, {
                            tags: {
                                component: "referral"
                            }
                        }), "error"
                    }
                }
        }
    }
]);