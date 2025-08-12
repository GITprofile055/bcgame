var E = (l, _, i) => new Promise((d, a) => {
    var t = s => {
            try {
                n(i.next(s))
            } catch (r) {
                a(r)
            }
        },
        o = s => {
            try {
                n(i.throw(s))
            } catch (r) {
                a(r)
            }
        },
        n = s => s.done ? d(s.value) : Promise.resolve(s.value).then(t, o);
    n((i = i.apply(l, _)).next())
});
const L = "modulepreload",
    v = function(l) {
        return "/modules/lottery2/" + l
    },
    m = {},
    e = function(_, i, d) {
        if (!i || i.length === 0) return _();
        const a = document.getElementsByTagName("link");
        return Promise.all(i.map(t => {
            if (t = v(t), t in m) return;
            m[t] = !0;
            const o = t.endsWith(".css"),
                n = o ? '[rel="stylesheet"]' : "";
            if (!!d)
                for (let c = a.length - 1; c >= 0; c--) {
                    const u = a[c];
                    if (u.href === t && (!o || u.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${t}"]${n}`)) return;
            const r = document.createElement("link");
            if (r.rel = o ? "stylesheet" : L, o || (r.as = "script", r.crossOrigin = ""), r.href = t, document.head.appendChild(r), o) return new Promise((c, u) => {
                r.addEventListener("load", c), r.addEventListener("error", () => u(new Error(`Unable to preload CSS for ${t}`)))
            })
        })).then(() => _()).catch(t => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = t, window.dispatchEvent(o), !o.defaultPrevented) throw t
        })
    },
    g = globalThis._bc,
    {
        A: q,
        Accordion: K,
        ActiveAvatar: $,
        ActiveProvider: Q,
        App: j,
        Badge: J,
        Breadcrumb: X,
        Button: Y,
        Carousel: Z,
        Checkbox: ee,
        Collapsible: te,
        DatePicker: oe,
        Decimal: re,
        Dialog: ie,
        DropDown: se,
        Each: ae,
        Empty: ne,
        FlatList: ce,
        GridScrollList: le,
        Icon: _e,
        Input: ue,
        Intros: de,
        KeepScroll: Ee,
        Layout: me,
        LazyList: Le,
        ListView: ve,
        Loading: ge,
        Long: pe,
        Meta: De,
        MetaProvider: Re,
        MultiSelect: Pe,
        Notice: ye,
        NumberInput: Te,
        Occurrence: Ie,
        PQuery: Se,
        Pagination: Ae,
        Pop: he,
        PopProvider: Oe,
        QueueRender: fe,
        Radio: Ve,
        Ref: be,
        Refs: we,
        ScrollView: Be,
        Scrollbar: Ce,
        Select: ke,
        Slider: Me,
        SmoothList: Ne,
        SmoothListController: Ge,
        Sticky: Ue,
        Switch: xe,
        TMCLayout: Fe,
        Tabs: He,
        ToastProvider: ze,
        Toggle: We,
        ToggleView: qe,
        Tooltip: Ke,
        Transition: $e,
        UserTitle: Qe,
        access: je,
        account: Je,
        accountInit: Xe,
        addUserReceiptEvent: Ye,
        animate: Ze,
        app: et,
        asyncQueue: tt,
        authGuard: ot,
        batchRouteDefinition: rt,
        bc: it,
        bcdResource: st,
        createCallback: at,
        createClickOutside: nt,
        createControllableSignal: ct,
        createCountdown: lt,
        createCss: _t,
        createDisposable: ut,
        createElementSize: dt,
        createEmitter: Et,
        createEventListener: mt,
        createEventListenerMap: Lt,
        createI18n: vt,
        createImgix: gt,
        createIntersectionObserver: pt,
        createIsMounted: Dt,
        createKeyHold: Rt,
        createListTransition: Pt,
        createNoSuspense: yt,
        createPaginationResource: Tt,
        createRemote: p,
        createResizeObserver: It,
        createRootPool: St,
        createScheduled: At,
        createSingletonRoot: ht,
        createSubRoot: Ot,
        createSwitchTransition: ft,
        createTimer: Vt,
        createTween: bt,
        createViewportObserver: wt,
        createVisibilityObserver: Bt,
        createWindowSize: Ct,
        cx: kt,
        debounce: Mt,
        deduction: Nt,
        env: Gt,
        getDepositBonusConfig: Ut,
        getHttp: xt,
        getShareLinks: Ft,
        getSocket: Ht,
        gsap: zt,
        initShumeiSmid: Wt,
        leading: qt,
        leadingAndTrailing: Kt,
        makePersisted: $t,
        mergeRefs: Qt,
        pop: jt,
        protobuf: Jt,
        registHttpReject: Xt,
        registWhiteList: Yt,
        requestRecaptcha: Zt,
        resolveElements: eo,
        resolveFirst: to,
        resolveRemote: oo,
        selectRedDot: ro,
        setAccount: io,
        setEnv: so,
        setLang: ao,
        setSetting: no,
        setWallet: co,
        setting: lo,
        storageSync: _o,
        syncAccount: uo,
        system: Eo,
        systemUtils: mo,
        throttle: Lo,
        toast: vo,
        until: go,
        untilLogin: po,
        useActiveMemo: Do,
        useBeforeLeave: Ro,
        useFlatItem: Po,
        useGlobalComponent: yo,
        useIsActive: To,
        useKeyDownEvent: Io,
        useLoginCallback: So,
        useMeta: Ao,
        useNavigate: ho,
        useNavigatePromise: Oo,
        useNavigatePromiseEnter: fo,
        useReferrer: Vo,
        useResource: bo,
        useRouterStack: wo,
        useScrollElement: Bo,
        useScrollTop: Co,
        user: ko,
        utils: Mo,
        wallet: No,
        withDirection: Go,
        withOccurrence: Uo,
        wrUtils: xo
    } = g.fcsy,
    D = () => e(() =>
        import ("./Layout-2e45739a.js"), ["assets/Layout-2e45739a.js", "assets/solid-js-2e2908f8.js", "assets/lottery-af48bec0.js"]),
    R = () => e(() =>
        import ("./index-ea1d9121.js"), ["assets/index-ea1d9121.js", "assets/solid-js-2e2908f8.js", "assets/store-c851faad.js", "assets/store-2ed2b91e.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/LotterySearchResult-984a2d46.js", "assets/PopularSectionItem-bc0cd3d0.js", "assets/index-0f5bf80c.js", "assets/currency-fd1e1eb4.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/logo-c5334a6f.js", "assets/i18n-d0803583.js", "assets/Detail.interface-808c1c29.js", "assets/debounce-f7740f4e.js", "assets/throttle-e4f3954e.js"]),
    P = () => e(() =>
        import ("./index-53739ca1.js"), ["assets/index-53739ca1.js", "assets/solid-js-2e2908f8.js", "assets/i18n-d0803583.js", "assets/usePickNums-a8133c2f.js", "assets/LocalIcon-e7afd517.js", "assets/router-bf1daf6a.js", "assets/store-483fdae6.js", "assets/store-2ed2b91e.js", "assets/lottery-af48bec0.js", "assets/Detail.interface-808c1c29.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/warning-427ba768.js", "assets/UserInfo-694a9d09.js", "assets/AwardBall-4eea18c6.js", "assets/jackpot_ball-b702aebd.js", "assets/ball-lose-white-50d77866.js", "assets/currency-fd1e1eb4.js", "assets/winner-tickets-4ce4cb8c.js"]),
    y = () => e(() =>
        import ("./index-bbcc6376.js"), ["assets/index-bbcc6376.js", "assets/solid-js-2e2908f8.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/i18n-d0803583.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/LocalIcon-e7afd517.js", "assets/config-9243fe16.js", "assets/winner-tickets-4ce4cb8c.js", "assets/currency-fd1e1eb4.js", "assets/index-0f5bf80c.js", "assets/gift-box-black-closed-1c721cc7.js", "assets/router-bf1daf6a.js", "assets/Lottery-2fa833fd.js", "assets/Detail.interface-808c1c29.js", "assets/debounce-f7740f4e.js"]),
    T = () => e(() =>
        import ("./index-7c7693b3.js"), ["assets/index-7c7693b3.js", "assets/solid-js-2e2908f8.js", "assets/store-c851faad.js", "assets/store-2ed2b91e.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/LikeLotteryItem-abb94401.js", "assets/index-0f5bf80c.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/i18n-d0803583.js", "assets/Detail.interface-808c1c29.js", "assets/LocalIcon-e7afd517.js", "assets/config-9243fe16.js", "assets/throttle-e4f3954e.js", "assets/debounce-f7740f4e.js"]),
    I = () => e(() =>
        import ("./index-b02f720d.js"), ["assets/index-b02f720d.js", "assets/solid-js-2e2908f8.js", "assets/PopularSectionItem-bc0cd3d0.js", "assets/index-0f5bf80c.js", "assets/currency-fd1e1eb4.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/logo-c5334a6f.js", "assets/i18n-d0803583.js", "assets/Detail.interface-808c1c29.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/router-bf1daf6a.js", "assets/store-c851faad.js", "assets/store-2ed2b91e.js", "assets/config-9243fe16.js"]),
    S = () => e(() =>
        import ("./index-7af8576e.js"), ["assets/index-7af8576e.js", "assets/solid-js-2e2908f8.js", "assets/IndiaStateKaralaBall-9a331e1e.js", "assets/Detail.interface-808c1c29.js", "assets/i18n-d0803583.js", "assets/store-483fdae6.js", "assets/store-2ed2b91e.js", "assets/lottery-af48bec0.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/router-bf1daf6a.js", "assets/index-0f5bf80c.js", "assets/store-c851faad.js", "assets/warning-427ba768.js", "assets/LocalIcon-e7afd517.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/BetAmountSelect-bb0484eb.js", "assets/Lottery-2fa833fd.js", "assets/ArrowIcon-50ca1742.js", "assets/SelectCartContent-9f377283.js", "assets/indiaState-28de2f3d.js", "assets/jackpot_ball-b702aebd.js", "assets/IndiaWinningList-0235fcc9.js", "assets/index-53739ca1.js", "assets/usePickNums-a8133c2f.js", "assets/UserInfo-694a9d09.js", "assets/AwardBall-4eea18c6.js", "assets/ball-lose-white-50d77866.js", "assets/currency-fd1e1eb4.js", "assets/winner-tickets-4ce4cb8c.js"]),
    A = () => e(() =>
        import ("./RecentWinnerDetailDialog-4b6c99f0.js"), ["assets/RecentWinnerDetailDialog-4b6c99f0.js", "assets/solid-js-2e2908f8.js", "assets/router-bf1daf6a.js", "assets/currency-fd1e1eb4.js", "assets/lottery-af48bec0.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/store-483fdae6.js", "assets/store-2ed2b91e.js", "assets/Detail.interface-808c1c29.js", "assets/_Uint8Array-7783c8b7.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/i18n-d0803583.js"]),
    h = () => e(() =>
        import ("./MybetsDetailDialog-0af3c57b.js"), ["assets/MybetsDetailDialog-0af3c57b.js", "assets/solid-js-2e2908f8.js", "assets/router-bf1daf6a.js", "assets/currency-fd1e1eb4.js", "assets/jackpot_ball-b702aebd.js", "assets/ball-lose-white-50d77866.js", "assets/lottery-af48bec0.js", "assets/store-483fdae6.js", "assets/store-2ed2b91e.js", "assets/Detail.interface-808c1c29.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/i18n-d0803583.js", "assets/LocalIcon-e7afd517.js", "assets/CoinFormat-14b106c9.js", "assets/winner-tickets-4ce4cb8c.js", "assets/toString-9093e562.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/ArrowIcon-50ca1742.js", "assets/IndiaStateKaralaBall-9a331e1e.js", "assets/IndiaWinningList-0235fcc9.js", "assets/index-0f5bf80c.js", "assets/index-bbcc6376.js", "assets/config-9243fe16.js", "assets/gift-box-black-closed-1c721cc7.js", "assets/Lottery-2fa833fd.js", "assets/debounce-f7740f4e.js"]),
    O = () => e(() =>
        import ("./SendGift-25503520.js"), ["assets/SendGift-25503520.js", "assets/solid-js-2e2908f8.js", "assets/index-0f5bf80c.js", "assets/warning-427ba768.js", "assets/store-2ed2b91e.js", "assets/i18n-d0803583.js", "assets/createSettle-cf894f15.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/toString-9093e562.js", "assets/_Uint8Array-7783c8b7.js", "assets/ShareGift-42b39589.js", "assets/Share-5ca49ecb.js", "assets/LocalIcon-e7afd517.js"]),
    f = () => e(() =>
        import ("./newUserGift-b5150698.js"), ["assets/newUserGift-b5150698.js", "assets/solid-js-2e2908f8.js", "assets/recive_bonus-f7de831f.js", "assets/AwardBall-4eea18c6.js", "assets/jackpot_ball-b702aebd.js", "assets/ball-lose-white-50d77866.js", "assets/i18n-d0803583.js", "assets/router-bf1daf6a.js"]),
    V = () => e(() =>
        import ("./TicketGiftHistory-c925566f.js"), ["assets/TicketGiftHistory-c925566f.js", "assets/solid-js-2e2908f8.js", "assets/index-0f5bf80c.js", "assets/ShareGift-42b39589.js", "assets/Share-5ca49ecb.js", "assets/i18n-d0803583.js", "assets/LocalIcon-e7afd517.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/CoinFormat-14b106c9.js"]),
    b = () => e(() =>
        import ("./Seed-bbf5e468.js"), ["assets/Seed-bbf5e468.js", "assets/solid-js-2e2908f8.js", "assets/router-bf1daf6a.js", "assets/Share-5ca49ecb.js", "assets/i18n-d0803583.js", "assets/LocalIcon-e7afd517.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js"]),
    w = () => e(() =>
        import ("./Faq-54d3563f.js"), ["assets/Faq-54d3563f.js", "assets/solid-js-2e2908f8.js", "assets/i18n-d0803583.js", "assets/router-bf1daf6a.js"]),
    B = () => e(() =>
        import ("./Fariness-1effaa14.js"), ["assets/Fariness-1effaa14.js", "assets/solid-js-2e2908f8.js", "assets/router-bf1daf6a.js", "assets/i18n-d0803583.js", "assets/LocalIcon-e7afd517.js"]),
    C = () => e(() =>
        import ("./ClaimGift-bd746c1c.js"), ["assets/ClaimGift-bd746c1c.js", "assets/solid-js-2e2908f8.js", "assets/usePickNums-a8133c2f.js", "assets/i18n-d0803583.js", "assets/LocalIcon-e7afd517.js", "assets/router-bf1daf6a.js"]),
    k = () => e(() =>
        import ("./ReceiveGift-6443d294.js"), ["assets/ReceiveGift-6443d294.js", "assets/solid-js-2e2908f8.js", "assets/router-bf1daf6a.js", "assets/recive_bonus-f7de831f.js", "assets/UserInfo-694a9d09.js", "assets/index-0f5bf80c.js", "assets/i18n-d0803583.js"]),
    M = () => e(() =>
        import ("./AwardInformDetailDialog-d06fe784.js"), ["assets/AwardInformDetailDialog-d06fe784.js", "assets/solid-js-2e2908f8.js", "assets/gift-box-black-closed-1c721cc7.js", "assets/currency-fd1e1eb4.js", "assets/i18n-d0803583.js"]),
    N = () => e(() =>
        import ("./BetSlipContent-2420e5bb.js"), ["assets/BetSlipContent-2420e5bb.js", "assets/solid-js-2e2908f8.js", "assets/store-483fdae6.js", "assets/store-2ed2b91e.js", "assets/lottery-af48bec0.js", "assets/Detail.interface-808c1c29.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/BetAmountSelect-bb0484eb.js", "assets/Lottery-2fa833fd.js", "assets/router-bf1daf6a.js", "assets/IndiaStateKaralaBall-9a331e1e.js", "assets/i18n-d0803583.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/LocalIcon-e7afd517.js", "assets/countries-a369bbd3.js", "assets/logo-c5334a6f.js", "assets/createSettle-cf894f15.js", "assets/toString-9093e562.js", "assets/indiaState-28de2f3d.js"]),
    G = () => e(() =>
        import ("./SelectCartContent-9f377283.js"), ["assets/SelectCartContent-9f377283.js", "assets/solid-js-2e2908f8.js", "assets/store-483fdae6.js", "assets/store-2ed2b91e.js", "assets/lottery-af48bec0.js", "assets/Detail.interface-808c1c29.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/BetAmountSelect-bb0484eb.js", "assets/Lottery-2fa833fd.js", "assets/router-bf1daf6a.js", "assets/IndiaStateKaralaBall-9a331e1e.js", "assets/i18n-d0803583.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/index-0f5bf80c.js"]),
    U = () => e(() =>
        import ("./ExploreLottery-1a2e7cab.js"), ["assets/ExploreLottery-1a2e7cab.js", "assets/solid-js-2e2908f8.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/i18n-d0803583.js", "assets/LotterySearchResult-984a2d46.js", "assets/PopularSectionItem-bc0cd3d0.js", "assets/index-0f5bf80c.js", "assets/currency-fd1e1eb4.js", "assets/logo-c5334a6f.js", "assets/Detail.interface-808c1c29.js", "assets/store-c851faad.js", "assets/store-2ed2b91e.js", "assets/debounce-f7740f4e.js"]),
    x = () => e(() =>
        import ("./LotterySearchBoxDialog-92537f59.js"), ["assets/LotterySearchBoxDialog-92537f59.js", "assets/solid-js-2e2908f8.js", "assets/LotterySearchResult-984a2d46.js", "assets/PopularSectionItem-bc0cd3d0.js", "assets/index-0f5bf80c.js", "assets/currency-fd1e1eb4.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/logo-c5334a6f.js", "assets/i18n-d0803583.js", "assets/Detail.interface-808c1c29.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/store-c851faad.js", "assets/store-2ed2b91e.js", "assets/debounce-f7740f4e.js"]),
    F = () => e(() =>
        import ("./UpcomingDrawSection-e293a0ac.js"), ["assets/UpcomingDrawSection-e293a0ac.js", "assets/solid-js-2e2908f8.js", "assets/currency-fd1e1eb4.js", "assets/index-0f5bf80c.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/i18n-d0803583.js", "assets/throttle-e4f3954e.js", "assets/debounce-f7740f4e.js", "assets/isObject-909534d5.js", "assets/toNumber-e58af95e.js"]),
    H = () => e(() =>
        import ("./IndiaWinningList-0235fcc9.js"), ["assets/IndiaWinningList-0235fcc9.js", "assets/solid-js-2e2908f8.js", "assets/LocalIcon-e7afd517.js", "assets/i18n-d0803583.js", "assets/jackpot_ball-b702aebd.js", "assets/index-0f5bf80c.js", "assets/router-bf1daf6a.js"]),
    z = () => E(void 0, null, function*() {
        return {
            default: () => {}
        }
    }),
    Fo = p({
        init: () => e(() =>
            import ("./init-3d50428f.js"), []),
        addEvent: z,
        Layout: D,
        LotteryHome: R,
        BcLottery: P,
        Mybets: y,
        LikePage: T,
        AllLotteryPage: I,
        DetailPage: S,
        RecentDetailDialog: A,
        MyBetsDetailDialog: h,
        BcLotterySendGiftDialog: O,
        BcLotteryNewUserGift: f,
        BcLotteryGiftHistoryDialog: V,
        BcLotterySeedDialog: b,
        BcLotteryFaqDialog: w,
        BcLotteryFarinessDialog: B,
        BcLotteryClaimDialog: C,
        BcLotteryReceiveGiftDialog: k,
        AwardInfoDetailDialog: M,
        BetSlipDialog: N,
        SelectCartContentDialog: G,
        ExploreLotteryPortal: U,
        LotterySearchBoxDialog: x,
        UpcomingDrawSection: F,
        IndiaWinningListDialog: H
    });
export {
    q as A, Y as B, dt as C, ie as D, ne as E, $e as F, Be as G, No as H, _e as I, vt as J, Ge as K, ge as L, Ne as M, Te as N, Fo as O, Ae as P, ke as S, qe as T, e as _, ue as a, Je as b, It as c, Mt as d, Gt as e, kt as f, xt as g, lt as h, et as i, Mo as j, mo as k, re as l, it as m, He as n, he as o, jt as p, Ke as q, oe as r, lo as s, vo as t, ho as u, To as v, Ht as w, nt as x, Bt as y, _t as z
};