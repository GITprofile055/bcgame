import {
    b as n,
    d as c,
    i as l,
    e as m,
    s as i,
    t as o
} from "./web-c89f4fb8.js";
import {
    c as f,
    s as d,
    r
} from "./manifest-f1f40164.js";
var p = o('<div><img class=w-1/2><span class="text-center text-sm font-semibold text-secondary">');
const u = e => (() => {
    var t = p(),
        s = t.firstChild,
        a = s.nextSibling;
    return n(t, c(e, {
        get class() {
            return f("flex flex-col items-center justify-center", e.class)
        }
    }), !1, !0), l(a, () => e.children), m(() => i(s, "src", d.darken ? r.assets("common/empty.png") : r.assets("common/empty_w.png"))), t
})();
export {
    u as E
};