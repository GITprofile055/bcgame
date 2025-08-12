import {
    v as f,
    G as m,
    y as o,
    k as e,
    E as x,
    Q as S,
    b as h,
    O as $,
    d as k,
    Y as T,
    a3 as I,
    J as _,
    o as P
} from "./vendor-DYV1gSPf.js";
import {
    k as v,
    b as z,
    u as R,
    e as d,
    h as A,
    a as B,
    a9 as E,
    F as C,
    aa as Q,
    Q as V,
    U as M,
    B as b
} from "./common-Byjxyxqw.js";
import {
    t as g,
    T as O,
    M as D
} from "./index-BSHcnsSF.js";
const H = "/assets/open-guide-CmBQEUSQ.png",
    U = "/assets/shield-CBfdtNAP.png",
    Y = "/assets/shield_w-C25Od6mI.png";
var G = f('<div class="left-0 top-0 overflow-hidden fixed z-1000 h-screen w-screen bg-alw_dark/90"><div class="relative mt-10 pl-4 mx-auto w-11/12"><img alt="open guide"><div class="absolute bottom-0 mt-4 flex h-24 w-full items-center p-4 pr-12"><div class=text-center>Click the top-right corner, select “<span class=text-brand>open in browser</span>”,and claim your free spin bonus!</div></div></div><div class="flex justify-center pt-6">'),
    L = f('<img class="h-auto w-4.5 pr-1.5"alt>'),
    j = f('<div class="left-0 flex w-full gap-x-4 border-b border-solid p-4 fixed bottom-18 z-100 mb-sb min-h-18 max-w-[640px] items-start border-third bg-layer1 sm:bottom-8 sm:left-8 sm:rounded-lg sm:border-none lg:w-fit"><div class="flex items-center gap-x-2"><div class="flex shrink-0"><img alt class="h-auto w-7"></div><div class="leading-tight flex-grow"><p class="text-sm leading-5 text-wrap lg:w-96"></p><div class="flex gap-2 pt-2"></div></div></div><div class="flex items-start">'),
    F = f('<div><div class=w-full><img class="mx-auto w-56"alt><div class="text-center text-secondary -mt-10 px-5 pb-5"></div><div class="flex flex-col gap-2"><div class="flex w-full cursor-pointer items-center gap-2 rounded-lg border p-3 border-white_alpha5 bg-third hover:bg-layer4"><div class=w-6><img class=w-full alt></div><div></div></div><div class=h-2>');

function J() {
    const [r, i] = h(!0);
    return _(() => _(() => !!r())() ? (() => {
        var t = G(),
            s = t.firstChild,
            l = s.firstChild,
            a = s.nextSibling;
        return m(l, "src", H), o(a, e(b, {
            onClick: () => {
                i(!1)
            },
            class: "px-6",
            size: "s",
            type: "brand",
            children: "Close"
        })), t
    })() : null)
}
const K = r => {
    const i = () => {
        window.open(`https://bcgame.com?verify_link=${window.location.hostname}`)
    };
    let t;
    return $(() => {
        t = setTimeout(() => {
            r.onClose()
        }, 3e4)
    }), P(() => {
        t && clearTimeout(t)
    }), (() => {
        var s = j(),
            l = s.firstChild,
            a = l.firstChild,
            n = a.firstChild,
            c = a.nextSibling,
            p = c.firstChild,
            u = p.nextSibling,
            y = l.nextSibling;
        return m(n, "src", U), o(p, () => g("This site is an official BC Game mirror! You can verify with options below:")), o(u, e(b, {
            class: "text-xs px-6",
            size: "xs",
            type: "brand",
            onClick: i,
            get children() {
                return [(() => {
                    var w = L();
                    return x(() => m(w, "src", v.assets("/logo/logo_small_pure.png"))), w
                })(), _(() => g("Verify by __domain__", {
                    domain: "bcgame.com"
                }))]
            }
        })), o(y, e(b, {
            get onClick() {
                return r.onClose
            },
            class: "!p-0",
            size: "xs",
            get children() {
                return e(C, {
                    name: "Close",
                    class: "size-5 text-secondary"
                })
            }
        })), s
    })()
};

function N() {
    const r = i => {
        window.open(`https://bcgame.com?verify_link=${window.location.hostname}`)
    };
    return (() => {
        var i = F(),
            t = i.firstChild,
            s = t.firstChild,
            l = s.nextSibling,
            a = l.nextSibling,
            n = a.firstChild,
            c = n.firstChild,
            p = c.firstChild,
            u = c.nextSibling;
        return m(s, "src", Y), o(l, () => g("Verify if this site is our official site using the options below")), n.$$click = () => r(), o(u, () => g("Verify by __domain__", {
            domain: "bcgame.com"
        })), o(n, e(C, {
            name: "Arrow",
            class: "ml-auto size-5 rotate-180 text-secondary"
        }), null), x(() => m(p, "src", z.darken ? v.assets("/logo/logo_small.png") : v.assets("/logo/logo_small_w.png"))), i
    })()
}

function Z() {
    const r = S(),
        {
            isSpHost: i
        } = R.getHostType(d.host),
        t = i || d.host === "bc.game" || d.isAPP || d.isDev,
        s = O(),
        [l, a] = h(!1),
        [n, c] = A(h(t), {
            name: "ignore_mirrors_check",
            storage: localStorage
        });
    return B.on("verify_site", () => {
        E.push(() => e(Q, {
            get title() {
                return g("Verify This Site")
            },
            get children() {
                return e(N, {})
            }
        }))
    }), $(() => {
        n() || setTimeout(() => {
            a(!0)
        }, 2e3)
    }), [s && e(J, {}), e(I, {
        get children() {
            return e(V, {
                get name() {
                    return d.mobile ? "slideUp" : "slideLeft"
                },
                get children() {
                    return e(M, {
                        priority: D,
                        get children() {
                            return e(T, {
                                get when() {
                                    return !n() && l() && r.pathname === "/"
                                },
                                get children() {
                                    return e(K, {
                                        onClose: () => {
                                            c(!0)
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })]
}
k(["click"]);
export {
    N as VerifyThisSite, Z as
    default
};