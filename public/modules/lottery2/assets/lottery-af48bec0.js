var d = Object.defineProperty,
    m = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty,
    S = Object.prototype.propertyIsEnumerable;
var n = (a, r, e) => r in a ? d(a, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : a[r] = e,
    s = (a, r) => {
        for (var e in r || (r = {})) g.call(r, e) && n(a, e, r[e]);
        if (i)
            for (var e of i(r)) S.call(r, e) && n(a, e, r[e]);
        return a
    },
    o = (a, r) => m(a, f(r));
import {
    i as b,
    l as p
} from "./manifest-5fcb2c8d.js";
var u = (a => (a[a.Standard = 832] = "Standard", a[a.SameDrum = 833] = "SameDrum", a[a.AdditionalDrum = 834] = "AdditionalDrum", a))(u || {});

function D(a) {
    return Object.values(u).includes(a)
}

function L(a, r) {
    if (r <= 0 || a <= 0 || r > a) return 1; {
        let e = 1;
        for (let t = a; t > a - r; t--) e *= t;
        for (let t = r; t > 1; t--) e /= t;
        return e
    }
}

function A(a) {
    const r = a.match(/\d+/);
    if (r) {
        const e = r[0];
        return Number(e)
    } else return 0
}

function N(a, r) {
    return a.slice(0, r).map((t, c) => o(s({}, t), {
        label: t.draws === 1 ? "1Draw" : `${t.draws}Draws`,
        value: t.draws
    }))
}
const y = {
    Australia: 0,
    Austria: 24,
    Barbados: 48,
    Belgium: 72,
    Brazil: 96,
    Canada: 120,
    Chile: 144,
    Colombia: 168,
    Denmark: 192,
    Finland: 216,
    France: 240,
    Germany: 264,
    Ghana: 288,
    Greece: 312,
    India: 336,
    Ireland: 360,
    Italy: 384,
    Japan: 408,
    Latvia: 432,
    Lithuania: 456,
    Malta: 480,
    Mauritius: 504,
    Morocco: 528,
    "New Zealand": 552,
    Norway: 576,
    Peru: 600,
    Poland: 624,
    Romania: 648,
    Russia: 672,
    Singapore: 696,
    Slovakia: 720,
    "South Africa": 744,
    Spain: 768,
    "Sri Lanka": 792,
    Sweden: 816,
    Switzerland: 840,
    Turkiye: 864,
    UK: 888,
    Ukraine: 912,
    Uruguay: 936,
    USA: 960,
    "Korea Republic": 1032,
    Bc: 984,
    "Hong Kong": 1008
};

function C(a, r = 1) {
    return `-${y[a]*r}px`
}

function R(a) {
    return a && a.days <= 0 && a.hours <= 0 && a.minutes <= 0 && a.seconds <= 0
}

function U() {
    document.body.classList.toggle("lottery-fold", !1), b.emit("lottery-toggle", !1)
}

function x(a, r) {
    const e = Math.abs(r - a) + 1;
    return ["-", ...Array.from({
        length: e
    }, (c, l) => "" + (a + l))]
}

function F(a, r) {
    return new p(a).mul(r).toNumber()
}
export {
    u as B, L as a, C as b, U as c, x as d, A as e, R as f, N as g, D as i, F as m
};