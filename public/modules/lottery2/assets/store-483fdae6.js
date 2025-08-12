var st = Object.defineProperty,
    it = Object.defineProperties;
var ct = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var lt = Object.prototype.hasOwnProperty,
    ut = Object.prototype.propertyIsEnumerable;
var P = (t, e, r) => e in t ? st(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    y = (t, e) => {
        for (var r in e || (e = {})) lt.call(e, r) && P(t, r, e[r]);
        if (v)
            for (var r of v(e)) ut.call(e, r) && P(t, r, e[r]);
        return t
    },
    B = (t, e) => it(t, ct(e));
import {
    y as E,
    z as x
} from "./solid-js-2e2908f8.js";
import {
    c as ft,
    p as I
} from "./store-2ed2b91e.js";
import {
    i as bt
} from "./lottery-af48bec0.js";
import {
    B as M,
    I as dt
} from "./Detail.interface-808c1c29.js";
import {
    l as Y,
    h as gt,
    m as mt,
    o as pt,
    k as W,
    n as J,
    s as yt,
    p as It,
    q as Tt,
    U as C,
    a as S,
    r as A,
    j as Q,
    i as At,
    b as ht,
    S as Bt,
    g as St
} from "./_Uint8Array-7783c8b7.js";
import {
    g as jt,
    e as Dt
} from "./_MapCache-9c96b8d5.js";
import {
    i as j,
    r as $t,
    S as F,
    a as X
} from "./isObject-909534d5.js";
var N = Object.create,
    wt = function() {
        function t() {}
        return function(e) {
            if (!j(e)) return {};
            if (N) return N(e);
            t.prototype = e;
            var r = new t;
            return t.prototype = void 0, r
        }
    }();
const Ot = wt;

function Lt(t, e) {
    var r = -1,
        a = t.length;
    for (e || (e = Array(a)); ++r < a;) e[r] = t[r];
    return e
}
var vt = function() {
    try {
        var t = jt(Object, "defineProperty");
        return t({}, "", {}), t
    } catch (e) {}
}();
const U = vt;

function Pt(t, e) {
    for (var r = -1, a = t == null ? 0 : t.length; ++r < a && e(t[r], r, t) !== !1;);
    return t
}

function Z(t, e, r) {
    e == "__proto__" && U ? U(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : t[e] = r
}
var Et = Object.prototype,
    xt = Et.hasOwnProperty;

function V(t, e, r) {
    var a = t[e];
    (!(xt.call(t, e) && Dt(a, r)) || r === void 0 && !(e in t)) && Z(t, e, r)
}

function h(t, e, r, a) {
    var i = !r;
    r || (r = {});
    for (var c = -1, n = e.length; ++c < n;) {
        var s = e[c],
            l = a ? a(r[s], t[s], s, r, t) : void 0;
        l === void 0 && (l = t[s]), i ? Z(r, s, l) : V(r, s, l)
    }
    return r
}

function Mt(t) {
    var e = [];
    if (t != null)
        for (var r in Object(t)) e.push(r);
    return e
}
var Ct = Object.prototype,
    Ft = Ct.hasOwnProperty;

function Nt(t) {
    if (!j(t)) return Mt(t);
    var e = Y(t),
        r = [];
    for (var a in t) a == "constructor" && (e || !Ft.call(t, a)) || r.push(a);
    return r
}

function D(t) {
    return gt(t) ? mt(t, !0) : Nt(t)
}
var Ut = pt(Object.getPrototypeOf, Object);
const z = Ut;

function _t(t, e) {
    return t && h(e, W(e), t)
}

function Gt(t, e) {
    return t && h(e, D(e), t)
}
var tt = typeof exports == "object" && exports && !exports.nodeType && exports,
    _ = tt && typeof module == "object" && module && !module.nodeType && module,
    Kt = _ && _.exports === tt,
    G = Kt ? $t.Buffer : void 0,
    K = G ? G.allocUnsafe : void 0;

function qt(t, e) {
    if (e) return t.slice();
    var r = t.length,
        a = K ? K(r) : new t.constructor(r);
    return t.copy(a), a
}

function Rt(t, e) {
    return h(t, J(t), e)
}
var kt = Object.getOwnPropertySymbols,
    Ht = kt ? function(t) {
        for (var e = []; t;) It(e, J(t)), t = z(t);
        return e
    } : yt;
const et = Ht;

function Yt(t, e) {
    return h(t, et(t), e)
}

function Wt(t) {
    return Tt(t, D, et)
}
var Jt = Object.prototype,
    Qt = Jt.hasOwnProperty;

function Xt(t) {
    var e = t.length,
        r = new t.constructor(e);
    return e && typeof t[0] == "string" && Qt.call(t, "index") && (r.index = t.index, r.input = t.input), r
}

function $(t) {
    var e = new t.constructor(t.byteLength);
    return new C(e).set(new C(t)), e
}

function Zt(t, e) {
    var r = e ? $(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.byteLength)
}
var Vt = /\w*$/;

function zt(t) {
    var e = new t.constructor(t.source, Vt.exec(t));
    return e.lastIndex = t.lastIndex, e
}
var q = F ? F.prototype : void 0,
    R = q ? q.valueOf : void 0;

function te(t) {
    return R ? Object(R.call(t)) : {}
}

function ee(t, e) {
    var r = e ? $(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.length)
}
var re = "[object Boolean]",
    ae = "[object Date]",
    ne = "[object Map]",
    oe = "[object Number]",
    se = "[object RegExp]",
    ie = "[object Set]",
    ce = "[object String]",
    le = "[object Symbol]",
    ue = "[object ArrayBuffer]",
    fe = "[object DataView]",
    be = "[object Float32Array]",
    de = "[object Float64Array]",
    ge = "[object Int8Array]",
    me = "[object Int16Array]",
    pe = "[object Int32Array]",
    ye = "[object Uint8Array]",
    Ie = "[object Uint8ClampedArray]",
    Te = "[object Uint16Array]",
    Ae = "[object Uint32Array]";

function he(t, e, r) {
    var a = t.constructor;
    switch (e) {
        case ue:
            return $(t);
        case re:
        case ae:
            return new a(+t);
        case fe:
            return Zt(t, r);
        case be:
        case de:
        case ge:
        case me:
        case pe:
        case ye:
        case Ie:
        case Te:
        case Ae:
            return ee(t, r);
        case ne:
            return new a;
        case oe:
        case ce:
            return new a(t);
        case se:
            return zt(t);
        case ie:
            return new a;
        case le:
            return te(t)
    }
}

function Be(t) {
    return typeof t.constructor == "function" && !Y(t) ? Ot(z(t)) : {}
}
var Se = "[object Map]";

function je(t) {
    return X(t) && S(t) == Se
}
var k = A && A.isMap,
    De = k ? Q(k) : je;
const $e = De;
var we = "[object Set]";

function Oe(t) {
    return X(t) && S(t) == we
}
var H = A && A.isSet,
    Le = H ? Q(H) : Oe;
const ve = Le;
var Pe = 1,
    Ee = 2,
    xe = 4,
    rt = "[object Arguments]",
    Me = "[object Array]",
    Ce = "[object Boolean]",
    Fe = "[object Date]",
    Ne = "[object Error]",
    at = "[object Function]",
    Ue = "[object GeneratorFunction]",
    _e = "[object Map]",
    Ge = "[object Number]",
    nt = "[object Object]",
    Ke = "[object RegExp]",
    qe = "[object Set]",
    Re = "[object String]",
    ke = "[object Symbol]",
    He = "[object WeakMap]",
    Ye = "[object ArrayBuffer]",
    We = "[object DataView]",
    Je = "[object Float32Array]",
    Qe = "[object Float64Array]",
    Xe = "[object Int8Array]",
    Ze = "[object Int16Array]",
    Ve = "[object Int32Array]",
    ze = "[object Uint8Array]",
    tr = "[object Uint8ClampedArray]",
    er = "[object Uint16Array]",
    rr = "[object Uint32Array]",
    o = {};
o[rt] = o[Me] = o[Ye] = o[We] = o[Ce] = o[Fe] = o[Je] = o[Qe] = o[Xe] = o[Ze] = o[Ve] = o[_e] = o[Ge] = o[nt] = o[Ke] = o[qe] = o[Re] = o[ke] = o[ze] = o[tr] = o[er] = o[rr] = !0;
o[Ne] = o[at] = o[He] = !1;

function T(t, e, r, a, i, c) {
    var n, s = e & Pe,
        l = e & Ee,
        u = e & xe;
    if (r && (n = i ? r(t, a, i, c) : r(t)), n !== void 0) return n;
    if (!j(t)) return t;
    var f = At(t);
    if (f) {
        if (n = Xt(t), !s) return Lt(t, n)
    } else {
        var b = S(t),
            w = b == at || b == Ue;
        if (ht(t)) return qt(t, s);
        if (b == nt || b == rt || w && !i) {
            if (n = l || w ? {} : Be(t), !s) return l ? Yt(t, Gt(n, t)) : Rt(t, _t(n, t))
        } else {
            if (!o[b]) return i ? t : {};
            n = he(t, b, s)
        }
    }
    c || (c = new Bt);
    var O = c.get(t);
    if (O) return O;
    c.set(t, n), ve(t) ? t.forEach(function(d) {
        n.add(T(d, e, r, d, t, c))
    }) : $e(t) && t.forEach(function(d, m) {
        n.set(m, T(d, e, r, m, t, c))
    });
    var ot = u ? l ? Wt : St : l ? D : W,
        L = f ? void 0 : ot(t);
    return Pt(L || t, function(d, m) {
        L && (m = d, d = t[m]), V(n, m, T(d, e, r, m, t, c))
    }), n
}
var ar = 1,
    nr = 4;

function g(t) {
    return T(t, ar | nr)
}
const p = {
    marketId: 0,
    selectedData: {
        id: "",
        name: "",
        odds: 0,
        result: 0
    },
    selectedDetailData: {
        name: "",
        draws: 1,
        discount: 0,
        betAmount: 10,
        betsNumber: 1,
        normalBallList: [],
        bonusBallList: []
    }
};

function or() {
    const [t, e] = ft({
        Betlist: [],
        BetItem: g(p),
        NormalBallsList: [],
        BonusBallsList: [],
        TotalDrawsList: [{
            label: "1 Draw",
            value: 1,
            discount: 0
        }],
        betBc: {
            id: "bc",
            lotteryList: [],
            ticketNum: 0
        },
        betSlipPositon: "7rem",
        isShowIndiaStateBalls: !1,
        currentMarketId: 0,
        betIndia: {
            state: g(p),
            karala: []
        }
    });
    return {
        state: t,
        setState: e,
        setBetItem(a, i, c) {
            e("BetItem", I(n => {
                const s = g(p.selectedDetailData);
                i === M.HkArea && (s.betAmount = 1), n.selectedDetailData = c || s, n.selectedData = a, n.marketId = i
            }))
        },
        addBetList(a, i, c) {
            let n = !1;
            const s = {
                id: E(),
                period: a,
                betItem: i || g(t.BetItem),
                totalDrawsList: g(t.TotalDrawsList),
                remove: !1,
                error: !1
            };
            return x(() => {
                e("Betlist", I(u => {
                    if (u.forEach(f => {
                            if (f.period.lotteryId === a.lotteryId && f.betItem.marketId === s.betItem.marketId && !bt(s.betItem.marketId) && s.betItem.marketId !== M.IndiaState) {
                                n = !0, f.betItem = g(s.betItem);
                                return
                            }
                        }), !n)
                        if (t.betIndia.karala.length) {
                            const f = t.betIndia.karala.map(b => B(y({}, s), {
                                id: E(),
                                betItem: b
                            }));
                            u.push(...f)
                        } else t.betIndia.state.marketId ? u.push(B(y({}, s), {
                            betItem: t.betIndia.state
                        })) : u.push(s)
                }));
                const l = g(p);
                c ? e("BetItem", I(u => {
                    u.selectedDetailData = l.selectedDetailData, dt.HK === a.lotteryId.toString() && (u.selectedDetailData.betAmount = 1)
                })) : (e("BetItem", l), e("betIndia", {
                    state: p,
                    karala: []
                }))
            }), n
        },
        quickPick(a, i) {
            const c = i === "normalBallList" ? t.NormalBallsList : t.BonusBallsList;
            e("BetItem", I(n => {
                const s = g(p).selectedDetailData;
                n.selectedDetailData[i] = ir(c, a), n.selectedDetailData.betsNumber = s.betsNumber
            }))
        },
        addBetBc(a) {
            let i = !1;
            const c = y({
                lotteryList: [],
                ticketNum: 0,
                id: "bc"
            }, a);
            return x(() => {
                e("betBc", c)
            }), i
        }
    }
}
const pr = or();
var sr = (t => (t.initPosition = "7rem", t.keralaPosition = "10.5rem", t))(sr || {});

function ir(t, e) {
    const r = [...t];
    for (let a = r.length - 1; a > 0; a--) {
        const i = Math.floor(Math.random() * (a + 1));
        [r[a], r[i]] = [r[i], r[a]]
    }
    return r.slice(0, e)
}
export {
    sr as I, p as i, pr as p
};