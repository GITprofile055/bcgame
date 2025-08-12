var c = (t, s, e) => new Promise((a, n) => {
    var l = r => {
            try {
                o(e.next(r))
            } catch (i) {
                n(i)
            }
        },
        m = r => {
            try {
                o(e.throw(r))
            } catch (i) {
                n(i)
            }
        },
        o = r => r.done ? a(r.value) : Promise.resolve(r.value).then(l, m);
    o((e = e.apply(t, s)).next())
});
import {
    e as g,
    l as p
} from "./manifest-f1f40164.js";
const T = () => g.serverTime.getTime();

function u(t) {
    if (t) {
        if (t.scrollHeight > t.clientHeight) {
            t.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            return
        }
        u(t.parentElement)
    }
}

function Y(t, s = "YYYY-MM-DD") {
    if (t = typeof t == "number" ? new Date(t) : t, t.getTime() === new Date(0).getTime()) return "";
    const e = {
        MM: ("0" + (t.getMonth() + 1)).slice(-2),
        DD: ("0" + t.getDate()).slice(-2),
        YYYY: t.getFullYear().toString(),
        HH: ("0" + t.getHours()).slice(-2),
        mm: ("0" + t.getMinutes()).slice(-2),
        ss: ("0" + t.getSeconds()).slice(-2)
    };
    return s.replace(/MM|DD|YYYY|HH|mm|ss/g, a => e[a])
}
const D = t => {
        if (t < 1) return "1st";
        const s = ["1st", "2nd", "3rd"];
        return t > 3 ? `${t}th` : s[t - 1]
    },
    H = (t = !1) => {
        const s = g.initHashParams,
            e = s.startsWith("#") ? s.substring(1) : s,
            n = new URLSearchParams(e).has("tgWebAppData");
        return n && t && (window.location.hash = s), [n, s]
    };

function b() {
    return c(this, null, function*() {
        return yield p.loadScript("https://telegram.org/js/telegram-web-app.js", "Telegram")
    })
}
export {
    u as a, H as c, Y as f, T as g, b as l, D as s
};