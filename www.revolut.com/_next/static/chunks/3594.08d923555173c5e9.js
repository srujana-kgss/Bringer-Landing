"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3594], {
        99925: function(e, n, r) {
            r.d(n, {
                N: function() {
                    return s
                }
            });
            var t = r(67294),
                i = r(29758);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var o = t.forwardRef(function(e, n) {
                return t.createElement(i.A, a({
                    ref: n,
                    viewBox: "0 0 24 24",
                    size: 24
                }, e), t.createElement("g", {
                    fill: "currentColor"
                }, t.createElement("path", {
                    fill: "currentColor",
                    d: "M1 11.991c0-.3.114-.583.333-.803l5.9-5.899a1 1 0 0 1 1.415 0L9 5.643a1 1 0 0 1 0 1.414L5.308 10.75h12.187a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H5.308L9 16.942a1 1 0 0 1 0 1.414l-.353.354a1 1 0 0 1-1.414 0l-5.9-5.9A1.15 1.15 0 0 1 1 11.991Z"
                })))
            });

            function c() {
                return (c = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            o.displayName = "IconBackButtonArrow";
            var l = {
                    default: o,
                    24: o
                },
                u = function(e) {
                    var n = e.size,
                        r = e.variant,
                        t = void 0 === r ? "auto" : r;
                    return "auto" === t ? l[n] || l.default : l[t] || l.default
                },
                s = t.forwardRef(function(e, n) {
                    var r = u(e);
                    return t.createElement(r, c({
                        ref: n
                    }, e))
                });
            s.displayName = "IconBackButtonArrow", s.variants = l
        },
        3506: function(e, n, r) {
            r.d(n, {
                X: function() {
                    return E
                }
            });
            var t = r(67294),
                i = r(45919),
                a = r(99105);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = r(58200),
                l = r(14141),
                u = r(79500),
                s = r(22674),
                d = r(939),
                f = (0, l.ZP)(d.xv).withConfig({
                    displayName: "CheckboxDescription",
                    componentId: "rui__sc-b4kajo-0"
                })([""]);
            f.defaultProps = {
                use: "div",
                color: s.W.color.greyTone50,
                variant: u.p.CAPTION
            };
            var h = r(7019),
                v = (0, l.ZP)(d.xv).withConfig({
                    displayName: "CheckboxLabel",
                    componentId: "rui__sc-1cilvwb-0"
                })([""]);
            v.defaultProps = {
                use: "div",
                variant: u.p.SECONDARY
            };
            var p = r(30116),
                b = r(37903),
                m = ["isDisabled", "label", "input", "color", "indicator"];

            function g() {
                return (g = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var y = (0, l.ZP)(function(e) {
                    var n = e.isDisabled,
                        r = e.label,
                        i = e.input,
                        a = e.color,
                        o = e.indicator,
                        c = function(e, n) {
                            if (null == e) return {};
                            var r, t, i = {},
                                a = Object.keys(e);
                            for (t = 0; t < a.length; t++) r = a[t], n.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i
                        }(e, m);
                    return null != r ? t.createElement(b.U, g({
                        use: "label",
                        align: "center"
                    }, c), t.createElement(p.x, {
                        color: a
                    }, o, i), t.createElement(p.x, {
                        ml: o ? s.W.space.s16 : void 0,
                        color: n ? s.W.color.greyTone50 : void 0,
                        minWidth: 0
                    }, r)) : t.createElement(p.x, g({
                        color: a
                    }, c), o, i)
                }).withConfig({
                    displayName: "CheckboxWrapper",
                    componentId: "rui__sc-167fmps-0"
                })(["position:relative;transition:", ";cursor:pointer;"], s.W.transition.text),
                O = ["type", "checked", "defaultChecked", "disabled", "indeterminate", "wrapper", "children", "onChange", "color", "render", "readOnly", "align"];

            function k() {
                return (k = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function w(e) {
                return t.createElement(c.FZ, {
                    checked: e.isActive,
                    indeterminate: e.isIndeterminate,
                    inherit: !0
                })
            }

            function C(e) {
                return (0, c.pf)({
                    checked: e.isActive,
                    indeterminate: e.isIndeterminate,
                    disabled: e.isDisabled,
                    focused: e.isFocused,
                    invalid: e.hasError
                })
            }
            var E = Object.assign((0, t.forwardRef)(function(e, n) {
                var r, c, l, u, s, d, f, v, p, b, m, g, E, _, j, x, W, I, A, P, N = e.type,
                    Z = e.checked,
                    S = e.defaultChecked,
                    D = e.disabled,
                    z = e.indeterminate,
                    B = e.wrapper,
                    R = e.children,
                    F = e.onChange,
                    T = void 0 === F ? i.ZT : F,
                    L = e.color,
                    J = e.render,
                    M = (e.readOnly, e.align),
                    X = function(e, n) {
                        if (null == e) return {};
                        var r, t, i = {},
                            a = Object.keys(e);
                        for (t = 0; t < a.length; t++) r = a[t], n.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i
                    }(e, O),
                    $ = (c = (r = {
                        isIndeterminate: void 0 !== z && z,
                        isActive: Z,
                        defaultIsActive: S,
                        onChange: T,
                        isDisabled: void 0 !== D && D
                    }).defaultIsActive, u = void 0 !== (l = r.isIndeterminate) && l, s = r.isActive, f = void 0 !== (d = r.isDisabled) && d, p = void 0 === (v = r.onChange) ? i.ZT : v, b = (0, t.useRef)(null), g = (m = (0, t.useState)(!1))[0], E = m[1], j = (_ = (0, a.O)({
                        defaultState: void 0 !== c && c,
                        state: s,
                        disabled: f
                    }))[0], x = _[1], (0, t.useEffect)(function() {
                        null !== b.current && (b.current.indeterminate = u)
                    }, [u, b]), W = (0, t.useCallback)(function(e) {
                        try {
                            E(e.target.matches(":focus-visible"))
                        } catch (e) {
                            E(!0)
                        }
                    }, []), I = (0, t.useCallback)(function() {
                        E(!1)
                    }, []), A = (0, t.useCallback)(function(e) {
                        f || (x(e.target.checked), p(e))
                    }, [f, p, x]), P = (0, t.useCallback)(function(e) {
                        return o({}, e, {
                            ref: (0, i.ZM)(b, e.ref),
                            checked: j,
                            disabled: f,
                            onChange: (0, i.$e)(A, e.onChange),
                            onFocus: (0, i.$e)(W, e.onFocus),
                            onBlur: (0, i.$e)(I, e.onBlur)
                        })
                    }, [I, A, W, j, f]), [{
                        isActive: j,
                        isIndeterminate: u,
                        isDisabled: f,
                        isFocused: g
                    }, P]),
                    H = $[0],
                    K = $[1];
                return t.createElement(y, k({
                    label: R,
                    input: t.createElement(h.I, k({}, K({
                        ref: n,
                        type: void 0 === N ? "checkbox" : N
                    }), X)),
                    indicator: (void 0 === J ? w : J)(H),
                    color: (void 0 === L ? C : L)(k({}, H, {
                        hasError: "true" === String(X["aria-invalid"])
                    })),
                    align: void 0 === M ? "center" : M
                }, H, B))
            }), {
                Label: v,
                Description: f
            })
        },
        58200: function(e, n, r) {
            r.d(n, {
                FZ: function() {
                    return c
                },
                Fj: function() {
                    return l
                },
                pf: function() {
                    return o
                }
            });
            var t = r(67294),
                i = r(22674),
                a = r(15059);

            function o(e) {
                return e.inherit ? void 0 : e.invalid ? e.disabled ? i.W.color.red_40 : i.W.color.red : e.checked || e.indeterminate || e.focused ? e.disabled ? i.W.color.blue_40 : i.W.color.blue : i.W.color.greyTone20
            }
            var c = function(e) {
                    var n = o(e);
                    return e.checked ? t.createElement(a.J, {
                        name: "CheckboxOn",
                        size: 24,
                        color: n
                    }) : e.indeterminate ? t.createElement(a.J, {
                        name: "CheckboxMultiple",
                        size: 24,
                        color: n
                    }) : t.createElement(a.J, {
                        name: "CheckboxOff",
                        size: 24,
                        color: n
                    })
                },
                l = function(e) {
                    var n = o(e);
                    return t.createElement(a.J, {
                        name: e.checked ? "RadiobuttonOn" : "RadiobuttonOff",
                        size: 24,
                        color: n
                    })
                }
        },
        68439: function(e, n, r) {
            r.d(n, {
                r: function() {
                    return g
                }
            });
            var t = r(67294),
                i = r(14141),
                a = r(22674),
                o = r(30116),
                c = r(3506),
                l = r(14571),
                u = r(45919),
                s = a.W.size.s48,
                d = (0, l.h)(28),
                f = (0, u.px)(2),
                h = a.W.size.s24;

            function v() {
                return (v = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = (0, i.ZP)(o.x).withConfig({
                    displayName: "Switch__SwitchBase",
                    componentId: "rui__sc-1815cfr-0"
                })(["width:", ";height:", ";padding:", ";border-radius:", ";background-color:", ";opacity:", ";"], s, d, f, d, function(e) {
                    return e.isActive ? a.W.color.blue : a.W.color.greyTone20
                }, function(e) {
                    return e.isDisabled ? .5 : 1
                }),
                b = (0, i.ZP)(o.x).withConfig({
                    displayName: "Switch__SwitchKnob",
                    componentId: "rui__sc-1815cfr-1"
                })(["width:", ";height:", ";border-radius:", ";background-color:", ";transition:", ";transform:translateX( ", " );"], h, h, h, a.W.color.white, a.W.transition.transform, function(e) {
                    return e.isActive ? "calc(" + s + " - (" + f + " * 2) - " + h + ")" : 0
                }),
                m = (0, i.ZP)(c.X).withConfig({
                    displayName: "Switch__StyledCheckbox",
                    componentId: "rui__sc-1815cfr-2"
                })(["--checkbox-border-radius:", ";"], a.W.radius.round),
                g = (0, t.forwardRef)(function(e, n) {
                    return t.createElement(m, v({
                        ref: n,
                        render: function(e) {
                            return t.createElement(p, e, t.createElement(b, e))
                        }
                    }, e))
                });
            g.displayName = "Switch"
        }
    }
]);