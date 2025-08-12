import {
    I as p,
    a as g,
    b as f,
    _ as o
} from "./manifest-5fcb2c8d.js";
import {
    b as v,
    c as t,
    S as m,
    i as e,
    a as s,
    t as _,
    l as n
} from "./solid-js-2e2908f8.js";
import {
    u as S
} from "./store-c851faad.js";
import {
    L as E
} from "./LotterySearchResult-984a2d46.js";
import {
    t as y
} from "./i18n-d0803583.js";
import {
    t as L
} from "./throttle-e4f3954e.js";
import "./store-2ed2b91e.js";
import "./apis-9bc5cda9.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./isObject-909534d5.js";
import "./_MapCache-9c96b8d5.js";
import "./PopularSectionItem-bc0cd3d0.js";
import "./index-0f5bf80c.js";
import "./currency-fd1e1eb4.js";
import "./CountryAvatar-6f446c9d.js";
import "./countries-a369bbd3.js";
import "./lottery-af48bec0.js";
import "./logo-c5334a6f.js";
import "./Detail.interface-808c1c29.js";
import "./debounce-f7740f4e.js";
var I = _("<section class=py-2>"),
    P = _('<div class="flex-1 bg-layer2"><section class="relative my-4">');
const b = n(() => o(() =>
        import ("./BannerSection-41b087a4.js"), ["assets/BannerSection-41b087a4.js", "assets/solid-js-2e2908f8.js", "assets/manifest-5fcb2c8d.js", "assets/i18n-d0803583.js"])),
    R = n(() => o(() =>
        import ("./UpcomingDrawSectionWrap-d3f6fbad.js"), ["assets/UpcomingDrawSectionWrap-d3f6fbad.js", "assets/solid-js-2e2908f8.js", "assets/i18n-d0803583.js", "assets/manifest-5fcb2c8d.js", "assets/UpcomingDrawSection-e293a0ac.js", "assets/currency-fd1e1eb4.js", "assets/index-0f5bf80c.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/throttle-e4f3954e.js", "assets/debounce-f7740f4e.js", "assets/isObject-909534d5.js", "assets/toNumber-e58af95e.js"])),
    w = n(() => o(() =>
        import ("./PopularSection-12db3a28.js"), ["assets/PopularSection-12db3a28.js", "assets/solid-js-2e2908f8.js", "assets/PopularSectionItem-bc0cd3d0.js", "assets/index-0f5bf80c.js", "assets/manifest-5fcb2c8d.js", "assets/currency-fd1e1eb4.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/logo-c5334a6f.js", "assets/i18n-d0803583.js", "assets/Detail.interface-808c1c29.js", "assets/store-c851faad.js", "assets/store-2ed2b91e.js", "assets/apis-9bc5cda9.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/debounce-f7740f4e.js"])),
    D = n(() => o(() =>
        import ("./WinnerSection-81dd6e85.js"), ["assets/WinnerSection-81dd6e85.js", "assets/solid-js-2e2908f8.js", "assets/currency-fd1e1eb4.js", "assets/manifest-5fcb2c8d.js", "assets/i18n-d0803583.js", "assets/index-0f5bf80c.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js"])),
    T = n(() => o(() =>
        import ("./FavouriteSection-4381b5e6.js"), ["assets/FavouriteSection-4381b5e6.js", "assets/solid-js-2e2908f8.js", "assets/store-c851faad.js", "assets/store-2ed2b91e.js", "assets/apis-9bc5cda9.js", "assets/manifest-5fcb2c8d.js", "assets/once-e92576f3.js", "assets/toNumber-e58af95e.js", "assets/isObject-909534d5.js", "assets/_MapCache-9c96b8d5.js", "assets/LikeLotteryItem-abb94401.js", "assets/index-0f5bf80c.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/i18n-d0803583.js", "assets/Detail.interface-808c1c29.js"])),
    A = n(() => o(() =>
        import ("./LatestResultsSection-9212d6a0.js"), ["assets/LatestResultsSection-9212d6a0.js", "assets/solid-js-2e2908f8.js", "assets/CountryAvatar-6f446c9d.js", "assets/countries-a369bbd3.js", "assets/lottery-af48bec0.js", "assets/manifest-5fcb2c8d.js", "assets/i18n-d0803583.js"])),
    O = n(() => o(() =>
        import ("./HowToPlaySection-5d603cfa.js"), ["assets/HowToPlaySection-5d603cfa.js", "assets/solid-js-2e2908f8.js", "assets/manifest-5fcb2c8d.js", "assets/i18n-d0803583.js", "assets/ArrowIcon-50ca1742.js"]));

function Z() {
    const {
        store: d
    } = S(), [a, h] = v(""), c = L(l => {
        h(l)
    });
    return t(m, {
        get children() {
            var l = P(),
                i = l.firstChild;
            return e(l, t(b, {}), i), e(i, t(p, {
                name: "Search",
                class: "w-6 h-6 fill-secondary absolute left-2 top-1/2 -translate-y-1/2"
            }), null), e(i, t(g, {
                class: "bg-input_darken px-10 text-base font-semibold placeholder:text-quarterary !pl-10",
                get placeholder() {
                    return y("Lottery Name")
                },
                onChange: c,
                get value() {
                    return a()
                }
            }), null), e(i, t(s, {
                get when() {
                    return a()
                },
                get children() {
                    return t(p, {
                        name: "Close",
                        onClick: () => c(""),
                        class: "cursor-pointer w-6 h-6 fill-secondary absolute right-2 top-1/2 -translate-y-1/2"
                    })
                }
            }), null), e(l, t(s, {
                get when() {
                    return !a()
                },
                get fallback() {
                    return t(E, {
                        get search() {
                            return a()
                        }
                    })
                },
                get children() {
                    return t(m, {
                        get children() {
                            var r = I();
                            return e(r, t(R, {}), null), e(r, t(w, {}), null), e(r, t(D, {}), null), e(r, t(s, {
                                get when() {
                                    var u;
                                    return f.login && ((u = d.favourteLotteries) == null ? void 0 : u.length) > 0
                                },
                                get children() {
                                    return t(T, {})
                                }
                            }), null), e(r, t(A, {}), null), e(r, t(O, {}), null), r
                        }
                    })
                }
            }), null), l
        }
    })
}
export {
    Z as
    default
};