import {
    t as g
} from "./index-BSHcnsSF.js";
import {
    k as e,
    m as v,
    v as i,
    y as d,
    H as A,
    G as I,
    E as o,
    x as a,
    Y as u
} from "./vendor-DYV1gSPf.js";
import {
    u as f,
    e as r,
    b as x,
    J as C
} from "./common-Byjxyxqw.js";
const b = "/assets/d-99-NFJF9gM_.png",
    D = "/assets/d-98-DA42CT6W.png",
    F = "/assets/d-97-qal8av7f.png",
    w = "/assets/d-96-pZM7QuMr.png",
    _ = "/assets/d-95-CMQSGT4N.png",
    Q = "/assets/d-94-BjjhhHHh.png",
    H = "/assets/d-93-0pkDEp9Z.png",
    M = "/assets/d-92-DCx7K2V3.png",
    $ = "/assets/l-92-D9CXX7n9.png",
    k = "/assets/l-93-DgRQ3Lqa.png",
    T = "/assets/l-94-CFwrRsGr.png",
    j = "/assets/l-95-DCnS_xIT.png",
    q = "/assets/l-96-C1nvtIUl.png",
    y = "/assets/l-97-CpWNpbFQ.png",
    E = "/assets/l-98-DtiOQmq7.png",
    G = "/assets/l-99-Do9OFKQ2.png";
var L = i("<div>"),
    N = i("<div><img>");
const R = c => {
        const {
            isUsHost: m
        } = f.getHostType(r.host), l = v(() => x.darken ? [M, H, Q, _, w, F, D, b] : [$, k, T, j, q, y, E, G]);
        return e(u, {
            when: !m,
            get children() {
                var s = L();
                return d(s, e(A, {
                    get each() {
                        return l()
                    },
                    children: t => (() => {
                        var n = N(),
                            p = n.firstChild;
                        return I(p, "src", t), o(h => a(n, {
                            "mb-3 max-w-[50%] flex-shrink-0 flex-grow-0 basis-1/2 px-1.5": !0,
                            "mb-7 sm:max-w-[12.5%] sm:basis-[1/8]": c.isFooter
                        }, h)), n
                    })()
                })), o(t => a(s, {
                    "flex justify-center flex-wrap pb-1 pt-4": !0,
                    "pt-8 sm:max-w-300": c.isFooter,
                    "-mx-1.5": r.mobile
                }, t)), s
            }
        })
    },
    O = () => e(C, {
        get title() {
            return g("Achievement")
        },
        get children() {
            return e(R, {
                isFooter: !1
            })
        }
    });
export {
    O as AchievementPage, R as
    default
};