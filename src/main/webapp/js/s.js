try {
    !function () {
        window.___baidu_union_ || (window.___baidu_union_ = {}), window.___baidu_union_dup_ || (window.___baidu_union_dup_ = {});
        var t, e = '___delivery___global___counter___';
        window._SF_ && window._SF_._global_ && window._SF_._global_._ssp ? (t = window._SF_._global_._ssp, t.DUP_4_SF = !0, t.destroy = function () {
            try {
                top[e] = {}
            } catch (t) {
                window[e] = {}
            }
        }) : t = window._ssp_global = window._ssp_global || {};
        try {
            top.location;
            t.counter = top[e] = top[e] || {}
        } catch (n) {
            t.counter = window[e] = window[e] || {}
        }
        var o = {global: t, proxyName: !1, basePath: 'https://cpro.baidustatic.com/cpro/ui/dup/'};
        !function () {
            var e = {
                name: "oojs", namespace: "", classes: {}, noop: function () {
                }, $oojs: function () {
                    var e = {};
                    if ("undefined" != typeof window && window && "undefined" != typeof document && document ? (this.runtime = "browser", e.global = window) : (this.runtime = "node", e.global = t), e.proxyName = "proxy", e.path = "node" === this.runtime ? process.cwd() + "/src/" : "/src/", "undefined" != typeof o) for (var i in o) i && o.hasOwnProperty(i) && (e[i] = o[i]);
                    this.global = e.global, e.proxyName && (Function.prototype[e.proxyName] = this.proxy), this.setPath(e.path), this.global.oojs = this.global.oojs || this
                }, path: {}, pathCache: {}, getPath: function (t) {
                    var e = t ? t.split(".") : !1, i = this.path;
                    if (e) for (var n = 0, o = e.length; o > n; n++) {
                        var s = e[n].toLowerCase();
                        if (!i[s]) break;
                        i = i[s]
                    }
                    return i.pathValue
                }, setPath: function (t, e) {
                    var i = this.path;
                    if ("object" != typeof t) {
                        if (e) for (var n = t.split("."), o = 0, s = n.length; s > o; o++) {
                            var r = n[o].toLowerCase();
                            i[r] = i[r] || {pathValue: i.pathValue}, i = i[r]
                        } else e = t;
                        i.pathValue = e, this.pathCache = {}
                    } else for (var a in t) a && t.hasOwnProperty(a) && this.setPath(a, t[a])
                }, getClassPath: function (t) {
                    if (!this.pathCache[t]) {
                        this.pathCache[t] = this.getPath(t) + t.replace(/\./gi, "/") + ".js";
                        var e = this.getPath(t), i = e.length - 1;
                        e.lastIndexOf("\\") !== i && e.lastIndexOf("/") !== i && (e += "/"), this.pathCache[t] = e + t.replace(/\./gi, "/") + ".js"
                    }
                    return this.pathCache[t]
                }, loadDeps: function (t, e) {
                    e = e || {};
                    var i = t.__deps, n = (t.__namespace, []);
                    for (var o in i) if (i.hasOwnProperty(o) && i[o]) {
                        var s;
                        if ("string" != typeof i[o] ? (t[o] = i[o], t[o] && t[o].__name && (s = t[o].__full)) : (s = i[o], t[o] = this.find(s)), !s || e[s]) continue;
                        if (e[s] = !0, t[o]) t[o].__deps && (n = n.concat(this.loadDeps(t[o], e))); else {
                            if ("node" === this.runtime) try {
                                t[o] = require(this.getClassPath(s))
                            } catch (r) {
                                n.push(s)
                            }
                            t[o] || n.push(s)
                        }
                    }
                    return n
                }, fastClone: function (t) {
                    var e = function () {
                    };
                    e.prototype = t;
                    var i = new e;
                    return i
                }, deepClone: function (t, e) {
                    "number" != typeof e && (e = 10);
                    var i, n = e - 1;
                    if (e > 0) if (t instanceof Date) i = new Date, i.setTime(t.getTime()); else if (t instanceof Array) {
                        i = [];
                        for (var o = 0, s = t.length; s > o; o++) i[o] = this.deepClone(t[o], n)
                    } else if ("object" == typeof t) {
                        i = {};
                        for (var r in t) if (t.hasOwnProperty(r)) {
                            var a = t[r];
                            i[r] = this.deepClone(a, n)
                        }
                    } else i = t; else i = t;
                    return i
                }, proxy: function (t, e) {
                    var i = Array.prototype.slice.apply(arguments), n = i.shift(),
                        o = "function" == typeof this ? this : i.shift();
                    return function () {
                        var t = Array.prototype.slice.apply(arguments);
                        return o.apply(n, t.concat(i))
                    }
                }, find: function (t) {
                    var e, i = t.split(".");
                    e = this.classes[i[0]];
                    for (var n = 1, o = i.length; o > n; n++) {
                        if (!e || !e[i[n]]) {
                            e = null;
                            break
                        }
                        e = e[i[n]]
                    }
                    return e
                }, reload: function (t) {
                    var e = this.find(t);
                    if (e) if (e.__registed = !1, "node" === this.runtime) {
                        var i = this.getClassPath(t);
                        delete require.cache[require.resolve(i)], e = require(i)
                    } else e = this.define(e); else e = this.using(t);
                    return e
                }, create: function (t, e, i, n, o, s) {
                    "string" == typeof t && (t = this.using(t));
                    var r = new t.__constructor(e, i, n, o, s);
                    return r
                }, using: function (t) {
                    var e = this.find(t);
                    return e || "node" === this.runtime && (require(this.getClassPath(t)), e = this.find(t)), e
                }, define: function (t) {
                    var e = t.name || "__tempName", i = t.namespace || "";
                    t.__name = e, t.__namespace = i, t.__full = i.length > 1 ? i + "." + e : e, t.__deps = t.deps, t.__oojs = this, t.__constructor = function (t, e, i, n, o) {
                        if (this.__clones && this.__clones.length > 0) for (var s = 0, r = this.__clones.length; r > s; s++) {
                            var a = this.__clones[s];
                            this[a] = this.__oojs.deepClone(this[a])
                        }
                        this.__constructorSource(t, e, i, n, o)
                    }, t.__constructorSource = t[e] || this.noop, t.__staticSource = t["$" + e] || this.noop, t.__staticUpdate = function () {
                        var e = [];
                        for (var i in this) if (this.hasOwnProperty(i)) {
                            var n = this[i];
                            "object" != typeof n || null === n || "deps" === i || 0 === i.indexOf("__") || t.__deps && t.__deps[i] || e.push(i)
                        }
                        this.__clones = e, this.__constructor.prototype = this
                    }, t.__static = function () {
                        this.__staticSource(), this.__staticUpdate()
                    };
                    for (var n, o = !1, s = !1, r = i.split("."), a = r.length, d = this.classes, l = 0; a > l; l++) n = r[l], n && (d[n] = d[n] || {}, d = d[n]);
                    d[e] = d[e] || {};
                    var c = d;
                    if (d = d[e], d.__name && d.__registed) {
                        if (d.__registed) {
                            o = !0;
                            for (var h in t) h && t.hasOwnProperty(h) && ("undefined" == typeof d[h] || d[h] === this.noop) && (s = !0, d[h] = t[h])
                        }
                    } else t.__registed = !0, c[e] = t;
                    if (t = c[e], !o || s) {
                        var u = this.loadDeps(t);
                        if (u.length > 0) {
                            if (this.loader = this.loader || this.using("oojs.loader"), "browser" !== this.runtime || !this.loader) throw new Error('class "' + t.name + "\" loadDeps error:" + u.join(","));
                            this.loader.loadDepsBrowser(t, u)
                        } else t.__static()
                    }
                    return "node" === this.runtime && arguments.callee.caller.arguments[2] && (arguments.callee.caller.arguments[2].exports = t), t
                }
            };
            e.define(e)
        }();
        var s = t.oojs, r = (new Date).getTime();
        s.setPath('https://dup.baidustatic.com/'), s.define({
            name: 'bottomSearchBar',
            namespace: 'dup.ui.assertion',
            deps: {},
            painterName: 'bottomSearchBar',
            assert: function (t) {
                var e = t.placement, i = e.container, n = e.fillstyle;
                return !(3 !== i.anchoredType || !i.slide || 9 !== n.btnStyleId)
            }
        }), s.define({
            name: 'baiduRec',
            namespace: 'dup.ui.assertion',
            deps: {},
            painterName: 'baiduRec',
            assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container;
                return 3 === i.rspFormat && 1 === i.flowType && 1 === n.anchoredType
            }
        }), s.define({
            name: 'inlayFix',
            namespace: 'dup.ui.assertion',
            deps: {},
            painterName: 'inlayFix',
            assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container, o = n.floated;
                return 1 === i.rspFormat && 1 === i.flowType && 1 === n.anchoredType ? o ? 1 === o.trigger ? !0 : !this.isFloat(o) : !0 : !1
            },
            isFloat: function (t) {
                for (var e in t) return !0;
                return !1
            }
        }), s.define({
            name: 'insideText',
            namespace: 'dup.ui.assertion',
            deps: {},
            painterName: 'insideText',
            assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container;
                return 3 === i.rspFormat && 1 === i.flowType && 8 === n.occurrence && 11 === n.anchoredType
            }
        }), s.define({
            name: 'dynamicFloat',
            namespace: 'dup.ui.assertion',
            painterName: 'dynamicFloat',
            assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container, o = n.floated;
                return !(1 !== i.rspFormat || 1 !== i.flowType || 1 !== n.anchoredType || !o || 8 !== o.trigger)
            }
        }), s.define({
            name: 'float',
            namespace: 'dup.ui.assertion',
            deps: {},
            painterName: 'float',
            assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container;
                return 1 === i.rspFormat && 1 === i.flowType && 3 === n.anchoredType, !1
            }
        }), s.define({
            name: 'inlayFix',
            namespace: 'dup.ui.assertion.mobile',
            deps: {},
            painterName: 'inlayFix',
            assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container;
                return 1 === i.rspFormat && 2 === i.flowType && 1 === n.anchoredType
            }
        }), s.define({
            name: 'float', namespace: 'dup.ui.assertion.mobile', painterName: 'float', assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container;
                return 1 === i.rspFormat && 2 === i.flowType && (3 === n.anchoredType || 11 === n.anchoredType)
            }
        }), s.define({
            name: 'insideText',
            namespace: 'dup.ui.assertion.mobile',
            deps: {},
            painterName: 'insideText',
            assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container;
                return 3 === i.rspFormat && 2 === i.flowType && 8 === n.occurrence && 11 === n.anchoredType
            }
        }), s.define({
            name: "config",
            namespace: "dup.common",
            DUP_PREFIX: "BAIDU_SSP_",
            COMMON_GLOBAL: "___baidu_union_",
            COMMON_GLOBAL_CALLBACK: "___baidu_union_callback_",
            HTTP_PROTOCOL: "http:",
            LOADER_DEFINE_NAME: "___adblockplus",
            LCR_COOKIE_NAME: "BAIDU_SSP_lcr",
            REQUEST_URL: "//pos.baidu.com/",
            POS_URL: "",
            POS_DOMAIN: "pos.baidu.com",
            ISPDB_DELIV: !1,
            DUP_TM: "BAIDU_DUP_SETJSONADSLOT",
            HTML_POST: "HTML_POST",
            SSP_JSONP: "SSP_JSONP",
            STATIC_JSONP: "STATIC_JSONP",
            LOG_URL: "//eclick.baidu.com/se.jpg",
            SBD_LOG: "//eclick.baidu.com/aoc.jpg",
            PV_LOG: "//eclick.baidu.com/rs.jpg",
            CACHE_URL: "//pos.baidu.com/bfp/snippetcacher.php?",
            STORAGE_TIMER: 864e5,
            STATUS_CREATE: 1,
            STATUS_REQUEST: 2,
            STATUS_RESPONSE: 4,
            STATUS_RENDERED: 8,
            STATUS_FINISH: 16,
            EXP_SWITCH: !1,
            EXP_SATUS: !1,
            BASE_ID: "118015",
            EXP_ID: "",
            RD_ID: "118005",
            AUTO_AD_EXP_ID: "111003",
            SHUNT_NUMBER: 100,
            IS_PREVIEW: !1,
            FIRST_ONCESEACH: !1,
            AD_ICON: "https://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/bd-logo08.png",
            PAGE_SEARCH_ID: "pageSearchId",
            AUTOID: "0",
            AUTO_JSONP: "AUTO_JSONP",
            AUTO_DC: 4,
            AUTO_PATH: "auto_dup",
            DEBUG_QUERY_TAG: "DUP_DEBUG_FLAG",
            $config: function () {
                this.HTTP_PROTOCOL = "https:" === document.location.protocol ? "https:" : "http:", 0 !== document.location.protocol.indexOf("http") && (this.HTTP_PROTOCOL = "https:")
            }
        }), s.define({
            name: "lang",
            namespace: "dup.common.utility",
            hasOwn: Object.prototype.hasOwnProperty,
            getAttribute: function (t, e) {
                for (var i = t, n = e.split("."); n.length;) {
                    if (void 0 === i || null === i) return;
                    i = i[n.shift()]
                }
                return i
            },
            serialize: function (t) {
                if ("object" != typeof t) return "";
                var e = [];
                for (var i in t) this.hasOwn.call(t, i) && e.push(i + "=" + encodeURIComponent(t[i]));
                return e.join("&")
            },
            getType: function (t) {
                for (var e = {}, i = "Array Boolean Date Error Function Number RegExp String".split(" "), n = 0, o = i.length; o > n; n++) e["[object " + i[n] + "]"] = i[n].toLowerCase();
                return null == t ? "null" : e[Object.prototype.toString.call(t)] || "object"
            },
            isEmptyObj: function (t) {
                for (var e in t) return !1;
                return !0
            },
            argumentsToArray: function (t) {
                var e = [];
                switch (this.getType(t)) {
                    case"object":
                        e = Array.prototype.slice.call(t);
                        break;
                    case"array":
                        e = t;
                        break;
                    case"number":
                    case"string":
                        e.push(t)
                }
                return e
            },
            template: function (t, e) {
                var i = /{(.*?)}/g;
                return t.replace(i, function (t, i, n, o) {
                    return e[i] || ""
                })
            },
            encodeHTML: function (t) {
                var e = {'"': "&quot;", ">": "&gt;", "<": "&lt;", "&": "&amp;"};
                return t.replace(/["<>&]/g, function (t) {
                    return e[t]
                })
            },
            format: function (t, e) {
                var i = /\{(\w+):(\w+)\}/g, n = this;
                return t.replace(i, function (t, i, o) {
                    var s = e[i];
                    switch (o) {
                        case"number":
                            s = +s || 0;
                            break;
                        case"boolean":
                            s = !!s;
                            break;
                        case"html":
                            s = n.encodeHTML(s)
                    }
                    return s
                })
            },
            jsonToObj: function (t) {
                var e = "";
                return window.JSON && window.JSON.parse && (e = window.JSON.parse(t)), e
            },
            objToString: function (t) {
                var e = "";
                try {
                    e = window.JSON && window.JSON.stringify ? window.JSON.stringify(t) : window.eval(t)
                } catch (i) {
                }
                return e
            },
            trim: function (t) {
                return t.replace(/(^\s*)|(\s*$)/g, "")
            },
            unique: function (t) {
                for (var e = [], i = {}, n = t.length, o = 0; n > o; o++) {
                    var s = t[o];
                    i[s] || (e[e.length] = s, i[s] = !0)
                }
                return e
            },
            isArray: function (t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            },
            isFunction: function (t) {
                return "[object Function]" == Object.prototype.toString.call(t)
            },
            toArray: function (t) {
                if (null === t || void 0 === t) return [];
                if (this.isArray(t)) return t;
                if ("number" != typeof t.length || "string" == typeof t || this.isFunction(t)) return [t];
                if (t.item) {
                    for (var e = t.length, i = new Array(e); e--;) i[e] = t[e];
                    return i
                }
                return [].slice.call(t)
            },
            encode: function (t) {
                return void 0 === t ? "" : encodeURIComponent(t)
            },
            encodeUrl: function (t) {
                var e = escape(t);
                return e = e.replace(/([*+-.\/@_])/g, function (t) {
                    return "%" + t.charCodeAt(0).toString(16)
                }), e.replace(/%/g, "_")
            },
            isPlain: function (t) {
                var e, i = Object.prototype.hasOwnProperty;
                if (!(t && "[object Object]" === Object.prototype.toString.call(t) && "isPrototypeOf" in t)) return !1;
                if (t.constructor && !i.call(t, "constructor") && !i.call(t.constructor.prototype, "isPrototypeOf")) return !1;
                for (e in t) ;
                return void 0 === e || i.call(t, e)
            },
            clone: function (t) {
                var e, i, n = t;
                if (!t || t instanceof Number || t instanceof String || t instanceof Boolean) return n;
                if (this.isArray(t)) {
                    n = [];
                    var o = 0;
                    for (e = 0, i = t.length; i > e; e++) n[o++] = this.clone(t[e])
                } else if (this.isPlain(t)) {
                    n = {};
                    for (e in t) t.hasOwnProperty(e) && (n[e] = this.clone(t[e]))
                }
                return n
            }
        }), s.define({
            name: "browser",
            namespace: "dup.common.utility",
            deps: {lang: "dup.common.utility.lang"},
            $browser: function () {
                this.win = window, this.nav = window.navigator, this.checkBrowser()
            },
            checkBrowser: function () {
                var t = navigator.userAgent, e = window.RegExp;
                this.antBrowser = !1, /msie (\d+\.\d)/i.test(t) && (this.ie = document.documentMode || +e.$1), /opera\/(\d+\.\d)/i.test(t) && (this.opera = +e.$1), /firefox\/(\d+\.\d)/i.test(t) && (this.firefox = +e.$1), /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(t) && !/chrome/i.test(t) && (this.safari = +(e.$1 || e.$2)), /chrome\/(\d+\.\d)/i.test(t) && (this.chrome = +e.$1, this.test360() && (this.qihoo = !0)), /qqbrowser\/(\d+\.\d)/i.test(t) && (this.tencent = !0), (/ucbrowser\/(\d+\.\d)/i.test(t) || /ubrowser\/(\d+\.\d)/i.test(t)) && (this.uc = !0), /miuibrowser\/(\d+\.\d)/i.test(t) && (this.xiaomi = !0), /vivobrowser\/(\d+\.\d)/i.test(t) && (this.vivo = !0), /oppobrowser\/(\d+\.\d)/i.test(t) && (this.oppo = !0), /baiduboxapp\/([\d.]+)/.test(t) && (this.baiduboxapp = !0);
                try {
                    /(\d+\.\d)/.test(this.lang.getAttribute(window, "external.max_version")) && (this.maxthon = +e.$1)
                } catch (i) {
                }
                (this.tencent || this.uc || this.xiaomi || this.vivo || this.oppo) && (this.antBrowser = !0), this.isWebkit = /webkit/i.test(t), this.isGecko = /gecko/i.test(t) && !/like gecko/i.test(t);
                for (var n = ["Android", "iPad", "iPod", "iPhone", "iOS", "Linux", "Macintosh", "Windows"], o = "", s = 0; s < n.length; s++) if (o = n[s], t.match(new RegExp(o, "i"))) {
                    "iPad" === o || "iPhone" === o || "iOS" === o || "iPod" === o ? this.isIOS = !0 : "Android" === o && (this.isAndroid = !0);
                    break
                }
                this.platform = o
            },
            test360: function () {
                try {
                    return "scoped" in document.createElement("style")
                } catch (t) {
                    return !1
                }
            },
            getFlashPlayerVersion: function () {
                var t = 0;
                try {
                    var e = "https:" === document.location.protocol;
                    if (this.chrome >= 45 || e) return 0;
                    if (this.nav.plugins && this.nav.mimeTypes.length) {
                        var i = this.nav.plugins["Shockwave Flash"];
                        i && i.description && (t = i.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
                    }
                    if (0 === t && (this.win.ActiveXObject || this.win.hasOwnProperty("ActiveXObject"))) for (var n = 30; n >= 2; n--) try {
                        var o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n);
                        if (o) {
                            var s = o.GetVariable("$version");
                            if (t = s.replace(/WIN/g, "").replace(/,/g, "."), t > 0) break
                        }
                    } catch (r) {
                    }
                    t = parseInt(t, 10), this.getFlashPlayerVersion = function () {
                        return t
                    }
                } catch (a) {
                    t = 0
                }
                return t
            }
        }), s.define({
            name: "cookie", namespace: "dup.common.utility", get: function (t, e) {
                var i = new RegExp("(^| )" + t + "=([^;]*)(;|$)"), n = i.exec(document.cookie);
                return n ? e ? decodeURIComponent(n[2]) : n[2] : ""
            }, set: function (t, e, i, n) {
                var o = i.expires;
                document.cookie = t + "=" + (n ? encodeURIComponent(e) : e) + (i.path ? "; path=" + i.path : "") + (o ? "; expires=" + o.toGMTString() : "") + (i.domain ? "; domain=" + i.domain : "")
            }, remove: function (t) {
                var e = new Date;
                e.setTime(e.getTime() - 86400), this.set(t, "", {path: "/", expires: e})
            }
        }), s.define({
            name: "additionalParam",
            namespace: "dup.business.parameter",
            deps: {},
            paramsList: [],
            ParamsMap: {
                clid: {key: "apdi", encode: !0},
                cuid: {key: "udi", encode: !0},
                ctkey: {key: "lcdi", encode: !0},
                acid: {key: "acid", encode: !0}
            },
            paramCheck: function (t, e) {
                this.paramsList = [];
                for (var i in e) if (i && e.hasOwnProperty(i) && this.ParamsMap[i]) {
                    var n = this.ParamsMap[i], o = {};
                    try {
                        n.key && (o.key = n.key, o.value = this.paramEncode(n, e[i])), n && !n.key && (o.key = i, o.value = this.paramEncode(n, e[i])), this.paramsList.push(o)
                    } catch (s) {
                    }
                }
            },
            paramEncode: function (t, e) {
                var i;
                return i = t.encode ? encodeURIComponent(e) : e
            }
        }), s.define({
            name: "requestCache",
            namespace: "dup.business",
            deps: {config: "dup.common.config"},
            slotInfoMap: {},
            secondResult: {},
            add: function (t, e) {
                this.slotInfoMap[t] = e
            },
            get: function (t) {
                return this.slotInfoMap[t]
            },
            cacheRequest: function (t, e) {
                if (!t || this.secondResult[t]) return !1;
                this.secondResult[t] = e;
                var i = this.get(t), n = this.config.CACHE_URL + "dpv=" + t + "&di=" + i.slotId;
                this.loadScript(n)
            },
            loadScript: function (t) {
                var e = document.createElement("script");
                e.charset = "utf-8", e.async = !0, e.src = t;
                var i = document.getElementsByTagName("head")[0] || document.body;
                i.insertBefore(e, i.firstChild)
            }
        }), s.define({
            name: "storage",
            namespace: "dup.common.utility",
            store: null,
            isAvailable: !1,
            prefix: "___ds_storage__",
            timeSpan: 72e5,
            $storage: function () {
                try {
                    this.store = window.localStorage, this.store && this.store.removeItem && (this.isAvailable = !0)
                } catch (t) {
                }
            },
            available: function () {
                var t = !1;
                return this.store && this.store.removeItem && (t = !0), t
            },
            setItem: function (t, e, i) {
                if (this.store) {
                    e = i ? encodeURIComponent(e) : e;
                    try {
                        this.store.setItem(t, e)
                    } catch (n) {
                    }
                }
            },
            getItem: function (t, e) {
                if (this.store) try {
                    var i = this.store.getItem(t);
                    return e && i ? decodeURIComponent(i) : i
                } catch (n) {
                    return null
                }
                return null
            },
            addItem: function (t, e, i) {
                if (this.store) {
                    e = i ? encodeURIComponent(e) : e;
                    var n = this.getItem(t) || "";
                    n += (n && "|") + e;
                    try {
                        this.setItem(t, n)
                    } catch (o) {
                    }
                }
            },
            removeItem: function (t) {
                this.store && this.store.removeItem(t)
            },
            spliceItem: function (t, e, i) {
                if (this.store) {
                    e = i ? encodeURIComponent(e) : e;
                    var n = this.getItem(t) || "";
                    if (n = n.replace(new RegExp(e + "\\|?", "g"), "").replace(/\|$/, "")) try {
                        this.setItem(t, n)
                    } catch (o) {
                    } else this.store.removeItem(t)
                }
            },
            getValue: function (t) {
                var e, i = this.getItem(this.prefix + t) || "";
                if (this.available() && i) {
                    var n = (new Date).getTime();
                    i = i.split("|");
                    var o = parseInt(i[1], 10) || 0;
                    o + this.timeSpan > n && (e = parseInt(i[0], 10) || 0)
                }
                return e
            }
        }), s.define({
            name: "expBranch",
            namespace: "dup.business",
            deps: {config: "dup.common.config"},
            tactics: function () {
                var t = 1e9 * Math.random();
                t < 1e6 * this.config.SHUNT_NUMBER ? (this.config.EXP_SATUS = !0, this.config.EXP_ID = this.config.RD_ID) : t >= 1e6 * this.config.SHUNT_NUMBER && t < 1e6 * this.config.SHUNT_NUMBER * 2 && (this.config.EXP_ID = this.config.BASE_ID)
            },
            mergeExps: function (t, e) {
                return t && e ? t += "," + e : t = t || e, t
            }
        }), s.define({
            name: "loader",
            namespace: "dup.common",
            deps: {config: "dup.common.config"},
            $loader: function () {
                this.loadingCls = this.loadingCls || {}
            },
            load: function (t, e, i) {
                var n = s.getClassPath(e), o = this.check(n);
                if (!o) {
                    var r = document.createElement("script");
                    r.type = "text/javascript", r.async = !0, r.src = n;
                    var a = s.proxy(this, this.onLoadStatusHandler, t, r);
                    r.onload = r.onerror = r.onreadystatechange = a;
                    var d = document.getElementsByTagName("script")[0];
                    d.parentNode.insertBefore(r, d), this.loadingCls[t] = i
                }
            },
            check: function () {
                for (var t in this.loadingCls) if (this.loadingCls.hasOwnProperty(t) && this.loadingCls[t] === !0) return !0;
                return !1
            },
            onLoadStatusHandler: function (t, e, i) {
                var e, i;
                3 === arguments.length ? (e = arguments[1], i = arguments[2]) : (e = arguments[0], i = arguments[1]);
                var n = this.loadingCls[e];
                i && /loaded|complete|undefined/.test(i.readyState) && (i.onload = i.onerror = i.onreadystatechange = null, i = void 0, n && n())
            }
        }), s.define({
            name: "float", namespace: "dup.ui.assertion.mobile", painterName: "float", assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container;
                return 1 === i.rspFormat && 2 === i.flowType && (3 === n.anchoredType || 11 === n.anchoredType)
            }
        }), s.define({
            name: "dynamicFloat",
            namespace: "dup.ui.assertion",
            painterName: "dynamicFloat",
            assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container, o = n.floated;
                return !(1 !== i.rspFormat || 1 !== i.flowType || 1 !== n.anchoredType || !o || 8 !== o.trigger)
            }
        }), s.define({
            name: "interface",
            namespace: "dup.business",
            deps: {lang: "dup.common.utility.lang"},
            apiMap: {},
            $Interface: function () {
            },
            register: function (t, e, i) {
                this.apiMap[t] = s.proxy(e, i)
            },
            executeTask: function (t) {
                for (var e in t) {
                    var i = t[e];
                    if ("array" === this.lang.getType(i) && ("id" !== e || "container" !== e || "size" !== e || "async" !== e)) {
                        var n = this.apiMap[e];
                        if (n) return n.apply(null, i)
                    }
                }
            },
            perform: function (t, e) {
                var i = this.apiMap[t];
                return i ? i.apply(null, e) : void 0
            }
        }), s.define({
            name: "sceneTactics",
            namespace: "dup.business",
            deps: {config: "dup.common.config", exp: "dup.business.expBranch"},
            $sceneTactics: function () {
                var t = String.fromCharCode(Math.floor(26 * Math.random()) + 97),
                    e = String.fromCharCode(Math.floor(26 * Math.random()) + 97);
                this.config.POS_URL || (this.config.POS_URL = this.config.HTTP_PROTOCOL + this.config.REQUEST_URL + t + "c" + e + "m?"), this.config.EXP_SWITCH && this.exp.tactics()
            },
            sceneTactics: function () {
            }
        }), s.define({
            name: "material",
            namespace: "dup.business",
            deps: {lang: "dup.common.utility.lang", config: "dup.common.config"},
            $material: function () {
                var t = this;
                this.materialFactory = {}, this.materialFactory.text = function (e) {
                    var i = "font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};",
                        n = "<span style=\"word-wrap:break-word;\"><a href=\"{clickUrl:string}\" target=\"{target:string}\" style=\"" + i + "\"{events}>{text:string}</a></span>",
                        o = /\{events\}/;
                    if (1 === e.version) n = n.replace(o, ""); else if (2 === e.version) {
                        var s = "this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';",
                            r = "this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';",
                            a = ' onmouseover="' + r + '" onmouseout="' + s + '"';
                        n = n.replace(o, a);
                        for (var d = ["default", "hover"], l = 0; l < d.length; l++) {
                            var c = d[l], h = c + "Color", u = c + "Bold", p = c + "Italic", m = c + "Underline";
                            e[h] = "#" + e[h], e[u] = e[u] ? "bold" : "normal", e[p] = e[p] ? "italic" : "normal", e[m] = e[m] ? "underline" : "none"
                        }
                    }
                    return t.lang.format(n, e)
                }, this.materialFactory.image = "<a href=\"{clickUrl:string}\" target=\"{target:string}\"><img src=\"{src:string}\" title=\"{title:html}\" alt=\"{title:html}\" border=\"0\" height=\"{height:number}\" width=\"{width:number}\" /></a>", this.materialFactory.flash = function (e) {
                    var i = ["<script>", "var BD = BD || {};", "BD.MC = BD.MC || {};", "BD.MC.ADFlash = BD.MC.ADFlash || {};", "BD.MC.ADImg = BD.MC.ADImg || {};", "BD.MC.ADFlash.w = {width:number};", "BD.MC.ADFlash.h = {height:number};", 'BD.MC.ADFlash.mu = "{src:string}";', 'BD.MC.ADFlash.cu = "{clickUrl:string}";', "BD.MC.ADFlash.wm = {wmode:number};", 'BD.MC.ADFlash.ct = "{clickTag:string}";', "BD.MC.ADImg.w = {imageWidth:number};", "BD.MC.ADImg.h = {imageHeight:number};", 'BD.MC.ADImg.mu = "{imageSrc:string}";', 'BD.MC.ADImg.cu = "{imageClickUrl:string}";', 'BD.MC.ADImg.tw = "{target:string}";', "BD.MC.ADImg.flag = {backupImage:number};", "</script>", '<script src ="', '//cbjs.baidu.com/js/{file:string}.js">', "</script>"];
                    return e.file = e.hasLink ? "cflash" : "flash", e.imageClickUrl = e.clickUrl, e.hasLink || (e.clickUrl = ""), t.lang.format(i.join(""), e)
                }, this.materialFactory.rich = function (t) {
                    return t.content
                }, this.materialFactory.slide = function (e, i) {
                    for (var n = "<div id=\"bd_ec_clb_asp\" style=\"width:{width:number}px;height:{height:number}px;overflow:hidden;\">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G(\"bd_ec_clb_asp\");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = \"\"; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = \"none\";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();</script>", o = [], s = e.materials, r = 0; r < s.length; r++) {
                        var a = s[r];
                        "string" != typeof a && (a = t.formatMaterial(a, i, !0)), o.push(a)
                    }
                    e.html = "<div>" + o.join("</div><div>") + "</div>";
                    var d = i.response.placement, l = d.container;
                    return e.width = i.width || l.width, e.height = i.height || l.height, t.lang.format(n, e)
                }
            },
            formatMaterial: function (t, e, i) {
                if ("string" == typeof t) return t;
                if (!t.type) return "";
                var n = this.materialFactory[t.type];
                if (n) {
                    var o = "string" == typeof n ? this.lang.format(n, t) : n(t, e);
                    return i ? o : "<!DOCTYPE html><body>" + o
                }
                return ""
            }
        }), s.define({
            name: "inlayFix",
            namespace: "dup.ui.assertion",
            deps: {},
            painterName: "inlayFix",
            assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container, o = n.floated;
                return 1 === i.rspFormat && 1 === i.flowType && 1 === n.anchoredType ? o ? 1 === o.trigger ? !0 : !this.isFloat(o) : !0 : !1
            },
            isFloat: function (t) {
                for (var e in t) return !0;
                return !1
            }
        }), s.define({
            name: "float",
            namespace: "dup.ui.assertion",
            deps: {},
            painterName: "float",
            assert: function (t) {
                var e = t.placement, i = e.basic, n = e.container;
                return 1 === i.rspFormat && 1 === i.flowType && 3 === n.anchoredType, !1
            }
        }), s.define({
            name: "unicode", namespace: "dup.common.utility", deps: {}, toDecode: function (t) {
                var e = [];
                if (t instanceof Array) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        e.push(this.decode(n))
                    }
                    return e
                }
                return "string" == typeof t ? this.decode(t) : void 0
            }, toEncode: function (t) {
                var e = [];
                if (t instanceof Array) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        e.push(this.encode(n))
                    }
                    return e
                }
                return "string" == typeof t ? this.encode(t) : void 0
            }, decode: function (t) {
                return unescape(t.replace(/\\(u[0-9a-fA-F]{4})/gm, "%$1"))
            }, encode: function (t) {
                return escape(t).replace(/%(u[0-9A-F]{4})|(%[0-9A-F]{2})/gm, function (t, e, i) {
                    return e && "\\" + e.toLowerCase() || unescape(i)
                })
            }
        }), s.define({
            name: "dom",
            namespace: "dup.common.utility",
            deps: {lang: "dup.common.utility.lang", browser: "dup.common.utility.browser"},
            $dom: function () {
            },
            g: function (t, e) {
                return t ? "string" === this.lang.getType(t) && t.length > 0 ? (e = e || window, e.document.getElementById(t)) : !t.nodeName || 1 !== t.nodeType && 9 !== t.nodeType ? null : t : null
            },
            getDocument: function (t) {
                return 9 === t.nodeType ? t : t.ownerDocument || t.document
            },
            getWindow: function (t) {
                var e = this.getDocument(t);
                return e.parentWindow || e.defaultView || null
            },
            isWindow: function (t) {
                try {
                    if (t && "object" == typeof t && t.document && "setInterval" in t) return !0
                } catch (e) {
                    return !1
                }
                return !1
            },
            isInIframe: function (t, e) {
                return t = t || window, t != window.top && t != t.parent || !this.isWindow(t)
            },
            checkParentAccess: function (t) {
                try {
                    return !!t.parent.location.toString()
                } catch (e) {
                    return !1
                }
            },
            isInCrossDomainIframe: function (t, e) {
                e = 2 === arguments.length ? e : t.parent;
                for (var i = 0, n = 10; i++ < n && this.isInIframe(t, e);) {
                    if (!this.checkParentAccess(t)) return !0;
                    t = t.parent
                }
                return i >= n
            },
            ready: function (t, e, i) {
                i = i || this.win || window;
                var n = i.document;
                e = e || 0, this.domReadyMonitorRunTimes = 0, this.readyFuncArray = this.readyFuncArray || [], this.readyFuncArray.push({
                    func: t,
                    delay: e,
                    done: !1
                });
                var o = s.proxy(this, function () {
                    var t = !1;
                    this.domReadyMonitorRunTimes++;
                    var e = !1;
                    try {
                        i.frameElement && (e = !0)
                    } catch (o) {
                        e = !0
                    }
                    if (this.browser.ie && this.browser.ie < 9 && !e) try {
                        n.documentElement.doScroll("left"), t = !0
                    } catch (o) {
                    } else if ("complete" === n.readyState || this.domContentLoaded) t = !0; else if (this.domReadyMonitorRunTimes > 3e5) return void(this.domReadyMonitorId && (i.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null));
                    if (t) try {
                        if (this.readyFuncArray && this.readyFuncArray.length) for (var s = 0, r = this.readyFuncArray.length; r > s; s++) {
                            var a = this.readyFuncArray[s];
                            a && a.func && !a.done && (a.delay ? (a.done = !0, i.setTimeout(a.func, a.delay)) : (a.done = !0, a.func()))
                        }
                    } catch (d) {
                        throw d
                    } finally {
                        this.domReadyMonitorId && (i.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null)
                    }
                }, this), r = s.proxy(this, function () {
                    this.domContentLoaded = !0, o()
                });
                this.domReadyMonitorId || (this.domReadyMonitorId = i.setInterval(o, 50), n.addEventListener ? (n.addEventListener("DOMContentLoaded", r, !1), i.addEventListener("load", r, !1)) : n.attachEvent && i.attachEvent("onload", r, !1))
            },
            bind: function (t, e, i) {
                return "string" == typeof t && (t = this.g(t)), e = e.replace(/^on/i, "").toLowerCase(), t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i), t
            },
            unBind: function (t, e, i) {
                return "string" == typeof t && (t = this.g(t)), e = e.replace(/^on/i, "").toLowerCase(), t.removeEventListener ? t.removeEventListener(e, i, !1) : t.attachEvent && t.detachEvent("on" + e, i), t
            },
            getNotCrossDomainTopWindow: function (t, e) {
                1 === arguments.length && "number" === this.lang.getType(arguments[0]) && (e = arguments[0], t = void 0), e = e || 10;
                for (var i = window, n = 0; n++ < e && this.isInIframe(i) && !this.isInCrossDomainIframe(i) && (!t || !t(i));) i = i.parent;
                return i
            },
            getTopElement: function (t) {
                var e = this.isWindow(t) ? t.document : this.getDocument(t);
                return "CSS1Compat" === e.compatMode ? e.documentElement : e.body
            },
            getDocumentTitle: function () {
                var t = this.getNotCrossDomainTopWindow(), e = t.document.title, i = 60;
                return e.length > i && (e = e.substr(0, i)), e
            },
            getPageClient: function () {
                var t;
                return "number" == typeof window.innerWidth ? t = {
                    width: window.innerWidth,
                    height: window.innerHeight
                } : document.documentElement && document.documentElement.clientWidth ? t = {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                } : document.body && document.body.clientWidth && (t = {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight
                }), t
            },
            getNotCrossDomainWin: function () {
                var t = this.getWinList();
                return t[t.length - 1]
            },
            getWinList: function () {
                for (var t = 0, e = window, i = e.top, n = [e]; e !== i && t++ < 10 && this.isWindow(e) && this.isWindow(e.parent);) e = e.parent, n.push(e);
                return getWinList = function () {
                    return n
                }, n
            },
            insertScriptElement: function (t) {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = t;
                var i = document.getElementsByTagName("script")[0];
                i.parentNode && i.parentNode.insertBefore(e, i)
            },
            isValidTextElement: function (t) {
                var e = t.nodeName.toLowerCase();
                switch (e) {
                    case"a":
                    case"script":
                    case"iframe":
                    case"br":
                    case"title":
                    case"option":
                    case"button":
                    case"h1":
                    case"h2":
                    case"h3":
                    case"h4":
                    case"h5":
                    case"h6":
                        return !1;
                    default:
                        return !0
                }
            },
            loadScript: function (t, e, i) {
                try {
                    !t.attachEvent || t.attachEvent.toString && t.attachEvent.toString().indexOf("[native code") < 0 || this.browser.opera ? (this.bind(t, "error", i), this.bind(t, "load", e)) : this.bind(t, "readystatechange", s.proxy(this, function (t, e, i) {
                        var n = (t.currentTarget || t.srcElement).readyState;
                        "complete" !== n && "loaded" !== n || e(t)
                    }, e, i))
                } catch (n) {
                    var o = n && n.stack ? n.stack : n,
                        r = "//eclick.baidu.com/rs.jpg?type=fatalError&key=loadScriptError";
                    r += "&mes=" + o, r += "rdm=" + Math.random(), (new Image).src = r
                }
            }
        }), s.define({
            name: "style",
            namespace: "dup.common.utility",
            deps: {
                dom: "dup.common.utility.dom",
                lang: "dup.common.utility.lang",
                browser: "dup.common.utility.browser"
            },
            getClientWidth: function (t) {
                t = t || window;
                try {
                    var e = this.dom.getTopElement(t).clientWidth;
                    if (e || 0 === e) return e
                } catch (i) {
                }
                return -1
            },
            getClientHeight: function (t) {
                t = t || window;
                try {
                    var e = this.dom.getTopElement(t).clientHeight;
                    if (e || 0 === e) return e
                } catch (i) {
                }
                return -1
            },
            getPositionCore: function (t) {
                var e = {top: 0, left: 0};
                if (t === this.dom.getTopElement(t)) return e;
                var i = this.dom.getDocument(t), n = i.body, o = i.documentElement;
                if (n && t.getBoundingClientRect) {
                    var s = t.getBoundingClientRect();
                    e.left = Math.floor(s.left) + Math.max(o.scrollLeft, n.scrollLeft), e.top = Math.floor(s.top) + Math.max(o.scrollTop, n.scrollTop), e.left -= o.clientLeft, e.top -= o.clientTop;
                    var r = this.getStyle(n, "borderLeftWidth"), a = this.getStyle(n, "borderTopWidth"),
                        d = parseInt(r, 10), l = parseInt(a, 10);
                    e.left -= isNaN(d) ? 2 : d, e.top -= isNaN(l) ? 2 : l
                }
                return e
            },
            getStyle: function (t, e) {
                if (!t) return "";
                var i = "";
                i = e.indexOf("-") > -1 ? e.replace(/[-][^-]{1}/g, function (t) {
                    return t.charAt(1).toUpperCase()
                }) : e.replace(/[A-Z]{1}/g, function (t) {
                    return "-" + t.charAt(0).toLowerCase()
                });
                var n, o = this.dom.getWindow(t);
                if (t.style[e] || t.style[i]) return t.style[e] || t.style[i];
                if (o && o.getComputedStyle) {
                    if (n = o.getComputedStyle(t, null)) return n.getPropertyValue(e) || n.getPropertyValue(i)
                } else if (t.currentStyle) return n = t.currentStyle, n[e] || n[i];
                return ""
            },
            getPosition: function (t) {
                if (t) {
                    var e = this.dom.g(t);
                    if (!e) return !1;
                    var i = this.getPositionCore(e), n = this.dom.getWindow(e);
                    if (!n) return i;
                    for (var o = 0, s = 10; n !== n.parent && o++ < s && !this.dom.isInCrossDomainIframe(n) && n.frameElement;) {
                        var r = this.getPositionCore(n.frameElement);
                        i.left += r.left, i.top += r.top, n = n.parent
                    }
                    return i
                }
            },
            getOpacityInWin: function (t) {
                for (var e = t, i = this.dom.getWindow(e), n = 100; e && e.tagName;) {
                    var o = 100;
                    if (this.browser.ie) {
                        if (this.browser.ie > 5) try {
                            o = parseInt(this.lang.getAttribute(e, "filters.alpha.opacity"), 10) || 100
                        } catch (s) {
                        }
                        n = n > o ? o : n
                    } else {
                        try {
                            o = 100 * (i.getComputedStyle(e, null).opacity || 1)
                        } catch (s) {
                        }
                        n *= o / 100
                    }
                    e = e.parentNode
                }
                return 0 === n ? 0 : n || 100
            },
            getOpacity: function (t) {
                for (var e = this.dom.g(t), i = this.dom.getWindow(e), n = this.getOpacityInWin(e), o = 0, s = 10; o++ < s && this.dom.isInIframe(i) && !this.dom.isInCrossDomainIframe(i);) {
                    var r = i.frameElement ? this.getOpacityInWin(i.frameElement) : 100;
                    n *= r / 100, i = i.parent
                }
                return n
            },
            getScrollWidth: function (t) {
                t = t || window;
                try {
                    var e = this.dom.getTopElement(t).scrollWidth;
                    if (e || 0 === e) return e
                } catch (i) {
                }
                return -1
            },
            getScrollHeight: function (t) {
                t = t || window;
                try {
                    var e = this.dom.getTopElement(t).scrollHeight;
                    if (e || 0 === e) return e
                } catch (i) {
                }
                return -1
            },
            getScrollTop: function (t) {
                t = t || window;
                var e = t.document;
                return t.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop
            },
            getScrollLeft: function (t) {
                var e = t || window, i = this.dom.getTopElement(e);
                return e.pageXOffset || i.scrollLeft
            },
            getOuterWidth: function (t, e) {
                var i = this.dom.g(t), n = i.offsetWidth;
                return e && (n += this.getMargin(i, "Left") + this.getMargin(i, "Right")), n
            },
            getMargin: function (t, e) {
                var i = this.getStyle(t, "margin" + e).toString().toLowerCase().replace("px", "").replace("auto", "0");
                return parseInt(i, 10) || 0
            },
            getOuterHeight: function (t, e) {
                var i = this.dom.g(t), n = i.offsetHeight;
                return e && (n += this.getMargin(i, "Top") + this.getMargin(i, "Bottom")), n
            },
            canFixed: function () {
                var t = !0;
                return this.browser.ie && (this.browser.ie < 7 || "BackCompat" === document.compatMode) && (t = !1),
                    t
            },
            setStyle: function (t, e, i) {
                var n = this.dom.g(t);
                n.style[e] = i
            },
            setStyles: function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && this.setStyle(t, i, e[i]);
                return t
            },
            getDefaultStyle: function (t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, !1)[e]
            },
            isVisible: function (t) {
                return "none" !== this.getDefaultStyle(t, "display") && "hidden" !== this.getDefaultStyle(t, "visibility") && 100 === this.getOpacity(t)
            },
            addDebugElement: function (t, e) {
                var i = ["<div ", 'style="position: absolute; right: 0px; top: 0px; z-index: 9999999;line-height:1.2;', 'font-size: 12px;background:#ff0000;font-weight: 700;">', "BAIDU_AD_", e, "<br>", t.clientWidth, "*", t.clientHeight, "</div>"].join(""),
                    n = document.createElement("div");
                n.innerHTML = i;
                var o = t.style;
                o.border = "1px solid #ff0000", o.position = o.position || "relative", t.appendChild(n)
            },
            getVisibilityInWin: function (t) {
                for (var e = t, i = this.dom.getWindow(e); e && e.tagName;) {
                    var n = "hidden" !== i.getComputedStyle(e, null).visibility;
                    if (!n) return !1;
                    e = e.parentNode
                }
                return !0
            },
            getVisibility: function (t) {
                var e = this.dom.g(t), i = this.dom.getWindow(e), n = this.getVisibilityInWin(e);
                if (!n) return !1;
                for (var o = 0, s = 10; o++ < s && this.dom.isInIframe(i) && !this.dom.isInCrossDomainIframe(i) && i.frameElement;) {
                    if (n = this.getVisibilityInWin(i.frameElement), !n) return !1;
                    i = i.parent
                }
                return !0
            },
            onPageVisible: function (t) {
                this.dom.bind(window, "load", t), this.dom.bind(window, "pageshow", t), document.visibilityState && this.dom.bind(document, "visibilitychange", t)
            },
            offPageVisible: function (t) {
                this.dom.unBind(window, "load", t), this.dom.unBind(window, "pageshow", t), document.visibilityState && this.dom.unBind(document, "visibilitychange", t)
            },
            onPageHidden: function (t) {
                this.dom.bind(window, "unload", t), this.dom.bind(window, "beforeunload", t), this.dom.bind(window, "pagehide", t), document.visibilityState && this.dom.bind(document, "visibilitychange", t)
            },
            offPageHidden: function (t) {
                this.dom.unBind(window, "unload", t), this.dom.unBind(window, "beforeunload", t), this.dom.unBind(window, "pagehide", t), document.visibilityState && this.dom.unBind(document, "visibilitychange", t)
            }
        }), s.define({
            name: "url",
            namespace: "dup.common.utility",
            deps: {dom: "dup.common.utility.dom"},
            getQueryValue: function (t, e, i) {
                var n = new RegExp("(\\?|&|#)" + e + "=([^&#]*)(&|#)?"), o = t.match(n), s = "";
                return o && (s = o[2]), i && (s = decodeURIComponent(s)), s
            },
            getTopWindowUrl: function (t) {
                var e = this.dom.getNotCrossDomainTopWindow(t), i = "";
                return this.dom.isInIframe(e) && (i = e.document.referrer), i = i || e.location.href
            },
            getMainDomain: function (t) {
                t = t || document.domain, 0 === t.indexOf("www.") && (t = t.substr(4)), "." === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1));
                var e = ["com", "cn", "net", "org", "gov", "info", "la", "cc", "co", "jp", "us", "hk", "tv", "me", "biz", "in", "be", "io", "tk", "cm", "li", "ru", "ws", "hn", "fm", "tw", "ma", "in", "vn", "name", "mx", "gd", "im"],
                    i = new RegExp("([a-z0-9][a-z0-9\\-]*?\\.(?:" + e.join("|") + ")(?:\\.(?:cn|jp|tw|ru|th))?)$", "i"),
                    n = t.match(i);
                return n ? n[0] : t
            },
            queryToJson: function (t) {
                for (var e, i, n, o, s = t.substr(t.indexOf("?") + 1), r = s.split("&"), a = r.length, d = {}, l = 0; a > l; l++) o = r[l].split("="), e = o[0], i = o[1], n = d[e], "undefined" == typeof n ? d[e] = i : "[object Array]" == Object.prototype.toString.call(n) ? n.push(i) : d[e] = [n, i];
                return d
            }
        }), s.define({
            name: "data",
            namespace: "dup.common.utility",
            deps: {lang: "dup.common.utility.lang", dom: "dup.common.utility.dom"},
            $data: function () {
                this.pageInfo = {}
            },
            data: function () {
                this.topWin = this.dom.getNotCrossDomainTopWindow(), this.globalInfo = this.topWin.BAIDU_SSP__info || (this.topWin.BAIDU_SSP__info = {})
            },
            forEach: function (t, e) {
                var i, n, o, s = t.length;
                if ("function" == typeof e) for (o = 0; s > o && (n = t[o], i = e.call(t, n, o), i !== !1); o++) ;
                return t
            },
            putInfo: function (t, e, i) {
                var n, o = i ? this.globalInfo : this.pageInfo;
                if ("string" === this.lang.getType(t)) {
                    for (var s = t.split("."), r = o; s.length;) {
                        var a = s.shift();
                        r[a] = s.length ? void 0 !== r[a] ? r[a] : {} : e, r = r[a]
                    }
                    n = e
                }
                return n
            },
            removeInfo: function (t, e) {
                var i = e ? this.globalInfo : this.pageInfo;
                switch (this.lang.getType(t)) {
                    default:
                        return !1;
                    case"string":
                        for (var n = t.split("."); n.length;) {
                            var o = n.shift();
                            if (!n.length || void 0 === i[o]) return delete i[o], !0;
                            i = i[o]
                        }
                }
                return !1
            },
            getInfo: function (t, e) {
                var i, n = e ? this.globalInfo : this.pageInfo;
                return "string" === this.lang.getType(t) && (i = this.lang.getAttribute(n, t)), i
            },
            getOnce: function (t) {
                var e = window, i = e[t];
                return e[t] = void 0, i
            },
            defineOnce: function (t, e, i) {
                var i = window[i] || window;
                return i[t] ? i[t] : (i[t] = e, e)
            },
            getConfig: function (t) {
                return t ? (this.pageInfo = this.getInfo("pageConfig") || {}, this.pageInfo[t]) : !1
            },
            putConfig: function (t, e) {
                return t && e ? (this.pageInfo = this.getInfo("pageConfig") || {}, this.pageInfo[t] = e, this.putInfo("pageConfig", this.pageInfo), !0) : !1
            }
        }), s.define({
            name: "origentation",
            namespace: "dup.business",
            deps: {lang: "dup.common.utility.lang", data: "dup.common.utility.data"},
            orientKey: "bizOrientations",
            orientUrgentKey: "bizUrgentOrientations",
            hasOwn: Object.prototype.hasOwnProperty,
            watchingSlotsMap: {},
            slotFinishedCallback: function () {
            },
            addOrientation: function (t, e) {
                var i = this.beforeSavingOrientation.apply(this, arguments);
                return this.saveOrientation(t, i)
            },
            addOrientationOnce: function (t, e) {
                var i = this.beforeSavingOrientation.apply(this, arguments);
                return this.saveOrientation(t, i, {urgent: !0, merge: !0})
            },
            setOrientationOnce: function (t, e) {
                var i = this.beforeSavingOrientation.apply(this, arguments);
                return this.saveOrientation(t, i, {urgent: !0, override: !0})
            },
            beforeSavingOrientation: function (t, e) {
                var i = /^[0-9a-zA-Z]+$/;
                return t && i.test(t) && e ? e = "array" === this.lang.getType(e) ? e : Array.prototype.slice.call(arguments, 1) : []
            },
            saveOrientation: function (t, e, i) {
                if (!e || !e.length) return !1;
                i = i || {urgent: !1, merge: !1, override: !1};
                var n = i.merge ? this.data.getInfo(this.orientKey) : {},
                    o = i.urgent ? this.orientUrgentKey : this.orientKey,
                    s = i.override ? {} : this.data.getInfo(o) || n, r = {};
                for (var a in s) this.hasOwn.call(s, a) && (r[a] = "array" === this.lang.getType(s[a]) ? s[a].slice() : s[a]);
                for (var d = r[t] || [], l = e.length, c = 0; l > c; c++) {
                    var h = e[c];
                    "string" == typeof h && (h = encodeURIComponent(h), h.length <= 100 && (d[d.length] = h))
                }
                return d.length ? (r[t] = this.lang.unique(d), this.data.putInfo(o, r), !0) : !1
            },
            getOrientationQuery: function (t) {
                t = t || 500, t = Math.max(0, Math.min(t, 500));
                var e, i = [], n = this.data.getInfo(this.orientUrgentKey) || this.data.getInfo(this.orientKey) || {};
                if ("object" === this.lang.getType(n)) for (var o in n) this.lang.hasOwn.call(n, o) && (e = o + "=" + n[o].join(","), i[i.length] = e);
                this.data.putInfo(this.orientUrgentKey, void 0), i.sort(function (t, e) {
                    return t.length - e.length
                });
                for (var s = "", r = i.length, a = 0; r > a && !(s.length + i[a].length >= t); a++) s += (a ? "&" : "") + i[a];
                return s
            },
            addSlotStatusCallback: function (t, e) {
                this.setSlotFinishCallback(t), this.addWatchSlotId(e)
            },
            setSlotFinishCallback: function (t) {
                this.slotFinishedCallback = t
            },
            addWatchSlotId: function (t) {
                this.watchingSlotsMap[t] = !0
            }
        }), s.define({
            name: "browserParam",
            namespace: "dup.business.parameter",
            deps: {
                config: "dup.common.config",
                browser: "dup.common.utility.browser",
                dom: "dup.common.utility.dom",
                style: "dup.common.utility.style",
                url: "dup.common.utility.url",
                cookie: "dup.common.utility.cookie"
            },
            $browserParam: function () {
                this.win = window, this.doc = this.win.document, this.nav = this.win.navigator
            },
            getTopWin: function () {
                return this.topWindow || (this.topWindow = this.dom.getNotCrossDomainTopWindow()), this.topWindow
            },
            paramsList: [{
                key: "dbv", value: function () {
                    return this.browser.qihoo ? "1" : this.browser.chrome ? "2" : "0"
                }
            }, {
                key: "drs", value: function () {
                    var t = {uninitialized: 0, loading: 1, loaded: 2, interactive: 3, complete: 4};
                    try {
                        return t[this.doc.readyState]
                    } catch (e) {
                        return -1
                    }
                }
            }, {
                key: "pcs", value: function () {
                    var t = [this.style.getClientWidth(this.getTopWin()), this.style.getClientHeight(this.getTopWin())];
                    return t.join("x")
                }
            }, {
                key: "pss", value: function () {
                    var t = [this.style.getScrollWidth(this.getTopWin()), this.style.getScrollHeight(this.getTopWin())];
                    return t.join("x")
                }
            }, {
                key: "cfv", value: function () {
                    return this.browser.getFlashPlayerVersion()
                }
            }, {
                key: "cpl", value: function () {
                    return this.nav.plugins.length || 0
                }
            }, {
                key: "chi", value: function () {
                    return this.win.history.length || 0
                }
            }, {
                key: "cce", value: function () {
                    return this.nav.cookieEnabled || 0
                }
            }, {
                key: "cec", value: function () {
                    return (this.doc.characterSet ? this.doc.characterSet : this.doc.charset) || ""
                }
            }, {
                key: "tlm", value: function () {
                    return Date.parse(this.doc.lastModified) / 1e3
                }
            }, {
                key: "prot", value: function () {
                    return "https:" === this.config.HTTP_PROTOCOL ? "2" : ""
                }
            }, {
                key: "rw", value: function () {
                    var t = Math.max(320, Math.min(window.innerWidth, window.innerHeight));
                    return isNaN(t) && (t = Math.min(this.style.getClientWidth(), this.style.getClientHeight())), t || 0
                }
            }, {
                key: "ltu", encode: !0, limit: 700, value: function () {
                    var e, i = s.proxy(this, function (t) {
                        var e = 200, i = 60, n = this.style.getClientWidth(t), o = this.style.getClientHeight(t);
                        return e > 0 && i > 0 && n > 2 * e && o > 2 * i
                    });
                    return e = t.location && t.location.href ? t.location.href : this.url.getTopWindowUrl(i), e.indexOf("cpro_prev") > 0 && (e = e.slice(0, e.indexOf("?"))), e
                }
            }, {
                key: "liu", encode: !0, limit: 700, value: function () {
                    return this.dom.isInIframe(this.win) ? this.doc.URL : ""
                }
            }, {
                key: "ltr", encode: !0, limit: 300, value: function () {
                    var t = this.getTopWin(), e = "";
                    try {
                        e = t.opener ? t.opener.document.location.href : ""
                    } catch (i) {
                    }
                    return e || t.document.referrer
                }
            }, {
                key: "lcr", encode: !0, value: function () {
                    if ("union" === this.slotInfo.productLine) return "";
                    var t = this.doc.referrer;
                    if (!t) return "";
                    var e = t.replace(/^https?:\/\//, "");
                    e = e.split("/")[0], e = e.split(":")[0], e = this.url.getMainDomain(e);
                    var i = this.url.getMainDomain(), n = this.cookie.get(this.config.LCR_COOKIE_NAME);
                    return n && i === e ? n : i !== e ? (this.cookie.set(this.config.LCR_COOKIE_NAME, t, {domain: i}), t) : ""
                }
            }, {
                key: "ecd", encode: !0, value: function () {
                    return this.browser.ie && this.browser.ie < 9 ? 0 : 1
                }
            }],
            setSlotInfo: function (t) {
                this.slotInfo = t
            }
        }), s.define({
            name: "systemParam",
            namespace: "dup.business.parameter",
            deps: {dom: "dup.common.utility.dom", style: "dup.common.utility.style"},
            $systemParam: function () {
                this.win = window, this.doc = this.win.document, this.screen = this.win.screen
            },
            paramsList: [{
                key: "uc", value: function () {
                    var t = [this.screen.availWidth, this.screen.availHeight];
                    return t.join("x")
                }
            }, {
                key: "pis", value: function () {
                    var t = this.dom.isInIframe(this.win) ? [this.style.getClientWidth(), this.style.getClientHeight()] : [-1, -1];
                    return t.join("x")
                }
            }, {
                key: "sr", value: function () {
                    var t = [this.screen.width, this.screen.height];
                    return t.join("x")
                }
            }, {
                key: "tcn", value: function () {
                    var t = +new Date;
                    return Math.round(t / 1e3)
                }
            }]
        }), s.define({
            name: "event",
            namespace: "dup.common.utility",
            deps: {dom: "dup.common.utility.dom"},
            bind: function (t, e, i) {
                var n = this.dom.isWindow(t) ? t : this.dom.g(t);
                if (n) if (n.addEventListener) n.addEventListener(e, i, !1); else if (n.attachEvent) n.attachEvent("on" + e, i); else {
                    var o = n["on" + e];
                    n["on" + e] = function () {
                        o && o.apply(this, arguments), i.apply(this, arguments)
                    }
                }
                return n
            },
            off: function (t, e, i) {
                var n, o, s = t._listeners_;
                if (!s) return t;
                if ("undefined" == typeof e) {
                    for (n in s) delete s[n];
                    return t
                }
                if (e.indexOf("on") && (e = "on" + e), o = s[e], "undefined" == typeof i) delete s[e]; else if (o) for (n = o.length - 1; n >= 0; n--) o[n].handler === i && o.splice(n, 1);
                return t
            },
            unBind: function (t, e, i) {
                return "string" == typeof t && (t = this.dom.g(t)), t = this.off(t, e.replace(/^\s*on/, ""), i)
            },
            app: function (t, e) {
                return t.bind.apply(t, Array.prototype.slice.call(arguments, 1))
            }
        }), s.define({
            name: "fingerPrint",
            namespace: "dup.business",
            deps: {
                browser: "dup.common.utility.browser",
                event: "dup.common.utility.event",
                dom: "dup.common.utility.dom",
                storage: "dup.common.utility.storage"
            },
            start: function () {
                this.idPrefix = "BAIDU_DUP_fp_", this.fpElId = this.idPrefix + "wrapper", this.dom.g(this.fpElId) || this.event.bind(window, "load", s.proxy(this, this.createFPIframe))
            },
            createFPIframe: function () {
                if (!this.dom.g(this.fpElId)) {
                    var t = window, e = t.document, i = e.body, n = this.dom.isInIframe(t) ? e.URL : "", o = null,
                        s = null;
                    if ((this.browser.ie > 9 || !this.browser.ie) && n) try {
                        o = e.cookie, s = this.storage.isAvailable
                    } catch (r) {
                        return
                    }
                    var a = "https://pos.baidu.com/wh/o.htm?ltr=", d = e.createElement("div");
                    d.id = this.fpElId, d.style.position = "absolute", d.style.left = "-1px", d.style.bottom = "-1px", d.style.zIndex = 0, d.style.width = 0, d.style.height = 0, d.style.overflow = "hidden", d.style.visibility = "hidden", d.style.display = "none";
                    var l = e.createElement("iframe");
                    l.id = this.idPrefix + "iframe", l.src = a, l.style.width = 0, l.style.height = 0, l.style.visibility = "hidden", l.style.display = "none";
                    try {
                        d.insertBefore(l, d.firstChild), i && i.insertBefore(d, i.firstChild)
                    } catch (r) {
                    }
                }
            },
            loadAntiBotFile: function (t) {
                var e = 1e4 * Math.random();
                if (500 > e) {
                    if (this.antiScript) {
                        if (window.BAIDU_SSP_sendAntiLog) return void window.BAIDU_SSP_sendAntiLog(t)
                    } else {
                        this.antiScript = document.createElement("script"), this.antiScript.type = "text/javascript", this.antiScript.async = !0, this.antiScript.src = "//cpro.baidustatic.com/cpro/ui/ab.min.js";
                        var i = document.getElementsByTagName("script")[0];
                        i && i.parentNode && i.parentNode.insertBefore(this.antiScript, i)
                    }
                    this.dom.loadScript(this.antiScript, function () {
                        window.BAIDU_SSP_sendAntiLog && window.BAIDU_SSP_sendAntiLog(t)
                    })
                }
            }
        }), s.define({
            name: "asserter",
            namespace: "dup.ui.assertion",
            deps: {mobile: "dup.ui.assertion.mobile.float", dynamicFloat: "dup.ui.assertion.dynamicFloat"},
            assert: function (t) {
                var e = t.response.placement.userdefine || "", i = t.response.placement.encode_userdefine || "";
                i && "encoded" === i && (e = decodeURIComponent(e), t.response.placement.userdefine = e);
                for (var n = e.split("|") || [], o = {}, s = 0, r = n.length; r > s; s++) {
                    var a = n[s], d = a.split("="), l = d[0];
                    l && (o[l] = d[1])
                }
                if (o.hasOwnProperty("painter")) return o.painter;
                var c = t.styleOpenApi.tn || "", h = parseInt(t.styleOpenApi.xuanting || 0, 10);
                return c.indexOf("mobile") >= 0 ? h > 0 || this.mobile.assert(t.response) ? "mobile.float" : "mobile.inlayFix" : "template_float_searchBar" === c ? "searchBar" : "template_float_bottom_lu" === c ? "" : c.indexOf("_xuanfu") >= 0 || c.indexOf("float") >= 0 ? "" : h > 0 || this.dynamicFloat.assert(t.response) ? "dynamicFloat" : c && c.length > 0 ? "inlayFix" : ""
            }
        }), s.define({
            name: "creativePreview",
            namespace: "dup.business",
            deps: {
                url: "dup.common.utility.url",
                dom: "dup.common.utility.dom",
                cookie: "dup.common.utility.cookie",
                config: "dup.common.config",
                lang: "dup.common.utility.lang"
            },
            PREV_TEMP_URL: "//cpro.baidu.com/cpro/ui/preview/templates/",
            validate: function (t, e, i, n, o) {
                var s = !1, r = this.getPrevValue(i, o);
                if (!r) return s;
                for (var a = this.parsePreviewData(r), d = 1 === parseInt(a.type, 10), l = !(n.length > 0), c = !(n.length > 0), h = 0, u = n.length; u > h; h++) {
                    var p = n[h];
                    0 === p ? c = !0 : 4 === p || 50 === p ? (c = !0, l = !0) : 1 !== p && 2 !== p || (l = !0)
                }
                return !d && l ? s = parseInt(a.imgWidth, 10) === parseInt(t, 10) && parseInt(a.imgHeight, 10) === parseInt(e, 10) : d && c && this.isAvalibleTextSize(t, e) && (s = !0), s
            },
            isAvalibleTextSize: function (t, e) {
                for (var i = ["1024_60", "120_240", "120_600", "125_125", "160_600", "180_150", "200_200", "234_60", "250_250", "300_120", "300_250", "300_280", "336_280", "360_150", "360_300", "460_60", "468_60", "480_160", "500_200", "580_90", "640_60", "728_90", "760_60", "760_75", "760_90", "960_60", "960_75", "960_90"], n = 0, o = i.length; o > n; n++) if (t + "_" + e === i[n]) return !0;
                return !1
            },
            getPreviewUrl: function (t, e, i, n) {
                var o = window.location.href;
                if (!this.validate(t, e, n, i, o)) return "";
                var s = n.indexOf("inlay") >= 0 ? "bd_cpro_prev" : "bd_cpro_fprev", r = this.getPrevValue(n, o),
                    a = this.parsePreviewData(r), d = "";
                return n.indexOf("inlay") >= 0 ? d = this.getInlayUrl(parseInt(a.type, 10), s, r, "text_default_" + t + "_" + e) : n.indexOf("float") >= 0 && (d = this.getFloatUrl(parseInt(a.type, 10), s, r)), d
            },
            getPrevValue: function (t, e) {
                var i;
                i = e ? e.substring(e.indexOf("?")) : this.dom.isInCrossDomainIframe(window) ? window.location.search.slice(1) : window.top.location.search.slice(1);
                var n, o = document.referrer,
                    s = t.indexOf("inlay") >= 0 || "ui" === t ? "bd_cpro_prev" : "bd_cpro_fprev", r = "";
                try {
                    n = document.cookie
                } catch (a) {
                }
                return i.indexOf(s) > -1 && (r = this.url.getQueryValue(i, s)), !r && n && -1 !== n.indexOf(s) && (r = this.cookie.get(s)), r || -1 === o.indexOf(s) || (r = this.url.getQueryValue(o, s)), r
            },
            parsePreviewData: function (t) {
                return t = decodeURIComponent(t).replace(/\\x1e/g, "&").replace(/\\x1d/g, "=").replace(/\\x1c/g, "?").replace(/\\x5c/g, "\\"), this.lang.jsonToObj(t)
            },
            getFloatUrl: function (t, e, i) {
                var n;
                n = 2 === t ? "float_image.html" : 4 === t || 3 === t ? "float_flash.html" : "blank_tips.html";
                var o = this.PREV_TEMP_URL + n + "?",
                    s = "tn=template_float_all_normal" + ("&" + e + "=" + i).replace(/\./g, "%252e") + "&ut=" + +new Date;
                return o + s
            },
            getInlayUrl: function (t, e, i, n) {
                var o;
                o = 1 === t ? n + ".html" : 2 === t ? "image.html" : 4 === t || 3 === t ? "flash.html" : "blank_tips.html";
                var s = this.PREV_TEMP_URL + o + "?";
                return s += ("" + e + "=#" + i + "&ut=" + +new Date).replace(/\.(?!swf)/g, "%252e")
            }
        }), s.define({
            name: "deliveryLimit",
            namespace: "dup.business",
            deps: {
                inlayFixAssert: "dup.ui.assertion.inlayFix",
                dynamicFloatAssert: "dup.ui.assertion.dynamicFloat",
                floatAssert: "dup.ui.assertion.float",
                dom: "dup.common.utility.dom"
            },
            MAX_COUNT: {},
            TYPE: {INLAY: "inlay", COUPLET: "couplet", POPUP: "popup", LINKUNIT: "linkunit"},
            $deliveryLimit: function () {
                this.displayedMap = this.displayedMap || {}, this.MAX_COUNT[this.TYPE.INLAY] = 25, this.MAX_COUNT[this.TYPE.COUPLET] = 2, this.MAX_COUNT[this.TYPE.POPUP] = 1, this.MAX_COUNT[this.TYPE.LINKUNIT] = 25
            },
            validate: function (t) {
                if ("union" !== t.productLine) return !0;
                var e = this.getSlotType(t), i = this.getAdCount(e), n = this.MAX_COUNT[e];
                return n > i
            },
            getAdCount: function (t) {
                var e = this.displayedMap[t] || {}, i = 0;
                for (var n in e) n && e[n] && e.hasOwnProperty(n) && (this.dom.g(n) ? i++ : e[n] = void 0);
                return i
            },
            setAdsCount: function (t, e) {
                var i = this.displayedMap[t];
                return i || (this.displayedMap[t] = {}, i = this.displayedMap[t]), i[e] = 1, !0
            },
            getSlotType: function (t) {
                var e = this.TYPE.INLAY, i = t.response;
                if (!i) return e;
                var n = i.placement;
                if ((this.inlayFixAssert.assert(i) || this.dynamicFloatAssert.assert(i)) && (e = this.TYPE.INLAY), n && n.fillstyle) for (var o = i.placement.fillstyle.elements || [], s = 0, r = o.length; r > s; s++) if (5 === o[s]) return this.TYPE.LINKUNIT;
                return e
            }
        }), s.define({
            name: "landingPage",
            namespace: "dup.ui.painter",
            deps: {
                lang: "dup.common.utility.lang",
                style: "dup.common.utility.style",
                browser: "dup.common.utility.browser",
                dom: "dup.common.utility.dom"
            },
            activate: function (t) {
                return this.validate(t) ? (this.expansionActionName = "BaiduCproExpansion" + t.containerId, this.pageIframeId = t.containerId + "_ExpansionLP", t.paramObj.expToken = this.expansionActionName, this.dom.bind(window, "message", s.proxy(this, this.onPostMessageHandler)), !0) : !1
            },
            validate: function (t) {
                var e = parseInt(t.styleOpenApi.expansion || 0, 10);
                return 1 === e && !this.browser.isIOS && "postMessage" in window
            },
            onPostMessageHandler: function (t) {
                if ("object" == typeof t && t.data) {
                    var e = t.data;
                    if ("string" == typeof e && !(e.indexOf(this.expansionActionName) < 0)) {
                        this.expandContainerEl = document.createElement("div");
                        var i = Math.max(this.style.getClientWidth(), this.style.getClientHeight()),
                            n = this.expandContainerEl.style;
                        n.position = "fixed", n.left = "0", n.top = i + "px", n.zIndex = 2147483647, n.background = "#ffffff", n.width = "100%", n.transition = n.WebkitTransition = n.MozTransition = n.OTransition = "top 1s ease-in-out", e = e.slice(this.expansionActionName.length);
                        var o = ['<iframe id="{lpIframeId}" ', 'src="{clickUrl}" width="{iframeWidth}" ', 'height="{iframeHeight}" align="center,center" ', 'marginwidth="0"  marginheight="0" ', "frameborder=\"0\"></iframe>", '<div id="{lpIframeId}_closeBtn" ', 'style="position:absolute;right:0;top:0;', "width:{closeBtnSize}px;", "height:{closeBtnSize}px;", "overflow:hidden;display:block;", "background:url('https://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/xuantingClose.png') ", "no-repeat 0 0; ", "_filter:progid:DXImageTransform", ".Microsoft.AlphaImageLoader(", "enabled=true, sizingMethod=none, ", "src='https://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/xuantingClose.png');", "_background:none;cursor:pointer;", 'background-position:center;background-size:100%,100%;">&nbsp;</div>'].join(""),
                            r = Math.min(this.style.getClientWidth(), this.style.getClientHeight()), a = {
                                lpIframeId: this.pageIframeId,
                                clickUrl: e,
                                iframeWidth: this.style.getClientWidth(),
                                iframeHeight: this.style.getClientHeight(),
                                closeBtnSize: 80 * r / 640
                            };
                        this.expandContainerEl.innerHTML = this.lang.template(o, a), this.expandContainerEl.style.top = "0", document.body.appendChild(this.expandContainerEl), this.dom.bind(window, "resize", s.proxy(this, this.onResizeHandler));
                        var d = this.dom.g(this.pageIframeId + "_closeBtn");
                        this.dom.bind(d, "click", s.proxy(this, this.onCloseBtnClickHandler))
                    }
                }
            },
            onCloseBtnClickHandler: function () {
                this.expandContainerEl.style.top = Math.max(this.style.getClientWidth(), this.style.getClientHeight()) + "px", this.expandContainerEl && this.expandContainerEl.parentNode ? (this.expandContainerEl.parentNode.removeChild(this.expandContainerEl), this.expandContainerEl = null) : this.expandContainerEl.innerHTML = ""
            },
            onResizeHandler: function () {
                var t = this.style.getClientWidth(), e = this.style.getClientHeight(),
                    i = this.dom.g(this.pageIframeId);
                i.style.width = t + "px", i.style.height = e + "px", i.setAttribute("width", t), i.setAttribute("height", e)
            }
        }), s.define({
            name: "hiddenFloatAd",
            namespace: "dup.ui.painter",
            deps: {style: "dup.common.utility.style", dom: "dup.common.utility.dom"},
            TOP: 2,
            BOTTOM: 3,
            render: function (t) {
                if (!this.validate(t)) return !1;
                this.alreadyEnableHidden = !0, this.autoCloseTime = t.response.placement.container.closeTime || 5, t.styleOpenApi.cpro_close_time && (this.autoCloseTime = parseInt(t.styleOpenApi.cpro_close_time, 10) || 5), this.autoCloseTime = this.autoCloseTime >= 3 ? this.autoCloseTime : 3;
                var e = parseInt(t.styleOpenApi.cpro_show_dist, 10) || 5;
                e = e >= 5 ? e : 5, this.percentage = (1 / e).toFixed(2);
                var i = t.response.placement, n = i.container;
                this.dockTo = parseInt(n.location, 10) || this.BOTTOM, this.adWrapEl = document.getElementById(t.containerId), this.adWrapEl.style.display = "block", this.adIframe = this.dom.g(t.containerId + "_frame");
                var o = this.dom.g(t.containerId + "_closebtn"),
                    r = parseInt(this.adWrapEl.style.height || t.height, 10), a = parseInt(o.style.height, 10);
                this.hiddenHeight = -1 * (r + a), this.haveSetIframeUrl = !0, this.countDownTimerId = !1, this.close4ever = !1, this.shrinkAd(), this.transitionDecorator(this.adWrapEl), this.lastScrollTop = this.style.getScrollTop(), this.dom.bind(o, "click", s.proxy(this, this.closeBtnOnClickHandler)), this.dom.bind(window, "scroll", s.proxy(this, this.onScrollHandler))
            },
            validate: function (t) {
                var e = !!t.styleOpenApi.cpro_enable_hidden_float, i = t.response.placement.container,
                    n = i.anchoredType, o = i.floated.trigger;
                return e || "11" == n && o ? this.alreadyEnableHidden ? !1 : (this.alreadyEnableHidden = !0, !0) : !1
            },
            shrinkAd: function () {
                this.dockTo === this.TOP ? this.adWrapEl.style.top = this.hiddenHeight + "px" : this.dockTo === this.BOTTOM && (this.adWrapEl.style.bottom = this.hiddenHeight + "px")
            },
            expandAd: function () {
                this.dockTo === this.TOP ? this.adWrapEl.style.top = 0 : this.adWrapEl.style.bottom = 0, this.adIframe && !this.haveSetIframeUrl && (this.adIframe.src = this.adIframe.getAttribute("_src"), this.haveSetIframeUrl = !0)
            },
            transitionDecorator: function (t) {
                var e = "-webkit-transition: all .3s linear;-moz-transition: all .3s linear;-ms-transition: all .3s linear;-o-transition: all .3s linear;transition: all .3s linear;";
                t.style.cssText = t.style.cssText + e
            },
            startCountDown: function (t, e) {
                var i = t, n = setInterval(function () {
                    i--, 0 >= i && (clearInterval(n), e && e())
                }, 1e3);
                this.countDownTimerId = n
            },
            closeBtnOnClickHandler: function () {
                this.shrinkAd(), this.close4ever = !0
            },
            onScrollHandler: function () {
                var t = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * this.percentage,
                    e = this.style.getScrollTop(), i = e > this.lastScrollTop ? "down" : "top";
                this.totalScrollLength += e - this.lastScrollTop, this.lastScrollTop = e, "top" === i && !this.close4ever && Math.abs(this.totalScrollLength) >= t && !this.countDownTimerId ? (this.expandAd(), this.startCountDown(this.autoCloseTime, s.proxy(this, this.onTimeCountDownHandler))) : "down" === i && (this.totalScrollLength = 0)
            },
            onTimeCountDownHandler: function () {
                this.shrinkAd(), this.countDownTimerId = !1, this.totalScrollLength = 0
            }
        }), s.define({
            name: "pageSearchId",
            namespace: "dup.business",
            deps: {browserParam: "dup.business.parameter.browserParam", config: "dup.common.config"},
            pageSearchId: function (t) {
                "object" == typeof t ? (this.hasher = t.hasher, this.time = t.time, this.url = t.url, this.random = t.random, this.screen_resolution = t.screen_resolution, this.screen_orientation = t.screen_orientation, this.canvas = t.canvas, this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t)
            },
            get: function () {
                var t = [];
                t.push((new Date).getTime()), t.push(Math.random()), this.url && t.push(this.url);
                try {
                    if (t.push(navigator.userAgent), t.push(navigator.language), t.push(window.screen.colorDepth), this.screen_resolution) {
                        var e = this.getScreenResolution();
                        "undefined" != typeof e && t.push(e.join("x"))
                    }
                    t.push((new Date).getTimezoneOffset()), t.push(this.hasSessionStorage()), t.push(this.hasLocalStorage()), t.push(this.hasIndexDb()), document.body ? t.push(typeof document.body.addBehavior) : t.push("undefined"), t.push(typeof window.openDatabase), t.push(navigator.cpuClass), t.push(navigator.platform), t.push(navigator.doNotTrack), this.canvas && this.isCanvasSupported() && t.push(this.getCanvasFingerprint())
                } catch (i) {
                    var n = i && i.stack ? i.stack : i, o = this.config.LOG_URL;
                    o += "?type=fatalError", o += "&key=pageSearchId", o += "&value=navigatorParam", o += "&date=" + (new Date).getTime(), o += "&mes=" + encodeURIComponent(n), (new Image).src = o
                }
                return this.hasher ? this.hasher(t.join("~~~"), 31) : this.x64hash128(t.join("~~~"), 31)
            },
            x64Add: function (t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var i = [0, 0, 0, 0];
                return i[3] += t[3] + e[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += t[2] + e[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += t[1] + e[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += t[0] + e[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
            },
            x64Multiply: function (t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var i = [0, 0, 0, 0];
                return i[3] += t[3] * e[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += t[2] * e[3], i[1] += i[2] >>> 16, i[2] &= 65535, i[2] += t[3] * e[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += t[1] * e[3], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += t[2] * e[2], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += t[3] * e[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
            },
            x64Rotl: function (t, e) {
                return e %= 64, 32 === e ? [t[1], t[0]] : 32 > e ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
            },
            x64LeftShift: function (t, e) {
                return e %= 64, 0 === e ? t : 32 > e ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
            },
            x64Xor: function (t, e) {
                return [t[0] ^ e[0], t[1] ^ e[1]]
            },
            x64Fmix: function (t) {
                return t = this.x64Xor(t, [0, t[0] >>> 1]), t = this.x64Multiply(t, [4283543511, 3981806797]), t = this.x64Xor(t, [0, t[0] >>> 1]), t = this.x64Multiply(t, [3301882366, 444984403]), t = this.x64Xor(t, [0, t[0] >>> 1])
            },
            x64hash128: function (t, e) {
                t = t || "", e = e || 0;
                for (var i = t.length % 16, n = t.length - i, o = [0, e], s = [0, e], r = [0, 0], a = [0, 0], d = [2277735313, 289559509], l = [1291169091, 658871167], c = 0; n > c; c += 16) r = [255 & t.charCodeAt(c + 4) | (255 & t.charCodeAt(c + 5)) << 8 | (255 & t.charCodeAt(c + 6)) << 16 | (255 & t.charCodeAt(c + 7)) << 24, 255 & t.charCodeAt(c) | (255 & t.charCodeAt(c + 1)) << 8 | (255 & t.charCodeAt(c + 2)) << 16 | (255 & t.charCodeAt(c + 3)) << 24], a = [255 & t.charCodeAt(c + 12) | (255 & t.charCodeAt(c + 13)) << 8 | (255 & t.charCodeAt(c + 14)) << 16 | (255 & t.charCodeAt(c + 15)) << 24, 255 & t.charCodeAt(c + 8) | (255 & t.charCodeAt(c + 9)) << 8 | (255 & t.charCodeAt(c + 10)) << 16 | (255 & t.charCodeAt(c + 11)) << 24], r = this.x64Multiply(r, d), r = this.x64Rotl(r, 31), r = this.x64Multiply(r, l), o = this.x64Xor(o, r), o = this.x64Rotl(o, 27), o = this.x64Add(o, s), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 1390208809]), a = this.x64Multiply(a, l), a = this.x64Rotl(a, 33), a = this.x64Multiply(a, d), s = this.x64Xor(s, a), s = this.x64Rotl(s, 31), s = this.x64Add(s, o), s = this.x64Add(this.x64Multiply(s, [0, 5]), [0, 944331445]);
                switch (r = [0, 0], a = [0, 0], i) {
                    case 15:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(c + 14)], 48));
                    case 14:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(c + 13)], 40));
                    case 13:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(c + 12)], 32));
                    case 12:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(c + 11)], 24));
                    case 11:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(c + 10)], 16));
                    case 10:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(c + 9)], 8));
                    case 9:
                        a = this.x64Xor(a, [0, t.charCodeAt(c + 8)]), a = this.x64Multiply(a, l), a = this.x64Rotl(a, 33), a = this.x64Multiply(a, d), s = this.x64Xor(s, a);
                    case 8:
                        r = this.x64Xor(r, this.x64LeftShift([0, t.charCodeAt(c + 7)], 56));
                    case 7:
                        r = this.x64Xor(r, this.x64LeftShift([0, t.charCodeAt(c + 6)], 48));
                    case 6:
                        r = this.x64Xor(r, this.x64LeftShift([0, t.charCodeAt(c + 5)], 40));
                    case 5:
                        r = this.x64Xor(r, this.x64LeftShift([0, t.charCodeAt(c + 4)], 32));
                    case 4:
                        r = this.x64Xor(r, this.x64LeftShift([0, t.charCodeAt(c + 3)], 24));
                    case 3:
                        r = this.x64Xor(r, this.x64LeftShift([0, t.charCodeAt(c + 2)], 16));
                    case 2:
                        r = this.x64Xor(r, this.x64LeftShift([0, t.charCodeAt(c + 1)], 8));
                    case 1:
                        r = this.x64Xor(r, [0, t.charCodeAt(c)]), r = this.x64Multiply(r, d), r = this.x64Rotl(r, 31), r = this.x64Multiply(r, l), o = this.x64Xor(o, r)
                }
                return o = this.x64Xor(o, [0, t.length]), s = this.x64Xor(s, [0, t.length]), o = this.x64Add(o, s), s = this.x64Add(s, o), o = this.x64Fmix(o), s = this.x64Fmix(s), o = this.x64Add(o, s), s = this.x64Add(s, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
            },
            hasLocalStorage: function () {
                try {
                    return !!window.localStorage
                } catch (t) {
                    return !0
                }
            },
            hasSessionStorage: function () {
                try {
                    return !!window.sessionStorage
                } catch (t) {
                    return !0
                }
            },
            hasIndexDb: function () {
                try {
                    return !!window.indexedDB
                } catch (t) {
                    return !0
                }
            },
            isCanvasSupported: function () {
                var t = document.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            },
            getScreenResolution: function () {
                var t;
                return t = this.screen_orientation ? window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height] : [window.screen.height, window.screen.width]
            },
            getCanvasFingerprint: function () {
                var t = document.createElement("canvas"), e = t.getContext("2d"), i = "http://valve.github.io";
                return e.textBaseline = "top", e.font = '14px "Arial"', e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(125, 1, 62, 20), e.fillStyle = "#069", e.fillText(i, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.7)", e.fillText(i, 4, 17), t.toDataURL()
            },
            getPageSearchId: function () {
                try {
                    for (var t = "", e = this.browserParam.paramsList, i = 0; i < e.length; i++) if ("ltu" === e[i].key) {
                        t = s.proxy(this.browserParam, e[i].value)();
                        break
                    }
                    return this.pageSearchId({url: t}), this.get()
                } catch (n) {
                    var o = n && n.stack ? n.stack : n, r = this.config.LOG_URL;
                    r += "?type=fatalError", r += "&key=pageSearchId", r += "&date=" + (new Date).getTime(), r += "&mes=" + encodeURIComponent(o), (new Image).src = r
                }
            }
        }), s.define({
            name: "slotParam",
            namespace: "dup.business.parameter",
            deps: {dom: "dup.common.utility.dom", style: "dup.common.utility.style", config: "dup.common.config"},
            $slotParam: function () {
                this.win = window
            },
            paramsList: [{
                key: "di", value: function () {
                    return this.slotInfo.slotId
                }
            }, {
                key: "dri", value: function () {
                    return this.slotInfo.index
                }
            }, {
                key: "dis", value: function () {
                    var t = 0;
                    this.dom.isInIframe(this.win) && (t += 1), this.dom.isInCrossDomainIframe(this.win, this.win.top) && (t += 2);
                    var e = this.style.getClientWidth(), i = this.style.getClientHeight();
                    (40 > e || 10 > i) && (t += 4);
                    try {
                        if (t & !0) {
                            var n = this.dom.getNotCrossDomainTopWindow();
                            n.document.referrer && n.top === n.parent && (t += 8)
                        }
                    } catch (o) {
                        var s = o && o.stack ? o.stack : o, r = this.config.LOG_URL;
                        r += "?type=fatalError", r += "&key=disParam", r += "&date=" + (new Date).getTime(), r += "&mes=" + encodeURIComponent(s), (new Image).src = r
                    }
                    return t
                }
            }, {
                key: "dai", value: function () {
                    return this.slotInfo.count
                }
            }, {
                key: "ps", value: function () {
                    var t = "0", e = this.dom.g(this.slotInfo.containerId), i = this.style.getPosition(e);
                    return i && void 0 !== i.top && void 0 !== i.left && (t = i.top + "x" + i.left), t
                }
            }, {
                key: "coa", encode: !0, value: function () {
                    var t = [], e = this.slotInfo.styleOpenApi;
                    "-1" === this.slotInfo.pcwd && (e.cpro_ftpc = "true");
                    for (var i in e) if (i && "undefined" != typeof e[i] && e.hasOwnProperty(i)) {
                        var n = i;
                        if ("width" === i || "height" === i || "sizeType" === i || "apType" === i || "floatingState" === i) continue;
                        "cpro_w" === i && (n = "rsi0"), "cpro_h" === i && (n = "rsi1"), t.push(n + "=" + encodeURIComponent(e[i]))
                    }
                    return t.join("&")
                }
            }, {
                key: "enu", value: function () {
                    return "encoding"
                }
            }, {
                key: "cw", value: function () {
                    var t = this.slotInfo.styleOpenApi.cpro_ftpc || "true" === this.slotInfo.styleOpenApi.cpro_ftpc || "-1" === this.slotInfo.pcwd,
                        e = this.dom.g(this.slotInfo.containerId);
                    return t && e && e.parentElement.clientWidth ? e.parentElement.clientWidth || 0 : void 0
                }
            }],
            setSlotInfo: function (t) {
                this.slotInfo = t
            }
        }), s.define({
            name: "preview",
            namespace: "dup.business",
            deps: {config: "dup.common.config", url: "dup.common.utility.url", data: "dup.common.utility.data"},
            CLB_PREFIX: "baidu_clb_preview_",
            DUP_PREFIX: "baidu_dup_preview_",
            getValue: function (t) {
                var e, i = this.url.getTopWindowUrl();
                return e = this.url.getQueryValue(i, this.CLB_PREFIX + t), e || (e = this.url.getQueryValue(i, this.DUP_PREFIX + t)), e
            },
            getInfo: function () {
                var t, e = this.getValue("sid"), i = this.getValue("mid"), n = this.getValue("vc"),
                    o = +this.getValue("ts"), s = +new Date;
                return 3e4 >= s - o && (t = {sid: e, mid: i, vc: n}), this.getInfo = function () {
                    return t
                }, t
            },
            isUnionPreview: function (t) {
                var e = !1;
                return t ? /cpro_template=/gi.test(t) && (this.data.putInfo("#unionPreviewSwitch", !0), e = !0) : e = !!this.data.getInfo("#unionPreviewSwitch"), e
            },
            setUnionPreviewData: function (t) {
                this.data.putInfo("#unionPreviewData", t)
            },
            getUnionPreviewData: function () {
                var t = this.data.getInfo("#unionPreviewData");
                return t ? "prev=" + encodeURIComponent(t) + "&pt=union" : ""
            },
            clearUnionPreviewData: function () {
                this.data.removeInfo("#unionPreviewSwitch"), this.data.removeInfo("#unionPreviewData")
            },
            getSearchParams: function (t) {
                var e = {}, i = this.getInfo();
                return i && t == i.sid && (e.mid = i.mid, e.sid = i.vc, this.config.IS_PREVIEW = !0), e
            }
        }), s.define({
            name: "log",
            namespace: "dup.common.utility",
            deps: {
                config: "dup.common.config",
                lang: "dup.common.utility.lang",
                event: "dup.common.utility.event",
                storage: "dup.common.utility.storage"
            },
            storageKey: "BAIDU_DUP_log_storage",
            loadImage: function (t, e) {
                var i = new Image, n = "BAIDU_DUP_log_" + Math.floor(2147483648 * Math.random()).toString(36);
                window[n] = i, i.onload = i.onerror = i.onabort = function () {
                    i.onload = i.onerror = i.onabort = null, window[n] = null, i = null, e && e(this.storageKey, t, !0)
                }, i.src = t
            },
            resendLog: function () {
                var t = this.storage.getItem(this.storageKey);
                if (t) {
                    t = t.split("|");
                    for (var e = 0, i = t.length; i > e; e++) this.loadImage(decodeURIComponent(t[e]), this.storage.spliceItem)
                }
            },
            sendLogRequest: function (t) {
                var e = new Image, i = +new Date, n = "baidu_dan_log_" + i;
                window[n] = e, e.onload = e.onerror = e.onabort = function () {
                    try {
                        delete window[n]
                    } catch (t) {
                        window[n] = void 0
                    }
                    e = null
                }, t += t.indexOf("?") > -1 ? "&" : "?", t += "stamp=" + Math.random(), e.src = t
            },
            sendLog: function (t) {
                t = "object" === this.lang.getType(t) ? t : {};
                var e = t.url || this.config.LOG_URL, i = t.data || {}, n = t.option || "now",
                    o = this.lang.serialize(i);
                switch (e += (e.indexOf("?") >= 0 ? "&" : "?") + o + (o ? "&" : "") + "rdm=" + +new Date, n) {
                    case"now":
                        this.loadImage(e);
                        break;
                    case"block":
                        break;
                    case"unload":
                    default:
                        this.storage.addItem(this.storageKey, e, !0), this.event.bind(window, "unload", function () {
                            this.loadImage(e, this.storage.spliceItem)
                        })
                }
            },
            sendEclickLog: function (t, e, i) {
                if (!t || !e) return "";
                var n = "//eclick.baidu.com/" + t + "?type=" + e;
                if (i) for (var o in i) i.hasOwnProperty(o) && (n += "&" + o + "=" + i[o]);
                this.sendLog({url: n, option: "now"})
            }
        }), s.define({
            name: "monitor",
            namespace: "dup.business",
            deps: {config: "dup.common.config", log: "dup.common.utility.log"},
            expLog: function (t) {
                var e, i = t.id ? t.id : "", n = t.async ? t.async : "", o = t.type ? t.type : "ssplog",
                    s = t.pos ? t.pos : "", r = t.status ? t.status : "", a = t.mes ? encodeURIComponent(t.mes) : "",
                    d = t.exps ? t.exps : "";
                e = "mip" === o ? this.config.SBD_LOG : this.config.LOG_URL, e += ["?type=" + o, "id=" + i, "pos=" + s, "status=" + r, "async=" + n, "mes=" + a, "exps=" + d, "from=ssp"].join("&"), this.log.sendLogRequest(e)
            },
            sendLog: function (t) {
                if (t.response) {
                    var e = t.response.pdb_deliv.deliv_des, i = e._html, n = i && i.monitorUrl;
                    if (n) {
                        var o = new Image, s = "log" + +new Date;
                        window[s] = o, "http" == n.substr(0, 4).toLowerCase() ? ("http://" == n.substr(0, 7).toLowerCase() && (n = n.replace("http://", "//")), "https://" == n.substr(0, 8).toLowerCase() && (n = n.replace("https://", "//"))) : n = "//" + n;
                        var r = function () {
                            o.onload = o.onerror = o.onabort = null;
                            try {
                                delete window[s]
                            } catch (t) {
                                window[s] = void 0
                            }
                        };
                        o.onload = o.onerror = o.onabort = r, o.src = n
                    }
                }
            }
        }), s.define({
            name: "painterSelector",
            namespace: "dup.business",
            deps: {asserter: "dup.ui.assertion.asserter"},
            getPainter: function (t) {
                if (t.response) {
                    var e = this.asserter.assert(t);
                    if (e) return "dup.ui.painter." + e;
                    for (var i = t.response, n = ["bottomSearchBar", "inlayFix", "baiduRec", "dynamicFloat", "insideText", "mobile.inlayFix", "mobile.float", "mobile.insideText"], o = 0, r = n.length; r > o; o++) {
                        var a = s.using("dup.ui.assertion." + n[o]);
                        if (a && a.assert(i)) return "dup.ui.painter." + n[o]
                    }
                    e || (t.errors = t.errors || [], t.errors.push("painterName is empty"))
                }
            }
        }), s.define({
            name: "businessParam",
            namespace: "dup.business.parameter",
            deps: {
                config: "dup.common.config",
                preview: "dup.business.preview",
                dom: "dup.common.utility.dom",
                origentation: "dup.business.origentation"
            },
            paramsList: [{
                key: "dcb", value: function () {
                    return this.config.LOADER_DEFINE_NAME
                }
            }, {
                key: "dtm", value: function () {
                    return this.config.SSP_JSONP
                }
            }, {
                key: "dvi", value: function () {
                    return "0.0"
                }
            }, {
                key: "dci", value: function () {
                    return "-1"
                }
            }, {
                key: "dds", value: function () {
                    return ""
                }
            }, {
                key: "dpt", value: function () {
                    var t = "none";
                    return this.preview.isUnionPreview() && (t = "union"), t
                }
            }, {
                key: "tsr", value: function () {
                    var t = 0, e = +new Date;
                    return this.config.startTime && (t = e - this.config.startTime), t
                }
            }, {
                key: "tpr", value: function () {
                    var e, i = 24e4, n = (new Date).getTime();
                    e = t.DUP_4_SF ? t : this.dom.isInIframe(window) && !this.dom.isInCrossDomainIframe(window) ? window.top : window;
                    var o = e.BAIDU_DUP2_pageFirstRequestTime;
                    return o ? n - o >= i && (o = e.BAIDU_DUP2_pageFirstRequestTime = n) : o = e.BAIDU_DUP2_pageFirstRequestTime = n, o || ""
                }
            }, {
                key: "cop", encode: !0, value: function () {
                    return this.origentation.getOrientationQuery()
                }
            }, {
                key: "ti", encode: !0, value: function () {
                    return this.dom.getDocumentTitle()
                }
            }, {
                key: "ari", value: function () {
                    return 2
                }
            }]
        }), s.define({
            name: "param",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                slotParam: "dup.business.parameter.slotParam",
                businessParam: "dup.business.parameter.businessParam",
                browserParam: "dup.business.parameter.browserParam",
                systemParam: "dup.business.parameter.systemParam",
                additionalParam: "dup.business.parameter.additionalParam",
                browser: "dup.common.utility.browser",
                style: "dup.common.utility.style",
                dom: "dup.common.utility.dom",
                preview: "dup.business.preview",
                requestCache: "dup.business.requestCache"
            },
            snap: function (t) {
                for (var e = [], i = t.paramsList, n = 0, o = i.length; o > n; n++) {
                    var s = i[n], r = s.key, a = s.encode, d = s.value, l = s.limit;
                    try {
                        d = "function" == typeof d ? d.apply(t) : d, d = a ? encodeURIComponent(d) : d, d = l ? d.substr(0, l) : d, e.push({
                            key: r,
                            value: d
                        })
                    } catch (c) {
                        var h = this.config.LOG_URL;
                        h += "?type=adcodex_error", h += "&info=" + encodeURIComponent(c.message), h += "&stack=" + encodeURIComponent(c.stack || ""), h += "&key=" + encodeURIComponent(r), h += "&t=" + (new Date).getTime(), (new Image).src = h
                    }
                }
                return e
            },
            processExtendsParam: function (t) {
                var e = t.response;
                if (e) {
                    var i = e.placement.container;
                    if (5 !== i.sizeType && 0 !== t.id.indexOf("u")) {
                        var n = e.pdb_deliv, o = e.rtb_deliv, s = e.order_deliv;
                        0 === parseInt(n.deliv_id, 10) && (n.deliv_id = 0), 0 === parseInt(n.demand_id, 10) && (n.demand_id = 0), 0 === parseInt(o.deliv_id, 10) && (o.deliv_id = 0), 0 === parseInt(o.demand_id, 10) && (o.demand_id = 0), 0 === parseInt(s.deliv_id, 10) && (s.deliv_id = 0), 0 === parseInt(s.demand_id, 10) && (s.demand_id = 0);
                        var r = e["extends"] || {};
                        if (r && r.hasOwnProperty("sspw") && r.hasOwnProperty("ssph")) {
                            var a = parseInt(r.sspw || 0, 10), d = parseInt(r.ssph || 0, 10),
                                l = parseInt(r.cbsz || 0, 10);
                            if (a && d && (i.width = a, i.height = d), l > 0 && (i.sizeType = l), 1 === l) t.width = a, t.height = d; else if (2 === l) {
                                var c = this.translateScaleToPixelSize(a, d);
                                t.width = c.width, t.height = c.height
                            }
                        }
                        var h = t.width || i.width, u = t.height || i.height, p = e.placement.complement_type;
                        if (0 === p) {
                            var m = this.dom.g(t.containerId);
                            m.style.width = h + "px", m.style.height = u + "px", m.style.display = "inline-block"
                        }
                    }
                }
            },
            translateScaleToPixelSize: function (t, e, i) {
                var n = i || {};
                return t = Math.abs(t), e = Math.abs(e), n.width || (n.width = Math.max(320, Math.min(window.innerWidth, window.innerHeight)), isNaN(n.width) && (n.width = Math.min(this.style.getClientWidth(), this.style.getClientHeight()))), n.height || (n.height = Math.ceil(n.width / t * e)), {
                    width: n.width,
                    height: n.height
                }
            },
            getParamObj: function (t) {
                var e = [];
                this.slotParam.setSlotInfo(t), this.browserParam.setSlotInfo(t), e = e.concat(this.snap(this.slotParam)), e = e.concat(this.snap(this.businessParam)), e = e.concat(this.snap(this.browserParam)), e = e.concat(this.snap(this.additionalParam)), e = e.concat(this.snap(this.systemParam));
                for (var i = {}, n = 0, o = e.length; o > n; n++) {
                    var s = e[n];
                    i[s.key] = s.value
                }
                if (this.browser.baiduboxapp) {
                    var r = window || top.window;
                    r.articleTitle && (i.ti = r.articleTitle), r.MP && r.MP.globalConf && (i.utdi = encodeURIComponent(window.MP.globalConf.cuid) || "", i.atdi = encodeURIComponent(window.MP.globalConf.nid) || "")
                }
                var a = this.preview.getSearchParams(t.slotId);
                return i.mid = a.mid, i.sid = a.sid, i
            },
            getParamString: function (t) {
                var e = [];
                for (var i in t) if (i && (t[i] || 0 === t[i]) && t.hasOwnProperty(i)) {
                    var n = t[i];
                    e.push(i + "=" + n)
                }
                var o = window.___baidu_union_.pageSearchId || "";
                if (e.unshift("psi=" + o), window && window.location && window.location.ancestorOrigins && window.location.ancestorOrigins.length) {
                    var s = window.location.ancestorOrigins;
                    e.push("lto=" + encodeURIComponent(s[s.length - 1])), e.push("ltl=" + s.length)
                }
                return e.join("&")
            },
            getPmpRequestUrl: function (t) {
                var e, i = {}, n = [], o = t.paramObj;
                for (var s in o) s && o.hasOwnProperty(s) && (i[s] = o[s]);
                var r = t.timestampWatcher, a = r.t1, d = r.t2, l = r.t3, c = t.response;
                if (c) {
                    c.placement.container;
                    i.qn = c.queryid, t.paramObj.qn = c.queryid, n.push("conwid=" + t.width), n.push("conhei=" + t.height);
                    var h = c.pdb_deliv;
                    h.deliv_id && "0" !== h.deliv_id && n.push("pdbid=" + h.deliv_id), c.media_protect && "0" !== c.media_protect && n.push("mpdi=" + c.media_protect);
                    var u = c.order_deliv;
                    u.deliv_id && "0" !== u.deliv_id && n.push("orderid=" + u.deliv_id), u.demand_id && "0" !== u.demand_id && n.push("odid=" + u.demand_id);
                    var p = c.rtb_deliv;
                    p.deliv_id && "0" !== p.deliv_id && n.push("rtbid=" + p.deliv_id), p.demand_id && "0" !== p.demand_id && n.push("rdid=" + p.demand_id);
                    var m = c.placement.complement_type;
                    if (t.isNeedCacheRequest || 4 === m || 7 === m) {
                        var f = i.qn;
                        i.dpv = f, t.paramObj.dpv = f, this.requestCache.add(f, t)
                    }
                    0 === t.id.indexOf("u") ? n.push("dc=3") : n.push("dc=2"), r && a > 0 && (i.tt = a + "." + (d - a) + "." + (l - a) + "." + (+new Date - a)), i.exps && (n.push("exps=" + i.exps), i.exps = "")
                }
                var g = n.join("&");
                return e = t.posUrl && (this.browser.antBrowser || t.proxy) ? t.posUrl + g + "&" + this.getParamString(i) : this.config.POS_URL + g + "&" + this.getParamString(i)
            },
            getOneParam: function (t, e) {
                for (var i = this[t] && this[t].paramsList, n = 0; n < i.length; n++) if (i[n].key === e) return s.proxy(this[t], i[n].value)()
            }
        }), s.define({
            name: "slot",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                param: "dup.business.param",
                dom: "dup.common.utility.dom",
                log: "dup.common.utility.log",
                monitor: "dup.business.monitor",
                lang: "dup.common.utility.lang",
                style: "dup.common.utility.style",
                browser: "dup.common.utility.browser",
                storage: "dup.common.utility.storage",
                origentation: "dup.business.origentation",
                expBranch: "dup.business.expBranch",
                fingerPrint: "dup.business.fingerPrint"
            },
            slotIdCountMap: {},
            targetLtuReg: /^http(s)?:\/\/m\.huanqiu\.com\/r\//,
            $slot: function () {
                this.slotsMap = this.slotsMap || {}, this.win = window, this.counter = t.counter, this.counter = this.counter || {}, this.counter.slotTotalCount = this.counter.slotTotalCount || 1, this.counter.slotCountIndex = this.counter.slotCountIndex || {}
            },
            getSlotInfo: function (t) {
                return this.slotsMap[t]
            },
            getSlotInfoByRawId: function (t) {
                for (var e in this.slotsMap) if (this.slotsMap.hasOwnProperty(e) && e.indexOf(t) > -1) return this.slotsMap[e];
                return {}
            },
            createSlot: function (t) {
                var e = "" + t.slotId;
                this.counter.slotCountIndex[e] = this.counter.slotCountIndex[e] || 0;
                var i = {};
                return i.index = this.counter.slotCountIndex[e], i.count = 0 === e.indexOf("u") ? this.counter.slotTotalCount : 0, i.id = e + "_" + i.index, i.containerId = this.config.DUP_PREFIX + "_wrapper_" + e + "_" + i.index, i.slotId = t.slotId, i.productLine = t.productLine, i.errors = [], this.counter.slotCountIndex[e] = this.counter.slotCountIndex[e] + 1, e !== this.config.AUTOID && (this.counter.slotTotalCount = this.counter.slotTotalCount + 1), i.isAsync = t.isAsync, this.setStatus(i.id, this.config.STATUS_CREATE), r ? i.timestampWatcher = {t1: r} : i.timestampWatcher = {t1: 0}, t.coa && "object" == typeof t.coa ? i.styleOpenApi = t.coa : window.cproStyleApi ? i.styleOpenApi = window.cproStyleApi[e] || {} : i.styleOpenApi = {}, 0 === e.indexOf("u") && (i.productLine = "union", i.width = i.styleOpenApi.cpro_w || i.styleOpenApi.rsi0 || 0, i.height = i.styleOpenApi.cpro_h || i.styleOpenApi.rsi1 || 0), i
            },
            cloneSlot: function (t) {
                var e;
                return e = window.JSON && window.JSON.parse ? JSON.parse(JSON.stringify(t)) : this.lang.clone(t), e.index = this.counter.slotCountIndex[e.slotId], this.counter.slotCountIndex[e.slotId] = this.counter.slotCountIndex[e.slotId] + 1, e.id = e.slotId + "_" + e.index, e
            },
            processSlot: function (t) {
                if (t.isPdbAd = !1, t.isNeedCacheRequest = !1, t.response) {
                    var e = t.response.rtb_deliv, i = t.response.order_deliv, n = t.response.pdb_deliv,
                        o = parseInt(e.deliv_id, 10), s = parseInt(e.demand_id, 10), r = parseInt(i.deliv_id, 10),
                        a = parseInt(i.demand_id, 10), d = parseInt(n.deliv_id, 10), l = t.response.placement,
                        c = l && 7 === l.complement_type;
                    t.isPdbAd = !(o || s || r || a), t.isNeedCacheRequest = 0 !== o && c || 0 !== r || 0 !== o && 0 !== d
                }
            },
            addSlot: function (t) {
                this.slotsMap[t.id] = t
            },
            clearStatus: function (t, e) {
                t.status = t.status ^ e
            },
            checkStatus: function (t, e) {
                return (t.status & e) > 0
            },
            setStatus: function (t, e) {
                var i = this.getSlotInfo(t);
                i && (i.status |= e), (e & this.config.STATUS_FINISH) > 0 && this.adSlotFinish(t)
            },
            addErrorInfo: function (t, e) {
                t.errors = t.errors || [], t.errors.push(e)
            },
            adSlotFinish: function (t) {
                var e = {}, i = !1, n = this.getSlotInfo(t);
                if (n.response) {
                    var o = n.response ? n.response.pdb_deliv : {};
                    for (var s in this.origentation.watchingSlotsMap) if (s && this.origentation.watchingSlotsMap.hasOwnProperty(s) && this.origentation.watchingSlotsMap[s] && 0 === ("" + t).indexOf("" + s) && n.response) {
                        var r = o.deliv_des, a = r.width || 0, d = r.height || 0;
                        0 === a || 0 === d ? e[t] = !1 : e[t] = !0, i = !0
                    }
                    i && this.origentation.slotFinishedCallback(e)
                }
            },
            process: function () {
                var t = this.slotsMap;
                for (var e in t) if (e && t[e] && t.hasOwnProperty(e)) {
                    var i = t[e];
                    if (i.status >= this.config.STATUS_REQUEST) continue;
                    this.createContainer(i), this.requestSlotInfo(i)
                }
            },
            requestSlotInfo: function (t) {
                !this.config.FIRST_ONCESEACH && window.postMessage && (this.config.FIRST_ONCESEACH = !0, this.dom.bind(window, "message", s.proxy(this, this.onMessageHandler)));
                var e = !1;
                t.paramObj = this.param.getParamObj(t);
                var i = t.exps || this.config.EXP_ID;
                t.paramObj.exps = this.expBranch.mergeExps(i, window.___baidu_union_.expId);
                var n, o;
                t.posUrl && (this.browser.antBrowser || t.proxy) ? (t.paramObj.ctxant = "1", n = this.param.getParamString(t.paramObj), o = t.posUrl + n) : (n = this.param.getParamString(t.paramObj), o = this.config.POS_URL + n), t.paramObj.dtm = this.config.HTML_POST, t.timestampWatcher.t2 = +new Date;
                var r = !1;
                "union" === t.productLine && (r = !0), t.isAsync === !0 && (r = !0), e = this.reqLocalInfo(t), e ? (this.setStatus(t.id, this.config.STATUS_REQUEST), window[this.config.LOADER_DEFINE_NAME](e)) : (this.sendJsonpRequest(o, r), this.setStatus(t.id, this.config.STATUS_REQUEST))
            },
            onMessageHandler: function (t) {
                var e = t.data;
                if (e && e.tuid) {
                    var i = t.origin || t.originalEvent.origin, n = i && i.split("//")[1], o = t.source;
                    if (e.placement && e.placement.update && e.queryid) this.updateInfo(e), e.tuid.indexOf("u") > -1 && e.noadx && parseInt(e.noadx, 10) && 3 !== parseInt(e.noadx, 10) && this.unionAdIsAvailable(e), e.placement.basic && 2 === e.placement.basic.flowType && this.fingerPrint.loadAntiBotFile(e.queryid); else if (1 === e.type && n && o && o.parent === window) {
                        var s = this.getSlotInfoByRawId(e.tuid), r = s && s.response,
                            a = r.placement && r.placement.basic && r.placement.basic.publisherDomain && r.placement.basic.publisherDomain.pos;
                        n !== this.config.POS_DOMAIN && n !== a || this.closeAd(s)
                    }
                }
            },
            updateInfo: function (t) {
                var e = {}, i = t.placement.update;
                this.storageSlotInfo = this.storage.getItem(t.tuid), this.storageSlotInfo && (e = this.lang.jsonToObj(this.storageSlotInfo), this.storage.isAvailable && window.JSON && window.JSON.stringify && e && e.placement && e.placement.update && e.placement.update !== i && (t.adExpire = (new Date).getTime(), this.storage.setItem(t.tuid, JSON.stringify(t))))
            },
            reqLocalInfo: function (t) {
                try {
                    if (this.browser.ie && this.browser.ie < 9) return !1;
                    var e = {};
                    return !this.storage.isAvailable || t.isAutoAd ? !1 : (this.storageSlotInfo = this.storage.getItem(t.id), this.storageSlotInfo ? e = this.lang.jsonToObj(this.storageSlotInfo) : !1)
                } catch (i) {
                    var n = encodeURIComponent(i),
                        o = {type: "elog", pos: "localAdInfo", id: t.id, mes: n, exps: this.config.EXP_ID};
                    this.monitor.expLog(o)
                }
            },
            adInfoStorage: function (t) {
                try {
                    var e = t.response || {}, i = !1;
                    e && e.pdb_deliv && e.pdb_deliv.deliv_des && e.pdb_deliv.deliv_des._html && (i = !0);
                    var n = !1;
                    e && e.tuid && (n = 0 === e.tuid.indexOf("u"));
                    var o = t.id;
                    !i && n && this.storage.isAvailable && window.JSON && window.JSON.stringify && o && !this.storageSlotInfo && (e.adExpire = (new Date).getTime(), this.storage.setItem(o, JSON.stringify(e)))
                } catch (s) {
                }
            },
            createContainer: function (t) {
                if (!(t.status > this.config.STATUS_CREATE)) {
                    var e = this.dom.g(t.containerId);
                    if (e) return void this.setStatus(t.id, this.config.STATUS_CREATE);
                    t.isAsync ? "union" === t.productLine && (t.containerId = "cpro_" + t.slotId) : (document.write('<div id="' + t.containerId + '"></div>'), this.dom.g(t.containerId) || this.createBackupWrapper(t)), this.setStatus(t.id, this.config.STATUS_CREATE)
                }
            },
            createBackupWrapper: function (t) {
                try {
                    var e = document.getElementsByTagName("script"), i = e[e.length - 1];
                    if (i) {
                        var n = i.parentNode;
                        if (n) {
                            var o = document.createElement("div");
                            return o.id = t.containerId, n.insertBefore(o, i), !0
                        }
                    }
                } catch (s) {
                }
                return !1
            },
            sendJsonpRequest: function (t, e) {
                if (e) {
                    var i = document.createElement("script");
                    if (!i) return;
                    i.type = "text/javascript", i.async = !0, i.src = t;
                    var n = document.getElementsByTagName("script")[0];
                    n && n.parentNode ? n.parentNode.insertBefore(i, n) : document.write('<script charset="utf-8" src="' + t + '"></script>')
                } else document.write('<script charset="utf-8" src="' + t + '"></script>')
            },
            adInfoIsAvailable: function (t) {
                var e = t.response;
                if (!e) return !0;
                var i = e.pdb_deliv, n = e.rtb_deliv, o = e.order_deliv, s = e.placement.complement_type;
                return !(!this.config.IS_PREVIEW && 0 === i.deliv_id && 0 === n.deliv_id && 0 === o.deliv_id && 7 == s)
            },
            unionAdIsAvailable: function (t) {
                var e = this.getSlotInfoByRawId(t.tuid),
                    i = e && e.response && e.response.placement && e.response.placement.complement_type;
                i && 7 === i && this.closeAd(e)
            },
            closeAd: function (t) {
                var e = this.dom.g(t.containerId);
                if (e) {
                    e.parentNode.removeChild(e);
                    var i = s.using("dup.business.viewWatch");
                    i.unregisetViewWatch(t)
                }
            },
            getCurViewportWidth: function (t) {
                var e = this.isUnionPreview ? t : Math.max(320, this.win.innerWidth);
                return isNaN && isNaN(e) && (e = this.style.getClientWidth()), e
            },
            getParentWidth: function (t) {
                var e = parseInt(this.style.getStyle(t, "paddingLeft"), 10) || 0,
                    i = parseInt(this.style.getStyle(t, "paddingRight"), 10) || 0, n = t.clientWidth - e - i;
                return n = n > 0 ? n : window.screen.width
            },
            getParentHeight: function (t) {
                var e = parseInt(this.style.getStyle(t, "paddingTop"), 10) || 0,
                    i = parseInt(this.style.getStyle(t, "paddingBottom"), 10) || 0, n = t.clientHeight - e - i;
                return n = n > 0 ? n : 0
            },
            processSlotInfo: function (t) {
                var e = this.getSizeInfo(t), i = t.response.placement, n = i.basic;
                return e.cname = n.cname, e
            },
            getSizeInfo: function (t) {
                var e = t.response.placement, i = this.dom.g(t.containerId), n = e.container, o = t.styleOpenApi,
                    s = n.width, r = n.height, a = o.cpro_w || o.rsi0 || 0, d = o.cpro_h || o.rsi1 || 0, l = n.sizeType;
                if (o.scale) {
                    l = 2;
                    var c = o.scale.split(".") || [];
                    s = c[0], r = c[1]
                }
                switch ((a || d) && (l = 1, s = a || this.getCurViewportWidth(s), r = d || r), ("-1" === t.pcwd || t.ftpc || t.styleOpenApi.cpro_ftpc) && (l = "-1" === t.pcwd && "-1" === t.pchd ? 8 : 5), o.sizeType && (l = o.sizeType && parseInt(o.sizeType, 10) || l, s = o.width && parseInt(o.width, 10) || s, r = o.height && parseInt(o.height, 10) || r), 2 !== o.apType && 3 !== o.apType || (n.location = o.apType), l) {
                    case 1:
                        break;
                    case 2:
                        var h = this.param.translateScaleToPixelSize(t.pcwd || s, t.pchd || r);
                        s = h.width, r = h.height;
                        break;
                    case 3:
                        s = this.getCurViewportWidth(s);
                        break;
                    case 5:
                        var u = r / s;
                        s = this.getParentWidth(i.parentElement), r = Math.ceil(s * u);
                        break;
                    case 6:
                        s = this.getParentWidth(i.parentElement);
                        break;
                    case 7:
                        r = this.getParentHeight(i.parentElement);
                        break;
                    case 8:
                        s = this.getParentWidth(i.parentElement), r = this.getParentHeight(i.parentElement)
                }
                return t.width = s, t.height = r, {width: s, height: r, sizeType: l}
            }
        }), s.define({
            name: "detect",
            namespace: "dup.business",
            deps: {config: "dup.common.config", log: "dup.common.utility.log", slot: "dup.business.slot"},
            $detect: function () {
            },
            sendLog: function (t) {
                t.url = "", t.host = window.location.hostname, t.from = "SSP", this.config.EXP_ID && (t.exp = this.config.EXP_ID), this.log.sendLog({
                    data: t,
                    option: "now"
                })
            },
            checkFail: function () {
                var t = this.slot.slotsMap;
                for (var e in t) if (e && t.hasOwnProperty(e) && t[e]) {
                    var i = t[e], n = i.slotId, o = "";
                    i.response && (o = i.response.queryid);
                    var s = i.status, r = i.errors || [], a = decodeURIComponent(r.join(","));
                    a && this.sendLog({
                        type: "hlog",
                        exp: this.config.EXP_ID || "",
                        status: s,
                        pos: "checkFail",
                        id: n,
                        sid: o,
                        index: i.index,
                        errorInfo: a
                    })
                }
            }
        }), s.define({
            name: "viewWatch",
            namespace: "dup.business",
            deps: {
                dom: "dup.common.utility.dom",
                lang: "dup.common.utility.lang",
                style: "dup.common.utility.style",
                browser: "dup.common.utility.browser",
                log: "dup.common.utility.log",
                slot: "dup.business.slot"
            },
            analysisUrl: "//eclick.baidu.com/a.js",
            maxTime: 72e5,
            STATUS: {WAIT: 0, LOAD: 1, RUN: 2, UNLOAD: 3},
            opacity: {},
            clientParam: {},
            focusSwitch: !0,
            watchingList: null,
            intervalId: null,
            intervalTimeSpan: 500,
            isEventInited: !1,
            $viewWatch: function () {
                this.winFocused = !0, this.win = window, this.pageStayTime = null == this.pageStayTime ? 0 : this.pageStayTime, this.intervalStatus = this.STATUS.WAIT
            },
            viewWatch: function () {
            },
            regisetViewWatch: function (t) {
                this.isEventInited || (this.initializeEvent(), this.isEventInited = !0), this.watchingList = this.watchingList || [];
                var e = this.dom.g(t.containerId);
                if (e) {
                    var i = t.paramObj, n = t.width, o = t.height, s = "";
                    if (t.response) {
                        var r = t.response.placement, a = r.container;
                        n = a.width, o = a.height, s = t.response.queryid
                    }
                    var d = new Date, l = "" + t.slotId, c = {
                        uid: t.id,
                        slotId: l,
                        domId: t.containerId,
                        jk: s,
                        word: i.ltu,
                        iframeStatus: i.dis,
                        aw: n,
                        ah: o,
                        viewContext: {
                            opacity: 1,
                            pageStayTime: 0,
                            pageStayTimeStamp: d,
                            inViewTime: 0,
                            inViewTimeStamp: d,
                            currViewStatus: !1,
                            focusTime: 0,
                            adViewTime: 0,
                            currAdViewStatus: !1,
                            adViewTimeStamp: d
                        }
                    };
                    if (window.postMessage && c.slotId && c.slotId.indexOf("u") > -1) {
                        c.sendMessage = function () {
                            if (this.watchIframeWindow && this.watchIframeLoaded && this.viewContext && this.viewContext.lastAdViewStatus !== this.viewContext.currAdViewStatus) try {
                                var t = this.analysisUrl && this.analysisUrl.split("?"), e = t ? t[1] : "";
                                this.watchIframeWindow.postMessage(e, this.targetOrigin)
                            } catch (i) {
                            }
                        };
                        var h = e.getElementsByTagName("iframe");
                        if (h && h.length) {
                            var u = h[0];
                            c.watchIframe = u, c.targetOrigin = u.getAttribute("src") || "*";
                            try {
                                c.watchIframeWindow = u.contentWindow
                            } catch (p) {
                                c.watchIframeWindow = ""
                            }
                            c.viewContext.lastAdViewStatus = !1, c.viewContext.lastViewStatus = !1, this.dom.bind(c.watchIframe, "load", function () {
                                c.watchIframeLoaded = !0, c.viewContext.lastAdViewStatus = !c.viewContext.currAdViewStatus, c.sendMessage()
                            })
                        }
                    }
                    this.calculateClientParam(c, e), this.watchingList.push(c)
                }
            },
            unregisetViewWatch: function (t) {
                if (this.watchingList) for (var e = t.containerId, i = 0; i < this.watchingList.length; i++) {
                    var n = this.watchingList[i];
                    if (n.domId == e) return void this.watchingList.splice(i, 1)
                }
            },
            buildAnalysisUrl: function (t, e) {
                if (t && e) {
                    var i = t + "?", n = e.viewContext;
                    n.inViewTime > this.maxTime && (n.inViewTime = this.maxTime), n.adViewTime > this.maxTime && (n.adViewTime = this.maxTime), n.pageStayTime >= this.maxTime && (n.pageStayTime = this.maxTime);
                    var o = [];
                    return o.push("tu=" + e.slotId), o.push("op=" + n.opacity), o.push("jk=" + e.jk), o.push("word=" + e.word), o.push("if=" + e.iframeStatus), o.push("aw=" + e.aw), o.push("ah=" + e.ah), o.push("pt=" + n.pageStayTime), o.push("it=" + n.inViewTime), o.push("vt=" + n.adViewTime), o.push("csp=" + e.desktopResolution), o.push("bcl=" + e.browserRegion), o.push("pof=" + e.pageRegion), o.push("top=" + e.top), o.push("left=" + e.left), o.push("uid=" + e.uid), o.push("iw=" + n.currAdViewStatus), i + o.join("&")
                }
            },
            initializeEvent: function () {
                this.windowOnLoadHandler(), this.dom.ready(s.proxy(this, this.windowOnLoadDelay), 2e3), this.browser.platform && (this.browser.platform.indexOf("Android") > -1 || this.browser.platform.indexOf("Phone") > -1 || this.browser.platform.indexOf("iPod") > -1) || this.dom.bind(this.win, "beforeunload", s.proxy(this, this.windowOnUnloadHandler))
            },
            calculateClientParam: function (t, e) {
                var i = this.style.getPosition(e);
                t.left = i.left || 0, t.top = i.top || 0;
                var n = window.screen.availWidth, o = window.screen.availHeight;
                n > 1e4 && (n = 0), o > 1e4 && (o = 0), t.desktopResolution = n + "," + o, t.browserRegion = this.style.getClientWidth(window) + "," + this.style.getClientHeight(window), t.pageRegion = this.style.getScrollWidth(window) + "," + this.style.getScrollHeight(window)
            },
            updateViewStatus: function (t, e) {
                var i, n, o, s = e.isInView, r = e.isAdView, a = new Date;
                return i = n = o = this.intervalTimeSpan, t.lastViewStatus = t.currViewStatus, t.lastAdViewStatus = t.currAdViewStatus, this.intervalStatus === this.STATUS.LOAD && (this.intervalStatus = this.STATUS.RUN, i = n = 0, o = n = 0), t.currViewStatus ? (this.intervalStatus === this.STATUS.LOAD && (i = parseInt(a.getTime() - t.inViewTimeStamp.getTime(), 10), 0 > i ? i = 0 : i > this.intervalTimeSpan && (i = this.intervalTimeSpan)), t.inViewTime += i, t.inViewTimeStamp = a) : s && (t.inViewTimeStamp = a), t.currViewStatus = s, t.currAdViewStatus ? (this.intervalStatus === this.STATUS.UNLOAD && (o = parseInt(a.getTime() - t.adViewTimeStamp.getTime(), 10), 0 > o ? o = 0 : o > this.intervalTimeSpan && (o = this.intervalTimeSpan)), t.adViewTime += o, t.adViewTimeStamp = a) : r && (t.adViewTimeStamp = a), t.currAdViewStatus = r, t.pageStayTime = t.pageStayTime || 0, this.pageStayTime = this.pageStayTime || 0, this.intervalStatus === this.STATUS.UNLOAD && (this.pageTimeSpan = parseInt(a.getTime() - t.pageStayTimeStamp.getTime(), 10), 0 > n ? n = 0 : n > this.intervalTimeSpan && (n = this.intervalTimeSpan)), t.pageStayTime += n, this.pageStayTime += n, this.winFocused && (t.focusTime += n), t.pageStayTimeStamp = a, t.opacity = e.opacity, t
            },
            computeViewStatus: function (t) {
                var e = t.domId, i = this.dom.g(e);
                if (!i) return {isInView: !1, isAdView: !1, opacity: 1};
                var n = !1, o = !1, s = 1;
                if (this.winFocused) try {
                    s = this.getOpacity(t);
                    var r = this.isWatchDomVisible(i);
                    if (r) {
                        var a = this.style.getClientWidth(this.win), d = this.style.getClientHeight(this.win),
                            l = this.getPosition(i), c = this.style.getOuterWidth(i), h = this.style.getOuterHeight(i);
                        n = l.top >= 0 && l.bottom <= d && l.left >= 0 && l.left <= a;
                        var u = l.top > 0 ? l.top : 0, p = l.bottom > d ? d : l.bottom, m = l.left > 0 ? l.left : 0,
                            f = l.right > a ? a : l.right, g = c * h;
                        if (p > u && f > m) {
                            var y = (p - u) * (f - m);
                            o = y > .5 * g
                        }
                    } else n = !1, o = !1
                } catch (v) {
                }
                return {isInView: n, isAdView: o, opacity: s}
            },
            isWatchDomVisible: function (t) {
                return t ? this.style.getOpacity(t) >= 50 && this.style.getVisibility(t) : !1
            },
            getOpacity: function (t) {
                var e = t.domId;
                this.opacity[e] = this.opacity[e] || 0;
                var i = this.style.getOpacity(e);
                return 100 === i && (this.opacity[e] |= 1), 100 > i && i > 0 && (this.opacity[e] |= 2), 0 === i && (this.opacity[e] |= 4), this.opacity[e]
            },
            getPosition: function (t) {
                var e = this.style.getPositionCore(t), i = this.style.getScrollLeft(window),
                    n = this.style.getScrollTop(window), o = this.style.getOuterWidth(t, !1),
                    s = this.style.getOuterHeight(t, !1);
                return {
                    top: e.top - n,
                    bottom: e.top - n + s,
                    left: e.left - i,
                    right: e.left - i + o,
                    topAbs: e.top,
                    bottomAbs: e.top + s,
                    leftAbs: e.left,
                    rightAbs: e.left + o
                }
            },
            viewableCompute: function () {
                if (this.watchingList) for (i = 0, count = this.watchingList.length; i < count; i++) {
                    var t = this.watchingList[i], e = this.computeViewStatus(t);
                    t.viewContext = this.updateViewStatus(t.viewContext, e), t.analysisUrl = this.buildAnalysisUrl(this.analysisUrl, t), t.sendMessage && t.sendMessage()
                }
            },
            viewOnChange: function () {
                this.viewableCompute(), this.pageStayTime >= this.maxTime && this.windowOnUnloadHandler(!1)
            },
            windowOnLoadHandler: function (t) {
                this.intervalStatus = this.STATUS.LOAD, this.registerFocusEvent(this.win), (!this.browser.ie || this.browser.ie && this.browser.ie > 6) && this.viewOnChange(), this.intervalId = setInterval(s.proxy(this, this.viewOnChange), this.intervalTimeSpan)
            },
            windowOnLoadDelay: function (t) {
                var e, i, n, o, s;
                for (e = 0, i = this.watchingList.length; i > e; e++) n = this.watchingList[e], n && (s = n.domId, s && (o = this.win.document.getElementById(s)), o && (n.clientParam = n.clientParam || {}, this.calculateClientParam(n, o)))
            },
            windowOnUnloadHandler: function (t) {
                try {
                    if (clearInterval(this.intervalId), this.intervalStatus !== this.STATUS.RUN) return void(this.intervalStatus = this.STATUS.UNLOAD);
                    this.intervalStatus = this.STATUS.UNLOAD, this.viewableCompute();
                    for (var e = 0, i = this.watchingList.length; i > e; e++) {
                        var n = this.watchingList[e];
                        n && n.analysisUrl && !n.isSended && (n.isSended = !0, 0 === e && (n.analysisUrl += "&total=" + this.watchingList.length), this.log.sendLog({url: n.analysisUrl}))
                    }
                    if (t) {
                        var o, s = 200, r = (new Date).getTime();
                        if (this.browser.ie) for (o = r + s; o > r;) r = (new Date).getTime(); else {
                            for (var i = 1e5, e = 0; i > e; e++) ;
                            o = (new Date).getTime(), i = 1e5 * s / (o - r), i = i > 1e7 ? 1e7 : i;
                            for (var e = 0; i > e; e++) ;
                        }
                    }
                } catch (a) {
                }
            },
            registerFocusEvent: function (t) {
                var t = t || this.win;
                this.winFocused = !0, this.browser.ie ? (this.dom.bind(t, "focusin", s.proxy(this, this.allDomOnFocusHandler)), this.dom.bind(t, "focusout", s.proxy(this, this.allDomOnBlurHandler))) : (this.dom.bind(t, "focus", s.proxy(this, this.allDomOnFocusHandler)), this.dom.bind(t, "blur", s.proxy(this, this.allDomOnBlurHandler)))
            },
            allDomOnFocusHandler: function (t) {
                this.winFocused = !0
            },
            allDomOnBlurHandler: function (t) {
                this.winFocused = !1
            }
        }), s.define({
            name: "unionDelivery",
            namespace: "dup.business.delivery",
            deps: {slot: "dup.business.slot"},
            launch: function () {
                var t, e = window.cpro_id;
                window.cpro_id = null, e && (t = this.slot.createSlot({
                    slotId: e,
                    productLine: "union",
                    isAsync: !1
                }), this.slot.addSlot(t));
                var i = window.cproArray;
                if (window.cproArray = null, i) for (var n = 0, o = i.length; o > n; n++) t = this.slot.createSlot({
                    slotId: i[n].id,
                    productLine: "union",
                    isAsync: !0
                }), this.slot.addSlot(t);
                var s = window.cpro_mobile_slot;
                if (window.cpro_mobile_slot = null, s) for (var n = 0, o = s.length; o > n; n++) {
                    var r = s[n];
                    t = this.slot.createSlot({
                        slotId: r.id,
                        productLine: "union",
                        isAsync: !0
                    }), t.styleOpenApi = t.styleOpenApi || {};
                    for (var a in r) a && r[a] && r.hasOwnProperty(a) && (t.styleOpenApi[a] = r[a]);
                    this.slot.addSlot(t)
                }
                this.slot.process()
            }
        }), s.define({
            name: "dupDelivery",
            namespace: "dup.business.delivery",
            deps: {slot: "dup.business.slot", "interface": "dup.business.interface"},
            launch: function () {
                this.delieveryObjArray = this.delieveryObjArray || [], window.BAIDU_DUP = window.BAIDU_DUP || [], window.BAIDU_DUP && window.BAIDU_DUP instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.BAIDU_DUP), window.BAIDU_DUP = []), this.updateApi(), this.process()
            },
            updateApi: function () {
                window.BAIDU_DUP = this, window.BAIDU_DUP.load = !0, this["interface"].register("fill", this, this.fill), this["interface"].register("fillAsync", this, this.fillAsync)
            },
            process: function () {
                for (var t = 0, e = this.delieveryObjArray.length; e > t; t++) {
                    var i = this.delieveryObjArray[t];
                    if (i instanceof Array) {
                        var n = i.splice(0, 1)[0], o = i;
                        this["interface"].perform(n, o)
                    }
                }
                this.delieveryObjArray = [], this.slot.process()
            },
            push: function (t) {
                this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.process()
            },
            fill: function (t) {
                var e = this.slot.createSlot({slotId: t, productLine: "dup", isAsync: !1});
                this.slot.addSlot(e), this.slot.process()
            },
            fillAsync: function (t, e) {
                var i = this.slot.createSlot({slotId: t, productLine: "dup", isAsync: !0});
                i.containerId = e, this.slot.addSlot(i), this.slot.process()
            }
        }), s.define({
            name: "standardDelivery",
            namespace: "dup.business.delivery",
            deps: {
                config: "dup.common.config",
                slot: "dup.business.slot",
                "interface": "dup.business.interface",
                param: "dup.business.param",
                data: "dup.common.utility.data",
                additionalParam: "dup.business.parameter.additionalParam"
            },
            launch: function () {
                this.delieveryObjArray = this.delieveryObjArray || [], window.slotbydup = window.slotbydup || [], window.slotbydup && window.slotbydup instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.slotbydup), window.slotbydup = []), this.updateApi(), this.process()
            },
            process: function () {
                for (var t, e = 0, i = this.delieveryObjArray.length; i > e; e++) {
                    var n = this.delieveryObjArray[e];
                    if (n.hasOwnProperty("id")) {
                        var o = !1;
                        n.hasOwnProperty("isAsync") && n.isAsync ? o = n.isAsync : n.hasOwnProperty("async") && n.async && (o = n.async);
                        var s = "";
                        if (n.hasOwnProperty("coa") && n.coa && (s = n.coa), t = this.slot.createSlot({
                                slotId: n.id,
                                productLine: "adcodex",
                                isAsync: o,
                                coa: s
                            }), n.hasOwnProperty("pos") && n.pos && (t.posUrl = this.config.HTTP_PROTOCOL + "//" + n.pos + "/s?", t.pcn = n.pos), this.additionalParam.paramCheck(t, n), t.containerId = n.container || t.containerId, t.display = n.display, t.ftpc = n.ftpc || !1, t.size = n.size || "", t.pcwd = n.pcwd || "", t.pchd = n.pchd || "", t.proxy = n.proxy || "", t.exps = n.exps || "", t.isAutoAd = n.isAutoAd || !1, !t.styleOpenApi.cpro_w && !t.styleOpenApi.cpro_h) {
                            var r, a = n.size;
                            if (a && a.indexOf(":") > -1) {
                                r = a.split(":");
                                var d = this.param.translateScaleToPixelSize(r[0], r[1]);
                                t.width = d.width, t.height = d.height
                            }
                        }
                        this.slot.addSlot(t);
                        var l = "cpro_set_baiduRec_jsonpCb";
                        n[l] && n.hasOwnProperty(l) && this.data.putInfo("baiduRecCallback", n.cpro_set_baiduRec_jsonpCb || "")
                    } else this["interface"].executeTask(n)
                }
                this.delieveryObjArray = [], this.slot.process()
            },
            updateApi: function () {
                window.slotbydup = this, window.slotbydup.load = !0
            },
            push: function (t) {
                this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.process()
            }
        }), s.define({
            name: "expand",
            namespace: "dup.ui.painter",
            deps: {
                config: "dup.common.config",
                dom: "dup.common.utility.dom",
                style: "dup.common.utility.style",
                event: "dup.common.utility.event",
                slot: "dup.business.slot"
            },
            validate: function (t) {
                return !0
            },
            sendMessage: function (t, e) {
                var i = this.slot.getSlotInfo(t), n = this.dom.g(i.containerId);
                if (n) {
                    var o = n.getElementsByTagName("iframe")[0];
                    e = JSON.stringify(e),
                        o.contentWindow.postMessage(e, "*")
                }
            },
            getComputedWidth: function (t) {
                return window.getComputedStyle ? window.getComputedStyle(t).width : t.currentStyle.width
            },
            init: function () {
                function t(t) {
                    if ("string" != typeof i) return !1;
                    var i = JSON.parse(t.data);
                    if (!i.title || "baidudup" != i.title) return !1;
                    if ("invokeMethod" === i.type) switch (i.method) {
                        case"expand":
                            e.expandAd(i.parameters[0]);
                            break;
                        case"close":
                            e.collapseAd(i.parameters[0])
                    }
                }

                var e = this;
                (window.addEventListener || window.attachEvent) && JSON && JSON.parse && this.event.bind(window, "message", t), this.event.bind(window, "scroll", function () {
                    e.adjustPosWhenViewportChanged()
                }), this.event.bind(window, "resize", function () {
                    e.adjustPosWhenViewportChanged()
                })
            },
            adjustPosWhenViewportChanged: function () {
                var t = this.scrollObserver;
                for (var e in t) for (var i in t[e]) {
                    var n = t[e][i];
                    if (!n.isExpand) return;
                    var o = n.origin, s = o.getElementsByTagName("iframe")[0],
                        r = (n.targetWidth, n.targetHeight, n.originWidth);
                    n.originHeight;
                    switch (e) {
                        case"up":
                            var a = parseInt(this.getComputedWidth(o), 10);
                            s.style.left = 0;
                            break;
                        case"down":
                            var a = parseInt(this.getComputedWidth(o), 10);
                            s.style.left = 0;
                            break;
                        case"left":
                            var a = parseInt(this.getComputedWidth(o));
                            s.style.right = a - r + "px";
                            break;
                        case"right":
                            var a = parseInt(this.getComputedWidth(o));
                            s.style.left = 0
                    }
                }
            },
            $expand: function () {
                this.observerObjs = [], this.expandStatus = {}, this.timers = {}, this.hasInit = !1, this.maxExpandTime = 5e3, this.canFixed = this.style.canFixed(), this.scrollObserver = {
                    up: {},
                    down: {},
                    left: {},
                    right: {}
                }
            },
            registerScrollSubject: function (t, e, i, n, o, s, r) {
                if (!this.scrollObserver[t][e]) {
                    var a = this.scrollObserver[t][e] = {};
                    a.isExpand = !0, a.origin = i, a.originWidth = n, a.originHeight = o, a.targetWidth = s, a.targetHeight = r
                }
            },
            expand2Up: function (t, e, i, n, o, s) {
                this.registerScrollSubject("up", t, e, i, n, o, s);
                var r = e.getElementsByTagName("iframe")[0];
                r.style.bottom = 0, r.style.left = 0
            },
            expand2Down: function (t, e, i, n, o, s) {
                this.registerScrollSubject("down", t, e, i, n, o, s);
                var r = e.getElementsByTagName("iframe")[0];
                r.style.top = 0, r.style.left = 0
            },
            expand2Left: function (t, e, i, n, o, s) {
                this.registerScrollSubject("left", t, e, i, n, o, s);
                var r = e.getElementsByTagName("iframe")[0], a = parseInt(this.getComputedWidth(e));
                r.style.bottom = 0, r.style.right = a - i + "px"
            },
            expand2Right: function (t, e, i, n, o, s) {
                this.registerScrollSubject("right", t, e, i, n, o, s);
                var r = e.getElementsByTagName("iframe")[0];
                r.style.bottom = 0, r.style.left = 0
            },
            expandAd: function (t) {
                if (!this.expandStatus[t]) {
                    this.expandStatus[t] = !0;
                    var e = this.slot.getSlotInfoByRawId(t), i = e.response.placement.container, n = i.width,
                        o = i.height, s = e.response.placement.container.slide, r = s.slideWidth, a = s.slideHeight,
                        d = 1e3 * parseInt(s.extendTime, 10), l = parseInt(s.slideMode, 10),
                        c = parseInt(s.direction, 10), h = e.containerId, u = this.dom.g(h),
                        p = u.getElementsByTagName("iframe")[0];
                    if (1 === c || 2 === c ? (p.setAttribute("height", a), p.style.height = a + "px") : 3 !== c && 4 !== c || (p.setAttribute("width", r), p.style.width = r + "px"), 2 == l && 2 == c || 2 == l && 4 == c) switch (c) {
                        case 2:
                            p.setAttribute("height", a), p.style.height = a + "px";
                            break;
                        case 4:
                            p.setAttribute("width", r), p.style.width = r + "px"
                    } else switch (u.style.position = "relative", p.style.position = "absolute", u.style.height = o + "px", c) {
                        case 1:
                            this.expand2Up(t, u, n, o, r, a);
                            break;
                        case 2:
                            this.expand2Down(t, u, n, o, r, a);
                            break;
                        case 3:
                            this.expand2Left(t, u, n, o, r, a);
                            break;
                        case 4:
                            this.expand2Right(t, u, n, o, r, a)
                    }
                    var m = this;
                    this.timers[t] = setTimeout(function () {
                        m.expandStatus[t] && m.collapseAd(t)
                    }, Math.min(d))
                }
            },
            collapseAd: function (t) {
                if (this.expandStatus[t]) {
                    this.expandStatus[t] = !1, clearTimeout(this.timers[t]);
                    var e = this.slot.getSlotInfoByRawId(t), i = e.response.placement.container, n = i.width,
                        o = i.height, s = e.containerId, r = this.dom.g(s), a = r.getElementsByTagName("iframe")[0];
                    r.style.position = "", r.style.width = "", r.style.height = "", r.style.top = "", r.style.left = "", a.style.position = "", a.style.display = "", a.style.top = "", a.style.left = "", a.style.right = "", a.style.width = "", a.style.height = "", a.setAttribute("height", o), a.setAttribute("width", n);
                    for (var d in this.scrollObserver) for (var l in this.scrollObserver[d]) l === t && (this.scrollObserver[d][l].isExpand = !1)
                }
            },
            observer: function (t) {
                var t = this.slot.getSlotInfoByRawId(t.slotId), e = t.containerId, i = this.dom.g(e);
                i.style.textAlign = "left", this.hasInit || (this.hasInit = !0, this.init())
            },
            fire: function (t, e) {
                var i, n = function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, o = this.slot.getSlotInfoByRawId(e), s = o.response.placement.container.slide;
                s && (i = s.trigger);
                var r = n(i) ? i[0] : i ? i : 0,
                    a = ["", "BEFORE_PAGELOAD", "AFTER_PAGECLOSE", "PAGE_PERCENT", "mouseover", "click", "adloaded", "SLIP"];
                a[r] === t && this.sendMessage(e, {title: "baidudup", type: "eventHappen", parameters: [t]})
            }
        }), s.define({
            name: "insideText",
            namespace: "dup.ui.painter.mobile",
            deps: {
                config: "dup.common.config",
                lang: "dup.common.utility.lang",
                dom: "dup.common.utility.dom",
                slot: "dup.business.slot",
                param: "dup.business.param",
                data: "dup.common.utility.data",
                viewWatch: "dup.business.viewWatch",
                browser: "dup.common.utility.browser",
                monitor: "dup.business.monitor"
            },
            hashBox: {},
            itemIndex: 0,
            SET_DATA_JSONP: "BAIDU_DUP_MOBILE_INSIDE_TEXT",
            MAX_PAGE_AD_NUMBER: 40,
            MAX_KEYWORD_AD_NUMBER: 3,
            adCount: 0,
            wordCount: {},
            render: function (t) {
                this.slot.setStatus(t.id, this.config.STATUS_RENDERED), this.monitor.sendLog(t);
                var e = this.dom.g(t.containerId);
                if (e) {
                    this.data.defineOnce(this.SET_DATA_JSONP, s.proxy(this, this.compareTextNode));
                    var i = this.getBody(e);
                    i && ("complete" === document.readyState ? (this.insertJsonpScript(t, e), this.findTextNode(i)) : this.dom.bind(document, "readystatechange", s.proxy(this, function () {
                        "complete" === document.readyState && (this.insertJsonpScript(t, e), this.findTextNode(i))
                    })), this.viewWatch.regisetViewWatch(t), this.slot.setStatus(t.id, this.config.STATUS_FINISH))
                }
            },
            getBody: function (t) {
                var e = t.parentNode;
                return e.tagName && "body" === e.tagName.toLowerCase() ? e : this.getBody(e)
            },
            insertJsonpScript: function (t, e) {
                t.paramObj.dcb = this.SET_DATA_JSONP, t.paramObj.dtm = this.config.STATIC_JSONP, t.paramObj.cec = "utf-8";
                var i = this.param.getPmpRequestUrl(t), n = document.createElement("script");
                n.src = i, n.charset = t.paramObj.cec, e.appendChild(n)
            },
            findTextNode: function (t) {
                for (var e = t.childNodes, i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (this.dom.isValidTextElement(n)) switch (n.nodeType) {
                        case 3:
                            var o;
                            this.browser.ie < 9 && n.nodeValue && (o = n.nodeValue), n.textContent && (o = n.textContent), o && this.lang.trim(o) && o.length > 0 && this.addHash(n);
                            break;
                        default:
                            this.findTextNode(n)
                    }
                }
            },
            addHash: function (t) {
                var e = t.parentNode;
                e.innerHTML && (this.hashBox["item_" + this.itemIndex] = e, this.itemIndex++)
            },
            compareTextNode: function () {
                var t = arguments[0] && arguments[0].slots[0] && arguments[0].slots[0].ads[0];
                if (t) {
                    var e = t.data && t.data.meta;
                    if (e && 0 !== e.length) for (var i in this.hashBox) {
                        var n = this.hashBox[i];
                        if (document.contains(n)) {
                            for (var o = n.innerHTML, s = 0; s < e.length; s++) o = this.replaceKeyword(e[s], o);
                            if (n.innerHTML = o, this.adCount === this.MAX_PAGE_AD_NUMBER) break
                        }
                    }
                }
            },
            replaceKeyword: function (t, e) {
                if (!t || !e) return e;
                var i = t.title, n = new RegExp(i, "i");
                if (i && i.length > 0 && n.test(e) && this.isNotNextToAElement(i, e) && this.isNotInElement(i, e)) {
                    var o = t.curl || "",
                        s = '<a href="' + o + '" target="_blank" style="color:#38f;text-decoration:none">' + i + "</a>";
                    if (this.wordCount[i] || (this.wordCount[i] = 0), this.adCount < this.MAX_PAGE_AD_NUMBER && this.wordCount[i] < this.MAX_KEYWORD_AD_NUMBER) return this.adCount++, this.wordCount[i]++, e.replace(n, s)
                }
                return e
            },
            isNotNextToAElement: function (t, e) {
                var i = e.indexOf(t), n = i - 4, o = i + t.length, s = "</a>" === e.substr(n, 4),
                    r = "<a " === e.substr(o, 3);
                return !s && !r
            },
            isNotInElement: function (t, e) {
                var i = new RegExp("<[^>]*" + t + "[^<]*>", "i"), n = new RegExp(">[^<]*" + t + "[^>]*</", "i");
                return !i.test(e) && !n.test(e)
            }
        }), s.define({
            name: "autoAds",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                dom: "dup.common.utility.dom",
                data: "dup.common.utility.data",
                style: "dup.common.utility.style",
                log: "dup.common.utility.log",
                slot: "dup.business.slot",
                param: "dup.business.param"
            },
            launch: function () {
                try {
                    if (!window.___baidu_union_.expId) {
                        window.___baidu_union_.expId = "110011";
                        var t = this.param.getOneParam("slotParam", "dis");
                        if (0 === t) {
                            var e = this.getAutoSlotInfo();
                            this.data.defineOnce("dupCallback", s.proxy(this, this.dupCallback), this.config.COMMON_GLOBAL), this.requestAutoAdsInfo(e);
                            var i = 1e4 * Math.random();
                            100 > i && this.initPageMonitor()
                        }
                    }
                } catch (n) {
                    var o = n && n.stack ? n.stack : n;
                    this.log.sendEclickLog("se.jpg", "fatalError", {
                        key: "autoAds",
                        date: (new Date).getTime(),
                        mes: encodeURIComponent(o)
                    })
                }
            },
            getAutoSlotInfo: function () {
                var t = this.slot.createSlot({slotId: this.config.AUTOID, isAsync: !0});
                return t
            },
            requestAutoAdsInfo: function (t) {
                t.paramObj = this.param.getParamObj(t), t.paramObj.dcb = this.config.COMMON_GLOBAL_CALLBACK, t.paramObj.dtm = this.config.AUTO_JSONP, t.paramObj.dc = this.config.AUTO_DC;
                var e = this.param.getParamString(t.paramObj),
                    i = this.config.HTTP_PROTOCOL + this.config.REQUEST_URL + this.config.AUTO_PATH + "?" + e;
                "complete" === document.readyState || "interactive" === document.readyState ? this.dom.insertScriptElement(i) : this.dom.bind(document, "readystatechange", s.proxy(this, function () {
                    "interactive" === document.readyState && this.dom.insertScriptElement(i)
                }))
            },
            callback: function (t, e, i) {
                try {
                    if (i instanceof Array && document.querySelector) {
                        var n = window.___baidu_union_.autoAd && window.___baidu_union_.autoAd.dup;
                        n ? window.___baidu_union_.dsCallback(i, n) : window.___baidu_union_.dupCallback(i)
                    }
                } catch (o) {
                    var s = o && o.stack ? o.stack : o;
                    this.log.sendEclickLog("se.jpg", "fatalError", {
                        key: "autoDupCallback",
                        date: (new Date).getTime(),
                        mes: encodeURIComponent(s)
                    })
                }
            },
            dupCallback: function (t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e], n = i.tuid, o = i.placement, s = i.userdefine;
                    n && "[object Object]" === Object.prototype.toString.call(o) && this.insertProcessor(n, o.processor, o.position, s)
                }
            },
            insertProcessor: function (t, e, i, n) {
                var o = i && document.querySelector(i), s = "";
                switch (e) {
                    case"0":
                        s = o, o = s && s.parentNode;
                        break;
                    case"1":
                        s = this.getHalfLongInsertPositon(o);
                        break;
                    case"2":
                        s = this.getLastTwoInsertPositon(o)
                }
                this.appendAutoScript(t, n, s, o)
            },
            getHalfLongInsertPositon: function (t) {
                var e = t && t.children;
                if (e && e.length > 1 && t.scrollHeight > window.screen.height) {
                    var i = e.length;
                    return e[Math.ceil(i / 2)]
                }
            },
            getLastTwoInsertPositon: function (t) {
                var e = t && t.children;
                if (e && e.length > 0) {
                    var i = e.length;
                    return e[i - 1]
                }
            },
            appendAutoScript: function (t, e, i, n) {
                if (!i || !n) return !1;
                var o = document.createElement("div");
                o.id = "_" + Math.random().toString(36).slice(2);
                var s = document.createElement("script");
                s.innerHTML = this.getAutoScriptSnippet(t, o.id, e), o.appendChild(s), n.insertBefore(o, i)
            },
            getAutoScriptSnippet: function (t, e, i) {
                var n = '(window.slotbydup = window.slotbydup || []).push({ id: "' + t + '", container:"' + e + '", exps:"' + this.config.AUTO_AD_EXP_ID + "\", isAutoAd:true",
                    o = "});", s = n + o;
                return i = window.JSON && window.JSON.stringify && i && "object" == typeof i && JSON.stringify(i), i && (s = n + ", coa:" + i + o), s
            },
            initPageMonitor: function () {
                var t = 0, e = (new Date).getTime(), i = !0;
                this.dom.bind(document, "click", function () {
                    t++
                }), this.style.onPageVisible(function () {
                    i || document.visibilityState && "visible" !== document.visibilityState || (i = !0, e = (new Date).getTime())
                }), this.style.onPageHidden(s.proxy(this, function () {
                    if (i && e && (!document.visibilityState || "hidden" === document.visibilityState)) {
                        i = !1;
                        var n = (new Date).getTime() - e,
                            o = window[this.config.COMMON_GLOBAL] && window[this.config.COMMON_GLOBAL][this.config.PAGE_SEARCH_ID];
                        this.log.sendEclickLog("rs.jpg", "timeOnPage", {psid: o, time: n, click: t}), e = 0, t = 0
                    }
                }))
            }
        }), s.define({
            name: "frame",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                slot: "dup.business.slot",
                material: "dup.business.material",
                log: "dup.common.utility.log",
                browser: "dup.common.utility.browser",
                requestCache: "dup.business.requestCache",
                param: "dup.business.param",
                lang: "dup.common.utility.lang",
                data: "dup.common.utility.data",
                viewWatch: "dup.business.viewWatch",
                creativePreview: "dup.business.creativePreview",
                monitor: "dup.business.monitor",
                storage: "dup.common.utility.storage"
            },
            checkRichAdType: function (t) {
                for (var e = "", i = ["dui-lian", "popup", "right-down", "slide", "top-down", "barrier"], n = 0; n < i.length; n++) if (t.indexOf(i[n]) > -1) {
                    e = i[n];
                    break
                }
                return e
            },
            cacheRequestCallback: function (t) {
                var e = t.html || "success";
                if ("success" !== e) {
                    var i = this.requestCache.get(t.dpv), n = i.response.pdb_deliv.deliv_des;
                    n = n._html || {};
                    var o = i.response, r = o.pdb_deliv, a = o.rtb_deliv, d = o.order_deliv;
                    if (0 === parseInt(r.deliv_id, 10) && (0 !== parseInt(d.deliv_id, 10) || 0 !== parseInt(a.deliv_id, 10)) && "success" !== e && 7 === o.placement.complement_type) {
                        var l = document.getElementById(i.containerId),
                            c = document.getElementById(i.containerId + "_left"),
                            h = document.getElementById(i.containerId + "_right");
                        return l && (this.viewWatch.unregisetViewWatch(i), l.parentNode.removeChild(l)), c && c.parentNode.removeChild(c), void(h && h.parentNode.removeChild(h))
                    }
                    if (i) if (n.type && "rich" === n.type) {
                        var u = this.material.formatMaterial(n, i), p = document.getElementById(i.containerId),
                            m = "<!DOCTYPE html><body>";
                        u.indexOf(m) > -1 && (u = u.slice(m.length));
                        var f = this.checkRichAdType(u);
                        if ("popup" === f) p.style.display = "none"; else if ("barrier" === f) {
                            p.style.display = "none";
                            var g = document.getElementById(i.containerId + "_placeholder");
                            g && (g.style.display = "none")
                        }
                        var y = s.using("dup.ui.painter.richMaterial");
                        y.render(i, !0)
                    } else {
                        var v = this.requestCache.secondResult[t.dpv];
                        this.slot.clearStatus(i, this.config.STATUS_FINISH), i.isPdbAd = !0, i.isNeedCacheRequest = !1, v.outerHTML = this.getFrameHTML(i)
                    }
                }
            },
            requireDomainPolicy: function () {
                function t(t) {
                    try {
                        return !t.contentWindow.document
                    } catch (e) {
                        return !0
                    }
                }

                var e = document.createElement("iframe"), i = !1;
                return document.body ? (e.src = "about:blank", document.body.insertBefore(e, document.body.firstChild), i = t(e), document.body.removeChild(e), this.requireDomainPolicy = function () {
                    return i
                }, i) : i
            },
            requireBlankPolicy: function () {
                var t = navigator.userAgent, e = !(!t || !t.match(/iphone.*micromessenger/i));
                return this.requireBlankPolicy = function () {
                    return e
                }, e
            },
            renderFrame: function (t, e) {
                var i = this.slot.getSlotInfo(t);
                if (i && !this.slot.checkStatus(i, this.config.STATUS_FINISH)) {
                    var n = i.response.pdb_deliv.deliv_des;
                    n = n._html;
                    var o = this.getFrameUrl();
                    if (this.requireDomainPolicy() && e.getAttribute("src", 2) !== o) return void(e.src = o);
                    if (n && "url" === n.type) return e.src = n.content, void this.slot.setStatus(i.id, this.config.STATUS_FINISH);
                    try {
                        this.slot.setStatus(i.id, this.config.STATUS_FINISH);
                        var s = this.material.formatMaterial(n, i);
                        s.indexOf("<body>") < 0 && (s = "<!DOCTYPE html><body>" + s);
                        var r = e.contentWindow.document;
                        r.open("text/html", "replace"), r.write(s), r.body && (r.body.style.backgroundColor = "transparent")
                    } catch (a) {
                    }
                }
            },
            getFrameUrl: function () {
                return this.requireDomainPolicy() ? this.data.getConfig("domainPolicyFileUrl") || "/domain-policy.htm" : this.requireBlankPolicy() ? this.data.getConfig("blankPolicyFileUrl") || "/blank-policy.htm" : "about:blank"
            },
            getFrameHTML: function (t, e) {
                if (e = e || "iframe" + t.id, t.proxy) {
                    var i = String.fromCharCode(Math.floor(26 * Math.random()) + 97);
                    e = i + Math.random().toString(36).slice(2) + t.id
                }
                t.iframeId = e;
                var n = this.processFrameData(t);
                return this.renderFrameHTML(n)
            },
            processFrameData: function (t) {
                var e, i, n = "", o = [];
                if (t.response) {
                    var r = t.response.placement;
                    i = r.container;
                    try {
                        o = r.fillstyle.elements || []
                    } catch (a) {
                    }
                }
                var d = t.width || i && i.width, l = t.height || i && i.height,
                    c = this.creativePreview.getPreviewUrl(d, l, o, t.displayType || "inlay");
                if (c) e = c; else if (t.isPdbAd) {
                    var h = this.config.DUP_PREFIX + "renderFrame";
                    this.data.defineOnce(h, s.proxy(this, this.renderFrame)), e = this.getFrameUrl(), n = 'onload="' + h + "('" + t.id + "', this);\""
                } else if (t.isNeedCacheRequest) {
                    var u = this.config.DUP_PREFIX + "cacheRequest", p = "adsbybaidu_callback";
                    this.data.defineOnce(p, s.proxy(this, this.cacheRequestCallback)), this.data.defineOnce(u, s.proxy(this.requestCache, this.requestCache.cacheRequest)), e = this.param.getPmpRequestUrl(t), n = 'onload="' + u + "('" + t.paramObj.dpv + "', this);\""
                } else if (t.styleOpenApi && t.styleOpenApi.floatingState && "show" !== t.styleOpenApi.floatingState || 2 === i.location) {
                    var m = t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : "upSlideShow";
                    n = 'onload="' + this.config.DUP_PREFIX + "floatShow('" + t.containerId + "','" + i.location + "','" + m + "', this);\"", e = this.param.getPmpRequestUrl(t)
                } else e = this.param.getPmpRequestUrl(t);
                var f = {};
                return f.iframeId = t.iframeId, f.srcAttriName = "src", f.onloadDefine = n, f.iframeWidth = "" + d, f.iframeHeight = "" + l, f.url = e, f
            },
            renderFrameHTML: function (t) {
                var e = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
                return this.lang.template(e, t)
            }
        }), s.define({
            name: "richMaterial",
            namespace: "dup.ui.painter",
            deps: {
                dom: "dup.common.utility.dom",
                config: "dup.common.config",
                slot: "dup.business.slot",
                param: "dup.business.param",
                frame: "dup.business.frame",
                log: "dup.business.monitor",
                data: "dup.common.utility.data"
            },
            isNeededNode: function (t, e) {
                return t.nodeName && t.nodeName.toUpperCase() === e.toUpperCase()
            },
            evalScript: function (t, e) {
                try {
                    var i = document.createElement("script");
                    i.type = "text/javascript", t.src ? i.src = t.src : i.text = t.text || t.textContent || t.innerHTML || "", e.insertBefore(i, e.firstChild)
                } catch (n) {
                    this.monitor.expLog({error: "createscripterror", status: "renderFail"})
                }
            },
            render: function (t, e) {
                try {
                    if (!t.response) return;
                    var i = t.response, n = i.pdb_deliv.deliv_des, o = n._html, s = t.isNeedCacheRequest;
                    if (!e && (!o || "rich" !== o.type || s)) return !1;
                    var r = o.content
                } catch (a) {
                }
                if (!t.isAsync && !s) return document.write(r), this.slot.setStatus(t.id, this.config.STATUS_FINISH), !0;
                var d = this.dom.g(t.containerId);
                if (d && t.isAsync && ("clb" === t.productLine || "dup" === t.productLine) && !s) {
                    var l = this.frame.getFrameHTML(t);
                    return d.innerHTML = l, !0
                }
                if (!d) return !1;
                d.innerHTML = '<span style="display: none">ie</span>' + r;
                for (var c = d.childNodes, h = [], u = 0; c[u]; u++) !this.isNeededNode(c[u], "script") || c[u].type && "text/javascript" !== c[u].type.toLowerCase() || h.push(c[u]);
                h.reverse();
                for (var p = 0, m = h.length; m > p; p++) this.evalScript(h[p].parentNode.removeChild(h[p]), d);
                return !0
            }
        }), s.define({
            name: "floatBlock",
            namespace: "dup.ui.painter",
            deps: {
                config: "dup.common.config",
                style: "dup.common.utility.style",
                log: "dup.common.utility.log",
                dom: "dup.common.utility.dom",
                lang: "dup.common.utility.lang",
                cookie: "dup.common.utility.cookie",
                unicode: "dup.common.utility.unicode",
                frame: "dup.business.frame",
                slot: "dup.business.slot",
                deliveryLimit: "dup.business.deliveryLimit"
            },
            GAP: 5,
            NORMAL_CLOSE_BTN_HEIGHT: 17,
            COUPLET_CLOSE_BTN_HEIGHT: 20,
            validate: function (t) {
                if ("union" === t.productLine) {
                    var e = this.deliveryLimit.TYPE.POPUP;
                    "couplet" !== t.blockType && "button" !== t.blockType || (e = this.deliveryLimit.TYPE.COUPLET);
                    var i = this.validateLimit(e);
                    if (!i) return !1;
                    this.deliveryLimit.setAdsCount(e, t.domId)
                }
                var n = this.getCloseCookieName(t);
                return 2 !== t.closeType || !this.cookie.get(n)
            },
            validateLimit: function (t) {
                var e = this.deliveryLimit.getAdCount(t), i = this.deliveryLimit.MAX_COUNT[t];
                return i > e ? !0 : void 0
            },
            createBlockHtmlTemplate: function (t) {
                var e = ["{iframe}", "{closeBtn}"].join("");
                if (!t.blockType || "default" === t.blockType) return e;
                var i = ["box-sizing: content-box;", "width:{width}px;", "height:{height}px;", "padding:4px;", "border:#acacac 1px solid;", "overflow:hidden;"];
                return "button" !== t.blockType && "popup" !== t.blockType || i.push("position:absolute;left:0;top:" + (this.COUPLET_CLOSE_BTN_HEIGHT + this.GAP) + "px;"), e = ['<div style="' + i.join("") + '">', "{iframe}", "</div>", "{closeBtn}"].join("")
            },
            createCloseElement: function (t) {
                var e = {}, i = "\\u5FAE\\u8F6F\\u96C5\\u9ED1", n = "\\u5173\\u95ED", o = t.domId + "_closebtn",
                    s = this;
                return e.couplet = function () {
                    var e = ["box-sizing: content-box;", "position:absolute;", "width:" + t.containerWidth + "px;", "height:20px;", "top:" + (t.containerHeight - this.COUPLET_CLOSE_BTN_HEIGHT) + "px;", "left:0;", "cursor:pointer;", "background-color:#999999;", "color:#fff;font-size:12px;", "font-family: " + s.unicode.toDecode(i) + ";", "text-align:center;line-height:20px;"].join(""),
                        r = "<div id=\"" + o + "\" style=\"" + e + "\">" + s.unicode.toDecode(n) + "</div>";
                    return r
                }, e.button = e.popup = function () {
                    var e = 61, i = t.containerWidth - e, n = "\\u5FAE\\u8F6F\\u96C5\\u9ED1", r = "\\u5173\\u95ED",
                        a = ["box-sizing: content-box;", "position:absolute;width:" + e + "px;", "height:20px;top:0;", "left:" + i + "px;", "margin:0;padding:0;margin-bottom:5px;", "cursor:pointer;overflow:hidden;"].join(""),
                        d = ['<div id="' + o + '" style="' + a + '">', '<div style="', "box-sizing: content-box;", "width:40px;height:20px;", "background-color:#999999;", "color:#fff;float:left;", "margin-right:1px;font-size:12px;", "font-family:" + s.unicode.toDecode(n) + ";", "text-align: center;line-height:20px;", '">' + s.unicode.toDecode(r) + "</div>", '<a style="maring:0;padding:0;', "display:inline-block;border:none;", "overflow:hidden;height:20px;", "line-height:20px;cursor:pointer;", "width:20px;background:url(", "'https://cpro.baidustatic.com/cpro/ui/", "noexpire/img/2.0.1/xuanfu_close.png", "') no-repeat 0 0;margin-bottom:3px;", 'float:left" ></a>', "</div>"].join("");
                    return d
                }, e["default"] = function () {
                    var e = "https://cpro.baidustatic.com/cpro/ui/noexpire/img/clb/1.0.0/close.gif",
                        i = ["box-sizing: content-box;", "height:15px;", "border:1px solid #e1e1e1;", "background:#f0f0f0;", "margin:0;", "padding:0;", "overflow:hidden;"].join(""),
                        n = ["box-sizing: content-box;", "float:right;", "clear:right;", "margin:2px 5px 0 0;", "width:39px;", "height:13px;", "cursor:pointer;", "background:url(" + e + ") no-repeat scroll 0 0;"].join(""),
                        o = ['<div style="' + i + '">', '<span id="' + t.domId + '_closebtn" style="' + n + '" ', "onmouseover=\"this.style.backgroundPosition='0 -20px';\" ", "onmouseout=\"this.style.backgroundPosition='0 0';\" ", ">", "</span>", "</div>"].join("");
                    return o
                }, e[t.blockType]()
            },
            getVerticalStyle: function (t) {
                var e = t.vSpace || 10;
                "center" === t.verticalType && (e = .5 * (this.style.getClientHeight() - t.containerHeight));
                var i = t.verticalType;
                return i && "center" !== i || (i = "top"), {cssName: i, cssValue: e}
            },
            getHorizontalStyle: function (t) {
                var e = t.hSpace || 10;
                if (t.contentWidth > 0 && 1 === t.dockType) {
                    var i = Math.floor(.5 * (this.style.getClientWidth() - t.contentWidth));
                    i >= t.width && (e = "right" === t.horizontalType ? i - t.containerWidth - e : i - t.containerWidth - e)
                } else "center" === t.horizontalType && (e = .5 * (this.style.getClientWidth() - t.containerWidth));
                var n = t.horizontalType;
                return n && "center" !== n || (n = "left"), {cssName: n, cssValue: e}
            },
            createContainerElementByInfo: function (t) {
                var e = null;
                this.dom.g(t.domId) ? e = this.dom.g(t.domId) : (e = document.createElement("div"), e.id = t.domId);
                var i = ["box-sizing: content-box;", "width: " + t.containerWidth + "px;", "height: " + t.containerHeight + "px;", "overflow: hidden;", "z-index: 2147483647;"];
                if (1 === t.followType) {
                    if (this.style.canFixed()) i.push("position: fixed;"); else {
                        i.push("position: absolute;"), this.updatePosition(t, e);
                        var n = this;
                        this.dom.bind(window, "scroll", function () {
                            n.updatePosition(t, t.domId)
                        }), this.dom.bind(window, "resize", function () {
                            n.updatePosition(t, t.domId)
                        })
                    }
                    var o = this.getVerticalStyle(t), s = this.getHorizontalStyle(t);
                    i.push(o.cssName + ":" + o.cssValue + "px;"), i.push(s.cssName + ":" + s.cssValue + "px;")
                } else {
                    i.push("position: absolute;");
                    var o = this.getVerticalStyle(t), s = this.getHorizontalStyle(t);
                    i.push(o.cssName + ":" + o.cssValue + "px;"), i.push(s.cssName + ":" + s.cssValue + "px;")
                }
                return e.style.cssText = i.join(""), e
            },
            updatePosition: function (t, e) {
                var i = this.dom.g(e);
                if (i) {
                    var n = i.style, o = "CSS1Compat" !== document.compatMode,
                        s = document.body ? document.body : document.documentElement,
                        r = o ? s : document.documentElement, a = (r.clientWidth, r.clientHeight),
                        d = (window.pageXOffset || r.scrollLeft, window.pageYOffset || r.scrollTop);
                    t.contentWidth > 0 && 1 === t.dockType;
                    "top" === t.verticalType || 0 === t.verticalType.length ? n.top = d + t.vSpace + "px" : n.top = d + a - t.vSpace - t.containerHeight + "px"
                }
            },
            getCloseCookieName: function (t) {
                var e = "bd_close_" + t.id;
                return "couplet" !== t.blockType && "button" !== t.blockType || (e += "_" + t.horizontalType), e
            },
            setCookieClose: function (t) {
                var e = this.getCloseCookieName(t), i = new Date;
                i.setTime(i.getTime() + 9e5), this.cookie.set(e, !0, {expires: i, path: "/"})
            },
            registEvent: function (t) {
                var e = t.domId + "_closebtn", i = this.dom.g(e);
                this.dom.bind(i, "click", s.proxy(this, this.closeBtnOnClickHandler)), this.dom.bind(i, "mouseover", s.proxy(this, this.closeBtnOnMouseOverHandler)), this.dom.bind(i, "mouseout", s.proxy(this, this.closeBtnOnMouseOutHandler))
            },
            closeBtnOnClickHandler: function () {
                var t = document.getElementById(this.info.domId);
                t && t.parentNode && t.parentNode.removeChild(t), 2 === this.info.closeType && this.setCookieClose(this.info);
                var e = "//eclick.baidu.com/fcb.jpg?jk={jk}&dt={dt}&rnd={rnd}", i = {
                    jk: this.info.queryId || "",
                    dt: (new Date).getTime(),
                    rnd: Math.floor(2147483648 * Math.random())
                };
                try {
                    this.log.loadImage(this.lang.template(e, i))
                } catch (n) {
                }
            },
            closeBtnOnMouseOverHandler: function () {
                var t = this.info.domId + "_closebtn", e = this.dom.g(t);
                if (e) if ("couplet" === this.info.blockType) e.style.backgroundColor = "#0066cc"; else if ("popup" === this.info.blockType || "button" === this.info.blockType) {
                    var i = e.getElementsByTagName("div")[0];
                    i.style.backgroundColor = "#0066cc";
                    var n = e.getElementsByTagName("a")[0];
                    n.style.backgroundImage = "url(https://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/xuanfu_mouseover_close.png)"
                }
            },
            closeBtnOnMouseOutHandler: function () {
                var t = this.info.domId + "_closebtn", e = this.dom.g(t);
                if (e) if ("couplet" === this.info.blockType) e.style.backgroundColor = "#999999"; else if ("popup" === this.info.blockType || "button" === this.info.blockType) {
                    var i = e.getElementsByTagName("div")[0];
                    i.style.backgroundColor = "#999999";
                    var n = e.getElementsByTagName("a")[0];
                    n.style.backgroundImage = "url(https://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.1/xuanfu_close.png)"
                }
            },
            autoClose: function () {
                var t = document.getElementById(this.adInfo.domId);
                t && t.parentNode && t.parentNode.removeChild(t)
            },
            render: function (t, e) {
                if (this.validate(t)) {
                    this.info = t;
                    var i = this.createCloseElement(t), n = this.createBlockHtmlTemplate(t),
                        o = {width: t.width, height: t.height, iframe: this.frame.getFrameHTML(e), closeBtn: i},
                        r = this.createContainerElementByInfo(t);
                    r.innerHTML = this.lang.template(n, o), this.dom.g(t.domId) || document.body.insertBefore(r, document.body.firstChild), this.registEvent(t);
                    var a = t.closeTime || 0;
                    a > 0 && setTimeout(s.proxy(this, this.autoClose), 1e3 * a), e.isPdbAd || this.slot.setStatus(e.id, this.config.STATUS_FINISH)
                }
            }
        }), s.define({
            name: "inlayFix",
            namespace: "dup.ui.painter.mobile",
            deps: {
                config: "dup.common.config",
                lang: "dup.common.utility.lang",
                style: "dup.common.utility.style",
                dom: "dup.common.utility.dom",
                slot: "dup.business.slot",
                param: "dup.business.param",
                expand: "dup.ui.painter.expand",
                monitor: "dup.business.monitor",
                browser: "dup.common.utility.browser",
                frame: "dup.business.frame",
                richMaterial: "dup.ui.painter.richMaterial",
                landingPage: "dup.ui.painter.landingPage"
            },
            $inlayFix: function () {
                this.win = window
            },
            getCurViewportWidth: function (t) {
                var e = this.isUnionPreview ? t : Math.max(320, this.win.innerWidth);
                return isNaN && isNaN(e) && (e = this.style.getClientWidth()), e
            },
            parseHtmlSnippet: function (t) {
                var e = ["<div style=\"box-sizing: content-box;width:{width}px;height:{height}px;position:relative;margin:0 auto;\">", "{closeBtnHtml}", "{iframeHtml}", "</div>"].join("");
                return this.lang.template(e, t)
            },
            decorateContainer: function (t, e) {
                if (t) {
                    var i = t.style;
                    i.cssText = ["box-sizing: content-box;", "text-align:center;", "display:block;", "font-size:0;", "width:100%;", "height:" + e.height + "px;"].join("")
                }
            },
            render: function (t) {
                if (this.slot.setStatus(t.id, this.config.STATUS_RENDERED), !this.slot.adInfoIsAvailable(t)) return !1;
                this.monitor.sendLog(t), t.displayType = "inlay-mobile";
                var e = this.dom.g(t.containerId);
                if (e) {
                    this.monitor.sendLog(t);
                    var i = this.richMaterial.render(t), n = this;
                    if (i) return void(this.supportPostMessage && setTimeout(function () {
                        n.expand.fire("adloaded", t.id)
                    }, 800));
                    this.landingPage.activate(t);
                    var o = this.slot.processSlotInfo(t);
                    if (this.decorateContainer(e, o), t.width = o.width, t.height = o.height, 2 === o.sizeType || 5 === o.sizeType) {
                        var s = t.response.pdb_deliv.deliv_des;
                        if (s && s._html) {
                            s = s._html;
                            var r = s.type;
                            "text" !== r && "image" !== r && "flash" !== r || (s.width = t.width, s.height = t.height)
                        }
                    }
                    var a = {
                        id: t.id,
                        width: o.width,
                        height: o.height,
                        closeBtnHtml: "",
                        iframeHtml: this.frame.getFrameHTML(t)
                    }, d = this.parseHtmlSnippet(a);
                    e.innerHTML = d, t.isPdbAd || this.slot.setStatus(t.id, this.config.STATUS_FINISH)
                }
            }
        }), s.define({
            name: "float",
            namespace: "dup.ui.painter.mobile",
            deps: {
                config: "dup.common.config",
                lang: "dup.common.utility.lang",
                style: "dup.common.utility.style",
                dom: "dup.common.utility.dom",
                cookie: "dup.common.utility.cookie",
                data: "dup.common.utility.data",
                event: "dup.common.utility.event",
                browser: "dup.common.utility.browser",
                slot: "dup.business.slot",
                frame: "dup.business.frame",
                monitor: "dup.business.monitor",
                requestCache: "dup.business.requestCache",
                richMaterial: "dup.ui.painter.richMaterial",
                hiddenFloatAd: "dup.ui.painter.hiddenFloatAd"
            },
            directDisplay: "show",
            upSlideAnimation: "upSlideShow",
            downSlideAnimation: "downSlideShow",
            containerFilter: function (t, e) {
                var i = !1, n = t.response.placement, o = n.container, s = o.location, r = t.styleOpenApi,
                    a = 2 === r.apType;
                if (2 === s && !a) return !1;
                var d = 3.4;
                if (1 !== e.sizeType || r.rsi0 || r.rsi1 || r.cpro_w || r.cpro_h) {
                    var l = e.width / e.height;
                    i = l > d
                }
                return i
            },
            processSlotInfo: function (t) {
                var e = t.response.placement, i = e.container, n = e.fillstyle, o = parseFloat(n.opacity || .9),
                    s = n.backgroundColor || "#000", r = this.slot.processSlotInfo(t);
                r.backgroundOpacity = o, r.backgroundColor = s;
                var a = i.location;
                return 2 !== a && 3 !== a && (a = 3), r.locationType = a, r.containerId = t.containerId, r.closeType = i.closeType, r.floatingState = this.getFloatingState(t, a), r
            },
            parseHtmlSnippet: function (t) {
                var e = ["<div style=\"width:{width}px;height:{height}px;position:relative;margin:0 auto;\">", "{closeBtnHtml}", "{iframeHtml}", "</div>"].join("");
                return this.lang.template(e, t)
            },
            parseCloseBtnLayoutData: function (t) {
                var e = "", i = "", n = "0", o = 0;
                2 === t.locationType ? (e = "0 0 40px 40px", n = t.height, i = t.floatingState === this.directDisplay ? String.fromCharCode(65087) : String.fromCharCode(65088), o = -4) : (e = "40px 40px 0 0", n = -20, i = t.floatingState === this.directDisplay ? String.fromCharCode(65088) : String.fromCharCode(65087), o = 3);
                var s = {domId: t.containerId, borderRadius: e, top: n, btnTag: i, marginTop: o};
                return s
            },
            parseCloseButtonHtml: function (t) {
                var e = ["<div", ' id="{domId}_closebtn"', ' style="', "position:absolute;", "left:50%;", "top:{top}px;", "margin-left: -20px;", "width:40px;", "height:20px;", "background-color:#4a4a4a;", "cursor:pointer;", "border-radius:{borderRadius};", 'z-index:2147483647;">', "<div", ' id="{domId}_closebtn_inside"', ' style="', "width:100%;", "font-size:14px;", "font-weight:600;", "color:#fff;", 'margin-top:{marginTop}px;">', "{btnTag}", "</div></div>"].join(""),
                    i = this.parseCloseBtnLayoutData(t);
                return this.lang.template(e, i)
            },
            decorateContainer: function (t, e) {
                var i = 0, n = "absolute";
                this.style.canFixed() && (n = "fixed", i = e.floatingState !== this.directDisplay && "ontouchend" in document ? e.height && -1 * (e.height + 20) : 0), "absolute" === n && (i = this.style.getScrollTop(window) + this.style.getClientHeight(window) - e.height);
                var o = 2 === e.locationType ? "top" : "bottom", s = t.style;
                s.cssText = ["box-sizing: content-box;", "position:" + n, "z-index:2147483647;", o + ":" + i + "px", "background-color:" + e.backgroundColor, "opacity:" + e.backgroundOpacity, "text-align:center", "display:block", "font-size:0", "left:0", "width:100%", "height:" + e.height + "px"].join(";")
            },
            getCloseCookieKey: function (t) {
                return "bd_close_" + t.id
            },
            closeBtnOnClickHandler: function (t, e, i) {
                var n = this.dom.g(e.containerId);
                if (n && n.parentNode) {
                    var o = 2 === i.locationType ? "top" : "bottom";
                    "hidden" === n.getAttribute("state") ? this.showAdContainer(o, n) : this.hideAdContainer(o, n)
                }
                if (2 === e.closeType) {
                    var s = "bd_close_" + this.id, r = {path: ""};
                    this.cookie.set(s, !0, r)
                }
            },
            showAdContainer: function (t, e) {
                e.setAttribute("state", "show"), e.style.transition = t + " 0.75s", e.style["-webkit-transition"] = t + " 0.75s", e.style["-moz-transition"] = t + " 0.75s", e.style["-o-transition"] = t + " 0.75s", e.style[t] = "0px";
                var i = e.id, n = i && i + "_closebtn_inside", o = document.getElementById(n);
                "top" === t ? (o.style.marginTop = "-4px", o.innerText = String.fromCharCode(65087)) : (o.style.marginTop = "3px", o.innerText = String.fromCharCode(65088))
            },
            hideAdContainer: function (t, e) {
                e.setAttribute("state", "hidden");
                var i = this.style.getStyle(e, "height");
                i = i && parseInt(i, 10), e.style.transition = t + " 0.75s", e.style["-webkit-transition"] = t + " 0.75s", e.style["-moz-transition"] = t + " 0.75s", e.style["-o-transition"] = t + " 0.75s", e.style[t] = -1 * i + "px";
                var n = e.id, o = n && n + "_closebtn_inside", s = document.getElementById(o);
                "top" === t ? (s.style.marginTop = "3px", s.innerText = String.fromCharCode(65088)) : (s.style.marginTop = "-4px",
                    s.innerText = String.fromCharCode(65087))
            },
            validate: function (t) {
                var e = !0, i = "bd_close_" + this.id, n = this.cookie.get(i, window);
                return 2 === t.closeType && n && (e = !1), e
            },
            render: function (t) {
                if (!this.slot.adInfoIsAvailable(t)) return !1;
                this.slot.setStatus(t.id, this.config.STATUS_RENDERED), this.id = t.id, t.displayType = "inlay-mobile";
                var e = this.processSlotInfo(t);
                if (this.validate(e)) {
                    this.monitor.sendLog(t);
                    var i = this.richMaterial.render(t), n = this.dom.g(t.containerId);
                    if (!i && n && this.containerFilter(t, e)) {
                        this.decorateContainer(n, e);
                        var o = this.parseCloseButtonHtml(e);
                        this.processPdbSize(e, t), this.data.defineOnce("BAIDU_SSP_floatShow", s.proxy(this, this.showFloatAd));
                        var r = {
                            id: t.id,
                            width: n.clientWidth,
                            height: e.height,
                            closeBtnHtml: o,
                            iframeHtml: this.frame.getFrameHTML(t)
                        }, a = this.parseHtmlSnippet(r);
                        n.innerHTML = a;
                        var d = this.dom.g(t.containerId + "_closebtn");
                        d && this.dom.bind(d, "click", s.proxy(this, this.closeBtnOnClickHandler, t, e)), this.hiddenFloatAd.render(t), t.isPdbAd || this.slot.setStatus(t.id, this.config.STATUS_FINISH)
                    }
                }
            },
            showFloatAd: function (t, e, i) {
                this.body = document.body, e = "2" === e ? "top" : "bottom", this.dom.bind(this.body, "touchstart", s.proxy(this, this.touchStart)), this.dom.bind(this.body, "touchend", s.proxy(this, this.touchEnd, t, e, i))
            },
            touchStart: function (t) {
                this.startY = t.targetTouches[0] && t.targetTouches[0].pageY
            },
            touchEnd: function (t, e, i, n) {
                this[i] = this[i] || !1, this.pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
                var o = this.pageY - this.startY;
                if (-10 > o && !this[i] && n === this.upSlideAnimation || o > 10 && !this[i] && n === this.downSlideAnimation) {
                    this[i] = !0;
                    var s = document.getElementById(e);
                    this.showAdContainer(i, s)
                }
            },
            getFloatingState: function (t, e) {
                return t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : 2 === e ? this.upSlideAnimation : this.directDisplay
            },
            processPdbSize: function (t, e) {
                if (2 === t.sizeType) {
                    var i = e.response.pdb_deliv.deliv_des;
                    if (i && i._html) {
                        i = i._html;
                        var n = i.type;
                        "text" !== n && "image" !== n && "flash" !== n || (i.width = e.width, i.height = e.height)
                    }
                }
            }
        }), s.define({
            name: "clbDelivery",
            namespace: "dup.business.delivery",
            deps: {
                slot: "dup.business.slot",
                frame: "dup.business.frame",
                "interface": "dup.business.interface",
                config: "dup.common.config",
                log: "dup.common.utility.log",
                origentation: "dup.business.origentation",
                data: "dup.common.utility.data"
            },
            clbSlotArr: {
                BAIDU_CLB_fillSlot: !0,
                BAIDU_CLB_singleFillSlot: !0,
                BAIDU_CLB_fillSlotWithSize: !0,
                BAIDU_CLB_fillSlotAsync: !0,
                BAIDU_CLB_preloadSlots: !0
            },
            launch: function () {
                var t;
                try {
                    var e = window.BAIDU_CLB_SLOT_ID;
                    window.BAIDU_CLB_SLOT_ID = null, e && (t = this.slot.createSlot({
                        slotId: e,
                        productLine: "clb",
                        isAsync: !1
                    }), this.slot.addSlot(t), this.slot.process());
                    for (var i in this.clbSlotArr) "BAIDU_CLB_preloadSlots" === i ? this.data.defineOnce(i, s.proxy(this, this.reSet)) : this.data.defineOnce(i, s.proxy(this, this.getClbFillSlot));
                    this.updateApi()
                } catch (n) {
                }
            },
            reSet: function () {
            },
            getClbFillSlot: function (t, e) {
                var i;
                t && !e && (i = this.slot.createSlot({
                    slotId: t,
                    productLine: "clb",
                    isAsync: !1
                })), t && e && (i = this.slot.createSlot({
                    slotId: t,
                    productLine: "clb",
                    isAsync: !0
                }), i.containerId = e), this.slot.addSlot(i), this.slot.process()
            },
            updateApi: function () {
                try {
                    this.data.defineOnce("BAIDU_CLB_prepareMoveSlot", s.proxy(this, this.prepareMove)), this.data.defineOnce("BAIDU_DUP_addSlotStatusCallback", s.proxy(this.origentation, this.origentation.addSlotStatusCallback)), this.data.defineOnce(this.config.DUP_PREFIX + "renderFrame", s.proxy(this.frame, this.frame.renderFrame)), this.data.defineOnce("BAIDU_CLB_setConfig", s.proxy(this.data, this.data.putConfig)), this.data.defineOnce("BAIDU_CLB_addOrientation", s.proxy(this.origentation, this.origentation.addOrientation)), this.data.defineOnce("BAIDU_CLB_addOrientationOnce", s.proxy(this.origentation, this.origentation.addOrientationOnce)), this.data.defineOnce("BAIDU_CLB_setOrientationOnce", s.proxy(this.origentation, this.origentation.setOrientationOnce)), this.data.defineOnce("BAIDU_CLB_addSlot", s.proxy(this, this.reSet)), this.data.defineOnce("BAIDU_CLB_enableAllSlots", s.proxy(this, this.reSet)), this.data.defineOnce("BAIDU_CLB_SETHTMLSLOT", s.proxy(this, this.reSet))
                } catch (t) {
                }
            },
            prepareMove: function (t) {
                try {
                    for (var e = 0, i = t + "_" + e; this.slot.getSlotInfo(i) && 0 !== this.slot.getSlotInfo(i)[0];) {
                        var n = this.slot.getSlotInfo(i);
                        this.slot.clearStatus(n, this.config.STATUS_FINISH), i = t + "_" + ++e
                    }
                } catch (o) {
                }
            }
        }), s.define({
            name: "inlayFix",
            namespace: "dup.ui.painter",
            deps: {
                config: "dup.common.config",
                dom: "dup.common.utility.dom",
                slot: "dup.business.slot",
                frame: "dup.business.frame",
                viewWatch: "dup.business.viewWatch",
                richMaterial: "dup.ui.painter.richMaterial",
                monitor: "dup.business.monitor",
                expand: "dup.ui.painter.expand",
                event: "dup.common.utility.event",
                lang: "dup.common.utility.lang",
                browser: "dup.common.utility.browser",
                deliveryLimit: "dup.business.deliveryLimit",
                style: "dup.common.utility.style"
            },
            $inlayFix: function () {
                this.supportPostMessage = !(this.browser.ie && this.browser.ie < 8)
            },
            bindEvent4Expand: function (t) {
                var e = this.dom.g(t.containerId), i = this;
                this.event.bind(e, "mouseover", function (e) {
                    var n = e.target || e.srcElement;
                    "iframe" !== n.tagName.toLowerCase() && "iframe" !== n.nodeName.toLowerCase() || i.expand.fire("mouseover", t.id)
                })
            },
            validate: function (t) {
                if ("union" === t.productLine) {
                    var e = this.deliveryLimit.getSlotType(t), i = this.deliveryLimit.validate(t);
                    return i && this.deliveryLimit.setAdsCount(e, t.containerId), i
                }
                return !0
            },
            render: function (t) {
                this.slot.setStatus(t.id, this.config.STATUS_RENDERED);
                var e = this.dom.g(t.containerId);
                if (!this.slot.adInfoIsAvailable(t)) return this.slot.setStatus(t.id, this.config.STATUS_FINISH), !1;
                t.displayType = "inlay";
                var i = null == t.response ? null : t.response.placement.container.slide,
                    n = !(!i || this.lang.isEmptyObj(i) || !this.supportPostMessage);
                if (n && (this.expand.observer(t), this.bindEvent4Expand(t)), this.validate(t)) {
                    this.monitor.sendLog(t);
                    var o = this.richMaterial.render(t), s = this;
                    if (o) return void(this.supportPostMessage && setTimeout(function () {
                        s.expand.fire("adloaded", t.id)
                    }, 800));
                    if (!e) return void this.slot.addErrorInfo(t, "container dom not founded");
                    var r = this.slot.processSlotInfo(t);
                    t.width = r.width, t.height = r.height;
                    var a = this.frame.getFrameHTML(t);
                    e.innerHTML = a, this.viewWatch.regisetViewWatch(t), t.isPdbAd || this.slot.setStatus(t.id, this.config.STATUS_FINISH), n && setTimeout(function () {
                        s.expand.fire("adloaded", t.id)
                    }, 800)
                }
            }
        }), s.define({
            name: "float",
            namespace: "dup.ui.painter",
            deps: {
                config: "dup.common.config",
                dom: "dup.common.utility.dom",
                lang: "dup.common.utility.lang",
                frame: "dup.business.frame",
                slot: "dup.business.slot",
                richMaterial: "dup.ui.painter.richMaterial",
                monitor: "dup.business.monitor",
                expand: "dup.ui.painter.expand",
                floatBlock: "dup.ui.painter.floatBlock",
                viewWatch: "dup.business.viewWatch"
            },
            GAP: 5,
            NORMAL_CLOSE_BTN_HEIGHT: 17,
            COUPLET_CLOSE_BTN_HEIGHT: 20,
            validate: function (t) {
                var e = t.response.placement, i = e.container, n = i.floated;
                if (this.dom.isInIframe(window)) return !1;
                var o = parseInt(n.clientw || 0, 10);
                return o > 4095 && (o = 4095), !(o >= screen.width)
            },
            processSlotInfo: function (t) {
                var e = t.response.placement, i = e.container, n = i.floated, o = n.dockType, s = i.closeType,
                    r = i.closeTime || 0, a = n.vspace || 0, d = n.hspace || 0,
                    l = t.response.rtb_deliv.deliv_id && t.response.order_deliv.deliv_id, c = t.width || i.width,
                    h = t.height || i.height, u = +c, p = +h, m = ["default", "couplet", "button", "popup"],
                    f = parseInt(n.blockType || 0, 10), g = m[f];
                "default" !== g && (u += 2 * this.GAP + 1, p += 2 * this.GAP + 1), p += "couplet" === g ? this.COUPLET_CLOSE_BTN_HEIGHT : "button" === g || "popup" === g ? this.COUPLET_CLOSE_BTN_HEIGHT + this.GAP : this.NORMAL_CLOSE_BTN_HEIGHT;
                var y = i.location, v = "", w = "";
                switch (y) {
                    case 1:
                        v = "center", w = "center";
                        break;
                    case 2:
                        v = "top";
                        break;
                    case 3:
                        v = "bottom";
                        break;
                    case 4:
                        w = "left";
                        break;
                    case 5:
                        w = "right";
                        break;
                    case 7:
                        v = "top", w = "left";
                        break;
                    case 8:
                        v = "top", w = "right";
                        break;
                    case 9:
                        v = "bottom", w = "left";
                        break;
                    case 10:
                        v = "bottom", w = "right"
                }
                0 === a && "button" === g ? (v = "bottom", a = 40) : 0 === a && "couplet" === g && (v = "top", a = 150);
                var b = t.response.queryid, _ = {
                    id: t.id,
                    domId: t.containerId,
                    width: c,
                    height: h,
                    containerWidth: u,
                    containerHeight: p,
                    verticalType: v,
                    horizontalType: w,
                    followType: n.follow || 1,
                    blockType: g,
                    dockType: o,
                    closeType: s,
                    closeTime: r,
                    vSpace: a,
                    hSpace: d,
                    contentWidth: n.contw,
                    isRTB: l,
                    queryId: b,
                    productLine: t.productLine
                };
                return _
            },
            render: function (t) {
                if (this.validate(t)) {
                    if (this.slot.setStatus(t.id, this.config.STATUS_RENDERED), !this.slot.adInfoIsAvailable(t)) return !1;
                    t.displayType = "float", this.monitor.sendLog(t);
                    var e = this.richMaterial.render(t);
                    if (!e) {
                        var i = [];
                        i.push(t);
                        var n = t.response.placement, o = n.container, r = parseInt(o.location || 0, 10);
                        if (6 === r) {
                            i = [];
                            var a = this.slot.cloneSlot(t), d = this.slot.cloneSlot(t);
                            a.response.placement.container.location = 5, a.containerId = a.containerId + "_right", this.slot.addSlot(a), i.push(a), d.response.placement.container.location = 4, d.containerId = d.containerId + "_left", this.slot.addSlot(d), i.push(d)
                        }
                        for (var l = 0, c = i.length; c > l; l++) {
                            var h = i[l], u = s.create(this.floatBlock);
                            u.render(this.processSlotInfo(h), h)
                        }
                        this.viewWatch.regisetViewWatch(t)
                    }
                }
            }
        }), s.define({
            name: "main",
            namespace: "dup.ui.delivery",
            deps: {
                config: "dup.common.config",
                slot: "dup.business.slot",
                fingerPrint: "dup.business.fingerPrint",
                data: "dup.common.utility.data",
                storage: "dup.common.utility.storage",
                loader: "dup.common.loader",
                painterSelector: "dup.business.painterSelector",
                origentation: "dup.business.origentation",
                param: "dup.business.param",
                detect: "dup.business.detect",
                "interface": "dup.business.interface",
                monitor: "dup.business.monitor",
                scene: "dup.business.sceneTactics",
                clbDelivery: "dup.business.delivery.clbDelivery",
                unionDelivery: "dup.business.delivery.unionDelivery",
                dupDelivery: "dup.business.delivery.dupDelivery",
                standardDelivery: "dup.business.delivery.standardDelivery",
                inlayFixPainter: "dup.ui.painter.inlayFix",
                floatPainter: "dup.ui.painter.float",
                mobileInlayFixPainter: "dup.ui.painter.mobile.inlayFix",
                mobileFloatPainter: "dup.ui.painter.mobile.float",
                mobileInsideTextPainter: "dup.ui.painter.mobile.insideText",
                dom: "dup.common.utility.dom",
                viewWatch: "dup.business.viewWatch",
                pageSearchId: "dup.business.pageSearchId",
                autoAds: "dup.business.autoAds",
                log: "dup.common.utility.log",
                style: "dup.common.utility.style"
            },
            process: function () {
                this.prepareApi(), this.autoAds.launch(), this.unionDelivery.launch(), this.dupDelivery.launch(), this.clbDelivery.launch(), this.standardDelivery.launch(), this.fingerPrint.start()
            },
            prepareApi: function () {
                this["interface"].register("addOrientation", this.origentation, this.origentation.addOrientation), this["interface"].register("addOrientationOnce", this.origentation, this.origentation.addOrientationOnce), this["interface"].register("setOrientationOnce", this.origentation, this.origentation.setOrientationOnce), this.data.defineOnce(this.config.LOADER_DEFINE_NAME, s.proxy(this, this.callback)), this.data.defineOnce(this.config.PAGE_SEARCH_ID, this.pageSearchId.getPageSearchId(), this.config.COMMON_GLOBAL), this.data.defineOnce(this.config.COMMON_GLOBAL_CALLBACK, s.proxy(this, this.commonCallback))
            },
            callback: function (t) {
                try {
                    var e = this.slot.getSlotInfo(t.tuid);
                    if (!e || e.containerId && !this.dom.g(e.containerId)) return;
                    e.response = t, this.slot.setStatus(e.id, this.config.STATUS_RESPONSE), this.slot.processSlot(e), e.timestampWatcher.t3 = (new Date).getTime(), this.slot.adInfoStorage(e), this.param.processExtendsParam(e);
                    var i = this.painterSelector.getPainter(e);
                    if (!i) return;
                    var n = s.using(i);
                    n ? this.painterLoadedCallback(i, e, n) : i && this.loader.load(e.id, i, s.proxy(this, this.painterLoadedCallback, i, e))
                } catch (o) {
                    if (!t.tuid) return;
                    var r = "";
                    r = o && o.stack ? o.stack : o;
                    var a = encodeURIComponent(r), d = {type: "fatalError", pos: "callback", id: t.tuid, mes: a};
                    this.monitor.expLog(d)
                }
            },
            painterLoadedCallback: function (t, e, i) {
                var n = i || s.using(t);
                n && (n.render(e), t && t.indexOf("mobile") > -1 && (this.viewWatch.regisetViewWatch(e), (!window.postMessage || e.id.indexOf("u") < 0) && this.fingerPrint.loadAntiBotFile(e.response.queryid)), this.sendPVLog(), this.addDebugSign(e))
            },
            sendPVLog: function () {
                if (!window.___baidu_union_.isPVLogSent) {
                    window.___baidu_union_.isPVLogSent = !0;
                    var t = this.config.PV_LOG + "?type=pvLog";
                    this.log.sendLogRequest(t)
                }
            },
            commonCallback: function () {
                arguments.length > 0 && "auto" === arguments[0] && this.autoAds.callback.apply(this, arguments)
            },
            addDebugSign: function (t) {
                var e = this.dom.g(t.containerId), i = this.param.getOneParam("slotParam", "dis"),
                    n = i ? this.param.getOneParam("browserParam", "ltu") : window.location.href;
                n.indexOf(this.config.DEBUG_QUERY_TAG) > -1 && this.style.addDebugElement(e, t.id)
            }
        });
        var a = s.using('dup.ui.delivery.main');
        a.process()
    }()
} catch (e) {
    var err = e && e.stack ? e.stack : e,
        url = ['//eclick.baidu.com/se.jpg?', 'type=fatalError', 'data=1220', 'mes=' + encodeURIComponent(err)].join('&'),
        img = new Image;
    img.src = url
}