var W = Object.defineProperty,
    q = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var B = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty,
    Q = Object.prototype.propertyIsEnumerable;
var D = (e, i, a) => i in e ? W(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[i] = a,
    p = (e, i) => {
        for (var a in i || (i = {})) K.call(i, a) && D(e, a, i[a]);
        if (B)
            for (var a of B(i)) Q.call(i, a) && D(e, a, i[a]);
        return e
    },
    k = (e, i) => q(e, J(i));
var F = (e, i, a) => new Promise((n, u) => {
    var l = d => {
            try {
                f(a.next(d))
            } catch (t) {
                u(t)
            }
        },
        g = d => {
            try {
                f(a.throw(d))
            } catch (t) {
                u(t)
            }
        },
        f = d => d.done ? n(d.value) : Promise.resolve(d.value).then(l, g);
    f((a = a.apply(e, i)).next())
});
import {
    e as X,
    c as o,
    S as z,
    a as x,
    t as b,
    f as L,
    u as Y,
    i as s,
    g as Z,
    h as ee,
    s as te,
    k as re
} from "./solid-js-2e2908f8.js";
import {
    u as ae
} from "./currency-fd1e1eb4.js";
import {
    r as A,
    c as C
} from "./index-0f5bf80c.js";
import {
    c as ie
} from "./CountryAvatar-6f446c9d.js";
import {
    g as le,
    M as ne,
    e as j,
    u as se,
    h as oe,
    y as de,
    i as V,
    B as ce,
    f as me,
    s as ue
} from "./manifest-5fcb2c8d.js";
import {
    f as y
} from "./lottery-af48bec0.js";
import {
    t as v
} from "./i18n-d0803583.js";
import {
    t as ge
} from "./throttle-e4f3954e.js";
import "./countries-a369bbd3.js";
import "./debounce-f7740f4e.js";
import "./isObject-909534d5.js";
import "./toNumber-e58af95e.js";
var fe = b('<div class="text-xs font-semibold text-warning">'),
    be = b('<div class="bet-closed text-primary text-sm font-semibold text-center">Closed'),
    ye = b('<section><div class="upcoming-draw-item-logo-box w-20 h-20 absolute top-0 right-0 flex items-center justify-center rounded-[50%] translate-x-1/4 -translate-y-1/4 bg-layer2"></div><div class="bet-address h-10 text-primary text-sm font-semibold w-8/12 line-clamp-2 text-ellipsis"></div><div class="text-primary text-lg italic font-extrabold mt-1"></div><div class="h-px bg-[rgba(153,164,176,0.2)] m-0 my-2"></div><div class="bet-next-draw-date mt-2 mb-3 flex justify-between"><span class="w-[calc(33.3%-8px)] h-6 inline-flex items-center justify-center rounded text-sm font-semibold bg-black_alpha10">h</span><label class="w-3 flex items-center justify-center">:</label><span class="bet-date w-[calc(33.3%-8px)] h-6 inline-flex items-center justify-center rounded text-sm font-semibold bg-black_alpha10 ">m</span><label class="w-3 flex items-center justify-center">:</label><span class="w-[calc(33.3%-8px)] h-6 inline-flex items-center justify-center rounded text-sm font-semibold bg-black_alpha10">s'),
    xe = b('<div class="text-secondary text-xs font-semibold">'),
    ve = b("<div>");
const he = function(e) {
    if (!e.data) return "";
    const i = se(),
        a = ae(),
        n = oe(() => Number(e.data.drawTime));
    let u;
    const l = {},
        g = de({
            threshold: .5
        })(() => u);
    L(() => {
        g() && !l[e.data.id] && (V.emit("sensorsTrack", k(p({
            event: "lottery_show"
        }, A(e.data, ["id"])), {
            item_type: "lottery",
            item_id: e.data.id,
            module_sort: e.itemIndex,
            lottery_id: e.data.id,
            lottery_name: e.data.name
        })), l[e.data.id] = e.data.id)
    }, g());
    const f = t => {
            i(`/lottery/detail/${t.id}`), V.emit("sensorsTrack", k(p({
                event: "lottery_click"
            }, A(t, ["id"])), {
                lottery_id: t.id,
                lottery_name: t.name,
                item_type: "lottery",
                item_id: t.id
            }))
        },
        d = t => {
            const c = ue.darken ? "#323738" : "#FFF";
            let m = `linear-gradient(180deg, rgba(244, 62, 139, 0.00) 0%, rgba(244, 62, 139, 0.60) 100%), ${c}`;
            return t % 5 === 0 ? m = `linear-gradient(180deg, rgba(244, 62, 139, 0.00) 0%, rgba(244, 62, 139, 0.60) 100%), ${c}` : t % 5 === 1 ? m = `linear-gradient(180deg, rgba(244, 182, 62, 0.00) 0%, rgba(244, 182, 62, 0.60) 100%), ${c}` : t % 5 === 2 ? m = `linear-gradient(180deg, rgba(230, 246, 44, 0.00) 0%, rgba(230, 246, 44, 0.60) 100%), ${c}` : t % 5 === 3 ? m = `linear-gradient(180deg, rgba(44, 246, 89, 0.00) 0%, rgba(44, 246, 89, 0.60) 100%), ${c}` : t % 5 === 4 && (m = `linear-gradient(180deg, rgba(44, 125, 246, 0.00) 0%, rgba(44, 125, 246, 0.60) 100%), ${c}`), m
        };
    return L(() => {
        y(n()) && e.timeBack()
    }), o(z, {
        get children() {
            var t = ye(),
                c = t.firstChild,
                m = c.nextSibling,
                P = m.nextSibling,
                O = P.nextSibling,
                E = O.nextSibling,
                h = E.firstChild,
                R = h.firstChild,
                U = h.nextSibling,
                _ = U.nextSibling,
                G = _.firstChild,
                H = _.nextSibling,
                I = H.nextSibling,
                M = I.firstChild;
            return t.$$click = () => f(e.data), Y(r => u = r, t), s(c, o(ie, {
                get country() {
                    return e.data.id === "0" ? "Bc" : e.data.country
                }
            })), s(m, () => e.data.name), s(P, () => a(e.data.topPrize)), s(t, o(x, {
                get when() {
                    return e.data.lotteryStatus === 1
                },
                get fallback() {
                    return (() => {
                        var r = xe();
                        return s(r, () => v("Next Draw Starts in")), r
                    })()
                },
                get children() {
                    var r = fe();
                    return s(r, () => v("Lottery draw suspended")), r
                }
            }), E), s(h, () => {
                var r;
                return C((r = n()) == null ? void 0 : r.hours)
            }, R), s(_, () => {
                var r;
                return C((r = n()) == null ? void 0 : r.minutes)
            }, G), s(I, () => {
                var r;
                return C((r = n()) == null ? void 0 : r.seconds)
            }, M), s(t, o(x, {
                get when() {
                    return !y(n())
                },
                get children() {
                    return o(ce, {
                        type: "brand",
                        class: "bet-btn text-white rounded-lg w-full h-9",
                        get children() {
                            return v("Bet Now")
                        }
                    })
                }
            }), null), s(t, o(x, {
                get when() {
                    return y(n())
                },
                get children() {
                    return be()
                }
            }), null), Z(r => {
                var N = me("lotterySectionItemStyleWrap relative flex flex-col justify-between to w-full rounded-xl p-3 text-primary overflow-hidden cursor-pointer", y(n()) && "grayscale"),
                    w = d(e.itemIndex || 0),
                    $ = e.data.lotteryStatus === 1 ? "none" : "auto",
                    S = e.data.lotteryStatus === 1 ? "grayscale(50%)" : "initial",
                    T = e.data.id;
                return N !== r.e && ee(t, r.e = N), w !== r.t && ((r.t = w) != null ? t.style.setProperty("background", w) : t.style.removeProperty("background")), $ !== r.a && ((r.a = $) != null ? t.style.setProperty("pointer-events", $) : t.style.removeProperty("pointer-events")), S !== r.o && ((r.o = S) != null ? t.style.setProperty("filter", S) : t.style.removeProperty("filter")), T !== r.i && te(t, "id", r.i = T), r
            }, {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0,
                i: void 0
            }), t
        }
    })
};

function Be(e) {
    const i = Array(6).fill({
            id: "0",
            name: v("__ENV_SITE__ Lottery"),
            topPrize: 1e5,
            hours: 0,
            minutes: 0,
            seconds: 0
        }),
        [a, {
            refetch: n
        }] = X(() => F(this, null, function*() {
            const l = "/platform-lottery/lottery-info/list-upcoming";
            return le().get(l).catch(g => console.log)
        }), {
            initialValue: i
        }),
        u = ge(function() {
            n()
        }, 3e3);
    return o(z, {
        get children() {
            return o(ne, {
                get class() {
                    return `${j.mobile?"-mx-4":"mx-0"} gap-2 grid-col-2`
                },
                get style() {
                    return {
                        "--grid-gap": ".5rem",
                        "--grid-padding": j.mobile ? "1rem" : "0px",
                        "--aspect-ratio": j.mobile ? .88 : 1
                    }
                },
                ref: l => {
                    e.callback && e.callback(l)
                },
                get data() {
                    return a()
                },
                children: (l, g) => o(x, {
                    get when() {
                        return l()
                    },
                    get fallback() {
                        return ve()
                    },
                    get children() {
                        return o(he, {
                            get data() {
                                return l()
                            },
                            timeBack: u,
                            get itemIndex() {
                                return g()
                            }
                        })
                    }
                })
            })
        }
    })
}
re(["click"]);
export {
    Be as
    default
};