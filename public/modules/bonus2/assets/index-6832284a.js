import {
    i as t,
    c as g,
    e as $,
    s as a,
    t as b
} from "./web-c89f4fb8.js";
import {
    d as C
} from "./solid-js-871c99e1.js";
import {
    t as r
} from "./i18n-827ab26d.js";
import {
    h as B,
    v as S,
    B as y
} from "./manifest-f1f40164.js";
import {
    I as A
} from "./index-d27f3208.js";
import {
    a as s
} from "./index-823e0b11.js";
import "./level3-2267c79e.js";
import "./withdraw-363bec6b.js";
var E = b("<span> (200MB)"),
    k = b('<div class="gap-4 bg-layer2 md:flex"><div class="mb-4 flex-1 overflow-hidden rounded-lg bg-layer4"><div class="flex flex-wrap"><img alt=banner_01 class=w-3/5><img alt=banner_02 class=w-2/5><img alt=banner_03 class=w-full></div><div class=p-4><div class="text-base font-extrabold"></div><div class=text-secondary></div><a class="center mt-4 w-full"rel=noopener target=_blank href="https://drive.google.com/drive/folders/1Q48CUgrJOAeDGpBqmdHGNwWGxNEdTZzQ?usp=sharing"></a></div></div><div class="mb-4 flex-1 overflow-hidden rounded-lg">');

function T() {
    const u = B(),
        _ = S();
    return C(() => {
        u() && _().scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }), (() => {
        var n = k(),
            p = n.firstChild,
            i = p.firstChild,
            o = i.firstChild,
            d = o.nextSibling,
            x = d.nextSibling,
            h = i.nextSibling,
            c = h.firstChild,
            m = c.nextSibling,
            w = m.nextSibling;
        return t(c, () => r("Banner Pack")), t(m, () => r("Multilingual Package including events, animated banners, and more...")), t(w, g(y, {
            type: "brand",
            class: "w-full",
            get children() {
                return [(() => {
                    var e = E(),
                        l = e.firstChild;
                    return t(e, () => r("Download"), l), e
                })(), g(A, {
                    name: "download",
                    size: 20
                })]
            }
        })), $(e => {
            var l = s.banner_d1,
                f = s.banner_d2,
                v = s.banner_d3;
            return l !== e.e && a(o, "src", e.e = l), f !== e.t && a(d, "src", e.t = f), v !== e.a && a(x, "src", e.a = v), e
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), n
    })()
}
export {
    T as
    default
};