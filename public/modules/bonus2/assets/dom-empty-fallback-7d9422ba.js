import {
    c as e
} from "./web-c89f4fb8.js";
import {
    R as c,
    U as l
} from "./manifest-f1f40164.js";
import {
    b as m,
    i as s,
    S as h
} from "./solid-js-871c99e1.js";
const u = t => {
    const [r, n] = m(!0), a = s(() => e(c, {
        ref: o => {
            n(o.length === 0)
        },
        get children() {
            return t.children
        }
    }));
    return e(h, {
        get when() {
            return r()
        },
        get fallback() {
            return a()
        },
        get children() {
            return t.fallback || e(l, {
                type: "empty"
            })
        }
    })
};
export {
    u as D
};