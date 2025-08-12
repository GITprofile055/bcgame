const D = "modulepreload",
    d = function(i) {
        return "/modules/wallet2/" + i
    },
    l = {},
    e = function(n, _, u) {
        if (!_ || _.length === 0) return n();
        const c = document.getElementsByTagName("link");
        return Promise.all(_.map(t => {
            if (t = d(t), t in l) return;
            l[t] = !0;
            const o = t.endsWith(".css"),
                E = o ? '[rel="stylesheet"]' : "";
            if (!!u)
                for (let a = c.length - 1; a >= 0; a--) {
                    const s = c[a];
                    if (s.href === t && (!o || s.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${t}"]${E}`)) return;
            const r = document.createElement("link");
            if (r.rel = o ? "stylesheet" : D, o || (r.as = "script", r.crossOrigin = ""), r.href = t, document.head.appendChild(r), o) return new Promise((a, s) => {
                r.addEventListener("load", a), r.addEventListener("error", () => s(new Error(`Unable to preload CSS for ${t}`)))
            })
        })).then(() => n()).catch(t => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = t, window.dispatchEvent(o), !o.defaultPrevented) throw t
        })
    },
    p = globalThis._bc,
    {
        A: ue,
        Accordion: Ee,
        ActiveAvatar: De,
        ActiveProvider: de,
        App: pe,
        Badge: me,
        Breadcrumb: ve,
        Button: ge,
        Carousel: Le,
        Checkbox: Re,
        Collapsible: Te,
        DatePicker: Pe,
        Decimal: Ae,
        Dialog: Ie,
        DropDown: Oe,
        Each: Ve,
        Empty: he,
        FlatList: Se,
        GridScrollList: ye,
        Icon: Ce,
        ImageX: fe,
        Input: be,
        Intros: we,
        KeepScroll: ke,
        Layout: Be,
        LazyList: We,
        ListView: Ne,
        Loading: Me,
        Long: xe,
        Meta: Ue,
        MetaProvider: He,
        MultiSelect: ze,
        Notice: Ge,
        NumberInput: Fe,
        Occurrence: Ke,
        PQuery: Qe,
        Pagination: $e,
        Pop: je,
        PopProvider: qe,
        QueueRender: Xe,
        Radio: Je,
        Ref: Ye,
        Refs: Ze,
        ScrollView: et,
        Scrollbar: tt,
        Select: ot,
        Slider: it,
        SmoothList: rt,
        SmoothListController: at,
        Sticky: st,
        Switch: _t,
        TMCLayout: nt,
        Tabs: ct,
        ToastProvider: lt,
        Toggle: ut,
        ToggleView: Et,
        Tooltip: Dt,
        Transition: dt,
        UserTitle: pt,
        access: mt,
        account: vt,
        accountInit: gt,
        addUserReceiptEvent: Lt,
        animate: Rt,
        app: Tt,
        asyncQueue: Pt,
        authGuard: At,
        batchRouteDefinition: It,
        bc: Ot,
        bcdResource: Vt,
        createCallback: ht,
        createClickOutside: St,
        createControllableSignal: yt,
        createCountdown: Ct,
        createCss: ft,
        createDisposable: bt,
        createElementSize: wt,
        createEmitter: kt,
        createEventListener: Bt,
        createEventListenerMap: Wt,
        createI18n: Nt,
        createImgix: Mt,
        createIntersectionObserver: xt,
        createIsMounted: Ut,
        createKeyHold: Ht,
        createListTransition: zt,
        createNoSuspense: Gt,
        createPaginationResource: Ft,
        createRemote: m,
        createResizeObserver: Kt,
        createRootPool: Qt,
        createScheduled: $t,
        createSingletonRoot: jt,
        createSubRoot: qt,
        createSwitchTransition: Xt,
        createTimer: Jt,
        createTween: Yt,
        createViewportObserver: Zt,
        createVisibilityObserver: eo,
        createWindowSize: to,
        currentDepositResource: oo,
        cx: io,
        debounce: ro,
        deduction: ao,
        env: so,
        getDepositBonusConfig: _o,
        getHttp: no,
        getNextDepositOption: co,
        getNextDepositSoleOption: lo,
        getShareLinks: uo,
        getSocket: Eo,
        gsap: Do,
        initShumeiSmid: po,
        leading: mo,
        leadingAndTrailing: vo,
        makePersisted: go,
        mergeRefs: Lo,
        pop: Ro,
        protobuf: To,
        registHttpReject: Po,
        registWhiteList: Ao,
        requestRecaptcha: Io,
        resolveElements: Oo,
        resolveFirst: Vo,
        resolveRemote: ho,
        selectRedDot: So,
        setAccount: yo,
        setEnv: Co,
        setLang: fo,
        setSetting: bo,
        setWallet: wo,
        setting: ko,
        storageSync: Bo,
        syncAccount: Wo,
        system: No,
        systemUtils: Mo,
        throttle: xo,
        toast: Uo,
        until: Ho,
        untilLogin: zo,
        useActiveMemo: Go,
        useBeforeLeave: Fo,
        useFlatItem: Ko,
        useGlobalComponent: Qo,
        useIsActive: $o,
        useKeyDownEvent: jo,
        useLoginCallback: qo,
        useMeta: Xo,
        useNavigate: Jo,
        useNavigatePromise: Yo,
        useNavigatePromiseEnter: Zo,
        useReferrer: ei,
        useResource: ti,
        useRouterStack: oi,
        useScrollElement: ii,
        useScrollTop: ri,
        user: ai,
        utils: si,
        wallet: _i,
        withDirection: ni,
        withOccurrence: ci,
        wrUtils: li
    } = p.fcsy,
    v = () => e(() =>
        import ("./index-85077c39.js"), ["assets/index-85077c39.js", "assets/web-6f548a65.js", "assets/SelectCurrency-12f07ebb.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/WalletIcon-7f224d55.js", "assets/LocalAmountItem-4a05a488.js", "assets/wallet-7f8b24d6.js", "assets/store-2ed2b91e.js", "assets/groupBy-561a1d1b.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/orderBy-5c362847.js", "assets/partition-2026ff9f.js", "assets/OTCBalance-6f50cafd.js"]),
    g = () => e(() =>
        import ("./index-fc9f9710.js"), ["assets/index-fc9f9710.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/WalletIcon-7f224d55.js", "assets/i18n-bbd6bada.js", "assets/index-7449758d.js"]),
    L = () => e(() =>
        import ("./AboutBcd-f304c980.js"), ["assets/AboutBcd-f304c980.js", "assets/web-6f548a65.js", "assets/i18n-bbd6bada.js", "assets/WalletIcon-7f224d55.js", "assets/solid-js-fd4ba123.js"]),
    R = () => e(() =>
        import ("./AboutBc-2b882269.js"), ["assets/AboutBc-2b882269.js", "assets/web-6f548a65.js", "assets/WalletIcon-7f224d55.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js"]),
    T = () => e(() =>
        import ("./ManageAssets-fb873d7c.js"), ["assets/ManageAssets-fb873d7c.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/WalletIcon-7f224d55.js", "assets/i18n-bbd6bada.js", "assets/groupBy-561a1d1b.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/sortBy-96ef160a.js"]),
    P = () => e(() =>
        import ("./index-dfa2079d.js").then(i => i.i), ["assets/index-dfa2079d.js", "assets/web-6f548a65.js", "assets/index-0ec47a13.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/store-2ed2b91e.js", "assets/WalletIcon-7f224d55.js", "assets/CircleCountdown-60ecf512.js", "assets/SolanaTips-6f9b3853.js", "assets/router-f73ec727.js", "assets/wallet-7f8b24d6.js", "assets/Icon-5531a61c.js", "assets/api-6d5fa894.js", "assets/useCommonPostPR-b629c60a.js", "assets/Purview-0e37dcae.js", "assets/Utr-789cabf9.js", "assets/CopyInput-b59a46d5.js", "assets/clipboard-8b932860.js", "assets/Qrcode-217f82b0.js", "assets/api-0baceaaa.js", "assets/find-bc13ea76.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/toNumber-880e7047.js", "assets/clock-13f28ac0.js", "assets/sortBy-96ef160a.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/groupBy-561a1d1b.js", "assets/ProgressNode-7ba776cd.js", "assets/Loading-d6f854e9.js", "assets/OTCBalance-6f50cafd.js", "assets/OTCWithdraw-29f19697.js", "assets/debounce-7b272435.js", "assets/SelectCurrency-12f07ebb.js", "assets/LocalAmountItem-4a05a488.js", "assets/orderBy-5c362847.js", "assets/partition-2026ff9f.js", "assets/ErrorRest-4b81640b.js"]),
    A = () => e(() =>
        import ("./index-37cb0e21.js"), ["assets/index-37cb0e21.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/WalletIcon-7f224d55.js", "assets/i18n-bbd6bada.js", "assets/wallet-7f8b24d6.js", "assets/store-2ed2b91e.js", "assets/Qrcode-217f82b0.js", "assets/index-f9028a5c.js", "assets/Purview-0e37dcae.js", "assets/Utr-789cabf9.js", "assets/CopyInput-b59a46d5.js", "assets/clipboard-8b932860.js", "assets/Icon-5531a61c.js", "assets/api-0baceaaa.js", "assets/useCommonPostPR-b629c60a.js", "assets/find-bc13ea76.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/toNumber-880e7047.js", "assets/clock-13f28ac0.js", "assets/sortBy-96ef160a.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/groupBy-561a1d1b.js", "assets/ProgressNode-7ba776cd.js", "assets/SolanaTips-6f9b3853.js", "assets/router-f73ec727.js", "assets/index-7449758d.js", "assets/Loading-d6f854e9.js", "assets/orderBy-5c362847.js", "assets/ErrorRest-4b81640b.js", "assets/SelectCurrency-12f07ebb.js", "assets/LocalAmountItem-4a05a488.js", "assets/partition-2026ff9f.js", "assets/SevenDayPayBanner-16b52b11.js", "assets/index-903d6228.css", "assets/index-dfa2079d.js", "assets/index-0ec47a13.js", "assets/CircleCountdown-60ecf512.js", "assets/api-6d5fa894.js", "assets/OTCBalance-6f50cafd.js", "assets/OTCWithdraw-29f19697.js", "assets/debounce-7b272435.js"]),
    I = () => e(() =>
        import ("./index-f9028a5c.js").then(i => i.j), ["assets/index-f9028a5c.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/Purview-0e37dcae.js", "assets/i18n-bbd6bada.js", "assets/Utr-789cabf9.js", "assets/WalletIcon-7f224d55.js", "assets/CopyInput-b59a46d5.js", "assets/clipboard-8b932860.js", "assets/Icon-5531a61c.js", "assets/Qrcode-217f82b0.js", "assets/api-0baceaaa.js", "assets/useCommonPostPR-b629c60a.js", "assets/find-bc13ea76.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/toNumber-880e7047.js", "assets/store-2ed2b91e.js", "assets/clock-13f28ac0.js", "assets/sortBy-96ef160a.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/groupBy-561a1d1b.js", "assets/wallet-7f8b24d6.js", "assets/ProgressNode-7ba776cd.js", "assets/SolanaTips-6f9b3853.js", "assets/router-f73ec727.js", "assets/index-7449758d.js", "assets/Loading-d6f854e9.js", "assets/orderBy-5c362847.js", "assets/ErrorRest-4b81640b.js", "assets/SelectCurrency-12f07ebb.js", "assets/LocalAmountItem-4a05a488.js", "assets/partition-2026ff9f.js", "assets/SevenDayPayBanner-16b52b11.js", "assets/index-903d6228.css"]),
    O = () => e(() =>
        import ("./index-f721453e.js"), ["assets/index-f721453e.js", "assets/web-6f548a65.js", "assets/i18n-bbd6bada.js", "assets/solid-js-fd4ba123.js", "assets/api-614b5d22.js", "assets/useCommonPostPR-b629c60a.js", "assets/store-2ed2b91e.js", "assets/LocalAmountItem-4a05a488.js", "assets/router-f73ec727.js", "assets/WalletIcon-7f224d55.js", "assets/ErrorRest-4b81640b.js"]),
    V = () => e(() =>
        import ("./index-a6b0c4c2.js"), ["assets/index-a6b0c4c2.js", "assets/web-6f548a65.js", "assets/i18n-bbd6bada.js", "assets/WalletIcon-7f224d55.js", "assets/solid-js-fd4ba123.js", "assets/store-2ed2b91e.js", "assets/LocalAmountItem-4a05a488.js", "assets/wallet-7f8b24d6.js", "assets/CircleCountdown-60ecf512.js", "assets/router-f73ec727.js", "assets/api-d15d3ff0.js", "assets/useCommonPostPR-b629c60a.js", "assets/find-bc13ea76.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/toNumber-880e7047.js"]),
    h = () => e(() =>
        import ("./index-178636ad.js"), ["assets/index-178636ad.js", "assets/web-6f548a65.js", "assets/Header-17a8c534.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/store-2ed2b91e.js", "assets/Form-02b6819e.js", "assets/router-f73ec727.js", "assets/wallet-7f8b24d6.js", "assets/SelectCurrency-12f07ebb.js", "assets/WalletIcon-7f224d55.js", "assets/LocalAmountItem-4a05a488.js", "assets/groupBy-561a1d1b.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/orderBy-5c362847.js", "assets/partition-2026ff9f.js"]),
    S = () => e(() =>
        import ("./DiaLogTransfer-a83cc22d.js"), ["assets/DiaLogTransfer-a83cc22d.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/Form-02b6819e.js", "assets/router-f73ec727.js", "assets/i18n-bbd6bada.js", "assets/store-2ed2b91e.js", "assets/wallet-7f8b24d6.js", "assets/SelectCurrency-12f07ebb.js", "assets/WalletIcon-7f224d55.js", "assets/LocalAmountItem-4a05a488.js", "assets/groupBy-561a1d1b.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/orderBy-5c362847.js", "assets/partition-2026ff9f.js"]),
    y = () => e(() =>
        import ("./Interests-6a080a06.js"), ["assets/Interests-6a080a06.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/Table-3e04ed09.js", "assets/ErrorRest-4b81640b.js", "assets/WalletIcon-7f224d55.js", "assets/useCommonPostPR-b629c60a.js"]),
    C = () => e(() =>
        import ("./AddCard-f52a69e3.js"), ["assets/AddCard-f52a69e3.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/WalletNotice-735b066a.js", "assets/i18n-bbd6bada.js", "assets/delete_icon-f8537dce.js"]),
    f = () => e(() =>
        import ("./AddBank-db490119.js"), ["assets/AddBank-db490119.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/router-f73ec727.js", "assets/i18n-bbd6bada.js", "assets/delete_icon-f8537dce.js"]),
    b = () => e(() =>
        import ("./CurrencyConfig-a3216fcc.js"), ["assets/CurrencyConfig-a3216fcc.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/router-f73ec727.js"]),
    w = () => e(() =>
        import ("./index-ce2a4279.js"), ["assets/index-ce2a4279.js", "assets/web-6f548a65.js", "assets/index-9a09edf1.js", "assets/solid-js-fd4ba123.js", "assets/Loading-d6f854e9.js", "assets/Assets-00a45dd5.js", "assets/i18n-bbd6bada.js", "assets/index-7449758d.js", "assets/router-f73ec727.js", "assets/orderBy-5c362847.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/toString-5b1e5804.js", "assets/_baseIteratee-23236ec6.js", "assets/Table-3e04ed09.js", "assets/ErrorRest-4b81640b.js", "assets/WalletIcon-7f224d55.js", "assets/Time-84e70d4c.js", "assets/debounce-7b272435.js", "assets/toNumber-880e7047.js"]),
    k = () => e(() =>
        import ("./index-553e94c6.js"), ["assets/index-553e94c6.js", "assets/web-6f548a65.js", "assets/index-9a09edf1.js", "assets/solid-js-fd4ba123.js", "assets/Loading-d6f854e9.js", "assets/Assets-00a45dd5.js", "assets/i18n-bbd6bada.js", "assets/index-7449758d.js", "assets/router-f73ec727.js", "assets/orderBy-5c362847.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/toString-5b1e5804.js", "assets/_baseIteratee-23236ec6.js", "assets/Time-84e70d4c.js", "assets/debounce-7b272435.js", "assets/toNumber-880e7047.js", "assets/Bill-cb88a1d5.js", "assets/WalletIcon-7f224d55.js", "assets/Table-3e04ed09.js", "assets/ErrorRest-4b81640b.js", "assets/clipboard-8b932860.js", "assets/useCommonPostPR-b629c60a.js", "assets/api-d15d3ff0.js", "assets/getWithdrawOrderStatus-755535c5.js", "assets/api-6d5fa894.js", "assets/index-b55eb4b3.js", "assets/getDepositOrderStatus-3511eabc.js", "assets/Utr-789cabf9.js", "assets/CopyInput-b59a46d5.js", "assets/Icon-5531a61c.js", "assets/Qrcode-217f82b0.js", "assets/api-0baceaaa.js", "assets/api-614b5d22.js", "assets/index-5111f55d.js"]),
    B = () => e(() =>
        import ("./index-c7f567de.js"), ["assets/index-c7f567de.js", "assets/web-6f548a65.js", "assets/index-9a09edf1.js", "assets/solid-js-fd4ba123.js", "assets/Loading-d6f854e9.js", "assets/i18n-bbd6bada.js", "assets/Details-79954aa5.js", "assets/Cancel-5ed0323e.js", "assets/WalletIcon-7f224d55.js", "assets/router-f73ec727.js", "assets/Table-3e04ed09.js", "assets/ErrorRest-4b81640b.js", "assets/useCommonPostPR-b629c60a.js"]),
    W = () => e(() =>
        import ("./index-c7f567de.js"), ["assets/index-c7f567de.js", "assets/web-6f548a65.js", "assets/index-9a09edf1.js", "assets/solid-js-fd4ba123.js", "assets/Loading-d6f854e9.js", "assets/i18n-bbd6bada.js", "assets/Details-79954aa5.js", "assets/Cancel-5ed0323e.js", "assets/WalletIcon-7f224d55.js", "assets/router-f73ec727.js", "assets/Table-3e04ed09.js", "assets/ErrorRest-4b81640b.js", "assets/useCommonPostPR-b629c60a.js"]),
    N = () => e(() =>
        import ("./index-52b276e9.js"), ["assets/index-52b276e9.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/router-f73ec727.js", "assets/store-7c20286e.js", "assets/TicketInfo-bba8dd50.js", "assets/WalletIcon-7f224d55.js", "assets/getWithdrawOrderStatus-755535c5.js", "assets/LabelItem-1a602c54.js", "assets/clipboard-8b932860.js", "assets/ProgressNode-7ba776cd.js", "assets/Qrcode-217f82b0.js", "assets/OTCBalance-6f50cafd.js", "assets/OTCWithdraw-29f19697.js", "assets/getDepositOrderStatus-3511eabc.js", "assets/clock-13f28ac0.js", "assets/store-2ed2b91e.js", "assets/WalletNotice-735b066a.js", "assets/SevenDayPayBanner-16b52b11.js", "assets/api-0baceaaa.js", "assets/useCommonPostPR-b629c60a.js"]),
    M = () => e(() =>
        import ("./index-5111f55d.js"), ["assets/index-5111f55d.js", "assets/web-6f548a65.js", "assets/i18n-bbd6bada.js", "assets/solid-js-fd4ba123.js", "assets/WalletIcon-7f224d55.js", "assets/Loading-d6f854e9.js", "assets/CopyInput-b59a46d5.js", "assets/clipboard-8b932860.js", "assets/router-f73ec727.js"]),
    x = () => e(() =>
        import ("./index-2a029833.js"), ["assets/index-2a029833.js", "assets/web-6f548a65.js", "assets/i18n-bbd6bada.js", "assets/solid-js-fd4ba123.js", "assets/router-f73ec727.js", "assets/Loading-d6f854e9.js", "assets/TicketInfo-bba8dd50.js", "assets/WalletIcon-7f224d55.js", "assets/getWithdrawOrderStatus-755535c5.js", "assets/clipboard-8b932860.js", "assets/api-6d5fa894.js", "assets/useCommonPostPR-b629c60a.js", "assets/ProgressNode-7ba776cd.js", "assets/OTCBalance-6f50cafd.js"]),
    U = () => e(() =>
        import ("./index-d6178c7b.js"), ["assets/index-d6178c7b.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/router-f73ec727.js"]),
    H = () => e(() =>
        import ("./index-939a149a.js"), ["assets/index-939a149a.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/router-f73ec727.js", "assets/Loading-d6f854e9.js", "assets/store-2ed2b91e.js", "assets/LabelItem-1a602c54.js", "assets/clipboard-8b932860.js", "assets/WalletIcon-7f224d55.js", "assets/getWithdrawOrderStatus-755535c5.js", "assets/getDepositOrderStatus-3511eabc.js", "assets/index-97182f6e.js", "assets/api-6d5fa894.js", "assets/useCommonPostPR-b629c60a.js", "assets/api-0baceaaa.js"]),
    z = () => e(() =>
        import ("./Details-79954aa5.js").then(i => i.D), ["assets/Details-79954aa5.js", "assets/web-6f548a65.js", "assets/Cancel-5ed0323e.js", "assets/i18n-bbd6bada.js", "assets/WalletIcon-7f224d55.js", "assets/solid-js-fd4ba123.js", "assets/router-f73ec727.js"]),
    G = () => e(() =>
        import ("./GameList-bfcb1d8d.js"), ["assets/GameList-bfcb1d8d.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/router-f73ec727.js"]),
    F = () => e(() =>
        import ("./LinkDetail-c65425c5.js"), ["assets/LinkDetail-c65425c5.js", "assets/web-6f548a65.js", "assets/Cancel-5ed0323e.js", "assets/i18n-bbd6bada.js", "assets/WalletIcon-7f224d55.js", "assets/solid-js-fd4ba123.js", "assets/router-f73ec727.js"]),
    K = () => e(() =>
        import ("./index-2461526a.js"), ["assets/index-2461526a.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/router-f73ec727.js", "assets/i18n-bbd6bada.js", "assets/index-47e6eabb.js", "assets/store-2ed2b91e.js", "assets/data-aad419fc.js", "assets/store-614dd174.js", "assets/Icon-5531a61c.js"]),
    Q = () => e(() =>
        import ("./Overview-ed471073.js"), ["assets/Overview-ed471073.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/Chart-594bc519.js", "assets/Icon-5531a61c.js", "assets/index-47e6eabb.js", "assets/store-2ed2b91e.js", "assets/data-aad419fc.js", "assets/store-614dd174.js"]),
    $ = () => e(() =>
        import ("./index-42560fad.js"), ["assets/index-42560fad.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/store-2ed2b91e.js", "assets/i18n-bbd6bada.js", "assets/Chart-594bc519.js", "assets/Icon-5531a61c.js", "assets/index-47e6eabb.js", "assets/data-aad419fc.js", "assets/store-614dd174.js"]),
    j = () => e(() =>
        import ("./index-3bd8a647.js"), ["assets/index-3bd8a647.js", "assets/web-6f548a65.js", "assets/Header-17a8c534.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/store-2ed2b91e.js", "assets/Form-02b6819e.js", "assets/router-f73ec727.js", "assets/wallet-7f8b24d6.js", "assets/SelectCurrency-12f07ebb.js", "assets/WalletIcon-7f224d55.js", "assets/LocalAmountItem-4a05a488.js", "assets/groupBy-561a1d1b.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/orderBy-5c362847.js", "assets/partition-2026ff9f.js", "assets/Time-84e70d4c.js", "assets/debounce-7b272435.js", "assets/toNumber-880e7047.js", "assets/Bill-cb88a1d5.js", "assets/Table-3e04ed09.js", "assets/ErrorRest-4b81640b.js", "assets/clipboard-8b932860.js", "assets/useCommonPostPR-b629c60a.js", "assets/Loading-d6f854e9.js"]),
    q = () => e(() =>
        import ("./Entry-4e0cd542.js"), ["assets/Entry-4e0cd542.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/Icon-5531a61c.js", "assets/store-614dd174.js", "assets/store-2ed2b91e.js", "assets/data-aad419fc.js"]),
    X = () => e(() =>
        import ("./Lottery-2902f832.js"), ["assets/Lottery-2902f832.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/store-614dd174.js", "assets/store-2ed2b91e.js", "assets/partition-2026ff9f.js", "assets/groupBy-561a1d1b.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/orderBy-5c362847.js"]),
    J = () => e(() =>
        import ("./win-list-8699d2ee.js"), ["assets/win-list-8699d2ee.js", "assets/web-6f548a65.js", "assets/i18n-bbd6bada.js", "assets/solid-js-fd4ba123.js", "assets/store-614dd174.js", "assets/store-2ed2b91e.js"]),
    Y = () => e(() =>
        import ("./SelectCurrency-12f07ebb.js"), ["assets/SelectCurrency-12f07ebb.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/WalletIcon-7f224d55.js", "assets/LocalAmountItem-4a05a488.js", "assets/wallet-7f8b24d6.js", "assets/store-2ed2b91e.js", "assets/groupBy-561a1d1b.js", "assets/_baseIteratee-23236ec6.js", "assets/toString-5b1e5804.js", "assets/_baseOrderBy-4e45c7cb.js", "assets/orderBy-5c362847.js", "assets/partition-2026ff9f.js"]),
    Z = () => e(() =>
        import ("./Intercept-5449a8ce.js"), ["assets/Intercept-5449a8ce.js", "assets/web-6f548a65.js", "assets/i18n-bbd6bada.js", "assets/router-f73ec727.js"]),
    ee = () => e(() =>
        import ("./Verify-f7825622.js"), ["assets/Verify-f7825622.js", "assets/web-6f548a65.js", "assets/Progress-8ba911dc.js", "assets/i18n-bbd6bada.js", "assets/solid-js-fd4ba123.js"]),
    te = () => e(() =>
        import ("./AccountVerify-70778ae3.js"), ["assets/AccountVerify-70778ae3.js", "assets/web-6f548a65.js", "assets/Progress-8ba911dc.js", "assets/i18n-bbd6bada.js", "assets/solid-js-fd4ba123.js"]),
    oe = () => e(() =>
        import ("./WhatDeposit-b4f0fcb4.js"), ["assets/WhatDeposit-b4f0fcb4.js", "assets/web-6f548a65.js", "assets/i18n-bbd6bada.js", "assets/solid-js-fd4ba123.js", "assets/router-f73ec727.js"]),
    ie = () => e(() =>
        import ("./WhatWithdraw-2f3ee542.js"), ["assets/WhatWithdraw-2f3ee542.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/wallet-7f8b24d6.js", "assets/store-2ed2b91e.js"]),
    re = () => e(() =>
        import ("./WithdrawConfirm-5361b4b0.js"), ["assets/WithdrawConfirm-5361b4b0.js", "assets/web-6f548a65.js", "assets/router-f73ec727.js", "assets/solid-js-fd4ba123.js", "assets/SolanaTips-6f9b3853.js", "assets/i18n-bbd6bada.js", "assets/wallet-7f8b24d6.js", "assets/store-2ed2b91e.js", "assets/index-0ec47a13.js", "assets/WalletIcon-7f224d55.js", "assets/CircleCountdown-60ecf512.js", "assets/Icon-5531a61c.js", "assets/api-6d5fa894.js", "assets/useCommonPostPR-b629c60a.js"]),
    ae = () => e(() =>
        import ("./WagerTasks-657cb664.js"), ["assets/WagerTasks-657cb664.js", "assets/web-6f548a65.js", "assets/i18n-bbd6bada.js", "assets/Table-3e04ed09.js", "assets/solid-js-fd4ba123.js", "assets/ErrorRest-4b81640b.js", "assets/WalletIcon-7f224d55.js", "assets/useCommonPostPR-b629c60a.js", "assets/Details-79954aa5.js", "assets/Cancel-5ed0323e.js", "assets/router-f73ec727.js"]),
    se = () => e(() =>
        import ("./Info-6e30a34e.js"), ["assets/Info-6e30a34e.js", "assets/web-6f548a65.js", "assets/LabelItem-1a602c54.js", "assets/solid-js-fd4ba123.js", "assets/clipboard-8b932860.js", "assets/i18n-bbd6bada.js", "assets/store-7c20286e.js", "assets/SevenDayPayBanner-16b52b11.js", "assets/WalletIcon-7f224d55.js", "assets/api-0baceaaa.js", "assets/useCommonPostPR-b629c60a.js", "assets/index-b55eb4b3.js", "assets/Table-3e04ed09.js", "assets/ErrorRest-4b81640b.js", "assets/getDepositOrderStatus-3511eabc.js", "assets/Utr-789cabf9.js", "assets/CopyInput-b59a46d5.js", "assets/Icon-5531a61c.js", "assets/Qrcode-217f82b0.js", "assets/router-f73ec727.js"]),
    _e = () => e(() =>
        import ("./index-46b29697.js"), ["assets/index-46b29697.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js", "assets/store-7c20286e.js", "assets/router-f73ec727.js", "assets/WalletIcon-7f224d55.js", "assets/api-0baceaaa.js", "assets/useCommonPostPR-b629c60a.js"]),
    ne = () => e(() =>
        import ("./index-7879e9aa.js"), ["assets/index-7879e9aa.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/i18n-bbd6bada.js"]),
    ce = () => e(() =>
        import ("./index-13746469.js"), ["assets/index-13746469.js", "assets/web-6f548a65.js", "assets/solid-js-fd4ba123.js", "assets/router-f73ec727.js", "assets/i18n-bbd6bada.js", "assets/index-97182f6e.js", "assets/WalletIcon-7f224d55.js", "assets/store-2ed2b91e.js", "assets/toString-5b1e5804.js"]),
    ui = m({
        init: () => e(() =>
            import ("./init-5056bea4.js"), []),
        Annual: ne,
        Balance: v,
        WalletLayout: g,
        DialogAboutBCD: L,
        DialogAboutBC: R,
        DialogWithdraw: P,
        DialogDeposit: I,
        DialogChannelDeposit: A,
        DialogBuyCrypto: O,
        DialogSwap: V,
        DialogVault: h,
        DialogVaultTransfer: S,
        DialogTurnover: B,
        DialogTurnover2: W,
        DialogTransaction: k,
        DialogBetHistory: w,
        DialogManageAssets: T,
        BcTokenLayout: K,
        BCTokenOverview: Q,
        BCTokenSwap: $,
        BCTokenVault: j,
        BCTokenEntry: q,
        BCTokenLottery: X,
        BCTokenLotteryWinList: J,
        DialogCard: C,
        DialogTransactionDepositDetail: N,
        DialogTransactionWithDrawDetail: x,
        DialogRate: U,
        DialogDraft: H,
        DialogInterests: y,
        openSelectCurrency: Y,
        DialogRollDetail: z,
        DialogRollLinkDetail: F,
        DialogBuyDetail: M,
        DialogRollGameList: G,
        DialogBank: f,
        DialogIntercept: Z,
        DialogCurrencyConfig: b,
        DialogWhatDeposit: oe,
        DialogWhatWithDraw: ie,
        DialogBankVerify: te,
        DialogCardVerify: ee,
        DialogWithdrawConfirm: re,
        DialogWagerTasks: ae,
        installDepositBub: _e,
        DialogPendingHistory: se,
        DialogChatSubmission: ce
    });
export {
    Pe as $, ue as A, ge as B, lo as C, Ae as D, he as E, Lt as F, ti as G, oi as H, be as I, Ct as J, co as K, Me as L, Jt as M, Fe as N, Gt as O, je as P, Re as Q, yo as R, st as S, Dt as T, Je as U, Ft as V, ai as W, Te as X, dt as Y, Ee as Z, e as _, nt as a, ut as a0, ii as a1, Nt as a2, Ne as a3, go as a4, Bo as a5, To as a6, Le as a7, Do as a8, to as a9, ft as aa, ui as ab, Ie as b, io as c, ko as d, so as e, ct as f, _t as g, wo as h, Ot as i, no as j, Eo as k, $o as l, Ce as m, Et as n, vt as o, Ro as p, Tt as q, ot as r, Mo as s, Uo as t, Jo as u, Ge as v, _i as w, Oe as x, si as y, oo as z
};