import {
    i as r,
    c as t,
    e as p,
    s as f,
    t as i,
    g as G,
    l as M,
    b as v,
    d as y,
    m as Y,
    a as C
} from "./web-c89f4fb8.js";
import {
    p as A,
    P as K,
    c as x,
    j as q,
    u as Q,
    f as J,
    ar as X,
    B as k,
    A as E,
    s as F,
    T,
    l as Z,
    e as U
} from "./manifest-f1f40164.js";
import {
    w as g
} from "./index-c5ebc757.js";
import {
    F as $,
    I as ee,
    j as W,
    e as te,
    c as H,
    b as re,
    S as P
} from "./solid-js-871c99e1.js";
import {
    t as l,
    T as b
} from "./i18n-827ab26d.js";
import {
    popupBonusTerms as ne
} from "./index-0f07ee52.js";
import {
    f as _,
    F as w
} from "./feature-gating-c05395d6.js";
import {
    C as S
} from "./currency-format-5cd6ca42.js";
import {
    T as le
} from "./skeleton-be7c542b.js";
import {
    T as ae
} from "./table-cd90ca95.js";
import {
    v as se
} from "./index-41fc8b58.js";
import {
    a as N
} from "./recharge-tiers-card-86358f46.js";
import {
    I as ie
} from "./index-d27f3208.js";
import "./TermWithData-7307171f.js";
import "./utils-38f210e8.js";
import "./popup-game-limits-ec0564dd.js";
import "./_commonjsHelpers-08c562be.js";
import "./http-4df94233.js";
import "./_arrayMap-2bcec0e7.js";
import "./baseService-2efdc30b.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./_MapCache-91cc8331.js";
import "./_baseIsEqual-837613bc.js";
import "./groupBy-8da7f089.js";
import "./_baseIteratee-bc603d62.js";
import "./toString-1f7cb583.js";
import "./memoize-91f976fa.js";
import "./helpers-44d70238.js";
import "./vip-9182fb4b.js";
import "./index-8a7d18d7.js";
import "./enums-fd45c1cf.js";
import "./index-e43a355a.js";
import "./tools-47f326df.js";
import "./api-utils-b2769cf2.js";
import "./const-3e281bed.js";
import "./sounds-a881e21e.js";
import "./toast-bonus-receive-1029f494.js";
import "./cancel-bonus-6aaccc88.js";
import "./noop-cb277961.js";
import "./index-85cb0a21.js";
import "./animate-number-af733b14.js";
import "./last-862de5a8.js";
import "./countdown-9ad59544.js";
import "./index-d5947389.js";
const oe = () => ne({
    type: "MONTHLY"
});
var ce = i('<div class="grid grid-cols-2 gap-x-3 gap-y-3">'),
    ue = i('<div class="flex items-center gap-x-2 rounded-lg bg-layer3 px-3 py-[0.35rem]"><img class="h-8 w-8"><span class="text-sm font-semibold text-primary">');
const de = () => {
    const e = () => [{
        img: g.benefitGift,
        title: l("Level Up Bonus")
    }, {
        img: g.benefitWeekly,
        title: l("Weekly Bonus")
    }, {
        img: g.benefitMonthly,
        title: l("Monthly Bonus")
    }, {
        img: g.benefitQuest,
        title: l("Quest Hub")
    }, _.isEnabled(w.LUCKY_SPIN) && {
        img: g.benefitSpin,
        title: l("Free Lucky Spins")
    }, {
        img: g.benefitRoll,
        title: l("Daily Bonus")
    }].filter(Boolean);
    return (() => {
        var n = ce();
        return r(n, t($, {
            get each() {
                return e()
            },
            children: a => (() => {
                var s = ue(),
                    c = s.firstChild,
                    o = c.nextSibling;
                return r(o, () => a.title), p(() => f(c, "src", a.img)), s
            })()
        })), n
    })()
};
var ge = i('<div class="flex space-x-2">'),
    me = i("<div>");
const pe = e => (() => {
    var n = ge();
    return r(n, t(ee, {
        get each() {
            return Array(e.totals).fill("")
        },
        children: (a, s) => (() => {
            var c = me();
            return c.$$click = () => {
                var o;
                return (o = e.onClick) == null ? void 0 : o.call(e, s)
            }, p(o => M(c, {
                "h-2 w-2 rounded-full transition-all ease-out": !0,
                "bg-input": e.activeIndex !== s,
                "bg-brand": e.activeIndex === s
            }, o)), c
        })()
    })), n
})();
G(["click"]);
var fe = i('<div class="text-center text-sm font-semibold text-secondary underline">');
const R = e => {
    const [n, a] = W(e, ["children"]);
    return (() => {
        var s = fe();
        return v(s, a, !1, !0), r(s, () => n.children), s
    })()
};
var be = i('<img alt="Bonus Image">'),
    xe = i('<h2 class="self-stretch text-center text-3xl font-extrabold capitalize text-primary">'),
    he = i('<p class="self-stretch text-center text-base font-semibold text-secondary">'),
    ve = i('<div class="flex flex-grow items-center justify-center">'),
    ye = i('<div class="flex min-w-[26rem] flex-col items-center gap-y-4"><div class="flex flex-grow flex-col justify-between px-4"><div class="flex flex-col gap-y-3">');
const $e = e => {
    const n = () => e.banner ? typeof e.banner == "function" ? e.banner() : (() => {
            var o = be();
            return o.style.setProperty("height", "19.125rem"), p(() => f(o, "src", e.banner)), o
        })() : null,
        a = () => e.title ? typeof e.title == "function" ? e.title() : (() => {
            var o = xe();
            return r(o, () => e.title), o
        })() : null,
        s = () => e.description ? typeof e.description == "function" ? e.description() : (() => {
            var o = he();
            return r(o, () => e.description), o
        })() : null,
        c = () => e.extras ? (() => {
            var o = ve();
            return r(o, t($, {
                get each() {
                    return e.extras
                },
                children: u => u()
            })), o
        })() : null;
    return (() => {
        var o = ye(),
            u = o.firstChild,
            m = u.firstChild;
        return r(o, n, u), r(m, a, null), r(m, s, null), r(u, c, null), o
    })()
};
var _e = i('<span class="font-semibold text-secondary">'),
    we = i('<span class="font-semibold text-primary">'),
    ke = i('<div class="flex flex-col gap-y-4"><p class="text-sm font-semibold text-secondary"></p><div class="flex flex-col gap-y-4"><span class="text-sm font-semibold text-secondary">:'),
    Ce = i("<span class=font-extrabold>"),
    B = i("<tr>");
const O = () => A.push(() => t(Se, {})),
    Se = () => {
        const [e] = se.vipRankInfoResource(), n = () => [{
            title: l("Level"),
            dataIndex: "vipRankName",
            render(a) {
                return (() => {
                    var s = _e();
                    return r(s, a), s
                })()
            }
        }, {
            title: l("Total Bonus"),
            dataIndex: "levels",
            render(a) {
                const s = () => a.reduce((c, o) => c + o.bonusAmount, 0);
                return (() => {
                    var c = we();
                    return r(c, t(S, {
                        currencyName: "USDFIAT",
                        get toCurrency() {
                            return q.setting.localeCurrencyName
                        },
                        get children() {
                            return t(S.Content, {
                                get children() {
                                    return [t(S.Amount, {
                                        get amount() {
                                            return s()
                                        }
                                    }), t(S.Icon, {
                                        size: 20
                                    })]
                                }
                            })
                        }
                    })), c
                })()
            }
        }];
        return t(K, {
            get title() {
                return (() => {
                    var a = Ce();
                    return r(a, () => l("Levelup Bonus Detail")), a
                })()
            },
            get children() {
                var a = ke(),
                    s = a.firstChild,
                    c = s.nextSibling,
                    o = c.firstChild,
                    u = o.firstChild;
                return r(s, () => l("Every wager you place boosts your VIP level. Each level up means bigger instant Level up bonuses and more Lucky Spin chances. Plus, you'll keep unlocking various VIP perks!")), r(o, () => l("Levelup Bonus"), u), r(c, t(te, {
                    get fallback() {
                        return t(le, {
                            class: "overflow-hidden rounded-xl",
                            width: 5,
                            height: 1,
                            components: {
                                header: {
                                    row: m => (() => {
                                        var d = B();
                                        return v(d, y(m, {
                                            get class() {
                                                return x("bg-layer4")
                                            }
                                        }), !1, !1), d
                                    })()
                                },
                                body: {
                                    row: m => (() => {
                                        var d = B();
                                        return v(d, y(m, {
                                            get class() {
                                                return x("border-t border-solid border-white_alpha5 bg-layer3")
                                            }
                                        }), !1, !1), d
                                    })()
                                }
                            },
                            rows: 8,
                            get columns() {
                                return n()
                            }
                        })
                    },
                    get children() {
                        return t(ae, {
                            class: "overflow-hidden rounded-xl",
                            get columns() {
                                return n()
                            },
                            get data() {
                                return e()
                            },
                            components: {
                                header: {
                                    row: m => (() => {
                                        var d = B();
                                        return v(d, y(m, {
                                            get class() {
                                                return x("bg-layer4")
                                            }
                                        }), !1, !1), d
                                    })()
                                },
                                body: {
                                    row: m => (() => {
                                        var d = B();
                                        return v(d, y(m, {
                                            get class() {
                                                return x("border-t border-solid border-white_alpha5 bg-layer3")
                                            }
                                        }), !1, !1), d
                                    })()
                                }
                            }
                        })
                    }
                }), null), a
            }
        })
    };
var Re = i('<span class="font-extrabold text-brand">20%'),
    Be = i('<div class="flex flex-col gap-y-4 text-sm font-semibold text-secondary"><p></p><p>'),
    Te = i("<span class=font-extrabold>");
const V = () => A.push(() => t(Ie, {})),
    Ie = () => t(K, {
        get title() {
            return (() => {
                var e = Te();
                return r(e, () => l("Rakeback Details")), e
            })()
        },
        get children() {
            var e = Be(),
                n = e.firstChild,
                a = n.nextSibling;
            return r(n, t(b, {
                i18nKey: "bonus.rakeback.detail.desc",
                get children() {
                    return ["By wagering, you will continuously earn Rakeback based on a percentage of your bet amount. We offer an impressive Rakeback rate of up to ", Re(), ". To keep earning Rakeback, simply participate in our ongoing monthly"]
                }
            })), r(a, () => l("Rakeback amount = wager amount * 1% * 20%")), e
        }
    });
var Le = i('<div class="-mx-4 flex h-full flex-col justify-between gap-3 pb-14"><div class="flex flex-col items-center justify-end gap-10 px-4 pt-3"></div><div class="flex flex-grow items-end justify-end px-4">'),
    De = i('<span class="font-extrabold text-brand">360%'),
    I = i('<p class="text-center text-base font-semibold text-secondary">'),
    Pe = i('<span class="font-extrabold text-brand">cash'),
    Ee = i('<span class="font-extrabold text-brand">free lucky spins'),
    ze = i('<span class="font-extrabold text-brand">7 consecutive days');
const je = () => {
        let e;
        const n = H(Ae),
            [a, s] = re(0),
            c = Q();
        return t(J, {
            get title() {
                return l("Bonus")
            },
            get children() {
                var o = Le(),
                    u = o.firstChild,
                    m = u.nextSibling;
                return r(o, t(X, {
                    class: "w-full flex-shrink-0",
                    options: {
                        slides: {
                            spacing: 6
                        },
                        slideChanged(d) {
                            s(d.track.details.abs)
                        }
                    },
                    ref(d) {
                        var h = e;
                        typeof h == "function" ? h(d) : e = d
                    },
                    get children() {
                        return t($, {
                            get each() {
                                return n()
                            },
                            children: d => t($e, d)
                        })
                    }
                }), u), r(u, t(pe, {
                    get totals() {
                        return n().length
                    },
                    get activeIndex() {
                        return a()
                    },
                    onClick: d => {
                        e.moveToIdx(d)
                    }
                })), r(m, t(k, {
                    type: "brand",
                    onClick: () => c("/login/regist"),
                    size: "l",
                    class: "w-full text-lg font-extrabold text-primary_brand",
                    get children() {
                        return l("Get Started")
                    }
                })), o
            }
        })
    },
    Ae = () => [{
        title: l("Deposit bonus"),
        description: () => (() => {
            var e = I();
            return r(e, t(b, {
                i18nKey: "bonus.welecome.newtext.desc1",
                get children() {
                    return ["Earn up to ", De(), " bonus on deposits, with rewards unlocking as you wager. Deposit now to maximize your bonus!"]
                }
            })), e
        })(),
        banner: g.welcomeBannerStep1,
        extras: [() => t(R, {
            onClick: oe,
            get children() {
                return l("Deposit bonus details")
            }
        })]
    }, {
        title: l("level up bonus"),
        description: () => (() => {
            var e = I();
            return r(e, t(b, {
                i18nKey: "bonus.welecome.newtext.desc2",
                get children() {
                    return ["Level up to earn substantial", Pe(), " rewards and", Ee(), "! The higher your level, the bigger the rewards."]
                }
            })), e
        })(),
        banner: g.welcomeBannerStep2,
        extras: [() => t(R, {
            onClick: O,
            get children() {
                return l("Level up bonus details")
            }
        })]
    }, _.isEnabled(w.RAKEBACK) && {
        title: l("Rakeback"),
        description: l("Unlock your potential with our Rakeback program! Earn bonuses with every wager and watch your balance grow continuously."),
        banner: g.welcomeBannerStep3,
        extras: [() => t(R, {
            onClick: V,
            get children() {
                return l("Rackback details")
            }
        })]
    }, _.isEnabled(w.RECHARGE) && {
        title: l("Recharge"),
        description: () => (() => {
            var e = I();
            return r(e, t(b, {
                i18nKey: "bonus.welecome.newtext.desc3",
                get children() {
                    return ["Activate Recharge once and enjoy substantial rewards for", ze(), "! Customize your claiming frequency to suit your own pace."]
                }
            })), e
        })(),
        banner: g.welcomeBannerStep4,
        extras: [() => t(R, {
            onClick: () => {
                N()
            },
            get children() {
                return l("Recharge details")
            }
        })]
    }, {
        title: l("Endless Benefits"),
        description: () => t(de, {}),
        banner: g.welcomeBannerStep5
    }].filter(Boolean);
var Ke = i('<div class="relative flex h-[11.25rem] flex-col items-center justify-between overflow-hidden rounded-xl bg-layer4 px-10 py-9"><div class="absolute left-1/2 top-0 h-full w-[55%] -translate-x-1/2 -translate-y-2/3 bg-[#59FFBC] opacity-[0.34] blur-[100px]"></div><img class="absolute left-1/2 top-0 w-[25.625rem] -translate-x-1/2"><h1 class="text-xl font-extrabold text-primary">');
const Fe = () => (() => {
    var e = Ke(),
        n = e.firstChild,
        a = n.nextSibling,
        s = a.nextSibling;
    return r(s, () => l("We are proud to provide you with the most luxurious gaming experience")), r(e, t(E, {
        href: "/login/regist",
        get children() {
            return t(k, {
                class: "w-[13.375rem] capitalize",
                type: "brand",
                get children() {
                    return l("Sign up")
                }
            })
        }
    }), null), p(() => f(a, "src", g.footerStars)), e
})();
var Ue = i("<div>");
const We = e => (() => {
    var n = Ue();
    return r(n, t(k, y(e, {
        class: "h-auto w-auto items-center p-0 text-sm font-semibold text-brand",
        get children() {
            return [Y(() => e.children), t(ie, {
                name: "singleSmallArrow",
                class: "rotate-180 text-brand",
                size: 14
            })]
        }
    }))), n
})();
var He = i("<div><h1></h1><div><p>");
const z = e => {
    const n = H(() => {
        var s;
        const a = (s = e.align) != null ? s : "left";
        return {
            container: a === "left" ? "items-start" : "items-end",
            title: a === "left" ? "" : "text-right",
            desc: a === "left" ? "" : "text-right"
        }
    });
    return (() => {
        var a = He(),
            s = a.firstChild,
            c = s.nextSibling,
            o = c.firstChild;
        return r(s, () => e.title), r(o, () => e.desc), r(c, t(We, {
            get onClick() {
                return e.onLink
            },
            get children() {
                return e.linkText
            }
        }), null), r(a, t(E, {
            href: "/login/regist",
            get children() {
                return t(k, {
                    get onClick() {
                        return e.onButton
                    },
                    class: "font-extrabold",
                    type: "brand",
                    get children() {
                        return e.buttonText
                    }
                })
            }
        }), null), p(u => {
            var m = x("max-lg:-w-[30rem] flex flex-col gap-y-7", n().container),
                d = x("max-w-[25rem] text-3xl font-extrabold text-primary", n().title),
                h = x("flex flex-col gap-y-3", n().container),
                j = x("max-w-[26rem] font-semibold text-secondary", n().desc);
            return m !== u.e && C(a, u.e = m), d !== u.t && C(s, u.t = d), h !== u.a && C(c, u.a = h), j !== u.o && C(o, u.o = j), u
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0
        }), a
    })()
};
var Ne = i('<div class="flex items-center justify-around px-10"><div class="w-10 flex-shrink-0"></div><div class=w-[30.3rem]><img class=w-full>'),
    Oe = i("<span class=text-brand>cash"),
    Ve = i("<span class=text-brand>free lucky spins");
const Ge = () => (() => {
    var e = Ne(),
        n = e.firstChild,
        a = n.nextSibling,
        s = a.firstChild;
    return r(e, t(z, {
        align: "right",
        get title() {
            return l("Reach new heights with our Level Up bonus")
        },
        get desc() {
            return t(b, {
                i18nKey: "Level up to earn substantial cash rewards and free lucky spins! The higher your level, the bigger the rewards.",
                get children() {
                    return ["Level up to earn substantial ", Oe(), " ", "rewards and ", Ve(), "! The higher your level, the bigger the rewards."]
                }
            })
        },
        onLink: () => {
            O()
        },
        get linkText() {
            return l("Level up bonus details")
        },
        get buttonText() {
            return l("Unlock Level-up Bonus")
        }
    }), n), p(() => f(s, "src", F.darken ? g.welcomeLevelup : g.welcomeLevelup_light)), e
})();
var Me = i("<span class=text-brand>more"),
    Ye = i('<div class="flex flex-col items-center justify-center gap-y-6"><h1 class="text-2xl font-extrabold capitalize text-primary">'),
    qe = i('<div class="flex items-center gap-x-7">'),
    Qe = i('<div class="flex flex-col items-center"><img class=w-[15.625rem]><div class="flex flex-col justify-center gap-y-2 px-4 py-4 text-center"><h2 class="text-xl font-extrabold text-primary"></h2><p class="text-sm font-semibold text-secondary">'),
    Je = i('<div class="h-[12.5rem] w-[1px] bg-white_alpha5">');
const Xe = () => (() => {
        var e = Ye(),
            n = e.firstChild;
        return r(n, t(b, {
            i18nKey: "Get a lot of free perks",
            get children() {
                return ["wait. we have ", Me(), " benefits For You!"]
            }
        })), r(e, t(Ze, {}), null), e
    })(),
    Ze = () => {
        const e = () => [{
            title: l("Catch coco for Rewards"),
            desc: l("Catch the elusive COCO spider every 6 hours on our page and earn exclusive BCD rewards based on your VIP level"),
            banner: g.benefitCoco
        }, {
            title: l("Win with __ENV_HOST__ Lottery"),
            desc: l("Experience provably fair gaming amd let your lucky numbers do the magic. Don't wait, jump in and see your fortunes turn!"),
            banner: g.benefitLottery
        }, {
            title: l("Coin-Drop & Rain "),
            desc: l("Engage, chat, and seize spontaneous rewards with Constant Chat Rains and Coin-Drops—be active, quick, and earn free coins"),
            banner: g.benefitCoin_drop
        }];
        return (() => {
            var n = qe();
            return r(n, t($, {
                get each() {
                    return e()
                },
                children: (a, s) => [(() => {
                    var c = Qe(),
                        o = c.firstChild,
                        u = o.nextSibling,
                        m = u.firstChild,
                        d = m.nextSibling;
                    return r(m, () => a.title), r(d, () => a.desc), p(() => f(o, "src", a.banner)), c
                })(), t(T, {
                    get when() {
                        return s() < e().length - 1
                    },
                    get children() {
                        return Je()
                    }
                })]
            })), n
        })()
    };
var et = i("<span class=text-brand>free"),
    tt = i('<div class="flex flex-col items-center justify-center gap-y-6"><h1 class="text-2xl font-extrabold capitalize text-primary"></h1><div class="flex w-full justify-between gap-x-3">'),
    L = i("<img class=w-[11.375rem]>"),
    rt = i('<div><div class="absolute left-0 top-0 rounded-br-xl rounded-tl-xl bg-white_alpha10 px-5 py-2 text-base font-semibold text-primary"></div><div class="flex w-full items-end gap-x-3 pl-6"><h2 class="max-w-[8.125rem] flex-shrink-0 flex-grow text-2xl font-extrabold text-primary"></h2><div class="flex flex-shrink flex-grow justify-end"><div class=max-w-[11.375rem]></div></div></div><p class="pl-6 font-semibold text-secondary">');
const nt = () => (() => {
        var e = tt(),
            n = e.firstChild,
            a = n.nextSibling;
        return r(n, t(b, {
            i18nKey: "Get a lot of free perks",
            get children() {
                return ["Get a lot of ", et(), " perks"]
            }
        })), r(a, t(D, {
            get banner() {
                return (() => {
                    var s = L();
                    return p(() => f(s, "src", g.perkQuest)), s
                })()
            },
            get tag() {
                return l("Every Day & Week")
            },
            get title() {
                return l("Quest Hub")
            },
            style: {
                "background-image": "radial-gradient(50% 50% at 50% 50%, rgba(118, 54, 255, 0.60)0%, rgba(118, 54, 255, 0.00)100%)",
                "background-size": "100% 100%",
                "background-position": "8rem 0"
            },
            get desc() {
                return l("Conquer daily and weekly quests while amassing and snowballing your earnings!")
            }
        }), null), r(a, t(P, {
            get when() {
                return _.isEnabled(w.LUCKY_SPIN)
            },
            get children() {
                return t(D, {
                    get banner() {
                        return (() => {
                            var s = L();
                            return p(() => f(s, "src", g.perkSpin)), s
                        })()
                    },
                    get tag() {
                        return l("Every Day")
                    },
                    get title() {
                        return l("Free Lucky Spins ")
                    },
                    style: {
                        "background-image": "radial-gradient(50% 50% at 50% 50%, rgba(203, 54, 255, 0.40)0%, rgba(203, 54, 255, 0.00)100%)",
                        "background-size": "100% 100%",
                        "background-position": "8rem 0"
                    },
                    get desc() {
                        return l("Spin and win your daily opportunity to bag up to 5 BTC - the ultimate thrill in every roll!")
                    }
                })
            }
        }), null), r(a, t(D, {
            get banner() {
                return (() => {
                    var s = L();
                    return p(() => f(s, "src", g.perkDaily)), s
                })()
            },
            style: {
                "background-image": "radial-gradient(50% 50% at 50% 50%, rgba(208, 252, 62, 0.20)0%, rgba(208, 252, 62, 0.00)100%)",
                "background-size": "100% 100%",
                "background-position": "8rem 0"
            },
            get tag() {
                return l("Every Day")
            },
            get title() {
                return l("Daily Bonus")
            },
            get desc() {
                return l("The more you bet, the more you get. Claim your daily bonus every day!")
            }
        }), null), e
    })(),
    D = e => {
        const [n, a] = W(e, ["title", "desc", "tag", "banner"]);
        return (() => {
            var s = rt(),
                c = s.firstChild,
                o = c.nextSibling,
                u = o.firstChild,
                m = u.nextSibling,
                d = m.firstChild,
                h = o.nextSibling;
            return v(s, y(a, {
                class: "relative z-0 flex h-64 w-[23.75rem] flex-col justify-end gap-y-4 overflow-hidden rounded-xl bg-layer4 bg-no-repeat pb-6"
            }), !1, !0), r(c, () => e.tag), r(u, () => e.title), r(d, () => e.banner), r(h, () => e.desc), s
        })()
    };
var lt = i('<div class="flex items-center justify-around px-10"><div class=w-[30.3rem]><img class=w-full>');
const at = () => (() => {
    var e = lt(),
        n = e.firstChild,
        a = n.firstChild;
    return r(e, t(z, {
        get title() {
            return l("Maximize the Potential of BCD Rakeback")
        },
        get desc() {
            return l("Unlock your potential with our Rakeback program! Earn bonuses with every wager and watch your balance grow continuously.")
        },
        onLink: () => {
            V()
        },
        get linkText() {
            return l("Rackback Details")
        },
        get buttonText() {
            return l("Unlock Rackback")
        }
    }), null), p(() => f(a, "src", g.welcomeRakeback)), e
})();
var st = i('<div class="relative z-0 flex h-[29.25rem] flex-col items-center justify-between"><img class="absolute -top-20 left-10 -z-10 w-[37.5rem]"><div class="flex h-full w-full items-center justify-end">'),
    it = i("<span class=text-brand>Recharge"),
    ot = i('<div class="flex items-center gap-x-7 rounded-xl border border-solid border-white_alpha5 px-6 py-3 backdrop-blur-sm">'),
    ct = i('<div class="flex items-center"><img class=w-[7.75rem]><div class="flex flex-col gap-y-2"><h2 class="font-semibold text-primary"></h2><p class="text-xs font-semibold text-secondary">'),
    ut = i('<div class="h-[3.875rem] w-[1px] bg-white_alpha5">');
const dt = () => (() => {
        var e = st(),
            n = e.firstChild,
            a = n.nextSibling;
        return r(a, t(z, {
            align: "left",
            get title() {
                return t(b, {
                    i18nKey: "Introducing Our Very Own Recharge Cashback",
                    get children() {
                        return ["Introducing Our Very Own ", it(), " ", "Cashback"]
                    }
                })
            },
            get desc() {
                return l("Immerse yourself in the exhilarating world of Recharge, where the power is in your hands. Customize your reward claiming by ")
            },
            onLink: () => {
                N()
            },
            get linkText() {
                return l("Recharge Details")
            },
            get buttonText() {
                return l("Join __ENV_HOST__ Now")
            }
        })), r(e, t(gt, {}), null), p(() => f(n, "src", g.welcomeRecharge)), e
    })(),
    gt = () => {
        const e = () => [{
            title: l("Recharge Activation"),
            desc: l("Recharge activate as you strive to reach VIP level 22 and beyond."),
            banner: g.rechargeBenefitActivate
        }, {
            title: l("Recharge at Your Pace"),
            desc: l("Harness bonuses with daily, hourly, or flash charge (10 min) intervals "),
            banner: g.rechargeBenefitReward
        }, {
            title: l("Recharge Reward Tiers"),
            desc: l("Snowball your rewards as you wager and climb from Tier 1 to Tier 4"),
            banner: g.rechargeBenefitTiers
        }];
        return (() => {
            var n = ot();
            return r(n, t($, {
                get each() {
                    return e()
                },
                children: (a, s) => [(() => {
                    var c = ct(),
                        o = c.firstChild,
                        u = o.nextSibling,
                        m = u.firstChild,
                        d = m.nextSibling;
                    return r(m, () => a.title), r(d, () => a.desc), p(() => f(o, "src", a.banner)), c
                })(), t(T, {
                    get when() {
                        return s() < e().length - 1
                    },
                    get children() {
                        return ut()
                    }
                })]
            })), p(a => (a = F.darken ? "linear-gradient(180deg, rgba(36, 43, 40, 0.32)0%, rgba(50, 55, 56, 0.32)100%)" : "linear-gradient(180deg, rgba(235, 235, 235, 0.32) 0%, rgba(201, 201, 201, 0.32) 100%)") != null ? n.style.setProperty("background-image", a) : n.style.removeProperty("background-image")), n
        })()
    };
var mt = i('<div class="bonus-welcome-root flex flex-col gap-y-12 pb-4">'),
    pt = i("<span class=text-brand>endless"),
    ft = i('<header class="relative z-0 flex flex-col overflow-hidden rounded-xl bg-layer3 p-12"><div class="absolute -top-40 left-1/2 -z-10 h-[17.875rem] w-full -translate-x-1/2 rounded-full bg-[#9432F5] opacity-[0.34] blur-[100px]"></div><img class="absolute bottom-0 right-0 -z-10 w-[44.125rem] translate-y-24"><div class=py-5><h1 class="text-4xl font-extrabold uppercase text-primary"></h1><p class="mt-3 max-w-96 text-base font-semibold text-secondary"></p><div class=mt-5>'),
    bt = i('<div class="center gap-x-6">'),
    xt = i('<span class="flex items-center gap-x-3 text-base font-extrabold text-primary"><span class="flex size-8 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-primary_brand">'),
    ht = i('<span class="h-[1px] w-[3.125rem] bg-third">');
const vt = () => {
        const {
            isUsHost: e
        } = Z.getHostType(U.host);
        return (() => {
            var n = mt();
            return r(n, t(yt, {}), null), r(n, t($t, {}), null), r(n, t(Ge, {}), null), r(n, t(P, {
                when: !e,
                get children() {
                    return t(at, {})
                }
            }), null), r(n, t(nt, {}), null), r(n, t(P, {
                get when() {
                    return _.isEnabled(w.RECHARGE)
                },
                get children() {
                    return t(dt, {})
                }
            }), null), r(n, t(Xe, {}), null), r(n, t(Fe, {}), null), n
        })()
    },
    yt = () => (() => {
        var e = ft(),
            n = e.firstChild,
            a = n.nextSibling,
            s = a.nextSibling,
            c = s.firstChild,
            o = c.nextSibling,
            u = o.nextSibling;
        return r(c, t(b, {
            i18nKey: "Unlock endless benefits",
            get children() {
                return ["Unlock ", pt(), " benefits"]
            }
        })), r(o, () => l("Join now and embark on an exhilarating journey of luck and reward")), r(u, t(E, {
            href: "/login/regist",
            get children() {
                return t(k, {
                    type: "brand",
                    class: "min-w-64 text-base font-extrabold capitalize",
                    get children() {
                        return l("Sign up")
                    }
                })
            }
        })), p(() => f(a, "src", g.bonusWelcomeBanner)), e
    })(),
    $t = () => {
        const e = () => [{
            label: l("Sign up & make a deposit")
        }, {
            label: l("Play your fav games")
        }, {
            label: l("Increase your VIP levels")
        }];
        return (() => {
            var n = bt();
            return r(n, t($, {
                get each() {
                    return e()
                },
                children: (a, s) => [(() => {
                    var c = xt(),
                        o = c.firstChild;
                    return r(o, () => (s() + 1).toString().padStart(2, "0")), r(c, () => a.label, null), c
                })(), t(T, {
                    get when() {
                        return s() < e().length - 1
                    },
                    get children() {
                        return ht()
                    }
                })]
            })), n
        })()
    },
    mr = () => t(T, {
        get when() {
            return U.mobile
        },
        get fallback() {
            return t(vt, {})
        },
        get children() {
            return t(je, {})
        }
    });
export {
    mr as BonusWelcome, mr as
    default
};