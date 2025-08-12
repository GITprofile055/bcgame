import {
    i as e,
    t,
    c as r,
    e as ee,
    a as te,
    b as s,
    d as R,
    T as re
} from "./i18n-c6009799.js";
import {
    u as W,
    e as E,
    c as le,
    L as ne,
    P as se,
    E as ae,
    g as G,
    t as J,
    a as A,
    D as ie,
    B as U,
    b as H,
    d as oe
} from "./manifest-5a944aea.js";
import {
    c as f,
    a as ce,
    b as ue,
    S as o,
    F as ge,
    d as de,
    o as pe
} from "./solid-js-06775913.js";
import {
    g as me
} from "./Tool-f961d8bd.js";
var be = s('<th class="px-2 bg-black_alpha5">'),
    he = s("<tbody>"),
    fe = s('<div class="flex center w-full">'),
    xe = s('<div class="w-full mt-4 px-4 pt-3 pb-6 sm:px-6 sm:py-4 bg-layer4 rounded-lg"><p class="text-base font-semibold text-primary"></p><div class="mt-4 h-[1px] w-full bg-third"></div><div class="w-full overflow-x-auto"><table class="w-full mt-4 sm:min-w-100"><thead><tr class="h-10 whitespace-nowrap"><th class="px-2 bg-black_alpha5 text-left"></th><th class="px-2 bg-black_alpha5"></th><th class="px-2 bg-black_alpha5"></th><th class="px-2 bg-black_alpha5 text-right">'),
    $e = s('<div class="size-2 rounded-full bg-brand mr-2">'),
    _e = s('<td class="px-2 text-center">'),
    ye = s('<tr class="h-10 text-primary whitespace-nowrap"><td class="px-2 text-left flex items-center h-10"><span></span></td><td class="px-2 text-center"></td><td class="px-2 text-center"><span></span><span></span></td><td class="px-2 text-right"><span class="text-brand hover:underline cursor-pointer">'),
    ve = s('<div class="h-40 flex center w-full">');

function we(c) {
    const b = W(),
        [l, h] = f(!0),
        [v, w] = f(1),
        [n, d] = f(0),
        [x, k] = f([]),
        $ = ce(() => x().length > 0),
        C = g => {
            G().get(`/game/support/ceo-inbox/page-query-tickets?pageSize=10&page=${g}`).then(u => {
                u && de(() => {
                    d(u.total || 0), k(u.list || []), h(!1)
                })
            }).catch(J)
        };
    return ue(() => {
        c.flagNumber && C(v())
    }), (() => {
        var g = xe(),
            u = g.firstChild,
            L = u.nextSibling,
            S = L.nextSibling,
            P = S.firstChild,
            p = P.firstChild,
            T = p.firstChild,
            j = T.firstChild,
            N = j.nextSibling,
            B = N.nextSibling,
            Q = B.nextSibling;
        return e(u, () => t("Submitted Cases")), e(j, () => t("Case ID")), e(T, r(o, {
            get when() {
                return !E.mobile
            },
            get children() {
                var a = be();
                return e(a, () => t("Submission Date")), a
            }
        }), N), e(N, () => t("Subject")), e(B, () => t("Status")), e(Q, () => t("Action")), e(P, r(o, {
            get when() {
                return $()
            },
            get children() {
                var a = he();
                return e(a, r(ge, {
                    get each() {
                        return x()
                    },
                    children: (m, X) => {
                        const O = ke(m.status),
                            Y = X() % 2 == 1,
                            i = m.existUnreadMsg ? "rgba(36, 238, 137, 0.05)" : Y ? "#0000000D" : "transparent";
                        return (() => {
                            var z = ye(),
                                _ = z.firstChild,
                                M = _.firstChild,
                                y = _.nextSibling,
                                D = y.nextSibling,
                                q = D.firstChild,
                                Z = q.nextSibling,
                                F = D.nextSibling,
                                V = F.firstChild;
                            return i != null ? _.style.setProperty("background", i) : _.style.removeProperty("background"), e(_, r(o, {
                                get when() {
                                    return m.existUnreadMsg
                                },
                                get children() {
                                    return $e()
                                }
                            }), M), e(M, () => m.ticketId), e(z, r(o, {
                                get when() {
                                    return !E.mobile
                                },
                                get children() {
                                    var I = _e();
                                    return i != null ? I.style.setProperty("background", i) : I.style.removeProperty("background"), e(I, () => new Date(m.createTime).toLocaleString()), I
                                }
                            }), y), i != null ? y.style.setProperty("background", i) : y.style.removeProperty("background"), e(y, () => me(m.type)), i != null ? D.style.setProperty("background", i) : D.style.removeProperty("background"), e(Z, () => O.label), i != null ? F.style.setProperty("background", i) : F.style.removeProperty("background"), V.$$click = () => {
                                b(`/ceo-inbox/chat/${m.ticketId}${O.resolve?"":"/?resolve=true"}`)
                            }, e(V, () => t("View")), ee(() => te(q, le("size-2 rounded-full mr-2 inline-block", O.color))), z
                        })()
                    }
                })), a
            }
        }), null), e(g, r(o, {
            get when() {
                return !l()
            },
            get fallback() {
                return (() => {
                    var a = ve();
                    return e(a, r(ne, {})), a
                })()
            },
            get children() {
                return r(o, {
                    get when() {
                        return !$()
                    },
                    get fallback() {
                        return r(se, {
                            get current() {
                                return v()
                            },
                            class: "mt-3 justify-center",
                            pageSize: 10,
                            get total() {
                                return n()
                            },
                            onChange: w
                        })
                    },
                    get children() {
                        var a = fe();
                        return e(a, r(ae, {})), a
                    }
                })
            }
        }), null), g
    })()
}

function ke(c) {
    return c === 1 ? {
        label: t("Closed"),
        color: "bg-[#D9D9D9]",
        resolve: !0
    } : c === 2 ? {
        label: t("Rejected"),
        color: "bg-error",
        resolve: !0
    } : c === 3 ? {
        label: t("Open"),
        color: "bg-brand",
        resolve: !1
    } : {
        label: t("In Progress"),
        color: "bg-warning",
        resolve: !1
    }
}
R(["click"]);
var Ce = s('<div class="flex items-center justify-between mt-4 sm:mt-0"><span class="text-lg font-extrabold text-primary">'),
    Se = s('<span class="text-brand underline cursor-pointer">live support team'),
    Pe = s('<div class="w-full text-secondary"><div class="bg-layer4 rounded-lg px-4 py-3 sm:px-6 sm:py-4 mt-4"><p class=m-0></p><ol class=mt-4><li></li><li></li><li></li><li></li><li></li></ol><p class="mt-4 mb-0"></p><p class="m-0 text-primary">'),
    K = s("<span>");

function Ne() {
    const c = W(),
        [b, l] = f(-1),
        [h, v] = f(1),
        w = () => {
            H.login && G().get("/game/support/ceo-inbox/ban-end-time").then(n => {
                const d = E.serverTime.getTime();
                n && n > d && l(n)
            }).catch(J)
        };
    return A.on("add-case-success-callback", () => {
        w(), v(n => n + 1)
    }), pe(() => {
        w()
    }), r(ie, {
        get title() {
            return t("CEO Inbox")
        },
        get children() {
            var n = Pe(),
                d = n.firstChild,
                x = d.firstChild,
                k = x.nextSibling,
                $ = k.firstChild,
                C = $.nextSibling,
                g = C.nextSibling,
                u = g.nextSibling,
                L = u.nextSibling,
                S = k.nextSibling,
                P = S.nextSibling;
            return e(n, r(o, {
                get when() {
                    return !E.mobile
                },
                get children() {
                    var p = Ce(),
                        T = p.firstChild;
                    return e(T, () => t("CEO Inbox")), p
                }
            }), d), e(x, () => t("The CEO Letterbox is an exclusive channel for users to share important feedback directly with our leadership team.")), e($, () => t("1. To ensure effective support and fair handling, the Letterbox is strictly limited to the following issues:")), e(C, () => t("2. Withdrawal delays exceeding 7 days")), e(g, () => t("3. Account suspension without a clear or valid reason")), e(u, () => t("4. Concerns regarding algorithm transparency")), e(L, () => t("5. Complaints about VIP service quality")), e(S, () => t("Each user may submit one case every 7 days, so we can prioritize the most urgent matters and support as many VIP users as possible.")), e(P, r(re, {
                i18nKey: "account.setting.ceoinbox.desc",
                get children() {
                    return ["For all other inquiries or general issues, please contact our ", (() => {
                        var p = Se();
                        return p.$$click = () => A.emit("live_support", !0), p
                    })(), " for faster assistance."]
                }
            })), e(d, r(o, {
                get when() {
                    return b() > 0
                },
                get fallback() {
                    return r(U, {
                        type: "brand",
                        class: "mt-4",
                        onClick: () => c("/ceo-inbox/addcase"),
                        get children() {
                            return t("Create a Ticket")
                        }
                    })
                },
                get children() {
                    return r(U, {
                        class: "mt-4",
                        type: "second",
                        get children() {
                            return r(Te, {
                                get downtime() {
                                    return b()
                                }
                            })
                        }
                    })
                }
            }), null), e(n, r(o, {
                get when() {
                    return H.login
                },
                get children() {
                    return r(we, {
                        get flagNumber() {
                            return h()
                        }
                    })
                }
            }), null), n
        }
    })
}

function Te(c) {
    const b = oe(() => c.downtime);
    return r(o, {
        get when() {
            return b()
        },
        get fallback() {
            return (() => {
                var l = K();
                return e(l, () => t("Create a Case in: __countdowntime__", {
                    countdowntime: ""
                })), l
            })()
        },
        children: l => (() => {
            var h = K();
            return e(h, () => t("Create a Case in: __countdowntime__", {
                countdowntime: `${l().days>0?l().days+"d:":""}${l().hours}h:${l().minutes}m:${l().seconds}s`
            })), h
        })()
    })
}
R(["click"]);
export {
    Ne as
    default
};