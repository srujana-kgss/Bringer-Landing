"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2567], {
        72567: function(a, e, t) {
            t.r(e), t.d(e, {
                ExpansionWaitlistPopup: function() {
                    return d
                }
            });
            var l = t(85893),
                n = t(67294),
                i = t(51303),
                o = t(48377),
                s = t(17446),
                c = t(17954),
                p = t(35402),
                r = t(32571),
                u = t(50464),
                k = t(98608);
            let d = () => {
                let {
                    isOpen: a,
                    setIsOpen: e
                } = (0, k.I9)(), [, t] = (0, r.Ly)(), {
                    step: d
                } = (0, s.tk)(), C = (0, s.A4)(), h = (0, k.wZ)(), {
                    trackEvent: b
                } = (0, p.z$)(), O = (0, n.useCallback)(() => e(!1), [e]), v = (0, n.useCallback)(() => C({
                    step: u.ZO.Initial
                }), [C]), w = (0, n.useCallback)(() => {
                    t(!0), O()
                }, [t, O]);
                return (0, n.useEffect)(() => {
                    a && b({
                        action: "Waitlist_Start",
                        component_name: "expansion-waitlist-widget",
                        vertical: "Retail",
                        payload: {
                            mode: "popup"
                        }
                    })
                }, [b, a]), (0, l.jsxs)(i.G, {
                    "aria-label": "wide-modal",
                    closeOnOverlayClick: !1,
                    "data-blockid": h.blockId,
                    onClose: O,
                    open: a,
                    variant: "modal-view",
                    children: [d !== u.ZO.Done && d !== u.ZO.Already && (0, l.jsxs)(o.h, {
                        variant: "compact",
                        children: [d === u.ZO.Initial && (0, l.jsx)(o.h.CloseButton, {
                            onClick: O
                        }), d === u.ZO.Otp && (0, l.jsx)(o.h.BackButton, {
                            onClick: v
                        })]
                    }), (0, l.jsx)(c.D, {
                        onClose: O,
                        navigateToGetTheApp: w
                    })]
                })
            }
        }
    }
]);