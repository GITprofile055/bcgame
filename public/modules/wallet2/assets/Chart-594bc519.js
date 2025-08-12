import {
    i as e,
    e as p,
    b as C,
    t as _,
    c as s,
    a as b,
    d as P
} from "./web-6f548a65.js";
import {
    F as I
} from "./solid-js-fd4ba123.js";
import {
    c as m,
    T as N,
    e as $,
    p as k,
    P as y
} from "./manifest-0e8055eb.js";
import {
    t as n
} from "./i18n-bbd6bada.js";
import {
    T as O,
    I as w
} from "./Icon-5531a61c.js";
import {
    f as T,
    C as M
} from "./index-47e6eabb.js";
import {
    s as l,
    e as S
} from "./store-614dd174.js";
var z = _("<div>");

function B(f) {
    return (() => {
        var d = z();
        return e(d, () => f.children), p(() => C(d, m("rounded-xl bg-layer4 p-4", f.class))), d
    })()
}
var g = _("<div>"),
    E = _('<div class="text-secondary size-8 center grow">'),
    F = _('<div class="flex justify-between items-center"><div class=flex-1><div><div class="mr-2 font-extrabold leading-5 text-2xl ml-0.5">$</div><div class="text-xs self-end"></div></div></div><div class="flex items-center"><div class="light-darkness flex items-center gap-1 rounded-xl p-1 text-sm text-secondary bg-layer3">'),
    q = _('<div class="flex items-center gap-2 text-xs"><div class="flex items-center"><div class="mr-1 text-secondary">:</div><div>$</div></div><div class="flex items-center"><div class="mr-1 text-secondary">:</div><div>10B');
const j = [{
        label: "1M",
        value: "1m"
    }, {
        label: "1H",
        value: "1h"
    }, {
        label: "1D",
        value: "1d"
    }],
    h = "$BC";

function Q(f) {
    const d = () => {
        k.push(() => s(y, {
            class: "text-sm font-semibold text-secondary min-h-[unset]",
            get title() {
                return `${h} ` + n("Price")
            },
            get children() {
                var r = g();
                return e(r, () => n("The __COIN__ Price Chart is derived from the most liquid tradable market for __COIN__. It tracks the price of __COIN__.", {
                    COIN: h
                })), r
            }
        }))
    };
    return s(B, {
        get class() {
            return m("sm:flex sm:flex-col", f.class)
        },
        get children() {
            return [(() => {
                var r = F(),
                    c = r.firstChild,
                    i = c.firstChild,
                    a = i.firstChild;
                a.firstChild;
                var v = a.nextSibling,
                    u = c.nextSibling,
                    o = u.firstChild;
                return e(i, s(O, {
                    get class() {
                        return m("size-4", l.wsPrice.trend < 0 && "rotate-180")
                    }
                }), a), e(a, () => l.wsPrice.price, null), e(v, () => `${(Math.abs(l.wsPrice.trend)*100).toFixed(2)}%`), e(u, s(N, {
                    get disabled() {
                        return $.mobile
                    },
                    get title() {
                        return `${h} ` + n("Price")
                    },
                    get description() {
                        return n("The __COIN__ Price Chart is derived from the most liquid tradable market for __COIN__. It tracks the price of __COIN__.", {
                            COIN: h
                        })
                    },
                    get children() {
                        var t = E();
                        return b(t, "click", $.mobile ? d : void 0, !0), e(t, s(w, {})), t
                    }
                }), o), e(o, s(I, {
                    each: j,
                    children: t => (() => {
                        var x = g();
                        return x.$$click = () => S(t.value), e(x, () => t.label), p(() => C(x, m("cursor-pointer rounded-lg size-8 center", l.interval === t.value && "font-extrabold text-primary bg-tab_selected"))), x
                    })()
                })), p(() => C(i, m("flex items-center", l.wsPrice.trend < 0 ? "text-error" : "text-success"))), r
            })(), (() => {
                var r = q(),
                    c = r.firstChild,
                    i = c.firstChild,
                    a = i.firstChild,
                    v = i.nextSibling;
                v.firstChild;
                var u = c.nextSibling,
                    o = u.firstChild,
                    t = o.firstChild;
                return e(i, () => n("Market Cap"), a), e(v, () => T(1e10 * l.wsPrice.price), null), e(o, () => n("Current Supply"), t), r
            })(), s(M, {
                class: "flex-1",
                get period() {
                    return l.interval
                }
            })]
        }
    })
}
P(["click"]);
export {
    B as C, Q as a
};