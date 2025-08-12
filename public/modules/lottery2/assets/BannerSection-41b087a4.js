import {
    c,
    S as h,
    i as n,
    a as x,
    g as m,
    s as d,
    k as y,
    t as r
} from "./solid-js-2e2908f8.js";
import {
    e as $,
    s as f
} from "./manifest-5fcb2c8d.js";
import {
    t as a
} from "./i18n-d0803583.js";
const _ = "/modules/lottery2/assets/banner-m-cfa9b4a3.png",
    w = "/modules/lottery2/assets/banner-m-white-3bcc29d9.png",
    v = "/modules/lottery2/assets/banner-pc-244408e8.png",
    k = "/modules/lottery2/assets/banner-pc-white-3ff709e5.png";
var P = r("<img class=w-full alt=banner loading=lazy>"),
    C = r('<section class="relative min-h-32"><section class="absolute-center pl-6 sm:pl-12 w-full text-left"><div class="flex w-full"><h1 class="text-[1.75rem] sm:text-4xl font-extrabold text-primary"></h1></div><p class="my-1.5 sm:my-4 text-left font-semibold text-sm sm:text-lg w-[calc(100%-180px)] text-secondary"></p><p class=mt-0><a class="inline-flex cursor-pointer py-1 underline text-xs sm:text-base font-extrabold text-brand">?'),
    S = r('<img class="w-full min-h-32"alt=banner loading=lazy>');
const A = function() {
    const p = e => {
        if (e) {
            let t = document.getElementById(e);
            t && t.scrollIntoView()
        }
    };
    return c(h, {
        get children() {
            var e = C(),
                t = e.firstChild,
                i = t.firstChild,
                b = i.firstChild,
                o = i.nextSibling,
                g = o.nextSibling,
                s = g.firstChild,
                u = s.firstChild;
            return n(e, c(x, {
                get when() {
                    return $.mobile
                },
                get fallback() {
                    return (() => {
                        var l = S();
                        return m(() => d(l, "src", f.darken ? v : k)), l
                    })()
                },
                get children() {
                    var l = P();
                    return m(() => d(l, "src", f.darken ? _ : w)), l
                }
            }), t), n(b, () => a("LOTTERY")), n(o, () => a("Play lotteries online and hit the jackpot!")), s.$$click = () => p("how-to-play"), n(s, () => a("How to play"), u), e
        }
    })
};
y(["click"]);
export {
    A as BannerSection, A as
    default
};