var i = Object.defineProperty;
var e = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty,
    g = Object.prototype.propertyIsEnumerable;
var c = (a, s, o) => s in a ? i(a, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : a[s] = o,
    f = (a, s) => {
        for (var o in s || (s = {})) m.call(s, o) && c(a, o, s[o]);
        if (e)
            for (var o of e(s)) g.call(s, o) && c(a, o, s[o]);
        return a
    };
import {
    c as r,
    f as y
} from "./manifest-47857305.js";
import {
    S as L,
    c as l,
    M as p,
    d as u,
    g as h,
    h as d,
    i as j,
    j as x
} from "./game-434e4797.js";
const [b, I] = r();

function k(a) {
    const s = a == null ? void 0 : a.game;
    let o;
    try {
        if (s instanceof L) {
            const {
                myLogs: n = []
            } = l();
            o = n
        } else if (s instanceof p) {
            const {
                myLogs: n = []
            } = u();
            o = n
        } else if (s instanceof h) {
            const {
                myLogs: n = []
            } = d();
            o = n
        } else if (s instanceof j) {
            const {
                myLogs: n = []
            } = x();
            o = n
        }
    } catch (n) {}
    return y(() => {
        var n, t;
        I({
            myLog: f({}, (n = o()) == null ? void 0 : n[0]),
            gameName: ((t = s == null ? void 0 : s.config) == null ? void 0 : t.name) || ""
        })
    }), []
}
export {
    k as I, b as u
};