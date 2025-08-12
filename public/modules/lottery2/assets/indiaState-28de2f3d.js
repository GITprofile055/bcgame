var xe = Object.defineProperty,
    pe = Object.defineProperties;
var ye = Object.getOwnPropertyDescriptors;
var te = Object.getOwnPropertySymbols;
var ve = Object.prototype.hasOwnProperty,
    $e = Object.prototype.propertyIsEnumerable;
var ae = (e, i, t) => i in e ? xe(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[i] = t,
    le = (e, i) => {
        for (var t in i || (i = {})) ve.call(i, t) && ae(e, t, i[t]);
        if (te)
            for (var t of te(i)) $e.call(i, t) && ae(e, t, i[t]);
        return e
    },
    re = (e, i) => pe(e, ye(i));
var G = (e, i, t) => new Promise((h, o) => {
    var s = b => {
            try {
                u(t.next(b))
            } catch (f) {
                o(f)
            }
        },
        k = b => {
            try {
                u(t.throw(b))
            } catch (f) {
                o(f)
            }
        },
        u = b => b.done ? h(b.value) : Promise.resolve(b.value).then(s, k);
    u((t = t.apply(e, i)).next())
});
import {
    k as ce,
    d as H,
    b as L,
    c as a,
    i as r,
    F as V,
    g as F,
    t as $,
    x as ke,
    f as q,
    h as O,
    o as de,
    a as N,
    e as we,
    S as se,
    m as Se,
    s as _e
} from "./solid-js-2e2908f8.js";
import {
    o as ue,
    B as E,
    v as Ie,
    e as U,
    I as Q,
    s as R,
    F as Ce,
    p as W,
    g as J,
    t as De,
    L as Pe,
    f as X
} from "./manifest-5fcb2c8d.js";
import {
    p as v,
    I as ne,
    i as Be
} from "./store-483fdae6.js";
import {
    t as S,
    T as me
} from "./i18n-d0803583.js";
import {
    a as ge
} from "./router-bf1daf6a.js";
import {
    d as ie
} from "./lottery-af48bec0.js";
import {
    u as fe,
    a as Te,
    f as Ee
} from "./IndiaStateKaralaBall-9a331e1e.js";
import {
    B as Me
} from "./Detail.interface-808c1c29.js";
import {
    p as Z
} from "./store-2ed2b91e.js";
var Le = $('<div class="flex-1 z-10"><div class="duration-300 ease-out">'),
    Ae = $("<div>"),
    He = $('<div class=pb-16><div class=overflow-hidden><div class="relative flex h-full justify-center select-none"><div class="center box-border w-full h-14 border-y border-third absolute top-1/2 left-0 -translate-y-1/2"></div></div></div><section class="bg-layer4 p-4 absolute bottom-0 left-0 w-full">'),
    Fe = $('<div class="h-10 flex-1 bg-contain bg-center bg-no-repeat bg-[url(&quot;src/assets/lottery/indiaWhiteBall.png&quot;)]">');

function Ye(e) {
    const i = Ie(),
        [t] = ke(e, ["options", "value", "index", "itemHeight", "columnHeight"]),
        [h, o] = L(!1),
        [s, k] = L(0),
        [u, b] = L(0),
        [f, C] = L(0),
        [p, I] = L(0),
        [c, D] = L(0);
    let m = !1,
        y = !1;
    const w = () => {
        let l = t.options.indexOf(t.value);
        l < 0 && (l = 0, e.onChange(t.options[0]));
        const x = t.columnHeight / 2 - t.itemHeight / 2,
            n = t.columnHeight / 2 - t.itemHeight * t.options.length + t.itemHeight / 2,
            _ = x - l * t.itemHeight;
        C(_), I(n), D(x)
    };
    q(() => {
        w()
    }), q(() => {
        i() ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    });
    const B = l => {
            k(l.targetTouches[0].pageY), b(f())
        },
        Y = l => {
            l.preventDefault();
            const x = l.targetTouches[0].pageY;
            h() || o(!0);
            let n = u() + x - s();
            n < p() ? n = p() - Math.pow(p() - n, .8) : n > c() && (n = c() + Math.pow(n - c(), .8)), C(n)
        },
        A = () => {
            if (!h()) return;
            o(!1), k(0), b(0);
            let l;
            f() > c() ? l = 0 : f() < p() ? l = t.options.length - 1 : l = -Math.floor((f() - c()) / t.itemHeight), e.onChange(t.options[l])
        },
        d = l => {
            if (y = !1, m) {
                m = !1;
                return
            }
            l !== e.value && e.onChange(l)
        },
        P = l => {
            y = !0, k(l.pageY), b(f())
        },
        T = l => {
            if (!y) return;
            l.preventDefault();
            const x = l.pageY;
            h() || o(!0);
            let n = u() + x - s();
            n < p() ? n = p() - Math.pow(p() - n, .8) : n > c() && (n = c() + Math.pow(n - c(), .8)), C(n)
        },
        M = () => {
            if (y = !1, !h()) return;
            o(!1), k(0), b(0);
            let l;
            f() > c() ? l = 0 : f() < p() ? l = t.options.length - 1 : l = -Math.floor((f() - c()) / t.itemHeight), m = !0, e.onChange(t.options[l])
        },
        K = () => {
            y = !1
        };
    return (() => {
        var l = Le(),
            x = l.firstChild;
        return x.addEventListener("mouseleave", K), x.$$mouseup = M, x.$$mousemove = T, x.$$mousedown = P, x.$$touchend = A, x.$$touchmove = Y, x.$$touchstart = B, r(x, a(V, {
            get each() {
                return e.options
            },
            children: n => (() => {
                var _ = Ae();
                return _.$$click = () => d(n), r(_, n), F(g => {
                    var j = `center text-base font-extrabold ${n===e.value?" text-primary_brand":"text-primary"}`,
                        z = `${e.itemHeight}px`;
                    return j !== g.e && O(_, g.e = j), z !== g.t && ((g.t = z) != null ? _.style.setProperty("height", z) : _.style.removeProperty("height")), g
                }, {
                    e: void 0,
                    t: void 0
                }), _
            })()
        })), F(n => {
            var _ = `translate(0, ${f()}px)`,
                g = h() ? "0ms" : void 0;
            return _ !== n.e && ((n.e = _) != null ? x.style.setProperty("transform", _) : x.style.removeProperty("transform")), g !== n.t && ((n.t = g) != null ? x.style.setProperty("transition-duration", g) : x.style.removeProperty("transition-duration")), n
        }, {
            e: void 0,
            t: void 0
        }), l
    })()
}

function ze(e) {
    const i = H(() => e.itemHeight || 56),
        t = H(() => e.boxHeight || 392),
        [h, o] = L(e.selectedValue),
        s = H(() => h().includes("-"));
    return a(ue, {
        get title() {
            return S("Select your number")
        },
        get children() {
            var k = He(),
                u = k.firstChild,
                b = u.firstChild,
                f = b.firstChild,
                C = u.nextSibling;
            return b.style.setProperty("mask-image", "linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent)"), r(b, a(V, {
                get each() {
                    return e.optionGroups
                },
                children: (p, I) => a(Ye, {
                    get index() {
                        return I()
                    },
                    options: p,
                    get selectedValue() {
                        return h()
                    },
                    get value() {
                        return h()[I()]
                    },
                    get itemHeight() {
                        return i()
                    },
                    get columnHeight() {
                        return t()
                    },
                    onChange: c => {
                        const D = [...h()];
                        D[I()] = c, o(D)
                    }
                })
            }), f), r(f, a(V, {
                get each() {
                    return e.optionGroups
                },
                children: () => Fe()
            })), r(C, a(E, {
                type: "brand",
                class: "w-full h-12",
                get disabled() {
                    return s()
                },
                onClick: () => e.onSubmit(h()),
                get children() {
                    return S("Confirm")
                }
            })), F(p => {
                var I = `${t()}px`,
                    c = `${i()}px`;
                return I !== p.e && ((p.e = I) != null ? u.style.setProperty("height", I) : u.style.removeProperty("height")), c !== p.t && ((p.t = c) != null ? f.style.setProperty("height", c) : f.style.removeProperty("height")), p
            }, {
                e: void 0,
                t: void 0
            }), k
        }
    })
}
ce(["touchstart", "touchmove", "touchend", "mousedown", "mousemove", "mouseup", "click"]);
const Ge = "/modules/lottery2/assets/ball_exist-5badaed8.png";
var Ne = $('<span class="text-primary text-sm font-extrabold">(<!>)'),
    Qe = $('<label class="text-secondary text-sm font-extrabold">'),
    Ve = $("<label class=text-primary>7"),
    je = $('<section class="bg-layer3 p-3 rounded-md mt-3"><div class="flex justify-between"><h3 class="text-primary text-sm font-extrabold"></h3></div><div class="grid sm:flex sm:gap-3 sm:justify-center grid-cols-8 gap-2.5 py-3 my-2.5 text-primary text-base font-extrabold"><label class="center text-primary text-base font-extrabold"></label></div><div class="flex justify-between"><section class="flex flex-col gap-2"><h3 class="text-primary text-sm font-extrabold"></h3><p class="text-secondary text-xs font-extrabold">'),
    Re = $('<label class="text-base font-extrabold">'),
    qe = $('<div><div class="overflow-scroll-box bg-layer2 rounded-lg p-3 min-w-96"><div class="flex justify-between"><div class="cursor-pointer flex items-center gap-1"><span class="text-primary text-sm font-extrabold"></span></div></div><div>'),
    Ke = $("<div class=center>"),
    Ue = $('<label class="text-sm font-extrabold text-primary">10'),
    oe = $('<label class="text-sm font-extrabold text-secondary">'),
    We = $('<label class="text-sm font-extrabold text-primary">25'),
    Je = $('<label class="text-sm font-extrabold text-primary">'),
    Xe = $('<div class="flex gap-2 h-20 items-center justify-between w-full fixed left-0 bottom-20 z-50 px-4 py-3 sm:static sm:mt-3">'),
    Ze = $("<label class=text-primary>has been sold"),
    Oe = $('<div class="flex gap-5 flex-col items-center"><img class=w-24><h1 class="text-base font-extrabold text-secondary text-center px-14"></h1><div></div><div class="w-full flex gap-2">');
const ut = function(e) {
    const i = ge(),
        t = fe(),
        h = H(() => {
            var w, B;
            const m = ["-"].concat(((B = (w = e.data.specMap) == null ? void 0 : w.secondLetter) == null ? void 0 : B.split(",")) || []),
                y = Array(5).fill(ie(0, 9));
            return [m, ie(1, 9), ...y]
        }),
        o = Array(7).fill("-"),
        [s, k] = L(o),
        u = m => G(this, null, function*() {
            if (!m) return [];
            const y = "/platform-lottery/india-kerala/generate-ticket";
            return yield J().get(y, {
                params: {
                    lotteryId: i.id,
                    count: m
                }
            })
        }),
        [b, {
            refetch: f,
            mutate: C
        }] = we(() => u(0), {
            initialValue: []
        });
    q(() => {
        var w, B;
        if (!((B = (w = e.data) == null ? void 0 : w.oddsList) != null && B.length)) return;
        const m = {
                draws: 1,
                discount: 0,
                betAmount: .5,
                betsNumber: b().length,
                normalBallList: b(),
                bonusBallList: [],
                name: e.data.name
            },
            y = {
                selectedData: e.data.oddsList[0],
                marketId: e.data.marketId,
                selectedDetailData: m
            };
        v.setState("currentMarketId", e.data.marketId), v.setState("betIndia", Z(Y => {
            Y.state = y
        }))
    });
    const p = m => {
            u(m).then(y => {
                const w = v.state.betIndia.state.selectedDetailData.normalBallList.concat(y);
                C(w)
            })
        },
        I = m => {
            const y = v.state.betIndia.state.selectedDetailData.normalBallList.filter(w => w !== m);
            C(y)
        },
        c = H(() => v.state.betIndia.state.selectedDetailData.normalBallList);
    de(() => {
        v.setState("betIndia", Z(m => {
            m.state = Be
        }))
    });
    const D = H(() => t().lotteryInfo.status === 1);
    return (() => {
        var m = qe(),
            y = m.firstChild,
            w = y.firstChild,
            B = w.firstChild,
            Y = B.firstChild,
            A = w.nextSibling;
        return y.style.setProperty("box-shadow", "0px 0px 6px 0px rgba(0, 0, 0, 0.10)"), r(Y, () => S("Choose your tickets")), r(B, a(se, {
            get children() {
                var d = Ne(),
                    P = d.firstChild,
                    T = P.nextSibling;
                return T.nextSibling, r(d, () => c().length, T), d
            }
        }), null), r(w, a(E, {
            class: "center text-text cursor-pointer h-7",
            get disabled() {
                return c().length < 1
            },
            onClick: () => C([]),
            get children() {
                return [a(Q, {
                    name: "Delete",
                    class: "mr-1 fill-secondary w-4 h-4"
                }), (() => {
                    var d = Qe();
                    return r(d, () => S("Clear All")), d
                })()]
            }
        }), null), r(y, a(Ce, {
            name: "slideDown",
            get children() {
                return a(N, {
                    get when() {
                        return v.state.isShowIndiaStateBalls
                    },
                    get children() {
                        var d = je(),
                            P = d.firstChild,
                            T = P.firstChild,
                            M = P.nextSibling,
                            K = M.firstChild,
                            l = M.nextSibling,
                            x = l.firstChild,
                            n = x.firstChild,
                            _ = n.nextSibling;
                        return r(T, () => S("Customize Your Tickets")), r(P, a(E, {
                            get disabled() {
                                return !!s().find(g => g === "-")
                            },
                            class: "text-secondary text-sm font-extrabold",
                            onClick: () => k(o),
                            get children() {
                                return S("Reset")
                            }
                        }), null), M.$$click = () => {
                            W.push(() => a(ze, {
                                get selectedValue() {
                                    return s()
                                },
                                get optionGroups() {
                                    return h()
                                },
                                onSubmit: g => {
                                    k(g), W.pop()
                                }
                            }))
                        }, r(K, () => {
                            var g;
                            return (g = e.data.specMap) == null ? void 0 : g.firstLetter
                        }), r(M, a(V, {
                            get each() {
                                return s()
                            },
                            children: g => a(E, {
                                class: 'center text-primary_brand text-base font-extrabold rounded-full w-9 h-9 sm:w-10 sm:h-10 bg-[url("src/assets/lottery/indiaGreenBall.png")] bg-contain bg-no-repeat',
                                children: g != null ? g : "-"
                            })
                        }), null), r(n, () => S("Select your number")), r(_, a(me, {
                            i18nKey: "select-balls-desc",
                            get children() {
                                return ["Please select at least ", Ve(), " numbers"]
                            }
                        })), r(l, a(E, {
                            class: "flex gap-1 w-[6.25rem] h-10 rounded-full border-2 border-brand px-6 text-brand text-base font-extrabold",
                            get style() {
                                return {
                                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), ${R.darken?"#292D2E":"#FFF"}`
                                }
                            },
                            get disabled() {
                                return s().includes("-")
                            },
                            onClick: () => G(this, null, function*() {
                                var ee;
                                const g = ((ee = e.data.specMap) == null ? void 0 : ee.firstLetter) + s().join(""),
                                    j = `/platform-lottery/india-kerala/exists-ticket?lotteryId=${i.id}&ticket=${g}`,
                                    z = yield J().get(j), he = c().find(be => be === g);
                                z || he ? De(S("This number already exists")) : C([...c(), g])
                            }),
                            get children() {
                                return [a(Q, {
                                    name: "Add"
                                }), Se(() => S("Add"))]
                            }
                        }), null), d
                    }
                })
            }
        }), A), r(A, a(se, {
            get fallback() {
                return (() => {
                    var d = Ke();
                    return r(d, a(Pe, {})), d
                })()
            },
            get children() {
                return a(V, {
                    get each() {
                        return c()
                    },
                    children: d => a(Te, {
                        get num() {
                            return String(d)
                        },
                        onDelete: I
                    })
                })
            }
        }), null), r(A, a(E, {
            get class() {
                return X("h-9 flex gap-1 rounded-full border-2 border-solid", c().length === 0 && "relative")
            },
            get style() {
                return {
                    "grid-column-start": c().length > 0 ? "initial" : 2,
                    left: c().length === 0 ? U.mobile ? "initial" : "50%" : "initial",
                    "border-color": R.darken ? "rgba(228, 234, 240, 0.80)" : "rgba(58, 65, 66, 0.40)",
                    background: R.darken ? "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #292D2E" : "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #FFF"
                }
            },
            onClick: () => p(1),
            get children() {
                return [a(Q, {
                    name: "Add",
                    class: "w-4 h-4"
                }), (() => {
                    var d = Re();
                    return r(d, () => S("Add")), d
                })()]
            }
        }), null), r(m, a(N, {
            get when() {
                return !U.mobile
            },
            get children() {
                return a(et, {})
            }
        }), null), F(d => {
            var P = D() ? "none" : "auto",
                T = D() ? "grayscale(50%)" : "initial",
                M = X("grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3 max-h-52 overflow-y-auto");
            return P !== d.e && ((d.e = P) != null ? m.style.setProperty("pointer-events", P) : m.style.removeProperty("pointer-events")), T !== d.t && ((d.t = T) != null ? m.style.setProperty("filter", T) : m.style.removeProperty("filter")), M !== d.a && O(A, d.a = M), d
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), m
    })()
};

function et() {
    const e = ge(),
        i = fe(),
        t = o => G(this, null, function*() {
            const s = "/platform-lottery/india-kerala/generate-ticket";
            return yield J().get(s, {
                params: {
                    lotteryId: e.id,
                    count: o
                }
            })
        }),
        h = o => G(this, null, function*() {
            const s = yield t(o), k = v.state.betIndia.state.selectedDetailData.normalBallList.concat(s), u = i().marketList.find(D => D.marketId === Me.IndiaState), b = (u == null ? void 0 : u.oddsList[0]) || v.state.betIndia.state.selectedData, f = v.state.betIndia.state.selectedDetailData, C = (u == null ? void 0 : u.marketId) || v.state.betIndia.state.marketId, p = (u == null ? void 0 : u.name) || f.name, I = re(le({}, f), {
                betAmount: .5,
                betsNumber: k.length,
                normalBallList: k,
                name: p
            }), c = {
                selectedData: b,
                marketId: C,
                selectedDetailData: I
            };
            v.setState("betIndia", Z(D => {
                D.state = c
            }))
        });
    return q(() => {
        U.mobile && v.setState("betSlipPositon", ne.keralaPosition)
    }), de(() => {
        v.setState("betSlipPositon", ne.initPosition)
    }), (() => {
        var o = Xe();
        return r(o, a(E, {
            class: "flex w-1/3 h-12 p-2 flex-col bg-[#E4E4E4] dark:bg-[#373E3F]",
            onClick: () => h(10),
            get children() {
                return [Ue(), (() => {
                    var s = oe();
                    return r(s, () => S("Quick Pick")), s
                })()]
            }
        }), null), r(o, a(E, {
            class: "flex w-1/3 h-12 flex-col text-sm font-extrabold bg-[#E4E4E4] dark:bg-[#373E3F]",
            onClick: () => h(25),
            get children() {
                return [We(), (() => {
                    var s = oe();
                    return r(s, () => S("Quick Pick")), s
                })()]
            }
        }), null), r(o, a(E, {
            class: "flex w-1/3 h-12 text-sm font-extrabold bg-[#E4E4E4] dark:bg-[#373E3F]",
            onClick: () => v.setState("isShowIndiaStateBalls", !v.state.isShowIndiaStateBalls),
            get children() {
                return [a(N, {
                    get when() {
                        return v.state.isShowIndiaStateBalls
                    },
                    get children() {
                        return a(Q, {
                            name: "Arrow",
                            class: "fill-secondary w-5"
                        })
                    }
                }), (() => {
                    var s = Je();
                    return r(s, a(N, {
                        get when() {
                            return !v.state.isShowIndiaStateBalls
                        },
                        get fallback() {
                            return S("Close")
                        },
                        get children() {
                            return S("Customize Your Tickets")
                        }
                    })), s
                })(), a(N, {
                    get when() {
                        return !v.state.isShowIndiaStateBalls
                    },
                    get children() {
                        return a(Q, {
                            name: "Arrow",
                            class: "fill-secondary rotate-180 w-6"
                        })
                    }
                })]
            }
        }), null), F(s => (s = R.darken ? "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #323738" : "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), #FFF") != null ? o.style.setProperty("background", s) : o.style.removeProperty("background")), o
    })()
}

function mt(e) {
    return a(ue, {
        get children() {
            var i = Oe(),
                t = i.firstChild,
                h = t.nextSibling,
                o = h.nextSibling,
                s = o.nextSibling;
            return _e(t, "src", Ge), r(h, a(me, {
                i18nKey: "india-lottery-ball-sold",
                get children() {
                    return ["These tickets number ", Ze(), ", please try another one."]
                }
            })), r(o, a(Ee, {
                get balls() {
                    return e.balls
                }
            })), r(s, a(E, {
                class: "w-full text-lg font-extrabold text-primary_brand",
                type: "brand",
                onclick: () => W.pop(),
                get children() {
                    return S("Confirm")
                }
            })), F(() => O(o, X("flex max-h-52 overflow-y-auto mb-4 flex-wrap gap-3", e.balls.length > 4 ? "justify-start" : "justify-center"))), i
        }
    })
}
ce(["click"]);
export {
    mt as E, ut as I, et as Q
};