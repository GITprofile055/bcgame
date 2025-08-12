import {
    i as e,
    c as n,
    t as s
} from "./web-c89f4fb8.js";
import {
    B as c
} from "./manifest-f1f40164.js";
import "./solid-js-871c99e1.js";
import {
    t as l
} from "./i18n-827ab26d.js";
import {
    p as i
} from "./baseService-2efdc30b.js";
var m = s('<div class="flex h-full w-full flex-col items-center justify-center gap-y-1 text-secondary"><p>');
const y = (t, a) => (console.error(t), (() => {
    var r = m(),
        o = r.firstChild;
    return e(r, () => l("Sorry, an error occurred"), o), e(o, () => t.toString()), e(r, n(c, {
        type: "second",
        size: "xs",
        onClick: () => {
            i(), a()
        },
        get children() {
            return l("Reload")
        }
    }), null), r
})());
export {
    y as E
};