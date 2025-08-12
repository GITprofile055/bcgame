import {
    E as c,
    v as i,
    H as u
} from "./index-BSHcnsSF.js";
import {
    ai as g,
    a9 as l,
    m as s,
    k as t
} from "./vendor-DYV1gSPf.js";
import {
    J as m
} from "./common-Byjxyxqw.js";

function f(e) {
    return e === "Bingo New Release" || e === "New Releases" ? "casino_new" : e === "Hot Games" ? "casino_hot" : "casino_tag"
}

function p(e) {
    return t(i, {
        get source() {
            return {
                sectionId: f(e.tag),
                tag: e.tag
            }
        }
    })
}

function w() {
    const e = g(),
        [o] = l(),
        a = s(() => e.tag || ""),
        r = () => decodeURIComponent(u[a()] || a()),
        n = s(() => o.label || r());
    return t(m, {
        get title() {
            return n()
        },
        get children() {
            return [t(c, {
                get title() {
                    return n()
                }
            }), t(p, {
                get tag() {
                    return r()
                },
                class: "py-4"
            })]
        }
    })
}
export {
    p as TagSimple, w as
    default
};