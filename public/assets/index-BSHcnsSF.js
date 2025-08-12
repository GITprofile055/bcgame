const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/Header-DyF-ogeg.js", "assets/common-Byjxyxqw.js", "assets/vendor-DYV1gSPf.js", "assets/index-PMN1ixIk.js", "assets/Icon-BgwktVOY.js", "assets/index-QTA-ca3p.js", "assets/index-CYuUsUXS.js", "assets/utils-YcNhbyA6.js", "assets/index-DIx3mlBq.css", "assets/AfterLogin-DKCFsLgS.js", "assets/index-B7YqamC_.js", "assets/bonus-notifications-BRUOBv2p.js", "assets/index-EkaR1O1e.js", "assets/copyright-DxCg6S75.js", "assets/telegrams-y598HpE9.js", "assets/index-BHMdg_Va.js", "assets/back-to-top-DrCvSIvV.js", "assets/gift-entry-CqKHtwOa.js", "assets/Contest-Brd8lQcl.js", "assets/MxTerm-AJS_k6P2.js", "assets/ThrowAndHighRolles-CE5qi-lg.js", "assets/FavoriteRecent-Hm9M1PXq.js", "assets/GameEntryWrap-C9dW8g06.js", "assets/index-CfIHZvAL.js", "assets/index-DGrwMa4j.js", "assets/index-C6W-VjaN.css", "assets/index-Bs2x4uPH.js", "assets/index-DE4WAogm.js", "assets/index-D4hbk3KI.js", "assets/Block-2rLZyxZ7.js", "assets/discord-CWdcd-a3.js", "assets/index-C8hVHCbv.js", "assets/Filter-DiS0YlUI.js", "assets/index-BtmcZSdd.js", "assets/index-CQlH79qn.js", "assets/index-CJ_GCYOv.js", "assets/index-B6WvapWw.js", "assets/index-CMJi8fZF.js", "assets/index-robzggii.js", "assets/ReCommend-oY8MHZsD.js", "assets/index-DbsiaU0D.js", "assets/guide-DgzpSgJZ.js", "assets/createSteps-CDUGPR2P.js", "assets/notfound-B02vrRn1.js", "assets/index-Bhonj8vc.js", "assets/Update-5wgwH0B4.js", "assets/Ad-CCFLkFOm.js", "assets/installPrompt-BrbPWosX.js", "assets/utils-BHthhcHa.js", "assets/BrLogout-BiHJHPcW.js", "assets/index-BL0OIdD0.js", "assets/index-CueGkae-.js", "assets/Sports.page-RDXfHRnG.js", "assets/index-IPJLlucQ.js", "assets/index-DV2wY0fR.js", "assets/index-CeLedalj.js", "assets/index-DdNgfJh_.js", "assets/license-BuuOUZ30.js", "assets/index-CFjg2HyU.js", "assets/Main-CsXfA-FQ.js"]))) => i.map(i => d[i]);
import {
    aa as lo,
    ab as co,
    ac as uo,
    ad as go,
    ae as mo,
    af as po,
    ag as fo,
    b as B,
    k as n,
    v,
    y as g,
    E as R,
    G as P,
    Y as E,
    h as N,
    o as ve,
    a3 as Ve,
    O as ie,
    m as V,
    s as Ot,
    z as wn,
    r as tt,
    V as x,
    d as Se,
    g as nt,
    u as Ne,
    F as W,
    Q as be,
    a2 as ye,
    c as kn,
    f as ot,
    ah as ho,
    H as we,
    n as _o,
    B as Ze,
    I as Nt,
    J as K,
    _ as ae,
    Z as Vt,
    e as vo,
    a4 as at,
    t as bo,
    a9 as ke,
    ai as In,
    aj as yo,
    P as wo,
    X as En,
    K as Pe,
    a1 as ko,
    ak as Io,
    M as Eo,
    al as xo,
    am as de,
    an as Je,
    ao as Co,
    ap as Do,
    aq as $o
} from "./vendor-DYV1gSPf.js";
import {
    m as Po,
    e as c,
    s as xn,
    u as C,
    a as S,
    _ as f,
    b as L,
    g as Be,
    c as So,
    d as I,
    f as Ao,
    r as Lo,
    h as Ro,
    B as q,
    i as U,
    j as X,
    k as Y,
    l as Mt,
    n as F,
    o as Ye,
    t as qe,
    p as Ie,
    q as To,
    v as Bo,
    w as Oo,
    x as No,
    y as Cn,
    E as vt,
    P as Vo,
    z as Mo,
    I as Ht,
    A as Dn,
    R as $n,
    S as Pn,
    L as bt,
    C as Ho,
    D as Sn,
    F as Me,
    G as Uo,
    T as An,
    M as Go,
    H as Fo,
    J as Ce,
    K as zo,
    N as jo,
    O as Ln,
    Q as Wo,
    U as Ko,
    V as M,
    W as Ut,
    X as Jo,
    Y as Oe,
    Z as qo,
    $ as Rn,
    a0 as Yo,
    a1 as _t,
    a2 as Rt,
    a3 as ee,
    a4 as Xo,
    a5 as Qo,
    a6 as Zo,
    a7 as ea,
    a8 as ce,
    a9 as ht,
    aa as ta,
    ab as Xe,
    ac as na,
    ad as Tt,
    ae as oa,
    af as aa,
    ag as ra,
    ah as ia
} from "./common-Byjxyxqw.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
    new MutationObserver(r => {
        for (const i of r)
            if (i.type === "childList")
                for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && o(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function a(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function o(r) {
        if (r.ep) return;
        r.ep = !0;
        const i = a(r);
        fetch(r.href, i)
    }
})();
globalThis._bc = {
    l5q36m: go,
    h0lnfr: uo,
    inqq9w: co,
    dxzurp: lo,
    fcsy: Po
};
Object.hasOwn || Object.defineProperty(Object, "hasOwn", {
    value: function(e, t) {
        if (e == null) throw new TypeError("Cannot convert undefined or null to object");
        return Object.prototype.hasOwnProperty.call(Object(e), t)
    },
    configurable: !0,
    enumerable: !1,
    writable: !0
});
const qt = globalThis ? .location ? .hostname ? .match(/([^.]+\.[^.]+)$/) || null,
    Qe = c.initSearchParams ? .get("env_host") || (qt ? qt[0] : "bc.game"),
    sa = "".split(" "),
    Et = 0,
    Yt = "app_version";

function la(e = !1) {
    let a = (localStorage.getItem(Yt) || "").split(".").map(l => Number(l)),
        o = isNaN(a[0]) || a[0] === 0 ? Et : a[0],
        r = isNaN(a[1]) ? 0 : a[1],
        i = `${o}.${r}`;
    return o !== Et ? (o = Et, i = `${String(o)}.0`) : e && (r++, i = `${o}.${r}`, c.version = i), localStorage.setItem(Yt, i), i
}

function ca() {
    return ["bzjogos.com", "cocoforyou.top"].includes(Qe) ? "BZ" : ["bcsports.game", "bz.com"].includes(Qe) ? "BS" : ["87.com", "dogcrash.top"].includes(Qe) ? "87" : "BC"
}

function da() {
    return ["bcsports.game", "bz.com"].includes(Qe) ? "#FFFF00" : "#24EE89"
}

function Tn() {
    return !!(c.initSearchParams.get("_mjb") || window.jsBridge || window.jsbridge || window.ANDROID_JS_BRIDGE || window.android)
}
xn({
    isDev: !1,
    isDevHost: !1,
    imgHost: "img2.distributedresourcestorage.com",
    version: la(),
    host: Qe,
    buildHost: "BC.GAME".toLocaleUpperCase(),
    siteName: ca(),
    brandColor: da(),
    mascot: "COCO",
    platformCoin: "BCD",
    bcl: "BCL",
    freeCoin: "JB",
    SUPPORT: "recovery@bcgame.com",
    FEEDBACK: "feedback@bcgame.com",
    GITHUB: "bcgame-project",
    SD_PROJECT: "production",
    UA_ID: "G-B23BPN2TGE",
    RECAPTCHA_V3_ID: "",
    HCAPTCHA_ID: "cf0b9a27-82e3-42fb-bfec-562f8045e495",
    crashSalt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
    KENO_SALT: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
    BLACKJACK_SALT: "00000000000000000009e93621499e5a63d79a6293609ce52e95e93dd49cb1be",
    BLACKJACK_PUBLIC_KEY: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDE9QKpw5CHZyf+OfcrT5MCeiCRCLVZjDVUSPGzwXdoGAcRi/r9y7T8t4/byXNTLky0h9dUGKBowwN7bt7fgMKvWAtz0Xf4ztfpsEoRHrzRs2r8khPUjihjrz0N+oPQ+ktAh7M95ZnQfgt/hNWFevGRd+SVsGsWhO8VFrBYb7nS8wIDAQAB",
    ISHUMEI_KEY: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1H4eR+xoG7K9NIBf3K6PmfnRsGkaH3aGz9A/XkYhIQdrN6XKBWt6fnxEqDe1Xp27o/VOd02JPNG6JKkJ8pVyjjUXdukNkbKADzxEYmkLn/7O5hpgHMHWiZ6iKTNlDWAQ96viViXa4Bq1Ju1u3DWnH9m+6Sz1zEAQOLH6XnQSS8QIDAQAB",
    WALLET_CONNECT_PROJECT_ID: "7312b2cd1e88e3734b150df3a241c477",
    DESIGN_WIDTH: 430,
    MAX_DESIGN_WIDTH: 645,
    FACEBOOK_KEY: "363146184450773",
    GOOGLE_KEY: "36897522347-eotiq46nvilc5p10653s4mtbs8405sbn.apps.googleusercontent.com",
    disableModule: sa,
    specialCurrencys: new Set(["JB", "BB", "CUP2022"]),
    langs: {
        en: ["English", "en-US"],
        "en-IN": ["Indian English", "en-IN"],
        vi: ["Tiếng việt", "vi-VN"],
        id: ["Indonesian", "id-ID"],
        ja: ["日本語", "ja-JP"],
        ko: ["한국어", "ko-KR"],
        fr: ["Français", "fr-FR"],
        es: ["Español", "es-ES"],
        "es-MX": ["Español (México)", "es-MX"],
        fil: ["Filipino", "fil-PH"],
        ar: ["عربى", "ar-SA"],
        hi: ["हिन्दी", "hi-IN"],
        tr: ["Türkçe", "tr-TR"],
        fa: ["فارسی", "fa-IR"],
        pt: ["Português", "pt-BR"],
        ru: ["Руccкий", "ru-RU"],
        de: ["Deutsch", "de-DE"],
        th: ["ภาษาไทย", "th-TH"],
        fi: ["Suomi", "fi-FI"],
        pl: ["Polski", "pl-PL"],
        it: ["Italiano", "it-IT"],
        my: ["မြန်မာ", "my-MM"],
        ur: ["اردو", "ur-PK"],
        uk: ["Українська", "uk-UA"],
        ms: ["Melayu", "ms-MY"],
        bn: ["বাংলা", "bn-BD"],
        mr: ["Marathi", "mr-IN"],
        ta: ["Tamil", "ta-IN"],
        te: ["Telugu", "te-IN"],
        "zh-TW": ["繁體中文", "zh-TW"],
        "zh-CN": ["简体中文", "zh-CN"],
        hy: ["Հայերեն", "hy-AM"]
    },
    localCurrencyConfig: [
        ["USD", "$", "US", !1, "US Dollar"],
        ["BRL", "R$", "BR", !0, "Brazil"],
        ["INR", "₹", "IN", !0, "India"],
        ["EUR", "€", "", !1, "Euro"],
        ["RUB", "₽", "RU", !0, "Russia"],
        ["NGN", "₦", "NG", !1, "Nigeria"],
        ["IDR", "Rp", "ID", !0, "Indonesia"],
        ["BDT", "৳", "BD", !1, "Bangladesh"],
        ["PHP", "₱", "PH", !0, "Philippine"],
        ["VND", "₫", "VN", !0, "Vietnam"],
        ["THB", "฿", "TH", !0, "Thailand"],
        ["KZT", "₸", "KZ", !0, "Kazakhstani tenge"],
        ["MAD", "د.م.", "MA", !1, "Morocco"],
        ["ZAR", "R", "ZA", !1, "South Africa"],
        ["PLN", "zł", "PL", !1, "Poland"],
        ["CUP", "₱", "CU", !1, "Cuba"],
        ["KRW", "₩", "KR", !1, "Korea"],
        ["JPY", "¥", "JP", !1, "Japan"],
        ["GBP", "£", "GB", !1, "United Kingdom"],
        ["HRK", "kn", "HR", !1, "Croatia"],
        ["ISK", "kr", "IS", !1, "Iceland"],
        ["HUF", "Ft", "HU", !1, "Hungary"],
        ["NOK", "kr", "NO", !1, "Norwegian"],
        ["NZD", "$", "CK", !1, "New Zealand Dollar"],
        ["ARS", "$", "AR", !1, "Argentina Peso"],
        ["MXN", "MEX$", "MX", !1, "Mexico Peso"],
        ["AUD", "AU$", "AU", !1, "Australia Dollar"],
        ["TRY", "₺", "TR", !1, "Turkey Lira"],
        ["IRR", "﷼", "IR", !1, "Iran Rial"],
        ["AED", "د.إ", "AE", !1, "UAE-Dirham"],
        ["CAD", "CA$", "CA", !1, "Canada Dollar"],
        ["UAH", "₴", "UA", !1, "Ukraine Hryvnia"],
        ["CZK", "Kč", "CZ", !1, "Czech Republic Koruna"],
        ["LKR", "₨", "LK", !1, "Sri Lanka Rupee"],
        ["ILS", "₪", "IL", !1, "Israel Shekel"],
        ["EGP", "£", "EG", !1, "Egypt Pound"],
        ["PKR", "₨", "PK", !1, "Pakistan Rupee"],
        ["GHS", "¢", "GH", !1, "Ghana Cedi"],
        ["VEF", "Bs", "VE", !1, "Venezuela Bolívar"],
        ["PEN", "S/.", "PE", !1, "Peru Sol"],
        ["RON", "lei", "RO", !1, "Romania Leu"],
        ["BGN", "лв", "BG", !1, "Bulgaria Lev"],
        ["RSD", "Дин.", "RS", !1, "Serbia Dinar"],
        ["CLP", "CLP$", "CL", !1, "Chile Peso"],
        ["KES", "KSh", "KSh", !1, "Kenya Shilling"],
        ["AZN", "₼", "AZ", !1, "Azerbaijani Manat"],
        ["KGS", "сом", "KG", !1, "Kyrgyzstani Som"],
        ["MDL", "L", "MD", !1, "Moldovan Leu"],
        ["MYR", "RM", "MY", !1, "Malaysian Ringgit"],
        ["COP", "Col$", "CO", !1, "Colombian Peso"],
        ["XOF", "CFA", "XOF", !1, "West African CFA franc"],
        ["XAF", "FCFA", "XA", !1, "Central African CFA franc"],
        ["UZS", "soʻm", "UZ", !1, "Uzbekistani Som"],
        ["UGX", "USh", "UG", !1, "Ugandan Shilling"],
        ["TWD", "NT$", "TW", !1, "New Taiwan Dollar"],
        ["CNY", "¥", "CN", !1, "Chinese Yuan"],
        ["AMD", "֏", "AM", !1, "Armenian Dram"]
    ],
    inActive: !1,
    isPWA: window.matchMedia("(display-mode: standalone)").matches,
    isAPP: Tn()
});
C.isIos() && setTimeout(() => {
    xn({
        isAPP: Tn()
    })
}, 1);
const pe = () => f(() =>
        import ("./index-mgbZhYPH.js"), []).then(e => e.default),
    ua = /^http/;
let Xt = "",
    He = !0;
async function ga({
    url: e,
    referrer: t = Xt,
    title: a = ""
}) {
    if (!e || !He) return;
    const o = window.location.origin;
    Xt = e;
    const r = `${o}${e}`;
    let i = t;
    ua.test(t) || (i = `${o}${t}`), c.SD_PROJECT && (await pe()).quick("autoTrackSinglePage", {
        $url: r,
        $url_path: e,
        $referrer: i,
        $title: a
    })
}
async function Gt(e, t = {}) {
    He && c.SD_PROJECT && (await pe()).track(e, t)
}
async function ma() {
    return !c.SD_PROJECT || !He ? {} : (await pe()).getPresetProperties()
}
async function pa(e) {
    if (!c.SD_PROJECT || !He) return;
    const t = await ma();
    (await pe()).setOnceProfile({
        regist_utm_source: t.$latest_utm_source,
        ...e
    })
}
async function fa(e) {
    if (!c.SD_PROJECT || !He) return;
    (await pe()).setProfile({ ...e
    })
}
const ha = ["resizeobserver loop", "seed in use", "failed to start the audio device", "image load error!", "insufficient balance.", "refresh please.", "network error!"];

function Qt(e, t = "") {
    if (!e || !e.message) return;
    if (t === "") {
        const i = e.stack && e.stack.split(`
`);
        if (i && i.length > 2) {
            const l = i[1].replace(/.*\//, "");
            t = `${i[i.length-1].replace(/.*\//,"")}->${l}`
        }
    }
    let a = e.message.toLowerCase();
    for (let i of ha)
        if (a.search(i) !== -1) return;
    const o = e.tip;
    let r = e.message;
    o && (r += `[${o}]`), Gt("error_notification", {
        error_content: r,
        error_type: t,
        error_id: "0"
    })
}

function _a() {
    globalThis.addEventListener("error", e => {
        let t = e.error,
            a = "";
        t || (t = new Error(e.message), a = `${e.filename.replace(/.*\//,"")}:${e.lineno}:${e.colno}`), a !== ":0:0" && Qt(t, a)
    }), globalThis.addEventListener("unhandledrejection", e => {
        if (!e.reason) return;
        let t = e.reason;
        typeof t == "string" && (t = new Error(t)), Qt(t)
    })
}
const va = mo(async () => {
    const e = await pe();
    return new Promise(t => {
        e.quick("isReady", function() {
            t(e.quick("getAnonymousID"))
        })
    })
});
async function ba() {
    return c.isDev ? "dev-test" : (await pe()).store.getDistinctId() || await va() || "empty_distinct_id"
}
async function ya() {
    if (He = !0, c.SD_PROJECT) {
        const e = await pe();
        window.sensorsdata_trackurl = c.isDev ? "https://api.ccsccorp.com/api/dlog/v1/collect?appId=bcdev&token=4dacf8fa" : c.isDevHost ? "https://api.ccsccorp.com/api/dlog/v1/collect?appId=bctest&token=80ad16b3" : "https://api.ccsccorp.com/api/dlog/v1/collect?appId=bc&token=87dea791", e.init({
            server_url: `https://collect.analyse.lnearn.com/sa?project=${c.SD_PROJECT}`,
            show_log: !1,
            heatmap: {
                clickmap: "not_collect"
            },
            source_channel: ["stag"],
            batch_send: !1
        });
        const t = new URLSearchParams(location.search),
            a = document.cookie.match(/utm_source=(.*?);/),
            o = a ? a[1] : "";
        !t.has("utm_source") && o && (document.cookie = "utm_source=;expires=Thu, 01 Jan 1970 00:00:01 GMT", t.set("utm_source", o), e.store.setProps({
            $latest_utm_source: o
        })), e.registerPage({
            lang: () => L.lang,
            theme: () => L.theme,
            system_date: String(new Date().getTimezoneOffset() / -60)
        }), _a()
    }
}
async function wa({
    userId: e,
    level: t
}) {
    const a = await pe();
    a.login(String(e)), a.registerPage({
        level: () => Number(t)
    })
}
const ka = {
    _profile_set_once: pa,
    _login_user: wa,
    _profile_set: fa
};
S.on("sensorsTrack", e => {
    try {
        const {
            event: t,
            ...a
        } = e;
        if (!t) throw new Error("Event is missing in sensorsTrack args");
        Ia(t, a)
    } catch (t) {
        console.error("Error handling sensorsTrack:", t)
    }
});

function Ia(e, t) {
    const a = ka[e];
    a ? a(t) : Gt(e, t)
}
const me = {
    init: ya,
    trackPageView: ga,
    trackEvent: Gt,
    getDistinctId: ba
};
po.clear();
"scrollRestoration" in history && (history.scrollRestoration = "manual");
document.addEventListener("dblclick", function(e) {
    e.preventDefault()
}, {
    passive: !1
});
async function Ea() {
    await So(() => I.areaCode !== "");
    const e = c.isDevHost ? "dev" : await me.getDistinctId();
    return {
        areaCode: I.areaCode,
        distinctId: e
    }
}
const Zt = Be();
Zt.on("pong", e => {
    e > 2 ** 31 || Zt.engine.transport.ws.send(Uint8Array.of(9, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e >> 0 & 255).buffer)
});
const xa = e => Ea().then(e),
    yt = 1024,
    Ca = yt,
    Cu = yt >> 1,
    Du = yt >> 2,
    $u = yt >> 3,
    {
        isUsHost: Da,
        isBrAuditHost: $a
    } = C.getHostType(c.host);

function Bn(e) {
    fo(e, (t, a) => e[a.toLocaleLowerCase()] = t.toLocaleLowerCase()), Lo(e)
}
Da && Bn({
    "Responsible Gambling": "Responsible Gaming",
    "Live Dealers": "Game Hosts",
    Baccarat: "Baccarat-style Game",
    Craps: "Dice Game",
    Poker: "Poker-style Game",
    Blackjack: "Card Game",
    Roulette: "Wheel Game",
    Withdrawal: "Redeem",
    Withdraw: "Redeem",
    Payout: "Prize",
    Deposits: "Purchase",
    "Deposit Currency": "Purchase Currency",
    "Deposit address": "Purchase address",
    Deposit: "Buy",
    Jackpot: "Grand Prize",
    "Slot Machine": "Slot-style Game",
    Wager: "Entry",
    Gamble: "Game",
    Gambling: "Gaming",
    Casino: "Social Casino",
    Betting: "Playing",
    Bets: "Entries",
    Bet: "Play"
});
$a && Bn({
    BCD: "BRL"
});
const {
    t: _,
    Trans: en
} = Ao(Object.assign({
    "../locales/ar-SA/index.json": () => f(() =>
        import ("./index-DPG2BvQU.js"), []).then(e => e.default),
    "../locales/bn-BD/index.json": () => f(() =>
        import ("./index-CH21ebtG.js"), []).then(e => e.default),
    "../locales/de-DE/index.json": () => f(() =>
        import ("./index-DKBg3pM8.js"), []).then(e => e.default),
    "../locales/en-IN/index.json": () => f(() =>
        import ("./index-DHMPfav-.js"), []).then(e => e.default),
    "../locales/en-US/index.json": () => f(() =>
        import ("./index-CF9-N7pZ.js"), []).then(e => e.default),
    "../locales/es-ES/index.json": () => f(() =>
        import ("./index-RTZx9DG_.js"), []).then(e => e.default),
    "../locales/es-MX/index.json": () => f(() =>
        import ("./index-DCI-qZrn.js"), []).then(e => e.default),
    "../locales/fa-IR/index.json": () => f(() =>
        import ("./index-C-U-ToNC.js"), []).then(e => e.default),
    "../locales/fi-FI/index.json": () => f(() =>
        import ("./index-BKQwurY9.js"), []).then(e => e.default),
    "../locales/fil-PH/index.json": () => f(() =>
        import ("./index-Jt4vRXiT.js"), []).then(e => e.default),
    "../locales/fr-FR/index.json": () => f(() =>
        import ("./index-Dg3muJ3U.js"), []).then(e => e.default),
    "../locales/hi-IN/index.json": () => f(() =>
        import ("./index-7PD4v1fG.js"), []).then(e => e.default),
    "../locales/hy-AM/index.json": () => f(() =>
        import ("./index-QVi7Lr68.js"), []).then(e => e.default),
    "../locales/id-ID/index.json": () => f(() =>
        import ("./index-C8yDGFpm.js"), []).then(e => e.default),
    "../locales/it-IT/index.json": () => f(() =>
        import ("./index-Ccu-JJ2o.js"), []).then(e => e.default),
    "../locales/ja-JP/index.json": () => f(() =>
        import ("./index-DLys5Zal.js"), []).then(e => e.default),
    "../locales/ko-KR/index.json": () => f(() =>
        import ("./index-c72ST2AL.js"), []).then(e => e.default),
    "../locales/mr-IN/index.json": () => f(() =>
        import ("./index-DzWfEZLl.js"), []).then(e => e.default),
    "../locales/ms-MY/index.json": () => f(() =>
        import ("./index-B4tQxvZ7.js"), []).then(e => e.default),
    "../locales/my-MM/index.json": () => f(() =>
        import ("./index-DFXeTkqg.js"), []).then(e => e.default),
    "../locales/pl-PL/index.json": () => f(() =>
        import ("./index-CUZeCTxV.js"), []).then(e => e.default),
    "../locales/pt-BR/index.json": () => f(() =>
        import ("./index-DBGOZcr-.js"), []).then(e => e.default),
    "../locales/ru-RU/index.json": () => f(() =>
        import ("./index-Bf8MElGQ.js"), []).then(e => e.default),
    "../locales/ta-IN/index.json": () => f(() =>
        import ("./index-C36OzA9n.js"), []).then(e => e.default),
    "../locales/te-IN/index.json": () => f(() =>
        import ("./index-Bv6QyxoP.js"), []).then(e => e.default),
    "../locales/th-TH/index.json": () => f(() =>
        import ("./index-wcbN4VBC.js"), []).then(e => e.default),
    "../locales/tr-TR/index.json": () => f(() =>
        import ("./index-CC9g9sh4.js"), []).then(e => e.default),
    "../locales/uk-UA/index.json": () => f(() =>
        import ("./index-CvQ-Qj42.js"), []).then(e => e.default),
    "../locales/ur-PK/index.json": () => f(() =>
        import ("./index-oYwV7dWa.js"), []).then(e => e.default),
    "../locales/vi-VN/index.json": () => f(() =>
        import ("./index-BAwUoKPF.js"), []).then(e => e.default),
    "../locales/zh-CN/index.json": () => f(() =>
        import ("./index-ChOWrZPE.js"), []).then(e => e.default),
    "../locales/zh-TW/index.json": () => f(() =>
        import ("./index-CUkfB-gf.js"), []).then(e => e.default)
}), "root"), Pu = Object.assign({
    "../locales/ar-SA/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-BNazf07S.js"), []).then(e => e.default),
    "../locales/bn-BD/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-BuVa8Fr4.js"), []).then(e => e.default),
    "../locales/de-DE/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-CiqLDzY9.js"), []).then(e => e.default),
    "../locales/en-US/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-B8XA0kSA.js"), []).then(e => e.default),
    "../locales/es-ES/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-F-3Erhtw.js"), []).then(e => e.default),
    "../locales/fa-IR/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-B_jcKQ4S.js"), []).then(e => e.default),
    "../locales/fi-FI/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-C9KD-C5a.js"), []).then(e => e.default),
    "../locales/fil-PH/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-Bi242g1i.js"), []).then(e => e.default),
    "../locales/fr-FR/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-Oery4vgg.js"), []).then(e => e.default),
    "../locales/hi-IN/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-DRw7fEOM.js"), []).then(e => e.default),
    "../locales/id-ID/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-u9nyWi14.js"), []).then(e => e.default),
    "../locales/it-IT/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-qINeEHV1.js"), []).then(e => e.default),
    "../locales/ja-JP/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-CCkrphJb.js"), []).then(e => e.default),
    "../locales/ko-KR/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-CcYV8_m-.js"), []).then(e => e.default),
    "../locales/ms-MY/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-D3exVik-.js"), []).then(e => e.default),
    "../locales/my-MM/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-BSAtOS-4.js"), []).then(e => e.default),
    "../locales/pl-PL/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-CVzmZjc0.js"), []).then(e => e.default),
    "../locales/pt-BR/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-CDL8XuyM.js"), []).then(e => e.default),
    "../locales/ru-RU/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-BOkYvszm.js"), []).then(e => e.default),
    "../locales/th-TH/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-DX1zlQXc.js"), []).then(e => e.default),
    "../locales/tr-TR/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-CRbwAqaA.js"), []).then(e => e.default),
    "../locales/uk-UA/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-hw8A1ZbP.js"), []).then(e => e.default),
    "../locales/ur-PK/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-RwMk4n40.js"), []).then(e => e.default),
    "../locales/vi-VN/cryptoonlinecasino.html": () => f(() =>
        import ("./cryptoonlinecasino-CpgyZN0y.js"), []).then(e => e.default)
}), Pa = "/assets/cookie-tVC57MhX.png", Sa = "/assets/miami-DYQMA9xx.png", Aa = "/assets/gamcare-ocLkkk6e.png", La = "/assets/leicester-5bY-JKgX.png", Ra = "/assets/responsible-gambling--34MNE2A.png", Ta = "/assets/sigma-DzhjGPHa.png", Ba = "/assets/18-plus-DeAQLka0.png", Oa = "/assets/21-plus-RvBrxxkq.png", Na = "/assets/jason_derulo-fkEa4kAk.png", Va = "/assets/betblocker-DBd5sP60.png", Ma = "/assets/gcb-Diszp8px.png", Ha = "/assets/gcb_light-ID9hjVF9.png", Ua = "/assets/bcbet-BG0EX9We.png", Ga = "/assets/license-BB_iVvuO.png", Fa = "/assets/license_w-Cex575yN.png", za = "/assets/bclb-D8khCNTn.png", ja = "/assets/logo_87-D9BTwpKA.png", Wa = "/assets/logo_87_w-DObNWVa8.png", Ka = "/assets/ios1-ClTojNml.png", Ja = "/assets/ios2-CoslbYN-.png", qa = "/assets/ios3-DuyHGw4r.png", Ya = "/assets/android1-CvyGOCEg.png", Xa = "/assets/android2-ChgbfBbU.png", Qa = "/assets/android3-DB6XBpeP.png", Za = {
    cookie: Pa
}, Su = {
    miami: Sa,
    gamCare: Aa,
    leicester: La,
    responsibleGambling: Ra,
    sigma: Ta,
    plus18: Ba,
    plus21: Oa,
    jasonDerulo: Na,
    betBlocker: Va
}, Au = () => ({
    gcb: L.darken ? Ma : Ha,
    bcbet: Ua,
    license: L.darken ? Ga : Fa,
    bclb: za
}), Lu = {
    logo87Footer: ja,
    logo87FooterLight: Wa
}, Ru = {
    ios1: Ka,
    ios2: Ja,
    ios3: qa,
    android1: Ya,
    android2: Xa,
    android3: Qa
};
var er = v('<div class="left-0 flex w-full items-center gap-x-4 border-b border-solid p-4 fixed bottom-16 z-100 mb-sb min-h-18 max-w-[640px] border-third bg-layer1 sm:bottom-8 sm:left-8 sm:rounded-lg sm:border-none"><img alt=cookie class="flex-none w-4"><p class="mr-2 text-xs text-secondary sm:text-sm">');
const tr = "ignore_cookie_warn",
    [nr, or] = Ro(B(!1), {
        name: tr,
        storage: localStorage
    }),
    ar = window ? .jsBridge || window ? .jsbridge || window ? .ANDROID_JS_BRIDGE || window ? .android,
    rr = window ? .matchMedia("(display-mode: standalone)").matches,
    ir = () => !window.opener && !rr && !ar && !nr(),
    sr = function() {
        return n(E, {
            get when() {
                return ir()
            },
            get children() {
                var t = er(),
                    a = t.firstChild,
                    o = a.nextSibling;
                return g(o, () => _("We use cookies to provide you with the best possible experience")), g(t, n(q, {
                    onClick: () => {
                        or(!0)
                    },
                    size: "m",
                    class: "w-32 border-solid px-4 font-extrabold border-2 border-third sm:ml-auto",
                    get children() {
                        return _("Accept")
                    }
                }), null), R(() => P(a, "src", Za.cookie)), t
            }
        })
    };
var lr = v('<div class="flex w-full rounded-lg center h-16 bg-layer1">');
const cr = function() {
    const [t, a] = B(!1);
    return N(() => {
        const o = () => a(!1),
            r = () => a(!0);
        Be("/game-support").on("connect", o), Be("/game-support").on("reconnecting", r), ve(() => {
            Be("/game-support").off("connect", o), Be("/game-support").off("reconnecting", r)
        })
    }), n(E, {
        get when() {
            return t()
        },
        get children() {
            return n(Ve, {
                ref: o => o.className = "offline-tip",
                get children() {
                    return n(dr, {})
                }
            })
        }
    })
};

function dr() {
    const [e, t] = B(0);
    ie(() => {
        const o = setInterval(() => {
            t(r => r + 1)
        }, 500);
        ve(() => clearInterval(o))
    });
    const a = V(() => Array(e() % 4).fill(".").join(""));
    return (() => {
        var o = lr();
        return g(o, () => _("Connection lost. Trying to reconnect") + a()), o
    })()
}
var ur = v("<div>");
const Re = {
        casino: {
            normal: "casino",
            light: "casino_w",
            select: "casino_g",
            select_light: "casino_g_w",
            pure: "casino_p",
            pure_w: "casino_p_w"
        },
        chat: {
            normal: "chat",
            light: "chat_w",
            select: "chat_g",
            select_light: "chat_g_w",
            pure: "chat_p",
            pure_w: "chat_p_w"
        },
        explore: {
            normal: "explore",
            light: "explore_w",
            select: "explore_g",
            select_light: "explore_g_w",
            pure: "explore_p",
            pure_w: "explore_p_w"
        },
        lottery: {
            normal: "lottery",
            light: "lottery_w",
            select: "lottery_g",
            select_light: "lottery_g_w"
        },
        menu: {
            normal: "menu",
            light: "menu_w",
            select: "menu_g",
            select_light: "menu_g_w",
            pure: "menu_p",
            pure_w: "menu_p_w"
        },
        promotion: {
            normal: "promotion",
            light: "promotion_w",
            select: "promotion_g",
            select_light: "promotion_g_w"
        },
        sports: {
            normal: "sports",
            light: "sports_w",
            select: "sports_g",
            select_light: "sports_g_w",
            pure: "sports_p",
            pure_w: "sports_p_w"
        },
        trading: {
            normal: "trading",
            light: "trading_w",
            select: "trading_g",
            select_light: "trading_g_w"
        },
        new: {
            normal: "new",
            light: "new_w",
            select: "new",
            select_light: "new_w"
        },
        bcpoker: {
            normal: "bcpoker",
            light: "bcpoker_w",
            select: "bcpoker_g",
            select_light: "bcpoker_g_w"
        },
        racing: {
            normal: "racing",
            light: "racing_w",
            select: "racing",
            select_light: "racing_w"
        },
        bingo: {
            normal: "bingo",
            light: "bingo_w",
            select: "bingo",
            select_light: "bingo_w"
        }
    },
    fe = function(t) {
        const [, a] = Ot(t, ["name", "class", "style", "select", "scale"]), o = V(() => t.select ? L.darken ? Re[t.name].select : Re[t.name].select_light : L.darken ? t.tabbar ? Re[t.name].pure : Re[t.name].normal : t.tabbar ? Re[t.name].pure_w : Re[t.name].light);
        return (() => {
            var r = ur();
            return wn(r, tt({
                get class() {
                    return U("color_icon_img", t.class, o())
                },
                get style() {
                    return {
                        transform: t.scale || (c.mobile ? "scale(0.8)" : "scale(0.75)")
                    }
                }
            }, a), !1, !1), r
        })()
    };
var gr = v('<div class="relative flex h-full flex-1 items-center"><div><img alt=logo></div><div class="relative h-full w-full px-4 mx-auto max-w-[1248px]">');
const mr = x(() => f(() =>
        import ("./Header-DyF-ogeg.js").then(e => e.H), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]))),
    pr = x(() => f(() =>
        import ("./Header-DyF-ogeg.js").then(e => e.H), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])).then(e => ({
        default: e.Sidebar
    })));

function fr() {
    const e = X(),
        [t, a] = B(""),
        [o, r] = B(!1),
        [i, l] = B(!1);
    let s = "";
    nt(() => {
        s = t() || s
    });
    const d = () => Ne(() => c.clientWidth < 1280);
    S.on("toggle-sidebar", (u = !1) => {
        r(y => u ? !0 : !y), d() && a("")
    });

    function p(u) {
        u !== "" && d() && r(!0), a(u)
    }
    S.on("lottery-toggle", u => {
        h.toggle("lottery-unfold", u), m("chat-unfold", "chat-fold", () => !1)
    }), N(() => {
        r(c.clientWidth < 1280), p(c.clientWidth > 1024 ? s : "")
    });
    const h = document.body.classList;

    function m(u, y, w) {
        N(() => {
            const O = w();
            h.toggle(u, O), h.toggle(y, !O)
        })
    }
    return m("explore-open", "explore-close", i), m("side-fold", "side-unfold", o), m("chat-unfold", "chat-fold", () => (h.toggle("lottery-unfold", !1), t() !== "")), [n(Ve, {
        ref: u => u.className = "header",
        get children() {
            var u = gr(),
                y = u.firstChild,
                w = y.firstChild,
                O = y.nextSibling;
            return u.style.setProperty("box-shadow", "0px 4px 8px 0px rgba(0, 0, 0, 0.05)"), g(y, n(q, {
                onClick: () => S.emit("toggle-sidebar"),
                class: "flex-none rounded-lg bg-layer5 size-10 p-0",
                get children() {
                    return n(fe, {
                        name: "menu",
                        select: !1
                    })
                }
            }), w), w.$$click = () => e("/"), g(O, n(mr, {
                right: [t, p],
                explore: [i, l]
            })), R(H => {
                var re = U("relative z-10 flex h-full w-60 flex-none items-center px-4", o() ? "w-[72px]" : "w-60"),
                    te = L.darken ? Y.assets(c.inActive ? "/logo/logo_festival.png" : "/logo/logo.png") : Y.assets(c.inActive ? "/logo/logo_w_festival.png" : "/logo/logo_w.png"),
                    se = U("h-8 cursor-pointer ml-5 w-auto", o() && "absolute left-[76px] top-3.5 !ml-0 max-w-100");
                return re !== H.e && W(y, H.e = re), te !== H.t && P(w, "src", H.t = te), se !== H.a && W(w, H.a = se), H
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), u
        }
    }), n(Ve, {
        ref: u => u.className = "sidebar",
        get children() {
            return n(pr, {
                get fold() {
                    return o()
                }
            })
        }
    })]
}
Se(["click"]);
var hr = v('<div class="flex size-full items-center overflow-hidden px-4"><img alt=logo class="h-8 w-auto">');
const _r = function() {
    const t = X();
    return (() => {
        var a = hr(),
            o = a.firstChild;
        return o.$$click = () => t("/"), g(a, n(q, {
            class: "ml-auto h-10 rounded-lg px-4 text-base font-extrabold",
            onClick: () => t("/login/signin"),
            get children() {
                return _("Sign In")
            }
        }), null), g(a, n(q, {
            type: "brand",
            class: "h-10 rounded-lg px-4 text-base min-w-24",
            onClick: () => t("/login/regist"),
            get children() {
                return _("Sign Up")
            }
        }), null), R(() => P(o, "src", L.darken ? Y.assets(c.inActive ? "/logo/logo_festival.png" : "/logo/logo.png") : Y.assets(c.inActive ? "/logo/logo_w_festival.png" : "/logo/logo_w.png"))), a
    })()
};
Se(["click"]);
const vr = x(() => f(() =>
    import ("./AfterLogin-DKCFsLgS.js"), __vite__mapDeps([9, 2, 1, 4, 10, 7, 11])));

function br() {
    const e = be(),
        t = V(() => ["/", "/casino"].indexOf(e.pathname) !== -1),
        a = document.scrollingElement || document.documentElement || document.body,
        [o, r] = B(0),
        i = V(() => c.remScale * 56 * 2),
        l = V(() => {
            const s = o();
            return Math.min(1, s / i())
        });
    return nt(() => r(t() ? 0 : i())), Mt(window, () => t() ? "scroll" : "", s => {
        r(a.scrollTop)
    }), n(Ve, {
        ref: s => {
            s.className = "page-header alpha-layer4 left-0 top-0 w-full fixed z-[99]", N(() => {
                s.style.setProperty("--tw-bg-opacity", String(l()))
            })
        },
        get children() {
            return n(E, {
                get when() {
                    return I.login
                },
                get fallback() {
                    return n(_r, {})
                },
                get children() {
                    return n(ye, {
                        get children() {
                            return n(vr, {})
                        }
                    })
                }
            })
        }
    })
}
const yr = [1, 2, 3, 5],
    wr = 6,
    kr = 4;

function Ir(e) {
    return F().post("/home/system-notice/list/v2/", {
        size: 50,
        appNo: 1,
        userId: I.userId,
        showUnread: e
    })
}

function Er(e, t) {
    const a = e || 1;
    return F().post("/comment/reply/unread/list/", {
        page: a,
        pageSize: 20,
        showUnread: t
    })
}

function xr(e) {
    return e <= 0 ? 0 : e
}

function Cr(e, t = !1) {
    let a = 0;
    return a = e.comment + e.promotion + e.system + e.transaction, t && (a -= e.comment), a
}

function Dr(e) {
    const t = [],
        a = [],
        o = [];
    let r = {
        promotion: 0,
        transaction: 0,
        system: 0,
        comment: 0
    };
    const i = [];
    if (e && e.noticeList && e.noticeList.length > 0) {
        for (let l = 0; l < e.noticeList.length; l++) {
            const s = e.noticeList[l];
            if (s.afficheId === 106076 && (s.type = 4), s.whiteListRegion) s.whiteListRegion.includes(I.areaCode) && i.push(s);
            else {
                const d = s.restrictedRegion;
                (!d || !d.includes(I.areaCode)) && s.afficheId !== 106115 && i.push(s)
            }
        }
        for (let l = 0; l < i.length; l++) yr.includes(i[l].type) && t.push(i[l]), i[l].type === wr && a.push(i[l]), i[l].type === kr && o.push(i[l]);
        r.promotion = t.reduce((l, s) => s.isRead ? l : l + 1, 0), r.transaction = a.reduce((l, s) => s.isRead ? l : l + 1, 0), r.system = o.reduce((l, s) => s.isRead ? l : l + 1, 0)
    }
    return {
        noticeList: i,
        unreadCount: r
    }
}

function $r(e) {
    return F().post(`/comment/reply/del/${e}/`, {})
}

function Pr() {
    return F().get("/comment/reply/read/all/")
}

function Sr() {
    return F().post("/home/system-notice/read-all/", {})
}

function Ar(e, t) {
    return F().post("/home/system-notice/read-one/", {
        afficheId: e,
        afficheType: t === 1 ? 1 : 0
    })
}

function Lr(e, t) {
    return F().post("/home/system-notice/delete-notice/", {
        afficheId: e,
        afficheType: t === 1 ? 1 : 0
    })
}

function Rr() {
    let e = !1,
        t = !1;
    const {
        isBrAuditHost: a
    } = C.getHostType(c.host), [o, r] = ot({
        isOpen: !1,
        currentType: 0,
        noticeList: [],
        commentData: {
            page: 1,
            pageSize: 20,
            total: 0,
            totalPage: 1,
            list: [],
            extra: 0
        },
        unreadCommentList: [],
        httpLoading: !1,
        commentMoreLoading: !1,
        showUnread: !1,
        unreadCount: {
            promotion: 0,
            transaction: 0,
            system: 0,
            comment: 0
        }
    }), i = async (m = !1) => {
        if (t && !m || !I.login) return;
        r("httpLoading", !0);
        const u = localStorage.getItem("noticeUnreadStatus_" + I.userId) === "on";
        try {
            const y = await Promise.all([Ir(u), Er(1, u)]);
            if (y && y.length === 2) {
                let w = Dr(y[0]);
                w.unreadCount.comment = Number(y[1].extra || 0);
                const O = Cr(w.unreadCount);
                let H = o.currentType;
                !t && O > 0 && (w.unreadCount.promotion > 0 ? H = 0 : w.unreadCount.transaction > 0 ? H = 1 : H = 2), Ye("redDot", "systemNotice", a ? w.unreadCount.comment : O);
                const re = y[1].list.filter(te => te.readStatus === 0);
                r({ ...w,
                    commentData: y[1],
                    httpLoading: !1,
                    currentType: H,
                    unreadCommentList: t ? o.unreadCommentList : re
                })
            }
        } catch {}
        return t = !0, o
    };

    function l(m) {
        e || (e = !0, Lr(m, o.currentType).then(() => {
            const u = o.noticeList.filter(y => y.afficheId !== m);
            r({
                noticeList: u
            })
        }).catch(qe).finally(() => {
            e = !1
        }))
    }

    function s(m) {
        e || (e = !0, $r(m).then(() => {
            const u = { ...o.commentData
            };
            u.list = u.list.filter(y => y.id !== m), r(ho(y => {
                y.commentData = u
            }))
        }).catch(qe).finally(() => {
            e = !1
        }))
    }

    function d() {
        const m = !o.showUnread;
        r("showUnread", m), localStorage.setItem("noticeUnreadStatus_" + I.userId, m ? "on" : "off"), i(!0)
    }

    function p() {
        e || (e = !0, Promise.all([Sr(), Pr()]).then(() => {
            const m = { ...o.commentData
            };
            m.list = m.list.map(u => (u.readStatus = 1, u)), Ye("redDot", "systemNotice", 0), r({
                commentData: m,
                noticeList: o.noticeList.map(u => ({ ...u,
                    isRead: 1
                })),
                unreadCount: {
                    promotion: 0,
                    transaction: 0,
                    system: 0,
                    comment: 0
                }
            })
        }).catch(qe).finally(() => {
            e = !1
        }))
    }

    function h(m) {
        e || (e = !0, Ar(m, o.currentType).then(() => {
            let u = { ...o.unreadCount
            };
            o.currentType === 0 ? u.promotion -= 1 : o.currentType === 1 ? u.transaction -= 1 : o.currentType === 2 && (u.system -= 1), r({
                unreadCount: { ...u
                }
            }), Ye("redDot", "systemNotice", xr(I.redDot.systemNotice - 1))
        }).catch(qe).finally(() => {
            e = !1
        }))
    }
    return {
        state: o,
        setState: r,
        initFn: i,
        deleteNoticeItem: l,
        deleteCommentItem: s,
        switchUnreadStatus: d,
        readAll: p,
        readNoticeItem: h
    }
}
const Tr = kn(Rr);

function Br() {
    return N(() => {
        I.login && setTimeout(() => {
            Tr.initFn()
        }, 3e3)
    }), n(E, {
        get when() {
            return c.mobile
        },
        get fallback() {
            return n(fr, {})
        },
        get children() {
            return n(br, {})
        }
    })
}
var Or = v('<div class="tabbar bottom-0 left-0 w-full bg-layer4 center fixed rounded-t-2xl">'),
    Nr = v("<p>");
const Vr = function() {
    const t = Mr(),
        a = be(),
        o = X();
    return (() => {
        var r = Or();
        return g(r, n(we, {
            each: t,
            children: i => {
                const l = V(() => a.pathname.startsWith(i.link));
                return n(E, {
                    get when() {
                        return !i.hidden
                    },
                    get children() {
                        return n(q, {
                            class: "flex h-full flex-1 flex-col items-center justify-center px-1 py-2 w-1/2",
                            onClick: () => o(i.link),
                            get children() {
                                return [n(fe, {
                                    get name() {
                                        return i.icon
                                    },
                                    tabbar: !0,
                                    get select() {
                                        return l()
                                    }
                                }), (() => {
                                    var s = Nr();
                                    return g(s, () => i.label()), R(() => W(s, U("mt-0.5 text-xs font-extrabold", l() ? "text-brand" : "text-secondary"))), s
                                })()]
                            }
                        })
                    }
                })
            }
        })), r
    })()
};

function Mr() {
    const {
        isSportsHost: e,
        isSpHost: t,
        isUsHost: a,
        isBrAuditHost: o
    } = C.getHostType(c.host), {
        isKr: r
    } = C.getAreaAndLang(L.lang, I.areaCode);
    return [{
        label: () => _("Menu"),
        icon: "menu",
        link: "/menu"
    }, {
        label: () => _("Explore"),
        icon: "explore",
        link: "/explore",
        hidden: o
    }, {
        label: () => _("Casino"),
        icon: "casino",
        link: "/casino",
        hidden: e
    }, {
        label: () => _("Sports"),
        icon: "sports",
        link: r ? "/bti" : "/sports",
        hidden: a
    }, {
        label: () => _("Chat"),
        icon: "chat",
        link: "/chat-public",
        hidden: t || a || o
    }]
}

function Hr(e) {
    const t = localStorage.getItem("bc_search_history");
    if (!t || t === "") localStorage.setItem("bc_search_history", e);
    else {
        const a = t.split(",");
        let o = [e];
        a.map(r => {
            o.includes(r) || o.push(r)
        }), o.length > 10 && o.splice(-1, 1), localStorage.setItem("bc_search_history", o.join(","))
    }
}
const Ur = () => f(() =>
    import ("./bcBrand-BaXUcIAQ.js"), []);

function Ue() {
    return new Promise(e => {
        S.emit("get_device_info", e)
    })
}

function Gr(e) {
    const [t] = Ie(() => ["/game/home/provider/list/", {
        categoryId: e
    }], async ([a, o]) => {
        const {
            areaCode: r
        } = await Ue();
        return F().get(a, {
            params: {
                areaCode: r,
                isBrazil: rt,
                ...o
            }
        })
    }, {
        version: 1,
        expires: 1 / 0,
        initialValue: []
    });
    return t
}
const {
    isBrAuditHost: rt
} = C.getHostType(c.host);

function Tu() {
    const [e] = Ie(() => ["/game/home/rec/provider/"], async ([t]) => {
        const {
            areaCode: a,
            distinctId: o
        } = await Ue();
        return (await F().post(t, {
            areaCode: a,
            sectionId: "casino_provider",
            distinctId: o,
            isBrazil: rt
        })).pageList.list
    }, {
        version: 1,
        expires: 1 / 0,
        initialValue: []
    });
    return e
}

function Bu(e, t) {
    const [a, o] = B(!1), r = To(s => Bo(Oo, s, 1600)), i = V(s => {
        const d = e();
        return d.length > 2 && r() ? d : s
    }), [l] = _o(() => i(), async s => {
        if (!s) return [];
        o(!0);
        const d = await F().post("/game/home/search/game/", {
            keyword: s,
            page: 1,
            device: 1,
            pageSize: c.mobile ? 99 : 100,
            areaCode: I.areaCode,
            isBrazil: rt
        });
        return Hr(s), S.emit("bc-search-result"), me.trackEvent("search_sent", {
            search_module: "casino search",
            key_words: s,
            ...t
        }), o(!1), d.list
    }, {
        initialValue: []
    });
    return [l, a]
}

function Ou(e) {
    return { ...jr,
        pageList: e
    }
}

function Nu() {
    return On("/game/home/my-favorite/")
}

function Vu() {
    return On("/game/home/recent/")
}

function Fr(e, t = () => 1) {
    return Ie(() => [e, {
        page: t()
    }], async ([a, o]) => {
        await new Promise(l => setTimeout(l, 3e3));
        const {
            areaCode: r
        } = await Ue();
        return await F().post(a, { ...o,
            pageSize: 40,
            areaCode: r
        })
    }, {
        expires: 60 * 1e3
    })
}

function On(e) {
    return No(t => Fr(e, t), t => t.totalPage)
}
const Mu = {
    megaways: "Megaways",
    hot: "Hot Games",
    "new-releases": "New Releases",
    exclusive: "BC Exclusive",
    "feature-buy-in": "Feature buy-in",
    "table-games": "Table games",
    "high-volatility": "High volatility",
    "buy-extrabal-feature": "Buy extra ball feature",
    jackpot: "Bingo jackpot",
    bingo: "Bingo",
    "bingo-new-release": "Bingo New Release",
    keno: "Keno",
    "scratch-cards": "Scratch cards",
    baccarat: "Baccarat",
    roulette: "Roulette",
    blackjack: "Blackjack"
};

function Nn(e, t) {
    return Ie(() => {
        const a = {
            page: 1,
            pageSize: c.mobile ? 42 : 40,
            ...e()
        };
        return a.gameUnique && (a.gameUrl = a.gameUnique, delete a.gameUnique), a.providerName || delete a.providerName, ["/game/home/rec/entry/", a]
    }, async ([a, o]) => {
        const {
            areaCode: r,
            distinctId: i
        } = await Ue(), l = o.sectionId;
        try {
            const s = await F().post(a, {
                areaCode: r,
                distinctId: i,
                ...o,
                sectionId: l,
                bcLang: L.lang,
                browserLang: navigator.language,
                isBrazil: rt
            });
            return s.sectionId = l, s
        } catch (s) {
            if (o.sectionId === "casino_bc") return (await Ur()).data;
            throw s
        }
    }, t)
}
const zr = {
        list: [],
        page: 1,
        pageSize: 20,
        total: 1,
        totalPage: 1
    },
    jr = {
        recommendation: !1,
        pageList: zr,
        tags: [],
        translatedTags: {},
        expId: "",
        logId: "",
        strategyId: ""
    };

function Vn(e, t) {
    return localStorage.removeItem("lgl-merged"), Ie(() => ["/game/home/rec/casino2/", {
        pagerList: e
    }], async ([a, o]) => {
        const r = await Ue(),
            i = o.pagerList.map(l => ({ ...l,
                sectionId: l.sectionId
            }));
        return F().post(a, { ...r,
            bcLang: L.lang,
            browserLang: navigator.language,
            isBrazil: rt,
            pagerList: i
        })
    }, t)[0]
}

function Wr() {
    const e = ["casino_bc", "casino_hot", "casino_slots", "casino_live", "casino_new"],
        t = Vn(e.map(a => ({
            sectionId: a
        })), {
            version: 1,
            lockLocal: !0
        });
    return a => t() ? .[e.indexOf(a)]
}

function Hu() {
    return Nn(() => ({
        pageSize: 100,
        sectionId: "casino_bc"
    }), {
        version: 1,
        expires: 1 / 0,
        lockLocal: !0
    })[0]
}
var Kr = v('<svg width=20 height=20 viewBox="0 0 20 20"fill=none><path d="M11.0162 3.60125C11.342 3.78566 11.6113 4.05501 11.7957 4.38081L17.23 13.9834C17.7913 14.9753 17.4424 16.2344 16.4505 16.7962C16.1403 16.9715 15.7903 17.064 15.4338 17.064H4.56517C3.4254 17.064 2.50122 16.1398 2.50122 15C2.50122 14.6436 2.59315 14.2936 2.76896 13.9834L8.20329 4.38081C8.76457 3.38889 10.0242 3.03943 11.0162 3.60125ZM9.98982 13.4092C9.49574 13.4092 9.09468 13.8188 9.09468 14.3248C9.09468 14.8307 9.49521 15.2403 9.98982 15.2403C10.4839 15.2403 10.885 14.8307 10.885 14.3248C10.885 13.8188 10.4844 13.4092 9.98982 13.4092ZM9.98982 7.3055C9.49574 7.3055 9.09468 7.70603 9.09468 8.20065V11.9038C9.09468 12.3979 9.49521 12.799 9.98982 12.799C10.4844 12.799 10.885 12.3984 10.885 11.9038V8.20065C10.885 7.70657 10.4844 7.3055 9.98982 7.3055Z"fill=white>'),
    Jr = v('<svg viewBox="0 0 32 32"><path fill=#ffffff d="M23.011 14.463c1.055 0.753 1.055 2.321 0 3.075l-8.607 6.145c-1.25 0.893-2.986-0.001-2.986-1.537v-12.291c0-1.536 1.736-2.43 2.986-1.537l8.607 6.145z">'),
    qr = v('<img class="mr-1 w-3"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAD///+vv7+zvsKzvcD///+yv8Czv7////////////////+0vsH///+0v8L///+0v8L///////////+zvsGzvcKyvcK0vb+zv8Ozv7////+zvsH///9BsiEjAAAAG3RSTlMAvxC/gHBgIK8gEO/n35+Pj4BgUM+vcHBAQDB6axrrAAAAhUlEQVQoz4XOWRKEIAxF0ciMs23PZP/r7C5RIcTS83lfUQSuvceHHC3Log+LXhSDDCtJuwm7JxnaNNzJDyGT/2LzwZ68YEfxsz5pMECoraut0KV9AWONUkbAgdr7g6hdh3+Nu5GuG9x1OvUKCVevfcDCELtH5hs/4EO8YObDDIupKkxw4geB5Rgg/yXcwgAAAABJRU5ErkJggg==">'),
    Yr = v('<svg viewBox="0 0 32 32"><path d="M23.852 19.419l-0.466 0.022c-0.060 0.003-0.118 0.006-0.174 0.010-0.124 0.007-0.253 0.015-0.385 0.016-1.56 0.001-3.119 0.002-4.679 0.002-1.080 0-2.16 0-3.24-0.001-1.581-0.001-2.318-0.742-2.318-2.331-0.001-2.254 0-4.507 0-6.76v-3.773h3.836v8.901h7.426v3.914zM15.903 2c-7.677 0.014-13.922 6.319-13.903 14.038 0.019 7.753 6.3 13.981 14.080 13.962 7.653-0.020 13.937-6.334 13.92-13.987-0.017-7.777-6.305-14.027-14.097-14.012z">'),
    Xr = v('<svg viewBox="0 0 32 32"><path d="M10.891 22.302c0.001 0.795 0.759 1.24 1.431 0.893 1.058-0.546 2.112-1.1 3.16-1.665 0.352-0.189 0.682-0.189 1.026-0.004 0.415 0.223 0.832 0.44 1.249 0.66 0.645 0.34 1.29 0.681 1.935 1.020 0.342 0.18 0.683 0.166 0.995-0.059 0.319-0.23 0.449-0.546 0.378-0.945-0.206-1.164-0.403-2.329-0.606-3.493-0.070-0.401 0.012-0.741 0.318-1.034 0.854-0.82 1.697-1.653 2.545-2.48 0.289-0.282 0.408-0.617 0.276-1.008-0.126-0.374-0.394-0.585-0.792-0.641-1.144-0.159-2.285-0.336-3.43-0.486-0.462-0.061-0.783-0.264-0.987-0.692-0.49-1.024-1.003-2.037-1.5-3.059-0.185-0.379-0.453-0.633-0.892-0.637-0.443-0.003-0.704 0.257-0.888 0.637-0.491 1.013-1.009 2.014-1.486 3.034-0.213 0.455-0.54 0.658-1.024 0.72-1.155 0.148-2.306 0.326-3.458 0.492-0.317 0.046-0.545 0.218-0.689 0.5-0.201 0.395-0.128 0.79 0.221 1.135 0.836 0.827 1.675 1.649 2.515 2.471 0.251 0.245 0.416 0.523 0.354 0.886-0.114 0.674-0.238 1.346-0.355 2.019-0.104 0.6-0.206 1.201-0.297 1.736h0.001zM2 15.989c0.003-7.728 6.28-13.996 14.010-13.989 7.734 0.007 13.993 6.275 13.99 14.010-0.003 7.729-6.281 13.998-14.010 13.99-7.733-0.008-13.992-6.277-13.988-14.011h-0.001z">'),
    Qr = (e => (e.brand = "brand", e.favorites = "favorites", e.recent = "recent", e.live = "live", e.slots = "slots", e.hot = "hot", e.new = "new", e.pick = "picks", e.tablegame = "table-game", e.gameshows = "game-shows", e.provider = "provider", e.featurebuyin = "feature-buy-in", e.themes = "themes", e.fishing = "fishing", e.pachinko = "pachinko", e.all = "", e))(Qr || {});

function Zr() {
    const {
        isBrAuditHost: e,
        isUsHost: t
    } = C.getHostType(c.host), {
        isJapanIP: a,
        isKoreaIP: o,
        isJapanLang: r,
        isKoreaLang: i,
        isSoutheastAsiaIP: l,
        isSoutheastAsiaLang: s
    } = C.getAreaAndLang(L.lang, I.areaCode);
    let d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return a && (d = [0, 1, 2, 3, 13, 4, 5, 6, 7, 8, 9, 10, 11]), o && (d = [0, 1, 9, 2, 3, 13, 4, 5, 6, 7, 8, 10, 11]), l && (d = [0, 1, 2, 3, 4, 12, 6, 5, 7, 8, 9, 10, 11]), r && (d = [0, 1, 2, 3, 13, 4, 5, 6, 7, 8, 9, 10, 11]), i && (d = [0, 1, 9, 2, 3, 13, 4, 5, 6, 7, 8, 10, 11]), s && (d = [0, 1, 2, 3, 4, 12, 6, 5, 7, 8, 9, 10, 11]), t && (d = [0, 1, 2, 3, 5, 6, 7, 9, 10, 11]), e && (d = [0, 2, 9]), d
}

function Uu() {
    const {
        isBrAuditHost: e,
        isUsHost: t
    } = C.getHostType(c.host), {
        isJapanIP: a,
        isJapanLang: o,
        isSoutheastAsiaIP: r,
        isSoutheastAsiaLang: i
    } = C.getAreaAndLang(L.lang, I.areaCode);
    let l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return a && (l = [0, 1, 2, 12, 3, 4, 5, 6, 7, 8, 9, 10]), r && (l = [0, 1, 2, 3, 11, 10, 4, 5, 6, 7, 9, 8]), o && (l = [0, 1, 2, 12, 3, 4, 5, 6, 7, 8, 9, 10]), i && (l = [0, 1, 2, 3, 11, 10, 4, 5, 6, 7, 9, 8]), t && (l = [0, 1, 2, 4, 5, 6, 8, 9, 10]), e && (l = [1, 6]), l
}
const Gu = () => {
    const e = [{
        label: _("All Games"),
        value: "",
        iconname: "Home"
    }, {
        label: _("__ENV_SITE__ Originals"),
        value: "brand",
        iconname: "Classicdice"
    }, {
        label: _("Hot Games"),
        value: "hot",
        iconname: "Hot"
    }, {
        label: _("Slots"),
        value: "slots",
        iconname: "Slots"
    }, {
        label: _("Live Casino"),
        value: "live",
        iconname: "Live"
    }, {
        label: _("Game Shows"),
        value: "game-shows",
        iconname: "GameShows"
    }, {
        label: _("Table Games"),
        value: "table-game",
        iconname: "Tablegame"
    }, {
        label: _("New Releases"),
        value: "new",
        iconname: "Newreleases"
    }, {
        label: _("Feature Buy-in"),
        value: "feature-buy-in",
        iconname: "Featurebuyin"
    }, {
        label: _("Providers"),
        value: "provider",
        iconname: "Favorites"
    }, {
        label: _("Top Picks"),
        value: "picks",
        iconname: "Toppicks"
    }, {
        label: _("Themes"),
        value: "themes",
        iconname: "Themes"
    }, {
        label: _("Fishing"),
        value: "fishing",
        iconname: "Finishing"
    }, {
        label: _("Pachinko"),
        value: "pachinko",
        iconname: "Pachinko"
    }];
    return Zr().map(a => e[a])
};

function ei() {
    return Kr()
}

function ti() {
    return Jr()
}

function ni() {
    return qr()
}

function oi(e) {
    return (() => {
        var t = Yr();
        return R(() => P(t, "class", U("size-4 fill-alw_white", e.class))), t
    })()
}

function ai(e) {
    return (() => {
        var t = Xr();
        return R(() => P(t, "class", U("size-4 fill-alw_white", e.class))), t
    })()
}
var ri = v("<div>"),
    ii = v('<div class="f-ull mt-4 flex center">');
const si = function(t) {
    const [, a] = Ot(t, ["resource", "offset", "page", "children", "ListRoot", "init", "empty"]), o = Cn(t.resource), r = Ze(() => n(we, {
        get each() {
            return o() ? .pageList.list
        },
        children: (i, l) => t.children(i, () => l())
    }));
    return [(() => {
        var i = ri();
        return wn(i, tt(a, {
            get class() {
                return U("grid", t.class)
            }
        }), !1, !0), g(i, n(ye, {
            get fallback() {
                return t.init
            },
            get children() {
                return n(E, {
                    get when() {
                        return (t.resource() ? .pageList.list.length || 0) > 0
                    },
                    get fallback() {
                        return t.empty || n(vt, {
                            class: "col-span-full"
                        })
                    },
                    get children() {
                        return n(E, {
                            get when() {
                                return t.ListRoot
                            },
                            keyed: !0,
                            fallback: r,
                            children: l => n(l, {
                                children: r
                            })
                        })
                    }
                })
            }
        })), i
    })(), (() => {
        var i = ii();
        return g(i, n(Vo, {
            get current() {
                return t.page[0]()
            },
            get onChange() {
                return t.page[1]
            },
            get total() {
                return o() ? .pageList.total
            },
            get pageSize() {
                return o() ? .pageList.pageSize
            }
        })), i
    })()]
};
var it = v("<div>"),
    li = v('<div class="absolute flex h-5 items-center rounded-md right-1 bottom-1 bg-black_alpha20 px-1.5"><span class="text-xs font-semibold text-[white]">'),
    ci = v('<div><div class="absolute left-0 top-0 flex w-full px-2 text-center font-extrabold leading-4 center h-[40%] text-[white]"></div><div>'),
    di = v('<div class="relative mb-5 flex h-full w-full flex-col items-center overflow-hidden rounded-lg bg-layer5">'),
    ui = v('<div class="col-span-full center h-72">'),
    gi = v('<div class="mt-4 grid gap-2 grid-col-3">');
const mi = Array(8);

function pi(e) {
    const t = X();
    let a;
    return N(() => {
        e.data && queueMicrotask(() => {
            a ? .scrollTo({
                left: 0,
                behavior: "instant"
            })
        })
    }), n(zt.Provider, {
        value: () => e.data ? .sectionId ? e.data : void 0,
        get children() {
            return n(Pn, {
                get class() {
                    return `${c.mobile?"-mx-4":"mx-0"} gap-2 grid-col-3`
                },
                ref(o) {
                    var r = a;
                    typeof r == "function" ? r(o) : a = o
                },
                get style() {
                    return {
                        "--grid-gap": ".5rem",
                        "--grid-padding": c.mobile ? "1rem" : "0px",
                        "--aspect-ratio": .75
                    }
                },
                get data() {
                    return e.data ? .pageList.list || mi
                },
                children: (o, r) => n(E, {
                    get when() {
                        return o()
                    },
                    get fallback() {
                        return n(Ft, {})
                    },
                    get children() {
                        return wt({
                            data: o(),
                            index: r(),
                            navigate: i => {
                                t(i, {
                                    replace: e.replace
                                })
                            }
                        })
                    }
                })
            })
        }
    })
}

function gt(e) {
    return (() => {
        var t = it();
        return g(t, () => e.children), R(() => W(t, U("explore-show absolute hidden rounded-md px-1 text-xs font-extrabold top-1 left-1 py-0.5 shadow-sm shadow-alw_dark/50", e.class))), t
    })()
}

function fi(e) {
    return n(Vt, {
        get children() {
            return [n(ae, {
                get when() {
                    return e.corner === "Bonus Buy"
                },
                get children() {
                    return n(gt, {
                        class: "bg-warning text-alw_dark",
                        get children() {
                            return _("Bonus Buy")
                        }
                    })
                }
            }), n(ae, {
                get when() {
                    return e.corner === "Exclusive"
                },
                get children() {
                    return n(gt, {
                        class: "bg-brand text-alw_dark",
                        get children() {
                            return _("Exclusive")
                        }
                    })
                }
            }), n(ae, {
                get when() {
                    return e.corner === "New"
                },
                get children() {
                    return n(gt, {
                        class: "text-alw_white bg-[#E31351]",
                        get children() {
                            return _("New")
                        }
                    })
                }
            }), n(ae, {
                get when() {
                    return e.corner
                },
                get children() {
                    return n(gt, {
                        class: "bg-brand text-alw_dark",
                        get children() {
                            return e.corner
                        }
                    })
                }
            })]
        }
    })
}

function hi(e) {
    function t() {
        const {
            num: r,
            unit: i
        } = C.getExponential(e.data.onlineUsers, 4);
        return i ? r.toFixed(1) + i : r
    }
    let a;
    const o = V(() => e.data.iconThreeFour.endsWith("common.png") ? e.data.thumbnail : e.data.iconThreeFour);
    return n(wi, {
        get game() {
            return e.data
        },
        get index() {
            return e.index
        },
        get ctx() {
            return e.ctx
        },
        get children() {
            var r = it();
            return Nt(r, "click", e.navigate && (() => e.navigate(e.data.gameIdentity.gameUrl && e.data.gameIdentity.gameUrl.includes("detrade:") ? "/trading/contract" : `/game/${e.data.gameIdentity.gameUrl}`)), !0), g(r, n(Ht, {
                class: "w-full",
                get src() {
                    return o()
                },
                ref(i) {
                    var l = a;
                    typeof l == "function" ? l(i) : a = i
                },
                onerror: () => a.style.display = "none",
                args: "w=200"
            }), null), g(r, n(fi, {
                get corner() {
                    return e.data.corner
                }
            }), null), g(r, n(E, {
                get when() {
                    return e.data.autoTag === "history"
                },
                get children() {
                    return n(oi, {
                        class: "absolute left-1.5 top-1.5"
                    })
                }
            }), null), g(r, n(E, {
                get when() {
                    return e.data.autoTag === "favorite"
                },
                get children() {
                    return n(ai, {
                        class: "absolute left-1.5 top-1.5"
                    })
                }
            }), null), g(r, n(E, {
                get when() {
                    return e.data.onlineUsers > 0
                },
                get children() {
                    var i = li(),
                        l = i.firstChild;
                    return g(i, n(ni, {}), l), g(l, t), i
                }
            }), null), g(r, (() => {
                var i = K(() => !C.isSupportTouch);
                return () => i() && (() => {
                    var l = ci(),
                        s = l.firstChild,
                        d = s.nextSibling;
                    return g(s, (() => {
                        var p = K(() => !!e.data.isRestricted);
                        return () => p() ? _("Region Restricted") : e.data.fullName
                    })()), g(d, n(E, {
                        get when() {
                            return e.data.isRestricted
                        },
                        get fallback() {
                            return n(ti, {})
                        },
                        get children() {
                            return n(ei, {})
                        }
                    })), R(p => {
                        var h = U("absolute left-0 top-0 h-full w-full cursor-pointer center bg-[#00000099]", !e.data.isRestricted && "opacity-0 group-hover:opacity-100"),
                            m = U("flex h-9 w-9 rounded-full transition-all duration-300 center bg-white_alpha20 group-hover:scale-150", !!e.data.isRestricted && "scale-150");
                        return h !== p.e && W(l, p.e = h), m !== p.t && W(d, p.t = m), p
                    }, {
                        e: void 0,
                        t: void 0
                    }), l
                })()
            })(), null), R(() => W(r, U("relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg group", e.class))), r
        }
    })
}
const _i = kn(() => Mo(e => n(hi, tt(e)), {
    limit: 100
}));

function wt(e) {
    const t = X(),
        a = bo(zt);
    return _i({
        navigate: t,
        ctx: a(),
        ...e
    })
}

function Ft() {
    return di()
}

function vi(e) {
    const t = B(1),
        [a] = Nn(() => ({ ...e.source,
            page: t[0]()
        })),
        o = Cn(a);
    return nt(() => {
        e.source && t[1](1)
    }), n(at, {
        fallback: r => n(vt, {
            children: r
        }),
        get children() {
            return n(zt.Provider, {
                value: () => e.source.sectionId ? {
                    expId: o() ? .expId || "",
                    logId: o() ? .logId || "",
                    strategyId: o() ? .strategyId || "",
                    sectionId: e.sectionId || o() ? .strategyId || ""
                } : void 0,
                get children() {
                    return n(si, {
                        page: t,
                        resource: a,
                        get init() {
                            return n(bi, {})
                        },
                        class: "mt-4 gap-2 grid-col-3",
                        style: {
                            "--grid-gap": ".5rem",
                            "--aspect-ratio": .75
                        },
                        children: (r, i) => (() => {
                            var l = it();
                            return g(l, () => wt({
                                data: r,
                                index: i()
                            })), l
                        })()
                    })
                }
            })
        }
    })
}

function bi() {
    return n(we, {
        get each() {
            return Array(40).fill(1)
        },
        children: () => n(Ft, {})
    })
}

function Fu(e) {
    return n(Ho, {
        get resource() {
            return e.source
        },
        flat: t => t.list,
        get init() {
            return (() => {
                var t = ui();
                return g(t, n(bt, {})), t
            })()
        },
        class: "mt-4 gap-2 grid-col-3",
        style: {
            "--grid-gap": ".5rem",
            "--aspect-ratio": .75
        },
        children: (t, a) => (() => {
            var o = it();
            return g(o, () => wt({
                data: t,
                index: a()
            })), o
        })()
    })
}

function Ae(e) {
    return n(vi, {
        get class() {
            return e.class
        },
        get source() {
            return e.source
        },
        get sectionId() {
            return e.sectionId
        }
    })
}

function zu(e) {
    const t = X();
    return (() => {
        var a = gi();
        return a.style.setProperty("--grid-gap", ".5rem"), a.style.setProperty("--aspect-ratio", "0.75"), g(a, n(Sn, {
            rootMargin: "100px",
            get each() {
                return e.list
            },
            children: (o, r) => n(E, {
                get when() {
                    return o()
                },
                get fallback() {
                    return n(Ft, {})
                },
                get children() {
                    return n(yi, {
                        get track() {
                            return e.track
                        },
                        get data() {
                            return o()
                        },
                        get children() {
                            var i = it();
                            return g(i, () => wt({
                                data: o(),
                                index: r(),
                                navigate: t
                            })), i
                        }
                    })
                }
            })
        })), a
    })()
}

function yi(e) {
    const [t, a] = B();
    return Mt(t, "click", () => {
        me.trackEvent("search_result_click", {
            search_module: e.track ? .search_module,
            is_filter_provider: e.track ? .is_filter_provider,
            key_words: e.track ? .key_words,
            side_filter: "Casino",
            tab_name: "All Games",
            sort_by_filter: "Popular",
            providers_filter: "All",
            game_name: e.data.fullName,
            game_id: e.data.gameIdentity.gameUrl,
            game_category: e.data.categoryName,
            game_tag: e.data.tags,
            provider: e.data.providerName,
            producer: e.data.providerName,
            item_type: "game",
            item_id: String(e.data.gameIdentity.gameInfoId)
        })
    }, !0), n($n, {
        ref: a,
        get children() {
            return e.children
        }
    })
}

function wi(e) {
    return n(E, {
        get when() {
            return e.ctx
        },
        keyed: !0,
        get fallback() {
            return e.children
        },
        children: t => {
            const a = V(() => e.game && B(!0)),
                [o, r] = B(),
                i = Dn({
                    threshold: .8
                })(() => o()),
                l = V(() => {
                    const s = t.sectionId === "game_related" ? e.game.gameIdentity.gameInfoId : "";
                    return {
                        section_id: t.sectionId,
                        exp_id: t.expId,
                        log_id: t.logId,
                        strategy_id: t.strategyId,
                        retrieve_id: e.game.retrieveId,
                        original_item_id: s,
                        item_id: String(e.game.gameIdentity.gameInfoId),
                        item_type: "game",
                        original_item_type: "game",
                        is_recommendation: !0,
                        module_sort: e.index,
                        provider: e.game.providerName,
                        game_tag: e.game.tags,
                        game_category: e.game.categoryName
                    }
                });
            return N(() => {
                const s = Ne(l),
                    [d, p] = Ne(a);
                s.section_id !== "" && i() && Ne(d) && (me.trackEvent("game_show", s), p(!1))
            }), Mt(o, "click", () => {
                me.trackEvent("game_click", { ...l(),
                    current_url: location.href
                })
            }, !0), n($n, {
                ref: r,
                get children() {
                    return e.children
                }
            })
        }
    })
}
const zt = vo(() => {});
Se(["click"]);
var ki = v('<div class="sticky left-0 flex h-10 w-full cursor-pointer border-solid bg-layer3 center -bottom-2 border-t border-third"><span class="font-semibold text-brand">');
const Ii = function(t) {
    return (() => {
        var a = ki(),
            o = a.firstChild;
        return Nt(a, "click", t.onClear, !0), g(a, n(Me, {
            name: "Delete",
            class: "size-5 text-brand"
        }), o), g(o, () => _("Clear All")), a
    })()
};
Se(["click"]);
var Ei = v('<span class="mr-1 text-secondary">'),
    xi = v("<span>"),
    Ci = v('<div class="text-base font-semibold flex ellipsis mr-auto sm:text-sm"><div class="text-xs font-extrabold ml-2 px-2 py-[0.125rem] text-error rounded-lg bg-[#FC3C3C4D]">Hot'),
    Di = v('<span class="text-base font-semibold ellipsis mr-auto sm:text-sm">');
const $i = 3,
    tn = ["BC Originals", "PG Soft", "Pragmatic Play", "Jili", "Tada", "Fa Chai", "Nolimit City", "Hacksaw", "Evolution Gaming"];

function Pi(e) {
    const [t, a] = ke(), [o, r] = B(""), {
        isKr: i
    } = C.getAreaAndLang(L.lang, I.areaCode), l = () => {
        const h = o().toLowerCase(),
            m = tn.map(w => (e.providerList || []).find(O => O.providerName === w)).filter(w => w !== void 0).slice(0, $i).map(w => ({ ...w,
                isHot: !0
            })),
            u = (e.providerList || []).filter(w => !tn.includes(w.providerName)).map(w => ({ ...w,
                isHot: !1
            }));
        return (i ? e.providerList || [] : [...m, ...u]).filter(w => w.providerName.toLowerCase().includes(h))
    }, s = () => {
        const h = (t.providerName || "").split(",");
        return l().filter(m => h.indexOf(m.providerName) !== -1) || []
    }, [d, p] = B([]);
    return ie(() => {
        p(s())
    }), N(() => {
        a({
            providerName: d().map(h => h.providerName).join(",")
        }, {
            replace: !0
        })
    }), n(Go, {
        get class() {
            return U("flex-1", e.class)
        },
        throttle: 1500,
        get value() {
            return d()
        },
        get options() {
            return l()
        },
        onChange: p,
        get title() {
            return _("All Providers")
        },
        labelFormat: h => [(() => {
            var m = Ei();
            return g(m, () => _("Providers") + ":"), m
        })(), (() => {
            var m = xi();
            return g(m, (() => {
                var u = K(() => h().length > 0);
                return () => u() ? "+" + h().length : _("All")
            })()), m
        })()],
        layerRender: h => [n(Uo, {
            class: "mb-1",
            get placeholder() {
                return _("Search Providers")
            },
            get value() {
                return o()
            },
            onChange: m => {
                r(m)
            },
            get children() {
                return n(Me, {
                    name: "Search",
                    class: "order-first mr-1 size-6 text-secondary -ml-1"
                })
            }
        }), h, n(Ii, {
            onClear: () => p([])
        }), n(An, {
            get when() {
                return l().length === 0
            },
            get children() {
                return n(vt, {})
            }
        })],
        children: h => n(E, {
            get when() {
                return h().isHot
            },
            get fallback() {
                return n(E, {
                    get when() {
                        return h().logo
                    },
                    get fallback() {
                        return C.replaceHostName(h().providerName, c.host)
                    },
                    get children() {
                        var m = Di();
                        return g(m, () => C.replaceHostName(h().providerName, c.host)), m
                    }
                })
            },
            get children() {
                var m = Ci(),
                    u = m.firstChild;
                return g(m, () => h().providerName, u), m
            }
        })
    })
}
var Si = v('<span class="mr-1 text-secondary">:');
const mt = {
        popular: () => _("Popular"),
        "a-z": () => "A-Z",
        "z-a": () => "Z-A",
        new: () => _("New")
    },
    Mn = () => {
        const [e, t] = ke(), a = Object.keys(mt), o = V(() => mt[e.sort] ? e.sort : a[0]);
        return n(Fo, {
            class: "flex-1",
            get value() {
                return o()
            },
            options: a,
            get title() {
                return _("Sort By")
            },
            onChange: r => {
                t({
                    sort: r === "popular" ? "" : r
                }, {
                    replace: !0
                })
            },
            labelFormat: r => [(() => {
                var i = Si(),
                    l = i.firstChild;
                return g(i, () => _("Sort By"), l), i
            })(), K(() => mt[r()]())],
            children: r => mt[r()]()
        })
    };
var Ai = v('<div><div class="text-xl font-extrabold">');

function De(e) {
    const t = X();
    return n(E, {
        get when() {
            return !c.mobile
        },
        get children() {
            var a = Ai(),
                o = a.firstChild;
            return g(a, n(q, {
                class: "mr-3 h-8 rounded-lg bg-layer4 text-secondary w-8",
                onClick: () => e.link ? t(e.link) : t(-1),
                get children() {
                    return n(Me, {
                        name: "Arrow"
                    })
                }
            }), o), g(o, () => e.title), R(() => W(a, U("flex items-center my-6", e.class))), a
        }
    })
}
var Hn = v("<div>"),
    Li = v("<div><span class=mr-2>");

function Ri() {
    const e = In(),
        t = () => e.type;
    return n(Vt, {
        get fallback() {
            return n(Ce, {
                get title() {
                    return _("Recommend")
                },
                get children() {
                    return [n(De, {
                        get title() {
                            return _("Recommend")
                        }
                    }), n(Oi, {
                        get type() {
                            return t()
                        }
                    })]
                }
            })
        },
        get children() {
            return [n(ae, {
                get when() {
                    return t() === "provider_recommend"
                },
                get children() {
                    return n(Ce, {
                        get title() {
                            return _("Provider Recommend")
                        },
                        get children() {
                            return [n(De, {
                                get title() {
                                    return _("Provider Recommend")
                                }
                            }), n(Bi, {})]
                        }
                    })
                }
            }), n(ae, {
                get when() {
                    return t() === "game-related"
                },
                get children() {
                    return n(Ce, {
                        get title() {
                            return _("Related Games")
                        },
                        get children() {
                            return [n(De, {
                                get title() {
                                    return _("Related Games")
                                }
                            }), n(Ti, {})]
                        }
                    })
                }
            }), n(ae, {
                get when() {
                    return t() === "picks-for-you"
                },
                get children() {
                    return n(Ce, {
                        get title() {
                            return _("Top Picks")
                        },
                        get children() {
                            return [n(De, {
                                get title() {
                                    return _("Top Picks")
                                }
                            }), n(jn, {})]
                        }
                    })
                }
            }), n(ae, {
                get when() {
                    return t() === "brand"
                },
                get children() {
                    return n(Ce, {
                        get title() {
                            return _("__ENV_SITE__ Originals")
                        },
                        get children() {
                            return [n(De, {
                                get title() {
                                    return _("__ENV_SITE__ Originals")
                                }
                            }), n(jt, {})]
                        }
                    })
                }
            }), n(ae, {
                get when() {
                    return t() === "slots"
                },
                get children() {
                    return n(Ce, {
                        get title() {
                            return _("Slots")
                        },
                        get children() {
                            return [n(De, {
                                get title() {
                                    return _("Slots")
                                }
                            }), n(Gn, {})]
                        }
                    })
                }
            }), n(ae, {
                get when() {
                    return t() === "live"
                },
                get children() {
                    return n(Ce, {
                        get title() {
                            return _("Live")
                        },
                        get children() {
                            return [n(De, {
                                get title() {
                                    return _("Live")
                                }
                            }), n(zn, {})]
                        }
                    })
                }
            })]
        }
    })
}

function Un() {
    const [e] = ke(), [t, a] = B({ ...e
    });
    return N(o => {
        const r = { ...e
        };
        return o && a(r), r
    }), t
}

function Gn(e) {
    const t = Un();

    function a() {
        let o = "casino_slots";
        const {
            sort: r,
            showingBlocked: i,
            providerName: l
        } = t();
        let s = r || "popular";
        return s === "popular" ? o = "slots_popular" : r === "youmaylike" && (o = "slots_you_may_like"), {
            sortBy: s,
            sectionId: o,
            providerName: l,
            showingBlocked: i ? Number(i) : 0
        }
    }
    return [(() => {
        var o = Hn();
        return g(o, n(Mn, {}), null), g(o, n(Fn, {
            category: 1
        }), null), g(o, n(Wn, {}), null), R(() => W(o, U("flex flex-wrap gap-2 [&>*]:max-w-[50%] sm:[&>*]:max-w-72", !e.isCasinoPage && "py-4"))), o
    })(), n(Ae, {
        get source() {
            return a()
        }
    })]
}

function Fn({
    category: e
}) {
    const t = Gr(e);
    return n(E, {
        get when() {
            return t().length
        },
        get children() {
            return n(Pi, {
                get providerList() {
                    return t()
                }
            })
        }
    })
}

function zn(e) {
    const t = Un();

    function a() {
        let o = "casino_live";
        const {
            sort: r,
            showingBlocked: i,
            providerName: l
        } = t();
        let s = r || "popular";
        return s === "popular" ? o = "live_popular" : s === "youmaylike" && (o = "live_you_may_like"), {
            sortBy: s,
            sectionId: o,
            providerName: l,
            showingBlocked: i ? Number(i) : 0
        }
    }
    return [(() => {
        var o = Hn();
        return g(o, n(Mn, {}), null), g(o, n(Fn, {
            category: 4
        }), null), g(o, n(Wn, {}), null), R(() => W(o, U("flex flex-wrap gap-2 [&>*]:max-w-[50%] sm:[&>*]:max-w-72", !e.isCasinoPage && "py-4"))), o
    })(), n(Ae, {
        get source() {
            return a()
        }
    })]
}

function jt() {
    return n(Ae, {
        source: {
            sectionId: "casino_bc"
        }
    })
}

function jn() {
    return n(Ae, {
        source: {
            sectionId: "casino_picks_for_you"
        }
    })
}

function Ti() {
    const [e] = ke();
    return n(Ae, {
        get source() {
            return { ...e,
                sectionId: "game_related"
            }
        }
    })
}

function Bi() {
    const [e] = ke();
    return n(Ae, {
        get source() {
            return { ...e,
                sectionId: "provider_recommend"
            }
        }
    })
}

function Oi(e) {
    const [t] = ke();
    return n(Ae, {
        get source() {
            return { ...t,
                sectionId: e.type
            }
        }
    })
}

function Wn(e) {
    const [t, a] = ke();
    return (() => {
        var o = Li(),
            r = o.firstChild;
        return g(r, () => _("Show Blocked")), g(o, n(zo, {
            get value() {
                return t.showingBlocked === "1"
            },
            class: "bg-input_bright",
            size: "small",
            onChange: i => {
                a({
                    showingBlocked: i ? "1" : void 0
                })
            }
        }), null), R(() => W(o, U("flex items-center py-2 pl-2 sm:ml-auto", e.class))), o
    })()
}
const Ni = Object.freeze(Object.defineProperty({
    __proto__: null,
    GameBrand: jt,
    GamePicksForYou: jn,
    Live: zn,
    Slots: Gn,
    default: Ri
}, Symbol.toStringTag, {
    value: "Module"
}));

function Vi(e) {
    const [, t] = Ot(e, ["tag", "root", "rootMargin", "fallback"]), [a, o] = B(), r = Dn(e)(a);
    return nt(() => {
        r() && o()
    }), n(yo, tt({
        get component() {
            return e.tag ? ? "div"
        }
    }, t, {
        ref(i) {
            var l = jo(e.ref, o);
            typeof l == "function" && l(i)
        },
        get children() {
            return n(E, {
                get when() {
                    return r()
                },
                get fallback() {
                    return e.fallback
                },
                get children() {
                    return e.children
                }
            })
        }
    }))
}

function Mi() {
    return new Promise(e => {
        F().defaults.headers.common.smid && e(!0);
        const t = setInterval(() => {
            F().defaults.headers.common.smid && (clearInterval(t), e(!0))
        }, 100)
    })
}

function Hi() {
    const e = be(),
        t = Ln();
    S.on("event-tracking", a), ie(() => {
        a({
            eventType: "page_view",
            eventId: "dau"
        })
    });

    function a(o) {
        (async () => {
            await Mi(), F().post("/user/tracking/event/", {
                ts: Date.now(),
                userId: I.login ? String(I.userId) : "0",
                url: e.pathname,
                referrer: t(),
                platform: C.isIos() ? "ios" : C.isAndroid() ? "android" : "web",
                ...o
            }).catch(console.log)
        })()
    }
    return null
}
var Ui = v("<div class=text-secondary>"),
    Gi = v('<div class="center h-[80vh]">'),
    Fi = v("<div id=page-content>");
const zi = x(() => f(() =>
        import ("./index-EkaR1O1e.js"), __vite__mapDeps([12, 2, 13, 1, 14, 15]))),
    ji = x(() => f(() =>
        import ("./back-to-top-DrCvSIvV.js"), __vite__mapDeps([16, 2, 1, 7]))),
    Wi = x(() => f(() =>
        import ("./gift-entry-CqKHtwOa.js"), __vite__mapDeps([17, 2, 1])));

function Ki(e) {
    return e.startsWith("/sports") || e.startsWith("/racing") || e.startsWith("/trading") || e.startsWith("/bti") || e.startsWith("/game/")
}
const Ji = function(t) {
    let a;
    const o = be(),
        r = wo(),
        i = V(() => r()[1].route.key),
        l = V(() => Ki(o.pathname)),
        s = Ze(() => n(E, {
            get when() {
                return i()
            },
            keyed: !0,
            get children() {
                return n(at, {
                    fallback: m => (console.trace(m, "bbb"), [n(vt, {
                        type: "notfound",
                        get children() {
                            return String(m)
                        }
                    }), n(q, {
                        type: "brand",
                        class: "w-32 mx-auto mb-6",
                        onClick: () => {
                            window.location.reload()
                        },
                        get children() {
                            return _("Reload")
                        }
                    }), (() => {
                        var u = Ui();
                        return g(u, () => _("Can’t get the page refreshed? Play __ENV_SITE__ original games instead")), u
                    })(), n(jt, {})]),
                    get children() {
                        return n(ye, {
                            get fallback() {
                                return (() => {
                                    var m = Gi();
                                    return g(m, n(bt, {
                                        class: "text-brand"
                                    })), m
                                })()
                            },
                            get children() {
                                return t.children
                            }
                        })
                    }
                })
            }
        })),
        d = c.mobile ? [{
            scale: .95,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            clearProps: "scale,opacity"
        }] : [{
            y: 16,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            clearProps: "y,opacity"
        }],
        p = d[0],
        h = { ...d[1],
            duration: .35,
            ease: "power2.out"
        };
    return N(m => {
        const u = i();
        return m && (window.scrollTo({
            top: 0
        }), En.fromTo(a, p, h)), u
    }), ve(() => {
        document.body.className = ""
    }), [n(Hi, {}), (() => {
        var m = Fi(),
            u = a;
        return typeof u == "function" ? Pe(u, m) : a = m, g(m, s), R(() => W(m, U("relative z-10 w-full px-4", l() ? "sm:px-0" : "mx-auto max-w-[1248px]"))), m
    })(), n(Br, {}), n(Wi, {}), n(E, {
        get when() {
            return !c.mobile
        },
        get fallback() {
            return n(Vr, {})
        },
        get children() {
            return n(qi, {})
        }
    }), n(Ve, {
        get children() {
            return n(Wo, {
                get name() {
                    return c.mobile ? "slideUp" : "slideLeft"
                },
                get children() {
                    return n(Ko, {
                        priority: Ca,
                        get children() {
                            return n(sr, {})
                        }
                    })
                }
            })
        }
    }), n(cr, {})]
};

function qi() {
    return [n(Vi, {
        class: "footer-bg flex w-full flex-col items-center justify-center divide-y divide-third py-6",
        tag: "footer",
        rootMargin: "200px",
        get children() {
            return n(zi, {})
        }
    }), n(ji, {})]
}
const Kn = x(async () => f(() =>
        import ("./Contest-Brd8lQcl.js"), __vite__mapDeps([18, 2, 1, 19]))),
    Yi = {
        routes: () => M([{
            path: "/promotions/daily-contest",
            component: x(async () => ({
                default: (await f(async () => {
                    const {
                        ContestPage: e
                    } = await
                    import ("./Contest-Brd8lQcl.js");
                    return {
                        ContestPage: e
                    }
                }, __vite__mapDeps([18, 2, 1, 19]))).ContestPage
            })),
            info: {
                dialog: c.mobile
            }
        }], {
            dialog: !0
        })
    };
var Xi = v('<div><div class="flex items-center text-base font-extrabold text-primary">'),
    Qi = v("<span class=ml-auto>");

function st(e) {
    return (() => {
        var t = Xi(),
            a = t.firstChild;
        return g(a, () => e.title), g(t, n(E, {
            get when() {
                return e.href
            },
            get fallback() {
                return Qi()
            },
            get children() {
                return n(Ut, {
                    get href() {
                        return e.href
                    },
                    class: "ml-auto flex h-8 items-center rounded-lg px-2 font-extrabold bg-black_alpha5 dark:bg-layer5",
                    get children() {
                        return [K(() => _("All")), n(Me, {
                            class: "size-4 rotate-180 text-secondary ml-1",
                            name: "Arrow"
                        })]
                    }
                })
            }
        }), null), g(t, n(E, {
            get when() {
                return e.showController !== !1
            },
            get children() {
                return n(Jo, {
                    class: "ml-2"
                })
            }
        }), null), R(() => W(t, U("mt-2 flex h-8 items-center mb-1.5 sm:mt-6", e.class))), t
    })()
}

function ue(e) {
    return [n(st, e), n(pi, {
        get data() {
            return e.data
        }
    })]
}
const nn = x(() => f(() =>
    import ("./ThrowAndHighRolles-CE5qi-lg.js"), __vite__mapDeps([20, 2, 1])));

function Zi() {
    const {
        isSpHost: e,
        isUsHost: t
    } = C.getHostType(c.host);
    return [n(st, {
        showController: !1,
        get title() {
            return _("Latest round & Race")
        },
        class: "!mb-0 !h-10"
    }), n(Oe, {
        class: "ml-auto mt-2 max-w-100 sm:!-mt-10",
        get children() {
            return [n(Oe.TabItem, {
                get title() {
                    return _("Latest Bet")
                },
                class: "rounded-xl min-h-96 my-3",
                get children() {
                    return n(nn, {
                        type: "lastBet"
                    })
                }
            }), n(Oe.TabItem, {
                get title() {
                    return _("High Roller")
                },
                class: "rounded-xl min-h-96 my-3",
                get children() {
                    return n(nn, {
                        type: "highRoller"
                    })
                }
            }), n(E, {
                when: !(e || t),
                get children() {
                    return n(Oe.TabItem, {
                        get title() {
                            return _("Wager Contest")
                        },
                        class: "rounded-xl min-h-96 my-3 bg-transparent",
                        get children() {
                            return n(Kn, {
                                class: "min-h-96"
                            })
                        }
                    })
                }
            })]
        }
    })]
}
var on = v("<div>"),
    es = v('<div class="overflow-hidden px-4 sm:rounded-xl sm:bg-layer3 sm:px-3"><div class="recent-big-win inline-flex items-center gap-3 sm:gap-3.5">'),
    ts = v('<div class="relative mr-2 h-2 w-2 mx-4">'),
    ns = v('<div class="ml-2 hidden gap-2 lg:!flex">'),
    os = v('<div class="h-32 w-14"><div class="mt-2 h-18 rounded-lg bg-layer5 sm:bg-layer4"></div><div class="h-3 bg-layer5 mt-1 rounded sm:bg-layer4"></div><div class="h-4 rounded-md bg-layer5 mt-1 sm:bg-layer4">'),
    as = v('<div class="relative mb-1 w-full rounded-lg pt-[133%]">'),
    rs = v('<div class=w-[118%]><div class="flex items-center justify-center font-extrabold text-secondary"><span class="ellipsis -ml-0.5 text-xxs"></span></div><div class="whitespace-nowrap text-center font-extrabold text-nowrap text-[#2CD97D] text-xxs">'),
    is = v("<img class=size-[0.875rem]>");

function ss() {
    return n(qo, {
        get children() {
            return n(ls, {})
        }
    })
}

function ls() {
    Rn();
    const [e, t] = B(0), [a, o] = B(), [r] = Ie(() => ["/game/support/home/v3/recent-big-wins/", {
        tab: e()
    }], async ([d, p]) => (F().defaults.headers.common["Accept-Language"] = L.lang, (await F().get(`${d}?gameTypeId=${p.tab}`)).slice(0, 20)), {
        version: 1,
        expires: 1 / 0
    }), {
        isUsHost: i
    } = C.getHostType(c.host), l = Ze(() => {
        const d = () => {
            const p = r();
            if (!p || p.length === 0) return [];
            const h = Array(Math.ceil(20 / p.length)).fill(p).flat().slice(0, 20);
            return h.concat(...h)
        };
        return n(Sn, {
            rootMargin: "100px",
            get each() {
                return d()
            },
            children: p => n(E, {
                get when() {
                    return p()
                },
                get fallback() {
                    return n(cs, {})
                },
                get children() {
                    return n(ds, {
                        get data() {
                            return p()
                        }
                    })
                }
            })
        })
    }), s = d => (() => {
        var p = on();
        return R(() => W(p, U("absolute left-0 top-0 h-full w-full rounded-full bg-brand", d))), p
    })();
    return [n(st, {
        showController: !1,
        get title() {
            return [(() => {
                var d = ts();
                return g(d, () => s("z-10"), null), g(d, () => s("animate-ping"), null), d
            })(), (() => {
                var d = on();
                return g(d, () => _("Recent Big Wins")), d
            })(), (() => {
                var d = ns();
                return g(d, n(pt, {
                    tab: 0,
                    get curTab() {
                        return e()
                    },
                    setTab: t,
                    get title() {
                        return _("All")
                    }
                }), null), g(d, n(pt, {
                    tab: 1,
                    get curTab() {
                        return e()
                    },
                    setTab: t,
                    get title() {
                        return _("__ENV_SITE__ Originals")
                    }
                }), null), g(d, n(pt, {
                    tab: 2,
                    get curTab() {
                        return e()
                    },
                    setTab: t,
                    get title() {
                        return _("Slots")
                    }
                }), null), g(d, n(E, {
                    when: !i,
                    get children() {
                        return n(pt, {
                            tab: 3,
                            get curTab() {
                                return e()
                            },
                            setTab: t,
                            get title() {
                                return _("Live Casino")
                            }
                        })
                    }
                }), null), d
            })()]
        }
    }), (() => {
        var d = es(),
            p = d.firstChild;
        return Pe(o, p), g(p, l), d
    })()]
}

function pt(e) {
    return n(q, {
        onClick: () => e.setTab(e.tab),
        get class() {
            return U("h-auto flex-1 whitespace-nowrap p-1 text-xs center rounded-none border-b-2", e.curTab === e.tab ? "font-semibold text-primary border-b-success" : "font-normal text-secondary border-b-transparent")
        },
        get children() {
            return e.title
        }
    })
}

function cs() {
    return os()
}

function ds(e) {
    const t = V(() => {
            let o = `/game-detail/${e.data.distributeId}`;
            return e.data.gameUnique.includes("detrade:") && (o = "/trading/contract"), o
        }),
        a = V(() => e.data.iconThreeFour.endsWith("common.png") ? e.data.gameIcon : e.data.iconThreeFour);
    return n(Ut, {
        get href() {
            return t()
        },
        class: "sm:w-13 flex flex-none flex-col items-center text-xs h-28 w-14 hover:opacity-80 sm:h-[106px]",
        get children() {
            return [(() => {
                var o = as();
                return g(o, n(Ht, {
                    class: "absolute left-0 top-0 w-full rounded-lg",
                    get src() {
                        return a()
                    },
                    args: "w=200"
                })), o
            })(), (() => {
                var o = rs(),
                    r = o.firstChild,
                    i = r.firstChild,
                    l = r.nextSibling;
                return g(r, n(E, {
                    get when() {
                        return Yo.vipBadgeIcon(e.data.userVipLevel)
                    },
                    children: s => (() => {
                        var d = is();
                        return R(() => P(d, "src", s())), d
                    })()
                }), i), g(i, () => Y.userName(e.data.nickName)), g(l, () => _t.printCurrency(_t.convertCurrency(new Rt(e.data.winAmount), "USDT", e.data.currencyName), e.data.currencyName, 3)), o
            })()]
        }
    })
}
const us = "https://start9.sptpub.com/static/media",
    gs = us,
    ms = "https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code",
    ps = "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium",
    fs = "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium",
    hs = "https://d1bvoel1nv172p.cloudfront.net/additional_images/medium";

function _s(e) {
    if (e) return e;
    const {
        isNg2Host: t,
        isNgHost: a,
        isKenyaHost: o,
        isBrAuditHost: r,
        isMxHost: i
    } = C.getHostType(c.host);
    return c.isDevHost ? o ? "2400326079798710272" : t || a ? "2121274848574574592" : r ? "2420638100658196480" : i ? "2088286533093298176" : "2121274848574574592" : o ? "2400325958683996160" : t || a ? "2278938435223949312" : r ? "2440480156666695689" : "2103509236163162112"
}
var vs = v("<img alt=icon>");
const bs = function(t) {
        const a = V(() => {
            const o = t.country_code ? t.country_code : "international";
            return `${t.img_path?t.img_path+"/flags_by_code":ms}/${o}.svg`
        });
        return (() => {
            var o = vs();
            return R(r => {
                var i = a(),
                    l = t.class;
                return i !== r.e && P(o, "src", r.e = i), l !== r.t && W(o, r.t = l), r
            }, {
                e: void 0,
                t: void 0
            }), o
        })()
    },
    ys = {
        1: "766458ba",
        2: "9b3a5e31",
        3: "0c43efb5",
        4: "f5d9f849",
        5: "7e7cd295",
        6: "1d3b175d",
        7: "74919be0",
        8: "3faa05d5",
        9: "421f2555",
        10: "cfe98e5a",
        11: "e0109938",
        12: "bb318008",
        13: "31055fee",
        14: "3f11335a",
        15: "e0971bfa",
        16: "2035b0fe",
        17: "36eddade",
        18: "1417ccf2",
        19: "33ff77c7",
        20: "271e58db",
        21: "e058585d",
        22: "01bfd571",
        23: "1da08f79",
        24: "278d7d87",
        25: "99916f03",
        26: "51fad30f",
        28: "74f5adbf",
        29: "45aa09de",
        30: "b2fb2e5c",
        31: "5a03a520",
        32: "571125df",
        33: "e508af2d",
        34: "8baedf1c",
        35: "423fe0b8",
        36: "b7a1fa17",
        37: "ae1e1a53",
        38: "f45f1c59",
        39: "bda636ac",
        40: "8d4f0353",
        41: "aa3e8295",
        42: "342ffd09",
        43: "0e970023",
        44: "9191dec1",
        45: "bfbe21cf",
        46: "c23f94b4",
        47: "38a51276",
        48: "da32f738",
        49: "4bb725db",
        50: "028636bc",
        51: "290514a9",
        52: "f641a8fe",
        54: "1855a56f",
        55: "db929e2c",
        58: "e54a04b6",
        59: "4f77a83a",
        60: "e476b089",
        61: "aa843793",
        62: "edbbefb2",
        64: "0aba1d87",
        67: "c2a71b81",
        70: "a432c50b",
        71: "73da82c8",
        75: "0b804b02",
        76: "799891d8",
        77: "c79d114c",
        79: "77990d8f",
        81: "ad5cae97",
        82: "5984cff3",
        83: "2e943cb3",
        84: "2b83ceac",
        85: "dc8b3663",
        86: "955b07d3",
        90: "b1abc309",
        92: "9c8a4458",
        96: "8b9ec2bd",
        97: "9f1a998e",
        98: "25a7a456",
        99: "fb8b2d72",
        101: "f1468212",
        102: "e64e4f6c",
        103: "17c0e6f2",
        104: "fb17a8ed",
        105: "ae22e28b",
        106: "352349e8",
        107: "02629ba2",
        109: "f7f59a54",
        110: "ec0b0b88",
        111: "7a326b50",
        112: "5cda6d11",
        113: "2a203552",
        115: "f4044064",
        117: "1d65d28c",
        118: "5b3373e7",
        121: "6775a735",
        122: "9de66f46",
        123: "8352f4c9",
        124: "95e6f6ee",
        125: "692feff2",
        126: "0f68571c",
        127: "19d9b9f3",
        128: "48793063",
        129: "5d29ddc1",
        131: "7d29ba6a",
        133: "c598085b",
        134: "af279d91",
        135: "8329c684",
        136: "b7bb8da7",
        137: "ddc1573e",
        138: "8997868f",
        140: "c14ce726",
        142: "5d8ab463",
        146: "6ea95221",
        152: "9de66f46",
        153: "5d7bbbb6",
        155: "ea8d93ec",
        156: "a086d413",
        158: "207ebd0a",
        159: "c45652cc",
        168: "eaeda7ca",
        170: "3dbee247",
        176: "7179893f",
        181: "592c7988",
        183: "073c4b42",
        189: "45283d6c",
        190: "aa3e8295",
        191: "6f8f70bb",
        192: "5f9eef3b",
        194: "f1579241",
        195: "cf17213b",
        199: "7cb85f76",
        200: "6a0fc9dd",
        201: "81f74439",
        202: "c8340d3b",
        203: "700d6b5c",
        204: "28a5b4dd",
        205: "c3e9b97e",
        206: "032b1c2d",
        207: "c3018c53",
        208: "8f58bb54",
        209: "078054a1",
        210: "75b67177",
        211: "f3bc1271",
        212: "a5e22768",
        213: "d9b1f9e2",
        214: "d22cb417",
        215: "91aa59b7",
        216: "04cb4173",
        217: "af69391f",
        218: "654cbbc7",
        219: "76fa136f",
        220: "d6f155f2",
        221: "8b266470",
        222: "301e0971",
        223: "ef0152b1",
        224: "397a9276",
        225: "f0da9b4e",
        226: "0e6c805c",
        227: "fc2c0fcc",
        228: "d8616574",
        229: "52c0742d",
        299: "381ba413",
        300: "b8e9d9b7",
        301: "78314d9b",
        302: "5d7bbbb6",
        303: "f7d96e4e",
        304: "1a3754dc",
        305: "25d6eeb6",
        306: "d85f4bc9",
        307: "6aff6506",
        308: "13f16b63",
        309: "a5acfa9c",
        316: "0b6135e7",
        323: "bed31f4f",
        e_sport: "02629ba2"
    },
    ws = {
        1: "soccer",
        2: "basketball",
        3: "baseball",
        4: "icehockey",
        5: "tennis",
        6: "handball",
        7: "floorball",
        8: "trotting",
        9: "golf",
        10: "boxing",
        11: "motorsport",
        12: "rugby",
        13: "aussierules",
        14: "wintersports",
        15: "bandy",
        16: "americanfootball",
        17: "cycling",
        18: "specials",
        19: "snooker",
        20: "tabletennis",
        21: "cricket",
        22: "darts",
        23: "volleyball",
        24: "fieldhockey",
        25: "pool",
        26: "waterpolo",
        28: "curling",
        29: "futsal",
        30: "olympics",
        31: "badminton",
        32: "bowls",
        33: "chess",
        34: "beachvolleyball",
        35: "netball",
        36: "athletics",
        37: "squash",
        38: "rinkhockey",
        39: "lacrosse",
        40: "formula-1",
        41: "bikes",
        42: "dtm",
        43: "alpineskiing",
        44: "biathlon",
        45: "bobsleigh",
        46: "skirace",
        47: "nordiccombined",
        48: "skijumping",
        49: "snowboard",
        50: "speedskating",
        51: "luge",
        52: "swimming",
        54: "softball",
        55: "horseracing",
        58: "greyhound",
        59: "rugbyleague",
        60: "beachsoccer",
        61: "pesapallo",
        62: "street-hockey",
        64: "rowing",
        67: "moto-gp",
        70: "nascar",
        71: "padel-tennis",
        75: "archery",
        76: "equestrian",
        77: "fencing",
        79: "judo",
        81: "sailing",
        82: "shooting",
        83: "taekwondo",
        84: "triathlon",
        85: "wlifting",
        86: "wrestling",
        90: "surfing",
        92: "canoeslalom",
        96: "diving",
        97: "track-cycling",
        98: "beachtennis",
        99: "sumo",
        101: "rally",
        102: "figureskating",
        103: "freestyleskiing",
        104: "skeleton",
        105: "shorttrack",
        106: "mysticalsoccer",
        107: "esport",
        109: "counterstrike",
        110: "leagueoflegends",
        111: "dota2",
        112: "starcraft",
        113: "hearthstone",
        115: "wot",
        117: "mma",
        118: "callofduty",
        121: "overwatch",
        122: "warcraft",
        123: "crossfire",
        124: "halo",
        125: "rainbow_six",
        126: "sepak-takraw",
        127: "street_fighter_v",
        128: "rocket_league",
        129: "indycar",
        131: "speedway",
        133: "clash-royale",
        134: "king-of-glory",
        135: "gaelicfootball",
        136: "gaelichurling",
        137: "fifa-cyber",
        138: "kabbadi",
        140: "pubg",
        142: "formula_e",
        146: "speedboat-racing",
        152: "wow",
        153: "nba2k",
        155: "3x3_basketball",
        156: "tekken",
        158: "arena_of_valor",
        159: "team-fortress2",
        168: "brawl-stars",
        170: "fortnite",
        176: "esport-fighting",
        181: "karate",
        183: "skateboarding",
        189: "formula-2",
        190: "bikes",
        191: "stockcarracing",
        192: "air-racing",
        194: "valorant",
        195: "eicehockey",
        199: "age-of-empires",
        200: "league-of-legends-wild-rift",
        201: "mobile-legends",
        202: "harness",
        203: "game-of-tag",
        204: "arm-wrestling",
        205: "freestyle-wrestling",
        206: "greco-roman-wrestling",
        207: "bodybuilding",
        208: "powerlifting",
        209: "jai-alai",
        210: "teqball",
        211: "bossaball",
        212: "table-football",
        213: "headis",
        214: "draughts",
        215: "poker",
        216: "ball-hockey",
        217: "air_hockey",
        218: "quidditch",
        219: "frisbee",
        220: "capoeira",
        221: "sambo",
        222: "starcraft-brood-war",
        223: "free-fire",
        224: "pokemon",
        225: "sidewipe",
        226: "trackmania",
        227: "clash-of-clans",
        228: "PUBG-mobile",
        229: "COD-mobile",
        299: "virtualsport",
        300: "fifa-b",
        301: "rocket-league-b",
        302: "nba2k-b",
        303: "aotennis-b",
        304: "e-fighting-b",
        305: "ecricket-b",
        306: "baseball-b",
        307: "fifa-penalty-b",
        308: "eshooter",
        309: "fifa-volta",
        316: "blitz-basketball",
        323: "vaquejada-eletronico",
        e_sport: "esport"
    };

function ks(e) {
    const t = ys[e],
        a = ws[e];
    return t && a ? `${gs}/sport-${a}.${t}.svg` : ""
}
var an = v("<div>");
const Is = function(t) {
    const [a, o] = B(""), [r, i] = B(!1);
    return ie(() => {
        const l = ks(t.id);
        l && fetch(l).then(async s => {
            const d = await s.text();
            o(d)
        }).catch(() => {
            i(!0)
        })
    }), n(E, {
        get when() {
            return !r()
        },
        get fallback() {
            return an()
        },
        get children() {
            var l = an();
            return R(s => {
                var d = a(),
                    p = t.class;
                return d !== s.e && (l.innerHTML = s.e = d), p !== s.t && W(l, s.t = p), s
            }, {
                e: void 0,
                t: void 0
            }), l
        }
    })
};
var Es = v('<img alt=normal class="opacity-0 absolute">'),
    xs = v('<img alt=additional class="opacity-0 absolute">'),
    rn = v("<div><img alt=icon>");
const Jn = new Map;

function Cs(e) {
    const [t, a] = ot({
        normal: !1,
        additional: !1,
        normalPath: "",
        additionalPath: ""
    }), o = V(() => {
        let s = `${ps}/${e.id}.png`;
        return e.id.length > 10 && (s = `${fs}/${e.id}.png`), s
    }), r = V(() => `${hs}/${e.id}.png`), i = s => {
        s ? a({
            normal: !0,
            normalPath: s
        }) : a("normal", !0)
    }, l = s => {
        s ? a({
            additional: !0,
            additionalPath: s
        }) : a("additional", !0)
    };
    return N(() => {
        t.normal && t.additional && (e.setState({
            imgpath: t.normalPath || t.additionalPath,
            loading: !1
        }), Jn.set(e.id, t.normalPath || t.additionalPath || "-1"))
    }), [(() => {
        var s = Es();
        return s.addEventListener("error", () => i()), s.addEventListener("load", () => i(o())), R(() => P(s, "src", o())), s
    })(), (() => {
        var s = xs();
        return s.addEventListener("error", () => l()), s.addEventListener("load", () => l(r())), R(() => P(s, "src", r())), s
    })()]
}

function Ds(e) {
    const [t, a] = ot({
        imgpath: "",
        loading: !0
    }), o = V(() => Jn.get(e.id));
    return n(E, {
        get when() {
            return !o()
        },
        get fallback() {
            return n(E, {
                get when() {
                    return o() !== "-1"
                },
                get fallback() {
                    return n(Bt, e)
                },
                get children() {
                    var r = rn(),
                        i = r.firstChild;
                    return R(() => P(i, "src", o())), r
                }
            })
        },
        get children() {
            return n(E, {
                get when() {
                    return t.loading
                },
                get fallback() {
                    return n(E, {
                        get when() {
                            return t.imgpath
                        },
                        get fallback() {
                            return n(Bt, e)
                        },
                        get children() {
                            var r = rn(),
                                i = r.firstChild;
                            return R(() => P(i, "src", t.imgpath)), r
                        }
                    })
                },
                get children() {
                    return n(Cs, tt(e, {
                        setState: a
                    }))
                }
            })
        }
    })
}

function Bt(e) {
    return n(E, {
        get when() {
            return !!e.country_code
        },
        get fallback() {
            return n(Is, {
                get id() {
                    return e.sports_id
                }
            })
        },
        get children() {
            return n(bs, {
                get img_path() {
                    return e.img_path
                },
                get country_code() {
                    return e.country_code
                }
            })
        }
    })
}

function sn(e) {
    return n(E, {
        get when() {
            return e.id
        },
        get fallback() {
            return n(Bt, e)
        },
        get children() {
            return n(Ds, e)
        }
    })
}
const $s = ["1", "10", "11", "16", "18", "186", "187", "188", "189", "219", "223", "225", "237", "238", "251", "254", "258", "314", "327", "328", "340", "342", "361", "406", "493", "494", "694", "697"],
    qn = e => e === 18 || e === 68 || e === 225,
    ju = (e, t) => (t.length > 0 && Object.keys(t[0].markets).map(a => {
        qn(Number(a)) && e.push(Number(a))
    }), e.length === 2 ? e.concat([18]) : e.slice(0, 3)),
    Ps = (e, t, a) => {
        if (!$s.includes(String(e)) || !t[e]) return null;
        const o = [],
            r = t[e];
        let i = {},
            l = "",
            s = [];
        a && Object.keys(a).map((p, h) => {
            h === 0 && (i = a[p], l = p), qn(e) && Object.keys(a[p]).map(m => {
                let u = "";
                const y = r.variants[""];
                for (let w = 0; w < y.length; w++) {
                    const O = y[w].outcomes;
                    for (let H = 0; H < O.length; H++) O[H].id === m && (u = O[H].name.replace("{total}", p.split("=")[1]))
                }
                s.push({
                    name: u,
                    value: a[p][m].k
                })
            })
        });
        const d = r.variants[""];
        if (d && !l.includes("total"))
            for (let p = 0; p < d.length; p++) {
                const h = d[p].outcomes;
                let m = [];
                for (let u = 0; u < h.length; u++) {
                    let y = h[u].name.replace(/{\$competitor1}/g, "1").replace(/{\$competitor2}/g, "2");
                    if (r.specifiers) {
                        const w = l.split("=")[1] || "";
                        y = y.replace("{", "").replace("}", "").replace("+", "").replace("-", "").replace(r.specifiers[0], w)
                    }
                    m.push({
                        name: y,
                        value: a ? i[h[u].id].k : "-"
                    })
                }
                o.push(m)
            }
        return o.push(s.slice(0, 6)), {
            marketName: r.name,
            marketList: o
        }
    };
var Ss = v('<div class="flex h-10 flex-1 items-center justify-center rounded-lg bg-layer5 font-semibold"><span>+</span><span>'),
    As = v('<div class="mt-4 flex w-full items-center justify-between gap-2">'),
    Ls = v('<div class="relative flex h-full w-full cursor-pointer flex-col rounded-xl bg-layer4 px-3 py-2.5"><p class="flex items-center overflow-hidden whitespace-nowrap font-semibold max-w-full text-ellipsis"><span></span><span class="sports-dont ml-1.5"></span><span class=ml-1.5></span></p><div class="absolute flex h-6 items-center rounded-md text-brand right-2 top-2.5 px-1.5"><svg width=7 height=8 viewBox="0 0 7 8"><path d="M6.00976 3.14495L1.51853 0.42138C0.852092 0.0172424 0 0.497043 0 1.27644V6.72358C0 7.50297 0.852091 7.98278 1.51852 7.57864L6.00976 4.85507C6.65173 4.46577 6.65173 3.53425 6.00976 3.14495Z"class=fill-brand></path></svg><span class=ml-0.5></span></div><div class="flex flex-col justify-between flex-grow"><div class="flex flex-1 items-center center"><div class="mt-4 flex w-full items-center justify-between"><div class="flex flex-none flex-col items-center justify-center w-1/3"><div class="sports-banner-match-icon h-12"></div><p class="text-center font-semibold mt-1.5"></p></div><div class="flex flex-none flex-col items-center justify-center w-1/3"><p class=text-2xl><span class=font-semibold></span><span class=mx-1>:</span><span class=font-semibold></span></p><p class="mt-2 text-secondary"></p></div><div class="flex flex-none flex-col items-center justify-center w-1/3"><div class="sports-banner-match-icon h-12"></div><p class="text-center font-semibold mt-1.5">'),
    Rs = v('<div class="flex h-10 flex-1 items-center justify-center rounded-lg font-semibold"><span></span><span class="ml-2 text-error">');

function Ts(e) {
    const t = X(),
        a = V(() => e.matchInfo ? .desc.competitors[0]),
        o = V(() => e.matchInfo ? .desc.competitors[1]),
        r = V(() => e.matchInfo ? .score),
        i = V(() => e.statuses ? e.statuses[e.matchInfo ? .state.match_status || 0] : ""),
        l = V(() => {
            let s = null,
                d = 0;
            if (e.matchInfo ? .markets) {
                let p = 1;
                Object.keys(e.matchInfo ? .markets).map((h, m) => {
                    m === 0 && (p = Number(h)), d = m
                }), s = Ps(p, e.markets, e.matchInfo ? .markets[p]), s && (s.marketsLength = d)
            }
            return s
        });
    return (() => {
        var s = Ls(),
            d = s.firstChild,
            p = d.firstChild,
            h = p.nextSibling,
            m = h.nextSibling,
            u = d.nextSibling,
            y = u.firstChild,
            w = y.nextSibling,
            O = u.nextSibling,
            H = O.firstChild,
            re = H.firstChild,
            te = re.firstChild,
            se = te.firstChild,
            Ge = se.nextSibling,
            Ee = te.nextSibling,
            xe = Ee.firstChild,
            G = xe.firstChild,
            T = G.nextSibling,
            J = T.nextSibling,
            z = xe.nextSibling,
            kt = Ee.nextSibling,
            dt = kt.firstChild,
            io = dt.nextSibling;
        return s.$$click = () => {
            t(`/sports?bt-path=%2F${e.sportInfo?.slug}%2F${e.categoryInfo?.slug}%2F${e.tournamentInfo?.slug}/${e.matchInfo?.desc.slug}-${e.matchInfo?.id}`)
        }, g(p, () => e.sportInfo ? .name), g(m, () => e.tournamentInfo ? .name), u.style.setProperty("background", "rgba(49, 238, 136, 0.10)"), g(w, () => _("Live")), g(se, n(sn, {
            get id() {
                return a() ? .id || ""
            },
            get img_path() {
                return e.img_path || ""
            },
            country_code: "",
            get sports_id() {
                return e.categoryInfo ? .sport_id || ""
            }
        })), g(Ge, () => a() ? .name || ""), g(G, () => r() ? .home_score), g(J, () => r() ? .away_score), g(z, i), g(dt, n(sn, {
            get id() {
                return o() ? .id || ""
            },
            get img_path() {
                return e.img_path || ""
            },
            country_code: "",
            get sports_id() {
                return e.categoryInfo ? .sport_id || ""
            }
        })), g(io, () => o() ? .name || ""), g(O, n(E, {
            get when() {
                return l()
            },
            get children() {
                var It = As();
                return g(It, n(ko, {
                    get each() {
                        return l().marketList[0]
                    },
                    children: Fe => (() => {
                        var ze = Rs(),
                            ut = ze.firstChild,
                            so = ut.nextSibling;
                        return ze.style.setProperty("background", "rgba(252, 60, 60, 0.15)"), g(ut, () => Fe().name), g(so, () => Fe().value), ze
                    })()
                }), null), g(It, n(E, {
                    get when() {
                        return l().marketsLength > 0
                    },
                    fallback: null,
                    get children() {
                        var Fe = Ss(),
                            ze = Fe.firstChild,
                            ut = ze.nextSibling;
                        return g(ut, () => l().marketsLength), Fe
                    }
                }), null), It
            }
        }), null), s
    })()
}
Se(["click"]);
var Bs = v('<div class=w-full><div class="h-48 w-full rounded-xl bg-layer4">'),
    Os = v("<div>"),
    Ns = v('<div class="relative flex h-full w-full cursor-pointer flex-col rounded-xl bg-layer4 px-3 py-2.5">');

function Vs() {
    const [e] = Ie(() => [`/platform-sports/v14/live10/${_s()}/${L.lang}/`], ([t]) => F().get(t, {
        cache: !0
    }), {
        version: 1,
        lockLocal: !0
    });
    return n(ye, {
        get children() {
            return n(at, {
                fallback: null,
                get children() {
                    return [n(st, {
                        get title() {
                            return _("Live Sports")
                        },
                        href: "/sports?bt-path=%2Flive"
                    }), n(E, {
                        get when() {
                            return e()
                        },
                        get fallback() {
                            return Bs()
                        },
                        get children() {
                            return n(Pn, {
                                get class() {
                                    return `${c.mobile?"-mx-4":"mx-0"} gap-2 grid-col-1`
                                },
                                get style() {
                                    return {
                                        "--grid-gap": ".5rem",
                                        "--grid-padding": c.mobile ? "1rem" : "0px",
                                        "--aspect-ratio": 2
                                    }
                                },
                                get data() {
                                    return e() ? .items ? ? []
                                },
                                children: t => n(E, {
                                    get when() {
                                        return t()
                                    },
                                    get fallback() {
                                        return Ns()
                                    },
                                    get children() {
                                        var a = Os();
                                        return g(a, n(Ts, {
                                            get img_path() {
                                                return e() ? .imgDomain
                                            },
                                            get matchInfo() {
                                                return t().matchInfo
                                            },
                                            get sportInfo() {
                                                return t().sportInfo
                                            },
                                            get categoryInfo() {
                                                return t().categoryInfo
                                            },
                                            get tournamentInfo() {
                                                return t().tournamentInfo
                                            },
                                            get markets() {
                                                return e() ? .description.markets
                                            },
                                            get statuses() {
                                                return e() ? .description.statuses
                                            }
                                        })), a
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
const le = "/assets/dot-C8z5Aoh_.png",
    Ms = "/assets/apple_pay-DhGEreIw.png",
    Hs = "/assets/google_pay-FVJ2d1pF.png",
    Us = "/assets/mastercard-CVVg_XRh.png",
    Gs = "/assets/pic_pay-fE-XPIEr.png",
    Fs = "/assets/visa-CHvdFeKw.png";
var zs = v("<img>"),
    js = v('<div class="flex gap-2 pb-4 center pt-3 lg:!hidden">'),
    Ws = v('<div class="hidden center lg:!flex">'),
    Ks = v('<div class="mt-4 rounded-xl bg-layer4 sm:mt-7"><div class="relative h-24 rounded-xl bg-alw_white/70 lg:px-8 dark:bg-alw_dark/70"><div class="absolute left-0 size-full overflow-hidden blur pointer-events-none"><img class="absolute -top-3 left-4 scale-[2]"><img class="absolute left-24 top-14 scale-150"><img class="absolute -top-2 left-40 scale-[2]"><img class="absolute -top-3 left-72 scale-[3]"><img class="absolute left-80 top-15 scale-150"><img class="absolute right-4 -bottom-3 scale-[2]"><img class="absolute bottom-14 right-24 scale-150"><img class="absolute -bottom-2 right-40 scale-[2]"><img class="absolute -bottom-3 right-72 scale-[3]"><img class="absolute bottom-15 right-80 scale-150"></div><div class="relative z-10 flex h-full flex-col items-center justify-center lg:!flex-row-reverse"><div class="center mx-auto gap-6"><img class=w-14><img class=w-7><img class=w-11><img class=w-12><img class=w-15></div><div class="mt-4 center gap-11 lg:!mt-0"><div class="text-lg font-extrabold sm:text-2xl"><span class=text-brand>300%</span> ');

function ln(e) {
    return n(we, {
        each: ["BTC", "ETH", "BNB", "XRP", "USDT", "USDC", "SOL", "ADA", "DOGE", "MATIC", "TRX"],
        children: a => (() => {
            var o = zs();
            return R(r => {
                var i = U(e.class),
                    l = Y.coinIcon(a);
                return i !== r.e && W(o, r.e = i), l !== r.t && P(o, "src", r.t = l), r
            }, {
                e: void 0,
                t: void 0
            }), o
        })()
    })
}

function Js() {
    const {
        isBrAuditHost: e
    } = C.getHostType(c.host);
    return (() => {
        var t = Ks(),
            a = t.firstChild,
            o = a.firstChild,
            r = o.firstChild,
            i = r.nextSibling,
            l = i.nextSibling,
            s = l.nextSibling,
            d = s.nextSibling,
            p = d.nextSibling,
            h = p.nextSibling,
            m = h.nextSibling,
            u = m.nextSibling,
            y = u.nextSibling,
            w = o.nextSibling,
            O = w.firstChild,
            H = O.firstChild,
            re = H.nextSibling,
            te = re.nextSibling,
            se = te.nextSibling,
            Ge = se.nextSibling,
            Ee = O.nextSibling,
            xe = Ee.firstChild,
            G = xe.firstChild;
        return G.nextSibling, g(t, n(E, {
            when: !e,
            get children() {
                var T = js();
                return g(T, n(ln, {
                    class: "w-6"
                })), T
            }
        }), a), P(r, "src", le), P(i, "src", le), P(l, "src", le), P(s, "src", le), P(d, "src", le), P(p, "src", le), P(h, "src", le), P(m, "src", le), P(u, "src", le), P(y, "src", le), g(w, n(E, {
            when: !e,
            get children() {
                var T = Ws();
                return g(T, n(ln, {
                    class: "w-6 -ml-1"
                })), T
            }
        }), O), P(H, "src", Ms), P(re, "src", Us), P(te, "src", Fs), P(se, "src", Hs), P(Ge, "src", Gs), g(xe, () => _("Deposit Bonus"), null), t
    })()
}
const qs = "/modules/lottery2/remoteEntry.js",
    Ys = () =>
    import (qs),
    j = ee(Ys),
    Xs = {
        routes: () => [{
            component: j("Layout"),
            path: "/lottery",
            children: [{
                path: "/",
                component: j("LotteryHome")
            }]
        }, ...M([{
            component: j("Layout"),
            path: "/lottery",
            info: {
                dialog: c.mobile
            },
            children: [{
                path: "/mybets",
                component: j("Mybets")
            }, {
                path: "/favourite",
                component: j("LikePage")
            }, {
                path: "/allLotteries",
                component: j("AllLotteryPage")
            }, {
                path: "/detail/:id",
                component: j("DetailPage"),
                info: {
                    dialog: c.mobile
                }
            }]
        }, {
            path: "/lottery/recentBetDetail/:betId",
            component: j("RecentDetailDialog")
        }, {
            path: "/lottery/bet_detail/:betId",
            component: j("MyBetsDetailDialog")
        }, {
            path: "/lottery/send_ticket",
            component: j("BcLotterySendGiftDialog")
        }, {
            path: "/lottery/history_gift",
            component: j("BcLotteryGiftHistoryDialog")
        }, {
            path: "/lottery/lottery_seed/:pid",
            component: j("BcLotterySeedDialog")
        }, {
            path: "/lottery/lottery_faq/:pid",
            component: j("BcLotteryFaqDialog")
        }, {
            path: "/lottery/lottery_fairness/:pid",
            component: j("BcLotteryFarinessDialog")
        }, {
            path: "/lottery/lottery_claim/:giftCode/:ticketNum",
            component: j("BcLotteryClaimDialog")
        }, {
            path: "/lottery/gift_ticket/:code",
            component: j("BcLotteryReceiveGiftDialog")
        }, {
            path: "/lottery/award_info_detail",
            component: j("AwardInfoDetailDialog")
        }, {
            path: "/lottery/betslip",
            component: j("BetSlipDialog"),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/lottery/select_cart_detail/:id",
            component: j("SelectCartContentDialog")
        }, {
            path: "/lottery/welcome_bonuses/:balls",
            component: j("BcLotteryNewUserGift")
        }, {
            path: "/lottery/search",
            component: j("LotterySearchBoxDialog")
        }, {
            path: "/lottery/india/india_winning_list/:id",
            component: j("IndiaWinningListDialog")
        }], {
            dialog: !0
        })]
    },
    Qs = "/assets/bingo-BjkimYl0.png",
    Zs = "/assets/casino-D-4QWHdb.png",
    el = "/assets/lottery-DUgna72e.png",
    tl = "/assets/racing-B0zGAPWI.png",
    nl = "/assets/sports-CgbCtznl.png",
    ol = "/assets/sports_in-BiOOAtE4.png",
    al = "/assets/updown-Dfy3kp4C.png";
var cn = v('<div class="flex items-center"><span class="text-sm ml-0.5 sm:text-2xl">'),
    rl = v('<div class="hidden font-semibold text-secondary mb-1.5 mt-auto max-w-60 text-left lg:block">'),
    il = v('<div class="hidden font-semibold text-secondary mb-1.5 mt-auto max-w-60 text-left lg:!block">'),
    sl = v('<div class="flex flex-wrap gap-2 flex-2 lg:!gap-3">'),
    ll = v('<div class="flex w-full flex-col gap-2 items-stretch sm:mt-6 lg:!flex-row lg:!gap-3"><div class="flex gap-2 flex-3 lg:!gap-3">'),
    cl = v('<img class="absolute left-[50%] top-[5%] h-[70%] -translate-x-[50%] lg:top-0 lg:h-full lg:-translate-x-[10%]">'),
    dl = v('<div class="absolute hidden items-center left-2 top-2 lg:flex"><span class="text-lg font-extrabold ml-1">'),
    ul = v('<div class="absolute left-0 block w-full text-center bottom-2 lg:hidden"><span class="text-sm font-extrabold">'),
    gl = v('<img class="absolute right-0 top-0 h-[120%] sm:h-full">'),
    ml = v('<div class="relative z-10 flex h-full flex-col flex-auto">');

function pl() {
    const {
        isBrAuditHost: e
    } = C.getHostType(c.host), t = I.areaCode === "PL", {
        isJp: a,
        isIn: o,
        isKr: r
    } = C.getAreaAndLang(L.lang, I.areaCode);
    return (() => {
        var i = ll(),
            l = i.firstChild;
        return g(l, n(dn, {
            href: "/casino",
            class: "col-span-2 col-start-1",
            src: Zs,
            get gradient() {
                return `linear-gradient(to left, ${L.darken?"#2C5040":"#BFF9DC"}, transparent 75%)`
            },
            get children() {
                return [(() => {
                    var s = cn(),
                        d = s.firstChild;
                    return g(s, n(fe, {
                        name: "casino",
                        select: !1,
                        scale: "scale(1)"
                    }), d), g(d, () => _("CASINO")), s
                })(), (() => {
                    var s = rl();
                    return g(s, () => _("Dive into our in-house games, live casino and slots")), s
                })()]
            }
        }), null), g(l, n(dn, {
            href: r ? "/bti" : "/sports",
            class: "col-span-2 col-start-1",
            src: o ? ol : nl,
            get gradient() {
                return `linear-gradient(to left, ${L.darken?"#582E59":"#F9AFF6"}, transparent 75%)`
            },
            get children() {
                return [(() => {
                    var s = cn(),
                        d = s.firstChild;
                    return g(s, n(fe, {
                        name: "sports",
                        select: !1,
                        scale: "scale(1)"
                    }), d), g(d, () => _("SPORTS")), s
                })(), (() => {
                    var s = il();
                    return g(s, () => _("Bet on Football, Cricket, NFL, eSports & over 80 sports!")), s
                })()]
            }
        }), null), g(i, n(E, {
            when: !e,
            get children() {
                var s = sl();
                return g(s, n(ft, {
                    href: "/lottery",
                    src: el,
                    get gradient() {
                        return `linear-gradient(to left, ${L.darken?"#425330":"#DAFFA9"}, transparent 75%`
                    },
                    get icon() {
                        return n(fe, {
                            name: "lottery",
                            select: !1,
                            scale: "scale(1)"
                        })
                    },
                    get title() {
                        return _("lottery").toLocaleUpperCase()
                    }
                }), null), g(s, n(ft, {
                    href: "/racing",
                    src: tl,
                    get gradient() {
                        return `linear-gradient(to left, ${L.darken?"#504130":"#FFCE9C"}, transparent 75%)`
                    },
                    get icon() {
                        return n(fe, {
                            name: "racing",
                            select: !1,
                            scale: "scale(1)"
                        })
                    },
                    get title() {
                        return _("racing").toLocaleUpperCase()
                    }
                }), null), g(s, n(E, {
                    when: !a && !t,
                    get children() {
                        return n(ft, {
                            href: "/trading/up-down",
                            src: al,
                            get gradient() {
                                return `linear-gradient(to left, ${L.darken?"#2D4F31":"#B1FFB7"}, transparent 75%)`
                            },
                            get icon() {
                                return n(fe, {
                                    name: "trading",
                                    select: !1,
                                    scale: "scale(1)"
                                })
                            },
                            get title() {
                                return _("updown").toLocaleUpperCase()
                            }
                        })
                    }
                }), null), g(s, n(ft, {
                    href: "/bingo",
                    src: Qs,
                    get gradient() {
                        return `linear-gradient(to left, ${L.darken?"#47386F":"#B79AFF"}, transparent 75%)`
                    },
                    get icon() {
                        return n(fe, {
                            name: "bingo",
                            select: !1,
                            scale: "scale(1)"
                        })
                    },
                    get title() {
                        return _("bingo").toLocaleUpperCase()
                    }
                }), null), s
            }
        }), null), i
    })()
}

function ft(e) {
    const t = X();
    return n(q, {
        onClick: () => t(e.href),
        get class() {
            return U("relative h-24 flex-1 overflow-hidden rounded-xl bg-layer4 p-2 font-extrabold center sm:h-[120px] lg:min-w-[40%]", e.class)
        },
        get style() {
            return {
                "background-image": e.gradient
            }
        },
        get children() {
            return [(() => {
                var a = cl();
                return R(() => P(a, "src", e.src)), a
            })(), (() => {
                var a = dl(),
                    o = a.firstChild;
                return g(a, () => e.icon, o), g(o, () => e.title), a
            })(), (() => {
                var a = ul(),
                    o = a.firstChild;
                return g(o, () => e.title), a
            })()]
        }
    })
}

function dn(e) {
    const t = X();
    return n(q, {
        onClick: () => t(e.href),
        get class() {
            return U("relative h-32 flex-1 overflow-hidden rounded-xl bg-layer4 font-extrabold center p-1.5 sm:h-[252px] sm:px-3 sm:py-5", e.class)
        },
        get style() {
            return {
                "background-image": e.gradient
            }
        },
        get children() {
            return [(() => {
                var a = gl();
                return R(() => P(a, "src", e.src)), a
            })(), (() => {
                var a = ml();
                return g(a, () => e.children), a
            })()]
        }
    })
}
var fl = v('<img crossorigin=anonymous class="absolute opacity-0 select-none pointer-events-none">');

function hl(e) {
    const [t, a] = ot(Array(e.imgs.length).fill("-1")), o = (r, i) => {
        a(i, r)
    };
    return N(() => {
        t.filter(i => i !== "-1").length === e.imgs.length && Ne(() => {
            e.onReady(t)
        })
    }), n(we, {
        get each() {
            return e.imgs
        },
        children: (r, i) => n(_l, {
            src: r,
            onLoad: l => o(l, i())
        })
    })
}
const je = new Map;

function _l(e) {
    const [t, a] = B(), o = () => {
        if (!t()) return;
        const r = document.createElement("canvas"),
            i = r.getContext("2d");
        try {
            const l = t() ? .width || 100,
                s = t() ? .height || 100;
            r.width = l, r.height = s, i.drawImage(t(), 0, 0, l, s);
            const p = i.getImageData(0, 0, r.width, r.height).data;
            let h = 0,
                m = 0,
                u = 0;
            const y = p.length / 4;
            for (let w = 0; w < p.length; w += 4) h += p[w], m += p[w + 1], u += p[w + 2];
            h = Math.floor(h / y), m = Math.floor(m / y), u = Math.floor(u / y), e.onLoad(`rgb(${h}, ${m}, ${u})`), je.set(e.src, `rgb(${h}, ${m}, ${u})`)
        } catch {
            e.onLoad("rgb(0,0,0)"), je.set(e.src, "rgb(0,0,0)")
        }
    };
    return je.has(e.src) && e.onLoad(je.get(e.src)), n(E, {
        get when() {
            return !je.has(e.src)
        },
        get children() {
            var r = fl();
            return r.addEventListener("error", () => e.onLoad("rgb(0,0,0)")), r.addEventListener("load", o), Pe(a, r), R(() => P(r, "src", e.src)), r
        }
    })
}

function vl(e, t) {
    return n(E, {
        get when() {
            return c.mobile && L.darken
        },
        get children() {
            return n(Ve, {
                get mount() {
                    return document.getElementById("page-content") || void 0
                },
                ref: a => {
                    a.className = "page-bg";
                    const o = bl(t());
                    a.appendChild(o), N(() => {
                        a.style.animationDelay = `-${e()}s`
                    }), ve(() => a.removeChild(o))
                },
                children: null
            })
        }
    })
}

function bl(e) {
    const t = document.createElement("style");
    e[0] && e.push(e[0]);
    const o = `
    .page-bg {
      animation: bgTransition 1s forwards paused;
    }
    @keyframes bgTransition {
      ${e.map((r,i)=>`${Math.round(100*i/(e.length-1))}% {background-color: ${r};}`).join("")}
    }
  `;
    return t.innerHTML = o, t
}
const yl = "/assets/icon-BnWdRyo4.png",
    wl = "/assets/icon_w-CN1P8tja.png",
    kl = "/assets/icon_m-B988gK0M.png",
    Il = "/assets/icon_m_w-DJ4QrhrR.png",
    El = "/assets/logo-cgWviHPN.png",
    xl = "/assets/logo_w-B4gZ3AA0.png",
    Cl = "/assets/banner_m-D4CQHT_6.png",
    Dl = "/assets/banner-DU8EqkJ_.png",
    $l = "/assets/banner_m-DYww_mVp.png",
    Pl = "/assets/banner-CEvxTEWK.png",
    Sl = "/assets/banner_m-EN4fHjUH.png",
    Al = "/assets/banner-Blex9rXd.png",
    Ll = "/assets/banner_m-DaZcXJnO.png",
    Rl = "/assets/banner-hdC-Y92k.png",
    Tl = "/assets/banner_m-D_6p4pfs.png",
    Bl = "/assets/banner-muf18f6h.png",
    Ol = "/assets/banner_m-BKLjss1p.png",
    Nl = "/assets/banner-DdSPdS9B.png",
    Vl = "/assets/banner_m_w-Ce80YhVk.png",
    Ml = "/assets/banner_w-DRr-pEZG.png",
    Hl = "/assets/banner_m-lWaFKJCs.png",
    Ul = "/assets/banner-Cdm6oWZ7.png";
var Gl = v('<img class="absolute -top-1 w-10 -right-1">'),
    Fl = v('<div class="text-base font-semibold mt-1 leading-none sm:text-lg">Sign Up & Get Up To'),
    un = v("<span>__amount__"),
    zl = v('<div class="relative overflow-hidden rounded-xl bg-layer4 mx-4 aspect-[1.7] bg-cover bg-repeat-x sm:mx-0 sm:aspect-[4.6]"><img class="absolute bottom-0 h-full -right-3 lg:right-0 lg:h-full"><img class="absolute hidden -left-18 top-2 sm:block"width=354 height=360><div class="absolute top-0 flex h-full flex-col py-4 left-3 origin-top sm:left-[14%] sm:top-[6%] sm:h-auto sm:items-center sm:py-0 sm:text-center"><p class="text-2xl font-extrabold text-primary sm:text-3xl"></p><div><div class="text-base font-semibold leading-none sm:text-lg">'),
    jl = v('<img class="absolute rounded-lg right-[2%] top-[50%] w-[5.3%] translate-y-[-50%]">'),
    Wl = v('<div class="text-base font-semibold sm:text-lg">Sign Up & Get'),
    Kl = v('<span class="text-xl font-extrabold sm:mt-1 sm:text-2xl">UP TO');
const Jl = [Ml, Vl, Nl, Ol],
    ql = [wl, Il, yl, kl],
    Yl = ["linear-gradient(262deg, #FFFFFF 61.46%, #9DA4A5 180.6%)", "linear-gradient(307deg, #FFFFFF 40.03%, #848B8D 350.84%)", "linear-gradient(261deg, #323738 70.44%, #606869 128.85%)", "linear-gradient(307deg, #323738 70.03%, #606869 128.84%)"];

function Yn() {
    return Number(L.darken) << 1 | Number(c.mobile)
}

function xt() {
    const {
        isBrHost: e,
        isBzHost: t,
        isSpHost: a,
        isKenyaHost: o,
        isRuHosts: r,
        isNgHost: i,
        isBrAuditHost: l
    } = C.getHostType(c.host);
    if (e) return {
        banner: c.mobile ? Cl : Dl,
        icon: ""
    };
    if (l || t || a) return {
        banner: c.mobile ? $l : Pl,
        icon: ""
    };
    if (o || i) return {
        banner: c.mobile ? Ll : Rl,
        icon: ""
    };
    if (r) return {
        banner: c.mobile ? Hl : Ul,
        icon: ""
    };
    if (L.lang === "id") return {
        banner: c.mobile ? Sl : Al,
        icon: ""
    };
    if (L.lang === "ja") return {
        banner: c.mobile ? Tl : Bl,
        icon: ""
    }; {
        const s = Yn();
        return {
            banner: Jl[s],
            icon: ql[s]
        }
    }
}

function Xl() {
    const e = X();
    let t, a;
    return N(() => {
        const o = Io(i => {
                for (let l of i) a && !c.mobile && (a.style.transform = `scale(${Math.min(l.contentRect.width/1168,1)})`)
            }, 300, {
                leading: !0,
                trailing: !0
            }),
            r = new ResizeObserver(o);
        r.observe(t), ve(() => {
            r.disconnect()
        })
    }), N(() => {
        if (t) {
            const o = Yn();
            t.style.backgroundImage = Yl[o]
        }
    }), (() => {
        var o = zl(),
            r = o.firstChild,
            i = r.nextSibling,
            l = i.nextSibling,
            s = l.firstChild,
            d = s.nextSibling,
            p = d.firstChild,
            h = t;
        typeof h == "function" ? Pe(h, o) : t = o, g(o, n(E, {
            get when() {
                return c.mobile
            },
            get fallback() {
                return (() => {
                    var u = jl();
                    return R(() => P(u, "src", xt().icon)), u
                })()
            },
            get children() {
                var u = Gl();
                return R(() => P(u, "src", xt().icon)), u
            }
        }), i);
        var m = a;
        return typeof m == "function" ? Pe(m, l) : a = l, g(s, () => _("Stay Untamed")), g(d, n(E, {
            get when() {
                return c.mobile
            },
            get fallback() {
                return n(en, {
                    i18nKey: "trans.home.loginbonus",
                    get amount() {
                        return _t.printCurrency(new Rt(2e4))
                    },
                    get children() {
                        return [Wl(), Kl(), (() => {
                            var u = un();
                            return R(() => W(u, `text-xl font-extrabold ml-1 bg-gradient-to-r sm:text-2xl ${L.darken?"from-[#9FE871] to-[#24EE89] text-transparent":"text-[#2CD97D]"} bg-clip-text`)), u
                        })()]
                    }
                })
            },
            get children() {
                return n(en, {
                    i18nKey: "trans.home.loginbonus.mobile",
                    get amount() {
                        return _t.printCurrency(new Rt(2e4))
                    },
                    get children() {
                        return [Fl(), (() => {
                            var u = un();
                            return R(() => W(u, `text-xl font-extrabold bg-gradient-to-r leading-none sm:text-2xl ${L.darken?"from-[#9FE871] to-[#24EE89] text-transparent":"text-[#2CD97D]"} bg-clip-text`)), u
                        })()]
                    }
                })
            }
        }), p), g(p, () => _("in Casino or Sports")), g(l, n(q, {
            onClick: () => e("/login/regist"),
            class: "h-10 border-solid mt-auto w-28 border-[2px] border-white_alpha20 sm:mt-5 sm:w-60 sm:border-none",
            get style() {
                return c.mobile && !L.darken ? {
                    "background-color": "#fff",
                    "border-color": "#d7d7d7"
                } : void 0
            },
            get type() {
                return c.mobile ? "second" : "brand"
            },
            get children() {
                return _("Join Now")
            }
        }), null), R(u => {
            var y = xt().banner,
                w = L.darken ? El : xl,
                O = `rounded-xl text-lg font-semibold p-0 sm:mt-4 sm:px-15 sm:py-3 sm:backdrop-blur-md ${L.darken?"sm:bg-[rgba(0,0,0,0.15)]":"sm:bg-[rgba(169,169,169,0.2)]"}`;
            return y !== u.e && P(r, "src", u.e = y), w !== u.t && P(i, "src", u.t = w), O !== u.a && W(d, u.a = O), u
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), o
    })()
}
const Ql = "/modules/bonus2/remoteEntry.js",
    Xn = () =>
    import (Ql),
    Zl = ee(Xn),
    ec = Zl("HomeDepositBanners");

function tc() {
    return n(at, {
        fallback: null,
        get children() {
            return n(ec, {})
        }
    })
}
const nc = "/assets/newplayer-C27ouDOw.png",
    oc = "/assets/slots-Dnsn_LY5.png",
    ac = "/assets/sports-BP_zYDNi.png";
var rc = v("<div>"),
    Ct = v("<img>"),
    ic = v('<div class="absolute right-4 -top-0.5 w-12">'),
    sc = v('<div class="px-3 pt-0.5 sm:!px-0">'),
    lc = v('<div class="carousel-wrap relative">'),
    cc = v('<div class="flex h-6 w-full justify-center py-2"><ul class="flex gap-x-1.5">'),
    dc = v('<span class="block h-full w-full rounded-full bg-brand will-change-transform">'),
    uc = v("<li>");
const gc = function(t) {
    const [a, o] = B();
    return (() => {
        var r = rc();
        return Pe(o, r), g(r, n(E, {
            get when() {
                return I.login
            },
            get fallback() {
                return n(Xl, {})
            },
            get children() {
                return n(mc, {
                    get el() {
                        return a()
                    }
                })
            }
        }), null), g(r, () => t.children, null), R(() => W(r, U("banner-bg relative -mx-4 -mt-4 pt-sh sm:mx-0 sm:mt-0 sm:pt-0"))), r
    })()
};

function mc(e) {
    const [t, a] = ot({
        scrollWidth: 0,
        clientWidth: 0,
        scrollLeft: 0,
        progress: 0,
        index: 0
    }), o = Xo(() => e.el), r = V(() => Math.min(Math.floor((o.width || 340) / 340), 3));
    localStorage.removeItem("banner");
    const [i] = Ie(() => ["/home/main/banner/"], async ([G]) => {
        const {
            areaCode: T
        } = await Ue();
        return (await F().get(`${G}?areaCode=${T}`)).filter(z => {
            if (!z.isBg) {
                const kt = z.restrictedRegion ? !z.restrictedRegion.includes(I.areaCode) : !0,
                    dt = z.enableLevels ? z.enableLevels.includes(I.vipLevel.toString()) : !0;
                return kt && dt
            }
            return !1
        }).map(z => (z.mobileBannerUrl = z.mobileBannerUrl || z.whiteMobileBannerUrl, z.whiteMobileBannerUrl = z.whiteMobileBannerUrl || z.mobileBannerUrl, z))
    }, {
        version: 1,
        expires: 1 / 0
    });
    let l;
    const s = Ze(() => n(ye, {
            get children() {
                return n(at, {
                    fallback: null,
                    get children() {
                        return n(tc, {})
                    }
                })
            }
        })),
        d = Ze(() => [K(() => s.toArray().filter(Boolean)), n(we, {
            get each() {
                return i()
            },
            children: G => G && G.linkUrl && (() => {
                var T = sc();
                return g(T, n(E, {
                    get when() {
                        return G.tag > 0
                    },
                    get children() {
                        var J = ic();
                        return g(J, n(Vt, {
                            get children() {
                                return [n(ae, {
                                    get when() {
                                        return G.tag === 1
                                    },
                                    get children() {
                                        var z = Ct();
                                        return P(z, "src", nc), z
                                    }
                                }), n(ae, {
                                    get when() {
                                        return G.tag === 2
                                    },
                                    get children() {
                                        var z = Ct();
                                        return P(z, "src", ac), z
                                    }
                                }), n(ae, {
                                    get when() {
                                        return G.tag === 3
                                    },
                                    get children() {
                                        var z = Ct();
                                        return P(z, "src", oc), z
                                    }
                                })]
                            }
                        })), J
                    }
                }), null), g(T, n(Ut, {
                    get href() {
                        return G.linkUrl
                    },
                    get target() {
                        return G.linkUrl.startsWith("http") ? "_blank" : void 0
                    },
                    class: "size-full overflow-hidden rounded-xl text-5xl center",
                    get children() {
                        return n(Ht, {
                            get src() {
                                return L.darken ? G.mobileBannerUrl : G.whiteMobileBannerUrl
                            },
                            args: "w=480",
                            class: "size-full banner-img"
                        })
                    }
                }), null), T
            })()
        })]),
        [p, h] = B(0);
    N(() => {
        te() !== p() && l.moveToIdx(p())
    });
    const m = () => d.toArray().length;
    N(() => {
        p() >= m() && h(0)
    });
    const [u, y] = B([]), [w, O] = B([]), H = Qo(d);
    N(() => {
        const G = H.toArray().map(J => J.getElementsByClassName("banner-img")[0] ? .src);
        let T = [];
        G.map(J => {
            J && T.push(J)
        }), O(T)
    });
    const re = G => {
        let T = s.toArray().filter(Boolean).length;
        const J = T > 0 ? Array(T).fill("rgb(55,129,88)") : [];
        y(J.concat(G))
    };

    function te() {
        return (l.track.details ? .abs || 0) % l.slides.length
    }
    const se = Rn(),
        [Ge, Ee] = B(!1),
        xe = () => !se() || Ge();
    return Zo(() => l.container, {
        mouseenter: () => {
            Ee(!0)
        },
        mouseleave: () => {
            Ee(!1)
        }
    }), [(() => {
        var G = lc();
        return g(G, n(E, {
            get when() {
                return w() && c.mobile
            },
            get children() {
                return n(hl, {
                    get imgs() {
                        return w()
                    },
                    onReady: re
                })
            }
        }), null), g(G, n(E, {
            get when() {
                return !c.mobile
            },
            get children() {
                return [n(q, {
                    class: "carousel-cahnge-btn absolute top-0 flex h-full center -left-4 w-4 p-0 2xl:-left-6 2xl:w-6",
                    onClick: () => h(T => T - 1),
                    get children() {
                        return n(Me, {
                            name: "Arrow",
                            class: "size-4 text-primary"
                        })
                    }
                }), n(q, {
                    class: "carousel-cahnge-btn to-0 absolute flex h-full center -right-4 w-4 p-0 2xl:-right-6 2xl:w-6",
                    onClick: () => h(T => T + 1),
                    get children() {
                        return n(Me, {
                            name: "Arrow",
                            class: "size-4 rotate-180 text-primary"
                        })
                    }
                })]
            }
        }), null), g(G, n(ea, {
            class: "h-44 sm:h-auto",
            auto: 0,
            ref(T) {
                var J = l;
                typeof J == "function" ? J(T) : l = T
            },
            get options() {
                return {
                    dragSpeed: .2,
                    loop: !0,
                    slides: {
                        spacing: c.mobile ? 0 : 16,
                        perView: r()
                    },
                    created(T) {
                        setTimeout(() => {
                            a({
                                scrollWidth: T.container.scrollWidth,
                                clientWidth: T.container.clientWidth
                            })
                        }, 32)
                    },
                    detailsChanged(T) {
                        const J = T.track.details;
                        J && a({
                            scrollLeft: J.progress * (T.container.scrollWidth - T.container.clientWidth),
                            progress: J.progress
                        })
                    },
                    slideChanged(T) {
                        h(te())
                    }
                }
            },
            get children() {
                return d()
            }
        }), null), G
    })(), K(() => vl(() => t.progress, u)), n(pc, {
        get pause() {
            return xe()
        },
        get index() {
            return p()
        },
        get dots() {
            return m()
        },
        onChange: h
    })]
}
const pc = e => {
    const t = Eo(() => e.index < 0 ? e.index + e.dots : e.index),
        a = s => () => {
            e.onChange(s)
        },
        [o, r] = B(0),
        i = {
            x: 0
        },
        l = En.to(i, {
            x: 1,
            duration: 3,
            onUpdate() {
                r(i.x)
            },
            onComplete() {
                e.onChange(s => (s + 1) % e.dots)
            },
            ease: "none"
        });
    return N(s => (e.index !== s && !e.pause && l.restart(), e.index)), N(() => {
        e.pause ? l.pause() : l.resume()
    }), ve(() => l.kill()), (() => {
        var s = cc(),
            d = s.firstChild;
        return g(d, n(we, {
            get each() {
                return Array(e.dots).fill(null)
            },
            children: (p, h) => (() => {
                var m = uc();
                return Nt(m, "click", a(h()), !0), m.style.setProperty("transition-timing-function", "ease"), g(m, n(An, {
                    get when() {
                        return t(h())
                    },
                    get children() {
                        var u = dc();
                        return u.style.setProperty("transform-origin", "center left"), R(y => (y = `translateX(${t(h())?`${(o()-1)*100}%`:0})`) != null ? u.style.setProperty("transform", y) : u.style.removeProperty("transform")), u
                    }
                })), R(() => W(m, U(t(h()) ? "w-11" : "w-1.5", "cursor-pointer overflow-hidden rounded-full bg-layer4 transition-all h-1.5 duration-500"))), m
            })()
        })), s
    })()
};
Se(["click"]);
var fc = v('<div class="-mx-4 bg-layer2 p-4">'),
    hc = v("<div>"),
    _c = v('<div class="-mx-4 pt-sh sm:mx-0 sm:pt-0">'),
    vc = v('<div class="px-4 sm:px-0">');
const bc = x(() => f(() =>
        import ("./FavoriteRecent-Hm9M1PXq.js"), __vite__mapDeps([21, 2, 1, 22]))),
    yc = x(() => f(() =>
        import ("./index-CfIHZvAL.js"), __vite__mapDeps([23, 2, 1, 4]))),
    wc = x(() => f(() =>
        import ("./index-DGrwMa4j.js"), __vite__mapDeps([24, 2, 1, 25]))),
    kc = x(() => f(() =>
        import ("./index-Bs2x4uPH.js"), __vite__mapDeps([26, 2, 1, 21, 22]))),
    Ic = j("UpcomingDrawSection");

function Ec() {
    const e = Ln(),
        t = Wr(),
        a = Vn([{
            sectionId: "casino_tag",
            tag: "Bingo"
        }, {
            sectionId: "casino_tag",
            tag: "BC Exclusive"
        }, {
            sectionId: "casino_tag",
            tag: "Fishing"
        }, {
            sectionId: "casino_tag",
            tag: "Table games"
        }, {
            sectionId: "casino_tag",
            tag: "Pachinko"
        }]),
        {
            isSpreadHost: o,
            isSportsHost: r,
            isUsHost: i,
            isBrAuditHost: l
        } = C.getHostType(c.host),
        s = V(() => o && !I.login);

    function d(u) {
        return a() ? .[u]
    }
    const p = V(() => l ? n(kc, {}) : s() ? n(wc, {}) : r ? n(yc, {}) : null),
        h = [n(ue, {
            get title() {
                return _("__ENV_SITE__ Originals")
            },
            href: "/gamelist/brand",
            get data() {
                return t("casino_bc")
            }
        }), n(Vs, {}), n(ue, {
            get title() {
                return _("__ENV_SITE__ Exclusive")
            },
            get href() {
                return `/tagname/exclusive?label=${_("__ENV_SITE__ Exclusive")}`
            },
            get data() {
                return d(1)
            }
        }), n(ue, {
            get title() {
                return _("Slots")
            },
            href: "/gamelist/slots",
            get data() {
                return t("casino_slots")
            }
        }), n(xc, {}), n(ue, {
            get title() {
                return _("Live Casino")
            },
            href: "/gamelist/live",
            get data() {
                return t("casino_live")
            }
        }), n(Js, {}), n(ue, {
            get title() {
                return _("All Bingo Games")
            },
            get href() {
                return `/tagname/bingo?label=${_("All Bingo Games")}`
            },
            get data() {
                return d(0)
            }
        }), n(Zi, {}), n(ue, {
            get title() {
                return _("Hot Games")
            },
            get href() {
                return `/tagname/hot?label=${_("Hot Games")}`
            },
            get data() {
                return t("casino_hot")
            }
        }), n(ue, {
            get title() {
                return _("Table Games")
            },
            get href() {
                return `/tagname/Table games?label=${_("Table Games")}`
            },
            get data() {
                return d(3)
            }
        }), n(ue, {
            get title() {
                return _("Fishing")
            },
            get href() {
                return `/tagname/Fishing?label=${_("Fishing")}`
            },
            get data() {
                return d(2)
            }
        }), n(ue, {
            get title() {
                return _("Pachinko")
            },
            get href() {
                return `/tagname/Pachinko?label=${_("Pachinko")}`
            },
            get data() {
                return d(4)
            }
        })],
        m = V(() => Cc().map(y => h[y]));
    return ie(() => {
        S.emit("event-tracking", {
            eventType: "page_view",
            eventId: "index",
            url: "/",
            referrer: e()
        })
    }), (() => {
        var u = hc();
        return g(u, n(E, {
            get when() {
                return !p()
            },
            get fallback() {
                return p()
            },
            get children() {
                return [n(E, {
                    when: !i,
                    get fallback() {
                        return (() => {
                            var y = _c();
                            return g(y, n(gn, {})), y
                        })()
                    },
                    get children() {
                        return n(gc, {
                            get children() {
                                return n(gn, {})
                            }
                        })
                    }
                }), (() => {
                    var y = fc();
                    return g(y, n(E, {
                        when: !i,
                        get children() {
                            return n(pl, {})
                        }
                    }), null), g(y, n(we, {
                        get each() {
                            return m()
                        },
                        children: w => w
                    }), null), y
                })()]
            }
        })), R(() => W(u, U(c.mobile && "!-mt-sh"))), u
    })()
}

function gn() {
    return [(() => {
        var e = vc();
        return g(e, n(E, {
            get when() {
                return I.login
            },
            get children() {
                return n(ye, {
                    get children() {
                        return n(bc, {})
                    }
                })
            }
        })), e
    })(), n(ss, {})]
}

function xc() {
    return [n(st, {
        get title() {
            return _("Upcoming Lottery Draw")
        },
        href: "/lottery"
    }), n(ye, {
        get children() {
            return n(Ic, {})
        }
    })]
}

function Cc() {
    const {
        isUsHost: e
    } = C.getHostType(c.host), {
        isJapanIP: t,
        isKoreaIP: a,
        isSoutheastAsiaIP: o,
        isJapanLang: r,
        isKoreaLang: i,
        isSoutheastAsiaLang: l
    } = C.getAreaAndLang(L.lang, I.areaCode);
    let s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return t && (s = [0, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9]), a && (s = [0, 5, 12, 2, 3, 1, 6, 7, 8, 9, 4]), o && (s = [0, 5, 11, 10, 12, 2, 3, 1, 6, 7, 8, 9, 4]), r && (s = [0, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9]), i && (s = [0, 5, 12, 2, 3, 1, 6, 7, 8, 9, 4]), l && (s = [0, 5, 11, 10, 13, 2, 3, 1, 6, 7, 8, 9, 4]), e && (s = [0, 2, 3, 7, 8, 9]), s
}
x(() => f(() =>
    import ("./index-BHMdg_Va.js"), __vite__mapDeps([15, 2, 1])));
const Dc = {
    routes: () => M([{
        path: "/achievement",
        component: x(async () => ({
            default: (await f(async () => {
                const {
                    AchievementPage: e
                } = await
                import ("./index-BHMdg_Va.js");
                return {
                    AchievementPage: e
                }
            }, __vite__mapDeps([15, 2, 1]))).AchievementPage
        })),
        info: {
            dialog: !0
        }
    }], {
        dialog: !0
    })
};
x(() => f(() =>
    import ("./index-DE4WAogm.js"), __vite__mapDeps([27, 2, 1, 19])));
const $c = {
        routes: () => M([{
            path: "/promotions/weekly-raffle",
            component: x(async () => ({
                default: (await f(async () => {
                    const {
                        WeeklyPage: e
                    } = await
                    import ("./index-DE4WAogm.js");
                    return {
                        WeeklyPage: e
                    }
                }, __vite__mapDeps([27, 2, 1, 19]))).WeeklyPage
            })),
            info: {
                dialog: c.mobile,
                guards: [() => C.getHostType(c.host).isUsHost ? "/" : !1]
            }
        }], {
            dialog: !0
        })
    },
    Pc = "/modules/account2/remoteEntry.js",
    Sc = () =>
    import (Pc);
var Ac = v('<div class="flex size-full center min-h-40">');
const b = ee(Sc),
    Lc = [{
        path: "/signin",
        component: b("DialogSignIn")
    }, {
        path: "/regist",
        component: b("DialogSignUp")
    }, {
        path: "/forgot",
        component: b("DialogForgot")
    }, {
        path: "/whatsapp",
        component: b("DialogWhatsApp")
    }, {
        path: "/phone-verify",
        component: b("DialogPhoneVerify")
    }, {
        path: "/remote-login",
        component: b("DialogRemoteLogin")
    }, {
        path: "/twofa-verify",
        component: b("DialogSignin2FA")
    }, {
        path: "/phone/reset-password",
        component: b("DialogResetPassword")
    }],
    Rc = M([...M([{
        path: "/login/signin",
        component: b("DialogSignIn")
    }, {
        path: "/login/regist",
        component: b("DialogSignUp")
    }, {
        path: "/login/forgot",
        component: b("DialogForgot")
    }, {
        path: "/login/facade/us/email-verify",
        component: b("FacadeUsEmailVerify")
    }, {
        path: "/login/facade/us/phone-verify",
        component: b("FacadeUsPhoneVerify")
    }, {
        path: "/login/facade/us/regist",
        component: b("FacadeUsSignUp")
    }, {
        path: "/login/facade/br/email-verify",
        component: b("FacadeBrEmailVerify")
    }, {
        path: "/login/facade/br/phone-verify",
        component: b("FacadeBrPhoneVerify")
    }, {
        path: "/login/facade/br/regist",
        component: b("FacadeBrSignUp")
    }], {
        dialog: {
            behavior: "no-title",
            size: "l"
        }
    }), {
        path: "/login/whatsapp",
        component: b("DialogWhatsApp")
    }, {
        path: "/login/phone-verify",
        component: b("DialogPhoneVerify")
    }, {
        path: "/login/remote-login",
        component: b("DialogRemoteLogin")
    }, {
        path: "/login/twofa-verify",
        component: b("DialogSignin2FA")
    }, {
        path: "/login/phone/reset-password",
        component: b("DialogResetPassword")
    }], {
        dialog: {
            size: "l"
        },
        guards: [() => I.login && "/"]
    }),
    Wu = b("PopSignout"),
    Tc = {
        path: "/auth",
        component: b("AuthLayout"),
        children: M(Lc, {
            dialog: !1,
            guards: [() => I.login && "/"]
        })
    },
    Bc = M([{
        path: "/passkey",
        component: b("DialogPasskey")
    }, {
        path: "/user/enter",
        component: b("DialogUserEnter"),
        info: {
            guards: [() => !c.mobile && "/"],
            dialog: {
                behavior: "transparent-title"
            }
        }
    }, {
        path: "/user/enter/feedback",
        component: b("DialogUserFeedback")
    }, {
        path: "/settings/edit-profile",
        component: b("DialogEditProfile")
    }, {
        path: "/settings/edit-avatar",
        component: b("DialogEditAvatar")
    }, {
        path: "/settings/verify/:levelName",
        component: b("DialogVerificationCockpit"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/settings/rfc/verify",
        component: b("DialogVerificationRfcCockpit"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/settings/cpf/verify",
        component: b("BrazilCpf"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/settings/set-password",
        component: b("DialogSetPwd")
    }, {
        path: "/settings/change-password",
        component: b("DialogChangePwd")
    }, {
        path: "/settings/verification/bind",
        component: b("VerifyBind"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/settings/verification/bind/two",
        component: b("BindEmailOrPhone"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/settings/verification/email-bind",
        component: b("EmailVerifyBind"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/settings/verification/phone-bind",
        component: b("PhoneVerifyBind"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/settings/verification/twofa-bind",
        component: b("TwofaVerifyBind"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/settings/verification/email-change",
        component: b("EmailVerifyChange")
    }, {
        path: "/settings/verification/phone-change",
        component: b("PhoneVerifyChange")
    }, {
        path: "/settings/verification/twofa-disable",
        component: b("TwofaVerifyChange")
    }, {
        path: "/settings/privacy",
        component: b("DialogPrivacy")
    }, {
        path: "/logout",
        component: b("DialogLogout")
    }, {
        path: "/settings/kyc-step",
        component: b("DialogKYCStep")
    }, {
        path: "/settings/verifyphone",
        component: b("DialogExclusionSendPhone")
    }, {
        path: "/quests/sendemail",
        component: b("DialogExclusionSendEmail")
    }, {
        path: "/exclusion/verifypwd",
        component: b("DialogExclusionVerifyPwd")
    }, {
        path: "/settings/self-exclusion",
        component: b("DialogExclusionConfirm")
    }, {
        path: "/verification/wallet-two-step-bind",
        component: b("WalletTwoStepBind"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/verification/wallet-two-step-verify",
        component: b("WalletTwoStepVerify"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/verification/change-2fa",
        component: b("TwoFaChangeMethods"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/verification/step-verify",
        component: b("StepVerification"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/verification/step-chose",
        component: b("StepChose"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/settings/verification/two-step-bind",
        component: b("TwoStepBind"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/settings/whitelist/add",
        component: b("DialogAddWhite")
    }, {
        path: "/settings/whitelist/edit",
        component: b("DialogEditWhite")
    }], {
        guards: [ce]
    }),
    Oc = [{
        path: "/social_share/:fullName",
        component: b("DialogUserSharePop")
    }, {
        path: "/settings/passkey-change-password",
        component: b("DialogPasskeyLoginChangePwd")
    }, {
        path: "/settings/resetPassword",
        component: b("DialogResetSignPassword")
    }, {
        path: "/settings/resetPasswordExpire",
        component: b("DialogResetSignPasswordExpire")
    }, {
        path: "/user/profile/:userId",
        component: b("DialogUserProfile")
    }, {
        path: "/user/medals/item",
        component: b("DialogUserMedalItem"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/user/statistics",
        component: b("DialogUserStatistics")
    }, {
        path: "/user/medals/:userId",
        component: b("DialogUserMedals")
    }, {
        path: "/business",
        component: b("DialogBusinessContacts")
    }],
    Nc = M([{
        path: "/quests/bind2fa",
        component: b("TwofaVerifyBind")
    }, {
        path: "/quests/bindemail",
        component: b("EmailVerifyBind")
    }, {
        path: "/settings/mobile",
        component: b("PhoneVerifyBind")
    }], {
        guards: [ce]
    });
b("useGoogleLogin");
const Vc = b("Language"),
    Mc = b("ViewinFiat"),
    Hc = b("LanAndFiat");

function Dt(e) {
    return n(ta, {
        get title() {
            return e.title()
        },
        get class() {
            return U("h-full sm:h-3/4", e.merge && "no-padding-pop")
        },
        get children() {
            return n(ye, {
                get fallback() {
                    return (() => {
                        var t = Ac();
                        return g(t, n(bt, {})), t
                    })()
                },
                get children() {
                    return e.children
                }
            })
        }
    })
}
const Uc = {
        events: {
            "open-language": () => ht.push(() => n(Dt, {
                title: () => _("Language"),
                get children() {
                    return n(Vc, {})
                }
            })),
            "open-fiat": () => ht.push(() => n(Dt, {
                title: () => _("View in currency"),
                get children() {
                    return n(Mc, {})
                }
            })),
            "open-lanfiat": async () => e => ht.push(() => n(Dt, {
                merge: !0,
                title: () => "",
                get children() {
                    return n(Hc, {
                        tab: e
                    })
                }
            })),
            "need-kyc": b("kycVerify"),
            "need-rfc": b("rfcVerify"),
            "brazil-cpf-update": b("openBrazilKycUpdate"),
            get_email_phone_verify: b("emailPhoneVerify"),
            get_verify: b("accountVerify"),
            get_step_verify: b("stepVerify"),
            get_verify_wallet: b("walletVerify"),
            get_step_verify_wallet: b("walletStepVerify")
        },
        routes: () => M([...Rc, ...Bc, ...Oc, ...Nc, {
            path: "/ceo-inbox/enter",
            component: b("CEOInbox"),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/ceo-inbox/chat/:ticketId",
            component: b("DialogCEOInboxChat"),
            info: {
                dialog: !0,
                guards: [ce],
                keepAlive: !1
            }
        }, {
            path: "/ceo-inbox/addcase",
            component: b("DialogAddCase"),
            info: {
                dialog: !0,
                guards: [ce]
            }
        }, {
            path: "/settings",
            component: b("PageSettingLayout"),
            info: {
                dialog: c.mobile,
                guards: [ce]
            },
            children: [{
                path: "",
                component: b("DialogPageSetting"),
                info: {
                    guards: [() => !c.mobile && "/settings/account-info"]
                }
            }, {
                path: "/account-info",
                component: b("DialogAccountInfo")
            }, {
                path: "/security",
                component: b("DialogSecurity")
            }, {
                path: "/preferences",
                component: b("DialogPreferences")
            }, {
                path: "/verification",
                component: b("DialogVerification")
            }, {
                path: "/payment",
                component: b("DialogPayment")
            }, {
                path: "/whiteList",
                component: b("DialogWhiteList")
            }]
        }], {
            dialog: !0
        })
    },
    D = ee(Xn),
    Gc = {
        events: {
            "open-refer": D("openRefer"),
            "register-catch_coco": D("cocoRegister"),
            "register-toast": D("toastRegister"),
            "show-bonus_link": D("bonusLink"),
            "schedule-new-user-reward": D("scheduleNewUserReward"),
            "schedule-promotions": D("schedulePromotions"),
            "open-bonus-terms": D("popupBonusTAndC"),
            "schedule-ipl": D("scheduleIpl"),
            "schedule-kbo": D("scheduleKbo"),
            cancel_bonus: D("popupCancelBonus"),
            "register-wager-progress": D("wagerProgressRegister"),
            "request-bonus-rules": D("requestBonusRules"),
            "register-deposit-event": D("registerDepositEvent")
        },
        routes: () => [{
            path: "/promotion-redirect/:event",
            component: D("PromotionRedirect"),
            info: {
                dialog: {
                    size: c.mobile ? "full" : [27, 20]
                }
            }
        }, ...M([{
            path: "/bonuslink/:code"
        }, {
            path: "/shitlink/:code"
        }], {
            guards: [() => {
                const e = In().code;
                return setTimeout(() => {
                    S.emit("show-bonus_link", e)
                }), "/"
            }]
        }), ...M([{
            path: "/bonus-welcome",
            component: D("BonusWelcome"),
            info: {
                dialog: c.mobile,
                guards: [() => I.login && "/bonus"]
            }
        }, {
            path: "/bonus",
            component: D("BonusPage"),
            info: {
                dialog: c.mobile ? {
                    behavior: "transparent-title"
                } : !1,
                guards: [() => !I.login && "/bonus-welcome"]
            }
        }, ...M([{
            path: "/korea-attendance",
            component: D("KoreaAttendanceEnter")
        }, {
            path: "/tg-progress/:event",
            component: D("TgProgress"),
            info: {
                dialog: {
                    behavior: "transparent-title",
                    size: c.mobile ? void 0 : [53, 30.5]
                }
            }
        }, {
            path: "/recharge",
            component: D("RechargeDialog")
        }, {
            path: "/bonus/rakeback-history",
            component: D("RakebackHistoryDialog")
        }, {
            path: "/bonus/dashboard",
            component: D("BCDRakebackDialog")
        }, {
            path: "/bonus-detail",
            component: D("BonusDetailDialog")
        }, {
            path: "/quests",
            component: D("QuestHubDialog")
        }, {
            path: "/quests/previous",
            component: D("PreviousQuestDialog"),
            info: {
                dialog: {
                    behavior: "transparent-title"
                }
            }
        }, {
            path: "/spin",
            component: D("Spin"),
            info: {
                dialog: {
                    size: c.mobile ? void 0 : [26, 43],
                    behavior: "no-title"
                }
            }
        }], {
            guards: [ce]
        }), {
            path: "/spin/leaderboard",
            component: D("SpinLeaderBoard")
        }, {
            path: "/vip-detail",
            component: D("VipDetail"),
            info: {
                backgroundColor: "195 113 28",
                guards: [() => I.login && "/vip"],
                dialog: c.mobile ? {
                    behavior: "transparent-title"
                } : !1
            }
        }, {
            path: "/vip-level",
            component: D("VipLevelSystem")
        }, ...M([{
            path: "/vip",
            component: D("Vip"),
            info: {
                dialog: c.mobile ? {
                    behavior: "transparent-title"
                } : !1,
                guards: [() => !I.login && "/vip-detail"]
            }
        }, {
            path: "/vip-offer",
            component: D("VipOffer")
        }], {
            guards: [ce]
        }), {
            path: "/affiliate",
            component: D("AffiliatePage"),
            info: {
                dialog: c.mobile,
                guards: [() => !I.login && "/affiliate-exhibition"]
            },
            children: [{
                path: "",
                component: D("AffiliatePage")
            }, {
                path: "/my-rewards/:tab",
                component: D("MyRewardsPage")
            }, {
                path: "/referral/:tab",
                component: D("ReferralCodePage")
            }, {
                path: "/rules",
                component: D("RulesPage")
            }, {
                path: "/banners",
                component: D("BannersPage")
            }]
        }, {
            path: "/affiliate-exhibition",
            component: D("NoLoginAffiliatePage"),
            info: {
                dialog: c.mobile,
                guards: [() => I.login && "/affiliate"]
            }
        }, {
            path: "/referral-terms",
            component: D("AffiliateTerms")
        }, {
            path: "/commission-rule",
            component: D("CommissionRule"),
            info: {
                dialog: {
                    size: "l"
                }
            }
        }, {
            path: "/rewards-swap",
            component: D("Swap")
        }, {
            path: "/rewards-withdraw",
            component: D("Withdraw")
        }, {
            path: "/reward-history",
            component: D("RewardsHistory")
        }, ...M([{
            path: "/referral-code-detail",
            component: D("ReferralCodeDetail")
        }, {
            path: "/rewards-detail",
            component: D("ReferralRewardsDetail")
        }, {
            path: "/friends-detail",
            component: D("FriendDetails")
        }], {
            keepAlive: !1
        }), {
            path: "/forum_event/:id",
            component: D("Forum"),
            info: {
                dialog: c.mobile,
                keepAlive: !1
            }
        }, {
            path: "/promotions/promotion",
            component: D("Promotion"),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/promotion/:id",
            component: D("PromotionDetail"),
            info: {
                dialog: c.mobile,
                keepAlive: !1
            }
        }], {
            dialog: !0
        })],
        init: () => {
            S.emit("register-catch_coco"), S.emit("register-toast"), S.emit("schedule-new-user-reward"), S.emit("register-wager-progress"), S.emit("schedule-promotions"), S.emit("register-deposit-event")
        }
    },
    Fc = "/modules/chat2/remoteEntry.js",
    zc = () =>
    import (Fc),
    oe = ee(zc),
    Ku = oe("PublicChat"),
    Ju = oe("PrivateChatEnter");
oe("PageRoomView");
const qu = oe("RightRoomView"),
    jc = {
        events: {
            getPublicChatRoomId: oe("getPublicChatRoomId")
        },
        routes: () => [...M([{
            path: "/chat/:userId",
            component: oe("DialogRoomView"),
            info: {
                dialog: {
                    size: "l"
                }
            }
        }, {
            path: "/chat",
            component: oe("DialogListView")
        }, {
            path: "/group-message",
            component: oe("DialogGroupMessage")
        }, {
            path: "/send-rain",
            component: oe("SendRain")
        }, {
            path: "/send-coindrop",
            component: oe("SendCoindrop")
        }, {
            path: "/send-tip/:userId/:username",
            component: oe("SendTip")
        }], {
            dialog: !0,
            guards: [ce]
        }), {
            component: e => K(() => e.children),
            children: [{
                path: "/chat-fullscreen/:userId",
                component: oe("PageRoomView"),
                guards: [ce]
            }]
        }, {
            path: "/chat-public",
            component: oe("PublicChat"),
            info: {
                guards: [() => !c.mobile && "/"]
            }
        }]
    },
    Wc = "/modules/static2/remoteEntry.js",
    lt = () =>
    import (Wc),
    Kc = "/assets/t1-CQVdqPuP.png",
    Jc = "/assets/t2-j5Zu3zP-.png",
    qc = "/assets/logo-BeRjLoDu.svg",
    Yc = "/assets/crypto-icon-CkS2-0Pp.png",
    Xc = "/assets/crypto-icon-m-ByzPW3Sp.png",
    Qc = "/assets/community-icon-BMUGJivU.png",
    Zc = "/assets/community-icon-m-C0gVVKBv.png";
var ed = v('<div class="footer-bcxyz mt-12 bg-transparent pb-6 text-[#e4f1fc] lg:pt-12"><div class="border-b mb-7 border-[#1b246f] pb-5 lg:flex lg:justify-between"><div class="lg:max-w-3/2 pb-7"><img class="m-auto w-72 md:w-2/3 lg:mx-0 lg:h-4 lg:w-auto"alt="Crypto Currencies We Supported"><div class="cursor-pointer pt-7 lg:max-w-[600px]"><img class="w-full lg:hidden"alt=Crypto><img class="hidden lg:block"alt=Crypto></div></div><div class><img class="m-auto w-44 md:w-1/2 lg:mx-0 lg:h-4 lg:w-auto"alt="Join our Community"><div class="cursor-pointer pt-7 lg:max-w-[300px]"><img class="w-full lg:hidden"alt="Join our Community"><img class="hidden lg:block"alt="Join our Community"></div></div></div><div class="w-full lg:pt-5"><img class="w-36 lg:w-44"alt=bc.xyz></div><div class="grid text-sm grid-cols-2 gap-4 pt-7 lg:gap-24 xl:gap-48"><div class=grid-left><div class=info>BC.GAME is a multi-award-winning cryptocurrency platform known for its user-focused approach. It successfully meets the needs of millions of players worldwide. With a strong emphasis on community, BC.GAME is dedicated to providing an enduring and continuously entertaining playing experience.</div></div><div class=grid-right><div class=info>BC.GAME is operated by BlockDance B.V. (Commercial register of Curaçao no.158182, Emancipatie Boulevard Dominico F. "Don" Martina 31, Curaçao) under a sublicense CIL pursuant to Master gaming License #5536/JAZ.</div></div></div><div class="mt-4 text-center font-sm border-t border-[#1b246f] pt-5 lg:mt-6 lg:pt-7">&copy;2025 BLOCKDANCE B.V. ALL RIGHTS RESERVED');

function he() {
    const e = X();
    return (() => {
        var t = ed(),
            a = t.firstChild,
            o = a.firstChild,
            r = o.firstChild,
            i = r.nextSibling,
            l = i.firstChild,
            s = l.nextSibling,
            d = o.nextSibling,
            p = d.firstChild,
            h = p.nextSibling,
            m = h.firstChild,
            u = m.nextSibling,
            y = a.nextSibling,
            w = y.firstChild;
        return P(r, "src", Kc), l.$$click = () => e("#/login/regist"), P(l, "src", Xc), s.$$click = () => e("#/login/regist"), P(s, "src", Yc), P(p, "src", Jc), m.$$click = () => e("#/login/regist"), P(m, "src", Zc), u.$$click = () => e("#/login/regist"), P(u, "src", Qc), P(w, "src", qc), t
    })()
}
Se(["click"]);
var td = v('<div class="left-1/2 top-1/2 z-10 -translate-y-1/2 fixed -translate-x-1/2">'),
    nd = v('<div class="overflow-hidden fixed inset-0"><iframe class=size-full>');
const Qn = [
    ["/events/bc-token-landing", "https://bcpromotion.top/public/bc-token-landing/index.html"],
    ["/events/bc-token-dubai", "https://bcpromotion.top/public/bc-token-landing/dubai.html"]
];

function od() {
    let e;
    const [t, a] = ad(() => e), [o, r] = B(!1), i = X(), l = be();
    return ie(() => {
        Xe.pause(), ve(() => Xe.start())
    }), N(() => {
        const s = t();
        !s || !s.type || (s.type === "navigate" ? i(s.payload.path, {
            replace: s.payload.replace
        }) : s.type === "ready" && r(!0))
    }), N(() => {
        o() && a({
            type: "setting",
            payload: {
                theme: L.darken ? "darken" : "lighten",
                i18n: c.langs[L.lang] ? .[1] ? ? "en"
            }
        })
    }), N(() => {
        if (I.login && l.pathname === "/events/bc-token-dubai") {
            const s = window.localStorage.getItem("dubai-active-10bcd-" + I.userId);
            (!s || s === "") && Date.now() - I.createTime < 864e5 && (S.emit("register-bonus-10bcd"), window.localStorage.setItem("dubai-active-10bcd-" + I.userId, "opend"))
        }
    }), N(() => {
        o() && a({
            type: "login",
            payload: I.login ? { ...I,
                avatar: window.location.protocol + Y.avatar(I.userId)
            } : void 0
        })
    }), (() => {
        var s = nd(),
            d = s.firstChild;
        g(s, n(E, {
            get when() {
                return !o()
            },
            get children() {
                var h = td();
                return g(h, n(bt, {})), h
            }
        }), d);
        var p = e;
        return typeof p == "function" ? Pe(p, d) : e = d, R(() => P(d, "src", Qn.find(h => h[0] === l.pathname)[1])), s
    })()
}

function ad(e) {
    const t = r => {
            e().contentWindow ? .postMessage(JSON.stringify(r), {
                targetOrigin: "*"
            })
        },
        [a, o] = B();
    return ie(() => {
        const r = i => {
            if (!(!i.data || typeof i.data != "string")) try {
                o(JSON.parse(i.data))
            } catch {}
        };
        window.addEventListener("message", r, !1), ve(() => {
            window.removeEventListener("message", r)
        })
    }), [a, t]
}
const _e = x(() => f(() =>
        import ("./index-EkaR1O1e.js"), __vite__mapDeps([12, 2, 13, 1, 14, 15]))),
    k = ee(lt),
    rd = k("Ipl");
k("Anniversary");
const id = k("Festival");
k("NewMining");
const sd = k("IndiaPdd"),
    ld = k("Pdd"),
    cd = k("AirDrop"),
    dd = k("EventSports"),
    mn = k("Mining"),
    pn = x(() => f(() =>
        import ("./ThrowAndHighRolles-CE5qi-lg.js"), __vite__mapDeps([20, 2, 1]))),
    We = {
        dialog: c.mobile ? {
            behavior: "no-title"
        } : !1
    },
    ud = e => n(rd, {
        get footer() {
            return K(() => !!c.mobile)() ? null : n(_e, {})
        },
        get children() {
            return e.children
        }
    }),
    gd = e => n(cd, {
        get footer() {
            return K(() => !!c.mobile)() ? he : n(_e, {})
        },
        get children() {
            return e.children
        }
    }),
    md = e => n(dd, {
        get footer() {
            return K(() => !!c.mobile)() ? he : n(_e, {})
        },
        get children() {
            return e.children
        }
    }),
    pd = e => n(id, {
        get footer() {
            return K(() => !!c.mobile)() ? he : n(_e, {})
        },
        get children() {
            return e.children
        }
    }),
    fd = e => n(sd, {
        get footer() {
            return K(() => !!c.mobile)() ? he : n(_e, {})
        },
        get children() {
            return e.children
        }
    }),
    hd = e => n(ld, {
        get footer() {
            return K(() => !!c.mobile)() ? he : n(_e, {})
        },
        get children() {
            return e.children
        }
    });
k("MiningEnter");
const _d = {
        routes: () => [...M([{
            component: e => K(() => e.children),
            children: [{
                path: "/events/premier",
                component: k("Premier"),
                info: {
                    dialog: c.mobile
                }
            }, {
                path: "/events/app-download",
                component: k("AppDownload"),
                info: {
                    dialog: {
                        behavior: "no-title"
                    }
                }
            }, {
                path: "/events/bitcoin",
                component: k("Bitcoin"),
                info: {
                    dialog: {
                        behavior: "no-title"
                    }
                }
            }, {
                path: "/events/airdrop",
                component: gd,
                info: {
                    dialog: c.mobile ? {
                        behavior: "no-title"
                    } : !1
                }
            }, {
                path: "/events/wu-kong",
                component: k("Qtds"),
                info: {
                    dialog: c.mobile ? {
                        behavior: "no-title"
                    } : !1
                }
            }, {
                path: "/events/ucl",
                component: k("Ucl"),
                info: {
                    dialog: c.mobile
                }
            }, {
                path: "/events/ucl-winners",
                component: k("UclHistory"),
                info: {
                    dialog: c.mobile
                }
            }, {
                path: "/events/sports",
                component: md,
                info: {
                    dialog: c.mobile ? {
                        behavior: "no-title"
                    } : !1
                }
            }, {
                path: "/events/bc-lottery",
                component: k("NewEventLottery"),
                info: {
                    dialog: c.mobile,
                    keepAlive: !1
                }
            }, {
                path: "/events/brazil",
                component: k("Brazil"),
                info: {
                    dialog: c.mobile
                }
            }, {
                path: "/events/mining",
                component: () => n(mn, {
                    get footer() {
                        return c.mobile ? he : _e
                    },
                    latestBet: pn
                }),
                info: {
                    dialog: c.mobile
                }
            }, {
                path: "/events/mining/twitter",
                component: () => n(mn, {
                    get footer() {
                        return c.mobile ? he : _e
                    },
                    latestBet: pn
                }),
                info: {
                    dialog: c.mobile
                }
            }, {
                path: "/events/festival",
                component: pd,
                info: {
                    dialog: c.mobile ? {
                        behavior: "no-title"
                    } : !1
                }
            }, {
                path: "/events/india-pdd",
                component: fd,
                info: {
                    dialog: c.mobile ? {
                        behavior: "no-title"
                    } : !1
                }
            }, {
                path: "/events/invite-friends-withdraw-cash",
                component: hd,
                info: {
                    dialog: c.mobile ? {
                        behavior: "no-title"
                    } : !1
                }
            }]
        }], {
            dialog: c.mobile,
            keepAlive: !1
        }), ...M([{
            component: ud,
            children: [{
                path: "/events/ipl/home",
                component: k("IplHome"),
                info: { ...We,
                    keepAlive: !1
                }
            }, {
                path: "/events/ipl/pool",
                component: k("IplPrizePool"),
                info: We
            }, {
                path: "/events/ipl/rank",
                component: k("IplRank"),
                info: We
            }, {
                path: "/events/ipl/prediction",
                component: k("IplPrediction"),
                info: We
            }, {
                path: "/events/ipl/daily",
                component: k("IplDaily"),
                info: We
            }]
        }], {
            dialog: c.mobile
        }), ...M([{
            path: "/events/airdrop/check",
            component: k("AirDropCheck"),
            info: {
                dialog: c.mobile ? !0 : {
                    behavior: "no-title",
                    size: "l"
                }
            }
        }, {
            path: "/events/airdrop/share",
            component: k("AirDropShare"),
            info: {
                dialog: c.mobile ? {
                    behavior: "no-title"
                } : {
                    behavior: "no-title",
                    size: "l"
                }
            }
        }, {
            path: "/events/home/event-detail",
            component: k("AnniversaryHomeEventDetail")
        }, {
            path: "/events/home/provably-detail",
            component: k("AnniversaryHomeFairDetail")
        }, {
            path: "/events/looted-legacy/event-detail",
            component: k("AnniversaryLootedLegacyDetail")
        }, {
            path: "/events/daily/event-detail",
            component: k("AnniversaryDailyDetail")
        }, {
            path: "/events/golden-sport/event-detail",
            component: k("AnniversaryGoldenDetail")
        }, {
            path: "/events/home/my-ticket",
            component: k("AnniversaryHomeMyTicket")
        }, {
            path: "/events/premier-detail",
            component: k("PremierEventDetail")
        }, {
            path: "/events/brazil-detail",
            component: k("BrazilEventDetail")
        }, {
            path: "/events/lottery-detail",
            component: k("LotteryEventDetail")
        }, {
            path: "/events/brazil-verify",
            component: k("BrazilVerify")
        }, {
            path: "/events/ipl-invite",
            component: k("IplInvite")
        }, {
            path: "/events/brazil-invite",
            component: k("BrazilInvite")
        }, {
            path: "/events/kong-invite",
            component: k("WuKongInvite")
        }, {
            path: "/events/festival-invite",
            component: k("FestivalInvite")
        }, {
            path: "/events/pdd/share",
            component: k("PddShare"),
            info: {
                dialog: {
                    behavior: "no-title",
                    size: "s"
                }
            }
        }, {
            path: "/events/pdd/rule",
            component: k("PddRule"),
            info: {
                dialog: {
                    behavior: "no-title",
                    size: "s"
                }
            }
        }, {
            path: "/events/pdd/boost-record",
            component: k("PddBoostRecord"),
            info: {
                dialog: {
                    behavior: "no-title",
                    size: "s"
                }
            }
        }, {
            path: "/events/pdd/withdraw-record",
            component: k("PddWithdrawRecord"),
            info: {
                dialog: {
                    behavior: "no-title",
                    size: "s"
                }
            }
        }, {
            path: "/events/pdd/withdraw-rank",
            component: k("PddWithdrawRank"),
            info: {
                dialog: {
                    behavior: "no-title",
                    size: "s"
                }
            }
        }, {
            path: "/events/ipl/daily-detail",
            component: k("IplDailyDetail"),
            info: {
                dialog: c.mobile ? {} : {
                    size: "l"
                }
            }
        }, {
            path: "/events/ipl/pool-detail",
            component: k("IplPoolDetail"),
            info: {
                dialog: c.mobile ? {} : {
                    size: "l"
                }
            }
        }, {
            path: "/events/ipl/rank-detail",
            component: k("IplRankDetail"),
            info: {
                dialog: c.mobile ? {} : {
                    size: "l"
                }
            }
        }, {
            path: "/events/ipl/prediction-detail",
            component: k("IplPredictionDetail"),
            info: {
                dialog: c.mobile ? {} : {
                    size: "l"
                }
            }
        }, {
            path: "/events/kong-detail",
            component: k("KongViewDetail"),
            info: {
                dialog: c.mobile ? {
                    behavior: "no-title"
                } : {
                    behavior: "no-title",
                    size: "l"
                }
            }
        }, {
            path: "/events/festival-invite",
            component: k("FestivalInvite")
        }, {
            path: "/events/kong-detail",
            component: k("KongViewDetail"),
            info: {
                dialog: c.mobile ? {
                    behavior: "no-title"
                } : {
                    behavior: "no-title",
                    size: "l"
                }
            }
        }, {
            path: "/events/kong-prize-detail",
            component: k("KongPrizeDetail"),
            info: {
                dialog: c.mobile ? {
                    behavior: "no-title"
                } : {
                    behavior: "no-title",
                    size: "l"
                }
            }
        }, {
            path: "/events/kong-cash-detail",
            component: k("KongCashDetail"),
            info: {
                dialog: c.mobile ? {
                    behavior: "no-title"
                } : {
                    behavior: "no-title",
                    size: "l"
                }
            }
        }, {
            path: "/events/mining/eventdetail",
            component: k("MiningEventDetail")
        }, {
            path: "/events/mining/eventdetail/twitter",
            component: k("MiningEventDetail")
        }, {
            path: "/events/mining/mydetails",
            component: k("MiningMyBetDetail")
        }, {
            path: "/events/mining/mydetails/twitter",
            component: k("MiningMyBetDetail")
        }, {
            path: "/events/festival-detail",
            component: k("FestivalEventDetail")
        }, {
            path: "/events/festival-week1-detail",
            component: k("FestivalWeekOneDetail")
        }, {
            path: "/events/festival-week2-detail",
            component: k("FestivalWeekTwoDetail")
        }, {
            path: "/events/festival-week3-detail",
            component: k("FestivalWeekThreeDetail")
        }, {
            path: "/events/festival-week4-detail",
            component: k("FestivalWeekFourDetail")
        }, {
            path: "/events/festival-prize-ratio-detail",
            component: k("FestivalPrizeRatioDetail"),
            info: {
                dialog: c.mobile ? {
                    behavior: "no-title"
                } : {
                    behavior: "no-title",
                    size: "l"
                }
            }
        }], {
            dialog: !0
        }), {
            component: od,
            children: [{
                path: Qn.map(e => e[0])
            }]
        }]
    },
    vd = "/modules/games2/remoteEntry.js",
    Wt = () =>
    import (vd),
    Q = ee(Wt),
    bd = {
        events: {
            "register-sharebutton": Q("shareWinRegister")
        },
        routes: () => M([...M([{
            path: "/game/crash-trenball",
            component: Q("GameLayout"),
            info: {
                guards: [() => "/game/crash?type=trenball"],
                dialog: c.mobile
            }
        }, {
            path: "/game/:gameUnique",
            component: Q("GameLayout"),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/enter-game",
            component: Q("SlotsGameIframe"),
            info: {
                dialog: {
                    size: "full"
                }
            }
        }, {
            path: "/enter-game/score",
            component: Q("ScoreGameIframe"),
            info: {
                dialog: {
                    size: "full",
                    behavior: "no-title"
                }
            }
        }, {
            path: "/crash-history",
            component: Q("History"),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/crash-creator",
            component: Q("CreatorDetail"),
            info: {
                dialog: c.mobile
            }
        }], {
            keepAlive: !1
        }), {
            path: "/crash-copy",
            component: Q("CopyStrategy"),
            info: {
                keepAlive: !1
            }
        }, {
            path: "/crash-history-detail",
            component: Q("HistoryDetail"),
            info: {
                keepAlive: !1
            }
        }, {
            path: "/crash-strategy-detail",
            component: Q("StrategyDetail"),
            info: {
                keepAlive: !1
            }
        }, {
            path: "/crash-guide",
            component: Q("CrashStrategyGuide"),
            info: {
                keepAlive: !1
            }
        }, {
            path: "/comments",
            component: Q("Comments"),
            info: {
                keepAlive: !1
            }
        }, {
            path: "/game-detail/:id",
            component: Q("GameDetail"),
            info: {
                keepAlive: !1,
                ...c.mobile === !1 && {
                    dialog: {
                        size: [26, 35]
                    }
                }
            }
        }, {
            path: "/allplayers/:gameUnique/:gameId",
            component: Q("AllPlayers"),
            info: {
                keepAlive: !1,
                ...c.mobile === !1 && {
                    dialog: {
                        size: [32.5, 47]
                    }
                }
            }
        }, {
            path: "/sd/:id",
            component: Q("GameDetailRedirect"),
            info: {
                keepAlive: !1
            }
        }], {
            dialog: !0
        }),
        init: () => {
            S.emit("register-sharebutton")
        }
    },
    fn = Q("ProvablyFair"),
    ge = ee(lt),
    hn = ge("HelpCenter"),
    yd = {
        routes: () => M([{
            path: "/help/coms/help_bonus",
            component: ge("BonusTCDialog"),
            info: {
                dialog: !0
            }
        }, {
            path: "/verify_representative",
            component: ge("VerifyRepresentative")
        }, {
            path: "/sponsorship",
            component: ge("Sponsorship")
        }, {
            component: ge("Layout"),
            path: "/help",
            info: {
                dialog: c.mobile
            },
            children: [{
                path: "/",
                component: () => n(hn, {
                    remoteComponent: fn
                })
            }, {
                path: "/:helpId",
                component: () => n(hn, {
                    remoteComponent: fn
                })
            }, {
                path: "/check/one_dollar_check",
                component: ge("OneDollarCheck"),
                info: {
                    dialog: !0
                }
            }, {
                path: "/wallet_type/:periodId",
                component: ge("WalletType"),
                info: {
                    dialog: !0
                }
            }, {
                path: "/coms/help_privacy",
                component: ge("PrivacyDialog")
            }, {
                path: "/help-page/:helpPageId",
                component: ge("HelpPage")
            }]
        }], {
            dialog: !0
        })
    },
    wd = () => f(() =>
        import ("./index-D4hbk3KI.js"), __vite__mapDeps([28, 2, 1, 29, 30])),
    kd = e => e instanceof Error ? "code" in e && "response" in e : !1;

function Id() {
    const e = X();
    na(async t => {
        kd(t) && (t.code === Y.ErrorCode.NEED_LOGIN ? (Ye({
            login: !1
        }), e("/login/signin")) : t.code === Y.ErrorCode.IS_BLOCKED ? wd().then(a => a.showBlock(t.message)) : t.code === Y.ErrorCode.LOCKED_BY_KYC ? S.emit("need-kyc", t.code) : t.code >= Y.ErrorCode.NEED_EMAIL_AND_BASIC_KYC && t.code <= Y.ErrorCode.FINAL_REJECT_KYC ? S.emit("need-kyc", t.code) : t.code >= Y.ErrorCode.NO_RFC_KYC && t.code <= Y.ErrorCode.NOPASS_RFC_KYC ? S.emit("need-rfc", t.code) : t.response.code === Y.ErrorCode.IS_UPDATING ? e("/update") : t && t.code === Y.ErrorCode.SELF_GAMBLING_LIMITS ? S.emit("toast-self-gambling-limits", t.message) : t && t.code === 6003 && (console.log("reload from intercep"), location.reload()))
    }), Be().addAfterRequest(t => {
        t.code === Y.ErrorCode.SELF_GAMBLING_LIMITS && S.emit("toast-self-gambling-limits", t.msg)
    })
}
const ne = function() {
    return window.dataLayer = window.dataLayer || [],
        function(t, a) {
            const o = a ? {
                event: t,
                ...a
            } : {
                event: t
            };
            window.dataLayer.push(o)
        }
}();

function Zn() {
    const e = document.location.hostname;
    if (/^\d+\.\d+\.\d+\.\d+$/.test(e) || e === "localhost") return e;
    const t = e.split(".");
    return t.length <= 2 ? `.${e}` : `.${t.slice(-2).join(".")}`
}

function $t(e, t, a, o) {
    let r = `${e}=${t}; expires=${o}; path=/`;
    a && (r += `; domain=${a}`), document.cookie = r
}

function Pt(e) {
    const t = `${encodeURIComponent(e)}=`,
        a = document.cookie.split(";");
    for (let o = 0; o < a.length; o++) {
        const r = a[o].trim();
        if (r.startsWith(t)) return decodeURIComponent(r.substring(t.length))
    }
    return ""
}

function St(e) {
    return e && Object.keys(e).length > 0
}

function Ed() {
    const e = navigator.userAgent,
        t = e.indexOf("FB4A") !== -1 || e.indexOf("FB_IAB") !== -1;
    if (e.indexOf("FBIOS") !== -1 || e.indexOf("FBAN"), t) try {
        const a = new URL(window.location.href),
            o = a.hostname,
            r = a.pathname,
            i = a.searchParams;
        let l;
        if (i.has("i")) {
            i.has("p") || i.delete("p");
            const d = i.get("i");
            l = `${o}/i-${d}-n/${a.search}&p=${r}`
        } else l = `${o}${r}${a.search}`;
        const s = `intent://${l}#Intent;scheme=https;package=com.android.chrome;end`;
        window.location.href = s
    } catch (a) {
        console.error("Error while redirecting to Intent URL:", a)
    }
}

function Yu() {
    const e = navigator.userAgent;
    return /Twitter/i.test(e)
}

function _n(e, t, a) {
    const o = Zn();
    if (localStorage.getItem("InitiateCheckout") === "1" && o !== "localhost") return;
    const i = new URLSearchParams(window.location.href.split("?")[1]),
        l = Pt("_fbp");
    let s = Pt("invitation-code");
    a || (a = Pt("_fbc")), s || (s = i.get("i") || ""), e || (e = i.get("ch") || ""), t || (t = i.get("pixel_id") || i.get("pixelid") || ""), localStorage.setItem("InitiateCheckout", "1"), F().post("/ad/fb/common/send/", {
        channel: e || "",
        eventType: 8,
        fbc: a || "",
        fbp: l || "",
        invitationCode: s || "",
        pixelId: t || "",
        ua: window.navigator.userAgent
    }).catch(d => {})
}
const ct = "track_regist_success",
    Kt = "track_ftd_success",
    Jt = "track_login_success",
    et = "track_deposit_success",
    eo = "track_init";
async function At() {
    if (!I.login) return !1;
    try {
        const e = localStorage.getItem("userMateinfo");
        let t = e ? JSON.parse(e) : null;
        return (!t ? .name || t.name !== I.name) && (t = await F().get("/account/invitation/get/"), localStorage.setItem("userMateinfo", JSON.stringify(t))), ["3jnyvi6lm", "3lsqcavig", "3p4qpsg7t", "3p4p5ext1"].includes(t.invitationCode)
    } catch {
        return !1
    }
}
class xd {
    constructor() {
        this.initParams = {
            ch: "",
            pixel_id: ""
        }, this.addEvent("track_parseParams", t => {
            try {
                const a = new URLSearchParams(t.split("?")[1]),
                    o = "pixel_info",
                    r = c.initSearchParams,
                    i = {
                        ch: r.get("ch") || a.get("ch"),
                        pixel_id: r.get("pixel_id") || r.get("pixelid") || a.get("pixel_id") || a.get("pixelid")
                    };
                (i.ch || i.pixel_id) && globalThis.localStorage.setItem(o, JSON.stringify(i));
                const l = JSON.parse(globalThis.localStorage.getItem(o) || "{}");
                Object.assign(this.initParams, l)
            } catch {}
        }), globalThis.setTimeout(() => {
            S.emit(eo)
        }, 4e3), S.emit("track_parseParams", globalThis.location ? .href || "")
    }
    addEvent(t, a) {
        S.on(t, o => {
            setTimeout(() => {
                try {
                    a(o)
                } catch {}
            }, 0)
        })
    }
}
const $ = new xd;

function Cd() {
    function e(o, r) {
        function i(l, s) {
            globalThis.jsBridge && globalThis.jsBridge.postMessage && globalThis.jsBridge.postMessage(l, s), globalThis.jsbridge && globalThis.jsbridge.postMessage && globalThis.jsbridge.postMessage(l, s), globalThis.ANDROID_JS_BRIDGE && globalThis.ANDROID_JS_BRIDGE.gree_page && globalThis.ANDROID_JS_BRIDGE.gree_page(l, s), globalThis.android && globalThis.android.bcMessage && globalThis.android.bcMessage(l, s ? JSON.stringify(s) : "")
        }
        i(o, r)
    }
    let t = 0;

    function a() {
        if (!globalThis.jsBridge && !globalThis.jsbridge && !globalThis.ANDROID_JS_BRIDGE && !globalThis.android) return;
        const r = [globalThis.jsBridge, globalThis.jsbridge, globalThis.ANDROID_JS_BRIDGE, globalThis.android].find(d => d && d.deviceinfo) ? .deviceinfo,
            i = Zn(),
            l = new Date;
        l.setDate(l.getDate() + 30);
        const s = l.toUTCString();
        if (r && St(r) && r.advertising_id && $t("advertising_id", r.advertising_id, i, s), r && St(r) && r.appsflyer_id && $t("appsflyer_id", r.appsflyer_id, i, s), r && St(r) && r.fbclid) {
            const d = `fb.1.${new Date().getTime()}.${r.fbclid}`;
            $t("_fbc", d, i, s), _n($.initParams.ch, $.initParams.pixel_id, d), me.trackEvent("get_deviceinfo_success", {
                retry: t,
                data: r
            })
        }(!r || !r.advertising_id || !r.appsflyer_id || !r.fbclid) && t < 10 && (t++, setTimeout(() => {
            a()
        }, 1500)), t >= 10 && _n($.initParams.ch, $.initParams.pixel_id), t <= 1 && me.trackEvent("get_deviceinfo", {
            retry: t,
            data: r
        })
    }
    $.addEvent(eo, () => e("af_content_view")), $.addEvent("track_regist_page", () => {
        e("af_registration_page"), a()
    }), $.addEvent("track_registration_start", () => {
        e("af_start_registration"), a()
    }), $.addEvent("track_third_register", ({
        account_type: o
    }) => {
        e("af_third_party_registration", {
            af_account_type: o
        })
    }), $.addEvent("track_third_login_success", ({
        account_type: o
    }) => {
        e("af_third_login_success", {
            af_account_type: o
        })
    }), $.addEvent(Jt, () => e("af_login")), $.addEvent(ct, () => e("af_complete_registration")), $.addEvent("track_registration_fail", () => e("af_fail_registration")), $.addEvent("track_deposit_page", () => e("af_deposit_page")), $.addEvent("track_deposit_initiation", () => e("af_start_purchase")), $.addEvent("track_deposit_cpt_initiation", () => e("af_start_cpt_purchase")), $.addEvent("track_registration_captcha_fail", () => e("af_captcha_fail")), $.addEvent(Kt, ({
        sales: o
    }) => {
        e("af_ftd_purchase", {
            af_revenue: o
        })
    }), $.addEvent(et, ({
        sales: o
    }) => {
        e("af_purchase", {
            af_revenue: o
        })
    }), $.addEvent("track_deposit_open_window", ({
        url: o
    }) => {
        c.initSearchParams.get("_mjb") == "2" && e("confirm", o)
    }), setTimeout(() => {
        a()
    }, 2e3)
}
Cd();

function Dd() {
    const e = "GTM-TR7QDQDP";
    $.addEvent("track_init", () => {
        window.dataLayer = window.dataLayer || [], window.dataLayer.push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js"
        }), C.loadScript("https://www.googletagmanager.com/gtm.js?id=" + e)
    }), $.addEvent(ct, async ({
        userId: t
    }) => {
        ne("RegistrationCompleted", {
            userId: t
        }), await At() && ne("RegistrationCompletedVerifyCode", {
            userId: t
        })
    }), $.addEvent(et, async ({
        sales: t,
        orderid: a
    }) => {
        ne("DepositCompletion", {
            value: t,
            orderId: a,
            sales: t
        }), await At() && ne("DepositCompletionVerifyCode", {
            value: t,
            orderId: a,
            sales: t
        })
    }), $.addEvent(Kt, async ({
        sales: t,
        orderid: a
    }) => {
        ne("FirstDepositCompletion", {
            value: t,
            orderId: a,
            sales: t
        }), await At() && ne("FirstDepositCompletionVerifyCode", {
            value: t,
            orderId: a,
            sales: t
        })
    }), $.addEvent("track_login_success", ({
        userId: t
    }) => ne("userLoggedIn", {
        userId: t
    })), $.addEvent("track_regist_page", () => ne("RegistrationStarted")), $.addEvent("track_registration_abandoned", () => ne("RegistrationAbandoned")), $.addEvent("track_deposit_initiation", () => ne("DepositInitiation")), $.addEvent("track_rakeback_unlock", t => ne("RakebackUnlock", {
        value: t
    })), $.addEvent("track_buy_crypto_amount", () => ne("BuyCryptoAmount")), $.addEvent("track_assistance_requested", () => ne("Assistance Requested"))
}
Dd();

function $d() {
    if (!window.matchMedia("(display-mode: standalone)").matches) return;
    let t = "PC";
    C.isAndroid() ? t = "Android" : C.isIos() && (t = "iOS");
    const a = localStorage.getItem("_pwa_first_open");
    $.addEvent("track_init", () => {
        a !== "1" ? (localStorage.setItem("_pwa_first_open", "1"), S.emit("sensorsTrack", {
            event: "pwa_first_open",
            platform: t
        })) : S.emit("sensorsTrack", {
            event: "pwa_reopen",
            platform: t
        })
    }), $.addEvent(Jt, ({
        userId: o
    }) => {
        S.emit("sensorsTrack", {
            event: "pwa_user_login",
            platform: t,
            uid: o
        })
    }), $.addEvent(ct, ({
        userId: o
    }) => {
        S.emit("sensorsTrack", {
            event: "pwa_user_register",
            platform: t,
            uid: o
        })
    }), $.addEvent("track_deposit_open_window", ({
        timestamp: o,
        extras: r
    }) => {
        S.emit("sensorsTrack", {
            event: "pay_channel_page_open",
            platform: t,
            timestamp: o,
            ...r
        })
    }), $.addEvent("track_deposit_window_closed", ({
        timestamp: o,
        duration: r,
        extras: i
    }) => {
        S.emit("sensorsTrack", {
            event: "pay_channel_page_close",
            platform: t,
            timestamp: o,
            duration: r,
            extras: i
        })
    })
}
$d();

function Pd() {
    let e = "PC";
    const t = new URLSearchParams(c.initSearchParams);

    function a() {
        return C.isIos() && c.isPWA ? "pwa-ios" : C.isAndroid() && c.isPWA ? "pwa-android" : c.isAPP ? "app" : C.isAndroid() ? "web-android" : C.isIos() ? "web-ios" : "PC"
    }
    e = a();

    function o(i = I.userId.toString()) {
        return {
            loginDomain: c.host,
            userId: i,
            platform: e,
            deviceId: t.get("deviceId") || "",
            launchId: t.get("launchId") || "",
            appId: t.get("appId") || "",
            code: I.currentInvitationCode || ""
        }
    }

    function r(i, l) {
        const d = `/pwa/${i==="SIGNUP"||i==="LOGIN"||i==="SIGNUP_CLICK"?"signup-login":"payment"}/report/${i}`,
            p = Object.keys(l).map(h => `${h}=${l[h]}`).join("&");
        try {
            F().get(`${d}?${p}`)
        } catch {}
    }
    $.addEvent(Jt, ({
        userId: i
    }) => {
        r("LOGIN", { ...o(i),
            accountType: "bc",
            result: "1"
        })
    }), $.addEvent("track_registration_start", ({
        sign_type: i
    }) => {
        r("SIGNUP_CLICK", { ...o(""),
            accountType: "bc",
            result: "0"
        })
    }), $.addEvent("track_registration_fail", ({
        sign_type: i,
        error: l
    }) => {
        let s = encodeURIComponent(JSON.stringify(l));
        s.length > 1e3 && (s = s.substring(0, 1e3)), r("SIGNUP", { ...o(""),
            accountType: "bc",
            result: "-1",
            reason: s
        })
    }), $.addEvent(ct, ({
        userId: i
    }) => {
        r("SIGNUP", { ...o(i),
            accountType: "bc",
            result: "1"
        })
    }), $.addEvent("track_third_login_success", ({
        userId: i,
        account_type: l
    }) => {
        r("SIGNUP", { ...o(i),
            accountType: l,
            result: "1"
        })
    }), $.addEvent("track_deposit_page", () => {
        r("ENTER_DEPOSIT", o())
    }), $.addEvent("track_deposit_cpt_initiation", ({
        currency: i,
        chain: l
    }) => {
        r("DEPOSIT_CRYPTO", { ...o(),
            currency: i,
            channel: l
        })
    }), $.addEvent("track_deposit_initiation", ({
        amount: i,
        currency: l,
        payment_method: s
    }) => {
        r("DEPOSIT_FIAT", { ...o(),
            currency: l,
            channel: s,
            amount: i
        })
    }), $.addEvent(et, ({
        sales: i,
        orderid: l
    }) => {
        r("DEPOSIT_SUCCESS", { ...o(),
            orderId: l
        })
    }), $.addEvent("track_deposit_open_window", ({
        timestamp: i,
        extras: l
    }) => {
        r("PAYMENT_WINDOW_OPEN", { ...o(),
            ...l,
            timestamp: i
        })
    }), $.addEvent("track_deposit_window_closed", ({
        timestamp: i,
        duration: l,
        extras: s
    }) => {
        r("PAYMENT_WINDOW_CLOSED", { ...o(),
            ...s,
            timestamp: i,
            duration: l
        })
    })
}
Pd();

function Le(e, t) {
    $.addEvent(e, () => S.emit("track_other_events", {
        e: t
    }))
}
Le("track_regist_page", "registerClick");
Le("track_login_success", "Login");
Le("track_regist_success", "Register");
Le("track_deposit_success", "Recharge");
Le("track_logout", "Logout");
Le("track_ftd_success", "firstrecharge");
Le("track_home_page", "View content");
Ed();
var Sd = v('<div class="flex gap-3 py-5">');

function Ad() {
    return (() => {
        var e = Sd();
        return g(e, n(q, {
            type: "brand",
            size: "m",
            onClick: () => {
                S.emit(ct, {
                    userId: "0"
                })
            },
            children: "regist"
        }), null), g(e, n(q, {
            type: "brand",
            size: "m",
            onClick: () => {
                S.emit(Kt, {
                    sales: "0",
                    userId: "0",
                    orderid: "0"
                })
            },
            children: "first deposit"
        }), null), g(e, n(q, {
            type: "brand",
            size: "m",
            onClick: () => {
                S.emit(et, {
                    sales: "0",
                    userId: "0",
                    orderid: "0"
                })
            },
            children: "deposit success"
        }), null), g(e, n(q, {
            type: "brand",
            size: "m",
            onClick: () => {
                console.log("deposit success start"), S.emit(et), console.log("deposit success end")
            },
            children: "error test"
        }), null), g(e, n(q, {
            type: "brand",
            size: "m",
            onClick: () => {
                S.emit("sensorsTrack", {
                    event: "third_register_click",
                    account_type: "test_111"
                })
            },
            children: "Sensorsdata"
        }), null), e
    })()
}
const Ld = x(() => f(() =>
        import ("./index-C8hVHCbv.js"), __vite__mapDeps([31, 2, 1, 32]))),
    Rd = {
        events: {
            "open-free-gamelist": async () => e => ht.push(() => n(Ld, {
                gameList: e
            }))
        },
        routes: () => M([{
            path: "/themes",
            component: x(() => f(() =>
                import ("./index-BtmcZSdd.js"), __vite__mapDeps([33, 2, 1]))),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/providers",
            component: x(() => f(() =>
                import ("./index-CQlH79qn.js"), __vite__mapDeps([34, 2, 1]))),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/provider/:provider",
            component: x(() => f(() =>
                import ("./index-CJ_GCYOv.js"), __vite__mapDeps([35, 2, 1]))),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/tagname/:tag",
            component: x(() => f(() =>
                import ("./index-B6WvapWw.js"), __vite__mapDeps([36, 2, 1]))),
            info: {
                dialog: c.mobile,
                keepAlive: !1
            }
        }, {
            path: "/bingo",
            component: x(() => f(() =>
                import ("./index-CMJi8fZF.js"), __vite__mapDeps([37, 2, 1]))),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/gamelist/:type",
            component: x(() => f(() => Promise.resolve().then(() => Ni), void 0)),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/favorite",
            component: x(() => f(() =>
                import ("./index-robzggii.js"), __vite__mapDeps([38, 2, 1, 39, 22]))),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/recent",
            component: x(() => f(() =>
                import ("./index-DbsiaU0D.js"), __vite__mapDeps([40, 2, 1, 39, 22]))),
            info: {
                dialog: c.mobile
            }
        }], {
            dialog: c.mobile
        })
    },
    Td = x(() => f(() =>
        import ("./ThrowAndHighRolles-CE5qi-lg.js"), __vite__mapDeps([20, 2, 1]))),
    Bd = x(() => f(() =>
        import ("./GameEntryWrap-C9dW8g06.js"), __vite__mapDeps([22, 2, 1])));

function Od() {
    const {
        isSpHost: e,
        isUsHost: t
    } = C.getHostType(c.host);
    return [n(Oe.TabItem, {
        tabIndex: "8",
        get title() {
            return _("High Roller")
        },
        class: "min-h-96",
        get children() {
            return n(Td, {
                type: "highRoller"
            })
        }
    }), n(E, {
        when: !(e || t),
        get children() {
            return n(Oe.TabItem, {
                tabIndex: "9",
                get title() {
                    return _("Wager Contest")
                },
                class: "min-h-96 bg-transparent",
                get children() {
                    return n(Kn, {})
                }
            })
        }
    })]
}
const Nd = x(() => f(() =>
        import ("./index-EkaR1O1e.js"), __vite__mapDeps([12, 2, 13, 1, 14, 15]))),
    Z = ee(lt),
    Vd = Z("LandingLayout"),
    Md = e => {
        const t = be(),
            a = X();
        return N(() => {
            /fukada/.test(t.pathname) || (I.login ? a("/", {
                replace: !0
            }) : Tt("theme", "dark"))
        }), n(Vd, {
            get footer() {
                return K(() => !!c.mobile)() ? n(he, {}) : n(Nd, {})
            },
            get children() {
                return e.children
            }
        })
    },
    Hd = {
        routes: () => [{
            component: Md,
            children: [{
                path: "/landing/india",
                component: Z("LandingIndia")
            }, {
                path: "/landing/japan",
                component: Z("LandingJapan")
            }, {
                path: "/landing/payment",
                component: Z("Payment")
            }, {
                path: "/landing/spin",
                component: Z("Luckyspin")
            }, {
                path: "/landing/sports",
                component: Z("Sports")
            }, {
                path: "/landing/sports-br",
                component: Z("BrazilSports")
            }, {
                path: "/landing/aff",
                component: Z("LandingAff")
            }, {
                path: "/landing/crypto-spin",
                component: Z("LandingCryptoSpin")
            }, {
                path: "/landing/sport",
                component: Z("Sport")
            }, {
                path: "/landing/esport",
                component: Z("Esport")
            }, {
                path: "/landing/sports-india",
                component: Z("LandingIndiaSports")
            }, {
                path: "/landing/casinoonline",
                component: Z("LandingCasinoOnLine")
            }, {
                path: "/landing/50tilt50",
                component: Z("Landing50tilt50")
            }, {
                path: "/landing/japanesecasino",
                component: Z("LandingJpcasino")
            }]
        }]
    },
    Ud = ee(lt),
    Gd = {
        routes: () => M([{
            path: "/sponsorship/:typeName",
            component: Ud("Sponsorship"),
            info: {
                dialog: c.mobile
            }
        }], {
            dialog: !0,
            keepAlive: !1
        })
    },
    Ke = ee(lt),
    Fd = {
        events: {
            "toast-self-gambling-limits": Ke("limitsTips")
        },
        routes: () => M([{
            component: Ke("ResponsibleLayout"),
            path: "/responsible/:responsibleId",
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/responsible",
            component: Ke("ResponsibleLayout"),
            info: {
                dialog: c.mobile
            }
        }, {
            path: "/exclusion/cooldown",
            component: Ke("Cooldown")
        }, {
            path: "/exclusion/setlimit",
            component: Ke("SetLimit")
        }], {
            dialog: !0
        })
    },
    zd = ee(Wt)("Trading"),
    jd = ee(Wt)("TradingLayout"),
    Wd = {
        routes: () => M([{
            component: c.mobile ? jd : void 0,
            children: [{
                path: ["/trading", "/trading/spread", "/trading/contract", "/trading/up-down"],
                component: zd
            }]
        }], {
            dialog: c.mobile,
            keepAlive: !1
        })
    },
    Kd = "/modules/wallet2/remoteEntry.js",
    to = () =>
    import (Kd),
    $e = ee(to),
    Te = {
        Layout: $e("BcTokenLayout"),
        Overview: $e("BCTokenOverview"),
        Swap: $e("BCTokenSwap"),
        Entry: $e("BCTokenEntry"),
        Lottery: $e("BCTokenLottery"),
        Vault: $e("BCTokenVault"),
        WinList: $e("BCTokenLotteryWinList")
    },
    A = ee(to),
    Jd = {
        events: {
            "install-deposit-bub": A("installDepositBub")
        },
        routes: qd,
        init: () => {
            S.emit("install-deposit-bub")
        }
    };

function qd() {
    const {
        isUsHost: e
    } = C.getHostType(c.host), t = C.disableChangeFiatFlag(), a = [{
        path: "/wallet/chat-history/:orderId/:ticketId",
        component: A("DialogChatSubmission"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/wallet/withdraw/confirm",
        component: A("DialogWithdrawConfirm")
    }, {
        path: "/wallet/bank",
        component: A("DialogBank")
    }, {
        path: "/wallet/bank-currency-config",
        component: A("DialogCurrencyConfig")
    }, {
        path: "/deposit",
        component: A("DialogChannelDeposit"),
        info: {
            dialog: c.mobile || {
                size: [30, 44]
            },
            guards: [() => e && "/purchase"]
        }
    }, {
        path: "/purchase",
        component: A("DialogChannelDeposit"),
        info: {
            dialog: c.mobile || {
                size: [40, 53]
            }
        }
    }, {
        path: "/rollover",
        component: A("DialogTurnover2"),
        info: {
            dialog: !0
        }
    }, {
        path: "/wagertasks",
        component: A("DialogWagerTasks")
    }, {
        path: "/pending-history",
        component: A("DialogPendingHistory"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/wallet/what-deposit",
        component: A("DialogWhatDeposit")
    }, {
        path: "/wallet/withdraw-detail",
        component: A("DialogTransactionWithDrawDetail"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/wallet/deposit-detail",
        component: A("DialogTransactionDepositDetail"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/wallet/rate",
        component: A("DialogRate")
    }, {
        path: "/wallet/draft",
        component: A("DialogDraft")
    }, {
        path: "/wallet/roll-detail",
        component: A("DialogRollDetail"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/wallet/game-list",
        component: A("DialogRollGameList")
    }, {
        path: "/wallet/intercept",
        component: A("DialogIntercept")
    }, {
        path: "/wallet/link-detail",
        component: A("DialogRollLinkDetail"),
        info: {
            keepAlive: !1
        }
    }, {
        path: "/wallet/buy-detail",
        component: A("DialogBuyDetail")
    }, {
        path: "/wallet/card",
        component: A("DialogCard")
    }, {
        path: "/wallet/card-verify",
        component: A("DialogCardVerify")
    }, {
        path: "/wallet/bank-verify",
        component: A("DialogBankVerify")
    }, {
        path: "/wallet/transfer-in",
        component: A("DialogVaultTransfer"),
        info: {
            dialog: c.mobile ? !0 : {
                size: [26, 19]
            }
        }
    }, {
        path: "/wallet/interest",
        component: A("DialogInterests")
    }, {
        path: "/bcd/rule",
        info: {
            guards: [() => "/wallet/about-bonuscoin"]
        }
    }, {
        path: "/wallet/about-bonuscoin",
        component: A("DialogAboutBCD")
    }, {
        path: "/wallet/about-ticketcoin",
        component: A("DialogAboutBCL")
    }, {
        path: "/wallet/about-bccoin",
        component: A("DialogAboutBC")
    }, {
        path: "/wallet/about-bonusfiat",
        component: A("DialogAboutBonusCoin")
    }, {
        path: "/manage-assets",
        component: A("DialogManageAssets")
    }, {
        path: "/wallet",
        component: A("WalletLayout"),
        info: {
            dialog: c.mobile
        },
        children: [{
            path: "/annual-report",
            component: A("Annual")
        }, {
            path: "/balance",
            component: A("Balance"),
            info: {
                guards: [() => (c.mobile || t) && "/deposit"]
            }
        }, {
            path: "/deposit",
            component: A("DialogDeposit"),
            info: {
                guards: [() => t && "/deposit"]
            }
        }, {
            path: "/withdraw",
            component: A("DialogWithdraw"),
            info: {
                guards: [() => t && "/deposit?type=withdraw"]
            }
        }, {
            path: "/buy",
            component: A("DialogBuyCrypto"),
            info: {
                guards: [() => t && "/deposit"]
            }
        }, {
            path: "/swap",
            component: A("DialogSwap"),
            info: {
                guards: [() => t && "/deposit"]
            }
        }, {
            path: "/vault",
            component: A("DialogVault"),
            info: {
                guards: [() => t && "/deposit"]
            }
        }, {
            path: "/transaction",
            component: A("DialogTransaction")
        }, {
            path: "/rollover",
            component: A("DialogTurnover")
        }, {
            path: "/bet-history",
            component: A("DialogBetHistory")
        }]
    }];
    return M([...a], {
        dialog: !0,
        guards: [ce]
    }).concat({
        component: Te.Layout,
        path: "/wallet/bc",
        info: {
            dialog: !1
        },
        children: [{
            path: "/",
            component: Te.Overview
        }, {
            path: "/swap",
            component: Te.Swap
        }, {
            path: "/lottery",
            component: Te.Lottery
        }, {
            path: "/vault",
            component: Te.Vault
        }]
    }).concat({
        component: Te.WinList,
        path: "/wallet/bc/lottery/win-list",
        info: {
            dialog: !0
        }
    })
}
const Lt = () => f(() =>
    import ("./index-D4hbk3KI.js"), __vite__mapDeps([28, 2, 1, 29, 30]));

function Yd() {
    const [e] = ke(), {
        isSkHost: t,
        isNgHost: a,
        isIdHost: o
    } = C.getHostType(c.host), r = X();
    ie(() => {
        e.open && !I.login ? setTimeout(() => {
            r(`/login/${e.open}`)
        }, 1e3) : c.initHashParams.includes("tgWebAppData") && setTimeout(() => {
            r("/login/signin")
        }, 1e3)
    }), nt(() => {
        if (!oa() || c.isDevHost) return;
        let i = !c.isDev && !I.showable;
        if (I.areaAlert && I.areaCode === "GB" ? (i = !1, Xe.add(() => new Promise(async l => {
                await Lt().then(s => s.showGBBlock()), l("")
            }))) : !i && I.areaAlert && Xe.add(() => new Promise(async l => {
                await Lt().then(s => s.showBlock()), l("")
            })), i) r("/block");
        else {
            const l = localStorage.getItem("isOlder18") === "older",
                s = t && (I.areaCode === "GB" || I.areaCode === "NG");
            (l ? !1 : a || o || s) && Xe.add(() => new Promise(async p => {
                await Lt().then(h => h.showAgePop()), p("")
            }))
        }
    })
}

function Xd() {
    ie(() => {
        const {
            isBrAuditHost: e,
            isJbHost: t
        } = C.getHostType(c.host);
        e && document.documentElement.classList.add("yellowtheme"), t && document.documentElement.classList.add("jbyellowtheme"), L.lang === "zh" && (Tt("lang", "zh-TW"), window.location.href = window.location.origin), L.lang === "tl" && (Tt("lang", "fil"), window.location.href = window.location.origin)
    })
}
const no = {
        title: "BC.GAME: Crypto Casino Games & Casino Slot Games - Crypto Gambling",
        keywords: "Crypto Casino Games, Bitcoin Crash Game, Bitcoin Gambling Games, Crypto Games, Bc Game, Bcgame, Crypto Gambling Games, Play Live Casino Online Free, Best Crypto Casino Games, Best Crypto Games, Online Crypto Casino Games, Online Blockchain Games, Online Casino Slot Games",
        description: "Best Crypto Casino.Biggest crypto crash game.Provably fair & Live dealer.10000 slot games.Unique bonus & free lucky spins.BTC,ETH,DOGE,TRX,XRP,UNI,defi tokens supported fast withdrawals and Profitable vault."
    },
    oo = {
        title: "BC.GAME: Casino Games & Slot Games - Gambling",
        keywords: "Casino Games, Crash Game, Gambling Games, Bc Game, Bcgame, Play Live Casino Online Free, Best Casino Games, Best Games, Online Casino Games, Online Casino Slot Games",
        description: "Best Casino.Biggest crash game.Provably fair & Live dealer.10000 slot games.Unique bonus & free lucky spins. supported fast withdrawals and Profitable vault."
    };

function Qd(e, t, a = c.langs) {
    return Object.keys(a).map(o => {
        const r = `https://${encodeURI(e)}${o==="en"?"":"/"+encodeURI(o)}${encodeURI(t)}`;
        return n(Je, {
            rel: "alternate",
            hreflang: o === "en" ? "x-default" : o === "fil" ? "tl" : o,
            href: r
        })
    })
}

function Zd(e, t = no) {
    let a = { ...t
    };
    const {
        isBrAuditHost: o,
        isBrHost: r,
        isNg2Host: i,
        isNgHost: l,
        isKenyaHost: s,
        isSpHost: d,
        isBzHost: p
    } = C.getHostType(e);
    return (o || r || i || l || s || c.host.includes("bcgame.ng")) && (a = Object.assign(a, oo)), (d || o || p) && (a.title = a.title.replace(/BC.GAME/g, c.host.toUpperCase()), a.keywords = a.keywords.replace(/BC.GAME/g, c.host.toUpperCase()), a.description = a.description.replace(/BC.GAME/g, c.host.toUpperCase())), a
}

function vn() {
    const e = location.pathname;
    return `https://${c.buildHost.toLocaleLowerCase()}${e.replace(/\/$/,"")}`
}

function eu() {
    const e = c.host,
        {
            isBrHost: t,
            isBzHost: a,
            isBrAuditHost: o,
            isSpHost: r
        } = C.getHostType(e),
        i = {
            ng: c.host === "bcbet.ng"
        },
        l = i.ng ? oo : Zd(e, no),
        s = vn(),
        d = {
            title: l.title,
            description: l.description,
            image: `https://${e}/share_image.jpg`,
            canonical: vn(),
            product: "product",
            twitterCard: "summary_large_image"
        },
        p = h => r ? `/favicon/87/${h}` : o ? `/favicon/bs/${h}` : a ? `/favicon/bz/${h}` : `/favicon/bc/${h}`;
    return [n(xo, {
        get children() {
            return l.title
        }
    }), n(de, {
        name: "keywords",
        get content() {
            return l.keywords
        }
    }), n(de, {
        name: "description",
        get content() {
            return l.description
        }
    }), n(Je, {
        rel: "canonical",
        href: s
    }), n(Je, {
        rel: "icon",
        get href() {
            return p("/favicon.ico")
        }
    }), n(Je, {
        rel: "icon",
        sizes: "32x32",
        get href() {
            return p("/favicon-32x32.png")
        }
    }), n(Je, {
        rel: "icon",
        sizes: "16x16",
        get href() {
            return p("/favicon-16x16.png")
        }
    }), n(de, {
        name: "google-site-verification",
        content: "X4Qt1WVSNQq-oYZqpSlLxjhLmMXto-Fvzg67xe076Fo"
    }), n(E, {
        get when() {
            return !i.ng
        },
        get children() {
            return [n(de, {
                property: "og:title",
                get content() {
                    return d.title
                }
            }), n(de, {
                property: "og:description",
                get content() {
                    return d.description
                }
            }), n(de, {
                property: "og:image",
                get content() {
                    return d.image
                }
            }), n(de, {
                property: "og:type",
                get content() {
                    return d.product
                }
            }), n(de, {
                property: "og:url",
                get content() {
                    return d.canonical
                }
            }), n(de, {
                name: "twitter:card",
                get content() {
                    return d.twitterCard
                }
            })]
        }
    }), K(() => Qd(e, window.location.pathname, c.langs))]
}

function tu(e = {}) {
    const {
        immediate: t = !1,
        onNeedRefresh: a,
        onOfflineReady: o,
        onRegistered: r,
        onRegisteredSW: i,
        onRegisterError: l
    } = e;
    let s, d, p;
    const h = async (u = !0) => {
        await d, p ? .()
    };
    async function m() {
        if ("serviceWorker" in navigator) {
            if (s = await f(async () => {
                    const {
                        Workbox: u
                    } = await
                    import ("./workbox-window.prod.es5-B9K5rw8f.js");
                    return {
                        Workbox: u
                    }
                }, []).then(({
                    Workbox: u
                }) => new u("/service-worker.js", {
                    scope: "/",
                    type: "classic"
                })).catch(u => {
                    l ? .(u)
                }), !s) return;
            p = () => {
                s ? .messageSkipWaiting()
            }; {
                let u = !1;
                const y = () => {
                    u = !0, s ? .addEventListener("controlling", w => {
                        w.isUpdate && window.location.reload()
                    }), a ? .()
                };
                s.addEventListener("installed", w => {
                    typeof w.isUpdate > "u" ? typeof w.isExternal < "u" && w.isExternal ? y() : !u && o ? .() : w.isUpdate || o ? .()
                }), s.addEventListener("waiting", y)
            }
            s.register({
                immediate: t
            }).then(u => {
                i ? i("/service-worker.js", u) : r ? .(u)
            }).catch(u => {
                l ? .(u)
            })
        }
    }
    return d = m(), h
}

function nu(e = {}) {
    const {
        immediate: t = !0,
        onNeedRefresh: a,
        onOfflineReady: o,
        onRegistered: r,
        onRegisteredSW: i,
        onRegisterError: l
    } = e, [s, d] = B(!1), [p, h] = B(!1), m = tu({
        immediate: t,
        onOfflineReady() {
            h(!0), o ? .()
        },
        onNeedRefresh() {
            d(!0), a ? .()
        },
        onRegistered: r,
        onRegisteredSW: i,
        onRegisterError: l
    });
    return {
        needRefresh: [s, d],
        offlineReady: [p, h],
        updateServiceWorker: m
    }
}

function ou() {
    if (window.is_webview) return null;
    const e = {
            Bad_Domain: "bad_domains"
        },
        t = {
            GSTATIC: () => "https://www.gstatic.com/generate_204",
            BING: () => "https://www.bing.com",
            BC: () => "/manifest.webmanifest",
            NEW: (p, h) => {
                let m = localStorage.getItem(e.Bad_Domain),
                    u = m ? m.split(",") : [],
                    y = new Set(u);
                return y.add(h), m = Array.from(y).join(","), localStorage.setItem(e.Bad_Domain, m), c.isDev ? `https://distributedmessagedistribution.dogcrash.game/favicon.js?d=${m}&u=${p}` : `https://distributedmessagedistribution.com/favicon.js?d=${m}&u=${p}`
            },
            USER: () => "/api/account/get/",
            STSTUS: {
                IS_CORS: !0,
                NO_CORS: !1
            }
        };

    function a() {
        return navigator.userAgent.indexOf("Macintosh") !== -1 || navigator.userAgent.indexOf("MacIntel") !== -1
    }
    async function o(p, h = !0) {
        if (h) try {
            return await fetch(p, {
                mode: "no-cors",
                cache: "no-cache"
            }), !0
        } catch {
            return !1
        } else try {
            const m = await F().get(p, {
                cache: !1,
                timeout: 6e3
            });
            return !0
        } catch {
            return !1
        }
    }
    async function r(p = 0, h, m = 1, u = "") {
        try {
            const y = await C.loadScript(t.NEW(p || 0, h), "domain_available");
            if (!y ? .data) return;
            const w = window.location.protocol,
                O = `${w}//${u}${y.data}${t.BC()}`;
            await o(O, t.STSTUS.IS_CORS) ? window.location.href = `${w}//${u}${y.data}` : m < 10 && await r(p, y.data, m + 1, u)
        } catch (y) {
            console.info("An error occurred:", y), m < 10 && await r(p, h, m + 1, u)
        }
    }

    function i() {
        return {
            userId: 0
        }
    }
    async function l() {
        if (!navigator.onLine || await o(t.BC()) || await o(t.BC(), t.STSTUS.NO_CORS) || !await o(t.GSTATIC()) || !await o(t.BING())) return;
        const {
            userId: y
        } = i(), O = new URL(window.location.href).hostname.split("."), H = O.length > 2 ? O.slice(0, -2).join(".") + "." : "";
        r(y, window.location.hostname, 1, H)
    }
    const {
        needRefresh: [s, d]
    } = nu({
        onRegisteredSW(p, h) {
            if (!h) return;
            const m = 1e3 * 60 * 10;
            try {
                const u = setInterval(async () => {
                    if (h.installing || !navigator || "connection" in navigator && !navigator.onLine) return;
                    (await fetch(p, {
                        cache: "no-store",
                        headers: {
                            cache: "no-store",
                            "cache-control": "no-cache"
                        }
                    })) ? .status === 200 && await h.update()
                }, m);
                if (C.isIos() || a()) {
                    const y = () => {
                        try {
                            h.update()
                        } catch (w) {
                            console.info("Error while updating Service Worker on visibility change:", w)
                        }
                    };
                    return document.addEventListener("visibilitychange", y), () => document.removeEventListener("visibilitychange", y)
                }
                return () => clearInterval(u)
            } catch (u) {
                console.info("Error in onRegistered handler:", u)
            }
        },
        onRegisterError(p) {
            console.info("Error in onRegisterError handler:", p)
        }
    });
    return N(() => {
        try {
            s() && console.info("New content available; please refresh.")
        } catch (p) {
            console.info("Error in createEffect for SW update:", p)
        }
    }), N(() => {
        setTimeout(() => {
            localStorage.removeItem(e.Bad_Domain), l()
        }, 1e3)
    }), c.isPWA || c.isAPP, null
}
const au = {
    routes: () => [{
        path: "/tools/force-spin",
        info: {
            guards: [() => (localStorage.setItem("before-user-login-type", "A"), localStorage.removeItem("user-new-spin-finished"), "/")]
        }
    }]
};

function ru() {
    const {
        isMxHost: e
    } = C.getHostType(c.host);
    if (e) return "es"
}
const iu = {
        routes: () => [{
            component: x(() => f(() =>
                import ("./guide-DgzpSgJZ.js"), __vite__mapDeps([41, 2, 1, 42])).then(e => ({
                default: e.AppDownloadLayout
            }))),
            path: "/app_download",
            children: [{
                path: "/ios",
                component: x(() => f(() =>
                    import ("./guide-DgzpSgJZ.js"), __vite__mapDeps([41, 2, 1, 42])).then(e => ({
                    default: e.PWAiOSGuide
                })))
            }, {
                path: "/android",
                component: x(() => f(() =>
                    import ("./guide-DgzpSgJZ.js"), __vite__mapDeps([41, 2, 1, 42])).then(e => ({
                    default: e.PWAAndroidGuide
                })))
            }]
        }]
    },
    su = Co(() => F().get("/facade/br/compliance/get/"));

function lu() {
    const {
        isBrAuditHost: e
    } = C.getHostType(c.host), t = be(), a = X(), [o, r] = B(!1);
    S.on("br-compliance-update", async () => {
        try {
            const i = await F().get("/facade/br/compliance/get/");
            i && r(bn(i))
        } catch {
            r(!1)
        }
    }), N(() => {
        e && I.login && Ne(async () => {
            try {
                const i = await su();
                i && (r(bn(i)), i.needComplianceModify && S.emit("brazil-cpf-update"))
            } catch {
                r(!1)
            }
        })
    }), N(() => {
        I.login && e && !t.pathname.includes("/settings/cpf/verify") && !t.pathname.includes("/settings/verification") && o() && setTimeout(() => {
            a("/settings/verification")
        }, 200)
    })
}

function bn(e) {
    return e ? e.reviewStatus !== "cpf_completed" && e.reviewStatus !== "final_completed" : !0
}
const cu = x(() => f(() =>
        import ("./index-CYuUsUXS.js").then(e => e.i), __vite__mapDeps([6, 2, 1, 7, 8]))),
    du = x(() => f(() =>
        import ("./index-PMN1ixIk.js"), __vite__mapDeps([3, 2, 1, 4, 5]))),
    uu = x(() => f(() =>
        import ("./notfound-B02vrRn1.js"), __vite__mapDeps([43, 2, 1]))),
    gu = x(() => f(() =>
        import ("./index-Bhonj8vc.js"), __vite__mapDeps([44, 2, 1, 14]))),
    mu = x(() => f(() =>
        import ("./Block-2rLZyxZ7.js"), __vite__mapDeps([29, 2, 1]))),
    pu = x(() => f(() =>
        import ("./Update-5wgwH0B4.js"), __vite__mapDeps([45, 2, 1, 30]))),
    fu = x(() => f(() =>
        import ("./Ad-CCFLkFOm.js"), __vite__mapDeps([46, 2, 1]))),
    hu = x(() => f(() =>
        import ("./installPrompt-BrbPWosX.js"), __vite__mapDeps([47, 2, 1, 42, 48]))),
    _u = x(() => f(() =>
        import ("./BrLogout-BiHJHPcW.js"), __vite__mapDeps([49, 2, 1]))),
    vu = x(() => f(() =>
        import ("./index-B7YqamC_.js"), __vite__mapDeps([10, 1, 2, 7]))),
    yn = () => f(() =>
        import ("./index-BL0OIdD0.js"), __vite__mapDeps([50, 1, 2]));

function bu() {
    Xd(), setTimeout(() => {
        me.init()
    }, 500), aa(c.ISHUMEI_KEY);
    const e = ru();
    return ie(() => {
        setTimeout(() => {
            f(() =>
                import ("./index-CueGkae-.js"), __vite__mapDeps([51, 2, 1, 48]))
        }, 3e3)
    }), n(Do, {
        get children() {
            return [n(eu, {}), n(ra, {
                globalComponents: {
                    GameRecommend: Bd,
                    GameTabs: Od,
                    SelectCurrency: vu
                },
                modules: ro,
                lang: e,
                get children() {
                    return [n(fu, {}), n(ou, {}), n(hu, {}), K(() => K(() => !!C.getHostType(c.host).isBrAuditHost)() && n(_u, {})), K(() => K(() => !!C.getHostType(c.host).isMxHost)() && (I.login || Ye("setting", {
                        enableLocaleCurrency: !0,
                        localeCurrencyName: "MXNFIAT"
                    }), null))]
                }
            })]
        }
    })
}

function ao(e) {
    return K(() => e.children)
}

function yu(e) {
    const {
        isSpreadHost: t
    } = C.getHostType(c.host);
    return n(E, {
        get when() {
            return t && !I.login
        },
        get fallback() {
            return n(Ji, {
                get children() {
                    return e.children
                }
            })
        },
        get children() {
            return n(ao, {
                get children() {
                    return e.children
                }
            })
        }
    })
}
const wu = {
        events: {
            live_support: () => c.host.includes("bcsports.game") ? new Promise(e => {
                qe.success("Email us: support@bcsports.com"), e(() => {})
            }) : yn().then(e => e.openLiveSupport),
            live_support_order: () => yn().then(e => e.sendOrder),
            get_device_info: async () => xa
        },
        routes: () => [{
            component: yu,
            children: [{
                path: "/",
                component: Ec
            }]
        }, {
            path: "/sports",
            component: x(() => f(() =>
                import ("./Sports.page-RDXfHRnG.js"), __vite__mapDeps([52, 2, 1])))
        }, {
            path: "/licenses",
            component: x(() => f(() =>
                import ("./index-IPJLlucQ.js"), __vite__mapDeps([53, 2, 1])))
        }, {
            path: "/bti",
            component: x(() => f(() =>
                import ("./index-DV2wY0fR.js"), __vite__mapDeps([54, 2, 1])))
        }, {
            path: "/racing",
            component: x(() => f(() =>
                import ("./index-CeLedalj.js"), __vite__mapDeps([55, 2, 1])))
        }, {
            path: "/menu",
            component: cu,
            info: {
                guards: [() => !c.mobile && "/"]
            }
        }, {
            path: "/explore",
            component: du,
            info: {
                guards: [() => !c.mobile && "/"]
            }
        }, {
            path: "/casino",
            component: x(() => f(() =>
                import ("./index-DdNgfJh_.js"), __vite__mapDeps([56, 2, 1, 32, 4, 5, 22, 36, 34, 33])))
        }, {
            path: "/bc_debug",
            component: Ad
        }, {
            path: "/license",
            component: x(() => f(() =>
                import ("./license-BuuOUZ30.js"), __vite__mapDeps([57, 2, 1, 13]))),
            info: {
                guards: [() => !c.mobile && "/"],
                dialog: c.mobile
            }
        }, {
            component: ao,
            children: [Tc, {
                path: "/telegram",
                component: gu,
                info: {
                    dialog: !1
                }
            }, {
                path: "/block",
                component: mu,
                info: {
                    dialog: !1
                }
            }, {
                path: "/update",
                component: pu,
                info: {
                    dialog: !1
                }
            }]
        }, ...M([{
            path: "/notification/*",
            component: x(() => f(() =>
                import ("./index-CFjg2HyU.js"), __vite__mapDeps([58, 2, 1, 59, 4])))
        }, {
            path: "*",
            component: uu,
            info: {
                dialog: c.mobile
            }
        }], {
            dialog: !0
        })],
        init: () => {
            const e = be();
            Yd(), lu(), N(t => {
                const a = e.pathname + e.search;
                return setTimeout(() => {
                    me.trackPageView({
                        url: a,
                        referrer: t
                    })
                }, 600), a
            }), ia().then(() => {
                S.emit("sensorsTrack", {
                    event: "_login_user",
                    userId: String(I.userId),
                    level: String(I.vipLevel)
                }), S.emit("track_parseParams", I.invitationUrl)
            }), Id()
        }
    },
    ro = [wu, Yi, jc, Uc, Xs, Gc, Jd, bd, yd, Rd, Gd, Fd, $c, Dc, _d, iu, Wd, Hd];
(c.isDev || c.isDevHost) && ro.push(au);
const ku = navigator.userAgent.indexOf("Windows");
ku !== -1 && document.documentElement.classList.add("win32");
const Iu = document.getElementById("root");
$o(() => (ie(() => document.getElementById("start-up") ? .remove()), n(bu, {})), Iu);
export {
    ju as $, j as A, gc as B, Qr as C, Ru as D, De as E, pi as F, jt as G, Mu as H, Tr as I, Cr as J, xr as K, zn as L, Cu as M, Er as N, yr as O, Du as P, wr as Q, zu as R, st as S, Yu as T, kr as U, Nu as V, $u as W, Vu as X, jr as Y, Ou as Z, Ps as _, en as a, he as a0, pl as a1, Vs as a2, ue as a3, wt as a4, Ft as a5, Ue as a6, Fu as a7, Ku as a8, qu as a9, Ju as aa, Xn as ab, Wu as ac, Hu as ad, Gu as b, Bu as c, Wr as d, Vn as e, Nn as f, _s as g, Uu as h, Zi as i, jn as j, Gn as k, Su as l, Lu as m, Au as n, Pu as o, me as p, Te as q, fe as r, Ii as s, _ as t, Tu as u, Ae as v, Gr as w, Is as x, Ts as y, sn as z
};