var p = Object.defineProperty,
    w = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty,
    g = Object.prototype.propertyIsEnumerable;
var s = (e, t, r) => t in e ? p(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    c = (e, t) => {
        for (var r in t || (t = {})) m.call(t, r) && s(e, r, t[r]);
        if (i)
            for (var r of i(t)) g.call(t, r) && s(e, r, t[r]);
        return e
    },
    u = (e, t) => w(e, h(t));
import {
    c as a,
    i as y,
    t as d
} from "./web-6f548a65.js";
import {
    e as b,
    a as v
} from "./manifest-0e8055eb.js";
import {
    c as C,
    S as W
} from "./solid-js-fd4ba123.js";
import {
    W as B
} from "./WalletIcon-7f224d55.js";
import {
    t as l
} from "./i18n-bbd6bada.js";
import {
    g as S
} from "./index-7449758d.js";
var M = d("<span class=truncate>");

function R(e) {
    return [a(B, {
        class: "size-5 flex-none",
        get name() {
            return e.icon
        }
    }), (() => {
        var t = M();
        return y(t, () => l(e.title)), t
    })()]
}

function U(e) {
    const t = {
            balance: {
                title: l("Balance"),
                icon: "Wallet",
                href: "/wallet/balance"
            },
            deposit: {
                title: l("Deposit"),
                icon: "Deposit",
                href: "/wallet/deposit"
            },
            withdraw: {
                title: l("Withdraw"),
                icon: "Withdraw",
                href: "/wallet/withdraw"
            },
            buy: {
                title: l("Buy Crypto"),
                icon: "BuyCrypto",
                href: "/wallet/buy"
            },
            swap: {
                title: l("Swap"),
                icon: "Swap",
                href: "/wallet/swap"
            },
            vault: {
                title: l("Vault Pro"),
                icon: "Vault",
                href: "/wallet/vault"
            },
            transaction: {
                title: l("Transaction"),
                icon: "Transaction",
                href: "/wallet/transaction"
            },
            rollover: {
                title: l("Rollover"),
                icon: "Rollover",
                href: "/wallet/rollover"
            },
            betHistory: {
                title: l("Bet History"),
                icon: "History",
                href: "/wallet/bet-history"
            },
            annualReport: {
                title: l("Annual Report"),
                icon: "Annual",
                href: "/wallet/annual-report"
            }
        },
        r = S(),
        f = C(() => Object.keys(r.routes).filter(o => !!r.routes[o]).map(o => {
            const n = t[o];
            return u(c({}, n), {
                title: a(R, {
                    get icon() {
                        return n.icon
                    },
                    get title() {
                        return n.title
                    }
                })
            })
        }));
    return a(W, {
        get when() {
            return !b.mobile
        },
        get fallback() {
            return e.children
        },
        get children() {
            return a(v, {
                get title() {
                    return l("wallet").toUpperCase()
                },
                get menu() {
                    return f()
                },
                loadingClass: "flex-auto h-full",
                get children() {
                    return e.children
                }
            })
        }
    })
}
export {
    U as
    default
};