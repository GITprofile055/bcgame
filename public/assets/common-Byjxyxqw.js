import {
    a as animate$1,
    i as isFunction,
    w as withControls,
    A as Animation,
    L as Long,
    c as createRoot,
    d as delegateEvents,
    b as createSignal,
    e as createContext,
    f as createStore,
    g as createComputed,
    h as createEffect,
    j as batch,
    k as createComponent,
    l as getOwner,
    o as onCleanup,
    m as createMemo,
    n as createResource,
    p as axios,
    q as getListener,
    r as mergeProps,
    s as splitProps,
    u as untrack,
    t as useContext,
    v as template,
    x as classList,
    y as insert,
    z as spread,
    B as children,
    C as runWithOwner,
    D as A$2,
    E as createRenderEffect,
    F as className,
    G as setAttribute,
    H as For,
    I as addEventListener$1,
    J as memo$2,
    K as use,
    M as createSelector,
    N as useTransition,
    O as onMount,
    P as useCurrentMatches,
    Q as useLocation,
    R as sharedConfig,
    $ as $TRACK,
    S as on$1,
    T as createUniqueId,
    U as reconcile,
    V as lazy,
    W as useNavigate$1,
    X as gsapWithCSS,
    Y as Show,
    Z as Switch$1,
    _ as Match,
    a0 as style,
    a1 as Index,
    a2 as Suspense,
    a3 as Portal,
    a4 as ErrorBoundary,
    a5 as useBeforeLeave$1,
    a6 as Router,
    a7 as unwrap,
    a8 as createRouter,
    a9 as useSearchParams
} from "./vendor-DYV1gSPf.js";
const scriptRel = "modulepreload",
    assetsURL = function(L) {
        return "/" + L
    },
    seen = {},
    __vitePreload = function(O, M, I) {
        let N = Promise.resolve();
        if (M && M.length > 0) {
            document.getElementsByTagName("link");
            const H = document.querySelector("meta[property=csp-nonce]"),
                z = H ? .nonce || H ? .getAttribute("nonce");
            N = Promise.allSettled(M.map(K => {
                if (K = assetsURL(K), K in seen) return;
                seen[K] = !0;
                const W = K.endsWith(".css"),
                    X = W ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${K}"]${X}`)) return;
                const G = document.createElement("link");
                if (G.rel = W ? "stylesheet" : scriptRel, W || (G.as = "script"), G.crossOrigin = "", G.href = K, z && G.setAttribute("nonce", z), document.head.appendChild(G), W) return new Promise((Y, Z) => {
                    G.addEventListener("load", Y), G.addEventListener("error", () => Z(new Error(`Unable to preload CSS for ${K}`)))
                })
            }))
        }

        function R(H) {
            const z = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (z.payload = H, window.dispatchEvent(z), !z.defaultPrevented) throw H
        }
        return N.then(H => {
            for (const z of H || []) z.status === "rejected" && R(z.reason);
            return O().catch(R)
        })
    };

function animateProgress(L, O = {}) {
    return withControls([() => {
        const M = new Animation(L, [0, 1], O);
        return M.finished.catch(() => {}), M
    }], O, O.duration)
}

function animate(L, O, M) {
    return (isFunction(L) ? animateProgress : animate$1)(L, O, M)
}
var define_process_env_default = {},
    St = Object.defineProperty,
    ut = L => {
        throw TypeError(L)
    },
    xt = (L, O, M) => O in L ? St(L, O, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: M
    }) : L[O] = M,
    be = (L, O, M) => xt(L, typeof O != "symbol" ? O + "" : O, M),
    it = (L, O, M) => O.has(L) || ut("Cannot " + M),
    ge = (L, O, M) => (it(L, O, "read from private field"), M ? M.call(L) : O.get(L)),
    Ae = (L, O, M) => O.has(L) ? ut("Cannot add the same private member more than once") : O instanceof WeakSet ? O.add(L) : O.set(L, M),
    Ee = (L, O, M, I) => (it(L, O, "write to private field"), O.set(L, M), M),
    Re = (L, O, M) => (it(L, O, "access private method"), M),
    Ke = (L, O, M, I) => ({
        set _(N) {
            Ee(L, O, N)
        },
        get _() {
            return ge(L, O, I)
        }
    }),
    commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function getDefaultExportFromCjs(L) {
    return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L
}

function getAugmentedNamespace(L) {
    if (Object.prototype.hasOwnProperty.call(L, "__esModule")) return L;
    var O = L.default;
    if (typeof O == "function") {
        var M = function I() {
            return this instanceof I ? Reflect.construct(O, arguments, this.constructor) : O.apply(this, arguments)
        };
        M.prototype = O.prototype
    } else M = {};
    return Object.defineProperty(M, "__esModule", {
        value: !0
    }), Object.keys(L).forEach(function(I) {
        var N = Object.getOwnPropertyDescriptor(L, I);
        Object.defineProperty(M, I, N.get ? N : {
            enumerable: !0,
            get: function() {
                return L[I]
            }
        })
    }), M
}
var indexMinimal = {},
    minimal$1 = {},
    aspromise, hasRequiredAspromise;

function requireAspromise() {
    if (hasRequiredAspromise) return aspromise;
    hasRequiredAspromise = 1, aspromise = L;

    function L(O, M) {
        for (var I = new Array(arguments.length - 1), N = 0, R = 2, H = !0; R < arguments.length;) I[N++] = arguments[R++];
        return new Promise(function(z, K) {
            I[N] = function(W) {
                if (H)
                    if (H = !1, W) K(W);
                    else {
                        for (var X = new Array(arguments.length - 1), G = 0; G < X.length;) X[G++] = arguments[G];
                        z.apply(null, X)
                    }
            };
            try {
                O.apply(M || null, I)
            } catch (W) {
                H && (H = !1, K(W))
            }
        })
    }
    return aspromise
}
var base64 = {},
    hasRequiredBase64;

function requireBase64() {
    return hasRequiredBase64 || (hasRequiredBase64 = 1, function(L) {
        var O = L;
        O.length = function(H) {
            var z = H.length;
            if (!z) return 0;
            for (var K = 0; --z % 4 > 1 && H.charAt(z) === "=";) ++K;
            return Math.ceil(H.length * 3) / 4 - K
        };
        for (var M = new Array(64), I = new Array(123), N = 0; N < 64;) I[M[N] = N < 26 ? N + 65 : N < 52 ? N + 71 : N < 62 ? N - 4 : N - 59 | 43] = N++;
        O.encode = function(H, z, K) {
            for (var W = null, X = [], G = 0, Y = 0, Z; z < K;) {
                var Q = H[z++];
                switch (Y) {
                    case 0:
                        X[G++] = M[Q >> 2], Z = (Q & 3) << 4, Y = 1;
                        break;
                    case 1:
                        X[G++] = M[Z | Q >> 4], Z = (Q & 15) << 2, Y = 2;
                        break;
                    case 2:
                        X[G++] = M[Z | Q >> 6], X[G++] = M[Q & 63], Y = 0;
                        break
                }
                G > 8191 && ((W || (W = [])).push(String.fromCharCode.apply(String, X)), G = 0)
            }
            return Y && (X[G++] = M[Z], X[G++] = 61, Y === 1 && (X[G++] = 61)), W ? (G && W.push(String.fromCharCode.apply(String, X.slice(0, G))), W.join("")) : String.fromCharCode.apply(String, X.slice(0, G))
        };
        var R = "invalid encoding";
        O.decode = function(H, z, K) {
            for (var W = K, X = 0, G, Y = 0; Y < H.length;) {
                var Z = H.charCodeAt(Y++);
                if (Z === 61 && X > 1) break;
                if ((Z = I[Z]) === void 0) throw Error(R);
                switch (X) {
                    case 0:
                        G = Z, X = 1;
                        break;
                    case 1:
                        z[K++] = G << 2 | (Z & 48) >> 4, G = Z, X = 2;
                        break;
                    case 2:
                        z[K++] = (G & 15) << 4 | (Z & 60) >> 2, G = Z, X = 3;
                        break;
                    case 3:
                        z[K++] = (G & 3) << 6 | Z, X = 0;
                        break
                }
            }
            if (X === 1) throw Error(R);
            return K - W
        }, O.test = function(H) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(H)
        }
    }(base64)), base64
}
var eventemitter, hasRequiredEventemitter;

function requireEventemitter() {
    if (hasRequiredEventemitter) return eventemitter;
    hasRequiredEventemitter = 1, eventemitter = L;

    function L() {
        this._listeners = {}
    }
    return L.prototype.on = function(O, M, I) {
        return (this._listeners[O] || (this._listeners[O] = [])).push({
            fn: M,
            ctx: I || this
        }), this
    }, L.prototype.off = function(O, M) {
        if (O === void 0) this._listeners = {};
        else if (M === void 0) this._listeners[O] = [];
        else
            for (var I = this._listeners[O], N = 0; N < I.length;) I[N].fn === M ? I.splice(N, 1) : ++N;
        return this
    }, L.prototype.emit = function(O) {
        var M = this._listeners[O];
        if (M) {
            for (var I = [], N = 1; N < arguments.length;) I.push(arguments[N++]);
            for (N = 0; N < M.length;) M[N].fn.apply(M[N++].ctx, I)
        }
        return this
    }, eventemitter
}
var float, hasRequiredFloat;

function requireFloat() {
    if (hasRequiredFloat) return float;
    hasRequiredFloat = 1, float = L(L);

    function L(R) {
        return typeof Float32Array < "u" ? function() {
            var H = new Float32Array([-0]),
                z = new Uint8Array(H.buffer),
                K = z[3] === 128;

            function W(Z, Q, J) {
                H[0] = Z, Q[J] = z[0], Q[J + 1] = z[1], Q[J + 2] = z[2], Q[J + 3] = z[3]
            }

            function X(Z, Q, J) {
                H[0] = Z, Q[J] = z[3], Q[J + 1] = z[2], Q[J + 2] = z[1], Q[J + 3] = z[0]
            }
            R.writeFloatLE = K ? W : X, R.writeFloatBE = K ? X : W;

            function G(Z, Q) {
                return z[0] = Z[Q], z[1] = Z[Q + 1], z[2] = Z[Q + 2], z[3] = Z[Q + 3], H[0]
            }

            function Y(Z, Q) {
                return z[3] = Z[Q], z[2] = Z[Q + 1], z[1] = Z[Q + 2], z[0] = Z[Q + 3], H[0]
            }
            R.readFloatLE = K ? G : Y, R.readFloatBE = K ? Y : G
        }() : function() {
            function H(K, W, X, G) {
                var Y = W < 0 ? 1 : 0;
                if (Y && (W = -W), W === 0) K(1 / W > 0 ? 0 : 2147483648, X, G);
                else if (isNaN(W)) K(2143289344, X, G);
                else if (W > 34028234663852886e22) K((Y << 31 | 2139095040) >>> 0, X, G);
                else if (W < 11754943508222875e-54) K((Y << 31 | Math.round(W / 1401298464324817e-60)) >>> 0, X, G);
                else {
                    var Z = Math.floor(Math.log(W) / Math.LN2),
                        Q = Math.round(W * Math.pow(2, -Z) * 8388608) & 8388607;
                    K((Y << 31 | Z + 127 << 23 | Q) >>> 0, X, G)
                }
            }
            R.writeFloatLE = H.bind(null, O), R.writeFloatBE = H.bind(null, M);

            function z(K, W, X) {
                var G = K(W, X),
                    Y = (G >> 31) * 2 + 1,
                    Z = G >>> 23 & 255,
                    Q = G & 8388607;
                return Z === 255 ? Q ? NaN : Y * (1 / 0) : Z === 0 ? Y * 1401298464324817e-60 * Q : Y * Math.pow(2, Z - 150) * (Q + 8388608)
            }
            R.readFloatLE = z.bind(null, I), R.readFloatBE = z.bind(null, N)
        }(), typeof Float64Array < "u" ? function() {
            var H = new Float64Array([-0]),
                z = new Uint8Array(H.buffer),
                K = z[7] === 128;

            function W(Z, Q, J) {
                H[0] = Z, Q[J] = z[0], Q[J + 1] = z[1], Q[J + 2] = z[2], Q[J + 3] = z[3], Q[J + 4] = z[4], Q[J + 5] = z[5], Q[J + 6] = z[6], Q[J + 7] = z[7]
            }

            function X(Z, Q, J) {
                H[0] = Z, Q[J] = z[7], Q[J + 1] = z[6], Q[J + 2] = z[5], Q[J + 3] = z[4], Q[J + 4] = z[3], Q[J + 5] = z[2], Q[J + 6] = z[1], Q[J + 7] = z[0]
            }
            R.writeDoubleLE = K ? W : X, R.writeDoubleBE = K ? X : W;

            function G(Z, Q) {
                return z[0] = Z[Q], z[1] = Z[Q + 1], z[2] = Z[Q + 2], z[3] = Z[Q + 3], z[4] = Z[Q + 4], z[5] = Z[Q + 5], z[6] = Z[Q + 6], z[7] = Z[Q + 7], H[0]
            }

            function Y(Z, Q) {
                return z[7] = Z[Q], z[6] = Z[Q + 1], z[5] = Z[Q + 2], z[4] = Z[Q + 3], z[3] = Z[Q + 4], z[2] = Z[Q + 5], z[1] = Z[Q + 6], z[0] = Z[Q + 7], H[0]
            }
            R.readDoubleLE = K ? G : Y, R.readDoubleBE = K ? Y : G
        }() : function() {
            function H(K, W, X, G, Y, Z) {
                var Q = G < 0 ? 1 : 0;
                if (Q && (G = -G), G === 0) K(0, Y, Z + W), K(1 / G > 0 ? 0 : 2147483648, Y, Z + X);
                else if (isNaN(G)) K(0, Y, Z + W), K(2146959360, Y, Z + X);
                else if (G > 17976931348623157e292) K(0, Y, Z + W), K((Q << 31 | 2146435072) >>> 0, Y, Z + X);
                else {
                    var J;
                    if (G < 22250738585072014e-324) J = G / 5e-324, K(J >>> 0, Y, Z + W), K((Q << 31 | J / 4294967296) >>> 0, Y, Z + X);
                    else {
                        var _ = Math.floor(Math.log(G) / Math.LN2);
                        _ === 1024 && (_ = 1023), J = G * Math.pow(2, -_), K(J * 4503599627370496 >>> 0, Y, Z + W), K((Q << 31 | _ + 1023 << 20 | J * 1048576 & 1048575) >>> 0, Y, Z + X)
                    }
                }
            }
            R.writeDoubleLE = H.bind(null, O, 0, 4), R.writeDoubleBE = H.bind(null, M, 4, 0);

            function z(K, W, X, G, Y) {
                var Z = K(G, Y + W),
                    Q = K(G, Y + X),
                    J = (Q >> 31) * 2 + 1,
                    _ = Q >>> 20 & 2047,
                    ee = 4294967296 * (Q & 1048575) + Z;
                return _ === 2047 ? ee ? NaN : J * (1 / 0) : _ === 0 ? J * 5e-324 * ee : J * Math.pow(2, _ - 1075) * (ee + 4503599627370496)
            }
            R.readDoubleLE = z.bind(null, I, 0, 4), R.readDoubleBE = z.bind(null, N, 4, 0)
        }(), R
    }

    function O(R, H, z) {
        H[z] = R & 255, H[z + 1] = R >>> 8 & 255, H[z + 2] = R >>> 16 & 255, H[z + 3] = R >>> 24
    }

    function M(R, H, z) {
        H[z] = R >>> 24, H[z + 1] = R >>> 16 & 255, H[z + 2] = R >>> 8 & 255, H[z + 3] = R & 255
    }

    function I(R, H) {
        return (R[H] | R[H + 1] << 8 | R[H + 2] << 16 | R[H + 3] << 24) >>> 0
    }

    function N(R, H) {
        return (R[H] << 24 | R[H + 1] << 16 | R[H + 2] << 8 | R[H + 3]) >>> 0
    }
    return float
}
var inquire_1, hasRequiredInquire;

function requireInquire() {
    if (hasRequiredInquire) return inquire_1;
    hasRequiredInquire = 1, inquire_1 = inquire;

    function inquire(moduleName) {
        try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod
        } catch (L) {}
        return null
    }
    return inquire_1
}
var utf8$1 = {},
    hasRequiredUtf8$1;

function requireUtf8$1() {
    return hasRequiredUtf8$1 || (hasRequiredUtf8$1 = 1, function(L) {
        var O = L;
        O.length = function(M) {
            for (var I = 0, N = 0, R = 0; R < M.length; ++R) N = M.charCodeAt(R), N < 128 ? I += 1 : N < 2048 ? I += 2 : (N & 64512) === 55296 && (M.charCodeAt(R + 1) & 64512) === 56320 ? (++R, I += 4) : I += 3;
            return I
        }, O.read = function(M, I, N) {
            var R = N - I;
            if (R < 1) return "";
            for (var H = null, z = [], K = 0, W; I < N;) W = M[I++], W < 128 ? z[K++] = W : W > 191 && W < 224 ? z[K++] = (W & 31) << 6 | M[I++] & 63 : W > 239 && W < 365 ? (W = ((W & 7) << 18 | (M[I++] & 63) << 12 | (M[I++] & 63) << 6 | M[I++] & 63) - 65536, z[K++] = 55296 + (W >> 10), z[K++] = 56320 + (W & 1023)) : z[K++] = (W & 15) << 12 | (M[I++] & 63) << 6 | M[I++] & 63, K > 8191 && ((H || (H = [])).push(String.fromCharCode.apply(String, z)), K = 0);
            return H ? (K && H.push(String.fromCharCode.apply(String, z.slice(0, K))), H.join("")) : String.fromCharCode.apply(String, z.slice(0, K))
        }, O.write = function(M, I, N) {
            for (var R = N, H, z, K = 0; K < M.length; ++K) H = M.charCodeAt(K), H < 128 ? I[N++] = H : H < 2048 ? (I[N++] = H >> 6 | 192, I[N++] = H & 63 | 128) : (H & 64512) === 55296 && ((z = M.charCodeAt(K + 1)) & 64512) === 56320 ? (H = 65536 + ((H & 1023) << 10) + (z & 1023), ++K, I[N++] = H >> 18 | 240, I[N++] = H >> 12 & 63 | 128, I[N++] = H >> 6 & 63 | 128, I[N++] = H & 63 | 128) : (I[N++] = H >> 12 | 224, I[N++] = H >> 6 & 63 | 128, I[N++] = H & 63 | 128);
            return N - R
        }
    }(utf8$1)), utf8$1
}
var pool_1, hasRequiredPool;

function requirePool() {
    if (hasRequiredPool) return pool_1;
    hasRequiredPool = 1, pool_1 = L;

    function L(O, M, I) {
        var N = I || 8192,
            R = N >>> 1,
            H = null,
            z = N;
        return function(K) {
            if (K < 1 || K > R) return O(K);
            z + K > N && (H = O(N), z = 0);
            var W = M.call(H, z, z += K);
            return z & 7 && (z = (z | 7) + 1), W
        }
    }
    return pool_1
}
var longbits, hasRequiredLongbits;

function requireLongbits() {
    if (hasRequiredLongbits) return longbits;
    hasRequiredLongbits = 1, longbits = O;
    var L = requireMinimal$1();

    function O(R, H) {
        this.lo = R >>> 0, this.hi = H >>> 0
    }
    var M = O.zero = new O(0, 0);
    M.toNumber = function() {
        return 0
    }, M.zzEncode = M.zzDecode = function() {
        return this
    }, M.length = function() {
        return 1
    };
    var I = O.zeroHash = "\0\0\0\0\0\0\0\0";
    O.fromNumber = function(R) {
        if (R === 0) return M;
        var H = R < 0;
        H && (R = -R);
        var z = R >>> 0,
            K = (R - z) / 4294967296 >>> 0;
        return H && (K = ~K >>> 0, z = ~z >>> 0, ++z > 4294967295 && (z = 0, ++K > 4294967295 && (K = 0))), new O(z, K)
    }, O.from = function(R) {
        if (typeof R == "number") return O.fromNumber(R);
        if (L.isString(R))
            if (L.Long) R = L.Long.fromString(R);
            else return O.fromNumber(parseInt(R, 10));
        return R.low || R.high ? new O(R.low >>> 0, R.high >>> 0) : M
    }, O.prototype.toNumber = function(R) {
        if (!R && this.hi >>> 31) {
            var H = ~this.lo + 1 >>> 0,
                z = ~this.hi >>> 0;
            return H || (z = z + 1 >>> 0), -(H + z * 4294967296)
        }
        return this.lo + this.hi * 4294967296
    }, O.prototype.toLong = function(R) {
        return L.Long ? new L.Long(this.lo | 0, this.hi | 0, !!R) : {
            low: this.lo | 0,
            high: this.hi | 0,
            unsigned: !!R
        }
    };
    var N = String.prototype.charCodeAt;
    return O.fromHash = function(R) {
        return R === I ? M : new O((N.call(R, 0) | N.call(R, 1) << 8 | N.call(R, 2) << 16 | N.call(R, 3) << 24) >>> 0, (N.call(R, 4) | N.call(R, 5) << 8 | N.call(R, 6) << 16 | N.call(R, 7) << 24) >>> 0)
    }, O.prototype.toHash = function() {
        return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
    }, O.prototype.zzEncode = function() {
        var R = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ R) >>> 0, this.lo = (this.lo << 1 ^ R) >>> 0, this
    }, O.prototype.zzDecode = function() {
        var R = -(this.lo & 1);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ R) >>> 0, this.hi = (this.hi >>> 1 ^ R) >>> 0, this
    }, O.prototype.length = function() {
        var R = this.lo,
            H = (this.lo >>> 28 | this.hi << 4) >>> 0,
            z = this.hi >>> 24;
        return z === 0 ? H === 0 ? R < 16384 ? R < 128 ? 1 : 2 : R < 2097152 ? 3 : 4 : H < 16384 ? H < 128 ? 5 : 6 : H < 2097152 ? 7 : 8 : z < 128 ? 9 : 10
    }, longbits
}
var hasRequiredMinimal$1;

function requireMinimal$1() {
    return hasRequiredMinimal$1 || (hasRequiredMinimal$1 = 1, function(L) {
        var O = L;
        O.asPromise = requireAspromise(), O.base64 = requireBase64(), O.EventEmitter = requireEventemitter(), O.float = requireFloat(), O.inquire = requireInquire(), O.utf8 = requireUtf8$1(), O.pool = requirePool(), O.LongBits = requireLongbits(), O.isNode = !!(typeof commonjsGlobal < "u" && commonjsGlobal && commonjsGlobal.process && commonjsGlobal.process.versions && commonjsGlobal.process.versions.node), O.global = O.isNode && commonjsGlobal || typeof window < "u" && window || typeof self < "u" && self || minimal$1, O.emptyArray = Object.freeze ? Object.freeze([]) : [], O.emptyObject = Object.freeze ? Object.freeze({}) : {}, O.isInteger = Number.isInteger || function(N) {
            return typeof N == "number" && isFinite(N) && Math.floor(N) === N
        }, O.isString = function(N) {
            return typeof N == "string" || N instanceof String
        }, O.isObject = function(N) {
            return N && typeof N == "object"
        }, O.isset = O.isSet = function(N, R) {
            var H = N[R];
            return H != null && N.hasOwnProperty(R) ? typeof H != "object" || (Array.isArray(H) ? H.length : Object.keys(H).length) > 0 : !1
        }, O.Buffer = function() {
            try {
                var N = O.inquire("buffer").Buffer;
                return N.prototype.utf8Write ? N : null
            } catch {
                return null
            }
        }(), O._Buffer_from = null, O._Buffer_allocUnsafe = null, O.newBuffer = function(N) {
            return typeof N == "number" ? O.Buffer ? O._Buffer_allocUnsafe(N) : new O.Array(N) : O.Buffer ? O._Buffer_from(N) : typeof Uint8Array > "u" ? N : new Uint8Array(N)
        }, O.Array = typeof Uint8Array < "u" ? Uint8Array : Array, O.Long = O.global.dcodeIO && O.global.dcodeIO.Long || O.global.Long || O.inquire("long"), O.key2Re = /^true|false|0|1$/, O.key32Re = /^-?(?:0|[1-9][0-9]*)$/, O.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, O.longToHash = function(N) {
            return N ? O.LongBits.from(N).toHash() : O.LongBits.zeroHash
        }, O.longFromHash = function(N, R) {
            var H = O.LongBits.fromHash(N);
            return O.Long ? O.Long.fromBits(H.lo, H.hi, R) : H.toNumber(!!R)
        };

        function M(N, R, H) {
            for (var z = Object.keys(R), K = 0; K < z.length; ++K)(N[z[K]] === void 0 || !H) && (N[z[K]] = R[z[K]]);
            return N
        }
        O.merge = M, O.lcFirst = function(N) {
            return N.charAt(0).toLowerCase() + N.substring(1)
        };

        function I(N) {
            function R(H, z) {
                if (!(this instanceof R)) return new R(H, z);
                Object.defineProperty(this, "message", {
                    get: function() {
                        return H
                    }
                }), Error.captureStackTrace ? Error.captureStackTrace(this, R) : Object.defineProperty(this, "stack", {
                    value: new Error().stack || ""
                }), z && M(this, z)
            }
            return R.prototype = Object.create(Error.prototype, {
                constructor: {
                    value: R,
                    writable: !0,
                    enumerable: !1,
                    configurable: !0
                },
                name: {
                    get: function() {
                        return N
                    },
                    set: void 0,
                    enumerable: !1,
                    configurable: !0
                },
                toString: {
                    value: function() {
                        return this.name + ": " + this.message
                    },
                    writable: !0,
                    enumerable: !1,
                    configurable: !0
                }
            }), R
        }
        O.newError = I, O.ProtocolError = I("ProtocolError"), O.oneOfGetter = function(N) {
            for (var R = {}, H = 0; H < N.length; ++H) R[N[H]] = 1;
            return function() {
                for (var z = Object.keys(this), K = z.length - 1; K > -1; --K)
                    if (R[z[K]] === 1 && this[z[K]] !== void 0 && this[z[K]] !== null) return z[K]
            }
        }, O.oneOfSetter = function(N) {
            return function(R) {
                for (var H = 0; H < N.length; ++H) N[H] !== R && delete this[N[H]]
            }
        }, O.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0
        }, O._configure = function() {
            var N = O.Buffer;
            if (!N) {
                O._Buffer_from = O._Buffer_allocUnsafe = null;
                return
            }
            O._Buffer_from = N.from !== Uint8Array.from && N.from || function(R, H) {
                return new N(R, H)
            }, O._Buffer_allocUnsafe = N.allocUnsafe || function(R) {
                return new N(R)
            }
        }
    }(minimal$1)), minimal$1
}
var writer, hasRequiredWriter;

function requireWriter() {
    if (hasRequiredWriter) return writer;
    hasRequiredWriter = 1, writer = K;
    var L = requireMinimal$1(),
        O, M = L.LongBits,
        I = L.base64,
        N = L.utf8;

    function R(_, ee, te) {
        this.fn = _, this.len = ee, this.next = void 0, this.val = te
    }

    function H() {}

    function z(_) {
        this.head = _.head, this.tail = _.tail, this.len = _.len, this.next = _.states
    }

    function K() {
        this.len = 0, this.head = new R(H, 0, 0), this.tail = this.head, this.states = null
    }
    var W = function() {
        return L.Buffer ? function() {
            return (K.create = function() {
                return new O
            })()
        } : function() {
            return new K
        }
    };
    K.create = W(), K.alloc = function(_) {
        return new L.Array(_)
    }, L.Array !== Array && (K.alloc = L.pool(K.alloc, L.Array.prototype.subarray)), K.prototype._push = function(_, ee, te) {
        return this.tail = this.tail.next = new R(_, ee, te), this.len += ee, this
    };

    function X(_, ee, te) {
        ee[te] = _ & 255
    }

    function G(_, ee, te) {
        for (; _ > 127;) ee[te++] = _ & 127 | 128, _ >>>= 7;
        ee[te] = _
    }

    function Y(_, ee) {
        this.len = _, this.next = void 0, this.val = ee
    }
    Y.prototype = Object.create(R.prototype), Y.prototype.fn = G, K.prototype.uint32 = function(_) {
        return this.len += (this.tail = this.tail.next = new Y((_ = _ >>> 0) < 128 ? 1 : _ < 16384 ? 2 : _ < 2097152 ? 3 : _ < 268435456 ? 4 : 5, _)).len, this
    }, K.prototype.int32 = function(_) {
        return _ < 0 ? this._push(Z, 10, M.fromNumber(_)) : this.uint32(_)
    }, K.prototype.sint32 = function(_) {
        return this.uint32((_ << 1 ^ _ >> 31) >>> 0)
    };

    function Z(_, ee, te) {
        for (; _.hi;) ee[te++] = _.lo & 127 | 128, _.lo = (_.lo >>> 7 | _.hi << 25) >>> 0, _.hi >>>= 7;
        for (; _.lo > 127;) ee[te++] = _.lo & 127 | 128, _.lo = _.lo >>> 7;
        ee[te++] = _.lo
    }
    K.prototype.uint64 = function(_) {
        var ee = M.from(_);
        return this._push(Z, ee.length(), ee)
    }, K.prototype.int64 = K.prototype.uint64, K.prototype.sint64 = function(_) {
        var ee = M.from(_).zzEncode();
        return this._push(Z, ee.length(), ee)
    }, K.prototype.bool = function(_) {
        return this._push(X, 1, _ ? 1 : 0)
    };

    function Q(_, ee, te) {
        ee[te] = _ & 255, ee[te + 1] = _ >>> 8 & 255, ee[te + 2] = _ >>> 16 & 255, ee[te + 3] = _ >>> 24
    }
    K.prototype.fixed32 = function(_) {
        return this._push(Q, 4, _ >>> 0)
    }, K.prototype.sfixed32 = K.prototype.fixed32, K.prototype.fixed64 = function(_) {
        var ee = M.from(_);
        return this._push(Q, 4, ee.lo)._push(Q, 4, ee.hi)
    }, K.prototype.sfixed64 = K.prototype.fixed64, K.prototype.float = function(_) {
        return this._push(L.float.writeFloatLE, 4, _)
    }, K.prototype.double = function(_) {
        return this._push(L.float.writeDoubleLE, 8, _)
    };
    var J = L.Array.prototype.set ? function(_, ee, te) {
        ee.set(_, te)
    } : function(_, ee, te) {
        for (var ie = 0; ie < _.length; ++ie) ee[te + ie] = _[ie]
    };
    return K.prototype.bytes = function(_) {
        var ee = _.length >>> 0;
        if (!ee) return this._push(X, 1, 0);
        if (L.isString(_)) {
            var te = K.alloc(ee = I.length(_));
            I.decode(_, te, 0), _ = te
        }
        return this.uint32(ee)._push(J, ee, _)
    }, K.prototype.string = function(_) {
        var ee = N.length(_);
        return ee ? this.uint32(ee)._push(N.write, ee, _) : this._push(X, 1, 0)
    }, K.prototype.fork = function() {
        return this.states = new z(this), this.head = this.tail = new R(H, 0, 0), this.len = 0, this
    }, K.prototype.reset = function() {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new R(H, 0, 0), this.len = 0), this
    }, K.prototype.ldelim = function() {
        var _ = this.head,
            ee = this.tail,
            te = this.len;
        return this.reset().uint32(te), te && (this.tail.next = _.next, this.tail = ee, this.len += te), this
    }, K.prototype.finish = function() {
        for (var _ = this.head.next, ee = this.constructor.alloc(this.len), te = 0; _;) _.fn(_.val, ee, te), te += _.len, _ = _.next;
        return ee
    }, K._configure = function(_) {
        O = _, K.create = W(), O._configure()
    }, writer
}
var writer_buffer, hasRequiredWriter_buffer;

function requireWriter_buffer() {
    if (hasRequiredWriter_buffer) return writer_buffer;
    hasRequiredWriter_buffer = 1, writer_buffer = M;
    var L = requireWriter();
    (M.prototype = Object.create(L.prototype)).constructor = M;
    var O = requireMinimal$1();

    function M() {
        L.call(this)
    }
    M._configure = function() {
        M.alloc = O._Buffer_allocUnsafe, M.writeBytesBuffer = O.Buffer && O.Buffer.prototype instanceof Uint8Array && O.Buffer.prototype.set.name === "set" ? function(N, R, H) {
            R.set(N, H)
        } : function(N, R, H) {
            if (N.copy) N.copy(R, H, 0, N.length);
            else
                for (var z = 0; z < N.length;) R[H++] = N[z++]
        }
    }, M.prototype.bytes = function(N) {
        O.isString(N) && (N = O._Buffer_from(N, "base64"));
        var R = N.length >>> 0;
        return this.uint32(R), R && this._push(M.writeBytesBuffer, R, N), this
    };

    function I(N, R, H) {
        N.length < 40 ? O.utf8.write(N, R, H) : R.utf8Write ? R.utf8Write(N, H) : R.write(N, H)
    }
    return M.prototype.string = function(N) {
        var R = O.Buffer.byteLength(N);
        return this.uint32(R), R && this._push(I, R, N), this
    }, M._configure(), writer_buffer
}
var reader, hasRequiredReader;

function requireReader() {
    if (hasRequiredReader) return reader;
    hasRequiredReader = 1, reader = R;
    var L = requireMinimal$1(),
        O, M = L.LongBits,
        I = L.utf8;

    function N(G, Y) {
        return RangeError("index out of range: " + G.pos + " + " + (Y || 1) + " > " + G.len)
    }

    function R(G) {
        this.buf = G, this.pos = 0, this.len = G.length
    }
    var H = typeof Uint8Array < "u" ? function(G) {
            if (G instanceof Uint8Array || Array.isArray(G)) return new R(G);
            throw Error("illegal buffer")
        } : function(G) {
            if (Array.isArray(G)) return new R(G);
            throw Error("illegal buffer")
        },
        z = function() {
            return L.Buffer ? function(G) {
                return (R.create = function(Y) {
                    return L.Buffer.isBuffer(Y) ? new O(Y) : H(Y)
                })(G)
            } : H
        };
    R.create = z(), R.prototype._slice = L.Array.prototype.subarray || L.Array.prototype.slice, R.prototype.uint32 = function() {
        var G = 4294967295;
        return function() {
            if (G = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (G = (G | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (G = (G | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (G = (G | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (G = (G | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return G;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, N(this, 10);
            return G
        }
    }(), R.prototype.int32 = function() {
        return this.uint32() | 0
    }, R.prototype.sint32 = function() {
        var G = this.uint32();
        return G >>> 1 ^ -(G & 1) | 0
    };

    function K() {
        var G = new M(0, 0),
            Y = 0;
        if (this.len - this.pos > 4) {
            for (; Y < 4; ++Y)
                if (G.lo = (G.lo | (this.buf[this.pos] & 127) << Y * 7) >>> 0, this.buf[this.pos++] < 128) return G;
            if (G.lo = (G.lo | (this.buf[this.pos] & 127) << 28) >>> 0, G.hi = (G.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128) return G;
            Y = 0
        } else {
            for (; Y < 3; ++Y) {
                if (this.pos >= this.len) throw N(this);
                if (G.lo = (G.lo | (this.buf[this.pos] & 127) << Y * 7) >>> 0, this.buf[this.pos++] < 128) return G
            }
            return G.lo = (G.lo | (this.buf[this.pos++] & 127) << Y * 7) >>> 0, G
        }
        if (this.len - this.pos > 4) {
            for (; Y < 5; ++Y)
                if (G.hi = (G.hi | (this.buf[this.pos] & 127) << Y * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return G
        } else
            for (; Y < 5; ++Y) {
                if (this.pos >= this.len) throw N(this);
                if (G.hi = (G.hi | (this.buf[this.pos] & 127) << Y * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return G
            }
        throw Error("invalid varint encoding")
    }
    R.prototype.bool = function() {
        return this.uint32() !== 0
    };

    function W(G, Y) {
        return (G[Y - 4] | G[Y - 3] << 8 | G[Y - 2] << 16 | G[Y - 1] << 24) >>> 0
    }
    R.prototype.fixed32 = function() {
        if (this.pos + 4 > this.len) throw N(this, 4);
        return W(this.buf, this.pos += 4)
    }, R.prototype.sfixed32 = function() {
        if (this.pos + 4 > this.len) throw N(this, 4);
        return W(this.buf, this.pos += 4) | 0
    };

    function X() {
        if (this.pos + 8 > this.len) throw N(this, 8);
        return new M(W(this.buf, this.pos += 4), W(this.buf, this.pos += 4))
    }
    return R.prototype.float = function() {
        if (this.pos + 4 > this.len) throw N(this, 4);
        var G = L.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, G
    }, R.prototype.double = function() {
        if (this.pos + 8 > this.len) throw N(this, 4);
        var G = L.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, G
    }, R.prototype.bytes = function() {
        var G = this.uint32(),
            Y = this.pos,
            Z = this.pos + G;
        if (Z > this.len) throw N(this, G);
        if (this.pos += G, Array.isArray(this.buf)) return this.buf.slice(Y, Z);
        if (Y === Z) {
            var Q = L.Buffer;
            return Q ? Q.alloc(0) : new this.buf.constructor(0)
        }
        return this._slice.call(this.buf, Y, Z)
    }, R.prototype.string = function() {
        var G = this.bytes();
        return I.read(G, 0, G.length)
    }, R.prototype.skip = function(G) {
        if (typeof G == "number") {
            if (this.pos + G > this.len) throw N(this, G);
            this.pos += G
        } else
            do
                if (this.pos >= this.len) throw N(this); while (this.buf[this.pos++] & 128);
        return this
    }, R.prototype.skipType = function(G) {
        switch (G) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for (;
                    (G = this.uint32() & 7) !== 4;) this.skipType(G);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + G + " at offset " + this.pos)
        }
        return this
    }, R._configure = function(G) {
        O = G, R.create = z(), O._configure();
        var Y = L.Long ? "toLong" : "toNumber";
        L.merge(R.prototype, {
            int64: function() {
                return K.call(this)[Y](!1)
            },
            uint64: function() {
                return K.call(this)[Y](!0)
            },
            sint64: function() {
                return K.call(this).zzDecode()[Y](!1)
            },
            fixed64: function() {
                return X.call(this)[Y](!0)
            },
            sfixed64: function() {
                return X.call(this)[Y](!1)
            }
        })
    }, reader
}
var reader_buffer, hasRequiredReader_buffer;

function requireReader_buffer() {
    if (hasRequiredReader_buffer) return reader_buffer;
    hasRequiredReader_buffer = 1, reader_buffer = M;
    var L = requireReader();
    (M.prototype = Object.create(L.prototype)).constructor = M;
    var O = requireMinimal$1();

    function M(I) {
        L.call(this, I)
    }
    return M._configure = function() {
        O.Buffer && (M.prototype._slice = O.Buffer.prototype.slice)
    }, M.prototype.string = function() {
        var I = this.uint32();
        return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + I, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + I, this.len))
    }, M._configure(), reader_buffer
}
var rpc = {},
    service, hasRequiredService;

function requireService() {
    if (hasRequiredService) return service;
    hasRequiredService = 1, service = O;
    var L = requireMinimal$1();
    (O.prototype = Object.create(L.EventEmitter.prototype)).constructor = O;

    function O(M, I, N) {
        if (typeof M != "function") throw TypeError("rpcImpl must be a function");
        L.EventEmitter.call(this), this.rpcImpl = M, this.requestDelimited = !!I, this.responseDelimited = !!N
    }
    return O.prototype.rpcCall = function M(I, N, R, H, z) {
        if (!H) throw TypeError("request must be specified");
        var K = this;
        if (!z) return L.asPromise(M, K, I, N, R, H);
        if (!K.rpcImpl) {
            setTimeout(function() {
                z(Error("already ended"))
            }, 0);
            return
        }
        try {
            return K.rpcImpl(I, N[K.requestDelimited ? "encodeDelimited" : "encode"](H).finish(), function(W, X) {
                if (W) return K.emit("error", W, I), z(W);
                if (X === null) {
                    K.end(!0);
                    return
                }
                if (!(X instanceof R)) try {
                    X = R[K.responseDelimited ? "decodeDelimited" : "decode"](X)
                } catch (G) {
                    return K.emit("error", G, I), z(G)
                }
                return K.emit("data", X, I), z(null, X)
            })
        } catch (W) {
            K.emit("error", W, I), setTimeout(function() {
                z(W)
            }, 0);
            return
        }
    }, O.prototype.end = function(M) {
        return this.rpcImpl && (M || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
    }, service
}
var hasRequiredRpc;

function requireRpc() {
    return hasRequiredRpc || (hasRequiredRpc = 1, function(L) {
        var O = L;
        O.Service = requireService()
    }(rpc)), rpc
}
var roots, hasRequiredRoots;

function requireRoots() {
    return hasRequiredRoots || (hasRequiredRoots = 1, roots = {}), roots
}
var hasRequiredIndexMinimal;

function requireIndexMinimal() {
    return hasRequiredIndexMinimal || (hasRequiredIndexMinimal = 1, function(L) {
        var O = L;
        O.build = "minimal", O.Writer = requireWriter(), O.BufferWriter = requireWriter_buffer(), O.Reader = requireReader(), O.BufferReader = requireReader_buffer(), O.util = requireMinimal$1(), O.rpc = requireRpc(), O.roots = requireRoots(), O.configure = M;

        function M() {
            O.util._configure(), O.Writer._configure(O.BufferWriter), O.Reader._configure(O.BufferReader)
        }
        M()
    }(indexMinimal)), indexMinimal
}
var minimal, hasRequiredMinimal;

function requireMinimal() {
    return hasRequiredMinimal || (hasRequiredMinimal = 1, minimal = requireIndexMinimal()), minimal
}
var minimalExports = requireMinimal();
const d$1 = getDefaultExportFromCjs(minimalExports);
d$1.util.Long = Long;
d$1.configure();
var MAX_DIGITS = 1e9,
    defaults = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    },
    Decimal, external = !0,
    decimalError = "[DecimalError] ",
    invalidArgument = decimalError + "Invalid argument: ",
    exponentOutOfRange = decimalError + "Exponent out of range: ",
    mathfloor = Math.floor,
    mathpow = Math.pow,
    isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    ONE, BASE = 1e7,
    LOG_BASE = 7,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE),
    P$1 = {};
P$1.absoluteValue = P$1.abs = function() {
    var L = new this.constructor(this);
    return L.s && (L.s = 1), L
};
P$1.comparedTo = P$1.cmp = function(L) {
    var O, M, I, N, R = this;
    if (L = new R.constructor(L), R.s !== L.s) return R.s || -L.s;
    if (R.e !== L.e) return R.e > L.e ^ R.s < 0 ? 1 : -1;
    for (I = R.d.length, N = L.d.length, O = 0, M = I < N ? I : N; O < M; ++O)
        if (R.d[O] !== L.d[O]) return R.d[O] > L.d[O] ^ R.s < 0 ? 1 : -1;
    return I === N ? 0 : I > N ^ R.s < 0 ? 1 : -1
};
P$1.decimalPlaces = P$1.dp = function() {
    var L = this,
        O = L.d.length - 1,
        M = (O - L.e) * LOG_BASE;
    if (O = L.d[O], O)
        for (; O % 10 == 0; O /= 10) M--;
    return M < 0 ? 0 : M
};
P$1.dividedBy = P$1.div = function(L) {
    return divide(this, new this.constructor(L))
};
P$1.dividedToIntegerBy = P$1.idiv = function(L) {
    var O = this,
        M = O.constructor;
    return round(divide(O, new M(L), 0, 1), M.precision)
};
P$1.equals = P$1.eq = function(L) {
    return !this.cmp(L)
};
P$1.exponent = function() {
    return getBase10Exponent(this)
};
P$1.greaterThan = P$1.gt = function(L) {
    return this.cmp(L) > 0
};
P$1.greaterThanOrEqualTo = P$1.gte = function(L) {
    return this.cmp(L) >= 0
};
P$1.isInteger = P$1.isint = function() {
    return this.e > this.d.length - 2
};
P$1.isNegative = P$1.isneg = function() {
    return this.s < 0
};
P$1.isPositive = P$1.ispos = function() {
    return this.s > 0
};
P$1.isZero = function() {
    return this.s === 0
};
P$1.lessThan = P$1.lt = function(L) {
    return this.cmp(L) < 0
};
P$1.lessThanOrEqualTo = P$1.lte = function(L) {
    return this.cmp(L) < 1
};
P$1.logarithm = P$1.log = function(L) {
    var O, M = this,
        I = M.constructor,
        N = I.precision,
        R = N + 5;
    if (L === void 0) L = new I(10);
    else if (L = new I(L), L.s < 1 || L.eq(ONE)) throw Error(decimalError + "NaN");
    if (M.s < 1) throw Error(decimalError + (M.s ? "NaN" : "-Infinity"));
    return M.eq(ONE) ? new I(0) : (external = !1, O = divide(ln(M, R), ln(L, R), R), external = !0, round(O, N))
};
P$1.minus = P$1.sub = function(L) {
    var O = this;
    return L = new O.constructor(L), O.s == L.s ? subtract(O, L) : add(O, (L.s = -L.s, L))
};
P$1.modulo = P$1.mod = function(L) {
    var O, M = this,
        I = M.constructor,
        N = I.precision;
    if (L = new I(L), !L.s) throw Error(decimalError + "NaN");
    return M.s ? (external = !1, O = divide(M, L, 0, 1).times(L), external = !0, M.minus(O)) : round(new I(M), N)
};
P$1.naturalExponential = P$1.exp = function() {
    return exp(this)
};
P$1.naturalLogarithm = P$1.ln = function() {
    return ln(this)
};
P$1.negated = P$1.neg = function() {
    var L = new this.constructor(this);
    return L.s = -L.s || 0, L
};
P$1.plus = P$1.add = function(L) {
    var O = this;
    return L = new O.constructor(L), O.s == L.s ? add(O, L) : subtract(O, (L.s = -L.s, L))
};
P$1.precision = P$1.sd = function(L) {
    var O, M, I, N = this;
    if (L !== void 0 && L !== !!L && L !== 1 && L !== 0) throw Error(invalidArgument + L);
    if (O = getBase10Exponent(N) + 1, I = N.d.length - 1, M = I * LOG_BASE + 1, I = N.d[I], I) {
        for (; I % 10 == 0; I /= 10) M--;
        for (I = N.d[0]; I >= 10; I /= 10) M++
    }
    return L && O > M ? O : M
};
P$1.squareRoot = P$1.sqrt = function() {
    var L, O, M, I, N, R, H, z = this,
        K = z.constructor;
    if (z.s < 1) {
        if (!z.s) return new K(0);
        throw Error(decimalError + "NaN")
    }
    for (L = getBase10Exponent(z), external = !1, N = Math.sqrt(+z), N == 0 || N == 1 / 0 ? (O = digitsToString(z.d), (O.length + L) % 2 == 0 && (O += "0"), N = Math.sqrt(O), L = mathfloor((L + 1) / 2) - (L < 0 || L % 2), N == 1 / 0 ? O = "5e" + L : (O = N.toExponential(), O = O.slice(0, O.indexOf("e") + 1) + L), I = new K(O)) : I = new K(N.toString()), M = K.precision, N = H = M + 3;;)
        if (R = I, I = R.plus(divide(z, R, H + 2)).times(.5), digitsToString(R.d).slice(0, H) === (O = digitsToString(I.d)).slice(0, H)) {
            if (O = O.slice(H - 3, H + 1), N == H && O == "4999") {
                if (round(R, M + 1, 0), R.times(R).eq(z)) {
                    I = R;
                    break
                }
            } else if (O != "9999") break;
            H += 4
        }
    return external = !0, round(I, M)
};
P$1.times = P$1.mul = function(L) {
    var O, M, I, N, R, H, z, K, W, X = this,
        G = X.constructor,
        Y = X.d,
        Z = (L = new G(L)).d;
    if (!X.s || !L.s) return new G(0);
    for (L.s *= X.s, M = X.e + L.e, K = Y.length, W = Z.length, K < W && (R = Y, Y = Z, Z = R, H = K, K = W, W = H), R = [], H = K + W, I = H; I--;) R.push(0);
    for (I = W; --I >= 0;) {
        for (O = 0, N = K + I; N > I;) z = R[N] + Z[I] * Y[N - I - 1] + O, R[N--] = z % BASE | 0, O = z / BASE | 0;
        R[N] = (R[N] + O) % BASE | 0
    }
    for (; !R[--H];) R.pop();
    return O ? ++M : R.shift(), L.d = R, L.e = M, external ? round(L, G.precision) : L
};
P$1.toDecimalPlaces = P$1.todp = function(L, O) {
    var M = this,
        I = M.constructor;
    return M = new I(M), L === void 0 ? M : (checkInt32(L, 0, MAX_DIGITS), O === void 0 ? O = I.rounding : checkInt32(O, 0, 8), round(M, L + getBase10Exponent(M) + 1, O))
};
P$1.toExponential = function(L, O) {
    var M, I = this,
        N = I.constructor;
    return L === void 0 ? M = toString(I, !0) : (checkInt32(L, 0, MAX_DIGITS), O === void 0 ? O = N.rounding : checkInt32(O, 0, 8), I = round(new N(I), L + 1, O), M = toString(I, !0, L + 1)), M
};
P$1.toFixed = function(L, O) {
    var M, I, N = this,
        R = N.constructor;
    return L === void 0 ? toString(N) : (checkInt32(L, 0, MAX_DIGITS), O === void 0 ? O = R.rounding : checkInt32(O, 0, 8), I = round(new R(N), L + getBase10Exponent(N) + 1, O), M = toString(I.abs(), !1, L + getBase10Exponent(I) + 1), N.isneg() && !N.isZero() ? "-" + M : M)
};
P$1.toInteger = P$1.toint = function() {
    var L = this,
        O = L.constructor;
    return round(new O(L), getBase10Exponent(L) + 1, O.rounding)
};
P$1.toNumber = function() {
    return +this
};
P$1.toPower = P$1.pow = function(L) {
    var O, M, I, N, R, H, z = this,
        K = z.constructor,
        W = 12,
        X = +(L = new K(L));
    if (!L.s) return new K(ONE);
    if (z = new K(z), !z.s) {
        if (L.s < 1) throw Error(decimalError + "Infinity");
        return z
    }
    if (z.eq(ONE)) return z;
    if (I = K.precision, L.eq(ONE)) return round(z, I);
    if (O = L.e, M = L.d.length - 1, H = O >= M, R = z.s, H) {
        if ((M = X < 0 ? -X : X) <= MAX_SAFE_INTEGER) {
            for (N = new K(ONE), O = Math.ceil(I / LOG_BASE + 4), external = !1; M % 2 && (N = N.times(z), truncate(N.d, O)), M = mathfloor(M / 2), M !== 0;) z = z.times(z), truncate(z.d, O);
            return external = !0, L.s < 0 ? new K(ONE).div(N) : round(N, I)
        }
    } else if (R < 0) throw Error(decimalError + "NaN");
    return R = R < 0 && L.d[Math.max(O, M)] & 1 ? -1 : 1, z.s = 1, external = !1, N = L.times(ln(z, I + W)), external = !0, N = exp(N), N.s = R, N
};
P$1.toPrecision = function(L, O) {
    var M, I, N = this,
        R = N.constructor;
    return L === void 0 ? (M = getBase10Exponent(N), I = toString(N, M <= R.toExpNeg || M >= R.toExpPos)) : (checkInt32(L, 1, MAX_DIGITS), O === void 0 ? O = R.rounding : checkInt32(O, 0, 8), N = round(new R(N), L, O), M = getBase10Exponent(N), I = toString(N, L <= M || M <= R.toExpNeg, L)), I
};
P$1.toSignificantDigits = P$1.tosd = function(L, O) {
    var M = this,
        I = M.constructor;
    return L === void 0 ? (L = I.precision, O = I.rounding) : (checkInt32(L, 1, MAX_DIGITS), O === void 0 ? O = I.rounding : checkInt32(O, 0, 8)), round(new I(M), L, O)
};
P$1.toString = P$1.valueOf = P$1.val = P$1.toJSON = P$1[Symbol.for("nodejs.util.inspect.custom")] = function() {
    var L = this,
        O = getBase10Exponent(L),
        M = L.constructor;
    return toString(L, O <= M.toExpNeg || O >= M.toExpPos)
};

function add(L, O) {
    var M, I, N, R, H, z, K, W, X = L.constructor,
        G = X.precision;
    if (!L.s || !O.s) return O.s || (O = new X(L)), external ? round(O, G) : O;
    if (K = L.d, W = O.d, H = L.e, N = O.e, K = K.slice(), R = H - N, R) {
        for (R < 0 ? (I = K, R = -R, z = W.length) : (I = W, N = H, z = K.length), H = Math.ceil(G / LOG_BASE), z = H > z ? H + 1 : z + 1, R > z && (R = z, I.length = 1), I.reverse(); R--;) I.push(0);
        I.reverse()
    }
    for (z = K.length, R = W.length, z - R < 0 && (R = z, I = W, W = K, K = I), M = 0; R;) M = (K[--R] = K[R] + W[R] + M) / BASE | 0, K[R] %= BASE;
    for (M && (K.unshift(M), ++N), z = K.length; K[--z] == 0;) K.pop();
    return O.d = K, O.e = N, external ? round(O, G) : O
}

function checkInt32(L, O, M) {
    if (L !== ~~L || L < O || L > M) throw Error(invalidArgument + L)
}

function digitsToString(L) {
    var O, M, I, N = L.length - 1,
        R = "",
        H = L[0];
    if (N > 0) {
        for (R += H, O = 1; O < N; O++) I = L[O] + "", M = LOG_BASE - I.length, M && (R += getZeroString(M)), R += I;
        H = L[O], I = H + "", M = LOG_BASE - I.length, M && (R += getZeroString(M))
    } else if (H === 0) return "0";
    for (; H % 10 === 0;) H /= 10;
    return R + H
}
var divide = function() {
    function L(I, N) {
        var R, H = 0,
            z = I.length;
        for (I = I.slice(); z--;) R = I[z] * N + H, I[z] = R % BASE | 0, H = R / BASE | 0;
        return H && I.unshift(H), I
    }

    function O(I, N, R, H) {
        var z, K;
        if (R != H) K = R > H ? 1 : -1;
        else
            for (z = K = 0; z < R; z++)
                if (I[z] != N[z]) {
                    K = I[z] > N[z] ? 1 : -1;
                    break
                } return K
    }

    function M(I, N, R) {
        for (var H = 0; R--;) I[R] -= H, H = I[R] < N[R] ? 1 : 0, I[R] = H * BASE + I[R] - N[R];
        for (; !I[0] && I.length > 1;) I.shift()
    }
    return function(I, N, R, H) {
        var z, K, W, X, G, Y, Z, Q, J, _, ee, te, ie, re, oe, ae, ne, se, he = I.constructor,
            me = I.s == N.s ? 1 : -1,
            le = I.d,
            pe = N.d;
        if (!I.s) return new he(I);
        if (!N.s) throw Error(decimalError + "Division by zero");
        for (K = I.e - N.e, ne = pe.length, oe = le.length, Z = new he(me), Q = Z.d = [], W = 0; pe[W] == (le[W] || 0);) ++W;
        if (pe[W] > (le[W] || 0) && --K, R == null ? te = R = he.precision : H ? te = R + (getBase10Exponent(I) - getBase10Exponent(N)) + 1 : te = R, te < 0) return new he(0);
        if (te = te / LOG_BASE + 2 | 0, W = 0, ne == 1)
            for (X = 0, pe = pe[0], te++;
                (W < oe || X) && te--; W++) ie = X * BASE + (le[W] || 0), Q[W] = ie / pe | 0, X = ie % pe | 0;
        else {
            for (X = BASE / (pe[0] + 1) | 0, X > 1 && (pe = L(pe, X), le = L(le, X), ne = pe.length, oe = le.length), re = ne, J = le.slice(0, ne), _ = J.length; _ < ne;) J[_++] = 0;
            se = pe.slice(), se.unshift(0), ae = pe[0], pe[1] >= BASE / 2 && ++ae;
            do X = 0, z = O(pe, J, ne, _), z < 0 ? (ee = J[0], ne != _ && (ee = ee * BASE + (J[1] || 0)), X = ee / ae | 0, X > 1 ? (X >= BASE && (X = BASE - 1), G = L(pe, X), Y = G.length, _ = J.length, z = O(G, J, Y, _), z == 1 && (X--, M(G, ne < Y ? se : pe, Y))) : (X == 0 && (z = X = 1), G = pe.slice()), Y = G.length, Y < _ && G.unshift(0), M(J, G, _), z == -1 && (_ = J.length, z = O(pe, J, ne, _), z < 1 && (X++, M(J, ne < _ ? se : pe, _))), _ = J.length) : z === 0 && (X++, J = [0]), Q[W++] = X, z && J[0] ? J[_++] = le[re] || 0 : (J = [le[re]], _ = 1); while ((re++ < oe || J[0] !== void 0) && te--)
        }
        return Q[0] || Q.shift(), Z.e = K, round(Z, H ? R + getBase10Exponent(Z) + 1 : R)
    }
}();

function exp(L, O) {
    var M, I, N, R, H, z, K = 0,
        W = 0,
        X = L.constructor,
        G = X.precision;
    if (getBase10Exponent(L) > 16) throw Error(exponentOutOfRange + getBase10Exponent(L));
    if (!L.s) return new X(ONE);
    for (external = !1, z = G, H = new X(.03125); L.abs().gte(.1);) L = L.times(H), W += 5;
    for (I = Math.log(mathpow(2, W)) / Math.LN10 * 2 + 5 | 0, z += I, M = N = R = new X(ONE), X.precision = z;;) {
        if (N = round(N.times(L), z), M = M.times(++K), H = R.plus(divide(N, M, z)), digitsToString(H.d).slice(0, z) === digitsToString(R.d).slice(0, z)) {
            for (; W--;) R = round(R.times(R), z);
            return X.precision = G, O == null ? (external = !0, round(R, G)) : R
        }
        R = H
    }
}

function getBase10Exponent(L) {
    for (var O = L.e * LOG_BASE, M = L.d[0]; M >= 10; M /= 10) O++;
    return O
}

function getLn10(L, O, M) {
    if (O > L.LN10.sd()) throw external = !0, M && (L.precision = M), Error(decimalError + "LN10 precision limit exceeded");
    return round(new L(L.LN10), O)
}

function getZeroString(L) {
    for (var O = ""; L--;) O += "0";
    return O
}

function ln(L, O) {
    var M, I, N, R, H, z, K, W, X, G = 1,
        Y = 10,
        Z = L,
        Q = Z.d,
        J = Z.constructor,
        _ = J.precision;
    if (Z.s < 1) throw Error(decimalError + (Z.s ? "NaN" : "-Infinity"));
    if (Z.eq(ONE)) return new J(0);
    if (O == null ? (external = !1, W = _) : W = O, Z.eq(10)) return O == null && (external = !0), getLn10(J, W);
    if (W += Y, J.precision = W, M = digitsToString(Q), I = M.charAt(0), R = getBase10Exponent(Z), Math.abs(R) < 15e14) {
        for (; I < 7 && I != 1 || I == 1 && M.charAt(1) > 3;) Z = Z.times(L), M = digitsToString(Z.d), I = M.charAt(0), G++;
        R = getBase10Exponent(Z), I > 1 ? (Z = new J("0." + M), R++) : Z = new J(I + "." + M.slice(1))
    } else return K = getLn10(J, W + 2, _).times(R + ""), Z = ln(new J(I + "." + M.slice(1)), W - Y).plus(K), J.precision = _, O == null ? (external = !0, round(Z, _)) : Z;
    for (z = H = Z = divide(Z.minus(ONE), Z.plus(ONE), W), X = round(Z.times(Z), W), N = 3;;) {
        if (H = round(H.times(X), W), K = z.plus(divide(H, new J(N), W)), digitsToString(K.d).slice(0, W) === digitsToString(z.d).slice(0, W)) return z = z.times(2), R !== 0 && (z = z.plus(getLn10(J, W + 2, _).times(R + ""))), z = divide(z, new J(G), W), J.precision = _, O == null ? (external = !0, round(z, _)) : z;
        z = K, N += 2
    }
}

function parseDecimal(L, O) {
    var M, I, N;
    for ((M = O.indexOf(".")) > -1 && (O = O.replace(".", "")), (I = O.search(/e/i)) > 0 ? (M < 0 && (M = I), M += +O.slice(I + 1), O = O.substring(0, I)) : M < 0 && (M = O.length), I = 0; O.charCodeAt(I) === 48;) ++I;
    for (N = O.length; O.charCodeAt(N - 1) === 48;) --N;
    if (O = O.slice(I, N), O) {
        if (N -= I, M = M - I - 1, L.e = mathfloor(M / LOG_BASE), L.d = [], I = (M + 1) % LOG_BASE, M < 0 && (I += LOG_BASE), I < N) {
            for (I && L.d.push(+O.slice(0, I)), N -= LOG_BASE; I < N;) L.d.push(+O.slice(I, I += LOG_BASE));
            O = O.slice(I), I = LOG_BASE - O.length
        } else I -= N;
        for (; I--;) O += "0";
        if (L.d.push(+O), external && (L.e > MAX_E || L.e < -MAX_E)) throw Error(exponentOutOfRange + M)
    } else L.s = 0, L.e = 0, L.d = [0];
    return L
}

function round(L, O, M) {
    var I, N, R, H, z, K, W, X, G = L.d;
    for (H = 1, R = G[0]; R >= 10; R /= 10) H++;
    if (I = O - H, I < 0) I += LOG_BASE, N = O, W = G[X = 0];
    else {
        if (X = Math.ceil((I + 1) / LOG_BASE), R = G.length, X >= R) return L;
        for (W = R = G[X], H = 1; R >= 10; R /= 10) H++;
        I %= LOG_BASE, N = I - LOG_BASE + H
    }
    if (M !== void 0 && (R = mathpow(10, H - N - 1), z = W / R % 10 | 0, K = O < 0 || G[X + 1] !== void 0 || W % R, K = M < 4 ? (z || K) && (M == 0 || M == (L.s < 0 ? 3 : 2)) : z > 5 || z == 5 && (M == 4 || K || M == 6 && (I > 0 ? N > 0 ? W / mathpow(10, H - N) : 0 : G[X - 1]) % 10 & 1 || M == (L.s < 0 ? 8 : 7))), O < 1 || !G[0]) return K ? (R = getBase10Exponent(L), G.length = 1, O = O - R - 1, G[0] = mathpow(10, (LOG_BASE - O % LOG_BASE) % LOG_BASE), L.e = mathfloor(-O / LOG_BASE) || 0) : (G.length = 1, G[0] = L.e = L.s = 0), L;
    if (I == 0 ? (G.length = X, R = 1, X--) : (G.length = X + 1, R = mathpow(10, LOG_BASE - I), G[X] = N > 0 ? (W / mathpow(10, H - N) % mathpow(10, N) | 0) * R : 0), K)
        for (;;)
            if (X == 0) {
                (G[0] += R) == BASE && (G[0] = 1, ++L.e);
                break
            } else {
                if (G[X] += R, G[X] != BASE) break;
                G[X--] = 0, R = 1
            }
    for (I = G.length; G[--I] === 0;) G.pop();
    if (external && (L.e > MAX_E || L.e < -MAX_E)) throw Error(exponentOutOfRange + getBase10Exponent(L));
    return L
}

function subtract(L, O) {
    var M, I, N, R, H, z, K, W, X, G, Y = L.constructor,
        Z = Y.precision;
    if (!L.s || !O.s) return O.s ? O.s = -O.s : O = new Y(L), external ? round(O, Z) : O;
    if (K = L.d, G = O.d, I = O.e, W = L.e, K = K.slice(), H = W - I, H) {
        for (X = H < 0, X ? (M = K, H = -H, z = G.length) : (M = G, I = W, z = K.length), N = Math.max(Math.ceil(Z / LOG_BASE), z) + 2, H > N && (H = N, M.length = 1), M.reverse(), N = H; N--;) M.push(0);
        M.reverse()
    } else {
        for (N = K.length, z = G.length, X = N < z, X && (z = N), N = 0; N < z; N++)
            if (K[N] != G[N]) {
                X = K[N] < G[N];
                break
            }
        H = 0
    }
    for (X && (M = K, K = G, G = M, O.s = -O.s), z = K.length, N = G.length - z; N > 0; --N) K[z++] = 0;
    for (N = G.length; N > H;) {
        if (K[--N] < G[N]) {
            for (R = N; R && K[--R] === 0;) K[R] = BASE - 1;
            --K[R], K[N] += BASE
        }
        K[N] -= G[N]
    }
    for (; K[--z] === 0;) K.pop();
    for (; K[0] === 0; K.shift()) --I;
    return K[0] ? (O.d = K, O.e = I, external ? round(O, Z) : O) : new Y(0)
}

function toString(L, O, M) {
    var I, N = getBase10Exponent(L),
        R = digitsToString(L.d),
        H = R.length;
    return O ? (M && (I = M - H) > 0 ? R = R.charAt(0) + "." + R.slice(1) + getZeroString(I) : H > 1 && (R = R.charAt(0) + "." + R.slice(1)), R = R + (N < 0 ? "e" : "e+") + N) : N < 0 ? (R = "0." + getZeroString(-N - 1) + R, M && (I = M - H) > 0 && (R += getZeroString(I))) : N >= H ? (R += getZeroString(N + 1 - H), M && (I = M - N - 1) > 0 && (R = R + "." + getZeroString(I))) : ((I = N + 1) < H && (R = R.slice(0, I) + "." + R.slice(I)), M && (I = M - H) > 0 && (N + 1 === H && (R += "."), R += getZeroString(I))), L.s < 0 ? "-" + R : R
}

function truncate(L, O) {
    if (L.length > O) return L.length = O, !0
}

function clone(L) {
    var O, M, I;

    function N(R) {
        var H = this;
        if (!(H instanceof N)) return new N(R);
        if (H.constructor = N, R instanceof N) {
            H.s = R.s, H.e = R.e, H.d = (R = R.d) ? R.slice() : R;
            return
        }
        if (typeof R == "number") {
            if (R * 0 !== 0) throw Error(invalidArgument + R);
            if (R > 0) H.s = 1;
            else if (R < 0) R = -R, H.s = -1;
            else {
                H.s = 0, H.e = 0, H.d = [0];
                return
            }
            if (R === ~~R && R < 1e7) {
                H.e = 0, H.d = [R];
                return
            }
            return parseDecimal(H, R.toString())
        } else if (typeof R != "string") throw Error(invalidArgument + R);
        if (R.charCodeAt(0) === 45 ? (R = R.slice(1), H.s = -1) : H.s = 1, isDecimal.test(R)) parseDecimal(H, R);
        else throw Error(invalidArgument + R)
    }
    if (N.prototype = P$1, N.ROUND_UP = 0, N.ROUND_DOWN = 1, N.ROUND_CEIL = 2, N.ROUND_FLOOR = 3, N.ROUND_HALF_UP = 4, N.ROUND_HALF_DOWN = 5, N.ROUND_HALF_EVEN = 6, N.ROUND_HALF_CEIL = 7, N.ROUND_HALF_FLOOR = 8, N.clone = clone, N.config = N.set = config$1, L === void 0 && (L = {}), L)
        for (I = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], O = 0; O < I.length;) L.hasOwnProperty(M = I[O++]) || (L[M] = this[M]);
    return N.config(L), N
}

function config$1(L) {
    if (!L || typeof L != "object") throw Error(decimalError + "Object expected");
    var O, M, I, N = ["precision", 1, MAX_DIGITS, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
    for (O = 0; O < N.length; O += 3)
        if ((I = L[M = N[O]]) !== void 0)
            if (mathfloor(I) === I && I >= N[O + 1] && I <= N[O + 2]) this[M] = I;
            else throw Error(invalidArgument + M + ": " + I);
    if ((I = L[M = "LN10"]) !== void 0)
        if (I == Math.LN10) this[M] = new this(I);
        else throw Error(invalidArgument + M + ": " + I);
    return this
}
var Decimal = clone(defaults);
ONE = new Decimal(1);
const Decimal$1 = Decimal;

function cx(...L) {
    return L.filter(Boolean).join(" ")
}
const debounce$1 = (L, O) => {
        let M;
        const I = () => clearTimeout(M);
        return getOwner() && onCleanup(I), Object.assign((...N) => {
            M !== void 0 && I(), M = setTimeout(() => L(...N), O)
        }, {
            clear: I
        })
    },
    throttle = (L, O) => {
        let M = !1,
            I, N;
        const R = (...z) => {
                N = z, !M && (M = !0, I = setTimeout(() => {
                    L(...N), M = !1
                }, O))
            },
            H = () => {
                clearTimeout(I), M = !1
            };
        return getOwner() && onCleanup(H), Object.assign(R, {
            clear: H
        })
    };

function leading(L, O, M) {
    let I = !1;
    const N = L(() => I = !1, M),
        R = (...z) => {
            I || O(...z), I = !0, N()
        },
        H = () => {
            I = !1, N.clear()
        };
    return getOwner() && onCleanup(H), Object.assign(R, {
        clear: H
    })
}

function leadingAndTrailing(L, O, M) {
    let I;
    (function(K) {
        K[K.Ready = 0] = "Ready", K[K.Leading = 1] = "Leading", K[K.Trailing = 2] = "Trailing"
    })(I || (I = {}));
    let N = I.Ready;
    const R = L(K => {
            N === I.Trailing && O(...K), N = I.Ready
        }, M),
        H = (...K) => {
            N !== I.Trailing && (N === I.Ready && O(...K), N += 1), R(K)
        },
        z = () => {
            N = I.Ready, R.clear()
        };
    return getOwner() && onCleanup(z), Object.assign(H, {
        clear: z
    })
}

function createScheduled(L) {
    let O = 0,
        M = !1;
    const [I, N] = createSignal(void 0, {
        equals: !1
    }), R = L(() => {
        M = !0, N()
    });
    return () => (M || (R(), I()), M ? (M = !!O, !0) : (getListener() && (O++, onCleanup(() => O--)), !1))
}
const DESIGN_WIDTH = 430,
    MAX_DESIGN_WIDTH = 640,
    MOBILE_BREAKPOINT = 700,
    [env, setEnv] = createRoot(() => {
        function L() {
            const N = document.documentElement.clientWidth,
                R = N < MAX_DESIGN_WIDTH ? N : DESIGN_WIDTH;
            return {
                clientWidth: N,
                remScale: R / DESIGN_WIDTH
            }
        }
        const O = [document.documentElement.clientWidth, document.documentElement.clientHeight],
            [M, I] = createStore({
                DESIGN_WIDTH,
                MAX_DESIGN_WIDTH,
                timeDiff: 0,
                freeCoin: "FREECOIN",
                platformCoin: "PLATFORMCOIN",
                bcl: "BCL",
                ...L(),
                siteName: "SITENAME",
                host: "HOST",
                mascot: "MASCOT",
                isLowEndDevice: !1,
                initSearchParams: new URLSearchParams(location.search),
                initHashParams: location.hash,
                langs: {},
                mobile: O[0] < window.screen.width / 2 && O[0] < MOBILE_BREAKPOINT || O.every(N => N <= 1e3) && O.some(N => N <= MOBILE_BREAKPOINT),
                localCurrencyConfig: [],
                get serverTime() {
                    return new Date(Date.now() - M.timeDiff)
                },
                inActive: !1,
                appName: "BC.GAME",
                isPWA: !1,
                isAPP: !1
            });
        return globalThis.addEventListener("resize", throttle(() => I(L()), 100)), [M, I]
    }),
    swipeArea = Math.ceil(innerWidth * .07),
    isBot = navigator.webdriver,
    shouldReduceAnimation = () => env.isLowEndDevice,
    isSupportTouch = Object.prototype.hasOwnProperty.call(window, "ontouchstart");

function isColliding(L, O) {
    return {
        x: L.x < O.x + O.width && L.x + L.width > O.x,
        y: L.y < O.y + O.height && L.y + L.height > O.y
    }
}
const easeBack = [.36, .66, .04, 1];

function isIos() {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
}

function isAndroid() {
    return /android/i.test(navigator.userAgent)
}
const delay$1 = (L = 0) => new Promise(O => setTimeout(O, L)),
    loadScript = memo$1((L, O, M) => new Promise((I, N) => {
        const R = document.head || document.getElementsByTagName("head")[0],
            H = document.createElement("script");
        H.async = !0, H.src = L, M && (H.id = M), H.charset = "utf8", R.appendChild(H), H.onload = () => {
            const z = O ? window[O] : null;
            R.removeChild(H), I(z)
        }, H.onerror = () => {
            R.removeChild(H), loadScript.cache.delete(`${L}:${O}`), N(new Error(`Load Script Error: ${L}`))
        }
    })),
    safeInvokeHandlerUnion = (L, O) => !L || !O ? void 0 : (M => Array.isArray(M) && M.length === 2)(L) ? L[0](L[1], O) : L ? .(O);

function composeEventHandlers(L) {
    return O => {
        for (const M of L) safeInvokeHandlerUnion(M, O)
    }
}
const defineComposition = (L, O) => {
    const M = R => {
            const H = Object.entries(O).map(([z, K]) => [z, I(K, R[z])]);
            return Object.fromEntries(H)
        },
        I = (R, H) => !H || !H.class ? R : z => createComponent(R, mergeProps(z, {
            get class() {
                return cx(H.class, z.class)
            }
        })),
        N = R => {
            const H = M(R),
                z = I(L, R.Root);
            return Object.assign(z, H, {
                registerStyles: N
            })
        };
    return Object.assign(L, O, {
        registerStyles: N
    })
};
let globalInput;

function copyToClipboard(L) {
    navigator.clipboard ? navigator.clipboard.writeText(L).then(() => {}).catch(O => {
        fallbackCopy(L)
    }) : fallbackCopy(L)
}

function fallbackCopy(L) {
    globalInput || (globalInput = document.createElement("input"), document.body.appendChild(globalInput), globalInput.style.opacity = "0", globalInput.setAttribute("readonly", "readonly"), globalInput.setSelectionRange(0, 99999)), globalInput.setAttribute("value", L), globalInput.select(), document.execCommand("copy")
}
const prefixes = [
    ["B", 9],
    ["M", 6],
    ["K", 3],
    ["", 1],
    ["m", -3],
    ["μ", -6],
    ["n", -9]
];

function getExponential(L, O = 6) {
    const M = L.toExponential(O),
        [, I] = M.split("e").map(Number);
    if (I > O) {
        const N = Math.max(3 - Math.ceil((I - O) / 3), 0),
            [R, H] = prefixes[N];
        return {
            num: H === 1 ? L : L * 10 ** -H,
            exp: H,
            unit: R
        }
    } else return {
        num: L,
        exp: 1,
        unit: ""
    }
}

function formatBalance(L, O = 7) {
    const {
        num: M,
        exp: I,
        unit: N
    } = getExponential(L.toNumber(), O);
    let R = "";
    return I > 1 ? R = new Decimal$1(M).toFixed(2, Decimal$1.ROUND_DOWN) + N : M < 1 ? R = clearFloatZero(new Decimal$1(M).toFixed(O, Decimal$1.ROUND_DOWN)) : R = clearFloatZero(new Decimal$1(M).toPrecision(O + 1, Decimal$1.ROUND_DOWN)), R
}

function clearFloatZero(L) {
    return L.includes(".") ? L.replace(/\.?0+$|\.$/, "") : L
}

function shallow(L, O) {
    const M = Object.keys(L),
        I = Object.keys(O);
    return M.length !== I.length ? !1 : M.every(N => Object.prototype.hasOwnProperty.call(O, N) && L[N] === O[N])
}

function _getHostType(L) {
    const O = ["bc.me", "bc.ai", "bcga.me"],
        M = ["bcgame.ke"],
        I = ["bc.xyz"],
        N = ["bcgame.sk"],
        R = ["bcgame.us", "bcgame-us-mirror1.com"],
        H = ["bcbet.ng"],
        z = ["bcigra.com", "bcfeast88.com", "bcwildwagers.com"],
        K = ["87.com"],
        W = ["bcgamebet.ng"],
        X = ["bcgame.vc"],
        G = ["bcsports.game", "dogcrash.xyz"],
        Y = ["bckm.top"],
        Z = ["bcgame.ke", "bcbet.ng"],
        Q = ["bzjogos.com", "cocoforyou.top", "bcsports.game"],
        J = ["bcgame.mx"],
        _ = ["jb.com"];
    return {
        isBrHost: O.includes(L),
        isKenyaHost: M.includes(L),
        isSpreadHost: I.includes(L),
        isUsHost: R.includes(L),
        isSkHost: N.includes(L),
        isNgHost: H.includes(L),
        isRuHosts: z.includes(L),
        isSpHost: K.includes(L),
        isNg2Host: W.includes(L),
        isIdHost: X.includes(L),
        isAnjouanHost: Y.includes(L),
        isBrAuditHost: G.includes(L),
        isSportsHost: Z.includes(L),
        isBzHost: Q.includes(L),
        isMxHost: J.includes(L),
        isJbHost: _.includes(L)
    }
}
const getHostType = memo$1(_getHostType);

function _getAreaAndLang(L, O) {
    const M = ["zh-TW", "zh-CN", "ta", "id", "ms", "my", "tl", "th", "vi"],
        I = ["ID", "MY", "MM", "PH", "TH", "VN", "BN", "TL", "LA", "SG"],
        N = ["ta", "te", "hi", "en-IN"],
        R = L === "ja",
        H = O === "JP",
        z = L === "ko",
        K = O === "KR",
        W = N.includes(L),
        X = O === "IN",
        G = M.includes(L),
        Y = I.includes(O);
    return {
        isJapanLang: R,
        isJapanIP: H,
        isKoreaLang: z,
        isKoreaIP: K,
        isIndiaLang: W,
        isIndiaIP: X,
        isSoutheastAsiaLang: G,
        isSoutheastAsiaIP: Y,
        isJp: R || H,
        isKr: z || K,
        isIn: W || X,
        isSoutheast: G || Y
    }
}
const getAreaAndLang = memo$1(_getAreaAndLang);

function disableChangeFiatFlag() {
    const {
        isNgHost: L,
        isNg2Host: O,
        isIdHost: M,
        isKenyaHost: I,
        isBrAuditHost: N,
        isBrHost: R,
        isUsHost: H,
        isMxHost: z
    } = getHostType(env.host);
    return L || O || M || I || N || R || H || z
}

function replaceHostName(L, O) {
    if (!L) return "";
    let M = L;
    const {
        isSpHost: I,
        isBzHost: N
    } = getHostType(O);
    return O.includes("bcsports.game") ? (M = M.replace(/BC/gi, "BZ"), M = M.replace(/BC.GAME/gi, "bcsports.game"), M) : (I && (M = M.replace(/BC/gi, "87"), M = M.replace(/BC.GAME/gi, "87.com")), N && (M = M.replace(/BC/gi, "BZ"), M = M.replace(/BC.GAME/gi, "bzjogos.com")), M)
}
const rootScrollElement = document.scrollingElement || document.documentElement || document.body;

function getScrollbarWidth() {
    const L = document.createElement("div");
    L.style.visibility = "hidden", L.style.overflow = "scroll", L.style.width = "100px", L.style.height = "100px", document.body.appendChild(L);
    const O = L.offsetWidth - L.clientWidth;
    return document.body.removeChild(L), O
}

function createFunctionQueue(L, O = 200) {
    const M = [];
    let I = !1,
        N = 0;

    function R() {
        if (I) return;
        I = !0;

        function H() {
            const z = M.shift();
            if (z) {
                const K = Date.now(),
                    W = Math.max(0, O + N - K);
                setTimeout(() => {
                    z(), N = Date.now(), H()
                }, W)
            } else {
                I = !1;
                return
            }
        }
        H()
    }
    return (...H) => {
        M.push(() => L(...H)), R()
    }
}

function murmurHash(L, O = 0) {
    let M, I, N, R;
    const H = L.length & 3,
        z = L.length - H;
    M = O;
    const K = 3432918353,
        W = 461845907;
    for (R = 0; R < z;) N = L.charCodeAt(R) & 255 | (L.charCodeAt(++R) & 255) << 8 | (L.charCodeAt(++R) & 255) << 16 | (L.charCodeAt(++R) & 255) << 24, ++R, N = (N & 65535) * K + (((N >>> 16) * K & 65535) << 16) & 4294967295, N = N << 15 | N >>> 17, N = (N & 65535) * W + (((N >>> 16) * W & 65535) << 16) & 4294967295, M ^= N, M = M << 13 | M >>> 19, I = (M & 65535) * 5 + (((M >>> 16) * 5 & 65535) << 16) & 4294967295, M = (I & 65535) + 27492 + (((I >>> 16) + 58964 & 65535) << 16);
    switch (N = 0, H) {
        case 3:
            N ^= (L.charCodeAt(R + 2) & 255) << 16;
        case 2:
            N ^= (L.charCodeAt(R + 1) & 255) << 8;
        case 1:
            N ^= L.charCodeAt(R) & 255, N = (N & 65535) * K + (((N >>> 16) * K & 65535) << 16) & 4294967295, N = N << 15 | N >>> 17, N = (N & 65535) * W + (((N >>> 16) * W & 65535) << 16) & 4294967295, M ^= N
    }
    return M ^= L.length, M ^= M >>> 16, M = (M & 65535) * 2246822507 + (((M >>> 16) * 2246822507 & 65535) << 16) & 4294967295, M ^= M >>> 13, M = (M & 65535) * 3266489909 + (((M >>> 16) * 3266489909 & 65535) << 16) & 4294967295, M ^= M >>> 16, M >>> 0
}

function memo$1(L) {
    const O = new Map,
        M = function(...I) {
            const N = I.toString();
            if (O.has(N)) return O.get(N);
            const R = L(...I);
            return O.set(N, R), R
        };
    return M.cache = O, M
}

function sortedIndexBy(L, O, M) {
    let I = 0,
        N = L.length;
    const R = M(O);
    for (; I < N;) {
        const H = Math.floor((I + N) / 2);
        M(L[H]) < R ? I = H + 1 : N = H
    }
    return I
}
const utils = Object.freeze(Object.defineProperty({
    __proto__: null,
    _getAreaAndLang,
    clearFloatZero,
    composeEventHandlers,
    copyToClipboard,
    createFunctionQueue,
    defineComposition,
    delay: delay$1,
    disableChangeFiatFlag,
    easeBack,
    formatBalance,
    getAreaAndLang,
    getExponential,
    getHostType,
    getScrollbarWidth,
    isAndroid,
    isBot,
    isColliding,
    isIos,
    isSupportTouch,
    loadScript,
    memo: memo$1,
    murmurHash,
    replaceHostName,
    rootScrollElement,
    safeInvokeHandlerUnion,
    shallow,
    shouldReduceAnimation,
    sortedIndexBy,
    swipeArea
}, Symbol.toStringTag, {
    value: "Module"
}));
var eventemitter3 = {
        exports: {}
    },
    hasRequiredEventemitter3;

function requireEventemitter3() {
    return hasRequiredEventemitter3 || (hasRequiredEventemitter3 = 1, function(L) {
        var O = Object.prototype.hasOwnProperty,
            M = "~";

        function I() {}
        Object.create && (I.prototype = Object.create(null), new I().__proto__ || (M = !1));

        function N(K, W, X) {
            this.fn = K, this.context = W, this.once = X || !1
        }

        function R(K, W, X, G, Y) {
            if (typeof X != "function") throw new TypeError("The listener must be a function");
            var Z = new N(X, G || K, Y),
                Q = M ? M + W : W;
            return K._events[Q] ? K._events[Q].fn ? K._events[Q] = [K._events[Q], Z] : K._events[Q].push(Z) : (K._events[Q] = Z, K._eventsCount++), K
        }

        function H(K, W) {
            --K._eventsCount === 0 ? K._events = new I : delete K._events[W]
        }

        function z() {
            this._events = new I, this._eventsCount = 0
        }
        z.prototype.eventNames = function() {
            var K = [],
                W, X;
            if (this._eventsCount === 0) return K;
            for (X in W = this._events) O.call(W, X) && K.push(M ? X.slice(1) : X);
            return Object.getOwnPropertySymbols ? K.concat(Object.getOwnPropertySymbols(W)) : K
        }, z.prototype.listeners = function(K) {
            var W = M ? M + K : K,
                X = this._events[W];
            if (!X) return [];
            if (X.fn) return [X.fn];
            for (var G = 0, Y = X.length, Z = new Array(Y); G < Y; G++) Z[G] = X[G].fn;
            return Z
        }, z.prototype.listenerCount = function(K) {
            var W = M ? M + K : K,
                X = this._events[W];
            return X ? X.fn ? 1 : X.length : 0
        }, z.prototype.emit = function(K, W, X, G, Y, Z) {
            var Q = M ? M + K : K;
            if (!this._events[Q]) return !1;
            var J = this._events[Q],
                _ = arguments.length,
                ee, te;
            if (J.fn) {
                switch (J.once && this.removeListener(K, J.fn, void 0, !0), _) {
                    case 1:
                        return J.fn.call(J.context), !0;
                    case 2:
                        return J.fn.call(J.context, W), !0;
                    case 3:
                        return J.fn.call(J.context, W, X), !0;
                    case 4:
                        return J.fn.call(J.context, W, X, G), !0;
                    case 5:
                        return J.fn.call(J.context, W, X, G, Y), !0;
                    case 6:
                        return J.fn.call(J.context, W, X, G, Y, Z), !0
                }
                for (te = 1, ee = new Array(_ - 1); te < _; te++) ee[te - 1] = arguments[te];
                J.fn.apply(J.context, ee)
            } else {
                var ie = J.length,
                    re;
                for (te = 0; te < ie; te++) switch (J[te].once && this.removeListener(K, J[te].fn, void 0, !0), _) {
                    case 1:
                        J[te].fn.call(J[te].context);
                        break;
                    case 2:
                        J[te].fn.call(J[te].context, W);
                        break;
                    case 3:
                        J[te].fn.call(J[te].context, W, X);
                        break;
                    case 4:
                        J[te].fn.call(J[te].context, W, X, G);
                        break;
                    default:
                        if (!ee)
                            for (re = 1, ee = new Array(_ - 1); re < _; re++) ee[re - 1] = arguments[re];
                        J[te].fn.apply(J[te].context, ee)
                }
            }
            return !0
        }, z.prototype.on = function(K, W, X) {
            return R(this, K, W, X, !1)
        }, z.prototype.once = function(K, W, X) {
            return R(this, K, W, X, !0)
        }, z.prototype.removeListener = function(K, W, X, G) {
            var Y = M ? M + K : K;
            if (!this._events[Y]) return this;
            if (!W) return H(this, Y), this;
            var Z = this._events[Y];
            if (Z.fn) Z.fn === W && (!G || Z.once) && (!X || Z.context === X) && H(this, Y);
            else {
                for (var Q = 0, J = [], _ = Z.length; Q < _; Q++)(Z[Q].fn !== W || G && !Z[Q].once || X && Z[Q].context !== X) && J.push(Z[Q]);
                J.length ? this._events[Y] = J.length === 1 ? J[0] : J : H(this, Y)
            }
            return this
        }, z.prototype.removeAllListeners = function(K) {
            var W;
            return K ? (W = M ? M + K : K, this._events[W] && H(this, W)) : (this._events = new I, this._eventsCount = 0), this
        }, z.prototype.off = z.prototype.removeListener, z.prototype.addListener = z.prototype.on, z.prefixed = M, z.EventEmitter = z, L.exports = z
    }(eventemitter3)), eventemitter3.exports
}
var eventemitter3Exports = requireEventemitter3();
const A$1 = getDefaultExportFromCjs(eventemitter3Exports);
class TimeoutError extends Error {
    constructor(O) {
        super(O), this.name = "TimeoutError"
    }
}
class AbortError extends Error {
    constructor(O) {
        super(), this.name = "AbortError", this.message = O
    }
}
const getDOMException = L => globalThis.DOMException === void 0 ? new AbortError(L) : new DOMException(L),
    getAbortedReason = L => {
        const O = L.reason === void 0 ? getDOMException("This operation was aborted.") : L.reason;
        return O instanceof Error ? O : getDOMException(O)
    };

function pTimeout(L, O) {
    const {
        milliseconds: M,
        fallback: I,
        message: N,
        customTimers: R = {
            setTimeout,
            clearTimeout
        }
    } = O;
    let H, z;
    const K = new Promise((W, X) => {
        if (typeof M != "number" || Math.sign(M) !== 1) throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${M}\``);
        if (O.signal) {
            const {
                signal: Y
            } = O;
            Y.aborted && X(getAbortedReason(Y)), z = () => {
                X(getAbortedReason(Y))
            }, Y.addEventListener("abort", z, {
                once: !0
            })
        }
        if (M === Number.POSITIVE_INFINITY) {
            L.then(W, X);
            return
        }
        const G = new TimeoutError;
        H = R.setTimeout.call(void 0, () => {
            if (I) {
                try {
                    W(I())
                } catch (Y) {
                    X(Y)
                }
                return
            }
            typeof L.cancel == "function" && L.cancel(), N === !1 ? W() : N instanceof Error ? X(N) : (G.message = N ? ? `Promise timed out after ${M} milliseconds`, X(G))
        }, M), (async () => {
            try {
                W(await L)
            } catch (Y) {
                X(Y)
            }
        })()
    }).finally(() => {
        K.clear(), z && O.signal && O.signal.removeEventListener("abort", z)
    });
    return K.clear = () => {
        R.clearTimeout.call(void 0, H), H = void 0
    }, K
}

function lowerBound(L, O, M) {
    let I = 0,
        N = L.length;
    for (; N > 0;) {
        const R = Math.trunc(N / 2);
        let H = I + R;
        M(L[H], O) <= 0 ? (I = ++H, N -= R + 1) : N = R
    }
    return I
}
var Ie;
class PriorityQueue {
    constructor() {
        Ae(this, Ie, [])
    }
    enqueue(O, M) {
        M = {
            priority: 0,
            ...M
        };
        const I = {
            priority: M.priority,
            id: M.id,
            run: O
        };
        if (this.size === 0 || ge(this, Ie)[this.size - 1].priority >= M.priority) {
            ge(this, Ie).push(I);
            return
        }
        const N = lowerBound(ge(this, Ie), I, (R, H) => H.priority - R.priority);
        ge(this, Ie).splice(N, 0, I)
    }
    setPriority(O, M) {
        const I = ge(this, Ie).findIndex(R => R.id === O);
        if (I === -1) throw new ReferenceError(`No promise function with the id "${O}" exists in the queue.`);
        const [N] = ge(this, Ie).splice(I, 1);
        this.enqueue(N.run, {
            priority: M,
            id: O
        })
    }
    dequeue() {
        const O = ge(this, Ie).shift();
        return O ? .run
    }
    filter(O) {
        return ge(this, Ie).filter(M => M.priority === O.priority).map(M => M.run)
    }
    get size() {
        return ge(this, Ie).length
    }
}
Ie = new WeakMap;
var He, ze, Fe, Ge, Ue, Xe, Be, We, Pe, Ye, Le, Ve, Ne, Ze, nt, we, ht, pt, mt, gt, vt, et, ot, st, tt, yt, rt;
class PQueue extends A$1 {
    constructor(O) {
        var M, I;
        if (super(), Ae(this, we), Ae(this, He), Ae(this, ze), Ae(this, Fe, 0), Ae(this, Ge), Ae(this, Ue), Ae(this, Xe, 0), Ae(this, Be), Ae(this, We), Ae(this, Pe), Ae(this, Ye), Ae(this, Le, 0), Ae(this, Ve), Ae(this, Ne), Ae(this, Ze), Ae(this, nt, 1 n), be(this, "timeout"), O = {
                carryoverConcurrencyCount: !1,
                intervalCap: Number.POSITIVE_INFINITY,
                interval: 0,
                concurrency: Number.POSITIVE_INFINITY,
                autoStart: !0,
                queueClass: PriorityQueue,
                ...O
            }, !(typeof O.intervalCap == "number" && O.intervalCap >= 1)) throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${((M=O.intervalCap)==null?void 0:M.toString())??""}\` (${typeof O.intervalCap})`);
        if (O.interval === void 0 || !(Number.isFinite(O.interval) && O.interval >= 0)) throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${((I=O.interval)==null?void 0:I.toString())??""}\` (${typeof O.interval})`);
        Ee(this, He, O.carryoverConcurrencyCount), Ee(this, ze, O.intervalCap === Number.POSITIVE_INFINITY || O.interval === 0), Ee(this, Ge, O.intervalCap), Ee(this, Ue, O.interval), Ee(this, Pe, new O.queueClass), Ee(this, Ye, O.queueClass), this.concurrency = O.concurrency, this.timeout = O.timeout, Ee(this, Ze, O.throwOnTimeout === !0), Ee(this, Ne, O.autoStart === !1)
    }
    get concurrency() {
        return ge(this, Ve)
    }
    set concurrency(O) {
        if (!(typeof O == "number" && O >= 1)) throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${O}\` (${typeof O})`);
        Ee(this, Ve, O), Re(this, we, tt).call(this)
    }
    setPriority(O, M) {
        ge(this, Pe).setPriority(O, M)
    }
    async add(O, M = {}) {
        return M.id ? ? (M.id = (Ke(this, nt)._++).toString()), M = {
            timeout: this.timeout,
            throwOnTimeout: ge(this, Ze),
            ...M
        }, new Promise((I, N) => {
            ge(this, Pe).enqueue(async () => {
                var R;
                Ke(this, Le)._++, Ke(this, Fe)._++;
                try {
                    (R = M.signal) == null || R.throwIfAborted();
                    let H = O({
                        signal: M.signal
                    });
                    M.timeout && (H = pTimeout(Promise.resolve(H), {
                        milliseconds: M.timeout
                    })), M.signal && (H = Promise.race([H, Re(this, we, yt).call(this, M.signal)]));
                    const z = await H;
                    I(z), this.emit("completed", z)
                } catch (H) {
                    if (H instanceof TimeoutError && !M.throwOnTimeout) {
                        I();
                        return
                    }
                    N(H), this.emit("error", H)
                } finally {
                    Re(this, we, mt).call(this)
                }
            }, M), this.emit("add"), Re(this, we, et).call(this)
        })
    }
    async addAll(O, M) {
        return Promise.all(O.map(async I => this.add(I, M)))
    }
    start() {
        return ge(this, Ne) ? (Ee(this, Ne, !1), Re(this, we, tt).call(this), this) : this
    }
    pause() {
        Ee(this, Ne, !0)
    }
    clear() {
        Ee(this, Pe, new(ge(this, Ye)))
    }
    async onEmpty() {
        ge(this, Pe).size !== 0 && await Re(this, we, rt).call(this, "empty")
    }
    async onSizeLessThan(O) {
        ge(this, Pe).size < O || await Re(this, we, rt).call(this, "next", () => ge(this, Pe).size < O)
    }
    async onIdle() {
        ge(this, Le) === 0 && ge(this, Pe).size === 0 || await Re(this, we, rt).call(this, "idle")
    }
    get size() {
        return ge(this, Pe).size
    }
    sizeBy(O) {
        return ge(this, Pe).filter(O).length
    }
    get pending() {
        return ge(this, Le)
    }
    get isPaused() {
        return ge(this, Ne)
    }
}
He = new WeakMap, ze = new WeakMap, Fe = new WeakMap, Ge = new WeakMap, Ue = new WeakMap, Xe = new WeakMap, Be = new WeakMap, We = new WeakMap, Pe = new WeakMap, Ye = new WeakMap, Le = new WeakMap, Ve = new WeakMap, Ne = new WeakMap, Ze = new WeakMap, nt = new WeakMap, we = new WeakSet, ht = function() {
    return ge(this, ze) || ge(this, Fe) < ge(this, Ge)
}, pt = function() {
    return ge(this, Le) < ge(this, Ve)
}, mt = function() {
    Ke(this, Le)._--, Re(this, we, et).call(this), this.emit("next")
}, gt = function() {
    Re(this, we, st).call(this), Re(this, we, ot).call(this), Ee(this, We, void 0)
}, vt = function() {
    const L = Date.now();
    if (ge(this, Be) === void 0) {
        const O = ge(this, Xe) - L;
        if (O < 0) Ee(this, Fe, ge(this, He) ? ge(this, Le) : 0);
        else return ge(this, We) === void 0 && Ee(this, We, setTimeout(() => {
            Re(this, we, gt).call(this)
        }, O)), !0
    }
    return !1
}, et = function() {
    if (ge(this, Pe).size === 0) return ge(this, Be) && clearInterval(ge(this, Be)), Ee(this, Be, void 0), this.emit("empty"), ge(this, Le) === 0 && this.emit("idle"), !1;
    if (!ge(this, Ne)) {
        const L = !ge(this, we, vt);
        if (ge(this, we, ht) && ge(this, we, pt)) {
            const O = ge(this, Pe).dequeue();
            return O ? (this.emit("active"), O(), L && Re(this, we, ot).call(this), !0) : !1
        }
    }
    return !1
}, ot = function() {
    ge(this, ze) || ge(this, Be) !== void 0 || (Ee(this, Be, setInterval(() => {
        Re(this, we, st).call(this)
    }, ge(this, Ue))), Ee(this, Xe, Date.now() + ge(this, Ue)))
}, st = function() {
    ge(this, Fe) === 0 && ge(this, Le) === 0 && ge(this, Be) && (clearInterval(ge(this, Be)), Ee(this, Be, void 0)), Ee(this, Fe, ge(this, He) ? ge(this, Le) : 0), Re(this, we, tt).call(this)
}, tt = function() {
    for (; Re(this, we, et).call(this););
}, yt = async function(L) {
    return new Promise((O, M) => {
        L.addEventListener("abort", () => {
            M(L.reason)
        }, {
            once: !0
        })
    })
}, rt = async function(L, O) {
    return new Promise(M => {
        const I = () => {
            O && !O() || (this.off(L, I), M())
        };
        this.on(L, I)
    })
};
const noop$1 = () => {},
    trueFn = () => !0;

function isObject(L) {
    return L !== null && (typeof L == "object" || typeof L == "function")
}
const isNonNullable = L => L != null,
    filterNonNullable = L => L.filter(isNonNullable),
    arrayEquals = (L, O) => L === O || L.length === O.length && L.every((M, I) => M === O[I]);

function chain(L) {
    return (...O) => {
        for (const M of L) M && M(...O)
    }
}
const access = L => typeof L == "function" && !L.length ? L() : L,
    asArray = L => Array.isArray(L) ? L : L ? [L] : [];

function accessWith(L, ...O) {
    return typeof L == "function" ? L(...O) : L
}
const entries = Object.entries,
    tryOnCleanup = onCleanup;

function createMicrotask(L) {
    let O = 0,
        M;
    return onCleanup(() => O = 0), (...I) => {
        M = I, O++, queueMicrotask(() => --O === 0 && L(...M))
    }
}

function handleDiffArray(L, O, M, I) {
    const N = L.length,
        R = O.length;
    let H = 0;
    if (!R) {
        for (; H < N; H++) M(L[H]);
        return
    }
    if (!N) {
        for (; H < R; H++) I(O[H]);
        return
    }
    for (; H < R && O[H] === L[H]; H++);
    let z, K;
    O = O.slice(H), L = L.slice(H);
    for (z of O) L.includes(z) || I(z);
    for (K of L) O.includes(K) || M(K)
}
class EventBusCore extends Set {
    emit(O) {
        for (const M of this) M(O)
    }
}
class EmitterCore extends Map {
    on(O, M) {
        let I = this.get(O);
        I || this.set(O, I = new EventBusCore), I.add(M)
    }
    off(O, M) {
        const I = this.get(O);
        I != null && I.delete(M) && !I.size && this.delete(O)
    }
    emit(O, M) {
        var I;
        (I = this.get(O)) == null || I.emit(M)
    }
}

function createEmitter() {
    const L = new EmitterCore;
    return {
        on(O, M) {
            return L.on(O, M), tryOnCleanup(L.off.bind(L, O, M))
        },
        emit: L.emit.bind(L),
        clear: onCleanup(L.clear.bind(L))
    }
}

function makeEventListener(L, O, M, I) {
    return L.addEventListener(O, M, I), tryOnCleanup(L.removeEventListener.bind(L, O, M, I))
}

function createEventListener(L, O, M, I) {
    const N = () => {
        asArray(access(L)).forEach(R => {
            R && asArray(access(O)).forEach(H => makeEventListener(R, H, M, I))
        })
    };
    typeof L == "function" ? createEffect(N) : createRenderEffect(N)
}

function createEventListenerMap(L, O, M) {
    for (const [I, N] of entries(O)) N && createEventListener(L, I, N, M)
}

function observe(L, O) {
    O.observe(L)
}

function makeIntersectionObserver(L, O, M) {
    const I = new IntersectionObserver(O, M),
        N = K => observe(K, I),
        R = K => I.unobserve(K),
        H = () => L.forEach(N),
        z = () => I.takeRecords().forEach(K => R(K.target));
    return H(), {
        add: N,
        remove: R,
        start: H,
        stop: onCleanup(() => I.disconnect()),
        reset: z,
        instance: I
    }
}

function createIntersectionObserver(L, O, M) {
    const I = new IntersectionObserver(O, M);
    onCleanup(() => I.disconnect()), createEffect(N => {
        const R = L();
        return handleDiffArray(R, N, H => observe(H, I), H => I.unobserve(H)), R
    }, [])
}

function createViewportObserver(...L) {
    let O = [],
        M = {};
    Array.isArray(L[0]) || L[0] instanceof Function ? L[1] instanceof Function ? (O = access(L[0]).map(Y => [Y, L[1]]), M = L[2]) : (O = access(L[0]), M = L[1]) : M = L[0];
    const I = new WeakMap,
        N = (Y, Z) => Y.forEach(Q => {
            var J;
            const _ = (J = I.get(Q.target)) == null ? void 0 : J(Q, Z);
            _ instanceof Function && _(Q, Z)
        }),
        {
            add: R,
            remove: H,
            stop: z,
            instance: K
        } = makeIntersectionObserver([], N, M),
        W = (Y, Z) => {
            R(Y), I.set(Y, Z)
        },
        X = Y => {
            I.delete(Y), H(Y)
        },
        G = () => O.forEach(([Y, Z]) => W(Y, Z));
    return onMount(G), [W, {
        remove: X,
        start: G,
        stop: z,
        instance: K
    }]
}

function createVisibilityObserver(L, O) {
    const M = new WeakMap,
        I = new IntersectionObserver((z, K) => {
            var W;
            for (const X of z)(W = M.get(X.target)) == null || W(X, K)
        }, L);
    onCleanup(() => I.disconnect());

    function N(z) {
        I.unobserve(z), M.delete(z)
    }

    function R(z, K) {
        observe(z, I), M.set(z, K)
    }
    const H = O ? (z, K) => {
        const W = access(O);
        return X => K(W(X, {
            visible: untrack(z)
        }))
    } : (z, K) => W => K(W.isIntersecting);
    return z => {
        const [K, W] = createSignal(L ? .initialValue ? ? !1), X = H(K, W);
        let G;
        return z instanceof Element ? R(z, X) : createEffect(() => {
            const Y = z();
            Y !== G && (G && N(G), Y && R(Y, X), G = Y)
        }), onCleanup(() => G && N(G)), K
    }
}
var Occurrence;
(function(L) {
    L.Entering = "Entering", L.Leaving = "Leaving", L.Inside = "Inside", L.Outside = "Outside"
})(Occurrence || (Occurrence = {}));

function getOccurrence(L, O) {
    return L ? O ? Occurrence.Inside : Occurrence.Entering : O === !0 ? Occurrence.Leaving : Occurrence.Outside
}

function withOccurrence(L) {
    return () => {
        let O;
        const M = access(L);
        return (I, N) => {
            const {
                isIntersecting: R
            } = I, H = getOccurrence(R, O);
            return O = R, M(I, { ...N,
                occurrence: H
            })
        }
    }
}
var DirectionX;
(function(L) {
    L.Left = "Left", L.Right = "Right", L.None = "None"
})(DirectionX || (DirectionX = {}));
var DirectionY;
(function(L) {
    L.Top = "Top", L.Bottom = "Bottom", L.None = "None"
})(DirectionY || (DirectionY = {}));

function getDirection(L, O, M) {
    let I = DirectionX.None,
        N = DirectionY.None;
    return O ? (L.top < O.top ? N = M ? DirectionY.Bottom : DirectionY.Top : L.top > O.top && (N = M ? DirectionY.Top : DirectionY.Bottom), L.left > O.left ? I = M ? DirectionX.Left : DirectionX.Right : L.left < O.left && (I = M ? DirectionX.Right : DirectionX.Left), {
        directionX: I,
        directionY: N
    }) : {
        directionX: I,
        directionY: N
    }
}

function withDirection(L) {
    return () => {
        let O;
        const M = access(L);
        return (I, N) => {
            const {
                boundingClientRect: R
            } = I, H = getDirection(R, O, I.isIntersecting);
            return O = R, M(I, { ...N,
                ...H
            })
        }
    }
}
const noop = () => {},
    noopTransition = (L, O) => O();

function createSwitchTransition(L, O) {
    const M = untrack(L),
        I = M ? [M] : [],
        {
            onEnter: N = noopTransition,
            onExit: R = noopTransition
        } = O,
        [H, z] = createSignal(O.appear ? [] : I),
        [K] = useTransition();
    let W, X = !1;

    function G(Q, J) {
        if (!Q) return J && J();
        X = !0, R(Q, () => {
            batch(() => {
                X = !1, z(_ => _.filter(ee => ee !== Q)), J && J()
            })
        })
    }

    function Y(Q) {
        const J = W;
        if (!J) return Q && Q();
        W = void 0, z(_ => [J, ..._]), N(J, Q ? ? noop)
    }
    const Z = O.mode === "out-in" ? Q => X || G(Q, Y) : O.mode === "in-out" ? Q => Y(() => G(Q)) : Q => {
        G(Q), Y()
    };
    return createComputed(Q => {
        const J = L();
        return untrack(K) ? (K(), Q) : (J !== Q && (W = J, batch(() => untrack(() => Z(Q)))), J)
    }, O.appear ? void 0 : M), H
}

function createListTransition(L, O) {
    const M = untrack(L),
        {
            onChange: I
        } = O;
    let N = new Set(O.appear ? void 0 : M);
    const R = new WeakSet,
        [H, z] = createSignal([], {
            equals: !1
        }),
        [K] = useTransition(),
        W = O.exitMethod === "remove" ? noop : G => {
            z(Y => (Y.push.apply(Y, G), Y));
            for (const Y of G) R.delete(Y)
        },
        X = O.exitMethod === "remove" ? noop : O.exitMethod === "keep-index" ? (G, Y, Z) => G.splice(Z, 0, Y) : (G, Y) => G.push(Y);
    return createMemo(G => {
        const Y = H(),
            Z = L();
        if (Z[$TRACK], untrack(K)) return K(), G;
        if (Y.length) {
            const Q = G.filter(J => !Y.includes(J));
            return Y.length = 0, I({
                list: Q,
                added: [],
                removed: [],
                unchanged: Q,
                finishRemoved: W
            }), Q
        }
        return untrack(() => {
            const Q = new Set(Z),
                J = Z.slice(),
                _ = [],
                ee = [],
                te = [];
            for (const re of Z)(N.has(re) ? te : _).push(re);
            let ie = !_.length;
            for (let re = 0; re < G.length; re++) {
                const oe = G[re];
                Q.has(oe) || (R.has(oe) || (ee.push(oe), R.add(oe)), X(J, oe, re)), ie && oe !== J[re] && (ie = !1)
            }
            return !ee.length && ie ? G : (I({
                list: J,
                added: _,
                removed: ee,
                unchanged: te,
                finishRemoved: W
            }), N = Q, J)
        })
    }, O.appear ? [] : M.slice())
}

function createSubRoot(L, ...O) {
    return O.length === 0 && (O = [getOwner()]), createRoot(M => (asArray(access(O)).forEach(I => I && runWithOwner(I, onCleanup.bind(void 0, M))), L(M)), O[0])
}
const createCallback = (L, O = getOwner()) => O ? (...M) => runWithOwner(O, () => L(...M)) : L;

function createDisposable(L, ...O) {
    return createSubRoot(M => (L(M), M), ...O)
}

function createSingletonRoot(L, O = getOwner()) {
    let M = 0,
        I, N;
    return () => (M++, onCleanup(() => {
        M--, queueMicrotask(() => {
            !M && N && (N(), N = I = void 0)
        })
    }), N || createRoot(R => I = L(N = R), O), I)
}

function createRootPool(L, O = {}) {
    let M = 0;
    const {
        limit: I = 100
    } = O, N = new Array(I), R = getOwner(), H = L.length > 1 ? (X, [G, Y]) => {
        const [Z, Q] = createSignal(!0), J = {
            dispose: X,
            set: Y,
            setA: Q,
            active: Z,
            v: L(G, Z, () => W(J))
        };
        return J
    } : (X, [G, Y]) => ({
        dispose: X,
        set: Y,
        setA: trueFn,
        active: trueFn,
        v: L(G, trueFn, noop$1)
    }), z = createMicrotask(() => {
        if (M > I) {
            for (let X = I; X < M; X++) N[X].dispose(), N[X] = void 0;
            M = I
        }
    }), K = X => {
        X.dispose !== noop$1 && (N[M++] = X, X.setA(!1), z())
    }, W = X => {
        X.dispose(), X.dispose = noop$1, X.active() ? X.setA(!1) : (N[N.indexOf(X)] = N[--M], N[M] = void 0)
    };
    return onCleanup(() => {
        for (let X = 0; X < M; X++) N[X].dispose();
        M = 0
    }), X => {
        let G;
        return M ? (G = N[--M], N[M] = void 0, batch(() => {
            G.set(() => X), G.setA(!0)
        })) : G = createRoot(Y => H(Y, createSignal(X)), R), onCleanup(() => K(G)), G.v
    }
}
const useKeyDownEvent = createSingletonRoot(() => {
        const [L, O] = createSignal(null);
        return makeEventListener(window, "keydown", M => {
            O(M), setTimeout(() => O(null))
        }), L
    }),
    useKeyDownList = createSingletonRoot(() => {
        const [L, O] = createSignal([]), M = () => O([]), I = useKeyDownEvent();
        return makeEventListener(window, "keydown", N => {
            if (N.repeat || typeof N.key != "string") return;
            const R = N.key.toUpperCase(),
                H = L();
            if (H.includes(R)) return;
            const z = [...H, R];
            H.length === 0 && R !== "ALT" && R !== "CONTROL" && R !== "META" && R !== "SHIFT" && (N.shiftKey && z.unshift("SHIFT"), N.altKey && z.unshift("ALT"), N.ctrlKey && z.unshift("CONTROL"), N.metaKey && z.unshift("META")), O(z)
        }), makeEventListener(window, "keyup", N => {
            if (typeof N.key != "string") return;
            const R = N.key.toUpperCase();
            O(H => H.filter(z => z !== R))
        }), makeEventListener(window, "blur", M), makeEventListener(window, "contextmenu", N => {
            N.defaultPrevented || M()
        }), L[0] = L, L[1] = {
            event: I
        }, L[Symbol.iterator] = function*() {
            yield L[0], yield L[1]
        }, L
    }),
    useCurrentlyHeldKey = createSingletonRoot(() => {
        const L = useKeyDownList();
        let O = untrack(L);
        return createMemo(() => {
            const M = L(),
                I = O;
            return O = M, I.length === 0 && M.length === 1 ? M[0] : null
        })
    });

function createKeyHold(L, O = {}) {
    L = L.toUpperCase();
    const {
        preventDefault: M = !0
    } = O, I = useKeyDownEvent(), N = useCurrentlyHeldKey();
    return createMemo(() => {
        var R;
        return N() === L && (M && ((R = I()) == null || R.preventDefault()), !0)
    })
}

function createIsMounted() {
    const [L, O] = createSignal(!1);
    return onMount(() => O(!0)), L
}
const until = L => {
    const O = createRoot(M => {
        const I = createMemo(L),
            N = new Promise((R, H) => {
                createComputed(() => {
                    I() && (R(I()), M())
                }), onCleanup(H)
            });
        return N.dispose = M, N
    });
    return getOwner() && onCleanup(O.dispose), O
};

function mergeRefs(...L) {
    return chain(L)
}
const defaultElementPredicate = L => L instanceof Element;

function getResolvedElements(L, O) {
    if (O(L)) return L;
    if (typeof L == "function" && !L.length) return getResolvedElements(L(), O);
    if (Array.isArray(L)) {
        const M = [];
        for (const I of L) {
            const N = getResolvedElements(I, O);
            N && (Array.isArray(N) ? M.push.apply(M, N) : M.push(N))
        }
        return M.length ? M : null
    }
    return null
}

function resolveElements(L, O = defaultElementPredicate, M = defaultElementPredicate) {
    const I = createMemo(L),
        N = createMemo(() => getResolvedElements(I(), O));
    return N.toArray = () => {
        const R = N();
        return Array.isArray(R) ? R : R ? [R] : []
    }, N
}

function getFirstChild(L, O) {
    if (O(L)) return L;
    if (typeof L == "function" && !L.length) return getFirstChild(L(), O);
    if (Array.isArray(L))
        for (const M of L) {
            const I = getFirstChild(M, O);
            if (I) return I
        }
    return null
}

function resolveFirst(L, O = defaultElementPredicate, M = defaultElementPredicate) {
    const I = createMemo(L);
    return createMemo(() => getFirstChild(I(), O))
}

function Refs(L) {
    const O = L.ref,
        M = children(() => L.children);
    let I = [];
    return createComputed(() => {
        const N = M.toArray().filter(defaultElementPredicate);
        arrayEquals(I, N) || untrack(() => O(N)), I = N
    }, []), onCleanup(() => I.length && O([])), M
}

function Ref(L) {
    const O = L.ref,
        M = children(() => L.children);
    let I;
    return createComputed(() => {
        const N = M.toArray().find(defaultElementPredicate);
        N !== I && untrack(() => O(N)), I = N
    }), onCleanup(() => I && O(void 0)), M
}

function createStaticStore(L) {
    const O = { ...L
        },
        M = { ...L
        },
        I = {},
        N = H => {
            let z = I[H];
            if (!z) {
                if (!getListener()) return O[H];
                I[H] = z = createSignal(O[H], {
                    internal: !0
                }), delete O[H]
            }
            return z[0]()
        };
    for (const H in L) Object.defineProperty(M, H, {
        get: () => N(H),
        enumerable: !0
    });
    const R = (H, z) => {
        const K = I[H];
        if (K) return K[1](z);
        H in O && (O[H] = accessWith(z, O[H]))
    };
    return [M, (H, z) => {
        if (isObject(H)) {
            const K = untrack(() => Object.entries(accessWith(H, M)));
            batch(() => {
                for (const [W, X] of K) R(W, () => X)
            })
        } else R(H, z);
        return M
    }]
}

function createHydratableStaticStore(L, O) {
    if (sharedConfig.context) {
        const [M, I] = createStaticStore(L);
        return onMount(() => I(O())), [M, I]
    }
    return createStaticStore(O())
}

function makeResizeObserver(L, O) {
    const M = new ResizeObserver(L);
    return onCleanup(M.disconnect.bind(M)), {
        observe: I => M.observe(I, O),
        unobserve: M.unobserve.bind(M)
    }
}

function createResizeObserver(L, O, M) {
    const I = new WeakMap,
        {
            observe: N,
            unobserve: R
        } = makeResizeObserver(H => {
            for (const z of H) {
                const {
                    contentRect: K,
                    target: W
                } = z, X = Math.round(K.width), G = Math.round(K.height), Y = I.get(W);
                (!Y || Y.width !== X || Y.height !== G) && (O(K, W, z), I.set(W, {
                    width: X,
                    height: G
                }))
            }
        }, M);
    createEffect(H => {
        const z = filterNonNullable(asArray(access(L)));
        return handleDiffArray(z, H, N, R), z
    }, [])
}
const WINDOW_SIZE_FALLBACK = {
    width: 0,
    height: 0
};

function getWindowSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

function createWindowSize() {
    const [L, O] = createHydratableStaticStore(WINDOW_SIZE_FALLBACK, getWindowSize);
    return makeEventListener(window, "resize", () => O(getWindowSize())), L
}
const ELEMENT_SIZE_FALLBACK = {
    width: null,
    height: null
};

function getElementSize(L) {
    if (!L) return { ...ELEMENT_SIZE_FALLBACK
    };
    const {
        width: O,
        height: M
    } = L.getBoundingClientRect();
    return {
        width: O,
        height: M
    }
}

function createElementSize(L) {
    const O = typeof L == "function",
        [M, I] = createStaticStore(sharedConfig.context || O ? ELEMENT_SIZE_FALLBACK : getElementSize(L)),
        N = new ResizeObserver(([R]) => I(getElementSize(R.target)));
    return onCleanup(() => N.disconnect()), O ? createEffect(() => {
        const R = L();
        R && (I(getElementSize(R)), N.observe(R), onCleanup(() => N.unobserve(R)))
    }) : (N.observe(L), onCleanup(() => N.unobserve(L))), M
}
const queue = new PQueue({
        concurrency: 1
    }),
    delay = L => new Promise(O => setTimeout(O, L)),
    createQueueScheduler = (L, O) => {
        const [M, I] = createSignal(!1);
        return createEffect(N => {
            if (L()) return N || untrack(() => {
                let R = () => {};
                const H = new Promise(K => {
                        R = K
                    }),
                    z = async () => {
                        var K;
                        return await delay(O ? .delay ? ? 0), (K = O ? .onRender) == null || K.call(O), I(!0), H
                    };
                return queue.add(z, {
                    priority: O ? .priority
                }).then(() => {
                    I(!1)
                }), R
            });
            N && N()
        }), [M]
    },
    QueueRender = L => {
        const O = resolveFirst(() => L.children),
            M = mergeProps({
                priority: 0,
                delay: 200,
                onRender: () => {}
            }, L),
            [I] = createQueueScheduler(O, M);
        return createComponent(Show, {
            get when() {
                return I()
            },
            get children() {
                return L.children
            }
        })
    };
var addClearMethod = L => (typeof L.clear == "function" || (L.clear = () => {
        let O;
        for (; O = L.key(0);) L.removeItem(O)
    }), L),
    methodKeys = ["clear", "getItem", "getAll", "setItem", "removeItem", "key", "getLength"],
    addWithOptionsMethod = L => (L.withOptions = O => methodKeys.reduce((M, I) => (typeof L[I] == "function" && (M[I] = (...N) => (N[L[I].length - 1] = O, L[I](...N))), M), {
        get length() {
            return L.length
        },
        withOptions: M => L.withOptions(M)
    }), L),
    cookiePropertyMap = {
        domain: "Domain",
        expires: "Expires",
        path: "Path",
        secure: "Secure",
        httpOnly: "HttpOnly",
        maxAge: "Max-Age",
        sameSite: "SameSite"
    };

function serializeCookieOptions(L) {
    if (!L) return "";
    const O = Object.entries(L).map(([M, I]) => {
        const N = cookiePropertyMap[M];
        if (N) return I instanceof Date ? `${N}=${I.toUTCString()}` : typeof I == "boolean" ? I ? `${N}` : void 0 : `${N}=${I}`
    }).filter(M => !!M);
    return O.length != 0 ? `; ${O.join("; ")}` : ""
}

function deserializeCookieOptions(L, O) {
    var M;
    return ((M = L.match(`(^|;)\\s*${O}\\s*=\\s*([^;]+)`)) == null ? void 0 : M.pop()) ? ? null
}
var cookieStorage = addWithOptionsMethod(addClearMethod({
    _read: () => document.cookie,
    _write: (L, O, M) => {
        document.cookie = `${L}=${O}${serializeCookieOptions(M)}`
    },
    getItem: (L, O) => deserializeCookieOptions(cookieStorage._read(O), L),
    setItem: (L, O, M) => {
        cookieStorage._write(L, O, M)
    },
    removeItem: (L, O) => {
        cookieStorage._write(L, "deleted", { ...O,
            expires: new Date(0)
        })
    },
    key: (L, O) => {
        let M = null,
            I = 0;
        return cookieStorage._read(O).replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g, (N, R) => (!M && R && I++ === L && (M = R), "")), M
    },
    getLength: L => {
        let O = 0;
        return cookieStorage._read(L).replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g, M => (O += M ? 1 : 0, "")), O
    },
    get length() {
        return this.getLength()
    }
}));

function makePersisted(L, O = {}) {
    var M;
    const I = O.storage || globalThis.localStorage,
        N = O.name || `storage-${createUniqueId()}`;
    if (!I) return L;
    const R = O.storageOptions,
        H = O.serialize || JSON.stringify.bind(JSON),
        z = O.deserialize || JSON.parse.bind(JSON),
        K = I.getItem(N, R),
        W = typeof L[0] == "function" ? G => {
            try {
                const Y = z(G);
                L[1](() => Y)
            } catch {}
        } : G => {
            try {
                const Y = z(G);
                L[1](reconcile(Y))
            } catch {}
        };
    let X = !0;
    if (K instanceof Promise ? K.then(G => X && G && W(G)) : K && W(K), typeof((M = O.sync) == null ? void 0 : M[0]) == "function") {
        const G = typeof L[0] == "function" ? L[0] : () => L[0];
        O.sync[0](Y => {
            Y.key !== N || (Y.url || globalThis.location.href) !== globalThis.location.href || Y.newValue === H(untrack(G)) || W(Y.newValue)
        })
    }
    return [L[0], typeof L[0] == "function" ? G => {
        var Y;
        const Z = L[1](G),
            Q = G != null ? H(Z) : G;
        return (Y = O.sync) == null || Y[1](N, Q), G != null ? I.setItem(N, Q, R) : I.removeItem(N, R), X = !1, Z
    } : (...G) => {
        var Y;
        L[1](...G);
        const Z = H(untrack(() => L[0]));
        (Y = O.sync) == null || Y[1](N, Z), I.setItem(N, Z, R), X = !1
    }]
}
var storageSync = [L => window.addEventListener("storage", O => L(O)), () => {}];
const makeTimer = (L, O, M) => {
        const I = M(L, O);
        return onCleanup(() => clearInterval(I))
    },
    createTimer = (L, O, M) => {
        if (typeof O == "number") {
            makeTimer(L, O, M);
            return
        }
        let I = !1,
            N = performance.now(),
            R = 0,
            H = !1;
        const z = () => {
            untrack(L), N = performance.now(), I = M === setTimeout
        };
        createEffect(K => {
            if (I) return;
            const W = O();
            if (W === !1) return K && (R += (performance.now() - N) / K), W;
            if (K === !1 && (N = performance.now()), H) {
                if (K && (R += (performance.now() - N) / K), N = performance.now(), R >= 1) R = 0, z();
                else if (R > 0) {
                    const [X, G] = createSignal(void 0, {
                        equals: !1
                    });
                    return X(), makeTimer(() => {
                        R = 0, H = !1, G(), z()
                    }, (1 - R) * W, setTimeout), W
                }
            }
            return H = !0, makeTimer(z, W, M), W
        })
    };

function createTween(L, {
    ease: O = I => I,
    duration: M = 100
}) {
    const [I, N] = createSignal(L());
    let R, H, z, K;

    function W(X) {
        const G = X - R;
        G < M ? (N(H + O(G / M) * z), K = requestAnimationFrame(W)) : N(L())
    }
    return createEffect(on$1(L, () => {
        R = performance.now(), H = I(), z = L() - H, K = requestAnimationFrame(W), onCleanup(() => cancelAnimationFrame(K))
    }, {
        defer: !0
    })), I
}
var lib$1 = {
        exports: {}
    },
    parseuri, hasRequiredParseuri;

function requireParseuri() {
    if (hasRequiredParseuri) return parseuri;
    hasRequiredParseuri = 1;
    var L = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        O = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    parseuri = function(N) {
        var R = N,
            H = N.indexOf("["),
            z = N.indexOf("]");
        H != -1 && z != -1 && (N = N.substring(0, H) + N.substring(H, z).replace(/:/g, ";") + N.substring(z, N.length));
        for (var K = L.exec(N || ""), W = {}, X = 14; X--;) W[O[X]] = K[X] || "";
        return H != -1 && z != -1 && (W.source = R, W.host = W.host.substring(1, W.host.length - 1).replace(/;/g, ":"), W.authority = W.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), W.ipv6uri = !0), W.pathNames = M(W, W.path), W.queryKey = I(W, W.query), W
    };

    function M(N, R) {
        var H = /\/{2,9}/g,
            z = R.replace(H, "/").split("/");
        return (R.substr(0, 1) == "/" || R.length === 0) && z.splice(0, 1), R.substr(R.length - 1, 1) == "/" && z.splice(z.length - 1, 1), z
    }

    function I(N, R) {
        var H = {};
        return R.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(z, K, W) {
            K && (H[K] = W)
        }), H
    }
    return parseuri
}
var browser$3 = {
        exports: {}
    },
    debug$2 = {
        exports: {}
    },
    ms$2, hasRequiredMs$2;

function requireMs$2() {
    if (hasRequiredMs$2) return ms$2;
    hasRequiredMs$2 = 1;
    var L = 1e3,
        O = L * 60,
        M = O * 60,
        I = M * 24,
        N = I * 365.25;
    ms$2 = function(W, X) {
        X = X || {};
        var G = typeof W;
        if (G === "string" && W.length > 0) return R(W);
        if (G === "number" && isNaN(W) === !1) return X.long ? z(W) : H(W);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(W))
    };

    function R(W) {
        if (W = String(W), !(W.length > 100)) {
            var X = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(W);
            if (X) {
                var G = parseFloat(X[1]),
                    Y = (X[2] || "ms").toLowerCase();
                switch (Y) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return G * N;
                    case "days":
                    case "day":
                    case "d":
                        return G * I;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return G * M;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return G * O;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return G * L;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return G;
                    default:
                        return
                }
            }
        }
    }

    function H(W) {
        return W >= I ? Math.round(W / I) + "d" : W >= M ? Math.round(W / M) + "h" : W >= O ? Math.round(W / O) + "m" : W >= L ? Math.round(W / L) + "s" : W + "ms"
    }

    function z(W) {
        return K(W, I, "day") || K(W, M, "hour") || K(W, O, "minute") || K(W, L, "second") || W + " ms"
    }

    function K(W, X, G) {
        if (!(W < X)) return W < X * 1.5 ? Math.floor(W / X) + " " + G : Math.ceil(W / X) + " " + G + "s"
    }
    return ms$2
}
var hasRequiredDebug$2;

function requireDebug$2() {
    return hasRequiredDebug$2 || (hasRequiredDebug$2 = 1, function(L, O) {
        O = L.exports = I.debug = I.default = I, O.coerce = K, O.disable = H, O.enable = R, O.enabled = z, O.humanize = requireMs$2(), O.instances = [], O.names = [], O.skips = [], O.formatters = {};

        function M(W) {
            var X = 0,
                G;
            for (G in W) X = (X << 5) - X + W.charCodeAt(G), X |= 0;
            return O.colors[Math.abs(X) % O.colors.length]
        }

        function I(W) {
            var X;

            function G() {
                if (G.enabled) {
                    var Y = G,
                        Z = +new Date,
                        Q = Z - (X || Z);
                    Y.diff = Q, Y.prev = X, Y.curr = Z, X = Z;
                    for (var J = new Array(arguments.length), _ = 0; _ < J.length; _++) J[_] = arguments[_];
                    J[0] = O.coerce(J[0]), typeof J[0] != "string" && J.unshift("%O");
                    var ee = 0;
                    J[0] = J[0].replace(/%([a-zA-Z%])/g, function(ie, re) {
                        if (ie === "%%") return ie;
                        ee++;
                        var oe = O.formatters[re];
                        if (typeof oe == "function") {
                            var ae = J[ee];
                            ie = oe.call(Y, ae), J.splice(ee, 1), ee--
                        }
                        return ie
                    }), O.formatArgs.call(Y, J);
                    var te = G.log || O.log || console.log.bind(console);
                    te.apply(Y, J)
                }
            }
            return G.namespace = W, G.enabled = O.enabled(W), G.useColors = O.useColors(), G.color = M(W), G.destroy = N, typeof O.init == "function" && O.init(G), O.instances.push(G), G
        }

        function N() {
            var W = O.instances.indexOf(this);
            return W !== -1 ? (O.instances.splice(W, 1), !0) : !1
        }

        function R(W) {
            O.save(W), O.names = [], O.skips = [];
            var X, G = (typeof W == "string" ? W : "").split(/[\s,]+/),
                Y = G.length;
            for (X = 0; X < Y; X++) G[X] && (W = G[X].replace(/\*/g, ".*?"), W[0] === "-" ? O.skips.push(new RegExp("^" + W.substr(1) + "$")) : O.names.push(new RegExp("^" + W + "$")));
            for (X = 0; X < O.instances.length; X++) {
                var Z = O.instances[X];
                Z.enabled = O.enabled(Z.namespace)
            }
        }

        function H() {
            O.enable("")
        }

        function z(W) {
            if (W[W.length - 1] === "*") return !0;
            var X, G;
            for (X = 0, G = O.skips.length; X < G; X++)
                if (O.skips[X].test(W)) return !1;
            for (X = 0, G = O.names.length; X < G; X++)
                if (O.names[X].test(W)) return !0;
            return !1
        }

        function K(W) {
            return W instanceof Error ? W.stack || W.message : W
        }
    }(debug$2, debug$2.exports)), debug$2.exports
}
var hasRequiredBrowser$3;

function requireBrowser$3() {
    return hasRequiredBrowser$3 || (hasRequiredBrowser$3 = 1, function(L, O) {
        O = L.exports = requireDebug$2(), O.log = N, O.formatArgs = I, O.save = R, O.load = H, O.useColors = M, O.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : z(), O.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function M() {
            return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        O.formatters.j = function(K) {
            try {
                return JSON.stringify(K)
            } catch (W) {
                return "[UnexpectedJSONParseError]: " + W.message
            }
        };

        function I(K) {
            var W = this.useColors;
            if (K[0] = (W ? "%c" : "") + this.namespace + (W ? " %c" : " ") + K[0] + (W ? "%c " : " ") + "+" + O.humanize(this.diff), !!W) {
                var X = "color: " + this.color;
                K.splice(1, 0, X, "color: inherit");
                var G = 0,
                    Y = 0;
                K[0].replace(/%[a-zA-Z%]/g, function(Z) {
                    Z !== "%%" && (G++, Z === "%c" && (Y = G))
                }), K.splice(Y, 0, X)
            }
        }

        function N() {
            return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function R(K) {
            try {
                K == null ? O.storage.removeItem("debug") : O.storage.debug = K
            } catch {}
        }

        function H() {
            var K;
            try {
                K = O.storage.debug
            } catch {}
            return !K && typeof process < "u" && "env" in process && (K = define_process_env_default.DEBUG), K
        }
        O.enable(H());

        function z() {
            try {
                return window.localStorage
            } catch {}
        }
    }(browser$3, browser$3.exports)), browser$3.exports
}
var url_1, hasRequiredUrl;

function requireUrl() {
    if (hasRequiredUrl) return url_1;
    hasRequiredUrl = 1;
    var L = requireParseuri(),
        O = requireBrowser$3()("socket.io-client:url");
    url_1 = M;

    function M(I, N) {
        var R = I;
        N = N || typeof location < "u" && location, I == null && (I = N.protocol + "//" + N.host), typeof I == "string" && (I.charAt(0) === "/" && (I.charAt(1) === "/" ? I = N.protocol + I : I = N.host + I), /^(https?|wss?):\/\//.test(I) || (O("protocol-less url %s", I), typeof N < "u" ? I = N.protocol + "//" + I : I = "https://" + I), O("parse %s", I), R = L(I)), R.port || (/^(http|ws)$/.test(R.protocol) ? R.port = "80" : /^(http|ws)s$/.test(R.protocol) && (R.port = "443")), R.path = R.path || "/";
        var H = R.host.indexOf(":") !== -1,
            z = H ? "[" + R.host + "]" : R.host;
        return R.id = R.protocol + "://" + z + ":" + R.port, R.href = R.protocol + "://" + z + (N && N.port === R.port ? "" : ":" + R.port), R
    }
    return url_1
}
var socket_ioParser = {},
    browser$2 = {
        exports: {}
    },
    debug$1 = {
        exports: {}
    },
    ms$1, hasRequiredMs$1;

function requireMs$1() {
    if (hasRequiredMs$1) return ms$1;
    hasRequiredMs$1 = 1;
    var L = 1e3,
        O = L * 60,
        M = O * 60,
        I = M * 24,
        N = I * 365.25;
    ms$1 = function(W, X) {
        X = X || {};
        var G = typeof W;
        if (G === "string" && W.length > 0) return R(W);
        if (G === "number" && isNaN(W) === !1) return X.long ? z(W) : H(W);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(W))
    };

    function R(W) {
        if (W = String(W), !(W.length > 100)) {
            var X = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(W);
            if (X) {
                var G = parseFloat(X[1]),
                    Y = (X[2] || "ms").toLowerCase();
                switch (Y) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return G * N;
                    case "days":
                    case "day":
                    case "d":
                        return G * I;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return G * M;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return G * O;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return G * L;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return G;
                    default:
                        return
                }
            }
        }
    }

    function H(W) {
        return W >= I ? Math.round(W / I) + "d" : W >= M ? Math.round(W / M) + "h" : W >= O ? Math.round(W / O) + "m" : W >= L ? Math.round(W / L) + "s" : W + "ms"
    }

    function z(W) {
        return K(W, I, "day") || K(W, M, "hour") || K(W, O, "minute") || K(W, L, "second") || W + " ms"
    }

    function K(W, X, G) {
        if (!(W < X)) return W < X * 1.5 ? Math.floor(W / X) + " " + G : Math.ceil(W / X) + " " + G + "s"
    }
    return ms$1
}
var hasRequiredDebug$1;

function requireDebug$1() {
    return hasRequiredDebug$1 || (hasRequiredDebug$1 = 1, function(L, O) {
        O = L.exports = I.debug = I.default = I, O.coerce = K, O.disable = H, O.enable = R, O.enabled = z, O.humanize = requireMs$1(), O.instances = [], O.names = [], O.skips = [], O.formatters = {};

        function M(W) {
            var X = 0,
                G;
            for (G in W) X = (X << 5) - X + W.charCodeAt(G), X |= 0;
            return O.colors[Math.abs(X) % O.colors.length]
        }

        function I(W) {
            var X;

            function G() {
                if (G.enabled) {
                    var Y = G,
                        Z = +new Date,
                        Q = Z - (X || Z);
                    Y.diff = Q, Y.prev = X, Y.curr = Z, X = Z;
                    for (var J = new Array(arguments.length), _ = 0; _ < J.length; _++) J[_] = arguments[_];
                    J[0] = O.coerce(J[0]), typeof J[0] != "string" && J.unshift("%O");
                    var ee = 0;
                    J[0] = J[0].replace(/%([a-zA-Z%])/g, function(ie, re) {
                        if (ie === "%%") return ie;
                        ee++;
                        var oe = O.formatters[re];
                        if (typeof oe == "function") {
                            var ae = J[ee];
                            ie = oe.call(Y, ae), J.splice(ee, 1), ee--
                        }
                        return ie
                    }), O.formatArgs.call(Y, J);
                    var te = G.log || O.log || console.log.bind(console);
                    te.apply(Y, J)
                }
            }
            return G.namespace = W, G.enabled = O.enabled(W), G.useColors = O.useColors(), G.color = M(W), G.destroy = N, typeof O.init == "function" && O.init(G), O.instances.push(G), G
        }

        function N() {
            var W = O.instances.indexOf(this);
            return W !== -1 ? (O.instances.splice(W, 1), !0) : !1
        }

        function R(W) {
            O.save(W), O.names = [], O.skips = [];
            var X, G = (typeof W == "string" ? W : "").split(/[\s,]+/),
                Y = G.length;
            for (X = 0; X < Y; X++) G[X] && (W = G[X].replace(/\*/g, ".*?"), W[0] === "-" ? O.skips.push(new RegExp("^" + W.substr(1) + "$")) : O.names.push(new RegExp("^" + W + "$")));
            for (X = 0; X < O.instances.length; X++) {
                var Z = O.instances[X];
                Z.enabled = O.enabled(Z.namespace)
            }
        }

        function H() {
            O.enable("")
        }

        function z(W) {
            if (W[W.length - 1] === "*") return !0;
            var X, G;
            for (X = 0, G = O.skips.length; X < G; X++)
                if (O.skips[X].test(W)) return !1;
            for (X = 0, G = O.names.length; X < G; X++)
                if (O.names[X].test(W)) return !0;
            return !1
        }

        function K(W) {
            return W instanceof Error ? W.stack || W.message : W
        }
    }(debug$1, debug$1.exports)), debug$1.exports
}
var hasRequiredBrowser$2;

function requireBrowser$2() {
    return hasRequiredBrowser$2 || (hasRequiredBrowser$2 = 1, function(L, O) {
        O = L.exports = requireDebug$1(), O.log = N, O.formatArgs = I, O.save = R, O.load = H, O.useColors = M, O.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : z(), O.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function M() {
            return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        O.formatters.j = function(K) {
            try {
                return JSON.stringify(K)
            } catch (W) {
                return "[UnexpectedJSONParseError]: " + W.message
            }
        };

        function I(K) {
            var W = this.useColors;
            if (K[0] = (W ? "%c" : "") + this.namespace + (W ? " %c" : " ") + K[0] + (W ? "%c " : " ") + "+" + O.humanize(this.diff), !!W) {
                var X = "color: " + this.color;
                K.splice(1, 0, X, "color: inherit");
                var G = 0,
                    Y = 0;
                K[0].replace(/%[a-zA-Z%]/g, function(Z) {
                    Z !== "%%" && (G++, Z === "%c" && (Y = G))
                }), K.splice(Y, 0, X)
            }
        }

        function N() {
            return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function R(K) {
            try {
                K == null ? O.storage.removeItem("debug") : O.storage.debug = K
            } catch {}
        }

        function H() {
            var K;
            try {
                K = O.storage.debug
            } catch {}
            return !K && typeof process < "u" && "env" in process && (K = define_process_env_default.DEBUG), K
        }
        O.enable(H());

        function z() {
            try {
                return window.localStorage
            } catch {}
        }
    }(browser$2, browser$2.exports)), browser$2.exports
}
var componentEmitter = {
        exports: {}
    },
    hasRequiredComponentEmitter;

function requireComponentEmitter() {
    return hasRequiredComponentEmitter || (hasRequiredComponentEmitter = 1, function(L) {
        L.exports = O;

        function O(I) {
            if (I) return M(I)
        }

        function M(I) {
            for (var N in O.prototype) I[N] = O.prototype[N];
            return I
        }
        O.prototype.on = O.prototype.addEventListener = function(I, N) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + I] = this._callbacks["$" + I] || []).push(N), this
        }, O.prototype.once = function(I, N) {
            function R() {
                this.off(I, R), N.apply(this, arguments)
            }
            return R.fn = N, this.on(I, R), this
        }, O.prototype.off = O.prototype.removeListener = O.prototype.removeAllListeners = O.prototype.removeEventListener = function(I, N) {
            if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
            var R = this._callbacks["$" + I];
            if (!R) return this;
            if (arguments.length == 1) return delete this._callbacks["$" + I], this;
            for (var H, z = 0; z < R.length; z++)
                if (H = R[z], H === N || H.fn === N) {
                    R.splice(z, 1);
                    break
                }
            return R.length === 0 && delete this._callbacks["$" + I], this
        }, O.prototype.emit = function(I) {
            this._callbacks = this._callbacks || {};
            for (var N = new Array(arguments.length - 1), R = this._callbacks["$" + I], H = 1; H < arguments.length; H++) N[H - 1] = arguments[H];
            if (R) {
                R = R.slice(0);
                for (var H = 0, z = R.length; H < z; ++H) R[H].apply(this, N)
            }
            return this
        }, O.prototype.listeners = function(I) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + I] || []
        }, O.prototype.hasListeners = function(I) {
            return !!this.listeners(I).length
        }
    }(componentEmitter)), componentEmitter.exports
}
var binary = {},
    isarray, hasRequiredIsarray;

function requireIsarray() {
    if (hasRequiredIsarray) return isarray;
    hasRequiredIsarray = 1;
    var L = {}.toString;
    return isarray = Array.isArray || function(O) {
        return L.call(O) == "[object Array]"
    }, isarray
}
var isBuffer, hasRequiredIsBuffer;

function requireIsBuffer() {
    if (hasRequiredIsBuffer) return isBuffer;
    hasRequiredIsBuffer = 1, isBuffer = I;
    var L = typeof Buffer == "function" && typeof Buffer.isBuffer == "function",
        O = typeof ArrayBuffer == "function",
        M = function(N) {
            return typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(N) : N.buffer instanceof ArrayBuffer
        };

    function I(N) {
        return L && Buffer.isBuffer(N) || O && (N instanceof ArrayBuffer || M(N))
    }
    return isBuffer
}
var hasRequiredBinary;

function requireBinary() {
    if (hasRequiredBinary) return binary;
    hasRequiredBinary = 1;
    var L = requireIsarray(),
        O = requireIsBuffer(),
        M = Object.prototype.toString,
        I = typeof Blob == "function" || typeof Blob < "u" && M.call(Blob) === "[object BlobConstructor]",
        N = typeof File == "function" || typeof File < "u" && M.call(File) === "[object FileConstructor]";
    binary.deconstructPacket = function(z) {
        var K = [],
            W = z.data,
            X = z;
        return X.data = R(W, K), X.attachments = K.length, {
            packet: X,
            buffers: K
        }
    };

    function R(z, K) {
        if (!z) return z;
        if (O(z)) {
            var W = {
                _placeholder: !0,
                num: K.length
            };
            return K.push(z), W
        } else if (L(z)) {
            for (var X = new Array(z.length), G = 0; G < z.length; G++) X[G] = R(z[G], K);
            return X
        } else if (typeof z == "object" && !(z instanceof Date)) {
            var X = {};
            for (var Y in z) X[Y] = R(z[Y], K);
            return X
        }
        return z
    }
    binary.reconstructPacket = function(z, K) {
        return z.data = H(z.data, K), z.attachments = void 0, z
    };

    function H(z, K) {
        if (!z) return z;
        if (z && z._placeholder === !0) {
            var W = typeof z.num == "number" && z.num >= 0 && z.num < K.length;
            if (W) return K[z.num];
            throw new Error("illegal attachments")
        } else if (L(z))
            for (var X = 0; X < z.length; X++) z[X] = H(z[X], K);
        else if (typeof z == "object")
            for (var G in z) z[G] = H(z[G], K);
        return z
    }
    return binary.removeBlobs = function(z, K) {
        function W(Y, Z, Q) {
            if (!Y) return Y;
            if (I && Y instanceof Blob || N && Y instanceof File) {
                X++;
                var J = new FileReader;
                J.onload = function() {
                    Q ? Q[Z] = this.result : G = this.result, --X || K(G)
                }, J.readAsArrayBuffer(Y)
            } else if (L(Y))
                for (var _ = 0; _ < Y.length; _++) W(Y[_], _, Y);
            else if (typeof Y == "object" && !O(Y))
                for (var ee in Y) W(Y[ee], ee, Y)
        }
        var X = 0,
            G = z;
        W(G), X || K(G)
    }, binary
}
var hasRequiredSocket_ioParser;

function requireSocket_ioParser() {
    return hasRequiredSocket_ioParser || (hasRequiredSocket_ioParser = 1, function(L) {
        var O = requireBrowser$2()("socket.io-parser"),
            M = requireComponentEmitter(),
            I = requireBinary(),
            N = requireIsarray(),
            R = requireIsBuffer();
        L.protocol = 4, L.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], L.CONNECT = 0, L.DISCONNECT = 1, L.EVENT = 2, L.ACK = 3, L.ERROR = 4, L.BINARY_EVENT = 5, L.BINARY_ACK = 6, L.Encoder = H, L.Decoder = G;

        function H() {}
        var z = L.ERROR + '"encode error"';
        H.prototype.encode = function(ee, te) {
            if (O("encoding packet %j", ee), L.BINARY_EVENT === ee.type || L.BINARY_ACK === ee.type) X(ee, te);
            else {
                var ie = K(ee);
                te([ie])
            }
        };

        function K(ee) {
            var te = "" + ee.type;
            if ((L.BINARY_EVENT === ee.type || L.BINARY_ACK === ee.type) && (te += ee.attachments + "-"), ee.nsp && ee.nsp !== "/" && (te += ee.nsp + ","), ee.id != null && (te += ee.id), ee.data != null) {
                var ie = W(ee.data);
                if (ie !== !1) te += ie;
                else return z
            }
            return O("encoded %j as %s", ee, te), te
        }

        function W(ee) {
            try {
                return JSON.stringify(ee)
            } catch {
                return !1
            }
        }

        function X(ee, te) {
            function ie(re) {
                var oe = I.deconstructPacket(re),
                    ae = K(oe.packet),
                    ne = oe.buffers;
                ne.unshift(ae), te(ne)
            }
            I.removeBlobs(ee, ie)
        }

        function G() {
            this.reconstructor = null
        }
        M(G.prototype), G.prototype.add = function(ee) {
            var te;
            if (typeof ee == "string") {
                if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                te = Z(ee), L.BINARY_EVENT === te.type || L.BINARY_ACK === te.type ? (this.reconstructor = new J(te), this.reconstructor.reconPack.attachments === 0 && this.emit("decoded", te)) : this.emit("decoded", te)
            } else if (R(ee) || ee.base64)
                if (this.reconstructor) te = this.reconstructor.takeBinaryData(ee), te && (this.reconstructor = null, this.emit("decoded", te));
                else throw new Error("got binary data when not reconstructing a packet");
            else throw new Error("Unknown type: " + ee)
        };

        function Y(ee, te) {
            switch (ee) {
                case 0:
                    return typeof te == "object";
                case 1:
                    return te === void 0;
                case 4:
                    return typeof te == "string" || typeof te == "object";
                case 2:
                case 5:
                    return N(te) && (typeof te[0] == "string" || typeof te[0] == "number");
                case 3:
                case 6:
                    return N(te)
            }
        }

        function Z(ee) {
            var te = 0,
                ie = {
                    type: Number(ee.charAt(0))
                };
            if (L.types[ie.type] == null) return _("unknown packet type " + ie.type);
            if (L.BINARY_EVENT === ie.type || L.BINARY_ACK === ie.type) {
                for (var re = te + 1; ee.charAt(++te) !== "-" && te != ee.length;);
                var oe = ee.substring(re, te);
                if (oe != Number(oe) || ee.charAt(te) !== "-") throw new Error("Illegal attachments");
                ie.attachments = Number(oe)
            }
            if (ee.charAt(te + 1) === "/") {
                for (var re = te + 1; ++te;) {
                    var ae = ee.charAt(te);
                    if (ae === "," || te === ee.length) break
                }
                ie.nsp = ee.substring(re, te)
            } else ie.nsp = "/";
            var ne = ee.charAt(te + 1);
            if (ne !== "" && Number(ne) == ne) {
                for (var re = te + 1; ++te;) {
                    var ae = ee.charAt(te);
                    if (ae == null || Number(ae) != ae) {
                        --te;
                        break
                    }
                    if (te === ee.length) break
                }
                ie.id = Number(ee.substring(re, te + 1))
            }
            if (ee.charAt(++te)) {
                var se = Q(ee.substr(te));
                if (Y(ie.type, se)) ie.data = se;
                else throw new Error("invalid payload")
            }
            return O("decoded %s as %j", ee, ie), ie
        }

        function Q(ee) {
            try {
                return JSON.parse(ee)
            } catch {
                return !1
            }
        }
        G.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        };

        function J(ee) {
            this.reconPack = ee, this.buffers = []
        }
        J.prototype.takeBinaryData = function(ee) {
            if (this.buffers.push(ee), this.buffers.length === this.reconPack.attachments) {
                var te = I.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(), te
            }
            return null
        }, J.prototype.finishedReconstruction = function() {
            this.reconPack = null, this.buffers = []
        };

        function _(ee) {
            return {
                type: L.ERROR,
                data: "parser error: " + ee
            }
        }
    }(socket_ioParser)), socket_ioParser
}
var lib = {
        exports: {}
    },
    transports = {},
    hasCors = {
        exports: {}
    },
    hasRequiredHasCors;

function requireHasCors() {
    if (hasRequiredHasCors) return hasCors.exports;
    hasRequiredHasCors = 1;
    try {
        hasCors.exports = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
    } catch {
        hasCors.exports = !1
    }
    return hasCors.exports
}
var globalThis_browser, hasRequiredGlobalThis_browser;

function requireGlobalThis_browser() {
    return hasRequiredGlobalThis_browser || (hasRequiredGlobalThis_browser = 1, globalThis_browser = function() {
        return typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
    }()), globalThis_browser
}
var xmlhttprequest_browser, hasRequiredXmlhttprequest_browser;

function requireXmlhttprequest_browser() {
    if (hasRequiredXmlhttprequest_browser) return xmlhttprequest_browser;
    hasRequiredXmlhttprequest_browser = 1;
    var L = requireHasCors(),
        O = requireGlobalThis_browser();
    return xmlhttprequest_browser = function(M) {
        var I = M.xdomain,
            N = M.xscheme,
            R = M.enablesXDR;
        try {
            if (typeof XMLHttpRequest < "u" && (!I || L)) return new XMLHttpRequest
        } catch {}
        try {
            if (typeof XDomainRequest < "u" && !N && R) return new XDomainRequest
        } catch {}
        if (!I) try {
            return new O[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
    }, xmlhttprequest_browser
}
var pollingXhr = {
        exports: {}
    },
    browser$1 = {},
    keys, hasRequiredKeys;

function requireKeys() {
    return hasRequiredKeys || (hasRequiredKeys = 1, keys = Object.keys || function(L) {
        var O = [],
            M = Object.prototype.hasOwnProperty;
        for (var I in L) M.call(L, I) && O.push(I);
        return O
    }), keys
}
var hasBinary2, hasRequiredHasBinary2;

function requireHasBinary2() {
    if (hasRequiredHasBinary2) return hasBinary2;
    hasRequiredHasBinary2 = 1;
    var L = requireIsarray(),
        O = Object.prototype.toString,
        M = typeof Blob == "function" || typeof Blob < "u" && O.call(Blob) === "[object BlobConstructor]",
        I = typeof File == "function" || typeof File < "u" && O.call(File) === "[object FileConstructor]";
    hasBinary2 = N;

    function N(R) {
        if (!R || typeof R != "object") return !1;
        if (L(R)) {
            for (var H = 0, z = R.length; H < z; H++)
                if (N(R[H])) return !0;
            return !1
        }
        if (typeof Buffer == "function" && Buffer.isBuffer && Buffer.isBuffer(R) || typeof ArrayBuffer == "function" && R instanceof ArrayBuffer || M && R instanceof Blob || I && R instanceof File) return !0;
        if (R.toJSON && typeof R.toJSON == "function" && arguments.length === 1) return N(R.toJSON(), !0);
        for (var K in R)
            if (Object.prototype.hasOwnProperty.call(R, K) && N(R[K])) return !0;
        return !1
    }
    return hasBinary2
}
var arraybuffer_slice, hasRequiredArraybuffer_slice;

function requireArraybuffer_slice() {
    return hasRequiredArraybuffer_slice || (hasRequiredArraybuffer_slice = 1, arraybuffer_slice = function(L, O, M) {
        var I = L.byteLength;
        if (O = O || 0, M = M || I, L.slice) return L.slice(O, M);
        if (O < 0 && (O += I), M < 0 && (M += I), M > I && (M = I), O >= I || O >= M || I === 0) return new ArrayBuffer(0);
        for (var N = new Uint8Array(L), R = new Uint8Array(M - O), H = O, z = 0; H < M; H++, z++) R[z] = N[H];
        return R.buffer
    }), arraybuffer_slice
}
var after_1, hasRequiredAfter;

function requireAfter() {
    if (hasRequiredAfter) return after_1;
    hasRequiredAfter = 1, after_1 = L;

    function L(M, I, N) {
        var R = !1;
        return N = N || O, H.count = M, M === 0 ? I() : H;

        function H(z, K) {
            if (H.count <= 0) throw new Error("after called too many times");
            --H.count, z ? (R = !0, I(z), I = N) : H.count === 0 && !R && I(null, K)
        }
    }

    function O() {}
    return after_1
} /*! https://mths.be/utf8js v2.1.2 by @mathias */
var utf8, hasRequiredUtf8;

function requireUtf8() {
    if (hasRequiredUtf8) return utf8;
    hasRequiredUtf8 = 1;
    var L = String.fromCharCode;

    function O(Z) {
        for (var Q = [], J = 0, _ = Z.length, ee, te; J < _;) ee = Z.charCodeAt(J++), ee >= 55296 && ee <= 56319 && J < _ ? (te = Z.charCodeAt(J++), (te & 64512) == 56320 ? Q.push(((ee & 1023) << 10) + (te & 1023) + 65536) : (Q.push(ee), J--)) : Q.push(ee);
        return Q
    }

    function M(Z) {
        for (var Q = Z.length, J = -1, _, ee = ""; ++J < Q;) _ = Z[J], _ > 65535 && (_ -= 65536, ee += L(_ >>> 10 & 1023 | 55296), _ = 56320 | _ & 1023), ee += L(_);
        return ee
    }

    function I(Z, Q) {
        if (Z >= 55296 && Z <= 57343) {
            if (Q) throw Error("Lone surrogate U+" + Z.toString(16).toUpperCase() + " is not a scalar value");
            return !1
        }
        return !0
    }

    function N(Z, Q) {
        return L(Z >> Q & 63 | 128)
    }

    function R(Z, Q) {
        if (!(Z & 4294967168)) return L(Z);
        var J = "";
        return Z & 4294965248 ? Z & 4294901760 ? !(Z & 4292870144) && (J = L(Z >> 18 & 7 | 240), J += N(Z, 12), J += N(Z, 6)) : (I(Z, Q) || (Z = 65533), J = L(Z >> 12 & 15 | 224), J += N(Z, 6)) : J = L(Z >> 6 & 31 | 192), J += L(Z & 63 | 128), J
    }

    function H(Z, Q) {
        Q = Q || {};
        for (var J = Q.strict !== !1, _ = O(Z), ee = _.length, te = -1, ie, re = ""; ++te < ee;) ie = _[te], re += R(ie, J);
        return re
    }

    function z() {
        if (G >= X) throw Error("Invalid byte index");
        var Z = W[G] & 255;
        if (G++, (Z & 192) == 128) return Z & 63;
        throw Error("Invalid continuation byte")
    }

    function K(Z) {
        var Q, J, _, ee, te;
        if (G > X) throw Error("Invalid byte index");
        if (G == X) return !1;
        if (Q = W[G] & 255, G++, (Q & 128) == 0) return Q;
        if ((Q & 224) == 192) {
            if (J = z(), te = (Q & 31) << 6 | J, te >= 128) return te;
            throw Error("Invalid continuation byte")
        }
        if ((Q & 240) == 224) {
            if (J = z(), _ = z(), te = (Q & 15) << 12 | J << 6 | _, te >= 2048) return I(te, Z) ? te : 65533;
            throw Error("Invalid continuation byte")
        }
        if ((Q & 248) == 240 && (J = z(), _ = z(), ee = z(), te = (Q & 7) << 18 | J << 12 | _ << 6 | ee, te >= 65536 && te <= 1114111)) return te;
        throw Error("Invalid UTF-8 detected")
    }
    var W, X, G;

    function Y(Z, Q) {
        Q = Q || {};
        var J = Q.strict !== !1;
        W = O(Z), X = W.length, G = 0;
        for (var _ = [], ee;
            (ee = K(J)) !== !1;) _.push(ee);
        return M(_)
    }
    return utf8 = {
        version: "2.1.2",
        encode: H,
        decode: Y
    }, utf8
}
var base64Arraybuffer = {},
    hasRequiredBase64Arraybuffer;

function requireBase64Arraybuffer() {
    return hasRequiredBase64Arraybuffer || (hasRequiredBase64Arraybuffer = 1, function(L) {
        base64Arraybuffer.encode = function(O) {
            var M = new Uint8Array(O),
                I, N = M.length,
                R = "";
            for (I = 0; I < N; I += 3) R += L[M[I] >> 2], R += L[(M[I] & 3) << 4 | M[I + 1] >> 4], R += L[(M[I + 1] & 15) << 2 | M[I + 2] >> 6], R += L[M[I + 2] & 63];
            return N % 3 === 2 ? R = R.substring(0, R.length - 1) + "=" : N % 3 === 1 && (R = R.substring(0, R.length - 2) + "=="), R
        }, base64Arraybuffer.decode = function(O) {
            var M = O.length * .75,
                I = O.length,
                N, R = 0,
                H, z, K, W;
            O[O.length - 1] === "=" && (M--, O[O.length - 2] === "=" && M--);
            var X = new ArrayBuffer(M),
                G = new Uint8Array(X);
            for (N = 0; N < I; N += 4) H = L.indexOf(O[N]), z = L.indexOf(O[N + 1]), K = L.indexOf(O[N + 2]), W = L.indexOf(O[N + 3]), G[R++] = H << 2 | z >> 4, G[R++] = (z & 15) << 4 | K >> 2, G[R++] = (K & 3) << 6 | W & 63;
            return X
        }
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")), base64Arraybuffer
}
var blob, hasRequiredBlob;

function requireBlob() {
    if (hasRequiredBlob) return blob;
    hasRequiredBlob = 1;
    var L = typeof L < "u" ? L : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : !1,
        O = function() {
            try {
                var z = new Blob(["hi"]);
                return z.size === 2
            } catch {
                return !1
            }
        }(),
        M = O && function() {
            try {
                var z = new Blob([new Uint8Array([1, 2])]);
                return z.size === 2
            } catch {
                return !1
            }
        }(),
        I = L && L.prototype.append && L.prototype.getBlob;

    function N(z) {
        return z.map(function(K) {
            if (K.buffer instanceof ArrayBuffer) {
                var W = K.buffer;
                if (K.byteLength !== W.byteLength) {
                    var X = new Uint8Array(K.byteLength);
                    X.set(new Uint8Array(W, K.byteOffset, K.byteLength)), W = X.buffer
                }
                return W
            }
            return K
        })
    }

    function R(z, K) {
        K = K || {};
        var W = new L;
        return N(z).forEach(function(X) {
            W.append(X)
        }), K.type ? W.getBlob(K.type) : W.getBlob()
    }

    function H(z, K) {
        return new Blob(N(z), K || {})
    }
    return typeof Blob < "u" && (R.prototype = Blob.prototype, H.prototype = Blob.prototype), blob = function() {
        return O ? M ? Blob : H : I ? R : void 0
    }(), blob
}
var hasRequiredBrowser$1;

function requireBrowser$1() {
    return hasRequiredBrowser$1 || (hasRequiredBrowser$1 = 1, function(L) {
        var O = requireKeys(),
            M = requireHasBinary2(),
            I = requireArraybuffer_slice(),
            N = requireAfter(),
            R = requireUtf8(),
            H;
        typeof ArrayBuffer < "u" && (H = requireBase64Arraybuffer());
        var z = typeof navigator < "u" && /Android/i.test(navigator.userAgent),
            K = typeof navigator < "u" && /PhantomJS/i.test(navigator.userAgent),
            W = z || K;
        L.protocol = 3;
        var X = L.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            },
            G = O(X),
            Y = {
                type: "error",
                data: "parser error"
            },
            Z = requireBlob();
        L.encodePacket = function(re, oe, ae, ne) {
            typeof oe == "function" && (ne = oe, oe = !1), typeof ae == "function" && (ne = ae, ae = null);
            var se = re.data === void 0 ? void 0 : re.data.buffer || re.data;
            if (typeof ArrayBuffer < "u" && se instanceof ArrayBuffer) return J(re, oe, ne);
            if (typeof Z < "u" && se instanceof Z) return ee(re, oe, ne);
            if (se && se.base64) return Q(re, ne);
            var he = X[re.type];
            return re.data !== void 0 && (he += ae ? R.encode(String(re.data), {
                strict: !1
            }) : String(re.data)), ne("" + he)
        };

        function Q(re, oe) {
            var ae = "b" + L.packets[re.type] + re.data.data;
            return oe(ae)
        }

        function J(re, oe, ae) {
            if (!oe) return L.encodeBase64Packet(re, ae);
            var ne = re.data,
                se = new Uint8Array(ne),
                he = new Uint8Array(1 + ne.byteLength);
            he[0] = X[re.type];
            for (var me = 0; me < se.length; me++) he[me + 1] = se[me];
            return ae(he.buffer)
        }

        function _(re, oe, ae) {
            if (!oe) return L.encodeBase64Packet(re, ae);
            var ne = new FileReader;
            return ne.onload = function() {
                L.encodePacket({
                    type: re.type,
                    data: ne.result
                }, oe, !0, ae)
            }, ne.readAsArrayBuffer(re.data)
        }

        function ee(re, oe, ae) {
            if (!oe) return L.encodeBase64Packet(re, ae);
            if (W) return _(re, oe, ae);
            var ne = new Uint8Array(1);
            ne[0] = X[re.type];
            var se = new Z([ne.buffer, re.data]);
            return ae(se)
        }
        L.encodeBase64Packet = function(re, oe) {
            var ae = "b" + L.packets[re.type];
            if (typeof Z < "u" && re.data instanceof Z) {
                var ne = new FileReader;
                return ne.onload = function() {
                    var pe = ne.result.split(",")[1];
                    oe(ae + pe)
                }, ne.readAsDataURL(re.data)
            }
            var se;
            try {
                se = String.fromCharCode.apply(null, new Uint8Array(re.data))
            } catch {
                for (var he = new Uint8Array(re.data), me = new Array(he.length), le = 0; le < he.length; le++) me[le] = he[le];
                se = String.fromCharCode.apply(null, me)
            }
            return ae += btoa(se), oe(ae)
        }, L.decodePacket = function(re, oe, ae) {
            if (re === void 0) return Y;
            if (typeof re == "string") {
                if (re.charAt(0) === "b") return L.decodeBase64Packet(re.substr(1), oe);
                if (ae && (re = te(re), re === !1)) return Y;
                var se = re.charAt(0);
                return Number(se) != se || !G[se] ? Y : re.length > 1 ? {
                    type: G[se],
                    data: re.substring(1)
                } : {
                    type: G[se]
                }
            }
            var ne = new Uint8Array(re),
                se = ne[0],
                he = I(re, 1);
            return Z && oe === "blob" && (he = new Z([he])), {
                type: G[se],
                data: he
            }
        };

        function te(re) {
            try {
                re = R.decode(re, {
                    strict: !1
                })
            } catch {
                return !1
            }
            return re
        }
        L.decodeBase64Packet = function(re, oe) {
            var ae = G[re.charAt(0)];
            if (!H) return {
                type: ae,
                data: {
                    base64: !0,
                    data: re.substr(1)
                }
            };
            var ne = H.decode(re.substr(1));
            return oe === "blob" && Z && (ne = new Z([ne])), {
                type: ae,
                data: ne
            }
        }, L.encodePayload = function(re, oe, ae) {
            typeof oe == "function" && (ae = oe, oe = null);
            var ne = M(re);
            if (oe && ne) return Z && !W ? L.encodePayloadAsBlob(re, ae) : L.encodePayloadAsArrayBuffer(re, ae);
            if (!re.length) return ae("0:");

            function se(me) {
                return me.length + ":" + me
            }

            function he(me, le) {
                L.encodePacket(me, ne ? oe : !1, !1, function(pe) {
                    le(null, se(pe))
                })
            }
            ie(re, he, function(me, le) {
                return ae(le.join(""))
            })
        };

        function ie(re, oe, ae) {
            for (var ne = new Array(re.length), se = N(re.length, ae), he = function(le, pe, de) {
                    oe(pe, function(ce, fe) {
                        ne[le] = fe, de(ce, ne)
                    })
                }, me = 0; me < re.length; me++) he(me, re[me], se)
        }
        L.decodePayload = function(re, oe, ae) {
            if (typeof re != "string") return L.decodePayloadAsBinary(re, oe, ae);
            typeof oe == "function" && (ae = oe, oe = null);
            var ne;
            if (re === "") return ae(Y, 0, 1);
            for (var se = "", he, me, le = 0, pe = re.length; le < pe; le++) {
                var de = re.charAt(le);
                if (de !== ":") {
                    se += de;
                    continue
                }
                if (se === "" || se != (he = Number(se)) || (me = re.substr(le + 1, he), se != me.length)) return ae(Y, 0, 1);
                if (me.length) {
                    if (ne = L.decodePacket(me, oe, !1), Y.type === ne.type && Y.data === ne.data) return ae(Y, 0, 1);
                    var ce = ae(ne, le + he, pe);
                    if (ce === !1) return
                }
                le += he, se = ""
            }
            if (se !== "") return ae(Y, 0, 1)
        }, L.encodePayloadAsArrayBuffer = function(re, oe) {
            if (!re.length) return oe(new ArrayBuffer(0));

            function ae(ne, se) {
                L.encodePacket(ne, !0, !0, function(he) {
                    return se(null, he)
                })
            }
            ie(re, ae, function(ne, se) {
                var he = se.reduce(function(pe, de) {
                        var ce;
                        return typeof de == "string" ? ce = de.length : ce = de.byteLength, pe + ce.toString().length + ce + 2
                    }, 0),
                    me = new Uint8Array(he),
                    le = 0;
                return se.forEach(function(pe) {
                    var de = typeof pe == "string",
                        ce = pe;
                    if (de) {
                        for (var fe = new Uint8Array(pe.length), ue = 0; ue < pe.length; ue++) fe[ue] = pe.charCodeAt(ue);
                        ce = fe.buffer
                    }
                    de ? me[le++] = 0 : me[le++] = 1;
                    for (var ye = ce.byteLength.toString(), ue = 0; ue < ye.length; ue++) me[le++] = parseInt(ye[ue]);
                    me[le++] = 255;
                    for (var fe = new Uint8Array(ce), ue = 0; ue < fe.length; ue++) me[le++] = fe[ue]
                }), oe(me.buffer)
            })
        }, L.encodePayloadAsBlob = function(re, oe) {
            function ae(ne, se) {
                L.encodePacket(ne, !0, !0, function(he) {
                    var me = new Uint8Array(1);
                    if (me[0] = 1, typeof he == "string") {
                        for (var le = new Uint8Array(he.length), pe = 0; pe < he.length; pe++) le[pe] = he.charCodeAt(pe);
                        he = le.buffer, me[0] = 0
                    }
                    for (var de = he instanceof ArrayBuffer ? he.byteLength : he.size, ce = de.toString(), fe = new Uint8Array(ce.length + 1), pe = 0; pe < ce.length; pe++) fe[pe] = parseInt(ce[pe]);
                    if (fe[ce.length] = 255, Z) {
                        var ue = new Z([me.buffer, fe.buffer, he]);
                        se(null, ue)
                    }
                })
            }
            ie(re, ae, function(ne, se) {
                return oe(new Z(se))
            })
        }, L.decodePayloadAsBinary = function(re, oe, ae) {
            typeof oe == "function" && (ae = oe, oe = null);
            for (var ne = re, se = []; ne.byteLength > 0;) {
                for (var he = new Uint8Array(ne), me = he[0] === 0, le = "", pe = 1; he[pe] !== 255; pe++) {
                    if (le.length > 310) return ae(Y, 0, 1);
                    le += he[pe]
                }
                ne = I(ne, 2 + le.length), le = parseInt(le);
                var de = I(ne, 0, le);
                if (me) try {
                    de = String.fromCharCode.apply(null, new Uint8Array(de))
                } catch {
                    var ce = new Uint8Array(de);
                    de = "";
                    for (var pe = 0; pe < ce.length; pe++) de += String.fromCharCode(ce[pe])
                }
                se.push(de), ne = I(ne, le)
            }
            var fe = se.length;
            se.forEach(function(ue, ye) {
                ae(L.decodePacket(ue, oe, !0), ye, fe)
            })
        }
    }(browser$1)), browser$1
}
var transport, hasRequiredTransport;

function requireTransport() {
    if (hasRequiredTransport) return transport;
    hasRequiredTransport = 1;
    var L = requireBrowser$1(),
        O = requireComponentEmitter();
    transport = M;

    function M(I) {
        this.path = I.path, this.hostname = I.hostname, this.port = I.port, this.secure = I.secure, this.query = I.query, this.timestampParam = I.timestampParam, this.timestampRequests = I.timestampRequests, this.readyState = "", this.agent = I.agent || !1, this.socket = I.socket, this.enablesXDR = I.enablesXDR, this.withCredentials = I.withCredentials, this.pfx = I.pfx, this.key = I.key, this.passphrase = I.passphrase, this.cert = I.cert, this.ca = I.ca, this.ciphers = I.ciphers, this.rejectUnauthorized = I.rejectUnauthorized, this.forceNode = I.forceNode, this.isReactNative = I.isReactNative, this.extraHeaders = I.extraHeaders, this.localAddress = I.localAddress
    }
    return O(M.prototype), M.prototype.onError = function(I, N) {
        var R = new Error(I);
        return R.type = "TransportError", R.description = N, this.emit("error", R), this
    }, M.prototype.open = function() {
        return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening", this.doOpen()), this
    }, M.prototype.close = function() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }, M.prototype.send = function(I) {
        if (this.readyState === "open") this.write(I);
        else throw new Error("Transport not open")
    }, M.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, M.prototype.onData = function(I) {
        var N = L.decodePacket(I, this.socket.binaryType);
        this.onPacket(N)
    }, M.prototype.onPacket = function(I) {
        this.emit("packet", I)
    }, M.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }, transport
}
var parseqs = {},
    hasRequiredParseqs;

function requireParseqs() {
    return hasRequiredParseqs || (hasRequiredParseqs = 1, parseqs.encode = function(L) {
        var O = "";
        for (var M in L) L.hasOwnProperty(M) && (O.length && (O += "&"), O += encodeURIComponent(M) + "=" + encodeURIComponent(L[M]));
        return O
    }, parseqs.decode = function(L) {
        for (var O = {}, M = L.split("&"), I = 0, N = M.length; I < N; I++) {
            var R = M[I].split("=");
            O[decodeURIComponent(R[0])] = decodeURIComponent(R[1])
        }
        return O
    }), parseqs
}
var componentInherit, hasRequiredComponentInherit;

function requireComponentInherit() {
    return hasRequiredComponentInherit || (hasRequiredComponentInherit = 1, componentInherit = function(L, O) {
        var M = function() {};
        M.prototype = O.prototype, L.prototype = new M, L.prototype.constructor = L
    }), componentInherit
}
var yeast_1, hasRequiredYeast;

function requireYeast() {
    if (hasRequiredYeast) return yeast_1;
    hasRequiredYeast = 1;
    var L = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        O = 64,
        M = {},
        I = 0,
        N = 0,
        R;

    function H(W) {
        var X = "";
        do X = L[W % O] + X, W = Math.floor(W / O); while (W > 0);
        return X
    }

    function z(W) {
        var X = 0;
        for (N = 0; N < W.length; N++) X = X * O + M[W.charAt(N)];
        return X
    }

    function K() {
        var W = H(+new Date);
        return W !== R ? (I = 0, R = W) : W + "." + H(I++)
    }
    for (; N < O; N++) M[L[N]] = N;
    return K.encode = H, K.decode = z, yeast_1 = K, yeast_1
}
var browser = {
        exports: {}
    },
    debug = {
        exports: {}
    },
    ms, hasRequiredMs;

function requireMs() {
    if (hasRequiredMs) return ms;
    hasRequiredMs = 1;
    var L = 1e3,
        O = L * 60,
        M = O * 60,
        I = M * 24,
        N = I * 365.25;
    ms = function(W, X) {
        X = X || {};
        var G = typeof W;
        if (G === "string" && W.length > 0) return R(W);
        if (G === "number" && isNaN(W) === !1) return X.long ? z(W) : H(W);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(W))
    };

    function R(W) {
        if (W = String(W), !(W.length > 100)) {
            var X = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(W);
            if (X) {
                var G = parseFloat(X[1]),
                    Y = (X[2] || "ms").toLowerCase();
                switch (Y) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return G * N;
                    case "days":
                    case "day":
                    case "d":
                        return G * I;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return G * M;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return G * O;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return G * L;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return G;
                    default:
                        return
                }
            }
        }
    }

    function H(W) {
        return W >= I ? Math.round(W / I) + "d" : W >= M ? Math.round(W / M) + "h" : W >= O ? Math.round(W / O) + "m" : W >= L ? Math.round(W / L) + "s" : W + "ms"
    }

    function z(W) {
        return K(W, I, "day") || K(W, M, "hour") || K(W, O, "minute") || K(W, L, "second") || W + " ms"
    }

    function K(W, X, G) {
        if (!(W < X)) return W < X * 1.5 ? Math.floor(W / X) + " " + G : Math.ceil(W / X) + " " + G + "s"
    }
    return ms
}
var hasRequiredDebug;

function requireDebug() {
    return hasRequiredDebug || (hasRequiredDebug = 1, function(L, O) {
        O = L.exports = I.debug = I.default = I, O.coerce = K, O.disable = H, O.enable = R, O.enabled = z, O.humanize = requireMs(), O.instances = [], O.names = [], O.skips = [], O.formatters = {};

        function M(W) {
            var X = 0,
                G;
            for (G in W) X = (X << 5) - X + W.charCodeAt(G), X |= 0;
            return O.colors[Math.abs(X) % O.colors.length]
        }

        function I(W) {
            var X;

            function G() {
                if (G.enabled) {
                    var Y = G,
                        Z = +new Date,
                        Q = Z - (X || Z);
                    Y.diff = Q, Y.prev = X, Y.curr = Z, X = Z;
                    for (var J = new Array(arguments.length), _ = 0; _ < J.length; _++) J[_] = arguments[_];
                    J[0] = O.coerce(J[0]), typeof J[0] != "string" && J.unshift("%O");
                    var ee = 0;
                    J[0] = J[0].replace(/%([a-zA-Z%])/g, function(ie, re) {
                        if (ie === "%%") return ie;
                        ee++;
                        var oe = O.formatters[re];
                        if (typeof oe == "function") {
                            var ae = J[ee];
                            ie = oe.call(Y, ae), J.splice(ee, 1), ee--
                        }
                        return ie
                    }), O.formatArgs.call(Y, J);
                    var te = G.log || O.log || console.log.bind(console);
                    te.apply(Y, J)
                }
            }
            return G.namespace = W, G.enabled = O.enabled(W), G.useColors = O.useColors(), G.color = M(W), G.destroy = N, typeof O.init == "function" && O.init(G), O.instances.push(G), G
        }

        function N() {
            var W = O.instances.indexOf(this);
            return W !== -1 ? (O.instances.splice(W, 1), !0) : !1
        }

        function R(W) {
            O.save(W), O.names = [], O.skips = [];
            var X, G = (typeof W == "string" ? W : "").split(/[\s,]+/),
                Y = G.length;
            for (X = 0; X < Y; X++) G[X] && (W = G[X].replace(/\*/g, ".*?"), W[0] === "-" ? O.skips.push(new RegExp("^" + W.substr(1) + "$")) : O.names.push(new RegExp("^" + W + "$")));
            for (X = 0; X < O.instances.length; X++) {
                var Z = O.instances[X];
                Z.enabled = O.enabled(Z.namespace)
            }
        }

        function H() {
            O.enable("")
        }

        function z(W) {
            if (W[W.length - 1] === "*") return !0;
            var X, G;
            for (X = 0, G = O.skips.length; X < G; X++)
                if (O.skips[X].test(W)) return !1;
            for (X = 0, G = O.names.length; X < G; X++)
                if (O.names[X].test(W)) return !0;
            return !1
        }

        function K(W) {
            return W instanceof Error ? W.stack || W.message : W
        }
    }(debug, debug.exports)), debug.exports
}
var hasRequiredBrowser;

function requireBrowser() {
    return hasRequiredBrowser || (hasRequiredBrowser = 1, function(L, O) {
        O = L.exports = requireDebug(), O.log = N, O.formatArgs = I, O.save = R, O.load = H, O.useColors = M, O.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : z(), O.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function M() {
            return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        O.formatters.j = function(K) {
            try {
                return JSON.stringify(K)
            } catch (W) {
                return "[UnexpectedJSONParseError]: " + W.message
            }
        };

        function I(K) {
            var W = this.useColors;
            if (K[0] = (W ? "%c" : "") + this.namespace + (W ? " %c" : " ") + K[0] + (W ? "%c " : " ") + "+" + O.humanize(this.diff), !!W) {
                var X = "color: " + this.color;
                K.splice(1, 0, X, "color: inherit");
                var G = 0,
                    Y = 0;
                K[0].replace(/%[a-zA-Z%]/g, function(Z) {
                    Z !== "%%" && (G++, Z === "%c" && (Y = G))
                }), K.splice(Y, 0, X)
            }
        }

        function N() {
            return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function R(K) {
            try {
                K == null ? O.storage.removeItem("debug") : O.storage.debug = K
            } catch {}
        }

        function H() {
            var K;
            try {
                K = O.storage.debug
            } catch {}
            return !K && typeof process < "u" && "env" in process && (K = define_process_env_default.DEBUG), K
        }
        O.enable(H());

        function z() {
            try {
                return window.localStorage
            } catch {}
        }
    }(browser, browser.exports)), browser.exports
}
var polling, hasRequiredPolling;

function requirePolling() {
    if (hasRequiredPolling) return polling;
    hasRequiredPolling = 1;
    var L = requireTransport(),
        O = requireParseqs(),
        M = requireBrowser$1(),
        I = requireComponentInherit(),
        N = requireYeast(),
        R = requireBrowser()("engine.io-client:polling");
    polling = z;
    var H = function() {
        var K = requireXmlhttprequest_browser(),
            W = new K({
                xdomain: !1
            });
        return W.responseType != null
    }();

    function z(K) {
        var W = K && K.forceBase64;
        (!H || W) && (this.supportsBinary = !1), L.call(this, K)
    }
    return I(z, L), z.prototype.name = "polling", z.prototype.doOpen = function() {
        this.poll()
    }, z.prototype.pause = function(K) {
        var W = this;
        this.readyState = "pausing";

        function X() {
            R("paused"), W.readyState = "paused", K()
        }
        if (this.polling || !this.writable) {
            var G = 0;
            this.polling && (R("we are currently polling - waiting to pause"), G++, this.once("pollComplete", function() {
                R("pre-pause polling complete"), --G || X()
            })), this.writable || (R("we are currently writing - waiting to pause"), G++, this.once("drain", function() {
                R("pre-pause writing complete"), --G || X()
            }))
        } else X()
    }, z.prototype.poll = function() {
        R("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
    }, z.prototype.onData = function(K) {
        var W = this;
        R("polling got data %s", K);
        var X = function(G, Y, Z) {
            if (W.readyState === "opening" && G.type === "open" && W.onOpen(), G.type === "close") return W.onClose(), !1;
            W.onPacket(G)
        };
        M.decodePayload(K, this.socket.binaryType, X), this.readyState !== "closed" && (this.polling = !1, this.emit("pollComplete"), this.readyState === "open" ? this.poll() : R('ignoring poll - transport state "%s"', this.readyState))
    }, z.prototype.doClose = function() {
        var K = this;

        function W() {
            R("writing close packet"), K.write([{
                type: "close"
            }])
        }
        this.readyState === "open" ? (R("transport open - closing"), W()) : (R("transport not open - deferring close"), this.once("open", W))
    }, z.prototype.write = function(K) {
        var W = this;
        this.writable = !1;
        var X = function() {
            W.writable = !0, W.emit("drain")
        };
        M.encodePayload(K, this.supportsBinary, function(G) {
            W.doWrite(G, X)
        })
    }, z.prototype.uri = function() {
        var K = this.query || {},
            W = this.secure ? "https" : "http",
            X = "";
        this.timestampRequests !== !1 && (K[this.timestampParam] = N()), !this.supportsBinary && !K.sid && (K.b64 = 1), K = O.encode(K), this.port && (W === "https" && Number(this.port) !== 443 || W === "http" && Number(this.port) !== 80) && (X = ":" + this.port), K.length && (K = "?" + K);
        var G = this.hostname.indexOf(":") !== -1;
        return W + "://" + (G ? "[" + this.hostname + "]" : this.hostname) + X + this.path + K
    }, polling
}
var hasRequiredPollingXhr;

function requirePollingXhr() {
    if (hasRequiredPollingXhr) return pollingXhr.exports;
    hasRequiredPollingXhr = 1;
    var L = requireXmlhttprequest_browser(),
        O = requirePolling(),
        M = requireComponentEmitter(),
        I = requireComponentInherit(),
        N = requireBrowser()("engine.io-client:polling-xhr"),
        R = requireGlobalThis_browser();
    pollingXhr.exports = z, pollingXhr.exports.Request = K;

    function H() {}

    function z(G) {
        if (O.call(this, G), this.requestTimeout = G.requestTimeout, this.extraHeaders = G.extraHeaders, typeof location < "u") {
            var Y = location.protocol === "https:",
                Z = location.port;
            Z || (Z = Y ? 443 : 80), this.xd = typeof location < "u" && G.hostname !== location.hostname || Z !== G.port, this.xs = G.secure !== Y
        }
    }
    I(z, O), z.prototype.supportsBinary = !0, z.prototype.request = function(G) {
        return G = G || {}, G.uri = this.uri(), G.xd = this.xd, G.xs = this.xs, G.agent = this.agent || !1, G.supportsBinary = this.supportsBinary, G.enablesXDR = this.enablesXDR, G.withCredentials = this.withCredentials, G.pfx = this.pfx, G.key = this.key, G.passphrase = this.passphrase, G.cert = this.cert, G.ca = this.ca, G.ciphers = this.ciphers, G.rejectUnauthorized = this.rejectUnauthorized, G.requestTimeout = this.requestTimeout, G.extraHeaders = this.extraHeaders, new K(G)
    }, z.prototype.doWrite = function(G, Y) {
        var Z = typeof G != "string" && G !== void 0,
            Q = this.request({
                method: "POST",
                data: G,
                isBinary: Z
            }),
            J = this;
        Q.on("success", Y), Q.on("error", function(_) {
            J.onError("xhr post error", _)
        }), this.sendXhr = Q
    }, z.prototype.doPoll = function() {
        N("xhr poll");
        var G = this.request(),
            Y = this;
        G.on("data", function(Z) {
            Y.onData(Z)
        }), G.on("error", function(Z) {
            Y.onError("xhr poll error", Z)
        }), this.pollXhr = G
    };

    function K(G) {
        this.method = G.method || "GET", this.uri = G.uri, this.xd = !!G.xd, this.xs = !!G.xs, this.async = G.async !== !1, this.data = G.data !== void 0 ? G.data : null, this.agent = G.agent, this.isBinary = G.isBinary, this.supportsBinary = G.supportsBinary, this.enablesXDR = G.enablesXDR, this.withCredentials = G.withCredentials, this.requestTimeout = G.requestTimeout, this.pfx = G.pfx, this.key = G.key, this.passphrase = G.passphrase, this.cert = G.cert, this.ca = G.ca, this.ciphers = G.ciphers, this.rejectUnauthorized = G.rejectUnauthorized, this.extraHeaders = G.extraHeaders, this.create()
    }
    if (M(K.prototype), K.prototype.create = function() {
            var G = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            G.pfx = this.pfx, G.key = this.key, G.passphrase = this.passphrase, G.cert = this.cert, G.ca = this.ca, G.ciphers = this.ciphers, G.rejectUnauthorized = this.rejectUnauthorized;
            var Y = this.xhr = new L(G),
                Z = this;
            try {
                N("xhr open %s: %s", this.method, this.uri), Y.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders) {
                        Y.setDisableHeaderCheck && Y.setDisableHeaderCheck(!0);
                        for (var Q in this.extraHeaders) this.extraHeaders.hasOwnProperty(Q) && Y.setRequestHeader(Q, this.extraHeaders[Q])
                    }
                } catch {}
                if (this.method === "POST") try {
                    this.isBinary ? Y.setRequestHeader("Content-type", "application/octet-stream") : Y.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
                try {
                    Y.setRequestHeader("Accept", "*/*")
                } catch {}
                "withCredentials" in Y && (Y.withCredentials = this.withCredentials), this.requestTimeout && (Y.timeout = this.requestTimeout), this.hasXDR() ? (Y.onload = function() {
                    Z.onLoad()
                }, Y.onerror = function() {
                    Z.onError(Y.responseText)
                }) : Y.onreadystatechange = function() {
                    if (Y.readyState === 2) try {
                        var J = Y.getResponseHeader("Content-Type");
                        (Z.supportsBinary && J === "application/octet-stream" || J === "application/octet-stream; charset=UTF-8") && (Y.responseType = "arraybuffer")
                    } catch {}
                    Y.readyState === 4 && (Y.status === 200 || Y.status === 1223 ? Z.onLoad() : setTimeout(function() {
                        Z.onError(typeof Y.status == "number" ? Y.status : 0)
                    }, 0))
                }, N("xhr data %s", this.data), Y.send(this.data)
            } catch (J) {
                setTimeout(function() {
                    Z.onError(J)
                }, 0);
                return
            }
            typeof document < "u" && (this.index = K.requestsCount++, K.requests[this.index] = this)
        }, K.prototype.onSuccess = function() {
            this.emit("success"), this.cleanup()
        }, K.prototype.onData = function(G) {
            this.emit("data", G), this.onSuccess()
        }, K.prototype.onError = function(G) {
            this.emit("error", G), this.cleanup(!0)
        }, K.prototype.cleanup = function(G) {
            if (!(typeof this.xhr > "u" || this.xhr === null)) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = H : this.xhr.onreadystatechange = H, G) try {
                    this.xhr.abort()
                } catch {}
                typeof document < "u" && delete K.requests[this.index], this.xhr = null
            }
        }, K.prototype.onLoad = function() {
            var G;
            try {
                var Y;
                try {
                    Y = this.xhr.getResponseHeader("Content-Type")
                } catch {}
                Y === "application/octet-stream" || Y === "application/octet-stream; charset=UTF-8" ? G = this.xhr.response || this.xhr.responseText : G = this.xhr.responseText
            } catch (Z) {
                this.onError(Z)
            }
            G != null && this.onData(G)
        }, K.prototype.hasXDR = function() {
            return typeof XDomainRequest < "u" && !this.xs && this.enablesXDR
        }, K.prototype.abort = function() {
            this.cleanup()
        }, K.requestsCount = 0, K.requests = {}, typeof document < "u") {
        if (typeof attachEvent == "function") attachEvent("onunload", X);
        else if (typeof addEventListener == "function") {
            var W = "onpagehide" in R ? "pagehide" : "unload";
            addEventListener(W, X, !1)
        }
    }

    function X() {
        for (var G in K.requests) K.requests.hasOwnProperty(G) && K.requests[G].abort()
    }
    return pollingXhr.exports
}
var pollingJsonp, hasRequiredPollingJsonp;

function requirePollingJsonp() {
    if (hasRequiredPollingJsonp) return pollingJsonp;
    hasRequiredPollingJsonp = 1;
    var L = requirePolling(),
        O = requireComponentInherit(),
        M = requireGlobalThis_browser();
    pollingJsonp = z;
    var I = /\n/g,
        N = /\\n/g,
        R;

    function H() {}

    function z(K) {
        L.call(this, K), this.query = this.query || {}, R || (R = M.___eio = M.___eio || []), this.index = R.length;
        var W = this;
        R.push(function(X) {
            W.onData(X)
        }), this.query.j = this.index, typeof addEventListener == "function" && addEventListener("beforeunload", function() {
            W.script && (W.script.onerror = H)
        }, !1)
    }
    return O(z, L), z.prototype.supportsBinary = !1, z.prototype.doClose = function() {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), L.prototype.doClose.call(this)
    }, z.prototype.doPoll = function() {
        var K = this,
            W = document.createElement("script");
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), W.async = !0, W.src = this.uri(), W.onerror = function(Y) {
            K.onError("jsonp poll error", Y)
        };
        var X = document.getElementsByTagName("script")[0];
        X ? X.parentNode.insertBefore(W, X) : (document.head || document.body).appendChild(W), this.script = W;
        var G = typeof navigator < "u" && /gecko/i.test(navigator.userAgent);
        G && setTimeout(function() {
            var Y = document.createElement("iframe");
            document.body.appendChild(Y), document.body.removeChild(Y)
        }, 100)
    }, z.prototype.doWrite = function(K, W) {
        var X = this;
        if (!this.form) {
            var G = document.createElement("form"),
                Y = document.createElement("textarea"),
                Z = this.iframeId = "eio_iframe_" + this.index,
                Q;
            G.className = "socketio", G.style.position = "absolute", G.style.top = "-1000px", G.style.left = "-1000px", G.target = Z, G.method = "POST", G.setAttribute("accept-charset", "utf-8"), Y.name = "d", G.appendChild(Y), document.body.appendChild(G), this.form = G, this.area = Y
        }
        this.form.action = this.uri();

        function J() {
            _(), W()
        }

        function _() {
            if (X.iframe) try {
                X.form.removeChild(X.iframe)
            } catch (te) {
                X.onError("jsonp polling iframe removal error", te)
            }
            try {
                var ee = '<iframe src="javascript:0" name="' + X.iframeId + '">';
                Q = document.createElement(ee)
            } catch {
                Q = document.createElement("iframe"), Q.name = X.iframeId, Q.src = "javascript:0"
            }
            Q.id = X.iframeId, X.form.appendChild(Q), X.iframe = Q
        }
        _(), K = K.replace(N, `\\
`), this.area.value = K.replace(I, "\\n");
        try {
            this.form.submit()
        } catch {}
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
            X.iframe.readyState === "complete" && J()
        } : this.iframe.onload = J
    }, pollingJsonp
}
const __viteBrowserExternal = {},
    __viteBrowserExternal$1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: __viteBrowserExternal
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    require$$6 = getAugmentedNamespace(__viteBrowserExternal$1);
var websocket, hasRequiredWebsocket;

function requireWebsocket() {
    if (hasRequiredWebsocket) return websocket;
    hasRequiredWebsocket = 1;
    var L = requireTransport(),
        O = requireBrowser$1(),
        M = requireParseqs(),
        I = requireComponentInherit(),
        N = requireYeast(),
        R = requireBrowser()("engine.io-client:websocket"),
        H, z;
    if (typeof WebSocket < "u" ? H = WebSocket : typeof self < "u" && (H = self.WebSocket || self.MozWebSocket), typeof window > "u") try {
        z = require$$6
    } catch {}
    var K = H || z;
    websocket = W;

    function W(X) {
        var G = X && X.forceBase64;
        G && (this.supportsBinary = !1), this.perMessageDeflate = X.perMessageDeflate, this.usingBrowserWebSocket = H && !X.forceNode, this.protocols = X.protocols, this.usingBrowserWebSocket || (K = z), L.call(this, X)
    }
    return I(W, L), W.prototype.name = "websocket", W.prototype.supportsBinary = !0, W.prototype.doOpen = function() {
        if (this.check()) {
            var X = this.uri(),
                G = this.protocols,
                Y = {};
            this.isReactNative || (Y.agent = this.agent, Y.perMessageDeflate = this.perMessageDeflate, Y.pfx = this.pfx, Y.key = this.key, Y.passphrase = this.passphrase, Y.cert = this.cert, Y.ca = this.ca, Y.ciphers = this.ciphers, Y.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (Y.headers = this.extraHeaders), this.localAddress && (Y.localAddress = this.localAddress);
            try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? G ? new K(X, G) : new K(X) : new K(X, G, Y)
            } catch (Z) {
                return this.emit("error", Z)
            }
            this.ws.binaryType === void 0 && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
        }
    }, W.prototype.addEventListeners = function() {
        var X = this;
        this.ws.onopen = function() {
            X.onOpen()
        }, this.ws.onclose = function() {
            X.onClose()
        }, this.ws.onmessage = function(G) {
            X.onData(G.data)
        }, this.ws.onerror = function(G) {
            X.onError("websocket error", G)
        }
    }, W.prototype.write = function(X) {
        var G = this;
        this.writable = !1;
        for (var Y = X.length, Z = 0, Q = Y; Z < Q; Z++)(function(_) {
            O.encodePacket(_, G.supportsBinary, function(ee) {
                if (!G.usingBrowserWebSocket) {
                    var te = {};
                    if (_.options && (te.compress = _.options.compress), G.perMessageDeflate) {
                        var ie = typeof ee == "string" ? Buffer.byteLength(ee) : ee.length;
                        ie < G.perMessageDeflate.threshold && (te.compress = !1)
                    }
                }
                try {
                    G.usingBrowserWebSocket ? G.ws.send(ee) : G.ws.send(ee, te)
                } catch {
                    R("websocket closed before onclose event")
                }--Y || J()
            })
        })(X[Z]);

        function J() {
            G.emit("flush"), setTimeout(function() {
                G.writable = !0, G.emit("drain")
            }, 0)
        }
    }, W.prototype.onClose = function() {
        L.prototype.onClose.call(this)
    }, W.prototype.doClose = function() {
        typeof this.ws < "u" && this.ws.close()
    }, W.prototype.uri = function() {
        var X = this.query || {},
            G = this.secure ? "wss" : "ws",
            Y = "";
        this.port && (G === "wss" && Number(this.port) !== 443 || G === "ws" && Number(this.port) !== 80) && (Y = ":" + this.port), this.timestampRequests && (X[this.timestampParam] = N()), this.supportsBinary || (X.b64 = 1), X = M.encode(X), X.length && (X = "?" + X);
        var Z = this.hostname.indexOf(":") !== -1;
        return G + "://" + (Z ? "[" + this.hostname + "]" : this.hostname) + Y + this.path + X
    }, W.prototype.check = function() {
        return !!K && !("__initialize" in K && this.name === W.prototype.name)
    }, websocket
}
var hasRequiredTransports;

function requireTransports() {
    if (hasRequiredTransports) return transports;
    hasRequiredTransports = 1;
    var L = requireXmlhttprequest_browser(),
        O = requirePollingXhr(),
        M = requirePollingJsonp(),
        I = requireWebsocket();
    transports.polling = N, transports.websocket = I;

    function N(R) {
        var H, z = !1,
            K = !1,
            W = R.jsonp !== !1;
        if (typeof location < "u") {
            var X = location.protocol === "https:",
                G = location.port;
            G || (G = X ? 443 : 80), z = R.hostname !== location.hostname || G !== R.port, K = R.secure !== X
        }
        if (R.xdomain = z, R.xscheme = K, H = new L(R), "open" in H && !R.forceJSONP) return new O(R);
        if (!W) throw new Error("JSONP disabled");
        return new M(R)
    }
    return transports
}
var indexof, hasRequiredIndexof;

function requireIndexof() {
    if (hasRequiredIndexof) return indexof;
    hasRequiredIndexof = 1;
    var L = [].indexOf;
    return indexof = function(O, M) {
        if (L) return O.indexOf(M);
        for (var I = 0; I < O.length; ++I)
            if (O[I] === M) return I;
        return -1
    }, indexof
}
var socket$1, hasRequiredSocket$1;

function requireSocket$1() {
    if (hasRequiredSocket$1) return socket$1;
    hasRequiredSocket$1 = 1;
    var L = requireTransports(),
        O = requireComponentEmitter(),
        M = requireBrowser()("engine.io-client:socket"),
        I = requireIndexof(),
        N = requireBrowser$1(),
        R = requireParseuri(),
        H = requireParseqs();
    socket$1 = z;

    function z(W, X) {
        if (!(this instanceof z)) return new z(W, X);
        X = X || {}, W && typeof W == "object" && (X = W, W = null), W ? (W = R(W), X.hostname = W.host, X.secure = W.protocol === "https" || W.protocol === "wss", X.port = W.port, W.query && (X.query = W.query)) : X.host && (X.hostname = R(X.host).host), this.secure = X.secure != null ? X.secure : typeof location < "u" && location.protocol === "https:", X.hostname && !X.port && (X.port = this.secure ? "443" : "80"), this.agent = X.agent || !1, this.hostname = X.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = X.port || (typeof location < "u" && location.port ? location.port : this.secure ? 443 : 80), this.query = X.query || {}, typeof this.query == "string" && (this.query = H.decode(this.query)), this.upgrade = X.upgrade !== !1, this.path = (X.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!X.forceJSONP, this.jsonp = X.jsonp !== !1, this.forceBase64 = !!X.forceBase64, this.enablesXDR = !!X.enablesXDR, this.withCredentials = X.withCredentials !== !1, this.timestampParam = X.timestampParam || "t", this.timestampRequests = X.timestampRequests, this.transports = X.transports || ["polling", "websocket"], this.transportOptions = X.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = X.policyPort || 843, this.rememberUpgrade = X.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = X.onlyBinaryUpgrades, this.perMessageDeflate = X.perMessageDeflate !== !1 ? X.perMessageDeflate || {} : !1, this.perMessageDeflate === !0 && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = X.pfx || void 0, this.key = X.key || void 0, this.passphrase = X.passphrase || void 0, this.cert = X.cert || void 0, this.ca = X.ca || void 0, this.ciphers = X.ciphers || void 0, this.rejectUnauthorized = X.rejectUnauthorized === void 0 ? !0 : X.rejectUnauthorized, this.forceNode = !!X.forceNode, this.isReactNative = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative", (typeof self > "u" || this.isReactNative) && (X.extraHeaders && Object.keys(X.extraHeaders).length > 0 && (this.extraHeaders = X.extraHeaders), X.localAddress && (this.localAddress = X.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
    }
    z.priorWebsocketSuccess = !1, O(z.prototype), z.protocol = N.protocol, z.Socket = z, z.Transport = requireTransport(), z.transports = requireTransports(), z.parser = requireBrowser$1(), z.prototype.createTransport = function(W) {
        M('creating transport "%s"', W);
        var X = K(this.query);
        X.EIO = N.protocol, X.transport = W;
        var G = this.transportOptions[W] || {};
        this.id && (X.sid = this.id);
        var Y = new L[W]({
            query: X,
            socket: this,
            agent: G.agent || this.agent,
            hostname: G.hostname || this.hostname,
            port: G.port || this.port,
            secure: G.secure || this.secure,
            path: G.path || this.path,
            forceJSONP: G.forceJSONP || this.forceJSONP,
            jsonp: G.jsonp || this.jsonp,
            forceBase64: G.forceBase64 || this.forceBase64,
            enablesXDR: G.enablesXDR || this.enablesXDR,
            withCredentials: G.withCredentials || this.withCredentials,
            timestampRequests: G.timestampRequests || this.timestampRequests,
            timestampParam: G.timestampParam || this.timestampParam,
            policyPort: G.policyPort || this.policyPort,
            pfx: G.pfx || this.pfx,
            key: G.key || this.key,
            passphrase: G.passphrase || this.passphrase,
            cert: G.cert || this.cert,
            ca: G.ca || this.ca,
            ciphers: G.ciphers || this.ciphers,
            rejectUnauthorized: G.rejectUnauthorized || this.rejectUnauthorized,
            perMessageDeflate: G.perMessageDeflate || this.perMessageDeflate,
            extraHeaders: G.extraHeaders || this.extraHeaders,
            forceNode: G.forceNode || this.forceNode,
            localAddress: G.localAddress || this.localAddress,
            requestTimeout: G.requestTimeout || this.requestTimeout,
            protocols: G.protocols || void 0,
            isReactNative: this.isReactNative
        });
        return Y
    };

    function K(W) {
        var X = {};
        for (var G in W) W.hasOwnProperty(G) && (X[G] = W[G]);
        return X
    }
    return z.prototype.open = function() {
        var W;
        if (this.rememberUpgrade && z.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) W = "websocket";
        else if (this.transports.length === 0) {
            var X = this;
            setTimeout(function() {
                X.emit("error", "No transports available")
            }, 0);
            return
        } else W = this.transports[0];
        this.readyState = "opening";
        try {
            W = this.createTransport(W)
        } catch {
            this.transports.shift(), this.open();
            return
        }
        W.open(), this.setTransport(W)
    }, z.prototype.setTransport = function(W) {
        M("setting transport %s", W.name);
        var X = this;
        this.transport && (M("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = W, W.on("drain", function() {
            X.onDrain()
        }).on("packet", function(G) {
            X.onPacket(G)
        }).on("error", function(G) {
            X.onError(G)
        }).on("close", function() {
            X.onClose("transport close")
        })
    }, z.prototype.probe = function(W) {
        M('probing transport "%s"', W);
        var X = this.createTransport(W, {
                probe: 1
            }),
            G = !1,
            Y = this;
        z.priorWebsocketSuccess = !1;

        function Z() {
            if (Y.onlyBinaryUpgrades) {
                var re = !this.supportsBinary && Y.transport.supportsBinary;
                G = G || re
            }
            G || (M('probe transport "%s" opened', W), X.send([{
                type: "ping",
                data: "probe"
            }]), X.once("packet", function(oe) {
                if (!G)
                    if (oe.type === "pong" && oe.data === "probe") {
                        if (M('probe transport "%s" pong', W), Y.upgrading = !0, Y.emit("upgrading", X), !X) return;
                        z.priorWebsocketSuccess = X.name === "websocket", M('pausing current transport "%s"', Y.transport.name), Y.transport.pause(function() {
                            G || Y.readyState !== "closed" && (M("changing transport and sending upgrade packet"), ie(), Y.setTransport(X), X.send([{
                                type: "upgrade"
                            }]), Y.emit("upgrade", X), X = null, Y.upgrading = !1, Y.flush())
                        })
                    } else {
                        M('probe transport "%s" failed', W);
                        var ae = new Error("probe error");
                        ae.transport = X.name, Y.emit("upgradeError", ae)
                    }
            }))
        }

        function Q() {
            G || (G = !0, ie(), X.close(), X = null)
        }

        function J(re) {
            var oe = new Error("probe error: " + re);
            oe.transport = X.name, Q(), M('probe transport "%s" failed because of error: %s', W, re), Y.emit("upgradeError", oe)
        }

        function _() {
            J("transport closed")
        }

        function ee() {
            J("socket closed")
        }

        function te(re) {
            X && re.name !== X.name && (M('"%s" works - aborting "%s"', re.name, X.name), Q())
        }

        function ie() {
            X.removeListener("open", Z), X.removeListener("error", J), X.removeListener("close", _), Y.removeListener("close", ee), Y.removeListener("upgrading", te)
        }
        X.once("open", Z), X.once("error", J), X.once("close", _), this.once("close", ee), this.once("upgrading", te), X.open()
    }, z.prototype.onOpen = function() {
        if (M("socket open"), this.readyState = "open", z.priorWebsocketSuccess = this.transport.name === "websocket", this.emit("open"), this.flush(), this.readyState === "open" && this.upgrade && this.transport.pause) {
            M("starting upgrade probes");
            for (var W = 0, X = this.upgrades.length; W < X; W++) this.probe(this.upgrades[W])
        }
    }, z.prototype.onPacket = function(W) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (M('socket receive: type "%s", data "%s"', W.type, W.data), this.emit("packet", W), this.emit("heartbeat"), W.type) {
            case "open":
                this.onHandshake(JSON.parse(W.data));
                break;
            case "pong":
                this.setPing(), this.emit("pong");
                break;
            case "error":
                var X = new Error("server error");
                X.code = W.data, this.onError(X);
                break;
            case "message":
                this.emit("data", W.data), this.emit("message", W.data);
                break
        } else M('packet received with socket readyState "%s"', this.readyState)
    }, z.prototype.onHandshake = function(W) {
        this.emit("handshake", W), this.id = W.sid, this.transport.query.sid = W.sid, this.upgrades = this.filterUpgrades(W.upgrades), this.pingInterval = W.pingInterval, this.pingTimeout = W.pingTimeout, this.onOpen(), this.readyState !== "closed" && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
    }, z.prototype.onHeartbeat = function(W) {
        clearTimeout(this.pingTimeoutTimer);
        var X = this;
        X.pingTimeoutTimer = setTimeout(function() {
            X.readyState !== "closed" && X.onClose("ping timeout")
        }, W || X.pingInterval + X.pingTimeout)
    }, z.prototype.setPing = function() {
        var W = this;
        clearTimeout(W.pingIntervalTimer), W.pingIntervalTimer = setTimeout(function() {
            M("writing ping packet - expecting pong within %sms", W.pingTimeout), W.ping(), W.onHeartbeat(W.pingTimeout)
        }, W.pingInterval)
    }, z.prototype.ping = function() {
        var W = this;
        this.sendPacket("ping", function() {
            W.emit("ping")
        })
    }, z.prototype.onDrain = function() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit("drain") : this.flush()
    }, z.prototype.flush = function() {
        this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (M("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
    }, z.prototype.write = z.prototype.send = function(W, X, G) {
        return this.sendPacket("message", W, X, G), this
    }, z.prototype.sendPacket = function(W, X, G, Y) {
        if (typeof X == "function" && (Y = X, X = void 0), typeof G == "function" && (Y = G, G = null), !(this.readyState === "closing" || this.readyState === "closed")) {
            G = G || {}, G.compress = G.compress !== !1;
            var Z = {
                type: W,
                data: X,
                options: G
            };
            this.emit("packetCreate", Z), this.writeBuffer.push(Z), Y && this.once("flush", Y), this.flush()
        }
    }, z.prototype.close = function() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.readyState = "closing";
            var W = this;
            this.writeBuffer.length ? this.once("drain", function() {
                this.upgrading ? Y() : X()
            }) : this.upgrading ? Y() : X()
        }

        function X() {
            W.onClose("forced close"), M("socket closing - telling transport to close"), W.transport.close()
        }

        function G() {
            W.removeListener("upgrade", G), W.removeListener("upgradeError", G), X()
        }

        function Y() {
            W.once("upgrade", G), W.once("upgradeError", G)
        }
        return this
    }, z.prototype.onError = function(W) {
        M("socket error %j", W), z.priorWebsocketSuccess = !1, this.emit("error", W), this.onClose("transport error", W)
    }, z.prototype.onClose = function(W, X) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            M('socket close with reason: "%s"', W);
            var G = this;
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", W, X), G.writeBuffer = [], G.prevBufferLen = 0
        }
    }, z.prototype.filterUpgrades = function(W) {
        for (var X = [], G = 0, Y = W.length; G < Y; G++) ~I(this.transports, W[G]) && X.push(W[G]);
        return X
    }, socket$1
}
var hasRequiredLib$1;

function requireLib$1() {
    return hasRequiredLib$1 || (hasRequiredLib$1 = 1, lib.exports = requireSocket$1(), lib.exports.parser = requireBrowser$1()), lib.exports
}
var socket = {
        exports: {}
    },
    toArray_1, hasRequiredToArray;

function requireToArray() {
    if (hasRequiredToArray) return toArray_1;
    hasRequiredToArray = 1, toArray_1 = L;

    function L(O, M) {
        var I = [];
        M = M || 0;
        for (var N = M || 0; N < O.length; N++) I[N - M] = O[N];
        return I
    }
    return toArray_1
}
var on_1, hasRequiredOn;

function requireOn() {
    if (hasRequiredOn) return on_1;
    hasRequiredOn = 1, on_1 = L;

    function L(O, M, I) {
        return O.on(M, I), {
            destroy: function() {
                O.removeListener(M, I)
            }
        }
    }
    return on_1
}
var componentBind, hasRequiredComponentBind;

function requireComponentBind() {
    if (hasRequiredComponentBind) return componentBind;
    hasRequiredComponentBind = 1;
    var L = [].slice;
    return componentBind = function(O, M) {
        if (typeof M == "string" && (M = O[M]), typeof M != "function") throw new Error("bind() requires a function");
        var I = L.call(arguments, 2);
        return function() {
            return M.apply(O, I.concat(L.call(arguments)))
        }
    }, componentBind
}
var hasRequiredSocket;

function requireSocket() {
    return hasRequiredSocket || (hasRequiredSocket = 1, function(L, O) {
        var M = requireSocket_ioParser(),
            I = requireComponentEmitter(),
            N = requireToArray(),
            R = requireOn(),
            H = requireComponentBind(),
            z = requireBrowser$3()("socket.io-client:socket"),
            K = requireParseqs(),
            W = requireHasBinary2();
        L.exports = Y;
        var X = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                connecting: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1,
                ping: 1,
                pong: 1
            },
            G = I.prototype.emit;

        function Y(Z, Q, J) {
            this.io = Z, this.nsp = Q, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, J && J.query && (this.query = J.query), this.io.autoConnect && this.open()
        }
        I(Y.prototype), Y.prototype.subEvents = function() {
            if (!this.subs) {
                var Z = this.io;
                this.subs = [R(Z, "open", H(this, "onopen")), R(Z, "packet", H(this, "onpacket")), R(Z, "close", H(this, "onclose"))]
            }
        }, Y.prototype.open = Y.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(), this.io.reconnecting || this.io.open(), this.io.readyState === "open" && this.onopen(), this.emit("connecting"), this)
        }, Y.prototype.send = function() {
            var Z = N(arguments);
            return Z.unshift("message"), this.emit.apply(this, Z), this
        }, Y.prototype.emit = function(Z) {
            if (X.hasOwnProperty(Z)) return G.apply(this, arguments), this;
            var Q = N(arguments),
                J = {
                    type: (this.flags.binary !== void 0 ? this.flags.binary : W(Q)) ? M.BINARY_EVENT : M.EVENT,
                    data: Q
                };
            return J.options = {}, J.options.compress = !this.flags || this.flags.compress !== !1, typeof Q[Q.length - 1] == "function" && (z("emitting packet with ack id %d", this.ids), this.acks[this.ids] = Q.pop(), J.id = this.ids++), this.connected ? this.packet(J) : this.sendBuffer.push(J), this.flags = {}, this
        }, Y.prototype.packet = function(Z) {
            Z.nsp = this.nsp, this.io.packet(Z)
        }, Y.prototype.onopen = function() {
            if (z("transport is open - connecting"), this.nsp !== "/")
                if (this.query) {
                    var Z = typeof this.query == "object" ? K.encode(this.query) : this.query;
                    z("sending connect packet with query %s", Z), this.packet({
                        type: M.CONNECT,
                        query: Z
                    })
                } else this.packet({
                    type: M.CONNECT
                })
        }, Y.prototype.onclose = function(Z) {
            z("close (%s)", Z), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", Z)
        }, Y.prototype.onpacket = function(Z) {
            var Q = Z.nsp === this.nsp,
                J = Z.type === M.ERROR && Z.nsp === "/";
            if (!(!Q && !J)) switch (Z.type) {
                case M.CONNECT:
                    this.onconnect();
                    break;
                case M.EVENT:
                    this.onevent(Z);
                    break;
                case M.BINARY_EVENT:
                    this.onevent(Z);
                    break;
                case M.ACK:
                    this.onack(Z);
                    break;
                case M.BINARY_ACK:
                    this.onack(Z);
                    break;
                case M.DISCONNECT:
                    this.ondisconnect();
                    break;
                case M.ERROR:
                    this.emit("error", Z.data);
                    break
            }
        }, Y.prototype.onevent = function(Z) {
            var Q = Z.data || [];
            z("emitting event %j", Q), Z.id != null && (z("attaching ack callback to event"), Q.push(this.ack(Z.id))), this.connected ? G.apply(this, Q) : this.receiveBuffer.push(Q)
        }, Y.prototype.ack = function(Z) {
            var Q = this,
                J = !1;
            return function() {
                if (!J) {
                    J = !0;
                    var _ = N(arguments);
                    z("sending ack %j", _), Q.packet({
                        type: W(_) ? M.BINARY_ACK : M.ACK,
                        id: Z,
                        data: _
                    })
                }
            }
        }, Y.prototype.onack = function(Z) {
            var Q = this.acks[Z.id];
            typeof Q == "function" ? (z("calling ack %s with %j", Z.id, Z.data), Q.apply(this, Z.data), delete this.acks[Z.id]) : z("bad ack %s", Z.id)
        }, Y.prototype.onconnect = function() {
            this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
        }, Y.prototype.emitBuffered = function() {
            var Z;
            for (Z = 0; Z < this.receiveBuffer.length; Z++) G.apply(this, this.receiveBuffer[Z]);
            for (this.receiveBuffer = [], Z = 0; Z < this.sendBuffer.length; Z++) this.packet(this.sendBuffer[Z]);
            this.sendBuffer = []
        }, Y.prototype.ondisconnect = function() {
            z("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
        }, Y.prototype.destroy = function() {
            if (this.subs) {
                for (var Z = 0; Z < this.subs.length; Z++) this.subs[Z].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }, Y.prototype.close = Y.prototype.disconnect = function() {
            return this.connected && (z("performing disconnect (%s)", this.nsp), this.packet({
                type: M.DISCONNECT
            })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
        }, Y.prototype.compress = function(Z) {
            return this.flags.compress = Z, this
        }, Y.prototype.binary = function(Z) {
            return this.flags.binary = Z, this
        }
    }(socket)), socket.exports
}
var backo2, hasRequiredBacko2;

function requireBacko2() {
    if (hasRequiredBacko2) return backo2;
    hasRequiredBacko2 = 1, backo2 = L;

    function L(O) {
        O = O || {}, this.ms = O.min || 100, this.max = O.max || 1e4, this.factor = O.factor || 2, this.jitter = O.jitter > 0 && O.jitter <= 1 ? O.jitter : 0, this.attempts = 0
    }
    return L.prototype.duration = function() {
        var O = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var M = Math.random(),
                I = Math.floor(M * this.jitter * O);
            O = Math.floor(M * 10) & 1 ? O + I : O - I
        }
        return Math.min(O, this.max) | 0
    }, L.prototype.reset = function() {
        this.attempts = 0
    }, L.prototype.setMin = function(O) {
        this.ms = O
    }, L.prototype.setMax = function(O) {
        this.max = O
    }, L.prototype.setJitter = function(O) {
        this.jitter = O
    }, backo2
}
var manager$1, hasRequiredManager;

function requireManager() {
    if (hasRequiredManager) return manager$1;
    hasRequiredManager = 1;
    var L = requireLib$1(),
        O = requireSocket(),
        M = requireComponentEmitter(),
        I = requireSocket_ioParser(),
        N = requireOn(),
        R = requireComponentBind(),
        H = requireBrowser$3()("socket.io-client:manager"),
        z = requireIndexof(),
        K = requireBacko2(),
        W = Object.prototype.hasOwnProperty;
    manager$1 = X;

    function X(G, Y) {
        if (!(this instanceof X)) return new X(G, Y);
        G && typeof G == "object" && (Y = G, G = void 0), Y = Y || {}, Y.path = Y.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = Y, this.reconnection(Y.reconnection !== !1), this.reconnectionAttempts(Y.reconnectionAttempts || 1 / 0), this.reconnectionDelay(Y.reconnectionDelay || 1e3), this.reconnectionDelayMax(Y.reconnectionDelayMax || 5e3), this.randomizationFactor(Y.randomizationFactor || .5), this.backoff = new K({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(Y.timeout == null ? 2e4 : Y.timeout), this.readyState = "closed", this.uri = G, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var Z = Y.parser || I;
        this.encoder = new Z.Encoder, this.decoder = new Z.Decoder, this.autoConnect = Y.autoConnect !== !1, this.autoConnect && this.open()
    }
    return X.prototype.emitAll = function() {
        this.emit.apply(this, arguments);
        for (var G in this.nsps) W.call(this.nsps, G) && this.nsps[G].emit.apply(this.nsps[G], arguments)
    }, X.prototype.updateSocketIds = function() {
        for (var G in this.nsps) W.call(this.nsps, G) && (this.nsps[G].id = this.generateId(G))
    }, X.prototype.generateId = function(G) {
        return (G === "/" ? "" : G + "#") + this.engine.id
    }, M(X.prototype), X.prototype.reconnection = function(G) {
        return arguments.length ? (this._reconnection = !!G, this) : this._reconnection
    }, X.prototype.reconnectionAttempts = function(G) {
        return arguments.length ? (this._reconnectionAttempts = G, this) : this._reconnectionAttempts
    }, X.prototype.reconnectionDelay = function(G) {
        return arguments.length ? (this._reconnectionDelay = G, this.backoff && this.backoff.setMin(G), this) : this._reconnectionDelay
    }, X.prototype.randomizationFactor = function(G) {
        return arguments.length ? (this._randomizationFactor = G, this.backoff && this.backoff.setJitter(G), this) : this._randomizationFactor
    }, X.prototype.reconnectionDelayMax = function(G) {
        return arguments.length ? (this._reconnectionDelayMax = G, this.backoff && this.backoff.setMax(G), this) : this._reconnectionDelayMax
    }, X.prototype.timeout = function(G) {
        return arguments.length ? (this._timeout = G, this) : this._timeout
    }, X.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }, X.prototype.open = X.prototype.connect = function(G, Y) {
        if (H("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
        H("opening %s", this.uri), this.engine = L(this.uri, this.opts);
        var Z = this.engine,
            Q = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var J = N(Z, "open", function() {
                Q.onopen(), G && G()
            }),
            _ = N(Z, "error", function(ie) {
                if (H("connect_error"), Q.cleanup(), Q.readyState = "closed", Q.emitAll("connect_error", ie), G) {
                    var re = new Error("Connection error");
                    re.data = ie, G(re)
                } else Q.maybeReconnectOnOpen()
            });
        if (this._timeout !== !1) {
            var ee = this._timeout;
            H("connect attempt will timeout after %d", ee), ee === 0 && J.destroy();
            var te = setTimeout(function() {
                H("connect attempt timed out after %d", ee), J.destroy(), Z.close(), Z.emit("error", "timeout"), Q.emitAll("connect_timeout", ee)
            }, ee);
            this.subs.push({
                destroy: function() {
                    clearTimeout(te)
                }
            })
        }
        return this.subs.push(J), this.subs.push(_), this
    }, X.prototype.onopen = function() {
        H("open"), this.cleanup(), this.readyState = "open", this.emit("open");
        var G = this.engine;
        this.subs.push(N(G, "data", R(this, "ondata"))), this.subs.push(N(G, "ping", R(this, "onping"))), this.subs.push(N(G, "pong", R(this, "onpong"))), this.subs.push(N(G, "error", R(this, "onerror"))), this.subs.push(N(G, "close", R(this, "onclose"))), this.subs.push(N(this.decoder, "decoded", R(this, "ondecoded")))
    }, X.prototype.onping = function() {
        this.lastPing = new Date, this.emitAll("ping")
    }, X.prototype.onpong = function() {
        this.emitAll("pong", new Date - this.lastPing)
    }, X.prototype.ondata = function(G) {
        this.decoder.add(G)
    }, X.prototype.ondecoded = function(G) {
        this.emit("packet", G)
    }, X.prototype.onerror = function(G) {
        H("error", G), this.emitAll("error", G)
    }, X.prototype.socket = function(G, Y) {
        var Z = this.nsps[G];
        if (!Z) {
            Z = new O(this, G, Y), this.nsps[G] = Z;
            var Q = this;
            Z.on("connecting", J), Z.on("connect", function() {
                Z.id = Q.generateId(G)
            }), this.autoConnect && J()
        }

        function J() {
            ~z(Q.connecting, Z) || Q.connecting.push(Z)
        }
        return Z
    }, X.prototype.destroy = function(G) {
        var Y = z(this.connecting, G);
        ~Y && this.connecting.splice(Y, 1), !this.connecting.length && this.close()
    }, X.prototype.packet = function(G) {
        H("writing packet %j", G);
        var Y = this;
        G.query && G.type === 0 && (G.nsp += "?" + G.query), Y.encoding ? Y.packetBuffer.push(G) : (Y.encoding = !0, this.encoder.encode(G, function(Z) {
            for (var Q = 0; Q < Z.length; Q++) Y.engine.write(Z[Q], G.options);
            Y.encoding = !1, Y.processPacketQueue()
        }))
    }, X.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var G = this.packetBuffer.shift();
            this.packet(G)
        }
    }, X.prototype.cleanup = function() {
        H("cleanup");
        for (var G = this.subs.length, Y = 0; Y < G; Y++) {
            var Z = this.subs.shift();
            Z.destroy()
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, X.prototype.close = X.prototype.disconnect = function() {
        H("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, this.readyState === "opening" && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, X.prototype.onclose = function(G) {
        H("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", G), this._reconnection && !this.skipReconnect && this.reconnect()
    }, X.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect) return this;
        var G = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) H("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        else {
            var Y = this.backoff.duration();
            H("will wait %dms before reconnect attempt", Y), this.reconnecting = !0;
            var Z = setTimeout(function() {
                G.skipReconnect || (H("attempting reconnect"), G.emitAll("reconnect_attempt", G.backoff.attempts), G.emitAll("reconnecting", G.backoff.attempts), !G.skipReconnect && G.open(function(Q) {
                    Q ? (H("reconnect attempt error"), G.reconnecting = !1, G.reconnect(), G.emitAll("reconnect_error", Q.data)) : (H("reconnect success"), G.onreconnect())
                }))
            }, Y);
            this.subs.push({
                destroy: function() {
                    clearTimeout(Z)
                }
            })
        }
    }, X.prototype.onreconnect = function() {
        var G = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", G)
    }, manager$1
}
var hasRequiredLib;

function requireLib() {
    return hasRequiredLib || (hasRequiredLib = 1, function(L, O) {
        var M = requireUrl(),
            I = requireSocket_ioParser(),
            N = requireManager(),
            R = requireBrowser$3()("socket.io-client");
        L.exports = O = z;
        var H = O.managers = {};

        function z(K, W) {
            typeof K == "object" && (W = K, K = void 0), W = W || {};
            var X = M(K),
                G = X.source,
                Y = X.id,
                Z = X.path,
                Q = H[Y] && Z in H[Y].nsps,
                J = W.forceNew || W["force new connection"] || W.multiplex === !1 || Q,
                _;
            return J ? (R("ignoring socket cache for %s", G), _ = N(G, W)) : (H[Y] || (R("new io instance for %s", G), H[Y] = N(G, W)), _ = H[Y]), X.query && !W.query && (W.query = X.query), _.socket(X.path, W)
        }
        O.protocol = I.protocol, O.connect = z, O.Manager = requireManager(), O.Socket = requireSocket()
    }(lib$1, lib$1.exports)), lib$1.exports
}
var libExports = requireLib(),
    D = Object.defineProperty,
    S = (L, O, M) => O in L ? D(L, O, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: M
    }) : L[O] = M,
    a$1 = (L, O, M) => (S(L, typeof O != "symbol" ? O + "" : O, M), M);
const w = new TextEncoder,
    p$1 = new TextDecoder;
class $ {
    encode(O, M) {
        let I, N, R;
        O.type === 2 ? (I = O.data[0], N = O.data[1]) : (I = "", N = new ArrayBuffer(0)), R = O.id === void 0 ? -1 : O.id;
        let H = {
            type: O.type,
            namespace: O.nsp,
            event: I,
            data: N,
            ackId: R
        };
        return M([q(H)])
    }
}
let x$1 = class extends A$1 {
    add(L) {
        let O = E(L);
        if (O.type === 5 && (O.type = 2), O.type === 6 && (O.type = 3), O.type === 1) return;
        let M = {
            type: O.type,
            data: O.type === 3 ? [O.data] : [O.event, O.data],
            nsp: O.namespace,
            id: O.ackId
        };
        this.emit("decoded", M)
    }
    destroy() {}
};

function q(L) {
    let O, M, I = L.type,
        N = [];
    if (L.ackId !== -1) {
        I += 128, N.push(Uint8Array.of(I));
        let R = new Uint8Array(4);
        new DataView(R.buffer).setUint32(0, L.ackId), N.push(R)
    } else N.push(Uint8Array.of(I));
    return M = w.encode(L.namespace), N.push(Uint8Array.of(M.length)), N.push(M), O = w.encode(L.event), N.push(Uint8Array.of(O.length)), N.push(O), N.push(new Uint8Array(L.data)), k$1(Uint8Array, ...N).buffer
}

function E(L) {
    let O = 0,
        M, I = -1,
        N, R, H, z;
    const K = new DataView(L, 0);
    return M = K.getUint8(O), O++, M >= 128 && (M %= 128, I = K.getUint32(O), O += 4), z = K.getUint8(O), O++, N = new Uint8Array(L, O, z), O += z, z = K.getUint8(O), O++, R = new Uint8Array(L, O, z), O += z, H = L.slice(O), {
        type: M,
        data: H,
        namespace: p$1.decode(N),
        event: p$1.decode(R),
        ackId: I
    }
}
const k$1 = (L, ...O) => {
        let M = 0;
        for (let R of O) M += R.length;
        let I = new L(M),
            N = 0;
        for (let R of O) I.set(R, N), N += R.length;
        return I
    },
    j = Object.freeze(Object.defineProperty({
        __proto__: null,
        Decoder: x$1,
        Encoder: $,
        concatenate: k$1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    y$1 = d$1.Reader,
    v$1 = d$1.Writer,
    B = d$1.util,
    g$1 = d$1.roots.default || (d$1.roots.default = {}),
    C = g$1.ResultObj = (() => {
        function L(O) {
            if (O)
                for (let M = Object.keys(O), I = 0; I < M.length; ++I) O[M[I]] != null && (this[M[I]] = O[M[I]])
        }
        return L.prototype.code = 0, L.prototype.msg = "", L.prototype.data = B.newBuffer([]), L.encode = function(O, M) {
            return M || (M = v$1.create()), O.code != null && Object.hasOwnProperty.call(O, "code") && M.uint32(8).sint32(O.code), O.msg != null && Object.hasOwnProperty.call(O, "msg") && M.uint32(18).string(O.msg), O.data != null && Object.hasOwnProperty.call(O, "data") && M.uint32(26).bytes(O.data), M
        }, L.decode = function(O, M) {
            O instanceof y$1 || (O = y$1.create(O));
            let I = M === void 0 ? O.len : O.pos + M,
                N = new g$1.ResultObj;
            for (; O.pos < I;) {
                let R = O.uint32();
                switch (R >>> 3) {
                    case 1:
                        N.code = O.sint32();
                        break;
                    case 2:
                        N.msg = O.string();
                        break;
                    case 3:
                        N.data = O.bytes();
                        break;
                    default:
                        O.skipType(R & 7);
                        break
                }
            }
            return N
        }, L
    })(),
    T = () => __vitePreload(() =>
        import ("./wr_utils.dist-DvgtdgCy-CUXsbV0Z.js"), []).then(L => L.default),
    V = typeof window > "u",
    f$1 = class wt extends libExports.Manager {
        constructor({
            uris: O
        }, M = wt.socketOptions) {
            super(O[0].socket, M), a$1(this, "afterRequest", []), a$1(this, "uris"), a$1(this, "isConnecting", !1), a$1(this, "enableSocketConnect", () => {}), a$1(this, "waitSocketConnect", new Promise(I => this.enableSocketConnect = I)), a$1(this, "latency", 0), a$1(this, "socketRequestBind", I => (N, R) => new Promise((H, z) => {
                const K = setTimeout(() => z(new Error(`${I.nsp}/${N}:Socket time out`)), 2e4);
                I.emit(N, R, this.decodeBind(W => {
                    clearTimeout(K);
                    try {
                        for (let X = 0, G = this.afterRequest.length; X < G; X++) this.afterRequest[X](W);
                        W.code === 0 ? H(W.data) : (console.log(`Socket Error: ${I.nsp}:${N}
${JSON.stringify(R)}`), z(new P(W.msg, W.code)))
                    } catch (X) {
                        z(X)
                    }
                }, C))
            })), this.uris = O, this.once("pong", I => {
                let N = I;
                this.on("pong", R => {
                    N = .2 * R + .8 * N, this.latency = N
                })
            })
        }
        open(O) {
            V || this.isConnecting || ~this.readyState.indexOf("open") || (this.isConnecting = !0, this.openWithSign().finally(() => {
                super.open(O), this.isConnecting = !1
            }))
        }
        async openWithSign() {
            try {
                const {
                    sign: O,
                    uri: M,
                    source: I
                } = await this.getSignData();
                await this.waitSocketConnect, this.opts.query = { ...this.opts.query,
                    p: O,
                    t: I
                }, this.uri = M.socket
            } catch {}
        }
        async testSocketRoute(O, M = "") {
            const {
                socket: I,
                test: N = I
            } = O, R = `${N}/test/${M?"?p="+M:""}`, H = await fetch(R, {
                credentials: "include"
            }).then(z => z.text());
            return {
                uri: O,
                sign: H
            }
        }
        async getSignData() {
            const {
                t1: O,
                t2: M
            } = await T(), I = window.navigator.userAgent.trim(), N = O(I);
            let {
                uri: R,
                sign: H
            } = await Promise.race(this.uris.map(z => this.testSocketRoute(z, N)));
            return {
                sign: M(H, I),
                uri: R,
                source: H
            }
        }
        socket(O) {
            const M = super.socket(O);
            return M.request = this.socketRequestBind(M), M
        }
        addAfterRequest(O) {
            this.afterRequest.push(O)
        }
        decode(O = "utf8") {
            return M => {
                let I;
                if (O === "utf8") I = b$1.decode(M);
                else if (O === "json") I = JSON.parse(b$1.decode(M));
                else if (O === "int8") I = new DataView(M).getUint8(0);
                else if (O === "int32") I = new DataView(M).getUint32(0);
                else if (O === "int64") {
                    let N = new DataView(M);
                    I = new Long(N.getUint32(4), N.getUint32(0)).toNumber()
                } else I = O.decode(new Uint8Array(M));
                return I
            }
        }
        encode(O = "utf8") {
            return M => {
                if (O === "utf8") return U.encode(M);
                if (O === "json") return U.encode(JSON.stringify(M));
                if (O === "int8") return Uint8Array.of(M);
                if (O === "int32") {
                    let I = new Uint8Array(4);
                    return new DataView(I.buffer).setUint32(0, M), I
                } else if (O === "int64") {
                    let I = Long.fromNumber(M),
                        N = new Uint8Array(8),
                        R = new DataView(N.buffer);
                    return R.setUint32(0, I.high), R.setUint32(4, I.low), N
                } else return O.encode(new O(M)).finish()
            }
        }
        decodeBind(O, M = "utf8") {
            const I = this.decode(M);
            return N => O(I(N))
        }
    };
a$1(f$1, "socketOptions", {
    timeout: 2e4,
    reconnectionDelayMax: 1e4,
    transports: ["websocket"],
    autoConnect: !1,
    parser: j,
    query: {}
});
let m$1 = f$1;
const U = new TextEncoder,
    b$1 = new TextDecoder;
class P extends Error {
    constructor(O, M = 0) {
        super(O), a$1(this, "code"), this.code = M
    }
}
const F = () => __vitePreload(() =>
    import ("./wr_utils.dist-DvgtdgCy-CUXsbV0Z.js"), []).then(L => L.default);
let httpReject;

function registHttpReject(L) {
    httpReject = L
}
let http;

function getHttp() {
    return http || (http = axios.create({
        baseURL: "/api"
    }), http.interceptors.request.use(L => (L.cache && (L.baseURL = "/cache", delete L.cache), L.headers = L.headers || {}, L), L => Promise.reject(String(L) + ":REQ!")), http.interceptors.response.use(L => {
        const O = L.data;
        return O.code === 0 ? O.data : ((O.code === 403 || O.code === "403") && window.location.reload(), Promise.reject(new HttpResponseError(O.msg, O.code, O)))
    }, L => L && L.response ? Promise.reject(new ErrorWithTip("Oops!We lost your network, Please have a check!" + L.response.status + L.config.url)) : Promise.reject(new ErrorWithTip("Network error!"))), http.interceptors.response.use(L => L, async L => (httpReject && await httpReject(L), Promise.reject(L)))), http
}
class ErrorWithTip extends Error {
    constructor(O, M) {
        super(O), be(this, "tip"), this.tip = M
    }
}
class HttpResponseError extends Error {
    constructor(O, M, I) {
        super(O), this.code = M, this.response = I
    }
}

function getSocketUri() {
    const {
        protocol: L,
        hostname: O
    } = location;
    if (L === "http:" && ["dev", "localhost", "192"].find(M => O.startsWith(M))) return [{
        socket: `${origin}`,
        test: `${origin}/socketapi`
    }]; {
        const M = O.match(/[^\.]+\.\w+$/);
        return [{
            socket: `${L}//socketv4.${M}`
        }]
    }
}

function addUserReceiptEvent(L, O) {
    const M = getSocket().decodeBind(N => {
            msgReceipt(N) || O(N)
        }, "json"),
        I = getSocket("/user");
    return I.on(L, M), () => I.off(L, M)
}
const msgDict = new Set;

function msgReceipt({
    msgId: L
}) {
    return L ? msgDict.has(L) ? !0 : (getHttp().post("/user/userNotification/received/", {
        msgId: L
    }), msgDict.add(L), !1) : !1
}
let manager = null;

function getSocket(L) {
    return manager || (manager = new m$1({
        uris: getSocketUri()
    })), L === void 0 ? manager : manager.socket(L)
}
const {
    on,
    emit
} = createRoot(() => createEmitter()), app = {
    on,
    emit,
    promisify(L) {
        return (...O) => new Promise(M => {
            emit(L, ...O, I => M(I))
        })
    }
};
app.promisify("get_twostep");

function createPersistedStore(L, O) {
    const M = murmurHash(JSON.stringify(L)).toString(36),
        I = localStorage,
        N = O.name;

    function R() {
        let K = I.getItem(N);
        if (K = K && K.indexOf(M) === -1 ? null : K, !K) return {};
        try {
            return (O.deserialize || JSON.parse)(K)
        } catch {
            return {}
        }
    }
    const H = R(),
        z = createStore({ ...L,
            __version: M,
            ...H
        });
    return createComputed(() => {
        I.setItem(N, JSON.stringify(z[0]))
    }), z
}
const [setting, setSetting] = createRoot(() => {
    const [L, O] = createPersistedStore({
        lang: "en",
        darken: !0,
        theme: "dark",
        firstVisit: !0,
        preVisitTime: 0
    }, {
        name: "setting"
    });
    return createComputed(() => O("darken", L.theme !== "light")), L.preVisitTime === 0 ? O("preVisitTime", Date.now()) : O("firstVisit", !1), createEffect(() => {
        const M = getSocket(),
            I = M.opts.query;
        M.opts.query = { ...I,
            "Accept-Language": L.lang
        }
    }), [L, O]
});
let remoteSetting = "";
async function getSetting() {
    await new Promise(I => setTimeout(I, 1e3));
    const L = await preAccountReq,
        O = L.login;
    async function M() {
        const I = await preWalletReq;
        return getValidCurrency(I, L)
    }
    if (O) {
        const I = await getHttp().get("/account/setting/ns_user/get/");
        if (I) try {
            const N = JSON.parse(I);
            remoteSetting = JSON.stringify(N);
            const R = await preAccountReq,
                H = await preWalletReq;
            let z = N.currencyName;
            H.find(W => W.currencyName === z) || (z = getValidCurrency(H, R).currencyName), N.currencyName = z;
            const K = getHostInfo();
            return K && (N.localeCurrencyName = K, N.enableLocaleCurrency = !0), N
        } catch {
            return M()
        } else return M()
    } else return M()
}

function getValidCurrency(L, O) {
    const M = O.bonusCurrencyName,
        I = L.reduce((W, X) => (W[X.currencyName] = X, W), {});
    let N = !1,
        R = L.sort((W, X) => Number(X.amount.sub(W.amount)))[0].currencyName,
        H = "USDFIAT";
    const z = env.localCurrencyConfig.find(W => W[2] === O.areaCode);
    M === "BCD" && I.USDT && I.USDT.display ? R = "USDT" : I[M] && (R = M), M.endsWith("FIAT") ? (H = M, N = !0) : z && (H = z[0] + "FIAT", N = !0, !I[M] && I[H] && (R = H));
    const K = L.find(W => W.display && W.currencyName.endsWith("FIAT"));
    return K && (R = K.currencyName, H = R, N = !0), {
        currencyName: R,
        localeCurrencyName: H,
        enableLocaleCurrency: N
    }
}

function getHostInfo() {
    const {
        isNgHost: L,
        isNg2Host: O,
        isIdHost: M,
        isKenyaHost: I,
        isBrAuditHost: N,
        isBrHost: R,
        isMxHost: H
    } = getHostType(env.host);
    let z = "";
    return (L || O) && (z = "NGNFIAT"), M && (z = "INRFIAT"), I && (z = "KESFIAT"), (N || R) && (z = "BRLFIAT"), H && (z = "MXNFIAT"), z
}
async function saveSetting(L) {
    if (!(remoteSetting && L === remoteSetting || (remoteSetting = L, !preAccountReq) || !(await preAccountReq).login)) return getHttp().post("/account/setting/ns_user/reset/", JSON.parse(L))
}
let preWalletReq = null;
async function getWallet() {
    const L = getHttp().get("/user/amount/");
    return preWalletReq = L, preAccountReq && await preAccountReq, L
}
let preAccountReq = null;
async function getAccount() {
    getHttp().defaults.headers.common["Accept-Language"] = setting.lang;
    const L = getHttp().get("/account/get/");
    preAccountReq = L;
    const O = await L;
    return O.chatRoomPermission || delete O.chatRoomPermission, O
}
const defaultChatRoomPermission = {
        blockable: !1,
        deleteable: !1,
        vipable: !1,
        blockLevel: 0
    },
    Host_INIT = () => {
        const {
            isMxHost: L
        } = getHostType(env.host);
        return L ? {
            enableLocaleCurrency: !0,
            localeCurrencyName: "MXNFIAT"
        } : {}
    },
    initData = {
        name: "",
        avatar: "",
        userAvatarFrameList: [],
        userId: 0,
        uniqueUid: 0,
        uid: 0,
        createTime: 0,
        kyc: 1,
        gameable: !0,
        login: !1,
        email: "",
        loginSource: "",
        open: 0,
        bonusCurrencyName: "",
        avatarUpdateTime: 0,
        vipLevel: 0,
        currXP: 0,
        levelEndXP: 0,
        levelStartXP: 0,
        safePwd: !1,
        google2StepAuth: !1,
        hasPhone: !1,
        chatRoomPermission: defaultChatRoomPermission,
        emailVerified: !1,
        channel: "",
        currentInvitationCode: "",
        areaCode: "",
        showable: !0,
        areaAlert: !1,
        acceptPromotion: !0,
        passwordExist: !1,
        invitationUrl: "",
        serverTimestemp: 0,
        ip: "",
        rayId: "",
        passkeyHasSet: !1,
        appChannelId: 0,
        setting: {
            currencyFullName: !1,
            localeCurrencyName: "USDFIAT",
            enableLocaleCurrency: !1,
            currencyName: "BTC",
            currencyBonusType: "",
            hideSmallCurrency: !1,
            lastFiatCurrency: "",
            lastCryptoCurrency: "",
            lastNftCurrency: "",
            soundEffectEnable: !0,
            maxbetAlert: !0,
            allowRechargeSuccessEmail: 1,
            allowWithdrawSuccessEmail: 1,
            lang: "en",
            ...Host_INIT()
        },
        redDot: {
            systemNotice: 0,
            gameComment: 0
        }
    },
    [account, setAccount, accountInit] = createRoot(() => {
        const [L, O] = createSignal(!1), [M, I] = createPersistedStore(initData, {
            name: "account"
        });
        syncAccount().then(() => {
            N.connect(), getSocket("/game-support").connect(), getSocket().enableSocketConnect(), O(!0)
        }).catch(() => {}), createTimer(() => syncAccount().catch(() => {}), 3e5, setInterval);
        const N = getSocket("/user");
        return createEffect(() => {
            M.areaCode === "KR" && setting.firstVisit && setSetting("theme", "light")
        }), createEffect(() => {
            M.login && untrack(() => {
                N.emit("user-login"), getSetting().then(R => {
                    (!R.lang || R.lang !== setting.lang) && (R.lang = setting.lang), I("setting", R)
                }).catch(R => {})
            })
        }), createEffect(R => {
            const H = JSON.stringify(M.setting);
            return R && saveSetting(H), H
        }), [M, I, L]
    });
async function syncAccount() {
    const L = await getAccount();
    setEnv("timeDiff", Date.now() - (L.serverTimestemp || Date.now())), setAccount(L)
}
async function untilLogin() {
    return until(() => account.login)
}

function useLoginCallback(L, O = "#/login") {
    return (...M) => {
        if (!account.login) {
            useNavigate$1()(O);
            return
        }
        return L(...M)
    }
}

function authGuard(L) {
    return !account.login && `/login/signin?redirect=${encodeURIComponent(L.pathname+L.search)}`
}
const MAX_EXP = 3e9;

function useResource(L, O, M = {}) {
    var I, N;
    const {
        lazy: R,
        version: H,
        initialValue: z,
        expires: K = defaultTime,
        lockLocal: W,
        serialize: X,
        deserialize: G
    } = M, [Y, Z] = createSignal(!1), Q = createMemo(() => {
        const re = L();
        if (!re) return re;
        const oe = JSON.stringify(re);
        let ae = RefCache.cache.get(oe);
        return ae || (ae = new RefCache(oe, z, H, W, X, G), RefCache.cache.set(oe, ae)), [re, ae]
    }), J = createMemo(() => {
        var re;
        return (re = Q()) == null ? void 0 : re[1]
    }), _ = createSignal((N = (I = J()) == null ? void 0 : I.get(!0)) == null ? void 0 : N.data);
    createComputed(() => {
        const re = J();
        re && onCleanup(re.ref(_[1], R))
    });
    const [ee, {
        mutate: te,
        refetch: ie
    }] = createResource(Q, ([re, oe], ae) => {
        function ne() {
            var me;
            return (me = oe.get(!0)) == null ? void 0 : me.data
        }

        function se() {
            function me() {
                const ce = oe.get();
                if (ce && ce.ver === H) return ce.data
            }
            if (!ae.refetching) {
                if (oe.pending) return oe.pending.then(() => me() || le());
                const ce = me();
                if (ce) return ce
            }

            function le() {
                const ce = de();
                return Z(!0), oe.set(ce).then(() => (Z(!1), ne()))
            }

            function pe(ce) {
                return Math.min(ce, MAX_EXP)
            }
            async function de() {
                const ce = {
                        data: await O(re, ae),
                        ver: H
                    },
                    fe = pe(K),
                    ue = Date.now();
                return ce.ts = ue + fe, ce
            }
            return le()
        }
        const he = se();
        if (he instanceof Promise) {
            const me = ne();
            return me ? (he.then(le => oe.update(le)), ae.refetching ? he : me) : he
        } else return he
    }, {
        initialValue: z,
        storage: re => _
    });
    return [ee, {
        mutate: te,
        refetch: ie,
        pending: createMemo(() => ee.loading || Y())
    }]
}
const defaultTime = 3e5,
    prefix = "__rc-",
    defaultSerialize = L => L,
    Oe = class Qe {
        constructor(O, M, I, N = !1, R = defaultSerialize, H = defaultSerialize) {
            be(this, "data"), be(this, "count", 0), be(this, "die", !1), be(this, "lock"), be(this, "lockLocal"), be(this, "pending"), be(this, "timer", -1), be(this, "storage", []), be(this, "hash"), be(this, "serialize"), be(this, "deserialize"), this.key = O, this.hash = I ? `${prefix}${murmurHash(O).toString(16)}` : "", this.lockLocal = N, this.serialize = R, this.deserialize = H;
            const z = M ? {
                    data: M,
                    ver: I,
                    ts: -1
                } : void 0,
                K = I !== void 0 ? this.resotre(I) : void 0;
            this.data = K || z
        }
        update(O) {
            for (const M of this.storage) M(O)
        }
        resotre(O) {
            const M = localStorage.getItem(this.hash);
            if (M) try {
                const I = JSON.parse(M);
                I.data = this.deserialize(I.data);
                const N = Date.now();
                if (I.ts > N && I.ver === O) return I.ts = N, I;
                localStorage.removeItem(this.hash)
            } catch {}
        }
        ref(O, M = !1) {
            return M && this.count++, this.storage.push(O), () => {
                const I = this.storage.indexOf(O);
                M && (this.count--, this.storage.splice(I, 1), this.count === 0 && (this.lock = void 0, this.die && Qe.delete(this.key)))
            }
        }
        get(O = !1) {
            const M = this.lock || this.data;
            if (M) {
                const I = Date.now();
                if (O || M.ts > I) return M
            }
        }
        async set(O) {
            var M;
            this.pending = O;
            try {
                const I = await O;
                this.count > 0 && (this.lock = this.lock || (((M = this.data) == null ? void 0 : M.ts) !== -1 ? this.data : I) || I, this.lock.ts = I.ts), this.data = I;
                const N = Date.now(),
                    R = I.ts - N;
                I.ver !== void 0 && localStorage.setItem(this.hash, JSON.stringify({ ...I,
                    data: this.serialize(I.data),
                    ts: this.lockLocal ? MAX_EXP + N : I.ts
                })), this.timer > 0 && clearTimeout(this.timer), R < 1e8 && (this.timer = setTimeout(() => {
                    this.die = !0, Qe.delete(this.key)
                }, R))
            } finally {
                this.pending = void 0
            }
        }
        invalidate() {
            this.data = this.lock = this.pending = void 0
        }
        static get(O) {
            let M = Qe.cache.get(O);
            return M || (M = new Qe(O), Qe.cache.set(O, M)), M
        }
        static delete(O) {
            var M;
            const I = Qe.cache.get(O);
            I && (I.count === 0 && Qe.cache.delete(O), !I.lockLocal && ((M = I.get()) == null ? void 0 : M.ver) !== 0 && localStorage.removeItem(I.hash))
        }
        static clear() {
            for (let O = 0; O < localStorage.length; O++) {
                const M = localStorage.key(O);
                if (M.startsWith(prefix)) {
                    const I = localStorage.getItem(M);
                    try {
                        if (I && JSON.parse(I).ts > Date.now()) break
                    } catch {}
                    localStorage.removeItem(M)
                }
            }
        }
    };
be(Oe, "cache", new Map);
let RefCache = Oe;
RefCache.clear();
const [system, usdPrice] = createRoot(() => {
    localStorage.removeItem("system");
    const [L] = useResource(() => ["/game/support/system/conf/index/minimal"], async ([M], {
        value: I
    }) => {
        const N = await getHttp().get(M, {
            cache: !0
        });
        return N.currency = N.currencyV2.reduce((R, H) => (R[H.currencyName] = H, R), {}), delete N.currencyV2, JSON.stringify(N) === JSON.stringify(I) ? I : N
    }, {
        expires: 3e5,
        version: 1,
        lockLocal: !0,
        initialValue: {
            license: "bcall",
            currency: {},
            gameSockets: [],
            gameChannels: []
        }
    }), [O] = useResource(() => ["game/support/system/conf/usdPrice"], async ([M]) => {
        const I = await getHttp().get(M);
        return I.USD = "1", I.USDFIAT = "1", formatDecimal(I)
    }, {
        expires: 6e5,
        lockLocal: !0,
        deserialize: formatDecimal,
        initialValue: {}
    });
    return [new Proxy({}, {
        get(M, I) {
            return L()[I]
        }
    }), O]
});

function formatDecimal(L) {
    return Object.fromEntries(Object.entries(L).map(O => (O[1] = new Decimal$1(O[1]), O)))
}
const Decimal0$1 = new Decimal$1(0),
    systemUtils = {
        amount2usd(L, O) {
            return L.mul(this.getUsdPrice(O))
        },
        printCurrency(L, O = "USDFIAT", M) {
            const I = account.setting.enableLocaleCurrency,
                N = typeof M == "number" ? {
                    precision: M
                } : M || {},
                {
                    precision: R = 7,
                    target: H = I ? account.setting.localeCurrencyName : O,
                    hasAlias: z = !0
                } = N,
                K = z ? ` ${systemUtils.getAlias(H)}` : "",
                W = O === H ? L : this.convertCurrency(L, O, H),
                {
                    num: X,
                    exp: G,
                    unit: Y
                } = getExponential(W.toNumber(), R),
                Z = new Decimal$1(X);
            if (H.endsWith("FIAT")) return this.toFiatStr(Z, H, setting.lang) + Y; {
                const Q = G > 1 ? 2 : R;
                let J = "";
                return G > 1 ? J = Z.toFixed(2, Decimal$1.ROUND_DOWN) : X < 1 ? J = clearFloatZero(Z.toFixed(R, Decimal$1.ROUND_DOWN)) : J = clearFloatZero(Z.toPrecision(R + 1, Decimal$1.ROUND_DOWN)), this.getCryptoIntl(Q).format(Number(J)) + (G > 1 ? Y : "") + K
            }
        },
        printAnyCurrency(L, O = "USDFIAT", M = 7, I) {
            return systemUtils.printCurrency(L, O, {
                precision: M,
                target: I
            })
        },
        convertCurrency(L, O, M = "USD") {
            const I = this.getUsdPrice(M) || Decimal0$1;
            return I.eq(0) ? Decimal0$1 : L.mul(this.getUsdPrice(O)).div(I)
        },
        bn2amount(L, O) {
            var M;
            return new Decimal$1(L.toNumber()).div(((M = system.currency[O]) == null ? void 0 : M.unitAmount) || 1)
        },
        getUsdPrice(L) {
            return usdPrice()[L] || Decimal0$1
        },
        getCurrency(L) {
            return system.currency[L]
        },
        getPrecision(L) {
            var O;
            return ((O = system.currency[L]) == null ? void 0 : O.precisionUnit) || 8
        },
        getAlias(L) {
            var O;
            return ((O = system.currency[L]) == null ? void 0 : O.aliasCurrencyName) || L
        },
        getIntl(L, O) {
            var M;
            O = getDefaultLang(O);
            const I = L.replace("FIAT", ""),
                N = (() => {
                    try {
                        return new Intl.NumberFormat(O, {
                            style: "currency",
                            currency: I
                        }), !0
                    } catch {
                        return !1
                    }
                })(),
                R = Intl.NumberFormat(O, {
                    style: "currency",
                    currency: L.replace("FIAT", ""),
                    roundingMode: "trunc"
                }),
                H = N ? ((M = R.formatToParts(0).find(z => z.type === "currency")) == null ? void 0 : M.value) || "$" : L;
            return [R, H]
        },
        getCryptoIntl(L, O) {
            return O = getDefaultLang(O), new Intl.NumberFormat(O, {
                style: "decimal",
                roundingMode: "trunc",
                minimumFractionDigits: 0,
                maximumFractionDigits: L
            })
        },
        getCurrencySymbol(L, O) {
            return O = getDefaultLang(O), this.getIntl(L, O)[1]
        },
        toFiatStr(L, O, M) {
            return M = getDefaultLang(M), O = O.replace(/FIAT$/, ""), this.getIntl(O, M)[0].format(L.toNumber())
        },
        toCryptoStr(L, O) {
            L = L.todp(this.getPrecision(O), Decimal$1.ROUND_DOWN);
            const M = Math.max(L.decimalPlaces(), 2);
            return L.toFixed(M, Decimal$1.ROUND_DOWN)
        }
    };
var ft;
const navigatorLanguage = ((ft = globalThis ? .navigator) == null ? void 0 : ft.language) || "en-US";

function getDefaultLang(L) {
    return L || navigatorLanguage
}
const ErrorCode = {
        NORMAL: 4001,
        TWOFA_ERROR: 4002,
        INSUFFICIENT_BALANCE: 5002,
        SAME_EMAIL: 5801,
        IS_MUTE: 6001,
        NEED_LOGIN: 6002,
        SESSION_ERROR: 6003,
        NEED_VERIFY: 6004,
        IS_BLOCKED: 6005,
        LOCKED_BY_KYC: 6008,
        SELF_EXCLUSION: 6009,
        REMOTE_LOGIN: 6010,
        NEED_EMAIL_AND_BASIC_KYC: 6101,
        NEED_EMAIL_AND_ADVANCED_KYC: 6102,
        NEED_PHONE_AND_BASIC_KYC: 6103,
        NEED_PHONE_AND_ADVANCED_KYC: 6104,
        NEED_EMAIL_OR_PHONE_AND_BASIC_KYC: 6105,
        NEED_EMAIL_OR_PHONE_AND_ADVANCED_KYC: 6106,
        NEED_EMAIL_AND_PHONE_AND_BASIC_KYC: 6107,
        NEED_EMAIL_AND_PHONE_AND_ADVANCED_KYC: 6108,
        NEED_BASIC_KYC: 6109,
        NEED_ADVANCED_KYC: 6110,
        FINAL_REJECT_KYC: 6111,
        NO_RFC_KYC: 6114,
        NEED_RFC_KYC: 6115,
        NOPASS_RFC_KYC: 6116,
        IS_UPDATING: 1999,
        SELF_GAMBLING_LIMITS: 6012
    },
    identityResolveTemplate = L => L;

function translator(L, O = identityResolveTemplate) {
    return (M, ...I) => {
        var N;
        M[0] === "." && (M = M.slice(1));
        const R = (N = L()) == null ? void 0 : N[M];
        switch (typeof R) {
            case "function":
                return R(...I);
            case "string":
                return O(R, I[0]);
            default:
                return R
        }
    }
}
const I18nENV = {
        __ENV_JB__: "freeCoin",
        __ENV_BCD__: "platformCoin",
        __ENV_BCL__: "bcl",
        __ENV_SITE__: "siteName",
        __ENV_HOST__: "host",
        __ENV_COCO__: "mascot"
    },
    resolveTemplate = (L, O) => O ? L.replace(/__(.+?)__/g, (M, I) => String(O[I])) : L;

function isoLang(L) {
    var O;
    return ((O = env.langs[L]) == null ? void 0 : O[1]) ? ? L
}
const i18nInstanceCache = new Map,
    REGS = {
        ids: /<\d>/g,
        id: /\d+/,
        split: /(<\d>.*?<\/\d>|<br\/>)/,
        tag: /<(\d)>(.*?)<\/\d>/
    };

function createI18n(L, O) {
    env.isAPP && (I18nENV.__ENV_HOST__ = "appName");
    const M = createRoot(() => {
        const [I, N] = createSignal(void 0);
        let R;
        createComputed(() => {
            const z = setting.lang;
            let K = loadResource(isoLang(z), L).then(W => {
                R === K && N(W)
            });
            R = K
        });
        const H = translator(I, resolveTemplate);
        return {
            t: (z, K) => H(z, K) || replaceEnv(z),
            Trans: z => {
                const [, K] = splitProps(z, ["options", "i18nKey", "children"]), W = () => H(z.i18nKey, K);
                if (typeof z.children == "string") return W; {
                    const X = children(() => z.children);
                    return createMemo(() => {
                        try {
                            const G = W(),
                                Y = G.match(REGS.ids),
                                Z = X.toArray().filter(J => J instanceof Element);
                            if (!Y || Y.length !== Z.length) return G;
                            const Q = Y.map(J => J.match(REGS.id)[0]).sort();
                            return G.split(REGS.split).filter(Boolean).map(J => {
                                const _ = J.match(REGS.tag);
                                if (!_) return J;
                                const ee = Z[Q.indexOf(_[1])];
                                return ee.textContent = _[2], ee
                            })
                        } catch {
                            return console.log(z.i18nKey), X
                        }
                    })
                }
            }
        }
    });
    return O && i18nInstanceCache.set(O, M), M
}
const defaultT = (L, O) => {
        const M = i18nInstanceCache.get("root");
        return M ? M.t(L, O) : L
    },
    whiteList = new Map;

function registWhiteList(L) {
    for (const O in L) whiteList.set(O, L[O])
}
async function loadResource(L, O) {
    let M = {};
    const I = `${L}/index.json`,
        N = Object.entries(O),
        R = N.find(([H, z]) => H.endsWith(I)) || N.find(([H, z]) => H.endsWith("en-US/index.json"));
    if (!L || !R) M = {};
    else {
        M = await R[1]();
        for (const H in M) M[H] = replaceEnv(M[H]), whiteList.forEach((z, K) => {
            if (M[H].includes(K)) {
                const W = new RegExp(K, "g");
                M[H] = M[H].replace(W, z)
            }
        })
    }
    return M
}

function replaceEnv(L) {
    return L.replace(/__ENV_\w+__/g, O => env[I18nENV[O]].toUpperCase())
}
const $e = class Me {
    constructor(O) {
        be(this, "userId", 0), be(this, "name", ""), be(this, "nameId", ""), be(this, "key", ""), be(this, "isCasino", !1), be(this, "isOnline", !1), be(this, "lastSyncOnlineTime", 0);
        let M = Me.userDict[O.userId];
        return M || (this.userId = O.userId, Me.addCache(this), M = this), O.name === Me.hiddenName || O.name && M.name !== O.name && (M.name = O.name, M.nameId = this.getNameId(M.name), M.key = this.nameId.toLowerCase()), M
    }
    async syncOnlineStatus() {
        const O = Date.now();
        O - this.lastSyncOnlineTime > 36e5 && (this.lastSyncOnlineTime = O)
    }
    getNameId(O = "") {
        O = O.replace(/\s(\w?)/, (N, R) => R.toUpperCase());
        let M = O.toLowerCase(),
            I = 1;
        for (; Me.keyDict[M];) O = O + I, M = O.toLowerCase(), I++;
        return O
    }
    static search(O) {
        return O = O.toLowerCase(), Me.userList.filter(M => M.userId !== 0 && M.name && M.key.indexOf(O) !== -1)
    }
    static findByName(O) {
        return Me.userList.find(M => M.userId !== 0 && M.name === O)
    }
    static findByKey(O) {
        return O = O.toLowerCase(), Me.userList.find(M => M.userId !== 0 && M.key === O)
    }
    static isFirend(O) {
        return Me.firendDict[O]
    }
    static addCache(O) {
        if (Me.userDict[O.userId] = O, Me.userList.push(O), Me.keyDict[O.nameId] = O, Me.userList.length > Me.MAX) {
            const M = Me.userList.shift();
            if (M === void 0) return;
            delete Me.userDict[M.userId], delete Me.keyDict[M.nameId]
        }
    }
    static syncOnline(O) {
        const M = O.map(I => I.userId);
        getHttp().post("/account/online/status/", {
            userIds: M
        }).then(I => {
            O.forEach(N => {
                N.isOnline = I.indexOf(N.userId) !== -1
            })
        })
    }
    static getName(O) {
        return O === Me.hiddenName ? defaultT("Hidden") : O
    }
};
be($e, "MAX", 5e3), be($e, "userList", []), be($e, "userDict", {}), be($e, "keyDict", {}), be($e, "firendDict", {}), be($e, "hiddenName", "****");
let User = $e;

function isHidden(L) {
    const O = User.userDict[L];
    return O ? O.name === User.hiddenName : !1
}

function transformVerifyType(L) {
    return L === "phone-code" ? "phone" : L === "email-code" ? "email" : L === "google-2step-auth" ? "google_2fa" : L
}

function assets(L) {
    const {
        isSpHost: O,
        isBrAuditHost: M,
        isBzHost: I,
        isJbHost: N
    } = getHostType(env.host), R = `/assets${L.startsWith("/")?L:"/"+L}`;
    let H = R;
    return L.startsWith("/logo/") && (O ? H = R.replace("/logo/", "/logo87/") : M ? H = R.replace("/logo/", "/logobs/") : I ? H = R.replace("/logo/", "/logobz/") : N && (H = R.replace("/logo/", "/logojb/")), H !== R && (H = H.replace("_festival", ""))), H
}

function coinIcon(L, O) {
    let M = systemUtils.getAlias(L).replace(/FIAT$/, "");
    O = O ? ? (L.endsWith("FIAT") ? "rect" : "black");
    const {
        isBrAuditHost: I
    } = getHostType(env.host);
    return I && (M = "BRL", O = "rect"), `/coin/${M}.${O}.png`
}

function nftIcon(L) {
    return `//res.${env.host}/nft/${L}.png`
}

function avatar(L, O = "s") {
    let M = img2(`/avatar/${L}/${O}`);
    return account.userId === L && (M += `?t=${account.avatarUpdateTime}`), isHidden(L) && (M = ""), L === 0 && (M = ""), M
}

function img2(L) {
    return `//${env.imgHost||"img2.dogcrash.game"}${L}`
}

function userName(L) {
    return L === User.hiddenName ? defaultT("Hidden") : L
}
const bc = {
    avatar,
    assets,
    userName,
    coinIcon,
    nftIcon,
    img2,
    User,
    ErrorCode,
    transformVerifyType
};
async function requestRecaptcha(L) {
    return captchaClient || detectCaptcha(), captchaClient ? .request(L) || "No captcha!"
}
class Captcha {
    constructor(O) {
        be(this, "key"), be(this, "resolve"), be(this, "inited"), be(this, "timeout", 0), this.key = O, this.resolve = () => {}, this.inited = new Promise(M => {
            this.resolve = M, this.init()
        })
    }
    async request(O) {
        await this.inited;
        const M = [this.requestCode(O)];
        return this.timeout > 0 && M.push(delay$1(this.timeout).then(() => "time out")), await Promise.race(M)
    }
}
class Recaptcha extends Captcha {
    constructor() {
        super(...arguments), be(this, "timeout", 8e3)
    }
    async init() {
        return await loadScript(`https://www.google.com/recaptcha/api.js?render=${this.key}`), new Promise(O => {
            grecaptcha.ready(O)
        })
    }
    async requestCode(O) {
        return grecaptcha.execute(this.key, {
            action: O
        })
    }
}
setTimeout(() => {
    captchaClient || detectCaptcha()
}, 15e3);
class Hcaptcha extends Captcha {
    async init() {
        return new Promise(O => {
            const M = "hcaptcha_container",
                I = this.key,
                N = this.resolve;
            window.onGameCaptchaLoad = () => {
                hcaptcha && (hcaptcha.render(M, {
                    size: "invisible",
                    sitekey: I
                }), N(!0), O(!0))
            }, loadScript("https://js.hcaptcha.com/1/api.js?render=explicit&onload=onGameCaptchaLoad&recaptchacompat=off").then(() => {
                const R = document.createElement("div");
                R.id = M, R.style.display = "none", document.body.appendChild(R)
            })
        })
    }
    async requestCode() {
        return (await hcaptcha.execute({
            async: !0
        })).response
    }
}
let captchaClient = null;

function detectCaptcha() {
    const L = env.RECAPTCHA_V3_ID,
        O = env.HCAPTCHA_ID;
    O ? captchaClient = new Hcaptcha(O) : L && (captchaClient = new Recaptcha(L))
}
const getShareRes = memo$1(() => getHttp().get("/agent/invitation/code/custom/")),
    getShareLink = memo$1((L, O) => getHttp().post(`/game/support/share/short-link/${L}/`, O));

function getShareLinks(L) {
    const O = [{
        name: "email",
        url: void 0,
        icon: getShareIcon(10)
    }, {
        name: "Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u=",
        baseUrl: "https://www.facebook.com/sharer/sharer.php?",
        icon: getShareIcon(3)
    }, {
        name: "X",
        url: "https://x.com/share?url=",
        baseUrl: "https://x.com/share?",
        icon: getShareIcon(8)
    }, {
        name: "Telegram",
        url: "https://t.me/share?url=",
        baseUrl: "https://t.me/share?",
        icon: getShareIcon(7)
    }, {
        name: "VK",
        url: "http://vk.com/share.php?",
        icon: getShareIcon(11)
    }, {
        name: "Line",
        url: "https://lineit.line.me/share/ui?",
        icon: getShareIcon(12)
    }, {
        name: "vertical",
        url: void 0,
        icon: getShareIcon(6)
    }, {
        name: "Skype",
        url: "https://web.skype.com/share?",
        icon: getShareIcon(13)
    }, {
        name: "OK",
        url: "https://connect.ok.ru/offer?url=",
        icon: getShareIcon(14)
    }, {
        name: "btc",
        url: void 0,
        icon: getShareIcon(1)
    }, {
        name: "pinterest",
        url: void 0,
        icon: getShareIcon(15)
    }, {
        name: "Linkedin",
        url: "https://www.linkedin.com/sharing/share-offsite/?",
        icon: getShareIcon(16)
    }, {
        name: "Whatsapp",
        url: "https://wa.me/?",
        icon: getShareIcon(17)
    }, {
        name: "reddit",
        url: void 0,
        icon: getShareIcon(18)
    }];
    return Promise.all(O.map(M => shareLink({
        platform: { ...M
        },
        ...L
    })))
}
async function shareLink({
    platform: L,
    title: O,
    inviteUrl: M,
    inviteCode: I,
    content: N = "",
    imgUrl: R,
    shareUrl: H,
    isGame: z = !0
}) {
    let K = {
        invitationUrl: `${location.protocol}://${env.host}`,
        invitationCode: ""
    };
    if (M && I ? K = {
            invitationUrl: M,
            invitationCode: I
        } : account.login && (K = await getShareRes()), !L.url) return L;
    R = R || `${location.protocol}//${env.host}/share_image.jpg`;
    const W = H ? `${K.invitationUrl}?p=${H}` : K.invitationUrl;
    let X = "";
    if (L.name === "Facebook" || L.name === "X" || L.name === "Telegram") {
        const G = {
                title: O,
                desc: N,
                image: R
            },
            Y = L.name === "Facebook";
        if (!z || !account.login) {
            const Z = `title=${encodeURIComponent(O)}&text=${encodeURIComponent(N)}&${Y?"u":"url"}=${encodeURIComponent(W)}`;
            X = L.baseUrl + Z
        } else {
            const Z = await getShareLink(K.invitationCode, G);
            X = L.url + Z
        }
    } else if (L.name === "Linkedin") {
        const G = `url=${encodeURIComponent(W)}`;
        X = L.url + G
    } else if (L.name === "OK") {
        const G = `url=${encodeURIComponent(W)}&title=${encodeURIComponent(O)}&imageUrl=${encodeURIComponent(R)}`;
        X = L.url + G
    } else if (L.name === "Whatsapp") {
        const G = `text=${encodeURIComponent(O+" "+W)}`;
        X = L.url + G
    } else {
        const G = `url=${encodeURIComponent(W)}&title=${encodeURIComponent(O)}&text=${encodeURIComponent(N)}`;
        X = L.url + G
    }
    return { ...L,
        url: X
    }
}

function getShareIcon(L) {
    return bc.assets(`/shareicon/share_${L}.png`)
}
var _tmpl$$H = template("<div>"),
    VipLevelStatus = (L => (L[L.None = 0] = "None", L[L.Bronze = 1] = "Bronze", L[L.Silver = 2] = "Silver", L[L.Gold = 3] = "Gold", L[L.Platinum_I = 4] = "Platinum_I", L[L.Platinum_II = 5] = "Platinum_II", L[L.Diamond_I = 6] = "Diamond_I", L[L.Diamond_II = 7] = "Diamond_II", L[L.Diamond_III = 8] = "Diamond_III", L))(VipLevelStatus || {});
const vipLevelsList = [{
        level: 0,
        xp: 0,
        type: 0
    }, {
        level: 1,
        xp: 1,
        type: 0
    }, {
        level: 2,
        xp: 100,
        type: 1
    }, {
        level: 3,
        xp: 200,
        type: 1
    }, {
        level: 4,
        xp: 1e3,
        type: 1
    }, {
        level: 5,
        xp: 2e3,
        type: 1
    }, {
        level: 6,
        xp: 3e3,
        type: 1
    }, {
        level: 7,
        xp: 4e3,
        type: 1
    }, {
        level: 8,
        xp: 5e3,
        type: 2
    }, {
        level: 9,
        xp: 7e3,
        type: 2
    }, {
        level: 10,
        xp: 9e3,
        type: 2
    }, {
        level: 11,
        xp: 11e3,
        type: 2
    }, {
        level: 12,
        xp: 13e3,
        type: 2
    }, {
        level: 13,
        xp: 15e3,
        type: 2
    }, {
        level: 14,
        xp: 17e3,
        type: 2
    }, {
        level: 15,
        xp: 21e3,
        type: 2
    }, {
        level: 16,
        xp: 25e3,
        type: 2
    }, {
        level: 17,
        xp: 29e3,
        type: 2
    }, {
        level: 18,
        xp: 33e3,
        type: 2
    }, {
        level: 19,
        xp: 37e3,
        type: 2
    }, {
        level: 20,
        xp: 41e3,
        type: 2
    }, {
        level: 21,
        xp: 45e3,
        type: 2
    }, {
        level: 22,
        xp: 49e3,
        type: 3
    }, {
        level: 23,
        xp: 59e3,
        type: 3
    }, {
        level: 24,
        xp: 69e3,
        type: 3
    }, {
        level: 25,
        xp: 79e3,
        type: 3
    }, {
        level: 26,
        xp: 89e3,
        type: 3
    }, {
        level: 27,
        xp: 99e3,
        type: 3
    }, {
        level: 28,
        xp: 109e3,
        type: 3
    }, {
        level: 29,
        xp: 119e3,
        type: 3
    }, {
        level: 30,
        xp: 129e3,
        type: 3
    }, {
        level: 31,
        xp: 153e3,
        type: 3
    }, {
        level: 32,
        xp: 177e3,
        type: 3
    }, {
        level: 33,
        xp: 201e3,
        type: 3
    }, {
        level: 34,
        xp: 225e3,
        type: 3
    }, {
        level: 35,
        xp: 249e3,
        type: 3
    }, {
        level: 36,
        xp: 273e3,
        type: 3
    }, {
        level: 37,
        xp: 297e3,
        type: 3
    }, {
        level: 38,
        xp: 321e3,
        type: 4
    }, {
        level: 39,
        xp: 377e3,
        type: 4
    }, {
        level: 40,
        xp: 433e3,
        type: 4
    }, {
        level: 41,
        xp: 489e3,
        type: 4
    }, {
        level: 42,
        xp: 545e3,
        type: 4
    }, {
        level: 43,
        xp: 601e3,
        type: 4
    }, {
        level: 44,
        xp: 657e3,
        type: 4
    }, {
        level: 45,
        xp: 713e3,
        type: 4
    }, {
        level: 46,
        xp: 769e3,
        type: 4
    }, {
        level: 47,
        xp: 897e3,
        type: 4
    }, {
        level: 48,
        xp: 1025e3,
        type: 4
    }, {
        level: 49,
        xp: 1153e3,
        type: 4
    }, {
        level: 50,
        xp: 1281e3,
        type: 4
    }, {
        level: 51,
        xp: 1409e3,
        type: 4
    }, {
        level: 52,
        xp: 1537e3,
        type: 4
    }, {
        level: 53,
        xp: 1665e3,
        type: 4
    }, {
        level: 54,
        xp: 1793e3,
        type: 4
    }, {
        level: 55,
        xp: 2081e3,
        type: 4
    }, {
        level: 56,
        xp: 2369e3,
        type: 5
    }, {
        level: 57,
        xp: 2657e3,
        type: 5
    }, {
        level: 58,
        xp: 2945e3,
        type: 5
    }, {
        level: 59,
        xp: 3233e3,
        type: 5
    }, {
        level: 60,
        xp: 3521e3,
        type: 5
    }, {
        level: 61,
        xp: 3809e3,
        type: 5
    }, {
        level: 62,
        xp: 4097e3,
        type: 5
    }, {
        level: 63,
        xp: 4737e3,
        type: 5
    }, {
        level: 64,
        xp: 5377e3,
        type: 5
    }, {
        level: 65,
        xp: 6017e3,
        type: 5
    }, {
        level: 66,
        xp: 6657e3,
        type: 5
    }, {
        level: 67,
        xp: 7297e3,
        type: 5
    }, {
        level: 68,
        xp: 7937e3,
        type: 5
    }, {
        level: 69,
        xp: 8577e3,
        type: 5
    }, {
        level: 70,
        xp: 9217e3,
        type: 6
    }, {
        level: 71,
        xp: 10625e3,
        type: 6
    }, {
        level: 72,
        xp: 12033e3,
        type: 6
    }, {
        level: 73,
        xp: 13441e3,
        type: 6
    }, {
        level: 74,
        xp: 14849e3,
        type: 6
    }, {
        level: 75,
        xp: 16257e3,
        type: 6
    }, {
        level: 76,
        xp: 17665e3,
        type: 6
    }, {
        level: 77,
        xp: 19073e3,
        type: 6
    }, {
        level: 78,
        xp: 20481e3,
        type: 6
    }, {
        level: 79,
        xp: 23553e3,
        type: 6
    }, {
        level: 80,
        xp: 26625e3,
        type: 6
    }, {
        level: 81,
        xp: 29697e3,
        type: 6
    }, {
        level: 82,
        xp: 32769e3,
        type: 6
    }, {
        level: 83,
        xp: 35841e3,
        type: 6
    }, {
        level: 84,
        xp: 38913e3,
        type: 6
    }, {
        level: 85,
        xp: 41985e3,
        type: 7
    }, {
        level: 86,
        xp: 45057e3,
        type: 7
    }, {
        level: 87,
        xp: 51713e3,
        type: 7
    }, {
        level: 88,
        xp: 58369e3,
        type: 7
    }, {
        level: 89,
        xp: 65025e3,
        type: 7
    }, {
        level: 90,
        xp: 71681e3,
        type: 7
    }, {
        level: 91,
        xp: 78337e3,
        type: 7
    }, {
        level: 92,
        xp: 84993e3,
        type: 7
    }, {
        level: 93,
        xp: 91649e3,
        type: 7
    }, {
        level: 94,
        xp: 98305e3,
        type: 7
    }, {
        level: 95,
        xp: 112641e3,
        type: 7
    }, {
        level: 96,
        xp: 126977e3,
        type: 7
    }, {
        level: 97,
        xp: 141313e3,
        type: 7
    }, {
        level: 98,
        xp: 155649e3,
        type: 7
    }, {
        level: 99,
        xp: 169985e3,
        type: 7
    }, {
        level: 100,
        xp: 184321e3,
        type: 7
    }, {
        level: 101,
        xp: 198657e3,
        type: 7
    }, {
        level: 102,
        xp: 212993e3,
        type: 7
    }, {
        level: 103,
        xp: 243713e3,
        type: 7
    }, {
        level: 104,
        xp: 274433e3,
        type: 7
    }, {
        level: 105,
        xp: 305153e3,
        type: 7
    }, {
        level: 106,
        xp: 335873e3,
        type: 7
    }, {
        level: 107,
        xp: 366593e3,
        type: 8
    }, {
        level: 108,
        xp: 397313e3,
        type: 8
    }, {
        level: 109,
        xp: 428033e3,
        type: 8
    }, {
        level: 110,
        xp: 458753e3,
        type: 8
    }, {
        level: 111,
        xp: 524289e3,
        type: 8
    }, {
        level: 112,
        xp: 589825e3,
        type: 8
    }, {
        level: 113,
        xp: 655361e3,
        type: 8
    }, {
        level: 114,
        xp: 720897e3,
        type: 8
    }, {
        level: 115,
        xp: 786433e3,
        type: 8
    }, {
        level: 116,
        xp: 851969e3,
        type: 8
    }, {
        level: 117,
        xp: 917505e3,
        type: 8
    }, {
        level: 118,
        xp: 983041e3,
        type: 8
    }, {
        level: 119,
        xp: 1122305e3,
        type: 8
    }, {
        level: 120,
        xp: 1261569e3,
        type: 8
    }, {
        level: 121,
        xp: 1400833e3,
        type: 8
    }, {
        level: 122,
        xp: 1540097e3,
        type: 8
    }, {
        level: 123,
        xp: 1679361e3,
        type: 8
    }, {
        level: 124,
        xp: 1818625e3,
        type: 8
    }, {
        level: 125,
        xp: 1957889e3,
        type: 8
    }, {
        level: 126,
        xp: 2097153e3,
        type: 8
    }, {
        level: 127,
        xp: 2392065e3,
        type: 8
    }, {
        level: 128,
        xp: 2686977e3,
        type: 8
    }, {
        level: 129,
        xp: 2981889e3,
        type: 8
    }, {
        level: 130,
        xp: 3276801e3,
        type: 8
    }, {
        level: 131,
        xp: 3571713e3,
        type: 8
    }, {
        level: 132,
        xp: 3866625e3,
        type: 8
    }, {
        level: 133,
        xp: 4161537e3,
        type: 8
    }, {
        level: 134,
        xp: 4456449e3,
        type: 8
    }, {
        level: 135,
        xp: 5079041e3,
        type: 8
    }, {
        level: 136,
        xp: 5701633e3,
        type: 8
    }, {
        level: 137,
        xp: 6324225e3,
        type: 8
    }, {
        level: 138,
        xp: 6946817e3,
        type: 8
    }, {
        level: 139,
        xp: 7569409e3,
        type: 8
    }, {
        level: 140,
        xp: 8192001e3,
        type: 8
    }, {
        level: 141,
        xp: 8814593e3,
        type: 8
    }, {
        level: 142,
        xp: 9437185e3,
        type: 8
    }, {
        level: 143,
        xp: 10747905e3,
        type: 8
    }, {
        level: 144,
        xp: 12058625e3,
        type: 8
    }],
    maxLevel = 144,
    overLevelXp = 139264e3,
    levelColor = ["#5D81AC", "#6E412E", "#757575", "#966603", "#6434A2", "#6434A2", "#B54E82", "#B54E82", "#B54E82"],
    getLevelInfo = L => {
        const O = vipLevelsList.length;
        if (L < 0) return vipLevelsList[0];
        if (L >= O) {
            const M = L - O + 1,
                I = vipLevelsList[O - 1].xp + M * overLevelXp;
            return {
                level: L,
                xp: I,
                type: 8
            }
        }
        return vipLevelsList[L]
    },
    getUserLevelInfo = L => {
        const O = L > 69,
            M = O ? "SVIP" : "VIP",
            I = O ? L - 69 : L,
            N = getLevelInfo(L),
            R = levelColor[N.type],
            [H, z] = VipLevelStatus[N.type].split("_");
        return {
            isSvip: O,
            vipLevel: I,
            vipType: M,
            vipLevelColor: R,
            vipTypeNum: N.type,
            vipTypeNumName: {
                base: H,
                suffix: z,
                fullName: H + `${z?"_":""}${z}`
            }
        }
    },
    levelClass = ["level_nolevel", "level_bronze", "level_sliver", "level_gold", "level_platinum", "level_platinum", "level_diamond", "level_diamond", "level_diamond"],
    LevelName = function L(O) {
        const M = createMemo(() => {
            const I = getLevelInfo(O.level);
            return levelClass[I.type] || "level_nolevel"
        });
        return (() => {
            var I = _tmpl$$H();
            return I.style.setProperty("text-shadow", "0px 1.021px 0px rgba(66, 43, 105, 0.50)"), insert(I, () => O.children), createRenderEffect(() => className(I, `h-5 rounded py-0 px-2 ${M()} ${O.class||""}`)), I
        })()
    };

function getIcon(L) {
    return bc.assets(`/vip/badge-${L}.png`)
}
const vipBadgeIcon = L => {
        switch (typeof L == "number" ? getLevelInfo(L).type : L.vipLevelStatus) {
            case 0:
                return getIcon("none");
            case 1:
                return getIcon("bronze");
            case 2:
                return getIcon("silver");
            case 3:
                return getIcon("gold");
            case 4:
            case 5:
                return getIcon("platinum");
            case 6:
            case 7:
            case 8:
                return getIcon("diamond")
        }
    },
    UserLevel = Object.freeze(Object.defineProperty({
        __proto__: null,
        LevelName,
        VipLevelStatus,
        getLevelInfo,
        getUserLevelInfo,
        levelColor,
        maxLevel,
        overLevelXp,
        vipBadgeIcon,
        vipLevelsList
    }, Symbol.toStringTag, {
        value: "Module"
    }));
var _tmpl$$G = template("<div>"),
    _tmpl$2$m = template("<span>"),
    _tmpl$3$d = template('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg><path fill=#eb5858 d="M26.026 18.723c-0.16 0.333-0.328 0.661-0.477 0.999-0.197 0.447-0.329 0.909-0.355 1.405-0.027 0.526-0.294 0.922-0.778 1.144-0.141 0.062-0.294 0.094-0.448 0.096-0.635 0.011-1.272 0.007-1.907 0.005-0.201 0-0.219-0.026-0.114-0.205 0.197-0.338 0.419-0.642 0.795-0.822 0.46-0.22 0.699-0.909 0.561-1.433-0.109-0.415-0.345-0.754-0.579-1.1-0.368-0.544-0.641-1.131-0.601-1.806 0.017-0.274 0.112-0.544 0.178-0.815 0.018-0.075 0.057-0.144 0.086-0.216l-0.057-0.028c-0.099 0.186-0.217 0.365-0.294 0.561-0.26 0.666-0.129 1.305 0.178 1.92 0.097 0.193 0.227 0.37 0.334 0.558 0.034 0.060 0.072 0.145 0.054 0.203-0.177 0.584-0.323 1.184-0.565 1.743-0.166 0.382-0.309 0.77-0.455 1.158-0.075 0.2-0.215 0.29-0.435 0.288-0.699-0.008-1.398-0.002-2.096-0.003-0.217 0-0.24-0.024-0.164-0.225 0.072-0.198 0.158-0.391 0.257-0.577 0.111-0.203 0.291-0.324 0.521-0.388 0.386-0.107 0.571-0.404 0.598-0.776 0.031-0.432 0.011-0.868 0.015-1.302 0.001-0.14-0.092-0.133-0.189-0.127-0.674 0.043-1.348 0.112-2.022 0.123-0.766 0.011-1.533-0.029-2.299-0.048-0.116-0.003-0.154-0.049-0.101-0.164 0.217-0.472 0.312-0.978 0.392-1.486 0.009-0.065-0.001-0.131-0.031-0.19-0.079 0.173-0.152 0.349-0.24 0.518-0.168 0.323-0.32 0.661-0.528 0.958-0.189 0.271-0.228 0.579-0.325 0.873-0.149 0.45-0.251 0.923-0.462 1.342-0.223 0.444-0.544 0.842-0.834 1.251-0.12 0.168-0.306 0.223-0.515 0.221-0.687-0.005-1.374 0-2.061 0.001-0.232 0-0.248-0.026-0.133-0.232 0.177-0.318 0.378-0.616 0.703-0.802 0.078-0.044 0.174-0.056 0.253-0.098 0.127-0.068 0.289-0.121 0.362-0.23 0.278-0.415 0.311-0.904 0.375-1.38-0.131 0.306-0.246 0.621-0.396 0.919-0.152 0.301-0.388 0.523-0.73 0.604-0.355 0.084-0.555 0.34-0.724 0.637-0.164 0.289-0.383 0.516-0.728 0.573-0.106 0.017-0.217 0.009-0.325 0.009-0.602 0.001-1.203 0.002-1.804 0-0.24-0.001-0.257-0.020-0.17-0.239 0.183-0.46 0.468-0.806 0.973-0.96 0.42-0.128 0.71-0.45 0.964-0.797 0.331-0.451 0.594-0.936 0.708-1.491 0.029-0.141 0.005-0.249-0.117-0.346-0.487-0.388-0.975-0.775-1.446-1.182-0.333-0.287-0.637-0.608-0.957-0.91-0.416-0.393-0.93-0.598-1.472-0.737-0.575-0.148-1.161-0.21-1.754-0.163-0.221 0.017-0.44 0.069-0.659 0.109-0.356 0.066-0.712 0.121-1.057-0.045-0.014-0.007-0.024-0.020-0.056-0.046l0.268-0.026 0.002-0.039c-0.162-0.040-0.323-0.084-0.487-0.118-0.13-0.027-0.223-0.067-0.274-0.215-0.036-0.103-0.14-0.192-0.231-0.266-0.186-0.154-0.239-0.306-0.094-0.482 0.091-0.11 0.237-0.216 0.373-0.241 0.487-0.090 0.849-0.343 1.12-0.747 0.635-0.945 1.46-1.653 2.562-1.989 0.406-0.124 0.831-0.157 1.256-0.067 0.056 0.012 0.133-0.018 0.182-0.053 0.078-0.056 0.136-0.14 0.213-0.198 0.283-0.213 0.635-0.061 0.669 0.291 0.015 0.152 0.003 0.306 0.003 0.491 0.047-0.069 0.087-0.114 0.112-0.167 0.085-0.181 0.208-0.267 0.423-0.28 0.886-0.052 1.771-0.156 2.657-0.044 0.278 0.035 0.469-0.105 0.688-0.203 0.645-0.289 1.306-0.558 2.019-0.551 0.456 0.004 0.855-0.107 1.267-0.274 1.452-0.589 2.96-0.885 4.529-0.724 0.492 0.050 0.978 0.177 1.458 0.301 0.737 0.191 1.454 0.443 2.134 0.795 1.181 0.612 1.977 1.569 2.509 2.767 0.479 1.079 0.762 2.215 0.927 3.379 0.066 0.469 0.303 0.848 0.54 1.228 0.412 0.659 0.836 1.311 1.283 1.947 0.235 0.334 0.5 0.655 0.904 0.819 0.16 0.065 0.192 0.249 0.047 0.345-0.2 0.133-0.423 0.266-0.654 0.312-0.816 0.163-1.512-0.094-2.089-0.684-0.53-0.542-0.855-1.195-1.037-1.926-0.019-0.074-0.048-0.146-0.073-0.219l-0.053-0.007zM2.994 14.481c0.135 0.148 0.141 0.165 0.023 0.364-0.081 0.136-0.050 0.201 0.095 0.254 0.287 0.107 0.599 0.123 0.895 0.045 0.816-0.215 1.645-0.327 2.484-0.408 1.239-0.119 2.447 0.015 3.629 0.374 0.715 0.217 1.415 0.485 2.122 0.728 0.032 0.011 0.071 0.001 0.125 0.001-0.023-0.054-0.031-0.094-0.053-0.124-0.461-0.618-0.904-1.251-1.394-1.845-0.344-0.417-0.783-0.745-1.281-0.956-0.461-0.197-0.942-0.209-1.431-0.204-0.426 0.004-0.809 0.133-1.168 0.349-0.465 0.28-0.922 0.575-1.396 0.838-0.304 0.168-0.633 0.301-0.998 0.221-0.21-0.046-0.253-0.125-0.142-0.31 0.129-0.215 0.263-0.431 0.426-0.619 0.507-0.584 1.106-1.042 1.86-1.264 0.221-0.065 0.447-0.113 0.721-0.182-0.136-0.039-0.226-0.077-0.319-0.089-0.396-0.050-0.776 0.024-1.136 0.189-0.855 0.394-1.51 1.019-2.030 1.792-0.153 0.227-0.334 0.419-0.567 0.563-0.154 0.095-0.309 0.19-0.466 0.286zM5.235 13.597c0.123-0.051 0.233-0.082 0.325-0.142 0.060-0.039 0.090-0.121 0.077-0.168s-0.061-0.101-0.153-0.104c-0.108-0.002-0.215 0.025-0.308 0.080-0.070 0.043-0.115 0.117-0.121 0.199-0.004 0.075 0.046 0.168 0.181 0.134z">'),
    _tmpl$4$7 = template('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg><path fill=#d169e6 d="M24.699 7.987h-17.489l-4.983 6.559 13.724 15.455 13.724-15.455-4.976-6.559zM25.41 14.969c-0.661 0.021-2.224 0.162-3.076 1.021-0.901 0.901-1.013 2.59-1.028 3.181-0.014-0.605-0.12-2.372-1.048-3.294-0.859-0.852-2.463-0.929-3.097-0.922-0.162 0.007-0.267 0.007-0.267 0.007s0.099-0.007 0.267-0.007c0.605-0.035 2.097-0.204 2.949-1.048 1.063-1.063 1.183-3.090 1.197-3.329v0c-0.007 0.239-0.056 2.372 0.985 3.406 0.852 0.859 2.449 0.971 3.118 0.985 0.19-0.007 0.31-0.007 0.31-0.007s-0.12 0.007-0.31 0.007zM21.828 1.998c0 0-0.078 1.506 0.633 2.217s2.217 0.633 2.217 0.633-1.478-0.049-2.189 0.661c-0.711 0.711-0.661 2.189-0.661 2.189s0.049-1.534-0.676-2.259c-0.697-0.697-2.175-0.584-2.175-0.584s1.379 0.014 2.076-0.683c0.732-0.739 0.774-2.175 0.774-2.175zM27.831 5.165c0 0-0.056 1.028 0.429 1.513s1.513 0.429 1.513 0.429-1.006-0.035-1.492 0.45c-0.485 0.486-0.451 1.492-0.451 1.492s0.035-1.049-0.465-1.541c-0.472-0.479-1.485-0.401-1.485-0.401s0.943 0.007 1.415-0.465c0.5-0.492 0.535-1.478 0.535-1.478z">'),
    _tmpl$5$5 = template('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg><path fill=#ffd308 d="M27.924 14.807l-4.892 11.74h-14.063l-4.892-11.74c-1.198-0.105-2.14-1.099-2.14-2.324 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.498-0.157 0.957-0.421 1.336 0.827 1.307 2.274 2.18 3.937 2.18 2.182 0 3.999-1.497 4.522-3.516l0.035-0.197 0.131-2.472c-0.698-0.406-1.172-1.153-1.172-2.019 0-1.295 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.866-0.474 1.613-1.172 2.019l0.082 2.434 0.084 0.235c0.523 2.018 2.341 3.516 4.522 3.516 1.663 0 3.109-0.873 3.937-2.18-0.264-0.379-0.421-0.839-0.421-1.336 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 1.225-0.942 2.218-2.14 2.324z">'),
    _tmpl$6$2 = template('<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=20 height=18 viewBox="0 0 35 32"class=fill-[#0f62fe]><title>Official</title><path d="M24.193 3.213c1.353 0 2.45 1.097 2.45 2.45s-1.097 2.45-2.45 2.45c-0.2 0-0.394-0.024-0.58-0.069l-0.693 1.462c4.202 1.106 7.301 4.931 7.301 9.48 0 5.413-4.388 9.802-9.802 9.802h-6.126c-5.413 0-9.802-4.388-9.802-9.802 0-4.266 2.726-7.896 6.53-9.243l-0.547-1.642c-1.24-0.121-2.209-1.167-2.209-2.439 0-1.353 1.097-2.45 2.45-2.45s2.45 1.097 2.45 2.45c0 0.745-0.333 1.413-0.858 1.863l0.584 1.758c0.457-0.065 0.925-0.099 1.401-0.099h6.126c0.175 0 0.349 0.005 0.522 0.014l1.111-2.343c-0.197-0.353-0.309-0.759-0.309-1.192 0-1.353 1.097-2.45 2.45-2.45zM20.419 14.698h-6.126c-3.045 0-5.513 2.468-5.513 5.513 0 2.974 2.355 5.398 5.302 5.51l0.211 0.004h6.126c3.045 0 5.513-2.468 5.513-5.513s-2.468-5.513-5.513-5.513zM33.696 15.531c1.739 2.237 1.739 5.368 0 7.605-0.298 0.356-0.797 0.471-1.221 0.282s-0.672-0.636-0.608-1.096c0.268-1.98 0.268-3.988 0-5.969-0.069-0.462 0.177-0.913 0.603-1.105s0.927-0.076 1.226 0.282zM1.304 15.531c0.299-0.358 0.8-0.474 1.226-0.282s0.672 0.643 0.603 1.105c-0.268 1.98-0.268 3.988 0 5.969 0.064 0.46-0.184 0.907-0.608 1.096s-0.923 0.074-1.221-0.282c-1.739-2.237-1.739-5.368 0-7.605zM13.227 17.761c0.53 0 0.96 0.43 0.96 0.96v2.98c0 0.53-0.43 0.96-0.96 0.96h-0.53c-0.53 0-0.96-0.43-0.96-0.96v-2.98c0-0.53 0.43-0.96 0.96-0.96h0.53zM21.555 17.761c0.53 0 0.96 0.43 0.96 0.96v2.98c0 0.53-0.43 0.96-0.96 0.96h-0.53c-0.53 0-0.96-0.43-0.96-0.96v-2.98c0-0.53 0.43-0.96 0.96-0.96h0.53z">');
const UserTitle = L => {
    const O = createMemo(() => L.code.find(H => H === 80)),
        M = createMemo(() => Math.max(...L.code)),
        I = createMemo(() => O() ? O() : M()),
        N = H => {
            if (H.search(/\$\[#.+/) !== -1) {
                const z = H.match(/\$\[(#.+)\](.+)/);
                return {
                    color: z && z[1],
                    name: z && z[2]
                }
            } else return {
                color: null,
                name: H
            }
        },
        R = createMemo(() => L.markClass || "text-xs px-1 inline-block min-w-9 max-w-28 text-center h-4 leading-4 whitespace-nowrap rounded-md text-white");
    return createComponent(Show, {
        get when() {
            return L.code.length > 0
        },
        get children() {
            var H = _tmpl$$G();
            return insert(H, createComponent(For, {
                get each() {
                    return L.code
                },
                children: (z, K) => createComponent(Switch$1, {
                    fallback: null,
                    get children() {
                        return [createComponent(Match, {
                            when: z === 1,
                            get children() {
                                return createComponent(Icon_Badge, {})
                            }
                        }), createComponent(Match, {
                            when: z === 2 || z === 3,
                            get children() {
                                return createComponent(Icon_Diamond, {})
                            }
                        }), createComponent(Match, {
                            when: z === 4,
                            get children() {
                                return createComponent(Icon_Crown, {})
                            }
                        }), createComponent(Match, {
                            when: z === -1,
                            get children() {
                                return createComponent(Icon_Official, {})
                            }
                        }), createComponent(Match, {
                            get when() {
                                return z === 97 && I() === 97
                            },
                            get children() {
                                return createComponent(Mark, {
                                    get class() {
                                        return R() + " bg-[#4583ca]"
                                    },
                                    children: "BUGER BOT"
                                })
                            }
                        }), createComponent(Match, {
                            get when() {
                                return z === 80 && I() === 80
                            },
                            get children() {
                                return createComponent(Show, {
                                    get when() {
                                        return memo$2(() => !!L.desc)() && L.desc[K()]
                                    },
                                    get fallback() {
                                        return createComponent(Mark, {
                                            get class() {
                                                return R() + " bg-[#bf6ba2]"
                                            },
                                            children: "Host"
                                        })
                                    },
                                    children: W => {
                                        const {
                                            name: X,
                                            color: G
                                        } = N(W());
                                        return createComponent(Mark, {
                                            get class() {
                                                return R() + " bg-[#bf6ba2]"
                                            },
                                            style: {
                                                background: G || "#bf6ba2"
                                            },
                                            children: X || "Host"
                                        })
                                    }
                                })
                            }
                        }), createComponent(Match, {
                            get when() {
                                return z === 89 && I() === 89
                            },
                            get children() {
                                return createComponent(Mark, {
                                    get class() {
                                        return R() + " bg-[#f4581f]"
                                    },
                                    get children() {
                                        return memo$2(() => !!L.desc)() && L.desc[K()] || "Admin"
                                    }
                                })
                            }
                        }), createComponent(Match, {
                            get when() {
                                return z === 98 && I() === 98
                            },
                            get children() {
                                return createComponent(Mark, {
                                    get class() {
                                        return R() + " bg-[#826ee166] text-alw_white"
                                    },
                                    get children() {
                                        return memo$2(() => !!L.desc)() && L.desc[K()] || "Mod"
                                    }
                                })
                            }
                        })]
                    }
                })
            })), createRenderEffect(() => className(H, "flex items-center font-semibold" + (L.class ? L.class : ""))), H
        }
    })
};

function Mark(L) {
    return (() => {
        var O = _tmpl$2$m();
        return spread(O, mergeProps(L, {
            get class() {
                return L.class
            }
        }), !1, !1), O
    })()
}
const Icon_Badge = () => _tmpl$3$d(),
    Icon_Diamond = () => _tmpl$4$7(),
    Icon_Crown = () => _tmpl$5$5(),
    Icon_Official = () => _tmpl$6$2();
var _tmpl$$F = template("<div><img alt=avatar_wrap>");
const activeAvatars = [bc.assets("/active/avatar_none_new.png"), bc.assets("/active/avatar_bronze_new.png"), bc.assets("/active/avatar_silver_new.png"), bc.assets("/active/avatar_gold_new.png"), bc.assets("/active/avatar_platinum_new.png"), bc.assets("/active/avatar_platinum_new.png"), bc.assets("/active/avatar_diamond_new.png"), bc.assets("/active/avatar_diamond_new.png"), bc.assets("/active/avatar_diamond_new.png")],
    ActiveAvatar = function L(O) {
        const M = createMemo(() => getLevelInfo(O.level));
        return createComponent(Show, {
            get when() {
                return env.inActive
            },
            get fallback() {
                return O.children
            },
            get children() {
                var I = _tmpl$$F(),
                    N = I.firstChild;
                return N.style.setProperty("max-width", "400px"), insert(I, () => O.children, null), createRenderEffect(R => {
                    var H = cx("relative", O.class),
                        z = activeAvatars[M().type],
                        K = cx("absolute h-auto left-1/2 top-1/2 pointer-events-none select-none", O.imgClass),
                        W = O.width || "154%",
                        X = O.transform || "translate3d(-50%, -54%, 0)";
                    return H !== R.e && className(I, R.e = H), z !== R.t && setAttribute(N, "src", R.t = z), K !== R.a && className(N, R.a = K), W !== R.o && ((R.o = W) != null ? N.style.setProperty("width", W) : N.style.removeProperty("width")), X !== R.i && ((R.i = X) != null ? N.style.setProperty("transform", X) : N.style.removeProperty("transform")), R
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0,
                    i: void 0
                }), I
            }
        })
    },
    loadShumeiScript = memo$1(L => new Promise(async (O, M) => {
        try {
            globalThis._smConf = {
                organization: "d9YtHNKdmLm1CMuYZsw9",
                appId: "default",
                publicKey: L,
                apiHost: "collect.verify.lnearn.com"
            }, globalThis._smReadyFuncs = [function() {
                I.then(O)
            }];
            const I = loadScript("/assets/js/fp.min.js", "SMSdk")
        } catch (I) {
            M(I)
        }
    }));
async function getIshumeiDeviceId(L) {
    return (await loadShumeiScript(L)).getDeviceId()
}

function initShumeiSmid(L) {
    getIshumeiDeviceId(L).then(O => {
        getHttp().defaults.headers.common.smid = O
    })
}
var _tmpl$$E = template('<div><div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div><img>');
const AvatarFrame = L => {
    const O = L.size + "px";
    return createComponent(Show, {
        get when() {
            return L.id
        },
        get fallback() {
            return L.children
        },
        get children() {
            var M = _tmpl$$E(),
                I = M.firstChild,
                N = I.nextSibling;
            return O != null ? I.style.setProperty("width", O) : I.style.removeProperty("width"), O != null ? I.style.setProperty("height", O) : I.style.removeProperty("height"), insert(I, () => L.children), createRenderEffect(R => {
                var H = cx("relative flex justify-center items-center", L.class),
                    z = bc.assets(`/frame/${L.id}.png`),
                    K = cx("relative", L.frameClass);
                return H !== R.e && className(M, R.e = H), z !== R.t && setAttribute(N, "src", R.t = z), K !== R.a && className(N, R.a = K), R
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), M
        }
    })
};
class AsyncQueue {
    constructor() {
        be(this, "list", [])
    }
    enqueue(O, M) {
        const {
            weights: I = 0
        } = M || {}, N = {
            weights: I,
            run: O
        }, R = sortedIndexBy(this.list, N, H => H.weights);
        this.list.splice(R, 0, N)
    }
    dequeue() {
        var O;
        return (O = this.list.shift()) == null ? void 0 : O.run
    }
    setPriority() {}
    get size() {
        return this.list.length
    }
    filter() {
        return this.list.map(O => O.run)
    }
}
class ModalQueue extends PQueue {
    constructor() {
        super({
            queueClass: AsyncQueue,
            concurrency: 1
        })
    }
}
const AsyncQueue$1 = new ModalQueue;
let resolveGlobalVerify;

function useNavigatePromiseEnter() {
    return resolveGlobalVerify && (resolveGlobalVerify(), resolveGlobalVerify = void 0), onCleanup(() => {
        resolveGlobalVerify && resolveGlobalVerify(), resolveGlobalVerify = void 0
    }), L => new Promise(O => {
        resolveGlobalVerify = O, L()
    })
}

function useNavigatePromise(L) {
    let O = !0;
    return onCleanup(() => {
        O && (resolveGlobalVerify && resolveGlobalVerify(), resolveGlobalVerify = void 0)
    }), {
        navigate: M => {
            O = !1, M === -1 ? L(-1) : L(M, {
                replace: !0
            })
        },
        resolve: M => {
            resolveGlobalVerify && resolveGlobalVerify(M), resolveGlobalVerify = void 0
        },
        handleNext: () => {
            O = !1
        }
    }
}
let _bcdResource;
const bcdResource = Object.defineProperties([], {
    0: {
        get() {
            return getBCDResource()[0]
        }
    },
    1: {
        get() {
            return getBCDResource()[1]
        }
    }
});

function getDepositBonusConfig(L, O, M = "casino") {
    var I;
    try {
        const N = systemUtils.getCurrency(O).currencyType === "FIAT" ? O : L.currencyName;
        if (L.newUserDepositBonusSelect) {
            const R = L.newUserDepositBonusSelect.casinoConfigBean.selected || !L.newUserDepositBonusSelect.selected && M === "casino" ? L.newUserDepositBonusSelect.casinoConfigBean : L.newUserDepositBonusSelect.sportConfigBean;
            return {
                bonusCurrencyName: N,
                rechargeUsd: systemUtils.convertCurrency(new Decimal(R.minDeposit), R.currency, "USDFIAT").toNumber(),
                bonusRatio: R.rate,
                maximumBcd: systemUtils.convertCurrency(new Decimal(R.maxBonus), R.currency, "BCD").toNumber(),
                count: R.seq,
                firstTimeLimitRatio: 0,
                firstTimeLimitTime: 0,
                freeSpin: 0,
                lottery: 0,
                minUsd: 0,
                weeks: [],
                userCurrency: "",
                maxUsd: 0
            }
        }
        if (L.specialDeposit) return {
            rechargeUsd: L.specialDeposit.minDeposit,
            bonusRatio: L.specialDeposit.maxBonusRatio,
            maximumBcd: L.specialDeposit.maxDeposit,
            bonusCurrencyName: L.specialDeposit.currency,
            count: 0,
            firstTimeLimitRatio: 0,
            firstTimeLimitTime: 0,
            freeSpin: 0,
            lottery: 0,
            minUsd: 0,
            weeks: [],
            userCurrency: "",
            maxUsd: 0
        };
        if (L.rechargeValidNum < 4 && L.bonusItems.length > 0) {
            const R = L.bonusItems[0];
            return (I = L.fiatRecharge) != null && I[O] ? { ...R,
                rechargeUsd: L.fiatRecharge[O]
            } : R
        }
        return null
    } catch {
        return null
    }
}
const INITIAL_VALUE = {
    bonusAmount: "0",
    bonusThreshold: "0",
    bonusItems: [],
    bonusLog: [],
    expiredTime: 0,
    firstExpiredTime: 0,
    maxBonusRatio: {},
    rechargeValidNum: 0,
    registerTime: 0,
    releaseAmount: "0",
    totalAmount: "0",
    dailyDeposit: !1,
    specialDeposit: null,
    currencyName: "",
    currencyPrice: "",
    wagerRatio: "0.2",
    fiatRecharge: null,
    newUserDepositBonusType: "COMMON",
    monthlyBonusItems: [],
    dailyDepositBonusTC: {
        casino: [],
        sport: []
    },
    newUserBonusTC: {
        freeSpinMaxWinnings: 0,
        freeSpinWagerTimes: 0
    },
    claimedKycFirstDepositBonus: !1
};

function getBCDResource() {
    return _bcdResource || (_bcdResource = createResource(async () => {
        const L = await getHttp().get("/activity/recharge-bonus/dashboard/"),
            O = L.expiredTime || 0;
        let M = L.rechargeValidNum || 0;
        return O < env.serverTime.getTime() && (M = 4), { ...L,
            bonusItems: L.bonusItems || [],
            bonusAmount: L.bonusAmount || "0",
            bonusThreshold: L.bonusThreshold || "0",
            expiredTime: O,
            bonusLog: L.bonusLog || [],
            firstExpiredTime: L.firstExpiredTime || 0,
            maxBonusRatio: L.maxBonusRatio || {},
            registerTime: L.registerTime || 0,
            releaseAmount: L.releaseAmount || "0",
            totalAmount: L.totalAmount || "0",
            rechargeValidNum: M
        }
    }, {
        storage: () => makePersisted(createSignal(INITIAL_VALUE), {
            name: "__bcd_resource__persisted"
        }),
        initialValue: INITIAL_VALUE
    })), _bcdResource
}
const WALLET_KEY = "wallet",
    Decimal0 = new Decimal$1(0),
    templateCurrency = {
        abnormal: !0,
        groupAmount: {
            free_amount: Decimal0,
            sports: Decimal0
        },
        aliasCurrencyName: "BTC",
        amount: Decimal0,
        areaAble: !0,
        bonusAmount: Decimal0,
        currencyName: "BTC",
        display: !0,
        displayStatus: 1,
        deducting: Decimal0,
        deductingGame: Decimal0,
        deductingSport: Decimal0,
        generalAmount: Decimal0,
        lastLogId: "0",
        sort: 3,
        supportTx: !0,
        useable: !1
    },
    [wallet, setWallet] = createRoot(() => {
        const [L, O] = createStore(getPrevData());

        function M() {
            syncWallet().catch(N => {})
        }
        M(), createEffect(N => (N === !1 && account.login && untrack(M), account.login)), createComputed(() => {
            Object.values(L).forEach(N => {
                createComputed(R => {
                    const H = N.display;
                    return R !== void 0 && O(N.currencyName, "displayStatus", H ? 1 : 2), H
                }), createComputed(R => {
                    const H = N.displayStatus;
                    return R !== void 0 && account.login && I(), H
                })
            })
        });
        const I = debounce$1(() => {
            untrack(() => {
                getHttp().post("/user/amount/display/", {
                    list: Object.values(L).map(N => ({
                        currencyName: N.currencyName,
                        status: N.displayStatus
                    }))
                })
            })
        }, 5e3);
        return [L, O]
    });

function getPrevData() {
    const L = account.setting.currencyName;

    function O() {
        return {
            [L]: { ...templateCurrency,
                currencyName: L,
                aliasCurrencyName: L
            }
        }
    }
    try {
        const M = localStorage.getItem(WALLET_KEY);
        if (M) {
            const I = formatWalletData(JSON.parse(M));
            if (!I[L]) {
                const N = getValidCurrency(Object.values(I), account).currencyName;
                setAccount("setting", "currencyName", N)
            }
            return I
        } else return O()
    } catch {
        return O()
    }
}
async function syncWallet() {
    const L = await getWallet(),
        O = formatWalletData(L.reduce((M, I) => (I.deducting = Decimal0, I.deductingGame = Decimal0, I.deductingSport = Decimal0, M[I.currencyName] = I, M), {}));
    localStorage.setItem(WALLET_KEY, JSON.stringify(O)), syncWalletData(O)
}

function syncWalletData(L) {
    const O = Object.entries(L).reduce((M, [I, N]) => (M[I] = N, M), {});
    untrack(() => {
        batch(() => {
            if (!O[account.setting.currencyName]) {
                const M = getValidCurrency(Object.values(O), account).currencyName;
                setAccount("setting", "currencyName", M)
            }
            Object.entries(wallet).forEach(([M, I]) => {
                O[M] || setWallet(M, void 0)
            }), Object.values(L).forEach(M => {
                wallet[M.currencyName] ? setWallet(M.currencyName, I => shallowWallet(I, M) ? I : M) : setWallet({
                    [M.currencyName]: M
                })
            })
        })
    })
}

function shallowWallet(L, O) {
    const M = Object.keys(L),
        I = Object.keys(O);
    return M.length !== I.length ? !1 : M.every(N => Object.prototype.hasOwnProperty.call(O, N) && String(L[N]) === String(O[N]))
}

function formatWalletData(L) {
    return Object.entries(L).forEach(([O, M]) => {
        M.deducting = new Decimal$1(M.deducting), M.deductingGame = new Decimal$1(M.deductingGame), M.deductingSport = new Decimal$1(M.deductingSport), M.amount = new Decimal$1(M.amount), M.bonusAmount = new Decimal$1(M.bonusAmount), M.generalAmount = new Decimal$1(M.generalAmount), M.groupAmount.free_amount = new Decimal$1(M.groupAmount.free_amount), M.groupAmount.sports = new Decimal$1(M.groupAmount.sports)
    }), L
}
const $Reader = minimalExports.Reader,
    $Writer = minimalExports.Writer,
    $util = minimalExports.util,
    $root = minimalExports.roots.user || (minimalExports.roots.user = {}),
    BalanceChange = $root.BalanceChange = (() => {
        function L(O) {
            if (this.groupBalances = {}, this.groupChangeAmounts = {}, O)
                for (let M = Object.keys(O), I = 0; I < M.length; ++I) O[M[I]] != null && (this[M[I]] = O[M[I]])
        }
        return L.prototype.frontgroundId = 0, L.prototype.amountLogId = "", L.prototype.currencyName = "", L.prototype.mixedBalance = "", L.prototype.generalBalance = "", L.prototype.bonusBalance = "", L.prototype.mixedChangeAmount = "", L.prototype.generalChangeAmount = "", L.prototype.bonusChangeAmount = "", L.prototype.groupBalances = $util.emptyObject, L.prototype.groupChangeAmounts = $util.emptyObject, L.encode = function(O, M) {
            if (M || (M = $Writer.create()), O.frontgroundId != null && Object.hasOwnProperty.call(O, "frontgroundId") && M.uint32(8).int32(O.frontgroundId), O.amountLogId != null && Object.hasOwnProperty.call(O, "amountLogId") && M.uint32(18).string(O.amountLogId), O.currencyName != null && Object.hasOwnProperty.call(O, "currencyName") && M.uint32(26).string(O.currencyName), O.mixedBalance != null && Object.hasOwnProperty.call(O, "mixedBalance") && M.uint32(34).string(O.mixedBalance), O.generalBalance != null && Object.hasOwnProperty.call(O, "generalBalance") && M.uint32(42).string(O.generalBalance), O.bonusBalance != null && Object.hasOwnProperty.call(O, "bonusBalance") && M.uint32(50).string(O.bonusBalance), O.mixedChangeAmount != null && Object.hasOwnProperty.call(O, "mixedChangeAmount") && M.uint32(58).string(O.mixedChangeAmount), O.generalChangeAmount != null && Object.hasOwnProperty.call(O, "generalChangeAmount") && M.uint32(66).string(O.generalChangeAmount), O.bonusChangeAmount != null && Object.hasOwnProperty.call(O, "bonusChangeAmount") && M.uint32(74).string(O.bonusChangeAmount), O.groupBalances != null && Object.hasOwnProperty.call(O, "groupBalances"))
                for (let I = Object.keys(O.groupBalances), N = 0; N < I.length; ++N) M.uint32(82).fork().uint32(10).string(I[N]).uint32(18).string(O.groupBalances[I[N]]).ldelim();
            if (O.groupChangeAmounts != null && Object.hasOwnProperty.call(O, "groupChangeAmounts"))
                for (let I = Object.keys(O.groupChangeAmounts), N = 0; N < I.length; ++N) M.uint32(90).fork().uint32(10).string(I[N]).uint32(18).string(O.groupChangeAmounts[I[N]]).ldelim();
            return M
        }, L.decode = function(O, M) {
            O instanceof $Reader || (O = $Reader.create(O));
            let I = M === void 0 ? O.len : O.pos + M,
                N = new $root.BalanceChange,
                R, H;
            for (; O.pos < I;) {
                let z = O.uint32();
                switch (z >>> 3) {
                    case 1:
                        N.frontgroundId = O.int32();
                        break;
                    case 2:
                        N.amountLogId = O.string();
                        break;
                    case 3:
                        N.currencyName = O.string();
                        break;
                    case 4:
                        N.mixedBalance = O.string();
                        break;
                    case 5:
                        N.generalBalance = O.string();
                        break;
                    case 6:
                        N.bonusBalance = O.string();
                        break;
                    case 7:
                        N.mixedChangeAmount = O.string();
                        break;
                    case 8:
                        N.generalChangeAmount = O.string();
                        break;
                    case 9:
                        N.bonusChangeAmount = O.string();
                        break;
                    case 10:
                        N.groupBalances === $util.emptyObject && (N.groupBalances = {});
                        let K = O.uint32() + O.pos;
                        for (R = "", H = ""; O.pos < K;) {
                            let X = O.uint32();
                            switch (X >>> 3) {
                                case 1:
                                    R = O.string();
                                    break;
                                case 2:
                                    H = O.string();
                                    break;
                                default:
                                    O.skipType(X & 7);
                                    break
                            }
                        }
                        N.groupBalances[R] = H;
                        break;
                    case 11:
                        N.groupChangeAmounts === $util.emptyObject && (N.groupChangeAmounts = {});
                        let W = O.uint32() + O.pos;
                        for (R = "", H = ""; O.pos < W;) {
                            let X = O.uint32();
                            switch (X >>> 3) {
                                case 1:
                                    R = O.string();
                                    break;
                                case 2:
                                    H = O.string();
                                    break;
                                default:
                                    O.skipType(X & 7);
                                    break
                            }
                        }
                        N.groupChangeAmounts[R] = H;
                        break;
                    default:
                        O.skipType(z & 7);
                        break
                }
            }
            return N
        }, L
    })(),
    selectRedDot = createRoot(() => {
        const [L, O] = createStore({
            hasBonus: !1,
            showRedDot: !1
        });
        return onMount(() => {
            const M = localStorage.getItem("selectBonusReddot");
            M !== null && O("showRedDot", JSON.parse(M))
        }), {
            updateBalance: () => {
                if (!L.showRedDot) {
                    const M = L.hasBonus || Object.values(wallet).find(I => I.groupAmount.free_amount.gt(0) || I.groupAmount.sports.gt(0));
                    M || (O("showRedDot", !0), localStorage.setItem("selectBonusReddot", JSON.stringify(!0))), O("hasBonus", !!M)
                }
            },
            clearRedDot: () => {
                O("showRedDot", !1), localStorage.setItem("selectBonusReddot", JSON.stringify(!1))
            },
            store: L
        }
    }),
    Decimal_0 = new Decimal(0),
    DEDU_MOD = 20736e5;
let preDeduId = 0;
const deductions = {},
    DeductionDecimal = new WeakSet,
    PreDeduction = [];

function addPre(L) {
    PreDeduction.push(L), PreDeduction.length > 100 && PreDeduction.shift()
}
const deduction = {
        create(L, O, M, I = "nomal", N = 2e4) {
            let R = Date.now() % DEDU_MOD;
            R === preDeduId && R++;
            const H = {
                id: R,
                amount: Decimal_0,
                currencyName: O,
                type: I,
                update: -1,
                currencyBonusType: M,
                timer: 0
            };
            return addPre(H.id), N > 0 && (H.timer = window.setTimeout(() => updateDeduction(H, void 0, 2), N)), deductions[R] = H, preDeduId = R, updateDeduction(H, L), R
        },
        createStatic(L = 0) {
            return DEDU_MOD + L
        },
        resolve(L, O = !0) {
            const M = deductions[L];
            M && updateDeduction(M, void 0, O ? 1 : 2)
        },
        cancel(L) {
            Object.values(deductions).forEach(O => {
                O.type === L && updateDeduction(O, void 0, 2)
            })
        },
        isResolve(L) {
            return DeductionDecimal.has(L)
        }
    },
    calculateNewBalance = (L, O, M, I) => {
        const N = new Decimal(L || 0).sub(O),
            R = N.eq(M) ? M : N;
        return I && DeductionDecimal.add(R), R
    };

function onBalanceChange({
    frontgroundId: L,
    amountLogId: O,
    currencyName: M,
    mixedBalance: I,
    generalBalance: N,
    bonusBalance: R,
    mixedChangeAmount: H,
    generalChangeAmount: z,
    bonusChangeAmount: K,
    groupBalances: W,
    groupChangeAmounts: X
}) {
    if (!wallet[M]) return;
    const G = deductions[L],
        Y = L >= DEDU_MOD || PreDeduction.indexOf(L) !== -1;
    batch(() => {
        G && updateDeduction(G, G.currencyBonusType ? new Decimal(K || 0) : new Decimal(z || 0), 1), setWallet(M, Z => {
            let Q = Z.generalAmount,
                J = Z.groupAmount;
            if (W.sports) {
                const _ = calculateNewBalance(W.sports, Z.deductingSport, Z.groupAmount.sports, Y);
                J = { ...J,
                    sports: _
                }, Q = Z.generalAmount.eq(new Decimal(N)) ? Z.generalAmount : new Decimal(N), selectRedDot.updateBalance()
            } else if (W.free_amount) {
                const _ = calculateNewBalance(W.free_amount, Z.deductingGame, Z.groupAmount.free_amount, Y);
                J = { ...J,
                    free_amount: _
                }, Q = Z.generalAmount.eq(new Decimal(N)) ? Z.generalAmount : new Decimal(N), selectRedDot.updateBalance()
            } else Q = calculateNewBalance(N, Z.deducting, Z.generalAmount, Y);
            return {
                amount: new Decimal(I || 0),
                generalAmount: Q,
                bonusAmount: new Decimal(R || 0),
                groupAmount: J
            }
        })
    })
}

function updateDeduction(L, O, M = 1) {
    L.update += M, L.update > 1 ? (delete deductions[L.id], L.timer > 0 && window.clearTimeout(L.timer), applyDeduction(L, L.amount.negated())) : applyDeduction(L, O)
}

function formateAmount(L, O, M) {
    const I = L.add(M),
        N = O.sub(M),
        R = N.eq(O) ? O : N;
    return DeductionDecimal.add(R), {
        deducting: I,
        amount: R
    }
}

function applyDeduction(L, O = Decimal_0) {
    O === Decimal_0 || !wallet[L.currencyName] || (L.amount = L.amount.add(O), setWallet(L.currencyName, M => {
        const I = L.currencyBonusType;
        if (I === "game") {
            const {
                deducting: N,
                amount: R
            } = formateAmount(M.deductingGame, M.groupAmount.free_amount, O);
            return {
                deductingGame: N,
                groupAmount: { ...M.groupAmount,
                    free_amount: R
                }
            }
        } else if (I === "sport") {
            const {
                deducting: N,
                amount: R
            } = formateAmount(M.deductingSport, M.groupAmount.sports, O);
            return {
                deductingSport: N,
                groupAmount: { ...M.groupAmount,
                    sports: R
                }
            }
        } else {
            const {
                deducting: N,
                amount: R
            } = formateAmount(M.deducting, M.generalAmount, O);
            return {
                deducting: N,
                generalAmount: R
            }
        }
    }))
}
getSocket("/user").on("balance-change-v2", getSocket().decodeBind(onBalanceChange, BalanceChange));
const currentDepositResource = createRoot(() => useResource(() => account.login ? ["/activity/recharge-bonus/config/current/"] : void 0, async ([L]) => await getHttp().get(L)));

function getNextDepositOption(L, O) {
    const {
        currentUseConfigs: M
    } = L;
    return O ? M.map(I => {
        var N;
        const R = (N = I.fiatRecharge) == null ? void 0 : N[O];
        return R != null ? { ...I,
            minDeposit: R
        } : I
    }) : M
}

function getNextDepositSoleOption(L, O) {
    return getNextDepositOption(L, O)[0] ? ? null
}
const Ctx = createContext(() => !0);

function ActiveProvider(L) {
    const O = useIsActive();

    function M(I) {
        return createMemo(() => (L.force || O()) && I())
    }
    if (L.value !== void 0) return createComponent(Ctx.Provider, {
        get value() {
            return M(() => L.value)
        },
        get children() {
            return L.children
        }
    }); {
        const [I, N] = createSignal(!1), R = children(() => createComponent(Ctx.Provider, {
            get value() {
                return M(I)
            },
            get children() {
                return L.children
            }
        })), H = resolveFirst(R), z = createVisibilityObserver()(H);
        return createComputed(() => N(z())), R
    }
}

function useIsActive() {
    return useContext(Ctx)
}

function useActiveMemo(L) {
    const O = useIsActive();
    let M;
    return () => ((!M || O()) && (M = L()), M)
}

function KeepScroll(L) {
    const O = {
            scrollTop: 0,
            scrollLeft: 0
        },
        M = useIsActive(),
        I = resolveElements(() => L.children),
        N = createMemo(() => {
            const R = I();
            return M() ? R instanceof Array ? R[0] : R : null
        });
    return createComputed(() => {
        const R = N();
        R && onCleanup(() => {
            O.scrollTop = R.scrollTop, O.scrollLeft = R.scrollLeft
        })
    }), createEffect(() => {
        const R = N();
        R && (R.scrollTop = O.scrollTop, R.scrollLeft = O.scrollLeft)
    }), I
}

function createKeepAlive() {
    const L = getOwner();
    let O;

    function M(I, N = () => !0) {
        return O || (O = createRoot(R => ({
            el: createComponent(ActiveProvider, {
                get value() {
                    return N()
                },
                get children() {
                    return I()
                }
            }),
            depose: R
        }), L)), O.el
    }
    return onCleanup(() => {
        O && O.depose()
    }), M
}

function Toggle(L) {
    let O = N => N(),
        M = O;
    L.keepAlive !== !1 && (O = createKeepAlive(), M = createKeepAlive());
    const I = createMemo(() => isBot || !!L.when);
    return createComponent(Show, {
        get when() {
            return I()
        },
        get fallback() {
            return M(() => L.fallback, () => !I())
        },
        get children() {
            return O(() => L.children, () => I())
        }
    })
}
var _tmpl$$D = template("<div>");

function Badge(L) {
    const O = mergeProps({
        overflow: 99,
        type: "number"
    }, L);
    return createComponent(Show, {
        get when() {
            return O.type === "number"
        },
        get fallback() {
            return (() => {
                var M = _tmpl$$D();
                return M.style.setProperty("background-clip", "padding-box, border-box"), M.style.setProperty("background-origin", "padding-box, border-box"), M.style.setProperty("border", "2px solid transparent"), M.style.setProperty("background-image", "linear-gradient(to right,rgb(var(--success)),rgb(var(--success))),linear-gradient(to right,#24EE894D,#24EE894D)"), createRenderEffect(() => className(M, cx("h-3 z-50 w-3 -translate-y-1/2 rounded-full", O.class))), M
            })()
        },
        get children() {
            return createComponent(Toggle, {
                get when() {
                    return O.value !== 0
                },
                get children() {
                    var M = _tmpl$$D();
                    return insert(M, () => Math.min(L.value, O.overflow)), createRenderEffect(I => {
                        var N = cx("badge", O.class),
                            R = O.style;
                        return N !== I.e && className(M, I.e = N), I.t = style(M, R, I.t), I
                    }, {
                        e: void 0,
                        t: void 0
                    }), M
                }
            })
        }
    })
}
var _tmpl$$C = template('<svg><path d="M20.6097 21.616L19.2692 20.2755C17.6782 21.5776 15.6458 22.3597 13.4305 22.3624C8.33103 22.3624 4.19653 18.2279 4.19653 13.1285C4.19653 8.02903 8.33103 3.89453 13.4305 3.89453C18.5299 3.89453 22.6644 8.02903 22.6644 13.1285C22.6617 15.3277 21.8903 17.3468 20.6061 18.9325L21.9492 20.2755L21.9189 20.305L21.9304 20.2952C22.2203 20.0651 22.643 20.0847 22.9115 20.3522L27.5873 25.0281C27.8753 25.3161 27.8753 25.7843 27.5873 26.0733L26.3994 27.2612C26.1113 27.5493 25.6431 27.5493 25.3542 27.2612L20.6783 22.5854C20.4108 22.3178 20.3912 21.8951 20.6212 21.6044L20.6105 21.6151L20.6097 21.616ZM13.4305 6.10536C9.55193 6.10536 6.40736 9.24993 6.40736 13.1285C6.40736 17.007 9.55193 20.1516 13.4305 20.1516C17.309 20.1516 20.4536 17.007 20.4536 13.1285C20.45 9.25082 17.3081 6.10893 13.4305 6.10536Z"></svg>', !1, !0, !1),
    _tmpl$2$l = template('<svg><path d="M6.32321 9.23054L13.0927 16L6.32321 22.7694L9.23051 25.6767L15.9998 18.9074L22.7695 25.6771L25.6768 22.7698L18.9073 16.0004L25.6768 9.23095L22.7695 6.32365L16.0002 13.0929L9.23051 6.32324L6.32321 9.23054Z"></svg>', !1, !0, !1),
    _tmpl$3$c = template('<svg><path d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z"></svg>', !1, !0, !1),
    _tmpl$4$6 = template('<svg><path d="M26.9318 17.3244C26.6017 16.4761 26.6017 15.535 26.9318 14.6866L27.1252 14.1636C27.4645 13.2776 27.4521 12.2953 27.0905 11.4181C26.7288 10.5409 26.0453 9.83507 25.18 9.44514L24.6681 9.18364C23.854 8.8085 23.2006 8.15537 22.8253 7.34172L22.5978 6.83008C22.2076 5.96515 21.5014 5.28201 20.6238 4.92055C19.7461 4.5591 18.7634 4.54668 17.8769 4.88584L17.3537 5.07912C16.5049 5.40908 15.5633 5.40908 14.7145 5.07912L14.1913 4.88584C13.3006 4.53652 12.3096 4.54364 11.4241 4.90572C10.5385 5.2678 9.82664 5.95699 9.43632 6.83008L9.17469 7.34172C8.79936 8.15537 8.14592 8.8085 7.33186 9.18364L6.81996 9.41103C5.9546 9.80096 5.27113 10.5068 4.90949 11.384C4.54786 12.2612 4.53543 13.2434 4.87476 14.1295L5.06814 14.6525C5.39826 15.5008 5.39826 16.442 5.06814 17.2903L4.87476 17.8134C4.53543 18.6994 4.54786 19.6816 4.90949 20.5589C5.27113 21.4361 5.9546 22.1419 6.81996 22.5318L7.33186 22.7592C8.15779 23.1512 8.81281 23.8301 9.17469 24.6694L9.4022 25.181C9.79232 26.0459 10.4985 26.7291 11.3762 27.0905C12.2538 27.452 13.2365 27.4644 14.123 27.1253L14.6463 26.932C15.495 26.602 16.4367 26.602 17.2854 26.932L17.8087 27.1253C18.6952 27.4644 19.6779 27.452 20.5555 27.0905C21.4332 26.7291 22.1394 26.0459 22.5295 25.181L22.757 24.6694C23.1492 23.8438 23.8285 23.1891 24.6681 22.8275L25.18 22.6001C26.0453 22.2101 26.7288 21.5043 27.0905 20.6271C27.4521 19.7499 27.4645 18.7676 27.1252 17.8816L26.9318 17.3244ZM20.9483 13.4246L14.5553 19.8144C14.5042 19.8688 14.4425 19.9122 14.3741 19.9418C14.3056 19.9714 14.2318 19.9867 14.1571 19.9867C14.0825 19.9867 14.0087 19.9714 13.9402 19.9418C13.8717 19.9122 13.8101 19.8688 13.759 19.8144L11.0516 17.1425C10.9983 17.0897 10.956 17.0268 10.9271 16.9575C10.8983 16.8883 10.8834 16.8139 10.8834 16.7389C10.8834 16.6639 10.8983 16.5895 10.9271 16.5203C10.956 16.451 10.9983 16.3881 11.0516 16.3353L11.6545 15.7327C11.7056 15.6783 11.7673 15.6349 11.8358 15.6053C11.9042 15.5757 11.9781 15.5604 12.0527 15.5604C12.1273 15.5604 12.2011 15.5757 12.2696 15.6053C12.3381 15.6349 12.3998 15.6783 12.4508 15.7327L14.1571 17.4268L19.5491 12.0375C19.6554 11.9333 19.7984 11.875 19.9473 11.875C20.0961 11.875 20.2391 11.9333 20.3454 12.0375L20.9483 12.6401C21.0491 12.7458 21.1054 12.8863 21.1054 13.0323C21.1054 13.1784 21.0491 13.3189 20.9483 13.4246Z"></svg>', !1, !0, !1),
    _tmpl$5$4 = template('<svg><path fill-rule=evenodd d="M28.0002 16C28.0002 22.6274 22.6276 28 16.0002 28C9.37274 28 4.00015 22.6274 4.00015 16C4.00015 9.37258 9.37274 4 16.0002 4C22.6276 4 28.0002 9.37258 28.0002 16ZM20.9935 12.5801L17.5753 15.9983L20.9935 19.4165C21.4245 19.8475 21.4245 20.5608 20.9935 20.9918C20.7706 21.2147 20.4882 21.3188 20.2058 21.3188C19.9234 21.3188 19.6411 21.2147 19.4181 20.9918L16 17.5736L12.5818 20.9918C12.3589 21.2147 12.0765 21.3188 11.7941 21.3188C11.5118 21.3188 11.2294 21.2147 11.0065 20.9918C10.5755 20.5608 10.5755 19.8475 11.0065 19.4165L14.4246 15.9983L11.0065 12.5801C10.5755 12.1492 10.5755 11.4358 11.0065 11.0048C11.4375 10.5738 12.1508 10.5738 12.5818 11.0048L16 14.423L19.4181 11.0048C19.8491 10.5738 20.5625 10.5738 20.9935 11.0048C21.4245 11.4358 21.4245 12.1492 20.9935 12.5801Z"></svg>', !1, !0, !1),
    _tmpl$6$1 = template('<svg><path d="M17.7759 4.46932C18.3453 4.79163 18.8161 5.2624 19.1384 5.83183L28.6365 22.6151C29.6175 24.3487 29.0076 26.5494 27.274 27.5314C26.7318 27.8377 26.1201 27.9993 25.4971 27.9993H6.50093C4.50886 27.9993 2.89359 26.384 2.89359 24.392C2.89359 23.769 3.05427 23.1573 3.36154 22.6151L12.8596 5.83183C13.8406 4.09816 16.0422 3.48738 17.7759 4.46932ZM15.9821 21.6115C15.1185 21.6115 14.4176 22.3275 14.4176 23.2118C14.4176 24.096 15.1176 24.812 15.9821 24.812C16.8456 24.812 17.5466 24.096 17.5466 23.2118C17.5466 22.3275 16.8466 21.6115 15.9821 21.6115ZM15.9821 10.9436C15.1185 10.9436 14.4176 11.6436 14.4176 12.5081V18.9805C14.4176 19.844 15.1176 20.545 15.9821 20.545C16.8466 20.545 17.5466 19.845 17.5466 18.9805V12.5081C17.5466 11.6446 16.8466 10.9436 15.9821 10.9436Z"></svg>', !1, !0, !1),
    _tmpl$7 = template('<svg><path d="M16 3.99951C22.6277 3.99951 28.0005 9.3723 28.0005 16C28.0005 22.6277 22.6277 28.0005 16 28.0005C9.3723 28.0005 3.99951 22.6277 3.99951 16C3.99951 9.3723 9.3723 3.99951 16 3.99951ZM15.8389 20.2567C15.4428 20.2567 15.1188 20.3827 14.8488 20.6348C14.5788 20.8868 14.4528 21.2108 14.4528 21.6068C14.4528 22.0028 14.5788 22.3268 14.8488 22.5788C15.1188 22.8308 15.4428 22.9749 15.8389 22.9749C16.2349 22.9749 16.5589 22.8489 16.8289 22.5968C17.0989 22.3448 17.2429 22.0028 17.2429 21.6068C17.2429 21.2108 17.0989 20.8868 16.8469 20.6348C16.5769 20.3827 16.2349 20.2567 15.8389 20.2567ZM15.7994 8.7397C15.7763 8.7397 15.7531 8.74056 15.7308 8.74142C14.8308 8.77913 14.1322 9.53945 14.1708 10.4395L14.5008 18.2501H17.0646L17.4229 10.4386C17.4238 10.4138 17.4246 10.3889 17.4246 10.3641C17.4246 9.46659 16.6969 8.7397 15.8003 8.7397H15.7994Z"></svg>', !1, !0, !1),
    _tmpl$8 = template('<svg><path d="M16 3.82617C22.7235 3.82617 28.174 9.27663 28.174 16.0001C28.174 22.7236 22.7235 28.1741 16 28.1741C9.27649 28.1741 3.82603 22.7236 3.82603 16.0001C3.82603 9.27663 9.27649 3.82617 16 3.82617ZM16 6.43488C10.7174 6.43488 6.43474 10.7175 6.43474 16.0001C6.43474 21.2828 10.7174 25.5654 16 25.5654C21.2826 25.5654 25.5653 21.2828 25.5653 16.0001C25.5653 10.7175 21.2826 6.43488 16 6.43488ZM15.96 21.1445C16.68 21.1445 17.2644 21.7289 17.2644 22.4489C17.2644 23.1689 16.68 23.7532 15.96 23.7532C15.24 23.7532 14.6556 23.1689 14.6556 22.4489C14.6556 21.7289 15.24 21.1445 15.96 21.1445ZM16.1896 8.89315C17.5461 8.89315 18.6522 9.24793 19.487 9.99924C20.3218 10.7297 20.7392 11.7314 20.7392 13.0045C20.7392 14.048 20.4678 14.9036 19.967 15.5714C19.7791 15.7801 19.1739 16.3436 18.1722 17.2201C17.7965 17.5332 17.5252 17.888 17.3374 18.2636C17.1583 18.621 17.0565 18.9941 17.0304 19.4088L17.0244 19.6202V19.9123H14.6243V19.6202C14.6243 18.8271 14.7496 18.1384 15.0417 17.5749C15.2983 17.0428 16.0383 16.2314 17.2626 15.1227L17.4835 14.9245L17.7339 14.6323C18.1096 14.1732 18.2974 13.6723 18.2974 13.1506C18.2974 12.4619 18.0887 11.9192 17.713 11.5227C17.3165 11.1262 16.753 10.9384 16.0435 10.9384C15.1252 10.9384 14.4783 11.2097 14.0817 11.794C13.7591 12.2306 13.5922 12.8393 13.5643 13.6045L13.56 13.8393H11.1808C11.1808 12.2949 11.6191 11.0845 12.5374 10.2079C13.4348 9.33141 14.6452 8.89315 16.1896 8.89315Z"></svg>', !1, !0, !1),
    _tmpl$9 = template('<svg><path d="M17.0001 4.37061C15.8647 4.37061 14.9443 5.29101 14.9443 6.42638L14.9443 13.944H7.42668C6.2913 13.944 5.3709 14.8644 5.3709 15.9998C5.3709 17.1352 6.2913 18.0556 7.42667 18.0556H14.9441V25.5736C14.9441 26.709 15.8645 27.6294 16.9999 27.6294C18.1353 27.6294 19.0557 26.709 19.0557 25.5736V18.0559L26.5733 18.0559C27.7087 18.0559 28.6291 17.1355 28.6291 16.0002C28.6291 14.8648 27.7087 13.9444 26.5733 13.9444L19.0559 13.9444L19.0559 6.42638C19.0559 5.291 18.1355 4.37061 17.0001 4.37061Z"></svg>', !1, !0, !1),
    _tmpl$10 = template('<svg><path d="M26.7278 8.24791C27.5088 9.02896 27.5088 10.2953 26.7278 11.0763L14.9903 22.8136C14.2092 23.5947 12.9429 23.5947 12.1619 22.8136L5.24798 15.8998C4.46693 15.1188 4.46692 13.8525 5.24796 13.0714C6.029 12.2904 7.29533 12.2903 8.07639 13.0714L13.5761 18.571L23.8993 8.24788C24.6804 7.46684 25.9467 7.46685 26.7278 8.24791Z"></svg>', !1, !0, !1),
    _tmpl$11 = template('<svg><path d="M7.42668 13.9443H14.9443L19.0559 13.9447L26.5733 13.9447C27.7087 13.9447 28.6291 14.8651 28.6291 16.0005C28.6291 17.1358 27.7087 18.0562 26.5733 18.0562L19.0557 18.0562L14.9441 18.0559H7.42667C6.2913 18.0559 5.3709 17.1355 5.3709 16.0001C5.3709 14.8647 6.2913 13.9443 7.42668 13.9443Z"></svg>', !1, !0, !1),
    _tmpl$12 = template('<svg><path d="M11.7438 6.25969L11.7412 6.36956C11.7412 8.74747 13.6936 10.6754 16.1012 10.6754C18.5087 10.6754 20.4611 8.74747 20.4611 6.36956C20.4611 6.33642 20.4611 6.30329 20.4603 6.27015C24.5438 6.5457 27.7719 9.94559 27.7719 14.1006V20.7958C27.7719 25.1304 24.2586 28.6437 19.924 28.6437H12.0761C7.7414 28.6437 4.22815 25.1304 4.22815 20.7958V14.1006C4.22815 9.87757 7.56351 6.43321 11.7438 6.25969ZM12.6132 18.3097H10.8692C10.3879 18.3097 9.99724 18.7004 9.99724 19.1817V20.8821C9.99724 21.3634 10.3879 21.7541 10.8692 21.7541H12.6132C13.0946 21.7541 13.4852 21.3634 13.4852 20.8821V19.1817C13.4852 18.7004 13.0946 18.3097 12.6132 18.3097ZM16.9732 18.3097H15.2292C14.7478 18.3097 14.3572 18.7004 14.3572 19.1817V20.8821C14.3572 21.3634 14.7478 21.7541 15.2292 21.7541H16.9732C17.4545 21.7541 17.8452 21.3634 17.8452 20.8821V19.1817C17.8452 18.7004 17.4545 18.3097 16.9732 18.3097ZM21.3331 18.3097H19.5891C19.1078 18.3097 18.7171 18.7004 18.7171 19.1817V20.8821C18.7171 21.3634 19.1078 21.7541 19.5891 21.7541H21.3331C21.8145 21.7541 22.2051 21.3634 22.2051 20.8821V19.1817C22.2051 18.7004 21.8145 18.3097 21.3331 18.3097ZM12.6132 14.0038H10.8692C10.3879 14.0038 9.99724 14.3945 9.99724 14.8758V16.5762C9.99724 17.0575 10.3879 17.4482 10.8692 17.4482H12.6132C13.0946 17.4482 13.4852 17.0575 13.4852 16.5762V14.8758C13.4852 14.3945 13.0946 14.0038 12.6132 14.0038ZM16.9732 14.0038H15.2292C14.7478 14.0038 14.3572 14.3945 14.3572 14.8758V16.5762C14.3572 17.0575 14.7478 17.4482 15.2292 17.4482H16.9732C17.4545 17.4482 17.8452 17.0575 17.8452 16.5762V14.8758C17.8452 14.3945 17.4545 14.0038 16.9732 14.0038ZM21.3331 14.0038H19.5891C19.1078 14.0038 18.7171 14.3945 18.7171 14.8758V16.5762C18.7171 17.0575 19.1078 17.4482 19.5891 17.4482H21.3331C21.8145 17.4482 22.2051 17.0575 22.2051 16.5762V14.8758C22.2051 14.3945 21.8145 14.0038 21.3331 14.0038ZM16.0872 3.35596C17.7728 3.35596 19.1392 4.7058 19.1392 6.37043C19.1392 8.03506 17.7728 9.3849 16.0872 9.3849C14.4017 9.3849 13.0353 8.03506 13.0353 6.37043C13.0353 4.7058 14.4017 3.35596 16.0872 3.35596Z"></svg>', !1, !0, !1),
    _tmpl$13 = template('<svg><path d="M23.4576 12.8027C24.2971 12.8027 24.9774 13.4831 24.9774 14.3226C24.9774 14.4305 24.9661 14.5375 24.9435 14.6419L22.8712 24.2744C22.404 26.4467 20.4831 27.9988 18.2603 27.9988H12.6628C10.4399 27.9988 8.51988 26.4476 8.05183 24.2744L5.97952 14.6419C5.80292 13.8215 6.32491 13.0133 7.14531 12.8367C7.25057 12.814 7.35758 12.8027 7.46459 12.8027H23.4567H23.4576ZM17.9044 4.11679C20.825 4.63182 22.3257 6.46488 22.2517 9.28364L26.5486 10.0414C27.1898 10.1545 27.6178 10.7661 27.5047 11.4073L27.3864 12.078C27.2733 12.7192 26.6617 13.1472 26.0205 13.0341L5.89514 9.48548C5.25396 9.37238 4.82592 8.76078 4.93902 8.1196L5.05734 7.44884C5.17044 6.80766 5.78204 6.37962 6.42322 6.49272L12.0538 7.48451C12.9481 4.81104 14.9848 3.60176 17.9053 4.11592L17.9044 4.11679ZM14.3236 7.88557L19.9793 8.88258C19.928 7.40708 19.1433 6.64932 17.5077 6.36135C15.8721 6.07339 14.876 6.51621 14.3227 7.88557H14.3236Z"></svg>', !1, !0, !1),
    _tmpl$14 = template('<svg><path fill-rule=evenodd clip-rule=evenodd d="M23.3137 24.1394C23.7671 24.1394 24.1367 23.7698 24.1367 23.3164V14.9523H26.6674V23.3332C26.6575 25.1742 25.1548 26.6663 23.3137 26.6663H8.6469C6.81269 26.6457 5.3313 25.1498 5.3313 23.3126V8.65263C5.34883 6.81918 6.84774 5.33398 8.685 5.33398H17.0452V7.86469H8.685C8.23159 7.86469 7.86201 8.23428 7.86201 8.68768V23.3164C7.86201 23.7698 8.23159 24.1394 8.685 24.1394H23.3137ZM19.1338 7.86469V5.33398H26.6681V12.8682H24.1373V9.65699L13.4758 20.3148L11.6873 18.5263L22.345 7.86469H19.1338Z"></svg>', !1, !0, !1),
    _tmpl$15 = template('<svg><path d="M12.0434 17.0183C12.9801 17.0183 13.7395 17.7778 13.7395 18.7145V25.3283C13.7395 26.265 12.9801 27.0244 12.0434 27.0244H10.2648C8.85937 27.0244 7.721 25.8852 7.721 24.4806V19.5629C7.721 18.1575 8.86019 17.0191 10.2648 17.0191H12.0434V17.0183ZM21.8077 17.0183C23.2132 17.0183 24.3515 18.1575 24.3515 19.5621V24.4798C24.3515 25.8852 23.2123 27.0236 21.8077 27.0236H20.0291C19.0925 27.0236 18.333 26.2641 18.333 25.3275V18.7136C18.333 17.777 19.0925 17.0175 20.0291 17.0175L21.8077 17.0183ZM15.9999 4.97559C22.6881 4.97559 28.1292 10.2983 28.2926 16.9261L28.2966 17.2331V22.2398C28.2966 22.9307 27.7348 23.4909 27.0415 23.4909C26.3915 23.4909 25.8574 22.9985 25.7929 22.368L25.7863 22.2398V17.2331C25.7863 11.845 21.4043 7.47772 15.9991 7.47772C10.6853 7.47772 6.36132 11.6988 6.21596 16.9603L6.21188 17.2331V22.2553C6.21188 22.9462 5.65004 23.5064 4.95673 23.5064C4.30669 23.5064 3.77262 23.014 3.70893 22.3835L3.70239 22.2553V17.2331C3.70239 10.4641 9.20807 4.9764 15.9991 4.9764L15.9999 4.97559Z"></svg>', !1, !0, !1),
    _tmpl$16 = template('<svg><path d="M16 4C9.3726 4 4 9.3726 4 16C4 22.6274 9.3726 28 16 28C22.6274 28 28 22.6274 28 16C28 9.3726 22.6274 4 16 4ZM25.1671 12.0007C25.7022 13.2252 26.0008 14.578 26.0008 16.001C26.0008 17.424 25.7022 18.7768 25.1671 20.0013H20.6577C20.8782 18.7607 20.9984 17.412 20.9984 16.001C20.9984 14.59 20.8781 13.2413 20.6577 12.0007H25.1671ZM13.0018 16.001C13.0018 14.5641 13.112 13.2052 13.3125 12.0007H18.6857C18.8862 13.2052 18.9984 14.564 18.9984 16.001C18.9984 17.4381 18.8862 18.7969 18.6857 20.0014H13.3146C13.1142 18.7969 13.002 17.4381 13.002 16.001H13.0018ZM24.0007 10.0004H20.1927C19.7277 8.4392 19.0904 7.15453 18.3388 6.27668C20.6017 6.82169 22.6039 8.1385 24.0007 10.0004ZM16 7.00222C16.8878 7.00222 17.6875 8.16266 18.2367 10.0025H13.7634C14.3125 8.16073 15.1123 7.00222 16.0001 7.00222H16ZM13.6611 6.27879C12.9095 7.15458 12.2722 8.44329 11.8092 10.0025H8.0012C9.3974 8.14096 11.3989 6.82423 13.661 6.27879H13.6611ZM6.83291 12.0007H11.3423C11.1218 13.2413 11.0015 14.59 11.0015 16.001C11.0015 17.412 11.1219 18.7607 11.3423 20.0013H6.83286C6.28161 18.7398 5.99776 17.3777 5.99915 16.001C5.99915 14.578 6.29779 13.2252 6.83286 12.0007H6.83291ZM7.9994 22.0015H11.8074C12.2724 23.5627 12.9097 24.8474 13.6612 25.7253C11.3983 25.1802 9.3962 23.8634 7.9994 22.0015ZM16 24.9997C15.1122 24.9997 14.3125 23.8393 13.7633 21.9994H18.2366C17.6835 23.8412 16.8878 24.9997 15.9999 24.9997H16ZM18.3388 25.7233C19.0904 24.8475 19.7277 23.5588 20.1908 21.9995H23.9988C22.6025 23.8611 20.6011 25.1779 18.3389 25.7233H18.3388Z"></svg>', !1, !0, !1),
    _tmpl$17 = template('<svg><path d="M16.0004 4.19043C22.5223 4.19043 27.8094 9.47748 27.8094 15.9994C27.8094 22.5214 22.5223 27.8084 16.0004 27.8084C9.47846 27.8084 4.19141 22.5214 4.19141 15.9994C4.19141 9.47748 9.47846 4.19043 16.0004 4.19043ZM16.0004 6.72093C10.8761 6.72093 6.7219 10.8752 6.7219 15.9994C6.7219 21.1237 10.8761 25.2779 16.0004 25.2779C21.1247 25.2779 25.2789 21.1237 25.2789 15.9994C25.2789 10.8752 21.1247 6.72093 16.0004 6.72093ZM16.6684 9.25143V11.1544C17.7616 11.2623 18.8143 11.6402 19.5971 12.1531L18.7738 13.921C17.7751 13.3272 16.5875 12.9493 15.8317 12.9493C15.1164 12.9493 14.6306 13.2057 14.6306 13.7186C14.6306 15.4596 19.6646 14.4879 19.6511 17.8889C19.6511 19.5219 18.3959 20.4936 16.6684 20.696V22.7069H15.0489V20.669C13.8208 20.4936 12.6466 19.9672 11.7829 19.2385L12.6331 17.4975C13.6049 18.3612 14.9814 18.9146 15.9802 18.9146C16.8574 18.9146 17.3837 18.5907 17.3837 18.0103C17.3837 16.2289 12.3497 17.268 12.3497 13.921C12.3497 12.477 13.4024 11.4783 15.0489 11.2083V9.25143H16.6684Z"></svg>', !1, !0, !1),
    _tmpl$18 = template('<svg><path d="M22.824 2.238c3.064 0 5.548 2.484 5.548 5.548v0 11.901c0 2.319-1.881 4.2-4.2 4.2v0l-1.545-0.001v1.676c0 2.32-1.88 4.199-4.199 4.199h-10.6c-2.32 0-4.199-1.88-4.199-4.199v-13.25c0-2.319 1.88-4.2 4.199-4.2l1.544-0.001 0.001-1.673c0-2.251 1.771-4.089 3.996-4.195l0.203-0.005zM22.824 4.716h-9.251c-0.95 0-1.723 0.773-1.723 1.723v0 1.673l6.788 0.001c2.203 0 3.989 1.786 3.989 3.99v9.307h1.545c0.902 0 1.645-0.698 1.717-1.582l0.006-0.141v-11.901c0-1.693-1.377-3.070-3.070-3.070v0z"></svg>', !1, !0, !1),
    _tmpl$19 = template('<svg><path d="M26.678 25.601c0 0.595-0.485 1.080-1.080 1.080h-19.197c-0.595 0-1.080-0.485-1.080-1.080v-19.197c0-0.595 0.485-1.080 1.080-1.080h10.971v-3.321h-10.971c-2.411 0-4.378 1.949-4.401 4.355v0 19.238c0 2.411 1.944 4.374 4.351 4.401v0h19.247c2.416 0 4.388-1.958 4.401-4.374v-10.998h-3.321v10.976z"></svg>', !1, !0, !1),
    _tmpl$20 = template('<svg><path d="M20.113 2.003v3.321h4.214l-13.986 13.991 2.347 2.347 13.991-13.986v4.214h3.321v-9.887z"></svg>', !1, !0, !1),
    _tmpl$21 = template('<svg><path d="M12.926 30c-6.034 0-10.925-4.892-10.925-10.925v-6.149c0-6.034 4.892-10.925 10.925-10.925h6.149c6.033 0 10.925 4.892 10.925 10.925v6.149c0 6.034-4.892 10.925-10.925 10.925h-6.149zM12.926 27.62h6.149c4.721 0 8.546-3.827 8.546-8.546v-6.149c0-4.721-3.827-8.546-8.546-8.546h-6.149c-4.721 0-8.546 3.827-8.546 8.546v6.149c0 4.721 3.827 8.546 8.546 8.546zM16.001 12.841c-0.713 0-1.303-0.53-1.396-1.217l-0.012-0.191v-0.090c0-0.778 0.631-1.409 1.409-1.409 0.713 0 1.303 0.53 1.396 1.217l0.012 0.191v0.090c0 0.778-0.631 1.409-1.409 1.409zM16.001 22.874c-0.713 0-1.303-0.53-1.396-1.217l-0.012-0.191v-6.047c0-0.778 0.631-1.409 1.409-1.409 0.713 0 1.303 0.53 1.396 1.217l0.012 0.191v6.047c0 0.779-0.631 1.409-1.409 1.409z"></svg>', !1, !0, !1),
    _tmpl$22 = template("<svg>");
const icons = {
    Search: () => _tmpl$$C(),
    Close: () => _tmpl$2$l(),
    Arrow: () => _tmpl$3$c(),
    Success: () => _tmpl$4$6(),
    Error: () => _tmpl$5$4(),
    Caution: () => _tmpl$6$1(),
    Attention: () => _tmpl$7(),
    Help: () => _tmpl$8(),
    Add: () => _tmpl$9(),
    Check: () => _tmpl$10(),
    Minus: () => _tmpl$11(),
    Calendar: () => _tmpl$12(),
    Delete: () => _tmpl$13(),
    Share: () => _tmpl$14(),
    LiveSupport: () => _tmpl$15(),
    Language: () => _tmpl$16(),
    Currency: () => _tmpl$17(),
    Copy: () => _tmpl$18(),
    NewWindow: () => [_tmpl$19(), _tmpl$20()],
    Info: () => _tmpl$21()
};

function Icon(L) {
    const [, O] = splitProps(L, ["name", "class", "viewBox"]);
    return (() => {
        var M = _tmpl$22();
        return spread(M, mergeProps({
            get class() {
                return cx("icon", L.class)
            },
            get viewBox() {
                return L.viewBox || "0 0 32 32"
            }
        }, O), !0, !0), insert(M, createComponent(Switch$1, {
            get children() {
                return createComponent(Match, {
                    get when() {
                        return L.name
                    },
                    children: I => {
                        const N = I();
                        return icons[N]()
                    }
                })
            }
        })), M
    })()
}
var _tmpl$$B = template("<div>"),
    _tmpl$2$k = template('<span class="text-primary_brand text-sm font-normal">');

function Breadcrumb(L) {
    const [O, M] = splitProps(L, ["list", "class"]);
    return (() => {
        var I = _tmpl$$B();
        return spread(I, mergeProps(M, {
            get class() {
                return cx("px-4 h-10 leading-10 rounded !inline-flex center ellipsis bg-primary w-max", O.class)
            }
        }), !1, !0), insert(I, createComponent(Index, {
            get each() {
                return O.list
            },
            children: (N, R) => [R > 0 && createComponent(Icon, {
                class: "!w-3 !h-3 mx-1 mt-0.5",
                name: "Arrow"
            }), memo$2(() => memo$2(() => R !== O.list.length - 1)() ? createComponent(A$2, {
                class: "text-secondary cursor-pointer",
                get href() {
                    return N().path
                },
                get title() {
                    return N().label
                },
                get children() {
                    return N().label
                }
            }) : (() => {
                var H = _tmpl$2$k();
                return insert(H, () => N().label), H
            })())]
        })), I
    })()
}
var _tmpl$$A = template('<svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"><circle class=opacity-25 cx=12 cy=12 r=10 stroke=currentColor stroke-width=4></circle><path class=opacity-75 fill=currentColor d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">'),
    _tmpl$2$j = template('<div class="size-full flex-1 center">');

function Loading(L) {
    const O = createMemo(() => {
        var M, I;
        return ((M = L.class) == null ? void 0 : M.includes("text-")) || ((I = L.class) == null ? void 0 : I.includes("fill-"))
    });
    return (() => {
        var M = _tmpl$$A();
        return spread(M, mergeProps(L, {
            get class() {
                return memo$2(() => !!O())() ? cx("loading", L.class) : cx("loading text-brand", L.class)
            }
        }), !0, !0), M
    })()
}
const getFullLoading = createRoot(() => createRootPool(() => (() => {
    var L = _tmpl$2$j();
    return insert(L, createComponent(Loading, {})), L
})()));
var _tmpl$$z = template("<button>");
const types$1 = {
    brand: "button-brand",
    second: "button-second",
    input: "button-input"
};

function Button(L) {
    const [O, M] = splitProps(L, ["type", "onClick", "size"]), [I, N] = createSignal(!1), R = createMemo(() => L.size || !env.mobile && "m"), H = () => {
        if (L.disabled) return;
        const z = L.onClick;
        return z && (K => {
            if (!I()) {
                const W = z(K);
                W instanceof Promise && (N(!0), W.then(() => N(!1)))
            }
        })
    };
    return (() => {
        var z = _tmpl$$z();
        return spread(z, mergeProps(M, {
            get class() {
                return cx("button", types$1[O.type], R() && `button-${R()}`, L.class)
            },
            get type() {
                return L.submit ? "submit" : "button"
            },
            get onClick() {
                return H()
            }
        }), !1, !0), insert(z, createComponent(Toggle, {
            get when() {
                return !I()
            },
            get fallback() {
                return createComponent(Loading, {
                    class: "text-alw_white"
                })
            },
            get children() {
                return L.children
            }
        })), z
    })()
}
var n = function() {
    return n = Object.assign || function(L) {
        for (var O, M = 1, I = arguments.length; M < I; M++)
            for (var N in O = arguments[M]) Object.prototype.hasOwnProperty.call(O, N) && (L[N] = O[N]);
        return L
    }, n.apply(this, arguments)
};

function t(L, O, M) {
    for (var I, N = 0, R = O.length; N < R; N++) !I && N in O || (I || (I = Array.prototype.slice.call(O, 0, N)), I[N] = O[N]);
    return L.concat(I || Array.prototype.slice.call(O))
}

function i(L) {
    return Array.prototype.slice.call(L)
}

function e(L, O) {
    var M = Math.floor(L);
    return M === O || M + 1 === O ? L : O
}

function r() {
    return Date.now()
}

function a(L, O, M) {
    if (O = "data-keen-slider-" + O, M === null) return L.removeAttribute(O);
    L.setAttribute(O, M || "")
}

function o(L, O) {
    return O = O || document, typeof L == "function" && (L = L(O)), Array.isArray(L) ? L : typeof L == "string" ? i(O.querySelectorAll(L)) : L instanceof HTMLElement ? [L] : L instanceof NodeList ? i(L) : []
}

function u(L) {
    L.raw && (L = L.raw), L.cancelable && !L.defaultPrevented && L.preventDefault()
}

function s(L) {
    L.raw && (L = L.raw), L.stopPropagation && L.stopPropagation()
}

function c() {
    var L = [];
    return {
        add: function(O, M, I, N) {
            O.addListener ? O.addListener(I) : O.addEventListener(M, I, N), L.push([O, M, I, N])
        },
        input: function(O, M, I, N) {
            this.add(O, M, function(R) {
                return function(H) {
                    H.nativeEvent && (H = H.nativeEvent);
                    var z = H.changedTouches || [],
                        K = H.targetTouches || [],
                        W = H.detail && H.detail.x ? H.detail : null;
                    return R({
                        id: W ? W.identifier ? W.identifier : "i" : K[0] ? K[0] ? K[0].identifier : "e" : "d",
                        idChanged: W ? W.identifier ? W.identifier : "i" : z[0] ? z[0] ? z[0].identifier : "e" : "d",
                        raw: H,
                        x: W && W.x ? W.x : K[0] ? K[0].screenX : W ? W.x : H.pageX,
                        y: W && W.y ? W.y : K[0] ? K[0].screenY : W ? W.y : H.pageY
                    })
                }
            }(I), N)
        },
        purge: function() {
            L.forEach(function(O) {
                O[0].removeListener ? O[0].removeListener(O[2]) : O[0].removeEventListener(O[1], O[2], O[3])
            }), L = []
        }
    }
}

function d(L, O, M) {
    return Math.min(Math.max(L, O), M)
}

function l(L) {
    return (L > 0 ? 1 : 0) - (L < 0 ? 1 : 0) || +L
}

function f(L) {
    var O = L.getBoundingClientRect();
    return {
        height: e(O.height, L.offsetHeight),
        width: e(O.width, L.offsetWidth)
    }
}

function p(L, O, M, I) {
    var N = L && L[O];
    return N == null ? M : I && typeof N == "function" ? N() : N
}

function v(L) {
    return Math.round(1e6 * L) / 1e6
}

function h(L) {
    var O, M, I, N, R, H;

    function z(Y) {
        H || (H = Y), K(!0);
        var Z = Y - H;
        Z > I && (Z = I);
        var Q = N[M];
        if (Q[3] < Z) return M++, z(Y);
        var J = Q[2],
            _ = Q[4],
            ee = Q[0],
            te = Q[1] * (0, Q[5])(_ === 0 ? 1 : (Z - J) / _);
        if (te && L.track.to(ee + te), Z < I) return X();
        H = null, K(!1), W(null), L.emit("animationEnded")
    }

    function K(Y) {
        O.active = Y
    }

    function W(Y) {
        O.targetIdx = Y
    }

    function X() {
        var Y;
        Y = z, R = window.requestAnimationFrame(Y)
    }

    function G() {
        var Y;
        Y = R, window.cancelAnimationFrame(Y), K(!1), W(null), H && L.emit("animationStopped"), H = null
    }
    return O = {
        active: !1,
        start: function(Y) {
            if (G(), L.track.details) {
                var Z = 0,
                    Q = L.track.details.position;
                M = 0, I = 0, N = Y.map(function(J) {
                    var _, ee = Number(Q),
                        te = (_ = J.earlyExit) !== null && _ !== void 0 ? _ : J.duration,
                        ie = J.easing,
                        re = J.distance * ie(te / J.duration) || 0;
                    Q += re;
                    var oe = I;
                    return I += te, Z += re, [ee, J.distance, oe, I, J.duration, ie]
                }), W(L.track.distToIdx(Z)), X(), L.emit("animationStarted")
            }
        },
        stop: G,
        targetIdx: null
    }
}

function m(L) {
    var O, M, I, N, R, H, z, K, W, X, G, Y, Z, Q, J = 1 / 0,
        _ = [],
        ee = null,
        te = 0;

    function ie(ce) {
        pe(te + ce)
    }

    function re(ce) {
        var fe = oe(te + ce).abs;
        return se(fe) ? fe : null
    }

    function oe(ce) {
        var fe = Math.floor(Math.abs(v(ce / M))),
            ue = v((ce % M + M) % M);
        ue === M && (ue = 0);
        var ye = l(ce),
            ve = z.indexOf(t([], z).reduce(function(xe, Se) {
                return Math.abs(Se - ue) < Math.abs(xe - ue) ? Se : xe
            })),
            Ce = ve;
        return ye < 0 && fe++, ve === H && (Ce = 0, fe += ye > 0 ? 1 : -1), {
            abs: Ce + fe * H * ye,
            origin: ve,
            rel: Ce
        }
    }

    function ae(ce, fe, ue) {
        var ye;
        if (fe || !me()) return ne(ce, ue);
        if (!se(ce)) return null;
        var ve = oe(ue ? ? te),
            Ce = ve.abs,
            xe = ce - ve.rel,
            Se = Ce + xe;
        ye = ne(Se);
        var ke = ne(Se - H * l(xe));
        return (ke !== null && Math.abs(ke) < Math.abs(ye) || ye === null) && (ye = ke), v(ye)
    }

    function ne(ce, fe) {
        if (fe == null && (fe = v(te)), !se(ce) || ce === null) return null;
        ce = Math.round(ce);
        var ue = oe(fe),
            ye = ue.abs,
            ve = ue.rel,
            Ce = ue.origin,
            xe = le(ce),
            Se = (fe % M + M) % M,
            ke = z[Ce],
            je = Math.floor((ce - (ye - ve)) / H) * M;
        return v(ke - Se - ke + z[xe] + je + (Ce === H ? M : 0))
    }

    function se(ce) {
        return he(ce) === ce
    }

    function he(ce) {
        return d(ce, W, X)
    }

    function me() {
        return N.loop
    }

    function le(ce) {
        return (ce % H + H) % H
    }

    function pe(ce) {
        var fe;
        fe = ce - te, _.push({
            distance: fe,
            timestamp: r()
        }), _.length > 6 && (_ = _.slice(-6)), te = v(ce);
        var ue = de().abs;
        if (ue !== ee) {
            var ye = ee !== null;
            ee = ue, ye && L.emit("slideChanged")
        }
    }

    function de(ce) {
        var fe = ce ? null : function() {
            if (H) {
                var ue = me(),
                    ye = ue ? (te % M + M) % M : te,
                    ve = (ue ? te % M : te) - R[0][2],
                    Ce = 0 - (ve < 0 && ue ? M - Math.abs(ve) : ve),
                    xe = 0,
                    Se = oe(te),
                    ke = Se.abs,
                    je = Se.rel,
                    at = R[je][2],
                    ct = R.map(function(Je, Et) {
                        var Te = Ce + xe;
                        (Te < 0 - Je[0] || Te > 1) && (Te += (Math.abs(Te) > M - 1 && ue ? M : 0) * l(-Te));
                        var lt = Et - je,
                            Ct = l(lt),
                            _e = lt + ke;
                        ue && (Ct === -1 && Te > at && (_e += H), Ct === 1 && Te < at && (_e -= H), G !== null && _e < G && (Te += M), Y !== null && _e > Y && (Te -= M));
                        var bt = Te + Je[0] + Je[1],
                            $t = Math.max(Te >= 0 && bt <= 1 ? 1 : bt < 0 || Te > 1 ? 0 : Te < 0 ? Math.min(1, (Je[0] + Te) / Je[0]) : (1 - Te) / Je[0], 0);
                        return xe += Je[0] + Je[1], {
                            abs: _e,
                            distance: N.rtl ? -1 * Te + 1 - Je[0] : Te,
                            portion: $t,
                            size: Je[0]
                        }
                    });
                return ke = he(ke), je = le(ke), {
                    abs: he(ke),
                    length: I,
                    max: Q,
                    maxIdx: X,
                    min: Z,
                    minIdx: W,
                    position: te,
                    progress: ue ? ye / M : te / I,
                    rel: je,
                    slides: ct,
                    slidesLength: M
                }
            }
        }();
        return O.details = fe, L.emit("detailsChanged"), fe
    }
    return O = {
        absToRel: le,
        add: ie,
        details: null,
        distToIdx: re,
        idxToDist: ae,
        init: function(ce) {
            if (function() {
                    if (N = L.options, R = (N.trackConfig || []).map(function(ve) {
                            return [p(ve, "size", 1), p(ve, "spacing", 0), p(ve, "origin", 0)]
                        }), H = R.length) {
                        M = v(R.reduce(function(ve, Ce) {
                            return ve + Ce[0] + Ce[1]
                        }, 0));
                        var ue, ye = H - 1;
                        I = v(M + R[0][2] - R[ye][0] - R[ye][2] - R[ye][1]), z = R.reduce(function(ve, Ce) {
                            if (!ve) return [0];
                            var xe = R[ve.length - 1],
                                Se = ve[ve.length - 1] + (xe[0] + xe[2]) + xe[1];
                            return Se -= Ce[2], ve[ve.length - 1] > Se && (Se = ve[ve.length - 1]), Se = v(Se), ve.push(Se), (!ue || ue < Se) && (K = ve.length - 1), ue = Se, ve
                        }, null), I === 0 && (K = 0), z.push(v(M))
                    }
                }(), !H) return de(!0);
            var fe;
            (function() {
                var ue = L.options.range,
                    ye = L.options.loop;
                G = W = ye ? p(ye, "min", -1 / 0) : 0, Y = X = ye ? p(ye, "max", J) : K;
                var ve = p(ue, "min", null),
                    Ce = p(ue, "max", null);
                ve !== null && (W = ve), Ce !== null && (X = Ce), Z = W === -1 / 0 ? W : L.track.idxToDist(W || 0, !0, 0), Q = X === J ? X : ae(X, !0, 0), Ce === null && (Y = X), p(ue, "align", !1) && X !== J && R[le(X)][2] === 0 && (Q -= 1 - R[le(X)][0], X = re(Q - te)), Z = v(Z), Q = v(Q)
            })(), fe = ce, Number(fe) === fe ? ie(ne(he(ce))) : de()
        },
        to: pe,
        velocity: function() {
            var ce = r(),
                fe = _.reduce(function(ue, ye) {
                    var ve = ye.distance,
                        Ce = ye.timestamp;
                    return ce - Ce > 200 || (l(ve) !== l(ue.distance) && ue.distance && (ue = {
                        distance: 0,
                        lastTimestamp: 0,
                        time: 0
                    }), ue.time && (ue.distance += ve), ue.lastTimestamp && (ue.time += Ce - ue.lastTimestamp), ue.lastTimestamp = Ce), ue
                }, {
                    distance: 0,
                    lastTimestamp: 0,
                    time: 0
                });
            return fe.distance / fe.time || 0
        }
    }
}

function g(L) {
    var O, M, I, N, R, H, z, K;

    function W(ee) {
        return 2 * ee
    }

    function X(ee) {
        return d(ee, z, K)
    }

    function G(ee) {
        return 1 - Math.pow(1 - ee, 3)
    }

    function Y() {
        return I ? L.track.velocity() : 0
    }

    function Z() {
        _();
        var ee = L.options.mode === "free-snap",
            te = L.track,
            ie = Y();
        N = l(ie);
        var re = L.track.details,
            oe = [];
        if (ie || !ee) {
            var ae = Q(ie),
                ne = ae.dist,
                se = ae.dur;
            if (se = W(se), ne *= N, ee) {
                var he = te.idxToDist(te.distToIdx(ne), !0);
                he && (ne = he)
            }
            oe.push({
                distance: ne,
                duration: se,
                easing: G
            });
            var me = re.position,
                le = me + ne;
            if (le < R || le > H) {
                var pe = le < R ? R - me : H - me,
                    de = 0,
                    ce = ie;
                if (l(pe) === N) {
                    var fe = Math.min(Math.abs(pe) / Math.abs(ne), 1),
                        ue = function(Ce) {
                            return 1 - Math.pow(1 - Ce, 1 / 3)
                        }(fe) * se;
                    oe[0].earlyExit = ue, ce = ie * (1 - fe)
                } else oe[0].earlyExit = 0, de += pe;
                var ye = Q(ce, 100),
                    ve = ye.dist * N;
                L.options.rubberband && (oe.push({
                    distance: ve,
                    duration: W(ye.dur),
                    easing: G
                }), oe.push({
                    distance: -ve + de,
                    duration: 500,
                    easing: G
                }))
            }
            L.animator.start(oe)
        } else L.moveToIdx(X(re.abs), !0, {
            duration: 500,
            easing: function(Ce) {
                return 1 + --Ce * Ce * Ce * Ce * Ce
            }
        })
    }

    function Q(ee, te) {
        te === void 0 && (te = 1e3);
        var ie = 147e-9 + (ee = Math.abs(ee)) / te;
        return {
            dist: Math.pow(ee, 2) / ie,
            dur: ee / ie
        }
    }

    function J() {
        var ee = L.track.details;
        ee && (R = ee.min, H = ee.max, z = ee.minIdx, K = ee.maxIdx)
    }

    function _() {
        L.animator.stop()
    }
    L.on("updated", J), L.on("optionsChanged", J), L.on("created", J), L.on("dragStarted", function() {
        I = !1, _(), O = M = L.track.details.abs
    }), L.on("dragChecked", function() {
        I = !0
    }), L.on("dragEnded", function() {
        var ee = L.options.mode;
        ee === "snap" && function() {
            var te = L.track,
                ie = L.track.details,
                re = ie.position,
                oe = l(Y());
            (re > H || re < R) && (oe = 0);
            var ae = O + oe;
            ie.slides[te.absToRel(ae)].portion === 0 && (ae -= oe), O !== M && (ae = M), l(te.idxToDist(ae, !0)) !== oe && (ae += oe), ae = X(ae);
            var ne = te.idxToDist(ae, !0);
            L.animator.start([{
                distance: ne,
                duration: 500,
                easing: function(se) {
                    return 1 + --se * se * se * se * se
                }
            }])
        }(), ee !== "free" && ee !== "free-snap" || Z()
    }), L.on("dragged", function() {
        M = L.track.details.abs
    })
}

function b(L) {
    var O, M, I, N, R, H, z, K, W, X, G, Y, Z, Q, J, _, ee, te, ie = c();

    function re(de) {
        if (H && K === de.id) {
            var ce = se(de);
            if (W) {
                if (!ne(de)) return ae(de);
                X = ce, W = !1, L.emit("dragChecked")
            }
            if (_) return X = ce;
            u(de);
            var fe = function(ye) {
                if (ee === -1 / 0 && te === 1 / 0) return ye;
                var ve = L.track.details,
                    Ce = ve.length,
                    xe = ve.position,
                    Se = d(ye, ee - xe, te - xe);
                if (Ce === 0) return 0;
                if (!L.options.rubberband) return Se;
                if (xe <= te && xe >= ee || xe < ee && M > 0 || xe > te && M < 0) return ye;
                var ke = (xe < ee ? xe - ee : xe - te) / Ce,
                    je = N * Ce,
                    at = Math.abs(ke * je),
                    ct = Math.max(0, 1 - at / R * 2);
                return ct * ct * ye
            }(z(X - ce) / N * I);
            M = l(fe);
            var ue = L.track.details.position;
            (ue > ee && ue < te || ue === ee && M > 0 || ue === te && M < 0) && s(de), G += fe, !Y && Math.abs(G * N) > 5 && (Y = !0), L.track.add(fe), X = ce, L.emit("dragged")
        }
    }

    function oe(de) {
        !H && L.track.details && L.track.details.length && (G = 0, H = !0, Y = !1, W = !0, K = de.id, ne(de), X = se(de), L.emit("dragStarted"))
    }

    function ae(de) {
        H && K === de.idChanged && (H = !1, L.emit("dragEnded"))
    }

    function ne(de) {
        var ce = he(),
            fe = ce ? de.y : de.x,
            ue = ce ? de.x : de.y,
            ye = Z !== void 0 && Q !== void 0 && Math.abs(Q - ue) <= Math.abs(Z - fe);
        return Z = fe, Q = ue, ye
    }

    function se(de) {
        return he() ? de.y : de.x
    }

    function he() {
        return L.options.vertical
    }

    function me() {
        N = L.size, R = he() ? window.innerHeight : window.innerWidth;
        var de = L.track.details;
        de && (ee = de.min, te = de.max)
    }

    function le(de) {
        Y && (s(de), u(de))
    }

    function pe() {
        if (ie.purge(), L.options.drag && !L.options.disabled) {
            var de;
            de = L.options.dragSpeed || 1, z = typeof de == "function" ? de : function(fe) {
                    return fe * de
                }, I = L.options.rtl ? -1 : 1, me(), O = L.container,
                function() {
                    var fe = "data-keen-slider-clickable";
                    o("[".concat(fe, "]:not([").concat(fe, "=false])"), O).map(function(ue) {
                        ie.add(ue, "dragstart", s), ie.add(ue, "mousedown", s), ie.add(ue, "touchstart", s)
                    })
                }(), ie.add(O, "dragstart", function(fe) {
                    u(fe)
                }), ie.add(O, "click", le, {
                    capture: !0
                }), ie.input(O, "ksDragStart", oe), ie.input(O, "ksDrag", re), ie.input(O, "ksDragEnd", ae), ie.input(O, "mousedown", oe), ie.input(O, "mousemove", re), ie.input(O, "mouseleave", ae), ie.input(O, "mouseup", ae), ie.input(O, "touchstart", oe, {
                    passive: !0
                }), ie.input(O, "touchmove", re, {
                    passive: !1
                }), ie.input(O, "touchend", ae), ie.input(O, "touchcancel", ae), ie.add(window, "wheel", function(fe) {
                    H && u(fe)
                });
            var ce = "data-keen-slider-scrollable";
            o("[".concat(ce, "]:not([").concat(ce, "=false])"), L.container).map(function(fe) {
                return function(ue) {
                    var ye;
                    ie.input(ue, "touchstart", function(ve) {
                        ye = se(ve), _ = !0, J = !0
                    }, {
                        passive: !0
                    }), ie.input(ue, "touchmove", function(ve) {
                        var Ce = he(),
                            xe = Ce ? ue.scrollHeight - ue.clientHeight : ue.scrollWidth - ue.clientWidth,
                            Se = ye - se(ve),
                            ke = Ce ? ue.scrollTop : ue.scrollLeft,
                            je = Ce && ue.style.overflowY === "scroll" || !Ce && ue.style.overflowX === "scroll";
                        if (ye = se(ve), (Se < 0 && ke > 0 || Se > 0 && ke < xe) && J && je) return _ = !0;
                        J = !1, u(ve), _ = !1
                    }), ie.input(ue, "touchend", function() {
                        _ = !1
                    })
                }(fe)
            })
        }
    }
    L.on("updated", me), L.on("optionsChanged", pe), L.on("created", pe), L.on("destroyed", ie.purge)
}

function x(L) {
    var O, M, I = null;

    function N(Z, Q, J) {
        L.animator.active ? H(Z, Q, J) : requestAnimationFrame(function() {
            return H(Z, Q, J)
        })
    }

    function R() {
        N(!1, !1, M)
    }

    function H(Z, Q, J) {
        var _ = 0,
            ee = L.size,
            te = L.track.details;
        if (te && O) {
            var ie = te.slides;
            O.forEach(function(re, oe) {
                if (Z) !I && Q && K(re, null, J), W(re, null, J);
                else {
                    if (!ie[oe]) return;
                    var ae = ie[oe].size * ee;
                    !I && Q && K(re, ae, J), W(re, ie[oe].distance * ee - _, J), _ += ae
                }
            })
        }
    }

    function z(Z) {
        return L.options.renderMode === "performance" ? Math.round(Z) : Z
    }

    function K(Z, Q, J) {
        var _ = J ? "height" : "width";
        Q !== null && (Q = z(Q) + "px"), Z.style["min-" + _] = Q, Z.style["max-" + _] = Q
    }

    function W(Z, Q, J) {
        if (Q !== null) {
            Q = z(Q);
            var _ = J ? Q : 0;
            Q = "translate3d(".concat(J ? 0 : Q, "px, ").concat(_, "px, 0)")
        }
        Z.style.transform = Q, Z.style["-webkit-transform"] = Q
    }

    function X() {
        O && (H(!0, !0, M), O = null), L.on("detailsChanged", R, !0)
    }

    function G() {
        N(!1, !0, M)
    }

    function Y() {
        X(), M = L.options.vertical, L.options.disabled || L.options.renderMode === "custom" || (I = p(L.options.slides, "perView", null) === "auto", L.on("detailsChanged", R), (O = L.slides).length && G())
    }
    L.on("created", Y), L.on("optionsChanged", Y), L.on("beforeOptionsChanged", function() {
        X()
    }), L.on("updated", G), L.on("destroyed", X)
}

function k(L, O) {
    return function(M) {
        var I, N, R, H, z, K = c();

        function W(ne) {
            var se;
            a(M.container, "reverse", (se = M.container, window.getComputedStyle(se, null).getPropertyValue("direction") !== "rtl" || ne ? null : "")), a(M.container, "v", M.options.vertical && !ne ? "" : null), a(M.container, "disabled", M.options.disabled && !ne ? "" : null)
        }

        function X() {
            G() && _()
        }

        function G() {
            var ne = null;
            if (H.forEach(function(he) {
                    he.matches && (ne = he.__media)
                }), ne === I) return !1;
            I || M.emit("beforeOptionsChanged"), I = ne;
            var se = ne ? R.breakpoints[ne] : R;
            return M.options = n(n({}, R), se), W(), oe(), ae(), te(), !0
        }

        function Y(ne) {
            var se = f(ne);
            return (M.options.vertical ? se.height : se.width) / M.size || 1
        }

        function Z() {
            return M.options.trackConfig.length
        }

        function Q(ne) {
            for (var se in I = !1, R = n(n({}, O), ne), K.purge(), N = M.size, H = [], R.breakpoints || []) {
                var he = window.matchMedia(se);
                he.__media = se, H.push(he), K.add(he, "change", X)
            }
            K.add(window, "orientationchange", re), K.add(window, "resize", ie), G()
        }

        function J(ne) {
            M.animator.stop();
            var se = M.track.details;
            M.track.init(ne ? ? (se ? se.abs : 0))
        }

        function _(ne) {
            J(ne), M.emit("optionsChanged")
        }

        function ee(ne, se) {
            if (ne) return Q(ne), void _(se);
            oe(), ae();
            var he = Z();
            te(), Z() !== he ? _(se) : J(se), M.emit("updated")
        }

        function te() {
            var ne = M.options.slides;
            if (typeof ne == "function") return M.options.trackConfig = ne(M.size, M.slides);
            for (var se = M.slides, he = se.length, me = typeof ne == "number" ? ne : p(ne, "number", he, !0), le = [], pe = p(ne, "perView", 1, !0), de = p(ne, "spacing", 0, !0) / M.size || 0, ce = pe === "auto" ? de : de / pe, fe = p(ne, "origin", "auto"), ue = 0, ye = 0; ye < me; ye++) {
                var ve = pe === "auto" ? Y(se[ye]) : 1 / pe - de + ce,
                    Ce = fe === "center" ? .5 - ve / 2 : fe === "auto" ? 0 : fe;
                le.push({
                    origin: Ce,
                    size: ve,
                    spacing: de
                }), ue += ve
            }
            if (ue += de * (me - 1), fe === "auto" && !M.options.loop && pe !== 1) {
                var xe = 0;
                le.map(function(Se) {
                    var ke = ue - xe;
                    return xe += Se.size + de, ke >= 1 || (Se.origin = 1 - ke - (ue > 1 ? 0 : 1 - ue)), Se
                })
            }
            M.options.trackConfig = le
        }

        function ie() {
            oe();
            var ne = M.size;
            M.options.disabled || ne === N || (N = ne, ee())
        }

        function re() {
            ie(), setTimeout(ie, 500), setTimeout(ie, 2e3)
        }

        function oe() {
            var ne = f(M.container);
            M.size = (M.options.vertical ? ne.height : ne.width) || 1
        }

        function ae() {
            M.slides = o(M.options.selector, M.container)
        }
        M.container = (z = o(L, document)).length ? z[0] : null, M.destroy = function() {
            K.purge(), M.emit("destroyed"), W(!0)
        }, M.prev = function() {
            M.moveToIdx(M.track.details.abs - 1, !0)
        }, M.next = function() {
            M.moveToIdx(M.track.details.abs + 1, !0)
        }, M.update = ee, Q(M.options)
    }
}
var y = function(L, O, M) {
        try {
            return function(I, N) {
                var R, H = {};
                return R = {
                        emit: function(z) {
                            H[z] && H[z].forEach(function(W) {
                                W(R)
                            });
                            var K = R.options && R.options[z];
                            K && K(R)
                        },
                        moveToIdx: function(z, K, W) {
                            var X = R.track.idxToDist(z, K);
                            if (X) {
                                var G = R.options.defaultAnimation;
                                R.animator.start([{
                                    distance: X,
                                    duration: p(W || G, "duration", 500),
                                    easing: p(W || G, "easing", function(Y) {
                                        return 1 + --Y * Y * Y * Y * Y
                                    })
                                }])
                            }
                        },
                        on: function(z, K, W) {
                            W === void 0 && (W = !1), H[z] || (H[z] = []);
                            var X = H[z].indexOf(K);
                            X > -1 ? W && delete H[z][X] : W || H[z].push(K)
                        },
                        options: I
                    },
                    function() {
                        if (R.track = m(R), R.animator = h(R), N)
                            for (var z = 0, K = N; z < K.length; z++)(0, K[z])(R);
                        R.track.init(R.options.initial || 0), R.emit("created")
                    }(), R
            }(O, t([k(L, {
                drag: !0,
                mode: "snap",
                renderMode: "precision",
                rubberband: !0,
                selector: ".keen-slider__slide"
            }), x, b, g], M || [], !0))
        } catch (I) {
            console.error(I)
        }
    },
    _tmpl$$y = template("<div>");

function Carousel(L) {
    const [O, M] = splitProps(L, ["ref", "options", "auto"]);
    let I;
    const N = children(() => L.children),
        R = () => ({
            loop: z,
            ...O.options,
            selector(K) {
                return K.childNodes
            }
        }),
        H = () => O.auto || 0,
        z = H() > 0;
    return createComponent(ActiveProvider, {
        get children() {
            var K = _tmpl$$y();
            return use(W => {
                I = new y(W, R()), L.ref && L.ref(I), createEffect(() => {
                    N() && I.update(R())
                }), onCleanup(() => {
                    I.destroy()
                }), z && createAuto(() => I, H)
            }, K), spread(K, mergeProps(M, {
                get class() {
                    return cx("carousels", M.class)
                }
            }), !1, !0), insert(K, N), K
        }
    })
}

function createAuto(L, O) {
    const M = useIsActive(),
        [I, N] = createSignal(!1),
        R = getOwner(),
        H = () => createSubRoot(G => (createTimer(() => {
            const Y = L();
            Y.slides.length > 0 && (Y.options.loop ? L().next() : Y.moveToIdx((Y.track.details.abs + 1) % Y.slides.length))
        }, () => {
            if (I() || !M()) return !1;
            const Y = O();
            return Y > 0 ? Y : !1
        }, setInterval), G), R);
    let z = H();
    L().on("slideChanged", () => {
        z(), z = H()
    });
    const K = N.bind(void 0, !0),
        W = N.bind(void 0, !1);
    let X = !1;
    createEffect(() => {
        const G = L();
        G.container.addEventListener("mouseover", () => {
            X = !0, K()
        }), G.container.addEventListener("mouseout", () => {
            X = !1, W()
        }), G.on("dragStarted", K), G.on("animationEnded", () => {
            X || W()
        }), G.on("updated", W)
    })
}
const firstDateOfMonth = (L, O, M) => {
        const I = new Date(0);
        return I.setFullYear(L, O, M), I.setHours(0, 0, 0, 0)
    },
    addDays = (L, O) => {
        const M = new Date(L);
        return M.setDate(M.getDate() + O)
    },
    dayDiff = (L, O) => (L - O + 7) % 7,
    dayOfTheWeekOf = (L, O, M = 0) => {
        const I = new Date(L).getDay();
        return addDays(L, dayDiff(O, M) - dayDiff(I, M))
    },
    addMonths = (L, O) => {
        const M = L,
            I = M.getMonth() + O;
        let N = I % 12;
        N < 0 && (N += 12);
        const R = M.setMonth(I);
        return M.getMonth() !== N ? M.setDate(0) : R
    },
    addYears = (L, O) => {
        const M = L,
            I = M.getMonth(),
            N = M.setFullYear(M.getFullYear() + O);
        return I === 1 && M.getMonth() === 2 ? M.setDate(0) : N
    },
    getFormattedDate = (L, O, M) => {
        let I = {
            day: "numeric",
            month: "long",
            year: "numeric"
        };
        return M && (I = M), new Intl.DateTimeFormat(L, I).format(O)
    },
    goToPrevNext = (L, O, M) => {
        switch (L) {
            case "days":
                return addMonths(O, M);
            case "months":
                return addYears(O, M);
            case "years":
                return addYears(O, M * 10);
            case "decades":
                return addYears(O, M * 100);
            default:
                return addYears(O, M * 10)
        }
    },
    startOfYearPeriod = (L, O) => {
        const M = L.getFullYear();
        return Math.floor(M / O) * O
    },
    DatePickerContext = createContext(null);

function useDatePicker() {
    return useContext(DatePickerContext)
}

function useCurrentDate() {
    const L = useDatePicker();
    return createMemo(() => {
        const O = L.value();
        return Array.isArray(O) ? O : [O, O]
    })
}

function useFormatDate() {
    return (L, O) => getFormattedDate(setting.lang, L, O)
}
const ButtonPrevMonth = () => {
        const {
            state: L,
            setState: O
        } = useDatePicker();
        return createComponent(Button, {
            class: "text-secondary",
            onClick: () => O("selectedDate", new Date(goToPrevNext(L.view, L.selectedDate, -1))),
            get children() {
                return createComponent(Icon, {
                    class: "w-6 h-6",
                    name: "Arrow"
                })
            }
        })
    },
    ButtonSelectMonth = () => {
        const {
            state: L,
            setState: O
        } = useDatePicker(), M = useFormatDate(), I = () => L.view === "days" ? "months" : L.view === "months" ? "years" : L.view === "years" ? "decades" : L.view, N = () => {
            switch (L.view) {
                case "decades":
                    return `${startOfYearPeriod(L.selectedDate,100)}-${startOfYearPeriod(L.selectedDate,100)+90}`;
                case "years":
                    return `${startOfYearPeriod(L.selectedDate,10)}-${startOfYearPeriod(L.selectedDate,10)+9}`;
                case "months":
                    return M(L.selectedDate, {
                        year: "numeric"
                    });
                default:
                    return M(L.selectedDate, {
                        month: "long",
                        year: "numeric"
                    })
            }
        };
        return createComponent(Button, {
            class: "text-lg",
            onClick: () => O("view", I()),
            get children() {
                return N()
            }
        })
    },
    ButtonNextMonth = () => {
        const {
            state: L,
            setState: O
        } = useDatePicker();
        return createComponent(Button, {
            class: "text-secondary",
            onClick: () => {
                O("selectedDate", new Date(goToPrevNext(L.view, L.selectedDate, 1)))
            },
            get children() {
                return createComponent(Icon, {
                    class: "w-6 h-6 rotate-180",
                    name: "Arrow"
                })
            }
        })
    };
var _tmpl$$x = template('<div class="datepicker-table text-center gap-1">'),
    _tmpl$2$i = template('<span class="flex-1 text-secondary">'),
    _tmpl$3$b = template("<div>");
const Days = L => {
    const {
        state: O,
        value: M,
        onChange: I
    } = useDatePicker(), N = (new Date(L.start).getDay() + 6) % 7, R = O.options.weekDays || [], H = R.slice(N).concat(R.slice(0, N)), z = Array.isArray(M()), K = useCurrentDate(), W = createMemo(() => K().map(J => J.getTime()));

    function X(J) {
        return `${J.getFullYear()}${J.getMonth()}`
    }
    const G = createMemo(() => X(O.selectedDate)),
        Y = createSelector(G),
        Z = J => {
            var _, ee, te;
            const ie = J(),
                re = (_ = O.options) == null ? void 0 : _.minDate,
                oe = (ee = O.options) == null ? void 0 : ee.disabledDates,
                ae = (te = O.options) == null ? void 0 : te.maxDate;
            return oe && oe.indexOf(ie) >= 0 || re && ie < re || ae && ie > ae
        };
    let Q = K()[1];
    return (() => {
        var J = _tmpl$$x();
        return insert(J, createComponent(For, {
            each: H,
            children: _ => (() => {
                var ee = _tmpl$2$i();
                return insert(ee, _), ee
            })()
        }), null), insert(J, createComponent(For, {
            get each() {
                return [...Array(42)]
            },
            children: (_, ee) => {
                const te = createMemo(() => new Date(addDays(L.start, ee())));
                return createComponent(GridBtn, {
                    get class() {
                        return cx(Z(te) && "text-quarterary cursor-not-allowed", !Y(X(te())) && "text-secondary")
                    },
                    get date() {
                        return te()
                    },
                    get range() {
                        return W()
                    },
                    onClick: () => {
                        if (Z(te)) return;
                        const ie = te();
                        if (!z) I(ie);
                        else {
                            const [re, oe] = K(), ae = ie.getTime(), ne = re.getTime(), se = oe.getTime();
                            ae === ne ? (I([re, re]), Q = re) : ae === se ? (I([oe, oe]), Q = oe) : (I([Q, ie].sort((he, me) => he.getTime() - me.getTime())), Q = ie)
                        }
                    },
                    get children() {
                        return te().getDate()
                    }
                })
            }
        }), null), J
    })()
};

function GridBtn(L) {
    const [, O] = splitProps(L, ["class", "date", "range"]), {
        value: M
    } = useDatePicker(), I = Array.isArray(M()), N = createMemo(() => {
        const [R, H] = L.range, z = L.date.getTime();
        if (!I && R === H) {
            if (R === z) return 0
        } else {
            if (R === z || H === z) return 0;
            if (z > R && z <= H) return 1
        }
        return 2
    });
    return (() => {
        var R = _tmpl$3$b();
        return spread(R, mergeProps(O, {
            get class() {
                return cx("flex-1 leading-9 border-0 rounded-lg text-center btn-like", L.class, N() === 0 ? "bg-brand text-primary_brand" : N() === 1 && "bg-brand/20")
            },
            get onClick() {
                return L.onClick
            }
        }), !1, !0), insert(R, () => L.children), R
    })()
}
var _tmpl$$w = template('<div class="grid grid-cols-4 gap-2">');
const Decades = () => {
    const {
        state: L,
        setState: O
    } = useDatePicker(), M = useCurrentDate(), I = createMemo(() => M().map(R => new Date(startOfYearPeriod(R, 10), 0).getTime())), N = createMemo(() => {
        const R = startOfYearPeriod(L.selectedDate, 100);
        return [...Array(12)].map((H, z) => new Date(R + z * 10, 0))
    });
    return (() => {
        var R = _tmpl$$w();
        return insert(R, createComponent(Index, {
            get each() {
                return N()
            },
            children: (H, z) => createComponent(GridBtn, {
                get date() {
                    return H()
                },
                get range() {
                    return I()
                },
                onClick: () => {
                    O({
                        view: "years",
                        selectedDate: H()
                    })
                },
                get children() {
                    return H().getFullYear()
                }
            })
        })), R
    })()
};
var _tmpl$$v = template('<div class="grid grid-cols-4 gap-2 mb-5">');
const Months = () => {
    const {
        state: L,
        setState: O
    } = useDatePicker(), M = useFormatDate(), I = useCurrentDate(), N = createMemo(() => I().map(H => new Date(H.getFullYear(), H.getMonth()).getTime())), R = createMemo(() => [...Array(12)].map((H, z) => new Date(L.selectedDate.getFullYear(), z)));
    return (() => {
        var H = _tmpl$$v();
        return insert(H, createComponent(Index, {
            get each() {
                return R()
            },
            children: (z, K) => createComponent(GridBtn, {
                get date() {
                    return z()
                },
                get range() {
                    return N()
                },
                onClick: () => {
                    O({
                        view: "days",
                        selectedDate: z()
                    })
                },
                get children() {
                    return M(z(), {
                        month: "short"
                    })
                }
            })
        })), H
    })()
};
var _tmpl$$u = template('<div class="grid grid-cols-4 gap-2">');
const Years = () => {
    const {
        state: L,
        setState: O
    } = useDatePicker(), M = useCurrentDate(), I = createMemo(() => M().map(R => new Date(R.getFullYear(), 0).getTime())), N = createMemo(() => {
        const R = startOfYearPeriod(L.selectedDate, 10);
        return [...Array(12)].map((H, z) => new Date(R + z, 0))
    });
    return (() => {
        var R = _tmpl$$u();
        return insert(R, createComponent(Index, {
            get each() {
                return N()
            },
            children: (H, z) => createComponent(GridBtn, {
                get date() {
                    return H()
                },
                get range() {
                    return I()
                },
                onClick: () => {
                    O({
                        view: "months",
                        selectedDate: H()
                    })
                },
                get children() {
                    return H().getFullYear()
                }
            })
        })), R
    })()
};
var _tmpl$$t = template("<div class=scroll-container>"),
    _tmpl$2$h = template("<div>");

function ScrollView(L) {
    const [, O] = splitProps(L, ["pan", "children"]), [M, I] = createSignal(void 0), N = createMemo(() => L.pan !== "x");
    return createComponent(ScrollProvider.Provider, {
        value: M,
        get children() {
            return createComponent(KeepScroll, {
                get children() {
                    var R = _tmpl$2$h(),
                        H = mergeRefs(L.ref, I);
                    return typeof H == "function" && use(H, R), spread(R, mergeProps(O, {
                        get class() {
                            return cx(N() ? "scroll-y" : "scroll-x", L.class)
                        }
                    }), !1, !0), insert(R, createComponent(Show, {
                        get when() {
                            return N()
                        },
                        get fallback() {
                            return L.children
                        },
                        get children() {
                            var z = _tmpl$$t();
                            return insert(z, () => L.children), z
                        }
                    })), R
                }
            })
        }
    })
}
const ScrollProvider = createContext(() => window);

function useScrollElement() {
    return useContext(ScrollProvider)
}

function useScrollTop(L = () => !0) {
    const [O, M] = createSignal(0), I = useScrollElement();
    return createEventListener(I, () => L() ? "scroll" : "", N => {
        const R = N.target === document ? rootScrollElement : N.target;
        M(R.scrollTop)
    }, {
        passive: !0
    }), O
}
var _tmpl$$s = template("<div class=tabs-indicator>"),
    _tmpl$2$g = template("<button>"),
    _tmpl$3$a = template("<div>");
const TabCtx = createContext(null);

function TabsBase(L) {
    const [, O] = splitProps(L, ["value", "onChange", "class", "keepAlive", "type"]), [M, I] = createSignal(L.value || 0), N = createSignal([]);
    let R;
    const H = N[0];
    createComputed(() => {
        var W;
        const X = untrack(() => L.value),
            G = M();
        X !== G && ((W = L.onChange) == null || W.call(L, G))
    }), createComputed(() => {
        L.value !== void 0 && I(L.value)
    }), createComputed(W => {
        const X = H(),
            G = untrack(M);
        if (W && W.length > 0) {
            const Y = X.indexOf(W[G]);
            I(Math.max(0, Y))
        }
        return X
    });
    const [z, K] = createSignal(0);
    return createResizeObserver(() => R, () => {
        K(R.clientWidth)
    }), createComponent(TabCtx.Provider, {
        value: N,
        get children() {
            return [createComponent(ScrollView, mergeProps(O, {
                pan: "x",
                get "data-type" () {
                    return L.type
                },
                get style() {
                    return {
                        "--tabs-width": z() + "px",
                        "--tabs-indicator-position": M() * 100 + "%"
                    }
                },
                get class() {
                    return cx("tabs-title hide-scroll", L.class)
                },
                get children() {
                    return [createComponent(Index, {
                        get each() {
                            return H()
                        },
                        children: (W, X) => (() => {
                            var G = _tmpl$2$g(),
                                Y = M() === X ? Z => R = Z : void 0;
                            return typeof Y == "function" && use(Y, G), G.$$click = () => I(X), insert(G, () => W().title), createRenderEffect(Z => {
                                var Q = M() === X || void 0,
                                    J = cx("tabs-btn btn-like"),
                                    _ = W().props.tabIndex;
                                return Q !== Z.e && setAttribute(G, "aria-selected", Z.e = Q), J !== Z.t && className(G, Z.t = J), _ !== Z.a && setAttribute(G, "tabindex", Z.a = _), Z
                            }, {
                                e: void 0,
                                t: void 0,
                                a: void 0
                            }), G
                        })()
                    }), _tmpl$$s()]
                }
            })), createComponent(Show, {
                get when() {
                    return H().length > 0
                },
                get children() {
                    return createComponent(TabSelect, {
                        get tabs() {
                            return H()
                        },
                        get value() {
                            return H()[M()]
                        },
                        get keepAlive() {
                            return L.keepAlive
                        },
                        children: (W, X) => {
                            const [, G] = splitProps(W().props, ["tabIndex"]);
                            return (() => {
                                var Y = _tmpl$3$a();
                                return spread(Y, mergeProps(G, {
                                    get class() {
                                        return cx("tabs-content", G.class)
                                    }
                                }), !1, !0), insert(Y, createComponent(Suspense, {
                                    get fallback() {
                                        return getFullLoading()
                                    },
                                    get children() {
                                        return G.children
                                    }
                                })), Y
                            })()
                        }
                    })
                }
            }), memo$2(() => L.children)]
        }
    })
}

function TabItem(L) {
    const [, O] = splitProps(L, ["title"]), [, M] = useContext(TabCtx), I = {
        get title() {
            return L.title
        },
        props: O
    };
    return M(N => [...N, I].sort((R, H) => (R.props.tabIndex || 0) - (H.props.tabIndex || 0))), onCleanup(() => {
        M(N => N.filter(R => R !== I))
    }), null
}

function TabSelect(L) {
    const O = resolveFirst(() => createComponent(For, {
        get each() {
            return L.tabs
        },
        children: (M, I) => createComponent(Suspense, {
            get fallback() {
                return getFullLoading()
            },
            get children() {
                return createComponent(Toggle, {
                    get when() {
                        return M === L.value
                    },
                    get keepAlive() {
                        return L.keepAlive
                    },
                    get children() {
                        return L.children(() => M, I())
                    }
                })
            }
        })
    }));
    return createSwitchTransition(O, {
        appear: !1,
        onEnter(M) {
            queueMicrotask(() => {
                animate(M, {
                    opacity: [0, 1]
                }, {
                    duration: .35,
                    easing: easeBack,
                    persist: !0
                })
            })
        }
    })
}
const Tabs = TabsBase;
Tabs.TabItem = TabItem;
Tabs.TabSelect = TabSelect;
delegateEvents(["click"]);
var _tmpl$$r = template('<div class="block text-base font-semibold mb-3 select-none"><div class="flex justify-between mb-2">');

function DatePickerLayer() {
    var L, O, M;
    const {
        state: I,
        setState: N
    } = useDatePicker(), R = useIsActive();
    createComputed(() => {
        R() && N("view", "days")
    });
    const H = (L = I.options) != null && L.language ? (O = I.options) == null ? void 0 : O.language : "en",
        z = new Intl.Locale(H),
        K = ((M = z ? .weekInfo) == null ? void 0 : M.firstDay) || 1,
        W = () => dayOfTheWeekOf(firstDateOfMonth(I.selectedDate.getFullYear(), I.selectedDate.getMonth(), 1), K, K),
        X = {
            days: () => createComponent(Days, {
                get start() {
                    return W()
                }
            }),
            decades: Decades,
            years: Years,
            months: Months
        },
        G = Object.keys(X);
    return (() => {
        var Y = _tmpl$$r(),
            Z = Y.firstChild;
        return insert(Z, createComponent(ButtonPrevMonth, {}), null), insert(Z, createComponent(ButtonSelectMonth, {}), null), insert(Z, createComponent(ButtonNextMonth, {}), null), insert(Y, createComponent(Tabs.TabSelect, {
            tabs: G,
            get value() {
                return I.view
            },
            children: Q => {
                const J = X[Q()];
                return createComponent(J, {})
            }
        }), null), Y
    })()
}
const options = {
    language: "en",
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
};
var _tmpl$$q = template("<div><input>");

function Input(L) {
    const [, O] = splitProps(L, ["onChange"]);
    return createComponent(InputBase, mergeProps(O, {
        get onInput() {
            return L.onChange && (M => L.onChange(M.target.value))
        }
    }))
}

function InputBase(L) {
    const [, O] = splitProps(L, ["class", "children"]), [M, I] = createSignal(!1);
    return (() => {
        var N = _tmpl$$q(),
            R = N.firstChild;
        return spread(R, mergeProps(O, {
            onFocus: H => {
                var z;
                I(!0), (z = L.onFocus) == null || z.call(L, H)
            },
            onBlur: H => {
                var z;
                I(!1), (z = L.onBlur) == null || z.call(L, H)
            }
        }), !1, !1), insert(N, () => L.children, null), createRenderEffect(H => {
            var z = cx("input", L.class),
                K = M() || void 0,
                W = L.disabled || void 0;
            return z !== H.e && className(N, H.e = z), K !== H.t && setAttribute(N, "data-focus", H.t = K), W !== H.a && setAttribute(N, "data-disabled", H.a = W), H
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), N
    })()
}

function NumberInput(L) {
    let O;
    const [, M] = splitProps(L, ["onChange", "onInput", "precision", "max", "min", "value", "ref"]);

    function I(X) {
        return new Decimal$1(X).todp(L.precision, Decimal$1.ROUND_DOWN)
    }
    const N = X => {
            var G;
            (G = L.onChange) == null || G.call(L, X)
        },
        R = createMemo(() => I(L.value || 0));
    createComputed(() => {
        const X = L.precision,
            G = R();
        X && G.dp() > X && N(G.todp(X).toNumber())
    });

    function H(X) {
        return L.max !== void 0 && X > L.max
    }

    function z(X) {
        return L.min !== void 0 && X < L.min
    }
    createComputed(() => {
        H(R().toNumber()) && N(L.max)
    }), createComputed(() => {
        z(R().toNumber()) && N(L.min)
    }), createEffect(() => K(R()));

    function K(X) {
        const G = X.toFixed();
        O.value !== G && (O.value = G)
    }
    const W = X => {
        X = X.replace(",", ".");
        const G = Number(X);
        if (isNaN(G)) K(R());
        else {
            const Y = I(G || 0).toNumber();
            H(Y) ? (K(I(L.max)), N(L.max)) : z(Y) ? (K(I(L.min)), N(L.min)) : (K(I(Y)), N(Y))
        }
    };
    return createComponent(InputBase, mergeProps({
        ref(X) {
            var G = mergeRefs(Y => O = Y, L.ref);
            typeof G == "function" && G(X)
        }
    }, M, {
        value: void 0,
        onChange: X => {
            const G = X.target.value;
            W(G)
        },
        inputmode: "decimal"
    }))
}
const [els, setEls] = createSignal([]);

function setActiveElement(L, O = !1) {
    onMount(() => {
        setEls(M => O ? [L, ...M] : [...M, L])
    }), onCleanup(() => {
        setEls(M => M.filter(I => I !== L))
    })
}
isSupportTouch && createRoot(() => {
    const L = createScheduled(M => debounce$1(M, 160)),
        O = createMemo(M => {
            const I = els().length > 0;
            return L() ? I : M
        }, !1);
    createEffect(() => {
        document.body.classList.toggle("lock-scroll", O())
    })
});
var _tmpl$$p = template('<div class="leading-5 mt-4">'),
    _tmpl$2$f = template('<section><img class="w-48 h-48">');
const assetsDict = {
    empty: ["common/empty.png", "common/empty_w.png"],
    notfound: ["common/notfound.png", "common/notfound_w.png"],
    offline: ["common/offline.png", "common/offline_w.png"],
    privacy: ["common/privacy.png", "common/privacy_w.png"],
    ban: ["common/ban.png", "common/ban_w.png"]
};

function getAssets(L) {
    return bc.assets(assetsDict[L][setting.darken ? 0 : 1])
}

function Empty(L) {
    function O(N) {
        return {
            empty: defaultT("Oops! There is no data yet!"),
            notfound: defaultT("Uh Oh! The page you're looking for cannot be found!"),
            offline: defaultT("Oops! No internet connection!"),
            privacy: defaultT("This user has privacy mode enabled!"),
            ban: ""
        }[N]
    }
    const M = () => L.type || "empty",
        I = createMemo(() => L.children ? L.children : L.hideMsg ? ? O(M()));
    return (() => {
        var N = _tmpl$2$f(),
            R = N.firstChild;
        return insert(N, createComponent(Show, {
            get when() {
                return I()
            },
            get children() {
                var H = _tmpl$$p();
                return insert(H, I), H
            }
        }), null), createRenderEffect(H => {
            var z = cx("py-10 text-center center flex-col", L.class),
                K = getAssets(M());
            return z !== H.e && className(N, H.e = z), K !== H.t && setAttribute(R, "src", H.t = K), H
        }, {
            e: void 0,
            t: void 0
        }), N
    })()
}

function createBottomSheetDrag(L, O, M) {
    const [I, N] = createSignal(!1);
    return createEffect(() => {
        const R = L();
        if (!R) return;
        let H = 0,
            z = 0;
        const K = createMemo(() => (1 - O[0]()) * z);

        function W(re) {
            return O[1](1 - re / z)
        }

        function X(re) {
            return (1 - 1 / (re * .54 / z + 1)) * z
        }

        function G(re) {
            let oe = H + re;
            oe < 0 && (oe = -X(-oe)), W(oe)
        }
        let Y = !1;

        function Z(re) {
            Y || (Y = !0, re !== void 0 ? M(re > .3 || K() > z / 2) : K() !== 0 && M())
        }
        let Q, J = 0,
            _ = !1;

        function ee(re) {
            return re.scrollHeight - re.clientHeight > 1
        }

        function te(re) {
            re.stopPropagation(), re.preventDefault()
        }
        createTouchEvent(R, {
            onDragStart(re, oe) {
                for (N(!0), Q = oe.target, J = 0, _ = !0; Q;) {
                    if (ee(Q)) {
                        J = Q.scrollTop, _ = J > -16;
                        break
                    }
                    if (Q === R) {
                        Q = null;
                        break
                    }
                    Q = Q.parentElement
                }
            },
            onDrag(re, oe) {
                let ae = !0;
                if (Q) {
                    const ne = Q.scrollTop;
                    ae = _ && ne <= 16;
                    const se = Q.scrollHeight - ne - Q.clientHeight > ne;
                    Q.style.overscrollBehaviorY = se && ae ? "none" : "contain"
                } else te(oe);
                if (_) {
                    const ne = re.y - J;
                    ne > 0 && (te(oe), G(ne))
                }
            },
            onDragEnd({
                vy: re,
                y: oe
            }, {
                timeStamp: ae
            }) {
                N(!1), Q && (Q.style.overscrollBehaviorY = "contain"), _ && oe - J > 0 && Z(re)
            }
        });
        let ie;
        createTouchEvent(document, {
            onDragStart(re, oe) {
                ie = void 0, z = R.clientHeight, H = K(), Y = !1, W(H)
            },
            onDrag(re, oe) {
                ie === void 0 && (ie = re.begin.clientX <= swipeArea && Math.abs(re.x) > Math.abs(re.y)), ie && (G(re.x), te(oe))
            },
            onDragEnd({
                vx: re
            }, oe) {
                Z(ie ? re : void 0)
            },
            options: {
                start: {
                    capture: !0
                },
                move: {
                    capture: !0
                }
            }
        })
    }), I
}

function createTouchEvent(L, {
    onDragStart: O,
    onDrag: M,
    onDragEnd: I,
    options: N
}) {
    let R;
    const H = {
        x: 0,
        vx: 0,
        y: 0,
        vy: 0,
        time: 0,
        begin: void 0,
        prev: void 0
    };

    function z(Z) {
        const {
            touches: [Q],
            timeStamp: J
        } = Z;
        R = H.begin = H.prev = Q, H.x = H.y = H.vx = H.vy = 0, H.time = J, O ? .(H, Z)
    }

    function K(Z, Q, J) {
        return Z / J * .8 + Q * .2
    }

    function W(Z) {
        const {
            touches: [Q],
            timeStamp: J
        } = Z;
        if (!R) return;
        const _ = J - H.time;
        H.vx = K(Q.clientX - H.prev.clientX, H.vx, _), H.vy = K(Q.clientY - H.prev.clientY, H.vy, _), H.time = J, H.x = Q.clientX - R.clientX, H.y = Q.clientY - R.clientY, H.prev = Q, M ? .(H, Z)
    }

    function X(Z) {
        R = void 0, I ? .(H, Z)
    }
    const G = useIsActive(),
        Y = createMemo(() => G() ? L : void 0);
    createEventListener(Y, "touchstart", z, {
        passive: !1,
        ...N ? .start
    }), createEventListener(Y, "touchmove", W, {
        passive: !1,
        ...N ? .move
    }), createEventListener(Y, "touchcancel", X, N ? .end), createEventListener(Y, "touchend", X, N ? .end)
}
var _tmpl$$o = template("<div>"),
    _tmpl$2$e = template("<div><div class=pop-title>"),
    _tmpl$3$9 = template('<div class="text-base text-secondary">'),
    _tmpl$4$5 = template('<div class="flex mt-8 mb-2">');
const HEAD_SHAKE = "head-shake",
    [list$1, setList$1] = createSignal([]);

function createPopItem(L, O, {
    close: M = !0,
    onClose: I
} = {}) {
    return createRoot(N => {
        const R = {
                value: 0
            },
            [H, z] = createSignal(R.value);
        let K;
        const W = {
            value: [H, G => {
                X || (R.value = G, z(G), K ? .kill())
            }],
            animateTo(G, Y) {
                X || (Y && (X = !0), K = gsapWithCSS.to(R, {
                    value: G,
                    duration: .35,
                    overwrite: "auto",
                    ease: "power3.out",
                    onUpdate() {
                        z(R.value)
                    },
                    onComplete() {
                        Y ? .(), X && N()
                    }
                }))
            }
        };
        onCleanup(() => {
            K ? .kill()
        });
        let X = !1;
        return {
            jsx: L,
            close: M,
            ane: W,
            onClose(G) {
                O(G), I ? .(G)
            }
        }
    })
}
const pop$1 = {
    get list() {
        return list$1()
    },
    push(L, O) {
        return new Promise(M => {
            setList$1(I => [...I, createPopItem(L, M, O)])
        })
    },
    confirm(L, O) {
        return new Promise(M => {
            const I = () => createComponent(Confirm, mergeProps(() => O ? .(), {
                children: L,
                onConfirm: N => {
                    M(N), pop$1.pop(I)
                }
            }));
            pop$1.push(I, {
                close: !1
            })
        })
    },
    pop(L) {
        setList$1(O => {
            if (O.length === 0) return O;
            const M = [...O],
                I = L || M[M.length - 1].jsx;
            return M.filter(N => N.jsx !== I || N.onClose())
        })
    }
};

function PopProvider() {
    const L = () => {
            const R = pop$1.list;
            return R[R.length - 1]
        },
        O = createListTransition(() => pop$1.list, {
            onChange({
                added: R,
                removed: H,
                finishRemoved: z
            }) {
                R.forEach(K => K.ane.animateTo(1)), H.forEach(K => K.ane.animateTo(0, () => z([K])))
            }
        }),
        [M, I] = createSignal(!1),
        N = createMemo(() => O().length > 0);
    return createComponent(Portal, {
        ref: R => {
            R.className = "pop-overlayer";
            const H = createMemo(() => {
                var K;
                return ((K = pop$1.list[0]) == null ? void 0 : K.ane.value[0]()) || 0
            });
            createComputed(() => {
                N() && (R.style.visibility = "visible", setActiveElement(R, !0))
            }), createEffect(() => {
                N() && onCleanup(() => {
                    R.style.visibility = "hidden"
                })
            }), createComputed(() => {
                R.style.backgroundColor = `rgba(16, 18, 18, ${H()*.8})`
            });

            function z() {
                const K = R.children[R.children.length - 1];
                if (K && K.className.indexOf(HEAD_SHAKE) === -1) {
                    let W = function() {
                        K.classList.toggle(HEAD_SHAKE), K.removeEventListener("animationend", W)
                    };
                    K.classList.toggle(HEAD_SHAKE), K.addEventListener("animationend", W)
                }
            }
            createEventListener(R, "click", K => {
                if (K.target !== R) return;
                const W = L();
                W && (W.close ? pop$1.pop() : z())
            })
        },
        get children() {
            return [(() => {
                var R = _tmpl$$o();
                return `${swipeArea}px` != null ? R.style.setProperty("width", `${swipeArea}px`) : R.style.removeProperty("width"), createRenderEffect(() => className(R, cx("absolute left-0 h-full z-10", M() ? "pointer-events-auto" : "pointer-events-none"))), R
            })(), createComponent(For, {
                get each() {
                    return O()
                },
                children: R => createComponent(PopAne, {
                    item: R,
                    onScroll: I
                })
            })]
        }
    })
}

function PopAne(L) {
    return createComponent(ActiveProvider, {
        get value() {
            return L.item === pop$1.list[pop$1.list.length - 1]
        },
        get children() {
            return createComponent(ErrorBoundary, {
                fallback: O => (console.error(O), createComponent(Pop, {
                    get children() {
                        return createComponent(Toggle, {
                            get when() {
                                return env.isDev || env.isDevHost
                            },
                            get fallback() {
                                return createComponent(Empty, {
                                    type: "offline"
                                })
                            },
                            get children() {
                                return createComponent(Empty, {
                                    get children() {
                                        return String(O)
                                    }
                                })
                            }
                        })
                    }
                })),
                get children() {
                    return createComponent(Ref, {
                        ref: O => {
                            const M = O;
                            if (!M) return;
                            const I = !M.classList.contains("pop-center"),
                                [N] = L.item.ane.value;
                            if (createComputed(I ? () => {
                                    M.style.transform = `translate3d(0, ${(1-N())*100}%, 0)`
                                } : () => {
                                    M.style.opacity = String(N()), M.style.transform = `scale(${N()*.2+.8})`
                                }), I) {
                                const R = createBottomSheetDrag(() => M, L.item.ane.value, H => {
                                    H ? pop$1.pop() : L.item.ane.animateTo(1)
                                });
                                createComputed(H => {
                                    const z = R();
                                    if (H && !z) {
                                        L.onScroll(!0);
                                        const K = setTimeout(() => L.onScroll(!1), 2e3);
                                        onCleanup(() => clearTimeout(K))
                                    }
                                    return z
                                })
                            }
                        },
                        get children() {
                            return L.item.jsx()
                        }
                    })
                }
            })
        }
    })
}

function Pop(L) {
    const [, O] = splitProps(L, ["type", "title", "children", "class", "close"]), M = () => env.mobile ? L.type : "center", I = createMemo(() => M() !== "center");
    let N;
    return (() => {
        var R = _tmpl$2$e(),
            H = R.firstChild;
        return spread(R, mergeProps(O, {
            get class() {
                return cx("bg-layer3 dark:bg-layer2", I() ? "pop-bottomsheet" : "pop-center", L.class)
            }
        }), !1, !0), insert(H, () => L.title, null), insert(H, createComponent(Show, {
            get when() {
                return L.close !== !1
            },
            get children() {
                return createComponent(Button, {
                    onClick: () => pop$1.pop(),
                    class: "pop-close",
                    get children() {
                        return createComponent(Icon, {
                            name: "Close"
                        })
                    }
                })
            }
        }), null), insert(R, createComponent(ScrollView, {
            ref(z) {
                var K = N;
                typeof K == "function" ? K(z) : N = z
            },
            class: "pop-content",
            get children() {
                return createComponent(Suspense, {
                    get fallback() {
                        return getFullLoading()
                    },
                    get children() {
                        return L.children
                    }
                })
            }
        }), null), R
    })()
}

function Confirm(L) {
    return onCleanup(() => {
        L.onConfirm(!1)
    }), createComponent(Pop, {
        get title() {
            return L.title || defaultT("Confirm")
        },
        close: !1,
        get children() {
            return [(() => {
                var O = _tmpl$3$9();
                return insert(O, () => L.children), O
            })(), (() => {
                var O = _tmpl$4$5();
                return insert(O, createComponent(Button, {
                    class: "flex-1 mr-3 text-lg",
                    type: "second",
                    onClick: () => L.onConfirm(!1),
                    get children() {
                        return L.cancel || defaultT("Cancel")
                    }
                }), null), insert(O, createComponent(Button, {
                    class: "flex-1 text-lg",
                    onClick: () => L.onConfirm(!0),
                    type: "brand",
                    get children() {
                        return L.confirm || defaultT("Confirm")
                    }
                }), null), O
            })()]
        }
    })
}

function createClickOutside(L, O, M) {
    createEventListener(() => document.body, "click", I => {
        let N = L();
        if (N) {
            if (N = Array.isArray(N) ? N : [N], M) {
                const R = M();
                if (R && !(Array.isArray(R) ? R : [R]).every(H => !H.contains(I.target))) return
            }
            N.every(R => !R.contains(I.target)) && O(I)
        }
    })
}

function Transition(L) {
    const O = mergeProps((() => {
            const N = L.name;
            return N ? presets[N] : {}
        })(), L),
        M = resolveFirst(() => L.children),
        I = createSwitchTransition(M, {
            onEnter(N) {
                gsapWithCSS.killTweensOf(N), gsapWithCSS.fromTo(N, O.from, { ...O.to,
                    ...O.config
                })
            },
            onExit(N, R) {
                gsapWithCSS.killTweensOf(N), gsapWithCSS.fromTo(N, O.to, { ...O.from,
                    ...O.config,
                    onComplete: R
                })
            }
        });
    return createUnique(I)
}
const config = {
        duration: .3,
        ease: "power2.out"
    },
    presets = {
        fade: {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            },
            config
        },
        fadeUp: {
            from: {
                opacity: 0,
                y: "100%"
            },
            to: {
                opacity: 1,
                y: 0
            },
            config
        },
        fadeRight: {
            from: {
                opacity: 0,
                x: "100%"
            },
            to: {
                opacity: 1,
                x: 0
            },
            config
        },
        fadeDown: {
            from: {
                opacity: 0,
                y: "-100%"
            },
            to: {
                opacity: 1,
                y: 0
            },
            config
        },
        fadeLeft: {
            from: {
                opacity: 0,
                x: "-100%"
            },
            to: {
                opacity: 1,
                x: 0
            },
            config
        },
        fadeUp2: {
            from: {
                opacity: 0,
                y: 16
            },
            to: {
                opacity: 1,
                y: 0
            },
            config
        },
        fadeRight2: {
            from: {
                opacity: 0,
                x: 16
            },
            to: {
                opacity: 1,
                x: 0
            },
            config
        },
        fadeDown2: {
            from: {
                opacity: 0,
                y: -16
            },
            to: {
                opacity: 1,
                y: 0
            },
            config
        },
        fadeLeft2: {
            from: {
                opacity: 0,
                x: -16
            },
            to: {
                opacity: 1,
                x: 0
            },
            config
        },
        slideUp: {
            from: {
                y: "100%"
            },
            to: {
                y: 0
            },
            config
        },
        slideRight: {
            from: {
                x: "100%"
            },
            to: {
                x: 0
            },
            config
        },
        slideDown: {
            from: {
                y: "-100%"
            },
            to: {
                y: 0
            },
            config
        },
        slideLeft: {
            from: {
                x: "-100%"
            },
            to: {
                x: 0
            },
            config
        },
        fadeZoom: {
            from: {
                opacity: 0,
                scale: .3
            },
            to: {
                opacity: 1,
                scale: 1
            },
            config
        }
    };

function createUnique(L) {
    const O = new Set;
    return () => {
        const M = L();
        return O.clear(), M.forEach(I => O.add(I)), [...O.keys()]
    }
}
const NestCtx = createContext(() => {});

function PcLayer(L) {
    const [O, M] = createSignal(), [, I] = splitDropProps(L), [N, R] = createSignal(!1), H = useContext(NestCtx);
    createEffect(() => {
        L.visible && (H(!0), onCleanup(() => H(!1)))
    });
    const z = useScrollElement();
    createEventListener(() => L.visible ? z() : void 0, "scroll", W => L.setVisible(!1));
    const K = createMemo(() => L.visible && !N() ? O() : void 0);
    return createClickOutside(K, () => {
        setTimeout(() => L.setVisible(!1), 0)
    }, () => L.trigger), createComponent(NestCtx.Provider, {
        value: R,
        get children() {
            return createComponent(Portal, {
                get children() {
                    return createComponent(Transition, {
                        from: {
                            opacity: 0,
                            y: -10
                        },
                        to: {
                            opacity: 1,
                            y: 0
                        },
                        config: {
                            duration: .2
                        },
                        get children() {
                            return createComponent(Toggle, {
                                get when() {
                                    return L.visible
                                },
                                get children() {
                                    return createComponent(ScrollView, mergeProps(I, {
                                        get class() {
                                            return cx("dropdown-layer bg-layer3", I.class)
                                        },
                                        ref(W) {
                                            var X = mergeRefs(G => {
                                                M(G)
                                            }, L.ref);
                                            typeof X == "function" && X(W)
                                        },
                                        get children() {
                                            return createComponent(Suspense, {
                                                get children() {
                                                    return L.layer
                                                }
                                            })
                                        }
                                    }))
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

function MobileLayer(L) {
    const [, O] = splitDropProps(L), M = createRootPool(() => createComponent(ActiveProvider, {
        get value() {
            return L.visible
        },
        force: !0,
        get children() {
            return createComponent(Pop, mergeProps(O, {
                get class() {
                    return cx("min-h-52", L.class)
                },
                get title() {
                    return L.title || "Select"
                },
                get children() {
                    return createComponent(Suspense, {
                        get children() {
                            return L.layer
                        }
                    })
                }
            }))
        }
    }));

    function I() {
        return onCleanup(() => L.setVisible(!1)), M()
    }
    return createComputed(N => {
        L.visible ? (pop$1.push(I), onCleanup(() => pop$1.pop(I))) : pop$1.pop(I)
    }), null
}
const DEFAULT_SPACE = 8;

function DropDown(L) {
    const [O, M] = createSignal(), [I, N] = createSignal(), [R, H] = createSignal({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }), z = () => (L.space ? ? DEFAULT_SPACE) * env.remScale;
    createComputed(() => {
        const W = L.trigger;
        W && M(W)
    }), createEventListener(O, "click", W => {
        const X = I();
        X && X.contains(W.target) || L.setVisible(!L.visible)
    }), createEffect(() => {
        const W = O(),
            X = I();
        !W || !X || !L.visible || queueMicrotask(() => {
            X.style.setProperty("min-height", ""), X.style.setProperty("max-height", ""), X.style.setProperty("width", "");
            const G = W.getBoundingClientRect(),
                Y = X.getBoundingClientRect(),
                Z = G.top,
                Q = window.innerHeight - G.bottom,
                J = W.clientHeight + Y.height + z(),
                _ = () => Q >= Y.height + z() * 2 || Q >= Z ? 1 : -1,
                ee = _() === 1 ? Q : Z,
                te = J + z() > ee,
                ie = () => te ? ee - z() * 2 : Y.height,
                re = G.x + Y.width < window.innerWidth ? G.x : Math.max(0, G.x - Y.width + W.clientWidth),
                oe = _() === 1 ? G.bottom + z() : G.top - ie() - z();
            H({
                x: re,
                y: oe,
                width: Math.max(Y.width, W.clientWidth),
                height: te ? ie() : 0
            })
        })
    });
    const K = createMemo(() => L.dropdownType ? L.dropdownType === "pop" : env.mobile);
    return [createComponent(Ref, {
        ref: M,
        get children() {
            return L.children
        }
    }), createComponent(Show, {
        get when() {
            return K()
        },
        get fallback() {
            return createComponent(PcLayer, mergeProps(L, {
                get style() {
                    return {
                        left: `${R().x}px`,
                        top: `${R().y}px`,
                        width: R().width > 0 ? `${R().width}px` : void 0,
                        ...R().height ? {
                            "min-height": `${R().height}px`,
                            "max-height": `${R().height}px`
                        } : {}
                    }
                },
                get trigger() {
                    return O()
                },
                ref: N
            }))
        },
        get children() {
            return createComponent(MobileLayer, L)
        }
    })]
}

function splitDropProps(L) {
    return splitProps(L, ["visible", "title", "setVisible", "layer", "trigger"])
}

function DatePicker(L) {
    const [, O] = splitProps(L, ["value", "onChange", "options", "class", "format"]), M = createMemo(() => L.format || (X => Array.isArray(X) ? X.map(G => G ? .toLocaleDateString() || "").join("-") : X.toLocaleDateString())), I = mergeProps(options, L.options), N = Array.isArray(L.value);
    N ? L.value.forEach(X => X.setHours(0, 0, 0, 0)) : L.value.setHours(0, 0, 0, 0);
    const [R, H] = createStore({
        options: I,
        view: "days",
        show: !1,
        selectedDate: Array.isArray(L.value) ? L.value[0] : L.value
    });

    function z(X) {
        L.onChange(X), N || H("show", !1)
    }
    const [K, W] = createSignal();
    return createComponent(DatePickerContext.Provider, {
        value: {
            state: R,
            setState: H,
            value: () => L.value,
            onChange: z
        },
        get children() {
            return createComponent(Ref, {
                ref: W,
                get children() {
                    return createComponent(Input, mergeProps(O, {
                        readOnly: !0,
                        get value() {
                            return M()(L.value)
                        },
                        get class() {
                            return cx("relative", L.class)
                        },
                        get children() {
                            return [memo$2(() => L.children || createComponent(Icon, {
                                class: "order-first -m-1 mr-2",
                                name: "Calendar"
                            })), createComponent(DropDown, {
                                get class() {
                                    return cx(!env.mobile && "w-96")
                                },
                                get title() {
                                    return L.title || "Date Picker"
                                },
                                get visible() {
                                    return R.show
                                },
                                setVisible: X => H("show", X),
                                get layer() {
                                    return createComponent(DatePickerLayer, {})
                                },
                                get trigger() {
                                    return K()
                                }
                            })]
                        }
                    }))
                }
            })
        }
    })
}

function Each(L) {
    const O = useActiveMemo(() => L.each),
        M = createRootPool((I, N) => L.component({
            get data() {
                return I()
            },
            get active() {
                return N()
            }
        }), {
            limit: L.limit || 100
        });
    return createComponent(For, {
        get each() {
            return O()
        },
        get fallback() {
            return L.fallback
        },
        children: I => M(I)
    })
}

function memo(L, O, M) {
    let I = M.initialDeps ? ? [],
        N;

    function R() {
        var H, z, K, W;
        let X;
        M.key && (H = M.debug) != null && H.call(M) && (X = Date.now());
        const G = L();
        if (!(G.length !== I.length || G.some((Z, Q) => I[Q] !== Z))) return N;
        I = G;
        let Y;
        if (M.key && (z = M.debug) != null && z.call(M) && (Y = Date.now()), N = O(...G), M.key && (K = M.debug) != null && K.call(M)) {
            const Z = Math.round((Date.now() - X) * 100) / 100,
                Q = Math.round((Date.now() - Y) * 100) / 100,
                J = Q / 16,
                _ = (ee, te) => {
                    for (ee = String(ee); ee.length < te;) ee = " " + ee;
                    return ee
                };
            console.info(`%c⏱ ${_(Q,5)} /${_(Z,5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*J,120))}deg 100% 31%);`, M ? .key)
        }
        return (W = M ? .onChange) == null || W.call(M, N), N
    }
    return R.updateDeps = H => {
        I = H
    }, R
}

function notUndefined(L, O) {
    if (L === void 0) throw new Error("Unexpected undefined");
    return L
}
const approxEqual = (L, O) => Math.abs(L - O) < 1,
    debounce = (L, O, M) => {
        let I;
        return function(...N) {
            L.clearTimeout(I), I = L.setTimeout(() => O.apply(this, N), M)
        }
    },
    defaultKeyExtractor = L => L,
    defaultRangeExtractor = L => {
        const O = Math.max(L.startIndex - L.overscan, 0),
            M = Math.min(L.endIndex + L.overscan, L.count - 1),
            I = [];
        for (let N = O; N <= M; N++) I.push(N);
        return I
    },
    observeElementRect = (L, O) => {
        const M = L.scrollElement;
        if (!M) return;
        const I = L.targetWindow;
        if (!I) return;
        const N = H => {
            const {
                width: z,
                height: K
            } = H;
            O({
                width: Math.round(z),
                height: Math.round(K)
            })
        };
        if (N(M.getBoundingClientRect()), !I.ResizeObserver) return () => {};
        const R = new I.ResizeObserver(H => {
            const z = () => {
                const K = H[0];
                if (K != null && K.borderBoxSize) {
                    const W = K.borderBoxSize[0];
                    if (W) {
                        N({
                            width: W.inlineSize,
                            height: W.blockSize
                        });
                        return
                    }
                }
                N(M.getBoundingClientRect())
            };
            L.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(z) : z()
        });
        return R.observe(M, {
            box: "border-box"
        }), () => {
            R.unobserve(M)
        }
    },
    addEventListenerOptions = {
        passive: !0
    },
    supportsScrollend = typeof window > "u" ? !0 : "onscrollend" in window,
    observeElementOffset = (L, O) => {
        const M = L.scrollElement;
        if (!M) return;
        const I = L.targetWindow;
        if (!I) return;
        let N = 0;
        const R = L.options.useScrollendEvent && supportsScrollend ? () => {} : debounce(I, () => {
                O(N, !1)
            }, L.options.isScrollingResetDelay),
            H = X => () => {
                const {
                    horizontal: G,
                    isRtl: Y
                } = L.options;
                N = G ? M.scrollLeft * (Y && -1 || 1) : M.scrollTop, R(), O(N, X)
            },
            z = H(!0),
            K = H(!1);
        K(), M.addEventListener("scroll", z, addEventListenerOptions);
        const W = L.options.useScrollendEvent && supportsScrollend;
        return W && M.addEventListener("scrollend", K, addEventListenerOptions), () => {
            M.removeEventListener("scroll", z), W && M.removeEventListener("scrollend", K)
        }
    },
    measureElement = (L, O, M) => {
        if (O != null && O.borderBoxSize) {
            const I = O.borderBoxSize[0];
            if (I) return Math.round(I[M.options.horizontal ? "inlineSize" : "blockSize"])
        }
        return Math.round(L.getBoundingClientRect()[M.options.horizontal ? "width" : "height"])
    },
    elementScroll = (L, {
        adjustments: O = 0,
        behavior: M
    }, I) => {
        var N, R;
        const H = L + O;
        (R = (N = I.scrollElement) == null ? void 0 : N.scrollTo) == null || R.call(N, {
            [I.options.horizontal ? "left" : "top"]: H,
            behavior: M
        })
    };
class Virtualizer {
    constructor(O) {
        this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = new Map, this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = new Map, this.observer = (() => {
            let M = null;
            const I = () => M || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : M = new this.targetWindow.ResizeObserver(N => {
                N.forEach(R => {
                    const H = () => {
                        this._measureElement(R.target, R)
                    };
                    this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(H) : H()
                })
            }));
            return {
                disconnect: () => {
                    var N;
                    (N = I()) == null || N.disconnect(), M = null
                },
                observe: N => {
                    var R;
                    return (R = I()) == null ? void 0 : R.observe(N, {
                        box: "border-box"
                    })
                },
                unobserve: N => {
                    var R;
                    return (R = I()) == null ? void 0 : R.unobserve(N)
                }
            }
        })(), this.range = null, this.setOptions = M => {
            Object.entries(M).forEach(([I, N]) => {
                typeof N > "u" && delete M[I]
            }), this.options = {
                debug: !1,
                initialOffset: 0,
                overscan: 1,
                paddingStart: 0,
                paddingEnd: 0,
                scrollPaddingStart: 0,
                scrollPaddingEnd: 0,
                horizontal: !1,
                getItemKey: defaultKeyExtractor,
                rangeExtractor: defaultRangeExtractor,
                onChange: () => {},
                measureElement,
                initialRect: {
                    width: 0,
                    height: 0
                },
                scrollMargin: 0,
                gap: 0,
                indexAttribute: "data-index",
                initialMeasurementsCache: [],
                lanes: 1,
                isScrollingResetDelay: 150,
                enabled: !0,
                isRtl: !1,
                useScrollendEvent: !1,
                useAnimationFrameWithResizeObserver: !1,
                ...M
            }
        }, this.notify = M => {
            var I, N;
            (N = (I = this.options).onChange) == null || N.call(I, this, M)
        }, this.maybeNotify = memo(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), M => {
            this.notify(M)
        }, {
            key: !1,
            debug: () => this.options.debug,
            initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
        }), this.cleanup = () => {
            this.unsubs.filter(Boolean).forEach(M => M()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null
        }, this._didMount = () => () => {
            this.cleanup()
        }, this._willUpdate = () => {
            var M;
            const I = this.options.enabled ? this.options.getScrollElement() : null;
            if (this.scrollElement !== I) {
                if (this.cleanup(), !I) {
                    this.maybeNotify();
                    return
                }
                this.scrollElement = I, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((M = this.scrollElement) == null ? void 0 : M.window) ? ? null, this.elementsCache.forEach(N => {
                    this.observer.observe(N)
                }), this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0
                }), this.unsubs.push(this.options.observeElementRect(this, N => {
                    this.scrollRect = N, this.maybeNotify()
                })), this.unsubs.push(this.options.observeElementOffset(this, (N, R) => {
                    this.scrollAdjustments = 0, this.scrollDirection = R ? this.getScrollOffset() < N ? "forward" : "backward" : null, this.scrollOffset = N, this.isScrolling = R, this.maybeNotify()
                }))
            }
        }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ? ? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ? ? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (M, I) => {
            const N = new Map,
                R = new Map;
            for (let H = I - 1; H >= 0; H--) {
                const z = M[H];
                if (N.has(z.lane)) continue;
                const K = R.get(z.lane);
                if (K == null || z.end > K.end ? R.set(z.lane, z) : z.end < K.end && N.set(z.lane, !0), N.size === this.options.lanes) break
            }
            return R.size === this.options.lanes ? Array.from(R.values()).sort((H, z) => H.end === z.end ? H.index - z.index : H.end - z.end)[0] : void 0
        }, this.getMeasurementOptions = memo(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled], (M, I, N, R, H) => (this.pendingMeasuredCacheIndexes = [], {
            count: M,
            paddingStart: I,
            scrollMargin: N,
            getItemKey: R,
            enabled: H
        }), {
            key: !1
        }), this.getMeasurements = memo(() => [this.getMeasurementOptions(), this.itemSizeCache], ({
            count: M,
            paddingStart: I,
            scrollMargin: N,
            getItemKey: R,
            enabled: H
        }, z) => {
            if (!H) return this.measurementsCache = [], this.itemSizeCache.clear(), [];
            this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(X => {
                this.itemSizeCache.set(X.key, X.size)
            }));
            const K = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
            this.pendingMeasuredCacheIndexes = [];
            const W = this.measurementsCache.slice(0, K);
            for (let X = K; X < M; X++) {
                const G = R(X),
                    Y = this.options.lanes === 1 ? W[X - 1] : this.getFurthestMeasurement(W, X),
                    Z = Y ? Y.end + this.options.gap : I + N,
                    Q = z.get(G),
                    J = typeof Q == "number" ? Q : this.options.estimateSize(X),
                    _ = Z + J,
                    ee = Y ? Y.lane : X % this.options.lanes;
                W[X] = {
                    index: X,
                    start: Z,
                    size: J,
                    end: _,
                    key: G,
                    lane: ee
                }
            }
            return this.measurementsCache = W, W
        }, {
            key: !1,
            debug: () => this.options.debug
        }), this.calculateRange = memo(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (M, I, N, R) => this.range = M.length > 0 && I > 0 ? calculateRange({
            measurements: M,
            outerSize: I,
            scrollOffset: N,
            lanes: R
        }) : null, {
            key: !1,
            debug: () => this.options.debug
        }), this.getVirtualIndexes = memo(() => {
            let M = null,
                I = null;
            const N = this.calculateRange();
            return N && (M = N.startIndex, I = N.endIndex), this.maybeNotify.updateDeps([this.isScrolling, M, I]), [this.options.rangeExtractor, this.options.overscan, this.options.count, M, I]
        }, (M, I, N, R, H) => R === null || H === null ? [] : M({
            startIndex: R,
            endIndex: H,
            overscan: I,
            count: N
        }), {
            key: !1,
            debug: () => this.options.debug
        }), this.indexFromElement = M => {
            const I = this.options.indexAttribute,
                N = M.getAttribute(I);
            return N ? parseInt(N, 10) : (console.warn(`Missing attribute name '${I}={index}' on measured element.`), -1)
        }, this._measureElement = (M, I) => {
            const N = this.indexFromElement(M),
                R = this.measurementsCache[N];
            if (!R) return;
            const H = R.key,
                z = this.elementsCache.get(H);
            z !== M && (z && this.observer.unobserve(z), this.observer.observe(M), this.elementsCache.set(H, M)), M.isConnected && this.resizeItem(N, this.options.measureElement(M, I, this))
        }, this.resizeItem = (M, I) => {
            const N = this.measurementsCache[M];
            if (!N) return;
            const R = this.itemSizeCache.get(N.key) ? ? N.size,
                H = I - R;
            H !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(N, H, this) : N.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
                adjustments: this.scrollAdjustments += H,
                behavior: void 0
            }), this.pendingMeasuredCacheIndexes.push(N.index), this.itemSizeCache = new Map(this.itemSizeCache.set(N.key, I)), this.notify(!1))
        }, this.measureElement = M => {
            if (!M) {
                this.elementsCache.forEach((I, N) => {
                    I.isConnected || (this.observer.unobserve(I), this.elementsCache.delete(N))
                });
                return
            }
            this._measureElement(M, void 0)
        }, this.getVirtualItems = memo(() => [this.getVirtualIndexes(), this.getMeasurements()], (M, I) => {
            const N = [];
            for (let R = 0, H = M.length; R < H; R++) {
                const z = M[R],
                    K = I[z];
                N.push(K)
            }
            return N
        }, {
            key: !1,
            debug: () => this.options.debug
        }), this.getVirtualItemForOffset = M => {
            const I = this.getMeasurements();
            if (I.length !== 0) return notUndefined(I[findNearestBinarySearch(0, I.length - 1, N => notUndefined(I[N]).start, M)])
        }, this.getOffsetForAlignment = (M, I, N = 0) => {
            const R = this.getSize(),
                H = this.getScrollOffset();
            I === "auto" && (I = M >= H + R ? "end" : "start"), I === "center" ? M += (N - R) / 2 : I === "end" && (M -= R);
            const z = this.options.horizontal ? "scrollWidth" : "scrollHeight",
                K = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[z] : this.scrollElement[z] : 0) - R;
            return Math.max(Math.min(K, M), 0)
        }, this.getOffsetForIndex = (M, I = "auto") => {
            M = Math.max(0, Math.min(M, this.options.count - 1));
            const N = this.measurementsCache[M];
            if (!N) return;
            const R = this.getSize(),
                H = this.getScrollOffset();
            if (I === "auto")
                if (N.end >= H + R - this.options.scrollPaddingEnd) I = "end";
                else if (N.start <= H + this.options.scrollPaddingStart) I = "start";
            else return [H, I];
            const z = I === "end" ? N.end + this.options.scrollPaddingEnd : N.start - this.options.scrollPaddingStart;
            return [this.getOffsetForAlignment(z, I, N.size), I]
        }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
            this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null)
        }, this.scrollToOffset = (M, {
            align: I = "start",
            behavior: N
        } = {}) => {
            this.cancelScrollToIndex(), N === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(M, I), {
                adjustments: void 0,
                behavior: N
            })
        }, this.scrollToIndex = (M, {
            align: I = "auto",
            behavior: N
        } = {}) => {
            M = Math.max(0, Math.min(M, this.options.count - 1)), this.cancelScrollToIndex(), N === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
            const R = this.getOffsetForIndex(M, I);
            if (!R) return;
            const [H, z] = R;
            this._scrollToOffset(H, {
                adjustments: void 0,
                behavior: N
            }), N !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(this.options.getItemKey(M))) {
                    const [K] = notUndefined(this.getOffsetForIndex(M, z));
                    approxEqual(K, this.getScrollOffset()) || this.scrollToIndex(M, {
                        align: z,
                        behavior: N
                    })
                } else this.scrollToIndex(M, {
                    align: z,
                    behavior: N
                })
            }))
        }, this.scrollBy = (M, {
            behavior: I
        } = {}) => {
            this.cancelScrollToIndex(), I === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + M, {
                adjustments: void 0,
                behavior: I
            })
        }, this.getTotalSize = () => {
            var M;
            const I = this.getMeasurements();
            let N;
            if (I.length === 0) N = this.options.paddingStart;
            else if (this.options.lanes === 1) N = ((M = I[I.length - 1]) == null ? void 0 : M.end) ? ? 0;
            else {
                const R = Array(this.options.lanes).fill(null);
                let H = I.length - 1;
                for (; H > 0 && R.some(z => z === null);) {
                    const z = I[H];
                    R[z.lane] === null && (R[z.lane] = z.end), H--
                }
                N = Math.max(...R.filter(z => z !== null))
            }
            return Math.max(N - this.options.scrollMargin + this.options.paddingEnd, 0)
        }, this._scrollToOffset = (M, {
            adjustments: I,
            behavior: N
        }) => {
            this.options.scrollToFn(M, {
                behavior: N,
                adjustments: I
            }, this)
        }, this.measure = () => {
            this.itemSizeCache = new Map, this.notify(!1)
        }, this.setOptions(O)
    }
}
const findNearestBinarySearch = (L, O, M, I) => {
    for (; L <= O;) {
        const N = (L + O) / 2 | 0,
            R = M(N);
        if (R < I) L = N + 1;
        else if (R > I) O = N - 1;
        else return N
    }
    return L > 0 ? L - 1 : 0
};

function calculateRange({
    measurements: L,
    outerSize: O,
    scrollOffset: M,
    lanes: I
}) {
    const N = L.length - 1,
        R = K => L[K].start;
    if (L.length <= I) return {
        startIndex: 0,
        endIndex: N
    };
    let H = findNearestBinarySearch(0, N, R, M),
        z = H;
    if (I === 1)
        for (; z < N && L[z].end < M + O;) z++;
    else if (I > 1) {
        const K = Array(I).fill(0);
        for (; z < N && K.some(X => X < M + O);) {
            const X = L[z];
            K[X.lane] = X.end, z++
        }
        const W = Array(I).fill(M + O);
        for (; H > 0 && W.some(X => X >= M);) {
            const X = L[H];
            W[X.lane] = X.start, H--
        }
        H = Math.max(0, H - H % I), z = Math.min(N, z + (I - 1 - z % I))
    }
    return {
        startIndex: H,
        endIndex: z
    }
}
var _tmpl$$n = template('<div class="h-44 py-2"><div class="bg-quarterary h-full">'),
    _tmpl$2$d = template("<div class=relative>");

function FlatList(L) {
    let O;
    const [M, I] = splitProps(mergeProps({
        estimateSize: () => 100,
        pool: 100,
        overscan: 10
    }, L), ["data", "overscan", "estimateSize", "getComponent", "pool", "paddingStart", "paddingEnd", "windowScroll", "bodyLock", "children", "ref", "classitem", "onChange", "getItemKey"]), [N, R] = createStore([]), [H, z] = createSignal(0), K = J => {
        J._willUpdate(), R(reconcile(J.getVirtualItems().filter(_ => _), {
            key: "key"
        })), z(J.getTotalSize())
    }, W = {
        count: M.data.length,
        overscan: M.overscan,
        estimateSize: M.estimateSize,
        getItemKey: M.getItemKey,
        getScrollElement() {
            return O
        },
        paddingStart: M.paddingStart,
        paddingEnd: M.paddingEnd,
        rangeExtractor: createBatchRange(M.onChange),
        observeElementOffset,
        observeElementRect,
        scrollToFn: elementScroll,
        onChange: K
    }, X = new Virtualizer(W);

    function G(J, _) {
        const ee = new Set(_.map(te => te.id));
        return J.filter(te => !ee.has(te.id)).map(te => te.id)
    }
    createEffect(J => {
        const _ = M.data;
        return untrack(() => {
            W.count === 0 && (W.count = _.length), X.setOptions(W), _.length > J.length || G(J, _).forEach(ee => {
                X.itemSizeCache.delete(ee)
            }), K(X)
        }), _
    }, []);
    const Y = M.ref;
    Y && (Y(X), onCleanup(() => Y()));
    const Z = new Map;

    function Q(J) {
        const _ = L.getComponent(J);
        let ee = Z.get(_);
        return ee || (ee = createRootPool((te, ie) => {
            const re = () => te()[0],
                oe = createComponent(FlatCtx.Provider, {
                    value: {
                        resizeItem: ne,
                        get index() {
                            return re().index
                        }
                    },
                    get children() {
                        return createComponent(ActiveProvider, {
                            get value() {
                                return ie()
                            },
                            get children() {
                                return _tmpl$$n()
                            }
                        })
                    }
                }),
                ae = children(() => oe).toArray()[0];
            createEffect(() => {
                const se = re().index;
                X.itemSizeCache.has(se) || ne()
            });

            function ne() {
                ae && untrack(() => {
                    X.resizeItem(re().index, ae.getBoundingClientRect().height)
                })
            }
            return ae.classList.add("absolute", "left-0", "w-full", "top-0"), createEffect(() => {
                ae.style.transform = `translateY(${re().start}px)`
            }), oe
        }, {
            limit: M.pool
        }), Z.set(_, ee)), ee
    }
    return createComponent(ScrollView, mergeProps(I, {
        get class() {
            return cx("will-change-transform", L.class)
        },
        ref(J) {
            var _ = O;
            typeof _ == "function" ? _(J) : O = J
        },
        get children() {
            var J = _tmpl$2$d();
            return J.style.setProperty("background", "linear-gradient(0deg, rgb(240, 240, 240) 25%, rgb(235, 69, 69) 25%, rgb(255, 255, 255) 50%) 0% 0% / 100% 30px"), insert(J, () => M.children, null), insert(J, createComponent(For, {
                each: N,
                children: _ => Q(M.data[_.index])([_, M.data[_.index]])
            }), null), createRenderEffect(_ => (_ = `${H()}px`) != null ? J.style.setProperty("height", _) : J.style.removeProperty("height")), J
        }
    }))
}
const FlatCtx = createContext({
    resizeItem() {},
    get index() {
        return 0
    }
});

function useFlatItem() {
    return useContext(FlatCtx)
}

function createBatchRange(L) {
    const O = {
        start: 0,
        end: -1,
        indexs: []
    };
    return M => {
        const I = Math.max(M.startIndex, 0),
            N = Math.max(Math.min(M.endIndex, M.count - 1), I);
        if (I < O.start || N > O.end || I === N) {
            const R = Math.max(I - M.overscan, 0),
                H = Math.max(Math.min(N + M.overscan, M.count - 1), I),
                z = [];
            for (let K = R; K <= H; K++) z.push(K);
            O.start = R, O.end = H, O.indexs = z
        }
        return L && L(M.startIndex, M.endIndex), O.indexs
    }
}

function ListView$1(L) {
    const O = useScrollElement();

    function M(N, R) {
        const [H, {
            remove: z
        }] = I(), K = L.lazy ? !L.lazy(N) : !1, [W, X] = createSignal(isBot || K), G = children(() => L.children(() => W() ? N : void 0, R));
        if (!K) {
            const Y = resolveFirst(G);
            createEffect(() => {
                const Z = Y();
                H(Z, Q => {
                    Q.isIntersecting && X(!0)
                }), onCleanup(() => {
                    z(Z)
                })
            })
        }
        return G
    }
    const I = createMemo(() => {
        const N = O();
        if (N) return createViewportObserver({
            root: N instanceof Element ? N : void 0,
            rootMargin: L.rootMargin
        })
    });
    return createComponent(Show, {
        get when() {
            return O()
        },
        get children() {
            return createComponent(For, {
                get each() {
                    return L.each
                },
                children: M
            })
        }
    })
}
var _tmpl$$m = template("<div>"),
    _tmpl$2$c = template('<div class="col-span-full py-4 center">'),
    _tmpl$3$8 = template('<div class="col-span-full h-20 font-extrabold center">');

function ListView(L) {
    const [, O] = splitProps(L, ["resource", "offset", "key", "children", "ListRoot", "init", "empty", "flat"]), [M, I] = createSignal(), N = createVisibilityObserver({})(M);
    createEffect(z => {
        const K = N();
        return !z && K && L.resource.next(), K
    });
    const R = children(() => createComponent(For, {
            get each() {
                return L.resource.list
            },
            children: (z, K) => createComponent(For, {
                get each() {
                    return L.flat(z)
                },
                children: (W, X) => L.children(W, () => X() * (K() + 1))
            })
        })),
        H = createMemo(() => {
            const z = L.resource.list[0];
            return z && L.flat(z).length > 0
        });
    return [(() => {
        var z = _tmpl$$m();
        return spread(z, mergeProps(O, {
            get class() {
                return cx("grid", L.class)
            }
        }), !1, !0), insert(z, createComponent(Show, {
            get when() {
                return H()
            },
            get fallback() {
                return createComponent(Show, {
                    get when() {
                        return L.resource.pending
                    },
                    get fallback() {
                        return L.empty || createComponent(Empty, {
                            class: "col-span-full"
                        })
                    },
                    get children() {
                        return L.init
                    }
                })
            },
            get children() {
                return createComponent(Show, {
                    get when() {
                        return L.ListRoot
                    },
                    keyed: !0,
                    fallback: R,
                    children: K => createComponent(K, {
                        children: R
                    })
                })
            }
        })), z
    })(), createComponent(Show, {
        get when() {
            return H()
        },
        get children() {
            return createComponent(Show, {
                get when() {
                    return L.resource.page < L.resource.total
                },
                get fallback() {
                    return (() => {
                        var z = _tmpl$3$8();
                        return insert(z, () => defaultT("No More")), z
                    })()
                },
                get children() {
                    var z = _tmpl$2$c();
                    return use(I, z), insert(z, createComponent(Loading, {})), z
                }
            })
        }
    })]
}

function createPaginationResource(L, O, M) {
    const [I, N] = useTransition(), [R, H] = createSignal(1), [z, K] = createSignal([]);
    if (M) {
        const Y = createMemo(() => JSON.stringify(M()));
        createComputed(Z => {
            const Q = Y();
            return Z && (K([]), H(1)), Q
        })
    }
    const W = createMemo(() => {
            const Y = z(),
                Z = Y[Y.length - 1];
            return Z ? O(Z) : 1 / 0
        }),
        X = () => {
            untrack(I) || N(() => {
                H(Y => {
                    const Z = W(),
                        Q = R() + 1;
                    return Q <= Z ? Q : Y
                })
            })
        },
        [G] = L(R);
    return createComputed(() => {
        const Y = G(),
            Z = untrack(R);
        Y && K(Q => {
            const J = Q.concat();
            return J[Z - 1] = Y, J
        })
    }), {
        get list() {
            return z()
        },
        get page() {
            return R()
        },
        get total() {
            return W()
        },
        next: X,
        get pending() {
            return I()
        }
    }
}

function createMutationObserver(L, O, M) {
    let I, N;
    const R = typeof window < "u" && "MutationObserver" in window;
    typeof O == "function" ? (I = {}, N = O) : (I = O, N = M);
    const H = R ? new MutationObserver(N) : void 0,
        z = (X, G) => H ? .observe(X, access(G) ? ? I),
        K = () => {
            asArray(access(L)).forEach(X => {
                X instanceof Node ? z(X, I) : z(X[0], X[1])
            })
        },
        W = () => H ? .disconnect();
    return onMount(K), onCleanup(W), [z, {
        start: K,
        stop: W,
        instance: H,
        isSupported: R
    }]
}
var _tmpl$$l = template('<div><div class="bg-layer6 rounded h-full">');

function ScrollbarBase(L) {
    const [, O] = splitProps(L, ["class", "scrollLeft", "scrollWidth", "clientWidth"]), M = createMemo(() => L.scrollWidth - L.clientWidth), I = () => L.scrollLeft / M(), N = () => L.clientWidth / L.scrollWidth, R = () => {
        const H = N();
        return I() * (1 - H) / H
    };
    return (() => {
        var H = _tmpl$$l(),
            z = H.firstChild;
        return spread(H, mergeProps(O, {
            get class() {
                return cx("h-1 rounded-sm bg-layer4 overflow-hidden", L.class)
            }
        }), !1, !0), createRenderEffect(K => {
            var W = `translateX(${100*R()}%)`,
                X = `${100*N()}%`;
            return W !== K.e && ((K.e = W) != null ? z.style.setProperty("transform", W) : z.style.removeProperty("transform")), X !== K.t && ((K.t = X) != null ? z.style.setProperty("width", X) : z.style.removeProperty("width")), K
        }, {
            e: void 0,
            t: void 0
        }), H
    })()
}

function createScrollProps(L) {
    const [O, M] = createStore({
        isScrolling: !1,
        scrollLeft: 0,
        scrollTop: 0,
        scrollWidth: 1,
        scrollHeight: 1,
        clientWidth: 0,
        clientHeight: 0
    }), [I, {
        stop: N
    }] = createMutationObserver([], {
        childList: !0
    }, () => {
        M({
            scrollWidth: L().scrollWidth,
            scrollHeight: L().scrollHeight,
            clientWidth: L().clientWidth,
            clientHeight: L().clientHeight
        })
    });
    createResizeObserver(L, () => {
        M({
            scrollWidth: L().scrollWidth,
            scrollHeight: L().scrollHeight,
            clientWidth: L().clientWidth,
            clientHeight: L().clientHeight
        })
    }), createEffect(() => {
        L() && (I(L()), onCleanup(() => {
            N()
        }))
    });
    let R;
    return createEventListener(L, "scroll", H => {
        R !== null && clearTimeout(R), R = setTimeout(() => {
            M("isScrolling", !1)
        }, 60), M("isScrolling", !0), M("scrollLeft", H.target.scrollLeft), M("scrollTop", H.target.scrollTop)
    }), createEventListener(L, "scrollend", () => {
        M("isScrolling", !1)
    }), O
}
const Scrollbar = ScrollbarBase;
Scrollbar.createScrollProps = createScrollProps;
var _tmpl$$k = template('<div><div class="text-xl flex items-center mb-2 h-8 leading-8"><span class="text-primary_brand font-bold">'),
    _tmpl$2$b = template('<div class="center absolute -top-1 right-0 z-10">');

function GridScrollView(L) {
    const O = L.loop || 0,
        [M, I] = createSignal(O),
        N = () => L.loop ? () => I(0) : void 0,
        R = () => L.loop ? () => I(O) : void 0;
    return (() => {
        var H = _tmpl$$k(),
            z = H.firstChild,
            K = z.firstChild;
        return H.addEventListener("pointerleave", R), addEventListener$1(H, "pointerenter", N()), insert(z, (() => {
            var W = memo$2(() => !!L.icon);
            return () => W() && createComponent(Icon, {
                class: "!w-5 !h-5 mr-1 text-secondary",
                get name() {
                    return L.icon
                }
            })
        })(), K), insert(K, () => L.title), insert(H, createComponent(Suspense, {
            get fallback() {
                return createComponent(Loading, {})
            },
            get children() {
                return createComponent(GridScrollList, mergeProps(L, {
                    loop: M,
                    get navChildren() {
                        return L.navChildren
                    },
                    get viewAllClassName() {
                        return L.viewAllClassName
                    }
                }))
            }
        }), null), createRenderEffect(() => className(H, cx("relative mt-4", L.class))), H
    })()
}

function GridScrollList(L) {
    createSignal(0);
    const O = createSignal(!0),
        M = createSignal(!1),
        I = "center w-9 h-9 bg-primary",
        [N] = createResource(() => L.getData(), async R => R instanceof Promise ? await R : R);
    return (() => {
        var R = _tmpl$2$b();
        return insert(R, () => L.navChildren, null), insert(R, createComponent(Button, {
            get disabled() {
                return !M[0]()
            },
            onClick: () => {},
            class: `${I} mr-0.5`,
            get children() {
                return createComponent(Icon, {
                    class: "rotate-180",
                    name: "Arrow"
                })
            }
        }), null), insert(R, createComponent(Button, {
            get disabled() {
                return !O[0]()
            },
            onClick: () => {},
            class: I,
            get children() {
                return createComponent(Icon, {
                    name: "Arrow"
                })
            }
        }), null), R
    })()
}
var _tmpl$$j = template("<img>");
const VERSION$1 = "_v=4",
    defaultArgs$1 = `${VERSION$1}&auto=format&dpr=${globalThis.devicePixelRatio}`,
    loaded$1 = new Set;

function ImageX(L) {
    const [O, M] = splitProps(L, ["args", "prefetch", "class", "src", "onLoad", "ref"]), I = createMemo(() => `${O.src}?${defaultArgs$1}${O.args?`&${O.args}`:""}`), N = createMemo(() => `${O.src}?${VERSION$1}&w=100&auto=format&cs=tinysrgb&blur=100`), [R, H] = createSignal(loaded$1.has(O.src)), z = createMemo(() => O.prefetch !== !1 && !R());
    return [createComponent(Show, {
        get when() {
            return z()
        },
        get children() {
            var K = _tmpl$$j();
            return createRenderEffect(W => {
                var X = N(),
                    G = O.class;
                return X !== W.e && setAttribute(K, "src", W.e = X), G !== W.t && className(K, W.t = G), W
            }, {
                e: void 0,
                t: void 0
            }), K
        }
    }), (() => {
        var K = _tmpl$$j();
        K.addEventListener("load", X => {
            loaded$1.add(O.src), H(!0), O.onLoad && O.onLoad(X)
        });
        var W = mergeRefs(X => X, O.ref);
        return typeof W == "function" && use(W, K), spread(K, mergeProps({
            get src() {
                return I()
            },
            get class() {
                return cx(O.class, z() ? "opacity-0 size-0" : "")
            }
        }, M), !1, !1), K
    })()]
}
var _tmpl$$i = template("<button>"),
    _tmpl$2$a = template('<svg viewBox="0 0 24 24"><path d="M18.7175 9.13192L11.376 16.6893C10.8875 17.1922 10.0955 17.1922 9.60694 16.6893L5.28248 12.2377C5.86696 11.5211 6.86535 10.5974 7.39746 10.1453L10.4915 13.2611C10.4915 13.2611 15.2885 8.16223 16.444 6.97272C17.0454 7.51667 18.1091 8.41399 18.7175 9.13192Z">'),
    _tmpl$3$7 = template("<button type=button><div class=checkbox-ico>");

function Radio(L) {
    const O = mergeProps({
            children: I => String(I())
        }, L),
        M = createSelector(() => L.value);
    return createComponent(For, {
        get each() {
            return L.options
        },
        children: I => (() => {
            var N = _tmpl$$i();
            return N.$$click = () => {
                var R;
                return (R = L.onChange) == null ? void 0 : R.call(L, I)
            }, insert(N, () => O.children(() => I, M)), createRenderEffect(R => {
                var H = cx("radio btn-like", L.class),
                    z = L.disabled,
                    K = M(I) || void 0;
                return H !== R.e && className(N, R.e = H), z !== R.t && (N.disabled = R.t = z), K !== R.a && setAttribute(N, "aria-selected", R.a = K), R
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), N
        })()
    })
}

function Checkbox(L) {
    return (() => {
        var O = _tmpl$3$7(),
            M = O.firstChild;
        return O.$$click = () => {
            var I;
            return (I = L.onChange) == null ? void 0 : I.call(L, !L.value)
        }, insert(M, createComponent(Show, {
            get when() {
                return L.value
            },
            get children() {
                return _tmpl$2$a()
            }
        })), insert(O, () => L.children, null), createRenderEffect(I => {
            var N = cx("checkbox btn-like", L.class),
                R = L.value || void 0;
            return N !== I.e && className(O, I.e = N), R !== I.t && setAttribute(M, "aria-selected", I.t = R), I
        }, {
            e: void 0,
            t: void 0
        }), O
    })()
}
delegateEvents(["click"]);
var _tmpl$$h = template('<div class="flex flex-col">'),
    _tmpl$2$9 = template('<div class="p-1 w-6 h-6 ml-auto bg-layerx center rounded-md">');

function MultiSelect(L) {
    const [O, M] = splitProps(L, ["class", "title", "disabled", "value", "onChange", "options", "labelRender", "labelFormat", "children", "layerRender", "onClick"]), I = mergeProps({
        children(Q, J) {
            return String(Q())
        },
        labelFormat: L.children || (Q => String(Q()))
    }, O), [N, R] = createSignal(!1), [H, z] = createSignal([]), K = L.throttle || 0;
    let W;
    !env.mobile && K > 0 ? (createScheduled(Q => leading(throttle, Q, 1e3)), W = (Q = []) => {
        const J = H();
        return H() ? J : Q
    }) : W = (Q = []) => N() ? Q : H();
    const X = createMemo(W);
    createComputed(() => L.onChange(X())), createComputed(() => z(L.value));
    const G = Q => H().indexOf(Q) !== -1,
        Y = createRootPool(Q => {
            const J = createMemo(() => G(Q()));
            return createComponent(Checkbox, {
                get class() {
                    return cx("p-3 rounded-xl mb-1", J() && "bg-layer4")
                },
                get value() {
                    return J()
                },
                onChange: _ => z(ee => {
                    const te = Q();
                    return _ ? [...ee, te] : ee.filter(ie => ie !== te)
                }),
                get children() {
                    return I.children(Q, G)
                }
            })
        });

    function Z() {
        return (() => {
            var Q = _tmpl$$h();
            return insert(Q, createComponent(For, {
                get each() {
                    return L.options
                },
                children: J => Y(J)
            })), Q
        })()
    }
    return createComponent(DropDown, {
        get title() {
            return L.title || "Select"
        },
        class: "select-options",
        get visible() {
            return N()
        },
        setVisible: R,
        get layer() {
            return createComponent(Show, {
                get when() {
                    return L.layerRender
                },
                get fallback() {
                    return Z()
                },
                get children() {
                    return L.layerRender(Z())
                }
            })
        },
        get children() {
            return createComponent(Button, mergeProps(M, {
                get disabled() {
                    return L.disabled
                },
                get class() {
                    return cx("select bg-layer4", L.class)
                },
                get children() {
                    return createComponent(Show, {
                        get when() {
                            return !L.labelRender
                        },
                        get fallback() {
                            return L.labelRender(() => L.value)
                        },
                        get children() {
                            return [memo$2(() => {
                                var Q;
                                return ((Q = L.labelFormat) == null ? void 0 : Q.call(L, () => L.value)) || String(L.value)
                            }), (() => {
                                var Q = _tmpl$2$9();
                                return insert(Q, createComponent(Icon, {
                                    class: "w-3 h-3 transition-all -rotate-90",
                                    name: "Arrow"
                                })), Q
                            })()]
                        }
                    })
                }
            }))
        }
    })
}
var _tmpl$$g = template("<div>");
const info = {
        bg: "bg-success/10",
        fg: "text-success",
        icon: "Attention"
    },
    warning = {
        bg: "bg-warning/10",
        fg: "text-warning",
        icon: "Caution"
    },
    error = {
        bg: "bg-error/10",
        fg: "text-error",
        icon: "Error"
    },
    types = {
        info,
        warning,
        error
    };

function Notice(L) {
    const [, O] = splitProps(L, ["class", "type", "children"]), M = I => I && types[I];
    return (() => {
        var I = _tmpl$$g();
        return spread(I, mergeProps(O, {
            get class() {
                var N;
                return cx("p-2 flex text-secondary rounded-xl", ((N = M(L.type)) == null ? void 0 : N.bg) || "bg-success/10", L.class)
            }
        }), !1, !0), insert(I, createComponent(Show, {
            get when() {
                return M(L.type)
            },
            children: N => createComponent(Icon, {
                get class() {
                    return cx("flex-none -mt-0.5 w-6 h-6 mr-1.5", N().fg)
                },
                get name() {
                    return N().icon
                }
            })
        }), null), insert(I, () => L.children, null), I
    })()
}
const MetaCtx = createContext(createStore({
    title: "",
    isDialog: !1
}));

function MetaProvider(L) {
    const O = createStore({
        title: "",
        isDialog: !1,
        class: "",
        ...L.ctx
    });
    return createComponent(MetaCtx.Provider, {
        value: O,
        get children() {
            return L.children
        }
    })
}

function useMeta() {
    return useContext(MetaCtx)[0]
}

function Meta(L) {
    const O = useContext(MetaCtx)[1],
        [M, I] = splitProps(L, ["children", "title"]),
        N = children(() => M.title);
    return O(mergeProps(I, {
        title: N
    })), M.children
}
var _tmpl$$f = template('<div><div class=pagination><input size=2 class=pagination-current><span class=text-tertiary></span><div class="p-2 min-w-8 h-8 justify-center-center flex items-center"><span>');

function Pagination(L) {
    const [O, M] = useTransition(), [I, N] = splitProps(L, ["current", "onChange", "total", "pageSize"]), R = mergeProps({
        current: 1,
        total: 0,
        pageSize: 20
    }, I), H = () => Math.ceil(R.total / R.pageSize);

    function z(Z) {
        if (!untrack(O)) return M(() => R.onChange(Z))
    }
    const K = [Z => Z || untrack(() => R.current), Z => String(Z).replace(/[^0-9]/g, ""), Z => {
            const Q = parseInt(String(Z));
            return Math.min(Math.max(Q, 0), untrack(H))
        }, Z => Y(Number(Z))],
        W = Z => {
            const Q = Z.target.value,
                J = K.reduce((_, ee) => ee(_), Q);
            Z.target.value = J, Z.target.size = Math.max(2, Z.target.value.length), Number(J) > 0 && z(Number(J))
        },
        X = Z => {
            const Q = Z.target;
            Q.value = Q.value.replace(/[^0-9]/g, ""), Q.size = Math.max(2, Q.value.length)
        },
        G = createSelector(() => R.current),
        Y = Z => Z.toString().padStart(2, "0");
    return createComponent(Toggle, {
        get when() {
            return H() > 1
        },
        get children() {
            var Z = _tmpl$$f(),
                Q = Z.firstChild,
                J = Q.firstChild,
                _ = J.nextSibling,
                ee = _.nextSibling,
                te = ee.firstChild;
            return spread(Z, mergeProps(N, {
                get class() {
                    return cx("flex items-center gap-x-[0.15rem] ", L.class, L.colorTheme === "darken" && "pagination-darken")
                }
            }), !1, !0), insert(Z, createComponent(Button, {
                class: "pagination-button pagination-prev",
                get disabled() {
                    return R.current === 1
                },
                onClick: () => z(I.current - 1),
                get children() {
                    return createComponent(Icon, {
                        class: "size-4 text-secondary",
                        name: "Arrow"
                    })
                }
            }), Q), J.addEventListener("change", W), J.$$input = X, insert(_, () => defaultT("of")), insert(te, () => Y(H())), insert(Z, createComponent(Button, {
                get disabled() {
                    return G(H())
                },
                class: "pagination-button pagination-next",
                onClick: () => z(I.current + 1),
                get children() {
                    return createComponent(Icon, {
                        class: "size-4 rotate-180 text-secondary",
                        name: "Arrow"
                    })
                }
            }), null), createRenderEffect(() => J.value = Y(R.current)), Z
        }
    })
}
delegateEvents(["input"]);

function resolveRemote(L, O = 0) {
    const M = memo$1(I => isFirstUpper.test(I) ? lazy(async () => {
        try {
            return (await awaitModule(L))[I]()
        } catch {
            throw new Error("Network Error!")
        }
    }) : async () => (await (await awaitModule(L))[I]()).default);
    return M.fn = memo$1(I => async (...N) => (await M(I))(...N)), M
}
const isFirstUpper = /^[A-Z]/;
async function awaitModule(L) {
    const O = (await L()).default;
    return O.init && await O.init(), O
}

function createRemote(L) {
    return L
}
let sheetPms;
const mds = Array(5).fill(void 0),
    selectorCache = new Map,
    sheetSelector = new Set;
let inserIndex = 0;
async function getSheet() {
    if (!sheetPms) {
        sheetPms = new Promise(O => {
            const M = document.getElementById("css-main");
            M.sheet ? O(M.sheet) : M.onload = () => {
                O(M.sheet)
            }
        });
        const L = await sheetPms;
        selectorCache.set(L, sheetSelector);
        for (let O = 0; O < L.cssRules.length; O++) {
            const M = L.cssRules[O];
            if (M instanceof CSSMediaRule) {
                const I = M.conditionText;
                mds.every(N => !!N) || (I.indexOf("1536") !== -1 ? mds[4] = M : I.indexOf("1280") !== -1 ? mds[3] = M : I.indexOf("1024") !== -1 ? mds[2] = M : I.indexOf("768") !== -1 ? mds[1] = M : I.indexOf("640") !== -1 && (mds[0] = M, inserIndex = O - L.cssRules.length), selectorCache.set(M, new Set))
            } else M instanceof CSSStyleRule && sheetSelector.add(M.selectorText)
        }
    }
    return sheetPms
}

function inserRule(L, O, M) {
    if (O instanceof CSSStyleRule) {
        const I = selectorCache.get(L);
        (!I.has(O.selectorText) || O.selectorText.startsWith("html")) && (L.insertRule(O.cssText, M), I.add(O.selectorText))
    } else L.insertRule(O.cssText, M)
}
async function createCss(L) {
    const O = await getSheet(),
        M = document.createElement("style");
    M.textContent = L, document.head.appendChild(M);
    for (const I of [...M.sheet.cssRules])
        if (I instanceof CSSMediaRule) {
            const N = mds.find(R => R ? .conditionText === I.conditionText);
            if (N)
                for (const R of [...I.cssRules]) inserRule(N, R);
            else inserRule(O, I, O.cssRules.length + inserIndex)
        } else inserRule(O, I, O.cssRules.length + inserIndex);
    document.head.removeChild(M)
}
var _tmpl$$e = template('<button class="radio btn-like select-item">'),
    _tmpl$2$8 = template('<div class="p-1 w-6 h-6 ml-auto bg-layerx center rounded-md">'),
    _tmpl$3$6 = template("<div>"),
    _tmpl$4$4 = template('<div class="w-full sticky -top-2 z-30 -mt-2 bg-layer0 py-3">'),
    _tmpl$5$3 = template('<div class="center h-48">');

function SelectBase(L) {
    const [O, M] = splitProps(L, ["class", "disabled", "value", "onChange", "title", "options", "labelRender", "labelFormat", "optionRender", "children", "layerRender", "onClick", "search"]), I = mergeProps({
        optionRender: (z, K) => (() => {
            var W = _tmpl$$e();
            return insert(W, () => I.children(z, K)), createRenderEffect(() => setAttribute(W, "aria-selected", K(z()) || void 0)), W
        })(),
        children(z, K) {
            return String(z())
        }
    }, O);
    createComputed(z => (z && z.length > 0 && z.findIndex(K => K === untrack(() => L.value)) === -1 && L.onChange(L.options[0]), L.options));
    const [N, R] = createSignal(!1, {
        equals(z, K) {
            return K && !!L.disabled
        }
    });

    function H() {
        const z = createComponent(SelectOptions, {
            get options() {
                return L.options
            },
            get value() {
                return L.value
            },
            get children() {
                return I.children
            },
            get optionRender() {
                return I.optionRender
            },
            get onChange() {
                return L.onChange
            },
            get search() {
                return L.search
            }
        });
        return createComponent(Show, {
            get when() {
                return L.layerRender
            },
            fallback: z,
            get children() {
                return L.layerRender(z)
            }
        })
    }
    return createComputed(z => (z !== L.value && R(!1), L.value)), createComponent(DropDown, {
        get title() {
            return L.title || "Select"
        },
        get class() {
            return cx("select-options", L.search && env.mobile && "h-[90%]")
        },
        get visible() {
            return N()
        },
        setVisible: R,
        get layer() {
            return H()
        },
        get children() {
            return createComponent(Button, mergeProps(M, {
                get class() {
                    return cx("select bg-layer4", L.class)
                },
                get disabled() {
                    return L.disabled
                },
                get children() {
                    return createComponent(Show, {
                        get when() {
                            return !L.labelRender
                        },
                        get fallback() {
                            return L.labelRender(() => L.value)
                        },
                        get children() {
                            return [memo$2(() => {
                                var z;
                                return ((z = L.labelFormat || L.children) == null ? void 0 : z(() => L.value)) || String(L.value)
                            }), (() => {
                                var z = _tmpl$2$8();
                                return insert(z, createComponent(Icon, {
                                    class: "w-3 h-3 transition-all -rotate-90",
                                    name: "Arrow"
                                })), z
                            })()]
                        }
                    })
                }
            }))
        }
    })
}

function SelectOptions(L) {
    const [O, M] = createSignal(L.value), I = createSelector(() => L.value), N = useKeyDownEvent(), R = useIsActive(), H = () => R() && N() || null, z = mergeProps({
        children: J => String(J())
    }, L);
    createEffect(() => {
        const J = H();
        untrack(() => {
            J && (J.key === "ArrowDown" ? (M(W(1)), J.preventDefault()) : J.key === "ArrowUp" ? (M(W(-1)), J.preventDefault()) : J.key === "Enter" && (L.onChange(O()), J.preventDefault()))
        })
    }), createComputed(() => M(L.value));
    const K = useScrollElement();
    createEffect(() => {
        const J = K(),
            _ = L.options.indexOf(L.value);
        if (J instanceof Element && R() && J && J.scrollHeight > J.clientHeight) {
            const ee = J.scrollHeight / L.options.length,
                te = Math.max(0, ee * (_ + .5) - J.clientHeight / 2);
            requestAnimationFrame(() => {
                J.scrollTop = te
            })
        }
    });

    function W(J) {
        const _ = L.options.indexOf(L.value),
            ee = L.options.length;
        return L.options[(_ + J + ee) % ee]
    }
    const {
        optionRender: X = (J, _) => (() => {
            var ee = _tmpl$3$6();
            return insert(ee, () => z.children(J, _)), ee
        })()
    } = L, [G, Y] = createSignal("");
    createComputed(() => {
        R() && Y("")
    });
    const Z = resolveElements(children(() => createComponent(For, {
            get each() {
                return L.options
            },
            children: J => createComponent(Ref, {
                ref: _ => {
                    createEventListener(_, "click", () => L.onChange(J))
                },
                get children() {
                    return X(() => J, I)
                }
            })
        }))),
        Q = createMemo(() => {
            const J = Z.toArray(),
                _ = L.search,
                ee = G();
            if (_) {
                const te = untrack(() => L.options);
                return J.filter((ie, re) => _(te[re], ee))
            } else return J
        });
    return (() => {
        var J = _tmpl$3$6(),
            _ = L.ref;
        return typeof _ == "function" ? use(_, J) : L.ref = J, insert(J, createComponent(Show, {
            get when() {
                return L.search
            },
            get children() {
                var ee = _tmpl$4$4();
                return insert(ee, createComponent(Input, {
                    get value() {
                        return G()
                    },
                    onChange: Y,
                    get children() {
                        return createComponent(Icon, {
                            class: "w-6 h-6 order-first text-tertiary",
                            name: "Search"
                        })
                    }
                })), ee
            }
        }), null), insert(J, createComponent(Show, {
            get when() {
                return Q().length > 0
            },
            get fallback() {
                return (() => {
                    var ee = _tmpl$5$3();
                    return insert(ee, () => defaultT("Oops! There is no data yet!")), ee
                })()
            },
            get children() {
                return Q()
            }
        }), null), createRenderEffect(() => className(J, L.class)), J
    })()
}
const Select = SelectBase;
Select.Option = Option;
Select.SelectOptions = SelectOptions;
var _tmpl$$d = template("<div class=toast-layer>"),
    _tmpl$2$7 = template("<button>"),
    _tmpl$3$5 = template('<div class="ml-auto relative size-6"><div>'),
    _tmpl$4$3 = template('<div class="overflow-hidden flex"><div class=toast>'),
    _tmpl$5$2 = template('<div class="pl-2 pr-4 flex">'),
    _tmpl$6 = template('<svg class="circle-countdown w-6 h-6 flex-none -mt-0.5"viewBox="0 0 32 32"><circle cx=16 cy=16 r=8>');
const [list, setList] = createSignal([]);

function push(L) {
    setList(O => {
        const M = O.filter(I => I.type !== L.type);
        return [L, ...M]
    })
}

function pop(L) {
    setList(O => {
        const M = [...O],
            I = L || M[M.length - 1];
        return M.filter(N => N !== I)
    })
}

function ToastProvider() {
    const L = children(() => createComponent(For, {
            get each() {
                return list()
            },
            children: M => createComponent(ToastItem, {
                toastData: M
            })
        })),
        O = createListTransition(L, {
            exitMethod: "keep-index",
            onChange({
                added: M,
                removed: I,
                finishRemoved: N
            }) {
                requestAnimationFrame(() => {
                    M.forEach(R => {
                        const H = R.clientHeight;
                        R.style.height = "0px", R.style.transition = "height .5s var(--ease-out)", requestAnimationFrame(() => {
                            R.style.height = `${H}px`
                        })
                    })
                }), I.forEach(R => {
                    R.style.height = "0px", setTimeout(() => {
                        N([R])
                    }, 550)
                })
            }
        });
    return createComponent(Portal, {
        get mount() {
            return document.getElementById("root-layer")
        },
        get children() {
            return createComponent(Toggle, {
                get when() {
                    return O().length > 0
                },
                get children() {
                    var M = _tmpl$$d();
                    return insert(M, O), M
                }
            })
        }
    })
}

function ToastItem(L) {
    const O = createMemo(() => L.toastData.duration > 0),
        [M, I] = createSignal(!1),
        N = () => {
            !env.mobile && O() && (app.emit("toast-pause"), I(H => !H))
        },
        R = (H = !1) => (() => {
            var z = _tmpl$2$7();
            return z.$$click = K => {
                K.stopPropagation(), pop(L.toastData)
            }, className(z, H ? "size-6 flex center absolute top-0 left-0" : "size-5 flex center absolute right-1.5 cursor-pointer"), insert(z, createComponent(Icon, {
                name: "Close",
                class: "size-4 text-secondary"
            })), z
        })();
    return (() => {
        var H = _tmpl$4$3(),
            z = H.firstChild;
        return z.addEventListener("mouseleave", N), z.addEventListener("mouseenter", N), z.$$click = () => {
            var K, W;
            (W = (K = L.toastData).onClick) == null || W.call(K), env.mobile && O() && (app.emit("toast-pause"), I(X => !X))
        }, insert(z, createComponent(Show, {
            get when() {
                return O()
            },
            get fallback() {
                return (() => {
                    var K = _tmpl$5$2();
                    return insert(K, () => resolveElement(L.toastData.message)), K
                })()
            },
            get children() {
                return resolveElement(L.toastData.message)
            }
        }), null), insert(z, createComponent(Show, {
            get when() {
                return O()
            },
            get fallback() {
                return R()
            },
            get children() {
                var K = _tmpl$3$5(),
                    W = K.firstChild;
                return insert(W, createComponent(CountDown, {
                    get duration() {
                        return L.toastData.duration
                    },
                    onEnd: () => pop(L.toastData)
                })), insert(K, createComponent(Show, {
                    get when() {
                        return M()
                    },
                    get children() {
                        return R(!0)
                    }
                }), null), createRenderEffect(() => className(W, M() ? "opacity-0 select-none ml-auto size-6" : "ml-auto size-6")), K
            }
        }), null), H
    })()
}

function CountDown(L) {
    let O;
    return createEffect(() => {
        queueMicrotask(() => {
            let M = !0;
            const I = animate(O, {
                strokeDashoffset: 0
            }, {
                duration: L.duration,
                easing: "linear",
                persist: !0
            });
            app.on("toast-pause", () => {
                M ? I.pause() : I.play(), M = !M
            }), I.finished.then(L.onEnd)
        })
    }), (() => {
        var M = _tmpl$6(),
            I = O;
        return typeof I == "function" ? use(I, M) : O = M, M
    })()
}
const ignoredErrorCodes = [6008, 6101, 6102, 6103, 6104, 6105, 6106, 6107, 6108, 6109, 6110, 6111, 6114, 6115, 6116, 6012],
    toast = (L, O = {}) => {
        if (L instanceof Error) return ignoredErrorCodes.indexOf(L.code) >= 0 ? "" : toast.error(L.message, O); {
            const {
                duration: M = 7,
                onClick: I = () => {},
                system: N = !1,
                type: R = "error"
            } = O;
            return push({
                duration: M,
                onClick: I,
                system: N,
                message: L,
                type: R
            })
        }
    },
    iconClass = L => `w-6 h-6 mr-2 -mt-0.5 flex-none ${L}`;
toast.error = (L, O) => toast(() => [createComponent(Icon, {
    get class() {
        return iconClass("text-error")
    },
    name: "Error"
}), memo$2(() => resolveElement(L))], { ...O,
    type: "error"
});
toast.success = (L, O) => toast(() => [createComponent(Icon, {
    get class() {
        return iconClass("text-success")
    },
    name: "Success"
}), memo$2(() => resolveElement(L))], { ...O,
    type: "success"
});
toast.warning = (L, O) => toast(() => [createComponent(Icon, {
    get class() {
        return iconClass("text-warning")
    },
    name: "Caution"
}), memo$2(() => resolveElement(L))], { ...O,
    type: "warning"
});

function resolveElement(L) {
    return typeof L == "function" ? L() : L
}
delegateEvents(["click"]);
const SESSION_LENGTH = "init_length";

function getInitDepth() {
    const L = sessionStorage.getItem(SESSION_LENGTH);
    return !L || window.opener ? (sessionStorage.setItem(SESSION_LENGTH, String(history.length)), history.length) : Number(L)
}
const depth = {
        init: getInitDepth()
    },
    langMatch = /^\/([\w-]+)(.*)$/,
    routerUtils = {
        langSet: new Set([]),
        getLangPrefix: L => L === "en" ? "/" : `/${L}`,
        syncLang: (L, O = navigator.language) => {
            untrack(() => {
                routerUtils.langSet = new Set(L);
                const M = location.href.slice(location.origin.length);
                if (setting.firstVisit) {
                    const {
                        lang: I
                    } = routerUtils.extractLocale(M);
                    if (I === "en") {
                        if (O) {
                            const N = Object.entries(env.langs);
                            let R = N.find(H => H[1][1] === O);
                            R || (O = O.split("-")[0], R = N.find(H => H[1][1].includes(O))), R && setSetting("lang", R[0])
                        }
                    } else setSetting("lang", I)
                }
                history.replaceState(history.state, "", routerUtils.replaceLangPrefix(M, setting.lang))
            })
        },
        replaceLangPrefix(L, O) {
            const M = routerUtils.extractLocale(L);
            return (O === "en" ? "" : `/${O}`) + M.urlOriginal
        },
        extractLocale: L => {
            let O = "en";
            const M = L.match(langMatch);
            return M && routerUtils.langSet.has(M[1]) && (O = M[1], L = M[2] || "/", L.startsWith("/") || (L = `/${L}`)), {
                lang: O,
                urlOriginal: L
            }
        }
    };

function setLang(L, O) {
    routerUtils.langSet.has(L) && (setSetting("lang", L), window.location.replace(routerUtils.replaceLangPrefix(O ? "/" : location.pathname + location.search, L)))
}
const StackProvider = createContext(void 0);

function useRouterStack() {
    return useContext(StackProvider)
}
const triggerOptions = {
        equals: !1
    },
    triggerCacheOptions = triggerOptions;

function createTrigger() {
    return createSignal(void 0, triggerOptions)
}
var qe;
class TriggerCache {
    constructor(O = Map) {
        Ae(this, qe), Ee(this, qe, new O)
    }
    dirty(O) {
        var M;
        (M = ge(this, qe).get(O)) == null || M.$$()
    }
    dirtyAll() {
        for (const O of ge(this, qe).values()) O.$$()
    }
    track(O) {
        if (!getListener()) return;
        let M = ge(this, qe).get(O);
        if (M) M.n++;
        else {
            const [I, N] = createSignal(void 0, triggerCacheOptions);
            ge(this, qe).set(O, M = {
                $: I,
                $$: N,
                n: 1
            })
        }
        onCleanup(() => {
            --M.n === 0 && queueMicrotask(() => M.n === 0 && ge(this, qe).delete(O))
        }), M.$()
    }
}
qe = new WeakMap;
const [shouldSchedule, scheduleNextPreload] = createTrigger(), pendingQueue = [], requestPreload = L => {
    pendingQueue.push(L), scheduleNextPreload()
}, getPriority = L => (L = Array.isArray(L) ? L : [L], Math.max(...L.map(O => O.startsWith("/game") ? 10 : 1))), preloadQueue = new PQueue({
    concurrency: 1,
    interval: 300,
    autoStart: !1
});
preloadQueue.pause();
window.addEventListener("load", () => {
    preloadQueue.start()
});
const PRELOAD_PERIOD = 500,
    createMatcher = memo$1((L, O = !0) => (L = Array.isArray(L) ? L : [L], M => {
        const I = M.split("/").filter(Boolean);
        return L.some(N => {
            const [R, H] = N.split("/*", 2), z = R.split("/").filter(Boolean), K = z.length, W = I.length - K;
            if (W < 0 || W > 0 && H === void 0 && !O) return null;
            for (let X = 0; X < K; X++) {
                const G = z[X],
                    Y = G[0] === ":",
                    Z = Y ? I[X] : I[X].toLowerCase(),
                    Q = Y ? G.slice(1) : G.toLowerCase();
                if (!Y && Z !== Q) return !1
            }
            return !0
        })
    })),
    PreloadScheduler = L => {
        const O = (R, H = "", z = []) => (R = Array.isArray(R) ? R : [R], !R || R.length === 0 || R.forEach(K => {
                var W, X;
                let G = H + K.path;
                (W = K.component) != null && W.preload && z.push({
                    path: G,
                    preload: (X = K.component) == null ? void 0 : X.preload
                }), K.children && O(K.children, G, z)
            }), z),
            M = O(L.routes),
            I = (R, H) => {
                const z = [];
                return untrack(() => {
                    let K = 0,
                        W;
                    for (; K < H.length;) W = H[K], createMatcher(W.path)(R) ? (z.push(W), [H[K]] = [H[H.length - 1]], H.length--) : K++
                }), z
            };
        let N;
        return createEffect(on$1(shouldSchedule, () => {
            N || (N = setTimeout(() => {
                N = null;
                const R = pendingQueue.slice(0);
                pendingQueue.length = 0;
                const H = [];
                for (let z = 0; z < R.length; z++) {
                    const K = R[z],
                        W = I(K, M);
                    W.length && H.push(...W)
                }
                H.forEach(z => {
                    const K = getPriority(z.path);
                    preloadQueue.add(() => {
                        z.preload()
                    }, {
                        priority: K
                    })
                })
            }, PRELOAD_PERIOD))
        })), L.children
    };
let globalAction;
const NavigatorContext = createContext(null);

function NavigatorProvider(L) {
    const O = useNavigate$1(),
        M = useLocation(),
        I = getOwner(),
        [N, R] = createSignal("/");
    createComputed(() => {
        const W = M.pathname;
        onCleanup(() => {
            R(W)
        })
    });
    const H = useCurrentMatches();
    createComputed(() => {
        M.pathname.startsWith(L.base) || window.location.reload()
    });
    const z = createMemo(([, W]) => {
            var X;
            const G = H(),
                Y = ((X = history.state) == null ? void 0 : X._depth) || 0;
            let Z;
            return globalAction !== void 0 ? Z = [globalAction, W + (globalAction === "PUSH" ? 1 : 0), G] : Z = [W > Y ? "POP" : W === Y ? "REPLACE" : "PUSH", Y, G], globalAction = void 0, Z
        }, ["PUSH", 0, []]),
        K = (W, X) => {
            var G;
            if (isSwipeBack = !1, typeof W == "number") return W <= -99 && (W = Math.min((((G = history.state) == null ? void 0 : G._depth) || 0) - history.length, -1)), O(W, {
                scroll: !1
            }); {
                globalAction = X != null && X.replace ? "REPLACE" : "PUSH", X != null && X.state && (X.state = JSON.parse(JSON.stringify(X.state)));
                const {
                    urlOriginal: Y
                } = routerUtils.extractLocale(W);
                return O(Y, {
                    scroll: !1,
                    ...X
                })
            }
        };
    return createComponent(RouterOwner.Provider, {
        value: I,
        get children() {
            return createComponent(NavigatorContext.Provider, {
                value: {
                    navigate: K,
                    action: () => z()[0],
                    referrer: N
                },
                get children() {
                    return L.children
                }
            })
        }
    })
}
const RouterOwner = createContext(null);

function wrapRootRouterCtx(L) {
    return (...O) => runWithOwner(useContext(RouterOwner), () => L(...O))
}
const useBeforeLeave = wrapRootRouterCtx(useBeforeLeave$1),
    A = L => {
        const O = createMemo(() => L.href),
            M = () => {
                var K;
                return L.target && ((K = O()) == null ? void 0 : K.startsWith("http"))
            },
            I = useNavigate();

        function N(K) {
            var W;
            queueMicrotask(() => {
                I(O(), {
                    replace: L.replace
                })
            }), K.stopPropagation(), K.preventDefault(), (W = L.onClick) == null || W.call(L, K)
        }
        const [R, H] = createSignal(null), z = createDisposable(() => {
            let K;
            const W = X => setTimeout(() => {
                requestPreload(X), z()
            }, 500);
            createIntersectionObserver(() => R() ? [R()] : [], ([X]) => {
                X.isIntersecting ? K = W(O()) : clearTimeout(K)
            }, {
                threshold: [0, 1]
            }), onCleanup(() => clearTimeout(K))
        });
        return createComponent(A$2, mergeProps(L, {
            ref(K) {
                var W = mergeRefs(L.ref, H);
                typeof W == "function" && W(K)
            },
            get onClick() {
                return M() ? void 0 : N
            }
        }))
    },
    useNavigate = () => useContext(NavigatorContext).navigate,
    useReferrer = () => useContext(NavigatorContext).referrer;

function batchRouteDefinition(L, O) {
    var M;
    for (const I of L) I.info = { ...O,
        ...I.info,
        ...O.guards && {
            guards: (((M = I.info) == null ? void 0 : M.guards) || []).concat(...O.guards)
        }
    };
    return L
}
let isSwipeBack = !1;

function useIosBack(L) {
    const O = window.innerWidth * .15,
        [M, I] = createSignal(O);
    createEventListener(window, () => L() ? "touchstart" : "", H => {
        I(H.touches[0].clientX)
    });
    const N = createMemo(() => L() && M() < O);
    createEventListener(window, "popstate", () => {
        isSwipeBack = !1
    }), createEventListener(window, () => N() ? "touchmove" : "", H => {
        H.touches[0].screenX > M() && (isSwipeBack = !0)
    }), createEventListener(window, () => N() ? "touchend" : "", R);

    function R() {
        setTimeout(() => isSwipeBack = !1, 16)
    }
    return () => isSwipeBack ? (R(), !0) : !1
}

function createNoSuspense(L, O = L()) {
    const [M, I] = createSignal(O);
    return createEffect(() => {
        const N = L();
        N && I(N)
    }), M
}
var _tmpl$$c = template("<div>"),
    _tmpl$2$6 = template("<div><div>"),
    _tmpl$3$4 = template('<div class=dialog-title><div class="ml-auto absolute right-4 top-0 flex items-center h-full">');
const DEFAULT_ANE_PROPS = {
        duration: 300,
        easing: `cubic-bezier(${easeBack.join(",")})`
    },
    ROOT_ANE = [{
        backgroundColor: "#0000"
    }, {
        backgroundColor: "#000a"
    }],
    POP_ANE = [{
        transform: "scale(.92)",
        opacity: 0
    }, {
        transform: "scale(1)",
        opacity: 1
    }];

function isDialogRoute(L) {
    var O;
    return !!((O = L.info) != null && O.dialog)
}
const MAX_ROUTE_CACHE = 6;

function DialogStackRouter(L) {
    const O = useLocation(),
        M = useNavigate(),
        {
            action: I
        } = useContext(NavigatorContext),
        N = useRouteDefinitions(),
        R = getGuardByMatchs(N(), O),
        H = N()[0];
    let z = isDialogRoute(H);
    const K = z || R,
        [W, X] = createStore({
            list: [{
                pathname: K ? "/" : O.pathname,
                search: K ? "" : O.search,
                state: K ? null : O.state,
                matchs: L.routes.filter(ne => !isDialogRoute(ne))
            }]
        });
    createComputed(() => {
        O.hash.startsWith("#/") && M(O.hash.slice(1), {
            replace: !0
        })
    });

    function G() {
        var ne;
        if (depth.init === history.length) {
            const se = ((ne = history.state) == null ? void 0 : ne._depth) || history.length - 1;
            history.replaceState({
                _depth: se
            }, "", routerUtils.getLangPrefix(setting.lang)), history.pushState({
                _depth: se + 1
            }, "", O.pathname + O.search)
        }
    }
    K && G();
    const Y = new WeakSet,
        [Z, Q] = createSignal(),
        J = createMemo(ne => {
            const se = N(),
                he = firstRoute(se),
                me = untrack(() => {
                    if (O.hash.startsWith("#/")) return ne;
                    const le = getGuardByMatchs(se, O);
                    if (le) return M(le, {
                        replace: !0
                    }), ne;
                    const pe = I(),
                        de = O.pathname;
                    let ce = [...W.list];
                    pe === "POP" && ne && isDialogRoute(ne.matchs[0]) && Y.add(unwrap(ne));

                    function fe(ye) {
                        return pe !== "PUSH" ? ye : untrack(() => ye.filter(ve => {
                            const Ce = unwrap(ve);
                            return Y.has(Ce) ? (Y.delete(Ce), !1) : !0
                        }))
                    }
                    const ue = {
                        pathname: de,
                        search: O.search,
                        state: O.state && { ...O.state
                        }
                    };
                    if (isDialogRoute(se[0])) {
                        const ye = ce.findIndex(pe === "REPLACE" ? ve => firstRoute(ve.matchs) === he : ve => ve.pathname === ue.pathname && ve.search === ue.search);
                        if (ye === -1) {
                            const ve = { ...ue,
                                matchs: se
                            };
                            return ce = fe(ce).concat(ve), ce.length > MAX_ROUTE_CACHE && ce.splice(1, 1), X("list", ce), ve
                        } else {
                            const ve = unwrap(W.list[ye]);
                            return Y.has(ve) && Y.delete(ve), X("list", ye, ue), W.list[ye]
                        }
                    } else return batch(() => {
                        X("list", fe(ce)), X("list", 0, ue)
                    }), W.list[0]
                });
            return me && onCleanup(() => {
                var le;
                Q(unwrap(me)), ((le = he.info) == null ? void 0 : le.keepAlive) === !1 && X("list", pe => pe.filter(de => unwrap(de) !== me))
            }), me
        });

    function _() {
        return z ? (z = !1, !0) : !1
    }

    function ee() {
        const [ne, se] = createSignal(untrack(() => !env.mobile));
        createMemo(() => N()[0]);
        const he = () => !isDialogRoute(N()[0]);
        return createComputed(() => se(me => me || he())), createComponent(Show, {
            get when() {
                return ne()
            },
            get children() {
                return createComponent(ActiveProvider, {
                    get value() {
                        return he()
                    },
                    get children() {
                        return createComponent(StaticRouter, {
                            get state() {
                                return W.list[0]
                            }
                        })
                    }
                })
            }
        })
    }

    function te() {
        const ne = children(() => createComponent(For, {
            get each() {
                return W.list
            },
            children: (se, he) => {
                if (he() === 0) return null;
                const me = createMemo(() => {
                    const le = J();
                    return le ? le.pathname === se.pathname : !1
                });
                return createComponent(StackProvider.Provider, {
                    value: {
                        route: se,
                        index: he
                    },
                    get children() {
                        return createComponent(ActiveProvider, {
                            get value() {
                                return me()
                            },
                            get children() {
                                return createComponent(DialogRoot, {
                                    isInitDialog: _,
                                    get preRoute() {
                                        return Z()
                                    },
                                    get children() {
                                        return createComponent(StaticRouter, {
                                            state: se
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }));
        return createListTransition(ne, {
            onChange({
                removed: se,
                finishRemoved: he
            }) {
                se.length > 0 && setTimeout(() => he(se), 600)
            }
        })
    }
    const ie = () => getDialogConfig(N()),
        re = () => {
            var ne;
            return (ne = getRouteInfo(N())) == null ? void 0 : ne.dialog
        },
        oe = createMemo(ne => {
            const se = ie();
            return re() && se ? getDialogSize(se) : ne
        }, [void 0, void 0]);

    function ae() {
        let ne, se;
        const he = createMemo(() => isDialogRoute(N()[0]));
        return createEffect(me => {
            const le = he(),
                pe = untrack(() => env.mobile),
                de = [...pe ? [ROOT_ANE[0], ROOT_ANE[0]] : ROOT_ANE],
                ce = [...POP_ANE],
                fe = me === void 0 ? { ...DEFAULT_ANE_PROPS,
                    duration: 0
                } : DEFAULT_ANE_PROPS;
            if (ne.classList.add("dialog-visible"), !ne.animate) return le;
            const ue = ne.animate(le ? de : de.reverse(), fe);
            if (ue.finished.then(() => {
                    ne.classList.toggle("dialog-visible", le), ue.cancel()
                }), !pe) {
                const ye = se.animate(pe || le ? ce : ce.reverse(), fe);
                ye.finished.then(() => ye.cancel())
            }
            return le
        }), createComponent(Portal, {
            ref: me => {
                ne = me, me.className = "dialog-root", createEventListener(me, "click", leading(throttle, le => {
                    le.target === ne && M(-1)
                }, 600))
            },
            get children() {
                var me = _tmpl$$c(),
                    le = se;
                return typeof le == "function" ? use(le, me) : se = me, insert(me, te), createRenderEffect(pe => {
                    var de = cx("dialog-list", oe()[0]),
                        ce = oe()[1];
                    return de !== pe.e && className(me, pe.e = de), pe.t = style(me, ce, pe.t), pe
                }, {
                    e: void 0,
                    t: void 0
                }), me
            }
        })
    }
    return [memo$2(ee), createComponent(ae, {})]
}

function getRouteInfo(L) {
    return L[L.length - 1].info
}

function getDialogConfig(L) {
    const O = {
        size: "s"
    };
    if (L.length === 0) return O;
    const M = getRouteInfo(L),
        I = M ? .dialog;
    return !I || I === !0 ? O : { ...I,
        size: I.size || O.size
    }
}

function getDialogSize(L) {
    const O = L.size,
        M = typeof O == "string" && O !== "s" ? `dialog-${O}` : void 0,
        I = typeof O == "string" ? void 0 : {
            width: `${O[0]}rem`,
            height: `${O[1]}rem`
        };
    return [M, I]
}

function useRouteDefinitions() {
    const L = useCurrentMatches();
    return createNoSuspense(createMemo(() => L().map(O => unwrap(O.route.key))))
}

function firstRoute(L) {
    return unwrap(L[0])
}

function getGuardByMatchs(L, O) {
    var M;
    for (const I of L) {
        const N = (M = I.info) == null ? void 0 : M.guards;
        if (N)
            for (const R of N) {
                const H = untrack(() => R(O));
                if (H) return H
            }
    }
    return !1
}

function DialogRoot(L) {
    let O;
    const M = useIsActive(),
        {
            action: I
        } = useContext(NavigatorContext),
        N = useRouteDefinitions();
    let R = !1;
    createEffect(() => {
        const le = M();
        if (le && setActiveElement(O), L.isInitDialog()) {
            R = !0;
            return
        }
        untrack(() => {
            le ? H(O) : K(O)
        })
    }), onCleanup(() => {
        R && K(O)
    });

    function H(le) {
        R = !0;
        const pe = I();
        if (le.style.display = "", G()) return;
        const de = L.preRoute && isDialogRoute(L.preRoute.matchs[0]);
        pe === "POP" && de ? W(le, 2, 1) : (le.style.zIndex = "1006", !env.mobile && !de || W(le, 0, 1))
    }
    let z = 0;

    function K(le) {
        R = !1;
        const pe = I();
        clearTimeout(z);

        function de() {
            le.style.display = "none"
        }
        if (G()) return de();
        const ce = !isDialogRoute(N()[0]);

        function fe() {
            W(le, 1, 0, de)
        }

        function ue() {
            W(le, 1, 2, de)
        }
        pe === "POP" ? ce ? env.mobile ? fe() : z = window.setTimeout(de, DEFAULT_ANE_PROPS.duration) : (le.style.zIndex = "1006", fe()) : ce && env.mobile ? fe() : (le.style.zIndex = "", ue())
    }

    function W(le, pe, de, ce) {
        function fe() {
            ce ? .(), le.style.zIndex = ""
        }
        le.animate || fe();
        const ue = le.animate([{
            transform: `translateX(${ane$1[pe]})`
        }, {
            transform: `translateX(${ane$1[de]})`
        }], DEFAULT_ANE_PROPS);
        ue.finished.then(() => {
            fe(), ue.cancel()
        })
    }
    const X = useRouterStack(),
        G = useIosBack(M),
        Y = getRouteInfo(X.route.matchs),
        Z = getDialogConfig(X.route.matchs),
        Q = createMemo(() => getDialogSize(Z)),
        J = useNavigate(),
        _ = () => J(-1),
        ee = createMemo(() => !env.mobile && X.index() === 1);
    let te;
    const ie = createSignal({}),
        re = createMemo(() => ie[0]()),
        oe = createMemo(() => splitProps(re(), ["title", "children", "class", "titleActions"])),
        ae = Z.behavior === "no-title",
        ne = Z.behavior === "transparent-title",
        [se, he] = createSignal(100);

    function me() {
        const le = useScrollTop(() => !!(ne || ae));
        return ne && createComputed(() => {
            he(100 * le() / window.innerHeight)
        }), createComponent(Show, {
            get when() {
                return re().key || !0
            },
            keyed: !0,
            get children() {
                return createComponent(ErrorBoundary, {
                    fallback: pe => (console.error(pe), createComponent(Dialog, {
                        get title() {
                            return defaultT("Error")
                        },
                        get children() {
                            return createComponent(Empty, {
                                type: "offline"
                            })
                        }
                    })),
                    get children() {
                        return createComponent(Suspense, {
                            get fallback() {
                                return getFullLoading()
                            },
                            get children() {
                                return L.children
                            }
                        })
                    }
                })
            }
        })
    }
    return createComponent(DialogPropsCtx.Provider, {
        value: ie,
        get children() {
            var le = _tmpl$2$6(),
                pe = le.firstChild,
                de = O;
            return typeof de == "function" ? use(de, le) : O = le, spread(pe, mergeProps(() => oe()[1], {
                get class() {
                    return cx("dialog-item", (ne || ae || Y ? .titleColor) && "dialog-transparent-title", re().class)
                }
            }), !1, !0), insert(pe, !ae && (() => {
                var ce = _tmpl$3$4(),
                    fe = ce.firstChild,
                    ue = te;
                return typeof ue == "function" ? use(ue, ce) : te = ce, insert(ce, createComponent(Show, {
                    get when() {
                        return !ee()
                    },
                    get children() {
                        return createComponent(Button, {
                            onClick: _,
                            class: "dialog-back",
                            get children() {
                                return createComponent(Icon, {
                                    class: "",
                                    name: "Arrow"
                                })
                            }
                        })
                    }
                }), fe), insert(ce, () => re().title, fe), insert(fe, () => re().titleActions, null), insert(fe, createComponent(Show, {
                    get when() {
                        return ee()
                    },
                    get children() {
                        return createComponent(Button, {
                            onClick: _,
                            class: "dialog-close ml-2",
                            get children() {
                                return createComponent(Icon, {
                                    name: "Close"
                                })
                            }
                        })
                    }
                }), null), createRenderEffect(ye => (ye = Y ? .titleColor) != null ? ce.style.setProperty("--bg", ye) : ce.style.removeProperty("--bg")), ce
            })(), null), insert(pe, () => re().background, null), insert(pe, createComponent(ScrollView, {
                class: "dialog-content",
                get style() {
                    return {
                        "--bg": Y ? .backgroundColor
                    }
                },
                get children() {
                    return me()
                }
            }), null), createRenderEffect(ce => {
                var fe = cx("dialog-overlayer", Q()[0]),
                    ue = { ...Q()[1],
                        "--scroll": `${se()}%`
                    };
                return fe !== ce.e && className(le, ce.e = fe), ce.t = style(le, ue, ce.t), ce
            }, {
                e: void 0,
                t: void 0
            }), le
        }
    })
}
const DialogPropsCtx = createContext();

function StaticRouter(L) {
    function O() {
        const {
            urlOriginal: K
        } = routerUtils.extractLocale(L.state.pathname + L.state.search);
        return {
            value: K,
            state: unwrap(L.state.state)
        }
    }
    const M = createRouter({
            get: O,
            set(K) {},
            create(K) {
                const W = K.navigatorFactory();
                createComputed(X => {
                    const G = O();
                    return X && W(G.value, {
                        state: G.state,
                        replace: !0
                    }), G
                })
            }
        }),
        [I, N] = useSearchParams(),
        R = useLocation(),
        H = createMemo(() => routerUtils.extractLocale(R.pathname).urlOriginal);

    function z(K) {
        const [W, X] = useSearchParams(), G = useLocation(), Y = createMemo(() => G.pathname === H());
        return createComputed(() => {
            if (Y()) {
                let Z = function(J, _) {
                        const ee = { ...J
                        };
                        if (!shallow(Q, ee)) {
                            const te = { ...ee
                            };
                            for (const ie in Q) te[ie] === void 0 && (te[ie] = void 0);
                            Q = ee, _(te, {
                                replace: !0
                            })
                        }
                    },
                    Q = untrack(() => ({ ...W
                    }));
                createComputed(() => Z(W, N)), createComputed(() => Z(I, X))
            }
        }), K.children
    }
    return createComponent(RouteDefineContext.Provider, {
        get value() {
            return L.state
        },
        get children() {
            return createComponent(M, {
                root: z,
                get children() {
                    return L.state.matchs
                }
            })
        }
    })
}
const RouteDefineContext = createContext(null),
    ane$1 = {
        0: "100%",
        1: "0%",
        2: "-17%"
    };

function Dialog(L) {
    if (useRouterStack()) {
        const O = useContext(DialogPropsCtx),
            [, M] = splitProps(L, ["children"]);
        O && createComputed(() => {
            O[1]({ ...M
            })
        })
    }
    return L.children
}
const hash = location.hash;
hash.startsWith("#/") && history.replaceState(history.state, "", hash.slice(1));

function App(L) {
    initEnv(), routerUtils.syncLang(L.langs || Object.keys(env.langs) || [], L.lang);
    const O = createMemo(() => untrack(() => {
        const H = [],
            z = L.modules.map(X => X.routes()).flat(),
            K = z[0];
        let W;
        if (K && isLayoutRoute(K)) {
            const X = resolveRouteDefinition(K.children || []);
            K.children = X, W = G => {
                X.unshift(G)
            }
        } else W = X => {
            H.unshift(X)
        };
        return z.forEach(X => {
            var G;
            M(X), !((G = X.info) != null && G.dialog) && !isLayoutRoute(X) ? W(X) : H.push(X)
        }), H
    }));

    function M(H) {
        H.info && H.children instanceof Array && H.children.forEach(z => {
            z.info = { ...H.info,
                ...z.info
            }, M(z)
        })
    }
    setTimeout(() => {
        createEffect(() => {
            document.documentElement.classList.toggle("scroll-bar", getScrollbarWidth() > 0)
        })
    }, 3e3);

    function I() {
        const H = getOwner();
        return L.modules.forEach(z => {
            z.events && Object.entries(z.events).forEach(([K, W]) => {
                app.on(K, async (...X) => {
                    const G = await W();
                    runWithOwner(H, () => {
                        G(...X)
                    })
                })
            }), z.init && runWithOwner(H, z.init)
        }), null
    }
    const N = H => createComponent(GlobalComponentsCtx.Provider, {
            get value() {
                return L.globalComponents || {}
            },
            get children() {
                return createComponent(NavigatorProvider, {
                    base: R,
                    get children() {
                        return [memo$2(() => untrack(I)), createComponent(PreloadScheduler, {
                            get routes() {
                                return O()
                            }
                        }), createComponent(DialogStackRouter, {
                            get routes() {
                                return O()
                            }
                        }), createComponent(ToastProvider, {}), createComponent(PopProvider, {}), memo$2(() => L.children)]
                    }
                })
            }
        }),
        R = routerUtils.getLangPrefix(setting.lang);
    return createComponent(Router, {
        root: N,
        base: R,
        get children() {
            return O()
        },
        preload: !1
    })
}

function isLayoutRoute(L) {
    return !!(!L.path && L.component)
}

function resolveRouteDefinition(L) {
    return L instanceof Array ? L : [L]
}

function fixSolideRouterHashScrollBug() {
    const L = window.scrollTo;
    window.scrollTo = (O, M) => {
        M === 0 && O === 0 || L.call(window, O, M)
    }
}
fixSolideRouterHashScrollBug();
const GlobalComponentsCtx = createContext({});

function useGlobalComponent(L) {
    return useContext(GlobalComponentsCtx)[L] || (() => null)
}

function initEnv() {
    createEffect(() => {
        document.documentElement.classList.toggle("dark", setting.darken);
        const L = document.querySelector('meta[name="theme-color"]');
        L && L.setAttribute("content", setting.darken ? "#232626" : "#f4f4f4")
    }), createEffect(() => {
        document.documentElement.classList.toggle("lowend", env.isLowEndDevice)
    }), createEffect(() => {
        document.documentElement.classList.toggle("pc", !env.mobile)
    }), createEffect(() => document.documentElement.style.fontSize = env.remScale * 16 + "px"), createEffect(() => {
        getHttp().defaults.headers.common["Accept-Language"] = setting.lang
    })
}
var _tmpl$$b = template("<div>");

function Sticky(L) {
    let O;
    const M = children(() => L.children);
    return createEffect(I => {
        const N = M();
        return N !== I && setTimeout(() => {
            O && O.style.setProperty("--offsetTop", `${O.offsetTop}px`)
        }, 500), N
    }), createComponent(Ref, {
        ref(I) {
            var N = O;
            typeof N == "function" ? N(I) : O = I
        },
        get children() {
            var I = _tmpl$$b();
            return spread(I, mergeProps(L, {
                get class() {
                    return cx("sticky", L.class)
                },
                get children() {
                    return M()
                }
            }), !1, !1), I
        }
    })
}
var _tmpl$$a = template("<div>"),
    _tmpl$2$5 = template('<div class="text-lg pt-6 w-full font-extrabold h-14 flex items-center">'),
    _tmpl$3$3 = template('<div class="overflow-hidden bg-layer2 py-4 h-18">'),
    _tmpl$4$2 = template("<div class=-mt-6><div>"),
    _tmpl$5$1 = template('<div class="page-main flex flex-wrap gap-x-4"><div class="page-container w-96 min-h-96 flex-1 rounded-xl">');
const ane = {
        y: [16, 0]
    },
    cfg = {
        duration: .3,
        easing: easeBack,
        persist: !0
    };

function TMCLayout(L) {
    const O = useCurrentMatches(),
        M = createMemo(() => {
            const H = O();
            return H[H.length - 1]
        }),
        I = children(() => createComponent(Show, {
            get when() {
                return M()
            },
            keyed: !0,
            get children() {
                return createComponent(ErrorBoundary, {
                    fallback: H => (console.error(H), createComponent(Empty, {
                        type: "notfound",
                        get children() {
                            return String(H)
                        }
                    })),
                    get children() {
                        return createComponent(Suspense, {
                            get fallback() {
                                return (() => {
                                    var H = _tmpl$$a();
                                    return insert(H, createComponent(Loading, {})), createRenderEffect(() => className(H, cx("h-96 center rounded-xl bg-layer4", L.loadingClass))), H
                                })()
                            },
                            get children() {
                                return L.children
                            }
                        })
                    }
                })
            }
        }));
    createEffect(H => {
        const z = M();
        return H && (window.scrollTo({
            top: 0,
            behavior: "smooth"
        }), animate(R, ane, cfg)), z
    });
    const N = useLocation();
    createEffect(() => {
        const H = document.getElementById(N.pathname);
        window.requestAnimationFrame(() => {
            H && H.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "center"
            })
        })
    });
    let R;
    return createComponent(Show, {
        get when() {
            return env.clientWidth < 1100
        },
        get fallback() {
            return (() => {
                var H = _tmpl$5$1(),
                    z = H.firstChild;
                insert(H, createComponent(Show, {
                    get when() {
                        return L.title
                    },
                    get children() {
                        return createComponent(Sticky, {
                            class: "text-lg w-full font-extrabold leading-8 pb-4",
                            get children() {
                                return L.title
                            }
                        })
                    }
                }), z), insert(H, createComponent(Show, {
                    get when() {
                        return L.menu
                    },
                    get children() {
                        return createComponent(Sticky, {
                            class: "page-menu w-60 flex-none text-secondary self-start bg-layer4 p-2 rounded-xl",
                            get children() {
                                return createComponent(For, {
                                    get each() {
                                        return L.menu
                                    },
                                    children: W => createComponent(A, {
                                        class: "h-10 rounded-lg flex items-center gap-1 px-4",
                                        get href() {
                                            return W.href || ""
                                        },
                                        activeClass: "font-extrabold text-primary active-tab-group",
                                        inactiveClass: "btn-like",
                                        end: !0,
                                        replace: !0,
                                        get children() {
                                            return [memo$2(() => W.title), createComponent(Show, {
                                                get when() {
                                                    return W.badge
                                                },
                                                get children() {
                                                    return createComponent(Badge, {
                                                        class: "ml-auto",
                                                        get value() {
                                                            return W.badge()
                                                        }
                                                    })
                                                }
                                            })]
                                        }
                                    })
                                })
                            }
                        })
                    }
                }), z);
                var K = R;
                return typeof K == "function" ? use(K, z) : R = z, insert(z, I), H
            })()
        },
        get children() {
            var H = _tmpl$4$2(),
                z = H.firstChild;
            insert(H, createComponent(Sticky, {
                class: "z-40 bg-layer2",
                get children() {
                    return [createComponent(Show, {
                        get when() {
                            return L.title && !env.mobile
                        },
                        get children() {
                            var W = _tmpl$2$5();
                            return insert(W, () => L.title), W
                        }
                    }), createComponent(Show, {
                        get when() {
                            return L.menu
                        },
                        get children() {
                            var W = _tmpl$3$3();
                            return insert(W, createComponent(ScrollView, {
                                pan: "x",
                                get class() {
                                    return cx("hide-scroll flex-none whitespace-nowrap bg-layer4 p-1 light-layer2-tabs page-menu size-full flex flex-nowrap rounded-xl")
                                },
                                get children() {
                                    return createComponent(For, {
                                        get each() {
                                            return L.menu
                                        },
                                        children: X => createComponent(A, {
                                            get id() {
                                                return X.href
                                            },
                                            class: "h-full rounded-lg inline-flex items-center gap-1 px-4",
                                            get href() {
                                                return X.href || ""
                                            },
                                            activeClass: "active-tab-group",
                                            inactiveClass: "btn-like",
                                            end: !0,
                                            replace: !0,
                                            get children() {
                                                return [memo$2(() => X.title), createComponent(Show, {
                                                    get when() {
                                                        return X.badge
                                                    },
                                                    get children() {
                                                        return createComponent(Badge, {
                                                            class: "-translate-y-1",
                                                            get value() {
                                                                return X.badge()
                                                            }
                                                        })
                                                    }
                                                })]
                                            }
                                        })
                                    })
                                }
                            })), W
                        }
                    })]
                }
            }), z);
            var K = R;
            return typeof K == "function" ? use(K, z) : R = z, insert(z, I), H
        }
    })
}
var $KEYS = Symbol("track-keys"),
    De, dt, ReactiveSet = (dt = class extends Set {
        constructor(L) {
            if (super(), Ae(this, De, new TriggerCache), L)
                for (const O of L) super.add(O)
        }
        get size() {
            return ge(this, De).track($KEYS), super.size
        }
        has(L) {
            return ge(this, De).track(L), super.has(L)
        }* keys() {
            for (const L of super.keys()) ge(this, De).track(L), yield L;
            ge(this, De).track($KEYS)
        }
        values() {
            return this.keys()
        }* entries() {
            for (const L of super.keys()) ge(this, De).track(L), yield [L, L];
            ge(this, De).track($KEYS)
        }[Symbol.iterator]() {
            return this.values()
        }
        forEach(L) {
            ge(this, De).track($KEYS), super.forEach(L)
        }
        add(L) {
            return super.has(L) || (super.add(L), batch(() => {
                ge(this, De).dirty(L), ge(this, De).dirty($KEYS)
            })), this
        }
        delete(L) {
            const O = super.delete(L);
            return O && batch(() => {
                ge(this, De).dirty(L), ge(this, De).dirty($KEYS)
            }), O
        }
        clear() {
            super.size && batch(() => {
                for (const L of super.keys()) ge(this, De).dirty(L);
                super.clear(), ge(this, De).dirty($KEYS)
            })
        }
    }, De = new WeakMap, dt),
    _tmpl$$9 = template("<div>"),
    _tmpl$2$4 = template('<div><div class="h-full rounded bg-alw_white">');
const smoothListSet = new ReactiveSet;

function SmoothList(L) {
    const [O, M] = splitProps(L, ["data", "progressBar"]), I = mergeProps({
        progressBar: !1,
        data: []
    }, O);
    let N;
    const [R, H] = createSignal([]);
    createEffect(() => H(I.data || []));
    const z = Scrollbar.createScrollProps(() => N),
        K = children(() => createComponent(ListView$1, {
            get each() {
                return R()
            },
            children: (...G) => (() => {
                var Y = _tmpl$$9();
                return insert(Y, () => L.children(...G)), Y
            })()
        })),
        W = children(() => (() => {
            var G = _tmpl$$9(),
                Y = mergeRefs(Z => N = Z, M.ref);
            return typeof Y == "function" && use(Y, G), spread(G, mergeProps(M, {
                get class() {
                    return cx("grid smooth-scroll smooth-list snap-x relative snap-mandatory grid-flow-col overflow-x-scroll overflow-y-hidden scroll-smooth hide-scroll", L.class)
                }
            }), !1, !0), insert(G, K), G
        })()),
        X = () => {
            const G = z.scrollWidth - z.clientWidth,
                Y = z.scrollLeft / G,
                Z = z.clientWidth / z.scrollWidth;
            return {
                progress: Y * (1 - Z) / Z,
                barLengthRatio: Z
            }
        };
    return onMount(() => {
        smoothListSet.add(N), onCleanup(() => {
            smoothListSet.delete(N)
        })
    }), [memo$2(W), createComponent(Toggle, {
        get when() {
            return I.progressBar
        },
        get children() {
            return createComponent(SwiperProgressbar, mergeProps(X))
        }
    })]
}
const SwiperProgressbar = L => (() => {
        var O = _tmpl$2$4(),
            M = O.firstChild;
        return createRenderEffect(I => {
            var N = cx("m-auto mt-2 h-1 w-20 overflow-hidden rounded-sm bg-layer4"),
                R = `translateX(${100*L.progress}%)`,
                H = `${100*L.barLengthRatio}%`;
            return N !== I.e && className(O, I.e = N), R !== I.t && ((I.t = R) != null ? M.style.setProperty("transform", R) : M.style.removeProperty("transform")), H !== I.a && ((I.a = H) != null ? M.style.setProperty("width", H) : M.style.removeProperty("width")), I
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), O
    })(),
    SmoothListController = L => {
        const [O, M] = createSignal(null), I = mergeProps({
            smoothListSelector: () => {
                if (!O()) return null;
                let Z = null,
                    Q = 1 / 0;
                return smoothListSet.forEach(J => {
                    if (J === O()) return;
                    const _ = getDistance(O(), J);
                    _.dy < Q && (Q = _.dy, Z = J)
                }), Z
            }
        }, L), [N, R] = splitProps(I, ["smoothListSelector"]), H = createMemo(() => I.smoothListSelector()), z = Scrollbar.createScrollProps(() => H()), K = createMemo(() => z.clientWidth), W = Z => ({
            disabled: createMemo(() => Z === -1 ? z.scrollLeft === 0 : z.scrollWidth - z.clientWidth - z.scrollLeft <= 1),
            onClick: () => {
                untrack(() => {
                    var Q;
                    z.isScrolling || (Q = H()) == null || Q.scrollTo({
                        left: z.scrollLeft + Z * K(),
                        top: 0,
                        behavior: "smooth"
                    })
                })
            }
        }), X = createMemo(() => W(-1)), G = createMemo(() => W(1)), Y = children(() => I.children ? I.children({
            leftButtonProps: { ...X(),
                disabled: X().disabled()
            },
            rightButtonProps: { ...G(),
                disabled: G().disabled()
            }
        }) : [createComponent(Button, {
            get disabled() {
                return X().disabled()
            },
            get onClick() {
                return X().onClick
            },
            type: "second",
            class: "size-8 bg-layer5",
            get children() {
                return createComponent(Icon, {
                    name: "Arrow",
                    class: "size-5"
                })
            }
        }), createComponent(Button, {
            get disabled() {
                return G().disabled()
            },
            get onClick() {
                return G().onClick
            },
            type: "second",
            class: "size-8 bg-layer5",
            get children() {
                return createComponent(Icon, {
                    name: "Arrow",
                    class: "size-5 rotate-180"
                })
            }
        })]);
        return (() => {
            var Z = _tmpl$$9();
            return use(M, Z), spread(Z, mergeProps(R, {
                get class() {
                    return cx(R.class, "flex gap-x-1")
                }
            }), !1, !0), insert(Z, Y), Z
        })()
    },
    getDistance = (L, O) => {
        const M = L.getBoundingClientRect(),
            I = O.getBoundingClientRect(),
            N = Math.max(0, Math.min(Math.abs(M.left - I.right), Math.abs(I.left - M.right))),
            R = Math.max(0, Math.min(Math.abs(M.top - I.bottom), Math.abs(I.top - M.bottom)));
        return {
            sqrt: Math.sqrt(N * N + R * R),
            dx: N,
            dy: R,
            rect1: M,
            rect2: I
        }
    };
var _tmpl$$8 = template("<div><div>");

function Switch(L) {
    const [, O] = splitProps(L, ["onChange", "value", "class", "size"]), M = createMemo(() => L.size === "small");
    return (() => {
        var I = _tmpl$$8();
        return spread(I, mergeProps(O, {
            get "data-disabled" () {
                return L.disabled
            },
            get class() {
                return cx("switch", M() && "switch-xs", L.class)
            },
            get "aria-checked" () {
                return L.value || void 0
            },
            get onClick() {
                return L.disabled ? () => {} : () => L.onChange && L.onChange(!L.value)
            }
        }), !1, !0), I
    })()
}
var _tmpl$$7 = template('<div class="flex justify-center mt-4">'),
    _tmpl$2$3 = template("<div>"),
    _tmpl$3$2 = template("<img class=w-full>"),
    _tmpl$4$1 = template('<div class="relative flex gap-y-4 flex-col"><div class="min-w-full -mx-4 "></div><div class="flex flex-col gap-y-[0.6rem] h-[6.5rem]"><span class="text-secondary text-sm font-semibold "></span><h3 class="leading-tight font-extrabold text-xl text-primary"></h3><p class="break-words text-secondary font-semibold text-sm">'),
    _tmpl$5 = template('<div class="flex space-x-2">');
const Intros = L => {
        const [O, M] = createSignal(0), I = mergeProps({
            intros: [],
            stepCounter: W => `${String(W+1).padStart(2,"0")}`
        }, L), [N, R] = splitProps(I, ["intros", "title", "stepCounter"]), H = createSelector(O), z = createMemo(() => I.intros[O()]), K = createMemo(() => !!I.intros[O() + 1]);
        return (() => {
            var W = _tmpl$2$3();
            return spread(W, mergeProps(R, {
                get class() {
                    return cx("px-4", R.class)
                }
            }), !1, !0), insert(W, createComponent(Show, {
                get when() {
                    return I.intros.length > 0
                },
                get children() {
                    return [createComponent(For, {
                        get each() {
                            return I.intros
                        },
                        children: (X, G) => createComponent(Toggle, {
                            get when() {
                                return H(G())
                            },
                            get children() {
                                var Y = _tmpl$4$1(),
                                    Z = Y.firstChild,
                                    Q = Z.nextSibling,
                                    J = Q.firstChild,
                                    _ = J.nextSibling,
                                    ee = _.nextSibling;
                                return insert(Z, createComponent(Show, {
                                    get when() {
                                        return typeof X.image == "string"
                                    },
                                    get fallback() {
                                        return X.image
                                    },
                                    get children() {
                                        var te = _tmpl$3$2();
                                        return createRenderEffect(() => setAttribute(te, "src", X.image)), te
                                    }
                                })), insert(J, () => I.stepCounter(G())), insert(_, () => X.title), insert(ee, () => X.description), Y
                            }
                        })
                    }), (() => {
                        var X = _tmpl$$7();
                        return insert(X, createComponent(BulletPoints, {
                            get activeIndex() {
                                return O()
                            },
                            get totals() {
                                return I.intros.length
                            }
                        })), X
                    })(), createComponent(Button, {
                        type: "brand",
                        size: "l",
                        class: "w-full mt-4 mb-1",
                        onClick: () => {
                            if (!K()) return pop$1.pop();
                            M(X => X + 1)
                        },
                        get children() {
                            return memo$2(() => !!(z().buttonName || K()))() ? defaultT("Next") : defaultT("Done")
                        }
                    })]
                }
            })), W
        })()
    },
    BulletPoints = L => (() => {
        var O = _tmpl$5();
        return insert(O, createComponent(Index, {
            get each() {
                return Array(L.totals).fill("")
            },
            children: (M, I) => (() => {
                var N = _tmpl$2$3();
                return N.$$click = () => {
                    var R;
                    return (R = L.onClick) == null ? void 0 : R.call(L, I)
                }, createRenderEffect(R => classList(N, {
                    "h-2 w-2 rounded-full transition-all ease-out": !0,
                    "bg-input": L.activeIndex !== I,
                    "bg-brand": L.activeIndex === I
                }, R)), N
            })()
        })), O
    })();
delegateEvents(["click"]);
var _tmpl$$6 = template("<div>");

function ToggleView(L) {
    const [, O] = splitProps(L, ["duration", "ease", "keepAlive", "when", "class"]), M = children(() => createComponent(Toggle, {
        get when() {
            return L.when
        },
        get keepAlive() {
            return L.keepAlive
        },
        get children() {
            var Y = _tmpl$$6();
            return spread(Y, mergeProps({
                get class() {
                    return cx("overflow-hidden", L.class)
                }
            }, O), !1, !1), Y
        }
    })), I = resolveFirst(M);
    let N = 0,
        R = () => {};
    const H = createMemo(() => `${L.duration||".35s"} height ${L.ease||"var(--ease-out"}`),
        z = createSwitchTransition(I, {
            onEnter(Y) {
                queueMicrotask(() => {
                    Y.style.height || (N = X(Y), Y.style.height = "0px"), K(Y, N)
                })
            },
            onExit(Y, Z) {
                N === 0 && (N = X(Y)), Y.style.height = Y.style.height || Y.clientHeight + "px", K(Y, 0, Z)
            }
        });

    function K(Y, Z, Q) {
        R(), requestAnimationFrame(() => {
            Y.getBoundingClientRect(), Y.style.transition = H(), Y.style.height = Z + "px", R = () => {
                Y.removeEventListener("transitionend", J)
            };

            function J() {
                W(Y), Q ? .()
            }
            Y.addEventListener("transitionend", J)
        })
    }

    function W(Y) {
        Y.style.transition = "", Y.style.height = "", R()
    }

    function X(Y) {
        const Z = Y.style.height;
        Y.style.height = "";
        const Q = Y.clientHeight;
        return Y.style.height = Z, Q
    }
    const G = new Set;
    return () => {
        const Y = z();
        return G.clear(), Y.forEach(Z => G.add(Z)), [...G.keys()]
    }
}

function createDelaySignal(L, O) {
    const [M, I] = createSignal(L());
    return createEffect(() => {
        const N = L(),
            R = O(N);
        if (R === 0) I(N);
        else {
            const H = setTimeout(() => I(N), R);
            onCleanup(() => clearTimeout(H))
        }
    }), M
}
var _tmpl$$5 = template("<div class=tooltip-triangle>"),
    _tmpl$2$2 = template('<span class="text-xs text-secondary">'),
    _tmpl$3$1 = template("<div><span>");
const DELAY_TIME = 400,
    [value, setValue] = createSignal(),
    forceUnmount = () => {
        setValue(), document.body.contains(tip) && document.body.removeChild(tip)
    };
let tip, cache;

function createTipRoot() {
    return cache || (cache = createRoot(() => {
        let L;
        const O = createDelaySignal(value, I => I ? 0 : DELAY_TIME),
            M = children(() => {
                var I;
                return (I = O()) == null ? void 0 : I.node()
            });
        return createEffect(() => {
            const I = O();
            if (I && M()) {
                document.body.appendChild(tip);
                const N = I.rect,
                    R = I.padding ? ? 5,
                    H = I.position ? ? "vertical",
                    z = tip.getBoundingClientRect();
                let K = 0,
                    W = 0,
                    X = 0,
                    G = 0;
                console.log("position", H), H === "horizontal" ? (G = N.y + N.height / 2 - 1, W = Math.min(Math.max(R, N.y + (N.height - z.height) / 2), window.innerHeight - z.height - R), K = N.x + N.width + R, X = K - L.clientWidth / 2 + 1, K >= window.innerWidth && (K = N.x - z.width - R, X = K + z.width - L.clientWidth / 2)) : (X = N.x + N.width / 2 - L.clientWidth / 2 + 1, K = Math.min(Math.max(R, N.x + (N.width - z.width) / 2), window.innerWidth - z.width - R), W = N.y - (z.height + 1 * R), G = W + z.height, W < R && (W = N.y + N.height + R, G = W)), tip.style.top = W + "px", tip.style.left = K + "px", tip.style.zIndex = "1001", tip.style.setProperty("--triangle-left", X + "px"), tip.style.setProperty("--triangle-top", G - 1 + "px");
                const Y = () => setValue(I),
                    Z = () => setValue();
                tip.addEventListener("mouseenter", Y), tip.addEventListener("mouseleave", Z), onCleanup(() => {
                    tip.removeEventListener("mouseenter", Y), tip.removeEventListener("mouseleave", Z), document.body.contains(tip) && (tip.style.top = "", tip.style.left = "", tip.style.setProperty("--triangle-left", ""), tip.style.setProperty("--triangle-top", ""), document.body.removeChild(tip))
                })
            } else {
                document.body.contains(tip) && (tip.style.top = "", tip.style.left = "", tip.style.setProperty("--triangle-left", ""), tip.style.setProperty("--triangle-top", ""), document.body.removeChild(tip));
                return
            }
        }), {
            value,
            node: createComponent(Portal, {
                ref: I => {
                    tip = I, I.className = "tooltip", createClickOutside(() => tip, N => {
                        var R;
                        const H = (R = value()) == null ? void 0 : R.trigger();
                        H != null && H.contains(N.target) || forceUnmount()
                    })
                },
                get children() {
                    return [(() => {
                        var I = _tmpl$$5(),
                            N = L;
                        return typeof N == "function" ? use(N, I) : L = I, I
                    })(), memo$2(M)]
                }
            }),
            setValue
        }
    })), [cache.value, cache.setValue]
}

function Tooltip(L) {
    const [O, M] = createTipRoot(), I = K => {
        if (L.disabled) return;
        const W = K.currentTarget.getBoundingClientRect();
        M({
            trigger: z,
            node: () => L.title ? (() => {
                var X = _tmpl$3$1(),
                    G = X.firstChild;
                return insert(G, () => L.title), insert(X, createComponent(Show, {
                    get when() {
                        return L.description
                    },
                    get children() {
                        var Y = _tmpl$2$2();
                        return insert(Y, () => L.description), Y
                    }
                }), null), createRenderEffect(Y => {
                    var Z = cx(L.title && L.description ? "px-4 py-3 flex flex-col gap-y-1" : "p-2"),
                        Q = cx(L.description ? "text-xs font-extrabold" : "text-sm", "text-primary");
                    return Z !== Y.e && className(X, Y.e = Z), Q !== Y.t && className(G, Y.t = Q), Y
                }, {
                    e: void 0,
                    t: void 0
                }), X
            })() : void 0,
            rect: W,
            padding: L.padding,
            position: L.position
        })
    }, N = () => {
        M()
    }, R = useScrollElement();
    createEventListener(() => R(), "scroll", () => {
        forceUnmount()
    });
    const H = children(() => L.children),
        z = resolveFirst(H);
    return isSupportTouch ? createEventListener(z, "touchstart", K => {
        O() ? M() : I(K)
    }) : (createEventListener(z, "mouseenter", I), createEventListener(z, "mouseleave", N)), H
}
const createControllableSignal = L => {
    var O;
    const [M, I] = createSignal((O = L.defaultValue) == null ? void 0 : O.call(L)), N = createMemo(() => {
        var H;
        return "value" in L && ((H = L.value) == null ? void 0 : H.call(L)) !== void 0
    }), R = createMemo(() => {
        var H;
        return N() ? (H = L.value) == null ? void 0 : H.call(L) : M ? .()
    });
    return [R, H => {
        untrack(() => {
            var z;
            const K = accessWith(H, R());
            return Object.is(K, R()) || (N() || I(K), (z = L ? .onChange) == null || z.call(L, K)), K
        })
    }]
};
var _tmpl$$4 = template('<div><div class="absolute left-0 top-1/2 -translate-y-1/2 h-[0.125rem] w-full quarterary"></div><div class="absolute top-0 left-0 cursor-pointer bg-primary h-full w-6 rounded-[0.25rem]">');

function Slider(L) {
    L = mergeProps({
        min: 0,
        max: 100,
        step: 1
    }, L);
    const [O, M] = splitProps(L, ["min", "max", "step", "onChange", "defaultValue", "value"]), [I, N] = createControllableSignal({
        defaultValue: () => O.defaultValue ? ? 0,
        value: () => O.value,
        onChange: O.onChange
    });
    let R, H;
    const z = Y => (Y - O.min) / (O.max - O.min),
        K = Y => {
            const Z = Y.target;
            Z.setPointerCapture(Y.pointerId), Y.preventDefault(), Y.stopPropagation(), Z.focus(), Z !== H && G(Y.clientX)
        },
        W = createElementSize(() => H),
        X = createElementSize(() => R),
        G = Y => {
            untrack(() => {
                const Z = R.getBoundingClientRect(),
                    Q = (Y - Z.left) / (Z.width - W.width) * (O.max - O.min),
                    J = Math.min(Math.max(O.min + Q, O.min), O.max),
                    _ = Math.round(J / O.step) * O.step;
                N(_)
            })
        };
    return createEventListenerMap(() => R, {
        pointerdown: K,
        pointermove: Y => {
            const Z = Y.target;
            Y.stopPropagation(), Z.hasPointerCapture(Y.pointerId) && G(Y.clientX)
        },
        pointerup: Y => {
            const Z = Y.target;
            Y.stopPropagation(), Z.hasPointerCapture(Y.pointerId) && Z.releasePointerCapture(Y.pointerId)
        }
    }), (() => {
        var Y = _tmpl$$4(),
            Z = Y.firstChild,
            Q = Z.nextSibling,
            J = R;
        typeof J == "function" ? use(J, Y) : R = Y, spread(Y, mergeProps(M, {
            get class() {
                return cx(L.class, "relative touch-none w-full h-4")
            }
        }), !1, !0);
        var _ = H;
        return typeof _ == "function" ? use(_, Q) : H = Q, createRenderEffect(ee => (ee = `translateX(${(X.width-W.width)*z(I())}px)`) != null ? Q.style.setProperty("transform", ee) : Q.style.removeProperty("transform")), Y
    })()
}
var _tmpl$$3 = template("<div>"),
    _tmpl$2$1 = template("<header>"),
    _tmpl$3 = template("<main>"),
    _tmpl$4 = template("<aside>");
const Layout = L => (() => {
        var O = _tmpl$$3();
        return spread(O, mergeProps(L, {
            get class() {
                return cx("share-layout", L.class)
            }
        }), !1, !1), O
    })(),
    Header = L => (() => {
        var O = _tmpl$2$1();
        return spread(O, mergeProps(L, {
            get class() {
                return cx("share-layout-header", L.class)
            }
        }), !1, !1), O
    })(),
    Content = L => (() => {
        var O = _tmpl$3();
        return spread(O, mergeProps(L, {
            get class() {
                return cx("share-layout-content", L.class)
            }
        }), !1, !1), O
    })(),
    Sider = L => (() => {
        var O = _tmpl$4();
        return spread(O, mergeProps(L, {
            get class() {
                return cx("share-layout-sider", L.class)
            }
        }), !1, !1), O
    })();
Layout.Content = Content;
Layout.Header = Header;
Layout.Sider = Sider;

function createCountdown(L) {
    function O(K) {
        let W = Date.now();
        if (W >= K) {
            W = K;
            return
        }
        const X = Math.max(K - W, 0) / 1e3;
        return {
            days: Math.floor(X / 86400),
            hours: Math.floor(X / 3600 % 24),
            minutes: Math.floor(X / 60 % 60),
            seconds: Math.floor(X % 60)
        }
    }
    const [M, I] = createStore({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }), N = useIsActive(), [R, H] = createSignal(O(L()));

    function z() {
        const K = L(),
            W = O(K);
        W ? (I(W), H(M)) : H(void 0)
    }
    return createTimer(z, () => N() && R() ? 1e3 : !1, setInterval), createEffect(() => {
        N() && z()
    }), R
}
const VERSION = "_v=4",
    defaultArgs = `${VERSION}&auto=format&dpr=${globalThis.devicePixelRatio}`,
    loaded = new Set;

function createImgix(L, O, M) {
    const I = () => `${L()}?${defaultArgs}${O?`&${O}`:""}`,
        [N, R] = createSignal(loaded.has(I()));
    return createEffect(() => {
        if (!N() && M !== !1) {
            let H = function() {
                R(!0)
            };
            loadImage(I()).then(() => {
                loaded.add(I()), H()
            }, H)
        }
    }), () => N() ? I() : `${L()}?${VERSION}&w=100&auto=format&cs=tinysrgb&blur=100`
}

function loadImage(L) {
    return new Promise((O, M) => {
        const I = new Image;
        I.onload = () => O(L), I.onerror = () => M(new Error("Image load error!")), I.src = L
    })
}
const CollapsibleContext = createContext(),
    error_message$1 = "[Collapsible.Context]: `useCollapsibleContext` must be used within a `Collapsible` component",
    useCollapsibleContext = () => {
        const L = useContext(CollapsibleContext);
        if (L === void 0) throw Error(error_message$1);
        return L
    },
    CollapsibleContent = L => {
        const O = useCollapsibleContext();
        return createComponent(ToggleView, mergeProps(L, {
            get when() {
                return O.isOpen()
            },
            get keepAlive() {
                var M;
                return (M = O.keepAlive) == null ? void 0 : M.call(O)
            }
        }))
    };
var _tmpl$$2 = template("<div>"),
    _tmpl$2 = template('<div class="flex items-center justify-between gap-3">');
const CollapsibleTrigger = L => {
    const O = useCollapsibleContext(),
        [M, I] = splitProps(L, ["onClick", "icon"]),
        N = composeEventHandlers([M.onClick, () => O.handleOpenChange(z => !z)]),
        R = (() => {
            var z = _tmpl$$2();
            return classList(z, {
                "flex-none size-6 flex items-center rounded-md justify-center bg-button_bright": !0
            }), insert(z, createComponent(Icon, {
                name: "Arrow",
                get class() {
                    return cx("transition-all size-4 duration-300 fill-secondary", O.isOpen() ? "rotate-[270deg]" : "rotate-180")
                }
            })), z
        })(),
        H = createMemo(() => {
            const z = !!O.isOpen();
            return typeof L.icon == "function" ? L.icon(z) : L.icon ? L.icon : R
        });
    return (() => {
        var z = _tmpl$2();
        return spread(z, mergeProps(I, {
            onClick: N
        }), !1, !0), insert(z, () => L.children, null), insert(z, H, null), z
    })()
};
var _tmpl$$1 = template("<div>");
const Collapsible$1 = L => {
        const [O, M] = splitProps(L, ["defaultOpen", "onOpenChange", "open"]), [I, N] = createControllableSignal({
            value: () => O.open,
            defaultValue: () => O.defaultOpen,
            onChange: H => {
                var z;
                return (z = L.onOpenChange) == null ? void 0 : z.call(L, H)
            }
        }), R = {
            isOpen: I,
            keepAlive: () => L.keepAlive ? ? !0,
            handleOpenChange: H => {
                N(z => accessWith(H, z))
            }
        };
        return createComponent(CollapsibleContext.Provider, {
            value: R,
            get children() {
                var H = _tmpl$$1();
                return spread(H, M, !1, !0), insert(H, () => M.children), H
            }
        })
    },
    Collapsible = defineComposition(Collapsible$1, {
        Content: CollapsibleContent,
        Trigger: CollapsibleTrigger
    }),
    AccordionContext = createContext(),
    error_message = "[BC-Shared-Accordion.Context]: `useAccordionContext` must be used within a `Accordion` component",
    useAccordionContext = () => {
        const L = useContext(AccordionContext);
        if (L === void 0) throw Error(error_message);
        return L
    },
    AccordionItem = L => {
        const O = useAccordionContext(),
            [M, I] = splitProps(L, ["value"]),
            N = () => O.selectionStateManager().isSelected(M.value);
        return createComponent(Collapsible, mergeProps(I, {
            get open() {
                return N()
            },
            onOpenChange: () => O.selectionStateManager().toggleSelect(M.value),
            get children() {
                return I.children
            }
        }))
    },
    AccordionItemTrigger = L => createComponent(Collapsible.Trigger, mergeProps(L, {
        get children() {
            return L.children
        }
    })),
    AccordionItemContent = L => createComponent(Collapsible.Content, mergeProps(L, {
        get children() {
            return L.children
        }
    }));
class ListStateManager {
    constructor(O, M) {
        be(this, "state"), be(this, "options"), this.state = O, this.options = Object.assign({
            allowDuplicate: !1
        }, access(M))
    }
    value() {
        var O;
        return access((O = this.state) == null ? void 0 : O[0])
    }
    toArray(O) {
        return Array.isArray(O) ? O : [O]
    }
    toSet(O) {
        return new Set(this.toArray(O))
    }
    ensureUniq(O) {
        var M;
        return (M = this.options) != null && M.allowDuplicate ? [...O] : [...this.toSet(O)]
    }
    add(O) {
        var M, I;
        O = this.toArray(O), (I = (M = this.state) == null ? void 0 : M[1]) == null || I.call(M, N => (N.push(...O), this.ensureUniq(N)))
    }
    replace(O) {
        var M, I;
        (I = (M = this.state) == null ? void 0 : M[1]) == null || I.call(M, this.toArray(O))
    }
    remove(O) {
        var M;
        (M = this.state) == null || M[1](I => {
            const N = this.toSet(O);
            return I.filter(R => !N.has(R))
        })
    }
    exist(O) {
        return this.toSet(this.value()).has(O)
    }
}
var SelectionMode = (L => (L[L.Multiple = 0] = "Multiple", L[L.Single = 1] = "Single", L))(SelectionMode || {});
class SelectionStateManager {
    constructor(O, M) {
        be(this, "mode"), be(this, "listStateManager"), this.listStateManager = new ListStateManager(O, {
            allowDuplicate: !1
        }), this.mode = M ? .mode ? ? 0
    }
    value() {
        return this.listStateManager.value()
    }
    isSingleMode() {
        return this.mode === 1
    }
    isMultiple() {
        return this.mode === 0
    }
    select(O) {
        this.isSingleMode() ? this.listStateManager.replace(O) : this.listStateManager.add(O)
    }
    deselect(O) {
        return this.listStateManager.remove(O)
    }
    toggleSelect(O) {
        this.isSelected(O) ? this.deselect(O) : this.select(O)
    }
    isSelected(O) {
        return this.listStateManager.exist(O)
    }
}
const createSelectionStateSignal = (L, O) => new SelectionStateManager(createControllableSignal(L), O);
var _tmpl$ = template("<div>");
const Accordion$1 = L => {
        const [O, M] = splitProps(L, ["activeKeys", "defaultActiveKeys", "onChange", "multiple"]), I = createSelectionStateSignal({
            value: () => O.activeKeys,
            defaultValue: () => O.defaultActiveKeys ? ? [],
            onChange: R => {
                var H;
                return (H = O.onChange) == null ? void 0 : H.call(O, R)
            }
        }, {
            mode: O.multiple ? SelectionMode.Multiple : SelectionMode.Single
        }), N = {
            selectionStateManager: () => I
        };
        return createComponent(AccordionContext.Provider, {
            value: N,
            get children() {
                var R = _tmpl$();
                return spread(R, M, !1, !1), R
            }
        })
    },
    AccordionBase = defineComposition(Accordion$1, {
        Item: AccordionItem,
        ItemContent: AccordionItemContent,
        ItemTrigger: AccordionItemTrigger
    }),
    Accordion = AccordionBase.registerStyles({
        Root: {
            class: "w-full space-y-4"
        },
        ItemTrigger: {
            class: "w-full cursor-pointer px-3 flex justify-between items-center rounded-md text-sm font-extrabold"
        },
        ItemContent: {
            class: "px-3"
        }
    }),
    m4 = Object.freeze(Object.defineProperty({
        __proto__: null,
        A,
        Accordion,
        ActiveAvatar,
        ActiveProvider,
        App,
        AvatarFrame,
        Badge,
        Breadcrumb,
        Button,
        Carousel,
        Checkbox,
        Collapsible,
        DatePicker,
        Decimal: Decimal$1,
        Dialog,
        DropDown,
        Each,
        Empty,
        FlatList,
        GridScrollList: GridScrollView,
        Icon,
        ImageX,
        Input,
        Intros,
        KeepScroll,
        Layout,
        LazyList: ListView$1,
        ListView,
        Loading,
        Long,
        Meta,
        MetaProvider,
        MultiSelect,
        Notice,
        NumberInput,
        get Occurrence() {
            return Occurrence
        },
        PQuery: PQueue,
        Pagination,
        Pop,
        PopProvider,
        QueueRender,
        Radio,
        Ref,
        Refs,
        ScrollView,
        Scrollbar,
        Select,
        Slider,
        SmoothList,
        SmoothListController,
        Sticky,
        Switch,
        TMCLayout,
        Tabs,
        ToastProvider,
        Toggle,
        ToggleView,
        Tooltip,
        Transition,
        UserTitle,
        access,
        account,
        accountInit,
        addUserReceiptEvent,
        animate,
        app,
        asyncQueue: AsyncQueue$1,
        authGuard,
        batchRouteDefinition,
        bc,
        bcdResource,
        createCallback,
        createClickOutside,
        createControllableSignal,
        createCountdown,
        createCss,
        createDisposable,
        createElementSize,
        createEmitter,
        createEventListener,
        createEventListenerMap,
        createI18n,
        createImgix,
        createIntersectionObserver,
        createIsMounted,
        createKeyHold,
        createListTransition,
        createNoSuspense,
        createPaginationResource,
        createRemote,
        createResizeObserver,
        createRootPool,
        createScheduled,
        createSingletonRoot,
        createSubRoot,
        createSwitchTransition,
        createTimer,
        createTween,
        createViewportObserver,
        createVisibilityObserver,
        createWindowSize,
        currentDepositResource,
        cx,
        debounce: debounce$1,
        deduction,
        env,
        getDepositBonusConfig,
        getHttp,
        getNextDepositOption,
        getNextDepositSoleOption,
        getShareLinks,
        getSocket,
        gsap: gsapWithCSS,
        initShumeiSmid,
        leading,
        leadingAndTrailing,
        makePersisted,
        mergeRefs,
        pop: pop$1,
        protobuf: d$1,
        registHttpReject,
        registWhiteList,
        requestRecaptcha,
        resolveElements,
        resolveFirst,
        resolveRemote,
        selectRedDot,
        setAccount,
        setEnv,
        setLang,
        setSetting,
        setWallet,
        setting,
        storageSync,
        syncAccount,
        system,
        systemUtils,
        throttle,
        toast,
        until,
        untilLogin,
        useActiveMemo,
        useBeforeLeave,
        useFlatItem,
        useGlobalComponent,
        useIsActive,
        useKeyDownEvent,
        useLoginCallback,
        useMeta,
        useNavigate,
        useNavigatePromise,
        useNavigatePromiseEnter,
        useReferrer,
        useResource,
        useRouterStack,
        useScrollElement,
        useScrollTop,
        user: UserLevel,
        utils,
        wallet,
        withDirection,
        withOccurrence,
        wrUtils: F
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    useIsActive as $, createVisibilityObserver as A, Button as B, ListView as C, ListView$1 as D, Empty as E, Icon as F, Input as G, Select as H, ImageX as I, Dialog as J, Switch as K, Loading as L, MultiSelect as M, mergeRefs as N, useReferrer as O, Pagination as P, Transition as Q, Ref as R, SmoothList as S, Toggle as T, QueueRender as U, batchRouteDefinition as V, A as W, SmoothListController as X, Tabs as Y, ActiveProvider as Z, __vitePreload as _, app as a, UserLevel as a0, systemUtils as a1, Decimal$1 as a2, resolveRemote as a3, createElementSize as a4, resolveElements as a5, createEventListenerMap as a6, Carousel as a7, authGuard as a8, pop$1 as a9, Badge as aA, Scrollbar as aB, createIsMounted as aC, createTimer as aD, createCountdown as aE, createTween as aF, useActiveMemo as aG, Accordion as aH, Each as aI, TMCLayout as aJ, createControllableSignal as aK, ActiveAvatar as aL, setWallet as aM, AvatarFrame as aN, Pop as aa, AsyncQueue$1 as ab, registHttpReject as ac, setSetting as ad, accountInit as ae, initShumeiSmid as af, App as ag, untilLogin as ah, wallet as ai, animate as aj, useScrollElement as ak, createClickOutside as al, system as am, useScrollTop as an, Tooltip as ao, currentDepositResource as ap, getNextDepositSoleOption as aq, setLang as ar, ToggleView as as, deduction as at, addUserReceiptEvent as au, selectRedDot as av, DropDown as aw, ScrollView as ax, createResizeObserver as ay, UserTitle as az, setting as b, until as c, account as d, env as e, createI18n as f, getSocket as g, makePersisted as h, cx as i, useNavigate as j, bc as k, createEventListener as l, m4 as m, getHttp as n, setAccount as o, useResource as p, createScheduled as q, registWhiteList as r, setEnv as s, toast as t, utils as u, leadingAndTrailing as v, throttle as w, createPaginationResource as x, createNoSuspense as y, createRootPool as z
};