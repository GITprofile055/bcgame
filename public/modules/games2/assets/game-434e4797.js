var Mo = Object.defineProperty,
    Fo = Object.defineProperties;
var qo = Object.getOwnPropertyDescriptors;
var Yt = Object.getOwnPropertySymbols;
var ve = Object.prototype.hasOwnProperty,
    we = Object.prototype.propertyIsEnumerable;
var he = (e, t, n) => t in e ? Mo(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    N = (e, t) => {
        for (var n in t || (t = {})) ve.call(t, n) && he(e, n, t[n]);
        if (Yt)
            for (var n of Yt(t)) we.call(t, n) && he(e, n, t[n]);
        return e
    },
    T = (e, t) => Fo(e, qo(t));
var Sn = (e, t) => {
    var n = {};
    for (var r in e) ve.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Yt)
        for (var r of Yt(e)) t.indexOf(r) < 0 && we.call(e, r) && (n[r] = e[r]);
    return n
};
var E = (e, t, n) => new Promise((r, o) => {
    var i = u => {
            try {
                s(n.next(u))
            } catch (l) {
                o(l)
            }
        },
        a = u => {
            try {
                s(n.throw(u))
            } catch (l) {
                o(l)
            }
        },
        s = u => u.done ? r(u.value) : Promise.resolve(u.value).then(i, a);
    s((n = n.apply(e, t)).next())
});
import {
    W as zo,
    A as gr,
    n as P,
    G as Go,
    v as An,
    C as Ro,
    F as yr,
    k as W,
    b as Qn,
    e as mt,
    j as Ko,
    ao as $,
    ap as hr,
    f as V,
    aq as C,
    D as ct,
    O as Rt,
    c as U,
    m as ot,
    o as z,
    X as ht,
    a0 as vt,
    Y as G,
    ar as Xn,
    as as mn,
    at as vr,
    au as wr,
    Z,
    av as Dt,
    aa as Jo,
    H as Ir,
    $ as Or,
    i as Sr,
    S as Wo,
    P as Ho,
    q as st
} from "./manifest-47857305.js";
import {
    b as Zn
} from "./router-5b68e988.js";
import {
    i as Ar,
    b as Ft,
    d as X,
    e as jr,
    f as Yo,
    g as Qo,
    t as te,
    h as Xo,
    j as Nr,
    k as $t,
    l as jn,
    u as Zo,
    B as ti,
    c as ni
} from "./SA27V5YJ-37d7d126.js";
import {
    b as Kt,
    c as wt,
    i as fn,
    h as Pr,
    j as ei,
    k as ne,
    l as ri,
    L as Dn,
    M as an,
    m as xr,
    t as Lt,
    S as sn,
    n as oi,
    o as jt,
    p as ii
} from "./amount-641aafec.js";
import {
    u as ai
} from "./user-20d68319.js";
import {
    c as si
} from "./utils-65805dbc.js";
import {
    _ as ui,
    m as pn,
    P as It,
    g as Ie,
    e as ci,
    f as kr,
    s as li,
    h as rt,
    i as Oe,
    j as di,
    D as mi,
    b as Tr,
    d as Se,
    k as fi
} from "./index-d927a8db.js";
import {
    S as Nn
} from "./config-66839ee1.js";
import {
    t as Pn
} from "./i18n-db65699e.js";
var pi = gr('<svg width=48 height=48 viewBox="0 0 48 48"fill=none xmlns=http://www.w3.org/2000/svg> <path d="M35.6049 37.3046C34.5491 37.3046 33.6946 36.4476 33.6946 35.3893C33.6946 34.331 34.5504 33.4728 35.6049 33.4728C36.6608 33.4728 37.5153 34.331 37.5153 35.3893C37.5153 36.4476 36.6595 37.3046 35.6049 37.3046ZM39.5429 31.5377C37.1362 29.3594 32.5906 25.1917 29.4788 22.333C30.9161 18.2098 29.9925 13.4419 26.704 10.1461C23.6415 7.07617 19.3046 6.06605 15.4 7.10705L15.1765 7.72201L21.4076 13.968L19.869 19.7237L14.1268 21.2661L7.787 14.9102L7.18685 15.13C6.01867 19.1174 7.00039 23.6049 10.1394 26.7501C13.418 30.0361 18.155 30.9672 22.2609 29.5422C25.032 32.5689 29.0712 36.9823 31.4792 39.62C33.5267 41.8613 37.2547 41.8934 39.706 39.3915C42.0683 36.9798 41.5953 33.3913 39.5442 31.5365L39.5429 31.5377Z"fill=#B1B9B9></path> ');
const bi = e => {
    return t = pi(), zo(t, e, !0, !0), t;
    var t
};
var gi = gr('<div class="flex flex-col"><div class="flex-1 p-4"><div class="text-center text-secondary text-sm"></div></div><div class="flex gap-3 p-4 border-layer3">');

function yi() {
    return P(Go, {
        get title() {
            return Pn("Under Maintenance")
        },
        get children() {
            var e = gi(),
                t = e.firstChild,
                n = t.firstChild,
                r = t.nextSibling;
            return An(t, P(bi, {
                class: "w-10 h-10 text-warning mx-auto mb-4"
            }), n), An(n, () => Pn("This game is currently unavailable. Please try other games.")), An(r, P(Ro, {
                type: "brand",
                class: "flex-1",
                onClick: () => yr.pop(),
                get children() {
                    return Pn("OK")
                }
            })), e
        }
    })
}

function bn(e) {
    return e
}
const En = Kt(wt, "WeakMap");
var Ae = Object.create;
const hi = function() {
    function e() {}
    return function(t) {
        if (!fn(t)) return {};
        if (Ae) return Ae(t);
        e.prototype = t;
        var n = new e;
        return e.prototype = void 0, n
    }
}();

function vi() {}

function wi(e, t) {
    var n = -1,
        r = e.length;
    for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
    return t
}
const je = function() {
    try {
        var e = Kt(Object, "defineProperty");
        return e({}, "", {}), e
    } catch (t) {}
}();

function Ii(e) {
    return e != e
}

function Oi(e, t) {
    return !!(e != null && e.length) && function(n, r, o) {
        return r == r ? function(i, a, s) {
            for (var u = s - 1, l = i.length; ++u < l;)
                if (i[u] === a) return u;
            return -1
        }(n, r, o) : function(i, a, s, u) {
            for (var l = i.length, c = s + (u ? 1 : -1); u ? c-- : ++c < l;)
                if (a(i[c], c, i)) return c;
            return -1
        }(n, Ii, o)
    }(e, t, 0) > -1
}

function Br(e, t, n) {
    t == "__proto__" && je ? je(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
var Si = Object.prototype.hasOwnProperty;

function _r(e, t, n) {
    var r = e[t];
    Si.call(e, t) && Pr(r, n) && (n !== void 0 || t in e) || Br(e, t, n)
}

function Qt(e, t, n, r) {
    var o = !n;
    n || (n = {});
    for (var i = -1, a = t.length; ++i < a;) {
        var s = t[i],
            u = r ? r(n[s], e[s], s, n, e) : void 0;
        u === void 0 && (u = e[s]), o ? Br(n, s, u) : _r(n, s, u)
    }
    return n
}

function Jt(e) {
    return e != null && Ar(e.length) && !ei(e)
}
var Ai = Object.prototype;

function gn(e) {
    var t = e && e.constructor;
    return e === (typeof t == "function" && t.prototype || Ai)
}
var Lr = typeof exports == "object" && exports && !exports.nodeType && exports,
    Ne = Lr && typeof module == "object" && module && !module.nodeType && module,
    Pe = Ne && Ne.exports === Lr ? wt.Buffer : void 0;
const qt = (Pe ? Pe.isBuffer : void 0) || function() {
    return !1
};
var _ = {};

function yn(e) {
    return function(t) {
        return e(t)
    }
}
_["[object Float32Array]"] = _["[object Float64Array]"] = _["[object Int8Array]"] = _["[object Int16Array]"] = _["[object Int32Array]"] = _["[object Uint8Array]"] = _["[object Uint8ClampedArray]"] = _["[object Uint16Array]"] = _["[object Uint32Array]"] = !0, _["[object Arguments]"] = _["[object Array]"] = _["[object ArrayBuffer]"] = _["[object Boolean]"] = _["[object DataView]"] = _["[object Date]"] = _["[object Error]"] = _["[object Function]"] = _["[object Map]"] = _["[object Number]"] = _["[object Object]"] = _["[object RegExp]"] = _["[object Set]"] = _["[object String]"] = _["[object WeakMap]"] = !1;
var Cr = typeof exports == "object" && exports && !exports.nodeType && exports,
    Ut = Cr && typeof module == "object" && module && !module.nodeType && module,
    xn = Ut && Ut.exports === Cr && ri.process;
const xt = function() {
    try {
        var e = Ut && Ut.require && Ut.require("util").types;
        return e || xn && xn.binding && xn.binding("util")
    } catch (t) {}
}();
var xe = xt && xt.isTypedArray;
const ee = xe ? yn(xe) : function(e) {
    return Ft(e) && Ar(e.length) && !!_[ne(e)]
};
var ji = Object.prototype.hasOwnProperty;

function Vr(e, t) {
    var n = X(e),
        r = !n && jr(e),
        o = !n && !r && qt(e),
        i = !n && !r && !o && ee(e),
        a = n || r || o || i,
        s = a ? function(c, p) {
            for (var b = -1, v = Array(c); ++b < c;) v[b] = p(b);
            return v
        }(e.length, String) : [],
        u = s.length;
    for (var l in e) !t && !ji.call(e, l) || a && (l == "length" || o && (l == "offset" || l == "parent") || i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Yo(l, u)) || s.push(l);
    return s
}

function Dr(e, t) {
    return function(n) {
        return e(t(n))
    }
}
const Ni = Dr(Object.keys, Object);
var Pi = Object.prototype.hasOwnProperty;

function Er(e) {
    if (!gn(e)) return Ni(e);
    var t = [];
    for (var n in Object(e)) Pi.call(e, n) && n != "constructor" && t.push(n);
    return t
}

function zt(e) {
    return Jt(e) ? Vr(e) : Er(e)
}
var xi = Object.prototype.hasOwnProperty;

function ki(e) {
    if (!fn(e)) return function(o) {
        var i = [];
        if (o != null)
            for (var a in Object(o)) i.push(a);
        return i
    }(e);
    var t = gn(e),
        n = [];
    for (var r in e)(r != "constructor" || !t && xi.call(e, r)) && n.push(r);
    return n
}

function $n(e) {
    return Jt(e) ? Vr(e, !0) : ki(e)
}

function re(e, t) {
    for (var n = 0, r = (t = Qo(t, e)).length; e != null && n < r;) e = e[te(t[n++])];
    return n && n == r ? e : void 0
}

function $r(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
    return e
}
const Ur = Dr(Object.getPrototypeOf, Object);

function Q(e) {
    var t = this.__data__ = new Dn(e);
    this.size = t.size
}
Q.prototype.clear = function() {
    this.__data__ = new Dn, this.size = 0
}, Q.prototype.delete = function(e) {
    var t = this.__data__,
        n = t.delete(e);
    return this.size = t.size, n
}, Q.prototype.get = function(e) {
    return this.__data__.get(e)
}, Q.prototype.has = function(e) {
    return this.__data__.has(e)
}, Q.prototype.set = function(e, t) {
    var n = this.__data__;
    if (n instanceof Dn) {
        var r = n.__data__;
        if (!an || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new xr(r)
    }
    return n.set(e, t), this.size = n.size, this
};
var Mr = typeof exports == "object" && exports && !exports.nodeType && exports,
    ke = Mr && typeof module == "object" && module && !module.nodeType && module,
    Te = ke && ke.exports === Mr ? wt.Buffer : void 0,
    Be = Te ? Te.allocUnsafe : void 0;

function Ti(e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = Be ? Be(n) : new e.constructor(n);
    return e.copy(r), r
}

function Fr() {
    return []
}
var Bi = Object.prototype.propertyIsEnumerable,
    _e = Object.getOwnPropertySymbols;
const oe = _e ? function(e) {
        return e == null ? [] : (e = Object(e), function(t, n) {
            for (var r = -1, o = t == null ? 0 : t.length, i = 0, a = []; ++r < o;) {
                var s = t[r];
                n(s, r, t) && (a[i++] = s)
            }
            return a
        }(_e(e), function(t) {
            return Bi.call(e, t)
        }))
    } : Fr,
    qr = Object.getOwnPropertySymbols ? function(e) {
        for (var t = []; e;) $r(t, oe(e)), e = Ur(e);
        return t
    } : Fr;

function zr(e, t, n) {
    var r = t(e);
    return X(e) ? r : $r(r, n(e))
}

function Un(e) {
    return zr(e, zt, oe)
}

function _i(e) {
    return zr(e, $n, qr)
}
const Mn = Kt(wt, "DataView"),
    Fn = Kt(wt, "Promise"),
    Nt = Kt(wt, "Set");
var Le = "[object Map]",
    Ce = "[object Promise]",
    Ve = "[object Set]",
    De = "[object WeakMap]",
    Ee = "[object DataView]",
    Li = Lt(Mn),
    Ci = Lt(an),
    Vi = Lt(Fn),
    Di = Lt(Nt),
    Ei = Lt(En),
    bt = ne;
(Mn && bt(new Mn(new ArrayBuffer(1))) != Ee || an && bt(new an) != Le || Fn && bt(Fn.resolve()) != Ce || Nt && bt(new Nt) != Ve || En && bt(new En) != De) && (bt = function(e) {
    var t = ne(e),
        n = t == "[object Object]" ? e.constructor : void 0,
        r = n ? Lt(n) : "";
    if (r) switch (r) {
        case Li:
            return Ee;
        case Ci:
            return Le;
        case Vi:
            return Ce;
        case Di:
            return Ve;
        case Ei:
            return De
    }
    return t
});
const kt = bt;
var $i = Object.prototype.hasOwnProperty;
const un = wt.Uint8Array;

function qn(e) {
    var t = new e.constructor(e.byteLength);
    return new un(t).set(new un(e)), t
}
var Ui = /\w*$/,
    $e = sn ? sn.prototype : void 0,
    Ue = $e ? $e.valueOf : void 0;

function Mi(e, t) {
    var n = t ? qn(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length)
}
var Fi = "[object Boolean]",
    qi = "[object Date]",
    zi = "[object Map]",
    Gi = "[object Number]",
    Ri = "[object RegExp]",
    Ki = "[object Set]",
    Ji = "[object String]",
    Wi = "[object Symbol]",
    Hi = "[object ArrayBuffer]",
    Yi = "[object DataView]",
    Qi = "[object Float32Array]",
    Xi = "[object Float64Array]",
    Zi = "[object Int8Array]",
    ta = "[object Int16Array]",
    na = "[object Int32Array]",
    ea = "[object Uint8Array]",
    ra = "[object Uint8ClampedArray]",
    oa = "[object Uint16Array]",
    ia = "[object Uint32Array]";

function aa(e, t, n) {
    var r, o, i, a = e.constructor;
    switch (t) {
        case Hi:
            return qn(e);
        case Fi:
        case qi:
            return new a(+e);
        case Yi:
            return function(s, u) {
                var l = u ? qn(s.buffer) : s.buffer;
                return new s.constructor(l, s.byteOffset, s.byteLength)
            }(e, n);
        case Qi:
        case Xi:
        case Zi:
        case ta:
        case na:
        case ea:
        case ra:
        case oa:
        case ia:
            return Mi(e, n);
        case zi:
            return new a;
        case Gi:
        case Ji:
            return new a(e);
        case Ri:
            return (i = new(o = e).constructor(o.source, Ui.exec(o))).lastIndex = o.lastIndex, i;
        case Ki:
            return new a;
        case Wi:
            return r = e, Ue ? Object(Ue.call(r)) : {}
    }
}

function sa(e) {
    return typeof e.constructor != "function" || gn(e) ? {} : hi(Ur(e))
}
var Me = xt && xt.isMap;
const ua = Me ? yn(Me) : function(e) {
    return Ft(e) && kt(e) == "[object Map]"
};
var Fe = xt && xt.isSet;
const ca = Fe ? yn(Fe) : function(e) {
    return Ft(e) && kt(e) == "[object Set]"
};
var la = 1,
    da = 2,
    ma = 4,
    Gr = "[object Arguments]",
    Rr = "[object Function]",
    fa = "[object GeneratorFunction]",
    Kr = "[object Object]",
    B = {};

function nn(e, t, n, r, o, i) {
    var a, s = t & la,
        u = t & da,
        l = t & ma;
    if (n && (a = o ? n(e, r, o, i) : n(e)), a !== void 0) return a;
    if (!fn(e)) return e;
    var c = X(e);
    if (c) {
        if (a = function(g) {
                var h = g.length,
                    m = new g.constructor(h);
                return h && typeof g[0] == "string" && $i.call(g, "index") && (m.index = g.index, m.input = g.input), m
            }(e), !s) return wi(e, a)
    } else {
        var p = kt(e),
            b = p == Rr || p == fa;
        if (qt(e)) return Ti(e, s);
        if (p == Kr || p == Gr || b && !o) {
            if (a = u || b ? {} : sa(e), !s) return u ? function(g, h) {
                return Qt(g, qr(g), h)
            }(e, function(g, h) {
                return g && Qt(h, $n(h), g)
            }(a, e)) : function(g, h) {
                return Qt(g, oe(g), h)
            }(e, function(g, h) {
                return g && Qt(h, zt(h), g)
            }(a, e))
        } else {
            if (!B[p]) return o ? e : {};
            a = aa(e, p, s)
        }
    }
    i || (i = new Q);
    var v = i.get(e);
    if (v) return v;
    i.set(e, a), ca(e) ? e.forEach(function(g) {
        a.add(nn(g, t, n, g, e, i))
    }) : ua(e) && e.forEach(function(g, h) {
        a.set(h, nn(g, t, n, h, e, i))
    });
    var I = c ? void 0 : (l ? u ? _i : Un : u ? $n : zt)(e);
    return function(g, h) {
        for (var m = -1, f = g == null ? 0 : g.length; ++m < f && h(g[m], m, g) !== !1;);
    }(I || e, function(g, h) {
        I && (g = e[h = g]), _r(a, h, nn(g, t, n, h, e, i))
    }), a
}
B[Gr] = B["[object Array]"] = B["[object ArrayBuffer]"] = B["[object DataView]"] = B["[object Boolean]"] = B["[object Date]"] = B["[object Float32Array]"] = B["[object Float64Array]"] = B["[object Int8Array]"] = B["[object Int16Array]"] = B["[object Int32Array]"] = B["[object Map]"] = B["[object Number]"] = B[Kr] = B["[object RegExp]"] = B["[object Set]"] = B["[object String]"] = B["[object Symbol]"] = B["[object Uint8Array]"] = B["[object Uint8ClampedArray]"] = B["[object Uint16Array]"] = B["[object Uint32Array]"] = !0, B["[object Error]"] = B[Rr] = B["[object WeakMap]"] = !1;
var pa = 1,
    ba = 4;

function ie(e) {
    return nn(e, pa | ba)
}

function Mt(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.__data__ = new xr; ++t < n;) this.add(e[t])
}

function ga(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e)) return !0;
    return !1
}

function Jr(e, t) {
    return e.has(t)
}
Mt.prototype.add = Mt.prototype.push = function(e) {
    return this.__data__.set(e, "__lodash_hash_undefined__"), this
}, Mt.prototype.has = function(e) {
    return this.__data__.has(e)
};
var ya = 1,
    ha = 2;

function qe(e, t, n, r, o, i) {
    var a = n & ya,
        s = e.length,
        u = t.length;
    if (s != u && !(a && u > s)) return !1;
    var l = i.get(e),
        c = i.get(t);
    if (l && c) return l == t && c == e;
    var p = -1,
        b = !0,
        v = n & ha ? new Mt : void 0;
    for (i.set(e, t), i.set(t, e); ++p < s;) {
        var I = e[p],
            g = t[p];
        if (r) var h = a ? r(g, I, p, t, e, i) : r(I, g, p, e, t, i);
        if (h !== void 0) {
            if (h) continue;
            b = !1;
            break
        }
        if (v) {
            if (!ga(t, function(m, f) {
                    if (!Jr(v, f) && (I === m || o(I, m, n, r, i))) return v.push(f)
                })) {
                b = !1;
                break
            }
        } else if (I !== g && !o(I, g, n, r, i)) {
            b = !1;
            break
        }
    }
    return i.delete(e), i.delete(t), b
}

function va(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach(function(r, o) {
        n[++t] = [o, r]
    }), n
}

function ae(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach(function(r) {
        n[++t] = r
    }), n
}
var wa = 1,
    Ia = 2,
    Oa = "[object Boolean]",
    Sa = "[object Date]",
    Aa = "[object Error]",
    ja = "[object Map]",
    Na = "[object Number]",
    Pa = "[object RegExp]",
    xa = "[object Set]",
    ka = "[object String]",
    Ta = "[object Symbol]",
    Ba = "[object ArrayBuffer]",
    _a = "[object DataView]",
    ze = sn ? sn.prototype : void 0,
    kn = ze ? ze.valueOf : void 0,
    La = 1,
    Ca = Object.prototype.hasOwnProperty,
    Va = 1,
    Ge = "[object Arguments]",
    Re = "[object Array]",
    Xt = "[object Object]",
    Ke = Object.prototype.hasOwnProperty;

function Da(e, t, n, r, o, i) {
    var a = X(e),
        s = X(t),
        u = a ? Re : kt(e),
        l = s ? Re : kt(t),
        c = (u = u == Ge ? Xt : u) == Xt,
        p = (l = l == Ge ? Xt : l) == Xt,
        b = u == l;
    if (b && qt(e)) {
        if (!qt(t)) return !1;
        a = !0, c = !1
    }
    if (b && !c) return i || (i = new Q), a || ee(e) ? qe(e, t, n, r, o, i) : function(m, f, w, S, j, A, x) {
        switch (w) {
            case _a:
                if (m.byteLength != f.byteLength || m.byteOffset != f.byteOffset) return !1;
                m = m.buffer, f = f.buffer;
            case Ba:
                return !(m.byteLength != f.byteLength || !A(new un(m), new un(f)));
            case Oa:
            case Sa:
            case Na:
                return Pr(+m, +f);
            case Aa:
                return m.name == f.name && m.message == f.message;
            case Pa:
            case ka:
                return m == f + "";
            case ja:
                var H = va;
            case xa:
                var ft = S & wa;
                if (H || (H = ae), m.size != f.size && !ft) return !1;
                var tt = x.get(m);
                if (tt) return tt == f;
                S |= Ia, x.set(m, f);
                var R = qe(H(m), H(f), S, j, A, x);
                return x.delete(m), R;
            case Ta:
                if (kn) return kn.call(m) == kn.call(f)
        }
        return !1
    }(e, t, u, n, r, o, i);
    if (!(n & Va)) {
        var v = c && Ke.call(e, "__wrapped__"),
            I = p && Ke.call(t, "__wrapped__");
        if (v || I) {
            var g = v ? e.value() : e,
                h = I ? t.value() : t;
            return i || (i = new Q), o(g, h, n, r, i)
        }
    }
    return !!b && (i || (i = new Q), function(m, f, w, S, j, A) {
        var x = w & La,
            H = Un(m),
            ft = H.length;
        if (ft != Un(f).length && !x) return !1;
        for (var tt = ft; tt--;) {
            var R = H[tt];
            if (!(x ? R in f : Ca.call(f, R))) return !1
        }
        var Ht = A.get(m),
            y = A.get(f);
        if (Ht && y) return Ht == f && y == m;
        var L = !0;
        A.set(m, f), A.set(f, m);
        for (var K = x; ++tt < ft;) {
            var J = m[R = H[tt]],
                Y = f[R];
            if (S) var nt = x ? S(Y, J, R, f, m, A) : S(J, Y, R, m, f, A);
            if (!(nt === void 0 ? J === Y || j(J, Y, w, S, A) : nt)) {
                L = !1;
                break
            }
            K || (K = R == "constructor")
        }
        if (L && !K) {
            var at = m.constructor,
                St = f.constructor;
            at == St || !("constructor" in m) || !("constructor" in f) || typeof at == "function" && at instanceof at && typeof St == "function" && St instanceof St || (L = !1)
        }
        return A.delete(m), A.delete(f), L
    }(e, t, n, r, o, i))
}

function se(e, t, n, r, o) {
    return e === t || (e == null || t == null || !Ft(e) && !Ft(t) ? e != e && t != t : Da(e, t, n, r, se, o))
}
var Ea = 1,
    $a = 2;

function Wr(e) {
    return e == e && !fn(e)
}

function Hr(e, t) {
    return function(n) {
        return n != null && n[e] === t && (t !== void 0 || e in Object(n))
    }
}

function Ua(e) {
    var t = function(n) {
        for (var r = zt(n), o = r.length; o--;) {
            var i = r[o],
                a = n[i];
            r[o] = [i, a, Wr(a)]
        }
        return r
    }(e);
    return t.length == 1 && t[0][2] ? Hr(t[0][0], t[0][1]) : function(n) {
        return n === e || function(r, o, i, a) {
            var s = i.length,
                u = s,
                l = !a;
            if (r == null) return !u;
            for (r = Object(r); s--;) {
                var c = i[s];
                if (l && c[2] ? c[1] !== r[c[0]] : !(c[0] in r)) return !1
            }
            for (; ++s < u;) {
                var p = (c = i[s])[0],
                    b = r[p],
                    v = c[1];
                if (l && c[2]) {
                    if (b === void 0 && !(p in r)) return !1
                } else {
                    var I = new Q;
                    if (a) var g = a(b, v, p, r, o, I);
                    if (!(g === void 0 ? se(v, b, Ea | $a, a, I) : g)) return !1
                }
            }
            return !0
        }(n, e, t)
    }
}

function Ma(e, t) {
    return e != null && t in Object(e)
}
var Fa, qa = 1,
    za = 2;

function Ga(e, t) {
    return Nr(e) && Wr(t) ? Hr(te(e), t) : function(n) {
        var r = function(o, i, a) {
            var s = o == null ? void 0 : re(o, i);
            return s === void 0 ? a : s
        }(n, e);
        return r === void 0 && r === t ? function(o, i) {
            return o != null && Xo(o, i, Ma)
        }(n, e) : se(t, r, qa | za)
    }
}

function Ra(e) {
    return Nr(e) ? (t = te(e), function(n) {
        return n == null ? void 0 : n[t]
    }) : function(n) {
        return function(r) {
            return re(r, n)
        }
    }(e);
    var t
}

function Yr(e) {
    return typeof e == "function" ? e : e == null ? bn : typeof e == "object" ? X(e) ? Ga(e[0], e[1]) : Ua(e) : Ra(e)
}
const Ka = function(e, t, n) {
    for (var r = -1, o = Object(e), i = n(e), a = i.length; a--;) {
        var s = i[Fa ? a : ++r];
        if (t(o[s], s, o) === !1) break
    }
    return e
};
var Ja = function(e, t) {
    return function(n, r) {
        if (n == null) return n;
        if (!Jt(n)) return e(n, r);
        for (var o = n.length, i = t ? o : -1, a = Object(n);
            (t ? i-- : ++i < o) && r(a[i], i, a) !== !1;);
        return n
    }
}(function(e, t) {
    return e && Ka(e, t, zt)
});
const Wa = Ja;

function Ha(e, t, n) {
    for (var r = -1, o = e == null ? 0 : e.length; ++r < o;)
        if (n(t, e[r])) return !0;
    return !1
}

function Ya(e, t) {
    var n = -1,
        r = Jt(e) ? Array(e.length) : [];
    return Wa(e, function(o, i, a) {
        r[++n] = t(o, i, a)
    }), r
}
var Qa = "[object Map]",
    Xa = "[object Set]",
    Za = Object.prototype.hasOwnProperty;

function Qr(e) {
    if (e == null) return !0;
    if (Jt(e) && (X(e) || typeof e == "string" || typeof e.splice == "function" || qt(e) || ee(e) || jr(e))) return !e.length;
    var t = kt(e);
    if (t == Qa || t == Xa) return !e.size;
    if (gn(e)) return !Er(e).length;
    for (var n in e)
        if (Za.call(e, n)) return !1;
    return !0
}

function ts(e, t) {
    if (e !== t) {
        var n = e !== void 0,
            r = e === null,
            o = e == e,
            i = $t(e),
            a = t !== void 0,
            s = t === null,
            u = t == t,
            l = $t(t);
        if (!s && !l && !i && e > t || i && a && u && !s && !l || r && a && u || !n && u || !o) return 1;
        if (!r && !i && !l && e < t || l && n && o && !r && !i || s && n && o || !a && o || !u) return -1
    }
    return 0
}

function ns(e, t, n) {
    t = t.length ? jn(t, function(o) {
        return X(o) ? function(i) {
            return re(i, o.length === 1 ? o[0] : o)
        } : o
    }) : [bn];
    var r = -1;
    return t = jn(t, yn(Yr)),
        function(o, i) {
            var a = o.length;
            for (o.sort(i); a--;) o[a] = o[a].value;
            return o
        }(Ya(e, function(o, i, a) {
            return {
                criteria: jn(t, function(s) {
                    return s(o)
                }),
                index: ++r,
                value: o
            }
        }), function(o, i) {
            return function(a, s, u) {
                for (var l = -1, c = a.criteria, p = s.criteria, b = c.length, v = u.length; ++l < b;) {
                    var I = ts(c[l], p[l]);
                    if (I) return l >= v ? I : I * (u[l] == "desc" ? -1 : 1)
                }
                return a.index - s.index
            }(o, i, n)
        })
}

function es(e, t, n, r) {
    return e == null ? [] : (X(t) || (t = t == null ? [] : [t]), X(n = r ? void 0 : n) || (n = n == null ? [] : [n]), ns(e, t, n))
}
var rs = 4294967294,
    os = Math.floor,
    is = Math.min,
    as = 2147483647;

function ss(e, t, n) {
    var r = 0,
        o = e == null ? r : e.length;
    if (typeof t == "number" && t == t && o <= as) {
        for (; r < o;) {
            var i = r + o >>> 1,
                a = e[i];
            a !== null && !$t(a) && (n ? a <= t : a < t) ? r = i + 1 : o = i
        }
        return o
    }
    return function(s, u, l, c) {
        var p = 0,
            b = s == null ? 0 : s.length;
        if (b === 0) return 0;
        for (var v = (u = l(u)) != u, I = u === null, g = $t(u), h = u === void 0; p < b;) {
            var m = os((p + b) / 2),
                f = l(s[m]),
                w = f !== void 0,
                S = f === null,
                j = f == f,
                A = $t(f);
            if (v) var x = c || j;
            else x = h ? j && (c || w) : I ? j && w && (c || !S) : g ? j && w && !S && (c || !A) : !S && !A && (c ? f <= u : f < u);
            x ? p = m + 1 : b = m
        }
        return is(b, rs)
    }(e, t, bn, n)
}

function Je(e, t) {
    return ss(e, t)
}

function We(e) {
    return e && e.length ? function(t, n) {
        for (var r, o = -1, i = t.length; ++o < i;) {
            var a = n(t[o]);
            a !== void 0 && (r = r === void 0 ? a : r + a)
        }
        return r
    }(e, bn) : 0
}
const us = Nt && 1 / ae(new Nt([, -0]))[1] == 1 / 0 ? function(e) {
    return new Nt(e)
} : vi;
var cs = 200;

function lt(e, t) {
    return e && e.length ? function(n, r, o) {
        var i = -1,
            a = Oi,
            s = n.length,
            u = !0,
            l = [],
            c = l;
        if (o) u = !1, a = Ha;
        else if (s >= cs) {
            var p = r ? null : us(n);
            if (p) return ae(p);
            u = !1, a = Jr, c = new Mt
        } else c = r ? [] : l;
        t: for (; ++i < s;) {
            var b = n[i],
                v = r ? r(b) : b;
            if (b = o || b !== 0 ? b : 0, u && v == v) {
                for (var I = c.length; I--;)
                    if (c[I] === v) continue t;
                r && c.push(v), l.push(b)
            } else a(c, v, o) || (c !== l && c.push(v), l.push(b))
        }
        return l
    }(e, Yr(t)) : []
}
const He = 7423,
    Ye = {
        thumbnail: "",
        iconThreeFour: "",
        fullName: "---",
        providerId: 0,
        providerName: "---",
        releaseTime: Date.now(),
        updateTime: 0,
        categoryId: 18,
        categoryName: "Original Casino",
        seoTitle: "",
        seoDescription: "",
        seoKeywords: "",
        tags: [],
        translatedTags: {},
        details: "---",
        isRestricted: 0,
        gameIdentity: {
            gameInfoId: 0,
            gameName: "---",
            gameUnique: "---",
            gameUrl: "---",
            socketNameSpace: "---",
            originalGameUnique: "---",
            gameChannel: "1"
        },
        gameUnique: "---",
        supportMobile: !0,
        supportDemo: !1,
        disabled: !1,
        previews: [],
        landscapePreviews: [],
        fiatList: ["USD"],
        providerInfo: {
            providerId: 0,
            logo: "",
            logoWhite: "",
            providerName: "---",
            totalGame: 0,
            introduction: "",
            foundTime: 0,
            officialWebsite: "",
            disabled: !1,
            tags: [],
            langSettings: [{
                language: "en",
                introduction: ""
            }]
        },
        slotsInfo: {
            stakeRange: null,
            maxWin: "0",
            subType: "---",
            rtpDes: 99,
            reelDesign: "",
            luckySpin: "",
            winWays: "",
            hitRate: "",
            volatility: ""
        },
        gameChannel: {
            gameChannel: "1",
            gameName: "--",
            gamePath: "--",
            gameSocketNameSpace: "--"
        }
    },
    Tn = new Map,
    ue = oi(function(e) {
        return E(this, null, function*() {
            if (Tn.has(e)) return Tn.get(e);
            const t = W().get(`/game/home/detail/?gameUrl=${e}&areaCode=${Qn.areaCode}`);
            Tn.set(e, t);
            try {
                const n = yield t;
                return Qe(n), n
            } catch (n) {
                n.code === He && yr.push(() => P(yi, {}));
                const r = T(N({}, Ye), {
                    gameIdentity: T(N({}, Ye.gameIdentity), {
                        gameUrl: e,
                        gameDisabled: n.code === He
                    })
                });
                return Qe(r), ue.cache.delete(e), r
            }
        })
    });

function gu() {
    const e = Zn();
    return mt(() => ({
        queryKey: ["/game/home/detail/", e.gameUnique],
        queryFn: ({
            queryKey: t
        }) => ue(t[1]),
        throwOnError: !1,
        staleTime: 1 / 0
    }))
}
const Qe = (() => {
    const e = {};
    return t => {
        var r, o;
        if (!t) return e;
        const {
            gameIdentity: n
        } = t;
        return e[n.gameUrl] ? e[n.gameUrl] = T(N({}, e[n.gameUrl]), {
            gameChannel: n.gameChannel,
            gameName: n.gameName,
            gamePath: n.gameUrl,
            gameSocketNameSpace: n.socketNameSpace,
            rtp: String(((r = t.slotsInfo) == null ? void 0 : r.rtpDes) || 99),
            gameDisabled: t.gameIdentity.gameDisabled
        }) : e[n.gameUrl] = {
            gameChannel: n.gameChannel,
            gameName: n.gameName,
            gamePath: n.gameUrl,
            gameSocketNameSpace: n.socketNameSpace,
            rtp: String(((o = t.slotsInfo) == null ? void 0 : o.rtpDes) || 99),
            gameDisabled: t.gameIdentity.gameDisabled
        }, e
    }
})();

function ls(t) {
    return E(this, arguments, function*({
        queryKey: e
    }) {
        const {
            areaCode: n,
            distinctId: r
        } = yield new Promise(o => {
            Ko.emit("get_device_info", o)
        });
        return (yield W().post("/game/home/rec/entry/", {
            sectionId: e[1],
            page: 1,
            gameUrl: e[2],
            areaCode: n,
            distinctId: r
        })) || {
            pageList: {
                list: []
            }
        }
    })
}

function yu() {
    const e = Zn(),
        t = mt(() => ({
            queryKey: ["/api/game/home/rec/entry/", "game_related", e.gameUnique],
            queryFn: ls
        }));
    return () => t.data
}
const ds = ["spades", "hearts", "clubs", "diamonds"],
    ms = ["♠", "♥", "♣", "♦"];

function hu(e) {
    return {
        point: e % 16,
        suit: ds[(240 & e) / 16 - 10]
    }
}

function Xe(e) {
    const t = " ,A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",");
    let n = (240 & e) / 16 - 10,
        r = ms[n],
        o = t[e % 16];
    return {
        style: n % 2 == 0 ? "black" : "red",
        suits: r,
        point: o,
        txt: `${r}${o}`
    }
}

function Ze(e, t) {
    const n = [];
    let r = jt.SHA256(t).toString(jt.enc.Hex);
    return e.forEach(o => {
        n.push({
            num: o,
            hash: r
        }), r = r.substring(1) + r.charAt(0)
    }), n.sort(function(o, i) {
        return o.hash < i.hash ? -1 : o.hash === i.hash ? 0 : 1
    }), n
}

function tr(e, t = "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6") {
    let n = function(o, i) {
            return jt.HmacSHA256(jt.enc.Hex.parse(o), i).toString(jt.enc.Hex)
        }(e, t),
        r = Ze([161, 180, 199, 218, 162, 205, 181, 200, 219, 163, 182, 220, 201, 177, 196, 215, 170, 178, 221, 197, 216, 171, 179, 198, 172, 217, 193, 212, 167, 186, 194, 173, 213, 168, 187, 195, 214, 188, 169, 209, 164, 183, 202, 210, 189, 165, 184, 203, 211, 166, 204, 185], n);
    return n = String(jt.SHA256(n)), r = Ze(r, n),
        function(o, i = 0) {
            const a = [o[i], o[i + 2]],
                s = [o[i + 1], o[i + 3]];
            return a.push(o[i + 4]), s.push(o[i + 5]), [...a, ...s]
        }(r.slice(0, 6).map(o => o.num).map(o => o.num))
}
var fs = (e => (e.manual = "manual", e.auto = "auto", e.advance = "advance", e))(fs || {}),
    en = (e => (e.normal = "normal", e.authFail = "authFail", e.unknownServerError = "unknownServerError", e))(en || {}),
    ps = (e => (e[e.pending = 0] = "pending", e[e.playing = 1] = "playing", e[e.guessing = 2] = "guessing", e[e.cashouting = 3] = "cashouting", e[e.end = 4] = "end", e))(ps || {});
const vu = 500,
    wu = 300,
    bs = 10,
    Iu = 20,
    Ou = 30,
    Su = 13,
    Au = 14,
    ju = 12,
    Nu = 10,
    Pu = 10,
    xu = 300,
    ku = 200,
    Tu = {
        a: "Half bet amount",
        s: "Double bet amount",
        space: "Make a bet"
    },
    Bu = "Averta Std";
var zn = function(e, t) {
    return zn = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(n, r) {
        n.__proto__ = r
    } || function(n, r) {
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
    }, zn(e, t)
};

function it(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function n() {
        this.constructor = e
    }
    zn(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n)
}

function gs(e, t, n, r) {
    return new(n || (n = Promise))(function(o, i) {
        function a(l) {
            try {
                u(r.next(l))
            } catch (c) {
                i(c)
            }
        }

        function s(l) {
            try {
                u(r.throw(l))
            } catch (c) {
                i(c)
            }
        }

        function u(l) {
            var c;
            l.done ? o(l.value) : (c = l.value, c instanceof n ? c : new n(function(p) {
                p(c)
            })).then(a, s)
        }
        u((r = r.apply(e, t || [])).next())
    })
}

function Xr(e, t) {
    var n, r, o, i, a = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }), i;

    function s(u) {
        return function(l) {
            return function(c) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                    if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                    switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                        case 0:
                        case 1:
                            o = c;
                            break;
                        case 4:
                            return a.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            a.label++, r = c[1], c = [0];
                            continue;
                        case 7:
                            c = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (o = a.trys, !((o = o.length > 0 && o[o.length - 1]) || c[0] !== 6 && c[0] !== 2)) {
                                a = 0;
                                continue
                            }
                            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
                                a.label = c[1];
                                break
                            }
                            if (c[0] === 6 && a.label < o[1]) {
                                a.label = o[1], o = c;
                                break
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2], a.ops.push(c);
                                break
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    c = t.call(e, a)
                } catch (p) {
                    c = [6, p], r = 0
                } finally {
                    n = o = 0
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                }
            }([u, l])
        }
    }
}

function Gt(e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        n = t && e[t],
        r = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && r >= e.length && (e = void 0), {
                value: e && e[r++],
                done: !e
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Tt(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var r, o, i = n.call(e),
        a = [];
    try {
        for (;
            (t === void 0 || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
    } catch (s) {
        o = {
            error: s
        }
    } finally {
        try {
            r && !r.done && (n = i.return) && n.call(i)
        } finally {
            if (o) throw o.error
        }
    }
    return a
}

function Bt(e, t, n) {
    if (n || arguments.length === 2)
        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
    return e.concat(r || Array.prototype.slice.call(t))
}

function Pt(e) {
    return this instanceof Pt ? (this.v = e, this) : new Pt(e)
}

function ys(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r, o = n.apply(e, t || []),
        i = [];
    return r = {}, a("next"), a("throw"), a("return", function(p) {
        return function(b) {
            return Promise.resolve(b).then(p, l)
        }
    }), r[Symbol.asyncIterator] = function() {
        return this
    }, r;

    function a(p, b) {
        o[p] && (r[p] = function(v) {
            return new Promise(function(I, g) {
                i.push([p, v, I, g]) > 1 || s(p, v)
            })
        }, b && (r[p] = b(r[p])))
    }

    function s(p, b) {
        try {
            (v = o[p](b)).value instanceof Pt ? Promise.resolve(v.value.v).then(u, l) : c(i[0][2], v)
        } catch (I) {
            c(i[0][3], I)
        }
        var v
    }

    function u(p) {
        s("next", p)
    }

    function l(p) {
        s("throw", p)
    }

    function c(p, b) {
        p(b), i.shift(), i.length && s(i[0][0], i[0][1])
    }
}

function hs(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, n = e[Symbol.asyncIterator];
    return n ? n.call(e) : (e = Gt(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
        return this
    }, t);

    function r(o) {
        t[o] = e[o] && function(i) {
            return new Promise(function(a, s) {
                (function(u, l, c, p) {
                    Promise.resolve(p).then(function(b) {
                        u({
                            value: b,
                            done: c
                        })
                    }, l)
                })(a, s, (i = e[o](i)).done, i.value)
            })
        }
    }
}

function D(e) {
    return typeof e == "function"
}

function Zr(e) {
    var t = e(function(n) {
        Error.call(n), n.stack = new Error().stack
    });
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
}
var Bn = Zr(function(e) {
    return function(t) {
        e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, r) {
            return r + 1 + ") " + n.toString()
        }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t
    }
});

function cn(e, t) {
    if (e) {
        var n = e.indexOf(t);
        0 <= n && e.splice(n, 1)
    }
}
var Wt = function() {
        function e(n) {
            this.initialTeardown = n, this.closed = !1, this._parentage = null, this._finalizers = null
        }
        var t;
        return e.prototype.unsubscribe = function() {
            var n, r, o, i, a;
            if (!this.closed) {
                this.closed = !0;
                var s = this._parentage;
                if (s)
                    if (this._parentage = null, Array.isArray(s)) try {
                        for (var u = Gt(s), l = u.next(); !l.done; l = u.next()) l.value.remove(this)
                    } catch (g) {
                        n = {
                            error: g
                        }
                    } finally {
                        try {
                            l && !l.done && (r = u.return) && r.call(u)
                        } finally {
                            if (n) throw n.error
                        }
                    } else s.remove(this);
                var c = this.initialTeardown;
                if (D(c)) try {
                    c()
                } catch (g) {
                    a = g instanceof Bn ? g.errors : [g]
                }
                var p = this._finalizers;
                if (p) {
                    this._finalizers = null;
                    try {
                        for (var b = Gt(p), v = b.next(); !v.done; v = b.next()) {
                            var I = v.value;
                            try {
                                nr(I)
                            } catch (g) {
                                a = a != null ? a : [], g instanceof Bn ? a = Bt(Bt([], Tt(a)), Tt(g.errors)) : a.push(g)
                            }
                        }
                    } catch (g) {
                        o = {
                            error: g
                        }
                    } finally {
                        try {
                            v && !v.done && (i = b.return) && i.call(b)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                }
                if (a) throw new Bn(a)
            }
        }, e.prototype.add = function(n) {
            var r;
            if (n && n !== this)
                if (this.closed) nr(n);
                else {
                    if (n instanceof e) {
                        if (n.closed || n._hasParent(this)) return;
                        n._addParent(this)
                    }(this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(n)
                }
        }, e.prototype._hasParent = function(n) {
            var r = this._parentage;
            return r === n || Array.isArray(r) && r.includes(n)
        }, e.prototype._addParent = function(n) {
            var r = this._parentage;
            this._parentage = Array.isArray(r) ? (r.push(n), r) : r ? [r, n] : n
        }, e.prototype._removeParent = function(n) {
            var r = this._parentage;
            r === n ? this._parentage = null : Array.isArray(r) && cn(r, n)
        }, e.prototype.remove = function(n) {
            var r = this._finalizers;
            r && cn(r, n), n instanceof e && n._removeParent(this)
        }, e.EMPTY = ((t = new e).closed = !0, t), e
    }(),
    to = Wt.EMPTY;

function no(e) {
    return e instanceof Wt || e && "closed" in e && D(e.remove) && D(e.add) && D(e.unsubscribe)
}

function nr(e) {
    D(e) ? e() : e.unsubscribe()
}
var eo = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    },
    Gn = {
        setTimeout: function(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            var o = Gn.delegate;
            return o != null && o.setTimeout ? o.setTimeout.apply(o, Bt([e, t], Tt(n))) : setTimeout.apply(void 0, Bt([e, t], Tt(n)))
        },
        clearTimeout: function(e) {
            var t = Gn.delegate;
            return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e)
        },
        delegate: void 0
    };

function ro(e) {
    Gn.setTimeout(function() {
        throw e
    })
}

function Rn() {}

function rn(e) {
    e()
}
var ce = function(e) {
        function t(n) {
            var r = e.call(this) || this;
            return r.isStopped = !1, n ? (r.destination = n, no(n) && n.add(r)) : r.destination = Is, r
        }
        return it(t, e), t.create = function(n, r, o) {
            return new Kn(n, r, o)
        }, t.prototype.next = function(n) {
            this.isStopped || this._next(n)
        }, t.prototype.error = function(n) {
            this.isStopped || (this.isStopped = !0, this._error(n))
        }, t.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0, this._complete())
        }, t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
        }, t.prototype._next = function(n) {
            this.destination.next(n)
        }, t.prototype._error = function(n) {
            try {
                this.destination.error(n)
            } finally {
                this.unsubscribe()
            }
        }, t.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }, t
    }(Wt),
    vs = Function.prototype.bind;

function _n(e, t) {
    return vs.call(e, t)
}
var ws = function() {
        function e(t) {
            this.partialObserver = t
        }
        return e.prototype.next = function(t) {
            var n = this.partialObserver;
            if (n.next) try {
                n.next(t)
            } catch (r) {
                Zt(r)
            }
        }, e.prototype.error = function(t) {
            var n = this.partialObserver;
            if (n.error) try {
                n.error(t)
            } catch (r) {
                Zt(r)
            } else Zt(t)
        }, e.prototype.complete = function() {
            var t = this.partialObserver;
            if (t.complete) try {
                t.complete()
            } catch (n) {
                Zt(n)
            }
        }, e
    }(),
    Kn = function(e) {
        function t(n, r, o) {
            var i, a, s = e.call(this) || this;
            return D(n) || !n ? i = {
                next: n != null ? n : void 0,
                error: r != null ? r : void 0,
                complete: o != null ? o : void 0
            } : s && eo.useDeprecatedNextContext ? ((a = Object.create(n)).unsubscribe = function() {
                return s.unsubscribe()
            }, i = {
                next: n.next && _n(n.next, a),
                error: n.error && _n(n.error, a),
                complete: n.complete && _n(n.complete, a)
            }) : i = n, s.destination = new ws(i), s
        }
        return it(t, e), t
    }(ce);

function Zt(e) {
    ro(e)
}
var Is = {
        closed: !0,
        next: Rn,
        error: function(e) {
            throw e
        },
        complete: Rn
    },
    le = typeof Symbol == "function" && Symbol.observable || "@@observable";

function oo(e) {
    return e
}
var F = function() {
    function e(t) {
        t && (this._subscribe = t)
    }
    return e.prototype.lift = function(t) {
        var n = new e;
        return n.source = this, n.operator = t, n
    }, e.prototype.subscribe = function(t, n, r) {
        var o, i = this,
            a = (o = t) && o instanceof ce || function(s) {
                return s && D(s.next) && D(s.error) && D(s.complete)
            }(o) && no(o) ? t : new Kn(t, n, r);
        return rn(function() {
            var s = i,
                u = s.operator,
                l = s.source;
            a.add(u ? u.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a))
        }), a
    }, e.prototype._trySubscribe = function(t) {
        try {
            return this._subscribe(t)
        } catch (n) {
            t.error(n)
        }
    }, e.prototype.forEach = function(t, n) {
        var r = this;
        return new(n = er(n))(function(o, i) {
            var a = new Kn({
                next: function(s) {
                    try {
                        t(s)
                    } catch (u) {
                        i(u), a.unsubscribe()
                    }
                },
                error: i,
                complete: o
            });
            r.subscribe(a)
        })
    }, e.prototype._subscribe = function(t) {
        var n;
        return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)
    }, e.prototype[le] = function() {
        return this
    }, e.prototype.pipe = function() {
        for (var t, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return ((t = n).length === 0 ? oo : t.length === 1 ? t[0] : function(o) {
            return t.reduce(function(i, a) {
                return a(i)
            }, o)
        })(this)
    }, e.prototype.toPromise = function(t) {
        var n = this;
        return new(t = er(t))(function(r, o) {
            var i;
            n.subscribe(function(a) {
                return i = a
            }, function(a) {
                return o(a)
            }, function() {
                return r(i)
            })
        })
    }, e.create = function(t) {
        return new e(t)
    }, e
}();

function er(e) {
    var t;
    return (t = e != null ? e : eo.Promise) !== null && t !== void 0 ? t : Promise
}

function Ot(e) {
    return function(t) {
        if (function(n) {
                return D(n == null ? void 0 : n.lift)
            }(t)) return t.lift(function(n) {
            try {
                return e(n, this)
            } catch (r) {
                this.error(r)
            }
        });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}

function gt(e, t, n, r, o) {
    return new Os(e, t, n, r, o)
}
var Os = function(e) {
        function t(n, r, o, i, a, s) {
            var u = e.call(this, n) || this;
            return u.onFinalize = a, u.shouldUnsubscribe = s, u._next = r ? function(l) {
                try {
                    r(l)
                } catch (c) {
                    n.error(c)
                }
            } : e.prototype._next, u._error = i ? function(l) {
                try {
                    i(l)
                } catch (c) {
                    n.error(c)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._error, u._complete = o ? function() {
                try {
                    o()
                } catch (l) {
                    n.error(l)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._complete, u
        }
        return it(t, e), t.prototype.unsubscribe = function() {
            var n;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var r = this.closed;
                e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this))
            }
        }, t
    }(ce),
    Ss = Zr(function(e) {
        return function() {
            e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
        }
    }),
    de = function(e) {
        function t() {
            var n = e.call(this) || this;
            return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n
        }
        return it(t, e), t.prototype.lift = function(n) {
            var r = new rr(this, this);
            return r.operator = n, r
        }, t.prototype._throwIfClosed = function() {
            if (this.closed) throw new Ss
        }, t.prototype.next = function(n) {
            var r = this;
            rn(function() {
                var o, i;
                if (r._throwIfClosed(), !r.isStopped) {
                    r.currentObservers || (r.currentObservers = Array.from(r.observers));
                    try {
                        for (var a = Gt(r.currentObservers), s = a.next(); !s.done; s = a.next()) s.value.next(n)
                    } catch (u) {
                        o = {
                            error: u
                        }
                    } finally {
                        try {
                            s && !s.done && (i = a.return) && i.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                }
            })
        }, t.prototype.error = function(n) {
            var r = this;
            rn(function() {
                if (r._throwIfClosed(), !r.isStopped) {
                    r.hasError = r.isStopped = !0, r.thrownError = n;
                    for (var o = r.observers; o.length;) o.shift().error(n)
                }
            })
        }, t.prototype.complete = function() {
            var n = this;
            rn(function() {
                if (n._throwIfClosed(), !n.isStopped) {
                    n.isStopped = !0;
                    for (var r = n.observers; r.length;) r.shift().complete()
                }
            })
        }, t.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
        }, Object.defineProperty(t.prototype, "observed", {
            get: function() {
                var n;
                return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype._trySubscribe = function(n) {
            return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n)
        }, t.prototype._subscribe = function(n) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n)
        }, t.prototype._innerSubscribe = function(n) {
            var r = this,
                o = this,
                i = o.hasError,
                a = o.isStopped,
                s = o.observers;
            return i || a ? to : (this.currentObservers = null, s.push(n), new Wt(function() {
                r.currentObservers = null, cn(s, n)
            }))
        }, t.prototype._checkFinalizedStatuses = function(n) {
            var r = this,
                o = r.hasError,
                i = r.thrownError,
                a = r.isStopped;
            o ? n.error(i) : a && n.complete()
        }, t.prototype.asObservable = function() {
            var n = new F;
            return n.source = this, n
        }, t.create = function(n, r) {
            return new rr(n, r)
        }, t
    }(F),
    rr = function(e) {
        function t(n, r) {
            var o = e.call(this) || this;
            return o.destination = n, o.source = r, o
        }
        return it(t, e), t.prototype.next = function(n) {
            var r, o;
            (o = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || o === void 0 || o.call(r, n)
        }, t.prototype.error = function(n) {
            var r, o;
            (o = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || o === void 0 || o.call(r, n)
        }, t.prototype.complete = function() {
            var n, r;
            (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n)
        }, t.prototype._subscribe = function(n) {
            var r, o;
            return (o = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && o !== void 0 ? o : to
        }, t
    }(de),
    M = function(e) {
        function t(n) {
            var r = e.call(this) || this;
            return r._value = n, r
        }
        return it(t, e), Object.defineProperty(t.prototype, "value", {
            get: function() {
                return this.getValue()
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype._subscribe = function(n) {
            var r = e.prototype._subscribe.call(this, n);
            return !r.closed && n.next(this._value), r
        }, t.prototype.getValue = function() {
            var n = this,
                r = n.hasError,
                o = n.thrownError,
                i = n._value;
            if (r) throw o;
            return this._throwIfClosed(), i
        }, t.prototype.next = function(n) {
            e.prototype.next.call(this, this._value = n)
        }, t
    }(de),
    io = {
        now: function() {
            return (io.delegate || Date).now()
        },
        delegate: void 0
    },
    As = function(e) {
        function t(n, r) {
            return e.call(this) || this
        }
        return it(t, e), t.prototype.schedule = function(n, r) {
            return this
        }, t
    }(Wt),
    ln = {
        setInterval: function(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            var o = ln.delegate;
            return o != null && o.setInterval ? o.setInterval.apply(o, Bt([e, t], Tt(n))) : setInterval.apply(void 0, Bt([e, t], Tt(n)))
        },
        clearInterval: function(e) {
            var t = ln.delegate;
            return ((t == null ? void 0 : t.clearInterval) || clearInterval)(e)
        },
        delegate: void 0
    },
    js = function(e) {
        function t(n, r) {
            var o = e.call(this, n, r) || this;
            return o.scheduler = n, o.work = r, o.pending = !1, o
        }
        return it(t, e), t.prototype.schedule = function(n, r) {
            var o;
            if (r === void 0 && (r = 0), this.closed) return this;
            this.state = n;
            var i = this.id,
                a = this.scheduler;
            return i != null && (this.id = this.recycleAsyncId(a, i, r)), this.pending = !0, this.delay = r, this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(a, this.id, r), this
        }, t.prototype.requestAsyncId = function(n, r, o) {
            return o === void 0 && (o = 0), ln.setInterval(n.flush.bind(n, this), o)
        }, t.prototype.recycleAsyncId = function(n, r, o) {
            if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1) return r;
            r != null && ln.clearInterval(r)
        }, t.prototype.execute = function(n, r) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var o = this._execute(n, r);
            if (o) return o;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, t.prototype._execute = function(n, r) {
            var o, i = !1;
            try {
                this.work(n)
            } catch (a) {
                i = !0, o = a || new Error("Scheduled action threw falsy error")
            }
            if (i) return this.unsubscribe(), o
        }, t.prototype.unsubscribe = function() {
            if (!this.closed) {
                var n = this.id,
                    r = this.scheduler,
                    o = r.actions;
                this.work = this.state = this.scheduler = null, this.pending = !1, cn(o, this), n != null && (this.id = this.recycleAsyncId(r, n, null)), this.delay = null, e.prototype.unsubscribe.call(this)
            }
        }, t
    }(As),
    or = function() {
        function e(t, n) {
            n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n
        }
        return e.prototype.schedule = function(t, n, r) {
            return n === void 0 && (n = 0), new this.schedulerActionCtor(this, t).schedule(r, n)
        }, e.now = io.now, e
    }(),
    ao = new(function(e) {
        function t(n, r) {
            r === void 0 && (r = or.now);
            var o = e.call(this, n, r) || this;
            return o.actions = [], o._active = !1, o
        }
        return it(t, e), t.prototype.flush = function(n) {
            var r = this.actions;
            if (this._active) r.push(n);
            else {
                var o;
                this._active = !0;
                do
                    if (o = n.execute(n.state, n.delay)) break; while (n = r.shift());
                if (this._active = !1, o) {
                    for (; n = r.shift();) n.unsubscribe();
                    throw o
                }
            }
        }, t
    }(or))(js),
    Ns = ao,
    Ps = new F(function(e) {
        return e.complete()
    });

function so(e) {
    return e && D(e.schedule)
}

function uo(e) {
    return e[e.length - 1]
}

function _u(e) {
    return D(uo(e)) ? e.pop() : void 0
}

function co(e) {
    return so(uo(e)) ? e.pop() : void 0
}
var lo = function(e) {
    return e && typeof e.length == "number" && typeof e != "function"
};

function mo(e) {
    return D(e == null ? void 0 : e.then)
}

function fo(e) {
    return D(e[le])
}

function po(e) {
    return Symbol.asyncIterator && D(e == null ? void 0 : e[Symbol.asyncIterator])
}

function bo(e) {
    return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
}
var go = typeof Symbol == "function" && Symbol.iterator ? Symbol.iterator : "@@iterator";

function yo(e) {
    return D(e == null ? void 0 : e[go])
}

function ho(e) {
    return ys(this, arguments, function() {
        var t, n, r;
        return Xr(this, function(o) {
            switch (o.label) {
                case 0:
                    t = e.getReader(), o.label = 1;
                case 1:
                    o.trys.push([1, , 9, 10]), o.label = 2;
                case 2:
                    return [4, Pt(t.read())];
                case 3:
                    return n = o.sent(), r = n.value, n.done ? [4, Pt(void 0)] : [3, 5];
                case 4:
                    return [2, o.sent()];
                case 5:
                    return [4, Pt(r)];
                case 6:
                    return [4, o.sent()];
                case 7:
                    return o.sent(), [3, 2];
                case 8:
                    return [3, 10];
                case 9:
                    return t.releaseLock(), [7];
                case 10:
                    return [2]
            }
        })
    })
}

function vo(e) {
    return D(e == null ? void 0 : e.getReader)
}

function _t(e) {
    if (e instanceof F) return e;
    if (e != null) {
        if (fo(e)) return r = e, new F(function(o) {
            var i = r[le]();
            if (D(i.subscribe)) return i.subscribe(o);
            throw new TypeError("Provided object does not correctly implement Symbol.observable")
        });
        if (lo(e)) return n = e, new F(function(o) {
            for (var i = 0; i < n.length && !o.closed; i++) o.next(n[i]);
            o.complete()
        });
        if (mo(e)) return function(o) {
            return new F(function(i) {
                o.then(function(a) {
                    i.closed || (i.next(a), i.complete())
                }, function(a) {
                    return i.error(a)
                }).then(null, ro)
            })
        }(e);
        if (po(e)) return ir(e);
        if (yo(e)) return t = e, new F(function(o) {
            var i, a;
            try {
                for (var s = Gt(t), u = s.next(); !u.done; u = s.next()) {
                    var l = u.value;
                    if (o.next(l), o.closed) return
                }
            } catch (c) {
                i = {
                    error: c
                }
            } finally {
                try {
                    u && !u.done && (a = s.return) && a.call(s)
                } finally {
                    if (i) throw i.error
                }
            }
            o.complete()
        });
        if (vo(e)) return ir(ho(e))
    }
    var t, n, r;
    throw bo(e)
}

function ir(e) {
    return new F(function(t) {
        (function(n, r) {
            var o, i, a, s;
            return gs(this, void 0, void 0, function() {
                var u, l;
                return Xr(this, function(c) {
                    switch (c.label) {
                        case 0:
                            c.trys.push([0, 5, 6, 11]), o = hs(n), c.label = 1;
                        case 1:
                            return [4, o.next()];
                        case 2:
                            if ((i = c.sent()).done) return [3, 4];
                            if (u = i.value, r.next(u), r.closed) return [2];
                            c.label = 3;
                        case 3:
                            return [3, 1];
                        case 4:
                            return [3, 11];
                        case 5:
                            return l = c.sent(), a = {
                                error: l
                            }, [3, 11];
                        case 6:
                            return c.trys.push([6, , 9, 10]), i && !i.done && (s = o.return) ? [4, s.call(o)] : [3, 8];
                        case 7:
                            c.sent(), c.label = 8;
                        case 8:
                            return [3, 10];
                        case 9:
                            if (a) throw a.error;
                            return [7];
                        case 10:
                            return [7];
                        case 11:
                            return r.complete(), [2]
                    }
                })
            })
        })(e, t).catch(function(n) {
            return t.error(n)
        })
    })
}

function dt(e, t, n, r, o) {
    r === void 0 && (r = 0), o === void 0 && (o = !1);
    var i = t.schedule(function() {
        n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe()
    }, r);
    if (e.add(i), !o) return i
}

function ar(e, t) {
    return t === void 0 && (t = 0), Ot(function(n, r) {
        n.subscribe(gt(r, function(o) {
            return dt(r, e, function() {
                return r.next(o)
            }, t)
        }, function() {
            return dt(r, e, function() {
                return r.complete()
            }, t)
        }, function(o) {
            return dt(r, e, function() {
                return r.error(o)
            }, t)
        }))
    })
}

function sr(e, t) {
    return t === void 0 && (t = 0), Ot(function(n, r) {
        r.add(e.schedule(function() {
            return n.subscribe(r)
        }, t))
    })
}

function ur(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new F(function(n) {
        dt(n, t, function() {
            var r = e[Symbol.asyncIterator]();
            dt(n, t, function() {
                r.next().then(function(o) {
                    o.done ? n.complete() : n.next(o.value)
                })
            }, 0, !0)
        })
    })
}

function xs(e, t) {
    if (e != null) {
        if (fo(e)) return function(n, r) {
            return _t(n).pipe(sr(r), ar(r))
        }(e, t);
        if (lo(e)) return function(n, r) {
            return new F(function(o) {
                var i = 0;
                return r.schedule(function() {
                    i === n.length ? o.complete() : (o.next(n[i++]), o.closed || this.schedule())
                })
            })
        }(e, t);
        if (mo(e)) return function(n, r) {
            return _t(n).pipe(sr(r), ar(r))
        }(e, t);
        if (po(e)) return ur(e, t);
        if (yo(e)) return function(n, r) {
            return new F(function(o) {
                var i;
                return dt(o, r, function() {
                        i = n[go](), dt(o, r, function() {
                            var a, s, u;
                            try {
                                s = (a = i.next()).value, u = a.done
                            } catch (l) {
                                return void o.error(l)
                            }
                            u ? o.complete() : o.next(s)
                        }, 0, !0)
                    }),
                    function() {
                        return D(i == null ? void 0 : i.return) && i.return()
                    }
            })
        }(e, t);
        if (vo(e)) return function(n, r) {
            return ur(ho(n), r)
        }(e, t)
    }
    throw bo(e)
}

function me(e, t) {
    return t ? xs(e, t) : _t(e)
}

function cr() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return me(e, co(e))
}

function wo(e, t) {
    return Ot(function(n, r) {
        var o = 0;
        n.subscribe(gt(r, function(i) {
            r.next(e.call(t, i, o++))
        }))
    })
}

function hn(e, t, n) {
    return n === void 0 && (n = 1 / 0), D(t) ? hn(function(r, o) {
        return wo(function(i, a) {
            return t(r, i, o, a)
        })(_t(e(r, o)))
    }, n) : (typeof t == "number" && (n = t), Ot(function(r, o) {
        return function(i, a, s, u, l, c, p, b) {
            var v = [],
                I = 0,
                g = 0,
                h = !1,
                m = function() {
                    !h || v.length || I || a.complete()
                },
                f = function(S) {
                    return I < u ? w(S) : v.push(S)
                },
                w = function(S) {
                    c && a.next(S), I++;
                    var j = !1;
                    _t(s(S, g++)).subscribe(gt(a, function(A) {
                        l == null || l(A), c ? f(A) : a.next(A)
                    }, function() {
                        j = !0
                    }, void 0, function() {
                        if (j) try {
                            I--;
                            for (var A = function() {
                                    var x = v.shift();
                                    p ? dt(a, p, function() {
                                        return w(x)
                                    }) : w(x)
                                }; v.length && I < u;) A();
                            m()
                        } catch (x) {
                            a.error(x)
                        }
                    }))
                };
            return i.subscribe(gt(a, f, function() {
                    h = !0, m()
                })),
                function() {
                    b == null || b()
                }
        }(r, o, e, n)
    }))
}

function ks() {
    return (e = 1) === void 0 && (e = 1 / 0), hn(oo, e);
    var e
}

function Ts(e, t, n) {
    e === void 0 && (e = 0), n === void 0 && (n = Ns);
    var r = -1;
    return t != null && (so(t) ? n = t : r = t), new F(function(o) {
        var i, a = (i = e) instanceof Date && !isNaN(i) ? +e - n.now() : e;
        a < 0 && (a = 0);
        var s = 0;
        return n.schedule(function() {
            o.closed || (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete())
        }, a)
    })
}

function Jn(e, t) {
    return Ot(function(n, r) {
        var o = 0;
        n.subscribe(gt(r, function(i) {
            return e.call(t, i, o++) && r.next(i)
        }))
    })
}

function Wn(e) {
    return e <= 0 ? function() {
        return Ps
    } : Ot(function(t, n) {
        var r = 0;
        t.subscribe(gt(n, function(o) {
            ++r <= e && (n.next(o), e <= r && n.complete())
        }))
    })
}

function fe(e, t) {
    return t ? function(n) {
        return function() {
            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
            return ks()(me(r, co(r)))
        }(t.pipe(Wn(1), Ot(function(r, o) {
            r.subscribe(gt(o, Rn))
        })), n.pipe(fe(e)))
    } : hn(function(n, r) {
        return _t(e(n, r)).pipe(Wn(1), function(o) {
            return wo(function() {
                return o
            })
        }(n))
    })
}

function Bs(e, t) {
    t === void 0 && (t = ao);
    var n = Ts(e, t);
    return fe(function() {
        return n
    })
}
var Et = (e => (e[e.disconnect = 0] = "disconnect", e[e.connecting = 1] = "connecting", e[e.connected = 2] = "connected", e))(Et || {});
const Io = {
    isTurboEnable: !1,
    bgSoundEnable: !1,
    soundEnable: !0,
    hotKeysEnable: !1
};
class vn {
    constructor(t, n) {
        this.connection$ = new M(Et.disconnect), this.rtp$ = new M(.99), this.option$ = new M({}), this.bouns$ = new M(!1), this.onConnect = () => {
            this.connection$.next(Et.connected)
        }, this.onDisconnect = () => {
            this.connection$.next(Et.disconnect)
        }, this.onConnecting = () => {
            this.connection$.next(Et.connecting)
        };
        const r = function(o, i) {
            return i ? T(N(N({}, o), i), {
                rtp: Number(i.rtp) / 100 || .99,
                namespace: i.gameSocketNameSpace || o.namespace
            }) : o
        }(t, n);
        this.option$.next(r), this.rtp$.next(Number(r.rtp || .99)), this.socket = $(r.namespace), this.request = $().socketRequestBind(this.socket), this.gameName = t.name, this.socket.on("connect", this.onConnect), this.socket.on("reconnecting", this.onConnecting), this.socket.on("disconnect", this.onDisconnect), this.initSetting(), this.listenBonus()
    }
    listenBonus() {
        return hr(t => {
            this.dispose = t, V(() => {
                this.bouns$.next(Qn.setting.currencyBonusType === "game")
            })
        }), () => {
            this.dispose()
        }
    }
    initSetting() {
        localStorage.getItem(`ns-${this.gameName}`) || localStorage.setItem(`ns-${this.gameName}`, JSON.stringify(Io))
    }
    getScriptId(t) {
        return E(this, null, function*() {
            return yield W().post("/game/manage/scripts/log/", {
                gameName: this.config.name,
                content: t
            })
        })
    }
    online() {
        return this.socket.connect(), this.init(), () => {
            this.socket.disconnect()
        }
    }
}
const _s = (() => {
    const e = {};
    return function(t, ...n) {
        if (e[t.alias]) return e[t.alias];
        const r = new t(...n);
        return e[t.name] = r, r
    }
})();
class lr extends vn {
    constructor(t, n) {
        super(t, n), this.oddsScale = 1e4, this.amountScale = 1e4, this.isWatching = !1, this.connection = this.connection$.asObservable()
    }
    init() {}
}
const k = C.Reader,
    pt = C.Writer,
    d = C.util,
    O = C.roots.singleGame || (C.roots.singleGame = {});
O.Bet = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.betValue = d.newBuffer([]), e.prototype.scriptId = 0, e.prototype.frontgroundId = 0, e.prototype.amountType = 0, e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        return n || (n = pt.create()), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(10).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(18).string(t.betAmount), t.betValue != null && Object.hasOwnProperty.call(t, "betValue") && n.uint32(26).bytes(t.betValue), t.scriptId != null && Object.hasOwnProperty.call(t, "scriptId") && n.uint32(32).sint32(t.scriptId), t.frontgroundId != null && Object.hasOwnProperty.call(t, "frontgroundId") && n.uint32(120).sint32(t.frontgroundId), t.amountType != null && Object.hasOwnProperty.call(t, "amountType") && n.uint32(128).sint32(t.amountType), n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.Bet;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.currencyName = t.string();
                    break;
                case 2:
                    o.betAmount = t.string();
                    break;
                case 3:
                    o.betValue = t.bytes();
                    break;
                case 4:
                    o.scriptId = t.sint32();
                    break;
                case 15:
                    o.frontgroundId = t.sint32();
                    break;
                case 16:
                    o.amountType = t.sint32();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        return typeof t != "object" || t === null ? "object expected" : t.currencyName != null && t.hasOwnProperty("currencyName") && !d.isString(t.currencyName) ? "currencyName: string expected" : t.betAmount != null && t.hasOwnProperty("betAmount") && !d.isString(t.betAmount) ? "betAmount: string expected" : t.betValue != null && t.hasOwnProperty("betValue") && !(t.betValue && typeof t.betValue.length == "number" || d.isString(t.betValue)) ? "betValue: buffer expected" : t.scriptId != null && t.hasOwnProperty("scriptId") && !d.isInteger(t.scriptId) ? "scriptId: integer expected" : t.frontgroundId != null && t.hasOwnProperty("frontgroundId") && !d.isInteger(t.frontgroundId) ? "frontgroundId: integer expected" : t.amountType != null && t.hasOwnProperty("amountType") && !d.isInteger(t.amountType) ? "amountType: integer expected" : null
    }, e.fromObject = function(t) {
        if (t instanceof O.Bet) return t;
        let n = new O.Bet;
        return t.currencyName != null && (n.currencyName = String(t.currencyName)), t.betAmount != null && (n.betAmount = String(t.betAmount)), t.betValue != null && (typeof t.betValue == "string" ? d.base64.decode(t.betValue, n.betValue = d.newBuffer(d.base64.length(t.betValue)), 0) : t.betValue.length && (n.betValue = t.betValue)), t.scriptId != null && (n.scriptId = 0 | t.scriptId), t.frontgroundId != null && (n.frontgroundId = 0 | t.frontgroundId), t.amountType != null && (n.amountType = 0 | t.amountType), n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.currencyName = "", r.betAmount = "", n.bytes === String ? r.betValue = "" : (r.betValue = [], n.bytes !== Array && (r.betValue = d.newBuffer(r.betValue))), r.scriptId = 0, r.frontgroundId = 0, r.amountType = 0), t.currencyName != null && t.hasOwnProperty("currencyName") && (r.currencyName = t.currencyName), t.betAmount != null && t.hasOwnProperty("betAmount") && (r.betAmount = t.betAmount), t.betValue != null && t.hasOwnProperty("betValue") && (r.betValue = n.bytes === String ? d.base64.encode(t.betValue, 0, t.betValue.length) : n.bytes === Array ? Array.prototype.slice.call(t.betValue) : t.betValue), t.scriptId != null && t.hasOwnProperty("scriptId") && (r.scriptId = t.scriptId), t.frontgroundId != null && t.hasOwnProperty("frontgroundId") && (r.frontgroundId = t.frontgroundId), t.amountType != null && t.hasOwnProperty("amountType") && (r.amountType = t.amountType), r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e
})(), O.BetResult = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.betId = "", e.prototype.result = 0, e.prototype.odds = 0, e.prototype.nonce = 0, e.prototype.gameValue = d.newBuffer([]), e.prototype.betTime = d.Long ? d.Long.fromBits(0, 0, !1) : 0, e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.winAmount = "", e.prototype.betIdTmp = "", e.prototype.betValue = d.newBuffer([]), e.prototype.distributeId = "", e.prototype.oddsString = "", e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        return n || (n = pt.create()), t.betId != null && Object.hasOwnProperty.call(t, "betId") && n.uint32(10).string(t.betId), t.result != null && Object.hasOwnProperty.call(t, "result") && n.uint32(16).sint32(t.result), t.odds != null && Object.hasOwnProperty.call(t, "odds") && n.uint32(24).sint32(t.odds), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && n.uint32(32).sint32(t.nonce), t.gameValue != null && Object.hasOwnProperty.call(t, "gameValue") && n.uint32(42).bytes(t.gameValue), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && n.uint32(48).sint64(t.betTime), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(58).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(66).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && n.uint32(74).string(t.winAmount), t.betIdTmp != null && Object.hasOwnProperty.call(t, "betIdTmp") && n.uint32(82).string(t.betIdTmp), t.betValue != null && Object.hasOwnProperty.call(t, "betValue") && n.uint32(90).bytes(t.betValue), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && n.uint32(98).string(t.distributeId), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && n.uint32(106).string(t.oddsString), n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.BetResult;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.betId = t.string();
                    break;
                case 2:
                    o.result = t.sint32();
                    break;
                case 3:
                    o.odds = t.sint32();
                    break;
                case 4:
                    o.nonce = t.sint32();
                    break;
                case 5:
                    o.gameValue = t.bytes();
                    break;
                case 6:
                    o.betTime = t.sint64();
                    break;
                case 7:
                    o.currencyName = t.string();
                    break;
                case 8:
                    o.betAmount = t.string();
                    break;
                case 9:
                    o.winAmount = t.string();
                    break;
                case 10:
                    o.betIdTmp = t.string();
                    break;
                case 11:
                    o.betValue = t.bytes();
                    break;
                case 12:
                    o.distributeId = t.string();
                    break;
                case 13:
                    o.oddsString = t.string();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        return typeof t != "object" || t === null ? "object expected" : t.betId != null && t.hasOwnProperty("betId") && !d.isString(t.betId) ? "betId: string expected" : t.result != null && t.hasOwnProperty("result") && !d.isInteger(t.result) ? "result: integer expected" : t.odds != null && t.hasOwnProperty("odds") && !d.isInteger(t.odds) ? "odds: integer expected" : t.nonce != null && t.hasOwnProperty("nonce") && !d.isInteger(t.nonce) ? "nonce: integer expected" : t.gameValue != null && t.hasOwnProperty("gameValue") && !(t.gameValue && typeof t.gameValue.length == "number" || d.isString(t.gameValue)) ? "gameValue: buffer expected" : t.betTime != null && t.hasOwnProperty("betTime") && !(d.isInteger(t.betTime) || t.betTime && d.isInteger(t.betTime.low) && d.isInteger(t.betTime.high)) ? "betTime: integer|Long expected" : t.currencyName != null && t.hasOwnProperty("currencyName") && !d.isString(t.currencyName) ? "currencyName: string expected" : t.betAmount != null && t.hasOwnProperty("betAmount") && !d.isString(t.betAmount) ? "betAmount: string expected" : t.winAmount != null && t.hasOwnProperty("winAmount") && !d.isString(t.winAmount) ? "winAmount: string expected" : t.betIdTmp != null && t.hasOwnProperty("betIdTmp") && !d.isString(t.betIdTmp) ? "betIdTmp: string expected" : t.betValue != null && t.hasOwnProperty("betValue") && !(t.betValue && typeof t.betValue.length == "number" || d.isString(t.betValue)) ? "betValue: buffer expected" : t.distributeId != null && t.hasOwnProperty("distributeId") && !d.isString(t.distributeId) ? "distributeId: string expected" : t.oddsString != null && t.hasOwnProperty("oddsString") && !d.isString(t.oddsString) ? "oddsString: string expected" : null
    }, e.fromObject = function(t) {
        if (t instanceof O.BetResult) return t;
        let n = new O.BetResult;
        return t.betId != null && (n.betId = String(t.betId)), t.result != null && (n.result = 0 | t.result), t.odds != null && (n.odds = 0 | t.odds), t.nonce != null && (n.nonce = 0 | t.nonce), t.gameValue != null && (typeof t.gameValue == "string" ? d.base64.decode(t.gameValue, n.gameValue = d.newBuffer(d.base64.length(t.gameValue)), 0) : t.gameValue.length && (n.gameValue = t.gameValue)), t.betTime != null && (d.Long ? (n.betTime = d.Long.fromValue(t.betTime)).unsigned = !1 : typeof t.betTime == "string" ? n.betTime = parseInt(t.betTime, 10) : typeof t.betTime == "number" ? n.betTime = t.betTime : typeof t.betTime == "object" && (n.betTime = new d.LongBits(t.betTime.low >>> 0, t.betTime.high >>> 0).toNumber())), t.currencyName != null && (n.currencyName = String(t.currencyName)), t.betAmount != null && (n.betAmount = String(t.betAmount)), t.winAmount != null && (n.winAmount = String(t.winAmount)), t.betIdTmp != null && (n.betIdTmp = String(t.betIdTmp)), t.betValue != null && (typeof t.betValue == "string" ? d.base64.decode(t.betValue, n.betValue = d.newBuffer(d.base64.length(t.betValue)), 0) : t.betValue.length && (n.betValue = t.betValue)), t.distributeId != null && (n.distributeId = String(t.distributeId)), t.oddsString != null && (n.oddsString = String(t.oddsString)), n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        if (n.defaults) {
            if (r.betId = "", r.result = 0, r.odds = 0, r.nonce = 0, n.bytes === String ? r.gameValue = "" : (r.gameValue = [], n.bytes !== Array && (r.gameValue = d.newBuffer(r.gameValue))), d.Long) {
                let o = new d.Long(0, 0, !1);
                r.betTime = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o
            } else r.betTime = n.longs === String ? "0" : 0;
            r.currencyName = "", r.betAmount = "", r.winAmount = "", r.betIdTmp = "", n.bytes === String ? r.betValue = "" : (r.betValue = [], n.bytes !== Array && (r.betValue = d.newBuffer(r.betValue))), r.distributeId = "", r.oddsString = ""
        }
        return t.betId != null && t.hasOwnProperty("betId") && (r.betId = t.betId), t.result != null && t.hasOwnProperty("result") && (r.result = t.result), t.odds != null && t.hasOwnProperty("odds") && (r.odds = t.odds), t.nonce != null && t.hasOwnProperty("nonce") && (r.nonce = t.nonce), t.gameValue != null && t.hasOwnProperty("gameValue") && (r.gameValue = n.bytes === String ? d.base64.encode(t.gameValue, 0, t.gameValue.length) : n.bytes === Array ? Array.prototype.slice.call(t.gameValue) : t.gameValue), t.betTime != null && t.hasOwnProperty("betTime") && (typeof t.betTime == "number" ? r.betTime = n.longs === String ? String(t.betTime) : t.betTime : r.betTime = n.longs === String ? d.Long.prototype.toString.call(t.betTime) : n.longs === Number ? new d.LongBits(t.betTime.low >>> 0, t.betTime.high >>> 0).toNumber() : t.betTime), t.currencyName != null && t.hasOwnProperty("currencyName") && (r.currencyName = t.currencyName), t.betAmount != null && t.hasOwnProperty("betAmount") && (r.betAmount = t.betAmount), t.winAmount != null && t.hasOwnProperty("winAmount") && (r.winAmount = t.winAmount), t.betIdTmp != null && t.hasOwnProperty("betIdTmp") && (r.betIdTmp = t.betIdTmp), t.betValue != null && t.hasOwnProperty("betValue") && (r.betValue = n.bytes === String ? d.base64.encode(t.betValue, 0, t.betValue.length) : n.bytes === Array ? Array.prototype.slice.call(t.betValue) : t.betValue), t.distributeId != null && t.hasOwnProperty("distributeId") && (r.distributeId = t.distributeId), t.oddsString != null && t.hasOwnProperty("oddsString") && (r.oddsString = t.oddsString), r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e
})(), O.BetInfo = (() => {
    function e(t) {
        if (this.infos = [], t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.infos = d.emptyArray, e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        if (n || (n = pt.create()), t.infos != null && t.infos.length)
            for (let r = 0; r < t.infos.length; ++r) O.BetInfo.Info.encode(t.infos[r], n.uint32(10).fork()).ldelim();
        return n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.BetInfo;
        for (; t.pos < r;) {
            let i = t.uint32();
            i >>> 3 == 1 ? (o.infos && o.infos.length || (o.infos = []), o.infos.push(O.BetInfo.Info.decode(t, t.uint32()))) : t.skipType(7 & i)
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        if (typeof t != "object" || t === null) return "object expected";
        if (t.infos != null && t.hasOwnProperty("infos")) {
            if (!Array.isArray(t.infos)) return "infos: array expected";
            for (let n = 0; n < t.infos.length; ++n) {
                let r = O.BetInfo.Info.verify(t.infos[n]);
                if (r) return "infos." + r
            }
        }
        return null
    }, e.fromObject = function(t) {
        if (t instanceof O.BetInfo) return t;
        let n = new O.BetInfo;
        if (t.infos) {
            if (!Array.isArray(t.infos)) throw TypeError(".BetInfo.infos: array expected");
            n.infos = [];
            for (let r = 0; r < t.infos.length; ++r) {
                if (typeof t.infos[r] != "object") throw TypeError(".BetInfo.infos: object expected");
                n.infos[r] = O.BetInfo.Info.fromObject(t.infos[r])
            }
        }
        return n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.infos = []), t.infos && t.infos.length) {
            r.infos = [];
            for (let o = 0; o < t.infos.length; ++o) r.infos[o] = O.BetInfo.Info.toObject(t.infos[o], n)
        }
        return r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e.Info = function() {
        function t(n) {
            if (n)
                for (let r = Object.keys(n), o = 0; o < r.length; ++o) n[r[o]] != null && (this[r[o]] = n[r[o]])
        }
        return t.prototype.currencyName = "", t.prototype.maxBetAmount = "", t.prototype.minBetAmount = "", t.prototype.maxProfitAmount = "", t.create = function(n) {
            return new t(n)
        }, t.encode = function(n, r) {
            return r || (r = pt.create()), n.currencyName != null && Object.hasOwnProperty.call(n, "currencyName") && r.uint32(10).string(n.currencyName), n.maxBetAmount != null && Object.hasOwnProperty.call(n, "maxBetAmount") && r.uint32(18).string(n.maxBetAmount), n.minBetAmount != null && Object.hasOwnProperty.call(n, "minBetAmount") && r.uint32(26).string(n.minBetAmount), n.maxProfitAmount != null && Object.hasOwnProperty.call(n, "maxProfitAmount") && r.uint32(34).string(n.maxProfitAmount), r
        }, t.encodeDelimited = function(n, r) {
            return this.encode(n, r).ldelim()
        }, t.decode = function(n, r) {
            n instanceof k || (n = k.create(n));
            let o = r === void 0 ? n.len : n.pos + r,
                i = new O.BetInfo.Info;
            for (; n.pos < o;) {
                let a = n.uint32();
                switch (a >>> 3) {
                    case 1:
                        i.currencyName = n.string();
                        break;
                    case 2:
                        i.maxBetAmount = n.string();
                        break;
                    case 3:
                        i.minBetAmount = n.string();
                        break;
                    case 4:
                        i.maxProfitAmount = n.string();
                        break;
                    default:
                        n.skipType(7 & a)
                }
            }
            return i
        }, t.decodeDelimited = function(n) {
            return n instanceof k || (n = new k(n)), this.decode(n, n.uint32())
        }, t.verify = function(n) {
            return typeof n != "object" || n === null ? "object expected" : n.currencyName != null && n.hasOwnProperty("currencyName") && !d.isString(n.currencyName) ? "currencyName: string expected" : n.maxBetAmount != null && n.hasOwnProperty("maxBetAmount") && !d.isString(n.maxBetAmount) ? "maxBetAmount: string expected" : n.minBetAmount != null && n.hasOwnProperty("minBetAmount") && !d.isString(n.minBetAmount) ? "minBetAmount: string expected" : n.maxProfitAmount != null && n.hasOwnProperty("maxProfitAmount") && !d.isString(n.maxProfitAmount) ? "maxProfitAmount: string expected" : null
        }, t.fromObject = function(n) {
            if (n instanceof O.BetInfo.Info) return n;
            let r = new O.BetInfo.Info;
            return n.currencyName != null && (r.currencyName = String(n.currencyName)), n.maxBetAmount != null && (r.maxBetAmount = String(n.maxBetAmount)), n.minBetAmount != null && (r.minBetAmount = String(n.minBetAmount)), n.maxProfitAmount != null && (r.maxProfitAmount = String(n.maxProfitAmount)), r
        }, t.toObject = function(n, r) {
            r || (r = {});
            let o = {};
            return r.defaults && (o.currencyName = "", o.maxBetAmount = "", o.minBetAmount = "", o.maxProfitAmount = ""), n.currencyName != null && n.hasOwnProperty("currencyName") && (o.currencyName = n.currencyName), n.maxBetAmount != null && n.hasOwnProperty("maxBetAmount") && (o.maxBetAmount = n.maxBetAmount), n.minBetAmount != null && n.hasOwnProperty("minBetAmount") && (o.minBetAmount = n.minBetAmount), n.maxProfitAmount != null && n.hasOwnProperty("maxProfitAmount") && (o.maxProfitAmount = n.maxProfitAmount), o
        }, t.prototype.toJSON = function() {
            return this.constructor.toObject(this, C.util.toJSONOptions)
        }, t
    }(), e
})(), O.GameConfig = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.gameName = "", e.prototype.gameSocketNameSpace = "", e.prototype.version = 0, e.prototype.rtp = "", e.prototype.payTable = "", e.prototype.isSingle = !1, e.prototype.isDelete = !1, e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        return n || (n = pt.create()), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && n.uint32(10).string(t.gameName), t.gameSocketNameSpace != null && Object.hasOwnProperty.call(t, "gameSocketNameSpace") && n.uint32(18).string(t.gameSocketNameSpace), t.version != null && Object.hasOwnProperty.call(t, "version") && n.uint32(24).sint32(t.version), t.rtp != null && Object.hasOwnProperty.call(t, "rtp") && n.uint32(34).string(t.rtp), t.payTable != null && Object.hasOwnProperty.call(t, "payTable") && n.uint32(42).string(t.payTable), t.isSingle != null && Object.hasOwnProperty.call(t, "isSingle") && n.uint32(48).bool(t.isSingle), t.isDelete != null && Object.hasOwnProperty.call(t, "isDelete") && n.uint32(56).bool(t.isDelete), n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.GameConfig;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.gameName = t.string();
                    break;
                case 2:
                    o.gameSocketNameSpace = t.string();
                    break;
                case 3:
                    o.version = t.sint32();
                    break;
                case 4:
                    o.rtp = t.string();
                    break;
                case 5:
                    o.payTable = t.string();
                    break;
                case 6:
                    o.isSingle = t.bool();
                    break;
                case 7:
                    o.isDelete = t.bool();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        return typeof t != "object" || t === null ? "object expected" : t.gameName != null && t.hasOwnProperty("gameName") && !d.isString(t.gameName) ? "gameName: string expected" : t.gameSocketNameSpace != null && t.hasOwnProperty("gameSocketNameSpace") && !d.isString(t.gameSocketNameSpace) ? "gameSocketNameSpace: string expected" : t.version != null && t.hasOwnProperty("version") && !d.isInteger(t.version) ? "version: integer expected" : t.rtp != null && t.hasOwnProperty("rtp") && !d.isString(t.rtp) ? "rtp: string expected" : t.payTable != null && t.hasOwnProperty("payTable") && !d.isString(t.payTable) ? "payTable: string expected" : t.isSingle != null && t.hasOwnProperty("isSingle") && typeof t.isSingle != "boolean" ? "isSingle: boolean expected" : t.isDelete != null && t.hasOwnProperty("isDelete") && typeof t.isDelete != "boolean" ? "isDelete: boolean expected" : null
    }, e.fromObject = function(t) {
        if (t instanceof O.GameConfig) return t;
        let n = new O.GameConfig;
        return t.gameName != null && (n.gameName = String(t.gameName)), t.gameSocketNameSpace != null && (n.gameSocketNameSpace = String(t.gameSocketNameSpace)), t.version != null && (n.version = 0 | t.version), t.rtp != null && (n.rtp = String(t.rtp)), t.payTable != null && (n.payTable = String(t.payTable)), t.isSingle != null && (n.isSingle = !!t.isSingle), t.isDelete != null && (n.isDelete = !!t.isDelete), n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.gameName = "", r.gameSocketNameSpace = "", r.version = 0, r.rtp = "", r.payTable = "", r.isSingle = !1, r.isDelete = !1), t.gameName != null && t.hasOwnProperty("gameName") && (r.gameName = t.gameName), t.gameSocketNameSpace != null && t.hasOwnProperty("gameSocketNameSpace") && (r.gameSocketNameSpace = t.gameSocketNameSpace), t.version != null && t.hasOwnProperty("version") && (r.version = t.version), t.rtp != null && t.hasOwnProperty("rtp") && (r.rtp = t.rtp), t.payTable != null && t.hasOwnProperty("payTable") && (r.payTable = t.payTable), t.isSingle != null && t.hasOwnProperty("isSingle") && (r.isSingle = t.isSingle), t.isDelete != null && t.hasOwnProperty("isDelete") && (r.isDelete = t.isDelete), r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e
})(), O.Init = (() => {
    function e(t) {
        if (this.betInfo = [], this.gameConfig = [], t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.betInfo = d.emptyArray, e.prototype.gameConfig = d.emptyArray, e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        if (n || (n = pt.create()), t.betInfo != null && t.betInfo.length)
            for (let r = 0; r < t.betInfo.length; ++r) O.BetInfo.Info.encode(t.betInfo[r], n.uint32(10).fork()).ldelim();
        if (t.gameConfig != null && t.gameConfig.length)
            for (let r = 0; r < t.gameConfig.length; ++r) O.GameConfig.encode(t.gameConfig[r], n.uint32(18).fork()).ldelim();
        return n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.Init;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.betInfo && o.betInfo.length || (o.betInfo = []), o.betInfo.push(O.BetInfo.Info.decode(t, t.uint32()));
                    break;
                case 2:
                    o.gameConfig && o.gameConfig.length || (o.gameConfig = []), o.gameConfig.push(O.GameConfig.decode(t, t.uint32()));
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        if (typeof t != "object" || t === null) return "object expected";
        if (t.betInfo != null && t.hasOwnProperty("betInfo")) {
            if (!Array.isArray(t.betInfo)) return "betInfo: array expected";
            for (let n = 0; n < t.betInfo.length; ++n) {
                let r = O.BetInfo.Info.verify(t.betInfo[n]);
                if (r) return "betInfo." + r
            }
        }
        if (t.gameConfig != null && t.hasOwnProperty("gameConfig")) {
            if (!Array.isArray(t.gameConfig)) return "gameConfig: array expected";
            for (let n = 0; n < t.gameConfig.length; ++n) {
                let r = O.GameConfig.verify(t.gameConfig[n]);
                if (r) return "gameConfig." + r
            }
        }
        return null
    }, e.fromObject = function(t) {
        if (t instanceof O.Init) return t;
        let n = new O.Init;
        if (t.betInfo) {
            if (!Array.isArray(t.betInfo)) throw TypeError(".Init.betInfo: array expected");
            n.betInfo = [];
            for (let r = 0; r < t.betInfo.length; ++r) {
                if (typeof t.betInfo[r] != "object") throw TypeError(".Init.betInfo: object expected");
                n.betInfo[r] = O.BetInfo.Info.fromObject(t.betInfo[r])
            }
        }
        if (t.gameConfig) {
            if (!Array.isArray(t.gameConfig)) throw TypeError(".Init.gameConfig: array expected");
            n.gameConfig = [];
            for (let r = 0; r < t.gameConfig.length; ++r) {
                if (typeof t.gameConfig[r] != "object") throw TypeError(".Init.gameConfig: object expected");
                n.gameConfig[r] = O.GameConfig.fromObject(t.gameConfig[r])
            }
        }
        return n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.betInfo = [], r.gameConfig = []), t.betInfo && t.betInfo.length) {
            r.betInfo = [];
            for (let o = 0; o < t.betInfo.length; ++o) r.betInfo[o] = O.BetInfo.Info.toObject(t.betInfo[o], n)
        }
        if (t.gameConfig && t.gameConfig.length) {
            r.gameConfig = [];
            for (let o = 0; o < t.gameConfig.length; ++o) r.gameConfig[o] = O.GameConfig.toObject(t.gameConfig[o], n)
        }
        return r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e
})(), O.BetLog = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.userId = d.Long ? d.Long.fromBits(0, 0, !1) : 0, e.prototype.nickName = "", e.prototype.gameName = "", e.prototype.nonce = 0, e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.winAmount = "", e.prototype.odds = 0, e.prototype.betTime = d.Long ? d.Long.fromBits(0, 0, !1) : 0, e.prototype.distributeId = d.Long ? d.Long.fromBits(0, 0, !1) : 0, e.prototype.type = "", e.prototype.gameId = "", e.prototype.gv = "", e.prototype.bv = "", e.prototype.oddsString = "", e.create = function(t) {
        return new e(t)
    }, e.encode = function(t, n) {
        return n || (n = pt.create()), t.userId != null && Object.hasOwnProperty.call(t, "userId") && n.uint32(16).sint64(t.userId), t.nickName != null && Object.hasOwnProperty.call(t, "nickName") && n.uint32(26).string(t.nickName), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && n.uint32(34).string(t.gameName), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && n.uint32(40).sint32(t.nonce), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(50).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(58).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && n.uint32(66).string(t.winAmount), t.odds != null && Object.hasOwnProperty.call(t, "odds") && n.uint32(72).sint32(t.odds), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && n.uint32(80).sint64(t.betTime), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && n.uint32(96).sint64(t.distributeId), t.type != null && Object.hasOwnProperty.call(t, "type") && n.uint32(106).string(t.type), t.gameId != null && Object.hasOwnProperty.call(t, "gameId") && n.uint32(114).string(t.gameId), t.gv != null && Object.hasOwnProperty.call(t, "gv") && n.uint32(122).string(t.gv), t.bv != null && Object.hasOwnProperty.call(t, "bv") && n.uint32(130).string(t.bv), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && n.uint32(138).string(t.oddsString), n
    }, e.encodeDelimited = function(t, n) {
        return this.encode(t, n).ldelim()
    }, e.decode = function(t, n) {
        t instanceof k || (t = k.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new O.BetLog;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 2:
                    o.userId = t.sint64();
                    break;
                case 3:
                    o.nickName = t.string();
                    break;
                case 4:
                    o.gameName = t.string();
                    break;
                case 5:
                    o.nonce = t.sint32();
                    break;
                case 6:
                    o.currencyName = t.string();
                    break;
                case 7:
                    o.betAmount = t.string();
                    break;
                case 8:
                    o.winAmount = t.string();
                    break;
                case 9:
                    o.odds = t.sint32();
                    break;
                case 10:
                    o.betTime = t.sint64();
                    break;
                case 12:
                    o.distributeId = t.sint64();
                    break;
                case 13:
                    o.type = t.string();
                    break;
                case 14:
                    o.gameId = t.string();
                    break;
                case 15:
                    o.gv = t.string();
                    break;
                case 16:
                    o.bv = t.string();
                    break;
                case 17:
                    o.oddsString = t.string();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e.decodeDelimited = function(t) {
        return t instanceof k || (t = new k(t)), this.decode(t, t.uint32())
    }, e.verify = function(t) {
        return typeof t != "object" || t === null ? "object expected" : t.userId != null && t.hasOwnProperty("userId") && !(d.isInteger(t.userId) || t.userId && d.isInteger(t.userId.low) && d.isInteger(t.userId.high)) ? "userId: integer|Long expected" : t.nickName != null && t.hasOwnProperty("nickName") && !d.isString(t.nickName) ? "nickName: string expected" : t.gameName != null && t.hasOwnProperty("gameName") && !d.isString(t.gameName) ? "gameName: string expected" : t.nonce != null && t.hasOwnProperty("nonce") && !d.isInteger(t.nonce) ? "nonce: integer expected" : t.currencyName != null && t.hasOwnProperty("currencyName") && !d.isString(t.currencyName) ? "currencyName: string expected" : t.betAmount != null && t.hasOwnProperty("betAmount") && !d.isString(t.betAmount) ? "betAmount: string expected" : t.winAmount != null && t.hasOwnProperty("winAmount") && !d.isString(t.winAmount) ? "winAmount: string expected" : t.odds != null && t.hasOwnProperty("odds") && !d.isInteger(t.odds) ? "odds: integer expected" : t.betTime != null && t.hasOwnProperty("betTime") && !(d.isInteger(t.betTime) || t.betTime && d.isInteger(t.betTime.low) && d.isInteger(t.betTime.high)) ? "betTime: integer|Long expected" : t.distributeId != null && t.hasOwnProperty("distributeId") && !(d.isInteger(t.distributeId) || t.distributeId && d.isInteger(t.distributeId.low) && d.isInteger(t.distributeId.high)) ? "distributeId: integer|Long expected" : t.type != null && t.hasOwnProperty("type") && !d.isString(t.type) ? "type: string expected" : t.gameId != null && t.hasOwnProperty("gameId") && !d.isString(t.gameId) ? "gameId: string expected" : t.gv != null && t.hasOwnProperty("gv") && !d.isString(t.gv) ? "gv: string expected" : t.bv != null && t.hasOwnProperty("bv") && !d.isString(t.bv) ? "bv: string expected" : t.oddsString != null && t.hasOwnProperty("oddsString") && !d.isString(t.oddsString) ? "oddsString: string expected" : null
    }, e.fromObject = function(t) {
        if (t instanceof O.BetLog) return t;
        let n = new O.BetLog;
        return t.userId != null && (d.Long ? (n.userId = d.Long.fromValue(t.userId)).unsigned = !1 : typeof t.userId == "string" ? n.userId = parseInt(t.userId, 10) : typeof t.userId == "number" ? n.userId = t.userId : typeof t.userId == "object" && (n.userId = new d.LongBits(t.userId.low >>> 0, t.userId.high >>> 0).toNumber())), t.nickName != null && (n.nickName = String(t.nickName)), t.gameName != null && (n.gameName = String(t.gameName)), t.nonce != null && (n.nonce = 0 | t.nonce), t.currencyName != null && (n.currencyName = String(t.currencyName)), t.betAmount != null && (n.betAmount = String(t.betAmount)), t.winAmount != null && (n.winAmount = String(t.winAmount)), t.odds != null && (n.odds = 0 | t.odds), t.betTime != null && (d.Long ? (n.betTime = d.Long.fromValue(t.betTime)).unsigned = !1 : typeof t.betTime == "string" ? n.betTime = parseInt(t.betTime, 10) : typeof t.betTime == "number" ? n.betTime = t.betTime : typeof t.betTime == "object" && (n.betTime = new d.LongBits(t.betTime.low >>> 0, t.betTime.high >>> 0).toNumber())), t.distributeId != null && (d.Long ? (n.distributeId = d.Long.fromValue(t.distributeId)).unsigned = !1 : typeof t.distributeId == "string" ? n.distributeId = parseInt(t.distributeId, 10) : typeof t.distributeId == "number" ? n.distributeId = t.distributeId : typeof t.distributeId == "object" && (n.distributeId = new d.LongBits(t.distributeId.low >>> 0, t.distributeId.high >>> 0).toNumber())), t.type != null && (n.type = String(t.type)), t.gameId != null && (n.gameId = String(t.gameId)), t.gv != null && (n.gv = String(t.gv)), t.bv != null && (n.bv = String(t.bv)), t.oddsString != null && (n.oddsString = String(t.oddsString)), n
    }, e.toObject = function(t, n) {
        n || (n = {});
        let r = {};
        if (n.defaults) {
            if (d.Long) {
                let o = new d.Long(0, 0, !1);
                r.userId = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o
            } else r.userId = n.longs === String ? "0" : 0;
            if (r.nickName = "", r.gameName = "", r.nonce = 0, r.currencyName = "", r.betAmount = "", r.winAmount = "", r.odds = 0, d.Long) {
                let o = new d.Long(0, 0, !1);
                r.betTime = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o
            } else r.betTime = n.longs === String ? "0" : 0;
            if (d.Long) {
                let o = new d.Long(0, 0, !1);
                r.distributeId = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o
            } else r.distributeId = n.longs === String ? "0" : 0;
            r.type = "", r.gameId = "", r.gv = "", r.bv = "", r.oddsString = ""
        }
        return t.userId != null && t.hasOwnProperty("userId") && (typeof t.userId == "number" ? r.userId = n.longs === String ? String(t.userId) : t.userId : r.userId = n.longs === String ? d.Long.prototype.toString.call(t.userId) : n.longs === Number ? new d.LongBits(t.userId.low >>> 0, t.userId.high >>> 0).toNumber() : t.userId), t.nickName != null && t.hasOwnProperty("nickName") && (r.nickName = t.nickName), t.gameName != null && t.hasOwnProperty("gameName") && (r.gameName = t.gameName), t.nonce != null && t.hasOwnProperty("nonce") && (r.nonce = t.nonce), t.currencyName != null && t.hasOwnProperty("currencyName") && (r.currencyName = t.currencyName), t.betAmount != null && t.hasOwnProperty("betAmount") && (r.betAmount = t.betAmount), t.winAmount != null && t.hasOwnProperty("winAmount") && (r.winAmount = t.winAmount), t.odds != null && t.hasOwnProperty("odds") && (r.odds = t.odds), t.betTime != null && t.hasOwnProperty("betTime") && (typeof t.betTime == "number" ? r.betTime = n.longs === String ? String(t.betTime) : t.betTime : r.betTime = n.longs === String ? d.Long.prototype.toString.call(t.betTime) : n.longs === Number ? new d.LongBits(t.betTime.low >>> 0, t.betTime.high >>> 0).toNumber() : t.betTime), t.distributeId != null && t.hasOwnProperty("distributeId") && (typeof t.distributeId == "number" ? r.distributeId = n.longs === String ? String(t.distributeId) : t.distributeId : r.distributeId = n.longs === String ? d.Long.prototype.toString.call(t.distributeId) : n.longs === Number ? new d.LongBits(t.distributeId.low >>> 0, t.distributeId.high >>> 0).toNumber() : t.distributeId), t.type != null && t.hasOwnProperty("type") && (r.type = t.type), t.gameId != null && t.hasOwnProperty("gameId") && (r.gameId = t.gameId), t.gv != null && t.hasOwnProperty("gv") && (r.gv = t.gv), t.bv != null && t.hasOwnProperty("bv") && (r.bv = t.bv), t.oddsString != null && t.hasOwnProperty("oddsString") && (r.oddsString = t.oddsString), r
    }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, e
})();
class Oo extends vn {
    constructor(t, n) {
        super(t, n), this.oddsScale = 1e4, this.amountScale = 1e4, this.gameUrl = "", this.betLog$ = new M([]), this.jackpot$ = new M([]), this.betInfo$ = new M([]), this.gameConfig$ = new M([]), this.betEncoder = $().encode(O.Bet), this.betResultDecoder = $().decode(O.BetResult), this.allbet = $().decodeBind(r => {
            this.betLog$.next(T(N({}, r), {
                betAmount: r.betAmount,
                winAmount: r.winAmount ? r.winAmount : "0",
                odds: r.odds || 0,
                betTime: r.betTime.toString(),
                distributeId: r.distributeId.toString()
            }))
        }, O.BetLog), this.connection = this.connection$.asObservable()
    }
    init() {
        return E(this, null, function*() {
            try {
                const t = yield this.request("init").then(o => $().decode(O.Init)(o)), {
                    betInfo: n,
                    gameConfig: r
                } = t;
                n && (this.betInfo$.next(n), this.jackpot$.next(n.map(o => ({
                    currencyName: o.currencyName,
                    jackpotAmount: 0,
                    maxBetAmount: Number(o.maxBetAmount),
                    minBetAmount: Number(o.minBetAmount),
                    maxProfitAmount: Number(o.maxProfitAmount)
                })))), r && this.gameConfig$.next(r), this.socket.on("allbet", this.allbet)
            } catch (t) {}
        })
    }
    toISingleLog(t, n, r) {
        var o, i, a, s;
        return Object.assign(t, N({
            gv: t.gameValue,
            userId: n.userId,
            seedId: 0,
            betAmount: new ct(t.betAmount || 0).toString(),
            winAmount: new ct(t.winAmount || 0).toString(),
            distributeId: ((o = t == null ? void 0 : t.betId) == null ? void 0 : o.toString()) || "",
            betTime: new ct(((i = t == null ? void 0 : t.betTime) == null ? void 0 : i.toString()) || 0).toNumber(),
            nickName: (a = n.name) != null ? a : "",
            avatar: (s = n.avatar) != null ? s : "header1",
            odds: t.odds || 0
        }, r))
    }
    bet(i) {
        return E(this, arguments, function*({
            txId: t,
            currency: n,
            value: r,
            scriptId: o
        }) {
            const a = this.betEncoder({
                    frontgroundId: t,
                    currencyName: n.symbol,
                    betAmount: n.amount.toString(),
                    betValue: r,
                    scriptId: o,
                    amountType: this.bouns$.value ? 2 : 1
                }),
                s = yield this.request("bet", a);
            return $().decode(O.BetResult)(s)
        })
    }
}
class Ls extends Oo {}
const Cs = hr(() => {
    const [e, t] = Rt({
        wagered: 0,
        profit: 0,
        winNum: 0,
        lossNum: 0,
        currencyName: "BTC",
        profits: [0]
    }), {
        store: n
    } = Zo();

    function r() {
        t({
            wagered: 0,
            profit: 0,
            winNum: 0,
            lossNum: 0,
            profits: [0]
        })
    }
    const o = {
        addData: function(i, a, s) {
            t("wagered", l => l + i), t("currencyName", s);
            const u = (a - 1) * i;
            t("profit", l => l + u), t(a >= 1 ? "winNum" : "lossNum", l => l + 1), t("profits", l => [...l, e.profit])
        },
        clearData: r
    };
    return V(() => {
        n.activeCurrency.currencyName !== e.currencyName && r()
    }), [e, o]
});

function wn() {
    return Cs
}

function So(e = 15, t = 50) {
    const [n, r] = U([]), [o, i] = U([]), a = ot(() => n().map(s => s.profit));
    return V(() => {
        let s = setInterval(() => {
            if (n().length > 0) {
                const u = n().pop();
                u && i(l => (l.length >= t && l.pop(), [u, ...l]))
            }
        }, 1e3);
        z(() => {
            s && clearInterval(s)
        })
    }), {
        queue: o,
        addItem: s => {
            const u = T(N({}, s), {
                profit: s.profit
            });
            r(l => {
                if (l.findIndex(p => p.distributeId === s.distributeId) >= 0) return l;
                let c = [...l];
                if (l.length === 0) c = [u];
                else if (c.length + 1 < e) {
                    const p = Je(a(), u.profit);
                    c.splice(p, 0, u)
                } else {
                    const p = l[0].profit;
                    if (u.profit > p) {
                        const b = Je(a(), u.profit);
                        c.splice(b, 0, u), c.shift()
                    }
                }
                return c
            })
        },
        setDataQueue: i
    }
}
const Ao = ht(null);

function Vs(e) {
    const [t] = G(e, ["game"]), {
        addData: n
    } = wn()[1], [r, o] = Rt({
        myLogsFromGame: []
    }), {
        user: i
    } = ai(), [a, s] = U(bs), {
        queue: u,
        addItem: l,
        setDataQueue: c
    } = So(10), p = function(m, f) {
        return mt(() => ({
            queryKey: ["/game/bet/recent-bet/", {
                gameUrl: m,
                size: f()
            }],
            queryFn: Ds,
            staleTime: 0
        }))
    }(e.game.config.key, a), b = Xn(() => (p.data || []).map(S => {
        var j = S,
            {
                bv: m,
                odds: f
            } = j,
            w = Sn(j, ["bv", "odds"]);
        return T(N({}, w), {
            bv: e.game.bvMapper(m),
            odds: f / e.game.oddsScale
        })
    }), []), v = function(m, f) {
        return mt(() => ({
            queryKey: [`/game/bet/allBet/${m}`, f()],
            queryFn: Es,
            staleTime: 0
        }))
    }(e.game.config.key, a);
    V(() => {
        if (v.data) {
            const m = v.data.map(S => {
                var j = S,
                    {
                        odds: f
                    } = j,
                    w = Sn(j, ["odds"]);
                const A = t.game.getResult(T(N({}, w), {
                    odds: f / e.game.oddsScale
                }));
                return T(N({}, w), {
                    odds: f / e.game.oddsScale,
                    profit: A.profit,
                    payout: A.payout
                })
            });
            c(m)
        }
    });
    const I = ot(() => lt([...r.myLogsFromGame, ...b()], "distributeId")),
        g = new de,
        h = m => {
            const f = ie(m),
                {
                    winAmount: w,
                    betAmount: S,
                    odds: j
                } = f,
                A = Object.assign(f, {
                    winAmount: w,
                    betAmount: S,
                    odds: j / e.game.oddsScale
                });
            n(Number(S), Number(A.odds), f.currencyName), o("myLogsFromGame", x => lt([A, ...x], "distributeId")), g.next(A)
        };
    return V(() => {
        const m = t.game instanceof Ls,
            f = e.game.betLog$.pipe(Jn(w => !Qr(w)), hn(w => Array.isArray(w) ? me(w).pipe(Bs(400)) : cr(w)), fe(w => w.userId !== i.userId || m ? cr(null) : g.asObservable().pipe(Jn(S => S.userId === w.userId && S.distributeId === w.distributeId), Wn(1)))).subscribe(w => {
                const S = T(N({}, w), {
                        odds: w.odds / e.game.oddsScale
                    }),
                    {
                        profit: j,
                        payout: A
                    } = t.game.getResult(S);
                l(T(N({}, S), {
                    profit: j,
                    payout: A
                }))
            });
        z(() => {
            f.unsubscribe(), e.game.betLog$.next([])
        })
    }), P(Ao.Provider, {
        get value() {
            return T(N({}, t), {
                logs: u,
                myLogs: I,
                size: a,
                setSize: s,
                addLog: h,
                allBetQuery: v
            })
        },
        get children() {
            return e.children
        }
    })
}

function Lu() {
    return vt(Ao)
}

function Ds(t) {
    return E(this, arguments, function*({
        queryKey: e
    }) {
        return yield mn(), yield W().post("/game/bet/recent-bet", e[1])
    })
}

function Es(t) {
    return E(this, arguments, function*({
        queryKey: e
    }) {
        return yield W().get(e[0])
    })
}
const dr = C.Reader,
    $s = C.Writer,
    ut = C.util,
    dn = C.roots.MultiGame || (C.roots.MultiGame = {});
dn.BetLog = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.gameId = ut.Long ? ut.Long.fromBits(0, 0, !1) : 0, e.prototype.userId = ut.Long ? ut.Long.fromBits(0, 0, !1) : 0, e.prototype.nickName = "", e.prototype.gameName = "", e.prototype.nonce = 0, e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.winAmount = "", e.prototype.odds = 0, e.prototype.betTime = ut.Long ? ut.Long.fromBits(0, 0, !1) : 0, e.prototype.type = "", e.prototype.distributeId = ut.Long ? ut.Long.fromBits(0, 0, !1) : 0, e.prototype.oddsString = "", e.prototype.gv = "", e.encode = function(t, n) {
        return n || (n = $s.create()), t.gameId != null && Object.hasOwnProperty.call(t, "gameId") && n.uint32(8).sint64(t.gameId), t.userId != null && Object.hasOwnProperty.call(t, "userId") && n.uint32(24).sint64(t.userId), t.nickName != null && Object.hasOwnProperty.call(t, "nickName") && n.uint32(34).string(t.nickName), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && n.uint32(42).string(t.gameName), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && n.uint32(48).sint32(t.nonce), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(58).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(66).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && n.uint32(74).string(t.winAmount), t.odds != null && Object.hasOwnProperty.call(t, "odds") && n.uint32(80).sint32(t.odds), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && n.uint32(88).sint64(t.betTime), t.type != null && Object.hasOwnProperty.call(t, "type") && n.uint32(106).string(t.type), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && n.uint32(112).sint64(t.distributeId), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && n.uint32(122).string(t.oddsString), t.gv != null && Object.hasOwnProperty.call(t, "gv") && n.uint32(130).string(t.gv), n
    }, e.decode = function(t, n) {
        t instanceof dr || (t = dr.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new dn.BetLog;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.gameId = t.sint64();
                    break;
                case 3:
                    o.userId = t.sint64();
                    break;
                case 4:
                    o.nickName = t.string();
                    break;
                case 5:
                    o.gameName = t.string();
                    break;
                case 6:
                    o.nonce = t.sint32();
                    break;
                case 7:
                    o.currencyName = t.string();
                    break;
                case 8:
                    o.betAmount = t.string();
                    break;
                case 9:
                    o.winAmount = t.string();
                    break;
                case 10:
                    o.odds = t.sint32();
                    break;
                case 11:
                    o.betTime = t.sint64();
                    break;
                case 13:
                    o.type = t.string();
                    break;
                case 14:
                    o.distributeId = t.sint64();
                    break;
                case 15:
                    o.oddsString = t.string();
                    break;
                case 16:
                    o.gv = t.string();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e
})();
const mr = ["fish-prawn-crab", "sicbo-multiplayer"],
    Us = () => !0,
    jo = ht(null);

function Ms(t) {
    return E(this, arguments, function*({
        queryKey: e
    }) {
        return yield mn(), W().post(e[0], e[1])
    })
}

function Fs(t) {
    return E(this, arguments, function*({
        queryKey: e
    }) {
        return (yield W().post(e[0], e[1])).list.map(n => {
            const r = JSON.parse(n.gameDetail),
                {
                    hash: o,
                    value: i,
                    rate: a,
                    diceResults: s
                } = r;
            return {
                gameId: n.gameId,
                hash: o,
                value: i,
                maxRate: a || 0,
                points: s || []
            }
        })
    })
}

function qs(e) {
    const t = vr({
            logFilter: Us
        }, e),
        [n] = G(t, ["game"]),
        {
            addData: r
        } = wn()[1],
        [o, i] = Rt({
            logsFromGame: [],
            myLogsFromGame: []
        }),
        [a, s] = U(20),
        u = (l = t.game.config.key, mt(() => ({
            queryKey: ["/game/bet/multi/history", {
                gameUrl: l,
                page: 1,
                pageSize: 50
            }],
            queryFn: Fs,
            staleTime: 0
        })));
    var l;
    const c = function(h, m) {
            return mt(() => ({
                queryKey: ["/game/bet/recent-bet/", {
                    gameUrl: h,
                    size: m()
                }],
                queryFn: Ms,
                staleTime: 0
            }))
        }(t.game.config.key, a),
        p = Xn(() => (c.data || []).map(h => T(N({}, h), {
            odds: h.odds / n.game.oddsScale
        })), []),
        b = ot(() => lt([...o.myLogsFromGame, ...p()], "distributeId")),
        v = ot(() => {
            var h;
            return es(lt([...o.logsFromGame, ...((h = u.data) == null ? void 0 : h.map(m => {
                var f;
                return t.game.config.key === "patti" ? T(N({}, m), {
                    value: m != null && m.hash ? (f = tr(m.hash)) == null ? void 0 : f.map(w => Xe(w).txt).join(",") : ""
                }) : mr.includes(t.game.config.key) ? T(N({}, m), {
                    value: `${We(m==null?void 0:m.points)}`
                }) : m
            })) || []], "gameId"), "gameId", "desc")
        }),
        I = h => {
            const m = ie(h),
                {
                    winAmount: f,
                    betAmount: w
                } = m.bets[0],
                S = Object.assign(m, {
                    winAmount: Number(f),
                    betAmount: Number(w),
                    odds: Number(m.odds) / n.game.oddsScale
                });
            i("myLogsFromGame", j => lt([S, ...j], "distributeId").filter(t.logFilter))
        },
        g = wr(t.game.settle$);
    return V(() => {
        const h = g();
        if (h) {
            const m = h.roundId ? h.roundId.toNumber().toString() : h.gameId.toNumber().toString(),
                f = t.game.config.key === "patti" ? tr(h.hash) : [],
                w = t.game.config.key === "patti" && (f == null ? void 0 : f.length) > 0 ? f == null ? void 0 : f.map(x => Xe(x).txt).join(",") : void 0,
                S = mr.includes(t.game.config.key) && `${We(h==null?void 0:h.points)}`,
                j = h.betValue || h.value || w || S || void 0,
                A = T(N({}, h), {
                    gameId: m,
                    value: j
                });
            i("logsFromGame", x => [A, ...Array.isArray(x) ? x : []])
        }
    }), V(() => {
        const h = $().decodeBind(w => {
                const {
                    betAmount: S,
                    odds: j,
                    currencyName: A
                } = w;
                r(Number(S), Number(j / n.game.oddsScale), A), i("myLogsFromGame", x => lt([T(N({}, w), {
                    gameId: w.gameId.toNumber().toString(),
                    betTime: w.betTime.toNumber(),
                    betAmount: Number(w.betAmount),
                    winAmount: Number(w.winAmount),
                    odds: w.odds / n.game.oddsScale,
                    distributeId: w.distributeId.toString(),
                    gv: JSON.parse(w.gv) || {}
                }), ...x].filter(t.logFilter), "distributeId"))
            }, dn.BetLog),
            m = $().socket("/multi" + t.game.option$.value.namespace);
        m.connect();
        const f = m.on("multilmybetlog", h);
        z(() => {
            f.off("multilmybetlog")
        })
    }), P(jo.Provider, {
        get value() {
            return T(N({}, n), {
                logs: v,
                myLogs: b,
                size: a,
                setSize: s,
                addLog: I
            })
        },
        get children() {
            return t.children
        }
    })
}

function Cu() {
    return vt(jo)
}
ui({}, {
    CloseButton: () => Po,
    Description: () => xo,
    List: () => be,
    ProgressFill: () => To,
    ProgressTrack: () => Bo,
    Region: () => ge,
    Root: () => _o,
    Title: () => Lo,
    Toast: () => Ys,
    toaster: () => Co
});
var No = ht();

function In() {
    const e = vt(No);
    if (e === void 0) throw new Error("[kobalte]: `useToastContext` must be used within a `Toast.Root` component");
    return e
}

function Po(e) {
    const t = In(),
        [n, r] = G(e, ["aria-label", "onClick"]);
    return P(ti, Z({
        get "aria-label" () {
            return n["aria-label"] || t.translations().close
        },
        onClick: o => {
            rt(o, n.onClick), t.close()
        }
    }, r))
}

function xo(e) {
    const t = In(),
        n = pn({
            id: t.generateId("description")
        }, e),
        [r, o] = G(n, ["id"]);
    return V(() => z(t.registerDescriptionId(r.id))), P(It, Z({
        as: "div",
        get id() {
            return r.id
        }
    }, o))
}
var ko = ht();

function pe() {
    const e = vt(ko);
    if (e === void 0) throw new Error("[kobalte]: `useToastRegionContext` must be used within a `Toast.Region` component");
    return e
}

function be(e) {
    let t;
    const n = pe(),
        [r, o] = G(e, ["ref", "onFocusIn", "onFocusOut", "onPointerMove", "onPointerLeave"]);
    return V(Dt([() => t, () => n.hotkey()], ([i, a]) => {
        if (Jo || !i) return;
        const s = Ie(i),
            u = l => {
                a.every(c => l[c] || l.code === c) && di(i)
            };
        s.addEventListener("keydown", u), z(() => s.removeEventListener("keydown", u))
    })), V(() => {
        if (!n.pauseOnPageIdle()) return;
        const i = ci(t);
        i.addEventListener("blur", n.pauseAllTimer), i.addEventListener("focus", n.resumeAllTimer), z(() => {
            i.removeEventListener("blur", n.pauseAllTimer), i.removeEventListener("focus", n.resumeAllTimer)
        })
    }), P(It, Z({
        as: "ol",
        ref(i) {
            var a = kr(s => t = s, r.ref);
            typeof a == "function" && a(i)
        },
        tabIndex: -1,
        onFocusIn: i => {
            rt(i, r.onFocusIn), n.pauseOnInteraction() && !n.isPaused() && n.pauseAllTimer()
        },
        onFocusOut: i => {
            rt(i, r.onFocusOut), Oe(t, i.relatedTarget) || n.resumeAllTimer()
        },
        onPointerMove: i => {
            rt(i, r.onPointerMove), n.pauseOnInteraction() && !n.isPaused() && n.pauseAllTimer()
        },
        onPointerLeave: i => {
            rt(i, r.onPointerLeave), Oe(t, Ie(t).activeElement) || n.resumeAllTimer()
        }
    }, o, {
        get children() {
            return P(Ir, {
                get each() {
                    return n.toasts()
                },
                children: i => i.toastComponent({
                    get toastId() {
                        return i.id
                    }
                })
            })
        }
    }))
}

function To(e) {
    const t = pe(),
        n = In(),
        [r, o] = G(e, ["style"]),
        [i, a] = U(100);
    let s = 0;
    return V(() => {
        if (t.isPaused() || n.isPersistent()) return;
        const u = setInterval(() => {
            const l = new Date().getTime() - n.closeTimerStartTime() + s,
                c = Math.trunc(100 - l / n.duration() * 100);
            a(c < 0 ? 0 : c)
        });
        z(() => {
            s += new Date().getTime() - n.closeTimerStartTime(), clearInterval(u)
        })
    }), P(It, Z({
        as: "div",
        get style() {
            return N({
                "--kb-toast-progress-fill-width": `${i()}%`
            }, r.style)
        }
    }, o))
}

function Bo(e) {
    return P(It, Z({
        as: "div",
        "aria-hidden": "true",
        role: "presentation"
    }, e))
}
var [Ln, Vt] = Rt({
    toasts: []
}), yt = {
    toasts: () => Ln.toasts,
    add: function(e) {
        Vt("toasts", t => [...t, e])
    },
    get: function(e) {
        return Ln.toasts.find(t => t.id === e)
    },
    update: function(e, t) {
        const n = Ln.toasts.findIndex(r => r.id === e);
        n !== -1 && Vt("toasts", r => [...r.slice(0, n), t, ...r.slice(n + 1)])
    },
    dismiss: function(e) {
        Vt("toasts", t => t.id === e, "dismiss", !0)
    },
    remove: function(e) {
        Vt("toasts", t => t.filter(n => n.id !== e))
    },
    clear: function() {
        Vt("toasts", [])
    }
}, fr = "{hotkey}", zs = {
    close: "Close"
}, Gs = {
    notifications: e => `Notifications (${e})`
};

function ge(e) {
    const t = pn({
            id: `toast-region-${Or()}`,
            hotkey: ["altKey", "KeyT"],
            duration: 5e3,
            limit: 3,
            swipeDirection: "right",
            swipeThreshold: 50,
            pauseOnInteraction: !0,
            pauseOnPageIdle: !0,
            topLayer: !0,
            translations: Gs
        }, e),
        [n, r] = G(t, ["translations", "style", "hotkey", "duration", "limit", "swipeDirection", "swipeThreshold", "pauseOnInteraction", "pauseOnPageIdle", "topLayer", "aria-label", "regionId"]),
        o = ot(() => yt.toasts().filter(c => c.region === n.regionId).slice(0, n.limit)),
        [i, a] = U(!1),
        s = () => (n["aria-label"] || n.translations.notifications(fr)).replace(fr, n.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "")),
        u = () => ({
            [mi]: n.topLayer ? "" : void 0
        }),
        l = {
            isPaused: i,
            toasts: o,
            hotkey: () => n.hotkey,
            duration: () => n.duration,
            swipeDirection: () => n.swipeDirection,
            swipeThreshold: () => n.swipeThreshold,
            pauseOnInteraction: () => n.pauseOnInteraction,
            pauseOnPageIdle: () => n.pauseOnPageIdle,
            pauseAllTimer: () => a(!0),
            resumeAllTimer: () => a(!1),
            generateId: Tr(() => r.id)
        };
    return P(ko.Provider, {
        value: l,
        get children() {
            return P(It, Z({
                as: "div",
                role: "region",
                tabIndex: -1,
                get "aria-label" () {
                    return s()
                },
                get style() {
                    return N({
                        "pointer-events": o().length > 0 ? n.topLayer ? "auto" : void 0 : "none"
                    }, n.style)
                }
            }, u, r))
        }
    })
}
var Rs = "toast.swipeStart",
    Ks = "toast.swipeMove",
    Js = "toast.swipeCancel",
    Ws = "toast.swipeEnd";

function _o(e) {
    const t = pe(),
        n = pn({
            id: `toast-${Or()}`,
            priority: "high",
            translations: zs
        }, e),
        [r, o] = G(n, ["ref", "translations", "toastId", "style", "priority", "duration", "persistent", "onPause", "onResume", "onSwipeStart", "onSwipeMove", "onSwipeCancel", "onSwipeEnd", "onEscapeKeyDown", "onKeyDown", "onPointerDown", "onPointerMove", "onPointerUp"]),
        [i, a] = U(!0),
        [s, u] = U(),
        [l, c] = U(),
        [p, b] = U(!0),
        [v, I] = U(),
        {
            present: g
        } = li({
            show: i,
            element: () => {
                var y;
                return (y = v()) != null ? y : null
            }
        }),
        h = ot(() => r.duration || t.duration());
    let m, f = 0,
        w = h(),
        S = null,
        j = null;
    const A = () => {
            a(!1), b(!0)
        },
        x = y => {
            y && !r.persistent && (window.clearTimeout(m), f = new Date().getTime(), m = window.setTimeout(A, y))
        },
        H = y => {
            var L;
            rt(y, r.onKeyDown), y.key === "Escape" && ((L = r.onEscapeKeyDown) == null || L.call(r, y), y.defaultPrevented || A())
        },
        ft = y => {
            rt(y, r.onPointerDown), y.button === 0 && (S = {
                x: y.clientX,
                y: y.clientY
            })
        },
        tt = y => {
            if (rt(y, r.onPointerMove), !S) return;
            const L = y.clientX - S.x,
                K = y.clientY - S.y,
                J = !!j,
                Y = ["left", "right"].includes(t.swipeDirection()),
                nt = ["left", "up"].includes(t.swipeDirection()) ? Math.min : Math.max,
                at = Y ? nt(0, L) : 0,
                St = Y ? 0 : nt(0, K),
                On = y.pointerType === "touch" ? 10 : 2,
                Ct = {
                    x: at,
                    y: St
                },
                ye = {
                    originalEvent: y,
                    delta: Ct
                };
            if (J) {
                j = Ct, tn(Ks, r.onSwipeMove, ye);
                const {
                    x: $o,
                    y: Uo
                } = Ct;
                y.currentTarget.setAttribute("data-swipe", "move"), y.currentTarget.style.setProperty("--kb-toast-swipe-move-x", `${$o}px`), y.currentTarget.style.setProperty("--kb-toast-swipe-move-y", `${Uo}px`)
            } else pr(Ct, t.swipeDirection(), On) ? (j = Ct, tn(Rs, r.onSwipeStart, ye), y.currentTarget.setAttribute("data-swipe", "start"), y.target.setPointerCapture(y.pointerId)) : (Math.abs(L) > On || Math.abs(K) > On) && (S = null)
        },
        R = y => {
            rt(y, r.onPointerUp);
            const L = j,
                K = y.target;
            if (K.hasPointerCapture(y.pointerId) && K.releasePointerCapture(y.pointerId), j = null, S = null, L) {
                const J = y.currentTarget,
                    Y = {
                        originalEvent: y,
                        delta: L
                    };
                if (pr(L, t.swipeDirection(), t.swipeThreshold())) {
                    tn(Ws, r.onSwipeEnd, Y);
                    const {
                        x: nt,
                        y: at
                    } = L;
                    y.currentTarget.setAttribute("data-swipe", "end"), y.currentTarget.style.removeProperty("--kb-toast-swipe-move-x"), y.currentTarget.style.removeProperty("--kb-toast-swipe-move-y"), y.currentTarget.style.setProperty("--kb-toast-swipe-end-x", `${nt}px`), y.currentTarget.style.setProperty("--kb-toast-swipe-end-y", `${at}px`), A()
                } else tn(Js, r.onSwipeCancel, Y), y.currentTarget.setAttribute("data-swipe", "cancel"), y.currentTarget.style.removeProperty("--kb-toast-swipe-move-x"), y.currentTarget.style.removeProperty("--kb-toast-swipe-move-y"), y.currentTarget.style.removeProperty("--kb-toast-swipe-end-x"), y.currentTarget.style.removeProperty("--kb-toast-swipe-end-y");
                J.addEventListener("click", nt => nt.preventDefault(), {
                    once: !0
                })
            }
        };
    Sr(() => {
        t.toasts().find(y => y.id === r.toastId && y.update) && b(!1)
    }), V(Dt(() => t.isPaused(), y => {
        var L;
        y ? (() => {
            var J;
            const K = new Date().getTime() - f;
            w -= K, window.clearTimeout(m), (J = r.onPause) == null || J.call(r)
        })() : (x(w), (L = r.onResume) == null || L.call(r))
    }, {
        defer: !0
    })), V(Dt([i, h], ([y, L]) => {
        y && !t.isPaused() && x(L)
    })), V(Dt(() => {
        var y;
        return (y = yt.get(r.toastId)) == null ? void 0 : y.dismiss
    }, y => y && A())), V(Dt(() => g(), y => !y && void yt.remove(r.toastId)));
    const Ht = {
        translations: () => r.translations,
        close: A,
        duration: h,
        isPersistent: () => {
            var y;
            return (y = r.persistent) != null ? y : !1
        },
        closeTimerStartTime: () => f,
        generateId: Tr(() => o.id),
        registerTitleId: Se(u),
        registerDescriptionId: Se(c)
    };
    return P(Wo, {
        get when() {
            return g()
        },
        get children() {
            return P(No.Provider, {
                value: Ht,
                get children() {
                    return P(It, Z({
                        as: "li",
                        ref(y) {
                            var L = kr(I, r.ref);
                            typeof L == "function" && L(y)
                        },
                        role: "status",
                        tabIndex: 0,
                        get style() {
                            return N({
                                animation: p() ? void 0 : "none",
                                "user-select": "none",
                                "touch-action": "none"
                            }, r.style)
                        },
                        get "aria-live" () {
                            return r.priority === "high" ? "assertive" : "polite"
                        },
                        "aria-atomic": "true",
                        get "aria-labelledby" () {
                            return s()
                        },
                        get "aria-describedby" () {
                            return l()
                        },
                        get "data-opened" () {
                            return i() ? "" : void 0
                        },
                        get "data-closed" () {
                            return i() ? void 0 : ""
                        },
                        get "data-swipe-direction" () {
                            return t.swipeDirection()
                        },
                        onKeyDown: H,
                        onPointerDown: ft,
                        onPointerMove: tt,
                        onPointerUp: R
                    }, o))
                }
            })
        }
    })
}

function pr(e, t, n = 0) {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}

function tn(e, t, n) {
    const r = n.originalEvent.currentTarget,
        o = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), r.dispatchEvent(o)
}

function Lo(e) {
    const t = In(),
        n = pn({
            id: t.generateId("title")
        }, e),
        [r, o] = G(n, ["id"]);
    return V(() => z(t.registerTitleId(r.id))), P(It, Z({
        as: "div",
        get id() {
            return r.id
        }
    }, o))
}
var Hs = 0;

function br(e, t) {
    const n = Hs++;
    return yt.add({
        id: n,
        toastComponent: e,
        dismiss: !1,
        update: !1,
        region: t == null ? void 0 : t.region
    }), n
}

function Cn(e, t) {
    yt.update(e, {
        id: e,
        toastComponent: t,
        dismiss: !1,
        update: !0
    })
}
var Co = {
        show: br,
        update: Cn,
        promise: function(e, t, n) {
            const r = br(o => t({
                get toastId() {
                    return o.toastId
                },
                state: "pending"
            }), n);
            return (fi(e) ? e() : e).then(o => Cn(r, i => t({
                get toastId() {
                    return i.toastId
                },
                state: "fulfilled",
                data: o
            }))).catch(o => Cn(r, i => t({
                get toastId() {
                    return i.toastId
                },
                state: "rejected",
                error: o
            }))), r
        },
        dismiss: function(e) {
            return yt.dismiss(e), e
        },
        clear: function() {
            yt.clear()
        }
    },
    Ys = Object.assign(_o, {
        CloseButton: Po,
        Description: xo,
        List: be,
        ProgressFill: To,
        ProgressTrack: Bo,
        Region: ge,
        Title: Lo,
        toaster: Co
    });
const Qs = ni("fixed z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-2 sm:flex-col md:max-w-[420px]", {
        variants: {
            regionId: {
                "top-left": "top-0 left-0",
                "top-center": "top-0 left-1/2 -translate-x-1/2",
                "top-right": "top-0 right-0",
                "bottom-left": "bottom-0 left-0",
                "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
                "bottom-right": "bottom-0 right-0",
                center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            }
        },
        defaultVariants: {
            regionId: "bottom-left"
        }
    }),
    Xs = e => {
        const [t, n] = G(e, ["class"]), r = ["top-left", "top-right", "top-center", "bottom-left", "bottom-center", "bottom-right", "center"];
        return P(Ho, {
            get children() {
                return P(Ir, {
                    each: r,
                    children: o => P(ge, {
                        regionId: o,
                        limit: 5,
                        get children() {
                            return P(be, Z({
                                get class() {
                                    return si(Qs({
                                        regionId: o
                                    }), t.class)
                                }
                            }, n))
                        }
                    })
                })
            }
        })
    },
    At = C.Reader,
    Vn = C.Writer,
    q = C.util,
    et = C.roots.gameSlots || (C.roots.gameSlots = {});
et.MyBetLog = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.gameId = "", e.prototype.userId = q.Long ? q.Long.fromBits(0, 0, !1) : 0, e.prototype.nickName = "", e.prototype.gameName = "", e.prototype.nonce = 0, e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.winAmount = "", e.prototype.odds = 0, e.prototype.betTime = q.Long ? q.Long.fromBits(0, 0, !1) : 0, e.prototype.type = "", e.prototype.distributeId = q.Long ? q.Long.fromBits(0, 0, !1) : 0, e.prototype.oddsString = "", e.encode = function(t, n) {
        return n || (n = Vn.create()), t.gameId != null && Object.hasOwnProperty.call(t, "gameId") && n.uint32(10).string(t.gameId), t.userId != null && Object.hasOwnProperty.call(t, "userId") && n.uint32(24).sint64(t.userId), t.nickName != null && Object.hasOwnProperty.call(t, "nickName") && n.uint32(34).string(t.nickName), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && n.uint32(42).string(t.gameName), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && n.uint32(48).sint32(t.nonce), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(58).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(66).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && n.uint32(74).string(t.winAmount), t.odds != null && Object.hasOwnProperty.call(t, "odds") && n.uint32(80).sint32(t.odds), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && n.uint32(88).sint64(t.betTime), t.type != null && Object.hasOwnProperty.call(t, "type") && n.uint32(106).string(t.type), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && n.uint32(112).sint64(t.distributeId), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && n.uint32(122).string(t.oddsString), n
    }, e.decode = function(t, n) {
        t instanceof At || (t = At.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new et.MyBetLog;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 1:
                    o.gameId = t.string();
                    break;
                case 3:
                    o.userId = t.sint64();
                    break;
                case 4:
                    o.nickName = t.string();
                    break;
                case 5:
                    o.gameName = t.string();
                    break;
                case 6:
                    o.nonce = t.sint32();
                    break;
                case 7:
                    o.currencyName = t.string();
                    break;
                case 8:
                    o.betAmount = t.string();
                    break;
                case 9:
                    o.winAmount = t.string();
                    break;
                case 10:
                    o.odds = t.sint32();
                    break;
                case 11:
                    o.betTime = t.sint64();
                    break;
                case 13:
                    o.type = t.string();
                    break;
                case 14:
                    o.distributeId = t.sint64();
                    break;
                case 15:
                    o.oddsString = t.string();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e
})(), et.AllBetLog = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.userId = q.Long ? q.Long.fromBits(0, 0, !1) : 0, e.prototype.nickName = "", e.prototype.gameName = "", e.prototype.nonce = 0, e.prototype.currencyName = "", e.prototype.betAmount = "", e.prototype.winAmount = "", e.prototype.odds = 0, e.prototype.betTime = q.Long ? q.Long.fromBits(0, 0, !1) : 0, e.prototype.distributeId = q.Long ? q.Long.fromBits(0, 0, !1) : 0, e.prototype.type = "", e.prototype.oddsString = "", e.encode = function(t, n) {
        return n || (n = Vn.create()), t.userId != null && Object.hasOwnProperty.call(t, "userId") && n.uint32(16).sint64(t.userId), t.nickName != null && Object.hasOwnProperty.call(t, "nickName") && n.uint32(26).string(t.nickName), t.gameName != null && Object.hasOwnProperty.call(t, "gameName") && n.uint32(34).string(t.gameName), t.nonce != null && Object.hasOwnProperty.call(t, "nonce") && n.uint32(40).sint32(t.nonce), t.currencyName != null && Object.hasOwnProperty.call(t, "currencyName") && n.uint32(50).string(t.currencyName), t.betAmount != null && Object.hasOwnProperty.call(t, "betAmount") && n.uint32(58).string(t.betAmount), t.winAmount != null && Object.hasOwnProperty.call(t, "winAmount") && n.uint32(66).string(t.winAmount), t.odds != null && Object.hasOwnProperty.call(t, "odds") && n.uint32(72).sint32(t.odds), t.betTime != null && Object.hasOwnProperty.call(t, "betTime") && n.uint32(80).sint64(t.betTime), t.distributeId != null && Object.hasOwnProperty.call(t, "distributeId") && n.uint32(96).sint64(t.distributeId), t.type != null && Object.hasOwnProperty.call(t, "type") && n.uint32(106).string(t.type), t.oddsString != null && Object.hasOwnProperty.call(t, "oddsString") && n.uint32(114).string(t.oddsString), n
    }, e.decode = function(t, n) {
        t instanceof At || (t = At.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new et.AllBetLog;
        for (; t.pos < r;) {
            let i = t.uint32();
            switch (i >>> 3) {
                case 2:
                    o.userId = t.sint64();
                    break;
                case 3:
                    o.nickName = t.string();
                    break;
                case 4:
                    o.gameName = t.string();
                    break;
                case 5:
                    o.nonce = t.sint32();
                    break;
                case 6:
                    o.currencyName = t.string();
                    break;
                case 7:
                    o.betAmount = t.string();
                    break;
                case 8:
                    o.winAmount = t.string();
                    break;
                case 9:
                    o.odds = t.sint32();
                    break;
                case 10:
                    o.betTime = t.sint64();
                    break;
                case 12:
                    o.distributeId = t.sint64();
                    break;
                case 13:
                    o.type = t.string();
                    break;
                case 14:
                    o.oddsString = t.string();
                    break;
                default:
                    t.skipType(7 & i)
            }
        }
        return o
    }, e
})(), et.RoomIdParam = (() => {
    function e(t) {
        if (t)
            for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
    }
    return e.prototype.roomId = "", e.encode = function(t, n) {
        return n || (n = Vn.create()), t.roomId != null && Object.hasOwnProperty.call(t, "roomId") && n.uint32(10).string(t.roomId), n
    }, e.decode = function(t, n) {
        t instanceof At || (t = At.create(t));
        let r = n === void 0 ? t.len : t.pos + n,
            o = new et.RoomIdParam;
        for (; t.pos < r;) {
            let i = t.uint32();
            i >>> 3 == 1 ? o.roomId = t.string() : t.skipType(7 & i)
        }
        return o
    }, e
})();
const Zs = $().encode(et.RoomIdParam);
class Hn extends vn {
    constructor(t) {
        super(t), this.oddsScale = 1e4, this.amountScale = 1e4, this.allbet$ = new M(null), this.mybets$ = new M(null), this.isWatching = !1, this.connection = this.connection$.asObservable()
    }
    init() {}
}
const Yn = class on extends Hn {
    constructor() {
        super(Nn), this.gameUnique = "", this.config = Nn, this.mybets$ = new M([]), this.allbet$ = new M([]), this.bet$ = new M(null), this.jackpot$ = new M([]), this.onMybet = $().decodeBind(t => {
            this.mybets$.next([T(N({}, t), {
                distributeId: t.distributeId.toString(),
                odds: Number(t.oddsString) || 0
            }), ...this.mybets$.value].slice(0, 20))
        }, et.MyBetLog), this.onAllbet = $().decodeBind(t => {
            this.allbet$.next(T(N({}, t), {
                distributeId: t.distributeId.toString(),
                odds: Number(t.oddsString) || 0
            }))
        }, et.AllBetLog), this._onConnect = () => {
            this.initGame(), this.loadMybet(), this.loadAllbet()
        }, this.config = Nn
    }
    isWin(t) {
        return !1
    }
    getResult(t, ...n) {
        return {
            payout: 0,
            profit: 0
        }
    }
    bvMapper(t) {
        return t
    }
    calcMaxProfit(t) {
        return new ct(0)
    }
    watch(t) {
        return E(this, null, function*() {
            this.gameUnique = t, on.mybetSocket.connect(), this.socket.on("connect", this._onConnect);
            const n = yield ue(t);
            n && (this.allbetSocket = $().socket(n.gameIdentity.socketNameSpace), this.allbetSocket.connect(), this.allbetSocket.on("allbet", this.onAllbet)), on.mybetSocket.on("slotsmybetlog", this.onMybet)
        })
    }
    unwatch(t) {
        this.socket.off("connect", this._onConnect), this.gameUnique = t, on.mybetSocket.off("slotsmybetlog", this.onMybet), this.socket.emit("leave", Zs({
            roomId: this.gameUnique
        })), this.allbetSocket && (this.allbetSocket.off("allbet", this.onAllbet), this.allbetSocket.disconnect()), this.socket.disconnect()
    }
    play(t) {
        return E(this, null, function*() {
            return Promise.resolve()
        })
    }
    loadMybet() {
        return E(this, null, function*() {
            yield mn();
            let t = yield W().post("/game/bet/recent-bet", {
                gameUrl: this.gameUnique
            });
            t = t.map(n => (n.odds = n.odds / this.oddsScale, n)), this.mybets$.next([...t])
        })
    }
    loadAllbet() {
        return E(this, null, function*() {
            let t = yield W().get(`/game/bet/all-bet/${this.gameUnique}`);
            t = t.map(n => (n.odds = n.odds / this.oddsScale, n)), this.allbet$.next([...t])
        })
    }
    betValue(t) {
        return {}
    }
    initGame() {
        return E(this, null, function*() {})
    }
};
Yn.mybetSocket = $().socket("/g/data/slots"), Yn.alias = "SlotsGame";
const Vu = _s(Yn),
    Vo = ht(null);

function tu(e) {
    const [t] = G(e, ["game"]), n = t.game, {
        addData: r,
        clearData: o
    } = wn()[1], [i, a] = U(50), {
        queue: s,
        addItem: u,
        setDataQueue: l
    } = So(20), c = wr(n.mybets$);
    return Sr(() => {
        const p = n.allbet$.pipe(Jn(b => !Qr(b))).subscribe(b => {
            if (Array.isArray(b)) {
                const v = b.map(I => T(N({}, I), {
                    profit: new ct(I.winAmount || 0).minus(new ct(I.betAmount || 0)).toNumber()
                }));
                l(v)
            } else {
                const v = new ct(b.winAmount || 0).minus(new ct(b.betAmount || 0));
                u(T(N({}, b), {
                    profit: v.toNumber()
                }))
            }
        });
        z(() => {
            p.unsubscribe()
        })
    }), V(() => {
        const p = c()[0];
        p && r(Number(p.betAmount), Number(p.odds), p.currencyName)
    }), P(Vo.Provider, {
        value: {
            game: n,
            logs: s,
            myLogs: c,
            size: i,
            setSize: a
        },
        get children() {
            return e.children
        }
    })
}

function Du() {
    return vt(Vo)
}
class nu extends vn {
    constructor(t) {
        super(t), this.oddsScale = 1e4, this.amountScale = 1e4, this.gameUrl = "", this.allbet$ = new M(null), this.mybets$ = new M(null), this.isWatching = !1, this.connection = this.connection$.asObservable()
    }
    init() {}
}
const eu = () => !0,
    Do = ht(null),
    ru = t => E(void 0, [t], function*({
        queryKey: e
    }) {
        return (yield W().post("/game/bet/multi/history", {
            gameUrl: e[1],
            page: 1,
            pageSize: 50
        })).list.map(n => {
            const r = JSON.parse(n.gameDetail),
                {
                    hash: o,
                    resultValue: i,
                    rate: a,
                    clientSeed: s,
                    serverSeed: u
                } = r;
            return {
                gameId: n.gameId,
                hash: o,
                value: i,
                maxRate: a || 0,
                clientSeed: s,
                serverSeed: u
            }
        })
    }),
    ou = t => E(void 0, [t], function*({
        queryKey: e
    }) {
        return yield mn(), yield W().post("/game/bet/recent-bet/", {
            gameUrl: e[1]
        })
    });

function iu(e) {
    const t = vr({
            logFilter: eu
        }, e),
        [n] = G(e, ["game"]),
        {
            addData: r
        } = wn()[1],
        [o, i] = Rt({
            logsFromGame: [],
            myLogsFromGame: []
        }),
        [a, s] = U(50),
        u = mt(() => ({
            queryKey: ["/game/bet/multi/history", e.game.config.id],
            queryFn: ru
        })),
        l = mt(() => ({
            queryKey: ["/game/bet/recent-bet/", e.game.config.id, a()],
            queryFn: ou
        })),
        c = Xn(() => l.data, []),
        p = ot(() => [...o.myLogsFromGame, ...c()]),
        b = ot(() => [...o.logsFromGame, ...u.data || []]),
        v = I => {
            const g = ie(I),
                {
                    winAmount: h,
                    betAmount: m
                } = g.bets[0],
                f = Object.assign(g, {
                    winAmount: Number(h),
                    betAmount: Number(m)
                });
            i("myLogsFromGame", w => lt([f, ...w], "distributeId"))
        };
    return V(() => {
        const I = $().decodeBind(m => {
                i("myLogsFromGame", f => lt([T(N({}, m), {
                    gameId: m.gameId.toNumber(),
                    betTime: m.betTime.toNumber(),
                    betAmount: Number(m.betAmount),
                    winAmount: Number(m.winAmount),
                    odds: m.odds,
                    distributeId: m.distributeId.toString()
                }), ...f], "distributeId")), r(Number(m.betAmount), Number(m.odds / 1e4), m.currencyName)
            }, dn.BetLog),
            g = $().socket("/multi" + t.game.config.namespace);
        g.connect();
        const h = g.on("multilmybetlog", I);
        z(() => {
            h.off("multilmybetlog")
        })
    }), P(Do.Provider, {
        get value() {
            return T(N({}, n), {
                logs: b,
                myLogs: p,
                size: a,
                setSize: s,
                addLog: v
            })
        },
        get children() {
            return e.children
        }
    })
}

function Eu() {
    return vt(Do)
}
const Eo = ht();

function $u(e) {
    const t = ot(() => {
        const n = e.game;
        if (!n) return;
        const r = JSON.parse(localStorage.getItem(`ns-${n.gameName}`)) || Io,
            o = Zn(),
            i = ii(n.connection),
            [a, s] = U(en.normal),
            [u, l] = U(r.hotKeysEnable),
            [c, p] = U(!1);
        return V(b => {
            const v = Qn.login;
            return b !== !0 && z(n.online()), v
        }), V(() => {
            (n instanceof lr || n instanceof Hn) && (n.watch(o.gameUnique), z(() => {
                n.unwatch(o.gameUnique)
            }))
        }), V(() => {
            localStorage.setItem(`ns-${n.gameName}`, JSON.stringify(T(N({}, r), {
                hotKeysEnable: u()
            })))
        }), {
            game: n,
            connection: i,
            status: a,
            hotKeysEnable: u,
            setHotKeysEnable: l,
            isMovieMode: c,
            setIsMovieMode: p,
            updateGameStatus: b => {
                if (b instanceof Error) {
                    const v = b.message === "need user login" ? en.authFail : en.unknownServerError;
                    s(v)
                } else s(b)
            }
        }
    });
    return P(Eo.Provider, {
        get value() {
            return t()
        },
        get children() {
            return [st(() => st(() => e.game instanceof Oo)() && P(Vs, {
                get game() {
                    return e.game
                },
                get children() {
                    return e.children
                }
            })), st(() => st(() => e.game instanceof lr)() && P(qs, Z(e, {
                get game() {
                    return e.game
                },
                get children() {
                    return e.children
                }
            }))), st(() => st(() => e.game instanceof Hn)() && P(tu, {
                get game() {
                    return e.game
                },
                get children() {
                    return e.children
                }
            })), st(() => st(() => e.game instanceof nu)() && P(iu, {
                get game() {
                    return e.game
                },
                get children() {
                    return e.children
                }
            })), P(Xs, {})]
        }
    })
}

function Uu() {
    return vt(Eo)
}
export {
    O as $, en as A, Wn as B, ju as C, Su as D, Ps as E, xu as F, $u as G, Ou as H, Nu as I, Pu as J, ie as K, Bu as L, lr as M, Iu as N, F as O, ps as P, M as Q, lt as R, Oo as S, hu as T, cr as U, Bs as V, vi as W, Qr as X, Ot as Y, _t as Z, Bt as _, yu as a, Au as a0, Ts as a1, ao as a2, se as a3, Et as a4, yi as a5, Tu as a6, ku as a7, Ur as a8, Br as a9, Ya as aA, _r as aB, re as aC, _i as aD, Vu as aE, Jt as aa, Qt as ab, $n as ac, qt as ad, ee as ae, wi as af, Ti as ag, Mi as ah, sa as ai, Ka as aj, Q as ak, Io as al, wn as am, vu as an, wu as ao, je as ap, bn as aq, de as ar, es as as, $r as at, ns as au, D as av, hn as aw, Wa as ax, Yr as ay, zt as az, Uu as b, Lu as c, Cu as d, bs as e, ue as f, Hn as g, Du as h, nu as i, Eu as j, Qe as k, fs as l, Ls as m, Zr as n, Kn as o, wo as p, Tt as q, co as r, _s as s, _u as t, gu as u, me as v, dt as w, gt as x, oo as y, Jn as z
};