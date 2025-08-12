import {
    v as p,
    y as r,
    k as s,
    E as $,
    G as g,
    m as C,
    H as y,
    Q as I,
    b as h,
    o as S,
    Y as P,
    J as k,
    a3 as A
} from "./vendor-DYV1gSPf.js";
import {
    F as z,
    B as _,
    e as m,
    k as v,
    b as T,
    u as b,
    aa as R,
    a9 as E,
    h as w,
    Q as D,
    U as L
} from "./common-Byjxyxqw.js";
import {
    t as f,
    P as O
} from "./index-BSHcnsSF.js";
import {
    c as j
} from "./createSteps-CDUGPR2P.js";
import {
    i as F
} from "./utils-BHthhcHa.js";
var G = p("<span class=ml-1>"),
    Q = p('<div class="left-0 w-full flex items-center border-b border-solid p-4 gap-x-4 fixed bottom-18 z-100 mb-sb border-second bg-layer1"><div class="flex items-center gap-x-2"><div class="flex items-center justify-center rounded-md p-1 size-10 shrink-0 bg-[#23EE881A]"><img alt class=size-7></div><div class="leading-tight flex-grow"><h4 class="text-sm font-extrabold text-primary break-words"><span class=uppercase></span> </h4><p class="text-secondary text-xs text-balance"></p></div></div><div class="flex flex-grow justify-end">');
const B = d => (() => {
        var a = Q(),
            t = a.firstChild,
            l = t.firstChild,
            n = l.firstChild,
            e = l.nextSibling,
            i = e.firstChild,
            o = i.firstChild;
        o.nextSibling;
        var c = i.nextSibling,
            u = t.nextSibling;
        return r(a, s(_, {
            get onClick() {
                return d.onClose
            },
            class: "!p-0",
            size: "xs",
            get children() {
                return s(z, {
                    name: "Close",
                    class: "text-secondary size-5"
                })
            }
        }), t), r(o, () => m.host), r(i, () => f("Application"), null), r(c, () => f("Unlock Fun with Exclusive Features")), r(u, s(_, {
            class: "w-24 border-solid font-extrabold border-2 border-third",
            size: "m",
            get onClick() {
                return d.onDownload
            },
            get children() {
                var x = G();
                return r(x, () => f("Download")), x
            }
        })), $(() => g(n, "src", T.darken ? v.assets(m.inActive ? "/logo/logo_small_festival.png" : "/logo/logo_small.png") : v.assets(m.inActive ? "/logo/logo_small_w_festival.png" : "/logo/logo_small_w.png"))), a
    })(),
    H = "/assets/guide-BWa8xjQ7.gif",
    U = "/assets/pwa-CuOdReJG.mp4";
var J = p('<ul class="flex flex-col gap-y-4">'),
    M = p('<div class="h-64 overflow-hidden mt-6"><video class="size-full rounded-3xl"playsinline autoplay controls muted loop><source type=video/mp4><img class="size-full rounded-3xl">'),
    N = p('<li class="flex gap-x-3 leading-tight"><div class="flex items-center justify-center rounded-full bg-brand size-5 flex-shrink-0"></div><div class="flex flex-col gap-y-2"><h4 class=text-sm></h4><p class="text-secondary text-xs">');
const W = () => {
        const d = C(() => b.isIos() ? "iOS" : "Android"),
            a = j(b.isIos() ? "iOS" : "android");
        return s(R, {
            get title() {
                return `${d()} ${f("Instructions")}`
            },
            get children() {
                return [(() => {
                    var t = J();
                    return r(t, s(y, {
                        get each() {
                            return a()
                        },
                        children: (l, n) => (() => {
                            var e = N(),
                                i = e.firstChild,
                                o = i.nextSibling,
                                c = o.firstChild,
                                u = c.nextSibling;
                            return r(i, () => n() + 1), r(c, () => l.guideTitle), r(u, () => l.guideDesc), e
                        })()
                    })), t
                })(), (() => {
                    var t = M(),
                        l = t.firstChild,
                        n = l.firstChild,
                        e = n.nextSibling;
                    return g(n, "src", U), g(e, "src", H), t
                })()]
            }
        })
    },
    [Y, V] = w(h(0), {
        name: "pwa-prompt-times"
    }),
    [q, K] = w(h(!1), {
        name: "accepted-install"
    }),
    le = () => {
        const d = I(),
            a = () => !window.is_webview && !F() && Y() < 3 && !q() && m.mobile && d.pathname === "/",
            t = async () => {
                E.push(() => s(W, {}))
            },
            [l, n] = h({
                handler: t
            });
        if ("onbeforeinstallprompt" in window) {
            const e = i => {
                i.preventDefault();
                const o = i;
                n({
                    handler: async () => {
                        await o.prompt(), (await o.userChoice).outcome === "accepted" && (K(!0), n(null))
                    }
                })
            };
            window.addEventListener("beforeinstallprompt", e), S(() => {
                window.removeEventListener("beforeinstallprompt", e)
            })
        }
        return s(A, {
            get children() {
                return s(D, {
                    name: "slideUp",
                    get children() {
                        return s(L, {
                            onRender: () => V(e => e + 1),
                            priority: O,
                            get children() {
                                return s(P, {
                                    get when() {
                                        return k(() => !!a())() && l()
                                    },
                                    children: e => s(B, {
                                        get onDownload() {
                                            return l().handler
                                        },
                                        onClose: () => n(null)
                                    })
                                })
                            }
                        })
                    }
                })
            }
        })
    };
export {
    le as
    default
};