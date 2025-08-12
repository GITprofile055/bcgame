import {
    k as I,
    d,
    c as v,
    F as x,
    i as h,
    g as B,
    h as f,
    t as y,
    b as _
} from "./solid-js-2e2908f8.js";
import {
    p as u
} from "./store-483fdae6.js";
import {
    f as g,
    S as A
} from "./manifest-5fcb2c8d.js";
import {
    A as D,
    c as N
} from "./Lottery-2fa833fd.js";
import {
    p as S
} from "./store-2ed2b91e.js";
import {
    I as c
} from "./Detail.interface-808c1c29.js";
import {
    a as L
} from "./router-bf1daf6a.js";
var O = y("<div><div>");
const T = e => {
    const s = d(() => e.numbs.filter(n => !!n)),
        l = function(n) {
            const t = e.selectMode === "normal" ? "normalBallList" : "bonusBallList";
            return u.state.BetItem.selectedDetailData[t].includes(n)
        },
        i = function(n) {
            e.inSelect && e.onSelectedChange && e.onSelectedChange(n)
        },
        o = e.selectMode === "normal" ? "bg-[url('/src/assets/lottery/ball-white.png')] text-primary_brand" : "bg-[url('/src/assets/lottery/jackpot_ball.png')] text-primary_brand";
    return v(x, {
        get each() {
            return s()
        },
        children: n => (() => {
            var t = O(),
                a = t.firstChild;
            return t.$$click = () => i(Number(n)), h(a, n), B(r => {
                var m = g("w-10 h-10 center flex-none inline-flex rounded-full transition-all duration-500 ease-out cursor-pointer bg-layer3 bg-contain", e.inSelect ? "hover:scale-125" : o, e.selectMode, e.class || "", l(Number(n)) && o),
                    b = g("center rounded-full font-extrabold text-sm");
                return m !== r.e && f(t, r.e = m), b !== r.t && f(a, r.t = b), r
            }, {
                e: void 0,
                t: void 0
            }), t
        })()
    })
};
I(["click"]);
var C = y('<label class="text-primary text-base font-semibold">');

function w(e) {
    const s = L(),
        l = d(() => {
            var r;
            return (s.id || ((r = e.data) == null ? void 0 : r.period.lotteryId.toString())) === c.HK ? D : N
        }),
        i = d(() => l().find(a => {
            var r;
            return a.value === Number((r = e.data) == null ? void 0 : r.betItem.selectedDetailData.betAmount)
        }) || l()[3] || l()[0]),
        [o, n] = _(i());
    return v(A, {
        class: "bg-input_bright",
        get value() {
            return o()
        },
        get disabled() {
            var t;
            return s.id === c.HK || ((t = e.data) == null ? void 0 : t.period.lotteryId.toString()) === c.HK
        },
        get options() {
            return l()
        },
        onChange: t => {
            n(t), e.data ? u.setState("Betlist", a => {
                var r;
                return a.id === ((r = e.data) == null ? void 0 : r.id)
            }, S(a => {
                a.betItem.selectedDetailData.betAmount = t.value
            })) : u.setState("BetItem", S(a => {
                a.selectedDetailData.betAmount = t.value
            }))
        },
        children: t => (() => {
            var a = C();
            return h(a, () => t().label), a
        })()
    })
}
export {
    w as B, T as L
};