import {
    m as l,
    v as p,
    E as o,
    G as r
} from "./vendor-DYV1gSPf.js";
import {
    t as e,
    D as i
} from "./index-BSHcnsSF.js";
var s = p("<img class>");
const c = a => {
    const n = () => [{
            key: "1",
            label: e("Step") + "01",
            guideTitle: e("Open website in __browser__.", {
                browser: "Safari"
            }),
            guideDesc: e("Click to open the __browser__ on the phone desktop.", {
                browser: "Safari"
            }),
            img: (() => {
                var t = s();
                return o(() => r(t, "src", i.ios1)), t
            })()
        }, {
            key: "2",
            label: e("Step") + "02",
            guideTitle: e("Tap Sharing button."),
            guideDesc: e("Use Safari Explore APP and go to __ENV_HOST__, Then tap the Sharing Button."),
            img: (() => {
                var t = s();
                return o(() => r(t, "src", i.ios2)), t
            })()
        }, {
            key: "3",
            label: e("Step") + "03",
            guideTitle: e("Tap Add to Home Screen."),
            guideDesc: e("Press Add to Home Screen in the list popup to add to the home screen. You may need to swipe left to locate the Add to Home Screen button."),
            img: (() => {
                var t = s();
                return o(() => r(t, "src", i.ios3)), t
            })()
        }],
        d = () => [{
            key: "1",
            label: e("Step") + "01",
            guideTitle: e("Open website in __browser__.", {
                browser: "Google Chrome"
            }),
            guideDesc: e("Click to open the __browser__ on the phone desktop.", {
                browser: "Google Chrome"
            }),
            img: (() => {
                var t = s();
                return o(() => r(t, "src", i.android1)), t
            })()
        }, {
            key: "2",
            label: e("Step") + "02",
            guideTitle: e("Tap Menu button."),
            guideDesc: e("Use Google Chrome APP and go to __ENV_HOST__, Then tap the Sharing Button."),
            img: (() => {
                var t = s();
                return o(() => r(t, "src", i.android2)), t
            })()
        }, {
            key: "3",
            label: e("Step") + "03",
            guideTitle: e("Tap Menu button."),
            guideDesc: e("Press Install app in the list popup to add to the home screen. You may need to swipe left to locate the Add to Home Screen button."),
            img: (() => {
                var t = s();
                return o(() => r(t, "src", i.android3)), t
            })()
        }];
    return l(() => ({
        iOS: n(),
        android: d()
    })[a])
};
export {
    c
};