"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3626], {
        72718: function(e, n, a) {
            a.d(n, {
                M: function() {
                    return k
                }
            });
            var l = a(85893),
                t = a(5152),
                i = a.n(t),
                r = a(2962),
                s = a(67294),
                u = a(73220),
                o = a(1112),
                p = a(52682),
                d = a(35402),
                c = a(35920),
                b = a(52805);
            let f = i()(() => Promise.all([a.e(9734), a.e(6345)]).then(a.bind(a, 46345)).then(e => e.MobileAppBannerView), {
                    loadableGenerated: {
                        webpack: () => [46345]
                    },
                    ssr: !1
                }),
                k = () => {
                    let {
                        isBannerDisplayed: e
                    } = (0, b.uz)(), n = (0, o.F)(), a = (0, p.v)(), {
                        linkContext: t
                    } = (0, d.z$)(), [i, k] = (0, c._)(u.Fe.MobileAppBannerDisplayed, !1), M = (0, s.useCallback)(() => k(!0), [k]);
                    return (null == n ? void 0 : n.os.name) === "iOS" && (null == t ? void 0 : t.status) === "error" ? (0, l.jsx)(r.PB, {
                        additionalMetaTags: [{
                            name: "apple-itunes-app",
                            content: "app-id=932493382"
                        }]
                    }) : !i && e && a ? (0, l.jsx)(f, {
                        onClose: M
                    }) : null
                }
        },
        53626: function(e, n, a) {
            a.r(n), a.d(n, {
                MobileAppBanner: function() {
                    return l.M
                }
            });
            var l = a(72718)
        }
    }
]);