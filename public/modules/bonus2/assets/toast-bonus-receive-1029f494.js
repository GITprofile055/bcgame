import {
    i as e,
    c as n,
    e as f,
    s as p,
    t as a
} from "./web-c89f4fb8.js";
import {
    a as m,
    D as c,
    t as x
} from "./manifest-f1f40164.js";
import {
    t as h,
    T as _
} from "./i18n-827ab26d.js";
import {
    c as y
} from "./index-c5ebc757.js";
import {
    S as k
} from "./solid-js-871c99e1.js";
var v = a("<span class=text-brand>__amount__"),
    $ = a("<span class=text-primary>__bankAmount__ "),
    g = a("<span class=ml-1>"),
    A = a('<div class="relative z-0 flex gap-x-6"><div class="relative w-16 flex-shrink-0"><div class="absolute left-2/3 top-1/2 flex w-32 flex-shrink-0 -translate-x-1/2 -translate-y-1/2 items-center"><img class=""></div></div><div class="flex flex-col gap-y-2 text-primary"><h3 class="text-base font-extrabold"></h3><p class="text-sm font-semibold text-secondary">');
const D = t => {
        t && t.type === 1 && C({
            amount: m.printCurrency(new c(t.claimAmount), t.currencyName),
            bankAmount: t.bcBankAmount ? m.printCurrency(new c(t.bcBankAmount), t.currencyName) : ""
        })
    },
    C = t => {
        x(() => (() => {
            var s = A(),
                r = s.firstChild,
                u = r.firstChild,
                d = u.firstChild,
                b = r.nextSibling,
                i = b.firstChild,
                l = i.nextSibling;
            return e(i, () => h("Bonus Claimed")), e(l, n(_, {
                i18nKey: "__amount__ has been credited to your balance",
                get amount() {
                    return t.amount
                },
                get children() {
                    return [v(), " has been credited to your balance"]
                }
            }), null), e(l, n(k, {
                get when() {
                    return t.bankAmount
                },
                get children() {
                    var o = g();
                    return e(o, n(_, {
                        i18nKey: "and __bankAmount__ to the __ENV_SITE__ Bank",
                        get bankAmount() {
                            return t.bankAmount
                        },
                        get children() {
                            return ["and ", $(), "to the BC Bank"]
                        }
                    })), o
                }
            }), null), f(() => p(d, "src", y.bonusCoin)), s
        })(), {
            duration: 7
        })
    };
export {
    D as a, C as t
};