import {
    c as e,
    i as d,
    D as g,
    t as f
} from "./web-c89f4fb8.js";
import {
    a3 as h,
    m as c,
    p as s,
    P as m
} from "./manifest-f1f40164.js";
import {
    T as u
} from "./TermWithData-7307171f.js";
import {
    t
} from "./i18n-827ab26d.js";
import {
    S as B,
    b as T,
    F as y
} from "./solid-js-871c99e1.js";
import "./index-c5ebc757.js";
import "./utils-38f210e8.js";
import "./popup-game-limits-ec0564dd.js";
import "./_commonjsHelpers-08c562be.js";
import "./http-4df94233.js";
import "./_arrayMap-2bcec0e7.js";
import "./baseService-2efdc30b.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./_MapCache-91cc8331.js";
import "./_baseIsEqual-837613bc.js";
import "./groupBy-8da7f089.js";
import "./_baseIteratee-bc603d62.js";
import "./toString-1f7cb583.js";
import "./memoize-91f976fa.js";
import "./helpers-44d70238.js";
import "./vip-9182fb4b.js";
import "./index-8a7d18d7.js";
import "./enums-fd45c1cf.js";
import "./index-e43a355a.js";
var I = f('<div class="flex min-h-48 items-center justify-center">');
const v = n => {
    const o = {
            "newbie.casino": t("Casino"),
            "newbie.sport": t("Sport"),
            "daily.casino": t("Casino"),
            monthlyDeposit: t("Monthly"),
            inrCompensation: t("INR Compensation"),
            "newbie.none": t("None"),
            invitationBonus: t("Invitation Bonus")
        },
        a = () => ({
            "COMMON-NEWBIE": [{
                region: "global",
                termName: "newbie.casino",
                isDefault: n.defaultBonusType === "casino"
            }, {
                region: "global",
                termName: "newbie.sport",
                isDefault: n.defaultBonusType === "sport"
            }],
            "KR-DAILY": [{
                region: "kr",
                termName: "daily.casino"
            }],
            "KR-NEWBIE": [{
                region: "kr",
                termName: "newbie.casino"
            }],
            "VN-DAILY": [{
                region: "vn",
                termName: "daily.casino"
            }],
            "VN-NEWBIE": [{
                region: "global",
                termName: "newbie.casino",
                isDefault: n.defaultBonusType === "casino"
            }, {
                region: "global",
                termName: "newbie.sport",
                isDefault: n.defaultBonusType === "sport"
            }],
            MONTHLY: [{
                region: "global",
                termName: "monthlyDeposit"
            }]
        })[n.depositBonusType];
    return e(B, {
        get when() {
            return a()
        },
        get fallback() {
            return (() => {
                var r = I();
                return d(r, e(h, {})), r
            })()
        },
        children: r => {
            var l;
            const [N, b] = T((l = r().findIndex(i => i.isDefault)) != null ? l : 0), p = () => r().length > 1;
            return e(g, {
                get component() {
                    return p() ? c : "div"
                },
                type: "inner",
                get value() {
                    return N()
                },
                onChange: b,
                get children() {
                    return e(y, {
                        get each() {
                            return r()
                        },
                        children: i => e(g, {
                            get component() {
                                return p() ? c.TabItem : "div"
                            },
                            get title() {
                                return o[i.termName]
                            },
                            class: "!bg-transparent",
                            get children() {
                                return e(u, {
                                    get termsName() {
                                        return i.termName
                                    },
                                    get region() {
                                        return i.region
                                    }
                                })
                            }
                        })
                    })
                }
            })
        }
    })
};

function J(n) {
    const {
        type: o,
        bonusType: a
    } = n;
    if (o !== "SPECIAL") {
        if ((o === "COMMON-NEWBIE" || o === "VN-NEWBIE") && !a) {
            s.push(() => e(m, {
                get title() {
                    return t("Bonus T&C")
                },
                get children() {
                    return e(u, {
                        termsName: "newbie.none",
                        region: "global"
                    })
                }
            }));
            return
        }
        s.push(() => e(m, {
            get title() {
                return t("Bonus T&C")
            },
            get children() {
                return e(v, {
                    depositBonusType: o,
                    defaultBonusType: a
                })
            }
        }))
    }
}

function Q() {
    return s.push(() => e(m, {
        get title() {
            return t("Bonus T&C")
        },
        get children() {
            return e(u, {
                termsName: "invitationBonus",
                region: "global"
            })
        }
    }))
}
export {
    J as
    default, J as popupBonusTerms, Q as popupInvitationBonusTerms
};