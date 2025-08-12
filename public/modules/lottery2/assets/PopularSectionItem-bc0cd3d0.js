var Z = Object.defineProperty,
    q = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var T = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty,
    K = Object.prototype.propertyIsEnumerable;
var z = (e, n, s) => n in e ? Z(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[n] = s,
    $ = (e, n) => {
        for (var s in n || (n = {})) J.call(n, s) && z(e, s, n[s]);
        if (T)
            for (var s of T(n)) K.call(n, s) && z(e, s, n[s]);
        return e
    },
    k = (e, n) => q(e, H(n));
import {
    f as Q,
    u as U,
    i as a,
    c as d,
    a as g,
    s as O,
    m as X,
    g as Y,
    h as ee,
    t as u,
    k as te
} from "./solid-js-2e2908f8.js";
import {
    r as A,
    c as v
} from "./index-0f5bf80c.js";
import {
    u as ie
} from "./currency-fd1e1eb4.js";
import {
    b as le
} from "./CountryAvatar-6f446c9d.js";
import {
    u as re,
    h as ae,
    y as ne,
    i as D,
    B as p,
    f as h
} from "./manifest-5fcb2c8d.js";
import {
    b as se
} from "./logo-c5334a6f.js";
import {
    t as c
} from "./i18n-d0803583.js";
import {
    I as oe
} from "./Detail.interface-808c1c29.js";
var de = u('<label class="center h-6 leading-6 -mr-3 text-primary text-xs font-extrabold border-l border-t border-b border-brand rounded-tl-3xl rounded-bl-3xl pl-2.5 pr-5 whitespace-nowrap">'),
    ce = u('<img class="relative w-6 min-w-6 h-6 overflow-hidden"loading=lazy>'),
    me = u('<div class="text-xs font-semibold text-warning">'),
    ue = u('<section><div class="flex justify-between"><span class="inline-flex items-center justify-center w-6 h-6 cursor-pointer rounded-lg like_layer"><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"><path d="M7.59192 13.0004L4.86962 14.4953C4.44121 14.7301 3.91174 14.5587 3.68686 14.1113C3.59719 13.9334 3.56635 13.7292 3.59861 13.531L4.11859 10.3648C4.16746 10.068 4.07305 9.76527 3.86667 9.55518L1.66435 7.31305C1.31802 6.96026 1.3109 6.38102 1.64869 6.01931C1.78343 5.87512 1.95945 5.78147 2.15017 5.75273L5.19366 5.29093C5.47879 5.24782 5.7255 5.06053 5.85312 4.79048L7.21427 1.91016C7.42824 1.45727 7.95344 1.27097 8.38754 1.49444C8.56024 1.58363 8.70019 1.7293 8.78559 1.91016L10.1467 4.79048C10.2744 5.06053 10.5211 5.24782 10.8062 5.29093L13.8497 5.75273C14.3284 5.82557 14.66 6.28985 14.5908 6.78981C14.5632 6.989 14.4731 7.17283 14.3355 7.31355L12.1332 9.55567C11.9268 9.76576 11.8324 10.0685 11.8813 10.3653L12.4012 13.5315C12.4828 14.0295 12.1626 14.5022 11.6858 14.5879C11.496 14.6221 11.3006 14.5894 11.1302 14.4958L8.40794 13.0009C8.1527 12.8606 7.84811 12.8606 7.59287 13.0009L7.59192 13.0004Z"></path></svg></span><div class="flex items-center"></div></div><div class="draw-titledraw-title text-primary text-sm font-extrabold my-2 flex justify-start"><label class=line-clamp-2></label></div><div class="prize-box flex justify-between"><label class="prize-desc font-semibold text-secondary text-xs"></label><label class="text-primary text-sm italic font-extrabold"></label></div><div class="btn-box mt-2 flex gap-2">'),
    ye = u("<span>d"),
    _e = u('<div class="draw-time text-xs font-semibold text-secondary mt-2 flex justify-start break-keep"><span class=ml-0.5><span>h</span><span>m</span><span>s');

function ke(e) {
    const n = re(),
        s = ie(),
        y = ae(() => e.data.drawTime),
        x = (i, _) => {
            const b = _ ? `/lottery/detail/${i.id}?type=${_}` : `/lottery/detail/${i.id}`;
            n(b), e.onGameClick && e.onGameClick();
            const C = {
                exp_id: i.exp_id,
                item_id: i.item_id,
                item_type: i.item_type,
                log_id: i.log_id,
                retrieve_id: i.retrieve_id,
                section_id: i.section_id,
                strategy_id: i.strategy_id
            };
            D.emit("sensorsTrack", k($({
                event: "lottery_click"
            }, A(C)), {
                lottery_id: i.id,
                lottery_name: i.name,
                item_id: i.item_id || i.id || i.lotteryId,
                item_type: i.item_type || "lottery"
            })), e.track && e.track({
                game_id: i.id,
                game_name: i.name,
                item_id: i.item_id || i.id || i.lotteryId,
                item_type: i.item_type || "lottery"
            })
        };
    let L;
    const S = {},
        P = ne({
            threshold: .5
        })(() => L);
    return Q(() => {
        P() && !S[e.data.id] && (D.emit("sensorsTrack", k($({
            event: "lottery_show"
        }, A(e.data, ["id"])), {
            item_type: "lottery",
            item_id: e.data.id,
            module_sort: e.itemIndex,
            lottery_id: e.data.id,
            lottery_name: e.data.name
        })), S[e.data.id] = e.data.id)
    }, P()), (() => {
        var i = ue(),
            _ = i.firstChild,
            b = _.firstChild,
            C = b.firstChild,
            I = b.nextSibling,
            w = _.nextSibling,
            G = w.firstChild,
            j = w.nextSibling,
            B = j.firstChild,
            V = B.nextSibling,
            F = j.nextSibling;
        return i.$$click = t => {
            t.stopPropagation(), x(e.data)
        }, U(t => L = t, i), b.$$click = t => {
            t.stopPropagation(), e.onClickLike(e.data)
        }, a(I, d(g, {
            get when() {
                var t;
                return ((t = e.data) == null ? void 0 : t.id) === "0"
            },
            get children() {
                return [(() => {
                    var t = de();
                    return a(t, () => c("__ENV_SITE__ Exclusive")), t
                })(), (() => {
                    var t = ce();
                    return O(t, "src", se), t
                })()]
            }
        }), null), a(I, d(g, {
            get when() {
                var t;
                return ((t = e.data) == null ? void 0 : t.id) !== "0"
            },
            get children() {
                return d(le, {
                    get country() {
                        return e.data.country
                    }
                })
            }
        }), null), a(i, d(g, {
            get when() {
                return e.data.lotteryStatus === 1
            },
            get fallback() {
                return (() => {
                    var t = _e(),
                        l = t.firstChild,
                        o = l.firstChild,
                        f = o.firstChild,
                        m = o.nextSibling,
                        M = m.firstChild,
                        N = m.nextSibling,
                        R = N.firstChild;
                    return a(t, () => c("Next Draw in"), l), a(l, d(g, {
                        get when() {
                            var r;
                            return (r = y()) == null ? void 0 : r.days
                        },
                        get children() {
                            var r = ye(),
                                W = r.firstChild;
                            return a(r, () => {
                                var E;
                                return v((E = y()) == null ? void 0 : E.days)
                            }, W), r
                        }
                    }), o), a(o, () => {
                        var r;
                        return v((r = y()) == null ? void 0 : r.hours)
                    }, f), a(m, () => {
                        var r;
                        return v((r = y()) == null ? void 0 : r.minutes)
                    }, M), a(N, () => {
                        var r;
                        return v((r = y()) == null ? void 0 : r.seconds)
                    }, R), t
                })()
            },
            get children() {
                var t = me();
                return a(t, () => c("Lottery draw suspended")), t
            }
        }), w), a(G, () => e.data.name), a(B, () => c("Top prize")), a(V, () => s(e.data.topPrize)), a(F, (() => {
            var t = X(() => {
                var l;
                return !!Object.values(oe).includes((l = e.data) == null ? void 0 : l.id)
            });
            return () => t() ? d(p, {
                get class() {
                    return h("min-h-8 h-auto w-full text-primary text-sm font-extrabold p-0 bg-black_alpha5 dark:bg-layer6")
                },
                onClick: l => {
                    l.stopPropagation(), x(e.data)
                },
                get children() {
                    return c("Bet Now")
                }
            }) : [d(p, {
                get class() {
                    return h("min-h-8 h-auto w-1/2  bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold py-1 px-0")
                },
                onClick: l => {
                    l.stopPropagation(), x(e.data, "2")
                },
                get children() {
                    return c("Bet 2 balls")
                }
            }), d(p, {
                get class() {
                    return h("min-h-8 h-auto w-1/2 bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold py-1 px-0")
                },
                onClick: l => {
                    l.stopPropagation(), x(e.data, "3")
                },
                get children() {
                    return c("Bet 3 balls")
                }
            })]
        })()), Y(t => {
            var l = h("popularSectionItemWrap p-3 rounded-xl bg-layer4 flex flex-col justify-between cursor-pointer", e.class),
                o = e.data.lotteryStatus === 1 ? "none" : "auto",
                f = e.data.lotteryStatus === 1 ? "grayscale(50%)" : "initial",
                m = e.data.hasLike ? "fill-brand" : "fill-tertiary";
            return l !== t.e && ee(i, t.e = l), o !== t.t && ((t.t = o) != null ? i.style.setProperty("pointer-events", o) : i.style.removeProperty("pointer-events")), f !== t.a && ((t.a = f) != null ? i.style.setProperty("filter", f) : i.style.removeProperty("filter")), m !== t.o && O(C, "class", t.o = m), t
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0
        }), i
    })()
}
te(["click"]);
export {
    ke as P
};