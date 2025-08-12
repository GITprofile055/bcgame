import {
    E as n,
    t as s,
    f as i
} from "./index-BSHcnsSF.js";
import {
    k as e,
    v as l,
    y as o,
    H as g
} from "./vendor-DYV1gSPf.js";
import {
    J as m,
    W as c
} from "./common-Byjxyxqw.js";
var d = l('<div class="grid py-4 grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">');

function v() {
    return e(m, {
        get title() {
            return s("Themes")
        },
        get children() {
            return [e(n, {
                get title() {
                    return s("Themes")
                }
            }), e(u, {})]
        }
    })
}

function u() {
    const [r] = i(() => ({
        pageSize: 80,
        sectionId: "tag_recommend"
    }));
    return (() => {
        var a = d();
        return o(a, e(g, {
            get each() {
                return r() ? .tags
            },
            children: t => e(c, {
                get href() {
                    return `/tagname/${t}?label=${r()?.translatedTags[t]}`
                },
                class: "fix-light-hover rounded-xl bg-layer4 p-4 text-center font-semibold ellipsis hover:bg-layer5",
                get children() {
                    return r() ? .translatedTags[t]
                }
            })
        })), a
    })()
}
export {
    u as ThemesView, v as
    default
};