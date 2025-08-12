var z = (p, d, n) => new Promise((m, o) => {
    var u = a => {
            try {
                i(n.next(a))
            } catch (g) {
                o(g)
            }
        },
        f = a => {
            try {
                i(n.throw(a))
            } catch (g) {
                o(g)
            }
        },
        i = a => a.done ? m(a.value) : Promise.resolve(a.value).then(u, f);
    i((n = n.apply(p, d)).next())
});
import {
    b as E,
    c as l,
    S as k,
    i as r,
    F as P,
    a as _,
    g as A,
    h as B,
    k as U,
    t as c,
    e as W,
    f as X
} from "./solid-js-2e2908f8.js";
import {
    b as q
} from "./CountryAvatar-6f446c9d.js";
import {
    u as K,
    L as M,
    e as v,
    I as O,
    f as L,
    P as Q,
    g as V
} from "./manifest-5fcb2c8d.js";
import {
    t as b
} from "./i18n-d0803583.js";
import "./countries-a369bbd3.js";
import "./lottery-af48bec0.js";
var Y = c('<section class="latestResultsSectionWrap mt-4"><h2 class="my-3 text-primary text-base font-extrabold"></h2><div class="latest-results-table-box rounded-xl p-0 bg-layer4"><table class=w-full><thead><tr><th class="flex items-center text-left border-l-0 rounded-none pl-3 sm:pl-4 text-secondary text-xs font-semibold"></th><th class="flex items-center border-l-0 rounded-none text-secondary text-xs font-semibold text-right"><div class=w-full></div></th><th></th></tr></thead><tbody>'),
    Z = c('<p class="text-xs font-semibold text-warning">'),
    tt = c('<label class="text-brand text-lg font-extrabold w-full flex justify-end pr-4">'),
    et = c('<tr><td class="flex items-center text-left border-l-0 rounded-none pl-3 sm:pl-4"><div class="flex gap-2 w-full items-start flex-col py-2"><section class="w-full overflow-hidden"><h2 class="cursor-pointer truncate text-sm text-primary font-semibold"></h2></section></div></td><td class="flex items-center text-left border-l-0 rounded-none relative border-r-0"><section class="flex items-center justify-end gap-2 flex-wrap pr-2 w-full"></section></td><td><section class="w-full cursor-pointer flex items-center justify-center text-lg italic font-bold">'),
    rt = c('<p class="lottery-date font-semibold m-0 text-xs text-secondary">'),
    lt = c(`<span class="center rounded-full w-6 h-6 bg-[url('/src/assets/lottery/ball-white.png')] bg-contain text-primary_brand text-xs font-extrabold">`),
    st = c(`<span class="center rounded-full w-6 h-6 bg-[url('/src/assets/lottery/jackpot_ball.png')] bg-contain text-primary_brand text-xs font-extrabold">`);
const at = (p, d) => {
        const [n] = W(p, d), [m, o] = E(n);
        return X(() => {
            o(n)
        }), [m]
    },
    gt = function() {
        const p = K(),
            [d, n] = E(1),
            m = u => z(this, null, function*() {
                const f = "/platform-lottery/lottery-info/latest-results",
                    i = {
                        page: u,
                        pageSize: 10
                    };
                return yield V().post(f, i)
            }),
            [o] = at(d, m);
        return l(k, {
            get children() {
                var u = Y(),
                    f = u.firstChild,
                    i = f.nextSibling,
                    a = i.firstChild,
                    g = a.firstChild,
                    N = g.firstChild,
                    D = N.firstChild,
                    F = D.nextSibling,
                    G = F.firstChild,
                    H = g.nextSibling;
                return r(f, () => b("Latest Results")), r(D, () => b("Lottery Name")), r(G, () => b("Jackpot Number")), r(H, l(k, {
                    get fallback() {
                        return l(M, {
                            class: "mt-15"
                        })
                    },
                    get children() {
                        return l(P, {
                            get each() {
                                var t;
                                return (t = o()) == null ? void 0 : t.list
                            },
                            children: t => (() => {
                                var x = et(),
                                    R = x.firstChild,
                                    j = R.firstChild,
                                    $ = j.firstChild,
                                    J = $.firstChild,
                                    w = R.nextSibling,
                                    h = w.firstChild,
                                    y = w.nextSibling,
                                    T = y.firstChild;
                                return x.$$click = () => {
                                    p(`/lottery/detail/${t.lotteryId}`)
                                }, r(j, l(q, {
                                    get country() {
                                        return (t == null ? void 0 : t.lotteryId) === "0" ? "Bc" : t.lotteryCountry
                                    }
                                }), $), r(J, () => t.lotteryName), r($, l(_, {
                                    get when() {
                                        return t.lotteryStatus === 1
                                    },
                                    get fallback() {
                                        return (() => {
                                            var e = rt();
                                            return r(e, () => new Date(Number(t.drawTime)).toLocaleString("en-GB")), e
                                        })()
                                    },
                                    get children() {
                                        var e = Z();
                                        return r(e, () => b("Lottery draw suspended")), e
                                    }
                                }), null), w.style.setProperty("background", "transparent"), r(h, l(_, {
                                    get when() {
                                        return t.normalBall
                                    },
                                    get children() {
                                        return l(P, {
                                            get each() {
                                                return t.normalBall.split(",")
                                            },
                                            children: e => (() => {
                                                var s = lt();
                                                return r(s, e), s
                                            })()
                                        })
                                    }
                                }), null), r(h, l(_, {
                                    get when() {
                                        return t.bonusBall
                                    },
                                    get children() {
                                        return l(P, {
                                            get each() {
                                                return t.bonusBall.split(",")
                                            },
                                            children: e => (() => {
                                                var s = st();
                                                return r(s, e), s
                                            })()
                                        })
                                    }
                                }), null), r(T, l(_, {
                                    get when() {
                                        return !v.mobile
                                    },
                                    get fallback() {
                                        return l(O, {
                                            name: "Arrow",
                                            class: "btn-now-arrow-icon text-sm fill-secondary rotate-180 w-4 h-4"
                                        })
                                    },
                                    get children() {
                                        var e = tt();
                                        return r(e, () => {
                                            var s;
                                            return (s = b("Bet Now")) == null ? void 0 : s.toUpperCase()
                                        }), e
                                    }
                                })), A(e => {
                                    var s = L("cursor-pointer grid border-b border-solid border-third", v.mobile ? "py-2 grid-cols-[150px_auto_30px]" : "grid-cols-[300px_auto_200px]"),
                                        C = `translateX(-${t.offsetDis}px)`,
                                        I = L("flex items-center"),
                                        S = v.mobile ? "initial" : "linear-gradient(270deg, rgba(36, 238, 137, 0.14) 0%, rgba(36, 238, 137, 0.00) 100%)";
                                    return s !== e.e && B(x, e.e = s), C !== e.t && ((e.t = C) != null ? h.style.setProperty("transform", C) : h.style.removeProperty("transform")), I !== e.a && B(y, e.a = I), S !== e.o && ((e.o = S) != null ? y.style.setProperty("background", S) : y.style.removeProperty("background")), e
                                }, {
                                    e: void 0,
                                    t: void 0,
                                    a: void 0,
                                    o: void 0
                                }), x
                            })()
                        })
                    }
                })), r(i, l(k, {
                    get children() {
                        return l(Q, {
                            class: "justify-end py-4 mr-4",
                            get current() {
                                return d()
                            },
                            get total() {
                                var t;
                                return (t = o()) == null ? void 0 : t.total
                            },
                            get pageSize() {
                                var t;
                                return (t = o()) == null ? void 0 : t.pageSize
                            },
                            onChange: t => {
                                n(t)
                            }
                        })
                    }
                }), null), A(() => B(N, L("cursor-pointer py-2 grid border-b border-solid border-third", v.mobile ? "grid-cols-[150px_auto_30px]" : "grid-cols-[300px_auto_200px]"))), u
            }
        })
    };
U(["click"]);
export {
    gt as LatestResultsSection, gt as
    default
};