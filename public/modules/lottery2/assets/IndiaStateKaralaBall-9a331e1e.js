var ke = Object.defineProperty,
    ye = Object.defineProperties;
var _e = Object.getOwnPropertyDescriptors;
var Z = Object.getOwnPropertySymbols;
var $e = Object.prototype.hasOwnProperty,
    ve = Object.prototype.propertyIsEnumerable;
var ee = (e, t, r) => t in e ? ke(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    te = (e, t) => {
        for (var r in t || (t = {})) $e.call(t, r) && ee(e, r, t[r]);
        if (Z)
            for (var r of Z(t)) ve.call(t, r) && ee(e, r, t[r]);
        return e
    },
    ae = (e, t) => ye(e, _e(t));
var le = (e, t, r) => new Promise((c, l) => {
    var n = u => {
            try {
                s(r.next(u))
            } catch (o) {
                l(o)
            }
        },
        d = u => {
            try {
                s(r.throw(u))
            } catch (o) {
                l(o)
            }
        },
        s = u => u.done ? c(u.value) : Promise.resolve(u.value).then(n, d);
    s((r = r.apply(e, t)).next())
});
import {
    v as we,
    r as Ce,
    e as re,
    c as i,
    a as H,
    d as j,
    b as O,
    i as a,
    t as _,
    F as X,
    g as M,
    h as ce,
    k as oe,
    I as R,
    w as Se,
    M as q,
    y as Ie,
    f as ne,
    m as se
} from "./solid-js-2e2908f8.js";
import {
    S as Ne,
    s as Be,
    f as T,
    B as z,
    I as F,
    N as pe,
    p as Pe
} from "./manifest-5fcb2c8d.js";
import {
    c as Le
} from "./Detail.interface-808c1c29.js";
import {
    t as h
} from "./i18n-d0803583.js";
import {
    p as C
} from "./store-483fdae6.js";
import {
    p as U
} from "./store-2ed2b91e.js";
import {
    g as ze,
    m as Ae
} from "./lottery-af48bec0.js";
import {
    c as Ge,
    h as je,
    d as Fe
} from "./apis-9bc5cda9.js";
import {
    a as Ke
} from "./router-bf1daf6a.js";
const ue = Ce(null);

function Lt(e) {
    const t = Ke(),
        [r] = re(() => t.id, c => Ge(c));
    return re(function() {
        return le(this, null, function*() {
            const c = yield je(Number(t.id)), n = (yield Fe()).sort((s, u) => s.draws - u.draws), d = ze(n, c);
            C.setState("TotalDrawsList", d)
        })
    }), i(H, {
        get when() {
            return r()
        },
        children: c => i(ue.Provider, {
            value: c,
            get children() {
                return e.children
            }
        })
    })
}

function Xe() {
    return we(ue)
}
var Ee = _('<label class="text-primary text-base font-semibold">');

function Oe(e) {
    const t = j(() => e.data ? e.data.totalDrawsList : C.state.TotalDrawsList);
    j(() => e.data ? e.data.betItem.selectedDetailData.discount : C.state.BetItem.selectedDetailData.discount);
    const r = j(() => t().find(d => {
            var s;
            return d.value === ((s = e.data) == null ? void 0 : s.betItem.selectedDetailData.draws)
        }) || t()[0]),
        [c, l] = O(r());
    return i(Ne, {
        class: "bg-input_bright",
        get value() {
            return c()
        },
        get options() {
            return t()
        },
        onChange: n => {
            const d = t().find(s => s.value === n.value);
            l(n), e.data, e.data ? C.setState("Betlist", s => {
                var u;
                return s.id === ((u = e.data) == null ? void 0 : u.id)
            }, U(s => {
                s.betItem.selectedDetailData.draws = Number(n.value), s.betItem.selectedDetailData.discount = (d == null ? void 0 : d.discount) || 0
            })) : C.setState("BetItem", U(s => {
                s.selectedDetailData.draws = Number(n.value), s.selectedDetailData.discount = (d == null ? void 0 : d.discount) || 0
            }))
        },
        children: n => (() => {
            var d = Ee();
            return a(d, () => {
                var s;
                return (s = n()) == null ? void 0 : s.label
            }), d
        })()
    })
}
const Me = "/modules/lottery2/assets/indiaGreenBall-9757e74c.png",
    Re = "/modules/lottery2/assets/indiaGreyBall-ba7707d8.png";
var Te = _('<label class="text-secondary text-sm font-extrabold ml-1">'),
    Ue = _('<div><section class="bg-layer2 p-3 rounded"><h2 class="flex justify-between"><label class="text-secondary text-xs font-extrabold"></label><label class="text-primary text-xs font-extrabold ml-1"></label></h2><div class="flex justify-end gap-2.5 bg-white_alpha5 rounded my-1"></div><div></div></section><section class="bg-layer2 mt-4 p-3 rounded-lg"><h2></h2><div class="flex overflow-x-auto gap-2.5 hide-scroll mt-3"></div><div class="flex justify-between mt-3"><div class=flex>'),
    qe = _('<div><label class="text-secondary text-xs font-extrabold">:'),
    We = _('<span class="flex gap-2.5">'),
    me = _("<label>"),
    Je = _('<div><section class="flex justify-between p-2 mt-3 bg-white_alpha5 rounded-lg"><div class="flex items-center"><div><div class="flex gap-1.5"><label class="text-primary text-sm font-semibold"></label><label class="text-secondary text-sm font-semibold"></label></div><div class="flex gap-1.5"><label class="text-primary text-sm font-semibold"></label><label class="text-secondary text-sm font-semibold"></label></div></div></div><div><div class="flex gap-1.5"><label class="text-primary text-sm font-semibold"></label><label class="text-secondary text-sm font-semibold"></label></div><div class="flex gap-1.5"><label class="text-primary text-sm font-semibold"></label><label class="text-secondary text-sm font-semibold">'),
    He = _('<div><section class="flex justify-between p-2 mt-3 bg-white_alpha5 rounded-lg"><div class="flex items-center"><div class="flex gap-1.5"><label class="text-primary text-sm font-semibold"></label><label class="text-secondary text-sm font-semibold">1, 2, 3</label></div><i class="block w-0.5 h-4 bg-secondary mx-2"></i><div class="flex gap-1.5"><label class="text-primary text-sm font-semibold"></label><label class="text-secondary text-sm font-semibold">4, 5, 6</label></div><i class="block w-0.5 h-4 bg-secondary mx-2"></i><div class="flex gap-1.5"><label class="text-primary text-sm font-semibold"></label><label class="text-secondary text-sm font-semibold">7, 8, 9'),
    Qe = _('<div><section class="flex items-center mt-3 bg-white_alpha5 p-2 rounded-lg"><label class="text-secondary text-sm font-semibold "></label></section><section class="grid grid-cols-5 place-items-center gap-3 mt-3">'),
    Ve = _('<div class="center flex-col gap-1 border-second text-primary"><label class="text-secondary text-sm font-semibold">X'),
    Ye = _('<label class="text-base font-extrabold text-brand ml-1">'),
    Ze = _('<div><section class="flex items-center mt-3 bg-white_alpha5 p-2 rounded-lg"><label class="text-secondary text-sm font-semibold "></label></section><section class="mt-3 flex flex-col gap-4"></section><div class="flex items-center justify-between border-t border-third py-4 mt-4"><section><label class="text-sm font-extrabold text-secondary"></label><label class="text-sm font-extrabold text-primary ml-1"></label></section><section class="flex items-center gap-4">'),
    et = _('<div class="flex items-center"><div class=mr-4><label></label><i class="block w-2.5 h-2.5 rounded-full mt-2"></i></div><div class="flex-1 grid grid-cols-5 gap-2 justify-between">'),
    tt = _('<section class="mt-3 flex flex-col gap-4">'),
    at = _('<div class="flex items-center"><div class=mr-4><label></label><i class="w-2.5 h-2.5 block rounded-full"></i></div><div class="flex-1 flex gap-2 justify-between">'),
    lt = _("<label>X"),
    rt = _('<div class="w-full mb-3 bg-layer3 rounded-lg py-4 px-3"><section class="text-primary text-xs font-extrabold flex items-center"><h2></h2><i class="block bg-primary w-0.5 h-4 mx-1"></i><h2>:</h2><h2>@<label class=text-brand></label></h2></section><section class="mt-3 flex flex-col gap-2"><p class="text-secondary text-sm font-semibold"></p></section><section class="mt-3 flex items-center"><div class="flex flex-col ml-1"><label> 0.5USD</label><label> 100USD</label></div></section><section class=mt-3><label> <!> USD</label><div class="flex gap-1 mt-1.5">'),
    nt = _("<div>");
const K = ["#9F611C", "#326AA6", "#9B220F", "#5C8329"],
    Q = ["rgba(159,97,28,0.8)", "rgba(50,106,166,0.8)", "rgba(155,34,15,0.8)", "rgba(92,131,41,0.8)"],
    st = ["A", "B", "C", "D"],
    be = [0, 1, 2, 3, 4],
    ge = [5, 6, 7, 8, 9],
    fe = [1, 3, 5, 7, 9],
    xe = [0, 2, 4, 6, 8],
    it = [1, 2, 3],
    dt = [4, 5, 6],
    ct = [7, 8, 9];

function ot(e) {
    switch (e) {
        case "Small":
            return be;
        case "Big":
            return ge;
        case "Odd":
            return fe;
        case "Even":
            return xe;
        case "Fish":
            return it;
        case "Prawn":
            return dt;
        case "Crab":
            return ct;
        default:
            return []
    }
}

function zt(e) {
    const [t, r] = O(0), [c, l] = O(0), n = Xe(), [d, s] = O(e.data.groupList[0]), u = j(() => [
        [h("1st Prize"), e.data.indiaKeralaPrevResult.firstPrize.split(",")],
        [h("2st Prize"), e.data.indiaKeralaPrevResult.secondPrize.split(",")]
    ]), o = j(() => {
        var m;
        return (m = d()) == null ? void 0 : m.marketList[t()]
    }), x = j(() => {
        var m, g;
        return ((g = (m = o().specMap) == null ? void 0 : m.group) == null ? void 0 : g.split(",")) || []
    }), D = j(() => o().oddsList), f = m => {
        let g = C.state.betIndia.karala;
        const v = o().name,
            p = d().marketName,
            P = g.findIndex(S => S.selectedData.id === m.id && S.selectedDetailData.prizeName === v);
        if (P > -1) g = g.filter((S, I) => I !== P);
        else {
            const S = {
                    draws: 1,
                    discount: 0,
                    betAmount: .5,
                    betsNumber: 1,
                    normalBallList: [m.name],
                    bonusBallList: [],
                    prizeName: v,
                    marketName: p,
                    name: m.name
                },
                I = {
                    selectedData: m,
                    marketId: o().marketId,
                    selectedDetailData: S
                };
            g = [...g, I]
        }
        C.setState("betIndia", U(S => {
            S.karala = g
        }))
    }, $ = m => {
        let g = C.state.betIndia.karala;
        const v = o().name,
            p = d().marketName,
            P = m.map(I => {
                const L = {
                    draws: 1,
                    discount: 0,
                    betAmount: .5,
                    betsNumber: 1,
                    normalBallList: I.map(A => A.name),
                    bonusBallList: [],
                    prizeName: v,
                    marketName: p,
                    name: I.map(A => A.name).join("")
                };
                return {
                    betUid: Ie(),
                    selectedData: o().oddsList[0],
                    marketId: o().marketId,
                    selectedDetailData: L,
                    type: Le.XPlay
                }
            });
        g = [...g.filter(I => !P.find(w => w.marketId === I.marketId && w.selectedDetailData.prizeName === I.selectedDetailData.prizeName)), ...P], C.setState("betIndia", U(I => {
            I.karala = g
        }))
    }, k = () => {
        const g = C.state.betIndia.karala.filter(v => !(v.marketId === o().marketId && d().marketList[t()].name === v.selectedDetailData.prizeName));
        C.setState("betIndia", "karala", g), ht.includes(d().marketName) && l(c() + 1)
    }, y = j(() => n().lotteryInfo.status === 1);
    return (() => {
        var m = Ue(),
            g = m.firstChild,
            v = g.firstChild,
            p = v.firstChild,
            P = p.nextSibling,
            S = v.nextSibling,
            I = S.nextSibling,
            w = g.nextSibling,
            L = w.firstChild,
            N = L.nextSibling,
            A = N.nextSibling,
            E = A.firstChild;
        return a(p, () => h("Previous Result:")), a(P, () => h("Draw No."), null), a(P, () => e.data.indiaKeralaPrevResult.drawEventId, null), a(S, i(R, {
            each: ["A", "B", "C", "D"],
            children: (b, B) => i(z, {
                class: "text-alw_white text-sm font-extrabold w-6 h-6 rounded-full",
                get style() {
                    return {
                        color: K[B]
                    }
                },
                get children() {
                    return b()
                }
            })
        })), a(I, i(X, {
            get each() {
                return u()
            },
            children: (b, B) => (() => {
                var G = qe(),
                    Y = G.firstChild,
                    De = Y.firstChild;
                return a(Y, () => b[0], De), a(G, i(ut, {
                    get data() {
                        return b[1]
                    },
                    get marketName() {
                        return d().marketName
                    }
                }), null), M(() => ce(G, T("flex justify-between items-center", B() === 0 && "mb-1.5"))), G
            })()
        })), a(L, () => h("Choose your lottery")), a(N, i(X, {
            get each() {
                return e.data.groupList
            },
            children: b => i(z, {
                onclick: () => {
                    s(b), C.setState("currentMarketName", b.marketName)
                },
                get class() {
                    return T("px-4 h-10", b.marketName === d().marketName && "bg-tab_nopadding")
                },
                get children() {
                    return b.marketName
                }
            })
        })), a(E, i(z, {
            onclick: () => r(0),
            get class() {
                return T("px-4 text-secondary text-sm font-extrabold h-8 rounded-full", t() === 0 && "bg-tab_nopadding")
            },
            get children() {
                return h("1st-prize")
            }
        }), null), a(E, i(z, {
            onclick: () => r(1),
            get class() {
                return T("px-4 text-secondary text-sm font-extrabold h-8 rounded-full", t() === 1 && "bg-tab_nopadding")
            },
            get children() {
                return h("2st-prize")
            }
        }), null), a(A, i(z, {
            class: "h-8",
            get children() {
                return [i(F, {
                    name: "Delete",
                    class: "w-4 fill-secondary"
                }), (() => {
                    var b = Te();
                    return b.$$click = k, a(b, () => h("Clear All")), b
                })()]
            }
        }), null), a(w, i(Se, {
            get children() {
                return [i(q, {
                    get when() {
                        return d().marketName === "TwoSide"
                    },
                    get children() {
                        return i(mt, {
                            get drawGroup() {
                                return x()
                            },
                            get oddsList() {
                                return D()
                            },
                            onBet: f,
                            get prizeName() {
                                return o().name
                            },
                            get marketId() {
                                return o().marketId
                            }
                        })
                    }
                }), i(q, {
                    get when() {
                        return d().marketName === "FishPrawnCrab"
                    },
                    get children() {
                        return i(bt, {
                            get drawGroup() {
                                return x()
                            },
                            get oddsList() {
                                return D()
                            },
                            onBet: f,
                            get prizeName() {
                                return o().name
                            },
                            get marketId() {
                                return o().marketId
                            }
                        })
                    }
                }), i(q, {
                    get when() {
                        return d().marketName === "1Digit"
                    },
                    get children() {
                        return i(gt, {
                            onBet: f,
                            get oddsList() {
                                return D()
                            },
                            get prizeName() {
                                return o().name
                            },
                            get marketId() {
                                return o().marketId
                            }
                        })
                    }
                }), i(q, {
                    get when() {
                        return "2D,3D,4D,2X,3X,4X".split(",").includes(d().marketName)
                    },
                    get children() {
                        return i(ft, {
                            get marketId() {
                                return o().marketId
                            },
                            get drawGroup() {
                                return x()
                            },
                            get oddsList() {
                                return D()
                            },
                            onBet: $,
                            get marketData() {
                                return o()
                            },
                            get clear() {
                                return c()
                            }
                        })
                    }
                })]
            }
        }), null), M(b => {
            var B = y() ? "none" : "auto",
                G = y() ? "grayscale(50%)" : "initial";
            return B !== b.e && ((b.e = B) != null ? m.style.setProperty("pointer-events", B) : m.style.removeProperty("pointer-events")), G !== b.t && ((b.t = G) != null ? m.style.setProperty("filter", G) : m.style.removeProperty("filter")), b
        }, {
            e: void 0,
            t: void 0
        }), m
    })()
}
const ut = e => {
        const t = j(() => e.data.length),
            r = (c, l) => {
                let n = .5;
                switch (c) {
                    case "TwoSide":
                        n = l >= 0 ? 1 : .5;
                        break;
                    case "FishPrawnCrab":
                        n = l >= 3 ? 1 : .5;
                        break;
                    case "1Digit":
                        n = l >= 2 ? 1 : .5;
                        break;
                    case "2D":
                        n = l >= 2 ? 1 : .5;
                        break;
                    case "3D":
                        n = l >= 1 ? 1 : .5;
                        break;
                    case "4D":
                        n = l >= 0 ? 1 : .5;
                        break;
                    case "2X":
                        n = l >= 2 ? 1 : .5;
                        break;
                    case "3X":
                        n = l >= 1 ? 1 : .5;
                        break;
                    case "4X":
                        n = l >= 0 ? 1 : .5;
                        break
                }
                return n
            };
        return (() => {
            var c = We();
            return a(c, i(X, {
                get each() {
                    return e.data
                },
                children: (l, n) => {
                    const d = "center text-alw_white text-sm font-extrabold w-6 h-6 leading-6 rounded-full";
                    let s = Be.darken ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)";
                    const u = 4 - t() + n();
                    return u >= 0 && (s = Q[u]), (() => {
                        var o = me();
                        return s != null ? o.style.setProperty("background-color", s) : o.style.removeProperty("background-color"), a(o, l), M(x => {
                            var D = T(d, s),
                                f = r(e.marketName, u);
                            return D !== x.e && ce(o, x.e = D), f !== x.t && ((x.t = f) != null ? o.style.setProperty("opacity", f) : o.style.removeProperty("opacity")), x
                        }, {
                            e: void 0,
                            t: void 0
                        }), o
                    })()
                }
            })), c
        })()
    },
    mt = e => (() => {
        var t = Je(),
            r = t.firstChild,
            c = r.firstChild,
            l = c.firstChild,
            n = l.firstChild,
            d = n.firstChild,
            s = d.nextSibling,
            u = n.nextSibling,
            o = u.firstChild,
            x = o.nextSibling,
            D = c.nextSibling,
            f = D.firstChild,
            $ = f.firstChild,
            k = $.nextSibling,
            y = f.nextSibling,
            m = y.firstChild,
            g = m.nextSibling;
        return a(c, i(F, {
            name: "Attention",
            class: "w-4 h-4 mr-2 fill-[#B3BEC1]"
        }), l), a(d, () => h("Big:")), a(s, () => ge.toString()), a(o, () => h("Odd:")), a(x, () => fe.toString()), a($, () => h("Small:")), a(k, () => be.toString()), a(m, () => h("Even:")), a(g, () => xe.toString()), a(t, i(he, {
            get drawGroup() {
                return e.drawGroup
            },
            get oddsList() {
                return e.oddsList
            },
            get onBet() {
                return e.onBet
            },
            get prizeName() {
                return e.prizeName
            },
            get marketId() {
                return e.marketId
            }
        }), null), t
    })(),
    bt = e => (() => {
        var t = He(),
            r = t.firstChild,
            c = r.firstChild,
            l = c.firstChild,
            n = l.firstChild,
            d = l.nextSibling,
            s = d.nextSibling,
            u = s.firstChild,
            o = s.nextSibling,
            x = o.nextSibling,
            D = x.firstChild;
        return a(c, i(F, {
            name: "Attention",
            class: "w-4 h-4 mr-2 fill-[#B3BEC1]"
        }), l), a(n, () => h("Fish:")), a(u, () => h("Prawn:")), a(D, () => h("Crab:")), a(t, i(he, {
            get drawGroup() {
                return e.drawGroup
            },
            get oddsList() {
                return e.oddsList
            },
            get onBet() {
                return e.onBet
            },
            get prizeName() {
                return e.prizeName
            },
            get marketId() {
                return e.marketId
            }
        }), null), t
    })(),
    gt = e => (() => {
        var t = Qe(),
            r = t.firstChild,
            c = r.firstChild,
            l = r.nextSibling;
        return a(r, i(F, {
            name: "Attention",
            class: "w-4 h-4 mr-2 fill-[#B3BEC1]"
        }), c), a(c, () => h("Please select at least 1 number for every digit.")), a(l, i(R, {
            get each() {
                return e.oddsList
            },
            children: (n, d) => (() => {
                var s = Ve(),
                    u = s.firstChild,
                    o = u.firstChild;
                return s.$$click = () => e.onBet(n()), a(s, i(z, {
                    class: "w-9 h-9 leading-9 rounded-full border-2 center font-extrabold text-sm",
                    get style() {
                        return {
                            color: J(n().id, e.prizeName, e.marketId) ? "#FFF" : "inherit",
                            "border-color": J(n().id, e.prizeName, e.marketId) ? "#53B639" : "inherit",
                            "background-color": J(n().id, e.prizeName, e.marketId) ? "rgba(83, 182, 57, 0.80)" : "inherit"
                        }
                    },
                    get children() {
                        return n().name
                    }
                }), u), a(u, () => n().odds, o), s
            })()
        })), t
    })(),
    ft = e => {
        const [t, r] = O([]), [c, l] = O([]), [n, d] = O(e.clear);
        return ne(() => {
            e.marketId && (r([]), l([]))
        }), ne(() => {
            e.clear !== n() && (d(e.clear), r([]), l([]))
        }), (() => {
            var s = Ze(),
                u = s.firstChild,
                o = u.firstChild,
                x = u.nextSibling,
                D = x.nextSibling,
                f = D.firstChild,
                $ = f.firstChild,
                k = $.nextSibling,
                y = f.nextSibling;
            return a(u, i(F, {
                name: "Attention",
                class: "w-4 h-4 mr-2 fill-[#B3BEC1]"
            }), o), a(o, () => h("Please select at least 1 number for every digit.")), a(x, i(X, {
                get each() {
                    return e.drawGroup
                },
                children: (m, g) => (() => {
                    var v = et(),
                        p = v.firstChild,
                        P = p.firstChild,
                        S = P.nextSibling,
                        I = p.nextSibling;
                    return a(P, m), a(I, i(X, {
                        get each() {
                            return Array.from({
                                length: 10
                            }, (w, L) => ({
                                id: `${m}:${L}`,
                                name: L
                            }))
                        },
                        children: (w, L) => i(z, {
                            class: "flex flex-col border-2 h-14 w-full rounded-full",
                            get style() {
                                return {
                                    "border-color": K[4 - e.drawGroup.length + g()],
                                    "background-color": t().find(N => N.id === w.id && N.prizeName === e.marketData.name) ? Q[st.indexOf(m)] : "initial"
                                }
                            },
                            onclick: () => {
                                var b;
                                let N = [...t()];
                                const A = N.findIndex(B => B.id === w.id && B.prizeName === e.marketData.name);
                                A > -1 ? N.splice(A, 1) : N = N.concat(ae(te({}, w), {
                                    id: w.id,
                                    prizeName: e.marketData.name,
                                    groupName: m
                                })).sort((B, G) => B.groupName.localeCompare(G.groupName)), r(N);
                                const E = ie(N, "groupName");
                                if (Object.keys(E).length === ((b = e.drawGroup) == null ? void 0 : b.length)) {
                                    const B = Object.values(E),
                                        G = de(B);
                                    l(G)
                                } else l([])
                            },
                            get children() {
                                return w.name
                            }
                        })
                    })), M(w => (w = K[4 - e.drawGroup.length + g()]) != null ? S.style.setProperty("background-color", w) : S.style.removeProperty("background-color")), v
                })()
            })), a($, () => h("Bet Slip Count:")), a(k, () => c().length), a(y, i(F, {
                name: "Delete",
                class: "w-4 h-4 fill-secondary cursor-pointer",
                onClick: () => {
                    r([]), l([])
                }
            }), null), a(y, i(z, {
                class: "border-2 border-brand rounded-full px-6 cursor-pointer",
                get disabled() {
                    return c().length === 0
                },
                onclick: () => {
                    var g;
                    const m = ie(t(), "groupName");
                    if (Object.keys(m).length === ((g = e.drawGroup) == null ? void 0 : g.length)) {
                        const v = Object.values(m),
                            p = de(v);
                        e.onBet(p), r([]), l([])
                    }
                },
                get children() {
                    return [i(F, {
                        name: "Add",
                        class: "w-4 h-4 fill-brand"
                    }), (() => {
                        var m = Ye();
                        return a(m, () => h("Add")), m
                    })()]
                }
            }), null), s
        })()
    };

function he(e) {
    var c;
    const t = l => e.oddsList.filter(n => n.id.includes(`${l}:`)),
        r = ((c = e.drawGroup) == null ? void 0 : c.length) || 0;
    return (() => {
        var l = tt();
        return a(l, i(R, {
            get each() {
                return e.drawGroup
            },
            children: (n, d) => (() => {
                var s = at(),
                    u = s.firstChild,
                    o = u.firstChild,
                    x = o.nextSibling,
                    D = u.nextSibling;
                return a(o, n), a(D, i(R, {
                    get each() {
                        return t(n())
                    },
                    children: (f, $) => i(z, {
                        class: "flex flex-col border-2 h-14 w-full",
                        get style() {
                            return {
                                "border-color": K[4 - r + d],
                                "background-color": J(f().id, e.prizeName, e.marketId) ? K[4 - r + d] : "initial"
                            }
                        },
                        onclick: () => {
                            e.onBet(f())
                        },
                        get children() {
                            return [(() => {
                                var k = me();
                                return a(k, () => f().name), k
                            })(), (() => {
                                var k = lt(),
                                    y = k.firstChild;
                                return a(k, () => f().odds, y), k
                            })()]
                        }
                    })
                })), M(f => (f = K[4 - r + d]) != null ? x.style.setProperty("background-color", f) : x.style.removeProperty("background-color")), s
            })()
        })), l
    })()
}

function J(e, t, r) {
    return C.state.betIndia.karala.findIndex(l => l.selectedData.id === e && l.marketId === r && l.selectedDetailData.prizeName === t) > -1
}
const W = 100;

function xt(e) {
    const t = [{
            label: "+0.5",
            value: .5
        }, {
            label: "+5",
            value: 5
        }, {
            label: "+50",
            value: 50
        }, {
            label: h("max"),
            value: W
        }],
        r = d => {
            let s = C.state.betIndia.karala;
            const u = d.marketId,
                o = d.selectedData.id,
                x = d.selectedDetailData.prizeName,
                D = d.selectedDetailData.name,
                f = s.findIndex($ => $.marketId === u && $.selectedData.id === o && $.selectedDetailData.prizeName === x && $.selectedDetailData.name === D);
            f > -1 && (s = s.filter(($, k) => k !== f), C.setState("betIndia", "karala", s)), C.state.betIndia.karala.length + C.state.betIndia.state.selectedDetailData.normalBallList.length === 0 && Pe.pop()
        },
        c = (d, s, u) => {
            C.setState("betIndia", U(o => {
                const x = o.karala,
                    D = d.marketId,
                    f = d.selectedDetailData.prizeName,
                    $ = d.selectedData.id,
                    k = x.find(y => y.marketId === D && y.selectedDetailData.prizeName === f && y.selectedData.id === $ && y.selectedDetailData.name === d.selectedDetailData.name);
                if (k) {
                    const y = k.selectedDetailData.betAmount,
                        m = u ? y + s : s;
                    k.selectedDetailData.betAmount = m > W ? W : m
                }
                o.karala = x
            }))
        },
        l = j(() => V(e.data.marketId, e.data.selectedData.id)),
        n = j(() => Ae(e.data.selectedDetailData.betAmount, e.data.selectedData.odds));
    return (() => {
        var d = rt(),
            s = d.firstChild,
            u = s.firstChild,
            o = u.nextSibling,
            x = o.nextSibling,
            D = x.firstChild,
            f = x.nextSibling,
            $ = f.firstChild,
            k = $.nextSibling,
            y = s.nextSibling,
            m = y.firstChild,
            g = y.nextSibling,
            v = g.firstChild,
            p = v.firstChild,
            P = p.firstChild,
            S = p.nextSibling,
            I = S.firstChild,
            w = g.nextSibling,
            L = w.firstChild,
            N = L.firstChild,
            A = N.nextSibling;
        A.nextSibling;
        var E = L.nextSibling;
        return a(u, () => e.data.selectedDetailData.prizeName), a(x, () => e.data.selectedDetailData.marketName, D), a(s, i(X, {
            get each() {
                return e.data.selectedDetailData.normalBallList
            },
            children: (b, B) => i(z, {
                class: "px-2.5 mx-0.5 min-w-7 h-7 text-primary text-xs font-extrabold",
                get style() {
                    return {
                        background: l()[B()],
                        "border-radius": b.toString().length > 1 ? "8px" : "100%"
                    }
                },
                children: b
            })
        }), f), a(k, () => e.data.selectedData.odds), a(s, i(H, {
            get when() {
                return e.isShowDelete
            },
            get children() {
                return i(F, {
                    name: "Delete",
                    class: "w-5 h-5 fill-secondary ml-auto cursor-pointer",
                    onclick: () => {
                        e.onDelete ? e.onDelete(e.data) : r(e.data)
                    }
                })
            }
        }), null), a(m, () => h("Draws")), a(y, i(Oe, {}), null), a(g, i(pe, {
            class: "flex-1 w-24",
            type: "text",
            get value() {
                return e.data.selectedDetailData.betAmount
            },
            min: .5,
            max: W,
            onChange: b => {
                e.onBetAmount ? e.onBetAmount(e.data, Number(b)) : c(e.data, Number(b))
            }
        }), v), a(p, () => h("Min Bet:"), P), a(S, () => h("Max Bet:"), I), a(L, () => h("Est. winning:"), N), a(L, n, A), a(E, i(R, {
            each: t,
            children: b => i(z, {
                class: "h-10 max-w-20 flex-1 bg-button_bright rounded-lg",
                onclick: () => {
                    e.onBetAmount ? e.onBetAmount(e.data, b().value, !0) : c(e.data, b().value, !0)
                },
                get children() {
                    return b().label
                }
            })
        })), d
    })()
}

function At(e) {
    return (() => {
        var t = nt();
        return a(t, i(X, {
            get each() {
                return e.data
            },
            children: (r, c) => i(xt, {
                data: r,
                isShowDelete: !0
            })
        })), t
    })()
}

function ie(e, t) {
    return e.reduce((r, c) => {
        const l = String(c[t]);
        return r[l] = r[l] || [], r[l].push(c), r
    }, {})
}

function de(e) {
    return e.reduce((t, r) => t.flatMap(c => r.map(l => [...c, l])), [
        []
    ])
}
const ht = ["2D", "3D", "4D", "2X", "3X", "4X"],
    V = (e, t, r) => {
        const c = ["A", "B", "C", "D"],
            l = r ? K : Q;
        let n = l;
        switch (e.toString()) {
            case "2000201002":
            case "2000201003":
                const d = t.split(":")[0],
                    s = c.indexOf(d) > -1 ? c.indexOf(d) : 0;
                n = [l[s]];
                break;
            case "2000201004":
            case "2000201005":
                n = [l[3]];
                break;
            case "2000201006":
            case "2000201007":
                n = [l[3]];
                break;
            case "2000201008":
            case "2000201009":
                n = l.slice(-2);
                break;
            case "2000201010":
            case "2000201011":
                n = l.slice(1);
                break;
            case "2000201012":
            case "2000201013":
                n = l;
                break;
            case "2000201014":
            case "2000201015":
                n = l.slice(-2);
                break;
            case "2000201016":
            case "2000201017":
                n = l.slice(1);
                break;
            case "2000201018":
            case "2000201019":
                n = l;
                break;
            default:
                return n
        }
        return n
    };
oe(["click"]);
var Dt = _('<i class="absolute center right-0 top-0 flex rounded-full w-4 h-4 bg-[#fff] dark:bg-[#323738]">'),
    kt = _('<div class="relative center h-9 p-3 text-primary_brand text-center text-sm font-extrabold rounded-full bg-no-repeat bg-[length:100%_100%]"><label>');

function yt(e) {
    return (() => {
        var t = kt(),
            r = t.firstChild;
        return a(r, () => e.num), a(t, i(H, {
            get when() {
                return e.onDelete
            },
            get children() {
                var c = Dt();
                return c.$$click = () => e.onDelete && e.onDelete(e.num), a(c, i(F, {
                    name: "Close",
                    class: "fill-[#B3BEC1] w-3 h-3"
                })), c
            }
        }), null), M(c => {
            var l = e.isDisabled ? .5 : 1,
                n = e.type === "jackpot" ? `url(${Me})` : e.type === "lose" ? `url(${Re})` : "radial-gradient(61.3% 65.96% at 50% 29.5%, #F6FFFD 0%, #BEDDD3 72.51%, #98C3B9 100%)";
            return l !== c.e && ((c.e = l) != null ? t.style.setProperty("opacity", l) : t.style.removeProperty("opacity")), n !== c.t && ((c.t = n) != null ? t.style.setProperty("background-image", n) : t.style.removeProperty("background-image")), c
        }, {
            e: void 0,
            t: void 0
        }), t
    })()
}

function Gt(e) {
    return i(X, {
        get each() {
            return e.balls
        },
        children: (t, r) => i(yt, {
            num: t
        })
    })
}

function jt(e) {
    return i(R, {
        get each() {
            return e.balls
        },
        children: (t, r) => [2000201002, 2000201004].indexOf(e.marketId || 0) > -1 ? i(z, {
            class: "flex flex-col border-2 h-10 rounded-lg",
            get style() {
                return {
                    "border-color": V(e.marketId || 0, t().toString(), !0)[0],
                    "background-color": V(e.marketId || 0, t().toString())[0]
                }
            },
            get children() {
                return [se(() => t()), " ", i(H, {
                    get when() {
                        return t().toString().split(":")[1]
                    },
                    get children() {
                        return ["(", se(() => ot(t().toString().split(":")[1]).toString()), ")"]
                    }
                })]
            }
        }) : i(z, {
            class: "flex flex-col border-2 w-10 h-10 rounded-full",
            get style() {
                return {
                    "border-color": K[4 - e.balls.length + r],
                    "background-color": Q[4 - e.balls.length + r]
                }
            },
            get children() {
                return t()
            }
        })
    })
}
var _t = (e => (e.nomal = "nomal", e.Jackpot = "jackpot", e.lose = "lose", e))(_t || {});
oe(["click"]);
export {
    _t as B, Lt as D, zt as I, K, ut as W, yt as a, jt as b, At as c, Oe as d, xt as e, Gt as f, W as m, Xe as u
};