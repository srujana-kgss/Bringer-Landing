! function() {
    "use strict";
    var e, t, c, a, n, r, f, d, b, o, u, i, s = {},
        l = {};

    function h(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var c = l[e] = {
                id: e,
                loaded: !1,
                exports: {}
            },
            a = !0;
        try {
            s[e].call(c.exports, c, c.exports, h), a = !1
        } finally {
            a && delete l[e]
        }
        return c.loaded = !0, c.exports
    }
    h.m = s, h.amdO = {}, e = [], h.O = function(t, c, a, n) {
        if (c) {
            n = n || 0;
            for (var r = e.length; r > 0 && e[r - 1][2] > n; r--) e[r] = e[r - 1];
            e[r] = [c, a, n];
            return
        }
        for (var f = 1 / 0, r = 0; r < e.length; r++) {
            for (var c = e[r][0], a = e[r][1], n = e[r][2], d = !0, b = 0; b < c.length; b++) f >= n && Object.keys(h.O).every(function(e) {
                return h.O[e](c[b])
            }) ? c.splice(b--, 1) : (d = !1, n < f && (f = n));
            if (d) {
                e.splice(r--, 1);
                var o = a();
                void 0 !== o && (t = o)
            }
        }
        return t
    }, h.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return h.d(t, {
            a: t
        }), t
    }, c = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    } : function(e) {
        return e.__proto__
    }, h.t = function(e, a) {
        if (1 & a && (e = this(e)), 8 & a || "object" == typeof e && e && (4 & a && e.__esModule || 16 & a && "function" == typeof e.then)) return e;
        var n = Object.create(null);
        h.r(n);
        var r = {};
        t = t || [null, c({}), c([]), c(c)];
        for (var f = 2 & a && e;
            "object" == typeof f && !~t.indexOf(f); f = c(f)) Object.getOwnPropertyNames(f).forEach(function(t) {
            r[t] = function() {
                return e[t]
            }
        });
        return r.default = function() {
            return e
        }, h.d(n, r), n
    }, h.d = function(e, t) {
        for (var c in t) h.o(t, c) && !h.o(e, c) && Object.defineProperty(e, c, {
            enumerable: !0,
            get: t[c]
        })
    }, h.f = {}, h.e = function(e) {
        return Promise.all(Object.keys(h.f).reduce(function(t, c) {
            return h.f[c](e, t), t
        }, []))
    }, h.u = function(e) {
        return 8237 === e ? "static/chunks/8237-f2d53748f9552754.js" : 5898 === e ? "static/chunks/5898-a06a0cd3e2f9e475.js" : 4257 === e ? "static/chunks/4257-37ad6544fb3fd3d6.js" : 2265 === e ? "static/chunks/2265-d0e89ed5b8865dd9.js" : 9133 === e ? "static/chunks/9133-6f016396b5cf8ed9.js" : 1722 === e ? "static/chunks/1722-1295ddd4e1a95855.js" : 3245 === e ? "static/chunks/3245-c4af5eb19d33c89b.js" : 2238 === e ? "static/chunks/2238-44aaf9fdf9ee1f70.js" : 1664 === e ? "static/chunks/1664-62d579b4ba66033d.js" : 6206 === e ? "static/chunks/6206-330a3fe4e2604195.js" : 2055 === e ? "static/chunks/2055-9dd3068cb2c240a8.js" : 6563 === e ? "static/chunks/6563-22baf3c993b8d609.js" : 2032 === e ? "static/chunks/2032-7e5bb8412aa724ac.js" : 387 === e ? "static/chunks/387-2b22572f865d04f8.js" : 2426 === e ? "static/chunks/2426-912c5c166c474faf.js" : 4170 === e ? "static/chunks/4170-8972f0ad0fb1a975.js" : 2675 === e ? "static/chunks/2675-a2d3faa7af99776e.js" : 4407 === e ? "static/chunks/4407-a639d9807ff1e1bb.js" : 9524 === e ? "static/chunks/9524-c8d5e5ab574de7f6.js" : 3492 === e ? "static/chunks/3492-80f8f3e8fa76657e.js" : "static/chunks/" + (4577 === e ? "2b7b2d2a" : e) + "." + ({
            69: "a96a0b9d28524ac6",
            116: "3938e0edee575f58",
            231: "83fb334f3f249e0d",
            394: "dbf463a7f5501c8e",
            446: "a74ad6ca08495d80",
            515: "65ebbbf0204a8e35",
            579: "4b7906d2f8a18112",
            857: "515daab9bd319344",
            978: "cb981458cf847fef",
            1043: "8385b13bc16b2ca7",
            1074: "250140c0f70c31c3",
            1104: "3d6e798d307bd0bd",
            1231: "3bc4d3f2327e9f45",
            1371: "51ee1cf2c3e7e520",
            1441: "ec1561d2b9676104",
            1486: "5ac08c921e27e76f",
            1557: "4de904efcfca2a14",
            1685: "3e173c1fbce562fa",
            1709: "45cd88c2fb4eaa94",
            1801: "4ab1b52986af80ca",
            1959: "475509123524425a",
            2042: "08acb9caacdc4651",
            2065: "b10dd79d12d5b7e2",
            2094: "a9c59d18f975e9d5",
            2125: "a355f997bde20c24",
            2321: "65251a9e5db60183",
            2386: "5cd4f0569e9c634c",
            2567: "035e0550b3f018eb",
            2585: "6b1f0c0f520121c6",
            2613: "cb93b96804452a94",
            2734: "6b8dd8e57e905add",
            2746: "abcf8082bcfecc21",
            2928: "eb3a877d282e60a5",
            3061: "cc68fcc7005bb0b9",
            3114: "7d251f067faa4c3d",
            3147: "20ca05608cfbc00a",
            3198: "36a6a678804c17c6",
            3393: "de386eea6fbdba71",
            3523: "41ed7aeabe2c84e4",
            3594: "08d923555173c5e9",
            3626: "d8dac5e17d5bd329",
            3827: "276117c01dce1002",
            3846: "9be13dc530566715",
            3897: "70eeb6cd68c6712a",
            3914: "3d644f9afedc887b",
            3920: "50201734c215ed3a",
            3939: "df51e727be5b31d5",
            3969: "4960bec26a8c5f23",
            4054: "a6f975b1b9816328",
            4075: "89efdf8098bd0f6b",
            4151: "b1dbfc673860db96",
            4226: "dff07f55148b4f58",
            4287: "aa686c3a0749fa97",
            4304: "cb3cf866038cc9d9",
            4310: "d84f90f424e0b271",
            4330: "df74eb02de0fbacc",
            4389: "268cb0463c033fcb",
            4577: "b7df91c708c7fd6f",
            4694: "9242143a8908c8dd",
            4704: "9be3678673d7e164",
            4710: "356cfbbc3bb124fe",
            4938: "b12392ce72301935",
            5050: "8e7d08cf029c5682",
            5067: "d1778e26d6be21a0",
            5146: "e128679694c3f7fb",
            5150: "fa04b0c54a9840dd",
            5162: "27571315000cfecf",
            5166: "f11514133935a4ba",
            5207: "5f8439bb17d3db0b",
            5228: "8b05f961bb39ff44",
            5232: "65076113ca7c6c7e",
            5234: "c4066a05e431ad6b",
            5249: "31cd75933fb39654",
            5288: "033cfe2e843ca224",
            5294: "b3522537b16d66cb",
            5377: "5844df5896b84ec7",
            5454: "ac8faf82a1fb4ca2",
            5483: "b04ead25fdd4e069",
            5514: "cf4ec12e3c89e9c3",
            5523: "e7a836a7557f3a4f",
            5552: "968f7d52427a43b7",
            5655: "fc8f8edba0acde6b",
            5761: "42591310abb0ba82",
            5988: "0a8b5f2109e632bc",
            6345: "850f8bbca47a9103",
            6418: "aa2e2ebda917a345",
            6606: "154c427afa2b6fc4",
            6782: "9d751e4a1908691b",
            6787: "9c815ac76d3622e3",
            6812: "5ae4c39e136cbbd7",
            7036: "44514d3bd5db70da",
            7039: "197918436eee6603",
            7097: "c1944d2c9e3b6bbe",
            7164: "e6237651c1ced95f",
            7308: "7de2cb6d36329a10",
            7358: "44826cbfec2665a8",
            7396: "3529991cff7e0c2d",
            7403: "3a4cbb9aca0c8d2a",
            7493: "80bc90fc13cd2013",
            7577: "fafa10779652d46b",
            7722: "546fd9484d0b052b",
            7770: "8779820549fccad1",
            7873: "85beeb0ad21921d8",
            7954: "b9512ae3ed9149e2",
            8019: "691ce3f987b0f425",
            8133: "3a942cc466abf300",
            8249: "61a6e39bed99e787",
            8577: "9776de2846b43eb8",
            8588: "b25c63d3e6b22b18",
            8623: "5bdab18ea7cbced9",
            8841: "742c09c4b94e64e4",
            9223: "9ceb0e8c03eed24e",
            9501: "c33864c5aa279509",
            9585: "c0694bbfc0f3727d",
            9594: "b8f5947061b63041",
            9699: "7d3fb1222a8e886a",
            9734: "29a64d493594c908",
            9868: "71643227791f95b9",
            9920: "845ccaaedc585a77",
            9923: "97724285471fb13a"
        })[e] + ".js"
    }, h.miniCssF = function(e) {
        return "static/css/83e4ac2ac34399fc.css"
    }, h.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), h.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, h.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a = {}, n = "_N_E:", h.l = function(e, t, c, r) {
        if (a[e]) {
            a[e].push(t);
            return
        }
        if (void 0 !== c)
            for (var f, d, b = document.getElementsByTagName("script"), o = 0; o < b.length; o++) {
                var u = b[o];
                if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == n + c) {
                    f = u;
                    break
                }
            }
        f || (d = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, h.nc && f.setAttribute("nonce", h.nc), f.setAttribute("data-webpack", n + c), f.src = h.tu(e)), a[e] = [t];
        var i = function(t, c) {
                f.onerror = f.onload = null, clearTimeout(s);
                var n = a[e];
                if (delete a[e], f.parentNode && f.parentNode.removeChild(f), n && n.forEach(function(e) {
                        return e(c)
                    }), t) return t(c)
            },
            s = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
            }), 12e4);
        f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), d && document.head.appendChild(f)
    }, h.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, h.nmd = function(e) {
        return e.paths = [], e.children || (e.children = []), e
    }, h.tt = function() {
        return void 0 === r && (r = {
            createScriptURL: function(e) {
                return e
            }
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (r = trustedTypes.createPolicy("nextjs#bundler", r))), r
    }, h.tu = function(e) {
        return h.tt().createScriptURL(e)
    }, h.p = "https://www.revolut.com/_next/", f = function(e, t, c, a) {
        var n = document.createElement("link");
        return n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = function(r) {
            if (n.onerror = n.onload = null, "load" === r.type) c();
            else {
                var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.href || t,
                    b = Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                b.code = "CSS_CHUNK_LOAD_FAILED", b.type = f, b.request = d, n.parentNode.removeChild(n), a(b)
            }
        }, n.href = t, document.head.appendChild(n), n
    }, d = function(e, t) {
        for (var c = document.getElementsByTagName("link"), a = 0; a < c.length; a++) {
            var n = c[a],
                r = n.getAttribute("data-href") || n.getAttribute("href");
            if ("stylesheet" === n.rel && (r === e || r === t)) return n
        }
        for (var f = document.getElementsByTagName("style"), a = 0; a < f.length; a++) {
            var n = f[a],
                r = n.getAttribute("data-href");
            if (r === e || r === t) return n
        }
    }, b = {
        2272: 0
    }, h.f.miniCss = function(e, t) {
        b[e] ? t.push(b[e]) : 0 !== b[e] && ({
            9594: 1
        })[e] && t.push(b[e] = new Promise(function(t, c) {
            var a = h.miniCssF(e),
                n = h.p + a;
            if (d(a, n)) return t();
            f(e, n, t, c)
        }).then(function() {
            b[e] = 0
        }, function(t) {
            throw delete b[e], t
        }))
    }, o = {
        2272: 0
    }, h.f.j = function(e, t) {
        var c = h.o(o, e) ? o[e] : void 0;
        if (0 !== c) {
            if (c) t.push(c[2]);
            else if (2272 != e) {
                var a = new Promise(function(t, a) {
                    c = o[e] = [t, a]
                });
                t.push(c[2] = a);
                var n = h.p + h.u(e),
                    r = Error();
                h.l(n, function(t) {
                    if (h.o(o, e) && (0 !== (c = o[e]) && (o[e] = void 0), c)) {
                        var a = t && ("load" === t.type ? "missing" : t.type),
                            n = t && t.target && t.target.src;
                        r.message = "Loading chunk " + e + " failed.\n(" + a + ": " + n + ")", r.name = "ChunkLoadError", r.type = a, r.request = n, c[1](r)
                    }
                }, "chunk-" + e, e)
            } else o[e] = 0
        }
    }, h.O.j = function(e) {
        return 0 === o[e]
    }, u = function(e, t) {
        var c, a, n = t[0],
            r = t[1],
            f = t[2],
            d = 0;
        if (n.some(function(e) {
                return 0 !== o[e]
            })) {
            for (c in r) h.o(r, c) && (h.m[c] = r[c]);
            if (f) var b = f(h)
        }
        for (e && e(t); d < n.length; d++) a = n[d], h.o(o, a) && o[a] && o[a][0](), o[a] = 0;
        return h.O(b)
    }, (i = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(u.bind(null, 0)), i.push = u.bind(null, i.push.bind(i)), h.nc = void 0
}();