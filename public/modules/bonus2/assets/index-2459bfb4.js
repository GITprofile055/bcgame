import {
    c as t,
    i as e,
    e as J,
    s as v,
    t as b
} from "./web-c89f4fb8.js";
import {
    j as ae,
    t as B,
    a7 as ie,
    a3 as K,
    u as X,
    l as j,
    e as H,
    a as R,
    D as I,
    B as F,
    U as oe,
    f as de,
    m as Y,
    c as ce,
    _ as fe
} from "./manifest-f1f40164.js";
import {
    t as l
} from "./i18n-827ab26d.js";
import {
    t as ue,
    g as E,
    e as Z,
    S as y,
    F as ee,
    c as te,
    b as ge,
    d as pe,
    r as me
} from "./solid-js-871c99e1.js";
import {
    i as M,
    g as Q,
    a as xe
} from "./servers-8b17e7a0.js";
import {
    c as be
} from "./store-2fc868cc.js";
import {
    i as re
} from "./const-3e281bed.js";
import {
    r as he,
    c as le,
    a as V,
    b as ve
} from "./index-823e0b11.js";
import {
    I as A
} from "./index-d27f3208.js";
import {
    L as $e,
    P as _e,
    Q as Ce
} from "./Questions-decc3c0a.js";
import we from "./index-42985dda.js";
import ye from "./index-738a59d7.js";
import Se from "./index-6832284a.js";
import Re from "./index-641dd65c.js";
import {
    b as Ie
} from "./router-6c6c27f7.js";
import "./http-4df94233.js";
import "./memoize-91f976fa.js";
import "./_MapCache-91cc8331.js";
import "./_baseGetTag-c2e287b9.js";
import "./level3-2267c79e.js";
import "./withdraw-363bec6b.js";
import "./utils-38f210e8.js";
import "./skeleton-be7c542b.js";
import "./table-cd90ca95.js";
import "./transition-mask-385e57bf.js";
const O = ue(() => {
    const [f, s] = be({
        loading: !0,
        inviteInfo: {},
        dashboardInfo: {
            dashboard: M,
            topCommissions: [],
            topRewards: []
        }
    }), [, {
        refetch: d
    }] = E(() => ae.login, () => {
        re() ? Q().then(o => {
            s({
                loading: !1,
                dashboardInfo: o || {
                    dashboard: M,
                    topCommissions: [],
                    topRewards: []
                }
            })
        }).catch(B) : Promise.all([xe(), Q()]).then(o => {
            const u = o[0],
                n = o[1] || {
                    dashboard: M,
                    topCommissions: [],
                    topRewards: []
                };
            s({
                loading: !1,
                inviteInfo: u,
                dashboardInfo: n
            })
        }).catch(B)
    });
    return {
        state: f,
        setState: s,
        refetch: d
    }
});
var De = b('<div class="flex flex-col items-center gap-3 md:flex-row"><span></span><div class="center gap-3">'),
    Te = b('<a target=_blank rel="noopener noreferrer"class=flex-none><img class=icon>');
const Ue = function(s) {
    const [d] = E(() => ie({
        title: l("My Referral"),
        inviteUrl: s.url
    }));
    return t(Z, {
        get children() {
            return t(y, {
                get when() {
                    return d()
                },
                get fallback() {
                    return t(K, {})
                },
                get children() {
                    var g = De(),
                        o = g.firstChild,
                        u = o.nextSibling;
                    return e(o, () => l("Share via socials")), e(u, t(ee, {
                        get each() {
                            return d()
                        },
                        children: n => n.name === "email" || !n.url ? null : (() => {
                            var i = Te(),
                                x = i.firstChild;
                            return J(c => {
                                var p = n.url,
                                    m = n.icon;
                                return p !== c.e && v(i, "href", c.e = p), m !== c.t && v(x, "src", c.t = m), c
                            }, {
                                e: void 0,
                                t: void 0
                            }), i
                        })()
                    })), g
                }
            })
        }
    })
};
var ke = b(`<div class="relative flex flex-col gap-3 rounded-xl bg-layer4 bg-[url('src/features/affiliate/assets/invite_bg.png')] px-4 py-6 md:w-2/3"><div class=invite-top><div class=top-inner><p class="mb-2 text-xl font-extrabold"></p><div class="flex items-center gap-6"><p class="flex flex-col sm:flex-row sm:items-center sm:gap-2"><span class="text-xl font-extrabold text-brand"></span><span></span></p><div class="h-[30px] w-[1px] bg-secondary/10"></div><p class="flex flex-col sm:flex-row sm:items-center sm:gap-2"><span class="text-xl font-extrabold text-brand">25%</span><span></span></p></div></div></div><p class=text-secondary></p><div class="flex flex-col gap-4 md:flex-row"><div class=flex-1><p class="mb-1 text-secondary"></p><div class="flex items-center justify-between rounded-xl bg-layer5 py-1 pl-3 pr-1"><p class=ellipsis></p></div></div><div class=flex-1><p class="mb-1 text-secondary"></p><div class="flex items-center justify-between rounded-xl bg-layer5 py-1 pl-3 pr-1"><p></p></div></div></div><div class="center right-4 top-4 sm:absolute">`);
const Ae = function() {
    const {
        state: s
    } = O, d = X(), {
        isBrAuditHost: g
    } = j.getHostType(H.host);
    return (() => {
        var o = ke(),
            u = o.firstChild,
            n = u.firstChild,
            i = n.firstChild,
            x = i.nextSibling,
            c = x.firstChild,
            p = c.firstChild,
            m = p.nextSibling,
            r = c.nextSibling,
            a = r.nextSibling,
            $ = a.firstChild,
            _ = $.nextSibling,
            h = u.nextSibling,
            S = h.nextSibling,
            C = S.firstChild,
            D = C.firstChild,
            T = D.nextSibling,
            N = T.firstChild,
            w = C.nextSibling,
            U = w.firstChild,
            k = U.nextSibling,
            se = k.firstChild,
            G = S.nextSibling;
        return e(i, () => l("Invite a Friend to Get")), e(p, () => R.printCurrency(new I(1e3))), e(m, () => l("Referral Rewards")), e(_, () => l("Commission Rewards")), e(h, () => l("Get $1,000.00 for each friend you invite, plus up to 25% commission on their wagers. Enjoy consistent commission, whether they win or lose, in our Casino and Sportsbook. Start earning now!")), e(D, () => l("Referral Link")), e(N, () => s.inviteInfo.invitationUrl), e(T, t(F, {
            size: "s",
            class: "rounded-lg bg-layer6",
            onClick: () => {
                try {
                    j.copyToClipboard(s.inviteInfo.invitationUrl), B(l("Copied"))
                } catch (ne) {}
            },
            get children() {
                return l("Copy")
            }
        }), null), e(U, () => l("Referral Code")), e(se, () => s.inviteInfo.aliasCode), e(k, t(F, {
            size: "s",
            class: "rounded-lg bg-layer6",
            onClick: () => {
                try {
                    j.copyToClipboard(s.inviteInfo.aliasCode), B(l("Copied"))
                } catch (ne) {}
            },
            get children() {
                return l("Copy")
            }
        }), null), e(o, t(y, {
            when: !g,
            get children() {
                return t(Ue, {
                    get url() {
                        return s.inviteInfo.invitationUrl
                    }
                })
            }
        }), G), e(G, t(F, {
            class: "font-extrabold text-brand",
            onClick: () => {
                d("/referral-terms")
            },
            get children() {
                return l("Referral Terms & Conditions")
            }
        })), o
    })()
};
var Le = b('<div class="flex flex-col gap-3 md:w-1/3"><div class="flex rounded-xl bg-layer4 px-4 py-6"><div class="center flex-1 flex-col gap-2 border-r border-third"><img class="mb-2 h-auto w-10"><p class="text-xs text-secondary"></p><p class="text-xl font-extrabold"></p></div><div class="center flex-1 flex-col gap-2"><img class="mb-2 h-auto w-10"><p class="text-xs text-secondary"></p><p class="text-xl font-extrabold"></p></div></div><div class="flex flex-1 gap-2 rounded-xl bg-layer4 md:bg-transparent"><div class="flex h-full w-full flex-1 flex-col px-4 py-6 md:rounded-xl md:bg-layer4"><img class="mb-2 w-6"><p class="text-xs text-secondary"></p><span class="text-xl font-extrabold"></span></div><div class="flex h-full w-full flex-1 flex-col px-4 py-6 md:rounded-xl md:bg-layer4"><img class="mb-2 w-6"><p class="text-xs text-secondary"></p><span class="text-xl font-extrabold">');
const ze = function() {
    const {
        state: s
    } = O, d = te(() => s.dashboardInfo.dashboard);
    return (() => {
        var g = Le(),
            o = g.firstChild,
            u = o.firstChild,
            n = u.firstChild,
            i = n.nextSibling,
            x = i.nextSibling,
            c = u.nextSibling,
            p = c.firstChild,
            m = p.nextSibling,
            r = m.nextSibling,
            a = o.nextSibling,
            $ = a.firstChild,
            _ = $.firstChild,
            h = _.nextSibling,
            S = h.nextSibling,
            C = $.nextSibling,
            D = C.firstChild,
            T = D.nextSibling,
            N = T.nextSibling;
        return e(i, () => l("Total Reward")), e(x, () => R.printCurrency(new I(d().rewardUsd))), e(m, () => l("Total Friends")), e(r, () => s.dashboardInfo.dashboard.friendNumber), v(_, "src", he), e(h, () => l("Referral Rewards")), e(S, () => R.printCurrency(new I(d().availableRewardUsd))), v(D, "src", le), e(T, () => l("Commission Rewards")), e(N, () => R.printCurrency(new I(d().availableCommissionUsd))), J(w => {
            var U = V.trophy,
                k = V.usehead;
            return U !== w.e && v(n, "src", w.e = U), k !== w.t && v(p, "src", w.t = k), w
        }, {
            e: void 0,
            t: void 0
        }), g
    })()
};
var Pe = b('<div class=activities-wrap><div class="flex items-center justify-between"><div class=flex><img class="mr-2 w-6"><span></span></div><p class="font-extrabold text-brand">+'),
    je = b('<div class="flex flex-col gap-3 rounded-xl bg-layer4 px-4 py-6"><div class="text-xl font-extrabold"></div><div class=bot-info>'),
    W = b("<p>"),
    Be = b('<div class="flex items-center justify-between"><div class=center><img class="mr-2 w-6"><span></span></div><p class="font-extrabold text-brand">+');
const He = function() {
    const {
        state: s
    } = O, d = te(() => s.dashboardInfo.dashboard);
    return (() => {
        var g = je(),
            o = g.firstChild,
            u = o.nextSibling;
        return e(o, () => l("Rewards Activities")), e(u, t(y, {
            get when() {
                return s.dashboardInfo.topCommissions.length > 0
            },
            get fallback() {
                return t(oe, {
                    get children() {
                        return [(() => {
                            var n = W();
                            return e(n, () => l("No info yet")), n
                        })(), (() => {
                            var n = W();
                            return e(n, () => l("Invite friends to join you now!")), n
                        })()]
                    }
                })
            },
            get children() {
                var n = Pe(),
                    i = n.firstChild,
                    x = i.firstChild,
                    c = x.firstChild,
                    p = c.nextSibling,
                    m = x.nextSibling;
                return m.firstChild, v(c, "src", ve), e(p, () => l("Referral Rewards")), e(m, () => R.printCurrency(new I(d().availableRewardUsd)), null), e(n, t(ee, {
                    get each() {
                        return s.dashboardInfo.topCommissions
                    },
                    children: r => {
                        const a = new I(r.commissionUsd);
                        return (() => {
                            var $ = Be(),
                                _ = $.firstChild,
                                h = _.firstChild,
                                S = h.nextSibling,
                                C = _.nextSibling;
                            return C.firstChild, v(h, "src", le), e(S, () => l("Commission Rewards")), e(C, () => R.printCurrency(a), null), $
                        })()
                    }
                }), null), n
            }
        })), g
    })()
};
var Ne = b('<h2 class="pb-4 text-lg font-extrabold leading-8">'),
    Fe = b('<div class="flex flex-col gap-4 bg-layer2"><div class="flex flex-col gap-4 md:flex-row">'),
    L = b('<div class="center gap-1"><div>');
const P = ["affiliate", "my-rewards", "referral", "rules", "banners"];

function Me(f) {
    const s = f.match(/\/affiliate\/([^\/]+)/);
    return s ? s[1] : "affiliate"
}

function Ee() {
    const f = new Date().toISOString().slice(0, 10),
        s = new Date;
    s.setDate(s.getDate() - 90);
    const d = s.toISOString().slice(0, 10);
    return fe().post("/agent/information/list/", {
        beginDate: "",
        endDate: "",
        wagerBeginDate: d,
        wagerEndDate: f,
        code: "",
        aliasCode: "",
        userName: "",
        userId: "",
        page: 1,
        pageSize: 10,
        sortName: null,
        sortType: null
    })
}
const q = function() {
    const s = X(),
        d = Ie(),
        {
            isSpHost: g,
            isBzHost: o,
            isUsHost: u
        } = j.getHostType(H.host),
        n = () => Me(d.pathname),
        i = () => Number(P.indexOf(n())),
        [x, c] = ge(void 0),
        [p] = E(x, Ee, {
            initialValue: {
                list: [],
                page: 0,
                pageSize: 0,
                total: 0,
                totalPage: 0
            }
        });
    pe(me(i, () => {
        !x() && (i() === 1 || i() === 2) && c(!0)
    }));

    function m(r) {
        switch (r) {
            case 0:
                return "/affiliate";
            case 1:
                return `/affiliate/${P[r]}/commission`;
            case 2:
                return `/affiliate/${P[r]}/code`;
            default:
                return `/affiliate/${P[r]}`
        }
    }
    return [t(y, {
        get when() {
            return !H.mobile
        },
        get children() {
            var r = Ne();
            return e(r, () => l("Affiliate")), r
        }
    }), t(Z, {
        get fallback() {
            return t(K, {
                class: "h-40"
            })
        },
        get children() {
            return t(Y, {
                class: "mt-3 flex-none rounded-xl bg-layer6 p-1 sm:mt-0 sm:w-[800px]",
                get value() {
                    return i()
                },
                onChange: r => {
                    s(m(r), {
                        replace: !0
                    })
                },
                get children() {
                    return [t(z, {
                        get title() {
                            return (() => {
                                var r = L(),
                                    a = r.firstChild;
                                return e(r, t(A, {
                                    name: "dashboard",
                                    size: 20,
                                    get class() {
                                        return i() === 0 ? "text-brand" : ""
                                    }
                                }), a), e(a, () => l("Dashboard")), r
                            })()
                        },
                        get children() {
                            var r = Fe(),
                                a = r.firstChild;
                            return e(a, t(y, {
                                get when() {
                                    return !re()
                                },
                                get children() {
                                    return t(Ae, {})
                                }
                            }), null), e(a, t(ze, {}), null), e(r, t(He, {}), null), e(r, t($e, {}), null), e(r, t(_e, {}), null), e(r, t(Ce, {}), null), r
                        }
                    }), t(z, {
                        class: "[&_.scroll-x>button]:flex-none [&_.scroll-x]:w-auto",
                        get title() {
                            return (() => {
                                var r = L(),
                                    a = r.firstChild;
                                return e(r, t(A, {
                                    name: "myRewards",
                                    size: 20,
                                    get class() {
                                        return i() === 1 ? "text-brand" : ""
                                    }
                                }), a), e(a, () => l("My Rewards")), r
                            })()
                        },
                        get children() {
                            return t(we, {
                                get friendTableList() {
                                    return p()
                                }
                            })
                        }
                    }), t(z, {
                        get title() {
                            return (() => {
                                var r = L(),
                                    a = r.firstChild;
                                return e(r, t(A, {
                                    name: "referral",
                                    size: 20,
                                    get class() {
                                        return i() === 2 ? "text-brand" : ""
                                    }
                                }), a), e(a, () => l("Referral Codes & Friends")), r
                            })()
                        },
                        get children() {
                            return t(Re, {
                                get friendTableList() {
                                    return p()
                                }
                            })
                        }
                    }), t(z, {
                        get title() {
                            return (() => {
                                var r = L(),
                                    a = r.firstChild;
                                return e(r, t(A, {
                                    name: "rateRules",
                                    size: 20,
                                    get class() {
                                        return i() === 3 ? "text-brand" : ""
                                    }
                                }), a), e(a, () => l("Rate & Rules")), r
                            })()
                        },
                        get children() {
                            return t(ye, {})
                        }
                    }), t(y, {
                        when: !g && !o && !u,
                        get children() {
                            return t(z, {
                                get title() {
                                    return (() => {
                                        var r = L(),
                                            a = r.firstChild;
                                        return e(r, t(A, {
                                            name: "banner",
                                            size: 20,
                                            get class() {
                                                return i() === 4 ? "text-brand" : ""
                                            }
                                        }), a), e(a, () => l("Download Banners")), r
                                    })()
                                },
                                get children() {
                                    return t(Se, {})
                                }
                            })
                        }
                    })]
                }
            })
        }
    })]
};

function pt() {
    return t(y, {
        get when() {
            return H.mobile
        },
        get fallback() {
            return t(q, {})
        },
        get children() {
            return t(de, {
                get title() {
                    return l("Affiliate")
                },
                get children() {
                    return t(q, {})
                }
            })
        }
    })
}

function z(f) {
    return t(Y.TabItem, {
        get class() {
            return ce(f.class, "mb-4 mt-4 flex-1 bg-transparent")
        },
        get title() {
            return f.title
        },
        get children() {
            return f.children
        }
    })
}
export {
    pt as
    default
};