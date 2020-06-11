!(function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t);
        })
        : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [],
        i = t.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        d = f.toString,
        h = d.call(Object),
        p = {},
        m = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        },
        g = function (t) {
            return null != t && t === t.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
    function $(t, e, n) {
        var r,
            o = (e = e || i).createElement("script");
        if (((o.text = t), n)) for (r in v) n[r] && (o[r] = n[r]);
        e.head.appendChild(o).parentNode.removeChild(o);
    }
    function y(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t;
    }
    var b = function (t, e) {
            return new b.fn.init(t, e);
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function k(t) {
        var e = !!t && "length" in t && t.length,
            n = y(t);
        return !m(t) && !g(t) && ("array" === n || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
    }
    (b.fn = b.prototype = {
        jquery: "3.3.1",
        constructor: b,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t];
        },
        pushStack: function (t) {
            var e = b.merge(this.constructor(), t);
            return (e.prevObject = this), e;
        },
        each: function (t) {
            return b.each(this, t);
        },
        map: function (t) {
            return this.pushStack(
                b.map(this, function (e, n) {
                    return t.call(e, n, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice,
    }),
        (b.extend = b.fn.extend = function () {
            var t,
                e,
                n,
                i,
                r,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || m(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (t = arguments[s]))
                    for (e in t)
                        (n = a[e]),
                        a !== (i = t[e]) &&
                        (l && i && (b.isPlainObject(i) || (r = Array.isArray(i)))
                            ? (r ? ((r = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && b.isPlainObject(n) ? n : {}), (a[e] = b.extend(l, o, i)))
                            : void 0 !== i && (a[e] = i));
            return a;
        }),
        b.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t);
            },
            noop: function () {},
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== c.call(t) || ((e = r(t)) && ("function" != typeof (n = f.call(e, "constructor") && e.constructor) || d.call(n) !== h)));
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0;
            },
            globalEval: function (t) {
                $(t);
            },
            each: function (t, e) {
                var n,
                    i = 0;
                if (k(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                return t;
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(w, "");
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (k(Object(t)) ? b.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n;
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : u.call(e, t, n);
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return (t.length = r), t;
            },
            grep: function (t, e, n) {
                for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]);
                return i;
            },
            map: function (t, e, n) {
                var i,
                    r,
                    o = 0,
                    s = [];
                if (k(t)) for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
                else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
                return a.apply([], s);
            },
            guid: 1,
            support: p,
        }),
    "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
        b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            l["[object " + e + "]"] = e.toLowerCase();
        });
    var x = (function (t) {
        var e,
            n,
            i,
            r,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            h,
            p,
            m,
            g,
            v,
            $,
            y,
            b = "sizzle" + 1 * new Date(),
            w = t.document,
            k = 0,
            x = 0,
            C = at(),
            T = at(),
            E = at(),
            S = function (t, e) {
                return t === e && (f = !0), 0;
            },
            A = {}.hasOwnProperty,
            O = [],
            D = O.pop,
            M = O.push,
            j = O.push,
            N = O.slice,
            I = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                return -1;
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            U = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q = "\\[" + P + "*(" + U + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + U + "))|)" + P + "*\\]",
            R = ":(" + U + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            V = new RegExp(P + "+", "g"),
            H = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            _ = new RegExp("^" + P + "*," + P + "*"),
            F = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            B = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            z = new RegExp(R),
            W = new RegExp("^" + U + "$"),
            G = {
                ID: new RegExp("^#(" + U + ")"),
                CLASS: new RegExp("^\\.(" + U + ")"),
                TAG: new RegExp("^(" + U + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i"),
            },
            X = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Q = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            tt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            nt = function (t, e) {
                return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
            },
            it = function () {
                d();
            },
            rt = $t(
                function (t) {
                    return !0 === t.disabled && ("form" in t || "label" in t);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            j.apply((O = N.call(w.childNodes)), w.childNodes), O[w.childNodes.length].nodeType;
        } catch (t) {
            j = {
                apply: O.length
                    ? function (t, e) {
                        M.apply(t, N.call(e));
                    }
                    : function (t, e) {
                        for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                        t.length = n - 1;
                    },
            };
        }
        function ot(t, e, i, r) {
            var o,
                s,
                l,
                c,
                f,
                p,
                v,
                $ = e && e.ownerDocument,
                k = e ? e.nodeType : 9;
            if (((i = i || []), "string" != typeof t || !t || (1 !== k && 9 !== k && 11 !== k))) return i;
            if (!r && ((e ? e.ownerDocument || e : w) !== h && d(e), (e = e || h), m)) {
                if (11 !== k && (f = Y.exec(t)))
                    if ((o = f[1])) {
                        if (9 === k) {
                            if (!(l = e.getElementById(o))) return i;
                            if (l.id === o) return i.push(l), i;
                        } else if ($ && (l = $.getElementById(o)) && y(e, l) && l.id === o) return i.push(l), i;
                    } else {
                        if (f[2]) return j.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return j.apply(i, e.getElementsByClassName(o)), i;
                    }
                if (n.qsa && !E[t + " "] && (!g || !g.test(t))) {
                    if (1 !== k) ($ = e), (v = t);
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((c = e.getAttribute("id")) ? (c = c.replace(et, nt)) : e.setAttribute("id", (c = b)), s = (p = a(t)).length; s--; ) p[s] = "#" + c + " " + vt(p[s]);
                        (v = p.join(",")), ($ = (Q.test(t) && mt(e.parentNode)) || e);
                    }
                    if (v)
                        try {
                            return j.apply(i, $.querySelectorAll(v)), i;
                        } catch (t) {
                        } finally {
                            c === b && e.removeAttribute("id");
                        }
                }
            }
            return u(t.replace(H, "$1"), e, i, r);
        }
        function at() {
            var t = [];
            return function e(n, r) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], (e[n + " "] = r);
            };
        }
        function st(t) {
            return (t[b] = !0), t;
        }
        function ut(t) {
            var e = h.createElement("fieldset");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
        }
        function lt(t, e) {
            for (var n = t.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = e;
        }
        function ct(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
            return t ? 1 : -1;
        }
        function ft(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function dt(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
            };
        }
        function ht(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && rt(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function pt(t) {
            return st(function (e) {
                return (
                    (e = +e),
                        st(function (n, i) {
                            for (var r, o = t([], n.length, e), a = o.length; a--; ) n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                        })
                );
            });
        }
        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
        }
        for (e in ((n = ot.support = {}),
            (o = ot.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName;
            }),
            (d = ot.setDocument = function (t) {
                var e,
                    r,
                    a = t ? t.ownerDocument || t : w;
                return a !== h && 9 === a.nodeType && a.documentElement
                    ? ((p = (h = a).documentElement),
                        (m = !o(h)),
                    w !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", it, !1) : r.attachEvent && r.attachEvent("onunload", it)),
                        (n.attributes = ut(function (t) {
                            return (t.className = "i"), !t.getAttribute("className");
                        })),
                        (n.getElementsByTagName = ut(function (t) {
                            return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length;
                        })),
                        (n.getElementsByClassName = K.test(h.getElementsByClassName)),
                        (n.getById = ut(function (t) {
                            return (p.appendChild(t).id = b), !h.getElementsByName || !h.getElementsByName(b).length;
                        })),
                        n.getById
                            ? ((i.filter.ID = function (t) {
                                var e = t.replace(Z, tt);
                                return function (t) {
                                    return t.getAttribute("id") === e;
                                };
                            }),
                                (i.find.ID = function (t, e) {
                                    if (void 0 !== e.getElementById && m) {
                                        var n = e.getElementById(t);
                                        return n ? [n] : [];
                                    }
                                }))
                            : ((i.filter.ID = function (t) {
                                var e = t.replace(Z, tt);
                                return function (t) {
                                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                    return n && n.value === e;
                                };
                            }),
                                (i.find.ID = function (t, e) {
                                    if (void 0 !== e.getElementById && m) {
                                        var n,
                                            i,
                                            r,
                                            o = e.getElementById(t);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                            for (r = e.getElementsByName(t), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                        }
                                        return [];
                                    }
                                })),
                        (i.find.TAG = n.getElementsByTagName
                            ? function (t, e) {
                                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
                            }
                            : function (t, e) {
                                var n,
                                    i = [],
                                    r = 0,
                                    o = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                                    return i;
                                }
                                return o;
                            }),
                        (i.find.CLASS =
                            n.getElementsByClassName &&
                            function (t, e) {
                                if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t);
                            }),
                        (v = []),
                        (g = []),
                    (n.qsa = K.test(h.querySelectorAll)) &&
                    (ut(function (t) {
                        (p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + L + ")"),
                        t.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                        t.querySelectorAll(":checked").length || g.push(":checked"),
                        t.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]");
                    }),
                        ut(function (t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = h.createElement("input");
                            e.setAttribute("type", "hidden"),
                                t.appendChild(e).setAttribute("name", "D"),
                            t.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="),
                            2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                                (p.appendChild(t).disabled = !0),
                            2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                                t.querySelectorAll("*,:x"),
                                g.push(",.*:");
                        })),
                    (n.matchesSelector = K.test(($ = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
                    ut(function (t) {
                        (n.disconnectedMatch = $.call(t, "*")), $.call(t, "[s!='']:x"), v.push("!=", R);
                    }),
                        (g = g.length && new RegExp(g.join("|"))),
                        (v = v.length && new RegExp(v.join("|"))),
                        (e = K.test(p.compareDocumentPosition)),
                        (y =
                            e || K.test(p.contains)
                                ? function (t, e) {
                                    var n = 9 === t.nodeType ? t.documentElement : t,
                                        i = e && e.parentNode;
                                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
                                }
                                : function (t, e) {
                                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                    return !1;
                                }),
                        (S = e
                            ? function (t, e) {
                                if (t === e) return (f = !0), 0;
                                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return (
                                    i ||
                                    (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!n.sortDetached && e.compareDocumentPosition(t) === i)
                                        ? t === h || (t.ownerDocument === w && y(w, t))
                                            ? -1
                                            : e === h || (e.ownerDocument === w && y(w, e))
                                                ? 1
                                                : c
                                                    ? I(c, t) - I(c, e)
                                                    : 0
                                        : 4 & i
                                            ? -1
                                            : 1)
                                );
                            }
                            : function (t, e) {
                                if (t === e) return (f = !0), 0;
                                var n,
                                    i = 0,
                                    r = t.parentNode,
                                    o = e.parentNode,
                                    a = [t],
                                    s = [e];
                                if (!r || !o) return t === h ? -1 : e === h ? 1 : r ? -1 : o ? 1 : c ? I(c, t) - I(c, e) : 0;
                                if (r === o) return ct(t, e);
                                for (n = t; (n = n.parentNode); ) a.unshift(n);
                                for (n = e; (n = n.parentNode); ) s.unshift(n);
                                for (; a[i] === s[i]; ) i++;
                                return i ? ct(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0;
                            }),
                        h)
                    : h;
            }),
            (ot.matches = function (t, e) {
                return ot(t, null, null, e);
            }),
            (ot.matchesSelector = function (t, e) {
                if (((t.ownerDocument || t) !== h && d(t), (e = e.replace(B, "='$1']")), n.matchesSelector && m && !E[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))))
                    try {
                        var i = $.call(t, e);
                        if (i || n.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
                    } catch (t) {}
                return ot(e, h, null, [t]).length > 0;
            }),
            (ot.contains = function (t, e) {
                return (t.ownerDocument || t) !== h && d(t), y(t, e);
            }),
            (ot.attr = function (t, e) {
                (t.ownerDocument || t) !== h && d(t);
                var r = i.attrHandle[e.toLowerCase()],
                    o = r && A.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
                return void 0 !== o ? o : n.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null;
            }),
            (ot.escape = function (t) {
                return (t + "").replace(et, nt);
            }),
            (ot.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (ot.uniqueSort = function (t) {
                var e,
                    i = [],
                    r = 0,
                    o = 0;
                if (((f = !n.detectDuplicates), (c = !n.sortStable && t.slice(0)), t.sort(S), f)) {
                    for (; (e = t[o++]); ) e === t[o] && (r = i.push(o));
                    for (; r--; ) t.splice(i[r], 1);
                }
                return (c = null), t;
            }),
            (r = ot.getText = function (t) {
                var e,
                    n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
                    } else if (3 === o || 4 === o) return t.nodeValue;
                } else for (; (e = t[i++]); ) n += r(e);
                return n;
            }),
            ((i = ot.selectors = {
                cacheLength: 50,
                createPseudo: st,
                match: G,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (t) {
                        return (t[1] = t[1].replace(Z, tt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                    },
                    CHILD: function (t) {
                        return (
                            (t[1] = t[1].toLowerCase()),
                                "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && ot.error(t[0]),
                                t
                        );
                    },
                    PSEUDO: function (t) {
                        var e,
                            n = !t[6] && t[2];
                        return G.CHILD.test(t[0])
                            ? null
                            : (t[3] ? (t[2] = t[4] || t[5] || "") : n && z.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))), t.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(Z, tt).toLowerCase();
                        return "*" === t
                            ? function () {
                                return !0;
                            }
                            : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e;
                            };
                    },
                    CLASS: function (t) {
                        var e = C[t + " "];
                        return (
                            e ||
                            ((e = new RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) &&
                                C(t, function (t) {
                                    return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (t, e, n) {
                        return function (i) {
                            var r = ot.attr(i, t);
                            return null == r
                                ? "!=" === e
                                : !e ||
                                ((r += ""),
                                    "=" === e
                                        ? r === n
                                        : "!=" === e
                                        ? r !== n
                                        : "^=" === e
                                            ? n && 0 === r.indexOf(n)
                                            : "*=" === e
                                                ? n && r.indexOf(n) > -1
                                                : "$=" === e
                                                    ? n && r.slice(-n.length) === n
                                                    : "~=" === e
                                                        ? (" " + r.replace(V, " ") + " ").indexOf(n) > -1
                                                        : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function (t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === i && 0 === r
                            ? function (t) {
                                return !!t.parentNode;
                            }
                            : function (e, n, u) {
                                var l,
                                    c,
                                    f,
                                    d,
                                    h,
                                    p,
                                    m = o !== a ? "nextSibling" : "previousSibling",
                                    g = e.parentNode,
                                    v = s && e.nodeName.toLowerCase(),
                                    $ = !u && !s,
                                    y = !1;
                                if (g) {
                                    if (o) {
                                        for (; m; ) {
                                            for (d = e; (d = d[m]); ) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = m = "only" === t && !p && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((p = [a ? g.firstChild : g.lastChild]), a && $)) {
                                        for (
                                            y = (h = (l = (c = (f = (d = g)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === k && l[1]) && l[2], d = h && g.childNodes[h];
                                            (d = (++h && d && d[m]) || (y = h = 0) || p.pop());

                                        )
                                            if (1 === d.nodeType && ++y && d === e) {
                                                c[t] = [k, h, y];
                                                break;
                                            }
                                    } else if (($ && (y = h = (l = (c = (f = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === k && l[1]), !1 === y))
                                        for (
                                            ;
                                            (d = (++h && d && d[m]) || (y = h = 0) || p.pop()) &&
                                            ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || ($ && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] = [k, y]), d !== e));

                                        );
                                    return (y -= r) === i || (y % i == 0 && y / i >= 0);
                                }
                            };
                    },
                    PSEUDO: function (t, e) {
                        var n,
                            r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                        return r[b]
                            ? r(e)
                            : r.length > 1
                                ? ((n = [t, t, "", e]),
                                    i.setFilters.hasOwnProperty(t.toLowerCase())
                                        ? st(function (t, n) {
                                            for (var i, o = r(t, e), a = o.length; a--; ) t[(i = I(t, o[a]))] = !(n[i] = o[a]);
                                        })
                                        : function (t) {
                                            return r(t, 0, n);
                                        })
                                : r;
                    },
                },
                pseudos: {
                    not: st(function (t) {
                        var e = [],
                            n = [],
                            i = s(t.replace(H, "$1"));
                        return i[b]
                            ? st(function (t, e, n, r) {
                                for (var o, a = i(t, null, r, []), s = t.length; s--; ) (o = a[s]) && (t[s] = !(e[s] = o));
                            })
                            : function (t, r, o) {
                                return (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop();
                            };
                    }),
                    has: st(function (t) {
                        return function (e) {
                            return ot(t, e).length > 0;
                        };
                    }),
                    contains: st(function (t) {
                        return (
                            (t = t.replace(Z, tt)),
                                function (e) {
                                    return (e.textContent || e.innerText || r(e)).indexOf(t) > -1;
                                }
                        );
                    }),
                    lang: st(function (t) {
                        return (
                            W.test(t || "") || ot.error("unsupported lang: " + t),
                                (t = t.replace(Z, tt).toLowerCase()),
                                function (e) {
                                    var n;
                                    do {
                                        if ((n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1;
                                }
                        );
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id;
                    },
                    root: function (t) {
                        return t === p;
                    },
                    focus: function (t) {
                        return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: ht(!1),
                    disabled: ht(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (t) {
                        return !i.pseudos.empty(t);
                    },
                    header: function (t) {
                        return J.test(t.nodeName);
                    },
                    input: function (t) {
                        return X.test(t.nodeName);
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && "button" === t.type) || "button" === e;
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: pt(function () {
                        return [0];
                    }),
                    last: pt(function (t, e) {
                        return [e - 1];
                    }),
                    eq: pt(function (t, e, n) {
                        return [n < 0 ? n + e : n];
                    }),
                    even: pt(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t;
                    }),
                    odd: pt(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t;
                    }),
                    lt: pt(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
                        return t;
                    }),
                    gt: pt(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                        return t;
                    }),
                },
            }).pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[e] = ft(e);
        for (e in { submit: !0, reset: !0 }) i.pseudos[e] = dt(e);
        function gt() {}
        function vt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i;
        }
        function $t(t, e, n) {
            var i = e.dir,
                r = e.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = x++;
            return e.first
                ? function (e, n, r) {
                    for (; (e = e[i]); ) if (1 === e.nodeType || a) return t(e, n, r);
                    return !1;
                }
                : function (e, n, u) {
                    var l,
                        c,
                        f,
                        d = [k, s];
                    if (u) {
                        for (; (e = e[i]); ) if ((1 === e.nodeType || a) && t(e, n, u)) return !0;
                    } else
                        for (; (e = e[i]); )
                            if (1 === e.nodeType || a)
                                if (((c = (f = e[b] || (e[b] = {}))[e.uniqueID] || (f[e.uniqueID] = {})), r && r === e.nodeName.toLowerCase())) e = e[i] || e;
                                else {
                                    if ((l = c[o]) && l[0] === k && l[1] === s) return (d[2] = l[2]);
                                    if (((c[o] = d), (d[2] = t(e, n, u)))) return !0;
                                }
                    return !1;
                };
        }
        function yt(t) {
            return t.length > 1
                ? function (e, n, i) {
                    for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                    return !0;
                }
                : t[0];
        }
        function bt(t, e, n, i, r) {
            for (var o, a = [], s = 0, u = t.length, l = null != e; s < u; s++) (o = t[s]) && ((n && !n(o, i, r)) || (a.push(o), l && e.push(s)));
            return a;
        }
        function wt(t, e, n, i, r, o) {
            return (
                i && !i[b] && (i = wt(i)),
                r && !r[b] && (r = wt(r, o)),
                    st(function (o, a, s, u) {
                        var l,
                            c,
                            f,
                            d = [],
                            h = [],
                            p = a.length,
                            m =
                                o ||
                                (function (t, e, n) {
                                    for (var i = 0, r = e.length; i < r; i++) ot(t, e[i], n);
                                    return n;
                                })(e || "*", s.nodeType ? [s] : s, []),
                            g = !t || (!o && e) ? m : bt(m, d, t, s, u),
                            v = n ? (r || (o ? t : p || i) ? [] : a) : g;
                        if ((n && n(g, v, s, u), i)) for (l = bt(v, h), i(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (v[h[c]] = !(g[h[c]] = f));
                        if (o) {
                            if (r || t) {
                                if (r) {
                                    for (l = [], c = v.length; c--; ) (f = v[c]) && l.push((g[c] = f));
                                    r(null, (v = []), l, u);
                                }
                                for (c = v.length; c--; ) (f = v[c]) && (l = r ? I(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f));
                            }
                        } else (v = bt(v === a ? v.splice(p, v.length) : v)), r ? r(null, a, v, u) : j.apply(a, v);
                    })
            );
        }
        function kt(t) {
            for (
                var e,
                    n,
                    r,
                    o = t.length,
                    a = i.relative[t[0].type],
                    s = a || i.relative[" "],
                    u = a ? 1 : 0,
                    c = $t(
                        function (t) {
                            return t === e;
                        },
                        s,
                        !0
                    ),
                    f = $t(
                        function (t) {
                            return I(e, t) > -1;
                        },
                        s,
                        !0
                    ),
                    d = [
                        function (t, n, i) {
                            var r = (!a && (i || n !== l)) || ((e = n).nodeType ? c(t, n, i) : f(t, n, i));
                            return (e = null), r;
                        },
                    ];
                u < o;
                u++
            )
                if ((n = i.relative[t[u].type])) d = [$t(yt(d), n)];
                else {
                    if ((n = i.filter[t[u].type].apply(null, t[u].matches))[b]) {
                        for (r = ++u; r < o && !i.relative[t[r].type]; r++);
                        return wt(u > 1 && yt(d), u > 1 && vt(t.slice(0, u - 1).concat({ value: " " === t[u - 2].type ? "*" : "" })).replace(H, "$1"), n, u < r && kt(t.slice(u, r)), r < o && kt((t = t.slice(r))), r < o && vt(t));
                    }
                    d.push(n);
                }
            return yt(d);
        }
        return (
            (gt.prototype = i.filters = i.pseudos),
                (i.setFilters = new gt()),
                (a = ot.tokenize = function (t, e) {
                    var n,
                        r,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c = T[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (s = t, u = [], l = i.preFilter; s; ) {
                        for (a in ((n && !(r = _.exec(s))) || (r && (s = s.slice(r[0].length) || s), u.push((o = []))),
                            (n = !1),
                        (r = F.exec(s)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(H, " ") }), (s = s.slice(n.length))),
                            i.filter))
                            !(r = G[a].exec(s)) || (l[a] && !(r = l[a](r))) || ((n = r.shift()), o.push({ value: n, type: a, matches: r }), (s = s.slice(n.length)));
                        if (!n) break;
                    }
                    return e ? s.length : s ? ot.error(t) : T(t, u).slice(0);
                }),
                (s = ot.compile = function (t, e) {
                    var n,
                        r,
                        o,
                        s,
                        u,
                        c,
                        f = [],
                        p = [],
                        g = E[t + " "];
                    if (!g) {
                        for (e || (e = a(t)), n = e.length; n--; ) (g = kt(e[n]))[b] ? f.push(g) : p.push(g);
                        (g = E(
                            t,
                            ((r = p),
                                (o = f),
                                (s = o.length > 0),
                                (u = r.length > 0),
                                (c = function (t, e, n, a, c) {
                                    var f,
                                        p,
                                        g,
                                        v = 0,
                                        $ = "0",
                                        y = t && [],
                                        b = [],
                                        w = l,
                                        x = t || (u && i.find.TAG("*", c)),
                                        C = (k += null == w ? 1 : Math.random() || 0.1),
                                        T = x.length;
                                    for (c && (l = e === h || e || c); $ !== T && null != (f = x[$]); $++) {
                                        if (u && f) {
                                            for (p = 0, e || f.ownerDocument === h || (d(f), (n = !m)); (g = r[p++]); )
                                                if (g(f, e || h, n)) {
                                                    a.push(f);
                                                    break;
                                                }
                                            c && (k = C);
                                        }
                                        s && ((f = !g && f) && v--, t && y.push(f));
                                    }
                                    if (((v += $), s && $ !== v)) {
                                        for (p = 0; (g = o[p++]); ) g(y, b, e, n);
                                        if (t) {
                                            if (v > 0) for (; $--; ) y[$] || b[$] || (b[$] = D.call(a));
                                            b = bt(b);
                                        }
                                        j.apply(a, b), c && !t && b.length > 0 && v + o.length > 1 && ot.uniqueSort(a);
                                    }
                                    return c && ((k = C), (l = w)), y;
                                }),
                                s ? st(c) : c)
                        )).selector = t;
                    }
                    return g;
                }),
                (u = ot.select = function (t, e, n, r) {
                    var o,
                        u,
                        l,
                        c,
                        f,
                        d = "function" == typeof t && t,
                        h = !r && a((t = d.selector || t));
                    if (((n = n || []), 1 === h.length)) {
                        if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === e.nodeType && m && i.relative[u[1].type]) {
                            if (!(e = (i.find.ID(l.matches[0].replace(Z, tt), e) || [])[0])) return n;
                            d && (e = e.parentNode), (t = t.slice(u.shift().value.length));
                        }
                        for (o = G.needsContext.test(t) ? 0 : u.length; o-- && ((l = u[o]), !i.relative[(c = l.type)]); )
                            if ((f = i.find[c]) && (r = f(l.matches[0].replace(Z, tt), (Q.test(u[0].type) && mt(e.parentNode)) || e))) {
                                if ((u.splice(o, 1), !(t = r.length && vt(u)))) return j.apply(n, r), n;
                                break;
                            }
                    }
                    return (d || s(t, h))(r, e, !m, n, !e || (Q.test(t) && mt(e.parentNode)) || e), n;
                }),
                (n.sortStable = b.split("").sort(S).join("") === b),
                (n.detectDuplicates = !!f),
                d(),
                (n.sortDetached = ut(function (t) {
                    return 1 & t.compareDocumentPosition(h.createElement("fieldset"));
                })),
            ut(function (t) {
                return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
            }) ||
            lt("type|href|height|width", function (t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }),
            (n.attributes &&
                ut(function (t) {
                    return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                })) ||
            lt("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
            }),
            ut(function (t) {
                return null == t.getAttribute("disabled");
            }) ||
            lt(L, function (t, e, n) {
                var i;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
            }),
                ot
        );
    })(t);
    (b.find = x), (b.expr = x.selectors), (b.expr[":"] = b.expr.pseudos), (b.uniqueSort = b.unique = x.uniqueSort), (b.text = x.getText), (b.isXMLDoc = x.isXML), (b.contains = x.contains), (b.escapeSelector = x.escape);
    var C = function (t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (r && b(t).is(n)) break;
                    i.push(t);
                }
            return i;
        },
        T = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n;
        },
        E = b.expr.match.needsContext;
    function S(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function O(t, e, n) {
        return m(e)
            ? b.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n;
            })
            : e.nodeType
                ? b.grep(t, function (t) {
                    return (t === e) !== n;
                })
                : "string" != typeof e
                    ? b.grep(t, function (t) {
                        return u.call(e, t) > -1 !== n;
                    })
                    : b.filter(e, t, n);
    }
    (b.filter = function (t, e, n) {
        var i = e[0];
        return (
            n && (t = ":not(" + t + ")"),
                1 === e.length && 1 === i.nodeType
                    ? b.find.matchesSelector(i, t)
                    ? [i]
                    : []
                    : b.find.matches(
                    t,
                    b.grep(e, function (t) {
                        return 1 === t.nodeType;
                    })
                    )
        );
    }),
        b.fn.extend({
            find: function (t) {
                var e,
                    n,
                    i = this.length,
                    r = this;
                if ("string" != typeof t)
                    return this.pushStack(
                        b(t).filter(function () {
                            for (e = 0; e < i; e++) if (b.contains(r[e], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), e = 0; e < i; e++) b.find(t, r[e], n);
                return i > 1 ? b.uniqueSort(n) : n;
            },
            filter: function (t) {
                return this.pushStack(O(this, t || [], !1));
            },
            not: function (t) {
                return this.pushStack(O(this, t || [], !0));
            },
            is: function (t) {
                return !!O(this, "string" == typeof t && E.test(t) ? b(t) : t || [], !1).length;
            },
        });
    var D,
        M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((b.fn.init = function (t, e, n) {
        var r, o;
        if (!t) return this;
        if (((n = n || D), "string" == typeof t)) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : M.exec(t)) || (!r[1] && e)) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (((e = e instanceof b ? e[0] : e), b.merge(this, b.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), A.test(r[1]) && b.isPlainObject(e))) for (r in e) m(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this;
            }
            return (o = i.getElementById(r[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return t.nodeType ? ((this[0] = t), (this.length = 1), this) : m(t) ? (void 0 !== n.ready ? n.ready(t) : t(b)) : b.makeArray(t, this);
    }).prototype = b.fn),
        (D = b(i));
    var j = /^(?:parents|prev(?:Until|All))/,
        N = { children: !0, contents: !0, next: !0, prev: !0 };
    function I(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
    }
    b.fn.extend({
        has: function (t) {
            var e = b(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++) if (b.contains(this, e[t])) return !0;
            });
        },
        closest: function (t, e) {
            var n,
                i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof t && b(t);
            if (!E.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, t))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o);
        },
        index: function (t) {
            return t ? ("string" == typeof t ? u.call(b(t), this[0]) : u.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (t, e) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(t, e))));
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        },
    }),
        b.each(
            {
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (t) {
                    return C(t, "parentNode");
                },
                parentsUntil: function (t, e, n) {
                    return C(t, "parentNode", n);
                },
                next: function (t) {
                    return I(t, "nextSibling");
                },
                prev: function (t) {
                    return I(t, "previousSibling");
                },
                nextAll: function (t) {
                    return C(t, "nextSibling");
                },
                prevAll: function (t) {
                    return C(t, "previousSibling");
                },
                nextUntil: function (t, e, n) {
                    return C(t, "nextSibling", n);
                },
                prevUntil: function (t, e, n) {
                    return C(t, "previousSibling", n);
                },
                siblings: function (t) {
                    return T((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                    return T(t.firstChild);
                },
                contents: function (t) {
                    return S(t, "iframe") ? t.contentDocument : (S(t, "template") && (t = t.content || t), b.merge([], t.childNodes));
                },
            },
            function (t, e) {
                b.fn[t] = function (n, i) {
                    var r = b.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = b.filter(i, r)), this.length > 1 && (N[t] || b.uniqueSort(r), j.test(t) && r.reverse()), this.pushStack(r);
                };
            }
        );
    var L = /[^\x20\t\r\n\f]+/g;
    function P(t) {
        return t;
    }
    function U(t) {
        throw t;
    }
    function q(t, e, n, i) {
        var r;
        try {
            t && m((r = t.promise)) ? r.call(t).done(e).fail(n) : t && m((r = t.then)) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i));
        } catch (t) {
            n.apply(void 0, [t]);
        }
    }
    (b.Callbacks = function (t) {
        var e, n;
        t =
            "string" == typeof t
                ? ((e = t),
                    (n = {}),
                    b.each(e.match(L) || [], function (t, e) {
                        n[e] = !0;
                    }),
                    n)
                : b.extend({}, t);
        var i,
            r,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || t.once, o = i = !0; u.length; l = -1) for (r = u.shift(); ++l < s.length; ) !1 === s[l].apply(r[0], r[1]) && t.stopOnFalse && ((l = s.length), (r = !1));
                t.memory || (r = !1), (i = !1), a && (s = r ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                        (r && !i && ((l = s.length - 1), u.push(r)),
                            (function e(n) {
                                b.each(n, function (n, i) {
                                    m(i) ? (t.unique && f.has(i)) || s.push(i) : i && i.length && "string" !== y(i) && e(i);
                                });
                            })(arguments),
                        r && !i && c()),
                            this
                    );
                },
                remove: function () {
                    return (
                        b.each(arguments, function (t, e) {
                            for (var n; (n = b.inArray(e, s, n)) > -1; ) s.splice(n, 1), n <= l && l--;
                        }),
                            this
                    );
                },
                has: function (t) {
                    return t ? b.inArray(t, s) > -1 : s.length > 0;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = r = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), r || i || (s = r = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (t, e) {
                    return a || ((e = [t, (e = e || []).slice ? e.slice() : e]), u.push(e), i || c()), this;
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        b.extend({
            Deferred: function (e) {
                var n = [
                        ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                        ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    r = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (t) {
                            return r.then(null, t);
                        },
                        pipe: function () {
                            var t = arguments;
                            return b
                                .Deferred(function (e) {
                                    b.each(n, function (n, i) {
                                        var r = m(t[i[4]]) && t[i[4]];
                                        o[i[1]](function () {
                                            var t = r && r.apply(this, arguments);
                                            t && m(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments);
                                        });
                                    }),
                                        (t = null);
                                })
                                .promise();
                        },
                        then: function (e, i, r) {
                            var o = 0;
                            function a(e, n, i, r) {
                                return function () {
                                    var s = this,
                                        u = arguments,
                                        l = function () {
                                            var t, l;
                                            if (!(e < o)) {
                                                if ((t = i.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (l = t && ("object" == typeof t || "function" == typeof t) && t.then),
                                                    m(l)
                                                        ? r
                                                        ? l.call(t, a(o, n, P, r), a(o, n, U, r))
                                                        : (o++, l.call(t, a(o, n, P, r), a(o, n, U, r), a(o, n, P, n.notifyWith)))
                                                        : (i !== P && ((s = void 0), (u = [t])), (r || n.resolveWith)(s, u));
                                            }
                                        },
                                        c = r
                                            ? l
                                            : function () {
                                                try {
                                                    l();
                                                } catch (t) {
                                                    b.Deferred.exceptionHook && b.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (i !== U && ((s = void 0), (u = [t])), n.rejectWith(s, u));
                                                }
                                            };
                                    e ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), t.setTimeout(c));
                                };
                            }
                            return b
                                .Deferred(function (t) {
                                    n[0][3].add(a(0, t, m(r) ? r : P, t.notifyWith)), n[1][3].add(a(0, t, m(e) ? e : P)), n[2][3].add(a(0, t, m(i) ? i : U));
                                })
                                .promise();
                        },
                        promise: function (t) {
                            return null != t ? b.extend(t, r) : r;
                        },
                    },
                    o = {};
                return (
                    b.each(n, function (t, e) {
                        var a = e[2],
                            s = e[5];
                        (r[e[1]] = a.add),
                        s &&
                        a.add(
                            function () {
                                i = s;
                            },
                            n[3 - t][2].disable,
                            n[3 - t][3].disable,
                            n[0][2].lock,
                            n[0][3].lock
                        ),
                            a.add(e[3].fire),
                            (o[e[0]] = function () {
                                return o[e[0] + "With"](this === o ? void 0 : this, arguments), this;
                            }),
                            (o[e[0] + "With"] = a.fireWith);
                    }),
                        r.promise(o),
                    e && e.call(o, o),
                        o
                );
            },
            when: function (t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    r = o.call(arguments),
                    a = b.Deferred(),
                    s = function (t) {
                        return function (n) {
                            (i[t] = this), (r[t] = arguments.length > 1 ? o.call(arguments) : n), --e || a.resolveWith(i, r);
                        };
                    };
                if (e <= 1 && (q(t, a.done(s(n)).resolve, a.reject, !e), "pending" === a.state() || m(r[n] && r[n].then))) return a.then();
                for (; n--; ) q(r[n], s(n), a.reject);
                return a.promise();
            },
        });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (b.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && R.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
    }),
        (b.readyException = function (e) {
            t.setTimeout(function () {
                throw e;
            });
        });
    var V = b.Deferred();
    function H() {
        i.removeEventListener("DOMContentLoaded", H), t.removeEventListener("load", H), b.ready();
    }
    (b.fn.ready = function (t) {
        return (
            V.then(t).catch(function (t) {
                b.readyException(t);
            }),
                this
        );
    }),
        b.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
                (!0 === t ? --b.readyWait : b.isReady) || ((b.isReady = !0), (!0 !== t && --b.readyWait > 0) || V.resolveWith(i, [b]));
            },
        }),
        (b.ready.then = V.then),
        "complete" === i.readyState || ("loading" !== i.readyState && !i.documentElement.doScroll) ? t.setTimeout(b.ready) : (i.addEventListener("DOMContentLoaded", H), t.addEventListener("load", H));
    var _ = function (t, e, n, i, r, o, a) {
            var s = 0,
                u = t.length,
                l = null == n;
            if ("object" === y(n)) for (s in ((r = !0), n)) _(t, e, s, n[s], !0, o, a);
            else if (
                void 0 !== i &&
                ((r = !0),
                m(i) || (a = !0),
                l &&
                (a
                    ? (e.call(t, i), (e = null))
                    : ((l = e),
                        (e = function (t, e, n) {
                            return l.call(b(t), n);
                        }))),
                    e)
            )
                for (; s < u; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return r ? t : l ? e.call(t) : u ? e(t[0], n) : o;
        },
        F = /^-ms-/,
        B = /-([a-z])/g;
    function z(t, e) {
        return e.toUpperCase();
    }
    function W(t) {
        return t.replace(F, "ms-").replace(B, z);
    }
    var G = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    function X() {
        this.expando = b.expando + X.uid++;
    }
    (X.uid = 1),
        (X.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || ((e = {}), G(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
            },
            set: function (t, e, n) {
                var i,
                    r = this.cache(t);
                if ("string" == typeof e) r[W(e)] = n;
                else for (i in e) r[W(i)] = e[i];
                return r;
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][W(e)];
            },
            access: function (t, e, n) {
                return void 0 === e || (e && "string" == typeof e && void 0 === n) ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
            },
            remove: function (t, e) {
                var n,
                    i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(W) : (e = W(e)) in i ? [e] : e.match(L) || []).length;
                        for (; n--; ) delete i[e[n]];
                    }
                    (void 0 === e || b.isEmptyObject(i)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !b.isEmptyObject(e);
            },
        });
    var J = new X(),
        K = new X(),
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;
    function Z(t, e, n) {
        var i, r;
        if (void 0 === n && 1 === t.nodeType)
            if (((i = "data-" + e.replace(Q, "-$&").toLowerCase()), "string" == typeof (n = t.getAttribute(i)))) {
                try {
                    n = "true" === (r = n) || ("false" !== r && ("null" === r ? null : r === +r + "" ? +r : Y.test(r) ? JSON.parse(r) : r));
                } catch (t) {}
                K.set(t, e, n);
            } else n = void 0;
        return n;
    }
    b.extend({
        hasData: function (t) {
            return K.hasData(t) || J.hasData(t);
        },
        data: function (t, e, n) {
            return K.access(t, e, n);
        },
        removeData: function (t, e) {
            K.remove(t, e);
        },
        _data: function (t, e, n) {
            return J.access(t, e, n);
        },
        _removeData: function (t, e) {
            J.remove(t, e);
        },
    }),
        b.fn.extend({
            data: function (t, e) {
                var n,
                    i,
                    r,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && ((r = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--; ) a[n] && 0 === (i = a[n].name).indexOf("data-") && ((i = W(i.slice(5))), Z(o, i, r[i]));
                        J.set(o, "hasDataAttrs", !0);
                    }
                    return r;
                }
                return "object" == typeof t
                    ? this.each(function () {
                        K.set(this, t);
                    })
                    : _(
                        this,
                        function (e) {
                            var n;
                            if (o && void 0 === e) {
                                if (void 0 !== (n = K.get(o, t))) return n;
                                if (void 0 !== (n = Z(o, t))) return n;
                            } else
                                this.each(function () {
                                    K.set(this, t, e);
                                });
                        },
                        null,
                        e,
                        arguments.length > 1,
                        null,
                        !0
                    );
            },
            removeData: function (t) {
                return this.each(function () {
                    K.remove(this, t);
                });
            },
        }),
        b.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return (e = (e || "fx") + "queue"), (i = J.get(t, e)), n && (!i || Array.isArray(n) ? (i = J.access(t, e, b.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = b.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = b._queueHooks(t, e);
                "inprogress" === r && ((r = n.shift()), i--),
                r &&
                ("fx" === e && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                        t,
                        function () {
                            b.dequeue(t, e);
                        },
                        o
                    )),
                !i && o && o.empty.fire();
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return (
                    J.get(t, n) ||
                    J.access(t, n, {
                        empty: b.Callbacks("once memory").add(function () {
                            J.remove(t, [e + "queue", n]);
                        }),
                    })
                );
            },
        }),
        b.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return (
                    "string" != typeof t && ((e = t), (t = "fx"), n--),
                        arguments.length < n
                            ? b.queue(this[0], t)
                            : void 0 === e
                            ? this
                            : this.each(function () {
                                var n = b.queue(this, t, e);
                                b._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && b.dequeue(this, t);
                            })
                );
            },
            dequeue: function (t) {
                return this.each(function () {
                    b.dequeue(this, t);
                });
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
                var n,
                    i = 1,
                    r = b.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --i || r.resolveWith(o, [o]);
                    };
                for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; a--; ) (n = J.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(e);
            },
        });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        it = function (t, e) {
            return "none" === (t = e || t).style.display || ("" === t.style.display && b.contains(t.ownerDocument, t) && "none" === b.css(t, "display"));
        },
        rt = function (t, e, n, i) {
            var r,
                o,
                a = {};
            for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
            for (o in ((r = n.apply(t, i || [])), e)) t.style[o] = a[o];
            return r;
        };
    function ot(t, e, n, i) {
        var r,
            o,
            a = 20,
            s = i
                ? function () {
                    return i.cur();
                }
                : function () {
                    return b.css(t, e, "");
                },
            u = s(),
            l = (n && n[3]) || (b.cssNumber[e] ? "" : "px"),
            c = (b.cssNumber[e] || ("px" !== l && +u)) && et.exec(b.css(t, e));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--; ) b.style(t, e, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), b.style(t, e, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = l), (i.start = c), (i.end = r))), r;
    }
    var at = {};
    function st(t, e) {
        for (var n, i, r = [], o = 0, a = t.length; o < a; o++)
            (i = t[o]).style &&
            ((n = i.style.display),
                e
                    ? ("none" === n && ((r[o] = J.get(i, "display") || null), r[o] || (i.style.display = "")),
                    "" === i.style.display &&
                    it(i) &&
                    (r[o] =
                        ((u = void 0),
                            (l = void 0),
                            void 0,
                            (f = void 0),
                            (l = (s = i).ownerDocument),
                            (c = s.nodeName),
                        (f = at[c]) || ((u = l.body.appendChild(l.createElement(c))), (f = b.css(u, "display")), u.parentNode.removeChild(u), "none" === f && (f = "block"), (at[c] = f), f))))
                    : "none" !== n && ((r[o] = "none"), J.set(i, "display", n)));
        var s, u, l, c, f;
        for (o = 0; o < a; o++) null != r[o] && (t[o].style.display = r[o]);
        return t;
    }
    b.fn.extend({
        show: function () {
            return st(this, !0);
        },
        hide: function () {
            return st(this);
        },
        toggle: function (t) {
            return "boolean" == typeof t
                ? t
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                    it(this) ? b(this).show() : b(this).hide();
                });
        },
    });
    var ut = /^(?:checkbox|radio)$/i,
        lt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ct = /^$|^module$|\/(?:java|ecma)script/i,
        ft = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    function dt(t, e) {
        var n;
        return (n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []), void 0 === e || (e && S(t, e)) ? b.merge([t], n) : n;
    }
    function ht(t, e) {
        for (var n = 0, i = t.length; n < i; n++) J.set(t[n], "globalEval", !e || J.get(e[n], "globalEval"));
    }
    (ft.optgroup = ft.option), (ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead), (ft.th = ft.td);
    var pt,
        mt,
        gt = /<|&#?\w+;/;
    function vt(t, e, n, i, r) {
        for (var o, a, s, u, l, c, f = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
            if ((o = t[h]) || 0 === o)
                if ("object" === y(o)) b.merge(d, o.nodeType ? [o] : o);
                else if (gt.test(o)) {
                    for (a = a || f.appendChild(e.createElement("div")), s = (lt.exec(o) || ["", ""])[1].toLowerCase(), u = ft[s] || ft._default, a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2], c = u[0]; c--; ) a = a.lastChild;
                    b.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
                } else d.push(e.createTextNode(o));
        for (f.textContent = "", h = 0; (o = d[h++]); )
            if (i && b.inArray(o, i) > -1) r && r.push(o);
            else if (((l = b.contains(o.ownerDocument, o)), (a = dt(f.appendChild(o), "script")), l && ht(a), n)) for (c = 0; (o = a[c++]); ) ct.test(o.type || "") && n.push(o);
        return f;
    }
    (pt = i.createDocumentFragment().appendChild(i.createElement("div"))),
        (mt = i.createElement("input")).setAttribute("type", "radio"),
        mt.setAttribute("checked", "checked"),
        mt.setAttribute("name", "t"),
        pt.appendChild(mt),
        (p.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pt.innerHTML = "<textarea>x</textarea>"),
        (p.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue);
    var $t = i.documentElement,
        yt = /^key/,
        bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        wt = /^([^.]*)(?:\.(.+)|)/;
    function kt() {
        return !0;
    }
    function xt() {
        return !1;
    }
    function Ct() {
        try {
            return i.activeElement;
        } catch (t) {}
    }
    function Tt(t, e, n, i, r, o) {
        var a, s;
        if ("object" == typeof e) {
            for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), e)) Tt(t, s, n, i, e[s], o);
            return t;
        }
        if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = xt;
        else if (!r) return t;
        return (
            1 === o &&
            ((a = r),
                ((r = function (t) {
                    return b().off(t), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = b.guid++))),
                t.each(function () {
                    b.event.add(this, e, r, i, n);
                })
        );
    }
    (b.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                h,
                p,
                m,
                g = J.get(t);
            if (g)
                for (
                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && b.find.matchesSelector($t, r),
                    n.guid || (n.guid = b.guid++),
                    (u = g.events) || (u = g.events = {}),
                    (a = g.handle) ||
                    (a = g.handle = function (e) {
                        return void 0 !== b && b.event.triggered !== e.type ? b.event.dispatch.apply(t, arguments) : void 0;
                    }),
                        l = (e = (e || "").match(L) || [""]).length;
                    l--;

                )
                    (h = m = (s = wt.exec(e[l]) || [])[1]),
                        (p = (s[2] || "").split(".").sort()),
                    h &&
                    ((f = b.event.special[h] || {}),
                        (h = (r ? f.delegateType : f.bindType) || h),
                        (f = b.event.special[h] || {}),
                        (c = b.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && b.expr.match.needsContext.test(r), namespace: p.join(".") }, o)),
                    (d = u[h]) || (((d = u[h] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, i, p, a)) || (t.addEventListener && t.addEventListener(h, a))),
                    f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                        r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                        (b.event.global[h] = !0));
        },
        remove: function (t, e, n, i, r) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                h,
                p,
                m,
                g = J.hasData(t) && J.get(t);
            if (g && (u = g.events)) {
                for (l = (e = (e || "").match(L) || [""]).length; l--; )
                    if (((h = m = (s = wt.exec(e[l]) || [])[1]), (p = (s[2] || "").split(".").sort()), h)) {
                        for (f = b.event.special[h] || {}, d = u[(h = (i ? f.delegateType : f.bindType) || h)] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; )
                            (c = d[o]),
                            (!r && m !== c.origType) ||
                            (n && n.guid !== c.guid) ||
                            (s && !s.test(c.namespace)) ||
                            (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                            (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(t, c));
                        a && !d.length && ((f.teardown && !1 !== f.teardown.call(t, p, g.handle)) || b.removeEvent(t, h, g.handle), delete u[h]);
                    } else for (h in u) b.event.remove(t, h + e[l], n, i, !0);
                b.isEmptyObject(u) && J.remove(t, "handle events");
            }
        },
        dispatch: function (t) {
            var e,
                n,
                i,
                r,
                o,
                a,
                s = b.event.fix(t),
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[s.type] || [],
                c = b.event.special[s.type] || {};
            for (u[0] = s, e = 1; e < arguments.length; e++) u[e] = arguments[e];
            if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
                for (a = b.event.handlers.call(this, s, l), e = 0; (r = a[e++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
                        ((s.handleObj = o), (s.data = o.data), void 0 !== (i = ((b.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, u)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function (t, e) {
            var n,
                i,
                r,
                o,
                a,
                s = [],
                u = e.delegateCount,
                l = t.target;
            if (u && l.nodeType && !("click" === t.type && t.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(r = (i = e[n]).selector + " ")] && (a[r] = i.needsContext ? b(r, this).index(l) > -1 : b.find(r, this, null, [l]).length), a[r] && o.push(i);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < e.length && s.push({ elem: l, handlers: e.slice(u) }), s;
        },
        addProp: function (t, e) {
            Object.defineProperty(b.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e)
                    ? function () {
                        if (this.originalEvent) return e(this.originalEvent);
                    }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (t) {
            return t[b.expando] ? t : new b.Event(t);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== Ct() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === Ct() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1;
                },
                _default: function (t) {
                    return S(t.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                },
            },
        },
    }),
        (b.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
        }),
        (b.Event = function (t, e) {
            if (!(this instanceof b.Event)) return new b.Event(t, e);
            t && t.type
                ? ((this.originalEvent = t),
                    (this.type = t.type),
                    (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? kt : xt),
                    (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                    (this.currentTarget = t.currentTarget),
                    (this.relatedTarget = t.relatedTarget))
                : (this.type = t),
            e && b.extend(this, e),
                (this.timeStamp = (t && t.timeStamp) || Date.now()),
                (this[b.expando] = !0);
        }),
        (b.Event.prototype = {
            constructor: b.Event,
            isDefaultPrevented: xt,
            isPropagationStopped: xt,
            isImmediatePropagationStopped: xt,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                (this.isDefaultPrevented = kt), t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                (this.isPropagationStopped = kt), t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                (this.isImmediatePropagationStopped = kt), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        b.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (t) {
                    var e = t.button;
                    return null == t.which && yt.test(t.type) ? (null != t.charCode ? t.charCode : t.keyCode) : !t.which && void 0 !== e && bt.test(t.type) ? (1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0) : t.which;
                },
            },
            b.event.addProp
        ),
        b.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
            b.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n,
                        i = t.relatedTarget,
                        r = t.handleObj;
                    return (i && (i === this || b.contains(this, i))) || ((t.type = r.origType), (n = r.handler.apply(this, arguments)), (t.type = e)), n;
                },
            };
        }),
        b.fn.extend({
            on: function (t, e, n, i) {
                return Tt(this, t, e, n, i);
            },
            one: function (t, e, n, i) {
                return Tt(this, t, e, n, i, 1);
            },
            off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return (i = t.handleObj), b(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this;
                }
                return (
                    (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
                    !1 === n && (n = xt),
                        this.each(function () {
                            b.event.remove(this, t, n, e);
                        })
                );
            },
        });
    var Et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        St = /<script|<style|<link/i,
        At = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Dt(t, e) {
        return (S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && b(t).children("tbody")[0]) || t;
    }
    function Mt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function jt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
    }
    function Nt(t, e) {
        var n, i, r, o, a, s, u, l;
        if (1 === e.nodeType) {
            if (J.hasData(t) && ((o = J.access(t)), (a = J.set(e, o)), (l = o.events))) for (r in (delete a.handle, (a.events = {}), l)) for (n = 0, i = l[r].length; n < i; n++) b.event.add(e, r, l[r][n]);
            K.hasData(t) && ((s = K.access(t)), (u = b.extend({}, s)), K.set(e, u));
        }
    }
    function It(t, e, n, i) {
        e = a.apply([], e);
        var r,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            d = t.length,
            h = d - 1,
            g = e[0],
            v = m(g);
        if (v || (d > 1 && "string" == typeof g && !p.checkClone && At.test(g)))
            return t.each(function (r) {
                var o = t.eq(r);
                v && (e[0] = g.call(this, r, o.html())), It(o, e, n, i);
            });
        if (d && ((o = (r = vt(e, t[0].ownerDocument, !1, t, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)) {
            for (u = (s = b.map(dt(r, "script"), Mt)).length; f < d; f++) (l = r), f !== h && ((l = b.clone(l, !0, !0)), u && b.merge(s, dt(l, "script"))), n.call(t[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, b.map(s, jt), f = 0; f < u; f++)
                    (l = s[f]), ct.test(l.type || "") && !J.access(l, "globalEval") && b.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? b._evalUrl && b._evalUrl(l.src) : $(l.textContent.replace(Ot, ""), c, l));
        }
        return t;
    }
    function Lt(t, e, n) {
        for (var i, r = e ? b.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || b.cleanData(dt(i)), i.parentNode && (n && b.contains(i.ownerDocument, i) && ht(dt(i, "script")), i.parentNode.removeChild(i));
        return t;
    }
    b.extend({
        htmlPrefilter: function (t) {
            return t.replace(Et, "<$1></$2>");
        },
        clone: function (t, e, n) {
            var i,
                r,
                o,
                a,
                s,
                u,
                l,
                c = t.cloneNode(!0),
                f = b.contains(t.ownerDocument, t);
            if (!(p.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || b.isXMLDoc(t)))
                for (a = dt(c), i = 0, r = (o = dt(t)).length; i < r; i++)
                    (s = o[i]), (u = a[i]), void 0, "input" === (l = u.nodeName.toLowerCase()) && ut.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
            if (e)
                if (n) for (o = o || dt(t), a = a || dt(c), i = 0, r = o.length; i < r; i++) Nt(o[i], a[i]);
                else Nt(t, c);
            return (a = dt(c, "script")).length > 0 && ht(a, !f && dt(t, "script")), c;
        },
        cleanData: function (t) {
            for (var e, n, i, r = b.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (G(n)) {
                    if ((e = n[J.expando])) {
                        if (e.events) for (i in e.events) r[i] ? b.event.remove(n, i) : b.removeEvent(n, i, e.handle);
                        n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        b.fn.extend({
            detach: function (t) {
                return Lt(this, t, !0);
            },
            remove: function (t) {
                return Lt(this, t);
            },
            text: function (t) {
                return _(
                    this,
                    function (t) {
                        return void 0 === t
                            ? b.text(this)
                            : this.empty().each(function () {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                            });
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            append: function () {
                return It(this, arguments, function (t) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Dt(this, t).appendChild(t);
                });
            },
            prepend: function () {
                return It(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Dt(this, t);
                        e.insertBefore(t, e.firstChild);
                    }
                });
            },
            before: function () {
                return It(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this);
                });
            },
            after: function () {
                return It(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                });
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (b.cleanData(dt(t, !1)), (t.textContent = ""));
                return this;
            },
            clone: function (t, e) {
                return (
                    (t = null != t && t),
                        (e = null == e ? t : e),
                        this.map(function () {
                            return b.clone(this, t, e);
                        })
                );
            },
            html: function (t) {
                return _(
                    this,
                    function (t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !St.test(t) && !ft[(lt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = b.htmlPrefilter(t);
                            try {
                                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (b.cleanData(dt(e, !1)), (e.innerHTML = t));
                                e = 0;
                            } catch (t) {}
                        }
                        e && this.empty().append(t);
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            replaceWith: function () {
                var t = [];
                return It(
                    this,
                    arguments,
                    function (e) {
                        var n = this.parentNode;
                        b.inArray(this, t) < 0 && (b.cleanData(dt(this)), n && n.replaceChild(e, this));
                    },
                    t
                );
            },
        }),
        b.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
            b.fn[t] = function (t) {
                for (var n, i = [], r = b(t), o = r.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), b(r[a])[e](n), s.apply(i, n.get());
                return this.pushStack(i);
            };
        });
    var Pt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        Ut = function (e) {
            var n = e.ownerDocument.defaultView;
            return (n && n.opener) || (n = t), n.getComputedStyle(e);
        },
        qt = new RegExp(nt.join("|"), "i");
    function Rt(t, e, n) {
        var i,
            r,
            o,
            a,
            s = t.style;
        return (
            (n = n || Ut(t)) &&
            ("" !== (a = n.getPropertyValue(e) || n[e]) || b.contains(t.ownerDocument, t) || (a = b.style(t, e)),
            !p.pixelBoxStyles() && Pt.test(a) && qt.test(e) && ((i = s.width), (r = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = i), (s.minWidth = r), (s.maxWidth = o))),
                void 0 !== a ? a + "" : a
        );
    }
    function Vt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (c) {
                (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    $t.appendChild(l).appendChild(c);
                var e = t.getComputedStyle(c);
                (r = "1%" !== e.top),
                    (u = 12 === n(e.marginLeft)),
                    (c.style.right = "60%"),
                    (s = 36 === n(e.right)),
                    (o = 36 === n(e.width)),
                    (c.style.position = "absolute"),
                    (a = 36 === c.offsetWidth || "absolute"),
                    $t.removeChild(l),
                    (c = null);
            }
        }
        function n(t) {
            return Math.round(parseFloat(t));
        }
        var r,
            o,
            a,
            s,
            u,
            l = i.createElement("div"),
            c = i.createElement("div");
        c.style &&
        ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (p.clearCloneStyle = "content-box" === c.style.backgroundClip),
            b.extend(p, {
                boxSizingReliable: function () {
                    return e(), o;
                },
                pixelBoxStyles: function () {
                    return e(), s;
                },
                pixelPosition: function () {
                    return e(), r;
                },
                reliableMarginLeft: function () {
                    return e(), u;
                },
                scrollboxSize: function () {
                    return e(), a;
                },
            }));
    })();
    var Ht = /^(none|table(?!-c[ea]).+)/,
        _t = /^--/,
        Ft = { position: "absolute", visibility: "hidden", display: "block" },
        Bt = { letterSpacing: "0", fontWeight: "400" },
        zt = ["Webkit", "Moz", "ms"],
        Wt = i.createElement("div").style;
    function Gt(t) {
        var e = b.cssProps[t];
        return (
            e ||
            (e = b.cssProps[t] =
                (function (t) {
                    if (t in Wt) return t;
                    for (var e = t[0].toUpperCase() + t.slice(1), n = zt.length; n--; ) if ((t = zt[n] + e) in Wt) return t;
                })(t) || t),
                e
        );
    }
    function Xt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }
    function Jt(t, e, n, i, r, o) {
        var a = "width" === e ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += b.css(t, n + nt[a], !0, r)),
                i
                    ? ("content" === n && (u -= b.css(t, "padding" + nt[a], !0, r)), "margin" !== n && (u -= b.css(t, "border" + nt[a] + "Width", !0, r)))
                    : ((u += b.css(t, "padding" + nt[a], !0, r)), "padding" !== n ? (u += b.css(t, "border" + nt[a] + "Width", !0, r)) : (s += b.css(t, "border" + nt[a] + "Width", !0, r)));
        return !i && o >= 0 && (u += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - u - s - 0.5))), u;
    }
    function Kt(t, e, n) {
        var i = Ut(t),
            r = Rt(t, e, i),
            o = "border-box" === b.css(t, "boxSizing", !1, i),
            a = o;
        if (Pt.test(r)) {
            if (!n) return r;
            r = "auto";
        }
        return (
            (a = a && (p.boxSizingReliable() || r === t.style[e])),
            ("auto" === r || (!parseFloat(r) && "inline" === b.css(t, "display", !1, i))) && ((r = t["offset" + e[0].toUpperCase() + e.slice(1)]), (a = !0)),
            (r = parseFloat(r) || 0) + Jt(t, e, n || (o ? "border" : "content"), a, i, r) + "px"
        );
    }
    function Yt(t, e, n, i, r) {
        return new Yt.prototype.init(t, e, n, i, r);
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = Rt(t, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r,
                    o,
                    a,
                    s = W(e),
                    u = _t.test(e),
                    l = t.style;
                if ((u || (e = Gt(s)), (a = b.cssHooks[e] || b.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e];
                "string" == (o = typeof n) && (r = et.exec(n)) && r[1] && ((n = ot(t, e, r)), (o = "number")),
                null != n &&
                n == n &&
                ("number" === o && (n += (r && r[3]) || (b.cssNumber[s] ? "" : "px")),
                p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(t, n, i))) || (u ? l.setProperty(e, n) : (l[e] = n)));
            }
        },
        css: function (t, e, n, i) {
            var r,
                o,
                a,
                s = W(e);
            return (
                _t.test(e) || (e = Gt(s)),
                (a = b.cssHooks[e] || b.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)),
                void 0 === r && (r = Rt(t, e, i)),
                "normal" === r && e in Bt && (r = Bt[e]),
                    "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
            );
        },
    }),
        b.each(["height", "width"], function (t, e) {
            b.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n)
                        return !Ht.test(b.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                            ? Kt(t, e, i)
                            : rt(t, Ft, function () {
                                return Kt(t, e, i);
                            });
                },
                set: function (t, n, i) {
                    var r,
                        o = Ut(t),
                        a = "border-box" === b.css(t, "boxSizing", !1, o),
                        s = i && Jt(t, e, i, a, o);
                    return (
                        a && p.scrollboxSize() === o.position && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Jt(t, e, "border", !1, o) - 0.5)),
                        s && (r = et.exec(n)) && "px" !== (r[3] || "px") && ((t.style[e] = n), (n = b.css(t, e))),
                            Xt(0, n, s)
                    );
                },
            };
        }),
        (b.cssHooks.marginLeft = Vt(p.reliableMarginLeft, function (t, e) {
            if (e)
                return (
                    (parseFloat(Rt(t, "marginLeft")) ||
                        t.getBoundingClientRect().left -
                        rt(t, { marginLeft: 0 }, function () {
                            return t.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        b.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
            (b.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + nt[i] + e] = o[i] || o[i - 2] || o[0];
                    return r;
                },
            }),
            "margin" !== t && (b.cssHooks[t + e].set = Xt);
        }),
        b.fn.extend({
            css: function (t, e) {
                return _(
                    this,
                    function (t, e, n) {
                        var i,
                            r,
                            o = {},
                            a = 0;
                        if (Array.isArray(e)) {
                            for (i = Ut(t), r = e.length; a < r; a++) o[e[a]] = b.css(t, e[a], !1, i);
                            return o;
                        }
                        return void 0 !== n ? b.style(t, e, n) : b.css(t, e);
                    },
                    t,
                    e,
                    arguments.length > 1
                );
            },
        }),
        (b.Tween = Yt),
        (Yt.prototype = {
            constructor: Yt,
            init: function (t, e, n, i, r, o) {
                (this.elem = t), (this.prop = n), (this.easing = r || b.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (b.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var t = Yt.propHooks[this.prop];
                return t && t.get ? t.get(this) : Yt.propHooks._default.get(this);
            },
            run: function (t) {
                var e,
                    n = Yt.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = e = b.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                        (this.now = (this.end - this.start) * e + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : Yt.propHooks._default.set(this),
                        this
                );
            },
        }),
        (Yt.prototype.init.prototype = Yt.prototype),
        (Yt.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = b.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                },
                set: function (t) {
                    b.fx.step[t.prop] ? b.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (null == t.elem.style[b.cssProps[t.prop]] && !b.cssHooks[t.prop]) ? (t.elem[t.prop] = t.now) : b.style(t.elem, t.prop, t.now + t.unit);
                },
            },
        }),
        (Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
        }),
        (b.easing = {
            linear: function (t) {
                return t;
            },
            swing: function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (b.fx = Yt.prototype.init),
        (b.fx.step = {});
    var Qt,
        Zt,
        te,
        ee,
        ne = /^(?:toggle|show|hide)$/,
        ie = /queueHooks$/;
    function re() {
        Zt && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(re) : t.setTimeout(re, b.fx.interval), b.fx.tick());
    }
    function oe() {
        return (
            t.setTimeout(function () {
                Qt = void 0;
            }),
                (Qt = Date.now())
        );
    }
    function ae(t, e) {
        var n,
            i = 0,
            r = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = nt[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r;
    }
    function se(t, e, n) {
        for (var i, r = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), o = 0, a = r.length; o < a; o++) if ((i = r[o].call(n, e, t))) return i;
    }
    function ue(t, e, n) {
        var i,
            r,
            o = 0,
            a = ue.prefilters.length,
            s = b.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (r) return !1;
                for (var e = Qt || oe(), n = Math.max(0, l.startTime + l.duration - e), i = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(i);
                return s.notifyWith(t, [l, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [l, 1, 0]), s.resolveWith(t, [l]), !1);
            },
            l = s.promise({
                elem: t,
                props: b.extend({}, e),
                opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Qt || oe(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = b.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(i), i;
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) l.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [l, 1, 0]), s.resolveWith(t, [l, e])) : s.rejectWith(t, [l, e]), this;
                },
            }),
            c = l.props;
        for (
            (function (t, e) {
                var n, i, r, o, a;
                for (n in t)
                    if (((r = e[(i = W(n))]), (o = t[n]), Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])), n !== i && ((t[i] = o), delete t[n]), (a = b.cssHooks[i]) && ("expand" in a)))
                        for (n in ((o = a.expand(o)), delete t[i], o)) (n in t) || ((t[n] = o[n]), (e[n] = r));
                    else e[i] = r;
            })(c, l.opts.specialEasing);
            o < a;
            o++
        )
            if ((i = ue.prefilters[o].call(l, t, c, l.opts))) return m(i.stop) && (b._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i;
        return (
            b.map(c, se, l),
            m(l.opts.start) && l.opts.start.call(t, l),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                b.fx.timer(b.extend(u, { elem: t, anim: l, queue: l.opts.queue })),
                l
        );
    }
    (b.Animation = b.extend(ue, {
        tweeners: {
            "*": [
                function (t, e) {
                    var n = this.createTween(t, e);
                    return ot(n.elem, t, et.exec(e), n), n;
                },
            ],
        },
        tweener: function (t, e) {
            m(t) ? ((e = t), (t = ["*"])) : (t = t.match(L));
            for (var n, i = 0, r = t.length; i < r; i++) (n = t[i]), (ue.tweeners[n] = ue.tweeners[n] || []), ue.tweeners[n].unshift(e);
        },
        prefilters: [
            function (t, e, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in e || "height" in e,
                    d = this,
                    h = {},
                    p = t.style,
                    m = t.nodeType && it(t),
                    g = J.get(t, "fxshow");
                for (i in (n.queue ||
                (null == (a = b._queueHooks(t, "fx")).unqueued &&
                ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                        a.unqueued || s();
                    })),
                    a.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            a.unqueued--, b.queue(t, "fx").length || a.empty.fire();
                        });
                    })),
                    e))
                    if (((r = e[i]), ne.test(r))) {
                        if ((delete e[i], (o = o || "toggle" === r), r === (m ? "hide" : "show"))) {
                            if ("show" !== r || !g || void 0 === g[i]) continue;
                            m = !0;
                        }
                        h[i] = (g && g[i]) || b.style(t, i);
                    }
                if ((u = !b.isEmptyObject(e)) || !b.isEmptyObject(h))
                    for (i in (f &&
                    1 === t.nodeType &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    null == (l = g && g.display) && (l = J.get(t, "display")),
                    "none" === (c = b.css(t, "display")) && (l ? (c = l) : (st([t], !0), (l = t.style.display || l), (c = b.css(t, "display")), st([t]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === b.css(t, "float") &&
                    (u ||
                    (d.done(function () {
                        p.display = l;
                    }),
                    null == l && ((c = p.display), (l = "none" === c ? "" : c))),
                        (p.display = "inline-block"))),
                    n.overflow &&
                    ((p.overflow = "hidden"),
                        d.always(function () {
                            (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                        })),
                        (u = !1),
                        h))
                        u ||
                        (g ? "hidden" in g && (m = g.hidden) : (g = J.access(t, "fxshow", { display: l })),
                        o && (g.hidden = !m),
                        m && st([t], !0),
                            d.done(function () {
                                for (i in (m || st([t]), J.remove(t, "fxshow"), h)) b.style(t, i, h[i]);
                            })),
                            (u = se(m ? g[i] : 0, i, d)),
                        i in g || ((g[i] = u.start), m && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (t, e) {
            e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
        },
    })),
        (b.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? b.extend({}, t) : { complete: n || (!n && e) || (m(t) && t), duration: t, easing: (n && e) || (e && !m(e) && e) };
            return (
                b.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in b.fx.speeds ? (i.duration = b.fx.speeds[i.duration]) : (i.duration = b.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                    (i.old = i.complete),
                    (i.complete = function () {
                        m(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue);
                    }),
                    i
            );
        }),
        b.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(it).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
            },
            animate: function (t, e, n, i) {
                var r = b.isEmptyObject(t),
                    o = b.speed(e, n, i),
                    a = function () {
                        var e = ue(this, b.extend({}, t), o);
                        (r || J.get(this, "finish")) && e.stop(!0);
                    };
                return (a.finish = a), r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n);
                };
                return (
                    "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                    e && !1 !== t && this.queue(t || "fx", []),
                        this.each(function () {
                            var e = !0,
                                r = null != t && t + "queueHooks",
                                o = b.timers,
                                a = J.get(this);
                            if (r) a[r] && a[r].stop && i(a[r]);
                            else for (r in a) a[r] && a[r].stop && ie.test(r) && i(a[r]);
                            for (r = o.length; r--; ) o[r].elem !== this || (null != t && o[r].queue !== t) || (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
                            (!e && n) || b.dequeue(this, t);
                        })
                );
            },
            finish: function (t) {
                return (
                    !1 !== t && (t = t || "fx"),
                        this.each(function () {
                            var e,
                                n = J.get(this),
                                i = n[t + "queue"],
                                r = n[t + "queueHooks"],
                                o = b.timers,
                                a = i ? i.length : 0;
                            for (n.finish = !0, b.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                            for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                            delete n.finish;
                        })
                );
            },
        }),
        b.each(["toggle", "show", "hide"], function (t, e) {
            var n = b.fn[e];
            b.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ae(e, !0), t, i, r);
            };
        }),
        b.each({ slideDown: ae("show"), slideUp: ae("hide"), slideToggle: ae("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
            b.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i);
            };
        }),
        (b.timers = []),
        (b.fx.tick = function () {
            var t,
                e = 0,
                n = b.timers;
            for (Qt = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || b.fx.stop(), (Qt = void 0);
        }),
        (b.fx.timer = function (t) {
            b.timers.push(t), b.fx.start();
        }),
        (b.fx.interval = 13),
        (b.fx.start = function () {
            Zt || ((Zt = !0), re());
        }),
        (b.fx.stop = function () {
            Zt = null;
        }),
        (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (b.fn.delay = function (e, n) {
            return (
                (e = (b.fx && b.fx.speeds[e]) || e),
                    (n = n || "fx"),
                    this.queue(n, function (n, i) {
                        var r = t.setTimeout(n, e);
                        i.stop = function () {
                            t.clearTimeout(r);
                        };
                    })
            );
        }),
        (te = i.createElement("input")),
        (ee = i.createElement("select").appendChild(i.createElement("option"))),
        (te.type = "checkbox"),
        (p.checkOn = "" !== te.value),
        (p.optSelected = ee.selected),
        ((te = i.createElement("input")).value = "t"),
        (te.type = "radio"),
        (p.radioValue = "t" === te.value);
    var le,
        ce = b.expr.attrHandle;
    b.fn.extend({
        attr: function (t, e) {
            return _(this, b.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
            return this.each(function () {
                b.removeAttr(this, t);
            });
        },
    }),
        b.extend({
            attr: function (t, e, n) {
                var i,
                    r,
                    o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === t.getAttribute
                        ? b.prop(t, e, n)
                        : ((1 === o && b.isXMLDoc(t)) || (r = b.attrHooks[e.toLowerCase()] || (b.expr.match.bool.test(e) ? le : void 0)),
                            void 0 !== n
                                ? null === n
                                ? void b.removeAttr(t, e)
                                : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                                    ? i
                                    : (t.setAttribute(e, n + ""), n)
                                : r && "get" in r && null !== (i = r.get(t, e))
                                ? i
                                : null == (i = b.find.attr(t, e))
                                    ? void 0
                                    : i);
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!p.radioValue && "radio" === e && S(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e;
                        }
                    },
                },
            },
            removeAttr: function (t, e) {
                var n,
                    i = 0,
                    r = e && e.match(L);
                if (r && 1 === t.nodeType) for (; (n = r[i++]); ) t.removeAttribute(n);
            },
        }),
        (le = {
            set: function (t, e, n) {
                return !1 === e ? b.removeAttr(t, n) : t.setAttribute(n, n), n;
            },
        }),
        b.each(b.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = ce[e] || b.find.attr;
            ce[e] = function (t, e, i) {
                var r,
                    o,
                    a = e.toLowerCase();
                return i || ((o = ce[a]), (ce[a] = r), (r = null != n(t, e, i) ? a : null), (ce[a] = o)), r;
            };
        });
    var fe = /^(?:input|select|textarea|button)$/i,
        de = /^(?:a|area)$/i;
    function he(t) {
        return (t.match(L) || []).join(" ");
    }
    function pe(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
    }
    function me(t) {
        return Array.isArray(t) ? t : ("string" == typeof t && t.match(L)) || [];
    }
    b.fn.extend({
        prop: function (t, e) {
            return _(this, b.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[b.propFix[t] || t];
            });
        },
    }),
        b.extend({
            prop: function (t, e, n) {
                var i,
                    r,
                    o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && b.isXMLDoc(t)) || ((e = b.propFix[e] || e), (r = b.propHooks[e])),
                            void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t[e] = n)) : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = b.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : fe.test(t.nodeName) || (de.test(t.nodeName) && t.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
    p.optSelected ||
    (b.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
    }),
        b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            b.propFix[this.toLowerCase()] = this;
        }),
        b.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        b(this).addClass(t.call(this, e, pe(this)));
                    });
                if ((e = me(t)).length)
                    for (; (n = this[u++]); )
                        if (((r = pe(n)), (i = 1 === n.nodeType && " " + he(r) + " "))) {
                            for (a = 0; (o = e[a++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (s = he(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        b(this).removeClass(t.call(this, e, pe(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = me(t)).length)
                    for (; (n = this[u++]); )
                        if (((r = pe(n)), (i = 1 === n.nodeType && " " + he(r) + " "))) {
                            for (a = 0; (o = e[a++]); ) for (; i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                            r !== (s = he(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i
                    ? e
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : m(t)
                        ? this.each(function (n) {
                            b(this).toggleClass(t.call(this, n, pe(this), e), e);
                        })
                        : this.each(function () {
                            var e, r, o, a;
                            if (i) for (r = 0, o = b(this), a = me(t); (e = a[r++]); ) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                            else (void 0 !== t && "boolean" !== n) || ((e = pe(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""));
                        });
            },
            hasClass: function (t) {
                var e,
                    n,
                    i = 0;
                for (e = " " + t + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + he(pe(n)) + " ").indexOf(e) > -1) return !0;
                return !1;
            },
        });
    var ge = /\r/g;
    b.fn.extend({
        val: function (t) {
            var e,
                n,
                i,
                r = this[0];
            return arguments.length
                ? ((i = m(t)),
                    this.each(function (n) {
                        var r;
                        1 === this.nodeType &&
                        (null == (r = i ? t.call(this, n, b(this).val()) : t)
                            ? (r = "")
                            : "number" == typeof r
                                ? (r += "")
                                : Array.isArray(r) &&
                                (r = b.map(r, function (t) {
                                    return null == t ? "" : t + "";
                                })),
                        ((e = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value")) || (this.value = r));
                    }))
                : r
                    ? (e = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value"))
                        ? n
                        : "string" == typeof (n = r.value)
                            ? n.replace(ge, "")
                            : null == n
                                ? ""
                                : n
                    : void 0;
        },
    }),
        b.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = b.find.attr(t, "value");
                        return null != e ? e : he(b.text(t));
                    },
                },
                select: {
                    get: function (t) {
                        var e,
                            n,
                            i,
                            r = t.options,
                            o = t.selectedIndex,
                            a = "select-one" === t.type,
                            s = a ? null : [],
                            u = a ? o + 1 : r.length;
                        for (i = o < 0 ? u : a ? o : 0; i < u; i++)
                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                                if (((e = b(n).val()), a)) return e;
                                s.push(e);
                            }
                        return s;
                    },
                    set: function (t, e) {
                        for (var n, i, r = t.options, o = b.makeArray(e), a = r.length; a--; ) ((i = r[a]).selected = b.inArray(b.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o;
                    },
                },
            },
        }),
        b.each(["radio", "checkbox"], function () {
            (b.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return (t.checked = b.inArray(b(t).val(), e) > -1);
                },
            }),
            p.checkOn ||
            (b.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
            });
        }),
        (p.focusin = "onfocusin" in t);
    var ve = /^(?:focusinfocus|focusoutblur)$/,
        $e = function (t) {
            t.stopPropagation();
        };
    b.extend(b.event, {
        trigger: function (e, n, r, o) {
            var a,
                s,
                u,
                l,
                c,
                d,
                h,
                p,
                v = [r || i],
                $ = f.call(e, "type") ? e.type : e,
                y = f.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((s = p = u = r = r || i),
                3 !== r.nodeType &&
                8 !== r.nodeType &&
                !ve.test($ + b.event.triggered) &&
                ($.indexOf(".") > -1 && (($ = (y = $.split(".")).shift()), y.sort()),
                    (c = $.indexOf(":") < 0 && "on" + $),
                    ((e = e[b.expando] ? e : new b.Event($, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
                    (e.namespace = y.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                e.target || (e.target = r),
                    (n = null == n ? [e] : b.makeArray(n, [e])),
                    (h = b.event.special[$] || {}),
                o || !h.trigger || !1 !== h.trigger.apply(r, n)))
            ) {
                if (!o && !h.noBubble && !g(r)) {
                    for (l = h.delegateType || $, ve.test(l + $) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (u = s);
                    u === (r.ownerDocument || i) && v.push(u.defaultView || u.parentWindow || t);
                }
                for (a = 0; (s = v[a++]) && !e.isPropagationStopped(); )
                    (p = s),
                        (e.type = a > 1 ? l : h.bindType || $),
                    (d = (J.get(s, "events") || {})[e.type] && J.get(s, "handle")) && d.apply(s, n),
                    (d = c && s[c]) && d.apply && G(s) && ((e.result = d.apply(s, n)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = $),
                    o ||
                    e.isDefaultPrevented() ||
                    (h._default && !1 !== h._default.apply(v.pop(), n)) ||
                    !G(r) ||
                    (c &&
                        m(r[$]) &&
                        !g(r) &&
                        ((u = r[c]) && (r[c] = null),
                            (b.event.triggered = $),
                        e.isPropagationStopped() && p.addEventListener($, $e),
                            r[$](),
                        e.isPropagationStopped() && p.removeEventListener($, $e),
                            (b.event.triggered = void 0),
                        u && (r[c] = u))),
                        e.result
                );
            }
        },
        simulate: function (t, e, n) {
            var i = b.extend(new b.Event(), n, { type: t, isSimulated: !0 });
            b.event.trigger(i, null, e);
        },
    }),
        b.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    b.event.trigger(t, e, this);
                });
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return b.event.trigger(t, e, n, !0);
            },
        }),
    p.focusin ||
    b.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var n = function (t) {
            b.event.simulate(e, t.target, b.event.fix(t));
        };
        b.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = J.access(i, e);
                r || i.addEventListener(t, n, !0), J.access(i, e, (r || 0) + 1);
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = J.access(i, e) - 1;
                r ? J.access(i, e, r) : (i.removeEventListener(t, n, !0), J.remove(i, e));
            },
        };
    });
    var ye = t.location,
        be = Date.now(),
        we = /\?/;
    b.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (t) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || b.error("Invalid XML: " + e), n;
    };
    var ke = /\[\]$/,
        xe = /\r?\n/g,
        Ce = /^(?:submit|button|image|reset|file)$/i,
        Te = /^(?:input|select|textarea|keygen)/i;
    function Ee(t, e, n, i) {
        var r;
        if (Array.isArray(e))
            b.each(e, function (e, r) {
                n || ke.test(t) ? i(t, r) : Ee(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i);
            });
        else if (n || "object" !== y(e)) i(t, e);
        else for (r in e) Ee(t + "[" + r + "]", e[r], n, i);
    }
    (b.param = function (t, e) {
        var n,
            i = [],
            r = function (t, e) {
                var n = m(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(t) || (t.jquery && !b.isPlainObject(t)))
            b.each(t, function () {
                r(this.name, this.value);
            });
        else for (n in t) Ee(n, t[n], e, r);
        return i.join("&");
    }),
        b.fn.extend({
            serialize: function () {
                return b.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = b.prop(this, "elements");
                    return t ? b.makeArray(t) : this;
                })
                    .filter(function () {
                        var t = this.type;
                        return this.name && !b(this).is(":disabled") && Te.test(this.nodeName) && !Ce.test(t) && (this.checked || !ut.test(t));
                    })
                    .map(function (t, e) {
                        var n = b(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                                ? b.map(n, function (t) {
                                    return { name: e.name, value: t.replace(xe, "\r\n") };
                                })
                                : { name: e.name, value: n.replace(xe, "\r\n") };
                    })
                    .get();
            },
        });
    var Se = /%20/g,
        Ae = /#.*$/,
        Oe = /([?&])_=[^&]*/,
        De = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Me = /^(?:GET|HEAD)$/,
        je = /^\/\//,
        Ne = {},
        Ie = {},
        Le = "*/".concat("*"),
        Pe = i.createElement("a");
    function Ue(t) {
        return function (e, n) {
            "string" != typeof e && ((n = e), (e = "*"));
            var i,
                r = 0,
                o = e.toLowerCase().match(L) || [];
            if (m(n)) for (; (i = o[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
        };
    }
    function qe(t, e, n, i) {
        var r = {},
            o = t === Ie;
        function a(s) {
            var u;
            return (
                (r[s] = !0),
                    b.each(t[s] || [], function (t, s) {
                        var l = s(e, n, i);
                        return "string" != typeof l || o || r[l] ? (o ? !(u = l) : void 0) : (e.dataTypes.unshift(l), a(l), !1);
                    }),
                    u
            );
        }
        return a(e.dataTypes[0]) || (!r["*"] && a("*"));
    }
    function Re(t, e) {
        var n,
            i,
            r = b.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && b.extend(!0, t, i), t;
    }
    (Pe.href = ye.href),
        b.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ye.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ye.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Le, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": b.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, e) {
                return e ? Re(Re(t, b.ajaxSettings), e) : Re(b.ajaxSettings, t);
            },
            ajaxPrefilter: Ue(Ne),
            ajaxTransport: Ue(Ie),
            ajax: function (e, n) {
                "object" == typeof e && ((n = e), (e = void 0)), (n = n || {});
                var r,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f,
                    d,
                    h,
                    p = b.ajaxSetup({}, n),
                    m = p.context || p,
                    g = p.context && (m.nodeType || m.jquery) ? b(m) : b.event,
                    v = b.Deferred(),
                    $ = b.Callbacks("once memory"),
                    y = p.statusCode || {},
                    w = {},
                    k = {},
                    x = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (c) {
                                if (!s) for (s = {}; (e = De.exec(a)); ) s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()];
                            }
                            return null == e ? null : e;
                        },
                        getAllResponseHeaders: function () {
                            return c ? a : null;
                        },
                        setRequestHeader: function (t, e) {
                            return null == c && ((t = k[t.toLowerCase()] = k[t.toLowerCase()] || t), (w[t] = e)), this;
                        },
                        overrideMimeType: function (t) {
                            return null == c && (p.mimeType = t), this;
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (c) C.always(t[C.status]);
                                else for (e in t) y[e] = [y[e], t[e]];
                            return this;
                        },
                        abort: function (t) {
                            var e = t || x;
                            return r && r.abort(e), T(0, e), this;
                        },
                    };
                if (
                    (v.promise(C),
                        (p.url = ((e || p.url || ye.href) + "").replace(je, ye.protocol + "//")),
                        (p.type = n.method || n.type || p.method || p.type),
                        (p.dataTypes = (p.dataType || "*").toLowerCase().match(L) || [""]),
                    null == p.crossDomain)
                ) {
                    l = i.createElement("a");
                    try {
                        (l.href = p.url), (l.href = l.href), (p.crossDomain = Pe.protocol + "//" + Pe.host != l.protocol + "//" + l.host);
                    } catch (t) {
                        p.crossDomain = !0;
                    }
                }
                if ((p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qe(Ne, p, n, C), c)) return C;
                for (d in ((f = b.event && p.global) && 0 == b.active++ && b.event.trigger("ajaxStart"),
                    (p.type = p.type.toUpperCase()),
                    (p.hasContent = !Me.test(p.type)),
                    (o = p.url.replace(Ae, "")),
                    p.hasContent
                        ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Se, "+"))
                        : ((h = p.url.slice(o.length)),
                        p.data && (p.processData || "string" == typeof p.data) && ((o += (we.test(o) ? "&" : "?") + p.data), delete p.data),
                        !1 === p.cache && ((o = o.replace(Oe, "$1")), (h = (we.test(o) ? "&" : "?") + "_=" + be++ + h)),
                            (p.url = o + h)),
                p.ifModified && (b.lastModified[o] && C.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && C.setRequestHeader("If-None-Match", b.etag[o])),
                ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
                    C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Le + "; q=0.01" : "") : p.accepts["*"]),
                    p.headers))
                    C.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(m, C, p) || c)) return C.abort();
                if (((x = "abort"), $.add(p.complete), C.done(p.success), C.fail(p.error), (r = qe(Ie, p, n, C)))) {
                    if (((C.readyState = 1), f && g.trigger("ajaxSend", [C, p]), c)) return C;
                    p.async &&
                    p.timeout > 0 &&
                    (u = t.setTimeout(function () {
                        C.abort("timeout");
                    }, p.timeout));
                    try {
                        (c = !1), r.send(w, T);
                    } catch (t) {
                        if (c) throw t;
                        T(-1, t);
                    }
                } else T(-1, "No Transport");
                function T(e, n, i, s) {
                    var l,
                        d,
                        h,
                        w,
                        k,
                        x = n;
                    c ||
                    ((c = !0),
                    u && t.clearTimeout(u),
                        (r = void 0),
                        (a = s || ""),
                        (C.readyState = e > 0 ? 4 : 0),
                        (l = (e >= 200 && e < 300) || 304 === e),
                    i &&
                    (w = (function (t, e, n) {
                        for (var i, r, o, a, s = t.contents, u = t.dataTypes; "*" === u[0]; ) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in s)
                                if (s[r] && s[r].test(i)) {
                                    u.unshift(r);
                                    break;
                                }
                        if (u[0] in n) o = u[0];
                        else {
                            for (r in n) {
                                if (!u[0] || t.converters[r + " " + u[0]]) {
                                    o = r;
                                    break;
                                }
                                a || (a = r);
                            }
                            o = o || a;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                    })(p, C, i)),
                        (w = (function (t, e, n, i) {
                            var r,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = t.dataTypes.slice();
                            if (c[1]) for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
                            for (o = c.shift(); o; )
                                if ((t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (u = o), (o = c.shift())))
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (r in l)
                                                if ((s = r.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? (a = l[r]) : !0 !== l[r] && ((o = s[0]), c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && t.throws) e = a(e);
                                            else
                                                try {
                                                    e = a(e);
                                                } catch (t) {
                                                    return { state: "parsererror", error: a ? t : "No conversion from " + u + " to " + o };
                                                }
                                    }
                            return { state: "success", data: e };
                        })(p, w, C, l)),
                        l
                            ? (p.ifModified && ((k = C.getResponseHeader("Last-Modified")) && (b.lastModified[o] = k), (k = C.getResponseHeader("etag")) && (b.etag[o] = k)),
                                204 === e || "HEAD" === p.type ? (x = "nocontent") : 304 === e ? (x = "notmodified") : ((x = w.state), (d = w.data), (l = !(h = w.error))))
                            : ((h = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                        (C.status = e),
                        (C.statusText = (n || x) + ""),
                        l ? v.resolveWith(m, [d, x, C]) : v.rejectWith(m, [C, x, h]),
                        C.statusCode(y),
                        (y = void 0),
                    f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [C, p, l ? d : h]),
                        $.fireWith(m, [C, x]),
                    f && (g.trigger("ajaxComplete", [C, p]), --b.active || b.event.trigger("ajaxStop")));
                }
                return C;
            },
            getJSON: function (t, e, n) {
                return b.get(t, e, n, "json");
            },
            getScript: function (t, e) {
                return b.get(t, void 0, e, "script");
            },
        }),
        b.each(["get", "post"], function (t, e) {
            b[e] = function (t, n, i, r) {
                return m(n) && ((r = r || i), (i = n), (n = void 0)), b.ajax(b.extend({ url: t, type: e, dataType: r, data: n, success: i }, b.isPlainObject(t) && t));
            };
        }),
        (b._evalUrl = function (t) {
            return b.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        b.fn.extend({
            wrapAll: function (t) {
                var e;
                return (
                    this[0] &&
                    (m(t) && (t = t.call(this[0])),
                        (e = b(t, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                                return t;
                            })
                            .append(this)),
                        this
                );
            },
            wrapInner: function (t) {
                return m(t)
                    ? this.each(function (e) {
                        b(this).wrapInner(t.call(this, e));
                    })
                    : this.each(function () {
                        var e = b(this),
                            n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t);
                    });
            },
            wrap: function (t) {
                var e = m(t);
                return this.each(function (n) {
                    b(this).wrapAll(e ? t.call(this, n) : t);
                });
            },
            unwrap: function (t) {
                return (
                    this.parent(t)
                        .not("body")
                        .each(function () {
                            b(this).replaceWith(this.childNodes);
                        }),
                        this
                );
            },
        }),
        (b.expr.pseudos.hidden = function (t) {
            return !b.expr.pseudos.visible(t);
        }),
        (b.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
        }),
        (b.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest();
            } catch (t) {}
        });
    var Ve = { 0: 200, 1223: 204 },
        He = b.ajaxSettings.xhr();
    (p.cors = !!He && "withCredentials" in He),
        (p.ajax = He = !!He),
        b.ajaxTransport(function (e) {
            var n, i;
            if (p.cors || (He && !e.crossDomain))
                return {
                    send: function (r, o) {
                        var a,
                            s = e.xhr();
                        if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) s.setRequestHeader(a, r[a]);
                        (n = function (t) {
                            return function () {
                                n &&
                                ((n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                    "abort" === t
                                        ? s.abort()
                                        : "error" === t
                                        ? "number" != typeof s.status
                                            ? o(0, "error")
                                            : o(s.status, s.statusText)
                                        : o(Ve[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = n()),
                            (i = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = i)
                                : (s.onreadystatechange = function () {
                                    4 === s.readyState &&
                                    t.setTimeout(function () {
                                        n && i();
                                    });
                                }),
                            (n = n("abort"));
                        try {
                            s.send((e.hasContent && e.data) || null);
                        } catch (t) {
                            if (n) throw t;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        b.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1);
        }),
        b.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (t) {
                    return b.globalEval(t), t;
                },
            },
        }),
        b.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
        }),
        b.ajaxTransport("script", function (t) {
            var e, n;
            if (t.crossDomain)
                return {
                    send: function (r, o) {
                        (e = b("<script>")
                            .prop({ charset: t.scriptCharset, src: t.url })
                            .on(
                                "load error",
                                (n = function (t) {
                                    e.remove(), (n = null), t && o("error" === t.type ? 404 : 200, t.type);
                                })
                            )),
                            i.head.appendChild(e[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
        });
    var _e,
        Fe = [],
        Be = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Fe.pop() || b.expando + "_" + be++;
            return (this[t] = !0), t;
        },
    }),
        b.ajaxPrefilter("json jsonp", function (e, n, i) {
            var r,
                o,
                a,
                s = !1 !== e.jsonp && (Be.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                        s ? (e[s] = e[s].replace(Be, "$1" + r)) : !1 !== e.jsonp && (e.url += (we.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                        (e.converters["script json"] = function () {
                            return a || b.error(r + " was not called"), a[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (o = t[r]),
                        (t[r] = function () {
                            a = arguments;
                        }),
                        i.always(function () {
                            void 0 === o ? b(t).removeProp(r) : (t[r] = o), e[r] && ((e.jsonpCallback = n.jsonpCallback), Fe.push(r)), a && m(o) && o(a[0]), (a = o = void 0);
                        }),
                        "script"
                );
        }),
        (p.createHTMLDocument = (((_e = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === _e.childNodes.length)),
        (b.parseHTML = function (t, e, n) {
            return "string" != typeof t
                ? []
                : ("boolean" == typeof e && ((n = e), (e = !1)),
                e || (p.createHTMLDocument ? (((r = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href), e.head.appendChild(r)) : (e = i)),
                    (a = !n && []),
                    (o = A.exec(t)) ? [e.createElement(o[1])] : ((o = vt([t], e, a)), a && a.length && b(a).remove(), b.merge([], o.childNodes)));
            var r, o, a;
        }),
        (b.fn.load = function (t, e, n) {
            var i,
                r,
                o,
                a = this,
                s = t.indexOf(" ");
            return (
                s > -1 && ((i = he(t.slice(s))), (t = t.slice(0, s))),
                    m(e) ? ((n = e), (e = void 0)) : e && "object" == typeof e && (r = "POST"),
                a.length > 0 &&
                b
                    .ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                    .done(function (t) {
                        (o = arguments), a.html(i ? b("<div>").append(b.parseHTML(t)).find(i) : t);
                    })
                    .always(
                        n &&
                        function (t, e) {
                            a.each(function () {
                                n.apply(this, o || [t.responseText, e, t]);
                            });
                        }
                    ),
                    this
            );
        }),
        b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            b.fn[e] = function (t) {
                return this.on(e, t);
            };
        }),
        (b.expr.pseudos.animated = function (t) {
            return b.grep(b.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (b.offset = {
            setOffset: function (t, e, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    u,
                    l = b.css(t, "position"),
                    c = b(t),
                    f = {};
                "static" === l && (t.style.position = "relative"),
                    (s = c.offset()),
                    (o = b.css(t, "top")),
                    (u = b.css(t, "left")),
                    ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? ((a = (i = c.position()).top), (r = i.left)) : ((a = parseFloat(o) || 0), (r = parseFloat(u) || 0)),
                m(e) && (e = e.call(t, n, b.extend({}, s))),
                null != e.top && (f.top = e.top - s.top + a),
                null != e.left && (f.left = e.left - s.left + r),
                    "using" in e ? e.using.call(t, f) : c.css(f);
            },
        }),
        b.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                            b.offset.setOffset(this, t, e);
                        });
                var e,
                    n,
                    i = this[0];
                return i ? (i.getClientRects().length ? ((e = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var t,
                        e,
                        n,
                        i = this[0],
                        r = { top: 0, left: 0 };
                    if ("fixed" === b.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === b.css(t, "position"); ) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && (((r = b(t).offset()).top += b.css(t, "borderTopWidth", !0)), (r.left += b.css(t, "borderLeftWidth", !0)));
                    }
                    return { top: e.top - r.top - b.css(i, "marginTop", !0), left: e.left - r.left - b.css(i, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === b.css(t, "position"); ) t = t.offsetParent;
                    return t || $t;
                });
            },
        }),
        b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
            var n = "pageYOffset" === e;
            b.fn[t] = function (i) {
                return _(
                    this,
                    function (t, i, r) {
                        var o;
                        if ((g(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView), void 0 === r)) return o ? o[e] : t[i];
                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (t[i] = r);
                    },
                    t,
                    i,
                    arguments.length
                );
            };
        }),
        b.each(["top", "left"], function (t, e) {
            b.cssHooks[e] = Vt(p.pixelPosition, function (t, n) {
                if (n) return (n = Rt(t, e)), Pt.test(n) ? b(t).position()[e] + "px" : n;
            });
        }),
        b.each({ Height: "height", Width: "width" }, function (t, e) {
            b.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
                b.fn[i] = function (r, o) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border");
                    return _(
                        this,
                        function (e, n, r) {
                            var o;
                            return g(e)
                                ? 0 === i.indexOf("outer")
                                    ? e["inner" + t]
                                    : e.document.documentElement["client" + t]
                                : 9 === e.nodeType
                                    ? ((o = e.documentElement), Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t]))
                                    : void 0 === r
                                        ? b.css(e, n, s)
                                        : b.style(e, n, r, s);
                        },
                        e,
                        a ? r : void 0,
                        a
                    );
                };
            });
        }),
        b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            b.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
            };
        }),
        b.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t);
            },
        }),
        b.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n);
            },
            unbind: function (t, e) {
                return this.off(t, null, e);
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i);
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
            },
        }),
        (b.proxy = function (t, e) {
            var n, i, r;
            if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), m(t)))
                return (
                    (i = o.call(arguments, 2)),
                        ((r = function () {
                            return t.apply(e || this, i.concat(o.call(arguments)));
                        }).guid = t.guid = t.guid || b.guid++),
                        r
                );
        }),
        (b.holdReady = function (t) {
            t ? b.readyWait++ : b.ready(!0);
        }),
        (b.isArray = Array.isArray),
        (b.parseJSON = JSON.parse),
        (b.nodeName = S),
        (b.isFunction = m),
        (b.isWindow = g),
        (b.camelCase = W),
        (b.type = y),
        (b.now = Date.now),
        (b.isNumeric = function (t) {
            var e = b.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
        }),
    "function" == typeof define &&
    define.amd &&
    define("jquery", [], function () {
        return b;
    });
    var ze = t.jQuery,
        We = t.$;
    return (
        (b.noConflict = function (e) {
            return t.$ === b && (t.$ = We), e && t.jQuery === b && (t.jQuery = ze), b;
        }),
        e || (t.jQuery = t.$ = b),
            b
    );
}),
    (function (t) {
        "use strict";
        function e(t, e) {
            return (
                (e = e || Error),
                    function () {
                        var n,
                            i = arguments[0];
                        for (n = "[" + (t ? t + ":" : "") + i + "] http://errors.angularjs.org/1.6.4/" + (t ? t + "/" : "") + i, i = 1; i < arguments.length; i++) {
                            var r;
                            (n = n + (1 == i ? "?" : "&") + "p" + (i - 1) + "="),
                                (n += encodeURIComponent((r = "function" == typeof (r = arguments[i]) ? r.toString().replace(/ \{[\s\S]*$/, "") : void 0 === r ? "undefined" : "string" != typeof r ? JSON.stringify(r) : r)));
                        }
                        return new e(n);
                    }
            );
        }
        function n(t) {
            if (!y(t)) return Bn;
            $(t.objectMaxDepth) && (Bn.objectMaxDepth = i(t.objectMaxDepth) ? t.objectMaxDepth : NaN);
        }
        function i(t) {
            return k(t) && 0 < t;
        }
        function r(t) {
            if (null == t || E(t)) return !1;
            if (ri(t) || w(t) || (Rn && t instanceof Rn)) return !0;
            var e = "length" in Object(t) && t.length;
            return k(e) && ((0 <= e && (e - 1 in t || t instanceof Array)) || "function" == typeof t.item);
        }
        function o(t, e, n) {
            var i, a;
            if (t)
                if (C(t)) for (i in t) "prototype" !== i && "length" !== i && "name" !== i && t.hasOwnProperty(i) && e.call(n, t[i], i, t);
                else if (ri(t) || r(t)) {
                    var s = "object" != typeof t;
                    for (i = 0, a = t.length; i < a; i++) (s || i in t) && e.call(n, t[i], i, t);
                } else if (t.forEach && t.forEach !== o) t.forEach(e, n, t);
                else if (b(t)) for (i in t) e.call(n, t[i], i, t);
                else if ("function" == typeof t.hasOwnProperty) for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t);
                else for (i in t) Fn.call(t, i) && e.call(n, t[i], i, t);
            return t;
        }
        function a(t, e, n) {
            for (var i = Object.keys(t).sort(), r = 0; r < i.length; r++) e.call(n, t[i[r]], i[r]);
            return i;
        }
        function s(t) {
            return function (e, n) {
                t(n, e);
            };
        }
        function u(t, e, n) {
            for (var i = t.$$hashKey, r = 0, o = e.length; r < o; ++r) {
                var a = e[r];
                if (y(a) || C(a))
                    for (var s = Object.keys(a), l = 0, c = s.length; l < c; l++) {
                        var f = s[l],
                            d = a[f];
                        n && y(d)
                            ? x(d)
                            ? (t[f] = new Date(d.valueOf()))
                            : T(d)
                                ? (t[f] = new RegExp(d))
                                : d.nodeName
                                    ? (t[f] = d.cloneNode(!0))
                                    : O(d)
                                        ? (t[f] = d.clone())
                                        : (y(t[f]) || (t[f] = ri(d) ? [] : {}), u(t[f], [d], !0))
                            : (t[f] = d);
                    }
            }
            return i ? (t.$$hashKey = i) : delete t.$$hashKey, t;
        }
        function l(t) {
            return u(t, Gn.call(arguments, 1), !1);
        }
        function c(t) {
            return u(t, Gn.call(arguments, 1), !0);
        }
        function f(t) {
            return parseInt(t, 10);
        }
        function d(t, e) {
            return l(Object.create(t), e);
        }
        function h() {}
        function p(t) {
            return t;
        }
        function m(t) {
            return function () {
                return t;
            };
        }
        function g(t) {
            return C(t.toString) && t.toString !== Kn;
        }
        function v(t) {
            return void 0 === t;
        }
        function $(t) {
            return void 0 !== t;
        }
        function y(t) {
            return null !== t && "object" == typeof t;
        }
        function b(t) {
            return null !== t && "object" == typeof t && !Yn(t);
        }
        function w(t) {
            return "string" == typeof t;
        }
        function k(t) {
            return "number" == typeof t;
        }
        function x(t) {
            return "[object Date]" === Kn.call(t);
        }
        function C(t) {
            return "function" == typeof t;
        }
        function T(t) {
            return "[object RegExp]" === Kn.call(t);
        }
        function E(t) {
            return t && t.window === t;
        }
        function S(t) {
            return t && t.$evalAsync && t.$watch;
        }
        function A(t) {
            return "boolean" == typeof t;
        }
        function O(t) {
            return !(!t || !(t.nodeName || (t.prop && t.attr && t.find)));
        }
        function D(t) {
            return zn(t.nodeName || (t[0] && t[0].nodeName));
        }
        function M(t, e) {
            var n = t.indexOf(e);
            return 0 <= n && t.splice(n, 1), n;
        }
        function j(t, e, n) {
            function r(t, e, n) {
                if (0 > --n) return "...";
                var i,
                    r = e.$$hashKey;
                if (ri(t)) {
                    i = 0;
                    for (var o = t.length; i < o; i++) e.push(a(t[i], n));
                } else if (b(t)) for (i in t) e[i] = a(t[i], n);
                else if (t && "function" == typeof t.hasOwnProperty) for (i in t) t.hasOwnProperty(i) && (e[i] = a(t[i], n));
                else for (i in t) Fn.call(t, i) && (e[i] = a(t[i], n));
                return r ? (e.$$hashKey = r) : delete e.$$hashKey, e;
            }
            function a(t, e) {
                if (!y(t)) return t;
                if (-1 !== (n = u.indexOf(t))) return l[n];
                if (E(t) || S(t)) throw Qn("cpws");
                var n = !1,
                    i = (function (t) {
                        switch (Kn.call(t)) {
                            case "[object Int8Array]":
                            case "[object Int16Array]":
                            case "[object Int32Array]":
                            case "[object Float32Array]":
                            case "[object Float64Array]":
                            case "[object Uint8Array]":
                            case "[object Uint8ClampedArray]":
                            case "[object Uint16Array]":
                            case "[object Uint32Array]":
                                return new t.constructor(a(t.buffer), t.byteOffset, t.length);
                            case "[object ArrayBuffer]":
                                if (!t.slice) {
                                    var e = new ArrayBuffer(t.byteLength);
                                    return new Uint8Array(e).set(new Uint8Array(t)), e;
                                }
                                return t.slice(0);
                            case "[object Boolean]":
                            case "[object Number]":
                            case "[object String]":
                            case "[object Date]":
                                return new t.constructor(t.valueOf());
                            case "[object RegExp]":
                                return ((e = new RegExp(t.source, t.toString().match(/[^/]*$/)[0])).lastIndex = t.lastIndex), e;
                            case "[object Blob]":
                                return new t.constructor([t], { type: t.type });
                        }
                        if (C(t.cloneNode)) return t.cloneNode(!0);
                    })(t);
                return void 0 === i && ((i = ri(t) ? [] : Object.create(Yn(t))), (n = !0)), u.push(t), l.push(i), n ? r(t, i, e) : i;
            }
            var s,
                u = [],
                l = [];
            if (((n = i(n) ? n : NaN), e)) {
                if (((s = e) && k(s.length) && oi.test(Kn.call(s))) || "[object ArrayBuffer]" === Kn.call(e)) throw Qn("cpta");
                if (t === e) throw Qn("cpi");
                return (
                    ri(e)
                        ? (e.length = 0)
                        : o(e, function (t, n) {
                            "$$hashKey" !== n && delete e[n];
                        }),
                        u.push(t),
                        l.push(e),
                        r(t, e, n)
                );
            }
            return a(t, n);
        }
        function N(t, e) {
            return t === e || (t != t && e != e);
        }
        function I(t, e) {
            if (t === e) return !0;
            if (null === t || null === e) return !1;
            if (t != t && e != e) return !0;
            var n,
                i = typeof t;
            if (i === typeof e && "object" === i) {
                if (!ri(t)) {
                    if (x(t)) return !!x(e) && N(t.getTime(), e.getTime());
                    if (T(t)) return !!T(e) && t.toString() === e.toString();
                    if (S(t) || S(e) || E(t) || E(e) || ri(e) || x(e) || T(e)) return !1;
                    for (n in ((i = rt()), t))
                        if ("$" !== n.charAt(0) && !C(t[n])) {
                            if (!I(t[n], e[n])) return !1;
                            i[n] = !0;
                        }
                    for (n in e) if (!(n in i) && "$" !== n.charAt(0) && $(e[n]) && !C(e[n])) return !1;
                    return !0;
                }
                if (!ri(e)) return !1;
                if ((i = t.length) === e.length) {
                    for (n = 0; n < i; n++) if (!I(t[n], e[n])) return !1;
                    return !0;
                }
            }
            return !1;
        }
        function L(t, e, n) {
            return t.concat(Gn.call(e, n));
        }
        function P(t, e) {
            var n = 2 < arguments.length ? Gn.call(arguments, 2) : [];
            return !C(e) || e instanceof RegExp
                ? e
                : n.length
                    ? function () {
                        return arguments.length ? e.apply(t, L(n, arguments, 0)) : e.apply(t, n);
                    }
                    : function () {
                        return arguments.length ? e.apply(t, arguments) : e.call(t);
                    };
        }
        function U(e, n) {
            var i = n;
            return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? (i = void 0) : E(n) ? (i = "$WINDOW") : n && t.document === n ? (i = "$DOCUMENT") : S(n) && (i = "$SCOPE"), i;
        }
        function q(t, e) {
            if (!v(t)) return k(e) || (e = e ? 2 : null), JSON.stringify(t, U, e);
        }
        function R(t) {
            return w(t) ? JSON.parse(t) : t;
        }
        function V(t, e) {
            t = t.replace(ci, "");
            var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
            return ei(n) ? e : n;
        }
        function H(t, e, n) {
            n = n ? -1 : 1;
            var i = t.getTimezoneOffset();
            return (n *= (e = V(e, i)) - i), (t = new Date(t.getTime())).setMinutes(t.getMinutes() + n), t;
        }
        function _(t) {
            t = Rn(t).clone();
            try {
                t.empty();
            } catch (t) {}
            var e = Rn("<div>").append(t).html();
            try {
                return t[0].nodeType === mi
                    ? zn(e)
                    : e.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (t, e) {
                        return "<" + zn(e);
                    });
            } catch (t) {
                return zn(e);
            }
        }
        function F(t) {
            try {
                return decodeURIComponent(t);
            } catch (t) {}
        }
        function B(t) {
            var e = {};
            return (
                o((t || "").split("&"), function (t) {
                    var n, i, r;
                    t &&
                    ((i = t = t.replace(/\+/g, "%20")),
                    -1 !== (n = t.indexOf("=")) && ((i = t.substring(0, n)), (r = t.substring(n + 1))),
                    $((i = F(i))) && ((r = !$(r) || F(r)), Fn.call(e, i) ? (ri(e[i]) ? e[i].push(r) : (e[i] = [e[i], r])) : (e[i] = r)));
                }),
                    e
            );
        }
        function z(t) {
            var e = [];
            return (
                o(t, function (t, n) {
                    ri(t)
                        ? o(t, function (t) {
                            e.push(G(n, !0) + (!0 === t ? "" : "=" + G(t, !0)));
                        })
                        : e.push(G(n, !0) + (!0 === t ? "" : "=" + G(t, !0)));
                }),
                    e.length ? e.join("&") : ""
            );
        }
        function W(t) {
            return G(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
        }
        function G(t, e) {
            return encodeURIComponent(t)
                .replace(/%40/gi, "@")
                .replace(/%3A/gi, ":")
                .replace(/%24/g, "$")
                .replace(/%2C/gi, ",")
                .replace(/%3B/gi, ";")
                .replace(/%20/g, e ? "%20" : "+");
        }
        function X(e, n) {
            var i,
                r,
                a = {};
            o(fi, function (t) {
                (t += "app"), !i && e.hasAttribute && e.hasAttribute(t) && ((i = e), (r = e.getAttribute(t)));
            }),
                o(fi, function (t) {
                    var n;
                    (t += "app"), !i && (n = e.querySelector("[" + t.replace(":", "\\:") + "]")) && ((i = n), (r = n.getAttribute(t)));
                }),
            i &&
            (di
                ? ((a.strictDi =
                    null !==
                    (function (t, e) {
                        var n,
                            i,
                            r = fi.length;
                        for (i = 0; i < r; ++i) if (((n = fi[i] + e), w((n = t.getAttribute(n))))) return n;
                        return null;
                    })(i, "strict-di")),
                    n(i, r ? [r] : [], a))
                : t.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."));
        }
        function J(e, n, i) {
            y(i) || (i = {}), (i = l({ strictDi: !1 }, i));
            var r = function () {
                    if ((e = Rn(e)).injector()) {
                        var r = e[0] === t.document ? "document" : _(e);
                        throw Qn("btstrpd", r.replace(/</, "&lt;").replace(/>/, "&gt;"));
                    }
                    return (
                        (n = n || []).unshift([
                            "$provide",
                            function (t) {
                                t.value("$rootElement", e);
                            },
                        ]),
                        i.debugInfoEnabled &&
                        n.push([
                            "$compileProvider",
                            function (t) {
                                t.debugInfoEnabled(!0);
                            },
                        ]),
                            n.unshift("ng"),
                            (r = Lt(n, i.strictDi)).invoke([
                                "$rootScope",
                                "$rootElement",
                                "$compile",
                                "$injector",
                                function (t, e, n, i) {
                                    t.$apply(function () {
                                        e.data("$injector", i), n(e)(t);
                                    });
                                },
                            ]),
                            r
                    );
                },
                a = /^NG_ENABLE_DEBUG_INFO!/,
                s = /^NG_DEFER_BOOTSTRAP!/;
            if ((t && a.test(t.name) && ((i.debugInfoEnabled = !0), (t.name = t.name.replace(a, ""))), t && !s.test(t.name))) return r();
            (t.name = t.name.replace(s, "")),
                (Zn.resumeBootstrap = function (t) {
                    return (
                        o(t, function (t) {
                            n.push(t);
                        }),
                            r()
                    );
                }),
            C(Zn.resumeDeferredBootstrap) && Zn.resumeDeferredBootstrap();
        }
        function K() {
            (t.name = "NG_ENABLE_DEBUG_INFO!" + t.name), t.location.reload();
        }
        function Y(t) {
            if (!(t = Zn.element(t).injector())) throw Qn("test");
            return t.get("$$testability");
        }
        function Q(t, e) {
            return (
                (e = e || "_"),
                    t.replace(hi, function (t, n) {
                        return (n ? e : "") + t.toLowerCase();
                    })
            );
        }
        function Z(t, e, n) {
            if (!t) throw Qn("areq", e || "?", n || "required");
            return t;
        }
        function tt(t, e, n) {
            return n && ri(t) && (t = t[t.length - 1]), Z(C(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t;
        }
        function et(t, e) {
            if ("hasOwnProperty" === t) throw Qn("badname", e);
        }
        function nt(t, e, n) {
            if (!e) return t;
            for (var i, r = t, o = (e = e.split(".")).length, a = 0; a < o; a++) (i = e[a]), t && (t = (r = t)[i]);
            return !n && C(t) ? P(r, t) : t;
        }
        function it(t) {
            for (var e, n = t[0], i = t[t.length - 1], r = 1; n !== i && (n = n.nextSibling); r++) (e || t[r] !== n) && (e || (e = Rn(Gn.call(t, 0, r))), e.push(n));
            return e || t;
        }
        function rt() {
            return Object.create(null);
        }
        function ot(t) {
            if (null == t) return "";
            switch (typeof t) {
                case "string":
                    break;
                case "number":
                    t = "" + t;
                    break;
                default:
                    t = !g(t) || ri(t) || x(t) ? q(t) : t.toString();
            }
            return t;
        }
        function at(t, e) {
            if (ri(t)) {
                e = e || [];
                for (var n = 0, i = t.length; n < i; n++) e[n] = t[n];
            } else if (y(t)) for (n in ((e = e || {}), t)) ("$" === n.charAt(0) && "$" === n.charAt(1)) || (e[n] = t[n]);
            return e || t;
        }
        function st(t, e) {
            var n = [];
            return (
                i(e) && (t = j(t, null, e)),
                    JSON.stringify(t, function (t, e) {
                        if (y((e = U(t, e)))) {
                            if (0 <= n.indexOf(e)) return "...";
                            n.push(e);
                        }
                        return e;
                    })
            );
        }
        function ut(t, e) {
            return e.toUpperCase();
        }
        function lt(t) {
            return t.replace(yi, ut);
        }
        function ct(t) {
            return 1 === (t = t.nodeType) || !t || 9 === t;
        }
        function ft(t, e) {
            var n,
                i,
                r = e.createDocumentFragment(),
                a = [];
            if (Ci.test(t)) {
                for (n = r.appendChild(e.createElement("div")), i = (Ti.exec(t) || ["", ""])[1].toLowerCase(), i = Si[i] || Si._default, n.innerHTML = i[1] + t.replace(Ei, "<$1></$2>") + i[2], i = i[0]; i--; ) n = n.lastChild;
                (a = L(a, n.childNodes)), ((n = r.firstChild).textContent = "");
            } else a.push(e.createTextNode(t));
            return (
                (r.textContent = ""),
                    (r.innerHTML = ""),
                    o(a, function (t) {
                        r.appendChild(t);
                    }),
                    r
            );
        }
        function dt(e) {
            if (e instanceof dt) return e;
            var n, i;
            if ((w(e) && ((e = ai(e)), (n = !0)), !(this instanceof dt))) {
                if (n && "<" !== e.charAt(0)) throw ki("nosel");
                return new dt(e);
            }
            n ? ((n = t.document), kt(this, (e = (i = xi.exec(e)) ? [n.createElement(i[1])] : (i = ft(e, n)) ? i.childNodes : []))) : C(e) ? St(e) : kt(this, e);
        }
        function ht(t) {
            return t.cloneNode(!0);
        }
        function pt(t, e) {
            !e && ct(t) && Rn.cleanData([t]), t.querySelectorAll && Rn.cleanData(t.querySelectorAll("*"));
        }
        function mt(t, e, n, i) {
            if ($(i)) throw ki("offargs");
            var r = (i = vt(t)) && i.events,
                a = i && i.handle;
            if (a)
                if (e) {
                    var s = function (e) {
                        var i = r[e];
                        $(n) && M(i || [], n), ($(n) && i && 0 < i.length) || (t.removeEventListener(e, a), delete r[e]);
                    };
                    o(e.split(" "), function (t) {
                        s(t), wi[t] && s(wi[t]);
                    });
                } else for (e in r) "$destroy" !== e && t.removeEventListener(e, a), delete r[e];
        }
        function gt(t, e) {
            var n = t.ng339,
                i = n && vi[n];
            i && (e ? delete i.data[e] : (i.handle && (i.events.$destroy && i.handle({}, "$destroy"), mt(t)), delete vi[n], (t.ng339 = void 0)));
        }
        function vt(t, e) {
            var n = (n = t.ng339) && vi[n];
            return e && !n && ((t.ng339 = n = ++$i), (n = vi[n] = { events: {}, data: {}, handle: void 0 })), n;
        }
        function $t(t, e, n) {
            if (ct(t)) {
                var i,
                    r = $(n),
                    o = !r && e && !y(e),
                    a = !e;
                if (((t = (t = vt(t, !o)) && t.data), r)) t[lt(e)] = n;
                else {
                    if (a) return t;
                    if (o) return t && t[lt(e)];
                    for (i in e) t[lt(i)] = e[i];
                }
            }
        }
        function yt(t, e) {
            return !!t.getAttribute && -1 < (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ");
        }
        function bt(t, e) {
            e &&
            t.setAttribute &&
            o(e.split(" "), function (e) {
                t.setAttribute("class", ai((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + ai(e) + " ", " ")));
            });
        }
        function wt(t, e) {
            if (e && t.setAttribute) {
                var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                o(e.split(" "), function (t) {
                    (t = ai(t)), -1 === n.indexOf(" " + t + " ") && (n += t + " ");
                }),
                    t.setAttribute("class", ai(n));
            }
        }
        function kt(t, e) {
            if (e)
                if (e.nodeType) t[t.length++] = e;
                else {
                    var n = e.length;
                    if ("number" == typeof n && e.window !== e) {
                        if (n) for (var i = 0; i < n; i++) t[t.length++] = e[i];
                    } else t[t.length++] = e;
                }
        }
        function xt(t, e) {
            return Ct(t, "$" + (e || "ngController") + "Controller");
        }
        function Ct(t, e, n) {
            for (9 === t.nodeType && (t = t.documentElement), e = ri(e) ? e : [e]; t; ) {
                for (var i = 0, r = e.length; i < r; i++) if ($((n = Rn.data(t, e[i])))) return n;
                t = t.parentNode || (11 === t.nodeType && t.host);
            }
        }
        function Tt(t) {
            for (pt(t, !0); t.firstChild; ) t.removeChild(t.firstChild);
        }
        function Et(t, e) {
            e || pt(t);
            var n = t.parentNode;
            n && n.removeChild(t);
        }
        function St(e) {
            function n() {
                t.document.removeEventListener("DOMContentLoaded", n), t.removeEventListener("load", n), e();
            }
            "complete" === t.document.readyState ? t.setTimeout(e) : (t.document.addEventListener("DOMContentLoaded", n), t.addEventListener("load", n));
        }
        function At(t, e) {
            var n = Di[e.toLowerCase()];
            return n && Mi[D(t)] && n;
        }
        function Ot(t, e, n) {
            n.call(t, e);
        }
        function Dt(t, e, n) {
            var i = e.relatedTarget;
            (i && (i === t || Ai.call(t, i))) || n.call(t, e);
        }
        function Mt() {
            this.$get = function () {
                return l(dt, {
                    hasClass: function (t, e) {
                        return t.attr && (t = t[0]), yt(t, e);
                    },
                    addClass: function (t, e) {
                        return t.attr && (t = t[0]), wt(t, e);
                    },
                    removeClass: function (t, e) {
                        return t.attr && (t = t[0]), bt(t, e);
                    },
                });
            };
        }
        function jt(t, e) {
            var n = t && t.$$hashKey;
            return n
                ? ("function" == typeof n && (n = t.$$hashKey()), n)
                : "function" === (n = typeof t) || ("object" === n && null !== t)
                    ? (t.$$hashKey =
                        n +
                        ":" +
                        (
                            e ||
                            function () {
                                return ++ti;
                            }
                        )())
                    : n + ":" + t;
        }
        function Nt() {
            (this._keys = []), (this._values = []), (this._lastKey = NaN), (this._lastIndex = -1);
        }
        function It(t) {
            return (t = Function.prototype.toString.call(t).replace(Vi, "")).match(Pi) || t.match(Ui);
        }
        function Lt(t, e) {
            function n(t) {
                return function (e, n) {
                    if (!y(e)) return t(e, n);
                    o(e, s(t));
                };
            }
            function i(t, e) {
                if ((et(t, "service"), (C(e) || ri(e)) && (e = d.instantiate(e)), !e.$get)) throw Hi("pget", t);
                return (f[t + "Provider"] = e);
            }
            function r(t, e, n) {
                return i(t, {
                    $get:
                        !1 !== n
                            ? ((r = t),
                                (o = e),
                                function () {
                                    var t = g.invoke(o, this);
                                    if (v(t)) throw Hi("undef", r);
                                    return t;
                                })
                            : e,
                });
                var r, o;
            }
            function a(t, n) {
                function i(e, i) {
                    if (t.hasOwnProperty(e)) {
                        if (t[e] === u) throw Hi("cdep", e + " <- " + l.join(" <- "));
                        return t[e];
                    }
                    try {
                        return l.unshift(e), (t[e] = u), (t[e] = n(e, i)), t[e];
                    } catch (n) {
                        throw (t[e] === u && delete t[e], n);
                    } finally {
                        l.shift();
                    }
                }
                function r(t, n, r) {
                    for (var o = [], a = 0, s = (t = Lt.$$annotate(t, e, r)).length; a < s; a++) {
                        var u = t[a];
                        if ("string" != typeof u) throw Hi("itkn", u);
                        o.push(n && n.hasOwnProperty(u) ? n[u] : i(u, r));
                    }
                    return o;
                }
                return {
                    invoke: function (t, e, n, i) {
                        if (("string" == typeof n && ((i = n), (n = null)), (n = r(t, n, i)), ri(t) && (t = t[t.length - 1]), (i = t), qn || "function" != typeof i)) i = !1;
                        else {
                            var o = i.$$ngIsClass;
                            A(o) || (o = i.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(i))), (i = o);
                        }
                        return i ? (n.unshift(null), new (Function.prototype.bind.apply(t, n))()) : t.apply(e, n);
                    },
                    instantiate: function (t, e, n) {
                        var i = ri(t) ? t[t.length - 1] : t;
                        return (t = r(t, e, n)).unshift(null), new (Function.prototype.bind.apply(i, t))();
                    },
                    get: i,
                    annotate: Lt.$$annotate,
                    has: function (e) {
                        return f.hasOwnProperty(e + "Provider") || t.hasOwnProperty(e);
                    },
                };
            }
            e = !0 === e;
            var u = {},
                l = [],
                c = new Ii(),
                f = {
                    $provide: {
                        provider: n(i),
                        factory: n(r),
                        service: n(function (t, e) {
                            return r(t, [
                                "$injector",
                                function (t) {
                                    return t.instantiate(e);
                                },
                            ]);
                        }),
                        value: n(function (t, e) {
                            return r(t, m(e), !1);
                        }),
                        constant: n(function (t, e) {
                            et(t, "constant"), (f[t] = e), (h[t] = e);
                        }),
                        decorator: function (t, e) {
                            var n = d.get(t + "Provider"),
                                i = n.$get;
                            n.$get = function () {
                                var t = g.invoke(i, n);
                                return g.invoke(e, null, { $delegate: t });
                            };
                        },
                    },
                },
                d = (f.$injector = a(f, function (t, e) {
                    throw (Zn.isString(e) && l.push(e), Hi("unpr", l.join(" <- ")));
                })),
                h = {},
                p = a(h, function (t, e) {
                    var n = d.get(t + "Provider", e);
                    return g.invoke(n.$get, n, void 0, t);
                }),
                g = p;
            (f.$injectorProvider = { $get: m(p) }), (g.modules = d.modules = rt());
            var $ = (function t(e) {
                Z(v(e) || ri(e), "modulesToLoad", "not an array");
                var n,
                    i = [];
                return (
                    o(e, function (e) {
                        function r(t) {
                            var e, n;
                            for (e = 0, n = t.length; e < n; e++) {
                                var i = t[e],
                                    r = d.get(i[0]);
                                r[i[1]].apply(r, i[2]);
                            }
                        }
                        if (!c.get(e)) {
                            c.set(e, !0);
                            try {
                                w(e)
                                    ? ((n = Hn(e)), (g.modules[e] = n), (i = i.concat(t(n.requires)).concat(n._runBlocks)), r(n._invokeQueue), r(n._configBlocks))
                                    : C(e)
                                    ? i.push(d.invoke(e))
                                    : ri(e)
                                        ? i.push(d.invoke(e))
                                        : tt(e, "module");
                            } catch (t) {
                                throw (ri(e) && (e = e[e.length - 1]), t.message && t.stack && -1 === t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), Hi("modulerr", e, t.stack || t.message || t));
                            }
                        }
                    }),
                        i
                );
            })(t);
            return (
                ((g = p.get("$injector")).strictDi = e),
                    o($, function (t) {
                        t && g.invoke(t);
                    }),
                    g
            );
        }
        function Pt() {
            var e = !0;
            (this.disableAutoScrolling = function () {
                e = !1;
            }),
                (this.$get = [
                    "$window",
                    "$location",
                    "$rootScope",
                    function (n, i, r) {
                        function o(t) {
                            var e;
                            t
                                ? (t.scrollIntoView(),
                                    C((e = a.yOffset)) ? (e = e()) : O(e) ? ((e = e[0]), (e = "fixed" !== n.getComputedStyle(e).position ? 0 : e.getBoundingClientRect().bottom)) : k(e) || (e = 0),
                                e && ((t = t.getBoundingClientRect().top), n.scrollBy(0, t - e)))
                                : n.scrollTo(0, 0);
                        }
                        function a(t) {
                            var e, n, r;
                            (t = w(t) ? t : k(t) ? t.toString() : i.hash())
                                ? (e = s.getElementById(t))
                                ? o(e)
                                : ((n = s.getElementsByName(t)),
                                    (r = null),
                                    Array.prototype.some.call(n, function (t) {
                                        if ("a" === D(t)) return (r = t), !0;
                                    }),
                                    (e = r) ? o(e) : "top" === t && o(null))
                                : o(null);
                        }
                        var s = n.document;
                        return (
                            e &&
                            r.$watch(
                                function () {
                                    return i.hash();
                                },
                                function (e, n) {
                                    var i, o;
                                    (e === n && "" === e) ||
                                    ((i = function () {
                                        r.$evalAsync(a);
                                    }),
                                        "complete" === (o = o || t).document.readyState ? o.setTimeout(i) : Rn(o).on("load", i));
                                }
                            ),
                                a
                        );
                    },
                ]);
        }
        function Ut(t, e) {
            return t || e ? (t ? (e ? (ri(t) && (t = t.join(" ")), ri(e) && (e = e.join(" ")), t + " " + e) : t) : e) : "";
        }
        function qt(t) {
            return y(t) ? t : {};
        }
        function Rt() {
            this.$get = [
                "$window",
                "$log",
                "$sniffer",
                "$document",
                function (t, e, n, i) {
                    return new (function (t, e, n, i) {
                        function r(t) {
                            try {
                                t.apply(null, Gn.call(arguments, 1));
                            } finally {
                                if (0 == --g)
                                    for (; $.length; )
                                        try {
                                            $.pop()();
                                        } catch (t) {
                                            n.error(t);
                                        }
                            }
                        }
                        function a() {
                            (x = null), u();
                        }
                        function s() {
                            I((y = v((y = C())) ? null : y), S) && (y = S), (b = S = y);
                        }
                        function u() {
                            var t = b;
                            s(),
                            (w === l.url() && t === y) ||
                            ((w = l.url()),
                                (b = y),
                                o(T, function (t) {
                                    t(l.url(), y);
                                }));
                        }
                        var l = this,
                            c = t.location,
                            f = t.history,
                            d = t.setTimeout,
                            p = t.clearTimeout,
                            m = {};
                        l.isMock = !1;
                        var g = 0,
                            $ = [];
                        (l.$$completeOutstandingRequest = r),
                            (l.$$incOutstandingRequestCount = function () {
                                g++;
                            }),
                            (l.notifyWhenNoOutstandingRequests = function (t) {
                                0 === g ? t() : $.push(t);
                            });
                        var y,
                            b,
                            w = c.href,
                            k = e.find("base"),
                            x = null,
                            C = i.history
                                ? function () {
                                    try {
                                        return f.state;
                                    } catch (t) {}
                                }
                                : h;
                        s(),
                            (l.url = function (e, n, r) {
                                if ((v(r) && (r = null), c !== t.location && (c = t.location), f !== t.history && (f = t.history), e)) {
                                    var o = b === r;
                                    if (w === e && (!i.history || o)) return l;
                                    var a = w && pe(w) === pe(e);
                                    return (
                                        (w = e),
                                            (b = r),
                                            !i.history || (a && o)
                                                ? (a || (x = e), n ? c.replace(e) : a ? ((n = c), (r = -1 === (r = e.indexOf("#")) ? "" : e.substr(r)), (n.hash = r)) : (c.href = e), c.href !== e && (x = e))
                                                : (f[n ? "replaceState" : "pushState"](r, "", e), s()),
                                        x && (x = e),
                                            l
                                    );
                                }
                                return x || c.href.replace(/%27/g, "'");
                            }),
                            (l.state = function () {
                                return y;
                            });
                        var T = [],
                            E = !1,
                            S = null;
                        (l.onUrlChange = function (e) {
                            return E || (i.history && Rn(t).on("popstate", a), Rn(t).on("hashchange", a), (E = !0)), T.push(e), e;
                        }),
                            (l.$$applicationDestroyed = function () {
                                Rn(t).off("hashchange popstate", a);
                            }),
                            (l.$$checkUrlChange = u),
                            (l.baseHref = function () {
                                var t = k.attr("href");
                                return t ? t.replace(/^(https?:)?\/\/[^/]*/, "") : "";
                            }),
                            (l.defer = function (t, e) {
                                var n;
                                return (
                                    g++,
                                        (n = d(function () {
                                            delete m[n], r(t);
                                        }, e || 0)),
                                        (m[n] = !0),
                                        n
                                );
                            }),
                            (l.defer.cancel = function (t) {
                                return !!m[t] && (delete m[t], p(t), r(h), !0);
                            });
                    })(t, i, e, n);
                },
            ];
        }
        function Vt() {
            this.$get = function () {
                function t(t, i) {
                    function r(t) {
                        t !== d && (h ? h === t && (h = t.n) : (h = t), o(t.n, t.p), o(t, d), ((d = t).n = null));
                    }
                    function o(t, e) {
                        t !== e && (t && (t.p = e), e && (e.n = t));
                    }
                    if (t in n) throw e("$cacheFactory")("iid", t);
                    var a = 0,
                        s = l({}, i, { id: t }),
                        u = rt(),
                        c = (i && i.capacity) || Number.MAX_VALUE,
                        f = rt(),
                        d = null,
                        h = null;
                    return (n[t] = {
                        put: function (t, e) {
                            if (!v(e)) {
                                if (c < Number.MAX_VALUE) r(f[t] || (f[t] = { key: t }));
                                return t in u || a++, (u[t] = e), a > c && this.remove(h.key), e;
                            }
                        },
                        get: function (t) {
                            if (c < Number.MAX_VALUE) {
                                var e = f[t];
                                if (!e) return;
                                r(e);
                            }
                            return u[t];
                        },
                        remove: function (t) {
                            if (c < Number.MAX_VALUE) {
                                var e = f[t];
                                if (!e) return;
                                e === d && (d = e.p), e === h && (h = e.n), o(e.n, e.p), delete f[t];
                            }
                            t in u && (delete u[t], a--);
                        },
                        removeAll: function () {
                            (u = rt()), (a = 0), (f = rt()), (d = h = null);
                        },
                        destroy: function () {
                            (f = s = u = null), delete n[t];
                        },
                        info: function () {
                            return l({}, s, { size: a });
                        },
                    });
                }
                var n = {};
                return (
                    (t.info = function () {
                        var t = {};
                        return (
                            o(n, function (e, n) {
                                t[n] = e.info();
                            }),
                                t
                        );
                    }),
                        (t.get = function (t) {
                            return n[t];
                        }),
                        t
                );
            };
        }
        function Ht() {
            this.$get = [
                "$cacheFactory",
                function (t) {
                    return t("templates");
                },
            ];
        }
        function _t(e, n) {
            function i(t, e, n) {
                var i = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,
                    r = rt();
                return (
                    o(t, function (t, o) {
                        if (t in b) r[o] = b[t];
                        else {
                            var a = t.match(i);
                            if (!a) throw Ji("iscp", e, o, t, n ? "controller bindings definition" : "isolate scope definition");
                            (r[o] = { mode: a[1][0], collection: "*" === a[2], optional: "?" === a[3], attrName: a[4] || o }), a[4] && (b[t] = r[o]);
                        }
                    }),
                        r
                );
            }
            var r = {},
                a = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
                u = /(([\w-]+)(?::([^;]+))?;?)/,
                c = (function (t) {
                    var e,
                        n = {};
                    for (t = t.split(","), e = 0; e < t.length; e++) n[t[e]] = !0;
                    return n;
                })("ngSrc,ngSrcset,src,srcset"),
                f = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                g = /^(on[a-z]+|formaction)$/,
                b = rt();
            (this.directive = function t(n, i) {
                return (
                    Z(n, "name"),
                        et(n, "directive"),
                        w(n)
                            ? ((function (t) {
                                var e = t.charAt(0);
                                if (!e || e !== zn(e)) throw Ji("baddir", t);
                                if (t !== t.trim()) throw Ji("baddir", t);
                            })(n),
                                Z(i, "directiveFactory"),
                            r.hasOwnProperty(n) ||
                            ((r[n] = []),
                                e.factory(n + "Directive", [
                                    "$injector",
                                    "$exceptionHandler",
                                    function (t, e) {
                                        var i = [];
                                        return (
                                            o(r[n], function (r, a) {
                                                try {
                                                    var s = t.invoke(r);
                                                    C(s) ? (s = { compile: m(s) }) : !s.compile && s.link && (s.compile = m(s.link)),
                                                        (s.priority = s.priority || 0),
                                                        (s.index = a),
                                                        (s.name = s.name || n),
                                                        (s.require =
                                                            ((d = (c = s).require || (c.controller && c.name)),
                                                            !ri(d) &&
                                                            y(d) &&
                                                            o(d, function (t, e) {
                                                                var n = t.match(f);
                                                                t.substring(n[0].length) || (d[e] = n[0] + e);
                                                            }),
                                                                d));
                                                    var u = s,
                                                        l = s.restrict;
                                                    if (l && (!w(l) || !/[EACM]/.test(l))) throw Ji("badrestrict", l, n);
                                                    (u.restrict = l || "EA"), (s.$$moduleName = r.$$moduleName), i.push(s);
                                                } catch (t) {
                                                    e(t);
                                                }
                                                var c, d;
                                            }),
                                                i
                                        );
                                    },
                                ])),
                                r[n].push(i))
                            : o(n, s(t)),
                        this
                );
            }),
                (this.component = function (t, e) {
                    function n(t) {
                        function n(e) {
                            return C(e) || ri(e)
                                ? function (n, i) {
                                    return t.invoke(e, this, { $element: n, $attrs: i });
                                }
                                : e;
                        }
                        var r = e.template || e.templateUrl ? e.template : "",
                            a = {
                                controller: i,
                                controllerAs:
                                    (function (t, e) {
                                        if (e && w(e)) return e;
                                        if (w(t)) {
                                            var n = tr.exec(t);
                                            if (n) return n[3];
                                        }
                                    })(e.controller) ||
                                    e.controllerAs ||
                                    "$ctrl",
                                template: n(r),
                                templateUrl: n(e.templateUrl),
                                transclude: e.transclude,
                                scope: {},
                                bindToController: e.bindings || {},
                                restrict: "E",
                                require: e.require,
                            };
                        return (
                            o(e, function (t, e) {
                                "$" === e.charAt(0) && (a[e] = t);
                            }),
                                a
                        );
                    }
                    var i = e.controller || function () {};
                    return (
                        o(e, function (t, e) {
                            "$" === e.charAt(0) && ((n[e] = t), C(i) && (i[e] = t));
                        }),
                            (n.$inject = ["$injector"]),
                            this.directive(t, n)
                    );
                }),
                (this.aHrefSanitizationWhitelist = function (t) {
                    return $(t) ? (n.aHrefSanitizationWhitelist(t), this) : n.aHrefSanitizationWhitelist();
                }),
                (this.imgSrcSanitizationWhitelist = function (t) {
                    return $(t) ? (n.imgSrcSanitizationWhitelist(t), this) : n.imgSrcSanitizationWhitelist();
                });
            var k = !0;
            this.debugInfoEnabled = function (t) {
                return $(t) ? ((k = t), this) : k;
            };
            var x = !1;
            this.preAssignBindingsEnabled = function (t) {
                return $(t) ? ((x = t), this) : x;
            };
            var T = 10;
            this.onChangesTtl = function (t) {
                return arguments.length ? ((T = t), this) : T;
            };
            var E = !0;
            this.commentDirectivesEnabled = function (t) {
                return arguments.length ? ((E = t), this) : E;
            };
            var O = !0;
            (this.cssClassDirectivesEnabled = function (t) {
                return arguments.length ? ((O = t), this) : O;
            }),
                (this.$get = [
                    "$injector",
                    "$interpolate",
                    "$exceptionHandler",
                    "$templateRequest",
                    "$parse",
                    "$controller",
                    "$rootScope",
                    "$sce",
                    "$animate",
                    "$$sanitizeUri",
                    function (e, n, s, m, b, j, L, U, q, R) {
                        function V() {
                            try {
                                if (!--kt) throw ((vt = void 0), Ji("infchng", T));
                                L.$apply(function () {
                                    for (var t = [], e = 0, n = vt.length; e < n; ++e)
                                        try {
                                            vt[e]();
                                        } catch (e) {
                                            t.push(e);
                                        }
                                    if (((vt = void 0), t.length)) throw t;
                                });
                            } finally {
                                kt++;
                            }
                        }
                        function H(t, e) {
                            if (e) {
                                var n,
                                    i,
                                    r,
                                    o = Object.keys(e);
                                for (n = 0, i = o.length; n < i; n++) this[(r = o[n])] = e[r];
                            } else this.$attr = {};
                            this.$$element = t;
                        }
                        function F(t, e) {
                            try {
                                t.addClass(e);
                            } catch (t) {}
                        }
                        function B(t, e, n, i, r) {
                            t instanceof Rn || (t = Rn(t));
                            var o = z(t, e, t, n, i, r);
                            B.$$addScopeClass(t);
                            var a = null;
                            return function (e, n, i) {
                                if (!t) throw Ji("multilink");
                                Z(e, "scope"), r && r.needsNewScope && (e = e.$parent.$new());
                                var s = (i = i || {}).parentBoundTranscludeFn,
                                    u = i.transcludeControllers;
                                if (
                                    ((i = i.futureParentElement),
                                    s && s.$$boundTransclude && (s = s.$$boundTransclude),
                                    a || (a = (i = i && i[0]) && "foreignobject" !== D(i) && Kn.call(i).match(/SVG/) ? "svg" : "html"),
                                        (i = "html" !== a ? Rn(ct(a, Rn("<div>").append(t).html())) : n ? Oi.clone.call(t) : t),
                                        u)
                                )
                                    for (var l in u) i.data("$" + l + "Controller", u[l].instance);
                                return B.$$addScopeInfo(i, e), n && n(i, e), o && o(e, i, i, s), n || (t = o = null), i;
                            };
                        }
                        function z(t, e, n, i, r, o) {
                            for (var a, s, u, l, c, f = [], d = ri(t) || t instanceof Rn, h = 0; h < t.length; h++)
                                (a = new H()),
                                11 === qn && W(t, h, d),
                                (o = (s = X(t[h], [], a, 0 === h ? i : void 0, r)).length ? tt(s, t[h], a, e, n, null, [], [], o) : null) && o.scope && B.$$addScopeClass(a.$$element),
                                    (a = (o && o.terminal) || !(u = t[h].childNodes) || !u.length ? null : z(u, o ? (o.transcludeOnThisElement || !o.templateOnThisElement) && o.transclude : e)),
                                (o || a) && (f.push(h, o, a), (l = !0), (c = c || o)),
                                    (o = null);
                            return l
                                ? function (t, n, i, r) {
                                    var o, a, s, u, l, d;
                                    if (c) for (d = Array(n.length), u = 0; u < f.length; u += 3) d[(o = f[u])] = n[o];
                                    else d = n;
                                    for (u = 0, l = f.length; u < l; )
                                        (a = d[f[u++]]),
                                            (n = f[u++]),
                                            (o = f[u++]),
                                            n
                                                ? (n.scope ? ((s = t.$new()), B.$$addScopeInfo(Rn(a), s)) : (s = t),
                                                    n(o, s, a, i, n.transcludeOnThisElement ? G(t, n.transclude, r) : !n.templateOnThisElement && r ? r : !r && e ? G(t, e) : null))
                                                : o && o(t, a.childNodes, void 0, r);
                                }
                                : null;
                        }
                        function W(t, e, n) {
                            var i,
                                r = t[e],
                                o = r.parentNode;
                            if (r.nodeType === mi) for (; (i = o ? r.nextSibling : t[e + 1]) && i.nodeType === mi; ) (r.nodeValue += i.nodeValue), i.parentNode && i.parentNode.removeChild(i), n && i === t[e + 1] && t.splice(e + 1, 1);
                        }
                        function G(t, e, n) {
                            function i(i, r, o, a, s) {
                                return i || ((i = t.$new(!1, s)).$$transcluded = !0), e(i, r, { parentBoundTranscludeFn: n, transcludeControllers: o, futureParentElement: a });
                            }
                            var r,
                                o = (i.$$slots = rt());
                            for (r in e.$$slots) o[r] = e.$$slots[r] ? G(t, e.$$slots[r], n) : null;
                            return i;
                        }
                        function X(t, e, i, r, o) {
                            var s,
                                l,
                                c,
                                f,
                                d = i.$attr;
                            switch (t.nodeType) {
                                case 1:
                                    it(e, Bt((s = D(t))), "E", r, o);
                                    for (var h, p, m, g, v = t.attributes, $ = 0, b = v && v.length; $ < b; $++) {
                                        var k = !1,
                                            x = !1;
                                        (p = (h = v[$]).name),
                                            (m = h.value),
                                            (h = Bt(p)),
                                        (g = Et.test(h)) &&
                                        (p = p
                                            .replace(Yi, "")
                                            .substr(8)
                                            .replace(/_(.)/g, function (t, e) {
                                                return e.toUpperCase();
                                            })),
                                        (h = h.match(St)) && ot(h[1]) && ((k = p), (x = p.substr(0, p.length - 5) + "end"), (p = p.substr(0, p.length - 6))),
                                            (d[(h = Bt(p.toLowerCase()))] = p),
                                        (!g && i.hasOwnProperty(h)) || ((i[h] = m), At(t, h) && (i[h] = !0)),
                                            ft(t, e, m, h, g),
                                            it(e, h, "A", r, o, k, x);
                                    }
                                    if (("input" === s && "hidden" === t.getAttribute("type") && t.setAttribute("autocomplete", "off"), !wt)) break;
                                    if ((y((d = t.className)) && (d = d.animVal), w(d) && "" !== d)) for (; (t = u.exec(d)); ) it(e, (h = Bt(t[2])), "C", r, o) && (i[h] = ai(t[3])), (d = d.substr(t.index + t[0].length));
                                    break;
                                case mi:
                                    (l = e),
                                        (c = t.nodeValue),
                                    (f = n(c, !0)) &&
                                    l.push({
                                        priority: 0,
                                        compile: function (t) {
                                            var e = !!(t = t.parent()).length;
                                            return (
                                                e && B.$$addBindingClass(t),
                                                    function (t, n) {
                                                        var i = n.parent();
                                                        e || B.$$addBindingClass(i),
                                                            B.$$addBindingInfo(i, f.expressions),
                                                            t.$watch(f, function (t) {
                                                                n[0].nodeValue = t;
                                                            });
                                                    }
                                            );
                                        },
                                    });
                                    break;
                                case 8:
                                    if (!bt) break;
                                    !(function (t, e, n, i, r) {
                                        try {
                                            var o = a.exec(t.nodeValue);
                                            if (o) {
                                                var s = Bt(o[1]);
                                                it(e, s, "M", i, r) && (n[s] = ai(o[2]));
                                            }
                                        } catch (t) {}
                                    })(t, e, i, r, o);
                            }
                            return e.sort(ut), e;
                        }
                        function J(t, e, n) {
                            var i = [],
                                r = 0;
                            if (e && t.hasAttribute && t.hasAttribute(e))
                                do {
                                    if (!t) throw Ji("uterdir", e, n);
                                    1 === t.nodeType && (t.hasAttribute(e) && r++, t.hasAttribute(n) && r--), i.push(t), (t = t.nextSibling);
                                } while (0 < r);
                            else i.push(t);
                            return Rn(i);
                        }
                        function K(t, e, n) {
                            return function (i, r, o, a, s) {
                                return (r = J(r[0], e, n)), t(i, r, o, a, s);
                            };
                        }
                        function Y(t, e, n, i, r, o) {
                            var a;
                            return t
                                ? B(e, n, i, r, o)
                                : function () {
                                    return a || ((a = B(e, n, i, r, o)), (e = n = o = null)), a.apply(this, arguments);
                                };
                        }
                        function tt(t, e, n, i, r, a, u, c, f) {
                            function d(t, e, n, i) {
                                t && (n && (t = K(t, n, i)), (t.require = p.require), (t.directiveName = m), (E === p || p.$$isolateScope) && (t = pt(t, { isolateScope: !0 })), u.push(t)),
                                e && (n && (e = K(e, n, i)), (e.require = p.require), (e.directiveName = m), (E === p || p.$$isolateScope) && (e = pt(e, { isolateScope: !0 })), c.push(e));
                            }
                            function h(t, i, r, a, f) {
                                var d, h, p, m, g, $, b, w;
                                for (d in (e === r ? ((a = n), (w = n.$$element)) : (a = new H((w = Rn(r)), n)),
                                    (g = i),
                                    E ? (m = i.$new(!0)) : k && (g = i.$parent),
                                f &&
                                (((b = function (t, e, n, i) {
                                    var r;
                                    if ((S(t) || ((i = n), (n = e), (e = t), (t = void 0)), I && (r = $), n || (n = I ? w.parent() : w), !i)) return f(t, e, r, n, M);
                                    var o = f.$$slots[i];
                                    if (o) return o(t, e, r, n, M);
                                    if (v(o)) throw Ji("noslot", i, _(w));
                                }).$$boundTransclude = f),
                                    (b.isSlotFilled = function (t) {
                                        return !!f.$$slots[t];
                                    })),
                                T &&
                                ($ = (function (t, e, n, i, r, o, a) {
                                    var s,
                                        u = rt();
                                    for (s in i) {
                                        var l = i[s],
                                            c = { $scope: l === a || l.$$isolateScope ? r : o, $element: t, $attrs: e, $transclude: n },
                                            f = l.controller;
                                        "@" === f && (f = e[l.name]), (c = j(f, c, !0, l.controllerAs)), (u[l.name] = c), t.data("$" + l.name + "Controller", c.instance);
                                    }
                                    return u;
                                })(w, a, b, T, m, i, E)),
                                E &&
                                (B.$$addScopeInfo(w, m, !0, !(A && (A === E || A === E.$$originalDirective))),
                                    B.$$addScopeClass(w, !0),
                                    (m.$$isolateBindings = E.$$isolateBindings),
                                (h = gt(i, a, m, m.$$isolateBindings, E)).removeWatches && m.$on("$destroy", h.removeWatches)),
                                    $)) {
                                    (h = T[d]), (p = $[d]);
                                    var O = h.$$bindings.bindToController;
                                    if (x) {
                                        p.bindingInfo = O ? gt(g, a, p.instance, O, h) : {};
                                        var D = p();
                                        D !== p.instance && ((p.instance = D), w.data("$" + h.name + "Controller", D), p.bindingInfo.removeWatches && p.bindingInfo.removeWatches(), (p.bindingInfo = gt(g, a, p.instance, O, h)));
                                    } else (p.instance = p()), w.data("$" + h.name + "Controller", p.instance), (p.bindingInfo = gt(g, a, p.instance, O, h));
                                }
                                for (
                                    o(T, function (t, e) {
                                        var n = t.require;
                                        t.bindToController && !ri(n) && y(n) && l($[e].instance, et(e, n, w, $));
                                    }),
                                        o($, function (t) {
                                            var e = t.instance;
                                            if (C(e.$onChanges))
                                                try {
                                                    e.$onChanges(t.bindingInfo.initialChanges);
                                                } catch (t) {
                                                    s(t);
                                                }
                                            if (C(e.$onInit))
                                                try {
                                                    e.$onInit();
                                                } catch (t) {
                                                    s(t);
                                                }
                                            C(e.$doCheck) &&
                                            (g.$watch(function () {
                                                e.$doCheck();
                                            }),
                                                e.$doCheck()),
                                            C(e.$onDestroy) &&
                                            g.$on("$destroy", function () {
                                                e.$onDestroy();
                                            });
                                        }),
                                        d = 0,
                                        h = u.length;
                                    d < h;
                                    d++
                                )
                                    mt((p = u[d]), p.isolateScope ? m : i, w, a, p.require && et(p.directiveName, p.require, w, $), b);
                                var M = i;
                                for (E && (E.template || null === E.templateUrl) && (M = m), t && t(M, r.childNodes, void 0, f), d = c.length - 1; 0 <= d; d--)
                                    mt((p = c[d]), p.isolateScope ? m : i, w, a, p.require && et(p.directiveName, p.require, w, $), b);
                                o($, function (t) {
                                    C((t = t.instance).$postLink) && t.$postLink();
                                });
                            }
                            f = f || {};
                            for (
                                var p,
                                    m,
                                    g,
                                    $,
                                    b,
                                    w = -Number.MAX_VALUE,
                                    k = f.newScopeDirective,
                                    T = f.controllerDirectives,
                                    E = f.newIsolateScopeDirective,
                                    A = f.templateDirective,
                                    O = f.nonTlbTranscludeDirective,
                                    M = !1,
                                    N = !1,
                                    I = f.hasElementTranscludeDirective,
                                    L = (n.$$element = Rn(e)),
                                    U = i,
                                    q = !1,
                                    R = !1,
                                    V = 0,
                                    F = t.length;
                                V < F;
                                V++
                            ) {
                                var z = (p = t[V]).$$start,
                                    W = p.$$end;
                                if ((z && (L = J(e, z, W)), (g = void 0), w > p.priority)) break;
                                if (
                                    ((b = p.scope) && (p.templateUrl || (y(b) ? (lt("new/isolated scope", E || k, p, L), (E = p)) : lt("new/isolated scope", E, p, L)), (k = k || p)),
                                        (m = p.name),
                                    !q && ((p.replace && (p.templateUrl || p.template)) || (p.transclude && !p.$$tlb)))
                                ) {
                                    for (b = V + 1; (q = t[b++]); )
                                        if ((q.transclude && !q.$$tlb) || (q.replace && (q.templateUrl || q.template))) {
                                            R = !0;
                                            break;
                                        }
                                    q = !0;
                                }
                                if ((!p.templateUrl && p.controller && ((T = T || rt()), lt("'" + m + "' controller", T[m], p, L), (T[m] = p)), (b = p.transclude)))
                                    if (((M = !0), p.$$tlb || (lt("transclusion", O, p, L), (O = p)), "element" === b))
                                        (I = !0),
                                            (w = p.priority),
                                            (g = L),
                                            (L = n.$$element = Rn(B.$$createComment(m, n[m]))),
                                            (e = L[0]),
                                            dt(r, Gn.call(g, 0), e),
                                            (g[0].$$parentNode = g[0].parentNode),
                                            (U = Y(R, g, i, w, a && a.name, { nonTlbTranscludeDirective: O }));
                                    else {
                                        var G = rt();
                                        if (y(b)) {
                                            g = [];
                                            var Q = rt(),
                                                Z = rt();
                                            for (var tt in (o(b, function (t, e) {
                                                var n = "?" === t.charAt(0);
                                                (t = n ? t.substring(1) : t), (Q[t] = e), (G[e] = null), (Z[e] = n);
                                            }),
                                                o(L.contents(), function (t) {
                                                    var e = Q[Bt(D(t))];
                                                    e ? ((Z[e] = !0), (G[e] = G[e] || []), G[e].push(t)) : g.push(t);
                                                }),
                                                o(Z, function (t, e) {
                                                    if (!t) throw Ji("reqslot", e);
                                                }),
                                                G))
                                                G[tt] && (G[tt] = Y(R, G[tt], i));
                                        } else g = Rn(ht(e)).contents();
                                        L.empty(), ((U = Y(R, g, i, void 0, void 0, { needsNewScope: p.$$isolateScope || p.$$newScope })).$$slots = G);
                                    }
                                if (p.template)
                                    if (((N = !0), lt("template", A, p, L), (A = p), (b = C(p.template) ? p.template(L, n) : p.template), (b = Tt(b)), p.replace)) {
                                        if (((a = p), (g = Ci.test(b) ? Wt(ct(p.templateNamespace, ai(b))) : []), (e = g[0]), 1 !== g.length || 1 !== e.nodeType)) throw Ji("tplrt", m, "");
                                        dt(r, L, e), (b = X(e, [], (F = { $attr: {} })));
                                        var it = t.splice(V + 1, t.length - (V + 1));
                                        (E || k) && nt(b, E, k), (t = t.concat(b).concat(it)), at(n, F), (F = t.length);
                                    } else L.html(b);
                                if (p.templateUrl)
                                    (N = !0),
                                        lt("template", A, p, L),
                                        (A = p),
                                    p.replace && (a = p),
                                        (h = st(t.splice(V, t.length - V), L, n, r, M && U, u, c, {
                                            controllerDirectives: T,
                                            newScopeDirective: k !== p && k,
                                            newIsolateScopeDirective: E,
                                            templateDirective: A,
                                            nonTlbTranscludeDirective: O,
                                        })),
                                        (F = t.length);
                                else if (p.compile)
                                    try {
                                        $ = p.compile(L, n, U);
                                        var ot = p.$$originalDirective || p;
                                        C($) ? d(null, P(ot, $), z, W) : $ && d(P(ot, $.pre), P(ot, $.post), z, W);
                                    } catch (t) {
                                        s(t, _(L));
                                    }
                                p.terminal && ((h.terminal = !0), (w = Math.max(w, p.priority)));
                            }
                            return (h.scope = k && !0 === k.scope), (h.transcludeOnThisElement = M), (h.templateOnThisElement = N), (h.transclude = U), (f.hasElementTranscludeDirective = I), h;
                        }
                        function et(t, e, n, i) {
                            var r;
                            if (w(e)) {
                                var a = e.match(f);
                                e = e.substring(a[0].length);
                                var s = a[1] || a[3];
                                a = "?" === a[2];
                                if (("^^" === s ? (n = n.parent()) : (r = (r = i && i[e]) && r.instance), !r)) {
                                    var u = "$" + e + "Controller";
                                    r = s ? n.inheritedData(u) : n.data(u);
                                }
                                if (!r && !a) throw Ji("ctreq", e, t);
                            } else if (ri(e)) for (r = [], s = 0, a = e.length; s < a; s++) r[s] = et(t, e[s], n, i);
                            else
                                y(e) &&
                                ((r = {}),
                                    o(e, function (e, o) {
                                        r[o] = et(t, e, n, i);
                                    }));
                            return r || null;
                        }
                        function nt(t, e, n) {
                            for (var i = 0, r = t.length; i < r; i++) t[i] = d(t[i], { $$isolateScope: e, $$newScope: n });
                        }
                        function it(t, n, o, a, s, u, l) {
                            if (n === s) return null;
                            var c = null;
                            if (r.hasOwnProperty(n))
                                for (var f = 0, h = (s = e.get(n + "Directive")).length; f < h; f++)
                                    if (((n = s[f]), (v(a) || a > n.priority) && -1 !== n.restrict.indexOf(o))) {
                                        if ((u && (n = d(n, { $$start: u, $$end: l })), !n.$$bindings)) {
                                            var p = (c = n),
                                                m = n.name,
                                                g = { isolateScope: null, bindToController: null };
                                            if (
                                                (y(p.scope) && (!0 === p.bindToController ? ((g.bindToController = i(p.scope, m, !0)), (g.isolateScope = {})) : (g.isolateScope = i(p.scope, m, !1))),
                                                y(p.bindToController) && (g.bindToController = i(p.bindToController, m, !0)),
                                                g.bindToController && !p.controller)
                                            )
                                                throw Ji("noctrl", m);
                                            y((c = c.$$bindings = g).isolateScope) && (n.$$isolateBindings = c.isolateScope);
                                        }
                                        t.push(n), (c = n);
                                    }
                            return c;
                        }
                        function ot(t) {
                            if (r.hasOwnProperty(t)) for (var n = e.get(t + "Directive"), i = 0, o = n.length; i < o; i++) if ((t = n[i]).multiElement) return !0;
                            return !1;
                        }
                        function at(t, e) {
                            var n = e.$attr,
                                i = t.$attr;
                            o(t, function (i, r) {
                                "$" !== r.charAt(0) && (e[r] && e[r] !== i && (i = i.length ? i + ("style" === r ? ";" : " ") + e[r] : e[r]), t.$set(r, i, !0, n[r]));
                            }),
                                o(e, function (e, r) {
                                    t.hasOwnProperty(r) || "$" === r.charAt(0) || ((t[r] = e), "class" !== r && "style" !== r && (i[r] = n[r]));
                                });
                        }
                        function st(t, e, n, i, r, a, u, l) {
                            var c,
                                f,
                                h = [],
                                p = e[0],
                                g = t.shift(),
                                v = d(g, { templateUrl: null, transclude: null, replace: null, $$originalDirective: g }),
                                $ = C(g.templateUrl) ? g.templateUrl(e, n) : g.templateUrl,
                                b = g.templateNamespace;
                            return (
                                e.empty(),
                                    m($)
                                        .then(function (s) {
                                            var d, m;
                                            if (((s = Tt(s)), g.replace)) {
                                                if (((s = Ci.test(s) ? Wt(ct(b, ai(s))) : []), (d = s[0]), 1 !== s.length || 1 !== d.nodeType)) throw Ji("tplrt", g.name, $);
                                                (s = { $attr: {} }), dt(i, e, d);
                                                var w = X(d, [], s);
                                                y(g.scope) && nt(w, !0), (t = w.concat(t)), at(n, s);
                                            } else (d = p), e.html(s);
                                            for (
                                                t.unshift(v),
                                                    c = tt(t, d, n, r, e, g, a, u, l),
                                                    o(i, function (t, n) {
                                                        t === d && (i[n] = e[0]);
                                                    }),
                                                    f = z(e[0].childNodes, r);
                                                h.length;

                                            ) {
                                                (s = h.shift()), (m = h.shift());
                                                var k = h.shift(),
                                                    x = h.shift();
                                                w = e[0];
                                                if (!s.$$destroyed) {
                                                    if (m !== p) {
                                                        var C = m.className;
                                                        (l.hasElementTranscludeDirective && g.replace) || (w = ht(d)), dt(k, Rn(m), w), F(Rn(w), C);
                                                    }
                                                    (m = c.transcludeOnThisElement ? G(s, c.transclude, x) : x), c(f, s, w, i, m);
                                                }
                                            }
                                            h = null;
                                        })
                                        .catch(function (t) {
                                            t instanceof Error && s(t);
                                        }),
                                    function (t, e, n, i, r) {
                                        (t = r), e.$$destroyed || (h ? h.push(e, n, i, t) : (c.transcludeOnThisElement && (t = G(e, c.transclude, r)), c(f, e, n, i, t)));
                                    }
                            );
                        }
                        function ut(t, e) {
                            var n = e.priority - t.priority;
                            return 0 !== n ? n : t.name !== e.name ? (t.name < e.name ? -1 : 1) : t.index - e.index;
                        }
                        function lt(t, e, n, i) {
                            function r(t) {
                                return t ? " (module: " + t + ")" : "";
                            }
                            if (e) throw Ji("multidir", e.name, r(e.$$moduleName), n.name, r(n.$$moduleName), t, _(i));
                        }
                        function ct(e, n) {
                            switch ((e = zn(e || "html"))) {
                                case "svg":
                                case "math":
                                    var i = t.document.createElement("div");
                                    return (i.innerHTML = "<" + e + ">" + n + "</" + e + ">"), i.childNodes[0].childNodes;
                                default:
                                    return n;
                            }
                        }
                        function ft(t, e, i, r, o) {
                            var a = (function (t, e) {
                                    if ("srcdoc" === e) return U.HTML;
                                    var n = D(t);
                                    if ("src" === e || "ngSrc" === e) {
                                        if (-1 === ["img", "video", "audio", "source", "track"].indexOf(n)) return U.RESOURCE_URL;
                                    } else if ("xlinkHref" === e || ("form" === n && "action" === e) || ("link" === n && "href" === e)) return U.RESOURCE_URL;
                                })(t, r),
                                s = c[r] || o,
                                u = n(i, !o, a, s);
                            if (u) {
                                if ("multiple" === r && "select" === D(t)) throw Ji("selmulti", _(t));
                                if (g.test(r)) throw Ji("nodomevents");
                                e.push({
                                    priority: 100,
                                    compile: function () {
                                        return {
                                            pre: function (t, e, o) {
                                                e = o.$$observers || (o.$$observers = rt());
                                                var l = o[r];
                                                l !== i && ((u = l && n(l, !0, a, s)), (i = l)),
                                                u &&
                                                ((o[r] = u(t)),
                                                    ((e[r] || (e[r] = [])).$$inter = !0),
                                                    ((o.$$observers && o.$$observers[r].$$scope) || t).$watch(u, function (t, e) {
                                                        "class" === r && t !== e ? o.$updateClass(t, e) : o.$set(r, t);
                                                    }));
                                            },
                                        };
                                    },
                                });
                            }
                        }
                        function dt(e, n, i) {
                            var r,
                                o,
                                a = n[0],
                                s = n.length,
                                u = a.parentNode;
                            if (e)
                                for (r = 0, o = e.length; r < o; r++)
                                    if (e[r] === a) {
                                        (e[r++] = i), (o = r + s - 1);
                                        for (var l = e.length; r < l; r++, o++) o < l ? (e[r] = e[o]) : delete e[r];
                                        (e.length -= s - 1), e.context === a && (e.context = i);
                                        break;
                                    }
                            for (u && u.replaceChild(i, a), e = t.document.createDocumentFragment(), r = 0; r < s; r++) e.appendChild(n[r]);
                            for (Rn.hasData(a) && (Rn.data(i, Rn.data(a)), Rn(a).off("$destroy")), Rn.cleanData(e.querySelectorAll("*")), r = 1; r < s; r++) delete n[r];
                            (n[0] = i), (n.length = 1);
                        }
                        function pt(t, e) {
                            return l(
                                function () {
                                    return t.apply(null, arguments);
                                },
                                t,
                                e
                            );
                        }
                        function mt(t, e, n, i, r, o) {
                            try {
                                t(e, n, i, r, o);
                            } catch (t) {
                                s(t, _(n));
                            }
                        }
                        function gt(t, e, i, r, a) {
                            function s(e, n, r) {
                                C(i.$onChanges) && !N(n, r) && (vt || (t.$$postDigest(V), (vt = [])), l || ((l = {}), vt.push(u)), l[e] && (r = l[e].previousValue), (l[e] = new Ft(r, n)));
                            }
                            function u() {
                                i.$onChanges(l), (l = void 0);
                            }
                            var l,
                                c = [],
                                f = {};
                            return (
                                o(r, function (r, o) {
                                    var u,
                                        l,
                                        d,
                                        p,
                                        m = r.attrName,
                                        g = r.optional;
                                    switch (r.mode) {
                                        case "@":
                                            g || Fn.call(e, m) || (i[o] = e[m] = void 0),
                                                (g = e.$observe(m, function (t) {
                                                    (w(t) || A(t)) && (s(o, t, i[o]), (i[o] = t));
                                                })),
                                                (e.$$observers[m].$$scope = t),
                                                w((u = e[m])) ? (i[o] = n(u)(t)) : A(u) && (i[o] = u),
                                                (f[o] = new Ft(Ki, i[o])),
                                                c.push(g);
                                            break;
                                        case "=":
                                            if (!Fn.call(e, m)) {
                                                if (g) break;
                                                e[m] = void 0;
                                            }
                                            if (g && !e[m]) break;
                                            (l = b(e[m])),
                                                (p = l.literal ? I : N),
                                                (d =
                                                    l.assign ||
                                                    function () {
                                                        throw ((u = i[o] = l(t)), Ji("nonassign", e[m], m, a.name));
                                                    }),
                                                (u = i[o] = l(t)),
                                                ((g = function (e) {
                                                    return p(e, i[o]) || (p(e, u) ? d(t, (e = i[o])) : (i[o] = e)), (u = e);
                                                }).$stateful = !0),
                                                (g = r.collection ? t.$watchCollection(e[m], g) : t.$watch(b(e[m], g), null, l.literal)),
                                                c.push(g);
                                            break;
                                        case "<":
                                            if (!Fn.call(e, m)) {
                                                if (g) break;
                                                e[m] = void 0;
                                            }
                                            if (g && !e[m]) break;
                                            var v = (l = b(e[m])).literal,
                                                $ = (i[o] = l(t));
                                            (f[o] = new Ft(Ki, i[o])),
                                                (g = t.$watch(
                                                    l,
                                                    function (t, e) {
                                                        if (e === t) {
                                                            if (e === $ || (v && I(e, $))) return;
                                                            e = $;
                                                        }
                                                        s(o, t, e), (i[o] = t);
                                                    },
                                                    v
                                                )),
                                                c.push(g);
                                            break;
                                        case "&":
                                            if ((l = e.hasOwnProperty(m) ? b(e[m]) : h) === h && g) break;
                                            i[o] = function (e) {
                                                return l(t, e);
                                            };
                                    }
                                }),
                                    {
                                        initialChanges: f,
                                        removeWatches:
                                            c.length &&
                                            function () {
                                                for (var t = 0, e = c.length; t < e; ++t) c[t]();
                                            },
                                    }
                            );
                        }
                        var vt,
                            $t = /^\w/,
                            yt = t.document.createElement("div"),
                            bt = E,
                            wt = O,
                            kt = T;
                        H.prototype = {
                            $normalize: Bt,
                            $addClass: function (t) {
                                t && 0 < t.length && q.addClass(this.$$element, t);
                            },
                            $removeClass: function (t) {
                                t && 0 < t.length && q.removeClass(this.$$element, t);
                            },
                            $updateClass: function (t, e) {
                                var n = zt(t, e);
                                n && n.length && q.addClass(this.$$element, n), (n = zt(e, t)) && n.length && q.removeClass(this.$$element, n);
                            },
                            $set: function (t, e, n, i) {
                                var r = At(this.$$element[0], t),
                                    a = ji[t],
                                    u = t;
                                if (
                                    (r ? (this.$$element.prop(t, e), (i = r)) : a && ((this[a] = e), (u = a)),
                                        (this[t] = e),
                                        i ? (this.$attr[t] = i) : (i = this.$attr[t]) || (this.$attr[t] = i = Q(t, "-")),
                                    ("a" === (r = D(this.$$element)) && ("href" === t || "xlinkHref" === t)) || ("img" === r && "src" === t))
                                )
                                    this[t] = e = R(e, "src" === t);
                                else if ("img" === r && "srcset" === t && $(e)) {
                                    (r = ""), (a = ai(e));
                                    for (var l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, c = ((l = /\s/.test(a) ? l : /(,)/), (a = a.split(l)), (l = Math.floor(a.length / 2)), 0); c < l; c++) {
                                        var f = 2 * c;
                                        r = (r = r + R(ai(a[f]), !0)) + " " + ai(a[f + 1]);
                                    }
                                    (a = ai(a[2 * c]).split(/\s/)), (r += R(ai(a[0]), !0)), 2 === a.length && (r += " " + ai(a[1])), (this[t] = e = r);
                                }
                                !1 !== n &&
                                (null === e || v(e)
                                    ? this.$$element.removeAttr(i)
                                    : $t.test(i)
                                        ? this.$$element.attr(i, e)
                                        : (function (t, e, n) {
                                            yt.innerHTML = "<span " + e + ">";
                                            var i = (e = yt.firstChild.attributes)[0];
                                            e.removeNamedItem(i.name), (i.value = n), t.attributes.setNamedItem(i);
                                        })(this.$$element[0], i, e)),
                                (t = this.$$observers) &&
                                o(t[u], function (t) {
                                    try {
                                        t(e);
                                    } catch (t) {
                                        s(t);
                                    }
                                });
                            },
                            $observe: function (t, e) {
                                var n = this,
                                    i = n.$$observers || (n.$$observers = rt()),
                                    r = i[t] || (i[t] = []);
                                return (
                                    r.push(e),
                                        L.$evalAsync(function () {
                                            r.$$inter || !n.hasOwnProperty(t) || v(n[t]) || e(n[t]);
                                        }),
                                        function () {
                                            M(r, e);
                                        }
                                );
                            },
                        };
                        var xt = n.startSymbol(),
                            Ct = n.endSymbol(),
                            Tt =
                                "{{" === xt && "}}" === Ct
                                    ? p
                                    : function (t) {
                                        return t.replace(/\{\{/g, xt).replace(/}}/g, Ct);
                                    },
                            Et = /^ngAttr[A-Z]/,
                            St = /^(.+)Start$/;
                        return (
                            (B.$$addBindingInfo = k
                                ? function (t, e) {
                                    var n = t.data("$binding") || [];
                                    ri(e) ? (n = n.concat(e)) : n.push(e), t.data("$binding", n);
                                }
                                : h),
                                (B.$$addBindingClass = k
                                    ? function (t) {
                                        F(t, "ng-binding");
                                    }
                                    : h),
                                (B.$$addScopeInfo = k
                                    ? function (t, e, n, i) {
                                        t.data(n ? (i ? "$isolateScopeNoTemplate" : "$isolateScope") : "$scope", e);
                                    }
                                    : h),
                                (B.$$addScopeClass = k
                                    ? function (t, e) {
                                        F(t, e ? "ng-isolate-scope" : "ng-scope");
                                    }
                                    : h),
                                (B.$$createComment = function (e, n) {
                                    var i = "";
                                    return k && ((i = " " + (e || "") + ": "), n && (i += n + " ")), t.document.createComment(i);
                                }),
                                B
                        );
                    },
                ]);
        }
        function Ft(t, e) {
            (this.previousValue = t), (this.currentValue = e);
        }
        function Bt(t) {
            return t.replace(Yi, "").replace(Qi, ut);
        }
        function zt(t, e) {
            var n = "",
                i = t.split(/\s+/),
                r = e.split(/\s+/),
                o = 0;
            t: for (; o < i.length; o++) {
                for (var a = i[o], s = 0; s < r.length; s++) if (a === r[s]) continue t;
                n += (0 < n.length ? " " : "") + a;
            }
            return n;
        }
        function Wt(t) {
            var e = (t = Rn(t)).length;
            if (1 >= e) return t;
            for (; e--; ) {
                var n = t[e];
                (8 === n.nodeType || (n.nodeType === mi && "" === n.nodeValue.trim())) && Xn.call(t, e, 1);
            }
            return t;
        }
        function Gt() {
            var t = {},
                n = !1;
            (this.has = function (e) {
                return t.hasOwnProperty(e);
            }),
                (this.register = function (e, n) {
                    et(e, "controller"), y(e) ? l(t, e) : (t[e] = n);
                }),
                (this.allowGlobals = function () {
                    n = !0;
                }),
                (this.$get = [
                    "$injector",
                    "$window",
                    function (i, r) {
                        function o(t, n, i, r) {
                            if (!t || !y(t.$scope)) throw e("$controller")("noscp", r, n);
                            t.$scope[n] = i;
                        }
                        return function (e, a, s, u) {
                            var c, f, d;
                            if (((s = !0 === s), u && w(u) && (d = u), w(e))) {
                                if (!(u = e.match(tr))) throw Zi("ctrlfmt", e);
                                if (((f = u[1]), (d = d || u[3]), !(e = t.hasOwnProperty(f) ? t[f] : nt(a.$scope, f, !0) || (n ? nt(r, f, !0) : void 0)))) throw Zi("ctrlreg", f);
                                tt(e, f, !0);
                            }
                            return s
                                ? ((s = (ri(e) ? e[e.length - 1] : e).prototype),
                                    (c = Object.create(s || null)),
                                d && o(a, d, c, f || e.name),
                                    l(
                                        function () {
                                            var t = i.invoke(e, c, a, f);
                                            return t !== c && (y(t) || C(t)) && ((c = t), d && o(a, d, c, f || e.name)), c;
                                        },
                                        { instance: c, identifier: d }
                                    ))
                                : ((c = i.instantiate(e, a, f)), d && o(a, d, c, f || e.name), c);
                        };
                    },
                ]);
        }
        function Xt() {
            this.$get = [
                "$window",
                function (t) {
                    return Rn(t.document);
                },
            ];
        }
        function Jt() {
            this.$get = [
                "$document",
                "$rootScope",
                function (t, e) {
                    function n() {
                        r = i.hidden;
                    }
                    var i = t[0],
                        r = i && i.hidden;
                    return (
                        t.on("visibilitychange", n),
                            e.$on("$destroy", function () {
                                t.off("visibilitychange", n);
                            }),
                            function () {
                                return r;
                            }
                    );
                },
            ];
        }
        function Kt() {
            this.$get = [
                "$log",
                function (t) {
                    return function (e, n) {
                        t.error.apply(t, arguments);
                    };
                },
            ];
        }
        function Yt(t) {
            return y(t) ? (x(t) ? t.toISOString() : q(t)) : t;
        }
        function Qt() {
            this.$get = function () {
                return function (t) {
                    if (!t) return "";
                    var e = [];
                    return (
                        a(t, function (t, n) {
                            null === t ||
                            v(t) ||
                            (ri(t)
                                ? o(t, function (t) {
                                    e.push(G(n) + "=" + G(Yt(t)));
                                })
                                : e.push(G(n) + "=" + G(Yt(t))));
                        }),
                            e.join("&")
                    );
                };
            };
        }
        function Zt() {
            this.$get = function () {
                return function (t) {
                    if (!t) return "";
                    var e = [];
                    return (
                        (function t(n, i, r) {
                            null === n ||
                            v(n) ||
                            (ri(n)
                                ? o(n, function (e, n) {
                                    t(e, i + "[" + (y(e) ? n : "") + "]");
                                })
                                : y(n) && !x(n)
                                    ? a(n, function (e, n) {
                                        t(e, i + (r ? "" : "[") + n + (r ? "" : "]"));
                                    })
                                    : e.push(G(i) + "=" + G(Yt(n))));
                        })(t, "", !0),
                            e.join("&")
                    );
                };
            };
        }
        function te(t, e) {
            if (w(t)) {
                var n = t.replace(ar, "").trim();
                if (n) {
                    var i = e("Content-Type");
                    if (((i = i && 0 === i.indexOf(nr)) || (i = (i = n.match(rr)) && or[i[0]].test(n)), i))
                        try {
                            t = R(n);
                        } catch (e) {
                            throw sr("baddata", t, e);
                        }
                }
            }
            return t;
        }
        function ee(t) {
            var e,
                n = rt();
            return (
                w(t)
                    ? o(t.split("\n"), function (t) {
                        e = t.indexOf(":");
                        var i = zn(ai(t.substr(0, e)));
                        (t = ai(t.substr(e + 1))), i && (n[i] = n[i] ? n[i] + ", " + t : t);
                    })
                    : y(t) &&
                    o(t, function (t, e) {
                        var i = zn(e),
                            r = ai(t);
                        i && (n[i] = n[i] ? n[i] + ", " + r : r);
                    }),
                    n
            );
        }
        function ne(t) {
            var e;
            return function (n) {
                return e || (e = ee(t)), n ? (void 0 === (n = e[zn(n)]) && (n = null), n) : e;
            };
        }
        function ie(t, e, n, i) {
            return C(i)
                ? i(t, e, n)
                : (o(i, function (i) {
                    t = i(t, e, n);
                }),
                    t);
        }
        function re() {
            var t = (this.defaults = {
                    transformResponse: [te],
                    transformRequest: [
                        function (t) {
                            return y(t) && "[object File]" !== Kn.call(t) && "[object Blob]" !== Kn.call(t) && "[object FormData]" !== Kn.call(t) ? q(t) : t;
                        },
                    ],
                    headers: { common: { Accept: "application/json, text/plain, */*" }, post: at(ir), put: at(ir), patch: at(ir) },
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    paramSerializer: "$httpParamSerializer",
                    jsonpCallbackParam: "callback",
                }),
                n = !1;
            this.useApplyAsync = function (t) {
                return $(t) ? ((n = !!t), this) : n;
            };
            var i = (this.interceptors = []);
            this.$get = [
                "$browser",
                "$httpBackend",
                "$$cookieReader",
                "$cacheFactory",
                "$rootScope",
                "$q",
                "$injector",
                "$sce",
                function (r, a, s, u, c, f, d, p) {
                    function m(i) {
                        function u(t, e) {
                            for (var n = 0, i = e.length; n < i; ) {
                                var r = e[n++],
                                    o = e[n++];
                                t = t.then(r, o);
                            }
                            return (e.length = 0), t;
                        }
                        function k(t) {
                            var e = l({}, t);
                            return (e.data = ie(t.data, t.headers, t.status, x.transformResponse)), 200 <= (t = t.status) && 300 > t ? e : f.reject(e);
                        }
                        if (!y(i)) throw e("$http")("badreq", i);
                        if (!w(p.valueOf(i.url))) throw e("$http")("badreq", i.url);
                        var x = l({ method: "get", transformRequest: t.transformRequest, transformResponse: t.transformResponse, paramSerializer: t.paramSerializer, jsonpCallbackParam: t.jsonpCallbackParam }, i);
                        (x.headers = (function (e) {
                            var n,
                                i,
                                r,
                                a,
                                s,
                                u,
                                c,
                                f = t.headers,
                                d = l({}, e.headers);
                            f = l({}, f.common, f[zn(e.method)]);
                            t: for (n in f) {
                                for (r in ((i = zn(n)), d)) if (zn(r) === i) continue t;
                                d[n] = f[n];
                            }
                            return (
                                (a = d),
                                    (s = at(e)),
                                    (c = {}),
                                    o(a, function (t, e) {
                                        C(t) ? null != (u = t(s)) && (c[e] = u) : (c[e] = t);
                                    }),
                                    c
                            );
                        })(i)),
                            (x.method = Wn(x.method)),
                            (x.paramSerializer = w(x.paramSerializer) ? d.get(x.paramSerializer) : x.paramSerializer),
                            r.$$incOutstandingRequestCount();
                        var T = [],
                            E = [];
                        return (
                            (i = f.resolve(x)),
                                o(b, function (t) {
                                    (t.request || t.requestError) && T.unshift(t.request, t.requestError), (t.response || t.responseError) && E.push(t.response, t.responseError);
                                }),
                                (i = u(
                                    (i = (i = u(i, T)).then(function (e) {
                                        var i = e.headers,
                                            r = ie(e.data, ne(i), void 0, e.transformRequest);
                                        return (
                                            v(r) &&
                                            o(i, function (t, e) {
                                                "content-type" === zn(e) && delete i[e];
                                            }),
                                            v(e.withCredentials) && !v(t.withCredentials) && (e.withCredentials = t.withCredentials),
                                                (function (e, i) {
                                                    function r(t) {
                                                        if (t) {
                                                            var e = {};
                                                            return (
                                                                o(t, function (t, i) {
                                                                    e[i] = function (e) {
                                                                        function i() {
                                                                            t(e);
                                                                        }
                                                                        n ? c.$applyAsync(i) : c.$$phase ? i() : c.$apply(i);
                                                                    };
                                                                }),
                                                                    e
                                                            );
                                                        }
                                                    }
                                                    function u(t, n, i, r) {
                                                        (200 <= (n = -1 <= n ? n : 0) && 300 > n ? k.resolve : k.reject)({ data: t, status: n, headers: ne(i), config: e, statusText: r });
                                                    }
                                                    function l(t) {
                                                        u(t.data, t.status, at(t.headers()), t.statusText);
                                                    }
                                                    function d() {
                                                        var t = m.pendingRequests.indexOf(e);
                                                        -1 !== t && m.pendingRequests.splice(t, 1);
                                                    }
                                                    var h,
                                                        b,
                                                        k = f.defer(),
                                                        x = k.promise,
                                                        T = e.headers,
                                                        E = "jsonp" === zn(e.method),
                                                        S = e.url;
                                                    return (
                                                        E ? (S = p.getTrustedResourceUrl(S)) : w(S) || (S = p.valueOf(S)),
                                                            (A = S),
                                                            (O = e.paramSerializer(e.params)),
                                                        0 < O.length && (A += (-1 === A.indexOf("?") ? "?" : "&") + O),
                                                            (S = A),
                                                        E &&
                                                        (S = (function (t, e) {
                                                            if (/[&?][^=]+=JSON_CALLBACK/.test(t)) throw sr("badjsonp", t);
                                                            if (new RegExp("[&?]" + e + "=").test(t)) throw sr("badjsonp", e, t);
                                                            return (t += (-1 === t.indexOf("?") ? "?" : "&") + e + "=JSON_CALLBACK");
                                                        })(S, e.jsonpCallbackParam)),
                                                            m.pendingRequests.push(e),
                                                            x.then(d, d),
                                                        (!e.cache && !t.cache) || !1 === e.cache || ("GET" !== e.method && "JSONP" !== e.method) || (h = y(e.cache) ? e.cache : y(t.cache) ? t.cache : g),
                                                        h && ($((b = h.get(S))) ? (b && C(b.then) ? b.then(l, l) : ri(b) ? u(b[1], b[0], at(b[2]), b[3]) : u(b, 200, {}, "OK")) : h.put(S, x)),
                                                        v(b) &&
                                                        ((b = Je(e.url) ? s()[e.xsrfCookieName || t.xsrfCookieName] : void 0) && (T[e.xsrfHeaderName || t.xsrfHeaderName] = b),
                                                            a(
                                                                e.method,
                                                                S,
                                                                i,
                                                                function (t, e, i, r) {
                                                                    function o() {
                                                                        u(e, t, i, r);
                                                                    }
                                                                    h && (200 <= t && 300 > t ? h.put(S, [t, e, ee(i), r]) : h.remove(S)), n ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply());
                                                                },
                                                                T,
                                                                e.timeout,
                                                                e.withCredentials,
                                                                e.responseType,
                                                                r(e.eventHandlers),
                                                                r(e.uploadEventHandlers)
                                                            )),
                                                            x
                                                    );
                                                    var A, O;
                                                })(e, r).then(k, k)
                                        );
                                    })),
                                    E
                                )).finally(function () {
                                    r.$$completeOutstandingRequest(h);
                                })
                        );
                    }
                    var g = u("$http");
                    t.paramSerializer = w(t.paramSerializer) ? d.get(t.paramSerializer) : t.paramSerializer;
                    var b = [];
                    return (
                        o(i, function (t) {
                            b.unshift(w(t) ? d.get(t) : d.invoke(t));
                        }),
                            (m.pendingRequests = []),
                            (function (t) {
                                o(arguments, function (t) {
                                    m[t] = function (e, n) {
                                        return m(l({}, n || {}, { method: t, url: e }));
                                    };
                                });
                            })("get", "delete", "head", "jsonp"),
                            (function (t) {
                                o(arguments, function (t) {
                                    m[t] = function (e, n, i) {
                                        return m(l({}, i || {}, { method: t, url: e, data: n }));
                                    };
                                });
                            })("post", "put", "patch"),
                            (m.defaults = t),
                            m
                    );
                },
            ];
        }
        function oe() {
            this.$get = function () {
                return function () {
                    return new t.XMLHttpRequest();
                };
            };
        }
        function ae() {
            this.$get = [
                "$browser",
                "$jsonpCallbacks",
                "$document",
                "$xhrFactory",
                function (t, e, n, i) {
                    return (function (t, e, n, i, r) {
                        return function (a, s, u, l, c, f, d, h, p, m) {
                            function g() {
                                b && b(), w && w.abort();
                            }
                            if (((s = s || t.url()), "jsonp" === zn(a)))
                                var y = i.createCallback(s),
                                    b = (function (t, e, n) {
                                        t = t.replace("JSON_CALLBACK", e);
                                        var o = r.createElement("script"),
                                            a = null;
                                        return (
                                            (o.type = "text/javascript"),
                                                (o.src = t),
                                                (o.async = !0),
                                                (a = function (t) {
                                                    o.removeEventListener("load", a), o.removeEventListener("error", a), r.body.removeChild(o), (o = null);
                                                    var s = -1,
                                                        u = "unknown";
                                                    t && ("load" !== t.type || i.wasCalled(e) || (t = { type: "error" }), (u = t.type), (s = "error" === t.type ? 404 : 200)), n && n(s, u);
                                                }),
                                                o.addEventListener("load", a),
                                                o.addEventListener("error", a),
                                                r.body.appendChild(o),
                                                a
                                        );
                                    })(s, y, function (t, e) {
                                        var r = 200 === t && i.getResponse(y);
                                        $(k) && n.cancel(k), (b = w = null), l(t, r, "", e), i.removeCallback(y);
                                    });
                            else {
                                var w = e(a, s);
                                if (
                                    (w.open(a, s, !0),
                                        o(c, function (t, e) {
                                            $(t) && w.setRequestHeader(e, t);
                                        }),
                                        (w.onload = function () {
                                            var t = w.statusText || "",
                                                e = "response" in w ? w.response : w.responseText,
                                                i = 1223 === w.status ? 204 : w.status;
                                            0 === i && (i = e ? 200 : "file" === Xe(s).protocol ? 404 : 0);
                                            var r = w.getAllResponseHeaders();
                                            $(k) && n.cancel(k), (b = w = null), l(i, e, r, t);
                                        }),
                                        (a = function () {
                                            $(k) && n.cancel(k), (b = w = null), l(-1, null, null, "");
                                        }),
                                        (w.onerror = a),
                                        (w.onabort = a),
                                        (w.ontimeout = a),
                                        o(p, function (t, e) {
                                            w.addEventListener(e, t);
                                        }),
                                        o(m, function (t, e) {
                                            w.upload.addEventListener(e, t);
                                        }),
                                    d && (w.withCredentials = !0),
                                        h)
                                )
                                    try {
                                        w.responseType = h;
                                    } catch (t) {
                                        if ("json" !== h) throw t;
                                    }
                                w.send(v(u) ? null : u);
                            }
                            if (0 < f) var k = n(g, f);
                            else f && C(f.then) && f.then(g);
                        };
                    })(t, i, t.defer, e, n[0]);
                },
            ];
        }
        function se() {
            var t = "{{",
                e = "}}";
            (this.startSymbol = function (e) {
                return e ? ((t = e), this) : t;
            }),
                (this.endSymbol = function (t) {
                    return t ? ((e = t), this) : e;
                }),
                (this.$get = [
                    "$parse",
                    "$exceptionHandler",
                    "$sce",
                    function (n, i, r) {
                        function o(t) {
                            return "\\\\\\" + t;
                        }
                        function a(n) {
                            return n.replace(d, t).replace(h, e);
                        }
                        function s(t, e, n, i) {
                            var r = t.$watch(
                                function (t) {
                                    return r(), i(t);
                                },
                                e,
                                n
                            );
                            return r;
                        }
                        function u(o, u, d, h) {
                            function p(t) {
                                try {
                                    var e = t;
                                    return (t = d ? r.getTrusted(d, e) : r.valueOf(e)), h && !$(t) ? t : ot(t);
                                } catch (t) {
                                    i(ur.interr(o, t));
                                }
                            }
                            var g;
                            if (!o.length || -1 === o.indexOf(t)) return u || (((g = m((u = a(o)))).exp = o), (g.expressions = []), (g.$$watchDelegate = s)), g;
                            h = !!h;
                            var y,
                                b,
                                w = 0,
                                k = [],
                                x = [];
                            g = o.length;
                            for (var T = [], E = []; w < g; ) {
                                if (-1 === (y = o.indexOf(t, w)) || -1 === (b = o.indexOf(e, y + c))) {
                                    w !== g && T.push(a(o.substring(w)));
                                    break;
                                }
                                w !== y && T.push(a(o.substring(w, y))), (w = o.substring(y + c, b)), k.push(w), x.push(n(w, p)), (w = b + f), E.push(T.length), T.push("");
                            }
                            if ((d && 1 < T.length && ur.throwNoconcat(o), !u || k.length)) {
                                var S = function (t) {
                                    for (var e = 0, n = k.length; e < n; e++) {
                                        if (h && v(t[e])) return;
                                        T[E[e]] = t[e];
                                    }
                                    return T.join("");
                                };
                                return l(
                                    function (t) {
                                        var e = 0,
                                            n = k.length,
                                            r = Array(n);
                                        try {
                                            for (; e < n; e++) r[e] = x[e](t);
                                            return S(r);
                                        } catch (t) {
                                            i(ur.interr(o, t));
                                        }
                                    },
                                    {
                                        exp: o,
                                        expressions: k,
                                        $$watchDelegate: function (t, e) {
                                            var n;
                                            return t.$watchGroup(x, function (i, r) {
                                                var o = S(i);
                                                C(e) && e.call(this, o, i !== r ? n : o, t), (n = o);
                                            });
                                        },
                                    }
                                );
                            }
                        }
                        var c = t.length,
                            f = e.length,
                            d = new RegExp(t.replace(/./g, o), "g"),
                            h = new RegExp(e.replace(/./g, o), "g");
                        return (
                            (u.startSymbol = function () {
                                return t;
                            }),
                                (u.endSymbol = function () {
                                    return e;
                                }),
                                u
                        );
                    },
                ]);
        }
        function ue() {
            this.$get = [
                "$rootScope",
                "$window",
                "$q",
                "$$q",
                "$browser",
                function (t, e, n, i, r) {
                    function o(o, s, u, l) {
                        function c() {
                            f ? o.apply(null, d) : o(m);
                        }
                        var f = 4 < arguments.length,
                            d = f ? Gn.call(arguments, 4) : [],
                            h = e.setInterval,
                            p = e.clearInterval,
                            m = 0,
                            g = $(l) && !l,
                            v = (g ? i : n).defer(),
                            y = v.promise;
                        return (
                            (u = $(u) ? u : 0),
                                (y.$$intervalId = h(function () {
                                    g ? r.defer(c) : t.$evalAsync(c), v.notify(m++), 0 < u && m >= u && (v.resolve(m), p(y.$$intervalId), delete a[y.$$intervalId]), g || t.$apply();
                                }, s)),
                                (a[y.$$intervalId] = v),
                                y
                        );
                    }
                    var a = {};
                    return (
                        (o.cancel = function (t) {
                            return !!(t && t.$$intervalId in a) && (a[t.$$intervalId].promise.catch(h), a[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete a[t.$$intervalId], !0);
                        }),
                            o
                    );
                },
            ];
        }
        function le(t) {
            for (var e = (t = t.split("/")).length; e--; ) t[e] = W(t[e]);
            return t.join("/");
        }
        function ce(t, e) {
            var n = Xe(t);
            (e.$$protocol = n.protocol), (e.$$host = n.hostname), (e.$$port = f(n.port) || fr[n.protocol] || null);
        }
        function fe(t, e) {
            if (hr.test(t)) throw dr("badpath", t);
            var n = "/" !== t.charAt(0);
            n && (t = "/" + t);
            var i = Xe(t);
            (e.$$path = decodeURIComponent(n && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname)),
                (e.$$search = B(i.search)),
                (e.$$hash = decodeURIComponent(i.hash)),
            e.$$path && "/" !== e.$$path.charAt(0) && (e.$$path = "/" + e.$$path);
        }
        function de(t, e) {
            return t.slice(0, e.length) === e;
        }
        function he(t, e) {
            if (de(e, t)) return e.substr(t.length);
        }
        function pe(t) {
            var e = t.indexOf("#");
            return -1 === e ? t : t.substr(0, e);
        }
        function me(t) {
            return t.replace(/(#.+)|#$/, "$1");
        }
        function ge(t, e, n) {
            (this.$$html5 = !0),
                (n = n || ""),
                ce(t, this),
                (this.$$parse = function (t) {
                    var n = he(e, t);
                    if (!w(n)) throw dr("ipthprfx", t, e);
                    fe(n, this), this.$$path || (this.$$path = "/"), this.$$compose();
                }),
                (this.$$compose = function () {
                    var t = z(this.$$search),
                        n = this.$$hash ? "#" + W(this.$$hash) : "";
                    (this.$$url = le(this.$$path) + (t ? "?" + t : "") + n), (this.$$absUrl = e + this.$$url.substr(1)), (this.$$urlUpdatedByLocation = !0);
                }),
                (this.$$parseLinkUrl = function (i, r) {
                    return r && "#" === r[0]
                        ? (this.hash(r.slice(1)), !0)
                        : ($((o = he(t, i))) ? ((a = o), (a = n && $((o = he(n, o))) ? e + (he("/", o) || o) : t + a)) : $((o = he(e, i))) ? (a = e + o) : e === i + "/" && (a = e), a && this.$$parse(a), !!a);
                    var o, a;
                });
        }
        function ve(t, e, n) {
            ce(t, this),
                (this.$$parse = function (i) {
                    var r;
                    v((o = he(t, i) || he(e, i))) || "#" !== o.charAt(0) ? (this.$$html5 ? (r = o) : ((r = ""), v(o) && ((t = i), this.replace()))) : v((r = he(n, o))) && (r = o), fe(r, this), (i = this.$$path);
                    var o,
                        a = /^\/[A-Z]:(\/.*)/;
                    de(r, (o = t)) && (r = r.replace(o, "")), a.exec(r) || (i = (r = a.exec(i)) ? r[1] : i), (this.$$path = i), this.$$compose();
                }),
                (this.$$compose = function () {
                    var e = z(this.$$search),
                        i = this.$$hash ? "#" + W(this.$$hash) : "";
                    (this.$$url = le(this.$$path) + (e ? "?" + e : "") + i), (this.$$absUrl = t + (this.$$url ? n + this.$$url : "")), (this.$$urlUpdatedByLocation = !0);
                }),
                (this.$$parseLinkUrl = function (e, n) {
                    return pe(t) === pe(e) && (this.$$parse(e), !0);
                });
        }
        function $e(t, e, n) {
            (this.$$html5 = !0),
                ve.apply(this, arguments),
                (this.$$parseLinkUrl = function (i, r) {
                    return r && "#" === r[0] ? (this.hash(r.slice(1)), !0) : (t === pe(i) ? (o = i) : (a = he(e, i)) ? (o = t + n + a) : e === i + "/" && (o = e), o && this.$$parse(o), !!o);
                    var o, a;
                }),
                (this.$$compose = function () {
                    var e = z(this.$$search),
                        i = this.$$hash ? "#" + W(this.$$hash) : "";
                    (this.$$url = le(this.$$path) + (e ? "?" + e : "") + i), (this.$$absUrl = t + n + this.$$url), (this.$$urlUpdatedByLocation = !0);
                });
        }
        function ye(t) {
            return function () {
                return this[t];
            };
        }
        function be(t, e) {
            return function (n) {
                return v(n) ? this[t] : ((this[t] = e(n)), this.$$compose(), this);
            };
        }
        function we() {
            var t = "!",
                e = { enabled: !1, requireBase: !0, rewriteLinks: !0 };
            (this.hashPrefix = function (e) {
                return $(e) ? ((t = e), this) : t;
            }),
                (this.html5Mode = function (t) {
                    return A(t)
                        ? ((e.enabled = t), this)
                        : y(t)
                            ? (A(t.enabled) && (e.enabled = t.enabled), A(t.requireBase) && (e.requireBase = t.requireBase), (A(t.rewriteLinks) || w(t.rewriteLinks)) && (e.rewriteLinks = t.rewriteLinks), this)
                            : e;
                }),
                (this.$get = [
                    "$rootScope",
                    "$browser",
                    "$sniffer",
                    "$rootElement",
                    "$window",
                    function (n, i, r, o, a) {
                        function s(t, e, n) {
                            var r = l.url(),
                                o = l.$$state;
                            try {
                                i.url(t, e, n), (l.$$state = i.state());
                            } catch (t) {
                                throw (l.url(r), (l.$$state = o), t);
                            }
                        }
                        function u(t, e) {
                            n.$broadcast("$locationChangeSuccess", l.absUrl(), t, l.$$state, e);
                        }
                        var l, c;
                        c = i.baseHref();
                        var f,
                            d = i.url();
                        if (e.enabled) {
                            if (!c && e.requireBase) throw dr("nobase");
                            (f = d.substring(0, d.indexOf("/", d.indexOf("//") + 2)) + (c || "/")), (c = r.history ? ge : $e);
                        } else (f = pe(d)), (c = ve);
                        var h = f.substr(0, pe(f).lastIndexOf("/") + 1);
                        (l = new c(f, h, "#" + t)).$$parseLinkUrl(d, d), (l.$$state = i.state());
                        var p = /^\s*(javascript|mailto):/i;
                        o.on("click", function (t) {
                            if ((s = e.rewriteLinks) && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 !== t.which && 2 !== t.button) {
                                for (var r = Rn(t.target); "a" !== D(r[0]); ) if (r[0] === o[0] || !(r = r.parent())[0]) return;
                                if (!w(s) || !v(r.attr(s))) {
                                    var s = r.prop("href"),
                                        u = r.attr("href") || r.attr("xlink:href");
                                    y(s) && "[object SVGAnimatedString]" === s.toString() && (s = Xe(s.animVal).href),
                                    p.test(s) || !s || r.attr("target") || t.isDefaultPrevented() || !l.$$parseLinkUrl(s, u) || (t.preventDefault(), l.absUrl() !== i.url() && (n.$apply(), (a.angular["ff-684208-preventDefault"] = !0)));
                                }
                            }
                        }),
                        me(l.absUrl()) !== me(d) && i.url(l.absUrl(), !0);
                        var m = !0;
                        return (
                            i.onUrlChange(function (t, e) {
                                de(t, h)
                                    ? (n.$evalAsync(function () {
                                        var i,
                                            r = l.absUrl(),
                                            o = l.$$state;
                                        (t = me(t)),
                                            l.$$parse(t),
                                            (l.$$state = e),
                                            (i = n.$broadcast("$locationChangeStart", t, r, e, o).defaultPrevented),
                                        l.absUrl() === t && (i ? (l.$$parse(r), (l.$$state = o), s(r, !1, o)) : ((m = !1), u(r, o)));
                                    }),
                                    n.$$phase || n.$digest())
                                    : (a.location.href = t);
                            }),
                                n.$watch(function () {
                                    if (m || l.$$urlUpdatedByLocation) {
                                        l.$$urlUpdatedByLocation = !1;
                                        var t = me(i.url()),
                                            e = me(l.absUrl()),
                                            o = i.state(),
                                            a = l.$$replace,
                                            c = t !== e || (l.$$html5 && r.history && o !== l.$$state);
                                        (m || c) &&
                                        ((m = !1),
                                            n.$evalAsync(function () {
                                                var e = l.absUrl(),
                                                    i = n.$broadcast("$locationChangeStart", e, t, l.$$state, o).defaultPrevented;
                                                l.absUrl() === e && (i ? (l.$$parse(t), (l.$$state = o)) : (c && s(e, a, o === l.$$state ? null : l.$$state), u(t, o)));
                                            }));
                                    }
                                    l.$$replace = !1;
                                }),
                                l
                        );
                    },
                ]);
        }
        function ke() {
            var t = !0,
                e = this;
            (this.debugEnabled = function (e) {
                return $(e) ? ((t = e), this) : t;
            }),
                (this.$get = [
                    "$window",
                    function (n) {
                        function i(t) {
                            var e = n.console || {},
                                i = e[t] || e.log || h;
                            t = !1;
                            try {
                                t = !!i.apply;
                            } catch (t) {}
                            return t
                                ? function () {
                                    var t = [];
                                    return (
                                        o(arguments, function (e) {
                                            var n;
                                            t.push(
                                                ((n = e) instanceof Error &&
                                                (n.stack && a
                                                    ? (n = n.message && -1 === n.stack.indexOf(n.message) ? "Error: " + n.message + "\n" + n.stack : n.stack)
                                                    : n.sourceURL && (n = n.message + "\n" + n.sourceURL + ":" + n.line)),
                                                    n)
                                            );
                                        }),
                                            i.apply(e, t)
                                    );
                                }
                                : function (t, e) {
                                    i(t, null == e ? "" : e);
                                };
                        }
                        var r,
                            a = qn || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
                        return {
                            log: i("log"),
                            info: i("info"),
                            warn: i("warn"),
                            error: i("error"),
                            debug:
                                ((r = i("debug")),
                                    function () {
                                        t && r.apply(e, arguments);
                                    }),
                        };
                    },
                ]);
        }
        function xe(t) {
            return t + "";
        }
        function Ce(t, e) {
            return void 0 !== t ? t : e;
        }
        function Te(t, e) {
            return void 0 === t ? e : void 0 === e ? t : t + e;
        }
        function Ee(t, e) {
            var n, i, r;
            switch (t.type) {
                case br.Program:
                    (n = !0),
                        o(t.body, function (t) {
                            Ee(t.expression, e), (n = n && t.expression.constant);
                        }),
                        (t.constant = n);
                    break;
                case br.Literal:
                    (t.constant = !0), (t.toWatch = []);
                    break;
                case br.UnaryExpression:
                    Ee(t.argument, e), (t.constant = t.argument.constant), (t.toWatch = t.argument.toWatch);
                    break;
                case br.BinaryExpression:
                    Ee(t.left, e), Ee(t.right, e), (t.constant = t.left.constant && t.right.constant), (t.toWatch = t.left.toWatch.concat(t.right.toWatch));
                    break;
                case br.LogicalExpression:
                    Ee(t.left, e), Ee(t.right, e), (t.constant = t.left.constant && t.right.constant), (t.toWatch = t.constant ? [] : [t]);
                    break;
                case br.ConditionalExpression:
                    Ee(t.test, e), Ee(t.alternate, e), Ee(t.consequent, e), (t.constant = t.test.constant && t.alternate.constant && t.consequent.constant), (t.toWatch = t.constant ? [] : [t]);
                    break;
                case br.Identifier:
                    (t.constant = !1), (t.toWatch = [t]);
                    break;
                case br.MemberExpression:
                    Ee(t.object, e), t.computed && Ee(t.property, e), (t.constant = t.object.constant && (!t.computed || t.property.constant)), (t.toWatch = [t]);
                    break;
                case br.CallExpression:
                    (n = r = !!t.filter && !e(t.callee.name).$stateful),
                        (i = []),
                        o(t.arguments, function (t) {
                            Ee(t, e), (n = n && t.constant), t.constant || i.push.apply(i, t.toWatch);
                        }),
                        (t.constant = n),
                        (t.toWatch = r ? i : [t]);
                    break;
                case br.AssignmentExpression:
                    Ee(t.left, e), Ee(t.right, e), (t.constant = t.left.constant && t.right.constant), (t.toWatch = [t]);
                    break;
                case br.ArrayExpression:
                    (n = !0),
                        (i = []),
                        o(t.elements, function (t) {
                            Ee(t, e), (n = n && t.constant), t.constant || i.push.apply(i, t.toWatch);
                        }),
                        (t.constant = n),
                        (t.toWatch = i);
                    break;
                case br.ObjectExpression:
                    (n = !0),
                        (i = []),
                        o(t.properties, function (t) {
                            Ee(t.value, e), (n = n && t.value.constant && !t.computed), t.value.constant || i.push.apply(i, t.value.toWatch), t.computed && (Ee(t.key, e), t.key.constant || i.push.apply(i, t.key.toWatch));
                        }),
                        (t.constant = n),
                        (t.toWatch = i);
                    break;
                case br.ThisExpression:
                    (t.constant = !1), (t.toWatch = []);
                    break;
                case br.LocalsExpression:
                    (t.constant = !1), (t.toWatch = []);
            }
        }
        function Se(t) {
            if (1 === t.length) {
                var e = (t = t[0].expression).toWatch;
                return 1 !== e.length ? e : e[0] !== t ? e : void 0;
            }
        }
        function Ae(t) {
            return t.type === br.Identifier || t.type === br.MemberExpression;
        }
        function Oe(t) {
            if (1 === t.body.length && Ae(t.body[0].expression)) return { type: br.AssignmentExpression, left: t.body[0].expression, right: { type: br.NGValueParameter }, operator: "=" };
        }
        function De(t) {
            this.$filter = t;
        }
        function Me(t) {
            this.$filter = t;
        }
        function je(t, e, n) {
            (this.ast = new br(t, n)), (this.astCompiler = n.csp ? new Me(e) : new De(e));
        }
        function Ne(t) {
            return C(t.valueOf) ? t.valueOf() : gr.call(t);
        }
        function Ie() {
            var t,
                e,
                n = rt(),
                i = { true: !0, false: !1, null: null, undefined: void 0 };
            (this.addLiteral = function (t, e) {
                i[t] = e;
            }),
                (this.setIdentifierFns = function (n, i) {
                    return (t = n), (e = i), this;
                }),
                (this.$get = [
                    "$filter",
                    function (r) {
                        function a(t, e, n) {
                            return null == t || null == e ? t === e : !("object" == typeof t && ((t = Ne(t)), "object" == typeof t && !n)) && (t === e || (t != t && e != e));
                        }
                        function s(t, e, n, i, r) {
                            var o;
                            if (1 === (u = i.inputs).length) {
                                var s = a,
                                    u = u[0];
                                return t.$watch(
                                    function (t) {
                                        var e = u(t);
                                        return a(e, s, i.literal) || ((o = i(t, void 0, void 0, [e])), (s = e && Ne(e))), o;
                                    },
                                    e,
                                    n,
                                    r
                                );
                            }
                            for (var l = [], c = [], f = 0, d = u.length; f < d; f++) (l[f] = a), (c[f] = null);
                            return t.$watch(
                                function (t) {
                                    for (var e = !1, n = 0, r = u.length; n < r; n++) {
                                        var s = u[n](t);
                                        (e || (e = !a(s, l[n], i.literal))) && ((c[n] = s), (l[n] = s && Ne(s)));
                                    }
                                    return e && (o = i(t, void 0, void 0, c)), o;
                                },
                                e,
                                n,
                                r
                            );
                        }
                        function u(t, e, n, i, r) {
                            function o(t, n, i) {
                                (u = t),
                                C(e) && e(t, n, i),
                                c(t) &&
                                i.$$postDigest(function () {
                                    c(u) && a();
                                });
                            }
                            var a,
                                u,
                                c = i.literal ? l : $;
                            return (a = i.inputs
                                ? s(t, o, n, i, r)
                                : t.$watch(
                                    function (t) {
                                        return i(t);
                                    },
                                    o,
                                    n
                                ));
                        }
                        function l(t) {
                            var e = !0;
                            return (
                                o(t, function (t) {
                                    $(t) || (e = !1);
                                }),
                                    e
                            );
                        }
                        function c(t, e, n, i) {
                            var r = t.$watch(
                                function (t) {
                                    return r(), i(t);
                                },
                                e,
                                n
                            );
                            return r;
                        }
                        function f(t, e) {
                            if (!e) return t;
                            var n = t.$$watchDelegate,
                                i = !1,
                                r = t.literal ? l : $,
                                o = t.oneTime
                                    ? function (n, o, a, s) {
                                        return (a = i && s ? s[0] : t(n, o, a, s)), (n = e(a, n, o)), r(a) ? n : a;
                                    }
                                    : function (n, r, o, a) {
                                        return (o = i && a ? a[0] : t(n, r, o, a)), e(o, n, r);
                                    };
                            return (
                                (o.literal = t.literal),
                                    (o.oneTime = t.oneTime),
                                    (i = !t.inputs),
                                    n && n !== s ? ((o.$$watchDelegate = n), (o.inputs = t.inputs)) : e.$stateful || ((o.$$watchDelegate = s), (o.inputs = t.inputs ? t.inputs : [t])),
                                    o
                            );
                        }
                        var d = { csp: ui().noUnsafeEval, literals: j(i), isIdentifierStart: C(t) && t, isIdentifierContinue: C(e) && e };
                        return function (t, e) {
                            var i, o, a;
                            switch (typeof t) {
                                case "string":
                                    return (
                                        (a = t = t.trim()),
                                        (i = n[a]) ||
                                        (":" === t.charAt(0) && ":" === t.charAt(1) && ((o = !0), (t = t.substring(2))),
                                            (i = new je((i = new yr(d)), r, d).parse(t)).constant ? (i.$$watchDelegate = c) : o ? ((i.oneTime = !0), (i.$$watchDelegate = u)) : i.inputs && (i.$$watchDelegate = s),
                                            (n[a] = i)),
                                            f(i, e)
                                    );
                                case "function":
                                    return f(t, e);
                                default:
                                    return f(h, e);
                            }
                        };
                    },
                ]);
        }
        function Le() {
            var t = !0;
            (this.$get = [
                "$rootScope",
                "$exceptionHandler",
                function (e, n) {
                    return Ue(
                        function (t) {
                            e.$evalAsync(t);
                        },
                        n,
                        t
                    );
                },
            ]),
                (this.errorOnUnhandledRejections = function (e) {
                    return $(e) ? ((t = e), this) : t;
                });
        }
        function Pe() {
            var t = !0;
            (this.$get = [
                "$browser",
                "$exceptionHandler",
                function (e, n) {
                    return Ue(
                        function (t) {
                            e.defer(t);
                        },
                        n,
                        t
                    );
                },
            ]),
                (this.errorOnUnhandledRejections = function (e) {
                    return $(e) ? ((t = e), this) : t;
                });
        }
        function Ue(t, n, i) {
            function r() {
                return new (function () {
                    var t = (this.promise = new a());
                    (this.resolve = function (e) {
                        c(t, e);
                    }),
                        (this.reject = function (e) {
                            f(t, e);
                        }),
                        (this.notify = function (e) {
                            h(t, e);
                        });
                })();
            }
            function a() {
                this.$$state = { status: 0 };
            }
            function s() {
                for (; !w && k.length; ) {
                    var t = k.shift();
                    if (!t.pur) {
                        t.pur = !0;
                        var e = "Possibly unhandled rejection: " + ("function" == typeof (e = t.value) ? e.toString().replace(/ \{[\s\S]*$/, "") : v(e) ? "undefined" : "string" != typeof e ? st(e, void 0) : e);
                        t.value instanceof Error ? n(t.value, e) : n(e);
                    }
                }
            }
            function u(e) {
                !i || e.pending || 2 !== e.status || e.pur || (0 === w && 0 === k.length && t(s), k.push(e)),
                !e.processScheduled &&
                e.pending &&
                ((e.processScheduled = !0),
                    ++w,
                    t(function () {
                        var n, r, o;
                        (o = e.pending), (e.processScheduled = !1), (e.pending = void 0);
                        try {
                            for (var a = 0, u = o.length; a < u; ++a) {
                                (e.pur = !0), (r = o[a][0]), (n = o[a][e.status]);
                                try {
                                    C(n) ? c(r, n(e.value)) : 1 === e.status ? c(r, e.value) : f(r, e.value);
                                } catch (t) {
                                    f(r, t);
                                }
                            }
                        } finally {
                            --w, i && 0 === w && t(s);
                        }
                    }));
            }
            function c(t, e) {
                t.$$state.status ||
                (e === t
                    ? d(t, b("qcycle", e))
                    : (function t(e, n) {
                        function i(n) {
                            a || ((a = !0), t(e, n));
                        }
                        function r(t) {
                            a || ((a = !0), d(e, t));
                        }
                        var o,
                            a = !1;
                        try {
                            (y(n) || C(n)) && (o = n.then),
                                C(o)
                                    ? ((e.$$state.status = -1),
                                        o.call(
                                            n,
                                            function i(t) {
                                                a ||
                                                ((a = !0),
                                                    (function t(e, n) {
                                                        function i(n) {
                                                            a || ((a = !0), t(e, n));
                                                        }
                                                        function r(t) {
                                                            a || ((a = !0), d(e, t));
                                                        }
                                                        var o,
                                                            a = !1;
                                                        try {
                                                            (y(n) || C(n)) && (o = n.then),
                                                                C(o)
                                                                    ? ((e.$$state.status = -1),
                                                                        o.call(n, i, r, function (t) {
                                                                            h(e, t);
                                                                        }))
                                                                    : ((e.$$state.value = n), (e.$$state.status = 1), u(e.$$state));
                                                        } catch (t) {
                                                            r(t);
                                                        }
                                                    })(e, t));
                                            },
                                            r,
                                            function (t) {
                                                h(e, t);
                                            }
                                        ))
                                    : ((e.$$state.value = n), (e.$$state.status = 1), u(e.$$state));
                        } catch (t) {
                            r(t);
                        }
                    })(t, e));
            }
            function f(t, e) {
                t.$$state.status || d(t, e);
            }
            function d(t, e) {
                (t.$$state.value = e), (t.$$state.status = 2), u(t.$$state);
            }
            function h(e, i) {
                var r = e.$$state.pending;
                0 >= e.$$state.status &&
                r &&
                r.length &&
                t(function () {
                    for (var t, e, o = 0, a = r.length; o < a; o++) {
                        (e = r[o][0]), (t = r[o][3]);
                        try {
                            h(e, C(t) ? t(i) : i);
                        } catch (t) {
                            n(t);
                        }
                    }
                });
            }
            function p(t) {
                var e = new a();
                return f(e, t), e;
            }
            function m(t, e, n) {
                var i = null;
                try {
                    C(n) && (i = n());
                } catch (t) {
                    return p(t);
                }
                return i && C(i.then)
                    ? i.then(function () {
                        return e(t);
                    }, p)
                    : e(t);
            }
            function g(t, e, n, i) {
                var r = new a();
                return c(r, t), r.then(e, n, i);
            }
            function $(t) {
                if (!C(t)) throw b("norslvr", t);
                var e = new a();
                return (
                    t(
                        function (t) {
                            c(e, t);
                        },
                        function (t) {
                            f(e, t);
                        }
                    ),
                        e
                );
            }
            var b = e("$q", TypeError),
                w = 0,
                k = [];
            l(a.prototype, {
                then: function (t, e, n) {
                    if (v(t) && v(e) && v(n)) return this;
                    var i = new a();
                    return (this.$$state.pending = this.$$state.pending || []), this.$$state.pending.push([i, t, e, n]), 0 < this.$$state.status && u(this.$$state), i;
                },
                catch: function (t) {
                    return this.then(null, t);
                },
                finally: function (t, e) {
                    return this.then(
                        function (e) {
                            return m(e, x, t);
                        },
                        function (e) {
                            return m(e, p, t);
                        },
                        e
                    );
                },
            });
            var x = g;
            return (
                ($.prototype = a.prototype),
                    ($.defer = r),
                    ($.reject = p),
                    ($.when = g),
                    ($.resolve = x),
                    ($.all = function (t) {
                        var e = new a(),
                            n = 0,
                            i = ri(t) ? [] : {};
                        return (
                            o(t, function (t, r) {
                                n++,
                                    g(t).then(
                                        function (t) {
                                            (i[r] = t), --n || c(e, i);
                                        },
                                        function (t) {
                                            f(e, t);
                                        }
                                    );
                            }),
                            0 === n && c(e, i),
                                e
                        );
                    }),
                    ($.race = function (t) {
                        var e = r();
                        return (
                            o(t, function (t) {
                                g(t).then(e.resolve, e.reject);
                            }),
                                e.promise
                        );
                    }),
                    $
            );
        }
        function qe() {
            this.$get = [
                "$window",
                "$timeout",
                function (t, e) {
                    var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
                        i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                        r = !!n,
                        o = r
                            ? function (t) {
                                var e = n(t);
                                return function () {
                                    i(e);
                                };
                            }
                            : function (t) {
                                var n = e(t, 16.66, !1);
                                return function () {
                                    e.cancel(n);
                                };
                            };
                    return (o.supported = r), o;
                },
            ];
        }
        function Re() {
            var t = 10,
                n = e("$rootScope"),
                i = null,
                a = null;
            (this.digestTtl = function (e) {
                return arguments.length && (t = e), t;
            }),
                (this.$get = [
                    "$exceptionHandler",
                    "$parse",
                    "$browser",
                    function (e, s, u) {
                        function l(t) {
                            t.currentScope.$$destroyed = !0;
                        }
                        function c() {
                            (this.$id = ++ti),
                                (this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null),
                                (this.$root = this),
                                (this.$$destroyed = !1),
                                (this.$$listeners = {}),
                                (this.$$listenerCount = {}),
                                (this.$$watchersCount = 0),
                                (this.$$isolateBindings = null);
                        }
                        function f(t) {
                            if ($.$$phase) throw n("inprog", $.$$phase);
                            $.$$phase = t;
                        }
                        function d(t, e) {
                            do {
                                t.$$watchersCount += e;
                            } while ((t = t.$parent));
                        }
                        function p(t, e, n) {
                            do {
                                (t.$$listenerCount[n] -= e), 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n];
                            } while ((t = t.$parent));
                        }
                        function m() {}
                        function g() {
                            for (; k.length; )
                                try {
                                    k.shift()();
                                } catch (t) {
                                    e(t);
                                }
                            a = null;
                        }
                        c.prototype = {
                            constructor: c,
                            $new: function (t, e) {
                                var n;
                                return (
                                    (e = e || this),
                                        t
                                            ? ((n = new c()).$root = this.$root)
                                            : (this.$$ChildScope ||
                                            (this.$$ChildScope = (function (t) {
                                                function e() {
                                                    (this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null),
                                                        (this.$$listeners = {}),
                                                        (this.$$listenerCount = {}),
                                                        (this.$$watchersCount = 0),
                                                        (this.$id = ++ti),
                                                        (this.$$ChildScope = null);
                                                }
                                                return (e.prototype = t), e;
                                            })(this)),
                                                (n = new this.$$ChildScope())),
                                        (n.$parent = e),
                                        (n.$$prevSibling = e.$$childTail),
                                        e.$$childHead ? ((e.$$childTail.$$nextSibling = n), (e.$$childTail = n)) : (e.$$childHead = e.$$childTail = n),
                                    (t || e !== this) && n.$on("$destroy", l),
                                        n
                                );
                            },
                            $watch: function (t, e, n, r) {
                                var o = s(t);
                                if (o.$$watchDelegate) return o.$$watchDelegate(this, e, n, o, t);
                                var a = this,
                                    u = a.$$watchers,
                                    l = { fn: e, last: m, get: o, exp: r || t, eq: !!n };
                                return (
                                    (i = null),
                                    C(e) || (l.fn = h),
                                    u || ((u = a.$$watchers = []).$$digestWatchIndex = -1),
                                        u.unshift(l),
                                        u.$$digestWatchIndex++,
                                        d(this, 1),
                                        function () {
                                            var t = M(u, l);
                                            0 <= t && (d(a, -1), t < u.$$digestWatchIndex && u.$$digestWatchIndex--), (i = null);
                                        }
                                );
                            },
                            $watchGroup: function (t, e) {
                                function n() {
                                    (u = !1), l ? ((l = !1), e(r, r, s)) : e(r, i, s);
                                }
                                var i = Array(t.length),
                                    r = Array(t.length),
                                    a = [],
                                    s = this,
                                    u = !1,
                                    l = !0;
                                if (!t.length) {
                                    var c = !0;
                                    return (
                                        s.$evalAsync(function () {
                                            c && e(r, r, s);
                                        }),
                                            function () {
                                                c = !1;
                                            }
                                    );
                                }
                                return 1 === t.length
                                    ? this.$watch(t[0], function (t, n, o) {
                                        (r[0] = t), (i[0] = n), e(r, t === n ? r : i, o);
                                    })
                                    : (o(t, function (t, e) {
                                        var o = s.$watch(t, function (t, o) {
                                            (r[e] = t), (i[e] = o), u || ((u = !0), s.$evalAsync(n));
                                        });
                                        a.push(o);
                                    }),
                                        function () {
                                            for (; a.length; ) a.shift()();
                                        });
                            },
                            $watchCollection: function (t, e) {
                                function n(t) {
                                    var e, n, a;
                                    if (!v((i = t))) {
                                        if (y(i))
                                            if (r(i))
                                                for (o !== d && ((m = (o = d).length = 0), c++), t = i.length, m !== t && (c++, (o.length = m = t)), e = 0; e < t; e++)
                                                    (a = o[e]), (n = i[e]), (a != a && n != n) || a === n || (c++, (o[e] = n));
                                            else {
                                                for (e in (o !== h && ((o = h = {}), (m = 0), c++), (t = 0), i))
                                                    Fn.call(i, e) && (t++, (n = i[e]), (a = o[e]), e in o ? (a != a && n != n) || a === n || (c++, (o[e] = n)) : (m++, (o[e] = n), c++));
                                                if (m > t) for (e in (c++, o)) Fn.call(i, e) || (m--, delete o[e]);
                                            }
                                        else o !== i && ((o = i), c++);
                                        return c;
                                    }
                                }
                                n.$stateful = !0;
                                var i,
                                    o,
                                    a,
                                    u = this,
                                    l = 1 < e.length,
                                    c = 0,
                                    f = s(t, n),
                                    d = [],
                                    h = {},
                                    p = !0,
                                    m = 0;
                                return this.$watch(f, function () {
                                    if ((p ? ((p = !1), e(i, i, u)) : e(i, a, u), l))
                                        if (y(i))
                                            if (r(i)) {
                                                a = Array(i.length);
                                                for (var t = 0; t < i.length; t++) a[t] = i[t];
                                            } else for (t in ((a = {}), i)) Fn.call(i, t) && (a[t] = i[t]);
                                        else a = i;
                                });
                            },
                            $digest: function () {
                                var r,
                                    o,
                                    s,
                                    l,
                                    c,
                                    d,
                                    h,
                                    p,
                                    v = t,
                                    y = [];
                                f("$digest"), u.$$checkUrlChange(), this === $ && null !== a && (u.defer.cancel(a), g()), (i = null);
                                do {
                                    for (c = !1, d = this, l = 0; l < b.length; l++) {
                                        try {
                                            (0, (p = b[l]).fn)(p.scope, p.locals);
                                        } catch (t) {
                                            e(t);
                                        }
                                        i = null;
                                    }
                                    b.length = 0;
                                    t: do {
                                        if ((l = d.$$watchers))
                                            for (l.$$digestWatchIndex = l.length; l.$$digestWatchIndex--; )
                                                try {
                                                    if ((r = l[l.$$digestWatchIndex]))
                                                        if ((o = (0, r.get)(d)) === (s = r.last) || (r.eq ? I(o, s) : ei(o) && ei(s))) {
                                                            if (r === i) {
                                                                c = !1;
                                                                break t;
                                                            }
                                                        } else
                                                            (c = !0),
                                                                (i = r),
                                                                (r.last = r.eq ? j(o, null) : o),
                                                                (0, r.fn)(o, s === m ? o : s, d),
                                                            5 > v && (y[(h = 4 - v)] || (y[h] = []), y[h].push({ msg: C(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, newVal: o, oldVal: s }));
                                                } catch (t) {
                                                    e(t);
                                                }
                                        if (!(l = (d.$$watchersCount && d.$$childHead) || (d !== this && d.$$nextSibling))) for (; d !== this && !(l = d.$$nextSibling); ) d = d.$parent;
                                    } while ((d = l));
                                    if ((c || b.length) && !v--) throw (($.$$phase = null), n("infdig", t, y));
                                } while (c || b.length);
                                for ($.$$phase = null; x < w.length; )
                                    try {
                                        w[x++]();
                                    } catch (t) {
                                        e(t);
                                    }
                                (w.length = x = 0), u.$$checkUrlChange();
                            },
                            $destroy: function () {
                                if (!this.$$destroyed) {
                                    var t = this.$parent;
                                    for (var e in (this.$broadcast("$destroy"), (this.$$destroyed = !0), this === $ && u.$$applicationDestroyed(), d(this, -this.$$watchersCount), this.$$listenerCount)) p(this, this.$$listenerCount[e], e);
                                    t && t.$$childHead === this && (t.$$childHead = this.$$nextSibling),
                                    t && t.$$childTail === this && (t.$$childTail = this.$$prevSibling),
                                    this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                                    this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                                        (this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = h),
                                        (this.$on = this.$watch = this.$watchGroup = function () {
                                            return h;
                                        }),
                                        (this.$$listeners = {}),
                                        (this.$$nextSibling = null),
                                        (function t(e) {
                                            9 === qn && (e.$$childHead && t(e.$$childHead), e.$$nextSibling && t(e.$$nextSibling)),
                                                (e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null);
                                        })(this);
                                }
                            },
                            $eval: function (t, e) {
                                return s(t)(this, e);
                            },
                            $evalAsync: function (t, e) {
                                $.$$phase ||
                                b.length ||
                                u.defer(function () {
                                    b.length && $.$digest();
                                }),
                                    b.push({ scope: this, fn: s(t), locals: e });
                            },
                            $$postDigest: function (t) {
                                w.push(t);
                            },
                            $apply: function (t) {
                                try {
                                    f("$apply");
                                    try {
                                        return this.$eval(t);
                                    } finally {
                                        $.$$phase = null;
                                    }
                                } catch (t) {
                                    e(t);
                                } finally {
                                    try {
                                        $.$digest();
                                    } catch (t) {
                                        throw (e(t), t);
                                    }
                                }
                            },
                            $applyAsync: function (t) {
                                var e = this;
                                t &&
                                k.push(function () {
                                    e.$eval(t);
                                }),
                                    (t = s(t)),
                                null === a &&
                                (a = u.defer(function () {
                                    $.$apply(g);
                                }));
                            },
                            $on: function (t, e) {
                                var n = this.$$listeners[t];
                                n || (this.$$listeners[t] = n = []), n.push(e);
                                var i = this;
                                do {
                                    i.$$listenerCount[t] || (i.$$listenerCount[t] = 0), i.$$listenerCount[t]++;
                                } while ((i = i.$parent));
                                var r = this;
                                return function () {
                                    var i = n.indexOf(e);
                                    -1 !== i && ((n[i] = null), p(r, 1, t));
                                };
                            },
                            $emit: function (t, n) {
                                var i,
                                    r,
                                    o,
                                    a = [],
                                    s = this,
                                    u = !1,
                                    l = {
                                        name: t,
                                        targetScope: s,
                                        stopPropagation: function () {
                                            u = !0;
                                        },
                                        preventDefault: function () {
                                            l.defaultPrevented = !0;
                                        },
                                        defaultPrevented: !1,
                                    },
                                    c = L([l], arguments, 1);
                                do {
                                    for (i = s.$$listeners[t] || a, l.currentScope = s, r = 0, o = i.length; r < o; r++)
                                        if (i[r])
                                            try {
                                                i[r].apply(null, c);
                                            } catch (t) {
                                                e(t);
                                            }
                                        else i.splice(r, 1), r--, o--;
                                    if (u) return (l.currentScope = null), l;
                                    s = s.$parent;
                                } while (s);
                                return (l.currentScope = null), l;
                            },
                            $broadcast: function (t, n) {
                                var i = this,
                                    r = this,
                                    o = {
                                        name: t,
                                        targetScope: this,
                                        preventDefault: function () {
                                            o.defaultPrevented = !0;
                                        },
                                        defaultPrevented: !1,
                                    };
                                if (!this.$$listenerCount[t]) return o;
                                for (var a, s, u = L([o], arguments, 1); (i = r); ) {
                                    for (o.currentScope = i, a = 0, s = (r = i.$$listeners[t] || []).length; a < s; a++)
                                        if (r[a])
                                            try {
                                                r[a].apply(null, u);
                                            } catch (t) {
                                                e(t);
                                            }
                                        else r.splice(a, 1), a--, s--;
                                    if (!(r = (i.$$listenerCount[t] && i.$$childHead) || (i !== this && i.$$nextSibling))) for (; i !== this && !(r = i.$$nextSibling); ) i = i.$parent;
                                }
                                return (o.currentScope = null), o;
                            },
                        };
                        var $ = new c(),
                            b = ($.$$asyncQueue = []),
                            w = ($.$$postDigestQueue = []),
                            k = ($.$$applyAsyncQueue = []),
                            x = 0;
                        return $;
                    },
                ]);
        }
        function Ve() {
            var t = /^\s*(https?|ftp|mailto|tel|file):/,
                e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            (this.aHrefSanitizationWhitelist = function (e) {
                return $(e) ? ((t = e), this) : t;
            }),
                (this.imgSrcSanitizationWhitelist = function (t) {
                    return $(t) ? ((e = t), this) : e;
                }),
                (this.$get = function () {
                    return function (n, i) {
                        var r,
                            o = i ? e : t;
                        return "" === (r = Xe(n).href) || r.match(o) ? n : "unsafe:" + r;
                    };
                });
        }
        function He(t) {
            var e = [];
            return (
                $(t) &&
                o(t, function (t) {
                    e.push(
                        (function (t) {
                            if ("self" === t) return t;
                            if (w(t)) {
                                if (-1 < t.indexOf("***")) throw wr("iwcard", t);
                                return (
                                    (t = si(t)
                                        .replace(/\\\*\\\*/g, ".*")
                                        .replace(/\\\*/g, "[^:/.?&;]*")),
                                        new RegExp("^" + t + "$")
                                );
                            }
                            if (T(t)) return new RegExp("^" + t.source + "$");
                            throw wr("imatcher");
                        })(t)
                    );
                }),
                    e
            );
        }
        function _e() {
            this.SCE_CONTEXTS = kr;
            var t = ["self"],
                e = [];
            (this.resourceUrlWhitelist = function (e) {
                return arguments.length && (t = He(e)), t;
            }),
                (this.resourceUrlBlacklist = function (t) {
                    return arguments.length && (e = He(t)), e;
                }),
                (this.$get = [
                    "$injector",
                    function (n) {
                        function i(t, e) {
                            return "self" === t ? Je(e) : !!t.exec(e.href);
                        }
                        function r(t) {
                            var e = function (t) {
                                this.$$unwrapTrustedValue = function () {
                                    return t;
                                };
                            };
                            return (
                                t && (e.prototype = new t()),
                                    (e.prototype.valueOf = function () {
                                        return this.$$unwrapTrustedValue();
                                    }),
                                    (e.prototype.toString = function () {
                                        return this.$$unwrapTrustedValue().toString();
                                    }),
                                    e
                            );
                        }
                        var o = function (t) {
                            throw wr("unsafe");
                        };
                        n.has("$sanitize") && (o = n.get("$sanitize"));
                        var a = r(),
                            s = {};
                        return (
                            (s[kr.HTML] = r(a)),
                                (s[kr.CSS] = r(a)),
                                (s[kr.URL] = r(a)),
                                (s[kr.JS] = r(a)),
                                (s[kr.RESOURCE_URL] = r(s[kr.URL])),
                                {
                                    trustAs: function (t, e) {
                                        var n = s.hasOwnProperty(t) ? s[t] : null;
                                        if (!n) throw wr("icontext", t, e);
                                        if (null === e || v(e) || "" === e) return e;
                                        if ("string" != typeof e) throw wr("itype", t);
                                        return new n(e);
                                    },
                                    getTrusted: function (n, r) {
                                        if (null === r || v(r) || "" === r) return r;
                                        if ((l = s.hasOwnProperty(n) ? s[n] : null) && r instanceof l) return r.$$unwrapTrustedValue();
                                        if (n === kr.RESOURCE_URL) {
                                            var a,
                                                u,
                                                l = Xe(r.toString()),
                                                c = !1;
                                            for (a = 0, u = t.length; a < u; a++)
                                                if (i(t[a], l)) {
                                                    c = !0;
                                                    break;
                                                }
                                            if (c)
                                                for (a = 0, u = e.length; a < u; a++)
                                                    if (i(e[a], l)) {
                                                        c = !1;
                                                        break;
                                                    }
                                            if (c) return r;
                                            throw wr("insecurl", r.toString());
                                        }
                                        if (n === kr.HTML) return o(r);
                                        throw wr("unsafe");
                                    },
                                    valueOf: function (t) {
                                        return t instanceof a ? t.$$unwrapTrustedValue() : t;
                                    },
                                }
                        );
                    },
                ]);
        }
        function Fe() {
            var t = !0;
            (this.enabled = function (e) {
                return arguments.length && (t = !!e), t;
            }),
                (this.$get = [
                    "$parse",
                    "$sceDelegate",
                    function (e, n) {
                        if (t && 8 > qn) throw wr("iequirks");
                        var i = at(kr);
                        (i.isEnabled = function () {
                            return t;
                        }),
                            (i.trustAs = n.trustAs),
                            (i.getTrusted = n.getTrusted),
                            (i.valueOf = n.valueOf),
                        t ||
                        ((i.trustAs = i.getTrusted = function (t, e) {
                            return e;
                        }),
                            (i.valueOf = p)),
                            (i.parseAs = function (t, n) {
                                var r = e(n);
                                return r.literal && r.constant
                                    ? r
                                    : e(n, function (e) {
                                        return i.getTrusted(t, e);
                                    });
                            });
                        var r = i.parseAs,
                            a = i.getTrusted,
                            s = i.trustAs;
                        return (
                            o(kr, function (t, e) {
                                var n = zn(e);
                                (i[("parse_as_" + n).replace(xr, ut)] = function (e) {
                                    return r(t, e);
                                }),
                                    (i[("get_trusted_" + n).replace(xr, ut)] = function (e) {
                                        return a(t, e);
                                    }),
                                    (i[("trust_as_" + n).replace(xr, ut)] = function (e) {
                                        return s(t, e);
                                    });
                            }),
                                i
                        );
                    },
                ]);
        }
        function Be() {
            this.$get = [
                "$window",
                "$document",
                function (t, e) {
                    var n = {},
                        i = !((!t.nw || !t.nw.process) && t.chrome && ((t.chrome.app && t.chrome.app.runtime) || (!t.chrome.app && t.chrome.runtime && t.chrome.runtime.id))) && t.history && t.history.pushState,
                        r = f((/android (\d+)/.exec(zn((t.navigator || {}).userAgent)) || [])[1]),
                        o = /Boxee/i.test((t.navigator || {}).userAgent),
                        a = e[0] || {},
                        s = a.body && a.body.style,
                        u = !1,
                        l = !1;
                    return (
                        s && ((u = !!("transition" in s || "webkitTransition" in s)), (l = !!("animation" in s || "webkitAnimation" in s))),
                            {
                                history: !(!i || 4 > r || o),
                                hasEvent: function (t) {
                                    if ("input" === t && qn) return !1;
                                    if (v(n[t])) {
                                        var e = a.createElement("div");
                                        n[t] = "on" + t in e;
                                    }
                                    return n[t];
                                },
                                csp: ui(),
                                transitions: u,
                                animations: l,
                                android: r,
                            }
                    );
                },
            ];
        }
        function ze() {
            var t;
            (this.httpOptions = function (e) {
                return e ? ((t = e), this) : t;
            }),
                (this.$get = [
                    "$exceptionHandler",
                    "$templateCache",
                    "$http",
                    "$q",
                    "$sce",
                    function (e, n, i, r, o) {
                        function a(s, u) {
                            a.totalPendingRequests++, (w(s) && !v(n.get(s))) || (s = o.getTrustedResourceUrl(s));
                            var c = i.defaults && i.defaults.transformResponse;
                            return (
                                ri(c)
                                    ? (c = c.filter(function (t) {
                                        return t !== te;
                                    }))
                                    : c === te && (c = null),
                                    i
                                        .get(s, l({ cache: n, transformResponse: c }, t))
                                        .finally(function () {
                                            a.totalPendingRequests--;
                                        })
                                        .then(
                                            function (t) {
                                                return n.put(s, t.data), t.data;
                                            },
                                            function (t) {
                                                return u || ((t = Cr("tpload", s, t.status, t.statusText)), e(t)), r.reject(t);
                                            }
                                        )
                            );
                        }
                        return (a.totalPendingRequests = 0), a;
                    },
                ]);
        }
        function We() {
            this.$get = [
                "$rootScope",
                "$browser",
                "$location",
                function (t, e, n) {
                    return {
                        findBindings: function (t, e, n) {
                            t = t.getElementsByClassName("ng-binding");
                            var i = [];
                            return (
                                o(t, function (t) {
                                    var r = Zn.element(t).data("$binding");
                                    r &&
                                    o(r, function (r) {
                                        n ? new RegExp("(^|\\s)" + si(e) + "(\\s|\\||$)").test(r) && i.push(t) : -1 !== r.indexOf(e) && i.push(t);
                                    });
                                }),
                                    i
                            );
                        },
                        findModels: function (t, e, n) {
                            for (var i = ["ng-", "data-ng-", "ng\\:"], r = 0; r < i.length; ++r) {
                                var o = t.querySelectorAll("[" + i[r] + "model" + (n ? "=" : "*=") + '"' + e + '"]');
                                if (o.length) return o;
                            }
                        },
                        getLocation: function () {
                            return n.url();
                        },
                        setLocation: function (e) {
                            e !== n.url() && (n.url(e), t.$digest());
                        },
                        whenStable: function (t) {
                            e.notifyWhenNoOutstandingRequests(t);
                        },
                    };
                },
            ];
        }
        function Ge() {
            this.$get = [
                "$rootScope",
                "$browser",
                "$q",
                "$$q",
                "$exceptionHandler",
                function (t, e, n, i, r) {
                    function o(o, s, u) {
                        C(o) || ((u = s), (s = o), (o = h));
                        var l,
                            c = Gn.call(arguments, 3),
                            f = $(u) && !u,
                            d = (f ? i : n).defer(),
                            p = d.promise;
                        return (
                            (l = e.defer(function () {
                                try {
                                    d.resolve(o.apply(null, c));
                                } catch (t) {
                                    d.reject(t), r(t);
                                } finally {
                                    delete a[p.$$timeoutId];
                                }
                                f || t.$apply();
                            }, s)),
                                (p.$$timeoutId = l),
                                (a[l] = d),
                                p
                        );
                    }
                    var a = {};
                    return (
                        (o.cancel = function (t) {
                            return !!(t && t.$$timeoutId in a) && (a[t.$$timeoutId].promise.catch(h), a[t.$$timeoutId].reject("canceled"), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId));
                        }),
                            o
                    );
                },
            ];
        }
        function Xe(t) {
            return (
                qn && (Tr.setAttribute("href", t), (t = Tr.href)),
                    Tr.setAttribute("href", t),
                    {
                        href: Tr.href,
                        protocol: Tr.protocol ? Tr.protocol.replace(/:$/, "") : "",
                        host: Tr.host,
                        search: Tr.search ? Tr.search.replace(/^\?/, "") : "",
                        hash: Tr.hash ? Tr.hash.replace(/^#/, "") : "",
                        hostname: Tr.hostname,
                        port: Tr.port,
                        pathname: "/" === Tr.pathname.charAt(0) ? Tr.pathname : "/" + Tr.pathname,
                    }
            );
        }
        function Je(t) {
            return (t = w(t) ? Xe(t) : t).protocol === Er.protocol && t.host === Er.host;
        }
        function Ke() {
            this.$get = m(t);
        }
        function Ye(t) {
            function e(t) {
                try {
                    return decodeURIComponent(t);
                } catch (e) {
                    return t;
                }
            }
            var n = t[0] || {},
                i = {},
                r = "";
            return function () {
                var t, o, a, s, u;
                try {
                    t = n.cookie || "";
                } catch (e) {
                    t = "";
                }
                if (t !== r) for (t = (r = t).split("; "), i = {}, a = 0; a < t.length; a++) 0 < (s = (o = t[a]).indexOf("=")) && ((u = e(o.substring(0, s))), v(i[u]) && (i[u] = e(o.substring(s + 1))));
                return i;
            };
        }
        function Qe() {
            this.$get = Ye;
        }
        function Ze(t) {
            function e(n, i) {
                if (y(n)) {
                    var r = {};
                    return (
                        o(n, function (t, n) {
                            r[n] = e(n, t);
                        }),
                            r
                    );
                }
                return t.factory(n + "Filter", i);
            }
            (this.register = e),
                (this.$get = [
                    "$injector",
                    function (t) {
                        return function (e) {
                            return t.get(e + "Filter");
                        };
                    },
                ]),
                e("currency", rn),
                e("date", hn),
                e("filter", tn),
                e("json", pn),
                e("limitTo", mn),
                e("lowercase", Nr),
                e("number", on),
                e("orderBy", vn),
                e("uppercase", Ir);
        }
        function tn() {
            return function (t, n, i, o) {
                if (!r(t)) {
                    if (null == t) return t;
                    throw e("filter")("notarray", t);
                }
                var a, s, u, l, c, f;
                switch (((o = o || "$"), nn(n))) {
                    case "function":
                        break;
                    case "boolean":
                    case "null":
                    case "number":
                    case "string":
                        a = !0;
                    case "object":
                        (u = i),
                            (l = o),
                            (c = a),
                            (f = y((s = n)) && l in s),
                            !0 === u
                                ? (u = I)
                                : C(u) ||
                                (u = function (t, e) {
                                    return !(v(t) || (null === t || null === e ? t !== e : y(e) || (y(t) && !g(t)) || ((t = zn("" + t)), (e = zn("" + e)), -1 === t.indexOf(e))));
                                }),
                            (n = function (t) {
                                return f && !y(t) ? en(t, s[l], u, l, !1) : en(t, s, u, l, c);
                            });
                        break;
                    default:
                        return t;
                }
                return Array.prototype.filter.call(t, n);
            };
        }
        function en(t, e, n, i, r, o) {
            var a = nn(t),
                s = nn(e);
            if ("string" === s && "!" === e.charAt(0)) return !en(t, e.substring(1), n, i, r);
            if (ri(t))
                return t.some(function (t) {
                    return en(t, e, n, i, r);
                });
            switch (a) {
                case "object":
                    var u;
                    if (r) {
                        for (u in t) if (u.charAt && "$" !== u.charAt(0) && en(t[u], e, n, i, !0)) return !0;
                        return !o && en(t, e, n, i, !1);
                    }
                    if ("object" === s) {
                        for (u in e) if (!C((o = e[u])) && !v(o) && !en((a = u === i) ? t : t[u], o, n, i, a, a)) return !1;
                        return !0;
                    }
                    return n(t, e);
                case "function":
                    return !1;
                default:
                    return n(t, e);
            }
        }
        function nn(t) {
            return null === t ? "null" : typeof t;
        }
        function rn(t) {
            var e = t.NUMBER_FORMATS;
            return function (t, n, i) {
                return v(n) && (n = e.CURRENCY_SYM), v(i) && (i = e.PATTERNS[1].maxFrac), null == t ? t : an(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, i).replace(/\u00A4/g, n);
            };
        }
        function on(t) {
            var e = t.NUMBER_FORMATS;
            return function (t, n) {
                return null == t ? t : an(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n);
            };
        }
        function an(t, e, n, i, r) {
            if ((!w(t) && !k(t)) || isNaN(t)) return "";
            var o = !isFinite(t),
                a = !1,
                s = Math.abs(t) + "",
                u = "";
            if (o) u = "∞";
            else {
                for (
                    (function (t, e, n, i) {
                        var r = t.d,
                            o = r.length - t.i;
                        if (((i = r[(n = (e = v(e) ? Math.min(Math.max(n, o), i) : +e) + t.i)]), 0 < n)) {
                            r.splice(Math.max(t.i, n));
                            for (var a = n; a < r.length; a++) r[a] = 0;
                        } else for (o = Math.max(0, o), t.i = 1, r.length = Math.max(1, (n = e + 1)), r[0] = 0, a = 1; a < n; a++) r[a] = 0;
                        if (5 <= i)
                            if (0 > n - 1) {
                                for (i = 0; i > n; i--) r.unshift(0), t.i++;
                                r.unshift(1), t.i++;
                            } else r[n - 1]++;
                        for (; o < Math.max(0, e); o++) r.push(0);
                        (e = r.reduceRight(function (t, e, n, i) {
                            return (e += t), (i[n] = e % 10), Math.floor(e / 10);
                        }, 0)) && (r.unshift(e), t.i++);
                    })(
                        (a = (function (t) {
                            var e,
                                n,
                                i,
                                r,
                                o,
                                a = 0;
                            for (-1 < (n = t.indexOf(Ar)) && (t = t.replace(Ar, "")), 0 < (i = t.search(/e/i)) ? (0 > n && (n = i), (n += +t.slice(i + 1)), (t = t.substring(0, i))) : 0 > n && (n = t.length), i = 0; t.charAt(i) === Or; i++);
                            if (i === (o = t.length)) (e = [0]), (n = 1);
                            else {
                                for (o--; t.charAt(o) === Or; ) o--;
                                for (n -= i, e = [], r = 0; i <= o; i++, r++) e[r] = +t.charAt(i);
                            }
                            return n > Sr && ((e = e.splice(0, Sr - 1)), (a = n - 1), (n = 1)), { d: e, e: a, i: n };
                        })(s)),
                        r,
                        e.minFrac,
                        e.maxFrac
                    ),
                        u = a.d,
                        s = a.i,
                        r = a.e,
                        o = [],
                        a = u.reduce(function (t, e) {
                            return t && !e;
                        }, !0);
                    0 > s;

                )
                    u.unshift(0), s++;
                for (0 < s ? (o = u.splice(s, u.length)) : ((o = u), (u = [0])), s = [], u.length >= e.lgSize && s.unshift(u.splice(-e.lgSize, u.length).join("")); u.length > e.gSize; ) s.unshift(u.splice(-e.gSize, u.length).join(""));
                u.length && s.unshift(u.join("")), (u = s.join(n)), o.length && (u += i + o.join("")), r && (u += "e+" + r);
            }
            return 0 > t && !a ? e.negPre + u + e.negSuf : e.posPre + u + e.posSuf;
        }
        function sn(t, e, n, i) {
            var r = "";
            for ((0 > t || (i && 0 >= t)) && (i ? (t = 1 - t) : ((t = -t), (r = "-"))), t = "" + t; t.length < e; ) t = Or + t;
            return n && (t = t.substr(t.length - e)), r + t;
        }
        function un(t, e, n, i, r) {
            return (
                (n = n || 0),
                    function (o) {
                        return (o = o["get" + t]()), (0 < n || o > -n) && (o += n), 0 === o && -12 === n && (o = 12), sn(o, e, i, r);
                    }
            );
        }
        function ln(t, e, n) {
            return function (i, r) {
                var o = i["get" + t]();
                return r[Wn((n ? "STANDALONE" : "") + (e ? "SHORT" : "") + t)][o];
            };
        }
        function cn(t) {
            var e = new Date(t, 0, 1).getDay();
            return new Date(t, 0, (4 >= e ? 5 : 12) - e);
        }
        function fn(t) {
            return function (e) {
                var n = cn(e.getFullYear());
                return (e = +new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay())) - +n), sn((e = 1 + Math.round(e / 6048e5)), t);
            };
        }
        function dn(t, e) {
            return 0 >= t.getFullYear() ? e.ERAS[0] : e.ERAS[1];
        }
        function hn(t) {
            var e = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function (n, i, r) {
                var a,
                    s,
                    u = "",
                    l = [];
                if (
                    ((i = i || "mediumDate"),
                        (i = t.DATETIME_FORMATS[i] || i),
                    w(n) &&
                    (n = jr.test(n)
                        ? f(n)
                        : (function (t) {
                            var n;
                            if ((n = t.match(e))) {
                                t = new Date(0);
                                var i = 0,
                                    r = 0,
                                    o = n[8] ? t.setUTCFullYear : t.setFullYear,
                                    a = n[8] ? t.setUTCHours : t.setHours;
                                n[9] && ((i = f(n[9] + n[10])), (r = f(n[9] + n[11]))),
                                    o.call(t, f(n[1]), f(n[2]) - 1, f(n[3])),
                                    (i = f(n[4] || 0) - i),
                                    (r = f(n[5] || 0) - r),
                                    (o = f(n[6] || 0)),
                                    (n = Math.round(1e3 * parseFloat("0." + (n[7] || 0)))),
                                    a.call(t, i, r, o, n);
                            }
                            return t;
                        })(n)),
                    k(n) && (n = new Date(n)),
                    !x(n) || !isFinite(n.getTime()))
                )
                    return n;
                for (; i; ) (s = Mr.exec(i)) ? (i = (l = L(l, s, 1)).pop()) : (l.push(i), (i = null));
                var c = n.getTimezoneOffset();
                return (
                    r && ((c = V(r, c)), (n = H(n, r, !0))),
                        o(l, function (e) {
                            (a = Dr[e]), (u += a ? a(n, t.DATETIME_FORMATS, c) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'"));
                        }),
                        u
                );
            };
        }
        function pn() {
            return function (t, e) {
                return v(e) && (e = 2), q(t, e);
            };
        }
        function mn() {
            return function (t, e, n) {
                return (
                    (e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : f(e)),
                        ei(e) ? t : (k(t) && (t = t.toString()), r(t) ? ((n = 0 > (n = !n || isNaN(n) ? 0 : f(n)) ? Math.max(0, t.length + n) : n), 0 <= e ? gn(t, n, n + e) : 0 === n ? gn(t, e, t.length) : gn(t, Math.max(0, n + e), n)) : t)
                );
            };
        }
        function gn(t, e, n) {
            return w(t) ? t.slice(e, n) : Gn.call(t, e, n);
        }
        function vn(t) {
            function n(t) {
                switch (typeof t) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1;
                }
            }
            function i(t, e) {
                var n = 0,
                    i = t.type;
                if (i === (r = e.type)) {
                    var r = t.value,
                        o = e.value;
                    "string" === i ? ((r = r.toLowerCase()), (o = o.toLowerCase())) : "object" === i && (y(r) && (r = t.index), y(o) && (o = e.index)), r !== o && (n = r < o ? -1 : 1);
                } else n = i < r ? -1 : 1;
                return n;
            }
            return function (o, a, s, u) {
                if (null == o) return o;
                if (!r(o)) throw e("orderBy")("notarray", o);
                ri(a) || (a = [a]), 0 === a.length && (a = ["+"]);
                var l = a.map(function (e) {
                        var n = 1,
                            i = p;
                        if (C(e)) i = e;
                        else if (w(e) && (("+" !== e.charAt(0) && "-" !== e.charAt(0)) || ((n = "-" === e.charAt(0) ? -1 : 1), (e = e.substring(1))), "" !== e && (i = t(e)).constant)) {
                            var r = i();
                            i = function (t) {
                                return t[r];
                            };
                        }
                        return { get: i, descending: n };
                    }),
                    c = s ? -1 : 1,
                    f = C(u) ? u : i;
                return (
                    (o = Array.prototype.map.call(o, function (t, e) {
                        return {
                            value: t,
                            tieBreaker: { value: e, type: "number", index: e },
                            predicateValues: l.map(function (i) {
                                var r = i.get(t);
                                return (i = typeof r), null === r ? ((i = "string"), (r = "null")) : "object" === i && ((C(r.valueOf) && n((r = r.valueOf()))) || (g(r) && n((r = r.toString())))), { value: r, type: i, index: e };
                            }),
                        };
                    })).sort(function (t, e) {
                        for (var n = 0, i = l.length; n < i; n++) {
                            var r = f(t.predicateValues[n], e.predicateValues[n]);
                            if (r) return r * l[n].descending * c;
                        }
                        return f(t.tieBreaker, e.tieBreaker) * c;
                    }),
                        o.map(function (t) {
                            return t.value;
                        })
                );
            };
        }
        function $n(t) {
            return C(t) && (t = { link: t }), (t.restrict = t.restrict || "AC"), m(t);
        }
        function yn(t, e, n, i, r) {
            (this.$$controls = []),
                (this.$error = {}),
                (this.$$success = {}),
                (this.$pending = void 0),
                (this.$name = r(e.name || e.ngForm || "")(n)),
                (this.$dirty = !1),
                (this.$valid = this.$pristine = !0),
                (this.$submitted = this.$invalid = !1),
                (this.$$parentForm = Ur),
                (this.$$element = t),
                (this.$$animate = i),
                bn(this);
        }
        function bn(t) {
            (t.$$classCache = {}), (t.$$classCache[yo] = !(t.$$classCache[$o] = t.$$element.hasClass($o)));
        }
        function wn(t) {
            function e(t, e, n) {
                n && !t.$$classCache[e] ? (t.$$animate.addClass(t.$$element, e), (t.$$classCache[e] = !0)) : !n && t.$$classCache[e] && (t.$$animate.removeClass(t.$$element, e), (t.$$classCache[e] = !1));
            }
            function n(t, n, i) {
                (n = n ? "-" + Q(n, "-") : ""), e(t, $o + n, !0 === i), e(t, yo + n, !1 === i);
            }
            var i = t.set,
                r = t.unset;
            t.clazz.prototype.$setValidity = function (t, o, a) {
                v(o) ? (this.$pending || (this.$pending = {}), i(this.$pending, t, a)) : (this.$pending && r(this.$pending, t, a), kn(this.$pending) && (this.$pending = void 0)),
                    A(o) ? (o ? (r(this.$error, t, a), i(this.$$success, t, a)) : (i(this.$error, t, a), r(this.$$success, t, a))) : (r(this.$error, t, a), r(this.$$success, t, a)),
                    this.$pending
                        ? (e(this, "ng-pending", !0), (this.$valid = this.$invalid = void 0), n(this, "", null))
                        : (e(this, "ng-pending", !1), (this.$valid = kn(this.$error)), (this.$invalid = !this.$valid), n(this, "", this.$valid)),
                    n(this, t, (o = this.$pending && this.$pending[t] ? void 0 : !this.$error[t] && (!!this.$$success[t] || null))),
                    this.$$parentForm.$setValidity(t, o, this);
            };
        }
        function kn(t) {
            if (t) for (var e in t) if (t.hasOwnProperty(e)) return !1;
            return !0;
        }
        function xn(t) {
            t.$formatters.push(function (e) {
                return t.$isEmpty(e) ? e : e.toString();
            });
        }
        function Cn(t, e, n, i, r, o) {
            var a = zn(e[0].type);
            if (!r.android) {
                var s = !1;
                e.on("compositionstart", function () {
                    s = !0;
                }),
                    e.on("compositionend", function () {
                        (s = !1), l();
                    });
            }
            var u,
                l = function (t) {
                    if ((u && (o.defer.cancel(u), (u = null)), !s)) {
                        var r = e.val();
                        (t = t && t.type), "password" === a || (n.ngTrim && "false" === n.ngTrim) || (r = ai(r)), (i.$viewValue !== r || ("" === r && i.$$hasNativeValidators)) && i.$setViewValue(r, t);
                    }
                };
            if (r.hasEvent("input")) e.on("input", l);
            else {
                var c = function (t, e, n) {
                    u ||
                    (u = o.defer(function () {
                        (u = null), (e && e.value === n) || l(t);
                    }));
                };
                e.on("keydown", function (t) {
                    var e = t.keyCode;
                    91 === e || (15 < e && 19 > e) || (37 <= e && 40 >= e) || c(t, this, this.value);
                }),
                r.hasEvent("paste") && e.on("paste cut", c);
            }
            e.on("change", l),
            Kr[a] &&
            i.$$hasNativeValidators &&
            a === n.type &&
            e.on("keydown wheel mousedown", function (t) {
                if (!u) {
                    var e = this.validity,
                        n = e.badInput,
                        i = e.typeMismatch;
                    u = o.defer(function () {
                        (u = null), (e.badInput === n && e.typeMismatch === i) || l(t);
                    });
                }
            }),
                (i.$render = function () {
                    var t = i.$isEmpty(i.$viewValue) ? "" : i.$viewValue;
                    e.val() !== t && e.val(t);
                });
        }
        function Tn(t, e) {
            return function (n, i) {
                var r, a;
                if (x(n)) return n;
                if (w(n)) {
                    if (('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Hr.test(n))) return new Date(n);
                    if (((t.lastIndex = 0), (r = t.exec(n))))
                        return (
                            r.shift(),
                                (a = i
                                    ? { yyyy: i.getFullYear(), MM: i.getMonth() + 1, dd: i.getDate(), HH: i.getHours(), mm: i.getMinutes(), ss: i.getSeconds(), sss: i.getMilliseconds() / 1e3 }
                                    : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }),
                                o(r, function (t, n) {
                                    n < e.length && (a[e[n]] = +t);
                                }),
                                new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
                        );
                }
                return NaN;
            };
        }
        function En(t, e, n, i) {
            return function (r, o, a, s, u, l, c) {
                function f(t) {
                    return t && !(t.getTime && t.getTime() != t.getTime());
                }
                function d(t) {
                    return $(t) && !x(t) ? n(t) || void 0 : t;
                }
                Sn(r, o, a, s), Cn(0, o, a, s, u, l);
                var h,
                    p,
                    m,
                    g = s && s.$options.getOption("timezone");
                ((s.$$parserName = t),
                    s.$parsers.push(function (t) {
                        return s.$isEmpty(t) ? null : e.test(t) ? ((t = n(t, h)), g && (t = H(t, g)), t) : void 0;
                    }),
                    s.$formatters.push(function (t) {
                        if (t && !x(t)) throw ko("datefmt", t);
                        return f(t) ? ((h = t) && g && (h = H(h, g, !0)), c("date")(t, i, g)) : ((h = null), "");
                    }),
                $(a.min) || a.ngMin) &&
                ((s.$validators.min = function (t) {
                    return !f(t) || v(p) || n(t) >= p;
                }),
                    a.$observe("min", function (t) {
                        (p = d(t)), s.$validate();
                    }));
                ($(a.max) || a.ngMax) &&
                ((s.$validators.max = function (t) {
                    return !f(t) || v(m) || n(t) <= m;
                }),
                    a.$observe("max", function (t) {
                        (m = d(t)), s.$validate();
                    }));
            };
        }
        function Sn(t, e, n, i) {
            (i.$$hasNativeValidators = y(e[0].validity)) &&
            i.$parsers.push(function (t) {
                var n = e.prop("validity") || {};
                return n.badInput || n.typeMismatch ? void 0 : t;
            });
        }
        function An(t) {
            (t.$$parserName = "number"),
                t.$parsers.push(function (e) {
                    return t.$isEmpty(e) ? null : Br.test(e) ? parseFloat(e) : void 0;
                }),
                t.$formatters.push(function (e) {
                    if (!t.$isEmpty(e)) {
                        if (!k(e)) throw ko("numfmt", e);
                        e = e.toString();
                    }
                    return e;
                });
        }
        function On(t) {
            return $(t) && !k(t) && (t = parseFloat(t)), ei(t) ? void 0 : t;
        }
        function Dn(t) {
            var e = t.toString(),
                n = e.indexOf(".");
            return -1 === n ? (-1 < t && 1 > t && (t = /e-(\d+)$/.exec(e)) ? Number(t[1]) : 0) : e.length - n - 1;
        }
        function Mn(t, e, n) {
            var i = (0 | (t = Number(t))) !== t,
                r = (0 | e) !== e,
                o = (0 | n) !== n;
            if (i || r || o) {
                var a = i ? Dn(t) : 0,
                    s = r ? Dn(e) : 0,
                    u = o ? Dn(n) : 0;
                a = Math.max(a, s, u);
                (t *= a = Math.pow(10, a)), (e *= a), (n *= a), i && (t = Math.round(t)), r && (e = Math.round(e)), o && (n = Math.round(n));
            }
            return 0 == (t - e) % n;
        }
        function jn(t, e, n, i, r) {
            if ($(i)) {
                if (!(t = t(i)).constant) throw ko("constexpr", n, i);
                return t(e);
            }
            return r;
        }
        function Nn(t, e) {
            function n(t, e) {
                if (!t || !t.length) return [];
                if (!e || !e.length) return t;
                var n = [],
                    i = 0;
                t: for (; i < t.length; i++) {
                    for (var r = t[i], o = 0; o < e.length; o++) if (r === e[o]) continue t;
                    n.push(r);
                }
                return n;
            }
            function i(t) {
                var e = t;
                return (
                    ri(t)
                        ? (e = t.map(i).join(" "))
                        : y(t) &&
                        (e = Object.keys(t)
                            .filter(function (e) {
                                return t[e];
                            })
                            .join(" ")),
                        e
                );
            }
            var r;
            return (
                (t = "ngClass" + t),
                    [
                        "$parse",
                        function (a) {
                            return {
                                restrict: "AC",
                                link: function (s, u, l) {
                                    function c(t, e) {
                                        var n = [];
                                        return (
                                            o(t, function (t) {
                                                (0 < e || d[t]) && ((d[t] = (d[t] || 0) + e), d[t] === +(0 < e) && n.push(t));
                                            }),
                                                n.join(" ")
                                        );
                                    }
                                    var f,
                                        d = u.data("$classCounts"),
                                        h = !0;
                                    d || ((d = rt()), u.data("$classCounts", d)),
                                    "ngClass" !== t &&
                                    (r ||
                                    (r = a("$index", function (t) {
                                        return 1 & t;
                                    })),
                                        s.$watch(r, function (t) {
                                            if (t === e) {
                                                var n = c((n = f) && n.split(" "), 1);
                                                l.$addClass(n);
                                            } else (n = c((n = f) && n.split(" "), -1)), l.$removeClass(n);
                                            h = t;
                                        })),
                                        s.$watch(a(l[t], i), function (t) {
                                            if ((w(t) || (t = i(t)), h === e)) {
                                                var r = t,
                                                    o = f && f.split(" "),
                                                    a = r && r.split(" ");
                                                (r = n(o, a)), (o = n(a, o)), (r = c(r, -1)), (o = c(o, 1));
                                                l.$addClass(o), l.$removeClass(r);
                                            }
                                            f = t;
                                        });
                                },
                            };
                        },
                    ]
            );
        }
        function In(t, e, n, i, r, o, a, s, u) {
            var l;
            (this.$modelValue = this.$viewValue = Number.NaN),
                (this.$$rawModelValue = void 0),
                (this.$validators = {}),
                (this.$asyncValidators = {}),
                (this.$parsers = []),
                (this.$formatters = []),
                (this.$viewChangeListeners = []),
                (this.$untouched = !0),
                (this.$touched = !1),
                (this.$pristine = !0),
                (this.$dirty = !1),
                (this.$valid = !0),
                (this.$invalid = !1),
                (this.$error = {}),
                (this.$$success = {}),
                (this.$pending = void 0),
                (this.$name = u(n.name || "", !1)(t)),
                (this.$$parentForm = Ur),
                (this.$options = xo),
                (this.$$parsedNgModel = r(n.ngModel)),
                (this.$$parsedNgModelAssign = this.$$parsedNgModel.assign),
                (this.$$ngModelGet = this.$$parsedNgModel),
                (this.$$ngModelSet = this.$$parsedNgModelAssign),
                (this.$$pendingDebounce = null),
                (this.$$parserValid = void 0),
                (this.$$currentValidationRunId = 0),
                Object.defineProperty(this, "$$scope", { value: t }),
                (this.$$attr = n),
                (this.$$element = i),
                (this.$$animate = o),
                (this.$$timeout = a),
                (this.$$parse = r),
                (this.$$q = s),
                (this.$$exceptionHandler = e),
                bn(this),
                (l = this).$$scope.$watch(function (t) {
                    if ((t = l.$$ngModelGet(t)) !== l.$modelValue && (l.$modelValue == l.$modelValue || t == t)) {
                        (l.$modelValue = l.$$rawModelValue = t), (l.$$parserValid = void 0);
                        for (var e = l.$formatters, n = e.length, i = t; n--; ) i = e[n](i);
                        l.$viewValue !== i && (l.$$updateEmptyClasses(i), (l.$viewValue = l.$$lastCommittedViewValue = i), l.$render(), l.$$runValidators(l.$modelValue, l.$viewValue, h));
                    }
                    return t;
                });
        }
        function Ln(t) {
            this.$$options = t;
        }
        function Pn(t, e) {
            o(e, function (e, n) {
                $(t[n]) || (t[n] = e);
            });
        }
        function Un(t, e) {
            t.prop("selected", e), t.attr("selected", e);
        }
        var qn,
            Rn,
            Vn,
            Hn,
            _n = /^\/(.+)\/([a-z]*)$/,
            Fn = Object.prototype.hasOwnProperty,
            Bn = { objectMaxDepth: 5 },
            zn = function (t) {
                return w(t) ? t.toLowerCase() : t;
            },
            Wn = function (t) {
                return w(t) ? t.toUpperCase() : t;
            },
            Gn = [].slice,
            Xn = [].splice,
            Jn = [].push,
            Kn = Object.prototype.toString,
            Yn = Object.getPrototypeOf,
            Qn = e("ng"),
            Zn = t.angular || (t.angular = {}),
            ti = 0;
        qn = t.document.documentMode;
        var ei =
            Number.isNaN ||
            function (t) {
                return t != t;
            };
        (h.$inject = []), (p.$inject = []);
        var ni,
            ii,
            ri = Array.isArray,
            oi = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
            ai = function (t) {
                return w(t) ? t.trim() : t;
            },
            si = function (t) {
                return t.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
            },
            ui = function () {
                if (!$(ui.rules)) {
                    var e = t.document.querySelector("[ng-csp]") || t.document.querySelector("[data-ng-csp]");
                    if (e) {
                        var n = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
                        ui.rules = { noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"), noInlineStyle: !n || -1 !== n.indexOf("no-inline-style") };
                    } else {
                        e = ui;
                        try {
                            new Function(""), (n = !1);
                        } catch (t) {
                            n = !0;
                        }
                        e.rules = { noUnsafeEval: n, noInlineStyle: !1 };
                    }
                }
                return ui.rules;
            },
            li = function () {
                if ($(li.name_)) return li.name_;
                var e,
                    n,
                    i,
                    r,
                    o = fi.length;
                for (n = 0; n < o; ++n)
                    if (((i = fi[n]), (e = t.document.querySelector("[" + i.replace(":", "\\:") + "jq]")))) {
                        r = e.getAttribute(i + "jq");
                        break;
                    }
                return (li.name_ = r);
            },
            ci = /:/g,
            fi = ["ng-", "data-ng-", "ng:", "x-ng-"],
            di =
                ((ni = t.document),
                !(ii = ni.currentScript) ||
                ((ii instanceof t.HTMLScriptElement || ii instanceof t.SVGScriptElement) &&
                    [(ii = ii.attributes).getNamedItem("src"), ii.getNamedItem("href"), ii.getNamedItem("xlink:href")].every(function (t) {
                        if (!t) return !0;
                        if (!t.value) return !1;
                        var e = ni.createElement("a");
                        if (((e.href = t.value), ni.location.origin === e.origin)) return !0;
                        switch (e.protocol) {
                            case "http:":
                            case "https:":
                            case "ftp:":
                            case "blob:":
                            case "file:":
                            case "data:":
                                return !0;
                            default:
                                return !1;
                        }
                    }))),
            hi = /[A-Z]/g,
            pi = !1,
            mi = 3,
            gi = { full: "1.6.4", major: 1, minor: 6, dot: 4, codeName: "phenomenal-footnote" };
        dt.expando = "ng339";
        var vi = (dt.cache = {}),
            $i = 1;
        dt._data = function (t) {
            return this.cache[t[this.expando]] || {};
        };
        var yi = /-([a-z])/g,
            bi = /^-ms-/,
            wi = { mouseleave: "mouseout", mouseenter: "mouseover" },
            ki = e("jqLite"),
            xi = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Ci = /<|&#?\w+;/,
            Ti = /<([\w:-]+)/,
            Ei = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Si = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            };
        (Si.optgroup = Si.option), (Si.tbody = Si.tfoot = Si.colgroup = Si.caption = Si.thead), (Si.th = Si.td);
        var Ai =
            t.Node.prototype.contains ||
            function (t) {
                return !!(16 & this.compareDocumentPosition(t));
            },
            Oi = (dt.prototype = {
                ready: St,
                toString: function () {
                    var t = [];
                    return (
                        o(this, function (e) {
                            t.push("" + e);
                        }),
                        "[" + t.join(", ") + "]"
                    );
                },
                eq: function (t) {
                    return Rn(0 <= t ? this[t] : this[this.length + t]);
                },
                length: 0,
                push: Jn,
                sort: [].sort,
                splice: [].splice,
            }),
            Di = {};
        o("multiple selected checked disabled readOnly required open".split(" "), function (t) {
            Di[zn(t)] = t;
        });
        var Mi = {};
        o("input select option textarea button form details".split(" "), function (t) {
            Mi[t] = !0;
        });
        var ji = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern", ngStep: "step" };
        o(
            {
                data: $t,
                removeData: gt,
                hasData: function (t) {
                    for (var e in vi[t.ng339]) return !0;
                    return !1;
                },
                cleanData: function (t) {
                    for (var e = 0, n = t.length; e < n; e++) gt(t[e]);
                },
            },
            function (t, e) {
                dt[e] = t;
            }
        ),
            o(
                {
                    data: $t,
                    inheritedData: Ct,
                    scope: function (t) {
                        return Rn.data(t, "$scope") || Ct(t.parentNode || t, ["$isolateScope", "$scope"]);
                    },
                    isolateScope: function (t) {
                        return Rn.data(t, "$isolateScope") || Rn.data(t, "$isolateScopeNoTemplate");
                    },
                    controller: xt,
                    injector: function (t) {
                        return Ct(t, "$injector");
                    },
                    removeAttr: function (t, e) {
                        t.removeAttribute(e);
                    },
                    hasClass: yt,
                    css: function (t, e, n) {
                        if (((e = lt(e.replace(bi, "ms-"))), !$(n))) return t.style[e];
                        t.style[e] = n;
                    },
                    attr: function (t, e, n) {
                        if ((i = t.nodeType) !== mi && 2 !== i && 8 !== i && t.getAttribute) {
                            var i = zn(e),
                                r = Di[i];
                            if (!$(n)) return (t = t.getAttribute(e)), r && null !== t && (t = i), null === t ? void 0 : t;
                            null === n || (!1 === n && r) ? t.removeAttribute(e) : t.setAttribute(e, r ? i : n);
                        }
                    },
                    prop: function (t, e, n) {
                        if (!$(n)) return t[e];
                        t[e] = n;
                    },
                    text: (function () {
                        function t(t, e) {
                            if (v(e)) {
                                var n = t.nodeType;
                                return 1 === n || n === mi ? t.textContent : "";
                            }
                            t.textContent = e;
                        }
                        return (t.$dv = ""), t;
                    })(),
                    val: function (t, e) {
                        if (v(e)) {
                            if (t.multiple && "select" === D(t)) {
                                var n = [];
                                return (
                                    o(t.options, function (t) {
                                        t.selected && n.push(t.value || t.text);
                                    }),
                                        n
                                );
                            }
                            return t.value;
                        }
                        t.value = e;
                    },
                    html: function (t, e) {
                        if (v(e)) return t.innerHTML;
                        pt(t, !0), (t.innerHTML = e);
                    },
                    empty: Tt,
                },
                function (t, e) {
                    dt.prototype[e] = function (e, n) {
                        var i,
                            r,
                            o = this.length;
                        if (t !== Tt && v(2 === t.length && t !== yt && t !== xt ? e : n)) {
                            if (y(e)) {
                                for (i = 0; i < o; i++)
                                    if (t === $t) t(this[i], e);
                                    else for (r in e) t(this[i], r, e[r]);
                                return this;
                            }
                            for (o = v((i = t.$dv)) ? Math.min(o, 1) : o, r = 0; r < o; r++) {
                                var a = t(this[r], e, n);
                                i = i ? i + a : a;
                            }
                            return i;
                        }
                        for (i = 0; i < o; i++) t(this[i], e, n);
                        return this;
                    };
                }
            ),
            o(
                {
                    removeData: gt,
                    on: function (t, e, n, i) {
                        if ($(i)) throw ki("onargs");
                        if (ct(t)) {
                            var r = (i = vt(t, !0)).events,
                                o = i.handle;
                            o ||
                            (o = i.handle =
                                ((l = r),
                                    ((c = function (t, e) {
                                        t.isDefaultPrevented = function () {
                                            return t.defaultPrevented;
                                        };
                                        var n = l[e || t.type],
                                            i = n ? n.length : 0;
                                        if (i) {
                                            if (v(t.immediatePropagationStopped)) {
                                                var r = t.stopImmediatePropagation;
                                                t.stopImmediatePropagation = function () {
                                                    (t.immediatePropagationStopped = !0), t.stopPropagation && t.stopPropagation(), r && r.call(t);
                                                };
                                            }
                                            t.isImmediatePropagationStopped = function () {
                                                return !0 === t.immediatePropagationStopped;
                                            };
                                            var o = n.specialHandlerWrapper || Ot;
                                            1 < i && (n = at(n));
                                            for (var a = 0; a < i; a++) t.isImmediatePropagationStopped() || o(u, t, n[a]);
                                        }
                                    }).elem = u = t),
                                    c));
                            for (
                                var a = (i = 0 <= e.indexOf(" ") ? e.split(" ") : [e]).length,
                                    s = function (e, i, a) {
                                        var s = r[e];
                                        s || (((s = r[e] = []).specialHandlerWrapper = i), "$destroy" === e || a || t.addEventListener(e, o)), s.push(n);
                                    };
                                a--;

                            )
                                (e = i[a]), wi[e] ? (s(wi[e], Dt), s(e, void 0, !0)) : s(e);
                        }
                        var u, l, c;
                    },
                    off: mt,
                    one: function (t, e, n) {
                        (t = Rn(t)).on(e, function i() {
                            t.off(e, n), t.off(e, i);
                        }),
                            t.on(e, n);
                    },
                    replaceWith: function (t, e) {
                        var n,
                            i = t.parentNode;
                        pt(t),
                            o(new dt(e), function (e) {
                                n ? i.insertBefore(e, n.nextSibling) : i.replaceChild(e, t), (n = e);
                            });
                    },
                    children: function (t) {
                        var e = [];
                        return (
                            o(t.childNodes, function (t) {
                                1 === t.nodeType && e.push(t);
                            }),
                                e
                        );
                    },
                    contents: function (t) {
                        return t.contentDocument || t.childNodes || [];
                    },
                    append: function (t, e) {
                        if (1 === (n = t.nodeType) || 11 === n) for (var n = 0, i = (e = new dt(e)).length; n < i; n++) t.appendChild(e[n]);
                    },
                    prepend: function (t, e) {
                        if (1 === t.nodeType) {
                            var n = t.firstChild;
                            o(new dt(e), function (e) {
                                t.insertBefore(e, n);
                            });
                        }
                    },
                    wrap: function (t, e) {
                        var n = Rn(e).eq(0).clone()[0],
                            i = t.parentNode;
                        i && i.replaceChild(n, t), n.appendChild(t);
                    },
                    remove: Et,
                    detach: function (t) {
                        Et(t, !0);
                    },
                    after: function (t, e) {
                        var n = t,
                            i = t.parentNode;
                        if (i)
                            for (var r = 0, o = (e = new dt(e)).length; r < o; r++) {
                                var a = e[r];
                                i.insertBefore(a, n.nextSibling), (n = a);
                            }
                    },
                    addClass: wt,
                    removeClass: bt,
                    toggleClass: function (t, e, n) {
                        e &&
                        o(e.split(" "), function (e) {
                            var i = n;
                            v(i) && (i = !yt(t, e)), (i ? wt : bt)(t, e);
                        });
                    },
                    parent: function (t) {
                        return (t = t.parentNode) && 11 !== t.nodeType ? t : null;
                    },
                    next: function (t) {
                        return t.nextElementSibling;
                    },
                    find: function (t, e) {
                        return t.getElementsByTagName ? t.getElementsByTagName(e) : [];
                    },
                    clone: ht,
                    triggerHandler: function (t, e, n) {
                        var i,
                            r,
                            a = e.type || e,
                            s = vt(t);
                        (s = (s = s && s.events) && s[a]) &&
                        ((i = {
                            preventDefault: function () {
                                this.defaultPrevented = !0;
                            },
                            isDefaultPrevented: function () {
                                return !0 === this.defaultPrevented;
                            },
                            stopImmediatePropagation: function () {
                                this.immediatePropagationStopped = !0;
                            },
                            isImmediatePropagationStopped: function () {
                                return !0 === this.immediatePropagationStopped;
                            },
                            stopPropagation: h,
                            type: a,
                            target: t,
                        }),
                        e.type && (i = l(i, e)),
                            (e = at(s)),
                            (r = n ? [i].concat(n) : [i]),
                            o(e, function (e) {
                                i.isImmediatePropagationStopped() || e.apply(t, r);
                            }));
                    },
                },
                function (t, e) {
                    dt.prototype[e] = function (e, n, i) {
                        for (var r, o = 0, a = this.length; o < a; o++) v(r) ? $((r = t(this[o], e, n, i))) && (r = Rn(r)) : kt(r, t(this[o], e, n, i));
                        return $(r) ? r : this;
                    };
                }
            ),
            (dt.prototype.bind = dt.prototype.on),
            (dt.prototype.unbind = dt.prototype.off);
        var Ni = Object.create(null);
        Nt.prototype = {
            _idx: function (t) {
                return t === this._lastKey ? this._lastIndex : ((this._lastKey = t), (this._lastIndex = this._keys.indexOf(t)));
            },
            _transformKey: function (t) {
                return ei(t) ? Ni : t;
            },
            get: function (t) {
                if (((t = this._transformKey(t)), -1 !== (t = this._idx(t)))) return this._values[t];
            },
            set: function (t, e) {
                t = this._transformKey(t);
                var n = this._idx(t);
                -1 === n && (n = this._lastIndex = this._keys.length), (this._keys[n] = t), (this._values[n] = e);
            },
            delete: function (t) {
                return (t = this._transformKey(t)), -1 !== (t = this._idx(t)) && (this._keys.splice(t, 1), this._values.splice(t, 1), (this._lastKey = NaN), (this._lastIndex = -1), !0);
            },
        };
        var Ii = Nt,
            Li = [
                function () {
                    this.$get = [
                        function () {
                            return Ii;
                        },
                    ];
                },
            ],
            Pi = /^([^(]+?)=>/,
            Ui = /^[^(]*\(\s*([^)]*)\)/m,
            qi = /,/,
            Ri = /^\s*(_?)(\S+?)\1\s*$/,
            Vi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            Hi = e("$injector");
        Lt.$$annotate = function (t, e, n) {
            var i, r;
            if ("function" == typeof t) {
                if (!(i = t.$inject)) {
                    if (((i = []), t.length)) {
                        if (e) throw ((w(n) && n) || (n = t.name || ((r = It((r = t))) ? "function(" + (r[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn")), Hi("strictdi", n));
                        o((e = It(t))[1].split(qi), function (t) {
                            t.replace(Ri, function (t, e, n) {
                                i.push(n);
                            });
                        });
                    }
                    t.$inject = i;
                }
            } else ri(t) ? (tt(t[(e = t.length - 1)], "fn"), (i = t.slice(0, e))) : tt(t, "fn", !0);
            return i;
        };
        var _i = e("$animate"),
            Fi = function () {
                this.$get = h;
            },
            Bi = function () {
                var t = new Ii(),
                    e = [];
                this.$get = [
                    "$$AnimateRunner",
                    "$rootScope",
                    function (n, i) {
                        function r(t, e, n) {
                            var i = !1;
                            return (
                                e &&
                                o((e = w(e) ? e.split(" ") : ri(e) ? e : []), function (e) {
                                    e && ((i = !0), (t[e] = n));
                                }),
                                    i
                            );
                        }
                        function a() {
                            o(e, function (e) {
                                var n = t.get(e);
                                if (n) {
                                    var i = (function (t) {
                                            w(t) && (t = t.split(" "));
                                            var e = rt();
                                            return (
                                                o(t, function (t) {
                                                    t.length && (e[t] = !0);
                                                }),
                                                    e
                                            );
                                        })(e.attr("class")),
                                        r = "",
                                        a = "";
                                    o(n, function (t, e) {
                                        t !== !!i[e] && (t ? (r += (r.length ? " " : "") + e) : (a += (a.length ? " " : "") + e));
                                    }),
                                        o(e, function (t) {
                                            r && wt(t, r), a && bt(t, a);
                                        }),
                                        t.delete(e);
                                }
                            }),
                                (e.length = 0);
                        }
                        return {
                            enabled: h,
                            on: h,
                            off: h,
                            pin: h,
                            push: function (o, s, u, l) {
                                return (
                                    l && l(),
                                    (u = u || {}).from && o.css(u.from),
                                    u.to && o.css(u.to),
                                    (u.addClass || u.removeClass) &&
                                    ((s = u.addClass), (l = u.removeClass), (s = r((u = t.get(o) || {}), s, !0)), (l = r(u, l, !1)), (s || l) && (t.set(o, u), e.push(o), 1 === e.length && i.$$postDigest(a))),
                                        (o = new n()).complete(),
                                        o
                                );
                            },
                        };
                    },
                ];
            },
            zi = [
                "$provide",
                function (t) {
                    var e = this,
                        n = null;
                    (this.$$registeredAnimations = Object.create(null)),
                        (this.register = function (n, i) {
                            if (n && "." !== n.charAt(0)) throw _i("notcsel", n);
                            var r = n + "-animation";
                            (e.$$registeredAnimations[n.substr(1)] = r), t.factory(r, i);
                        }),
                        (this.classNameFilter = function (t) {
                            if (1 === arguments.length && (n = t instanceof RegExp ? t : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(n.toString())) throw ((n = null), _i("nongcls", "ng-animate"));
                            return n;
                        }),
                        (this.$get = [
                            "$$animateQueue",
                            function (t) {
                                function e(t, e, n) {
                                    if (n) {
                                        var i;
                                        t: {
                                            for (i = 0; i < n.length; i++) {
                                                var r = n[i];
                                                if (1 === r.nodeType) {
                                                    i = r;
                                                    break t;
                                                }
                                            }
                                            i = void 0;
                                        }
                                        !i || i.parentNode || i.previousElementSibling || (n = null);
                                    }
                                    n ? n.after(t) : e.prepend(t);
                                }
                                return {
                                    on: t.on,
                                    off: t.off,
                                    pin: t.pin,
                                    enabled: t.enabled,
                                    cancel: function (t) {
                                        t.end && t.end();
                                    },
                                    enter: function (n, i, r, o) {
                                        return (i = i && Rn(i)), (r = r && Rn(r)), e(n, (i = i || r.parent()), r), t.push(n, "enter", qt(o));
                                    },
                                    move: function (n, i, r, o) {
                                        return (i = i && Rn(i)), (r = r && Rn(r)), e(n, (i = i || r.parent()), r), t.push(n, "move", qt(o));
                                    },
                                    leave: function (e, n) {
                                        return t.push(e, "leave", qt(n), function () {
                                            e.remove();
                                        });
                                    },
                                    addClass: function (e, n, i) {
                                        return ((i = qt(i)).addClass = Ut(i.addclass, n)), t.push(e, "addClass", i);
                                    },
                                    removeClass: function (e, n, i) {
                                        return ((i = qt(i)).removeClass = Ut(i.removeClass, n)), t.push(e, "removeClass", i);
                                    },
                                    setClass: function (e, n, i, r) {
                                        return ((r = qt(r)).addClass = Ut(r.addClass, n)), (r.removeClass = Ut(r.removeClass, i)), t.push(e, "setClass", r);
                                    },
                                    animate: function (e, n, i, r, o) {
                                        return ((o = qt(o)).from = o.from ? l(o.from, n) : n), (o.to = o.to ? l(o.to, i) : i), (o.tempClasses = Ut(o.tempClasses, r || "ng-inline-animate")), t.push(e, "animate", o);
                                    },
                                };
                            },
                        ]);
                },
            ],
            Wi = function () {
                this.$get = [
                    "$$rAF",
                    function (t) {
                        function e(e) {
                            n.push(e),
                            1 < n.length ||
                            t(function () {
                                for (var t = 0; t < n.length; t++) n[t]();
                                n = [];
                            });
                        }
                        var n = [];
                        return function () {
                            var t = !1;
                            return (
                                e(function () {
                                    t = !0;
                                }),
                                    function (n) {
                                        t ? n() : e(n);
                                    }
                            );
                        };
                    },
                ];
            },
            Gi = function () {
                this.$get = [
                    "$q",
                    "$sniffer",
                    "$$animateAsyncRun",
                    "$$isDocumentHidden",
                    "$timeout",
                    function (t, e, n, i, r) {
                        function a(t) {
                            this.setHost(t);
                            var e = n();
                            (this._doneCallbacks = []),
                                (this._tick = function (t) {
                                    i() ? r(t, 0, !1) : e(t);
                                }),
                                (this._state = 0);
                        }
                        return (
                            (a.chain = function (t, e) {
                                var n = 0;
                                !(function i() {
                                    n === t.length
                                        ? e(!0)
                                        : t[n](function (t) {
                                            !1 === t ? e(!1) : (n++, i());
                                        });
                                })();
                            }),
                                (a.all = function (t, e) {
                                    function n(n) {
                                        (r = r && n), ++i === t.length && e(r);
                                    }
                                    var i = 0,
                                        r = !0;
                                    o(t, function (t) {
                                        t.done(n);
                                    });
                                }),
                                (a.prototype = {
                                    setHost: function (t) {
                                        this.host = t || {};
                                    },
                                    done: function (t) {
                                        2 === this._state ? t() : this._doneCallbacks.push(t);
                                    },
                                    progress: h,
                                    getPromise: function () {
                                        if (!this.promise) {
                                            var e = this;
                                            this.promise = t(function (t, n) {
                                                e.done(function (e) {
                                                    !1 === e ? n() : t();
                                                });
                                            });
                                        }
                                        return this.promise;
                                    },
                                    then: function (t, e) {
                                        return this.getPromise().then(t, e);
                                    },
                                    catch: function (t) {
                                        return this.getPromise().catch(t);
                                    },
                                    finally: function (t) {
                                        return this.getPromise().finally(t);
                                    },
                                    pause: function () {
                                        this.host.pause && this.host.pause();
                                    },
                                    resume: function () {
                                        this.host.resume && this.host.resume();
                                    },
                                    end: function () {
                                        this.host.end && this.host.end(), this._resolve(!0);
                                    },
                                    cancel: function () {
                                        this.host.cancel && this.host.cancel(), this._resolve(!1);
                                    },
                                    complete: function (t) {
                                        var e = this;
                                        0 === e._state &&
                                        ((e._state = 1),
                                            e._tick(function () {
                                                e._resolve(t);
                                            }));
                                    },
                                    _resolve: function (t) {
                                        2 !== this._state &&
                                        (o(this._doneCallbacks, function (e) {
                                            e(t);
                                        }),
                                            (this._doneCallbacks.length = 0),
                                            (this._state = 2));
                                    },
                                }),
                                a
                        );
                    },
                ];
            },
            Xi = function () {
                this.$get = [
                    "$$rAF",
                    "$q",
                    "$$AnimateRunner",
                    function (t, e, n) {
                        return function (e, i) {
                            function r() {
                                return (
                                    t(function () {
                                        o.addClass && (e.addClass(o.addClass), (o.addClass = null)), o.removeClass && (e.removeClass(o.removeClass), (o.removeClass = null)), o.to && (e.css(o.to), (o.to = null)), a || s.complete(), (a = !0);
                                    }),
                                        s
                                );
                            }
                            var o = i || {};
                            o.$$prepared || (o = j(o)), o.cleanupStyles && (o.from = o.to = null), o.from && (e.css(o.from), (o.from = null));
                            var a,
                                s = new n();
                            return { start: r, end: r };
                        };
                    },
                ];
            },
            Ji = e("$compile"),
            Ki = new (function () {})();
        (_t.$inject = ["$provide", "$$sanitizeUriProvider"]),
            (Ft.prototype.isFirstChange = function () {
                return this.previousValue === Ki;
            });
        var Yi = /^((?:x|data)[:\-_])/i,
            Qi = /[:\-_]+(.)/g,
            Zi = e("$controller"),
            tr = /^(\S+)(\s+as\s+([\w$]+))?$/,
            er = function () {
                this.$get = [
                    "$document",
                    function (t) {
                        return function (e) {
                            return e ? !e.nodeType && e instanceof Rn && (e = e[0]) : (e = t[0].body), e.offsetWidth + 1;
                        };
                    },
                ];
            },
            nr = "application/json",
            ir = { "Content-Type": nr + ";charset=utf-8" },
            rr = /^\[|^\{(?!\{)/,
            or = { "[": /]$/, "{": /}$/ },
            ar = /^\)]\}',?\n/,
            sr = e("$http"),
            ur = (Zn.$interpolateMinErr = e("$interpolate"));
        (ur.throwNoconcat = function (t) {
            throw ur("noconcat", t);
        }),
            (ur.interr = function (t, e) {
                return ur("interr", t, e.toString());
            });
        var lr = function () {
                this.$get = function () {
                    var t = Zn.callbacks,
                        e = {};
                    return {
                        createCallback: function (n) {
                            var i,
                                r = "angular.callbacks." + (n = "_" + (t.$$counter++).toString(36)),
                                o =
                                    (((i = function (t) {
                                        (i.data = t), (i.called = !0);
                                    }).id = n),
                                        i);
                            return (e[r] = t[n] = o), r;
                        },
                        wasCalled: function (t) {
                            return e[t].called;
                        },
                        getResponse: function (t) {
                            return e[t].data;
                        },
                        removeCallback: function (n) {
                            delete t[e[n].id], delete e[n];
                        },
                    };
                };
            },
            cr = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
            fr = { http: 80, https: 443, ftp: 21 },
            dr = e("$location"),
            hr = /^\s*[\\/]{2,}/,
            pr = {
                $$absUrl: "",
                $$html5: !1,
                $$replace: !1,
                absUrl: ye("$$absUrl"),
                url: function (t) {
                    if (v(t)) return this.$$url;
                    var e = cr.exec(t);
                    return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this;
                },
                protocol: ye("$$protocol"),
                host: ye("$$host"),
                port: ye("$$port"),
                path: be("$$path", function (t) {
                    return "/" === (t = null !== t ? t.toString() : "").charAt(0) ? t : "/" + t;
                }),
                search: function (t, e) {
                    switch (arguments.length) {
                        case 0:
                            return this.$$search;
                        case 1:
                            if (w(t) || k(t)) (t = t.toString()), (this.$$search = B(t));
                            else {
                                if (!y(t)) throw dr("isrcharg");
                                o((t = j(t, {})), function (e, n) {
                                    null == e && delete t[n];
                                }),
                                    (this.$$search = t);
                            }
                            break;
                        default:
                            v(e) || null === e ? delete this.$$search[t] : (this.$$search[t] = e);
                    }
                    return this.$$compose(), this;
                },
                hash: be("$$hash", function (t) {
                    return null !== t ? t.toString() : "";
                }),
                replace: function () {
                    return (this.$$replace = !0), this;
                },
            };
        o([$e, ve, ge], function (t) {
            (t.prototype = Object.create(pr)),
                (t.prototype.state = function (e) {
                    if (!arguments.length) return this.$$state;
                    if (t !== ge || !this.$$html5) throw dr("nostate");
                    return (this.$$state = v(e) ? null : e), (this.$$urlUpdatedByLocation = !0), this;
                });
        });
        var mr = e("$parse"),
            gr = {}.constructor.prototype.valueOf,
            vr = rt();
        o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (t) {
            vr[t] = !0;
        });
        var $r = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
            yr = function (t) {
                this.options = t;
            };
        yr.prototype = {
            constructor: yr,
            lex: function (t) {
                for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length; )
                    if ('"' === (t = this.text.charAt(this.index)) || "'" === t) this.readString(t);
                    else if (this.isNumber(t) || ("." === t && this.isNumber(this.peek()))) this.readNumber();
                    else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
                    else if (this.is(t, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: t }), this.index++;
                    else if (this.isWhitespace(t)) this.index++;
                    else {
                        var e = t + this.peek(),
                            n = e + this.peek(2),
                            i = vr[e],
                            r = vr[n];
                        vr[t] || i || r ? ((t = r ? n : i ? e : t), this.tokens.push({ index: this.index, text: t, operator: !0 }), (this.index += t.length)) : this.throwError("Unexpected next character ", this.index, this.index + 1);
                    }
                return this.tokens;
            },
            is: function (t, e) {
                return -1 !== e.indexOf(t);
            },
            peek: function (t) {
                return (t = t || 1), this.index + t < this.text.length && this.text.charAt(this.index + t);
            },
            isNumber: function (t) {
                return "0" <= t && "9" >= t && "string" == typeof t;
            },
            isWhitespace: function (t) {
                return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t;
            },
            isIdentifierStart: function (t) {
                return this.options.isIdentifierStart ? this.options.isIdentifierStart(t, this.codePointAt(t)) : this.isValidIdentifierStart(t);
            },
            isValidIdentifierStart: function (t) {
                return ("a" <= t && "z" >= t) || ("A" <= t && "Z" >= t) || "_" === t || "$" === t;
            },
            isIdentifierContinue: function (t) {
                return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(t, this.codePointAt(t)) : this.isValidIdentifierContinue(t);
            },
            isValidIdentifierContinue: function (t, e) {
                return this.isValidIdentifierStart(t, e) || this.isNumber(t);
            },
            codePointAt: function (t) {
                return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888;
            },
            peekMultichar: function () {
                var t = this.text.charAt(this.index),
                    e = this.peek();
                if (!e) return t;
                var n = t.charCodeAt(0),
                    i = e.charCodeAt(0);
                return 55296 <= n && 56319 >= n && 56320 <= i && 57343 >= i ? t + e : t;
            },
            isExpOperator: function (t) {
                return "-" === t || "+" === t || this.isNumber(t);
            },
            throwError: function (t, e, n) {
                throw ((n = n || this.index), (e = $(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n), mr("lexerr", t, e, this.text));
            },
            readNumber: function () {
                for (var t = "", e = this.index; this.index < this.text.length; ) {
                    var n = zn(this.text.charAt(this.index));
                    if ("." === n || this.isNumber(n)) t += n;
                    else {
                        var i = this.peek();
                        if ("e" === n && this.isExpOperator(i)) t += n;
                        else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" === t.charAt(t.length - 1)) t += n;
                        else {
                            if (!this.isExpOperator(n) || (i && this.isNumber(i)) || "e" !== t.charAt(t.length - 1)) break;
                            this.throwError("Invalid exponent");
                        }
                    }
                    this.index++;
                }
                this.tokens.push({ index: e, text: t, constant: !0, value: Number(t) });
            },
            readIdent: function () {
                var t = this.index;
                for (this.index += this.peekMultichar().length; this.index < this.text.length; ) {
                    var e = this.peekMultichar();
                    if (!this.isIdentifierContinue(e)) break;
                    this.index += e.length;
                }
                this.tokens.push({ index: t, text: this.text.slice(t, this.index), identifier: !0 });
            },
            readString: function (t) {
                var e = this.index;
                this.index++;
                for (var n = "", i = t, r = !1; this.index < this.text.length; ) {
                    var o = this.text.charAt(this.index);
                    i = i + o;
                    if (r)
                        "u" === o
                            ? ((r = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + r + "]"), (this.index += 4), (n += String.fromCharCode(parseInt(r, 16))))
                            : (n += $r[o] || o),
                            (r = !1);
                    else if ("\\" === o) r = !0;
                    else {
                        if (o === t) return this.index++, void this.tokens.push({ index: e, text: i, constant: !0, value: n });
                        n += o;
                    }
                    this.index++;
                }
                this.throwError("Unterminated quote", e);
            },
        };
        var br = function (t, e) {
            (this.lexer = t), (this.options = e);
        };
        (br.Program = "Program"),
            (br.ExpressionStatement = "ExpressionStatement"),
            (br.AssignmentExpression = "AssignmentExpression"),
            (br.ConditionalExpression = "ConditionalExpression"),
            (br.LogicalExpression = "LogicalExpression"),
            (br.BinaryExpression = "BinaryExpression"),
            (br.UnaryExpression = "UnaryExpression"),
            (br.CallExpression = "CallExpression"),
            (br.MemberExpression = "MemberExpression"),
            (br.Identifier = "Identifier"),
            (br.Literal = "Literal"),
            (br.ArrayExpression = "ArrayExpression"),
            (br.Property = "Property"),
            (br.ObjectExpression = "ObjectExpression"),
            (br.ThisExpression = "ThisExpression"),
            (br.LocalsExpression = "LocalsExpression"),
            (br.NGValueParameter = "NGValueParameter"),
            (br.prototype = {
                ast: function (t) {
                    return (this.text = t), (this.tokens = this.lexer.lex(t)), (t = this.program()), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t;
                },
                program: function () {
                    for (var t = []; ; ) if ((0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";"))) return { type: br.Program, body: t };
                },
                expressionStatement: function () {
                    return { type: br.ExpressionStatement, expression: this.filterChain() };
                },
                filterChain: function () {
                    for (var t = this.expression(); this.expect("|"); ) t = this.filter(t);
                    return t;
                },
                expression: function () {
                    return this.assignment();
                },
                assignment: function () {
                    var t = this.ternary();
                    if (this.expect("=")) {
                        if (!Ae(t)) throw mr("lval");
                        t = { type: br.AssignmentExpression, left: t, right: this.assignment(), operator: "=" };
                    }
                    return t;
                },
                ternary: function () {
                    var t,
                        e,
                        n = this.logicalOR();
                    return this.expect("?") && ((t = this.expression()), this.consume(":")) ? ((e = this.expression()), { type: br.ConditionalExpression, test: n, alternate: t, consequent: e }) : n;
                },
                logicalOR: function () {
                    for (var t = this.logicalAND(); this.expect("||"); ) t = { type: br.LogicalExpression, operator: "||", left: t, right: this.logicalAND() };
                    return t;
                },
                logicalAND: function () {
                    for (var t = this.equality(); this.expect("&&"); ) t = { type: br.LogicalExpression, operator: "&&", left: t, right: this.equality() };
                    return t;
                },
                equality: function () {
                    for (var t, e = this.relational(); (t = this.expect("==", "!=", "===", "!==")); ) e = { type: br.BinaryExpression, operator: t.text, left: e, right: this.relational() };
                    return e;
                },
                relational: function () {
                    for (var t, e = this.additive(); (t = this.expect("<", ">", "<=", ">=")); ) e = { type: br.BinaryExpression, operator: t.text, left: e, right: this.additive() };
                    return e;
                },
                additive: function () {
                    for (var t, e = this.multiplicative(); (t = this.expect("+", "-")); ) e = { type: br.BinaryExpression, operator: t.text, left: e, right: this.multiplicative() };
                    return e;
                },
                multiplicative: function () {
                    for (var t, e = this.unary(); (t = this.expect("*", "/", "%")); ) e = { type: br.BinaryExpression, operator: t.text, left: e, right: this.unary() };
                    return e;
                },
                unary: function () {
                    var t;
                    return (t = this.expect("+", "-", "!")) ? { type: br.UnaryExpression, operator: t.text, prefix: !0, argument: this.unary() } : this.primary();
                },
                primary: function () {
                    var t, e;
                    for (
                        this.expect("(")
                            ? ((t = this.filterChain()), this.consume(")"))
                            : this.expect("[")
                            ? (t = this.arrayDeclaration())
                            : this.expect("{")
                                ? (t = this.object())
                                : this.selfReferential.hasOwnProperty(this.peek().text)
                                    ? (t = j(this.selfReferential[this.consume().text]))
                                    : this.options.literals.hasOwnProperty(this.peek().text)
                                        ? (t = { type: br.Literal, value: this.options.literals[this.consume().text] })
                                        : this.peek().identifier
                                            ? (t = this.identifier())
                                            : this.peek().constant
                                                ? (t = this.constant())
                                                : this.throwError("not a primary expression", this.peek());
                        (e = this.expect("(", "[", "."));

                    )
                        "(" === e.text
                            ? ((t = { type: br.CallExpression, callee: t, arguments: this.parseArguments() }), this.consume(")"))
                            : "[" === e.text
                            ? ((t = { type: br.MemberExpression, object: t, property: this.expression(), computed: !0 }), this.consume("]"))
                            : "." === e.text
                                ? (t = { type: br.MemberExpression, object: t, property: this.identifier(), computed: !1 })
                                : this.throwError("IMPOSSIBLE");
                    return t;
                },
                filter: function (t) {
                    t = [t];
                    for (var e = { type: br.CallExpression, callee: this.identifier(), arguments: t, filter: !0 }; this.expect(":"); ) t.push(this.expression());
                    return e;
                },
                parseArguments: function () {
                    var t = [];
                    if (")" !== this.peekToken().text)
                        do {
                            t.push(this.filterChain());
                        } while (this.expect(","));
                    return t;
                },
                identifier: function () {
                    var t = this.consume();
                    return t.identifier || this.throwError("is not a valid identifier", t), { type: br.Identifier, name: t.text };
                },
                constant: function () {
                    return { type: br.Literal, value: this.consume().value };
                },
                arrayDeclaration: function () {
                    var t = [];
                    if ("]" !== this.peekToken().text)
                        do {
                            if (this.peek("]")) break;
                            t.push(this.expression());
                        } while (this.expect(","));
                    return this.consume("]"), { type: br.ArrayExpression, elements: t };
                },
                object: function () {
                    var t,
                        e = [];
                    if ("}" !== this.peekToken().text)
                        do {
                            if (this.peek("}")) break;
                            (t = { type: br.Property, kind: "init" }),
                                this.peek().constant
                                    ? ((t.key = this.constant()), (t.computed = !1), this.consume(":"), (t.value = this.expression()))
                                    : this.peek().identifier
                                    ? ((t.key = this.identifier()), (t.computed = !1), this.peek(":") ? (this.consume(":"), (t.value = this.expression())) : (t.value = t.key))
                                    : this.peek("[")
                                        ? (this.consume("["), (t.key = this.expression()), this.consume("]"), (t.computed = !0), this.consume(":"), (t.value = this.expression()))
                                        : this.throwError("invalid key", this.peek()),
                                e.push(t);
                        } while (this.expect(","));
                    return this.consume("}"), { type: br.ObjectExpression, properties: e };
                },
                throwError: function (t, e) {
                    throw mr("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index));
                },
                consume: function (t) {
                    if (0 === this.tokens.length) throw mr("ueoe", this.text);
                    var e = this.expect(t);
                    return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e;
                },
                peekToken: function () {
                    if (0 === this.tokens.length) throw mr("ueoe", this.text);
                    return this.tokens[0];
                },
                peek: function (t, e, n, i) {
                    return this.peekAhead(0, t, e, n, i);
                },
                peekAhead: function (t, e, n, i, r) {
                    if (this.tokens.length > t) {
                        var o = (t = this.tokens[t]).text;
                        if (o === e || o === n || o === i || o === r || !(e || n || i || r)) return t;
                    }
                    return !1;
                },
                expect: function (t, e, n, i) {
                    return !!(t = this.peek(t, e, n, i)) && (this.tokens.shift(), t);
                },
                selfReferential: { this: { type: br.ThisExpression }, $locals: { type: br.LocalsExpression } },
            }),
            (De.prototype = {
                compile: function (t) {
                    var e = this;
                    (this.state = { nextId: 0, filters: {}, fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] }), Ee(t, e.$filter);
                    var n,
                        i = "";
                    return (
                        (this.stage = "assign"),
                        (n = Oe(t)) && ((this.state.computing = "assign"), (i = this.nextId()), this.recurse(n, i), this.return_(i), (i = "fn.assign=" + this.generateFunction("assign", "s,v,l"))),
                            (n = Se(t.body)),
                            (e.stage = "inputs"),
                            o(n, function (t, n) {
                                var i = "fn" + n;
                                (e.state[i] = { vars: [], body: [], own: {} }), (e.state.computing = i);
                                var r = e.nextId();
                                e.recurse(t, r), e.return_(r), e.state.inputs.push(i), (t.watchId = n);
                            }),
                            (this.state.computing = "fn"),
                            (this.stage = "main"),
                            this.recurse(t),
                            (t = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + i + this.watchFns() + "return fn;"),
                            (t = new Function("$filter", "getStringValue", "ifDefined", "plus", t)(this.$filter, xe, Ce, Te)),
                            (this.state = this.stage = void 0),
                            t
                    );
                },
                USE: "use",
                STRICT: "strict",
                watchFns: function () {
                    var t = [],
                        e = this.state.inputs,
                        n = this;
                    return (
                        o(e, function (e) {
                            t.push("var " + e + "=" + n.generateFunction(e, "s"));
                        }),
                        e.length && t.push("fn.inputs=[" + e.join(",") + "];"),
                            t.join("")
                    );
                },
                generateFunction: function (t, e) {
                    return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};";
                },
                filterPrefix: function () {
                    var t = [],
                        e = this;
                    return (
                        o(this.state.filters, function (n, i) {
                            t.push(n + "=$filter(" + e.escape(i) + ")");
                        }),
                            t.length ? "var " + t.join(",") + ";" : ""
                    );
                },
                varsPrefix: function (t) {
                    return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : "";
                },
                body: function (t) {
                    return this.state[t].body.join("");
                },
                recurse: function (t, e, n, i, r, a) {
                    var s,
                        u,
                        l,
                        c,
                        f,
                        d = this;
                    if (((i = i || h), !a && $(t.watchId))) (e = e || this.nextId()), this.if_("i", this.lazyAssign(e, this.computedMember("i", t.watchId)), this.lazyRecurse(t, e, n, i, r, !0));
                    else
                        switch (t.type) {
                            case br.Program:
                                o(t.body, function (e, n) {
                                    d.recurse(e.expression, void 0, void 0, function (t) {
                                        u = t;
                                    }),
                                        n !== t.body.length - 1 ? d.current().body.push(u, ";") : d.return_(u);
                                });
                                break;
                            case br.Literal:
                                (c = this.escape(t.value)), this.assign(e, c), i(e || c);
                                break;
                            case br.UnaryExpression:
                                this.recurse(t.argument, void 0, void 0, function (t) {
                                    u = t;
                                }),
                                    (c = t.operator + "(" + this.ifDefined(u, 0) + ")"),
                                    this.assign(e, c),
                                    i(c);
                                break;
                            case br.BinaryExpression:
                                this.recurse(t.left, void 0, void 0, function (t) {
                                    s = t;
                                }),
                                    this.recurse(t.right, void 0, void 0, function (t) {
                                        u = t;
                                    }),
                                    (c = "+" === t.operator ? this.plus(s, u) : "-" === t.operator ? this.ifDefined(s, 0) + t.operator + this.ifDefined(u, 0) : "(" + s + ")" + t.operator + "(" + u + ")"),
                                    this.assign(e, c),
                                    i(c);
                                break;
                            case br.LogicalExpression:
                                (e = e || this.nextId()), d.recurse(t.left, e), d.if_("&&" === t.operator ? e : d.not(e), d.lazyRecurse(t.right, e)), i(e);
                                break;
                            case br.ConditionalExpression:
                                (e = e || this.nextId()), d.recurse(t.test, e), d.if_(e, d.lazyRecurse(t.alternate, e), d.lazyRecurse(t.consequent, e)), i(e);
                                break;
                            case br.Identifier:
                                (e = e || this.nextId()),
                                n && ((n.context = "inputs" === d.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", t.name) + "?l:s")), (n.computed = !1), (n.name = t.name)),
                                    d.if_(
                                        "inputs" === d.stage || d.not(d.getHasOwnProperty("l", t.name)),
                                        function () {
                                            d.if_("inputs" === d.stage || "s", function () {
                                                r && 1 !== r && d.if_(d.isNull(d.nonComputedMember("s", t.name)), d.lazyAssign(d.nonComputedMember("s", t.name), "{}")), d.assign(e, d.nonComputedMember("s", t.name));
                                            });
                                        },
                                        e && d.lazyAssign(e, d.nonComputedMember("l", t.name))
                                    ),
                                    i(e);
                                break;
                            case br.MemberExpression:
                                (s = (n && (n.context = this.nextId())) || this.nextId()),
                                    (e = e || this.nextId()),
                                    d.recurse(
                                        t.object,
                                        s,
                                        void 0,
                                        function () {
                                            d.if_(
                                                d.notNull(s),
                                                function () {
                                                    t.computed
                                                        ? ((u = d.nextId()),
                                                            d.recurse(t.property, u),
                                                            d.getStringValue(u),
                                                        r && 1 !== r && d.if_(d.not(d.computedMember(s, u)), d.lazyAssign(d.computedMember(s, u), "{}")),
                                                            (c = d.computedMember(s, u)),
                                                            d.assign(e, c),
                                                        n && ((n.computed = !0), (n.name = u)))
                                                        : (r && 1 !== r && d.if_(d.isNull(d.nonComputedMember(s, t.property.name)), d.lazyAssign(d.nonComputedMember(s, t.property.name), "{}")),
                                                            (c = d.nonComputedMember(s, t.property.name)),
                                                            d.assign(e, c),
                                                        n && ((n.computed = !1), (n.name = t.property.name)));
                                                },
                                                function () {
                                                    d.assign(e, "undefined");
                                                }
                                            ),
                                                i(e);
                                        },
                                        !!r
                                    );
                                break;
                            case br.CallExpression:
                                (e = e || this.nextId()),
                                    t.filter
                                        ? ((u = d.filter(t.callee.name)),
                                            (l = []),
                                            o(t.arguments, function (t) {
                                                var e = d.nextId();
                                                d.recurse(t, e), l.push(e);
                                            }),
                                            (c = u + "(" + l.join(",") + ")"),
                                            d.assign(e, c),
                                            i(e))
                                        : ((u = d.nextId()),
                                            (s = {}),
                                            (l = []),
                                            d.recurse(t.callee, u, s, function () {
                                                d.if_(
                                                    d.notNull(u),
                                                    function () {
                                                        o(t.arguments, function (e) {
                                                            d.recurse(e, t.constant ? void 0 : d.nextId(), void 0, function (t) {
                                                                l.push(t);
                                                            });
                                                        }),
                                                            (c = s.name ? d.member(s.context, s.name, s.computed) + "(" + l.join(",") + ")" : u + "(" + l.join(",") + ")"),
                                                            d.assign(e, c);
                                                    },
                                                    function () {
                                                        d.assign(e, "undefined");
                                                    }
                                                ),
                                                    i(e);
                                            }));
                                break;
                            case br.AssignmentExpression:
                                (u = this.nextId()),
                                    (s = {}),
                                    this.recurse(
                                        t.left,
                                        void 0,
                                        s,
                                        function () {
                                            d.if_(d.notNull(s.context), function () {
                                                d.recurse(t.right, u), (c = d.member(s.context, s.name, s.computed) + t.operator + u), d.assign(e, c), i(e || c);
                                            });
                                        },
                                        1
                                    );
                                break;
                            case br.ArrayExpression:
                                (l = []),
                                    o(t.elements, function (e) {
                                        d.recurse(e, t.constant ? void 0 : d.nextId(), void 0, function (t) {
                                            l.push(t);
                                        });
                                    }),
                                    (c = "[" + l.join(",") + "]"),
                                    this.assign(e, c),
                                    i(e || c);
                                break;
                            case br.ObjectExpression:
                                (l = []),
                                    (f = !1),
                                    o(t.properties, function (t) {
                                        t.computed && (f = !0);
                                    }),
                                    f
                                        ? ((e = e || this.nextId()),
                                            this.assign(e, "{}"),
                                            o(t.properties, function (t) {
                                                t.computed ? ((s = d.nextId()), d.recurse(t.key, s)) : (s = t.key.type === br.Identifier ? t.key.name : "" + t.key.value),
                                                    (u = d.nextId()),
                                                    d.recurse(t.value, u),
                                                    d.assign(d.member(e, s, t.computed), u);
                                            }))
                                        : (o(t.properties, function (e) {
                                            d.recurse(e.value, t.constant ? void 0 : d.nextId(), void 0, function (t) {
                                                l.push(d.escape(e.key.type === br.Identifier ? e.key.name : "" + e.key.value) + ":" + t);
                                            });
                                        }),
                                            (c = "{" + l.join(",") + "}"),
                                            this.assign(e, c)),
                                    i(e || c);
                                break;
                            case br.ThisExpression:
                                this.assign(e, "s"), i(e || "s");
                                break;
                            case br.LocalsExpression:
                                this.assign(e, "l"), i(e || "l");
                                break;
                            case br.NGValueParameter:
                                this.assign(e, "v"), i(e || "v");
                        }
                },
                getHasOwnProperty: function (t, e) {
                    var n = t + "." + e,
                        i = this.current().own;
                    return i.hasOwnProperty(n) || (i[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), i[n];
                },
                assign: function (t, e) {
                    if (t) return this.current().body.push(t, "=", e, ";"), t;
                },
                filter: function (t) {
                    return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t];
                },
                ifDefined: function (t, e) {
                    return "ifDefined(" + t + "," + this.escape(e) + ")";
                },
                plus: function (t, e) {
                    return "plus(" + t + "," + e + ")";
                },
                return_: function (t) {
                    this.current().body.push("return ", t, ";");
                },
                if_: function (t, e, n) {
                    if (!0 === t) e();
                    else {
                        var i = this.current().body;
                        i.push("if(", t, "){"), e(), i.push("}"), n && (i.push("else{"), n(), i.push("}"));
                    }
                },
                not: function (t) {
                    return "!(" + t + ")";
                },
                isNull: function (t) {
                    return t + "==null";
                },
                notNull: function (t) {
                    return t + "!=null";
                },
                nonComputedMember: function (t, e) {
                    return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? t + "." + e : t + '["' + e.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]';
                },
                computedMember: function (t, e) {
                    return t + "[" + e + "]";
                },
                member: function (t, e, n) {
                    return n ? this.computedMember(t, e) : this.nonComputedMember(t, e);
                },
                getStringValue: function (t) {
                    this.assign(t, "getStringValue(" + t + ")");
                },
                lazyRecurse: function (t, e, n, i, r, o) {
                    var a = this;
                    return function () {
                        a.recurse(t, e, n, i, r, o);
                    };
                },
                lazyAssign: function (t, e) {
                    var n = this;
                    return function () {
                        n.assign(t, e);
                    };
                },
                stringEscapeRegex: /[^ a-zA-Z0-9]/g,
                stringEscapeFn: function (t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
                },
                escape: function (t) {
                    if (w(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                    if (k(t)) return t.toString();
                    if (!0 === t) return "true";
                    if (!1 === t) return "false";
                    if (null === t) return "null";
                    if (void 0 === t) return "undefined";
                    throw mr("esc");
                },
                nextId: function (t, e) {
                    var n = "v" + this.state.nextId++;
                    return t || this.current().vars.push(n + (e ? "=" + e : "")), n;
                },
                current: function () {
                    return this.state[this.state.computing];
                },
            }),
            (Me.prototype = {
                compile: function (t) {
                    var e,
                        n,
                        i,
                        r = this;
                    Ee(t, r.$filter),
                    (e = Oe(t)) && (n = this.recurse(e)),
                    (e = Se(t.body)) &&
                    ((i = []),
                        o(e, function (t, e) {
                            var n = r.recurse(t);
                            (t.input = n), i.push(n), (t.watchId = e);
                        }));
                    var a = [];
                    return (
                        o(t.body, function (t) {
                            a.push(r.recurse(t.expression));
                        }),
                            (t =
                                0 === t.body.length
                                    ? h
                                    : 1 === t.body.length
                                    ? a[0]
                                    : function (t, e) {
                                        var n;
                                        return (
                                            o(a, function (i) {
                                                n = i(t, e);
                                            }),
                                                n
                                        );
                                    }),
                        n &&
                        (t.assign = function (t, e, i) {
                            return n(t, i, e);
                        }),
                        i && (t.inputs = i),
                            t
                    );
                },
                recurse: function (t, e, n) {
                    var i,
                        r,
                        a,
                        s = this;
                    if (t.input) return this.inputs(t.input, t.watchId);
                    switch (t.type) {
                        case br.Literal:
                            return this.value(t.value, e);
                        case br.UnaryExpression:
                            return (r = this.recurse(t.argument)), this["unary" + t.operator](r, e);
                        case br.BinaryExpression:
                        case br.LogicalExpression:
                            return (i = this.recurse(t.left)), (r = this.recurse(t.right)), this["binary" + t.operator](i, r, e);
                        case br.ConditionalExpression:
                            return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);
                        case br.Identifier:
                            return s.identifier(t.name, e, n);
                        case br.MemberExpression:
                            return (i = this.recurse(t.object, !1, !!n)), t.computed || (r = t.property.name), t.computed && (r = this.recurse(t.property)), t.computed ? this.computedMember(i, r, e, n) : this.nonComputedMember(i, r, e, n);
                        case br.CallExpression:
                            return (
                                (a = []),
                                    o(t.arguments, function (t) {
                                        a.push(s.recurse(t));
                                    }),
                                t.filter && (r = this.$filter(t.callee.name)),
                                t.filter || (r = this.recurse(t.callee, !0)),
                                    t.filter
                                        ? function (t, n, i, o) {
                                            for (var s = [], u = 0; u < a.length; ++u) s.push(a[u](t, n, i, o));
                                            return (t = r.apply(void 0, s, o)), e ? { context: void 0, name: void 0, value: t } : t;
                                        }
                                        : function (t, n, i, o) {
                                            var s,
                                                u = r(t, n, i, o);
                                            if (null != u.value) {
                                                s = [];
                                                for (var l = 0; l < a.length; ++l) s.push(a[l](t, n, i, o));
                                                s = u.value.apply(u.context, s);
                                            }
                                            return e ? { value: s } : s;
                                        }
                            );
                        case br.AssignmentExpression:
                            return (
                                (i = this.recurse(t.left, !0, 1)),
                                    (r = this.recurse(t.right)),
                                    function (t, n, o, a) {
                                        var s = i(t, n, o, a);
                                        return (t = r(t, n, o, a)), (s.context[s.name] = t), e ? { value: t } : t;
                                    }
                            );
                        case br.ArrayExpression:
                            return (
                                (a = []),
                                    o(t.elements, function (t) {
                                        a.push(s.recurse(t));
                                    }),
                                    function (t, n, i, r) {
                                        for (var o = [], s = 0; s < a.length; ++s) o.push(a[s](t, n, i, r));
                                        return e ? { value: o } : o;
                                    }
                            );
                        case br.ObjectExpression:
                            return (
                                (a = []),
                                    o(t.properties, function (t) {
                                        t.computed
                                            ? a.push({ key: s.recurse(t.key), computed: !0, value: s.recurse(t.value) })
                                            : a.push({ key: t.key.type === br.Identifier ? t.key.name : "" + t.key.value, computed: !1, value: s.recurse(t.value) });
                                    }),
                                    function (t, n, i, r) {
                                        for (var o = {}, s = 0; s < a.length; ++s) a[s].computed ? (o[a[s].key(t, n, i, r)] = a[s].value(t, n, i, r)) : (o[a[s].key] = a[s].value(t, n, i, r));
                                        return e ? { value: o } : o;
                                    }
                            );
                        case br.ThisExpression:
                            return function (t) {
                                return e ? { value: t } : t;
                            };
                        case br.LocalsExpression:
                            return function (t, n) {
                                return e ? { value: n } : n;
                            };
                        case br.NGValueParameter:
                            return function (t, n, i) {
                                return e ? { value: i } : i;
                            };
                    }
                },
                "unary+": function (t, e) {
                    return function (n, i, r, o) {
                        return (n = $((n = t(n, i, r, o))) ? +n : 0), e ? { value: n } : n;
                    };
                },
                "unary-": function (t, e) {
                    return function (n, i, r, o) {
                        return (n = $((n = t(n, i, r, o))) ? -n : -0), e ? { value: n } : n;
                    };
                },
                "unary!": function (t, e) {
                    return function (n, i, r, o) {
                        return (n = !t(n, i, r, o)), e ? { value: n } : n;
                    };
                },
                "binary+": function (t, e, n) {
                    return function (i, r, o, a) {
                        var s = t(i, r, o, a);
                        return (s = Te(s, (i = e(i, r, o, a)))), n ? { value: s } : s;
                    };
                },
                "binary-": function (t, e, n) {
                    return function (i, r, o, a) {
                        var s = t(i, r, o, a);
                        return (i = e(i, r, o, a)), (s = ($(s) ? s : 0) - ($(i) ? i : 0)), n ? { value: s } : s;
                    };
                },
                "binary*": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) * e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary/": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) / e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary%": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) % e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary===": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) === e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary!==": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) !== e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary==": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) == e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary!=": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) != e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary<": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) < e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary>": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) > e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary<=": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) <= e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary>=": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) >= e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary&&": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) && e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "binary||": function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = t(i, r, o, a) || e(i, r, o, a)), n ? { value: i } : i;
                    };
                },
                "ternary?:": function (t, e, n, i) {
                    return function (r, o, a, s) {
                        return (r = t(r, o, a, s) ? e(r, o, a, s) : n(r, o, a, s)), i ? { value: r } : r;
                    };
                },
                value: function (t, e) {
                    return function () {
                        return e ? { context: void 0, name: void 0, value: t } : t;
                    };
                },
                identifier: function (t, e, n) {
                    return function (i, r, o, a) {
                        return (i = r && t in r ? r : i), n && 1 !== n && i && null == i[t] && (i[t] = {}), (r = i ? i[t] : void 0), e ? { context: i, name: t, value: r } : r;
                    };
                },
                computedMember: function (t, e, n, i) {
                    return function (r, o, a, s) {
                        var u,
                            l,
                            c = t(r, o, a, s);
                        return null != c && ((u = e(r, o, a, s)), (u += ""), i && 1 !== i && c && !c[u] && (c[u] = {}), (l = c[u])), n ? { context: c, name: u, value: l } : l;
                    };
                },
                nonComputedMember: function (t, e, n, i) {
                    return function (r, o, a, s) {
                        return (r = t(r, o, a, s)), i && 1 !== i && r && null == r[e] && (r[e] = {}), (o = null != r ? r[e] : void 0), n ? { context: r, name: e, value: o } : o;
                    };
                },
                inputs: function (t, e) {
                    return function (n, i, r, o) {
                        return o ? o[e] : t(n, i, r);
                    };
                },
            }),
            (je.prototype = {
                constructor: je,
                parse: function (t) {
                    t = this.ast.ast(t);
                    var e = this.astCompiler.compile(t);
                    return (
                        (e.literal = 0 === t.body.length || (1 === t.body.length && (t.body[0].expression.type === br.Literal || t.body[0].expression.type === br.ArrayExpression || t.body[0].expression.type === br.ObjectExpression))),
                            (e.constant = t.constant),
                            e
                    );
                },
            });
        var wr = e("$sce"),
            kr = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
            xr = /_([a-z])/g,
            Cr = e("$compile"),
            Tr = t.document.createElement("a"),
            Er = Xe(t.location.href);
        (Ye.$inject = ["$document"]), (Ze.$inject = ["$provide"]);
        var Sr = 22,
            Ar = ".",
            Or = "0";
        (rn.$inject = ["$locale"]), (on.$inject = ["$locale"]);
        var Dr = {
                yyyy: un("FullYear", 4, 0, !1, !0),
                yy: un("FullYear", 2, 0, !0, !0),
                y: un("FullYear", 1, 0, !1, !0),
                MMMM: ln("Month"),
                MMM: ln("Month", !0),
                MM: un("Month", 2, 1),
                M: un("Month", 1, 1),
                LLLL: ln("Month", !1, !0),
                dd: un("Date", 2),
                d: un("Date", 1),
                HH: un("Hours", 2),
                H: un("Hours", 1),
                hh: un("Hours", 2, -12),
                h: un("Hours", 1, -12),
                mm: un("Minutes", 2),
                m: un("Minutes", 1),
                ss: un("Seconds", 2),
                s: un("Seconds", 1),
                sss: un("Milliseconds", 3),
                EEEE: ln("Day"),
                EEE: ln("Day", !0),
                a: function (t, e) {
                    return 12 > t.getHours() ? e.AMPMS[0] : e.AMPMS[1];
                },
                Z: function (t, e, n) {
                    return (0 <= (t = -1 * n) ? "+" : "") + (sn(Math[0 < t ? "floor" : "ceil"](t / 60), 2) + sn(Math.abs(t % 60), 2));
                },
                ww: fn(2),
                w: fn(1),
                G: dn,
                GG: dn,
                GGG: dn,
                GGGG: function (t, e) {
                    return 0 >= t.getFullYear() ? e.ERANAMES[0] : e.ERANAMES[1];
                },
            },
            Mr = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
            jr = /^-?\d+$/;
        hn.$inject = ["$locale"];
        var Nr = m(zn),
            Ir = m(Wn);
        vn.$inject = ["$parse"];
        var Lr = m({
                restrict: "E",
                compile: function (t, e) {
                    if (!e.href && !e.xlinkHref)
                        return function (t, e) {
                            if ("a" === e[0].nodeName.toLowerCase()) {
                                var n = "[object SVGAnimatedString]" === Kn.call(e.prop("href")) ? "xlink:href" : "href";
                                e.on("click", function (t) {
                                    e.attr(n) || t.preventDefault();
                                });
                            }
                        };
                },
            }),
            Pr = {};
        o(Di, function (t, e) {
            function n(t, n, r) {
                t.$watch(r[i], function (t) {
                    r.$set(e, !!t);
                });
            }
            if ("multiple" !== t) {
                var i = Bt("ng-" + e),
                    r = n;
                "checked" === t &&
                (r = function (t, e, r) {
                    r.ngModel !== r[i] && n(t, 0, r);
                }),
                    (Pr[i] = function () {
                        return { restrict: "A", priority: 100, link: r };
                    });
            }
        }),
            o(ji, function (t, e) {
                Pr[e] = function () {
                    return {
                        priority: 100,
                        link: function (t, n, i) {
                            "ngPattern" === e && "/" === i.ngPattern.charAt(0) && (n = i.ngPattern.match(_n))
                                ? i.$set("ngPattern", new RegExp(n[1], n[2]))
                                : t.$watch(i[e], function (t) {
                                    i.$set(e, t);
                                });
                        },
                    };
                };
            }),
            o(["src", "srcset", "href"], function (t) {
                var e = Bt("ng-" + t);
                Pr[e] = function () {
                    return {
                        priority: 99,
                        link: function (n, i, r) {
                            var o = t,
                                a = t;
                            "href" === t && "[object SVGAnimatedString]" === Kn.call(i.prop("href")) && ((a = "xlinkHref"), (r.$attr[a] = "xlink:href"), (o = null)),
                                r.$observe(e, function (e) {
                                    e ? (r.$set(a, e), qn && o && i.prop(o, r[a])) : "href" === t && r.$set(a, null);
                                });
                        },
                    };
                };
            });
        var Ur = {
            $addControl: h,
            $$renameControl: function (t, e) {
                t.$name = e;
            },
            $removeControl: h,
            $setValidity: h,
            $setDirty: h,
            $setPristine: h,
            $setSubmitted: h,
        };
        (yn.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"]),
            (yn.prototype = {
                $rollbackViewValue: function () {
                    o(this.$$controls, function (t) {
                        t.$rollbackViewValue();
                    });
                },
                $commitViewValue: function () {
                    o(this.$$controls, function (t) {
                        t.$commitViewValue();
                    });
                },
                $addControl: function (t) {
                    et(t.$name, "input"), this.$$controls.push(t), t.$name && (this[t.$name] = t), (t.$$parentForm = this);
                },
                $$renameControl: function (t, e) {
                    var n = t.$name;
                    this[n] === t && delete this[n], (this[e] = t), (t.$name = e);
                },
                $removeControl: function (t) {
                    t.$name && this[t.$name] === t && delete this[t.$name],
                        o(
                            this.$pending,
                            function (e, n) {
                                this.$setValidity(n, null, t);
                            },
                            this
                        ),
                        o(
                            this.$error,
                            function (e, n) {
                                this.$setValidity(n, null, t);
                            },
                            this
                        ),
                        o(
                            this.$$success,
                            function (e, n) {
                                this.$setValidity(n, null, t);
                            },
                            this
                        ),
                        M(this.$$controls, t),
                        (t.$$parentForm = Ur);
                },
                $setDirty: function () {
                    this.$$animate.removeClass(this.$$element, bo), this.$$animate.addClass(this.$$element, wo), (this.$dirty = !0), (this.$pristine = !1), this.$$parentForm.$setDirty();
                },
                $setPristine: function () {
                    this.$$animate.setClass(this.$$element, bo, wo + " ng-submitted"),
                        (this.$dirty = !1),
                        (this.$pristine = !0),
                        (this.$submitted = !1),
                        o(this.$$controls, function (t) {
                            t.$setPristine();
                        });
                },
                $setUntouched: function () {
                    o(this.$$controls, function (t) {
                        t.$setUntouched();
                    });
                },
                $setSubmitted: function () {
                    this.$$animate.addClass(this.$$element, "ng-submitted"), (this.$submitted = !0), this.$$parentForm.$setSubmitted();
                },
            }),
            wn({
                clazz: yn,
                set: function (t, e, n) {
                    var i = t[e];
                    i ? -1 === i.indexOf(n) && i.push(n) : (t[e] = [n]);
                },
                unset: function (t, e, n) {
                    var i = t[e];
                    i && (M(i, n), 0 === i.length && delete t[e]);
                },
            });
        var qr = function (t) {
                return [
                    "$timeout",
                    "$parse",
                    function (e, n) {
                        function i(t) {
                            return "" === t ? n('this[""]').assign : n(t).assign || h;
                        }
                        return {
                            name: "form",
                            restrict: t ? "EAC" : "E",
                            require: ["form", "^^?form"],
                            controller: yn,
                            compile: function (n, r) {
                                n.addClass(bo).addClass($o);
                                var o = r.name ? "name" : !(!t || !r.ngForm) && "ngForm";
                                return {
                                    pre: function (t, n, r, a) {
                                        var s = a[0];
                                        if (!("action" in r)) {
                                            var u = function (e) {
                                                t.$apply(function () {
                                                    s.$commitViewValue(), s.$setSubmitted();
                                                }),
                                                    e.preventDefault();
                                            };
                                            n[0].addEventListener("submit", u),
                                                n.on("$destroy", function () {
                                                    e(
                                                        function () {
                                                            n[0].removeEventListener("submit", u);
                                                        },
                                                        0,
                                                        !1
                                                    );
                                                });
                                        }
                                        (a[1] || s.$$parentForm).$addControl(s);
                                        var c = o ? i(s.$name) : h;
                                        o &&
                                        (c(t, s),
                                            r.$observe(o, function (e) {
                                                s.$name !== e && (c(t, void 0), s.$$parentForm.$$renameControl(s, e), (c = i(s.$name))(t, s));
                                            })),
                                            n.on("$destroy", function () {
                                                s.$$parentForm.$removeControl(s), c(t, void 0), l(s, Ur);
                                            });
                                    },
                                };
                            },
                        };
                    },
                ];
            },
            Rr = qr(),
            Vr = qr(!0),
            Hr = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
            _r = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
            Fr = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
            Br = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
            zr = /^(\d{4,})-(\d{2})-(\d{2})$/,
            Wr = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            Gr = /^(\d{4,})-W(\d\d)$/,
            Xr = /^(\d{4,})-(\d\d)$/,
            Jr = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            Kr = rt();
        o(["date", "datetime-local", "month", "time", "week"], function (t) {
            Kr[t] = !0;
        });
        var Yr = {
                text: function (t, e, n, i, r, o) {
                    Cn(0, e, n, i, r, o), xn(i);
                },
                date: En("date", zr, Tn(zr, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                "datetime-local": En("datetimelocal", Wr, Tn(Wr, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
                time: En("time", Jr, Tn(Jr, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                week: En(
                    "week",
                    Gr,
                    function (t, e) {
                        if (x(t)) return t;
                        if (w(t)) {
                            Gr.lastIndex = 0;
                            var n = Gr.exec(t);
                            if (n) {
                                var i = +n[1],
                                    r = +n[2],
                                    o = (n = 0),
                                    a = 0,
                                    s = 0,
                                    u = cn(i);
                                r = 7 * (r - 1);
                                return e && ((n = e.getHours()), (o = e.getMinutes()), (a = e.getSeconds()), (s = e.getMilliseconds())), new Date(i, 0, u.getDate() + r, n, o, a, s);
                            }
                        }
                        return NaN;
                    },
                    "yyyy-Www"
                ),
                month: En("month", Xr, Tn(Xr, ["yyyy", "MM"]), "yyyy-MM"),
                number: function (t, e, n, i, r, o) {
                    var a, s, u;
                    (Sn(0, e, 0, i),
                        An(i),
                        Cn(0, e, n, i, r, o),
                    ($(n.min) || n.ngMin) &&
                    ((i.$validators.min = function (t) {
                        return i.$isEmpty(t) || v(a) || t >= a;
                    }),
                        n.$observe("min", function (t) {
                            (a = On(t)), i.$validate();
                        })),
                    ($(n.max) || n.ngMax) &&
                    ((i.$validators.max = function (t) {
                        return i.$isEmpty(t) || v(s) || t <= s;
                    }),
                        n.$observe("max", function (t) {
                            (s = On(t)), i.$validate();
                        })),
                    $(n.step) || n.ngStep) &&
                    ((i.$validators.step = function (t, e) {
                        return i.$isEmpty(e) || v(u) || Mn(e, a || 0, u);
                    }),
                        n.$observe("step", function (t) {
                            (u = On(t)), i.$validate();
                        }));
                },
                url: function (t, e, n, i, r, o) {
                    Cn(0, e, n, i, r, o),
                        xn(i),
                        (i.$$parserName = "url"),
                        (i.$validators.url = function (t, e) {
                            var n = t || e;
                            return i.$isEmpty(n) || _r.test(n);
                        });
                },
                email: function (t, e, n, i, r, o) {
                    Cn(0, e, n, i, r, o),
                        xn(i),
                        (i.$$parserName = "email"),
                        (i.$validators.email = function (t, e) {
                            var n = t || e;
                            return i.$isEmpty(n) || Fr.test(n);
                        });
                },
                radio: function (t, e, n, i) {
                    var r = !n.ngTrim || "false" !== ai(n.ngTrim);
                    v(n.name) && e.attr("name", ++ti),
                        e.on("click", function (t) {
                            var o;
                            e[0].checked && ((o = n.value), r && (o = ai(o)), i.$setViewValue(o, t && t.type));
                        }),
                        (i.$render = function () {
                            var t = n.value;
                            r && (t = ai(t)), (e[0].checked = t === i.$viewValue);
                        }),
                        n.$observe("value", i.$render);
                },
                range: function (t, e, n, i, r, o) {
                    function a(t, i) {
                        e.attr(t, n[t]), n.$observe(t, i);
                    }
                    Sn(0, e, 0, i), An(i), Cn(0, e, n, i, r, o);
                    var s = i.$$hasNativeValidators && "range" === e[0].type,
                        u = s ? 0 : void 0,
                        l = s ? 100 : void 0,
                        c = s ? 1 : void 0,
                        f = e[0].validity;
                    (t = $(n.min)), (r = $(n.max)), (o = $(n.step));
                    var d = i.$render;
                    (i.$render =
                        s && $(f.rangeUnderflow) && $(f.rangeOverflow)
                            ? function () {
                                d(), i.$setViewValue(e.val());
                            }
                            : d),
                    t &&
                    ((i.$validators.min = s
                        ? function () {
                            return !0;
                        }
                        : function (t, e) {
                            return i.$isEmpty(e) || v(u) || e >= u;
                        }),
                        a("min", function (t) {
                            (u = On(t)), ei(i.$modelValue) || (s ? ((t = e.val()), u > t && ((t = u), e.val(t)), i.$setViewValue(t)) : i.$validate());
                        })),
                    r &&
                    ((i.$validators.max = s
                        ? function () {
                            return !0;
                        }
                        : function (t, e) {
                            return i.$isEmpty(e) || v(l) || e <= l;
                        }),
                        a("max", function (t) {
                            (l = On(t)), ei(i.$modelValue) || (s ? ((t = e.val()), l < t && (e.val(l), (t = l < u ? u : l)), i.$setViewValue(t)) : i.$validate());
                        })),
                    o &&
                    ((i.$validators.step = s
                        ? function () {
                            return !f.stepMismatch;
                        }
                        : function (t, e) {
                            return i.$isEmpty(e) || v(c) || Mn(e, u || 0, c);
                        }),
                        a("step", function (t) {
                            (c = On(t)), ei(i.$modelValue) || (s && i.$viewValue !== e.val() ? i.$setViewValue(e.val()) : i.$validate());
                        }));
                },
                checkbox: function (t, e, n, i, r, o, a, s) {
                    var u = jn(s, t, "ngTrueValue", n.ngTrueValue, !0),
                        l = jn(s, t, "ngFalseValue", n.ngFalseValue, !1);
                    e.on("click", function (t) {
                        i.$setViewValue(e[0].checked, t && t.type);
                    }),
                        (i.$render = function () {
                            e[0].checked = i.$viewValue;
                        }),
                        (i.$isEmpty = function (t) {
                            return !1 === t;
                        }),
                        i.$formatters.push(function (t) {
                            return I(t, u);
                        }),
                        i.$parsers.push(function (t) {
                            return t ? u : l;
                        });
                },
                hidden: h,
                button: h,
                submit: h,
                reset: h,
                file: h,
            },
            Qr = [
                "$browser",
                "$sniffer",
                "$filter",
                "$parse",
                function (t, e, n, i) {
                    return {
                        restrict: "E",
                        require: ["?ngModel"],
                        link: {
                            pre: function (r, o, a, s) {
                                s[0] && (Yr[zn(a.type)] || Yr.text)(r, o, a, s[0], e, t, n, i);
                            },
                        },
                    };
                },
            ],
            Zr = /^(true|false|\d+)$/,
            to = function () {
                function t(t, e, n) {
                    var i = $(n) ? n : 9 === qn ? "" : null;
                    t.prop("value", i), e.$set("value", n);
                }
                return {
                    restrict: "A",
                    priority: 100,
                    compile: function (e, n) {
                        return Zr.test(n.ngValue)
                            ? function (e, n, i) {
                                t(n, i, (e = e.$eval(i.ngValue)));
                            }
                            : function (e, n, i) {
                                e.$watch(i.ngValue, function (e) {
                                    t(n, i, e);
                                });
                            };
                    },
                };
            },
            eo = [
                "$compile",
                function (t) {
                    return {
                        restrict: "AC",
                        compile: function (e) {
                            return (
                                t.$$addBindingClass(e),
                                    function (e, n, i) {
                                        t.$$addBindingInfo(n, i.ngBind),
                                            (n = n[0]),
                                            e.$watch(i.ngBind, function (t) {
                                                n.textContent = ot(t);
                                            });
                                    }
                            );
                        },
                    };
                },
            ],
            no = [
                "$interpolate",
                "$compile",
                function (t, e) {
                    return {
                        compile: function (n) {
                            return (
                                e.$$addBindingClass(n),
                                    function (n, i, r) {
                                        (n = t(i.attr(r.$attr.ngBindTemplate))),
                                            e.$$addBindingInfo(i, n.expressions),
                                            (i = i[0]),
                                            r.$observe("ngBindTemplate", function (t) {
                                                i.textContent = v(t) ? "" : t;
                                            });
                                    }
                            );
                        },
                    };
                },
            ],
            io = [
                "$sce",
                "$parse",
                "$compile",
                function (t, e, n) {
                    return {
                        restrict: "A",
                        compile: function (i, r) {
                            var o = e(r.ngBindHtml),
                                a = e(r.ngBindHtml, function (e) {
                                    return t.valueOf(e);
                                });
                            return (
                                n.$$addBindingClass(i),
                                    function (e, i, r) {
                                        n.$$addBindingInfo(i, r.ngBindHtml),
                                            e.$watch(a, function () {
                                                var n = o(e);
                                                i.html(t.getTrustedHtml(n) || "");
                                            });
                                    }
                            );
                        },
                    };
                },
            ],
            ro = m({
                restrict: "A",
                require: "ngModel",
                link: function (t, e, n, i) {
                    i.$viewChangeListeners.push(function () {
                        t.$eval(n.ngChange);
                    });
                },
            }),
            oo = Nn("", !0),
            ao = Nn("Odd", 0),
            so = Nn("Even", 1),
            uo = $n({
                compile: function (t, e) {
                    e.$set("ngCloak", void 0), t.removeClass("ng-cloak");
                },
            }),
            lo = [
                function () {
                    return { restrict: "A", scope: !0, controller: "@", priority: 500 };
                },
            ],
            co = {},
            fo = { blur: !0, focus: !0 };
        o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
            var e = Bt("ng-" + t);
            co[e] = [
                "$parse",
                "$rootScope",
                function (n, i) {
                    return {
                        restrict: "A",
                        compile: function (r, o) {
                            var a = n(o[e]);
                            return function (e, n) {
                                n.on(t, function (n) {
                                    var r = function () {
                                        a(e, { $event: n });
                                    };
                                    fo[t] && i.$$phase ? e.$evalAsync(r) : e.$apply(r);
                                });
                            };
                        },
                    };
                },
            ];
        });
        var ho = [
                "$animate",
                "$compile",
                function (t, e) {
                    return {
                        multiElement: !0,
                        transclude: "element",
                        priority: 600,
                        terminal: !0,
                        restrict: "A",
                        $$tlb: !0,
                        link: function (n, i, r, o, a) {
                            var s, u, l;
                            n.$watch(r.ngIf, function (n) {
                                n
                                    ? u ||
                                    a(function (n, o) {
                                        (u = o), (n[n.length++] = e.$$createComment("end ngIf", r.ngIf)), (s = { clone: n }), t.enter(n, i.parent(), i);
                                    })
                                    : (l && (l.remove(), (l = null)),
                                    u && (u.$destroy(), (u = null)),
                                    s &&
                                    ((l = it(s.clone)),
                                        t.leave(l).done(function (t) {
                                            !1 !== t && (l = null);
                                        }),
                                        (s = null)));
                            });
                        },
                    };
                },
            ],
            po = [
                "$templateRequest",
                "$anchorScroll",
                "$animate",
                function (t, e, n) {
                    return {
                        restrict: "ECA",
                        priority: 400,
                        terminal: !0,
                        transclude: "element",
                        controller: Zn.noop,
                        compile: function (i, r) {
                            var o = r.ngInclude || r.src,
                                a = r.onload || "",
                                s = r.autoscroll;
                            return function (i, r, u, l, c) {
                                var f,
                                    d,
                                    h,
                                    p = 0,
                                    m = function () {
                                        d && (d.remove(), (d = null)),
                                        f && (f.$destroy(), (f = null)),
                                        h &&
                                        (n.leave(h).done(function (t) {
                                            !1 !== t && (d = null);
                                        }),
                                            (d = h),
                                            (h = null));
                                    };
                                i.$watch(o, function (o) {
                                    var u = function (t) {
                                            !1 === t || !$(s) || (s && !i.$eval(s)) || e();
                                        },
                                        d = ++p;
                                    o
                                        ? (t(o, !0).then(
                                        function (t) {
                                            if (!i.$$destroyed && d === p) {
                                                var e = i.$new();
                                                (l.template = t),
                                                    (t = c(e, function (t) {
                                                        m(), n.enter(t, null, r).done(u);
                                                    })),
                                                    (h = t),
                                                    (f = e).$emit("$includeContentLoaded", o),
                                                    i.$eval(a);
                                            }
                                        },
                                        function () {
                                            i.$$destroyed || d !== p || (m(), i.$emit("$includeContentError", o));
                                        }
                                        ),
                                            i.$emit("$includeContentRequested", o))
                                        : (m(), (l.template = null));
                                });
                            };
                        },
                    };
                },
            ],
            mo = [
                "$compile",
                function (e) {
                    return {
                        restrict: "ECA",
                        priority: -400,
                        require: "ngInclude",
                        link: function (n, i, r, o) {
                            Kn.call(i[0]).match(/SVG/)
                                ? (i.empty(),
                                    e(ft(o.template, t.document).childNodes)(
                                        n,
                                        function (t) {
                                            i.append(t);
                                        },
                                        { futureParentElement: i }
                                    ))
                                : (i.html(o.template), e(i.contents())(n));
                        },
                    };
                },
            ],
            go = $n({
                priority: 450,
                compile: function () {
                    return {
                        pre: function (t, e, n) {
                            t.$eval(n.ngInit);
                        },
                    };
                },
            }),
            vo = function () {
                return {
                    restrict: "A",
                    priority: 100,
                    require: "ngModel",
                    link: function (t, e, n, i) {
                        var r = n.ngList || ", ",
                            a = "false" !== n.ngTrim,
                            s = a ? ai(r) : r;
                        i.$parsers.push(function (t) {
                            if (!v(t)) {
                                var e = [];
                                return (
                                    t &&
                                    o(t.split(s), function (t) {
                                        t && e.push(a ? ai(t) : t);
                                    }),
                                        e
                                );
                            }
                        }),
                            i.$formatters.push(function (t) {
                                if (ri(t)) return t.join(r);
                            }),
                            (i.$isEmpty = function (t) {
                                return !t || !t.length;
                            });
                    },
                };
            },
            $o = "ng-valid",
            yo = "ng-invalid",
            bo = "ng-pristine",
            wo = "ng-dirty",
            ko = e("ngModel");
        (In.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ")),
            (In.prototype = {
                $$initGetterSetters: function () {
                    if (this.$options.getOption("getterSetter")) {
                        var t = this.$$parse(this.$$attr.ngModel + "()"),
                            e = this.$$parse(this.$$attr.ngModel + "($$$p)");
                        (this.$$ngModelGet = function (e) {
                            var n = this.$$parsedNgModel(e);
                            return C(n) && (n = t(e)), n;
                        }),
                            (this.$$ngModelSet = function (t, n) {
                                C(this.$$parsedNgModel(t)) ? e(t, { $$$p: n }) : this.$$parsedNgModelAssign(t, n);
                            });
                    } else if (!this.$$parsedNgModel.assign) throw ko("nonassign", this.$$attr.ngModel, _(this.$$element));
                },
                $render: h,
                $isEmpty: function (t) {
                    return v(t) || "" === t || null === t || t != t;
                },
                $$updateEmptyClasses: function (t) {
                    this.$isEmpty(t)
                        ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty"))
                        : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"));
                },
                $setPristine: function () {
                    (this.$dirty = !1), (this.$pristine = !0), this.$$animate.removeClass(this.$$element, wo), this.$$animate.addClass(this.$$element, bo);
                },
                $setDirty: function () {
                    (this.$dirty = !0), (this.$pristine = !1), this.$$animate.removeClass(this.$$element, bo), this.$$animate.addClass(this.$$element, wo), this.$$parentForm.$setDirty();
                },
                $setUntouched: function () {
                    (this.$touched = !1), (this.$untouched = !0), this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched");
                },
                $setTouched: function () {
                    (this.$touched = !0), (this.$untouched = !1), this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched");
                },
                $rollbackViewValue: function () {
                    this.$$timeout.cancel(this.$$pendingDebounce), (this.$viewValue = this.$$lastCommittedViewValue), this.$render();
                },
                $validate: function () {
                    if (!ei(this.$modelValue)) {
                        var t = this.$$lastCommittedViewValue,
                            e = this.$$rawModelValue,
                            n = this.$valid,
                            i = this.$modelValue,
                            r = this.$options.getOption("allowInvalid"),
                            o = this;
                        this.$$runValidators(e, t, function (t) {
                            r || n === t || ((o.$modelValue = t ? e : void 0), o.$modelValue !== i && o.$$writeModelToScope());
                        });
                    }
                },
                $$runValidators: function (t, e, n) {
                    function i(t, e) {
                        c === f.$$currentValidationRunId && f.$setValidity(t, e);
                    }
                    function r(t) {
                        c === f.$$currentValidationRunId && n(t);
                    }
                    this.$$currentValidationRunId++;
                    var a,
                        s,
                        u,
                        l,
                        c = this.$$currentValidationRunId,
                        f = this;
                    (l = f.$$parserName || "parse"),
                        (
                            v(f.$$parserValid)
                                ? (i(l, null), 1)
                                : (f.$$parserValid ||
                                (o(f.$validators, function (t, e) {
                                    i(e, null);
                                }),
                                    o(f.$asyncValidators, function (t, e) {
                                        i(e, null);
                                    })),
                                    i(l, f.$$parserValid),
                                    f.$$parserValid)
                        )
                            ? ((u = !0),
                                o(f.$validators, function (n, r) {
                                    var o = Boolean(n(t, e));
                                    (u = u && o), i(r, o);
                                }),
                                u ||
                                (o(f.$asyncValidators, function (t, e) {
                                    i(e, null);
                                }),
                                    0)
                                    ? ((a = []),
                                        (s = !0),
                                        o(f.$asyncValidators, function (n, r) {
                                            var o = n(t, e);
                                            if (!o || !C(o.then)) throw ko("nopromise", o);
                                            i(r, void 0),
                                                a.push(
                                                    o.then(
                                                        function () {
                                                            i(r, !0);
                                                        },
                                                        function () {
                                                            (s = !1), i(r, !1);
                                                        }
                                                    )
                                                );
                                        }),
                                        a.length
                                            ? f.$$q.all(a).then(function () {
                                                r(s);
                                            }, h)
                                            : r(!0))
                                    : r(!1))
                            : r(!1);
                },
                $commitViewValue: function () {
                    var t = this.$viewValue;
                    this.$$timeout.cancel(this.$$pendingDebounce),
                    (this.$$lastCommittedViewValue !== t || ("" === t && this.$$hasNativeValidators)) && (this.$$updateEmptyClasses(t), (this.$$lastCommittedViewValue = t), this.$pristine && this.$setDirty(), this.$$parseAndValidate());
                },
                $$parseAndValidate: function () {
                    var t = this.$$lastCommittedViewValue,
                        e = this;
                    if ((this.$$parserValid = !v(t) || void 0))
                        for (var n = 0; n < this.$parsers.length; n++)
                            if (v((t = this.$parsers[n](t)))) {
                                this.$$parserValid = !1;
                                break;
                            }
                    ei(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
                    var i = this.$modelValue,
                        r = this.$options.getOption("allowInvalid");
                    (this.$$rawModelValue = t),
                    r && ((this.$modelValue = t), e.$modelValue !== i && e.$$writeModelToScope()),
                        this.$$runValidators(t, this.$$lastCommittedViewValue, function (n) {
                            r || ((e.$modelValue = n ? t : void 0), e.$modelValue !== i && e.$$writeModelToScope());
                        });
                },
                $$writeModelToScope: function () {
                    this.$$ngModelSet(this.$$scope, this.$modelValue),
                        o(
                            this.$viewChangeListeners,
                            function (t) {
                                try {
                                    t();
                                } catch (t) {
                                    this.$$exceptionHandler(t);
                                }
                            },
                            this
                        );
                },
                $setViewValue: function (t, e) {
                    (this.$viewValue = t), this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(e);
                },
                $$debounceViewValueCommit: function (t) {
                    var e = this.$options.getOption("debounce");
                    k(e[t]) ? (e = e[t]) : k(e.default) && (e = e.default), this.$$timeout.cancel(this.$$pendingDebounce);
                    var n = this;
                    0 < e
                        ? (this.$$pendingDebounce = this.$$timeout(function () {
                            n.$commitViewValue();
                        }, e))
                        : this.$$scope.$root.$$phase
                        ? this.$commitViewValue()
                        : this.$$scope.$apply(function () {
                            n.$commitViewValue();
                        });
                },
                $overrideModelOptions: function (t) {
                    this.$options = this.$options.createChild(t);
                },
            }),
            wn({
                clazz: In,
                set: function (t, e) {
                    t[e] = !0;
                },
                unset: function (t, e) {
                    delete t[e];
                },
            });
        var xo,
            Co = [
                "$rootScope",
                function (t) {
                    return {
                        restrict: "A",
                        require: ["ngModel", "^?form", "^?ngModelOptions"],
                        controller: In,
                        priority: 1,
                        compile: function (e) {
                            return (
                                e.addClass(bo).addClass("ng-untouched").addClass($o),
                                    {
                                        pre: function (t, e, n, i) {
                                            var r = i[0];
                                            (e = i[1] || r.$$parentForm),
                                            (i = i[2]) && (r.$options = i.$options),
                                                r.$$initGetterSetters(),
                                                e.$addControl(r),
                                                n.$observe("name", function (t) {
                                                    r.$name !== t && r.$$parentForm.$$renameControl(r, t);
                                                }),
                                                t.$on("$destroy", function () {
                                                    r.$$parentForm.$removeControl(r);
                                                });
                                        },
                                        post: function (e, n, i, r) {
                                            function o() {
                                                a.$setTouched();
                                            }
                                            var a = r[0];
                                            a.$options.getOption("updateOn") &&
                                            n.on(a.$options.getOption("updateOn"), function (t) {
                                                a.$$debounceViewValueCommit(t && t.type);
                                            }),
                                                n.on("blur", function () {
                                                    a.$touched || (t.$$phase ? e.$evalAsync(o) : e.$apply(o));
                                                });
                                        },
                                    }
                            );
                        },
                    };
                },
            ],
            To = /(\s+|^)default(\s+|$)/;
        (Ln.prototype = {
            getOption: function (t) {
                return this.$$options[t];
            },
            createChild: function (t) {
                var e = !1;
                return (
                    o(
                        (t = l({}, t)),
                        function (n, i) {
                            "$inherit" === n
                                ? "*" === i
                                ? (e = !0)
                                : ((t[i] = this.$$options[i]), "updateOn" === i && (t.updateOnDefault = this.$$options.updateOnDefault))
                                : "updateOn" === i &&
                                ((t.updateOnDefault = !1),
                                    (t[i] = ai(
                                        n.replace(To, function () {
                                            return (t.updateOnDefault = !0), " ";
                                        })
                                    )));
                        },
                        this
                    ),
                    e && (delete t["*"], Pn(t, this.$$options)),
                        Pn(t, xo.$$options),
                        new Ln(t)
                );
            },
        }),
            (xo = new Ln({ updateOn: "", updateOnDefault: !0, debounce: 0, getterSetter: !1, allowInvalid: !1, timezone: null }));
        var Eo = function () {
                function t(t, e) {
                    (this.$$attrs = t), (this.$$scope = e);
                }
                return (
                    (t.$inject = ["$attrs", "$scope"]),
                        (t.prototype = {
                            $onInit: function () {
                                var t = this.parentCtrl ? this.parentCtrl.$options : xo,
                                    e = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                                this.$options = t.createChild(e);
                            },
                        }),
                        { restrict: "A", priority: 10, require: { parentCtrl: "?^^ngModelOptions" }, bindToController: !0, controller: t }
                );
            },
            So = $n({ terminal: !0, priority: 1e3 }),
            Ao = e("ngOptions"),
            Oo = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            Do = [
                "$compile",
                "$document",
                "$parse",
                function (e, n, i) {
                    var a = t.document.createElement("option"),
                        s = t.document.createElement("optgroup");
                    return {
                        restrict: "A",
                        terminal: !0,
                        require: ["select", "ngModel"],
                        link: {
                            pre: function (t, e, n, i) {
                                i[0].registerOption = h;
                            },
                            post: function (t, u, l, c) {
                                function f(t) {
                                    var e = (t = b.getOptionFromViewValue(t)) && t.element;
                                    return e && !e.selected && (e.selected = !0), t;
                                }
                                function d() {
                                    var t = b && h.readValue();
                                    if (b)
                                        for (var e = b.items.length - 1; 0 <= e; e--) {
                                            var n = b.items[e];
                                            $(n.group) ? Et(n.element.parentNode) : Et(n.element);
                                        }
                                    b = w.getOptions();
                                    var i = {};
                                    y && u.prepend(h.emptyOption),
                                        b.items.forEach(function (t) {
                                            var e, n, r;
                                            if ($(t.group)) {
                                                (e = i[t.group]) || ((e = s.cloneNode(!1)), k.appendChild(e), (e.label = null === t.group ? "null" : t.group), (i[t.group] = e));
                                                var o = a.cloneNode(!1);
                                            } else (e = k), (o = a.cloneNode(!1));
                                            e.appendChild(o), (r = o), ((n = t).element = r), (r.disabled = n.disabled), n.label !== r.label && ((r.label = n.label), (r.textContent = n.label)), (r.value = n.selectValue);
                                        }),
                                        u[0].appendChild(k),
                                        p.$render(),
                                    p.$isEmpty(t) || ((e = h.readValue()), (w.trackBy || m ? I(t, e) : t === e) || (p.$setViewValue(e), p.$render()));
                                }
                                var h = c[0],
                                    p = c[1],
                                    m = l.multiple;
                                c = 0;
                                for (var g = u.children(), v = g.length; c < v; c++)
                                    if ("" === g[c].value) {
                                        (h.hasEmptyOption = !0), (h.emptyOption = g.eq(c));
                                        break;
                                    }
                                var y = !!h.emptyOption;
                                Rn(a.cloneNode(!1)).val("?");
                                var b,
                                    w = (function (t, e, n) {
                                        function o(t, e, n, i, r) {
                                            (this.selectValue = t), (this.viewValue = e), (this.label = n), (this.group = i), (this.disabled = r);
                                        }
                                        function a(t) {
                                            var e;
                                            if (!l && r(t)) e = t;
                                            else for (var n in ((e = []), t)) t.hasOwnProperty(n) && "$" !== n.charAt(0) && e.push(n);
                                            return e;
                                        }
                                        var s = t.match(Oo);
                                        if (!s) throw Ao("iexp", t, _(e));
                                        var u = s[5] || s[7],
                                            l = s[6];
                                        t = / as /.test(s[0]) && s[1];
                                        var c = s[9];
                                        e = i(s[2] ? s[1] : u);
                                        var f = (t && i(t)) || e,
                                            d = c && i(c),
                                            h = c
                                                ? function (t, e) {
                                                    return d(n, e);
                                                }
                                                : function (t) {
                                                    return jt(t);
                                                },
                                            p = function (t, e) {
                                                return h(t, b(t, e));
                                            },
                                            m = i(s[2] || s[1]),
                                            g = i(s[3] || ""),
                                            v = i(s[4] || ""),
                                            $ = i(s[8]),
                                            y = {},
                                            b = l
                                                ? function (t, e) {
                                                    return (y[l] = e), (y[u] = t), y;
                                                }
                                                : function (t) {
                                                    return (y[u] = t), y;
                                                };
                                        return {
                                            trackBy: c,
                                            getTrackByValue: p,
                                            getWatchables: i($, function (t) {
                                                for (var e = [], i = a((t = t || [])), r = i.length, o = 0; o < r; o++) {
                                                    var u = t[(l = t === i ? o : i[o])],
                                                        l = b(u, l);
                                                    (u = h(u, l)), e.push(u), (s[2] || s[1]) && ((u = m(n, l)), e.push(u)), s[4] && ((l = v(n, l)), e.push(l));
                                                }
                                                return e;
                                            }),
                                            getOptions: function () {
                                                for (var t = [], e = {}, i = $(n) || [], r = a(i), s = r.length, u = 0; u < s; u++) {
                                                    var l = i === r ? u : r[u],
                                                        d = b(i[l], l),
                                                        y = f(n, d);
                                                    (y = new o((l = h(y, d)), y, m(n, d), g(n, d), (d = v(n, d)))), t.push(y), (e[l] = y);
                                                }
                                                return {
                                                    items: t,
                                                    selectValueMap: e,
                                                    getOptionFromViewValue: function (t) {
                                                        return e[p(t)];
                                                    },
                                                    getViewValueFromOption: function (t) {
                                                        return c ? j(t.viewValue) : t.viewValue;
                                                    },
                                                };
                                            },
                                        };
                                    })(l.ngOptions, u, t),
                                    k = n[0].createDocumentFragment();
                                (h.generateUnknownOptionValue = function (t) {
                                    return "?";
                                }),
                                    m
                                        ? ((h.writeValue = function (t) {
                                            var e = (t && t.map(f)) || [];
                                            b.items.forEach(function (t) {
                                                t.element.selected && -1 === Array.prototype.indexOf.call(e, t) && (t.element.selected = !1);
                                            });
                                        }),
                                            (h.readValue = function () {
                                                var t = u.val() || [],
                                                    e = [];
                                                return (
                                                    o(t, function (t) {
                                                        (t = b.selectValueMap[t]) && !t.disabled && e.push(b.getViewValueFromOption(t));
                                                    }),
                                                        e
                                                );
                                            }),
                                        w.trackBy &&
                                        t.$watchCollection(
                                            function () {
                                                if (ri(p.$viewValue))
                                                    return p.$viewValue.map(function (t) {
                                                        return w.getTrackByValue(t);
                                                    });
                                            },
                                            function () {
                                                p.$render();
                                            }
                                        ))
                                        : ((h.writeValue = function (t) {
                                            var e = b.selectValueMap[u.val()],
                                                n = b.getOptionFromViewValue(t);
                                            e && e.element.removeAttribute("selected"),
                                                n
                                                    ? (u[0].value !== n.selectValue && (h.removeUnknownOption(), h.unselectEmptyOption(), (u[0].value = n.selectValue), (n.element.selected = !0)),
                                                        n.element.setAttribute("selected", "selected"))
                                                    : y
                                                    ? h.selectEmptyOption()
                                                    : h.unknownOption.parent().length
                                                        ? h.updateUnknownOption(t)
                                                        : h.renderUnknownOption(t);
                                        }),
                                            (h.readValue = function () {
                                                var t = b.selectValueMap[u.val()];
                                                return t && !t.disabled ? (h.unselectEmptyOption(), h.removeUnknownOption(), b.getViewValueFromOption(t)) : null;
                                            }),
                                        w.trackBy &&
                                        t.$watch(
                                            function () {
                                                return w.getTrackByValue(p.$viewValue);
                                            },
                                            function () {
                                                p.$render();
                                            }
                                        )),
                                y &&
                                (h.emptyOption.remove(),
                                    e(h.emptyOption)(t),
                                    8 === h.emptyOption[0].nodeType
                                        ? ((h.hasEmptyOption = !1),
                                            (h.registerOption = function (t, e) {
                                                "" === e.val() &&
                                                ((h.hasEmptyOption = !0),
                                                    (h.emptyOption = e),
                                                    h.emptyOption.removeClass("ng-scope"),
                                                    p.$render(),
                                                    e.on("$destroy", function () {
                                                        (h.hasEmptyOption = !1), (h.emptyOption = void 0);
                                                    }));
                                            }))
                                        : h.emptyOption.removeClass("ng-scope")),
                                    u.empty(),
                                    d(),
                                    t.$watchCollection(w.getWatchables, d);
                            },
                        },
                    };
                },
            ],
            Mo = [
                "$locale",
                "$interpolate",
                "$log",
                function (t, e, n) {
                    var i = /{}/g,
                        r = /^when(Minus)?(.+)$/;
                    return {
                        link: function (a, s, u) {
                            function l(t) {
                                s.text(t || "");
                            }
                            var c,
                                f = u.count,
                                d = u.$attr.when && s.attr(u.$attr.when),
                                p = u.offset || 0,
                                m = a.$eval(d) || {},
                                g = {},
                                $ = e.startSymbol(),
                                y = e.endSymbol(),
                                b = $ + f + "-" + p + y,
                                w = Zn.noop;
                            o(u, function (t, e) {
                                var n = r.exec(e);
                                n && ((n = (n[1] ? "-" : "") + zn(n[2])), (m[n] = s.attr(u.$attr[e])));
                            }),
                                o(m, function (t, n) {
                                    g[n] = e(t.replace(i, b));
                                }),
                                a.$watch(f, function (e) {
                                    var i = parseFloat(e),
                                        r = ei(i);
                                    r || i in m || (i = t.pluralCat(i - p)),
                                    i === c || (r && ei(c)) || (w(), v((r = g[i])) ? (null != e && n.debug("ngPluralize: no rule defined for '" + i + "' in " + d), (w = h), l()) : (w = a.$watch(r, l)), (c = i));
                                });
                        },
                    };
                },
            ],
            jo = [
                "$parse",
                "$animate",
                "$compile",
                function (t, n, i) {
                    var a = e("ngRepeat"),
                        s = function (t, e, n, i, r, o, a) {
                            (t[n] = i), r && (t[r] = o), (t.$index = e), (t.$first = 0 === e), (t.$last = e === a - 1), (t.$middle = !(t.$first || t.$last)), (t.$odd = !(t.$even = 0 == (1 & e)));
                        };
                    return {
                        restrict: "A",
                        multiElement: !0,
                        transclude: "element",
                        priority: 1e3,
                        terminal: !0,
                        $$tlb: !0,
                        compile: function (e, u) {
                            var l = u.ngRepeat,
                                c = i.$$createComment("end ngRepeat", l);
                            if (!(f = l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/))) throw a("iexp", l);
                            var f,
                                d = f[1],
                                h = f[2],
                                p = f[3],
                                m = f[4];
                            if (!(f = d.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/))) throw a("iidexp", d);
                            var g = f[3] || f[1],
                                v = f[2];
                            if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw a("badident", p);
                            var $,
                                y,
                                b,
                                w,
                                k = { $id: jt };
                            return (
                                m
                                    ? ($ = t(m))
                                    : ((b = function (t, e) {
                                        return jt(e);
                                    }),
                                        (w = function (t) {
                                            return t;
                                        })),
                                    function (t, e, i, u, f) {
                                        $ &&
                                        (y = function (e, n, i) {
                                            return v && (k[v] = e), (k[g] = n), (k.$index = i), $(t, k);
                                        });
                                        var d = rt();
                                        t.$watchCollection(h, function (i) {
                                            var u,
                                                h,
                                                m,
                                                $,
                                                k,
                                                x,
                                                C,
                                                T,
                                                E,
                                                S,
                                                A = e[0],
                                                O = rt();
                                            if ((p && (t[p] = i), r(i))) (T = i), (h = y || b);
                                            else for (S in ((h = y || w), (T = []), i)) Fn.call(i, S) && "$" !== S.charAt(0) && T.push(S);
                                            for ($ = T.length, S = Array($), u = 0; u < $; u++)
                                                if (((k = i === T ? u : T[u]), (x = i[k]), (C = h(k, x, u)), d[C])) (E = d[C]), delete d[C], (O[C] = E), (S[u] = E);
                                                else {
                                                    if (O[C])
                                                        throw (
                                                            (o(S, function (t) {
                                                                t && t.scope && (d[t.id] = t);
                                                            }),
                                                                a("dupes", l, C, x))
                                                        );
                                                    (S[u] = { id: C, scope: void 0, clone: void 0 }), (O[C] = !0);
                                                }
                                            for (m in d) {
                                                if (((C = it((E = d[m]).clone)), n.leave(C), C[0].parentNode)) for (u = 0, h = C.length; u < h; u++) C[u].$$NG_REMOVED = !0;
                                                E.scope.$destroy();
                                            }
                                            for (u = 0; u < $; u++)
                                                if (((k = i === T ? u : T[u]), (x = i[k]), (E = S[u]).scope)) {
                                                    m = A;
                                                    do {
                                                        m = m.nextSibling;
                                                    } while (m && m.$$NG_REMOVED);
                                                    E.clone[0] !== m && n.move(it(E.clone), null, A), (A = E.clone[E.clone.length - 1]), s(E.scope, u, g, x, v, k, $);
                                                } else
                                                    f(function (t, e) {
                                                        E.scope = e;
                                                        var i = c.cloneNode(!1);
                                                        (t[t.length++] = i), n.enter(t, null, A), (A = i), (E.clone = t), (O[E.id] = E), s(E.scope, u, g, x, v, k, $);
                                                    });
                                            d = O;
                                        });
                                    }
                            );
                        },
                    };
                },
            ],
            No = [
                "$animate",
                function (t) {
                    return {
                        restrict: "A",
                        multiElement: !0,
                        link: function (e, n, i) {
                            e.$watch(i.ngShow, function (e) {
                                t[e ? "removeClass" : "addClass"](n, "ng-hide", { tempClasses: "ng-hide-animate" });
                            });
                        },
                    };
                },
            ],
            Io = [
                "$animate",
                function (t) {
                    return {
                        restrict: "A",
                        multiElement: !0,
                        link: function (e, n, i) {
                            e.$watch(i.ngHide, function (e) {
                                t[e ? "addClass" : "removeClass"](n, "ng-hide", { tempClasses: "ng-hide-animate" });
                            });
                        },
                    };
                },
            ],
            Lo = $n(function (t, e, n) {
                t.$watch(
                    n.ngStyle,
                    function (t, n) {
                        n &&
                        t !== n &&
                        o(n, function (t, n) {
                            e.css(n, "");
                        }),
                        t && e.css(t);
                    },
                    !0
                );
            }),
            Po = [
                "$animate",
                "$compile",
                function (t, e) {
                    return {
                        require: "ngSwitch",
                        controller: [
                            "$scope",
                            function () {
                                this.cases = {};
                            },
                        ],
                        link: function (n, i, r, a) {
                            var s = [],
                                u = [],
                                l = [],
                                c = [],
                                f = function (t, e) {
                                    return function (n) {
                                        !1 !== n && t.splice(e, 1);
                                    };
                                };
                            n.$watch(r.ngSwitch || r.on, function (n) {
                                for (var i, r; l.length; ) t.cancel(l.pop());
                                for (i = 0, r = c.length; i < r; ++i) {
                                    var d = it(u[i].clone);
                                    c[i].$destroy(), (l[i] = t.leave(d)).done(f(l, i));
                                }
                                (u.length = 0),
                                    (c.length = 0),
                                (s = a.cases["!" + n] || a.cases["?"]) &&
                                o(s, function (n) {
                                    n.transclude(function (i, r) {
                                        c.push(r);
                                        var o = n.element;
                                        (i[i.length++] = e.$$createComment("end ngSwitchWhen")), u.push({ clone: i }), t.enter(i, o.parent(), o);
                                    });
                                });
                            });
                        },
                    };
                },
            ],
            Uo = $n({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function (t, e, n, i, r) {
                    o(
                        n.ngSwitchWhen
                            .split(n.ngSwitchWhenSeparator)
                            .sort()
                            .filter(function (t, e, n) {
                                return n[e - 1] !== t;
                            }),
                        function (t) {
                            (i.cases["!" + t] = i.cases["!" + t] || []), i.cases["!" + t].push({ transclude: r, element: e });
                        }
                    );
                },
            }),
            qo = $n({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function (t, e, n, i, r) {
                    (i.cases["?"] = i.cases["?"] || []), i.cases["?"].push({ transclude: r, element: e });
                },
            }),
            Ro = e("ngTransclude"),
            Vo = [
                "$compile",
                function (t) {
                    return {
                        restrict: "EAC",
                        terminal: !0,
                        compile: function (e) {
                            var n = t(e.contents());
                            return (
                                e.empty(),
                                    function (t, e, i, r, o) {
                                        function a() {
                                            n(t, function (t) {
                                                e.append(t);
                                            });
                                        }
                                        if (!o) throw Ro("orphan", _(e));
                                        i.ngTransclude === i.$attr.ngTransclude && (i.ngTransclude = ""),
                                            o(
                                                function (t, n) {
                                                    var i;
                                                    if ((i = t.length))
                                                        t: {
                                                            i = 0;
                                                            for (var r = t.length; i < r; i++) {
                                                                var o = t[i];
                                                                if (o.nodeType !== mi || o.nodeValue.trim()) {
                                                                    i = !0;
                                                                    break t;
                                                                }
                                                            }
                                                            i = void 0;
                                                        }
                                                    i ? e.append(t) : (a(), n.$destroy());
                                                },
                                                null,
                                                (i = i.ngTransclude || i.ngTranscludeSlot)
                                            ),
                                        i && !o.isSlotFilled(i) && a();
                                    }
                            );
                        },
                    };
                },
            ],
            Ho = [
                "$templateCache",
                function (t) {
                    return {
                        restrict: "E",
                        terminal: !0,
                        compile: function (e, n) {
                            "text/ng-template" === n.type && t.put(n.id, e[0].text);
                        },
                    };
                },
            ],
            _o = { $setViewValue: h, $render: h },
            Fo = [
                "$element",
                "$scope",
                function (e, n) {
                    function i() {
                        s ||
                        ((s = !0),
                            n.$$postDigest(function () {
                                (s = !1), o.ngModelCtrl.$render();
                            }));
                    }
                    function r(t) {
                        u ||
                        ((u = !0),
                            n.$$postDigest(function () {
                                n.$$destroyed || ((u = !1), o.ngModelCtrl.$setViewValue(o.readValue()), t && o.ngModelCtrl.$render());
                            }));
                    }
                    var o = this,
                        a = new Ii();
                    (o.selectValueMap = {}),
                        (o.ngModelCtrl = _o),
                        (o.multiple = !1),
                        (o.unknownOption = Rn(t.document.createElement("option"))),
                        (o.hasEmptyOption = !1),
                        (o.emptyOption = void 0),
                        (o.renderUnknownOption = function (t) {
                            (t = o.generateUnknownOptionValue(t)), o.unknownOption.val(t), e.prepend(o.unknownOption), Un(o.unknownOption, !0), e.val(t);
                        }),
                        (o.updateUnknownOption = function (t) {
                            (t = o.generateUnknownOptionValue(t)), o.unknownOption.val(t), Un(o.unknownOption, !0), e.val(t);
                        }),
                        (o.generateUnknownOptionValue = function (t) {
                            return "? " + jt(t) + " ?";
                        }),
                        (o.removeUnknownOption = function () {
                            o.unknownOption.parent() && o.unknownOption.remove();
                        }),
                        (o.selectEmptyOption = function () {
                            o.emptyOption && (e.val(""), Un(o.emptyOption, !0));
                        }),
                        (o.unselectEmptyOption = function () {
                            o.hasEmptyOption && o.emptyOption.removeAttr("selected");
                        }),
                        n.$on("$destroy", function () {
                            o.renderUnknownOption = h;
                        }),
                        (o.readValue = function () {
                            var t = (t = e.val()) in o.selectValueMap ? o.selectValueMap[t] : t;
                            return o.hasOption(t) ? t : null;
                        }),
                        (o.writeValue = function (t) {
                            var n = e[0].options[e[0].selectedIndex];
                            n && Un(Rn(n), !1),
                                o.hasOption(t)
                                    ? (o.removeUnknownOption(), (n = jt(t)), e.val(n in o.selectValueMap ? n : t), Un(Rn(e[0].options[e[0].selectedIndex]), !0))
                                    : null == t && o.emptyOption
                                    ? (o.removeUnknownOption(), o.selectEmptyOption())
                                    : o.unknownOption.parent().length
                                        ? o.updateUnknownOption(t)
                                        : o.renderUnknownOption(t);
                        }),
                        (o.addOption = function (t, e) {
                            if (8 !== e[0].nodeType) {
                                et(t, '"option value"'), "" === t && ((o.hasEmptyOption = !0), (o.emptyOption = e));
                                var n = a.get(t) || 0;
                                a.set(t, n + 1), i();
                            }
                        }),
                        (o.removeOption = function (t) {
                            var e = a.get(t);
                            e && (1 === e ? (a.delete(t), "" === t && ((o.hasEmptyOption = !1), (o.emptyOption = void 0))) : a.set(t, e - 1));
                        }),
                        (o.hasOption = function (t) {
                            return !!a.get(t);
                        });
                    var s = !1,
                        u = !1;
                    o.registerOption = function (t, e, n, a, s) {
                        if (n.$attr.ngValue) {
                            var u,
                                l = NaN;
                            n.$observe("value", function (t) {
                                var n,
                                    i = e.prop("selected");
                                $(l) && (o.removeOption(u), delete o.selectValueMap[l], (n = !0)), (l = jt(t)), (u = t), (o.selectValueMap[l] = t), o.addOption(t, e), e.attr("value", l), n && i && r();
                            });
                        } else
                            a
                                ? n.$observe("value", function (t) {
                                    o.readValue();
                                    var n,
                                        i = e.prop("selected");
                                    $(u) && (o.removeOption(u), (n = !0)), (u = t), o.addOption(t, e), n && i && r();
                                })
                                : s
                                ? t.$watch(s, function (t, i) {
                                    n.$set("value", t);
                                    var a = e.prop("selected");
                                    i !== t && o.removeOption(i), o.addOption(t, e), i && a && r();
                                })
                                : o.addOption(n.value, e);
                        n.$observe("disabled", function (t) {
                            ("true" === t || (t && e.prop("selected"))) && (o.multiple ? r(!0) : (o.ngModelCtrl.$setViewValue(null), o.ngModelCtrl.$render()));
                        }),
                            e.on("$destroy", function () {
                                var t = o.readValue(),
                                    e = n.value;
                                o.removeOption(e), i(), ((o.multiple && t && -1 !== t.indexOf(e)) || t === e) && r(!0);
                            });
                    };
                },
            ],
            Bo = function () {
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: Fo,
                    priority: 1,
                    link: {
                        pre: function (t, e, n, i) {
                            var r = i[0],
                                a = i[1];
                            if (a) {
                                if (
                                    ((r.ngModelCtrl = a),
                                        e.on("change", function () {
                                            r.removeUnknownOption(),
                                                t.$apply(function () {
                                                    a.$setViewValue(r.readValue());
                                                });
                                        }),
                                        n.multiple)
                                ) {
                                    (r.multiple = !0),
                                        (r.readValue = function () {
                                            var t = [];
                                            return (
                                                o(e.find("option"), function (e) {
                                                    e.selected && !e.disabled && ((e = e.value), t.push(e in r.selectValueMap ? r.selectValueMap[e] : e));
                                                }),
                                                    t
                                            );
                                        }),
                                        (r.writeValue = function (t) {
                                            o(e.find("option"), function (e) {
                                                var n = !!t && (-1 !== Array.prototype.indexOf.call(t, e.value) || -1 !== Array.prototype.indexOf.call(t, r.selectValueMap[e.value]));
                                                n !== e.selected && Un(Rn(e), n);
                                            });
                                        });
                                    var s,
                                        u = NaN;
                                    t.$watch(function () {
                                        u !== a.$viewValue || I(s, a.$viewValue) || ((s = at(a.$viewValue)), a.$render()), (u = a.$viewValue);
                                    }),
                                        (a.$isEmpty = function (t) {
                                            return !t || 0 === t.length;
                                        });
                                }
                            } else r.registerOption = h;
                        },
                        post: function (t, e, n, i) {
                            var r = i[1];
                            if (r) {
                                var o = i[0];
                                r.$render = function () {
                                    o.writeValue(r.$viewValue);
                                };
                            }
                        },
                    },
                };
            },
            zo = [
                "$interpolate",
                function (t) {
                    return {
                        restrict: "E",
                        priority: 100,
                        compile: function (e, n) {
                            var i, r;
                            return (
                                $(n.ngValue) || ($(n.value) ? (i = t(n.value, !0)) : (r = t(e.text(), !0)) || n.$set("value", e.text())),
                                    function (t, e, n) {
                                        var o = e.parent();
                                        (o = o.data("$selectController") || o.parent().data("$selectController")) && o.registerOption(t, e, n, i, r);
                                    }
                            );
                        },
                    };
                },
            ],
            Wo = function () {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function (t, e, n, i) {
                        i &&
                        ((n.required = !0),
                            (i.$validators.required = function (t, e) {
                                return !n.required || !i.$isEmpty(e);
                            }),
                            n.$observe("required", function () {
                                i.$validate();
                            }));
                    },
                };
            },
            Go = function () {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function (t, n, i, r) {
                        if (r) {
                            var o,
                                a = i.ngPattern || i.pattern;
                            i.$observe("pattern", function (t) {
                                if ((w(t) && 0 < t.length && (t = new RegExp("^" + t + "$")), t && !t.test)) throw e("ngPattern")("noregexp", a, t, _(n));
                                (o = t || void 0), r.$validate();
                            }),
                                (r.$validators.pattern = function (t, e) {
                                    return r.$isEmpty(e) || v(o) || o.test(e);
                                });
                        }
                    },
                };
            },
            Xo = function () {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function (t, e, n, i) {
                        if (i) {
                            var r = -1;
                            n.$observe("maxlength", function (t) {
                                (t = f(t)), (r = ei(t) ? -1 : t), i.$validate();
                            }),
                                (i.$validators.maxlength = function (t, e) {
                                    return 0 > r || i.$isEmpty(e) || e.length <= r;
                                });
                        }
                    },
                };
            },
            Jo = function () {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function (t, e, n, i) {
                        if (i) {
                            var r = 0;
                            n.$observe("minlength", function (t) {
                                (r = f(t) || 0), i.$validate();
                            }),
                                (i.$validators.minlength = function (t, e) {
                                    return i.$isEmpty(e) || e.length >= r;
                                });
                        }
                    },
                };
            };
        t.angular.bootstrap
            ? t.console && console.log("WARNING: Tried to load angular more than once.")
            : ((function () {
                var e;
                if (!pi) {
                    var n = li();
                    (Vn = v(n) ? t.jQuery : n ? t[n] : void 0) && Vn.fn.on
                        ? ((Rn = Vn),
                            l(Vn.fn, { scope: Oi.scope, isolateScope: Oi.isolateScope, controller: Oi.controller, injector: Oi.injector, inheritedData: Oi.inheritedData }),
                            (e = Vn.cleanData),
                            (Vn.cleanData = function (t) {
                                for (var n, i, r = 0; null != (i = t[r]); r++) (n = Vn._data(i, "events")) && n.$destroy && Vn(i).triggerHandler("$destroy");
                                e(t);
                            }))
                        : (Rn = dt),
                        (Zn.element = Rn),
                        (pi = !0);
                }
            })(),
                l(Zn, {
                    errorHandlingConfig: n,
                    bootstrap: J,
                    copy: j,
                    extend: l,
                    merge: c,
                    equals: I,
                    element: Rn,
                    forEach: o,
                    injector: Lt,
                    noop: h,
                    bind: P,
                    toJson: q,
                    fromJson: R,
                    identity: p,
                    isUndefined: v,
                    isDefined: $,
                    isString: w,
                    isFunction: C,
                    isObject: y,
                    isNumber: k,
                    isElement: O,
                    isArray: ri,
                    version: gi,
                    isDate: x,
                    lowercase: zn,
                    uppercase: Wn,
                    callbacks: { $$counter: 0 },
                    getTestability: Y,
                    reloadWithDebugInfo: K,
                    $$minErr: e,
                    $$csp: ui,
                    $$encodeUriSegment: W,
                    $$encodeUriQuery: G,
                    $$stringify: ot,
                }),
                (Hn = (function (t) {
                    function n(t, e, n) {
                        return t[e] || (t[e] = n());
                    }
                    var i = e("$injector"),
                        r = e("ng");
                    return (
                        ((t = n(t, "angular", Object)).$$minErr = t.$$minErr || e),
                            n(t, "module", function () {
                                var t = {};
                                return function (e, o, a) {
                                    var s = {};
                                    if ("hasOwnProperty" === e) throw r("badname", "module");
                                    return (
                                        o && t.hasOwnProperty(e) && (t[e] = null),
                                            n(t, e, function () {
                                                function t(t, e, n, i) {
                                                    return (
                                                        i || (i = u),
                                                            function () {
                                                                return i[n || "push"]([t, e, arguments]), d;
                                                            }
                                                    );
                                                }
                                                function n(t, n, i) {
                                                    return (
                                                        i || (i = u),
                                                            function (r, o) {
                                                                return o && C(o) && (o.$$moduleName = e), i.push([t, n, arguments]), d;
                                                            }
                                                    );
                                                }
                                                if (!o) throw i("nomod", e);
                                                var u = [],
                                                    l = [],
                                                    c = [],
                                                    f = t("$injector", "invoke", "push", l),
                                                    d = {
                                                        _invokeQueue: u,
                                                        _configBlocks: l,
                                                        _runBlocks: c,
                                                        info: function (t) {
                                                            if ($(t)) {
                                                                if (!y(t)) throw r("aobj", "value");
                                                                return (s = t), this;
                                                            }
                                                            return s;
                                                        },
                                                        requires: o,
                                                        name: e,
                                                        provider: n("$provide", "provider"),
                                                        factory: n("$provide", "factory"),
                                                        service: n("$provide", "service"),
                                                        value: t("$provide", "value"),
                                                        constant: t("$provide", "constant", "unshift"),
                                                        decorator: n("$provide", "decorator", l),
                                                        animation: n("$animateProvider", "register"),
                                                        filter: n("$filterProvider", "register"),
                                                        controller: n("$controllerProvider", "register"),
                                                        directive: n("$compileProvider", "directive"),
                                                        component: n("$compileProvider", "component"),
                                                        config: f,
                                                        run: function (t) {
                                                            return c.push(t), this;
                                                        },
                                                    };
                                                return a && f(a), d;
                                            })
                                    );
                                };
                            })
                    );
                })(t))(
                    "ng",
                    ["ngLocale"],
                    [
                        "$provide",
                        function (t) {
                            t.provider({ $$sanitizeUri: Ve }),
                                t
                                    .provider("$compile", _t)
                                    .directive({
                                        a: Lr,
                                        input: Qr,
                                        textarea: Qr,
                                        form: Rr,
                                        script: Ho,
                                        select: Bo,
                                        option: zo,
                                        ngBind: eo,
                                        ngBindHtml: io,
                                        ngBindTemplate: no,
                                        ngClass: oo,
                                        ngClassEven: so,
                                        ngClassOdd: ao,
                                        ngCloak: uo,
                                        ngController: lo,
                                        ngForm: Vr,
                                        ngHide: Io,
                                        ngIf: ho,
                                        ngInclude: po,
                                        ngInit: go,
                                        ngNonBindable: So,
                                        ngPluralize: Mo,
                                        ngRepeat: jo,
                                        ngShow: No,
                                        ngStyle: Lo,
                                        ngSwitch: Po,
                                        ngSwitchWhen: Uo,
                                        ngSwitchDefault: qo,
                                        ngOptions: Do,
                                        ngTransclude: Vo,
                                        ngModel: Co,
                                        ngList: vo,
                                        ngChange: ro,
                                        pattern: Go,
                                        ngPattern: Go,
                                        required: Wo,
                                        ngRequired: Wo,
                                        minlength: Jo,
                                        ngMinlength: Jo,
                                        maxlength: Xo,
                                        ngMaxlength: Xo,
                                        ngValue: to,
                                        ngModelOptions: Eo,
                                    })
                                    .directive({ ngInclude: mo })
                                    .directive(Pr)
                                    .directive(co),
                                t.provider({
                                    $anchorScroll: Pt,
                                    $animate: zi,
                                    $animateCss: Xi,
                                    $$animateJs: Fi,
                                    $$animateQueue: Bi,
                                    $$AnimateRunner: Gi,
                                    $$animateAsyncRun: Wi,
                                    $browser: Rt,
                                    $cacheFactory: Vt,
                                    $controller: Gt,
                                    $document: Xt,
                                    $$isDocumentHidden: Jt,
                                    $exceptionHandler: Kt,
                                    $filter: Ze,
                                    $$forceReflow: er,
                                    $interpolate: se,
                                    $interval: ue,
                                    $http: re,
                                    $httpParamSerializer: Qt,
                                    $httpParamSerializerJQLike: Zt,
                                    $httpBackend: ae,
                                    $xhrFactory: oe,
                                    $jsonpCallbacks: lr,
                                    $location: we,
                                    $log: ke,
                                    $parse: Ie,
                                    $rootScope: Re,
                                    $q: Le,
                                    $$q: Pe,
                                    $sce: Fe,
                                    $sceDelegate: _e,
                                    $sniffer: Be,
                                    $templateCache: Ht,
                                    $templateRequest: ze,
                                    $$testability: We,
                                    $timeout: Ge,
                                    $window: Ke,
                                    $$rAF: qe,
                                    $$jqLite: Mt,
                                    $$Map: Li,
                                    $$cookieReader: Qe,
                                });
                        },
                    ]
                ).info({ angularVersion: "1.6.4" }),
                Zn.module(
                    "ngLocale",
                    [],
                    [
                        "$provide",
                        function (t) {
                            t.value("$locale", {
                                DATETIME_FORMATS: {
                                    AMPMS: ["AM", "PM"],
                                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                                    ERANAMES: ["Before Christ", "Anno Domini"],
                                    ERAS: ["BC", "AD"],
                                    FIRSTDAYOFWEEK: 6,
                                    MONTH: "January February March April May June July August September October November December".split(" "),
                                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                                    STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                                    WEEKENDRANGE: [5, 6],
                                    fullDate: "EEEE, MMMM d, y",
                                    longDate: "MMMM d, y",
                                    medium: "MMM d, y h:mm:ss a",
                                    mediumDate: "MMM d, y",
                                    mediumTime: "h:mm:ss a",
                                    short: "M/d/yy h:mm a",
                                    shortDate: "M/d/yy",
                                    shortTime: "h:mm a",
                                },
                                NUMBER_FORMATS: {
                                    CURRENCY_SYM: "$",
                                    DECIMAL_SEP: ".",
                                    GROUP_SEP: ",",
                                    PATTERNS: [
                                        { gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" },
                                        { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-¤", negSuf: "", posPre: "¤", posSuf: "" },
                                    ],
                                },
                                id: "en-us",
                                localeID: "en_US",
                                pluralCat: function (t, e) {
                                    var n,
                                        i,
                                        r = 0 | t,
                                        o = e;
                                    return void 0 === o && (o = Math.min(((n = t), -1 == (i = (n += "").indexOf(".")) ? 0 : n.length - i - 1), 3)), Math.pow(10, o), 1 == r && 0 == o ? "one" : "other";
                                },
                            });
                        },
                    ]
                ),
                Rn(function () {
                    X(t.document, J);
                }));
    })(window),
!window.angular.$$csp().noInlineStyle &&
window.angular
    .element(document.head)
    .prepend(
        '<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'
    ),
    (function (t, e) {
        "use strict";
        var n,
            i,
            r,
            o,
            a = 1,
            s = "-add",
            u = "-remove",
            l = "ng-",
            c = "ng-animate",
            f = "$$ngAnimateChildren";
        void 0 === t.ontransitionend && void 0 !== t.onwebkittransitionend ? ("-webkit-", (n = "WebkitTransition"), (i = "webkitTransitionEnd transitionend")) : ((n = "transition"), (i = "transitionend")),
            void 0 === t.onanimationend && void 0 !== t.onwebkitanimationend ? ("-webkit-", (r = "WebkitAnimation"), (o = "webkitAnimationEnd animationend")) : ((r = "animation"), (o = "animationend"));
        var d = "Duration",
            h = "TimingFunction",
            p = "PlayState",
            m = r + "Delay",
            g = r + d,
            v = n + "Delay",
            $ = n + d,
            y = e.$$minErr("ng");
        function b(t, e, n) {
            if (!t) throw y("areq", "Argument '{0}' is {1}", e || "?", n || "required");
            return t;
        }
        function w(t, e) {
            return t || e ? (t ? (e ? (Q(t) && (t = t.join(" ")), Q(e) && (e = e.join(" ")), t + " " + e) : t) : e) : "";
        }
        function k(t, e, n) {
            var i = "";
            return (
                (t = Q(t) ? t : t && it(t) && t.length ? t.split(/\s+/) : []),
                    Y(t, function (t, r) {
                        t && t.length > 0 && ((i += r > 0 ? " " : ""), (i += n ? e + t : t + e));
                    }),
                    i
            );
        }
        function x(t) {
            if (t instanceof ot)
                switch (t.length) {
                    case 0:
                        return t;
                    case 1:
                        if (t[0].nodeType === a) return t;
                        break;
                    default:
                        return ot(C(t));
                }
            if (t.nodeType === a) return ot(t);
        }
        function C(t) {
            if (!t[0]) return t;
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.nodeType === a) return n;
            }
        }
        function T(t) {
            return function (e, n) {
                var i, r, o, a, s, u;
                n.addClass &&
                ((i = t),
                    (r = e),
                    (o = n.addClass),
                    Y(r, function (t) {
                        i.addClass(t, o);
                    }),
                    (n.addClass = null)),
                n.removeClass &&
                ((a = t),
                    (s = e),
                    (u = n.removeClass),
                    Y(s, function (t) {
                        a.removeClass(t, u);
                    }),
                    (n.removeClass = null));
            };
        }
        function E(t) {
            if (!(t = t || {}).$$prepared) {
                var e = t.domOperation || at;
                (t.domOperation = function () {
                    (t.$$domOperationFired = !0), e(), (e = at);
                }),
                    (t.$$prepared = !0);
            }
            return t;
        }
        function S(t, e) {
            A(t, e), O(t, e);
        }
        function A(t, e) {
            e.from && (t.css(e.from), (e.from = null));
        }
        function O(t, e) {
            e.to && (t.css(e.to), (e.to = null));
        }
        function D(t, e, n) {
            var i = e.options || {},
                r = n.options || {},
                o = (i.addClass || "") + " " + (r.addClass || ""),
                a = (i.removeClass || "") + " " + (r.removeClass || ""),
                l = (function (t, e, n) {
                    var i = {};
                    (t = o(t)),
                        (e = o(e)),
                        Y(e, function (t, e) {
                            i[e] = 1;
                        }),
                        (n = o(n)),
                        Y(n, function (t, e) {
                            i[e] = 1 === i[e] ? null : -1;
                        });
                    var r = { addClass: "", removeClass: "" };
                    function o(t) {
                        it(t) && (t = t.split(" "));
                        var e = {};
                        return (
                            Y(t, function (t) {
                                t.length && (e[t] = !0);
                            }),
                                e
                        );
                    }
                    return (
                        Y(i, function (e, n) {
                            var i, o;
                            1 === e ? ((i = "addClass"), (o = !t[n] || t[n + u])) : -1 === e && ((i = "removeClass"), (o = t[n] || t[n + s])), o && (r[i].length && (r[i] += " "), (r[i] += n));
                        }),
                            r
                    );
                })(t.attr("class"), o, a);
            r.preparationClasses && ((i.preparationClasses = L(r.preparationClasses, i.preparationClasses)), delete r.preparationClasses);
            var c = i.domOperation !== at ? i.domOperation : null;
            return (
                K(i, r),
                c && (i.domOperation = c),
                    l.addClass ? (i.addClass = l.addClass) : (i.addClass = null),
                    l.removeClass ? (i.removeClass = l.removeClass) : (i.removeClass = null),
                    (e.addClass = i.addClass),
                    (e.removeClass = i.removeClass),
                    i
            );
        }
        function M(t) {
            return t instanceof ot ? t[0] : t;
        }
        function j(t, e) {
            var n = e ? "-" + e + "s" : "";
            return I(t, [v, n]), [v, n];
        }
        function N(t, e) {
            var n = e ? "paused" : "",
                i = r + p;
            return I(t, [i, n]), [i, n];
        }
        function I(t, e) {
            var n = e[0],
                i = e[1];
            t.style[n] = i;
        }
        function L(t, e) {
            return t ? (e ? t + " " + e : t) : e;
        }
        var P = [
                "$interpolate",
                function (t) {
                    return {
                        link: function (e, n, i) {
                            var r = i.ngAnimateChildren;
                            function o(t) {
                                (t = "on" === t || "true" === t), n.data(f, t);
                            }
                            it(r) && 0 === r.length ? n.data(f, !0) : (o(t(r)(e)), i.$observe("ngAnimateChildren", o));
                        },
                    };
                },
            ],
            U = "$$animateCss",
            q = 1e3,
            R = 3,
            V = 1.5,
            H = { transitionDuration: $, transitionDelay: v, transitionProperty: n + "Property", animationDuration: g, animationDelay: m, animationIterationCount: r + "IterationCount" },
            _ = { transitionDuration: $, transitionDelay: v, animationDuration: g, animationDelay: m };
        function F(t, e) {
            return [e ? m : v, t + "s"];
        }
        function B(t, e, n) {
            var i = Object.create(null),
                r = t.getComputedStyle(e) || {};
            return (
                Y(n, function (t, e) {
                    var n,
                        o,
                        a = r[t];
                    if (a) {
                        var s = a.charAt(0);
                        ("-" === s || "+" === s || s >= 0) &&
                        ((n = 0),
                            (o = a.split(/\s*,\s*/)),
                            Y(o, function (t) {
                                "s" === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)), (t = parseFloat(t) || 0), (n = n ? Math.max(t, n) : t);
                            }),
                            (a = n)),
                        0 === a && (a = null),
                            (i[e] = a);
                    }
                }),
                    i
            );
        }
        function z(t) {
            return 0 === t || null != t;
        }
        function W(t, e) {
            var i = n,
                r = t + "s";
            return e ? (i += d) : (r += " linear all"), [i, r];
        }
        function G() {
            var t = Object.create(null);
            return {
                flush: function () {
                    t = Object.create(null);
                },
                count: function (e) {
                    var n = t[e];
                    return n ? n.total : 0;
                },
                get: function (e) {
                    var n = t[e];
                    return n && n.value;
                },
                put: function (e, n) {
                    t[e] ? t[e].total++ : (t[e] = { total: 1, value: n });
                },
            };
        }
        function X(t, e, n) {
            Y(n, function (n) {
                t[n] = Z(t[n]) ? t[n] : e.style.getPropertyValue(n);
            });
        }
        var J,
            K,
            Y,
            Q,
            Z,
            tt,
            et,
            nt,
            it,
            rt,
            ot,
            at,
            st = [
                "$animateProvider",
                function (t) {
                    var e = G(),
                        a = G();
                    this.$get = [
                        "$window",
                        "$$jqLite",
                        "$$AnimateRunner",
                        "$timeout",
                        "$$forceReflow",
                        "$sniffer",
                        "$$rAFScheduler",
                        "$$animateQueue",
                        function (t, c, f, d, p, m, v, $) {
                            var y = T(c),
                                b = 0;
                            function w(t, e) {
                                var n = "$$ngAnimateParentKey",
                                    i = t.parentNode;
                                return (i[n] || (i[n] = ++b)) + "-" + t.getAttribute("class") + "-" + e;
                            }
                            var x = [];
                            function C(t) {
                                x.push(t),
                                    v.waitUntilQuiet(function () {
                                        e.flush(), a.flush();
                                        for (var t = p(), n = 0; n < x.length; n++) x[n](t);
                                        x.length = 0;
                                    });
                            }
                            function D(n, i, r) {
                                var o,
                                    a,
                                    s,
                                    u,
                                    l = ((o = n), (a = r), (s = H), (u = e.get(a)) || ("infinite" === (u = B(t, o, s)).animationIterationCount && (u.animationIterationCount = 1)), e.put(a, u), u),
                                    c = l.animationDelay,
                                    f = l.transitionDelay;
                                return (l.maxDelay = c && f ? Math.max(c, f) : c || f), (l.maxDuration = Math.max(l.animationDuration * l.animationIterationCount, l.transitionDuration)), l;
                            }
                            return function (p, v) {
                                var b = v || {};
                                b.$$prepared || (b = E(J(b)));
                                var x = {},
                                    T = M(p);
                                if (!T || !T.parentNode || !$.enabled()) return Lt();
                                var L,
                                    P,
                                    H,
                                    G,
                                    K,
                                    Z,
                                    tt,
                                    et,
                                    nt,
                                    it,
                                    rt,
                                    ot,
                                    st = [],
                                    ut = p.attr("class"),
                                    lt = ((P = {}), (L = b) && (L.to || L.from) && ((P.to = L.to), (P.from = L.from)), P),
                                    ct = [];
                                if (0 === b.duration || (!m.animations && !m.transitions)) return Lt();
                                var ft = b.event && Q(b.event) ? b.event.join(" ") : b.event,
                                    dt = "",
                                    ht = "";
                                ft && b.structural ? (dt = k(ft, l, !0)) : ft && (dt = ft),
                                b.addClass && (ht += k(b.addClass, s)),
                                b.removeClass && (ht.length && (ht += " "), (ht += k(b.removeClass, u))),
                                b.applyClassesEarly && ht.length && y(p, b);
                                var pt,
                                    mt,
                                    gt,
                                    vt = [dt, ht].join(" ").trim(),
                                    $t = ut + " " + vt,
                                    yt = k(vt, "-active"),
                                    bt = lt.to && Object.keys(lt.to).length > 0;
                                if (!((b.keyframeStyle || "").length > 0) && !bt && !vt) return Lt();
                                if (b.stagger > 0) {
                                    var wt = parseFloat(b.stagger);
                                    mt = { transitionDelay: wt, animationDelay: wt, transitionDuration: 0, animationDuration: 0 };
                                } else
                                    (pt = w(T, $t)),
                                        (mt = (function (n, i, r, o) {
                                            var s;
                                            if (e.count(r) > 0 && !(s = a.get(r))) {
                                                var u = k(i, "-stagger");
                                                c.addClass(n, u), ((s = B(t, n, o)).animationDuration = Math.max(s.animationDuration, 0)), (s.transitionDuration = Math.max(s.transitionDuration, 0)), c.removeClass(n, u), a.put(r, s);
                                            }
                                            return s || {};
                                        })(T, vt, pt, _));
                                if ((b.$$skipPreparationClasses || c.addClass(p, vt), b.transitionStyle)) {
                                    var kt = [n, b.transitionStyle];
                                    I(T, kt), st.push(kt);
                                }
                                if (b.duration >= 0) {
                                    gt = T.style[n].length > 0;
                                    var xt = W(b.duration, gt);
                                    I(T, xt), st.push(xt);
                                }
                                if (b.keyframeStyle) {
                                    var Ct = [r, b.keyframeStyle];
                                    I(T, Ct), st.push(Ct);
                                }
                                var Tt = mt ? (b.staggerIndex >= 0 ? b.staggerIndex : e.count(pt)) : 0,
                                    Et = 0 === Tt;
                                Et && !b.skipBlocking && j(T, 9999);
                                var St = D(T, 0, pt),
                                    At = St.maxDelay;
                                (et = Math.max(At, 0)), (it = St.maxDuration);
                                var Ot,
                                    Dt = {};
                                if (
                                    ((Dt.hasTransitions = St.transitionDuration > 0),
                                        (Dt.hasAnimations = St.animationDuration > 0),
                                        (Dt.hasTransitionAll = Dt.hasTransitions && "all" === St.transitionProperty),
                                        (Dt.applyTransitionDuration = bt && ((Dt.hasTransitions && !Dt.hasTransitionAll) || (Dt.hasAnimations && !Dt.hasTransitions))),
                                        (Dt.applyAnimationDuration = b.duration && Dt.hasAnimations),
                                        (Dt.applyTransitionDelay = z(b.delay) && (Dt.applyTransitionDuration || Dt.hasTransitions)),
                                        (Dt.applyAnimationDelay = z(b.delay) && Dt.hasAnimations),
                                        (Dt.recalculateTimingStyles = ht.length > 0),
                                    (Dt.applyTransitionDuration || Dt.applyAnimationDuration) &&
                                    ((it = b.duration ? parseFloat(b.duration) : it),
                                    Dt.applyTransitionDuration && ((Dt.hasTransitions = !0), (St.transitionDuration = it), (gt = T.style[n + "Property"].length > 0), st.push(W(it, gt))),
                                    Dt.applyAnimationDuration && ((Dt.hasAnimations = !0), (St.animationDuration = it), st.push([g, it + "s"]))),
                                    0 === it && !Dt.recalculateTimingStyles)
                                )
                                    return Lt();
                                null != b.delay && ("boolean" != typeof b.delay && ((Ot = parseFloat(b.delay)), (et = Math.max(Ot, 0))), Dt.applyTransitionDelay && st.push(F(Ot)), Dt.applyAnimationDelay && st.push(F(Ot, !0)));
                                return (
                                    null == b.duration && St.transitionDuration > 0 && (Dt.recalculateTimingStyles = Dt.recalculateTimingStyles || Et),
                                        (nt = et * q),
                                        (rt = it * q),
                                    b.skipBlocking || ((Dt.blockTransition = St.transitionDuration > 0), (Dt.blockKeyframeAnimation = St.animationDuration > 0 && mt.animationDelay > 0 && 0 === mt.animationDuration)),
                                    b.from && (b.cleanupStyles && X(x, T, Object.keys(b.from)), A(p, b)),
                                        Dt.blockTransition || Dt.blockKeyframeAnimation ? It(it) : b.skipBlocking || j(T, !1),
                                        {
                                            $$willAnimate: !0,
                                            end: Mt,
                                            start: function () {
                                                if (!H) return (Z = new f((tt = { end: Mt, cancel: jt, resume: null, pause: null }))), C(Ut), Z;
                                            },
                                        }
                                );
                                function Mt() {
                                    Nt();
                                }
                                function jt() {
                                    Nt(!0);
                                }
                                function Nt(t) {
                                    if (!(H || (K && G))) {
                                        (H = !0),
                                            (G = !1),
                                        b.$$skipPreparationClasses || c.removeClass(p, vt),
                                            c.removeClass(p, yt),
                                            N(T, !1),
                                            j(T, !1),
                                            Y(st, function (t) {
                                                T.style[t[0]] = "";
                                            }),
                                            y(p, b),
                                            S(p, b),
                                        Object.keys(x).length &&
                                        Y(x, function (t, e) {
                                            t ? T.style.setProperty(e, t) : T.style.removeProperty(e);
                                        }),
                                        b.onDone && b.onDone(),
                                        ct && ct.length && p.off(ct.join(" "), Pt);
                                        var e = p.data(U);
                                        e && (d.cancel(e[0].timer), p.removeData(U)), Z && Z.complete(!t);
                                    }
                                }
                                function It(t) {
                                    Dt.blockTransition && j(T, t), Dt.blockKeyframeAnimation && N(T, !!t);
                                }
                                function Lt() {
                                    return (
                                        (Z = new f({ end: Mt, cancel: jt })),
                                            C(at),
                                            Nt(),
                                            {
                                                $$willAnimate: !1,
                                                start: function () {
                                                    return Z;
                                                },
                                                end: Mt,
                                            }
                                    );
                                }
                                function Pt(t) {
                                    t.stopPropagation();
                                    var e = t.originalEvent || t,
                                        n = e.$manualTimeStamp || Date.now(),
                                        i = parseFloat(e.elapsedTime.toFixed(R));
                                    Math.max(n - ot, 0) >= nt && i >= it && ((K = !0), Nt());
                                }
                                function Ut() {
                                    if (!H)
                                        if (T.parentNode) {
                                            var t = function (t) {
                                                    if (K) G && t && ((G = !1), Nt());
                                                    else if (((G = !t), St.animationDuration)) {
                                                        var e = N(T, G);
                                                        G ? st.push(e) : ((i = e), (r = (n = st).indexOf(i)), i >= 0 && n.splice(r, 1));
                                                    }
                                                    var n, i, r;
                                                },
                                                e = Tt > 0 && ((St.transitionDuration && 0 === mt.transitionDuration) || (St.animationDuration && 0 === mt.animationDuration)) && Math.max(mt.animationDelay, mt.transitionDelay);
                                            e ? d(a, Math.floor(e * Tt * q), !1) : a(),
                                                (tt.resume = function () {
                                                    t(!0);
                                                }),
                                                (tt.pause = function () {
                                                    t(!1);
                                                });
                                        } else Nt();
                                    function a() {
                                        if (!H) {
                                            if (
                                                (It(!1),
                                                    Y(st, function (t) {
                                                        var e = t[0],
                                                            n = t[1];
                                                        T.style[e] = n;
                                                    }),
                                                    y(p, b),
                                                    c.addClass(p, yt),
                                                    Dt.recalculateTimingStyles)
                                            ) {
                                                if ((($t = T.getAttribute("class") + " " + vt), (pt = w(T, $t)), (St = D(T, 0, pt)), (At = St.maxDelay), (et = Math.max(At, 0)), 0 === (it = St.maxDuration))) return void Nt();
                                                (Dt.hasTransitions = St.transitionDuration > 0), (Dt.hasAnimations = St.animationDuration > 0);
                                            }
                                            if (
                                                (Dt.applyAnimationDelay &&
                                                ((At = "boolean" != typeof b.delay && z(b.delay) ? parseFloat(b.delay) : At), (et = Math.max(At, 0)), (St.animationDelay = At), (Ot = F(At, !0)), st.push(Ot), (T.style[Ot[0]] = Ot[1])),
                                                    (nt = et * q),
                                                    (rt = it * q),
                                                    b.easing)
                                            ) {
                                                var t,
                                                    e = b.easing;
                                                Dt.hasTransitions && ((t = n + h), st.push([t, e]), (T.style[t] = e)), Dt.hasAnimations && ((t = r + h), st.push([t, e]), (T.style[t] = e));
                                            }
                                            St.transitionDuration && ct.push(i), St.animationDuration && ct.push(o), (ot = Date.now());
                                            var a = nt + V * rt,
                                                u = ot + a,
                                                l = p.data(U) || [],
                                                f = !0;
                                            if (l.length) {
                                                var m = l[0];
                                                (f = u > m.expectedEndTime) ? d.cancel(m.timer) : l.push(Nt);
                                            }
                                            if (f) {
                                                var g = d(s, a, !1);
                                                (l[0] = { timer: g, expectedEndTime: u }), l.push(Nt), p.data(U, l);
                                            }
                                            ct.length && p.on(ct.join(" "), Pt), b.to && (b.cleanupStyles && X(x, T, Object.keys(b.to)), O(p, b));
                                        }
                                    }
                                    function s() {
                                        var t = p.data(U);
                                        if (t) {
                                            for (var e = 1; e < t.length; e++) t[e]();
                                            p.removeData(U);
                                        }
                                    }
                                }
                            };
                        },
                    ];
                },
            ],
            ut = [
                "$$animationProvider",
                function (t) {
                    t.drivers.push("$$animateCssDriver");
                    var e = "ng-animate-shim",
                        n = "ng-anchor",
                        i = "ng-anchor-out",
                        r = "ng-anchor-in";
                    this.$get = [
                        "$animateCss",
                        "$rootScope",
                        "$$AnimateRunner",
                        "$rootElement",
                        "$sniffer",
                        "$$jqLite",
                        "$document",
                        function (t, o, a, s, u, l, c) {
                            if (!u.animations && !u.transitions) return at;
                            var f,
                                d = c[0].body,
                                h = M(s),
                                p = ot(((f = h).parentNode && 11 === f.parentNode.nodeType) || d.contains(h) ? h : d);
                            return function (o) {
                                return o.from && o.to
                                    ? (function (o, s, u, l) {
                                        var c = v(o),
                                            f = v(s),
                                            h = [];
                                        if (
                                            (Y(l, function (o) {
                                                var s = (function (o, s, u) {
                                                    var l = ot(M(s).cloneNode(!0)),
                                                        c = m(b(l));
                                                    s.addClass(e), u.addClass(e), l.addClass(n), p.append(l);
                                                    var f,
                                                        h,
                                                        v = (h = t(l, { addClass: i, delay: !0, from: y(s) })).$$willAnimate ? h : null;
                                                    if (!v && !(f = w())) return k();
                                                    var $ = v || f;
                                                    return {
                                                        start: function () {
                                                            var t,
                                                                e = $.start();
                                                            return (
                                                                e.done(function () {
                                                                    if (((e = null), !f && (f = w())))
                                                                        return (
                                                                            (e = f.start()).done(function () {
                                                                                (e = null), k(), t.complete();
                                                                            }),
                                                                                e
                                                                        );
                                                                    k(), t.complete();
                                                                }),
                                                                    (t = new a({ end: n, cancel: n }))
                                                            );
                                                            function n() {
                                                                e && e.end();
                                                            }
                                                        },
                                                    };
                                                    function y(t) {
                                                        var e = {},
                                                            n = M(t).getBoundingClientRect();
                                                        return (
                                                            Y(["width", "height", "top", "left"], function (t) {
                                                                var i = n[t];
                                                                switch (t) {
                                                                    case "top":
                                                                        i += d.scrollTop;
                                                                        break;
                                                                    case "left":
                                                                        i += d.scrollLeft;
                                                                }
                                                                e[t] = Math.floor(i) + "px";
                                                            }),
                                                                e
                                                        );
                                                    }
                                                    function b(t) {
                                                        return t.attr("class") || "";
                                                    }
                                                    function w() {
                                                        var e = m(b(u)),
                                                            n = g(e, c),
                                                            o = g(c, e),
                                                            a = t(l, { to: y(u), addClass: r + " " + n, removeClass: i + " " + o, delay: !0 });
                                                        return a.$$willAnimate ? a : null;
                                                    }
                                                    function k() {
                                                        l.remove(), s.removeClass(e), u.removeClass(e);
                                                    }
                                                })(0, o.out, o.in);
                                                s && h.push(s);
                                            }),
                                            !c && !f && 0 === h.length)
                                        )
                                            return;
                                        return {
                                            start: function () {
                                                var t = [];
                                                c && t.push(c.start()),
                                                f && t.push(f.start()),
                                                    Y(h, function (e) {
                                                        t.push(e.start());
                                                    });
                                                var e = new a({ end: n, cancel: n });
                                                return (
                                                    a.all(t, function (t) {
                                                        e.complete(t);
                                                    }),
                                                        e
                                                );
                                                function n() {
                                                    Y(t, function (t) {
                                                        t.end();
                                                    });
                                                }
                                            },
                                        };
                                    })(o.from, o.to, o.classes, o.anchors)
                                    : v(o);
                            };
                            function m(t) {
                                return t.replace(/\bng-\S+\b/g, "");
                            }
                            function g(t, e) {
                                return (
                                    it(t) && (t = t.split(" ")),
                                    it(e) && (e = e.split(" ")),
                                        t
                                            .filter(function (t) {
                                                return -1 === e.indexOf(t);
                                            })
                                            .join(" ")
                                );
                            }
                            function v(e) {
                                var n = e.element,
                                    i = e.options || {};
                                e.structural && ((i.event = e.event), (i.structural = !0), (i.applyClassesEarly = !0), "leave" === e.event && (i.onDone = i.domOperation)),
                                i.preparationClasses && (i.event = L(i.event, i.preparationClasses));
                                var r = t(n, i);
                                return r.$$willAnimate ? r : null;
                            }
                        },
                    ];
                },
            ],
            lt = [
                "$animateProvider",
                function (t) {
                    this.$get = [
                        "$injector",
                        "$$AnimateRunner",
                        "$$jqLite",
                        function (e, n, i) {
                            var r = T(i);
                            return function (i, o, a, s) {
                                var u = !1;
                                3 === arguments.length && nt(a) && ((s = a), (a = null)), (s = E(s)), a || ((a = i.attr("class") || ""), s.addClass && (a += " " + s.addClass), s.removeClass && (a += " " + s.removeClass));
                                var l,
                                    c,
                                    f,
                                    d,
                                    h,
                                    p = s.addClass,
                                    m = s.removeClass,
                                    g = (function (n) {
                                        n = Q(n) ? n : n.split(" ");
                                        for (var i = [], r = {}, o = 0; o < n.length; o++) {
                                            var a = n[o],
                                                s = t.$$registeredAnimations[a];
                                            s && !r[a] && (i.push(e.get(s)), (r[a] = !0));
                                        }
                                        return i;
                                    })(a);
                                g.length &&
                                ("leave" === o ? ((d = "leave"), (f = "afterLeave")) : ((d = "before" + o.charAt(0).toUpperCase() + o.substr(1)), (f = o)),
                                "enter" !== o && "move" !== o && (l = b(i, o, s, g, d)),
                                    (c = b(i, o, s, g, f)));
                                if (l || c)
                                    return {
                                        $$willAnimate: !0,
                                        end: function () {
                                            return h ? h.end() : ($(), (h = new n()).complete(!0)), h;
                                        },
                                        start: function () {
                                            if (h) return h;
                                            var t;
                                            h = new n();
                                            var e = [];
                                            return (
                                                l &&
                                                e.push(function (e) {
                                                    t = l(e);
                                                }),
                                                    e.length
                                                        ? e.push(function (t) {
                                                            v(), t(!0);
                                                        })
                                                        : v(),
                                                c &&
                                                e.push(function (e) {
                                                    t = c(e);
                                                }),
                                                    h.setHost({
                                                        end: function () {
                                                            r();
                                                        },
                                                        cancel: function () {
                                                            r(!0);
                                                        },
                                                    }),
                                                    n.chain(e, i),
                                                    h
                                            );
                                            function i(t) {
                                                $(), h.complete(t);
                                            }
                                            function r(e) {
                                                u || ((t || at)(e), i(e));
                                            }
                                        },
                                    };
                                function v() {
                                    s.domOperation(), r(i, s);
                                }
                                function $() {
                                    (u = !0), v(), S(i, s);
                                }
                                function y(t, e, i, r, o) {
                                    var a = [];
                                    return (
                                        Y(r, function (r) {
                                            var s = r[o];
                                            s &&
                                            a.push(function () {
                                                var r,
                                                    o,
                                                    a = !1,
                                                    u = function (t) {
                                                        a || ((a = !0), (o || at)(t), r.complete(!t));
                                                    };
                                                return (
                                                    (r = new n({
                                                        end: function () {
                                                            u();
                                                        },
                                                        cancel: function () {
                                                            u(!0);
                                                        },
                                                    })),
                                                        (o = (function (t, e, i, r, o) {
                                                            var a;
                                                            switch (i) {
                                                                case "animate":
                                                                    a = [e, r.from, r.to, o];
                                                                    break;
                                                                case "setClass":
                                                                    a = [e, p, m, o];
                                                                    break;
                                                                case "addClass":
                                                                    a = [e, p, o];
                                                                    break;
                                                                case "removeClass":
                                                                    a = [e, m, o];
                                                                    break;
                                                                default:
                                                                    a = [e, o];
                                                            }
                                                            a.push(r);
                                                            var s = t.apply(t, a);
                                                            if (s)
                                                                if ((et(s.start) && (s = s.start()), s instanceof n)) s.done(o);
                                                                else if (et(s)) return s;
                                                            return at;
                                                        })(s, t, e, i, function (t) {
                                                            u(!1 === t);
                                                        })),
                                                        r
                                                );
                                            });
                                        }),
                                            a
                                    );
                                }
                                function b(t, e, i, r, o) {
                                    var a,
                                        s,
                                        u = y(t, e, i, r, o);
                                    0 === u.length &&
                                    ("beforeSetClass" === o
                                        ? ((a = y(t, "removeClass", i, r, "beforeRemoveClass")), (s = y(t, "addClass", i, r, "beforeAddClass")))
                                        : "setClass" === o && ((a = y(t, "removeClass", i, r, "removeClass")), (s = y(t, "addClass", i, r, "addClass"))),
                                    a && (u = u.concat(a)),
                                    s && (u = u.concat(s)));
                                    if (0 !== u.length)
                                        return function (t) {
                                            var e = [];
                                            return (
                                                u.length &&
                                                Y(u, function (t) {
                                                    e.push(t());
                                                }),
                                                    e.length ? n.all(e, t) : t(),
                                                    function (t) {
                                                        Y(e, function (e) {
                                                            t ? e.cancel() : e.end();
                                                        });
                                                    }
                                            );
                                        };
                                }
                            };
                        },
                    ];
                },
            ],
            ct = [
                "$$animationProvider",
                function (t) {
                    t.drivers.push("$$animateJsDriver"),
                        (this.$get = [
                            "$$animateJs",
                            "$$AnimateRunner",
                            function (t, e) {
                                return function (t) {
                                    if (t.from && t.to) {
                                        var i = n(t.from),
                                            r = n(t.to);
                                        if (!i && !r) return;
                                        return {
                                            start: function () {
                                                var t = [];
                                                i && t.push(i.start()),
                                                r && t.push(r.start()),
                                                    e.all(t, function (t) {
                                                        n.complete(t);
                                                    });
                                                var n = new e({ end: o(), cancel: o() });
                                                return n;
                                                function o() {
                                                    return function () {
                                                        Y(t, function (t) {
                                                            t.end();
                                                        });
                                                    };
                                                }
                                            },
                                        };
                                    }
                                    return n(t);
                                };
                                function n(e) {
                                    var n = e.element,
                                        i = e.event,
                                        r = e.options,
                                        o = e.classes;
                                    return t(n, i, o, r);
                                }
                            },
                        ]);
                },
            ],
            ft = "data-ng-animate",
            dt = "$ngAnimatePin",
            ht = [
                "$animateProvider",
                function (e) {
                    var n = 1,
                        i = 2,
                        r = " ",
                        o = (this.rules = { skip: [], cancel: [], join: [] });
                    function c(t, e) {
                        if (t && e) {
                            var n = (function (t) {
                                if (!t) return null;
                                var e = t.split(r),
                                    n = Object.create(null);
                                return (
                                    Y(e, function (t) {
                                        n[t] = !0;
                                    }),
                                        n
                                );
                            })(e);
                            return t.split(r).some(function (t) {
                                return n[t];
                            });
                        }
                    }
                    function d(t, e, n) {
                        return o[t].some(function (t) {
                            return t(e, n);
                        });
                    }
                    function h(t, e) {
                        var n = (t.addClass || "").length > 0,
                            i = (t.removeClass || "").length > 0;
                        return e ? n && i : n || i;
                    }
                    o.join.push(function (t, e) {
                        return !t.structural && h(t);
                    }),
                        o.skip.push(function (t, e) {
                            return !t.structural && !h(t);
                        }),
                        o.skip.push(function (t, e) {
                            return "leave" === e.event && t.structural;
                        }),
                        o.skip.push(function (t, e) {
                            return e.structural && e.state === i && !t.structural;
                        }),
                        o.cancel.push(function (t, e) {
                            return e.structural && t.structural;
                        }),
                        o.cancel.push(function (t, e) {
                            return e.state === i && t.structural;
                        }),
                        o.cancel.push(function (t, e) {
                            if (e.structural) return !1;
                            var n = t.addClass,
                                i = t.removeClass,
                                r = e.addClass,
                                o = e.removeClass;
                            return !((rt(n) && rt(i)) || (rt(r) && rt(o))) && (c(n, o) || c(i, r));
                        }),
                        (this.$get = [
                            "$$rAF",
                            "$rootScope",
                            "$rootElement",
                            "$document",
                            "$$Map",
                            "$$animation",
                            "$$AnimateRunner",
                            "$templateRequest",
                            "$$jqLite",
                            "$$forceReflow",
                            "$$isDocumentHidden",
                            function (r, o, c, p, m, g, v, $, y, w, A) {
                                var O = new m(),
                                    j = new m(),
                                    N = null;
                                var I = o.$watch(
                                    function () {
                                        return 0 === $.totalPendingRequests;
                                    },
                                    function (t) {
                                        t &&
                                        (I(),
                                            o.$$postDigest(function () {
                                                o.$$postDigest(function () {
                                                    null === N && (N = !0);
                                                });
                                            }));
                                    }
                                    ),
                                    P = Object.create(null),
                                    U = e.classNameFilter(),
                                    q = U
                                        ? function (t) {
                                            return U.test(t);
                                        }
                                        : function () {
                                            return !0;
                                        },
                                    R = T(y);
                                function V(t, e) {
                                    return D(t, e, {});
                                }
                                var H =
                                    t.Node.prototype.contains ||
                                    function (t) {
                                        return this === t || !!(16 & this.compareDocumentPosition(t));
                                    };
                                function _(t, e, n) {
                                    var i = C(e);
                                    return t.filter(function (t) {
                                        return !(t.node === i && (!n || t.callback === n));
                                    });
                                }
                                function F(t, e) {
                                    "close" !== t || e.parentNode || B.off(e);
                                }
                                var B = {
                                    on: function (t, e, n) {
                                        var i = C(e);
                                        (P[t] = P[t] || []),
                                            P[t].push({ node: i, callback: n }),
                                            ot(e).on("$destroy", function () {
                                                O.get(i) || B.off(t, e, n);
                                            });
                                    },
                                    off: function (t, e, n) {
                                        if (1 !== arguments.length || it(arguments[0])) {
                                            var i = P[t];
                                            i && (P[t] = 1 === arguments.length ? null : _(i, e, n));
                                        } else for (var r in ((e = arguments[0]), P)) P[r] = _(P[r], e);
                                    },
                                    pin: function (t, e) {
                                        b(tt(t), "element", "not an element"), b(tt(e), "parentElement", "not an element"), t.data(dt, e);
                                    },
                                    push: function (t, e, m, $) {
                                        return (
                                            ((m = m || {}).domOperation = $),
                                                (function (t, e, m) {
                                                    var $ = J(m),
                                                        y = x(t),
                                                        b = M(y),
                                                        w = b && b.parentNode;
                                                    $ = E($);
                                                    var C = new v(),
                                                        T =
                                                            ((I = !1),
                                                                function (t) {
                                                                    I
                                                                        ? t()
                                                                        : o.$$postDigest(function () {
                                                                            (I = !0), t();
                                                                        });
                                                                });
                                                    var I;
                                                    Q($.addClass) && ($.addClass = $.addClass.join(" "));
                                                    $.addClass && !it($.addClass) && ($.addClass = null);
                                                    Q($.removeClass) && ($.removeClass = $.removeClass.join(" "));
                                                    $.removeClass && !it($.removeClass) && ($.removeClass = null);
                                                    $.from && !nt($.from) && ($.from = null);
                                                    $.to && !nt($.to) && ($.to = null);
                                                    if (!b) return $t(), C;
                                                    var U = [b.getAttribute("class"), $.addClass, $.removeClass].join(" ");
                                                    if (!q(U)) return $t(), C;
                                                    var _ = ["enter", "move", "leave"].indexOf(e) >= 0,
                                                        B = A(),
                                                        G = !N || B || j.get(b),
                                                        X = (!G && O.get(b)) || {},
                                                        K = !!X.state;
                                                    G ||
                                                    (K && X.state === n) ||
                                                    (G = !(function (t, e, n) {
                                                        var i,
                                                            r = p[0].body,
                                                            o = M(c),
                                                            s = t === r || "HTML" === t.nodeName,
                                                            u = t === o,
                                                            l = !1,
                                                            d = j.get(t),
                                                            h = ot.data(t, dt);
                                                        h && (e = M(h));
                                                        for (; e && (u || (u = e === o), e.nodeType === a); ) {
                                                            var m = O.get(e) || {};
                                                            if (!l) {
                                                                var g = j.get(e);
                                                                if (!0 === g && !1 !== d) {
                                                                    d = !0;
                                                                    break;
                                                                }
                                                                !1 === g && (d = !1), (l = m.structural);
                                                            }
                                                            if (rt(i) || !0 === i) {
                                                                var v = ot.data(e, f);
                                                                Z(v) && (i = v);
                                                            }
                                                            if (l && !1 === i) break;
                                                            if ((s || (s = e === r), s && u)) break;
                                                            e = u || !(h = ot.data(e, dt)) ? e.parentNode : M(h);
                                                        }
                                                        return (!l || i) && !0 !== d && u && s;
                                                    })(b, w));
                                                    if (G) return B && vt(C, e, "start"), $t(), B && vt(C, e, "close"), C;
                                                    _ &&
                                                    ((tt = b.querySelectorAll("[" + ft + "]")),
                                                        Y(tt, function (t) {
                                                            var e = parseInt(t.getAttribute(ft), 10),
                                                                r = O.get(t);
                                                            if (r)
                                                                switch (e) {
                                                                    case i:
                                                                        r.runner.end();
                                                                    case n:
                                                                        O.delete(t);
                                                                }
                                                        }));
                                                    var tt;
                                                    var et = { structural: _, element: y, event: e, addClass: $.addClass, removeClass: $.removeClass, close: $t, options: $, runner: C };
                                                    if (K) {
                                                        var at = d("skip", et, X);
                                                        if (at) return X.state === i ? ($t(), C) : (D(y, X, et), X.runner);
                                                        var st = d("cancel", et, X);
                                                        if (st)
                                                            if (X.state === i) X.runner.end();
                                                            else {
                                                                if (!X.structural) return D(y, X, et), X.runner;
                                                                X.close();
                                                            }
                                                        else {
                                                            var ut = d("join", et, X);
                                                            if (ut) {
                                                                if (X.state !== i)
                                                                    return (
                                                                        (lt = y),
                                                                            (ht = $),
                                                                            (pt = ""),
                                                                        (ct = _ ? e : null) && (pt = k(ct, l, !0)),
                                                                        ht.addClass && (pt = L(pt, k(ht.addClass, s))),
                                                                        ht.removeClass && (pt = L(pt, k(ht.removeClass, u))),
                                                                        pt.length && ((ht.preparationClasses = pt), lt.addClass(pt)),
                                                                            (e = et.event = X.event),
                                                                            ($ = D(y, X, et)),
                                                                            X.runner
                                                                    );
                                                                V(y, et);
                                                            }
                                                        }
                                                    } else V(y, et);
                                                    var lt, ct, ht, pt;
                                                    var mt = et.structural;
                                                    mt || (mt = ("animate" === et.event && Object.keys(et.options.to || {}).length > 0) || h(et));
                                                    if (!mt) return $t(), z(b), C;
                                                    var gt = (X.counter || 0) + 1;
                                                    return (
                                                        (et.counter = gt),
                                                            W(b, n, et),
                                                            o.$$postDigest(function () {
                                                                y = x(t);
                                                                var n = O.get(b),
                                                                    r = !n;
                                                                n = n || {};
                                                                var o = (y.parent() || []).length > 0 && ("animate" === n.event || n.structural || h(n));
                                                                if (r || n.counter !== gt || !o) return r && (R(y, $), S(y, $)), (r || (_ && n.event !== e)) && ($.domOperation(), C.end()), void (o || z(b));
                                                                (e = !n.structural && h(n, !0) ? "setClass" : n.event), W(b, i);
                                                                var a = g(y, e, n.options);
                                                                C.setHost(a),
                                                                    vt(C, e, "start", {}),
                                                                    a.done(function (t) {
                                                                        $t(!t);
                                                                        var n = O.get(b);
                                                                        n && n.counter === gt && z(b), vt(C, e, "close", {});
                                                                    });
                                                            }),
                                                            C
                                                    );
                                                    function vt(t, e, n, i) {
                                                        T(function () {
                                                            var t,
                                                                o,
                                                                a,
                                                                s,
                                                                u,
                                                                l =
                                                                    ((t = w),
                                                                        (o = b),
                                                                        (s = []),
                                                                    (u = P[(a = e)]) &&
                                                                    Y(u, function (e) {
                                                                        H.call(e.node, o) ? s.push(e.callback) : "leave" === a && H.call(e.node, t) && s.push(e.callback);
                                                                    }),
                                                                        s);
                                                            l.length
                                                                ? r(function () {
                                                                    Y(l, function (t) {
                                                                        t(y, n, i);
                                                                    }),
                                                                        F(n, b);
                                                                })
                                                                : F(n, b);
                                                        }),
                                                            t.progress(e, n, i);
                                                    }
                                                    function $t(t) {
                                                        var e, n;
                                                        (e = y),
                                                        (n = $).preparationClasses && (e.removeClass(n.preparationClasses), (n.preparationClasses = null)),
                                                        n.activeClasses && (e.removeClass(n.activeClasses), (n.activeClasses = null)),
                                                            R(y, $),
                                                            S(y, $),
                                                            $.domOperation(),
                                                            C.complete(!t);
                                                    }
                                                })(t, e, m)
                                        );
                                    },
                                    enabled: function (t, e) {
                                        var n = arguments.length;
                                        if (0 === n) e = !!N;
                                        else if (tt(t)) {
                                            var i = M(t);
                                            1 === n ? (e = !j.get(i)) : j.set(i, !e);
                                        } else e = N = !!t;
                                        return e;
                                    },
                                };
                                return B;
                                function z(t) {
                                    t.removeAttribute(ft), O.delete(t);
                                }
                                function W(t, e, n) {
                                    ((n = n || {}).state = e), t.setAttribute(ft, e);
                                    var i = O.get(t),
                                        r = i ? K(i, n) : n;
                                    O.set(t, r);
                                }
                            },
                        ]);
                },
            ],
            pt = [
                "$animateProvider",
                function (t) {
                    var e = "ng-animate-ref",
                        n = (this.drivers = []),
                        i = "$$animationRunner";
                    function r(t) {
                        return t.data(i);
                    }
                    this.$get = [
                        "$$jqLite",
                        "$rootScope",
                        "$injector",
                        "$$AnimateRunner",
                        "$$Map",
                        "$$rAFScheduler",
                        function (t, o, a, s, u, l) {
                            var f = [],
                                d = T(t);
                            return function (h, p, m) {
                                m = E(m);
                                var g,
                                    v = ["enter", "move", "leave"].indexOf(p) >= 0,
                                    $ = new s({
                                        end: function () {
                                            C();
                                        },
                                        cancel: function () {
                                            C(!0);
                                        },
                                    });
                                if (!n.length) return C(), $;
                                (g = $), h.data(i, g);
                                var y,
                                    b = w(h.attr("class"), w(m.addClass, m.removeClass)),
                                    k = m.tempClasses;
                                return (
                                    k && ((b += " " + k), (m.tempClasses = null)),
                                    v && ((y = "ng-" + p + "-prepare"), t.addClass(h, y)),
                                        f.push({
                                            element: h,
                                            classes: b,
                                            event: p,
                                            structural: v,
                                            options: m,
                                            beforeStart: function () {
                                                h.addClass(c), k && t.addClass(h, k);
                                                y && (t.removeClass(h, y), (y = null));
                                            },
                                            close: C,
                                        }),
                                        h.on("$destroy", x),
                                        f.length > 1
                                            ? $
                                            : (o.$$postDigest(function () {
                                                var t = [];
                                                Y(f, function (e) {
                                                    r(e.element) ? t.push(e) : e.close();
                                                }),
                                                    (f.length = 0);
                                                var i = (function (t) {
                                                        var n = [],
                                                            i = {};
                                                        Y(t, function (t, r) {
                                                            var o,
                                                                a,
                                                                s,
                                                                u,
                                                                l = t.element,
                                                                c = M(l),
                                                                f = t.event,
                                                                d = ["enter", "move"].indexOf(f) >= 0,
                                                                h = t.structural
                                                                    ? ((a = "[" + e + "]"),
                                                                        (s = (o = c).hasAttribute(e) ? [o] : o.querySelectorAll(a)),
                                                                        (u = []),
                                                                        Y(s, function (t) {
                                                                            var n = t.getAttribute(e);
                                                                            n && n.length && u.push(t);
                                                                        }),
                                                                        u)
                                                                    : [];
                                                            if (h.length) {
                                                                var p = d ? "to" : "from";
                                                                Y(h, function (t) {
                                                                    var n = t.getAttribute(e);
                                                                    (i[n] = i[n] || {}), (i[n][p] = { animationID: r, element: ot(t) });
                                                                });
                                                            } else n.push(t);
                                                        });
                                                        var r = {},
                                                            o = {};
                                                        return (
                                                            Y(i, function (e, i) {
                                                                var a = e.from,
                                                                    s = e.to;
                                                                if (a && s) {
                                                                    var u = t[a.animationID],
                                                                        l = t[s.animationID],
                                                                        c = a.animationID.toString();
                                                                    if (!o[c]) {
                                                                        var f = (o[c] = {
                                                                            structural: !0,
                                                                            beforeStart: function () {
                                                                                u.beforeStart(), l.beforeStart();
                                                                            },
                                                                            close: function () {
                                                                                u.close(), l.close();
                                                                            },
                                                                            classes: (function (t, e) {
                                                                                (t = t.split(" ")), (e = e.split(" "));
                                                                                for (var n = [], i = 0; i < t.length; i++) {
                                                                                    var r = t[i];
                                                                                    if ("ng-" !== r.substring(0, 3))
                                                                                        for (var o = 0; o < e.length; o++)
                                                                                            if (r === e[o]) {
                                                                                                n.push(r);
                                                                                                break;
                                                                                            }
                                                                                }
                                                                                return n.join(" ");
                                                                            })(u.classes, l.classes),
                                                                            from: u,
                                                                            to: l,
                                                                            anchors: [],
                                                                        });
                                                                        f.classes.length ? n.push(f) : (n.push(u), n.push(l));
                                                                    }
                                                                    o[c].anchors.push({ out: a.element, in: s.element });
                                                                } else {
                                                                    var d = a ? a.animationID : s.animationID,
                                                                        h = d.toString();
                                                                    r[h] || ((r[h] = !0), n.push(t[d]));
                                                                }
                                                            }),
                                                                n
                                                        );
                                                    })(t),
                                                    o = [];
                                                Y(i, function (t) {
                                                    o.push({
                                                        domNode: M(t.from ? t.from.element : t.element),
                                                        fn: function () {
                                                            t.beforeStart();
                                                            var e,
                                                                i = t.close;
                                                            if (r(t.anchors ? t.from.element || t.to.element : t.element)) {
                                                                var o = (function (t) {
                                                                    for (var e = n.length - 1; e >= 0; e--) {
                                                                        var i = n[e],
                                                                            r = a.get(i),
                                                                            o = r(t);
                                                                        if (o) return o;
                                                                    }
                                                                })(t);
                                                                o && (e = o.start);
                                                            }
                                                            if (e) {
                                                                var s = e();
                                                                s.done(function (t) {
                                                                    i(!t);
                                                                }),
                                                                    (function (t, e) {
                                                                        t.from && t.to ? (n(t.from.element), n(t.to.element)) : n(t.element);
                                                                        function n(t) {
                                                                            var n = r(t);
                                                                            n && n.setHost(e);
                                                                        }
                                                                    })(t, s);
                                                            } else i();
                                                        },
                                                    });
                                                }),
                                                    l(
                                                        (function (t) {
                                                            var e,
                                                                n = { children: [] },
                                                                i = new u();
                                                            for (e = 0; e < t.length; e++) {
                                                                var r = t[e];
                                                                i.set(r.domNode, (t[e] = { domNode: r.domNode, fn: r.fn, children: [] }));
                                                            }
                                                            for (e = 0; e < t.length; e++) o(t[e]);
                                                            return (function (t) {
                                                                var e,
                                                                    n = [],
                                                                    i = [];
                                                                for (e = 0; e < t.children.length; e++) i.push(t.children[e]);
                                                                var r = i.length,
                                                                    o = 0,
                                                                    a = [];
                                                                for (e = 0; e < i.length; e++) {
                                                                    var s = i[e];
                                                                    r <= 0 && ((r = o), (o = 0), n.push(a), (a = [])),
                                                                        a.push(s.fn),
                                                                        s.children.forEach(function (t) {
                                                                            o++, i.push(t);
                                                                        }),
                                                                        r--;
                                                                }
                                                                return a.length && n.push(a), n;
                                                            })(n);
                                                            function o(t) {
                                                                if (t.processed) return t;
                                                                t.processed = !0;
                                                                var e,
                                                                    r = t.domNode,
                                                                    a = r.parentNode;
                                                                for (i.set(r, t); a; ) {
                                                                    if ((e = i.get(a))) {
                                                                        e.processed || (e = o(e));
                                                                        break;
                                                                    }
                                                                    a = a.parentNode;
                                                                }
                                                                return (e || n).children.push(t), t;
                                                            }
                                                        })(o)
                                                    );
                                            }),
                                                $)
                                );
                                function x() {
                                    var t = r(h);
                                    !t || ("leave" === p && m.$$domOperationFired) || t.end();
                                }
                                function C(e) {
                                    h.off("$destroy", x), h.removeData(i), d(h, m), S(h, m), m.domOperation(), k && t.removeClass(h, k), h.removeClass(c), $.complete(!e);
                                }
                            };
                        },
                    ];
                },
            ];
        e.module("ngAnimate", [], function () {
            (at = e.noop), (J = e.copy), (K = e.extend), (ot = e.element), (Y = e.forEach), (Q = e.isArray), (it = e.isString), (nt = e.isObject), (rt = e.isUndefined), (Z = e.isDefined), (et = e.isFunction), (tt = e.isElement);
        })
            .info({ angularVersion: "1.6.4" })
            .directive("ngAnimateSwap", [
                "$animate",
                "$rootScope",
                function (t, e) {
                    return {
                        restrict: "A",
                        transclude: "element",
                        terminal: !0,
                        priority: 600,
                        link: function (e, n, i, r, o) {
                            var a, s;
                            e.$watchCollection(i.ngAnimateSwap || i.for, function (i) {
                                a && t.leave(a),
                                s && (s.$destroy(), (s = null)),
                                (i || 0 === i) &&
                                ((s = e.$new()),
                                    o(s, function (e) {
                                        (a = e), t.enter(e, null, n);
                                    }));
                            });
                        },
                    };
                },
            ])
            .directive("ngAnimateChildren", P)
            .factory("$$rAFScheduler", [
                "$$rAF",
                function (t) {
                    var e, n;
                    function i(t) {
                        (e = e.concat(t)), r();
                    }
                    return (
                        (e = i.queue = []),
                            (i.waitUntilQuiet = function (e) {
                                n && n(),
                                    (n = t(function () {
                                        (n = null), e(), r();
                                    }));
                            }),
                            i
                    );
                    function r() {
                        if (e.length) {
                            for (var i = e.shift(), o = 0; o < i.length; o++) i[o]();
                            n ||
                            t(function () {
                                n || r();
                            });
                        }
                    }
                },
            ])
            .provider("$$animateQueue", ht)
            .provider("$$animation", pt)
            .provider("$animateCss", st)
            .provider("$$animateCssDriver", ut)
            .provider("$$animateJs", lt)
            .provider("$$animateJsDriver", ct);
    })(window, window.angular),
    (function (t) {
        var e;
        if (!window.jQuery) throw new Error("UIkit 2.x requires jQuery");
        (e = (function (t) {
            "use strict";
            if (window.UIkit2) return window.UIkit2;
            var e = {},
                n = window.UIkit || void 0;
            if (
                ((e.version = "2.27.4"),
                    (e.noConflict = function () {
                        return n && ((window.UIkit = n), (t.UIkit = n), (t.fn.uk = n.fn)), e;
                    }),
                    (window.UIkit2 = e),
                n || (window.UIkit = e),
                    (e.$ = t),
                    (e.$doc = e.$(document)),
                    (e.$win = e.$(window)),
                    (e.$html = e.$("html")),
                    (e.support = {}),
                    (e.support.transition =
                        ((l = (function () {
                            var t,
                                e = document.body || document.documentElement,
                                n = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                            for (t in n) if (void 0 !== e.style[t]) return n[t];
                        })()),
                        l && { end: l })),
                    (e.support.animation =
                        ((u = (function () {
                            var t,
                                e = document.body || document.documentElement,
                                n = { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };
                            for (t in n) if (void 0 !== e.style[t]) return n[t];
                        })()),
                        u && { end: u })),
                    (function () {
                        Date.now =
                            Date.now ||
                            function () {
                                return new Date().getTime();
                            };
                        for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
                            var n = t[e];
                            (window.requestAnimationFrame = window[n + "RequestAnimationFrame"]), (window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]);
                        }
                        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                            var i = 0;
                            (window.requestAnimationFrame = function (t) {
                                var e = Date.now(),
                                    n = Math.max(i + 16, e);
                                return setTimeout(function () {
                                    t((i = n));
                                }, n - e);
                            }),
                                (window.cancelAnimationFrame = clearTimeout);
                        }
                    })(),
                    (e.support.touch =
                        "ontouchstart" in document ||
                        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
                        (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0) ||
                        (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0) ||
                        !1),
                    (e.support.mutationobserver = window.MutationObserver || window.WebKitMutationObserver || null),
                    (e.Utils = {}),
                    (e.Utils.isFullscreen = function () {
                        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || !1;
                    }),
                    (e.Utils.str2json = function (t, e) {
                        try {
                            return e
                                ? JSON.parse(
                                    t
                                        .replace(/([\$\w]+)\s*:/g, function (t, e) {
                                            return '"' + e + '":';
                                        })
                                        .replace(/'([^']+)'/g, function (t, e) {
                                            return '"' + e + '"';
                                        })
                                )
                                : new Function("", "var json = " + t + "; return JSON.parse(JSON.stringify(json));")();
                        } catch (t) {
                            return !1;
                        }
                    }),
                    (e.Utils.debounce = function (t, e, n) {
                        var i;
                        return function () {
                            var r = this,
                                o = arguments,
                                a = n && !i;
                            clearTimeout(i),
                                (i = setTimeout(function () {
                                    (i = null), n || t.apply(r, o);
                                }, e)),
                            a && t.apply(r, o);
                        };
                    }),
                    (e.Utils.throttle = function (t, e) {
                        var n = !1;
                        return function () {
                            n ||
                            (t.call(),
                                (n = !0),
                                setTimeout(function () {
                                    n = !1;
                                }, e));
                        };
                    }),
                    (e.Utils.removeCssRules = function (t) {
                        var e, n, i, r, o, a, s, u, l, c;
                        t &&
                        setTimeout(function () {
                            try {
                                for (c = document.styleSheets, r = 0, s = c.length; s > r; r++) {
                                    for (i = c[r], n = [], i.cssRules = i.cssRules, e = o = 0, u = i.cssRules.length; u > o; e = ++o) i.cssRules[e].type === CSSRule.STYLE_RULE && t.test(i.cssRules[e].selectorText) && n.unshift(e);
                                    for (a = 0, l = n.length; l > a; a++) i.deleteRule(n[a]);
                                }
                            } catch (t) {}
                        }, 0);
                    }),
                    (e.Utils.isInView = function (n, i) {
                        var r = t(n);
                        if (!r.is(":visible")) return !1;
                        var o = e.$win.scrollLeft(),
                            a = e.$win.scrollTop(),
                            s = r.offset(),
                            u = s.left,
                            l = s.top;
                        return (i = t.extend({ topoffset: 0, leftoffset: 0 }, i)), l + r.height() >= a && l - i.topoffset <= a + e.$win.height() && u + r.width() >= o && u - i.leftoffset <= o + e.$win.width();
                    }),
                    (e.Utils.checkDisplay = function (n, i) {
                        var r = e.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", n || document);
                        return (
                            n && !r.length && (r = t(n)),
                                r.trigger("display.uk.check"),
                            i &&
                            ("string" != typeof i && (i = '[class*="uk-animation-"]'),
                                r.find(i).each(function () {
                                    var t = e.$(this),
                                        n = t.attr("class"),
                                        i = n.match(/uk-animation-(.+)/);
                                    t.removeClass(i[0]).width(), t.addClass(i[0]);
                                })),
                                r
                        );
                    }),
                    (e.Utils.options = function (n) {
                        if ("string" != t.type(n)) return n;
                        -1 != n.indexOf(":") && "}" != n.trim().substr(-1) && (n = "{" + n + "}");
                        var i = n ? n.indexOf("{") : -1,
                            r = {};
                        if (-1 != i)
                            try {
                                r = e.Utils.str2json(n.substr(i));
                            } catch (t) {}
                        return r;
                    }),
                    (e.Utils.animate = function (n, i) {
                        var r = t.Deferred();
                        return (
                            (n = e.$(n))
                                .css("display", "none")
                                .addClass(i)
                                .one(e.support.animation.end, function () {
                                    n.removeClass(i), r.resolve();
                                }),
                                n.css("display", ""),
                                r.promise()
                        );
                    }),
                    (e.Utils.uid = function (t) {
                        return (t || "id") + new Date().getTime() + "RAND" + Math.ceil(1e5 * Math.random());
                    }),
                    (e.Utils.template = function (t, e) {
                        for (
                            var n,
                                i,
                                r,
                                o,
                                a = t
                                    .replace(/\n/g, "\\n")
                                    .replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}")
                                    .split(/(\{\{\s*(.+?)\s*\}\})/g),
                                s = 0,
                                u = [],
                                l = 0;
                            s < a.length;

                        ) {
                            if ((n = a[s]).match(/\{\{\s*(.+?)\s*\}\}/))
                                switch (((s += 1), (n = a[s]), (i = n[0]), (r = n.substring(n.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0)), i)) {
                                    case "~":
                                        u.push("for(var $i=0;$i<" + r + ".length;$i++) { var $item = " + r + "[$i];"), l++;
                                        break;
                                    case ":":
                                        u.push("for(var $key in " + r + ") { var $val = " + r + "[$key];"), l++;
                                        break;
                                    case "#":
                                        u.push("if(" + r + ") {"), l++;
                                        break;
                                    case "^":
                                        u.push("if(!" + r + ") {"), l++;
                                        break;
                                    case "/":
                                        u.push("}"), l--;
                                        break;
                                    case "!":
                                        u.push("__ret.push(" + r + ");");
                                        break;
                                    default:
                                        u.push("__ret.push(escape(" + r + "));");
                                }
                            else u.push("__ret.push('" + n.replace(/\'/g, "\\'") + "');");
                            s += 1;
                        }
                        return (
                            (o = new Function(
                                "$data",
                                [
                                    "var __ret = [];",
                                    "try {",
                                    "with($data){",
                                    l ? '__ret = ["Not all blocks are closed correctly."]' : u.join(""),
                                    "};",
                                    "}catch(e){__ret = [e.message];}",
                                    'return __ret.join("").replace(/\\n\\n/g, "\\n");',
                                    "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}",
                                ].join("\n")
                            )),
                                e ? o(e) : o
                        );
                    }),
                    (e.Utils.focus = function (e, n) {
                        if (!(e = t(e)).length) return e;
                        var i,
                            r = e.find("[autofocus]:first");
                        return r.length ? r.focus() : (r = e.find(":input" + ((n && "," + n) || "")).first()).length ? r.focus() : (e.attr("tabindex") || ((i = 1e3), e.attr("tabindex", i)), e[0].focus(), i && e.attr("tabindex", ""), e);
                    }),
                    (e.Utils.events = {}),
                    (e.Utils.events.click = e.support.touch ? "tap" : "click"),
                    (e.fn = function (n, i) {
                        var r = arguments,
                            o = n.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
                            a = o[1],
                            s = o[2];
                        return e[a]
                            ? this.each(function () {
                                var n = t(this),
                                    o = n.data(a);
                                o || n.data(a, (o = e[a](this, s ? void 0 : i))), s && o[s].apply(o, Array.prototype.slice.call(r, 1));
                            })
                            : (t.error("UIkit component [" + a + "] does not exist."), this);
                    }),
                    (t.UIkit = e),
                    (t.fn.uk = e.fn),
                    (e.langdirection = "rtl" == e.$html.attr("dir") ? "right" : "left"),
                    (e.components = {}),
                    (e.component = function (n, i, r) {
                        if (e.components[n] && !r) return e.components[n];
                        var o = function (i, r) {
                            var a = this;
                            return (
                                (this.UIkit = e),
                                    (this.element = i ? e.$(i) : null),
                                    (this.options = t.extend(!0, {}, this.defaults, r)),
                                    (this.plugins = {}),
                                this.element && this.element.data(n, this),
                                    this.init(),
                                    (this.options.plugins.length ? this.options.plugins : Object.keys(o.plugins)).forEach(function (t) {
                                        o.plugins[t].init && (o.plugins[t].init(a), (a.plugins[t] = !0));
                                    }),
                                    this.trigger("init.uk.component", [n, this]),
                                    this
                            );
                        };
                        return (
                            (o.plugins = {}),
                                t.extend(
                                    !0,
                                    o.prototype,
                                    {
                                        defaults: { plugins: [] },
                                        boot: function () {},
                                        init: function () {},
                                        on: function (t, n, i) {
                                            return e.$(this.element || this).on(t, n, i);
                                        },
                                        one: function (t, n, i) {
                                            return e.$(this.element || this).one(t, n, i);
                                        },
                                        off: function (t) {
                                            return e.$(this.element || this).off(t);
                                        },
                                        trigger: function (t, n) {
                                            return e.$(this.element || this).trigger(t, n);
                                        },
                                        find: function (t) {
                                            return e.$(this.element ? this.element : []).find(t);
                                        },
                                        proxy: function (t, e) {
                                            var n = this;
                                            e.split(" ").forEach(function (e) {
                                                n[e] ||
                                                (n[e] = function () {
                                                    return t[e].apply(t, arguments);
                                                });
                                            });
                                        },
                                        mixin: function (t, e) {
                                            var n = this;
                                            e.split(" ").forEach(function (e) {
                                                n[e] || (n[e] = t[e].bind(n));
                                            });
                                        },
                                        option: function () {
                                            return 1 == arguments.length ? this.options[arguments[0]] || void 0 : void (2 == arguments.length && (this.options[arguments[0]] = arguments[1]));
                                        },
                                    },
                                    i
                                ),
                                (this.components[n] = o),
                                (this[n] = function () {
                                    var i, r;
                                    if (arguments.length)
                                        switch (arguments.length) {
                                            case 1:
                                                "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? (i = t(arguments[0])) : (r = arguments[0]);
                                                break;
                                            case 2:
                                                (i = t(arguments[0])), (r = arguments[1]);
                                        }
                                    return i && i.data(n) ? i.data(n) : new e.components[n](i, r);
                                }),
                            e.domready && e.component.boot(n),
                                o
                        );
                    }),
                    (e.plugin = function (t, e, n) {
                        this.components[t].plugins[e] = n;
                    }),
                    (e.component.boot = function (t) {
                        e.components[t].prototype && e.components[t].prototype.boot && !e.components[t].booted && (e.components[t].prototype.boot.apply(e, []), (e.components[t].booted = !0));
                    }),
                    (e.component.bootComponents = function () {
                        for (var t in e.components) e.component.boot(t);
                    }),
                    (e.domObservers = []),
                    (e.domready = !1),
                    (e.ready = function (t) {
                        e.domObservers.push(t), e.domready && t(document);
                    }),
                    (e.on = function (t, n, i) {
                        return t && t.indexOf("ready.uk.dom") > -1 && e.domready && n.apply(e.$doc), e.$doc.on(t, n, i);
                    }),
                    (e.one = function (t, n, i) {
                        return t && t.indexOf("ready.uk.dom") > -1 && e.domready ? (n.apply(e.$doc), e.$doc) : e.$doc.one(t, n, i);
                    }),
                    (e.trigger = function (t, n) {
                        return e.$doc.trigger(t, n);
                    }),
                    (e.domObserve = function (t, n) {
                        e.support.mutationobserver &&
                        ((n = n || function () {}),
                            e.$(t).each(function () {
                                var t = this,
                                    i = e.$(t);
                                if (!i.data("observer"))
                                    try {
                                        var r = new e.support.mutationobserver(
                                            e.Utils.debounce(function () {
                                                n.apply(t, [i]), i.trigger("changed.uk.dom");
                                            }, 50),
                                            { childList: !0, subtree: !0 }
                                        );
                                        r.observe(t, { childList: !0, subtree: !0 }), i.data("observer", r);
                                    } catch (t) {}
                            }));
                    }),
                    (e.init = function (t) {
                        (t = t || document),
                            e.domObservers.forEach(function (e) {
                                e(t);
                            });
                    }),
                    e.on("domready.uk.dom", function () {
                        e.init(), e.domready && e.Utils.checkDisplay();
                    }),
                    document.addEventListener(
                        "DOMContentLoaded",
                        ((s = function () {
                            (e.$body = e.$("body")), e.trigger("beforeready.uk.dom"), e.component.bootComponents();
                            var n,
                                i,
                                r,
                                o = requestAnimationFrame(
                                    ((n = { dir: { x: 0, y: 0 }, x: window.pageXOffset, y: window.pageYOffset }),
                                        (i = function () {
                                            var t = window.pageXOffset,
                                                r = window.pageYOffset;
                                            (n.x != t || n.y != r) &&
                                            ((n.dir.x = t != n.x ? (t > n.x ? 1 : -1) : 0),
                                                (n.dir.y = r != n.y ? (r > n.y ? 1 : -1) : 0),
                                                (n.x = t),
                                                (n.y = r),
                                                e.$doc.trigger("scrolling.uk.document", [{ dir: { x: n.dir.x, y: n.dir.y }, x: t, y: r }])),
                                                cancelAnimationFrame(o),
                                                (o = requestAnimationFrame(i));
                                        }),
                                    e.support.touch && e.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup", i),
                                    (n.x || n.y) && i(),
                                        i)
                                );
                            if (
                                (e.trigger("domready.uk.dom"),
                                e.support.touch &&
                                navigator.userAgent.match(/(iPad|iPhone|iPod)/g) &&
                                e.$win.on(
                                    "load orientationchange resize",
                                    e.Utils.debounce(
                                        (r = function () {
                                            return t(".uk-height-viewport").css("height", window.innerHeight), r;
                                        })(),
                                        100
                                    )
                                ),
                                    e.trigger("afterready.uk.dom"),
                                    (e.domready = !0),
                                    e.support.mutationobserver)
                            ) {
                                var a = e.Utils.debounce(function () {
                                    requestAnimationFrame(function () {
                                        e.init(document.body);
                                    });
                                }, 10);
                                new e.support.mutationobserver(function (t) {
                                    var e = !1;
                                    t.every(function (t) {
                                        if ("childList" != t.type) return !0;
                                        for (var n, i = 0; i < t.addedNodes.length; ++i) if ((n = t.addedNodes[i]).outerHTML && -1 !== n.outerHTML.indexOf("data-uk-")) return (e = !0) && !1;
                                        return !0;
                                    }),
                                    e && a();
                                }).observe(document.body, { childList: !0, subtree: !0 });
                            }
                        }),
                        ("complete" == document.readyState || "interactive" == document.readyState) && setTimeout(s),
                            s)
                    ),
                    e.$html.addClass(e.support.touch ? "uk-touch" : "uk-notouch"),
                    e.support.touch)
            ) {
                var i,
                    r = !1,
                    o = "uk-hover",
                    a = ".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";
                e.$html
                    .on("mouseenter touchstart MSPointerDown pointerdown", a, function () {
                        r && t("." + o).removeClass(o), (r = t(this).addClass(o));
                    })
                    .on("mouseleave touchend MSPointerUp pointerup", function (e) {
                        (i = t(e.target).parents(a)), r && r.not(i).removeClass(o);
                    });
            }
            var s;
            var u;
            var l;
            return e;
        })(window.jQuery)),
        "function" == typeof define &&
        define.amd &&
        define("uikit", function () {
            return (
                (e.load = function (t, n, i, r) {
                    var o,
                        a = t.split(","),
                        s = [],
                        u = (r.config && r.config.uikit && r.config.uikit.base ? r.config.uikit.base : "").replace(/\/+$/g, "");
                    if (!u) throw new Error("Please define base path to UIkit in the requirejs config.");
                    for (o = 0; o < a.length; o += 1) {
                        var l = a[o].replace(/\./g, "/");
                        s.push(u + "/components/" + l);
                    }
                    n(s, function () {
                        i(e);
                    });
                }),
                    e
            );
        });
    })(),
    (function (t) {
        function e() {
            (u = null), c.last && (void 0 !== c.el && c.el.trigger("longTap"), (c = {}));
        }
        function n() {
            u && clearTimeout(u), (u = null);
        }
        function i() {
            o && clearTimeout(o), a && clearTimeout(a), s && clearTimeout(s), u && clearTimeout(u), (o = a = s = u = null), (c = {});
        }
        function r(t) {
            return t.pointerType == t.MSPOINTER_TYPE_TOUCH && t.isPrimary;
        }
        if (!t.fn.swipeLeft) {
            var o,
                a,
                s,
                u,
                l,
                c = {},
                f = "ontouchstart" in window,
                d = window.PointerEvent,
                h = f || (window.DocumentTouch && document instanceof DocumentTouch) || (navigator.msPointerEnabled && navigator.msMaxTouchPoints > 0) || (navigator.pointerEnabled && navigator.maxTouchPoints > 0);
            t(function () {
                var p,
                    m,
                    g,
                    v = 0,
                    $ = 0;
                "MSGesture" in window && ((l = new MSGesture()).target = document.body),
                    t(document)
                        .on("MSGestureEnd gestureend", function (t) {
                            var e = t.originalEvent.velocityX > 1 ? "Right" : t.originalEvent.velocityX < -1 ? "Left" : t.originalEvent.velocityY > 1 ? "Down" : t.originalEvent.velocityY < -1 ? "Up" : null;
                            e && void 0 !== c.el && (c.el.trigger("swipe"), c.el.trigger("swipe" + e));
                        })
                        .on("touchstart MSPointerDown pointerdown", function (n) {
                            ("MSPointerDown" != n.type || r(n.originalEvent)) &&
                            ((g = "MSPointerDown" == n.type || "pointerdown" == n.type ? n : n.originalEvent.touches[0]),
                                (p = Date.now()),
                                (m = p - (c.last || p)),
                                (c.el = t("tagName" in g.target ? g.target : g.target.parentNode)),
                            o && clearTimeout(o),
                                (c.x1 = g.pageX),
                                (c.y1 = g.pageY),
                            m > 0 && 250 >= m && (c.isDoubleTap = !0),
                                (c.last = p),
                                (u = setTimeout(e, 750)),
                            n.originalEvent && n.originalEvent.pointerId && l && ("MSPointerDown" == n.type || "pointerdown" == n.type || "touchstart" == n.type) && l.addPointer(n.originalEvent.pointerId));
                        })
                        .on("touchmove MSPointerMove pointermove", function (t) {
                            ("MSPointerMove" != t.type || r(t.originalEvent)) &&
                            ((g = "MSPointerMove" == t.type || "pointermove" == t.type ? t : t.originalEvent.touches[0]), n(), (c.x2 = g.pageX), (c.y2 = g.pageY), (v += Math.abs(c.x1 - c.x2)), ($ += Math.abs(c.y1 - c.y2)));
                        })
                        .on("touchend MSPointerUp pointerup", function (e) {
                            ("MSPointerUp" != e.type || r(e.originalEvent)) &&
                            (n(),
                                (c.x2 && Math.abs(c.x1 - c.x2) > 30) || (c.y2 && Math.abs(c.y1 - c.y2) > 30)
                                    ? (s = setTimeout(function () {
                                        var t, e, n, i;
                                        void 0 !== c.el &&
                                        (c.el.trigger("swipe"),
                                            c.el.trigger("swipe" + ((t = c.x1), (e = c.x2), (n = c.y1), (i = c.y2), Math.abs(t - e) >= Math.abs(n - i) ? (t - e > 0 ? "Left" : "Right") : n - i > 0 ? "Up" : "Down"))),
                                            (c = {});
                                    }, 0))
                                    : "last" in c &&
                                    (isNaN(v) || (30 > v && 30 > $)
                                        ? (a = setTimeout(function () {
                                            var e = t.Event("tap");
                                            (e.cancelTouch = i),
                                            void 0 !== c.el && c.el.trigger(e),
                                                c.isDoubleTap
                                                    ? (void 0 !== c.el && c.el.trigger("doubleTap"), (c = {}))
                                                    : (o = setTimeout(function () {
                                                        (o = null), void 0 !== c.el && c.el.trigger("singleTap"), (c = {});
                                                    }, 250));
                                        }, 0))
                                        : (c = {}),
                                        (v = $ = 0)));
                        })
                        .on("touchcancel MSPointerCancel pointercancel", function (t) {
                            (("touchcancel" == t.type && f && h) || (!f && "pointercancel" == t.type && d)) && i();
                        }),
                    t(window).on("scroll", i);
            }),
                ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
                    t.fn[e] = function (n) {
                        return t(this).on(e, n);
                    };
                });
        }
    })(jQuery),
    (function (t) {
        "use strict";
        var e,
            n,
            i,
            r = [];
        t.component("stackMargin", {
            defaults: { cls: "uk-margin-small-top", rowfirst: !1, observe: !1 },
            boot: function () {
                t.ready(function (e) {
                    t.$("[data-uk-margin]", e).each(function () {
                        var e = t.$(this);
                        e.data("stackMargin") || t.stackMargin(e, t.Utils.options(e.attr("data-uk-margin")));
                    });
                });
            },
            init: function () {
                var e,
                    n = this;
                t.$win.on(
                    "resize orientationchange",
                    ((e = function () {
                        n.process();
                    }),
                        t.$(function () {
                            e(), t.$win.on("load", e);
                        }),
                        t.Utils.debounce(e, 20))
                ),
                    this.on(
                        "display.uk.check",
                        function () {
                            this.element.is(":visible") && this.process();
                        }.bind(this)
                    ),
                this.options.observe &&
                t.domObserve(this.element, function () {
                    n.element.is(":visible") && n.process();
                }),
                    r.push(this);
            },
            process: function () {
                var e = this.element.children();
                if ((t.Utils.stackMargin(e, this.options), !this.options.rowfirst || !e.length)) return this;
                var n = {},
                    i = !1;
                return (
                    e.removeClass(this.options.rowfirst).each(function (e, r) {
                        (r = t.$(this)), "none" != this.style.display && ((e = r.offset().left), ((n[e] = n[e] || []) && n[e]).push(this), (i = !1 === i ? e : Math.min(i, e)));
                    }),
                        t.$(n[i]).addClass(this.options.rowfirst),
                        this
                );
            },
        }),
            (n = []),
            (i = function (t) {
                if (t.is(":visible")) {
                    var e = t.parent().width(),
                        n = t.data("width"),
                        i = e / n,
                        r = Math.floor(i * t.data("height"));
                    t.css({ height: n > e ? r : t.data("height") });
                }
            }),
            t.component("responsiveElement", {
                defaults: {},
                boot: function () {
                    t.ready(function (e) {
                        t.$("iframe.uk-responsive-width, [data-uk-responsive]", e).each(function () {
                            var e = t.$(this);
                            e.data("responsiveElement") || t.responsiveElement(e, {});
                        });
                    });
                },
                init: function () {
                    var t = this.element;
                    t.attr("width") &&
                    t.attr("height") &&
                    (t.data({ width: t.attr("width"), height: t.attr("height") }).on("display.uk.check", function () {
                        i(t);
                    }),
                        i(t),
                        n.push(t));
                },
            }),
            t.$win.on(
                "resize load",
                t.Utils.debounce(function () {
                    n.forEach(function (t) {
                        i(t);
                    });
                }, 15)
            ),
            (t.Utils.stackMargin = function (e, n) {
                (n = t.$.extend({ cls: "uk-margin-small-top" }, n)), (e = t.$(e).removeClass(n.cls));
                var i = !1;
                e.each(function (e, n, r, o) {
                    "none" != (o = t.$(this)).css("display") &&
                    ((e = o.offset()), (n = o.outerHeight()), (r = e.top + n), o.data({ ukMarginPos: r, ukMarginTop: e.top }), (!1 === i || e.top < i.top) && (i = { top: e.top, left: e.left, pos: r }));
                }).each(function (e) {
                    "none" != (e = t.$(this)).css("display") && e.data("ukMarginTop") > i.top && e.data("ukMarginPos") > i.pos && e.addClass(n.cls);
                });
            }),
            (t.Utils.matchHeights = function (e, n) {
                (e = t.$(e).css("min-height", "")), (n = t.$.extend({ row: !0 }, n));
                var i = function (e) {
                    if (!(e.length < 2)) {
                        var n = 0;
                        e.each(function () {
                            n = Math.max(n, t.$(this).outerHeight());
                        }).each(function () {
                            var e = t.$(this),
                                i = n - ("border-box" == e.css("box-sizing") ? 0 : e.outerHeight() - e.height());
                            e.css("min-height", i + "px");
                        });
                    }
                };
                n.row
                    ? (e.first().width(),
                        setTimeout(function () {
                            var n = !1,
                                r = [];
                            e.each(function () {
                                var e = t.$(this),
                                    o = e.offset().top;
                                o != n && r.length && (i(t.$(r)), (r = []), (o = e.offset().top)), r.push(e), (n = o);
                            }),
                            r.length && i(t.$(r));
                        }, 0))
                    : i(e);
            }),
            (e = {}),
            (t.Utils.inlineSvg = function (n, i) {
                t.$(n || 'img[src$=".svg"]', i || document).each(function () {
                    var n = t.$(this),
                        i = n.attr("src");
                    if (!e[i]) {
                        var r = t.$.Deferred();
                        t.$.get(i, { nc: Math.random() }, function (e) {
                            r.resolve(t.$(e).find("svg"));
                        }),
                            (e[i] = r.promise());
                    }
                    e[i].then(function (e) {
                        var i = t.$(e).clone();
                        n.attr("id") && i.attr("id", n.attr("id")),
                        n.attr("class") && i.attr("class", n.attr("class")),
                        n.attr("style") && i.attr("style", n.attr("style")),
                        n.attr("width") && (i.attr("width", n.attr("width")), n.attr("height") || i.removeAttr("height")),
                        n.attr("height") && (i.attr("height", n.attr("height")), n.attr("width") || i.removeAttr("width")),
                            n.replaceWith(i);
                    });
                });
            }),
            t.ready(function (e) {
                t.Utils.inlineSvg("[data-uk-svg]", e);
            }),
            (t.Utils.getCssVar = function (t) {
                var e,
                    n = document.documentElement,
                    i = n.appendChild(document.createElement("div"));
                i.classList.add("var-" + t);
                try {
                    e = JSON.parse((e = getComputedStyle(i, ":before").content.replace(/^["'](.*)["']$/, "$1")));
                } catch (t) {
                    e = void 0;
                }
                return n.removeChild(i), e;
            });
    })(UIkit2),
    (function (t) {
        "use strict";
        function e(e, n) {
            n = t.$.extend({ duration: 1e3, transition: "easeOutExpo", offset: 0, complete: function () {} }, n);
            var i = e.offset().top - n.offset,
                r = t.$doc.height(),
                o = window.innerHeight;
            i + o > r && (i = r - o), t.$("html,body").stop().animate({ scrollTop: i }, n.duration, n.transition).promise().done(n.complete);
        }
        t.component("smoothScroll", {
            boot: function () {
                t.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function () {
                    var e = t.$(this);
                    return e.data("smoothScroll") || (t.smoothScroll(e, t.Utils.options(e.attr("data-uk-smooth-scroll"))), e.trigger("click")), !1;
                });
            },
            init: function () {
                var n = this;
                this.on("click", function (i) {
                    i.preventDefault(), e(t.$(this.hash).length ? t.$(this.hash) : t.$("body"), n.options);
                });
            },
        }),
            (t.Utils.scrollToElement = e),
        t.$.easing.easeOutExpo ||
        (t.$.easing.easeOutExpo = function (t, e, n, i, r) {
            return e == r ? n + i : i * (1 - Math.pow(2, (-10 * e) / r)) + n;
        });
    })(UIkit2),
    (function (t) {
        "use strict";
        var e = t.$win,
            n = t.$doc,
            i = [],
            r = function () {
                for (var t = 0; t < i.length; t++) window.requestAnimationFrame.apply(window, [i[t].check]);
            };
        t.component("scrollspy", {
            defaults: { target: !1, cls: "uk-scrollspy-inview", initcls: "uk-scrollspy-init-inview", topoffset: 0, leftoffset: 0, repeat: !1, delay: 0 },
            boot: function () {
                n.on("scrolling.uk.document", r),
                    e.on("load resize orientationchange", t.Utils.debounce(r, 50)),
                    t.ready(function (e) {
                        t.$("[data-uk-scrollspy]", e).each(function () {
                            var e = t.$(this);
                            e.data("scrollspy") || t.scrollspy(e, t.Utils.options(e.attr("data-uk-scrollspy")));
                        });
                    });
            },
            init: function () {
                var e,
                    n = this,
                    r = this.options.cls.split(/,/),
                    o = function () {
                        var i = n.options.target ? n.element.find(n.options.target) : n.element,
                            o = 1 === i.length ? 1 : 0,
                            a = 0;
                        i.each(function () {
                            var i = t.$(this),
                                s = i.data("inviewstate"),
                                u = t.Utils.isInView(i, n.options),
                                l = i.attr("data-uk-scrollspy-cls") || r[a].trim();
                            !u ||
                            s ||
                            i.data("scrollspy-idle") ||
                            (e || (i.addClass(n.options.initcls), (n.offset = i.offset()), (e = !0), i.trigger("init.uk.scrollspy")),
                                i.data(
                                    "scrollspy-idle",
                                    setTimeout(function () {
                                        i.addClass("uk-scrollspy-inview").toggleClass(l).width(), i.trigger("inview.uk.scrollspy"), i.data("scrollspy-idle", !1), i.data("inviewstate", !0);
                                    }, n.options.delay * o)
                                ),
                                o++),
                            !u &&
                            s &&
                            n.options.repeat &&
                            (i.data("scrollspy-idle") && (clearTimeout(i.data("scrollspy-idle")), i.data("scrollspy-idle", !1)),
                                i.removeClass("uk-scrollspy-inview").toggleClass(l),
                                i.data("inviewstate", !1),
                                i.trigger("outview.uk.scrollspy")),
                                (a = r[a + 1] ? a + 1 : 0);
                        });
                    };
                o(), (this.check = o), i.push(this);
            },
        });
        var o = [],
            a = function () {
                for (var t = 0; t < o.length; t++) window.requestAnimationFrame.apply(window, [o[t].check]);
            };
        t.component("scrollspynav", {
            defaults: { cls: "uk-active", closest: !1, topoffset: 0, leftoffset: 0, smoothscroll: !1 },
            boot: function () {
                n.on("scrolling.uk.document", a),
                    e.on("resize orientationchange", t.Utils.debounce(a, 50)),
                    t.ready(function (e) {
                        t.$("[data-uk-scrollspy-nav]", e).each(function () {
                            var e = t.$(this);
                            e.data("scrollspynav") || t.scrollspynav(e, t.Utils.options(e.attr("data-uk-scrollspy-nav")));
                        });
                    });
            },
            init: function () {
                var n,
                    i = [],
                    r = this.find("a[href^='#']").each(function () {
                        "#" !== this.getAttribute("href").trim() && i.push(this.getAttribute("href"));
                    }),
                    a = t.$(i.join(",")),
                    s = this.options.cls,
                    u = this.options.closest || this.options.closest,
                    l = this,
                    c = function () {
                        n = [];
                        for (var i = 0; i < a.length; i++) t.Utils.isInView(a.eq(i), l.options) && n.push(a.eq(i));
                        if (n.length) {
                            var o,
                                c = e.scrollTop(),
                                f = (function () {
                                    for (var t = 0; t < n.length; t++) if (n[t].offset().top - l.options.topoffset >= c) return n[t];
                                })();
                            if (!f) return;
                            l.options.closest
                                ? (r.blur().closest(u).removeClass(s),
                                    (o = r
                                        .filter("a[href='#" + f.attr("id") + "']")
                                        .closest(u)
                                        .addClass(s)))
                                : (o = r
                                    .removeClass(s)
                                    .filter("a[href='#" + f.attr("id") + "']")
                                    .addClass(s)),
                                l.element.trigger("inview.uk.scrollspynav", [f, o]);
                        }
                    };
                this.options.smoothscroll &&
                t.smoothScroll &&
                r.each(function () {
                    t.smoothScroll(this, l.options.smoothscroll);
                }),
                    c(),
                    this.element.data("scrollspynav", this),
                    (this.check = c),
                    o.push(this);
            },
        });
    })(UIkit2),
    (function (t) {
        "use strict";
        var e = [];
        t.component("toggle", {
            defaults: { target: !1, cls: "uk-hidden", animation: !1, duration: 200 },
            boot: function () {
                t.ready(function (n) {
                    t.$("[data-uk-toggle]", n).each(function () {
                        var e = t.$(this);
                        e.data("toggle") || t.toggle(e, t.Utils.options(e.attr("data-uk-toggle")));
                    }),
                        setTimeout(function () {
                            e.forEach(function (t) {
                                t.getToggles();
                            });
                        }, 0);
                });
            },
            init: function () {
                var t = this;
                (this.aria = -1 !== this.options.cls.indexOf("uk-hidden")),
                    this.on("click", function (e) {
                        t.element.is('a[href="#"]') && e.preventDefault(), t.toggle();
                    }),
                    e.push(this);
            },
            toggle: function () {
                if ((this.getToggles(), this.totoggle.length)) {
                    if (this.options.animation && t.support.animation) {
                        var e = this,
                            n = this.options.animation.split(",");
                        1 == n.length && (n[1] = n[0]),
                            (n[0] = n[0].trim()),
                            (n[1] = n[1].trim()),
                            this.totoggle.css("animation-duration", this.options.duration + "ms"),
                            this.totoggle.each(function () {
                                var i = t.$(this);
                                i.hasClass(e.options.cls)
                                    ? (i.toggleClass(e.options.cls),
                                        t.Utils.animate(i, n[0]).then(function () {
                                            i.css("animation-duration", ""), t.Utils.checkDisplay(i);
                                        }))
                                    : t.Utils.animate(this, n[1] + " uk-animation-reverse").then(function () {
                                        i.toggleClass(e.options.cls).css("animation-duration", ""), t.Utils.checkDisplay(i);
                                    });
                            });
                    } else this.totoggle.toggleClass(this.options.cls), t.Utils.checkDisplay(this.totoggle);
                    this.updateAria();
                }
            },
            getToggles: function () {
                (this.totoggle = this.options.target ? t.$(this.options.target) : []), this.updateAria();
            },
            updateAria: function () {
                this.aria &&
                this.totoggle.length &&
                this.totoggle.not("[aria-hidden]").each(function () {
                    t.$(this).attr("aria-hidden", t.$(this).hasClass("uk-hidden"));
                });
            },
        });
    })(UIkit2),
    (function (t) {
        "use strict";
        t.component("alert", {
            defaults: { fade: !0, duration: 200, trigger: ".uk-alert-close" },
            boot: function () {
                t.$html.on("click.alert.uikit", "[data-uk-alert]", function (e) {
                    var n = t.$(this);
                    if (!n.data("alert")) {
                        var i = t.alert(n, t.Utils.options(n.attr("data-uk-alert")));
                        t.$(e.target).is(i.options.trigger) && (e.preventDefault(), i.close());
                    }
                });
            },
            init: function () {
                var t = this;
                this.on("click", this.options.trigger, function (e) {
                    e.preventDefault(), t.close();
                });
            },
            close: function () {
                var t = this.trigger("close.uk.alert"),
                    e = function () {
                        this.trigger("closed.uk.alert").remove();
                    }.bind(this);
                this.options.fade ? t.css("overflow", "hidden").css("max-height", t.height()).animate({ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 }, this.options.duration, e) : e();
            },
        });
    })(UIkit2),
    (function (t) {
        "use strict";
        t.component("buttonRadio", {
            defaults: { activeClass: "uk-active", target: ".uk-button" },
            boot: function () {
                t.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function (e) {
                    var n = t.$(this);
                    if (!n.data("buttonRadio")) {
                        var i = t.buttonRadio(n, t.Utils.options(n.attr("data-uk-button-radio"))),
                            r = t.$(e.target);
                        r.is(i.options.target) && r.trigger("click");
                    }
                });
            },
            init: function () {
                var e = this;
                this.find(e.options.target)
                    .attr("aria-checked", "false")
                    .filter("." + e.options.activeClass)
                    .attr("aria-checked", "true"),
                    this.on("click", this.options.target, function (n) {
                        var i = t.$(this);
                        i.is('a[href="#"]') && n.preventDefault(),
                            e.find(e.options.target).not(i).removeClass(e.options.activeClass).blur(),
                            i.addClass(e.options.activeClass),
                            e.find(e.options.target).not(i).attr("aria-checked", "false"),
                            i.attr("aria-checked", "true"),
                            e.trigger("change.uk.button", [i]);
                    });
            },
            getSelected: function () {
                return this.find("." + this.options.activeClass);
            },
        }),
            t.component("buttonCheckbox", {
                defaults: { activeClass: "uk-active", target: ".uk-button" },
                boot: function () {
                    t.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function (e) {
                        var n = t.$(this);
                        if (!n.data("buttonCheckbox")) {
                            var i = t.buttonCheckbox(n, t.Utils.options(n.attr("data-uk-button-checkbox"))),
                                r = t.$(e.target);
                            r.is(i.options.target) && r.trigger("click");
                        }
                    });
                },
                init: function () {
                    var e = this;
                    this.find(e.options.target)
                        .attr("aria-checked", "false")
                        .filter("." + e.options.activeClass)
                        .attr("aria-checked", "true"),
                        this.on("click", this.options.target, function (n) {
                            var i = t.$(this);
                            i.is('a[href="#"]') && n.preventDefault(), i.toggleClass(e.options.activeClass).blur(), i.attr("aria-checked", i.hasClass(e.options.activeClass)), e.trigger("change.uk.button", [i]);
                        });
                },
                getSelected: function () {
                    return this.find("." + this.options.activeClass);
                },
            }),
            t.component("button", {
                defaults: {},
                boot: function () {
                    t.$html.on("click.button.uikit", "[data-uk-button]", function () {
                        var e = t.$(this);
                        e.data("button") || (t.button(e, t.Utils.options(e.attr("data-uk-button"))), e.trigger("click"));
                    });
                },
                init: function () {
                    var t = this;
                    this.element.attr("aria-pressed", this.element.hasClass("uk-active")),
                        this.on("click", function (e) {
                            t.element.is('a[href="#"]') && e.preventDefault(), t.toggle(), t.trigger("change.uk.button", [t.element.blur().hasClass("uk-active")]);
                        });
                },
                toggle: function () {
                    this.element.toggleClass("uk-active"), this.element.attr("aria-pressed", this.element.hasClass("uk-active"));
                },
            });
    })(UIkit2),
    (function (t) {
        "use strict";
        function e(e, n, i, r) {
            if (((e = t.$(e)), (n = t.$(n)), (i = i || window.innerWidth), (r = r || e.offset()), n.length)) {
                var o = n.outerWidth();
                if ((e.css("min-width", o), "right" == t.langdirection)) {
                    var a = i - (n.offset().left + o),
                        s = i - (e.offset().left + e.outerWidth());
                    e.css("margin-right", a - s);
                } else e.css("margin-left", n.offset().left - r.left);
            }
        }
        var n,
            i = !1,
            r = {
                x: {
                    "bottom-left": "bottom-right",
                    "bottom-right": "bottom-left",
                    "bottom-center": "bottom-center",
                    "top-left": "top-right",
                    "top-right": "top-left",
                    "top-center": "top-center",
                    "left-top": "right-top",
                    "left-bottom": "right-bottom",
                    "left-center": "right-center",
                    "right-top": "left-top",
                    "right-bottom": "left-bottom",
                    "right-center": "left-center",
                },
                y: {
                    "bottom-left": "top-left",
                    "bottom-right": "top-right",
                    "bottom-center": "top-center",
                    "top-left": "bottom-left",
                    "top-right": "bottom-right",
                    "top-center": "bottom-center",
                    "left-top": "left-bottom",
                    "left-bottom": "left-top",
                    "left-center": "left-center",
                    "right-top": "right-bottom",
                    "right-bottom": "right-top",
                    "right-center": "right-center",
                },
                xy: {
                    "bottom-left": "top-right",
                    "bottom-right": "top-left",
                    "bottom-center": "top-center",
                    "top-left": "bottom-right",
                    "top-right": "bottom-left",
                    "top-center": "bottom-center",
                    "left-top": "right-bottom",
                    "left-bottom": "right-top",
                    "left-center": "right-center",
                    "right-top": "left-bottom",
                    "right-bottom": "left-top",
                    "right-center": "left-center",
                },
            };
        t.component("dropdown", {
            defaults: { mode: "hover", pos: "bottom-left", offset: 0, remaintime: 800, justify: !1, boundary: t.$win, delay: 0, dropdownSelector: ".uk-dropdown,.uk-dropdown-blank", hoverDelayIdle: 250, preventflip: !1 },
            remainIdle: !1,
            boot: function () {
                var e = t.support.touch ? "click" : "mouseenter";
                t.$html.on(e + ".dropdown.uikit focus pointerdown", "[data-uk-dropdown]", function (n) {
                    var i = t.$(this);
                    if (!i.data("dropdown")) {
                        var r = t.dropdown(i, t.Utils.options(i.attr("data-uk-dropdown")));
                        ("click" == n.type || ("mouseenter" == n.type && "hover" == r.options.mode)) && r.element.trigger(e), r.dropdown.length && n.preventDefault();
                    }
                });
            },
            init: function () {
                var e = this;
                (this.dropdown = this.find(this.options.dropdownSelector)),
                    (this.offsetParent = this.dropdown
                        .parents()
                        .filter(function () {
                            return -1 !== t.$.inArray(t.$(this).css("position"), ["relative", "fixed", "absolute"]);
                        })
                        .slice(0, 1)),
                this.offsetParent.length || (this.offsetParent = this.element),
                    (this.centered = this.dropdown.hasClass("uk-dropdown-center")),
                    (this.justified = !!this.options.justify && t.$(this.options.justify)),
                    (this.boundary = t.$(this.options.boundary)),
                this.boundary.length || (this.boundary = t.$win),
                this.dropdown.hasClass("uk-dropdown-up") && (this.options.pos = "top-left"),
                this.dropdown.hasClass("uk-dropdown-flip") && (this.options.pos = this.options.pos.replace("left", "right")),
                this.dropdown.hasClass("uk-dropdown-center") && (this.options.pos = this.options.pos.replace(/(left|right)/, "center")),
                    this.element.attr("aria-haspopup", "true"),
                    this.element.attr("aria-expanded", this.element.hasClass("uk-open")),
                    this.dropdown.attr("aria-hidden", "true"),
                    "click" == this.options.mode || t.support.touch
                        ? this.on("click.uk.dropdown", function (n) {
                            var i = t.$(n.target);
                            i.parents(e.options.dropdownSelector).length || ((i.is("a[href='#']") || i.parent().is("a[href='#']") || (e.dropdown.length && !e.dropdown.is(":visible"))) && n.preventDefault(), i.blur()),
                                e.element.hasClass("uk-open") ? (!e.dropdown.find(n.target).length || i.is(".uk-dropdown-close") || i.parents(".uk-dropdown-close").length) && e.hide() : e.show();
                        })
                        : this.on("mouseenter", function () {
                            e.trigger("pointerenter.uk.dropdown", [e]),
                            e.remainIdle && clearTimeout(e.remainIdle),
                            n && clearTimeout(n),
                            (i && i == e) ||
                            (n =
                                i && i != e
                                    ? setTimeout(function () {
                                        n = setTimeout(e.show.bind(e), e.options.delay);
                                    }, e.options.hoverDelayIdle)
                                    : setTimeout(e.show.bind(e), e.options.delay));
                        })
                            .on("mouseleave", function () {
                                n && clearTimeout(n),
                                    (e.remainIdle = setTimeout(function () {
                                        i && i == e && e.hide();
                                    }, e.options.remaintime)),
                                    e.trigger("pointerleave.uk.dropdown", [e]);
                            })
                            .on("click", function (n) {
                                var r = t.$(n.target);
                                return (
                                    e.remainIdle && clearTimeout(e.remainIdle),
                                        i && i == e
                                            ? void ((!e.dropdown.find(n.target).length || r.is(".uk-dropdown-close") || r.parents(".uk-dropdown-close").length) && e.hide())
                                            : ((r.is("a[href='#']") || r.parent().is("a[href='#']")) && n.preventDefault(), void e.show())
                                );
                            });
            },
            show: function () {
                t.$html.off("click.outer.dropdown"),
                i && i != this && i.hide(!0),
                n && clearTimeout(n),
                    this.trigger("beforeshow.uk.dropdown", [this]),
                    this.checkDimensions(),
                    this.element.addClass("uk-open"),
                    this.element.attr("aria-expanded", "true"),
                    this.dropdown.attr("aria-hidden", "false"),
                    this.trigger("show.uk.dropdown", [this]),
                    t.Utils.checkDisplay(this.dropdown, !0),
                    t.Utils.focus(this.dropdown),
                    (i = this),
                    this.registerOuterClick();
            },
            hide: function (t) {
                this.trigger("beforehide.uk.dropdown", [this, t]),
                    this.element.removeClass("uk-open"),
                this.remainIdle && clearTimeout(this.remainIdle),
                    (this.remainIdle = !1),
                    this.element.attr("aria-expanded", "false"),
                    this.dropdown.attr("aria-hidden", "true"),
                    this.trigger("hide.uk.dropdown", [this, t]),
                i == this && (i = !1);
            },
            registerOuterClick: function () {
                var e = this;
                t.$html.off("click.outer.dropdown"),
                    setTimeout(function () {
                        t.$html.on("click.outer.dropdown", function (r) {
                            n && clearTimeout(n), t.$(r.target), i != e || e.element.find(r.target).length || (e.hide(!0), t.$html.off("click.outer.dropdown"));
                        });
                    }, 10);
            },
            checkDimensions: function () {
                if (this.dropdown.length) {
                    this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip").css({ topLeft: "", left: "", marginLeft: "", marginRight: "" }),
                    this.justified && this.justified.length && this.dropdown.css("min-width", "");
                    var n,
                        i = t.$.extend({}, this.offsetParent.offset(), { width: this.offsetParent[0].offsetWidth, height: this.offsetParent[0].offsetHeight }),
                        o = this.options.offset,
                        a = this.dropdown,
                        s = (a.show().offset(), a.outerWidth()),
                        u = a.outerHeight(),
                        l = this.boundary.width(),
                        c = (this.boundary[0] !== window && this.boundary.offset() && this.boundary.offset(), this.options.pos),
                        f = {
                            "bottom-left": { top: 0 + i.height + o, left: 0 },
                            "bottom-right": { top: 0 + i.height + o, left: 0 + i.width - s },
                            "bottom-center": { top: 0 + i.height + o, left: 0 + i.width / 2 - s / 2 },
                            "top-left": { top: 0 - u - o, left: 0 },
                            "top-right": { top: 0 - u - o, left: 0 + i.width - s },
                            "top-center": { top: 0 - u - o, left: 0 + i.width / 2 - s / 2 },
                            "left-top": { top: 0, left: 0 - s - o },
                            "left-bottom": { top: 0 + i.height - u, left: 0 - s - o },
                            "left-center": { top: 0 + i.height / 2 - u / 2, left: 0 - s - o },
                            "right-top": { top: 0, left: 0 + i.width + o },
                            "right-bottom": { top: 0 + i.height - u, left: 0 + i.width + o },
                            "right-center": { top: 0 + i.height / 2 - u / 2, left: 0 + i.width + o },
                        },
                        d = {};
                    if (((n = c.split("-")), (d = f[c] ? f[c] : f["bottom-left"]), this.justified && this.justified.length)) e(a.css({ left: 0 }), this.justified, l);
                    else if (!0 !== this.options.preventflip) {
                        var h;
                        switch (this.checkBoundary(i.left + d.left, i.top + d.top, s, u, l)) {
                            case "x":
                                "x" !== this.options.preventflip && (h = r.x[c] || "right-top");
                                break;
                            case "y":
                                "y" !== this.options.preventflip && (h = r.y[c] || "top-left");
                                break;
                            case "xy":
                                this.options.preventflip || (h = r.xy[c] || "right-bottom");
                        }
                        h &&
                        ((n = h.split("-")),
                            (d = f[h] ? f[h] : f["bottom-left"]),
                            a.addClass("uk-dropdown-autoflip"),
                        this.checkBoundary(i.left + d.left, i.top + d.top, s, u, l) && ((n = c.split("-")), (d = f[c] ? f[c] : f["bottom-left"])));
                    }
                    s > l && (a.addClass("uk-dropdown-stack"), this.trigger("stack.uk.dropdown", [this])),
                        a
                            .css(d)
                            .css("display", "")
                            .addClass("uk-dropdown-" + n[0]);
                }
            },
            checkBoundary: function (e, n, i, r, o) {
                var a = "";
                return (0 > e || e - t.$win.scrollLeft() + i > o) && (a += "x"), (n - t.$win.scrollTop() < 0 || n - t.$win.scrollTop() + r > window.innerHeight) && (a += "y"), a;
            },
        }),
            t.component("dropdownOverlay", {
                defaults: { justify: !1, cls: "", duration: 200 },
                boot: function () {
                    t.ready(function (e) {
                        t.$("[data-uk-dropdown-overlay]", e).each(function () {
                            var e = t.$(this);
                            e.data("dropdownOverlay") || t.dropdownOverlay(e, t.Utils.options(e.attr("data-uk-dropdown-overlay")));
                        });
                    });
                },
                init: function () {
                    var n = this;
                    (this.justified = !!this.options.justify && t.$(this.options.justify)),
                        (this.overlay = this.element.find("uk-dropdown-overlay")),
                    this.overlay.length || (this.overlay = t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)),
                        this.overlay.addClass(this.options.cls),
                        this.on({
                            "beforeshow.uk.dropdown": function (t, i) {
                                (n.dropdown = i), n.justified && n.justified.length && e(n.overlay.css({ display: "block", marginLeft: "", marginRight: "" }), n.justified, n.justified.outerWidth());
                            },
                            "show.uk.dropdown": function () {
                                var e = n.dropdown.dropdown.outerHeight(!0);
                                n.dropdown.element.removeClass("uk-open"),
                                    n.overlay
                                        .stop()
                                        .css("display", "block")
                                        .animate({ height: e }, n.options.duration, function () {
                                            n.dropdown.dropdown.css("visibility", ""), n.dropdown.element.addClass("uk-open"), t.Utils.checkDisplay(n.dropdown.dropdown, !0);
                                        }),
                                    (n.pointerleave = !1);
                            },
                            "hide.uk.dropdown": function () {
                                n.overlay.stop().animate({ height: 0 }, n.options.duration);
                            },
                            "pointerenter.uk.dropdown": function () {
                                clearTimeout(n.remainIdle);
                            },
                            "pointerleave.uk.dropdown": function () {
                                n.pointerleave = !0;
                            },
                        }),
                        this.overlay.on({
                            mouseenter: function () {
                                n.remainIdle && (clearTimeout(n.dropdown.remainIdle), clearTimeout(n.remainIdle));
                            },
                            mouseleave: function () {
                                n.pointerleave &&
                                i &&
                                (n.remainIdle = setTimeout(function () {
                                    i && i.hide();
                                }, i.options.remaintime));
                            },
                        });
                },
            });
    })(UIkit2),
    (function (t) {
        "use strict";
        var e = [];
        t.component("gridMatchHeight", {
            defaults: { target: !1, row: !0, ignorestacked: !1, observe: !1 },
            boot: function () {
                t.ready(function (e) {
                    t.$("[data-uk-grid-match]", e).each(function () {
                        var e = t.$(this);
                        e.data("gridMatchHeight") || t.gridMatchHeight(e, t.Utils.options(e.attr("data-uk-grid-match")));
                    });
                });
            },
            init: function () {
                var n,
                    i = this;
                (this.columns = this.element.children()),
                    (this.elements = this.options.target ? this.find(this.options.target) : this.columns),
                this.columns.length &&
                (t.$win.on(
                    "load resize orientationchange",
                    ((n = function () {
                        i.element.is(":visible") && i.match();
                    }),
                        t.$(function () {
                            n();
                        }),
                        t.Utils.debounce(n, 50))
                ),
                this.options.observe &&
                t.domObserve(this.element, function () {
                    i.element.is(":visible") && i.match();
                }),
                    this.on(
                        "display.uk.check",
                        function () {
                            this.element.is(":visible") && this.match();
                        }.bind(this)
                    ),
                    e.push(this));
            },
            match: function () {
                var e = this.columns.filter(":visible:first");
                if (e.length) return Math.ceil((100 * parseFloat(e.css("width"))) / parseFloat(e.parent().css("width"))) >= 100 && !this.options.ignorestacked ? this.revert() : t.Utils.matchHeights(this.elements, this.options), this;
            },
            revert: function () {
                return this.elements.css("min-height", ""), this;
            },
        }),
            t.component("gridMargin", {
                defaults: { cls: "uk-grid-margin", rowfirst: "uk-row-first" },
                boot: function () {
                    t.ready(function (e) {
                        t.$("[data-uk-grid-margin]", e).each(function () {
                            var e = t.$(this);
                            e.data("gridMargin") || t.gridMargin(e, t.Utils.options(e.attr("data-uk-grid-margin")));
                        });
                    });
                },
                init: function () {
                    t.stackMargin(this.element, this.options);
                },
            });
    })(UIkit2),
    (function (t) {
        "use strict";
        var e,
            n = !1,
            i = 0,
            r = t.$html;
        t.$win.on(
            "resize orientationchange",
            t.Utils.debounce(function () {
                t.$(".uk-modal.uk-open").each(function () {
                    return t.$(this).data("modal") && t.$(this).data("modal").resize();
                });
            }, 150)
        ),
            t.component("modal", {
                defaults: { keyboard: !0, bgclose: !0, minScrollHeight: 150, center: !1, modal: !0 },
                scrollable: !1,
                transition: !1,
                hasTransitioned: !0,
                init: function () {
                    if ((e || (e = t.$("body")), this.element.length)) {
                        var n = this;
                        (this.paddingdir = "padding-" + ("left" == t.langdirection ? "right" : "left")),
                            (this.dialog = this.find(".uk-modal-dialog")),
                            (this.active = !1),
                            this.element.attr("aria-hidden", this.element.hasClass("uk-open")),
                            this.on("click", ".uk-modal-close", function (t) {
                                t.preventDefault(), n.hide();
                            }).on("click", function (e) {
                                t.$(e.target)[0] == n.element[0] && n.options.bgclose && n.hide();
                            }),
                            t.domObserve(this.element, function () {
                                n.resize();
                            });
                    }
                },
                toggle: function () {
                    return this[this.isActive() ? "hide" : "show"]();
                },
                show: function () {
                    if (this.element.length) {
                        var e = this;
                        if (!this.isActive())
                            return (
                                this.options.modal && n && n.hide(!0),
                                    this.element.removeClass("uk-open").show(),
                                    this.resize(!0),
                                this.options.modal && (n = this),
                                    (this.active = !0),
                                    i++,
                                    t.support.transition
                                        ? ((this.hasTransitioned = !1),
                                            this.element
                                                .one(t.support.transition.end, function () {
                                                    (e.hasTransitioned = !0), t.Utils.focus(e.dialog, "a[href]");
                                                })
                                                .addClass("uk-open"))
                                        : (this.element.addClass("uk-open"), t.Utils.focus(this.dialog, "a[href]")),
                                    r.addClass("uk-modal-page").height(),
                                    this.element.attr("aria-hidden", "false"),
                                    this.element.trigger("show.uk.modal"),
                                    t.Utils.checkDisplay(this.dialog, !0),
                                    this
                            );
                    }
                },
                hide: function (e) {
                    if (!e && t.support.transition && this.hasTransitioned) {
                        var n = this;
                        this.one(t.support.transition.end, function () {
                            n._hide();
                        }).removeClass("uk-open");
                    } else this._hide();
                    return this;
                },
                resize: function (t) {
                    if (this.isActive() || t) {
                        var n = e.width();
                        if (
                            ((this.scrollbarwidth = window.innerWidth - n),
                                e.css(this.paddingdir, this.scrollbarwidth),
                                this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"),
                            !this.updateScrollable() && this.options.center)
                        ) {
                            var i = this.dialog.outerHeight(),
                                r = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);
                            i + r < window.innerHeight ? this.dialog.css({ top: window.innerHeight / 2 - i / 2 - r }) : this.dialog.css({ top: "" });
                        }
                    }
                },
                updateScrollable: function () {
                    var t = this.dialog.find(".uk-overflow-container:visible:first");
                    if (t.length) {
                        t.css("height", 0);
                        var e = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
                            n = this.dialog.outerHeight(),
                            i = window.innerHeight - 2 * (20 > e ? 20 : e) - n;
                        return t.css({ maxHeight: i < this.options.minScrollHeight ? "" : i, height: "" }), !0;
                    }
                    return !1;
                },
                _hide: function () {
                    (this.active = !1),
                        i > 0 ? i-- : (i = 0),
                        this.element.hide().removeClass("uk-open"),
                        this.element.attr("aria-hidden", "true"),
                    i || (r.removeClass("uk-modal-page"), e.css(this.paddingdir, "")),
                    n === this && (n = !1),
                        this.trigger("hide.uk.modal");
                },
                isActive: function () {
                    return this.element.hasClass("uk-open");
                },
            }),
            t.component("modalTrigger", {
                boot: function () {
                    t.$html.on("click.modal.uikit", "[data-uk-modal]", function (e) {
                        var n = t.$(this);
                        (n.is("a") && e.preventDefault(), n.data("modalTrigger")) || t.modalTrigger(n, t.Utils.options(n.attr("data-uk-modal"))).show();
                    }),
                        t.$html.on("keydown.modal.uikit", function (t) {
                            n && 27 === t.keyCode && n.options.keyboard && (t.preventDefault(), n.hide());
                        });
                },
                init: function () {
                    var e = this;
                    (this.options = t.$.extend({ target: !!e.element.is("a") && e.element.attr("href") }, this.options)),
                        (this.modal = t.modal(this.options.target, this.options)),
                        this.on("click", function (t) {
                            t.preventDefault(), e.show();
                        }),
                        this.proxy(this.modal, "show hide isActive");
                },
            }),
            (t.modal.dialog = function (e, n) {
                var i,
                    r,
                    o = t.modal(t.$(t.modal.dialog.template).appendTo("body"), n);
                return (
                    o.on("hide.uk.modal", function () {
                        o.persist && (o.persist.appendTo(o.persist.data("modalPersistParent")), (o.persist = !1)), o.element.remove();
                    }),
                        (i = e),
                    (r = o) &&
                    ("object" == typeof i
                        ? (i = i instanceof jQuery ? i : t.$(i)).parent().length && ((r.persist = i), r.persist.data("modalPersistParent", i.parent()))
                        : (i = "string" == typeof i || "number" == typeof i ? t.$("<div></div>").html(i) : t.$("<div></div>").html("UIkit2.modal Error: Unsupported data type: " + typeof i)),
                        i.appendTo(r.element.find(".uk-modal-dialog"))),
                        o
                );
            }),
            (t.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>'),
            (t.modal.alert = function (e, n) {
                n = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, n);
                var i = t.modal.dialog(
                    ['<div class="uk-margin uk-modal-content">' + String(e) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + n.labels.Ok + "</button></div>"].join(""),
                    n
                );
                return (
                    i.on("show.uk.modal", function () {
                        setTimeout(function () {
                            i.element.find("button:first").focus();
                        }, 50);
                    }),
                        i.show()
                );
            }),
            (t.modal.confirm = function (e, n, i) {
                var r = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};
                (n = t.$.isFunction(n) ? n : function () {}), (i = t.$.isFunction(i) ? i : function () {}), (r = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, t.$.isFunction(r) ? {} : r));
                var o = t.modal.dialog(
                    [
                        '<div class="uk-margin uk-modal-content">' + String(e) + "</div>",
                        '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' +
                        r.labels.Cancel +
                        '</button> <button class="uk-button uk-button-primary js-modal-confirm">' +
                        r.labels.Ok +
                        "</button></div>",
                    ].join(""),
                    r
                );
                return (
                    o.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function () {
                        t.$(this).is(".js-modal-confirm") ? n() : i(), o.hide();
                    }),
                        o.on("show.uk.modal", function () {
                            setTimeout(function () {
                                o.element.find(".js-modal-confirm").focus();
                            }, 50);
                        }),
                        o.show()
                );
            }),
            (t.modal.prompt = function (e, n, i, r) {
                (i = t.$.isFunction(i) ? i : function () {}), (r = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, r));
                var o = t.modal.dialog(
                    [
                        e ? '<div class="uk-modal-content uk-form">' + String(e) + "</div>" : "",
                        '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>',
                        '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + r.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + r.labels.Ok + "</button></div>",
                    ].join(""),
                    r
                    ),
                    a = o.element
                        .find("input[type='text']")
                        .val(n || "")
                        .on("keyup", function (t) {
                            13 == t.keyCode && o.element.find(".js-modal-ok").trigger("click");
                        });
                return (
                    o.element.find(".js-modal-ok").on("click", function () {
                        !1 !== i(a.val()) && o.hide();
                    }),
                        o.show()
                );
            }),
            (t.modal.blockUI = function (e, n) {
                var i = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(e || '<div class="uk-text-center">...</div>') + "</div>"].join(""), t.$.extend({ bgclose: !1, keyboard: !1, modal: !1 }, n));
                return (i.content = i.element.find(".uk-modal-content:first")), i.show();
            }),
            (t.modal.labels = { Ok: "Ok", Cancel: "Cancel" });
    })(UIkit2),
    (function (t) {
        "use strict";
        t.component("nav", {
            defaults: { toggle: '>li.uk-parent > a[href="#"]', lists: ">li.uk-parent > ul", multiple: !1 },
            boot: function () {
                t.ready(function (e) {
                    t.$("[data-uk-nav]", e).each(function () {
                        var e = t.$(this);
                        e.data("nav") || t.nav(e, t.Utils.options(e.attr("data-uk-nav")));
                    });
                });
            },
            init: function () {
                var e = this;
                this.on("click.uk.nav", this.options.toggle, function (n) {
                    n.preventDefault();
                    var i = t.$(this);
                    e.open(i.parent()[0] == e.element[0] ? i : i.parent("li"));
                }),
                    this.update(),
                    t.domObserve(this.element, function () {
                        e.element.find(e.options.lists).not("[role]").length && e.update();
                    });
            },
            update: function () {
                var e = this;
                this.find(this.options.lists).each(function () {
                    var n = t.$(this).attr("role", "menu"),
                        i = n.closest("li"),
                        r = i.hasClass("uk-active");
                    i.data("list-container") || (n.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), i.data("list-container", n.parent()[r ? "removeClass" : "addClass"]("uk-hidden"))),
                        i.attr("aria-expanded", i.hasClass("uk-open")),
                    r && e.open(i, !0);
                });
            },
            open: function (e, n) {
                var i = this,
                    r = this.element,
                    o = t.$(e),
                    a = o.data("list-container");
                this.options.multiple ||
                r
                    .children(".uk-open")
                    .not(e)
                    .each(function () {
                        var e = t.$(this);
                        e.data("list-container") &&
                        e
                            .data("list-container")
                            .stop()
                            .animate({ height: 0 }, function () {
                                t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden");
                            });
                    }),
                    o.toggleClass("uk-open"),
                    o.attr("aria-expanded", o.hasClass("uk-open")),
                a &&
                (o.hasClass("uk-open") && a.removeClass("uk-hidden"),
                    n
                        ? (a.stop().height(o.hasClass("uk-open") ? "auto" : 0), o.hasClass("uk-open") || a.addClass("uk-hidden"), this.trigger("display.uk.check"))
                        : a.stop().animate(
                        {
                            height: o.hasClass("uk-open")
                                ? (function (e) {
                                    var n = t.$(e),
                                        i = "auto";
                                    if (n.is(":visible")) i = n.outerHeight();
                                    else {
                                        var r = { position: n.css("position"), visibility: n.css("visibility"), display: n.css("display") };
                                        (i = n.css({ position: "absolute", visibility: "hidden", display: "block" }).outerHeight()), n.css(r);
                                    }
                                    return i;
                                })(a.find("ul:first"))
                                : 0,
                        },
                        function () {
                            o.hasClass("uk-open") ? a.css("height", "") : a.addClass("uk-hidden"), i.trigger("display.uk.check");
                        }
                        ));
            },
        });
    })(UIkit2),
    (function (t) {
        "use strict";
        var e = { x: window.scrollX, y: window.scrollY },
            n = (t.$win, t.$doc, t.$html),
            i = {
                show: function (i, r) {
                    if ((i = t.$(i)).length) {
                        r = t.$.extend({ mode: "push" }, r);
                        var o = t.$("body"),
                            a = i.find(".uk-offcanvas-bar:first"),
                            s = "right" == t.langdirection,
                            u = (a.hasClass("uk-offcanvas-bar-flip") ? -1 : 1) * (s ? -1 : 1),
                            l = window.innerWidth - o.width();
                        (e = { x: window.pageXOffset, y: window.pageYOffset }),
                            a.attr("mode", r.mode),
                            i.addClass("uk-active"),
                            o.css({ width: window.innerWidth - l, height: window.innerHeight }).addClass("uk-offcanvas-page"),
                        ("push" == r.mode || "reveal" == r.mode) && o.css(s ? "margin-right" : "margin-left", (s ? -1 : 1) * a.outerWidth() * u),
                        "reveal" == r.mode && a.css("clip", "rect(0, " + a.outerWidth() + "px, 100vh, 0)"),
                            n.css("margin-top", -1 * e.y).width(),
                            a.addClass("uk-offcanvas-bar-show"),
                            this._initElement(i),
                            a.trigger("show.uk.offcanvas", [i, a]),
                            i.attr("aria-hidden", "false");
                    }
                },
                hide: function (i) {
                    var r = t.$("body"),
                        o = t.$(".uk-offcanvas.uk-active"),
                        a = "right" == t.langdirection,
                        s = o.find(".uk-offcanvas-bar:first"),
                        u = function () {
                            r.removeClass("uk-offcanvas-page").css({ width: "", height: "", marginLeft: "", marginRight: "" }),
                                o.removeClass("uk-active"),
                                s.removeClass("uk-offcanvas-bar-show"),
                                n.css("margin-top", ""),
                                window.scrollTo(e.x, e.y),
                                s.trigger("hide.uk.offcanvas", [o, s]),
                                o.attr("aria-hidden", "true");
                        };
                    o.length &&
                    ("none" == s.attr("mode") && (i = !0),
                        t.support.transition && !i
                            ? (r
                                .one(t.support.transition.end, function () {
                                    u();
                                })
                                .css(a ? "margin-right" : "margin-left", ""),
                            "reveal" == s.attr("mode") && s.css("clip", ""),
                                setTimeout(function () {
                                    s.removeClass("uk-offcanvas-bar-show");
                                }, 0))
                            : u());
                },
                _initElement: function (e) {
                    e.data("OffcanvasInit") ||
                    (e.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function (e) {
                        var n = t.$(e.target);
                        if (!e.type.match(/swipe/) && !n.hasClass("uk-offcanvas-close")) {
                            if (n.hasClass("uk-offcanvas-bar")) return;
                            if (n.parents(".uk-offcanvas-bar:first").length) return;
                        }
                        e.stopImmediatePropagation(), i.hide();
                    }),
                        e.on("click", 'a[href*="#"]', function () {
                            var e = t.$(this),
                                n = e.attr("href");
                            "#" != n &&
                            (t.$doc.one("hide.uk.offcanvas", function () {
                                var i;
                                try {
                                    i = t.$(e[0].hash);
                                } catch (t) {
                                    i = "";
                                }
                                i.length || (i = t.$('[name="' + e[0].hash.replace("#", "") + '"]')),
                                    i.length && t.Utils.scrollToElement ? t.Utils.scrollToElement(i, t.Utils.options(e.attr("data-uk-smooth-scroll") || "{}")) : (window.location.href = n);
                            }),
                                i.hide());
                        }),
                        e.data("OffcanvasInit", !0));
                },
            };
        t.component("offcanvasTrigger", {
            boot: function () {
                n.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function (e) {
                    e.preventDefault();
                    var n = t.$(this);
                    n.data("offcanvasTrigger") || (t.offcanvasTrigger(n, t.Utils.options(n.attr("data-uk-offcanvas"))), n.trigger("click"));
                }),
                    n.on("keydown.uk.offcanvas", function (t) {
                        27 === t.keyCode && i.hide();
                    });
            },
            init: function () {
                var e = this;
                (this.options = t.$.extend({ target: !!e.element.is("a") && e.element.attr("href"), mode: "push" }, this.options)),
                    this.on("click", function (t) {
                        t.preventDefault(), i.show(e.options.target, e.options);
                    });
            },
        }),
            (t.offcanvas = i);
    })(UIkit2),
    (function (t) {
        "use strict";
        function e(e, n, i) {
            var r,
                o = t.$.Deferred(),
                a = e,
                s = e;
            return i[0] === n[0]
                ? (o.resolve(), o.promise())
                : ("object" == typeof e && ((a = e[0]), (s = e[1] || e[0])),
                    t.$body.css("overflow-x", "hidden"),
                    (r = function () {
                        n && n.hide().removeClass("uk-active " + s + " uk-animation-reverse"),
                            i
                                .addClass(a)
                                .one(
                                    t.support.animation.end,
                                    function () {
                                        setTimeout(function () {
                                            i.removeClass("" + a).css({ opacity: "", display: "" });
                                        }, 0),
                                            o.resolve(),
                                            t.$body.css("overflow-x", ""),
                                        n && n.css({ opacity: "", display: "" });
                                    }.bind(this)
                                )
                                .show();
                    }),
                    i.css("animation-duration", this.options.duration + "ms"),
                    n && n.length
                        ? (n.css("animation-duration", this.options.duration + "ms"),
                            n
                                .css("display", "none")
                                .addClass(s + " uk-animation-reverse")
                                .one(
                                    t.support.animation.end,
                                    function () {
                                        r();
                                    }.bind(this)
                                )
                                .css("display", ""))
                        : (i.addClass("uk-active"), r()),
                    o.promise());
        }
        var n;
        t.component("switcher", {
            defaults: { connect: !1, toggle: ">*", active: 0, animation: !1, duration: 200, swiping: !0 },
            animating: !1,
            boot: function () {
                t.ready(function (e) {
                    t.$("[data-uk-switcher]", e).each(function () {
                        var e = t.$(this);
                        e.data("switcher") || t.switcher(e, t.Utils.options(e.attr("data-uk-switcher")));
                    });
                });
            },
            init: function () {
                var e = this;
                this.on("click.uk.switcher", this.options.toggle, function (t) {
                    t.preventDefault(), e.show(this);
                }),
                this.options.connect &&
                ((this.connect = t.$(this.options.connect)),
                this.connect.length &&
                (this.connect.on("click.uk.switcher", "[data-uk-switcher-item]", function (n) {
                    n.preventDefault();
                    var i = t.$(this).attr("data-uk-switcher-item");
                    if (e.index != i)
                        switch (i) {
                            case "next":
                            case "previous":
                                e.show(e.index + ("next" == i ? 1 : -1));
                                break;
                            default:
                                e.show(parseInt(i, 10));
                        }
                }),
                this.options.swiping &&
                this.connect.on("swipeRight swipeLeft", function (t) {
                    t.preventDefault(), window.getSelection().toString() || e.show(e.index + ("swipeLeft" == t.type ? 1 : -1));
                }),
                    this.update()));
            },
            update: function () {
                this.connect.children().removeClass("uk-active").attr("aria-hidden", "true");
                var t = this.find(this.options.toggle),
                    e = t.filter(".uk-active");
                if (e.length) this.show(e, !1);
                else {
                    if (!1 === this.options.active) return;
                    (e = t.eq(this.options.active)), this.show(e.length ? e : t.eq(0), !1);
                }
                t.not(e).attr("aria-expanded", "false"), e.attr("aria-expanded", "true");
            },
            show: function (i, r) {
                if (!this.animating) {
                    var o = this.find(this.options.toggle);
                    isNaN(i) ? (i = t.$(i)) : ((i = 0 > i ? o.length - 1 : i), (i = o.eq(o[i] ? i : 0)));
                    var a = this,
                        s = t.$(i),
                        u =
                            n[this.options.animation] ||
                            function (t, i) {
                                if (!a.options.animation) return n.none.apply(a);
                                var r = a.options.animation.split(",");
                                return 1 == r.length && (r[1] = r[0]), (r[0] = r[0].trim()), (r[1] = r[1].trim()), e.apply(a, [r, t, i]);
                            };
                    (!1 !== r && t.support.animation) || (u = n.none),
                    s.hasClass("uk-disabled") ||
                    (o.attr("aria-expanded", "false"),
                        s.attr("aria-expanded", "true"),
                        o.filter(".uk-active").removeClass("uk-active"),
                        s.addClass("uk-active"),
                    this.options.connect &&
                    this.connect.length &&
                    ((this.index = this.find(this.options.toggle).index(s)),
                    -1 == this.index && (this.index = 0),
                        this.connect.each(function () {
                            var e = t.$(this),
                                n = t.$(e.children()),
                                i = t.$(n.filter(".uk-active")),
                                r = t.$(n.eq(a.index));
                            (a.animating = !0),
                                u.apply(a, [i, r]).then(function () {
                                    i.removeClass("uk-active"), r.addClass("uk-active"), i.attr("aria-hidden", "true"), r.attr("aria-hidden", "false"), t.Utils.checkDisplay(r, !0), (a.animating = !1);
                                });
                        })),
                        this.trigger("show.uk.switcher", [s]));
                }
            },
        }),
            (n = {
                none: function () {
                    var e = t.$.Deferred();
                    return e.resolve(), e.promise();
                },
                fade: function (t, n) {
                    return e.apply(this, ["uk-animation-fade", t, n]);
                },
                "slide-bottom": function (t, n) {
                    return e.apply(this, ["uk-animation-slide-bottom", t, n]);
                },
                "slide-top": function (t, n) {
                    return e.apply(this, ["uk-animation-slide-top", t, n]);
                },
                "slide-vertical": function (t, n) {
                    var i = ["uk-animation-slide-top", "uk-animation-slide-bottom"];
                    return t && t.index() > n.index() && i.reverse(), e.apply(this, [i, t, n]);
                },
                "slide-left": function (t, n) {
                    return e.apply(this, ["uk-animation-slide-left", t, n]);
                },
                "slide-right": function (t, n) {
                    return e.apply(this, ["uk-animation-slide-right", t, n]);
                },
                "slide-horizontal": function (t, n) {
                    var i = ["uk-animation-slide-right", "uk-animation-slide-left"];
                    return t && t.index() > n.index() && i.reverse(), e.apply(this, [i, t, n]);
                },
                scale: function (t, n) {
                    return e.apply(this, ["uk-animation-scale-up", t, n]);
                },
            }),
            (t.switcher.animations = n);
    })(UIkit2),
    (function (t) {
        "use strict";
        t.component("tab", {
            defaults: { target: ">li:not(.uk-tab-responsive, .uk-disabled)", connect: !1, active: 0, animation: !1, duration: 200, swiping: !0 },
            boot: function () {
                t.ready(function (e) {
                    t.$("[data-uk-tab]", e).each(function () {
                        var e = t.$(this);
                        e.data("tab") || t.tab(e, t.Utils.options(e.attr("data-uk-tab")));
                    });
                });
            },
            init: function () {
                var e = this;
                (this.current = !1),
                    this.on("click.uk.tab", this.options.target, function (n) {
                        if ((n.preventDefault(), !e.switcher || !e.switcher.animating)) {
                            var i = e.find(e.options.target).not(this);
                            i.removeClass("uk-active").blur(),
                                e.trigger("change.uk.tab", [t.$(this).addClass("uk-active"), e.current]),
                                (e.current = t.$(this)),
                            e.options.connect || (i.attr("aria-expanded", "false"), t.$(this).attr("aria-expanded", "true"));
                        }
                    }),
                this.options.connect && (this.connect = t.$(this.options.connect)),
                    (this.responsivetab = t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>')),
                    (this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown")),
                    (this.responsivetab.lst = this.responsivetab.dropdown.find("ul")),
                    (this.responsivetab.caption = this.responsivetab.find("a:first")),
                this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"),
                    this.responsivetab.lst.on("click.uk.tab", "a", function (n) {
                        n.preventDefault(), n.stopPropagation();
                        var i = t.$(this);
                        e.element.children("li:not(.uk-tab-responsive)").eq(i.data("index")).trigger("click");
                    }),
                    this.on("show.uk.switcher change.uk.tab", function (t, n) {
                        e.responsivetab.caption.html(n.text());
                    }),
                    this.element.append(this.responsivetab),
                this.options.connect &&
                (this.switcher = t.switcher(this.element, {
                    toggle: ">li:not(.uk-tab-responsive)",
                    connect: this.options.connect,
                    active: this.options.active,
                    animation: this.options.animation,
                    duration: this.options.duration,
                    swiping: this.options.swiping,
                })),
                    t.dropdown(this.responsivetab, { mode: "click", preventflip: "y" }),
                    e.trigger("change.uk.tab", [this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]),
                    this.check(),
                    t.$win.on(
                        "resize orientationchange",
                        t.Utils.debounce(function () {
                            e.element.is(":visible") && e.check();
                        }, 100)
                    ),
                    this.on("display.uk.check", function () {
                        e.element.is(":visible") && e.check();
                    });
            },
            check: function () {
                var e = this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");
                if (e.length) {
                    var n,
                        i,
                        r = e.eq(0).offset().top + Math.ceil(e.eq(0).height() / 2),
                        o = !1;
                    if (
                        (this.responsivetab.lst.empty(),
                            e.each(function () {
                                t.$(this).offset().top > r && (o = !0);
                            }),
                            o)
                    )
                        for (var a = 0; a < e.length; a++)
                            (n = t.$(e.eq(a))).find("a"),
                            "none" == n.css("float") || n.attr("uk-dropdown") || (n.hasClass("uk-disabled") || ((i = t.$(n[0].outerHTML)).find("a").data("index", a), this.responsivetab.lst.append(i)), n.addClass("uk-hidden"));
                    this.responsivetab[this.responsivetab.lst.children("li").length ? "removeClass" : "addClass"]("uk-hidden");
                } else this.responsivetab.addClass("uk-hidden");
            },
        });
    })(UIkit2),
    (function (t) {
        "use strict";
        t.component("cover", {
            defaults: { automute: !0 },
            boot: function () {
                t.ready(function (e) {
                    t.$("[data-uk-cover]", e).each(function () {
                        var e = t.$(this);
                        e.data("cover") || t.cover(e, t.Utils.options(e.attr("data-uk-cover")));
                    });
                });
            },
            init: function () {
                if (
                    ((this.parent = this.element.parent()),
                        t.$win.on(
                            "load resize orientationchange",
                            t.Utils.debounce(
                                function () {
                                    this.check();
                                }.bind(this),
                                100
                            )
                        ),
                        this.on(
                            "display.uk.check",
                            function () {
                                this.element.is(":visible") && this.check();
                            }.bind(this)
                        ),
                        this.check(),
                    this.element.is("iframe") && this.options.automute)
                ) {
                    var e = this.element.attr("src");
                    this.element
                        .attr("src", "")
                        .on("load", function () {
                            this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*");
                        })
                        .attr("src", [e, e.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1"].join(""));
                }
            },
            check: function () {
                this.element.css({ width: "", height: "" }),
                    (this.dimension = { w: this.element.width(), h: this.element.height() }),
                this.element.attr("width") && !isNaN(this.element.attr("width")) && (this.dimension.w = this.element.attr("width")),
                this.element.attr("height") && !isNaN(this.element.attr("height")) && (this.dimension.h = this.element.attr("height")),
                    (this.ratio = this.dimension.w / this.dimension.h);
                var t,
                    e,
                    n = this.parent.width(),
                    i = this.parent.height();
                n / this.ratio < i ? ((t = Math.ceil(i * this.ratio)), (e = i)) : ((t = n), (e = Math.ceil(n / this.ratio))), this.element.css({ width: t, height: e });
            },
        });
    })(UIkit2),
    (function (t) {
        "use strict";
        var e,
            n = !1,
            i = 0,
            r = t.$html;
        t.$win.on(
            "resize orientationchange",
            t.Utils.debounce(function () {
                t.$(".uk-modal.uk-open").each(function () {
                    return t.$(this).data("modal") && t.$(this).data("modal").resize();
                });
            }, 150)
        ),
            t.component("modal", {
                defaults: { keyboard: !0, bgclose: !0, minScrollHeight: 150, center: !1, modal: !0 },
                scrollable: !1,
                transition: !1,
                hasTransitioned: !0,
                init: function () {
                    if ((e || (e = t.$("body")), this.element.length)) {
                        var n = this;
                        (this.paddingdir = "padding-" + ("left" == t.langdirection ? "right" : "left")),
                            (this.dialog = this.find(".uk-modal-dialog")),
                            (this.active = !1),
                            this.element.attr("aria-hidden", this.element.hasClass("uk-open")),
                            this.on("click", ".uk-modal-close", function (t) {
                                t.preventDefault(), n.hide();
                            }).on("click", function (e) {
                                t.$(e.target)[0] == n.element[0] && n.options.bgclose && n.hide();
                            }),
                            t.domObserve(this.element, function () {
                                n.resize();
                            });
                    }
                },
                toggle: function () {
                    return this[this.isActive() ? "hide" : "show"]();
                },
                show: function () {
                    if (this.element.length) {
                        var e = this;
                        if (!this.isActive())
                            return (
                                this.options.modal && n && n.hide(!0),
                                    this.element.removeClass("uk-open").show(),
                                    this.resize(!0),
                                this.options.modal && (n = this),
                                    (this.active = !0),
                                    i++,
                                    t.support.transition
                                        ? ((this.hasTransitioned = !1),
                                            this.element
                                                .one(t.support.transition.end, function () {
                                                    (e.hasTransitioned = !0), t.Utils.focus(e.dialog, "a[href]");
                                                })
                                                .addClass("uk-open"))
                                        : (this.element.addClass("uk-open"), t.Utils.focus(this.dialog, "a[href]")),
                                    r.addClass("uk-modal-page").height(),
                                    this.element.attr("aria-hidden", "false"),
                                    this.element.trigger("show.uk.modal"),
                                    t.Utils.checkDisplay(this.dialog, !0),
                                    this
                            );
                    }
                },
                hide: function (e) {
                    if (!e && t.support.transition && this.hasTransitioned) {
                        var n = this;
                        this.one(t.support.transition.end, function () {
                            n._hide();
                        }).removeClass("uk-open");
                    } else this._hide();
                    return this;
                },
                resize: function (t) {
                    if (this.isActive() || t) {
                        var n = e.width();
                        if (
                            ((this.scrollbarwidth = window.innerWidth - n),
                                e.css(this.paddingdir, this.scrollbarwidth),
                                this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"),
                            !this.updateScrollable() && this.options.center)
                        ) {
                            var i = this.dialog.outerHeight(),
                                r = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);
                            i + r < window.innerHeight ? this.dialog.css({ top: window.innerHeight / 2 - i / 2 - r }) : this.dialog.css({ top: "" });
                        }
                    }
                },
                updateScrollable: function () {
                    var t = this.dialog.find(".uk-overflow-container:visible:first");
                    if (t.length) {
                        t.css("height", 0);
                        var e = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
                            n = this.dialog.outerHeight(),
                            i = window.innerHeight - 2 * (20 > e ? 20 : e) - n;
                        return t.css({ maxHeight: i < this.options.minScrollHeight ? "" : i, height: "" }), !0;
                    }
                    return !1;
                },
                _hide: function () {
                    (this.active = !1),
                        i > 0 ? i-- : (i = 0),
                        this.element.hide().removeClass("uk-open"),
                        this.element.attr("aria-hidden", "true"),
                    i || (r.removeClass("uk-modal-page"), e.css(this.paddingdir, "")),
                    n === this && (n = !1),
                        this.trigger("hide.uk.modal");
                },
                isActive: function () {
                    return this.element.hasClass("uk-open");
                },
            }),
            t.component("modalTrigger", {
                boot: function () {
                    t.$html.on("click.modal.uikit", "[data-uk-modal]", function (e) {
                        var n = t.$(this);
                        (n.is("a") && e.preventDefault(), n.data("modalTrigger")) || t.modalTrigger(n, t.Utils.options(n.attr("data-uk-modal"))).show();
                    }),
                        t.$html.on("keydown.modal.uikit", function (t) {
                            n && 27 === t.keyCode && n.options.keyboard && (t.preventDefault(), n.hide());
                        });
                },
                init: function () {
                    var e = this;
                    (this.options = t.$.extend({ target: !!e.element.is("a") && e.element.attr("href") }, this.options)),
                        (this.modal = t.modal(this.options.target, this.options)),
                        this.on("click", function (t) {
                            t.preventDefault(), e.show();
                        }),
                        this.proxy(this.modal, "show hide isActive");
                },
            }),
            (t.modal.dialog = function (e, n) {
                var i,
                    r,
                    o = t.modal(t.$(t.modal.dialog.template).appendTo("body"), n);
                return (
                    o.on("hide.uk.modal", function () {
                        o.persist && (o.persist.appendTo(o.persist.data("modalPersistParent")), (o.persist = !1)), o.element.remove();
                    }),
                        (i = e),
                    (r = o) &&
                    ("object" == typeof i
                        ? (i = i instanceof jQuery ? i : t.$(i)).parent().length && ((r.persist = i), r.persist.data("modalPersistParent", i.parent()))
                        : (i = "string" == typeof i || "number" == typeof i ? t.$("<div></div>").html(i) : t.$("<div></div>").html("UIkit2.modal Error: Unsupported data type: " + typeof i)),
                        i.appendTo(r.element.find(".uk-modal-dialog"))),
                        o
                );
            }),
            (t.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>'),
            (t.modal.alert = function (e, n) {
                n = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, n);
                var i = t.modal.dialog(
                    ['<div class="uk-margin uk-modal-content">' + String(e) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + n.labels.Ok + "</button></div>"].join(""),
                    n
                );
                return (
                    i.on("show.uk.modal", function () {
                        setTimeout(function () {
                            i.element.find("button:first").focus();
                        }, 50);
                    }),
                        i.show()
                );
            }),
            (t.modal.confirm = function (e, n, i) {
                var r = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};
                (n = t.$.isFunction(n) ? n : function () {}), (i = t.$.isFunction(i) ? i : function () {}), (r = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, t.$.isFunction(r) ? {} : r));
                var o = t.modal.dialog(
                    [
                        '<div class="uk-margin uk-modal-content">' + String(e) + "</div>",
                        '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' +
                        r.labels.Cancel +
                        '</button> <button class="uk-button uk-button-primary js-modal-confirm">' +
                        r.labels.Ok +
                        "</button></div>",
                    ].join(""),
                    r
                );
                return (
                    o.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function () {
                        t.$(this).is(".js-modal-confirm") ? n() : i(), o.hide();
                    }),
                        o.on("show.uk.modal", function () {
                            setTimeout(function () {
                                o.element.find(".js-modal-confirm").focus();
                            }, 50);
                        }),
                        o.show()
                );
            }),
            (t.modal.prompt = function (e, n, i, r) {
                (i = t.$.isFunction(i) ? i : function () {}), (r = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, r));
                var o = t.modal.dialog(
                    [
                        e ? '<div class="uk-modal-content uk-form">' + String(e) + "</div>" : "",
                        '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>',
                        '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + r.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + r.labels.Ok + "</button></div>",
                    ].join(""),
                    r
                    ),
                    a = o.element
                        .find("input[type='text']")
                        .val(n || "")
                        .on("keyup", function (t) {
                            13 == t.keyCode && o.element.find(".js-modal-ok").trigger("click");
                        });
                return (
                    o.element.find(".js-modal-ok").on("click", function () {
                        !1 !== i(a.val()) && o.hide();
                    }),
                        o.show()
                );
            }),
            (t.modal.blockUI = function (e, n) {
                var i = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(e || '<div class="uk-text-center">...</div>') + "</div>"].join(""), t.$.extend({ bgclose: !1, keyboard: !1, modal: !1 }, n));
                return (i.content = i.element.find(".uk-modal-content:first")), i.show();
            }),
            (t.modal.labels = { Ok: "Ok", Cancel: "Cancel" });
    })(UIkit2),
    (function (t, e) {
        "function" == typeof define && define.amd ? define([], e(t)) : "object" == typeof exports ? (module.exports = e(t)) : (t.iziToast = e(t));
    })("undefined" != typeof global ? global : window || this.window || this.global, function (t) {
        "use strict";
        var e = {},
            n = "iziToast",
            i = (document.querySelector("body"), !!/Mobi/.test(navigator.userAgent)),
            r = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
            o = "undefined" != typeof InstallTrigger,
            a = "ontouchstart" in document.documentElement,
            s = ["bottomRight", "bottomLeft", "bottomCenter", "topRight", "topLeft", "topCenter", "center"],
            u = {},
            l = {
                id: null,
                class: "",
                title: "",
                titleColor: "",
                titleSize: "",
                titleLineHeight: "",
                message: "",
                messageColor: "",
                messageSize: "",
                messageLineHeight: "",
                backgroundColor: "",
                theme: "light",
                color: "",
                icon: "",
                iconText: "",
                iconColor: "",
                image: "",
                imageWidth: 50,
                maxWidth: null,
                zindex: null,
                layout: 1,
                balloon: !1,
                close: !0,
                closeOnEscape: !1,
                rtl: !1,
                position: "bottomRight",
                target: "",
                targetFirst: !0,
                toastOnce: !1,
                timeout: 5e3,
                animateInside: !0,
                drag: !0,
                pauseOnHover: !0,
                resetOnHover: !1,
                progressBar: !0,
                progressBarColor: "",
                progressBarEasing: "linear",
                overlay: !1,
                overlayClose: !1,
                overlayColor: "rgba(0, 0, 0, 0.6)",
                transitionIn: "fadeInUp",
                transitionOut: "fadeOut",
                transitionInMobile: "fadeInUp",
                transitionOutMobile: "fadeOutDown",
                buttons: {},
                onOpening: function () {},
                onOpened: function () {},
                onClosing: function () {},
                onClosed: function () {},
            };
        if (
            ("remove" in Element.prototype ||
            (Element.prototype.remove = function () {
                this.parentNode && this.parentNode.removeChild(this);
            }),
            "function" != typeof window.CustomEvent)
        ) {
            var c = function (t, e) {
                e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
            };
            (c.prototype = window.Event.prototype), (window.CustomEvent = c);
        }
        var f = function (t, e, n) {
                if ("[object Object]" === Object.prototype.toString.call(t)) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(n, t[i], i, t);
                else if (t) for (var r = 0, o = t.length; o > r; r++) e.call(n, t[r], r, t);
            },
            d = function (t, e) {
                var n = {};
                return (
                    f(t, function (e, i) {
                        n[i] = t[i];
                    }),
                        f(e, function (t, i) {
                            n[i] = e[i];
                        }),
                        n
                );
            },
            h = function (t) {
                var e = document.createDocumentFragment(),
                    n = document.createElement("div");
                for (n.innerHTML = t; n.firstChild; ) e.appendChild(n.firstChild);
                return e;
            },
            p = {
                move: function (t, e, i, a) {
                    var s;
                    0 !== a &&
                    (t.classList.add(n + "-dragged"),
                        (t.style.transform = "translateX(" + a + "px)"),
                        a > 0
                            ? 0.3 > (s = (180 - a) / 180) && e.hide(t, d(i, { transitionOut: "fadeOutRight", transitionOutMobile: "fadeOutRight" }), "drag")
                            : 0.3 > (s = (180 + a) / 180) && e.hide(t, d(i, { transitionOut: "fadeOutLeft", transitionOutMobile: "fadeOutLeft" }), "drag"),
                        (t.style.opacity = s),
                    0.3 > s && ((r || o) && (t.style.left = a + "px"), (t.parentNode.style.opacity = 0.3), this.stopMoving(t, null)));
                },
                startMoving: function (t, e, n, i) {
                    i = i || window.event;
                    var r = a ? i.touches[0].clientX : i.clientX,
                        o = t.style.transform.replace("px)", ""),
                        s = r - (o = o.replace("translateX(", ""));
                    t.classList.remove(n.transitionIn),
                        t.classList.remove(n.transitionInMobile),
                        (t.style.transition = ""),
                        a
                            ? (document.ontouchmove = function (i) {
                                i.preventDefault();
                                var r = (i = i || window.event).touches[0].clientX - s;
                                p.move(t, e, n, r);
                            })
                            : (document.onmousemove = function (i) {
                                i.preventDefault();
                                var r = (i = i || window.event).clientX - s;
                                p.move(t, e, n, r);
                            });
                },
                stopMoving: function (t, e) {
                    a ? (document.ontouchmove = function () {}) : (document.onmousemove = function () {}),
                        (t.style.opacity = ""),
                        (t.style.transform = ""),
                    t.classList.contains(n + "-dragged") &&
                    (t.classList.remove(n + "-dragged"),
                        (t.style.transition = "transform 0.4s ease, opacity 0.4s ease"),
                        setTimeout(function () {
                            t.style.transition = "";
                        }, 400));
                },
            };
        return (
            (e.destroy = function () {
                f(document.querySelectorAll("." + n + "-wrapper"), function (t, e) {
                    t.remove();
                }),
                    f(document.querySelectorAll("." + n), function (t, e) {
                        t.remove();
                    }),
                    document.removeEventListener(n + "-opened", {}, !1),
                    document.removeEventListener(n + "-opening", {}, !1),
                    document.removeEventListener(n + "-closing", {}, !1),
                    document.removeEventListener(n + "-closed", {}, !1),
                    document.removeEventListener("keyup", {}, !1),
                    (u = {});
            }),
                (e.settings = function (t) {
                    e.destroy(), (u = t), (l = d(l, t || {}));
                }),
                f(
                    {
                        info: { color: "blue", icon: "ico-info" },
                        success: { color: "green", icon: "ico-success" },
                        warning: { color: "orange", icon: "ico-warning" },
                        error: { color: "red", icon: "ico-error" },
                        question: { color: "yellow", icon: "ico-question" },
                    },
                    function (t, n) {
                        e[n] = function (e) {
                            var n = d(u, e || {});
                            (n = d(t, n || {})), this.show(n);
                        };
                    }
                ),
                (e.progress = function (t, e, i) {
                    var r = this,
                        o = d(r.settings, e || {}),
                        a = t.querySelector("." + n + "-progressbar div");
                    return {
                        start: function () {
                            null !== a && ((a.style.transition = "width " + o.timeout + "ms " + o.progressBarEasing), (a.style.width = "0%")),
                                (o.TIME.START = new Date().getTime()),
                                (o.TIME.END = o.TIME.START + o.timeout),
                                (o.TIME.TIMER = setTimeout(function () {
                                    clearTimeout(o.TIME.TIMER), t.classList.contains(n + "-closing") || (r.hide(t, o, "timeout"), "function" == typeof i && i.apply(r));
                                }, o.timeout));
                        },
                        pause: function () {
                            if (((o.TIME.REMAINING = o.TIME.END - new Date().getTime()), clearTimeout(o.TIME.TIMER), null !== a)) {
                                var t = window.getComputedStyle(a).getPropertyValue("width");
                                (a.style.transition = "none"), (a.style.width = t);
                            }
                            "function" == typeof i &&
                            setTimeout(function () {
                                i.apply(r);
                            }, 10);
                        },
                        resume: function () {
                            null !== a && ((a.style.transition = "width " + o.TIME.REMAINING + "ms " + o.progressBarEasing), (a.style.width = "0%")),
                                (o.TIME.END = new Date().getTime() + o.TIME.REMAINING),
                                (o.TIME.TIMER = setTimeout(function () {
                                    clearTimeout(o.TIME.TIMER), t.classList.contains(n + "-closing") || (r.hide(t, o, "timeout"), "function" == typeof i && i.apply(r));
                                }, o.TIME.REMAINING));
                        },
                        reset: function () {
                            clearTimeout(o.TIME.TIMER),
                            null !== a && ((a.style.transition = "none"), (a.style.width = "100%")),
                            "function" == typeof i &&
                            setTimeout(function () {
                                i.apply(r);
                            }, 10);
                        },
                    };
                }),
                (e.hide = function (t, e, r) {
                    var o = d(this.settings, e || {});
                    (r = r || null),
                    "object" != typeof t && (t = document.querySelector(t)),
                        t.classList.add(n + "-closing"),
                        (o.closedBy = r),
                        (o.REF = t.getAttribute("data-iziToast-ref")),
                        (function () {
                            var t = document.querySelector("." + n + "-overlay");
                            if (null !== t) {
                                var e = t.getAttribute("data-iziToast-ref"),
                                    i = (e = e.split(",")).indexOf(o.REF);
                                -1 !== i && e.splice(i, 1),
                                    t.setAttribute("data-iziToast-ref", e.join()),
                                0 === e.length &&
                                (t.classList.remove("fadeIn"),
                                    t.classList.add("fadeOut"),
                                    setTimeout(function () {
                                        t.remove();
                                    }, 700));
                            }
                        })(),
                    (o.transitionIn || o.transitionInMobile) && (t.classList.remove(o.transitionIn), t.classList.remove(o.transitionInMobile)),
                        i || window.innerWidth <= 568 ? o.transitionOutMobile && t.classList.add(o.transitionOutMobile) : o.transitionOut && t.classList.add(o.transitionOut);
                    var a = t.parentNode.offsetHeight;
                    (t.parentNode.style.height = a + "px"), (t.style.pointerEvents = "none"), (!i || window.innerWidth > 568) && (t.parentNode.style.transitionDelay = "0.2s");
                    try {
                        o.closedBy = r;
                        var s = new CustomEvent(n + "-closing", { detail: o, bubbles: !0, cancelable: !0 });
                        document.dispatchEvent(s);
                    } catch (t) {
                        console.warn(t);
                    }
                    setTimeout(function () {
                        (t.parentNode.style.height = "0px"),
                            (t.parentNode.style.overflow = ""),
                            setTimeout(function () {
                                t.parentNode.remove();
                                try {
                                    o.closedBy = r;
                                    var e = new CustomEvent(n + "-closed", { detail: o, bubbles: !0, cancelable: !0 });
                                    document.dispatchEvent(e);
                                } catch (t) {
                                    console.warn(t);
                                }
                                void 0 !== o.onClosed && o.onClosed.apply(null, [o, t, r]);
                            }, 1e3);
                    }, 200),
                    void 0 !== o.onClosing && o.onClosing.apply(null, [o, t, r]);
                }),
                (e.show = function (t) {
                    var e = this,
                        r = d(u, t || {});
                    if ((((r = d(l, r)).TIME = {}), r.toastOnce && r.id && document.querySelectorAll("." + n + "#" + r.id).length > 0)) return !1;
                    r.REF = new Date().getTime() + Math.floor(1e7 * Math.random() + 1);
                    var o = {
                        body: document.querySelector("body"),
                        overlay: document.createElement("div"),
                        toast: document.createElement("div"),
                        toastBody: document.createElement("div"),
                        toastTexts: document.createElement("div"),
                        toastCapsule: document.createElement("div"),
                        icon: document.createElement("i"),
                        cover: document.createElement("div"),
                        buttons: document.createElement("div"),
                        wrapper: null,
                    };
                    o.toast.setAttribute("data-iziToast-ref", r.REF),
                        o.toast.appendChild(o.toastBody),
                        o.toastCapsule.appendChild(o.toast),
                        (function () {
                            if (
                                (o.toast.classList.add(n),
                                    o.toast.classList.add(n + "-opening"),
                                    o.toastCapsule.classList.add(n + "-capsule"),
                                    o.toastBody.classList.add(n + "-body"),
                                    o.toastTexts.classList.add(n + "-texts"),
                                    i || window.innerWidth <= 568 ? r.transitionInMobile && o.toast.classList.add(r.transitionInMobile) : r.transitionIn && o.toast.classList.add(r.transitionIn),
                                    r.class)
                            ) {
                                var t = r.class.split(" ");
                                f(t, function (t, e) {
                                    o.toast.classList.add(t);
                                });
                            }
                            var e;
                            r.id && (o.toast.id = r.id),
                            r.rtl && o.toast.classList.add(n + "-rtl"),
                            r.layout > 1 && o.toast.classList.add(n + "-layout" + r.layout),
                            r.balloon && o.toast.classList.add(n + "-balloon"),
                            r.maxWidth && (isNaN(r.maxWidth) ? (o.toast.style.maxWidth = r.maxWidth) : (o.toast.style.maxWidth = r.maxWidth + "px")),
                            ("" === r.theme && "light" === r.theme) || o.toast.classList.add(n + "-theme-" + r.theme),
                            r.color && ("#" == (e = r.color).substring(0, 1) || "rgb" == e.substring(0, 3) || "hsl" == e.substring(0, 3) ? (o.toast.style.background = r.color) : o.toast.classList.add(n + "-color-" + r.color)),
                            r.backgroundColor && ((o.toast.style.background = r.backgroundColor), r.balloon && (o.toast.style.borderColor = r.backgroundColor));
                        })(),
                    r.image &&
                    (o.cover.classList.add(n + "-cover"),
                        (o.cover.style.width = r.imageWidth + "px"),
                        (function (t) {
                            try {
                                return btoa(atob(t)) == t;
                            } catch (t) {
                                return !1;
                            }
                        })(r.image.replace(/ /g, ""))
                            ? (o.cover.style.backgroundImage = "url(data:image/png;base64," + r.image.replace(/ /g, "") + ")")
                            : (o.cover.style.backgroundImage = "url(" + r.image + ")"),
                        r.rtl ? (o.toastBody.style.marginRight = r.imageWidth + 10 + "px") : (o.toastBody.style.marginLeft = r.imageWidth + 10 + "px"),
                        o.toast.appendChild(o.cover)),
                        r.close
                            ? ((o.buttonClose = document.createElement("button")),
                                o.buttonClose.classList.add(n + "-close"),
                                o.buttonClose.addEventListener("click", function (t) {
                                    t.target, e.hide(o.toast, r, "button");
                                }),
                                o.toast.appendChild(o.buttonClose))
                            : r.rtl
                            ? (o.toast.style.paddingLeft = "20px")
                            : (o.toast.style.paddingRight = "20px"),
                    r.timeout &&
                    (r.progressBar &&
                    ((o.progressBar = document.createElement("div")),
                        (o.progressBarDiv = document.createElement("div")),
                        o.progressBar.classList.add(n + "-progressbar"),
                        (o.progressBarDiv.style.background = r.progressBarColor),
                        o.progressBar.appendChild(o.progressBarDiv),
                        o.toast.appendChild(o.progressBar)),
                    r.pauseOnHover &&
                    !r.resetOnHover &&
                    (o.toast.addEventListener("mouseenter", function (t) {
                        this.classList.add(n + "-paused"), e.progress(o.toast, r).pause();
                    }),
                        o.toast.addEventListener("mouseleave", function (t) {
                            this.classList.remove(n + "-paused"), e.progress(o.toast, r).resume();
                        })),
                    r.resetOnHover &&
                    (o.toast.addEventListener("mouseenter", function (t) {
                        this.classList.add(n + "-reseted"), e.progress(o.toast, r).reset();
                    }),
                        o.toast.addEventListener("mouseleave", function (t) {
                            this.classList.remove(n + "-reseted"), e.progress(o.toast, r).start();
                        }))),
                    r.icon &&
                    (o.icon.setAttribute("class", n + "-icon " + r.icon),
                    r.iconText && o.icon.appendChild(document.createTextNode(r.iconText)),
                        r.rtl ? (o.toastBody.style.paddingRight = "33px") : (o.toastBody.style.paddingLeft = "33px"),
                    r.iconColor && (o.icon.style.color = r.iconColor),
                        o.toastBody.appendChild(o.icon)),
                    r.title.length > 0 &&
                    ((o.strong = document.createElement("strong")),
                        o.strong.classList.add(n + "-title"),
                        o.strong.appendChild(h(r.title)),
                        o.toastTexts.appendChild(o.strong),
                    r.titleColor && (o.strong.style.color = r.titleColor),
                    r.titleSize && (isNaN(r.titleSize) ? (o.strong.style.fontSize = r.titleSize) : (o.strong.style.fontSize = r.titleSize + "px")),
                    r.titleLineHeight && (isNaN(r.titleSize) ? (o.strong.style.lineHeight = r.titleLineHeight) : (o.strong.style.lineHeight = r.titleLineHeight + "px"))),
                    r.message.length > 0 &&
                    ((o.p = document.createElement("p")),
                        o.p.classList.add(n + "-message"),
                        o.p.appendChild(h(r.message)),
                        o.toastTexts.appendChild(o.p),
                    r.messageColor && (o.p.style.color = r.messageColor),
                    r.messageSize && (isNaN(r.titleSize) ? (o.p.style.fontSize = r.messageSize) : (o.p.style.fontSize = r.messageSize + "px")),
                    r.messageLineHeight && (isNaN(r.titleSize) ? (o.p.style.lineHeight = r.messageLineHeight) : (o.p.style.lineHeight = r.messageLineHeight + "px"))),
                    r.title.length > 0 && r.message.length > 0 && (r.rtl ? (o.strong.style.marginLeft = "10px") : 2 === r.layout || r.rtl || (o.strong.style.marginRight = "10px")),
                        o.toastBody.appendChild(o.toastTexts),
                    r.buttons.length > 0 &&
                    (o.buttons.classList.add(n + "-buttons"),
                    r.title.length > 0 && 0 === r.message.length && (r.rtl ? (o.strong.style.marginLeft = "15px") : (o.strong.style.marginRight = "15px")),
                    r.message.length > 0 && (r.rtl ? (o.p.style.marginLeft = "15px") : (o.p.style.marginRight = "15px"), (o.p.style.marginBottom = "0")),
                        f(r.buttons, function (t, i) {
                            o.buttons.appendChild(h(t[0]));
                            var r = o.buttons.childNodes;
                            r[i].classList.add(n + "-buttons-child"),
                            t[2] &&
                            setTimeout(function () {
                                r[i].focus();
                            }, 300),
                                r[i].addEventListener("click", function (n) {
                                    return n.preventDefault(), (0, t[1])(e, o.toast);
                                });
                        })),
                        o.toastBody.appendChild(o.buttons),
                        (o.toastCapsule.style.visibility = "hidden"),
                        setTimeout(function () {
                            var t = o.toast.offsetHeight,
                                n = o.toast.currentStyle || window.getComputedStyle(o.toast),
                                i = n.marginTop;
                            (i = i.split("px")), (i = parseInt(i[0]));
                            var a = n.marginBottom;
                            (a = a.split("px")),
                                (a = parseInt(a[0])),
                                (o.toastCapsule.style.visibility = ""),
                                (o.toastCapsule.style.height = t + a + i + "px"),
                                setTimeout(function () {
                                    (o.toastCapsule.style.height = "auto"), r.target && (o.toastCapsule.style.overflow = "visible");
                                }, 500),
                            r.timeout && e.progress(o.toast, r).start();
                        }, 100),
                        (function () {
                            var t = r.position;
                            if (r.target)
                                (o.wrapper = document.querySelector(r.target)), o.wrapper.classList.add(n + "-target"), r.targetFirst ? o.wrapper.insertBefore(o.toastCapsule, o.wrapper.firstChild) : o.wrapper.appendChild(o.toastCapsule);
                            else {
                                if (-1 == s.indexOf(r.position)) return void console.warn("[" + n + "] Incorrect position.\nIt can be › " + s);
                                (t =
                                    i || window.innerWidth <= 568
                                        ? "bottomLeft" == r.position || "bottomRight" == r.position || "bottomCenter" == r.position
                                        ? n + "-wrapper-bottomCenter"
                                        : "topLeft" == r.position || "topRight" == r.position || "topCenter" == r.position
                                            ? n + "-wrapper-topCenter"
                                            : n + "-wrapper-center"
                                        : n + "-wrapper-" + t),
                                    (o.wrapper = document.querySelector("." + n + "-wrapper." + t)),
                                o.wrapper || ((o.wrapper = document.createElement("div")), o.wrapper.classList.add(n + "-wrapper"), o.wrapper.classList.add(t), document.body.appendChild(o.wrapper)),
                                    "topLeft" == r.position || "topCenter" == r.position || "topRight" == r.position ? o.wrapper.insertBefore(o.toastCapsule, o.wrapper.firstChild) : o.wrapper.appendChild(o.toastCapsule);
                            }
                            isNaN(r.zindex) ? console.warn("[" + n + "] Invalid zIndex.") : (o.wrapper.style.zIndex = r.zindex);
                        })(),
                    r.overlay &&
                    (null !== document.querySelector("." + n + "-overlay.fadeIn")
                        ? ((o.overlay = document.querySelector("." + n + "-overlay")),
                            o.overlay.setAttribute("data-iziToast-ref", o.overlay.getAttribute("data-iziToast-ref") + "," + r.REF),
                        isNaN(r.zindex) || null === r.zindex || (o.overlay.style.zIndex = r.zindex - 1))
                        : (o.overlay.classList.add(n + "-overlay"),
                            o.overlay.classList.add("fadeIn"),
                            (o.overlay.style.background = r.overlayColor),
                            o.overlay.setAttribute("data-iziToast-ref", r.REF),
                        isNaN(r.zindex) || null === r.zindex || (o.overlay.style.zIndex = r.zindex - 1),
                            document.querySelector("body").appendChild(o.overlay)),
                        r.overlayClose
                            ? (o.overlay.removeEventListener("click", {}),
                                o.overlay.addEventListener("click", function (t) {
                                    e.hide(o.toast, r, "overlay");
                                }))
                            : o.overlay.removeEventListener("click", {})),
                        (function () {
                            if (r.animateInside) {
                                o.toast.classList.add(n + "-animateInside");
                                var t = [200, 100, 300];
                                if (
                                    ("bounceInLeft" == r.transitionIn && (t = [400, 200, 400]),
                                    r.title.length > 0 &&
                                    setTimeout(function () {
                                        o.strong.classList.add("slideIn");
                                    }, t[0]),
                                    r.message.length > 0 &&
                                    setTimeout(function () {
                                        o.p.classList.add("slideIn");
                                    }, t[1]),
                                    r.icon &&
                                    setTimeout(function () {
                                        o.icon.classList.add("revealIn");
                                    }, t[2]),
                                    r.buttons.length > 0 && o.buttons)
                                ) {
                                    var e = 150;
                                    f(o.buttons.childNodes, function (t, n) {
                                        setTimeout(function () {
                                            t.classList.add("revealIn");
                                        }, e),
                                            (e += 150);
                                    });
                                }
                            }
                        })(),
                        r.onOpening.apply(null, [r, o.toast]);
                    try {
                        var c = new CustomEvent(n + "-opening", { detail: r, bubbles: !0, cancelable: !0 });
                        document.dispatchEvent(c);
                    } catch (t) {
                        console.warn(t);
                    }
                    setTimeout(function () {
                        o.toast.classList.remove(n + "-opening"), o.toast.classList.add(n + "-opened");
                        try {
                            var t = new CustomEvent(n + "-opened", { detail: r, bubbles: !0, cancelable: !0 });
                            document.dispatchEvent(t);
                        } catch (t) {
                            console.warn(t);
                        }
                        r.onOpened.apply(null, [r, o.toast]);
                    }, 1e3),
                    r.drag &&
                    (a
                        ? (o.toast.addEventListener(
                            "touchstart",
                            function (t) {
                                p.startMoving(this, e, r, t);
                            },
                            !1
                        ),
                            o.toast.addEventListener(
                                "touchend",
                                function (t) {
                                    p.stopMoving(this, t);
                                },
                                !1
                            ))
                        : (o.toast.addEventListener(
                            "mousedown",
                            function (t) {
                                t.preventDefault(), p.startMoving(this, e, r, t);
                            },
                            !1
                        ),
                            o.toast.addEventListener(
                                "mouseup",
                                function (t) {
                                    t.preventDefault(), p.stopMoving(this, t);
                                },
                                !1
                            ))),
                    r.closeOnEscape &&
                    document.addEventListener("keyup", function (t) {
                        27 == (t = t || window.event).keyCode && e.hide(o.toast, r, "esc");
                    }),
                        (e.toast = o.toast);
                }),
                e
        );
    });
var app = angular.module("MyBtns", ["ngAnimate"]);
app.controller("PlayerController", [
    "$scope",
    "$timeout",
    function (t, e) {
        (t.btnsjson = [[{ text: "", url: "" }]]),
            (t.isChecked = []),
            (t.isChecked[0] = "inputs uk-form-row uk-width-1-1"),
            (t.removeBtn = function (e) {
                if (((t.this_el = e.currentTarget), ($name = e.target.getAttribute("data_index")), ($array_in_first = $name.split(" ")), t.btnsjson[$array_in_first[0]].length > 1))
                    t.btnsjson[$array_in_first[0]].splice($array_in_first[1], 1), ($count = t.btnsjson[$array_in_first[0]].length), (t.isChecked[$array_in_first[0]] = "inputs uk-form-row uk-width-1-" + $count);
                else if (0 != $array_in_first[0] && 1 == t.btnsjson[$array_in_first[0]].length) {
                    if (void 0 !== t.isChecked[Number($array_in_first[0]) + 1]) for ($i = $array_in_first[0]; void 0 !== t.isChecked[Number($i) + 1]; ) (t.isChecked[$i] = t.isChecked[Number($i) + 1]), ($i = Number($i) + 1);
                    t.btnsjson.splice($array_in_first[0], 1);
                } else iziToast.error({ timeout: 3500, title: "خطا", message: "این دکمه به صورت پیش فرض اضافه شده و قابل حذف کردن نیست!", position: "bottomCenter", rtl: !0 });
            }),
            (t.ArrayClear = function () {
                (t.btnsjson = [[{ text: "", url: "" }]]), (t.isChecked = []), (t.isChecked[0] = "inputs uk-form-row uk-width-1-1");
            }),
            (t.addBtn = function (n) {
                (t.this_el = n.currentTarget),
                    ($name = n.target.getAttribute("data_index")),
                null === $name && ($name = $(n.target).parent()[0].getAttribute("data_index")),
                null === $name && iziToast.error({ timeout: 3e3, title: "خطا", message: "مشکلی در برنامه به وجود آمده است!", position: "bottomCenter", rtl: !0 });
                var i = "";
                if ("r" == $name[0]) {
                    if (((i = $name.replace("r ", "")), "r", !(t.btnsjson[i].length + 1 <= 6))) return void iziToast.error({ timeout: 3e3, title: "خطا", message: "در هر ردیف فقط 6 دکمه قابل ایجاد است.", position: "bottomCenter", rtl: !0 });
                    t.btnsjson[i].push({ text: "", url: "" }), ($count = t.btnsjson[i].length), (t.isChecked[i] = "inputs uk-form-row uk-width-1-" + $count);
                }
                if ("l" == $name[0]) {
                    if (((i = $name.replace("l ", "")), "l", !(t.btnsjson[i].length + 1 <= 6))) return void iziToast.error({ timeout: 3e3, title: "خطا", message: "در هر ردیف فقط 6 دکمه قابل ایجاد است.", position: "bottomCenter", rtl: !0 });
                    t.btnsjson[i].unshift({ text: "", url: "" }), ($count = t.btnsjson[i].length), (t.isChecked[i] = "inputs uk-form-row uk-width-1-" + $count);
                }
                "b" == $name[0] && ((i = $name.replace("b ", "")), "b", t.btnsjson.push([{ text: "", url: "" }]), (t.isChecked[t.btnsjson.length - 1] = "inputs uk-form-row uk-width-1-1")), e(function () {}, 0.001);
            }),
            (t.getJson = function () {
                var e = angular.toJson(t.btnsjson);
                (e = angular.fromJson(e)), ($must_be_delete = []);
                for (var n = 0; n <= e.length - 1; n++)
                    if (e[n].length > 0) {
                        for (var i = 0; i < e[n].length; i++)
                            if ("" === e[n][i].text) (e[n][i].text = i), $must_be_delete.push(n + " " + i);
                            else if ("" == e[n][i].url || 0 === e[n][i].url.length || null === e[n][i].url.length)
                                return iziToast.error({ timeout: 3500, title: "خطا", message: "یکی از لینک های دکمه های ساخته شده معتبر نیست!", position: "bottomCenter", rtl: !0 });
                        0 === e[n].length && e.splice(n, 1);
                    }
                for (n = $must_be_delete.length; n--; ) ($array_in_first = $must_be_delete[n].split(" ")), e[$array_in_first[0]].splice($array_in_first[1], 1);
                var r = "";
                if ((($NoBtn = !0), e.length > 0)) {
                    for (n = 0; n < e.length; n++)
                        if (e[n].length > 0) {
                            ($NoBtn = !1), (r += "\n");
                            for (i = 0; i < e[n].length; i++) e[n][i].text.length > 0 && (r += e[n][i].url + "," + e[n][i].text), e[n].length - 1 > i && "" != e[n][i + 1].text && null !== e[n][i + 1].text && (r += "-");
                        }
                    if (0 != $NoBtn) return iziToast.error({ timeout: 3500, title: "خطا", message: "دکمه ای طراحی نشده!", position: "bottomCenter", rtl: !0 });
                    (r = "=={" + r + "\n}==").replace(/\n\n/g, ""), $("#CodeHere").val(r), (t.CodeHere = r), UIkit.modal("#modal", { center: !0 }).show();
                }
            }),
            (t.CopyTheCode = function () {
                var e = document.createElement("textarea");
                document.body.appendChild(e), (e.value = t.CodeHere), e.focus(), e.select(), document.execCommand("Copy"), e.remove(), iziToast.success({ timeout: 3500, title: "کپی شد!", message: "", position: "bottomCenter", rtl: !0 });
            }),
            (t.editText = function (t, e) {
                alert(e);
            });
    },
]);
