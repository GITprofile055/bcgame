import {
    e as ln,
    d as h,
    b as U,
    f as cn,
    c as I,
    g as H,
    s as K,
    i as M,
    t as P
} from "./solid-js-2e2908f8.js";
import {
    H as E,
    b as S,
    l as N,
    k as Z,
    S as gn,
    f as dn,
    m as q,
    I as pn
} from "./manifest-5fcb2c8d.js";
import {
    m as on,
    e as An,
    f as _n
} from "./apis-9bc5cda9.js";
import {
    t as mn,
    a as R
} from "./toString-9093e562.js";
import {
    i as _,
    U as X,
    g as Y,
    a as J,
    b as Q,
    S as L,
    c as yn,
    k as rn,
    d as wn,
    e as Pn,
    f as On,
    h as en,
    j as vn
} from "./_Uint8Array-7783c8b7.js";
import {
    i as x
} from "./toNumber-e58af95e.js";
import {
    M as En,
    e as Tn
} from "./_MapCache-9c96b8d5.js";
import {
    S as W,
    a as z,
    i as Ln
} from "./isObject-909534d5.js";

function tn(n) {
    return n
}
var xn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Cn = /^\w*$/;

function D(n, r) {
    if (_(n)) return !1;
    var e = typeof n;
    return e == "number" || e == "symbol" || e == "boolean" || n == null || x(n) ? !0 : Cn.test(n) || !xn.test(n) || r != null && n in Object(r)
}
var $n = 500;

function hn(n) {
    var r = on(n, function(t) {
            return e.size === $n && e.clear(), t
        }),
        e = r.cache;
    return r
}
var Mn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Sn = /\\(\\)?/g,
    Nn = hn(function(n) {
        var r = [];
        return n.charCodeAt(0) === 46 && r.push(""), n.replace(Mn, function(e, t, a, i) {
            r.push(a ? i.replace(Sn, "$1") : t || e)
        }), r
    });
const Rn = Nn;

function an(n, r) {
    return _(n) ? n : D(n, r) ? [n] : Rn(mn(n))
}
var bn = 1 / 0;

function $(n) {
    if (typeof n == "string" || x(n)) return n;
    var r = n + "";
    return r == "0" && 1 / n == -bn ? "-0" : r
}

function F(n, r) {
    r = an(r, n);
    for (var e = 0, t = r.length; n != null && e < t;) n = n[$(r[e++])];
    return e && e == t ? n : void 0
}

function Dn(n, r, e) {
    var t = n == null ? void 0 : F(n, r);
    return t === void 0 ? e : t
}
var Fn = "__lodash_hash_undefined__";

function Gn(n) {
    return this.__data__.set(n, Fn), this
}

function Bn(n) {
    return this.__data__.has(n)
}

function C(n) {
    var r = -1,
        e = n == null ? 0 : n.length;
    for (this.__data__ = new En; ++r < e;) this.add(n[r])
}
C.prototype.add = C.prototype.push = Gn;
C.prototype.has = Bn;

function Un(n, r) {
    for (var e = -1, t = n == null ? 0 : n.length; ++e < t;)
        if (r(n[e], e, n)) return !0;
    return !1
}

function In(n, r) {
    return n.has(r)
}
var Hn = 1,
    Kn = 2;

function un(n, r, e, t, a, i) {
    var u = e & Hn,
        s = n.length,
        l = r.length;
    if (s != l && !(u && l > s)) return !1;
    var g = i.get(n),
        o = i.get(r);
    if (g && o) return g == r && o == n;
    var c = -1,
        f = !0,
        A = e & Kn ? new C : void 0;
    for (i.set(n, r), i.set(r, n); ++c < s;) {
        var p = n[c],
            d = r[c];
        if (t) var m = u ? t(d, p, c, r, n, i) : t(p, d, c, n, r, i);
        if (m !== void 0) {
            if (m) continue;
            f = !1;
            break
        }
        if (A) {
            if (!Un(r, function(y, w) {
                    if (!In(A, w) && (p === y || a(p, y, e, t, i))) return A.push(w)
                })) {
                f = !1;
                break
            }
        } else if (!(p === d || a(p, d, e, t, i))) {
            f = !1;
            break
        }
    }
    return i.delete(n), i.delete(r), f
}

function Zn(n) {
    var r = -1,
        e = Array(n.size);
    return n.forEach(function(t, a) {
        e[++r] = [a, t]
    }), e
}

function qn(n) {
    var r = -1,
        e = Array(n.size);
    return n.forEach(function(t) {
        e[++r] = t
    }), e
}
var Xn = 1,
    Yn = 2,
    Jn = "[object Boolean]",
    Qn = "[object Date]",
    Wn = "[object Error]",
    zn = "[object Map]",
    Vn = "[object Number]",
    jn = "[object RegExp]",
    kn = "[object Set]",
    nr = "[object String]",
    rr = "[object Symbol]",
    er = "[object ArrayBuffer]",
    tr = "[object DataView]",
    V = W ? W.prototype : void 0,
    b = V ? V.valueOf : void 0;

function ir(n, r, e, t, a, i, u) {
    switch (e) {
        case tr:
            if (n.byteLength != r.byteLength || n.byteOffset != r.byteOffset) return !1;
            n = n.buffer, r = r.buffer;
        case er:
            return !(n.byteLength != r.byteLength || !i(new X(n), new X(r)));
        case Jn:
        case Qn:
        case Vn:
            return Tn(+n, +r);
        case Wn:
            return n.name == r.name && n.message == r.message;
        case jn:
        case nr:
            return n == r + "";
        case zn:
            var s = Zn;
        case kn:
            var l = t & Xn;
            if (s || (s = qn), n.size != r.size && !l) return !1;
            var g = u.get(n);
            if (g) return g == r;
            t |= Yn, u.set(n, r);
            var o = un(s(n), s(r), t, a, i, u);
            return u.delete(n), o;
        case rr:
            if (b) return b.call(n) == b.call(r)
    }
    return !1
}
var ar = 1,
    ur = Object.prototype,
    fr = ur.hasOwnProperty;

function sr(n, r, e, t, a, i) {
    var u = e & ar,
        s = Y(n),
        l = s.length,
        g = Y(r),
        o = g.length;
    if (l != o && !u) return !1;
    for (var c = l; c--;) {
        var f = s[c];
        if (!(u ? f in r : fr.call(r, f))) return !1
    }
    var A = i.get(n),
        p = i.get(r);
    if (A && p) return A == r && p == n;
    var d = !0;
    i.set(n, r), i.set(r, n);
    for (var m = u; ++c < l;) {
        f = s[c];
        var y = n[f],
            w = r[f];
        if (t) var B = u ? t(w, y, f, r, n, i) : t(y, w, f, n, r, i);
        if (!(B === void 0 ? y === w || a(y, w, e, t, i) : B)) {
            d = !1;
            break
        }
        m || (m = f == "constructor")
    }
    if (d && !m) {
        var O = n.constructor,
            v = r.constructor;
        O != v && "constructor" in n && "constructor" in r && !(typeof O == "function" && O instanceof O && typeof v == "function" && v instanceof v) && (d = !1)
    }
    return i.delete(n), i.delete(r), d
}
var lr = 1,
    j = "[object Arguments]",
    k = "[object Array]",
    T = "[object Object]",
    cr = Object.prototype,
    nn = cr.hasOwnProperty;

function gr(n, r, e, t, a, i) {
    var u = _(n),
        s = _(r),
        l = u ? k : J(n),
        g = s ? k : J(r);
    l = l == j ? T : l, g = g == j ? T : g;
    var o = l == T,
        c = g == T,
        f = l == g;
    if (f && Q(n)) {
        if (!Q(r)) return !1;
        u = !0, o = !1
    }
    if (f && !o) return i || (i = new L), u || yn(n) ? un(n, r, e, t, a, i) : ir(n, r, l, e, t, a, i);
    if (!(e & lr)) {
        var A = o && nn.call(n, "__wrapped__"),
            p = c && nn.call(r, "__wrapped__");
        if (A || p) {
            var d = A ? n.value() : n,
                m = p ? r.value() : r;
            return i || (i = new L), a(d, m, e, t, i)
        }
    }
    return f ? (i || (i = new L), sr(n, r, e, t, a, i)) : !1
}

function G(n, r, e, t, a) {
    return n === r ? !0 : n == null || r == null || !z(n) && !z(r) ? n !== n && r !== r : gr(n, r, e, t, G, a)
}
var dr = 1,
    pr = 2;

function or(n, r, e, t) {
    var a = e.length,
        i = a,
        u = !t;
    if (n == null) return !i;
    for (n = Object(n); a--;) {
        var s = e[a];
        if (u && s[2] ? s[1] !== n[s[0]] : !(s[0] in n)) return !1
    }
    for (; ++a < i;) {
        s = e[a];
        var l = s[0],
            g = n[l],
            o = s[1];
        if (u && s[2]) {
            if (g === void 0 && !(l in n)) return !1
        } else {
            var c = new L;
            if (t) var f = t(g, o, l, n, r, c);
            if (!(f === void 0 ? G(o, g, dr | pr, t, c) : f)) return !1
        }
    }
    return !0
}

function fn(n) {
    return n === n && !Ln(n)
}

function Ar(n) {
    for (var r = rn(n), e = r.length; e--;) {
        var t = r[e],
            a = n[t];
        r[e] = [t, a, fn(a)]
    }
    return r
}

function sn(n, r) {
    return function(e) {
        return e == null ? !1 : e[n] === r && (r !== void 0 || n in Object(e))
    }
}

function _r(n) {
    var r = Ar(n);
    return r.length == 1 && r[0][2] ? sn(r[0][0], r[0][1]) : function(e) {
        return e === n || or(e, n, r)
    }
}

function mr(n, r) {
    return n != null && r in Object(n)
}

function yr(n, r, e) {
    r = an(r, n);
    for (var t = -1, a = r.length, i = !1; ++t < a;) {
        var u = $(r[t]);
        if (!(i = n != null && e(n, u))) break;
        n = n[u]
    }
    return i || ++t != a ? i : (a = n == null ? 0 : n.length, !!a && wn(a) && Pn(u, a) && (_(n) || On(n)))
}

function wr(n, r) {
    return n != null && yr(n, r, mr)
}
var Pr = 1,
    Or = 2;

function vr(n, r) {
    return D(n) && fn(r) ? sn($(n), r) : function(e) {
        var t = Dn(e, n);
        return t === void 0 && t === r ? wr(e, n) : G(r, t, Pr | Or)
    }
}

function Er(n) {
    return function(r) {
        return r == null ? void 0 : r[n]
    }
}

function Tr(n) {
    return function(r) {
        return F(r, n)
    }
}

function Lr(n) {
    return D(n) ? Er($(n)) : Tr(n)
}

function xr(n) {
    return typeof n == "function" ? n : n == null ? tn : typeof n == "object" ? _(n) ? vr(n[0], n[1]) : _r(n) : Lr(n)
}

function Cr(n) {
    return function(r, e, t) {
        for (var a = -1, i = Object(r), u = t(r), s = u.length; s--;) {
            var l = u[n ? s : ++a];
            if (e(i[l], l, i) === !1) break
        }
        return r
    }
}
var $r = Cr();
const hr = $r;

function Mr(n, r) {
    return n && hr(n, r, rn)
}

function Sr(n, r) {
    return function(e, t) {
        if (e == null) return e;
        if (!en(e)) return n(e, t);
        for (var a = e.length, i = r ? a : -1, u = Object(e);
            (r ? i-- : ++i < a) && t(u[i], i, u) !== !1;);
        return e
    }
}
var Nr = Sr(Mr);
const Rr = Nr;

function br(n, r) {
    var e = -1,
        t = en(n) ? Array(n.length) : [];
    return Rr(n, function(a, i, u) {
        t[++e] = r(a, i, u)
    }), t
}

function Dr(n, r) {
    var e = n.length;
    for (n.sort(r); e--;) n[e] = n[e].value;
    return n
}

function Fr(n, r) {
    if (n !== r) {
        var e = n !== void 0,
            t = n === null,
            a = n === n,
            i = x(n),
            u = r !== void 0,
            s = r === null,
            l = r === r,
            g = x(r);
        if (!s && !g && !i && n > r || i && u && l && !s && !g || t && u && l || !e && l || !a) return 1;
        if (!t && !i && !g && n < r || g && e && a && !t && !i || s && e && a || !u && a || !l) return -1
    }
    return 0
}

function Gr(n, r, e) {
    for (var t = -1, a = n.criteria, i = r.criteria, u = a.length, s = e.length; ++t < u;) {
        var l = Fr(a[t], i[t]);
        if (l) {
            if (t >= s) return l;
            var g = e[t];
            return l * (g == "desc" ? -1 : 1)
        }
    }
    return n.index - r.index
}

function Br(n, r, e) {
    r.length ? r = R(r, function(i) {
        return _(i) ? function(u) {
            return F(u, i.length === 1 ? i[0] : i)
        } : i
    }) : r = [tn];
    var t = -1;
    r = R(r, vn(xr));
    var a = br(n, function(i, u, s) {
        var l = R(r, function(g) {
            return g(i)
        });
        return {
            criteria: l,
            index: ++t,
            value: i
        }
    });
    return Dr(a, function(i, u) {
        return Gr(i, u, e)
    })
}

function Ur(n, r, e, t) {
    return n == null ? [] : (_(r) || (r = r == null ? [] : [r]), e = t ? void 0 : e, _(e) || (e = e == null ? [] : [e]), Br(n, r, e))
}
var Ir = P('<img class="mr-1.5 flex h-6 w-6 flex-none">'),
    Hr = P('<div class="font-extrabold ellipsis w-0 flex-auto text-left">'),
    Kr = P('<img class="w-5 mr-2">'),
    Zr = P("<span class=font-extrabold>"),
    qr = P('<div class="flex-1 text-right mx-2 ellipsis text-xs">');

function kr(n) {
    const [r] = ln(An, {
        initialValue: Object.keys(E)
    }), e = h(() => {
        const c = Object.values(E).filter(d => d.display && r().includes(d.currencyName)),
            f = Object.values(E).filter(d => d.display && Number(d.generalAmount) > 0 && r().includes(d.currencyName)),
            A = S.login ? f : c;
        return Ur(A, [d => Z.amount2usd(d.generalAmount, d.currencyName).toNumber(), "sort"], ["desc", "desc"])
    }), [t, a] = U(e().find(c => c.currencyName === S.setting.currencyName) || e()[0] || E[S.setting.currencyName]), [i, u] = U({
        toCurrencyPrice: 0,
        fromCurrencyPrice: 1,
        expiredTime: 0
    });
    cn(() => {
        var c;
        (c = t()) != null && c.currencyName && _n(t().currencyName).then(u)
    });
    const s = h(() => new N(i().toCurrencyPrice || 0).div(new N(i().fromCurrencyPrice || 1))),
        l = h(() => new N(n.amount() * 10).mul(s())),
        g = () => {
            var c;
            return (c = t()) == null ? void 0 : c.generalAmount.lt(l())
        };
    return {
        selectCurrency: () => I(gn, {
            get class() {
                return dn("flex items-center bg-input_bright h-12 border border-solid  p-3 rounded-xl w-full", g() ? "border-error" : "border-input")
            },
            get value() {
                return t()
            },
            get options() {
                return e()
            },
            onChange: a,
            labelRender: c => [(() => {
                var f = Ir();
                return H(() => K(f, "src", q.coinIcon(c().currencyName))), f
            })(), (() => {
                var f = Hr();
                return M(f, () => Z.printCurrency(c().generalAmount, c().currencyName)), f
            })(), I(pn, {
                name: "Arrow",
                class: "w-4 -rotate-90 text-secondary"
            })],
            children: c => [(() => {
                var f = Kr();
                return H(() => K(f, "src", q.coinIcon(c().currencyName))), f
            })(), (() => {
                var f = Zr();
                return M(f, () => c().aliasCurrencyName), f
            })(), (() => {
                var f = qr();
                return M(f, () => {
                    var A, p;
                    return (p = (A = c()) == null ? void 0 : A.generalAmount) == null ? void 0 : p.val()
                }), f
            })()]
        }),
        amount: l,
        currency: t,
        isInsuAmount: g,
        swap: i,
        rate: s
    }
}
export {
    kr as c
};