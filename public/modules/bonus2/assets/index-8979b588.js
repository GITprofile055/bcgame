import {
    i as l,
    c as t,
    e as v,
    s as C,
    t as o,
    b as I,
    d as O,
    m as S
} from "./web-c89f4fb8.js";
import {
    A as y,
    B as c,
    p as g,
    c as B,
    I as E,
    a as A,
    D as P,
    u as x,
    z as M,
    j as k
} from "./manifest-f1f40164.js";
import {
    S as $,
    m as T,
    j as G,
    c as U,
    F as w,
    o as Y
} from "./solid-js-871c99e1.js";
import {
    A as f
} from "./animate-number-af733b14.js";
import {
    t as a
} from "./i18n-827ab26d.js";
import {
    g as L
} from "./index-c5ebc757.js";
import {
    D as N
} from "./index-e43a355a.js";
var d = (r => (r.Money = "Money", r.LuckySpin = "LuckySpin", r.FreeSpin = "FreeSpin", r.Lottery = "Lottery", r.Deposit = "DepositBonus", r.FreeBets = "FreeBet", r))(d || {}),
    R = o('<img class="relative -top-6 -z-10 size-[20rem] opacity-50">'),
    V = o('<div class="relative z-0 flex h-[16.5rem] justify-center"><img class="absolute left-0 top-0 w-full">');
const m = r => (() => {
    var s = V(),
        e = s.firstChild;
    return l(s, t($, {
        get when() {
            return r.shine
        },
        get children() {
            var n = R();
            return n.style.setProperty("animation", "spin 10s infinite linear"), v(() => C(n, "src", L.bonus_link_light)), n
        }
    }), null), v(() => C(e, "src", L.bonus_link_banner)), s
})();
var j = o('<div class="flex flex-col items-center text-lg font-extrabold text-primary"><p class=uppercase>!</p><p class="">!'),
    K = o('<div class="flex min-h-16 items-center justify-center rounded-xl bg-layer3 px-3 py-2">'),
    W = o('<div><div class="text-2xl font-extrabold text-alw_white"></div><div class="relative z-10">'),
    X = o("<div>"),
    _ = o('<p class="text-center text-lg font-extrabold uppercase text-primary">'),
    q = o('<p class="flex justify-center gap-x-1 text-3xl font-extrabold text-warning_brighter">'),
    H = o('<div class="flex flex-col gap-y-2 text-center text-base font-extrabold text-alw_white">'),
    J = o("<p>"),
    D = o('<div><p class="text-center text-lg uppercase">'),
    F = o('<p class="text-center text-3xl font-extrabold text-warning_brighter"> '),
    h = o('<div class="text-center text-base font-extrabold">'),
    z = o('<p class="text-center text-3xl font-extrabold text-warning_brighter">'),
    Q = o('<p class="text-center text-3xl font-extrabold text-warning_brighter"> <!> ');
const de = r => t(p, {
        get header() {
            return t(m, {})
        },
        get content() {
            return (() => {
                var s = j(),
                    e = s.firstChild,
                    n = e.firstChild,
                    i = e.nextSibling,
                    u = i.firstChild;
                return l(e, () => a("CONGRATULATIONS!"), n), l(i, () => a("You got a bonus link!"), u), s
            })()
        },
        get footer() {
            return t(y, {
                get href() {
                    return `/login/signin?redirect=/shitlink/${r.code}`
                },
                get children() {
                    return t(c, {
                        onClick: () => g.pop(),
                        type: "brand",
                        size: "l",
                        class: "w-full text-lg font-extrabold",
                        get children() {
                            return a("Sign In & Claim")
                        }
                    })
                }
            })
        }
    }),
    me = r => {
        const s = T({
            rewardOpened: !1
        }, r);
        return (() => {
            switch (s.rewardType) {
                case d.Money:
                    return t(Z, s);
                case d.LuckySpin:
                    return t(re, s);
                case d.FreeSpin:
                    return t(le, s);
                case d.Deposit:
                    return t(te, s);
                case d.Lottery:
                    return t(ne, s);
                case d.FreeBets:
                    return t(ee, s)
            }
        })()
    },
    p = r => {
        const [s, e] = G(r, ["header", "content", "footer", "mainContent"]);
        return (() => {
            var n = W(),
                i = n.firstChild,
                u = i.nextSibling;
            return I(n, O(e, {
                get class() {
                    return B("-mx-4 -mb-4 flex flex-col gap-y-4 overflow-hidden rounded-lg !bg-layer2 px-4 pb-4 text-alw_white", e.class)
                }
            }), !1, !0), l(n, t(c, {
                onClick: () => g.pop(),
                size: "xs",
                type: "second",
                class: "absolute right-3 top-3 z-10 !px-1",
                get children() {
                    return t(E, {
                        class: "size-4 text-tertiary",
                        name: "Close"
                    })
                }
            }), i), l(n, () => s.header, i), l(i, () => s.content), l(n, t($, {
                get when() {
                    return r.mainContent
                },
                get children() {
                    var b = K();
                    return l(b, () => r.mainContent), b
                }
            }), u), l(u, () => s.footer), n
        })()
    },
    Z = r => {
        const s = (n, i) => {
                const u = [i.welcome ? a("Welcome Bonus") : a("CONGRATS! YOU’VE CLAIMED")],
                    b = i.kycLevel ? [a("Complete basic KYC in 24 hours and the bonus will be sent to your balance"), a("Wish you super luck and have fun!"), t(y, {
                        get href() {
                            return k.login ? `/settings/verify/${i.kycLevelName||"basic-kyc-level"}` : "/login/regist"
                        },
                        class: "mt-4 block",
                        get children() {
                            return t(c, {
                                onClick: () => g.pop(),
                                type: "brand",
                                size: "l",
                                class: "w-full text-lg",
                                get children() {
                                    return a("Go KYC")
                                }
                            })
                        }
                    })] : [t($, {
                        get when() {
                            return r.isDubai
                        },
                        get fallback() {
                            return t(y, {
                                get href() {
                                    return k.login ? "/wallet/balance" : "/login/regist"
                                },
                                get children() {
                                    return t(c, {
                                        onClick: () => g.pop(),
                                        type: "brand",
                                        size: "l",
                                        class: "w-full text-lg",
                                        get children() {
                                            return a("Got it")
                                        }
                                    })
                                }
                            })
                        },
                        get children() {
                            return t(c, {
                                onClick: () => g.pop(),
                                type: "brand",
                                size: "l",
                                class: "w-full text-lg",
                                get children() {
                                    return a("Got it")
                                }
                            })
                        }
                    })];
                return {
                    contentCongratsTexts: u,
                    footerTexts: b
                }
            },
            e = U(() => s(r.currency, {
                welcome: r.welcome,
                kycLevel: r.kycLevel,
                kycLevelName: r.kycLevelName
            }));
        return t(p, {
            get header() {
                return t(m, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var n = X();
                    return l(n, t(w, {
                        get each() {
                            return e().contentCongratsTexts
                        },
                        children: i => (() => {
                            var u = _();
                            return l(u, i), u
                        })()
                    })), n
                })()
            },
            get mainContent() {
                return (() => {
                    var n = q();
                    return l(n, () => A.printCurrency(new P(Number(r.amount)), r.currency, {
                        target: r.currency
                    })), n
                })()
            },
            get footer() {
                return (() => {
                    var n = H();
                    return l(n, t(w, {
                        get each() {
                            return e().footerTexts
                        },
                        children: i => t($, {
                            when: i,
                            get children() {
                                var u = J();
                                return l(u, i), u
                            }
                        })
                    })), n
                })()
            }
        })
    },
    ee = r => {
        const s = x();
        return t(p, {
            get header() {
                return t(m, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var e = D(),
                        n = e.firstChild;
                    return l(n, () => a("CONGRATS! YOU’VE CLAIMED")), e
                })()
            },
            get mainContent() {
                return (() => {
                    var e = F(),
                        n = e.firstChild;
                    return l(e, t(f, {
                        class: "mr-1 font-extrabold",
                        duration: 1500,
                        get numbers() {
                            return [0, Number(r.stringAmount)]
                        },
                        children: i => `${Number(i).toFixed(0)}`
                    }), n), l(e, () => A.getAlias(r.currencyName), n), l(e, () => a("Free Bet"), null), e
                })()
            },
            get footer() {
                return (() => {
                    var e = h();
                    return l(e, t(c, {
                        type: "brand",
                        size: "l",
                        class: "w-full text-lg",
                        onClick: () => {
                            M("setting", "currencyName", r.currencyName), s("/sports?bt-path=%2Fbets"), g.pop()
                        },
                        get children() {
                            return a("Play Now")
                        }
                    })), e
                })()
            }
        })
    },
    te = r => {
        const s = x();
        return Y(() => {
            N.useCurrentDepositItem()[1].refetch(), N.useDepositProgress()[1].refetch()
        }), t(p, {
            get header() {
                return t(m, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var e = D(),
                        n = e.firstChild;
                    return l(n, () => a("CONGRATS! YOU’VE CLAIMED")), e
                })()
            },
            get mainContent() {
                return (() => {
                    var e = z();
                    return l(e, t(f, {
                        class: "mr-1 font-mono",
                        duration: 1e3,
                        get numbers() {
                            return [0, r.percentage]
                        },
                        children: n => `${Number(n).toFixed(0)}%`
                    }), null), l(e, () => a("Limited Time Deposit Bonus"), null), e
                })()
            },
            get footer() {
                return (() => {
                    var e = h();
                    return l(e, t(c, {
                        type: "brand",
                        size: "l",
                        class: "w-full text-lg",
                        onClick: () => {
                            s("/wallet/deposit"), g.pop()
                        },
                        get children() {
                            return a("Deposit Now")
                        }
                    })), e
                })()
            }
        })
    },
    re = r => {
        const s = x();
        return t(p, {
            get header() {
                return t(m, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var e = _();
                    return l(e, () => a("CONGRATS! YOU’VE CLAIMED")), e
                })()
            },
            get mainContent() {
                return (() => {
                    var e = F(),
                        n = e.firstChild;
                    return l(e, t(f, {
                        class: "font-extrabold",
                        duration: 1500,
                        get numbers() {
                            return [0, Number(r.amount)]
                        },
                        children: i => `${Number(i).toFixed(0)}`
                    }), n), l(e, () => a("Lucky Spins"), null), e
                })()
            },
            get footer() {
                return (() => {
                    var e = h();
                    return l(e, t(c, {
                        type: "brand",
                        class: "w-full text-lg",
                        size: "l",
                        onClick: () => {
                            s("/spin"), g.pop()
                        },
                        get children() {
                            return [S(() => a("Spin Now")), "!"]
                        }
                    })), e
                })()
            }
        })
    },
    ne = r => {
        const s = x();
        return t(p, {
            get header() {
                return t(m, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var e = _();
                    return l(e, () => a("CONGRATS! YOU’VE CLAIMED")), e
                })()
            },
            get mainContent() {
                return (() => {
                    var e = Q(),
                        n = e.firstChild,
                        i = n.nextSibling;
                    return i.nextSibling, l(e, t(f, {
                        class: "font-extrabold",
                        duration: 1e3,
                        get numbers() {
                            return [0, Number(r.amount)]
                        },
                        children: u => `${Number(u).toFixed(0)}`
                    }), n), l(e, () => a("Lottery"), i), l(e, () => a("Tickets"), null), e
                })()
            },
            get footer() {
                return (() => {
                    var e = h();
                    return l(e, t(c, {
                        type: "brand",
                        class: "w-full text-lg",
                        size: "l",
                        onClick: () => {
                            s("/lottery/myBets"), g.pop()
                        },
                        get children() {
                            return a("Go to Lottery")
                        }
                    })), e
                })()
            }
        })
    },
    le = r => {
        const s = x();
        return t(p, {
            get header() {
                return t(m, {
                    shine: !0
                })
            },
            get content() {
                return (() => {
                    var e = _();
                    return l(e, () => a("CONGRATS! YOU’VE CLAIMED")), e
                })()
            },
            get mainContent() {
                return (() => {
                    var e = z();
                    return l(e, t(f, {
                        class: "mr-1 font-extrabold",
                        duration: 1500,
                        get numbers() {
                            return [0, Number(r.amount)]
                        },
                        children: n => `${Number(n).toFixed(0)}X`
                    }), null), l(e, () => a("Free Spins"), null), e
                })()
            },
            get footer() {
                return (() => {
                    var e = h();
                    return l(e, t(c, {
                        type: "brand",
                        class: "w-full text-lg",
                        size: "l",
                        onClick: () => {
                            g.pop(), r.gameId && (r.gameId.includes("detrade:trading") ? s("/trading") : s(`/game/${r.gameId}?fsId=${r.fsId}&currency=${r.currencyName}`))
                        },
                        get children() {
                            return [S(() => a("Play Now")), "!"]
                        }
                    })), e
                })()
            }
        })
    };
export {
    me as B, de as P, d as R
};