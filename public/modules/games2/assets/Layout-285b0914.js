var ze = Object.defineProperty;
var se = Object.getOwnPropertySymbols;
var He = Object.prototype.hasOwnProperty,
    Ne = Object.prototype.propertyIsEnumerable;
var ne = (a, t, r) => t in a ? ze(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[t] = r,
    oe = (a, t) => {
        for (var r in t || (t = {})) He.call(t, r) && ne(a, r, t[r]);
        if (se)
            for (var r of se(t)) Ne.call(t, r) && ne(a, r, t[r]);
        return a
    };
var S = (a, t, r) => new Promise((l, c) => {
    var i = s => {
            try {
                n(r.next(s))
            } catch (d) {
                c(d)
            }
        },
        h = s => {
            try {
                n(r.throw(s))
            } catch (d) {
                c(d)
            }
        },
        n = s => s.done ? l(s.value) : Promise.resolve(s.value).then(i, h);
    n((r = r.apply(a, t)).next())
});
import {
    _ as p,
    W as U,
    A as f,
    x as $,
    z as Ce,
    X as _e,
    Y as B,
    n as e,
    Z as I,
    f as ee,
    o as xe,
    $ as Ze,
    c as A,
    m as R,
    q as k,
    a0 as we,
    e as J,
    b as Z,
    a1 as M,
    r as V,
    v as o,
    C as ke,
    t as G,
    a2 as We,
    a3 as D,
    S as L,
    a4 as Le,
    L as Ee,
    N as $e,
    H as E,
    k as K,
    a5 as Re,
    y as W,
    D as de,
    a as De,
    a6 as Be,
    I as Ge,
    B as X,
    a7 as Ve,
    O as Ke,
    a8 as Ye,
    i as Xe,
    p as ue,
    U as Je,
    a9 as Qe
} from "./manifest-47857305.js";
import {
    b as T
} from "./router-5b68e988.js";
import {
    L as ce
} from "./LayoutTitle-d8bcb7bb.js";
import {
    u as Ie,
    a as e1,
    b as a1,
    S as ge,
    c as t1,
    d as r1,
    M as i1,
    e as l1,
    N as s1,
    H as n1,
    f as o1,
    G as d1
} from "./game-434e4797.js";
import {
    S as Pe
} from "./SingleBigArrow-9c798a86.js";
import {
    t as m
} from "./i18n-db65699e.js";
import {
    c as u1,
    S as j,
    u as c1
} from "./SA27V5YJ-37d7d126.js";
import {
    c as g1
} from "./utils-65805dbc.js";
import {
    c as m1
} from "./LR7LBJN3-81373dd7.js";
import {
    _ as p1,
    P as F,
    m as Se,
    a as h1,
    b as b1,
    d as f1
} from "./index-d927a8db.js";
import v1 from "./index-9e40dbc5.js";
import {
    T as y1,
    a as C1,
    b as me,
    c as q,
    d as _1,
    e as z
} from "./table-ac94fdd5.js";
import {
    I as x1
} from "./ImgShareSignal-661869e0.js";
const H = {
    "classic-dice": () => p(() =>
        import ("./index-27b3af59.js"), ["assets/index-27b3af59.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/number-field-6c429107.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/Counter-311cdbfb.js", "assets/animate.es-7d48ea54.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/SingleBetButton-caa22bad.js", "assets/WinAmount-ec2cc374.js", "assets/payout-62dd0e57.js", "assets/game-6f69c2d8.js", "assets/auto-play-9294ef3a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/insure-log-6d698131.js", "assets/Sound-d06dcc5e.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/use-game-strategy-cf8e25a4.js", "assets/RequireLogin-f4756d99.js", "assets/enc-utf8-da19c839.js", "assets/index-66592859.js", "assets/Result-77bd7a99.js", "assets/Chance-e83d33cb.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    baccarat: () => p(() =>
        import ("./index-b699c3e2.js"), ["assets/index-b699c3e2.js", "assets/manifest-47857305.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/deduction-557ca514.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/SingleBigArrow-9c798a86.js", "assets/use-coin-format-283b73dd.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/Sound-d06dcc5e.js", "assets/game-6f69c2d8.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/auto-play-9294ef3a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/AutoBetControls-bd9ada22.js", "assets/GameCard-dfe03bf0.js", "assets/index-e0754325.js", "assets/Chip-f2c814c9.js", "assets/Poker-8f5e923e.js", "assets/index-86694002.js", "assets/index-d125ec55.css", "assets/insure-log-6d698131.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    coinflip: () => p(() =>
        import ("./index-e9863739.js"), ["assets/index-e9863739.js", "assets/manifest-47857305.js", "assets/Banner-3c643e80.js", "assets/LiveStats-fc71345c.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-db65699e.js", "assets/amount-641aafec.js", "assets/router-5b68e988.js", "assets/utils-65805dbc.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/SA27V5YJ-37d7d126.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/GameBankrollHelp-02086164.js", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/multi-stage-game-6e93065e.js", "assets/turbo-18b17864.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/last-0ddf2762.js", "assets/animate.es-7d48ea54.js", "assets/index-0e82f4b6.js", "assets/clamp-f5b668c4.js", "assets/Sound-d06dcc5e.js", "assets/game-6f69c2d8.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    crash: () => p(() =>
        import ("./index-2edad81b.js"), ["assets/index-2edad81b.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/Game-b1f3d569.js", "assets/sha256-32c902c2.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/config-66839ee1.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/GameScript-89bf5392.js", "assets/enc-utf8-da19c839.js", "assets/Message-f1b40bc8.js", "assets/events-f4825f17.js", "assets/Sound-d06dcc5e.js", "assets/GameBankrollHelp-02086164.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/GameUserScript-85488d65.js", "assets/payout-62dd0e57.js", "assets/game-6f69c2d8.js", "assets/RequireLogin-f4756d99.js", "assets/SingleBetButton-caa22bad.js", "assets/MultiLogs-67131c89.js", "assets/MoreLessBtn-02a1052d.js", "assets/TextOverflow-b09a60d3.js", "assets/index-66592859.js", "assets/Trends-fdd6a443.js", "assets/profit_line_light-69c485d1.js", "assets/throttleTime-1365502d.js", "assets/SpineAnimationPlayer-60277474.js", "assets/Guide-52f42359.js", "assets/LabelWithTooltip-4f664ae2.js", "assets/tooltip-1996889f.js", "assets/Tag-69457acc.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/Result-77bd7a99.js", "assets/Chance-e83d33cb.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    wheel: () => p(() =>
        import ("./index-9d377254.js"), ["assets/index-9d377254.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/number-field-6c429107.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/SingleBetButton-caa22bad.js", "assets/auto-play-9294ef3a.js", "assets/game-6f69c2d8.js", "assets/_isIterateeCall-51b0e95f.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/Sound-d06dcc5e.js", "assets/index-e0754325.js", "assets/last-0ddf2762.js", "assets/PixiApp-67480e66.js", "assets/isEqual-d70345ee.js", "assets/WinAmount-ec2cc374.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    double: () => p(() =>
        import ("./index-41e10b3f.js"), ["assets/index-41e10b3f.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/sha256-32c902c2.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/config-66839ee1.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/Sound-d06dcc5e.js", "assets/GameBankrollHelp-02086164.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/Banner-3c643e80.js", "assets/toggle-group-0626cc41.js", "assets/MoreLessBtn-02a1052d.js", "assets/sortBy-5975182a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/SingleBetButton-caa22bad.js", "assets/MultiLogs-67131c89.js", "assets/TextOverflow-b09a60d3.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/Trends-fdd6a443.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    hilo: () => p(() =>
        import ("./index-7fb30b18.js"), ["assets/index-7fb30b18.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/deduction-557ca514.js", "assets/amount-641aafec.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/SingleBigArrow-9c798a86.js", "assets/use-coin-format-283b73dd.js", "assets/Banner-3c643e80.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/GameBankrollHelp-02086164.js", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/multi-stage-game-6e93065e.js", "assets/turbo-18b17864.js", "assets/Sound-d06dcc5e.js", "assets/game-6f69c2d8.js", "assets/Poker-8f5e923e.js", "assets/animate.es-7d48ea54.js", "assets/last-0ddf2762.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    keno: () => p(() =>
        import ("./index-bea9a61d.js"), ["assets/index-bea9a61d.js", "assets/manifest-47857305.js", "assets/GameBankrollHelp-02086164.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/SingleBetButton-caa22bad.js", "assets/auto-play-9294ef3a.js", "assets/game-6f69c2d8.js", "assets/_isIterateeCall-51b0e95f.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/payouts-a8073d7f.js", "assets/insure-log-6d698131.js", "assets/Sound-d06dcc5e.js", "assets/isNull-df6b0e11.js", "assets/Autopick-9f6b26da.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    limbo: () => p(() =>
        import ("./index-8bd55878.js"), ["assets/index-8bd55878.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/deduction-557ca514.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/SingleBigArrow-9c798a86.js", "assets/use-coin-format-283b73dd.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/Sound-d06dcc5e.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/auto-play-9294ef3a.js", "assets/game-6f69c2d8.js", "assets/_isIterateeCall-51b0e95f.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/insure-log-6d698131.js", "assets/index-0e82f4b6.js", "assets/clamp-f5b668c4.js", "assets/animate.es-7d48ea54.js", "assets/steps-7e299bb9.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/use-game-strategy-cf8e25a4.js", "assets/RequireLogin-f4756d99.js", "assets/enc-utf8-da19c839.js", "assets/index-66592859.js", "assets/payout-62dd0e57.js", "assets/Result-77bd7a99.js", "assets/Chance-e83d33cb.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    mines: () => p(() =>
        import ("./index-4c117ae7.js"), ["assets/index-4c117ae7.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/number-field-6c429107.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/SingleBetButton-caa22bad.js", "assets/auto-play-9294ef3a.js", "assets/game-6f69c2d8.js", "assets/_isIterateeCall-51b0e95f.js", "assets/multi-stage-game-6e93065e.js", "assets/turbo-18b17864.js", "assets/tooltip-1996889f.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/animate.es-7d48ea54.js", "assets/steps-7e299bb9.js", "assets/clamp-f5b668c4.js", "assets/Sound-d06dcc5e.js", "assets/Autopick-9f6b26da.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/last-0ddf2762.js", "assets/groupBy-1002256c.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    parity: () => p(() =>
        import ("./index-62fb4494.js"), ["assets/index-62fb4494.js", "assets/manifest-47857305.js", "assets/deduction-557ca514.js", "assets/amount-641aafec.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/SingleBigArrow-9c798a86.js", "assets/use-coin-format-283b73dd.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/MultiLogs-67131c89.js", "assets/MoreLessBtn-02a1052d.js", "assets/TextOverflow-b09a60d3.js", "assets/sha256-32c902c2.js", "assets/Sound-d06dcc5e.js", "assets/get-number-amount-ca766975.js", "assets/throttleTime-1365502d.js", "assets/maxBy-73748eba.js", "assets/profit_line_light-69c485d1.js", "assets/index-86694002.js", "assets/index-d125ec55.css", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/SingleBetButton-caa22bad.js", "assets/Trends-fdd6a443.js", "assets/Result-77bd7a99.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    plinko: () => p(() =>
        import ("./index-2df3dee6.js"), ["assets/index-2df3dee6.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/number-field-6c429107.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/SingleBetButton-caa22bad.js", "assets/auto-play-9294ef3a.js", "assets/game-6f69c2d8.js", "assets/_isIterateeCall-51b0e95f.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/Sound-d06dcc5e.js", "assets/events-f4825f17.js", "assets/PixiApp-67480e66.js", "assets/pixi-particles.es-45623f22.js", "assets/index-e0754325.js", "assets/isEqual-d70345ee.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/use-game-strategy-cf8e25a4.js", "assets/RequireLogin-f4756d99.js", "assets/enc-utf8-da19c839.js", "assets/index-66592859.js", "assets/delay-797774c8.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js", "assets/index-0598ff4a.css"]),
    color: () => p(() =>
        import ("./index-42b9b3b6.js"), ["assets/index-42b9b3b6.js", "assets/manifest-47857305.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/GameBankrollHelp-02086164.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/Sound-d06dcc5e.js", "assets/game-6f69c2d8.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/auto-play-9294ef3a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/AutoBetControls-bd9ada22.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/WebGL-de4c09c8.js", "assets/SpineAnimationPlayer-60277474.js", "assets/index-86694002.js", "assets/index-d125ec55.css", "assets/Banner-3c643e80.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    cave: () => p(() =>
        import ("./index-18bbdf8e.js"), ["assets/index-18bbdf8e.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/deduction-557ca514.js", "assets/amount-641aafec.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/SingleBigArrow-9c798a86.js", "assets/use-coin-format-283b73dd.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/multi-stage-game-6e93065e.js", "assets/turbo-18b17864.js", "assets/game-6f69c2d8.js", "assets/PixiApp-67480e66.js", "assets/pixi-particles.es-45623f22.js", "assets/index-ed0cfc32.js", "assets/GameCard-dfe03bf0.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/auto-play-9294ef3a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/AutoBetControls-bd9ada22.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    jade: () => p(() =>
        import ("./index-924321a1.js"), ["assets/index-924321a1.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/user-20d68319.js", "assets/deduction-557ca514.js", "assets/amount-641aafec.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/SingleBigArrow-9c798a86.js", "assets/use-coin-format-283b73dd.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/Sound-d06dcc5e.js", "assets/game-6f69c2d8.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/auto-play-9294ef3a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/AutoBetControls-bd9ada22.js", "assets/SpineAnimationPlayer-60277474.js", "assets/animate.es-7d48ea54.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/Banner-3c643e80.js", "assets/delay-797774c8.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    roulette: () => p(() =>
        import ("./index-50ca82a3.js"), ["assets/index-50ca82a3.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/GameBankrollHelp-02086164.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/Sound-d06dcc5e.js", "assets/game-6f69c2d8.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/Payouts-ce621817.js", "assets/Chip-f2c814c9.js", "assets/auto-play-9294ef3a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js", "assets/index-87c619e0.css"]),
    "stellar-rush": () => p(() =>
        import ("./index-4f49e415.js"), ["assets/index-4f49e415.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/number-field-6c429107.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/SingleBetButton-caa22bad.js", "assets/auto-play-9294ef3a.js", "assets/game-6f69c2d8.js", "assets/_isIterateeCall-51b0e95f.js", "assets/multi-stage-game-6e93065e.js", "assets/turbo-18b17864.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/Sound-d06dcc5e.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/index-ed0cfc32.js", "assets/animate.es-7d48ea54.js", "assets/delay-797774c8.js", "assets/last-0ddf2762.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js", "assets/index-7d9034d1.css"]),
    RouletteSingle: () => p(() =>
        import ("./index-50ca82a3.js"), ["assets/index-50ca82a3.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/GameBankrollHelp-02086164.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/Sound-d06dcc5e.js", "assets/game-6f69c2d8.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/Payouts-ce621817.js", "assets/Chip-f2c814c9.js", "assets/auto-play-9294ef3a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js", "assets/index-87c619e0.css"]),
    twist: () => p(() =>
        import ("./index-a3f56c61.js"), ["assets/index-a3f56c61.js", "assets/manifest-47857305.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/deduction-557ca514.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/SingleBigArrow-9c798a86.js", "assets/use-coin-format-283b73dd.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/Sound-d06dcc5e.js", "assets/game-6f69c2d8.js", "assets/Banner-3c643e80.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/WinAmount-ec2cc374.js", "assets/animate.es-7d48ea54.js", "assets/multi-stage-game-6e93065e.js", "assets/turbo-18b17864.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    fastparity: () => p(() =>
        import ("./index-62fb4494.js"), ["assets/index-62fb4494.js", "assets/manifest-47857305.js", "assets/deduction-557ca514.js", "assets/amount-641aafec.js", "assets/_commonjsHelpers-0f403cef.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/slider-6dd1aa49.js", "assets/E53DB7BS-c94cf300.js", "assets/SingleBigArrow-9c798a86.js", "assets/use-coin-format-283b73dd.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/MultiLogs-67131c89.js", "assets/MoreLessBtn-02a1052d.js", "assets/TextOverflow-b09a60d3.js", "assets/sha256-32c902c2.js", "assets/Sound-d06dcc5e.js", "assets/get-number-amount-ca766975.js", "assets/throttleTime-1365502d.js", "assets/maxBy-73748eba.js", "assets/profit_line_light-69c485d1.js", "assets/index-86694002.js", "assets/index-d125ec55.css", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/SingleBetButton-caa22bad.js", "assets/Trends-fdd6a443.js", "assets/Result-77bd7a99.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "hash-dice": () => p(() =>
        import ("./index-eb0aaf3a.js"), ["assets/index-eb0aaf3a.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/GameBankrollHelp-02086164.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/SingleBetButton-caa22bad.js", "assets/game-6f69c2d8.js", "assets/auto-play-9294ef3a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/Sound-d06dcc5e.js", "assets/GameScript-89bf5392.js", "assets/enc-utf8-da19c839.js", "assets/Message-f1b40bc8.js", "assets/events-f4825f17.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/GameUserScript-85488d65.js", "assets/payout-62dd0e57.js", "assets/RequireLogin-f4756d99.js", "assets/Result-77bd7a99.js", "assets/Chance-e83d33cb.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "keno-multiplayer": () => p(() =>
        import ("./index-216c3f30.js"), ["assets/index-216c3f30.js", "assets/manifest-47857305.js", "assets/user-20d68319.js", "assets/sha256-32c902c2.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/payouts-a8073d7f.js", "assets/Sound-d06dcc5e.js", "assets/GameBankrollHelp-02086164.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/Banner-3c643e80.js", "assets/isNull-df6b0e11.js", "assets/MultiLogs-67131c89.js", "assets/MoreLessBtn-02a1052d.js", "assets/TextOverflow-b09a60d3.js", "assets/AutoBetControls-bd9ada22.js", "assets/Autopick-9f6b26da.js", "assets/get-number-amount-ca766975.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/SingleBetButton-caa22bad.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "ring-of-fortune": () => p(() =>
        import ("./index-cef14885.js"), ["assets/index-cef14885.js", "assets/manifest-47857305.js", "assets/i18n-db65699e.js", "assets/user-20d68319.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/GameBankrollHelp-02086164.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/Sound-d06dcc5e.js", "assets/game-6f69c2d8.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/auto-play-9294ef3a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/AutoBetControls-bd9ada22.js", "assets/insure-log-6d698131.js", "assets/index-0e82f4b6.js", "assets/clamp-f5b668c4.js", "assets/animate.es-7d48ea54.js", "assets/index.es-7f7492fe.js", "assets/delay-797774c8.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "tower-legend": () => p(() =>
        import ("./index-29c1d076.js"), ["assets/index-29c1d076.js", "assets/manifest-47857305.js", "assets/GameBankrollHelp-02086164.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/SingleBetButton-caa22bad.js", "assets/auto-play-9294ef3a.js", "assets/game-6f69c2d8.js", "assets/_isIterateeCall-51b0e95f.js", "assets/multi-stage-game-6e93065e.js", "assets/turbo-18b17864.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/Sound-d06dcc5e.js", "assets/last-0ddf2762.js", "assets/animate.es-7d48ea54.js", "assets/steps-7e299bb9.js", "assets/clamp-f5b668c4.js", "assets/radio-group-df2381cd.js", "assets/toggle-group-0626cc41.js", "assets/isNull-df6b0e11.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "ultimate-dice": () => p(() =>
        import ("./index-ddd86a76.js"), ["assets/index-ddd86a76.js", "assets/manifest-47857305.js", "assets/number-field-6c429107.js", "assets/utils-65805dbc.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/radio-group-df2381cd.js", "assets/GameBankrollHelp-02086164.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/Counter-311cdbfb.js", "assets/animate.es-7d48ea54.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/SingleBetButton-caa22bad.js", "assets/auto-play-9294ef3a.js", "assets/game-6f69c2d8.js", "assets/_isIterateeCall-51b0e95f.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/insure-log-6d698131.js", "assets/Sound-d06dcc5e.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/use-game-strategy-cf8e25a4.js", "assets/RequireLogin-f4756d99.js", "assets/enc-utf8-da19c839.js", "assets/index-66592859.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "video-poker": () => p(() =>
        import ("./index-47815a35.js"), ["assets/index-47815a35.js", "assets/manifest-47857305.js", "assets/GameBankrollHelp-02086164.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/SingleBetButton-caa22bad.js", "assets/auto-play-9294ef3a.js", "assets/game-6f69c2d8.js", "assets/_isIterateeCall-51b0e95f.js", "assets/multi-stage-game-6e93065e.js", "assets/turbo-18b17864.js", "assets/GameCard-dfe03bf0.js", "assets/Poker-8f5e923e.js", "assets/Sound-d06dcc5e.js", "assets/groupBy-1002256c.js", "assets/sortBy-5975182a.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "fast-crash": () => p(() =>
        import ("./index-94056ee0.js"), ["assets/index-94056ee0.js", "assets/manifest-47857305.js", "assets/Banner-3c643e80.js", "assets/LiveStats-fc71345c.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-db65699e.js", "assets/amount-641aafec.js", "assets/router-5b68e988.js", "assets/utils-65805dbc.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/SA27V5YJ-37d7d126.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/GameBankrollHelp-02086164.js", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/multi-stage-game-6e93065e.js", "assets/turbo-18b17864.js", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/Sound-d06dcc5e.js", "assets/game-6f69c2d8.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/AutoBetControls-bd9ada22.js", "assets/Game-b1f3d569.js", "assets/sha256-32c902c2.js", "assets/GameScript-89bf5392.js", "assets/enc-utf8-da19c839.js", "assets/Message-f1b40bc8.js", "assets/events-f4825f17.js", "assets/SingleBetButton-caa22bad.js", "assets/index-66592859.js", "assets/auto-play-9294ef3a.js", "assets/_isIterateeCall-51b0e95f.js", "assets/Result-77bd7a99.js", "assets/Chance-e83d33cb.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "roulette-multiplayer": () => p(() =>
        import ("./index-e49829bd.js"), ["assets/index-e49829bd.js", "assets/manifest-47857305.js", "assets/GameBankrollHelp-02086164.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/Sound-d06dcc5e.js", "assets/Payouts-ce621817.js", "assets/Chip-f2c814c9.js", "assets/MultiLogs-67131c89.js", "assets/MoreLessBtn-02a1052d.js", "assets/TextOverflow-b09a60d3.js", "assets/sha256-32c902c2.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js", "assets/index-87c619e0.css"]),
    bingo: () => p(() =>
        import ("./index-fe4d73b6.js"), ["assets/index-fe4d73b6.js", "assets/manifest-47857305.js", "assets/user-20d68319.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/GameBankrollHelp-02086164.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/Sound-d06dcc5e.js", "assets/single-stage-game-88d5c3aa.js", "assets/turbo-18b17864.js", "assets/auto-play-9294ef3a.js", "assets/game-6f69c2d8.js", "assets/_isIterateeCall-51b0e95f.js", "assets/AutoBetControls-bd9ada22.js", "assets/Banner-3c643e80.js", "assets/PixiApp-67480e66.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/SingleLogs-ed09d102.js", "assets/TextOverflow-b09a60d3.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    patti: () => p(() =>
        import ("./index-30f1519d.js"), ["assets/index-30f1519d.js", "assets/manifest-47857305.js", "assets/GameBankrollHelp-02086164.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/SingleBetButton-caa22bad.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/Sound-d06dcc5e.js", "assets/MultiLogs-67131c89.js", "assets/MoreLessBtn-02a1052d.js", "assets/TextOverflow-b09a60d3.js", "assets/sha256-32c902c2.js", "assets/GameCard-dfe03bf0.js", "assets/index-e0754325.js", "assets/Chip-f2c814c9.js", "assets/groupBy-1002256c.js", "assets/maxBy-73748eba.js", "assets/Poker-8f5e923e.js", "assets/index-86694002.js", "assets/index-d125ec55.css", "assets/profit_line_light-69c485d1.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/AutoBetControls-bd9ada22.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js", "assets/index-e8a47723.css"]),
    "sicbo-multiplayer": () => p(() =>
        import ("./index-f9e91ee5.js"), ["assets/index-f9e91ee5.js", "assets/manifest-47857305.js", "assets/GameBankrollHelp-02086164.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/Sound-d06dcc5e.js", "assets/Chip-f2c814c9.js", "assets/WebGL-de4c09c8.js", "assets/OrbitControls-bfcbb9b5.js", "assets/index-86694002.js", "assets/index-d125ec55.css", "assets/animate.es-7d48ea54.js", "assets/MultiLogs-67131c89.js", "assets/MoreLessBtn-02a1052d.js", "assets/TextOverflow-b09a60d3.js", "assets/sha256-32c902c2.js", "assets/Trends-fdd6a443.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js", "assets/index-3d0e1de1.css"]),
    "fish-prawn-crab": () => p(() =>
        import ("./index-eedccc74.js"), ["assets/index-eedccc74.js", "assets/manifest-47857305.js", "assets/GameBankrollHelp-02086164.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/utils-65805dbc.js", "assets/FN6EICGO-68c47d3b.js", "assets/LR7LBJN3-81373dd7.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/i18n-db65699e.js", "assets/router-5b68e988.js", "assets/index-7498b9bb.js", "assets/game-434e4797.js", "assets/user-20d68319.js", "assets/config-66839ee1.js", "assets/number-field-6c429107.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/festival-snow-right-ad7ad3fb.js", "assets/table-ac94fdd5.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/Sound-d06dcc5e.js", "assets/Chip-f2c814c9.js", "assets/WebGL-de4c09c8.js", "assets/OrbitControls-bfcbb9b5.js", "assets/index-86694002.js", "assets/index-d125ec55.css", "assets/MultiLogs-67131c89.js", "assets/MoreLessBtn-02a1052d.js", "assets/TextOverflow-b09a60d3.js", "assets/sha256-32c902c2.js", "assets/Trends-fdd6a443.js", "assets/GameFairnessFile-c46ee002.js", "assets/GameFairnessFile-9b9b6b3d.css", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js", "assets/index-3d0e1de1.css"]),
    "baccarat-multiplayer": () => p(() =>
        import ("./index-d3b65d81.js"), ["assets/index-d3b65d81.js", "assets/manifest-47857305.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/CocosLogs-a138bd16.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/table-ac94fdd5.js", "assets/MoreLessBtn-02a1052d.js", "assets/CocosGameLayout-657fdb6c.js", "assets/FullScreen-6429af15.js", "assets/radio-group-df2381cd.js", "assets/Message-f1b40bc8.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/Result-77bd7a99.js", "assets/Poker-8f5e923e.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    blackjack: () => p(() =>
        import ("./index-1922c449.js"), ["assets/index-1922c449.js", "assets/manifest-47857305.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/CocosLogs-a138bd16.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/table-ac94fdd5.js", "assets/MoreLessBtn-02a1052d.js", "assets/CocosGameLayout-657fdb6c.js", "assets/FullScreen-6429af15.js", "assets/radio-group-df2381cd.js", "assets/Message-f1b40bc8.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "oriental-beauties": () => p(() =>
        import ("./index-b656da6a.js"), ["assets/index-b656da6a.js", "assets/manifest-47857305.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/SingleLogs-ed09d102.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/table-ac94fdd5.js", "assets/TextOverflow-b09a60d3.js", "assets/CocosGameLayout-657fdb6c.js", "assets/FullScreen-6429af15.js", "assets/radio-group-df2381cd.js", "assets/Message-f1b40bc8.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/game-6f69c2d8.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    sword: () => p(() =>
        import ("./index-7a64fc08.js"), ["assets/index-7a64fc08.js", "assets/manifest-47857305.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/SingleLogs-ed09d102.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/table-ac94fdd5.js", "assets/TextOverflow-b09a60d3.js", "assets/CocosGameLayout-657fdb6c.js", "assets/FullScreen-6429af15.js", "assets/radio-group-df2381cd.js", "assets/Message-f1b40bc8.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/game-6f69c2d8.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    slots: () => p(() =>
        import ("./index-e49369bd.js"), ["assets/index-e49369bd.js", "assets/manifest-47857305.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/checkDownScore-3ae78404.js", "assets/FullScreen-6429af15.js", "assets/radio-group-df2381cd.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/Message-f1b40bc8.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/table-ac94fdd5.js", "assets/MoreLessBtn-02a1052d.js", "assets/festival-snow-right-ad7ad3fb.js", "assets/groupBy-1002256c.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "bc-poker": () => p(() =>
        import ("./index-162a4ff9.js"), ["assets/index-162a4ff9.js", "assets/manifest-47857305.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/checkDownScore-3ae78404.js", "assets/FullScreen-6429af15.js", "assets/radio-group-df2381cd.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/Message-f1b40bc8.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/table-ac94fdd5.js", "assets/MoreLessBtn-02a1052d.js", "assets/festival-snow-right-ad7ad3fb.js", "assets/groupBy-1002256c.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"]),
    "special-slots": () => p(() =>
        import ("./index-ee3e5283.js"), ["assets/index-ee3e5283.js", "assets/manifest-47857305.js", "assets/game-434e4797.js", "assets/router-5b68e988.js", "assets/SA27V5YJ-37d7d126.js", "assets/index-d927a8db.js", "assets/_commonjsHelpers-0f403cef.js", "assets/amount-641aafec.js", "assets/user-20d68319.js", "assets/utils-65805dbc.js", "assets/config-66839ee1.js", "assets/i18n-db65699e.js", "assets/checkDownScore-3ae78404.js", "assets/FullScreen-6429af15.js", "assets/radio-group-df2381cd.js", "assets/number-field-6c429107.js", "assets/LR7LBJN3-81373dd7.js", "assets/FN6EICGO-68c47d3b.js", "assets/use-coin-format-283b73dd.js", "assets/LiveStats-fc71345c.js", "assets/resolve-elements.es-b5b56e58.js", "assets/index-7498b9bb.js", "assets/index-0d551e6e.js", "assets/E53DB7BS-c94cf300.js", "assets/slider-6dd1aa49.js", "assets/LiveStats-6e24fec7.css", "assets/Message-f1b40bc8.js", "assets/deduction-557ca514.js", "assets/SingleBigArrow-9c798a86.js", "assets/table-ac94fdd5.js", "assets/MoreLessBtn-02a1052d.js", "assets/festival-snow-right-ad7ad3fb.js", "assets/groupBy-1002256c.js", "assets/LayoutTitle-d8bcb7bb.js", "assets/index-9e40dbc5.js", "assets/ImgShareSignal-661869e0.js"])
};
var w1 = f('<svg xmlns=http://www.w3.org/2000/svg width=24 height=28 viewBox="0 0 24 28"fill=none><path d="M11.4349 27.9996C17.7041 27.9996 22.7863 22.9174 22.7863 16.6482C22.7863 10.379 17.7041 5.29688 11.4349 5.29688C5.16573 5.29688 0.0835571 10.379 0.0835571 16.6482C0.0835571 22.9174 5.16573 27.9996 11.4349 27.9996Z"fill=#A3B2C9></path><path d="M16.7691 3.19814V9.21133H6.05347V3.15803C6.05347 2.73501 6.34406 2.3922 6.70276 2.3922C6.84125 2.3922 6.97595 2.44441 7.08871 2.54128L8.57876 3.83533C8.86785 4.08582 9.27422 4.01317 9.48687 3.67263C9.5073 3.63857 9.52622 3.60452 9.54211 3.56668L10.8498 0.548737C11.0133 0.171872 11.4045 0.0227906 11.7238 0.215764C11.8452 0.29168 11.9411 0.402087 11.9993 0.532845L13.3993 3.5803C13.5696 3.95263 13.9638 4.09036 14.2794 3.88906C14.31 3.86959 14.3388 3.84757 14.3657 3.82322L15.7241 2.59198C16.0086 2.33468 16.4157 2.39749 16.6344 2.73274C16.7215 2.86668 16.7691 3.03014 16.7691 3.1989V3.19814Z"fill=#B1D0E9></path><path d="M11.4114 26.4855C16.828 26.4855 21.219 22.0809 21.219 16.6477C21.219 11.2144 16.828 6.80981 11.4114 6.80981C5.99485 6.80981 1.60385 11.2144 1.60385 16.6477C1.60385 22.0809 5.99485 26.4855 11.4114 26.4855Z"fill=#C9DDE5></path><mask id=mask0_538_12474 maskUnits=userSpaceOnUse x=1 y=6 width=21 height=21><path d="M11.4113 26.4848C16.8278 26.4848 21.2188 22.0802 21.2188 16.6469C21.2188 11.2136 16.8278 6.80908 11.4113 6.80908C5.9947 6.80908 1.6037 11.2136 1.6037 16.6469C1.6037 22.0802 5.9947 26.4848 11.4113 26.4848Z"fill=white></path></mask><g mask=url(#mask0_538_12474)><path fill-rule=evenodd clip-rule=evenodd d="M-0.848117 28.9444L24.0121 4.34985H-1.75623L-0.848117 28.9444Z"fill=#D7EDF6></path></g><path d="M11.3905 20.1158L8.73504 20.731C8.68229 20.7432 8.62757 20.7438 8.57455 20.733C8.52153 20.7221 8.47145 20.7 8.4277 20.6682C8.38395 20.6363 8.34753 20.5955 8.32092 20.5484C8.2943 20.5012 8.2781 20.449 8.27342 20.395L8.03655 17.6806L6.63201 15.3452C6.60411 15.2988 6.58652 15.2469 6.58041 15.193C6.57431 15.1392 6.57984 15.0847 6.59663 15.0331C6.61342 14.9816 6.64107 14.9343 6.67773 14.8944C6.71438 14.8545 6.75918 14.823 6.80909 14.8019L9.31774 13.7386L11.1037 11.681C11.1392 11.64 11.1831 11.6071 11.2325 11.5845C11.2818 11.562 11.3355 11.5503 11.3897 11.5503C11.444 11.5503 11.4976 11.562 11.547 11.5845C11.5963 11.6071 11.6403 11.64 11.6758 11.681L13.4617 13.7394L15.9711 14.8019C16.0211 14.823 16.0659 14.8545 16.1025 14.8944C16.1392 14.9343 16.1668 14.9816 16.1836 15.0331C16.2004 15.0847 16.2059 15.1392 16.1998 15.193C16.1937 15.2469 16.1761 15.2988 16.1482 15.3452L14.7429 17.6806L14.5076 20.395C14.5029 20.449 14.4867 20.5014 14.46 20.5486C14.4334 20.5958 14.3969 20.6367 14.353 20.6685C14.3092 20.7004 14.259 20.7225 14.2059 20.7332C14.1528 20.744 14.098 20.7433 14.0452 20.731L11.3905 20.1158Z"fill=#A8CCE9></path><mask id=mask1_538_12474 maskUnits=userSpaceOnUse x=6 y=11 width=11 height=10><path d="M11.3907 20.1165L8.73525 20.7318C8.68251 20.7439 8.62778 20.7445 8.57476 20.7337C8.52174 20.7229 8.47167 20.7008 8.42791 20.6689C8.38416 20.6371 8.34775 20.5962 8.32113 20.5491C8.29452 20.502 8.27832 20.4497 8.27363 20.3958L8.03676 17.6813L6.63222 15.3459C6.60433 15.2995 6.58673 15.2476 6.58063 15.1938C6.57452 15.1399 6.58005 15.0854 6.59684 15.0339C6.61363 14.9824 6.64129 14.9351 6.67794 14.8952C6.7146 14.8552 6.7594 14.8237 6.80931 14.8026L9.31795 13.7393L11.1039 11.6817C11.1394 11.6407 11.1833 11.6078 11.2327 11.5852C11.2821 11.5627 11.3357 11.551 11.39 11.551C11.4442 11.551 11.4978 11.5627 11.5472 11.5852C11.5966 11.6078 11.6405 11.6407 11.676 11.6817L13.462 13.7401L15.9714 14.8026C16.0213 14.8237 16.0661 14.8552 16.1027 14.8952C16.1394 14.9351 16.167 14.9824 16.1838 15.0339C16.2006 15.0854 16.2061 15.1399 16.2 15.1938C16.1939 15.2476 16.1763 15.2995 16.1484 15.3459L14.7431 17.6813L14.5078 20.3958C14.5031 20.4498 14.4869 20.5021 14.4602 20.5493C14.4336 20.5965 14.3971 20.6374 14.3533 20.6693C14.3094 20.7011 14.2592 20.7232 14.2061 20.734C14.153 20.7448 14.0982 20.744 14.0454 20.7318L11.3907 20.1165Z"fill=white></path></mask><g mask=url(#mask1_538_12474)><path fill-rule=evenodd clip-rule=evenodd d="M-1.70736 29.6895L24.8525 3.49365H-2.67752L-1.70736 29.6895Z"fill=#C0DFF8>');
const pe = a => {
    return t = w1(), r = t.firstChild.nextSibling.nextSibling.nextSibling, l = r.nextSibling.nextSibling.nextSibling, U(t, a, !0, !0), r.style.setProperty("mask-type", "luminance"), l.style.setProperty("mask-type", "luminance"), t;
    var t, r, l
};
var k1 = f('<svg xmlns=http://www.w3.org/2000/svg width=24 height=28 viewBox="0 0 24 28"fill=none><path d="M11.4347 27.9986C17.7038 27.9986 22.786 22.9164 22.786 16.6472C22.786 10.3781 17.7038 5.2959 11.4347 5.2959C5.16549 5.2959 0.083313 10.3781 0.083313 16.6472C0.083313 22.9164 5.16549 27.9986 11.4347 27.9986Z"fill=#EA9227></path><path d="M16.7687 3.19765V9.21084H6.05304V3.15755C6.05304 2.73452 6.34363 2.39171 6.70234 2.39171C6.84082 2.39171 6.97553 2.44392 7.08828 2.54079L8.57834 3.83484C8.86742 4.08533 9.2738 4.01268 9.48644 3.67214C9.50688 3.63809 9.5258 3.60403 9.54169 3.56619L10.8494 0.548248C11.0128 0.171383 11.4041 0.0223023 11.7234 0.215275C11.8448 0.291192 11.9407 0.401599 11.9989 0.532356L13.3989 3.57982C13.5691 3.95214 13.9634 4.08987 14.279 3.88857C14.3096 3.8691 14.3384 3.84708 14.3653 3.82273L15.7236 2.59149C16.0082 2.33419 16.4153 2.39701 16.634 2.73225C16.721 2.86619 16.7687 3.02965 16.7687 3.19841V3.19765Z"fill=#FFD805></path><path d="M11.411 26.4852C16.8276 26.4852 21.2186 22.0807 21.2186 16.6474C21.2186 11.2141 16.8276 6.80957 11.411 6.80957C5.99445 6.80957 1.60345 11.2141 1.60345 16.6474C1.60345 22.0807 5.99445 26.4852 11.411 26.4852Z"fill=#FFB936></path><mask id=mask0_538_12402 maskUnits=userSpaceOnUse x=1 y=6 width=21 height=21><path d="M11.4111 26.4843C16.8277 26.4843 21.2187 22.0797 21.2187 16.6464C21.2187 11.2131 16.8277 6.80859 11.4111 6.80859C5.99454 6.80859 1.60355 11.2131 1.60355 16.6464C1.60355 22.0797 5.99454 26.4843 11.4111 26.4843Z"fill=white></path></mask><g mask=url(#mask0_538_12402)><path opacity=0.477 fill-rule=evenodd clip-rule=evenodd d="M-0.8483 28.9442L24.0119 4.34961H-1.75641L-0.8483 28.9442Z"fill=#FFEE94 fill-opacity=0.683></path></g><path d="M11.3898 20.1153L8.73434 20.7306C8.68159 20.7427 8.62686 20.7433 8.57385 20.7325C8.52083 20.7216 8.47075 20.6995 8.427 20.6677C8.38325 20.6359 8.34683 20.595 8.32022 20.5479C8.2936 20.5008 8.2774 20.4485 8.27271 20.3946L8.03585 17.6801L6.63131 15.3447C6.60341 15.2983 6.58581 15.2464 6.57971 15.1925C6.57361 15.1387 6.57914 15.0842 6.59592 15.0327C6.61271 14.9811 6.64037 14.9338 6.67703 14.8939C6.71368 14.854 6.75848 14.8225 6.80839 14.8014L9.31704 13.7381L11.103 11.6805C11.1385 11.6395 11.1824 11.6066 11.2318 11.584C11.2811 11.5615 11.3348 11.5498 11.389 11.5498C11.4433 11.5498 11.4969 11.5615 11.5463 11.584C11.5956 11.6066 11.6396 11.6395 11.6751 11.6805L13.461 13.7389L15.9704 14.8014C16.0204 14.8225 16.0652 14.854 16.1018 14.8939C16.1385 14.9338 16.1661 14.9811 16.1829 15.0327C16.1997 15.0842 16.2052 15.1387 16.1991 15.1925C16.193 15.2464 16.1754 15.2983 16.1475 15.3447L14.7422 17.6801L14.5069 20.3946C14.5022 20.4486 14.486 20.5009 14.4593 20.5481C14.4327 20.5953 14.3962 20.6362 14.3523 20.668C14.3085 20.6999 14.2583 20.722 14.2052 20.7328C14.1521 20.7435 14.0973 20.7428 14.0445 20.7306L11.3898 20.1153Z"fill=#FFD805></path><mask id=mask1_538_12402 maskUnits=userSpaceOnUse x=6 y=11 width=11 height=10><path d="M11.3892 20.1163L8.73376 20.7315C8.68101 20.7436 8.62628 20.7443 8.57327 20.7335C8.52025 20.7226 8.47017 20.7005 8.42642 20.6687C8.38267 20.6368 8.34625 20.596 8.31964 20.5488C8.29302 20.5017 8.27682 20.4494 8.27213 20.3955L8.03527 17.6811L6.63073 15.3457C6.60283 15.2993 6.58523 15.2474 6.57913 15.1935C6.57303 15.1397 6.57856 15.0852 6.59534 15.0336C6.61213 14.9821 6.63979 14.9348 6.67645 14.8949C6.7131 14.855 6.7579 14.8234 6.80781 14.8023L9.31646 13.7391L11.1024 11.6815C11.1379 11.6405 11.1819 11.6076 11.2312 11.585C11.2806 11.5625 11.3342 11.5508 11.3885 11.5508C11.4427 11.5508 11.4964 11.5625 11.5457 11.585C11.5951 11.6076 11.639 11.6405 11.6745 11.6815L13.4605 13.7399L15.9699 14.8023C16.0198 14.8234 16.0646 14.855 16.1012 14.8949C16.1379 14.9348 16.1655 14.9821 16.1823 15.0336C16.1991 15.0852 16.2046 15.1397 16.1985 15.1935C16.1924 15.2474 16.1748 15.2993 16.1469 15.3457L14.7416 17.6811L14.5063 20.3955C14.5016 20.4495 14.4854 20.5019 14.4587 20.5491C14.4321 20.5963 14.3956 20.6372 14.3518 20.669C14.3079 20.7009 14.2577 20.7229 14.2046 20.7337C14.1515 20.7445 14.0967 20.7438 14.0439 20.7315L11.3892 20.1163Z"fill=white></path></mask><g mask=url(#mask1_538_12402)><path fill-rule=evenodd clip-rule=evenodd d="M-1.70858 29.6891L24.8513 3.49316H-2.67874L-1.70858 29.6891Z"fill=#FFEB73>');
const he = a => {
    return t = k1(), r = t.firstChild.nextSibling.nextSibling.nextSibling, l = r.nextSibling.nextSibling.nextSibling, U(t, a, !0, !0), r.style.setProperty("mask-type", "luminance"), l.style.setProperty("mask-type", "luminance"), t;
    var t, r, l
};
var L1 = f('<svg xmlns=http://www.w3.org/2000/svg width=24 height=28 viewBox="0 0 24 28"fill=none><path d="M11.4349 27.9996C17.7041 27.9996 22.7863 22.9174 22.7863 16.6482C22.7863 10.379 17.7041 5.29688 11.4349 5.29688C5.16573 5.29688 0.0835571 10.379 0.0835571 16.6482C0.0835571 22.9174 5.16573 27.9996 11.4349 27.9996Z"fill=#D5A290></path><path d="M16.7691 3.19814V9.21133H6.05347V3.15803C6.05347 2.73501 6.34406 2.3922 6.70276 2.3922C6.84125 2.3922 6.97595 2.44441 7.08871 2.54128L8.57876 3.83533C8.86785 4.08582 9.27422 4.01317 9.48687 3.67263C9.5073 3.63857 9.52622 3.60452 9.54211 3.56668L10.8498 0.548737C11.0133 0.171872 11.4045 0.0227906 11.7238 0.215764C11.8452 0.29168 11.9411 0.402087 11.9993 0.532845L13.3993 3.5803C13.5696 3.95263 13.9638 4.09036 14.2794 3.88906C14.31 3.86959 14.3388 3.84757 14.3657 3.82322L15.7241 2.59198C16.0086 2.33468 16.4157 2.39749 16.6344 2.73274C16.7215 2.86668 16.7691 3.03014 16.7691 3.1989V3.19814Z"fill=#FFAE92></path><path d="M11.4114 26.4855C16.828 26.4855 21.219 22.0809 21.219 16.6477C21.219 11.2144 16.828 6.80981 11.4114 6.80981C5.99485 6.80981 1.60385 11.2144 1.60385 16.6477C1.60385 22.0809 5.99485 26.4855 11.4114 26.4855Z"fill=#F2CAB9></path><mask id=mask0_538_12438 maskUnits=userSpaceOnUse x=1 y=6 width=21 height=21><path d="M11.4113 26.4848C16.8278 26.4848 21.2188 22.0802 21.2188 16.6469C21.2188 11.2136 16.8278 6.80908 11.4113 6.80908C5.9947 6.80908 1.6037 11.2136 1.6037 16.6469C1.6037 22.0802 5.9947 26.4848 11.4113 26.4848Z"fill=white></path></mask><g mask=url(#mask0_538_12438)><path fill-rule=evenodd clip-rule=evenodd d="M-0.848117 28.9444L24.0121 4.34985H-1.75623L-0.848117 28.9444Z"fill=#FCD8C9></path></g><path d="M11.3905 20.1158L8.73504 20.731C8.68229 20.7432 8.62757 20.7438 8.57455 20.733C8.52153 20.7221 8.47145 20.7 8.4277 20.6682C8.38395 20.6363 8.34753 20.5955 8.32092 20.5484C8.2943 20.5012 8.2781 20.449 8.27342 20.395L8.03655 17.6806L6.63201 15.3452C6.60411 15.2988 6.58652 15.2469 6.58041 15.193C6.57431 15.1392 6.57984 15.0847 6.59663 15.0331C6.61342 14.9816 6.64107 14.9343 6.67773 14.8944C6.71438 14.8545 6.75918 14.823 6.80909 14.8019L9.31774 13.7386L11.1037 11.681C11.1392 11.64 11.1831 11.6071 11.2325 11.5845C11.2818 11.562 11.3355 11.5503 11.3897 11.5503C11.444 11.5503 11.4976 11.562 11.547 11.5845C11.5963 11.6071 11.6403 11.64 11.6758 11.681L13.4617 13.7394L15.9711 14.8019C16.0211 14.823 16.0659 14.8545 16.1025 14.8944C16.1392 14.9343 16.1668 14.9816 16.1836 15.0331C16.2004 15.0847 16.2059 15.1392 16.1998 15.193C16.1937 15.2469 16.1761 15.2988 16.1482 15.3452L14.7429 17.6806L14.5076 20.395C14.5029 20.449 14.4867 20.5014 14.46 20.5486C14.4334 20.5958 14.3969 20.6367 14.353 20.6685C14.3092 20.7004 14.259 20.7225 14.2059 20.7332C14.1528 20.744 14.098 20.7433 14.0452 20.731L11.3905 20.1158Z"fill=#FFAE92></path><mask id=mask1_538_12438 maskUnits=userSpaceOnUse x=6 y=11 width=11 height=10><path d="M11.3907 20.1165L8.73525 20.7318C8.68251 20.7439 8.62778 20.7445 8.57476 20.7337C8.52174 20.7229 8.47167 20.7008 8.42791 20.6689C8.38416 20.6371 8.34775 20.5962 8.32113 20.5491C8.29452 20.502 8.27832 20.4497 8.27363 20.3958L8.03676 17.6813L6.63222 15.3459C6.60433 15.2995 6.58673 15.2476 6.58063 15.1938C6.57452 15.1399 6.58005 15.0854 6.59684 15.0339C6.61363 14.9824 6.64129 14.9351 6.67794 14.8952C6.7146 14.8552 6.7594 14.8237 6.80931 14.8026L9.31795 13.7393L11.1039 11.6817C11.1394 11.6407 11.1833 11.6078 11.2327 11.5852C11.2821 11.5627 11.3357 11.551 11.39 11.551C11.4442 11.551 11.4978 11.5627 11.5472 11.5852C11.5966 11.6078 11.6405 11.6407 11.676 11.6817L13.462 13.7401L15.9714 14.8026C16.0213 14.8237 16.0661 14.8552 16.1027 14.8952C16.1394 14.9351 16.167 14.9824 16.1838 15.0339C16.2006 15.0854 16.2061 15.1399 16.2 15.1938C16.1939 15.2476 16.1763 15.2995 16.1484 15.3459L14.7431 17.6813L14.5078 20.3958C14.5031 20.4498 14.4869 20.5021 14.4602 20.5493C14.4336 20.5965 14.3971 20.6374 14.3533 20.6693C14.3094 20.7011 14.2592 20.7232 14.2061 20.734C14.153 20.7448 14.0982 20.744 14.0454 20.7318L11.3907 20.1165Z"fill=white></path></mask><g mask=url(#mask1_538_12438)><path fill-rule=evenodd clip-rule=evenodd d="M-1.70736 29.6895L24.8525 3.49365H-2.67752L-1.70736 29.6895Z"fill=#FFC3AE>');
const be = a => {
    return t = L1(), r = t.firstChild.nextSibling.nextSibling.nextSibling, l = r.nextSibling.nextSibling.nextSibling, U(t, a, !0, !0), r.style.setProperty("mask-type", "luminance"), l.style.setProperty("mask-type", "luminance"), t;
    var t, r, l
};
var E1 = f('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path d="m15.184 26-5.445 2.99c-.856.47-1.915.127-2.365-.767a1.9 1.9 0 0 1-.177-1.16l1.04-6.333a1.88 1.88 0 0 0-.504-1.62L3.33 14.626a1.89 1.89 0 0 1-.031-2.587c.269-.289.621-.476 1.002-.534l6.087-.923a1.76 1.76 0 0 0 1.32-1.001l2.722-5.76c.428-.906 1.478-1.28 2.346-.832.346.178.626.47.796.831l2.723 5.761c.255.54.748.915 1.319 1l6.087.925c.957.145 1.62 1.074 1.482 2.074a1.86 1.86 0 0 1-.51 1.047l-4.405 4.484a1.88 1.88 0 0 0-.504 1.62l1.04 6.332c.163.996-.478 1.941-1.431 2.113-.38.068-.77.003-1.111-.184l-5.445-2.99c-.51-.28-1.12-.28-1.63 0z"></path> ');
const Q = a => {
    return t = E1(), r = t.firstChild.nextSibling, U(t, a, !0, !0), $(() => {
        var l;
        return Ce(r, "fill", (l = a.fill) != null ? l : "currentColor")
    }), t;
    var t, r
};
p1({}, {
    Fill: () => ae,
    Label: () => Te,
    Progress: () => R1,
    Root: () => te,
    Track: () => re,
    ValueLabel: () => Oe
});
var Ae = _e();

function Y() {
    const a = we(Ae);
    if (a === void 0) throw new Error("[kobalte]: `useProgressContext` must be used within a `Progress.Root` component");
    return a
}

function ae(a) {
    const t = Y(),
        [r, l] = B(a, ["style"]);
    return e(F, I({
        as: "div",
        get style() {
            return oe({
                "--kb-progress-fill-width": t.progressFillWidth()
            }, r.style)
        }
    }, () => t.dataset(), l))
}

function Te(a) {
    const t = Y(),
        r = Se({
            id: t.generateId("label")
        }, a),
        [l, c] = B(r, ["id"]);
    return ee(() => xe(t.registerLabelId(l.id))), e(F, I({
        as: "span",
        get id() {
            return l.id
        }
    }, () => t.dataset(), c))
}

function te(a) {
    const t = `progress-${Ze()}`,
        r = Se({
            id: t,
            value: 0,
            minValue: 0,
            maxValue: 100
        }, a),
        [l, c] = B(r, ["value", "minValue", "maxValue", "indeterminate", "getValueLabel"]),
        [i, h] = A(),
        n = m1(() => ({
            style: "percent"
        })),
        s = () => h1(l.value, l.minValue, l.maxValue),
        d = () => (s() - l.minValue) / (l.maxValue - l.minValue),
        g = () => {
            if (!l.indeterminate) return l.getValueLabel ? l.getValueLabel({
                value: s(),
                min: l.minValue,
                max: l.maxValue
            }) : n().format(d())
        },
        u = R(() => {
            let y;
            return l.indeterminate || (y = d() === 1 ? "complete" : "loading"), {
                "data-progress": y,
                "data-indeterminate": l.indeterminate ? "" : void 0
            }
        }),
        b = {
            dataset: u,
            value: s,
            valuePercent: d,
            valueLabel: g,
            labelId: i,
            progressFillWidth: () => l.indeterminate ? void 0 : `${Math.round(100*d())}%`,
            generateId: b1(() => c.id),
            registerLabelId: f1(h)
        };
    return e(Ae.Provider, {
        value: b,
        get children() {
            return e(F, I({
                as: "div",
                role: "progressbar",
                get "aria-valuenow" () {
                    return k(() => !!l.indeterminate)() ? void 0 : s()
                },
                get "aria-valuemin" () {
                    return l.minValue
                },
                get "aria-valuemax" () {
                    return l.maxValue
                },
                get "aria-valuetext" () {
                    return g()
                },
                get "aria-labelledby" () {
                    return i()
                }
            }, u, c))
        }
    })
}

function re(a) {
    const t = Y();
    return e(F, I({
        as: "div"
    }, () => t.dataset(), a))
}

function Oe(a) {
    const t = Y();
    return e(F, I({
        as: "div",
        get children() {
            return t.valueLabel()
        }
    }, () => t.dataset(), a))
}
var R1 = Object.assign(te, {
    Fill: ae,
    Label: Te,
    Track: re,
    ValueLabel: Oe
});
const D1 = u1("relative w-full overflow-hidden rounded-xl bg-layer4", {
        variants: {
            size: {
                sm: "h-1",
                default: "h-2",
                lg: "h-4"
            }
        },
        defaultVariants: {
            size: "default"
        }
    }),
    V1 = a => {
        const [t, r] = B(a, ["children", "size"]);
        return e(te, I(r, {
            get children() {
                return [k(() => t.children), e(re, {
                    get class() {
                        return g1(D1({
                            size: t.size
                        }))
                    },
                    get children() {
                        return e(ae, {
                            class: "h-full w-[var(--kb-progress-fill-width)] flex-1 transition-all rounded-xl",
                            style: {
                                "background-image": "linear-gradient(90deg, #9FE871 0%, #24EE89 100%)"
                            }
                        })
                    }
                })]
            }
        }))
    };
var Me = f("<div>"),
    I1 = f('<span class="text-xs font-semibold"># '),
    P1 = f('<div class="flex justify-between items-start"><div class="flex flex-col"><span class="font-extrabold text-lg"></span><div class="flex items-center gap-1 whitespace-nowrap mr-1"><span class="text-secondary text-sm">'),
    S1 = f('<div><span class="text-secondary text-sm whitespace-nowrap"></span><span>'),
    A1 = f('<div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-[repeat(9,1fr)] mt-4">'),
    T1 = f('<div class="grid grid-cols-2 md:grid-cols-4 mt-4">'),
    O1 = f('<div class="mt-[10px] py-[1.125rem] border-t border-t-third leading-[1.5] text-secondary text-base md:pb-0">'),
    M1 = f('<div class="p-3 flex flex-col md:flex-row gap-2 bg-layer5 dark:bg-layer3 rounded-xl"><div class="flex gap-1 items-center grow flex-1"><p class="mb-4 mx-10"><span class="text-3xl text-primary font-extrabold"></span></p><div class="flex flex-col justify-start"><div class="flex gap-1"></div><span class=text-secondary></span></div></div><div class="flex flex-col justify-between flex-1">'),
    U1 = f('<div class="flex items-center"><div class="flex gap-0 mr-1 min-w-[5.6rem]">'),
    F1 = f('<div class="flex items-center gap-1 justify-center h-5">'),
    j1 = f('<div class="w-full flex gap-1.5 mt-1.5 rounded-xl"><div class="w-1/2 py-4 px-5 flex flex-col md:flex-row items-center gap-1 bg-layer5 dark:bg-layer3 justify-between rounded-lg"><p class="text-secondary text-sm"></p><div class="flex gap-1"></div></div><div class="w-1/2 py-4 px-5 flex flex-col md:flex-row items-center gap-1 bg-layer5 dark:bg-layer3 rounded-lg justify-center"><p class="text-secondary h-6 text-sm"><span> </span><span> '),
    q1 = f("<img>"),
    z1 = f('<section class="mb-3 sm:my-6 p-3 md:p-5 flex flex-col bg-layer4 rounded-xl relative"><div class="flex justify-between items-start"><div class="flex items-center gap-2 z-10">'),
    H1 = f('<div class="px-3 py-1 text-primary">: '),
    N1 = f('<div class="bg-layer5 dark:bg-layer3 rounded-xl p-4"><div class="flex items-center border-b border-b-input pb-3 mb-3"><div class=mr-2></div><span class="font-extrabold text-secondary"></span></div><div class="flex flex-col gap-3 text-sm font-extrabold"><div class="flex items-center justify-between"><span class=text-secondary></span><div class="text-primary flex items-center gap-0"><span class=text-brand>+</span></div></div><div class="flex items-center justify-between"><span class=text-secondary></span><div class="text-primary flex items-center gap-0"><span></span></div></div><div class="flex items-center justify-between"><span class=text-secondary></span><span class=text-primary>X'),
    Z1 = f('<div class="flex items-center"><div class=mr-2></div><span class="font-extrabold text-secondary leading-[26px]">'),
    W1 = f('<div class="flex items-center justify-center"><span class="text-brand font-extrabold">+'),
    $1 = f('<div class="flex items-center justify-center"><span class="text-primary font-extrabold">'),
    B1 = f('<div id=description class="p-3 text-primary bg-layer2 dark:bg-layer4 rounded-lg">');

function fe(a) {
    return t = Me(), o(t, e(E, {
        get each() {
            return [...a.tags.entries()]
        },
        children: ([r, l]) => e(Re, {
            class: "flex items-center text-right bg-layer5 text-brand h-6 px-2 rounded-md",
            get href() {
                return `/tagname/${encodeURIComponent(r)}?label=${M.replaceHostName(l,V.host)}`
            },
            get children() {
                var c = I1();
                return c.firstChild, o(c, () => M.replaceHostName(l, V.host), null), c
            }
        })
    })), $(() => W(t, G("flex flex-wrap gap-2", a.class))), t;
    var t
}
const G1 = a => {
        return R(() => {
            var n, s;
            const i = ((n = a.gameDetail.data) == null ? void 0 : n.translatedTags) || {},
                h = ((s = a.gameDetail.data) == null ? void 0 : s.tags) || [];
            return new Map(h.map(d => [d, i[d] || d]))
        }), t = P1(), r = t.firstChild.firstChild, l = r.nextSibling, c = l.firstChild, o(r, () => {
            var i;
            return (i = a.gameDetail.data) == null ? void 0 : i.fullName
        }), o(c, () => m("By")), o(l, e(Re, {
            class: "text-brand text-sm",
            get href() {
                var i;
                return `/provider/${(i=a.gameDetail.data)==null?void 0:i.providerName}`
            },
            get children() {
                var i;
                return M.replaceHostName(((i = a.gameDetail.data) == null ? void 0 : i.providerName) || "", V.host)
            }
        }), null), t;
        var t, r, l, c
    },
    K1 = a => {
        const t = T(),
            r = (i, h) => ((n, s) => {
                if (n === null || !n) return "--";
                if (!(s != null && s.isVolatility)) return s != null && s.isSpin ? Number(n) > 0 ? m("Yes") : m("No") : typeof n == "boolean" ? m(n ? "Yes" : "No") : s != null && s.isPercent ? n + "%" : String(n);
                switch (n) {
                    case 1:
                        return m("Low");
                    case 2:
                        return m("Medium");
                    default:
                        return m("High")
                }
            })(i, h),
            l = ({
                label: i,
                value: h,
                valueClass: n = "text-primary",
                additionalClass: s = ""
            }) => {
                return d = S1(), g = d.firstChild, u = g.nextSibling, W(d, `flex flex-col justify-between md:items-center py-2 md:py-1.5 md:px-3 lg:py-0 border-b border-third md:border-b-0 md:border-r ${s}`), o(g, () => m(i)), W(u, `text-sm md:mt-0 truncate ${n}`), o(u, h), d;
                var d, g, u
            };
        return [e(L, {
            get when() {
                return t.gameUnique !== "bc-poker"
            },
            get children() {
                return [e(L, {
                    get when() {
                        var i;
                        return ((i = a.gameDetail.data) == null ? void 0 : i.categoryName) === "Slots"
                    },
                    get children() {
                        var i = A1();
                        return o(i, () => {
                            var h, n, s, d, g, u, b, y, C;
                            return [{
                                label: m("House Edge"),
                                value: r(new de(100 - (((h = a.gameDetail.data) == null ? void 0 : h.slotsInfo.rtpDes) || 0)).toFixed(2), {
                                    isPercent: !0
                                }),
                                valueClass: "text-brand"
                            }, {
                                label: m("RTP (Return to Player)"),
                                value: r((n = a.gameDetail.data) == null ? void 0 : n.slotsInfo.rtpDes, {
                                    isPercent: !0
                                }),
                                valueClass: "text-brand"
                            }, {
                                label: m("Reel design"),
                                value: r((s = a.gameDetail.data) == null ? void 0 : s.slotsInfo.reelDesign)
                            }, {
                                label: m("Lucky Spins"),
                                value: r((d = a.gameDetail.data) == null ? void 0 : d.slotsInfo.luckySpin, {
                                    isSpin: !0
                                })
                            }, {
                                label: m("Win Ways"),
                                value: r((g = a.gameDetail.data) == null ? void 0 : g.slotsInfo.winWays),
                                additionalClass: "md:border-r-0 lg:border-r"
                            }, {
                                label: m("Max Win"),
                                value: r((u = a.gameDetail.data) == null ? void 0 : u.slotsInfo.maxWin),
                                valueClass: "text-brand"
                            }, {
                                label: m("Hit Rate"),
                                value: r((b = a.gameDetail.data) == null ? void 0 : b.slotsInfo.hitRate, {
                                    isPercent: !0
                                })
                            }, {
                                label: m("Volatility"),
                                value: r((y = a.gameDetail.data) == null ? void 0 : y.slotsInfo.volatility, {
                                    isVolatility: !0
                                })
                            }, {
                                label: m("Stakes Range"),
                                value: r((C = a.gameDetail.data) == null ? void 0 : C.slotsInfo.stakeRange),
                                additionalClass: "lg:border-r-0 border-b-0"
                            }].map(({
                                label: x,
                                value: v,
                                valueClass: _,
                                additionalClass: w
                            }) => e(l, {
                                label: x,
                                value: v,
                                valueClass: _,
                                additionalClass: w
                            }))
                        }), i
                    }
                }), e(L, {
                    get when() {
                        var i;
                        return ((i = a.gameDetail.data) == null ? void 0 : i.categoryName) !== "Slots"
                    },
                    get children() {
                        var i = T1();
                        return o(i, () => {
                            var h, n, s, d;
                            return [{
                                label: m("House Edge"),
                                value: r(new de(100 - (((h = a.gameDetail.data) == null ? void 0 : h.slotsInfo.rtpDes) || 0)).toFixed(2), {
                                    isPercent: !0
                                }),
                                valueClass: "text-brand"
                            }, {
                                label: m("RTP (Return to Player)"),
                                value: r((n = a.gameDetail.data) == null ? void 0 : n.slotsInfo.rtpDes, {
                                    isPercent: !0
                                }),
                                valueClass: "text-brand"
                            }, {
                                label: m("Max Win"),
                                value: r((s = a.gameDetail.data) == null ? void 0 : s.slotsInfo.maxWin),
                                valueClass: "text-brand",
                                additionalClass: "border-b-0"
                            }, {
                                label: m("Stakes Range"),
                                value: r((d = a.gameDetail.data) == null ? void 0 : d.slotsInfo.stakeRange),
                                additionalClass: "lg:border-r-0 border-b-0"
                            }].map(({
                                label: g,
                                value: u,
                                valueClass: b,
                                additionalClass: y
                            }) => e(l, {
                                label: g,
                                value: u,
                                valueClass: b,
                                additionalClass: y
                            }))
                        }), i
                    }
                })]
            }
        }), (c = O1(), o(c, () => {
            var i;
            return (i = a.gameDetail.data) == null ? void 0 : i.details
        }), c)];
        var c
    },
    Y1 = a => {
        return t = M1(), r = t.firstChild, l = r.firstChild, c = l.firstChild, i = l.nextSibling.firstChild, h = i.nextSibling, n = r.nextSibling, o(c, () => {
            var s;
            return (s = a.ratingReview.data) == null ? void 0 : s.avg
        }), o(i, e(E, {
            get each() {
                return Array.from({
                    length: 5
                })
            },
            children: (s, d) => e(Q, {
                get fill() {
                    var g;
                    return (g = a.ratingReview.data) != null && g.avg && d() < Number(a.ratingReview.data.avg) ? "#2cd97d" : "#b3bec1"
                },
                class: "size-5"
            })
        })), o(h, () => m("Out of 5")), o(n, e(E, {
            get each() {
                return Array.from({
                    length: 5
                })
            },
            children: (s, d) => {
                return g = U1(), u = g.firstChild, o(u, e(E, {
                    get each() {
                        return Array.from({
                            length: 5 - d()
                        })
                    },
                    children: b => e(Q, {
                        class: "size-4.5",
                        fill: "#b3bec1"
                    })
                })), o(g, e(V1, {
                    class: "grow",
                    minValue: 0,
                    get value() {
                        return k(() => !!a.ratingReview.data)() ? Number(a.ratingReview.data.scores[5 - d()] || 0) : 0
                    }
                }), null), g;
                var g, u
            }
        })), t;
        var t, r, l, c, i, h, n
    },
    X1 = a => {
        const t = De(),
            r = T(),
            l = Be(() => ({
                mutationKey: ["api/comment/star/tap/", r.gameUnique],
                mutationFn: c => S(void 0, null, function*() {
                    if (a.myRating !== c) {
                        if (!(Z.vipLevel < 4)) return a.setMyRating(c), yield K().post("/comment/star/tap/", {
                            gameUnique: r.gameUnique,
                            rank: c
                        }), c;
                        X.warning(m("Unlock at VIP 4"))
                    }
                }),
                onSuccess(c) {
                    c && X.success(m("Thanks for your feedback"))
                },
                onError(c) {
                    var i;
                    X.error(c.message), a.setMyRating(((i = a.ratingReview.data) == null ? void 0 : i.my) || 0)
                }
            }));
        return (() => {
            var c = j1(),
                i = c.firstChild,
                h = i.firstChild,
                n = h.nextSibling,
                s = i.nextSibling,
                d = s.firstChild.firstChild;
            d.firstChild;
            var g = d.nextSibling;
            return g.firstChild, o(h, () => m("Rate this Game")), o(n, e(E, {
                get each() {
                    return Array.from({
                        length: 5
                    })
                },
                children: (u, b) => e(Q, {
                    onMouseOver: () => {
                        a.setHoverIndex(b() + 1)
                    },
                    onMouseLeave: () => {
                        a.setHoverIndex(0)
                    },
                    onClick: () => {
                        Z.login ? l.mutate(b() + 1) : t("/login/signin")
                    },
                    get fill() {
                        return b() < a.myRating || b() < a.hoverIndex ? "#2cd97d" : "#b3bec1"
                    },
                    class: "size-5 cursor-pointer"
                })
            })), o(d, () => {
                var u, b;
                return (b = (u = a.ratingReview.data) == null ? void 0 : u.count) != null ? b : 0
            }, null), o(g, () => m("Ratings"), null), o(s, e(L, {
                get when() {
                    var u;
                    return (u = a.ratingReview.data) == null ? void 0 : u.users.length
                },
                get children() {
                    var u = F1();
                    return o(u, e(E, {
                        get each() {
                            var b;
                            return (b = a.ratingReview.data) == null ? void 0 : b.users.slice(0, 5)
                        },
                        children: (b, y) => {
                            return C = q1(), $(x => {
                                var v = G("w-7 h-7 rounded-full box-border border border-primary", y() > 0 && "-ml-2"),
                                    _ = Ge.avatar(b, "s");
                                return v !== x.e && W(C, x.e = v), _ !== x.t && Ce(C, "src", x.t = _), x
                            }, {
                                e: void 0,
                                t: void 0
                            }), C;
                            var C
                        }
                    })), u
                }
            }), null), c
        })()
    };

function J1() {
    const [a, t] = A(!1), r = Ie(), l = T(), [c, i] = A(0), [h, n] = A(0), s = J(() => ({
        queryKey: [`/game/home/introduction/?areaCode=${Z.areaCode}&gameUrl=${l.gameUnique}`, Z.areaCode, l.gameUnique],
        queryFn: ea
    })), d = J(() => ({
        queryKey: ["/api/comment/star/scores/", l.gameUnique],
        queryFn: ta
    }));
    ee(() => {
        d.data && i(d.data.my)
    });
    const {
        isBrAuditHost: g
    } = M.getHostType(V.host), u = R(() => v => {
        let _ = 5381;
        for (let w = 0; w < v.length; w++) _ = (_ << 5) + _ + v.charCodeAt(w);
        return _ >>>= 0, `${_%2+1}.${Math.floor(_/3%10)}.${Math.floor(_/33%100)}`
    }), b = R(() => {
        var w, O;
        const v = ((w = r.data) == null ? void 0 : w.translatedTags) || {},
            _ = ((O = r.data) == null ? void 0 : O.tags) || [];
        return new Map(_.map(P => [P, v[P] || P]))
    });
    return y = z1(), C = y.firstChild, x = C.firstChild, o(C, e(G1, {
        gameDetail: r
    }), x), o(x, e(fe, {
        get tags() {
            return b()
        },
        get class() {
            return V.mobile ? "hidden" : ""
        }
    }), null), o(x, e(ke, {
        class: "bg-layer5 hover:bg-layer5 size-8 px-2",
        onClick: () => t(v => !v),
        get children() {
            return e(Pe, {
                get class() {
                    return G(a() ? "rotate-90" : "-rotate-90")
                }
            })
        }
    }), null), o(y, e(We, {
        get when() {
            return a()
        },
        get children() {
            return [e(fe, {
                get tags() {
                    return b()
                },
                class: "md:hidden pb-2 pt-1.5"
            }), e(K1, {
                gameDetail: r
            }), e(D, {
                type: "inner",
                class: "my-2 sm:my-4 w-full sm:max-w-sm h-11 light-layer3-tabs",
                get children() {
                    return [e(D.TabItem, {
                        get title() {
                            return m("High win")
                        },
                        class: "flex flex-col gap-2",
                        get children() {
                            return e(ve, {
                                type: "bigWinRank"
                            })
                        }
                    }), e(D.TabItem, {
                        get title() {
                            return m("Lucky win")
                        },
                        class: "flex flex-col gap-2",
                        get children() {
                            return e(ve, {
                                type: "luckyWinRank"
                            })
                        }
                    }), k(() => k(() => {
                        var v;
                        return !(s.isLoading || !((v = s.data) != null && v.introduction))
                    })() && e(D.TabItem, {
                        get title() {
                            return m("Description")
                        },
                        class: "flex flex-col gap-2 min-h-80",
                        get children() {
                            return [e(aa, {
                                get introduction() {
                                    return s.data.introduction
                                }
                            }), e(L, {
                                when: g,
                                get children() {
                                    var v = H1(),
                                        _ = v.firstChild;
                                    return o(v, () => m("Version"), _), o(v, () => {
                                        var w;
                                        return u()(((w = r.data) == null ? void 0 : w.fullName) || "")
                                    }, null), v
                                }
                            })]
                        }
                    })), e(D.TabItem, {
                        get title() {
                            return m("Review")
                        },
                        class: "min-h-80",
                        get children() {
                            return [(v = Me(), o(v, e(Y1, {
                                ratingReview: d
                            }), null), o(v, e(X1, {
                                ratingReview: d,
                                get myRating() {
                                    return c()
                                },
                                setMyRating: i,
                                get hoverIndex() {
                                    return h()
                                },
                                setHoverIndex: n
                            }), null), v), e(v1, {
                                get gameUnique() {
                                    return l.gameUnique
                                }
                            })];
                            var v
                        }
                    })]
                }
            })]
        }
    }), null), y;
    var y, C, x
}

function Q1(t) {
    return S(this, arguments, function*({
        queryKey: a
    }) {
        const r = yield K().get(`/game/support/home/get-rank/${a[1]}/`);
        return {
            bigWinRank: r.bigWinRank.sort((l, c) => c.winUsd - l.winUsd),
            luckyWinRank: r.luckyWinRank.sort((l, c) => c.score - l.score)
        }
    })
}

function ve(a) {
    const {
        findToken: t
    } = c1(), r = T(), l = J(() => ({
        queryKey: ["/api/game/support/home/get-rank/{gameUnique}/", r.gameUnique],
        queryFn: Q1
    })), c = R(() => {
        var i;
        return ((i = l.data) == null ? void 0 : i[a.type]) || []
    });
    return e(Le, {
        get fallback() {
            return e(Ee, {})
        },
        get children() {
            return e(L, {
                get when() {
                    return c().length > 0
                },
                get fallback() {
                    return e($e, {})
                },
                get children() {
                    return k(() => !!V.mobile)() ? e(E, {
                        get each() {
                            return c()
                        },
                        children: (i, h) => (() => {
                            var n = N1(),
                                s = n.firstChild,
                                d = s.firstChild,
                                g = d.nextSibling,
                                u = s.nextSibling.firstChild,
                                b = u.firstChild,
                                y = b.nextSibling,
                                C = y.firstChild;
                            C.firstChild;
                            var x, v = u.nextSibling,
                                _ = v.firstChild,
                                w = _.nextSibling,
                                O = w.firstChild,
                                P = v.nextSibling.firstChild,
                                ie = P.nextSibling,
                                qe = ie.firstChild;
                            return o(d, (x = k(() => h() === 0), () => {
                                return x() ? e(he, {
                                    class: "size-6"
                                }) : (le = k(() => h() === 1), () => le() ? e(be, {
                                    class: "size-6"
                                }) : e(pe, {
                                    class: "size-6"
                                }));
                                var le
                            })), o(g, () => i.nickName), o(b, () => m("Payout")), o(y, e(j, {
                                get token() {
                                    return t(i.currencyName)
                                }
                            }), C), o(C, () => i.winAmount, null), o(_, () => m("Wager")), o(w, e(j, {
                                get token() {
                                    return t(i.currencyName)
                                }
                            }), O), o(O, () => i.betAmount), o(P, () => m("Mult")), o(ie, () => Number(i.oddsString || 0) / 1e4, qe), n
                        })()
                    }) : e(y1, {
                        get children() {
                            return [e(C1, {
                                get children() {
                                    return e(me, {
                                        class: "text-secondary font-semibold",
                                        get children() {
                                            return [e(q, {
                                                class: "w-1/4",
                                                get children() {
                                                    return m("Player")
                                                }
                                            }), e(q, {
                                                class: "w-1/4 text-center",
                                                get children() {
                                                    return m("Payout")
                                                }
                                            }), e(q, {
                                                class: "w-1/4 text-center",
                                                get children() {
                                                    return m("Wager")
                                                }
                                            }), e(q, {
                                                class: "w-1/4 text-center",
                                                get children() {
                                                    return m("Mult")
                                                }
                                            })]
                                        }
                                    })
                                }
                            }), e(_1, {
                                get children() {
                                    return e(E, {
                                        get each() {
                                            return c()
                                        },
                                        children: (i, h) => e(me, {
                                            class: "text-center",
                                            get children() {
                                                return [e(z, {
                                                    class: "py-3",
                                                    get children() {
                                                        var n, s = Z1(),
                                                            d = s.firstChild,
                                                            g = d.nextSibling;
                                                        return o(d, (n = k(() => h() === 0), () => {
                                                            return n() ? e(he, {
                                                                class: "size-6"
                                                            }) : (u = k(() => h() === 1), () => u() ? e(be, {
                                                                class: "size-6"
                                                            }) : e(pe, {
                                                                class: "size-6"
                                                            }));
                                                            var u
                                                        })), o(g, () => i.nickName), s
                                                    }
                                                }), e(z, {
                                                    class: "py-3",
                                                    get children() {
                                                        var n = W1(),
                                                            s = n.firstChild;
                                                        return s.firstChild, o(n, e(j, {
                                                            get token() {
                                                                return t(i.currencyName)
                                                            }
                                                        }), s), o(s, () => i.winAmount, null), n
                                                    }
                                                }), e(z, {
                                                    class: "py-3",
                                                    get children() {
                                                        var n = $1(),
                                                            s = n.firstChild;
                                                        return o(n, e(j, {
                                                            get token() {
                                                                return t(i.currencyName)
                                                            }
                                                        }), s), o(s, () => i.betAmount), n
                                                    }
                                                }), e(z, {
                                                    class: "py-3 text-primary font-extrabold",
                                                    get children() {
                                                        return [k(() => Number(i.oddsString || 0)), "×"]
                                                    }
                                                })]
                                            }
                                        })
                                    })
                                }
                            })]
                        }
                    })
                }
            })
        }
    })
}

function ea(t) {
    return S(this, arguments, function*({
        queryKey: a
    }) {
        return yield K().get(`/game/home/introduction/?areaCode=${a[1]}&gameUrl=${a[2]}`)
    })
}

function aa(a) {
    return t = B1(), $(() => t.innerHTML = a.introduction), t;
    var t
}

function ta(t) {
    return S(this, arguments, function*({
        queryKey: a
    }) {
        return yield K().post("/comment/star/scores/", {
            gameUnique: a[1]
        })
    })
}

function ra() {
    const a = T(),
        t = e1(),
        r = Ve("GameRecommend");
    return e(r, {
        get title() {
            return m("Recommended Games")
        },
        get link() {
            return `/gamelist/game-related?gameUnique=${a.gameUnique}`
        },
        get data() {
            return t()
        },
        class: "-mt-2 mb-4",
        replace: !0
    })
}
const Ue = _e(null);

function ia(a) {
    const t = Ke({
        tabs: []
    });
    return e(Ue.Provider, {
        value: t,
        get children() {
            return a.children
        }
    })
}

function Fe() {
    return we(Ue)
}
var la = f('<div class="flex justify-between items-center w-28 sm:w-18 h-10 px-3 bg-layer4 text-quarterary rounded-md cursor-pointer">'),
    sa = f('<div class="absolute right-0 -top-1">'),
    na = f('<div class="pb-4 relative"><div class="h-8 pt-1 px-2 leading-8 text-base font-extrabold text-primary">'),
    oa = f('<button class="radio btn-like select-item sm:!w-18 ">');

function da() {
    const a = Fe(),
        {
            game: t
        } = a1(),
        r = Ve("GameTabs"),
        [l, c] = A(0),
        i = R(() => a[0].tabs),
        {
            size: h,
            setSize: n
        } = (t instanceof ge ? t1() : r1()) || {},
        [s, d] = A(!1),
        g = R(() => t instanceof ge && [0, 1].includes(l()) || t instanceof i1 && [0].includes(l()));
    return ee(() => {
        i() && c(0)
    }), u = na(), b = u.firstChild, o(b, () => m("Latest bet & Race")), o(u, e(D, {
        get value() {
            return l()
        },
        onChange: c,
        get class() {
            return G("bg-[#E4E6E7] dark:bg-[#323738] ml-auto sm:-mt-9 w-full sm:w-auto latest-tabs", g() && "sm:mr-20")
        },
        get children() {
            return [e(E, {
                get each() {
                    return i()
                },
                children: y => e(D.TabItem, {
                    get title() {
                        return y.title
                    },
                    get children() {
                        return y.content()
                    }
                })
            }), e(r, {})]
        }
    }), null), o(u, e(L, {
        get when() {
            return g()
        },
        get children() {
            var y = sa();
            return o(y, e(Ye, {
                class: " sm:!w-18 px-0",
                get visible() {
                    return s()
                },
                setVisible: d,
                get layer() {
                    return e(E, {
                        each: [l1, s1, n1],
                        children: C => {
                            const x = R(() => C === h() ? {
                                "aria-selected": !0
                            } : {});
                            return v = oa(), U(v, I(x, {
                                onClick: () => {
                                    n(C), d(!1)
                                }
                            }), !1, !0), o(v, C), v;
                            var v
                        }
                    })
                },
                get children() {
                    var C = la();
                    return o(C, h, null), o(C, e(ke, {
                        class: "bg-layer5 hover:bg-layer5 size-6 px-2",
                        get children() {
                            return e(Pe, {
                                class: "-rotate-90"
                            })
                        }
                    }), null), C
                }
            })), y
        }
    }), null), u;
    var u, b
}

function Ia(a) {
    return (0, Fe()[1])("tabs", a.tabs), null
}
var ua = f('<div class="flex flex-1 center">'),
    ca = f('<div id=game-full-layout class="mx-auto py-3 sm:py-0 grid-cols-1">'),
    ga = f('<div class="flex flex-col max-w-[1200px] mx-auto">'),
    ma = f('<div id=game-full-container class="max-w-[1232px] mx-auto w-full sm:px-4 sm:pb-5 transition-all duration-200 @container">'),
    pa = f("<span>"),
    ha = f('<div class="h-80 sm:h-[38rem] center bg-layer4 light-game-view rounded-xl">');
const N = ["baccarat", "classic-dice", "coinflip", "ring-of-fortune", "crash", "fastparity", "hash-dice", "hilo", "keno-multiplayer", "keno", "limbo", "mines", "parity", "plinko", "roulette", "RouletteSingle", "tower-legend", "twist", "ultimate-dice", "video-poker", "wheel", "double", "cave", "roulette-multiplayer", "stellar-rush", "bingo", "color", "fast-crash", "patti", "bingo", "jade", "sicbo-multiplayer", "fish-prawn-crab", "baccarat-multiplayer", "blackjack", "oriental-beauties", "sword"],
    je = ["live-baccarat-by-wali-games", "dragon-phoenix-by-wali-games", "niu-niu-by-wali-games", "dragon-tiger-by-wali-games", "sic-bo-by-wali-games", "roulette-table-by-wali-games", "red-white-by-wali-games", "red-black-war-by-wali-games", "red-envelope-grab-by-wali-games", "sic-bo-bo-by-wali-games", "benz-bmw-by-wali-games", "birds-beasts-by-wali-games", "dragon-tiger-fight-by-wali-games", "electronic-baccarat-by-wali-games", "fish-prawn-crab-by-wali-games", "five-star-glory-by-wali-games", "forest-dance-party-by-wali-games", "hundred-player-tui-tong-zi-by-wali-games", "hundred-player-three-card-poker-by-wali-games", "hundred-player-bullfight-by-wali-games", "arcade-horse-racing-by-wali-games", "fishing-game-by-wali-games", "fortune-arrives-by-wali-games", "linked-treasure-hunt-by-wali-games", "hundred-player-texas-holdem-by-wali-games", "hundred-player-shoot-the-dragon-gate-by-wali-games", "fight-the-landlord-by-wali-games", "three-card-poker-by-wali-games", "banker-bullfight-by-wali-games", "two-player-mahjong-by-wali-games", "texas-holdem-poker-by-wali-games", "fast-run-by-wali-games", "blackjack-by-wali-games", "banker-three-faces-by-wali-games", "three-card-banker-bullfight-by-wali-games", "banker-pai-gow-by-wali-games", "banker-two-eight-bars-by-wali-games", "competing-bullfight-by-wali-games", "blood-flowing-river-by-wali-games", "thirteen-water-by-wali-games", "banker-three-card-poker-by-wali-games", "explosive-golden-bull-by-wali-games", "joker-bullfight-by-wali-games", "two-player-bullfight-by-wali-games", "four-card-banker-bullfight-by-wali-games", "crazy-banker-bullfight-by-wali-games", "four-player-bullfight-by-wali-games", "casino-poker-by-wali-games", "blackjack21-by-wali-games"],
    ye = [...je, "amigo-open-by-amigo", "amigo-open-by-atsupachi", "anazagoddohadesu-ubawareta-by-atsupachi", "bajirisuku-kizuna2-by-atsupachi", "cr-hokuto-no-ken-6-tensho-hyakuretsu-by-atsupachi", "cr-hokutonokobushi-6-ken-o-by-atsupachi", "cr-pachinkourutorasebun2-by-atsupachi", "cr-shin-hokuto-musou-by-atsupachi", "million-god-triumph-of-the-gods-by-atsupachi", "monster-hunter-thunder-by-atsupachi", "p-one-punch-man-by-atsupachi", "sho-ba-by-atsupachi", "superjackpot-connection-mode-by-atsupachi", "night-butterfly-flight-by-atsupachi", "cr-shocked-qian-xingping-with-teamz-by-atsupachi", "raiden-3-by-atsupachi", "super-miracle-juggler-by-atsupachi", "cr-tekken-2-magusin-edition-by-atsupachi"],
    Pa = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: function() {
            const a = T(),
                t = De(),
                r = () => a.gameUnique,
                {
                    isBrAuditHost: l
                } = M.getHostType(V.host),
                c = Ie(),
                i = n => {
                    n.stopPropagation(), N.includes(r()) ? t(-1) : t(-99)
                };
            Xe(() => {
                const n = document.querySelector(".dialog-back");
                n && n.addEventListener("click", i, !0)
            }), xe(() => {
                const n = document.querySelector(".dialog-back");
                n && n.removeEventListener("click", i, !0)
            });
            const h = () => e(ue, {
                get title() {
                    return e(ce, {})
                },
                get children() {
                    var n = ua();
                    return o(n, e(Ee, {
                        class: "sm:h-[50rem]"
                    })), n
                }
            });
            return e(ia, {
                get children() {
                    return e(L, {
                        get when() {
                            return r()
                        },
                        keyed: !0,
                        get fallback() {
                            return e(h, {})
                        },
                        children: n => (s => {
                            const [d] = Je(() => S(this, null, function*() {
                                let g;
                                return yield o1(s), g = N.includes(s) ? yield H[s](): ye.includes(s) ? yield H["special-slots"](): s === "bc-poker" ? yield H["bc-poker"](): yield H.slots(), g.default
                            }));
                            return e(ue, {
                                get title() {
                                    return k(() => !!N.includes(r()))() ? e(ce, {}) : (g = pa(), o(g, () => {
                                        var u;
                                        return (u = c.data) == null ? void 0 : u.fullName
                                    }), g);
                                    var g
                                },
                                get children() {
                                    var g = ma();
                                    return o(g, e(L, {
                                        get when() {
                                            return d()
                                        },
                                        get children() {
                                            return e(d1, {
                                                get game() {
                                                    var u;
                                                    return (u = d()) == null ? void 0 : u.game
                                                },
                                                get children() {
                                                    return [(b = ca(), o(b, e(Le, {
                                                        get fallback() {
                                                            return ha()
                                                        },
                                                        get children() {
                                                            return e(Qe, {
                                                                get component() {
                                                                    var y;
                                                                    return (y = d()) == null ? void 0 : y.Main
                                                                }
                                                            })
                                                        }
                                                    })), b), (u = ga(), o(u, e(J1, {}), null), o(u, e(L, {
                                                        when: !l,
                                                        get children() {
                                                            return e(ra, {})
                                                        }
                                                    }), null), o(u, e(da, {}), null), u), e(x1, {
                                                        get game() {
                                                            var y;
                                                            return (y = d()) == null ? void 0 : y.game
                                                        }
                                                    })];
                                                    var u, b
                                                }
                                            })
                                        }
                                    })), g
                                }
                            })
                        })(n)
                    })
                }
            })
        },
        originals_games: N,
        score_slots_games: ye,
        waliGameList: je
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Ia as G, Pa as L, Q as S, H as g, N as o, je as w
};