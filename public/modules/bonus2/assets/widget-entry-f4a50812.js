var De = Object.defineProperty,
    Te = Object.defineProperties;
var Re = Object.getOwnPropertyDescriptors;
var ae = Object.getOwnPropertySymbols;
var Pe = Object.prototype.hasOwnProperty,
    Le = Object.prototype.propertyIsEnumerable;
var ue = (e, t, n) => t in e ? De(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    z = (e, t) => {
        for (var n in t || (t = {})) Pe.call(t, n) && ue(e, n, t[n]);
        if (ae)
            for (var n of ae(t)) Le.call(t, n) && ue(e, n, t[n]);
        return e
    },
    re = (e, t) => Te(e, Re(t));
import {
    e as C,
    s as O,
    t as g,
    c as a,
    i as l,
    a as Q,
    b as le,
    d as ee,
    h as ce,
    l as Oe,
    m as L,
    u as Me,
    g as ke
} from "./web-c89f4fb8.js";
import {
    S as $,
    j as pe,
    F as K,
    c as U,
    i as Y
} from "./solid-js-871c99e1.js";
import {
    d as M,
    m as F
} from "./index-3e9ecfb4.js";
import {
    u as k,
    a as q,
    D as I,
    j as xe,
    P as Ae,
    B as N,
    s as G,
    p as Fe,
    c as V,
    I as oe,
    X as ie,
    e as w,
    T as fe,
    H as We,
    l as de,
    f as Ue
} from "./manifest-f1f40164.js";
import {
    b as he,
    f as A,
    p as S,
    w as ge
} from "./index-c5ebc757.js";
import {
    S as qe
} from "./index-c8555da0.js";
import {
    C as je
} from "./index-839cb11c.js";
import {
    t as d,
    T as ze
} from "./i18n-827ab26d.js";
import {
    s as j
} from "./utils-38f210e8.js";
import {
    s as be,
    S as Ye,
    c as Ve
} from "./_baseIsEqual-837613bc.js";
import {
    b as Ke
} from "./_baseIndexOf-fe3207b1.js";
import {
    S as ne
} from "./baseService-2efdc30b.js";
import {
    n as He
} from "./noop-cb277961.js";
import {
    d as Je,
    T as Xe
} from "./TermWithData-7307171f.js";
import {
    c as $e,
    b as Ze
} from "./router-6c6c27f7.js";
import {
    C as Qe,
    f as Ge
} from "./common-progress-bar-349cd753.js";
import {
    C as ve
} from "./countdown-9ad59544.js";
import {
    I as et
} from "./index-d27f3208.js";
import {
    b as ye
} from "./_baseIteratee-bc603d62.js";

function tt(e, t) {
    var n = e == null ? 0 : e.length;
    return !!n && Ke(e, t, 0) > -1
}

function rt(e, t, n) {
    for (var r = -1, s = e == null ? 0 : e.length; ++r < s;)
        if (n(t, e[r])) return !0;
    return !1
}

function nt(e, t) {
    for (var n, r = -1, s = e.length; ++r < s;) {
        var i = t(e[r]);
        i !== void 0 && (n = n === void 0 ? i : n + i)
    }
    return n
}

function me(e, t) {
    return e && e.length ? nt(e, ye(t)) : 0
}
var st = 1 / 0,
    lt = ne && 1 / be(new ne([, -0]))[1] == st ? function(e) {
        return new ne(e)
    } : He;
const ot = lt;
var it = 200;

function _e(e, t, n) {
    var r = -1,
        s = tt,
        i = e.length,
        u = !0,
        o = [],
        c = o;
    if (n) u = !1, s = rt;
    else if (i >= it) {
        var m = t ? null : ot(e);
        if (m) return be(m);
        u = !1, s = Ve, c = new Ye
    } else c = t ? [] : o;
    e: for (; ++r < i;) {
        var p = e[r],
            x = t ? t(p) : p;
        if (p = n || p !== 0 ? p : 0, u && x === x) {
            for (var b = c.length; b--;)
                if (c[b] === x) continue e;
            t && c.push(x), o.push(p)
        } else s(c, x, n) || (c !== o && c.push(x), o.push(p))
    }
    return o
}

function at(e) {
    return e && e.length ? _e(e) : []
}

function ut(e, t) {
    return e && e.length ? _e(e, ye(t)) : []
}
var ct = g("<div class=flex-shrink-0><img class=w-12>");
const dt = e => (() => {
    var t = ct(),
        n = t.firstChild;
    return C(() => O(n, "src", e.src)), t
})();
var gt = g('<div class="absolute -left-2 top-0 rounded-br-xl rounded-tl-xl bg-gradient-to-r from-[#FFCB27] to-[#FF8D08] px-2 font-semibold text-primary text-xxs">'),
    mt = g('<div class="flex h-full items-center text-lg font-extrabold text-primary">');
const pt = e => a(qe, {
    class: "bg-layer5 brightness-95",
    get cover() {
        return a(dt, {
            get src() {
                return he.deposit
            }
        })
    },
    get descriptions() {
        return `${d("Up to")} ${e.upTo}`
    },
    get action() {
        return a(je, {
            get onClick() {
                return e.onDeposit
            },
            class: "w-full",
            type: "brand",
            get children() {
                return d("Deposit")
            }
        })
    },
    get children() {
        return [(() => {
            var t = gt();
            return l(t, () => d("New User Only")), t
        })(), (() => {
            var t = mt();
            return l(t, () => e.description), t
        })()]
    }
});
M.registerUIWidget({
    target: "notification",
    apply: e => e.type === "KR-NEWBIE" || e.type === "COMMON-NEWBIE" || e.type === "VN-NEWBIE",
    render: e => {
        const t = k(),
            n = () => e.currenSeqBonusList,
            r = () => F(n(), "maxBonus");
        return a($, {
            get when() {
                return r()
            },
            children: s => {
                const i = () => {
                        const c = s();
                        return q.printCurrency(new I(c.maxBonus), c.currency, {
                            target: e.type === "COMMON-NEWBIE" ? xe.setting.localeCurrencyName : c.currency
                        })
                    },
                    u = () => {
                        const c = s();
                        if (!c) return;
                        const m = c.selectedBonusType ? `?bonusType=${c.selectedBonusType}` : "";
                        t(`/wallet/deposit${m}`)
                    },
                    o = () => `${j(e.seq)} ${d("Deposit Bonus")} ${new I(s().bonusRatio).mul(100).toFixed(0)}%`;
                return a(pt, {
                    get upTo() {
                        return i()
                    },
                    onDeposit: u,
                    get description() {
                        return o()
                    }
                })
            }
        })
    }
});
var xt = g("<span>");
const we = e => (() => {
        var t = xt();
        return l(t, () => d("New User Only")), C(() => Q(t, `inline-flex rounded-lg bg-gradient-to-br from-[#EE8624] to-[#E6B820] px-2 py-1 font-extrabold text-alw_white ${e.class}`)), t
    })(),
    ft = "/modules/bonus2/assets/deposit-popup-bg-551bd684.png";
class R {
    static generateBonusPercentage(t) {
        return `${new I(t).mul(100).toFixed(0)}% ${d("Bonus")}`
    }
    static generateExtraRewardText(t, n) {
        const r = [],
            s = n ? d("FS") : d("Free Spins"),
            i = n ? d("FB") : d("Free Bet");
        return t.freeBet && r.push(`${t.freeBet} ${i}`), t.freeSpin && r.push(`${t.freeSpin} ${s}`), r.length > 0 ? ` + ${r.join("/")}` : ""
    }
    static generateLocationText(t) {
        return t ? t === "casino" ? d("in Casino") : t === "sport" ? d("in Sports") : "" : ""
    }
    static generateMultiLocationText(t) {
        const n = at(t);
        return n.length === 1 ? this.generateLocationText(n[0]) : n.length >= 2 ? d("in Casino or Sports") : ""
    }
    static generateStepText(t) {
        return `${j(t)} ${d("Deposit Bonus")}`
    }
    static generateMonthlyBannerText() {
        return `${d("Sign Up")} -> ${d("Deposit")} -> ${d("Get Bonus")}`
    }
}
var ht = g('<div class="relative z-0 box-border flex size-full min-h-[28rem] overflow-hidden rounded-xl bg-layer1"><img class="absolute -z-10 size-full rounded-xl opacity-85"><div class="flex w-full flex-col items-center justify-end gap-y-1 px-4 pb-4"><span class="text-xl font-extrabold text-primary"></span><p class="text-[5rem] font-extrabold italic leading-none"></p><p class="text-xl font-extrabold text-primary"></p><p class="text-base font-semibold text-primary">');
const bt = e => a(Ae, {
    close: !1,
    type: "center",
    class: "spin-popup !box-border !w-60 !min-w-[22rem]",
    get children() {
        var t = ht(),
            n = t.firstChild,
            r = n.nextSibling,
            s = r.firstChild,
            i = s.nextSibling,
            u = i.nextSibling,
            o = u.nextSibling;
        return O(n, "src", ft), r.style.setProperty("background-image", "linear-gradient(180deg, transparent 0%, var(--gradient-color) 60%)"), l(r, a(we, {
            class: "uppercase"
        }), s), l(s, () => e.title), i.style.setProperty("text-shadow", "0px 6px 1px #0E7B00"), i.style.setProperty("-webkit-text-stroke-width", "1px"), i.style.setProperty("-webkit-text-stroke-color", "#3BFF6C"), i.style.setProperty("background", "linear-gradient(227deg, #FFF -12.34%, #D2F0C8 24.17%, #EEF9EA 36.61%, #FFF 68.31%)"), i.style.setProperty("background-clip", "text"), i.style.setProperty("-webkit-background-clip", "text"), l(i, () => e.description), l(u, () => `${d("Up to ")} ${e.upTo}`), l(o, () => e.info), l(r, a(N, {
            get onClick() {
                return e.onDeposit
            },
            type: "brand",
            class: "mt-9 w-full",
            get children() {
                return d("Deposit Now")
            }
        }), null), C(c => (c = G.darken ? "#232626" : "#FFF") != null ? r.style.setProperty("--gradient-color", c) : r.style.removeProperty("--gradient-color")), t
    }
});
M.registerUIWidget({
    target: "home-popup",
    apply: e => e.type === "KR-NEWBIE" || e.type === "COMMON-NEWBIE" || e.type === "VN-NEWBIE",
    render: e => {
        const t = () => e.type === "KR-NEWBIE" ? a(ze, {
                i18nKey: "page.bonus.event.poppup.deposit.bonus",
                children: "Deposit Bonus"
            }) : `${j(e.seq)} ${d("Deposit Bonus")}`,
            n = () => F(e.currenSeqBonusList, "maxBonus");
        return a($, {
            get when() {
                return n()
            },
            children: r => {
                const s = k(),
                    i = () => `+${new I(r().bonusRatio).mul(100).toFixed(0)}%`,
                    u = () => q.printCurrency(new I(r().maxBonus), r().currency, {
                        target: e.type === "COMMON-NEWBIE" ? xe.setting.localeCurrencyName : r().currency
                    });
                return a(bt, {
                    get title() {
                        return t()
                    },
                    get description() {
                        return i()
                    },
                    get upTo() {
                        return u()
                    },
                    get info() {
                        return R.generateMultiLocationText(e.currenSeqBonusList.map(c => c.selectedBonusType))
                    },
                    onDeposit: () => {
                        const c = n();
                        Fe.pop(), c && s("/wallet/deposit")
                    }
                })
            }
        })
    }
});
var $t = g("<span>");
const se = e => {
    const [t, n] = pe(e, ["texts", "gap"]);
    return (() => {
        var r = $t();
        return le(r, ee(n, {
            get class() {
                return V("inline-flex items-center", e.class)
            },
            get style() {
                var s;
                return re(z({}, e.style), {
                    gap: ((s = e.gap) != null ? s : .25) + "rem"
                })
            }
        }), !1, !0), l(r, a(K, {
            get each() {
                return e.texts
            },
            children: s => s
        })), r
    })()
};
var vt = g("<div>");
const Be = e => (() => {
        var t = vt();
        return le(t, ee(e, {
            get style() {
                return z({}, e.style)
            },
            get class() {
                return V("mx-4 flex flex-shrink-0 flex-grow flex-col justify-between rounded-xl bg-layer4 p-4 sm:mx-0 sm:basis-[20rem]", e.class)
            }
        }), !1, !1), t
    })(),
    yt = (e, t) => {
        const n = e.fiatRecharge;
        return n && t in n ? n[t] : q.convertCurrency(new I(e.minDeposit), e.currency, t)
    };
var _t = g('<span class="text-2xl text-primary">% '),
    wt = g("<span class=text-brand>"),
    Bt = g('<span class="text-lg font-semibold text-secondary"> '),
    St = g('<div class="ml-6 mt-4 flex items-center gap-x-6"><img class="h-28 sm:h-40"alt=Deposit>'),
    Ct = g('<div class="flex w-full items-center justify-end">');
const Et = e => {
        const t = () => {
                const r = e.metrics.items,
                    s = F(r, "freeSpin"),
                    i = F(r, "freeBet");
                return R.generateExtraRewardText({
                    freeBet: i == null ? void 0 : i.freeBet,
                    freeSpin: s == null ? void 0 : s.freeSpin
                }, !0)
            },
            n = () => {
                const r = F(e.metrics.items, s => s.bonusRatio);
                return r || {
                    bonusRatio: 0,
                    freeSpin: 0,
                    freeBet: 0,
                    minDeposit: 0,
                    fiatRecharge: {},
                    maxDeposit: 0,
                    maxBonus: 0,
                    currency: ""
                }
            };
        return a(se, {
            gap: .25,
            class: "flex-col !items-start font-extrabold",
            get texts() {
                return [(() => {
                    var r = _t(),
                        s = r.firstChild;
                    return l(r, () => new I(n().bonusRatio).mul(100).toFixed(0), s), l(r, () => d("Bonus"), null), r
                })(), a(se, {
                    get texts() {
                        return [d("Get up to:"), (() => {
                            var r = wt();
                            return l(r, () => q.printCurrency(new I(n().maxBonus), n().currency), null), l(r, t, null), r
                        })(), R.generateMultiLocationText(e.metrics.items.map(r => r.selectedBonusType))]
                    },
                    class: "flex-wrap text-lg font-semibold text-secondary"
                }), (() => {
                    var r = Bt(),
                        s = r.firstChild;
                    return l(r, () => d("Min Deposit:"), s), l(r, () => q.printCurrency(new I(yt(n(), n().currency)), n().currency), null), r
                })()]
            }
        })
    },
    It = e => a(Be, {
        class: "relative min-h-64 !px-4",
        style: {
            "background-image": "linear-gradient(288deg, transparent 21%, rgba(180, 89, 255, 0.30) 116%)"
        },
        get children() {
            return [a(N, {
                get onClick() {
                    return e.onTerms
                },
                class: "absolute right-3 top-3",
                get children() {
                    return a(oe, {
                        name: "Info",
                        class: "size-6 text-tertiary"
                    })
                }
            }), a(se, {
                get texts() {
                    return [a(we, {
                        class: "text-xs"
                    }), e.title]
                },
                class: "text-xl font-extrabold text-primary"
            }), (() => {
                var t = St(),
                    n = t.firstChild;
                return l(t, a(Et, {
                    get metrics() {
                        return e.metrics
                    }
                }), null), C(() => O(n, "src", he.deposit)), t
            })(), (() => {
                var t = Ct();
                return l(t, a(N, {
                    get onClick() {
                        return e.onDeposit
                    },
                    type: "brand",
                    class: "min-w-40",
                    get children() {
                        return d("Deposit Now")
                    }
                })), t
            })()]
        }
    });
M.registerUIWidget({
    target: "dashboard-bonus",
    apply: e => e.type === "KR-NEWBIE" || e.type === "COMMON-NEWBIE" || e.type === "VN-NEWBIE",
    render: e => {
        const t = k(),
            n = () => t(`/wallet/deposit?bonusType=${e.currenSeqBonusList[0].selectedBonusType}`);
        return console.log(e.seq, "activity.seq", e.rawBonusList, e.currenSeqBonusList), a(It, {
            get metrics() {
                return {
                    items: e.currenSeqBonusList
                }
            },
            get onTerms() {
                return e.requestTerms
            },
            onDeposit: n,
            get title() {
                return `${j(e.seq)} ${d("Deposit Bonus")}`
            }
        })
    }
});
const Nt = "/modules/bonus2/assets/sports-92bf8173.png",
    Dt = "/modules/bonus2/assets/casino-30e8cfed.png";
var Tt = g('<div class="px-3 pt-0.5 sm:!px-0"><div class="relative z-0 flex h-full cursor-pointer flex-col justify-center rounded-xl bg-layer4 px-7 py-4"><div class="absolute right-0 top-0 -z-10 h-full"><img class=h-full></div><div></div><div class="mt-8 flex items-end gap-x-2">');
const Rt = e => {
    k();
    const t = {
            casino: Dt,
            monthly: Je,
            sport: Nt
        },
        n = {
            casino: G.darken ? "#715233" : "#DF9148",
            monthly: G.darken ? "#378158" : "#24DC72",
            sport: G.darken ? "#715E33" : "#DFB548"
        };
    return (() => {
        var r = Tt(),
            s = r.firstChild,
            i = s.firstChild,
            u = i.firstChild,
            o = i.nextSibling,
            c = o.nextSibling;
        return s.style.setProperty("background-image", "linear-gradient(240deg, var(--gradient-color) -16%, transparent 70%)"), l(o, () => e.label), l(c, a($, {
            get when() {
                return e.onDeposit
            },
            get children() {
                return a(N, {
                    type: "brand",
                    class: "!px-2 text-sm",
                    size: "s",
                    get onClick() {
                        return e.onDeposit
                    },
                    get children() {
                        return d("Deposit Now")
                    }
                })
            }
        }), null), l(c, a($, {
            get when() {
                return e.onLearnMore
            },
            get children() {
                return a(N, {
                    get onClick() {
                        return e.onLearnMore
                    },
                    class: "text-xs font-extrabold underline",
                    size: "xs",
                    get children() {
                        return d("Learn More")
                    }
                })
            }
        }), null), C(m => {
            var p = n[e.type],
                x = t[e.type];
            return p !== m.e && ((m.e = p) != null ? s.style.setProperty("--gradient-color", p) : s.style.removeProperty("--gradient-color")), x !== m.t && O(u, "src", m.t = x), m
        }, {
            e: void 0,
            t: void 0
        }), r
    })()
};
var Pt = g('<div class="mt-1 text-xs font-semibold leading-none text-secondary">'),
    Lt = g("<div>BC 오리지널 & 슬롯만"),
    Ot = g('<div class="max-w-44 text-wrap text-xl font-semibold text-primary"><div>'),
    Mt = g('<div class="flex flex-col gap-y-1"><div class="text-2xl font-extrabold text-brand"> '),
    kt = g('<div class="text-xl font-extrabold leading-none">');
M.registerUIWidget({
    target: "banner-home",
    apply(e) {
        return e.type === "KR-DAILY" || e.type === "MONTHLY" || e.type === "KR-NEWBIE" || e.type === "COMMON-NEWBIE" || e.type === "SPECIAL" || e.type === "VN-NEWBIE" || e.type === "VN-DAILY"
    },
    render(e) {
        const t = () => e.currenSeqBonusList;
        return a($, {
            get when() {
                return t().length > 0
            },
            get children() {
                return a(K, {
                    get each() {
                        return t()
                    },
                    children: n => {
                        const r = () => n.selectedBonusType ? n.selectedBonusType : "monthly",
                            s = () => r() === "monthly" ? d("Deposit Bonus") : "",
                            i = () => r() === "monthly" ? (() => {
                                var o = Pt();
                                return l(o, () => R.generateMonthlyBannerText()), o
                            })() : (() => {
                                var o = Ot(),
                                    c = o.firstChild;
                                return l(o, () => R.generateExtraRewardText({
                                    freeBet: n.freeBet,
                                    freeSpin: n.freeSpin
                                }), c), l(c, a($, {
                                    get when() {
                                        return e.type === "KR-NEWBIE"
                                    },
                                    get fallback() {
                                        return R.generateLocationText(n.selectedBonusType)
                                    },
                                    get children() {
                                        return [Lt(), "(롤링 요건 5X)"]
                                    }
                                })), o
                            })(),
                            u = k();
                        return a(Rt, {
                            get type() {
                                return r()
                            },
                            get label() {
                                return (() => {
                                    var o = Mt(),
                                        c = o.firstChild,
                                        m = c.firstChild;
                                    return l(o, a($, {
                                        get when() {
                                            return s()
                                        },
                                        children: p => (() => {
                                            var x = kt();
                                            return l(x, p), x
                                        })()
                                    }), c), l(c, () => R.generateBonusPercentage(n.bonusRatio), m), l(o, i, null), o
                                })()
                            },
                            onLearnMore: () => {
                                e.requestTerms(n.selectedBonusType)
                            },
                            onDeposit: () => u(`/deposit${n.selectedBonusType?`?bonusType=${n.selectedBonusType}`:""}`)
                        })
                    }
                })
            }
        })
    }
});
var At = g("<div class=h-[1.375rem]>"),
    Ft = g('<div class="absolute left-1/2 top-1/2 h-[1.375rem] -translate-x-1/2 -translate-y-1/2 bg-layer2">');
const Wt = e => {
    let t;
    const n = ie(() => t);
    return a(Qe, {
        ref(r) {
            var s = t;
            typeof s == "function" ? s(r) : t = r
        },
        class: "-mb-6 mt-4",
        get milestones() {
            return e.milestones
        },
        get progress() {
            return e.value
        },
        renderProgress: r => {
            const s = (x, b, D, y, f, v = 0) => {
                    const E = h => h.map(_ => {
                            const {
                                r: te,
                                x: J,
                                y: X
                            } = _, Z = te / 2, Ce = [J - Z + v, X], Ee = [J + v, X - Z], Ie = [J + v + Z, X], Ne = [J + v, X + Z];
                            return {
                                left: Ce,
                                top: Ee,
                                right: Ie,
                                bottom: Ne
                            }
                        }),
                        B = D.map(h => {
                            const _ = new I(x).mul(h).div(100).toNumber(),
                                te = b / 2;
                            return {
                                x: _,
                                y: te,
                                r: y
                            }
                        }),
                        T = E(B).map(h => ({
                            leftTop: [h.left[0] + f / 2 + "px", h.left[1] - f / 2 + "px"].join(" "),
                            leftBottom: [h.left[0] + f / 2 + "px", h.left[1] + f / 2 + "px"].join(" "),
                            rightTop: [h.right[0] - f / 2 + "px", h.right[1] - f / 2 + "px"].join(" "),
                            rightBottom: [h.right[0] - f / 2 + "px", h.right[1] + f / 2 + "px"].join(" "),
                            top: h.top.map(_ => _ + "px").join(" "),
                            bottom: h.bottom.map(_ => _ + "px").join(" "),
                            left: h.left.map(_ => _ + "px").join(" "),
                            right: h.right.map(_ => _ + "px").join(" ")
                        })),
                        W = [];
                    return T.forEach((h, _) => {
                        W.push(_ === 0 ? h.left : h.leftTop, h.top, _ === T.length - 1 ? h.right : h.rightTop)
                    }), T.slice().reverse().forEach((h, _) => {
                        W.push(_ === 0 ? h.right : h.rightBottom, h.bottom, _ === T.length - 1 ? h.left : h.leftBottom)
                    }), `polygon(${W.join(",")})`
                },
                i = U(() => {
                    var x;
                    return (x = Ge(e.milestones, b => r >= b.progressTarget)) != null ? x : 0
                }),
                u = () => w.mobile ? 320 : Math.max(n.width - 40 * w.remScale, 0),
                o = 22,
                c = 8,
                m = U(() => {
                    const x = e.milestones.map(b => b.progressTarget);
                    return {
                        "clip-path": s(u() * w.remScale, o * w.remScale, x, o * w.remScale, c * w.remScale, o / 2 * w.remScale),
                        width: (u() + o) * w.remScale + "px"
                    }
                }),
                p = U(() => {
                    const x = u() * r / 100,
                        b = e.milestones.map(y => y.progressTarget);
                    let D = i();
                    return {
                        "clip-path": s(u() * w.remScale, o * w.remScale, b.slice(0, D + 1), (o - 5) * w.remScale, (c - 4) * w.remScale, o / 2 * w.remScale),
                        width: (x + o) * w.remScale + "px"
                    }
                });
            return (() => {
                var x = Ft();
                return l(x, a($, {
                    get when() {
                        return e.value > 0
                    },
                    get children() {
                        var b = At();
                        return C(D => ce(b, re(z({}, p()), {
                            "background-image": "linear-gradient(90deg, rgba(244, 227, 48, 0.30) 0%, #F4E330 100%)"
                        }), D)), b
                    }
                })), C(b => ce(x, z({}, m()), b)), x
            })()
        }
    })
};
var Ut = g('<div class="relative z-20 flex justify-between"><div class="flex flex-col flex-wrap sm:flex-row sm:items-center sm:gap-x-2"><h3 class="text-lg font-extrabold text-primary"></h3><p class="text-sm font-semibold text-secondary">'),
    qt = g('<div class="relative z-10 flex flex-col gap-y-2 sm:flex-row sm:items-center sm:justify-between"><span class="text-sm font-semibold text-secondary">'),
    jt = g("<span class=text-primary>"),
    zt = g('<div class="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-layer1 opacity-80">'),
    Yt = g("<div>"),
    Vt = g("<div><img>"),
    Kt = g('<div class="w-48 text-center font-normal">'),
    Ht = g('<div class="-mb-4 -mt-8 flex h-[10rem] flex-col items-center justify-center"><span>');
const Jt = e => {
    const t = $e();
    let n;
    return ie(() => n), a(Be, {
        class: "bg-deposit-dashboard",
        get children() {
            return [(() => {
                var r = Ut(),
                    s = r.firstChild,
                    i = s.firstChild,
                    u = i.nextSibling;
                return l(i, () => e.title), l(u, () => e.description), l(r, a($, {
                    get when() {
                        return e.onTermsClick
                    },
                    get children() {
                        return a(N, {
                            get onClick() {
                                return e.onTermsClick
                            },
                            class: "!h-auto shrink-0 items-start p-0 text-sm font-semibold text-brand underline sm:items-center",
                            get children() {
                                return d("Bonus T&C")
                            }
                        })
                    }
                }), null), r
            })(), a(Wt, {
                get value() {
                    return e.value
                },
                get milestones() {
                    return e.milestones
                }
            }), (() => {
                var r = qt(),
                    s = r.firstChild;
                return l(s, a($, {
                    get when() {
                        return e.timeRange
                    },
                    children: i => a($, {
                        get when() {
                            return Date.now() < i()[0]
                        },
                        get children() {
                            return [L(() => d("Bonus Available in")), ":", (() => {
                                var u = jt();
                                return l(u, a(ve, {
                                    get expiresInMS() {
                                        return i()[0]
                                    }
                                })), u
                            })()]
                        }
                    })
                })), l(r, a(fe, {
                    get when() {
                        return e.depositFinished
                    },
                    get fallback() {
                        return a(N, {
                            get onClick() {
                                return e.onDeposit
                            },
                            class: "text-lg sm:text-base",
                            type: "brand",
                            get disabled() {
                                return e.disabledDeposit
                            },
                            get children() {
                                return d("Deposit Now")
                            }
                        })
                    },
                    get children() {
                        return a(N, {
                            type: "second",
                            class: "text-lg sm:text-base",
                            onClick: () => {
                                t("/promotions/promotion")
                            },
                            get children() {
                                return d("Check More Promos")
                            }
                        })
                    }
                }), null), r
            })()]
        }
    })
};
M.registerUIWidget({
    target: "dashboard-bonus",
    apply: e => e.type === "MONTHLY" || e.type === "KR-DAILY" || e.type === "VN-DAILY",
    render: e => {
        const t = () => F(e.rawBonusList, "maxBonus");
        return a($, {
            get when() {
                return t()
            },
            children: n => {
                const r = $e(),
                    s = () => {
                        r("/wallet/deposit")
                    },
                    i = () => 100 / (e.rawBonusList.length - 1),
                    u = () => e.activityStartTime > 0 ? -1 : i() * (e.seq - 1);
                return a(Jt, {
                    get title() {
                        return `${j(Math.min(e.seq,e.rawBonusList.length))} ${d("Deposit Bonus")}`
                    },
                    get description() {
                        return `${d("Get up to:")} ${q.printCurrency(new I(n().maxBonus),n().currency)}`
                    },
                    get onTermsClick() {
                        return e.requestTerms
                    },
                    onDeposit: s,
                    get milestones() {
                        return e.rawBonusList.map((o, c) => {
                            const m = i() * c;
                            return {
                                progressTarget: m,
                                icon() {
                                    const p = () => (() => {
                                            var y = zt();
                                            return l(y, a(et, {
                                                name: "check",
                                                size: 16,
                                                class: "text-brand"
                                            })), y
                                        })(),
                                        x = () => (() => {
                                            var f = Yt();
                                            return C(v => {
                                                var E = V("relative -z-20 bg-alw_dark"),
                                                    B = 60 * w.remScale + "px";
                                                return E !== v.e && Q(f, v.e = E), B !== v.t && ((v.t = B) != null ? f.style.setProperty("height", B) : f.style.removeProperty("height")), v
                                            }, {
                                                e: void 0,
                                                t: void 0
                                            }), f
                                        })(),
                                        b = () => o.done ? o.meetMinDeposit : u() >= m,
                                        D = y => {
                                            const f = [b() ? A.coin : A.coin_closed, b() ? A.coin2 : A.coin2_closed, b() ? A.coin3 : A.coin3_closed, b() ? A.coin4 : A.coin4_closed, , ],
                                                v = () => o.done ? o.meetMinDeposit : u() >= m,
                                                E = () => o.done ? o.meetMinDeposit : !1;
                                            return a(We, {
                                                get disabled() {
                                                    return !o.done || o.meetMinDeposit
                                                },
                                                get title() {
                                                    return (() => {
                                                        var B = Kt();
                                                        return l(B, () => d("Deposit did not meet the minimum requirements.")), B
                                                    })()
                                                },
                                                get children() {
                                                    var B = Vt(),
                                                        H = B.firstChild;
                                                    return l(B, a(fe, {
                                                        get when() {
                                                            return E()
                                                        },
                                                        get children() {
                                                            return p()
                                                        }
                                                    }), H), C(T => {
                                                        var W = V("flex size-16 cursor-pointer items-center justify-center", y),
                                                            h = V(v() ? "" : "grayscale", c === f.length - 1 ? "-mt-2" : ""),
                                                            _ = f[c];
                                                        return W !== T.e && Q(B, T.e = W), h !== T.t && Q(H, T.t = h), _ !== T.a && O(H, "src", T.a = _), T
                                                    }, {
                                                        e: void 0,
                                                        t: void 0,
                                                        a: void 0
                                                    }), B
                                                }
                                            })
                                        };
                                    return (() => {
                                        var y = Ht(),
                                            f = y.firstChild;
                                        return l(y, () => D("absolute -top-4"), f), l(y, x, f), l(f, () => new I(o.bonusRatio).mul(100).toString() + "%"), C(v => Oe(f, {
                                            "flex items-center text-sm font-semibold": !0,
                                            "text-secondary": !b(),
                                            "text-[#FFBA08]": b()
                                        }, v)), y
                                    })()
                                }
                            }
                        })
                    },
                    get timeRange() {
                        return [e.activityStartTime, e.activityStartTime]
                    },
                    get value() {
                        return u()
                    }
                })
            }
        })
    }
});
var Xt = g('<div class="absolute -left-1 -top-3 z-0 flex items-center justify-center px-2 py-1 @lg:left-2 @lg:top-1"><img class="absolute inset-0 -z-10 size-full"alt=""><span class="font-extrabold leading-none text-primary text-xxs @lg:text-base">'),
    Zt = g('<p class="rounded-lg bg-layer4 p-2 text-xs font-semibold text-secondary"> '),
    Qt = g('<p class="flex flex-grow flex-col items-center justify-center @lg:order-2"><span class="text-sm font-extrabold text-primary @lg:text-lg">'),
    Gt = g('<div class="relative flex flex-col rounded-xl bg-layer2 p-2 lg:px-4 lg:pb-4"><div class="flex @lg:flex-col @lg:items-center"><div class="flex-shrink basis-1/3 @lg:order-1 @lg:w-32"><img class=w-full alt="">');
const er = e => {
    const t = [{
            tagBg: S.stepIF,
            bg: "rgba(255, 183, 30, 0.6)",
            mainBox: S.d1Box
        }, {
            tagBg: S.stepIS,
            bg: "rgba(187, 255, 48, 0.6)",
            mainBox: S.d2Box
        }, {
            tagBg: S.stepIT,
            bg: "rgba(255, 98, 48, 0.6)",
            mainBox: S.d3Box
        }, {
            tagBg: S.stepIFour,
            bg: "rgba(224, 55, 255, 0.6)",
            mainBox: S.d4Box
        }],
        n = Y(() => (() => {
            var i = Xt(),
                u = i.firstChild,
                o = u.nextSibling;
            return l(o, (() => {
                var c = L(() => !!e.finished);
                return () => c() ? a(oe, {
                    class: "w-4",
                    name: "Check"
                }) : e.seq.toString().padStart(2, "0")
            })()), C(() => O(u, "src", t[e.seq - 1].tagBg)), i
        })()),
        r = Y(() => (() => {
            var i = Zt(),
                u = i.firstChild;
            return l(i, () => j(e.seq), u), l(i, () => d("Deposit"), null), i
        })()),
        s = Y(() => (() => {
            var i = Qt(),
                u = i.firstChild;
            return l(u, () => R.generateBonusPercentage(e.bonusRatio)), l(i, r, null), i
        })());
    return (() => {
        var i = Gt(),
            u = i.firstChild,
            o = u.firstChild,
            c = o.firstChild;
        return i.style.setProperty("background-size", "100% 100%"), l(i, n, u), l(u, s, o), C(m => {
            var p = `linear-gradient(to bottom, ${t[e.seq-1].bg} 0%, transparent 97%)`,
                x = t[e.seq - 1].mainBox;
            return p !== m.e && ((m.e = p) != null ? i.style.setProperty("background-image", p) : i.style.removeProperty("background-image")), x !== m.t && O(c, "src", m.t = x), m
        }, {
            e: void 0,
            t: void 0
        }), i
    })()
};
var tr = g('<div class="flex flex-row items-start gap-4">'),
    rr = g('<div class="flex flex-col gap-3 rounded-lg bg-layer3 p-4 @lg:flex-row @lg:items-center @lg:justify-between"><h3><div class="hidden @lg:mt-4 @lg:block @lg:text-secondary"></div></h3><div class="grid flex-shrink-0 grid-cols-2 gap-4 @lg:grid-cols-4"></div><div class=@lg:hidden>'),
    nr = g('<div class="font-semibold text-primary"><p></p><p>'),
    sr = g('<p class="font-extrabold text-primary @lg:text-3xl">'),
    lr = g("<p class=text-xl> "),
    or = g('<p class="font-semibold text-primary"> ');

function ir(e) {
    const t = Y(() => a(K, {
            get each() {
                return e.items
            },
            children: (r, s) => a(er, r)
        })),
        n = () => {
            const r = U(() => [e.onDeposit && a(N, {
                class: "flex-grow",
                type: "brand",
                get onClick() {
                    return e.onDeposit
                },
                get children() {
                    return d("Deposit Now")
                }
            }), e.onMoreDetails && a(N, {
                class: "flex-grow border border-solid border-third bg-black_alpha5 font-semibold text-primary",
                get onClick() {
                    return e.onMoreDetails
                },
                get children() {
                    return d("More Details")
                }
            })]);
            return (() => {
                var s = tr();
                return l(s, a($, {
                    get when() {
                        return e.actionRender
                    },
                    get fallback() {
                        return a(K, {
                            get each() {
                                return r()
                            },
                            children: (i, u) => i
                        })
                    },
                    get children() {
                        return e.actionRender()
                    }
                })), s
            })()
        };
    return (() => {
        var r = rr(),
            s = r.firstChild,
            i = s.firstChild,
            u = s.nextSibling,
            o = u.nextSibling;
        return r.style.setProperty("background-image", "linear-gradient(110deg, #D2EC27 -88%, transparent 46%)"), l(s, () => e.title, i), l(i, n), l(u, t), l(o, n), r
    })()
}
M.registerUIWidget({
    target: "banner-promotion",
    apply: e => e.type === "COMMON-NEWBIE" || e.type === "KR-NEWBIE" || e.type === "MONTHLY" || e.type === "KR-DAILY" || e.type === "VN-DAILY" || e.type === "VN-NEWBIE",
    render: e => {
        const t = k(),
            n = () => {
                const s = () => (() => {
                        var u = nr(),
                            o = u.firstChild,
                            c = o.nextSibling;
                        return l(o, () => d("Great Deposit Bonus")), l(c, () => R.generateMultiLocationText(e.rawBonusList.map(m => m.selectedBonusType))), u
                    })(),
                    i = () => {
                        const u = F(e.rawBonusList, p => p.bonusRatio),
                            o = me(e.rawBonusList, p => p.freeBet),
                            c = me(e.rawBonusList, p => p.freeSpin),
                            m = `${d("Up TO")} ${R.generateBonusPercentage(u.bonusRatio)} ${R.generateExtraRewardText({freeBet:o,freeSpin:c},!0)}`;
                        return (() => {
                            var p = sr();
                            return l(p, m), p
                        })()
                    };
                return (() => {
                    var u = lr(),
                        o = u.firstChild;
                    return l(u, s, o), l(u, i, null), u
                })()
            },
            r = U(() => e.activityStartTime > 0 ? {
                actionRender: () => (() => {
                    var s = or(),
                        i = s.firstChild;
                    return l(s, () => d("Available in"), i), l(s, a(ve, {
                        get expiresInMS() {
                            return e.activityStartTime
                        }
                    }), null), s
                })()
            } : {
                onDeposit: () => {
                    t("/deposit")
                },
                onMoreDetails: e.requestTerms
            });
        return a(ir, ee(r, {
            get title() {
                return n()
            },
            get items() {
                return ut(e.rawBonusList, "seq").map(s => ({
                    bonusRatio: s.bonusRatio,
                    seq: s.seq,
                    finished: s.done
                }))
            }
        }))
    }
});
var P = (e => (e.Hot = "HOT", e.New = "NEW", e.Exclusive = "EXCLUSIVE", e.NewUser = "New User", e.Sports = "Sports", e.Slots = "Slots", e.None = "NONE", e.NewUserOnly = "New User Only", e))(P || {}),
    ar = (e => (e[e.All = -1] = "All", e[e.Casino = 1] = "Casino", e[e.Sport = 2] = "Sport", e[e.Other = 3] = "Other", e))(ar || {}),
    ur = g('<div class="absolute -top-1 right-2 z-10"><img class=w-12>'),
    cr = g('<div class="ellipsis ellipsis text-sm font-semibold text-secondary"><span></span><span class=ml-1>'),
    dr = g('<div><div class="relative block w-full overflow-hidden rounded-t-lg10 bg-layer3 ratio-[398/170]"></div><div class="center justify-between rounded-bl-lg rounded-br-lg bg-layer3 p-3 pt-3"><div class="ellipsis w-[1px] flex-auto pr-2.5"><div class="ellipsis text-base font-extrabold text-primary"></div></div><div class="">');
const gr = {
        [P.Hot]: S.hot,
        [P.New]: S._new,
        [P.Exclusive]: S.exclusive,
        [P.NewUser]: S.newplayer,
        [P.Slots]: S.slots,
        [P.Sports]: S.promotion_sports,
        [P.NewUserOnly]: S.newuser
    },
    mr = e => {
        const [t, n] = pe(e, ["classList", "title"]);
        return (() => {
            var r = dr(),
                s = r.firstChild,
                i = s.nextSibling,
                u = i.firstChild,
                o = u.firstChild,
                c = u.nextSibling;
            return le(r, ee(n, {
                get classList() {
                    return {
                        "relative mb-4 w-full rounded-xl": !0,
                        "max-h-42 px-2 lg:w-[33.33%]": !w.mobile
                    }
                }
            }), !1, !0), l(r, a($, {
                get when() {
                    return e.itemTag !== P.None && e.itemTag !== void 0
                },
                get children() {
                    var m = ur(),
                        p = m.firstChild;
                    return C(() => O(p, "src", gr[e.itemTag])), m
                }
            }), s), l(s, () => e.imgCover), l(o, () => e.title), l(u, a($, {
                get when() {
                    return e.endTime
                },
                get children() {
                    var m = cr(),
                        p = m.firstChild,
                        x = p.nextSibling;
                    return l(p, () => d("Ends")), l(x, () => new Date(e.endTime).toLocaleString()), m
                }
            }), null), l(c, (() => {
                var m = L(() => !e.inProgress);
                return () => m() ? a(N, {
                    size: "m",
                    class: "w-28 bg-layer5 text-primary",
                    get children() {
                        return d("Event End")
                    }
                }) : a(N, {
                    size: "m",
                    class: "w-28 bg-layer5 text-base font-extrabold text-brand",
                    get children() {
                        return d("In Progress")
                    }
                })
            })()), r
        })()
    };
var pr = g('<div class="mb-2 inline-flex items-center rounded-lg bg-[#FFD557] px-2 py-1 text-xs font-extrabold text-[#60310A]"><img class="mr-2 h-auto w-4"> <span> '),
    xr = g(`<div class="w-full overflow-hidden text-ellipsis rounded-lg p-1 text-secondary backdrop-blur-sm"><div class=text-[0.4rem]>PRODUCCIONES MOVILES S.A. DE C.V., PERMISIONARIA EN MATERIA DE JUEGOS Y SORTEOS CONFORME AL PERMISO
DGAJS/SCEVF/P-06/2005-TER Y AL OFICIO DE AUTORIZACIÓN DGJS/ 1670 /2025 DE LA PROMOCIÓN: BONO POR DEPÓSITO. LA
VIGENCIA DE LA AUTORIZACIÓN ES HASTA EL 31 DE DICIEMBRE DE 2025. LA PROMOCIÓN ES PERSONAL EINTRANSFERIBLE.
JUEGUE RESPONSABLEMENTE. RECUERDE QUE EL PRINCIPAL PROPÓSITO ES EL ENTRETENIMIENTO, LA DIVERSIÓN Y EL
ESPARCIMIENTO. JUEGOS PROHIBIDOS PARAMENORES DE EDAD`),
    fr = g("<span>"),
    hr = g('<div class="absolute bottom-0 top-0 w-full rounded-lg"><div class="absolute left-0 top-0 flex h-[170px] w-[392px] items-center justify-between px-[20px]"><div><p class="text-[24px] font-extrabold leading-none text-brand">% </p><p class="text-[20px] font-extrabold leading-none text-primary"></p></div><div class="absolute right-0 top-2 -z-10 w-[160px] rounded-md"><img class=w-full alt="">');
const Se = e => {
    let t;
    const n = ie(() => t),
        r = U(() => n.width / 398),
        s = () => {
            const {
                isMxHost: u
            } = de.getHostType(w.host);
            return u ? (() => {
                var o = pr(),
                    c = o.firstChild,
                    m = c.nextSibling,
                    p = m.nextSibling;
                return p.firstChild, l(p, () => d("BONO POR DEPÓSITO"), null), C(() => {
                    var x;
                    return O(c, "src", (x = S) == null ? void 0 : x.headerIcon)
                }), o
            })() : null
        },
        i = () => {
            const {
                isMxHost: u
            } = de.getHostType(w.host);
            return u ? xr() : null
        };
    return (() => {
        var u = hr(),
            o = u.firstChild,
            c = o.firstChild,
            m = c.firstChild,
            p = m.firstChild,
            x = m.nextSibling,
            b = c.nextSibling,
            D = b.firstChild,
            y = t;
        return typeof y == "function" ? Me(y, u) : t = u, u.style.setProperty("background-image", "linear-gradient(240deg, var(--gradient-color) -16%, transparent 71%)"), o.style.setProperty("transform-origin", "top left"), l(c, s, m), l(m, () => new I(e.bonusRatio).mul(100).toFixed(0), p), l(m, () => d("Bonus"), null), l(x, a($, {
            get when() {
                return e.type === "sport"
            },
            get fallback() {
                return a($, {
                    get when() {
                        return e.freeSpin && e.freeSpin > 0
                    },
                    get fallback() {
                        return d("In Casino")
                    },
                    get children() {
                        return ["+ ", L(() => e.freeSpin), " ", L(() => d("Free Spins In Casino"))]
                    }
                })
            },
            get children() {
                var f = fr();
                return l(f, a($, {
                    get when() {
                        return e.freeBet
                    },
                    get fallback() {
                        return d("In Sports")
                    },
                    get children() {
                        return ["+ ", L(() => e.freeBet), " ", L(() => d("Free Bet In Sports"))]
                    }
                })), f
            }
        })), l(c, i, null), C(f => {
            var v = e.type === "casino" ? "rgba(64, 163, 106, 0.80)" : "rgba(255, 168, 37, 0.40)",
                E = `scale(${r()},${r()})`,
                B = e.type === "sport" ? ge.bannerSport : ge.bannerCasino;
            return v !== f.e && ((f.e = v) != null ? u.style.setProperty("--gradient-color", v) : u.style.removeProperty("--gradient-color")), E !== f.t && ((f.t = E) != null ? o.style.setProperty("transform", E) : o.style.removeProperty("transform")), B !== f.a && O(D, "src", f.a = B), f
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), u
    })()
};
M.registerUIWidget({
    target: "promotion-list",
    apply: e => e.type === "COMMON-NEWBIE" || e.type === "KR-NEWBIE" || e.type === "KR-DAILY",
    render: e => {
        const t = () => e.currenSeqBonusList.filter(r => r.selectedBonusType),
            n = k();
        return a(K, {
            get each() {
                return t()
            },
            children: r => a(mr, {
                inProgress: !0,
                get title() {
                    return `${d("Deposit Bonus")} ${R.generateLocationText(r.selectedBonusType)}`
                },
                get itemTag() {
                    return P.NewUser
                },
                get imgCover() {
                    return a(Se, {
                        get type() {
                            return r.selectedBonusType
                        },
                        get bonusRatio() {
                            return r.bonusRatio
                        },
                        get freeBet() {
                            return r.freeBet
                        },
                        get freeSpin() {
                            return r.freeSpin
                        }
                    })
                },
                onClick: () => {
                    n(`/promotion/${r.selectedBonusType}_bonus`)
                }
            })
        })
    }
});
var br = g('<div class="center mb-4 inline-flex rounded-lg py-1 text-sm leading-none text-secondary"><div class="center mr-3 h-8 w-8 rounded-md bg-layer4"></div><span class="text-xl font-extrabold text-primary">'),
    $r = g('<div class="mx-auto max-w-[900px] sm:pb-6"><div class="rounded-lg bg-layer3 max-sm:mt-3 sm:bg-layer4 sm:pb-6"><div class="relative sm:flex sm:justify-center"><div class="relative w-full rounded-xl ratio-[398/170]"></div></div><div class=p-3><div class="mt-4 text-left text-base font-extrabold text-primary"></div><div class=flex><div class="my-5 flex w-auto flex-wrap justify-between gap-x-4 rounded-lg bg-layer5 p-2.5"><p class="flex items-center text-xl font-extrabold"></p><div class=text-right><div class="text-3xl font-extrabold text-warning_brighter">% <!> </div></div></div></div><div class="flex flex-col gap-y-4">');
const vr = e => {
    const t = k();
    return a(Ue, {
        get title() {
            return d("Promotion")
        },
        get children() {
            var n = $r(),
                r = n.firstChild,
                s = r.firstChild,
                i = s.firstChild,
                u = s.nextSibling,
                o = u.firstChild,
                c = o.nextSibling,
                m = c.firstChild,
                p = m.firstChild,
                x = p.nextSibling,
                b = x.firstChild,
                D = b.firstChild,
                y = D.nextSibling;
            y.nextSibling;
            var f = c.nextSibling;
            return l(n, a($, {
                get when() {
                    return !w.mobile
                },
                get children() {
                    var v = br(),
                        E = v.firstChild,
                        B = E.nextSibling;
                    return E.$$click = () => {
                        t("/promotions/promotion")
                    }, l(E, a(oe, {
                        class: "w-5 cursor-pointer text-secondary",
                        name: "Arrow"
                    })), l(B, () => d("Promotion")), v
                }
            }), r), l(i, a(Se, {
                get type() {
                    return e.type
                },
                get bonusRatio() {
                    return e.rate
                },
                get freeSpin() {
                    return e.freeSpin
                },
                get freeBet() {
                    return e.freeBet
                }
            })), l(o, () => e.title), l(p, () => d("Total Prize")), l(b, () => new I(e.rate).mul(100).toString(), D), l(b, () => d("Bonus"), y), l(b, a($, {
                get when() {
                    return e.type === "sport"
                },
                get fallback() {
                    return a($, {
                        get when() {
                            return e.freeSpin > 0
                        },
                        get children() {
                            return ["+ ", L(() => e.freeSpin), " FS"]
                        }
                    })
                },
                get children() {
                    return ["+ ", L(() => e.freeBet), " FB"]
                }
            }), null), l(f, () => e.children), l(u, a(N, {
                class: "mt-5 w-72 max-sm:w-full",
                type: "brand",
                get onClick() {
                    return e.onDeposit
                },
                get children() {
                    return d("Deposit Now")
                }
            }), null), n
        }
    })
};
ke(["click"]);
M.registerUIWidget({
    target: "promotion-detail",
    apply: () => !0,
    render: e => {
        const t = Ze(),
            n = k(),
            s = (() => t.pathname.split("/")[t.pathname.split("/").length - 1])() === "casino_bonus" ? "casino" : "sport",
            i = () => e.currenSeqBonusList.find(o => o.selectedBonusType === s),
            u = () => {
                switch (e.type) {
                    case "COMMON-NEWBIE":
                        return {
                            region: "global",
                            termName: `newbie.${s}`
                        };
                    case "KR-NEWBIE":
                        return {
                            region: "kr",
                            termName: `newbie.${s}`
                        };
                    case "VN-NEWBIE":
                        return {
                            region: "global",
                            termName: `newbie.${s}`
                        };
                    case "VN-DAILY":
                        return {
                            region: "vn",
                            termName: `daily.${s}`
                        };
                    case "KR-DAILY":
                        return {
                            region: "kr",
                            termName: `daily.${s}`
                        };
                    case "MONTHLY":
                        return {
                            region: "global",
                            termName: "monthlyDeposit"
                        };
                    default:
                        return {
                            region: "global",
                            termName: "newbie.none"
                        }
                }
            };
        return a($, {
            get when() {
                return i()
            },
            children: o => a(vr, {
                type: s,
                onDeposit: () => {
                    n("/deposit")
                },
                get title() {
                    return s === "casino" ? d("Deposit Bonus in Casino") : d("Deposit Bonus in Sports")
                },
                get rate() {
                    return o().bonusRatio
                },
                get freeSpin() {
                    return o().freeSpin
                },
                get freeBet() {
                    return o().freeBet
                },
                get children() {
                    return a(Xe, {
                        get termsName() {
                            return u().termName
                        },
                        get region() {
                            return u().region
                        },
                        filters: {
                            components: {
                                blacklist: ["bonusStructureImg"]
                            }
                        }
                    })
                }
            })
        })
    }
});
const yr = e => {
        const t = Y(() => {
            try {
                return M.renderUIWidgets(e.target)
            } catch (n) {
                console.error(n)
            }
        });
        return L(t)
    },
    _r = yr,
    jr = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: _r
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    dt as N, ar as P, _r as W, mr as a, jr as w
};