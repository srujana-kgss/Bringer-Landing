"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4257], {
        18553: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return N
                }
            });
            var r = n(67294),
                o = n(45919),
                a = n(14141),
                i = n(16678),
                c = {
                    HORIZONTAL: "horizontal",
                    VERTICAL: "vertical"
                },
                u = n(22674),
                l = n(25394),
                s = n(32820),
                f = n(26251),
                d = n(76335),
                v = n(30116),
                p = ["defaultValue", "value", "thumbSize", "orientation", "children", "onChange", "onThumbDragStart", "onThumbDragEnd", "onTrackClick"];

            function b() {
                return (b = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var h = (0, a.ZP)(v.x).withConfig({
                    displayName: "ScrollbarBase__ScrollbarTrack",
                    componentId: "rui__sc-6tr5ul-0"
                })(["position:absolute;width:100%;height:100%;margin:0;"]),
                m = (0, a.ZP)(v.x).withConfig({
                    displayName: "ScrollbarBase__ScrollbarThumb",
                    componentId: "rui__sc-6tr5ul-1"
                })(["background-clip:padding-box;border:", " solid transparent;border-radius:", ";background-color:", ";will-change:transform,width,height;transform:translate3d(0,0,0);&:hover,&:active{background-color:", ";}"], u.W.space.s4, u.W.radius.round, (0, d.O)((0, o.z3)(l.G.CHANNEL_GREY_50), .6), (0, d.O)((0, o.z3)(l.G.CHANNEL_GREY_50), .9)),
                g = (0, a.ZP)(v.x).withConfig({
                    displayName: "ScrollbarBase__ScrollbarWrapper",
                    componentId: "rui__sc-6tr5ul-2"
                })(["position:relative;&[aria-orientation='vertical']{width:", ";& ", "{width:100%;height:", ";}}&[aria-orientation='horizontal']{height:", ";& ", "{height:100%;width:", ";}}"], u.W.space.s12, m, u.W.size.s32, u.W.space.s12, m, u.W.size.s32),
                y = (0, r.forwardRef)(function(e, t) {
                    var n = e.defaultValue,
                        a = e.value,
                        i = e.thumbSize,
                        u = void 0 === i ? 1 : i,
                        l = e.orientation,
                        d = void 0 === l ? "vertical" : l,
                        v = (e.children, e.onChange),
                        y = e.onThumbDragStart,
                        E = e.onThumbDragEnd,
                        O = e.onTrackClick,
                        w = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(e, p),
                        R = (0, r.useRef)(null),
                        S = (0, r.useRef)(null),
                        T = (0, r.useState)(0),
                        C = T[0],
                        N = T[1],
                        k = (0, r.useState)(!1),
                        L = k[0],
                        D = k[1],
                        A = (0, s.k)(),
                        I = (0, f.u)({
                            defaultValue: void 0 === n ? 0 : n,
                            value: a,
                            onChange: v
                        }),
                        P = I[0],
                        x = I[1],
                        F = (0, r.useCallback)(function(e) {
                            e.preventDefault(), e.stopPropagation()
                        }, []),
                        j = (0, r.useCallback)(function(e) {
                            if (!e.defaultPrevented) {
                                var t = R.current,
                                    n = S.current;
                                if (t && n) {
                                    e.preventDefault(), e.stopPropagation();
                                    var r = t.getBoundingClientRect(),
                                        o = n.getBoundingClientRect();
                                    N(d === c.HORIZONTAL ? e.clientX + r.left - o.left : e.clientY + r.top - o.top), D(!0), null == y || y()
                                }
                            }
                        }, [d, y]),
                        _ = (0, r.useCallback)(function(e) {
                            !e.defaultPrevented && L && (e.preventDefault(), e.stopPropagation(), D(!1), null == E || E())
                        }, [L, E]),
                        W = (0, r.useCallback)(function(e) {
                            if (!e.defaultPrevented) {
                                var t, n = R.current,
                                    r = S.current;
                                if (n && r && L) {
                                    e.preventDefault(), e.stopPropagation();
                                    var a = n.getBoundingClientRect(),
                                        i = r.getBoundingClientRect();
                                    t = d === c.HORIZONTAL ? (e.clientX - C) / (a.width - i.width) * 100 : (e.clientY - C) / (a.height - i.height) * 100, x((0, o.uZ)(0, 100, Math.round(t)))
                                }
                            }
                        }, [L, C, x, d]),
                        G = (0, r.useCallback)(function(e) {
                            var t, n, r = R.current,
                                a = S.current;
                            if (r && a && e.target !== a) {
                                e.stopPropagation(), e.preventDefault();
                                var i = e.clientX,
                                    u = e.clientY,
                                    l = a.getBoundingClientRect(),
                                    s = r.getBoundingClientRect();
                                d === c.HORIZONTAL ? (t = (e.clientX - s.left) / s.width, n = i > l.left ? 1 : -1) : (t = (e.clientY - s.top) / s.height, n = u > l.top ? 1 : -1);
                                var f = (0, o.uZ)(0, 100, t);
                                null == O || O({
                                    direction: n,
                                    nextValue: f
                                })
                            }
                        }, [d, O]);
                    (0, r.useEffect)(function() {
                        return A && (A.addEventListener("mousemove", W), A.addEventListener("mouseup", _), A.addEventListener("mouseleave", _)),
                            function() {
                                A && (A.removeEventListener("mousemove", W), A.removeEventListener("mouseup", _), A.removeEventListener("mouseleave", _))
                            }
                    }, [A, _, W]);
                    var H = (0, r.useMemo)(function() {
                        var e, t, n = R.current,
                            r = S.current;
                        return n && r ? d === c.HORIZONTAL ? (t = Math.max(Math.min(n.clientWidth * u, n.clientWidth), 32), e = (n.clientWidth - t) * P / 100, {
                            width: t + "px",
                            height: "100%",
                            transform: "translate3d(" + e + "px, 0, 0)"
                        }) : (t = Math.max(Math.min(n.clientHeight * u, n.clientHeight), 32), e = (n.clientHeight - t) * P / 100, {
                            width: "100%",
                            height: t + "px",
                            transform: "translate3d(0, " + e + "px, 0)"
                        }) : {}
                    }, [P, u, R, S, d]);
                    return r.createElement(g, b({}, w, {
                        role: "scrollbar",
                        "aria-orientation": d,
                        "aria-valuemin": 0,
                        "aria-valuenow": P,
                        "aria-valuemax": 100,
                        ref: t
                    }), r.createElement(h, {
                        onClick: G,
                        ref: R
                    }, r.createElement(m, {
                        onDragStart: F,
                        onMouseDown: j,
                        style: H,
                        ref: S
                    })))
                }),
                E = ["scrollRef", "cornerSpace", "offset", "orientation"];

            function O() {
                return (O = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var w = (0, a.ZP)(y).withConfig({
                    displayName: "Scrollbar__StyledScrollbar",
                    componentId: "rui__sc-1aygbf7-0"
                })(["", ";position:absolute;&[aria-hidden='true']{visibility:hidden;}"], i.FK),
                R = (0, a.vJ)(["[data-scrollbar='custom']{isolation:isolate;overflow:auto;scrollbar-width:none;&::-webkit-scrollbar{display:none;}}"]),
                S = r.memo(function(e) {
                    var t = e.scrollRef,
                        n = e.cornerSpace,
                        a = void 0 === n ? u.W.space.none : n,
                        i = e.offset,
                        l = void 0 === i ? u.W.space.none : i,
                        s = e.orientation,
                        f = void 0 === s ? c.VERTICAL : s,
                        d = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(e, E),
                        v = (0, r.useState)(1),
                        p = v[0],
                        b = v[1],
                        h = (0, r.useState)(0),
                        m = h[0],
                        g = h[1],
                        y = (0, r.useState)(!1),
                        S = y[0],
                        T = y[1],
                        C = (0, r.useState)(!1),
                        N = C[0],
                        k = C[1],
                        L = (0, r.useState)(!1),
                        D = L[0],
                        A = L[1],
                        I = (0, r.useRef)(null),
                        P = (0, r.useRef)(null),
                        x = (0, r.useRef)(null);
                    (0, r.useEffect)(function() {
                        var e = t.current;
                        if (e) {
                            e.dataset.scrollbar = "custom";
                            var n = function(e) {
                                    var t, n, r;
                                    f === c.HORIZONTAL ? (t = e.clientWidth / e.scrollWidth, n = (r = e.scrollWidth > e.clientWidth) ? e.scrollLeft / (e.scrollWidth - e.clientWidth) * 100 : 0) : (t = e.clientHeight / e.scrollHeight, n = (r = e.scrollHeight > e.clientHeight) ? e.scrollTop / (e.scrollHeight - e.clientHeight) * 100 : 0), g(n), b(t), k(r)
                                },
                                r = (0, o.Xe)(e);
                            return r.ResizeObserver && (I.current = new r.ResizeObserver(function() {
                                    return n(e)
                                }), I.current.observe(e)), r.MutationObserver && (P.current = new r.MutationObserver(function() {
                                    return n(e)
                                }), P.current.observe(e, {
                                    attributes: !1,
                                    childList: !0,
                                    subtree: !0
                                })), n(e),
                                function() {
                                    I.current && I.current.disconnect(), P.current && P.current.disconnect()
                                }
                        }
                    }, [f, t]), (0, r.useEffect)(function() {
                        var e = t.current,
                            n = x.current;
                        if (e && n) return e.addEventListener("mouseenter", r), e.addEventListener("mouseleave", o), e.addEventListener("scroll", a), e.contains(n) || (n.addEventListener("mouseenter", r), n.addEventListener("mouseleave", o)),
                            function() {
                                e.removeEventListener("mouseenter", r), e.removeEventListener("mouseleave", o), e.removeEventListener("scroll", a), e.contains(n) || (n.removeEventListener("mouseenter", r), n.removeEventListener("mouseleave", o))
                            };

                        function r(e) {
                            e.stopPropagation(), e.preventDefault(), T(!0)
                        }

                        function o(e) {
                            e.stopPropagation(), e.preventDefault(), T(!1)
                        }

                        function a(e) {
                            if (e.target) {
                                var t = e.target;
                                f === c.HORIZONTAL ? g(t.scrollLeft / (t.scrollWidth - t.clientWidth) * 100) : g(t.scrollTop / (t.scrollHeight - t.clientHeight) * 100)
                            }
                        }
                    }, [f, t]);
                    var F = (0, r.useCallback)(function() {
                            A(!0)
                        }, []),
                        j = (0, r.useCallback)(function() {
                            A(!1)
                        }, []),
                        _ = (0, r.useCallback)(function(e) {
                            var n = e.direction,
                                r = t.current;
                            if (r) {
                                var o = r.getBoundingClientRect();
                                f === c.HORIZONTAL ? r.scrollBy({
                                    left: o.width * n * .9,
                                    behavior: "smooth"
                                }) : r.scrollBy({
                                    top: o.height * n * .9,
                                    behavior: "smooth"
                                })
                            }
                        }, [f, t]),
                        W = (0, r.useCallback)(function(e) {
                            var n = t.current;
                            n && (f === c.HORIZONTAL ? n.scrollLeft = Math.round(e * (n.scrollWidth - n.clientWidth) / 100) : n.scrollTop = Math.round(e * (n.scrollHeight - n.clientHeight) / 100))
                        }, [f, t]),
                        G = f === c.HORIZONTAL ? {
                            right: a,
                            bottom: l,
                            left: a
                        } : {
                            top: a,
                            right: l,
                            bottom: a
                        };
                    return r.createElement(r.Fragment, null, r.createElement(R, null), r.createElement(w, O({}, d, G, {
                        orientation: f,
                        tabIndex: -1,
                        value: m,
                        thumbSize: p,
                        "aria-hidden": !N || !D && !S,
                        onChange: W,
                        onThumbDragStart: F,
                        onThumbDragEnd: j,
                        onTrackClick: _,
                        ref: x
                    })))
                }),
                T = ["placement"];

            function C() {
                return (C = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function N(e, t) {
                return void 0 === t && (t = {}), (0, r.forwardRef)(function(n, a) {
                    var i = (0, r.useRef)(null),
                        c = t,
                        u = c.placement,
                        l = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(c, T);
                    return "after" === (void 0 === u ? "after" : u) ? r.createElement(r.Fragment, null, r.createElement(e, C({}, n, {
                        ref: (0, o.ZM)(i, a)
                    })), r.createElement(S, C({}, l, {
                        scrollRef: i
                    }))) : r.createElement(r.Fragment, null, r.createElement(S, C({}, t, {
                        scrollRef: i
                    })), r.createElement(e, C({}, n, {
                        ref: (0, o.ZM)(i, a)
                    })))
                })
            }
        },
        96944: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return f
                }
            });
            var r = n(67294),
                o = n(36017),
                a = n(45919),
                i = n(25300),
                c = ["offsetX", "offsetY", "onEnter", "onExit", "__clearTransform"];

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var l = function(e) {
                    var t = (0, a.jL)(e),
                        n = t[0],
                        r = t[1];
                    return "" + -1 * n + (void 0 === r ? "px" : r)
                },
                s = {
                    opacity: 0,
                    pointerEvents: "none"
                },
                f = function(e) {
                    var t = e.offsetX,
                        n = void 0 === t ? 0 : t,
                        f = e.offsetY,
                        d = void 0 === f ? 0 : f,
                        v = e.onEnter,
                        p = void 0 === v ? a.ZT : v,
                        b = e.onExit,
                        h = void 0 === b ? a.ZT : b,
                        m = e.__clearTransform,
                        g = void 0 === m || m,
                        y = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(e, c);
                    return r.createElement(i.U, u({
                        duration: o.nL.MD,
                        onEnter: function(e, t) {
                            return Object.assign(e.style, s), u({
                                translateX: [l(n), 0],
                                translateY: [l(d), 0],
                                opacity: [0, 1],
                                complete: function() {
                                    e.style.opacity = "", e.style.pointerEvents = "", g && (e.style.transform = "")
                                }
                            }, p(e, t))
                        },
                        onExit: function(e) {
                            return u({
                                translateX: [0, l(n)],
                                translateY: [0, l(d)],
                                opacity: [1, 0]
                            }, h(e))
                        }
                    }, y))
                }
        },
        60260: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return c
                }
            });
            var r = n(14141),
                o = (0, n(44547).By)({
                    align: {
                        property: "placeItems"
                    }
                }),
                a = n(30116),
                i = "rui-z-stack-item",
                c = (0, r.ZP)(a.x).withConfig({
                    displayName: "ZStack",
                    componentId: "rui__sc-1v99yf7-0"
                })(["display:grid;grid-template:'", "' 1fr / 1fr;::before,::after,> *{grid-area:", ";}", ""], i, i, o);
            c.defaultProps = {
                use: "span"
            }
        },
        2207: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return r
                }
            });
            var r = {
                ENTER: "Enter",
                ESCAPE: "Escape",
                ARROW_UP: "ArrowUp",
                ARROW_DOWN: "ArrowDown",
                ARROW_LEFT: "ArrowLeft",
                ARROW_RIGHT: "ArrowRight",
                BACKSPACE: "Backspace",
                DELETE: "Delete",
                SPACE: " ",
                PERIOD: "."
            }
        },
        31895: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return r
                }
            });
            var r = (0, n(67294).createContext)(0)
        },
        59772: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return H
                }
            });
            var r, o = n(67294),
                a = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
                i = a.join(","),
                c = "undefined" == typeof Element,
                u = c ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                l = !c && Element.prototype.getRootNode ? function(e) {
                    return e.getRootNode()
                } : function(e) {
                    return e.ownerDocument
                },
                s = function(e, t, n) {
                    var r = Array.prototype.slice.apply(e.querySelectorAll(i));
                    return t && u.call(e, i) && r.unshift(e), r = r.filter(n)
                },
                f = function e(t, n, r) {
                    for (var o = [], a = Array.from(t); a.length;) {
                        var c = a.shift();
                        if ("SLOT" === c.tagName) {
                            var l = c.assignedElements(),
                                s = e(l.length ? l : c.children, !0, r);
                            r.flatten ? o.push.apply(o, s) : o.push({
                                scope: c,
                                candidates: s
                            })
                        } else {
                            u.call(c, i) && r.filter(c) && (n || !t.includes(c)) && o.push(c);
                            var f = c.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(c),
                                d = !r.shadowRootFilter || r.shadowRootFilter(c);
                            if (f && d) {
                                var v = e(!0 === f ? c.children : f.children, !0, r);
                                r.flatten ? o.push.apply(o, v) : o.push({
                                    scope: c,
                                    candidates: v
                                })
                            } else a.unshift.apply(a, c.children)
                        }
                    }
                    return o
                },
                d = function(e, t) {
                    return e.tabIndex < 0 && (t || /^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || e.isContentEditable) && isNaN(parseInt(e.getAttribute("tabindex"), 10)) ? 0 : e.tabIndex
                },
                v = function(e, t) {
                    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
                },
                p = function(e) {
                    return "INPUT" === e.tagName
                },
                b = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n].checked && e[n].form === t) return e[n]
                },
                h = function(e) {
                    if (!e.name) return !0;
                    var t, n = e.form || l(e),
                        r = function(e) {
                            return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                        };
                    if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
                    else try {
                        t = r(e.name)
                    } catch (e) {
                        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
                    }
                    var o = b(t, e.form);
                    return !o || o === e
                },
                m = function(e) {
                    var t = e.getBoundingClientRect(),
                        n = t.width,
                        r = t.height;
                    return 0 === n && 0 === r
                },
                g = function(e, t) {
                    var n = t.displayCheck,
                        r = t.getShadowRoot;
                    if ("hidden" === getComputedStyle(e).visibility) return !0;
                    var o = u.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                    if (u.call(o, "details:not([open]) *")) return !0;
                    var a = l(e).host,
                        i = (null == a ? void 0 : a.ownerDocument.contains(a)) || e.ownerDocument.contains(e);
                    if (n && "full" !== n) {
                        if ("non-zero-area" === n) return m(e)
                    } else {
                        if ("function" == typeof r) {
                            for (var c = e; e;) {
                                var s = e.parentElement,
                                    f = l(e);
                                if (s && !s.shadowRoot && !0 === r(s)) return m(e);
                                e = e.assignedSlot ? e.assignedSlot : s || f === e.ownerDocument ? s : f.host
                            }
                            e = c
                        }
                        if (i) return !e.getClientRects().length
                    }
                    return !1
                },
                y = function(e) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                        for (var t = e.parentElement; t;) {
                            if ("FIELDSET" === t.tagName && t.disabled) {
                                for (var n = 0; n < t.children.length; n++) {
                                    var r = t.children.item(n);
                                    if ("LEGEND" === r.tagName) return !!u.call(t, "fieldset[disabled] *") || !r.contains(e)
                                }
                                return !0
                            }
                            t = t.parentElement
                        }
                    return !1
                },
                E = function(e, t) {
                    return !(t.disabled || p(t) && "hidden" === t.type || g(t, e) || "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some(function(e) {
                        return "SUMMARY" === e.tagName
                    }) || y(t))
                },
                O = function(e, t) {
                    var n;
                    return !(p(n = t) && "radio" === n.type && !h(n) || 0 > d(t)) && !!E(e, t)
                },
                w = function(e) {
                    var t = parseInt(e.getAttribute("tabindex"), 10);
                    return !!isNaN(t) || t >= 0
                },
                R = function e(t) {
                    var n = [],
                        r = [];
                    return t.forEach(function(t, o) {
                        var a = !!t.scope,
                            i = a ? t.scope : t,
                            c = d(i, a),
                            u = a ? e(t.candidates) : i;
                        0 === c ? a ? n.push.apply(n, u) : n.push(i) : r.push({
                            documentOrder: o,
                            tabIndex: c,
                            item: t,
                            isScope: a,
                            content: u
                        })
                    }), r.sort(v).reduce(function(e, t) {
                        return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                    }, []).concat(n)
                },
                S = function(e, t) {
                    if (t = t || {}, !e) throw Error("No node provided");
                    return !1 !== u.call(e, i) && O(t, e)
                },
                T = a.concat("iframe").join(","),
                C = function(e, t) {
                    if (t = t || {}, !e) throw Error("No node provided");
                    return !1 !== u.call(e, T) && E(t, e)
                };
            /*!
             * focus-trap 6.9.4
             * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
             */
            function N(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(n), !0).forEach(function(t) {
                        var r, o;
                        r = e, o = n[t], t in r ? Object.defineProperty(r, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var L = (r = [], {
                    activateTrap: function(e) {
                        if (r.length > 0) {
                            var t = r[r.length - 1];
                            t !== e && t.pause()
                        }
                        var n = r.indexOf(e); - 1 === n || r.splice(n, 1), r.push(e)
                    },
                    deactivateTrap: function(e) {
                        var t = r.indexOf(e); - 1 !== t && r.splice(t, 1), r.length > 0 && r[r.length - 1].unpause()
                    }
                }),
                D = function(e) {
                    return setTimeout(e, 0)
                },
                A = function(e, t) {
                    var n = -1;
                    return e.every(function(e, r) {
                        return !t(e) || (n = r, !1)
                    }), n
                },
                I = function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return "function" == typeof e ? e.apply(void 0, n) : e
                },
                P = function(e) {
                    return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
                },
                x = function(e, t) {
                    var n, r = (null == t ? void 0 : t.document) || document,
                        o = k({
                            returnFocusOnDeactivate: !0,
                            escapeDeactivates: !0,
                            delayInitialFocus: !0
                        }, t),
                        a = {
                            containers: [],
                            containerGroups: [],
                            tabbableGroups: [],
                            nodeFocusedBeforeActivation: null,
                            mostRecentlyFocusedNode: null,
                            active: !1,
                            paused: !1,
                            delayInitialFocusTimer: void 0
                        },
                        i = function(e, t, n) {
                            return e && void 0 !== e[t] ? e[t] : o[n || t]
                        },
                        c = function(e) {
                            return a.containerGroups.findIndex(function(t) {
                                var n = t.container,
                                    r = t.tabbableNodes;
                                return n.contains(e) || r.find(function(t) {
                                    return t === e
                                })
                            })
                        },
                        u = function(e) {
                            var t = o[e];
                            if ("function" == typeof t) {
                                for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                                t = t.apply(void 0, a)
                            }
                            if (!0 === t && (t = void 0), !t) {
                                if (void 0 === t || !1 === t) return t;
                                throw Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                            }
                            var c = t;
                            if ("string" == typeof t && !(c = r.querySelector(t))) throw Error("`".concat(e, "` as selector refers to no known node"));
                            return c
                        },
                        l = function() {
                            var e = u("initialFocus");
                            if (!1 === e) return !1;
                            if (void 0 === e) {
                                if (c(r.activeElement) >= 0) e = r.activeElement;
                                else {
                                    var t = a.tabbableGroups[0];
                                    e = t && t.firstTabbableNode || u("fallbackFocus")
                                }
                            }
                            if (!e) throw Error("Your focus-trap needs to have at least one focusable element");
                            return e
                        },
                        d = function() {
                            if (a.containerGroups = a.containers.map(function(e) {
                                    var t, n, r, a, i = (t = e, R((n = (n = o.tabbableOptions) || {}).getShadowRoot ? f([t], n.includeContainer, {
                                            filter: O.bind(null, n),
                                            flatten: !1,
                                            getShadowRoot: n.getShadowRoot,
                                            shadowRootFilter: w
                                        }) : s(t, n.includeContainer, O.bind(null, n)))),
                                        c = (r = e, (a = (a = o.tabbableOptions) || {}).getShadowRoot ? f([r], a.includeContainer, {
                                            filter: E.bind(null, a),
                                            flatten: !0,
                                            getShadowRoot: a.getShadowRoot
                                        }) : s(r, a.includeContainer, E.bind(null, a)));
                                    return {
                                        container: e,
                                        tabbableNodes: i,
                                        focusableNodes: c,
                                        firstTabbableNode: i.length > 0 ? i[0] : null,
                                        lastTabbableNode: i.length > 0 ? i[i.length - 1] : null,
                                        nextTabbableNode: function(e) {
                                            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                                n = c.findIndex(function(t) {
                                                    return t === e
                                                });
                                            return n < 0 ? void 0 : t ? c.slice(n + 1).find(function(e) {
                                                return S(e, o.tabbableOptions)
                                            }) : c.slice(0, n).reverse().find(function(e) {
                                                return S(e, o.tabbableOptions)
                                            })
                                        }
                                    }
                                }), a.tabbableGroups = a.containerGroups.filter(function(e) {
                                    return e.tabbableNodes.length > 0
                                }), a.tabbableGroups.length <= 0 && !u("fallbackFocus")) throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")
                        },
                        v = function e(t) {
                            if (!1 !== t && t !== r.activeElement) {
                                if (!t || !t.focus) {
                                    e(l());
                                    return
                                }
                                t.focus({
                                    preventScroll: !!o.preventScroll
                                }), a.mostRecentlyFocusedNode = t, t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select && t.select()
                            }
                        },
                        p = function(e) {
                            var t = u("setReturnFocus", e);
                            return t || !1 !== t && e
                        },
                        b = function(e) {
                            var t = P(e);
                            if (!(c(t) >= 0)) {
                                if (I(o.clickOutsideDeactivates, e)) {
                                    n.deactivate({
                                        returnFocus: o.returnFocusOnDeactivate && !C(t, o.tabbableOptions)
                                    });
                                    return
                                }
                                I(o.allowOutsideClick, e) || e.preventDefault()
                            }
                        },
                        h = function(e) {
                            var t = P(e),
                                n = c(t) >= 0;
                            n || t instanceof Document ? n && (a.mostRecentlyFocusedNode = t) : (e.stopImmediatePropagation(), v(a.mostRecentlyFocusedNode || l()))
                        },
                        m = function(e) {
                            var t = P(e);
                            d();
                            var n = null;
                            if (a.tabbableGroups.length > 0) {
                                var r = c(t),
                                    i = r >= 0 ? a.containerGroups[r] : void 0;
                                if (r < 0) n = e.shiftKey ? a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : a.tabbableGroups[0].firstTabbableNode;
                                else if (e.shiftKey) {
                                    var l = A(a.tabbableGroups, function(e) {
                                        return t === e.firstTabbableNode
                                    });
                                    if (l < 0 && (i.container === t || C(t, o.tabbableOptions) && !S(t, o.tabbableOptions) && !i.nextTabbableNode(t, !1)) && (l = r), l >= 0) {
                                        var s = 0 === l ? a.tabbableGroups.length - 1 : l - 1;
                                        n = a.tabbableGroups[s].lastTabbableNode
                                    }
                                } else {
                                    var f = A(a.tabbableGroups, function(e) {
                                        return t === e.lastTabbableNode
                                    });
                                    if (f < 0 && (i.container === t || C(t, o.tabbableOptions) && !S(t, o.tabbableOptions) && !i.nextTabbableNode(t)) && (f = r), f >= 0) {
                                        var p = f === a.tabbableGroups.length - 1 ? 0 : f + 1;
                                        n = a.tabbableGroups[p].firstTabbableNode
                                    }
                                }
                            } else n = u("fallbackFocus");
                            n && (e.preventDefault(), v(n))
                        },
                        g = function(e) {
                            if (("Escape" === e.key || "Esc" === e.key || 27 === e.keyCode) && !1 !== I(o.escapeDeactivates, e)) {
                                e.preventDefault(), n.deactivate();
                                return
                            }
                            if ("Tab" === e.key || 9 === e.keyCode) {
                                m(e);
                                return
                            }
                        },
                        y = function(e) {
                            c(P(e)) >= 0 || I(o.clickOutsideDeactivates, e) || I(o.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
                        },
                        T = function() {
                            if (a.active) return L.activateTrap(n), a.delayInitialFocusTimer = o.delayInitialFocus ? D(function() {
                                v(l())
                            }) : v(l()), r.addEventListener("focusin", h, !0), r.addEventListener("mousedown", b, {
                                capture: !0,
                                passive: !1
                            }), r.addEventListener("touchstart", b, {
                                capture: !0,
                                passive: !1
                            }), r.addEventListener("click", y, {
                                capture: !0,
                                passive: !1
                            }), r.addEventListener("keydown", g, {
                                capture: !0,
                                passive: !1
                            }), n
                        },
                        N = function() {
                            if (a.active) return r.removeEventListener("focusin", h, !0), r.removeEventListener("mousedown", b, !0), r.removeEventListener("touchstart", b, !0), r.removeEventListener("click", y, !0), r.removeEventListener("keydown", g, !0), n
                        };
                    return (n = {
                        get active() {
                            return a.active
                        },
                        get paused() {
                            return a.paused
                        },
                        activate: function(e) {
                            if (a.active) return this;
                            var t = i(e, "onActivate"),
                                n = i(e, "onPostActivate"),
                                o = i(e, "checkCanFocusTrap");
                            o || d(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = r.activeElement, t && t();
                            var c = function() {
                                o && d(), T(), n && n()
                            };
                            return o ? (o(a.containers.concat()).then(c, c), this) : (c(), this)
                        },
                        deactivate: function(e) {
                            if (!a.active) return this;
                            var t = k({
                                onDeactivate: o.onDeactivate,
                                onPostDeactivate: o.onPostDeactivate,
                                checkCanReturnFocus: o.checkCanReturnFocus
                            }, e);
                            clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, N(), a.active = !1, a.paused = !1, L.deactivateTrap(n);
                            var r = i(t, "onDeactivate"),
                                c = i(t, "onPostDeactivate"),
                                u = i(t, "checkCanReturnFocus"),
                                l = i(t, "returnFocus", "returnFocusOnDeactivate");
                            r && r();
                            var s = function() {
                                D(function() {
                                    l && v(p(a.nodeFocusedBeforeActivation)), c && c()
                                })
                            };
                            return l && u ? (u(p(a.nodeFocusedBeforeActivation)).then(s, s), this) : (s(), this)
                        },
                        pause: function() {
                            return a.paused || !a.active || (a.paused = !0, N()), this
                        },
                        unpause: function() {
                            return a.paused && a.active && (a.paused = !1, d(), T()), this
                        },
                        updateContainerElements: function(e) {
                            var t = [].concat(e).filter(Boolean);
                            return a.containers = t.map(function(e) {
                                return "string" == typeof e ? r.querySelector(e) : e
                            }), a.active && d(), this
                        }
                    }).updateContainerElements(e), n
                },
                F = n(33252),
                j = n(45919),
                _ = n(65142),
                W = n(1074);

            function G() {
                return (G = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function H(e, t, n) {
                var r = (0, W.c)(n);
                (0, o.useEffect)(function() {
                    var n = e.current;
                    if (null != n && !1 !== t && !1 !== (0, F.q)("focusManagement")) try {
                        var o = G({
                                allowOutsideClick: !0,
                                initialFocus: (0, _.u)(n),
                                clickOutsideDeactivates: !0
                            }, r.current),
                            a = x(n, o);
                        if (o.preventScroll) {
                            var i = (0, j.CS)(n);
                            a.activate({
                                onPostActivate: function() {
                                    return setTimeout(i)
                                }
                            })
                        } else a.activate();
                        return function() {
                            a.deactivate({
                                returnFocus: !0
                            })
                        }
                    } catch (e) {
                        console.error(e)
                    }
                }, [t, e, r])
            }
        },
        79904: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return r
                }
            });

            function r(e, t) {}
        },
        65142: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return r
                },
                u: function() {
                    return o
                }
            });
            var r = function(e) {
                    return "autoFocus" in e ? {
                        "data-autofocus": e.autoFocus
                    } : {}
                },
                o = function(e) {
                    return e.querySelector('[data-autofocus="true"]') || void 0
                }
        }
    }
]);