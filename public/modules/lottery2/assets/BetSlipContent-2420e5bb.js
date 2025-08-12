var mt = Object.defineProperty,
    bt = Object.defineProperties;
var ft = Object.getOwnPropertyDescriptors;
var W = Object.getOwnPropertySymbols;
var gt = Object.prototype.hasOwnProperty,
    xt = Object.prototype.propertyIsEnumerable;
var Q = (t, o, i) => o in t ? mt(t, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : t[o] = i,
    T = (t, o) => {
        for (var i in o || (o = {})) gt.call(o, i) && Q(t, i, o[i]);
        if (W)
            for (var i of W(o)) xt.call(o, i) && Q(t, i, o[i]);
        return t
    },
    P = (t, o) => bt(t, ft(o));
var F = (t, o, i) => new Promise((g, n) => {
    var x = f => {
            try {
                $(i.next(f))
            } catch (y) {
                n(y)
            }
        },
        h = f => {
            try {
                $(i.throw(f))
            } catch (y) {
                n(y)
            }
        },
        $ = f => f.done ? g(f.value) : Promise.resolve(f.value).then(x, h);
    $((i = i.apply(t, o)).next())
});
import {
    k as H,
    i as l,
    c as a,
    s as z,
    a as _,
    g as Z,
    h as tt,
    F as X,
    t as p,
    S as ht,
    P as pt,
    d as j,
    b as G,
    n as yt,
    o as $t,
    w as _t,
    M as et,
    m as Y
} from "./solid-js-2e2908f8.js";
import {
    u as E,
    f as lt,
    e as q,
    D as vt,
    L as wt,
    F as It,
    B as J,
    i as St,
    I as Bt,
    G as Dt,
    k as Ct,
    b as kt,
    g as K,
    t as M,
    p as Lt
} from "./manifest-5fcb2c8d.js";
import {
    p as d
} from "./store-483fdae6.js";
import {
    L as rt,
    B as At
} from "./BetAmountSelect-bb0484eb.js";
import {
    a as Nt,
    d as Tt,
    e as Pt,
    m as at
} from "./IndiaStateKaralaBall-9a331e1e.js";
import {
    b as Et
} from "./lottery-af48bec0.js";
import {
    I as V
} from "./LocalIcon-e7afd517.js";
import {
    t as m
} from "./i18n-d0803583.js";
import {
    c as Ft
} from "./countries-a369bbd3.js";
import {
    B as U,
    b as O
} from "./Detail.interface-808c1c29.js";
import {
    I as R
} from "./Lottery-2fa833fd.js";
import {
    p as ct
} from "./store-2ed2b91e.js";
import {
    b as Mt
} from "./logo-c5334a6f.js";
import {
    c as jt
} from "./createSettle-cf894f15.js";
import {
    E as Ut
} from "./indiaState-28de2f3d.js";
import "./_Uint8Array-7783c8b7.js";
import "./_MapCache-9c96b8d5.js";
import "./isObject-909534d5.js";
import "./router-bf1daf6a.js";
import "./apis-9bc5cda9.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./toString-9093e562.js";
var zt = p('<div><label class=font-bold>%</label><label class="">'),
    Gt = p('<div class="flex justify-between mb-3 font-semibold text-sm text-primary"><span></span><span> X'),
    Kt = p('<div class="mb-3 flex gap-2 flex-wrap">'),
    st = p('<div class="mb-3 flex flex-col gap-2"><span class="font-semibold text-sm text-secondary">'),
    Ot = p('<div><div class="center flex-none w-10 h-auto rounded-l-xl cursor-pointer bg-layer5 "></div><div class="flex-auto h-auto m-3 text-sm"><div class="flex justify-between mb-3"><div class="w-full flex justify-between"><section class="relative w-[32px] h-[32px] overflow-hidden"><img class="w-[32px] absolute"alt=""loading=lazy></section></div></div><div class=mb-3><h2 class="cursor-pointer font-extrabold text-sm text-primary"></h2></div><div class="mb-3 font-semibold text-sm text-secondary"><span>: </span><span>'),
    Rt = p('<div class="flex justify-between mb-3 font-semibold text-sm text-primary"><span> </span><span> X'),
    Xt = p('<section class="grid grid-cols-3 gap-2 max-h-52 overflow-y-auto">');

function nt(t) {
    const o = E(),
        i = n => {
            o(`/lottery/detail/${n}`)
        },
        g = (n, x, h) => {
            const f = d.state.Betlist.findIndex(y => y.id === t.data.id);
            f !== -1 && d.setState("Betlist", ct(y => {
                const v = y[f].betItem.selectedDetailData.betAmount,
                    w = h ? v + x : x;
                y[f].betItem.selectedDetailData.betAmount = w > at ? at : w
            }))
        };
    return (() => {
        var n = Ot(),
            x = n.firstChild,
            h = x.nextSibling,
            $ = h.firstChild,
            f = $.firstChild,
            y = f.firstChild,
            v = y.firstChild,
            w = $.nextSibling,
            C = w.firstChild,
            N = w.nextSibling,
            D = N.firstChild,
            k = D.firstChild,
            L = D.nextSibling;
        return x.$$click = () => {
            const e = d.state.Betlist.filter(s => s.id !== t.data.id);
            d.setState("Betlist", e)
        }, l(x, a(V, {
            name: "Close",
            class: "fill-secondary"
        })), z(v, "src", Ft), l(f, a(_, {
            get when() {
                return t.data.betItem.selectedDetailData.discount > 0
            },
            get children() {
                var e = zt(),
                    s = e.firstChild,
                    r = s.firstChild,
                    b = s.nextSibling;
                return l(s, () => t.data.betItem.selectedDetailData.discount, r), l(b, () => m("OFF")), Z(() => tt(e, lt("center px-2.5 py-1px bg-[url('/src/assets/lottery/discount-green.png')] bg-no-repeat bg-center bg-[length:100%_100%] text-xs text-white", t.data.betItem.selectedDetailData.discount >= 10 && "!bg-[url('/src/assets/lottery/discount-yellow.png')]"))), e
            }
        }), null), C.$$click = () => i(t.data.period.lotteryId), l(C, () => t.data.period.lotteryName), l(D, () => m("Draw Date"), k), l(L, () => new Date(Number(t.data.period.drawTime)).toLocaleString("en")), l(h, a(_, {
            get when() {
                var e;
                return ((e = t.data.betItem.selectedDetailData.normalBallList) == null ? void 0 : e.length) > 0
            },
            get children() {
                return a(_, {
                    get when() {
                        return t.data.betItem.marketId !== U.IndiaState
                    },
                    get fallback() {
                        return [(() => {
                            var e = Rt(),
                                s = e.firstChild,
                                r = s.firstChild,
                                b = s.nextSibling,
                                c = b.firstChild;
                            return l(s, () => t.data.betItem.selectedDetailData.betsNumber, r), l(s, () => m("Tickets"), null), l(b, () => t.data.betItem.selectedData.odds, c), e
                        })(), (() => {
                            var e = Xt();
                            return l(e, a(X, {
                                get each() {
                                    return t.data.betItem.selectedDetailData.normalBallList
                                },
                                children: s => a(Nt, {
                                    get num() {
                                        return String(s)
                                    },
                                    get isDisabled() {
                                        return t.data.error
                                    }
                                })
                            })), e
                        })()]
                    },
                    get children() {
                        return a(_, {
                            get when() {
                                return !R().includes(t.data.betItem.marketId)
                            },
                            get children() {
                                return [(() => {
                                    var e = Gt(),
                                        s = e.firstChild,
                                        r = s.nextSibling,
                                        b = r.firstChild;
                                    return l(s, () => t.data.betItem.selectedData.name), l(r, () => t.data.betItem.selectedData.odds, b), e
                                })(), (() => {
                                    var e = Kt();
                                    return l(e, a(rt, {
                                        get numbs() {
                                            return t.data.betItem.selectedDetailData.normalBallList
                                        },
                                        inSelect: !1,
                                        selectMode: "normal",
                                        class: "w-8 h-8"
                                    }), null), l(e, a(rt, {
                                        get numbs() {
                                            return t.data.betItem.selectedDetailData.bonusBallList
                                        },
                                        inSelect: !1,
                                        selectMode: "bonus",
                                        class: "w-8 h-8"
                                    }), null), e
                                })()]
                            }
                        })
                    }
                })
            }
        }), null), l(h, a(_, {
            get when() {
                return !(R().includes(t.data.betItem.marketId) || t.data.betItem.marketId === U.IndiaState)
            },
            get children() {
                return [(() => {
                    var e = st(),
                        s = e.firstChild;
                    return l(s, () => m("Draws")), l(e, a(Tt, {
                        get data() {
                            return t.data
                        }
                    }), null), e
                })(), (() => {
                    var e = st(),
                        s = e.firstChild;
                    return l(s, () => m("Bet Amount")), l(e, a(At, {
                        get data() {
                            return t.data
                        }
                    }), null), e
                })()]
            }
        }), null), l(h, a(_, {
            get when() {
                return R().includes(t.data.betItem.marketId)
            },
            get children() {
                return a(Pt, {
                    get data() {
                        return t.data.betItem
                    },
                    onBetAmount: g
                })
            }
        }), null), Z(e => {
            var s = lt("flex bg-layer4 rounded-xl relative items-stretch mb-3 border", t.data.error ? "border-error" : "border-third"),
                r = Et(t.data.period.lotteryCountry, 4 / 3);
            return s !== e.e && tt(n, e.e = s), r !== e.t && ((e.t = r) != null ? v.style.setProperty("top", r) : v.style.removeProperty("top")), e
        }, {
            e: void 0,
            t: void 0
        }), n
    })()
}
H(["click"]);
const Yt = "/modules/lottery2/assets/vector-90caea33.png";
var qt = p('<div class="closed-icon py-2 px-3 bg-[#FFDED7] text-[#ff5d3a] rounded-3xl">'),
    Ht = p('<div class="flex my-3 relative border border-solid border-third rounded-xl"><div class="center flex-none w-10 h-auto rounded-l-xl cursor-pointer bg-layer5"></div><div class="bet-form flex-auto h-auto p-3 bg-layer4 rounded-r-xl"><div class="bet-form-item mb-3 flex items-start justify-between"><img loading=lazy class="nation-img w-10 h-10 cursor-pointer"alt=nation></div><div class="bet-form-item mb-3 flex items-start justify-between"><h1 class="lottery-title cursor-pointer font-extrabold text-sm text-primary"></h1></div><div class="bet-form-item mb-3 flex items-start gap-1 font-semibold text-sm text-secondary"><span>:</span><span></span></div><div class="bet-form-item mb-3 flex items-start justify-between font-semibold text-sm text-primary"><span> Tickets </span><span> USD');
const it = function(t) {
    const o = g => {
            i(`/lottery/detail/${g}`)
        },
        i = E();
    return (() => {
        var g = Ht(),
            n = g.firstChild,
            x = n.nextSibling,
            h = x.firstChild,
            $ = h.firstChild,
            f = h.nextSibling,
            y = f.firstChild,
            v = f.nextSibling,
            w = v.firstChild,
            C = w.firstChild,
            N = w.nextSibling,
            D = v.nextSibling,
            k = D.firstChild,
            L = k.firstChild,
            e = k.nextSibling,
            s = e.firstChild;
        return n.$$click = () => {
            d.setState("betBc", {
                ticketNum: 0
            })
        }, l(n, a(V, {
            name: "Close",
            class: "close-icon fill-secondary"
        })), $.$$click = () => {
            var r;
            return o(((r = t.data.period) == null ? void 0 : r.lotteryId) || 0)
        }, z($, "src", Mt), l(h, a(_, {
            get when() {
                return t.data.error
            },
            get children() {
                var r = qt();
                return l(r, () => m("Closed")), r
            }
        }), null), y.$$click = () => o(t.data.period.lotteryId), l(y, () => m("__ENV_SITE__ Lottery Jackpot")), l(w, () => m("Draw Date"), C), l(N, () => {
            var r;
            return new Date(Number((r = t.data.period) == null ? void 0 : r.drawTime)).toLocaleString("en")
        }), l(k, () => t.data.ticketNum, L), l(e, () => t.data.ticketNum / 10, s), g
    })()
};
H(["click"]);
const Jt = "/modules/lottery2/assets/bet_success-fabc6867.png";
var Vt = p('<h1 class="text-lg font-extrabold text-primary pt-4 sm:sticky sm:top-0 sm:!pt-0 sm:!bg-layer4 sm:h-15 sm:!leading-[3.75rem] sm:text-center">'),
    Wt = p('<section class="betslip-content flex flex-col pt-4 sm:py-0 pb-96 sm:h-full"><section class="bg-layer2 sticky top-0 z-10">'),
    Qt = p('<div class="flex justify-between"><span></span><span class="text-title font-bold">-$'),
    Zt = p("<span class=text-primary>"),
    te = p('<div class="flex flex-col text-center mb-3"><span class="text-error text-xs font-semibold"></span><span class="text-primary text-xs font-semibold underline cursor-pointer">'),
    ee = p('<div class="flex-none text-text text-sm p-4 -mx-4 bg-layer4 fixed w-full sm:!w-[380px] sm:!mx-0"><div class="z-50 mb-5"><h3 class="text-secondary font-semibold text-sm mb-1"></h3></div><div class="flex items-center justify-between mb-2"><span class="text-secondary font-semibold text-sm"></span><span class="text-primary font-semibold text-sm"></span></div><div class="mb-2 hidden"></div><div class="mb-2 flex justify-between"><span class="text-secondary font-semibold text-sm"></span><div class="text-title font-bold"><div class="text-primary font-semibold text-sm"> USD</div></div></div><div class="mb-3 flex items-center justify-end gap-1"><span class="text-secondary font-semibold text-sm">≈ </span><span class="text-secondary font-semibold text-sm"></span></div><div class="w-full mb-2"></div><div class="bet-form-item center button gap-1"><div class="cursor-pointer text-brand font-extrabold text-sm">'),
    le = p('<div class="center flex-1">'),
    re = p('<div class="mt-8 px-6 pb-2 flex flex-col items-center"><img class="w-12 h-12"alt=""loading=lazy><p class="text-base font-extrabold text-primary mt-8"></p><p class="text-sm font-semibold text-secondary mt-3">'),
    ae = p('<section class="mt-8 px-6 pb-2 flex flex-col items-center"><img class="w-12 h-12"><h1 class="text-base font-extrabold text-primary mt-8"></h1><p class="text-sm font-semibold text-secondary mt-3">');

function dt() {
    const t = E(),
        o = j(() => d.state.Betlist.length + d.state.betBc.ticketNum),
        i = () => d.state.betBc.ticketNum / 10,
        g = j(() => {
            const e = d.state.Betlist.reduce((s, {
                betItem: r
            }) => {
                if (!r.selectedDetailData) return 0;
                const b = 1e3 * r.selectedDetailData.betAmount * r.selectedDetailData.draws * r.selectedDetailData.betsNumber,
                    c = b * (1 - r.selectedDetailData.discount / 100) / 1e3,
                    u = b * r.selectedDetailData.discount / 100 / 1e3;
                return {
                    betAmount: s.betAmount + c,
                    discountAmount: s.discountAmount + u
                }
            }, {
                discountAmount: 0,
                betAmount: 0
            });
            return e.betAmount = e.betAmount + i(), e
        }),
        n = jt({
            amount: () => g().betAmount
        }),
        [x, h] = G(!1),
        [$, f] = G(0),
        [y, v] = G(5),
        w = () => F(this, null, function*() {
            if (!kt.login) {
                t("/login/signin");
                return
            }
            if (n.isInsuAmount()) return null;
            const e = "/platform-lottery/lottery-detail/buy",
                s = "/lottery/five-plus-one/buy/",
                r = {
                    payCurrencyName: n.currency().currencyName,
                    betInfoList: d.state.Betlist.map(c => {
                        var u;
                        return {
                            betUid: c.id,
                            lotteryId: c.period.lotteryId,
                            marketId: c.betItem.marketId,
                            marketOddsId: (u = c.betItem.selectedData) == null ? void 0 : u.id,
                            draws: c.betItem.selectedDetailData.draws,
                            betAmount: c.betItem.selectedDetailData.betAmount,
                            ballList: c.betItem.selectedDetailData.normalBallList,
                            bonusBallList: c.betItem.selectedDetailData.bonusBallList
                        }
                    })
                },
                b = P(T({}, d.state.betBc), {
                    fromCurrencyName: n.currency().currencyName,
                    fromCurrencyAmount: n.rate().mul(i())
                });
            if (d.state.betBc.ticketNum && K().post(s, b).then(c => {
                    h(!0), d.addBetBc({
                        ticketNum: 0,
                        lotteryList: []
                    }), ot(5, v, () => {
                        h(!1), f($() + 1)
                    })
                }).catch(c => {
                    M(c.message)
                }), d.state.Betlist.length) try {
                const c = yield K().post(e, r);
                let u = !1,
                    I = !1,
                    S = !1;
                const A = [];
                if (c.forEach(B => {
                        B.failType === O.Balance ? (u = !0, A.push(B.betUid)) : B.failType === O.Period ? (I = !0, A.push(B.betUid)) : B.failType === O.PartSuccess && (S = !0, A.push(B.betUid))
                    }), u && M(m("Insufficient balance")), I && M(m("Invalid term of lottery. Please check the bet slip.")), S) {
                    const B = c.find(ut => ut.marketId === U.IndiaState);
                    Lt.push(() => a(Ut, {
                        get balls() {
                            return (B == null ? void 0 : B.ballList) || []
                        }
                    }))
                }!u && !I && !S && (h(!0), ot(5, v, () => {
                    h(!1), f($() + 1)
                })), C(A, c)
            } catch (c) {
                M(c)
            }
        }),
        C = (e, s) => {
            d.setState("Betlist", r => r.filter(u => e.includes(u.id)).map(u => {
                const I = u.betItem.marketId === U.IndiaState;
                let S = u.betItem;
                if (I) {
                    const A = s.find(B => B.betUid === u.id);
                    S = P(T({}, S), {
                        selectedDetailData: P(T({}, S.selectedDetailData), {
                            normalBallList: (A == null ? void 0 : A.ballList) || []
                        })
                    })
                }
                return P(T({}, u), {
                    betItem: S,
                    error: !0
                })
            }))
        };

    function N(e) {
        return F(this, null, function*() {
            const s = "/platform-lottery/lottery-detail/batch-query-status";
            return yield K().post(s, {
                lotteryIdList: e
            })
        })
    }

    function D() {
        const e = new Date().getTime(),
            s = d.state.Betlist.map(r => {
                if (Number(r.period.drawTime) < e) return r.period.lotteryId
            }).filter(r => r);
        return d.setState("Betlist", r => Number(r.period.drawTime) < e, "error", !0), s
    }

    function k() {
        const e = D();
        e.length > 0 && L(e)
    }

    function L(e) {
        return F(this, null, function*() {
            const s = yield N(e), r = new Map;
            s.forEach(b => {
                r.set(b.lotteryId, b)
            }), d.setState("Betlist", b => r.has(b.period.lotteryId), ct(b => {
                var c;
                b.period.drawTime = ((c = r.get(b.period.lotteryId)) == null ? void 0 : c.drawTime) || "", b.error = !1
            })), D()
        })
    }
    return yt(() => {
        const e = setInterval(k, 1e3);
        $t(() => {
            clearInterval(e)
        })
    }), (() => {
        var e = Wt(),
            s = e.firstChild;
        return l(s, a(_, {
            get when() {
                return !q.mobile
            },
            get children() {
                return [(() => {
                    var r = Vt();
                    return l(r, () => m("Bet Slip")), r
                })(), a(J, {
                    class: "absolute rounded-lg bg-layer5 right-2 top-3.5 z-[101] size-8",
                    onClick: () => {
                        document.body.classList.toggle("lottery-fold", !1), St.emit("lottery-toggle", !1)
                    },
                    get children() {
                        return a(Bt, {
                            name: "Close",
                            class: "text-secondary size-4"
                        })
                    }
                })]
            }
        })), l(e, a(_, {
            get when() {
                return o() > 0
            },
            get fallback() {
                return a(_, {
                    get when() {
                        return x()
                    },
                    get fallback() {
                        return a(oe, {})
                    },
                    get children() {
                        return a(ce, {
                            get count() {
                                return y()
                            }
                        })
                    }
                })
            },
            get children() {
                return [a(_, {
                    get when() {
                        return q.mobile
                    },
                    get fallback() {
                        return a(Dt, {
                            class: "betslip-content flex-1 pb-96 px-4 pt-4",
                            get children() {
                                return [a(_, {
                                    get when() {
                                        return d.state.betBc.ticketNum
                                    },
                                    get children() {
                                        return a(it, {
                                            get data() {
                                                return d.state.betBc
                                            }
                                        })
                                    }
                                }), a(X, {
                                    get each() {
                                        return d.state.Betlist
                                    },
                                    children: r => a(nt, {
                                        data: r
                                    })
                                })]
                            }
                        })
                    },
                    get children() {
                        return [a(_, {
                            get when() {
                                return d.state.betBc.ticketNum
                            },
                            get children() {
                                return a(it, {
                                    get data() {
                                        return d.state.betBc
                                    }
                                })
                            }
                        }), a(X, {
                            get each() {
                                return d.state.Betlist
                            },
                            children: r => a(nt, {
                                data: r
                            })
                        })]
                    }
                }), a(se, {
                    placeBetCb: w,
                    settle: n,
                    get betAmountInfo() {
                        return g()
                    },
                    get betSlipLength() {
                        return o()
                    }
                })]
            }
        }), null), e
    })()
}
const se = t => {
    const o = E(),
        i = j(() => {
            let n = !1;
            for (const x of d.state.Betlist) {
                if (x.error) {
                    n = !0;
                    return
                }
                n = !1
            }
            return n
        }),
        g = j(() => {
            let n = 0;
            return d.state.Betlist.forEach(x => {
                const h = x.totalDrawsList.length;
                n = h > n ? h : n
            }), n
        });
    return (() => {
        var n = ee(),
            x = n.firstChild,
            h = x.firstChild,
            $ = x.nextSibling,
            f = $.firstChild,
            y = f.nextSibling,
            v = $.nextSibling,
            w = v.nextSibling,
            C = w.firstChild,
            N = C.nextSibling,
            D = N.firstChild,
            k = D.firstChild,
            L = w.nextSibling,
            e = L.firstChild;
        e.firstChild;
        var s = e.nextSibling,
            r = L.nextSibling,
            b = r.nextSibling,
            c = b.firstChild;
        return n.style.setProperty("box-shadow", "rgba(0, 0, 0, 0.14) 0px -8px 20px 0px"), n.style.setProperty("bottom", "var(--safe-bottom)"), l(h, () => m("Pay with")), l(x, () => t.settle.selectCurrency(), null), l(f, () => m("Total Number of Bets")), l(y, () => t.betSlipLength), l(v, a(_t, {
            get children() {
                return [a(et, {
                    get when() {
                        return t.betAmountInfo.discountAmount > 0
                    },
                    get children() {
                        var u = Qt(),
                            I = u.firstChild,
                            S = I.nextSibling;
                        return S.firstChild, l(I, () => m("Discount")), l(S, () => t.betAmountInfo.discountAmount, null), u
                    }
                }), a(et, {
                    get when() {
                        return Y(() => t.betAmountInfo.discountAmount <= 0)() && g() >= 4
                    },
                    get children() {
                        var u = Zt();
                        return l(u, () => m("Select 4 draws or above to get discount")), u
                    }
                })]
            }
        })), l(C, () => m("Total Bet Amount")), l(D, () => t.betAmountInfo.betAmount, k), l(e, () => t.settle.amount().toString(), null), l(s, () => {
            var u, I;
            return Ct.getAlias((I = (u = t.settle) == null ? void 0 : u.currency()) == null ? void 0 : I.currencyName)
        }), l(r, a(J, {
            class: "w-full h-12 text-lg font-extrabold text-primary_brand",
            get disabled() {
                return i() || t.settle.isInsuAmount()
            },
            type: "brand",
            onClick: () => t.placeBetCb(),
            get children() {
                return m("Place Bet")
            }
        })), l(b, a(V, {
            name: "Trash",
            class: "cursor-pointer w-5 text-brand",
            viewBox: "0 0 17 17"
        }), c), c.$$click = () => {
            d.setState("Betlist", []), d.setState("betBc", {
                ticketNum: 0
            })
        }, l(c, () => m("Remove Bet")), l(n, a(_, {
            get when() {
                return t.settle.isInsuAmount()
            },
            get children() {
                var u = te(),
                    I = u.firstChild,
                    S = I.nextSibling;
                return l(I, () => m("Insufficient balance, select another currency, or ")), S.$$click = () => {
                    o("/wallet/deposit")
                }, l(S, () => m("Go to Deposit")), u
            }
        }), null), n
    })()
};

function Pe() {
    return a(_, {
        get when() {
            return q.mobile
        },
        get fallback() {
            return a(ie, {})
        },
        get children() {
            return a(ne, {})
        }
    })
}
const ne = () => a(vt, {
        title: "Bet Slip",
        class: "betslip-dialog",
        get children() {
            return a(ht, {
                get fallback() {
                    return (() => {
                        var t = le();
                        return l(t, a(wt, {})), t
                    })()
                },
                get children() {
                    return a(dt, {})
                }
            })
        }
    }),
    ie = () => a(pt, {
        ref: t => t.className = "lottery-betslip",
        get children() {
            return a(It, {
                name: "fadeRight",
                get children() {
                    return a(dt, {})
                }
            })
        }
    });

function oe() {
    return (() => {
        var t = re(),
            o = t.firstChild,
            i = o.nextSibling,
            g = i.nextSibling;
        return z(o, "src", Yt), l(i, () => m("Place yours bets")), l(g, () => m("Your selections will appear in this area")), t
    })()
}

function ce(t) {
    const o = E();
    return (() => {
        var i = ae(),
            g = i.firstChild,
            n = g.nextSibling,
            x = n.nextSibling;
        return z(g, "src", Jt), l(n, () => m("Successfully placed!")), l(x, () => m("Your bets have been successfully placed!")), l(i, a(J, {
            class: "center w-full h-12 button-darken-bg cursor-pointer text-sm font-extrabold text-primary mt-7 rounded-lg",
            onClick: () => {
                o("/lottery/mybets")
            },
            get children() {
                return [Y(() => m("Go To My Bets")), "(", Y(() => t.count), ")s"]
            }
        }), null), i
    })()
}

function ot(t, o, i) {
    let g = 0;
    const n = setInterval(() => {
        g++, o(t - g), g >= t && (o(5), i(), clearInterval(n))
    }, 1e3)
}
H(["click"]);
export {
    Pe as
    default
};