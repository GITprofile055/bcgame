import {
    c as e,
    S as l,
    s as m,
    m as r,
    i as p,
    g as c,
    h as g,
    a as u,
    t as a
} from "./solid-js-2e2908f8.js";
import {
    u as B,
    C as b,
    B as d,
    b as h,
    e as s,
    i as f,
    f as w
} from "./manifest-5fcb2c8d.js";
import {
    p as A
} from "./store-483fdae6.js";
import C from "./BetSlipContent-2420e5bb.js";
import "./store-2ed2b91e.js";
import "./lottery-af48bec0.js";
import "./Detail.interface-808c1c29.js";
import "./_Uint8Array-7783c8b7.js";
import "./_MapCache-9c96b8d5.js";
import "./isObject-909534d5.js";
import "./BetAmountSelect-bb0484eb.js";
import "./Lottery-2fa833fd.js";
import "./router-bf1daf6a.js";
import "./IndiaStateKaralaBall-9a331e1e.js";
import "./i18n-d0803583.js";
import "./apis-9bc5cda9.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./LocalIcon-e7afd517.js";
import "./countries-a369bbd3.js";
import "./logo-c5334a6f.js";
import "./createSettle-cf894f15.js";
import "./toString-9093e562.js";
import "./indiaState-28de2f3d.js";
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMAIN+AYBC/70BwkM+vUJ8woHCnQIcAAAMDSURBVHja7ZrbcuMgDEARRlwMOOb/f3Zn2u7QjcC4IJKZLee1dnSMQciiYrFYLBaLxWKxaGIPmToxWsFoeNBpCOnG4j9MGmUbev4c/z0GPnFg++dfYkF3CxyJB+x/AzzEXoHEhFoCS2AJLIElsASWAK+A1BX8SwQC1q+Hc7JAu74L0wUeje+I6QKtW+S7BcxsAXt9B/z/kzAFqF+P4TWJqMpvScVLoInxu4vwMVnhYd2uXypgdouCi57ogpOfht9QiPkCet/KuBx+poATL2S858YvAIIL/nogg9YdXn4WsMFZVgFsR4/aPK2OoPgEVCv8Zoo76AFMAhJa4WtswLMMpbLwHRSZKNMFUs3IhDIL4J4a7MguYPK4gr+hC9wCLseXKXEbtAUCid82YBUAEp/X4PZhDMpCoA8SwSObQH6YvfDH6k/sXAJ5AFT6iUCKQwJme+QcVJ8AWv3dl9QpSe5gTsVbK+PYkwwd52YEZJAsveYfSYOs2/FBs2MBR4aArSCRdJBaVxlkHAFVmv6tq2K3AF3EobY94MPmlpZ+WiSMZbmpNHFQflZjWDoENjjwYbJ9YGvny/C0OMwBhdaN7RSgI+GIAM3Ph+38vrlzJh/qrcwYUpVjUCDH0VfPhvGs7NN+WADy+r6e4LboIIcF6tfEizycmShgaEMb5FyB9hQH81KBJBU2Enbin4TkgxSuEqZkE/A0VaYv/PeW1d6zGdz5x5ST1kwbKaBoxgyMqZjul3DSJ1XcqXi/3Izs+ZzxFO9mlH8ZTTnJg9ImJRnLlasRowJ5R9f1LhaiqFQkYVggD2K8tctBV//ctCYBfQcHiiK6Iwvku4qY8tuVxXpz66gG8m0VbG0aks0Ij852J16/g6qnV0BaZ339XndrHaBMBP8VRDltRnoU563P81gveYaPkPbLIeBvUFCUv9Oi8fdbNBLFD4G4VXCit0nFD8g3xWdtVM438DPi9zer+VHX7foopgNb41RzPnDKRvj5qGCeouuI4rVYF/TnsZ0/nEWxWCwWF/wBB9p6KmoXPgAAAAAASUVORK5CYII=";
var v = a('<img class="w-8 h-8 slip-icon"alt=""loading=lazy>'),
    M = a('<div><label class="text-xs font-extrabold text-primary_brand">');

function O() {
    const i = B(),
        n = b(() => document.querySelector(".chat-notice"));
    return e(l, {
        get children() {
            return [e(d, {
                type: "brand",
                class: "fixed z-20 bottom-28 right-3 center w-14 h-14 !rounded-full -pt-st",
                get style() {
                    return {
                        "margin-right": n.width + "px",
                        bottom: `calc(${A.state.betSlipPositon} + var(--safe-bottom))`
                    }
                },
                onClick: () => {
                    if (!h.login) {
                        i("/login/signin");
                        return
                    }
                    if (s.mobile) i("/lottery/betslip");
                    else {
                        const o = document.body.classList.contains("lottery-fold");
                        f.emit("lottery-toggle", !o)
                    }
                },
                get children() {
                    return [(() => {
                        var t = v();
                        return m(t, "src", S), t
                    })(), r(() => r(() => A.state.Betlist.length + A.state.betBc.ticketNum > 0)() && (() => {
                        var t = M(),
                            o = t.firstChild;
                        return p(o, () => A.state.Betlist.length + A.state.betBc.ticketNum), c(() => g(t, w("absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 p-1 center bg-alw_white rounded-full", A.state.Betlist.length + A.state.betBc.ticketNum > 9 ? "min-w-8 min-h-6" : "min-w-6 min-h-6"))), t
                    })())]
                }
            }), e(u, {
                get when() {
                    return !s.mobile
                },
                get children() {
                    return e(C, {})
                }
            })]
        }
    })
}
export {
    O as
    default
};