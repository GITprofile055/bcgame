var $ = (c, t, o) => new Promise((l, d) => {
    var e = r => {
            try {
                m(o.next(r))
            } catch (_) {
                d(_)
            }
        },
        a = r => {
            try {
                m(o.throw(r))
            } catch (_) {
                d(_)
            }
        },
        m = r => r.done ? l(r.value) : Promise.resolve(r.value).then(e, a);
    m((o = o.apply(c, t)).next())
});
import {
    r as L,
    c as g,
    i as b,
    e as Y,
    t as R
} from "./web-c89f4fb8.js";
import {
    b as p,
    I as O,
    a as i,
    D as f,
    t as s,
    e as W,
    am as E,
    u as j,
    p as C,
    P as x,
    $ as n,
    an as P,
    A as U,
    ao as z,
    j as v,
    a6 as M
} from "./manifest-f1f40164.js";
import {
    b as F,
    u as H
} from "./router-6c6c27f7.js";
import {
    y as T,
    A as B,
    s as S
} from "./solid-js-871c99e1.js";
import {
    t as u,
    T as K
} from "./i18n-827ab26d.js";
import {
    D as w
} from "./index-e43a355a.js";
import {
    B as A,
    R as D
} from "./index-8979b588.js";
import {
    r as I
} from "./index-d5947389.js";
import {
    a as N
} from "./api-utils-b2769cf2.js";
import {
    C as Q
} from "./index-839cb11c.js";
import {
    h as V
} from "./http-4df94233.js";
import {
    b as k
} from "./index-8a7d18d7.js";
import {
    b as q
} from "./index-c5ebc757.js";
import "./animate-number-af733b14.js";
import "./last-862de5a8.js";
import "./baseService-2efdc30b.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./_MapCache-91cc8331.js";
import "./const-3e281bed.js";
import "./sounds-a881e21e.js";
import "./_commonjsHelpers-08c562be.js";
import "./toast-bonus-receive-1029f494.js";
import "./cancel-bonus-6aaccc88.js";
import "./noop-cb277961.js";
import "./index-85cb0a21.js";
import "./currency-format-5cd6ca42.js";
import "./countdown-9ad59544.js";
import "./helpers-44d70238.js";
import "./utils-38f210e8.js";
import "./vip-9182fb4b.js";
import "./enums-fd45c1cf.js";
var G = R('<div class="border-offset-[-1px] relative inline-flex h-80 w-64 flex-col items-center justify-end gap-1 rounded-md border-[rgba(255,255,255,0.05)] px-4 pb-4 pt-24"><h3 class="text-center text-lg font-semibold"></h3><div class="shadow-[text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] flex w-full justify-center rounded-[12px] py-1"><span class="text-2xl font-extrabold text-[#FBD765]"></span></div><div class="py-1 text-sm"> <!>x wager to unlock');
let y;
const J = () => y || (y = document.createElement("div"), y.style.setProperty("position", "fixed"), y.style.setProperty("z-index", W.mobile ? "10000" : "101"), y.style.setProperty("top", "3.8rem"), y.style.setProperty("right", "1rem"), document.body.appendChild(y), y);

function X(c) {
    const t = T();
    let o = null,
        l = !1;
    const d = () => {
        o == null || o(), o = null, l = !1
    };
    return p.on("close-loseback-bonuse", () => {
        d()
    }), {
        render: () => {
            l || B(t, () => {
                d(), o = L(() => g(Z, {
                    bonusInfo: c,
                    onClose: d
                }), J()), l = !0
            })
        }
    }
}

function Z(c) {
    return (() => {
        var t = G(),
            o = t.firstChild,
            l = o.nextSibling,
            d = l.firstChild,
            e = l.nextSibling,
            a = e.firstChild,
            m = a.nextSibling;
        return m.nextSibling, t.style.setProperty("background-color", "rgba(41, 41, 41, 0.8)"), t.style.setProperty("background-size", "80% auto,100% auto"), t.style.setProperty("background-repeat", "no-repeat"), t.style.setProperty("background-position", "center -1rem"), t.style.setProperty("outline", "1px var(--Navigation-MobileButtonA5, rgba(255, 255, 255, 0.05)) solid;"), t.style.setProperty("backdrop-filter", "blur(20px)"), b(t, g(O, {
            onClick: () => {
                c.onClose(), k.refetchResource(k.bonusDashboardResource.name)
            },
            class: "absolute right-2 top-2 size-5 cursor-pointer text-secondary",
            name: "Close"
        }), o), b(o, () => u("Surprise Cash! Luck’s on Your Side!")), l.style.setProperty("background", "var(--Alpha-bg-alpha20_black, rgba(0, 0, 0, 0.20))"), b(d, () => i.printCurrency(new f(c.bonusInfo.amount), c.bonusInfo.currency)), b(e, () => c.bonusInfo.wagerTimes, m), b(t, g(Q, {
            onClick: () => V.post(`activity/reward/receive/${c.bonusInfo.rewardId}/`).then(r => {
                r != null && r.claimAmount && (r != null && r.currencyName) && (s(`${u("You’ve successfully claimed")} ${i.printCurrency(new f(r.claimAmount),r.currencyName)}`, {
                    duration: 3
                }), k.refetchResource(k.bonusDashboardResource.name), c.onClose())
            }).catch(s),
            type: "brand",
            get children() {
                return u("Claim Now")
            }
        }), null), Y(r => (r = `url(${q.bonusLosebackCard}),radial-gradient(ellipse at center, rgba(208, 148, 80, 0.5) 0%, rgba(208, 148, 80, 0) 100%)`) != null ? t.style.setProperty("background-image", r) : t.style.removeProperty("background-image")), t
    })()
}
var ee = R('<div class="flex gap-x-1"><p>');
const Be = () => {
    const c = E(),
        t = B(T(), j),
        o = F();
    p.on("register-bonus-10bcd", () => {
        C.push(() => g(x, {
            type: "center",
            class: "popup-full !w-100",
            get children() {
                return g(A, {
                    get rewardType() {
                        return D.Money
                    },
                    amount: "10",
                    welcome: !0,
                    currency: "BCD",
                    locked: !1,
                    isDubai: !0
                })
            }
        }))
    });
    const [l, d] = H();
    n("regist-invited-present-success", e => {
        const a = e.presentAmounts;
        if (a) {
            const [{
                name: m,
                amount: r,
                locked: _
            }] = Object.keys(a).map(h => ({
                name: h,
                amount: a[h],
                locked: !1
            }));
            P.add(() => new Promise(h => $(void 0, null, function*() {
                yield C.push(() => g(x, {
                    type: "center",
                    class: "popup-full !w-100",
                    get children() {
                        return g(A, {
                            get rewardType() {
                                return D.Money
                            },
                            amount: r,
                            welcome: !0,
                            currency: m,
                            locked: _,
                            get kycLevel() {
                                return e.kycLevel || ""
                            },
                            get kycLevelName() {
                                return e.kycLevelName || ""
                            }
                        })
                    }
                })), h("")
            })))
        }
    }), n("telegram-subscription-task-status", () => {
        N()
    }), n("recharge-bonus-notice", e => {
        S(() => {
            w.useDepositProgress()[1].refetch(), w.useCurrentDepositItem()[1].refetch(), I.refetchResource(I.rakebackBonusHistoryResource.name)
        }), p.emit("web_push_prompt_push"), s(() => (() => {
            var a = ee(),
                m = a.firstChild;
            return b(m, g(K, {
                get amount() {
                    return e.amount
                },
                get currencyName() {
                    return i.getAlias(e.currencyName)
                },
                get currencyNameTwo() {
                    return i.getAlias(e.currencyName)
                },
                i18nKey: "Your Deposit Bonus of __amount__ __currencyName__ has been credited to your __currencyNameTwo__ Unlock.",
                get children() {
                    return ["Your Deposit Bonus of __amount__ __currencyName__ has been credited to your", g(U, {
                        onClick: () => {
                            setTimeout(() => {
                                d({
                                    highlight: void 0
                                })
                            }, 3e3)
                        },
                        href: "/bonus?highlight=rakeback",
                        class: "ml-1 font-semibold text-brand underline",
                        children: "__currencyNameTwo__ Unlock."
                    })]
                }
            })), a
        })(), {
            duration: 0,
            type: "recharge-bonus-notice"
        })
    }), n("bcpoker-text", e => {
        s(e.msg || "", {
            duration: 0
        })
    }), n("user-reward", e => {
        N()
    }), n("user-present-success", e => {
        switch (e.presentType) {
            case "tip":
                s(u("Wow! You received __amount__ tip from __userName__", {
                    amount: `${e.amount} ${i.getAlias(e.currencyName)}`,
                    userName: e.userName
                }), {
                    duration: 5
                });
                break;
            case "rain":
                s(u("Wow! You received __amount__ rain from __userName__", {
                    amount: `${e.amount} ${i.getAlias(e.currencyName)}`,
                    userName: e.userName
                }), {
                    duration: 5
                });
                break;
            default:
                p.emit("get-spin-rain-or-tip"), s(u("Wow you got __amount__ spin from Coco", {
                    amount: e.amount
                }), {
                    duration: 0,
                    onClick: () => t("/spin")
                });
                break
        }
    }), n("regist-invited-present-claimed", e => {
        const a = e.presentAmounts,
            [{
                name: m,
                amount: r
            }] = Object.keys(a).map(_ => ({
                name: _,
                amount: a[_]
            }));
        s(`${r} ${m} ${u("has been sent to your balance")}`)
    }), n("recharge-success", e => {
        e.status === 1 ? s(u("Deposit is in progress"), {
            duration: 5
        }) : (p.emit("sensorsTrack", {
            event: "deposit_recieved"
        }), setTimeout(() => {
            N(), S(() => {
                w.useDepositProgress()[1].refetch(), w.useCurrentDepositItem()[1].refetch(), z(e.currencyName, "display", !0)
            })
        }, 1e3), e.depositCount == 1 ? p.emit("track_ftd_success", {
            sales: i.amount2usd(new f(e.amount || 0), e.currencyName).toString(),
            orderid: String(e.id),
            userId: String(v.userId)
        }) : e.depositCount == 2 && p.emit("track_reccuring_deposit", {
            sales: i.amount2usd(new f(e.amount || 0), e.currencyName).toString(),
            orderid: String(e.id),
            userId: String(v.userId)
        }), p.emit("web_push_prompt_push"), p.emit("track_deposit_success", {
            sales: i.amount2usd(new f(e.amount || 0), e.currencyName).toString(),
            orderid: String(e.id),
            userId: String(v.userId)
        }), s(`${u("Congrats! Your deposit has been completed!")} ${e.amount} ${i.getAlias(e.currencyName)}`, {
            duration: 5,
            onClick: () => t(`/wallet/deposit-detail?orderId=${e.id}`)
        }), p.emit("da_track", "deposit_sended"))
    }), n("withdraw-progress", () => {
        s(u("Withdrawal is in progress."), {
            duration: 5
        })
    }), n("withdraw-success", e => {
        s.success(u("You have successfully withdrawn __amount__.", {
            amount: `${e.amount} ${i.getAlias(e.currencyName)}`
        }), {
            duration: 5
        })
    }), n("withdraw-fail", e => {
        s.error(u("Withdrawal failed. __amount__ has been returned to your balance.", {
            amount: `${e.amount} ${i.getAlias(e.currencyName)}`
        }), {
            duration: 0,
            onClick: () => t(`/wallet/transaction?type=withdraw&assets=${e.currencyName}`)
        })
    }), n("change-amount-success", e => {
        s(`You found ${e.amount} ${i.getAlias(e.currencyName)} under of Coco's Red throne`, {
            duration: 3,
            onClick: () => t(`/wallet/transaction?type=bill&assets=${e.currencyName}`)
        })
    }), n("use-code-success", e => {
        s(u("You have got __amount__ from __ENV_COCO__'s cave.", {
            amount: `${e.amount} ${i.getAlias(e.currencyName)}`
        }), {
            duration: 3,
            onClick: () => t(`/wallet/transaction?type=bill&assets=${e.currencyName}`)
        })
    }), n("regist-present-success", () => {
        P.add(() => c(() => t("/spin")))
    }), n("cashback-first-deposit-notice", e => {
        const {
            render: a
        } = X(e);
        o.pathname.includes("/game/") ? M(() => !o.pathname.includes("/game/")).then(() => a()) : a()
    })
};
export {
    Be as
    default, Be as toastRegister
};