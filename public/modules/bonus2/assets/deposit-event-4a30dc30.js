var n = (e, a, s) => new Promise((r, o) => {
    var _ = t => {
            try {
                i(s.next(t))
            } catch (p) {
                o(p)
            }
        },
        d = t => {
            try {
                i(s.throw(t))
            } catch (p) {
                o(p)
            }
        },
        i = t => t.done ? r(t.value) : Promise.resolve(t.value).then(_, d);
    i((s = s.apply(e, a)).next())
});
import {
    n as h,
    a6 as m,
    j as l,
    ag as u,
    p as c
} from "./manifest-f1f40164.js";
import {
    c as f
} from "./web-c89f4fb8.js";
import {
    b as g
} from "./solid-js-871c99e1.js";
import {
    D as E
} from "./index-e43a355a.js";
import "./http-4df94233.js";
const [P, v] = h(g(!1), {
    name: "home-popup-deposit-event"
}), A = () => {
    m(() => l.login).then(() => {
        Promise.all([u(() =>
            import ("./index-3e9ecfb4.js").then(e => e.i), ["assets/index-3e9ecfb4.js", "assets/web-c89f4fb8.js", "assets/solid-js-871c99e1.js", "assets/index-e43a355a.js", "assets/manifest-f1f40164.js", "assets/http-4df94233.js", "assets/index-0f07ee52.js", "assets/TermWithData-7307171f.js", "assets/i18n-827ab26d.js", "assets/index-c5ebc757.js", "assets/utils-38f210e8.js", "assets/popup-game-limits-ec0564dd.js", "assets/_commonjsHelpers-08c562be.js", "assets/_arrayMap-2bcec0e7.js", "assets/baseService-2efdc30b.js", "assets/_baseGetTag-c2e287b9.js", "assets/isArray-79a0be9c.js", "assets/_MapCache-91cc8331.js", "assets/_baseIsEqual-837613bc.js", "assets/groupBy-8da7f089.js", "assets/_baseIteratee-bc603d62.js", "assets/toString-1f7cb583.js", "assets/memoize-91f976fa.js", "assets/helpers-44d70238.js", "assets/vip-9182fb4b.js", "assets/index-8a7d18d7.js", "assets/enums-fd45c1cf.js"]), u(() =>
            import ("./widget-entry-f4a50812.js").then(e => e.w), ["assets/widget-entry-f4a50812.js", "assets/web-c89f4fb8.js", "assets/solid-js-871c99e1.js", "assets/index-3e9ecfb4.js", "assets/index-e43a355a.js", "assets/manifest-f1f40164.js", "assets/http-4df94233.js", "assets/index-0f07ee52.js", "assets/TermWithData-7307171f.js", "assets/i18n-827ab26d.js", "assets/index-c5ebc757.js", "assets/utils-38f210e8.js", "assets/popup-game-limits-ec0564dd.js", "assets/_commonjsHelpers-08c562be.js", "assets/_arrayMap-2bcec0e7.js", "assets/baseService-2efdc30b.js", "assets/_baseGetTag-c2e287b9.js", "assets/isArray-79a0be9c.js", "assets/_MapCache-91cc8331.js", "assets/_baseIsEqual-837613bc.js", "assets/groupBy-8da7f089.js", "assets/_baseIteratee-bc603d62.js", "assets/toString-1f7cb583.js", "assets/memoize-91f976fa.js", "assets/helpers-44d70238.js", "assets/vip-9182fb4b.js", "assets/index-8a7d18d7.js", "assets/enums-fd45c1cf.js", "assets/index-c8555da0.js", "assets/index-d27f3208.js", "assets/empty-placeholder-df93242e.js", "assets/debounce-9b1358db.js", "assets/toNumber-67386818.js", "assets/last-862de5a8.js", "assets/_basePropertyOf-20a61b2b.js", "assets/index-839cb11c.js", "assets/_baseIndexOf-fe3207b1.js", "assets/_baseFindIndex-928665d4.js", "assets/noop-cb277961.js", "assets/router-6c6c27f7.js", "assets/common-progress-bar-349cd753.js", "assets/countdown-9ad59544.js"])]).then(s => n(void 0, [s], function*([e, a]) {
            m(() => {
                var r, o;
                return !((o = (r = E.useDepositProgress()) == null ? void 0 : r[0]) != null && o.loading) && !P()
            }).then(() => {
                e.depositActivitySystem.hasWidget("home-popup") && c.push(() => f(a.default, {
                    target: "home-popup"
                }), {
                    onClose: () => {
                        v(!0)
                    }
                })
            })
        }))
    })
};
export {
    A as
    default
};