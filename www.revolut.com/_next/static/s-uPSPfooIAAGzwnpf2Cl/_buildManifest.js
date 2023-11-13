self.__BUILD_MANIFEST = function(e, s, n, a, c, t, i, l, u, r, p, b, d, f, g, h, o, k, L, E, j, I, S, R, T, B, U, C, v, N, w, A, M) {
    return {
        __rewrites: {
            beforeFiles: [{
                source: "/:nextInternalLocale(en\\-GB|en\\-AM|de\\-AT|en\\-AT|en\\-AU|en\\-AZ|ru\\-AZ|fr\\-BE|en\\-BE|bg\\-BG|en\\-BG|pt\\-BR|en\\-BR|es\\-CL|en\\-CL|el\\-CY|en\\-CY|cs\\-CZ|en\\-CZ|de\\-DE|en\\-DE|da\\-DK|en\\-DK|es\\-EC|en\\-EC|en\\-EE|ru\\-EE|es\\-ES|en\\-ES|en\\-FI|fr\\-FR|en\\-FR|el\\-GR|en\\-GR|hr\\-HR|en\\-HR|hu\\-HU|en\\-HU|en\\-IE|en\\-IN|en\\-IS|it\\-IT|en\\-IT|ja\\-JP|en\\-JP|en\\-LI|en\\-LK|lt\\-LT|en\\-LT|de\\-LU|fr\\-LU|en\\-LU|lv\\-LV|ru\\-LV|en\\-LV|en\\-MD|en\\-MO|en\\-MT|es\\-MX|en\\-MX|nl\\-NL|pl\\-NL|en\\-NL|en\\-NO|en\\-NZ|pl\\-PL|en\\-PL|pt\\-PT|en\\-PT|ro\\-RO|en\\-RO|sv\\-SE|en\\-SE|en\\-SG|en\\-SI|sk\\-SK|en\\-SK|en\\-US|et\\-EE|fi\\-FI|is\\-IS|nb\\-NO|sl\\-SI|nl\\-BE|de\\-LI|es\\-US)/business/help",
                destination: "/:nextInternalLocale/help/business"
            }, {
                source: "/:nextInternalLocale(en\\-GB|en\\-AM|de\\-AT|en\\-AT|en\\-AU|en\\-AZ|ru\\-AZ|fr\\-BE|en\\-BE|bg\\-BG|en\\-BG|pt\\-BR|en\\-BR|es\\-CL|en\\-CL|el\\-CY|en\\-CY|cs\\-CZ|en\\-CZ|de\\-DE|en\\-DE|da\\-DK|en\\-DK|es\\-EC|en\\-EC|en\\-EE|ru\\-EE|es\\-ES|en\\-ES|en\\-FI|fr\\-FR|en\\-FR|el\\-GR|en\\-GR|hr\\-HR|en\\-HR|hu\\-HU|en\\-HU|en\\-IE|en\\-IN|en\\-IS|it\\-IT|en\\-IT|ja\\-JP|en\\-JP|en\\-LI|en\\-LK|lt\\-LT|en\\-LT|de\\-LU|fr\\-LU|en\\-LU|lv\\-LV|ru\\-LV|en\\-LV|en\\-MD|en\\-MO|en\\-MT|es\\-MX|en\\-MX|nl\\-NL|pl\\-NL|en\\-NL|en\\-NO|en\\-NZ|pl\\-PL|en\\-PL|pt\\-PT|en\\-PT|ro\\-RO|en\\-RO|sv\\-SE|en\\-SE|en\\-SG|en\\-SI|sk\\-SK|en\\-SK|en\\-US|et\\-EE|fi\\-FI|is\\-IS|nb\\-NO|sl\\-SI|nl\\-BE|de\\-LI|es\\-US)/business/help/:slug*",
                destination: "/:nextInternalLocale/help/:slug*/business"
            }, {
                source: "/:nextInternalLocale(en\\-GB|en\\-AM|de\\-AT|en\\-AT|en\\-AU|en\\-AZ|ru\\-AZ|fr\\-BE|en\\-BE|bg\\-BG|en\\-BG|pt\\-BR|en\\-BR|es\\-CL|en\\-CL|el\\-CY|en\\-CY|cs\\-CZ|en\\-CZ|de\\-DE|en\\-DE|da\\-DK|en\\-DK|es\\-EC|en\\-EC|en\\-EE|ru\\-EE|es\\-ES|en\\-ES|en\\-FI|fr\\-FR|en\\-FR|el\\-GR|en\\-GR|hr\\-HR|en\\-HR|hu\\-HU|en\\-HU|en\\-IE|en\\-IN|en\\-IS|it\\-IT|en\\-IT|ja\\-JP|en\\-JP|en\\-LI|en\\-LK|lt\\-LT|en\\-LT|de\\-LU|fr\\-LU|en\\-LU|lv\\-LV|ru\\-LV|en\\-LV|en\\-MD|en\\-MO|en\\-MT|es\\-MX|en\\-MX|nl\\-NL|pl\\-NL|en\\-NL|en\\-NO|en\\-NZ|pl\\-PL|en\\-PL|pt\\-PT|en\\-PT|ro\\-RO|en\\-RO|sv\\-SE|en\\-SE|en\\-SG|en\\-SI|sk\\-SK|en\\-SK|en\\-US|et\\-EE|fi\\-FI|is\\-IS|nb\\-NO|sl\\-SI|nl\\-BE|de\\-LI|es\\-US)/seo-sitemaps/:path*"
            }, {
                source: "/:nextInternalLocale(en\\-GB|en\\-AM|de\\-AT|en\\-AT|en\\-AU|en\\-AZ|ru\\-AZ|fr\\-BE|en\\-BE|bg\\-BG|en\\-BG|pt\\-BR|en\\-BR|es\\-CL|en\\-CL|el\\-CY|en\\-CY|cs\\-CZ|en\\-CZ|de\\-DE|en\\-DE|da\\-DK|en\\-DK|es\\-EC|en\\-EC|en\\-EE|ru\\-EE|es\\-ES|en\\-ES|en\\-FI|fr\\-FR|en\\-FR|el\\-GR|en\\-GR|hr\\-HR|en\\-HR|hu\\-HU|en\\-HU|en\\-IE|en\\-IN|en\\-IS|it\\-IT|en\\-IT|ja\\-JP|en\\-JP|en\\-LI|en\\-LK|lt\\-LT|en\\-LT|de\\-LU|fr\\-LU|en\\-LU|lv\\-LV|ru\\-LV|en\\-LV|en\\-MD|en\\-MO|en\\-MT|es\\-MX|en\\-MX|nl\\-NL|pl\\-NL|en\\-NL|en\\-NO|en\\-NZ|pl\\-PL|en\\-PL|pt\\-PT|en\\-PT|ro\\-RO|en\\-RO|sv\\-SE|en\\-SE|en\\-SG|en\\-SI|sk\\-SK|en\\-SK|en\\-US|et\\-EE|fi\\-FI|is\\-IS|nb\\-NO|sl\\-SI|nl\\-BE|de\\-LI|es\\-US)/:path*",
                has: [{
                    type: "host",
                    value: "start.revolut.(codes|com)"
                }],
                destination: "/:nextInternalLocale/:path*"
            }],
            afterFiles: [],
            fallback: []
        },
        "/": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/index-5855bca0ea9fb5a2.js"],
        "/404": [n, a, c, t, i, l, u, r, p, e, d, S, b, s, f, g, "static/chunks/pages/404-54f978f61f0b68dc.js"],
        "/_error": [n, a, c, t, i, l, u, r, p, e, d, S, b, s, f, g, "static/chunks/pages/_error-4a5e446af89976e6.js"],
        "/blog/author/[[...slug]]": [n, a, c, t, i, l, u, r, p, h, o, e, d, R, L, E, B, U, C, T, b, s, f, g, "static/chunks/pages/blog/author/[[...slug]]-82a1e89115d5f5a7.js"],
        "/blog/post/[[...slug]]": [n, a, c, t, i, l, u, r, p, h, o, e, d, R, L, E, T, v, b, s, f, g, k, j, N, "static/chunks/pages/blog/post/[[...slug]]-064279d9639ca15a.js"],
        "/business/blog/post/[[...slug]]": [n, a, c, t, i, l, u, r, p, h, o, e, d, R, L, E, T, v, b, s, f, g, k, j, N, "static/chunks/pages/business/blog/post/[[...slug]]-1ecd4df222bb0aed.js"],
        "/careers/apply": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/careers/apply-7ffdb18f374d53dc.js"],
        "/careers/apply/[id]": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/careers/apply/[id]-b2639dab83b28e21.js"],
        "/careers/position/[id]": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/careers/position/[id]-ea00935063c88e30.js"],
        "/careers/team/[slug]": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/careers/team/[slug]-a8593a004df03eef.js"],
        "/careers/[[...slug]]": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/careers/[[...slug]]-67dd5c557e0b3040.js"],
        "/cookie-preferences": [n, a, c, t, i, l, u, r, p, e, d, S, w, b, s, f, g, "static/chunks/pages/cookie-preferences-c7e42eb7d0982380.js"],
        "/email-verification": [n, a, c, t, i, l, u, r, p, e, d, S, b, s, f, g, "static/chunks/pages/email-verification-6d686628290c1a4b.js"],
        "/getrevolutunder18": [n, a, c, t, i, l, u, r, p, e, d, S, A, b, s, f, g, "static/chunks/pages/getrevolutunder18-f3f3d19a115d45a0.js"],
        "/gettheapp": [n, a, c, t, i, l, u, r, p, e, d, S, A, b, s, f, g, "static/chunks/pages/gettheapp-cf19e3496bf7d58f.js"],
        "/help/[[...slug]]": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/help/[[...slug]]-66493e224dfb350b.js"],
        "/legal": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/legal-6d44f356bdc790d1.js"],
        "/legal/[slug]": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/legal/[slug]-48bd30663388e515.js"],
        "/legal/[slug]/history": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/legal/[slug]/history-52b44b1e5a457ea9.js"],
        "/news/[slug]": [n, a, c, t, i, l, u, r, p, h, o, e, d, R, L, E, "static/chunks/9291-949571f88541483e.js", b, s, f, g, k, j, "static/chunks/pages/news/[slug]-6a7ad2b63de905c3.js"],
        "/not-a-web-link": [n, a, c, t, i, l, u, r, p, e, d, S, b, s, f, g, "static/chunks/pages/not-a-web-link-01670229fb31c1dd.js"],
        "/preview/blocks": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, k, j, M, "static/chunks/pages/preview/blocks-19a99e010156ec29.js"],
        "/preview/blog-author": [n, a, c, t, i, l, u, r, p, h, o, e, B, U, C, "static/chunks/9878-e3c2cb4720063c7f.js", b, s, "static/chunks/9524-c8d5e5ab574de7f6.js", "static/chunks/pages/preview/blog-author-1560acf4a8eed4f5.js"],
        "/preview/blog-post": [n, a, c, t, i, l, u, r, p, e, "static/chunks/4372-45c9e471e97f502d.js", b, s, k, "static/chunks/pages/preview/blog-post-cb4cb696d99b8db9.js"],
        "/preview/news-article": [e, s, k, M, "static/chunks/pages/preview/news-article-23df6c4be9d900f2.js"],
        "/preview/sitemap": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, "static/chunks/pages/preview/sitemap-63a704024f538461.js"],
        "/promo/[slug]": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, "static/chunks/pages/promo/[slug]-47ded8827fb873c9.js"],
        "/qr-code-link": [n, a, c, t, i, l, u, r, p, e, d, S, b, s, f, g, "static/chunks/pages/qr-code-link-f89e84c044eef9bc.js"],
        "/sitemap-dynamic-index.xml": ["static/chunks/pages/sitemap-dynamic-index.xml-974f3edd800ff6ca.js"],
        "/unsubscribe": [n, a, c, t, i, l, u, r, p, e, d, S, w, b, s, f, g, "static/chunks/pages/unsubscribe-4bd66fe0a593ef17.js"],
        "/update-browser": ["static/chunks/pages/update-browser-28ae9b80ed72671a.js"],
        "/[...slug]": [n, a, c, t, i, l, u, r, p, h, o, e, d, L, E, b, s, f, g, k, j, I, "static/chunks/pages/[...slug]-1a54249074fe6c04.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/blog/author/[[...slug]]", "/blog/post/[[...slug]]", "/business/blog/post/[[...slug]]", "/careers/apply", "/careers/apply/[id]", "/careers/position/[id]", "/careers/team/[slug]", "/careers/[[...slug]]", "/cookie-preferences", "/email-verification", "/getrevolutunder18", "/gettheapp", "/help/[[...slug]]", "/legal", "/legal/[slug]", "/legal/[slug]/history", "/news/[slug]", "/not-a-web-link", "/preview/blocks", "/preview/blog-author", "/preview/blog-post", "/preview/news-article", "/preview/sitemap", "/promo/[slug]", "/qr-code-link", "/sitemap-dynamic-index.xml", "/unsubscribe", "/update-browser", "/[...slug]"]
    }
}("static/chunks/1579-760769b472404c7e.js", "static/chunks/9716-e6003502c7ddcb76.js", "static/chunks/8237-f2d53748f9552754.js", "static/chunks/5898-a06a0cd3e2f9e475.js", "static/chunks/4257-37ad6544fb3fd3d6.js", "static/chunks/2265-d0e89ed5b8865dd9.js", "static/chunks/9133-6f016396b5cf8ed9.js", "static/chunks/1722-1295ddd4e1a95855.js", "static/chunks/3245-c4af5eb19d33c89b.js", "static/chunks/2238-44aaf9fdf9ee1f70.js", "static/chunks/1664-62d579b4ba66033d.js", "static/chunks/6206-330a3fe4e2604195.js", "static/chunks/6633-b57d307940be750d.js", "static/chunks/121-ce95ae4d6edb79d9.js", "static/chunks/1586-193ec4fb6cc600da.js", "static/chunks/2055-9dd3068cb2c240a8.js", "static/chunks/6563-22baf3c993b8d609.js", "static/chunks/8465-d1a3386efcce5330.js", "static/chunks/2426-912c5c166c474faf.js", "static/chunks/6295-6dd93411b0fceeb6.js", "static/chunks/4325-846e0dc36700b7f1.js", "static/chunks/8910-f7e153d9fa6c4327.js", "static/chunks/4525-0bfbe8ba823cd582.js", "static/chunks/4170-8972f0ad0fb1a975.js", "static/chunks/4465-2c045a70fe441d82.js", "static/chunks/2032-7e5bb8412aa724ac.js", "static/chunks/387-2b22572f865d04f8.js", "static/chunks/4407-a639d9807ff1e1bb.js", "static/chunks/604-2976550cb7bd678a.js", "static/chunks/513-28e2bf257363c521.js", "static/chunks/2675-a2d3faa7af99776e.js", "static/chunks/3492-80f8f3e8fa76657e.js", "static/chunks/9181-7c47eab4f315340e.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();