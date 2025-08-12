var G = Object.defineProperty,
    H = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var U = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty,
    Q = Object.prototype.propertyIsEnumerable;
var W = (e, r, t) => r in e ? G(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[r] = t,
    N = (e, r) => {
        for (var t in r || (r = {})) K.call(r, t) && W(e, t, r[t]);
        if (U)
            for (var t of U(r)) Q.call(r, t) && W(e, t, r[t]);
        return e
    },
    D = (e, r) => H(e, J(r));
var v = (e, r, t) => new Promise((a, n) => {
    var s = c => {
            try {
                i(t.next(c))
            } catch (m) {
                n(m)
            }
        },
        l = c => {
            try {
                i(t.throw(c))
            } catch (m) {
                n(m)
            }
        },
        i = c => c.done ? a(c.value) : Promise.resolve(c.value).then(s, l);
    i((t = t.apply(e, r)).next())
});
import {
    c as p,
    i as g,
    e as V,
    s as I,
    t as O
} from "./web-c89f4fb8.js";
import {
    p as k,
    P as X,
    a as C,
    D as f,
    B as L,
    t as R,
    j as T,
    aj as Y
} from "./manifest-f1f40164.js";
import {
    y as ee,
    a as z,
    d as re,
    s as h
} from "./solid-js-871c99e1.js";
import {
    Z as te
} from "./const-3e281bed.js";
import {
    t as b
} from "./i18n-827ab26d.js";
import {
    h as B
} from "./http-4df94233.js";
import {
    S
} from "./sounds-a881e21e.js";
import {
    a as Z,
    t as ae
} from "./toast-bonus-receive-1029f494.js";
import {
    popupCancelBonus as ne
} from "./cancel-bonus-6aaccc88.js";
import {
    b as w
} from "./index-c5ebc757.js";
import {
    a as _,
    b as ue
} from "./index-85cb0a21.js";
import {
    b as u
} from "./index-8a7d18d7.js";
import {
    n as se,
    v as ce,
    g as oe,
    f as le
} from "./helpers-44d70238.js";
import {
    r as d
} from "./index-d5947389.js";
var ie = O('<div class="relative z-20 flex flex-col items-center justify-center text-center"><div class="relative flex size-28 flex-shrink-0 justify-center"><img class="absolute -right-4 top-0 h-12"><img class="absolute left-1 top-4 h-10"><img class=h-full></div><p class="text-3xl font-extrabold text-[#EF9E3F]"></p><p class="pt-4 font-semibold text-secondary"></p><div class="flex w-full gap-x-4 pt-4">');
const q = e => new Promise(t => {
    const a = () => {
            switch (e.rewardType) {
                case "rakeback":
                    return w.bonusRakeback;
                case "recharge":
                    return w.bonusRecharge;
                case "monthlyBonus":
                    return w.bonusMonthly;
                case "weeklyBonus":
                    return w.bonusWeekly;
                default:
                    return ""
            }
        },
        n = () => {
            switch (e.rewardType) {
                case "rakeback":
                    return b("Rakeback");
                case "recharge":
                    return b("Recharge");
                case "monthlyBonus":
                    return b("Monthly Cashback");
                case "weeklyBonus":
                    return b("Weekly Cashback")
            }
        };
    k.push(() => p(X, {
        style: {
            "background-image": "radial-gradient(61% 78.51% at 50% 32.2%, rgba(238, 177, 36, 0.20) 0%, rgba(238, 177, 36, 0.00) 100%)"
        },
        get title() {
            return n()
        },
        get children() {
            var s = ie(),
                l = s.firstChild,
                i = l.firstChild,
                c = i.nextSibling,
                m = c.nextSibling,
                M = l.nextSibling,
                P = M.nextSibling,
                $ = P.nextSibling;
            return g(M, () => C.printCurrency(new f(e.amount), e.currencyName, {
                target: e.currencyName
            })), g(P, () => b("Claim your bonus as usual — or take a bold leap and DOUBLE it!")), g($, p(L, {
                type: "second",
                class: "basis-20",
                onClick: () => Promise.resolve(e.onResult({
                    result: "normal",
                    currencyName: e.currencyName,
                    amount: e.amount
                })).then(() => {
                    t({
                        result: "normal",
                        currencyName: e.currencyName,
                        amount: e.amount
                    }), k.pop()
                }),
                get children() {
                    return b("Claim")
                }
            }), null), g($, p(L, {
                type: "brand",
                class: "flex-grow",
                onClick: () => Promise.resolve(e.onResult({
                    result: "double",
                    currencyName: e.currencyName,
                    amount: e.amount
                })).then(() => {
                    t({
                        result: "double",
                        currencyName: e.currencyName,
                        amount: e.amount
                    }), k.pop()
                }),
                get children() {
                    return b("Double or Nothing")
                }
            }), null), V(y => {
                var E = w.doubleBonusFlag,
                    F = w.doubleBonusFalgZero,
                    j = a();
                return E !== y.e && I(i, "src", y.e = E), F !== y.t && I(c, "src", y.t = F), j !== y.a && I(m, "src", y.a = j), y
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), s
        }
    }), {
        onClose: () => {
            t({
                result: "noop",
                currencyName: e.currencyName,
                amount: e.amount
            })
        }
    })
});
class me {
    constructor(r = 1e3) {
        this.timerId = null, this.timers = new Map, this.interval = r
    }
    addTimers(r, t) {
        this.timerId || this.start(), r = Array.isArray(r) ? r : [r], r.forEach(a => {
            this.timers.has(a) || this.timers.set(a, []), this.timers.get(a).push(t)
        })
    }
    start() {
        this.timerId && this.stop(), this.timerId = setInterval(() => {
            const r = Date.now();
            for (const [t, a] of this.timers.entries())
                if (r >= t) {
                    const n = a.length;
                    for (let s = 0; s < n; s++) a.shift()(t);
                    this.cleanTimestampIfNeed(t)
                }
        }, this.interval)
    }
    cleanTimestampIfNeed(r) {
        var t;
        ((t = this.timers.get(r)) == null ? void 0 : t.length) === 0 && (this.timers.delete(r), this.timers.size === 0 && this.stop())
    }
    cleanup(r, t) {
        r = Array.isArray(r) ? r : [r], r.forEach(a => {
            if (this.timers.has(a)) {
                const n = this.timers.get(a);
                this.timers.set(a, n.filter(s => s !== t)), this.cleanTimestampIfNeed(a)
            }
        })
    }
    stop() {
        clearInterval(this.timerId), this.timerId = null
    }
}
let x = null;
const he = () => (x || (x = new me(2e3)), x),
    Se = (e, r) => {
        const t = he();
        re(() => {
            const a = r,
                n = e();
            t.addTimers(n, a), z(() => {
                t.cleanup(n, a)
            })
        })
    },
    de = (e, r) => {
        let t = null,
            a = null;
        const n = () => v(void 0, null, function*() {
            return t || (a = new Promise(s => {
                t = setTimeout(() => {
                    Promise.resolve(e(Date.now())).then(s), t = null, a = null
                }, r)
            })), a
        });
        return ee() && z(() => {
            t && (clearTimeout(t), t = null, a = null)
        }), n
    };
var be = O('<p class="text-center font-semibold text-secondary">');
const o = (e, r) => u.mutations.receiveReward(D(N({}, r), {
        rewardId: e
    })).then(t => h(() => {
        u.refetchResource(u.bonusDashboardResource.name)
    }).then(() => t)).then(Z).catch(R),
    A = (e, r, t, a) => {
        let n;
        return q({
            currencyName: t,
            amount: a,
            rewardType: r,
            onResult: s => u.mutations.receiveReward({
                rewardId: e,
                doubleBonus: s.result === "double"
            }).then(l => {
                n = l
            })
        }).then(s => {
            if (s.result !== "noop") return Promise.all([_({
                doubleBonus: s.result === "double",
                amounts: s.result === "double" ? [new f(n.claimAmount).add(n.bcBankAmount).div(2).toNumber(), 0, new f(n.claimAmount).add(n.bcBankAmount).toNumber()] : [0, new f(n.claimAmount).add(n.bcBankAmount).toNumber()],
                currencyName: n.currencyName
            }), h(() => {
                u.refetchResource(u.bonusDashboardResource.name)
            })])
        }).then(() => {
            Z(n)
        })
    };
o.rakeback = () => {
    const e = se();
    if (e().claimable) return e().doubleBonus ? A(e().rewardId, "rakeback", e().currencyName, Number(e().bonusAmount)) : o(e().rewardId)
};
o.doubleRecharge = e => ce()().doubleBonus ? q({
    currencyName: e.currencyName,
    amount: Number(e.amount),
    rewardType: "recharge",
    onResult: a => o.claimRecharge(D(N({}, e), {
        doubleBonus: a.result === "double"
    }))
}).then(a => {
    if (a.result !== "noop") return _({
        doubleBonus: a.result === "double",
        currencyName: e.currencyName,
        amounts: a.result === "double" ? [new f(e.amount).toNumber(), 0, new f(e.amount).mul(2).toNumber()] : [0, new f(e.amount).toNumber()]
    }), h(() => {
        u.refetchResource(u.bonusDashboardResource.name), d.refetchResource(d.rechargeListResource.name), d.refetchResource(d.rechargeTierResource.name)
    })
}) : o.claimRecharge(N({}, e)).then(() => (_({
    currencyName: e.currencyName,
    amounts: [0, e.amount],
    doubleBonus: !1
}), h(() => {
    u.refetchResource(u.bonusDashboardResource.name), d.refetchResource(d.rechargeListResource.name), d.refetchResource(d.rechargeTierResource.name)
})));
o.doubleMonthlyBonus = e => {
    var t, a, n, s, l, i, c, m;
    const r = oe();
    if ((t = r().rewardResult) != null && t.rewardId) return (s = (n = (a = r()) == null ? void 0 : a.rewardResult) == null ? void 0 : n.rewards) != null && s[0].doubleBonus ? A((l = r().rewardResult) == null ? void 0 : l.rewardId, "monthlyBonus", (i = r().rewardResult) == null ? void 0 : i.rewards[0].name, Number((c = r().rewardResult) == null ? void 0 : c.rewards[0].amount)) : o((m = r().rewardResult) == null ? void 0 : m.rewardId)
};
o.doubleWeeklyBonus = e => {
    var t, a, n, s, l, i, c, m;
    const r = le();
    if ((t = r().rewardResult) != null && t.rewardId) return (s = (n = (a = r()) == null ? void 0 : a.rewardResult) == null ? void 0 : n.rewards) != null && s[0].doubleBonus ? A((l = r().rewardResult) == null ? void 0 : l.rewardId, "weeklyBonus", (i = r().rewardResult) == null ? void 0 : i.rewards[0].name, Number((c = r().rewardResult) == null ? void 0 : c.rewards[0].amount)) : o((m = r().rewardResult) == null ? void 0 : m.rewardId)
};
o.freeSpin = e => v(void 0, null, function*() {
    return u.mutations.receiveFreeSpin(e).then(r => h(() => {
        u.refetchResource(u.bonusDashboardResource.name)
    }).then(() => {
        S.claim(), ue({
            amount: r.roundCount,
            gameId: r.gameUnique,
            expireTime: r.expireTime,
            gameCover: r.iconThreeFour,
            fsId: r.fsId,
            currency: T.bonusCurrencyName
        })
    })).catch(R)
});
o.bcBank = () => u.mutations.receiveBcBank().then(e => {
    const r = T.setting.enableLocaleCurrency ? T.setting.localeCurrencyName : "USDFIAT";
    return ae({
        amount: C.printCurrency(e.reduce((t, a) => t.add(C.convertCurrency(new f(a.amount), a.currencyName, r)), te), r)
    }), h(() => u.refetchResource(u.bonusDashboardResource.name))
}).then(S.claim).catch(R);
o.doubleup = e => B.post("/activity/cash_back_event/claim/", e).then(() => h(() => u.refetchResource(u.bonusDashboardResource.name))).catch(R);
o.claimRecharge = e => Y("login").then(r => d.mutations.claimRecharge({
    currencyName: e.currencyName,
    token: r,
    doubleBonus: e.doubleBonus
}).then(S.claim));
const Ae = (e, r) => () => {
    var t;
    return (t = ne({
        currencyName: r == null ? void 0 : r.currencyName,
        cancelAmount: r == null ? void 0 : r.cancelAmount,
        amountChangeLogId: e
    })) == null ? void 0 : t.then(a => {
        if (a) return B.post("/activity/recharge-bonus/cancel-bonus/", {
            amountLogId: e
        }).then(() => h(() => u.refetchResource(u.bonusDashboardResource.name))).catch(R)
    })
};
var fe = (e => (e[e.reject = 1] = "reject", e[e.accept = 2] = "accept", e))(fe || {});
const Me = (e, r) => () => v(void 0, null, function*() {
        if (!(e === 1 && !(yield k.confirm(() => (() => {
                var a = be();
                return g(a, () => b("This event is full of benefits, so if you miss it, you may have to wait for the next time! Want to reconsider? ")), a
            })())))) return B.post("/activity/cash_back_event/change_status/", {
            eventId: r,
            action: e
        }).then(() => h(() => u.refetchResource(u.bonusDashboardResource.name))).catch(R)
    }),
    Pe = e => () => B.post("/activity/cash_back_event/claim/", e).then(() => h(() => u.refetchResource(u.bonusDashboardResource.name))).catch(R),
    $e = de(() => u.refetchResource(u.bonusDashboardResource.name, {
        mutateOnly: !0
    }), 200);
export {
    fe as C, $e as a, Pe as b, Ae as c, Se as d, Me as h, o as r
};