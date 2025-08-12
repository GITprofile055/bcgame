import {
    t,
    l as p
} from "./index-BSHcnsSF.js";
import {
    n as K,
    v as n,
    y as o,
    k as s,
    J as U,
    E as k,
    b as S,
    m as M,
    Y as _,
    G as y,
    d as R,
    H as L,
    B as T,
    s as z,
    z as E,
    F as O,
    _ as w,
    Z as D,
    Q
} from "./vendor-DYV1gSPf.js";
import {
    H as b,
    h as e,
    i as B,
    C as q
} from "./copyright-DxCg6S75.js";
import {
    b as f,
    B as N,
    F as Z,
    a9 as V,
    aa as I,
    T as H,
    h as J,
    e as h,
    a as x,
    am as W,
    u as G,
    W as $
} from "./common-Byjxyxqw.js";
import {
    t as Y
} from "./telegrams-y598HpE9.js";
import X from "./index-BHMdg_Va.js";
var e2 = n("<div class=min-w-24>"),
    t2 = n('<div class="flex w-full justify-between px-4 mx-auto mb-6 max-w-300 flex-wrap gap-x-10 gap-y-10"><div class="flex flex-col flex-shrink flex-grow basis-[34rem] gap-y-3"><div class="flex flex-col feedback-html flex-grow gap-y-3">'),
    l2 = n("<div class=feedback-html-details>"),
    i2 = n('<span class="font-sm font-semibold text-secondary">'),
    r2 = n('<div><p class="text-sm font-semibold text-secondary">'),
    s2 = n('<div class="flex flex-col"><span class="font-sm font-semibold text-secondary"><a class="ml-1 text-brand underline"href=mailto:security@bcgame.com>security@bcgame.com'),
    n2 = n('<div class="flex flex-col max-w-[500px] flex-shrink-0 flex-grow gap-y-3"><h3 class="text-lg font-semibold text-primary"></h3><p class="text-sm font-semibold text-secondary"></p><div class="flex flex-col"><span class="font-sm font-semibold text-secondary"><a class="ml-1 text-brand underline">');

function o2(l) {
    return {
        storage: () => J(S([]), {
            name: l
        })
    }
}
const a2 = () => {
        const [l] = K(() => f.lang, b.feedbackBlock.load, o2("footer-feedbacks/" + f.lang));
        return (() => {
            var C = t2(),
                r = C.firstChild,
                a = r.firstChild;
            return o(r, s(H, {
                get when() {
                    return b.feedbackBlock.meta.showMore
                },
                get children() {
                    var i = e2();
                    return o(i, s(N, {
                        class: "bg-layer5",
                        type: "second",
                        onClick: () => {
                            V.push(() => s(I, {
                                get title() {
                                    return t("Details")
                                },
                                get children() {
                                    var c = l2();
                                    return k(() => c.innerHTML = l()), c
                                }
                            }))
                        },
                        get children() {
                            return [U(() => t("Show more")), s(Z, {
                                name: "Arrow",
                                class: "rotate-180 text-secondary size-4"
                            })]
                        }
                    })), i
                }
            }), null), o(C, s(C2, {}), null), k(() => a.innerHTML = l()), C
        })()
    },
    c2 = {
        "bcsports.game": "support@bcsports.com",
        "bcbet.ng": "feedback@bcgame.ke",
        "bcgame.ke": "feedback@bcgame.ke",
        "bzjogos.com": "support@bzjogos.com",
        "cocoforyou.top": "support@bzjogos.com"
    },
    C2 = () => {
        const [l, C] = S(""), r = M(() => !c2[h.host]);
        return (() => {
            var a = n2(),
                i = a.firstChild,
                c = i.nextSibling,
                u = c.nextSibling,
                d = u.firstChild,
                g = d.firstChild;
            return o(i, () => t("Help us improve your experience")), o(c, () => t("Get rewarded for your valuable feedback!")), o(d, () => t("Email us:"), g), o(g, () => b.feedbackBlock.meta.feedbackEmail), o(u, s(_, {
                get when() {
                    return b.feedbackBlock.meta.phone
                },
                get children() {
                    var m = i2();
                    return o(m, () => t("Phone:"), null), o(m, () => b.feedbackBlock.meta.phone, null), m
                }
            }), null), o(a, s(_, {
                get when() {
                    return r()
                },
                get children() {
                    return [(() => {
                        var m = r2(),
                            v = m.firstChild;
                        return o(v, () => t("If you find any vulnerabilities or leaks, please contact us at security@bc.game (security-related issues only; non-related issues will be omitted).")), m
                    })(), (() => {
                        var m = s2(),
                            v = m.firstChild,
                            F = v.firstChild;
                        return o(v, () => t("Security email:"), F), m
                    })()]
                }
            }), null), k(() => y(g, "href", `mailto:${b.feedbackBlock.meta.feedbackEmail}`)), a
        })()
    };
var u2 = n('<p class="text-center font-semibold text-secondary">'),
    d2 = n('<div class=mt-4><p class="text-base font-semibold text-primary"></p><div class="mt-2 w-full rounded-lg border border-solid border-input p-3 transition-all bg-layer3 hover:border-brand"><a href=mailto:business@bc.game class="flex justify-between"target=_self><p>business@bc.game</p><p class="flex items-center gap-x-1">');
const m2 = () => s(I, {
    get title() {
        return t("Get In Touch")
    },
    class: "h-[30rem]",
    get children() {
        return [(() => {
            var l = u2();
            return o(l, () => t("Contact us for more information")), l
        })(), (() => {
            var l = d2(),
                C = l.firstChild,
                r = C.nextSibling,
                a = r.firstChild,
                i = a.firstChild,
                c = i.nextSibling;
            return o(C, () => t("Email us")), o(c, () => t("Send now"), null), o(c, s(Z, {
                name: "Share",
                class: "size-4"
            }), null), l
        })()]
    }
});
var g2 = n('<li class="cursor-pointer text-sm font-semibold text-secondary hover:text-brand">'),
    p2 = n('<span class="inline-flex items-center gap-x-1">'),
    b2 = n('<div><h4 class="mb-5 text-base font-extrabold text-primary">'),
    h2 = n("<ul>"),
    k2 = n('<div class="flex w-full flex-wrap justify-between gap-x-4 gap-y-4 px-4 max-w-300 py-6">'),
    f2 = n('<svg width=40 height=40 viewBox="0 0 40 41"><path d="M10.8499 19.1144L26.4308 11.7927C27.0205 11.5157 27.7102 11.7995 27.9706 12.4268C28.0635 12.6492 28.0921 12.8951 28.0541 13.1355L25.9631 26.3509C25.8346 27.1627 25.1117 27.7106 24.3485 27.5739C24.1307 27.5348 23.9246 27.4416 23.7471 27.3019L18.4777 23.1497C17.9591 22.7416 17.85 21.964 18.2342 21.4125C18.278 21.3491 18.3282 21.2901 18.3831 21.2367L23.6664 16.0802C23.7143 16.0336 23.7172 15.9553 23.6734 15.9044C23.6355 15.8609 23.5742 15.8516 23.5257 15.8833L15.5084 21.1646C15.217 21.3559 14.8614 21.4025 14.535 21.2907L10.8954 20.0416C10.6495 19.9572 10.5146 19.677 10.5941 19.4162C10.6349 19.282 10.7284 19.1714 10.8498 19.1143L10.8499 19.1144Z"fill=currentColor>'),
    H2 = n('<svg width=40 height=40 viewBox="0 0 40 41"><path d="M17.5482 27.9605C17.5428 27.4205 17.5404 26.9495 17.5404 26.5475L17.1848 26.6107C16.9581 26.6534 16.6721 26.6714 16.3268 26.6663C15.9816 26.6614 15.6234 26.6243 15.2524 26.5552C14.8813 26.4867 14.5361 26.328 14.2166 26.0791C13.8973 25.8304 13.6706 25.5048 13.5366 25.1027L13.382 24.7373C13.2789 24.494 13.1167 24.2238 12.8951 23.9276C12.6735 23.6311 12.4494 23.4301 12.2226 23.3242L12.1144 23.2446C12.0423 23.1917 11.9753 23.128 11.9135 23.0539C11.8517 22.9799 11.8054 22.9058 11.7744 22.8316C11.7435 22.7574 11.7691 22.6965 11.8517 22.6487C11.9343 22.6009 12.0835 22.5777 12.3 22.5777L12.6091 22.6251C12.8152 22.6676 13.0702 22.7943 13.3744 23.0062C13.6783 23.2178 13.9283 23.493 14.1241 23.8317C14.3612 24.2658 14.6469 24.5966 14.9821 24.8242C15.317 25.0519 15.6545 25.1655 15.9946 25.1655C16.3347 25.1655 16.6283 25.139 16.8758 25.0863C17.1229 25.0333 17.3548 24.9537 17.5714 24.848C17.6642 24.1384 17.9167 23.5933 18.3288 23.2123C17.7415 23.1489 17.2133 23.0535 16.7442 22.9265C16.2755 22.7993 15.7911 22.593 15.2912 22.3069C14.7912 22.0211 14.3764 21.6664 14.0467 21.2432C13.7169 20.8198 13.4463 20.2638 13.2353 19.5759C13.0241 18.8877 12.9184 18.0938 12.9184 17.1941C12.9184 15.913 13.3256 14.8228 14.1398 13.9229C13.7584 12.9597 13.7943 11.8801 14.2479 10.6839C14.5467 10.5884 14.99 10.6601 15.5773 10.8982C16.1648 11.1364 16.595 11.3404 16.8681 11.5096C17.1413 11.6788 17.3602 11.8221 17.5252 11.9383C18.4838 11.6632 19.4731 11.5256 20.4933 11.5256C21.5135 11.5256 22.503 11.6632 23.4617 11.9383L24.0491 11.5574C24.4508 11.3032 24.9251 11.0703 25.4711 10.8586C26.0173 10.647 26.435 10.5887 26.7237 10.6841C27.1873 11.8803 27.2287 12.9599 26.8471 13.9231C27.6613 14.823 28.0686 15.9134 28.0686 17.1943C28.0686 18.094 27.9626 18.8904 27.7517 19.5838C27.5406 20.2774 27.2675 20.8328 26.9327 21.2512C26.5976 21.6694 26.18 22.0214 25.6803 22.3071C25.1805 22.593 24.6959 22.7993 24.227 22.9264C23.758 23.0536 23.23 23.1491 22.6425 23.2126C23.1782 23.6888 23.4462 24.4404 23.4462 25.4672L23.4407 27.8291C23.4394 28.3699 23.0007 28.8076 22.4599 28.8076H18.3952C17.9276 28.8076 17.5527 28.4281 17.5482 27.9605Z"fill=currentColor>'),
    L2 = n('<svg width=40 height=40 viewBox="0 0 40 41"><path d="M20.9933 18.5975L26.2432 12.6265H24.9996L20.4392 17.81L16.7995 12.6265H12.6006L18.1057 20.4656L12.6006 26.7264H13.8442L18.657 21.2513L22.5016 26.7264H26.7005M14.4806 13.5665L16.2036 13.5441L24.9987 25.8539H23.0876"fill=currentColor></path><path d="M20.9933 18.5975L26.2432 12.6265H24.9996L20.4392 17.81L16.7995 12.6265H12.6006L18.1057 20.4656L12.6006 26.7264H13.8442L18.657 21.2513L22.5016 26.7264H26.7005L20.9933 18.5975ZM14.4806 13.5665L16.2036 13.5441L24.9987 25.8539H23.0876L14.4806 13.5665Z"stroke=currentColor stroke-width=0.5>'),
    v2 = n('<svg width=40 height=40 viewBox="0 0 40 41"><path d="M23.5753 13.1285H25.5776V9.74167C24.6081 9.64086 23.634 9.59109 22.6593 9.59256C19.7624 9.59256 17.7814 11.3605 17.7814 14.5983V17.3887H14.5117V21.1803H17.7814V30.8936H21.7008V21.1803H24.9599L25.4498 17.3887H21.7008V14.9711C21.7008 13.8528 21.999 13.1285 23.5753 13.1285Z"fill=currentColor>'),
    w2 = n('<svg width=40 height=40 viewBox="0 0 40 41"><path fill-rule=evenodd clip-rule=evenodd d="M27.7254 16.2348C28.1848 17.2998 29.1656 21.7981 29.3467 22.7546C29.3372 22.7989 29.3344 22.8438 29.3372 22.8887C29.5331 23.818 28.9344 24.2978 28.3288 24.783C28.2916 24.8128 28.2543 24.8427 28.2172 24.8727C26.8759 25.9433 24.9008 26.0114 24.5946 25.9433C24.5745 25.925 24.5538 25.9046 24.5348 25.8841C24.4728 25.8392 24.2952 25.6022 24.1363 25.3899C24.0462 25.2697 23.9621 25.1573 23.9083 25.0925C23.7597 24.9131 23.6881 24.803 24 24.7122C24.3119 24.6214 25.9141 23.6581 26.1953 23.2834C26.0733 23.1992 26.0013 23.2437 25.9373 23.2832C25.9268 23.2897 25.9165 23.296 25.9063 23.3017C24.8456 23.8812 23.701 24.2931 22.5128 24.5234C19.3043 25.145 15.9275 23.807 15.7481 23.7207C15.6807 23.6872 15.5711 23.6281 15.4459 23.5606C15.1572 23.4049 14.7856 23.2046 14.6578 23.171C14.712 23.3786 14.9696 23.594 15.1172 23.6726C15.3402 23.8934 16.5624 24.5732 16.8732 24.6961C17.0537 24.7686 17.0933 24.8621 16.9553 25.0077C16.8972 25.0695 16.8732 25.1036 16.8425 25.1473C16.8005 25.2069 16.746 25.2845 16.5747 25.475C16.2002 25.8912 15.8923 26.0423 15.3831 25.9659C13.9094 25.7456 12.634 25.1594 11.6521 24.0191C11.4945 23.8453 11.4151 23.6144 11.4319 23.3808C11.6046 19.6586 12.918 16.4784 13.5232 15.2312C13.6154 15.0413 13.7596 14.8803 13.939 14.7656C14.9987 14.0438 16.2181 13.5849 17.4946 13.4277C17.5118 13.4259 17.5291 13.4239 17.5464 13.4219C17.5958 13.4163 17.6458 13.4105 17.6958 13.4105C17.7135 13.41 17.7322 13.4082 17.7512 13.4063C17.8374 13.3978 17.9285 13.3888 17.9551 13.5041C17.98 13.6118 17.9002 13.6305 17.8213 13.649C17.7972 13.6547 17.7732 13.6603 17.7523 13.6685C17.1056 13.9264 15.4117 14.6251 15.3736 14.6533C14.5806 14.9755 14.5806 15.1094 14.5806 15.1094C14.5052 15.1936 14.4454 15.291 14.4035 15.3962C14.4146 15.3851 15.8096 14.8017 15.8096 14.8017C16.5881 14.5337 17.389 14.3339 18.2021 14.2038C19.126 14.067 20.0598 14.0166 20.9932 14.0538C22.444 14.0942 23.8731 14.4163 25.1982 15.0026C25.3709 15.1099 25.5804 15.142 25.7777 15.0906C25.4441 14.5372 23.9541 14.0579 23.3135 13.8518C23.1966 13.8142 23.108 13.7857 23.0599 13.7675C23.0291 13.7558 22.9926 13.7484 22.9557 13.741C22.8502 13.7197 22.7417 13.6978 22.7558 13.571C22.7765 13.3777 22.9516 13.3949 23.0948 13.409C23.1102 13.4106 23.1253 13.4121 23.1398 13.4132C23.9105 13.4863 24.6661 13.6762 25.3792 13.9751C25.7173 14.1235 26.0471 14.289 26.3679 14.4711C27.1391 14.8724 27.4269 15.5323 27.7254 16.2348ZM16.0809 19.6932C16.0809 18.7786 16.8246 18.0369 17.7424 18.0369C18.6602 18.0369 19.4045 18.7786 19.4045 19.6932C19.4045 20.6077 18.6601 21.3488 17.7424 21.3488C16.8246 21.3488 16.0809 20.6077 16.0809 19.6932ZM23.0598 21.3488C22.142 21.3488 21.3983 20.6077 21.3983 19.6932C21.3983 18.7786 22.142 18.0369 23.0598 18.0369C23.9775 18.0369 24.7219 18.7786 24.7219 19.6932C24.7219 20.6077 23.9775 21.3488 23.0598 21.3488Z"fill=currentColor>'),
    y2 = n('<svg width=40 height=40 viewBox="0 0 40 41"><path fill-rule=evenodd clip-rule=evenodd d="M24.3749 20.8146C25.0325 21.6318 25.3217 22.8086 24.9806 23.9688C24.4845 25.8202 22.6982 26.9597 20.9778 26.4988L20.4702 26.3627L19.7652 26.1739L19.0554 28.8229C19.0248 28.9369 18.8738 29.0491 18.7328 29.0113L17.8303 28.7695C17.6893 28.7317 17.5865 28.5515 17.617 28.4375L18.3269 25.7884L16.8886 25.4031L16.1788 28.0521C16.1483 28.1661 15.9691 28.2708 15.8281 28.233L14.9256 27.9912C14.8128 27.9609 14.7099 27.7807 14.7405 27.6667L15.4503 25.0177L12.6301 24.262C12.4328 24.2091 12.3658 24.0081 12.4321 23.8732L12.8531 22.9784C12.9118 22.872 13.0475 22.8168 13.1681 22.8185C14.0651 22.9671 14.5844 22.4957 14.7905 21.7267L16.3018 16.0866C16.5383 15.2037 16.1781 14.4049 15.1859 14.0473C15.0525 13.9811 14.9702 13.8369 15.0083 13.6944L15.2526 12.7829C15.2907 12.6404 15.4699 12.5358 15.6109 12.5736L18.5721 13.367L19.2819 10.718C19.3124 10.604 19.4916 10.4993 19.6326 10.5371L20.5067 10.7713C20.6477 10.8091 20.7582 10.9609 20.72 11.1033L20.0102 13.7524L21.4484 14.1377L22.1582 11.4887C22.1888 11.3747 22.3679 11.27 22.5089 11.3078L23.4114 11.5496C23.5524 11.5874 23.6347 11.7317 23.5966 11.8741L22.8868 14.5231L23.1688 14.5987L23.3944 14.6592C25.0864 15.1125 26.0921 17.0001 25.5807 18.9087C25.3746 19.6778 24.9505 20.3579 24.3748 20.8143L24.3749 20.8146ZM19.4221 15.9462L18.6205 18.9376L19.4103 19.1492L20.8204 19.527C21.6384 19.7462 22.4985 19.2438 22.7199 18.4177C22.9336 17.6199 22.4399 16.7548 21.622 16.5356L20.2118 16.1578L19.4221 15.9462ZM22.2785 23C22.0571 23.8261 21.2046 24.3001 20.3867 24.0809L18.6098 23.6048L17.4535 23.295L18.2551 20.3036L19.4114 20.6134L21.1882 21.0895C22.0062 21.3087 22.4999 22.1738 22.2785 23Z"fill=currentColor>'),
    $2 = n('<svg width=20 height=20 viewBox="0 0 32 32"class=fill-current><path d="M16.0003 11.7965C13.6803 11.7965 11.7929 13.6823 11.7929 16.0003C11.7929 18.3183 13.6803 20.2042 16.0003 20.2042C18.3203 20.2042 20.2077 18.3183 20.2077 16.0003C20.2077 13.6823 18.3203 11.7965 16.0003 11.7965Z"></path><path fill-rule=evenodd clip-rule=evenodd d="M5.06201 21.044C5.06201 24.289 7.70481 26.9286 10.9517 26.9286H21.0483C24.2953 26.9286 26.9381 24.289 26.9381 21.044V10.956C26.9381 7.71099 24.2953 5.07129 21.0483 5.07129H10.9517C7.70481 5.07129 5.06201 7.71099 5.06201 10.956V21.044ZM22.3109 8.4344C23.0076 8.4344 23.5731 8.99856 23.5731 9.69556C23.5731 10.3926 23.0076 10.9567 22.3109 10.9567C21.6141 10.9567 21.0486 10.3926 21.0486 9.69556C21.0486 8.99856 21.6141 8.4344 22.3109 8.4344ZM16.0002 21.8847C12.7533 21.8847 10.1105 19.245 10.1105 16C10.1105 12.7551 12.7533 10.1154 16.0002 10.1154C19.2471 10.1154 21.8899 12.7551 21.8899 16C21.8899 19.245 19.2471 21.8847 16.0002 21.8847Z">'),
    x2 = n('<svg class=size-6 viewBox="0 0 32 32"><path d="M17.6491 23.976C17.9431 23.976 18.2174 24.126 18.376 24.3728C18.736 24.9325 19.0085 25.3217 19.1954 25.5385C19.3823 25.7554 19.5597 25.9423 19.7191 26.1034L19.9428 26.3263C20.2548 26.634 20.4563 26.8302 20.4563 26.988C20.4563 27.63 19.3771 27.9677 17.218 28.0002C17.0543 28.0002 16.9257 27.8717 16.9257 27.7122V24.264C16.9257 24.1046 17.0543 23.976 17.2137 23.976H17.6491ZM14.7863 23.976C14.9457 23.976 15.0743 24.1046 15.0743 24.264V27.7122C15.0743 27.8717 14.9457 28.0002 14.7863 28.0002H14.782C12.6229 27.9677 11.5437 27.6308 11.5437 26.988C11.5437 26.8302 11.7443 26.6348 12.0572 26.3263L12.2809 26.1034C12.4395 25.9423 12.6169 25.7563 12.8046 25.5385C12.9923 25.3208 13.2649 24.9325 13.624 24.3728C13.7826 24.1251 14.0569 23.976 14.3509 23.976H14.7863ZM26.8702 21.9369C26.5616 22.8831 24.5731 25.8625 22.5682 25.7203C20.5634 25.578 19.7191 23.9811 20.1408 23.4711C20.5625 22.9611 22.7671 23.3348 24.6802 22.1186C26.5933 20.9023 27.1796 20.9897 26.8711 21.936L26.8702 21.9369ZM5.1298 21.9369C4.82123 20.9906 5.40751 20.904 7.32064 22.1194C9.23377 23.3348 11.4383 22.9611 11.86 23.472C12.2817 23.982 11.4383 25.5797 9.43262 25.7211C7.42692 25.8625 5.43922 22.884 5.13065 21.9377L5.1298 21.9369ZM17.5831 4.00642L17.9723 4.06727C22.3188 4.7847 24.6614 6.4244 25.0008 8.98724C25.5494 13.1298 21.3288 15.9489 19.8751 17.7137C18.4214 19.4786 18.1968 22.5257 18.1248 22.5951C18.0528 22.6646 17.014 22.7066 16.9257 22.5951C16.9 22.5626 16.8854 21.3489 16.882 18.954V16.7023C16.8846 13.7606 16.8983 9.71752 16.9223 4.57384C16.9223 4.54641 16.9249 4.51898 16.9283 4.49156C16.9754 4.17699 17.2686 3.95927 17.5831 4.00642ZM15.0709 4.49241C15.0752 4.51984 15.0769 4.54727 15.0769 4.5747C15.1009 9.71923 15.1146 13.7615 15.1171 16.7032V18.9549C15.1137 21.3497 15.0991 22.5634 15.0734 22.596C14.9852 22.7074 13.9472 22.6654 13.8743 22.596C13.8014 22.5266 13.5777 19.4794 12.124 17.7146C10.6703 15.9498 6.44893 13.1306 6.99835 8.98809C7.33778 6.42526 9.68119 4.7847 14.0269 4.06813L14.416 4.00727C14.7306 3.96013 15.0237 4.17784 15.07 4.49241H15.0709ZM27.4779 11.2295C27.4779 11.2852 29.1322 17.3409 26.5513 18.978C25.1276 19.8814 23.7262 20.064 22.4208 20.8054C21.76 21.1817 20.9877 21.8297 20.6585 21.9994C20.3294 22.1691 19.7577 22.1966 19.7448 21.9994C19.7311 21.8023 19.7311 20.2243 20.9885 18.5657C22.246 16.9072 23.3302 16.8849 25.0505 14.6006C26.7716 12.3164 26.6516 11.2852 26.6516 11.2295C26.6516 11.1738 27.4779 11.1738 27.4779 11.2295ZM4.52209 11.2295C4.52209 11.1738 5.34837 11.1738 5.34837 11.2295C5.34837 11.2852 5.22922 12.3172 6.9495 14.6006C8.67063 16.8849 9.7549 16.9072 11.0115 18.5657C12.268 20.2243 12.268 21.8023 12.2552 21.9994C12.2415 22.1966 11.6706 22.1691 11.3415 21.9994C11.0123 21.8297 10.24 21.1809 9.57919 20.8054C8.27463 20.064 6.87321 19.8814 5.44865 18.978C2.86781 17.3417 4.52209 11.2861 4.52209 11.2295Z"fill=currentColor>'),
    _2 = n('<svg><path d="M26.2821 6.21734C26.2278 6.96315 25.7924 9.57499 25.3569 12.399L25 14.5C24.5 14.5 23.9444 14.5 23.5 14.5C20.3307 14.5 18.1312 16.5182 17.5 19.5C16.5123 18.8442 15.3242 17.997 14.7414 17.514C14.3603 17.1947 13.9248 16.5545 14.7957 15.8087C16.7555 14.0499 19.0957 11.8653 20.5106 10.4793C21.1642 9.83997 21.8169 8.3476 19.0957 10.16L11.4217 15.2229C11.4217 15.2229 10.5508 15.7559 8.91776 15.2765C8.79197 15.2393 8.66469 15.2021 8.53741 15.1634L7.9613 14.9877C6.623 14.5746 5.37998 14.1571 5.37998 14.1571C5.37998 14.1571 4.07369 13.3577 6.30518 12.5054H6.30666L18.9885 7.38965C20.2404 6.85671 24.4861 5.15146 24.4861 5.15146L24.4928 5.14923L24.5412 5.13285C24.8568 5.02865 26.4295 4.58726 26.2829 6.21808L26.2821 6.21734Z"></svg>', !1, !0, !1),
    B2 = n('<svg><path d="M23.6178 22.6315C23.3948 22.9115 23.1493 23.194 22.9028 23.4536C22.8101 23.5512 22.634 23.7536 22.5344 23.8246C22.5248 23.8315 22.5162 23.8399 22.504 23.8421L22.4781 23.8333C22.1592 23.5235 21.8527 23.1995 21.5677 22.858C20.3364 21.3825 18.8917 18.9411 20.264 17.1158C21.4055 15.5974 23.6994 15.6353 24.7897 17.1891C26.0151 18.9355 24.7593 21.1979 23.6179 22.6315H23.6178ZM23.7609 19.9609C24.5429 19.1175 24.2915 17.7512 23.261 17.2485C21.9797 16.6234 20.5404 17.7326 20.812 19.1278C21.0792 20.5009 22.8061 20.9908 23.761 19.9609H23.7609Z"fill=#B3BEC1></svg>', !1, !0, !1),
    M2 = n('<svg><path d="M21.4856 23.2445C21.1786 23.2914 20.8539 23.3689 20.575 23.5084C20.4634 23.5641 20.2107 23.7132 20.2004 23.85C20.1916 23.9663 20.4031 24.1129 20.4932 24.1647C21.2546 24.6017 22.7189 24.6207 23.566 24.4698C23.8751 24.4147 24.5908 24.2306 24.7607 23.9535C24.8052 23.8809 24.8136 23.8503 24.7706 23.773C24.6526 23.5611 24.1584 23.3881 23.9313 23.3266C23.8099 23.2938 23.6618 23.2809 23.5477 23.2462C23.5354 23.2425 23.5236 23.2428 23.5158 23.2301L23.8407 22.8501C24.1414 22.9223 24.4463 23.0076 24.7172 23.1593C25.4895 23.5919 25.3642 24.2421 24.6209 24.6065C23.6486 25.0831 21.9779 25.0938 20.9465 24.8136C20.4616 24.6819 19.5724 24.3222 19.7938 23.6649C19.957 23.1808 20.7142 22.9536 21.1605 22.8501L21.4856 23.2445V23.2445Z"></svg>', !1, !0, !1),
    Z2 = n('<svg><path d="M18.1236 14.3799L26.2298 5.16797H24.3096L17.268 13.1649L11.6481 5.16797H5.16455L13.6648 17.2619L5.16455 26.9208H7.08479L14.5161 18.474L20.4524 26.9208H26.936M8.0674 6.61816L10.7279 6.58362L24.3081 25.5747H21.3574"></svg>', !1, !0, !1),
    A2 = n('<svg><path d="M18.1236 14.3799L26.2298 5.16797H24.3096L17.268 13.1649L11.6481 5.16797H5.16455L13.6648 17.2619L5.16455 26.9208H7.08479L14.5161 18.474L20.4524 26.9208H26.936L18.1236 14.3799ZM8.0674 6.61816L10.7279 6.58362L24.3081 25.5747H21.3574L8.0674 6.61816Z"stroke-width=0.5></svg>', !1, !0, !1),
    j2 = n('<svg><path d="M16.0003 11.7965C13.6803 11.7965 11.7929 13.6823 11.7929 16.0003C11.7929 18.3183 13.6803 20.2042 16.0003 20.2042C18.3203 20.2042 20.2077 18.3183 20.2077 16.0003C20.2077 13.6823 18.3203 11.7965 16.0003 11.7965Z"></svg>', !1, !0, !1),
    S2 = n('<svg><path fill-rule=evenodd clip-rule=evenodd d="M5.06201 21.044C5.06201 24.289 7.70481 26.9286 10.9517 26.9286H21.0483C24.2953 26.9286 26.9381 24.289 26.9381 21.044V10.956C26.9381 7.71099 24.2953 5.07129 21.0483 5.07129H10.9517C7.70481 5.07129 5.06201 7.71099 5.06201 10.956V21.044ZM22.3109 8.4344C23.0076 8.4344 23.5731 8.99856 23.5731 9.69556C23.5731 10.3926 23.0076 10.9567 22.3109 10.9567C21.6141 10.9567 21.0486 10.3926 21.0486 9.69556C21.0486 8.99856 21.6141 8.4344 22.3109 8.4344ZM16.0002 21.8847C12.7533 21.8847 10.1105 19.245 10.1105 16C10.1105 12.7551 12.7533 10.1154 16.0002 10.1154C19.2471 10.1154 21.8899 12.7551 21.8899 16C21.8899 19.245 19.2471 21.8847 16.0002 21.8847Z"></svg>', !1, !0, !1),
    T2 = n('<svg><path d="M20.9421 17.2872L21.6164 12.9314H17.3977V10.1061C17.3977 8.91415 17.9859 7.75161 19.8755 7.75161H21.7947V4.04333C21.7947 4.04333 20.0537 3.74902 18.39 3.74902C14.9141 3.74902 12.6442 5.83564 12.6442 9.61164V12.9314H8.78198V17.2872H12.6442V27.8175C13.4196 27.9382 14.2129 28 15.021 28C15.8291 28 16.6223 27.9382 17.3977 27.8175V17.2872H20.9421Z"></svg>', !1, !0, !1),
    N2 = n('<div class=relative><span class="absolute text-lg -right-1 -top-3"></span><svg viewBox="0 0 32 32"fill=currentColor>'),
    V2 = n('<svg class=size-10 viewBox="0 0 40 40"><path fill-rule=evenodd clip-rule=evenodd d="M8.85251 18.5131L24.5273 11.1473C25.1206 10.8686 25.8144 11.1542 26.0764 11.7853C26.1698 12.009 26.1986 12.2564 26.1604 12.4982L25.312 17.8601C25.1304 17.9106 24.6854 18.0368 24.6854 18.0368C23.8012 18.2663 22.98 18.6949 22.2853 19.291C21.5377 19.9325 20.9595 20.7481 20.6017 21.6659L20.4954 21.9384L20.3991 22.1855L20.2858 22.6886C20.1185 23.5262 20.1351 24.3902 20.3345 25.2205L20.4566 25.6698L16.5263 22.5728C16.0046 22.1623 15.8948 21.3799 16.2813 20.8251C16.3254 20.7613 16.3759 20.702 16.4311 20.6482L21.7463 15.4607C21.7945 15.4138 21.7974 15.3351 21.7534 15.2838C21.7152 15.2401 21.6535 15.2307 21.6048 15.2626L13.5391 20.5757C13.246 20.7682 12.8882 20.815 12.5599 20.7026L8.8983 19.446C8.65097 19.361 8.51528 19.0792 8.59519 18.8167C8.63631 18.6818 8.73031 18.5706 8.85249 18.5131L8.85251 18.5131ZM24.6667 21.9383H27.7371C27.4439 20.754 26.9627 19.6244 26.3118 18.5925H26.0042L26.0229 18.6187C25.2703 19.5928 24.7564 20.7298 24.5226 21.9383H24.5227C24.5227 21.9384 24.5227 21.9384 24.5227 21.9384H24.6667L24.6667 21.9383ZM23.9038 25.9707C23.9198 26.0333 23.9362 26.0959 23.9532 26.1582C23.9532 26.1583 23.9531 26.1584 23.9531 26.1584C24.2212 27.1431 24.6169 28.0888 25.1302 28.9714C24.3114 28.8057 23.5439 28.447 22.8915 27.9251C22.2391 27.4032 21.7207 26.7331 21.3792 25.9706H23.9036C23.9036 25.9707 23.9037 25.9707 23.9037 25.9707H23.9038ZM23.661 24.4703C23.682 24.7212 23.7129 24.9715 23.7538 25.2205H21.1093C21.1093 25.2205 21.1093 25.2205 21.1093 25.2204H21.1092C20.8798 24.3943 20.8605 23.524 21.0529 22.6885H23.6786C23.6786 22.6886 23.6786 22.6886 23.6786 22.6886H23.6787C23.6529 22.9381 23.6368 23.1884 23.6307 23.4388C23.6222 23.7829 23.6323 24.1272 23.661 24.4703ZM23.7913 21.9384C23.8 21.8929 23.8091 21.8475 23.8186 21.8021C23.9728 21.0609 24.2147 20.3418 24.5386 19.6598C24.6915 19.3378 24.8627 19.024 25.0516 18.72L25.0514 18.7201C25.0514 18.7201 25.0514 18.72 25.0514 18.72C24.2101 18.9074 23.4278 19.299 22.7737 19.8603C22.1195 20.4216 21.6136 21.1353 21.3005 21.9383H21.3006C21.3006 21.9384 21.3006 21.9384 21.3006 21.9384H23.7913ZM27.9209 25.2204H24.5C24.3444 24.3857 24.3128 23.5325 24.4063 22.6885H27.8909C28.0258 23.5264 28.036 24.3796 27.9209 25.2204ZM31.053 21.9383H28.4986C28.2437 20.8026 27.8201 19.7115 27.242 18.7013C28.0963 18.8815 28.8921 19.2719 29.5575 19.8371C30.2229 20.4023 30.7369 21.1245 31.053 21.9383ZM27.7822 25.9706C27.5328 27.0978 27.037 28.1559 26.3305 29.0689L26.3493 29.0952H26.0417C25.4349 28.1268 24.9748 27.0738 24.6763 25.9706H27.7822ZM28.6374 25.2204C28.7518 24.3804 28.7518 23.5286 28.6374 22.6885H31.2968C31.4893 23.524 31.4699 24.3943 31.2405 25.2204H28.6374ZM27.3133 28.9714C27.8842 28.0478 28.2915 27.0327 28.5173 25.9706H30.9742C30.6403 26.7217 30.1353 27.3841 29.4996 27.9052C28.864 28.4262 28.1152 28.7914 27.3133 28.9714Z"fill=currentColor>'),
    I2 = n('<div><ul class="grid grid-cols-4 gap-2">');
const G2 = l => {
        const {
            isBzHost: C,
            isSpHost: r
        } = G.getHostType(h.host);
        return T(() => {
            if (l.link.action === "iconLink") return s($, {
                get href() {
                    return l.link.link
                },
                target: "_blank",
                get children() {
                    return s(N, {
                        type: "second",
                        class: "bg-layer3 text-secondary size-10 p-0 !shadow-none",
                        get children() {
                            return l.link.icon
                        }
                    })
                }
            });
            const i = (() => {
                var c = g2();
                return c.$$click = () => {
                    l.link.action && typeof l.link.action == "function" && l.link.action()
                }, o(c, () => l.link.label), c
            })();
            if (!l.link.action || l.link.action === "link") {
                const c = l.link.link,
                    u = () => B(c);
                return (C || r) && u() ? null : s($, {
                    get href() {
                        return l.link.link
                    },
                    get target() {
                        return u() ? "_blank" : "_self"
                    },
                    get children() {
                        var d = p2();
                        return o(d, i, null), o(d, s(_, {
                            get when() {
                                return u()
                            },
                            get children() {
                                return s(Z, {
                                    name: "Share",
                                    class: "size-4 text-secondary"
                                })
                            }
                        }), null), d
                    }
                })
            }
            return i
        })()
    },
    P = l => {
        const C = T(() => s(L, {
                get each() {
                    return l.group.links
                },
                children: i => s(G2, {
                    link: i
                })
            })),
            [r, a] = z(l, ["group", "ulclass"]);
        return (() => {
            var i = b2(),
                c = i.firstChild;
            return E(i, a, !1, !0), o(c, () => l.group.label), o(i, s(H, {
                get when() {
                    return l.group.layout
                },
                get fallback() {
                    return (() => {
                        var u = h2();
                        return o(u, C), k(() => O(u, l.ulclass || "flex flex-col gap-y-3")), u
                    })()
                },
                get children() {
                    return l.group.layout({
                        children: C()
                    })
                }
            }), null), i
        })()
    },
    P2 = () => (() => {
        var l = k2();
        return o(l, s(L, {
            get each() {
                return F2()
            },
            children: C => s(P, {
                group: C
            })
        })), l
    })(),
    F2 = () => {
        const l = () => ["bn", "uk", "ru", "pt", "hi"].find(r => f.lang === r);
        return [{
            links: [{
                label: e.isUsHost ? t("Home") : t("Casino Home"),
                link: "/casino"
            }, {
                label: t("Slots"),
                link: "/gamelist/slots"
            }, {
                label: t("Live Casino"),
                link: "/gamelist/live",
                blocked() {
                    return e.isUsHost
                }
            }, {
                label: t("New Releases"),
                link: "/tagname/new-releases"
            }, {
                label: t("Recommended"),
                link: "/gamelist/home_recommend"
            }, {
                label: t("Table Game"),
                link: "/tagname/table-games"
            }, {
                label: t("BlackJack"),
                link: "/tagname/blackjack",
                blocked() {
                    return e.isUsHost
                }
            }, {
                label: t("Roulette"),
                link: "/tagname/roulette",
                blocked() {
                    return e.isUsHost
                }
            }, {
                label: t("Baccarat"),
                link: "/tagname/baccarat",
                blocked() {
                    return e.isUsHost
                }
            }],
            blocked() {
                return e.isKenyaHost || e.isNgHost || e.isBrAuditHost || location.pathname === "/events/mining/twitter"
            },
            label: t("Casino")
        }, {
            links: [{
                label: t("Sports Home"),
                link: "/sports"
            }, {
                label: t("Live"),
                link: "/sports?bt-path=%2Flive"
            }, {
                label: t("SportsBook"),
                link: "/sports?bt-path=%2F",
                blocked() {
                    return !e.isKenyaHost && !e.isNgHost && !e.isBrAuditHost
                }
            }, {
                label: t("Rules"),
                link: "/help/terms-sports"
            }, {
                label: t("Sport Betting Insights"),
                link: `https://betting.BC.GAME/${l()??""}`,
                blocked() {
                    return e.isKenyaHost || e.isNgHost || e.isBrAuditHost
                }
            }],
            blocked: () => e.isUsHost || location.pathname === "/events/mining/twitter",
            label: t("Sports")
        }, {
            links: [{
                label: t("VIP Club"),
                link: "/vip"
            }, {
                label: t("Affiliate"),
                link: "/affiliate"
            }, {
                label: t("Promotions"),
                link: "/promotions/promotion",
                blocked() {
                    return e.isKenyaHost || e.isNgHost || e.isBrAuditHost
                }
            }, {
                label: t("Lottery"),
                link: "/lottery",
                blocked: () => e.isUsHost || e.isKenyaHost || e.isNgHost || e.isBrAuditHost || location.pathname === "/events/mining/twitter"
            }, {
                label: t("Refer a friend"),
                action() {
                    x.emit("open-refer")
                },
                blocked: () => e.isUsHost || e.isKenyaHost || e.isNgHost || e.isBrAuditHost
            }, {
                label: `${h.siteName} ${t("Store")}`,
                link: "https://www.bc.store/",
                blocked: () => e.isUsHost || e.isKenyaHost || e.isNgHost || e.isBrAuditHost
            }],
            label: t("Promo")
        }, {
            links: [{
                label: t("Licenses"),
                link: "/licenses",
                blocked: () => !W.license.includes("bc")
            }, {
                label: t("Cookies Policy"),
                link: "/help/terms-service?active=cookies-policy",
                blocked() {
                    return !e.isBrAuditHost
                }
            }, {
                label: t("Whistleblower Channel"),
                action() {
                    const r = document.createElement("a");
                    r.href = "mailto:canaldedenuncias@bcsports.com", r.click()
                },
                blocked() {
                    return !e.isBrAuditHost
                }
            }, {
                label: t("Contact Us"),
                link: "/help/contact_us",
                blocked() {
                    return !e.isBrAuditHost
                }
            }, {
                label: t("Responsible Gambling"),
                link: "/help/responsible-gambling",
                blocked() {
                    return !e.isBrAuditHost
                }
            }, {
                label: t("About Us"),
                link: "/help/about_us",
                blocked() {
                    return !e.isBrAuditHost
                }
            }, {
                label: t("Help center"),
                link: "/help",
                blocked() {
                    return e.isKenyaHost || e.isNgHost || e.isBrAuditHost
                }
            }, {
                label: t("Important Announcement"),
                link: "/help/announcement",
                blocked: () => !b.linksBlock.meta.announcementHost.includes(h.host) || e.isKenyaHost || e.isNgHost || e.isBrAuditHost
            }, {
                label: t("BlockDance B.V."),
                link: "/help/blockdance",
                blocked() {
                    return !0
                }
            }, {
                label: t("Gamble Aware"),
                link: "/help/gameble-aware",
                blocked() {
                    return e.isBrAuditHost || e.isUsHost || location.pathname === "/events/mining/twitter"
                }
            }, {
                label: t("Fairness"),
                link: "/help/provably-fair",
                blocked() {
                    return e.isKenyaHost || e.isNgHost || e.isBrAuditHost
                }
            }, {
                label: t("FAQ"),
                link: "/help/faq",
                blocked() {
                    return e.isKenyaHost || e.isNgHost || e.isBrAuditHost
                }
            }, {
                label: t("Privacy Policy"),
                link: "/help/privacy"
            }, {
                label: t("Terms Of Service"),
                link: "/help/terms-service"
            }, {
                label: t("Law Enforcement"),
                link: "/help/law-enforcement",
                blocked() {
                    return e.isKenyaHost || e.isNgHost || e.isBrAuditHost
                }
            }, {
                label: t("Responsible Gambling"),
                link: "/responsible/faq",
                blocked() {
                    return e.isUsHost
                }
            }, {
                label: t("AML"),
                link: "/help/aml",
                blocked() {
                    return e.isKenyaHost || e.isNgHost || e.isBrAuditHost
                }
            }, {
                label: t("Design Resources"),
                link: "https://drive.google.com/drive/folders/1Q48CUgrJOAeDGpBqmdHGNwWGxNEdTZzQ",
                blocked() {
                    return e.isKenyaHost || e.isNgHost || e.isBrAuditHost
                }
            }, {
                label: t("APP"),
                link: G.isIos() ? "/app_download/ios" : "/app_download/android",
                blocked() {
                    return e.isKenyaHost || e.isNgHost || e.isBrAuditHost
                }
            }, {
                label: t("Live Support"),
                action() {
                    x.emit("live_support", !0)
                }
            }, {
                label: t("CEO Inbox"),
                link: "/ceo-inbox/enter"
            }],
            label: t("Support/Legal")
        }, {
            links: [{
                label: t("News"),
                link: `https://blog.bc.game/${f.lang}/`
            }, {
                label: t("Work with us"),
                link: "https://angel.co/company/bc-game-2"
            }, {
                label: t("Business Contacts"),
                action() {
                    V.push(() => s(m2, {}))
                }
            }, {
                label: t("Help Desk"),
                link: `https://help.bc.support/${f.lang==="ja"?"ja":"en"}/`
            }, {
                label: t("Verify Representative"),
                link: "/verify_representative"
            }, {
                label: t("Verify This Site"),
                action() {
                    x.emit("verify_site", !0)
                }
            }],
            label: t("About Us"),
            blocked() {
                return e.isKenyaHost || e.isNgHost || e.isBrAuditHost || e.isBzHost || e.isSpHost
            }
        }, {
            label: t("Join Our Global Community"),
            layout: r => {
                const i = (c => {
                    let u = [];
                    return Y.map(d => {
                        d.lang ? .includes(c) && u.push(d)
                    }), u
                })(f.lang);
                return s(U2, {
                    channels: i,
                    get children() {
                        return r.children
                    }
                })
            },
            links: [{
                link: "https://t.me/bcgamewin",
                action: "iconLink",
                icon: f2()
            }, {
                link: `https://github.com/${h.GITHUB}`,
                action: "iconLink",
                icon: H2()
            }, {
                link: "https://x.com/bcgame",
                action: "iconLink",
                icon: L2()
            }, {
                link: "https://www.facebook.com/bcgameofficial",
                action: "iconLink",
                icon: v2()
            }, {
                link: "https://discord.gg/xqUMQesZQq",
                action: "iconLink",
                icon: w2()
            }, {
                link: "https://bitcointalk.org/index.php?topic=5088875.0",
                action: "iconLink",
                icon: y2()
            }, {
                link: e.isBrHost ? "https://www.instagram.com/bc.gamebrasil/" : "https://instagram.com/bcgame",
                action: "iconLink",
                icon: $2()
            }, {
                link: "https://t.me/bcgamesports",
                action: "iconLink",
                icon: x2()
            }],
            blocked() {
                return e.isKenyaHost || e.isBrAuditHost || e.isNgHost || e.isBzHost || e.isSpHost
            }
        }].map(r => ({ ...r,
            links: r.links.filter(a => !a.blocked ? .())
        })).filter(r => !(r.blocked ? .() || r.links.length === 0))
    };

function K2(l) {
    return (() => {
        var C = N2(),
            r = C.firstChild,
            a = r.nextSibling;
        return o(r, () => l.emoji), o(a, s(D, {
            get children() {
                return [s(w, {
                    get when() {
                        return l.emojiType === "telegram"
                    },
                    get children() {
                        return [_2(), B2(), M2()]
                    }
                }), s(w, {
                    get when() {
                        return l.emojiType === "twitter"
                    },
                    get children() {
                        return [Z2(), A2()]
                    }
                }), s(w, {
                    get when() {
                        return l.emojiType === "instagram"
                    },
                    get children() {
                        return [j2(), S2()]
                    }
                }), s(w, {
                    get when() {
                        return l.emojiType === "facebook"
                    },
                    get children() {
                        return T2()
                    }
                })]
            }
        })), k(() => y(a, "class", l.emojiType === "telegram" ? "size-7" : "size-6")), C
    })()
}

function U2(l) {
    const C = M(() => {
        const r = [{
            link: `${location.origin}/telegram`,
            action: "iconLink",
            icon: V2()
        }];
        if (l.channels && l.channels.length > 0) {
            const a = [];
            l.channels.map(i => {
                a.push({
                    emoji: i.emoji,
                    link: i.link,
                    emojiType: "telegram"
                })
            }), l.channels.map(i => {
                i.twitter && a.push({
                    emoji: i.emoji,
                    link: i.twitter,
                    emojiType: "twitter"
                }), i.instagram && a.push({
                    emoji: i.emoji,
                    link: i.instagram,
                    emojiType: "instagram"
                }), i.facebook && a.push({
                    emoji: i.emoji,
                    link: i.facebook,
                    emojiType: "facebook"
                })
            }), a.map(i => {
                r.push({
                    link: i.link,
                    action: "iconLink",
                    icon: s(K2, {
                        get emoji() {
                            return i.emoji
                        },
                        get emojiType() {
                            return i.emojiType
                        }
                    })
                })
            })
        }
        return r
    });
    return (() => {
        var r = I2(),
            a = r.firstChild;
        return o(a, () => l.children), o(r, s(P, {
            class: "mt-6",
            ulclass: "grid grid-cols-4 gap-2",
            get group() {
                return {
                    label: t("Join Our Local Community"),
                    links: C()
                }
            }
        }), null), r
    })()
}
R(["click"]);
var R2 = n('<p class="text-lg font-semibold text-primary">'),
    A = n('<div class="flex items-center flex-shrink-0 flex-grow justify-around gap-x-6">'),
    z2 = n('<div class="w-full px-4 py-4 max-w-300"><div class="flex w-full flex-wrap gap-x-10 divide-x divide-white_alpha5">'),
    j = n("<img>");
const E2 = () => {
    const l = () => [{
            link: "https://sigma.world/",
            partnerIcon: p.sigma,
            width: 94,
            blocked() {
                return e.isBrAuditHost
            }
        }, {
            link: "https://www.responsiblegambling.org/",
            partnerIcon: p.responsibleGambling,
            width: 104,
            blocked() {
                return !1
            }
        }, {
            link: "https://www.gamcare.org.uk/",
            partnerIcon: p.gamCare,
            width: 125,
            blocked() {
                return e.isBrAuditHost
            }
        }, {
            link: "https://betblocker.org",
            partnerIcon: p.betBlocker,
            width: 180,
            blocked() {
                return e.isBrAuditHost
            }
        }, {
            link: "/help/protect-minors",
            partnerIcon: e.isUsHost ? p.plus21 : p.plus18,
            width: 50,
            blocked() {
                return e.isBrAuditHost
            }
        }].filter(r => !r.blocked()),
        C = () => [{
            link: "https://themiamipc.com/home",
            partnerIcon: p.miami,
            width: 52,
            blocked() {
                return e.isBrAuditHost
            }
        }, {
            link: "https://www.lcfc.com/",
            partnerIcon: p.leicester,
            width: 52,
            blocked() {
                return e.isBrAuditHost
            }
        }, {
            link: "https://www.jasonderulo.com/",
            partnerIcon: p.jasonDerulo,
            width: 100,
            blocked() {
                return e.isBrAuditHost
            }
        }].filter(r => !r.blocked());
    return (() => {
        var r = z2(),
            a = r.firstChild;
        return o(r, s(H, {
            get when() {
                return e.isBrAuditHost
            },
            get children() {
                var i = R2();
                return o(i, () => t("Gaming Responsibilities")), i
            }
        }), a), o(a, s(H, {
            get when() {
                return l().length > 0
            },
            get children() {
                var i = A();
                return o(i, s(L, {
                    get each() {
                        return l()
                    },
                    children: c => s($, {
                        get href() {
                            return c.link
                        },
                        get target() {
                            return B(c.link) ? "_black" : "_self"
                        },
                        get children() {
                            var u = j();
                            return k(d => {
                                var g = c.width * h.remScale + "px",
                                    m = c.partnerIcon;
                                return g !== d.e && ((d.e = g) != null ? u.style.setProperty("width", g) : u.style.removeProperty("width")), m !== d.t && y(u, "src", d.t = m), d
                            }, {
                                e: void 0,
                                t: void 0
                            }), u
                        }
                    })
                })), i
            }
        }), null), o(a, s(H, {
            get when() {
                return C().length > 0
            },
            get children() {
                var i = A();
                return o(i, s(L, {
                    get each() {
                        return C()
                    },
                    children: c => s($, {
                        get href() {
                            return c.link
                        },
                        get target() {
                            return B(c.link) ? "_black" : "_self"
                        },
                        get children() {
                            var u = j();
                            return k(d => {
                                var g = c.width * h.remScale + "px",
                                    m = c.partnerIcon;
                                return g !== d.e && ((d.e = g) != null ? u.style.setProperty("width", g) : u.style.removeProperty("width")), m !== d.t && y(u, "src", d.t = m), d
                            }, {
                                e: void 0,
                                t: void 0
                            }), u
                        }
                    })
                })), i
            }
        }), null), r
    })()
};

function Y2() {
    const l = Q(),
        C = M(() => ["/"].indexOf(l.pathname) >= 0),
        r = () => [C() && s(a2, {}), s(X, {
            isFooter: !0
        }), !e.isKenyaHost && !e.isNgHost && s(E2, {}), s(P2, {}), s(q, {})].filter(Boolean);
    return s(L, {
        get each() {
            return r()
        },
        children: a => a
    })
}
export {
    Y2 as
    default
};