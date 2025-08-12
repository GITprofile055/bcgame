import {
    l as N,
    e as U,
    j as n
} from "./manifest-f1f40164.js";
import {
    g as v
} from "./tools-47f326df.js";
import {
    b as C
} from "./index-8a7d18d7.js";
import {
    g as O,
    f as m,
    v as c,
    h as A,
    j as B,
    k as R
} from "./helpers-44d70238.js";
import {
    R as u
} from "./enums-fd45c1cf.js";
const {
    isUsHost: r,
    isBrAuditHost: _,
    isBzHost: I,
    isMxHost: h
} = N.getHostType(U.host);
class D {
    constructor(a) {
        this.features = a
    }
    isEnabled(a) {
        const i = this.features.find(s => s.name === a);
        return i ? i.isFeatureEnabled() : !1
    }
    getMeta(a) {
        var s;
        const i = this.features.find(l => l.name === a);
        return i ? (s = i.meta) == null ? void 0 : s.call(i) : null
    }
}
const S = [];

function t(e) {
    var i, s;
    const a = {
        name: e.name,
        isEnabled: e.isEnabled,
        features: (i = e.childFeatures) != null ? i : [],
        parent: null,
        isFeatureEnabled: () => {
            var l;
            return !(!a.isEnabled() || a.parent && !((l = a.parent) != null && l.isEnabled()))
        },
        meta: e.meta
    };
    return (s = e.childFeatures) == null || s.forEach(l => {
        l.parent = a
    }), S.push(a), a
}
var p = (e => (e.NEW_USER = "NEW_USER", e.REWARD = "REWARD", e.VAULT_PRO = "VAULT_PRO", e.LUCKY_SPIN = "LUCKY_SPIN", e.LUCKY_SPIN_NOTIFICATION = "LUCKY_SPIN_NOTIFICATION", e.QUEST_NOTIFICATION = "QUEST_NOTIFICATION", e.TIPS_RAIN = "TIPS_RAIN", e.LEVELUP_BONUS = "LEVELUP_BONUS", e.LEVELUP_BONUS_UNLOCKED = "LEVELUP_BONUS_UNLOCKED", e.MONTHLY_BONUS = "MONTHLY_BONUS", e.MONTHLY_BONUS_UNLOCKED = "MONTHLY_BONUS_UNLOCKED", e.WEEKLY_BONUS = "WEEKLY_BONUS", e.WEEKLY_BONUS_UNLOCKED = "WEEKLY_BONUS_UNLOCKED", e.RECHARGE_UNLOCKED = "RECHARGE_UNLOCKED", e.VIP_BONUS_UNLOCKED = "VIP_BONUS_UNLOCKED", e.RECALL_TASKS = "RECALL_TASKS", e.TACO_TUESDAY_BONUS = "TACO_TUESDAY_BONUS", e.TACO_TUESDAY_BONUS_UNLOCKED = "TACO_TUESDAY_BONUS_UNLOCKED", e.TG_SUB_TASK = "TG_SUB_TASK", e.KYC_FIRST_BONUS = "KYC_FIRST_BONUS", e.ATTENDANCE_BONUS = "ATTENDANCE_BONUS", e.RAKEBACK = "RAKEBACK", e.SPORT_WEEKLY_BONUS_UNLOCKED = "SPORT_WEEKLY_BONUS_UNLOCKED", e.SPORT_WEEKLY_BONUS = "SPORT_WEEKLY_BONUS", e.DEPOSIT = "DEPOSIT", e.ROLL_COMPETITION = "ROLL_COMPETITION", e.RECHARGE = "RECHARGE", e))(p || {});
t({
    name: "NEW_USER",
    isEnabled: () => !1,
    childFeatures: []
});
const E = () => {
        var a, i, s;
        if (!n.login) return 22;
        const [e] = C.bonusDashboardResource();
        return (s = (i = (a = e()) == null ? void 0 : a[0]) == null ? void 0 : i.levelLimit) != null ? s : 22
    },
    b = () => {
        var e, a;
        return (a = (e = v().first) == null ? void 0 : e.krw) != null ? a : !1
    };
t({
    name: "REWARD",
    isEnabled: () => !0,
    childFeatures: [t({
        name: "ATTENDANCE_BONUS",
        isEnabled: b,
        childFeatures: []
    }), t({
        name: "VAULT_PRO",
        isEnabled: () => !r
    }), t({
        name: "LUCKY_SPIN",
        isEnabled: () => !r && !_,
        childFeatures: [t({
            name: "LUCKY_SPIN_NOTIFICATION",
            isEnabled: () => n.vipLevel < 50
        })]
    }), t({
        name: "QUEST_NOTIFICATION",
        isEnabled: () => n.vipLevel < 50
    }), t({
        name: "TIPS_RAIN",
        isEnabled: () => !r
    }), t({
        name: "LEVELUP_BONUS",
        isEnabled: () => !0,
        childFeatures: [t({
            name: "LEVELUP_BONUS_UNLOCKED",
            isEnabled: () => n.vipLevel >= E(),
            meta: () => ({
                levelLimit: E()
            })
        })]
    }), t({
        name: "VIP_BONUS_UNLOCKED",
        isEnabled: () => n.login ? (O()().privilegeLevel || n.vipLevel) >= E() : !0,
        childFeatures: [t({
            name: "MONTHLY_BONUS",
            isEnabled: () => !0,
            childFeatures: [t({
                name: "MONTHLY_BONUS_UNLOCKED",
                isEnabled: () => (O()().privilegeLevel || n.vipLevel) >= E(),
                meta: () => ({
                    levelLimit: E()
                })
            })]
        }), t({
            name: "WEEKLY_BONUS",
            isEnabled: () => !0,
            childFeatures: [t({
                name: "WEEKLY_BONUS_UNLOCKED",
                isEnabled: () => (m()().privilegeLevel || n.vipLevel) >= E(),
                meta: () => ({
                    levelLimit: E()
                })
            })]
        }), t({
            name: "RECHARGE",
            isEnabled: () => !_,
            childFeatures: [t({
                name: "RECHARGE_UNLOCKED",
                isEnabled: () => n.login ? (c()().privilegeLevel || n.vipLevel) >= E() : !1,
                meta: () => ({
                    levelLimit: E()
                })
            })]
        }), t({
            name: "SPORT_WEEKLY_BONUS",
            isEnabled: () => !r,
            childFeatures: [t({
                name: "SPORT_WEEKLY_BONUS_UNLOCKED",
                isEnabled: () => (A()().privilegeLevel || n.vipLevel) >= E(),
                meta: () => ({
                    levelLimit: E()
                })
            })]
        })]
    }), t({
        name: "RAKEBACK",
        isEnabled: () => !_
    }), t({
        name: "DEPOSIT",
        isEnabled: () => !_
    }), t({
        name: "ROLL_COMPETITION",
        isEnabled: () => !1
    }), t({
        name: "RECALL_TASKS",
        isEnabled: () => !_,
        childFeatures: [t({
            name: "TG_SUB_TASK",
            isEnabled: () => {
                const a = B()().tasks.find(i => i.taskId === u.TELEGRAM);
                return n.vipLevel <= E() || !!(a && a.status === 2)
            }
        })]
    }), t({
        name: "TACO_TUESDAY_BONUS",
        isEnabled: () => !r && !I && n.vipLevel >= E()
    }), t({
        name: "KYC_FIRST_BONUS",
        isEnabled: () => {
            var L;
            const e = R(),
                {
                    isNgHost: a,
                    isNg2Host: i,
                    isKenyaHost: s,
                    isBzHost: l,
                    isBrHost: T,
                    isUsHost: d
                } = N.getHostType(U.host),
                o = () => a || i || s || l || T || d;
            return ((L = e()) == null ? void 0 : L.claimedTime) === 0 && !o()
        }
    })]
});
const g = new D(S);
export {
    p as F, g as f
};