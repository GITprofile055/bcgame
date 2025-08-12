import {
    a7 as s,
    n as r,
    S as i,
    b as l,
    v as t,
    C as o,
    a5 as c,
    A as n
} from "./manifest-47857305.js";
import {
    t as g
} from "./i18n-db65699e.js";
var u = n('<div class="center ml-auto mr-4">'),
    f = n('<div class="flex justify-between items-center gap-2 absolute top-2 right-4 ">');

function h() {
    const a = s("SelectCurrency");
    return r(i, {
        get when() {
            return l.login
        },
        get fallback() {
            return e = f(), t(e, r(o, {
                type: "brand",
                class: "h-10 px-5 font-semibold",
                get children() {
                    return r(c, {
                        href: "/login/signin",
                        get children() {
                            return g("Sign In")
                        }
                    })
                }
            })), e;
            var e
        },
        get children() {
            var e = u();
            return t(e, r(a, {})), e
        }
    })
}
export {
    h as L
};