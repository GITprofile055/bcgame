import {
    t as m,
    s as _e,
    p as T,
    R as $e,
    c as be,
    v as E,
    w as ye,
    u as xe,
    g as le,
    x as ae,
    y as W,
    z as J,
    A as we
} from "./index-BSHcnsSF.js";
import {
    d as A,
    m as $,
    M as oe,
    v as c,
    y as a,
    k as e,
    E as ie,
    F as Y,
    H as I,
    b as w,
    h as Z,
    j as ce,
    Y as _,
    J as j,
    a2 as Se,
    ao as Ie,
    f as ue,
    O as ke,
    ak as Ce,
    a9 as Te,
    K as Le,
    Z as Be,
    _ as O
} from "./vendor-DYV1gSPf.js";
import {
    u as de,
    e as N,
    H as ge,
    M as Re,
    I as me,
    k as K,
    b as B,
    G as he,
    F as L,
    E as H,
    L as G,
    j as q,
    B as D,
    Y as S,
    n as pe,
    i as V,
    a as P,
    t as Fe,
    al as Pe
} from "./common-Byjxyxqw.js";
import {
    I as fe
} from "./Icon-BgwktVOY.js";
import {
    S as Ne
} from "./index-QTA-ca3p.js";
const De = () => {
        const {
            isUsHost: h
        } = de.getHostType(N.host);
        return [{
            label: m("All Games"),
            value: "allgames",
            iconname: "Home"
        }, {
            label: m("__ENV_SITE__ Originals"),
            value: "original",
            iconname: "Classicdice"
        }, {
            label: m("Hot Games"),
            value: "hot",
            iconname: "Hot"
        }, {
            label: m("Slots"),
            value: "slots",
            iconname: "Slots"
        }, {
            label: m("Live Casino"),
            value: "live",
            iconname: "Live",
            hidden: h
        }, {
            label: m("Table Game"),
            value: "table",
            iconname: "Tablegame"
        }, {
            label: m("New Releases"),
            value: "newreleases",
            iconname: "Newreleases"
        }, {
            label: m("Feature Buy-in"),
            value: "feature",
            iconname: "Featurebuyin",
            hidden: h
        }, {
            label: m("Providers"),
            value: "providers",
            iconname: "Favorites"
        }, {
            label: m("Top Picks"),
            value: "toppicks",
            iconname: "Toppicks"
        }].filter(s => !s.hidden)
    },
    Ee = () => [{
        label: m("Popular"),
        value: "popular",
        sort: 1
    }, {
        label: m("You may like"),
        value: "youmaylike",
        sort: 2
    }, {
        label: m("Recommend"),
        value: "recommend",
        sort: 3
    }, {
        label: m("Newest"),
        value: "new",
        sort: 4
    }, {
        label: "A-Z",
        value: "a-z",
        sort: 5
    }, {
        label: "Z-A",
        value: "z-a",
        sort: 6
    }];
var Ae = c('<div class="w-full overflow-x-auto hide-scroll"><div class="flex flex-nowrap items-center gap-1 !p-0">'),
    je = c("<button><span>");
const ve = function(r) {
    const s = $(() => De()),
        d = $(() => s().find(p => p.value === r.tab) || s()[0]),
        i = oe(() => d().value);
    return (() => {
        var p = Ae(),
            v = p.firstChild;
        return a(v, e(I, {
            get each() {
                return s()
            },
            children: u => (() => {
                var n = je(),
                    o = n.firstChild;
                return n.$$click = l => {
                    l.preventDefault(), r.setTab(u.value)
                }, a(n, e(fe, {
                    get name() {
                        return u.iconname
                    },
                    get class() {
                        return `flex-none h-4.5 w-4.5 ${i(u.value)?"text-brand":"text-secondary"}`
                    }
                }), o), a(o, () => u.label), ie(l => {
                    var t = `flex h-10 items-center justify-center rounded-lg px-2 py-0 sm:hover:bg-layer3 ${i(u.value)&&"!bg-tab_selected"}`,
                        g = `whitespace-nowrap ml-1 ${i(u.value)?"font-extrabold":"text-secondary"}`;
                    return t !== l.e && Y(n, l.e = t), g !== l.t && Y(o, l.t = g), l
                }, {
                    e: void 0,
                    t: void 0
                }), n
            })()
        })), p
    })()
};
A(["click"]);
var He = c('<div class="mt-2 flex w-full items-center gap-2 sm:w-auto">'),
    Ge = c('<span class="whitespace-nowrap text-secondary">:'),
    Me = c('<span class="font-semibold ml-1">'),
    ze = c('<span class="mr-1 text-secondary">'),
    Oe = c("<span>"),
    Ye = c("<div class=mb-1>"),
    Ze = c('<div class="flex h-10 overflow-hidden center">');
const M = function(r) {
    let s = !0;
    const d = Ee(),
        [i, p] = w(""),
        v = $(() => d.filter((n, o) => r.sort.includes(o)).map(n => n.value));

    function u(n) {
        const o = d.find(l => l.value === n);
        return o ? o.label : ""
    }
    return Z(() => {
        v().find(o => o === r.selectSortBy) || ce(() => r.changeSelectSortBy("popular"))
    }), (() => {
        var n = He();
        return a(n, e(_, {
            get when() {
                return !r.search && r.sort.length > 1
            },
            get children() {
                return e(ge, {
                    get value() {
                        return r.selectSortBy
                    },
                    get options() {
                        return v()
                    },
                    get onChange() {
                        return r.changeSelectSortBy
                    },
                    class: "flex-1 bg-layer3 sm:w-[288px] sm:flex-none",
                    labelFormat: o => [(() => {
                        var l = Ge(),
                            t = l.firstChild;
                        return a(l, () => m("Sort By"), t), l
                    })(), (() => {
                        var l = Me();
                        return a(l, () => u(o())), l
                    })()],
                    children: o => u(o())
                })
            }
        }), null), a(n, e(_, {
            get when() {
                return r.providers.length > 0
            },
            get children() {
                return e(Re, {
                    throttle: 1500,
                    class: "flex-1 bg-layer3 sm:w-[288px] sm:flex-none",
                    get value() {
                        return r.selectProvider
                    },
                    get options() {
                        return r.providers
                    },
                    onChange: o => {
                        o && r.changeSelectProvider(o), s || T.trackEvent("provider_filter", {
                            providers_filter: o.map(l => l.providerName),
                            section_id: r.section_id
                        }), s = !1
                    },
                    labelFormat: o => [(() => {
                        var l = ze();
                        return a(l, () => m("Providers") + ":"), l
                    })(), (() => {
                        var l = Oe();
                        return a(l, (() => {
                            var t = j(() => o().length > 0);
                            return () => t() ? "+" + o().length : m("All")
                        })()), l
                    })()],
                    layerRender: o => [(() => {
                        var l = Ye();
                        return a(l, e(he, {
                            class: "h-11",
                            get value() {
                                return i()
                            },
                            get placeholder() {
                                return m("Search")
                            },
                            onChange: p,
                            get children() {
                                return e(L, {
                                    name: "Search",
                                    class: "order-first mr-2 h-6 w-6 text-tertiary"
                                })
                            }
                        })), l
                    })(), o, e(_e, {
                        onClear: () => r.changeSelectProvider([])
                    })],
                    children: o => {
                        const l = o().providerName.includes("BC Originals");
                        return (() => {
                            var t = Ze();
                            return a(t, e(me, {
                                class: "h-auto w-24",
                                alt: "provider",
                                args: "w=200",
                                get src() {
                                    return l ? B.darken ? K.assets(N.inActive ? "/logo/logo_festival.png" : "/logo/logo.png") : K.assets(N.inActive ? "/logo/logo_w_festival.png" : "/logo/logo_w.png") : B.darken ? o().logo : o().logoWhite
                                }
                            })), t
                        })()
                    }
                })
            }
        }), null), n
    })()
};
var qe = c("<div class=w-full>"),
    Ue = c('<div class="mt-4 flex w-full items-center justify-center px-4 h-16"><span class="text-center font-semibold text-error">'),
    We = c('<div class="mt-4 flex h-40 w-full items-center justify-center">'),
    Je = c('<div class="mt-4 flex h-64 w-full items-center justify-center">');
const Ke = function(r) {
    const [s, d] = w("popular"), [i, p] = w([]), v = $(() => {
        if (!r.searchResult || r.searchResult.length <= 0) return [];
        if (!r.providers || r.providers.length <= 0) return [];
        let n = [];
        return r.searchResult.map(o => {
            const l = r.providers.find(t => t.providerName == o.providerName);
            l && n.findIndex(g => g.providerId === l.providerId) < 0 && n.push(l)
        }), n
    }), u = $(() => {
        if (i().length <= 0) return r.searchResult;
        const n = i().map(o => o.providerName);
        return r.searchResult.filter(o => n.includes(o.providerName))
    });
    return [e(M, {
        get selectSortBy() {
            return s()
        },
        changeSelectSortBy: d,
        get selectProvider() {
            return i()
        },
        changeSelectProvider: p,
        get providers() {
            return v()
        },
        sort: [0],
        get section_id() {
            return r.section_id
        }
    }), e(_, {
        get when() {
            return r.search && r.search.length > 2
        },
        get fallback() {
            return (() => {
                var n = Ue(),
                    o = n.firstChild;
                return a(o, () => m("Search requires at least 3 characters")), n
            })()
        },
        get children() {
            return e(_, {
                get when() {
                    return !r.searching
                },
                get fallback() {
                    return (() => {
                        var n = We();
                        return a(n, e(G, {})), n
                    })()
                },
                get children() {
                    return e(_, {
                        get when() {
                            return r.searchResult.length > 0
                        },
                        get fallback() {
                            return (() => {
                                var n = Je();
                                return a(n, e(H, {})), n
                            })()
                        },
                        get children() {
                            var n = qe();
                            return a(n, e($e, {
                                get list() {
                                    return u()
                                },
                                get track() {
                                    return {
                                        search_module: "explore search",
                                        key_words: r.search,
                                        is_filter_provider: i().length !== 0
                                    }
                                }
                            })), n
                        }
                    })
                }
            })
        }
    })]
};
var Ve = c("<div class=mt-4>"),
    Xe = c('<div class="mt-4 w-full">');
const Qe = function(r) {
    const [s, d] = w("allgames"), [i, p] = be(() => r.search, {
        search_module: "explore search",
        side_filter: "Casino"
    }), v = $(() => {
        if (p()) return [];
        switch (s()) {
            case "allgames":
                return i();
            case "original":
                return i().filter(u => u.categoryName.includes("Original"));
            case "slots":
                return i().filter(u => u.categoryName.includes("Slots"));
            case "live":
                return i().filter(u => u.categoryName.includes("Live"));
            case "hot":
                return i().filter(u => u.retrieveId.includes("hot"));
            case "newreleases":
                return i().filter(u => u.retrieveId.includes("new_game"));
            default:
                return []
        }
    });
    return (() => {
        var u = Xe();
        return a(u, e(ve, {
            get tab() {
                return s()
            },
            setTab: d
        }), null), a(u, e(_, {
            get when() {
                return s() === "toppicks" || s() === "providers"
            },
            get fallback() {
                return e(Ke, {
                    get providers() {
                        return r.providers
                    },
                    get section_id() {
                        return "explore_" + s()
                    },
                    get search() {
                        return r.search
                    },
                    get searching() {
                        return p()
                    },
                    get searchResult() {
                        return v()
                    }
                })
            },
            get children() {
                var n = Ve();
                return a(n, e(H, {})), n
            }
        }), null), u
    })()
};
var et = c("<div class=w-full>");
const tt = function(r) {
    const [s, d] = w("popular"), [i, p] = w([]), v = $(() => {
        let n = [];
        return i().map(o => n.push(o.providerName)), n.join(",")
    }), u = $(() => s() === "new" ? "explore_all" : "explore_" + s());
    return [e(M, {
        get selectSortBy() {
            return s()
        },
        changeSelectSortBy: d,
        get selectProvider() {
            return i()
        },
        changeSelectProvider: n => {
            n.length > 0 && s() === "recommend" ? ce(() => {
                d("popular"), p(n)
            }) : p(n)
        },
        get providers() {
            return r.providers
        },
        get sort() {
            return i().length > 0 ? [0, 3, 4, 5] : [0, 2, 3]
        },
        section_id: "explore_all"
    }), (() => {
        var n = et();
        return a(n, e(E, {
            get source() {
                return j(() => i().length > 0)() ? {
                    sectionId: rt(s()),
                    showingBlocked: 0,
                    sortBy: s(),
                    providerName: v()
                } : {
                    sectionId: nt(s()),
                    showingBlocked: 0
                }
            },
            get sectionId() {
                return u()
            }
        })), n
    })()]
};

function rt(h) {
    return h === "popular" ? "explore_popular" : h === "youmaylike" ? "slots_you_may_like" : "casino_slots"
}

function nt(h) {
    return h === "popular" ? "explore_popular" : h === "new" ? "casino_new" : "home_recommend"
}
var st = c('<div class="grid w-full gap-2 grid-cols-2 pt-2 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">'),
    lt = c('<div class="mt-2 flex w-full items-center justify-center h-60">');
const at = function(r) {
    const s = q();
    return (() => {
        var d = st();
        return a(d, e(_, {
            get when() {
                return r.providers.length > 0
            },
            get fallback() {
                return (() => {
                    var i = lt();
                    return a(i, e(G, {})), i
                })()
            },
            get children() {
                return e(I, {
                    get each() {
                        return r.providers
                    },
                    children: i => e(D, {
                        class: "rounded-xl bg-layer4 h-16 p-0",
                        onClick: () => s(`/provider/${i.providerName}`),
                        get children() {
                            return e(me, {
                                class: "h-12 w-auto",
                                alt: "provider",
                                get src() {
                                    return B.darken ? i.logo : i.logoWhite
                                },
                                args: "w=200"
                            })
                        }
                    })
                })
            }
        })), d
    })()
};
var ot = c("<div class=w-full>");
const X = function(r) {
    return (() => {
        var s = ot();
        return a(s, e(M, {
            selectSortBy: "popular",
            changeSelectSortBy: () => {},
            selectProvider: [],
            changeSelectProvider: () => {},
            providers: [],
            sort: [0],
            get section_id() {
                return "explore_" + r.category
            }
        }), null), a(s, e(E, {
            get source() {
                return {
                    sectionId: r.sectionId || "casino_bc",
                    showingBlocked: 0
                }
            },
            get sectionId() {
                return "explore_" + r.category
            }
        }), null), s
    })()
};
var it = c("<div class=w-full>");
const Q = function(r) {
    const [s, d] = w("popular"), i = ye(r.category === "slots" ? 1 : 4), [p, v] = w([]), u = $(() => {
        let l = [];
        return p().map(t => l.push(t.providerName)), l.join(",")
    }), n = $(() => {
        const l = r.category === "slots";
        return s() === "popular" ? l ? "slots_popular" : "live_popular" : l ? "casino_slots" : "casino_live"
    }), o = $(() => s() === "recommend" || s() === "popular" || s() === "youmaylike" ? "explore_" + r.category + "_" + s() : "explore_" + r.category);
    return [e(M, {
        get selectSortBy() {
            return s()
        },
        changeSelectSortBy: d,
        get selectProvider() {
            return p()
        },
        changeSelectProvider: v,
        get providers() {
            return i()
        },
        sort: [0, 1, 3, 4, 5],
        get section_id() {
            return "explore_" + r.category
        }
    }), (() => {
        var l = it();
        return a(l, e(E, {
            get source() {
                return {
                    sectionId: n(),
                    showingBlocked: 0,
                    sortBy: s(),
                    providerName: u()
                }
            },
            get sectionId() {
                return o()
            }
        })), l
    })()]
};
var ct = c("<div class=w-full>");
const R = function(r) {
        const s = $(() => ut(r.tag));
        return (() => {
            var d = ct();
            return a(d, e(E, {
                get source() {
                    return {
                        sectionId: s().sectionId,
                        tag: s().tag,
                        showingBlocked: 0,
                        sortBy: "popular"
                    }
                },
                get sectionId() {
                    return "explore_" + r.tag
                }
            })), d
        })()
    },
    ut = h => {
        switch (h) {
            case "newreleases":
                return {
                    sectionId: "casino_new",
                    tag: "New Releases",
                    providerTag: "casino_new"
                };
            case "featurebuyin":
                return {
                    sectionId: "casino_tag",
                    tag: "Feature buy-in",
                    providerTag: "Feature buy-in"
                };
            case "tablegame":
                return {
                    sectionId: "casino_tag",
                    tag: "Table games",
                    providerTag: "Table games"
                };
            default:
                return {
                    sectionId: "casino_hot",
                    tag: "Hot Games",
                    providerTag: "casino_hot"
                }
        }
    };
var dt = c('<div class="casino-games-tab mt-4 w-full">');

function gt(h) {
    switch (h) {
        case "allgames":
            return 0;
        case "original":
            return 1;
        case "toppicks":
            return 2;
        case "slots":
            return 3;
        case "live":
            return 4;
        case "hot":
            return 5;
        case "providers":
            return 6;
        case "newreleases":
            return 7;
        case "feature":
            return 8;
        case "table":
            return 9;
        default:
            return 0
    }
}
const mt = function(r) {
        const [s, d] = w("allgames");
        return (() => {
            var i = dt();
            return a(i, e(ve, {
                get tab() {
                    return s()
                },
                setTab: d
            }), null), a(i, e(S, {
                get value() {
                    return gt(s())
                },
                class: "hidden",
                get children() {
                    return [e(S.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(tt, {
                                get providers() {
                                    return r.providers
                                }
                            })
                        }
                    }), e(S.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(X, {
                                sectionId: "casino_bc",
                                category: "original"
                            })
                        }
                    }), e(S.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(X, {
                                sectionId: "casino_picks_for_you",
                                category: "toppicks"
                            })
                        }
                    }), e(S.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(Q, {
                                category: "slots"
                            })
                        }
                    }), e(S.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(Q, {
                                category: "live"
                            })
                        }
                    }), e(S.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(R, {
                                get providers() {
                                    return r.providers
                                },
                                tag: "hot",
                                category: "tag"
                            })
                        }
                    }), e(S.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(at, {
                                get providers() {
                                    return r.providers
                                }
                            })
                        }
                    }), e(S.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(R, {
                                get providers() {
                                    return r.providers
                                },
                                tag: "newreleases",
                                category: "newreleases"
                            })
                        }
                    }), e(S.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(R, {
                                get providers() {
                                    return r.providers
                                },
                                tag: "featurebuyin",
                                category: "feature"
                            })
                        }
                    }), e(S.TabItem, {
                        class: "min-h-48",
                        get children() {
                            return e(R, {
                                get providers() {
                                    return r.providers
                                },
                                tag: "tablegame",
                                category: "table"
                            })
                        }
                    })]
                }
            }), null), i
        })()
    },
    ht = function(r) {
        const s = xe();
        return e(Se, {
            get children() {
                return e(_, {
                    get when() {
                        return !!r.search
                    },
                    get fallback() {
                        return e(mt, {
                            get providers() {
                                return s()
                            }
                        })
                    },
                    get children() {
                        return e(Qe, {
                            get search() {
                                return r.search
                            },
                            get providers() {
                                return s()
                            }
                        })
                    }
                })
            }
        })
    };
var ee = c("<span class=ml-1>"),
    pt = c('<div class="h-10 w-full overflow-x-auto overflow-y-hidden box-border"><div class="flex h-10 flex-nowrap items-center">'),
    ft = c('<div class="w-full pb-6">'),
    te = c('<div class="flex w-full items-center justify-center h-60">'),
    vt = c('<div class="w-full sm:flex sm:flex-wrap sm:justify-between">'),
    _t = c('<div class="mt-4 w-full pb-4 lg:w-[49.5%]">'),
    $t = c('<div class="mt-4 w-full"><div class="flex w-full items-center mb-1.5"><span class="text-base font-semibold"></span><button class="ml-auto flex h-8 items-center rounded-lg bg-layer4 px-2 py-0"><span></span></button></div><div class="w-full overflow-x-auto"><div class="flex flex-nowrap gap-2">'),
    bt = c('<div class="w-full flex-none lg:w-1/2 xl:w-1/3">');
const yt = Ie((h, r) => pe().get(`/platform-sports/v14/live100/${h}/${r}/`, {
        cache: !0
    })),
    xt = function() {
        const r = q(),
            [s, d] = ue({
                loading: !0,
                tab: -1,
                sportsData: null
            });
        ke(() => {
            yt(le(), B.lang).then(n => {
                d({
                    loading: !1,
                    sportsData: n
                })
            }).catch(console.log)
        });
        const i = $(() => s.sportsData ? .sportItems ? s.sportsData.sportItems.map(n => n) : []),
            p = oe(() => s.tab),
            v = $(() => s.sportsData ? .sportItems.map(n => ({
                sports: n.sportInfo,
                match: n.tournamentItems[0].matches,
                category: n.tournamentItems[0].categoryInfo,
                tournament: n.tournamentItems[0].tournamentInfo
            }))),
            u = $(() => {
                const n = s.sportsData ? .sportItems[s.tab];
                return {
                    sports: n ? .sportInfo,
                    match: n ? .tournamentItems[0].matches,
                    category: n ? .tournamentItems[0].categoryInfo,
                    tournament: n ? .tournamentItems[0].tournamentInfo
                }
            });
        return (() => {
            var n = ft();
            return a(n, e(_, {
                get when() {
                    return !s.loading
                },
                get fallback() {
                    return (() => {
                        var o = te();
                        return a(o, e(G, {})), o
                    })()
                },
                get children() {
                    return e(_, {
                        get when() {
                            return !!s.sportsData
                        },
                        get fallback() {
                            return (() => {
                                var o = te();
                                return a(o, e(H, {})), o
                            })()
                        },
                        get children() {
                            return [(() => {
                                var o = pt(),
                                    l = o.firstChild;
                                return a(l, e(D, {
                                    get class() {
                                        return V("flex h-10 flex-none items-center overflow-hidden rounded-xl px-2 py-0", p(-1) && "sports-active-tab")
                                    },
                                    onClick: () => d({
                                        tab: -1
                                    }),
                                    get children() {
                                        return [e(fe, {
                                            name: "Live",
                                            class: "size-6 text-secondary"
                                        }), (() => {
                                            var t = ee();
                                            return a(t, () => m("Live")), t
                                        })()]
                                    }
                                }), null), a(l, e(I, {
                                    get each() {
                                        return i()
                                    },
                                    children: (t, g) => e(D, {
                                        get class() {
                                            return V("flex h-10 flex-none items-center overflow-hidden rounded-xl px-2 py-0", p(g()) && "sports-active-tab")
                                        },
                                        onClick: () => d({
                                            tab: g()
                                        }),
                                        get children() {
                                            return [e(ae, {
                                                get id() {
                                                    return t.tournamentItems ? .[0].categoryInfo.sport_id
                                                },
                                                class: "tab-sports-icon"
                                            }), (() => {
                                                var f = ee();
                                                return a(f, () => t.sportInfo.name), f
                                            })()]
                                        }
                                    })
                                }), null), o
                            })(), e(_, {
                                get when() {
                                    return s.tab < 0
                                },
                                get fallback() {
                                    return (() => {
                                        var o = vt();
                                        return a(o, e(I, {
                                            get each() {
                                                return u().match
                                            },
                                            children: l => (() => {
                                                var t = _t();
                                                return a(t, e(W, {
                                                    get img_path() {
                                                        return s.sportsData ? .imgDomain
                                                    },
                                                    matchInfo: l,
                                                    get sportInfo() {
                                                        return u().sports
                                                    },
                                                    get categoryInfo() {
                                                        return u().category
                                                    },
                                                    get tournamentInfo() {
                                                        return u().tournament
                                                    },
                                                    get markets() {
                                                        return s.sportsData ? .description.markets
                                                    },
                                                    get statuses() {
                                                        return s.sportsData ? .description.statuses
                                                    }
                                                })), t
                                            })()
                                        })), o
                                    })()
                                },
                                get children() {
                                    return e(I, {
                                        get each() {
                                            return v()
                                        },
                                        children: o => (() => {
                                            var l = $t(),
                                                t = l.firstChild,
                                                g = t.firstChild,
                                                f = g.nextSibling,
                                                b = f.firstChild,
                                                x = t.nextSibling,
                                                y = x.firstChild;
                                            return a(g, () => o.sports.name), f.$$click = () => {
                                                P.emit("close-explore"), r(`/sports/?bt-path=%2Flive%2F${o.sports.slug}-${o.category.sport_id}`)
                                            }, a(b, () => m("All")), a(f, e(L, {
                                                name: "Arrow",
                                                class: "size-4 rotate-180 ml-1"
                                            }), null), a(y, e(I, {
                                                get each() {
                                                    return o.match
                                                },
                                                children: k => (() => {
                                                    var C = bt();
                                                    return a(C, e(W, {
                                                        get img_path() {
                                                            return s.sportsData ? .imgDomain
                                                        },
                                                        matchInfo: k,
                                                        get sportInfo() {
                                                            return o.sports
                                                        },
                                                        get categoryInfo() {
                                                            return o.category
                                                        },
                                                        get tournamentInfo() {
                                                            return o.tournament
                                                        },
                                                        get markets() {
                                                            return s.sportsData ? .description.markets
                                                        },
                                                        get statuses() {
                                                            return s.sportsData ? .description.statuses
                                                        }
                                                    })), C
                                                })()
                                            })), l
                                        })()
                                    })
                                }
                            })]
                        }
                    })
                }
            })), n
        })()
    };
A(["click"]);
var wt = c("<span>");
const F = function(r) {
    const s = $(() => {
        if (!r.snippets || r.snippets.length <= 0) return [{
            text: r.text,
            isSearch: !1
        }];
        let d = r.snippets.flat(1);
        d.unshift(0), d.push(r.text.length);
        let i = [],
            p = 0;
        for (let v = 1; v < d.length; v++) {
            const u = r.text.slice(p, d[v]),
                n = v % 2 === 0;
            p = d[v], i.push({
                text: u,
                isSearch: n
            })
        }
        return i
    });
    return e(I, {
        get each() {
            return s()
        },
        children: d => (() => {
            var i = wt();
            return a(i, () => d.text), ie(() => Y(i, d.isSearch ? "text-brand" : "")), i
        })()
    })
};
var St = c('<div class="flex items-center"><span class=text-secondary></span><span class=ml-auto><span class=text-brand></span><span class="text-secondary ml-1">'),
    re = c('<p class="text-secondary mt-6">'),
    It = c('<div class="mt-4 w-full">'),
    ne = c('<div class="flex w-full items-center justify-center h-60">'),
    kt = c('<div class="flex h-6 w-full items-center mt-3"><p></p><p class="ml-auto text-secondary uppercase">'),
    Ct = c('<div class="flex w-full items-center mt-3"><div class="sports-search-tournament-icon flex items-center justify-center rounded-full bg-layer4 h-12 w-12"></div><div class=ml-2><p></p><p class=text-secondary>'),
    Tt = c('<div class="mr-2 flex h-6 items-center rounded-md px-2 text-brand">'),
    Lt = c('<div class="flex w-full items-center mt-3"><div class="sports-search-match-icon flex flex-none items-center justify-center h-12 w-12"></div><div class="sports-search-match-icon flex flex-none items-center justify-center h-12 w-12"></div><div class="ml-2 flex-1"><p class="overflow-hidden whitespace-nowrap"><span class=mx-1> - </span></p><div class="flex items-center"><p class=text-secondary>');
const Bt = function(r) {
    const s = le(),
        d = q(),
        [i, p] = ue({
            searching: !0,
            img_path: "",
            searchResult: []
        }),
        v = Ce((l, t, g) => {
            p({
                searching: !0
            }), pe().post("/platform-sports/v14/search/", {
                query: l,
                lang: t,
                brandId: g
            }).then(f => {
                f && f.found && p({
                    searching: !1,
                    img_path: f.imgDomain,
                    searchResult: f.found
                })
            }).catch(f => {
                Fe(f), p({
                    searching: !1
                })
            }).finally(() => {
                T.trackEvent("search_sent", {
                    search_module: "explore search",
                    side_filter: "Sports",
                    key_words: l
                })
            })
        }, 1e3);
    Z(() => {
        r.search && v(r.search, B.lang, s)
    });
    const u = $(() => i.searchResult.filter(l => l.type === "tournament")),
        n = $(() => i.searchResult.filter(l => l.type === "category")),
        o = $(() => i.searchResult.filter(l => l.type === "match").sort(l => l.live ? -1 : 1));
    return (() => {
        var l = It();
        return a(l, e(_, {
            get when() {
                return !i.searching
            },
            get fallback() {
                return (() => {
                    var t = ne();
                    return a(t, e(G, {})), t
                })()
            },
            get children() {
                return e(_, {
                    get when() {
                        return i.searchResult.length > 0
                    },
                    get fallback() {
                        return (() => {
                            var t = ne();
                            return a(t, e(H, {})), t
                        })()
                    },
                    get children() {
                        return [(() => {
                            var t = St(),
                                g = t.firstChild,
                                f = g.nextSibling,
                                b = f.firstChild,
                                x = b.nextSibling;
                            return a(g, () => m("Search Result")), a(b, () => i.searchResult.length), a(x, (() => {
                                var y = j(() => i.searchResult.length > 1);
                                return () => y() ? m("results") : m("result")
                            })()), t
                        })(), e(_, {
                            get when() {
                                return n().length > 0
                            },
                            get children() {
                                return e(I, {
                                    get each() {
                                        return n()
                                    },
                                    children: t => (() => {
                                        var g = kt(),
                                            f = g.firstChild,
                                            b = f.nextSibling;
                                        return g.$$click = () => {
                                            T.trackEvent("search_result_click", {
                                                search_module: "explore search",
                                                side_filter: "Sports",
                                                game_name: t.sportInfo ? .name || "",
                                                game_id: t.id,
                                                game_category: t.categoryInfo ? .name,
                                                game_tag: "",
                                                provider: t.parent_sport_id,
                                                producer: "Sports",
                                                key_words: r.search,
                                                is_filter_provider: !0
                                            }), P.emit("close-explore"), d(`/sports?bt-path=%2F${t.parent_sport_id}%2F${t.id}`)
                                        }, a(f, e(F, {
                                            get text() {
                                                return t.categoryInfo ? .name || ""
                                            },
                                            get snippets() {
                                                return t.snippets[0]
                                            }
                                        })), a(b, () => t.sportInfo ? .name), g
                                    })()
                                })
                            }
                        }), e(_, {
                            get when() {
                                return u().length > 0
                            },
                            get children() {
                                return [(() => {
                                    var t = re();
                                    return a(t, () => m("League")), t
                                })(), e(I, {
                                    get each() {
                                        return u()
                                    },
                                    children: t => (() => {
                                        var g = Ct(),
                                            f = g.firstChild,
                                            b = f.nextSibling,
                                            x = b.firstChild,
                                            y = x.nextSibling;
                                        return g.$$click = () => {
                                            T.trackEvent("search_result_click", {
                                                search_module: "explore search",
                                                side_filter: "Sports",
                                                game_name: t.sportInfo ? .name || "",
                                                game_id: t.id,
                                                game_category: t.categoryInfo ? .name,
                                                game_tag: "",
                                                provider: t.parent_sport_id,
                                                producer: "Sports",
                                                key_words: r.search,
                                                is_filter_provider: !0
                                            }), P.emit("close-explore"), d(`/sports?bt-path=%2F${t.sportInfo?.slug}%2F${t.categoryInfo?.slug}%2F${t.tournamentInfo?.slug}-${t.id}`)
                                        }, a(f, e(ae, {
                                            get id() {
                                                return t.parent_sport_id || "0"
                                            }
                                        })), a(x, e(F, {
                                            get text() {
                                                return t.tournamentInfo ? .name || ""
                                            },
                                            get snippets() {
                                                return t.snippets[0]
                                            }
                                        })), a(y, () => `${t.sportInfo?.name} . ${t.categoryInfo?.name}`), g
                                    })()
                                })]
                            }
                        }), e(_, {
                            get when() {
                                return o().length > 0
                            },
                            get children() {
                                return [(() => {
                                    var t = re();
                                    return a(t, () => m("Matches")), t
                                })(), e(I, {
                                    get each() {
                                        return o()
                                    },
                                    children: t => (() => {
                                        var g = Lt(),
                                            f = g.firstChild,
                                            b = f.nextSibling,
                                            x = b.nextSibling,
                                            y = x.firstChild,
                                            k = y.firstChild,
                                            C = y.nextSibling,
                                            U = C.firstChild;
                                        return g.$$click = () => {
                                            T.trackEvent("search_result_click", {
                                                search_module: "explore search",
                                                side_filter: "Sports",
                                                game_name: t.sportInfo ? .name || "",
                                                game_id: t.id,
                                                game_category: t.categoryInfo ? .name,
                                                game_tag: "",
                                                provider: t.parent_sport_id,
                                                producer: "Sports",
                                                key_words: r.search,
                                                is_filter_provider: !0
                                            }), P.emit("close-explore"), d(`/sports?bt-path=%2F${t.sportInfo?.slug}%2F${t.categoryInfo?.slug}%2F${t.tournamentInfo?.slug}%2F${t.matchInfo?.desc.slug}-${t.id}`)
                                        }, a(f, e(J, {
                                            get img_path() {
                                                return i.img_path
                                            },
                                            get id() {
                                                return t.matchInfo ? .desc.competitors[0] ? .id || ""
                                            },
                                            get country_code() {
                                                return t.matchInfo ? .desc.competitors[0] ? .country_code || ""
                                            },
                                            get sports_id() {
                                                return t.parent_sport_id || ""
                                            }
                                        })), a(b, e(J, {
                                            get img_path() {
                                                return i.img_path
                                            },
                                            get id() {
                                                return t.matchInfo ? .desc.competitors[1] ? .id || ""
                                            },
                                            get country_code() {
                                                return t.matchInfo ? .desc.competitors[1] ? .country_code || ""
                                            },
                                            get sports_id() {
                                                return t.parent_sport_id || ""
                                            }
                                        })), a(y, e(F, {
                                            get text() {
                                                return t.matchInfo ? .desc.competitors[0] ? .name || ""
                                            },
                                            get snippets() {
                                                return t.snippets[0]
                                            }
                                        }), k), a(y, e(F, {
                                            get text() {
                                                return t.matchInfo ? .desc.competitors[1] ? .name || ""
                                            },
                                            get snippets() {
                                                return t.snippets[1]
                                            }
                                        }), null), a(C, e(_, {
                                            get when() {
                                                return t.live
                                            },
                                            get children() {
                                                var z = Tt();
                                                return z.style.setProperty("background", "rgba(49, 238, 136, 0.10)"), a(z, () => m("Live")), z
                                            }
                                        }), U), a(U, () => new Date((t.matchInfo ? .desc.scheduled || 0) * 1e3).toLocaleString()), g
                                    })()
                                })]
                            }
                        })]
                    }
                })
            }
        })), l
    })()
};
A(["click"]);
var Rt = c('<div class="w-full mt-4">');
const se = function(r) {
    return (() => {
        var s = Rt();
        return a(s, e(_, {
            get when() {
                return r.search
            },
            get fallback() {
                return e(xt, {})
            },
            get children() {
                return e(Bt, {
                    get search() {
                        return r.search
                    }
                })
            }
        })), s
    })()
};
var Ft = c("<div class=order-first>"),
    Pt = c('<div class="explore-content w-full"><div class="relative flex w-full items-center gap-2">'),
    Nt = c('<div class="flex h-8 items-center border-solid px-2 border-r border-third"><span class="mr-1 font-extrabold">'),
    Dt = c("<span class=font-extrabold>");
const Et = we("ExploreLotteryPortal"),
    zt = function() {
        const [r] = Te(), [s, d] = w(!1), {
            isSportsHost: i,
            isUsHost: p
        } = de.getHostType(N.host), v = r.type || "casino", u = $(() => p ? [{
            label: m("Casino"),
            value: "casino"
        }] : [{
            label: m("Casino"),
            value: "casino"
        }, {
            label: m("Sports"),
            value: "sports"
        }, {
            label: m("Lottery"),
            value: "lottery"
        }]), [n, o] = w(""), [l, t] = w(u().find(g => g.value === v) || u()[0]);
        return Z(() => {
            l() && o("")
        }), (() => {
            var g = Pt(),
                f = g.firstChild;
            return Le(b => Pe(() => b, () => {
                d(!1)
            }), f), a(f, e(he, {
                get value() {
                    return n()
                },
                onChange: o,
                get placeholder() {
                    return m("Search games")
                },
                onFocus: () => d(!0),
                class: "flex-1 bg-layer4 px-2 py-1.5",
                get children() {
                    return [e(_, {
                        when: !i,
                        get children() {
                            var b = Ft();
                            return b.$$click = x => x.preventDefault(), a(b, e(ge, {
                                get value() {
                                    return l()
                                },
                                get options() {
                                    return u()
                                },
                                onChange: t,
                                size: "s",
                                class: "-my-1.5 -ml-2 h-11 border-none bg-transparent px-0",
                                labelRender: x => (() => {
                                    var y = Nt(),
                                        k = y.firstChild;
                                    return a(k, () => x().label), a(y, e(L, {
                                        name: "Arrow",
                                        class: "-rotate-90 size-4"
                                    }), null), y
                                })(),
                                children: x => (() => {
                                    var y = Dt();
                                    return a(y, () => x().label), y
                                })()
                            })), b
                        }
                    }), e(L, {
                        name: "Search",
                        class: "order-first text-secondary size-6"
                    }), e(_, {
                        get when() {
                            return !!n()
                        },
                        get children() {
                            return e(D, {
                                class: "flex items-center justify-center rounded-md bg-layer6 size-6 p-0",
                                onClick: b => {
                                    b.preventDefault(), o("")
                                },
                                get children() {
                                    return e(L, {
                                        name: "Close",
                                        class: "text-secondary size-4"
                                    })
                                }
                            })
                        }
                    })]
                }
            }), null), a(f, e(_, {
                get when() {
                    return j(() => !!(l().value === "casino" && s()))() && n().length < 3
                },
                get children() {
                    return e(Ne, {
                        setSearch: o
                    })
                }
            }), null), a(g, e(_, {
                when: !i,
                get fallback() {
                    return e(se, {
                        get search() {
                            return n()
                        }
                    })
                },
                get children() {
                    return e(Be, {
                        get children() {
                            return [e(O, {
                                get when() {
                                    return l().value === "casino"
                                },
                                get children() {
                                    return e(ht, {
                                        get search() {
                                            return n()
                                        }
                                    })
                                }
                            }), e(O, {
                                get when() {
                                    return l().value === "sports"
                                },
                                get children() {
                                    return e(se, {
                                        get search() {
                                            return n()
                                        }
                                    })
                                }
                            }), e(O, {
                                get when() {
                                    return l().value === "lottery"
                                },
                                get children() {
                                    return e(Et, {
                                        get search() {
                                            return n()
                                        }
                                    })
                                }
                            })]
                        }
                    })
                }
            }), null), g
        })()
    };
A(["click"]);
export {
    zt as
    default
};