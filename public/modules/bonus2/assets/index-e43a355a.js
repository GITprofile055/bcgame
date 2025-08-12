var o = (r, u, s) => new Promise((g, t) => {
    var m = e => {
            try {
                i(s.next(e))
            } catch (n) {
                t(n)
            }
        },
        T = e => {
            try {
                i(s.throw(e))
            } catch (n) {
                t(n)
            }
        },
        i = e => e.done ? g(e.value) : Promise.resolve(e.value).then(m, T);
    i((s = s.apply(r, u)).next())
});
import {
    Z as a,
    j as W,
    ab as f
} from "./manifest-f1f40164.js";
import {
    h as p
} from "./http-4df94233.js";
const S = {
    useDepositProgress: () => a(() => ["/activity/recharge-bonus/progress/", {
        login: W.login
    }], u => o(void 0, [u], function*([r]) {
        return yield p.get(r)
    })),
    useCurrentDepositItem: () => f,
    useDepositTerms: () => a(() => ["/activity/recharge-bonus/term/"], u => o(void 0, [u], function*([r]) {
        return yield p.get(r)
    }), {
        initialValue: {
            monthlyDepositBonusTerm: {
                depositBonusType: "MONTHLY",
                bonusList: []
            },
            newUserBonusTerm: {
                bonusWagerTimes: 0,
                freeBetWagerTimes: 0,
                freeSpinMaxWinnings: 0,
                freeSpinWagerTimes: 0
            },
            newUserDepositBonusTerms: [{
                depositBonusType: "COMMON-NEWBIE",
                bonusList: [],
                wagerTerm: {
                    bonusWagerTimes: 0,
                    freeBetWagerTimes: 0,
                    freeSpinMaxWinnings: 0,
                    freeSpinWagerTimes: 0
                }
            }, {
                depositBonusType: "KR-NEWBIE",
                wagerTerm: {
                    bonusWagerTimes: 0,
                    freeBetWagerTimes: 0,
                    freeSpinMaxWinnings: 0,
                    freeSpinWagerTimes: 0
                },
                bonusList: []
            }],
            dailyDepositBonusTerms: [{
                depositBonusType: "KR-DAILY",
                wagerTerm: {
                    bonusWagerTimes: 0,
                    freeBetWagerTimes: 0,
                    freeSpinMaxWinnings: 0,
                    freeSpinWagerTimes: 0
                },
                bonusList: []
            }, {
                depositBonusType: "VN-DAILY",
                bonusList: [],
                wagerTerm: {
                    bonusWagerTimes: 0,
                    freeBetWagerTimes: 0,
                    freeSpinMaxWinnings: 0,
                    freeSpinWagerTimes: 0
                }
            }]
        }
    })
};
export {
    S as D
};