import {
    x as y,
    k as M,
    y as C,
    z as R,
    e as _,
    A as w
} from "./baseService-2efdc30b.js";
import {
    b as A
} from "./_baseIsEqual-837613bc.js";
import {
    i as L
} from "./_MapCache-91cc8331.js";
import {
    i as a
} from "./isArray-79a0be9c.js";
import {
    i as P,
    t as x
} from "./toString-1f7cb583.js";
import {
    m as D
} from "./memoize-91f976fa.js";
var S = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    $ = /^\w*$/;

function h(n, r) {
    if (a(n)) return !1;
    var i = typeof n;
    return i == "number" || i == "symbol" || i == "boolean" || n == null || P(n) ? !0 : $.test(n) || !S.test(n) || r != null && n in Object(r)
}
var F = 500;

function G(n) {
    var r = D(n, function(e) {
            return i.size === F && i.clear(), e
        }),
        i = r.cache;
    return r
}
var N = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    T = /\\(\\)?/g,
    z = G(function(n) {
        var r = [];
        return n.charCodeAt(0) === 46 && r.push(""), n.replace(N, function(i, e, t, f) {
            r.push(t ? f.replace(T, "$1") : e || i)
        }), r
    });
const K = z;

function I(n, r) {
    return a(n) ? n : h(n, r) ? [n] : K(x(n))
}
var U = 1 / 0;

function o(n) {
    if (typeof n == "string" || P(n)) return n;
    var r = n + "";
    return r == "0" && 1 / n == -U ? "-0" : r
}

function c(n, r) {
    r = I(r, n);
    for (var i = 0, e = r.length; n != null && i < e;) n = n[o(r[i++])];
    return i && i == e ? n : void 0
}

function Z(n, r, i) {
    var e = n == null ? void 0 : c(n, r);
    return e === void 0 ? i : e
}
var q = 1,
    v = 2;

function H(n, r, i, e) {
    var t = i.length,
        f = t,
        s = !e;
    if (n == null) return !f;
    for (n = Object(n); t--;) {
        var u = i[t];
        if (s && u[2] ? u[1] !== n[u[0]] : !(u[0] in n)) return !1
    }
    for (; ++t < f;) {
        u = i[t];
        var l = u[0],
            m = n[l],
            p = u[1];
        if (s && u[2]) {
            if (m === void 0 && !(l in n)) return !1
        } else {
            var g = new y;
            if (e) var d = e(m, p, l, n, r, g);
            if (!(d === void 0 ? A(p, m, q | v, e, g) : d)) return !1
        }
    }
    return !0
}

function E(n) {
    return n === n && !L(n)
}

function X(n) {
    for (var r = M(n), i = r.length; i--;) {
        var e = r[i],
            t = n[e];
        r[i] = [e, t, E(t)]
    }
    return r
}

function O(n, r) {
    return function(i) {
        return i == null ? !1 : i[n] === r && (r !== void 0 || n in Object(i))
    }
}

function Y(n) {
    var r = X(n);
    return r.length == 1 && r[0][2] ? O(r[0][0], r[0][1]) : function(i) {
        return i === n || H(i, n, r)
    }
}

function B(n, r) {
    return n != null && r in Object(n)
}

function J(n, r, i) {
    r = I(r, n);
    for (var e = -1, t = r.length, f = !1; ++e < t;) {
        var s = o(r[e]);
        if (!(f = n != null && i(n, s))) break;
        n = n[s]
    }
    return f || ++e != t ? f : (t = n == null ? 0 : n.length, !!t && C(t) && R(s, t) && (a(n) || _(n)))
}

function Q(n, r) {
    return n != null && J(n, r, B)
}
var W = 1,
    k = 2;

function b(n, r) {
    return h(n) && E(r) ? O(o(n), r) : function(i) {
        var e = Z(i, n);
        return e === void 0 && e === r ? Q(i, n) : A(r, e, W | k)
    }
}

function V(n) {
    return function(r) {
        return r == null ? void 0 : r[n]
    }
}

function j(n) {
    return function(r) {
        return c(r, n)
    }
}

function nn(n) {
    return h(n) ? V(o(n)) : j(n)
}

function an(n) {
    return typeof n == "function" ? n : n == null ? w : typeof n == "object" ? a(n) ? b(n[0], n[1]) : Y(n) : nn(n)
}
export {
    c as a, an as b, I as c, o as t
};