import {
    W as T,
    t as d
} from "./index-BSHcnsSF.js";
import {
    b as g,
    ar as A,
    o as k,
    k as l,
    Y as U,
    v as L,
    G as R,
    y as m,
    E as C,
    a0 as q,
    F as H,
    c as W,
    aq as z,
    h as B
} from "./vendor-DYV1gSPf.js";
import {
    a as b,
    e as a,
    a4 as F,
    U as G,
    B as w,
    i as $,
    Q as j,
    u as S,
    h as O,
    n as P,
    d as h
} from "./common-Byjxyxqw.js";
import {
    i as K
} from "./utils-BHthhcHa.js";
const M = "/assets/web_push_ring-D9piBrDT.png";
var c = (e => (e.DEFAULT = "default", e.GRANTED = "granted", e.DENIED = "denied", e))(c || {}),
    Q = L('<div><img class="h-[7rem] sm:h-16"><h3 class="text-center text-base font-extrabold text-primary"></h3><p class="text-center font-semibold text-secondary"></p><div class="flex w-full text-lg gap-x-3 sm:text-sm">');
const D = "@@__internal__show_web_push_soft_prompt__@@",
    [x, E] = g(null);
b.on(D, e => {
    E(() => e)
});
const Y = () => {
    const e = t => () => {
            x() ? .(t), E(() => null)
        },
        [r, n] = g(!1);
    if (!a.mobile) {
        const t = new MutationObserver(([o]) => {
            if (o.type === "childList" && A(o.target)) {
                const p = Array.from(o.target.children);
                n(p.some(u => u.classList.contains("toast-layer")))
            }
        });
        t.observe(document.querySelector(".root-layer"), {
            childList: !0
        }), k(() => {
            t.disconnect()
        })
    }
    const s = F(() => r() ? document.querySelector(".toast-layer") : null);
    return l(j, {
        get name() {
            return a.mobile ? "slideUp" : "slideRight"
        },
        get children() {
            return l(G, {
                priority: T,
                get children() {
                    return l(U, {
                        get when() {
                            return x()
                        },
                        get children() {
                            var t = Q(),
                                o = t.firstChild,
                                p = o.nextSibling,
                                u = p.nextSibling,
                                v = u.nextSibling;
                            return R(o, "src", M), m(p, () => d("Enable Notifications and Never Miss a Bonus!")), m(u, () => d("Receive updates on exclusive promotions, bonus claims and more! ")), m(v, l(w, {
                                type: "brand",
                                class: "flex-grow",
                                get size() {
                                    return a.mobile ? "l" : "s"
                                },
                                onClick: () => {
                                    e(c.GRANTED)(), OneSignalDeferred.push(i => {
                                        i.Notifications.requestPermission()
                                    })
                                },
                                get children() {
                                    return d("Allow")
                                }
                            }), null), m(v, l(w, {
                                type: "second",
                                class: "flex-grow",
                                get size() {
                                    return a.mobile ? "l" : "s"
                                },
                                get onClick() {
                                    return e(c.DEFAULT)
                                },
                                get children() {
                                    return d("Later")
                                }
                            }), null), C(i => {
                                var N = {
                                        "background-image": "radial-gradient(73% 94% at 50% 30%, rgba(36, 238, 137, 0.20) 0%, transparent 100%)",
                                        "box-shadow": "0px 0px 12px 0px rgba(0, 0, 0, 0.40)",
                                        ...a.mobile ? {} : {
                                            top: 60 * a.remScale + (s.height ? ? 0) + "px"
                                        }
                                    },
                                    _ = $("fixed bottom-0 right-0 flex w-full flex-col items-center justify-center rounded-xl border border-solid bg-layer5 px-4 z-1000 gap-y-2 border-third pb-10 pt-3 sm:bottom-auto sm:right-4 sm:w-[17.5rem] sm:pb-3");
                                return i.e = q(t, N, i.e), _ !== i.t && H(t, i.t = _), i
                            }, {
                                e: void 0,
                                t: void 0
                            }), t
                        }
                    })
                }
            })
        }
    })
};
let f = null;
const J = () => (f = f || new Promise(e => {
        b.emit(D, r => {
            e(r), f = null
        })
    }), f),
    V = "web_push_prompt_push";
setTimeout(() => {
    S.loadScript("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js")
}, 10 * 1e3);
const [X, y] = O(g({
    value: c.DEFAULT,
    timestamp: 0
}), {
    name: "__internal__soft_prompt_history"
}), I = P().post("/user/push/get-push-app-id").then(e => {
    if (e.appId) return new Promise(r => {
        OneSignalDeferred.push(async n => {
            await n.init({
                appId: e.appId,
                serviceWorkerPath: "push/onesignal/OneSignalSDKWorker.js",
                serviceWorkerParam: {
                    scope: "/push/onesignal/"
                },
                promptOptions: {
                    autoPrompt: !1
                }
            }), r(e.appId)
        })
    })
}), Z = e => P().post("/user/push/sync-sub-status", e);
OneSignalDeferred.push(async function(e) {
    await I && W(() => {
        z(() => l(Y, {}), document.body);
        const n = () => {
            const s = e.User.PushSubscription.id ? ? void 0,
                t = !!e.User.PushSubscription.optedIn;
            s && Z({
                subscribe: t,
                subscriptionId: s
            }), s || e.User.PushSubscription.addEventListener("change", () => {
                n()
            })
        };
        B(s => (h.login ? e.login(String(h.userId)).then(() => {
            n()
        }) : s && e.logout(), h.login), h.login)
    })
});
b.on(V, async () => {
    OneSignalDeferred.push(async e => {
        await I;
        const r = () => {
                const s = Date.now(),
                    t = X().timestamp;
                return s - t > 1e3 * 60 * 60 * 24 * 7
            },
            n = () => e.Notifications.permissionNative === "default";
        if (console.log("Handle web_push_prompt_push", r(), n(), e.Notifications.permissionNative), e.Notifications.isPushSupported() && n() && r() && (!S.isIos() || K())) {
            const s = Date.now();
            y({
                timestamp: s,
                value: c.DEFAULT
            });
            const t = await J();
            y({
                timestamp: s,
                value: t
            })
        }
    })
});