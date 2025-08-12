var P = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty,
    $ = Object.prototype.propertyIsEnumerable;
var m = (t, e, s) => e in t ? P(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[e] = s,
    f = (t, e) => {
        for (var s in e || (e = {})) U.call(e, s) && m(t, s, e[s]);
        if (d)
            for (var s of d(e)) $.call(e, s) && m(t, s, e[s]);
        return t
    };
var p = (t, e, s) => new Promise((u, r) => {
    var o = n => {
            try {
                y(s.next(n))
            } catch (c) {
                r(c)
            }
        },
        i = n => {
            try {
                y(s.throw(n))
            } catch (c) {
                r(c)
            }
        },
        y = n => n.done ? u(n.value) : Promise.resolve(n.value).then(o, i);
    y((s = s.apply(t, e)).next())
});
import {
    G as v,
    j as a,
    y as g,
    e as H
} from "./manifest-0e8055eb.js";
import {
    u as R
} from "./useCommonPostPR-b629c60a.js";

function T(t) {
    return v(t, ([e, s]) => a().post(e, s), {
        expires: 1e3
    })
}
var h;
(t => {
    function e(r) {
        return T(() => {
            const o = r();
            return o && [`/payment/deposit/crypto/${o.currencyName}/address/`, o]
        })[0]
    }
    t.useAddress = e;

    function s() {
        return p(this, null, function*() {
            return a().post("/payment/lnurl/pay/")
        })
    }
    t.satsPay = s;

    function u(r) {
        return p(this, null, function*() {
            return a().post("/payment/deposit/crypto/create-sats/", {
                amount: r
            })
        })
    }
    t.satsCreat = u
})(h || (h = {}));
var l;
(t => {
    function e(r) {
        const {
            isUsHost: o
        } = g.getHostType(H.host);
        return R(`/payment/deposit${o?"/us":""}/history/`, r)
    }
    t.useDepositHistory = e;

    function s(r) {
        const {
            isUsHost: o
        } = g.getHostType(H.host);
        return a().post(`/payment/deposit${o?"/us":""}/history/`, r)
    }
    t.getDepositHistory = s;

    function u(r) {
        return p(this, null, function*() {
            return a().get(`/payment/deposit/order/${r}/`)
        })
    }
    t.getDepositDetail = u
})(l || (l = {}));
var D;
(t => {
    function e(o, i, y, n) {
        return p(this, null, function*() {
            return a().post("/payment/deposit/fiat/kyc/", {
                currencyName: o,
                wayName: i,
                method: y,
                channel: n
            })
        })
    }
    t.depositKyc = e;

    function s(o) {
        return p(this, null, function*() {
            return a().post("/payment/deposit/fiat/create/", f({}, o))
        })
    }
    t.deposit = s;

    function u(o) {
        return p(this, null, function*() {
            return a().get(`/payment/deposit/fiat/${o}/methods/`)
        })
    }
    t.depositMethods = u;

    function r(o, i) {
        return p(this, null, function*() {
            return a().post("/payment/deposit/fiat/order/updateUTR/", {
                orderId: o,
                utr: i
            })
        })
    }
    t.updateUtr = r
})(D || (D = {}));
export {
    D,
    h as a,
    l as b
};