import {
    e as o,
    a6 as p,
    j as e,
    an as m
} from "./manifest-f1f40164.js";
import {
    d as a
} from "./solid-js-871c99e1.js";
import {
    f as s,
    F as n
} from "./feature-gating-c05395d6.js";
import {
    c,
    p as u
} from "./createHasNewUserSpin-b62cb438.js";
import {
    p as f
} from "./reward-after-login-ec951fff.js";
import "./tools-47f326df.js";
import "./web-c89f4fb8.js";
import "./index-8a7d18d7.js";
import "./http-4df94233.js";
import "./baseService-2efdc30b.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./_MapCache-91cc8331.js";
import "./index-c5ebc757.js";
import "./i18n-827ab26d.js";
import "./api-utils-b2769cf2.js";
import "./const-3e281bed.js";
import "./sounds-a881e21e.js";
import "./_commonjsHelpers-08c562be.js";
import "./toast-bonus-receive-1029f494.js";
import "./cancel-bonus-6aaccc88.js";
import "./noop-cb277961.js";
import "./index-85cb0a21.js";
import "./currency-format-5cd6ca42.js";
import "./animate-number-af733b14.js";
import "./last-862de5a8.js";
import "./countdown-9ad59544.js";
import "./helpers-44d70238.js";
import "./utils-38f210e8.js";
import "./vip-9182fb4b.js";
import "./enums-fd45c1cf.js";
import "./index-d5947389.js";
const J = () => {
    const r = o.initSearchParams.get("bcn"),
        t = o.initSearchParams.get("bcn_bonus"),
        {
            autoSpin: i
        } = c();
    a(() => {
        s.isEnabled(n.NEW_USER) && (r && t ? p(() => e.login).then(() => f({
            currency: r,
            amount: Number(t)
        })) : i() && setTimeout(() => {
            m.add(() => u())
        }, 1e3))
    })
};
export {
    J as
    default, J as scheduleNewUserReward
};