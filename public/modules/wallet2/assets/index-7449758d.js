import {
    y as r,
    e,
    o
} from "./manifest-0e8055eb.js";
const i = {
        name: "br.com",
        routes: {
            transaction: !0,
            rollover: !0,
            betHistory: !0,
            annualReport: !0
        },
        type: "fiat"
    },
    l = {
        name: "fiat.com",
        routes: {
            transaction: !0,
            rollover: !0,
            betHistory: !0
        },
        type: "fiat"
    },
    c = {
        name: "main.com",
        routes: {
            balance: !0,
            deposit: !0,
            withdraw: !0,
            buy: !0,
            swap: !0,
            vault: !0,
            transaction: !0,
            rollover: !0,
            betHistory: !0
        },
        type: "normal"
    },
    m = {
        name: "us.com",
        type: "us",
        routes: {
            transaction: !0,
            rollover: !0,
            betHistory: !0
        },
        page: {
            transaction: {
                filterAssets: ["all", "GD", "SC"],
                filterBillType: ["All", "Game"],
                hideFiatIssues: !0
            }
        }
    },
    p = {
        name: "kes.com",
        routes: {
            transaction: !0,
            rollover: !0,
            betHistory: !0
        },
        type: "kes",
        defaultCurrency: "KESFIAT"
    },
    b = {
        name: "bz.com",
        type: "crypto",
        routes: {
            balance: !0,
            deposit: !0,
            withdraw: !0
        },
        page: {
            deposit: {
                kycRequried: !0
            }
        }
    },
    f = {
        name: "bcgame45.com",
        routes: {
            balance: !0,
            deposit: !0,
            withdraw: !0,
            buy: !0,
            swap: !0,
            vault: !0,
            transaction: !0,
            rollover: !0,
            betHistory: !0
        },
        type: "normal",
        page: {
            deposit: {
                fiatSpecialChannel: ["INRFIAT", "VNDFIAT"]
            }
        }
    },
    y = {
        name: "offlineAgent",
        routes: {
            balance: !0,
            transaction: !0,
            rollover: !0,
            betHistory: !0
        },
        type: "normal"
    },
    t = {
        br: i,
        us: m,
        kenya: p,
        fiat: l,
        main: c,
        bz: b,
        bcgame45: f,
        offlineAgent: y
    };

function d() {
    const {
        isBrAuditHost: a,
        isUsHost: n,
        isKenyaHost: s
    } = r.getHostType(e.host), u = r.disableChangeFiatFlag();
    return (e.isDev || e.isDevHost ? o.appChannelId === 52 : o.appChannelId === 29) ? t.offlineAgent : e.host === "bcgame45.com" ? t.bcgame45 : a ? t.br : n ? t.us : s ? t.kenya : e.isBZ ? t.bz : u ? t.fiat : t.main
}
export {
    d as g
};