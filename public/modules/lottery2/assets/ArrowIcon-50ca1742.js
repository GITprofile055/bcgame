import {
    i as t,
    c as a,
    g as s,
    h as o,
    t as n
} from "./solid-js-2e2908f8.js";
import {
    I as c,
    f as m
} from "./manifest-5fcb2c8d.js";
var l = n("<div>");

function g(r) {
    return (() => {
        var e = l();
        return t(e, a(c, {
            get style() {
                return {
                    transform: r.isRotate ? "rotate(90deg)" : "rotate(270deg)"
                }
            },
            name: "Arrow",
            class: "w-4 h-4"
        })), s(() => o(e, m("rounded-lg w-6 h-6 center bg-layer5", r.class))), e
    })()
}
export {
    g as A
};