import {
    i as r,
    c as d,
    e as N,
    s as T,
    t as c,
    u as j,
    g as z
} from "./web-c89f4fb8.js";
import {
    c as P
} from "./servers-8b17e7a0.js";
import {
    c as R
} from "./store-2fc868cc.js";
import {
    o as V,
    c as B,
    S as E,
    F as D
} from "./solid-js-871c99e1.js";
import {
    l as L,
    e as I,
    t as F,
    D as y,
    a as k,
    r as O,
    B as M,
    C,
    u as W,
    j as K
} from "./manifest-f1f40164.js";
import {
    t,
    T as U
} from "./i18n-827ab26d.js";
import {
    a as G
} from "./index-823e0b11.js";
import {
    a as J
} from "./utils-38f210e8.js";
var X = c('<div class="mx-3 h-12 w-full overflow-hidden"><div class="live-container grid grid-rows-2 gap-4">'),
    Z = c('<div class="flex flex-col gap-3 rounded-xl bg-layer4 p-6 md:flex-row md:items-center md:gap-10"><div class="flex flex-none flex-col gap-3 sm:w-96"><div class="flex items-center"><b class=live-dot></b><p class=font-extrabold> </p></div><div class="flex items-center justify-between rounded-xl bg-layer5 p-3"><p></p><div class="text-xl font-extrabold text-brand">'),
    ee = c('<div class="mx-3 flex items-center justify-start gap-3"><p></p><div class="center flex-shrink-0 gap-1"><p class="text-nowrap font-extrabold text-brand">+</p><img class="h-4 w-4">');
const ve = function() {
    const {
        isBrAuditHost: n
    } = L.getHostType(I.host), [s, l] = R({
        commissionUsd: "",
        rewardUsd: "",
        list: []
    });
    V(() => {
        P().then(a => {
            a && l(a)
        }).catch(F)
    });
    const e = B(() => new y(s.commissionUsd || 0).add(new y(s.rewardUsd || 0)));
    let i;
    return (() => {
        var a = Z(),
            m = a.firstChild,
            p = m.firstChild,
            w = p.firstChild,
            _ = w.nextSibling;
        _.firstChild;
        var x = p.nextSibling,
            h = x.firstChild,
            $ = h.nextSibling;
        return r(_, () => t("Live Rewards"), null), r(h, () => t("Total Rewards Sent To-Date")), r($, () => k.printCurrency(e(), "USDFIAT")), r(a, d(E, {
            when: !n,
            get children() {
                var v = X(),
                    u = v.firstChild,
                    b = i;
                return typeof b == "function" ? j(b, u) : i = u, u.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(9rem, 1fr))"), r(u, d(D, {
                    get each() {
                        return s.list
                    },
                    children: f => (() => {
                        var q = ee(),
                            H = q.firstChild,
                            Q = H.nextSibling,
                            S = Q.firstChild;
                        S.firstChild;
                        var Y = S.nextSibling;
                        return r(H, () => f.userName), r(S, () => k.printCurrency(new y(f.amount), f.currencyName, {
                            target: f.currencyName,
                            hasAlias: !1,
                            precision: 2
                        }), null), N(() => T(Y, "src", O.coinIcon(f.currencyName))), q
                    })()
                })), v
            }
        }), null), a
    })()
};
var re = c(`<div class="relative justify-end rounded-xl bg-layer4 bg-[url('src/features/affiliate/assets/program_bg.png')] bg-no-repeat font-semibold sm:flex"><div class="flex flex-col items-center justify-end p-6 sm:w-3/5"><p class="gap-3 text-center text-2xl font-extrabold sm:mb-3 sm:flex"></p><img alt=program class="left-20 w-full sm:absolute sm:bottom-0 sm:h-full sm:w-auto"><div class=text-secondary></div><div class=text-secondary></div><div class=w-full><div class=text-secondary><span></span></div><div class="mt-2 flex w-full items-center justify-between rounded-xl border border-input bg-layer3 px-3 py-2"><p class=l></p><a class=contacts-link-item target=_self>`);
const be = function() {
    const {
        isBzHost: n,
        isSpHost: s
    } = L.getHostType(I.host);
    return (() => {
        var l = re(),
            e = l.firstChild,
            i = e.firstChild,
            a = i.nextSibling,
            m = a.nextSibling,
            p = m.nextSibling,
            w = p.nextSibling,
            _ = w.firstChild,
            x = _.firstChild,
            h = _.nextSibling,
            $ = h.firstChild,
            v = $.nextSibling;
        return r(m, () => t("If you have a large audience and followers. We have special conditions for you to customize your referral program!")), r(p, () => t("If you can invite players and their wager amount reaches a billion dollars and above, you will get your own customized casino! You can set up a casino website with your domain and design style.")), r(x, () => t("for more details, please contact Us")), r($, n ? "business@bzjogos.com" : s ? "business@87.com" : "business@bc.game"), T(v, "href", `mailto:${n?"business@bzjogos.com":s?"business@87.com":"business@bc.game"}`), r(v, d(M, {
            type: "second",
            class: "h-10 p-2",
            get children() {
                return t("Send Now")
            }
        })), N(u => {
            var b = t('Learn more about our <p class="text-brand">Affiliate program</p>'),
                f = G.program;
            return b !== u.e && (i.innerHTML = u.e = b), f !== u.t && T(a, "src", u.t = f), u
        }, {
            e: void 0,
            t: void 0
        }), l
    })()
};
var o = c("<span>"),
    A = c('<p><span></span><span class="ml-1 cursor-pointer text-brand">'),
    te = c("<span>__ENV_HOST__"),
    ae = c('<span class="ml-1 cursor-pointer text-brand">Affiliate Dashboard.'),
    se = c('<div class="flex flex-col gap-3 rounded-xl bg-layer4 p-6"><p class="text-xl font-extrabold"></p><div class="flex flex-col gap-4">'),
    ne = c('<span class="cursor-pointer font-extrabold">'),
    le = c('<div class="mt-1 font-semibold text-secondary">');

function ie(g) {
    const n = () => k.printCurrency(new y(1e3)),
        s = W(),
        l = e => {
            if (!K.login) {
                s("/login/regist");
                return
            }
            if (e === "dashboard") {
                J(g());
                return
            }
            s(e, {
                replace: I.mobile
            })
        };
    return [{
        question: (() => {
            var e = o();
            return r(e, () => t("How does the referral system work?")), e
        })(),
        answer: (() => {
            var e = o();
            return r(e, () => t("When you share your referral link with any of your friends, family or advertise the link and a player signs up at our site that player becomes your referral and they will earn you commission & extra rewards by playing at __ENV_HOST__.")), e
        })()
    }, {
        question: (() => {
            var e = o();
            return r(e, () => t("How much can I earn from my referral?")), e
        })(),
        answer: (() => {
            var e = o();
            return r(e, () => t("You can earn 25% of their wager + __local_amount__ per referral.", {
                local_amount: n()
            })), e
        })()
    }, {
        question: (() => {
            var e = o();
            return r(e, () => t("What is USD reward and how does it work?")), e
        })(),
        answer: (() => {
            var e = o();
            return r(e, () => t("There is  __local_amount__ USD reward for each referral you bring to __ENV_HOST__ This USD reward is given in 10 parts when your referral level up from VIP4 til VIP 70.", {
                local_amount: n()
            })), e
        })()
    }, {
        question: (() => {
            var e = o();
            return r(e, () => t("Are there any banners I can use to advertise?")), e
        })(),
        answer: (() => {
            var e = A(),
                i = e.firstChild,
                a = i.nextSibling;
            return r(i, () => t("Yes, we offer multiple banner sizes for your convenience.")), a.$$click = () => l("/affiliate/banners"), r(a, () => t("Click here")), e
        })()
    }, {
        question: (() => {
            var e = o();
            return r(e, () => t("I have big audience, how I can get special deals?")), e
        })(),
        answer: d(U, {
            i18nKey: "bonus.mainpage.affiliate.desc2.chat",
            children: "If you have a website with good traffic or a social media account with a large audience, please contact us at business@bc.game."
        })
    }, {
        question: (() => {
            var e = o();
            return r(e, () => t("How many affiliate links can I create if I have different websites/accounts?")), e
        })(),
        answer: (() => {
            var e = o();
            return r(e, () => t("You can create up to 20 unique codes for different source of traffic.")), e
        })()
    }, {
        question: (() => {
            var e = o();
            return r(e, () => t("Can I see the data of my referral?")), e
        })(),
        answer: d(U, {
            i18nKey: "bonus.mainpage.affiliate.desc3",
            get children() {
                return ["Yes, ", te(), " believes in total transparency and offers all data to the users like username, total wager and commission earned, date of registration and referral link applied. You can see all of this information in your", (() => {
                    var e = ae();
                    return e.$$click = () => l("dashboard"), e
                })()]
            }
        })
    }, {
        question: (() => {
            var e = o();
            return r(e, () => t("Can I send tip or reward to my referrals?")), e
        })(),
        answer: (() => {
            var e = A(),
                i = e.firstChild,
                a = i.nextSibling;
            return r(i, () => t("Yes, you can send your referrals tips in any supported coins.")), a.$$click = () => l("affiliate/referral/code"), r(a, () => t("Click here")), e
        })()
    }]
}
const he = function() {
        let n;
        const s = ie(() => n);
        return (() => {
            var l = se(),
                e = l.firstChild,
                i = e.nextSibling,
                a = n;
            return typeof a == "function" ? j(a, l) : n = l, r(e, () => t("Frequently Asked Questions")), r(i, d(D, {
                each: s,
                children: (m, p) => d(oe, {
                    get answer() {
                        return m.answer
                    },
                    get question() {
                        return m.question
                    },
                    get defaultOpen() {
                        return p() === 0
                    }
                })
            })), l
        })()
    },
    oe = function(n) {
        return d(C, {
            get children() {
                return [d(C.Trigger, {
                    get children() {
                        var s = ne();
                        return r(s, () => n.question), s
                    }
                }), d(C.Content, {
                    get children() {
                        var s = le();
                        return r(s, () => n.answer), s
                    }
                })]
            }
        })
    };
z(["click"]);
export {
    ve as L, be as P, he as Q
};