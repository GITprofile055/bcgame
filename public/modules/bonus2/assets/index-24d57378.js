var _e = Object.defineProperty,
    ye = Object.defineProperties;
var $e = Object.getOwnPropertyDescriptors;
var Y = Object.getOwnPropertySymbols;
var Se = Object.prototype.hasOwnProperty,
    we = Object.prototype.propertyIsEnumerable;
var J = (r, s, l) => s in r ? _e(r, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: l
    }) : r[s] = l,
    K = (r, s) => {
        for (var l in s || (s = {})) Se.call(s, l) && J(r, l, s[l]);
        if (Y)
            for (var l of Y(s)) we.call(s, l) && J(r, l, s[l]);
        return r
    },
    Q = (r, s) => ye(r, $e(s));
import {
    b as ue,
    d as O,
    i as e,
    c as t,
    e as C,
    a as T,
    t as v,
    s as k,
    m as de
} from "./web-c89f4fb8.js";
import {
    e as $,
    c as V,
    l as ve,
    V as n,
    h as Ce,
    v as Le,
    O as Ie,
    B as E,
    I as X,
    E as Ve,
    s as pe,
    j as D,
    u as Be,
    A as W,
    r as ke,
    a2 as Pe,
    D as N,
    a as H,
    p as ee,
    P as De,
    T as me,
    f as Te
} from "./manifest-f1f40164.js";
import {
    j as ze,
    c as w,
    S,
    F,
    h as Ae,
    b as Ee,
    d as Ne,
    f as He,
    M as te,
    E as G,
    e as ge,
    i as Me
} from "./solid-js-871c99e1.js";
import {
    E as re
} from "./error-fallback-1bb54a0c.js";
import {
    t as u
} from "./i18n-827ab26d.js";
import {
    I as P
} from "./index-d27f3208.js";
import {
    V as he,
    v as j,
    a as le
} from "./vip-9182fb4b.js";
import {
    v as L,
    b as B,
    a as z
} from "./index-4447d8bd.js";
import {
    h as Fe
} from "./head-2e8917e5.js";
import {
    V as Ge
} from "./index-0a6ebaba.js";
import {
    v as Re
} from "./index-41fc8b58.js";
import {
    V as Oe,
    a as je
} from "./index-d024f97a.js";
import "./baseService-2efdc30b.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./_MapCache-91cc8331.js";
import "./http-4df94233.js";
import "./feature-gating-c05395d6.js";
import "./tools-47f326df.js";
import "./index-8a7d18d7.js";
import "./index-c5ebc757.js";
import "./api-utils-b2769cf2.js";
import "./const-3e281bed.js";
import "./sounds-a881e21e.js";
import "./_commonjsHelpers-08c562be.js";
import "./toast-bonus-receive-1029f494.js";
import "./cancel-bonus-6aaccc88.js";
import "./noop-cb277961.js";
import "./index-85cb0a21.js";
import "./currency-format-5cd6ca42.js";
import "./animate-number-af733b14.js";
import "./last-862de5a8.js";
import "./countdown-9ad59544.js";
import "./helpers-44d70238.js";
import "./utils-38f210e8.js";
import "./enums-fd45c1cf.js";
import "./index-d5947389.js";
var U = v("<div>");
const fe = r => {
        const [s, l] = ze(r, ["data", "columnConfig", "bordered"]), p = w(() => {
            var f;
            return (f = s.bordered) != null ? f : !0
        }), m = w(() => {
            var f, g;
            return typeof((f = s.columnConfig) == null ? void 0 : f.width) == "number" ? s.columnConfig.width * $.remScale + "px" : (g = s.columnConfig) == null ? void 0 : g.width
        });
        return (() => {
            var f = U();
            return ue(f, O(l, {
                get class() {
                    return V(l.class, "flex-shrink-0", p() && "divide-y divide-black_alpha5")
                },
                get style() {
                    return Q(K({}, l.style), {
                        width: m() ? m() : "100px"
                    })
                }
            }), !1, !0), e(f, t(S, {
                get when() {
                    var g;
                    return (g = s.columnConfig) == null ? void 0 : g.title
                },
                get children() {
                    var g = U();
                    return e(g, () => {
                        var h;
                        return (h = s.columnConfig) == null ? void 0 : h.title
                    }), C(() => T(g, V(p() && ""))), g
                }
            }), null), e(f, t(F, {
                get each() {
                    return s.data
                },
                children: (g, h) => (() => {
                    var d = U();
                    return e(d, () => {
                        var a;
                        return (a = s.columnConfig) == null ? void 0 : a.render(g, h())
                    }), C(() => T(d, V("flex h-15 items-center px-4", p() && "border-r border-solid border-black_alpha5"))), d
                })()
            }), null), f
        })()
    },
    {
        isUsHost: M
    } = ve.getHostType($.host),
    R = [!M && 2, 3, !M && 4, !M && 5, 6, 1, 7, 8, 9, 14, !M && 10, 11, 12, 13].filter(Boolean),
    ne = [],
    A = r => (ne.push(...r), ne.slice()),
    se = [
        [() => u("Bronze"), [n.VipLevelStatus.Bronze], A([4, 2, 3])],
        [() => u("Silver"), [n.VipLevelStatus.Silver], A([5, 6])],
        [() => u("Gold"), [n.VipLevelStatus.Gold], A([1, 8, 9, 10, 7, 14])],
        [() => u("Platinum I-II"), [n.VipLevelStatus.Platinum_I, n.VipLevelStatus.Platinum_II], A([11])],
        [() => u("Diamond I-III"), [n.VipLevelStatus.Diamond_I, n.VipLevelStatus.Diamond_III, n.VipLevelStatus.Diamond_II], A([12, 13])]
    ],
    Ue = {
        1: L.iconBonus,
        2: L.iconRaining,
        3: L.iconDaily,
        4: L.iconCoinDrop,
        5: L.iconTips,
        6: L.iconSpin,
        7: L.iconRecharge,
        8: L.iconCashbackWeekly,
        9: L.iconCashbackMonthly,
        10: L.iconSport,
        11: L.iconWithdraw,
        12: L.iconSvip,
        13: L.iconGiveaway,
        14: L.iconTaco
    },
    We = {
        1: () => u("Level-up Bonus"),
        2: () => u("Raining"),
        3: () => u("Daily Bonus"),
        4: () => u("Coin Drops"),
        5: () => u("Tips"),
        6: () => u("VIP Spin"),
        7: () => u("Recharge"),
        8: () => u("Weekly Cashback"),
        9: () => u("Monthly Cashback"),
        10: () => u("Sports Weekly Cashback"),
        11: () => u("No-fee Withdrawal"),
        12: () => u("Exclusive SVIP Perks"),
        13: () => u("Luxury Giveaway"),
        14: () => u("Taco Tuesday")
    };
var Ze = v('<div class="flex overflow-hidden rounded-xl"><div class="flex flex-grow overflow-hidden"><div class=relative>'),
    qe = v('<div class="flex h-12 items-center bg-layer3 px-4 text-sm font-semibold text-tertiary">'),
    Ye = v("<div class=flex-shrink-0>"),
    Je = v('<div class="absolute left-0 top-0 z-10 flex h-full flex-col divide-y divide-black_alpha5"><div class="flex h-12 items-center bg-layer3 pl-2">'),
    Ke = v('<div class="absolute right-0 top-0 z-10 flex h-full flex-col"><div class="flex h-12 items-center bg-layer3 pr-2">'),
    ie = v('<div class="h-15 w-full bg-layer4">'),
    Qe = v('<div class="w-full flex-shrink-0 snap-start">'),
    Xe = v('<div class="inline-flex items-center gap-x-2"><span class="flex min-h-7 w-14 flex-shrink-0 items-center justify-center sm:h-10"><img class=w-full></span><span class="text-sm font-semibold text-primary">'),
    et = v("<div><img class=size-6>"),
    tt = v('<svg xmlns=http://www.w3.org/2000/svg width=20 height=19 viewBox="0 0 20 19"fill=none><path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z">'),
    rt = v('<div class="flex w-full justify-center text-secondary">');
const lt = r => {
        const s = Ae(() => r.selectedVip, (c, b) => c[1].includes(b)),
            l = () => r.selectedVip && $.mobile,
            p = w(() => l() ? se.sort((c, b) => {
                const _ = s(c) ? 9999 : 0;
                return (s(b) ? 9999 : 0) - _
            }) : se),
            m = w(() => l() ? p()[0] : null),
            f = w(() => l() ? p().slice(1) : p()),
            [g, h] = Ee(null),
            d = Ce(),
            a = Le();
        Ne(() => {
            d() && queueMicrotask(() => {
                var c, b;
                (c = a()) == null || c.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: "instant"
                }), (b = g()) == null || b.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: "instant"
                })
            })
        });
        const o = () => $.mobile ? [40, 60] : [0, 100];
        return (() => {
            var c = Ze(),
                b = c.firstChild,
                _ = b.firstChild;
            return e(c, t(fe, {
                data: R,
                class: "flex-shrink-0 bg-layer4",
                get columnConfig() {
                    return {
                        width: $.mobile ? 158 : 220,
                        title: (() => {
                            var y = qe();
                            return e(y, () => u("Bonus Type")), y
                        })(),
                        render(y) {
                            return t(nt, {
                                benefit: y
                            })
                        }
                    }
                }
            }), b), e(b, t(S, {
                get when() {
                    return m()
                },
                children: y => (() => {
                    var i = Ye();
                    return e(i, t(ae, {
                        get vipBenefit() {
                            return y()
                        },
                        isActive: !0
                    })), C(x => (x = o()[0] + "%") != null ? i.style.setProperty("width", x) : i.style.removeProperty("width")), i
                })()
            }), _), e(_, t(S, {
                get when() {
                    return $.mobile
                },
                get children() {
                    return t(Ie, {
                        class: "",
                        smoothListSelector: () => g(),
                        children: y => [(() => {
                            var i = Je(),
                                x = i.firstChild;
                            return e(x, t(E, O(() => y.leftButtonProps, {
                                type: "second",
                                class: "size-6 bg-button_bright !p-0",
                                get children() {
                                    return t(X, {
                                        name: "Arrow",
                                        class: "size-4"
                                    })
                                }
                            }))), e(i, t(F, {
                                each: R,
                                children: I => ie()
                            }), null), i
                        })(), (() => {
                            var i = Ke(),
                                x = i.firstChild;
                            return e(x, t(E, O(() => y.rightButtonProps, {
                                type: "second",
                                class: "size-6 bg-button_bright !p-0",
                                get children() {
                                    return t(X, {
                                        name: "Arrow",
                                        class: "size-4 rotate-180"
                                    })
                                }
                            }))), e(i, t(F, {
                                each: R,
                                children: I => ie()
                            }), null), i
                        })()]
                    })
                }
            }), null), e(_, t(Ve, {
                pan: "x",
                ref: h,
                class: "hide-scroll relative flex snap-x snap-mandatory",
                get children() {
                    return t(F, {
                        get each() {
                            return f()
                        },
                        children: y => (() => {
                            var i = Qe();
                            return e(i, t(ae, {
                                vipBenefit: y,
                                get isActive() {
                                    return s(y)
                                }
                            })), C(x => (x = $.mobile ? "100%" : 100 / f().length + "%") != null ? i.style.setProperty("width", x) : i.style.removeProperty("width")), i
                        })()
                    })
                }
            }), null), C(y => (y = o()[1] + "%") != null ? _.style.setProperty("width", y) : _.style.removeProperty("width")), c
        })()
    },
    nt = r => (() => {
        var s = Xe(),
            l = s.firstChild,
            p = l.firstChild,
            m = l.nextSibling;
        return e(m, () => We[r.benefit]()), C(() => k(p, "src", Ue[r.benefit])), s
    })(),
    ae = r => {
        const s = w(() => r.vipBenefit[0]()),
            l = w(() => r.vipBenefit[1]),
            p = w(() => r.vipBenefit[2]),
            m = () => Fe(l()),
            f = w(() => he[m()].toString()),
            g = ["#5D81AC", "#E2AE8D", "#EDEDED", "#F4CB79", "#AE88E2", "#AE88E2", "#DC8ABB", "#DC8ABB", "#DC8ABB"];
        return t(fe, {
            data: R,
            get class() {
                return V(r.isActive ? "vip-common-color bg-layer5" : "bg-layer4")
            },
            get style() {
                return {
                    "--vip-common-color-start": r.isActive ? f() : ""
                }
            },
            get columnConfig() {
                return {
                    width: "100%",
                    title: (() => {
                        var h = et(),
                            d = h.firstChild;
                        return e(h, s, null), C(a => {
                            var o = V("flex h-12 flex-col items-center justify-center border-r border-solid border-black_alpha5 text-xs font-extrabold text-primary", r.isActive ? "" : "bg-layer3"),
                                c = n.vipBadgeIcon({
                                    vipLevelStatus: m()
                                });
                            return o !== a.e && T(h, a.e = o), c !== a.t && k(d, "src", a.t = c), a
                        }, {
                            e: void 0,
                            t: void 0
                        }), h
                    })(),
                    render(h) {
                        return (() => {
                            var d = rt();
                            return e(d, t(S, {
                                get when() {
                                    return p().includes(h)
                                },
                                fallback: "--",
                                get children() {
                                    var a = tt(),
                                        o = a.firstChild;
                                    return C(() => k(o, "fill", g[m()])), a
                                }
                            })), d
                        })()
                    }
                }
            }
        })
    },
    st = {
        [n.VipLevelStatus.None]: "#5D81AC",
        [n.VipLevelStatus.Bronze]: "#B17044",
        [n.VipLevelStatus.Silver]: "#939393",
        [n.VipLevelStatus.Gold]: "rgba(211, 142, 0, 0.60)",
        [n.VipLevelStatus.Platinum_I]: "#8A3DEE",
        [n.VipLevelStatus.Platinum_II]: "#8A3DEE",
        [n.VipLevelStatus.Diamond_I]: "#EE479B",
        [n.VipLevelStatus.Diamond_II]: "#EE479B",
        [n.VipLevelStatus.Diamond_III]: "#EE479B"
    },
    it = {
        [n.VipLevelStatus.None]: "#526A85",
        [n.VipLevelStatus.Bronze]: "#6E412E",
        [n.VipLevelStatus.Silver]: "#727272",
        [n.VipLevelStatus.Gold]: "#B47326",
        [n.VipLevelStatus.Platinum_I]: "#7310F0",
        [n.VipLevelStatus.Platinum_II]: "#7310F0",
        [n.VipLevelStatus.Diamond_I]: "#F450A9",
        [n.VipLevelStatus.Diamond_II]: "#F450A9",
        [n.VipLevelStatus.Diamond_III]: "#F450A9"
    },
    at = {
        [n.VipLevelStatus.None]: B.bgNone,
        [n.VipLevelStatus.Bronze]: B.bgBronze,
        [n.VipLevelStatus.Silver]: B.bgSilver,
        [n.VipLevelStatus.Gold]: B.bgGold,
        [n.VipLevelStatus.Platinum_I]: B.bgPlatinum,
        [n.VipLevelStatus.Platinum_II]: B.bgPlatinum,
        [n.VipLevelStatus.Diamond_I]: B.bgDiamond,
        [n.VipLevelStatus.Diamond_II]: B.bgDiamond,
        [n.VipLevelStatus.Diamond_III]: B.bgDiamond
    },
    be = {
        getConfigByLevel(r) {
            const l = j.level(r).vipTypeNum;
            return {
                color: st[l],
                bannerBackgroundImg: at[l],
                hostTagColor: it[l]
            }
        }
    };
var ot = v('<div class="absolute right-0"><div class="center relative flex size-16"><svg viewBox="0 0 64 64"class=size-16><circle cx=32 cy=32 r=29 fill=none stroke-opacity=0.05 stroke-width=6></circle><circle cx=32 cy=32 r=29 fill=none stroke=rgb(var(--brand)) stroke-width=6 stroke-linecap=round transform="rotate(-90 32 32)"></circle></svg><span class="absolute text-brand">%');
const oe = function(s) {
    const l = w(() => {
        const p = Math.PI * 2 * 29;
        return `${p*s.percent/100} ${p+1}`
    });
    return (() => {
        var p = ot(),
            m = p.firstChild,
            f = m.firstChild,
            g = f.firstChild,
            h = g.nextSibling,
            d = f.nextSibling,
            a = d.firstChild;
        return f.style.setProperty("transform", "rotate(-0.05deg)"), e(d, () => Math.floor(s.percent * 100) / 100, a), C(o => {
            var c = pe.darken ? "white" : "black",
                b = l();
            return c !== o.e && k(g, "stroke", o.e = c), b !== o.t && k(h, "stroke-dasharray", o.t = b), o
        }, {
            e: void 0,
            t: void 0
        }), p
    })()
};
var ct = v('<svg viewBox="0 0 70 21"fill=currentColor><path fill-rule=evenodd clip-rule=evenodd d="M2.53239 0.5H9V20.5H2.53239C0.977797 20.5 0.0175716 18.8041 0.817401 17.471L4.69131 11.0145C4.88132 10.6978 4.88132 10.3022 4.69131 9.9855L0.8174 3.52899C0.0175705 2.19594 0.977797 0.5 2.53239 0.5ZM9.00001 0.5H70V20.5H9.00001V10.5V0.5Z">'),
    ut = v('<div class="vip-card relative z-0 min-h-40 rounded-xl px-4 pb-3 shadow-sm backdrop-blur-md sm:flex-grow sm:basis-80 sm:!bg-layer4"><div class="absolute right-0 top-3 flex h-5 w-[4.5rem] items-center justify-center font-extrabold text-alw_white"><span class=text-xxs>'),
    dt = v('<span class="font-semibold text-secondary">-<!> '),
    vt = v('<span class="inline-flex items-center gap-x-1"><span class="inline-block rounded-sm bg-[rgba(255,_152,_32,_0.30)] px-1 font-extrabold text-warning text-xxs">NFT</span><span class="text-sm font-semibold text-secondary">'),
    pt = v('<div class="flex items-center gap-x-3"><div><img class="h-full w-full rounded-full"><div class="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-white_alpha10 p-[0.2rem]"><div></div></div></div><div class="flex flex-col gap-y-1 leading-none"><span class="inline-flex items-center gap-x-1 text-base font-extrabold text-primary">'),
    mt = v('<div class="flex items-center"><span class="mx-1 text-xs text-warning">'),
    gt = v('<a class="flex items-center font-semibold text-secondary"target=_blank>TG: @'),
    ht = v('<div class="center mt-2 flex gap-x-2 text-base">'),
    ft = v("<span>:"),
    bt = v("<span class=text-primary>"),
    xt = v('<div class="relative flex flex-col justify-center text-xs font-semibold text-secondary"><span class=block></span><span class="my-1 block"><span class=text-primary></span>/</span><div class="flex items-center"><span>'),
    _t = v('<div class="relative flex flex-col justify-center text-xs font-semibold text-secondary"><div class="flex items-center text-xs font-semibold"></div><span class="my-1 block"><span class=text-primary></span>/</span><span class=block>'),
    yt = v('<div class="flex h-full flex-col justify-between gap-y-5 pb-2 pt-4 lg:gap-y-0">'),
    $t = v('<div class="relative pl-4"><span class="absolute left-0">1.</span><span>'),
    St = v('<div class="relative mt-2 pl-4"><span class="absolute left-0">2.</span><span>'),
    wt = v('<div class="relative mt-2 pl-4"><span class="absolute left-0">3.</span><span>'),
    Ct = v('<div class="relative mt-2 pl-4"><span class="absolute left-0">4.</span><span>');
const Lt = r => (() => {
        var s = ct();
        return ue(s, O(r, {
            xmlns: "http://www.w3.org/2000/svg"
        }), !0, !0), s
    })(),
    xe = () => {
        const [r] = Re.vipSupportResource(), s = w(() => {
            var l;
            return (l = be.getConfigByLevel(D.vipLevel)) == null ? void 0 : l.hostTagColor
        });
        return t(S, {
            get when() {
                return r().hostCard
            },
            fallback: null,
            children: l => (() => {
                var p = ut(),
                    m = p.firstChild,
                    f = m.firstChild;
                return p.style.setProperty("box-shadow", "0px 0px 2px 0px rgba(0, 0, 0, 0.2"), e(f, () => u("VIP Host")), e(m, t(Lt, {
                    get class() {
                        return V("absolute right-0 top-0 -z-10 w-[4.5rem]")
                    },
                    get style() {
                        return {
                            color: s()
                        }
                    }
                }), null), e(p, t(Vt, {
                    get host() {
                        return l()
                    }
                }), null), C(g => (g = pe.darken ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)") != null ? p.style.setProperty("background", g) : p.style.removeProperty("background")), p
            })()
        })
    },
    It = 2592e6,
    Vt = r => {
        const s = Be();

        function l(d) {
            const a = new Date(d);
            let o = a.getHours();
            const c = a.getMinutes(),
                b = o >= 12 ? "PM" : "AM";
            o = o % 12, o = o || 12;
            const _ = c < 10 ? "0" + c : c;
            return `${o}:${_} ${b}`
        }
        const p = () => {
                switch (j.level(D.vipLevel).vipTypeNum) {
                    case n.VipLevelStatus.None:
                        return "#5d81ac";
                    case n.VipLevelStatus.Bronze:
                        return "#6e412e";
                    case n.VipLevelStatus.Silver:
                        return "#5f5e5e";
                    case n.VipLevelStatus.Gold:
                        return "#966603";
                    case n.VipLevelStatus.Platinum_I:
                    case n.VipLevelStatus.Platinum_II:
                        return "#6434a2";
                    case n.VipLevelStatus.Diamond_I:
                    case n.VipLevelStatus.Diamond_II:
                    case n.VipLevelStatus.Diamond_III:
                        return "#b54e82";
                    default:
                        return ""
                }
            },
            m = () => (() => {
                var d = pt(),
                    a = d.firstChild,
                    o = a.firstChild,
                    c = o.nextSibling,
                    b = c.firstChild,
                    _ = a.nextSibling,
                    y = _.firstChild;
                return a.style.setProperty("background-image", "linear-gradient(34deg, #323738 13%, var(--bonus-gradient-vip_host_avatar) 100%)"), e(y, () => r.host.name, null), e(y, t(P, {
                    class: "text-brand",
                    size: 20,
                    name: "hostWeChat"
                }), null), e(_, t(S, {
                    get when() {
                        return r.host.cardShowType !== 2
                    },
                    get fallback() {
                        return (() => {
                            var i = mt(),
                                x = i.firstChild;
                            return e(i, t(P, {
                                name: "inform",
                                class: "size-4 text-warning"
                            }), x), e(x, () => u("Regain your VIP HOST service")), i
                        })()
                    },
                    get children() {
                        var i = dt(),
                            x = i.firstChild,
                            I = x.nextSibling;
                        return I.nextSibling, e(i, () => l(r.host.workingHoursStart), x), e(i, () => l(r.host.workingHoursEnd), I), e(i, () => u("Online"), null), i
                    }
                }), null), e(_, t(S, {
                    get when() {
                        return r.host.tgId
                    },
                    children: i => (() => {
                        var x = gt();
                        return x.firstChild, e(x, i, null), C(() => k(x, "href", `https://t.me/${i()}`)), x
                    })()
                }), null), e(_, t(S, {
                    get when() {
                        return r.host.nftAvatarLink
                    },
                    get children() {
                        return t(W, {
                            get href() {
                                return r.host.nftAvatarLink
                            },
                            target: "_blank",
                            get children() {
                                var i = vt(),
                                    x = i.firstChild,
                                    I = x.nextSibling;
                                return e(I, () => r.host.nftLabelName), e(i, t(P, {
                                    name: "singleSmallArrow",
                                    class: "rotate-180 text-secondary",
                                    size: 12
                                }), null), i
                            }
                        })
                    }
                }), null), C(i => {
                    var x = V("bg-gradient-vip_host_avatar relative flex size-16 items-center justify-center rounded-full bg-layer5 p-1 sm:size-20"),
                        I = p(),
                        Z = ke.avatar(r.host.userId),
                        q = V("h-full w-full rounded-full", r.host.onlineStatus ? "bg-brand" : "bg-layer6");
                    return x !== i.e && T(a, i.e = x), I !== i.t && ((i.t = I) != null ? a.style.setProperty("--bonus-gradient-vip_host_avatar", I) : a.style.removeProperty("--bonus-gradient-vip_host_avatar")), Z !== i.a && k(o, "src", i.a = Z), q !== i.o && T(b, i.o = q), i
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0
                }), d
            })(),
            f = () => {
                const d = Pe(() => r.host.hostUnbindTime + It);
                return (() => {
                    var a = ht();
                    return e(a, t(S, {
                        get when() {
                            return r.host.cardShowType !== 2
                        },
                        get fallback() {
                            return [(() => {
                                var o = ft(),
                                    c = o.firstChild;
                                return e(o, () => u("Expires in"), c), o
                            })(), t(S, {
                                get when() {
                                    return d()
                                },
                                children: o => (() => {
                                    var c = bt();
                                    return e(c, () => `${o().days}d:${o().hours}h:${o().minutes}m`), c
                                })()
                            })]
                        },
                        get children() {
                            return t(E, {
                                onClick: () => s(`/chat/${r.host.userId}`),
                                size: "m",
                                class: "w-full rounded-lg border-[1.6px] border-solid border-third font-semibold text-secondary",
                                get children() {
                                    return [t(P, {
                                        name: "vipHostChatNow",
                                        class: "mr-1",
                                        size: 20
                                    }), de(() => u("Chat Now"))]
                                }
                            })
                        }
                    })), a
                })()
            },
            g = () => {
                const d = w(() => new N(r.host.wager || 0));
                return (() => {
                    var a = xt(),
                        o = a.firstChild,
                        c = o.nextSibling,
                        b = c.firstChild;
                    b.nextSibling;
                    var _ = c.nextSibling,
                        y = _.firstChild;
                    return e(o, () => u("Maintain Your VIP Host Service Benefits")), e(b, () => H.printCurrency(d())), e(c, () => H.printCurrency(new N(5e4)), null), e(y, () => u("Wagering amount from the past 90 days")), e(_, t(P, {
                        name: "inform",
                        class: "mx-1 size-4 cursor-pointer",
                        onClick: () => {
                            ee.push(() => t(ce, {}))
                        }
                    }), null), e(a, t(oe, {
                        get percent() {
                            return Math.min(d().div(500).toNumber(), 100)
                        }
                    }), null), a
                })()
            },
            h = () => {
                const d = w(() => new N(r.host.wager || 0));
                return (() => {
                    var a = _t(),
                        o = a.firstChild,
                        c = o.nextSibling,
                        b = c.firstChild;
                    b.nextSibling;
                    var _ = c.nextSibling;
                    return e(o, () => u("Host Betting Progress Recovery"), null), e(o, t(P, {
                        name: "inform",
                        class: "mx-1 size-4 cursor-pointer",
                        onClick: () => {
                            ee.push(() => t(ce, {}))
                        }
                    }), null), e(b, () => H.printCurrency(d())), e(c, () => H.printCurrency(new N(5e4)), null), e(_, () => u("30 days remaining for recovery")), e(a, t(oe, {
                        get percent() {
                            return Math.min(d().div(5e4).toNumber() * 100, 100)
                        }
                    }), null), a
                })()
            };
        return (() => {
            var d = yt();
            return e(d, m, null), e(d, t(He, {
                get children() {
                    return [t(te, {
                        get when() {
                            return r.host.cardShowType === 1
                        },
                        get children() {
                            return g()
                        }
                    }), t(te, {
                        get when() {
                            return r.host.cardShowType === 2
                        },
                        get children() {
                            return h()
                        }
                    })]
                }
            }), null), e(d, f, null), d
        })()
    },
    ce = function() {
        return t(De, {
            get title() {
                return u("Tips")
            },
            class: "text-xs text-secondary",
            get children() {
                return [(() => {
                    var r = $t(),
                        s = r.firstChild,
                        l = s.nextSibling;
                    return e(l, () => u("In order to provide the best experience for VIPs, the benefits of VIP  host service will depend on your activity volume.")), r
                })(), (() => {
                    var r = St(),
                        s = r.firstChild,
                        l = s.nextSibling;
                    return e(l, () => u("To retain your VIP host service benefits, please make sure you bet US$50,000 within 90 days.")), r
                })(), (() => {
                    var r = wt(),
                        s = r.firstChild,
                        l = s.nextSibling;
                    return e(l, () => u("If you lose your VIP host service  benefits, as long as you bet$50,000 within 30 days, you can regain your VIP host service.")), r
                })(), (() => {
                    var r = Ct(),
                        s = r.firstChild,
                        l = s.nextSibling;
                    return e(l, () => u("Your betting progress will be daily update.")), r
                })()]
            }
        })
    };
var Bt = v('<div class="px-4 pt-3">'),
    kt = v('<div class="relative -z-10 mr-8 size-28 flex-shrink-0 sm:ml-10 sm:size-44"><img class=sm:size-full><div class="absolute left-1/2 top-[100%] w-44 -translate-x-1/2 -translate-y-1/2 sm:top-[105%] sm:w-96"><img class=w-full>'),
    Pt = v('<div><div class="flex w-full gap-x-3 rounded-xl bg-contain bg-repeat sm:pl-6"><div class="flex flex-grow flex-col gap-y-4 pl-6 pr-0 pt-6 sm:order-2 sm:flex-grow sm:gap-y-6 sm:pr-4 sm:pt-10">');
const Dt = () => {
    const {
        isBrAuditHost: r
    } = ve.getHostType($.host);
    w(() => be.getConfigByLevel(D.vipLevel).bannerBackgroundImg);
    const s = w(() => j.level(D.vipLevel)),
        l = () => t(G, {
            fallback: null,
            get children() {
                return t(ge, {
                    fallback: null,
                    get children() {
                        var m = Bt();
                        return e(m, t(xe, {})), m
                    }
                })
            }
        }),
        p = () => {
            switch (s().vipTypeNum) {
                case n.VipLevelStatus.None:
                    return z.angleNone;
                case n.VipLevelStatus.Bronze:
                    return z.angleBronze;
                case n.VipLevelStatus.Silver:
                    return z.angleSilver;
                case n.VipLevelStatus.Gold:
                    return z.angleGold;
                case n.VipLevelStatus.Platinum_I:
                case n.VipLevelStatus.Platinum_II:
                    return z.anglePlatinum;
                case n.VipLevelStatus.Diamond_I:
                case n.VipLevelStatus.Diamond_II:
                case n.VipLevelStatus.Diamond_III:
                    return z.angleDiamond;
                default:
                    return ""
            }
        };
    return (() => {
        var m = Pt(),
            f = m.firstChild,
            g = f.firstChild;
        return e(g, t(Ge, {
            get vipLevel() {
                return D.vipLevel
            }
        }), null), e(g, t(S, {
            get when() {
                return !$.mobile
            },
            get children() {
                return t(W, {
                    href: "/vip-level",
                    class: "absolute right-4 top-4 flex",
                    get children() {
                        return t(E, {
                            size: "xs",
                            class: "rounded-md border border-solid border-third bg-white_alpha5/5 !px-2 py-3 text-xs font-extrabold text-brand",
                            get children() {
                                return t(me, {
                                    get when() {
                                        return $.mobile
                                    },
                                    get fallback() {
                                        return u("View Level Up Detail")
                                    },
                                    get children() {
                                        return u("Learn more VIP level up system", {})
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }), null), e(f, t(S, {
            when: !r,
            get children() {
                var h = kt(),
                    d = h.firstChild,
                    a = d.nextSibling,
                    o = a.firstChild;
                return C(c => {
                    var b = n.vipBadgeIcon(D.vipLevel),
                        _ = p();
                    return b !== c.e && k(d, "src", c.e = b), _ !== c.t && k(o, "src", c.t = _), c
                }, {
                    e: void 0,
                    t: void 0
                }), h
            }
        }), null), e(m, t(S, {
            get when() {
                return $.mobile
            },
            get children() {
                return l()
            }
        }), null), C(h => {
            var d = V("relative z-0 flex flex-col overflow-hidden rounded-xl bg-layer4 pb-4 shadow-sm sm:min-h-56 sm:pb-0"),
                a = `linear-gradient(-12deg, transparent 28%, ${he[s().vipTypeNum]} 82% ${le[s().vipTypeNum]?`,${le[s().vipTypeNum]} 100%`:""}`;
            return d !== h.e && T(m, h.e = d), a !== h.t && ((h.t = a) != null ? m.style.setProperty("background-image", a) : m.style.removeProperty("background-image")), h
        }, {
            e: void 0,
            t: void 0
        }), m
    })()
};
var Tt = v('<div class="flex gap-x-4 gap-y-2 overflow-hidden sm:flex-wrap"><div class="relative flex flex-grow flex-col sm:basis-[40rem]">'),
    zt = v('<p class="text-sm font-semibold text-secondary">'),
    At = v('<div class="flex flex-col gap-y-4"><h3 class="text-lg font-extrabold text-primary">'),
    Et = v("<section>"),
    Nt = v('<div class="center gap-x-2"><span class=text-primary>');
const $r = () => {
    const r = () => j.level(D.vipLevel),
        s = Me(() => [(() => {
            var l = Tt(),
                p = l.firstChild;
            return e(p, t(G, {
                fallback: re,
                get children() {
                    return t(Dt, {})
                }
            }), null), e(p, t(S, {
                get when() {
                    return $.mobile
                },
                get children() {
                    return t(W, {
                        href: "/vip-level",
                        class: "my-3",
                        get children() {
                            return t(E, {
                                get size() {
                                    return $.mobile ? "l" : "s"
                                },
                                class: "fix-light-hover w-full rounded-lg !bg-layer4 text-sm font-semibold text-brand",
                                get children() {
                                    return t(me, {
                                        get when() {
                                            return $.mobile
                                        },
                                        get fallback() {
                                            return u("View Level Up Detail")
                                        },
                                        get children() {
                                            return u("Learn more VIP level up system", {})
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            }), null), e(l, t(S, {
                get when() {
                    return !$.mobile
                },
                get children() {
                    return t(G, {
                        fallback: null,
                        get children() {
                            return t(ge, {
                                fallback: null,
                                get children() {
                                    return t(xe, {})
                                }
                            })
                        }
                    })
                }
            }), null), l
        })(), (() => {
            var l = At(),
                p = l.firstChild;
            return e(p, () => u("Exclusive VIP Bonus"), null), e(p, t(S, {
                get when() {
                    return !$.mobile
                },
                get children() {
                    var m = zt();
                    return e(m, () => u("Discover the ultimate gaming experience")), m
                }
            }), null), e(l, t(lt, {
                get selectedVip() {
                    return de(() => r().vipTypeNum === n.VipLevelStatus.None)() ? n.VipLevelStatus.Bronze : r().vipTypeNum
                }
            }), null), l
        })(), t(Oe, {}), t(je, {})]);
    return t(Te, {
        get title() {
            return (() => {
                var l = Nt(),
                    p = l.firstChild;
                return e(l, t(P, {
                    size: 20,
                    name: "vipCrown",
                    class: "text-[#FFE924]"
                }), p), e(p, () => u("VIP Club")), l
            })()
        },
        get children() {
            return t(G, {
                fallback: re,
                get children() {
                    var l = Et();
                    return e(l, s), C(() => T(l, V("flex flex-col gap-y-4 bg-no-repeat px-4 pb-10 pt-sh text-primary sm:gap-y-6 sm:px-0 sm:pt-3"))), l
                }
            })
        }
    })
};
export {
    $r as
    default
};