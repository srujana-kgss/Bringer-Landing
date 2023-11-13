"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3920], {
        73920: function(l, e, t) {
            t.r(e), t.d(e, {
                default: function() {
                    return r
                }
            });
            var a, s, u = t(85893),
                n = t(30116);
            (a = s || (s = {})).Default = "default", a.Large = "large", a.Small = "Small";
            let r = l => {
                let {
                    id: e,
                    content: {
                        style: {
                            variant: t
                        } = {}
                    }
                } = l;
                return (0, u.jsx)(n.x, {
                    use: "section",
                    "data-blockid": e,
                    size: function(l) {
                        switch (l) {
                            case s.Large:
                                return {
                                    all: 80,
                                    lg: 160,
                                    xxl: 240
                                };
                            case s.Small:
                                return {
                                    all: "s-8",
                                    lg: "s-16",
                                    xxl: "s-24"
                                };
                            default:
                                return {
                                    all: "s-40",
                                    lg: 80,
                                    xxl: 120
                                }
                        }
                    }(t)
                })
            }
        }
    }
]);