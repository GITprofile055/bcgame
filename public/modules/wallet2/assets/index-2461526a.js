var M = Object.defineProperty,
    R = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty,
    V = Object.prototype.propertyIsEnumerable;
var B = (l, e, t) => e in l ? M(l, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : l[e] = t,
    T = (l, e) => {
        for (var t in e || (e = {})) U.call(e, t) && B(l, t, e[t]);
        if (L)
            for (var t of L(e)) V.call(e, t) && B(l, t, e[t]);
        return l
    },
    N = (l, e) => R(l, D(e));
var x = (l, e, t) => new Promise((n, u) => {
    var s = o => {
            try {
                m(t.next(o))
            } catch (c) {
                u(c)
            }
        },
        p = o => {
            try {
                m(t.throw(o))
            } catch (c) {
                u(c)
            }
        },
        m = o => o.done ? n(o.value) : Promise.resolve(o.value).then(s, p);
    m((t = t.apply(l, e)).next())
});
import {
    i as a,
    c as r,
    t as d,
    D as J,
    m as G,
    f as v,
    s as I,
    e as K,
    b as Y
} from "./web-6f548a65.js";
import {
    e as q,
    c as Q,
    F as X,
    o as Z,
    g as ee,
    b as te
} from "./solid-js-fd4ba123.js";
import {
    a as ae
} from "./router-f73ec727.js";
import {
    L as re,
    S as le,
    c as w,
    B as b,
    j as se,
    A as ne
} from "./manifest-0e8055eb.js";
import {
    t as i
} from "./i18n-bbd6bada.js";
import {
    f as ie
} from "./index-47e6eabb.js";
import {
    u as oe,
    f as z,
    s as g,
    a as ce
} from "./store-614dd174.js";
import {
    c as de
} from "./data-aad419fc.js";
import {
    R as pe,
    S as me,
    a as fe,
    L as ge,
    C as O,
    T as ue,
    W as he,
    b as xe
} from "./Icon-5531a61c.js";
import "./store-2ed2b91e.js";
const be = "/modules/wallet2/assets/headerLogo-3606f0ea.png",
    ve = "/modules/wallet2/assets/headerLogopc-0c17ffae.png";
var we = d("<div>"),
    _e = d('<div class="absolute bottom-0 flex justify-center overflow-hidden rounded-full px-2 text-primary_brand inset-x-4 py-0.5"><div class="font-extrabold whitespace-nowrap text-xs scale-75 leading-none">'),
    $e = d("<span> "),
    ye = d("<span>"),
    Ce = d('<div class="flex items-center gap-1 justify-between font-semibold h-39 p-3 bg-layer4 relative rounded-lg overflow-hidden flex-wrap pr-4 sm:pl-18 md:h-32"style="background-image:linear-gradient(90deg, rgba(36, 238, 137, 0.1) 0%, rgba(36, 238, 137, 0.1) 24%, rgba(36, 238, 137, 0) 44.44%)"><picture class="absolute -left-3 -top-3 sm:left-0"><source media=(min-width:640px)><source media=(min-width:200px)><img src=""alt=logo class="w-32 relative top-[0.7rem] object-contain"></picture><div class="flex z-10 rounded-lg w-full p-3 gap-3 bg-layer2/20 backdrop-blur-sm sm:w-auto lg:backdrop-filter-none dark:bg-[#00000033]"><div class=flex-1><div class="text-base font-extrabold leading-5 mb-0.5"></div><div class="flex flex-col sm:flex-row"><div><span class="mr-2 text-primary"></span><span class=mr-2></span></div><div class="flex items-center gap-2 text-xs"><div><span class=text-secondary>: </span><span class=text-white>$</span></div><div><span class=text-secondary>: </span><span class=text-white>62,358</span></div></div></div></div></div><div class="flex w-full gap-1 sm:w-auto"><a class="flex-1 sm:min-w-40 sm:flex-none"href=/events/bc-token-landing></a><a class="flex-1 sm:min-w-40 sm:flex-none"href=https://whitepaper.bc.game/bc-white-paper/overview/about-bc.game target=_blank></a><a class="flex-1 sm:min-w-40 sm:flex-none"href=https://solscan.io/token/BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin target=_blank>'),
    ke = d('<div class="bc-token-container flex flex-col text-base font-semibold gap-4">'),
    Se = d('<div class="center min-h-100">');

function Pe() {
    const l = Q(() => [{
            path: "/wallet/bc",
            activePath: "/wallet/bc",
            icon: r(pe, {}),
            text: i("Overview"),
            replace: !0
        }, {
            path: "/wallet/bc/swap",
            activePath: "/wallet/bc/swap",
            icon: r(me, {}),
            text: i("Trade"),
            replace: !0
        }, {
            path: "/wallet/bc/vault?currency=BC&type=bill&billtype=Vault&time=604800000&assets=BC",
            activePath: "/wallet/bc/vault",
            icon: r(fe, {}),
            text: i("Vault Pro"),
            replace: !0
        }, {
            path: "/wallet/bc/lottery",
            activePath: "/wallet/bc/lottery",
            icon: r(ge, {}),
            text: i("Lottery"),
            replace: !0
        }]),
        e = ae();
    return r(le, {
        class: "flex w-full rounded-lg top-1 z-100 h-12 bg-[rgba(228,230,231,1)] sm:top-15 sm:w-[38rem] md:static md:my-0 md:py-0 dark:!bg-layer4",
        get children() {
            return r(X, {
                get each() {
                    return l()
                },
                children: t => {
                    const n = !!t.path;
                    return r(J, G({
                        component: n ? ne : "div",
                        get class() {
                            return w("relative flex-1 gap-1 rounded-lg p-2 text-center text-sm center md:basis-1/3", n && "fix-light-hover transition-all btn-like", e.pathname.replace(/\/$/, "") === t.activePath ? "text-white bg-tab_selected" : "text-secondary")
                        }
                    }, () => n ? {
                        href: t.path,
                        replace: t.replace
                    } : {}, {
                        get children() {
                            return [v(() => t.icon), (() => {
                                var s = we();
                                return a(s, () => t.text), s
                            })(), v(() => !n && (() => {
                                var s = _e(),
                                    p = s.firstChild;
                                return s.style.setProperty("background-image", "linear-gradient(90deg, #9FE871 0%, #24EE89 100%)"), a(p, () => i("Upcoming")), s
                            })())]
                        }
                    }))
                }
            })
        }
    })
}

function Le() {
    function l() {
        return x(this, null, function*() {
            const e = (yield de.initial(1e3, "500ms")).data,
                t = e[e.length - 1];
            ce("wsPrice", n => N(T({}, n), {
                price: Number(t.c),
                trend: Number(t.p),
                liveTime: Date.now()
            }))
        })
    }
    return Z(() => {
        z();
        const e = setInterval(z, 10 * 1e3);
        ee(() => clearInterval(e))
    }), te(() => x(this, null, function*() {
        if (g.wsPrice.price === 0) try {
            yield l()
        } catch (e) {
            console.log("error", e)
        }
    })), (() => {
        var e = Ce(),
            t = e.firstChild,
            n = t.firstChild,
            u = n.nextSibling,
            s = t.nextSibling,
            p = s.firstChild,
            m = p.firstChild,
            o = m.nextSibling,
            c = o.firstChild,
            _ = c.firstChild,
            $ = _.nextSibling,
            W = c.nextSibling,
            y = W.firstChild,
            h = y.firstChild,
            F = h.firstChild,
            C = h.nextSibling;
        C.firstChild;
        var j = y.nextSibling,
            k = j.firstChild,
            A = k.firstChild,
            E = s.nextSibling,
            S = E.firstChild,
            P = S.nextSibling,
            H = P.nextSibling;
        return I(n, "srcset", ve), I(u, "srcset", be), a(s, r(O, {
            class: "size-10 bg-alw_dark/50 py-[0.3rem] max-sm:mt-[0.3rem] max-sm:size-12"
        }), p), a(m, () => i("__COIN__ Token", {
            COIN: "BC"
        })), a(_, () => `$${g.wsPrice.price}`), a(c, r(ue, {
            get class() {
                return w("mr-0.5 size-3", g.wsPrice.trend < 0 && "rotate-180")
            }
        }), $), a($, () => `${(Math.abs(g.wsPrice.trend)*100).toFixed(2)}%`), a(h, () => i("24h Vol"), F), a(C, () => ie(g.summary.vol), null), a(k, () => i("Holders"), A), a(S, r(b, {
            type: "second",
            class: "h-10 w-full gap-1 rounded-lg text-sm text-brand",
            style: {
                "background-image": "linear-gradient(90deg, rgba(35, 238, 136, 0.6) 0%, rgba(35, 238, 136, 0.05) 100%)"
            },
            get children() {
                return [r(O, {
                    class: "h-4 text-brand w-4"
                }), (() => {
                    var f = $e();
                    return f.firstChild, a(f, () => i("What's __COIN__", {
                        COIN: "$BC"
                    }), null), f
                })()]
            }
        })), a(P, r(b, {
            type: "second",
            class: "h-10 w-full gap-1 rounded-lg text-sm text-primary",
            get children() {
                return [r(he, {}), (() => {
                    var f = ye();
                    return a(f, () => i("Whitepaper")), f
                })()]
            }
        })), a(H, r(b, {
            type: "second",
            class: "h-10 w-full gap-1 rounded-lg text-sm text-primary",
            get children() {
                return [r(xe, {}), v(() => i("Contract"))]
            }
        })), K(() => Y(c, w("flex items-center text-xs", g.wsPrice.trend < 0 ? "text-error" : "text-success"))), e
    })()
}

function He(l) {
    return oe(), (() => {
        var e = ke();
        return a(e, r(Le, {}), null), a(e, r(Pe, {}), null), a(e, r(q, {
            get fallback() {
                return (() => {
                    var t = Se();
                    return a(t, r(re, {})), t
                })()
            },
            get children() {
                return l.children
            }
        }), null), e
    })()
}
se();
export {
    He as
    default
};