import {
    t as e
} from "./i18n-c6009799.js";
const a = [{
    value: 1,
    label: () => e("Withdrawal delays exceeding 7 days"),
    short: () => e("Withdraw Issue")
}, {
    value: 2,
    label: () => e("Account suspension without a clear or valid reason"),
    short: () => e("Account Suspension")
}, {
    value: 3,
    label: () => e("Concerns regarding algorithm transparency"),
    short: () => e("Algorithm Transparency")
}, {
    value: 4,
    label: () => e("Complaints related to VIP service quality"),
    short: () => e("VIP Service Quality")
}, {
    value: 5,
    label: () => e("Other"),
    short: () => e("Other")
}];

function l(r) {
    const t = a.find(o => o.value === Number(r));
    return t ? t.short() : a[5].short()
}
export {
    a as c, l as g
};