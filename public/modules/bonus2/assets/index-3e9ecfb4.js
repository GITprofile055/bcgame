import {
    c as y
} from "./web-c89f4fb8.js";
import {
    b as p,
    t as S,
    l as v,
    F as T
} from "./solid-js-871c99e1.js";
import {
    D as P
} from "./index-e43a355a.js";
import {
    popupBonusTerms as l
} from "./index-0f07ee52.js";
import {
    i as b
} from "./toString-1f7cb583.js";
import {
    b as B
} from "./_baseIteratee-bc603d62.js";
import {
    g as x
} from "./groupBy-8da7f089.js";

function E(o, e) {
    return o > e
}

function O(o, e, r) {
    for (var t = -1, s = o.length; ++t < s;) {
        var n = o[t],
            i = e(n);
        if (i != null && (a === void 0 ? i === i && !b(i) : r(i, a))) var a = i,
            d = n
    }
    return d
}

function W(o, e) {
    return o && o.length ? O(o, B(e), E) : void 0
}
class q {
    constructor(e) {
        this.uiWidgetProviders = p([]);
        const [r, t] = p(e);
        this.set = t, this.state = r, S(() => {
            const [s] = P.useDepositProgress();
            v(() => {
                s() && this.derivedFromProgressDTO(s())
            })
        })
    }
    derivedFromProgressDTO(e) {
        var u, m;
        const {
            progressList: r,
            depositBonusType: t,
            expiredTime: s,
            startTime: n
        } = e, i = W(r.filter(c => c.done), "seq"), a = x(r, "seq"), d = ((u = i == null ? void 0 : i.seq) != null ? u : 0) + 1, f = c => {
            switch (t) {
                case "SPECIAL":
                    return;
                case "COMMON-NEWBIE":
                case "VN-NEWBIE":
                    {
                        const g = r.some(h => h.selectedBonusType === c);
                        return l({
                            type: t,
                            bonusType: g && c ? c : r[0].selectedBonusType
                        })
                    }
                default:
                    return l({
                        type: t
                    })
            }
        };
        this.set({
            rawBonusList: r,
            requestTerms: f,
            seq: d,
            groupBySeq: a,
            type: t,
            currenSeqBonusList: (m = a[d]) != null ? m : [],
            activityStartTime: n
        })
    }
    registerUIWidget(e) {
        const [r, t] = this.uiWidgetProviders;
        t(s => s.indexOf(e) >= 0 ? s : [...s, e])
    }
    hasWidget(e) {
        if (!this.state()) return !1;
        const [r] = this.uiWidgetProviders;
        return r().some(t => t.target === e && t.apply(this.state()))
    }
    renderUIWidgets(e) {
        if (!this.state()) return [];
        const [r] = this.uiWidgetProviders, t = r().filter(s => s.target === e && s.apply(this.state()));
        try {
            const s = this;
            return y(T, {
                each: t,
                children: n => n.render(s.state())
            })
        } catch (s) {
            return console.error(s), []
        }
    }
}
const D = new q(null),
    A = Object.freeze(Object.defineProperty({
        __proto__: null,
        depositActivitySystem: D
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    D as d, A as i, W as m
};