import {
    c as t,
    i,
    e as x,
    a as b,
    t as n,
    h as _,
    s as $,
    m as B
} from "./web-c89f4fb8.js";
import {
    c as l,
    T as k,
    j as z,
    A as c,
    B as u,
    e as o,
    f as S
} from "./manifest-f1f40164.js";
import {
    E as V,
    S as C
} from "./solid-js-871c99e1.js";
import {
    E
} from "./error-fallback-1bb54a0c.js";
import {
    t as a
} from "./i18n-827ab26d.js";
import {
    e as f
} from "./index-4447d8bd.js";
import {
    V as j,
    a as A
} from "./index-d024f97a.js";
import "./baseService-2efdc30b.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./_MapCache-91cc8331.js";
import "./feature-gating-c05395d6.js";
import "./tools-47f326df.js";
import "./index-8a7d18d7.js";
import "./http-4df94233.js";
import "./index-c5ebc757.js";
import "./api-utils-b2769cf2.js";
import "./const-3e281bed.js";
import "./sounds-a881e21e.js";
import "./_commonjsHelpers-08c562be.js";
import "./toast-bonus-receive-1029f494.js";
import "./cancel-bonus-6aaccc88.js";
import "./noop-cb277961.js";
import "./index-85cb0a21.js";
import "./currency-format-5cd6ca42.js";
import "./animate-number-af733b14.js";
import "./last-862de5a8.js";
import "./countdown-9ad59544.js";
import "./helpers-44d70238.js";
import "./utils-38f210e8.js";
import "./vip-9182fb4b.js";
import "./enums-fd45c1cf.js";
import "./index-d5947389.js";
var P = n('<div class="mt-6 flex w-full items-center gap-x-2">'),
    F = n('<div><img class="absolute -bottom-8 -z-10 sm:-top-24 sm:right-0 sm:size-[33rem]"><div class="relative z-20 pt-4 sm:pt-0"><div class="text-4xl font-extrabold uppercase leading-tight text-primary sm:flex sm:gap-x-2"><div></div><div class=text-primary></div></div><div class="mt-3 max-w-100 text-sm font-semibold text-primary sm:w-[571px] sm:text-secondary">'),
    H = n("<div>");
const N = () => (() => {
        var e = F(),
            s = e.firstChild,
            v = s.nextSibling,
            m = v.firstChild,
            p = m.firstChild,
            h = p.nextSibling,
            y = m.nextSibling;
        return i(p, () => a("exclusive")), i(h, () => a("vip benefits")), i(y, () => a("Join our VIP Club now and get ready to be showered with gifts, giveaways, and amazing features. Experience the thrill of higher cash back and exclusive rewards that are sure to leave you amazed.")), i(e, t(k, {
            get when() {
                return !z.login
            },
            get fallback() {
                return t(c, {
                    href: "/",
                    get children() {
                        return t(u, {
                            get class() {
                                return l("vip-join-button mt-6 w-full text-base font-extrabold sm:max-w-64")
                            },
                            type: "brand",
                            get children() {
                                return a("Play Now")
                            }
                        })
                    }
                })
            },
            get children() {
                var r = P();
                return i(r, t(c, {
                    href: "/login/regist",
                    class: "flex-grow",
                    get children() {
                        return t(u, {
                            get class() {
                                return l("vip-join-button w-full text-base font-extrabold capitalize sm:max-w-64")
                            },
                            type: "brand",
                            get children() {
                                return a("Sign up")
                            }
                        })
                    }
                })), r
            }
        }), null), x(r => {
            var d = l("pt-sh relative z-0 -mx-4 overflow-hidden bg-layer2 px-4 sm:mx-0 sm:rounded-xl sm:bg-layer4 sm:px-12 sm:py-11"),
                w = o.mobile ? {
                    "background-image": "linear-gradient(12deg, transparent 17%, rgba(255, 130, 15, 0.4) 82%), linear-gradient(334deg, transparent 30%, rgba(255, 161, 20, 0.5) 67%)"
                } : {
                    "background-image": "linear-gradient(to bottom, rgba(255, 130, 15, 0.5) 30%,transparent 100%)"
                },
                g = o.mobile ? f.vipBenefitHero_mb : f.vipBenefitHero;
            return d !== r.e && b(e, r.e = d), r.t = _(e, w, r.t), g !== r.a && $(s, "src", r.a = g), r
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), e
    })(),
    T = e => t(C, {
        get when() {
            return o.mobile
        },
        get fallback() {
            return B(() => e.children)
        },
        get children() {
            return t(S, {
                class: "vip-dialog",
                get children() {
                    return e.children
                }
            })
        }
    }),
    be = () => t(T, {
        get children() {
            var e = H();
            return i(e, t(V, {
                fallback: E,
                get children() {
                    return t(N, {})
                }
            }), null), i(e, t(j, {}), null), i(e, t(A, {}), null), x(() => b(e, l("flex flex-col gap-y-4 bg-layer2 px-4 text-primary sm:gap-y-6 sm:px-0"))), e
        }
    });
export {
    be as
    default
};