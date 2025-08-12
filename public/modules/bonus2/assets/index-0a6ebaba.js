import {
    i as t,
    c as b,
    e as U,
    a as h,
    h as W,
    s as q,
    m as H,
    t as T
} from "./web-c89f4fb8.js";
import {
    j as r,
    e as f,
    c as y,
    s as S,
    V as s,
    D as c
} from "./manifest-f1f40164.js";
import {
    c as J,
    i as K,
    S as X
} from "./solid-js-871c99e1.js";
import {
    t as _
} from "./i18n-827ab26d.js";
import {
    v as k,
    b as O,
    c as Q
} from "./vip-9182fb4b.js";
var Y = T('<div><p class="flex items-center text-xs font-semibold text-primary sm:justify-between"><span> </span><span class=px-1></span><span class=text-secondary> </span></p><div><div><div class="absolute right-0 top-1/2 w-6 -translate-y-1/2 translate-x-2"><svg xmlns=http://www.w3.org/2000/svg class=size-6 viewBox="0 0 24 24"><circle opacity=0.1 cx=12 cy=12 r=12></circle><circle opacity=0.25 cx=12 cy=12 r=7></circle><circle cx=12 cy=12 r=4></circle></svg></div></div></div><div class="hidden text-xs font-semibold text-secondary sm:block">XP <!> <span class=uppercase> '),
    Z = T('<h2 class="flex items-center gap-x-2"><span class="text-2xl font-extrabold uppercase text-primary sm:text-3xl"> ');
const ae = D => {
    const a = J(() => k.level(D.vipLevel)),
        R = () => {
            const l = new c(Math.max(new c(r.currXP).sub(r.levelStartXP).toNumber(), 0) / Math.max(1, new c(r.levelEndXP).sub(r.levelStartXP).toNumber())).mul(100);
            return (l.greaterThan(100) ? new c("100") : l).toFixed(1, c.ROUND_DOWN)
        },
        L = () => k.level(r.vipLevel + 1),
        E = () => {
            switch (a().vipTypeNum) {
                case s.VipLevelStatus.None:
                    return "rgba(110, 110, 110, 0.50)";
                case s.VipLevelStatus.Bronze:
                    return "rgba(103, 88, 82, 0.50)";
                case s.VipLevelStatus.Silver:
                    return "rgba(52, 66, 104, 0.50)";
                case s.VipLevelStatus.Gold:
                    return "rgba(90, 90, 71, 0.50)";
                case s.VipLevelStatus.Platinum_I:
                case s.VipLevelStatus.Platinum_II:
                    return "rgba(70, 59, 97, 0.50)";
                case s.VipLevelStatus.Diamond_I:
                case s.VipLevelStatus.Diamond_II:
                case s.VipLevelStatus.Diamond_III:
                    return "rgba(75, 64, 104, 0.50)";
                default:
                    return ""
            }
        },
        B = K(() => (() => {
            var l = Y(),
                i = l.firstChild,
                n = i.firstChild,
                v = n.firstChild,
                P = n.nextSibling,
                u = P.nextSibling,
                M = u.firstChild,
                d = i.nextSibling,
                o = d.firstChild,
                G = o.firstChild,
                j = G.firstChild,
                m = d.nextSibling,
                w = m.firstChild,
                $ = w.nextSibling,
                z = $.nextSibling,
                p = z.nextSibling,
                A = p.firstChild;
            return t(n, () => r.currXP, v), t(n, () => _("XP"), null), t(P, b(X, {
                get when() {
                    return f.mobile
                },
                children: "/ "
            })), t(u, () => r.levelEndXP, M), t(u, () => _("XP"), null), t(m, () => Math.max(r.levelEndXP - r.currXP, 0), w), t(m, () => _("until"), $), t(p, () => L().vipType, A), t(p, () => L().vipLevel, null), U(e => {
                var C = y("flex flex-col gap-y-3 rounded-lg sm:p-4", f.mobile || S.darken ? "" : "bg-layer5"),
                    F = f.mobile ? {} : {
                        "background-image": S.darken ? `linear-gradient(0deg, rgba(58, 65, 66, 0.50) 5%, ${E()} 117.33%)` : ""
                    },
                    V = y("w-full rounded-full", S.darken ? "bg-black_alpha20" : "bg-layer6"),
                    N = y("relative h-2 rounded-xl sm:h-3"),
                    x = `${R()}%`,
                    g = `linear-gradient(to right, ${O[a().vipTypeNum][0]},${O[a().vipTypeNum][1]})`,
                    I = Q[a().vipTypeNum];
                return C !== e.e && h(l, e.e = C), e.t = W(l, F, e.t), V !== e.a && h(d, e.a = V), N !== e.o && h(o, e.o = N), x !== e.i && ((e.i = x) != null ? o.style.setProperty("width", x) : o.style.removeProperty("width")), g !== e.n && ((e.n = g) != null ? o.style.setProperty("background-image", g) : o.style.removeProperty("background-image")), I !== e.s && q(j, "fill", e.s = I), e
            }, {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0,
                i: void 0,
                n: void 0,
                s: void 0
            }), l
        })());
    return [(() => {
        var l = Z(),
            i = l.firstChild,
            n = i.firstChild;
        return t(i, () => a().vipType, n), t(i, () => a().vipLevel, null), t(l, b(X, {
            get when() {
                return r.vipLevel >= 2
            },
            get children() {
                return b(s.LevelName, {
                    class: "flex items-center rounded-md px-2 text-xs font-extrabold uppercase text-alw_white",
                    get level() {
                        return r.vipLevel
                    },
                    get children() {
                        var v;
                        return (v = a()) == null ? void 0 : v.vipTypeNumName.base
                    }
                })
            }
        }), null), l
    })(), H(B)]
};
export {
    ae as V
};