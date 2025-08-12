var Ms = Object.defineProperty,
    Is = Object.defineProperties;
var xs = Object.getOwnPropertyDescriptors;
var ne = Object.getOwnPropertySymbols;
var Ne = Object.prototype.hasOwnProperty,
    Be = Object.prototype.propertyIsEnumerable;
var ze = Math.pow,
    je = (s, t, e) => t in s ? Ms(s, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : s[t] = e,
    d = (s, t) => {
        for (var e in t || (t = {})) Ne.call(t, e) && je(s, e, t[e]);
        if (ne)
            for (var e of ne(t)) Be.call(t, e) && je(s, e, t[e]);
        return s
    },
    R = (s, t) => Is(s, xs(t));
var Kt = (s, t) => {
    var e = {};
    for (var r in s) Ne.call(s, r) && t.indexOf(r) < 0 && (e[r] = s[r]);
    if (s != null && ne)
        for (var r of ne(s)) t.indexOf(r) < 0 && Be.call(s, r) && (e[r] = s[r]);
    return e
};
var me = (s, t, e) => {
    if (!t.has(s)) throw TypeError("Cannot " + e)
};
var i = (s, t, e) => (me(s, t, "read from private field"), e ? e.call(s) : t.get(s)),
    f = (s, t, e) => {
        if (t.has(s)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(s) : t.set(s, e)
    },
    c = (s, t, e, r) => (me(s, t, "write to private field"), r ? r.call(s, e) : t.set(s, e), e);
var ae = (s, t, e, r) => ({
        set _(n) {
            c(s, t, n, e)
        },
        get _() {
            return i(s, t, r)
        }
    }),
    v = (s, t, e) => (me(s, t, "access private method"), e);
var lt = (s, t, e) => new Promise((r, n) => {
    var a = l => {
            try {
                o(e.next(l))
            } catch (m) {
                n(m)
            }
        },
        h = l => {
            try {
                o(e.throw(l))
            } catch (m) {
                n(m)
            }
        },
        o = l => l.done ? r(l.value) : Promise.resolve(l.value).then(a, h);
    o((e = e.apply(s, t)).next())
});
const We = {},
    F = function(s, t, e) {
        if (!t || t.length === 0) return s();
        const r = document.getElementsByTagName("link");
        return Promise.all(t.map(n => {
            if ((n = function(l) {
                    return "/modules/games2/" + l
                }(n)) in We) return;
            We[n] = !0;
            const a = n.endsWith(".css"),
                h = a ? '[rel="stylesheet"]' : "";
            if (e)
                for (let l = r.length - 1; l >= 0; l--) {
                    const m = r[l];
                    if (m.href === n && (!a || m.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${n}"]${h}`)) return;
            const o = document.createElement("link");
            return o.rel = a ? "stylesheet" : "modulepreload", a || (o.as = "script", o.crossOrigin = ""), o.href = n, document.head.appendChild(o), a ? new Promise((l, m) => {
                o.addEventListener("load", l), o.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${n}`)))
            }) : void 0
        })).then(() => s()).catch(n => {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = n, window.dispatchEvent(a), !a.defaultPrevented) throw n
        })
    },
    Qs = globalThis._bc,
    {
        A: li,
        Accordion: di,
        ActiveAvatar: fi,
        ActiveProvider: pi,
        App: yi,
        Badge: mi,
        Breadcrumb: vi,
        Button: gi,
        Carousel: bi,
        Checkbox: Oi,
        Collapsible: Si,
        DatePicker: wi,
        Decimal: Ei,
        Dialog: Pi,
        DropDown: Ri,
        Each: Ci,
        Empty: Di,
        FlatList: _i,
        GridScrollList: Ai,
        Icon: Ti,
        ImageX: qi,
        Input: Li,
        Intros: Fi,
        KeepScroll: Mi,
        Layout: Ii,
        LazyList: xi,
        ListView: Qi,
        Loading: Ui,
        Long: ki,
        Meta: Ki,
        MetaProvider: Hi,
        MultiSelect: Gi,
        Notice: Vi,
        NumberInput: ji,
        Occurrence: Ni,
        PQuery: Bi,
        Pagination: zi,
        Pop: Wi,
        PopProvider: $i,
        QueueRender: Xi,
        Radio: Ji,
        Ref: Yi,
        Refs: Zi,
        ScrollView: tr,
        Scrollbar: er,
        Select: sr,
        Slider: ir,
        SmoothList: rr,
        SmoothListController: nr,
        Sticky: ar,
        Switch: or,
        TMCLayout: ur,
        Tabs: hr,
        ToastProvider: cr,
        Toggle: lr,
        ToggleView: dr,
        Tooltip: fr,
        Transition: pr,
        UserTitle: yr,
        access: mr,
        account: vr,
        accountInit: gr,
        addUserReceiptEvent: br,
        animate: Or,
        app: Sr,
        asyncQueue: wr,
        authGuard: Er,
        batchRouteDefinition: Pr,
        bc: Rr,
        bcdResource: Cr,
        createCallback: Dr,
        createClickOutside: _r,
        createControllableSignal: Ar,
        createCountdown: Tr,
        createCss: qr,
        createDisposable: Lr,
        createElementSize: Fr,
        createEmitter: Mr,
        createEventListener: Ir,
        createEventListenerMap: xr,
        createI18n: Qr,
        createImgix: Ur,
        createIntersectionObserver: kr,
        createIsMounted: Kr,
        createKeyHold: Hr,
        createListTransition: Gr,
        createNoSuspense: Vr,
        createPaginationResource: jr,
        createRemote: Us,
        createResizeObserver: Nr,
        createRootPool: Br,
        createScheduled: zr,
        createSingletonRoot: Wr,
        createSubRoot: $r,
        createSwitchTransition: Xr,
        createTimer: Jr,
        createTween: Yr,
        createViewportObserver: Zr,
        createVisibilityObserver: tn,
        createWindowSize: en,
        currentDepositResource: sn,
        cx: rn,
        debounce: nn,
        deduction: an,
        env: on,
        getDepositBonusConfig: un,
        getHttp: hn,
        getNextDepositOption: cn,
        getShareLinks: ln,
        getSocket: dn,
        gsap: fn,
        initShumeiSmid: pn,
        leading: yn,
        leadingAndTrailing: mn,
        makePersisted: vn,
        mergeRefs: gn,
        pop: bn,
        protobuf: On,
        registHttpReject: Sn,
        registWhiteList: wn,
        requestRecaptcha: En,
        resolveElements: Pn,
        resolveFirst: Rn,
        resolveRemote: Cn,
        selectRedDot: Dn,
        setAccount: _n,
        setEnv: An,
        setLang: Tn,
        setSetting: qn,
        setWallet: Ln,
        setting: Fn,
        storageSync: Mn,
        syncAccount: In,
        system: xn,
        systemUtils: Qn,
        throttle: Un,
        toast: kn,
        until: Kn,
        untilLogin: Hn,
        useActiveMemo: Gn,
        useBeforeLeave: Vn,
        useFlatItem: jn,
        useGlobalComponent: Nn,
        useIsActive: Bn,
        useKeyDownEvent: zn,
        useLoginCallback: Wn,
        useMeta: $n,
        useNavigate: Xn,
        useNavigatePromise: Jn,
        useNavigatePromiseEnter: Yn,
        useReferrer: Zn,
        useResource: ta,
        useRouterStack: ea,
        useScrollElement: sa,
        useScrollTop: ia,
        user: ra,
        utils: na,
        wallet: aa,
        withDirection: oa,
        withOccurrence: ua,
        wrUtils: ha
    } = Qs.fcsy,
    ks = globalThis._bc,
    {
        Aliases: ca,
        Assets: la,
        ChildProperties: da,
        DOMElements: fa,
        DelegatedEvents: pa,
        Dynamic: ya,
        ErrorBoundary: ma,
        For: va,
        Hydration: ga,
        HydrationScript: ba,
        Index: Oa,
        Match: Sa,
        NoHydration: wa,
        Portal: Ea,
        Properties: Pa,
        RequestContext: Ra,
        SVGElements: Ca,
        SVGNamespace: Da,
        Show: _a,
        Suspense: Aa,
        SuspenseList: Ta,
        Switch: qa,
        addEventListener: La,
        assign: Fa,
        classList: Ma,
        className: Ia,
        clearDelegatedEvents: xa,
        createComponent: ge,
        delegateEvents: Qa,
        dynamicProperty: Ua,
        effect: ka,
        escape: Ka,
        generateHydrationScript: Ha,
        getAssets: Ga,
        getHydrationKey: Va,
        getNextElement: ja,
        getNextMarker: Na,
        getNextMatch: Ba,
        getOwner: za,
        getPropAlias: Wa,
        getRequestEvent: $a,
        hydrate: Xa,
        innerHTML: Ja,
        insert: Ya,
        isDev: Za,
        isServer: St,
        memo: to,
        mergeProps: eo,
        render: so,
        renderToStream: io,
        renderToString: ro,
        renderToStringAsync: no,
        resolveSSRNode: ao,
        runHydrationEvents: oo,
        setAttribute: uo,
        setAttributeNS: ho,
        setProperty: co,
        spread: lo,
        ssr: fo,
        ssrAttribute: po,
        ssrClassList: yo,
        ssrElement: mo,
        ssrHydrationKey: vo,
        ssrSpread: go,
        ssrStyle: bo,
        style: Oo,
        template: So,
        untrack: wo,
        use: Eo,
        useAssets: Po
    } = ks.h0lnfr;
var Ut = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(s) {
            return this.listeners.add(s), this.onSubscribe(), () => {
                this.listeners.delete(s), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Qt = typeof window == "undefined" || "Deno" in globalThis;

function j() {}

function be(s) {
    return typeof s == "number" && s >= 0 && s !== 1 / 0
}

function ps(s, t) {
    return Math.max(s + (t || 0) - Date.now(), 0)
}

function wt(s, t) {
    return typeof s == "function" ? s(t) : s
}

function B(s, t) {
    return typeof s == "function" ? s(t) : s
}

function $e(s, t) {
    const {
        type: e = "all",
        exact: r,
        fetchStatus: n,
        predicate: a,
        queryKey: h,
        stale: o
    } = s;
    if (h) {
        if (r) {
            if (t.queryHash !== qe(h, t.options)) return !1
        } else if (!Vt(t.queryKey, h)) return !1
    }
    if (e !== "all") {
        const l = t.isActive();
        if (e === "active" && !l || e === "inactive" && l) return !1
    }
    return (typeof o != "boolean" || t.isStale() === o) && (!n || n === t.state.fetchStatus) && !(a && !a(t))
}

function Xe(s, t) {
    const {
        exact: e,
        status: r,
        predicate: n,
        mutationKey: a
    } = s;
    if (a) {
        if (!t.options.mutationKey) return !1;
        if (e) {
            if (Ot(t.options.mutationKey) !== Ot(a)) return !1
        } else if (!Vt(t.options.mutationKey, a)) return !1
    }
    return (!r || t.state.status === r) && !(n && !n(t))
}

function qe(s, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Ot)(s)
}

function Ot(s) {
    return JSON.stringify(s, (t, e) => Oe(e) ? Object.keys(e).sort().reduce((r, n) => (r[n] = e[n], r), {}) : e)
}

function Vt(s, t) {
    return s === t || typeof s == typeof t && !(!s || !t || typeof s != "object" || typeof t != "object") && !Object.keys(t).some(e => !Vt(s[e], t[e]))
}

function ys(s, t) {
    if (s === t) return s;
    const e = Je(s) && Je(t);
    if (e || Oe(s) && Oe(t)) {
        const r = e ? s : Object.keys(s),
            n = r.length,
            a = e ? t : Object.keys(t),
            h = a.length,
            o = e ? [] : {};
        let l = 0;
        for (let m = 0; m < h; m++) {
            const u = e ? m : a[m];
            (!e && r.includes(u) || e) && s[u] === void 0 && t[u] === void 0 ? (o[u] = void 0, l++) : (o[u] = ys(s[u], t[u]), o[u] === s[u] && s[u] !== void 0 && l++)
        }
        return n === h && l === n ? s : o
    }
    return t
}

function ue(s, t) {
    if (!t || Object.keys(s).length !== Object.keys(t).length) return !1;
    for (const e in s)
        if (s[e] !== t[e]) return !1;
    return !0
}

function Je(s) {
    return Array.isArray(s) && s.length === Object.keys(s).length
}

function Oe(s) {
    if (!Ye(s)) return !1;
    const t = s.constructor;
    if (t === void 0) return !0;
    const e = t.prototype;
    return !!Ye(e) && !!e.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(s) === Object.prototype
}

function Ye(s) {
    return Object.prototype.toString.call(s) === "[object Object]"
}

function Se(s, t, e) {
    return typeof e.structuralSharing == "function" ? e.structuralSharing(s, t) : e.structuralSharing !== !1 ? ys(s, t) : t
}

function Ks(s, t, e = 0) {
    const r = [...s, t];
    return e && r.length > e ? r.slice(1) : r
}

function Hs(s, t, e = 0) {
    const r = [t, ...s];
    return e && r.length > e ? r.slice(0, -1) : r
}
var ms = Symbol(),
    vs = (s, t) => !s.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : s.queryFn && s.queryFn !== ms ? s.queryFn : () => Promise.reject(new Error(`Missing queryFn: '${s.queryHash}'`)),
    dt, it, Et, rs, Le = new(rs = class extends Ut {
        constructor() {
            super();
            f(this, dt, void 0);
            f(this, it, void 0);
            f(this, Et, void 0);
            c(this, Et, t => {
                if (!Qt && window.addEventListener) {
                    const e = () => t();
                    return window.addEventListener("visibilitychange", e, !1), () => {
                        window.removeEventListener("visibilitychange", e)
                    }
                }
            })
        }
        onSubscribe() {
            i(this, it) || this.setEventListener(i(this, Et))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = i(this, it)) == null || t.call(this), c(this, it, void 0))
        }
        setEventListener(t) {
            var e;
            c(this, Et, t), (e = i(this, it)) == null || e.call(this), c(this, it, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            i(this, dt) !== t && (c(this, dt, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(e => {
                e(t)
            })
        }
        isFocused() {
            var t;
            return typeof i(this, dt) == "boolean" ? i(this, dt) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, dt = new WeakMap, it = new WeakMap, Et = new WeakMap, rs),
    Pt, rt, Rt, ns, le = new(ns = class extends Ut {
        constructor() {
            super();
            f(this, Pt, !0);
            f(this, rt, void 0);
            f(this, Rt, void 0);
            c(this, Rt, t => {
                if (!Qt && window.addEventListener) {
                    const e = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", e, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", e), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            i(this, rt) || this.setEventListener(i(this, Rt))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = i(this, rt)) == null || t.call(this), c(this, rt, void 0))
        }
        setEventListener(t) {
            var e;
            c(this, Rt, t), (e = i(this, rt)) == null || e.call(this), c(this, rt, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            i(this, Pt) !== t && (c(this, Pt, t), this.listeners.forEach(e => {
                e(t)
            }))
        }
        isOnline() {
            return i(this, Pt)
        }
    }, Pt = new WeakMap, rt = new WeakMap, Rt = new WeakMap, ns);

function Gs(s) {
    return Math.min(1e3 * ze(2, s), 3e4)
}

function gs(s) {
    return (s != null ? s : "online") !== "online" || le.isOnline()
}
var bs = class {
    constructor(s) {
        this.revert = s == null ? void 0 : s.revert, this.silent = s == null ? void 0 : s.silent
    }
};

function ve(s) {
    return s instanceof bs
}

function Os(s) {
    let t, e, r, n = !1,
        a = 0,
        h = !1;
    const o = new Promise((b, O) => {
            e = b, r = O
        }),
        l = () => Le.isFocused() && (s.networkMode === "always" || le.isOnline()) && s.canRun(),
        m = () => gs(s.networkMode) && s.canRun(),
        u = b => {
            var O;
            h || (h = !0, (O = s.onSuccess) == null || O.call(s, b), t == null || t(), e(b))
        },
        p = b => {
            var O;
            h || (h = !0, (O = s.onError) == null || O.call(s, b), t == null || t(), r(b))
        },
        D = () => new Promise(b => {
            var O;
            t = P => {
                (h || l()) && b(P)
            }, (O = s.onPause) == null || O.call(s)
        }).then(() => {
            var b;
            t = void 0, h || ((b = s.onContinue) == null || b.call(s))
        }),
        A = () => {
            if (h) return;
            let b;
            const O = a === 0 ? s.initialPromise : void 0;
            try {
                b = O != null ? O : s.fn()
            } catch (P) {
                b = Promise.reject(P)
            }
            Promise.resolve(b).then(u).catch(P => {
                var w, C, L;
                if (h) return;
                const T = (w = s.retry) != null ? w : Qt ? 0 : 3,
                    I = (C = s.retryDelay) != null ? C : Gs,
                    q = typeof I == "function" ? I(a, P) : I,
                    y = T === !0 || typeof T == "number" && a < T || typeof T == "function" && T(a, P);
                var S;
                !n && y ? (a++, (L = s.onFail) == null || L.call(s, a, P), (S = q, new Promise(g => {
                    setTimeout(g, S)
                })).then(() => l() ? void 0 : D()).then(() => {
                    n ? p(P) : A()
                })) : p(P)
            })
        };
    return {
        promise: o,
        cancel: b => {
            var O;
            h || (p(new bs(b)), (O = s.abort) == null || O.call(s))
        },
        continue: () => (t == null || t(), o),
        cancelRetry: () => {
            n = !0
        },
        continueRetry: () => {
            n = !1
        },
        canStart: m,
        start: () => (m() ? A() : D().then(A), o)
    }
}
var M = function() {
        let s = [],
            t = 0,
            e = o => {
                o()
            },
            r = o => {
                o()
            },
            n = o => setTimeout(o, 0);
        const a = o => {
                t ? s.push(o) : n(() => {
                    e(o)
                })
            },
            h = () => {
                const o = s;
                s = [], o.length && n(() => {
                    r(() => {
                        o.forEach(l => {
                            e(l)
                        })
                    })
                })
            };
        return {
            batch: o => {
                let l;
                t++;
                try {
                    l = o()
                } finally {
                    t--, t || h()
                }
                return l
            },
            batchCalls: o => (...l) => {
                a(() => {
                    o(...l)
                })
            },
            schedule: a,
            setNotifyFunction: o => {
                e = o
            },
            setBatchNotifyFunction: o => {
                r = o
            },
            setScheduler: o => {
                n = o
            }
        }
    }(),
    ft, as, Ss = (as = class {
        constructor() {
            f(this, ft, void 0)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), be(this.gcTime) && c(this, ft, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(s) {
            this.gcTime = Math.max(this.gcTime || 0, s != null ? s : Qt ? 1 / 0 : 3e5)
        }
        clearGcTimeout() {
            i(this, ft) && (clearTimeout(i(this, ft)), c(this, ft, void 0))
        }
    }, ft = new WeakMap, as),
    Ct, Dt, V, Q, jt, pt, N, Y, os, Vs = (os = class extends Ss {
        constructor(t) {
            super();
            f(this, N);
            f(this, Ct, void 0);
            f(this, Dt, void 0);
            f(this, V, void 0);
            f(this, Q, void 0);
            f(this, jt, void 0);
            f(this, pt, void 0);
            c(this, pt, !1), c(this, jt, t.defaultOptions), this.setOptions(t.options), this.observers = [], c(this, V, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, c(this, Ct, t.state || function(e) {
                const r = typeof e.initialData == "function" ? e.initialData() : e.initialData,
                    n = r !== void 0,
                    a = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                return {
                    data: r,
                    dataUpdateCount: 0,
                    dataUpdatedAt: n ? a != null ? a : Date.now() : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: n ? "success" : "pending",
                    fetchStatus: "idle"
                }
            }(this.options)), this.state = i(this, Ct), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = i(this, Q)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = d(d({}, i(this, jt)), t), this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            this.observers.length || this.state.fetchStatus !== "idle" || i(this, V).remove(this)
        }
        setData(t, e) {
            const r = Se(this.state.data, t, this.options);
            return v(this, N, Y).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: e == null ? void 0 : e.updatedAt,
                manual: e == null ? void 0 : e.manual
            }), r
        }
        setState(t, e) {
            v(this, N, Y).call(this, {
                type: "setState",
                state: t,
                setStateOptions: e
            })
        }
        cancel(t) {
            var r, n;
            const e = (r = i(this, Q)) == null ? void 0 : r.promise;
            return (n = i(this, Q)) == null || n.cancel(t), e ? e.then(j).catch(j) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(i(this, Ct))
        }
        isActive() {
            return this.observers.some(t => B(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0)
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !ps(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var e;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (e = i(this, Q)) == null || e.continue()
        }
        onOnline() {
            var e;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (e = i(this, Q)) == null || e.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), i(this, V).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || (i(this, Q) && (i(this, pt) ? i(this, Q).cancel({
                revert: !0
            }) : i(this, Q).cancelRetry()), this.scheduleGc()), i(this, V).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || v(this, N, Y).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, e) {
            var o, l, m;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (e != null && e.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (i(this, Q)) return i(this, Q).continueRetry(), i(this, Q).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const u = this.observers.find(p => p.options.queryFn);
                u && this.setOptions(u.options)
            }
            const r = new AbortController,
                n = u => {
                    Object.defineProperty(u, "signal", {
                        enumerable: !0,
                        get: () => (c(this, pt, !0), r.signal)
                    })
                },
                a = {
                    fetchOptions: e,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: () => {
                        const u = vs(this.options, e),
                            p = {
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                        return n(p), c(this, pt, !1), this.options.persister ? this.options.persister(u, p, this) : u(p)
                    }
                };
            n(a), (o = this.options.behavior) == null || o.onFetch(a, this), c(this, Dt, this.state), this.state.fetchStatus !== "idle" && this.state.fetchMeta === ((l = a.fetchOptions) == null ? void 0 : l.meta) || v(this, N, Y).call(this, {
                type: "fetch",
                meta: (m = a.fetchOptions) == null ? void 0 : m.meta
            });
            const h = u => {
                var p, D, A, b;
                ve(u) && u.silent || v(this, N, Y).call(this, {
                    type: "error",
                    error: u
                }), ve(u) || ((D = (p = i(this, V).config).onError) == null || D.call(p, u, this), (b = (A = i(this, V).config).onSettled) == null || b.call(A, this.state.data, u, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            };
            return c(this, Q, Os({
                initialPromise: e == null ? void 0 : e.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: u => {
                    var p, D, A, b;
                    u !== void 0 ? (this.setData(u), (D = (p = i(this, V).config).onSuccess) == null || D.call(p, u, this), (b = (A = i(this, V).config).onSettled) == null || b.call(A, u, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1) : h(new Error(`${this.queryHash} data is undefined`))
                },
                onError: h,
                onFail: (u, p) => {
                    v(this, N, Y).call(this, {
                        type: "failed",
                        failureCount: u,
                        error: p
                    })
                },
                onPause: () => {
                    v(this, N, Y).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    v(this, N, Y).call(this, {
                        type: "continue"
                    })
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0
            })), i(this, Q).start()
        }
    }, Ct = new WeakMap, Dt = new WeakMap, V = new WeakMap, Q = new WeakMap, jt = new WeakMap, pt = new WeakMap, N = new WeakSet, Y = function(t) {
        this.state = (e => {
            var r, n;
            switch (t.type) {
                case "failed":
                    return R(d({}, e), {
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    });
                case "pause":
                    return R(d({}, e), {
                        fetchStatus: "paused"
                    });
                case "continue":
                    return R(d({}, e), {
                        fetchStatus: "fetching"
                    });
                case "fetch":
                    return R(d(d({}, e), ws(e.data, this.options)), {
                        fetchMeta: (r = t.meta) != null ? r : null
                    });
                case "success":
                    return d(R(d({}, e), {
                        data: t.data,
                        dataUpdateCount: e.dataUpdateCount + 1,
                        dataUpdatedAt: (n = t.dataUpdatedAt) != null ? n : Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success"
                    }), !t.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    });
                case "error":
                    const a = t.error;
                    return ve(a) && a.revert && i(this, Dt) ? R(d({}, i(this, Dt)), {
                        fetchStatus: "idle"
                    }) : R(d({}, e), {
                        error: a,
                        errorUpdateCount: e.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: e.fetchFailureCount + 1,
                        fetchFailureReason: a,
                        fetchStatus: "idle",
                        status: "error"
                    });
                case "invalidate":
                    return R(d({}, e), {
                        isInvalidated: !0
                    });
                case "setState":
                    return d(d({}, e), t.state)
            }
        })(this.state), M.batch(() => {
            this.observers.forEach(e => {
                e.onQueryUpdate()
            }), i(this, V).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, os);

function ws(s, t) {
    return d({
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: gs(t.networkMode) ? "fetching" : "paused"
    }, s === void 0 && {
        error: null,
        status: "pending"
    })
}
var W, us, js = (us = class extends Ut {
        constructor(t = {}) {
            super();
            f(this, W, void 0);
            this.config = t, c(this, W, new Map)
        }
        build(t, e, r) {
            var o;
            const n = e.queryKey,
                a = (o = e.queryHash) != null ? o : qe(n, e);
            let h = this.get(a);
            return h || (h = new Vs({
                cache: this,
                queryKey: n,
                queryHash: a,
                options: t.defaultQueryOptions(e),
                state: r,
                defaultOptions: t.getQueryDefaults(n)
            }), this.add(h)), h
        }
        add(t) {
            i(this, W).has(t.queryHash) || (i(this, W).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const e = i(this, W).get(t.queryHash);
            e && (t.destroy(), e === t && i(this, W).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            M.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return i(this, W).get(t)
        }
        getAll() {
            return [...i(this, W).values()]
        }
        find(t) {
            const e = d({
                exact: !0
            }, t);
            return this.getAll().find(r => $e(e, r))
        }
        findAll(t = {}) {
            const e = this.getAll();
            return Object.keys(t).length > 0 ? e.filter(r => $e(t, r)) : e
        }
        notify(t) {
            M.batch(() => {
                this.listeners.forEach(e => {
                    e(t)
                })
            })
        }
        onFocus() {
            M.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            M.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, W = new WeakMap, us),
    $, U, yt, X, st, hs, Ns = (hs = class extends Ss {
        constructor(t) {
            super();
            f(this, X);
            f(this, $, void 0);
            f(this, U, void 0);
            f(this, yt, void 0);
            this.mutationId = t.mutationId, c(this, U, t.mutationCache), c(this, $, []), this.state = t.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
                submittedAt: 0
            }, this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            i(this, $).includes(t) || (i(this, $).push(t), this.clearGcTimeout(), i(this, U).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            c(this, $, i(this, $).filter(e => e !== t)), this.scheduleGc(), i(this, U).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            i(this, $).length || (this.state.status === "pending" ? this.scheduleGc() : i(this, U).remove(this))
        }
        continue () {
            var t, e;
            return (e = (t = i(this, yt)) == null ? void 0 : t.continue()) != null ? e : this.execute(this.state.variables)
        }
        execute(t) {
            return lt(this, null, function*() {
                var n, a, h, o, l, m, u, p, D, A, b, O, P, T, I, q, y, S, w, C, L;
                c(this, yt, Os({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                    onFail: (g, x) => {
                        v(this, X, st).call(this, {
                            type: "failed",
                            failureCount: g,
                            error: x
                        })
                    },
                    onPause: () => {
                        v(this, X, st).call(this, {
                            type: "pause"
                        })
                    },
                    onContinue: () => {
                        v(this, X, st).call(this, {
                            type: "continue"
                        })
                    },
                    retry: (n = this.options.retry) != null ? n : 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => i(this, U).canRun(this)
                }));
                const e = this.state.status === "pending",
                    r = !i(this, yt).canStart();
                try {
                    if (!e) {
                        v(this, X, st).call(this, {
                            type: "pending",
                            variables: t,
                            isPaused: r
                        }), yield(h = (a = i(this, U).config).onMutate) == null ? void 0 : h.call(a, t, this);
                        const x = yield(l = (o = this.options).onMutate) == null ? void 0 : l.call(o, t);
                        x !== this.state.context && v(this, X, st).call(this, {
                            type: "pending",
                            context: x,
                            variables: t,
                            isPaused: r
                        })
                    }
                    const g = yield i(this, yt).start();
                    return yield(u = (m = i(this, U).config).onSuccess) == null ? void 0 : u.call(m, g, t, this.state.context, this), yield(D = (p = this.options).onSuccess) == null ? void 0 : D.call(p, g, t, this.state.context), yield(b = (A = i(this, U).config).onSettled) == null ? void 0 : b.call(A, g, null, this.state.variables, this.state.context, this), yield(P = (O = this.options).onSettled) == null ? void 0 : P.call(O, g, null, t, this.state.context), v(this, X, st).call(this, {
                        type: "success",
                        data: g
                    }), g
                } catch (g) {
                    try {
                        throw yield(I = (T = i(this, U).config).onError) == null ? void 0 : I.call(T, g, t, this.state.context, this), yield(y = (q = this.options).onError) == null ? void 0 : y.call(q, g, t, this.state.context), yield(w = (S = i(this, U).config).onSettled) == null ? void 0 : w.call(S, void 0, g, this.state.variables, this.state.context, this), yield(L = (C = this.options).onSettled) == null ? void 0 : L.call(C, void 0, g, t, this.state.context), g
                    } finally {
                        v(this, X, st).call(this, {
                            type: "error",
                            error: g
                        })
                    }
                } finally {
                    i(this, U).runNext(this)
                }
            })
        }
    }, $ = new WeakMap, U = new WeakMap, yt = new WeakMap, X = new WeakSet, st = function(t) {
        this.state = (e => {
            switch (t.type) {
                case "failed":
                    return R(d({}, e), {
                        failureCount: t.failureCount,
                        failureReason: t.error
                    });
                case "pause":
                    return R(d({}, e), {
                        isPaused: !0
                    });
                case "continue":
                    return R(d({}, e), {
                        isPaused: !1
                    });
                case "pending":
                    return R(d({}, e), {
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    });
                case "success":
                    return R(d({}, e), {
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    });
                case "error":
                    return R(d({}, e), {
                        data: void 0,
                        error: t.error,
                        failureCount: e.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    })
            }
        })(this.state), M.batch(() => {
            i(this, $).forEach(e => {
                e.onMutationUpdate(t)
            }), i(this, U).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, hs),
    G, Nt, cs, Bs = (cs = class extends Ut {
        constructor(t = {}) {
            super();
            f(this, G, void 0);
            f(this, Nt, void 0);
            this.config = t, c(this, G, new Map), c(this, Nt, Date.now())
        }
        build(t, e, r) {
            const n = new Ns({
                mutationCache: this,
                mutationId: ++ae(this, Nt)._,
                options: t.defaultMutationOptions(e),
                state: r
            });
            return this.add(n), n
        }
        add(t) {
            var n;
            const e = oe(t),
                r = (n = i(this, G).get(e)) != null ? n : [];
            r.push(t), i(this, G).set(e, r), this.notify({
                type: "added",
                mutation: t
            })
        }
        remove(t) {
            var r;
            const e = oe(t);
            if (i(this, G).has(e)) {
                const n = (r = i(this, G).get(e)) == null ? void 0 : r.filter(a => a !== t);
                n && (n.length === 0 ? i(this, G).delete(e) : i(this, G).set(e, n))
            }
            this.notify({
                type: "removed",
                mutation: t
            })
        }
        canRun(t) {
            var r;
            const e = (r = i(this, G).get(oe(t))) == null ? void 0 : r.find(n => n.state.status === "pending");
            return !e || e === t
        }
        runNext(t) {
            var r, n;
            const e = (r = i(this, G).get(oe(t))) == null ? void 0 : r.find(a => a !== t && a.state.isPaused);
            return (n = e == null ? void 0 : e.continue()) != null ? n : Promise.resolve()
        }
        clear() {
            M.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        getAll() {
            return [...i(this, G).values()].flat()
        }
        find(t) {
            const e = d({
                exact: !0
            }, t);
            return this.getAll().find(r => Xe(e, r))
        }
        findAll(t = {}) {
            return this.getAll().filter(e => Xe(t, e))
        }
        notify(t) {
            M.batch(() => {
                this.listeners.forEach(e => {
                    e(t)
                })
            })
        }
        resumePausedMutations() {
            const t = this.getAll().filter(e => e.state.isPaused);
            return M.batch(() => Promise.all(t.map(e => e.continue().catch(j))))
        }
    }, G = new WeakMap, Nt = new WeakMap, cs);

function oe(s) {
    var t, e;
    return (e = (t = s.options.scope) == null ? void 0 : t.id) != null ? e : String(s.mutationId)
}

function zs(s) {
    return {
        onFetch: (t, e) => {
            const r = () => lt(this, null, function*() {
                var A, b, O, P, T, I;
                const n = t.options,
                    a = (O = (b = (A = t.fetchOptions) == null ? void 0 : A.meta) == null ? void 0 : b.fetchMore) == null ? void 0 : O.direction,
                    h = ((P = t.state.data) == null ? void 0 : P.pages) || [],
                    o = ((T = t.state.data) == null ? void 0 : T.pageParams) || [],
                    l = {
                        pages: [],
                        pageParams: []
                    };
                let m = !1;
                const u = vs(t.options, t.fetchOptions),
                    p = (q, y, S) => lt(this, null, function*() {
                        if (m) return Promise.reject();
                        if (y == null && q.pages.length) return Promise.resolve(q);
                        const w = {
                            queryKey: t.queryKey,
                            pageParam: y,
                            direction: S ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        var C;
                        C = w, Object.defineProperty(C, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
                                m = !0
                            }), t.signal)
                        });
                        const L = yield u(w), {
                            maxPages: g
                        } = t.options, x = S ? Hs : Ks;
                        return {
                            pages: x(q.pages, L, g),
                            pageParams: x(q.pageParams, y, g)
                        }
                    });
                let D;
                if (a && h.length) {
                    const q = a === "backward",
                        y = {
                            pages: h,
                            pageParams: o
                        },
                        S = (q ? Ws : Ze)(n, y);
                    D = yield p(y, S, q)
                } else {
                    D = yield p(l, (I = o[0]) != null ? I : n.initialPageParam);
                    const q = s != null ? s : h.length;
                    for (let y = 1; y < q; y++) {
                        const S = Ze(n, D);
                        D = yield p(D, S)
                    }
                }
                return D
            });
            t.options.persister ? t.fetchFn = () => {
                var n, a;
                return (a = (n = t.options).persister) == null ? void 0 : a.call(n, r, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, e)
            } : t.fetchFn = r
        }
    }
}

function Ze(s, {
    pages: t,
    pageParams: e
}) {
    const r = t.length - 1;
    return s.getNextPageParam(t[r], t, e[r], e)
}

function Ws(s, {
    pages: t,
    pageParams: e
}) {
    var r;
    return (r = s.getPreviousPageParam) == null ? void 0 : r.call(s, t[0], t, e[0], e)
}
var _, nt, at, _t, At, ot, Tt, qt, ls, $s = (ls = class {
        constructor(s = {}) {
            f(this, _, void 0);
            f(this, nt, void 0);
            f(this, at, void 0);
            f(this, _t, void 0);
            f(this, At, void 0);
            f(this, ot, void 0);
            f(this, Tt, void 0);
            f(this, qt, void 0);
            c(this, _, s.queryCache || new js), c(this, nt, s.mutationCache || new Bs), c(this, at, s.defaultOptions || {}), c(this, _t, new Map), c(this, At, new Map), c(this, ot, 0)
        }
        mount() {
            ae(this, ot)._++, i(this, ot) === 1 && (c(this, Tt, Le.subscribe(s => lt(this, null, function*() {
                s && (yield this.resumePausedMutations(), i(this, _).onFocus())
            }))), c(this, qt, le.subscribe(s => lt(this, null, function*() {
                s && (yield this.resumePausedMutations(), i(this, _).onOnline())
            }))))
        }
        unmount() {
            var s, t;
            ae(this, ot)._--, i(this, ot) === 0 && ((s = i(this, Tt)) == null || s.call(this), c(this, Tt, void 0), (t = i(this, qt)) == null || t.call(this), c(this, qt, void 0))
        }
        isFetching(s) {
            return i(this, _).findAll(R(d({}, s), {
                fetchStatus: "fetching"
            })).length
        }
        isMutating(s) {
            return i(this, nt).findAll(R(d({}, s), {
                status: "pending"
            })).length
        }
        getQueryData(s) {
            var e;
            const t = this.defaultQueryOptions({
                queryKey: s
            });
            return (e = i(this, _).get(t.queryHash)) == null ? void 0 : e.state.data
        }
        ensureQueryData(s) {
            const t = this.getQueryData(s.queryKey);
            if (t === void 0) return this.fetchQuery(s); {
                const e = this.defaultQueryOptions(s),
                    r = i(this, _).build(this, e);
                return s.revalidateIfStale && r.isStaleByTime(wt(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(t)
            }
        }
        getQueriesData(s) {
            return i(this, _).findAll(s).map(({
                queryKey: t,
                state: e
            }) => [t, e.data])
        }
        setQueryData(s, t, e) {
            const r = this.defaultQueryOptions({
                    queryKey: s
                }),
                n = i(this, _).get(r.queryHash),
                a = n == null ? void 0 : n.state.data,
                h = function(o, l) {
                    return typeof o == "function" ? o(l) : o
                }(t, a);
            if (h !== void 0) return i(this, _).build(this, r).setData(h, R(d({}, e), {
                manual: !0
            }))
        }
        setQueriesData(s, t, e) {
            return M.batch(() => i(this, _).findAll(s).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, e)]))
        }
        getQueryState(s) {
            var e;
            const t = this.defaultQueryOptions({
                queryKey: s
            });
            return (e = i(this, _).get(t.queryHash)) == null ? void 0 : e.state
        }
        removeQueries(s) {
            const t = i(this, _);
            M.batch(() => {
                t.findAll(s).forEach(e => {
                    t.remove(e)
                })
            })
        }
        resetQueries(s, t) {
            const e = i(this, _),
                r = d({
                    type: "active"
                }, s);
            return M.batch(() => (e.findAll(s).forEach(n => {
                n.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(s = {}, t = {}) {
            const e = d({
                    revert: !0
                }, t),
                r = M.batch(() => i(this, _).findAll(s).map(n => n.cancel(e)));
            return Promise.all(r).then(j).catch(j)
        }
        invalidateQueries(s = {}, t = {}) {
            return M.batch(() => {
                var r, n;
                if (i(this, _).findAll(s).forEach(a => {
                        a.invalidate()
                    }), s.refetchType === "none") return Promise.resolve();
                const e = R(d({}, s), {
                    type: (n = (r = s.refetchType) != null ? r : s.type) != null ? n : "active"
                });
                return this.refetchQueries(e, t)
            })
        }
        refetchQueries(s = {}, t) {
            var n;
            const e = R(d({}, t), {
                    cancelRefetch: (n = t == null ? void 0 : t.cancelRefetch) != null ? n : !0
                }),
                r = M.batch(() => i(this, _).findAll(s).filter(a => !a.isDisabled()).map(a => {
                    let h = a.fetch(void 0, e);
                    return e.throwOnError || (h = h.catch(j)), a.state.fetchStatus === "paused" ? Promise.resolve() : h
                }));
            return Promise.all(r).then(j)
        }
        fetchQuery(s) {
            const t = this.defaultQueryOptions(s);
            t.retry === void 0 && (t.retry = !1);
            const e = i(this, _).build(this, t);
            return e.isStaleByTime(wt(t.staleTime, e)) ? e.fetch(t) : Promise.resolve(e.state.data)
        }
        prefetchQuery(s) {
            return this.fetchQuery(s).then(j).catch(j)
        }
        fetchInfiniteQuery(s) {
            return s.behavior = zs(s.pages), this.fetchQuery(s)
        }
        prefetchInfiniteQuery(s) {
            return this.fetchInfiniteQuery(s).then(j).catch(j)
        }
        resumePausedMutations() {
            return le.isOnline() ? i(this, nt).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return i(this, _)
        }
        getMutationCache() {
            return i(this, nt)
        }
        getDefaultOptions() {
            return i(this, at)
        }
        setDefaultOptions(s) {
            c(this, at, s)
        }
        setQueryDefaults(s, t) {
            i(this, _t).set(Ot(s), {
                queryKey: s,
                defaultOptions: t
            })
        }
        getQueryDefaults(s) {
            const t = [...i(this, _t).values()];
            let e = {};
            return t.forEach(r => {
                Vt(s, r.queryKey) && (e = d(d({}, e), r.defaultOptions))
            }), e
        }
        setMutationDefaults(s, t) {
            i(this, At).set(Ot(s), {
                mutationKey: s,
                defaultOptions: t
            })
        }
        getMutationDefaults(s) {
            const t = [...i(this, At).values()];
            let e = {};
            return t.forEach(r => {
                Vt(s, r.mutationKey) && (e = d(d({}, e), r.defaultOptions))
            }), e
        }
        defaultQueryOptions(s) {
            if (s._defaulted) return s;
            const t = R(d(d(d({}, i(this, at).queries), this.getQueryDefaults(s.queryKey)), s), {
                _defaulted: !0
            });
            return t.queryHash || (t.queryHash = qe(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === ms && (t.enabled = !1), t
        }
        defaultMutationOptions(s) {
            return s != null && s._defaulted ? s : R(d(d(d({}, i(this, at).mutations), (s == null ? void 0 : s.mutationKey) && this.getMutationDefaults(s.mutationKey)), s), {
                _defaulted: !0
            })
        }
        clear() {
            i(this, _).clear(), i(this, nt).clear()
        }
    }, _ = new WeakMap, nt = new WeakMap, at = new WeakMap, _t = new WeakMap, At = new WeakMap, ot = new WeakMap, Tt = new WeakMap, qt = new WeakMap, ls),
    K, E, Bt, k, mt, Lt, J, zt, Ft, Mt, vt, gt, ut, It, bt, Ht, Wt, we, $t, Ee, Xt, Pe, Jt, Re, Yt, Ce, Zt, De, te, _e, fe, Es, ds, Xs = (ds = class extends Ut {
        constructor(t, e) {
            super();
            f(this, bt);
            f(this, Wt);
            f(this, $t);
            f(this, Xt);
            f(this, Jt);
            f(this, Yt);
            f(this, Zt);
            f(this, te);
            f(this, fe);
            f(this, K, void 0);
            f(this, E, void 0);
            f(this, Bt, void 0);
            f(this, k, void 0);
            f(this, mt, void 0);
            f(this, Lt, void 0);
            f(this, J, void 0);
            f(this, zt, void 0);
            f(this, Ft, void 0);
            f(this, Mt, void 0);
            f(this, vt, void 0);
            f(this, gt, void 0);
            f(this, ut, void 0);
            f(this, It, new Set);
            this.options = e, c(this, K, t), c(this, J, null), this.bindMethods(), this.setOptions(e)
        }
        bindMethods() {
            this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
            this.listeners.size === 1 && (i(this, E).addObserver(this), ts(i(this, E), this.options) ? v(this, bt, Ht).call(this) : this.updateResult(), v(this, Jt, Re).call(this))
        }
        onUnsubscribe() {
            this.hasListeners() || this.destroy()
        }
        shouldFetchOnReconnect() {
            return Ae(i(this, E), this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
            return Ae(i(this, E), this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
            this.listeners = new Set, v(this, Yt, Ce).call(this), v(this, Zt, De).call(this), i(this, E).removeObserver(this)
        }
        setOptions(t, e) {
            const r = this.options,
                n = i(this, E);
            if (this.options = i(this, K).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof B(this.options.enabled, i(this, E)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
            v(this, te, _e).call(this), i(this, E).setOptions(this.options), r._defaulted && !ue(this.options, r) && i(this, K).getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: i(this, E),
                observer: this
            });
            const a = this.hasListeners();
            a && es(i(this, E), n, this.options, r) && v(this, bt, Ht).call(this), this.updateResult(e), !a || i(this, E) === n && B(this.options.enabled, i(this, E)) === B(r.enabled, i(this, E)) && wt(this.options.staleTime, i(this, E)) === wt(r.staleTime, i(this, E)) || v(this, Wt, we).call(this);
            const h = v(this, $t, Ee).call(this);
            !a || i(this, E) === n && B(this.options.enabled, i(this, E)) === B(r.enabled, i(this, E)) && h === i(this, ut) || v(this, Xt, Pe).call(this, h)
        }
        getOptimisticResult(t) {
            const e = i(this, K).getQueryCache().build(i(this, K), t),
                r = this.createResult(e, t);
            return function(n, a) {
                return !ue(n.getCurrentResult(), a)
            }(this, r) && (c(this, k, r), c(this, Lt, this.options), c(this, mt, i(this, E).state)), r
        }
        getCurrentResult() {
            return i(this, k)
        }
        trackResult(t, e) {
            const r = {};
            return Object.keys(t).forEach(n => {
                Object.defineProperty(r, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackProp(n), e == null || e(n), t[n])
                })
            }), r
        }
        trackProp(t) {
            i(this, It).add(t)
        }
        getCurrentQuery() {
            return i(this, E)
        }
        refetch(e = {}) {
            var t = Kt(e, []);
            return this.fetch(d({}, t))
        }
        fetchOptimistic(t) {
            const e = i(this, K).defaultQueryOptions(t),
                r = i(this, K).getQueryCache().build(i(this, K), e);
            return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, e))
        }
        fetch(t) {
            var e;
            return v(this, bt, Ht).call(this, R(d({}, t), {
                cancelRefetch: (e = t.cancelRefetch) != null ? e : !0
            })).then(() => (this.updateResult(), i(this, k)))
        }
        createResult(t, e) {
            var S;
            const r = i(this, E),
                n = this.options,
                a = i(this, k),
                h = i(this, mt),
                o = i(this, Lt),
                l = t !== r ? t.state : i(this, Bt),
                {
                    state: m
                } = t;
            let u, p = d({}, m),
                D = !1;
            if (e._optimisticResults) {
                const w = this.hasListeners(),
                    C = !w && ts(t, e),
                    L = w && es(t, r, e, n);
                (C || L) && (p = d(d({}, p), ws(m.data, t.options))), e._optimisticResults === "isRestoring" && (p.fetchStatus = "idle")
            }
            let {
                error: A,
                errorUpdatedAt: b,
                status: O
            } = p;
            if (e.select && p.data !== void 0)
                if (a && p.data === (h == null ? void 0 : h.data) && e.select === i(this, zt)) u = i(this, Ft);
                else try {
                    c(this, zt, e.select), u = e.select(p.data), u = Se(a == null ? void 0 : a.data, u, e), c(this, Ft, u), c(this, J, null)
                } catch (w) {
                    c(this, J, w)
                } else u = p.data;
            if (e.placeholderData !== void 0 && u === void 0 && O === "pending") {
                let w;
                if (a != null && a.isPlaceholderData && e.placeholderData === (o == null ? void 0 : o.placeholderData)) w = a.data;
                else if (w = typeof e.placeholderData == "function" ? e.placeholderData((S = i(this, Mt)) == null ? void 0 : S.state.data, i(this, Mt)) : e.placeholderData, e.select && w !== void 0) try {
                    w = e.select(w), c(this, J, null)
                } catch (C) {
                    c(this, J, C)
                }
                w !== void 0 && (O = "success", u = Se(a == null ? void 0 : a.data, w, e), D = !0)
            }
            i(this, J) && (A = i(this, J), u = i(this, Ft), b = Date.now(), O = "error");
            const P = p.fetchStatus === "fetching",
                T = O === "pending",
                I = O === "error",
                q = T && P,
                y = u !== void 0;
            return {
                status: O,
                fetchStatus: p.fetchStatus,
                isPending: T,
                isSuccess: O === "success",
                isError: I,
                isInitialLoading: q,
                isLoading: q,
                data: u,
                dataUpdatedAt: p.dataUpdatedAt,
                error: A,
                errorUpdatedAt: b,
                failureCount: p.fetchFailureCount,
                failureReason: p.fetchFailureReason,
                errorUpdateCount: p.errorUpdateCount,
                isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
                isFetchedAfterMount: p.dataUpdateCount > l.dataUpdateCount || p.errorUpdateCount > l.errorUpdateCount,
                isFetching: P,
                isRefetching: P && !T,
                isLoadingError: I && !y,
                isPaused: p.fetchStatus === "paused",
                isPlaceholderData: D,
                isRefetchError: I && y,
                isStale: Fe(t, e),
                refetch: this.refetch
            }
        }
        updateResult(t) {
            const e = i(this, k),
                r = this.createResult(i(this, E), this.options);
            if (c(this, mt, i(this, E).state), c(this, Lt, this.options), i(this, mt).data !== void 0 && c(this, Mt, i(this, E)), ue(r, e)) return;
            c(this, k, r);
            const n = {};
            (t == null ? void 0 : t.listeners) !== !1 && (() => {
                if (!e) return !0;
                const {
                    notifyOnChangeProps: a
                } = this.options, h = typeof a == "function" ? a() : a;
                if (h === "all" || !h && !i(this, It).size) return !0;
                const o = new Set(h != null ? h : i(this, It));
                return this.options.throwOnError && o.add("error"), Object.keys(i(this, k)).some(l => {
                    const m = l;
                    return i(this, k)[m] !== e[m] && o.has(m)
                })
            })() && (n.listeners = !0), v(this, fe, Es).call(this, d(d({}, n), t))
        }
        onQueryUpdate() {
            this.updateResult(), this.hasListeners() && v(this, Jt, Re).call(this)
        }
    }, K = new WeakMap, E = new WeakMap, Bt = new WeakMap, k = new WeakMap, mt = new WeakMap, Lt = new WeakMap, J = new WeakMap, zt = new WeakMap, Ft = new WeakMap, Mt = new WeakMap, vt = new WeakMap, gt = new WeakMap, ut = new WeakMap, It = new WeakMap, bt = new WeakSet, Ht = function(t) {
        v(this, te, _e).call(this);
        let e = i(this, E).fetch(this.options, t);
        return t != null && t.throwOnError || (e = e.catch(j)), e
    }, Wt = new WeakSet, we = function() {
        v(this, Yt, Ce).call(this);
        const t = wt(this.options.staleTime, i(this, E));
        if (Qt || i(this, k).isStale || !be(t)) return;
        const e = ps(i(this, k).dataUpdatedAt, t) + 1;
        c(this, vt, setTimeout(() => {
            i(this, k).isStale || this.updateResult()
        }, e))
    }, $t = new WeakSet, Ee = function() {
        var t;
        return (t = typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(i(this, E)) : this.options.refetchInterval) != null ? t : !1
    }, Xt = new WeakSet, Pe = function(t) {
        v(this, Zt, De).call(this), c(this, ut, t), !Qt && B(this.options.enabled, i(this, E)) !== !1 && be(i(this, ut)) && i(this, ut) !== 0 && c(this, gt, setInterval(() => {
            (this.options.refetchIntervalInBackground || Le.isFocused()) && v(this, bt, Ht).call(this)
        }, i(this, ut)))
    }, Jt = new WeakSet, Re = function() {
        v(this, Wt, we).call(this), v(this, Xt, Pe).call(this, v(this, $t, Ee).call(this))
    }, Yt = new WeakSet, Ce = function() {
        i(this, vt) && (clearTimeout(i(this, vt)), c(this, vt, void 0))
    }, Zt = new WeakSet, De = function() {
        i(this, gt) && (clearInterval(i(this, gt)), c(this, gt, void 0))
    }, te = new WeakSet, _e = function() {
        const t = i(this, K).getQueryCache().build(i(this, K), this.options);
        if (t === i(this, E)) return;
        const e = i(this, E);
        c(this, E, t), c(this, Bt, t.state), this.hasListeners() && (e == null || e.removeObserver(this), t.addObserver(this))
    }, fe = new WeakSet, Es = function(t) {
        M.batch(() => {
            t.listeners && this.listeners.forEach(e => {
                e(i(this, k))
            }), i(this, K).getQueryCache().notify({
                query: i(this, E),
                type: "observerResultsUpdated"
            })
        })
    }, ds);

function ts(s, t) {
    return function(e, r) {
        return B(r.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && r.retryOnMount === !1)
    }(s, t) || s.state.data !== void 0 && Ae(s, t, t.refetchOnMount)
}

function Ae(s, t, e) {
    if (B(t.enabled, s) !== !1) {
        const r = typeof e == "function" ? e(s) : e;
        return r === "always" || r !== !1 && Fe(s, t)
    }
    return !1
}

function es(s, t, e, r) {
    return (s !== t || B(r.enabled, s) === !1) && (!e.suspense || s.state.status !== "error") && Fe(s, e)
}

function Fe(s, t) {
    return B(t.enabled, s) !== !1 && s.isStaleByTime(wt(t.staleTime, s))
}
var ht, ct, H, Z, xt, he, ee, Te, fs, Js = (fs = class extends Ut {
    constructor(t, e) {
        super();
        f(this, xt);
        f(this, ee);
        f(this, ht, void 0);
        f(this, ct, void 0);
        f(this, H, void 0);
        f(this, Z, void 0);
        c(this, ht, t), this.setOptions(e), this.bindMethods(), v(this, xt, he).call(this)
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
    }
    setOptions(t) {
        var r;
        const e = this.options;
        this.options = i(this, ht).defaultMutationOptions(t), ue(this.options, e) || i(this, ht).getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: i(this, H),
            observer: this
        }), e != null && e.mutationKey && this.options.mutationKey && Ot(e.mutationKey) !== Ot(this.options.mutationKey) ? this.reset() : ((r = i(this, H)) == null ? void 0 : r.state.status) === "pending" && i(this, H).setOptions(this.options)
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = i(this, H)) == null || t.removeObserver(this))
    }
    onMutationUpdate(t) {
        v(this, xt, he).call(this), v(this, ee, Te).call(this, t)
    }
    getCurrentResult() {
        return i(this, ct)
    }
    reset() {
        var t;
        (t = i(this, H)) == null || t.removeObserver(this), c(this, H, void 0), v(this, xt, he).call(this), v(this, ee, Te).call(this)
    }
    mutate(t, e) {
        var r;
        return c(this, Z, e), (r = i(this, H)) == null || r.removeObserver(this), c(this, H, i(this, ht).getMutationCache().build(i(this, ht), this.options)), i(this, H).addObserver(this), i(this, H).execute(t)
    }
}, ht = new WeakMap, ct = new WeakMap, H = new WeakMap, Z = new WeakMap, xt = new WeakSet, he = function() {
    var e, r;
    const t = (r = (e = i(this, H)) == null ? void 0 : e.state) != null ? r : {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
    c(this, ct, R(d({}, t), {
        isPending: t.status === "pending",
        isSuccess: t.status === "success",
        isError: t.status === "error",
        isIdle: t.status === "idle",
        mutate: this.mutate,
        reset: this.reset
    }))
}, ee = new WeakSet, Te = function(t) {
    M.batch(() => {
        var e, r, n, a, h, o, l, m;
        if (i(this, Z) && this.hasListeners()) {
            const u = i(this, ct).variables,
                p = i(this, ct).context;
            (t == null ? void 0 : t.type) === "success" ? ((r = (e = i(this, Z)).onSuccess) == null || r.call(e, t.data, u, p), (a = (n = i(this, Z)).onSettled) == null || a.call(n, t.data, null, u, p)) : (t == null ? void 0 : t.type) === "error" && ((o = (h = i(this, Z)).onError) == null || o.call(h, t.error, u, p), (m = (l = i(this, Z)).onSettled) == null || m.call(l, void 0, t.error, u, p))
        }
        this.listeners.forEach(u => {
            u(i(this, ct))
        })
    })
}, fs);

function Ys(s) {
    return s
}
const Zs = globalThis._bc,
    {
        $DEVCOMP: Ro,
        $PROXY: Co,
        $TRACK: Do,
        DEV: _o,
        ErrorBoundary: Ao,
        For: To,
        Index: qo,
        Match: Lo,
        Show: Fo,
        Suspense: Mo,
        SuspenseList: Io,
        Switch: xo,
        batch: Qo,
        cancelCallback: Uo,
        catchError: ko,
        children: Ko,
        createComponent: Ho,
        createComputed: Gt,
        createContext: Ps,
        createDeferred: Go,
        createEffect: Vo,
        createMemo: de,
        createReaction: jo,
        createRenderEffect: ti,
        createResource: ei,
        createRoot: No,
        createSelector: Bo,
        createSignal: si,
        createUniqueId: zo,
        enableExternalSource: Wo,
        enableHydration: $o,
        enableScheduling: Xo,
        equalFn: Jo,
        from: Yo,
        getListener: Zo,
        getOwner: tu,
        indexArray: eu,
        lazy: su,
        mapArray: iu,
        mergeProps: ru,
        observable: nu,
        on: ce,
        onCleanup: Me,
        onError: au,
        onMount: ou,
        requestCallback: uu,
        resetErrorBoundaries: hu,
        runWithOwner: cu,
        sharedConfig: lu,
        splitProps: du,
        startTransition: fu,
        untrack: pu,
        useContext: Rs,
        useTransition: yu
    } = Zs.dxzurp,
    ii = globalThis._bc,
    {
        $RAW: mu,
        DEV: vu,
        createMutable: gu,
        createStore: Cs,
        modifyMutable: bu,
        produce: Ou,
        reconcile: ri,
        unwrap: Ds
    } = ii.inqq9w;
var _s = Ps(void 0),
    As = s => {
        if (s) return s;
        const t = Rs(_s);
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t()
    },
    ni = s => (ti(t => (t == null || t(), s.client.mount(), s.client.unmount.bind(s.client))), Me(() => s.client.unmount()), ge(_s.Provider, {
        value: () => s.client,
        get children() {
            return s.children
        }
    }));

function Ts(s, t) {
    return typeof s == "function" ? s(...t) : !!s
}

function ai() {}
var qs = Ps(() => !1),
    oi = () => Rs(qs);
qs.Provider;
var ss = (s, t) => {
    if (!St) return t;
    const e = R(d({}, Ds(t)), {
        refetch: void 0
    });
    return "fetchNextPage" in t && (e.fetchNextPage = void 0, e.fetchPreviousPage = void 0), e.hydrationData = d({
        state: s.state,
        queryKey: s.queryKey,
        queryHash: s.queryHash
    }, s.meta && {
        meta: s.meta
    }), e
};

function ui(s, t, e) {
    const r = de(() => As(e == null ? void 0 : e())),
        n = oi();
    let a = !1;
    const h = de(() => {
            const y = r().defaultQueryOptions(s());
            return y._optimisticResults = n() ? "isRestoring" : "optimistic", y.structuralSharing = !1, St && (y.retry = !1, y.throwOnError = !0), y
        }),
        o = h(),
        [l, m] = si(new t(r(), h()));
    let u = l().getOptimisticResult(h());
    const [p, D] = Cs(u), A = () => {
        a && (P == null || P(), a = !1)
    }, b = () => l().subscribe(y => {
        u = y, queueMicrotask(() => q())
    });

    function O(y) {
        const S = l().options,
            w = S.reconcile;
        D(C => function(L, g, x) {
            if (x === !1) return g;
            if (typeof x == "function") {
                const ie = x(L.data, g.data);
                return R(d({}, g), {
                    data: ie
                })
            }
            let z = g.data;
            if (L.data === void 0) try {
                z = structuredClone(z)
            } catch (ie) {}
            const se = ri(z, {
                key: x
            })(L.data);
            return R(d({}, g), {
                data: se
            })
        }(C, y, w !== void 0 && w, S.queryHash))
    }
    let P = null,
        T = null;
    const [I, {
        refetch: q
    }] = ei(() => {
        const y = l();
        return new Promise((S, w) => (T = S, St ? P = ((C, L) => l().subscribe(g => {
            M.batchCalls(() => {
                const x = l().getCurrentQuery(),
                    z = ss(x, g);
                z.isError ? (L(z.error), A()) : (C(z), A())
            })()
        }))(S, w) : P || n() || (P = b()), y.updateResult(), u.isError && !u.isFetching && !n() && Ts(y.options.throwOnError, [u.error, y.getCurrentQuery()]) ? (O(u), w(u.error)) : u.isLoading ? void O(u) : (T = null, S(ss(y.getCurrentQuery(), u)))))
    }, {
        storage: function() {
            return [() => p, y => {
                const S = Ds(p);
                if (typeof y == "function" && (y = y(S)), y == null ? void 0 : y.hydrationData) {
                    const w = y,
                        {
                            hydrationData: C
                        } = w;
                    y = Kt(w, ["hydrationData"])
                }
                O(y)
            }]
        },
        get deferStream() {
            return s().deferStream
        },
        onHydrated(y, S) {
            if (S.value && "hydrationData" in S.value && function(C, L, g) {
                    var Ie, xe, Qe, Ue;
                    if (typeof L != "object" || L === null) return;
                    const x = C.getMutationCache(),
                        z = C.getQueryCache(),
                        se = (Ue = (Qe = (Ie = g == null ? void 0 : g.defaultOptions) == null ? void 0 : Ie.deserializeData) != null ? Qe : (xe = C.getDefaultOptions().hydrate) == null ? void 0 : xe.deserializeData) != null ? Ue : Ys,
                        ie = L.mutations || [],
                        Ls = L.queries || [];
                    ie.forEach(ye => {
                        var re = ye,
                            {
                                state: pe
                            } = re,
                            tt = Kt(re, ["state"]);
                        var kt, et;
                        x.build(C, d(d(d({}, (kt = C.getDefaultOptions().hydrate) == null ? void 0 : kt.mutations), (et = g == null ? void 0 : g.defaultOptions) == null ? void 0 : et.mutations), tt), pe)
                    }), Ls.forEach(({
                        queryKey: pe,
                        state: tt,
                        queryHash: ye,
                        meta: re,
                        promise: kt
                    }) => {
                        var He, Ge;
                        let et = z.get(ye);
                        const ke = tt.data === void 0 ? tt.data : se(tt.data);
                        if (et) {
                            if (et.state.dataUpdatedAt < tt.dataUpdatedAt) {
                                const Ke = tt,
                                    {
                                        fetchStatus: Ve
                                    } = Ke,
                                    Fs = Kt(Ke, ["fetchStatus"]);
                                et.setState(R(d({}, Fs), {
                                    data: ke
                                }))
                            }
                        } else et = z.build(C, R(d(d({}, (He = C.getDefaultOptions().hydrate) == null ? void 0 : He.queries), (Ge = g == null ? void 0 : g.defaultOptions) == null ? void 0 : Ge.queries), {
                            queryKey: pe,
                            queryHash: ye,
                            meta: re
                        }), R(d({}, tt), {
                            data: ke,
                            fetchStatus: "idle"
                        }));
                        if (kt) {
                            const Ve = Promise.resolve(kt).then(se);
                            et.fetch(void 0, {
                                initialPromise: Ve
                            })
                        }
                    })
                }(r(), {
                    queries: [d({}, S.value.hydrationData)]
                }), P) return;
            const w = d({}, o);
            !o.staleTime && o.initialData || !S.value || (w.refetchOnMount = !1), l().setOptions(w), O(l().getOptimisticResult(w)), P = b()
        }
    });
    return Gt(ce(r, y => {
        P && P();
        const S = new t(y, h());
        P = b(), m(S)
    }, {
        defer: !0
    })), Gt(ce(n, y => {
        y || St || q()
    }, {
        defer: !0
    })), Me(() => {
        St && I.loading ? a = !0 : (P && (P(), P = null), T && !St && (T(u), T = null))
    }), Gt(ce([l, h], ([y, S]) => {
        y.setOptions(S), O(y.getOptimisticResult(S)), q()
    }, {
        defer: !0
    })), new Proxy(p, {
        get: (y, S) => {
            var w, C;
            return S === "data" ? p.data !== void 0 ? (w = I.latest) == null ? void 0 : w.data : (C = I()) == null ? void 0 : C.data : Reflect.get(y, S)
        }
    })
}

function Su(s, t) {
    return ui(de(() => s()), Xs, t)
}

function wu(s, t) {
    const e = de(() => As(t == null ? void 0 : t())),
        r = new Js(e(), s()),
        n = (l, m) => {
            r.mutate(l, m).catch(ai)
        },
        [a, h] = Cs(R(d({}, r.getCurrentResult()), {
            mutate: n,
            mutateAsync: r.getCurrentResult().mutate
        }));
    Gt(() => {
        r.setOptions(s())
    }), Gt(ce(() => a.status, () => {
        if (a.isError && Ts(r.options.throwOnError, [a.error])) throw a.error
    }));
    const o = r.subscribe(l => {
        h(R(d({}, l), {
            mutate: n,
            mutateAsync: l.mutate
        }))
    });
    return Me(o), a
}
const hi = new class extends $s {
        constructor(s = {}) {
            super(s)
        }
    }({
        defaultOptions: {
            queries: {
                retry: !1,
                staleTime: 6e5,
                gcTime: 12e5,
                refetchOnWindowFocus: !1
            }
        }
    }),
    Eu = Us(R(d({
        init: () => F(() =>
            import ("./init-2a155536.js"), []),
        Trading: () => F(() =>
            import ("./index-5f7f002c.js"), ["assets/index-5f7f002c.js", "assets/router-5b68e988.js", "assets/i18n-db65699e.js"]),
        TradingLayout: () => F(() =>
            import ("./Layout-a266c00d.js"), ["assets/Layout-a266c00d.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/i18n-db65699e.js"])
    }, (is = {
        GameLayout: () => F(() =>
            import ("./Layout-285b0914.js").then(s => s.L), ["assets/Layout-285b0914.js", "assets/router-5b68e988.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/i18n-db65699e.js", "assets/game-434e4797.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/SingleBigArrow-9c798a86.js", "assets/LR7LBJN3-81373dd7.js", "assets/index-9e40dbc5.js", "assets/table-ac94fdd5.js", "assets/ImgShareSignal-661869e0.js"]),
        SlotsGameIframe: () => F(() =>
            import ("./MobileSlotsGameIframe-fe124809.js"), ["assets/MobileSlotsGameIframe-fe124809.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/Message-f1b40bc8.js", "assets/deduction-557ca514.js", "assets/amount-641aafec.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/SingleBigArrow-9c798a86.js", "assets/use-coin-format-283b73dd.js"]),
        ScoreGameIframe: () => F(() =>
            import ("./MobileSlotsGameIframe-405d519f.js"), ["assets/MobileSlotsGameIframe-405d519f.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/Message-f1b40bc8.js", "assets/deduction-557ca514.js", "assets/amount-641aafec.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/SingleBigArrow-9c798a86.js", "assets/use-coin-format-283b73dd.js", "assets/Layout-285b0914.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/table-ac94fdd5.js", "assets/ImgShareSignal-661869e0.js", "assets/index-0d551e6e.js"]),
        CreatorDetail: () => F(() =>
            import ("./CreatorDetail-39ddaec7.js"), ["assets/CreatorDetail-39ddaec7.js", "assets/LabelWithTooltip-4f664ae2.js", "assets/i18n-db65699e.js", "assets/index-66592859.js", "assets/tooltip-1996889f.js", "assets/utils-65805dbc.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/E53DB7BS-c94cf300.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/Tag-69457acc.js", "assets/utils-e1e0b898.js", "assets/router-5b68e988.js", "assets/use-coin-format-283b73dd.js"]),
        History: () => F(() =>
            import ("./History-851a55ea.js"), ["assets/History-851a55ea.js", "assets/table-ac94fdd5.js", "assets/utils-65805dbc.js", "assets/Tag-69457acc.js", "assets/i18n-db65699e.js", "assets/use-coin-format-283b73dd.js", "assets/utils-e1e0b898.js"]),
        CopyStrategy: () => F(() =>
            import ("./CopyStrategy-9f9e5439.js"), ["assets/CopyStrategy-9f9e5439.js", "assets/LabelWithTooltip-4f664ae2.js", "assets/i18n-db65699e.js", "assets/index-66592859.js", "assets/tooltip-1996889f.js", "assets/utils-65805dbc.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/E53DB7BS-c94cf300.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/utils-e1e0b898.js", "assets/SA27V5YJ-37d7d126.js", "assets/amount-641aafec.js", "assets/number-field-6c429107.js", "assets/slider-6dd1aa49.js", "assets/SingleBigArrow-9c798a86.js", "assets/animate.es-7d48ea54.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index.es-7f7492fe.js", "assets/router-5b68e988.js", "assets/use-coin-format-283b73dd.js"]),
        HistoryDetail: () => F(() =>
            import ("./HistoryDetail-d7a18ab8.js"), ["assets/HistoryDetail-d7a18ab8.js", "assets/i18n-db65699e.js", "assets/LabelWithTooltip-4f664ae2.js", "assets/index-66592859.js", "assets/tooltip-1996889f.js", "assets/utils-65805dbc.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/E53DB7BS-c94cf300.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/Tag-69457acc.js", "assets/utils-e1e0b898.js", "assets/router-5b68e988.js", "assets/use-coin-format-283b73dd.js"]),
        StrategyDetail: () => F(() =>
            import ("./StrategyDetail-17998182.js"), ["assets/StrategyDetail-17998182.js", "assets/i18n-db65699e.js", "assets/LabelWithTooltip-4f664ae2.js", "assets/index-66592859.js", "assets/tooltip-1996889f.js", "assets/utils-65805dbc.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/E53DB7BS-c94cf300.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/Tag-69457acc.js", "assets/utils-e1e0b898.js", "assets/router-5b68e988.js", "assets/use-coin-format-283b73dd.js"]),
        CrashStrategyGuide: () => F(() =>
            import ("./Guide-52f42359.js"), ["assets/Guide-52f42359.js", "assets/index-66592859.js", "assets/i18n-db65699e.js"]),
        AllPlayers: () => F(() =>
            import ("./AllPlayers-6c7eede3.js"), ["assets/AllPlayers-6c7eede3.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/use-coin-format-283b73dd.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/index-7498b9bb.js", "assets/amount-641aafec.js", "assets/game-434e4797.js", "assets/SA27V5YJ-37d7d126.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/Layout-285b0914.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/SingleBigArrow-9c798a86.js", "assets/LR7LBJN3-81373dd7.js", "assets/index-9e40dbc5.js", "assets/table-ac94fdd5.js", "assets/ImgShareSignal-661869e0.js", "assets/number-field-6c429107.js", "assets/FN6EICGO-68c47d3b.js"]),
        Comments: () => F(() =>
            import ("./index-9e40dbc5.js"), ["assets/index-9e40dbc5.js", "assets/i18n-db65699e.js", "assets/user-20d68319.js", "assets/amount-641aafec.js", "assets/_commonjsHelpers-0f403cef.js"]),
        GameDetail: () => F(() =>
            import ("./index-7498b9bb.js").then(s => s.i), ["assets/index-7498b9bb.js", "assets/amount-641aafec.js", "assets/_commonjsHelpers-0f403cef.js", "assets/i18n-db65699e.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/Layout-285b0914.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/SingleBigArrow-9c798a86.js", "assets/LR7LBJN3-81373dd7.js", "assets/index-9e40dbc5.js", "assets/table-ac94fdd5.js", "assets/ImgShareSignal-661869e0.js", "assets/number-field-6c429107.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js"]),
        ProvablyFair: () => F(() =>
            import ("./ProvablyFair-103bf46b.js"), ["assets/ProvablyFair-103bf46b.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css"]),
        GameDetailRedirect: () => F(() =>
            import ("./GameDetailRedirect-b276303c.js"), ["assets/GameDetailRedirect-b276303c.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/amount-641aafec.js", "assets/_commonjsHelpers-0f403cef.js", "assets/i18n-db65699e.js", "assets/game-434e4797.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/Layout-285b0914.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/SingleBigArrow-9c798a86.js", "assets/LR7LBJN3-81373dd7.js", "assets/index-9e40dbc5.js", "assets/table-ac94fdd5.js", "assets/ImgShareSignal-661869e0.js", "assets/number-field-6c429107.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js"])
    }, Object.entries(is).reduce((s, [t, e]) => {
        var r;
        return /^[A-Z]/.test(t) && (s[t] = (r = e, () => lt(void 0, null, function*() {
            const n = (yield r()).default;
            return {
                default: a => ge(ni, {
                    client: hi,
                    get children() {
                        return ge(n, a)
                    }
                })
            }
        }))), s
    }, {}))), {
        shareWinRegister: () => F(() =>
            import ("./shareWinRegister-b8a65ccc.js"), ["assets/shareWinRegister-b8a65ccc.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/i18n-db65699e.js", "assets/game-6f69c2d8.js", "assets/use-coin-format-283b73dd.js", "assets/ImgShareSignal-661869e0.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js"])
    }));
var is;
export {
    zo as $, So as A, kn as B, gi as C, Ei as D, Vn as E, bn as F, Wi as G, To as H, Rr as I, Qa as J, Ti as K, Ui as L, zi as M, Di as N, Cs as O, Ea as P, Gt as Q, ji as R, Fo as S, Qn as T, ei as U, sr as V, lo as W, Ps as X, du as Y, eo as Z, F as _, Xn as a, xo as a$, Rs as a0, na as a1, dr as a2, hr as a3, Mo as a4, li as a5, wu as a6, Nn as a7, Ri as a8, ya as a9, ki as aA, Qr as aB, qr as aC, Dr as aD, zr as aE, yn as aF, Un as aG, zn as aH, Fr as aI, fn as aJ, Ci as aK, pi as aL, wo as aM, Li as aN, qo as aO, fr as aP, La as aQ, cn as aR, sn as aS, an as aT, Ho as aU, Ur as aV, ni as aW, hi as aX, Ko as aY, di as aZ, As as a_, St as aa, _r as ab, pr as ac, lr as ad, yr as ae, Ji as af, Qo as ag, ln as ah, su as ai, Oi as aj, Oo as ak, tu as al, cu as am, so as an, dn as ao, No as ap, On as aq, Vr as ar, Hn as as, ru as at, Yo as au, ce as av, xn as aw, aa as ax, _o as ay, pu as az, vr as b, Lo as b0, Fi as b1, ti as b2, Do as b3, yu as b4, Ao as b5, _a as b6, or as b7, Eu as b8, si as c, Kr as d, Su as e, Vo as f, _n as g, Tn as h, ou as i, Sr as j, hn as k, Wn as l, de as m, ge as n, Me as o, Pi as p, to as q, on as r, Fn as s, rn as t, Bn as u, Ya as v, Eo as w, ka as x, Ia as y, uo as z
};