
typeof JSON != "object" && (JSON = {}),
    function () {
        "use strict";

        function f(e) {
            return e < 10 ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                var t = meta[e];
                return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, s, o = gap,
                u, a = t[e];
            a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
            switch (typeof a) {
                case "string":
                    return quote(a);
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "boolean":
                case "null":
                    return String(a);
                case "object":
                    if (!a) return "null";
                    gap += indent, u = [];
                    if (Object.prototype.toString.apply(a) === "[object Array]") {
                        s = a.length;
                        for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                        return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                    }
                    if (rep && typeof rep == "object") {
                        s = rep.length;
                        for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                    } else
                        for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                    return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
            var r;
            gap = "", indent = "";
            if (typeof n == "number")
                for (r = 0; r < n; r += 1) indent += " ";
            else typeof n == "string" && (indent = n);
            rep = t;
            if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
                "": e
            });
            throw new Error("JSON.stringify")
        }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && typeof i == "object")
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function (e, t) {
        "use strict";
        var n = e.History = e.History || {},
            r = e.jQuery;
        if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
        n.Adapter = {
            bind: function (e, t, n) {
                r(e).bind(t, n)
            },
            trigger: function (e, t, n) {
                r(e).trigger(t, n)
            },
            extractEventData: function (e, n, r) {
                var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
                return i
            },
            onDomLoad: function (e) {
                r(e)
            }
        }, typeof n.init != "undefined" && n.init()
    }(window),
    function (e, t) {
        "use strict";
        var n = e.document,
            r = e.setTimeout || r,
            i = e.clearTimeout || i,
            s = e.setInterval || s,
            o = e.History = e.History || {};
        if (typeof o.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
        o.initHtml4 = function () {
            if (typeof o.initHtml4.initialized != "undefined") return !1;
            o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function (e) {
                var t = o.getHashByIndex(),
                    n;
                return n = e === t, n
            }, o.isHashEqual = function (e, t) {
                return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
            }, o.saveHash = function (e) {
                return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
            }, o.getHashByIndex = function (e) {
                var t = null;
                return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
            }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function (e, t, n) {
                var r = o.getHashByState(e),
                    i;
                return i = {
                    discardedState: e,
                    backState: n,
                    forwardState: t
                }, o.discardedStates[r] = i, !0
            }, o.discardHash = function (e, t, n) {
                var r = {
                    discardedHash: e,
                    backState: n,
                    forwardState: t
                };
                return o.discardedHashes[e] = r, !0
            }, o.discardedState = function (e) {
                var t = o.getHashByState(e),
                    n;
                return n = o.discardedStates[t] || !1, n
            }, o.discardedHash = function (e) {
                var t = o.discardedHashes[e] || !1;
                return t
            }, o.recycleState = function (e) {
                var t = o.getHashByState(e);
                return o.discardedState(e) && delete o.discardedStates[t], !0
            }, o.emulated.hashChange && (o.hashChangeInit = function () {
                o.checkerFunction = null;
                var t = "",
                    r, i, u, a, f = Boolean(o.getHash());
                return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function () {
                    if (a) return !1;
                    a = !0;
                    var n = o.getHash(),
                        r = o.getHash(i.contentWindow.document);
                    return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, f && r === "" ? o.back() : o.setHash(r, !1)), a = !1, !0
                }) : o.checkerFunction = function () {
                    var n = o.getHash() || "";
                    return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
                }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
            }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function (t) {
                var n = t && t.newURL || o.getLocationHref(),
                    r = o.getHashByUrl(n),
                    i = null,
                    s = null,
                    u = null,
                    a;
                return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(i) ? (o.busy(!1), !1) : (s = o.getHashByState(i), a = o.discardedState(i), a ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
            }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function (t, n, r, i) {
                r = encodeURI(r).replace(/%25/g, "%");
                if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (i !== !1 && o.busy()) return o.pushQueue({
                    scope: o,
                    callback: o.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                o.busy(!0);
                var s = o.createStateObject(t, n, r),
                    u = o.getHashByState(s),
                    a = o.getState(!1),
                    f = o.getHashByState(a),
                    l = o.getHash(),
                    c = o.expectedStateId == s.id;
                return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), u === f ? (o.busy(!1), !1) : (o.saveState(s), c || o.Adapter.trigger(e, "statechange"), !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1), o.busy(!1), !0)
            }, o.replaceState = function (t, n, r, i) {
                r = encodeURI(r).replace(/%25/g, "%");
                if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (i !== !1 && o.busy()) return o.pushQueue({
                    scope: o,
                    callback: o.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                o.busy(!0);
                var s = o.createStateObject(t, n, r),
                    u = o.getHashByState(s),
                    a = o.getState(!1),
                    f = o.getHashByState(a),
                    l = o.getStateByIndex(-2);
                return o.discardState(a, s, l), u === f ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(e, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
            }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function () {
                o.Adapter.trigger(e, "hashchange")
            })
        }, typeof o.init != "undefined" && o.init()
    }(window),
    function (e, t) {
        "use strict";
        var n = e.console || t,
            r = e.document,
            i = e.navigator,
            s = !1,
            o = e.setTimeout,
            u = e.clearTimeout,
            a = e.setInterval,
            f = e.clearInterval,
            l = e.JSON,
            c = e.alert,
            h = e.History = e.History || {},
            p = e.history;
        try {
            s = e.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST")
        } catch (d) {
            s = !1
        }
        l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
        if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
        h.init = function (e) {
            return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
        }, h.initCore = function (d) {
            if (typeof h.initCore.initialized != "undefined") return !1;
            h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function () {
                var e, t = h.intervalList;
                if (typeof t != "undefined" && t !== null) {
                    for (e = 0; e < t.length; e++) f(t[e]);
                    h.intervalList = null
                }
            }, h.debug = function () {
                (h.options.debug || !1) && h.log.apply(h, arguments)
            }, h.log = function () {
                var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                    t = r.getElementById("log"),
                    i, s, o, u, a;
                e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
                for (s = 1, o = arguments.length; s < o; ++s) {
                    a = arguments[s];
                    if (typeof a == "object" && typeof l != "undefined") try {
                        a = l.stringify(a)
                    } catch (f) {}
                    i += "\n" + a + "\n"
                }
                return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
            }, h.getInternetExplorerMajorVersion = function () {
                var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function () {
                    var e = 3,
                        t = r.createElement("div"),
                        n = t.getElementsByTagName("i");
                    while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                    return e > 4 ? e : !1
                }();
                return e
            }, h.isInternetExplorer = function () {
                var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
                return e
            }, h.options.html4Mode ? h.emulated = {
                pushState: !0,
                hashChange: !0
            } : h.emulated = {
                pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
                hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
            }, h.enabled = !h.emulated.pushState, h.bugs = {
                setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
            }, h.isEmptyObject = function (e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            }, h.cloneObject = function (e) {
                var t, n;
                return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
            }, h.getRootUrl = function () {
                var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
                if (r.location.port || !1) e += ":" + r.location.port;
                return e += "/", e
            }, h.getBaseHref = function () {
                var e = r.getElementsByTagName("base"),
                    t = null,
                    n = "";
                return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
            }, h.getBaseUrl = function () {
                var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
                return e
            }, h.getPageUrl = function () {
                var e = h.getState(!1, !1),
                    t = (e || {}).url || h.getLocationHref(),
                    n;
                return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
                    return /\./.test(e) ? e : e + "/"
                }), n
            }, h.getBasePageUrl = function () {
                var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function (e, t, n) {
                    return /[^\/]$/.test(e) ? "" : e
                }).replace(/\/+$/, "") + "/";
                return e
            }, h.getFullUrl = function (e, t) {
                var n = e,
                    r = e.substring(0, 1);
                return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
            }, h.getShortUrl = function (e) {
                var t = e,
                    n = h.getBaseUrl(),
                    r = h.getRootUrl();
                return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
            }, h.getLocationHref = function (e) {
                return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
            }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function () {
                h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
            }, h.getState = function (e, t) {
                typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
                var n = h.getLastSavedState();
                return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
            }, h.getIdByState = function (e) {
                var t = h.extractId(e.url),
                    n;
                if (!t) {
                    n = h.getStateString(e);
                    if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
                    else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
                    else {
                        for (;;) {
                            t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                            if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                        }
                        h.stateToId[n] = t, h.idToState[t] = e
                    }
                }
                return t
            }, h.normalizeState = function (e) {
                var t, n;
                if (!e || typeof e != "object") e = {};
                if (typeof e.normalized != "undefined") return e;
                if (!e.data || typeof e.data != "object") e.data = {};
                return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
            }, h.createStateObject = function (e, t, n) {
                var r = {
                    data: e,
                    title: t,
                    url: n
                };
                return r = h.normalizeState(r), r
            }, h.getStateById = function (e) {
                e = String(e);
                var n = h.idToState[e] || h.store.idToState[e] || t;
                return n
            }, h.getStateString = function (e) {
                var t, n, r;
                return t = h.normalizeState(e), n = {
                    data: t.data,
                    title: e.title,
                    url: e.url
                }, r = l.stringify(n), r
            }, h.getStateId = function (e) {
                var t, n;
                return t = h.normalizeState(e), n = t.id, n
            }, h.getHashByState = function (e) {
                var t, n;
                return t = h.normalizeState(e), n = t.hash, n
            }, h.extractId = function (e) {
                var t, n, r, i;
                return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
            }, h.isTraditionalAnchor = function (e) {
                var t = !/[\/\?\.]/.test(e);
                return t
            }, h.extractState = function (e, t) {
                var n = null,
                    r, i;
                return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
            }, h.getIdByUrl = function (e) {
                var n = h.urlToId[e] || h.store.urlToId[e] || t;
                return n
            }, h.getLastSavedState = function () {
                return h.savedStates[h.savedStates.length - 1] || t
            }, h.getLastStoredState = function () {
                return h.storedStates[h.storedStates.length - 1] || t
            }, h.hasUrlDuplicate = function (e) {
                var t = !1,
                    n;
                return n = h.extractState(e.url), t = n && n.id !== e.id, t
            }, h.storeState = function (e) {
                return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
            }, h.isLastSavedState = function (e) {
                var t = !1,
                    n, r, i;
                return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
            }, h.saveState = function (e) {
                return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
            }, h.getStateByIndex = function (e) {
                var t = null;
                return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
            }, h.getCurrentIndex = function () {
                var e = null;
                return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
            }, h.getHash = function (e) {
                var t = h.getLocationHref(e),
                    n;
                return n = h.getHashByUrl(t), n
            }, h.unescapeHash = function (e) {
                var t = h.normalizeHash(e);
                return t = decodeURIComponent(t), t
            }, h.normalizeHash = function (e) {
                var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
                return t
            }, h.setHash = function (e, t) {
                var n, i;
                return t !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.setHash,
                    args: arguments,
                    queue: t
                }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
            }, h.escapeHash = function (t) {
                var n = h.normalizeHash(t);
                return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
            }, h.getHashByUrl = function (e) {
                var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                return t = h.unescapeHash(t), t
            }, h.setTitle = function (e) {
                var t = e.title,
                    n;
                t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
                try {
                    r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                } catch (i) {}
                return r.title = t, h
            }, h.queues = [], h.busy = function (e) {
                typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
                if (!h.busy.flag) {
                    u(h.busy.timeout);
                    var t = function () {
                        var e, n, r;
                        if (h.busy.flag) return;
                        for (e = h.queues.length - 1; e >= 0; --e) {
                            n = h.queues[e];
                            if (n.length === 0) continue;
                            r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                        }
                    };
                    h.busy.timeout = o(t, h.options.busyDelay)
                }
                return h.busy.flag
            }, h.busy.flag = !1, h.fireQueueItem = function (e) {
                return e.callback.apply(e.scope || h, e.args || [])
            }, h.pushQueue = function (e) {
                return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
            }, h.queue = function (e, t) {
                return typeof e == "function" && (e = {
                    callback: e
                }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
            }, h.clearQueue = function () {
                return h.busy.flag = !1, h.queues = [], h
            }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function () {
                return h.stateChanged = !0, h.doubleCheckClear(), h
            }, h.doubleCheckClear = function () {
                return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
            }, h.doubleCheck = function (e) {
                return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function () {
                    return h.doubleCheckClear(), h.stateChanged || e(), !0
                }, h.options.doubleCheckInterval)), h
            }, h.safariStatePoll = function () {
                var t = h.extractState(h.getLocationHref()),
                    n;
                if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
                return
            }, h.back = function (e) {
                return e !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.back,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), h.doubleCheck(function () {
                    h.back(!1)
                }), p.go(-1), !0)
            }, h.forward = function (e) {
                return e !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.forward,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), h.doubleCheck(function () {
                    h.forward(!1)
                }), p.go(1), !0)
            }, h.go = function (e, t) {
                var n;
                if (e > 0)
                    for (n = 1; n <= e; ++n) h.forward(t);
                else {
                    if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                    for (n = -1; n >= e; --n) h.back(t)
                }
                return h
            };
            if (h.emulated.pushState) {
                var v = function () {};
                h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
            } else h.onPopState = function (t, n) {
                var r = !1,
                    i = !1,
                    s, o;
                return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
            }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function (t, n, r, i) {
                if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                h.busy(!0);
                var s = h.createStateObject(t, n, r);
                return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
            }, h.replaceState = function (t, n, r, i) {
                if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                h.busy(!0);
                var s = h.createStateObject(t, n, r);
                return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
            };
            if (s) {
                try {
                    h.store = l.parse(s.getItem("History.store")) || {}
                } catch (m) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function () {
                var e, t, n;
                try {
                    e = l.parse(s.getItem("History.store")) || {}
                } catch (r) {
                    e = {}
                }
                e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
                for (t in h.idToState) {
                    if (!h.idToState.hasOwnProperty(t)) continue;
                    e.idToState[t] = h.idToState[t]
                }
                for (t in h.urlToId) {
                    if (!h.urlToId.hasOwnProperty(t)) continue;
                    e.urlToId[t] = h.urlToId[t]
                }
                for (t in h.stateToId) {
                    if (!h.stateToId.hasOwnProperty(t)) continue;
                    e.stateToId[t] = h.stateToId[t]
                }
                h.store = e, h.normalizeStore(), n = l.stringify(e);
                try {
                    s.setItem("History.store", n)
                } catch (i) {
                    if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                    s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
                }
            }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
            if (!h.emulated.pushState) {
                h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
                if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function () {
                    h.Adapter.trigger(e, "popstate")
                }), h.getHash() && h.Adapter.onDomLoad(function () {
                    h.Adapter.trigger(e, "hashchange")
                })
            }
        }, (!h.options || !h.options.delayInit) && h.init()
    }(window);
! function (e) {
    e(".collection-sidebar") && History.Adapter.bind(window, "statechange", function () {
        if (History.getState(), !t.isSidebarAjaxClick) {
            t.sidebarParams();
            var i = t.sidebarCreateUrl();
            t.sidebarGetContent(i), t.reActivateSidebar()
        }
        t.isSidebarAjaxClick = !1
    }), window.use_color_swatch && (e(".swatch :radio").change(function () {
        var i = e(this).closest(".swatch").attr("data-option-index"),
            t = e(this).val();
        e(this).closest("form").find(".single-option-selector").eq(i).val(t).trigger("change")
    }), Shopify.optionsMap = {}, Shopify.updateOptionsInSelector = function (i) {
        switch (i) {
            case 0:
                var t = "root",
                    a = e(".single-option-selector:eq(0)");
                break;
            case 1:
                t = e(".single-option-selector:eq(0)").val(), a = e(".single-option-selector:eq(1)");
                break;
            case 2:
                t = e(".single-option-selector:eq(0)").val(), t += " / " + e(".single-option-selector:eq(1)").val(), a = e(".single-option-selector:eq(2)")
        }
        var o = a.val();
        a.empty();
        var n = Shopify.optionsMap[t];
        if (n && n.length) {
            for (var r = 0; r < n.length; r++) {
                var s = n[r],
                    l = e("<option></option>").val(s).html(s);
                a.append(l)
            }
            e('.swatch[data-option-index="' + i + '"] .swatch-element').each(function () {
                -1 !== e.inArray(e(this).attr("data-value"), n) ? e(this).removeClass("soldout").show().find(":radio").removeAttr("disabled", "disabled").removeAttr("checked") : e(this).addClass("soldout").hide().find(":radio").removeAttr("checked").attr("disabled", "disabled")
            }), -1 !== e.inArray(o, n) && a.val(o), a.trigger("change")
        }
    }, Shopify.linkOptionSelectors = function (i) {
        for (var t = 0; t < i.variants.length; t++) {
            var a = i.variants[t];
            if (a.available) {
                if (Shopify.optionsMap.root = Shopify.optionsMap.root || [], Shopify.optionsMap.root.push(a.option1), Shopify.optionsMap.root = Shopify.uniq(Shopify.optionsMap.root), i.options.length > 1) {
                    var o = a.option1;
                    Shopify.optionsMap[o] = Shopify.optionsMap[o] || [], Shopify.optionsMap[o].push(a.option2), Shopify.optionsMap[o] = Shopify.uniq(Shopify.optionsMap[o])
                }
                3 === i.options.length && (o = a.option1 + " / " + a.option2, Shopify.optionsMap[o] = Shopify.optionsMap[o] || [], Shopify.optionsMap[o].push(a.option3), Shopify.optionsMap[o] = Shopify.uniq(Shopify.optionsMap[o]))
            }
        }
        Shopify.updateOptionsInSelector(0), i.options.length > 1 && Shopify.updateOptionsInSelector(1), 3 === i.options.length && Shopify.updateOptionsInSelector(2), e(".single-option-selector:eq(0)").change(function () {
            return Shopify.updateOptionsInSelector(1), 3 === i.options.length && Shopify.updateOptionsInSelector(2), !0
        }), e(".single-option-selector:eq(1)").change(function () {
            return 3 === i.options.length && Shopify.updateOptionsInSelector(2), !0
        })
    }), e(document).ready(function () {
        t.init()
    }), e(window).resize(function () {
        t.initMobileMenu(), t.initResizeImage()
    }), e(window).scroll(function () {
        e(this).scrollTop() > 200 ? e("#back-top").fadeIn() : e("#back-top").fadeOut()
    }), e(".header-mobile").is(":visible") || e(document).on("click touchstart", function (i) {
        var a = e(".quick-view"),
            o = e("#dropdown-cart"),
            n = e("#cartToggle"),
            r = e("#email-modal .modal-window"),
            s = e(".nav-search");
        a.is(i.target) || 0 !== a.has(i.target).length || o.is(i.target) || 0 !== o.has(i.target).length || n.is(i.target) || 0 !== n.has(i.target).length || r.is(i.target) || 0 !== r.has(i.target).length || s.is(i.target) || 0 !== s.has(i.target).length || (t.closeQuickViewPopup(), t.closeDropdownCart(), t.closeEmailModalWindow(), t.closeDropdownSearch())
    }), e(document).keyup(function (i) {
        27 == i.keyCode && (t.closeQuickViewPopup(), t.closeDropdownCart(), t.closeDropdownSearch(), clearTimeout(t.ellaTimeout), e(".modal").is(":visible") && e(".modal").fadeOut(500))
    });
    var t = {
        ellaTimeout: null,
        isSidebarAjaxClick: !1,
        init: function () {
            this.initColorSwatchGrid(), this.initResizeImage(), this.initMobileMenu(), this.initSidebar(), this.initMobileSidebar(), this.initScrollTop(), this.initQuickView(), this.initCloudzoom(), this.initProductMoreview(), this.initAddToCart(), this.initModal(), this.initProductAddToCart(), this.initDropDownCart(), this.initDropdownSearch(), this.initToggleCollectionPanel(), this.initWishlist(), this.initProductWishlist(), this.initRemoveWishlist(), this.initInfiniteScrolling()
        },
        sidebarMapTagEvents: function () {
            e('.sidebar-tag a:not(".clear"), .sidebar-tag label').click(function (i) {
                var a = [];
                if (Shopify.queryParams.constraint && (a = Shopify.queryParams.constraint.split("+")), !window.enable_sidebar_multiple_choice && !e(this).prev().is(":checked")) {
                    var o, n, r = e(this).parents(".sidebar-tag").find("input:checked");
                    r.length > 0 && (o = r.val()) && (n = a.indexOf(o)) >= 0 && a.splice(n, 1)
                }(o = e(this).prev().val()) && ((n = a.indexOf(o)) >= 0 ? a.splice(n, 1) : a.push(o)), a.length ? Shopify.queryParams.constraint = a.join("+") : delete Shopify.queryParams.constraint, t.sidebarAjaxClick(), i.preventDefault()
            })
        },
        sidebarMapCategories: function () {
            e(".sidebar-links a").click(function (i) {
                e(this).hasClass("active") || (delete Shopify.queryParams.q, t.sidebarAjaxClick(e(this).attr("href")), e(".sidebar-links a.active").removeClass("active"), e(this).addClass("active")), i.preventDefault()
            })
        },
        sidebarMapView: function () {
            e(".view-mode a").click(function (i) {
                if (!e(this).hasClass("active")) {
                    var a = e(".filter-show > button span").text();
                    e(this).hasClass("list") ? Shopify.queryParams.view = "list" + a : Shopify.queryParams.view = a, t.sidebarAjaxClick(), e(".view-mode a.active").removeClass("active"), e(this).addClass("active")
                }
                i.preventDefault()
            })
        },
        sidebarMapShow: function () {
            e(".filter-show a").click(function (i) {
                if (!e(this).parent().hasClass("active")) {
                    var a = e(this).attr("href"),
                        o = e(".view-mode a.active").attr("href");
                    Shopify.queryParams.view = "list" == o ? "list" + a : a, t.sidebarAjaxClick(), e(".filter-show > button span").text(a), e(".filter-show li.active").removeClass("active"), e(this).parent().addClass("active")
                }
                i.preventDefault()
            })
        },
        sidebarInitToggle: function () {
        
        },
        sidebarMapSorting: function (i) {
            e(".filter-sortby a").click(function (i) {
                if (!e(this).parent().hasClass("active")) {
                    Shopify.queryParams.sort_by = e(this).attr("href"), t.sidebarAjaxClick();
                    var a = e(this).text();
                    e(".filter-sortby > button span").text(a), e(".filter-sortby li.active").removeClass("active"), e(this).parent().addClass("active")
                }
                i.preventDefault()
            })
        },
        sidebarMapPaging: function () {
            e(".pagination-page a").click(function (i) {
                var a = e(this).attr("href").match(/page=\d+/g);
                if (a && (Shopify.queryParams.page = parseInt(a[0].match(/\d+/g)), Shopify.queryParams.page)) {
                    var o = t.sidebarCreateUrl();
                    t.isSidebarAjaxClick = !0, History.pushState({
                        param: Shopify.queryParams
                    }, o, o), t.sidebarGetContent(o), e("body,html").animate({
                        scrollTop: 0
                    }, 600)
                }
                i.preventDefault()
            })
        },
        sidebarMapClearAll: function () {
            e(".refined-widgets a.clear-all").click(function (i) {
                delete Shopify.queryParams.constraint, delete Shopify.queryParams.q, t.sidebarAjaxClick(), i.preventDefault()
            })
        },
        sidebarMapClear: function () {
            e(".sidebar-tag").each(function () {
                var i = e(this);
                i.find("input:checked").length > 0 && i.find(".clear").show().click(function (a) {
                    console.log("im clicked");
                    var o = [];
                    Shopify.queryParams.constraint && (o = Shopify.queryParams.constraint.split("+")), i.find("input:checked").each(function () {
                        var i = e(this).val();
                        if (i) {
                            var t = o.indexOf(i);
                            t >= 0 && o.splice(t, 1)
                        }
                    }), o.length ? Shopify.queryParams.constraint = o.join("+") : delete Shopify.queryParams.constraint, t.sidebarAjaxClick(), a.preventDefault()
                })
            })
        },
        sidebarMapEvents: function () {
            t.sidebarMapTagEvents(), t.sidebarMapCategories(), t.sidebarMapView(), t.sidebarMapShow(), t.sidebarMapSorting()
        },
        reActivateSidebar: function () {
            e(".sidebar-custom .active, .sidebar-links .active").removeClass("active"), e(".sidebar-tag input:checked").attr("checked", !1);
            var i = location.pathname.match(/\/collections\/(.*)(\?)?/);
            if (i && i[1] && e(".sidebar-links a[href='" + i[0] + "']").addClass("active"), Shopify.queryParams.view) {
                e(".view-mode .active").removeClass("active");
                var a = Shopify.queryParams.view;
                a.indexOf("list") >= 0 ? (e(".view-mode .list").addClass("active"), a = a.replace("list", "")) : e(".view-mode .grid").addClass("active"), e(".filter-show > button span").text(a), e(".filter-show li.active").removeClass("active"), e(".filter-show a[href='" + a + "']").parent().addClass("active")
            }
            t.initSortby()
        },
        initSortby: function () {
            if (Shopify.queryParams.sort_by) {
                var i = Shopify.queryParams.sort_by,
                    t = e(".filter-sortby a[href='" + i + "']").text();
                e(".filter-sortby > button span").text(t), e(".filter-sortby li.active").removeClass("active"), e(".filter-sortby a[href='" + i + "']").parent().addClass("active")
            }
        },
        sidebarMapData: function (i) {
            var a = e(".col-main .products-grid");
            0 == a.length && (a = e(".col-main .product-list"));
            var o = e(i).find(".col-main .products-grid");
            0 == o.length && (o = e(i).find(".col-main .product-list")), o.length > 0 && o.hasClass("products-grid") && window.product_image_resize && o.find("img").fakecrop({
                fill: window.images_size.is_crop,
                widthSelector: ".products-grid .grid-item .product-image",
                ratioWrapper: window.images_size
            }), a.replaceWith(o), t.checkNeedToConvertCurrency() && Currency.convertAll(window.shop_currency, jQuery("#currencies").val(), ".col-main span.money", "money_format"), e(".padding").length > 0 ? e(".padding").replaceWith(e(i).find(".padding")) : e(".block-row.col-main").append(e(i).find(".padding"));
            var n = e(".page-header"),
                r = e(i).find(".page-header");
            if (n.find("h2").text() != r.find("h2").text() && (n.find("h2").replaceWith(r.find("h2")), n.find(".rte").length ? r.find(".rte").length ? n.find(".rte").replaceWith(r.find(".rte")) : n.find(".rte").hide() : r.find(".rte").length && n.find("h2").after(r.find(".rte"))), e(".refined-widgets").replaceWith(e(i).find(".refined-widgets")), e(".sidebar-block").replaceWith(e(i).find(".sidebar-block")), t.initColorSwatchGrid(), e(".spr-badge").length > 0) return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
        },
        sidebarCreateUrl: function (i) {
            var t = e.param(Shopify.queryParams).replace(/%2B/g, "+");
            return i ? "" != t ? i + "?" + t : i : location.pathname + "?" + t
        },
        sidebarAjaxClick: function (i) {
            delete Shopify.queryParams.page;
            var e = t.sidebarCreateUrl(i);
            t.isSidebarAjaxClick = !0, History.pushState({
                param: Shopify.queryParams
            }, e, e), t.sidebarGetContent(e)
        },
        sidebarGetContent: function (i) {
            e.ajax({
                type: "get",
                url: i,
                beforeSend: function () {
                    t.showLoading()
                },
                success: function (i) {
                    t.sidebarMapData(i), t.sidebarMapPaging(), t.translateBlock(".main-content"), t.sidebarMapTagEvents(), t.sidebarInitToggle(), t.sidebarMapClear(), t.sidebarMapClearAll(), t.hideLoading(), t.initQuickView(), t.initAddToCart(), t.initWishlist(), t.initInfiniteScrolling()
                },
                error: function (i, a) {
                    t.hideLoading(), e(".loading-modal").hide(), e(".ajax-error-message").text(e.parseJSON(i.responseText).description), t.showModal(".ajax-error-modal")
                }
            })
        },
        sidebarParams: function () {
            if (Shopify.queryParams = {}, location.search.length)
                for (var i, e = 0, t = location.search.substr(1).split("&"); e < t.length; e++)(i = t[e].split("=")).length > 1 && (Shopify.queryParams[decodeURIComponent(i[0])] = decodeURIComponent(i[1]))
        },
        initMobileSidebar: function () {
            e("footer").append("<a class='option-sidebar left' id='displayTextLeft' href='javascript:void(0)' title='Show Sidebar'><span>Show Sidebar</span></a>"), e("#displayTextLeft").click(function (i) {
                i.preventDefault(), e(".sidebar").is(":hidden") ? (e(".sidebar").fadeIn(800), e("body,html").animate({
                    scrollTop: 0
                }, 600), e("#displayTextLeft").toggleClass("hidden-arrow-left"), e("#displayTextLeft").attr("title", "hide-sidebar"), e("#displayTextLeft").html("<span>Hide Sidebar</span>")) : (e(".sidebar").fadeOut(800), e("#displayTextLeft").removeClass("hidden-arrow-left"), e("#displayTextLeft").attr("title", "show-sidebar"), e("#displayTextLeft").html("<span>Show sidebar</span>"))
            })
        },
        initSidebar: function () {
            e(".collection-sidebar").length > 0 && (t.sidebarParams(), t.initSortby(), t.sidebarMapEvents(), t.sidebarMapPaging(), t.sidebarInitToggle(), t.sidebarMapClear(), t.sidebarMapClearAll())
        },
        initMobileMenu: function () {
            0 == e(".gf-menu-device-container").find("ul.customer-links2").length && (e(".menu-block").is(":visible") ? (e(".gf-menu-device-container ul.gf-menu li.dropdown").each(function () {
                0 == e(this).find("> p.toogleClick").length && e(this).prepend('<p class="toogleClick">+</p>')
            }), 0 == e(".menu-block").children().hasClass("gf-menu-device-wrapper") && e(".menu-block").children().addClass("gf-menu-device-wrapper"), 0 == e(".gf-menu-device-container").find("ul.gf-menu").length && (e(".gf-menu-device-container").append(e(".nav-bar .container").html()), e(".gf-menu-device-container .site-nav").addClass("gf-menu"), e(".gf-menu-device-container .site-nav").removeClass("nav")), e("p.toogleClick").click(function () {
                e(this).hasClass("mobile-toggle-open") ? (e(this).next().next().hide(), e(this).removeClass("mobile-toggle-open")) : (e(this).next().next().show(), e(this).addClass("mobile-toggle-open"))
            }), e("p.toogleClick").show(), e("div.gf-menu-toggle").hide(), e(".nav-bar .container").hide(), 0 == e("ul.gf-menu").hasClass("clicked") && (e(".gf-menu").hide(), e(".gf-menu li.dropdown ul.site-nav-dropdown").hide()), e(".col-1 .inner ul.dropdown").parent().each(function () {
                0 == e(this).find("> p.toogleClick").length && e(this).prepend('<p class="toogleClick">+</p>')
            }), e(".cbp-spmenu span.icon-dropdown").remove(), e("ul.gf-menu li.dropdown").each(function () {
                0 == e(this).find("> p.toogleClick").length && e(this).prepend('<p class="toogleClick">+</p>')
            }), e("p.toogleClick").click(function () {
                e(this).hasClass("mobile-toggle-open") ? (e(this).next().next().hide(), e(this).removeClass("mobile-toggle-open")) : (e(this).next().next().show(), e(this).addClass("mobile-toggle-open"))
            }), e(".header-panel-bottom ul.customer-links").prependTo(e(".customer-area .dropdown-menu"))) : (e(".nav-bar .container").show(), e(".gf-menu").hide(), e(".customer-area ul.customer-links").appendTo(e(".header-panel-bottom")).after(e(".top-header"))), 0 == e(".menu-block").children().hasClass("gf-menu-device-wrapper") && e(".menu-block").children().addClass("resized"))
        },
        initWishlist: function () {
            e(".grid-item button.wishlist").click(function (i) {
                i.preventDefault();
                var a = e(this).parent(),
                    o = a.parents(".grid-item");
                e.ajax({
                    type: "POST",
                    url: "/contact",
                    data: a.serialize(),
                    beforeSend: function () {
                        t.showLoading()
                    },
                    success: function (i) {
                        t.hideLoading(), a.html('<a class="wishlist" href="/pages/wish-list" title="Go to wishlist"><span class="icon"></span><span>Go to wishlist</span></a>');
                        var n = o.find(".product-title").html(),
                            r = o.find("a > img").attr("src");
                        e(".ajax-success-modal").find(".ajax-product-title").html(n), e(".ajax-success-modal").find(".ajax-product-image").attr("src", r), e(".ajax-success-modal").find(".btn-go-to-wishlist").show(), e(".ajax-success-modal").find(".btn-go-to-cart").hide(), t.showModal(".ajax-success-modal")
                    },
                    error: function (i, a) {
                        t.hideLoading(), e(".loading-modal").hide(), e(".ajax-error-message").text(e.parseJSON(i.responseText).description), t.showModal(".ajax-error-modal")
                    }
                })
            })
        },
        initProductWishlist: function () {
            e(".product button.wishlist").click(function (i) {
                i.preventDefault();
                var a = e(this).parent();
                a.parents(".grid-item"), e.ajax({
                    type: "POST",
                    url: "/contact",
                    data: a.serialize(),
                    beforeSend: function () {
                        t.showLoading()
                    },
                    success: function (i) {
                        t.hideLoading(), a.html('<a class="wishlist" href="/pages/wish-list" title="Go to wishlist"><span class="icon"></span><span>Go to wishlist</span></a>');
                        var o = e(".product-title h2").html(),
                            n = e("#product-featured-image").attr("src");
                        e(".ajax-success-modal").find(".ajax-product-title").html(o), e(".ajax-success-modal").find(".ajax-product-image").attr("src", n), e(".ajax-success-modal").find(".btn-go-to-wishlist").show(), e(".ajax-success-modal").find(".btn-go-to-cart").hide(), t.showModal(".ajax-success-modal")
                    },
                    error: function (i, a) {
                        t.hideLoading(), e(".loading-modal").hide(), e(".ajax-error-message").text(e.parseJSON(i.responseText).description), t.showModal(".ajax-error-modal")
                    }
                })
            })
        },
        initRemoveWishlist: function () {
            e(".btn-remove-wishlist").click(function (i) {
                var a = e(this).parents("tr"),
                    o = a.find(".tag-id").val(),
                    n = jQuery("#remove-wishlist-form");
                n.find("input[name='contact[tags]']").val("x" + o), e.ajax({
                    type: "POST",
                    url: "/contact",
                    data: n.serialize(),
                    beforeSend: function () {
                        t.showLoading()
                    },
                    success: function (i) {
                        t.hideLoading(), a.fadeOut(1e3)
                    },
                    error: function (i, a) {
                        t.hideLoading(), e(".loading-modal").hide(), e(".ajax-error-message").text(e.parseJSON(i.responseText).description), t.showModal(".ajax-error-modal")
                    }
                })
            })
        },
        initColorSwatchGrid: function () {
            jQuery(".item-swatch li label").hover(function () {
                var i = jQuery(this).parent().find(".hidden a").attr("href");
                return jQuery(this).parents(".grid-item").find(".product-grid-image img").attr({
                    src: i
                }), !1
            })
        },
        initResizeImage: function () {
            window.product_image_resize && e(".products-grid .product-image img").fakecrop({
                fill: window.images_size.is_crop,
                widthSelector: ".products-grid .grid-item .product-image",
                ratioWrapper: window.images_size
            })
        },
        initInfiniteScrolling: function () {
            e(".infinite-scrolling").length > 0 && e(".infinite-scrolling a").click(function (i) {
                i.preventDefault(), e(this).hasClass("disabled") || t.doInfiniteScrolling()
            })
        },
        doInfiniteScrolling: function () {
            var i = e(".block-row .products-grid");
            if (i.length || (i = e(".block-row .product-list")), i) {
                var a = e(".infinite-scrolling a").first();
                e.ajax({
                    type: "GET",
                    url: a.attr("href"),
                    beforeSend: function () {
                        t.showLoading(), e(".loading-modal").show()
                    },
                    success: function (o) {
                        t.hideLoading();
                        var n = e(o).find(".block-row .products-grid");
                        if (n.length || (n = e(o).find(".block-row .product-list")), n.length && (n.hasClass("products-grid") && window.product_image_resize && n.children().find("img").fakecrop({
                                fill: window.images_size.is_crop,
                                widthSelector: ".products-grid .grid-item .product-image",
                                ratioWrapper: window.images_size
                            }), i.append(n.children()), t.translateBlock("." + i.attr("class")), t.initQuickView(), t.initAddToCart(), t.initWishlist(), e(o).find(".infinite-scrolling").length > 0 ? a.attr("href", e(o).find(".infinite-scrolling a").attr("href")) : (a.hide(), a.next().show()), window.show_multiple_currencies && window.shop_currency != jQuery("#currencies").val() && Currency.convertAll(window.shop_currency, jQuery("#currencies").val(), "span.money", "money_format"), t.initColorSwatchGrid(), e(".spr-badge").length > 0)) return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
                    },
                    error: function (i, a) {
                        t.hideLoading(), e(".loading-modal").hide(), e(".ajax-error-message").text(e.parseJSON(i.responseText).description), t.showModal(".ajax-error-modal")
                    },
                    dataType: "html"
                })
            }
        },
        closeEmailModalWindow: function () {
            e("#email-modal").length > 0 && e("#email-modal").is(":visible") && e("#email-modal .modal-window").fadeOut(600, function () {
                e("#email-modal .modal-overlay").fadeOut(600, function () {
                    e("#email-modal").hide(), e.cookie("emailSubcribeModal", "closed", {
                        expires: 1,
                        path: "/"
                    })
                })
            })
        },
        showModal: function (i) {
            e(i).fadeIn(500), t.ellaTimeout = setTimeout(function () {
                e(i).fadeOut(500)
            }, 5e3)
        },
        initToggleCollectionPanel: function () {
            e(".collection-sharing-btn").length > 0 && e(".collection-sharing-btn").click(function () {
                e(".collection-sharing-panel").toggle(), e(".collection-sharing-panel").is(":visible") ? (e(".collection-sharing-btn").addClass("btn-hover"), e(".collection-filter-panel").hide(), e(".collection-filter-btn").removeClass("btn-hover")) : e(".collection-sharing-btn").removeClass("btn-hover")
            }), e(".collection-filter-btn").length > 0 && (e(".collection-filter-btn").click(function () {
                e(".collection-filter-panel").toggle(), e(".collection-filter-panel").is(":visible") ? (e(".collection-filter-btn").addClass("btn-hover"), e(".collection-sharing-panel").hide(), e(".collection-sharing-btn").removeClass("btn-hover")) : e(".collection-filter-btn").removeClass("btn-hover")
            }), e(".collection-filter-panel select").change(function (i) {
                window.location = e(this).find("option:selected").val()
            }))
        },
        checkItemsInDropdownCart: function () {
            e("#dropdown-cart .mini-products-list").children().length > 0 ? (e("#dropdown-cart .no-items").hide(), e("#dropdown-cart .has-items").show()) : (e("#dropdown-cart .has-items").hide(), e("#dropdown-cart .no-items").show())
        },
        initModal: function () {
            e(".continue-shopping").click(function () {
                clearTimeout(t.ellaTimeout), e(".ajax-success-modal").fadeOut(500)
            }), e(".close-modal, .overlay").click(function () {
                clearTimeout(t.ellaTimeout), e(".ajax-success-modal").fadeOut(500)
            })
        },
        initDropDownCart: function () {
            "click" == window.dropdowncart_type ? e("#cartToggle").click(function () {
                e("#dropdown-cart").is(":visible") ? e("#dropdown-cart").slideUp("fast") : e("#dropdown-cart").slideDown("fast")
            }) : "ontouchstart" in document ? e("#cartToggle").click(function () {
                e("#dropdown-cart").is(":visible") ? e("#dropdown-cart").slideUp("fast") : e("#dropdown-cart").slideDown("fast")
            }) : (e("#cartToggle").hover(function () {
                e("#dropdown-cart").is(":visible") || e("#dropdown-cart").slideDown("fast")
            }), e(".wrapper-top-cart").mouseleave(function () {
                e("#dropdown-cart").slideUp("fast")
            })), t.checkItemsInDropdownCart(), e("#dropdown-cart .no-items a").click(function () {
                e("#dropdown-cart").slideUp("fast")
            }), e("#dropdown-cart .btn-remove").click(function (i) {
                i.preventDefault();
              setTimeout(function(){
                $('.ping-item-text').removeClass('ping-item-main-text-none');
                $('.ping-item-text p').removeClass('ping-item-text-none');
                $('.ping-item-section').removeClass('ping-item-section-show');
                }, 1000);
                var a = e(this).parents(".item").attr("id");
                a = a.match(/\d+/g), Shopify.removeItem(a, function (i) {
                    t.doUpdateDropdownCart(i)
                    $('.cart_t').text(i.item_count);
                })
            })
        },
        closeDropdownCart: function () {
            e("#dropdown-cart").is(":visible") && e("#dropdown-cart").slideUp("fast")
        },
        initDropdownSearch: function () {
            e(".nav-search .icon-search").click(function () {
                e(".header-bottom.on .search-bar").is(":visible") ? e(".header-bottom.on .search-bar").slideUp("fast") : e(".header-bottom.on .search-bar").slideDown("fast")
            })
        },
        closeDropdownSearch: function () {
            e(".header-bottom.on .search-bar").is(":visible") && e(".header-bottom.on .search-bar").slideUp("fast")
        },
        initProductMoreview: function () {
            e(".more-view-wrapper-owlslider").length > 0 ? this.initOwlMoreview() : e(".more-view-wrapper-jcarousel").length > 0 && this.initJcarouselMoreview()
        },
        initOwlMoreview: function () {
            e(".more-view-wrapper-owlslider ul").owlCarousel({
                navigation: !0,
                items: 1,
                itemsDesktop: [1199, 1],
                itemsDesktopSmall: [979, 1],
                itemsTablet: [768, 1],
                itemsTabletSmall: [540, 1],
                itemsMobile: [360, 1]
            }).css("visibility", "visible")
        },
        initJcarouselMoreview: function () {
            e(".more-view-wrapper-jcarousel ul").jcarousel({
                vertical: !0
            }).css("visibility", "visible"), e(".product-img-box").addClass("has-jcarousel"), e(".more-view-wrapper").css("visibility", "visible")
        },
        initCloudzoom: function () {
            e("#product-featured-image").length > 0 && (e(".visible-phone").is(":visible") ? (e("#product-featured-image").elevateZoom({
                gallery: "more-view-carousel",
                cursor: "pointer",
                galleryActiveClass: "active",
                imageCrossfade: !1,
                scrollZoom: !1,
                onImageSwapComplete: function () {
                    e(".zoomWrapper div").hide()
                },
                loadingIcon: window.loading_url
            }), e("#product-featured-image").bind("click", function (i) {
                return !1
            })) : (e("#product-featured-image").elevateZoom({
                gallery: "more-view-carousel",
                cursor: "pointer",
                galleryActiveClass: "active",
                imageCrossfade: !0,
                scrollZoom: !0,
                onImageSwapComplete: function () {
                    e(".zoomWrapper div").hide()
                },
                loadingIcon: window.loading_url
            }), e("#product-featured-image").bind("click", function (i) {
                var t = e("#product-featured-image").data("elevateZoom");
                return e.fancybox(t.getGalleryList()), !1
            })))
        },
        initScrollTop: function () {
            e("#back-top").click(function () {
                return e("body,html").animate({
                    scrollTop: 0
                }, 400), !1
            })
        },
        initProductAddToCart: function () {
            e("#product-add-to-cart").length > 0 && e("#product-add-to-cart").click(function (i) {
             /* setTimeout(function(){
                $('.ping-item-text').addClass('ping-item-main-text-none');
              }, 1000);*/
                if (i.preventDefault(), "disabled" != e(this).attr("disabled"))
                    if (window.ajax_cart) {
                        var a = e(".main-product-form select[name=id]").val();
                        a || (a = e(".main-product-form input[name=id]").val());
                        var o = e(".main-product-form input[name=quantity]").val();
                        o || (o = 1);
                        var n = e(".product-title h2").html(),
                            r = e("#product-featured-image").attr("src");
                        t.doAjaxAddToCart(a, o, n, r)
                    } else e(this).closest("form.main-product-form").submit();
                return !1
                
            })
            e("#product-add-to-cart-pin").length > 0 && e("#product-add-to-cart-pin").click(function (i) {
              setTimeout(function(){
                $('.ping-item-text').addClass('ping-item-main-text-none');
              }, 1000);
                if (i.preventDefault(), "disabled" != e(this).attr("disabled"))
                    if (window.ajax_cart) {
                        var a = e(".pin-cart-form select[name=id]").val();
                        a || (a = e(".pin-cart-form input[name=id]").val());
                        var o = e(".pin-cart-form input[name=quantity]").val();
                        o || (o = 1);
                        var n = e(".product-title h2").html(),
                            r = e("#product-featured-image").attr("src");
                        t.doAjaxAddToCartPin(a, o, n, r)
                    } else e(this).closest("form.pin-cart-form").submit();
                return !1
                
            })
        },
        initAddToCart: function () {
            e(".add-to-cart-btn").length > 0 && e(".add-to-cart-btn").click(function (i) {
               console.log('hhhhh');
                if (i.preventDefault(), "disabled" != e(this).attr("disabled")) {
                    var a = e(this).parents(".product-item"),
                        o = e(a).attr("id");
                    if (o = o.match(/\d+/g), window.ajax_cart) {
                        var n = e("#product-actions-" + o + " select[name=id]").val();
                        n || (n = e("#product-actions-" + o + " input[name=id]").val());
                        var r = e("#product-actions-" + o + " input[name=quantity]").val();
                        r || (r = 1);
                        var s = e(a).find(".product-title").html(),
                            l = e(a).find(".product-grid-image img").attr("src");
                        t.doAjaxAddToCart(n, r, s, l)
                    } else e("#product-actions-" + o).submit()
                }
                return !1
            })
        },
        showLoading: function () {
            e(".loading-modal").show()
        },
        hideLoading: function () {
            e(".loading-modal").hide()
        },
        doAjaxAddToCart: function (i, a, o, n) {
            e.ajax({
                type: "post",
                url: "/cart/add.js",
                data: "quantity=" + a + "&id=" + i,
                dataType: "json",
                beforeSend: function () {
                    t.showLoading()
                },
                success: function (i) {
                    t.hideLoading(), e(".ajax-success-modal").find(".ajax-product-title").html(t.translateText(o)), e(".ajax-success-modal").find(".ajax-product-image").attr("src", n), e(".ajax-success-modal").find(".btn-go-to-wishlist").hide(), e(".ajax-success-modal").find(".btn-go-to-cart").show(), t.showModal(".ajax-success-modal"), t.updateDropdownCart()
                },
                error: function (i, a) {
                    t.hideLoading(), e(".ajax-error-message").text(e.parseJSON(i.responseText).description), t.showModal(".ajax-error-modal")
                }
            })
        },
      doAjaxAddToCartPin: function (i, a, o, n) {
            e.ajax({
                type: "post",
                url: "/cart/add.js",
                data: "quantity=" + a + "&id=" + i,
                dataType: "json",
                beforeSend: function () {
                    t.showLoading()
                },
                success: function (i) {                  
                    t.hideLoading(), t.updateDropdownCart()
                },
                error: function (i, a) {
                    t.hideLoading(), e(".ajax-error-message").text(e.parseJSON(i.responseText).description), t.showModal(".ajax-error-modal")
                }
            })
        },
        initQuickView: function () {
            e(".quickview-button a").click(function () {
                var i = e(this).attr("id");
                return Shopify.getProduct(i, function (i) {
                    var a = e("#quickview-template").html();
                    e(".quick-view").html(a);
                    var o = e(".quick-view");
                    if (o.find(".product-title a").html(t.translateText(i.title)), o.find(".product-title a").attr("href", i.url), o.find(".product-vendor span").length > 0 && o.find(".product-vendor span").text(i.vendor), o.find(".product-type span").length > 0 && o.find(".product-type span").text(i.type), o.find(".product-inventory span").length > 0) {
                        var n = i.variants[0],
                            r = o.find(".product-inventory span");
                        n.available ? null != n.inventory_management ? r.text(n.inventory_quantity + " " + window.inventory_text.in_stock) : r.text(window.inventory_text.many_in_stock) : r.text(window.inventory_text.out_of_stock)
                    }
                    if (i.description.indexOf("[countdown]") > 0) {
                        var s = i.description.match(/\[countdown\](.*)\[\/countdown\]/);
                        s && s.length > 0 && (o.find(".countdown").show(), o.find(".quickview-clock").countdown(s[1], function (i) {
                            e(this).html(i.strftime("%Dd %H:%M:%S"))
                        }))
                    }
                    if (o.find(".product-description").length > 0) {
                        var l = (l = i.description.replace(/(<([^>]+)>)/gi, "")).replace(/\[countdown\](.*)\[\/countdown\]/g, "");
                        if (window.multi_lang && l.indexOf("[lang2]") > 0) {
                            var c = l.split("[lang2]");
                            l = null != jQuery.cookie("language") ? c[translator.current_lang - 1] : c[0]
                        }
                        l = l.split(" ").splice(0, 20).join(" ") + "...", o.find(".product-description").text(l)
                    } else o.find(".product-description").remove();
                    o.find(".price").html(Shopify.formatMoney(i.price, window.money_format)), o.find(".product-item").attr("id", "product-" + i.id), o.find(".variants").attr("id", "product-actions-" + i.id), o.find(".variants select").attr("id", "product-select-" + i.id), i.compare_at_price > i.price ? (o.find(".compare-price").html(Shopify.formatMoney(i.compare_at_price_max, window.money_format)).show(), o.find(".price").addClass("on-sale")) : (o.find(".compare-price").html(""), o.find(".price").removeClass("on-sale")), i.available ? (o.find(".total-price span").html(Shopify.formatMoney(i.price, window.money_format)), window.use_color_swatch ? t.createQuickViewVariantsSwatch(i, o) : t.createQuickViewVariants(i, o)) : (o.find("select, input, .total-price, .dec, .inc, .variants label").remove(), o.find(".add-to-cart-btn").text(window.inventory_text.unavailable).addClass("disabled").attr("disabled", "disabled")), o.find(".button").on("click", function () {
                        var i = o.find(".quantity").val(),
                            a = 1;
                        "+" == e(this).text() ? a = parseInt(i) + 1 : i > 1 && (a = parseInt(i) - 1), o.find(".quantity").val(a), o.find(".total-price").length > 0 && t.updatePricingQuickview()
                    }), window.show_multiple_currencies && Currency.convertAll(window.shop_currency, jQuery("#currencies").val(), "span.money", "money_format"), t.loadQuickViewSlider(i, o), t.initQuickviewAddToCart(), t.translateBlock(".quick-view"), e(".quick-view").fadeIn(500), e(".quick-view .total-price").length > 0 && e(".quick-view input[name=quantity]").on("change", t.updatePricingQuickview)
                }), !1
            }), e(".quick-view .overlay, .close-window").live("click", function () {
                return t.closeQuickViewPopup(), !1
            })
        },
        updatePricingQuickview: function () {
            var i = /([0-9]+[.|,][0-9]+[.|,][0-9]+)/g,
                t = e(".quick-view .price").text().match(i);
            if (t || (i = /([0-9]+[.|,][0-9]+)/g, t = e(".quick-view .price").text().match(i)), t) {
                var a = t[0],
                    o = a.replace(/[.|,]/g, "") * parseInt(e(".quick-view input[name=quantity]").val()),
                    n = Shopify.formatMoney(o, window.money_format);
                i = /([0-9]+[.|,][0-9]+[.|,][0-9]+)/g, n.match(i) || (i = /([0-9]+[.|,][0-9]+)/g), n = n.match(i)[0];
                var r = new RegExp(a, "g"),
                    s = e(".quick-view .price").html().replace(r, n);
                e(".quick-view .total-price span").html(s)
            }
        },
        initQuickviewAddToCart: function () {
            e(".quick-view .add-to-cart-btn").length > 0 && e(".quick-view .add-to-cart-btn").click(function () {
                var i = e(".quick-view select[name=id]").val();
                i || (i = e(".quick-view input[name=id]").val());
                var a = e(".quick-view input[name=quantity]").val();
                a || (a = 1);
                var o = e(".quick-view .product-title a").html(),
                    n = e(".quick-view .quickview-featured-image img").attr("src");
                t.doAjaxAddToCart(i, a, o, n), t.closeQuickViewPopup()
            })
        },
        updateDropdownCart: function () {
            Shopify.getCart(function (i) {
                t.doUpdateDropdownCart(i)
                $('.cart_t').text(i.item_count);
            })
        },
        doUpdateDropdownCart: function (i) {
            if (e("#cartCount").text(i.item_count), e("#dropdown-cart .summary .price").html(Shopify.formatMoney(i.total_price, window.money_format)), e("#dropdown-cart .mini-products-list").html(""), i.item_count > 0) {
                for (var a = 0; a < i.items.length; a++) {
                    var o = '<li class="item" id="cart-item-{ID}"><a href="{URL}" title="{TITLE}" class="product-image"><img src="{IMAGE}" alt="{TITLE}" style="max-width:75px; max-height:115px"></a><div class="product-details"><a href="javascript:void(0)" title="Remove This Item" class="btn-remove">X</a><p class="product-name"><a href="{URL}">{TITLE}</a></p><div class="cart-collateral">{QUANTITY} x <span class="price">{PRICE}</span></div></div></li>';
                    o = (o = (o = (o = (o = (o = o.replace(/\{ID\}/g, i.items[a].id)).replace(/\{URL\}/g, i.items[a].url)).replace(/\{TITLE\}/g, t.translateText(i.items[a].title))).replace(/\{QUANTITY\}/g, i.items[a].quantity)).replace(/\{IMAGE\}/g, Shopify.resizeImage(i.items[a].image, "original"))).replace(/\{PRICE\}/g, Shopify.formatMoney(i.items[a].price, window.money_format)), e("#dropdown-cart .mini-products-list").append(o)
                }
              e("#dropdown-cart .btn-remove").click(function (i) {
                i.preventDefault();
                var a = e(this).parents(".item").attr("id");
                a = a.match(/\d+/g), Shopify.removeItem(a, function (i) {
                  t.doUpdateDropdownCart(i)
                  $('.cart_t').text(i.item_count);
                })
                setTimeout(function(){
                $('.ping-item-text').removeClass('ping-item-main-text-none');
                $('.ping-item-text p').removeClass('ping-item-text-none');
                $('.ping-item-section').removeClass('ping-item-section-show');
                }, 1000);
              }), t.checkNeedToConvertCurrency() && Currency.convertAll(window.shop_currency, jQuery("#currencies").val(), "#dropdown-cart span.money", "money_format")
            }
            t.checkItemsInDropdownCart()
        },
        checkNeedToConvertCurrency: function () {
            return window.show_multiple_currencies && Currency.currentCurrency != shopCurrency
        },
        loadQuickViewSlider: function (a, o) {
            var n = Shopify.resizeImage(a.featured_image, "grande");
            if (o.find(".quickview-featured-image").append('<a href="' + a.url + '"><img src="' + n + '" title="' + a.title + '"/><div style="height: 100%; width: 100%; top:0; left:0 z-index: 2000; position: absolute; display: none; background: url(' + window.loading_url + ') 50% 50% no-repeat;"></div></a>'), a.images.length > 1) {
                var r = o.find(".more-view-wrapper ul"),
                    s = 0;
                for (i in a.images)
                    if (s < a.images.length) {
                        var l = '<li><a href="javascript:void(0)" data-image="' + Shopify.resizeImage(a.images[i], "grande") + '"><img src="' + Shopify.resizeImage(a.images[i], "compact") + '"  /></a></li>';
                        r.append(l), s += 1
                    } r.find("a").click(function () {
                    var i = o.find(".quickview-featured-image img"),
                        t = o.find(".quickview-featured-image div");
                    i.attr("src") != e(this).attr("data-image") && (i.attr("src", e(this).attr("data-image")), t.show(), i.load(function (i) {
                        t.hide(), e(this).unbind("load"), t.hide()
                    }))
                }), r.hasClass("quickview-more-views-owlslider") ? t.initQuickViewCarousel(r) : t.initQuickViewVerticalMoreview(r)
            } else o.find(".quickview-more-views").remove(), o.find(".quickview-more-view-wrapper-jcarousel").remove()
        },
        initQuickViewCarousel: function (i) {
            i && i.owlCarousel({
                navigation: !0,
                items: 5,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [979, 3],
                itemsTablet: [768, 3],
                itemsTabletSmall: [540, 3],
                itemsMobile: [360, 3]
            }).css("visibility", "visible")
        },
        initQuickViewVerticalMoreview: function (i) {
            i && (i.jcarousel({
                vertical: !0
            }), e(".product-img-box").addClass("has-jcarousel"), e(".more-view-wrapper").css("visibility", "visible"))
        },
        convertToSlug: function (i) {
            return i.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
        },
        createQuickViewVariantsSwatch: function (i, t) {
            if (i.variants.length > 1) {
                for (var a = 0; a < i.variants.length; a++) {
                    var o = '<option value="' + (p = i.variants[a]).id + '">' + p.title + "</option>";
                    t.find("form.variants > select").append(o)
                }
                new Shopify.OptionSelectors("product-select-" + i.id, {
                    product: i,
                    onVariantSelected: selectCallbackQuickview
                });
                var n = window.file_url.substring(0, window.file_url.lastIndexOf("?")),
                    r = window.asset_url.substring(0, window.asset_url.lastIndexOf("?")),
                    s = "";
                for (a = 0; a < i.options.length; a++) {
                    s += '<div class="swatch clearfix" data-option-index="' + a + '">', s += '<div class="header">' + i.options[a].name + "</div>";
                    var l = !1;
                    /Color|Colour/i.test(i.options[a].name) && (l = !0);
                    for (var c = new Array, d = 0; d < i.variants.length; d++) {
                        var p, u = (p = i.variants[d]).options[a],
                            h = this.convertToSlug(u),
                            f = "swatch-" + a + "-" + h;
                        c.indexOf(u) < 0 && (s += '<div data-value="' + u + '" class="swatch-element ' + (l ? "color" : "") + h + (p.available ? " available " : " soldout ") + '">', l && (s += '<div class="tooltip">' + u + "</div>"), s += '<input id="' + f + '" type="radio" name="option-' + a + '" value="' + u + '" ' + (0 == d ? " checked " : "") + (p.available ? "" : " disabled") + " />", s += l ? '<label for="' + f + '" style="background-color: ' + h + "; background-image: url(" + n + h + '.png)"><img class="crossed-out" src="' + r + 'soldout.png" /></label>' : '<label for="' + f + '">' + u + '<img class="crossed-out" src="' + r + 'soldout.png" /></label>', s += "</div>", p.available && e('.quick-view .swatch[data-option-index="' + a + '"] .' + h).removeClass("soldout").addClass("available").find(":radio").removeAttr("disabled"), c.push(u))
                    }
                    s += "</div>"
                }
                t.find("form.variants > select").after(s), t.find(".swatch :radio").change(function () {
                    var i = e(this).closest(".swatch").attr("data-option-index"),
                        t = e(this).val();
                    e(this).closest("form").find(".single-option-selector").eq(i).val(t).trigger("change")
                }), i.available && (Shopify.optionsMap = {}, Shopify.linkOptionSelectors(i))
            } else {
                t.find("form.variants > select").remove();
                var m = '<input type="hidden" name="id" value="' + i.variants[0].id + '">';
                t.find("form.variants").append(m)
            }
        },
        createQuickViewVariants: function (i, t) {
            if (i.variants.length > 1) {
                for (var a = 0; a < i.variants.length; a++) {
                    var o = i.variants[a],
                        n = '<option value="' + o.id + '">' + o.title + "</option>";
                    t.find("form.variants > select").append(n)
                }
                if (new Shopify.OptionSelectors("product-select-" + i.id, {
                        product: i,
                        onVariantSelected: selectCallbackQuickview
                    }), 1 == i.options.length) {
                    e(".selector-wrapper:eq(0)").prepend("<label>" + i.options[0].name + "</label>");
                    for (var r = i.variants, s = 0; s < r.length; s++) {
                        var l = r[s];
                        l.available || jQuery(".single-option-selector option").filter(function () {
                            return jQuery(this).html() === l.title
                        }).remove()
                    }
                }
                e(".quick-view .single-option-selector").selectize(), e(".quick-view .selectize-input input").attr("disabled", "disabled"), t.find("form.variants .selector-wrapper label").each(function (t, a) {
                    e(this).html(i.options[t].name)
                })
            } else {
                t.find("form.variants > select").remove();
                var c = '<input type="hidden" name="id" value="' + i.variants[0].id + '">';
                t.find("form.variants").append(c)
            }
        },
        closeQuickViewPopup: function () {
            e(".quick-view").fadeOut(500)
        },
        translateText: function (i) {
            if (!window.multi_lang || i.indexOf("|") < 0) return i;
            if (window.multi_lang) {
                var e = i.split("|");
                return translator.isLang2() ? e[1] : e[0]
            }
        },
        translateBlock: function (i) {
            window.multi_lang && translator.isLang2() && translator.doTranslate(i)
        }
    }
}(jQuery);;
window.Modernizr = function (a, b, c) {
        function u(a) {
            j.cssText = a
        }

        function v(a, b) {
            return u(prefixes.join(a + ";") + (b || ""))
        }

        function w(a, b) {
            return typeof a === b
        }

        function x(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function y(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : w(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = {},
            n = {},
            o = {},
            p = [],
            q = p.slice,
            r, s = {}.hasOwnProperty,
            t;
        !w(s, "undefined") && !w(s.call, "undefined") ? t = function (a, b) {
            return s.call(a, b)
        } : t = function (a, b) {
            return b in a && w(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function (b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = q.call(arguments, 1),
                e = function () {
                    if (this instanceof e) {
                        var a = function () {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(q.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(q.call(arguments)))
                };
            return e
        });
        for (var z in m) t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? "" : "no-") + r));
        return e.addTest = function (a, b) {
                if (typeof a == "object")
                    for (var d in a) t(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, u(""), i = k = null,
            function (a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function () {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + p.join(" ") : ""), e
    }(this, this.document),
    function (a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function () {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function () {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function (a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function (a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function () {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function () {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function (a) {
                                return function () {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function (a, b) {
            z[a] = b
        }, B.addFilter = function (a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function () {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
! function (s) {
    "use strict";

    function n(s) {
        return new RegExp("(^|\\s+)" + s + "(\\s+|$)")
    }
    var a, e, t;

    function c(s, n) {
        (a(s, n) ? t : e)(s, n)
    }
    "classList" in document.documentElement ? (a = function (s, n) {
        return s.classList.contains(n)
    }, e = function (s, n) {
        s.classList.add(n)
    }, t = function (s, n) {
        s.classList.remove(n)
    }) : (a = function (s, a) {
        return n(a).test(s.className)
    }, e = function (s, n) {
        a(s, n) || (s.className = s.className + " " + n)
    }, t = function (s, a) {
        s.className = s.className.replace(n(a), " ")
    }), s.classie = {
        hasClass: a,
        addClass: e,
        removeClass: t,
        toggleClass: c,
        has: a,
        add: e,
        remove: t,
        toggle: c
    }
}(window);
(function (e) {
    e.flexslider = function (t, n) {
        var r = e(t);
        r.vars = e.extend({}, e.flexslider.defaults, n);
        var i = r.vars.namespace,
            s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
            u = "click touchend MSPointerUp",
            a = "",
            f, l = r.vars.direction === "vertical",
            c = r.vars.reverse,
            h = r.vars.itemWidth > 0,
            p = r.vars.animation === "fade",
            d = r.vars.asNavFor !== "",
            v = {},
            m = !0;
        e.data(t, "flexslider", r);
        v = {
            init: function () {
                r.animating = !1;
                r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10);
                isNaN(r.currentSlide) && (r.currentSlide = 0);
                r.animatingTo = r.currentSlide;
                r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
                r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
                r.slides = e(r.vars.selector, r);
                r.container = e(r.containerSelector, r);
                r.count = r.slides.length;
                r.syncExists = e(r.vars.sync).length > 0;
                r.vars.animation === "slide" && (r.vars.animation = "swing");
                r.prop = l ? "top" : "marginLeft";
                r.args = {};
                r.manualPause = !1;
                r.stopped = !1;
                r.started = !1;
                r.startTimeout = null;
                r.transitions = !r.vars.video && !p && r.vars.useCSS && function () {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in t)
                        if (e.style[t[n]] !== undefined) {
                            r.pfx = t[n].replace("Perspective", "").toLowerCase();
                            r.prop = "-" + r.pfx + "-transform";
                            return !0
                        } return !1
                }();
                r.vars.controlsContainer !== "" && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer));
                r.vars.manualControls !== "" && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls));
                if (r.vars.randomize) {
                    r.slides.sort(function () {
                        return Math.round(Math.random()) - .5
                    });
                    r.container.empty().append(r.slides)
                }
                r.doMath();
                r.setup("init");
                r.vars.controlNav && v.controlNav.setup();
                r.vars.directionNav && v.directionNav.setup();
                r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard) && e(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!r.animating && (t === 39 || t === 37)) {
                        var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1;
                        r.flexAnimate(n, r.vars.pauseOnAction)
                    }
                });
                r.vars.mousewheel && r.bind("mousewheel", function (e, t, n, i) {
                    e.preventDefault();
                    var s = t < 0 ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(s, r.vars.pauseOnAction)
                });
                r.vars.pausePlay && v.pausePlay.setup();
                r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init();
                if (r.vars.slideshow) {
                    r.vars.pauseOnHover && r.hover(function () {
                        !r.manualPlay && !r.manualPause && r.pause()
                    }, function () {
                        !r.manualPause && !r.manualPlay && !r.stopped && r.play()
                    });
                    if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play()
                }
                d && v.asNav.setup();
                o && r.vars.touch && v.touch();
                (!p || p && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize);
                r.find("img").attr("draggable", "false");
                setTimeout(function () {
                    r.vars.start(r)
                }, 200)
            },
            asNav: {
                setup: function () {
                    r.asNav = !0;
                    r.animatingTo = Math.floor(r.currentSlide / r.move);
                    r.currentItem = r.currentSlide;
                    r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide");
                    if (!s) r.slides.on(u, function (t) {
                        t.preventDefault();
                        var n = e(this),
                            s = n.index(),
                            o = n.offset().left - e(r).scrollLeft();
                        if (o <= 0 && n.hasClass(i + "active-slide")) r.flexAnimate(r.getTarget("prev"), !0);
                        else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) {
                            r.direction = r.currentItem < s ? "next" : "prev";
                            r.flexAnimate(s, r.vars.pauseOnAction, !1, !0, !0)
                        }
                    });
                    else {
                        t._slider = r;
                        r.slides.each(function () {
                            var t = this;
                            t._gesture = new MSGesture;
                            t._gesture.target = t;
                            t.addEventListener("MSPointerDown", function (e) {
                                e.preventDefault();
                                e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                            }, !1);
                            t.addEventListener("MSGestureTap", function (t) {
                                t.preventDefault();
                                var n = e(this),
                                    i = n.index();
                                if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
                                    r.direction = r.currentItem < i ? "next" : "prev";
                                    r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0)
                                }
                            })
                        })
                    }
                }
            },
            controlNav: {
                setup: function () {
                    r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var t = r.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
                        n = 1,
                        s, o;
                    r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>');
                    if (r.pagingCount > 1)
                        for (var f = 0; f < r.pagingCount; f++) {
                            o = r.slides.eq(f);
                            s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + n + "</a>";
                            if ("thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
                                var l = o.attr("data-thumbcaption");
                                "" != l && undefined != l && (s += '<span class="' + i + 'caption">' + l + "</span>")
                            }
                            r.controlNavScaffold.append("<li>" + s + "</li>");
                            n++
                        }
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                    v.controlNav.set();
                    v.controlNav.active();
                    r.controlNavScaffold.delegate("a, img", u, function (t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) {
                            var n = e(this),
                                s = r.controlNav.index(n);
                            if (!n.hasClass(i + "active")) {
                                r.direction = s > r.currentSlide ? "next" : "prev";
                                r.flexAnimate(s, r.vars.pauseOnAction)
                            }
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                setupManual: function () {
                    r.controlNav = r.manualControls;
                    v.controlNav.active();
                    r.controlNav.bind(u, function (t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) {
                            var n = e(this),
                                s = r.controlNav.index(n);
                            if (!n.hasClass(i + "active")) {
                                s > r.currentSlide ? r.direction = "next" : r.direction = "prev";
                                r.flexAnimate(s, r.vars.pauseOnAction)
                            }
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                set: function () {
                    var t = r.vars.controlNav === "thumbnails" ? "img" : "a";
                    r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
                },
                active: function () {
                    r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active")
                },
                update: function (t, n) {
                    r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
                    v.controlNav.set();
                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
                    if (r.controlsContainer) {
                        e(r.controlsContainer).append(t);
                        r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.directionNav = e("." + i + "direction-nav li a", r)
                    }
                    v.directionNav.update();
                    r.directionNav.bind(u, function (t) {
                        t.preventDefault();
                        var n;
                        if (a === "" || a === t.type) {
                            n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev");
                            r.flexAnimate(n, r.vars.pauseOnAction)
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                update: function () {
                    var e = i + "disabled";
                    r.pagingCount === 1 ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function () {
                    var t = e('<div class="' + i + 'pauseplay"><a></a></div>');
                    if (r.controlsContainer) {
                        r.controlsContainer.append(t);
                        r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.pausePlay = e("." + i + "pauseplay a", r)
                    }
                    v.pausePlay.update(r.vars.slideshow ? i + "pause" : i + "play");
                    r.pausePlay.bind(u, function (t) {
                        t.preventDefault();
                        if (a === "" || a === t.type)
                            if (e(this).hasClass(i + "pause")) {
                                r.manualPause = !0;
                                r.manualPlay = !1;
                                r.pause()
                            } else {
                                r.manualPause = !1;
                                r.manualPlay = !0;
                                r.play()
                            } a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                update: function (e) {
                    e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText)
                }
            },
            touch: function () {
                var e, n, i, o, u, a, f = !1,
                    d = 0,
                    v = 0,
                    m = 0;
                if (!s) {
                    t.addEventListener("touchstart", g, !1);

                    function g(s) {
                        if (r.animating) s.preventDefault();
                        else if (window.navigator.msPointerEnabled || s.touches.length === 1) {
                            r.pause();
                            o = l ? r.h : r.w;
                            a = Number(new Date);
                            d = s.touches[0].pageX;
                            v = s.touches[0].pageY;
                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
                            e = l ? v : d;
                            n = l ? d : v;
                            t.addEventListener("touchmove", y, !1);
                            t.addEventListener("touchend", b, !1)
                        }
                    }

                    function y(t) {
                        d = t.touches[0].pageX;
                        v = t.touches[0].pageY;
                        u = l ? e - v : e - d;
                        f = l ? Math.abs(u) < Math.abs(d - n) : Math.abs(u) < Math.abs(v - n);
                        var s = 500;
                        if (!f || Number(new Date) - a > s) {
                            t.preventDefault();
                            if (!p && r.transitions) {
                                r.vars.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1);
                                r.setProps(i + u, "setTouch")
                            }
                        }
                    }

                    function b(s) {
                        t.removeEventListener("touchmove", y, !1);
                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
                            var l = c ? -u : u,
                                h = l > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(h) && (Number(new Date) - a < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        t.removeEventListener("touchend", b, !1);
                        e = null;
                        n = null;
                        u = null;
                        i = null
                    }
                } else {
                    t.style.msTouchAction = "none";
                    t._gesture = new MSGesture;
                    t._gesture.target = t;
                    t.addEventListener("MSPointerDown", w, !1);
                    t._slider = r;
                    t.addEventListener("MSGestureChange", E, !1);
                    t.addEventListener("MSGestureEnd", S, !1);

                    function w(e) {
                        e.stopPropagation();
                        if (r.animating) e.preventDefault();
                        else {
                            r.pause();
                            t._gesture.addPointer(e.pointerId);
                            m = 0;
                            o = l ? r.h : r.w;
                            a = Number(new Date);
                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o
                        }
                    }

                    function E(e) {
                        e.stopPropagation();
                        var n = e.target._slider;
                        if (!n) return;
                        var r = -e.translationX,
                            s = -e.translationY;
                        m += l ? s : r;
                        u = m;
                        f = l ? Math.abs(m) < Math.abs(-r) : Math.abs(m) < Math.abs(-s);
                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function () {
                                t._gesture.stop()
                            });
                            return
                        }
                        if (!f || Number(new Date) - a > 500) {
                            e.preventDefault();
                            if (!p && n.transitions) {
                                n.vars.animationLoop || (u = m / (n.currentSlide === 0 && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / o + 2 : 1));
                                n.setProps(i + u, "setTouch")
                            }
                        }
                    }

                    function S(t) {
                        t.stopPropagation();
                        var r = t.target._slider;
                        if (!r) return;
                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
                            var s = c ? -u : u,
                                l = s > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(l) && (Number(new Date) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2) ? r.flexAnimate(l, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        e = null;
                        n = null;
                        u = null;
                        i = null;
                        m = 0
                    }
                }
            },
            resize: function () {
                if (!r.animating && r.is(":visible")) {
                    h || r.doMath();
                    if (p) v.smoothHeight();
                    else if (h) {
                        r.slides.width(r.computedW);
                        r.update(r.pagingCount);
                        r.setProps()
                    } else if (l) {
                        r.viewport.height(r.h);
                        r.setProps(r.h, "setTotal")
                    } else {
                        r.vars.smoothHeight && v.smoothHeight();
                        r.newSlides.width(r.computedW);
                        r.setProps(r.computedW, "setTotal")
                    }
                }
            },
            smoothHeight: function (e) {
                if (!l || p) {
                    var t = p ? r : r.viewport;
                    e ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    }, e) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function (t) {
                var n = e(r.vars.sync).data("flexslider"),
                    i = r.animatingTo;
                switch (t) {
                    case "animate":
                        n.flexAnimate(i, r.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        !n.playing && !n.asNav && n.play();
                        break;
                    case "pause":
                        n.pause()
                }
            },
            uniqueID: function (t) {
                t.find("[id]").each(function () {
                    var t = e(this);
                    t.attr("id", t.attr("id") + "_clone")
                });
                return t
            },
            pauseInvisible: {
                visProp: null,
                init: function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) e[t] + "Hidden" in document && (v.pauseInvisible.visProp = e[t] + "Hidden");
                    if (v.pauseInvisible.visProp) {
                        var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(n, function () {
                            v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
                        })
                    }
                },
                isHidden: function () {
                    return document[v.pauseInvisible.visProp] || !1
                }
            },
            setToClearWatchedEvent: function () {
                clearTimeout(f);
                f = setTimeout(function () {
                    a = ""
                }, 3e3)
            }
        };
        r.flexAnimate = function (t, n, s, u, a) {
            !r.vars.animationLoop && t !== r.currentSlide && (r.direction = t > r.currentSlide ? "next" : "prev");
            d && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next" : "prev");
            if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) {
                if (d && u) {
                    var f = e(r.vars.asNavFor).data("flexslider");
                    r.atEnd = t === 0 || t === r.count - 1;
                    f.flexAnimate(t, !0, !1, !0, a);
                    r.direction = r.currentItem < t ? "next" : "prev";
                    f.direction = r.direction;
                    if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) {
                        r.currentItem = t;
                        r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                        return !1
                    }
                    r.currentItem = t;
                    r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                    t = Math.floor(t / r.visible)
                }
                r.animating = !0;
                r.animatingTo = t;
                n && r.pause();
                r.vars.before(r);
                r.syncExists && !a && v.sync("animate");
                r.vars.controlNav && v.controlNav.active();
                h || r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                r.atEnd = t === 0 || t === r.last;
                r.vars.directionNav && v.directionNav.update();
                if (t === r.last) {
                    r.vars.end(r);
                    r.vars.animationLoop || r.pause()
                }
                if (!p) {
                    var m = l ? r.slides.filter(":first").height() : r.computedW,
                        g, y, b;
                    if (h) {
                        g = r.vars.itemMargin;
                        b = (r.itemW + g) * r.move * r.animatingTo;
                        y = b > r.limit && r.visible !== 1 ? r.limit : b
                    } else r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next" ? y = c ? (r.count + r.cloneOffset) * m : 0 : r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev" ? y = c ? 0 : (r.count + 1) * m : y = c ? (r.count - 1 - t + r.cloneOffset) * m : (t + r.cloneOffset) * m;
                    r.setProps(y, "", r.vars.animationSpeed);
                    if (r.transitions) {
                        if (!r.vars.animationLoop || !r.atEnd) {
                            r.animating = !1;
                            r.currentSlide = r.animatingTo
                        }
                        r.container.unbind("webkitTransitionEnd transitionend");
                        r.container.bind("webkitTransitionEnd transitionend", function () {
                            r.wrapup(m)
                        })
                    } else r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function () {
                        r.wrapup(m)
                    })
                } else if (!o) {
                    r.slides.eq(r.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, r.vars.animationSpeed, r.vars.easing);
                    r.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, r.vars.animationSpeed, r.vars.easing, r.wrapup)
                } else {
                    r.slides.eq(r.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    });
                    r.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    });
                    r.wrapup(m)
                }
                r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed)
            }
        };
        r.wrapup = function (e) {
            !p && !h && (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop && r.setProps(e, "jumpStart"));
            r.animating = !1;
            r.currentSlide = r.animatingTo;
            r.vars.after(r)
        };
        r.animateSlides = function () {
            !r.animating && m && r.flexAnimate(r.getTarget("next"))
        };
        r.pause = function () {
            clearInterval(r.animatedSlides);
            r.animatedSlides = null;
            r.playing = !1;
            r.vars.pausePlay && v.pausePlay.update("play");
            r.syncExists && v.sync("pause")
        };
        r.play = function () {
            r.playing && clearInterval(r.animatedSlides);
            r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
            r.started = r.playing = !0;
            r.vars.pausePlay && v.pausePlay.update("pause");
            r.syncExists && v.sync("play")
        };
        r.stop = function () {
            r.pause();
            r.stopped = !0
        };
        r.canAdvance = function (e, t) {
            var n = d ? r.pagingCount - 1 : r.last;
            return t ? !0 : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !d ? !1 : r.vars.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0
        };
        r.getTarget = function (e) {
            r.direction = e;
            return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last : r.currentSlide - 1
        };
        r.setProps = function (e, t, n) {
            var i = function () {
                var n = e ? e : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
                    i = function () {
                        if (h) return t === "setTouch" ? e : c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n;
                        switch (t) {
                            case "setTotal":
                                return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
                            case "setTouch":
                                return c ? e : e;
                            case "jumpEnd":
                                return c ? e : r.count * e;
                            case "jumpStart":
                                return c ? r.count * e : e;
                            default:
                                return e
                        }
                    }();
                return i * -1 + "px"
            }();
            if (r.transitions) {
                i = l ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)";
                n = n !== undefined ? n / 1e3 + "s" : "0s";
                r.container.css("-" + r.pfx + "-transition-duration", n);
                r.container.css("transition-duration", n)
            }
            r.args[r.prop] = i;
            (r.transitions || n === undefined) && r.container.css(r.args);
            r.container.css("transform", i)
        };
        r.setup = function (t) {
            if (!p) {
                var n, s;
                if (t === "init") {
                    r.viewport = e('<div class="' + i + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(r).append(r.container);
                    r.cloneCount = 0;
                    r.cloneOffset = 0;
                    if (c) {
                        s = e.makeArray(r.slides).reverse();
                        r.slides = e(s);
                        r.container.empty().append(r.slides)
                    }
                }
                if (r.vars.animationLoop && !h) {
                    r.cloneCount = 2;
                    r.cloneOffset = 1;
                    t !== "init" && r.container.find(".clone").remove();
                    r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true"));
                    v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);
                    v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)
                }
                r.newSlides = e(r.vars.selector, r);
                n = c ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
                if (l && !h) {
                    r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function () {
                        r.newSlides.css({
                            display: "block"
                        });
                        r.doMath();
                        r.viewport.height(r.h);
                        r.setProps(n * r.h, "init")
                    }, t === "init" ? 100 : 0)
                } else {
                    r.container.width((r.count + r.cloneCount) * 200 + "%");
                    r.setProps(n * r.computedW, "init");
                    setTimeout(function () {
                        r.doMath();
                        r.newSlides.css({
                            width: r.computedW,
                            "float": "left",
                            display: "block"
                        });
                        r.vars.smoothHeight && v.smoothHeight()
                    }, t === "init" ? 100 : 0)
                }
            } else {
                r.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                });
                t === "init" && (o ? r.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : r.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, r.vars.animationSpeed, r.vars.easing));
                r.vars.smoothHeight && v.smoothHeight()
            }
            h || r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide");
            r.vars.init(r)
        };
        r.doMath = function () {
            var e = r.slides.first(),
                t = r.vars.itemMargin,
                n = r.vars.minItems,
                i = r.vars.maxItems;
            r.w = r.viewport === undefined ? r.width() : r.viewport.width();
            r.h = e.height();
            r.boxPadding = e.outerWidth() - e.width();
            if (h) {
                r.itemT = r.vars.itemWidth + t;
                r.minW = n ? n * r.itemT : r.w;
                r.maxW = i ? i * r.itemT - t : r.w;
                r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth;
                r.visible = Math.floor(r.w / r.itemW);
                r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible;
                r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
                r.last = r.pagingCount - 1;
                r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t
            } else {
                r.itemW = r.w;
                r.pagingCount = r.count;
                r.last = r.count - 1
            }
            r.computedW = r.itemW - r.boxPadding
        };
        r.update = function (e, t) {
            r.doMath();
            if (!h) {
                e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1);
                r.animatingTo = r.currentSlide
            }
            if (r.vars.controlNav && !r.manualControls)
                if (t === "add" && !h || r.pagingCount > r.controlNav.length) v.controlNav.update("add");
                else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) {
                if (h && r.currentSlide > r.last) {
                    r.currentSlide -= 1;
                    r.animatingTo -= 1
                }
                v.controlNav.update("remove", r.last)
            }
            r.vars.directionNav && v.directionNav.update()
        };
        r.addSlide = function (t, n) {
            var i = e(t);
            r.count += 1;
            r.last = r.count - 1;
            l && c ? n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i);
            r.update(n, "add");
            r.slides = e(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.added(r)
        };
        r.removeSlide = function (t) {
            var n = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1;
            r.last = r.count - 1;
            isNaN(t) ? e(t, r.slides).remove() : l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
            r.doMath();
            r.update(n, "remove");
            r.slides = e(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.removed(r)
        };
        v.init()
    };
    e(window).blur(function (e) {
        focused = !1
    }).focus(function (e) {
        focused = !0
    });
    e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {},
        init: function () {}
    };
    e.fn.flexslider = function (t) {
        t === undefined && (t = {});
        if (typeof t == "object") return this.each(function () {
            var n = e(this),
                r = t.selector ? t.selector : ".slides > li",
                i = n.find(r);
            if (i.length === 1 && t.allowOneSlide === !0 || i.length === 0) {
                i.fadeIn(400);
                t.start && t.start(n)
            } else n.data("flexslider") === undefined && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
            case "play":
                n.play();
                break;
            case "pause":
                n.pause();
                break;
            case "stop":
                n.stop();
                break;
            case "next":
                n.flexAnimate(n.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                n.flexAnimate(n.getTarget("prev"), !0);
                break;
            default:
                typeof t == "number" && n.flexAnimate(t, !0)
        }
    }
})(jQuery);
(function (e) {
    e.flexslider = function (t, n) {
        var r = e(t);
        r.vars = e.extend({}, e.flexslider.defaults, n);
        var i = r.vars.namespace,
            s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
            u = "click touchend MSPointerUp",
            a = "",
            f, l = r.vars.direction === "vertical",
            c = r.vars.reverse,
            h = r.vars.itemWidth > 0,
            p = r.vars.animation === "fade",
            d = r.vars.asNavFor !== "",
            v = {},
            m = !0;
        e.data(t, "flexslider", r);
        v = {
            init: function () {
                r.animating = !1;
                r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10);
                isNaN(r.currentSlide) && (r.currentSlide = 0);
                r.animatingTo = r.currentSlide;
                r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
                r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
                r.slides = e(r.vars.selector, r);
                r.container = e(r.containerSelector, r);
                r.count = r.slides.length;
                r.syncExists = e(r.vars.sync).length > 0;
                r.vars.animation === "slide" && (r.vars.animation = "swing");
                r.prop = l ? "top" : "marginLeft";
                r.args = {};
                r.manualPause = !1;
                r.stopped = !1;
                r.started = !1;
                r.startTimeout = null;
                r.transitions = !r.vars.video && !p && r.vars.useCSS && function () {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in t)
                        if (e.style[t[n]] !== undefined) {
                            r.pfx = t[n].replace("Perspective", "").toLowerCase();
                            r.prop = "-" + r.pfx + "-transform";
                            return !0
                        } return !1
                }();
                r.vars.controlsContainer !== "" && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer));
                r.vars.manualControls !== "" && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls));
                if (r.vars.randomize) {
                    r.slides.sort(function () {
                        return Math.round(Math.random()) - .5
                    });
                    r.container.empty().append(r.slides)
                }
                r.doMath();
                r.setup("init");
                r.vars.controlNav && v.controlNav.setup();
                r.vars.directionNav && v.directionNav.setup();
                r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard) && e(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!r.animating && (t === 39 || t === 37)) {
                        var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1;
                        r.flexAnimate(n, r.vars.pauseOnAction)
                    }
                });
                r.vars.mousewheel && r.bind("mousewheel", function (e, t, n, i) {
                    e.preventDefault();
                    var s = t < 0 ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(s, r.vars.pauseOnAction)
                });
                r.vars.pausePlay && v.pausePlay.setup();
                r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init();
                if (r.vars.slideshow) {
                    r.vars.pauseOnHover && r.hover(function () {
                        !r.manualPlay && !r.manualPause && r.pause()
                    }, function () {
                        !r.manualPause && !r.manualPlay && !r.stopped && r.play()
                    });
                    if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play()
                }
                d && v.asNav.setup();
                o && r.vars.touch && v.touch();
                (!p || p && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize);
                r.find("img").attr("draggable", "false");
                setTimeout(function () {
                    r.vars.start(r)
                }, 200)
            },
            asNav: {
                setup: function () {
                    r.asNav = !0;
                    r.animatingTo = Math.floor(r.currentSlide / r.move);
                    r.currentItem = r.currentSlide;
                    r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide");
                    if (!s) r.slides.on(u, function (t) {
                        t.preventDefault();
                        var n = e(this),
                            s = n.index(),
                            o = n.offset().left - e(r).scrollLeft();
                        if (o <= 0 && n.hasClass(i + "active-slide")) r.flexAnimate(r.getTarget("prev"), !0);
                        else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) {
                            r.direction = r.currentItem < s ? "next" : "prev";
                            r.flexAnimate(s, r.vars.pauseOnAction, !1, !0, !0)
                        }
                    });
                    else {
                        t._slider = r;
                        r.slides.each(function () {
                            var t = this;
                            t._gesture = new MSGesture;
                            t._gesture.target = t;
                            t.addEventListener("MSPointerDown", function (e) {
                                e.preventDefault();
                                e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                            }, !1);
                            t.addEventListener("MSGestureTap", function (t) {
                                t.preventDefault();
                                var n = e(this),
                                    i = n.index();
                                if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
                                    r.direction = r.currentItem < i ? "next" : "prev";
                                    r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0)
                                }
                            })
                        })
                    }
                }
            },
            controlNav: {
                setup: function () {
                    r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var t = r.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
                        n = 1,
                        s, o;
                    r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>');
                    if (r.pagingCount > 1)
                        for (var f = 0; f < r.pagingCount; f++) {
                            o = r.slides.eq(f);
                            s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + n + "</a>";
                            if ("thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
                                var l = o.attr("data-thumbcaption");
                                "" != l && undefined != l && (s += '<span class="' + i + 'caption">' + l + "</span>")
                            }
                            r.controlNavScaffold.append("<li>" + s + "</li>");
                            n++
                        }
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                    v.controlNav.set();
                    v.controlNav.active();
                    r.controlNavScaffold.delegate("a, img", u, function (t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) {
                            var n = e(this),
                                s = r.controlNav.index(n);
                            if (!n.hasClass(i + "active")) {
                                r.direction = s > r.currentSlide ? "next" : "prev";
                                r.flexAnimate(s, r.vars.pauseOnAction)
                            }
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                setupManual: function () {
                    r.controlNav = r.manualControls;
                    v.controlNav.active();
                    r.controlNav.bind(u, function (t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) {
                            var n = e(this),
                                s = r.controlNav.index(n);
                            if (!n.hasClass(i + "active")) {
                                s > r.currentSlide ? r.direction = "next" : r.direction = "prev";
                                r.flexAnimate(s, r.vars.pauseOnAction)
                            }
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                set: function () {
                    var t = r.vars.controlNav === "thumbnails" ? "img" : "a";
                    r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
                },
                active: function () {
                    r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active")
                },
                update: function (t, n) {
                    r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
                    v.controlNav.set();
                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
                    if (r.controlsContainer) {
                        e(r.controlsContainer).append(t);
                        r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.directionNav = e("." + i + "direction-nav li a", r)
                    }
                    v.directionNav.update();
                    r.directionNav.bind(u, function (t) {
                        t.preventDefault();
                        var n;
                        if (a === "" || a === t.type) {
                            n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev");
                            r.flexAnimate(n, r.vars.pauseOnAction)
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                update: function () {
                    var e = i + "disabled";
                    r.pagingCount === 1 ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function () {
                    var t = e('<div class="' + i + 'pauseplay"><a></a></div>');
                    if (r.controlsContainer) {
                        r.controlsContainer.append(t);
                        r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.pausePlay = e("." + i + "pauseplay a", r)
                    }
                    v.pausePlay.update(r.vars.slideshow ? i + "pause" : i + "play");
                    r.pausePlay.bind(u, function (t) {
                        t.preventDefault();
                        if (a === "" || a === t.type)
                            if (e(this).hasClass(i + "pause")) {
                                r.manualPause = !0;
                                r.manualPlay = !1;
                                r.pause()
                            } else {
                                r.manualPause = !1;
                                r.manualPlay = !0;
                                r.play()
                            } a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                update: function (e) {
                    e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText)
                }
            },
            touch: function () {
                var e, n, i, o, u, a, f = !1,
                    d = 0,
                    v = 0,
                    m = 0;
                if (!s) {
                    t.addEventListener("touchstart", g, !1);

                    function g(s) {
                        if (r.animating) s.preventDefault();
                        else if (window.navigator.msPointerEnabled || s.touches.length === 1) {
                            r.pause();
                            o = l ? r.h : r.w;
                            a = Number(new Date);
                            d = s.touches[0].pageX;
                            v = s.touches[0].pageY;
                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
                            e = l ? v : d;
                            n = l ? d : v;
                            t.addEventListener("touchmove", y, !1);
                            t.addEventListener("touchend", b, !1)
                        }
                    }

                    function y(t) {
                        d = t.touches[0].pageX;
                        v = t.touches[0].pageY;
                        u = l ? e - v : e - d;
                        f = l ? Math.abs(u) < Math.abs(d - n) : Math.abs(u) < Math.abs(v - n);
                        var s = 500;
                        if (!f || Number(new Date) - a > s) {
                            t.preventDefault();
                            if (!p && r.transitions) {
                                r.vars.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1);
                                r.setProps(i + u, "setTouch")
                            }
                        }
                    }

                    function b(s) {
                        t.removeEventListener("touchmove", y, !1);
                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
                            var l = c ? -u : u,
                                h = l > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(h) && (Number(new Date) - a < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        t.removeEventListener("touchend", b, !1);
                        e = null;
                        n = null;
                        u = null;
                        i = null
                    }
                } else {
                    t.style.msTouchAction = "none";
                    t._gesture = new MSGesture;
                    t._gesture.target = t;
                    t.addEventListener("MSPointerDown", w, !1);
                    t._slider = r;
                    t.addEventListener("MSGestureChange", E, !1);
                    t.addEventListener("MSGestureEnd", S, !1);

                    function w(e) {
                        e.stopPropagation();
                        if (r.animating) e.preventDefault();
                        else {
                            r.pause();
                            t._gesture.addPointer(e.pointerId);
                            m = 0;
                            o = l ? r.h : r.w;
                            a = Number(new Date);
                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o
                        }
                    }

                    function E(e) {
                        e.stopPropagation();
                        var n = e.target._slider;
                        if (!n) return;
                        var r = -e.translationX,
                            s = -e.translationY;
                        m += l ? s : r;
                        u = m;
                        f = l ? Math.abs(m) < Math.abs(-r) : Math.abs(m) < Math.abs(-s);
                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function () {
                                t._gesture.stop()
                            });
                            return
                        }
                        if (!f || Number(new Date) - a > 500) {
                            e.preventDefault();
                            if (!p && n.transitions) {
                                n.vars.animationLoop || (u = m / (n.currentSlide === 0 && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / o + 2 : 1));
                                n.setProps(i + u, "setTouch")
                            }
                        }
                    }

                    function S(t) {
                        t.stopPropagation();
                        var r = t.target._slider;
                        if (!r) return;
                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
                            var s = c ? -u : u,
                                l = s > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(l) && (Number(new Date) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2) ? r.flexAnimate(l, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        e = null;
                        n = null;
                        u = null;
                        i = null;
                        m = 0
                    }
                }
            },
            resize: function () {
                if (!r.animating && r.is(":visible")) {
                    h || r.doMath();
                    if (p) v.smoothHeight();
                    else if (h) {
                        r.slides.width(r.computedW);
                        r.update(r.pagingCount);
                        r.setProps()
                    } else if (l) {
                        r.viewport.height(r.h);
                        r.setProps(r.h, "setTotal")
                    } else {
                        r.vars.smoothHeight && v.smoothHeight();
                        r.newSlides.width(r.computedW);
                        r.setProps(r.computedW, "setTotal")
                    }
                }
            },
            smoothHeight: function (e) {
                if (!l || p) {
                    var t = p ? r : r.viewport;
                    e ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    }, e) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function (t) {
                var n = e(r.vars.sync).data("flexslider"),
                    i = r.animatingTo;
                switch (t) {
                    case "animate":
                        n.flexAnimate(i, r.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        !n.playing && !n.asNav && n.play();
                        break;
                    case "pause":
                        n.pause()
                }
            },
            uniqueID: function (t) {
                t.find("[id]").each(function () {
                    var t = e(this);
                    t.attr("id", t.attr("id") + "_clone")
                });
                return t
            },
            pauseInvisible: {
                visProp: null,
                init: function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) e[t] + "Hidden" in document && (v.pauseInvisible.visProp = e[t] + "Hidden");
                    if (v.pauseInvisible.visProp) {
                        var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(n, function () {
                            v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
                        })
                    }
                },
                isHidden: function () {
                    return document[v.pauseInvisible.visProp] || !1
                }
            },
            setToClearWatchedEvent: function () {
                clearTimeout(f);
                f = setTimeout(function () {
                    a = ""
                }, 3e3)
            }
        };
        r.flexAnimate = function (t, n, s, u, a) {
            !r.vars.animationLoop && t !== r.currentSlide && (r.direction = t > r.currentSlide ? "next" : "prev");
            d && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next" : "prev");
            if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) {
                if (d && u) {
                    var f = e(r.vars.asNavFor).data("flexslider");
                    r.atEnd = t === 0 || t === r.count - 1;
                    f.flexAnimate(t, !0, !1, !0, a);
                    r.direction = r.currentItem < t ? "next" : "prev";
                    f.direction = r.direction;
                    if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) {
                        r.currentItem = t;
                        r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                        return !1
                    }
                    r.currentItem = t;
                    r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                    t = Math.floor(t / r.visible)
                }
                r.animating = !0;
                r.animatingTo = t;
                n && r.pause();
                r.vars.before(r);
                r.syncExists && !a && v.sync("animate");
                r.vars.controlNav && v.controlNav.active();
                h || r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                r.atEnd = t === 0 || t === r.last;
                r.vars.directionNav && v.directionNav.update();
                if (t === r.last) {
                    r.vars.end(r);
                    r.vars.animationLoop || r.pause()
                }
                if (!p) {
                    var m = l ? r.slides.filter(":first").height() : r.computedW,
                        g, y, b;
                    if (h) {
                        g = r.vars.itemMargin;
                        b = (r.itemW + g) * r.move * r.animatingTo;
                        y = b > r.limit && r.visible !== 1 ? r.limit : b
                    } else r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next" ? y = c ? (r.count + r.cloneOffset) * m : 0 : r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev" ? y = c ? 0 : (r.count + 1) * m : y = c ? (r.count - 1 - t + r.cloneOffset) * m : (t + r.cloneOffset) * m;
                    r.setProps(y, "", r.vars.animationSpeed);
                    if (r.transitions) {
                        if (!r.vars.animationLoop || !r.atEnd) {
                            r.animating = !1;
                            r.currentSlide = r.animatingTo
                        }
                        r.container.unbind("webkitTransitionEnd transitionend");
                        r.container.bind("webkitTransitionEnd transitionend", function () {
                            r.wrapup(m)
                        })
                    } else r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function () {
                        r.wrapup(m)
                    })
                } else if (!o) {
                    r.slides.eq(r.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, r.vars.animationSpeed, r.vars.easing);
                    r.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, r.vars.animationSpeed, r.vars.easing, r.wrapup)
                } else {
                    r.slides.eq(r.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    });
                    r.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    });
                    r.wrapup(m)
                }
                r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed)
            }
        };
        r.wrapup = function (e) {
            !p && !h && (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop && r.setProps(e, "jumpStart"));
            r.animating = !1;
            r.currentSlide = r.animatingTo;
            r.vars.after(r)
        };
        r.animateSlides = function () {
            !r.animating && m && r.flexAnimate(r.getTarget("next"))
        };
        r.pause = function () {
            clearInterval(r.animatedSlides);
            r.animatedSlides = null;
            r.playing = !1;
            r.vars.pausePlay && v.pausePlay.update("play");
            r.syncExists && v.sync("pause")
        };
        r.play = function () {
            r.playing && clearInterval(r.animatedSlides);
            r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
            r.started = r.playing = !0;
            r.vars.pausePlay && v.pausePlay.update("pause");
            r.syncExists && v.sync("play")
        };
        r.stop = function () {
            r.pause();
            r.stopped = !0
        };
        r.canAdvance = function (e, t) {
            var n = d ? r.pagingCount - 1 : r.last;
            return t ? !0 : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !d ? !1 : r.vars.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0
        };
        r.getTarget = function (e) {
            r.direction = e;
            return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last : r.currentSlide - 1
        };
        r.setProps = function (e, t, n) {
            var i = function () {
                var n = e ? e : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
                    i = function () {
                        if (h) return t === "setTouch" ? e : c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n;
                        switch (t) {
                            case "setTotal":
                                return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
                            case "setTouch":
                                return c ? e : e;
                            case "jumpEnd":
                                return c ? e : r.count * e;
                            case "jumpStart":
                                return c ? r.count * e : e;
                            default:
                                return e
                        }
                    }();
                return i * -1 + "px"
            }();
            if (r.transitions) {
                i = l ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)";
                n = n !== undefined ? n / 1e3 + "s" : "0s";
                r.container.css("-" + r.pfx + "-transition-duration", n);
                r.container.css("transition-duration", n)
            }
            r.args[r.prop] = i;
            (r.transitions || n === undefined) && r.container.css(r.args);
            r.container.css("transform", i)
        };
        r.setup = function (t) {
            if (!p) {
                var n, s;
                if (t === "init") {
                    r.viewport = e('<div class="' + i + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(r).append(r.container);
                    r.cloneCount = 0;
                    r.cloneOffset = 0;
                    if (c) {
                        s = e.makeArray(r.slides).reverse();
                        r.slides = e(s);
                        r.container.empty().append(r.slides)
                    }
                }
                if (r.vars.animationLoop && !h) {
                    r.cloneCount = 2;
                    r.cloneOffset = 1;
                    t !== "init" && r.container.find(".clone").remove();
                    r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true"));
                    v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);
                    v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)
                }
                r.newSlides = e(r.vars.selector, r);
                n = c ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
                if (l && !h) {
                    r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function () {
                        r.newSlides.css({
                            display: "block"
                        });
                        r.doMath();
                        r.viewport.height(r.h);
                        r.setProps(n * r.h, "init")
                    }, t === "init" ? 100 : 0)
                } else {
                    r.container.width((r.count + r.cloneCount) * 200 + "%");
                    r.setProps(n * r.computedW, "init");
                    setTimeout(function () {
                        r.doMath();
                        r.newSlides.css({
                            width: r.computedW,
                            "float": "left",
                            display: "block"
                        });
                        r.vars.smoothHeight && v.smoothHeight()
                    }, t === "init" ? 100 : 0)
                }
            } else {
                r.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                });
                t === "init" && (o ? r.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : r.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, r.vars.animationSpeed, r.vars.easing));
                r.vars.smoothHeight && v.smoothHeight()
            }
            h || r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide");
            r.vars.init(r)
        };
        r.doMath = function () {
            var e = r.slides.first(),
                t = r.vars.itemMargin,
                n = r.vars.minItems,
                i = r.vars.maxItems;
            r.w = r.viewport === undefined ? r.width() : r.viewport.width();
            r.h = e.height();
            r.boxPadding = e.outerWidth() - e.width();
            if (h) {
                r.itemT = r.vars.itemWidth + t;
                r.minW = n ? n * r.itemT : r.w;
                r.maxW = i ? i * r.itemT - t : r.w;
                r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth;
                r.visible = Math.floor(r.w / r.itemW);
                r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible;
                r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
                r.last = r.pagingCount - 1;
                r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t
            } else {
                r.itemW = r.w;
                r.pagingCount = r.count;
                r.last = r.count - 1
            }
            r.computedW = r.itemW - r.boxPadding
        };
        r.update = function (e, t) {
            r.doMath();
            if (!h) {
                e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1);
                r.animatingTo = r.currentSlide
            }
            if (r.vars.controlNav && !r.manualControls)
                if (t === "add" && !h || r.pagingCount > r.controlNav.length) v.controlNav.update("add");
                else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) {
                if (h && r.currentSlide > r.last) {
                    r.currentSlide -= 1;
                    r.animatingTo -= 1
                }
                v.controlNav.update("remove", r.last)
            }
            r.vars.directionNav && v.directionNav.update()
        };
        r.addSlide = function (t, n) {
            var i = e(t);
            r.count += 1;
            r.last = r.count - 1;
            l && c ? n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i);
            r.update(n, "add");
            r.slides = e(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.added(r)
        };
        r.removeSlide = function (t) {
            var n = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1;
            r.last = r.count - 1;
            isNaN(t) ? e(t, r.slides).remove() : l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
            r.doMath();
            r.update(n, "remove");
            r.slides = e(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.removed(r)
        };
        v.init()
    };
    e(window).blur(function (e) {
        focused = !1
    }).focus(function (e) {
        focused = !0
    });
    e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {},
        init: function () {}
    };
    e.fn.flexslider = function (t) {
        t === undefined && (t = {});
        if (typeof t == "object") return this.each(function () {
            var n = e(this),
                r = t.selector ? t.selector : ".slides > li",
                i = n.find(r);
            if (i.length === 1 && t.allowOneSlide === !0 || i.length === 0) {
                i.fadeIn(400);
                t.start && t.start(n)
            } else n.data("flexslider") === undefined && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
            case "play":
                n.play();
                break;
            case "pause":
                n.pause();
                break;
            case "stop":
                n.stop();
                break;
            case "next":
                n.flexAnimate(n.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                n.flexAnimate(n.getTarget("prev"), !0);
                break;
            default:
                typeof t == "number" && n.flexAnimate(t, !0)
        }
    }
})(jQuery);



