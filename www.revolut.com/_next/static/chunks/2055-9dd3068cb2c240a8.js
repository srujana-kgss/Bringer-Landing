"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2055], {
        38695: function(e, n, t) {
            t.d(n, {
                M: function() {
                    return c
                }
            });
            var r = t(14141),
                a = t(20925),
                u = t(22674),
                i = t(65142),
                o = t(8142),
                l = t(18835).h.filter(function(e) {
                    return "size" !== e
                }),
                c = (0, r.ZP)((0, o.q)("input", {
                    blacklist: l
                })).attrs(i.J).withConfig({
                    displayName: "InputBase",
                    componentId: "rui__sc-gjs15y-0"
                })(["box-sizing:border-box;display:block;width:100%;appearance:none;font:inherit;color:inherit;border:none;background:none;border-radius:0;padding:0;text-overflow:ellipsis;text-align:left;@supports selector(:focus-visible){outline:none;}&[disabled],&:disabled,&[aria-disabled='true']{-webkit-text-fill-color:currentColor;-webkit-opacity:1;opacity:1;}&[type='button']:enabled{cursor:pointer;}::placeholder{color:", ";font:inherit;opacity:1;user-select:none;}::-webkit-search-cancel-button{display:none;}&&[type='button']{overflow:hidden;text-overflow:ellipsis;}", ""], u.W.color.greyTone20, a.H)
        },
        34089: function(e, n, t) {
            t.d(n, {
                k: function() {
                    return x
                }
            });
            var r = t(67294),
                a = {
                    MONEY: "money",
                    MONEY_FRACTIONAL: "money-fractional"
                },
                u = t(48315),
                i = t(2207),
                o = t(45919),
                l = t(26251),
                c = (0, r.createContext)(new Map),
                s = function(e) {
                    var n = (0, r.useContext)(c);
                    return (0, o.T9)(e, n)
                },
                f = t(10254),
                d = ["placeholder", "onChange", "onKeyPress"];

            function m() {
                return (m = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function g(e) {
                if ((0, o.Cy)(e)) {
                    var n = (0, o.Xe)(e.currentTarget);
                    return e.currentTarget instanceof n.HTMLInputElement
                }
                return !1
            }
            var v = function(e) {
                    var n = e.locale,
                        t = e.currency,
                        r = e.showSign,
                        a = e.minimumFractionDigits,
                        u = void 0 === a ? 0 : a,
                        i = e.maximumFractionDigits;
                    return Intl.NumberFormat(n, t ? {
                        style: "currency",
                        currency: t,
                        currencyDisplay: "narrowSymbol",
                        minimumFractionDigits: u,
                        maximumFractionDigits: i,
                        signDisplay: r ? "always" : void 0
                    } : {
                        minimumFractionDigits: u,
                        maximumFractionDigits: i,
                        signDisplay: r ? "always" : void 0
                    })
                },
                p = function(e) {
                    var n = e.formatter,
                        t = e.value,
                        r = e.showCurrency,
                        a = e.currencySymbol,
                        u = n.formatToParts(t);
                    return r ? a && (u = (0, o.RK)(u, a)) : u = (0, o.W)(u), (0, o.Y5)(u)
                },
                y = function(e, n, t) {
                    var r = Math.pow(10, t),
                        u = e === a.MONEY ? Math.round(n * r) : n;
                    return 2 === t && u % r ? t : void 0
                },
                h = function(e, n, t) {
                    var r, a;
                    return e.includes(n) ? Math.min(null != (r = null == (a = e.slice(b(e, n).lastIndexOf(n) + 1).match(/\d/g)) ? void 0 : a.length) ? r : 0, t) : null
                },
                b = function(e, n) {
                    var t = e.indexOf(n);
                    return t >= 0 ? e.slice(0, t + 1) + e.slice(t + 1).replace(RegExp("\\" + n, "g"), "") : e
                },
                w = function(e, n) {
                    return n ? e.replace(n, "") : e
                },
                C = ["type", "value", "defaultValue", "onChange", "currency", "showSign", "showCurrency", "negative", "render"];

            function O() {
                return (O = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function k(e) {
                var n, t, c, O, k, x, E, N, M, S, T, F, R, D, P, A, j, I, L, _, Y, V, K, X, $, H, W, z, B, q, J, Z, G, Q, U, ee, en = e.type,
                    et = e.value,
                    er = e.defaultValue,
                    ea = e.onChange,
                    eu = e.currency,
                    ei = e.showSign,
                    eo = e.showCurrency,
                    el = e.negative,
                    ec = e.render,
                    es = function(e, n) {
                        if (null == e) return {};
                        var t, r, a = {},
                            u = Object.keys(e);
                        for (r = 0; r < u.length; r++) t = u[r], n.indexOf(t) >= 0 || (a[t] = e[t]);
                        return a
                    }(e, C),
                    ef = (t = (n = {
                        type: en,
                        value: et,
                        defaultValue: er,
                        onChange: ea,
                        currency: eu,
                        showSign: ei,
                        showCurrency: eo,
                        negative: el
                    }).type, c = n.value, O = n.defaultValue, k = n.onChange, x = n.currency, N = void 0 !== (E = n.showSign) && E, S = void 0 === (M = n.showCurrency) || M, F = void 0 !== (T = n.negative) && T, R = (0, r.useContext)(f.f).locale, D = (0, r.useMemo)(function() {
                        var e = v({
                            locale: R
                        });
                        return {
                            group: e.format(11111).replace(/1/g, ""),
                            decimal: e.format(1.1).replace(/1/g, "")
                        }
                    }, [R]), P = (0, r.useCallback)(function(e) {
                        var n = e.trim();
                        if (D.group && (n = n.replace(RegExp("\\" + D.group, "g"), "")), D.decimal && (n = n.replace(RegExp("\\" + D.decimal, "g"), ".")), "" === (n = (n = b(n, ".")).replace(RegExp("[^\\d.," + (F ? "" : "-") + "]", "g"), ""))) return null;
                        if ("-" === n) return -0;
                        var t = Number(n);
                        return Number.isNaN(t) ? null : t
                    }, [D.group, D.decimal, F]), A = s(x), j = (0, o.VA)(x) ? "XXX" : void 0, I = null == A ? void 0 : A.symbol, L = (0, r.useMemo)(function() {
                        return v({
                            locale: R,
                            currency: j || x,
                            showSign: N,
                            maximumFractionDigits: null == A ? void 0 : A.fractionalPart
                        })
                    }, [R, x, N, A, j]), _ = (0, r.useMemo)(function() {
                        var e;
                        return null != (e = null == A ? void 0 : A.fractionalPart) ? e : (0, o.kE)(R, j || x)
                    }, [R, x, A, j]), Y = (0, r.useMemo)(function() {
                        return RegExp("[" + (F ? "" : "-") + "\\d" + D.decimal + "]", "g")
                    }, [D.decimal, F]), V = (0, r.useCallback)(function(e, n) {
                        if (void 0 === n && (n = null), null == e) return "";
                        if (Object.is(e, -0)) return "-";
                        var t = F && e >= 0 ? -e : e;
                        if (null === n) return p({
                            formatter: L,
                            value: t,
                            showCurrency: S,
                            currencySymbol: I
                        });
                        if (0 === n) {
                            var r = L.formatToParts(t);
                            (0, o.VA)(x) && (r = (0, o.RK)(r, x)), I && (r = (0, o.RK)(r, I));
                            var a = [].concat(r).reverse().find(function(e) {
                                return "integer" === e.type
                            });
                            return a && r.splice(r.indexOf(a) + 1, 0, {
                                type: "decimal",
                                value: D.decimal
                            }), S || (r = (0, o.W)(r)), (0, o.Y5)(r)
                        }
                        return p({
                            formatter: v({
                                locale: R,
                                currency: j || x,
                                minimumFractionDigits: n,
                                maximumFractionDigits: null == A ? void 0 : A.fractionalPart,
                                showSign: N
                            }),
                            value: t,
                            showCurrency: S,
                            currencySymbol: I
                        })
                    }, [L, D.decimal, x, R, N, S, F, A, j, I]), X = (K = (0, l.u)({
                        defaultValue: void 0 === O ? null : O,
                        value: c,
                        onChange: k
                    }))[0], $ = K[1], W = (H = (0, r.useState)(X))[0], z = H[1], (0, r.useEffect)(function() {
                        W !== X && z(X)
                    }, [X, W]), q = (B = (0, r.useState)(null !== X ? h(V(X, y(t, X, _)), ".", _) : null))[0], J = B[1], Z = (0, r.useCallback)(function(e) {
                        $(t === a.MONEY_FRACTIONAL && e ? Number(e.toFixed(_).replace(".", "")) : e), z(e)
                    }, [$, t, _]), G = V(t === a.MONEY_FRACTIONAL && X ? X / Math.pow(10, _) : X, q), Q = (0, u.u)({
                        accept: Y,
                        value: G,
                        format: function(e) {
                            var n = w(e, I);
                            return V(P(n), h(n, D.decimal, _))
                        },
                        onChange: function(e) {
                            var n = w(e, I);
                            J(h(n, D.decimal, _)), Z(P(n))
                        }
                    }), U = (0, r.useCallback)(function(e) {
                        if (e.key === i.m.PERIOD && D.decimal !== i.m.PERIOD) {
                            var n = e.currentTarget.selectionStart;
                            n && (e.currentTarget.value = e.currentTarget.value.substr(0, n) + D.decimal + e.currentTarget.value.substr(n, e.currentTarget.value.length), e.currentTarget.selectionStart = n + 1, e.currentTarget.selectionEnd = e.currentTarget.selectionStart)
                        }
                    }, [D.decimal]), ee = (0, r.useCallback)(function() {
                        for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                        var r = n.find(g);
                        r && Q.onChange(r)
                    }, [Q]), function(e) {
                        var n = e.placeholder,
                            t = e.onChange,
                            r = e.onKeyPress,
                            a = function(e, n) {
                                if (null == e) return {};
                                var t, r, a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) t = u[r], n.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a
                            }(e, d);
                        return m({
                            use: "input",
                            placeholder: null != n ? n : V(0),
                            inputMode: "decimal"
                        }, a, Q, {
                            onChange: (0, o.$e)(t, ee),
                            onKeyPress: (0, o.$e)(r, U)
                        })
                    });
                return ec(ef(es))
            }

            function x(e) {
                switch (e.type) {
                    case a.MONEY:
                    case a.MONEY_FRACTIONAL:
                        return r.createElement(k, O({
                            key: e.currency + "-" + e.type
                        }, e));
                    default:
                        return e.render(e)
                }
            }
        },
        20925: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return o
                },
                H: function() {
                    return i
                }
            });
            var r = t(67294),
                a = t(14141),
                u = {
                    start: (0, a.F4)(["to{--autofill-hack:start;}"]),
                    cancel: (0, a.F4)(["to{--autofill-hack:cancel;}"])
                },
                i = (0, a.iv)(["&:-webkit-autofill{animation-name:", ";transition-delay:9999s;}&:not(:-webkit-autofill){animation-name:", ";}"], u.start, u.cancel);

            function o(e, n) {
                return (0, r.useMemo)(function() {
                    return {
                        onAnimationStart: function(t) {
                            switch (t.animationName) {
                                case u.start.getName():
                                    return e();
                                case u.cancel.getName():
                                    return n()
                            }
                        }
                    }
                }, [e, n])
            }
        },
        48315: function(e, n, t) {
            t.d(n, {
                u: function() {
                    return a
                }
            });
            var r = t(67294);
            let a = e => {
                let [, n] = (0, r.useReducer)(e => e + 1, 0), t = (0, r.useRef)(null), {
                    replace: a,
                    append: u
                } = e, i = a ? a(e.format(e.value)) : e.format(e.value), o = (0, r.useRef)(!1), l = r => {
                    let a = r.target.value;
                    t.current = [a, r.target, a.length > i.length, o.current, i === e.format(a)], n()
                };
                return (0, r.useLayoutEffect)(() => {
                    if (null == t.current) return;
                    let [r, o, l, c, s] = t.current;
                    t.current = null;
                    let f = c && s,
                        d = r.slice(o.selectionStart),
                        m = d.search(e.accept || /\d/g),
                        g = -1 !== m ? m : 0,
                        v = n => (n.match(e.accept || /\d/g) || []).join(""),
                        p = v(r.substr(0, o.selectionStart)),
                        y = e => {
                            let n = 0,
                                t = 0;
                            for (let r = 0; r !== p.length; ++r) {
                                let a = e.indexOf(p[r], n) + 1,
                                    u = v(e).indexOf(p[r], t) + 1;
                                u - t > 1 && (a = n, u = t), t = Math.max(u, t), n = Math.max(n, a)
                            }
                            return n
                        };
                    if (!0 === e.mask && l && !s) {
                        let e = y(r),
                            n = v(r.substr(e))[0];
                        e = r.indexOf(n, e), r = `${r.substr(0,e)}${r.substr(e+1)}`
                    }
                    let h = e.format(r);
                    null == u || o.selectionStart !== r.length || s || (l ? h = u(h) : "" === v(h.slice(-1)) && (h = h.slice(0, -1)));
                    let b = a ? a(h) : h;
                    return i === b ? n() : e.onChange(b), () => {
                        let n = y(h);
                        if (null != e.mask && (l || c && !f))
                            for (; h[n] && "" === v(h[n]);) n += 1;
                        o.selectionStart = o.selectionEnd = n + (f ? 1 + g : 0)
                    }
                }), (0, r.useEffect)(() => {
                    let e = e => {
                            "Delete" === e.code && (o.current = !0)
                        },
                        n = e => {
                            "Delete" === e.code && (o.current = !1)
                        };
                    return document.addEventListener("keydown", e), document.addEventListener("keyup", n), () => {
                        document.removeEventListener("keydown", e), document.removeEventListener("keyup", n)
                    }
                }, []), {
                    value: null != t.current ? t.current[0] : i,
                    onChange: l
                }
            }
        }
    }
]);