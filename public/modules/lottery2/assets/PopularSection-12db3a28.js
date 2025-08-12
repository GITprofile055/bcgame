var B = Object.defineProperty,
    F = Object.defineProperties;
var U = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty,
    z = Object.prototype.propertyIsEnumerable;
var S = (o, e, a) => e in o ? B(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : o[e] = a,
    k = (o, e) => {
        for (var a in e || (e = {})) V.call(e, a) && S(o, a, e[a]);
        if (w)
            for (var a of w(e)) z.call(e, a) && S(o, a, e[a]);
        return o
    },
    D = (o, e) => F(o, U(e));
var f = (o, e, a) => new Promise((L, h) => {
    var y = l => {
            try {
                p(a.next(l))
            } catch (c) {
                h(c)
            }
        },
        _ = l => {
            try {
                p(a.throw(l))
            } catch (c) {
                h(c)
            }
        },
        p = l => l.done ? L(l.value) : Promise.resolve(l.value).then(y, _);
    p((a = a.apply(o, e)).next())
});
import {
    e as H,
    f as K,
    j as M,
    b as O,
    i as m,
    c as n,
    a as I,
    m as q,
    S as G,
    t as b
} from "./solid-js-2e2908f8.js";
import {
    P as J
} from "./PopularSectionItem-bc0cd3d0.js";
import {
    u as Q
} from "./store-c851faad.js";
import {
    b as W,
    a as X
} from "./apis-9bc5cda9.js";
import {
    p as Y
} from "./store-2ed2b91e.js";
import {
    u as Z,
    b as tt,
    e as d,
    B as et,
    A as $,
    I as A,
    K as rt,
    M as at,
    s as v,
    g as C
} from "./manifest-5fcb2c8d.js";
import {
    t as g
} from "./i18n-d0803583.js";
import {
    d as ot
} from "./debounce-f7740f4e.js";
import "./index-0f5bf80c.js";
import "./currency-fd1e1eb4.js";
import "./CountryAvatar-6f446c9d.js";
import "./countries-a369bbd3.js";
import "./lottery-af48bec0.js";
import "./logo-c5334a6f.js";
import "./Detail.interface-808c1c29.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./isObject-909534d5.js";
import "./_MapCache-9c96b8d5.js";
var st = b('<span class="inline-flex items-center dark:bg-layer5 bg-black_alpha5 gap-1 p-2 rounded-lg"><label class="text-primary text-sm font-semibold">'),
    it = b('<div><section class="flex justify-between items-center my-3"><h2 class="text-primary text-base font-extrabold">'),
    nt = b('<section class="flex items-center gap-2">'),
    lt = b('<div class="rounded-xl bg-layer4">');
const At = function() {
    const o = Z(),
        {
            store: e,
            setStore: a
        } = Q(),
        L = ["ja", "ar", "my", "te", "fr", "id", "es", "hi", "tr", "fa", "ru", "de", "fi", "ms"],
        h = ["vi", "tl", "pt", "pl", "it", "uk", "ta"],
        y = t => {
            if (t.length <= 0) return;
            const s = e.favourteLotteries;
            return t.map(r => {
                const i = s.find(j => j.lotteryId === r.id);
                return r.hasLike = !!i, r
            })
        },
        _ = () => f(this, null, function*() {
            const t = "/platform-lottery/lottery-info/list-popular",
                s = {
                    distinctId: e.distinctId,
                    areaCode: e.areaCode,
                    bcLang: v.lang,
                    browserLang: navigator.language
                };
            return yield C().post(t, s)
        }),
        p = () => f(this, null, function*() {
            const t = "/lottery/five-plus-one/current-info/",
                s = yield C().get(t);
            return {
                id: "0",
                lotteryId: "0",
                drawEventId: 0,
                status: 0,
                lotteryStatus: 0,
                name: g("__ENV_SITE__ Lottery"),
                lotteryName: g("__ENV_SITE__ Lottery"),
                country: "USA",
                topPrize: 1e5,
                drawTime: s.drawnTime,
                isFavourite: !1
            }
        }),
        l = () => f(this, null, function*() {
            let t = [];
            if (e.distinctId) {
                const s = yield Promise.all([p(), _()]), u = [s[0], ...s[1]];
                t = y(u) || []
            }
            return t
        }),
        [c, {
            mutate: x
        }] = H(() => e.distinctId, l),
        E = ot(t => f(this, null, function*() {
            var r;
            if (!tt.login) {
                o("/login/signin");
                return
            }
            const s = (r = c()) == null ? void 0 : r.map(i => D(k({}, i), {
                hasLike: i.id === t.id ? !t.hasLike : i.hasLike
            }));
            x(s), yield W(t.id, !t.hasLike);
            const u = yield X();
            a(Y(i => i.favourteLotteries = u))
        })),
        P = () => {
            if (c() && e.favourteLotteries.length) {
                const t = y(c());
                x(t)
            }
        };
    K(() => (M(P), e.favourteLotteries));
    const [R, N] = O(), T = () => {
        let t = d.mobile ? .95 : 1;
        return L.includes(v.lang) ? t = d.mobile ? .85 : .9 : h.includes(v.lang) && (t = .85), t
    };
    return (() => {
        var t = it(),
            s = t.firstChild,
            u = s.firstChild;
        return m(u, () => g("Popular")), m(s, n(I, {
            get when() {
                return d.mobile
            },
            get fallback() {
                return (() => {
                    var r = nt();
                    return m(r, n(et, {
                        class: "dark:bg-layer5 bg-black_alpha5 h-8",
                        get children() {
                            return n($, {
                                href: "/lottery/allLotteries?sort=lottery_popular",
                                class: "font-extrabold text-sm text-primary inline-flex items-center",
                                get children() {
                                    return [q(() => g("All")), n(A, {
                                        name: "Arrow",
                                        class: "w-4 h-4 rotate-180"
                                    })]
                                }
                            })
                        }
                    }), null), m(r, n(rt, {
                        smoothListSelector: R
                    }), null), r
                })()
            },
            get children() {
                return n($, {
                    href: "/lottery/allLotteries?sort=lottery_popular",
                    get children() {
                        var r = st(),
                            i = r.firstChild;
                        return m(i, () => g("All")), m(r, n(A, {
                            name: "Arrow",
                            class: "w-3 h-3 rotate-180 fill-secondary"
                        }), null), r
                    }
                })
            }
        }), null), m(t, n(G, {
            get children() {
                return n(at, {
                    get class() {
                        return `${d.mobile?"-mx-4":"mx-0"} gap-2 grid-col-2 grid-rows-2`
                    },
                    get style() {
                        return {
                            "--grid-gap": ".5rem",
                            "--grid-padding": d.mobile ? "1rem" : "0px",
                            "--aspect-ratio": T()
                        }
                    },
                    ref: r => {
                        N(r)
                    },
                    get data() {
                        return c() || Array(d.mobile ? 4 : 12)
                    },
                    children: (r, i) => n(I, {
                        get when() {
                            return r()
                        },
                        get fallback() {
                            return lt()
                        },
                        get children() {
                            return n(J, {
                                get data() {
                                    return r()
                                },
                                onClickLike: E,
                                get itemIndex() {
                                    return i()
                                }
                            })
                        }
                    })
                })
            }
        }), null), t
    })()
};
export {
    At as PopularSection, At as
    default
};