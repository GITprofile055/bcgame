var H = (e, o, i) => new Promise((r, c) => {
    var a = n => {
            try {
                t(i.next(n))
            } catch (g) {
                c(g)
            }
        },
        s = n => {
            try {
                t(i.throw(n))
            } catch (g) {
                c(g)
            }
        },
        t = n => n.done ? r(n.value) : Promise.resolve(n.value).then(a, s);
    t((i = i.apply(e, o)).next())
});
import {
    X as K,
    h as W,
    aq as Z,
    b,
    ar as ee,
    a3 as F,
    B as L,
    I as O,
    g as te,
    T as ne,
    c as T,
    u as re,
    e as _,
    E as le,
    n as R,
    P as se,
    Y as oe,
    p as ie,
    l as ae,
    s as B,
    an as ce,
    _ as de,
    j as ue
} from "./manifest-f1f40164.js";
import {
    b as v,
    d as I,
    o as U,
    i as me,
    F as j,
    S as $,
    h as ge,
    a as V,
    g as he,
    r as fe
} from "./solid-js-871c99e1.js";
import {
    g as Y,
    c as l,
    u as be,
    i as d,
    e as y,
    m as Q,
    t as m,
    j as ve,
    a as M,
    h as X
} from "./web-c89f4fb8.js";
import {
    t as A
} from "./i18n-827ab26d.js";
import {
    b as ye
} from "./router-6c6c27f7.js";
var we = m('<div class="flex h-6 justify-center py-2"><ul class="flex gap-x-1.5">'),
    xe = m('<span class="block h-full w-full rounded-full bg-brand will-change-transform">'),
    pe = m("<li>"),
    _e = m('<div class="flex h-[534px] w-full flex-col overflow-hidden bg-white_alpha5"><div class="h-[510px] w-full flex-none bg-layer2 px-4 pt-4"></div><div class="flex h-[24px] w-full justify-center bg-layer2"><div class="flex items-center">'),
    $e = m('<div class="mt-2.5 w-full">'),
    ke = m('<div class="relative h-full flex-1 bg-layer2"><div class="flec center w-full"></div><div class="absolute left-0 top-0 w-full overflow-hidden">');

function N(e, o, i) {
    const r = e[o];
    i(r), b.emit("sensorsTrack", {
        event: "promotion_button_click",
        bannerid: r.bannerId
    }), b.emit("event-tracking", {
        eventType: "button_click",
        dlgId: r.bannerId
    })
}
const Pe = e => {
    const o = ge(() => e.index < 0 ? e.index + e.dots : e.index),
        i = t => () => {
            e.cb(t), e.onChange(t)
        },
        [r, c] = v(0),
        a = {
            x: 0
        },
        s = te.to(a, {
            x: 1,
            duration: 3,
            onUpdate() {
                c(a.x)
            },
            onComplete() {
                e.onChange(t => (t + 1) % e.dots)
            },
            ease: "none"
        });
    return I(t => (e.index !== t && !e.pause && s.restart(), e.index)), I(() => {
        e.pause ? s.pause() : s.resume()
    }), V(() => s.kill()), (() => {
        var t = we(),
            n = t.firstChild;
        return d(n, l(j, {
            get each() {
                return Array(e.dots).fill(null)
            },
            children: (g, h) => (() => {
                var w = pe();
                return ve(w, "click", i(h()), !0), w.style.setProperty("transition-timing-function", "ease"), d(w, l(ne, {
                    get when() {
                        return o(h())
                    },
                    get children() {
                        var x = xe();
                        return x.style.setProperty("transform-origin", "center left"), y(f => (f = `translateX(${o(h())?`${(r()-1)*100}%`:0})`) != null ? x.style.setProperty("transform", f) : x.style.removeProperty("transform")), x
                    }
                })), y(() => M(w, T(o(h()) ? "w-11" : "w-1.5", "h-1.5 cursor-pointer overflow-hidden rounded-full bg-layer4 transition-all duration-500"))), w
            })()
        })), t
    })()
};

function Ie(e) {
    const [o, i] = v();
    K(() => o());
    let r;
    const [c, a] = v(0), s = () => e.promotionsList.length;

    function t() {
        var f;
        return (((f = r.track.details) == null ? void 0 : f.abs) || 0) % r.slides.length
    }
    const n = W(),
        [g, h] = v(!1),
        w = () => !n() || g();
    I(() => {
        c() >= s() ? (a(0), e.setSelect(e.promotionsList[0])) : e.setSelect(e.promotionsList[c()])
    }), I(() => {
        t() !== c() && r.moveToIdx(c())
    }), Z(() => r.container, {
        mouseenter: () => {
            h(!0)
        },
        mouseleave: () => {
            h(!1)
        }
    }), U(() => {
        b.emit("sensorsTrack", {
            event: "promotion_banner_show",
            bannerid: e.select.bannerId
        }), b.emit("event-tracking", {
            eventType: "dialog_view",
            dlgId: e.select.bannerId
        })
    });
    const x = me(() => l(Pe, {
        get pause() {
            return w()
        },
        get index() {
            return c()
        },
        get dots() {
            return s()
        },
        onChange: a,
        cb: f => {
            N(e.promotionsList, f, e.setSelect)
        }
    }));
    return (() => {
        var f = _e(),
            E = f.firstChild,
            G = E.nextSibling,
            J = G.firstChild;
        return be(i, E), d(E, l(ee, {
            class: "h-44 sm:h-auto",
            auto: 0,
            ref(u) {
                var k = r;
                typeof k == "function" ? k(u) : r = u
            },
            options: {
                dragSpeed: .2,
                loop: !0,
                slides: {
                    spacing: 16
                }
            },
            get children() {
                return l(j, {
                    get each() {
                        return e.promotionsList
                    },
                    children: u => {
                        const k = !!u.buttonName,
                            S = k ? 432 : 480;
                        return (() => {
                            var D = ke(),
                                C = D.firstChild,
                                p = C.nextSibling;
                            return S + "px" != null ? C.style.setProperty("height", S + "px") : C.style.removeProperty("height"), d(C, l(F, {})), S + "px" != null ? p.style.setProperty("height", S + "px") : p.style.removeProperty("height"), p.style.setProperty("background-size", "100% 100%"), p.style.setProperty("background-repeat", "no-repeat"), d(D, l($, {
                                when: k,
                                get children() {
                                    var P = $e();
                                    return d(P, l(L, {
                                        type: "brand",
                                        class: "w-full",
                                        onClick: () => {
                                            u.buttonLink && window.open(u.buttonLink), b.emit("sensorsTrack", {
                                                event: "promotion_button_click",
                                                bannerid: u.bannerId
                                            })
                                        },
                                        get children() {
                                            return u.buttonName
                                        }
                                    })), P
                                }
                            }), null), y(P => (P = `url(${u.bannerUrl}?v=4&auto=format&dpr=2&w=600)`) != null ? p.style.setProperty("background-image", P) : p.style.removeProperty("background-image")), D
                        })()
                    }
                })
            }
        })), d(J, l($, {
            get when() {
                return e.promotionsList.length > 1
            },
            get fallback() {
                return x()
            },
            get children() {
                return [l(L, {
                    class: "center mr-2 flex w-4 p-0 2xl:-left-6 2xl:w-6",
                    onClick: () => a(u => (N(e.promotionsList, u - 1, e.setSelect), u - 1)),
                    get children() {
                        return l(O, {
                            name: "Arrow",
                            class: "size-4 text-second hover:text-primary"
                        })
                    }
                }), Q(() => x()), l(L, {
                    class: "center ml-2 flex w-4 p-0 2xl:-right-6 2xl:w-6",
                    get classList() {
                        return {
                            hidden: e.promotionsList.length < 2
                        }
                    },
                    onClick: () => a(u => (N(e.promotionsList, u + 1, e.setSelect), u + 1)),
                    get children() {
                        return l(O, {
                            name: "Arrow",
                            class: "size-4 rotate-180 text-second hover:text-primary"
                        })
                    }
                })]
            }
        })), f
    })()
}
Y(["click"]);
var q = m("<div>"),
    Se = m('<div class="relative flex h-12 w-full"><div class="flex h-full w-full items-center bg-layer2 px-3"><div class="flex-auto truncate"></div> '),
    Ce = m('<div class="mt-4 px-4">'),
    Le = m('<div class="w-full bg-white_alpha5"><div class="relative h-full flex-1 bg-layer2 pb-4"><div class="flec center h-60 w-full bg-layer3"></div><div class="absolute left-0 top-0 h-60 w-full overflow-hidden">');

function Te(e) {
    const [o, i] = v(!1);
    return (() => {
        var r = Se(),
            c = r.firstChild,
            a = c.firstChild;
        return a.nextSibling, r.$$click = () => i(s => !s), d(a, () => e.select.title), d(c, l(O, {
            get class() {
                return T("size-4 flex-none -rotate-180 transition-all", o() && "!-rotate-90")
            },
            name: "Arrow"
        }), null), d(r, l($, {
            get when() {
                return o()
            },
            get children() {
                var s = q();
                return d(s, l(le, {
                    class: "h-full",
                    get children() {
                        return l(j, {
                            get each() {
                                return e.promotionsList
                            },
                            children: t => (() => {
                                var n = q();
                                return n.$$click = () => e.setSelect(t), d(n, () => t.title), y(() => M(n, T("h-12 items-center self-stretch truncate border-t border-third px-3 py-1 leading-10", e.select === t && "bg-[#D3E9E0] dark:bg-[#293F35]"))), n
                            })()
                        })
                    }
                })), y(() => M(s, T("absolute left-0 top-12 z-10 h-36 w-full rounded-b-xl bg-layer1"))), s
            }
        }), null), r
    })()
}

function Ee(e) {
    return re(), U(() => {
        b.emit("sensorsTrack", {
            event: "promotion_banner_show",
            bannerid: e.select.bannerId
        }), b.emit("event-tracking", {
            eventType: "dialog_view",
            dlgId: e.select.bannerId
        })
    }), (() => {
        var o = Le(),
            i = o.firstChild,
            r = i.firstChild,
            c = r.nextSibling;
        return d(o, l(Te, e), i), d(r, l(F, {})), c.style.setProperty("background-position", "center"), c.style.setProperty("background-size", "cover"), d(i, l($, {
            get when() {
                return e.select.buttonName
            },
            get children() {
                var a = Ce();
                return d(a, l(L, {
                    type: "brand",
                    class: "w-full",
                    onClick: () => {
                        const {
                            buttonLink: s
                        } = e.select || {};
                        s && (_.isAPP ? window.location.href = s : window.open(s)), b.emit("sensorsTrack", {
                            event: "promotion_button_click",
                            bannerid: e.select.bannerId
                        }), b.emit("event-tracking", {
                            eventType: "button_click",
                            dlgId: e.select.bannerId
                        })
                    },
                    get children() {
                        return e.select.buttonName
                    }
                })), a
            }
        }), null), y(a => (a = `url(${e.select.bannerUrl})`) != null ? c.style.setProperty("background-image", a) : c.style.removeProperty("background-image")), o
    })()
}
Y(["click"]);
var De = m('<div class="center flex size-full bg-layer4">'),
    He = m('<div class="center flex h-60 w-full">'),
    Ae = m('<div class="flex h-10 items-center overflow-hidden bg-layer4 pl-4"><span>');
const Ne = 30,
    z = {
        title: {
            "border-top-left-radius": "0.75rem",
            "border-top-right-radius": "0.75rem"
        },
        container: {
            mobile: void 0,
            desktop: {
                "border-bottom-left-radius": "0.75rem",
                "border-bottom-right-radius": "0.75rem"
            }
        }
    };

function ze(e) {
    const [o, i] = v(!1), [r, c] = v(null);
    V(() => {
        o() && window.localStorage.setItem("hidden-promotions-one-day", String(Date.now()))
    });
    const [, a] = R(v([]), {
        name: "display-only-once-promotions"
    }), s = t => {
        t.displayOnlyOnce === 1 && a(n => n.includes(t.bannerId) ? n : n.length >= Ne ? [...n.slice(1), t.bannerId] : [...n, t.bannerId]), c(t)
    };
    return U(() => s(e.promotionsList[0])), l(se, {
        get title() {
            return (() => {
                var t = De();
                return d(t, (() => {
                    var n = Q(() => !!_.mobile);
                    return () => {
                        var g, h;
                        return n() ? A("Exclusive Promotions") : (h = (g = r()) == null ? void 0 : g.title) != null ? h : A("Exclusive Promotions")
                    }
                })()), y(n => X(t, z.title, n)), t
            })()
        },
        class: "promotion-popup",
        get style() {
            return _.mobile ? {
                width: "100%"
            } : {
                width: "800px",
                "padding-top": "48px"
            }
        },
        get children() {
            return l($, {
                get when() {
                    return r()
                },
                get fallback() {
                    return (() => {
                        var t = He();
                        return d(t, l(F, {})), t
                    })()
                },
                children: t => [l($, {
                    get when() {
                        return _.mobile
                    },
                    get fallback() {
                        return l(Ie, {
                            get promotionsList() {
                                return e.promotionsList
                            },
                            get select() {
                                return t()
                            },
                            setSelect: s
                        })
                    },
                    get children() {
                        return l(Ee, {
                            get promotionsList() {
                                return e.promotionsList
                            },
                            get select() {
                                return t()
                            },
                            setSelect: s
                        })
                    }
                }), (() => {
                    var n = Ae(),
                        g = n.firstChild;
                    return d(n, l(oe, {
                        get value() {
                            return o()
                        },
                        onChange: i
                    }), g), d(g, () => A("Don’t display this for next 1 day")), y(h => X(n, _.mobile ? z.container.mobile : z.container.desktop, h)), n
                })()]
            })
        }
    })
}

function Oe(e) {
    return H(this, null, function*() {
        const [o] = R(v([]), {
            name: "display-only-once-promotions"
        }), i = e.filter(r => !o().includes(r.bannerId) && !!r.bannerUrl);
        return i.length > 0 && ie.push(() => l(ze, {
            promotionsList: i
        }), {
            close: !1
        })
    })
}

function Me() {
    return H(this, null, function*() {
        try {
            return yield de().get(`/home/main/pop/banner/${ue.areaCode}/`)
        } catch (e) {
            return console.error("Failed to fetch IPL condition:", e), []
        }
    })
}
const Ve = () => {
    const e = ye(),
        {
            isBrAuditHost: o
        } = ae.getHostType(_.host),
        i = ["/", `/${B.lang}`, `/${B.lang}/`],
        r = i.includes(e.pathname),
        c = () => i.includes(e.pathname),
        [a] = he(() => r && Fe(), Me, {
            initialValue: []
        });
    I(fe(a, s => {
        s.length > 0 && setTimeout(() => {
            c() && !o && ce.add(() => Oe(a()))
        }, 4e3)
    }))
};

function Fe() {
    const e = window.localStorage.getItem("hidden-promotions-one-day");
    return e ? Date.now() - Number(e) > 864e5 : !0
}
export {
    Ve as
    default, Ve as schedulePromotions
};