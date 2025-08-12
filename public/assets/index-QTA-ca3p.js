import {
    t as p,
    f as C
} from "./index-BSHcnsSF.js";
import {
    d as H,
    b as k,
    m as _,
    v as u,
    y as t,
    k as o,
    H as b,
    Y as $,
    a2 as I
} from "./vendor-DYV1gSPf.js";
import {
    u as L,
    e as f,
    a as F,
    F as R
} from "./common-Byjxyxqw.js";
var z = u('<div class="mt-4 flex items-center"><p class=font-extrabold></p><div class="ml-auto text-secondary sm:cursor-pointer"> (<!>)'),
    S = u('<div class="flex flex-wrap items-center gap-2 mt-3">'),
    B = u('<p class="mt-4 font-extrabold">'),
    N = u('<div class="absolute left-0 right-0 z-10 w-full rounded-lg border border-input bg-layer3 p-4 top-full"><p class="text-center text-secondary">'),
    v = u('<div class="flex h-5 items-center rounded-md bg-layer5 px-2 sm:cursor-pointer"><span class="text-xs text-secondary">');
const A = function(m) {
    const {
        isBrAuditHost: h
    } = L.getHostType(f.host), d = localStorage.getItem("bc_search_history"), [s, a] = k(d ? d.split(",") : []);
    F.on("bc-search-result", () => {
        const r = localStorage.getItem("bc_search_history");
        a(r ? r.split(",") : [])
    });
    const g = _(() => f.mobile ? s().slice(0, 5) : s()),
        w = r => {
            const c = [...s()],
                e = c.findIndex(l => l === r);
            e >= 0 && (c.splice(e, 1), a(c), localStorage.setItem("bc_search_history", c.join(",")))
        };
    return (() => {
        var r = N(),
            c = r.firstChild;
        return r.style.setProperty("box-shadow", "0px 4px 8px 0px rgba(0, 0, 0, 0.10)"), r.style.setProperty("transform", "translateY(0.5rem)"), t(c, () => p("Search requires at least 3 characters.")), t(r, o($, {
            get when() {
                return s().length > 0
            },
            get children() {
                return [(() => {
                    var e = z(),
                        l = e.firstChild,
                        n = l.nextSibling,
                        i = n.firstChild,
                        x = i.nextSibling;
                    return x.nextSibling, t(l, () => p("History")), n.$$click = () => {
                        a([]), localStorage.setItem("bc_search_history", "")
                    }, t(n, () => p("Clear search"), i), t(n, () => s().length, x), e
                })(), (() => {
                    var e = S();
                    return t(e, o(b, {
                        get each() {
                            return g()
                        },
                        children: l => (() => {
                            var n = v(),
                                i = n.firstChild;
                            return i.$$click = () => m.setSearch(l), t(i, l), t(n, o(R, {
                                name: "Close",
                                class: "text-secondary ml-0.5 size-3",
                                onClick: () => w(l)
                            }), null), n
                        })()
                    })), e
                })()]
            }
        }), null), t(r, o($, {
            when: !h,
            get children() {
                return [(() => {
                    var e = B();
                    return t(e, () => p("Suggested")), e
                })(), (() => {
                    var e = S();
                    return t(e, o(I, {
                        get children() {
                            return o(P, {
                                get setSearch() {
                                    return m.setSearch
                                }
                            })
                        }
                    })), e
                })()]
            }
        }), null), r
    })()
};

function P(y) {
    const [m] = C(() => ({
        sectionId: "casino_picks_for_you",
        showingBlocked: 0
    })), h = _(() => m() ? .pageList.list || []), d = _(() => f.mobile ? h().slice(0, 5) : h());
    return o(b, {
        get each() {
            return d()
        },
        children: s => (() => {
            var a = v(),
                g = a.firstChild;
            return a.$$click = () => y.setSearch(s.fullName), t(g, () => s.fullName), a
        })()
    })
}
H(["click"]);
export {
    A as S
};