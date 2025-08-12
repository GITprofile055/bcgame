var V = Object.defineProperty,
    D = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty,
    P = Object.prototype.propertyIsEnumerable;
var $ = (r, e, t) => e in r ? V(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t,
    m = (r, e) => {
        for (var t in e || (e = {})) N.call(e, t) && $(r, t, e[t]);
        if (y)
            for (var t of y(e)) P.call(e, t) && $(r, t, e[t]);
        return r
    },
    p = (r, e) => D(r, I(e));
import {
    c as l,
    i as a,
    s as g,
    e as H,
    a as R,
    t as o
} from "./web-03ca4527.js";
import {
    a as h,
    e as B
} from "./solid-js-a6a72539.js";
import {
    t as i
} from "./i18n-75922727.js";
import {
    v as E,
    a as A
} from "./verify_result-adff92bd.js";
import "./manifest-346499c0.js";
const M = "/modules/static2/assets/verify-41354dd7.png";
var w = o("<img alt=success class=w-15>"),
    j = o("<span class=text-brand>"),
    q = o("<span class=text-error>"),
    F = o('<div class="official-wrap flex flex-col items-center"><p class="mt-4 text-center text-base font-semibold"><span>');
const {
    Button: G,
    cx: K,
    pop: U,
    Pop: z
} = globalThis._bc.fcsy, O = r => l(z, {
    get children() {
        var e = F(),
            t = e.firstChild,
            n = t.firstChild;
        return a(e, l(h, {
            get when() {
                return r.isOfficial
            },
            get children() {
                var s = w();
                return g(s, "src", E), s
            }
        }), t), a(e, l(h, {
            get when() {
                return !r.isOfficial
            },
            get children() {
                var s = w();
                return g(s, "src", A), s
            }
        }), t), a(n, () => r.name), a(t, l(h, {
            get when() {
                return r.isOfficial
            },
            get children() {
                var s = j();
                return a(s, () => i("is the official representative of __ENV_HOST__, you can trust this account. Thank you for verification.")), s
            }
        }), null), a(t, l(h, {
            get when() {
                return !r.isOfficial
            },
            get children() {
                var s = q();
                return a(s, () => i("is NOT the official representative of __ENV_HOST__. Do not trust this account.")), s
            }
        }), null), a(e, l(G, {
            type: "brand",
            class: "mt-4 w-full",
            onClick: () => U.pop(),
            get children() {
                return i("OK")
            }
        }), null), H(() => R(n, K("mr-1", r.isOfficial ? "text-brand" : "text-error"))), e
    }
}), J = "/modules/static2/assets/verify_bio-8d7e51ac.png";
var L = o('<div class="flex flex-col items-center py-4"><img alt=verify class=w-36><p class="flex flex-col items-center text-2xl font-extrabold text-primary text-center"><span class="mr-1 text-brand hidden"></span><label></label></p><p class="mt-4 text-center text-sm font-semibold text-secondary"></p><div class="felx relative w-full"></div><p class="my-4 text-center text-sm font-semibold text-quarterary"></p><img class="w-full block"alt="">');
const {
    Button: S,
    Dialog: Q,
    Icon: W,
    Input: X,
    env: Y,
    getHttp: Z,
    pop: C,
    toast: ee
} = globalThis._bc.fcsy, ne = function() {
    const [e, t] = B({
        name: "",
        show: !1,
        isOfficial: !1
    });
    let n;
    const s = f => {
        if (f.stopPropagation(), n.blur(), !(!e().name || e().name === "")) return Z().get(`/user/representative/verify/?account=${e().name.replace(/%/g,"")}`).then(u => {
            String(u) == "true" ? (t(p(m({}, e()), {
                show: !0,
                isOfficial: !0
            })), C.push(() => l(O, {
                isOfficial: !0,
                get name() {
                    return e().name
                }
            }))) : (t(p(m({}, e()), {
                show: !0,
                isOfficial: !1
            })), C.push(() => l(O, {
                isOfficial: !1,
                get name() {
                    return e().name
                }
            })))
        }).catch(ee)
    };
    return l(Q, {
        get title() {
            return i("Official Media Authenticator")
        },
        get children() {
            var f = L(),
                u = f.firstChild,
                _ = u.nextSibling,
                x = _.firstChild,
                T = x.nextSibling,
                b = _.nextSibling,
                d = b.nextSibling,
                v = d.nextSibling,
                k = v.nextSibling;
            return g(u, "src", M), a(x, () => Y.host.toUpperCase()), a(T, () => i("Make sure you’re entering the right username")), a(b, () => i("Scammers often remove their “username” field and have a bio that imitates official __ENV_HOST__ user names. Go to the user’s profile page and be sure to verify the channel details under “username”, not “bio”.")), a(d, l(X, {
                ref: c => n = c,
                class: "mt-4 h-12 w-full bg-layer3 p-2",
                get placeholder() {
                    return i("Please enter Telegram/Discord ID")
                },
                get value() {
                    return e().name
                },
                onChange: c => {
                    t(p(m({}, e()), {
                        name: c
                    }))
                }
            }), null), a(d, l(S, {
                class: "absolute right-0 top-4 flex h-12 items-center justify-start sm:h-10",
                onClick: c => s(c),
                get children() {
                    return l(S, {
                        type: "brand",
                        class: "h-8 w-8",
                        get children() {
                            return l(W, {
                                name: "Search"
                            })
                        }
                    })
                }
            }), null), a(v, () => i("Please type in the agents account ID, and click on check button.")), g(k, "src", J), f
        }
    })
};
export {
    ne as
    default
};