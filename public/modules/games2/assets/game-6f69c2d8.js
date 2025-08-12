import {
    D as n
} from "./manifest-47857305.js";

function l(e) {
    const {
        winIncrease: o,
        loseIncrease: r,
        playTimes: t,
        winStopAt: s,
        loseStopAt: u,
        betAmount: i
    } = e, a = o.checked ? "" : `ow:${o.value};`, m = r.checked ? "" : `ol:${r.value};`;
    return `a:${new n(i).toFixed(9)};n:${t};${a}${m}sw:${s};sl:${u};`
}

function d(e, o, r) {
    var s;
    if (typeof e.odds != "number") return {
        payout: 0,
        profit: 0,
        result: 0
    };
    const t = e.odds;
    return {
        payout: Number(new n(t).toFixed(2, n.ROUND_DOWN)),
        profit: new n((e == null ? void 0 : e.winAmount) || 0).sub((e == null ? void 0 : e.betAmount) || 0).toNumber(),
        result: typeof e.result == "number" ? e.result : (s = e.gv) == null ? void 0 : s.result
    }
}
const f = (e, o) => Number(new n(100 * o).div(e).toFixed(2)),
    w = (e, o) => Math.floor(1e4 * new n(100 * o).div(e).toNumber()) / 1e4,
    p = () => {
        const e = window.navigator.userAgent;
        return /firefox|fxios/i.test(e) && !/seamonkey/i.test(e)
    };
export {
    f as a, d as b, l as c, w as g, p as i
};