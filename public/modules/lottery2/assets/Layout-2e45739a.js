import {
    e as t,
    _ as o
} from "./manifest-5fcb2c8d.js";
import {
    o as l,
    i as s,
    c as e,
    S as i,
    a as m,
    P as c,
    m as u,
    t as p,
    l as _
} from "./solid-js-2e2908f8.js";
import {
    c as d
} from "./lottery-af48bec0.js";
var f = p("<div class=min-h-screen>");
const a = _(() => o(() =>
    import ("./BetSlip-bc1d1877.js"), ["assets/BetSlip-bc1d1877.js", "assets/solid-js-2e2908f8.js", "assets/manifest-5fcb2c8d.js", "assets/store-483fdae6.js", "assets/store-2ed2b91e.js", "assets/lottery-af48bec0.js", "assets/Detail.interface-808c1c29.js", "assets/_Uint8Array-7783c8b7.js", "assets/_MapCache-9c96b8d5.js", "assets/isObject-909534d5.js", "assets/BetSlipContent-2420e5bb.js", "assets/BetAmountSelect-bb0484eb.js", "assets/Lottery-2fa833fd.js", "assets/router-bf1daf6a.js", "assets/IndiaStateKaralaBall-9a331e1e.js", "assets/i18n-d0803583.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/LocalIcon-e7afd517.js", "assets/countries-a369bbd3.js", "assets/logo-c5334a6f.js", "assets/createSettle-cf894f15.js", "assets/toString-9093e562.js", "assets/indiaState-28de2f3d.js"]));

function S(n) {
    return l(() => {
        t.mobile || d()
    }), (() => {
        var r = f();
        return s(r, e(i, {
            get children() {
                return [e(m, {
                    get when() {
                        return t.mobile
                    },
                    get fallback() {
                        return e(c, {
                            get children() {
                                return e(a, {})
                            }
                        })
                    },
                    get children() {
                        return e(a, {})
                    }
                }), u(() => n.children)]
            }
        })), r
    })()
}
export {
    S as
    default
};