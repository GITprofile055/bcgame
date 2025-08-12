import {
    Q as S,
    b as p,
    j as G,
    m as c,
    h as U,
    v as u,
    y as g,
    k as n,
    E,
    F as h,
    Y as F,
    H as $
} from "./vendor-DYV1gSPf.js";
import {
    a as v,
    i as b,
    W as N,
    e as y
} from "./common-Byjxyxqw.js";
import {
    ad as L,
    p as P
} from "./index-BSHcnsSF.js";
import {
    G as C
} from "./index-CYuUsUXS.js";
import "./utils-YcNhbyA6.js";
var W = u("<div><div>"),
    q = u('<span class="ml-2 whitespace-nowrap font-semibold text-secondary">'),
    O = u('<div class="relative flex-none center size-10">');
const R = function() {
    const s = S(),
        [l, x] = p(!1),
        [w, I] = p(!1);
    v.on("open-sidebar-games", e => i(e));
    const i = e => {
            G(() => {
                I(e), x(e)
            })
        },
        _ = L(),
        m = c(() => _() ? .pageList.list),
        k = c(() => {
            const e = m();
            if (e && e.length > 0)
                if (s.pathname.startsWith("/game/")) {
                    const r = s.pathname.replace("/game/", "");
                    return e.findIndex(a => r.startsWith(a.gameIdentity.gameUrl)) >= 0
                } else return !1;
            return !1
        });
    U(() => {
        v.emit("auto-ingame-originals", k())
    });
    const d = c(() => {
        const e = m();
        return e && e.length > 0 ? w() : !1
    });
    return (() => {
        var e = W(),
            r = e.firstChild;
        return e.addEventListener("mouseleave", () => i(!1)), e.addEventListener("mouseenter", () => i(!0)), e.style.setProperty("transition", "all 0.2s"), r.style.setProperty("box-shadow", "4px 0px 8px 0px rgba(0, 0, 0, 0.05)"), r.style.setProperty("background", "var(--Sidebar-Unit_bg)"), g(r, n($, {
            get each() {
                return m()
            },
            children: t => n(F, {
                get when() {
                    return t.gameIdentity.gameUrl !== "crash-trenball"
                },
                get children() {
                    return n(N, {
                        get href() {
                            return `/game/${t.gameIdentity.gameUrl}`
                        },
                        class: "nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1",
                        onClick: () => {
                            P.trackEvent("sidebar_click", {
                                button_name: "sidebar_casino_game_" + t.gameIdentity.gameUrl
                            })
                        },
                        get children() {
                            return [n(z, {
                                get gameUnique() {
                                    return t.gameIdentity.gameName
                                }
                            }), (() => {
                                var a = q();
                                return g(a, () => j(t.fullName)), a
                            })()]
                        }
                    })
                }
            })
        })), E(t => {
            var a = b("absolute top-0 h-full cursor-pointer left-full -ml-4 pl-4", d() ? l() ? "bg-layer3 w-[256px]" : "bg-layer3 w-[72px]" : "select-none pointer-events-none w-[0px] bg-transparent"),
                f = b("hidden-scroll-bar h-full w-full px-2 py-3 overflow-y-auto", !d() && "select-none opacity-0");
            return a !== t.e && h(e, t.e = a), f !== t.t && h(r, t.t = f), t
        }, {
            e: void 0,
            t: void 0
        }), e
    })()
};

function j(o) {
    return o.replace(/bcgame/gi, y.siteName).replace(/bc.game/gi, y.siteName)
}
const z = function(s) {
    return (() => {
        var l = O();
        return g(l, n(C, {
            get name() {
                return s.gameUnique
            }
        })), l
    })()
};
export {
    R as
    default
};