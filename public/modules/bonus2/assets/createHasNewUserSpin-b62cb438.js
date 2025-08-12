var u = (e, r, i) => new Promise((o, a) => {
    var n = t => {
            try {
                s(i.next(t))
            } catch (p) {
                a(p)
            }
        },
        c = t => {
            try {
                s(i.throw(t))
            } catch (p) {
                a(p)
            }
        },
        s = t => t.done ? o(t.value) : Promise.resolve(t.value).then(n, c);
    s((i = i.apply(e, r)).next())
});
import {
    ag as g,
    p as S,
    l as h,
    e as d,
    n as m,
    j as l
} from "./manifest-f1f40164.js";
import {
    c as b
} from "./web-c89f4fb8.js";
import {
    g as y,
    b as f,
    c as _
} from "./solid-js-871c99e1.js";
import {
    h as w
} from "./http-4df94233.js";
import {
    b as U
} from "./index-8a7d18d7.js";
import {
    b as A
} from "./enums-fd45c1cf.js";
import {
    f as N,
    F as v
} from "./feature-gating-c05395d6.js";
const D = () => u(void 0, null, function*() {
        const e = yield g(() =>
            import ("./new-user-spin-8f4883e7.js"), ["assets/new-user-spin-8f4883e7.js", "assets/web-c89f4fb8.js", "assets/manifest-f1f40164.js", "assets/router-6c6c27f7.js", "assets/solid-js-871c99e1.js", "assets/currency-format-5cd6ca42.js", "assets/_baseGetTag-c2e287b9.js", "assets/isArray-79a0be9c.js", "assets/index-6cbf2837.js", "assets/table-cd90ca95.js", "assets/i18n-827ab26d.js", "assets/index-c5ebc757.js", "assets/index-35f8991e.js", "assets/http-4df94233.js", "assets/baseService-2efdc30b.js", "assets/_MapCache-91cc8331.js", "assets/index-50756c04.js", "assets/center-loading-c3d55db0.js", "assets/sounds-a881e21e.js", "assets/_commonjsHelpers-08c562be.js", "assets/animate-number-af733b14.js", "assets/last-862de5a8.js", "assets/empty-placeholder-df93242e.js", "assets/index-d27f3208.js", "assets/reward-after-login-ec951fff.js", "assets/index-8a7d18d7.js", "assets/api-utils-b2769cf2.js", "assets/const-3e281bed.js", "assets/toast-bonus-receive-1029f494.js", "assets/cancel-bonus-6aaccc88.js", "assets/noop-cb277961.js", "assets/index-85cb0a21.js", "assets/countdown-9ad59544.js", "assets/helpers-44d70238.js", "assets/utils-38f210e8.js", "assets/vip-9182fb4b.js", "assets/enums-fd45c1cf.js", "assets/index-d5947389.js", "assets/_shuffleSelf-92183780.js", "assets/values-6a0cc286.js", "assets/_arrayMap-2bcec0e7.js", "assets/feature-gating-c05395d6.js", "assets/tools-47f326df.js"]);
        yield e.preloadAssets();
        const r = e.NewUserSpin;
        return S.push(() => b(r, {}))
    }),
    {
        isNgHost: C,
        isIdHost: E
    } = h.getHostType(d.host),
    R = d.initSearchParams.get("spin"),
    T = () => R ? "A" : E || C ? "B" : Math.random() > .5 ? "A" : "B",
    [F] = y(() => w.get("/account/device/isRegistered")),
    I = () => {
        const [e, r] = m(f(""), {
            name: "before-user-login-type",
            serialize: s => s,
            deserialize: s => s
        });
        e() || r(T());
        const [i, o] = m(f(!1), {
            name: "user-new-spin-finished"
        }), [a] = U.checkUserClaimedFreeMoney({
            enable: () => l.login
        }), n = _(() => N.isEnabled(v.NEW_USER) ? l.login ? a.loading ? !1 : a() === A.UnClaimed : F() ? !1 : e() === "A" : !1);
        return {
            hasSpin: n,
            autoSpin: () => n() && !i(),
            disabledAutoSpin: () => o(!0)
        }
    };
export {
    I as c, D as p
};