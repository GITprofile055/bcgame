var I = (r, e, a) => new Promise((i, d) => {
    var l = o => {
            try {
                s(a.next(o))
            } catch (m) {
                d(m)
            }
        },
        p = o => {
            try {
                s(a.throw(o))
            } catch (m) {
                d(m)
            }
        },
        s = o => o.done ? i(o.value) : Promise.resolve(o.value).then(l, p);
    s((a = a.apply(r, e)).next())
});
import {
    b as H,
    d as L,
    i as n,
    c as t,
    e as v,
    s as h,
    t as u,
    u as M,
    m as O
} from "./web-c89f4fb8.js";
import {
    a7 as V,
    c as N,
    B as y,
    p as f,
    I as j,
    A as E,
    b as W,
    t as R,
    P as S,
    g as A,
    a as T,
    D as z,
    s as D
} from "./manifest-f1f40164.js";
import {
    j as U,
    b as Y,
    g as q,
    S as b,
    e as G,
    F as J,
    c as B,
    a as K
} from "./solid-js-871c99e1.js";
import {
    C as w
} from "./currency-format-5cd6ca42.js";
import {
    t as c
} from "./i18n-827ab26d.js";
import {
    h as Q
} from "./http-4df94233.js";
import {
    S as X
} from "./sounds-a881e21e.js";
import {
    s as $,
    b as Z
} from "./index-c5ebc757.js";
import {
    A as ee
} from "./animate-number-af733b14.js";
import {
    C as re
} from "./countdown-9ad59544.js";
var te = u("<span class=text-brand>+"),
    ne = u('<div><div class="flex h-56 w-56 items-center justify-center"></div><div class="flex w-64 flex-col gap-y-4"><div class="flex h-12 items-center justify-center rounded-lg bg-layer4 text-lg font-extrabold"></div><div class="flex w-full gap-x-1"></div></div><div class="flex w-full flex-col items-center justify-center gap-y-4 rounded-lg bg-layer2 px-4 py-4 text-sm font-semibold text-secondary"><div class="flex h-10 gap-x-1">'),
    le = u('<img class="h-10 w-10 object-contain">');
const ae = r => {
    const [e, a] = U(r, ["reward", "rewardAmount", "rewardCurrency", "shareConfig", "trackId"]), [i, d] = Y(!1), l = () => {
        const s = c("Successfully shared");
        return new Promise((o, m) => {
            W.emit("getPublicChatRoomId", x => I(void 0, null, function*() {
                if (yield f.confirm(() => c("Share your luck to the chat room") + "?")) return Q.post("/activity/lucky/spin/share/", {
                    trackId: e.trackId,
                    roomId: x
                }).then(() => {
                    R.success(s), o(""), d(!0)
                }).catch(m)
            }))
        }).catch(R)
    }, [p] = q(() => e.shareConfig, s => V(s));
    return (() => {
        var s = ne(),
            o = s.firstChild,
            m = o.nextSibling,
            x = m.firstChild,
            C = x.nextSibling,
            k = m.nextSibling,
            F = k.firstChild;
        return H(s, L(a, {
            style: {
                "background-image": "linear-gradient(147deg, #ffa43b -78%, #191a1b05 30%)"
            },
            get class() {
                return N("flex flex-col items-center justify-center gap-y-6 rounded-lg", a.class)
            }
        }), !1, !0), n(o, t(b, {
            get when() {
                return e.reward
            },
            children: g => g()
        })), n(x, t(w, {
            get currencyName() {
                return e.rewardCurrency
            },
            get children() {
                return t(w.Content, {
                    get children() {
                        return [t(w.Icon, {}), (() => {
                            var g = te();
                            return g.firstChild, n(g, t(w.Amount, {
                                get amount() {
                                    return e.rewardAmount
                                }
                            }), null), g
                        })()]
                    }
                })
            }
        })), n(C, t(y, {
            onClick: () => {
                X.spinCollect(), f.pop()
            },
            type: "brand",
            class: "flex-grow",
            get children() {
                return c("Claim Now")
            }
        }), null), n(C, t(y, {
            type: "second",
            class: "w-15",
            onClick: l,
            get disabled() {
                return i()
            },
            get children() {
                return t(j, {
                    name: "Share"
                })
            }
        }), null), n(k, () => c("Share on social media"), F), n(F, t(G, {
            get children() {
                return t(J, {
                    get each() {
                        var g;
                        return (g = p()) == null ? void 0 : g.filter(_ => _.url).slice(0, 6)
                    },
                    children: g => t(E, {
                        get href() {
                            return g.url
                        },
                        target: "_blank",
                        rel: "noopener noreferrer",
                        get children() {
                            var _ = le();
                            return v(() => h(_, "src", g.icon)), _
                        }
                    })
                })
            }
        })), s
    })()
};
var se = u("<div class=-mx-4>"),
    ce = u('<div class="relative h-full w-full items-center justify-center"><img><img class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">');
const ie = r => {
        const e = B(() => {
                switch (r.spinLevel) {
                    case 0:
                    case 1:
                    case 2:
                        return $.lucky_lottery;
                    case 3:
                    case 4:
                        return $.mega_lottery;
                    case 5:
                        return $.super_lottery
                }
            }),
            a = B(() => {
                const i = Math.floor(Math.random() * 3);
                return i === 0 ? c("I got free Crypto from __ENV_HOST__ free daily spin! Try your luck now! Free spin to get 5 BTC!") : i === 1 ? c("Wow! I won free crypto from daily free spin at __ENV_HOST__! Try your luck now! Free spin to get 5 BTC!") : c("I got lucky at __ENV_HOST__ free Lucky Spin today! Try your luck now! Free spin to get 5 BTC!")
            });
        return t(S, {
            type: "center",
            title: null,
            class: "popup-full w-[21rem]",
            close: !1,
            get children() {
                return [t(y, {
                    onClick: () => {
                        f.pop()
                    },
                    class: "absolute right-4 top-3",
                    get children() {
                        return t(j, {
                            class: "size-5",
                            name: "Close"
                        })
                    }
                }), (() => {
                    var i = se();
                    return n(i, t(ae, {
                        class: "w-full",
                        get shareConfig() {
                            return {
                                title: "Spin",
                                content: a()
                            }
                        },
                        get trackId() {
                            return r.trackId
                        },
                        get rewardAmount() {
                            return r.rewardAmount
                        },
                        get rewardCurrency() {
                            return r.rewardCurrency
                        },
                        get reward() {
                            return (() => {
                                var d = ce(),
                                    l = d.firstChild,
                                    p = l.nextSibling;
                                return v(s => {
                                    var o = $.rewardBg,
                                        m = e();
                                    return o !== s.e && h(l, "src", s.e = o), m !== s.t && h(p, "src", s.t = m), s
                                }, {
                                    e: void 0,
                                    t: void 0
                                }), d
                            })()
                        }
                    })), i
                })()]
            }
        })
    },
    oe = "/modules/bonus2/assets/reward@2x-ff647e9e.png";
var ue = u('<img class="absolute -top-32 left-1/2 h-[17rem] -translate-x-1/2">'),
    de = u('<div class="ml-1 inline-block w-0 opacity-0">'),
    me = u('<div class="text-3xl font-extrabold text-[#EF9E3F]">'),
    ge = u('<div class="mt-4 text-center font-semibold">🍻 '),
    pe = u('<div class="mt-[9rem] flex flex-col justify-center"><div class="flex flex-grow flex-col items-center justify-end gap-y-1"><span class="text-xl font-extrabold text-primary"></span><div class="flex items-center gap-x-1">');
const fe = r => t(S, {
    type: "center",
    class: "popup-full py-4",
    get title() {
        return c("Recharge")
    },
    get children() {
        return [(() => {
            var e = ue();
            return h(e, "src", oe), e
        })(), (() => {
            var e = pe(),
                a = e.firstChild,
                i = a.firstChild,
                d = i.nextSibling;
            return n(i, () => c("Congrats! You got"), null), n(i, t(b, {
                get when() {
                    return r.doubleBonus
                },
                get children() {
                    var l = de();
                    return M(p => {
                        A.to(p, {
                            delay: 1,
                            duration: 1,
                            opacity: 1,
                            width: "auto",
                            ease: "bounce.out"
                        }), K(() => {
                            A.killTweensOf(p)
                        })
                    }, l), n(l, () => c("double!")), l
                }
            }), null), n(d, t(ee, {
                class: "!text-center text-3xl font-extrabold text-[#EF9E3F]",
                duration: 1500,
                interval: 1e3,
                get numbers() {
                    return r.amounts
                },
                children: l => T.printCurrency(new z(l), r.currencyName, {
                    target: r.currencyName,
                    hasAlias: !1
                })
            })), n(a, t(b, {
                get when() {
                    return !r.currencyName.endsWith("FIAT")
                },
                get children() {
                    var l = me();
                    return n(l, () => T.getAlias(r.currencyName)), l
                }
            }), null), n(e, t(b, {
                get when() {
                    return r.doubleBonus
                },
                get children() {
                    var l = ge();
                    return l.firstChild, n(l, () => c("Cheers to you courage!"), null), l
                }
            }), null), n(e, t(y, {
                onClick: () => f.pop(),
                class: "mx-4 mt-4",
                type: "brand",
                get children() {
                    return c("Confirm")
                }
            }), null), e
        })()]
    }
});
var he = u('<span class="inline-flex bg-clip-text text-3xl font-extrabold uppercase text-transparent">'),
    ye = u('<img class="absolute -top-20 left-0 -z-10">'),
    xe = u("<span class=ml-2>"),
    _e = u('<div class="flex h-36 flex-col items-center text-center">'),
    we = u('<div class="flex flex-col items-center justify-center gap-y-3 rounded-lg bg-layer3 p-3 font-semibold text-primary"><p class=text-center></p><img class="h-24 rounded-lg box-reflect"><span class="mt-4 text-secondary"> ');
const P = r => (() => {
        var e = he();
        return e.style.setProperty("background-image", "linear-gradient(0deg, #FFF8B4 11.52%, #FFF 21.05%, #FB0 78.95%)"), n(e, () => r.children), e
    })(),
    $e = r => t(S, {
        get class() {
            return N("popup-full")
        },
        type: "center",
        get style() {
            return {
                "background-color": D.darken ? "rgba(41, 45, 46,0.6)" : "rgba(255, 255, 255, 0.60)"
            }
        },
        get children() {
            return [(() => {
                var e = ye();
                return v(() => h(e, "src", Z.freeSpinRewardBg)), e
            })(), (() => {
                var e = _e();
                return n(e, t(P, {
                    get children() {
                        return [O(() => r.amount), (() => {
                            var a = xe();
                            return n(a, () => c("Free Spins")), a
                        })()]
                    }
                }), null), n(e, t(P, {
                    get children() {
                        return c("Claimed")
                    }
                }), null), e
            })(), (() => {
                var e = we(),
                    a = e.firstChild,
                    i = a.nextSibling,
                    d = i.nextSibling,
                    l = d.firstChild;
                return n(a, () => c("Here are __amount__ Free Spins for your Welcome Bonus.", {
                    amount: r.amount
                })), n(d, () => c("Expires in"), l), n(d, t(re, {
                    get expiresInMS() {
                        return r.expireTime
                    }
                }), null), v(() => h(i, "src", r.gameCover)), e
            })(), t(E, {
                get href() {
                    return `/game/${r.gameId}?fsId=${r.fsId}&currency=${r.currency}`
                },
                class: "w-full",
                get children() {
                    return t(y, {
                        onClick: () => f.pop(),
                        type: "brand",
                        class: "mt-3 w-full",
                        get children() {
                            return c("Play Now")
                        }
                    })
                }
            })]
        }
    }),
    Pe = r => f.push(() => t(ie, r)),
    Ne = r => new Promise(e => {
        f.push(() => t(fe, r), {
            onClose: e
        })
    }),
    je = r => {
        f.push(() => t($e, r))
    };
export {
    Ne as a, je as b, Pe as p
};