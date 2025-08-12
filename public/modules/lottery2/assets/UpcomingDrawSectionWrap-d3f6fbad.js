import {
    b as a,
    c as t,
    S as l,
    i as r,
    a as p,
    t as c
} from "./solid-js-2e2908f8.js";
import {
    t as f
} from "./i18n-d0803583.js";
import h from "./UpcomingDrawSection-e293a0ac.js";
import {
    e as u,
    K as S
} from "./manifest-5fcb2c8d.js";
import "./currency-fd1e1eb4.js";
import "./index-0f5bf80c.js";
import "./CountryAvatar-6f446c9d.js";
import "./countries-a369bbd3.js";
import "./lottery-af48bec0.js";
import "./throttle-e4f3954e.js";
import "./debounce-f7740f4e.js";
import "./isObject-909534d5.js";
import "./toNumber-e58af95e.js";
var b = c('<div class=min-h-60><section class="flex justify-between mb-3"><h2 class="text-primary text-base font-extrabold flex items-center">');
const j = function() {
    const [i, m] = a();
    return t(l, {
        get children() {
            var e = b(),
                o = e.firstChild,
                s = o.firstChild;
            return r(s, () => f("Upcoming Draw")), r(o, t(p, {
                get when() {
                    return !u.mobile
                },
                get children() {
                    return t(S, {
                        smoothListSelector: i
                    })
                }
            }), null), r(e, t(h, {
                callback: n => m(n)
            }), null), e
        }
    })
};
export {
    j as
    default
};