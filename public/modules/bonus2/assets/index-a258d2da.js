import {
    b as S,
    d as y,
    t as g,
    g as L,
    i as c,
    c as a,
    u as j,
    e as z,
    a as F,
    m as H
} from "./web-c89f4fb8.js";
import {
    a4 as O,
    c as b,
    u as U,
    l as B,
    e as v,
    Z as G,
    j as _,
    _ as M,
    a5 as N,
    m as h,
    U as R,
    T as W,
    f as V,
    s as X
} from "./manifest-f1f40164.js";
import {
    P as f,
    a as Z,
    W as x
} from "./widget-entry-f4a50812.js";
import {
    j as P,
    h as q,
    F as I,
    d as J,
    c as K,
    S as T
} from "./solid-js-871c99e1.js";
import {
    t as d
} from "./i18n-827ab26d.js";
import {
    c as Q
} from "./store-2fc868cc.js";
import {
    D as Y
} from "./dom-empty-fallback-7d9422ba.js";
import {
    m as ee,
    a as te
} from "./baseService-2efdc30b.js";
import {
    s as k
} from "./_shuffleSelf-92183780.js";
import {
    v as re
} from "./values-6a0cc286.js";
import {
    i as ae
} from "./isArray-79a0be9c.js";
import {
    t as ne
} from "./_baseFindIndex-928665d4.js";

function C(e, t, n) {
    return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
}

function le(e, t) {
    return k(ee(e), C(t, 0, e.length))
}

function se(e, t) {
    var n = re(e);
    return k(n, C(t, 0, n.length))
}

function oe(e, t, n) {
    (n ? te(e, t, n) : t === void 0) ? t = 1: t = ne(t);
    var m = ae(e) ? le : se;
    return m(e, t)
}
var ie = g("<img>");
const ce = e => {
    const t = O(() => e.src, `w=${e.width}`),
        [n, m] = P(e, ["src", "width"]);
    return (() => {
        var u = ie();
        return S(u, y(m, {
            get src() {
                return t()
            }
        }), !1, !1), u
    })()
};
var w = g("<div>");
const ue = e => {
    const [t, n] = P(e, ["value", "onChange", "options"]), m = q(() => e.value);
    return (() => {
        var u = w();
        return S(u, y(n, {
            get class() {
                return b("flex flex-row gap-2", n.class)
            }
        }), !1, !0), c(u, a(I, {
            get each() {
                return e.options
            },
            children: o => (() => {
                var i = w();
                return j(p => {
                    J(() => {
                        m(o.value) && p.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        })
                    })
                }, i), i.$$click = e.onChange, i.$$clickData = o.value, c(i, () => o.label), z(() => F(i, b(m(o.value) ? "bg-layer5 text-brand brightness-125" : "bg-layer4 text-secondary", "btn-like min-w-16 cursor-pointer rounded-lg p-2 text-center text-base font-extrabold transition-all"))), i
            })()
        })), u
    })()
};
L(["click"]);
var me = g("<div class=@container>"),
    ge = g("<span class=text-primary>"),
    de = g('<header class="text-base font-extrabold text-primary lg:text-lg">'),
    fe = g('<div class="mt-3 flex flex-row flex-wrap rounded-lg lg:-mx-2">'),
    pe = g('<div class="pb-4 pt-4 sm:pt-0">'),
    ve = g('<div class="flex w-full justify-center">');
const he = e => a(W, {
        get when() {
            return v.mobile
        },
        get fallback() {
            return (() => {
                var t = me();
                return c(t, () => e.children), t
            })()
        },
        get children() {
            return a(V, {
                get class() {
                    return b("headless-dialog text-transparent @container")
                },
                get title() {
                    return (() => {
                        var t = ge();
                        return c(t, () => d("Promotion")), t
                    })()
                },
                get children() {
                    return e.children
                }
            })
        }
    }),
    be = e => {
        const t = U(),
            {
                isSpHost: n,
                isBzHost: m
            } = B.getHostType(v.host),
            [u] = G(() => [`home/main/event-list/${_.areaCode}/`], () => M().get(`home/main/event-list/${_.areaCode}/`), {
                lockLocal: !0,
                version: 1
            }),
            [o, i] = Q({
                tab: 0,
                gameType: f.All
            }),
            p = K(() => {
                if (!u()) return [];
                const l = [r => o.gameType === f.All || r.participatingGameType === o.gameType, r => o.tab === 0 ? !r.outDated : r.outDated];
                return u().eventList.filter(r => l.every(D => D(r)))
            }),
            A = N(l => a(Z, y(l))),
            $ = (l, s) => a(I, {
                each: l,
                children: r => A({
                    itemTag: r.tag,
                    imgCover: a(ce, {
                        class: "absolute bottom-0 top-0 block w-full rounded-md",
                        get src() {
                            return X.darken ? r.eventDarkImg : r.eventBgImg
                        },
                        get width() {
                            return v.mobile ? 1200 : 800
                        },
                        alt: ""
                    }),
                    title: r.title,
                    endTime: r.liveEndTime,
                    inProgress: o.tab === 0,
                    onClick: () => {
                        r.landingPageUrl ? window.open(r.landingPageUrl, "_blank") : t(`/promotion/${r.eventCode}`, {
                            replace: s
                        })
                    }
                })
            });
        if (e.filterActEventId) return i({
            tab: 0
        }), $(oe(p().filter(l => l.actEventId !== e.filterActEventId), 3), !0);
        const E = [{
            value: f.All,
            label: d("All")
        }, {
            value: f.Casino,
            label: d("Casino")
        }, {
            value: f.Sport,
            label: d("Sport")
        }];
        return a(he, {
            get children() {
                var l = pe();
                return c(l, a(T, {
                    get when() {
                        return !v.mobile
                    },
                    get children() {
                        var s = de();
                        return c(s, () => d("Promotion")), s
                    }
                }), null), c(l, a(x, {
                    target: "banner-promotion"
                }), null), c(l, a(T, {
                    when: !n && !m,
                    get children() {
                        return [a(h, {
                            get value() {
                                return o.tab
                            },
                            class: "mt-3 h-10 w-full rounded-lg sm:w-64",
                            onChange: s => {
                                i("tab", s)
                            },
                            get children() {
                                return [a(h.TabItem, {
                                    class: "hidden h-10 w-12 rounded-none",
                                    get title() {
                                        return d("Latest Promotion")
                                    }
                                }), a(h.TabItem, {
                                    class: "hidden h-10",
                                    get title() {
                                        return d("Archived")
                                    }
                                })]
                            }
                        }), a(ue, {
                            class: "mt-3",
                            options: E,
                            get value() {
                                return o.gameType
                            },
                            onChange: s => {
                                i("gameType", s)
                            }
                        }), (() => {
                            var s = fe();
                            return c(s, a(Y, {
                                get fallback() {
                                    return (() => {
                                        var r = ve();
                                        return c(r, a(R, {
                                            type: "empty"
                                        })), r
                                    })()
                                },
                                get children() {
                                    return [a(x, {
                                        target: "promotion-list"
                                    }), H(() => $(p()))]
                                }
                            })), s
                        })()]
                    }
                }), null), l
            }
        })
    },
    Ee = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: be
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    ce as I, be as P, Ee as i
};