var te = Object.defineProperty,
    ee = Object.defineProperties;
var ne = Object.getOwnPropertyDescriptors;
var ht = Object.getOwnPropertySymbols;
var re = Object.prototype.hasOwnProperty,
    ie = Object.prototype.propertyIsEnumerable;
var pt = (t, e, n) => e in t ? te(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n,
    B = (t, e) => {
        for (var n in e || (e = {})) re.call(e, n) && pt(t, n, e[n]);
        if (ht)
            for (var n of ht(e)) ie.call(e, n) && pt(t, n, e[n]);
        return t
    },
    gt = (t, e) => ee(t, ne(e));
var Q = (t, e, n) => new Promise((r, i) => {
    var a = h => {
            try {
                o(n.next(h))
            } catch (l) {
                i(l)
            }
        },
        s = h => {
            try {
                o(n.throw(h))
            } catch (l) {
                i(l)
            }
        },
        o = h => h.done ? r(h.value) : Promise.resolve(h.value).then(a, s);
    o((n = n.apply(t, e)).next())
});
import {
    r as Vt,
    c as E,
    p as Ft,
    x as se,
    v as mt,
    D as ae,
    f as st,
    o as oe,
    e as zt,
    b as le,
    d as yt,
    j as ce,
    s as H,
    i as x,
    u as ue,
    a as at,
    F as Rt,
    g as vt,
    t as R,
    k as fe,
    S as de
} from "./solid-js-2e2908f8.js";
import {
    u as Bt
} from "./currency-fd1e1eb4.js";
import {
    u as Ut,
    m as xt,
    b as he,
    g as qt,
    h as pe,
    B as bt,
    i as ge
} from "./manifest-5fcb2c8d.js";
import {
    t as I
} from "./i18n-d0803583.js";
import {
    c as Z
} from "./index-0f5bf80c.js";
import {
    b as me
} from "./CountryAvatar-6f446c9d.js";
import {
    f as ye
} from "./lottery-af48bec0.js";
import "./countries-a369bbd3.js";
const ve = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAMFBMVEUj8IcAAAAi74gl8Icj74cj7okj74kj7ogn64kk7okk7okj7ogl8Ikj8Ikk7ogk7okFjRj2AAAAD3RSTlMzACoUH+Vzpg3Mv5lmZqYg4eflAAAA5ElEQVQoz3WSvQ3CMBCFH38RBUgkoaAkgoKSMAFhAjYgG1BDhbIEJSUlI8AIbMAIVID4kUJ8L8KJbF7jp0++853v4Ir8GTAM6YkmEA00SgSQEXXxU5SjvkZVogQFBYJ4SV8DM2lFGRqXUdMF44qR8Ola621MF8IjWaTpjSxAR85jmukttgLJ7qSik/I1TNXRIJorX4c8uCT6yJMQXYke0NoRvaB1IHqCMgKZ/kJ0Z3qzCJbaJopZqqUhtu2ots952z7IVnsShLYvdDdlVLOMwz401zNH2zMXwFwTrhc1+rdy5mJ+AYt6bxsiBf7PAAAAAElFTkSuQmCC";
var xe = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;

function wt(t) {
    const e = {};
    let n;
    for (; n = xe.exec(t);) e[n[1]] = n[2];
    return e
}

function be(t, e) {
    if (typeof t == "string") {
        if (typeof e == "string") return `${t};${e}`;
        t = wt(t)
    } else typeof e == "string" && (e = wt(e));
    return B(B({}, t), e)
}

function Nt(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function we(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
const Wt = (t, e, n) => Math.min(Math.max(n, t), e),
    O = {
        duration: .3,
        delay: 0,
        endDelay: 0,
        repeat: 0,
        easing: "ease"
    },
    N = t => typeof t == "number",
    V = t => Array.isArray(t) && !N(t[0]),
    Ae = (t, e, n) => {
        const r = e - t;
        return ((n - t) % r + r) % r + t
    };

function Se(t, e) {
    return V(t) ? t[Ae(0, t.length, e)] : t
}
const Kt = (t, e, n) => -n * t + n * e + t,
    Jt = () => {},
    j = t => t,
    ft = (t, e, n) => e - t === 0 ? 1 : (n - t) / (e - t);

function Ht(t, e) {
    const n = t[t.length - 1];
    for (let r = 1; r <= e; r++) {
        const i = ft(0, e, r);
        t.push(Kt(n, 1, i))
    }
}

function Ee(t) {
    const e = [0];
    return Ht(e, t - 1), e
}

function _e(t, e = Ee(t.length), n = j) {
    const r = t.length,
        i = r - e.length;
    return i > 0 && Ht(e, i), a => {
        let s = 0;
        for (; s < r - 2 && !(a < e[s + 1]); s++);
        let o = Wt(0, 1, ft(e[s], e[s + 1], a));
        return o = Se(n, s)(o), Kt(t[s], t[s + 1], o)
    }
}
const Xt = t => Array.isArray(t) && N(t[0]),
    ot = t => typeof t == "object" && !!t.createAnimation,
    W = t => typeof t == "function",
    $e = t => typeof t == "string",
    tt = {
        ms: t => t * 1e3,
        s: t => t / 1e3
    },
    Yt = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    Te = 1e-7,
    Ce = 12;

function Oe(t, e, n, r, i) {
    let a, s, o = 0;
    do s = e + (n - e) / 2, a = Yt(s, r, i) - t, a > 0 ? n = s : e = s; while (Math.abs(a) > Te && ++o < Ce);
    return s
}

function U(t, e, n, r) {
    if (t === e && n === r) return j;
    const i = a => Oe(a, 0, 1, t, n);
    return a => a === 0 || a === 1 ? a : Yt(i(a), e, r)
}
const Me = (t, e = "end") => n => {
        n = e === "end" ? Math.min(n, .999) : Math.max(n, .001);
        const r = n * t,
            i = e === "end" ? Math.floor(r) : Math.ceil(r);
        return Wt(0, 1, i / t)
    },
    De = {
        ease: U(.25, .1, .25, 1),
        "ease-in": U(.42, 0, 1, 1),
        "ease-in-out": U(.42, 0, .58, 1),
        "ease-out": U(0, 0, .58, 1)
    },
    Ie = /\((.*?)\)/;

function At(t) {
    if (W(t)) return t;
    if (Xt(t)) return U(...t);
    const e = De[t];
    if (e) return e;
    if (t.startsWith("steps")) {
        const n = Ie.exec(t);
        if (n) {
            const r = n[1].split(",");
            return Me(parseFloat(r[0]), r[1].trim())
        }
    }
    return j
}
class je {
    constructor(e, n = [0, 1], {
        easing: r,
        duration: i = O.duration,
        delay: a = O.delay,
        endDelay: s = O.endDelay,
        repeat: o = O.repeat,
        offset: h,
        direction: l = "normal",
        autoplay: p = !0
    } = {}) {
        if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = j, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((c, A) => {
                this.resolve = c, this.reject = A
            }), r = r || O.easing, ot(r)) {
            const c = r.createAnimation(n);
            r = c.easing, n = c.keyframes || n, i = c.duration || i
        }
        this.repeat = o, this.easing = V(r) ? j : At(r), this.updateDuration(i);
        const _ = _e(n, h, V(r) ? r.map(At) : j);
        this.tick = c => {
            var A;
            a = a;
            let g = 0;
            this.pauseTime !== void 0 ? g = this.pauseTime : g = (c - this.startTime) * this.rate, this.t = g, g /= 1e3, g = Math.max(g - a, 0), this.playState === "finished" && this.pauseTime === void 0 && (g = this.totalDuration);
            const u = g / this.duration;
            let v = Math.floor(u),
                b = u % 1;
            !b && u >= 1 && (b = 1), b === 1 && v--;
            const T = v % 2;
            (l === "reverse" || l === "alternate" && T || l === "alternate-reverse" && !T) && (b = 1 - b);
            const C = g >= this.totalDuration ? 1 : Math.min(b, 1),
                S = _(this.easing(C));
            e(S), this.pauseTime === void 0 && (this.playState === "finished" || g >= this.totalDuration + s) ? (this.playState = "finished", (A = this.resolve) === null || A === void 0 || A.call(this, S)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick))
        }, p && this.play()
    }
    play() {
        const e = performance.now();
        this.playState = "running", this.pauseTime !== void 0 ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
    }
    pause() {
        this.playState = "paused", this.pauseTime = this.t
    }
    finish() {
        this.playState = "finished", this.tick(0)
    }
    stop() {
        var e;
        this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (e = this.reject) === null || e === void 0 || e.call(this, !1)
    }
    cancel() {
        this.stop(), this.tick(this.cancelTimestamp)
    }
    reverse() {
        this.rate *= -1
    }
    commitStyles() {}
    updateDuration(e) {
        this.duration = e, this.totalDuration = e * (this.repeat + 1)
    }
    get currentTime() {
        return this.t
    }
    set currentTime(e) {
        this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
    }
    get playbackRate() {
        return this.rate
    }
    set playbackRate(e) {
        this.rate = e
    }
}
class Pe {
    setAnimation(e) {
        this.animation = e, e == null || e.finished.then(() => this.clearAnimation()).catch(() => {})
    }
    clearAnimation() {
        this.animation = this.generator = void 0
    }
}
const et = new WeakMap;

function Gt(t) {
    return et.has(t) || et.set(t, {
        transforms: [],
        values: new Map
    }), et.get(t)
}

function ke(t, e) {
    return t.has(e) || t.set(e, new Pe), t.get(e)
}
const Le = ["", "X", "Y", "Z"],
    Ve = ["translate", "scale", "rotate", "skew"],
    F = {
        x: "translateX",
        y: "translateY",
        z: "translateZ"
    },
    St = {
        syntax: "<angle>",
        initialValue: "0deg",
        toDefaultUnit: t => t + "deg"
    },
    Fe = {
        translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: t => t + "px"
        },
        rotate: St,
        scale: {
            syntax: "<number>",
            initialValue: 1,
            toDefaultUnit: j
        },
        skew: St
    },
    z = new Map,
    G = t => `--motion-${t}`,
    Y = ["x", "y", "z"];
Ve.forEach(t => {
    Le.forEach(e => {
        Y.push(t + e), z.set(G(t + e), Fe[t])
    })
});
const ze = (t, e) => Y.indexOf(t) - Y.indexOf(e),
    Re = new Set(Y),
    dt = t => Re.has(t),
    Be = (t, e) => {
        F[e] && (e = F[e]);
        const {
            transforms: n
        } = Gt(t);
        Nt(n, e), t.style.transform = Qt(n)
    },
    Qt = t => t.sort(ze).reduce(Ue, "").trim(),
    Ue = (t, e) => `${t} ${e}(var(${G(e)}))`,
    lt = t => t.startsWith("--"),
    Et = new Set;

function qe(t) {
    if (!Et.has(t)) {
        Et.add(t);
        try {
            const {
                syntax: e,
                initialValue: n
            } = z.has(t) ? z.get(t) : {};
            CSS.registerProperty({
                name: t,
                inherits: !1,
                syntax: e,
                initialValue: n
            })
        } catch (e) {}
    }
}
const nt = (t, e) => document.createElement("div").animate(t, e),
    _t = {
        cssRegisterProperty: () => typeof CSS != "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        partialKeyframes: () => {
            try {
                nt({
                    opacity: [1]
                })
            } catch (t) {
                return !1
            }
            return !0
        },
        finished: () => !!nt({
            opacity: [0, 1]
        }, {
            duration: .001
        }).finished,
        linearEasing: () => {
            try {
                nt({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (t) {
                return !1
            }
            return !0
        }
    },
    rt = {},
    L = {};
for (const t in _t) L[t] = () => (rt[t] === void 0 && (rt[t] = _t[t]()), rt[t]);
const Ne = .015,
    We = (t, e) => {
        let n = "";
        const r = Math.round(e / Ne);
        for (let i = 0; i < r; i++) n += t(ft(0, r - 1, i)) + ", ";
        return n.substring(0, n.length - 2)
    },
    $t = (t, e) => W(t) ? L.linearEasing() ? `linear(${We(t,e)})` : O.easing : Xt(t) ? Ke(t) : t,
    Ke = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`;

function Je(t, e) {
    for (let n = 0; n < t.length; n++) t[n] === null && (t[n] = n ? t[n - 1] : e());
    return t
}
const He = t => Array.isArray(t) ? t : [t];

function ct(t) {
    return F[t] && (t = F[t]), dt(t) ? G(t) : t
}
const q = {
    get: (t, e) => {
        e = ct(e);
        let n = lt(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
        if (!n && n !== 0) {
            const r = z.get(e);
            r && (n = r.initialValue)
        }
        return n
    },
    set: (t, e, n) => {
        e = ct(e), lt(e) ? t.style.setProperty(e, n) : t.style[e] = n
    }
};

function Xe(t, e = !0) {
    if (!(!t || t.playState === "finished")) try {
        t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
    } catch (n) {}
}

function Ye(t, e) {
    var n;
    let r = (e == null ? void 0 : e.toDefaultUnit) || j;
    const i = t[t.length - 1];
    if ($e(i)) {
        const a = ((n = i.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0 ? void 0 : n[2]) || "";
        a && (r = s => s + a)
    }
    return r
}

function Ge() {
    return window.__MOTION_DEV_TOOLS_RECORD
}

function Qe(t, e, n, r = {}, i) {
    const a = Ge(),
        s = r.record !== !1 && a;
    let o, {
        duration: h = O.duration,
        delay: l = O.delay,
        endDelay: p = O.endDelay,
        repeat: _ = O.repeat,
        easing: c = O.easing,
        persist: A = !1,
        direction: g,
        offset: u,
        allowWebkitAcceleration: v = !1,
        autoplay: b = !0
    } = r;
    const T = Gt(t),
        C = dt(e);
    let S = L.waapi();
    C && Be(t, e);
    const m = ct(e),
        $ = ke(T.values, m),
        f = z.get(m);
    return Xe($.animation, !(ot(c) && $.generator) && r.record !== !1), () => {
        const w = () => {
            var y, k;
            return (k = (y = q.get(t, m)) !== null && y !== void 0 ? y : f == null ? void 0 : f.initialValue) !== null && k !== void 0 ? k : 0
        };
        let d = Je(He(n), w);
        const K = Ye(d, f);
        if (ot(c)) {
            const y = c.createAnimation(d, e !== "opacity", w, m, $);
            c = y.easing, d = y.keyframes || d, h = y.duration || h
        }
        if (lt(m) && (L.cssRegisterProperty() ? qe(m) : S = !1), C && !L.linearEasing() && (W(c) || V(c) && c.some(W)) && (S = !1), S) {
            f && (d = d.map(M => N(M) ? f.toDefaultUnit(M) : M)), d.length === 1 && (!L.partialKeyframes() || s) && d.unshift(w());
            const y = {
                delay: tt.ms(l),
                duration: tt.ms(h),
                endDelay: tt.ms(p),
                easing: V(c) ? void 0 : $t(c, h),
                direction: g,
                iterations: _ + 1,
                fill: "both"
            };
            o = t.animate({
                [m]: d,
                offset: u,
                easing: V(c) ? c.map(M => $t(M, h)) : void 0
            }, y), o.finished || (o.finished = new Promise((M, J) => {
                o.onfinish = M, o.oncancel = J
            }));
            const k = d[d.length - 1];
            o.finished.then(() => {
                A || (q.set(t, m, k), o.cancel())
            }).catch(Jt), v || (o.playbackRate = 1.000001)
        } else if (i && C) d = d.map(y => typeof y == "string" ? parseFloat(y) : y), d.length === 1 && d.unshift(parseFloat(w())), o = new i(y => {
            q.set(t, m, K ? K(y) : y)
        }, d, Object.assign(Object.assign({}, r), {
            duration: h,
            easing: c
        }));
        else {
            const y = d[d.length - 1];
            q.set(t, m, f && N(y) ? f.toDefaultUnit(y) : y)
        }
        return s && a(t, e, d, {
            duration: h,
            delay: l,
            easing: c,
            repeat: _,
            offset: u
        }, "motion-one"), $.setAnimation(o), o && !b && o.pause(), o
    }
}
const Ze = (t, e) => t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);

function tn(t, e) {
    var n;
    return typeof t == "string" ? e ? ((n = e[t]) !== null && n !== void 0 || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
}

function Zt(t, e) {
    var n = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
    return n
}
const en = {
    any: 0,
    all: 1
};

function nn(t, e, {
    root: n,
    margin: r,
    amount: i = "any"
} = {}) {
    if (typeof IntersectionObserver == "undefined") return () => {};
    const a = tn(t),
        s = new WeakMap,
        o = l => {
            l.forEach(p => {
                const _ = s.get(p.target);
                if (p.isIntersecting !== !!_)
                    if (p.isIntersecting) {
                        const c = e(p);
                        W(c) ? s.set(p.target, c) : h.unobserve(p.target)
                    } else _ && (_(p), s.delete(p.target))
            })
        },
        h = new IntersectionObserver(o, {
            root: n,
            rootMargin: r,
            threshold: typeof i == "number" ? i : en[i]
        });
    return a.forEach(l => h.observe(l)), () => h.disconnect()
}

function rn(t, e) {
    return typeof t != typeof e ? !0 : Array.isArray(t) && Array.isArray(e) ? !sn(t, e) : t !== e
}

function sn(t, e) {
    const n = e.length;
    if (n !== t.length) return !1;
    for (let r = 0; r < n; r++)
        if (e[r] !== t[r]) return !1;
    return !0
}

function an(t) {
    return typeof t == "object"
}

function Tt(t, e) {
    if (an(t)) return t;
    if (t && e) return e[t]
}
let P;

function on() {
    if (!P) return;
    const t = P.sort(cn).map(un);
    t.forEach(Ct), t.forEach(Ct), P = void 0
}

function it(t) {
    P ? Nt(P, t) : (P = [t], requestAnimationFrame(on))
}

function ln(t) {
    P && we(P, t)
}
const cn = (t, e) => t.getDepth() - e.getDepth(),
    un = t => t.animateUpdates(),
    Ct = t => t.next(),
    Ot = (t, e) => new CustomEvent(t, {
        detail: {
            target: e
        }
    });

function ut(t, e, n) {
    t.dispatchEvent(new CustomEvent(e, {
        detail: {
            originalEvent: n
        }
    }))
}

function Mt(t, e, n) {
    t.dispatchEvent(new CustomEvent(e, {
        detail: {
            originalEntry: n
        }
    }))
}
const fn = {
        isActive: t => !!t.inView,
        subscribe: (t, {
            enable: e,
            disable: n
        }, {
            inViewOptions: r = {}
        }) => {
            const {
                once: i
            } = r, a = Zt(r, ["once"]);
            return nn(t, s => {
                if (e(), Mt(t, "viewenter", s), !i) return o => {
                    n(), Mt(t, "viewleave", o)
                }
            }, a)
        }
    },
    Dt = (t, e, n) => r => {
        r.pointerType && r.pointerType !== "mouse" || (n(), ut(t, e, r))
    },
    dn = {
        isActive: t => !!t.hover,
        subscribe: (t, {
            enable: e,
            disable: n
        }) => {
            const r = Dt(t, "hoverstart", e),
                i = Dt(t, "hoverend", n);
            return t.addEventListener("pointerenter", r), t.addEventListener("pointerleave", i), () => {
                t.removeEventListener("pointerenter", r), t.removeEventListener("pointerleave", i)
            }
        }
    },
    hn = {
        isActive: t => !!t.press,
        subscribe: (t, {
            enable: e,
            disable: n
        }) => {
            const r = a => {
                    n(), ut(t, "pressend", a), window.removeEventListener("pointerup", r)
                },
                i = a => {
                    e(), ut(t, "pressstart", a), window.addEventListener("pointerup", r)
                };
            return t.addEventListener("pointerdown", i), () => {
                t.removeEventListener("pointerdown", i), window.removeEventListener("pointerup", r)
            }
        }
    },
    X = {
        inView: fn,
        hover: dn,
        press: hn
    },
    It = ["initial", "animate", ...Object.keys(X), "exit"],
    jt = new WeakMap;

function pn(t = {}, e) {
    let n, r = e ? e.getDepth() + 1 : 0;
    const i = {
            initial: !0,
            animate: !0
        },
        a = {},
        s = {};
    for (const u of It) s[u] = typeof t[u] == "string" ? t[u] : e == null ? void 0 : e.getContext()[u];
    const o = t.initial === !1 ? "animate" : "initial";
    let h = Tt(t[o] || s[o], t.variants) || {},
        l = Zt(h, ["transition"]);
    const p = Object.assign({}, l);

    function* _() {
        var u, v;
        const b = l;
        l = {};
        const T = {};
        for (const f of It) {
            if (!i[f]) continue;
            const w = Tt(t[f]);
            if (w)
                for (const d in w) d !== "transition" && (l[d] = w[d], T[d] = Ze((v = (u = w.transition) !== null && u !== void 0 ? u : t.transition) !== null && v !== void 0 ? v : {}, d))
        }
        const C = new Set([...Object.keys(l), ...Object.keys(b)]),
            S = [];
        C.forEach(f => {
            var w;
            l[f] === void 0 && (l[f] = p[f]), rn(b[f], l[f]) && ((w = p[f]) !== null && w !== void 0 || (p[f] = q.get(n, f)), S.push(Qe(n, f, l[f], T[f], je)))
        }), yield;
        const m = S.map(f => f()).filter(Boolean);
        if (!m.length) return;
        const $ = l;
        n.dispatchEvent(Ot("motionstart", $)), Promise.all(m.map(f => f.finished)).then(() => {
            n.dispatchEvent(Ot("motioncomplete", $))
        }).catch(Jt)
    }
    const c = (u, v) => () => {
            i[u] = v, it(g)
        },
        A = () => {
            for (const u in X) {
                const v = X[u].isActive(t),
                    b = a[u];
                v && !b ? a[u] = X[u].subscribe(n, {
                    enable: c(u, !0),
                    disable: c(u, !1)
                }, t) : !v && b && (b(), delete a[u])
            }
        },
        g = {
            update: u => {
                n && (t = u, A(), it(g))
            },
            setActive: (u, v) => {
                n && (i[u] = v, it(g))
            },
            animateUpdates: _,
            getDepth: () => r,
            getTarget: () => l,
            getOptions: () => t,
            getContext: () => s,
            mount: u => (n = u, jt.set(n, g), A(), () => {
                jt.delete(n), ln(g);
                for (const v in a) a[v]()
            }),
            isMounted: () => !!n
        };
    return g
}

function gn(t) {
    const e = {},
        n = [];
    for (let r in t) {
        const i = t[r];
        dt(r) && (F[r] && (r = F[r]), n.push(r), r = G(r));
        let a = Array.isArray(i) ? i[0] : i;
        const s = z.get(r);
        s && (a = N(i) ? s.toDefaultUnit(i) : i), e[r] = a
    }
    return n.length && (e.transform = Qt(n)), e
}
var mn = Vt();

function yn(t, e) {
    t.addEventListener("motioncomplete", e)
}

function vn(t, e, n, r) {
    const i = pn((n == null ? void 0 : n.initial) === !1 ? gt(B({}, e()), {
        initial: !1
    }) : e(), r);
    return st(() => {
        if (n && !n.mount()) return;
        const a = t(),
            s = i.mount(a);
        st(() => i.update(e())), oe(() => {
            n && e().exit ? (i.setActive("exit", !0), yn(a, s)) : s()
        })
    }), [i, gn(i.getTarget())]
}
var xn = ["initial", "animate", "inView", "inViewOptions", "hover", "press", "variants", "transition", "exit"],
    bn = ["tag"],
    Pt = Vt(),
    kt = t => {
        const [e, , n] = se(t, xn, bn), [r, i] = vn(() => a, () => B({}, e), mt(mn), mt(Pt));
        let a;
        return E(Pt.Provider, {
            value: r,
            get children() {
                return E(ae, Ft(n, {
                    ref: s => {
                        var o;
                        a = s, (o = t.ref) == null || o.call(t, s)
                    },
                    get component() {
                        return t.tag || "div"
                    },
                    get style() {
                        return be(t.style, i)
                    }
                }))
            }
        })
    },
    Lt = new Proxy(kt, {
        get: (t, e) => n => E(kt, Ft(n, {
            tag: e
        }))
    }),
    wn = R('<div class="winner-section-recent h-[396px] p-4 rounded-xl w-[100%] bg-layer4"><div class="winner-recent-title flex items-center gap-2 text-sm font-semibold text-primary"><img class="w-3 h-3"loading=lazy><h2 class="text-primary text-sm font-extrabold"></h2></div><div class="winner-recent-prizes-paid flex justify-between items-center text-primary py-2 px-3 my-4 mx-0 rounded bg-layer3"><label class="text-sm font-semibold text-primary"></label><label class="text-lg text-brand font-extrabold flex gap-1 items-center"></label></div><div class="winner-recent-table-box py-2.5 px-3 mt-4"><div class="winner-recent-table-header grid grid-cols-2 text-sm font-normal text-primary pb-1"><label class="text-xs font-semibold text-primary"></label><label class="text-right text-xs font-semibold text-primary"></label></div><div class="winner-recent-table-body h-[220px] overflow-y-hidden cursor-pointer">'),
    An = R('<span class="player-item flex items-center gap-1 cursor-pointer overflow-hidden h-[46px]"><img class="w-4 h-4 rounded-[50%] mr-2"loading=lazy><label class="text-sm font-semibold text-primary cursor-pointer truncate block mx-w-[calc(100%-40px)]">'),
    Sn = R('<span class="h-[46px] w-full inline-flex items-center justify-end pr-0.5"><label class="cursor-pointer text-brand text-sm font-semibold text-right"></label><img class="w-4 h-4 ml-2"loading=lazy>');
const En = () => {
        const t = Bt(),
            e = Ut(),
            n = () => Q(void 0, null, function*() {
                const l = "/platform-lottery/lottery-info/recent-winners";
                return yield qt().get(l)
            }),
            [r] = zt(n),
            [i, a] = le(0);
        let s;
        const o = yt(() => Math.floor((i() || 0) / 46) * 2, s == null ? void 0 : s.scrollHeight),
            h = yt(() => Array.from({
                length: o()
            }, (l, p) => p % 2 === 0 ? -(Math.floor(p / 2) * 46) : -(Math.floor((p + 1) / 2) * 46)));
        return st(() => (ce(() => {
            var l, p;
            (p = (l = r()) == null ? void 0 : l.userList) != null && p.length && a(s != null && s.scrollHeight ? s.scrollHeight - 230 : 0)
        }), r())), (() => {
            var l = wn(),
                p = l.firstChild,
                _ = p.firstChild,
                c = _.nextSibling,
                A = p.nextSibling,
                g = A.firstChild,
                u = g.nextSibling,
                v = A.nextSibling,
                b = v.firstChild,
                T = b.firstChild,
                C = T.nextSibling,
                S = b.nextSibling;
            return H(_, "src", ve), x(c, () => I("Recent Winners")), A.style.setProperty("background", "linear-gradient(rgba(36, 238, 137, 0.10) 0%, rgba(36, 238, 137, 0.10) 100%)"), A.style.setProperty("box-shadow", "0px 0px 10px 0px rgba(0, 222, 110, 0.10)"), x(g, () => I("Prizes Paid Out")), x(u, () => {
                var m;
                return t((m = r()) == null ? void 0 : m.totalPrize)
            }), x(T, () => I("Player")), x(C, () => I("Prize")), ue(m => s = m, S), x(S, E(Lt.ul, {
                initial: {
                    y: 0
                },
                get animate() {
                    return {
                        y: h()
                    }
                },
                get transition() {
                    return {
                        duration: o(),
                        easing: "linear"
                    }
                },
                get children() {
                    return E(at, {
                        get when() {
                            var m;
                            return (m = r()) == null ? void 0 : m.userList
                        },
                        keyed: !0,
                        children: m => E(Rt, {
                            each: m,
                            children: $ => E(Lt.li, {
                                class: "cursor-pointer grid grid-cols-2 p-0 m-0 h-[46px] text-sm font-normal text-primary",
                                onClick: () => {
                                    e(`/lottery/recentBetDetail/${$.id}`)
                                },
                                get children() {
                                    return [(() => {
                                        var f = An(),
                                            w = f.firstChild,
                                            d = w.nextSibling;
                                        return x(d, () => $.userName), vt(() => H(w, "src", xt.avatar($.userId))), f
                                    })(), (() => {
                                        var f = Sn(),
                                            w = f.firstChild,
                                            d = w.nextSibling;
                                        return x(w, () => t($.winning)), vt(() => H(d, "src", xt.coinIcon($.rewardCurrency || he.setting.localeCurrencyName, "black"))), f
                                    })()]
                                }
                            })
                        })
                    })
                }
            })), l
        })()
    },
    _n = "/modules/lottery2/assets/winner-icon-319ba3e1.png";
var $n = R('<div class="winner-section-top w-full h-[396px] p-4 rounded-xl bg-layer4"><div class="flex gap-2 text-sm font-semibold text-primary"><img class=w-5 loading=lazy><h2 class="text-primary text-sm font-extrabold"></h2></div><div class="winner-top-body mt-4 pl-3 h-[336px] overflow-hidden"><ul class=p-0>'),
    Tn = R('<li class="winner-top-body-item grid items-center grid-cols-[50px,calc(100%-146px),96px] border-b border-solid border-[rgba(255,255,255,0.08)] py-1.5 px-0 mx-0 last:border-b-0 first:pt-0 cursor-pointer"><div class="text-primary text-5xl font-extrabold capitalize"></div><div class=item-content><div class="flex gap-2 items-center text-sm font-medium"><label class="truncate max-w-[calc(100%-40px)] text-primary text-sm font-semibold"></label></div><div class="truncate text-xs font-semibold mt-1.5 text-secondary">:<span><span>h</span><span>m</span><span>s</span></span></div><div class="text-brand text-base font-extrabold flex items-center gap-1"></div></div><div class=w-24>');
const Cn = () => {
    const t = Ut(),
        e = Bt(),
        n = () => Q(void 0, null, function*() {
            const s = "/platform-lottery/lottery-info/top-winning";
            return yield qt().get(s)
        }),
        [r, {
            refetch: i
        }] = zt(n),
        a = s => {
            s.isClosed || (t(`/lottery/detail/${s.lotteryId}`), ge.emit("sensorsTrack", {
                event: "lottery_click",
                lottery_id: s.lotteryId,
                lottery_name: s.lotteryName,
                item_type: "lottery",
                item_id: s.lotteryId
            }))
        };
    return (() => {
        var s = $n(),
            o = s.firstChild,
            h = o.firstChild,
            l = h.nextSibling,
            p = o.nextSibling,
            _ = p.firstChild;
        return H(h, "src", _n), x(l, () => I("Top Winning Lotteries")), x(_, E(Rt, {
            get each() {
                return r()
            },
            children: (c, A) => {
                const g = pe(() => c.drawTime);
                return ye(g()) && i(), (() => {
                    var u = Tn(),
                        v = u.firstChild,
                        b = v.nextSibling,
                        T = b.firstChild,
                        C = T.firstChild,
                        S = T.nextSibling,
                        m = S.firstChild,
                        $ = m.nextSibling,
                        f = $.firstChild,
                        w = f.firstChild,
                        d = f.nextSibling,
                        K = d.firstChild,
                        y = d.nextSibling,
                        k = y.firstChild,
                        M = S.nextSibling,
                        J = b.nextSibling;
                    return u.$$click = () => a(c), x(v, () => A() + 1), x(T, E(me, {
                        get country() {
                            return c.lotteryCountry
                        }
                    }), C), x(C, () => c.lotteryName), x(S, () => I("Next draw"), m), x(f, () => {
                        var D;
                        return Z((D = g()) == null ? void 0 : D.hours)
                    }, w), x(d, () => {
                        var D;
                        return Z((D = g()) == null ? void 0 : D.minutes)
                    }, K), x(y, () => {
                        var D;
                        return Z((D = g()) == null ? void 0 : D.seconds)
                    }, k), x(M, () => e(c.totalPrize)), x(J, E(at, {
                        get when() {
                            return !c.isClosed
                        },
                        get children() {
                            return E(bt, {
                                type: "brand",
                                class: "min-h-8 h-fit w-full text-sm font-extrabold text-primary_brand cursor-pointer",
                                get children() {
                                    return I("Bet Now")
                                }
                            })
                        }
                    }), null), x(J, E(at, {
                        get when() {
                            return c.isClosed
                        },
                        get children() {
                            return E(bt, {
                                class: "min-h-8 h-fit rounded-xl text-sm font-extrabold cursor-pointer bg-layer3 text-primary inline-flex items-center justify-center",
                                get children() {
                                    return I("Drawing")
                                }
                            })
                        }
                    }), null), u
                })()
            }
        })), s
    })()
};
fe(["click"]);
var On = R('<section class="winnerSectionWrap flex gap-3 sm:gap-2 mt-3 sm:mt-4 flex-col sm:flex-row">');
const zn = function() {
    return E(de, {
        get children() {
            var t = On();
            return x(t, E(En, {}), null), x(t, E(Cn, {}), null), t
        }
    })
};
export {
    zn as WinnerSection, zn as
    default
};