const D = "modulepreload",
    u = function(e) {
        return "/modules/static2/" + e
    },
    c = {},
    _ = function(s, E, p) {
        if (!E || E.length === 0) return s();
        const d = document.getElementsByTagName("link");
        return Promise.all(E.map(t => {
            if (t = u(t), t in c) return;
            c[t] = !0;
            const o = t.endsWith(".css"),
                v = o ? '[rel="stylesheet"]' : "";
            if (!!p)
                for (let r = d.length - 1; r >= 0; r--) {
                    const n = d[r];
                    if (n.href === t && (!o || n.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${t}"]${v}`)) return;
            const i = document.createElement("link");
            if (i.rel = o ? "stylesheet" : D, o || (i.as = "script", i.crossOrigin = ""), i.href = t, document.head.appendChild(i), o) return new Promise((r, n) => {
                i.addEventListener("load", r), i.addEventListener("error", () => n(new Error(`Unable to preload CSS for ${t}`)))
            })
        })).then(() => s()).catch(t => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = t, window.dispatchEvent(o), !o.defaultPrevented) throw t
        })
    },
    {
        createRemote: m
    } = globalThis._bc.fcsy,
    I = () => _(() =>
        import ("./Layout-462900b2.js"), []),
    P = () => _(() =>
        import ("./index-660c8f90.js"), ["assets/index-660c8f90.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/createHtmlFile-c65d009a.js", "assets/router-6469ef63.js", "assets/LocalIcon-f88c1ac0.js", "assets/i18n-75922727.js", "assets/index-c9e70fa8.js", "assets/parseHTML-aa0710ee.js", "assets/memoize-a925864b.js", "assets/toNumber-13716d9c.js"]),
    L = () => _(() =>
        import ("./index-1f3a595d.js"), ["assets/index-1f3a595d.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/router-6469ef63.js", "assets/i18n-75922727.js", "assets/LocalIcon-f88c1ac0.js"]),
    a = () => _(() =>
        import ("./OneDollarCheck-5945cd12.js"), ["assets/OneDollarCheck-5945cd12.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    l = () => _(() =>
        import ("./WalletType-2cd325e7.js").then(e => e.W), ["assets/WalletType-2cd325e7.js", "assets/web-03ca4527.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/_commonjs-dynamic-modules-302442b1.js", "assets/solid-js-a6a72539.js", "assets/router-6469ef63.js", "assets/i18n-75922727.js"]),
    R = () => _(() =>
        import ("./PrivacyDialog-b858a50a.js"), ["assets/PrivacyDialog-b858a50a.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/createHtmlFile-c65d009a.js", "assets/router-6469ef63.js"]),
    A = () => _(() =>
        import ("./BonusTCDialog-bddae52e.js"), ["assets/BonusTCDialog-bddae52e.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/index-c9e70fa8.js", "assets/solid-js-a6a72539.js", "assets/router-6469ef63.js", "assets/createHtmlFile-c65d009a.js", "assets/parseHTML-aa0710ee.js", "assets/memoize-a925864b.js", "assets/toNumber-13716d9c.js"]),
    T = () => _(() =>
        import ("./index-afda8628.js"), ["assets/index-afda8628.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/verify_result-adff92bd.js"]),
    O = () => _(() =>
        import ("./index-c9e70fa8.js"), ["assets/index-c9e70fa8.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/router-6469ef63.js", "assets/i18n-75922727.js", "assets/createHtmlFile-c65d009a.js", "assets/parseHTML-aa0710ee.js", "assets/memoize-a925864b.js", "assets/toNumber-13716d9c.js"]),
    V = () => _(() =>
        import ("./index-c6211483.js"), ["assets/index-c6211483.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/store-2ed2b91e.js", "assets/index-27e2239a.css"]),
    g = () => _(() =>
        import ("./index-d75d599b.js"), ["assets/index-d75d599b.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/SpineAnimation-9ed37841.js", "assets/solid-js-a6a72539.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/store-2ed2b91e.js", "assets/index-abfaab7e.css"]),
    h = () => _(() =>
        import ("./index-d3d3353c.js"), ["assets/index-d3d3353c.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/LHeader-34d00ddb.js", "assets/store-2ed2b91e.js", "assets/LHeader-08159b7a.css"]),
    y = () => _(() =>
        import ("./index-0a6a433a.js"), ["assets/index-0a6a433a.js", "assets/web-03ca4527.js", "assets/time-down-59b29424.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/index-34e54f6a.js", "assets/store-2ed2b91e.js", "assets/SpineAnimations-8ad9bc88.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/line-c298a13f.js", "assets/line-eb7f97db.css"]),
    f = () => _(() =>
        import ("./index-ff968b45.js"), ["assets/index-ff968b45.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/index-11d3213e.js", "assets/store-2ed2b91e.js"]),
    w = () => _(() =>
        import ("./check-dialog-d11d7865.js"), ["assets/check-dialog-d11d7865.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/index-11d3213e.js"]),
    F = () => _(() =>
        import ("./claim-dialog-291a452e.js"), ["assets/claim-dialog-291a452e.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/index-8ed02462.js", "assets/SpineAnimation-9ed37841.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/index-11d3213e.js"]),
    k = () => _(() =>
        import ("./winner-list-951e7fad.js"), ["assets/winner-list-951e7fad.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/LHeader-34d00ddb.js", "assets/store-2ed2b91e.js", "assets/LHeader-08159b7a.css", "assets/router-6469ef63.js"]),
    S = () => _(() =>
        import ("./index-cae1d36d.js"), ["assets/index-cae1d36d.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/index-ea2352f7.js", "assets/store-2ed2b91e.js", "assets/SpineAnimation-9ed37841.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js"]),
    B = () => _(() =>
        import ("./index-da964612.js"), ["assets/index-da964612.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/memoize-a925864b.js", "assets/toNumber-13716d9c.js", "assets/store-2ed2b91e.js", "assets/axios-0719e63a.js", "assets/index-090c6ef5.css"]),
    C = () => _(() =>
        import ("./s-detail-f57cc9da.js"), ["assets/s-detail-f57cc9da.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    W = () => _(() =>
        import ("./s-detail-49dd52a4.js"), ["assets/s-detail-49dd52a4.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    M = () => _(() =>
        import ("./week1-detail-3c98aef5.js"), ["assets/week1-detail-3c98aef5.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    z = () => _(() =>
        import ("./week2-detail-b5bc4327.js"), ["assets/week2-detail-b5bc4327.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    N = () => _(() =>
        import ("./week3-detail-a1104773.js"), ["assets/week3-detail-a1104773.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    H = () => _(() =>
        import ("./week4-detail-7625ec72.js"), ["assets/week4-detail-7625ec72.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    b = () => _(() =>
        import ("./prize-ratio-1455d6ad.js"), ["assets/prize-ratio-1455d6ad.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/three-989fb724.js"]),
    K = () => _(() =>
        import ("./s-detail-19f98024.js"), ["assets/s-detail-19f98024.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    U = () => _(() =>
        import ("./s-detail-e80ec5bc.js"), ["assets/s-detail-e80ec5bc.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js"]),
    J = () => _(() =>
        import ("./verify-cd065e6e.js"), ["assets/verify-cd065e6e.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/index-ea2352f7.js", "assets/store-2ed2b91e.js"]),
    $ = () => _(() =>
        import ("./invite-0df8f097.js"), ["assets/invite-0df8f097.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/index-ea2352f7.js", "assets/solid-js-a6a72539.js", "assets/store-2ed2b91e.js", "assets/index-8ed02462.js"]),
    q = () => _(() =>
        import ("./invite-54c12513.js"), ["assets/invite-54c12513.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/index-34e54f6a.js", "assets/solid-js-a6a72539.js", "assets/store-2ed2b91e.js"]),
    x = () => _(() =>
        import ("./invite-5c1a1151.js"), ["assets/invite-5c1a1151.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/index-ef8a8165.js"]),
    Q = () => _(() =>
        import ("./view-detail-022d7ee8.js"), ["assets/view-detail-022d7ee8.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/close-50a68df0.js", "assets/cloud-9a5369e0.js", "assets/line-c298a13f.js", "assets/line-eb7f97db.css", "assets/time-down-59b29424.js", "assets/solid-js-a6a72539.js", "assets/index-34e54f6a.js", "assets/store-2ed2b91e.js"]),
    j = () => _(() =>
        import ("./prize-detail-ae757df5.js"), ["assets/prize-detail-ae757df5.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/close-50a68df0.js", "assets/cloud-9a5369e0.js", "assets/line-c298a13f.js", "assets/line-eb7f97db.css", "assets/4-59e72500.js", "assets/index-34e54f6a.js", "assets/solid-js-a6a72539.js", "assets/store-2ed2b91e.js"]),
    G = () => _(() =>
        import ("./cash-detail-02e98eb6.js"), ["assets/cash-detail-02e98eb6.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/close-50a68df0.js", "assets/line-c298a13f.js", "assets/line-eb7f97db.css", "assets/index-34e54f6a.js", "assets/solid-js-a6a72539.js", "assets/store-2ed2b91e.js", "assets/4-59e72500.js"]),
    X = () => _(() =>
        import ("./index-140d03be.js"), ["assets/index-140d03be.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/router-6469ef63.js", "assets/i18n-75922727.js", "assets/store-07a457cb.js", "assets/store-2ed2b91e.js"]),
    Y = () => _(() =>
        import ("./index-766ce48d.js"), ["assets/index-766ce48d.js", "assets/web-03ca4527.js", "assets/banner-2634da2b.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/store-07a457cb.js", "assets/store-2ed2b91e.js"]),
    Z = () => _(() =>
        import ("./s-detail-7d20a7a5.js"), ["assets/s-detail-7d20a7a5.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    __ = () => _(() =>
        import ("./invite-03f594b2.js"), ["assets/invite-03f594b2.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js"]),
    t_ = () => _(() =>
        import ("./index-09cf43a8.js"), ["assets/index-09cf43a8.js", "assets/web-03ca4527.js", "assets/banner-2634da2b.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/clock-057f9d07.js", "assets/rank-e0cbe579.js", "assets/store-2ed2b91e.js", "assets/match-260e9aba.js", "assets/axios-0719e63a.js", "assets/memoize-a925864b.js"]),
    o_ = () => _(() =>
        import ("./index-3721c09f.js"), ["assets/index-3721c09f.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/banner-2634da2b.js", "assets/store-2ed2b91e.js", "assets/rank-e0cbe579.js", "assets/match-260e9aba.js", "assets/axios-0719e63a.js", "assets/memoize-a925864b.js"]),
    i_ = () => _(() =>
        import ("./index-406bcccb.js"), ["assets/index-406bcccb.js", "assets/web-03ca4527.js", "assets/banner-2634da2b.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/store-2ed2b91e.js", "assets/match-260e9aba.js", "assets/axios-0719e63a.js", "assets/memoize-a925864b.js", "assets/store-07a457cb.js"]),
    e_ = () => _(() =>
        import ("./detail-94520f91.js"), ["assets/detail-94520f91.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js"]),
    r_ = () => _(() =>
        import ("./detail-413710c1.js"), ["assets/detail-413710c1.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js"]),
    n_ = () => _(() =>
        import ("./detail-fc8a6b4b.js"), ["assets/detail-fc8a6b4b.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    E_ = () => _(() =>
        import ("./detail-d83b13e7.js"), ["assets/detail-d83b13e7.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    s_ = () => _(() =>
        import ("./index-711e46f0.js"), ["assets/index-711e46f0.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/store-2ed2b91e.js", "assets/clock-057f9d07.js", "assets/solid-js-a6a72539.js", "assets/banner-2634da2b.js", "assets/match-260e9aba.js", "assets/axios-0719e63a.js", "assets/memoize-a925864b.js"]),
    d_ = () => _(() =>
        import ("./index-e67c5e3a.js"), ["assets/index-e67c5e3a.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/router-6469ef63.js"]),
    c_ = () => _(() =>
        import ("./index-4bee2260.js"), ["assets/index-4bee2260.js", "assets/web-03ca4527.js", "assets/banner-329874e8.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/store-2ed2b91e.js", "assets/line-r-1455548d.js"]),
    p_ = () => _(() =>
        import ("./index-be0e18c4.js"), ["assets/index-be0e18c4.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/banner-329874e8.js", "assets/store-2ed2b91e.js", "assets/faq-cc281057.js", "assets/faq-0d1db3ae.css", "assets/line-r-1455548d.js"]),
    v_ = () => _(() =>
        import ("./index-8b576119.js"), ["assets/index-8b576119.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/banner-329874e8.js", "assets/store-2ed2b91e.js", "assets/faq-cc281057.js", "assets/faq-0d1db3ae.css"]),
    D_ = () => _(() =>
        import ("./index-fa72de74.js"), ["assets/index-fa72de74.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/index-efe3badf.js", "assets/store-2ed2b91e.js", "assets/i18n-75922727.js", "assets/index-c42cafd7.js", "assets/browser-bec2257a.js", "assets/boost-record-1f41916c.js", "assets/dialog-box-ba3d2f2b.js", "assets/box-bg-b9e3f74a.js", "assets/withdraw-record-e00b3dc7.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/SpineAnimations-8ad9bc88.js", "assets/rules-cc85321c.js", "assets/index-97871749.css"]),
    u_ = () => _(() =>
        import ("./index-66ab0b49.js"), ["assets/index-66ab0b49.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/index-c42cafd7.js", "assets/solid-js-a6a72539.js", "assets/index-0e126123.css"]),
    m_ = () => _(() =>
        import ("./index-5d1819a7.js"), ["assets/index-5d1819a7.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/three-989fb724.js", "assets/index-ef8a8165.js"]),
    I_ = () => _(() =>
        import ("./Layout-f7d1b4d0.js"), ["assets/Layout-f7d1b4d0.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/router-6469ef63.js", "assets/assetsLogo-1e693bb4.js", "assets/i18n-75922727.js", "assets/Layout-5aec7f38.css"]),
    P_ = () => _(() =>
        import ("./index-f66eb8ce.js"), ["assets/index-f66eb8ce.js", "assets/web-03ca4527.js", "assets/assetsLogo-1e693bb4.js", "assets/router-6469ef63.js", "assets/index-76184800.css"]),
    L_ = () => _(() =>
        import ("./index-1c781876.js"), ["assets/index-1c781876.js", "assets/web-03ca4527.js", "assets/index-f66eb8ce.js", "assets/assetsLogo-1e693bb4.js", "assets/router-6469ef63.js", "assets/index-76184800.css"]),
    a_ = () => _(() =>
        import ("./index-82e6ba23.js"), ["assets/index-82e6ba23.js", "assets/web-03ca4527.js", "assets/index-3fd48be3.js", "assets/SpineAnimations-8ad9bc88.js", "assets/solid-js-a6a72539.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/banner3-1f504370.js", "assets/index-11fab1b3.css"]),
    l_ = () => _(() =>
        import ("./index-172859a7.js"), ["assets/index-172859a7.js", "assets/web-03ca4527.js", "assets/index-82e6ba23.js", "assets/index-3fd48be3.js", "assets/SpineAnimations-8ad9bc88.js", "assets/solid-js-a6a72539.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/banner3-1f504370.js", "assets/index-11fab1b3.css"]),
    R_ = () => _(() =>
        import ("./index-37af7c79.js"), ["assets/index-37af7c79.js", "assets/web-03ca4527.js", "assets/index-82e6ba23.js", "assets/index-3fd48be3.js", "assets/SpineAnimations-8ad9bc88.js", "assets/solid-js-a6a72539.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/banner3-1f504370.js", "assets/index-11fab1b3.css"]),
    A_ = () => _(() =>
        import ("./index-162273b4.js"), ["assets/index-162273b4.js", "assets/web-03ca4527.js", "assets/index-82e6ba23.js", "assets/index-3fd48be3.js", "assets/SpineAnimations-8ad9bc88.js", "assets/solid-js-a6a72539.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/banner3-1f504370.js", "assets/index-11fab1b3.css"]),
    T_ = () => _(() =>
        import ("./index-da9d7c80.js"), ["assets/index-da9d7c80.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/index-8f447f36.css"]),
    O_ = () => _(() =>
        import ("./index-21ed8766.js").then(e => e.c), ["assets/index-21ed8766.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/index-09f8aade.css"]),
    V_ = () => _(() =>
        import ("./index-1ab79045.js"), ["assets/index-1ab79045.js", "assets/web-03ca4527.js", "assets/banner3-1f504370.js", "assets/SpineAnimation-9ed37841.js", "assets/solid-js-a6a72539.js", "assets/runtime-3.8.es-2052f4fe.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/SpineAnimations-8ad9bc88.js", "assets/index-9233fb2c.css"]),
    g_ = () => _(() =>
        import ("./index-f15e95d9.js"), ["assets/index-f15e95d9.js", "assets/web-03ca4527.js", "assets/index-3fd48be3.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/assetsLogo-1e693bb4.js", "assets/index-bc333512.css"]),
    h_ = () => _(() =>
        import ("./index-15cb3969.js"), ["assets/index-15cb3969.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/index-21ed8766.js", "assets/index-09f8aade.css", "assets/router-6469ef63.js", "assets/index-c43a80ca.css"]),
    y_ = () => _(() =>
        import ("./Brazil-2ff9afd7.js"), ["assets/Brazil-2ff9afd7.js", "assets/web-03ca4527.js", "assets/SignUp-a16837d9.js", "assets/store-2ed2b91e.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/SignUp-064a32ae.css"]),
    f_ = () => _(() =>
        import ("./Sports-a322924e.js"), ["assets/Sports-a322924e.js", "assets/web-03ca4527.js", "assets/SignUp-a16837d9.js", "assets/store-2ed2b91e.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/SignUp-064a32ae.css"]),
    w_ = () => _(() =>
        import ("./index-bc3d5f61.js"), ["assets/index-bc3d5f61.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/index-a8ab0dc8.css"]),
    F_ = () => _(() =>
        import ("./index-74952450.js"), ["assets/index-74952450.js", "assets/web-03ca4527.js", "assets/index-bc3d5f61.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/index-a8ab0dc8.css"]),
    k_ = () => _(() =>
        import ("./index-243dd5be.js"), ["assets/index-243dd5be.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/index-b50c6100.js", "assets/solid-js-a6a72539.js", "assets/index-a59111b0.js", "assets/Header-403df825.js", "assets/assetsLogo-1e693bb4.js", "assets/router-6469ef63.js"]),
    S_ = () => _(() =>
        import ("./index-78e7464b.js"), ["assets/index-78e7464b.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/copy-c4e0864c.js"]),
    B_ = () => _(() =>
        import ("./eventDetail-9247014c.js"), ["assets/eventDetail-9247014c.js", "assets/web-03ca4527.js", "assets/router-6469ef63.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js"]),
    C_ = () => _(() =>
        import ("./Entery-d35241cf.js"), ["assets/Entery-d35241cf.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/index-b50c6100.js"]),
    W_ = () => _(() =>
        import ("./mydetails-310eccd6.js"), ["assets/mydetails-310eccd6.js", "assets/web-03ca4527.js", "assets/router-6469ef63.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/index-a59111b0.js"]),
    M_ = () => _(() =>
        import ("./index-2adaea76.js"), ["assets/index-2adaea76.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/index-c1f56b61.js", "assets/solid-js-a6a72539.js", "assets/index-bc69359b.js"]),
    z_ = () => _(() =>
        import ("./invite-282c5de5.js"), ["assets/invite-282c5de5.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/index-bc69359b.js"]),
    N_ = () => _(() =>
        import ("./detail-443a897d.js"), ["assets/detail-443a897d.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/index-bc69359b.js"]),
    H_ = () => _(() =>
        import ("./verify-d784f334.js"), ["assets/verify-d784f334.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/index-c1f56b61.js", "assets/verify_result-adff92bd.js", "assets/index-bc69359b.js"]),
    b_ = () => _(() =>
        import ("./s-detail-d5f0814b.js"), ["assets/s-detail-d5f0814b.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js"]),
    K_ = () => _(() =>
        import ("./index-17504e55.js"), ["assets/index-17504e55.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/createHtmlFile-c65d009a.js", "assets/router-6469ef63.js", "assets/parseHTML-aa0710ee.js", "assets/memoize-a925864b.js", "assets/store-2ed2b91e.js", "assets/LocalIcon-f88c1ac0.js", "assets/Tool-3513945f.js"]),
    U_ = () => _(() =>
        import ("./Cooldown-7d696baa.js"), ["assets/Cooldown-7d696baa.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/store-2ed2b91e.js", "assets/tips-a85dfd43.js", "assets/router-6469ef63.js"]),
    J_ = () => _(() =>
        import ("./index-6b53f589.js"), ["assets/index-6b53f589.js", "assets/web-03ca4527.js", "assets/Header-403df825.js", "assets/assetsLogo-1e693bb4.js", "assets/i18n-75922727.js", "assets/solid-js-a6a72539.js", "assets/index-82eede80.css"]),
    $_ = () => _(() =>
        import ("./SetLimit-f9d08ffb.js"), ["assets/SetLimit-f9d08ffb.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/tips-a85dfd43.js", "assets/Tool-3513945f.js"]),
    q_ = () => _(() =>
        import ("./limitsTips-2110c583.js"), ["assets/limitsTips-2110c583.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/i18n-75922727.js", "assets/memoize-a925864b.js"]),
    x_ = () => _(() =>
        import ("./index-5d6dfb3b.js"), ["assets/index-5d6dfb3b.js", "assets/web-03ca4527.js", "assets/solid-js-a6a72539.js", "assets/store-2ed2b91e.js", "assets/i18n-75922727.js", "assets/memoize-a925864b.js", "assets/___vite-browser-external_commonjs-proxy-b7934932.js", "assets/_commonjs-dynamic-modules-302442b1.js", "assets/index-4ea72d7b.css"]),
    Q_ = () => _(() =>
        import ("./boost-record-1f41916c.js"), ["assets/boost-record-1f41916c.js", "assets/web-03ca4527.js", "assets/dialog-box-ba3d2f2b.js", "assets/solid-js-a6a72539.js", "assets/box-bg-b9e3f74a.js", "assets/index-efe3badf.js", "assets/store-2ed2b91e.js", "assets/i18n-75922727.js"]),
    j_ = () => _(() =>
        import ("./withdraw-record-e00b3dc7.js"), ["assets/withdraw-record-e00b3dc7.js", "assets/web-03ca4527.js", "assets/dialog-box-ba3d2f2b.js", "assets/solid-js-a6a72539.js", "assets/box-bg-b9e3f74a.js", "assets/i18n-75922727.js", "assets/index-efe3badf.js", "assets/store-2ed2b91e.js"]),
    G_ = () => _(() =>
        import ("./withdraw-rank-8e0e634b.js"), ["assets/withdraw-rank-8e0e634b.js", "assets/web-03ca4527.js", "assets/box-bg-b9e3f74a.js"]),
    X_ = () => _(() =>
        import ("./share-b9796eae.js"), ["assets/share-b9796eae.js", "assets/web-03ca4527.js", "assets/i18n-75922727.js", "assets/copy-c4e0864c.js", "assets/solid-js-a6a72539.js", "assets/index-efe3badf.js", "assets/store-2ed2b91e.js", "assets/dialog-box-ba3d2f2b.js", "assets/box-bg-b9e3f74a.js", "assets/browser-bec2257a.js"]),
    Y_ = () => _(() =>
        import ("./rules-cc85321c.js"), ["assets/rules-cc85321c.js", "assets/web-03ca4527.js", "assets/dialog-box-ba3d2f2b.js", "assets/solid-js-a6a72539.js", "assets/box-bg-b9e3f74a.js", "assets/i18n-75922727.js"]),
    _t = m({
        init: () => _(() =>
            import ("./init-a12070ea.js"), []),
        limitsTips: q_,
        Festival: m_,
        Layout: I,
        HelpCenter: P,
        OneDollarCheck: a,
        WalletType: l,
        PrivacyDialog: R,
        BonusTCDialog: A,
        Sponsorship: L,
        VerifyRepresentative: T,
        HelpPage: O,
        Premier: V,
        PremierEventDetail: C,
        NewEventLottery: g,
        LotteryEventDetail: K,
        FestivalEventDetail: W,
        FestivalWeekOneDetail: M,
        FestivalWeekTwoDetail: z,
        FestivalWeekThreeDetail: N,
        FestivalWeekFourDetail: H,
        FestivalPrizeRatioDetail: b,
        Brazil: S,
        EventSports: B,
        BrazilEventDetail: U,
        BrazilVerify: J,
        FestivalInvite: x,
        BrazilInvite: $,
        WuKongInvite: q,
        KongViewDetail: Q,
        KongCashDetail: G,
        KongPrizeDetail: j,
        Journal: u_,
        IndiaPdd: S_,
        LandingIndia: P_,
        LandingJapan: a_,
        LandingIndiaSports: L_,
        Landing50tilt50: l_,
        LandingCasinoOnLine: R_,
        LandingJpcasino: A_,
        LandingAff: T_,
        LandingCryptoSpin: O_,
        LandingLayout: I_,
        Payment: g_,
        Luckyspin: h_,
        LandingSpineDemo: V_,
        BrazilSports: y_,
        Sports: f_,
        Sport: w_,
        Esport: F_,
        Mining: k_,
        MiningEventDetail: B_,
        MiningMyBetDetail: W_,
        MiningEnter: C_,
        NewMining: M_,
        NewMiningInvite: z_,
        NewMiningDetail: N_,
        NewMiningVerify: H_,
        NewMiningEventDetail: b_,
        Ucl: h,
        Qtds: y,
        UclHistory: k,
        Ipl: X,
        IplHome: Y,
        IplHomeEventDetail: Z,
        IplInvite: __,
        IplDaily: i_,
        IplDailyDetail: e_,
        IplRankDetail: n_,
        IplPredictionDetail: E_,
        IplPoolDetail: r_,
        IplPrizePool: t_,
        IplRank: o_,
        IplPrediction: s_,
        AirDrop: f,
        AirDropCheck: w,
        AirDropShare: F,
        ResponsibleLayout: K_,
        Cooldown: U_,
        AppDownload: J_,
        FIFA: d_,
        FIFAChampion: p_,
        FIFADaily: v_,
        FIFAHome: c_,
        SetLimit: $_,
        Bitcoin: x_,
        Pdd: D_,
        PddBoostRecord: Q_,
        PddWithdrawRecord: j_,
        PddWithdrawRank: G_,
        PddRule: Y_,
        PddShare: X_
    });
export {
    _,
    _t as m
};