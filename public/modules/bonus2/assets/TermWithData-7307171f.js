import {
    b as Z,
    d as z,
    i as R,
    e as J,
    a as M,
    s as Q,
    t as A,
    m as L,
    c as D,
    u as X,
    r as tt,
    h as et
} from "./web-c89f4fb8.js";
import {
    c as w,
    D as s,
    a as u,
    Z as ot,
    s as y,
    e as U,
    ag as e,
    l as nt,
    T as rt
} from "./manifest-f1f40164.js";
import {
    j as it,
    S as _t,
    d as $,
    a as C,
    m as lt,
    c as S,
    F as B
} from "./solid-js-871c99e1.js";
import {
    t as I,
    T as k
} from "./i18n-827ab26d.js";
import {
    f as K
} from "./index-c5ebc757.js";
import {
    s as x
} from "./utils-38f210e8.js";
import {
    p as st
} from "./popup-game-limits-ec0564dd.js";
import {
    w as mt
} from "./helpers-44d70238.js";
import {
    D as at
} from "./index-e43a355a.js";
const ut = "/modules/bonus2/assets/deposit-132a9bbd.png";
var dt = A('<div><div class="light-darkness size-full overflow-hidden rounded-xl bg-layer4"><div><h3 class="text-sm font-extrabold text-primary"></h3><span class="text-lg font-extrabold leading-tight text-brand"></span><span class="text-xs font-semibold text-secondary"></span><div><img class=h-full>');
const ht = t => {
    const [r, a] = it(t, ["type", "ratio", "freeBet", "freeSpin", "minDeposit", "sequence", "minDepositCurrency"]), n = () => t.type ? t.type === "casino" ? K.krCasino : K.krSports : ut, m = () => `${x(t.sequence)} ${I("Deposit Bonus")}`, E = () => {
        const l = t.freeSpin || 0,
            p = t.freeBet || 0,
            o = l || p ? `+ ${p||l} ${l?"FS":"FB"}` : "",
            _ = () => t.type === "casino" ? I("in Casino") : t.type === "sport" ? I("in Sports") : "";
        return [L(() => new s(t.ratio).mul(100)), "% ", o, " ", L(() => L(() => t.layout === "vertical")() ? "" : _())]
    }, i = () => [L(() => I("Min. deposit: ")), L(() => u.printCurrency(new s(t.minDeposit), t.minDepositCurrency))];
    return (() => {
        var l = dt(),
            p = l.firstChild,
            o = p.firstChild,
            _ = o.firstChild,
            d = _.nextSibling,
            h = d.nextSibling,
            c = h.nextSibling,
            f = c.firstChild;
        return Z(o, z(a, {
            style: {
                "background-image": "linear-gradient(138deg, transparent 33.73%, rgba(36, 238, 137, 0.20) 98.57%)"
            },
            get class() {
                return w("justify-center-center relative flex h-full flex-col p-3", a.class)
            }
        }), !1, !0), R(_, m), R(d, E), R(h, i), J(b => {
            var N = w("h-full rounded-xl bg-gradient-to-b from-[#24EE89] to-layer4 p-[1px]"),
                F = w(t.layout === "vertical" ? "-mb-3 -mr-3 flex h-18 justify-end" : "absolute bottom-0 right-0 top-0 h-full"),
                W = n();
            return N !== b.e && M(l, b.e = N), F !== b.t && M(c, b.t = F), W !== b.a && Q(f, "src", b.a = W), b
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), l
    })()
};
class G {
    constructor(r) {
        this.termsData = r
    }
    getNthBonus(r, a, n = "") {
        let m = {
            selectedBonusType: "",
            meetMinDeposit: !1,
            done: !1,
            title: "",
            bonusRatio: 0,
            maxBonus: 0,
            freeSpin: 0,
            minDeposit: 0,
            maxDeposit: 0,
            currency: "USDFIAT",
            seq: 0,
            freeBet: 0,
            wagerTimes: 0,
            fiatRecharge: {}
        };
        return r.endsWith("DAILY") ? this.termsData.dailyDepositBonusTerms.find(o => o.depositBonusType === r).bonusList.find(o => o.seq === a && (!n || o.selectedBonusType === n)) || m : r.endsWith("MONTHLY") ? this.termsData.monthlyDepositBonusTerm.bonusList.find(o => o.seq === a && (!n || o.selectedBonusType === n)) || m : this.termsData.newUserDepositBonusTerms.find(l => l.depositBonusType === r).bonusList.find(l => l.seq === a && (!n || l.selectedBonusType === n)) || m
    }
    hasNthBonus(r, a, n) {
        return this.getNthBonus(r, a, n) !== void 0
    }
    getNthBonusList(r, a = "casino") {
        if (r.endsWith("DAILY")) {
            const m = this.termsData.dailyDepositBonusTerms.find(E => E.depositBonusType === r);
            return m ? m.bonusList.filter(E => E.selectedBonusType === a) : []
        }
        if (r.endsWith("MONTHLY")) {
            const m = this.termsData.monthlyDepositBonusTerm;
            return m ? m.bonusList : []
        }
        const n = this.termsData.newUserDepositBonusTerms.find(m => m.depositBonusType === r);
        debugger;
        return n ? n.bonusList.filter(m => m.selectedBonusType === a) : []
    }
}

function g(t, r, a, n) {
    return new G(t).getNthBonus(r, a, n)
}

function T(t, r, a) {
    return new G(t).getNthBonusList(r, a)
}

function H(t, r) {
    var a, n;
    return r.endsWith("DAILY") ? (a = t.dailyDepositBonusTerms.find(m => m.depositBonusType === r)) == null ? void 0 : a.wagerTerm : (n = t.newUserDepositBonusTerms.find(m => m.depositBonusType === r)) == null ? void 0 : n.wagerTerm
}
var Et = A("<div>");
const pt = Object.assign({
        "/terms/global/ar-SA/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-af666861.js"), []).then(t => t.default),
        "/terms/global/ar-SA/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-ea75337a.js"), []).then(t => t.default),
        "/terms/global/ar-SA/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-7dd2243b.js"), []).then(t => t.default),
        "/terms/global/ar-SA/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-8624a37a.js"), []).then(t => t.default),
        "/terms/global/ar-SA/newbie.none.html": () => e(() =>
            import ("./newbie.none-93c3fb09.js"), []).then(t => t.default),
        "/terms/global/ar-SA/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-6d0c029e.js"), []).then(t => t.default),
        "/terms/global/bn-BD/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-99111b87.js"), []).then(t => t.default),
        "/terms/global/bn-BD/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-e55c16e0.js"), []).then(t => t.default),
        "/terms/global/bn-BD/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-eb093150.js"), []).then(t => t.default),
        "/terms/global/bn-BD/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-837d6a7c.js"), []).then(t => t.default),
        "/terms/global/bn-BD/newbie.none.html": () => e(() =>
            import ("./newbie.none-958dec3a.js"), []).then(t => t.default),
        "/terms/global/bn-BD/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-4cf00436.js"), []).then(t => t.default),
        "/terms/global/de-DE/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-d0952abb.js"), []).then(t => t.default),
        "/terms/global/de-DE/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-72a848e9.js"), []).then(t => t.default),
        "/terms/global/de-DE/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-9acde8ea.js"), []).then(t => t.default),
        "/terms/global/de-DE/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-6f29cef7.js"), []).then(t => t.default),
        "/terms/global/de-DE/newbie.none.html": () => e(() =>
            import ("./newbie.none-1750d372.js"), []).then(t => t.default),
        "/terms/global/de-DE/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-97726614.js"), []).then(t => t.default),
        "/terms/global/en-IN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-9571d896.js"), []).then(t => t.default),
        "/terms/global/en-IN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-efb29cb4.js"), []).then(t => t.default),
        "/terms/global/en-IN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-c944dccf.js"), []).then(t => t.default),
        "/terms/global/en-IN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-7d4beb35.js"), []).then(t => t.default),
        "/terms/global/en-IN/newbie.none.html": () => e(() =>
            import ("./newbie.none-672d4ef3.js"), []).then(t => t.default),
        "/terms/global/en-IN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-275530d3.js"), []).then(t => t.default),
        "/terms/global/en-US/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-c0e20b49.js"), []).then(t => t.default),
        "/terms/global/en-US/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-09d6189e.js"), []).then(t => t.default),
        "/terms/global/en-US/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-cb96a2e0.js"), []).then(t => t.default),
        "/terms/global/en-US/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-b0c2077a.js"), []).then(t => t.default),
        "/terms/global/en-US/newbie.none.html": () => e(() =>
            import ("./newbie.none-c8727464.js"), []).then(t => t.default),
        "/terms/global/en-US/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-a7ae2bb4.js"), []).then(t => t.default),
        "/terms/global/es-ES/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-0aa776a9.js"), []).then(t => t.default),
        "/terms/global/es-ES/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-3dea3ceb.js"), []).then(t => t.default),
        "/terms/global/es-ES/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-5dc1c08f.js"), []).then(t => t.default),
        "/terms/global/es-ES/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-d1a3a772.js"), []).then(t => t.default),
        "/terms/global/es-ES/newbie.none.html": () => e(() =>
            import ("./newbie.none-d35e8bc1.js"), []).then(t => t.default),
        "/terms/global/es-ES/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-03dae4c8.js"), []).then(t => t.default),
        "/terms/global/fa-IR/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-f209f6ab.js"), []).then(t => t.default),
        "/terms/global/fa-IR/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-1486a0ac.js"), []).then(t => t.default),
        "/terms/global/fa-IR/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-58d6661f.js"), []).then(t => t.default),
        "/terms/global/fa-IR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-c3dd6a24.js"), []).then(t => t.default),
        "/terms/global/fa-IR/newbie.none.html": () => e(() =>
            import ("./newbie.none-b746762b.js"), []).then(t => t.default),
        "/terms/global/fa-IR/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-3eb38d76.js"), []).then(t => t.default),
        "/terms/global/fi-FI/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-090bd461.js"), []).then(t => t.default),
        "/terms/global/fi-FI/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-9308ff3c.js"), []).then(t => t.default),
        "/terms/global/fi-FI/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-4653a59b.js"), []).then(t => t.default),
        "/terms/global/fi-FI/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-923add38.js"), []).then(t => t.default),
        "/terms/global/fi-FI/newbie.none.html": () => e(() =>
            import ("./newbie.none-35835c2a.js"), []).then(t => t.default),
        "/terms/global/fi-FI/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-12d7af57.js"), []).then(t => t.default),
        "/terms/global/fil-PH/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-4531138c.js"), []).then(t => t.default),
        "/terms/global/fil-PH/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-7bc08abc.js"), []).then(t => t.default),
        "/terms/global/fil-PH/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-1c749617.js"), []).then(t => t.default),
        "/terms/global/fil-PH/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-39bd8209.js"), []).then(t => t.default),
        "/terms/global/fil-PH/newbie.none.html": () => e(() =>
            import ("./newbie.none-a9582032.js"), []).then(t => t.default),
        "/terms/global/fil-PH/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-af6d73d4.js"), []).then(t => t.default),
        "/terms/global/fr-FR/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-604910e8.js"), []).then(t => t.default),
        "/terms/global/fr-FR/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-7ceca47a.js"), []).then(t => t.default),
        "/terms/global/fr-FR/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-226eed94.js"), []).then(t => t.default),
        "/terms/global/fr-FR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-d85c3c06.js"), []).then(t => t.default),
        "/terms/global/fr-FR/newbie.none.html": () => e(() =>
            import ("./newbie.none-617f91fa.js"), []).then(t => t.default),
        "/terms/global/fr-FR/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-cad0cf60.js"), []).then(t => t.default),
        "/terms/global/hi-IN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-0f2fd05e.js"), []).then(t => t.default),
        "/terms/global/hi-IN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-8242bc63.js"), []).then(t => t.default),
        "/terms/global/hi-IN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-74eb6867.js"), []).then(t => t.default),
        "/terms/global/hi-IN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-4ffe611a.js"), []).then(t => t.default),
        "/terms/global/hi-IN/newbie.none.html": () => e(() =>
            import ("./newbie.none-d87e89e1.js"), []).then(t => t.default),
        "/terms/global/hi-IN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-b29986cf.js"), []).then(t => t.default),
        "/terms/global/hy-AM/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-44d8ac8e.js"), []).then(t => t.default),
        "/terms/global/hy-AM/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-1e66b7f4.js"), []).then(t => t.default),
        "/terms/global/hy-AM/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-900fdfe2.js"), []).then(t => t.default),
        "/terms/global/hy-AM/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-d5293f4b.js"), []).then(t => t.default),
        "/terms/global/hy-AM/newbie.none.html": () => e(() =>
            import ("./newbie.none-1437acec.js"), []).then(t => t.default),
        "/terms/global/hy-AM/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-fb612b87.js"), []).then(t => t.default),
        "/terms/global/id-ID/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-833bd615.js"), []).then(t => t.default),
        "/terms/global/id-ID/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-d3b1354c.js"), []).then(t => t.default),
        "/terms/global/id-ID/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-c9313218.js"), []).then(t => t.default),
        "/terms/global/id-ID/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-8aad6e0c.js"), []).then(t => t.default),
        "/terms/global/id-ID/newbie.none.html": () => e(() =>
            import ("./newbie.none-34cea753.js"), []).then(t => t.default),
        "/terms/global/id-ID/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-77cbeeee.js"), []).then(t => t.default),
        "/terms/global/it-IT/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-6cbbcc22.js"), []).then(t => t.default),
        "/terms/global/it-IT/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-201ab085.js"), []).then(t => t.default),
        "/terms/global/it-IT/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-2c785931.js"), []).then(t => t.default),
        "/terms/global/it-IT/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-911a4bb7.js"), []).then(t => t.default),
        "/terms/global/it-IT/newbie.none.html": () => e(() =>
            import ("./newbie.none-ff98f42c.js"), []).then(t => t.default),
        "/terms/global/it-IT/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-23b43b3f.js"), []).then(t => t.default),
        "/terms/global/ja-JP/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-cfd3e205.js"), []).then(t => t.default),
        "/terms/global/ja-JP/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-372d6aeb.js"), []).then(t => t.default),
        "/terms/global/ja-JP/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-9894f20f.js"), []).then(t => t.default),
        "/terms/global/ja-JP/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-bdae4532.js"), []).then(t => t.default),
        "/terms/global/ja-JP/newbie.none.html": () => e(() =>
            import ("./newbie.none-23509451.js"), []).then(t => t.default),
        "/terms/global/ja-JP/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-d66cafe9.js"), []).then(t => t.default),
        "/terms/global/ko-KR/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-44032ff6.js"), []).then(t => t.default),
        "/terms/global/ko-KR/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-dbdc2df2.js"), []).then(t => t.default),
        "/terms/global/ko-KR/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-47b8a0ac.js"), []).then(t => t.default),
        "/terms/global/ko-KR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-8e033251.js"), []).then(t => t.default),
        "/terms/global/ko-KR/newbie.none.html": () => e(() =>
            import ("./newbie.none-17727c7c.js"), []).then(t => t.default),
        "/terms/global/ko-KR/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-ae9445c1.js"), []).then(t => t.default),
        "/terms/global/mr-IN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-1c05c936.js"), []).then(t => t.default),
        "/terms/global/mr-IN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-5d839357.js"), []).then(t => t.default),
        "/terms/global/mr-IN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-b159a7b1.js"), []).then(t => t.default),
        "/terms/global/mr-IN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-5e278ff5.js"), []).then(t => t.default),
        "/terms/global/mr-IN/newbie.none.html": () => e(() =>
            import ("./newbie.none-7c34b9b1.js"), []).then(t => t.default),
        "/terms/global/mr-IN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-2e990a04.js"), []).then(t => t.default),
        "/terms/global/ms-MY/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-99d39b3d.js"), []).then(t => t.default),
        "/terms/global/ms-MY/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-9e2627e6.js"), []).then(t => t.default),
        "/terms/global/ms-MY/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-8a946398.js"), []).then(t => t.default),
        "/terms/global/ms-MY/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-831e0d80.js"), []).then(t => t.default),
        "/terms/global/ms-MY/newbie.none.html": () => e(() =>
            import ("./newbie.none-a1766044.js"), []).then(t => t.default),
        "/terms/global/ms-MY/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-b8edd79f.js"), []).then(t => t.default),
        "/terms/global/my-MM/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-fc95fe21.js"), []).then(t => t.default),
        "/terms/global/my-MM/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-b0eb83f3.js"), []).then(t => t.default),
        "/terms/global/my-MM/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-e57c2e82.js"), []).then(t => t.default),
        "/terms/global/my-MM/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-0a8ceb0f.js"), []).then(t => t.default),
        "/terms/global/my-MM/newbie.none.html": () => e(() =>
            import ("./newbie.none-12172d33.js"), []).then(t => t.default),
        "/terms/global/my-MM/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-41011992.js"), []).then(t => t.default),
        "/terms/global/nl-NL/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-34a76850.js"), []).then(t => t.default),
        "/terms/global/nl-NL/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-4b46ea97.js"), []).then(t => t.default),
        "/terms/global/nl-NL/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-f95527c0.js"), []).then(t => t.default),
        "/terms/global/nl-NL/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-3dea88f0.js"), []).then(t => t.default),
        "/terms/global/nl-NL/newbie.none.html": () => e(() =>
            import ("./newbie.none-244efbb6.js"), []).then(t => t.default),
        "/terms/global/nl-NL/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-caf95880.js"), []).then(t => t.default),
        "/terms/global/pl-PL/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-9ef53729.js"), []).then(t => t.default),
        "/terms/global/pl-PL/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-8f7b7d42.js"), []).then(t => t.default),
        "/terms/global/pl-PL/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-ee076367.js"), []).then(t => t.default),
        "/terms/global/pl-PL/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-0b2110e0.js"), []).then(t => t.default),
        "/terms/global/pl-PL/newbie.none.html": () => e(() =>
            import ("./newbie.none-515ada9e.js"), []).then(t => t.default),
        "/terms/global/pl-PL/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-33f4b02b.js"), []).then(t => t.default),
        "/terms/global/pt-BR/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-86f40fbe.js"), []).then(t => t.default),
        "/terms/global/pt-BR/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-695dcb0b.js"), []).then(t => t.default),
        "/terms/global/pt-BR/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-aef7650e.js"), []).then(t => t.default),
        "/terms/global/pt-BR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-7d2c839f.js"), []).then(t => t.default),
        "/terms/global/pt-BR/newbie.none.html": () => e(() =>
            import ("./newbie.none-30fdd2f3.js"), []).then(t => t.default),
        "/terms/global/pt-BR/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-0ae3257b.js"), []).then(t => t.default),
        "/terms/global/ru-RU/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-343e48ad.js"), []).then(t => t.default),
        "/terms/global/ru-RU/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-53c5e9ff.js"), []).then(t => t.default),
        "/terms/global/ru-RU/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-e6f4af2a.js"), []).then(t => t.default),
        "/terms/global/ru-RU/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-36ef4eb4.js"), []).then(t => t.default),
        "/terms/global/ru-RU/newbie.none.html": () => e(() =>
            import ("./newbie.none-c96d5fda.js"), []).then(t => t.default),
        "/terms/global/ru-RU/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-576eba1e.js"), []).then(t => t.default),
        "/terms/global/ta-IN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-881836b8.js"), []).then(t => t.default),
        "/terms/global/ta-IN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-fe80335e.js"), []).then(t => t.default),
        "/terms/global/ta-IN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-d22e0cdb.js"), []).then(t => t.default),
        "/terms/global/ta-IN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-4601c24c.js"), []).then(t => t.default),
        "/terms/global/ta-IN/newbie.none.html": () => e(() =>
            import ("./newbie.none-a60fa4e6.js"), []).then(t => t.default),
        "/terms/global/ta-IN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-0a5ad834.js"), []).then(t => t.default),
        "/terms/global/te-IN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-33a87f30.js"), []).then(t => t.default),
        "/terms/global/te-IN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-16901420.js"), []).then(t => t.default),
        "/terms/global/te-IN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-653ab815.js"), []).then(t => t.default),
        "/terms/global/te-IN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-64a562ce.js"), []).then(t => t.default),
        "/terms/global/te-IN/newbie.none.html": () => e(() =>
            import ("./newbie.none-0db669d1.js"), []).then(t => t.default),
        "/terms/global/te-IN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-0db5a906.js"), []).then(t => t.default),
        "/terms/global/th-TH/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-c45390a7.js"), []).then(t => t.default),
        "/terms/global/th-TH/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-8d3c28ea.js"), []).then(t => t.default),
        "/terms/global/th-TH/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-8abd62ef.js"), []).then(t => t.default),
        "/terms/global/th-TH/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-0c3f4cd7.js"), []).then(t => t.default),
        "/terms/global/th-TH/newbie.none.html": () => e(() =>
            import ("./newbie.none-f6a668e6.js"), []).then(t => t.default),
        "/terms/global/th-TH/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-ce6c221c.js"), []).then(t => t.default),
        "/terms/global/tr-TR/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-fce09913.js"), []).then(t => t.default),
        "/terms/global/tr-TR/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-fba2275d.js"), []).then(t => t.default),
        "/terms/global/tr-TR/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-a854a836.js"), []).then(t => t.default),
        "/terms/global/tr-TR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-de29b364.js"), []).then(t => t.default),
        "/terms/global/tr-TR/newbie.none.html": () => e(() =>
            import ("./newbie.none-0fc9890b.js"), []).then(t => t.default),
        "/terms/global/tr-TR/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-83600bf7.js"), []).then(t => t.default),
        "/terms/global/uk-UA/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-3feb7ad1.js"), []).then(t => t.default),
        "/terms/global/uk-UA/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-9ab8896b.js"), []).then(t => t.default),
        "/terms/global/uk-UA/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-fb0d6ce6.js"), []).then(t => t.default),
        "/terms/global/uk-UA/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-0606ed01.js"), []).then(t => t.default),
        "/terms/global/uk-UA/newbie.none.html": () => e(() =>
            import ("./newbie.none-a91aa119.js"), []).then(t => t.default),
        "/terms/global/uk-UA/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-3acc41b5.js"), []).then(t => t.default),
        "/terms/global/ur-PK/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-08a98dcc.js"), []).then(t => t.default),
        "/terms/global/ur-PK/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-54966d61.js"), []).then(t => t.default),
        "/terms/global/ur-PK/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-6b5dd959.js"), []).then(t => t.default),
        "/terms/global/ur-PK/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-4709214b.js"), []).then(t => t.default),
        "/terms/global/ur-PK/newbie.none.html": () => e(() =>
            import ("./newbie.none-fab14c0c.js"), []).then(t => t.default),
        "/terms/global/ur-PK/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-1dd6638a.js"), []).then(t => t.default),
        "/terms/global/vi-VN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-2ad7331d.js"), []).then(t => t.default),
        "/terms/global/vi-VN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-5ac3c614.js"), []).then(t => t.default),
        "/terms/global/vi-VN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-8a85873c.js"), []).then(t => t.default),
        "/terms/global/vi-VN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-c6ac4606.js"), []).then(t => t.default),
        "/terms/global/vi-VN/newbie.none.html": () => e(() =>
            import ("./newbie.none-656b09a9.js"), []).then(t => t.default),
        "/terms/global/vi-VN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-d4992291.js"), []).then(t => t.default),
        "/terms/global/zh-CN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-333d8a03.js"), []).then(t => t.default),
        "/terms/global/zh-CN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-f02a03eb.js"), []).then(t => t.default),
        "/terms/global/zh-CN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-1285fcf9.js"), []).then(t => t.default),
        "/terms/global/zh-CN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-69d5d7b4.js"), []).then(t => t.default),
        "/terms/global/zh-CN/newbie.none.html": () => e(() =>
            import ("./newbie.none-7e4599e1.js"), []).then(t => t.default),
        "/terms/global/zh-CN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-8afa64d4.js"), []).then(t => t.default),
        "/terms/global/zh-TW/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-bad47a5c.js"), []).then(t => t.default),
        "/terms/global/zh-TW/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-c89198ea.js"), []).then(t => t.default),
        "/terms/global/zh-TW/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-00eb1583.js"), []).then(t => t.default),
        "/terms/global/zh-TW/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-a7c6afb3.js"), []).then(t => t.default),
        "/terms/global/zh-TW/newbie.none.html": () => e(() =>
            import ("./newbie.none-123b0b98.js"), []).then(t => t.default),
        "/terms/global/zh-TW/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-0169ea70.js"), []).then(t => t.default),
        "/terms/kr/en-US/daily.casino.html": () => e(() =>
            import ("./daily.casino-43c9e920.js"), []).then(t => t.default),
        "/terms/kr/en-US/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-342716f5.js"), []).then(t => t.default),
        "/terms/kr/ko-KR/daily.casino.html": () => e(() =>
            import ("./daily.casino-506d6182.js"), []).then(t => t.default),
        "/terms/kr/ko-KR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-a1cb8f58.js"), []).then(t => t.default),
        "/terms/vn/en-US/daily.casino.html": () => e(() =>
            import ("./daily.casino-d588885a.js"), []).then(t => t.default)
    }),
    bt = (t, r = "en-us", a = "global") => {
        const n = [`/terms/${a}/${r}/${t}.html`, `/terms/${a}/en-US/${t}.html`, `/terms/global/${r}/${t}.html`, `/terms/global/en-US/${t}.html`];
        debugger;
        for (const m of n) {
            const E = pt[m];
            if (E) return E()
        }
        return ""
    },
    ct = t => {
        const [r] = ot(() => [
            [t.region, t.termsName, y.lang].join("/")
        ], () => {
            debugger;
            const n = E => {
                var i, l;
                return (l = (i = U.langs[E]) == null ? void 0 : i[1]) != null ? l : E
            };
            return bt(t.termsName, n(y.lang), t.region)
        });

        function a(n, m, E) {
            var i, l, p;
            for (const [o, _] of Object.entries(m)) {
                if ((p = (l = (i = t.filters) == null ? void 0 : i.slots) == null ? void 0 : l.blacklist) != null && p.includes(o)) continue;
                const d = new RegExp(`__${o}__`, "g");
                n = n.replace(d, _)
            }
            for (const o of Object.keys(E)) {
                const _ = new RegExp(`{{\\s*${o}\\s*}}`, "g");
                n = n.replace(_, `<div id="${o}"></div>`)
            }
            return n
        }
        return D(_t, {
            get when() {
                return r()
            },
            children: n => (() => {
                var m = Et();
                return X(E => {
                    $(() => {
                        E.innerHTML = a(n(), "slots" in t ? t.slots : {}, "components" in t ? t.components : {}), $(() => {
                            console.log(n(), "data()", t.region, t.termsName)
                        }), C(() => {
                            E.innerHTML = ""
                        }), "components" in t && Object.entries(t.components).forEach(([i, l]) => {
                            var o, _, d;
                            if ((d = (_ = (o = t.filters) == null ? void 0 : o.components) == null ? void 0 : _.blacklist) != null && d.includes(i)) return;
                            const p = E.querySelector(`#${i}`);
                            if (p) {
                                const h = tt(l, p);
                                C(h)
                            }
                        }), "actions" in t && Object.entries(t.actions).forEach(([i, l]) => {
                            var o, _, d;
                            if ((d = (_ = (o = t.filters) == null ? void 0 : o.actions) == null ? void 0 : _.blacklist) != null && d.includes(i)) return;
                            const p = E.querySelector(`[data-bind-action="${i}"]`);
                            p && (console.log(p, "el"), p.addEventListener("click", l), C(() => {
                                p.removeEventListener("click", l)
                            }))
                        })
                    })
                }, m), m
            })()
        })
    };
var P = A("<div>"),
    Y = A("<span>__index__"),
    j = A('<span class="pl-1 font-extrabold text-brand">__percentage__'),
    Dt = A('<span class="pl-1 font-extrabold text-brand">__registrationPercentage__'),
    q = A("<span>__bonusAmount__"),
    ft = A("<li>");
const v = t => {
        const r = () => t.bonusList.length % 2 === 1;
        return (() => {
            var a = P();
            return R(a, D(B, {
                get each() {
                    return t.bonusList
                },
                children: n => D(ht, {
                    get layout() {
                        return r() ? "horizontal" : "vertical"
                    },
                    get type() {
                        return n.selectedBonusType
                    },
                    get ratio() {
                        return n.bonusRatio
                    },
                    get freeBet() {
                        return n.freeBet
                    },
                    get freeSpin() {
                        return n.freeSpin
                    },
                    get minDeposit() {
                        return n.minDeposit
                    },
                    get minDepositCurrency() {
                        return n.currency
                    },
                    get sequence() {
                        return n.seq
                    }
                })
            })), J(n => {
                var m = w("mb-4 mt-2 grid gap-2", r() ? "" : "grid-cols-2"),
                    E = r() ? {} : {
                        "grid-auto-rows": "minmax(8rem, 1fr)"
                    };
                return m !== n.e && M(a, n.e = m), n.t = et(a, E, n.t), n
            }, {
                e: void 0,
                t: void 0
            }), a
        })()
    },
    V = () => {
        const {
            isMxHost: t
        } = nt.getHostType(U.host);
        return t ? `PRODUCCIONES MÓVILES S.A. DE C.V., PERMISIONARIA EN MATERIA DE JUEGOS Y SORTEOS CONFORME AL PERMISO DGAJS/SCEVF/P-06/2005-TER Y AL
  OFICIO DE AUTORIZACIÓN DGJS/ 1670 /2025 DE LA PROMOCIÓN: BONO POR DEPÓSITO. LA VIGENCIA DE LA AUTORIZACIÓN ES HASTA EL 31 DE
  DICIEMBRE DE 2025. LA PROMOCIÓN ES PERSONAL E INTRANSFERIBLE. JUEGUE RESPONSABLEMENTE. RECUERDE QUE EL PRINCIPAL PROPÓSITO ES EL
  ENTRETENIMIENTO, LA DIVERSIÓN Y EL ESPARCIMIENTO. JUEGOS PROHIBIDOS PARA MENORES DE EDAD` : ""
    },
    O = () => {
        st()
    },
    Vt = t => {
        const r = lt({
                region: "global"
            }, t),
            [a] = at.useDepositTerms(),
            n = S(() => {
                const i = a(),
                    l = U.host.toUpperCase();
                return {
                    kr: {
                        "newbie.casino": () => {
                            const o = g(i, "KR-NEWBIE", 1),
                                _ = T(i, "KR-NEWBIE", "casino");
                            return {
                                actions: {
                                    popUpGameNameList: O
                                },
                                components: {
                                    bonusStructureImg: () => D(v, {
                                        bonusList: _
                                    })
                                },
                                slots: {
                                    domain: l,
                                    firstBonusRate: new s(o.bonusRatio).mul(100).toFixed(0) + "%",
                                    firstMinDepositAmount: u.printCurrency(new s(o.minDeposit), o.currency, {
                                        target: "KRWFIAT"
                                    }),
                                    firstMaxBonusAmount: u.printCurrency(new s(o.maxBonus), o.currency, {
                                        target: "KRWFIAT"
                                    })
                                }
                            }
                        },
                        "daily.casino": () => {
                            const o = g(i, "KR-DAILY", 1),
                                _ = g(i, "KR-DAILY", 2),
                                d = T(i, "KR-DAILY", "casino");
                            return {
                                actions: {
                                    popUpGameNameList: O
                                },
                                components: {
                                    bonusStructureImg: () => D(v, {
                                        bonusList: d
                                    })
                                },
                                slots: {
                                    firstMinDepositAmount: u.printCurrency(new s(o.minDeposit), o.currency, {
                                        target: "KRWFIAT"
                                    }),
                                    firstBonusPercentage: new s(o.bonusRatio).mul(100).toFixed(0) + "%",
                                    firstMaxBonusAmount: u.printCurrency(new s(o.maxBonus), o.currency, {
                                        target: "KRWFIAT"
                                    }),
                                    secondMinDepositAmount: u.printCurrency(new s(_.minDeposit), _.currency, {
                                        target: "KRWFIAT"
                                    }),
                                    secondBonusPercentage: new s(_.bonusRatio).mul(100).toFixed(0) + "%",
                                    secondMaxBonusAmount: u.printCurrency(new s(_.maxBonus), _.currency, {
                                        target: "KRWFIAT"
                                    })
                                }
                            }
                        }
                    },
                    vn: {
                        "daily.casino": () => {
                            const o = g(i, "VN-DAILY", 1),
                                _ = g(i, "VN-DAILY", 2),
                                d = T(i, "VN-DAILY", "casino");
                            return {
                                actions: {
                                    popUpGameNameList: O
                                },
                                components: {
                                    bonusStructureImg: () => D(v, {
                                        bonusList: d
                                    })
                                },
                                slots: {
                                    domain: l,
                                    firstMinDeposit: u.printCurrency(new s(o.minDeposit), o.currency, {
                                        target: "VNDFIAT"
                                    }),
                                    firstBonusRate: new s(o.bonusRatio).mul(100).toFixed(0) + "%",
                                    firstMaximumBonusAmount: u.printCurrency(new s(o.maxBonus), o.currency, {
                                        target: "VNDFIAT"
                                    }),
                                    secondMinDeposit: u.printCurrency(new s(_.minDeposit), _.currency, {
                                        target: "VNDFIAT"
                                    }),
                                    secondBonusRate: new s(_.bonusRatio).mul(100).toFixed(0) + "%",
                                    secondMaximumBonusAmount: u.printCurrency(new s(_.maxBonus), _.currency, {
                                        target: "VNDFIAT"
                                    })
                                }
                            }
                        }
                    },
                    global: {
                        invitationBonus: () => {
                            const o = mt(),
                                _ = () => {
                                    var h, c;
                                    return (c = (h = o()) == null ? void 0 : h[0]) != null ? c : {
                                        depositLimitDay: 0,
                                        bonusPercentage: 0,
                                        minDeposit: 0,
                                        maxDeposit: 0,
                                        maxWithdrawal: 0,
                                        rolloverTimes: 0,
                                        claimLimitDay: 0,
                                        currency: "USDFIAT"
                                    }
                                },
                                d = () => {
                                    var h;
                                    return (h = _().currency) != null ? h : "USDFIAT"
                                };
                            return {
                                actions: {},
                                components: {},
                                slots: {
                                    domain: l,
                                    eventDuration: _().depositLimitDay.toString(),
                                    bonusAmount: _().bonusPercentage + "%",
                                    minimumDeposit: u.printCurrency(new s(_().minDeposit), d()),
                                    maximumDeposit: u.printCurrency(new s(_().maxDeposit), d()),
                                    maximumCashOut: u.printCurrency(new s(_().maxWithdrawal), d()),
                                    wagerTimes: _().rolloverTimes.toString(),
                                    claimLimitDay: _().claimLimitDay.toString()
                                }
                            }
                        },
                        monthlyDeposit: () => {
                            const o = T(i, "MONTHLY").slice(1);
                            return {
                                actions: {},
                                components: {
                                    bonusStructureImg: () => D(v, {
                                        bonusList: o
                                    }),
                                    bonusStructure: () => {
                                        const _ = () => T(i, "MONTHLY")[0].bonusRatio * 100,
                                            d = () => D(B, {
                                                each: o,
                                                children: (h, c) => {
                                                    const f = () => {
                                                        switch (c()) {
                                                            case 0:
                                                                return I("first");
                                                            case 1:
                                                                return I("second");
                                                            case 2:
                                                                return I("third");
                                                            case 3:
                                                                return I("fourth");
                                                            default:
                                                                return I("unknown")
                                                        }
                                                    };
                                                    return (() => {
                                                        var b = ft();
                                                        return R(b, D(rt, {
                                                            get when() {
                                                                return c() === 0
                                                            },
                                                            get fallback() {
                                                                return D(k, {
                                                                    get index() {
                                                                        return f()
                                                                    },
                                                                    get percentage() {
                                                                        return h.bonusRatio * 100 + "%"
                                                                    },
                                                                    get bonusAmount() {
                                                                        return u.toFiatStr(new s(h.maxBonus), "USDFIAT", y.lang)
                                                                    },
                                                                    i18nKey: "bonus.welecome.newtext.desc5",
                                                                    get children() {
                                                                        return ["The ", Y(), " deposit earns you", j(), ", up to a maximum of", " ", q(), " or an equivalent amount in other currencies."]
                                                                    }
                                                                })
                                                            },
                                                            get children() {
                                                                return D(k, {
                                                                    get index() {
                                                                        return f()
                                                                    },
                                                                    get percentage() {
                                                                        return h.bonusRatio * 100 + "%"
                                                                    },
                                                                    get bonusAmount() {
                                                                        return u.toFiatStr(new s(h.maxBonus), "USDFIAT", y.lang)
                                                                    },
                                                                    get registrationPercentage() {
                                                                        return _() + "%"
                                                                    },
                                                                    i18nKey: "bonus.welecome.newtext.desc6",
                                                                    get children() {
                                                                        return ["The ", Y(), " deposit earns you", j(), "(or", Dt(), "for new registrations within 7 minutes), up to a maximum of", q(), " or an equivalent amount in other currencies."]
                                                                    }
                                                                })
                                                            }
                                                        })), b
                                                    })()
                                                }
                                            });
                                        return (() => {
                                            var h = P();
                                            return R(h, d), h
                                        })()
                                    }
                                },
                                slots: {
                                    domain: l,
                                    extraFooter: V()
                                }
                            }
                        },
                        inrCompensation: () => ({
                            actions: {
                                popUpGameNameList: O
                            },
                            components: {},
                            slots: {
                                domain: l,
                                wagerTimes: "25"
                            }
                        }),
                        "newbie.casino": () => {
                            var o, _, d;
                            return {
                                actions: {
                                    popUpGameNameList: O
                                },
                                components: {
                                    bonusStructure: () => {
                                        const h = T(i, "COMMON-NEWBIE", "casino").map((c, f) => I("__sequence__ Deposit Bonus: __rate__ match bonus up to __amount__ + __freeSpin__ Free Spins.", {
                                            sequence: x(f + 1),
                                            rate: c.bonusRatio * 100 + "%",
                                            amount: u.printCurrency(new s(c.maxBonus), c.currency),
                                            freeSpin: c.freeSpin
                                        }));
                                        return (() => {
                                            var c = P();
                                            return R(c, D(B, {
                                                each: h,
                                                children: f => (() => {
                                                    var b = P();
                                                    return R(b, f), b
                                                })()
                                            })), c
                                        })()
                                    },
                                    bonusStructureImg: () => {
                                        const h = T(i, "COMMON-NEWBIE", "casino");
                                        return D(v, {
                                            bonusList: h
                                        })
                                    }
                                },
                                slots: {
                                    extraFooter: V(),
                                    domain: l,
                                    minDepositAmount1: u.printCurrency(new s(g(i, "COMMON-NEWBIE", 1, "casino").minDeposit), "USDFIAT"),
                                    minDepositAmount2: u.printCurrency(new s(g(i, "COMMON-NEWBIE", 2, "casino").minDeposit), "USDFIAT"),
                                    minDepositAmount3: u.printCurrency(new s(g(i, "COMMON-NEWBIE", 3, "casino").minDeposit), "USDFIAT"),
                                    minDepositAmount4: u.printCurrency(new s(g(i, "COMMON-NEWBIE", 4, "casino").minDeposit), "USDFIAT"),
                                    wagerTimes: (d = (_ = (o = H(i, "COMMON-NEWBIE")) == null ? void 0 : o.bonusWagerTimes) == null ? void 0 : _.toString()) != null ? d : "0",
                                    maximumWithdrawAmount: u.printCurrency(new s(i.newUserBonusTerm.freeSpinMaxWinnings))
                                }
                            }
                        },
                        "newbie.sport": () => {
                            var _, d, h;
                            const o = T(i, "COMMON-NEWBIE", "sport");
                            return {
                                actions: {
                                    popUpGameNameList: O
                                },
                                components: {
                                    bonusStructure: () => {
                                        const c = T(i, "COMMON-NEWBIE", "sport").map((f, b) => I("__sequence__ Deposit Bonus: __rate__ match bonus up to __amount__ + __freeBet__ Free Bets.", {
                                            sequence: x(b + 1),
                                            rate: f.bonusRatio * 100 + "%",
                                            freeBet: f.freeBet,
                                            amount: u.printCurrency(new s(f.maxBonus), f.currency)
                                        }));
                                        return D(B, {
                                            each: c,
                                            children: f => (() => {
                                                var b = P();
                                                return R(b, f), b
                                            })()
                                        })
                                    },
                                    bonusStructureImg: () => (console.log(o, "bonusList", "sport"), D(v, {
                                        bonusList: o
                                    }))
                                },
                                slots: {
                                    domain: l,
                                    extraFooter: V(),
                                    minDepositAmount1: u.printCurrency(new s(g(i, "COMMON-NEWBIE", 1, "sport").minDeposit), "USDFIAT"),
                                    minDepositAmount2: u.printCurrency(new s(g(i, "COMMON-NEWBIE", 2, "sport").minDeposit), "USDFIAT"),
                                    minDepositAmount3: u.printCurrency(new s(g(i, "COMMON-NEWBIE", 3, "sport").minDeposit), "USDFIAT"),
                                    minDepositAmount4: u.printCurrency(new s(g(i, "COMMON-NEWBIE", 4, "sport").minDeposit), "USDFIAT"),
                                    wagerTimes: (h = (d = (_ = H(i, "COMMON-NEWBIE")) == null ? void 0 : _.bonusWagerTimes) == null ? void 0 : d.toString()) != null ? h : "0"
                                }
                            }
                        },
                        "newbie.none": () => ({
                            actions: {},
                            components: {},
                            slots: {
                                domain: l,
                                extraFooter: V(),
                                freeSpinWagerTimes: i.newUserBonusTerm.freeSpinWagerTimes.toString(),
                                maximumWinning: i.newUserBonusTerm.freeSpinMaxWinnings.toString(),
                                totalWinnings: u.printCurrency(new s(i.newUserBonusTerm.freeSpinMaxWinnings * 3))
                            }
                        })
                    }
                }
            }),
            m = S(() => {
                if (r.region) {
                    const p = n()[r.region];
                    if (r.termsName in p) {
                        const o = r.termsName;
                        return p[o]()
                    }
                }
                const i = n().global,
                    l = r.termsName;
                return i[l]()
            }),
            E = S(() => {
                debugger;
                return Object.assign(m(), "slots" in r ? {
                    slots: r.slots
                } : {}, "components" in r ? {
                    components: r.components
                } : {}, "actions" in r ? {
                    actions: r.actions
                } : {})
            });
        return D(ct, z({
            get region() {
                return r.region
            },
            get termsName() {
                return r.termsName
            },
            get filters() {
                return r.filters
            }
        }, E))
    };
export {
    Vt as T, ut as d
};