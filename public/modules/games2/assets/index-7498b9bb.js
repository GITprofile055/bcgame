var Le = Object.defineProperty,
    Ue = Object.defineProperties;
var Ve = Object.getOwnPropertyDescriptors;
var VA = Object.getOwnPropertySymbols;
var He = Object.prototype.hasOwnProperty,
    Fe = Object.prototype.propertyIsEnumerable;
var HA = (A, e, n) => e in A ? Le(A, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : A[e] = n,
    iA = (A, e) => {
        for (var n in e || (e = {})) He.call(e, n) && HA(A, n, e[n]);
        if (VA)
            for (var n of VA(e)) Fe.call(e, n) && HA(A, n, e[n]);
        return A
    },
    CA = (A, e) => Ue(A, Ve(e));
var sA = (A, e, n) => new Promise((i, s) => {
    var o = l => {
            try {
                t(n.next(l))
            } catch (m) {
                s(m)
            }
        },
        d = l => {
            try {
                t(n.throw(l))
            } catch (m) {
                s(m)
            }
        },
        t = l => l.done ? i(l.value) : Promise.resolve(l.value).then(o, d);
    t((n = n.apply(A, e)).next())
});
import {
    W as gA,
    A as c,
    Z as oA,
    Y as re,
    n as r,
    S as y,
    v as a,
    c as T,
    e as EA,
    a6 as Te,
    i as ae,
    a4 as Ne,
    L as DA,
    C as Y,
    B as V,
    k as AA,
    F as L,
    G as mA,
    f as BA,
    o as LA,
    J as eA,
    x as H,
    s as dA,
    z as N,
    r as Z,
    t as ne,
    y as P,
    q as fA,
    m as q,
    D as J,
    ak as Re,
    w as Ge,
    j as SA,
    ah as Ze,
    H as ze,
    b as lA,
    aP as je,
    aV as Je,
    I as FA,
    aQ as Ye,
    aW as We,
    aX as Ke,
    a as ie,
    U as Oe,
    aD as Xe,
    a2 as Pe,
    a9 as qe,
    aN as X,
    R as $e,
    K as TA,
    p as _e
} from "./manifest-47857305.js";
import {
    i as hA,
    c as At,
    J as UA,
    K as pA
} from "./amount-641aafec.js";
import {
    t as u
} from "./i18n-db65699e.js";
import {
    f as et
} from "./game-434e4797.js";
import {
    g as xA,
    o as tt
} from "./Layout-285b0914.js";
import {
    c as _
} from "./index-d927a8db.js";
import {
    u as rt
} from "./user-20d68319.js";
import {
    N as z,
    a as j,
    o as at,
    T as NA,
    b as RA,
    c as GA
} from "./number-field-6c429107.js";
import {
    c as MA
} from "./utils-65805dbc.js";
import {
    G as ZA
} from "./config-66839ee1.js";
import {
    k as nt,
    n as wA,
    S as bA,
    u as vA
} from "./SA27V5YJ-37d7d126.js";
import {
    b as it
} from "./router-5b68e988.js";
import {
    u as se
} from "./use-coin-format-283b73dd.js";
var st = /\s/,
    lt = /^\s+/;

function ot(A) {
    return A && A.slice(0, function(e) {
        for (var n = e.length; n-- && st.test(e.charAt(n)););
        return n
    }(A) + 1).replace(lt, "")
}
var zA = NaN,
    dt = /^[-+]0x[0-9a-f]+$/i,
    gt = /^0b[01]+$/i,
    ct = /^0o[0-7]+$/i,
    ut = parseInt;

function jA(A) {
    if (typeof A == "number") return A;
    if (nt(A)) return zA;
    if (hA(A)) {
        var e = typeof A.valueOf == "function" ? A.valueOf() : A;
        A = hA(e) ? e + "" : e
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = ot(A);
    var n = gt.test(A);
    return n || ct.test(A) ? ut(A.slice(2), n ? 2 : 8) : dt.test(A) ? zA : +A
}

function mt(A, e, n) {
    var i = A.length;
    return n = n === void 0 ? i : n, !e && n >= i ? A : function(s, o, d) {
        var t = -1,
            l = s.length;
        o < 0 && (o = -o > l ? 0 : l + o), (d = d > l ? l : d) < 0 && (d += l), l = o > d ? 0 : d - o >>> 0, o >>>= 0;
        for (var m = Array(l); ++t < l;) m[t] = s[t + o];
        return m
    }(A, e, n)
}
var ft = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

function le(A) {
    return ft.test(A)
}
var JA, oe = "\\ud800-\\udfff",
    ht = "[" + oe + "]",
    IA = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    kA = "\\ud83c[\\udffb-\\udfff]",
    de = "[^" + oe + "]",
    ge = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    ce = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    YA = "(?:" + IA + "|" + kA + ")?",
    WA = "[\\ufe0e\\ufe0f]?",
    bt = WA + YA + ("(?:\\u200d(?:" + [de, ge, ce].join("|") + ")" + WA + YA + ")*"),
    Bt = "(?:" + [de + IA + "?", IA, ge, ce, ht].join("|") + ")",
    pt = RegExp(kA + "(?=" + kA + ")|" + Bt + bt, "g");

function wt(A) {
    return le(A) ? function(e) {
        return e.match(pt) || []
    }(A) : function(e) {
        return e.split("")
    }(A)
}
const ue = (JA = "toUpperCase", function(A) {
    var e = le(A = wA(A)) ? wt(A) : void 0,
        n = e ? e[0] : A.charAt(0),
        i = e ? mt(e, 1).join("") : A.slice(1);
    return n[JA]() + i
});

function vt(A) {
    return ue(wA(A).toLowerCase())
}
var yA;
const Ct = (yA = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s"
}, function(A) {
    return yA == null ? void 0 : yA[A]
});
var xt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    yt = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
    Qt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    Et = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    me = "\\ud800-\\udfff",
    fe = "\\u2700-\\u27bf",
    he = "a-z\\xdf-\\xf6\\xf8-\\xff",
    be = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    Be = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    KA = "[" + Be + "]",
    pe = "\\d+",
    St = "[" + fe + "]",
    we = "[" + he + "]",
    ve = "[^" + me + Be + pe + fe + he + be + "]",
    Ce = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    xe = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    $ = "[" + be + "]",
    OA = "(?:" + we + "|" + ve + ")",
    Mt = "(?:" + $ + "|" + ve + ")",
    XA = "(?:['’](?:d|ll|m|re|s|t|ve))?",
    PA = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
    qA = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
    $A = "[\\ufe0e\\ufe0f]?",
    It = $A + qA + ("(?:\\u200d(?:" + ["[^" + me + "]", Ce, xe].join("|") + ")" + $A + qA + ")*"),
    kt = "(?:" + [St, Ce, xe].join("|") + ")" + It,
    Dt = RegExp([$ + "?" + we + "+" + XA + "(?=" + [KA, $, "$"].join("|") + ")", Mt + "+" + PA + "(?=" + [KA, $ + OA, "$"].join("|") + ")", $ + "?" + OA + "+" + XA, $ + "+" + PA, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", pe, kt].join("|"), "g");

function Lt(A, e, n) {
    return A = wA(A), (e = n ? void 0 : e) === void 0 ? function(i) {
        return Et.test(i)
    }(A) ? function(i) {
        return i.match(Dt) || []
    }(A) : function(i) {
        return i.match(Qt) || []
    }(A) : A.match(e) || []
}
var Ut = RegExp("['’]", "g"),
    _A, Vt = (_A = function(A, e, n) {
        return e = e.toLowerCase(), A + (n ? vt(e) : e)
    }, function(A) {
        return function(e, n, i, s) {
            var o = -1,
                d = e == null ? 0 : e.length;
            for (s && d && (i = e[++o]); ++o < d;) i = n(i, e[o], o, e);
            return i
        }(Lt(function(e) {
            return (e = wA(e)) && e.replace(xt, Ct).replace(yt, "")
        }(A).replace(Ut, "")), _A, "")
    });
const Ht = Vt,
    QA = function() {
        return At.Date.now()
    };
var Ft = "Expected a function",
    Tt = Math.max,
    Nt = Math.min;

function Rt(A, e, n) {
    var i, s, o, d, t, l, m = 0,
        h = !1,
        f = !1,
        B = !0;
    if (typeof A != "function") throw new TypeError(Ft);

    function b(x) {
        var C = i,
            M = s;
        return i = s = void 0, m = x, d = A.apply(M, C)
    }

    function D(x) {
        var C = x - l;
        return l === void 0 || C >= e || C < 0 || f && x - m >= o
    }

    function Q() {
        var x = QA();
        if (D(x)) return w(x);
        t = setTimeout(Q, function(C) {
            var M = e - (C - l);
            return f ? Nt(M, o - (C - m)) : M
        }(x))
    }

    function w(x) {
        return t = void 0, B && i ? b(x) : (i = s = void 0, d)
    }

    function E() {
        var x = QA(),
            C = D(x);
        if (i = arguments, s = this, l = x, C) {
            if (t === void 0) return function(M) {
                return m = M, t = setTimeout(Q, e), h ? b(M) : d
            }(l);
            if (f) return clearTimeout(t), t = setTimeout(Q, e), b(l)
        }
        return t === void 0 && (t = setTimeout(Q, e)), d
    }
    return e = jA(e) || 0, hA(n) && (h = !!n.leading, o = (f = "maxWait" in n) ? Tt(jA(n.maxWait) || 0, e) : o, B = "trailing" in n ? !!n.trailing : B), E.cancel = function() {
        t !== void 0 && clearTimeout(t), m = 0, i = l = s = t = void 0
    }, E.flush = function() {
        return t === void 0 ? d : w(QA())
    }, E
}

function Gt(A, e, n) {
    var i = !0,
        s = !0;
    if (typeof A != "function") throw new TypeError("Expected a function");
    return hA(n) && (i = "leading" in n ? !!n.leading : i, s = "trailing" in n ? !!n.trailing : s), Rt(A, e, {
        leading: i,
        maxWait: e,
        trailing: s
    })
}
var Zt = c('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path stroke=currentColor stroke-width=2.4 d="M18.4 11.2 13.6 16l4.8 4.8"></path> ');
const ye = A => {
    return e = Zt(), gA(e, A, !0, !0), e;
    var e
};
var zt = c('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 14"fill=currentColor><path fill-rule=evenodd clip-rule=evenodd d="M15.0533 9.22017C14.7829 9.94599 14.7693 10.7786 15.1989 11.4231L15.4416 11.7871C15.4735 11.835 15.4922 11.8905 15.4958 11.948C15.5334 12.5482 15.3321 13.234 14.7395 13.3365C14.6626 13.3498 14.5802 13.3571 14.4916 13.3583H10.4968C10.471 13.3586 10.3382 13.2973 10.1881 13.1291C10.0456 12.9693 9.88011 12.8218 9.89363 12.6081C9.90319 12.4571 10.0167 12.2828 10.0534 12.136L10.9962 8.36472C11.027 8.26925 11.0807 8.17761 11.144 8.09949C11.3252 7.8756 11.6407 7.79315 11.9256 7.83556C12.1562 7.86988 12.33 8.00427 12.451 8.26159C12.4823 8.32819 12.5212 8.39165 12.5732 8.44369C12.7948 8.66526 13.1658 8.63841 13.2951 8.35299C13.4787 7.94779 13.5616 7.50132 13.5187 7.05557C13.5066 6.92943 13.4976 6.80261 13.499 6.6759C13.5245 4.42695 11.8892 2.59025 9.49812 2.37244C9.16649 2.37244 8.8225 2.3545 8.53851 2.18326C8.20859 1.98433 8.00007 1.68698 8.00007 1.37372C7.99975 0.951118 8.57617 0.37501 8.99877 0.37501H9.49812C9.64717 0.375092 9.74066 0.375041 9.81611 0.375C9.93683 0.374935 10.0578 0.383887 10.1764 0.406387C13.2266 0.985024 15.4909 3.66559 15.4903 6.86665C15.4912 7.67662 15.322 8.49902 15.0533 9.22017ZM6.50205 11.3609C6.83366 11.3609 7.17759 11.3791 7.46151 11.5505C7.79156 11.7497 8.0001 12.0468 8.0001 12.3596C8.0001 12.7822 7.42402 13.3583 7.0014 13.3583H6.50205C6.37308 13.3579 6.28595 13.3584 6.21591 13.3589C6.13473 13.3594 6.07651 13.3598 6.0027 13.3583C2.86239 12.8537 0.509316 10.1316 0.509836 6.86665C0.509242 6.05673 0.678956 5.23362 0.94828 4.5114C1.21851 3.78675 1.23149 2.95558 0.802493 2.31207L0.565323 1.95631C0.528986 1.90181 0.507791 1.83862 0.503828 1.77323C0.467948 1.18115 0.665328 0.505667 1.24883 0.398995C1.32911 0.384318 1.41536 0.376232 1.50854 0.37501H5.50335C5.52927 0.374944 5.66221 0.436426 5.81253 0.605036C5.95467 0.764481 6.11912 0.911499 6.10606 1.12471C6.09679 1.27603 5.98348 1.45061 5.94671 1.59768L5.00399 5.36858C4.97286 5.46488 4.91846 5.55726 4.85448 5.63581C4.67368 5.85776 4.36055 5.93915 4.07724 5.898C3.8453 5.86431 3.67056 5.72996 3.54916 5.47177C3.51784 5.40514 3.479 5.34164 3.42694 5.28958C3.20537 5.068 2.83435 5.09479 2.70496 5.38019C2.5213 5.78531 2.43844 6.23168 2.48135 6.67736C2.49352 6.80375 2.50254 6.93083 2.5011 7.0578C2.47561 9.30656 4.11066 11.1431 6.50205 11.3609Z">');
const jt = A => {
    return e = zt(), gA(e, oA({
        get height() {
            return A.height || "16px"
        },
        get width() {
            return A.width || "16px"
        }
    }, A), !0, !0), e;
    var e
};
var Jt = c('<div class="absolute left-2 top-1/2 -translate-y-1/2">'),
    Yt = c('<div class="flex items-center gap-1 absolute right-1 top-1/2 -translate-y-1/2">'),
    Wt = c("<div class=relative>");

function Kt(A) {
    const [e, n] = re(A, ["label", "prefix", "suffix", "size", "class", "inputCls"]);
    return r(z, oA(n, {
        get class() {
            return MA("space-y-1", e.class)
        },
        get children() {
            return [r(y, {
                get when() {
                    return e.label
                },
                get children() {
                    return r(j, {
                        get children() {
                            return e.label
                        }
                    })
                }
            }), (i = Wt(), a(i, r(y, {
                get when() {
                    return e.prefix
                },
                get children() {
                    var s = Jt();
                    return a(s, () => A.prefix), s
                }
            }), null), a(i, r(at, {
                get size() {
                    var s;
                    return (s = A.size) != null ? s : "default"
                },
                get class() {
                    return MA(A.inputCls, {
                        "pl-9 h-12 bg_input_bright sm:h-10 ": A.prefix
                    })
                }
            }), null), a(i, r(y, {
                get when() {
                    return e.suffix
                },
                get children() {
                    var s = Yt();
                    return a(s, () => A.suffix), s
                }
            }), null), i)];
            var i
        }
    }))
}
var Ot = c("<div class=relative>"),
    Xt = c('<div class="flex items-center gap-4 text-sm">'),
    Pt = c('<div class=mt-2><div class="px-5 pb-4 bg-layer4 rounded-xl"><div class="flex items-center -mx-5 px-5 h-10 font-extrabold text-secondary border-b border-input"></div></div><div class="px-5 pb-4 mt-4 bg-layer4 rounded-xl"><div class="flex items-center h-10 font-extrabold text-secondary border-b border-input">'),
    qt = c('<div class=pt-4><p class="p-4 bg-[#2CD97D1A] dark:bg-[#24EE891A] rounded-lg text-brand font-semibold text-sm sm:rounded-sm md:rounded-lg lg:rounded-xl">');
const Ae = A => {
        return [r(NA, {
            disabled: !0,
            get value() {
                return A.serverSeedHash
            },
            class: "space-y-1 mt-4 mb-2",
            get children() {
                return [r(RA, {
                    get children() {
                        return u("Server Seed(hash)")
                    }
                }), r(GA, {
                    type: "text",
                    size: "lg",
                    class: "bg-input_bright text-quarterary !opacity-100"
                })]
            }
        }), (e = Xt(), a(e, r(NA, {
            get disabled() {
                return !A.editable
            },
            get value() {
                return A.clientSeed
            },
            onChange: n => {
                var i;
                return (i = A == null ? void 0 : A.onChange) == null ? void 0 : i.call(A, {
                    clientSeed: n
                })
            },
            class: "space-y-1",
            get children() {
                return [r(RA, {
                    get children() {
                        return u("Client Seed")
                    }
                }), (n = Ot(), a(n, r(GA, {
                    size: "lg",
                    type: "text",
                    get class() {
                        return _("bg-input_bright text-quarterary !opacity-100", {
                            "pr-8": A.editable
                        })
                    }
                }), null), a(n, r(y, {
                    get when() {
                        return A.editable
                    },
                    get children() {
                        return r(Y, {
                            onClick: () => {
                                var i;
                                return (i = A.onChange) == null ? void 0 : i.call(A, {
                                    clientSeed: UA()
                                })
                            },
                            class: "absolute -right-1 top-0 h-12 pr-4",
                            get children() {
                                return r(jt, {
                                    class: "size-4 text-secondary",
                                    fill: "gray"
                                })
                            }
                        })
                    }
                }), null), n)];
                var n
            }
        }), null), a(e, r(Kt, {
            disabled: !0,
            get value() {
                return A.maxNonce
            },
            get label() {
                return u("Nonce")
            },
            size: "lg",
            class: "w-1/2",
            inputCls: "  bg-input_bright !text-quarterary !opacity-100"
        }), null), e)];
        var e
    },
    $t = ({
        queryKey: A
    }) => AA().get(`/single-v2/game/seed/${A[1]}/next-hash/`);

function _t(A) {
    const [e, n] = T({
        clientSeed: UA()
    }), i = EA(() => ({
        queryKey: [`/single-v2/game/seed/${A.gameName}/next-hash/`, A.gameName],
        queryFn: $t
    })), s = Te(() => ({
        mutationKey: ["/single-v2/game/seed/change/"],
        mutationFn: t => AA().post("/single-v2/game/seed/change/", t),
        onSuccess() {
            V.success(u("Done!")), i.refetch(), L.pop(), A.onChangeSeed && A.onChangeSeed()
        },
        onError(t) {
            V(t)
        }
    }));
    return ae(() => {
        i.refetch()
    }), o = qt(), d = o.firstChild, a(d, () => u("You may use this function to set a new server seed + a new client seed, they can be randomly generated or customized (at least 10 characters), and the number of bets will be reset to zero.")), a(o, r(Ne, {
        get fallback() {
            return r(DA, {
                class: "text-brand mx-auto"
            })
        },
        get children() {
            var t = Pt(),
                l = t.firstChild,
                m = l.firstChild,
                h = l.nextSibling,
                f = h.firstChild;
            return a(m, () => u("Current seeds")), a(l, r(Ae, oA(() => {
                var B, b;
                return (b = (B = i.data) == null ? void 0 : B.currentSeedHash) != null ? b : {}
            })), null), a(f, () => u("New seeds")), a(h, r(Ae, oA(() => {
                var B, b;
                return (b = (B = i.data) == null ? void 0 : B.nextSeedHash) != null ? b : {}
            }, {
                get clientSeed() {
                    return e().clientSeed
                },
                editable: !0,
                onChange: B => n(B)
            })), null), a(t, r(Y, {
                type: "second",
                get disabled() {
                    return s.isPending
                },
                onClick: () => {
                    const {
                        clientSeed: B,
                        seedId: b
                    } = iA(iA({}, i.data.nextSeedHash), e());
                    /[^a-zA-Z0-9]/.test(B) || B.length > 32 || B.length < 10 ? V.error(u("Seeds are mixed characters containing 10-32 digits, uppercase and lowercase letters.")) : s.mutate({
                        clientSeed: B,
                        gameName: A.gameName,
                        nextSeedId: b
                    })
                },
                class: "w-full mt-8",
                get children() {
                    return u("Use New Seeds")
                }
            }), null), t
        }
    }), null), o;
    var o, d
}
var Ar = c('<div class="flex items-center justify-center w-full h-full bg-layer4 rounded-t-xl">');
const er = A => r(mA, {
        class: "w-[30rem] !bg-layer2",
        get title() {
            return e = Ar(), a(e, () => u("Seed Setting")), e;
            var e
        },
        get children() {
            return r(_t, A)
        }
    }),
    Qe = A => AA().get(`/game/support/share-v3/create/${A.gameUnique}/${A.betLog.distributeId}/`);

function tr() {
    const [A, e] = T(!1);
    return BA(() => {
        e(!0), LA(() => {
            e(!1)
        })
    }), A
}
const Ee = "/modules/games2/assets/star-254d837a.png",
    rr = "/modules/games2/assets/crown-c4216a4a.png",
    ar = Ee,
    nr = "/modules/games2/assets/ribbon-ea676df2.gif",
    ir = "/modules/games2/assets/ribbon-ea676df2.gif",
    sr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAAJFBMVEVMaXEcHiIeICQcHiIcHiIkKC0cHiIfISUdHyIcHiIcHiMcHiKTCMCFAAAAC3RSTlMA8jjWuwqdHFFrgohLwFcAAAAJcEhZcwAACxMAAAsTAQCanBgAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAASAAAAAEAAABIAAAAAQAAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAAAYAQAAA6AEAAEAAABgAAAAAAAAAI1+4goAAAKBSURBVHja7ZsLcsMwCET1s37c/751m6SRE3BnOkiV6t0DpJpnBIugxkAQBEEQBEEQBEHqchUMWC42AgLLhcJCx90GciG/EJcwkAvZhbhQGsdlHTA7F3LjuBBt63AZAubBZVB4/k7pyIWy9h/IxW0ClzHh+dtz2xCL++ZCRZ38/qM+NnSeXPS/gub9uaXBEG9cSN+NxjuFO52Gi/5X0FSlg/TdqGt+3frYcKGpe4JkD2A6GJlAkubuCeLhrFY/IWYRzNw9gXs9rXoR9RKYyXuCt1CPymjKomDeQ93WTb/ycZq6LJmNObFuqqlilvEzW5na/bxJDJk9pU1rf99Prf8ZI50oTtoyxQHR7c7AaKc0xV6m/6UPdI6mzIfm5chuVOWbPQu/BLkd5CI5NHNlYX9vrmNfyxV+5GLrVDk4f77GpGcOjn90k+bMv81HLR3jck0suwH23XJvWa4kvTm9rd8roZRzy7bA1NSP6jmeWMwKynFMz7FECykMU4Y0SslcWbK3s5fmcuLtwqW5nHi7ay8OPb2d3112tss8bHZWuY3Zar7PaNtBpLsymFpykq7WZiDO7nmw4H0NljaFAl5AguvjL557z7on5N7lt3zH+uEACrzxq/9iw72Dnen5FpNWDseOHzV5izvJckHJk7hc/HGQfZT94gL3+J3LHxvuNy6UgaQ10/vLjyeAOZtFoEMVhhH4D13DTyM8sq80joio2IbfNZl7uWTwQOJ1wQRUhFmwx31ilwcCUjAXMMDCLg8AC1utgUUo1qjUfK3GCMK0i6E+1Ijx7zFgwmPRJKC5Ppv/IvUa/skKuZef/yL3CpYG419eFe93IzfcIQiCIAiCIAhq9QFCCj4GYGbzCwAAAABJRU5ErkJggg==",
    lr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAAJ1BMVEVMaXH////////////////////////////////////////////////c+C/6AAAADHRSTlMA8tW3CnWXQhtZLTa9JusTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzGVYSWZJSSoACAAAAAcADgECAAsAAAByAAAAEgEDAAEAAAABAAAAGgEFAAEAAABiAAAAGwEFAAEAAABqAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAAB+AAAAAAAAAEgAAAABAAAASAAAAAEAAABjb21wcmVzc2VkAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAGAEAAAOgBAABAAAAYAAAAAAAAACNfuIKAAACiUlEQVR42u2cDZLCIAyF+S+03P+826q7LZrUGYcgbN87gDIfkLyQqFIQBEEQBEEQBEFQdU0eDEguOgACySXbgZbrGnLJZiAutiGXgcA4m2M7LlkPxCXP7bjk7MbhkqeGXNrswoeKJZec6ruVxTFcmuzCp0rahjT/ccnVTVfcomw40Nm51N+FmvfnHgZNuHOpD0Y9PviXzoFL7tr6+lyovhtdDp++bsCBS99goi7ACBgZmzn1XROEYq26fkBMLJi+a4L5ebXVk6jhwHRufV+OeoiiYWwYMNPLgrV39TMfpb5fZBy1l5NcGCu+J42TsAXWG9kjs4a0ZZB8LbKN/JHZ0EQ1QLqufYvozPcU0kKPZfYsj+XU5ElEe4klz60yX+9R+GnFupGLFE+EdVzp+vQQZC2XfctFh65i8GSDn+Ieg8OXblKPQaZ4wPOC53JILBuZbfUybisNjOXh9JzcKyEXc33/vYJFm1Y1x56lh2ihpNCm5hiihGSaKU0KpaiuLN7b6UtzOfF29tJcTrzdtQeHdm9nVpedjoE4XZlLurXZrE+ze27Qdt3TF5d/lGKUC3YKouyeAQva12Bok0ngGPMl6/i+x4a+2rFB7CXKBI3Yy/phCwp00vb/YsJdIGlLFgRx5OMouKnRaNxJkgtSHsfl4o+D5KPsjcu1K/ciy60jxLcJ9whbTZjplY7BI9hpLwIVKtOMwJuGorsRZgERRU8OWGRsRc+a9Dnz2MW8svZAw/SCDYwe2Qu2CMHlL+mA5eTAWNwiKlsDiypaMmj/vsnVaEEUg6HroIlFqVRGmO3/Btweg1FcM8EG71SKfrJC7CXnuBF7OUuD9i833wYGDSfcIQiCIAiCIAg66gfGRkNY9e//OgAAAABJRU5ErkJggg==",
    or = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAAIVBMVEVMaXEcHiIeHyMhIyUcHiIcHiIcHiIcHiIcHiMcHiIcHiJLKF5cAAAACnRSTlMA9ToVxuOqcVuJnCFm2gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAABIAAAAAQAAAEgAAAABAAAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAABgBAAADoAQAAQAAAGAAAAAAAAAAjX7iCgAAAgxJREFUeNrtm1tywyAMRc3baP8LbpqHYxuY6UdFreacBcSe64t0AWVZAAAAAAAAAACug4+uoEJHFrkREOJEcWJPmJKq9iOyPDDl8SSSJuniLOny7fE4Rxf1D/DbuigLU8SeMCGJujB+08XQUsoTvmR6C2OmK/kJL1x2uoi3ZRiRdY5hxEr0da8X1isy614XycZWkqLH40EYZ6PI7L6mlmWCHLGxlvZ1saqb0lCSOTQMnfpbT8JolnmtwlhU+95mmWCr+N5bRtCuvYprVqldP3tG9vrCmFhMjdHFxZxXrXj3fIQ3t5YUtnodx0gyoEzvvX81nuau8t7IcYxi36hdTxrIeaV9aa/8+4+kfXnTnD+pWydUsfuCvbo0q1MtjGmojKS6XjrthXeBdDWo7wlO4sQY82XlCSUm51IuYVYiEIunNDMSAcL8yDL+I4XpZzwMs91djevvx45A9OK1rT3lxHht7EjvD5T5aF3O8VptA2J20qzZSjJ6djNN05wSs4qvjcfBLQW77LTJ911ZzMWjBgDA/4lLERE6VGdr+HzmjUdChv5W1aFDkx4t/sFl4tUhkXrpD/tklOjfRjjW0tIfKCTJjI5POeYZjKByXjq88azUmSbGvCZM6NrLYHrgdk6IbwbTA7hm6U4PVCTpTg+QZ97KRC7zBspUt00TokY7TqgzTQgAAAAAAAAAAGCGL549MHayH8uiAAAAAElFTkSuQmCC",
    dr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAsfVrzuWJTTYeDST5mmQAAAAJcEhZcwAACxMAAAsTAQCanBgAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAASAAAAAEAAABIAAAAAQAAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAAAYAQAAA6AEAAEAAABgAAAAAAAAAI1+4goAAAIWSURBVHja7ZxbcsMgDEV5Y6z977eJEzd2DD+dyGM15yygZi4XPUCpcwAAAAAAAAAA16GmUFDhQEtyY0aIN2K46yLN0prnmNUt7uWBJV2mLJKVpV91CZZC4t3j6Ry/aG/AR/2ynH2v+o0i9oRpeVmwqmPqry6GjpI/YSfTSxgz6XpaF6yYRuNGF6m2DCMS9b6Rt8JYKX3DuuB0RoRRj/KfP0kik7opxVDpu9lNLcvMe100z6xSXCxnnCT1UtJOwihi0TJVf8n+XZg82wq+S8poJwhjImPPYb/mUCbNstfQYTruZ/C+VK3y7vmJyVqQ0Wj1Oo6RbECZ3ro/Wp76rvLVyHWMYt4oXU8aiMDxuOiq/Pcfhd7lj1PRtfkkI3y18bChFRjzUBnJpV66p2x+U8g09Z7gTZyUkr+sPC36FEL2cVavrkU7DTpr18oI8wfLTA7LYJjD29U4/rYvFaZbXtvqKU8sr63dAp+vzFfr8pypsNlna8eZ7gVHag7iITnliCpuGWnbuSZFJhW3TdnSlSUfOUQAAP8nuvuECB1KsDV8fuaLR0aGfqsa0GEwu0E9PXioqSjhurO5/IrO9V8jAl3Y4JbQo8Xg+pRrnoEw3Je60dhcIWcPhvNzmVDE9Z+Cb/eE5KfBCCqu6U8PUOqtUWb/QJOIwG73/yPWOg9dNp4pr2lC1NibpqQckucxDwAAAAAAAAAAvpofd5w1jglGmekAAAAASUVORK5CYII=",
    cA = {
        heart_left: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAMAAAAxSDrWAAAAP1BMVEVMaXHeWhbZVBT5ZTDZVBTZVBTdWRvZVBTcVRXZUxXZVBTZVBTaVBXbVRbaVBX/bQrZUxPjWRH4Zwz8agvsYA8BEYEyAAAAD3RSTlMAF/QFp/wS5CSL0MFdOXLtrLxaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzGVYSWZJSSoACAAAAAcADgECAAsAAAByAAAAEgEDAAEAAAABAAAAGgEFAAEAAABiAAAAGwEFAAEAAABqAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAAB+AAAAAAAAAEgAAAABAAAASAAAAAEAAABjb21wcmVzc2VkAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAHgAAAAOgBAABAAAAMAAAAAAAAACLmQxBAAABDklEQVR42n3UV4LDIAwEUDmAcdswlPufNcC6YQvp92VGuIXomHHTizV20dtAr5m0wTFGTy2qOaNPIboYks8/mNVNxxVI0R0TE7BeG0YLBHefANhjgVrho2sn+tNn4Kl5stf+yTya9zzMWFgjMZrXr/Vchqsu5d/CGzynDpjE7qWee2EP5hLmyra3+q+yAd/9ISEdgU3ebaW7kpdr6bpzfTncAP7opV4J7bl+7j+x/Frho7rP+0jXt4W/M/XSaLCc7+GynvEzzPsV5vweZrwJvzyHHx9i489w6+9w40z45mz48gBLJDj297Tjid19erd99277v/tue3XsX2DfJ9m/JLrQXn2QXWovf8IkuyL6AXX7L0454rzpAAAAAElFTkSuQmCC",
        heart_right: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAbFBMVEVMaXHZVBXaVRbZUxTZVBTZUxTZUxT4cTLYVBXaVRbaVBXaUxXcVRfZUxXZUxTeVxjbVRb/bQrYUxTcVBP5ZwvvYg7qXw/0ZQ3iWRH///7/fib/chL/sHv/j0L/yaT/7OD/r3n/38r/8ej/qnD22/DOAAAAEXRSTlMAckK5yPTVBapPk2MqfuMaV9h7gXAAAAAJcEhZcwAACxMAAAsTAQCanBgAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAASAAAAAEAAABIAAAAAQAAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAAAgAAAAA6AEAAEAAAAwAAAAAAAAAGhbvAgAAAFYSURBVHjahZTdYoIwDIUrUkAnugakraKoe/93XFJd7Z9ZLuDiO5zmpC1CBLXr142U+3pbtaJQmwZ8yVUm2dUAw6RHpUY9GYD9JuaVhOGofGmU9CH/AjCenk/4OAJsIz69P7/aK0r0AKuAB/bqx9qFFADVS9BEXKnT3S5npSaoXwFgUHGd73bG1wDPKKuwgWdd7OIaXTvBGnQqUA9LUUDSvFoJGcckF3wat8YmGMG7C+LYJiXdJhmCOrphNUXBbXaCDgXfWUqq+eYdMIX5sMSzB3GQhZyujJ/UUBYAvM5Nnc9SBZPE3Sgv8rcXn6L63aRhFpoIzkPRYAxOVMkAeeePZJ0bEG8Zg4gXDGKeG8Q8N0h4lRokPDNIeWqQ8tQg4zhlzXLRh0ehwKOLWeJC7GFkOd6bieWY07Cc7u7IcSE6mgTD8eoZltMamuN0N4Hl9BdkuTj8w9GC4b+avD+SwSINMQAAAABJRU5ErkJggg==",
        block: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAAXNSR0IArs4c6QAAAWpJREFUKBVlkL9OAkEQxmeW5fgjChH/EAsjYuABLCi18gEkWJlopZXvYGdlYWJlqZGI8ASWNvbGRAOJ2hhz4WJEBURub5xdOYPyFZfdb3/zzcwhDKheTE2S5xVIUEIAXS2cNy4RkTSCPldbmyp4io4BKOp7gHiRiIjV1IndEtq8K06nSdGphkbDCpKxHsgABxGtvHbUvmYMCKTWCSgUj7owM96FibEezCY/TTsE3HjYnAsbkC95XRXjNF9BSRDgVCIKU7cdNyARZDVg6XZ9tbsBcBVHINppd8kRtLsseZi03ioY9AzWbEl4egn5NQdYqSh5f3szz440wzP33LTgrcO1LM47zFUbe/oslfppixz56ETgy+UD4odAsZ2t2CUNaUlCBnk0A7DBM11zejFTtmuG6H+Ev4i+c9aRFRvJZ8rOH0i/SU7TG79z661c1TkDcLQ/JMmt2tKCxUypUR96HTTqOwu//2HQ/3/+Bvh2fIyfHFHnAAAAAElFTkSuQmCC",
        block_two: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAAXNSR0IArs4c6QAAAXBJREFUKBWFUr1KA0EQntnbhBMDEY0GBRshP7WCiK9gqShBC8FC8AEsrNLYWdn4BAmYnyew8wHExiL+gIqFJgFJxJiYuxtn53LhRCEDu/vt9813s7ezCKGo5eay0HfWCDzXIn2Rqr7ehGSBGBC1jeljIjoK9iwQAZxkq83DgDOrGG7XEzkPoKiYiI87orc6Gjx2KGVtp8tvRSF5MjngIe6bNTnxDTNxfyR5NUHk7gkYTGJAoqTZj0XdoRazfUyAy0OSgRiYlJ9rf+mhphSB5sElYo87idlAEIOy4JQJp/kRgXorCpwmEdE+6nd1ZkD5FdKlxqWFahcBe++fGp4bNt8uQlTzVXAQOulfBrNJVeoFpWmVTQ/dvoInY3LlAOZ+/xrEdN68UnZ8ERFLLiF0eiMMYirctzOVxhY34MAc0XDcrf8riDiYsuX6GSpY4ew7phb4FUiT/ZrhzBBOlxvXU/HJJa5Ufdmct0PSaEj5vHz8B/ZXd/2WUqBBAAAAAElFTkSuQmCC",
        star: Ee
    },
    uA = {
        facebook_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAP1BMVEVMaXEpLS4pLS4pLS8pLS4pLS4pLi4pLS4nMDAqLTApLS6zvsFdZGZudniEjY9MUVM6P0GlsLJUWlwyNjdDSEpfxKumAAAACnRSTlMAkO+3dZ/P3xo60HSfMgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAASpJREFUeNrt2cuugjAUheECLb1BodX3f9Yj10hwoPY3ITldMyZfttg9YFWIPcZK1bRauw+iddsoacWLmKp2X6dW5sS5zMijp1129NOQFvAeoiXnO8wIebsoHZZq/sEOzDSiIsFpxJoEayOsQ2PJv2RZGMWCSjQs2IiWBVtuTdZl4UEH523wlkKMPsYYwo0Au+j3jADYe4+CBw8ARw+DgQYjDA6bFNI4JfscptWL1MHuVrCnwO3QdAW8AtjN2RYlLI8pA/SvEi4P9jTY0eBAg3cazDmHw5ztHPbz073scgELWMAC/h8whSXDW+D1v0bxD3C8IsBLDLxmwYsgw1ZVj+6rYl/hD+o+ckSJVrDTmvyo1MVrZ74YJ6ri6nQboHIuF07c8iq/vv544v4AYBT0v3aWRPIAAAAASUVORK5CYII=",
        facebook_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAP1BMVEVMaXH////////////////////////////z9fX///////////////////9fbW3Eysqwt7fZ3NyaoqJvfHyHkZF0m/muAAAADXRSTlMAEJBAdZ/P3/ogtzCgWGOYUwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAS1JREFUeNrt2cGugyAURVFAEbQCKv7/tz6V2tTGQVt2E5PHmTlZuUbuwIMQj8iq1l1jjPsgxjSdritxklZZ93Wsbl84qVxm6uN4xmXHPA15A7xFvJHzHWaEvEWUm1c7LGp7YQdmfWlNguuIlgStFJVDU5GfJC1Mz4JadCzYiYYFG25N7svCgw7O26ANU4w+xjjPlgCH6B8hwMF7FDx4AGg9DE40GGFw3KU52DXZ5zDcvUgd7B0cKHA/NKGAVwDDln1RpvQYMkB/lpkGJxocLg+OlwdzzuG4ZT+HQ3osu1zAAhawgP8HDFPK+BZ4/b9R/AccrwjgEqPnaxa8CJJsVbV0X8qhPdAP6j5yxFQVS64y/VWpi9fOfDFOVMVKvl4u9DmXC6o9u7D4/vrjabo/iHI7wf6+rEwAAAAASUVORK5CYII=",
        email_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAQlBMVEVMaXEqLTApLi4pLS4pLS4pLi4kMDApLS4oLzApLS4pLS8pLS6zvsGirK9rc3STnZ82OjtNUlR7g4VdY2WrtbiHkZO3N8EuAAAAC3RSTlMAQHDvis8Q3yOjv5MBy1kAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAAeDICAOgDAAB4MgIA6AMAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABQAAAAA6AEAAEAAABQAAAAAAAAAHW60KIAAAGLSURBVHja7ZnJkoQgEERxQ5FV0P//1YEeA23bCQWzZ4kxT3rwRVHFZhYhUbQoGWvalieobZuelQXZUVdXPFsV6zY4WvOLqp/Da/lltR2WtyZieCsiiOeJ9MGrOUyPynQcqDBohgSGECsksKKk4FAVpMQCS2wKOWekRwMbLLDBLZN5seCBHKwb+KeARlk5ij3pyWUA1T5slnSpQCUOpNKAThxqSALKY6BMAQ5C5Ia4D7RngDYBqM8AJxAwTiedAJRxbrhNecYh5kNmAH3ezRNRm6ViOcDwvVlVyIZ3fQEopFmvmrA6loizgCFnfpByeRzFNeAcltXams0SzwWKycQdbRII4Gci48gBQF9t5ZzSp3YHkrvZ3MDvBp7aD1O2rwkNhB8B8EMKfoyeCdH97FWEv5xOm7NKZdwP3fTFdJRWmftK/L+Bv/9vFP4DDvYceryJAbdZ4EYQxVpVWLcvpPANdh/ckCQUZ5m+y9SF2854YxxRmZpumwvsSnOh7vYaFr790ae3P5hvf6yi+wCEwg9zCpQKWgAAAABJRU5ErkJggg==",
        email_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXH////////////////////////////29/f///////////////9fbW3///9zf3+LlZXAxcXW2tqhqamvtrZpdnZ9iIjiLFr5AAAADXRSTlMAEEBwip/P3/ogMK+/6StovgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAZBJREFUeNrtmdtyhCAQREFRcZWbqP//qQHX8ramFOzdJBX7SR88NQwMYA8hk2iSZlVeFDJARZHXWZqQHZWMy2jxrNzgKJMXxdbhFfKyikWQDwDPER/I+FYxgniOSAcekzANM1NKoPygMyTQh8iRQE5JIqFKSIoFptgUSpmRGgusSI4F5rgyGYsFD5Rg3cA/BeTGqk7sqdcmAmj2YaOUCQW24kBtGNCIQzVBQHUMVCHARojYEPeB9gzQBgD1GaAGAafl1AcA1bQ2zGZ6umbKh4oAurzzFbHn84zFALX7ni9myPp3fQEoFF9Wja+3OeIooM+ZG6SaHztxDfgsWm61tnxT4rHAIZHjjqYFAvhM5DRyANAF2RrT6lO7A4ndbG7gp4H9J/fDKCD8CIAfUvBj9EyI5mevIvLldNqcVSbifmj0N8tRWcPvK/H/Bv7+v1H4D3iFBdZ4EwNus8CNIIq1qrBun0/hG+w+uCFJKM4yfZepC7ed8cY4YmYY3TYXsivNBVbuNSxc+6MOb39Urv2xiO4LY65N7hioZeQAAAAASUVORK5CYII=",
        instagram_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAUVBMVEVMaXEpLS8pLS4pLDApLS4pLi4kMDApLS4pLS4oMDArLTAqMDCzvsEpLS5dZGU5PT+irK9MUVOqtbhdZGZDSEp5gYNVWlxudnhlbG6PmJqZo6WyBxt2AAAADHRSTlMAt+9Adc8Q35kgMEAWUyN1AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAzGVYSWZJSSoACAAAAAcADgECAAsAAAByAAAAEgEDAAEAAAABAAAAGgEFAAEAAABiAAAAGwEFAAEAAABqAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAAB+AAAAAAAAAHgyAgDoAwAAeDICAOgDAABjb21wcmVzc2VkAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAUAAAAAOgBAABAAAAUAAAAAAAAAB1utCiAAABx0lEQVR42u2Z6Y6DIBSF3aULsgzi8v4POqCtRaeaAMfJTNLzi9Tk68F7ETwmyaLqVpC0rGvqobouU1Lckje6kIwGKyOXDa4iNFLF2l5No1U7Jq8AniFekf5WHkE8Q6wmXkFhItOEKVB20gQJtBYzJDCrkhuFKkeWZF4wBAskSYoFpkmJBZa4ZfJYLHggBesDPB2omq20CgeyTt7fiDeBQMbvO+IsBLjPOyTuAw94R8RdYL+DksP0T503kO9aY7ZU0heodgy25lprB8oTqFfTbLVSorWmx2e1vjyBjYPrlx/NZHk734xw4FRQJgRbt1IwUBqQGOxoFHQuSBzQrLPuOe6cbgoFcuPvdTuNRxkJNG0yvoDDo2cigIIyt4HY0k+hQOXO2OWHAtkWqCKBejtlEV+U4cUb44sit23DYxu7Xzd2g1l6UysOmKUHfzgYj8u22TvbagTQPgOFUrpd7dIatAUs8t0CqDzmce9drzsG9t5AxoMM/uZRBH5Ysr3zFik7FnHg1D9OnOpzaP9/wL//Ngp/AYdHBPAQAx6z5OggqMJGVWeEafC4D2lxjoorXGR6VqgLj53xwTgiKibVuR8XJuWhnz9yx903/Jk5zLQovToAAAAASUVORK5CYII=",
        instagram_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAASFBMVEVMaXH////////////////////////////////7+/v///////9fbW3DyMjDyclzf3/r7e3X29tpdnbh5OS0urqhqamBjIzN0tJFashCAAAAC3RSTlMAzxBwOoqf3yD2t6nL0moAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAAeDICAOgDAAB4MgIA6AMAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABQAAAAA6AEAAEAAABQAAAAAAAAAHW60KIAAAG9SURBVHja7ZnrjoMgFIQRr0hdbirv/6YLtlG02gSYbrpJ5xdJ49cBBsEDIatoVTZ90bY8Qm1b9E1ZkRN1NePJYk13wNGaZ6re22t5ttrAZAXgOWKF9LfzCOI5Il14NYdpmZmOA+U73SCB3iJDAhklFYeqIiUWWGKHkPOG9FhgTwossMAtk8diwQM5WF/g24Hm5yhr0oFs1LcTiSERKMXtQkKmAK95L4nXwBc8R2TRwPECpefln8ZooLi0Jv1U6ViguTA4ud8m3zCRQLvr5mSNUZM3Pbs0LeaHSOAQ4NbxGlxnxXQfjHTgEhGplNxHKRmoHUjNvjUrfp+QPOAQJGgM2qlA4fxtw+k86kygi8m8AedHZjKAisswQHLNUyrQhD0O+alAeQSaTKA9dll92qToY2xEbrDHfbCHz1t68JeD87g+G26rGUD/DlTG2Gm3S1vQFrAqdgvg+jVPwLbRLUGRQCaSDP7lUQR+WPLZOUXqkWUcOO3TidN8D+3/D/j5X6PwD3B4iQBexICXWeCFIIotVWGrfX4I31DugxckCcWVTN9V1IWXnfGFccTM1PR4udDkXC7U3dmFRfr1R+DuF6hyENBF6/NAAAAAAElFTkSuQmCC",
        line_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXEpLS4qLTApLi4pLS8pLS4kMDApLS4oLzApLS6zvsEpLS6hrK5OVFU4PT6PmZtudnh/iIpdY2Wrtbh3f4FDSEplbG6WP9oEAAAACnRSTlMA70BwyooQ3yOjP0Vx1AAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAfRJREFUeNrtmWuvgjAMhkG57dLuBvz/n3oceBQVJh018YNvTDQkPmm7dhttUdzUnM5CVG2rCGrbqhLnU7Giri5VtkrRPeGaWh1U/Wheqw6r7Xh5SyIPb0Fk4l2IzcSrFZumlekUo6LTghMYTSw5gWVTnBSrTsWZF3jmDaFSoqi+HFjxlcm1WPiBilk/4KrQ29653sLAAQQX5E3awTEg2gXtyvQHgKDlijTkAnu5IZsFRCc3ZTADmOBJ6ehAK5PqqcBBvhEQgfod0NCAIGWmiUViRbT//wo+htR4o32USazLBjDMXsH8T6+VGmP6WXNfsEABDvIFqMwMHJxzc4CRAIQVIOoZaIzRiSDuBSIoeHSZBHx1GTUqjEAEAEMG4itwSjxrFglFieGc1xcEIrorUI4TcHo0ZRMpbfp7Mdh/oBweYugyKkVHBRk/0eQw/ZgebXq8WcvmXeU54uaAIc3TSN0Px7zdK7FjJ3dYm3NI2Rxe8tTzgfXU2z747IGrCLwiAxy726A3YVe+UK5z6G9nVo8890PY5S4ZaFBxAcd95u0H9juiRwJ6uw/3e61gAX7/2yj7C7j4cqDgb7OwN4Ia3lYVb7cvhvAD7T72hmTR8LVMP9XUZW878zfGOVambp6HC+LIcKHu1gYWl/FHRR9/iMv4Y2HdH591CuQz2t1TAAAAAElFTkSuQmCC",
        line_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAQlBMVEVMaXH////////////6+/v///////////////////////9fbW3///9zf3/V2dmaoqKwt7fp6+uHkZHDyclpdnalra17xnftAAAAC3RSTlMAdRCQ9zrK3yCjjxvyUPEAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAAeDICAOgDAAB4MgIA6AMAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABQAAAAA6AEAAEAAABQAAAAAAAAAHW60KIAAAHzSURBVHja7ZnZroMgEIZdUEuBgQF8/1c9ol20dRudnvSif5q0MemXWQGHLHuoqHIp66bRBDVNXcu8ymZ0uQp9WEJeXnDFVZ9UPjWv0afVjIysGHgdseK0b2IjE68jFj0v12y69g5rRiWnJSew7ICCEyiKrNKsqjhTMjSM5AXKrP5yYM3XJrdm4QdqZv2As8LgWmtbB8gBBBvVQ8bCOaBwI9qNGU4AwagZGTgKbNWC3CGgsGpRVhwArvA6Ih3o1KpaKhDVhoAINFtATwOCUgdNzFYyYsL9K4YUUhusCUl2JS8LwDh4BcM/g+mT5LTzz4RFChDVG1D7AYjW2iHASADCDBDNAPTem5Ug7gUiaJi6TAK+u4xGaExAAQCWA9gXnvOjghKULJtb7SJ2SRiAaY1xt0d9NZHKpn02g7sDFU5iaA90ikmKKn2SybH/0T9arJrFXvZbnWepq01c5xlkXg+BvmKvEt2RTcod4a3ueiGy7nopM5bM2zqKwDsywrmzDQYfd9UL5TiH4bFntYLnfAi73CUDPbKdYN0+8/YD2x3RIwGDQ/17rfg34Pe/jbK/gMsvB0r+MQv7IKjgHVV1s6+SN4QfGPdxmjiMigu+kemnhrrsY2f+wTjHqLgsXi8X5JnLhfIyd2HRXX/U9OsP2V1/jKz7A+erIhCI+V6WAAAAAElFTkSuQmCC",
        discord_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAASFBMVEVMaXEpLS4qLTApLi4pLS8pLS4kMDApLS4oLzApLS6zvsEpLS42Ozygqq2OmJqrtbh2f4FMUVN/iIpudnhlbW5UW1xdY2VDSEpaOxVJAAAACnRSTlMA70BwyooQ3yOjP0Vx1AAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAdpJREFUeNrtmdmygyAMhtG6AQmb2/u/6dHWunQUD5jO9ML/SjvjZxJCqAljs4r0wXlWljJAZZll/JGyHVV5IqOV8OoDV+TyovKteaW8rLKi5a2JNLwVkYg3EIsnL5dkeq5MJQk1Os0pgaOJCSUwKVgqSZWyBy3wQRtCKTnLfhyY0W2TabPQAyWxbuAN/AoQ+na5tv1FIDRKG7vcGtSujQdCrbGBzigUozSqprdOYBcJbLVqayW2wtqiMFFA0MJpsaPhxzoG2IhjaYgAogd4bOIxsPXxBIYDlRcoIBQIfp5oQoGzxwYkuNdKdCDtO7IqFOimB93ifzcl04seCnxbYmd7cfumPgwI2+DbBWj8QWRnIXw91y3JjJtY/BtoNnsCcEbUJ5nIzrPQ1Ua/C8O6VkAQEMWp2iDgOe+ghrG4fXK8Kn6g2vXcoWevHAEnkuk+a8RwxChfIh7FsJ+Iw/lhjXoXbjR2OGei8nC28ZVv0Fvbj3litXdJvBW7w53aPL1H2ahjdHAWPyMFSrkG7j9LN/AGXgT+/tco+Qc4/3Egp2+zkDeCCtpWFW23bwzhF9p95A1JVtC1TL/V1CVvO9M3xilWJi8+hwv8ynAhr/YGFsP4Iwsff/Bh/LGy7g8BuwqRuLh4lgAAAABJRU5ErkJggg==",
        discord_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXH////////////////////////////5+vr///////9fbW3///91gYHp6+uYoaFpdna+w8Olra3X29uHkZGvtrbN0tI4b+SqAAAAC3RSTlMAEEC3IHXP3/mZMAl4wSUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADMZVhJZklJKgAIAAAABwAOAQIACwAAAHIAAAASAQMAAQAAAAEAAAAaAQUAAQAAAGIAAAAbAQUAAQAAAGoAAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAH4AAAAAAAAAeDICAOgDAAB4MgIA6AMAAGNvbXByZXNzZWQAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABQAAAAA6AEAAEAAABQAAAAAAAAAHW60KIAAAHSSURBVHja7ZndjoMgEIVRV4UCw6++/6OuVqXaVQw4JnvhuWqa+PUwDkM9EhJUlDWrmrYVCWrbpmJ1SXb0w6jIFmU/X7iCiYuqt/ZacVntyuQLgTcQX5j+Nh6ReAOxePNqgSb2XrBA1LhohgkcLVJMIC1IKVBVYt6SacMwXCAjFS6wIg0usMHbJvNmwQcKZD3AB3gLkEIfPoODi0BqvLbuA7RSqz4fSDstDRirJB+lpTLgFJcmE9hr33eebyU7J7nNAoLmSvMdDV92OUDDj6VpBlBGgMcWj4F9jMdlOlBFgRxSgTTO4yYVGFZsqYDJrTZUuKWyKhWoNhf6YArmTtKpwMWJC37l9pcgDQjb4rsP0MaLSM5KaEKTz818UsQjoA17YrQIMiC6k048Aq5mguqsXgbDelbQJKDkp+qTgOe8gxlG8vbJ8V0h0a7xuyufB7hPcjiTrPmeEcMR42ONeNjYM3E4P5z1y+CW1kGns/owEKd+o+AcjB3pdPSWxI8AuTOb51p4l3WMDov9c2SC98Nh+vxZeoAP8CLw/z+Noj+Ao0cE6CEGesyCHgQVuFHVHWEaetyHaXGKigu8yPSuUBc9dsYPxjGiYlbc+3LhrfzXHyt3v9sbIa2w+haSAAAAAElFTkSuQmCC",
        telegram_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAQlBMVEVMaXEpLS4pLS8rLTApLS4pLi4qLTApLS4nMDApLS6zvsEpLS5yenwxNjertbhMUVORm52hrK9gZ2mCi40/REVUWlzr2ocdAAAACnRSTlMA77cwdc9A3xqZ9uo0zQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAatJREFUeNrt2cmSgyAQBmA1bjSbCHn/Vx2zGWRcQP7UzCF9SuXwVWsLjW1RzNG3NauaruMJ0XVNxeq2WImelfx0lKz/xfHMqJdex7Oj85K8ALxJvCDzW+QI8max5rBg9wvmwLilyJDgLcUSCZZ90XJotMiSPBYMw4KsqLBgVTRYsMEtk+diwYMcHF/wj8DRWocDpVBENKDABzeFg4AzRyQBoLM0h8q/ZD2QF9n3cMkRiTww5IjGDFCO5n3rXj/1adArLJHV6qDIR+CCM9qpoyLvgwuOhJy97SLvgdr6VTCavz2y6WBQWCH5VUU8NVtgwE3p8dH/45oIWgrTW3qbW8MWOITpBR4lb7BOGD+90BvO7Njamld6obdT5P3nUItRrnk7RY7bHEwIXjNBFYI6ExQhKHPbaCCa/L48xj410S3AmbgixzcpN0Ts/2ltVMQUOakvj+q4yGknh+eNVLjTl7QHKzn9sDR1mUF+j8RfEA3+/7dR+As4fEQAH2LAxyzwQVCPHVV9YpgGH/chU6yhI9jbMvnQUBc+dsYPxhGj4pWvAdCPC/c4//nD434AhkAJ68tCPVsAAAAASUVORK5CYII=",
        telegram_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAQlBMVEVMaXH////////////////////////////29/f///////9fbW3W2tppdnazublzf3+HkZGXoaGlra3DyMjh5OR9iIiusM/5AAAACnRSTlMAEJBAo8p13/sjB91jDAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAa9JREFUeNrtmc2ygyAMhUVRIwER9b7/q176Z5Fpq8jptIuelePim8AxBJOiWCSqRsq6bVWC2rauZVMVD9SVpA6LZBfhRKky1azDa1W22g7LC4kYXkAE8TxRnHmNgqk8L1gBdVq0RAJPIRISSKKoFFQV0pJLwkgsUBb1lwNrXJpckwUPVGD9gB8CTs4RDki9YeYBBbzgvAgCXHAY4Ox4kclfsh44UPYernHMYx4wxjH3GUCa7H3rbo/6MDAwltlps2HyFnCFs3o2Wya/Bq5wPNLCe27yK6B2oQtWqzuPXTowMnYkpc0Ok58BI5wPT03hC50IdByHt+bxnAgc4vAiHicfsPNow/Bi3t+RE1s7ewtP9VHiuYMlQI/9OSOm3Zm883CwMVBnAg0aOMZAyi2jEdHm1+W1zQOg0JPdc/6nFCkadn01KWW032NyUl2ezLbJaTeH60Ya3O2L3EYmp1+WfJUZ6Hcl/gHRwO//G4X/gMsvB0p8mwXeCBLYVpXvfZXYLXxDuw8Z4qVVLHAt03c1deFtZ3xjHNEqLkU8XJA5w4WyezSw8OOPOn38If34I4juH4V29Oglg0hrAAAAAElFTkSuQmCC",
        twitter_dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXEkMDApLS4pLS4pLS8qLTApLS4pLS4oMDApLS4pLS6zvsE8QEKirK+qtbhQVVd4gIIyNjdlbG6MlpiZo6VdZGVudniaeCh1AAAACnRSTlMAEJDvyjp13yCjXoVRsAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAehJREFUeNrtmWuvwiAMhmFXuWxMhvv/P/VwUxmagVCTncR+IAaTJy30Lawg9DDcD4R040g/sHHsOjL06I1dmpYWW0suEQ43tNKGvXsjrbYxcLIH4GliD+nfzkcgniZiyxsomDU2YApoJmgCCTQutpDAFqOegloPuSVOMAQWSFB3cmAHJxMvFnggBbYf8D8Bxc2biP7geo4XAPnMvMn9/MSYupaELO9AFvpz1byJl63hqlnLpjQgcEgleEdAE/Tix7stjM28eJeFdlHY0O8bswW/S9LG+bM+gja8rSYPzQ6sfvQeb3WJLWzWuDFazUKluKDtaBOwXnrKUsyYSsBM4DN38njp4iAfuTNzmGrjsmbdC6YG6II2ubMA1UMnGJEWSXaBDXIHBGgS0EhFecFUr+Hky6xZTFkPvJoK6MKVOUGjjKxxFUdRP9YBN3cE5OcOSvPkUzCissBazBYKZkkK5hDIg4rqw1WpoFFCdGskGDMnSk+96EjPyx10eKBM8Rk/T142BcD1paJy9v52kgeU0/RSoc2ctYPLze/C+QOeAnj+r1HwD3ByciCBb7OAN4IwbKtK974a2CX8QrsP0kXXKsZwLdNvNXXB287wjXGIVnGD48cFUvO40FzePVjo54/u8+cPop8/Au/+APcI9uuAkcyvAAAAAElFTkSuQmCC",
        twitter_light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAS1BMVEVMaXH////////////////////////////4+fn///////////////////9fbW1zf3/r7e29w8NpdnakrKzb3t6MlZV9iIjN0dGvtrbZFKIaAAAADXRSTlMAEHBAip/P3/sgMK+/lNKIKgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMxlWElmSUkqAAgAAAAHAA4BAgALAAAAcgAAABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAfgAAAAAAAAB4MgIA6AMAAHgyAgDoAwAAY29tcHJlc3NlZAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAdbrQogAAAfVJREFUeNrtmduSgyAMhvGsVVQUD+//pEuAbtV1KoW/M92Z5oILOvNNEv4EGxj7tSiJszovCv6CFUXeZHHCTqxKS+5tZVYdcFHKAy3du1fwYCs2Tt4APEW8If3b+QjiKWKkeSmHmT6ZigONgs6QQHKxRALLiCUcagmLscAYm0LOM9ZggTXLscAcVya2WPBADrYv8D8BpbC2HH7o1V7vAeyH1prY73dtO5c+IYs7sJXbhqd4Xe+Xw0mxxnVWgI1D8wXvGZCCHu16t7FtB+l9yotycdGh3xmr3vGXDfnTU+g2aOKtITqkE5jsaj1ew4QttWrMesimZ6WYoPWqBRheerOm0HolQEfgQztuvOvmYFRD69Bjuo1RzbQvmBCgCZq0M4L6oSkYeV0kzg12ox0IkARIpTLbggnOYWfbLCVThANL6oAmXOESNHNQjek4M7drGHA13dBdO+yaJx4FIw83zMtA8eiAplTGy4JhV+1w3TTbUWtn9AZS4qYdfdF7i++td7jS3bTDnl4ouw5IG0Nny8YDOP3pqLI9/zpxA4qu6+TJnrYnHzffD84v8COAn/9vFP4HvMYCG/wQAz5mgQ+CIuyoCjvtoxS+YdwHH0iyCDcyfddQFz52xg/GESeTRsfHhSzkcSGtzh4s1PNH8/rzR62ePzbe/QBP+D2JeM/77AAAAABJRU5ErkJggg=="
    };
var gr = c('<div class="flex w-full justify-center items-center gap-2"><div class="flex justify-center"><a target=_blank rel="noopener noreferrer"><img class=size-9></a></div><div class="flex justify-center"><a target=_blank rel="noopener noreferrer"><img class=size-9>');
const cr = A => {
    const [e, n] = T({}), i = A.isWin ? "Guess who just landed on a mega win 😆" : "I'm heartbroken and needs love 🥺", s = "https://www.facebook.com/sharer.php?u=", o = "https://twitter.com/share?url=";
    ae(() => sA(void 0, null, function*() {
        const b = yield(D => {
            const Q = `/game/support/share-v3/info/detail/${D}/`;
            return AA().get(Q)
        })(A.shareId);
        n(b)
    }));
    const d = b => {
        const D = `${location.protocol}//${Z.host}/api/game/support/share-v3/info/${A.shareId}/`;
        return A.shortUrl && A.shortUrl !== "" ? b + A.shortUrl : b + ((Q, w) => {
            const E = [],
                x = `${location.protocol}//${Z.host}/game-detail/${w}&bd=${A.shareObj.betId}&gn=${A.shareObj.gameUnique}&gd=${A.shareObj.gameId}&ud=${A.shareObj.userId}&un=${A.shareObj.userName}&sg=${A.shareObj.isSingle?"1":"0"}`;
            return E.push(`title=${encodeURIComponent(Z.host)}`), E.push(`description=${encodeURIComponent(i)}`), E.push(`image=${encodeURIComponent(Q)}`), E.push(`url=${encodeURIComponent(x)}`), E.push(`site_name=${encodeURIComponent(Z.host)}`), encodeURIComponent(`${location.protocol}//webapi.${Z.host}/game/support/share/friend/?${E.join("&")}`)
        })(D, e().betLog.distributeId)
    };
    return t = gr(), l = t.firstChild, m = l.firstChild, h = m.firstChild, f = l.nextSibling.firstChild, B = f.firstChild, m.$$click = () => {
        A.onShare && A.onShare("facebook", d(s))
    }, f.$$click = () => {
        A.onShare && A.onShare("twitter", d(o))
    }, H(b => {
        var D = d(s),
            Q = dA.darken ? uA.facebook_dark : uA.facebook_light,
            w = d(o),
            E = dA.darken ? uA.twitter_dark : uA.twitter_light;
        return D !== b.e && N(m, "href", b.e = D), Q !== b.t && N(h, "src", b.t = Q), w !== b.a && N(f, "href", b.a = w), E !== b.o && N(B, "src", b.o = E), b
    }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0
    }), t;
    var t, l, m, h, f, B
};
eA(["click"]);
var ur = c('<div class="size-full flex justify-center items-center overflow-hidden relative"><img alt=""class="size-full absolute top-0 left-0">'),
    mr = c(`<div class=""><style>
          @keyframes ribbonAnimation {
            0% {
              visibility: visible;
            }
            29% {
              visibility: visible;
            }
            30% {
              visibility: hidden;
            }
            100% {
              visibility: hidden;
            }
          }
        </style><div>`);
const ee = {
        win: [sr, lr],
        lose: [or, dr]
    },
    fr = A => {
        return e = mr(), n = e.firstChild.nextSibling, a(n, r(y, {
            get when() {
                return A.isWin
            },
            get children() {
                var i = ur(),
                    s = i.firstChild;
                return s.style.setProperty("animation", "ribbonAnimation 4s infinite"), a(i, () => A.children, null), H(o => {
                    var d = A.delay ? ir : nr,
                        t = `${A.delay?"0.6s":0}`;
                    return d !== o.e && N(s, "src", o.e = d), t !== o.t && ((o.t = t) != null ? s.style.setProperty("animation-delay", t) : s.style.removeProperty("animation-delay")), o
                }, {
                    e: void 0,
                    t: void 0
                }), i
            }
        }), null), a(n, r(y, {
            get when() {
                return !A.isWin
            },
            get children() {
                return A.children
            }
        }), null), H(i => {
            var s = ne("size-full bg-layer3 text-brand bg-cover text-2xl font-bold bg-no-repeat bg-center flex items-center justify-center relative rounded-xl overflow-hidden whitespace-nowrap", A.isWin ? "win" : "lose"),
                o = A.isWin ? ee.win[dA.darken ? 0 : 1] : ee.lose[dA.darken ? 0 : 1];
            return s !== i.e && P(n, i.e = s), o !== i.t && ((i.t = o) != null ? n.style.setProperty("background-image", o) : n.style.removeProperty("background-image")), i
        }, {
            e: void 0,
            t: void 0
        }), e;
        var e, n
    };
var hr = c("<style>"),
    br = c('<div class="animation-win-wrap animation-win w-10 h-10">'),
    Br = c('<div class="star-item item-1">'),
    pr = c('<div class="star-item item-2">'),
    wr = c('<div class="star-item item-3">'),
    vr = c('<div class="star-item item-4">');
const Se = A => {
    return [(i = hr(), a(i, () => `
          @keyframes task_star {
            0% {
              transform: scale(0.8);
            }
            25% {
              transform: scale(1.5);
            }
            50% {
              transform: scale(0.8);
            }
            75% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(0.8);
            }
          }
          @keyframes task_star_big {
            25% {
              transform: scale(1.8);
            }
            50% {
              transform: scale(0.8);
            }
            75% {
              transform: scale(1.5);
            }
          }
          .animation-win-wrap {
            background: url(${rr}) no-repeat center;
            background-size: 100% 100%;
            position: relative;
            .star-item {
              background: url(${ar}) no-repeat center;
              background-size: 100% 100%;
              position: absolute;
              width: 25%;
              height: 25%;
              &.item-1 {
                top: 7%;
                left: 18%;
                animation: task_star 1s infinite linear;
              }
              &.item-2 {
                top: 47%;
                right: 5%;
                animation: task_star 1s infinite linear;
                animation-delay: 0.25s;
              }
              &.item-3 {
                top: 64%;
                left: 14%;
                animation: task_star_big 1s infinite linear;
                animation-delay: 0.5s;
              }
              &.item-4 {
                top: 3%;
                left: 68%;
                animation: task_star_big 1s infinite linear;
                animation-delay: 0.75s;
              }
            }
          }
        `), i), (n = br(), a(n, (e = fA(() => !!A.show), () => e() && [Br(), pr(), wr(), vr()])), n)];
    var e, n, i
};
var Cr = c(`<style>
          @keyframes heartleft {
            0% {
              transform: rotate(0);
            }
            50% {
              transform: rotate(0);
            }
            51% {
              transform: rotate(-15deg);
            }
            53% {
              transform: rotate(-13deg);
            }
            55% {
              transform: rotate(-15deg);
            }
            57% {
              transform: rotate(-13deg);
            }
            59% {
              transform: rotate(-15deg);
            }
            75% {
              transform: rotate(-15deg);
            }
            100% {
              transform: rotate(0);
            }
          }
          @keyframes heartright {
            0% {
              transform: rotate(0);
            }
            50% {
              transform: rotate(0);
            }
            51% {
              transform: rotate(20deg);
            }
            53% {
              transform: rotate(16deg);
            }
            55% {
              transform: rotate(20deg);
            }
            57% {
              transform: rotate(18deg);
            }
            59% {
              transform: rotate(20deg);
            }
            75% {
              transform: rotate(20deg);
            }
            100% {
              transform: rotate(0);
            }
          }
          @keyframes hiddenblock {
            0% {
              visibility: hidden;
            }
            50% {
              visibility: hidden;
            }
            51% {
              visibility: visible;
            }
            80% {
              visibility: hidden;
            }
            100% {
              visibility: hidden;
            }
          }
          .animation-lose-wrap {
            border-radius: 50%;
            background-color: #3c3f49;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .left {
              position: absolute;
              width: 33%;
              left: 19%;
              top: 29%;
              animation: heartleft 5s infinite;
              transform-origin: 100% 100%;
            }
            .right {
              position: absolute;
              width: 33%;
              left: 50%;
              top: 28%;
              animation: heartright 5s infinite;
              transform-origin: 0% 100%;
            }
            .block_one {
              position: absolute;
              visibility: hidden;
              width: 12%;
              left: 37%;
              top: 22%;
              animation: hiddenblock 5s infinite;
            }
            .block_two {
              position: absolute;
              visibility: hidden;
              width: 14%;
              left: 53%;
              top: 26%;
              animation: hiddenblock 5s infinite;
            }
          }
        `),
    xr = c('<div class="animation-lose-wrap size-10 animation-lose"><img class=left alt=""><img class=block_one alt=""><img class=block_two alt=""><img class=right alt="">');
const Me = () => {
    const A = (2 * Math.random()).toFixed(1) + "s";
    return [Cr(), (e = xr(), n = e.firstChild, i = n.nextSibling, s = i.nextSibling, o = s.nextSibling, A != null ? n.style.setProperty("animation-delay", A) : n.style.removeProperty("animation-delay"), A != null ? i.style.setProperty("animation-delay", A) : i.style.removeProperty("animation-delay"), A != null ? s.style.setProperty("animation-delay", A) : s.style.removeProperty("animation-delay"), A != null ? o.style.setProperty("animation-delay", A) : o.style.removeProperty("animation-delay"), H(d => {
        var t = cA.heart_left,
            l = cA.block_two,
            m = cA.block,
            h = cA.heart_right;
        return t !== d.e && N(n, "src", d.e = t), l !== d.t && N(i, "src", d.t = l), m !== d.a && N(s, "src", d.a = m), h !== d.o && N(o, "src", d.o = h), d
    }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0
    }), e)];
    var e, n, i, s, o
};
var yr = c('<div class="bg-layer3 rounded-lg p-3"><div class="flex items-center"><p class="text-primary text-base ml-2 leading-none font-extrabold">'),
    Qr = c('<div class="flex items-center text-2xl font-medium mr-1.5"><span></span><span class=text-primary>'),
    Er = c('<div class="w-full mt-3"><div class="w-full h-9 flex items-center justify-center"><p class=text-sm></p><p class="ml-2 font-bold"> x'),
    Sr = c('<div class=" bg-[rgba(0,0,0,0.05)] dark:bg-[#323738] rounded-lg p-3 mt-2"><div class="w-full flex items-center justify-center"><div class="flex items-center font-medium mr-1"><span></span><span class="text-primary text-sm">'),
    Mr = c('<div class="mt-2 flex items-center justify-center"><p class="text-sm text-[#98A7B5] "></p><p class="ml-1.5 font-extrabold text-sm text-primary"> x');

function Ir(A) {
    const e = A.betLog.odds >= 1e4,
        [n, i] = T(!1),
        s = A.fullName ? A.fullName : A.gameUnique;
    ue(Ht(A.gameUnique));
    const {
        findToken: o
    } = vA();
    A.gameType;
    const d = q(() => o(A.betLog.currencyName || ""));
    return l = yr(), m = l.firstChild, h = m.firstChild, a(m, e ? r(Se, {
        show: !0
    }) : r(Me, {}), h), a(h, () => u(e ? "My Win In __showName__" : "My Lose In __showName__", {
        showName: s
    })), a(l, (t = fA(() => !!A.open), () => {
        return t() ? (M = Er(), K = M.firstChild, W = K.firstChild, g = W.nextSibling, I = g.firstChild, M.$$click = () => {
            if (n()) return !1;
            A.open && (i(!0), setTimeout(() => {
                i(!1)
            }, 2e3), L.push(() => r(De, {
                get id() {
                    return A.betLog.distributeId
                }
            })))
        }, a(M, r(fr, {
            get show() {
                return !A.chatroom && e
            },
            class: "",
            isWin: e,
            get children() {
                return [r(bA, {
                    class: "bg-amber-300	rounded-full mr-1.5",
                    get token() {
                        return d()
                    }
                }), (F = Qr(), k = F.firstChild, O = k.nextSibling, a(k, () => `${new J(A.betLog.winAmount||0).sub(A.betLog.betAmount||0).toNumber()} `), a(O, () => {
                    var S;
                    return (S = d()) == null ? void 0 : S.name
                }), H(() => P(k, _("text-primary mr-1.5 text-sm font-extrabold", {
                    "!text-brand": Number(A.betLog.winAmount) - Number(A.betLog.betAmount) > 0
                }))), F)];
                var F, k, O
            }
        }), K), a(W, () => u("Payout")), a(g, () => A.betLog.odds / 1e4, I), M) : [(Q = Sr(), w = Q.firstChild, E = w.firstChild, x = E.firstChild, C = x.nextSibling, a(w, r(bA, {
            class: "bg-amber-300	rounded-full mr-1",
            get token() {
                return d()
            }
        }), E), a(x, () => `${new J(A.betLog.winAmount||0).sub(A.betLog.betAmount||0).toNumber()}`), a(C, () => {
            var F;
            return (F = d()) == null ? void 0 : F.name
        }), H(() => P(x, _("text-primary mr-1.5 text-sm font-extrabold", {
            "!text-brand": Number(A.betLog.winAmount) - Number(A.betLog.betAmount) > 0
        }))), Q), (f = Mr(), B = f.firstChild, b = B.nextSibling, D = b.firstChild, a(B, () => u("Payout")), a(b, () => A.betLog.odds / 1e4, D), f)];
        var f, B, b, D, Q, w, E, x, C, M, K, W, g, I
    }), null), H(f => Re(l, dA.darken ? {
        background: "linear-gradient(180deg, rgba(254, 242, 122, 0.10) -4.43%, rgba(254, 242, 122, 0.00) 38.75%), var(--bg-layer3, #292D2E)"
    } : {
        background: "linear-gradient(180deg, rgba(254, 242, 122, 0.10) -4.43%, rgba(254, 242, 122, 0.00) 38.75%), var(--bg-layer3, #FFF)"
    }, f)), l;
    var t, l, m, h
}
eA(["click"]);
var kr = c('<div class="flex justify-center">'),
    Dr = c('<input class="w-full mt-2 placeholder:text-primary p-3 text-primary text-sm font-semibold rounded-lg border border-input bg-[#f3f3f3] dark:bg-[#292D2E]"disabled>'),
    Lr = c("<p>"),
    Ur = c('<div class="my-6 flex gap-3">'),
    Vr = c('<div class="text-center text-base text-secondary mb-2">'),
    Hr = c('<div class="mt-2 rounded-xl overflow-hidden">'),
    Fr = c('<div class="flex items-center justify-center w-full h-full bg-layer2 sm:bg-layer4 rounded-t-xl">');
const Tr = Gt(() => V("Maximum 50 Characters."), 2e3);

function Nr(A) {
    const e = tr(),
        [n, i] = T(!0),
        [s, o] = T({}),
        [d, t] = T(""),
        [l, m] = T(!0),
        [h, f] = T(),
        [B, b] = T("");

    function D(Q) {
        const w = A.betLog,
            E = new J(w.winAmount).sub(w.betAmount).toNumber();
        SA.emit("sensorsTrack", {
            event: "share_bet_result",
            game_name: String(A.gameUnique || s().fullName),
            game_id: String(w.gameId || w.betId),
            bet_id: String(w.betId),
            coin_type: w.currencyName,
            amount: String(w.betAmount),
            amount_fiat: "",
            profit: String(E),
            profit_fiat: "",
            odds: w.odds / 1e4,
            share_methods: Q
        })
    }
    return BA(() => {
        let Q = !0;
        Qe(A).then(w => {
            if (w) {
                let E = "";
                E = w.odds >= 1e4 ? u("I'm lucky today!") : u("Not my day..."), Q && (b(E), o(w), h() && typeof h().focus == "function" && h().focus())
            } else L.pop()
        }).catch(w => {
            V(w), L.pop()
        }), LA(() => {
            Q = !1
        })
    }), r(mA, {
        get title() {
            return Q = Fr(), a(Q, () => u("Share")), Q;
            var Q
        },
        class: "!bg-layer2 w-96 min-w-96 max-h-[80%] help-pop",
        get children() {
            var Q = Hr();
            return a(Q, r(y, {
                get when() {
                    return !s().betId
                },
                get children() {
                    var w = kr();
                    return a(w, r(DA, {})), w
                }
            }), null), a(Q, r(y, {
                get when() {
                    return s().betId
                },
                get children() {
                    return [r(Ir, {
                        get betLog() {
                            return CA(iA({}, A.betLog), {
                                originBetId: A.betLog.betId,
                                betId: s().betId
                            })
                        },
                        get gameType() {
                            return A.third ? 3 : 1
                        },
                        get gameUnique() {
                            return A.gameUnique
                        },
                        get fullName() {
                            return s().fullName
                        }
                    }), (x = Dr(), x.addEventListener("change", C => {
                        C.target.value.length < 50 || Tr(), t(C.target.value.slice(0, 50))
                    }), x.addEventListener("blur", () => i(!1)), x.addEventListener("focus", () => i(!0)), Ge(C => f(C), x), H(() => N(x, "placeholder", B())), H(() => x.value = d()), x), (E = Ur(), a(E, r(Y, {
                        type: "second",
                        class: "w-1/2 leading-3",
                        onClick: () => {
                            if (s().betId) try {
                                const C = `${location.protocol}//${Z.host}/game-detail/${s().distributeId}`;
                                pA(C), V(u("Copied"))
                            } catch (C) {}
                        },
                        get children() {
                            var C = Lr();
                            return a(C, () => u("Copy link")), C
                        }
                    }), null), a(E, r(Y, {
                        type: "brand",
                        class: "w-1/2 leading-3",
                        onClick: () => {
                            l() && (m(!1), SA.emit("getPublicChatRoomId", C => {
                                ((M, K, W) => AA().post(`/game/support/share-v3/share/sendChat/${M}/`, {
                                    roomId: W,
                                    shareContent: K
                                }))(s().betId, B(), C, A.single).then(() => {
                                    V(u("Successfully shared")), L.pop()
                                }).catch(M => {
                                    V(M), L.pop()
                                })
                            }), setTimeout(() => {
                                e() && m(!0)
                            }, 5e3)), D("chatroom")
                        },
                        get children() {
                            return u("Share to Chatroom")
                        }
                    }), null), E), (w = Vr(), a(w, () => u("Share on social media")), w), r(cr, {
                        get isWin() {
                            return A.betLog.odds >= 1e4
                        },
                        get shareId() {
                            return s().betId
                        },
                        get shortUrl() {
                            return s().shortUrl
                        },
                        get shareObj() {
                            var C;
                            return {
                                betId: A.betLog.betId.toString(),
                                gameUnique: A.gameUnique,
                                userId: A.betLog.userId.toString(),
                                userName: A.betLog.userName || "",
                                isSingle: A.single,
                                gameId: ((C = A.betLog.gameId) == null ? void 0 : C.toString()) || ""
                            }
                        },
                        onShare: C => D(C)
                    })];
                    var w, E, x
                }
            }), null), Q
        }
    })
}
var Rr = c('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none><path fill=currentColor d="m6.323 9.23 6.77 6.77-6.77 6.77 2.908 2.907L16 18.907l6.77 6.77 2.907-2.907-6.77-6.77 6.77-6.77-2.907-2.906L16 13.093l-6.77-6.77z">');
const Gr = A => {
    return e = Rr(), gA(e, A, !0, !0), e;
    var e
};
var Zr = c('<div class="flex justify-center">'),
    zr = c('<div class="flex items-center"><div class=ml-4><p class="m-0 text-xs h-4.5 leading-4 flex items-center text-primary capitalize whitespace-nowrap overflow-hidden">'),
    jr = c('<div class="w-full rounded-xl h-40 bg-layer5 mt-5 p-3"><p class="m-0 text-center">'),
    Jr = c('<div class="bg-layer4 rounded-xl p-4 overflow-hidden relative lg:w-100">'),
    Yr = c('<p class="m-0 h-5 flex items-center text-primary font-bold">'),
    Wr = c('<p class="m-0 h-5 flex items-center text-primary font-bold"> '),
    Kr = c('<div class="w-full flex flex-wrap pl-4 items-center justify-center">'),
    Or = c('<a target=_blank rel="noopener noreferrer"class="mr-4 mt-1"><img class="w-10 h-10">');

function Xr(A) {
    const e = A.betLog.odds >= 1e4,
        [n, i] = T({
            shareData: {},
            loading: !0
        });
    return BA(() => {
        let o = !0;
        Qe(A).then(d => {
            d && o && i({
                shareData: d,
                loading: !1
            })
        }).catch(d => {
            V(d), L.pop()
        }), LA(() => {
            o = !1
        })
    }), s = Jr(), a(s, r(y, {
        get when() {
            return n().loading
        },
        get children() {
            var o = Zr();
            return a(o, r(DA, {})), o
        }
    }), null), a(s, r(y, {
        get when() {
            return !n().loading
        },
        get children() {
            return [r(Gr, {
                onClick: () => L.pop(),
                class: "absolute right-4 top-4 size-4 cursor-pointer scale-150 text-secondary"
            }), (h = zr(), f = h.firstChild, B = f.firstChild, a(h, e ? r(Se, {
                show: !0
            }) : r(Me, {}), f), a(f, e ? (m = Yr(), a(m, () => u("Winning tastes sweet!")), m) : (t = Wr(), l = t.firstChild, a(t, () => Z.mascot, l), a(t, () => u("took it all! 🥺"), null), t), B), a(B, () => e ? `${n().shareData.fullName} ${u("Wow Moment")}` : `${n().shareData.fullName} ${u("Damn Moment")}`), h), (o = jr(), d = o.firstChild, a(d, () => u("Share on social media")), a(o, r(Pr, {
                get distributeId() {
                    return n().shareData.distributeId
                }
            }), null), o), r(Y, {
                class: "w-full h-12 mt-4 text-primary",
                type: "second",
                onClick: () => {
                    try {
                        const b = `${location.protocol}//${Z.host}/game-detail/${n().shareData.distributeId}`;
                        pA(b), V(u("Copied"))
                    } catch (b) {}
                },
                get children() {
                    return u("Copy link")
                }
            })];
            var o, d, t, l, m, h, f, B
        }
    }), null), s;
    var s
}

function Pr(A) {
    const e = `${location.protocol}//${Z.host}/game-detail/${A.distributeId}`,
        [n, i] = T(null);
    return BA(() => {
        sA(this, null, function*() {
            const s = yield Ze({
                title: Z.host || "",
                content: "Hey buddy, you really should check this bet slip.",
                shareUrl: e,
                isGame: !1
            });
            i(s)
        })
    }), r(y, {
        get when() {
            return n()
        },
        get children() {
            var s = Kr();
            return a(s, r(ze, {
                get each() {
                    return n()
                },
                children: (o, d) => r(y, {
                    get when() {
                        return o.url
                    },
                    get children() {
                        var t = Or(),
                            l = t.firstChild;
                        return H(m => {
                            var h = o.url,
                                f = o.icon;
                            return h !== m.e && N(t, "href", m.e = h), f !== m.t && N(l, "src", m.t = f), m
                        }, {
                            e: void 0,
                            t: void 0
                        }), t
                    }
                })
            })), s
        }
    })
}
var qr = c('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path fill-rule=evenodd clip-rule=evenodd d="M20.7166 10.45C21.0945 10.7049 21.0945 11.2611 20.7166 11.516L12.1658 17.2846C11.7388 17.5727 11.1633 17.2667 11.1633 16.7516V5.21434C11.1633 4.69923 11.7388 4.39327 12.1658 4.68135L20.7166 10.45Z"fill=#B3BEC1></path><path fill-rule=evenodd clip-rule=evenodd d="M12.1274 7.54137C8.4663 8.15096 3.09904 12.7736 2.25816 18.8808C2.16617 19.5489 2.87791 19.5459 3.09904 19.2018C4.64948 16.7891 7.43313 14.3161 12.1274 14.3161C12.1274 14.3161 12.1434 9.36103 12.1274 7.54137Z"fill=#B3BEC1>'),
    $r = c("<div>"),
    _r = c("<div class=pop-center>");
const Aa = () => qr(),
    ea = function(A) {
        return lA.login ? r(je, {
            title: "Share",
            get children() {
                var e = $r();
                return e.$$click = () => {
                    if (Number(A.betLog.betAmount) === 0) return V(u("Demo play cannot be shared."));
                    lA.userId === A.betLog.userId ? L.push(() => r(Nr, A), {
                        close: !1
                    }) : L.push(() => {
                        return n = _r(), a(n, r(Xr, A)), n;
                        var n
                    }, {
                        close: !1
                    })
                }, a(e, r(Aa, {})), H(() => P(e, ne("z-10 size-11 m-0 p-0 rounded-full flex justify-center items-center absolute cursor-pointer right-1 top-1", A.class))), e
            }
        }) : null
    };
eA(["click"]);
const te = "/modules/games2/assets/game_detail_bg-f273b618.png";
var ta = c("<img>");
const Ie = A => {
    const e = Je(() => A.src, `w=${A.width}`),
        [n, i] = re(A, ["src", "width"]);
    return s = ta(), gA(s, oA(i, {
        get src() {
            return e()
        }
    }), !1, !1), s;
    var s
};
var ra = c('<div class="mb-2 text-base text-center">'),
    aa = c('<div class="pt-4 p-3 pb-0"><div class="text-primary leading-5 text-center text-base sm:text-sm"></div><div class="flex items-center justify-center"><div class="flex items-center text-2xl"><span>'),
    na = c("<div class=mb-4>");
const ia = A => {
    const {
        isViewInFiat: e
    } = vA(), {
        coinFormat: n
    } = se();
    return i = aa(), s = i.firstChild, o = s.nextSibling, d = o.firstChild, t = d.firstChild, a(s, () => u("Profit")), a(o, r(bA, {
        class: "bg-amber-300 rounded-full mr-1.5",
        get token() {
            return A.currentToken
        },
        imgClass: "size-6"
    }), d), a(t, () => {
        var l, m;
        return `${new J(A.betLog.winAmount||0).sub(A.betLog.betAmount||0).todp((l=A.currentToken)==null?void 0:l.decimal,J.ROUND_DOWN)} ${(m=A.currentToken)==null?void 0:m.name}`
    }), a(i, r(y, {
        get when() {
            return e()
        },
        get fallback() {
            return na()
        },
        get children() {
            var l = ra();
            return a(l, () => n(new J(new J(A.betLog.winAmount || 0).sub(A.betLog.betAmount || 0)), A.betLog.currencyName)), l
        }
    }), null), H(() => P(t, _("text-primary leading-10 text-[1.75rem] font-extrabold", {
        "!text-brand": Number(A.betLog.winAmount) - Number(A.betLog.betAmount) > 0
    }))), i;
    var i, s, o, d, t
};
var sa = c('<span class="text-base sm:text-sm">'),
    la = c('<div class="flex justify-between bg-black_alpha5 dark:bg-black_alpha10 rounded-xl mx-3 py-3"><div class="flex flex-col items-center w-1/2 text-sm sm:text-xs"><span class=text-secondary></span><div class="flex items-center"></div></div><div class="flex flex-col items-center w-1/2 text-sm sm:text-xs"><span class=text-secondary></span><span class="leading-6 text-base sm:text-sm">x'),
    oa = c('<span class="whitespace-nowrap text-base sm:text-sm">');
const da = A => {
    const {
        isViewInFiat: e
    } = vA(), {
        coinFormat: n
    } = se();
    return i = la(), s = i.firstChild, o = s.firstChild, d = o.nextSibling, t = s.nextSibling.firstChild, l = t.nextSibling, m = l.firstChild, a(o, () => u("Bet Amount")), a(d, r(y, {
        get when() {
            return e()
        },
        get fallback() {
            return [r(bA, {
                class: "bg-amber-300 rounded-full w-4 h-4 mr-1",
                get token() {
                    return A.currentToken
                }
            }), (h = oa(), a(h, () => {
                var f;
                return `${new J(A.betLog.betAmount||0).toNumber()} ${(f=A.currentToken)==null?void 0:f.name}`
            }), h)];
            var h
        },
        get children() {
            var h = sa();
            return a(h, () => n(new J(A.betLog.betAmount || 0), A.betLog.currencyName)), h
        }
    })), a(t, () => u("Payout")), a(l, () => A.betLog.oddsString, m), i;
    var i, s, o, d, t, l, m
};
var ga = c('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="M21.738 4a4.84 4.84 0 0 1 4.838 4.838v10.378a3.663 3.663 0 0 1-3.663 3.662l-1.347-.001v1.461A3.66 3.66 0 0 1 17.905 28H8.662A3.66 3.66 0 0 1 5 24.338V12.784a3.66 3.66 0 0 1 3.662-3.662h1.346v-1.46a3.66 3.66 0 0 1 3.485-3.658L13.67 4zm0 2.16h-8.067c-.828 0-1.502.675-1.502 1.503v1.46h5.919a3.48 3.48 0 0 1 3.478 3.48v8.115h1.347c.787 0 1.435-.609 1.498-1.38l.005-.123V8.838a2.68 2.68 0 0 0-2.677-2.677z"></path> ');
const ca = A => {
    return e = ga(), gA(e, A, !0, !0), e;
    var e
};
var ua = c('<svg width=14 height=17 viewBox="0 0 14 17"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13.9655 4.61839C13.9464 4.19746 13.9464 3.79567 13.9464 3.39387C13.9464 3.06861 13.6976 2.81988 13.3724 2.81988C10.9807 2.81988 9.16311 2.13109 7.6516 0.657848C7.422 0.447384 7.0776 0.447384 6.84801 0.657848C5.3365 2.13109 3.51886 2.81988 1.12723 2.81988C0.80197 2.81988 0.553241 3.06861 0.553241 3.39387C0.553241 3.79567 0.55324 4.19746 0.534107 4.61839C0.457575 8.63632 0.342777 14.1466 7.05847 16.4617L7.2498 16.5L7.44113 16.4617C14.1377 14.1466 14.042 8.65546 13.9655 4.61839ZM6.79061 10.1861C6.67581 10.2818 6.54188 10.3392 6.38882 10.3392H6.36968C6.21662 10.3392 6.06355 10.2626 5.96789 10.1478L4.18852 8.17713L5.0495 7.41181L6.44621 8.96158L9.54577 6.0151L10.3302 6.85695L6.79061 10.1861Z"fill=#24EE89>');
const ma = A => ua();
var fa = c('<div class="flex px-5"><img class="rounded-full w-11 h-11"><div class="flex flex-col ml-3 justify-around text-sm sm:text-xs"><div><span class=text-secondary></span><span class="text-secondary ml-1">On </span></div><div class="flex items-center"><span class=text-secondary></span><div class="flex items-center ml-1 text-primary"><span class=mr-1>');
const ha = A => (() => {
    var e = fa(),
        n = e.firstChild,
        i = n.nextSibling.firstChild,
        s = i.firstChild,
        o = s.nextSibling;
    o.firstChild;
    var d = i.nextSibling.firstChild,
        t = d.nextSibling,
        l = t.firstChild;
    return n.$$click = () => {
        var m;
        return (m = A.onUserClick) == null ? void 0 : m.call(A, A.userId)
    }, s.$$click = () => {
        var m;
        return (m = A.onUserClick) == null ? void 0 : m.call(A, A.userId)
    }, a(s, () => FA.userName(A.nickName)), a(o, () => new Date(A.betTime || 0).toLocaleString(), null), a(d, () => u("Bet ID:")), a(l, r(ma, {})), a(t, () => A.distributeId, null), a(t, r(ca, {
        class: "ml-1 w-4 h-4 text-secondary",
        onClick: () => {
            pA(A.distributeId || ""), V(u("Copy Successful"))
        }
    }), null), H(() => N(n, "src", FA.avatar(A.userId || 0, "s"))), e
})();
eA(["click"]);
var ba = c('<div class="flex justify-between items-center py-3 px-4 mt-4 mb-4 rounded-xl bg-layer5 mx-3"><div class=flex><div class="flex flex-col justify-around my-1"><div class="text-primary font-extrabold text-sm"></div><div class="text-secondary text-sm sm:text-xs"></div></div></div><div class="flex items-center text-gray-400 text-secondary text-base sm:text-xs cursor-pointer"> ');
const Ba = A => {
    return e = ba(), n = e.firstChild, i = n.firstChild, s = i.firstChild, o = s.nextSibling, d = n.nextSibling, t = d.firstChild, a(n, r(Ie, {
        width: 36,
        class: "rounded w-10 h-14 mr-2",
        get src() {
            return A.iconThreeFour
        }
    }), i), a(s, () => A.fullName), a(o, () => u("BC Brand")), Ye(d, "click", A.onPlayNow, !0), a(d, () => u("Play Now"), t), a(d, r(ye, {
        class: "-rotate-180 w-7 h-7"
    }), null), e;
    var e, n, i, s, o, d, t
};
eA(["click"]);
var pa = c('<div class="flex flex-col justify-center items-center p-4 gap-4"><div class="text-center text-secondary"></div><div class="flex justify-center items-center gap-4 w-full">'),
    wa = c('<div><span class="text-primary text-sm font-extrabold">'),
    va = c('<div id=common-game-detail class="rounded-xl mx-3 bg-black_alpha10">'),
    ke = c("<span>"),
    Ca = c('<div class=mx-3><div class="flex gap-2 mt-4 pb-4">'),
    xa = c('<div class="mx-3 pb-4">'),
    ya = c("<div class=flex>"),
    Qa = c('<div><div class=sm:mt-3><div class="flex items-center relative h-8 px-4"><div class="absolute rounded-full border-8 -rotate-45 border-t-transparent border-l-transparent -left-3 border-layer2"></div><div class="border-b border-dashed border-secondary h-0 w-full opacity-20"></div><div class="absolute rounded-full border-8 rotate-[135deg] border-t-transparent border-l-transparent -right-3 border-layer2">'),
    Ea = c('<div class="flex items-center justify-center size-full bg-layer2 sm:bg-layer4 rounded-t-xl">'),
    Sa = c("<a class=cl-primary>"),
    Ma = c('<div class="flex items-center"><div class="max-w-40 whitespace-nowrap overflow-hidden text-ellipsis">'),
    Ia = c("<div>"),
    ka = c('<div class="mx-1 mt-4 pt-3 pb-1 pl-1 flex items-center gap-x-1"><p>'),
    Da = c('<div class="px-2 pb-2 rounded-xl"><div class="flex justify-between items-center py-3 px-4 mt-4 mb-4 rounded-xl bg-layer5 mx-1"><div class=flex-1><div class=mb-1></div></div><button class="ml-3 flex justify-center items-center h-8"><span>');
const La = ["crash", "fastparity", "double", "keno-multiplayer", "blackjack", "baccarat-multiplayer", "roulette-multiplayer", "Patti", "patti", "sicbo-multiplayer", "fish-prawn-crab"],
    Ua = e => sA(void 0, [e], function*({
        queryKey: A
    }) {
        return yield AA().get(`/game/bet/v2/bet/${A[1]}`)
    });

function Va(A) {
    var W;
    const e = ie(),
        n = it(),
        {
            user: i
        } = rt(),
        {
            findToken: s
        } = vA(),
        [o, d] = T(!1),
        t = EA(() => ({
            queryKey: ["/game/bet/v2/bet", A.id || n.id],
            queryFn: Ua
        })),
        l = EA(() => {
            var g, I;
            return {
                queryKey: ["/game/home/detail/", (g = t.data) == null ? void 0 : g.gameUnique],
                throwOnError: !1,
                queryFn: ({
                    queryKey: F
                }) => et(F[1]),
                enabled: !!((I = t.data) != null && I.gameUnique)
            }
        }),
        m = q(() => {
            var g;
            return s(((g = t.data) == null ? void 0 : g.betLog.currencyName) || "")
        }),
        [h] = Oe(() => {
            var g;
            return (g = t.data) == null ? void 0 : g.gameUnique.replace(/\d+/g, "")
        }, g => sA(this, null, function*() {
            let I;
            if (["Twist", "Patti"].includes(g)) {
                const F = g.toLowerCase();
                return I = yield xA[F](), I.default
            }
            return I = tt.includes(g) ? yield xA[g](): yield xA.slots(), I.default
        })),
        f = q(() => {
            var g;
            return La.includes(((g = l == null ? void 0 : l.data) == null ? void 0 : g.gameIdentity.gameUrl) || "")
        }),
        B = q(() => {
            var g;
            return ((g = l == null ? void 0 : l.data) == null ? void 0 : g.gameIdentity.gameUrl) === "blackjack"
        }),
        b = q(() => {
            var g;
            return ((g = l == null ? void 0 : l.data) == null ? void 0 : g.gameIdentity.gameUrl) === "roulette-multiplayer"
        }),
        D = q(() => {
            var g;
            return ((g = l == null ? void 0 : l.data) == null ? void 0 : g.gameIdentity.gameUrl) === "jade"
        });

    function Q() {
        var g;
        e(`/game/${((g=l==null?void 0:l.data)==null?void 0:g.gameIdentity.gameUrl)||""}`), L.pop()
    }
    const w = Xe(() => r(er, {
        get gameName() {
            var g;
            return (g = t.data) == null ? void 0 : g.gameName
        },
        onChangeSeed: () => {
            t.refetch(), L.pop()
        }
    }));

    function E() {
        lA.login ? L.push(w, {
            close: !0,
            onClose: () => {
                t.refetch()
            }
        }) : e("/login/signin")
    }

    function x() {
        var p, U, tA, rA, aA;
        if (!t.data) return;
        let g = ZA.find(G => {
            var R, nA;
            return G.key === ((R = t.data) == null ? void 0 : R.gameUnique) || G.name === ((nA = t.data) == null ? void 0 : nA.gameUnique)
        });
        (p = t.data) != null && p.gameUnique.includes("Twist") && (g = ZA.find(G => {
            var R;
            return G.id === ((R = t.data) == null ? void 0 : R.gameUnique)
        }));
        const {
            clientSeed: I
        } = CA(iA({}, t.data.seedHistory), {
            clientSeed: UA()
        }), F = t.data && t.data.betLog.gameId ? t.data.betLog.gameId : "", k = t.data && t.data.betLog.gv.hash ? t.data.betLog.gv.hash : "", {
            serverSeed: O,
            clientSeed: S
        } = t.data.seedHistory, {
            nonce: v
        } = t.data.betLog;
        if ((/[^a-zA-Z0-9]/.test(I) || I.length > 32 || I.length < 10) && V(u("Seeds are mixed characters containing 10-32 digits, uppercase and lowercase letters.")), f() || !t.data.seedHistory || t.data.seedHistory.serverSeed) {
            const G = (U = l.data) != null && U.gameIdentity.socketNameSpace.includes("main") ? 1 : 4;
            let R = B() ? `${g==null?void 0:g.validateLink}?c=${t.data.betLog.gv.clientSeed}&s=${t.data.betLog.gv.serverSeed}` : f() ? `${g==null?void 0:g.validateLink}?hash=${k}&v=${F}&he=${G}` : `${g==null?void 0:g.validateLink}?s=${O}&c=${S}&n=${v}&he=${G}&m=${((rA=(tA=t.data.betLog)==null?void 0:tA.bv)==null?void 0:rA.mode)||0}`;
            b() && (R = `${g==null?void 0:g.validateLink}?hash=${k}`), D() && (R += `&count=${((aA=t.data.betLog)==null?void 0:aA.bv.count)||1}`), window.open(R)
        } else L.push(() => r(mA, {
            get title() {
                return u("Change new seed")
            },
            get children() {
                var G = pa(),
                    R = G.firstChild,
                    nA = R.nextSibling;
                return a(R, () => u("You need to set up a new seed before validating the data (the server seed is encrypted)")), a(nA, r(Y, {
                    type: "second",
                    class: "flex-1",
                    onClick: () => {
                        L.pop()
                    },
                    get children() {
                        return u("Cancel")
                    }
                }), null), a(nA, r(Y, {
                    class: "flex-1",
                    type: "brand",
                    onClick: () => {
                        L.pop(), E()
                    },
                    get children() {
                        return u("Confirm")
                    }
                }), null), G
            }
        }), {
            close: !0
        })
    }
    const C = g => {
            g && e(`/user/profile/${g}`)
        },
        M = !!A.id,
        K = ((W = t.data) == null ? void 0 : W.userId) === lA.userId;
    return r(g => M ? r(mA, {
        get class() {
            return g.class
        },
        get title() {
            return g.title
        },
        get children() {
            return g.children
        }
    }) : r(_e, {
        get class() {
            return g.class
        },
        get title() {
            return u("Bet Slip")
        },
        get children() {
            return g.children
        }
    }), {
        get title() {
            return g = Ea(), a(g, () => u("Bet Slip")), g;
            var g
        },
        get class() {
            return _("betslip !bg-layer2 dark:!bg-layer2 min-h-[30rem]", {
                "betslip-pop": M
            })
        },
        get id() {
            return A.id
        },
        get children() {
            var g = Qa(),
                I = g.firstChild,
                F = I.firstChild;
            return `url(${te})` != null ? g.style.setProperty("background-image", `url(${te})`) : g.style.removeProperty("background-image"), g.style.setProperty("background-repeat", "no-repeat"), g.style.setProperty("background-position", "top center"), g.style.setProperty("background-size", "contain"), g.style.setProperty("border-top-left-radius", "12px"), g.style.setProperty("border-top-right-radius", "12px"), a(g, r(y, {
                get when() {
                    return t.data
                },
                get children() {
                    return r(ea, {
                        class: "!size-6 right-3 sm:top-3",
                        get single() {
                            return !f()
                        },
                        get gameUnique() {
                            return t.data.gameUnique
                        },
                        get betLog() {
                            return t.data.betLog
                        }
                    })
                }
            }), I), a(I, r(y, {
                get when() {
                    return t.data
                },
                get children() {
                    return [r(ia, {
                        get betLog() {
                            return t.data.betLog
                        },
                        get currentToken() {
                            return m()
                        }
                    }), r(da, {
                        get betLog() {
                            return t.data.betLog
                        },
                        get currentToken() {
                            return m()
                        }
                    })]
                }
            }), F), a(I, r(y, {
                get when() {
                    return t.data
                },
                get children() {
                    return r(ha, {
                        get userId() {
                            return t.data.userId
                        },
                        get nickName() {
                            return t.data.nickName
                        },
                        get betTime() {
                            return t.data.betLog.betTime
                        },
                        get distributeId() {
                            return t.data.betLog.distributeId
                        },
                        onUserClick: C
                    })
                }
            }), null), a(I, r(y, {
                get when() {
                    var k;
                    return ((k = t.data) == null ? void 0 : k.gameType) !== 3
                },
                get children() {
                    return [r(y, {
                        get when() {
                            return l.data
                        },
                        get children() {
                            return r(Ba, {
                                get iconThreeFour() {
                                    return l.data.iconThreeFour
                                },
                                get fullName() {
                                    return l.data.fullName
                                },
                                onPlayNow: Q
                            })
                        }
                    }), (k = wa(), O = k.firstChild, k.$$click = () => {
                        d(!o())
                    }, a(O, () => u("Game Detail")), a(k, r(ye, {
                        class: "-rotate-180 w-7 h-7 text-primary transition-all",
                        get style() {
                            return {
                                transform: `rotate(${o()?"270deg":"180deg"})`
                            }
                        }
                    }), null), H(() => P(k, MA("flex items-center justify-between px-3 py-1 text-sm mt-2", !o() && "pb-4"))), k), r(Pe, {
                        get when() {
                            return o()
                        },
                        get children() {
                            return [r(y, {
                                get when() {
                                    var S;
                                    return (S = h()) == null ? void 0 : S.Detail
                                },
                                get children() {
                                    var S = va();
                                    return a(S, r(qe, {
                                        get component() {
                                            var v;
                                            return (v = h()) == null ? void 0 : v.Detail
                                        },
                                        get betLog() {
                                            var v;
                                            return (v = t.data) == null ? void 0 : v.betLog
                                        }
                                    })), S
                                }
                            }), r(y, {
                                get when() {
                                    var S;
                                    return !f() && ((S = t.data) == null ? void 0 : S.gameType) === 1 && t.data
                                },
                                get children() {
                                    var S = Ca(),
                                        v = S.firstChild;
                                    return a(S, r(z, {
                                        class: "mt-4",
                                        get children() {
                                            return [r(j, {
                                                get children() {
                                                    return u("Server Seed")
                                                }
                                            }), r(X, {
                                                size: "lg",
                                                class: "mt-2 text-base sm:text-sm font-semibold",
                                                get value() {
                                                    var p, U;
                                                    return (U = (p = t.data) == null ? void 0 : p.seedHistory) == null ? void 0 : U.serverSeed
                                                },
                                                disabled: !0,
                                                get placeholder() {
                                                    return u("The Seed hasn't been revealed yet.")
                                                }
                                            })]
                                        }
                                    }), v), a(S, r(z, {
                                        class: "mt-4",
                                        get children() {
                                            return [r(j, {
                                                class: "flex justify-between",
                                                get children() {
                                                    return [(p = ke(), a(p, () => u("Server Seed (hash)")), p), fA(() => {
                                                        return fA(() => {
                                                            var tA, rA, aA;
                                                            return !(i.userId !== ((tA = t.data) == null ? void 0 : tA.betLog.userId) || (aA = (rA = t.data) == null ? void 0 : rA.seedHistory) != null && aA.serverSeed)
                                                        })() && ((U = Sa()).$$click = E, a(U, () => u("Seed Settings")), U);
                                                        var U
                                                    })];
                                                    var p
                                                }
                                            }), r(X, {
                                                size: "lg",
                                                class: "mt-2 text-base sm:text-sm font-semibold",
                                                get value() {
                                                    var p, U;
                                                    return (U = (p = t.data) == null ? void 0 : p.seedHistory) == null ? void 0 : U.serverSeedHash
                                                },
                                                disabled: !0
                                            })]
                                        }
                                    }), v), a(v, r(z, {
                                        class: "flex-1 text-base",
                                        get children() {
                                            return [r(j, {
                                                get children() {
                                                    return u("Client Seed")
                                                }
                                            }), r(X, {
                                                size: "lg",
                                                class: "mt-2 text-base sm:text-sm",
                                                get value() {
                                                    var p, U;
                                                    return (U = (p = t.data) == null ? void 0 : p.seedHistory) == null ? void 0 : U.clientSeed
                                                },
                                                disabled: !0
                                            })]
                                        }
                                    }), null), a(v, r(z, {
                                        class: "flex-1 text-base",
                                        get children() {
                                            return [r(j, {
                                                get children() {
                                                    return u("nonce")
                                                }
                                            }), r($e, {
                                                size: "lg",
                                                class: "mt-2 text-base sm:text-sm",
                                                get value() {
                                                    var p;
                                                    return (p = t.data) == null ? void 0 : p.betLog.nonce
                                                },
                                                disabled: !0
                                            })]
                                        }
                                    }), null), S
                                }
                            }), r(y, {
                                get when() {
                                    return f()
                                },
                                get children() {
                                    var S = xa();
                                    return a(S, r(z, {
                                        disabled: !0,
                                        class: "mt-4",
                                        get children() {
                                            return [r(j, {
                                                get children() {
                                                    return u("Game ID")
                                                }
                                            }), r(X, {
                                                size: "lg",
                                                class: "mt-2",
                                                get value() {
                                                    var v;
                                                    return ((v = t.data) == null ? void 0 : v.betLog.gameId) || ""
                                                },
                                                disabled: !0
                                            })]
                                        }
                                    }), null), a(S, r(y, {
                                        get when() {
                                            var v, p;
                                            return (p = (v = t.data) == null ? void 0 : v.betLog.gv) == null ? void 0 : p.hash
                                        },
                                        get children() {
                                            return r(z, {
                                                disabled: !0,
                                                class: "mt-4",
                                                get children() {
                                                    return [r(j, {
                                                        get children() {
                                                            return u("Game Hash")
                                                        }
                                                    }), r(X, {
                                                        size: "lg",
                                                        class: "mt-2",
                                                        get value() {
                                                            var v, p;
                                                            return ((p = (v = t.data) == null ? void 0 : v.betLog.gv) == null ? void 0 : p.hash) || ""
                                                        },
                                                        disabled: !0
                                                    })]
                                                }
                                            })
                                        }
                                    }), null), a(S, r(y, {
                                        get when() {
                                            var v, p;
                                            return (p = (v = t.data) == null ? void 0 : v.betLog.gv) == null ? void 0 : p.clientSeed
                                        },
                                        get children() {
                                            return r(z, {
                                                disabled: !0,
                                                class: "mt-4",
                                                get children() {
                                                    return [r(j, {
                                                        get children() {
                                                            return u("Client Seed")
                                                        }
                                                    }), r(X, {
                                                        size: "lg",
                                                        class: "mt-2",
                                                        get value() {
                                                            var v, p;
                                                            return ((p = (v = t.data) == null ? void 0 : v.betLog.gv) == null ? void 0 : p.clientSeed) || ""
                                                        },
                                                        disabled: !0
                                                    })]
                                                }
                                            })
                                        }
                                    }), null), a(S, r(y, {
                                        get when() {
                                            var v, p;
                                            return (p = (v = t.data) == null ? void 0 : v.betLog.gv) == null ? void 0 : p.serverSeed
                                        },
                                        get children() {
                                            return r(z, {
                                                disabled: !0,
                                                class: "mt-4",
                                                get children() {
                                                    return [r(j, {
                                                        get children() {
                                                            return u("Server Seed")
                                                        }
                                                    }), r(X, {
                                                        size: "lg",
                                                        class: "mt-2",
                                                        get value() {
                                                            var v, p;
                                                            return ((p = (v = t.data) == null ? void 0 : v.betLog.gv) == null ? void 0 : p.serverSeed) || ""
                                                        },
                                                        disabled: !0
                                                    })]
                                                }
                                            })
                                        }
                                    }), null), S
                                }
                            }), r(y, {
                                get when() {
                                    var S;
                                    return ((S = t.data) == null ? void 0 : S.userId) === lA.userId
                                },
                                get children() {
                                    var S = ya();
                                    return a(S, r(Y, {
                                        type: "brand",
                                        class: "mx-3 mb-2.5 w-full",
                                        onClick: x,
                                        get children() {
                                            return u("Verify")
                                        }
                                    })), S
                                }
                            })]
                        }
                    })];
                    var k, O
                }
            }), null), a(I, r(y, {
                get when() {
                    var k;
                    return ((k = t.data) == null ? void 0 : k.gameType) === 3 && (l == null ? void 0 : l.data)
                },
                get children() {
                    return r(Ha, {
                        get gameId() {
                            return t.data && t.data.betLog.gameId ? t.data.betLog.gameId : ""
                        },
                        showIssus: K,
                        get data() {
                            return l.data
                        }
                    })
                }
            }), null), H(() => P(g, _("text-xs rounded-xl relative bg-layer4 sm:mt-4", {
                "my-4": !M
            }))), g
        }
    })
}
const Ha = A => {
        const e = ie(),
            n = () => {
                SA.emit("live_support")
            },
            i = () => {
                if (A.showIssus) try {
                    pA(String(A.gameId)), V(u("Copied"))
                } catch (f) {
                    V(f)
                }
            };

        function s() {
            A.data && e(`/game/${A.data.gameIdentity.gameUrl}`)
        }
        return o = Da(), d = o.firstChild, t = d.firstChild, l = t.firstChild, m = t.nextSibling, h = m.firstChild, a(d, r(y, {
            get when() {
                return A.data.thumbnail
            },
            get children() {
                return r(Ie, {
                    width: 48,
                    class: "size-12 rounded mr-4",
                    alt: "game-logo",
                    get src() {
                        return A.data.thumbnail
                    }
                })
            }
        }), t), a(l, () => A.data.fullName), a(t, r(y, {
            get when() {
                return A.showIssus
            },
            get children() {
                var f = Ma(),
                    B = f.firstChild;
                return a(B, () => `${u("Game ID")}: ${A.gameId}`), a(f, r(TA, {
                    onClick: i,
                    name: "Copy",
                    class: "w-4 h-4 cursor-pointer"
                }), null), f
            }
        }), null), a(t, r(y, {
            get when() {
                return !A.showIssus
            },
            get children() {
                var f = Ia();
                return a(f, () => A.data.providerName || "Unknown"), f
            }
        }), null), m.$$click = s, a(h, () => u("Play Now")), a(m, r(TA, {
            name: "Arrow",
            class: "size-4 transform -scale-x-100"
        }), null), a(o, r(y, {
            get when() {
                return A.showIssus
            },
            get children() {
                var f = ka(),
                    B = f.firstChild;
                return a(B, () => u("Any issues, please contact the customer service for help and provide the game ID.")), a(f, r(Y, {
                    type: "second",
                    class: "flex items-center bg-layer3 whitespace-nowrap",
                    onClick: n,
                    get children() {
                        var b = ke();
                        return a(b, () => u("Live Support")), b
                    }
                }), null), f
            }
        }), null), o;
        var o, d, t, l, m, h
    },
    De = A => r(We, {
        client: Ke,
        get children() {
            return r(Va, A)
        }
    });
eA(["click"]);
const Pa = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: De
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    De as G, Ie as I, Kt as N, Gr as S, jt as a, ye as b, vt as c, Rt as d, er as e, jA as f, Pa as i, Gt as t, tr as u
};